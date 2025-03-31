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
    "5kLNjqjCFWuipV7EwzSy6oxazuh56KqAGeVey9Z3wzNyFgrGxWQKv4voFMhh1N1beebSUtfPZ9xsB2nRtvDiud5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfvhcSeAZgKZDdZzxAuSDmCiDLR6vqhtA4VW4tVq4KksMqPrHqZiqN4WBgQTS5PNesvLntwy5uySvTKzKBvVzGB",
  "key1": "3RRR3Z8sQua1RPEdC4x9UZS58P5hBBsitegFwkymV5qvPAHCePzc5whq8UzKNg9DbwhcuifBEq2NWCN2ZnobMsCG",
  "key2": "27Pqtv8e9dGjUby7bDS11pUfb4p1uN4dTt747iCVZ1D445dAqYuK9VSS7dsNyKAVezM41fxb8YXDnEBWSCfMBDoJ",
  "key3": "61UWwxrBCEKVooetYyCTH8r36h7YSEJhRjL5zrjoUxZKKZaigRxeaKG36zJ9K7i3J157W1eNjzWn7tkwe3XwQnom",
  "key4": "3fWCRyKZ7KU9293aiLngUcpsAfsxVjgaKcbfXbo9yS8cBzdmHyUC21sDEtb1jFaLmsk29xuM7REXkYFEm25ATg8f",
  "key5": "2UqyQK432FQff76xAk71JiTQVy38z66QyFmGXUR7PRKoioB4sViFLiqUAz1MnHGNSHdTuy17j5AaHZXvrWKyjCN3",
  "key6": "qzE3PPCjyoCmEtda5NcdhBQmznrTFhmx61HTLDy44UMYUZnRhd2Sg6tJMtjvDpWvtqh4vbu6Zqs4CDvVvCHRubh",
  "key7": "2g9Nn1rfy8qahXC6ym4xUcDuJ1Tb8LYSyTRy6kHo7vxrvynR728iz8qMTTyry8j7F2APMcTKrpRYx9sLVL2fwDcN",
  "key8": "3ejKjPuPzQkrjhTucDoDVz2418WiraPzNpS9MGqTKzS5gYj2Qb4FkGZwzHfK9MQtLapafgTPrRM2nbwG4p7Vo2D",
  "key9": "3fQQBQG1p7H47UiqC9uZfbgtQSNrTx3QJAB42131guST3giXAp8VnpxrbGjUwQfaaZd7cENtJ4RxGoWuKwivjBGA",
  "key10": "2WgRoYF7HHZo98yArWZpFzBGW2qqdKxX7KHi3j8MRrDD7qSmc3Kx1uyFhzhMhHMQ8HpQLkrgqWVRvXAXXDFVqpG4",
  "key11": "5aSF4rBQ45oRSq5zUs7DTRZafSs5Z6rGrUKk9koUHR1mHKmmLdUr7F5xdux5Mg8nqrHHKb9GouNGSdDiwYTrpLqs",
  "key12": "3sVEUzVtHqXiHtUebHfoqrPSJ1ij6HbiBNGM9BBHP6Za14rQvuAd5oHVc6RtCttCWfA1eNMTPNcsfgLki7zPginw",
  "key13": "2VfGBLeUksVSBU53wKQERvaHv1SbXMwgNpn6vAr5JaKAhsAEUdwQPzBiUeiqxXYHU41Be96zZaFNGamjxQxxnDcY",
  "key14": "5fFn7sX2AWH78MGvbqYtoCggx4KAVsA86wkdp4YoEUzByNq6A27xcsu9Zrj4DfPVi1sweR3AVs76Tn13nwhEMXNq",
  "key15": "4dqdkiF1GbQm4Z1C5XeGJNgQQpibXqRoZTQqV1WJyHuXe88u3kfroyKpWhbwKnwGv2vNLWDJf8inFyWTDWA391Hj",
  "key16": "3j3gxUXq5vfeUdhGkTdDpB7UpLxBds5eWSMt48G2JCKTVKccsy7Bza6yFpHHS5RSNp682k39CPGkW1c7t5F2B958",
  "key17": "4fwktHjaN1DycEZemcw2pdCYVWa5cuiGg24cjBBdibbNmhyiJeJib2fxb1JXBi7W6wu6jp27GY1zuoc7Uu8gKzmN",
  "key18": "28niK4hkFRsssXaNnQU3cJcHfb5Nv9ZXjNs3hkigMhfDjEyyW3VQYB2FNy5eo2beaHVz5nzEnJ9aQ6zthdtYyDf6",
  "key19": "54ocSsYLYcywkiqza5kBKNnkK8UW9pHfzuCH7MRKD9jv8xpCXPwS5XaJRMGUR9ZGJcnWsXxYMuaYv1ptap3U8Byk",
  "key20": "2WeNQGUdpsf5hCg3Fa6wQyospEJMaY36hTDvaUvTqKGSB7PixgE4FZk397M9aZBB7XnM77gYCXUb185PJQGbHu5",
  "key21": "33R3JEV2KoF5PJNsN8LitqYyYRGM5p9iLTbFNYA5efM29w9Rz8B7QBvvPUEF7jgKTJD8ThFeJUgoutHN6AaLnHsa",
  "key22": "5mJHrPwpWJpeDZa5PWK6PjJjk2YBTJWUNsYFhEgVR8JPmGdAMqw7h8YVRP4DaWEQG5yPJEEnwukseigQKZLP8XKs",
  "key23": "53WzTQfG9PuXfGdqwJVKFnMQnkcYkJzgomkMVtXh7X1DV9kkKBaufLwL6aVXVtyWLR9rpujXoWM8YqwN5h6UQQhj",
  "key24": "3wvQSckywgz1Nh1hwerLWmVEhxAKL7HmbLbbPKYnDXWqMQZ3jf4cKES13HogAxYJaW8hPaBTxnmrKZb7z24Ea85s",
  "key25": "KdzesaBfhXsDYfmJyN8EtKzkRfm54iEFAVdBngdBYWoL8aBoWJuBMz3Tup3K5Rdqzu8vZGjfJGjfn54UZAN1TXv",
  "key26": "3zkrAwPg1d6D5XtXreH2UcxUq7nu4nY654WALrgoFiogBRCzh2cTAJnhq18dPUjVVy1nQwBhj4oNAyc2ReTo4Kmg",
  "key27": "4SBSphMEefhAcgJy3eWyp6nhi8nDUVH4uCuh9TqBqumxcPqxvZ3QYBEQLtVfC9SooF8rTt8K6omoF23XNfP43onv",
  "key28": "5zDwQa8aVGU7vQb7pnNKSE6Qa6pTXVd1fcappLNTsJbTCUPtjFxfC7hV6kcaEpCQq2ciQgLCK8uziZRxfQmrNuU8",
  "key29": "4DiGaghoJLXXw3gMoUSxHK4s52TZi8nLw9Q54k9TtX7PRSihYyp1Vcd5hNpzBUTLJbo1QoG1W8LtLL9fTCBJWYQ7",
  "key30": "43C4vz4WVgvDLShaWyq1FzdszD1WLKJzcKXmPZD9B2iPRvhNGZQDJKz11gesnV7GJwt5jWkWfS6kRBnrJ97cy2Xv",
  "key31": "2goVS4Hcy1oF9KR1z2UQ4AgDNuKMoBZDHnHsG7qcCqY33GhWDssUC1BEzwSfDKB7DQPG6SzasSxn8HTPCzFvwAEZ",
  "key32": "29Jf8j4Q1erY85YaR3fqu56B5rU4djM8PM9FTVcsiFq5yMyrLYXUCv2RbtHL7WRYsmhiKurUoSokooJWaovYK6Qf",
  "key33": "ew4MTevi6emtShntys6PUPjDntM7FD6DXbEtft7GgSpBUzie4m5F8FEQpQg9JKZZ8m9iQMjFM2qxHDW7YRWyamq",
  "key34": "3QZXzoBQPbSAzieXyYrX2PoDPSkWtX4TjNKdcJh1v15eY6PYNCaaogYewcMB1YVe8fV28CwxwCiLNrGyqaCRdAER",
  "key35": "v7K2Mvfuvgj9KyRbjZeEPddTJ5sAXwnJPvKFtgUR9pme4Gur7Ps8SgqHEgr2Hj3xRZjcWB8BptpHxB1QJNuNJZK",
  "key36": "21DJXXBdo7fcFCSKHJDapPogR7LU9nPeQjEPGPp7pD9WUTgir5kckxD7o4MGspFRM9r72HyA4FN3aoj16zJ5FT5d",
  "key37": "4uppASqRPw8E3aKXcqFUL27h6mwmteP52azcEU9iSroFoaj3PMfPAExfdJxRdfb29HSH1CjL8tXKtxiPw6QF2x4K",
  "key38": "2fFmC4Cxe1iZADhbSvJ7NQbc7p5qXFV5zp2S9CpCzjPWyxRQrZDxji1NhCBaDphbYRfGeQ1sofzgjeRLWZnSnNqG",
  "key39": "3jV7zVtUW9w1Ka6YeJi1PCSzzoUeuNiruNHs2rvRrbgjeCa6jcieAzEkNFo6msnDKzkhk532ECYhq7pjDjaoSKnN",
  "key40": "2mLdB6Yt1TZ6h77AyXh8jzSWB5XvjXyN29KLpt9vLjANJTtSKMEL8duzVYupu6Zw3ERmpdKNMwU2uUYGPB3vjwwE",
  "key41": "yWKh2YAKuX3N8fyqXK84sLefoNmx8K523oxzXyig7yCuh57TA2ruTZyq8Loax2P3imdZe3osuSh9TdUkdtn7rip",
  "key42": "2V8S4446k6MLuf3yGQHhgZkNHq8N3Cdc4C2Dk4Asrk54gZ4NKQyms6XC19rj7mBCnDVMsQ2b8HWyQCjJpnWp6qvW",
  "key43": "5YuY7cWykFVANFBgeTptUdXTDnFwohBDdjQyV4vFCqPGooQvx2NcHhmBvLmcbnzQPdRFKcPvkyryH99eqSat8rpG",
  "key44": "36RkDT8idU3frU9hrr36yNNjMndF1va7dyyqWZr77GvrYfqjcLCkMva1EDBnrMUqAXedcAFbWnPHpePL8c4dAwFZ",
  "key45": "4dtiTP5kQkFGF4cByXKTQmcPASv9WXTazaGGjZz2V4yY3XWhkXdhqejooGzbKYPRrZo29NiE5XwdSLVYk9tBvQhK",
  "key46": "3XRujb6NHss2KDXcfYQFxxpJg6t76XXUGKuiVjG6GLsSV53QaDywN664A8PmoiUs7RbPMMfWUkqEgGFdJaotPTgt",
  "key47": "4Ebd3cYmFU5jV4u58RwvxJZHCq5GWDj2ZvHqciKvseJeRJE5Y79ZPXJBMy2fD7V93U6nGAwGiWBLTrHvkmnQygUs",
  "key48": "38xpotqh9PLUGMp66wC4Vh8xUxQNdtVRYgMFm7TeDmA1Uzddgm5k4wXCyXpHKYduEy8cFMU4waz4hA8azQunzEdC"
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
