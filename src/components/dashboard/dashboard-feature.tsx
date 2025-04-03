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
    "4SrKEJkpRwUWckPNqdw6324PJ4fur6BAGHRQvBjY3Aih8RvR95Y6L8fJa1mCuWGFeJDXnGg4KJFgyuxRk25uLJDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EdyYzRbJBBXErbsmcT5JsBeWRU6dmGua6PnXEX6Kpjmfm6ZaMB6FJp1H3rxdwTuDshoShr4AAWqtVbbrCuZuyn7",
  "key1": "47W8zp4AfBMKaQUXxhHCqA27KSEbQ64YNf6f21BxEoAPuPCkWunty1mDhvSnjS1GjTuVRCRc6m3zToAXiQ3myGe7",
  "key2": "46M6E7tCAFw4CnWk1nFhWeRwTwYD1tiP3wHyWwUA19VPnWQdcL6Hrpy8puch5pM94RSc6XKhtvXbAyWn2TXcdYb7",
  "key3": "QRSMe4kn5ZqRpr7c833r5HTW9G3MkDBzKPZWkWJ5USXXv9ijD2VSBadfZQvBrAmtdpBk6iyWjZsDsSMhhXDSF1w",
  "key4": "ZyfaudF9F9hUMsi3tVJFGMhK5ktz9CvxneogqwVthzPgLEQtb1Jh58Xi9RB2H9pVXxpdNgg9mS9vJJm5znEALJN",
  "key5": "4YEamBeXhduMPaJK4yh5fJBXkHPaqfdArKWphA62rY9MJLriiJPkE1Y7eg5pQMiPtiq6P36iAMbjwociEhqi2qsK",
  "key6": "3KagVBBSJSAHkuScNa1V6GYni4o6oNfMsk2VbJnmFgro5uR5Z7L8gMPiG7w84KmRmhZGXa72kj8chsCHhcqX4zFZ",
  "key7": "4WGhH55dkvqe8AMezFFYpkYgxTGtkZH4VnZKFJuVdMznXpnt7eXxi6CrVLuWuufaxozaieArQcJUoYcRWbRkD339",
  "key8": "5kcHv6mYegqSDZmcbZBjkX7TXXrtR9deX1CM73nso3EKucFoRxZNY9L6J8nVRikDekpwq7tuLec3tBg6zGnVozh7",
  "key9": "ppWLHAgtQFkvszMiSn2VbttXqxRSgTWrhP1a3hEpUbnPxdzSqReocJtzhhGVJg3RJhKxajCS6PTqJwFgUcy6dhp",
  "key10": "JhipG2PfEWjYqLnfxm5Ko5Cu9ioJ3H2pAanEyRCNUux7Vz3YHWv9jMVLPpRnfnEvwuBxoCC1dhFNVe8i5TZLv1X",
  "key11": "4LdMWfPzhW7SjpBoVvr4jRSey8jDdU9jJGYyDxi3dkjPhkRUUojLYFA3twoWa5wSNburrR353chyTXUVNi1W9Scx",
  "key12": "2dZkBwdagXpVqMmtu3jdGRs5xTEmu3iFyZwCpHnkzcSCD2JdYmmrxNrr7PStWbwhtixvvLs1jAoTT5cYAX3TbqbE",
  "key13": "53N6zwMeovSctqcHBrSA1EdWDBZyKSNUpEMb9gV1gek12gyZHaJTTFDZPLCbepyNcCrjDNA4EvUqZSBxSau2UHCd",
  "key14": "5ZZKwSDWuGHznZkPbnTAYrnFDTotgSGipvZD9BWod4E2SRs5XR92J2XR6jJCdar8LwJ3h7jY9QJfgDrmWEQvqXDQ",
  "key15": "43foKnsbMzgkSK41Aj7gpVyQmRRiNYNp8NS6wjxhjrdjSa7zZ3gcwCdKtw5mAqPvqCbix7CCk529s9eGWT6qXnfV",
  "key16": "5b9W4wDqMW9r8f2fHs5xA7VeLfyNJa7ZWZQZ5d3Rjj7vhyL9ph8qCNDFfGaR8gFAAbcuMcJNpWfgiHPuynaNraRg",
  "key17": "Vj2ibzPD4nFK56tDrnraEahHzTFaawKNKzE19ynjv1wMB4p4ezAJRLicupNxLaAkSr7LoGMkGeAbH4PaZVuetta",
  "key18": "2vQ4MnCY3bKXybSeGUrFLNFNBpUJXxGCKGYJ65UhPY4opS5FMDNxXLDNBAq5okkJFXd8ZvdnxyHtDtrLMrSvT6bS",
  "key19": "28DheaR3VbeL2jLP4PqTq72MiTTw6jqdhcBAUV2HwLbEy1REsKSPiviShat9baWEr4iT5tR2WQEnuGixiUmdib1K",
  "key20": "2D1sTVAbQcVxT3Ea3CXQp5dBx9XWMu61FrEhVnQFeNpV4nzu7XcytwxYP5ibNyAQVwLERjunwdCP5Xqdfj3Hy7bK",
  "key21": "3RiBjJpdMmwgJPxRPyrjiivsVvLSarjb2nMVaoEo8eBQ3gzxfbqK68ahgRP5UEJqfGy3HYeLq5BjNghDwWuh2bUW",
  "key22": "4AN86S86awfkYTPxgEWVhvJWdiHr4xvd4pwfjNkNwEBefgrU1utfszLiznwA4DTeEzLDAxvpH7YJhjSUHLqnok8g",
  "key23": "4QTpzQjNBSU9DkbL4XZ4CDBm3toLxYMfdREg7i8coTwx4T6GwmcsLZJuSp9Apg2vqpgux4EXxKocPLN6rFvcu6TS",
  "key24": "5whBMm3qdqvSzmtCks5oeomMYsk2sbswVmYr9WtQuBo1fs9RChHr5YdKo6b4qcpogM7vhWJ9G9aFEfFvTA4eFG2U",
  "key25": "BGeLrmroG176mhZoQ95nBuiVXoAE9cjzQv2SKBtySNsRLJwZXjaAemtp6GCmMyMtSUtH7xF3uDBzUhb4GfLRrMk",
  "key26": "2nZrhHW23HmsEecjD1yxDPQuu5CBUXvhLXYaXsWrAhdN8Y2LaeAyUXvy7LkB7goPNx5xGuLvSp2rcrkyyDze6ygo",
  "key27": "XZs6giF7eLLkYyPPwAwFU5nihNyqJyzurkeWyVfKyM8mYcCbWpTVpLxpo5q8SxUDpSGNiqPb5VaER83u6w5dZKD",
  "key28": "5L4s7UZmQtY3mjaZzi9qJzZy72mW9RdA9243h2N5XFUZmNkJL9QNfwjxZEgH4dAKiXPi6oT9DpKsd6sMu3q7sxhV",
  "key29": "2xjAJpsNS6nLhXzMWTjuBPvt1FdW5AjuS9xznuAn4d5k8ZJgNHW1ggrgZJdjvRuXZecy9un2TBj8uxKq3BZnPrxT",
  "key30": "4au2tgRLnijJa3cLatbCBgyTRmLoBmWgBxZFLnvwvBEA3suYn4nzZvTrVMGfwVLPe7sP6oaN1fRpN2YB13qaqAwL",
  "key31": "3Kc8cDXg6YxqkjU4qiK4PDgF7nQtPq1c4ARnyR5unWsN4eYKx7ow8EionHPBSFWfNojetVVWBCGTRyHGBhHgEKAm",
  "key32": "5PoPWtnwvTowYHyPAuirVfGXUvfqejsRSUAuL7DZ49L8sgqYCQ8WLuWp5VZkoQtAj5VZP5yLeHtc1BBhMafhfpAs",
  "key33": "2ojSMiowHw1vFVVMtrPnbWMKyEEvjUDfACEP68VAf6g2eTuwWpGdBTKzjegDjQ5Fq39BHUFJsk3mQrQetMfX8r9E",
  "key34": "DV5CSsRttKX7gCvH5C6XCZxb5SUbx9VddAz6EYbbGTZEGkfb9p88NW1ib2wBosrFGxwUZfsbRYHYUbLJZ6Mp4zH",
  "key35": "ijnJWDj8ERc5cVRoTmi4q3WxwXyQWFpX8C751rawRrdYYhj87gTupvcte7uyrAhZ4fSpSifThM4tVwda3MQ1D8S",
  "key36": "46T4kYYejhCHVtgWC6xaTzaacmATc22LEEgrP74Xa72h9zDbdV6H3noUbr8rFzjt4EZ9v42aRDraPh9iaEveVtpv",
  "key37": "4SRTFHXmuXKad52vd17JtbcKYvkRDHNTJTiLDYd36uoDh78dCVL2dgw9Sm3G1BDcS1sRxXeCLEACxEsMtSzxNDcq",
  "key38": "24geYnejvm3DoJR9VvMHAme6WdtYyFm1Yfod2WjYhsWzvmeAR6TmqSj2fbdcsy2nDVoaBHmBShbXH7yiBEskp67S",
  "key39": "2iay6zQCbxfnJMdAQcQwDbrvVxe6APdJnYKyNyXp7pFpGbHbepC5o5AwtWJNJvbpvJVJBEMPB6aLG5NebcgYouZe",
  "key40": "vRQcxf5odVsxzXzDxjLrD39iJg9WrRSs74NQnEZ4F86Us6peUHxiHGoFTz7fYxkYt68hyWG8bDyDyFQJwYh6cc1",
  "key41": "3bQ5UmG4S2PiPxB6BfH8oTTCrA2dyEc51XQ8G9SuMmjKBUraBPQuwZTHQ1fbexGPv3HgxSwrgJCaq4fneLfFBTQM",
  "key42": "2qmpV9WaFzSvBv8uUS53Ba9pbcUaUFPg8CeqB3yiU9Zf7WyRrrYTGCK3qxSUgv6WEK8uzzQKoB1PEJWn8DMtEgpV",
  "key43": "4W1pNtbH6fGjARmDMx68iSMntVKeXRSvYV1W9ucxGE6bqsTeW869mRF4dKg5b6D6dgTCigHDJAMYfsYHEmPyQrRw",
  "key44": "546b3LuMZ7hoFk2WX7zsyFEdhk3LkVXVr7b6NvTqf8P7tHzT7ABBk3R2E7yjyvGYLqTDkM3SkCr4yMV8ou9euFav",
  "key45": "2GU9dHJgtayugRno3N7cTCitQDNJUpviSkvxoufoBuwnsuBYFxE7Qn1cm3EoPW6Hw9J3dvkxKoohVpKYwEkguFqw",
  "key46": "3RJ8TaRwBVdRbsu84F6bRnKWhtGT51fPr4o5rXw3F6FQoyE2oQ87CQ7M3c94F2xcfGZ388vDKK9KEgRUqZftup4C",
  "key47": "34xyrJFmjnWT6QhSwVW9qb2yFwBybXFAKF3UazTRHBTCvQ8AvYq1F8o6QFLgmfdnPxCYPo26XPRZEiFEi9PvN3Zs",
  "key48": "3ZymajQENA695cezcHCJzxFwdect61Mg3xCzFvMYxyMBQUvrxSDadkc2rjTd5nYSsMPZMhJbzTFPdQdX1cmd1GJp"
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
