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
    "3yzZssAMYahJ6JbAVd2NT3mhReREtZVFTwNriyP115rYby3PmgXdqFg9R5VqWRmxDwiRCPHhiuouzdMczJS5yirB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NY8FLX324bfV8aXtQcu4RGwgaizyBBYxUBCoHWkqKWSq1sFZAuNdQM3pWsxjGWB8Ysr9ruKzUiukqzGV4gChREc",
  "key1": "2pw6DhC4TvZFGNmi3C6QMcEXq8VZ9tYNF8fq4L5ZmrbtCsnCT9QBHBWpsCcf8cRsKgsorvk5kUeVdYXEcXVq2t4P",
  "key2": "2QaxbztdPmTemLpM24wkFbWB7swBnkkbyM5h3bBEMZAHsAZrLiHW7RfuL3xek3LQ2friNMfPtEsCts47kDdTq4z8",
  "key3": "3TrNmP8cuyAvcwVdYWLAdBLzCqt6hqSbA2agwR8osVe9BHcgFoNAAgUjiLjK4sNvbz4V7E6bPsZYTYV7XLYxtKu9",
  "key4": "2xRVEb1MwoLsMZVumA8GL8WbUtJRXfP5pNZzuTxM2iHQjjajZBcDBh44Z4W4gMVJ9fnz3Au7QYojHjWDN2wDbdYs",
  "key5": "26Ho3NKoit1Hz6gKM1W9dbsu3hJJ47i4jTZKLUDpV5LxhYJHCByNu47qmQBDEd5ihtTyJgmEbmo1sFZsMbHwzrwu",
  "key6": "2qAcUtjn9ke4Kr2iSUN3ayp8W2DN7RqEJrGmPYBpNDqhQMbsJEuT6jADbuuNAHhyfBCR7DqAuDbS9Z5GhxDHFGum",
  "key7": "iiuK8x8PKkvaNbyVnoqxtbfdattdEBRKMDqSEV7J5PrbLcryiBus1SSsdkYUgc77nFnk4sn3XzaryEF3tzgkUBi",
  "key8": "2wf8pydE7XrvM74px2npUsToUd3U2WQtBkxUVvUXghxJKo8MRrZoAT32dricrJDxbRgrS2nwLds18kWUW3AKBE4p",
  "key9": "4KyM4qJqZi4ndp75wndgrn1aftyJj8xz4hCQ1uCVWugvx2UeNiX5xdSk7RvnfhwZCUQiPKDQdytdvx2yU4bEZgFd",
  "key10": "2XdYJxMqvnDJXVL49ahZ2TS2FvunjMrWBkPJZviTU4wuaajUazkra1FFdhjxEX3oR48vmsbb3b2EtRpoV3LB6xoe",
  "key11": "3HsNoxR2yK8kg4VryMua6C8pzRMU2uXdfwmYfsQLC9TC3N396LPzv9N5TfrB5YaAL57UysKyLVQGsyFBFHNb8Bt8",
  "key12": "5CjMJGgQE1MgtQcpxu6TgLg3YgDJahLVEm6Nk6U18T4TFVkcUFmk75qzzjd315LLdusb4C5y62exbQjHuvfSyCsD",
  "key13": "2bhGVCZb1v5nfNEKqDWTD4BERAbW5LEeSrbz3T2navHGhL8yt1PNZEJHANdWdYc9YYUuPQ3ffWpMyyY5JNJsumse",
  "key14": "32gtrHFGdhis4dimcP9aj8fSAFUWHEbP1jbNYgiA8ckT2hvYRbpnzHK2XHuzreTuutBFSq85p6sqfJfTmQJXQVVW",
  "key15": "28VJx65sT3vr5JFutBHw3NFxmvKDkwUKvrnheFUYNHKjrcQEAkMD4s6Jfyuv2Bygj4AowPy1P2sG5sQAWJipBTTt",
  "key16": "2qHXudfSu2FMhqFVBZBfouK4ajL1eUaXjWPorySD1DYkm8i3fHQUCYZpjhxjfLij3qv4u8UnEcwhKLiiHoYLwLC3",
  "key17": "3fEzZ9v4iLC3m55evUnnESYLUEZ9XDbpsMkb6ioR11NvjzKYjvTZs5YRg1UAgv4wmCiSDr6LK6YLDHDuCBPtEGQh",
  "key18": "3hBUPjCrqZ4Dah8WbJGPeGPTATH3VhsqhSQzb4PUbaeXnic27m8ygTrrJtWGr4PrHTbmzNsBmCv15E4ESSQ6NxYg",
  "key19": "559zxj6UqRt6LVc9VpmJgH3nVVJN4n5oGiJcKvxyAJjip6b2tSr45kVNVUeBnuy87JsgamuzGkijk6bSMngTjbLX",
  "key20": "3nNt3dWwuC3JZSMbDiM5h12w7ZAyXyQ41UAaDBYitZjgL6MjpEodfLGC62TvRwvJYCsG93bYYaWM2Lxm7auafeJE",
  "key21": "3XKKmXRVUrf1uEqmykpGKsNnU7oZMY685mokDAQnN77ZQ2TEEW4XJYWmqQTJRJCFdbpjv9aa9x6UkVfeNgoHCgYe",
  "key22": "36LFExQmaeWWk5VT9HMXi2XPEuTU9aDvv7LpsLeBDCt1ZucY535EvrdmFjUmfYwQSRzN2GNEXcEFcMNV6JXUb6Z5",
  "key23": "4mhn42rv4H1xao2emHhbj9QtVheZeUM3a5MfC8SJZu5p7PJUanxYjvEFQRzMm87TmFu9QHNStDvmaxivBNL46Pro",
  "key24": "53QmoifofDQvTQSuXLFwAWn2oVQgiPkMTp82EooDxUXeqixADdC4vqheFNsZ4HGDDBSNkzE7vaoJRk1Hfgus5bdV",
  "key25": "4ThsQMLJbMqoUbHoCZ5qT8VjvvAQLrfw9drrKAKWfFRcGzrRvBst74LmWLbkJCYUccXGupeBfKD27VzNTGpW3pwY",
  "key26": "3V7bPWZHGTsSYNWw6s3ZRfmcGw68aQqbJL6fGErPmouG9YbYjmAHC47qCmsvN9M7FfnteSjfSxSXiGZ6VqASVCxC",
  "key27": "4gC1ED6zox6jUZNZ4MEyq4aKi4x7dQWdru9vFrApi7zea13BkL19zaauYq3mVw4y4ZXVFWpWyjwkMn4Cz6Yaaezs"
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
