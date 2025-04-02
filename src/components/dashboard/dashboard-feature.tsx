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
    "3cBrtuHHFBzqoaHtnshvQefxBmiTxJp54kLP6UiQFMhfQf3GnQDJ9wmUKRytv31fvc2sw1fNJUEkG2ZMBuY4R6ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yMKzySgfDiDAo8nbRvLVGobXaenKyaUyqpBxdX8iJhZKAkg2ebqPX8Pe4xxJpWaSLPCxdqdS6mxftpV137Tb38",
  "key1": "E3YfnxXgMNfXq2TWcFmuDvugWsR8FMbbQseJg7FmoXf2z245BrfaW6D36Z5FrMXFywnQ1YoktHdWA9E257k1nXu",
  "key2": "CYfhPxX5Mjk5R63o36rDWj5svzFEPXB3jWpfYwMxCJRoyRh9eR6XgH5RdUfr1MSEXZi5sXCDp3g5xcAxVFshbsS",
  "key3": "4jxgEA9RcvqbwAThLKVnPpFiaGr5zBJKzPigbKNGw8WNLdTzdKQX5Bs73vgFoNxScKZRyuHjLdybTN1dhUXJZBxP",
  "key4": "3mVzBLvHJMSDrxdGMrX94jM2FgKq2RJE1wt21ZNicZucPQdJogGF4evruUQQEARFQJXWX8GVjiUCQzPDWQdvQsgu",
  "key5": "343B1PayT5eK3jCi9gkVYpa7vzEdQwoJBGheoJwnQa1j8D9E8BiRCqcq7ZaiiguHUcKgaVuH19WF19eq28SKEsrx",
  "key6": "64ECsjPtrtU5MUpyK7GZwFfMfVMJ4evKYbBVZBzomu4nm9PbVyGGygVJaSzEJ8jgu3MrLXj9RzrvGavoNfjCfUcM",
  "key7": "UKamG5hRAAW92v1TkhfRTm2dWWmDfsUNmiM7TTVviAiRnhJsuDrk9CsqefX2hJFfYxNDj2f6Lsjky54pJLgrRhC",
  "key8": "5n7C53oY2wTkcYL5c9VdACL49wBdTb1Up6DFi8UBEsU4w4KhXdKDsobEsWU6WH9kevyP7QfgKVJCpcw7YEgDMPim",
  "key9": "4tczuJdLYnJcHoVBFqQusHYDrecK8sBHXuZ9ZBaNpdrxjvvZrTW2ejXzjMgEFPD641waXyYf861DVAaHjGqWqmvZ",
  "key10": "3jVKaReqhYDUx8RcCXUbBZDVnsR4qzRsPdv9Z9ectSZNy1age1f2b54cjqndU4Mfus7SzC8VWekHxPGqi5paUFoa",
  "key11": "43pRyEQiht1gEbB6hz2tNSFff7aWJaLoiDXz8BHEw2Cbx9JH71zLpJ4i98XbY3Qdp5KxvREGu5PzLZR1MDRtAhFW",
  "key12": "48cZStUC2PNfAoB5BaQY62eLpQCAuogAG5W65VjvCXFrN7PYZBXQ8k1eUJUrhafYrNqyvZxGZx6qoUiVhNgNGCv9",
  "key13": "N7cJj3waV3JwKagguWgUNUC1uv61vnDWaSXi1TN75T4hYLDLCuXf2mmGFV98TuyVhm1TDWhLn3kSzWZruXhWWzG",
  "key14": "3285KNmGjhZQRGH2tWyYY2wWYeQu8FHbZXxnvoPWw7VBLjP3cZqbdzeo1PgAGRJguvh9PvrN76xCcWV17f558a63",
  "key15": "4q6UwBt5AusTrsmb6WhTkiMEZ6BMmUefdp4XWQ2VAscMxrmQygzyGxaux7ZJBxssAiWRiyYk3FAxGZre8qYk1R7e",
  "key16": "56chMhWhwuU69hLfoc5htPe53n6ruq6j3mzyRJeqk7zzQyvmzHz33Eu97dEb1Azo2KSHQyaRH2YsgZX3wZ1saxTn",
  "key17": "39N4ZXndb8RRv3wed3xr4NM8DE9FAwvCav9ZpEQ7ZRhJZocwHkyH3QFi8ZHrB3LSKmn3Wp1MhZ6r6WqKYppaWkUh",
  "key18": "5vwhYVqhcZFSZXS3YswDPSK3ZiQiEaXioSjN2JFEZGT4JtE5DjfXPkr9oVT3Uaqt63z5yvaHFPpC4wVWHxj54okj",
  "key19": "3gppnp9HiXwYSyDuoE9K6NmsKZgeAJuGWwcQ6u5SSzkit2vbQtB2EvuuQprk2qFwmxTLpEMVkXaDLdnjDbUEKqhA",
  "key20": "5MDNEEc7mSbDGdAtox7N5Cw3hpspZvyutcVQYN5WRvpYXt9frr4VPEp91pov2tLk3TjNwjnMPXgtmSSa5pZu4rzp",
  "key21": "4kGpTDsELtv3rAnqb8yZw9ATpNL9i8eigHqCFJfTZ2YHX67e6EDyx7Rxk5LHchBoX5Y22fcHMrKEK1hCz5aMRmrj",
  "key22": "285h555ZhnmZRG3oiR4W5L3EJkaX6gH4wF8hQJp2V9JmAoL33yz34q6VZrSnJpescMhY5DtteoN2WeEKaJGvG8K2",
  "key23": "oKVHEGQtcVm6L8LhwZvjhsADePR7nc8Qqf6hXbiRByHzjfRE6GxJ6RZ7gmoHHprsp757o4yVXsB257Y5ybz4SPg",
  "key24": "3W7FWs8mqJdyJmBQjypGB1GdVmVjfB6icFoJfjKUa7QhVKuLd2mhBPZzbfnttbFazptnbSuC2isKUzmk34G6g79E",
  "key25": "2H4dPxW1cUTmzQfApEzhm2sY6kkJvvj9AoUFK6sHxpSos9UWbTY3eAoysRFKHCsvineaWi6MkdfmvbbwoFqrmX31",
  "key26": "3sig9rKPt9T9kF1Nw5S21s2WJ7ri5KQ4EzHVw1wLUZ5yR1qsuykQPxVxu6VozJzcRiXnuN91AhpeQHAsPYCgN1ac",
  "key27": "5xrGhcwATaeJzgUWDhiVXXuKH15LrURrvCpsv5NdwKnWoG7xikrTzPHLcThrRDTTCmFnh63Lyv4VgyvtwPDUMKUp",
  "key28": "3ow1SfpPCV6cbbfDpsCvQv8migEqVcn4YjBzUf4iSWw7LEAyJinPhwbwhgfQn4drsCRh8zSUuoyyDF8rJdQeUroB",
  "key29": "4CifzyUA7HTSjXoeXLRKsrPvF7vMwHqUzhMdyqdWedNCHLN1eBUNcVHztQYJvMW7HEzVYs4poEWZrJdhqk37PPtH",
  "key30": "2J589yG5LbAwW1iJfjzYoNqS3wNWdT6HoVGj65CvP7p5JRT62YWxKz6kGWcMqkouS9HreZ4KTkn5HTxf4GHSx3G",
  "key31": "3uuZnjCaBxvKsypANKzRZuBUp9GJ1C7z26d745u7z3MHvvP8ZbeBo1R9cwMexMYWVy2kKhfaSyeR1RARu5dTVpz9",
  "key32": "3HcMs2E1u1r2MiUbFicjjDggKiiLASja7PFERpzrmNqBwSBsBaj7KCTwnZzUFYUjvm4VLVYfANHLRJEnkag1S7Zi",
  "key33": "4gwNsBBUJ8L3Xdg7jq4TCcubSs2wgLsHHLaiyYvbWFkcVUKEiGNmrfUTeJoQ9pz1es4VgMxbsbueqshWDknfnoyL",
  "key34": "2TbJtdLkEZ8Zx1Le2isfVUq5Z195Su3ffcd8k6gh8FMi9QTg2B5Tma42SAGnJAhbQgaJvwZc6da3GTH4jF6gAw6k",
  "key35": "3TRqJWaZYJqtyhjqRd7wfv7UviWbHWAUEmodtHVMjfSJNmmPf4RQpSj6hw7DRqoYnPh4qFLtsHGZjFDgrjQmgXhZ",
  "key36": "2BCvc3P88wdRS1LHWDk3vyQFdL1QZaH1YqcBW62GLmSfu4ZqfBeXzZRF7R4CkN1LpuH8SJR5BNKgJ8wLbkimwDi5",
  "key37": "esGoC9zzn1VxGtwkt6YDd3iJJMK5kk6WmkukcDw22zkKNUW8paitmL3qBSm84BjAwVpGHCAsKQ4yAFECvKhbugi",
  "key38": "xZPTvCR4vc7Fh51FWd69dGU5aQCrr7NYeYsTg9GxTAo7md5kHyFNmUD7D6NkhEU73bGrhKyjV4552gYhEgkRZSF",
  "key39": "e9EFi6vNj8T6iDJyi6g2ZrZm4a4sEkaNDHNcC6aRQU17ZHKMnk9nSsytNRpeDLnWVUakrYbfXH1nTR5J8PSc7Qc",
  "key40": "PrStVMEJcD3BTZ86UgvumjvZdfAGwrVfsB2Xw4EQoVxRK4mYe5FqUCHtpsh3mRUbCqP8ahJEnfPJUxMd7y4T2pr",
  "key41": "4gCWSASxqdfbwq6JGhnQKDoJA3wBY2V1TkbmsuiG1rUGxDynXtvDBVssJsmkrbuHBNUefSy3aLdEw6Wp9RB8xAHN",
  "key42": "4xqXX9G2FUh9b8njd4vwYF6KpyVFAwEXtrqk5kdk97MhK7uGDAi1xqJWR8u65pCF56HDF6rBDHUsgf7iKRdZcWfM",
  "key43": "2g64PXYJnGYJCq4QZjcB4y9Yxz87YxfeUu8hMmE7S3vGVq2nWzQuJiBGt11jkMXicQRoyhwFjLpKW2s8cyVSuvV8"
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
