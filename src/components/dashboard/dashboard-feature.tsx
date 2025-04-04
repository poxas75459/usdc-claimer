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
    "2gkvoYJCNEGjMK1NdLqTkZhWf6PS8HMGwYVDm5eXCnUP3jFzLeaeeFf2i6uRs7Ws86CQc9ysi27dnvJZaWD9PVbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eH2uooXuPPwe1Xjx83idz1B5yWdyQT1o1BKCHDqNeBtWFT9c4WYBPZiGaGHLKwfZzWYnTfG68erv5p3pvdMSpJP",
  "key1": "4Xs69ja6F8kv1xihwKY9GAnWSKSsYwCAS18MQwWDJCKDhdhqrdsMBLmcCDfurTv1oQv3mdjFs276MNYhPrbUfSqR",
  "key2": "642WZ9RAuZJiEKXVrcPj2MzWQCvGcXAXakxTY9XfZhi9m2RAWmWatDcEZEadtB4QKFfgSFQ8pjpVScaNQmXQ1mez",
  "key3": "4vN65DSeAGh8SyJF58hsUs3NiRstMpaj9y6TbN6HjCovoavxA5qzPmoPsTrUMu6eH35TrF1FKia3JRSdPhA2ZyEJ",
  "key4": "4rXv7tQdgpJZ9skMdkE1brwARFu8nqfHNGvcFQ53P1bsX1Qo1mRj1E1eLqqJ3s6odUHoAjPUNSB7h5m6BwVevAkd",
  "key5": "4NF4WYrFW7g8g77pdUhwryW3xmGTWm32S6Pn7BDqE8XRx58Qqr8E93vbdAdu23ssQkbujzWUa9Cw55EAbWnC78AN",
  "key6": "3PKbkFx4S9fX8ha25PszRroXyHvwLFGM8yHvMFRjo54RPVcyYA3s78qydDXoYiHyv5rRSJo4osXzDvhfrgNtP6A8",
  "key7": "W9UKHDZFHgwdj3APX9cXex7BYnB1MtBrtdZenGe9JLbwdCqM8wjd6Ln5d4Ej8T1xoFXPWFoCp7YPo2BnaHyCFrh",
  "key8": "5DCc5k3Pmwchop97a5AKJAwVfdDeEHatXWP7yS3Xv8htdoMjdkAjTuYcypHbytH4fkdxp2iitiEyKsi9Mpwv15sV",
  "key9": "3wA4f2uc3gbSMtUR5naVuy3UR3uBfn6PHXQZSe899JKhqa77sAwDHH428pPyf3iTTcMQ24k94tPgYFTFVspaGbSi",
  "key10": "3BDtobT1VcHNmRhwyEtFZYr4x4NS1Y9dKHDWdGJMVF72oWj7YgHEK8x3vg9qKUQALLm5adfzxGiiwXRz6qQMZPUt",
  "key11": "2fhLvs5cvkUD2oVMA4aG7bgcsi3ReyzbSn5tJUCYEM5RakR78vyH1zL4a6ZLEaUTmSzVsZBU22FN95W2KBxCeiFV",
  "key12": "22FT2n2VMtAbPjdp18xeyetwDzqqevJzDY4ojYDAjLjKuYya6hNd8nPbyTJBrug5BZmzTpJ8dNjSXPwDgqhvaCYi",
  "key13": "3kfJeMB1wFeLVcdaVxGpewQSEo4UkPgzRXFYKT6zPZAtA9VuqPYSu1v6Y3yDoXmUEG8LsqyaAC7UueUgpmvgS8Rv",
  "key14": "WV3b23aHwp714KAjyHoUi1MkNfL8of25LaWFEKUgppbeMiKo9jpx15gKYrLEkRx24KsrY5B2fm9yffrMkXDf4DX",
  "key15": "4ncuJUSEFS1NcnyjNvxXWxnfgBQYHbSqbQU9FS1SdQZYSp9jSWpkS3KDhT5LGow7Vv4KpPD7HpcDepoVy6hyHuzX",
  "key16": "4MAq25d8Eqesya871THPaAfVMuj7u2iMuSsHA5Sw8zs31z3yHvt2oApE14uA9hyETsjymudquNbxu6as59iXUMtb",
  "key17": "5vG1dPFRH1ESX3sH5HSJ7C3U1TeRfPPz9cRLaGrdFTVhKJJWea2FeUmotk9PoEmFV4Xj5U1GH9sfCerfzn7rGk9b",
  "key18": "mnBzMwnfWfRG3Ai2j4YDYaGQQy7gC4VQbmPVk94vFYztU98a8tGG15sa13h2Xi31iAuGbh54GbdeDKWs9MnJVer",
  "key19": "QAvq8UjYaXbVExBtWvTBBGQGV6CHqrJkaeyihuXLLH2Yau8ZNGAz6aQYE9enDhtk5AmKFhRP5tvJQpQ4Dep9p83",
  "key20": "62QFeVfeyAXjDWk3bavt4uZsiUuGQPSaSateGRZhRuWqz9WVXPqTRkUkddU3amzVf4V2CeTMv9TkJ8LCYRxcSRyS",
  "key21": "57FfskeaDMbrv5TFbhih7fwmzAfaJUYQ4PgdNxiMGuUDWWAuSZUxPrpiqu4quWM2mNf3bYY1QkV4TiUHN8BwfugE",
  "key22": "2Wn7zf6X9jSrBsd3uTn7jvVNUCdUKvaaq1GJKcdg9urgwMJLErRG8ydfYwvRX1RzZP2sSe9hqhgYg9SStmUEe5HR",
  "key23": "5bmDJdypW3BY7AGqDWjGtKgqH4mvhDMJQLowj7K15HhSGZYtJNaSYYU97rPVYYtDm1q7Rv3fNsZhaH5Pkr79rz3e",
  "key24": "5F6RChBaDtYZ1c32nMnXXTY7yqmBJQMqMz3MkifULLuygpoMaZqHfXsRqaxLWyNeYD7Ub8DStqSDjReR4DokDCZk",
  "key25": "3MGfSd19zpQ3NkuVNijtvijufTkLwFd8fTB2g2v3GQnn6bCUd3Q4QmSMdqFq2DybYjx99QApf2pxfeCUBJAZhPH6",
  "key26": "4cC6Fzcsh5H5RcZfWcMwqq854FRB2dwmpA3VrWVu9qSi6Uepzan1E2itkGq3t5LwJvkNQf4yfrmnzonj3oR8dYwu",
  "key27": "64yNjPoGgXENS75jCWr36grin1TmqTGFB4jf4PYTtgcRiYzUiJiq1P1p7xKAuigo4gS6Qan1FFnGg4g5kUpUbdTH",
  "key28": "2rhdxrT4JZsRq6j1WSWZP2Y37GiJY7uWkE1X9Yx2Ej4xoLV6BoZTSZtSUAw58rT3rz7jkvGkh1FFV2LhZ42a2Hbk",
  "key29": "K5RXREQLSu8jc7EsmhBTwowTjkTNJWPf14Ewgqc1JuoHCLYtWDuGGmYyF1jsDRKpTaqBqVJwqGfTHE4iCnRAeei",
  "key30": "CgCtQ3zXsETHRWmS3j7JpeRpbzrXLGVvQeT8befxTJwb774e75zUnVXJfVVEoo35Pv8V3BkdttgAHMNQVrAKukJ",
  "key31": "2GFrULCFPXuDyzh5cA47E9cK2ddF5g9MLUC72t5bj8SBWcJq2ZZY8Bhyf3kfXmjBySqyEnkMLKYBpA3qqz6cxeWe",
  "key32": "kVBDK4fXot4hJPRbyyTb2YemMP9f1x4iLPJez1G9pUZ3BAC3frJgYrvp2KqnnJVgQs6zAJtFYy1qx7a9PT2vgZf",
  "key33": "5raCHvvf6QYbYubEHiDgb2sZtddb5wS3PoU5YfRTDpSfVS18PPqanQsDjwSKLDYKTMvYu4732oa4Wydo9v1dxgxD",
  "key34": "se8tPDtcuVdA2DrkFmYQJjKJbUsKHFAgBT9ogTq6t4vfeXguhq3Y3W4Zm79xv9Ks75885rE9PUzxundkm7tmj6s",
  "key35": "5yEmaFhJjH7Hdn4FNhcWmccZBCj7NJ6Dmy18bAosE2B4bMDABAM1seEfEXTWHDhH2j17gezRXbvwdTBXLVYZyiTf",
  "key36": "58XqJ2GXpf77EFSonq1sPiisav6vz2W8jhs7xoxHxGvPVUsNSEoygXdivACCzNNktr7pFUwdNNY9NRbcf8Bw6jXB",
  "key37": "2xcCrcdNZ8RsWXMADvsrxtuU27B8ad1dY6C97w83cbt7sMhRrTjuxhZh9zxU7dsgx4mNwQ1RnWdRrxguaoXqAm4a",
  "key38": "5tMUPspjL4RAQbVw4VG539mZYRgJcKdXNipMAC8cQ9CocT2QyTvKHFthqwM4Lveg6N9fi5fuTbxMk8H9LAofFLxU",
  "key39": "4cYxeq1xYqn18voZvyo5oxuwwBgE5Nja8LgTvnjBkXg9DaYLoRNGhrUxzP45tpM2UJJ7VxPiLzpPV7kKDqV4A5Mw"
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
