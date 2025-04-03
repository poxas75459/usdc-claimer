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
    "65oKp15ntrgwGZx9DfakVR4Mqisq1PMZ5SnWTHdLNCLWfejMasSzuhh9d2FgFpTLMzTo5QhhgshjRR6DDgvhph8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PTnxSbMctToajiJxEdwTpt1rVnFBBheDHmAjAvtA1RTBoj5kpNhMeLf4ArZeCuFM3cSSh6eTXhuh5mrWUt7yyzx",
  "key1": "5WYnXTbXAySmRQgLP5vxEiYMQwenpvNkjPH3sUiGJbBKgWqkPGdYXskN4cYa37s868BaMYUN3zNvAgZkAKoGBHWE",
  "key2": "3D7F7nFnrMbEtsA5Eu22SviDB5WhyYAoW7K4U2g4Fztu5iPueWwmHTBnsoz3rw7CyZA4jdaBsU6nX1mUHPvgZqTi",
  "key3": "3PWci5UdTwacr2fNeLw4wC2EtVxyvZM43ZoGCdeiv1wRRAidx2cmqmDmhBvYcRD9W3wovJtXWiUDvjTzS1qwTWEZ",
  "key4": "2ZhmYP8W42tWxMQBtrw4RgPWEs5XeyxKX3aABaYN5nbJdsA75PbWDyhNgV69R2UMDV5py5UjeDJgAPG4T6LYmqEc",
  "key5": "4g37r2NiPTr82Y4mhrdk6ptdZd3YCymTMRJKyh8sPkdSBicRZZbh1PrNcnuJ4ptEJQHnj7AebgkWmNE6sXfRb1Ma",
  "key6": "ZCxmTRbkg18VEkLBJz6DVYeEFPupyYWP396bCyJk5J2PoUbvHnNU9Sw61AbnuomqsQGChGQCG6LpD5cowWWq5sm",
  "key7": "4gpaqB31c1PsYPhgDNmSoBDa7h2vKpZjXmATJbFPBsQAcbBVybW1Pt68Peo7GxmvMtBeMR8VBwZ9Fi41YMNpZZEE",
  "key8": "4D26JqgLCbLk4Y2699DBB894tdC1jP7XVt6aju89JiZFFA1KTL9xGpxwTeRkVoNoSEbLTiv3w7e3CE8NfQAe7qBy",
  "key9": "4LXE4Tswp7AFjNW8GYefERkaV98zP74AgfC4f4VkkucTzgnXyL6JppFBLRoRNSXpyA1kBdij1xaQYMHfhRpyrQYL",
  "key10": "Xa7E5gZHuSJjxVrduD9J9baFGru5Jg8SZrJKeAbbewrZ9dZb6vnJSi6qpuBXFcUXB6SxxGsz4zVVau6ro95ckay",
  "key11": "4Gf39u88L9wvqQ8SUKataKiVYa4DesVkchMcHvsstKBnp51y47YTLwvihhx7JJswPzyjY3ovR9ZpZALyxb3GpRAN",
  "key12": "s7EgeTi7Vj5zMR1ARqxkW1sjKYHobn6y7qDETv1mnigVfTvj4noYs9Wqwf25znhsHZvehEXbxD6j7aaCwv5hBxT",
  "key13": "e2TPjTc7GMtf9QmWwfq4NsNFhz6DQh5QKkJK41uuUUSNsAxp4vEd5tZRnNBpbS9PTXrEFeEWaDn56xb42AcRDgE",
  "key14": "8sZbFxRs1F32t9u3WQSjVnbkuhQy7c6dXJ27My5iUBkFuASG97sEceQEKJZ5RbKNxNHCF7EYQ6YDk2683CX5cmQ",
  "key15": "WTXyPVibNNrnjUYk2eukqzDtVcVk6YNTK4UKcX23Bhb1LRuzUWPgqSwmEVfdv5BUPYiLPjqCERpyCn85uEGvkQm",
  "key16": "3Fkrj19dDc9XRK6a7xVkr9n2vk1uj87bVzFCdWVsJzALhoTwC6We9UypEEhqWZVURoHmnLJi81UZStTn3uCKDMHW",
  "key17": "4E8ZHkrUi2pBgeKmoGWj1av9fkn1QrwQRUTPWQBySFCV39rsJPBVogetmDwVfaMw1WYL66nnHZ9h161e4dZZVWXR",
  "key18": "5edZxUvD6iPwrzg1BYmLfCndYNP4nT2TepcGQ2TXwLVgejhckTeuLZAuATM3VSsFUAo6d7CeCZMN2Q5jsRUUNVEc",
  "key19": "VbQ1EcNUZs6c7eKqbZyCnfzGCEjiXChLWSq1FyLaXe7zDLzYCjUtpUwHoEgugXJmur5b4D5nFDeyxfAUrnmMEor",
  "key20": "47Sw9cRwKEGXGdj1NW9ufFCmyGFyouUq5DrEKwxwNtZ57o2ma9i4krFukpiWhcw1LTZ1gB6sYAzrLNb4LXcbb4cg",
  "key21": "4z88B5ofwApsKcdXHfGN28M5k6fAAP7kXTo7xaCMSrZwVKsRAoFYAjR9YvucRVLvDTqgPGAgG8b22HqxdXTfBpFR",
  "key22": "2VxXvqWCPdmcrggph9YYoCQMpYSybHbQinUPU5TheCEY8zNQFuV218UMvpmLXvF8AE2YtuN5s9CXYWURHcV5zS1r",
  "key23": "2ipcicpNfuRZgVwnvxhv1vaZ7vwFtATeXJfeDWxJoL5k3MjqYT5L5iZZM4HAMS1E5CPzzcPRUh8sRBJqCiiz7XCW",
  "key24": "4euPHpqpGd1npW3yGMA1gBaAfhsXU7UriY4V5KmPY9jkYvMRcPgxRWSgjbuM2wdYy2k5G7XGagGFnfMBnDyhrfSX",
  "key25": "4FtuFeR3wXEc9oJEprXqqqAbcvt2CHc1S9k4ZUjUAHAvCcm5CnHZJuP3qoiwsBCgndJtHh6NK7Z71t5sG26PEtr6",
  "key26": "2jS916sDYCSfThmVgEFhJ2xxVfVsZPUZkMamgwdEyDg5q6gtCYGkBfaGa64Yv5jGy48MfZLPatkWWf2guqGfqaDx"
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
