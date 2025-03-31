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
    "4UyYHtjxMEaFurcGWpFDfSNgtMyF4KqVPtPBgoWjCZZTHSX3PQPe4Gtpy9AH7Z7GDBH8LV347eFZnDymUv5c3qGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623S7tJNxLbtedo54ySeuiVpMwEroGxFAAvjN936tb9FfrxsUhy2bGgTJou8TgAqE2pmDet6d5YX5YMWPFAwCWzu",
  "key1": "3Y6FrJjhCPuGARCYNoTNDmwc3PYKzX9oGoxujF5qFB3r1ikfQXAZFA8c5Jf9WULUR8sspcPpuuNgsZqdDSQydvSk",
  "key2": "4pfgZ42XPoSwYeedJ18rFYcuJY4kxJ5qxU7NdgAuz49sBxnKyPRP61BuFSEdxrjQXJtJ1AmDmJnNDfXA4YtmDT3X",
  "key3": "2JjQHHhjXDatEXoz7MtxbYAtFa9uTwkeyzfhP4YM4SjXJexzKnbEvTAX4WRW8wi5SvbVzVxiBG2YH7eNLc84UkaC",
  "key4": "2mo5vEFaG6UHcJyDabPMQ9dN3JGCW6ZSELqo2reoJk8UzjH5kgS7Su91W4B8QW5px3tdLf57uC11znBx93ZMaQhA",
  "key5": "3XgwvGXxB25vA9We5ju46k29dTXe7TtGGfFXbrvNwJ4w4cUcoyBR9g1yehn7vzVPZZXja5462CpxvQkQNMtpcymb",
  "key6": "AfvkUqfiMWs6rEXA2teejjQpVgmpTCpEdEDC9tZBLo5gTppkRiBRpT8E5u6G61NHEJLutRexXzeWisvehj4TdnZ",
  "key7": "5PDqk4QbaMxgJuAGaUtNZpSCPSBPuRNbAqPamgsfDyTLUBFSSgofvi1GHpuyyyuniADyCtLVsDGB6zEMDfATSMfB",
  "key8": "64pRdz5V8yQh8MJESWSzEusiDLSuC4XspKQLQDzckZyVL81ZZkZGfzGEER4xNR22AsUFk8nVnqtfUU9t1z2s4MmJ",
  "key9": "5N4G6x1VpLtW8fr4ukrZrJnuiVN4XohFhhoD4tcjHSpNq4pD54isKbseMEKBngMhtxwFuEbe2m3F8x6ubreGtmzn",
  "key10": "2bhzJQNG8fSVPKfeQY1HPMVctRPqb2pWCw61JyNMagfjqrwahS59PZLdnEnLGPc4orVXhCbz7Mqv36FjEEfipGWn",
  "key11": "2qgMF6qaWvqqVcrvqM1jX3JchmxfkpNQbKLrutQoounaogEKZeGt7RPwgZV5yAX4jkdTDPuKcKH88JEfupAwcXJs",
  "key12": "5DW2qS1vZLdEKmNZbVgsoqMWqYwYcp1XBDRfqrwsHkzHdbQwPmzbJBTTwSGzmRD66knwNcf4kBbcxH7YxpGqZ9rD",
  "key13": "62xLyiCz1GeTBAtis1pW5k5LK5AmoaDrvZSKdAtM9p8iouugRYai8jYz8LFwhbcNTqWWm6vLAk25CPfttfzU3Q7q",
  "key14": "3twpRMxvvjBCVnZM8VHFqaoHmHiGuc52jrzAhbY9S4jVo1EdgFaZKsPATQhrAPxQLwSCo2oq6YUN4HoMzfCwncjg",
  "key15": "v8ynKfQqJSMBY4grPcpSz43aeX7sUhu9WmLQvLH1fUZoAp1K4HYj3e4sKfbxuwS4jSnXhEWEadSS1RMbZDFM8Va",
  "key16": "56WvcENos2Bx89P2vkYnxA26RJVQw8WfW4czKrodZAajitYm7v4m3HWrtoRjzii2hMmp9onnbUNL8scfQFmGRt3f",
  "key17": "3ux1MfinuQ7mzbTD3WnW1eBB1SJjGqUFdr2rwLEHRiVaDsjf7npyfhBeSSmqvKVBKMoXE8d5FhPm8ZpCt5dNo7Ye",
  "key18": "5LXY6YefjwwbKfFM9AA5uhjURdsCijx7g9WkTZfYnLgrLZc7bQcfU6EmoVTCDyfGvaGdWmM6NX7bzCWZxv5nvjqT",
  "key19": "1DeK7QvLRAHdkwz4jud4txnmhqR5yWvbtqnUNzadK2bUEkPvGX9m7J3HrZXt3MU7L7fH95wSFLYs6h7gTWJ69eo",
  "key20": "3mD3uYrjg8Cjbbi5rH5tS3UEyktao3cCdNpdE4nkTJqssMKAyW26VCT4KG5qMBnaubBKYNqPPwLwc8HFBvKrAaX5",
  "key21": "NRGKHNqfUkk64TYEEPBe5NExD65voCenG66FHsAVohK37P75MbFczVU8vbN7ZHbRiN7Xp5cF8f2GDVdkZpBkZQm",
  "key22": "4kwy1m8zRzMvW8TZ2PZksryGXVV9Fk1rQpdJnJ5k6xYbVzwBqzZF8nR616UuVuSZsJHdqyMWm3jAPzA7DkKPhZJ1",
  "key23": "to7BmAy7dWKS9sUxc6HXAtLysfMpA812MctCGJ5JzAiJbYNVmfYM9mtgtGAKeccSMgtWtzwnpGhv3t5m7yryDpT",
  "key24": "5cRd2b6zscDz43tGJS1qHQBw9S2nBtiDfjAwuFgasbNPB2eddNCbT8bMidvnVa77xzQZfopCsWAgesB3JTuYgg9H",
  "key25": "2ZmRaHPAN8FY6KiVnjZoiZZLBFvfBNmixrGSDtNNaMrLUE1stSuWLHQViVd9Ctb7Mq6in982Ntz9FwdoBBdrYhGq",
  "key26": "4ZLNFD6cZ1dLHkWMH2T4fU6xkRjAKyrYEsAJwTE8XsB3B4j3mHPzHd1Ku43EXWJbbisQDtpYgAQGoNazRbmgqBtv",
  "key27": "29XpvQxZxbo1Bp9RqTYDvENKTyK7KXeNFd3oo58iEp4t4RAZpNYTNbncKktx1Mqj5nYuUCBhieXeKuYr5Wg1vJcw",
  "key28": "4XikHj9aWPnk9tV4afsQtyqCcBPnDToMHqxMxCSiA9sQBM3Lhi7BbWt4XngY8oJKyUcA8JrLFze1FnAY9NRZRkVU",
  "key29": "5WNt2x9pLVvSKHRcTnfjbrgYLXhmHHMYBgKdtGgxQnYav1JkgNntZrMbJFJiPy7USu3xN2KAYEoMys9G8sBnrFj3",
  "key30": "62Jvebz192AhsFaZCy4rnhqJRtGUdKUzXw52LdLYrYs6wsyXTZbCKyhF44ttsduDmqo5oL7HEytura8sGRxeGLXo",
  "key31": "2VXKnpwEkJfrZ1fmWyN4w9wreh8fCjd3uEmovmBR4WXj6PnN8VqmMHChC7WJmWoh6B48sDUBh5VL3P11u8wXYjor",
  "key32": "5E92YCrbnB2v7EAJkQcax4BespNBRDdZvq16LZaViZXozT8xc5t6PUVVsXZihi3uzXdrXzy7KcYDKjYuFJUXCv42",
  "key33": "f4UTX9ABvYudvqU2mEYSWwoxxqmezQs93jH9wFzXe98XXcVvPFTErAsG4xLgKbWayPiMqRUAQMMHjYo2PfcPgL6",
  "key34": "5WoM3g1XaiPunVUVaFMwQv77q26CFmCBF13BhviayqCp7wyrfGNhTVPkUNazzj8v9SKHZysxLFmhrxoeJVhnfQtt",
  "key35": "5NUMqTLW8H23oX58ZVjAhohyFMuonaaUv28wMLy1KNFExAK6MaurtNiJmbw9c7FZfBP7AdSogNDhpVoapJXpCyEj",
  "key36": "QD5MwkcyGYwC4qxiCNFg8obBTGZqyEmnae7gXocvjr3dzxmmi7TsXTkvDT1jCPZzjuUUxPh8nghLzCV5Fmzxiig",
  "key37": "4aq7Jo6Fh3mY4jdB3cK5MoB3NHdwmdpvc8PzLYTK48LURCFR1Ni5bLGPYGsmKEJ3NNkXATKJjBWmftsSn1Xie96y",
  "key38": "5jyNv8aieBjm8oCLpEfvgTa8he2LYta4sEztEqXGWoBAs9Mfx13tUHhFwEBVdKNzKZXsKHEArYg7S8FjySxcDwnY",
  "key39": "3hqXqHnbbP1ANy223Hg1TL8uDja1uQUxgaHuJQ9ksPQjxPCCuwcWoMmydQD6dUQaBas3D67HfhDNYntS7xfnHxE8",
  "key40": "51GekM3DaHLXsNnkWC7LWEYugRkyxDBDUqPandd7SSiy27boSKCNVibNu2rMtBkwQVRVg483UyQkwqewcBEdxx7q",
  "key41": "3E8PCvGzJmxJNSF6oAeMgvoQ5CkKqNA3MNvdmb7VnuTPymDqVoE6LtHsqD5wskmsb2Qws5XJJMnRHEJBH4s8zaBv",
  "key42": "28fpXNvKHEbX6ymkoF9AD7H9T7RU75YC3rdn3HsXXFXZP1k6RhBuva6bkzHZFp9w7yumVq5NtGyCgE4XY3DP1Lpr",
  "key43": "kJ7TgM7TJvFti8AxKz1XMnbdagj5389Tck91ErpDbpmG2FRWETPCT3awcp4FduBCRmVYgeVvNitBgJyGhFy21mY",
  "key44": "5fLtkQfYedY8Wu8cjQFix1QyJVpoN6NnCa6UcQ7DttsVr2gjS3Q6XP74dmGAqVqChkdA3PJ8r7rV14wD7jTWbdN8",
  "key45": "8GArjhETrz6zpdL7neDUHZpUbNetfztzkRNdMg6yfvUmoRXC3fUXDUyWmYE5F39Q1LNKvKuLKzHB4c3GRGRxB65",
  "key46": "44UWBgx7EygVyG9VbzqT59txcm1Xnxd94hNpVKqJdFCYmxritmUoMoB97vsTSYdLMWZgmC4UGMR387QVWaCRcdor",
  "key47": "42cohCrTjMNV3EjKF1bCCFrkraAHfvTrTfYaiRa1Bu9egrDEp2S1CzBDvL8hHknRUFFrcyRE2t7nhHgCdMByRbnF",
  "key48": "5M3zQxta4B61EnLY7hEXmTQfxtXmMjJQgXVMpyGsoGLYVWWpXUtZiSsZFi9ttbHFkW9oiF8Hd6EEnMf5Xuymbz8E",
  "key49": "3N42eYcZJFh5Ee1SLcx23wheJtdUmuEsH2ZjJR134NUA4L1Tt1Azhi2qa4iYDzntt552TR6dwi9fvk1ZJZFKusfb"
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
