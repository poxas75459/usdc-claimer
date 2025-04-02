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
    "3gbZWwgQqpwmeNXRGFZoz9EnHYxhcCKRJcEJdMndhHa1F2Yairs5M6xiMFxBm9H7R2DKrDEtYFnc4rvfK4zhvh7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFgtUGWv6YJ69LSsxFmJnB7Rzh6mYjfuHcebrwfu9B5W6ADEyWF4bNkkc3xhJYywXN7RBzZ4VnjxCDJd37ZjVAx",
  "key1": "3cJAVboCgVNrywX52VwtbscuCyn2qzFJn4hJ8yFcSL7twnSumUaL8CZZjCWwnUUX9J42HN72LDpz5Fg33vp67tCD",
  "key2": "yJncBxRoy6igPQUdYKmCTL7k8JkMLTPa1gqQQDKYdJUaJwFk1GYKVqrBrPcdH7LbBehRXWdzsWEjDhs6Ut4TGcN",
  "key3": "Q79XBi8kuNGPdHMevCgFYsibQZVsCh6NY6F6YgbbdpSnwsJzXdfakQpzKL428a5A3DPHsfXjGsffJKMTezpPqyV",
  "key4": "5GGzyW4Q33W9KPtA4hSNcvjFFK8DVz1yqf4oynuiztqCiSCmiS4EebUxEMzxgsKKKdym1rFVeSmgbYZKGYNhPExf",
  "key5": "2HEtB5p4ajdvKF3THadhNRdBt8CemSpeY7dWiETM6gDWDveqzzP4rpPqdeqPLeAMqyu7ZvqbVy3VesgmHYGwN8Y",
  "key6": "ydSgdCz7Jw2DpAaAP8gNHvEbNr2iJh24Zi6e4uqMQgjXys2ijCWkNEsrswweyYaMRKTGghm9rSnuqT4ymYLVbYK",
  "key7": "Cw9jzMHwG33kgagXPhBVUndS1ZfBwZK3V6Hm7ce33MDVhSaxUd69xZqgWsU3GEWg1W5AtbLiUk8jwULARwjpBy5",
  "key8": "2t3csthabbMLbwZxdVSkHsRXKd4LMtAuMaNxfmeuKefmTcWp8uF1rVmWCcWGy8cV7vf3m7KrBDicPWZo35AdtjDq",
  "key9": "2ea5n9dRAr8hZSBATGbgD73B1BJgWg89PiLeKV8QGTf55ntgqHwpet3d6SzmaMyu929CshFf78VCsW6aAGwuU7ZM",
  "key10": "ykkLjrKEyzsvrQ2SeLZstx9ve8tFKHY5ykXXqupmLBfabe9eRWpkP5bWii9pPosi5ud8Nt8LW96vozqF8GkcZpE",
  "key11": "5Leiee9XQ9YqZjThf3Lb5vFn63LVswLLSMUvHTGrv2yFbMCBbbTZpXgQvehzYu1xfngGQuTUHt4RmWZzwQ7rqAuT",
  "key12": "4EpdBQUqNNwKVzeyVVWisidZpnnmRgWV2y8bHpMYM8qBF84G3CvYxRrpEoYXevcZBwbn7hwh4Z8YpA1JMCvLPz2x",
  "key13": "2doW4BJ7oLEreZyTg6DJy2DTrp2hX7u85ja7AwzXc2ohjW3KKJVPMEocZzdDPFU8rHKQ3tvEg49SZkXxYKVRm4wo",
  "key14": "5vPyUaz4WejSs3NQnwkx82U1YqwdLtnprWFUPnYxCHtBA3tasBRhWYq3iRZ5PTrGrCbu5MPsp7xcjw6iUsgKnFWZ",
  "key15": "5GFUqgP6Q4Ae2arvtumHQTTMgHHykbonPDo3EF5G8wGhvMS6iqT7cmYdFrqznLKvCBYDC8B55TMmz2gi45zLdfKL",
  "key16": "25vp63dUGwKRbhQq8jthZijrvfFYuzoisyTF8ixQzqiPmuGyhWp2zJSL4XZ8fGKtPWx1UBWuVRNURrS3Kv6jdGdp",
  "key17": "47bE4XUr5NJ8din7ZJbY1XmcFbLR4ZUAxs52D9QPo2JNuGDXWhT1hWFXrsHZTh2DEZTSxsemkdERbWVvFDv4umSG",
  "key18": "5Nast8qLy8HbwYXHaM5WHeBaFvS9T6VYQgsHBon83uQaRn3MPjpDJwHWEQibqYVqPGMcaYpAddNWbticxNbTbWzN",
  "key19": "WzDCseVPrAnKFpM9h1CoL2En9vKiCj4cCRjputJ4EWhdVr1WXMDwPndWjjTmGi27FHLmF46DVnvqCrB8syuAbiF",
  "key20": "3iMPXMWCQoBStyT7HL6QxVQxtpXx1ctNh2LW62yAAAkPRQhpzMfJs16ek3GxvySXRJSsaCBLcyd75jcXPmba4MyP",
  "key21": "3nMoKgZCZ2DbeR45NaTwY4rMgFQefGz57AdQC3Qb3EDiYXPQec8dBiMxG55i785R8qgsnQ9JFa7WELVeVbokSGWo",
  "key22": "3jdKj5TzjCEKYTYqX8jrXWwq7t2W5uQ4bWTAWTWBDcDcUbAA4raN6tKkWiA6zZ9CLFwSC7dJpPxuCQLj4z3VHirA",
  "key23": "5GvDDWgNtXUFFBSf4ZdCEodRPR9xdL1NinuSHdVFBCtgdnzNYqBoVhns23YpAGA1oMjE1TCVKU7fu6fLbSC22gU6",
  "key24": "3FQGrsrXXDRfoiTKivMJZTQk2DotoVwSBx7jSyXwsxPcNyruoYgJf952QvxstRTTRz5Prcn3FS5AJ4Nd35738yQw",
  "key25": "3yxnQmsoKd2LkV3V9V8qd8rddvvVLniamtAkrAnoUU7XSiSpJLQtUemwVftNpDPwfA6B8Bs9TYj4SWcJz55UYTA",
  "key26": "3WaXY2sxsfmdHi3Amp8k6LWmEk1WnkXnLcsRkgeuEcU5ej8SaVexXX1RQ1r3Nxr6TQSHD1mtZsNrPSQpEBCrh8f4",
  "key27": "4uwtMXUBX8gRLyUqE1gJ9eFRZbhwHjTzLoHLCuAy1hhPKVPYAaRT6rU2hN7Kj8UFqGz2T9jCP3wLr91VNDQ4dubv",
  "key28": "2DZjYMWpFP6EY8e5rj6MGuNuwExcTL1ydhHefM9LJcAqToeKw3iVUKGxjrK83DaM75y7igkTyvUayjdgzo9GaLPQ",
  "key29": "5fuwxgpacG86PkxBMu7TDeSa26BAayRhgQcKiVGCjskwFmsQpJy9DMKvW6QNMCh7trcomQ37mhkuBQgyrXYDLFs9",
  "key30": "2mHd81NPgbdYVzZUErFSDRMCVcnHhH2C7bYrCB3rgeBun4kT7wonojWAx7cvpMbkW9oQ1YWRkfx77pesHbMeRTad",
  "key31": "3LJvA61ZA1A4KY1fHFmnkr2PuwSQDQPorhziLtHXbNL6okTbS2pUWuwVWK8fMJDnBuZqrBWBVKQqqHBD3stXR6QK",
  "key32": "22Jd7J1nEaFMBggmWAm3Wmnbwyok44ET7EkEqyZDigXVBBVGaAZMZzF8vQA21YUzwQEL7o721yz3SGZEw8TY1UZr",
  "key33": "5smHWZmhSFn5BpVRArgq91WoRfX36Fg5YV7XhTw1F2tkKKqDbEaY5rMGmbWmCpJ51PXMpArZ7vrAdDHbZn6C2kCw",
  "key34": "3LadVab1SVxGr2xW9AWVsTLF8GgkeVeXF8ety3zQuT8zktm2NZFWShwp6WLwB5xEDNXAxLUYah4aZRPzmqMq4y8V",
  "key35": "5eTU177ysCLB1QWE1Pr5q5iWMswkGVYqcWe3KjkWGS2Nz8x1aBxttMzH91SxQnyrEQhnU2fpM3UiUv1fgegUQ7Cy",
  "key36": "QrmDHyBy4C9rSJD2DtrfRdkBpNVrvgw9Srk6F4MvwJo8AV1obfWNQrY8AShHdP3C1ptuKpBvdros9vGQLBUtrFg",
  "key37": "5ZccfKw4nUQu3ayt3XUeNt3En3T1hE6kHxJhCHeCRf9abv5gjgiFLvQ5VFefeqYUFAinP8CReh6h9DA39muSaPwR",
  "key38": "5nJrNM8WGtf8nNQ5JqYMyU2VwHQcpUxd23iJ8VeKYHVCRogw4qv6j1FdzqY6JxFpv92NmD5nDyuGRmSrz2uZStjW",
  "key39": "2Ayab8LLSrgbpa7Pq9xuRzrJVJN46EEV8At2WjiXML6CU4hw3hi6F9mhP5y8ZVuCwQHLAa3v4HkWkGWwfiCJZHgz",
  "key40": "SRm5S5xbrWnhPbvTWiSy6iibx5ncUSvAVrNR1KCzKrx27v47hEbrFG4cHEVffPG3xTpTe9PCLrTqMDDCwjEnESY",
  "key41": "umQogxfnqhEoeJwyGxPpT3sQDFyF1gaA9LrPF5GosYDrXSrVUNod6e15teVzndLzSkySzSqGsR4MKP5yC58ji8x",
  "key42": "2gVu5jJoawuxyJeQfLMSR8xbk1uSnPRU4HWbaBN4aPybji5QWQExxo2XGcWZ6xbsw9z1oZZeQ1vSzruwfqdYDVyC",
  "key43": "z999oUkTsvhojibHBftRotNMu8DndH85gbnb76aoU84zytHZGmtgwst2QgvQqkgvz9eJ67QMNwJ1FXkCoCE5h9i"
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
