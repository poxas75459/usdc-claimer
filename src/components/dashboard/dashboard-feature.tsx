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
    "4Fp7GLdG83cFPomo8Az9YDdL241LF3JWPHXEtntRi2cfjyebXWtHip624wneUscJW82ipYWqeLPHanCySsCSL1Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yvgJT6NQDUU2qdAeQH9V22pofiqFz2HBkjYs1ex4UBwf37qiUpujHVCuauqm8LnE8UpAa1uX7WsmR8tVV6ZtLdw",
  "key1": "5YhEPGEfZQLfCaL2iVhrQvTdXoQb46mLmUuYYWQz4uaEc8WbbxWGL4eQFgu4Pdtv7LUfijdDB7RkHTYAw9Wp2fCe",
  "key2": "4AYKLzJjiKwciBcKAqYVHtLCQSJrYDiyvASeaFF9N7dgaM49tB11pjRUXt97k6GozDsdhw6facxcHMZxEkAKNntc",
  "key3": "3pcoSkiiTwPKMpAL36u8XgRyRqeFwLTv2zty5RNFCEXicKGy2zkZtCoU4yJQKvxQBYrk8iFSGfhh9zbJt5xG2XUQ",
  "key4": "4ZtBUK42RVwxh5ywQ6v5hnfaZPh6SaTJQVZdY2q5oTzTL9aTNCWSjMMiZqXy6BmSoq4BySdkvHiDjwcDizCKewHV",
  "key5": "5ecyWzcvYxoqeTHG2usYcxn1PPxYX58dYGUdfS8S1ATqDUXojNE3JPhKn29bmjud4ZPeLTcS92ArNiyeLc6kBep",
  "key6": "3QNokn7eRQJvdr7EeF7rocy71yfpJmcCfB3mcWx6k8XM1zd6oB6rm1dHcUqLB7yM4CTgGrdhG4DWuJVt98K4fzey",
  "key7": "4f9yxEmYMJza8GovbY1NWmrX94hXrYUhjZPdSGo1TQkDUuvowmU6dsqeXT4nDgj6Mz1pJ987zMRTrzjWENyajpoy",
  "key8": "8m4qxgoLGrpy4twZth32RVUDGbsWwhwwyCq4ENu2Sv1C9RnuZrJYKhdV5UfC1iud2ATqvicYkDRtB4RSX2nBWou",
  "key9": "tqoAYW8vsdifAZwsxvLyTTrFh1h7gvf6hdzGtzVK2ttcfEcGDPSno77as7qTyS7WM7xR2wHVHZDBohVWYshfF8R",
  "key10": "3bKE3LctAKV2gDk2fhWQmNo56WsoHtZn51zL7isJAJ2FpxPARoa1bqndXVEbVE4bFjKLX5RNmGsvNtXvGKhTxsPy",
  "key11": "5jeewmDRc58wZ6qBqrTjRVscuteNoERRQoN8qmcP8DJw2UUC4GNwouq7pYxQA6EXvFNoYFvCLTwAGAkfuiC7bRpR",
  "key12": "ZhynU7kC43dEqCHMYNitckp4gd1dQhPA8viYYcjH3Jr8AS3aWnrbsvz2wL7qbL5L4J7HP7445gcfZs8WoDhsTyF",
  "key13": "zvb9sDvVL1ZDNk6FVo6VX87RevGkfSXT5jYtQyur7wgBaLFG6Nd8PPaSnmSJi5HnSWQJJrB368fpUKx3PQQEGjd",
  "key14": "53H3xMkG1ZoBK17P7tziVdw6NAosPhQTTUMHDRQzybTet23yQybTReWWo1vi6SjivAoPzs6m9e7442KFrn2jSU4K",
  "key15": "ZbyN7mxj7drhRSeAHJ3GRQ7v9rTKCLrykx5CMnsgboMQMsiEScSvb28AB4nGZQKSsuFzhgrUHBMPQxNvA7KUV75",
  "key16": "4xEqVWjxDho65ab5KgVA3zpsUtcZPA6j3tYsGaW8V2nDZiQ6S391UmBU7SQE2uo5wVgAyQdtQDcgdz2263tsfRLN",
  "key17": "37T7ykkJKKxUMJH6EQ8UoFrBFkm88WtAzdgxanUia6QCdc3dM51RLGMHc1bLhv9HRsgkHpSFgsi5NXnudR8THcXy",
  "key18": "4UVvBqAJuVGbPQJYFCx2ivo4GNYM5Mf7WUY7X6ZLLRyGzXwcEUsmVk42DiV7u1oTD89VqksRcvVARFwqMNJC1Fnr",
  "key19": "5LEL8FwCKJGz4NdzvgvxtuEnhkeUVUFfs6aKufEbbxnEuuoW9Ym6Lg7f4aaEkSQL65B979UWjAdEyfCxeaWJTPhy",
  "key20": "4ammGxu4gEc336cRqgtSwGk8MGHvVec5avyjSNgWpLwFABsEKn7EjmaZTkgAinBE8PBL19EJvoFseudp1w55Uoem",
  "key21": "4TWMqT7aXK3ePBcGWDMcmurD8qNeW6JevQDMa1b5azLUjCpF5ZsvQp9WHt2xHqiZuUjRXgTLMdTHVnLff4871h5f",
  "key22": "4SZyYvA4dChbSExGJo2rNUpYChw6T8Fi8esKi6CcTWkJppdFNyvtQJyQf8WFfymkDWTKWDjMM4NLBGPBtVR5Gkgw",
  "key23": "5digQCWknuxybVqSGa2qgnwmLKEX6zF2SS1pkHcQNJsD8Dr3NBkcK8uvD7dPutgRUNiVdgvqahVL7bgoStK6pKtM",
  "key24": "WRLtbow2GTTdjg2MAuCPrHgD9jsyo3RhirK8tQk2gNQ2FvGDjzFp4vwR62d9qNYieNwQ1bmxUooyzewdeqBha1T",
  "key25": "2gHwxTLrxmqNYcngEQ96qjRLiocWuh5HgBe71H7aroE7TmjjzqWHrf6P1f3BDHR794WXVfT8QzJWCekQznMvswzt",
  "key26": "4WCTk5sKWZvRYcwmSnfqxr3oQMdZrZnEMy29hQ2a2Kq2d8TpSF3juCtaMBDP2DmMbvmxDrwB6aPtcfPdwfnGY3mU",
  "key27": "5bvLw6TfvJmTWap2xYQkqdpdanQ1TmuKsMqj7XXUxnsuKPs3HnakKdM7xcskKSfbi2YCQqgRtuNBLEpG5VukYkFX",
  "key28": "3HEmW4ScQCok3wqCcH9MEdroiqHkTPaLNPYC6Cjynh7Cs2aJrfs1s6n3CsJBfPK4q2ewkwneYTLFo9tbzMjHC2Zf",
  "key29": "4Si2UdsSVm63tKS6x2gTubF887PzAYYvd9CbACkPJZx3e5Kx1oPKY9Lsbcf1V5A6SnjQf9vBQziKaagyN6ato8HU",
  "key30": "5gfWFPW8ds7zibhwMfPLaAD2F7YkfiD9d9fWNsT7qC9tAjbY8E8fURLtZeyA1akKMCaXf6ngK4UQ2XC8ynxeBwgS",
  "key31": "4weeAghU3egADzNrmSoya8VuripY8SoWUSQxQT4eLGgRXAeAVMXDLYf4QxBPM6nGtcwkVkRc2jNBQ3Y3S2R9GPoR",
  "key32": "3BvU86bGYTwEttMqXWHRT4wq8qWoyGHcd1SrXn2optkiZxj6u7gVcpRNe1oA29XgbUDSuZQWXn27PPf7a7XYt4KH",
  "key33": "2rRmqaDCDK5AxWBk4FsxsVKCKyr16xudnk4ivmXsrRxrZhotGeaS8UdVZect6dJKbXQZS46Cny353nC1NajtDWkm",
  "key34": "ZqXQpC6ay4K4EjcQDKJmwXZMLHqhjdoQEguVfeEHN3jgoRUuzJPxhiDqytgaf7BfbojBUAtR7G9T7EdaTLktFFY",
  "key35": "4uCvTDUZyrV4a8RRaYyZgdV9EiSRFkhpQvwLpe8nwQhX154f4FHRnnZpuGNgYkdPN4ZYxCj1VCgHcKPAZC1TMK3H",
  "key36": "3LkwKmu9KkdGSZv3bJSXXLCenNJKJWGUY6Lem1SPkWnAMJDYbUW8nQkig6qG6SK6QSLHTBtd4iS7TXWVSeksmnLe",
  "key37": "2SGU8CJ8kMmnd9j1kXwx3RX8MuXh8Mz3iBax46iKS7pGUM9EKy79ffwg43QYVzSkihkPurEdGKQZdf6i3EPAg2hQ",
  "key38": "4K95s5qAMBwCJumETZZ4i7UXvpKfq4xBa5yxZQxyAge7zocWQpzx5GAq3qMoprkxjjjE2Bq7W7aUvjaX65wAneus",
  "key39": "5bJDRsrdjMy3N1Qvd58WAau73PbZb3sGByGvzDau3znqAHFT1fnrPQbxCJYEQSxzKJUJPURPfVoHkpC6RjACdjW9",
  "key40": "2SFBYiZKFXxPrucBphxBeo5drcX3bBGnQN5dvGSPFD7MMkGi8rhz8YMXuhAowg1amebjvUbJecGYPRkheq8DAQ5S",
  "key41": "2ciSGTPpYohw1ZnkJ9H8oSBcvG751KQZwJyCLcNcy5wNZy3t3SrpJuEk4TSYmvSUP6VqZZj6pMveKzEg19jAsRci",
  "key42": "2VmnPYroL9zZfS97Ytpt4noDX2azQqcoKvAdkfUR148u7AjmZ9cr79HRzQDQBme4As1Q7Dpirfbs4ZbjAfA71vDw",
  "key43": "5EsXPJzhdpGzAo2UVxCcc6EXXUpGEe3XRZwJBiXtRhqayuc3rzmLyspeEjWDzTjJ3Jvso2Z2BhRWzy7KG9w2jJBW",
  "key44": "4y6ZxxZFp4MwKGKYFoH7vTFg9QLSRzV6LXmpuJsjUoyoLoVj715diGsECZaVUajhrpZuy3nqxAUdnJJ9pND8xruc"
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
