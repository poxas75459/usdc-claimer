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
    "3BURtXoudkvfD5y7Q4ndcBsfYk9tKNkZpJqeouqX7MF5s3KJSskdKNvdzjcs7s3Bm5YFKoqreFEcL3P3YbvRaz4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWhWdo5QhRg3cxUz9JN84xybhFj5oGPcmMFiQpFF4vnXaXCwTLMk6JTQQcgwSTMFJZvg2Xwf8m8HNogE37jjMBf",
  "key1": "5yrjQCR4fopmkKAHpzotTy9sqajA7qanVnGMQH4brvBuumq1jnhRDZb7qDNtcr9qqvZ2ZuV5bubUZzuRbXdPhuL5",
  "key2": "3gNqHaPDmbwFQsGmKcVJhGykQRH9GWknzC1fbxh1D5dpYLoMgt7Nf9fuEhJxQNhYH61WPw7AAwkBaQcjLWr6Cz6z",
  "key3": "5dwqWr6NEspYrJkQ3xHu2adT1P4U5Qp9Mq9Mv5NegWSbXMDRxGVWaAATbM8QqwurzPbUMu5qrk6q9FHieELQoTzS",
  "key4": "2zep6tKWYHAq6CanSbiCfXq3Lm9rLBbhwrVdx9DD3V9nU95UZ2bBJkP5q51zsBoPSHG9NnQqPcGcKmNfVg2V8gSG",
  "key5": "3PrZyFttR5dfE2AygVkUYe8F2p71F5WfTDqtefqgbYvfF96eos2iRWhXSQrMd6HqhXbx4VDU3smk6ML3R4VySq8h",
  "key6": "4bDPJAoQsuEkMJ1CBTAN7JUkrK8r8qyffgoi83cYJLV1nBJygfWZNDiMLooUSt4LfXX2eqbYVmUwwrMKqBaC4DQo",
  "key7": "RPFe4VdwB8sk3zRKJEbmChjT1nCuQynRcKtzN8aXiAxU3b2buejJTzjoHLZZA6qkqAPTfuqbEN2QkMCxWKwb7Zh",
  "key8": "44iMU8KF99HNJ6jhUBKxfYHLobP7pbkk2VGL34mQPNvS6dHFEmGrgQnH9DJTvBwbSfGtQ26mHLzohWw67VhEGAQm",
  "key9": "415zsHozyGYgbfj6G4oxrbfWR65zGQdXJd3MHvv2Gg5m2mpMyxCMvNFZCMNiLfMxgFQwD3pNos8ezro7eXMfaEFU",
  "key10": "62gt9NmWeuRPBd5z6hdQvban4HLrdqhKiWdBouUuGkKhE6EpgCzgMhngMzPXuBYHc1huDzmtmsWTvJFwhuzemyni",
  "key11": "M3kQcA5Y4r6tgGpRXDcDZqjLC2NyZD45P8qHwjvBQ467YasmuwsUHWhASUxCkPrrva6FqrJr8nww3w8hwrEQP3t",
  "key12": "2D1sKeDVEHHGDaH5p83yGdBqTywh9DTvZXnxvLe7rMcV7epdRERMSqJrA9dS9dSB6Cegh2dZe663cKKcR7DFTz3T",
  "key13": "2XCdm22c2zrCEJgwnictvyZBgN2PdGfe7AvPaV4NaJidgcfvSEhL5JTdFPx6z3X2auH7G5nFNDwBF8HFtxF1DKkW",
  "key14": "67kRTEfDDCPXchJnZbFyFGcYzgsAMwmoVy8JVczoehfAiGU3BEAyq3nXSjHfBvD2V5MzaBmDTWzJUj7W69MmUJ3x",
  "key15": "YfGon9uCS2YV5cRvGEBfc2tBGPQgDPC6NWLryMV9gLghh6bngSoXJ9QcnoBuT4MjzvffiPEAbThQbzQRuhUAczk",
  "key16": "2X2AeGhouCvFyzwjTn6QiJ9Rjndy7UQ5ULeeZmD4reUCvRwdxWq7mw4Ln5vU4URFobUd28rMtyKgAkbRhLHkk3Fr",
  "key17": "2rLChsYv5tdUdacx2Q4zhVBt72NzReBNLZwjhGYWaJTNwJQrE8Xp9c7sqRh4Zipfx5aSFAufBK6YHBy2TV3UFzdJ",
  "key18": "2qhgBwMBA6kCVpFvnA34S88WdXcx1qtQB1n6Ujyzx56FxwT2fXsSGDWfTqBdPAaZSHac34GTE3nL7A26b3roLjvi",
  "key19": "b63JjejJ8m6i8Mvg8dwJ3rToawqKVEeAj2V6nauHeEnnJoMcTcdGsMdVTZwx4Hg8jsuh2NMCciWVkrbn4r9s4p5",
  "key20": "3FWNugTpVZQVA2A7PdgEzVJJsjzyfudyg7p42rrzvVS7KsPoczUdu8EHg8NVxHVYeDjS6DpjAEymSe6GqNNBx7SN",
  "key21": "4cSDDiwSN71MQXsFQiibpvLuBxB1V2AA2kdW4KA8w3FWaqSCftSvQkHt1mwFhRN18gYWE3pufuqNFDkaKo4RptjT",
  "key22": "ZGfUKY1sBQmkqMv6FDBBznjMvdKzD6LbTgPMcPWsoaiUBUdwZM8Bj11AsNgftoHyBZwsVac8N9yG14GFmhEozbP",
  "key23": "417iyTpLo96ng3y2EiYbsHMfzAAxoX3EA6VnLdCFMP4yYqu6v764SauyXa8uS89iXG2azcTNdHzqFwAKQ9JAQ43d",
  "key24": "3sZ9eDALpjXEhs8STJvQD58MK77FbARVshytDMrpo396Ay5zGDQmgcnXoEP5hUfXWd2MS1gnChhgMQYJvEQvA72x",
  "key25": "4iYLogBfX9qrMjCVcj84iHbBvNSsvrizeDMx4ZRrXQQ8Jyw6TPavBomUsD54XFwDh42f15rvj14MttqU2tB3y9r",
  "key26": "4eoypskuKmc4iWBufzGRxrBH1fPHHTPsu9UtGLrSrm1bzGFzrbtQQygBcPyPNG3FfBFgNGbqmd6tRNav3CTbjcvJ",
  "key27": "41gdFCJ3GBg81QM1AEDtdzSQivznYKaUTKnM9KraixuS3AqDQwYv7mfN4yxoZ9aHSzfnNtAmN2qUPK1kHFUZU4NP"
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
