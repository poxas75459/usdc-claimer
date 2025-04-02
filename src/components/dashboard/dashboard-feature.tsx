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
    "4RQkAbVP4hzMtAzFp3W1zPr9KWMLD5JMc764wQYg1vit3qoK3FYx4Ee13pEkgp4yU1AHAGLPxrirAYnxE2NAU7ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frdyWq3cbqSDkyfbrG4ui5DR3Ex95XDjYU2taEvVZNSmanhc374K2pdPA5Cx341nYmgHYw2hMtg9rgCwLd36czz",
  "key1": "2KdRLXzhTZu2KWiyy5FfKHatHuwQpX8DGABVX7btMDAAu6HieN9ixzXYwjKsGDXQgXDgRzxJ9madU6iK5FiaJHx8",
  "key2": "2m45U14w1oYdXib9xgifKcDDJ82rQMP7uNTdKZsdaFu5SJPu7yHAfp3s2HDfBTucFv1ivyCdpeFRKGciCMj8CFmv",
  "key3": "CKgHJ1oKKGKtQ6RgDz8H6iYPooLJeZRSukg5drG6Ssre7JM9YuEj4GkMqSxRYrz4ryZ8pzed235gxf3V2RgRp4f",
  "key4": "UYobADZ6i5Bdf6qi6nCtd43UxLwZmQg4MXRW7NTS1Vg7TLkxhN1k92bNfKryrwP6EiqSCav6nxi5UHvi5danRTi",
  "key5": "2eSZ9jHRU1RwGyEu9rAGCCyh1G11fFngP8mCkuJD51ttVdaaQGCtBBVDnWKRtxvND3XCnLuSu5CygSSQD65JVp7Z",
  "key6": "2xEnN5J7ZbegNCwaer5SEfM6TpWgoMfpzAYYvZqr2dA2At8JpQXrHwNH9MRAieChwkyg1VFgff4pkSPco2n5aqYN",
  "key7": "2Rb8hk9xA7K2JZGznfGtJegDoW4vywmxTrjbsfACkesDqzmhji2EARvffmAj57fBfkrshYoNFunPLCPqw7eZQaML",
  "key8": "tAhbqGTcBoh54E2ZHFok3K1kY5ea1FkGnvytqcYdp9uBEdAYoPP1FmBDfRCLhY9xmzHKqJoN4BgncM3azfNscYL",
  "key9": "4AVzq7hGkga8AycBvsgoc4kXVwxFh4ekhEeVbtMdtvhL5PXsFhkKS7dKDscB1BtrStzjdAWYvp4xxQEgC3W8DUCw",
  "key10": "5kAirQaHViYuCX372i9eb3BKD8pW8oEdpzM3niqY6t9JDvhNR7o1cG8RSLih6AKXyPMTyqGzvissSF1QnhhRECoq",
  "key11": "5iCWgyqeCHExzMpZ1Pdr5YK8cWdvSaxR5uVba6sigti7y2ymCKVbUWXBVgqVzr3X6bPJ9DJPAz9BjWn8zRAA94At",
  "key12": "5TXXfVtLTNdW77oVTktXRHf762Yds1dXLVbM4N5g4FS5hjJJjBcL1HemCiHxDqzTHq4PKNzYEaxo9Q3ywofJUBt5",
  "key13": "2fSeREvhQbKFsaJzEhrLgp28Vabw3KSxhZbCd3Qc8XUkhhqMj8NqVbu8ciVFyZyzvMutgWUdbNXzxHc9zAvBpg2a",
  "key14": "3Enujmu9X9fc1qJzGQFmEvwjhmf9aaWPUivwwskAxoknAmhxDJxXet7KiKQC38cMkiAG6uxTvCBYqpPW9vWu5gsh",
  "key15": "4qv4MTao6xnW1wKcUCkcxrPqk98CTe1psfW2TLK3HF5EZu7dUJnJ8xAno9mWa9AUgcqgbojF95fm34VonxuXwA82",
  "key16": "4Kb5nVaVxR9rzubmL1KVbYLbjnWfX1CXBa1keSRkjg9SHhgDbWSxKUE8YnisHFHFQFazC1hEwzU6HYRrznMJu1Bp",
  "key17": "2XHnrzvZUX27KkiW5xrTYVbPfZdkPSREbpz2Q2u1HHQRvPXJ2F3M2mZvzTb4EdfPmHsxFXx7zhb8ZNdUQjr3GxDD",
  "key18": "5WARwxcv2jGpXyWmZKTHeUmWZWa9FwKTdvm3ar2gjmguo47YjzEp754jdiMVdFVEJLXsmAod3FeRbdo2GEBML516",
  "key19": "4a5moYGBY7S2CkDx8eojx9GhXYHo6Xzn6mQJsMUPvz6UDtFtsKDRZ8pVQ2eNLY8wg6zg181LYPrZrSMjQ7zdUr1G",
  "key20": "2sZM3Sv63wnbLqhFcfkzoLbgyXrgYMNBnEu8EEXwLRHuvTuyjjgGMMi9YC7t2c9TLv3dAD8KkS4Ds5jQQxzuMpm5",
  "key21": "PUJbKK3CFnNo5ucUGbhcysUKMAnSZNjQ6zEfMb7CLz4JB3XcaDcVq7SKwxHV7X93MFtbi4SpyusGT3D6W9DYuQW",
  "key22": "2toqaBNiCWkmqKZ8DMmvpdcuLasmYRvWtV4ubK8TxFtp63J9oZwM8k45E6fMB7n533HrURSZZjHVrsSxvDob1cuB",
  "key23": "26iM1BaCeChgKTfPexGMPXKuNjtJK1KFX9gT1N4DpCEbwCRAmQ93EdhVVfkqFiWk5nvF2FMpPU5joqPBCUceugdt",
  "key24": "inCzktfKoxPZajhcRteU7ryfNmuxmc3aZnKKZ1SCKfc4KSKo7ygWazdUhFfKBpUJqxJuwBqbqUMPVRfQfifsHQx"
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
