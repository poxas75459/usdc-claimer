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
    "4nnGb5tAvMGjVhGBkL5H8voXCVJ6wqrwtLUyWkdX2vd4C1ffBk8t32fAUfYx8FcCgxfDDHiAGRmZWvdWZ6soqKhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8nB1Y5tAmWb1D6wErBYFuQY1QMuVrqLzkgGsTJyTdZs7bNR2KjVscwBvq8mMBCSDnrFT5wnqKZD2JCRudukYsT",
  "key1": "65a4mCF4HjyYaxmgfGgLPJFxA6thLu4ed43iGVy1BD4aJrnoDeG3yABifEpntkiQNuMWTXACAZnW51yAuaSAGWrs",
  "key2": "4Zsv15CQAFUvysSBk42aY7woKgNGkxs31NFMpaZozUN9rAfCfqMys9B17r8BYy49ocyte2nKFkyeKsYCieBNNuoj",
  "key3": "3N6MbfMMMKKXcmLPNyUQXaUNZ6jmVm4yw4yVC5e3Hj37i2z4jANskYU2KuxAyVwE6E56f1DuWaMwNC7EPXdsdbxZ",
  "key4": "5o53dK4ANYNnHAQevKZpLN3kES1zNw4C7B1674iaBqyLuPAD6RZC2nHkFXuuCSpCrrPB1CrKXD7kz4Dot7Q78qTB",
  "key5": "59Nk1MDxp7D8Pi96f3XHQ597kx7qzBhQcy17pvygRZivsAYKBvJaxaBE9upwdHowwJFyBQYoXtcn4agQ1r6jMq54",
  "key6": "4zBCY8dn65eP8UK5b7A5EW4DuX3psVS2HFGJ37mHeHQX7WXtSxR7vHr1MyjaEKXPqjGzdeDyiPWrbdvkDA8vkyYq",
  "key7": "Wdf56vEUWoTbPjCSuDbst7ReEvWbYvFVLZHFr1rzLmPt8CP3wp669KX7QTY3DvPKBcFhGs9xMdxcNM7qwSEm7jj",
  "key8": "3bPUxLJzLKKzVQFKQt432vGa2EXbXzPG5SG4CMxfGx5NBvXaFJMg6FCmQ1CWuv4bjGyLCuqoVj7MwQN7c2FTiM6D",
  "key9": "3yz1fHphGayq6Dcg2xnNhvHGkzg12kc3Ns3A63VH7rXurZUuhW6EN7pLPVEq5V6zckj3YGyQQ14bgjP2o57J6qkB",
  "key10": "JNmo11HTaYB2q6n9XF6RwYp5wnM6PUuzP88VCnY9FG7kjx2S7MRtT6DtyWqhrrL237rcS48mu2kF89DbSZph6nP",
  "key11": "4G5zJgJ5PBfdfZqyFGTnkNxsTxiPf39hMxgiagMgK9caT7Y7zhEVxUuBZyLVEZhDyRmvjkR7yLUabehMeuWtNCcA",
  "key12": "2DeWJeqp2RJUNseVhQPhEtBzS6mJi3Kin2ZE76kAgYDU4pdKdKetSWSAEsrqNZhj2mGzJh7MFmhobAMdPNEAYXxK",
  "key13": "GV7gsgBJs39PH6mNJRYya12nUD3AQrxxt4ogGiuymucHKLcaQuTrHuKTfa8gWuRJ94NiCzvwBZT9uGiCmhf71pv",
  "key14": "5nkj9PYJFHzwQeH8q73EMtWqB4micCxgVFH7VUSSsuZzUBwk43a7pQtU3Mx2m8FLUwrZ6PZnycj2Dt4qKSnsVq5Y",
  "key15": "2Cy5y2Dur8wTeg2VyRN2Fc8hzAwPWD7BXUYVdDEVwBNakRbebosuYf3eT8J7WEHXGdyT14atKiq21gta13mezR4o",
  "key16": "2Vzh2zFLR7jBWv7RmzKMf9qCHEJRCBptcY1XwoEhQDzpgH8Yp7hTEURKxsvSjho63zWWiztZhCPkrdXirZdGUNvB",
  "key17": "4zJn74z72CWibFeu83FHpuSJqMwm2MiNQBjgr4b2ss9wFWJgwRQZMDbLvwYhgJCgUAbW8hSaYXujWE8GFcApuZ7X",
  "key18": "2SefkNvMX1MCVBBRhBADThphURkkrXeoYcGsgCL1A9HKpp5jtFgpswcQCex6Qzb2kaGWHXqZgqTCXdzsfNhben1R",
  "key19": "45xmdpGLTqwrjmJhd7c58y3pDs6EiwRKbrPXv2aXwwMAwW4pDGr7NkUQ2wSM9hgFnCbLNPQ2NDsWAMDnidzL9TUz",
  "key20": "4PtTMEuY89LTu3uXa8xAk4crDtg2phjmXFrcMA4anpxVHSGUwBwVYUAJg5fcerfCuWKGFNS4fefW7oEp7UJmsjiA",
  "key21": "2GrJpHLL54bKNri4EPu5bEUarWHaBoUzsDvfdpNADoG3HVSiwy6wv7HreV6q6MsrJmd7nEjf5L9yLpB3iPwHdCP4",
  "key22": "3FC419th4j7UGNWD9t2aMwwJ7SxL5ZKYFnwwGdv2VnkDbXDoULu7MqvKQx23cVH3i88xpVVPAuev1HydZUGrdV4Y",
  "key23": "5UVkEs4nrxPzG3AYEvTUpfdeep81w1ZCez5f8apKp9hNRNT9pdmVcHZ26Dkhx7FcUYUeu94sj8YncntFowtrn2Qt",
  "key24": "2LKz3k6zgbG5xcbVpXKkxEGwp7fxXarML9FxPsKHLxHot5dn1HJrGVpeF22txr761sx2iHxv6TSWSaP89fN342Nv",
  "key25": "H6qYgeu6V3Wuqw34iCKYovuACnxkvLvUQYAvAZPYHiDbQmy5HRe3kJRhgXYU8BoLf1ykppdqB8pzrgYNVDuNfVa",
  "key26": "5zMGabNwmsW2FNrjWNJxNjTjSusDinDNJ2hLqofgLH8ebrjhYoFhPx69q6LUu4MbSD4cWvvWoN91bQSAUtUHSaKn",
  "key27": "5e36NSvYKPEiT2famHYx6ee2Hqf8JPiQ19zLb4a4HH62AFx9hjWeTXyS4xwPuDfuKwzsNjYHQDU1Uz17tkWom7hQ",
  "key28": "3eB7jSkudg11SPPRhbH2RzAccppqNJEZqikr1UW11uYp8KaqbXjiJ9vWyzy8rpYUjwxyJ3heboDbMr7HuSQyvprY",
  "key29": "2nadBCkgEzhWZUYxCBywmxTzcnbRA2Xsxb3Gg9DPbZebvphWMk4EzASXy2SMGrT4nq26B64Lu5hi9saVKg6seBSp",
  "key30": "3TkKpoRjqpxTzgcpsKZz3qbvR8ivZDPt5LxRtwEzZw93NXvgMetC7t6kf3TW8dXeEp37nn4Y8xwhXQFpVRmDj1V9",
  "key31": "2a8LpuQjcNJmJyazgr2DqDdV4UQphQaFHZUaPkCUX817QZE7rogdzvi5MWdNMy5XG5zVUKFrfykdxEiiHPXzerVn",
  "key32": "5vUkGvhJdCcGThjCQYHECgwCaApYKjyettsrHqbVRPvf915CFzpDMwNXd198HzRneLk9jKik65oucWFPv5JF3wK8",
  "key33": "351U8T2qfoZDika17cXFhzgmd63svz63ZCovLH1JyoCHLKLUbg3PCHnRMD5F4yCCejZVkP9yDjaMCjPMZCQQi9s4",
  "key34": "qkMdKn91CjJgTdtMc77wNVe4SFt6rRwpKABkpKaMBuCGASA6KEqkWEE4wpRq4XjxPZHDSVvQdsFSmCJmyZad8vm",
  "key35": "3QFPR7qkpmZJxWi7UhkphaHMwvJYGU1EPXCgCHDsVZpVA7t7zi7mxFqKT9i8pJ71TQvvLn4bXHeNUTuC28vTT2Md",
  "key36": "4X5f8wNzbpHCxHhtdz5scq6QWnJ9XH792uNLZEBXvdJ4o7ow46YohWZzgUbqjzPaSsDohz8smoC1WQZBs4txLSUJ",
  "key37": "4RW2cBVdqFCnwMyzBLbtSqkfTbFYyK3x9qeFQxCY9hEoY35ANPqvMuBN2Xk9NCDTrbDimiRxineEM7UUJ3ED7nn3",
  "key38": "2rJGMuPWvKZY5sQCjWXXsvSNpE7ZhLVrc9hqMRD67X9cry8pztfTK9iTCK9eqP2ubhxiAxUiUaV7EDfQTHpAmTbJ",
  "key39": "4ZK1ZRV9U8qucEZLzT9B5fZRzinPVpznMNzvf4f7EY2QKNr58huQyP17p4ebr6edsyKa3xRTMXxgN68jbREJCZsX",
  "key40": "5qSxJUfKakdFatySm5vuHFQ9QZnhmhdWeP2reqMRY8go1ZTqeSF4wT5ok99uACVU9YGEtHzvR1Fp9P9gfU1Ln8ji",
  "key41": "5FjGq3GmH3vpCvENH5pMPn8CCw4XGefDvD1RJ8Vz4orr9G1tscHUkfSEf3r2ng31WkSXovRfzs6sfEssuNPBrxfQ",
  "key42": "4n3jBEvVxwbCeFfLoDVn4QKxZMeUfjaeJpYtiV3nLNg2gA5cQSbQ1XZras7GhdEqmYiKAYZpkDaLVZvg5WrAGrXj",
  "key43": "3SZihvHwFXPwxzL1x9XL5j1mkc683iSCpiuaprDfMpQnNYmuKTrijEr5CQPySi184iUrNx3xy9ePJytLDBmvtxK9",
  "key44": "ftixZu924H9WcjPFq3La9R2EVyC5fQuUFcE6BpKjpWhTXMCanPobxYzygr5V5Lm24VWDa1mqRZr5TBgBWaBkHiK"
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
