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
    "1ErcZyrVxh444k6TmJhB4hH2DFYUHMdneR2pMUvnBooyAQXKoQHmqQr1fYYzUN5rmWR8DoBz4xJ8v7tUyBvaPt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22GCHz8gQFs8mf97rKH6Tf7ZmunyZsrSmbn7C6dyfG1n8aU9euuzksKqzmHjZF7RSSjhNvKzkwuL7mAhdV49awn9",
  "key1": "ChAq3ToT41jMJgnByyMXfajMLbPFrfN7PiNkxTugNmfkvXd3wCp9Cy684rHaMiuDr5Rk7hawwxVeZMjjDYHBuaJ",
  "key2": "4g6Wpogi42x858CTXrqcDECtn5WXLkWgJ1p5RKczcMN5AB2m3bEmudFph8i8Ez8WRKG3C8BUEKPuPjeA8mB8Yn9H",
  "key3": "5pV7pEuZ5MRaKwqQPczNq6XqzHZyyKDctWUCHTPoek23aKw7y2jeHte7ny5eZVGChJU33t2Gt3XLLLbYzjXYMUhP",
  "key4": "ZMqn45yxcDa9jRYGJbaeGGrihbFRge4fFzobjz1ccAMeTjAGY8FdRxDKz2fcwn4muAK8bq4xJM1AEtFfACaQp9B",
  "key5": "3XFjy1yWiPnxS5NVHBvt9NmiRh76ec89dcokdWHHbAbXV2QEpkv6Yi3rqMYSMnkudWfhk7w8LRXq5qNMPDvLT43U",
  "key6": "5W3wMStzgAihYFe9zxaoMDmqXGPCnJs9M3ehUzFtk5oAybzU4y74c56wz9zeRaLK5xkCoFeY7PALixnjSPxQLRr4",
  "key7": "oRHf3zk6g9zsYG7saoTRcnF6eCVDEU6MDQbihad8eEBB1Ua4gptyenvt4mYTUbNjSopcpFkKxDU2qzHjaw1x9mY",
  "key8": "M7QZWeHgRvs3swFzFKsbcXjiKJF1xmXggaXo3xcUTDGQh2kbcj6iKfxqkmhxHvczj5adyaEFwDejrdvgsYnYsZk",
  "key9": "2oUt4xuj41rDGfqYBnZvT21xBYpdZyqRSf3A265GsP5VDreJUdu8U3ewvAVLLseFY9V5AW8SXoHpo6mshyjou4tX",
  "key10": "5nZfsAWs2PBe2auG57fRx6GCHpWHwd9dwTpTwre1CWSr3YhAZ8VzTUW4VJmJmAkVsxWAAwUHP7bTgSv8JWYSgmiQ",
  "key11": "4aySR65UwcPjTCAnzyDs6aQQUSkuVjPcXAsaGQcjqiriuz1GdSBFw7YKRTxPfcE6rF3wXuiAHuJddCdT4zRrmCig",
  "key12": "64nYhyxMiabLEXapVg4TkTH42npYMENKftuaab53ocmHaxxtBj7Raw6sFVSCaichaNCTCu3RFn3iiavYKh5jfbCM",
  "key13": "3ZfyfTfRjdpmshGhGm4pQT9HcLoYkVSeCi45aF9SfgGnsCXi7VBcdg2BfWp9kHZtvfD3d3HAzXNsjAMCJfFYBUus",
  "key14": "3dskho2vb2XZ55xtoFzbhSxYia2cbUddcd2oXbhLEpw9L3rhqmCeqkQFd5GxGg8mW5DYASGTMGMSEAftj8e7QHts",
  "key15": "sTDDUcdNH9jQKgpGJxiiNrhxreJbjSUaj7Qo9hfEzTKZqDzbaB31aaWWfXj6gytNvsHGjzPVoH2wucQVep4Ccsz",
  "key16": "4dra2CiZ18FzEwVpmKyHr6YKxkEHCnoCJMmdD647v8KYZ5a6Gj3i29ZW16JPKE8YbtaQYnLSgXmx2wZGLR28WKvA",
  "key17": "4BjbgkjRwnyMybvRB5J6KqygfJbiVTvQx7pMpHYrNHBrMK6WnBa7J75sgrbAscdZK2zV55VgzrnRphMzRjBYwMCr",
  "key18": "2C3kFKWYvxQDtmbVmoNHUrzxpkLPwnjmx4dE5n1t9Pg9ZwhuVVd1pwT1R5RSijDTLXR5kUmBnH1PiGL4Va8t6gwu",
  "key19": "gEaNGhwvsuGVEovnWYftxTyCeeHc5pP5KY2Moe41dV2A1ytrH8V6ng5sBBezr54P8Ncjky9NQzLdZtk5iaFWZYk",
  "key20": "5N1ZWwUg67dFdNNaNXHef5YUqzwz4QQrMMS1haCD34k1rfNSZDwBs9AsswhNTwsnxn5CQfgQT7JGEYqmfj6doMhZ",
  "key21": "49cfcCGwMFPdUpGVaWgxNtF3qktqweZptqWnnwz9jdayw8XoitcEWVs2hXAgh2zDa2YWkZU9QEQriAAKcGLx2noj",
  "key22": "3ZxtYEcCEhGAgd8qThKSKCEoxcNrUHWFXCwv3PqbYU1wn2XYtCRVAa32rrthfsqHzdcBfrsz8YZvXrWu598XXTkC",
  "key23": "4fMFKQTZJNM2Qbjjt6BauMfosnBUYnYdNJsiV5qeXobw75Yx7hwuyHL7Enobu92zN5Gx18YqUvnE4mFWzTYw8DeE",
  "key24": "3jnfmLgwg8i2rRcf49H6fAwraV3H8yxqbhXQX8KAR9Z3GjTpZtj4wVYTDLEjXH6TYgUPWHndHA9XpJ2DBe2rzVzj",
  "key25": "3mdfvm4q4fcMNgUciUoVuw4hnxxT1ZMQyaEEkQaNd18FXZQLGsdz7hnKGejJ8xv7cxrCZmzdbtFGHbwj41BVSaEN",
  "key26": "32ABzgg4e74he5Y2eSJPRKbnESjUVGUtts3sy57HMiYyy9EAhumF42KtNAH37R9ffYAaZrciNN6FKXdg53R8bcJi",
  "key27": "3vLxZSUo87t8VaWKWAssRYZ5EqVX4gmcHAYP5RrM9i9abd7157m9SzapeRRKvf9b7HZeB76P4rsvZZesS8wQiHQX",
  "key28": "3s8M8Y9AbtVSRz3AG4fVMkkSqCm892E8PUpgNoZjsvJLm5VBbqo1b77NSamZw6HXvDioA1KozqiqUosTJ5erN1qZ",
  "key29": "eRXDGa3RdS1xeZkn3XajmgSXJpKohHF4UzAo2v9XZSbVWgodYxL7yZZV2o7cFYWACn7AoFkeyZ78NWcqAT81JNi",
  "key30": "61iAG15vnoK313s4TdAf1he4j5BcirNnrZ3Dabqvn5zYyMFXdpbLKbF8SFCHHkMuptPxXEjns3Jn3XnUCZ7Ljzi3",
  "key31": "3sNLRH3sfrnDKPrg6fBxUcCa5sBJ5q425XMzk1zXbMuW5yN6eWmtgVuynk68PR4uUX8wX1apt5Da27HN5V5pXJ1",
  "key32": "GqH2RCnTFf7g63yFfCL6o6KNnTHp1o5ycAxMS52pS8556hsb1xa4nCsVasFNaj3tpQpEh8HygMkzz2Xowgp18m5",
  "key33": "2aV4yTELYiMei9YthtvJ4mKjuA7vVwEiEqCNYMNvGFALHwc93SNWDkBu8WrwArRQ6A4X16bSdjQNMa9J6ns7infY",
  "key34": "5CobvHUhpE27U4Pcv2nyrP5VmEGQwAqQU9xRq73E7DoELtmWcUi23T2EiymggZ3vvHFwxpoyGB9YAB1tqU8Lrqfj",
  "key35": "5hVQUAyhn6q66fGV4rRMQdT9b1G9uyCVLA72XatTSrdVv81uVyB6nwp1CGaVAU6ANW4Qz9zLy3oUmCyZyXsWsgaH",
  "key36": "33cdvKop2q1t6LGChLEEdZPVbC5tCD9mzFTijG1rAvaGcA9vjkwcmGLeeLVA9VgWEuYWnsRQzVWsKGvktWVrfv39",
  "key37": "2s1hg3UZrhqoqCcQebcanUfn9uvjQYMASCsEC7hdpoyBoyn3RqJit4sfNE91UKW8VC3fKZYc9Qed7PTL2pBKa7DJ",
  "key38": "4hmRZTkp82pfEXN8dUzh6TyUVBKGCtVb9wKzKpw4y3iJ8og7MoUbuxhhsZGHVKgtLuJexQiBtpEtUiYWqw3LRCrn",
  "key39": "5ULoQQqNUomEsTAng6tnNLVVaW5SRuVqVuKUJHAcKe5CipiredoL5Z5fFJbqXHEAu4CoEhkuPKUa6EzMysjuqnep",
  "key40": "39BwwZ1KTZqX8Ystj4eGsU9cLxyrgHuWiGp6cT7UDEC4CsH7qLCzkW98CkN58Pb7NsGqFP221vq9A4yj4zF1pDC",
  "key41": "4mjSmR8dREyssakH94jn9SQkXX32uit9v5wwp1YYt9mR3veCgYCLxCSiz5w9tr9vvayV9yqpiniC9n3ziHsf77R8",
  "key42": "2f28JShE8ULh3FaqTvtYCsJj4prL467EX73viWDVMBQruv9nPpg6ifKuqFrbZqMWqjRKv7fdJ3EZs2hrgtCmWk56",
  "key43": "2aN4pXGw4oJ6LkC5zTpzbfXiDXNdBSCfR1UprPdK81u2L77on7Jmvi92cSNzN6Wi824jgzWvxM2QNuNXgADQk5bB",
  "key44": "5GLYDUzJpwLUBka1v63BCJ6iof6cnTcWA7dwZE2JXmuzzHWesCdgc4HExVZ98jj8HTUSGCxuER6u4Bh8e7fYtxp",
  "key45": "5w1kCDTLactHQuoHeRsmkME42RMgwVaPsrP9e3S97SqDcEsMuTmCVjQLEbtErSHD3uhMo4muutaM2yZwijrjPnP9",
  "key46": "5AcaoU1iefznxqocDWWnjCGwjRucXRQdbaGVYiEgcA6jZDN6eRgjpuCdsBdsCXXs5zSy22XGk3HcNNmJMfk33XKi",
  "key47": "4gtacv8NMUcxVZaEEmk7NtcjRjEjNnXcc1MBeCgYKS9twWKFKrg3RTbXP38zaGVsYm7HB8iaWwZJXPjeBCS5uiRb",
  "key48": "3Hp7tJkuBfDxLUf7WwE33jZy7GckNR3zZW9LHfBrvE7tGApwij57wW7bQTcTLw7jo25TKAEEq38CpQNY7ffj2JaU"
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
