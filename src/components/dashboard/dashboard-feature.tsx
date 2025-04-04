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
    "2tk3TUbWMDabnNppvmJxAZtw4zGsBaLxSCpRJXsbeXbZQSnDy17m4FY8arFBHuSKBkwXsPazbVB61MwnovtadESV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Ve6YSbZJGuB3H3NZ52tESewJW4QgPy7rNaumuxC5FuKatAWdc1hbvhFHsKi37riPDGfAMLiMXkUPbN1d1F78At",
  "key1": "511ob3J1VoXoqRJ7dxVhSXHjS8zvcNtnQzok3CYEirLQfUuY8VDj8wv9NDy8ypoyQ5HUn1v9bpE853Gah5eRor48",
  "key2": "4RFES2Yk7qKfwP9aav7P2Q5dP2CmetXPUv7oDFmfAezWcBrnDqJ64VGvDVS8cgUYXKEGSJ9phKUT64Ymm7a7ACxz",
  "key3": "35KUGwAug1bRZJfgiMZLqNmFKfdYqN4bLwnfUE615rKi2Z5G2a3pyRUvpmwFpj1n6nhu8wEuT2GcDiqFrt8a3GjV",
  "key4": "U7CCuwKiC9kQUaJToLNSVwhstmJ7tJshknL1VXSBmwwV87GCTMJnrqW9AkjitcD7cMGT9JP3bchQHBvRsnZrsAt",
  "key5": "STKB9UiQGhniWzYFgjf6bswsAyEma4kFJK7THi12SgER3VJBBQPu4rJkxoNAmdQke76toLcuKpkLCzDynZdqoos",
  "key6": "634iAiQuNd4FuaoNhkya3EvDGA12UvBq21XCcDXLKe7X9fRxw7p6MvEexNar6hWkJR8fMJ3BMR9NWHsHMik54g9w",
  "key7": "1ogXxrGxL8rPo1nASshKaJWGipRqWiJzzkScgTzqWwZLD6EtA11gjz7Fj7Nmv69gcRsfWbKAWXMXuPxFN2G3Ykw",
  "key8": "3DmZXjqb6GAYwsZpueosPBbWZx36QNZQxh9oa78GnUZTV6taxTKwsMYuY4oWNFmjqcTno22Nf584DwaeTc3XKoFG",
  "key9": "5pd5AT37dBLcpG8i2738wbNCNRxUiTGg5EqpS83gkXf6ozGWyUKeexnNs3mYByxcpJf2Rkm2af3CALUsDNGz1RbY",
  "key10": "48gCfrbC4RkFCuPN4F7CQuRMeyVTF3ZQZGkPpGWeyD19J1ENEBdAaPrqHn9YoX521bbQqBC2Moz7LxjFHv47BNz",
  "key11": "5CmTiar385XVF27JwSNV7K8TgVSGPTkUwBoo2A19wHEZYH5N82iDsfT1KRxDRGkybid4LxQMPV5CT9BKDvnBZjti",
  "key12": "3d2RVMRDfm1nTrXmdpTwQo1obg7n7JsXBThDfxqWJ2aHVE2K2CrAYCvBMc3Nuh5hhWNHbrHFgL4nvqBgEBnPeUBj",
  "key13": "3SgVNfTh4f7NpjVUunD2mcZXrAUd8jaGsUMSmcNRNRnoBYrvxp2hsUMCDGfTWqD8P3hacgB76jqhctAmP8aXxjXx",
  "key14": "52kMR9zcZ6Ns93BMArY41JThURsGoDcJwUTY5BcRS8qktPPWYufmnin3AbzQPCZLYb74cmxhyGwgmiRCLmW5p8Tm",
  "key15": "4eBCnUZXMNSNzDU1oUG5DpUJy62gd92bYN7McvFML7JGdxzAhojbdwtufsikSzRLcYRN2HyYBv4A9zXvSebBLv8L",
  "key16": "5aWPQ3ivMauD84oBTcpqhmpsswR6kM6LUTyP1fJcvsni6XEXfLWEZbKGeKHSi7A6gSQhZ9q776VPXy3pMT49apjF",
  "key17": "5yosjLCYqPZZfo2GoouXvgHUM8zHRGUsmD67LnJ4QhUvhUsHZYLpatfp3hmzS7at6SFf9wZQp5mHy3eKFE2axDVn",
  "key18": "2LBU7R3p9DfMxqRH9oCQiaM4kFBFtSTruzGW41r97MyHHEQy81ty64oZzT7VYLXCte9WDAgFD9qmijy9ki8c3yDE",
  "key19": "4WPWMXc5MLNxTGYctBdTciouaXYtHPzF5YEX1jb47u1F5X8hMciJBFqrQ11P29L6uGuDGsH8b2NJ5D96QUnjW6A3",
  "key20": "QtkaJZXHEpkRV2j6Nf7iycdga2GXoaMuEybDjfZgBAkP4mYRqmQQkwpaBaCFrhT7Pwd8MTiwSxoYSAGi1R4Lpwh",
  "key21": "5fjPNTuP3EQAQyTxwzfscQL9xMUDovEL5YmQ4RRTeijNGwjKb5H6HN9sJV13pzVGpKXtnHUMYYhGhUKEVi71SA8L",
  "key22": "2cWhxw9Wtg2kG512t91CmY7qNYyktdyX7CcnJX8tsaMUK9tNsNsJnB4cb62jgJE8pWVchN9x7nHE31hTxm5p7DwJ",
  "key23": "61Epyuoe7oyeqErer6ggkGea3WHuUhGJRWJd99gakRKdPWuzSmcf6We13ifFs2nizZ7mn6Qx9hhzkALDz2C9td5w",
  "key24": "5Ez5ZHY6nvJhVLDYBRLLApNxaCH2e2MKByJZ9zccYFEAWnYUD4dQDUczpEbwy9psu2urgSCbQv8UiMzLC7KSnMiR",
  "key25": "2ybNDFXgyMNDULyKGMwduLsXmFmKvrHpHPYP92e6MdvdRBk92LFTYqCftmrqEozSKmPp1gMQefZttPShTbpbUpM",
  "key26": "3Gfj7sbLdCvLvonRaRcNZhB5nAQwKVo42YMruGxMw8RLhuFM7bz6jssfg9YbMxpPVw5Js9YQc6r5ui6tKwRHGUzw",
  "key27": "yR7SXg3R1BTiG5gTjADEtRqsJKzjdGQ7p5WwA9U5KvUvRZgNutXv9CSG6C9AKim3wUm9AkCZ71QwVuCpkp3Pn4K",
  "key28": "5i7m962XTpkunFWNQbjGRVR4RcFcv32SA7EAFsH7vZ9xAdYoj7WrmUMzmADwCApn2uDMFiAWp31ahfUVygv3DDJH",
  "key29": "5K3NXdb4LArW6yP4LHgKhYT6LwXQuMLrNcBYFaPzyvv9iCd4tuHwDPaKoy9aYLTERB1siK13o4LLpjvfwFHX8osQ",
  "key30": "3rEiGu8S1is2XYiS4QVb88WZAb4sZQUtxPfoF5tBUfPrVVwVSJ8Frmv8Nz5E95P3M3iHMgnmQ86AD78ohhHhzzyR",
  "key31": "uayS99K6pu2UQfh9NqrBUyYjZzH9t87B4TbcZsLRk4i2NtNr5xaNbi7GcXx6jBJ2aaXheVX3L2sjhCrAyGkQjbz",
  "key32": "4DerYcSstmKjU1pSUVjz8ttEjUsGhdPve2FqKgacT3Npy23hn4yjjeXQqkHuoQEJrMgRcAUW7ZHHRyvpu42DtHYX",
  "key33": "P3F7GdkiDE9iskxVAQWKXEs3mYHufgypjzsPRmaavsFWLttX3gNp7ws699bM5ZDM2ymEB49w7B99BBegm1qKAuL",
  "key34": "JGtdWwUwACANVTGszYP2MFjwsot4S6tAZJYPnv82Qvp8Zw8cRXdjAbSpVJFbEw5nyCXQJZyWxMC3AQAgVpmFVdZ",
  "key35": "2HaqPP5RRoTQVGuQyazRrrhxEvYCsVfcvbiWQAQy1Fi3oosbxB438tnSd6vAXBiK9F3F8fYBBYYfmYfjKvJZGoyx",
  "key36": "3cpXVttwFfZrRh2rybAPj3jfzD7ECgTa3XZwhZuhzRWtoTXqzHw7f8GjTnPq5BQSJF1UghoKUcrrpqJuEUTDEsF7",
  "key37": "4Krh2ktdQigPNHtARNnh85zrMWsTJSnFKst7nQ1Eo9KDd7w5vKcG7XeBp6bCdQcyMq2gghU1eZhujLVP3hSMAM3b",
  "key38": "5c32hHP3oHa9Sk5nJ4CmW2GgQZ7kj8uub6oDvrThPiwvuSt2bQAeZVuaKfEKpS6qgE5HN7CKqCrt9FHqdKR5MEFU",
  "key39": "4uSkTd91NMCuTs1iSW7zRkUdF3bsQL4rHba6c5KB6odeT8yaNRnFPwukqsdsuLwUSGUpRQ5WNaU8tQsWLXypMHw8",
  "key40": "vBcK8w6422vvGhkS13foKr8x6MNhSY6HAUc8crtZ94XtVbFtRMgyQZ8GU9YXiD6YeAZJjVqAkzfNaLoeN7YpiTD",
  "key41": "5nTgJaMaGGEjdF6yJUBf9tCDchVEi4W8DUPQFGEG4x8nkKG7D6FYe1f2ABp5xbTrEZzDbySr9jcTRprgRSRvXLx2",
  "key42": "41f1ahdKuptoqWRvCZPxrWcjvh5uAjGDVzYjafHVWdHrMB583aDkzSeB7xauhf93UeWjpE3tcJ8NHuQ8g4Jd5RUe",
  "key43": "3hFe258PdLqL5P7M7xb6KCAnwbaKW5mLtFkGiZJAdkHTQXQfwF8YqjDFyeBd2QL3adWQebhF46pVfpq5p673oiCF",
  "key44": "3tdWZ518eFCaY1Fz7FC42Z6EL9N2AefrctwuKFuKsx1BS5JKbUNR95GN24yiTfnurVeanP4iyfKcyftS92doQczt",
  "key45": "268qQVjr2ekxLeQ3kBd8f7v1z1Sg8rDCwe7W2B29bRWG1xZjVf7xLi5wJEeUzGP1P2CqWzfzgdNdC4mSTb9scQH9",
  "key46": "3KLmTZJMESYfdYdSpiXjQQwmBkWirCrYQScc68nTxxdof4Hckqr3zsC5gB9FXYA5CK6cmp5YTFAk855osQwuihFT",
  "key47": "4vg5feWSNwG5doDcrLTU56VE9rttveQWTHRfvkdnycB9NbfVgZ6vdpTUxuQRMpHUTKBBhtaJ1cr2HZzMSfCAtBuR",
  "key48": "jF5brFGtT1gnSPzyJnSQFdfeXtQ3odoMRyBikBNZyJFgBeDdrfSWoMkaFej9V8ojTviZC63yaHPhoK8MGu9aJE4"
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
