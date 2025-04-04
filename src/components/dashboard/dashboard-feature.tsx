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
    "3s4DzA7tKXgBXuifa14S5odVgDz49DCU1G8Vw1Suy1NpEdTJQ387ayefXrCs4jKLKMDuNnADnT7M1381yTu72WgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32NX2eoEwxqY9wz146QdKWGGPueYfBmJNNiRH3qUPaxKMhTj2GDjoocb19ezzhJDrwsjWLzLHgu4dh12mFKeFbVc",
  "key1": "5qFeFthSedvVsySEtZ3KnUz868NQUSHYYpKmgHn77cVpD46hc3cW6UJq8jjxkfA6ZFiBMRxXPoG2DJoRSjUdGdzA",
  "key2": "48gqzCrfAWw7XXaS7jPJQB684yhPCPT5DD3arVNzcgReDqXQiwEfVHqkewPdT8rWbo38E5Z1995EKLBfcDKaAwgx",
  "key3": "fdnwFZj3J9uC6aPETs8zCyocscxKeuRpLtpE7HA6AWwAkGpFXavEV9ShaxzNfyCHMNKKqzfCZ2FyPzREtgqAqko",
  "key4": "4b4fHrCDFxPDveAP6yigm2vYoBUTPE9w8mXpngAVBJyXYy6mGEqxMDdbe9YnyiGc4bqrAj1Xzvaf3DuZ96qSMLWU",
  "key5": "2XKTN5uxWAjDVuXQcxz42TynTZTDXh9dTgFJ9UogmJkP2uvrBWiqpiL2DYkE3Mw1xWAii7fcaRqQnyGh5hJbhjAG",
  "key6": "3oB5fPSLqGDDTf6X621vovyophHENRSfbrMFUA1EoDmbDLbgKAgbUKkkLxK5NkLtUkS4nHC8wmSTtdNsZpHD1qqS",
  "key7": "4dvExvsEVXmGjFbALwcev5TXopR3DkPaS4aQQmbkv6r4M9G6gsZG4N3QkmgZtJWQMwhgNDYMm26HvUGLpDt3BpYG",
  "key8": "3usc9fxXy5ULtE8GRUTHc6fJ9n7o3ZEc5nrEBzVA5i4EHWsFwC96m1bB5BsZaTb5YwnuVkySV3ZEkBphjcmMo82t",
  "key9": "3PVWwcytJZGN8nzVLL98Vuic8vtZaqbMZw7HQBWH82wgYu9JikhcoiG4KYTGoDpWd1ozCHgoF2tNtxwkfFSiWJQW",
  "key10": "jWpoC7XJ7TxnZS9SYyXRz1GT2vMRZPwSvfrPmk8LsQC1a7THzpodzKqt9ZdV1Kt68fG8Fx6yq978X5Qur2czyqC",
  "key11": "5DCpJ8c2kV9b6YxzCnDxAriAKyRrEDn33v8J2DrEoHD8W9nSQq1fpTXWRSnvimmVdpV6LrdzXTfCG915q7qxeH5r",
  "key12": "3tC71rWgVMwLDbtPBnc8Bf63RRFVqQaWTyMgXKQugNAKAmjwXA1dW4DeLSqZs9AXWMj2wyJtUbL6CxpFZL4ip9p7",
  "key13": "8nUGnMzFq1MuVHZs4WE55xdaTUTdTSaCVSqiu4hdhts5FeXVV4f8SXWdUpGAhjWTgt8gvyPQ7vhVumaYWe3zUTd",
  "key14": "3v3ZfgVgrsdAfnC6NhQYHAUqM8eFfV5TkjyGiBKHjsbsjKxMrnZ5ZJRWWYg1eQPv1rpXtjsutuPjG6hLr4PBeXLv",
  "key15": "2iP36TL9z9kxCFnjUB5Pbd7dtTm3XpCmdnJXMYLHpJUM4DPHtEeBJz6m2DrRcHcjbH3jhBFSRqHKPE7TLuv4tyX8",
  "key16": "2gFsYa3ofYkv4GN4P7LZTiBsXciT3oxGUxVqrtaFpnntrWgq73UDg6WGqqg5NUGsttwgAEZiVjCcGfPbSFm76hfB",
  "key17": "FPtxCog3F2nbuqtXemt4KkFz48XfbNE5kMUnxZMo1GbpcJ5bDYgUbEQFj1HAeRMZoEtY3yqDj5iL6hLMLCSKN78",
  "key18": "39Vc6KUqED22PY6uA6VwZWqENg7yqPPvHsLvDQjKV4JJNkMVBiYWGE3QJ7xHbxpH9uWqgBuY7jmZAE3caXG9e1rT",
  "key19": "2powfGgetL9QUBxGuwkTU6BTreekdMY2iSrUM3Da9CPpncQEbTQbVbTj6WDjQee9cjsx4kTteaUE9yCKuDSyh2uE",
  "key20": "3nZABjfqhudBPy1zpvtrfKckouCshVb2a4EpEjP8mduY3JSkbT82HRgNKQAVvaGn2Xq9nd6WL2tmgQdJEe2DhxqQ",
  "key21": "Bhdge1ACw52xVSHKviyW6hq1BzLVei8ptsWYbQaTWVLL6wfsCugASihj5PLXkihxZR9yxYm8LyKR8TVZ7rZG5ZC",
  "key22": "3pasZRxND519NUZqFQHHgU6UZPVfMPNcuuJSqdupBDCtSiDgyqL3HG7BmtTW5dQQCGwVURg7geFva8pbUqYNmpts",
  "key23": "2n81V1eKnugVBhJHyeNFqfnASiqmFDu42UKb96Ka4CFQDZwt2HwFiXYpVWkHV2a1yyAiMEzq7cfFXSKy7mVFWCua",
  "key24": "5VnZ1fP34qgN3qbAZzUXcYCUhPA53k4894ryZMjgDe19aYG7qVaP7ibuHtBoKMim2qvFU4EQfQBFhESHwwHmYdfT",
  "key25": "3wUm4UhJu69CqvFJN5hkEgoGFE3T939RKAhZiioRU4hYfngpWR6VhYVMHr2APPXo4uJxoiqh6iQ1tbZxY52RfPgn",
  "key26": "bLsgcNMatFhFPFMjUMqmaM8L1m6YqGKwX8SQTpKPDe2LFPSPbpYqXH7DU2sWp7ofjyccXCtDwGYvTiQ9BpXNDjx"
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
