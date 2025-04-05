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
    "3AbmMyzFqKBNiWa7oKgqRG6BnQ5yj6H5P8x8Bo4joTwJ2nZ1zbwxLQfb9icgCZYRtT2GUouSNsjYk8omMJf5T3mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BPab1KHtVnud2FVhW7sbMvSBrzCXuNXm3re5yWSnpTHTnkz9gWuammy8oHZZpHFLnPx5iZYvzQxw25WMWMJ5xjD",
  "key1": "2GSHbFekAEc9tcfojbCU45fUzYfcZ4oA7AYGc3bVNAXbz11uzUzQDndjTE75ZN4fGt35SggzR8aZ7EX7HaBi2DEV",
  "key2": "5EGNyVLXbe8PApmEjYxoC1rzpgJJ4HGK9TWFviDMUEXjmbj6ecPjzyYtGKGFrFYsbuqJ9XBbCkQ34FjmUZsKdLu2",
  "key3": "2BeUrSpyETE1RhL6BdixYk7xMPxJUQeT64DH9Z1KpJPhQvTCjMsEWx5aeVCz6J7oKSrYaPu5uma6UTLimu2FquHE",
  "key4": "5GbvpMaQ2TVv91RGWTSm9HMKwYrw6rw8PSUPFmGwQixPuviyhxg4E2WoD7H95iUSLaEup1Sqmwddh2cn5sbx9FrW",
  "key5": "4Bu6xZL8ffHeKRTKFAreBcUBDSB9Mf5odyRkY4GrLiupjHAnvJ4313nQdfUSoEWBrUG3hji7Y2isNfZbVDTd1V8j",
  "key6": "HPFJ8Y2Y3qBJc6SeME4ZzaYm3JQTFGnGee1t3kBXWmFxBUf2pKFkeEUR6CsRQiHcQUsL1gdENfYMj86FsQWAeTn",
  "key7": "49VaYXV2Mo2uYxqv74rgQY1NiJxLAWtmzDfCJLRRGMYTMNj4jG2WE59SMSVeTUDn4kgF57euGo7u5H5UumkL2q4o",
  "key8": "5XAmBzsoAT5cit2ZCt7HGLXaoagGPG4oc9wW24VWccrKWXQhRrceWrNYhXvVXMFGgJkz1Tdqdbqsv4NkDJf3jFER",
  "key9": "2gG2kE7aZst1nHW1bhLCmDkcUaHZqiK8SKre9fheAVck15q6iQMEy1s8nhvzj9yqLVdJWZMvmTTrMU4GA22u4aBR",
  "key10": "5dPkaUdHdiSbAt1AFL3WNMEi3389WmgG2XU4dKsFQbznNCfJ5iaa1mza7paRyHV6ZvdsuHpJWL5eFTYnmMrPWXet",
  "key11": "4x1nKdQK1cHtXgjcZuW317cdphHWM1w9TcJCGNSNwRkqE626Vn8h6m1TW24k98mtd7W54MCMV7cNaEbykEEBmZtS",
  "key12": "8WyZnpRMAorzRFiexeRKhTzjsJxo8qXA6u8sGesWTz2k2mZq4v12yCMpba7ZaTzypGnR8z3vESWXFB1Dx37a5vL",
  "key13": "59FgXLEK7zULN5siAZNgjKYMDkFKznnR3V4ZbfAw2PMpQgQhv6tuRzgc6uegBMEVCHFaYzSqHrDMY9uTCQ5s8vmC",
  "key14": "5P8BmkmswFRQaPuNGknc1g7FDF3wnsxjaxvdSyTBMQeeTanVQA58u7TBFvCbsmNJruqq1REp9ak197m8C5mD14C1",
  "key15": "3TGttVVyYgh5LnnvwJ7rDz8FMN6EJRLqKQXjiyFQTG96GMGeQzSC44FMYQUT3MsBCQdthQoNUKKpK8vkTHY5QjDM",
  "key16": "3bKaPJxogp18Q8sMWLiVCz6GZK41TGkZSET9r1g4t5UGMvf8uDP2Wy3SCKfbgM8BTiUD2uwcKjZkQ5pdNVBsx467",
  "key17": "3vDcZ35f4poHW6cAAUEYQUUNxCjW4zT3y71cLYnFPvotFBzguNrgxSx1iR4qpk2UryiNiXXWKDzJWNzRGADRVxnF",
  "key18": "61xF9NzJjkqxecbwbuPbC3No67eQr93xs7hXqyg5VQK4MshoT6YhBgwDAftq7eDocMH9k7ufLRCamrksazsPDFQY",
  "key19": "5usBRhjwBtvXcYTaKh27Ju6eaLdrZfXvLAi4o5eEV9gkMdS8w9RRKiR4o1KA7fhRNJujBQHyvwuhXd964Di2Vj5N",
  "key20": "EnwX1VBi4v1KSQduXcnVX6eGzQN31fBWfUGu3ACPgKRgkq7sVq5E7sMusfGhDybLguZgvPtxZzPU28zquHaN3Vx",
  "key21": "Z8EALxQtS7CmqtLZVT8AfuJhXgbv7w3Smyy5t9NUmMR1sWyvpiMSw8dN6Yo9u4fj5h64HbzuSfaySUYgxCpCzYb",
  "key22": "UcTofKjz9spwc8UFjRZk1D915tNr7U11tTsYLRV95Asd4RJD6GBkLEgA552sTfzsqs4hci9Xgs4UydvXewBD2nn",
  "key23": "3CbB8Vspd4uWnEbLGx9FBY3yaucNMkwCeSe6eDnKyAoL2RhDoJdGKCWrZNroUR3qFeD8rQi96mapfaS7hgMz1cWk",
  "key24": "2HQd869u4k7GcXMMofb7qwLaR8ZzPaQ4raFTYKjFDtXQKXXjmrG538k7mKX8V5CEEoVY2wDqmoWj4qHR2EKCNA8y",
  "key25": "3Qb9eeq77D5CSwsbA42UVwedioryKzhy1QvudUTvWauarFGcpmTjcFrbNH2vaUwmc4dkAP9m5oP21ja32weJ54kD",
  "key26": "AouAThXJxtXhrGL2ERNiEvbPY9kGAzMQGexNNSpKDQ73MfAoRvmzrWcqCax3778Zw3uQ2MNcoqjuPxvVaPUudmP",
  "key27": "2KiNAUykcvY5NaWgKLhB5ycJcUAfsGZzvADKHLqTF5doLTCj12XEEbaWtNz6fU92eGe62vk3TLyXDzdowNj1Pbuh"
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
