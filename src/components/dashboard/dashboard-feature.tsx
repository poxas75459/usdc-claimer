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
    "5eVd4s8N4s2un5WdhbUuaETzakAmEaJ1ABw4w2VxweippBpSuc3oZQ4RQwYL7UAbWAcxutuGTzsAXK6cyf85qi42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYkMay3hcQ14b7LnBaji4Hz4yAGP6yDbcF8M9feUfXVRcfCu6qWE1XoMQ8cKkG7jWPjMMcYvj2uH7EjASiNgk6S",
  "key1": "3gFjE3TsqT9SH7Uo5ehR7qVzXEXCcq2x5qq2nW23oBoUQYSc1cHW9JHsm6SUDDK9Wpd31PHscydHRrqT3kEoASoS",
  "key2": "4Gr9xYHdWbQU3V41R7Ru4prm5AbywxbXsyYTKyqX424USZrJsQGcJLaK16nhroHttPYCiEB6eKpqxiPsUqLaiHoy",
  "key3": "2hFRCFHfQHCK4NoH4Y2CTMSRvmLqwLoVQLggJ5tnkMSdKcpT1GR729aop4mwhhdWptSTR7pamTKt2tbE4Lbi3Q6g",
  "key4": "26TpSyhhXxdNBoWpZdVkk8xhURiP2V5aHXL39hgEh1LnnaKMQ4jm4XtJWrcYHRH942EAqiKHQEMEfHa5mv77i4zF",
  "key5": "2JfspeYASxfwSLCbr3S5j61q6jDJ3k8nd3wdwsiWEQxfHpWZsaBzpy7p39LdiAV5gTCfKMuqn4UGQvSjQDpdbWV1",
  "key6": "3sHJgAxzQQcsB5N6yppwBnASZLXnpMYY4Trsu88anq6ZeXH5qhWWRpnTQEgrM4Wnf7i5egTvNBEpvBqV7MQWukcp",
  "key7": "2q1SR5ErLgCYfckSFjEHVMxBwJRpqNmFkBiLFZadxbDkCnxMy9N9CsEEsCLbBWhh9WXmtTaLPC5emHf9tMcz2HaU",
  "key8": "598SiHsEwXmLbQoTMPHhoG8ofx7QHMxtRWCcn1AVD9NyRtbMNc1YpV5LdascuAR8GyUqNKkm1Rtu8fdNvBq9GC7R",
  "key9": "63NuUGCpQQ4H7jAkAbfkh45kgW3vrjv9CxjfCELT3uzPHdLQ12s8Q8NHd35YK5sNvGr23CFsNRn4kAuLdiqGhndc",
  "key10": "3xF15Ksy5KkmjkCdDPa29txBmi7fSTcdpMCpNa9WhK6J5zH2B1z73mMfLyqBSv2PRFRLpm9iDJ8LbJN447NGXH4S",
  "key11": "17ynkQLGDqFFndXSks8AZ4mLyszeodfNNkxa8CdXnTjWJ7PpiJVwayRwXkD1f9E2Py6pEH9pyMz6kvKY1WPVTKK",
  "key12": "3J3B5B2GYytcCyXnfamdoYjNxRXYfm5YFYz7b81Hp1wKyjetK63WAkf7C2Ap3NNVjTp7LrDMCjdThFHWSFD9iXzp",
  "key13": "NFa6iafC43buqvpxCGLwbaJQ9h8r8x56UJNjdPpXJhUekgjiD4ynsXSWzWp2FTw4nb47aj81e37nMhmUigbbPxb",
  "key14": "41ktxPKXZfeVY4WHbgmnUr6nNDcMwi3pqHxEWS3LSqSBaepjKTapfsavv1tP4BaQgnJ6xqWPMFSpHfgWGtfabcdM",
  "key15": "2WKgbTnACtsJrsctjiSNuiUwU7QLPaZLR51hxW6aSU9G5w5v2EV88iwfrJifFs1TNyYHNGNsfjfpQ4NX648aneKx",
  "key16": "67LTi8NVdNmEpmUkWje5yyuUMdxqcDjwTowFZong3hdMLWF99r9rLbjCKGyCRn7gCJZ4RSzmeSaSKjdaZGUSZNgC",
  "key17": "5WEadGmqyupeUS366kGetZNM67ef6MDyYFwcTbt4uGPWGbSp5op94APe7mH1ySuYQxLCFbgg96y46HbKJC6UVZyu",
  "key18": "2R9fkpNVsUcr3uXVZRBbMyNp54YFreeaYLDd7oXTYvyYdKypL3Jtd5oN1fWo5mLAv1kT6MfHnJCvmkkNMBL4H8Jm",
  "key19": "5kD86qQudAdeb1AGbZDuqjS3h3ZJDtpWg4ymfBSVyG8zHFRifH4SB8enanSH36yw36tMjTG67SeQikF6E4HzVAiA",
  "key20": "27CbS5FAxAdzJ1Zxe7vkUKdRx1tAVWJgMbGp8MVPk1gWa8FaHV46JmQYnFYG8sfaaKkPrMjnu8HMTiszsf3YsFQ6",
  "key21": "3C2jpdRdzCqfmzuZMWPabBWM2kyGer6BnuqojY4f1SQqJ9Wdkpcvh2Ja1PAY82J2CKaRvtKTQPFCq5RtLMYdDNyR",
  "key22": "26ttBLYSXDGAAhpNFepQ2nC2XRzm6an1ctB1GwavoxJ7bt9rzHhRvAttdeUk1a9m4BiQEvxQG5ntZWyZFYQkuwYe",
  "key23": "n9d5U4mR6E872ZJSFSBiZXAtXafYTPL44fP4gcwGEtc9U9JZ3v8nFr2hEBMwF1A4eGDQ2UkxVbKsfdjEMbgpVEB",
  "key24": "52g3Ah2JLKkYCejecoT8L67oConSz5wAt5YcaoznKeKsuA4vSowVzJezatxzzEL9B5vQmoJ11D35x3hbhqsQ8pNR",
  "key25": "5T6hTwrwLD9jcXViaGHkW42orQYPaMEfRFsKabVZTzEw387tkQw5fAWX4a2mRhNE2urvLrNtAyHPuF1a8JpQvBi5",
  "key26": "62nKJr2TvTTRXuBCKYWoViuC61peG2mPpY4vitvHezWBCJc6RbZLS3fwEL7B38WNtMxXdo1KKaTfNGk8pwvADSiS"
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
