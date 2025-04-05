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
    "5cScnreMmp8yHDJ53uLtrwT87M7ddtDbjPEJqfnVsVEF8CfxLwydKgB6V6xrHijK4Hfg26QfV6wULNjW2JeGPFw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "goHC42WwfQiwcCYK7sRqzYAA3AnooWdLzvPHh2uasHfywZGmpyHUW8nMt1K1G1mCEeis2fhAw764fUHH7y6o7Yh",
  "key1": "58pP2cXu5ZwjTwgf1xW6zKQadWH8AuaT8WWDDxuXnxEjTn2mRfLA8WJ26jgX1xHSimVZ92CkuMVM4wWQntkzX3ai",
  "key2": "2mMEMt1fLSuB1CadDQEJme5AD4gpgHuf4BZXtVbQ9CQT9BUaWFBYgWPuxG5AxvtFHWts5gZkbpfR5PHqgy6aBu9a",
  "key3": "rMQ7A3fHjgqyNNnhVRKkeH8bHUyoJj8FnCU8KSUoa6ThAAVARqhVKVJhZqus2mTRMyVioMncnAde7GavAvs3VHV",
  "key4": "57o36FxeY2ByMJNhmr1nqpKtRaM5QKcxSdFG5w3XQcUSXPwG9G81LKFMcrjn51EYhbEho3naTKmWrCbJamWKP3YJ",
  "key5": "57W9fcENiiijfG1UeM2issQHbQiYhabPyinns4CW1HkcPLvVpU9C799CQTr2Qc8rfdWrhdrttjr54Ti4Xc75c1x3",
  "key6": "6BRobmsWWYfhygpxjvYNXrZ7aD4AwTnKC1jqZY1jCGpdNf44HuyZz2n36PHcB1kjJ3cMzSjhx35rmSZAKAMA8km",
  "key7": "2foCgcwAg9kxgXvijyMgyPuXjwXALnFPHX5G1QtzU23CnERVzfLLhXSBkZLqhFP4qkAaE9hFCf52K5checFoADtg",
  "key8": "4HCZfU85Pz1NiBbwzoSWpCxbgZUDvnjW5nGdEW21YxRutx3tZwyVPJPA2NoPw423ytnknzyGJkygBBCqNMw8oVVT",
  "key9": "4Bi8a6BFYEp5Qty3c7rpcqAYUNTgfysWjGvC2oJGDJnNe24rYjr87zdABnnQWyKphan3aLvs2VQVJrTWj4a7RN76",
  "key10": "5mpusz9Mz5g9MJXjhTjTHxP56VmtFTqZiNuAi6idi1ch8NKkG7gDt5qzWxBFFBvpmuDQyKNA43uHxF6UMS99YxRL",
  "key11": "4AVMVok1fX1wZK5xpeREka5kXRNDRBUks9hdED45ouXKk3yd968S1SuxPbpzdNAoEb7cCTfeCGVVKTSZbhM9DGTH",
  "key12": "2GDkGHVRkyM5bxx3S4czX2nGTEYazkEgQutx8YG5znUgHXfm6KFURJKQuJda5BT2zBGXZtSvLc3QrGDaiECiPq1k",
  "key13": "2U4t91mpkrW1WU1js5NKwQuErkQkMct1vxFw5SaNEDPGuEXpp631wfyRWe1Waa4kL17sCaNsCnMvn4KQnkrL6Xoa",
  "key14": "q8tru3jjxzSh3qWxZYQ78u4Pe2QUyfG3bHuh5ZArRtHFBkWttYArjTTPHcCxz1Qan7k3UhKXHC2zoPE4nK7R3M2",
  "key15": "5QYC3KQTSTasz2gfKvjSPXHa7sVjRUSTzBEteRHLiQ8ARZbFqGXviy3FcWW7HBEiwVVbLgdAHn3QYD2Q2Y3a9goG",
  "key16": "eUAFqdXfAaDyKWWorhBWC3FRrdpkY1QGzi9ufE5f5QY7WWKKQno8U1f4WioR4NwDPNvfJWodGtMEzLRjgHrLZru",
  "key17": "2zKqozaMusy2pvvTNDxKqkhbRK2gGrzwF1BMDicxuQhyweGLF64jJkj9JfErUg93JGPth17yL5mXoJZCCKsJmxYK",
  "key18": "32TaS4ozqLhs3JUsepnHoCMtKkRoM6cyQpi3QuBcEyHwk8z1tmP6XTA8kc2e9cGKx4PGX3kviK4imGxft6cSJrWy",
  "key19": "4qRC73mTXk9nR8KpDppMkXG2aiV1CuSdZPUqHEYQyNtraqWrVvxNw6bikFQokFDc21KJri1KvMJjVzWQWdzWCh8L",
  "key20": "4H4HHZeBJTbVppEzk3HgNYBvk3eyehVQgiwHkNnxS323w922Y3J922VDtSn9h7aE5HgWuoeNf29hD4JqoTCUCAVJ",
  "key21": "3kgGEDH9mF6Wev1KKNNFeAtEuWiJvhXPh27t9c7uXi78LQFnjyTq5ixxytSRCSqpdB6aboMizBudNaGGf3WoDN2i",
  "key22": "5ADbquBELfkuYFH88HeQ35KqjdAx33AKKgJNwQtufxBP1TteaJjcPww6y3pzM5VCBfvE3j9iCLFrGdi2i3zZcQRC",
  "key23": "5T49URQzX5x5MVR6U5n1UbbkK5uQp7VdmALLJNdVTKQDxmS13KU7UfvuQBWvyjPNp9iUSpYkqywCGzVKVvCV1zYy",
  "key24": "bfw37hBKtcdBLCFRLsxGpCigEZWtp68wAsrGhoqAFXZNNfy6mkkZgaUssmpwAbdS5bDsCGuvZSy3BBZ8wKZ9Rj7",
  "key25": "3XHQKBDmJkmGkCMDkMb5GnM6avf4TBuByNje2WzJFeJ71zNtXzff2CHpCvLVqJr865jQbEiNK8FNP8sdk8yGtjCX",
  "key26": "DuRWx8jqomvMEDKt2HSa74VcvcJucYock3MsV3dE1TDTbuNV53gQCcBofkUbqcW2zs2eEhxtMCVULuenguybcUT",
  "key27": "2oRgKVAuyWUTZD2asn9N2hpVySnrGLPAaK11g5Sw3WCykFzwnutB4cMw2ufa18yp49BSjNG1aya1e3dQN2MfhbQd",
  "key28": "2FPKMESFgjtPKnvCvb246SAU8KW19LgiaFfsuSux4fdGCW1YtSS975DU6JoRGZPHvvkxZoZ7U9TdZvEt9A95bAk8",
  "key29": "2BHNhdijcMCvcS6utWGhzSgzKowCBU4xzEh7BMvUow7fxgjqDhbZ5j6aLVQhCBhjrqj4hNhbqovtsemarWKGZNzd"
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
