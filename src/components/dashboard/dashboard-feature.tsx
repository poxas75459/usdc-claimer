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
    "2GYFGxpmKGngDeQz3oSjygfG5YMFj4cS1fzmmjzss6SD5iEB9aGUneREeiTsXds4j94DPXsoxkY2AfW7qoqqkFZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKRcYLjKE9xb13UVTGiHHuxiidMApVtaqasN2FN4nrLSpVAykxUGiV4UK7SKJSbfGjQvFdondpFfzduvjgzwzWu",
  "key1": "4j3aSUHZuMRoa7AhrMF9ABHhszb9H2Xn2e2BMBwtzQVHrnd2vbCFHvGT7zrXKG8FryTR4peeHYGD2gDocUtieR3L",
  "key2": "3kGhjvdBAvmybRPjgyuWmhJiy4C4AiheZcABtquUEoCpfFytVKMx9Tq6oGp7sbT7nXBZ2A6b1SSkdGqZWzSHEfhA",
  "key3": "21PfVP2BFXqq924e2b85LpLTQB6ANcXQJ6aNcvEfU8QUvZSjfr2Ru2N1CcN9ccJkS3dXdcramZKnZw2XZAF3s4mD",
  "key4": "3gFo1hXZqjkaZAYGnDryCMvxzEgWnw9psLzdGsFn9Kqp2LiHwUe4Cx1GEB2fUt3igJnNgvFMtVYVYXRWVxpXrBYJ",
  "key5": "5pyecj5swkuNTZqqLiagfSEkKV3cQZYHzSsJtLjk2VuY2VPHMfjf5R8pE7JDr1nWXULfWSWyTw3eRgZoRtRwLJDf",
  "key6": "4ezLN3gADRY67W9J8pJCLk1UVyF2LoKtZGpcLPZ2NrnSNpx1oBM8xo1jmTK2tMeRpxPwNYvC9VWHS52UvMxV1Mkg",
  "key7": "5VQuGrvKYK3TBeUW8g2SDDMSpVzY3e35KWtqEng5K23CER9ZPE9fbBcqV9AJ2AALVPRU5ZccJCwTtkSM9Fw9Kky7",
  "key8": "4Pz9vw3m6ZsoNHZbNAa7zTsYRokKG26mQVZENNQks6GJCB9FbHdSqyTJ9aVfrvQES6afv1nunwP1UKjErSi25foE",
  "key9": "2zJLJpJ91TGxkM7ur6NEaMbro8Xb8DKz8yCusNbsPXVx2gb6JYt94wStuB42ce59KyzdjRcpn4xY7ZNFm2x5Grqe",
  "key10": "ANuwDWZS5u9Eit5XS6wjzVCeAoBFfYVc89HmsRNJpgEbZcV9bLBshm6oSrENAXKkinKKuksfz3ttEWs2pigWZee",
  "key11": "22eVC84ThkeRnwqNQ8dg2f6hbkKA3AW95dUW3eZGpSxVzdT9h1Q93UGgL8MP2qEBwZBms7aFAEJf39t9wQFBFMhM",
  "key12": "65z3a3JAjgGZyYJs5odm3bjoVb9Fxs3Vdx7aDbMqtc2c9azD3nLE4YmNBx6HaL2sYtVfKBoKGiv3DJ3J3Ach6sxr",
  "key13": "5uL2HGKp2QHukgpPev4coEGxHbQEntV9qzSn2M6jvtyvGSo7sXvZfiC612qRh1Yd23PbzKfJL5TWMQinRDCd3Nja",
  "key14": "y54hMNTfT1dZJ4BVDs4wGUu8HHzC1ZBPiqZNHxGjTgtSxx8EF5VqsYMMdk5RYBn6SLJhVLvaHFKLfmDRkfWA68Q",
  "key15": "2RSUzgYckFQHeYaYtHQLSw6XiX9QfFAR678thB8Ezk2PmpMeE3k8q79LjhPCKfRwDqPmDUitqFHummMgdXcTeXZh",
  "key16": "2fnaccBpxzzTgZpb4qmZ4xPJ5b16L8fHPYkcbXoGSD1ycwcgem6T32aZbDyEhX6NL64ey5b8bunr2wWQRbqbuzky",
  "key17": "5CijDVppdi8ZP2YMiL6cMWHngzoZcGS9Qkxf3CVxUNMvAXig6XfsFDvSVcPuXCeQLeh4wspgi1RRE5kYtiLK5d5p",
  "key18": "4FdyHMjCc3FWh7WXoF1qSqy7ZmukSMJjQf84gdYzgTnEibu8wKgQg14KH2ubrqy42TaJP56L33qbvpnYAYt1kzfv",
  "key19": "35iD5RCfe2LrNwe19Eb2wzefaUg9MBnmUg3xkdRfjPwd3nCc7sN2mzkSyir5PaehaEKR6hf5YZnseHDfjq2Tg527",
  "key20": "2LuT8hG26n93cfFCgrk8sYFcPhGgaqwFxRAEqPTBVsCxXMSfhbGt6y1NLzen7qejyj1Kh3g2EKwZCz68dUJZvwtf",
  "key21": "34EnncEXyho1LvwEKuZ7v9ytPMuDqSWbKgcgj5q2uFfUK7FEBmXpgB8ysxtBR8s1BaSLPrn1jNZgmUbVnhZXapaf",
  "key22": "3fHZLk8wL7UvyvfbVVWzJeUDSigoP3bBJbTJDKUqyS8YG4XPMXJV7i35mXd9VZHLdkeTwU567XBco1J1nHij4Bpu",
  "key23": "3LGHVQbRE89XxBCEzCFWo5wCnBavSbLJ8FMetSiwrNY4MxcXYX8mvzK1wk6F35e9sp4U2Q9mMj1x1ErQdXD1DVkU",
  "key24": "5bgmP2Z8KyEG3UAJC8xXqKTRBEi4c2vMdHdy24XvN1cwtzfLrLPtiVUmrWQHJWUeLouFNzmTAA4xNyY3DQa3pxS1",
  "key25": "47rdZyu3f2qe8MpmmGyrmfsXwXd2WLspYPJ6xNp3Kh1nMHHc7wAxJbhS2KERJUCFEn518krmPk7GggQvevojQkLF",
  "key26": "5JQAjvGjfMjE3wmBR9mzczEshJeozWKZAx43JgzSxMQDseR26LzMVR2aV3y9Ma3HByZRVBM8hU9EfwoZ5gKfggiq",
  "key27": "5S6ngevnyyn9KgivYx2PhEExdpy3KuFcChi38DjCP6csYmV9X5hzUH6pkX5QFaohzBdtnoxWUyr66Tem6UV9kPXa",
  "key28": "42BULzrMoaVdMq7FBgzzkCwYTSTnXgjPD6GRuFsfM2gmuRA5tVAnJgUWfitDBVHHkHGfpgVzksCbCusFxn39GmS9",
  "key29": "26bU5b3cvgZKRfro1RXZvqin1noBSAGZ78ouhug21NqTeZ1LcELeYQf9J7vdFDgT9We3VnMQA5vu3pTjPjRC1WtG",
  "key30": "5s9z3SmDNiQNoM2E9fLpqrE118fX6iQq2v9tatTkxjyNLFzuKuu6o4LPsFjwFKZ93VpTFRriqcfKoXXS1V9GhPZg",
  "key31": "3RazYNcRGTXzgBvToU7BXYJ94RCwEaz3BcguwjyK3769MTLY5H29ounr2C5RmsUpPz4R7XBbbQfNCcNLUbrorTx4",
  "key32": "3C5D3Yc4SWbWMWmpStZNtxLWZyMVToHNgXX6CFdvSxHXjfqVWbgf3v3ZgxC4vTeqP5hsMDHinGMequ7sfaMSBBGb",
  "key33": "2HLKg3wEifjriQGLZASCz84iCmaYucBEaiRBpLXPCuofYACbc2p6Z6rmpJQF4aWtFLJW9zjqfzNScD1uibbwEthB",
  "key34": "26savBf5g2zQ2ix6YZ3AD4XU8ZwvTZr3mahHXSKPYFEaFYgomahzXrsRDZgCnv7BQRDoVfUBiMkq2ASo3MuXVdZp",
  "key35": "58hU4sTs83aS4Yk6Df9vKgznCJk6fs9T22ocFAVB5RvyHsBnoWhvfbvaak3gBX8YfdyxQADb3guy7GP8gZuSfdUy",
  "key36": "4Nmx2nhFrzUfqxLA8dwZmUW3KM2RWg8CGkUSK4AazgCvnyj4AtoBnP9xSantTXHPNJNY1ugwxVCKvYNe6vaeDwKU",
  "key37": "5i9Pu2V5yiZShxfsPRLtXX2kw4PtkYQzGbSP9jab5Q52mXfmMDJ9LVPSpMT5qcSHgAm4qXDKGQrSzYwGAEzKk7uD",
  "key38": "4TpUqitGLegocktMgqtqmtZkBCcrMRqs4vfMSEGpwmQjRCrgvtBV2tX5FvkEypruDYJZ1JnJLxXuQfnK4Heewq1Y",
  "key39": "FvxMpo98sv3DcBbwv6yFLHuhgYuBjmxxQzBQeikvxJGSCKZMuANh8NfrdcwT9NgiASf1LoSUgygigHMEARB6W6h",
  "key40": "4wH4hnJ6Khp4t63pmeSFUfEju6Y8BxqB43JECmSzBoZEjVhb8XMwDYj2DZw3wjwXHrrhEnuqaxyHUryCmFLs5Aog",
  "key41": "37VY7sWMaFEuM9TW7q8pjSaMMdy8RPWRkcbse7WGqkwtn7q5wFKmJH8zopqTMyicUuVtVzJW9BPYya5wceDuNNfR",
  "key42": "2HMniRmBdbTgNqS4Pn7hEtn2VsrTfuuT16Lnq5KRhjWb79uRrCJSHxAFo8rmBivGjFt2fEDSndc79SS8G1neVYcR",
  "key43": "5tWhxpjWqMoeGEXo3UApmXzDgumN8metNnfaeFTduSyrcA6337Fo5z4nsU3mtffBAWYMHq2Phdd3HYzYt7qMHW21",
  "key44": "2pj3DuHS81Wiz5Um81T1UD4LZD3D5KCRLa5NidHWvznevB9dZaRWeUir6j7sJH5nHYHEBJbeTdy5KfRKULe1yBFf",
  "key45": "xvjsnb5TMpX6Px8qYhJXCJcgumhPyqiZWEKMAXg5Z8dnfSpdkRDhqE1dbNhGtoVjhFbXvtPrNHLmcLC6kWckY15",
  "key46": "2voiPYZ5qNNNnamF4zv8esXkwdr3XfCPxdNNZ8r7j498EHHP1nV8yZtQDNaz2BmERRLbb22xiZmu5yDmPZMphV11",
  "key47": "3JenLWimP2HW7MXh6sdK25wt1axrT8L2Tan687qpahNn3tSp3V8aHAZqbtavKL3xteGnBxwvj3svTXWLexw84scY"
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
