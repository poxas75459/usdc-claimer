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
    "4BQDicxfUX5ebtGBaUP8DiNCwBVgPtEFsA2nq5xdDbMQgSJCYeHD6HmCVNd937gWD2TrjcrcENRXPKqFgdJAGR9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2iHY6cpXjHa87yRdS3k91mZANG5o7BuFL5NoXgEtFZYQcQBQwfqNryJKwbfu9mjTCYiUBrqXDANiSC2KG8Qsz7",
  "key1": "4J6wYTRb1FkvdqkdSMoooDqMAsdVGGrnVD7NvrCNFPx6cYbZJuKSQ6GeE2ySGd8PcX7XeKXGFEPUbG4KGZ3SjErG",
  "key2": "55PQTxAH7kh5C9CM7BKq5XW5CBDEnTBMmBJAamsDnyTjBn2gLbr4yPqAHATiyU29s6U8fU93rMBSQhXNjxdaVP4Y",
  "key3": "2rd5mM8HhhLUiK4NUm5PdMHKiv6rNLWhxrpmqUZetWw7miNSH9ybeFuHKD4pnf4iU74L64Rx7FfCbEGDiLmiX6Qj",
  "key4": "KiVDGiQTUenXMoFpMMhTtwtYD61kw6ciNRoBNmREtXGvruunVSonUPHesWNqsSLChC6tHTDATdrDv2wFWyLwwke",
  "key5": "5EUrVWTgwP5Dj2jgQZRHXMwrpfPdbSbWWiraA9NcGgREguUkun8zY5nmcSHnKqPRk9jJKZaRbgcr4Yz6Hi4WLAA5",
  "key6": "SUQwHc19B7Q7LupmQVXDT6wY3C1Lj6QxwpE6VxJVxnvZseyMWq6zca9DSEjXgKDogq7TDs44FvEzHbkDuXHYc5N",
  "key7": "3xrfqR6u2FHCBLNZFynCHW38WavftoRThU97e9pBB5YaeoFLV27bG5kQYd3H7nxkVvZKShNu9YDGaWa2TNT1dUan",
  "key8": "2KBWa8NbchwoqDTQrLz1L8dAEhhSZpUgXV1u9iAA7fGcUzdWxdmNxdUNu9Ky5N3j76qrvkKRj7WxYSBgtGkSR4zv",
  "key9": "26YoPwobNQAWqfbaADiZVq1Hqp5aZXGZsa9rTCuuNMh8gaxRCg4tdbDhqTMYJga9Uny4cDJQiQ1tuvjmCeGJtHnL",
  "key10": "45cU5sKyMzwH49iHTpGSKJd6JKkdoSGrzKiZui8fSpNDZ83hkpijSrTYnN8UvNHGKt8jNtjAdxAKCZ6MqiuYkzhm",
  "key11": "4jRmaYQ2njZAZBQJd7LBK5VANoKmhHmXsxnZALXEREtaXXXmiL3wBCedJp7y67kVL3mdnVEg9kG5F7gKNaN7rqq6",
  "key12": "5EyA2WzCL9LppynpyaZuq8SeTCHQdrcvck26Kq1CqwJNqCUNgsqSQy4YmMadW4mnG1qyYCKh77zR5uqSsrpLEEQJ",
  "key13": "5jJZAkyxQVqWNEo3BdJcN3tfLjLf63VmvuVxJ4aRtPTr2gEfuGUXCvbY3Rp1pbwSGXMiaHcUHMSYyLQYGwm51qyv",
  "key14": "37mAeJKB3W69o69EFwmVP7cnYT1nf4DdKxLnvkcQ5aQoshpXuUv4nVE7JysKFMjQ9mEUeMfUuxuoHDYnBvD2ZPuX",
  "key15": "3UvMbE2Ud523Ritpwm6YZDHn5wYNiqZ4VDpQAdvzVdfi6ARVtFZn4UWqGYazLwqt7q3S4Hm1afPVuPrnsS4nhgnH",
  "key16": "5fGLR5PprxggDyVEToJHdC9M3JyUaCme8aMAbhs5hh5UE3KqUKVfALCrgX8BYxLCVEvsvBvvva79uU82qGstuLkj",
  "key17": "cywtoSoCQJfCafJXcXfDNKG3xdXQhcnKPTPsWkncuX7zapfUJUyqCPYeny43di11G1gcjCHyqCksekZU5x2kiu3",
  "key18": "8az4jTXiTBZ1CphLS2PoiAqEDKPkSJ2WD3ZVGfzLnjsUmQpBHeaW4UCYohuCNToLEc2zFrZ2no8WvvxZgRa9qMG",
  "key19": "4LmudD27UCHLkXEZBYokZWeovRRbGsimxR4BKhDPUdmbTMp41H81efQeEq6kv4JV4E3p7JcTZkHCSbtPRVzmihPk",
  "key20": "3ZkrGtcwkWxZYayG2fV2uvNXirvJkbXMmFpe1RmmDcCyo4Zv1WhGBoUJNxMmM3vctncgUXq66LJfAazndcDzPkaR",
  "key21": "n2xzBQtXirci24CRkfu9ZqWbGke8jP8Lx42KPcJCwGhdqc9VZtXsRo4SHzCNm2XW5wcKDF7zT1Yu3MScBDES8Ud",
  "key22": "3WttHisPgBWi6eoEkSMgQPbULCRTtvhgXZbXX1f3aW4vBs26ixDnUha8JRWdrF14bTioq9Tvk7CMmB69MgxKUX4g",
  "key23": "5RxtzBeaPRX1UobjMowTVfaZ7quh6pUKHuPUvks3YYzZjNJfihTfs6GngyHD1fQ11ky4okPrQFKBEnsMS5R4fSFn",
  "key24": "7syS3VPPVkSkRejxenA8JqgfhYqVqgZa7G5XGRjZCqykWf5QAgLbS7Naib4hi6h7LVWetpyWSrKw8pindJLp93Q",
  "key25": "4DpQuj53kvfHweCKT78uHSf4q8unJ8vKYJR7MpzxmPxgsGBB2dQchZnprhhM8xcu9Po5tpqPvShmyBpEpinp8DEm",
  "key26": "66YKdCp3siSAcN9apo4wDTqfRKmSL64BNVxais5iNNUQrfKj4KG7K1k4ySjdTdsJwnMmGuzQ4GCEsh5Cg8RSnz4M",
  "key27": "2iVcPtVyHBYzb72KyoYF9ELRZ9ey5NL8JzCunbd5G9JoKYJy8BCzbNtVEsr1EoYcqXiCq4JEhGadKx2zTC9bvXhB",
  "key28": "mvT4JQQJF7JiSAyTjyqqoCLYEzKgNq7tg44kArBqyrgJTbcnBxvmMdkajkaAna2tThR6PmTPHUmnX5AhxPbdkvN",
  "key29": "36YD8H4tMhFWyQ9zfS8jBjbxDuXY95dwkuDxtpYuWG6qpt7wNxia73DDi7iLopryvBzufSZJHY7YwyXtASffY4t6",
  "key30": "3uM949uVfiHuTV7Uzye1kANin23JaAyWdByzvkNsMbUwnm5TNSUdeFx3FSajTPW1QrRTgNfMXLTMD8FvHgwXLSLF",
  "key31": "3ns8U7WCpQ53QJpEAwfCsBvDUMaRTBaxqpr2qpjwMaV7kkRycdm59KxNpjPEYpT3x2kiH5w89yos8n3yRMACXKaV",
  "key32": "57CrNEHF1Ad2dxQkLYGJSsjw9TcRfsr3UWjkTD9htamRdEYND7zkh9aGHsFz2vc4Smuj6C8qczs3C2doeJS1GkPP",
  "key33": "oQ21gGum9DKEXEtSATPKY8oWKAzzW8UrLTeknPQUaGFCYqxiBjVxdysb6dhjh7DE2eLXrTrqp1oyrDkjjJN87Bb",
  "key34": "2jPu88fRew6xQLQ9PCyErgwV4raEgnD9quQZHq1ZRbPtwbmFszMpAQj15Fd3BbGRx7mcXgHrNXUpsBWcarLAiGLD",
  "key35": "5NJLSJ7xbFy2DFLHb3PZZXvCeVPYjsiQ4oZbZRvCeCW5S77WnDGPAboTsVRfR7xRh8yVgkU5VbiMgqeKVAeVtt4P",
  "key36": "3ymfhECtiS6Wc5MFaHn574qH5tMeowztP5GGPECtY1jvW1pMinbij98hP82JbVWPJpp2h7KDmU9d4pfAgvwyooBU",
  "key37": "3Y7ohCrMwBNKepANvTDdntCtEt8GEZbYxzwiiu6GWdG6pKkhEXeEk4TxatiPGfdmPmAtTC38y94DqhMnvELdncXu",
  "key38": "4yMaNnirXwvuPDox1JqncAeb1NKuJJUxLXRtpm8EyRxmhsX2x1g6VHKZKpaN5XrmMEr88qMwKnzAmQkvXrMWfbyL",
  "key39": "2KkM6eq7qN9Ai6FPc8jj8LPuzPiCE74AmgrfuzEqo1CcFpvYzDuKDBZsaR9ezGmttL2uqQgmj9KojpMEmLeZt9xp",
  "key40": "5699kK726u6YEuhWcia1NhnAn65ew5u6btzWzAsvEUnfy79T9qR1PTLFL4XsTK1ZsvZ5WQoTzrKK6WXD6nMBJCst",
  "key41": "43FvGL3jhwpZa7aTUfQcJDWB92d3nbQrvWWFPeWxuUCTZsSbpxhZGarUpoSUwzaGiqMcbuw9SJFhB3jPxkaFbTGs",
  "key42": "4k6co2PndEQgMc1n9JtRjFVUugUvpxk52tk3y344sYCQmiRPMgXTJXexc5bJmMnJzKgdS2zAf2QvdoiV3eChca6C",
  "key43": "5K6n4jNi4hAbk3zaKyz7cvFqh7tAP8WXQcG3i4Nx12hwPsgQVGWcF6uF51dgqhZXEB3FaGJJ5EXyvDnXq5qAomBz",
  "key44": "2sGGYPLjXksj5omxBPZk6wHDZwWComxXPSwQjrBf6XQGbhNKpxtVms9gCWv8EEoik4DPkrAvGDUdTJqkD6bQbhK3"
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
