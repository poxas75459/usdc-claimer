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
    "2MTq6gtHG9jVaNXozSTMBzD2Y2oQ83qN1YodbMLd9nMj63Q6GFdP47sVwAmBd7xTMiVuJerVYrpYAPGvKAexY7Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644rmAd1i6vJQBYeaAD6aYd6P79bacssKcRWoC51HcQghxnJyeAdsL7ZM2vaaJhA6SeHrauBwwN1XbVwbtxvpsaF",
  "key1": "5hynsPJ6V34eou2wFDdbZEC3y1vDmbtgEaoiL4bX6A2GDLeK4hTUXZP7k4zkkztTSsfUFKnHV7oNGBNtkD1huJ4j",
  "key2": "tiySKhUejHapqmcGfkaHwft3KASiNWbZLuTJuB5NJhkMNPsEukw7ZLsDUudWN61gxizYXuLFicLEvnWfxuU2mCY",
  "key3": "22uh2FMZYmrsxgMUmRq6UDykndGEB3kcmNW5W712VZsymqtb6tiuM76NwXG3y79zhUbt2yT8zrifPtxY5yz1BTaw",
  "key4": "5gszGgiTNnqLxSDhhLcnEzM5f5n3zFWwrbj1yu4yZNj3ULKCWFDWQpXZdU8UDychPbR4abh5SUL12guzFWegbPei",
  "key5": "4npyBQrdUBAshDa5zE5cQHAF1hyBv8zS5heFwf7dX7XXFXUEXTQGAtcT2LakCkSe7APd8ohxV5UJQzU5egMmF67Q",
  "key6": "23Jy7H1yagzMmvAy2yEYrrFScCz38MToQHbc4TtehVhz8mw4RDLfSsb2WKQYwhqqp9RCedxxAy9i6pteaXcVALWz",
  "key7": "3MMyqj7EDUw9cgXM5jSCnJnvKQYemVqyykqBNe8dAjPPuRWoN5sMrUDpCDQodFcwSjjBCnasYPRhTgdnscdZWays",
  "key8": "24YxXNajZSotcYPArGeKDfXPKfuch5SoXzNp8fE7vtf8vbJTe35NmKQutqgdXHEtZqrjYfQcLAdSvUj8FLfUmuzW",
  "key9": "cAGUSwMHNUcM3yLnuCz78HkfgxZ78q5JsLawPry9JwEM2ZKpst9hr1mmhPBuTPwMFdjXXKu3bYpRUUu2m8QesMq",
  "key10": "4U8QnUMFy8q9W4Z4AaomDrGb8fXRdfw3rdX2vAXxeCB69eZNHyoP2dYEpALxf7XLccJ7fuJC8eDrgeivDg3ycXmF",
  "key11": "2HXoXp4wPhjJYZZoEGaZrF1eZkJYmVQWagfzG6TXdaEUCAihpMRiVsBgUPvYNsZFvN2zzxctrYoYnTKeB4NYEri9",
  "key12": "5c94bSgskVxnTgQbPKbPq8UHsdHJ1RRmeaDNkWzRteVPzo1znTdwFPjH9xPktoWZLjc6XxVMzZnRxsZmGjSCzt4k",
  "key13": "42nS9txM7mHZRH6MzeDDcD1KdpYttMeXDKKiGi6L8f3q8bKU7QpyVEYEXcANo5dfjNUDGUpowZ6uPRfe1GBzaDLs",
  "key14": "md2oNxa7M5ocZztK3KFyqz7oiUrDd2m7vAhCCz2ujV4GTissFgK6Fwvk2XR2XnGw9koMNoQMiXvVNv8vnwwRHV7",
  "key15": "66r1Z548xra5vzMerSXQjzk2x3ukpsCbJUJMg78N3SPtHd87H4NGsbmHTGWR2L9xeo9uyiYa1Lb3jEjLoDWJFSkJ",
  "key16": "mLqWKodrAcL2RYrge9sHGgTunMeYQgpT9HcYWh5Rsgr4RxHBeLCaF81fZrbJDCyJMJwYBkNtJnuA7wo6NNQQeEG",
  "key17": "B5Vo3Dj3xcKL2Q2gp3mqZCLEdrVpL6pzadNR47C19TEUv4NUY7f9nkPLQ9x1ymcFYybuX3uGJD3mEJRFmDkt2ES",
  "key18": "64hyxtbYAk8689AMFaApEJdCAZL7A9xMcGztmNdeWsTEeoY9jEv5xWLXXuqSU74sZcgr4AtyM7wPd6KxaMpnPbet",
  "key19": "4YpiZeeGUeSqAyK7HwsTbzrZfJMrF3NGs7Ayiud3suBsbeggHB8VBRP9mqf29aqrBsurTmoD5kxvquWVy3qDbUQq",
  "key20": "VuYdEKWx8hEH1cgTanvFX6CG6dG1sjKGNxFWyW1zf8cjvLFDSX62a2oXhcZd9TxMZ1gpCCa4czaTvXpfmgKU5b9",
  "key21": "4nmhAt4zyNgvdGZv4nHfTujPCCf7kuEoUnPfX45xWajkcwjSHXLGuiJtLxHhLA64VW3C1NNRDyzHJ7879QtgyYdf",
  "key22": "4QMoJHYeziQUApJDhDmwE82Ppd9B1t84n4YADuysuCA2eu4H1jfroA5MHSYv5vd6iBUvHGjF7gdRRYqnNZ24iurh",
  "key23": "5ThAFCc6ofwrtt9bHcBf19c97zKpUys16bDsExESCGFQiXUgcCJ1grSjU2LBipT9yQG938M4CFvBBvmcPkyeVrnC",
  "key24": "2TpBWm7CrR7TpqBEJmJ4ieCajM16f3pPaChDndoPFKuZAqV9ziAVKdYcairxNxmLZkHfCFBLz2dKatF8ThegKvxy",
  "key25": "3ePmMtPtKoUPrzTwNiG82kceJfrxhZ3YKCEnkvH6FaRA2jBmFSUg7iQGTyxdHs7Wwc4ZzwAGshddjGBLkD4czbuN",
  "key26": "2KNeAZmfhLJCvKeByQ88hxe1PFxganW3CEh7vpFxi735skSCvWua3U2veH3QKaPCx4tS7AmSkdPhPZLy8oyjVo4H",
  "key27": "5FWvqEnSA2YBZ65EeaeY7w8d8osHrvgYgDC1jiNLk1ntcypnf9VAapfTosALZwMXKAJfjtTxwBchksmdv7tkg4M1",
  "key28": "5DZsDUHMx1uhqHPfNQgDyZ3NMxpNAWPbKLMhhqWjGmnwbvY75U9cbV4piWFiMyH1khfPMmZ9uLNhRgVJPjGRM9C7",
  "key29": "EfDmRvVWC7Ho1fi5A4HkXvi74j92vaiPwPUQArS9u5VPvJsWx6kqbfPhGjuw8W2n73pCis4KCAs1qbJkeeUYhoJ",
  "key30": "5iYpoPosHeMxgMdL7wohxM1PextQqzebHGPYA74GZAvTk7x8EWWK3ZmwCWsynFVswsuHDgJ1kQ2kpM4FjRw3CCsr",
  "key31": "3mNixvoAvbe6eJ1SYgcG8MkCeSEGBwbonmZ7zDKaD9AJsqLKEUftrucM7gCpHCahZn1RgRyKLanu1dU1rCQL6Q4u",
  "key32": "5RJxajP7tzNwmdM81hbGVkCRUisZjJ8E2XcwpwTbJh7cC8bhtswy6a1pL1z1HdLiZq8EYJvj8YvNXJ5NdQtw3rp8",
  "key33": "3tfgCGForLcHZHJfx9JUVe6tsHB8SoKKVctCvDjs1ruKte9QByWpqgMzYUbWU3JLacK4giYA8uuGYPSYn5tFT2J3",
  "key34": "4gbDPvYViz4N31nCGBYvkT4Wi4nzCbE4X5pyRodmFLVFyQsebwgfYCoS8Xe3twoqTMDJ4z8jgBTnrF9cFE3gx4J3",
  "key35": "4b3PZH7qhQ5baxbgkDhq82sAJ47xBWu5sEWs39rnyuRzRGHzb4mmUtVLNpfpzqaJrxPibchDeDAGaSfrSbo2ZxJZ",
  "key36": "2BRMDLSZSzUdc6zJ9qUC7LzGwPf5J7CCv3JhhfjHPyntZMhccRhvYhcCNaBQv67EACmCxi6e65oYcrWSvrfEF9mj",
  "key37": "xzS19r2FTg6WeWVtismVMeAats8cKp4tRmRMXWLpBmqvFfWfDLQCWDAJ7SyLTW62LAL7ZDSvTBUYUW4vzXjdQmh",
  "key38": "C8w9ekGautnQfHy1HdDREKWEpkEPSEz7nweTBuNnNkAWSt1bXkzLemHVNm7HvjmbEKHLgnU4go1mPCcL1bJXD82",
  "key39": "34ZHHDNpRBg5Jit8iLknjvjyMJEiVDVhKMyQq9vmDJurHkdgBEZ7bmdwyjry2KPq8uxA4qfhJT8WHVrLpC5DiGCd",
  "key40": "2E9TdJDLsQq1DFRLsBv9wG2mAuhLBGQnda5k5bvMagYm3rKxnU5JhGZx7CjZ3irGTpERN5sj83VpoaH9TAnukcPt",
  "key41": "2JxBcxybF3ut5tHRTWS9LLPJFU3r5K6tfwC1KjtY9hWEKmANR3wphNPCpdb5RbJgontgvMsQVLWGH9sCQnfZ7ZES",
  "key42": "2oa7997VcNddqBdHMSVDHcB69dv3WiPNDKjr7ubJKygL2ghEqu8swthFChga4QrvdtwYW3LqZUoYMfTzLRGv1tuV",
  "key43": "EABu7swjQtRHkmDn228rpAdnBymy8P9w9hj7wTcwMAKYD2DU7pZ5UStJJrSPoivVZ3FtnxYrsKFKua7bDCszYYA",
  "key44": "qDr6aZqHd8Su87Gy8Yg6uSg1ZkTuaUXGrKiTAzqyC43FRe4Bg9scesCs1vUUWEHQ7NbAL9SNXVMgiKfmkEqd99W",
  "key45": "52qGUH2WSXETQyK9WcvAxSjZuc3ibQ3HUs7g2Zj9em4drHfMjyoET6pPTDiBTFUFaiQL9Kp7N8fVsdgYp4eTrQJh"
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
