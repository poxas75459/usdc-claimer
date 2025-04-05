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
    "539bq6YwZyGT5ytWJSkjEWzW42i7HTmus5fhDxuHRSCrWjX3qymUPd4e54GSNygej8Jxu3A6mpZNYv2FF24ZTLk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gK6HfczxKCJZudooi8mzdGvombrqkBHS6Mj3oFAggWeGLSCEJQXffy7cHb2bBWkPBQnLhW2Qtn2QhQUsPGozGTp",
  "key1": "3SV8AoPgmzkSAZWPB8nGRPTeAuYdJvoBzgAfvRNoUnjfUj5PMx5rV3iEkoLZEWrMSUpmb7XhyLqhVAxcPJFxy9GU",
  "key2": "4dk2B2oGy3UZCmTG4wwn397NXph5duzMP1rBDXWER9Tnk3RAdSsfJrgztPYKTcS8JPZdKb9Awke2qGQGK5LcAf2E",
  "key3": "kUpLv8p5edpEXLN8fwohw9xw7ZxbBGGb3UhdaZEEakngasmGLuagpottzvMsVCJNnsXnA2apChmJgwgdAjghszH",
  "key4": "5DH19XaHdm4yGCpAtaiZChC6oCUFp5MyrN6dHSvKfzkK6pfNs8G5YCWFeJ5oawgcHdJdtkGrSiGNKrUAadYea8oH",
  "key5": "6sNGxKvYoXim9GeU3JwaCDhry8hvZ8iwtKcwqA8fvyXpH26k2Zvh97TvFd5wKiE325rax9XiNoYmcdRYSxrrT9G",
  "key6": "5ZpRGndfb4GKNrsE9nmezxrK4PwaYQhEuv3ZhNopQS3fYm7ZyupeecvRfEUZKP2qbtFBKicEpgmZdP7pjDwfHLcW",
  "key7": "4P5d7j3MgH7WB5VHSkpiWJeEs8wvWKbAN4myhfc3CdL3aBLE3fN37NPqPQ4v4ya4tyPxQLbtLWKKCXu9DvsxLSUe",
  "key8": "2xHpxiuZd74vkpCRK5RpuNxtQQqKoyyqBwXS6pX2bt6Y3v5dENv768DkH24L99nvi7NsYbfkXJ5s1Ec4V2RXcyGC",
  "key9": "aZH5qn4Eqn1XsUjW5nRZh2vGsH9MrZjZdv4p1HZPiYyxSVqERqFLt2nb8gKLbDMERB3jrpo9uMxuac4iKJJq8JD",
  "key10": "vuT9AdDjJeh8YkYrAfBZcgXLPxBipPZfNbzimxEFHrjDWcb221cyV5VGHxDHyXLHRW5CkmN35y9bebiUPAgjfDw",
  "key11": "4MRTR6NiYJBxb72RSUfgEy5eP4ssCc6j7Dohbcd8tPYem7H9XjN6wVcZihGTPnktwgjbKxAxhndhNdAhgpb6CMax",
  "key12": "KafcZBd1ZsxZr4jMWHPNc5gk2NEdjqmynaUjVMpC4UecAL1fK4QEnCdfis9kmPc8pUXvjuR9yMEec5fj4AnbbWZ",
  "key13": "5F5M3LJR5KMmhuUBtga8JLbJL4BE4YpbSWvBScSVfWNqJ7pWSDVt5VwRcJcEa47MLG9tFRBNPir1tPnxsTrJKkgV",
  "key14": "5JGBuojcms5viC4PX5TtmhTh8ENzatBoCyNsUHBuiWhhp966oSPYH4VtApMv4NVFWfbvYq4fDCianyajac8Q6fi6",
  "key15": "5bDVsf67wxgeMTwpNjDYfTUy5BdPvqKuBpFf6Duo41HDhSvZKEebam7GEU9N3LbFAJXPPf66WieVa2cmzv6VaF3W",
  "key16": "2XX2WiDXkbgKfBTgVfmKkCU1pi2Shex8LEEJBeSBt5gYFuuGtTSGrKH3uw9f2BVVxEhVexwKmbBzUexP8wxqHpjR",
  "key17": "3Khn7dTdGGzX1xEH9wayNSYZitNfeKDfusDZrJctj5T5YpBAf8czRhviMNcjbwq92WUCyLpr3p79EnpeRya3izcs",
  "key18": "2Pxv3p5Ha7nCMRmJ27hEKo55okkZBJu2m4uryz4utJrR3Y21U9tTkgizQLv1E1xQenxprLZjWZ5DposxEzmot6Q5",
  "key19": "39sEBrdvqxdGdLJmfJyTdwCit4X82gt6uiDr8euVUAFYwFZJvbcHCgeaoa69XXqsXcmKHago4fRssb3nuiAmuiAT",
  "key20": "51fWBUUWH9f5cMvVPQbRGhStF6HN7wiXuAWUMmUS7Jx1Fsn7sh32vHyaSDj9F9j2cNvTzh5jZXYC2DfkG63ANoBV",
  "key21": "44ysoMv39m7AhXq3WbQAG6qQUCi77YHkXvKnVZ82TQKt6db6NdKZJ3yEb7qmCczgbbe4xdTfaeD4aBywHxAyVP5z",
  "key22": "2uEMMSgTe9eMj73cZwW3ES9FpjdoPuAiMPDAJ4zZwWuVCB7M9UQyqBaqzhsxotvqST7pkEM6MuhgQKFd4PMtzpN",
  "key23": "668TTLZHHZYrUd4PWaxiFyZR9JddZTP977rcyJfNbRoeovdzFKRT1HKjwqtyqNpsVzbfnSYDrCKJG17JFWS8EkW7",
  "key24": "BfFRKW93qFtm1FwarYASzhXx3kGnrzis1w3Gu4bKAmgZCYRAPqQQ79FL9Qtq79reqmoHzBdLbx8B195tngdbt33",
  "key25": "431hWf8CYLVt919njXQDJWBXkXTtbZ3hnKLrB9W2NN3s3fJDXAzLks1smyrfyfTcMJXJG6UTPPtccP7KbrbboJUM",
  "key26": "43PbhbCfkW64Tk48TAYqRwhhsFKyqxiqf6K3HFpS9ZdDDhn9yPa8uEwXEvztJMwZv35VhdNcPYmyTGn6WnYxrdFr",
  "key27": "wjZPuinaPUTMczrjbo71LAMYx2jVei15SCbZG7VN8osTv5sGmT65rzFcmbzySGbDzbgVkesjS4yzUipkJhdVzKa",
  "key28": "3obZ8U2yWUY1D3UaHfoxEKMs7zAVSPCC3zu27cocivNzr9wKZK3gmrypxoPt2vKnK3yzXm2Gmrxx7ZWAeDTF386N",
  "key29": "2VwJ6BujrJveZMjxh3Yxqbi4wAPYPTaXtYsMra6UkiyDLXzndW7tsyhG7JXB6h7n7ffxMdAH8K7FcRsN82Ap2h7x"
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
