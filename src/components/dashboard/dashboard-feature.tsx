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
    "5V8c4n54cpQU9rGPM622dcHo9KuTnv2ervfpjDNihkGQKNcKWoAdEH8k8tzjrSjbyRRM3ZQCE9PYktMDhKgCCNQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHDB45ZYHEB33L7eC5HyJZMHfS7WYfg2G6pDiiPiCc7cJdhFYjyfdLMRyH7T7jjTjdWUcVc26SBNCJRfyhvwpoJ",
  "key1": "5t8izKogFqBMmoJLpF2v8mPbEWpjQ6wqSDgDGNvBJqhyNCvUdZt9vr6jzyBJBgJyVdEPFc5NPh19jUjH5fsQKXsC",
  "key2": "5iA4cEWKxeXpRJmBPEJdndcw3mb5ogyegTSj5mUhJMHJWgZgKQaRreWtipw4tetuxdw83AX2us9AtmFsPaBa2b2w",
  "key3": "4SZrg4owXC4h3Qaz6kRbpyTpTmqQi7pojiV8xDdwBi7mAiWoX9ZpaCr5DqK4PRtoYqff8oR5WejiSakPnFkrsMAs",
  "key4": "5h9ULj9USAHXbSFK7tkunPXjSYd8QzxaR6Jnm52jeQqcE72YxtMuGKfCZMjmi89hMdtx6CVbmdvxugrYFNxNWYd4",
  "key5": "4CNaXVs4UorWszZSo3cnR8HLkdhWb7DWHjpCRXBF8G7N23VR1B4cqsmFe7YUos3HXYLJAGpdwaGNXvvKf9s114Hj",
  "key6": "2c1NJJfGGB6gQdZzfwz7KDzdKGm9Z4RiUcFz1t72rYvB5qKsefV88MVo9aBNkBRmeANQwiQ8X85ZSWyDckX2Rfxb",
  "key7": "3ExzPaZ3UwboPe5FDWc3HayeEaQtwchBuCT3ykfjeDbKGiRZJ9DjQUwVT6WVwDyfGPGpMAqHBSz1QGfLorrnTShJ",
  "key8": "4yei77ThVYXjjAfKUrsdErxS5z4WuYCx8BP3jBdMegT79JNgRdpaLYPxSHdjypXy57oiTBiAr8i4P1ugBLAW2kbJ",
  "key9": "28UajKeBMYmwCsqbvwatdJCszeGjH92ZEhtMi2g1xF7Wcpc8otA7Az4o7PurtjxaZM33EUN8pRUmTD6kgbZ8bihT",
  "key10": "VRfYw12R1vduNLs819VZnspKS69myhKhiYsZxT4pw1WsZP3j99NPn3qzbUiTxsAvappxS22ZvYYQKY9Sr4Fvntx",
  "key11": "2qA7B72rCDdZSnRyTCmjcXGyGMUe9NiRaPvf6EVytrjhqroXzzChqfrdTPYnYAHPr3nMczgy48Ae1S9sfEotivZL",
  "key12": "TrfiXdfDtCYQxkpThdzFQ78kPEFVw1JAyFW5mQUr2QXXFAdXmvU8SEg5v1LNw2QE5ykqE7Xqo7WuTUHPfq2nZA4",
  "key13": "cdMwoDfRXhCpQ1vLNRRitqUiRvVzpBvhLMX6saQjBxMhqSDaTpB1YpgX5sfoA1WTkoVXjDXmEEtLbAepC7mwGr8",
  "key14": "2qEEQQQqhjbkBwo5GdVCSnt7W86gcV6uWwN9t8f1JJXj92cSj5yDWg4SfBPuAPkTbGBoS34cVtf9vXCV1yt6W9fw",
  "key15": "5w1rPyN5fy199hE8zQjN4DnMWmUr8cLy7aLZa9mzcA6qnrPPqjkDEhb11eEF8YTfZ1oqZmdMZczExS9Naiae5srW",
  "key16": "33E9Ptj8XBP7d2BPruoMHuYNjnkt7568vLzMvesFQP7AirsebazduWSztRtvUcB8RHnfKkBaFyVgR4DuJZTajme",
  "key17": "2WisVR7zNfuwWsuBrCtKSrkmwk8EFEicBNHTcHMXQXnJoudbfbysyJNnPND9C1qGLhhBHXWPv3Z64ShgbkXZuRtw",
  "key18": "5SfWPGBuCdKmRGHwVc59qkqp6UhJEYLR8BMRnDiZ6SE1sn7TZKHdH9mChT7hhrSuQf7wyA3SxV52Qd66Srov3Kng",
  "key19": "4aj5wWLAwCFqaqh3gSgJuCjTAGrtS6wHyc9YTGE3XQxUCs81AgAH55dJEcQfnH5kitQECM7cHpvCUJbrwkiq781C",
  "key20": "2Ua4K5R6DZG56EREbHdTQPtND179VaiSPyaYtAB3P2jvuMpQLqe42qarzfsjqxFiiQP2jWmsKhVMnW9j4UTz4n3R",
  "key21": "LeVkfQmhfuP74UfBR8aAhjgpJSee35kCwXS7qFUEPgfJwnWP2G3Q23cLqqH2BxS5XdaGbA9mwQrVU6B4E37aUCw",
  "key22": "2QZ3KAwqmqScdrC8FWnpZ84prNeqyJTquh5WMFptsb6gkn7MpHDEyE27CQtz1cQPitxvmfsoNHhSu5nmamGYPLJK",
  "key23": "2z1vgET2igkajnnvLpCfLUL8h7eexPu58gARL9piWFdJsHGkxzuxN8Cr9aFS1fdXyoKTdx5uyvd89FKwex6tWxbC",
  "key24": "v6dJ1iYXJSibinZ3DDdNkcCNxf2gGHbTYiDP2s53AivhMSaKwNDN9WwziJeQ4Q7evYNCdGxogUt8it2rmGxuy2W",
  "key25": "3oQAcJMDNfk1zdH671n8GuP3uRht9NEScGQNCp6uh38MbDxMuJ5q4KtxaXbAuGyQ8s44cgvoZScfqe62xVLbwHZX",
  "key26": "53VSBvmS6uhquikD6VBj2K7QTgA8D6eMuGghqAg9zhfcj9EaZyMwgG9r62GyHtvancCJNPaSbjPrybDSXCrPhisv",
  "key27": "2Gpw6og9KvxpLoJgE9Cxa5QUtMciMRUzveyJL9nQBSk5EZtzXwaH6iGpwsKQzptCvis4RsbhPekBLLy4fJQhk8Kz",
  "key28": "2m6qtP9imrBQmPQBmkroGyZNEVAFLArN3vaRxvsh2PPbymovR8qqnq6o8GZMzQuGL7n3BsvWHuriMRehGEajHDqX",
  "key29": "3taKSL2hXbE5opE6ZS1roK5XFYxtk5a7qzMqTFHSKnz8FLUn4zbBVUC9beKABJc41WWN3R62MEaycoqMFbwa1oUK",
  "key30": "54EF6uGLQtg9zrSVrFiQ2yQcFecmahsTGxZ6f5eSoJu6rmpiMLF1BzLfPK7fJufnPDHQSU3ZrYNN6atqNU1PYBSG",
  "key31": "5zpgb8KHo9jJw2NSKPX3CakxkgRoG5MeVSchBk9dLEi4ecWiqSB2nt5HmsCyHFqt59BZLB5mYE2AsxUeqoo114xH",
  "key32": "zSLSW9FZBe4Fyd5MyuhFqD8M87vqR4K6HES2utrPZ9j3zpCBDNdZD7PxTamWiggZrSvfU8CWFrr5Fq4bBp9ZdBZ",
  "key33": "2YEy5mb6HV1icyKt75F553mvL4AKt9vKfVaTdKmvcC47cY9dGLBBi9LudPFNxrxxsPXRuQVj3u21inWcKKfgRua5",
  "key34": "3XDBD17TyDDxqo3HA3EKUZYScKUdW4ECaaYnWishBdrx1xKGsc4cx1LzogCaHFLJkkJ8a26mWpcFcFrspW8c77mu",
  "key35": "pt1gGpVkSjya6XYp51akR5Lmn2QirX9JS1CH2Y6VRriJAsqJqBXTSminAbLBsxyZYJekxVi6FVpAqxb45gJNGNE",
  "key36": "5uoV1HRFfzqqa34wBniJTBCyFjecJEahKymTbZ6eQTg9L1Cr82LVSm4NywoULaf8QM1xC2Hg7B2W6gVekgtw5mro",
  "key37": "5b8MJnMavvmxxxGwfBCeS7DQRUvvhxkBuG5QysPxMD3WZ4CbBa2Vj1YiCbnsEVF4vHcyTbt32LeEM5PACxwddz7b",
  "key38": "RoBPRxyW5RUiKjFJoydrxHyCmYqC21TZNgfoxkVdJ8fqKGWKHv1RxwxKuugTjwTc1zEDria2vBkgRHw51tQYfMA",
  "key39": "67S98rNQcLBezDUfHxenKLKr2gg6Mpjd1trV7iLwJZis4skbtLLq2GBxU8wcYAuraPb9AWJYgYneHdwxYuVmFnJ6",
  "key40": "3F4w6aDKkjcSXp24NDs231gJEBwVeAZkWaXBwxX8TiBQVr6r5Nfizu2tWJjJmuVLVXDrif2vyi4hVe2eJaLuT7vJ",
  "key41": "4RX5r6qzB2JJA2Qw7e197tRNrGpmbuL7VKw4XzxiuNqGrdGqsigYiHSkyKWRVZjuSPzc1BmRqmTdBsj8KjrsqvNP"
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
