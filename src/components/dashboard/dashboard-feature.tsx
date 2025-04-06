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
    "4MAditGNtuTYQVwXVDyHpetehk6WtsxXzu35ttk9Np2WWTesYRZQAKFNqQUpi3s1sRFVL7c46saGvWYaj8twg2cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qV6g1TnRcoCCNDi76VYpeAmQGvrCzVSY1FnAsah5MmTagiDAmA4FeMq4bH7K6FYRD68mBC6VRjYqQWVLnj4u66",
  "key1": "TSVb4dL8i8McuFTdsMNytJhUMdMdQ3UR8bnfouUPRmABPBAkU4wnK3KQjr7A5rbW2RonvzaEinxac9cE6L5xWGq",
  "key2": "UJvaghbmvFMuZ7mvVbUBZRzpSzRzRyD8UJM8UX9wFvKFNfzAk4dNXCST3PAzf4MD5qrxvV2aVmBkHoXLnHGdHZp",
  "key3": "GMQdqLFRF68avaiRqDSkC2i9SnhwiaBUWM9zEtYFMdJByyraivVSqks4K2SMxUL5NYqpdsa8yHz375bBM7KGQNX",
  "key4": "424byrRf9DnETiYS2mwLwsRxaZarq9ygCaHuyrwXGq7Njjdj3G5sbm5hxGJCXWzMWxwoyoqBB1W6qEofVogqkynu",
  "key5": "663oVeijr5wgzMQzMXm1NA4BLtjgiDRmTJJ1MVd2ma9KzJ4NqB1eypSUYJHeLGJk75ZKhdXBpFX7wPhjKqKiztyg",
  "key6": "2Z5SLiZQF7ZAcgtxxqJYmjeM19DSAENyMbALFhnJZx3krehvPV8P6PQckPeCuoYLHHTSTMWF2aR8fJTHBH3pXFu1",
  "key7": "2MUiYHhySP1cWTnAnmyLZXehX9FGuHmD673sPAxhspbQt8MyedUhMPSNz8t2vZ2TMriW3zu1K9m1mQrCTe3mgbf1",
  "key8": "2YQp611M1YqzT17pGC1PEyJySbFZx9z2XChV7ZsuTPA6K7gL2jUre2iVp7gq8YFafTy8NLKPMCnTx1bpHz1zDX3F",
  "key9": "4ERNo6GYFmXdoaoHDE1JcHsufvcAYfzF8JXq4P3ajRYdtotPFwkGcdCdCtP36atPWfjBw7Q9bRcXaJwg3WNPHNzC",
  "key10": "2jKmdfRn3NSJJYd62PDZkYsGvjbJ29SdLyitsqeX9kCGQBZdXowU3kjcmdDonqVqV9MWcoc1CVv7rq3WWF2wpr2j",
  "key11": "MMSKcoZqRE2tJQMABRCZvcTW9nFECoQmsEhHF1zqEYBnzrLcwSjuWp1tRiW7Cm74iffSPSLHPpnHawfTHeQHbH1",
  "key12": "3gdmPfGYVSeHdBGwVTiXhyWt5mEq27p7ePVn7o7HnM2ffCbDsqKVnonzT8KgMuo1vxyGtqSMUEFaQXEHk6HCHT7r",
  "key13": "WzFrgBi9UKoykeWgGcnU7ksKFt7JaAMdNfFUo9toC2Rt2Rzcv4ay3rJopc9p4Kkge8qmNCTT7YNXDSZ9Hjxk5mT",
  "key14": "6Qkr3r1YcB7EZsDLUrNK1F7czgywnNZA8rEkAUEQqY3byC9PYdcgKK5tFv7YBRk9mTYibFBe59FYZMqmj5RiQ39",
  "key15": "4d94YmdX8USNp1ePLaC8C8GGL8aARRkXReouHjQnfQNYn5PGiafBJmHUdhZr9ewWGx7vU6C2WTemkvWraahuGku3",
  "key16": "3kjvuCRZGuGG4NyZXGS5RDVU4oMFdgj2FCbtSeifmeDJc4c2224Co59o15jwJXQwPbzXsfZKezfR1qJL1XfNG58o",
  "key17": "5DH5niWmUJoRC9pLsrEVhwdv9RMnz93EJB88NyshUHUk1DtN5yBh1fhCZ5PzJvJhqHGiqKsWcPtAjCzDFU6bZSfb",
  "key18": "5ZpDGjaUj1rag3AodEcu3kZkCCUGnJRqbeSHSAjKduKNi3SaQcSKzzy89utJvrDmT4AUVSFgU1mPnVFYtsHxpr72",
  "key19": "3WPtpdixTEQBN7owRTELgFtN7YYA9hqx8TbWdhBi2fCfLwKiJufmiuDPSNz7SqqxvYx3LKVrBUGkHuE1hFFyDSV8",
  "key20": "2gwHodWy8YxuwRM2kFP85iyaysBLy2vx5sPgNwcKNpzVgkyngj2EzfYoG9HiaFK6QpBkUm9zFQTAXccKzip2efPC",
  "key21": "vpFGyy2yDjLmT9XiCrtfbj5G5xpLykgtS4xW8YYuKDxD5ndsPnDqQAq95ex3tcenzq6KK6s9e5MpgBbpWxrw945",
  "key22": "2xUZn2d3XF6CNXRa6JiQJPyNJ6M8F62VeahV5hJAD7iXcxt8bHVg6MEgN66uP1To5H6CuuVZQ2A3GNJaFM4j1snm",
  "key23": "24VNe8JgqZbTLPXQqbGRSHKUMaCxVR2FfzEgECCaPmZzcG6gbfPe1hsJgWQJ9e6JZkR74ku8ANumpwukAyUqmk5A",
  "key24": "5hJWKB6EzX511ZYg9gxiK9oTFs3Dwqz9yze7A6bRZznRtvaMTUGQopmKWeeG8tLxwTJ84EaXc6hZR8YTm9faZcQu",
  "key25": "LXAWFHBmrxEF1UDnJjFz6LMui9vpA5Q75b5HUhFYiU6vohBMnK8TyKHeAYyzaZth4JyhUuM4WGnViWt2JcvkYBG",
  "key26": "2JS2fVmZcWcFkKapT9Ei2dBT6Ju3kufaBXenuVee16iR54jf56veqPzjbXbJ9wzTx3eZ7pWcpLbYsKjLrVWtSqee",
  "key27": "YjQA39bQsB5fc3dPH9YwodRBVQyMRgoe2oHuSmcoGgyvNM1TRqwxBzNvgV7nxBKssm58RnTbx9dJPNqnXKycGqs",
  "key28": "5dNTFkLSNti16H2k4ne1zgFyFNtJCc54yyahNXEYCAnC1z9Di41tMLESE39NWWm6X5seEUV3kAMz16yHDEVjdsQq",
  "key29": "2dRDmN2vS9m1nYsJdebYMnG9XYqJXNdKJWAgHnJUMdawXPqcyhM16a6UV1UjhH97y6ChAWm2tJZoJvmdnSqwrmhM",
  "key30": "5gv43pdoZdjUdntH2nYPs7i9s9KWTdVnGUbV6yBP6tqV8r51WGajgyhFmP1WbRxqckhkX3FcbBJfJTkKM5hA5Epe",
  "key31": "26HV2JTMvHKVcjoVYgFgfrAgeHu8e7MjnGRRB41sXwKih9E4ENEbTyq3qBmFCurroBiwSYiUBYVfs5QfqaWko9bW",
  "key32": "4CYcfvXmkajehBho88iaTwscKP7NfZao8dKFoJoPNnVZkQ8KPZNHqd9t3CtDJjFXpvi6CYCFtJJFo6hqPYbgRcAi",
  "key33": "5BV468FWawXTBbtp2xtuhqtaM3jnuY1paaRGfDH9g2ujiFarTX1DoSVaEk3zEjHBRcaQ1Y8Lw4wPJmcN3P6BZSCq",
  "key34": "3sFYTgnDTq1u4TxTTMddBYgsB3x7GdfsV2WXj4U4QBx7zTUjAZuXdWktS82eBwcx3Pxu6APfC78tygGm8yzQgGv9",
  "key35": "4rUqnTqWxSctbUKTRTwD7x3upVXfphMS4ZTT7vaKrg6KCC8BvuBm7psYfF6BLqiehFUPcxG9BmPZGUFuag88eAKC",
  "key36": "4yv2KfGMeL5EmDxRzgSiQY2afHXFqyshABV9jjGjHXvp26erkMXEEKjtCB5GJU91dHdwCmSLwkEqt37RvU1n4sNH",
  "key37": "46nb7kceU57bV8JVQDzvm2xmAbSpARiLjE25QnixUzfdrNSpjcHvvnRUrqvQoy4BhGDC3gS3PxDSwSiBpUfo7pQS",
  "key38": "hRok5Fxdj3gdceRFhqup6L6Xuj9MTKvVSSxnkw94PVKmriwVU2z8nWqeP7XGgumAp2ri2VmeigRfgLoEsRT5MhM"
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
