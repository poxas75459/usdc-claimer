/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Gg1bWri8kVaXyr2SGmrXGL6B6GnWRTvsWvp65KWrFpLsamtaRUhLbAwyy9hVh5g6k99LCbo2rATw67uBGWGknZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmdJ6BzVnmYDNk2gsjg9D8pNrkXbndz8e7HSpW1hbjvR1SjS5UZrvHEMKfUJQ3QudDYwBqvMrQEapPrsiNhMrAf",
  "key1": "28QZF4V3n9iF6WEooLwBApTARC8eJQwDo4KZJFJmgKt1SnkZ1UyTEQTuTbmJeeCvJ98NyF3PNG1VrQthKxjyfCw5",
  "key2": "2HbRDRRWHKBHt4dfjGyMnTPHpM29ivTVmr75WXwwQAKDMi2Ujk3JwXWFLapupE9RJwyeZasRKC19Ys5kPdWCZDUy",
  "key3": "4ZVaENyVHTW4x6u37zQDecrzBLZPyEnqs4hWpyzVoRpakyroNmp4m9pEkLkixupst3WsVonWZP2oc2md4t12daCm",
  "key4": "3P8ep5QjAtKVhVUT4yxTUuNsQw1MAFxW4HAvcZhQFAPxHWXc5mcJBCnKuXLwRJ7R4htzZzqryBMYyLDXPark3sJa",
  "key5": "2a2wTadXuySFukqqRHH6FCvuVsMS59HruCejbBb3oq99My4JR6bUMPA3W5fGofrCETin1DYFDySgZsJe1UvA1qzT",
  "key6": "HiYe1TbBmvVawY2pyYvA5WH9NwH9xpANmeyQdEVnBmwh2MkKURvak6V1zF5qCNAU1D6vp4fWiVueKJmDeoWwt8P",
  "key7": "3zzodb5pPqoe8QyqSUyZvSAdU23TBJKKmpAk9nMBt45jVZ9rsFi3wsikJiR41Z2kDJrDT2o3ETdgB6xiFfbPKMYP",
  "key8": "3wEKGQ85zZ5aVvGUauxeVDbjVHX4HGzJWcPBBhEEuGEg6zwJiKGnWSNjwcHAp9WFR498rAbew8gvzGfbjrFbHyzy",
  "key9": "6DcqzhMcQpudE3RRB3ND9yTDhafpDLpYrUmVKvqpJx6wVgFmyUkuZrxNt7ivu8e1Uv7ewkqJQ8XVdGqBQwBXTkx",
  "key10": "5qUsZjdpDsQJcKvoXuZvNcGMLH3bhKWsLLGzLugrBLJrXL3T1wmLwVJ2PGYZAC2AU1TXZtWaaDWkQ1XsXEvEKQjU",
  "key11": "3ejAXqgEMGmH7Wr7FAdZ64mBXEi6iiuc3BnRkddd2xd3mQzZvWoRdyxFmKVGiZAvw8uKWpweD4hw347QA481ZaKX",
  "key12": "Zggq3hzx5QmSxjAX2P6cxRdx5ChqxLm35C2bsV6N6qxpszHVngupM3Yp2WApioHbCTSbT9nZSLSZidm75U3MnVD",
  "key13": "1wsXrTZH7xGS52TMtWMDPYWej9MwXJUjfPPxXk8uxefBuqUzNUy8TS1XoYUE2gwghkcnfx6sR2eMGXYrn8XdjeA",
  "key14": "64uDh5VjNSAXvcC7Q8xLuqrNkGKZEV2h3bAaHkiL7WJnNEh6gSv8WGReZxzz6rA3mvrSC98SdYcTdGWjjXkTwJCy",
  "key15": "4daRro2LgMPZnS83yhuigVugrZyyyJGbBKMBWA4CUb9wzBmE4fLc4X59H574m1LbTeLqrFu9VUzNS5QZPKZGRXg5",
  "key16": "2ezHpivv3ZDRYhh8awEK5coUbp5RvydPmXiinX3P5xoG5sxFaVSL85G4D2d14eVd6Jc99DVvRkwprCHSfyFFNcZD",
  "key17": "52ZYeB8U1Y6gNgejjQZVPPmQwUrGP3jsRKg5dryBfZ3iWxVoMYBMsNdLLEXcSxLGrvHrV9K6kgAnLCuwfkDQAEAw",
  "key18": "4J36hwzS9XYxNKwEmW9Nzi4QSfUGfK6F3aMAA5ANWgY3Yc97DSFtLRCTtkhLFY77o12m3G2efJ28iXHmp5Bpt2Sf",
  "key19": "4jkfMqhcvrsZ4f4kvu8ot3ppMMaW47eoq5Kwd6Bf8kzM8t6DR6PELZzVSa4k36Qum4Dn1Rto8RbBqen67g5Lw4n9",
  "key20": "2RNePPmN5hyPWwgKCzwJQzVc7UTgvPQQXrfSCe8N7CDoYq4uP4YUZVa3a9rXs5F7MBDDDamc995nbndfjLpgBDJ3",
  "key21": "FqdGHkx6FQ6H2fBKRgTMgF5qG82m9kSUSNxLykvXAGaz5UCrb8fSmu7gNSGXRfBGeRtpfFvabEcAehk8PuHY7Yc",
  "key22": "32oEdapjYQtwHHmFsdyA5rWosbYavALQghfCZveXjKd4cuDLBWxfXf8PotQLEgHz34E5gmWtegSTHn857K317WBD",
  "key23": "5Wmxt4QDDpVwJWpVRJAvaJ5girh9uv9Sx9cjonFJmJKS1nez3E1mUvyGqWBfkEd5p4rEL9u3JgVbb2ea49CouJD",
  "key24": "5HbwqCc2H6EDbH39CaWjzdzRS2i9Y5mCKcS2YCgHcyJyPEhq1kHEjSka4xJrvb1qBsBEP3s59eijyxihvf6oK6mR",
  "key25": "3CUcoSq2GK8N8XC1dXFAbPAQrmUt1CMSfBbku2L1tQHDzJpi1YW4caUzZDN96dCcQukBy2V4aESYdJZbaGav5B7a"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
