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
    "4NbrpA9bVQDHiyPq4qoqBfAim3qtgYfiu2wpkBCSuR9P3RyGGB1dc9XWaecBXFPFRHaUENeRQ8wxgjwPG3fHLApK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJfTEzPXJHAfxpudVUDsEB2q2UvXJJchs1E1r9SYSAFv7k6JHDCJjmkHmN2vKJbZCM43vWUPaBf3XcTRevTJ7oG",
  "key1": "VkCwzkmGhRTKcm9Sm3yrXwQpVTLxTRdbWr4T5ibVDUmWXgYCEGk7LCatPCU6SRPDTGFZQA8SSL8abVsQSrDXR3k",
  "key2": "2JHekPZzqWMYST8m2sRHzNi42c5jD9kkidd21t26LSN7Bdg7YcDmh4Xf4YbSkzHrwfaVnr4RwBzN79ouqZJxYFPp",
  "key3": "64e7eBKj3AQSzktPZwNfjZkDYZ2FtY6gmFFj1Vef9vzD5o6aYJgoFV7niGGvna7uKUKHF5LoqTXVL33sCTSg8Rwa",
  "key4": "34iGDfZ4UNwXopzBAcCQEn7Ryco6ev56PnUCLJxeR2JsUFXDoUsDiPLA5hRDi9jfBJAe2x8nVGniEN2Ht17cQPYK",
  "key5": "5DuapLeMT9vukSVQtSNvBtZ4Xg2jb19F2dE9facieoHMw13meaf9jXFdiCmJpudL5cvHM3WQKxFgxWHpU7WnC4oi",
  "key6": "49U8SwbxtctJCiWzwFH83umiAVWEiG4T7w87GQWtoXtqngiLbRtqKUtgA85t2TAcpjJZZhBJKe8uXa3u4gghFBzM",
  "key7": "3XmQRpM6a9qgAZae1i9NkCGPwcY9foraRV9Ewzx1rgSCz9gVirqTnQwC8bcueu6J2uKnXJyfALSBQYnQVted4Ahr",
  "key8": "4AM1gpCVxEcuH9VbtTsvPjRhRZ9gBqK21Vdx7fArkUmMz199gG9mNXGLHUd5rxHD9fju5ZP12FBFUYCP2BEb9BWR",
  "key9": "bnCWVMaeZRNBr1AqC3YAnhCkE7Ags8AW6bk4WEBPdhnPoPAvEWuLpVNtRFHHAUSQsPFFNyXevutLjDW1fHRB6v7",
  "key10": "oTyAUE7hkzZtTmKF9DxwirC6tdBUdFzabVVKkL9wCzFSJz9RzsEFzXqXeVvcg2ym63pwgZ8guX3peEWr3vdwKcf",
  "key11": "3JFVZKetzAC5AEfKX3B9pUmozu3jdVHUCeikLPCVwKj2G9axVNdnwK6LTEfyiNQCWc37fecHkG53JALy1JLMQjbn",
  "key12": "41v45gRiCgqKKrZ6ThEqAZZVFfEoxxv2w5tVt4SGTPbj5pUzLk4rUi8HkwbPdWL7j93SVU2cbHhmp5S6KXcTePe4",
  "key13": "2PibPQbrpfJ2Uzp2utBBZAi9XsZKC8Q5xVGxxaGWBMzU35Lgq2JWhgvwRAH69Vxk4SPxz2ngDLLuoPXyn5gNgfwU",
  "key14": "3WxQUDPPda5mvvTYGs1YffZcwsDbEq5jBX5XXWL3oR6GTewpuMJ7bpkiffesMRYajvjH5SMs45tbYC1ZgUN98oaL",
  "key15": "WEZGcvTNSpVrfTTYoHGdfHvhPv9w3VnsByEoyycudRGns7kzwTC2p6bJpJ8MdTHvEtuaFbAxqqqLmqgBze7k2aX",
  "key16": "4JZcYu1ULUY3meSh9rfpqFksmkc8Wd5rpHpgJrhi6WisH1nSBziZ5G3KYLLrYnq3iFfd7bxasdo9aCd8GXD5pZTq",
  "key17": "3C8GLXksjQZKGGC2S9iSgh76mvKiRNsA2EPGLWYNrbuM62nKEu6mNhs2FAnmgFRHxka6KGqxdvfQTpQLyrGYbmRa",
  "key18": "3aP5nejXJzo2dDmcAVFhWpLgZqh2nq9bcVdXmyoEMpJzwTDFVtRvJxoqeFqgZeFB6j5YtzmDBdFcC6TozpxBXknx",
  "key19": "19PD6AMNEnTbytGRdGXH7vGeGX6LLFXtvDptpF4SqEYa79ymmvTkD66uzdDBFHisySMLCjhWWzCGYRGCTA7d52g",
  "key20": "3h7gpfmjP3MgFKFZt88CHYDrw7ZHj1BEmaUcpHcmwqkhSXnJbnDe83YejopxQqT3jxrKG9oQ8XxXEjffABLLjUer",
  "key21": "3Qn7wvFXDviSTuSY28nUzf2yyRZdQVN5jvdh4cr13nexGQtTMHfnmgZ1VpW1GcdHycA4fkwZKD32nhdefFB3UfCE",
  "key22": "TVsS1syWJDTjGTWQ5c227SNQdvEm83yBi7M4t3ScBjZi8t657FuNm5K2t7YRy3V6YwCLXiDQyCZ6jP3zHBZQSyG",
  "key23": "2YejPm6jdhajb5MNrknBSyShm1S8QG5mzKGZ47SPDvx27p2NEpAvBJP3Txj3gUUmMf99asNvUuHWaRX6D7qXHGn3",
  "key24": "2EzKeJypYHfEKhjKJ6DCbApqUMYBX34aKYzdVku6JaLo6S7X3zNKuvpojzQhHLq1vd3MphJnykjc9zZMcVD9LAhm",
  "key25": "27K3Egznts7d6dTbBynqasgsZTtMU1gjBcrBXTCLdibSkfgrcQ8sRjaNVWiCPUfNNveeoXjQWgzn1SwZKMCcUuXH",
  "key26": "3rHnZDPp4DrZ2qwMYr2YRbuvMNSTP9TFR3QbLLrjAmhw3x2nu3y7tu2FyoVP5zAKzsZWtyhGXHNb1qrisMsXKspb",
  "key27": "3sTrzcfvouifV3qKcchxBtnrHpNqiCt4fPsfYeXGom5HehWV6GwbG1guZNMR8H3EkkRrXZJkdEq6e1BMMS4sqzLm"
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
