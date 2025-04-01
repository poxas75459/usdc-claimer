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
    "34ny8tq9QNLFq9H3bBRiUUGrekpKnXM1DgwYWj7yWdmXKJiaPzWHHro9AjmLMDdcodTX66HfU29wo6SisEe9W2ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j9zrFWnjKGoMCDyZrqdq3vQhnEc6owkRky6357QHxL5ZeoTFoMXRg2ef69DpMXA1jeVbJfbd7LZNmNB922QiZRK",
  "key1": "4avryV41SZzAuUPLGqEJSkpeyq7GcCp6shr9MSsBjGcw7t11T7FTXoHVRVycoJoUhNzbMboMNQR6BjiVxYgMBgaD",
  "key2": "5WpZ6fitHW2hetTx1Vm2YyJ7cjNk2E6mwBwWRrqM2Z6StVsFFMVP5fBJsidbw7v3vM2Jt92rxWB5tUB6gmu4KEEo",
  "key3": "592kgkUQBcRCqaoXem54HqyCa18kz6KQ8MaazD879QMqi9m3VWyrbKpg2Gf6EXqzmD1sVRrmC6VKCMZzcGzEBCdY",
  "key4": "5wuXovDFb8crfu4hQMzxyv99Se9bjyDaDea2bhka1uNZZzE25Gj7pJu4RkS4ZSqkTFb5C5fvMGD6XUpnQuqunsFE",
  "key5": "5y8JnsbnUC9XiAYT82sYUFa4bmgD9omtcQuJ5rYcD4Rt581szxaURiSRPxDVjsPjfL8WjCyA4CJGk6U8jMCeyfaW",
  "key6": "5ooXD4xYpxbapWfoZ9xaU1YMyUJuqKb7LaASwXLH3WAR19y12TimFZtmFKB5KYmeuwn16BPsanpiRcFKdaCJwBUg",
  "key7": "5ghXJbPSwmrQENNaDpoePdicHdXGuFaTYPby91bVyGz7WNY2c5EPAuh19HFX69WSDcAi34QCE9kAwx4thj5qTKsD",
  "key8": "51UHzjPjNfci7gQ3BdCukwx6xZoUgSKK75msEh8niiWFSNbdVCqgBSULCNohUVrJMBeUBshaRkvezHi6CzcgB5a1",
  "key9": "5Pw34aJJK9wUpA3JtffvvDjDM4zmJPHj335oxZDpJXdhc5xW5x6eZ8r4nHtgLcAcZYe25zSLCMTcHcrjuZX9hqMM",
  "key10": "z9VzuG4r6aRwAef4PoXwPi8GmKhuZReJQacVpmk8wxUN5M9Xq6RqsBx57PZQRZuEmoF8WHfukFgSpzCJidE59VV",
  "key11": "2aSf7dKAMmwcgfcDuzeFKJpMyUTQtsJobTvffoc97HuQEw5PHBgatRjPtgEgM5MGdKBWzoXxK1PYDnVr2TR1Jp24",
  "key12": "4Shz5XzrhynUVcSoBdTLcjspGUUFE1hEWhAXVYupZJYtFjTRYwFNuiuauhFVQwH75DBFj33g8XK85RjZRpSDEVmM",
  "key13": "47KQhG4PMRBseNjTvbR3PZxiLuSXstwS4MbFU2UNgaKYC7wrCNJisDnm7dbF48gBHv1B3eBe6raS49MYVXBwooPX",
  "key14": "34SWTUF13McHzhV9Q2ZFnevLrPxHn7pWoh7d59pssfQ3aoBqh5nVsbJDoHX2peh7qCB7Py5sFJMVu4wzip29gVWJ",
  "key15": "4NBDfLN85aXJ8Jh2VrSMNe4un8B9kNTWXQU6V54j55qnc2Pyrb3JdJSBoExAbjfUQKcc7MyLY1E8Zoj5dLpPqb1Z",
  "key16": "2nGjoqcafE3hFkKjjfxfbwVq2bfBVXTV2CeeekMka9XQ7uSNFq4MscahGu3a6wqe26W3G1HFLb4WF8Bxod9pQs3C",
  "key17": "4V8WujBbv6JhQ4udf76QPNqH1r7TTFbvBDE739AX8hpJjJL64fb6BWCXgoCMF7WAQm8iP8eMcMcrvzReXmWdqisv",
  "key18": "46gv4FDgVW9NnNKPA66f6ANecoo6t9qYvsgumgMS4LAdsgkRnGeimgWCSZVHhLfc74edRW8VFPKmQBYDNEeWnNNT",
  "key19": "Pz6rn7rWXWvHBE3zUUppVErE1KBmWUDwH7YmAZnnbAuCgF3bADz9BVx7nkp24rPucvzEiUkKjBiujyntR8HtKEj",
  "key20": "594HGYcs5QaujqCD7XqVd4YXFXujjeBr6tZBeDjeNRR3DhLPGtPZ3VnANJmFNzvqZi4xANcjzTCUoZgUhKJJEyQV",
  "key21": "DkvpTVAbucc5UYDPrqeHpT8RzRHPEnb3yPSE7Vchfn4vGnbKc4K8mc9qyViorjTqtahrrA4kx8jSbQSK2cyDCiT",
  "key22": "5PUL6EmXvukA3S4JZtuvfQqe9PNwS24erd3g3SUkcSuiMBqjLRnF9MXfuXWFBxkHmCbQ19z1rsCXTjiVKe8i9Ccy",
  "key23": "3T9WS2bTbuTByoRoiRHXRHpNrVKNfrUY1wCbptbDXYtyhD9tGMG8T3ZYWuZqSVoXPKQHsHL3Kdji61n8FrjnF7Yz",
  "key24": "2pbzFpUNFhrciXuhW2csnEKhr7uar6HveEhUqfKPwLKgCofK6R3xZkkQj9hEuhwy1LAKdXF8FvQMetTR3bucWss8",
  "key25": "4KWjbphWmD86aqMtNWA84jebG9DFGjQ8b7RMzTtdUfVKwq1cdgZRwyeKe6tknApGtX4587hxqS1TLQvAD2p8iEwM",
  "key26": "2Ps3nnPTLjxpocU3zU8G11WqdASv4f9WsHdHia9qW8vFnqy3jGGbjexy92DuCVZ82JRUeGLVCNy7dBvmZYi3jwrU",
  "key27": "BYWRqFyUccCSSQh3C5siRqEvTMUkdmTQBfFLGms42QZ8i9GGbUa31cMnEo8nhfeQavt7o8vnFaZGFZwqHotLQFy",
  "key28": "4HgmS4cie2FwZXmmzFAk88v3rMyEH6Yf6dSySRcTpa4d2J4yueTU83HNcCbe1C16Zrms8bTsU4PbmJ3NcP59MfEP",
  "key29": "2Gkb9YM91KVHApwof2pXWZuiYxbbzGeYZFYvFdSSvz5PBSzEiiNhKgtFubR5FQAbZJi8h5Wi1AR9UNjtz2xyv476",
  "key30": "5PxR5QEp69KMZrmQ1LRVkxue7MyeEXdprnBJtVubrEQi2hJ4kbxxwSBrgfAA56gSp7a8gVoVJntPLuvcjFs6EmVJ",
  "key31": "3Y94HUnDh3jGKMdacXCzC7FM4ZzL3tDV1tcks9FxJjTJnCptuiuyWjcULfMDYrPBziLPY8VSRC9X2qwGQeZ4BXgR",
  "key32": "62qGpS6xYAxR1EBvWbVGsLm2mm34mP1DPkwJ5o41RbzUdfct7QrgMqdWKEMD4PXXEpn3z3k7KvsXLuXG8u5ka7dt",
  "key33": "4D3bJ6H28fSjWWF8S5s6Jis2HeH5dzNn3o5a9GXzf2b64dSz1a5Nj7ErPvqd4Bweg7T3w8SzURWBiERDAnP6UDwA",
  "key34": "rz88pMrv4ADTegfwnHq8TEK8Kv9uHZ5JpDH4PADcJfvbV1ti3hpYhcsqhM4jDUQaUpWG4kgik3NvUjVHrjxUdtZ",
  "key35": "2uKMLpH6RvTwx1UHxTXjgBy6M781UQAk18uzE96mcVc4xByod1bgJsSgRMrpfM749QJWSKvLxVavWAdrrZmMhhjv",
  "key36": "4FK924rduvmevaquujv5FJ5hKst6wnbr5ySpgqwBNF4u7Sqf9uDVAfAcc29ZVCUbVRKHakRD6Sm5fZxjuWfpZxyp",
  "key37": "5wrwe9GE68DZE6Fp7wAiPAaS13VX2K4pzFdgGYpuPHFRhHk4qazapVHLAxNoMeTDAhsic2W5hQiTWLfQB4YPR8Ch",
  "key38": "5286dvarjLKPNVN4KV6sF1gRtykpeWGLnXaaX9zmkXKsGmWxynaqs16o6rRZi8c3VLsEfStWKursvj2EtChNR1fq",
  "key39": "2Bg8G1ZWXsS9dWNSmE2Ltk7uPwfmKD2s2T62g71NKvHDTF63Gmf9HC2EDJSiCT29y7ESyuvzeam4arD5KYUVmkfz",
  "key40": "DDRCVJ3PKD9yfiAinp2ww6SxDi9aoJL41cepUoXPLxMf66ir8nPYidRPK1XzyPb5kAE1Cj1tD9Sp6TwHhk8Vpfe",
  "key41": "4S2Gw8CsEE21eYFcweKA1EHPKgq9uAieHnDr2hZ5sAdRLieWAagLwPsFsX2gxuNBX6nNnBqYgcm8q2hrKHp517GG",
  "key42": "42Xc3NkF6FqTsUwpgQ1MRCaCPA8cxgcLb2rzTqwSq5jQMiF69kHNUzaai6VMBT6C5YECm8U3jn7W98yEM8P4zs1J",
  "key43": "4CpPMEkUb3ete5SC5Zm3Z9Fb3DeuPTWMvvtNNgQFGTxEiiPeCwycc8Jz1EJcJdqJy3dMgEMSEmuw5kpArwNk2w6v",
  "key44": "4z9fDsxTp7JbtQKSTkwAdbJqjoRcz5pq9EX2zMHRkNBU67QdFSMymfoGbRtE9mohLFcLmHTnXTj8G6baKzu9PiPk",
  "key45": "59eVAU8FJSaoHTUjDw7cpTaiVrBrTxm1v7wujTALSu8EDhVnHxspSri2UFjdoKkCF7rXJ9CoBegorg84hgcvNCav",
  "key46": "5W4hZQgz8PvPVhQqrJyM9LigAE4fjhrcUuajAuPwb6n83ghg2aQz3EHdMQwiMk8R9FLXriAYTAQxXKgC69YbCc6C"
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
