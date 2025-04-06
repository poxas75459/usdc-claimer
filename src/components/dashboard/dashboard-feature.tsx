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
    "kts2uhMrD5bqFErWsMYNVhYuEzuR39W75DbMPMkE3BTZbzHqtPiXRaLRsxiJbYJLmgb3FBvCMadPYkE9BntJUcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ftti3bNvHVULrn7G3cTdCq2G5ZM8HPfkaEypfVycphbabgMd6JUknJgS6rbNHSqpfGa81Ywrt4etngi1c9S7Kq",
  "key1": "o1hdnxqCVc4LguLFgbFFsTLKQ4ewMNW75ftb5q3WowYAVFsBCjTcuqKZTy5GcqiccKJFAy732vxRX6D554huJn4",
  "key2": "2RPw8W2n3MYUZd84XdWxagjNjVmZFEvdNnaCXWET1YjaBM2DWcbvAskAs1inbdBmqrPX5Qen9Zdtumjzx4Urcw2w",
  "key3": "52yupmbvSeRH1UQVmuW87vkBBYF6XuPDgV3nMd5cQqHKS7gWtJoSA59VczeB1R6jk3Xgk3mHLLbRmSbyp3up3n4b",
  "key4": "4ZARCfunMyDsxEKcZanMsPcAJQFS5DU9jxJ2GjZhWQdCxzXP4Kb32BLCx8FzZozVez7Hajiwcayif3NQJQqKDAEh",
  "key5": "PpPXg8QYBuQvyYkG7vpm4FTLGXBZ6Vo1cE17KcGAm1tudWAyGGZYdc8XNcrB3mG2FoenvCQr6tLMAAydaUMe5qH",
  "key6": "SSqKLPr8hsECTx3FaepwxdQgpL1NHHpdcRuzbaScFzQU4XsSMBo9Yt7tNmSmr338f9xB3eQfSPmD5GFY1dLap5t",
  "key7": "2PNJqm8xLkrz5MxL7saz9NiY2zd6VVyuPwpiniGYZCcXx1ymQgdxY13mBH4tDcjTMr7WRikJi7Xagf5bLCfHcEkJ",
  "key8": "2QzXJNkNQSQYKhBDcb4HgSfeSBoNegokk79jKJR9xKFbtKfiQJUSLukH8WUZ5c2fLfhomvt7wtgn9n5AR77utoAm",
  "key9": "pzKCZQxqoWj6sKAXfeiDJCmjQPgKr7ndyHX6KUudnvuNvrzsweXGxqZrBpd8XKeSS7LpVjnVjAZFCveyyHWjrHa",
  "key10": "27qgmGmbu7m5ZBpAHyHeyXq6LQX3PsBwpQ8eHWeYtNUH1KSzBjZ3KTT8iHQ1KxffEf2TQKoemZqS24z2Qj65nJgf",
  "key11": "62PUeWNrHgftDYLng4CD5PJtsbVUiUqH8S7QXBSrv1V1P8nGu9xrFNxan2hEWaWxMKcr3pMPBHYfz4KG1PdSVro9",
  "key12": "4N6NGTp9LSfNxWBGhtrJVeoRdsbuLJuip5DXCH9oZ2wUsu1muouM6ARrf2HWLbEf14Qkhp98z6ZKFwJW7yxzokxc",
  "key13": "5TbQE38iupLjUy6ao2uFrTnDh7xZNwW1iE4e5YhSVGUqx83KEAZ4cNKHdaM1qX8ezhH3PaYNBnNF7t9V5JUXzFqg",
  "key14": "pYFamixst8Z87Yv1mtmCqmzKB6oZHxf9QfA5zdCSRvLqFjUTZ9tRsJYZ8oKEF6ShpaJV9onwFamcXzzsS663Qq4",
  "key15": "4xnjHGxxzeRTr71Pj3zeibAkz1CCdLDLjNb939E6NoTbAmiyn4pWxUuxu5NEJrEA4STti4Wptd2jZkgTfr35Rh3i",
  "key16": "3JCG27nV75aymBGy4NP2U4s6dm3PWgoAG9H7LqhE12rTgqp25r7iwwUGcjGWehxRMQnRBeLqnA7rR4mY97BDWpMe",
  "key17": "2F83Frs7zbfXzjr4aNgJsDD4wNj2Zj6few4dNXuffXqxuYsn1zb4tfPW7QvgxXYLrFuAWJ8vSB7CrArujrQJRfu3",
  "key18": "4GcZWDDERvLgapn3iXkyNPgL3AmdYfabqVQfTyw2sBgKfAodMe9H4oQTCNdtUk6aNhtVUo4Bi9J3eyB15bmZeJsZ",
  "key19": "5BjXPMsQK6bRqUiBRrbBDMKkTNz2o1Nt1kbNEvnKW5DTUwEtfs9RqYmrE23d8gLzK4Cb3niRhzqHAkDNDSNbS8ZV",
  "key20": "28aAKWDrYdtcqUcNfrfnBvRGz5M774GEW9kEqNGPcZaFwc2J4upFV7Kh5N5cUtaQPMZVjfWtmjfuQZJtjsEtvTU1",
  "key21": "2LnmprLdYVVwX67D2BNd9pnmtMqQpt3bbxncj28FCYnMEpXEyrn2ieVmG1sDpwEJY4ZK1HFthUNRF5YRLxY9VGcw",
  "key22": "fgN9rWzUyDYhsqg7ds7sFzRsXRJTRzaKpuoLtcXWA6kPderyUZgGCmfeHXsU7BzAjZhYUq2kdMGTReHqC47EutS",
  "key23": "2mQYoBzWEGfEzZiGctaG4L3varrT5pENZeaXu9bx7Nu8PyTYo1ngR5QfSfuxAaKjApznuDCrhLbv7seqBQHyzhVe",
  "key24": "2v6oX7mqu1MQcYh7BD1RfeuQznhNE5qfXKDJS8q6YpxP1iZE2XeNDL231p5ExENEei2hyBPamtfQyP29V44exYhm",
  "key25": "3hPJnmHL8xFVjcaWF1Yp9dR8FS9c3U6Q7okaQLFZnfxkKufXrrBQTEDGrcuPdchPJ6ao4bTGe2hWdXsgu8V21Ukv",
  "key26": "5BkAZ18HWmH5xHXw5oT8qax2HY3aWTEQDwqccQm3SRmiS6LGo36TuES4uHyXYe4mSTvM6eVS47F7RjvCjhwb2diS",
  "key27": "33YawKE6ZG2EyVAB6Eqkm51ZJ2owW7NdWuFVq7sB6feS4nxuwHhzm8H1hWAiworwochTcWQ3x47p5XRCbPN7b26C",
  "key28": "3t91yxsUZqceBmVGkh6vA2Vmt5DT62qJiZpcTNkiGADwGR2ZicBKEm78FbpcihngbjJNwyHGPuxzFVHnzTWPCS7E",
  "key29": "4qSH5zaHXnsXxoyWwYcrkkbF2LjNgq5GovD3SHj3Y6thCa9rCL2ZCfFWsT1uj39t8aKfCk4vqDHkNi4omqkzC8Yz",
  "key30": "2fbapoEKsAZevdX7J9mGcSA5sG6PKc2y1X94Jmy8eQ4oHFSws3gf6zLyTaKbijTfSnSdChcwvcnxZXxJWE1Zi7aQ",
  "key31": "4cPHcsnPQYKR426Eyx3fDHXoQPxLGGudDG2QCr2s8xwVq6tYJMUGdyBj65A7EVN3ppw2JiKGTG5SHh91evGQajMk",
  "key32": "2U7wHgetUSHgyysJo8oa3eLmQZLBuQzKaf5wR6KgubdyruLiYjku3zM76ZytjnRDGciEfxhkYGEWGh1ws5P9dHzt",
  "key33": "4p54AXKrxV5wvs2PFy4Gw4uLrGrh795AyKgFry3GntmS2aHxNfW5KgwAwn2GVqVKyY6uag2z1ygpKFumBCqAX67G",
  "key34": "3uCX8kUtGQHqWwJLxJ56FoAjaVADFXZcvquHfu2V7D2kHgyzPyVkAir4Afd2QDsKj2FnpnDhfadmVhkp2MAp5vHE",
  "key35": "4pqpFkfuebCt2g6Md5wtGeoXrALAhDgVdegrfvwoTzwFLHawWzpnveRkhQeHPEQvfFABTPyRHoWir8v8tfFbHDnB",
  "key36": "2mUMhgwXGuU7LPywq3WrvC4NBA9WTFc8BjfUcaBP1um9F3ZZdRN4VQLo8N7vtpmuTc9RFN8pn4HXXpFCaWkp2c1q",
  "key37": "3bAM35hk6YfFSG2L54gwDfpgNueZBJVaaFUJmfj5tpEJduBh8e4SX6NPLmMC5sZbNUDy9cTa53A5M32yg7bifFMS",
  "key38": "3TtDHu15CBcnPXeFrB22sFBjVGjadd2c3VbiM6FxCdSNP4ymXfZbotSenisjvbXJPaeUAB7MSyTDYG4JDYgbLCS",
  "key39": "3juEPKQYViSXB98uibif3J4yCeTTmDNaJavBhEoQLVf5tryfTbenWNfKjGbiZ2zXECN5YE3UC2CqZvtQButX79gr",
  "key40": "5LuzJgn9mXQnRBeQVcFqyFpbnPN5RiBn5Zq7pefhWuDsNGHBk7ixf26iXxiD3NBHJ84UUt8qCuPFoFKnk6genE11",
  "key41": "3PuaFWD5x4yX8QA7m2h62QQz4sfZXGZGi8Fza2yG3fnAG2gEQQDwh4rvM7vXMniTWEdDiJDGL3mhZ2c4mD9XHDUM",
  "key42": "3RGRXWaXgB941eQfd1ak6X6d2Kh9HMmdLkCRnmtHGgfw45qBZmgjmbQWBsX3RL14ADZiYwUT9cw5yY2MaTBusRni",
  "key43": "4GdMpzadpSX6fgFNLHfBK3G66Y3ZXhtZAjwWWavaS9V3CWDTE4FuhL4t66Y4jrZHfzrsBSvrHdQV9FwqtUpm2ic9",
  "key44": "2455n8nh6bhws966ZYdQsHE784auvAXEc68bUyPti6dZGR5CvfA9rPp63diFAo475L6Spy3tChK78KLrbELAvtdr",
  "key45": "4v36cqKZQwPtkdqKdruotVms4X7kud9JTBZ4dD6WCx5RzoP5ScohV6Td9MxK5HJRLYfzXsmUnnTBkYD2MRMczQSL",
  "key46": "3FbHmECHJf24iXvmC8s8QJnoNyxbRrMUFL9RZsPwksaytPRT1NUK2kigfYQojqQMVK8gbEjS8vrAeEe4Z2spLm5L",
  "key47": "WGmiGDzjDoK76VUgxVG78cNF4hL7yChajVpdjy3GVuGWuqiNfp9ZtCRAbDpch73XR41CgZmLHaEAX7L5sULVxNi"
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
