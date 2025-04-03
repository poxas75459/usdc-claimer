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
    "2msZKbQD9AZKPVudpbYo93kdKybWHqYt31gUKB2tt6w2zbFNEkR18qm42PHfyxxdHU68nD1js1FV7RSzJYrXaLxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAqaXU25MBJuDbWecTgZyoPV9qrnqqnMiveSkbfXD8TFQLnZGbok9UC2Ztb6Jaq3dR15S98VQnk8PBx6mqXknHZ",
  "key1": "5n6s8agM2aRmsb1yrVC3ia2smpdKrTRdjbbnKpePd1ShdFi2MQ8t23xAMAgJs67WF2sPNJN8pk3iwRfXqjjtVmGk",
  "key2": "3PQGRd78sQ2KfTCHaPua1WaLkreu2NWBm76CJSuYTkSSatcsRgXunjfLJx8WRcVYuB3KBhsXbYPxyAuvMvK7t3es",
  "key3": "5AHmYY3Ges77jGQF9DM85vsUdgi97yJHFzPtCRfXA3cwXNiBuWXTVCaVKoye34dG6Ttaf1Jd9t7e6DjgAz1cABwE",
  "key4": "5UhmFV4VygvpZzXmmKDhe5qV9kwaXcJUM2w3Y4N3bSVSVqZnq4LmExNTZG2MaaJNodMNNpwRcY9KqLqg36Xtusza",
  "key5": "sk1nsVmk1wGXhPC39EsBFeM3ZYkWbbthNfkWms3TuXCKejmsfFA3F6QXGkRrZ1b5AcXaYMdeymLUbvJ7UHJGRHU",
  "key6": "4vfpX8WNSfYpoeeL8md1idS1GwNHcg5BhgiFwwG1YiL7Uhm7SZJP3PLkVXH3nwfP6gV1CVvUhpctpvyQzgGu5ypw",
  "key7": "5aqXLnakEPh6ewEs8G6PPnFx1PndL8Wd6SaGxwdJPCuLpRmqX3aCV1ZAVQTXh4ECCgyEbMpFDkW5c31pBZSMBd4t",
  "key8": "wqXm5ARkAVU3ZmEHQXXCQZRrXm13jZFeVN6gq4wwZoJ4BP41chs54DQWMJLnsidteokTD7xFbG87wpYai6ehqtz",
  "key9": "3iMXSdgJftkw3aZKReoNqznNgd9yT82NhuWgBsLRU6ysfCAZJKnpgPqnUCDwKHBJuVEKaXFNCfLRMwuRZZsfdY8e",
  "key10": "2672Aa6MGjy3NWrm73e58Kj6ZHHafoKiupXGbCtHRN1MGwMnQLTgg4S9XxpdJwWLjTSjC3j1gu4u4esqj6uzAi8f",
  "key11": "4qHTKoFKNdytNcZ1BqRXH9bQ1m3S2VJTSSAWg8Fo8PVHzKgPQs1rW6kdWg8VMTjrzuKktw5MBPoRt5zi91eRvmjs",
  "key12": "56JkzhNFDboKmgkxoGj7ZcdpA5W82M1UnKfJ7pmnixXAwPoD62idfLQZdQa8MSEYqJP1UWZWVXubqqEPLH4JXd9n",
  "key13": "5XyHKuVTDqrtunfo9ohyMbbj4qRHULDQYa6PwC5VvXoTFkzdid4FPBwvYiB2N2tW5MZeZ4YkyM3FjhssGP8oKULC",
  "key14": "5zm4WP2agJMB3mQ5PPBfmTYDJFNFozrMNXs1Kh1UEPPVa98W6KUH9EkkaRY6ySpHqpeNJCLG4UcW46juvPPBjcXf",
  "key15": "3SZnpVzC8d6mpoS611EvDHFUvvbLxBwW4B6ivEkmCfwew21n7Gg5rMm7MGGoJqNZ5ux7t5jtGJtJD2j4CBNiGMmU",
  "key16": "2nBFrEXgUNi3NWU5TK1nw62aNCv6maP8FWeREu4AwabAxSj4ATZ881eWtEhsCg12njGJsqQyPp9F6z7SDxvscWxL",
  "key17": "WPLRRxUnagrCu1PYe7vFXawQhvEURnzbVQPnJefx2sXPfGEK6TMCqgu8awnRauAg8xrv8zGSDzV6BDG3PySz6PG",
  "key18": "3kWqabFMKiy3EZqoZtrokPv4BdQyKKXcVgJNHhQ6AwzKGsXiXXerr3WKZiVT1rxNce7mAi5UctJfBAxhJk8APUzf",
  "key19": "5oD5kU7uqaCgFpBZZ1LooqK9TsyUApXHFv9tE3MHm9HsLNNaJScyZ3vCH5zyEeTsaPXmUfJB17D1t8Y5re3cgD2d",
  "key20": "62JyqPjF9rQXgyv9VVafZHUq8vVGqdkcGtAR5dgVcZE8oJnMJRA1bZZzKYLTFodyWsLrR4f9dzY9eGB8CLULW1nt",
  "key21": "3BVXUbCruMLFaNENgNJZGfornDS52XsBXs4omUam7XDSgxWVEhzj9LpPnTtHcxp5TqrrFiogjXSdrqBXirEJMpju",
  "key22": "2VNUVmkbib4Hp1yb8eC64cKhRsVaiDkveYNG8qEvdb5hnAxoDMW6WGJM9qVZsHY3pzAbJuxkSSPSHH7gKin3xQ9D",
  "key23": "37VoWyDGfQKwq9pj22UUGS6CB6GDYGqB9xE1MRLKK24p147VapV3W6PdfeDqSzuMBuViLUNF4SnTVmirXWcNqP9F",
  "key24": "2PxivfzAutYheMGFkvnL5NmaPfXYpAhmNkNAj4Ngi1fvixbe2t7rXuyvTc6UHD5eEPhR636JKBc9CzDbPHMnk9L"
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
