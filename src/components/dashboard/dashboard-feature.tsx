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
    "4EyYhHZrhb4g2VEpPDQX7LmMDKp3vRFuTX61C4zVoHSBXBSuHGFY4aGbixbonJBQL4UdBkZ2fiecHfkc5AqgKdZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aZPK5Y6qvBtZBBm1zY7PiEpX5p2AJPDSApaphK1bhDiLfY3GZVBMU2ojqFBZaWNLkjexWoAmuMB8XfWMSo6MG5A",
  "key1": "5oR8bMxxLsSurFfJRvmXxA6w6As6DH1PPEzJS9Ss36Lt8117tzrhWzy23jHx6jpgjcHz3Jzw4FfRNMBcU4wyXatP",
  "key2": "4jbdvHSTdHh3KoJCYgyxw2y78M89m8YMRkHFU5wLePDzVEPc1Py3cDvYAAQc7Z6cjPNATyGsiHq1JXt87WsiWSj7",
  "key3": "4PST7NkcaZWPAkY876xkPMzDRuxerL2J1p2o7d7hgBNRFPpsTeqjKd4QNHhGSYM1TT1264raBm8bdvuz98KckMeZ",
  "key4": "67GtuScgpuTiXPUCFEiZCycwCHLex3ecc6Ejq1HQwHW3spTmE5ut6TU8Cp8VKKKHAYXF31mJVaVxEpf78RxzX8cA",
  "key5": "55DNbwmVsCMy2Nx27BBUwLkJ9bwmSLNiPyXnuXdPE5Vp9oWDFzNDGNXxA2Vkv3TSkJjDznEZL2viyW1uAJoMRPPN",
  "key6": "5UUUvSf4EGpgUQtVWcXWmReBoMN1A1rdXcckEEVppC2VmDSFWygDgoewxhAqcQcPSg9kY5FmJEXx7SNVErJqsYnL",
  "key7": "3GKACtzjYx7qHJELn3ebdEaRjPLSpzpHfP5kWvHJs4MiEas38Fa5Wn7sZ1VeicddmdMub26cGnpZWYwJbCxwbiLS",
  "key8": "5UMyERFo63vs7xJEfYUrbGh7k4kn5z7pDvuYv6A6GPBAnJumVbz34uuMFwcXVXTXSeKewLKdppbbK67bxxnjAy7p",
  "key9": "3MPXydH8DL2As12T5GhS3v1iykbAtJXZ5swGYRBhJiVKYLekD1j2fkQe5KJe4KfTEKu7KEGc9hGFi6f2we62zpyR",
  "key10": "5bNVHCvefXTFErQKfndumsTX55ZiZE1JJQ65ccLzM1qwjPru4XuyKjPhxuq4S42UXpmSMSR7vb4ejfVZKgRRXT6g",
  "key11": "3Nhpaw8t3HZyVrJUyUvDKGmysoKxZFsWSzsrDevtx8kfPM5cfkaggBWJ2YNLQFSfg8TFAenNJaUq4aTLMax5tBKz",
  "key12": "3Em9wjL3DYFSDpSMpbVtDWHMJqWdoUj1oPcF1vPiFUMJsAzniK9aShHTkUBjLnhscvvMAbM2CoWuM5BEvfs9UQkg",
  "key13": "3twDoZPLqaZcwi76qVN1VxYvzPMMRUu3NMauCMoizajxHncpazEENmiG3uPFXXPjcYa6q3uP26hqzTUKbwMdRPim",
  "key14": "P5kd4x56j5rjxvuM8CQAxCQ8jm5iHDPJ5KjEbnqceP6Y99WychnwCwDC1KkvfUTYT9PpDaJyhA61t6GCUbAHLwb",
  "key15": "2Wd7cxxobBv5naiKEbNZsbBmTivFh4EoXj6S5AFgHT5GwaF3BYNsvznZzEhViagSBP6zgXwX77aZt6XBFsp46A9b",
  "key16": "5g4sJWGEaNHdBjtrbheGKj4NAJCofTveu3bnk9vxh5kBeCwMxJMbRmXJ6gg2bDiZ9u8nxbooSYzXD2RgpDg38NBT",
  "key17": "DiDRNgmNPswxQJwgWuvJg6n63bpQz4TX9fPQhdKM3xMRBHmCkJ2XAAvzuv6Z9d5iKpNeH777NmNc36SJFVac48z",
  "key18": "4HsWnwv7romuayuf6za3v18WkgBkBqWQrn1yTFh912hDJCuEVShphVFif4pVHeZyh2LztWB2gQcPzn5SocRwNN2",
  "key19": "38rNBteK41wXtxUMfkWVAmXF91kSALzUWRRBKeLpnhH7cwUytRjrhTpJCqnb9xZZSxoAMN5PdwyNKmfmErF5h7L6",
  "key20": "4s7SsH8Ct5DjTXuDaughuDZuXkrRSWNgTDXFtx5Ehwf7TZYGqhW6SHmq34WspuZmDhma57G2Lc46otohckieaYpX",
  "key21": "3GUSLMpcesGt8Wf5JsAqpnpRbkxQ5af1jfQsxBdVxTweBstMnCDAguqh3Cwue78KpYBZhzDfRs8T3C8KtwsTcKek",
  "key22": "34QEnTFyPJ7Aq85ZXdB3UGS9w1t7pcR8oGSrHFGq2FmdmZjhdXgAeiqGL4BBGjDLNTwnweYMjR7ojJDqQ5ZVrDWG",
  "key23": "4Ciewi2gpHtmCGDT9eBv79XDL8uSK32qRKZqfNxG2s8aAksBSbfRHu16D1Uaz8rRwTeYnWUK57u6dCY2Kq1uK2yL",
  "key24": "2yG3pugsNjfs4AE2K61WZTV7iDv8KWBrywebL8GLYNUNsEENVpM3ZsH1oyw2iqaeVogs32NitfGAUUExZM8pUbvc",
  "key25": "4PZqRxRgDUbP9nvNcutaBDrxiYe3hs1Yhmm8cCJa2J8HLzwntsSrXMU3aDvtwPaA2zo8WKAgSKvXY92wxxAGM6XN",
  "key26": "ARcq1m4MaqeJTyfcG5LjRR27WdgVxivSsuSVPez4jJ4vpArKJGBK9raAkUmkA3FR1vpb9cVU3wB9c62CH4YCB9y",
  "key27": "2PbTSrB4Gs1UQ4KPiHYSaMvMKC9vU4Au7Z5onEyroau94ABycK1w7mETPHUvw6ovqVT9Tcwu6Y1dyHoW5an5PcXL",
  "key28": "5mV1RAMY4BbvwzfiXUGSWUwV7faC33rCKVYLkhYLTEizqMMRqUDFSM87hEZ2PGYV8vzi1vEfRTbDor2emnUyZJeh",
  "key29": "4DaMpQY8zCPkvdDYnJoNBApSdqeegfVjh8nMrMypRqmwtYUS8C3SovdC8cn9Lt1po3KFS5o92ZS7gdDnhQKtUy6b",
  "key30": "2jTnG9YzQ4LxYhi3xRdT4ihXxRsRPbfGBa4bzWUGEUjvXMwudS5neSsxJfDVxchQvwpjfxLbgVXDLvNS4YntDV9Z",
  "key31": "SHmFVNUwBfsnjHi4peh6fxGF5gzS1hWtT3HjoUfKLdyNwXe4YWSaj5SBtcHboH5Svmty7qR1kRe56tpnPp3jEAC",
  "key32": "2GYk1UxqhHBD2UMDU5Hq5CvmSxPWYYtsFE6ZqXYY8vDVu7Fm4jUHdjhWd7oE8PAURBbaPqJuKJQK6mVqtnLX2TFJ",
  "key33": "4Ha122hkRee1J336aMta2y1P3QTi4QEhWxoYLhEAHZMygoEoFzchZgqiQSAURYLDoxTWCLq3MoYjYTbdR7vbUKgT",
  "key34": "2QYK8g7yCxKXDGYxxTGtzBhPfd3VEzWfzDe6kRHYT7sGhedf7UcYyh3VJ4NXzdMFGSPAk8v1W5gs79cyfyX8SpdE",
  "key35": "4joFoMib5g2eESoXKKs4bmEvy3E8nDd57UZBhp3x6TxniZHhF46nX13EXKRfrKAXhkMYjHxR1BzEbEY45NMLaeJk",
  "key36": "J6UNR5YWNBs878fiu7nNEvu4T4We13eovDA8J2bLgG47zzqwQLQZb49YAQEGBP5LGcZ1kogsA3LexoCxXbBpNLX",
  "key37": "46o62EdcsPJUhwK9xeKdU5XtQX6dkJQ3Yt4M9wn2kpkzaJy1pTMZKHb62WF2eFSGMnbg9AwQ4MLNNfEygAxupa98",
  "key38": "PwdxJZGryq7rzrtnqUukzmbNYyWps4a92JhUCVtk5U33JCBP1znDp79CZBTQbnZUvz3DVrMhmJJsNiygrK548tE",
  "key39": "rNPzqwFGzr1xnNp3CdHYwsJNJP96VGg5KavLfaaRkgC47xf1hxHZJU3F8cvwFYX8GnBAiKA3JaXYSP9HiMTZ7mJ",
  "key40": "3bbyifLy44aLHKvMAKi6eZEZHTzwX8t9k2bqyMy8diFA2VbhBd3E4c9S2SYx3fBhFJVUC2ecrUjoco6bG9LQ4TH4",
  "key41": "4zL3ccU7sWixGEDx6tWqRzjuQrNFYJApGc8vyrJWuYxLuNDtvpCTPbpeZeXt6oqxqA5A9oLXHXHcmwamsmPw9gfS",
  "key42": "3Xu3vxNcvxYMNAfMXyDTQTveePWyiCtvLdjYK4ejMxp4rHgfxoPgU4SCsgiWCGi9eTvjmbkZthZyV5wyAREBaj1w",
  "key43": "VQjqdb2o4DX7wuyXWxb9NAhRjs2ZL8Vwox9J2MQCirDDYVpGJ9tX1F9ET5xwzhd4ZumqKQTAj55CSPn5qsvr181",
  "key44": "46MxSvB6tatF6uWTx9VXhUYFBkqfU1dpdqAqygNUr1QyV3jHvHHfXdyvgxSHJtJ8DbX1sQ8PJp9s9nf5XT1wkPZD"
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
