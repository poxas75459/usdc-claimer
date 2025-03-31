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
    "2ddfXPUa9Kj3R8E6SeFWnKMtPDdCALD3Bjf633H2dQJueFhZfaWzU5Rj2kUBJVSYJZigAXMWciYnfrw562mNi5W1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rpk7v9iCybv85W54K2BEwYu5kuk3h3cxvzbrizaAxu9NUdE3S4Wm58y9B5nbggB9Zi74fWwdMVQZpiSjXbKUpU",
  "key1": "4eFQehcifhXUXLBJzBaut8ScPb979xHoyHrRwGwzA7ERT2W7gYXawis515vuXcHRTh1HcYb4ExupKJLZ7nCsKWrP",
  "key2": "49CqkxV1fheJj1JmZruztAokriffV6onze4NJxztEgFpDygv9EzZ6M2vsvtpoRNr5gpkFd1fQQgu1GdA5siWJPPA",
  "key3": "4UnKctJFsRYrs5fHDTesixowBLCWf61Ai2vkA4GUsCqYHUsPQf15vwwcsuEWJTHE1c11QeHgyScF19v73fpT24Ag",
  "key4": "m4cDnUTTgZgK2gm1wHErFg3eVcigrzvy57zw4AjoTr9jYJeRixS9d2E1MJvBAXEFpzcefy3rsya3s5qP5p9sBr2",
  "key5": "2FdcMYK3vHtQdB3z1xjEbnSgfkN39r1vTBynkgEWHtP2nFxVwZfSU1m157hGygaiftk3Kk4fu3wX6wkFFdvhaSDY",
  "key6": "C8FBrP9pQFUpvqGeaMKSx51pJpiJucXnxoYQoBg4RaTzwRYdsDg57tu5sMCJj2EPEK5SAy8JmPxfHrRKRR8uURn",
  "key7": "67VSDqRwikXBx9iYpTS7qBS8odcjSsyLjthw3AyHPtkdFdZbfzDQ4MZDNP3EJkq83ULXJ16WcyLEavBn6yGJE85X",
  "key8": "2xwjBa5LoHw7NykRuV7rU3MpaEUCs6G7xGPbHD63zM2D22EnLfYnRKPmnira61PG6W18n7K9BzvdHHwGWcuRP5TW",
  "key9": "4knBF1ZJvfQ7qJaekztqKr5GjUEWnMjx9nSQm6okU8YxNiW828UwZ2SgDad44bRzyCb12CTiCZddtKXPrBBVYJJL",
  "key10": "cJCfbVrCJGqez5VuuaWyRTX1x7cqvGD96MSaLp232eB17hfMrD7ooLiZT1uemCS169oa1WtXtG8itwMpLBLjSft",
  "key11": "4JGUJELt9qn1RSyxhf1ZtE6AeqfDsQ62mCN3XsvZ7ADTnzozCpCmqn47xBZ75Asokfc8dd5fPSsQ4bqtfssbCvd9",
  "key12": "4amAX7yyMH44aaXG46rUhNQ1m3LyGZLG6SgZmVRJCRE1PkneYcZ5yxYKAHDJg9PmSMn2BaQ7KNJTc66DJv3oEKrL",
  "key13": "4xWhJMq2MxqVpmwRd8fmJcPBTXH7axo7UXLh8Nib63aW3RDZJbtixRcSsV6Y9r3ArzSHMAymDV4NU6WiYz2XfgaZ",
  "key14": "HFtgvmMhuSrbZZLxZFnPEo5g8z84yfPeyt27KoT2aPgsdsnWoyCcnfNQcGu1PUeYtduoffDeyaA9J2BNnnWtvXs",
  "key15": "3LSbhLqhbifm8VyRf3RA2oYi4JoprmSC8VRtfEj2cj3X1TYpwRmekfy1xPRyrkxgYBMUpjfaH1co26xjGZQxXvSX",
  "key16": "kg44w6zsQj2yj2KnJmGp73ABk9Z6ApmZAYY4JRYM8gPoVUsZnpJZZuRZrGkWUUZom5biqjjmEUSNg5vjdqudhbr",
  "key17": "rJuw6JRBg3LyGjpbtPHadBr3X6V37Tbs2UmGbTrC2ZXLeHwgER8FpdmdoYijbBHVwBxBdvqqsZ5nHsqwGMJLMZi",
  "key18": "REitp6j7bXRHm3kxnRZG1KNjiz6JQYMRPsZ5sTbNhtbq3j63E5qCe7oZdpskXpm5BRQcwAmPs83VKBzJ9ww3TLj",
  "key19": "5RbM3VApsnfvHH7DNqHmcSirYjymgdLed4jSKfvF9W5BqGzFWLjtUCEZhdMUEaD4EkE2zzwJEXE5TnxQCvN31yPR",
  "key20": "4DpnN4fhCCMHqW1YWekKfakDDFyhBgzFU8VQqfKFDFpsicWTQeXd8E4swg7fm4KumhQDD12TXg8x7hKC5UzmUm7g",
  "key21": "4w5m7evptdet8zAYp7tRsd4HwvJR3bDUU9VMG5BHJF8TnPnbgrvJqahVWJ7v2W9YXQFpzhNDZK8K5tmz9Hm7SZ83",
  "key22": "27XK8E4DA6G3HzfcxUZ96LcAJ85GwWHMkgBhLNRwkVwp7ZxtVNPVDMtbum2y8Eb8aVT92xjk6bxADsGKMso86GZm",
  "key23": "4aaPaVaJUTgsn6LDiUypw6BTfU6BdVBZ9pkMAw4T3pNYc1Jei1vS2QZW4XFSPKmt4WYcAuJCBK5bMWXJAMqkGcea",
  "key24": "43QYk7uqLea76APebuSxk9cYYqMne7qU13Jg3czQ5qgqXz7Y9eWW5XWHPTKp3gT3DGE1toud5MrH3XACBUZJ1CP1",
  "key25": "657T91mZ11dCty4h4gS36SNKei7LGzffFJRVyuigSKJG9kPNDQk4tKmMc3Heo2PDbXNsF9Uy2h5GNtWQaBF2nNjm",
  "key26": "EueLt3FCpFW2e24iMUoHQ1Zu2YowRw5WcpRxHv1vgszv5eyCcNkoBidDm2wks8XgZsCvuGctPyZJANEgwYcFK6s"
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
