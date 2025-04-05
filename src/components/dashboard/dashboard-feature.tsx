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
    "7pYHH8tMNwD9Q2pmhyYDDfWxRWogHRVrSitzTFn9X1hKmSXcRYgbXNBBAhhEBcWy5dnsHRHVDEUQ2hTZkwfybp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGJMES5mrJdFnUQTueYkvkznP3UpgfyqktCjHFcHUfDseouhHW8yMEoqkzp1ZmZPySRMTXUQ5JVumGDr7515mBg",
  "key1": "31nvSsT8vFMpJp6L3ZppShV1wKMS5mMihCDw8PiVNs9aYhz4wxrjscm5hKFCkur1QBHgsx5pkHsrWMWF14yUmzz1",
  "key2": "Wa3g2N7bDmUGe6HcUoKVRaeFwcppgzvpN3kT3orJLm7oSNtu21nTNi3Smn2bgwjbFCX11HQHkQdw3DvD5T1T81E",
  "key3": "3J3Xh9MpFB5dyKuMiReSY8zQUsJ9ZCZHnySKB3bK82Dgp7uiFp998X68UcSZDcvNLp6hXnxTgJSWE2Uhcc2MNnTL",
  "key4": "3ZoZSsnQauYqp5YPq3MNfJJvmsAPFNPtA8hj2i3xfifvZg95KitKQPgjVbsNeCanSxn5scdb57DSE5svGMA226NF",
  "key5": "3QZKSmVd8P8wXgM22WmLHnDviDjwS2VUZwmgDRQFDbB3X2WzUbsWAVuGeSnZHzzLBQad8p3wTPGtYiL5pfMNZqgm",
  "key6": "5wnBwUNLX4Fdkdn8o92mTqMUrBm7CFy9yynAbJPzdV5A85wWENwDxGRrFZmSDa3XocQY3hwBznxGCDyCX6WNtq3Z",
  "key7": "2EMEuYNrtuKetcCugMA86Vd4bKX2B7RbGRHkVfDR7oXB759HiYGKmD1Sfxin7vUh2qrgMhqYEjx5xbRQxxgBw4RJ",
  "key8": "2vkkaJ7fAfvwbr6noQ9QmEJ6xz5giDgcZPRzJdExQCXwkEKAnxK4JPzE6HRzFE82sYscMwWeqvjCSVG66DaA379K",
  "key9": "3kFvKDguMb5jTpQtafdmERKuzhBvVBVr4a4oT39KxueiFyZ3tbVdy4vYo1oesmKhEbQdxdHnaxE1eepdywZoAnxf",
  "key10": "32rmNeKzYsYtVcGMKr63sNdGPJhS7LyshuraoQUL5Rqr88172AgLiuNpTd7uyXcz5r7csaVkgXgrPFsfvAE31qcM",
  "key11": "jVUgA7S6rrKmHeAv5uJsMC5bfMqddhMcfhL9T5HZgPfPNVX9TEDtB6dhmruMHejE3RFAnHgSrD3iF3982Lwfon8",
  "key12": "47YG6zbtBxFmCCuYY12C52XknkD4jkwHk62V11kNGHgEYMiChaskpQvfzWSwyGMKkGZrkegmzR2tovFSyiDs2Sdx",
  "key13": "WohJwYLxRjFU58cfop1Kh5M1w6FqqWyjRtvNthFbYdwyje8X8JtQ6uK8r2dkRNQbGGjervkETV5ZYzgEaedjbLX",
  "key14": "3uHC4awz4WNeyvimRhTf5e4Ho3NhwZ968WtYbDdqcoKgfDEmDEUgJ1Da9ZXagAZ5UYjfca2CoB2ehdjVwNdNqT7s",
  "key15": "64p3KrtznNPHSAKJfFEHybkgGFqSQmzmvh7zrwYGgEP93vXD1rh6gTQUwVWqXSaFyAN3ZQvJEoNQzPdUGGbSMuQL",
  "key16": "45sJgTx57qQjc3KJAU3uq2SzSHsvWEMXgw7HWSNA2m4JGKBQcbjkr7vuGdXwqkKw7e5YNSvx1TAB2qjcZYndD5kk",
  "key17": "4dYRpX3Mhj28iVgjrtvbxStw4Yw3pPNuG7oAWywmRH1TGeYVUxjevDWFWXRQ3GcNz5EqjnYpD25RGYRsYPBMdyL6",
  "key18": "5sDhCjsnQXRHyP7HW9fBKpdr7FQdUrCuAp4iDeupKsnPNLScUy7dhfpPWBGb1Ua7XJEGaagmu1P5pHbekRrRY6iV",
  "key19": "2zKoQ5o8cYNqUu39bk9DmBLX5DWM7hRtqxkFhCWpa1tgqmuUbFAy3VNmBbs4ns2BPYYH3yHgo9GwKMvGJUe3wg1e",
  "key20": "4mjNjmLDs85n6H4oSNd7Zupz4bFzhxbvYw8cYv2cof62wyoHp7Y3m676CUjsUWjhPz43qaWWhgubVYeVR7ZuqoST",
  "key21": "61QwtXdS3wws8tr4EhMrKgRB4EnimjWPkNi4AZ21sA396ENjKbSKFRe5SLm1SYnyAe913NcUtrrWZKB6ht2tj1Xa",
  "key22": "2G5iF3i8J1zKooxktSMbfT6B7VagcLh4j8NJgjoNMBhjf67jZvE6yShVggZyCorPeaHyzoLcDcgzwqSuZZLwtkYf",
  "key23": "2kFP6g6p94ZZ9xidWSYbZGpv1FWFhdywdQprAzNNWZGjSqLwjW9L9UB1Pcs7LzV5ESqMf3zrD8wWiRfX9Ju82KES",
  "key24": "4SLd1ibUSr6WjPHMBL6NPYSU95z9WoN5SFoXqbLwN63EwQci3cQT7YRWQVfCrktBbPubLJdvL7Liv3rfbhx9oKhk",
  "key25": "3qjTTay4HeznyPMp8fW2fCqWcc8rjMhbRohMBX6B3D9HgDaMvnvWMCtvP5RuaoWwfG3x2qdGU8qHTdv7agizKJ4r",
  "key26": "59TXYZ2NU3mxcxGpHXaVGcP3WwhYJ98qSPiTSNMzgNmuV91ZqpsyNeWGx5bYqU1zTBtRp1JriNaRp4RLHkNzC1v5",
  "key27": "2pQi1WpZ526gcWRM898xxSMsJTAskY8CHtfXugm7xqAs5Jw1hvRk5DUu7iphEEN4iNtVm4psA5Gwa4fp1teePSzA",
  "key28": "4L1fAMrHTrKb1L9GFVyQr1VYNGCeSNsa3e8kNw9C3beoKs29K9Mc2GY2bQCw9TTT13SrAJS5Q7uWypK8gs6CsV15",
  "key29": "2wPcMgsXNKnqJZ1ayKPGP2o6n5nxshX63QoheYqb6oWuuVJ8do1afbdrJfxzeCwcoHcy2NRNjgia3TgDiqaRrXwZ",
  "key30": "28SoyGdXb8ikngxuiyamUDr3fZjFMWiZNkgSfyE3MoJsukB3xrR32rRwnEoYRKPTzVphpJtxQYoj4KCwe3e15HUn",
  "key31": "7ACTFDLr9Z2kuh7V5U49NBaPNpnRmXSKhqEgUaStyLfVJ9WAV5DTVknKJpPSAVboJPdNRqtBFU6NkTWZ63yk4sQ",
  "key32": "63f7vMaB7yzcXCKUGEQH91XtjVPrBNLx41YNcCkdHMTtThfDYsvpK4u37pw3QenRPXubZZDW2QnMCvhJf6ANC2ei",
  "key33": "65S1jqP29HpuZLsmZXd8RensuUZUZ2BdEA7z8LWdhd5ZQi53rP2YcGLNR6toBzA42RvekU3TFADwyCbNhgPSWxS8",
  "key34": "5Xz2HMgoAyK4WK3j4UqdQuQt1biQ4QnTqFaHYjYxasbBCDbs2iPm9eKuXuGGL3U9e9LsYbpMUhrEFqFaAX1oH3sd",
  "key35": "4gLYVSQajPpz7iQ3x8Aw817SxgheRWcNWa6hmb3LUJzWDcLcjyQGAUBjbis4Np8eHFoXRbzSY9XhtmExswLE7Qhz",
  "key36": "62pVnifRYcaFNcw1Ziq9o76JUwLpztFzH9sGwDJTYvrbs4QT9niPu43aN6j6dE9fAWyEvGdJEhkGXpR2PMtjHj6L",
  "key37": "zQ5cbvGezyxvsrUKRdYw2E5SNG8fdD5HPQiujTz3YgK7wi5uup12iuMnDc2Yyi6LLsJQtPvqpqTwKrK7Nx4Rqua",
  "key38": "ZJEQpnTVbhWrdzZMvgn6sAAiAMHhA648aomsrS3Yv5B4fhoMNzQs3qTS97Lv6qVU7wJ9Cdziee8Lvk4wqt29tG4",
  "key39": "3uSsBQpHH3dj1WtmDnN2EohVZSjyZTUf46axXVaoj2ePQqqiwsv7M6hfvAAxcD6ArgD9ftCQpV4rNkysmUbrpmxP",
  "key40": "4TarQdfrMbdLVkP4YHGHXNgYM6NsFUs2BrzbtGCrqJF5h46HS1L97yi5Tj7yvsSfpdFxc25MEjpx42Wkb4PBbwx7",
  "key41": "2rGNKhJrqfUvv43gJ6rXhwUkWvHGD1bNsfStaoBHh8QvgxMq23tAGgD9qjGKC77PzEUJuTodX7eWmobVr3GwKFur",
  "key42": "2MnVE2CdkKvDLndFbsC4Z7opo7y4oejZ2Cy9LT2Zk8fsxR6jqga2oLqcZSMP7oy2BsFGR9C5oBKWn9ao5DbKn1VS",
  "key43": "2CqRoiDwZ8etGZk1QANs7Lgu2UMfkQcRRFWkqpyreHkD4BprNaK7cpUCcf7QzC1d6dcCJFtuwdq8Sm39zG3kpq4f",
  "key44": "35nU6SP7E5G4kzoVB1Qdn56GUUbb9fPK3cZ5L8sSuwP3dzgWGg1R1CWrWbT51RAXwS69kYfbj2s1J7TotkfZ4pGm",
  "key45": "5tPgNETpBct4t1pTpJ4tDwLuL7mHpTDFpBdQ4FJ346Ts2X2AhA6AQMF5FjAHnPRX2PLc9qPitw2KYxR3efz5vCnq",
  "key46": "PmcqCJfir6nQudFdNPqMLGSFFyGw6osDgscq18BRSPNdrhq2yBVvZuUoPZXEg5QAmuzLVV8s4Kn3Ypiknn1QoDx",
  "key47": "2ZmZUbmVBp528VKhP7Vqqmjx1C2LhLL2Xi25ZEfCAmfpEFSpdWubDrKokc7eB7YYNM4eqACLsxFCFyDytrpoiscf",
  "key48": "5eZG2uUhijmoLaSanYEqt1FC51dDMYUExVeodufXNwbhnerEgiyYRjNo6xRMUz9yXUhCnt5VEFmfqWK5sbd5PHiM",
  "key49": "31PiG71jnrr9uBbCK4PNK7i4aHCn9Z4BDjZm9XddG8HG8F6BnKasrohARzNobboQZiKqd7vhCAEB2kPn2Qff4rRR"
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
