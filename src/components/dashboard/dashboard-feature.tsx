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
    "2x6JNnJd9F7gbmYA3FtgtbSU3HBY2eqnxuDRjzdoztazqZSAHduD1B8y7YASpobebwf4p5FyG6f4tKA2qgFYmjTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48P8jXsM8UB5Am37wXm7Dumjrkk8t1JuZJPTViZr6v1JaAmae6bndc5wHwiaTLd9ajbSkM4GQDEFrwxGvGxwRA9d",
  "key1": "KDALu7VehvRTeukLdcvshwScabR7noiGMeS9R1yacynC4R4beEAMVU53mdH858PCtvNW98y6kNdyY1NN63m42Rd",
  "key2": "RbZ8gS9xARGsf5nVmYVAjLfaLMjJjcpDxX3Vnc3eM9Knh5LxReEt17gWjFFzXoYHTMUcC8HFv68VFTmPH8FiS7N",
  "key3": "434kEMyL66NCn9bN6xQSby7TeXpspfbySRYeUp4aewxYZoTofrjSH42zNFsoky5fEMi475u2BTudzzLTWM7P2r9",
  "key4": "3HVXjKrSfhx5XVsGKaTU6eGUt7UJNMfiYeHbWquT4uvJw28aTa2cE38w7VwYa6EPJFSGmJQytJZmFGBC9BCBqw81",
  "key5": "5Fxhhu1KmQKdhB6y9th6P18fbpZUb3dCctPyuN3AqJ2ns3iyuG8Tx4Qg9jEjrHi3nqEco8F7Cueejmh53Uc6bVbH",
  "key6": "qy2A8ppfFzpGBpiDhtR2Qzm57BkKQJzV27asGeoYRnrUEzFu8CNfUgWRJUAiLcsFX6zCj9A7BvwEq5w63qdjTpu",
  "key7": "5NK87pGZvLFnNHgWxkaEJ3y2NLg2mcKRq5UBwsYD7tPvVthybk6CMNbqwrjuBG3N9eEvjWH1TftKRMJrdb697FJa",
  "key8": "LN2scvuGAJiNuzsSCmYHmJh6D7RcL7mEkk5WhRz2h64SFBuhDSpoTWKbW5SpQfvLKxtWNLUxDreN1GPq3zQipVY",
  "key9": "3xrWrJGVinsaWN1FhXTwwv1HNC8qLR7ZmdF5DEDRshC3HQt8tKkfPhNTruz9SZFX5FDyM5Dq6fzaV9sw5K1pXKoR",
  "key10": "wgcCSwBdVFXsva4kcYH44AC3CUZbBar5zwv89ZGRSpSwrfsDaBrqtTnZXEML9fbTCu4BRaHgxtYsfQxF41PSUYb",
  "key11": "3us7TFWyUJGUsxZanKQ9tFaLXEFEntd3wirT6Vn3QeMreCwB9o9cHRbxnK5qdhHgmwdNUrk96DLHGZaSu2FSRHrN",
  "key12": "2TiEQwbGtvYV3h5QCiziJYGRXgrWTKNcg2iggwbSVZmgtjYWzZa4b5HEkajoxFRkWtnKTtmjVY7bBxerHjgc7Ea7",
  "key13": "46YyEU577Q2ZnVw3SwK31dgopggowdyyWVMQVY9dGQYNbC5GisksnCr7FL45HGmfxVooNURioPYZ2J8xLwkX2EVf",
  "key14": "44gBWyjX2Sg2tTaZYMgWMRvRobUcDZXufLVcAucYBPSjUJqFE9oQYA6mmWT7y49XG6TXqiAgLpzxPxPwNDYEgqeJ",
  "key15": "289qBkVovqLAVvSzqN5zP42ZujnYMKcT92KtfdaqnHiiZoz76jRCjVXaFVmzGXyrFNAJGLh9Tc28JdDpfWVim335",
  "key16": "KbNs56M5JedChuGPFNq72niVSriA3SfQQ9U1L9jJvLUad9ciQH3wtuaCZUVyRGL4w6gaB1cg892ZjW1oHQGfSeQ",
  "key17": "3RujviYNFiCYisCtYxPNuXGnBck6YUDfTz9hKiFnFPevh67XiZMFhp9UsVsU7TVc6xGfR5uRp5T7czvFLGagixDJ",
  "key18": "4emLALDRTRFJTBRr4D9czaUBWniszhvpimZwBURh7JPSHYcDZrkxPRKpoGyyVsbTYoQoV5jB16c24jZyibGB2jy1",
  "key19": "2piLhH9t1GtBajgxSsESpYfoDokSuZZg58RL7JNcqKTbDE8JeBjiNRSuxXBCJTUCwvoKGNPkXKLvhztkQZCfZ2C9",
  "key20": "3qMzN2oMjYwSZy52oTA2FJqMzZMPANdvFoJimzEvRsWGQqNT3hgux6icrkF5uJifknDSUDqtEypz5jTX7avvw5QE",
  "key21": "3vbtbjVsfZcCHPbd1UFYoSBcX5YXSkiZXxzHqVgGB8kEF9UYYxqkRAFKq33dWAj5JSD3GiF7SGc7ujsKc1Du6S4T",
  "key22": "5xNmND1J4s73AnqYT87Fgn32paoy3Rybqp31U6WvStPu6SZy3hWpb3Z5BugRaW1uU5Vxoz854bos9hdtZMMSgnR5",
  "key23": "125QyitN6VMQ3YfSMCsuFHVhzGwa1f3xnCax6yeZwJngpoXbqpeqzULzsop8QrqzbMXHjEFPXwQAQMtt3gUFnCbv",
  "key24": "4RzSMiWo5Yt5xCkyBrgdtgr23CC36gUpszBNj6fDvV5dTgDGPmVKU1dcWDpCf25u3Fd79CMUqkFpAttwYRfVf5e8",
  "key25": "3SHDsXjQfyhy4CXj3Cb5WLPdpd16qDhaTCncPq1XAJzrHh3HUm8BfcAMWoCGgzWgubVUNeGzpm94KSUuvfuiqgfV",
  "key26": "3RL34sB7QFGfpkBqB7FDYLPKQRJxdpdtgAjtq2LZt9nBYEhrGaVBcyAVEviU8hfFt1mwDH4kDbdyJfDnU1doigNa",
  "key27": "3MQCatTFxQ9fYjTzRSVaLtQXfiMWNAbTHQ9DyRQsQADQncxuyiWPtwoyFMuGkJY6ddE9QktLJk87B8fjgrzrwBrK",
  "key28": "kzzT4eoAXoN4vKrK7QcrF6Ai7z1Zw8du42NCqmVMrbLyVZxn9uj4uvUb5nncuoezcXxgWCd9yfiqdKr2m8qVTJx",
  "key29": "5tWCLKzyGpbTUmwqCeEP3pn7gci29nNFh48JojbvQH1S7Z8uiucqSUAG9onvGm96PVJgijEqX4nJhCwPxcMJvXWK",
  "key30": "4x4couGQjhzF3vWCaca5keyz1EYXwhCroAmz32gQ4bbNGtZvUaUkSLoU6zMVpMiA8sL7qvhJqXTqjY5Vah442UHq",
  "key31": "3MpqB1AADgqu4XSCppdn9GkWkpvSXUeMxqHXFzdGYp5exXwX4GvJsWqUjiBXLUs3mj8Rxfc51EKuwjKr7AggNTu7",
  "key32": "5kkkAcKkRRogQ53DoRddf1wPNjorUueNcAtqxExX1kSXRWh4QCLHgx9NxpKePTe2Pzu2xzNNswJwjwn2ZzuRiDV1",
  "key33": "eJBdvwx7M19zA7Dzm2AmZK9gYtzN5Y8q9X6Gq9eLwusSjN1BvWu7dkVRDcN789JjmG4dnZ1dM2btHW9anqgY1AV",
  "key34": "3F48hRNK1eU1W6qWSdLTbDXWWb8bixczyMCBJ9KMEnMtYMbbkEPrwVowWZD9xUYLooYepTZeSD2ZLKnDpoMXGuac",
  "key35": "3NKsHNKkTxtHMxoU7RemJSEy2B7MacEszD4iVcTrxVgLRMVNpY5xMcUWtRFsPMES8Sym4FZ39EKbvfmWXYFjLLEr",
  "key36": "3EqCYmSvLWuTVk2mjC6eKcefC3zz6BVQKeRRbzAfiu5VzVLEHW1ZDMZ7T3RZkduEXWep1CLVDjybgU6JoEHBcVzX",
  "key37": "AS1T1a3fmU5dUAs1xFFdARkww8ESRT7HdLbuiRZBQZqNu47PW93XCoVmA9VVxnzksAtwt792imPw1hVeuptHRfW"
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
