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
    "2ucZcib7FNFAwdk21PaTTGgXranRMsuGMDGtrzvX6y1d4vimSx3skH3YT7joRGJxcRoioYjoK6dQoNE1UzvwHkAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmaB49Yjva5ubnJUSjzUqDPUGM3UJ27vAvKy2WX5uhAshJhEQaQYvZAzmxiSPfnADfkTPfVjVVnTru796YC4zZL",
  "key1": "4Ms2jS3dTNeuaGMqirAk9bwCRv9Zgx27QrmgH7gAw1raNRMBfHuCzoMLwnD5X5udjgfh6shgXacLX4Y8CA1JjFTQ",
  "key2": "2ct68qWD1rempwkAMtU5VdgAPCfp7FNT8249MG4roufe1yhjdNE6XDYihroDrQ2J1fpL2jzL96V6mvtaASDGjrbk",
  "key3": "2zfVCYeCZPGNVYmDhyDXUakWCB3ZRApEcGTs5Vvb68WBt7hWVjBYsLQ6xsXWpPS8LeZFtyVjqH7hCtTT8W5mWYwd",
  "key4": "53GRKQAWnxD56JkKaCXLvKvbC7wiUXpaNoKFYMAoAR1muJkov5fyaee3QuqAobjobdavjU63F3eLddcDmdXdUeJU",
  "key5": "58c3mFkhdUF8MHwDuGyfodjx8uHPANJFpruKryBKsV4n2TjsjmECwi9PYLcQ4ruqTXZXrcPvofjZqyKjgVqgozt3",
  "key6": "2X6AG1n246ZjqDtuzKV8LNPUWLXwYRJcn9qCqErskSRy8sE5fCJv22TXAGMovqoqA8KPqMtm6s5SoAM57CqoAyLs",
  "key7": "3iXncnRN8FWwBk3pgxBxXBFUVR3vcR6tidBUQDkSaxPMSLNWXjAy8j5u78aV5TnuFyWtueFbqSUpVMnoWcN8Hekw",
  "key8": "QSSXQjHuGANZzFoFFfbPuYuTdH2vcPJqEuCnpswKVJRw6j2CHRn6S3sdtegcRVsVChuzpkMW36gd3Xa2JoNUSYx",
  "key9": "3ZzLSjKykp5WdF4qHLZDaUyQuDMzBmAM4r7Q5Y7LF8dQ247kZG459drEkgpfWe2VJ3AzjvPpQpPRrSvSAtUuR4fC",
  "key10": "4ByhuqZ5iwp7wHtcHBk3hXZdBkoZ9v6oaGKUc824HmQxqiVTSqvCb7CqHv4Hn4rokuaJv66JzJvy2djrmqhPW8re",
  "key11": "2Xqvcmyxwd5s9kQGNmYTS9hFJtkKgUzft5Qxp6ap4tUAAc7LT7zcsABopdLbmA1e1JBfeUAtdCQK8JTqf7Z3D6mX",
  "key12": "4eKJKriJ58zduc3xgy6nyTtCGiYREjY9L33dnMyiLsxg7TUfhSH2qRGq3eSt577eeCE71z9SNuhzAmrrfzFJqPrq",
  "key13": "3qwnmMTQDPFVKZTphnWGmCcz9NcnuE3prfLWvZXWEV8aFCGM3Ux9xqCjJFWnksKCz8qob3nuhxhmojJ9okqJkYcg",
  "key14": "5M8FKM7bS69iCD81fkSv5VxMii5SJa2k5MVJbjdKY31L8tHQv9WRgz7AoxS7LAKoDgRYETThhVt27ZUVFW77ZZHy",
  "key15": "4oKBSJzr1CFp7NFuYqyN1vfMQcDuBgzM1HnwdwZSXWv2RhNVLKQeZrr1ZBM57WFUcGmeqzJKm5Kxav6Rhrmr1phj",
  "key16": "S8Te89MvUxfhrK5EWytMWwHymC6gF1CgRK9nCzkcbgyrLGWwNMVzqhbghEetKjg6KxA2cBXTtP4NQdSyocthoXV",
  "key17": "5G38UKANjf2T1hbb3AhHqrt5rhR6skE86d9mJy1ceA2Xms7ozTEDnKBpSopV3ppFViT7TLiav83K7Q2hw91Ls1pQ",
  "key18": "4QB291NMtcxm1PMkHAMEKeipDbyts15uN1H2WrrwU1n77tyGLJALjsKYmGdHF5ANcftAdQnodmCmLTjsmpRJtVVE",
  "key19": "3m8Rh63wSBn5mWh3ieM1aCKj2vafnnACMxe1ayrScu4WK52RYKxfsBbFeRXHhgndgquKq3RSeA12BqckH7PYD4LL",
  "key20": "267kz9LwSuvoB5hCdZNZuy28WPc7uU4CXpZGv2QccMHiqNtBfACi429VsfjaPNoR7K5GcUJ1QiorkJ3KuZ7UTLLG",
  "key21": "5W9PgcgV1aNpactREa8MCnA81UcciXVM8s5fYByo1gtHyq3PdvwofBthVRmj9myUYrVw2o1i6GZwZS9rBuK5Fsuk",
  "key22": "29cVZ4S2yLsD8NfCVQGPp1sJSi1v2f566BCHwrdJncamuWXcCKuT5LaFCu7zuVAq1tC8GEzSZvpytxjL7KfD41hU",
  "key23": "3LqTcFm98fsEE93EudDBZy5NE141EFwYZeQZhLSv2oKyWGmRie6Wx2kQdugYAKco1Td3nLhhpE17xCSJogjhFu5v",
  "key24": "22aXNWRakeDHoiEXg3FzbpcJyqEADtDiEp6pN4MB5CTG62Dp8udqxXgTEdttNmT3PaU4cQiPybEzQQ6ibx5evxbj",
  "key25": "48PLWNHYSD6DbH55XnkppP5rnvVnincq3vFgynhASfNXScCacspQqL3ZAWKbgF3ELDDhpxFQouvwDpnJVmy8hWqc",
  "key26": "4DJVeSDHbYyX8BDU7SJGytQWXsArkZCykZs4HbsMgAhZiPaRza2zqjGwUa4cGxmznBhgoi4xkh7jEeabmbB7t2J9",
  "key27": "4GyTSHLiMxpavZeuPEpw9QBN1XbYbDxN3LLenyTafnYUadt72YHtnmY5moyL4xm1Ez75e87kULwdhrjAMH3Vi9KZ"
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
