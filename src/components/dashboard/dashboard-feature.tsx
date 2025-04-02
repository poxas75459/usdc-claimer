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
    "5xoADdS9Dh1om5T1oZ7UQ5dv83v9HZgndDqBMEFYRHTGczuRuW6gDb78tbf5vzkvnjKLfbhvWyjyav9m6zazUM2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LysQXGZW6VTNgaLRuEzTASj1prwy9W9eFq6iMCV1f75KipsHPoJmfK8w8os1ZVn75JRLBKaK4NFtgEXa9BSkSPJ",
  "key1": "4bcpsvRBvC5pW5d12jU2tJ9qf1YWfaS2XD82vPndBH9pNaJDa9zEdcrmGYLmMr295MP6tDqN6fwg3QmpQwyPbsvw",
  "key2": "5QbaDfKKUaMzd2wZSzbzwzcU4X39d8GtNDKhDZG9rXUGmhxe5jEZDsRKJJrjzeXDVvUybqC5aEpKbHNHmZjJAqbV",
  "key3": "5xesTScpu14umW9ibsmMRJPeXShWhrCEzJyY6No4cnwS7MHC6czpii2Zx8yqzimdSVRtgWKqTBpHppLwMTNtRnjP",
  "key4": "5dF28A4N7Lx4y8uWH23n19fMNnPnJo2PWwmvKCscQ2ubHEq7YkuoMZTPSqPJA4qjAAVrQkmV3Ed5MsDNDBAUY4xx",
  "key5": "bLoEYqSQSkNw1PjPTKUjGZkVTZG7hqsZMRDPRBkr8RsfSMMNsyKXvKYa64XL2nf4pEoLySLYjEgRnmEXJVJvoh5",
  "key6": "4npo3nEntTBFcmmZiMV4J5uy71mJMbzcf7NxYpEQPyG4AMxu1VrVT8KC2wpYhqcLCwtty4YY7AAZnPign87BipsC",
  "key7": "49qnYHkebjqP9ePQUG1Xu6MbHtx9PeTNFRdJv68nLjKCTV9ARd9KNZbt4YPeQufL3FeKu5Qb7EopzKrenLBUUgbh",
  "key8": "SDgmxvWE5FwwWj2WnJiM7SU46dqmrtUNxLY6TEC7mWvEPPJCAHNWYTudtvDL2kosvxhUr9anrnVhxona8P3oxDE",
  "key9": "2LKCZFdnwK8dh7EHbYcVqLxCnaYE4bx9m6fopKvHnegiC1hzq4xbRyv9YMSV3FY3zV124SFbaGKXdAxjgMkHRK3V",
  "key10": "2q5kKN63pWbQFzQa4WWWnFB5R6MK68VbowdWBKRrp3XgzD9CYjsSUDRVA5ibeFzNMwYVyDWWUEL7TBufWhXSAgBG",
  "key11": "5AMZMBYTiyLCZRyFcUk5TnEDQDWz1Rw2Bc7T6u3wfJcw7eqGTPr7bxjqC3fUkMLSc8pJjNDKYcAaXWUTXcGgALKq",
  "key12": "2J2ztBnG2hCoFWA6Y6MCY8bsTdQj3GZGG4pJQcdzFFh89XQ39Xtn7ddyjib5o4q8xeerjSW9N6q35rUbVFuBuRFS",
  "key13": "omZh1om5aC2s3ZtnDHNSzkv32naKvujHzzj351Zhs94jMjypiAonDvnhEBhrszZ4viDz9B6tb1qj2b8y6Z65uT2",
  "key14": "fj7d7PbhoAW7yrTH2GWKPsFJJJmjgHVknoMNV46typMnSqxQCXEWhFL8W8awEorhgdDs4sUqtc5N6udW2wrp5Lv",
  "key15": "hhZP7L1KUo6CJZ4gVBoAPWQHmAFKsqs8wTUw3k3L9g1nr7kQrwX2NSShfVKxYgmz1P9UfxaUaDnKvNA5AAy1sbk",
  "key16": "3WsMogqkE6zmMSDrPr3BauycWvHCcwrMvhyosyY7ciBiBjw6Q1Z6TWDR4FKuvDgBvSBTjv6oEJpyXUHX4U4DHLLZ",
  "key17": "6dziqgb2vrbP3s1hF96H1pcaP4AwyCvUvsciFfue2DHR4XixkTXz1kspddEsKRAQ8X7yfLb2S8kgxCBM5tZqxbg",
  "key18": "4rVHxGihQarpNDMTuX7ov8dugPtEBYaEaHZmuRznBW5B2fKeuBanrHwFvjH6jx5hobDmxjYt6mymfajETg565rrW",
  "key19": "2Qzj8uAYuTNiLi94ZsJsAWNP1U8Co5k8hJzdQ7ZHaCDkHdzmEhpFUdVpvetSyg8cU9qwwT2SXzxsosgDdMzfLEWy",
  "key20": "3NDHQB4UQzfbKRLQqhzwtMrHoo8KQtFG4UAETnthSEbePwWP9maUwVmiFESzPhBK2TW3extiDwAvnFwdvpHtVLTv",
  "key21": "3dfLPXoFokNNjcdFEEZgQAYmsFWzHaC8pGXYQoRxj5MWf9Vypb7A3i8DtYprgefTFeP8pHETgQfcAfZh6uPvkPLC",
  "key22": "pqHCbQijMWE7C3kA2F2rhk4h7wSLTSmXTka8xuLt4EZYpsQqMfzwqywuyJrMXT8gB42AKa6hcFjP9jakxAy7v3c",
  "key23": "tdUj5sPPQV1k3xKxpRr75FS41E9hKNWZPAYmiewTHCFcCvb3rWubdGKvWR3uM9sg7FiAe6BiwECuiYbzhRsKu6j",
  "key24": "b9UFpdAsZBR5UayRtLtxiy3x62DhW6JX7mwCU6eYNCrpBvdhveKrMfqjvLsuNF8gt1g5qXqM8TvVHbdirHC6fPE",
  "key25": "PXNRfqReVseB5XTZyHnNiqw1RvWoSzEWxL9aZXsc1ofEyCqTrPWFBnZG7BpcjSRWBsKN5xZqnVSXAcUN2Ca68o9",
  "key26": "2EbYnMYYCLDtmKcx89w2pUnzb1MnXGvTpo4ocdfifdSzmSQfGiFNpbCrtvyiLUnDAjHHxvfMYn742KFfXmD21tMe",
  "key27": "HQsBJFknWPsCe5CCTV9gLTfHnexDHM7qfJgnD9ENpP8ViuqdG22gBWVswBVNyYPh8Pa9hLyKe8BRe9J11Hc1ZN2",
  "key28": "5CXRBf5mpvt3v4rNniyJjcueUWK9WY62YAHg5DHoLJYm4fBeBXLChZ4w5kRC9TYofwZMayCTUUWrvP3eTcUPtJ97"
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
