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
    "a8CFryYzE2aDimdd31bQowxq21UCQk9HwbbLkrPNgwTsFc3AzbY6VPmpJpPLEnzBbGrSgS94fUeaTMRUJnMevxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MrCwnB6sKU29kHZvshjXoNrqx29EDcoCvKju6j5nxoNeiBGksBHmJkCQfBx9Y98aZaCMEhgauR6JdAkr4vXcvL8",
  "key1": "5hUiHR95XNoVY6Rg6viuPqGKnA9Xbcf9wukFibKjnuHFnLALrGptTwyHYLVPZNQQERwhevQG6TRQh82UU6XCY5B7",
  "key2": "3SnzZeuqdg5AbdcJkFaj3DoJqvjczJ15n1hpK7fCwcQ8gFze65nmLXXSuAg939iZHFm3MctTexrXt1ZP1paAb7LW",
  "key3": "5ekiAGsyugGAHBRyGNqvU3uTR2V2jdCRGV5hWUxD7m1qzeRyDwXW3AQLVwyBcVi3ohC7FMzeusS8wo69WJDMDirS",
  "key4": "Bg5uSBV3G9AirnwfZinmRPVgQr7mAsetXepfkrtMBfNVYaJvwVqXu3Hkn5oLPA824eGozTF17t1KvaVh8z5uiRo",
  "key5": "5FtQuZqGE2NP7eoCzV2G1tUmfqcrzTxgeM6hyECRkKb1cnhjkytEaXh1KU71wZnYc6TWiGuRoMRS4H8BoZkgcRmz",
  "key6": "5UxMFfKCtRMst4i6o2URRkSWjjvzeZPEBNNTjVteCBA2DMf6Xew9n5U3Gr9TFppw5BgC1b3vf3DTCrCm4xMFyhP3",
  "key7": "45cvsFbNMCf25qsE33RnRd7D1Xi36xU2FiLFmCPoKRgcPJA2gQ6C3w8SorrJUErWbdC1WSKNevZLXy3vmkGGmTDv",
  "key8": "7DgkSVCRGCHqRao7x7mFwSVEZK43P1TGPLwtQe8koxi2gmANRrxBxzfMiXPJGeHEVx1kfUDdHi3U7VRpSrQeF2A",
  "key9": "4M8htHiCbryetAgxEN1CZv3DMTJJLou2wsxGLSMisWaxEiicvj3Nvi1ywb7Z1b6MdsC1uq7m8EkD7ewtvy43Zixn",
  "key10": "aq6hnQodTrk33Med6nnk8SgwY7J6Bnft6qP3V4v5kD7NZCDgV563pt3ExWkAhDB4AoEAPp2dPqG8NPH5KF8vmkL",
  "key11": "2gXyTr4QvgH2cVBqo4uWDGXmeZsZzH4c5xEnZ9WWGAE9tLUj2Scf3NM785y2QrB9iwjPmruvpcPtdUiDJMfGFZmj",
  "key12": "2gcQREyjUH4NeT5W3b3LHZcFxTBwqPUFre1AVbf59oh43GKDQitBBoiarL2bbd3UXQnnVBA3qHd9zNsx1RRESfW6",
  "key13": "3yBQ1VwdM6rFPstsyLQWmtwZ55wyPtpDmmneMmHA1j6bPSjxBC2VkiKuRbqSVfe4E1yaA4N6vo7ATk1NQ2R8CRfE",
  "key14": "5xujuj5ByCoAkrR5v63DS5L6cBu248R6wv1ScK51DKxwWZbzFXR1vTD3Ej6uG63vpAAYQ6RiRR3EPZQWXCrYsJ1q",
  "key15": "2WYUfqCUaiDzA8KC13hvDeyWciBwQjwJ8ESJ3zXPXmEM2FgxwDM93NuvDJV16xo1mcTBDG22WbEgD69pUxcdU3iY",
  "key16": "2NxGG6pnTZtUt9gudrCdv1rJhbCmJ77ccFVMQHLTDXeiL68kCvHWmv9jRUhRgMxbiohaUpNHrDw9hE9JrH626H37",
  "key17": "2WVnvfmsQoLvE4NJoQpoUCgdrvCjK3Rgt65aiPsfqaRACcEG5mf5Zc7nkS7Mge7sW8PArA64bLxPtox4daWet9VK",
  "key18": "4ocNyCH2tPUymcdUy9BLVbUkZAFZ4iXBJHeqo7hPLKcHhx8zdnH2C3ZPsVBZ8gbmZkJ3ujf2bkvDtTQxVaHMN1vo",
  "key19": "44n3JGG6Bg6LxBY3AP2fukjQzpKkPWnaF1qYSE7fmrfTHBBY7x85yhzDoUc9HiHwdXSxpoyJ1TDfhrwZGMf9u2Jv",
  "key20": "GAgFwNzuPC5ky2kzN1Lc8PNfiv5tBGBAzbRG4TPSAybN6FscS7JU47YGY8Ctj7T9P1Sp2VMtArTCG2p5t6m1onm",
  "key21": "3DYRjZtQg5ZNYaLkCx5oVX1dpjYioJSmkpi3mDEeCumivDeJModJrmn645yoArtMRESJWbo6pgFfmqhCj5etXWec",
  "key22": "4E6MBiR8vwUF2BRbdVbNdwNe1PjmnicptiKCiLKinW7k228EzpVJq9j4TnzGTQf4mbfsSMuPAiu8Axb6CwiUx4iT",
  "key23": "5wM7gL6VZ5UA9rr3a7QjJxECWAKv37z3EXqpk5vNkKG49qB7rLPaeY31ahHML2zKbxtfCmnU5NCwX2SY1W9HCCqF",
  "key24": "5Mn43Gked9rvC6rnJ5BFUwhcg4W2Y6xnnB1PCKBDioJXpCXz9JLYu11c5r6Gmzojs3nHqZWY2yciQmbhNFi2x7g6",
  "key25": "41X9hzWk1dZe2ypVLiNoXyipPqjZTApBRFoX2urYsQ4Vt8SZ9ohxfE66Zu9kRqGpxQSk2UxB6dcBuuyrtciTBRGh",
  "key26": "tyotTFDQ3jo9dKdrfqGUqagtr4uMKGMqQJ5GYskCU4nQvgvqqTNv8fEnYrPm4TkVvkqF4FdCnskcj6ARSHAsizY",
  "key27": "4JYxLRVrryFVFCSG6GLGhhWCeeWGpq94iQayGRCBruSyuUoWPPw6GSFjrn2WZgGtRNJsf6ovVQQwL9MAAxo5c99U",
  "key28": "FYnyuPZbGHNUe565PUViPdBYLevyGdUU56saV3ARvsLVU4ey1ujpVeynpda2TA98pHV37Yu8ZjVz9Q3fzWwD1ck",
  "key29": "XWYL6oynsmjFZGeWy2y8MDJSviQxXDgyZWsQvHgZxuDRbcPGeuoGfg6hWzdCKfre4iX4aEsA2UKocgc9dj4cj7e",
  "key30": "5wL39gc3FihkQQ1KLv2xD5uitLFQ6MncX5hXsPaddx4Kjc8oYs89X9RJsxuHfUN7VFMHqtELfYsEgjL87GtJgBau",
  "key31": "4HRvoRXMEpGurAL1h6NRxL43wTpPiUtdnh79LdypAE4vdDkgrGMZpHhT8PX1NjhwvLdBZPzLB1s4RSVFbiZT2eiZ",
  "key32": "5NgHijfFhppPjeHNjQcA9MgGEX2SWn26TbxmoguQ1i8JRVyAqPRD5WThuNwe5vfozHBDQ87gwYeDCLbuLFeqEnht",
  "key33": "5vH3Wue9qzaKLVKiRmZnge7tUbKBSiAo9y9LbfzhNiB9BxUB1794B7QyCRD7cCYhpGnwu28KJpz5vwjVekpYqr7b",
  "key34": "smxdZURfyJT8KHZq8pF1PDGJcQ2vVfrSvHGvb2ozZGVNjtbY2c4G3rEscL1HMxgYq7VCADvLb65gNVxVuJXB13c",
  "key35": "4YrgYzeWFFsVpf2kgikwVrGeRvFcJgSwHhZw1YFPCyEeoSPqDb3GGCAKrju2TCoTaCnUNY1Lh6wymQEzJbqgqWC4",
  "key36": "5EbvnRw8uwjWzcH7NgtTDm1abeF1c315Kqb2yu8ywdQaRZ7tHt87gVPKUqzhQjiQfQiMFMM9eoeYcGrmUBJ7CgkS",
  "key37": "3GRaJQdCKQRuUPYvrAtgjgXudnz2eMxvhiGwnxfu4AW4EjavrbttouH48seLw8XxMUKRLAVhW6CGyGqZ6gsujody",
  "key38": "5tyoXVSNd1DMnt1Gg54itkaZEUgccAEHjVMXyEkiyoUoKHXKTr2zvAb2kN7v3kuwaoRLqBUjdr2GwDdxXF3qSzdr",
  "key39": "5rEVNdwFiVcEQbPo38qKsjtt7nahHuyDWxpVj6NGcKXndc7MJW2gRZ9RNsd1RieWmKy4TTbFiJn5X2rRS5N4XdPP",
  "key40": "8rhvAe3Q725heHsM89nkCz8yyJDRx7bRaChkZ5E1Mg6AQi9L3sKdPVpZUHr6mHLbM45RktiD3FQ7pymgZZnU9mB",
  "key41": "328EGS9r7UMDt2x4EtkAPihcQQ8LEHMSvHL3XKYZQCoXDkzi58rsv1oDUvch5y5ybWeMUzZ8hFBMYozw4QXxRE8b",
  "key42": "25rnoKtbqUK5GrKRtJbQKHQXaikmL7YVdLR9RsBVLBPRgWWxByeKXBfDZQHfSfyXtbL4MFntK4YxrKDUZ2xiZm8K",
  "key43": "3ognxxvTuuKUYdhg9Awqts1LxznYKpeoffBNiPsZhwSaNRR1p8kXgkxjfcCNGhNZCEs1zP4Mf8H8cNSGQMwDkaEY",
  "key44": "2vfohKBciJ2Mj2KrFeMjFZ7EXiHfUN5dszF82yJfUDet3WK3ckhcQYkFhdB26CJeTPph7RZxeR7hQRuKBKyrtftv",
  "key45": "4HB61Z4kZGnje9wLcjSye5RzoLDY4kxLUNwnxRdca5Ct768WbMv7uJKQJASwwvvCU4JBVuwvaY9NN5eZv5YsuVMz",
  "key46": "2YpwAYhntqwfdFZS3G9B4B2E72xNppp1ys3t8m2GiACis6S5dWHzL11HGhjgoE2euADjWzghPiGkhTegHy2sqAwP",
  "key47": "2enDWDxjk7UokCufh3JH3vivkSKNdw3zRAsqTi1wBa7A6mDsVhG97B5rJxpdoDKFh9EE2HjY4m738roft8uJJto6",
  "key48": "4h2uKHC7x9eLWuVS7CCjsQ5EHNkRT7fmVh8so3UwtbEqzPw52uxXzAMaJDUFokkn1rZv7rEisADWxCW452YSTELx"
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
