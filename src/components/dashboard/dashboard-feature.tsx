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
    "37ttjWhMtguLY9J7WBG5jRx3XcWhK9rqWr5SiBgJBuXNy28N7y1xSBWZZYqUa24NMUKdko2i2tLYB3Y9TqWsfUnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsyA1pj4KDbkajCRAtcqCzFnmtd3LreaMDMCRMJe6KwC5YkSieD5mqQrNRc4Usznihybd571YuvBCfku3jvYZEX",
  "key1": "3XTbKGPB5oCttD3gWUZQt9kYpeLwQcaNQyCJ6Ya74ErGQ5J8mM4dQpJzSV14KhXi33yTaeFTQw6jVChAPhpZDmju",
  "key2": "43B9LpVVAZwvCLwBcEy22kz92Kb5mYgvBFx3JeiFrnGJvjiPvDHWPzkXaHHGk46qQ75Dux9R1mif1xkk2B4iqZUk",
  "key3": "25wD9DzSiU35mDKYz2e4v5pxpp92bKbEaNCsR2qnA1R55h144QkFgAEU3XKF8z83Qx9qodzcQ4qGrUaJQCFMRNiS",
  "key4": "3N4Lvpyzkcf6hALKfGnpAqRi8dbnVPgV1d4ueGdTaAtwTuwz7TD2XmKmUvzErWdBqjSgCfuVsQA2bw55nNBFzvDd",
  "key5": "4zd7adaeQ8mvKJApjn2XQmjPmZRoRbc2eGpQvrTqnGTWFGfn5jbT2iMTgjoJibdHxmQCHZC7SergpBr6Dav5fCSY",
  "key6": "4Rp55zkcjkEgJiJH8Hzy5HEJWm5nGWjqgcMXWLAHGYFvz4Cp4n57zn6DKu1a58hgCZZJ22MkRyhqUARMZZHdoaF8",
  "key7": "MhvhFXQzs4uMXuysEhNbzMBbzDrse2bXXszZG8jxzwnN4QeP41s8vh8trx918PukneaVCbmmnNxTWhHd7GWBsZR",
  "key8": "5KizYYyKFm6ETzcrEiN7Ts7cN8mEdoourVaathKyx7DRTAaoc9wgmiEGPdSvxRK5rJLizMQDQvWEYCRr4YnpXTHL",
  "key9": "22GZ9XcBK5DLfMF4Fuh7RNMX43iPmB74FNM12JQ44iwAYQvayJTSozPhLBsxnoMXdreFj3fb6Ducwg5nZz5sQAPm",
  "key10": "5nwZkH1B2V9n4QpTbFvEYrDsEkUpjxpdQcGd2HZjRgxSS9wpsDBY7ooHG1aQSrxb45BoMQiQCYyaAAQjYYqfg3ZE",
  "key11": "H61ArHhHKrX8nrQGjwLdATrha9v2s5mpBCpeRw8mQu31QNiujXbkKp7iB3GS4Xr5vVwRFYwa5XMNA17PZnUeqnm",
  "key12": "216TkMvHiLGvPYBcs18Zq5JkqcczvV5t5EorW6w6GNkGTF9Uh33L31nzGjMFZS3hQ5LjcyNjFJC93dDDiZH6Ftm1",
  "key13": "57r3kviNWawcXbEqR7Lbs3CknvLuYNHoiprFUuAHXmjHfhWMKib8NCW3NXEAc2SyTxRqVCHi3nFhwmHcar7sUF7g",
  "key14": "4ovSd43mtFhqWJ8rzftE8eS9xt8o6u9HQYMeEP16TC7cGqMtLSfg4taSEgzCELp5Pw1JvuxcrCcNqzjziEJd1C71",
  "key15": "ijMaaw3W5qZKhfFGHi1WgTrF5pbA8PrdJsbLF58UHzLimvzTJkR9vp3g53iMe2mMDvph25jVGf8p6naHF6HJKKp",
  "key16": "4vKmbKHTVHczQJp4EjzRGmx5bchUVQtpBKHtH287Rjg9bybwhHmrXfWwePK7oGKnifZS12XiVeF8kVYz6e5YdiUo",
  "key17": "2LViHH2T41RQ5FeTWy1U3VpZU3ZqLkNbZJ28CtPR64HwSp3suD7Ym5ASxLNW2oo9RcAJfUQhhZ9Y6S6QvhiXpghs",
  "key18": "eLHp9zoT8zuSKRZkX22hW6BYYFY2ujC7KkJJKnZizNGmYsGPC5xDmDrDeh7VZsVCVyxePaTASco2zgahLkLN9p7",
  "key19": "5f1FeoXjG8ogmVu3EMkSzdLoz3hf3CGor3pLA92znj5rW3eKyfpfxgFTSVE54gtHvoRoRXRZvDocrB7w4xt3y2fp",
  "key20": "5o1pLr1QhmhS3uSU2CCWxKhNbBbDu31PBJjwXSFAw1RPXW1AAK7GnsEKZBX9fGAKfTUti5HnM4AomfZ7YZae6yeE",
  "key21": "2Z5FBgxyXWgcXDE4ekMhKJeE8CgprdvrbrxiPzwWpHMUqozk5rfJompk4RixfMsciDzpVGK2PpsJaGVk1opLvrU9",
  "key22": "3eHUDGXeKS3YcFhQhSAyphC827o6hHe53MgxvxTceE4c54Df48ARVyGbvpEo5zhjqqapWoR2b9tTznT6ZAgXQ7ZR",
  "key23": "UR5B7PeNs7HsMCrHrdQKAxBLcvTfvSkwkVump14qoVnCQg6QgKJEbUZXY3XzJK1GDPXu4bkdwcuy58RJiXGKHMc",
  "key24": "2epsetHWGh44uCXgHN8sy6DKQ5hSStciutKPbT8JZLXMkhd9QchKndjbcwTJ49SGpSPN2Mrrn6uaUAmWLSRVimdd",
  "key25": "4YPqJ3KaiBjQYfgBR5eSvj1krbMFSECRwQ7AShAb8M8HqgjZryy3E3QvsgUgfAeTVgfjUjPk3N7Dz6V8jH9GHt1d",
  "key26": "2Fa1wgWPfGvwKVJwquJCVTnv7Pg5eVHhx94XyU2RS2TGsrbQwTKBuqxs1vM2mh2NMSthMcnuiUsjxCHRFv3hD7ti",
  "key27": "55CrUsWDYKyBhaS7Ss5kRi1gjiZVgjDHeecS8rHhFEhV4awaFiX1r5jKupaUWEf1nqvt99NnvDicsiwe6tvLDQLZ",
  "key28": "5GMgFNVnXRj4cirEnjLvQkLQMyHySqoaVKADz2eG28yq8WYSDYVD61x6PnZAoDAp5DZrsUPrDMCKUa74GTiF8pxD",
  "key29": "2F6HVXUQarzhoSwqd3YG6Edjq99qj6bmZiZE1UbwDhn85c96T7Ke7adYV3dLrQeUcjxsPrSr399Dxycqchxsg9ba",
  "key30": "2TxqcRMwwKfeB1w8Z7auSorZtW9zdnHHJzGcfsxjyNmmsTnx28u9EYtjbyAnh39YCYSct4dhQKweNZe3RsjkXYh2",
  "key31": "twkNNU1ZsNJaG9WRpzxpRkApbpCWhcgGzx46g8CLRg1FWqYoZYJAEyf9JRpm36t8PxjJEfM7dfKVMiBfV91gN2y",
  "key32": "449QcDzJ2Lv6bJZuVKmDjE3RmTCq7nu5xmG9BqnB9vbFd4n8SEwQjtPoh3GPJwjVcvp6NK336zTH7k3REGVWHekm",
  "key33": "1o8xkEAZVgy5ZsWXdodFEWuUVKA1TtibjwG6aWYAXrqhLE5z9Pa9FFhxDbvhcuZ25bcVsaTjsxjh2sQpTJEBb4X",
  "key34": "3U29YgGrqfQ1L8UCLGzqqym98ZS9JkRu5MyiZdH3QFStgat5DYkHwiGBGP4X9Y3nnaxVqK6apTupHP1eFY3HEu9W",
  "key35": "3qT4pjSd1sN5JqAWCCaXaDRb4wZqzR85RKXZEHnrsUqWTRUP45AUin14FaZqzRJq3mAcWWyJrpfE5b2qfQ3p5nuD",
  "key36": "5Y98noZYG2Pxuf7ibo7rx77vLV2k9xkxzz9Qtqmc4cLYv8afWXvDEX4bogWm7ksLJGyUUnhY4o2cK64ZxbSnMo2s",
  "key37": "5REXhLvCT4UydQVVFeHUEaZGC5Jn4wJiSAWofB3NDB4ZigcSu6a5yLT9ZgxHuYzyCcpNWjAeRQCrTCYRdcaW6NX3",
  "key38": "4NsEp9hNdpwfBEEJpS7EqgGuEA3wRLDx9UAXCFPLCnpZXKrrGpJb5sZnmDKFJvzzFGuJ8NXQ3u3UiNR7DdVQNbPc",
  "key39": "5As4L468V2xC38KPvrQjaDxawSeuA1QfbT2HXRBEQvXcEfF52LYrUTNnCRNR325LZbr3ayXuovrhqZmdU1TB4jg9",
  "key40": "3U74sF9rXvx6Qz9vXVDtbg96P5zjsrteonGE2HjcTPERQ9NAYSSk9bD9uLA7PuhzqBbBVDmp56z7g94FigsiUUF8",
  "key41": "4Qke82keEGLasCipnXu5nRfkvKggZS4aNAS5GcAjRhQCzKSPMwjCusDFiDyxna4fwS6WVak2xSmUpAKzgVER6KjD",
  "key42": "JBv4RtmEkUypFD6HoJRV6R7sbtgCYCyxpwUZPxwwRGj46XDZfCNj2adgygAvKWdG8wLDRUpYv1aJdPF1qxSJbVY",
  "key43": "37X8vmHYFNbhCEBXjgW3jRgSgFsBmeLVSvQtWWGiyjMaY9drx6J6kSbZrsj2UQzVYRJFkYmTGqP3sCxyDJxhKm3x",
  "key44": "5WvRSXxitt5yvvFC6QFAr4hRFM3mCuy6xjpu63pMwcZaFJEYmTeFkci8rPpgj3bWphveEtNiBTU6xDnQBrZnyMun",
  "key45": "3jA2aaWTTzPR7hi8mRrFJaThG7LRAzrqXePebsoykLoB9xxtTfH1mJpR5w66kBDPi5vHJLrWyoCEfsFPVGpJ2wCe",
  "key46": "36CeAWeMq26hZH7hrRe6j4WHamXcNmTcDSsSoTsu5i2ZiGssHNHAecLeeePzbcRWKGmhr2UTotTJBtcJ7x32nztZ",
  "key47": "LxhSzQbM4Yg4pHq8kSKkwxMXem8HSZyLJ3MfLJzMED4HovxpTZcrBWWqeN7HPqdWAYDv53wFnsVtPCyrv1WHRfg"
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
