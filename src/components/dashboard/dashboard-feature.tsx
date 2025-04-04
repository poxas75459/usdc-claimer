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
    "3wW1PKk6epTbcHwC8pPCrs2A5UQzjgUC8UnH1eHZ3bjXXYRM5KbsSGXEf61BTfpD2T9LSMLRjTc5DVBwC36XLoRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bY38TFmyuyH63uf1UnWT3vxFEygxg9fptGFZDcuamYxJSzrH1QxEnqZ4EF7y4peT5axMErLDnJqViLZbcFs3Lf1",
  "key1": "4ohsJAqCwuUfrcgLrwdav7XB4mTJUzswKLJ9RA1StTpPNuhGQXJjAG68bwyZRXFCWG1drYrP5sKZQfpcYKfcUhGc",
  "key2": "8L1JWZRfsj6tUv12Y37q5R3773hNsYKbYptPzE38jzziCpSM7Ba91y5AESMzuicuVFEqUnCUe9AAL6yfFjUnP8U",
  "key3": "2x5JuxtJKxxkMhCea5fXyL6B16gu2iStS7W7jMU4xbuTBbTCcET1xyvjXkFmz568taRpKEFfS1dvRVozzhDjwrjv",
  "key4": "RSJDE5Ek1qyxctYPBRksSKJG1EifK2hvgDxAticxQAuFwbGKziNzzJKFju18v83Dybgwekudz6UYoMJKNaQuk1F",
  "key5": "n9pefhDsg46UsSmKNDogEHm9Num7DS42zRhho8oJsUi2g7NAAp2n1tnMuQ6n1HGGierUmRbVQ9EqDBzcv8RwYMh",
  "key6": "5kvjRgQvvXKJ7RFhRN4miyWusodiG7sw7kZtseFL2NPrSVNdXfRPHok55Jm4NXukPzs711tEzpWCstWNfi7jqAfT",
  "key7": "2Xega58gQnZ1Nah9wHq8BK2u8ALkyxYupyTSf5C1i3UYkVUx7HtgRvyyKg7JSDJCFW5DE8j9m92ubbqBXEymTeAp",
  "key8": "293i9sRNmCdxCspE8aVr8YxGoAyCnk1K7xt7e5Amq5xt6egr8Tm5ZbHWnZtNyWpHDmi6Cfmm1thxhnbPpYRtSp7q",
  "key9": "4odX8mjSDxJaTneRaokUAxnHoxNWcs8Q1A8bCWeM4dN63ZTCaGK6hUubWAixKE17WpaSLeW6HreYcNUXNpTG47QW",
  "key10": "n5R663jWBJjmNwKf6v7vZU7m8RZNoXnjLgYUtfZGVUSw36c1Kz9R9QST6mmy82bpLeBEBJqR9GTw1Kjez1m7Xfp",
  "key11": "3EiwQ5hw9uZtVHCpbZVyiKBgr7Wj5Uc7AhTwyJ7d1LmuSYPdZTim7aMPrKaXynNLdGRHK1n3VxGKqy7eR1uoWrFq",
  "key12": "4g4qT44DNLqiVaNzrBXGfBHagPthTor1wgPEhFEkYKvYDLWqj5hAFQ8qipxBmY8Myf3WFqg5Pcn1rBzZmgA6am8V",
  "key13": "4iPrtcJaWXvp49g8WaXN2ifuFhPiusdq2PRY5MNY5t3Nd6VTTcLK1FogpNSdhCJANWub8LWbtjxhSmEPDAxTyBMZ",
  "key14": "44v16FYaNzvNCB1VxFjuc9n86mjCGkDaJtDAMaEbKd7QnxcCHDckZhHNBKLe4K9tp5bRnsKaUEKa8KauFJafiB8E",
  "key15": "5EwEWursAY533i15ircyFPaHkYUFVnce8yKqbhNhxPiDLhEoCP3ohJE1zDZEfdcAvYsdq5Hnqy9a2BAjbJ3VBjbC",
  "key16": "8YG7UorwBNDdrk8Uj41CrHTVu6D2Yh4gAZAXpbMrjmvN4AX9WZz2ktNzugD7dtsKmxpwZjkgTbX6BVTr4azGQuk",
  "key17": "nbBveS412JFNjPjUvJ6UkuNUbiKqQfqfKb2nnnjb3PRZb5yWi63fo6LUTvmP6RPdRrbAJzbwwuSfoufwehHv1dC",
  "key18": "31QpF5hrDA87jSqvxKVmcE36KQfjcnQjGZ7dQZMHqoZP5vQxPiFqptVkX1q1ZBBnPUN4MPmSBMvC3bWxPiULXkC9",
  "key19": "4tvmBBj8zDG22LNhtZMioJ2nZbxccKwiuHyTmCAyGXPHsDfiLGSG1KCYMKtP3GwKrqRFzKGNGEQaEsRKeAVD5L9S",
  "key20": "4nnnnPFobheHEnPcedihiRJGYpZAY56m3jRrHR4rVNcDDpmUwJk75Rz8bxHQtoWnkhjHuT9nY64cyTyC2zf3Cq8P",
  "key21": "2UMedRcFUQztPbUsXoF1iqGYkhP7j7raTB5sDbNEr4gZ2Gc612iKetTgLb6gZZ2wuD5Fk4YSNQ1QewAjVHsUgukv",
  "key22": "3ofvFobqzaJpUxSjjXqaois6e1be78FEzbYjWrjrtxZ5tZEfzq5U6JTmri7Y1Tze1L9fQBFemPSL9CXNkKcShvsw",
  "key23": "4mezyDxHC4Z1zMBUhVxGDdC5M47McrQZ2v37BLQrgT97VsrxRWK4bkuYqdAJv5CGzUXVFBojh1o5mL2wSXV1Nw2a",
  "key24": "65mFxk1qN9XTt3JM3FdCGpREFp8ERwhvbn7fJ41KAQkCvXtFL8RZtbgavcknRvjimT6Y6VPpqJQCKrwyDyQx6qGZ",
  "key25": "2Rzrmrxvid4uYypaBzXdviFWwb4AFeML6bSGjADYpcPdq1anwU3XM4pUSMZvoioSQv1pRd2mvcXsb9bXZRAnfY9N",
  "key26": "29mZwAapkNT3CpQ1CPMYZaV51EESGdLvFYDS7yDNGdAtRWxQxNZYk1h8K4KKryhM7i94oZwmtte2ov3bGyjb2ipU",
  "key27": "2CkdHHhHD5SNKCVRQ4MHkfuss3dy6iAsYjtU8xLQWo4sjrR3rtk1FPGkt3TMnPjfgkrnKhCUNtpZp8GM8PAaVk85",
  "key28": "THiPLxRJfuLu31yBPcyTdQChX9EioSwG1HXAJnyBhfjb24QoDSLB4T1jcqFhk47ZSFP2u14J2ButW6JoBbVCicn",
  "key29": "4H3GyffGBj2YmfuTG7f9jg36cDYcPqZKg4Gg4Q9WVW1SBbcXTDgmBgYesPxqZDstuSppyz9q1x4yW55xBe5GwEpd",
  "key30": "2mfmTNpNhBpFziZxy1NKGJaJR9yp5p4MDFvQsXiArC816JuZ2UHhmkFvtAZWoWUEXGdUTyJprJZBtGdCfbbV6fhr",
  "key31": "3sT2rkgvSZJL6Lm6LvGZi8cy4RkU5T4kwKgoF1bcmTrdGa9tV8kMq6HufNEDgVyXP9KSMggL44fKybBqEdgJXqLj",
  "key32": "3x9DqH1pzRB3obxJK5e4U3uDCWWZguS6Ao3aaMvuxL11dksEEqhYZXbTUEH13436qTzAkEa6L7ZJZodn2NjUhh1E",
  "key33": "652WSXvkUjArofYgGoU7i1HsfFci7oG3jArK6YZPTNt7imC7kHHgdmRk4QKqVUeYeqKDpyeBYJmJia5RDDzFUCs1",
  "key34": "qS31HtLp2NhHWRQGnJbyPMi7jWhKaaSBVrQCxiB9hSTCuzPPfDZpuMDfeAo4G8owpQ3yXbojLcCdqdQSZ9xUxcE",
  "key35": "kLgW6hkEGTbVaTANorkA7imyfe6yuBGDEB8BVnsp62nnvzWo2BrqfPNd2CWW9ey8MF2zMnaiZq65pJtG932PVe7",
  "key36": "2fk9a75u41hshbvx8MLWb25k3jWf7ERJwrjhwgrwRcmQV8JhmhK6w3raE6cu4rQyXRiExcY4KrLKPSjF22JEGmRS",
  "key37": "4VLeZYEzAriDaA2nrAAB7LS2SMc2YqDaoUPEJ12J65oCNrGCHNTzjaoyhBW6t5Wt85SqKGMVQda6FJSMofxSpAVP",
  "key38": "4bXwDLXWaKAe1pAUwR9XgrZnmioRFWeNoAUpnMUw82rU6csxLvqmd6hYVag9CjdbNXPb34TArKR9Tu94M3aQiCrT",
  "key39": "4Ao4iHKw9TciJpsE8kdDrQjaxpENr9BGSRWmagctTtTC8wqbsrzfFWhJZHAY4H79w5JxrJZNT1K1UgTv1WLYEzCb",
  "key40": "3auWbNqHveqngdZS3UByydDafm7B3VHPDBr3GLm2PMRqoL56Mx3N7L3bkweW8ysn4z2cwr17DkjmQdM9FTmnLTgD",
  "key41": "tH5SXqFsYPJSn2fSuGF8tBTFkMt2qUQrGScmivFbm7gS1mBb342Sd9hwM4mRi7QYTSn9wrJdYF3sAvbnn7Puf98",
  "key42": "4J7jnNDnNNAsFEN6KdHYxgy5ETYPUCEb2UK7BR3sUcr21hn7vTMgvMt3kvKcJ67ivEq85xWMY3WgwTXA8Eb5vBq6",
  "key43": "5cYtcxV57ym3jEoa16QCAu7JHzEy4wjcdJRH9Yx5HZ9jpuRnw7JtYRZ6VYB7yr8pmAXHQrWTDzaAz6YDkkLvbqcY",
  "key44": "4ni2ywR7kz5JDCco9m3eK5dtCY6jonhKAWUfCBoGtzRMgkGrWcqqWZByqVzV3ygGFFJsgY6NKD2hUZxcWMQhLz5e",
  "key45": "4uWgWMLLBCtYpDCBCoX8oVFmSFMtxFWo12Z1SYZfVBsowfR6bUShGoDj3Cbjnm8ifsXQKPwMowSFdwRCoQgcc6tB",
  "key46": "4nfXvVG6dMLTN6QSSkHFG4Cq9bbXfiAeX4nUZ4j8jL4NSRm9a52Ze4xWc1eoLPVwqEzbF1PS3cNEGfrVUwqKJ5cR",
  "key47": "3S1u39pfoYtaTR4W8D7h7vfYkZCeboyUesU9Dmsc1NkSGqkwne3AFEqEpfbE9P39wH1VYJVnEnAa8Ao36A2Ccvoa",
  "key48": "4rMc5WwVs9NYfsmHSYkamQSsq1RxUA4CLFCrhpWA56F29BNnv3fPHViV6vEzcfWmnM73YuuXm7a1jJ182Zwvva6f"
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
