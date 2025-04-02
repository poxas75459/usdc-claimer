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
    "3NNFJGx5mwnLkevbM1ckLTCh4vSDzgBDE1FfB1EiLBoRXnGz5d15f1BrPvKwAuQSsGxn4e8mNRzKaysfUXYUgYbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46AcBfWktU9zdfma1xpzPGfu5DfHgAyspjiK5vgtY2VGVKjKWftWSH2FSaj6yZn1GGW9kx6oueBtbLYuHrhuX2hU",
  "key1": "67h9ALWGMRZUYGE1Gc4cVuG85dRTz4vXetu3Pjr4Qkyc51STMwGu5ze1DpAJVKHSkTw3EbtPYoBYFF4L5h9GaThP",
  "key2": "4KD7WpRCW1CiWy794cegEUA6yf2XzCR69SQTLGytrshfigxK1bCn5Ap8HpWN6JRsy7rFFRLmQiRznsozYgy5Y7vv",
  "key3": "4kK4uRCUtTDGAnsm18rYGXvpcKpCLtESVeVHhCjTkLPQpreKUkpYhkMoBz232Qg8XmnHKVZgh3rW1MnmoEEsuwzg",
  "key4": "6ddEF4ZKPUiTwPAQ58gxJrKhBic4HBXWfnNyQczJ3FXwQZVmMKbPbL8z8s7PDG3U64tHpa82AX2sgqmAS8V4v1F",
  "key5": "21ovTUo1EKMhnNAa4q4sLfNzvU9ouVnHSUT16zb9XbZATH8NbPFpbXwQP9yPDsJVgkVMPAvv2EZBhJ9qE2MbkGNu",
  "key6": "Y5wNS97hwzmByoctiMjVvE6q2L5S47VyG2TDJtndopCRmkMp4R1geQx9tqr4S3SFbZegqAMKm2isygg6MYdMCqT",
  "key7": "q54qNVqGxFTuj1garPmJmanrFWZ3Z73wj21B9TJHCpMPd4kwCBk1FfbPcoWwanXab1UoLTXmevgA3qSDSi8dcNm",
  "key8": "2zrnBAnE7UiNomjnSzaFEySVHApRPUyL18vzdVeS2wnNAaMf3zmUFaGz1b2T4VPkFUT7uSkQDZVCdnVt6v3Jq4p1",
  "key9": "4z73ydCoSwmesCEZWX1NkhcSRV7G8tDPaNFwhPqXrjj1qmAXNq2Wmc6ZBPcByGGVHCbK4zrjphbVJUmJJCKYmijN",
  "key10": "5p38kXSdNRpVsT3N6HDyse85ig59zybe75YeduCNsPrRgUJ1LRCNzHtdBVAsRkZxuthEnQfsoTC1VXHfaBtxJdKb",
  "key11": "3xfKsnwRenpLZcPF3fr7o4xngTdh14VKE6ARHWEVeYjH9VTK1WJBwrpCtudRqH765gzhyN7E6jDxsjo7MK3EDtcd",
  "key12": "3oRKBUvJ1XESsHarRfPjUyAhVFkjPrGZ3UkkAVrFrjWh7XKLyhap2vysfrtLhCcCm1j4FEYRKAVQniqiGKZH4hBp",
  "key13": "RuzefMQtvg9VZuygo2bRwLVwfVePV7Pmp8eVyGPFp1tL5egJYYwEVUixL3sy8RfycJtHki3hiQS5rxJpSkGNBMe",
  "key14": "2LABfs8a794wn4tKfWfd5og125VdPdF7RW65kZSpoTBenDK1o1HG55rPPUfWsKV8TcwchcXdBhE9kuT1xqDxTSs2",
  "key15": "qx41y3YQhQxxw9wG4QRo39PwEVdF1CnpZWcCd9Y8ah74cfQ9LqxBdoRdr2Nt597WxDDbvaeMSZrPRtKSVVamb3h",
  "key16": "imwdkN8GhZJ3wVuBCnVRRmeStFE4aPtNAMXWXg8pxC4g5janoRiMi2tidNVHJuqGxj8iK9kefYBdDoQH4RHVPwZ",
  "key17": "ArekqXa4sPKm1huTuVdaU2FTSy1ZRXvcz1Tj6iXjGiFV2EhUMf85eGdWCTuuvoQtSWkv3455ScJQPsukE6uhgJG",
  "key18": "5t85aPNPJCzGq9TFqkNn6aNgEzxgQkUk1UVwr8pbeSQR83ivxXcvYtumBoUTXx3ajus49gqVeu3ej7cpNvTeUAcs",
  "key19": "5xdUr5HEE99VsF9mXGwoaAy1T9ZGvFtgcsdRrdocZX5vcLkqSdyAS2uUSJ3Vx2jLVyzRtBrDDJsqJp79qNBqGy7",
  "key20": "2AQ4YH6qP3jNPh6gcrDW7ACd9mRvUajc1jdKZypibnQ5aQwZhzr3jbJeYvaYLUdwwS71mhZjnKnqv9KAxXJZtBz9",
  "key21": "4Rk48ACqXdyEzL13XuLxAGcwzRmSwL3YYoseMx5JSopq4G2ZEYUdBMAcDubogxV61EfNGtnJLERx4N79DXMXo7bM",
  "key22": "vxVm7sVHfywnZ3cGuTx96GQWXrYCziZvWRgkHboN7sFuXPkfAFKDmTGfMQDa1iaWm9FHMSQ2imT5V2mQaJNSgSN",
  "key23": "35huRuz4qFevbqbG5XAx84xy4epuwuRDvk9gHKfnSw3bfNmoz1vWfeecBcxTEgenkwZfuJSxQ3VCwxMT6PSd9pK5",
  "key24": "62dMk8uEVPAm2c9puBxgsmBFc2SFKRhR3uFjorAd8F8z7haVKY2dFKnGhXLhN8QA9K5V7iVFTaEE3pRg32o8AJFG",
  "key25": "24fEmupCPYhzvPZBiBmwat1DRPjoNvtqqbtUiQGeNfHzFRbWyWnUHjBGHGfCvwALcy6LWbhXdxCsQAfDn3dAiMfN",
  "key26": "48LXQ3LTfVWQpaCgdE33PXmJjBLXQXXMwkHVr8jZ7rrekNJ5bhTHMRZVvhP4YYrBQmDPQ64nXL7bqkPwnYEbL3up",
  "key27": "4JidPUwKd76t98wL6D1Cwf9iPS9ouKRpkMGXuzBPnzxPgzfE9VpX5d3dh9PLf6ye6KvFTpLoCoL73GspXBC6u5Db",
  "key28": "hGNoB8BdudCQHw9RawBb4MU9hWFFuAh1uESkiSviL85KxztHw43S1xwGE639FaYUq98iwUN1ox6abH1bWXQAeBq",
  "key29": "3sJBDGEVFAyqiZ1iueLJY3zNUujSnr55DYuhFq4DmAAakoThi6TrWnxfDQwrStuzzotoxD7jTsF9LndM5CGxDVZU",
  "key30": "5hirNurtPHiEQtYtyvJSVc96fegpjkEoQNNTV8yho6Pg6ZAdKR7APRyyHW3qMHtHmSgG53KRf61a4Ff5KLfBV97T"
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
