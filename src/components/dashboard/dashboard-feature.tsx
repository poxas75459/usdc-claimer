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
    "4jozPfprswmBozzRfAUn1i84pKSMswBWZ3UCHp9pqokgUZemELDwbrnWFEvuF92pAz87uDALZzAdX3EvKnmrmY1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWtseZS2fXPaNUbbpTSCWccRPWpWpJqzHUEQFk9nyz4kxz2EVgdFicuygxtrR7UYYwjph4L3rjeKTUnP9vUjASy",
  "key1": "5aRKJFrVAVxybW9AJCvzEiNZdPiZKrhpx35k5WMZ5qaJffayNTuYkhVwG8EEegDXdrxmQ3vNZZK9sjvHAEE79Azd",
  "key2": "3zWR5Y1E6Y8fbxBnaLLyGtLzbs1ye8mCsMmgfkg1Rh8xo93bGb6ikiEcoHbN53TRMXd9HpwRYxBfhT7Cx4n7oZja",
  "key3": "3Td24sdJMPbVwst4bZoCZsL8WbEryaRBLmGZB7UkkJtZGpavPo966SPRtedYxrJfnbLCNE74JYQNqSosre2cn63Z",
  "key4": "3qtdpzjKwUhxgUKyuQ66heZ2zHwPi4Ah7rXTTC6roH1fazK57kBQ28LLtvhZQuyE8wK6YBt14uPxYfzP8DRQnARA",
  "key5": "3kQdzZfPFvnwRgTbbxspJSGR5phmHBHqBFq4zWJmSHh8vG7okaXjt1rVXdYvVW364GxsQVq7ZMF5CssgZZg79ED6",
  "key6": "29cPzapMxVzZJ4XsAzTsCghg7AkpFRLqk6U76S72xwHf8PVaJSNercN3U9zi4SD7Py6oyNWLTiRLBqznzxhFn9db",
  "key7": "24MaL6tNAhnbeYVN1LqTeASk6ijfeDwDbSq2hMiVkxJYFPTW6gFTzCyQs9n3YBkTxhWFEyve4G5tUVcYbt4VGpJy",
  "key8": "28UoU92vnVeFcjV9MLPoJ7nJRTms2gf8sMzG7WocFKKk8td3iqPKws3QqMyf4bkjM9op2YywVF1159QxKvS5pnpy",
  "key9": "4k5HVLbe6vStnB52km5zbs5x7qKicCGuTRFzRuq1cDbaceeYeM3qih9TnseQDkXqkR6sQfHeVmoKPdBuhtfmEVmN",
  "key10": "33ipcvztiDL1TGpCjoS5zSZtMEX6PvhYBsDCh6TFu29f4UuXbi5UBzBN9MvqQsSoa82r8kyyqnUHeqvxahTw2Dby",
  "key11": "21qWmabJ3RZ5xGnegn3btaGiAu8vrVyJdBUrcXNHkGrsXKfYhEpX691ZvwvTxtmvssvwiL57npsXi5JZu7rxjzr1",
  "key12": "2udvK3NS5srZaWkiTZ914GU3YViQnKBm5E8hCcUvsRdcbuqgEqdbprJBtqKGoV35R1TUkHpDFKUzqEzZG58JaQSU",
  "key13": "22cgKzMafgjmbU4MaXZ32Bpi439RpsnpDo8qnHYRfpuiAJgP863cz1JuumsSsLjpQcn6jjykSvJPx8Q3TULsrTsz",
  "key14": "4cWhzxmFhoEVr2MyDdqRMcycpuFdFpubcfy94hkRRPZUyuokkzFpo2G9z8tXkTVntHTsEGMmNWefiR1cXytH9h5B",
  "key15": "4bTUJh6Pjp6SaWTBCkJJUfBYLEZXhhZzX2VKPAeES2nbNM8vtLTjuCRj4GSC747ALtEutBgCf7xLsxSQ4byQowCg",
  "key16": "3QmrcwsxkVFDcwG1czPawLASR38Gz7nKQnwFkxHz332nJsvpMkiBBvNNhB7Vdn1s55gRfd3ikxwBHimGdVfcoFVy",
  "key17": "48MieYRwvUNpDGLFhaDz51rCoCBEeirS4SV7hhTb6Jemp5Gbz6y5wcPpDH93uRkpoaj2FMbZ9TbrpBRKqQ7djHkY",
  "key18": "mVMBJ9TicERULoM2mNXb53Fifw3wdSfLWne1mWemAuredYJTsD74whHp4hGQURwpqXcYVKr2QVNZNCrw3DoL1J3",
  "key19": "27ZcAK2Z2VCx1kWi8dudX7E5EzXFdVsebtBrxH1WoxCjPByBQL9ythAPy7Ljy7BuJZhwSeDuUN94H5TMWwqbCV7q",
  "key20": "5FJtiFJDhy43bjrtDQKxi45xc5Zudjf1asSjd8k4vxD7oh8bg78w4LZCHD4VhbcSFiURFXGEoYFkzF45V7gUt43G",
  "key21": "XvuSpUsYCuR5aMy15vGGF4rWcR2RARgus75ic6gfNViAe9s6S6Hhvsz7YaQpJWQKkFrHWUbvaoeAHVRkHisvMS8",
  "key22": "4s6mpsPqraDxpEi6dkeuAofbq4K4pkHR3SZKFhePcdksFNpQpWwqAByF1QJHHMEVChJhndqr3zgzBHYPQdeb8wpY",
  "key23": "2ycWTeZ4J2kd4nwKa4YnQu1SzmH3S6xZMKQce7UkKgAEyV6XmfgAV8PYKW6u8mCnJDJJ4n59Hmmq2LkH2KkSGgKv",
  "key24": "2v1UAyeYcPnZG5eT3ZmwRkTqQoivvbU2GFZT1urm1BDmSiaV1PFLddPKG19CvhzLrsgQC9mNSrURjNdMgGwonbFm",
  "key25": "61DfAeGhQTBkSRnHb2SHCCteq7qZ8eKPwVQYzxMRHjuk5aPEavjXUcHNdk2B1yCu6teq88RshoicYX3mvCeYnmPK",
  "key26": "3VfwXCrRygk5E11MG3Hr9Q5Z6whcVTjhYikfWRKwLk2a3WqbnSgcBpmsS39M4C7kWimL7CooJGJZEF6th8hqGuqi",
  "key27": "2MxR6vn5MQ4dJEGyoDLGXVifiFHFopRheZS66t4TJTrBXVZxXUFxvaP4KpJfBH8bhRthfQsjn8hRaWAdT5En12px",
  "key28": "3BBfpTKvHiJU8STJEKn5dSrE5c2jeVV3CRLmg3vgWMZ4pkk1wYpFVJCG4UpR7VHk9VnTuA4uLuqi26accy8bvHZH",
  "key29": "3v7am1pjhSG4aHNXEh75LAVXuNnXGXcfVcw5RkZR9U6kRWLJaPAad8tZhLgaWkTyaRCZK2h3tXJpzUo5JKN6xYKQ",
  "key30": "fjNKQXcugPpYLWwp6UNtrYuc66RCp45ejr3qQFpuTB3di3AQiQ8Pb3ECxoR6Ax52nwzCpCAcGawwXXBWuT1Zcbg",
  "key31": "2kcHFmi3dBJ4FuSjGjjP7nqxXxHsV3SUprMUQxLPxdXipzLuk2VxY6qLB6NNJQ2UB2bEdvM1scMYAnh2gcufgsg4",
  "key32": "4rTFwEt1nXPLdnU2m8rrkqSqDUYrex2GdiiTpvKacqN9hzqVx13HZzD6RDt9ii5kgUWHPGfy2KqzPUtt4Nyd35vg",
  "key33": "2keRYnkTHLYLVe15tcWPNrsDFuPaPY7uZmu3Lrp8q9haHobeNPg31b9sGHuoVsw6eNhPptA622PtzfCtHcgJtjvR",
  "key34": "2ZtR5gp8Uz6xqLuPxHi8jFRt3mQ78QTHvwmQ6gowht9s6SrpbzBGkk3kf9EstBbt3bNKfaYHw3Ys8AJU62DoWJLf",
  "key35": "GfNxq3sF4fdfoY4ixNvp7c3gwDDwgLRLGdHr9QHWRk1wdFikhuQJ7EYoQzzqV91N799FUGrTHK2EHAQF8owhuoj",
  "key36": "424ehvvfz1PiZSeR5ZUocTcgmd31mg1o2vEqB9eJhTT4GHZk9nSqcTU12emB4KxCAcDmmrBVdnEEUD3ZCKxsDCBe",
  "key37": "3Zb9HsraHSaLgZENUU3XWEEEnVg4skyUSuH6vDWjM8L6NdcktuKbBEvLa6brFSRtN3a3TyuzcFAxu71GLrxoV6HU",
  "key38": "4EepB85VibgQREyMBeyrK7bikCsYTXmAwYGX1PAygWT81AVvLaS6zUvVjf3AsmpUGXkr1ZYKuhJ3fmR8NzUGoEGc",
  "key39": "5Z3hEeAwh2d8N3PYur5Z5zueQfVRQBVQwEGDUFFJkWBNZziFBoQ98gwuaMQV4Z1isNQ7YuozUj9wJY4ruv5qmnRS",
  "key40": "5C9PycTy1hiMt925yCMfq974jZF81AYrj8MFxHjN4RvyUMiJG45aYGo7LEaGh47ic43zRuVV2onov28AXeCszc1F",
  "key41": "42HLuRxtrxVxGxnxBNKvzfQu9PAxVnnwzgTpQstZoFWC6QmUhFfxPuCjTxUHPHySEPuCuikH8LJc8uGYYkZdgXQo",
  "key42": "bkBxPsoFWAXu1e6JaYyPoDe5CvHCMjcuyArs6aWit4UAE8u7jECfeS87PkmCzj2bDuyLfHoV9g2sbDDcfxGamXm",
  "key43": "2SWTMqPb8gSBm1ErJA9ABp9MatPkLBRk4A35CnQdVuDPiwBKTqUVwcvdPUi5ZyLfHgoFTMCdnAm4EYdf3ogdszPY",
  "key44": "2vAWmKj73fWctW8kdVj69imkuPbxZzaBXRQ5av9YGfyaYPyKjFguZMsHknhRG3SKxG7opmNc2ThkzN29eCcZpf1G",
  "key45": "3mbMsFd5D4cbiQHLEG9DS96rJSeMczmxyFzf9FmNGUorHaDj3zeKwLCHpfaP9yMiNkeCXbLjhmCT82kb2s5mRibo",
  "key46": "4vner1b1xhQc5ctFaTQEVau63KcReXSHiMrPurtj9aPuKFfMaBF6iiRWNG44iQMzThTEu5qZMgt1SKhmRu1xaf2e",
  "key47": "4pxLT2JMkGNZobqTaVzkkzR8ArvRFcV9gxVbeJs86SdzGeDJFzCVQhYhwUmWNyY4AZcVZDhFCaV6ix1BYUzf2wir",
  "key48": "3EwzieKYNh9YT7pUbq9AXze8qN1T4jZMun1i1HtBVEBpaFuinQL4jizMSNuSZ6TH5M2iQeEMhnPdBAsMNak34363",
  "key49": "5Y4BfQtkC8ZYj6TXAUBbrSrw4i3zq2RzRsNxhnA8uBu6qHLRTwEnmjR4c3K9K9S1X3s8fb4ieH8HUw65U8qJBnFn"
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
