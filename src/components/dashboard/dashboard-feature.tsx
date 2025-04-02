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
    "8S4gue1TaMuevDcoghoXKrZnCJ4kM3WC9jBe5NEZDWU9QF4zwGruNMWJt5DeVuk9WaBinKJid7e9UBXBEqK11J4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zqV8NaKnnZwucP7cSaPrkpSjKGbU6dEcvm3PvoiLtyDLv6Ky92HeR7hrCeHbvLwfso8DhtnA4b7fGfirSMQN9bx",
  "key1": "2cgPdAb28yytPYhjNFgqDhYtd9Xk2aDDpRn71FchkTgvDaZ2MrkwsUjQ48fj1ddFzqxvEhmMenrKnqg64EtsbbUK",
  "key2": "2oZpMVPt8YG2hcYwCx8kvTTK6toZv7ii95rVTY2JSbh5Jmdv9J914jte4CwdVf58t1W3vRVykauWaGq4iKSAr7dF",
  "key3": "Z9MesRqeJKuiwJ2jn8sUR8De8DvsU9togdcHzujpFHHzucp73WWqFrtKUuKNQtrdgz7X1BVse4GqQvd2HWiio9M",
  "key4": "4UkwRoRjN2S1QSFqZBBqom2oz6FssG8TzZ9G3YQAV2PcJoGhogVGyNBajoCzK1TRiwZETfcMo6Y5mg1hxEpuW1Hm",
  "key5": "5m4Toh9njHcPDHeMJX7zRomaxfHWS42kJtxzcdMVfqrUnKqboNKXqoxVFxjioRZsVJzpjPo9Unp1arrWqqkGqa1m",
  "key6": "3WxZ4bqF68hmguy6rVAP4ju7Ag5rwCU9HEqhLrmRYxiNtsxHVAtxtENnZazzHL5jJxM86uBnNxVe1Y5Dd7Egg55p",
  "key7": "7A7Tn3RfW9W2VkSSBbHSRaPw9Soqsj1q5PSDP7wrhgS1m3VuqGSe6f3vihAV9QbRPSEicSC5pr3b5S7D5MDTLbN",
  "key8": "2fsJW3a8XwXaZHnoAJf1dnyrj8S7LRY49VXncRmByPg44CuxGK9jGo7Fn19syQvYFBDg515zjmQvu2BfpEG2DNE1",
  "key9": "4g4FLn3gGzHX2i28gvtg9w33F5rQQ2Pnd6rFxxNT7TgreeT2BpUJLu55PhfVdnrm2VBw9MtMtTUbPAq8jencKqRP",
  "key10": "TjTmQpsckNkVsTKAymAK7hPhL4cgQ9NFCLKJ6ifaRtCrCELouxPASDYbMx3amSFYZYuoZYCVhydxgtLqkSbBu5L",
  "key11": "4BV2UKpn6T7mJQa5v3r5RGuHmco4XCReVhSJ29XxWQCunYaAAGEue1r41tJzCDZkfJDqPQrmr8o1SPyhxb3XaT6y",
  "key12": "2uvs7EQAQqzcnUdvEwv4LQwRtDQ7YRReBtxmE6SWUq6gYyiGwhkAG4mm5AVZgu8Mwwd3euSCsHdX4woS8UgGvV7u",
  "key13": "62HiV3UaPzEMYKNZhpak3TtxhntK4UXK2H6cLNQzMPKcBUst2mUCxGes9ebd8rp1kvcyoTW5pwJNmxA3EwdGrX8F",
  "key14": "2x2JyeoAAd9qA35p5aw3oRSY7feZxuyhManyT1qbuBzutf4JaGA5FSLF8HX48fY2vZbJDXuxfqbFsYCHG1kJXJ2Q",
  "key15": "53RYkTfcsqP1hXqy814tmti982DV7xpduNGVavxk6SKuaubQBBBhCcacf8adrdQTHxbCSPnnrkKYwbhsF8M5EG61",
  "key16": "42wsDNzaEU9s5654pgYJVozrNDiPp9v8cqdVC3XZgpNqaRAwMiHoBd1fqjUPShrByhYoeZnAcwoDPcEeW7Eyziiv",
  "key17": "2VcNRLwwAJ7pe8MGrptY1DC9WArToZPJ6z7iEX7CBQwZ9xB3mrDK5fnWSx9KXhaReKGry7oK7WWWr5YExkwvNvcH",
  "key18": "4UEmDaww3NqucBzwaUehrMF5Cr9wKQchPC5KPSsyFxSicF9Ytuw2vPvXS1U9BoMsPP4L5TzXoZwBB6PpjzVp4Gme",
  "key19": "sZRqzRQbnBvg88Pbo2sPP9cEkYRavFJb33PoCnE9kfwTHeGr4rpM3uPJ7XFCvyVXA2NYRfx7PPNJDaJTSmuukYY",
  "key20": "5C8UikqqgME62dgAe8cTNzK3h2rLMVpSa8qreW6urbBVXRwD8HR5AzP97uamMddnQXfjbLCB26BZKg4hr4aNy8i2",
  "key21": "33c8ZhHm56QGJ9KamfFhqoN28eogCWAfk4ctRUyGTxeyaGXM42ejdG4YbHKM7tQREkCtrLG7MJ4w2JAffrvo7CuR",
  "key22": "3SWo8qVoxFCgrc7mnVYAzDBEL6yNKbK5LzKzD4181ukXJbNwaaHSYSLPptfEKw6SY6Gw4zAwQHZEVDA94PU2NGAe",
  "key23": "2tdSCuWrVht8FJuLeU87zb43VLEiHD4u7EBpNLZB8U3XFC8vocMFjUw5SfswAZ81Sv5MuneS98HFL4NxZ8GeWR2P",
  "key24": "2CHmMNyPbmNrxSCQbTPgPBMKbLKoMFAmK24vesg8BwtWRQonXTMhWGCVyh7cF6d6PkaMNZM4MQtNoMdHxsoDXeF3",
  "key25": "2qX7URRNhwAeSLt2GQDnACY6P8Q89DhWk3iPRqr6pSMRDMjVrxEd4GeY4ae7jZQ5q7siq5Zok3P4dsPtL1b1F4KN",
  "key26": "5Fufd1x1ojJ6WfXxuMvkw97kkf8mF3XK9KkXppFWSAmU3HPuJC2uW16HBGsyLU1zkxPjpPtqNbawitGfpL6pRPkR",
  "key27": "bKMjzvQkne8LY122aQndkW3x53PtRNTMQ5fGHAHJ46zEdLv9RKdNaxBmXS3GcT2FVy258bxqXyYU7bNuF1doJuZ",
  "key28": "H3vtkWhuhkb8ArQc5QdpiWFD5E5jUd6VB6dX6vnXaaVSbMyX8KBRiC54b8BaSYN1164goNDqzHwqmqh9BFngg2P"
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
