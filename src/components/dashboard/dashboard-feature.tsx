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
    "4ihmLBkAq6Wgqbbo6GjxaCNrpyPBS2G388vJgJvVtXfCw5e19AaBAnfrMLtRzB3cdSSkNm5ttrJqkmoHkJzDNRuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzSC7otnL9QXoyQk4ivrSJpoVRCuwJRo4Q6whjDPx4JpgtUNeLSwETeTwTkCwBhHhemrecKgPuPmqWQM1Zup5Zw",
  "key1": "5mYG6BYwCFT9sTNMuJUhrTYoPx8myHKKYecbCSHYE5Es3i9uLK13J8Z4FPBveAxuae58aWnZzvDaZjhJ9Cy34DAu",
  "key2": "4f6LP3TxQmC83e2hTb18cNYosAE3TNmz3pXN9uWQU3tkAXbPkcPSnbXVDL4wTzNW2e43SwnLTNdg5i57V6CnmQ2d",
  "key3": "4AcQkAjh25Fv41Z92sWZudhw7zmpwLR3uVBs8jmwGi7ih22Xf7hAwJKk1iPk5TX4Ueyfb3YwBtTns5cKpjkHGcjz",
  "key4": "5eGz7FeCH1nGSeNWY548N89qhUQwE9mirD4CbbNwMf3aSQTV44eFdEh8C5UD3mJESh3dMya1HTx9EERTF1axC2tZ",
  "key5": "5q5prbA8UWtkf7HVL4cD6zyR1JyE68tC6XE3FBPjbRQmv6Joy3GmNTqxxy6qqjMCYGrP8f5exg3kPtgAin2WnuDG",
  "key6": "35YLtW2T6V8C3aBK8xYonpQGWbn7zTXV4F4CC7safFFL2ptD5EtcTtSnkpAgqJvfEB45HWVyeuPN2ZYR33bZ5DMe",
  "key7": "2rEZuP4QbFgFYbVXGBQw6SHMJGE9Lf4yVcbpYyAin3WSBuwh87murXcV5r73MPt8FLT6A26vwGNZBswb1yWwXGLZ",
  "key8": "48q5KV82pSNNogSNru8g2J6gwhs2AwDdz3XuqqrvD3DsJWm4Du1t3qhzc1oQMTsXGDWEEeGB1uM1wZ5kf1Jikkaa",
  "key9": "2U3DiaUU2THbkFVPAFPfke2JNQVEpWiGUYNMYnoHcjGBCHMxEbSUdkioAjLjcLFJiN7EbW4g2HVXB3Us7im7QpvT",
  "key10": "33GgcDvFXs3c1xnHh53xfwcUcibBaxx2p2QzqfQfAUbNdS8ZWyBpYX1ZKEYAhtkWbXnLc2FRA7kjD9tmk6RVi8LZ",
  "key11": "5jsV9bPVtt3ECjRwFhrRJxfEEmjR4jEQCjfm5Nh3mXBdW26SyycRkji5g5DJWMZKGQ52SGwRsoSii8LsCDXUUijS",
  "key12": "46rhYLP6zucnnNpDvRk5TSaxRCqwhxm8AW8J3vudXZgeTWnUvsp7LZmWsj14y3ShnEFcFoY65xN5ApxuPmCxNqxi",
  "key13": "4L9sAoyu55S6sBkMpFwqcvf7gEgTm4NcZ88gB4t4Gm7RF1MvucjkjerdwuZRvrTptDuaRkqR1yWCQdsqs957vMWN",
  "key14": "58FtpjF4F9oVEHXKCYxDnLWjACPpQhnCWD16dsh2GunfcgosC6okoJGtoSg6yVSWyZQXcVBLWKemoiuRLJQQpyR7",
  "key15": "2XRRd1MTwoQuLCK389gJmnhh7mk7nRguhbpzrmFAMhJr3mKqF1AkkeuAPXMnPfV1z6R5d6Lkf5rNbRVnoUTqg893",
  "key16": "53MtVewmQuqxMqtbjc1PECFt1KhMLVfmNYMWH1yiabe9wsAUU6Zt7Pk5qMQuM2KWsD1hSXLc6pyWsSPxyVXyiQ8q",
  "key17": "pnmF43U9goQctd5fuz8voV2G1oZ2BANwsW1XKBmzmXUDWZGoyGnA1ikfjRzRqxJNVorDP8ZuN47CDU9FWSobM6b",
  "key18": "5ZXQqAtp5s1TgcLxSEtiT9voLM7CWCd8Zaq1hkv31UEhZ4RgsgdDeSHvZYNr8CXE44VDmtuwr4c247DNa6ACkVkP",
  "key19": "2mHjxUXzfnGzmC8cS7hGztbVKDVLEWCuEGo69hr4zMNE3qNknht7SueXNE95Nm2VDKmhybcWMKxx8XBk9CqN9VvD",
  "key20": "3w3UzQgjMzKYyRZUTYhSVrpgYrqGnFhMRRsyhZciGp6FB1W9bmyBykdLFGip372TbBXcQFsB7JrshYWunrbVMB66",
  "key21": "5xDrAtNAziUyG7q8p62ZHDBq6VgXS4mTRnK7sTfgU9pd6raZLCq7Nchdx7ch5QGdC1oDQLn8okPuVsjZkvZV7jgr",
  "key22": "3uL7P9VYeMXxvWQzsDSu52DVTgufHvyMJoBr5uE62kG8Vja4oRtYKqTKUjp7Rn41Cmbb6qL93qDxrRBV4dWEjpZ1",
  "key23": "4sR1VginxMYMoKchvcEhvpif12Va21aiJuJrWjSq3qUYw8qZQtDuaKDmj2uWrnK9JEKVmjgiRtqXtx988HoUKkYf",
  "key24": "37zwwomNUDSeBB6fuVZ56hxPpFLFLwrC5NXFzC3jtvUYuEyydb3Gf4cNAWAFoCQmankNfqbdmbu3ntB4p2qJXhRs",
  "key25": "22gQchf9gL9HnBdhX6wvJrwsYeYFJPB6coNssPfqCuTsUrNyZk5eEutEpj68wqvGUHYx2JdKqn8pdW23Tt6t2hto",
  "key26": "gaRVki2wGPEyF1J5azckT2khUKePWj4rAYVw9vbJkdRXt14zpRkxhMCV1RYUfkYx4KWa7RKCrdhB7jXg9bph7w8",
  "key27": "3Kcq9kMpBdHmEAWTQNN8ksSXXDHw1ob3KLoXxLJQrGvPgCB4eSYSyMTuon4hi1pf25SWuWnhY7b6KwkJAWd79Puq",
  "key28": "2XwE9cixo1tHPhHQY9Eki9qR5d5szvcFewrHZJu8asvjQZ5ugo11vtYtXrp3YoaXvqrd5rvGMPxk1fcBuoA2ya1f",
  "key29": "4psLCTVprDcU29wp2rkXukzVodhEsn8u2S9Kc32m1a9dK1LLM4QJnDjb6EGVRCy3522rv6t5kozT8CsYj4kVsyA5",
  "key30": "5V42AxVt7tzzaJr45svXH4WFBAXbyeAr3jRCPiRySZAoynoW9qg6vzYarhYZFW1SgVCPEsrrCoPe8H74TiptTi5A"
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
