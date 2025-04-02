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
    "51bJZt2rnfmYGwDnxWZEmQWEavaqxC1C6yF6TPA56YZ4K6cbyfs6vfb9M77GYVmgwkq7E5DRxpyL8Zjf5a6y7CyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oU6KbEg5ox4B3y1n9qC2SbzuukooKx56StUesgBdi82wDBN4gCd9mMMczxJMA12vKZ4h4UKgrMrp9jUuLTj6jM1",
  "key1": "4AyDbbyMmWLtuWno675DP6gB4PT1fCogJguWXzvBxtspwrRpmYBLAaxiDm1pKvcxK6g9ihimAhyggnCWF5C6yF5w",
  "key2": "5h7CvkJgztEj4VpBqvZXWgBTwDLHpoMTwPFhpxKaseQNrrS37pmf2dwCRMtcwp1XsUcPkejsV3TSqEt7CWZF91Rr",
  "key3": "YFshbJ6uzg3Y2ESwVGCpm5Fjfq8fMpFs5o9NfrpEx337jiDDwkgjKkB26K5tX1J73aXL3o1AqmMCEXd4w56ojRM",
  "key4": "33ZFkMBJFiRz2MDArd7rCM4oi7HMgisqpLJp2JMHDq56QCXWz57vPcQjsKYHTjvALbM7VbKt9dQMYovJjgCCX1wd",
  "key5": "5q2nauPxX34nrQASqZaARZonoYJjuh4d9Q7giho42Gu8HoHFW5KarTU333R5Lc31QriewX3vUy4xUq5YK9qDBtLm",
  "key6": "2WqdxPWDExFW5mVfiwkPc6YNUrD67GBD8SGHwW1vGaEzgZZktq2S1e9vTrsmcpa8mbGr64mcoHuQDFgqjbPTk8eQ",
  "key7": "5gxMP7Fw93xqr79ExDCnF8V49uCrbezf4LV8sNuXqkiAULFeb6EDXKHXFgjv8RP9ht8hdXhF1F4W5fVMhb1iTfTX",
  "key8": "3vvZwj3Tok1ZH1U7URuQjJ7F3pLsCjW9hEQcgeTi2Gy17f3vctNgbDtmnw3rstYvTdy9cvomv1eYQm2eRkwyPzwz",
  "key9": "2NfQH8GbqFjgegZXDCE8Djz3EjMrogXxsRKW17hh4T8cVR5TdwWJ6vobwcB39oNZtDUeSgeunFYaVrf8pqiuq3Sh",
  "key10": "2fjNCWy1iuhqPDYTXBSk58FFhbPdn2hd55qvpdGN4XeXEBYdaFegkMthcWpAGy4pNr7eSqKh2tu2NoHQ15XSzxoS",
  "key11": "rWGZvDz9MLi35PkmR4TAbKbDMteBXsD8kMnbPB9zBh9oLs6m8DgmKR5N5LCddA2CUyiL2AMYj21BnUA71nVjNVK",
  "key12": "4uT9mwzhqTeNpurWvyuR6BJcdV4vPbgTTMqZAnZeTyuu9XCvtrYREtHVf9Xzmy33Hr3EaL7o5aBia15PbyGp6mse",
  "key13": "3QWunzViMCaALjBtk5KbLW9jz35GXzRwD1YUBP4P7miZ3CS3u8aRHNN8rFx5ChjztDXLR5A5C6Le62MwQfPJvsAe",
  "key14": "4uevESRnKJCNuZJWDgYv5M9AJBSVXDVh2FiP2BkSkTfQURxzDZ3Ze7mDh39UfG73tS4aboT75n7By5cXp5cdroQU",
  "key15": "me35us8SyyzaDQdPbJHNsGEwGTjjTUxQR5kRRsTJWe1PyxVdSocJDmLbeVGLNHXGJndpQJ36wppuzUUHZiwqjR8",
  "key16": "5Rmc4annoYUQXksrgmUU2UYoDqCCJcZn21pDwz46DrfwqaUoX2CpN6Pq7kvis6NMoqNs4uNgkeUx5S7wZczLW6LQ",
  "key17": "5vdwsbfAV1QCHfeQK46dcJkJTryF2kPwHLj4dda2M8a7t3TqaYwuwznwiSjjKh3Ch21VkaW49YcnBk8jpRwB6EpT",
  "key18": "5FarUhZj18LZkxBXQEUtE188rt5mnxiUWp2QWQXLDr18jH3Zy6tVTJGKzGpKieMtDxijmqQzw1U3XS6UXvai5WuK",
  "key19": "GGBxE2mAmhPqjoAU2LYfhz9hiXBfXCB6E73c5DQ7ma9s1vRBZddmQWpevj2UWqfP9TnrP9v6iTKJasFcH4GjZ5N",
  "key20": "3zmSgUViA2mZEvzsic7Fvapn35pzSUWPATFbhG5mq8gbfA7NmL15zZUGuf7ko1RpqN5jPzietbzk83WJwbL7McqU",
  "key21": "2cafCG61DWvEzp7tvRCr4VEnMdxJox6bk8627iknpKoHDZN3hHXrwryYj5BH8e4P85MP4gKoENfUn97r3bTjk7Wb",
  "key22": "3GKQAsDHfxMfiEMLgoo2kfiQG1jTqfNYFFnRvUZMjnvMrfTqKmYoAHLnKHHY9zntaZZwUAuQ2QsbxPZ6VLnZZJz8",
  "key23": "3KSm49e4XUGcDyT4t6aGCQfBijf4rswepCHbZ8wobhhbF1YPTrCMCkidkkch3zBmHSLS4DbPJmcGb6TqxLegXsZ9",
  "key24": "5yYDrKe7BRVMBg4eBwuw3miL1Y26Y5WL6vjJUYjuVhuXScnzcrTch6wDMeoHe1y6CB5tybnoSmsJ11FCpTKECv2c"
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
