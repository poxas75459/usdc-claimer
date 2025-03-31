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
    "4kBV8KNaakNVee1p6LUCp8sC2A6gBVnma3xYTuMkNNg4xJJBmtaJeLaSi6UETEY7MHMUNrDq4aDfFsmyKJzgLvV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YgapFN5PYKPkq74q3LZg3EdbhEU1rk8JXf2xjk8Ya1H692LQazdhm5hpspyQoSGBXeSuageqEHW8we3KAdCLTZU",
  "key1": "bsnJYSBbvD8Q52SLsfDs7BYx4Yrf7T9VKMXJ4qqoVM4adWz3NGdD675x3QwEzRWGzQQdQxH6UECbtA6Yg6TgcwJ",
  "key2": "52vr58S9VWqkgMtindrx1H6Wc6es9kYKRyFAoxWKBxHcqg8KaLVGUibRjjq1fFBUR3H1vDaYfdEGw1vJ1MratT3D",
  "key3": "XjsdAxgeAPqCPZVViiexe4KhLWzU8cxRHwvYKDzXYauK7Ei9mD1pKNpabztanG7mpZuC512yLkrXVRgucfmQxqb",
  "key4": "45kLmNASjVuQeq4UnfKjjZYL6XZxQWrmX8JTz6SgUvUC1MGh3FSe2HP2U3RZFkiTWnHDYWPACJpjvUqQFkaUi5E7",
  "key5": "qYUFZEmMUbzno1NzVZkr6aAqewt6R34K2EekBHxsreRanuzg87yXdFszqUTAFUfEuGcquyf7UDbCv5vkBFT5QQK",
  "key6": "3qxmLPJ71jFHpgTPAczgicKa6xda52trMeXWacMWFyv3iYeZQ1qCpYsb8k1Df1stRFqD7zK68ifYSKBEU7yRW7pb",
  "key7": "58zbyt9cADCnzeLF9HKtRq3gL4KJC99QrWrZYY3BfscSkq8YGqsZALke9f64wnsaLiJtBNuiN9j6zavERmycSEyp",
  "key8": "6HnDxCwj9iaudctiCvyquxhht9niZ1zo5dqKDzeHVaEKCgGQq1sFL2kbv8HKyGxaDiEzgkybq4xBDCmqeXMDazx",
  "key9": "5AEFxvDSocxXQQDGpBpvxH4qtfL3g4jMX1M6Xm8LWmYF9H5KeV5SfeTqksaMbaT3j8uKnVePaL5DGLd28w6BXr5p",
  "key10": "xFv5pBTiKXCQELu53SHBbHN2gUfdcg3jMZCjy37iFwxt8uQsjRAEz71Da4yLWZnbsXpyoJakMDwV8m4nRQLecSQ",
  "key11": "4uRpkPttaEc8npB1GVBhYePupupd7FVAfmwU5AvE1FTXzRhE4vPMBzUVWfP2GopAvu8avS3o4SCtCNtozSFBThAw",
  "key12": "4BUq1N6v962uFtEUR8HCkmNbjmar4hGwrtKMd4gTPLEGbBSVEw8XrCznv933cWRP74EBeJfKj9Rowg5f2M86Ptfj",
  "key13": "5Nc76sM8EVK8Y1LRA9h5gn6fPDBKqo1aBWys5Y5jrco49hMxD929oMPKZJker4BuXPB4hhhX961XMF1Y9aitVj7W",
  "key14": "GB5ebDNCJi6oVe2chXSMgdRcGyRBfrBnFRH2gxUCJqwfMw1tsmpRzizmgxyLhNbpHAjNoDVnQFWMpMANPtQZhX3",
  "key15": "4JY7RGLbAQG5ErEH7Ph5w894u5Zwdrwoobf3hWYNUiVGF38xeW8u4auY7zqAUq5XEsMHg31HxCiqLeNVA3VqfDnq",
  "key16": "66k3bFsGJfJA1iUBR4cfKr56gLrDV77RCYD7Kq2ni9DLds5TbLctueLFrpX5e1rbTva7EyKGKtnkMht2bo9p5yH2",
  "key17": "3m6E2UqYkqK7vJ6kCDkA81FzPwbxGi1bbSrKYpJXb7VGQixVpERau2tyPBKPXxNYxXZWVB67XZXMAEWiHSwGEuYh",
  "key18": "36fSkv5sKjNTShHWTHaWc4hykZe5drRrhMx51snb3Mjsvy4rgFVZ2kbvGGZUn9xijUgf9bH4ZKbjuLnBEb4fNhSx",
  "key19": "2JzUjgpgiZPeudmfvi6edMjcA3pd2BWY8DHtyL75WJfUyhvBiRTmAhAu8oNq5Q9UecfeWQ2MNhftyB3F3HzUnyaV",
  "key20": "4NRQjkmV2sQUu1c5aiSpHjHJTBAWhAUH3m68tATTpU8tjQxHh3xkZNoan4rAPocUo93Ay7C1CR9nDWwBEEpW2tHK",
  "key21": "3gjTAcRBACBvoqV8kxtyjLtq5z2q5tKfYHAFs7ehdwxX7cCtLobR1Mc9JzcFaU3Vd2yBC6EXVgFaz7snSi4TERfC",
  "key22": "5hMt1xEgtZqgXcvkaZfX6mFfVahzaBSSDENM3RCoAi3JLs9sK9eUwpKHESs6VFq1TLCLPow2we163ds7fQGnrFch",
  "key23": "3SuQc3FRXgFoFRoemvs9SKqLZNP4nHYRq2aCPWTPQ6Xs6R5FWwpXci67maZM42eeESPBnoo28X5wt81BY8MFHAtG",
  "key24": "5AAVpqwzZ6YcwkSqN6orp2kBjP4pyr1oVsAns5Nnj5cJLa2H5nA9KP5LayZzVxBFe6N9kKxNL57x7tADZbET2ZoS"
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
