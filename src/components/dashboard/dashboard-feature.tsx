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
    "5FpCXqKb6zUJRQQ9ZjYdcSc4b3JibZU6nFcd8XZ4dgechYyifm2U3dWB7onSTeekbppbBNZLcmNm6a15BwCREqtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CNWwyyf9ck5Ui9z1d527kPbk7pkRBAkcBQZEeEaVCDLZzvUCw8TiU1BDXjTSUXU6EozvAndqjWvz1JsMcB2HB7H",
  "key1": "4wvJqyBNCgcdda22ekVDizjkE9RWy8tTXdK9mWLfVESzmaFvUZcD8rcC4415D76FY1Kr4avSPoxAzPAwXYK2mPF1",
  "key2": "546P5jyUE91riSy7bMTzVkRSNVzXH2AFRHHWyWQogLEaHhsuWxQEcfUYHWKKUyABaubLMqceUSEYFGrtuaYVLjn1",
  "key3": "2bduk3YUgS6rdejTfhD7FHBDrU6MFjjtxfoJ5vUX2awXnmPY8aTcgtAjCX4e72nYGtsyaQ4rAS6ALfhPBvJvFqPj",
  "key4": "2ixp41p9zuzQXkpCEgg7PeLFE1YxVxJy95GZHMYehdm48935s63vJJ6wJgPo87NHVDm8efxZM5uUk47E6ihMg9ak",
  "key5": "51f1jFdoHuFQgY1AG2rWDTYZYW1NjuLjFedrufVaj9CXz7PrDyGZ7GkvL6RFfaStgtPTEQQNffSExjgYFT6usYPM",
  "key6": "2YANcEsFDGRjiHCU6eWjDYtWYj9pAZD6fCeCpqCcGLbPJ3wbjSXX1AY9wpxhLCowwKCa3rG93TaJK4SUq5TbvVyP",
  "key7": "3MstP4rY9Cv9niiJZonCsHVaQPrs5dSkYCo1m7AHtSYrkgNGJ3Rfjubk6mA4GrVK1WMB6zvtK3LvkHnZmjxJ3Wek",
  "key8": "5RKsjjwhFstnBL4yMr3LmXRPdSa7UnpUYSi743SLEPU8YLvbqgmLSR2xwsmBARbYiveQJ3me88hewvx4CfpwN1ro",
  "key9": "2xPjHft6iPBVFgwAXGGsXa93iT59EhgP4rZRz4TCMcyDqobE13scCqCFVLV8dULDcxu2AvXoi4VaYGuBAqrAoKtb",
  "key10": "tmWqPirCDpTsj9BrXAKg5zNVZZgiQr6E1kAPKCG22Ua7nypWbnB1imuXNLCBoZAdKEVGTSy5jdpX7AG95XkrZg8",
  "key11": "38TWMTCqZcrmRAbxtb9oqQ6LdL7x6LCk9KD2vXBWwtP62XR5dcWBnzLDefQqmzyrUzfx2pkqLbe98rt5CshYM97B",
  "key12": "4gMBtskbdWrf15DsrwnN2AYJ2GNMUvoQcJo765GETXAQX1JE7EHgbtxM7ZN8RtoZfojWp1usQ7Z5ecDmYDDdESs3",
  "key13": "2XAG9RtDeU9DLEAtmSUEyq17zAKgGWxqwC7vfkaHuVKxgtSWbiwVPG31veumTUNRc6v2xn14aY1ay5GHLqiuGp1H",
  "key14": "TLzX3gcUnARNMeCgNd4nTRz4FvtE3SpTU36GHVU67XnJRg9r3CmwNpJUCcXzKdhgaeZy8WvNxbDCUSgYR6v9BuD",
  "key15": "QC2RcrKZTDj87NgprYnZAryxunqeYT5kpQr9frPZKXUAA1hjdUs7grsiEW5yU2m1haPVSBBWMBT8U9Gu27QkpDf",
  "key16": "4aAHxzDHV4BWRmZtNoznMbBkiyMaAQeGmphgYs9wneSKHvr6uPXo8TsVnh3C7BTcHYKdYU2vDj7LAEvNfqi4jaea",
  "key17": "Rhc2ajmVxfSJkB19TwWo3uYCvgx6hmYH31XLiuVgDBGuJTra8CN6Sze3BwJS3F5HpEYmesKVpTexRMv6U7dh6uE",
  "key18": "3fwd2xLnpiewnETAfrKMyFER14M3LP4MAFTbnM9GjmZy7iYnEHJp1xryueTRKECNH6c1kt3cf54jKZeE3Y39V6Ye",
  "key19": "2v4wn1TWDWgKmFaDTY297hrAXWeX3TcpAwbb3Pzu3pniDdxXAuH5xMG5B6n17RTR27qcYoQwsPVKdGte8s9btUwH",
  "key20": "5qip7bPCphEF7dKGAxogRL7u61JMwXQYNhK3pUYE9qvP2cDMuf6ujBM2hk5UBNoTzqHyakBDaZtmWw9TCThiM61v",
  "key21": "SjWLPPF255Dmj8szinkR8b4i1M512QMbdet4TLWcS5K1J6exQpY5tAzcWBKcn9fTJqGN7nEwARTCCtoJq6ad2jZ",
  "key22": "5XjLDnnRLkheTVcQM2uU2FN7jyodGtQ7jfRhLjHExnhLeKj3JHGCrkqctro6mNRnXQZCweorNqnSNVUKf6b7zhzD",
  "key23": "39zG6ZjgdydAKCnbwayCnZLUqbukjXPpCG73tnsyrUEBjEmvxvroMNMPnEieRY2vCkFSUqgoPSqbmY4y3vpqep89",
  "key24": "5dfw48zVWAEwpbp83BUfQxZgtcx25M6cveadfLXJTSq9TaQZ1hmP47uE2zE2mfTUhBxViyzTrbTowsj1Pm1bi48H",
  "key25": "38G3a5G1um46QbuvLNVE7qhDd3Yo5e8PvCZ3odW2UFwddDsVsf8yWRosVHpfMzHkWzmr8BLQHtdDV9Si4gAG7tsW",
  "key26": "2n6ia1VBq2ER4hf6qZ7cott12xEhqycDdsJQyEkh32WZkk8zfuFL4yN6V1k3qSJT8vnjkV8iLJv2TMz2zQVn9rMn",
  "key27": "3hzzbzh8TWErN54dUSFY57RdEYLx78qvD7efwhR5nDKWwdsKyMNpSvRt34AQsd41T67ifqgJrwNrpyu9DNtQK5Jm",
  "key28": "5y7QdMJMvppqyp9cAyN8HHHc2bwpFZyCUoEHc6dE6sLxbCtfsegjyLwWxF5rxqtdSVkvJz5epKgHgAYjCVgqPovT",
  "key29": "57iaUUcZapBb8ykV9vttsMmKntwa9hpLASGm8Hqom3jLB9PX64yVBV2xn1X8k9JvaMCW9uXponKbvDLw1FvhYtkM",
  "key30": "6BfAchozRfwygB59cAHwiqqrkwNAPPoZs14VZ9nYTaCPthfZ72agRRyosZ4itvrJq3RMqYjp4GnMhx2Kd7BwuRG",
  "key31": "2rBCiSR689rrwG2QVMTLhcUyk4oPruVUV156myDPULjPeMK77zkaW5oKserq6GR8VfA8Za6dh7WLkTtWjHyJcSxS",
  "key32": "5u66Jyv9sdUMvk8Z4h4BireEk2Wv6SHNHTSXp2JydwWHj65mQENHza6oYRwoCSNHvYQJnckHexMMsGwMa4vMEfNA",
  "key33": "26QwR28XWHXkn4AtvqpVgX1V7PF32vpaqNBsP2twFoFFUdE24U3WP6pFu439fGNUmWUfGQH35tsDhqksZX3EH2w2",
  "key34": "2bRfNex3rejBXNT35Na54WA3LzfZYXKJa4jY2oze8hgvAX43FiLwxLWXcbUi8RAzB4RhE5LGNtbtpA5QWaqUCtDP"
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
