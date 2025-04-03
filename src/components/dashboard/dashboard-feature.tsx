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
    "5btAZLHeoRf162VVFTw8ceYx3y5tCsQDKiEQTBqJT31HppVAwpxLjiP1iKwVjZVSCRsf4fcgWc3vYQZMbDYij8X6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eF3E8iuJRSUM3bjYSCRHYRuCT8djRR98y4vrEcN93YGjaFNReHCAZeaSrRFKsPSdH145EGQo8b4dSb2kWn4bGtz",
  "key1": "5EVqqFBEJz1bGUewjhYdPgy7FbSYgXKVtYku2Cm2TE2EKGk4ePFAmq3FyviU89CCEgSVHrzDa4Phg3QsYp5qXdmi",
  "key2": "5ZPXPLFZz9oajJbdbGZX5vnqdiycZqQKZHq35Vuk46jhAYHcaYfwbk6hQXpabXyVzt8V9dp6hWVosidmZmSKwzna",
  "key3": "g873Yda5Qx5YBTUdMb4SquoaHaUg5BPc7tfmTnYsJVJVpZUDhASqvBi65MzSdkPuy4NCSbtiGq3Gg5MFiWHNNWe",
  "key4": "671MdAaVimYezSW4NJB3rKRhpeB1j9UDWNF8NoYYiyuxNKZvPdqsGJviVnitkqfnbJ2QeGzZWn6DLyU2xHR6hgA6",
  "key5": "wbgwvrr34guBDmUARx4trsJNNYkTs95LKNPJktS6F94APDHhC1wqpocCTWpkgwGiYpGfFTWmYSU3AZqoZHqQRr9",
  "key6": "4JZ6zN5z6YUPPx7YwDFj3mBd4wjNQu89bJp3UM7geFZtHdJMXRLePpVcTgH3g7xSHcgH3ci7renxXeJeupuDDGi9",
  "key7": "5AZC2CstLsV7qHj4AybyfwbeZDsDGUgPM2pGmxkYvPMtWscdxqv9hgw9x2rLcanhv4jDP8LRLVXkP5hj9Jy66zmB",
  "key8": "t3hVbknvrqKJp5VeSNLhmThpnBHZUXywzjRSxehcuLNnyW3F6azutnSPaqzg8HpGfaL2VdAf3oigYcvyKKXYTrm",
  "key9": "39F1Xs6oyfzQbdfAi3WhptaF2QxZvFfwFFhArYqS3ipBtt9awPvwcbEXAP7sk42rUvKdM1tNdz5HQoC7n3fjAM12",
  "key10": "MNrY5ptAdcFV43gyv8JYDMhNTCotKrHHgMnuad12K2oGQumXon73eoqsBXio1aLB7pYxVCShmkELLEkUyuiTaug",
  "key11": "5VNJjEixnEDcPRxEqBP1ypdP5NZXWcKAbeuWwPKab6Vs4ARAzCj4jdVfWGFPbHvbnHFpon37WSxQqb9crAUeZQ5B",
  "key12": "PWYhKtQMHksSU9Q4FxzSC3j8rt7pBLZZTbJmw9AdqTTUninU6A7umo5QNU7Qo4fsSY9gdacpqFcyCpW5VYkAVN9",
  "key13": "4vJmAQUGfxaudLrrEEsPeFoXrQQ1WdPZJLHMVQNYHdwyRSLV8JtScio1T7evD8FeWrLFndxcJvQdtqPjMDYy6fDS",
  "key14": "sUYmhdQUV37jxokk1bbaan6TpmnZaYpEobsyrodL9mBLvWb27hnGEneZbTk1PS9ncDBaa9dn3i9SxvSyVpmPnUY",
  "key15": "2YRE2BVUUShw5yUYYgMW7Vpogf5YmWj2vz6AB7d233rEGrtYVj81bdJxvo1Rjn62BGnmdaSr5a7vnGCzJuhZvN2T",
  "key16": "mUtNfom1mosr7UcYQweiiWvGeqZMaHSWNkwLAkPUAHTekrz9tJ23WP4ksVwWhkEdFTpCMsQo3xanxxFnusB3BKf",
  "key17": "3tUxABzWzjTqtymqZBtDmuPx5jcdDdaxXoGdFqNENKFcrdKH6VLf4o3THCFvo5ziiDCumrJc35CpgMBMbv6GJRZn",
  "key18": "3nsXod3Ro7RzkyvW5cHU5jvpu1KPfqSJMNUiVYRvhnaZi1mv7rDTqKBv8yuYYe2sdAtCtmUoQ5mShuv8aeTQmK6N",
  "key19": "5eXs5NN15wDGkLLRVkjT6SiiQMZtghqH7t7izznXAhKBHEm8xgA2p9TEMEecMt4jMdN6wUYn3aKUd9aBzhtVqh9s",
  "key20": "4RphWP5iCZ4SSGQS8U2uSrHE9n7U7CduCY29r15QGbJncjN4Z5ZLjLoQQHwuXzNcmE54FjuXh2p1dWxnFdHCWZ8b",
  "key21": "3VDUy9pMZYPfSEGSSVWLw7gQZWK6hK2SQhDWg74SBENR135nyzp53cnwvhRnf4x9Hz1AYfHet8PUTrXfmrntYcZM",
  "key22": "54ZnqbN5b3ycXj27fcRAuY8pDFGnP6vWtDj3ef5Ff6cB6cVpKvs3VhLqtgQDhVhQkPWb5f77nrdtCACCpKtD2VR5",
  "key23": "xyZLaob3WXwBfAFDm74uMACCvFnXQrT8KkQambLxaVajsRmLFhfKiNB7QetRqvCvzsvhx6NkmqhLWRYFPzicUtW",
  "key24": "4LTjdtDzC98JepX498u4t26DhcbZ4zcq5CRyqdpywuiVLjhG5KuEwNwEkjh3LuR9hBW6Huumb8iy1GabWGhCQUU8",
  "key25": "FLrNjX3H7b76WiAn1oxUxbt1rMq77DHyk3XtKKqt6LbRrJ2Z2yHBJ2dU7fYRE3RBSw1ScKnfJ2JBd5DQumNbvph",
  "key26": "3L9JzKHn2eTAtDXPqfVJRJqM4zmfxmVkAQDG83GwxawzbZcEMPdNc3HQSdy9teTB495pDQd6pNt8WWNPuwnBrDFk",
  "key27": "3PNv3G7JKjJnQiQXR55ryjgeFBp3ZaFmuBdekBkfwSfRjYD2zzC2eekCEn3fAySnT1V42aUh2du2v3T7iBu4yiho",
  "key28": "2xz1LgbZViGjgF1xvjEjqXszssEcNqBaAePw3XRFG9tvwGkZ1fj8a94Sc1B77YEtLrAJvCE4bymz1TZUWx8npCSw",
  "key29": "4r9NZpyUGH4VxHqusFAS1dX3JrF6hJa3NYWrHjeopvESQPrb972q1bEtFKP1HoLWf7urXDbiNYXxRkNE5RgzWjwW",
  "key30": "2R96JZcB6oCcPHYqFG8CGJpWgXFzGVdceCZggZP1DjAdU4KASWyvvhyUEuoeyN4P7mNVDzcpvoXUfPUWvE8Lz4ES",
  "key31": "ukSH6xMQJajBvFTKuvjLJfHoZeTivd2TuS39rDPuQBB79jGcgBSMCBYUC7zLQ9G1kBkN1Gg1Xjq1jVekrXkujw8",
  "key32": "3d2y93Pn2LkypBcPpw2oyRt15pfPCv7TX545QYfgGVBinawtCdy5apHR6cAVgiLt9QmEeDDiZAtvtBFgxXA6ojuT",
  "key33": "7Gb9yNJjQeefwS1N1ttmpQVXZCoJQcdb4XnKeQiEBvvFXVFV9xGx4jn13JGfP4Djfj3NAoVsNawZtLCH6G3Y9YY",
  "key34": "3bBW52nR5vwKXRBur4yopegctCophwHhfZp5JCbpLKkh6KKidw79DwGw13iUL2DZH4VmNKg1fv4gt1KfYQ13JPFf",
  "key35": "ETnfH2XZAjpPXxoYgW8JV5nPNzj4af27obJjUFwFTPJ7sjfQBPhdMgwtVoamrP36nT7C1R9QW47QWfwfKWa2Ez5",
  "key36": "66sbpGW99GjGJ7BBeMz4De2YXzEMfJNvES522v2pE6uo74g2PUdFRQLTtcmbYX9nPUiBsnD7TFpajfYor1SR6PxX",
  "key37": "24oT9HVGGR1maxaKAWkCWRC7pjqfawAvCM3r64gg8gWcSMeYZCGc7N51rTzTkUm4h1S9g7B8WnBZvNcj6LSvUFCf",
  "key38": "3ao92aTZQzrAirFcNfbCtW4bjuvbGN6SXwKULaqL9NSpzo1sBBW9FdczU5735VRCbzSB87dx9eyg7D1KjQ377jJZ",
  "key39": "cW3hyhy8mPW4wZTgErajRhEp2D7wYkw85ezVBoZhPgGa423Wk7g5yMkbUbEkwpgoGUM1Jga1NHE3ZWS3kfGpHog",
  "key40": "2qcEAZNxvMuXAazchkGbsXZjWyCeMezFZRprYCZzmKna31EmHvg2CNdG6WWQqwuYKkgx13Q32NZYboEja3a4ze4Y",
  "key41": "GMhDqTnC7eZ9cNxsUbZk5oWKMxxErP4EsMNM7uRVp2UigRhtAL6yhAVVduATajpdUQQU5t7brV9bLHNSx2NYoka",
  "key42": "3Ww5LbysQtgt5qbgPBQi9PifVZLLLns5syVNWWcHfSDnVe6uiMmNW9QjKAmt9Xyr2ExrDGhuDNyLWn362BFXF2wN",
  "key43": "3X9nQcNr7FTUwMoNvE5W4nxZM1U4j7KugZQBvXYUe2HAQNhw5iEx4hyASr6qSjzvUQTNHnebf2oHX46YhSR2UPu1",
  "key44": "66dqf7tQ8cXWtVASAzZSpKtNZC7oHUNKstZWzTVgLsXoWyf1Eta1CwPVnWv4bdjDqp7A8HdPR3Z1yjzvmzEBbn7b",
  "key45": "67LwemxF7NqD1w1hYe65hPG4B4tuqsj7AfYRTuZanXkWFRAcEyjsC7HrUiHAD7uF8HhtQXoJgAjR2TiftyuwogXk",
  "key46": "285TLCDLRY2CiFS93wj8yS8We8NQWGeYVFHn1i8krNsUmVAvvuHcM5kPhHeeD7WpSzfy2yCMnr6Bucdjrtgx5ovp",
  "key47": "3VXFp5WDCufjBej3U7Vh96Vv9J5c4g4i5z4eRVELbeU3HTV1v3dbMvJ4rZLzfZkuEy37frKYoD6xnzFL64FXWSjw",
  "key48": "2XCqhyqMf2G8z4gCXjENNG9MNtAwZZh2gvy6TNkd2u2HQRWMYeQiKbT2dFzYYyrQhTUjwGAUDxb4SAamo2LJQeFN"
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
