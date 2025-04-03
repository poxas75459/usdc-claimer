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
    "2nH4Se5Cuva72YxoKufKqcyhqPC3n6bfJz3oNqUnkUCg5JStppZKA94eR8zS1dgLuHZ6AqCBWXtWrJB2VPeajc8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVDYmyv2TGrGQTGvGyjgUSNUUEDsC66QbPKDZCV7iw8RiXrxnvJdoaebqAGYkv5YqrHRQp4MREK3unnzTL9mEg5",
  "key1": "39bydKJgdfDncLie2bLSjymP1KJshbf73EuvJ8UcvuXqmTwjS8mDsrLmdeTSuRC4fmv2AdTcf9NYBQUNWE4GKZ3h",
  "key2": "4G7ciyqfNDLDfgjKg8Ah4qPpK2rdYyRubWqt9pSrq6hfEBDuaCBU5RnENMeKzqkGnmZej1KYDoJ2VdSzSGzsSCah",
  "key3": "4iDzK5DQBm2DWGNtBuPNs8EQUiGfD2d6LgtMKG9aWpoh7LKd3cu5ZxEHzW5LkGs6Q4xVMebthyFx2Yg4Z4zLrMbS",
  "key4": "52P8ZuMKJkunRh6sxRwi7oxdWKarLcDNi2WAMBXABnVxvUSSfmn2Vk3BdgeNXymbyREH8r88vP341Y2LsUqtEafD",
  "key5": "2HSrUwNW6SLCsVHTeuDZpzZwSLqWbjyxje6MhLX6xAeRJREpBxfpDLCd8CbRLYzyMuAT5ZS9s1DFC9Ts68uBsc9q",
  "key6": "2bRPgrjYM6nLM92H8NZgar6YTmswGjPAkYZqpsc5N6BWGh8MozYNqeeggjUMWvKkKvS6vDJ7ZEZsmkSs1c4gYijq",
  "key7": "m7jxjcSxqeCkQK9HfiT9riS9qK2tLfFZQk863EMBtdoLbfF93wmGP8NDVZ9buEhpoFt4feYfQF6AWiPdChjzH6g",
  "key8": "4SR8mpWoSu8WEFZysJkWAsWiU4SxWCwxjan5bQtV3AYMG3rPUndq1H79dy1Pfr2C7jhc3jQoC9sFu1aTzzoi1oi1",
  "key9": "5mHCTmZceeQz6T93hJ8GEKHu55p6aGV6Q9qXrgfZjTQqyobYtyHJrxu5P2tEU7fgWyc7EXWh2zzXuKvo7YSqCkZs",
  "key10": "5ix1px4faZbTf7BbJ1sUh8hW9be3vkkDd8KkY9rVi21er44UQKJEr3ZcyHTxYziLeBKmaN31fxPNyRvevoj3mzet",
  "key11": "3WLqBi3uJd4hJf6pNyAAhYpKiizXPLPGAwGLQzmfuj6kaNEdEyRVmKxrrwG7vgDpJVTKPfHChDEPg9Rw4MTh4MPE",
  "key12": "hXjB8V7mRpFBcKdrihbaLXFVMGQZkxkZXKTGA4UGUKFfRBuYu17XGvCTrHKEscCUQ4v6fMZLvNSdyrr8Zz11Uwa",
  "key13": "67QYWR4fh1WfmsDE2g8ad8DLy9L2kLzmUDbwU5jgHxCyshU9ZJTtbDcsQCsPB6ffyGLGxh2h26e8g2dG7ojkXxAx",
  "key14": "5k4i16vxbvrmz9wFtdJYWhmvevjEvwyAHATTRuzwcGupQ93S3WetyvWnfvWt8ZQ4aQF5ca3q42JzgVpZXixMVYw2",
  "key15": "2gK1sJvH4fg94ub5nPDNY7nRRvbZbzE2kDbRu8F94BGkt3aXDaJ5Cee4BLNt4cCm7GvV7AaC8qyiVLcjF3cTg4nT",
  "key16": "4ZWhX3ic84kCUi9jfdNG6gKu5GZVmdYEjv1LUb3539kH3W3DjhshnmcH7oTVeWoMUMjwL6bjfwE9ifvdaiTAUGAG",
  "key17": "GQGm9gPMHrFDSxh8FTpwZv8LGHsGbXbsJe8pDCyUrkACeBCDmoMygSPtAnhsqYsBnZoJV651SENVPAq7BaZXnxm",
  "key18": "2GNRGW5U9AVKemeUpL33R6P2mk84aDWaYtx87CUgU8iHtmZ19aSypf2bhwRyLyRho2EYe71DS8dKA39bvr845Tr3",
  "key19": "3ZNAPfHyGM4CdbseBcivwKRDKZAJaABWxq1Z5ZALHhVucgGGHHDz4JepWpXcDquvt9kngZQnyqbA3UijiKszdJ9w",
  "key20": "5oqFbAe2sYeqwreXxQTTnhyaJrSfLhDep4efQVePTb9QiKmE3ENsPadW68DSkgS9idSdTX1EJcp2fKjnpW91f97M",
  "key21": "2ToJ45xdTfhxiAgwFaAwBqeVFNJNmBMYZMfbjFMU3xLvLxde9GU7ecQpJLDRazy9GiHQhHJCxteJYCLXns7HPbcy",
  "key22": "2pCXYBWmxw8VZg49HeT5wc5Y8ARZi7G5ytrStLj1cbqcUC4cjSu2kjRYeWLU1NiV2f9jJ7LShYLn8sAL3uSQeSjK",
  "key23": "5xoDXGEJsezgVqEutdzq1z8aeRU3MzVR3WAEAgM1EAYN3aK5U3LxHKFNeqZAXWgC11axCkYR71ZPEKzzteW87bLT",
  "key24": "JZ5XJ5T795XjaoXJqjpP4wdx3nZDndnJ5BaxSV9Z1heX4MyYSEvE4QxnpoSdqZAxbEtVF3Em9HJPugSpaUFZtGG",
  "key25": "4AQSr1nqJM3Rb9ZscehheEnsr4nTEz2d2VSqUpnxWJdqZo28yD9NwuCZYx1U3chanWN61f7SELtWxpPB2G8ux3Pe",
  "key26": "3PfP8Qi8LMk9RH9kPAJnrmn92SKcc5XWhqYAydRk8tiYLVpMdQwz5obLiyqyhnCvBgAeMfvWPUdAUUHVzM1g3XaU",
  "key27": "4d4rtmaNmt7QuxEa89KHYcHZHpw4wsPU1KR7eD6jtwWup3SmrS1sN9B7zqNaQdQKzNaT92j1m6y1x3cm4hdNebtR",
  "key28": "5LPkwZADoLDmPS8QQnbKZ915aJ3Q6mEyfpG6SAQugFvr3ffgvWnsBbV9kjaexN6u81PhUxVnYc8gWfqQXfACWrGQ",
  "key29": "gi275VKYdyT7jNNWBrUp7Ae8aSLQG9bzbH3bwivYq7DNYYUMzbgtnJxjeGnzMUZP8nwk7rb5UYsaf9fMVDaXn2G"
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
