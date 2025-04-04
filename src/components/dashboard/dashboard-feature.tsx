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
    "5hj5VtoiCMBirGbQFgxWdd8m1a128obVAcy8Umqna8yrZk72ssyEoGE92ZKUbxTzUX54fPpZV1iT2FFNnwWoAKq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oztfFqJwq33EW2RNyt3devTVZYEaN717Z2ee3N65aFi9dciN8qdphtQ2577gk3mViZszLjQvMfJP5EHQrt7xUEd",
  "key1": "25MmRQmLHDRF8scnMoAaeHoErGduqGmUFyg563SL4nT3A3An5KBuihgwfjnfubHnrPYzXJSLkkQKZ4TGytdbSMwo",
  "key2": "2e79SCTerkP2VtvGwceoJR999LrDg5J598Pj1KUy593rUhiSEvTEqz4upp6wb1MGV3CQoXqFovA2NAVcdLHLE2Vn",
  "key3": "2fPPeDdAac8Yt5S2Cxfahxj5VnGRSrQwxVEgchqNonuwKZTgH22AbQHGnpo864URT3zyJA3hSRamGWuKd1KpM2Yv",
  "key4": "3YcBYyNQBi8QdGimp3M88tGGh1GQkGkcWLuGtLY1hkJT7nBrAhRr3dhNmqALeCbrnHanxFGB2rYdvjDZ7ak5vtad",
  "key5": "3pH5wP55uC28dq6MU73jkxR9vcJGpqJ6BJ5gJFacpUECWveSzt1LqKGhPaJG74jj46QF8H9fQnyK7LgCXKiWo8ns",
  "key6": "3pF4FJAVGa3EukKvCefHqgtEVtYiVYmQPykGvbZgVb7e3xkED8J3wnwSuZ6vfB4deCxA2b2tHY22mCwkq95nDvEs",
  "key7": "5rnvcWJeMKrMhuvX9zocBgVAX7K4rhPEoc9VEBk8wKKnkTP2pzUrz2sMRVGobgG4rnX6LjrRtWw3aoVdNtYpWikF",
  "key8": "ewmm46KyD1oaJR1KgKobDhr9amPvUK5pQHht9VRqPn1tjaa7W8aTTJEVYac4GfeAsuynMFma9dfLmvESH1AePgq",
  "key9": "3Q1zWny2g75giz11WhH22Q4z9taFVH1378ybeo9AXoKnR3bW8Gn1TYud77E62kPh3r1CoxF9iEwUvRKuP2AAaryr",
  "key10": "5H5JWTyj8E1wo1waT5Ju9W3EcGGXj9twULXDNfEcHgXrzp2D7Ly6jdcpUZz5nHthNRAj6pJU48BcU4dpEta1983s",
  "key11": "3zZsVb8EhfZgr8ZxVU3yUspdRyUBeqABW3Z8tzn5JWeuJ9Nw5KrT3ypHdBgrwxxVCwyVVAKWqonGL7FspYJSnNBH",
  "key12": "54feRTHkbWdrLRK5GwpimrAaMSi44Ns25t9tUemYytPJwSBJbmoGUZ1jRiSA37BVRDUWcoFTKFzPo9P2GA2CtCSS",
  "key13": "yVpS6kcFds4BddYVaqAw3N5N8nPAXQMhiJyFR6Tex1ttzkmbDXH3jHRcabhH5uzT4NNcRGxjjuBtk5JckrTqr3J",
  "key14": "5bnuk5zdMcZqVz4huADJbpQgz2wTmWVSkCfoG8zVGpD7BVwjnDMDDhu3KeNg1QUQc5Ns59TtPdrpcTohqYod2SFQ",
  "key15": "53Lsjd6TGyjP3p3jEmeuqom1GieJhAKGF1YpsgK3VCk2DzTaZvkMYuxWP92zH6VGFQGhZuHCuGUS5wGhCwoyNq8u",
  "key16": "o6yuaBdPsnBrmXoRexALbGeBkGd7UtgMVTgzKfwSBBFyoBBmRhnSKGykFLSChUndRH22dfkaXivri8GTgfJR5MU",
  "key17": "36RiLq4Dqe6urGguYyxG2L3hLG1e8w62czJDxeGNBgckeqY7y5Yx9vyGc6vWuyFcoJGW8JwXRhkUXaoCTCudYkoC",
  "key18": "4k7GA8CChGMMuPJvdnPeDday68wXrF6j98EnWn5bSoM3sRhY7igoxqFu5yoH59Wf1HaBrXrFEewVtCPLJjB9nbZz",
  "key19": "2bYP9iCJUYwrZD7fiY82SyWi1pGiNa1F2TZzom5xrSA1fLg5or3fFvCJDAW5HNCZv8ipaUPgPv5h2ULpScZgkkVS",
  "key20": "5ZYv2UGyAQHoorkpoAFqpgbDHusDoRK3D5aLyaUcLa2BVsTwfLNNZu4nRjYnjW9Npd4LmzCJXfJc2x9JSx1obev6",
  "key21": "23v1hD2BstquiLEwhppHUxiWUTMmMNp8Wy65yfHoHontnnerwqZ7VAuG6bDUAdnHhXBHDSocnVzXS9xSRcwYj9cP",
  "key22": "nwSyuZEQZ7Ng2mjou9SiiWGrnmJ12kXcKtJZ9Fh7bQ9N4EbbM272HYC6BgCaxC8AvD1um51BbQ8e7RA5xP4HKTi",
  "key23": "32peCDkrKsZxvznbzDYDNXNaQ6iqdxv1W2FNuqRMkUhP5cwaKnR2eT6ZgjuRPFhLaAJkPwbuw4voAMCCF6ezxQod",
  "key24": "5xGAmo8XCZNToEDueX7PdikhbeNsU9CCDUpaqZ9qE3bHQ54SvnHy8D4ZCsK3E1JVYTWFiheNQC5Wr7n3F7gXx5Xk",
  "key25": "5dgNzB1oZxLJM9u5g77XdtK1bmvaamtBpd93845x3iakUoZntxyEn2Umq47Y4C8BGak9kjjSeEWfPVgpHvZUwAs",
  "key26": "EUL4mMvyEiQgVKSKhoWCTwymFYjWCZX5WExSwW3dTW18huZfzMZTLYkSmDeoiULuFrn9SHbAHw3zAEMibc8ppyj",
  "key27": "5nb6in3n1FACXt2Cc2AwtazYP8YUoA7hu33SdRhoeGGiqVYqLg8ih91XmPat8PPzrMN3Ns7hSQRGficTYTfMxDV7",
  "key28": "3j1oRC1wprMbtECgsNtDg2oiXx1J5zDzzq86tD2VkjDX2kCnqLvUQWMxXwmjDDptLMaUMjnybJxnzKx1kP2owRAh",
  "key29": "znspoo5GDjbuBy9XG9Yr4WTvUeyhnLB97UGDGZfS8zTUQGcLeLUt9XgmZK5cobV1ezo9oJrFpiuPvFHkTpMQCKw",
  "key30": "2gMCS4YE2ccoy3vJeeLyUpZ1gAYz6bsdD4SLGfXcecJowAm87B36kcpcS1vsa7r5e91menA1quAGRfWoCpPZvmaC",
  "key31": "3ZwGnKUMbwY1JNTdwc3avVFSQomzXfcHsvdNsQay3mRDx82vmfFJo9kcATWsFYBt8edbqBjWoZRbvBNqrSPsT9T2",
  "key32": "5mCcqpzBYiJp2hZ8JCtEju7ZJMY6JZoV9fYUoa2PiYLsJYf6gmZ64jpg3emjTdr7uiChoWDsARUvjrGU5G2M9LWN",
  "key33": "5hyPG3Z9c967iCs6WicZg8LLqBWDxjvkv9ToMULN4xA8gsPM2yZG4LGuzxHXbkMC8tBRGcDnQFYwWyZKK9NiJDe8",
  "key34": "57UfAjJZCnrmPCeLHUnxv2gJA1z94qfgiMadZaASMnnkbTnk958vA2hSXMWkuqoRYu6cdJ438ELA5PSsjHDf6nkd",
  "key35": "2Lqg69r1bgxnVPNbsP5ExkEAw1sGnaBQLxsjLXi3PNNxswwhggeYFXNzKypCEUMWdRD4v5XUqn4Lf4ygKx5fhBuz",
  "key36": "2PvpYJiv8cAuE6pHK1Un3HEewTcWMqFvzznjJVpJFvoxUqBhcLUqcDQgRHuzXds1TF8SS73iDWkPVi4RkpRUJ2dy",
  "key37": "2hc7kf8EwEBrqm2WjaYDYymRNp8LG4jUwKq2h8hX67BknnfikGD9C4Ka2mR2ZkHFUBUNaHuQSSeZ8r3bEJbAExwX",
  "key38": "5r84w6vEVac6i1ZGM8ayTpS9rc978YYnNrhxteTmtzVo37hLK7KCdevVJRNV94gztFpNzyZtxdww6HYa7rtiFKZd",
  "key39": "1hfBNPsBZMfm3KQuBqB5dvENQ1JsATnYCKnTEbEDWjUdcKW21mddSbZHKZR54Rot8qbW8rvzRu6E83mffwvoV6r",
  "key40": "5UXwDJAqUbXcKqoddZ18HFA1c9VRWLgmw8mWkLQKyiKCxhnRfeBJJwyxAEKfPekFrKwkrW76oG6RxeD2nthCjVQz",
  "key41": "RAVKV1NgGHSgAhQTWQUiCe3Vea5H8K5tBLZfsC89YggWntyrZHyyZD8vdyQL3thfZbxUjDubN6Rvd44wR6876a4",
  "key42": "2ZTJxwsJBQUheFdzU9cqE16hQTa24jeMjWYN128TaabhRkZqGJ52X3LzsJZCH4eer23Dx8u85Bijom4pMHU8hyMd",
  "key43": "CarPLNTAwP35yrBJwVA3yr3Shu4s3AR3vN95tbrHMLbEd3j9RGvH2xh3DKcgGywjjr4izFkGhZyjUuvVKmw1HvK",
  "key44": "5NjX37GPC8py8ov76sfmTTCmbkuauVziRVKBh4NZKbte7gv3YqfQULCRFYiWSmBTJhocrYXhq9g6i8MogQwx3eq9",
  "key45": "5BxAeB2vV7J4Hvws1xF24Gh8qTGLwXoBmhu36CvakGB6PQH7Fzf8HAakd5QsrZn2iJ3XUs1opRUqkPEYtjYmAPHJ",
  "key46": "5cynMtvst3n8uSYNAqxrLEwqgFSV8pCixRreQ1hkoGqNNXRtvitUzqmuRXUanK1cG2b5ugHJG5q5wtuD1eC2qwHA",
  "key47": "58hc2LhKKgK5FQMy1t5go44d7rTaiBQbd51hPqmYRwQb7NimekEBuvDcgn5JuLqnkCjUsEepBBaLVMXe1GfWRSdS"
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
