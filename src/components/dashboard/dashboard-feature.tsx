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
    "2N1dSu6gEsjJxxj3qTAWznuAUXVcTZfUynEnX9iQMiuWm9DJVJySrjDygQpnESX146J8p2bNs1gAzcfsrmnSoxd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22pYz7Q8m5wCNeyrYreXQQfN8Fmj5UHfUUaWo1vB1psqpPq7FaqHywVqipfjBC3EYThVkm4aaATfR6H6aCAFjapj",
  "key1": "2YPUuDXAbFrsZPBfLdDbpUtGQVgvsnXQiCGigBW1GzzqjPq2pXne7EmyGcm2gfNXwHKtxpewvRu1nWgnwwjtppwL",
  "key2": "2pGZkcsC3fGPV8QTZV9mL5grzfmJZqvmzHZCsWy3wy527xwnw1k4M7XEJWYEoJJEPHWWytQnChzeZfWUkjYeT122",
  "key3": "22Mqoe8gcy9ZkPeb6TvzSSwp48E25gBwwZqFY4G9uBd2Yyx1XE844thjNmHXQSntMHUpuWVaPZe8WJuc4r7iC74V",
  "key4": "5Yv4f2UcXwYt2UEudiDcpLSxTBtzY46PJAHsMNGmpT7WfYoj3hJWPRWV5iGWLoSivE8uEZf7TGCi6HBFDa7a4Saw",
  "key5": "5CBp5kFi7y41qyswytonK1he1fdP1PKPN4gG1WZQDKmp8TiV7B1kK84kHxHBfhLd1Wx9hKvL5MLf8dmZoRRK366",
  "key6": "41Aa7y1e8n2CYEZXie7isdvmrzdyHfhFWiFR5VZexA6qkGrmEiqbyMBz56Ane5SZJZFmsaATBHW4tWngh4vFDTex",
  "key7": "wYD3nYgQtZbbbx957X8EWeoFmPzCH21BCdJhrZ8msjqy3aQoSNDEFQPkN6mZu6y5f89H4vzwAJo8nr96tT16uBn",
  "key8": "2yZXv15TiU8WJ9XvC57y4XWgxx9KcgWDmgtqSm1deuh2xFAiTuqQAMmTSnzQXYwnK2tAThU1v97hBNjgVkNGrtBZ",
  "key9": "3puQodvwrhfZcvv8gcFa2sYBeNxziUjecPdXbogpAg741pswD7FTQ6UZHoNk6Med3KK1pgWgHG45CLLYyBi1SZji",
  "key10": "44yhnNqsUk6TEmhUbcN492NtkbWaquhMf6UR2ti5Fpr2pyM2XYSS8eewzLpJQ3soG3UqcKou2VFyhQuECWN3qGNn",
  "key11": "2ohRY2eWuMxnf71Rit4a2SAp6YxpDBnQJwrFPTm6UKWx3KTvsi3dFQ9ioLHbvP7Vkqx6KyH2Xk9hocodEpkB9vGV",
  "key12": "4gboXVb5jaVo3sUSMsdSPUTCwhTmkfLLqiqTUJ9wfhKFoUrPZ4GMrDatCiHjPbwQt71k75JkX2NukkUyCJRjtaGA",
  "key13": "59a4vFnVvwSdxiqjSsue1Dw39JXVzuNdHxYwHQsaburCT4cUA6Jo514BBpnGTHQoky5MiBYjYxw4ZW4nHT9ReSps",
  "key14": "2YxUHMYWgUeWMYPru7aNNwaZ23x7mxS9Be1iuQCgGh8Y84jdujidUyx3EXrahsJcy5vbYJ7ioi4iRseXy6gqpr9L",
  "key15": "3qUaiUSqRjmveBe5JVGvv6WZfT72GHfNpdQJHKVG8f83tYZ6iVGriipSi125z4vV2LjhNXDYeRqaLRunD2vNM6ES",
  "key16": "244wdDSQkwk4tVGvQ1QRKsM5xS3XfGaEcTzcJMAVqHM7TEv68jbu9qXE5zH4aQgZZt8whbSArn1HrPpAhn8MzJz5",
  "key17": "4gu31yJDvS26zmu8SrzMnroFmPXf6gEyrUYqCFkBuzi3opH1EwBQ3MQs1kitsJTUD6y8c6EkDbqTXvgzNWtfgazj",
  "key18": "3CoHXFCvU1X7VNnfTBSpZ2aBFwVdyk2wX7n4G61oKs9E2m3CCmRjdEe4Rk6j2jh4KYw9kYenuAHon7YPdtNzAY64",
  "key19": "2FrdHAdF3Sf1KSisbbmTPZ9L3K7s1JA1pZxfdDKRZFkmaF5zbcDX29ZjixsYJDtzhe487Ty2xBftvJj3hS4uGB6B",
  "key20": "5WwAJntHmgTekbw7N5xiszH8sD4W7nXnyAVY2Ct51v5GeNyE1KxzpYM8Dn23xWBmNJzA3AXikVdDuxs61JMvPdiA",
  "key21": "K3XrcnSixo1jgvbQVrppEJiX3fhHM1FucWBzeNKdH5Mofm85Md1nzNMifpx1ef92ACapLekU7chphsg2o1J4pK2",
  "key22": "2NXLSk8RTjqcFahKVRpmndsUygvr3ZpbMcZZZ1T6fAT5vhZhxNY6F9rJJQ1wJHtbshXpXpYc3pgA5afsL9Q71S9v",
  "key23": "2WhDYLtMztbnNVCPKt631DkwDmYkj3XTMGYFTMBpKiwjPg6tybAF78okqfuLgMamiXx57hgTiMNJxfy7rinxYUne",
  "key24": "38swMarmp1z4kKdvnKbAiYVaohJfjmqw1d96xXFd5edU9UsSXAzzGtxyuDN3NzLEVfTa2WEEcUDbdU5pij9UHxmW",
  "key25": "3NwCyTEo3V5eRtYNzLjeodXDx7pobBbBNokVntszY7BnLwxXTRUTMtATNFz7FkJzQLtcru13EtKBd7fmonYG3DjQ",
  "key26": "4YNc53ZsC4qHYrzD4Ug66HmqvbYcx9F7MTGVZ8LzHjTRBou1A9shuB2xEKDnCuEM2CgpT92z4kKmMBLSAVitSgRH",
  "key27": "2FUFHN6ksXvL1WK2UKBvDUMZ7pSZzmk51cPtQ3SseCtNBuyPXdfzi8JjYiekBXfxt9xMdtkwuddMjdUjPrQzsb8W",
  "key28": "2fynHkH4LHskF41Urnpkb35Sk78YLbZpm58BCTvENDthi3mUvPmesUMVEWdJjRsVvB79AWjc7y4HwQ9YbKd9HN7Q",
  "key29": "3HD52Jd5NeuDuyDjGHQuoo5q6XTEjevxPwKEyAQPKRRG3NLVm2n5w6zj7uipa8QmMSAAkBGoVjxJFG3XBQhVnoi5",
  "key30": "aBqKCaGsFoX2Sqx9F8hJ7oKMEChuPNbGcSjjY8DqbUN8b8p9aFAcwZpkRY7Jsh4GyjARhh71wzKLJqErZ4G3sbj",
  "key31": "4ADYM9kFxf6iEGfYq7qUri9FiUX4YBtPU9MUBqDH4CF9tDJP9hFZyMMawExWH2dX952Atda7fWioDa9b47Ty19P6",
  "key32": "2tiE4sJjDtPnTqCDcW8gpHotd2he6FaHG5Zx9QihUQgqtYRUkYXuaqbuNamtbqFgX2x7LBb2bUBLcLAhnDWrgdCc"
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
