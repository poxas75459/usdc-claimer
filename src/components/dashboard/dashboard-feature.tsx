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
    "636MdNuyygynMeXmunfP74ZjznX9tZvK1KAVJRQN9hfAoie6k22MUte4U4TyFZNoj25C7j6SfwzaQUBtCWJWNF25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzWtMcYLp6tt4tpNaJ7qnBtRGyoikwfkdgTvw5grqkBYyYGiLYB9FucE5XDgz4K3erUfee4p6hVg7NRZyiwrHsC",
  "key1": "sN11FHDHV572x56hvTXGDmSt5kQ1UtxQrxK2ND55yfcGhdmDdTtMWZpCQi3tRAZ3gLmCTVTxbeWYKNUpzmAiece",
  "key2": "9FdDHkJp2mHWM8fHnMBJq3sQdsot8bxQ9eUvLwUxZJA38GrLTh781N4FMq7vuPcZJniTqyCL15gVrJPH3L3WrMX",
  "key3": "Bw3XeAKt7cQX45S3mkDWRcDLAoQoPpSEtNu9FgKwtzzizjGQpzmgZwfAFqZAZsQwpbDHbSvquBbQ7djNwjRAqC5",
  "key4": "2WUd9X3G5uwbNz9Axh4entbNM3g65UKCyBtisbkcb81SNWnF8Xw1hkitrN1Az5c6UbtEPMEcZhqRZQKDCwqpzkcS",
  "key5": "4XUsG2L6qRSDbxU4ZT8xuUmd11ACWByx8x96FCnZaU9YZRMECBiGuBT71CxP2K4XaZE8YMDbGdiwBwefCg3iZTXt",
  "key6": "3hcad6w9GusL5pTncrQHLva481uPL8p3y8MpQxTfZBtH966z5LygUFBEY4EC9sHVtdRQaAJNz18qKfz2FxeaLT1H",
  "key7": "4SCK4TDVVKc7KkqTHdFWEs9XmcMyk3BWAjayt3HAuj2jLi29hwpwvbAJeiNtEbzWoqxaxcT38R13G243UDbMeTJo",
  "key8": "3vwDUG5vRBXv7ZKKEHtZtEcogT1YwJN3Mu6jSQgSYD6aFtrMRHYbnQvATju1zUwvybP3iSKoQkrtGz6rvwzxJ4yr",
  "key9": "cGrdVJXWjw8E4J8fqegkXuMx9RZVWimk941ktNFjEJL7H1Sfp2wmDPeyJWKw5NjVd57hmk8irNPHX6LC92ps1xH",
  "key10": "3UZu2fnF2uaNGameNhGxnZMWm2tGLbRYESxiJXy7DwUSEzY8vQKDXy1Ak5DmGkdF9Ghjmm3kAQ5LB7hkzgmbckTD",
  "key11": "43SMRitAtcaPZwM5A1rnWsHfD66Z4V1UrZCNvNY9wJ8QUW35phKph9MmL6zd9byer2f5N9DYYN8YX9CHVCywhACB",
  "key12": "vmk5cjKnjPEjuVkry7WTFJLt8QXAvWa9bNzKoX4dTRwNLDbU6XBUXJHvJDk23a1xBuhpPC2MHnRL5yqd8nVnWqY",
  "key13": "2EuQjUX6irgVX1a9kbmC51uPegGANHPf6129wroW9Pf5UdPoJQKWpqvZsFFtM4BdJnL247ScfwK5CEQrw1FUdvSr",
  "key14": "NMtjy3BDRFNV6AyXGVAjyLSXvNpw3Wuzz1vmZAQ47rN32P2LBZX4wNQNJuXkdCyFEqvQ9CvXBmUCkrnkBMV9SQm",
  "key15": "2tVdfqpH4odQVYWEFuoh83xy7smB9g9XxSAAx8AVreZnY8M7rWDSdwGK758bqNpYBhbMJVX7unmpjg22x691M59r",
  "key16": "4P7QVdBdkFRctAfuG6GUNgfQgbuwZkxUKbx7tbCsxJBc4eARLoCgBebEQkNxvVuXGnjX6hnevs2AKfBqK7de2e2d",
  "key17": "4TbuVRHybUqU7ppeuENjA4odMcGtgC9fRA5cQgehVtHAWLAmryS1w6nrMr2N2Ep5dgRoDsHyxpx23e2u6acv6VAm",
  "key18": "3f1VUg46SmEAkdaWj4g1S1tttHXq5iED3jzHAJZHPxLrcQWbArWMwubxC3SgbXDBPFTZtm3p7BGzkdzdpBaZmsXg",
  "key19": "3moDRVSJysRLspq5gLwZUYjdWsbSsEuYm7R2ebjQwMM8i593VDkrhoHQaXFzmruGxTiRut3SY8MrefQ1HkjW3Sse",
  "key20": "2cycHq5JMXnR1tc1hNFonEcDNLcHq1RW8NYNfvSZysNtpNeC5kDZNxpKStax9Evhikrr6bpjDpaGB1vJmnfn1EFk",
  "key21": "5pi4od2V7xfCm54mCKtKVc4pSXymDeNtq3zZfpxGBNnMMX21qgUeA46EJtdo66gFWvEv6azpB9MoTwnnroe5UVf",
  "key22": "HzMdbGvMTQo2AMjUr9JrvQUByuX3cmVreHdMMcuvMd5WrdQrR1xp724SnCHsJLfmdsAZNobYaG3JA7BmQ1JTMUb",
  "key23": "4JYVZoCMMW2ZLECts6Kpwm4fUEFvQsHxt9N7tcVSLPPop9z1pJVsL7rQee5dka75d4RUgDvN4MbuhiE6Lr9h1BDp",
  "key24": "ZWwYZcJefH6EQ2zq15HU7eyLMQjcH2dKvptQcxRpdEchxi3r5XmkQdZ5Aydj56kmu4q3qu3VCmRjGfoHfiuBLYk",
  "key25": "5w57whp5zhrkbmdSARW9HH6yFw54tiPcy5izMfbNmVd8PbHe5qnEQjSRXBTjBDXsG6NiZhpCymb3emMUyzWnJs3i",
  "key26": "yqCjtYxZ6EXqHs9tAoBYttyExg5Z49EvMkbGdJrGTHxCis432aQoackQ1kH89SGbw6fnqoThZbbYun12cygmoJc",
  "key27": "2MQTH5Cb6TVEGpbz6CgScFTipTKkddka45ED9uLfrk1YdMzASTtNEnnVsDsJ5gqXFAeesbe3fyEassiSZi69E7yx",
  "key28": "4sGuT9MXXDDw6cRsDRj7X5jbE2DiTExmiEa9zZW3qLxeX3vLQg25gNhezyjWFBwxteLyV9yk6sj6F9p7ALMdvVT4",
  "key29": "5XgLEvvgpiHKjfPDwv1zCc11uX2yF4sBtLodui4XrT3Xh6XaXmPU3zE84jFv5daFCX1bSzaDiNZpSRwQwLeY3kSk",
  "key30": "2Nn6vRzyT3G77n2TdurRRBoRay4ZwXqBNDzgkt53yu8NfAaNi7XkmJuTUys4tmBQxfYrhh5E1kKnWAWTMNWGB5hT",
  "key31": "558MzmEVHmKhxpjLoqcvHRtnT93dvkRUjtdM9AiMMm9FczJaewrdEAJsnepiz2Rvmxh9fDhNK1XUWz3HrtW2Mmug",
  "key32": "3hPynfrLWYo2k6m3LjfmE2sBuLuZjopyqgpFNswnt9SjnjMoKZqS6dMVFpceDvD9Nd4M3MmhWnDz4VU7AKwP9JbT",
  "key33": "5L4MZA1apzGczUDogSk7Fc2pTaCeW7FZ8RWJUwWtdtkAoFEnU2sr4jvi3wudQNdUcNtmSHWxhCAuYbFZt5d3cWFC",
  "key34": "4Y51cTgjVzEoZbMzNrr2HoWDwoGa5SM8vPgNUU2Vqu9Kt77hhVMXQDh6XDQ7J1pgV5MaBeWp4dQnHK3qeTUhECgz",
  "key35": "56gK4uXjdmyYX1ixGmwdwnsjTtA28khAQU54pZWapGoGZSzDThcmd2Z23qF7xdefFsc7f8rrvtHUiCawTq8zCtTT",
  "key36": "4aXFkyiZcgUdZyJE3hf4qGxZV4vDYTK9WYBqX4Hu4hoF36J5ybgj7jZCmyaCt7j8fLxbkHT2npBGq48Ha2eRWc5D",
  "key37": "4J8ar7p1VWnmRQ9bH7zniA22VArEjob3UHA7TV766pzU4WhJudcKtdYpqxbYDETUGCv67eMieJX4xyZsbG3dPcCs",
  "key38": "3SqgoEWBUE94aq8kjDB4YYZusFkvdfxEXRZB3WuWhhM4uLafp3xgcGuaNWyzsnT17Nisx3QYekBX4Q86z9Ptomta",
  "key39": "3yKbD6QHvHWWsbZnSGMMnU5Xfgd624XoksXWUwyLCzM3PpHe8NaSSAZoaVzcQ7YJFmaeAxaRGXj1MyJ7SPHAKWet",
  "key40": "4b8oMZuQyr29LngGLQ7jkSeVPqEXCfjqhKiEEv6QhRdoZj1vCQvUrwFgvJgYXUm4heZLVKrfRR1qha8zWYpyWpwy",
  "key41": "3w2T9Zk1E1om8zMEBFrtyUreaai2YQ6TxmNjsq7ZQ5EZGiXdUscseZTjt3oyfXqRjDwbHfiyKVtAQ632iHKxoVHb",
  "key42": "3dzu7BnMRoG3yBuP82hzeXWS97E13RmqXbJgs2kNsppPjn6JeRtVkAbUYCzA2x9fj2F4xqRqruFRcGXnHy9KHttF",
  "key43": "5Pi5ajDUf2umibvCH1qDJtg2gkMXfiVEMvw35REvQqDhqHb1eHmehbfFbp293Z4xLiE56XKfYSTRXuHZDUBsPJ92",
  "key44": "5bicAikJxqPiJefReHY9eD4vYvwtv3rV4tSrLWN2JhdKQwCRZ2HKqSWYE9gNgYX4Jw8LqECqCVQJuNjNaDvFw5MX"
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
