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
    "3rvpLUor3pdDyoVQdDdgWigekgS7NvuAqv3YAQ9XvuXeQ5YJPEZa8PZuyg914DRYDxaW9E582aZwe1zTWdDNcmVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3STJmzQS8V2xBcnZ1QAEoaAjuqxNoyPV2oZSZgQKovSEBmdK4hm76cnHDNVbpnbcL2whbQ818nHMt5WyY7CJAHKH",
  "key1": "2vXNeztE2DFJs9uk4oVVcvQjaEHiyzFbE1hZKX6Y61nfyJ28j3db48nMc7zcoeFx5pA6pxjLsJdcwzjQ4Ki4NTFS",
  "key2": "65tC37V2GFSitchwp8F43v1qH4zqBa7VNLXto1k6KVQqgHCMokdPMwq5HDKu9oWMXTaEAPVNtpkkn66R1mUZsAYE",
  "key3": "5ZvqR6tGCX5dSbxU9NWZa1LRwmysFadvbTnZtkNyApeCy5TLC5rB5Di6fY8vd46jt9YyWd8htQYfVpAnUEXCqtV2",
  "key4": "41K6FXgWxpCEK2iUQoPgSgsmKUTLYT7NHZmxPfYoxm3XwmMkUjb6GDQsChCbvrMgs7Zf784t8rhvQjKyRVWXyfa6",
  "key5": "3tdLRaJkYr9NEaJJG7hgkhH2mMRvdQs2k1XJv7xx9Tqao9iViZuBpxAiHNg8EiAkuzbfE62QtBR8enSGK3DKEr7G",
  "key6": "5nBNCHrEMN5iesoBckD98qSyMJAnVm3Af4ThTDApMPAC6UHwjw7TSo5BP3qLF93AoUTTQgJ79pdr4wBioR93iqbR",
  "key7": "4F5erJ4FZNQV9dRS5Die8Jcpmcj7Rq2g3ZeBmoBuS2FdgjmBsEaHhfyf1bpcAe2XkNwW9hJeBMSG1ewP7y1yu8T",
  "key8": "2tpJPSWTbQkJdP2euoX3tesCUPCQMjPF1dsLnBvyU2bXdPf5bps2CeaAWUnhDJwbijkK5EgdW2Y4s3Z3dk11K2Vr",
  "key9": "5r6AE8zomp6LF5MXPCCtWGCqNhntoNPxtNEx82qGUjxbBwoqx5BsWcoG7NrkCLFKFuTCJGSbFft8kXgM1uaQWWUx",
  "key10": "44Q1uXyGKXVWN9tDjoFNHB3w1ZD3hpQgQVw6pjY8YfYLP8tsotCKLvjtDMrdDZBKk26ASM1AXcWSenRuFynuhgCL",
  "key11": "3ma8M4c72wsQ8c9irGMq91c5A2kTtwuQgMtpzQ2fF6FggNvNn165LPNajaTpg7Khkvje25m9C5BbSCaNombbcULx",
  "key12": "33Z4D3fLNFFFW6WyytET268jPARWQkdVhHp8yBsyS2tfc4kntGUeQ7QkGb9BH7BRHWKsXaQMevg8B3ZWxqu5diGD",
  "key13": "45CdAqf43xwcTcQZW73WMXdPF8WZakQMFKA3hhgJfgGpazGFtFy2WnGf12asvcEYBaZyq5XjjFAZdDY87DrGLFER",
  "key14": "4XJpZyeW2XtyPPmaWRP26fHwNRQurC7zWcUL3JbZcRbB4RaVYKz62844ijK4WgYWAF7JXLK16HR9fgtCYqY5EFjD",
  "key15": "wvXyZGyBLcXGNH7vAMfCVFjw7iSGSvkpgNWpEH3CBnzn4pLmTTRAKi2Zmd4cda4LBgRgfT7nxUAc3f6YXQucdoe",
  "key16": "5Lkywg7FQ9WPBi9tPbWkZtRrkJLp8fsS1DvfRsmTgm9LSiLukEKTcMvFmXkY4prz3dpmMLCpdcSBhj52ReogTDvc",
  "key17": "cZ7VAfYpbdWsiRWARi9qoWDwj5QvabGRS2kFtDPCt3YngaBAcPecW71fp3ReTKrWViwzARvLNFQuBPG89V2fLR6",
  "key18": "3SEBQBuGwNZHg5aMAdXJEH57ETZ2wKcuVyhcd4M5KUg4xmtJ11Fddy9k3mo1wFMFShS7TzAShdcegSz7K4UdCqSq",
  "key19": "2spQgx6gCggjWKQQzJTkYHrmbLmb1hYQfX2W6GBor7hcQbZSgkQjsiboh9wJmncYzpstZUHbcC1am3iWyQa9js9d",
  "key20": "4AuE37zinsHhfmTPc6KgZDbxySySHbYSHLZ9MyJhhdFnHzhR6d7D5rfY15ExznAcowvo8kScw8eoHvuaj1exhcd3",
  "key21": "4uxAh175AY7bfSuvYmiGoM41aRAKBJR7Eb7w95pBycRHmiD317YNHTfzkEBhMeQGGzxvUNQ47yQVeaxiQe5sUe2K",
  "key22": "3HRcnULZ5f312q6LnCShws19Vx416mZa5DQdDzR55jtaSNxpL9aG11zbTSbLW7Pq2H1RoJm7m9EhbPqiNZEWU9Fn",
  "key23": "2JPef3bVb6xjjMSgTSZ8ZGNCmGYdJ21HMk9N79a6pytFv96sfZGuXsrGZ1kP4Mnrrs3Y7b79mY3YKtx639E6YYc8",
  "key24": "2kJ5C4CvuJh1YxfbuvJKuoUdGYXBrkfmzRN7pVeMrfki6fa2QituxEmUdW2xigP9Q4xsoaSNbwSzwvBBwTg7QH38",
  "key25": "A5DeQR3PP8rdWh3XWryW6k7zVqvt8n4LNmDWJXE6CWrYxHHXZasmGFCDKUyeofGJADxCZK31pS1ruUCeJbfTf1k"
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
