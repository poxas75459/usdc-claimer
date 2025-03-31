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
    "5wnqXaMKKAdh6FZpA2hQma4xKpzvtmJXAaaGKsD5vGqdNNTEcuZk4kwAo9PaKFYjqHoU5nfaxKeXxwBrWbvtdpNM"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5XPEdTPaTDJZTKSPpNj9bVnYZL8ZHJWwJ8hvSntCkwZvyYu4N87NmGbK3UDW337KNAkuqFWxQ6QBG4n3wq2kqpem",
  "decoyKey1": "3XiTJbomGA3gbar6s9KJoJjsF3bBHDufE9KtSNkDN2tyqyXwaPi1tCbDcTd5B4e4v6UDsD1Z8qDxCkTNzx8XYqA1",
  "decoyKey2": "5ahrTtExi4hznNA8uTL3LQzN5VmNNNVyVFtVywjy7brcaMQFxuLKXT5a1UKY1vL83eEEYfMcsJZmsdCKngtg2RjL",
  "decoyKey3": "5GbMUHsyr5Vj5RnvkoEsf5Wd5vKiquCSLbLdzzhAe1E7pZp6ifnZMVWH9ZdST3bQmuku1y4XvYR3KKNq1Fug8GRJ",
  "decoyKey4": "3Xubha43q3caRX2xMzsrVxBkHpewr3kUyyEgoAz7h22u3gfTZd835EU6uYR86TDkXkG2VwisKTax8D4XGdRJoX4e",
  "decoyKey5": "55HSgzz46wFkS58RaQJ5T2oz4xTqWnuA93NUgP7eS22AfWui29LQaCZGmjMZ58jL1mvH9ZK83pC9UCqyGXbyMRcd",
  "decoyKey6": "2wonvhmwX1vvP88qUEhQGAbRm1qJJngC8vX55cFnjBWSPkenGEqSpVKyaMxSQ39qg5PEKtjCQWiWsDxLQJ9F1g1b",
  "decoyKey7": "2W3L7RqVQBUc8AR1kbWnoj7F8kVGHqjk7akzwSVyav3SxnPHAwk2EACtfFRYyGAyMYsvCwmdGUXtu6RXG5TQwUjG",
  "decoyKey8": "5djmUA8eLqei8jPnwoUCva2R8N9jrRQo1CxgarM4q5AVNb2mdk8JnYNYHvrb9bDm596kGFsuE9gsHxcmExhZD61x",
  "decoyKey9": "31iwGp2REZb29HX6MNqjEDjvKbyiS4jCtTepbp1LU4edWPavyVBnm2g882BiobSjJGU2NQBvCxJ9GSi59WE2uqzU",
  "decoyKey10": "4JhAGKMcK9oyHpxdLncQrTXwdUGwTUYpp4RfTvBQwLgsn9zLqUosg8jSiYoMhGbpf4ryCa15uy5SxdA12v2zTqCY",
  "decoyKey11": "3q67bmaUWE3A2x5otkvm54WaBN3R8xujMVuqLn3u7yj68mLGWmp6tgDzbH4qQeKNfc3DZ4wtrziZ8jxeQmqczCLz",
  "decoyKey12": "n5SBFftWgckDrSZrxjeFFUej9oePo6NiyqKrWjpjEXwTtdbAb9gzecdqJ8XE4nMim9kxTQzVzfP9vZBS8DxomDv",
  "decoyKey13": "38njtcM3KKpBzws2LiGYfByVW2mA7ynnh6vrbGyQtuC7LMqwzosymcv5z9uC9wDJjKEoEmGfj1Bvjg4Q6muNvt65",
  "decoyKey14": "4Q4FjyYDBHAC8YjGvLRJRN17xT2TNi5eAQTH6Q84XMBEHpG9gNqkq7MkE21MSStZm7BZb8r29bTeB84UAtYn842Y",
  "decoyKey15": "WWVyKGKMGnap4VH19ahCXUnQgmVtqTnx3bY64UZUAa1BXnsgpVQpvwYcQMsDtSjvttvCAUrA2PbGptJQZftV7mu",
  "decoyKey16": "4M1gS21ZWF38oWSbDKwwjgkLf58Gc1D9hs1DP2fRuFPVZirXYmDEPoEiWVWKiihgE67qQ8wyNws5g5f2s9ofbwqg",
  "decoyKey17": "3jAdHF4159kmh456rRc8WvvQjZpQ8FV35vr79p1DsJQTTq3fyYJgX5YHr2U83Lvf1XVcSCsFQsvRj1e9A8Ed8tzZ",
  "decoyKey18": "2JoB44r9nT8MLX6wqC1hYDYoichFHrTVZge4n2uZZmrao7osH7Cq2Jg27LnLa2JUBFxB6ESmUrZi6AvfiipByHkj",
  "decoyKey19": "5wYQZ38PBsEjKurVKWA8Pymvkfgo8xRUCb1pFFM6RPdPFkQfvQwTmH1ojdkqThwsrutBvxmAJSXHGVHfkpG9YkFD",
  "decoyKey20": "3R1bSxEh3wGHZ9vCxSMP32W5XzdSUsrkjhKqyBvd1MCmB8Qx2W1fVtb2kyhgZwEK5WtCTeXtyF9P978y7iW8uAa6",
  "decoyKey21": "2vHQoErGVjSZmiJfLdLibUjyG5fCYW911P2bkxXD7CejneDp6JffLnnJxqAvdYDdNJcUfbBei8KmbrT642tLXPFh",
  "decoyKey22": "3kR3riQ7XSQw4whYnFCJU3FTuErsispBuWFFVRBFF4wxdNqGF97mL1pT3FwGQGAjNomAmEMB3a8Q7yxvCuzyi6SY",
  "decoyKey23": "pJEdKSTnHQJMgzH66MLJkLCGgztbKu8VwM35NEShxd9qWrGd4B7FH1us9n8pcyL58qaaerqgAGxkziw6bx8noSb",
  "decoyKey24": "4Pavo3VtbfaCVKqWe1y3rErCo256JZ4H1X9szQJDMknPxR87LmHFCFNdTiYzBBcFYG2YEP1mhFvryVnEDoq8FGED",
  "decoyKey25": "2W2keoA4mM6QTaVwLHHWrn6eWy3fxuF8zR2si4PJaNi2iv6tYnHfRsdDUodVk3dFprmC2ujeLb3WSU4zKA66d3rv",
  "decoyKey26": "3jwB1hwJ2ogAPKqZLwUc1zRr6T93fzJ6NJC4jm8BmKARw3hov3FMAyzoSKPP3zwRcoHH89iSXqn9tfbJ5sVsUh6V",
  "decoyKey27": "4LFLRBkVecE76S1nE7oJMf1FPTRqvbBoR9YATdmth74CqXTyza5L5vJAFw1SgwtYGFcFG3Jqk4Q4TtgNEV8npYV2",
  "decoyKey28": "K1N6nybZGBcyNMpkhnnaZaxUjaaonurzHB7AiWm4GkDtovCZtHokg6efyvRxoQusNgXY3tNqBrrpsCg2uoNtMLM",
  "decoyKey29": "5pPeugYp3ZeYDAj9vqs5w81qz88XNGHEeTsgKg4wSTfJUk6XNXvEmHL19Ys2wrfXss7MvmECL2WqFPBHWjNvZrmv",
  "decoyKey30": "5zRZn6fZUyfdh1tgqj2WEgky5jmYi3AnZFkopsZt6mYz6mo1J6jzDxGZW4npaZLHaaisTyRZNzs8rhUqJATMpHbS",
  "decoyKey31": "4bVWewN2r3EXEUFQ74nj4Jk4PD9fVNKX85tSuaem1gZqhetthtTFH8njATG7nMTCKUHJx23sFu6REGEF7NT77SWH"
};
// DECOY_KEYS_END
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