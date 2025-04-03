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
    "3iY2UB9N6QBT4isLhpUnf3Lpfh7HQmYyr9uZRXwsXJV5waF98zGR9bCHNn5z7PWZNn2EzhhrWGarzP73gcYZGErH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icBzSYW9eprCJvJ2VpguhxY5P8VPfdF74BuHeLsrfUXt1raXRRyPscyot5Uxa3FyV61UoQGGfPmJMk94R4sB358",
  "key1": "64iPzSMhThUz1pbjtRDN4Nd1n1nV9tRzhAN8HbXKrozyzBgESZj8KRcH6nJuNX5sFvsNEiaatXvspr7EFMMQ2aj9",
  "key2": "2zAvUZoZRprw7GhZ5u5F9o1Rk6XA6jpmSRBfmmMzAEqPhes7AL5JBGeq2SGdfgdbTdL5cXedXpBz7QVAoEM9KdU3",
  "key3": "5Cu8xFbyDKHSFxCGMEst2vHPru2jZuMFcdQGw2a84tJRYh7nJHZEErfWjbCnzttbupkMwLZu6sXKkmcYGahyL4LF",
  "key4": "2yhxDbX4vHMTHXSL1a7oxKT6GQnr59H1pQgEewEUufPkPg6q9wtMJBFRFae3nxKFxhXobxffKFidGmdoYLGfdqDW",
  "key5": "3zq9k53216F8QEFhstyjYAhv7P54Uezcm5DEA34PDLcrL1vtZu8mrfKvevgUpV691u62rg8jgqdHjQYJCjuks86C",
  "key6": "4qBKd64SnSQ6QfsKqGf5s2NHrBxX6vT7Xiuye2gcN8aam7pch3QFLWX3HNKokhb1p6HtbYvUd2GFXpriMpiyypn7",
  "key7": "56aK1uq6eBdbYchFeN72CaeCy7rgw4sAo1tm3GyeEmd1EUkhZJmcki8PwyyqrYnrSEZg2swDHuNfk533dQhJYY5q",
  "key8": "zV68M7zD8UM8QJD8i2Wunoh2K7zKcaqqn1Q6q9TsmBrMqFB7DeC2eEj3WGfwRrqCf5w8wVscBeZSuAcNpDiFYAj",
  "key9": "4TNoj6uMaqfw5CRAotF4V63rj7zRwtHyQLdGnQLDaUZ2wqm9tb4qrAVHL1gLdancq8s2sB5LKRh4sdtaqEEWh1qY",
  "key10": "29gisvXypjZ1PwBFn5R5ek7JKxhKbnxGdR5te2nZFJ56L7NsyQcZbAwcbX28fGu2KYpvQZfgh6HN11Y1JV6TK3Zx",
  "key11": "5drcqu5wkGvSPdqG8xRL8FQgqZ7oxYeg2yf1uD8cPpAJpjPmdAiExQRoekgKXYUQaPLcpArzffE4ChTmZLg1B3a",
  "key12": "4kqvuSfsK5n3ezXfhdctUqNX5pxPmcx7Za76LudJ2CtybzLPZaQy8CH92Bq67DYzPC8yvSXsUqSN8ikyztbxPNWJ",
  "key13": "2ponwPnhCMzdFhuQC9eYD41SQMdZ14QmF8NPV1cLdGvLNRiGbBdetMjuagaVg83FWkxZZtyrAN7jhpswNurt3FY5",
  "key14": "3y99bzUWaLH71xB6tPQiG53yiXzfN8PexFG6dej64Q9iNYGZnE9kKcYwzh111ebjbJLNwuAMkKa5SnUuuPprpAkA",
  "key15": "2gFUrZjfMdfyx8e92jHB8188ehrFsqNb8EwNYYUJqsEphRfnHBPNeCxGaGpqpri8xuFucR53Aj7142Q5u34GfU1G",
  "key16": "12xvRRZd55SS6sqarV8FqrKVHo5S9UDLwjwn5jfuM5PjN9LRUSwPezsSoBHxarMUX5pkcqTWFt4zS7nUbnMCqRc",
  "key17": "i6kFG7BEAyqBYGgReA6j1ap8MCD7o11kkbBEoWjCnFmUA7qezpTr9fuRJ7ZpsU9RFDHEmNcvstnGajcbssN4Law",
  "key18": "53hramcTSTDTJnkvsNvojy8kx7oRnnXR7vjzz1EKHmrGSXv5wrkFkC9pe1Jgcpv6ABXthqP77SMUxCmW9Jya7fXi",
  "key19": "2QoTno2GL9hGCCwtC87cJJaUPpWjn9FJ3udCZGRNazfSzUeE1NQXj1bVzzEvDwuA8xCkRtowMZ8EaSpeSE7VAHur",
  "key20": "2PAX6WvfMe16dWEjPp4TDLtwECaD6JGQbwnWJBCGGgQVAuXnovh3eBHMJPSRrvFeFC5gMRu5J698SRZdM4mAZebj",
  "key21": "5FqKoq8gRE6bsJyRQC2TBVQ8mNH2qZYifMGyyiTPQ3JMnLqnoTSvEnuox7TeWDS6dkvAczMWp3dmYyQ6MDJLw9je",
  "key22": "57rgxhUoio4N481ekjrtqAHEyD2PwPGNLA78qS8Lsrfbc9HEzFJbuHsAfWEm7ex3RzT9cxwiznMYxAvEB4ej72Gy",
  "key23": "3E2KGZ3zLSWwvTFY7LavUvJpPzDDphWC6hAUodxB8nQAM8T5KjgP9iKShMkv48vAMjoCtSWCc1P5wXHKcN85b968",
  "key24": "5bwdMezoU2p9bmA33exdq6coBoCpejLEdymrqocCnJ98hNBVn9tY3HTwWKC32MH24K2P3rafYsckp9nQpDp6XaLu"
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
