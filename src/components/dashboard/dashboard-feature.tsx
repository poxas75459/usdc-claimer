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
    "4sFmDi4QQP7F7UjZnuvPgQhYGjfnpQvrAB8bYUdognCWJZmGTxvCy6yUpdmycChc8Cgj6RFvhywNzfLtC4WH2M95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jVAAvNJ1qUYaY7pvb5q5YWCCWDA24Xz9ksCUiC4YRYXb5Y2MkjpRveTVg4yzm4d4dX8mBCmfJkwLo6zSfoCiq3x",
  "key1": "4rqCRP7vaqUBc148KDa6nSew9uGqFs1fYM8wY1EsRShnCCQZvFQGGjWmYqaNCcJdxBooyiE5JTRGhugNons2Cwc9",
  "key2": "2wSPeG6VKAtShk7HMzS3WQ9NrKGnYPTcjUTcWN57U1phm76tH9wgrwdBrUqPGKwzCBca5JG4nqDNoEDFXVAAWAvC",
  "key3": "3ymtGwuPrQ8jBS94goK6WUKH89QmadksWiL22upQ7i432AyFiomJkjrFFnM9yBUDzxCXmmUA1yPfySyhHPgKvTAq",
  "key4": "5YoRt6PCBPo4owMUTEGoXZQ12w8DjtGiy6WGZ12qWt5DGrccTfEXqbtYTdoWDaBWKicDijbKZzwSgYNmUtMZx9Kp",
  "key5": "61BH5Hvvmw94sSQ1brnyMav251BPR8zV7YNCsApTCwAquXwHjcs4AuQrGggHXfeAYKsiLp2B3pujSiHAXm8xLsWH",
  "key6": "61zhV7y6h72Td4SvEhcw3LdSLvZ7LPNFxoWxhbuJNReKkXDpNJE13PCq8prVvmhybqBcDBCEyRZFVdCLBAU9GAuv",
  "key7": "jFwGF5hawYauFKkZ9pE9xZknSAmtQDvva348y9xovNERdazt8CoCbaGqo1pWCu8DiRTyX1ZXbzDFNqBihudMwJu",
  "key8": "61NTeBaJDYj1woC5AMw6McMvfKkEUEVyXrMxro3bqhB1VFJGgCnUhbsPrM3hyQ8YdrQrkBC9DmCvsXhwo6pJBh9k",
  "key9": "3Ru1QXnBf2uRrpDAhGVRjjoBkxSuBmtbvNKSPmpjYekDaStPvATLJEocQMpNwKbNfC9f83UpFsYDj6PmJPNSF4pC",
  "key10": "3pVbXBWiJmyYWqBt8VMeu1A2rDbv8DmjEor9E9ozi1xHJZ6CY237oJeNrugyYmsjmrxGYsdYJqZa6cTNedRSdqWg",
  "key11": "5CNWQUkEWp9KYto49VuSf9RubgvK1wjjgjyBtgL3eZ8kRJcXCUXUBLXDPM8MGNRBoi6jXtwXke78Y4ZdA5HqC43u",
  "key12": "5FUH6h7YB7ETWgYCZQf2JaAAu7QmyC6jZQappr5WcBatjPBLohsu3CB7eENa4ubYxnZ3BpxMjc4hzzHzL7aRqu3P",
  "key13": "27vtNXxgrAuk7Yzi1qiBLiGVPNQT7km9GUnMU1tRtizggRJpJXLPjboZu8WkCH2oASbnLj7tMoEwfj8UdL9VsnhJ",
  "key14": "fA1a4fHviXKji4Xvj8dCSiJEbqv2qFKt8uHgkrpx1CUDM6DonBFW8kMFawFftKrm3fANE8eTH8Zjr8TUzED14Jt",
  "key15": "51LgZAiPsDVw8EebcCStfm3Avvjh3XX5aVKHzvcu6BTwWDvpu7b1gSviqTcNeG5uTTtxGDjz6Euju3MjYQrW4HaX",
  "key16": "AcoJWvvJAM38wozjvHU7ac8PAC7kEV7jgxQgPRTHEBWsX6bBhr2fSZrLjvvMENL6f9zu4VMwzxC9RDFfGYAN8p4",
  "key17": "3rng8QihZefHpaTg6etQPqixEeoKq4MvJectJYzhv2iQAgXBNA9Yj34ghfzk4g7q99oPmchhqLkv659F3tpvGbP5",
  "key18": "4Bh44MZBRcRqo8PThoG8xoyscYSRXdKoYJEy4Ma5RLRQGg5DoYfoDS3pxsEk6oyupV9Pt1FFoLQRAQmryt8i4WX9",
  "key19": "4yt8fTeWSG1XexNDq6i2zTZmmm4H9HZDNGR3LB7JAobqXvPXTA8KGTNHbw1u2SmHXSTFpyF7pR5DemrPQTbAbs2C",
  "key20": "AqrFZ4Z56iV4vKRXdRXzBs7JPjSac4yWCgtMm3DCBdCKnLR9hNfvkfuuP5P9dbCqt6x11YSUgWp2VHhbjHnVwGJ",
  "key21": "5Y8RUXtGwxjRtohUd2pgmXNsgBz1f8w5qweeWCcNU75g9TQY8TiAaovoqeGMrnnez51n3vTkoNKDjJPAMfdjUo3u",
  "key22": "2mi6YDJnjBV2KsEoJUv3AMLeto2tPVCWsA1qrvP3pgt8d8rDF8Fd9wgAVurBgJE54zT8gtnMYhWp5JfmVoURiTG",
  "key23": "5uNNJtB8TfPc7W4HGTfhpkBSvpHaWMiV2273h3ns7FA3Wt7MSgoajYgbs7iDHgg1giKXmNv4SM7nAvwhhAtJSYAD",
  "key24": "6v3gEkkSqR6BJuA9PoRZGZEWiVajCp2Bi5iXF4X4WD4bvL2RwcGAhNXNHbFRjS471hzPmjsD3FmXQezKtydsy7j",
  "key25": "61JK1F2AXB875E8qgjgyqWAW2fTuhKncByxpNH6eLdDj7a9gZ7R6XTeRurFjYaNX1tXBuEgRMJcTpQ3hXWjBRCGP",
  "key26": "4w67nCpTUL483Kc6stAS9wRLGh2eYNz3boCSa23DLosn66fCufRitjWum4DcFnvsBQx5KvBeUM8cE41hC6GS1bqt",
  "key27": "n6NBYyFHHzaEZVtP3ho9Ft1DRzNbiCR9jzTsUZK7xwiYodLnnnRJLR68uhNiaq3yvwWuxPjbvvwbwey3Wsu8Biz",
  "key28": "7ufngjHHYmfTuNFLBBRsQn7hChJChjb569tc8LRdnc4ZVS5cuW2VByvVUvJioj9REj8yEd41mzdUDp14qDkbUtC",
  "key29": "3gSD39hpTUhNoHzKebnU62C7GCYJsTYZzx4jNrF1JfLbEdPat2dV4jQmnb3HLvudvKPTTQVQk2ez1zLLATaEr9i1",
  "key30": "2ReBdwo4Si9xzhkVnpSxHYBRZ6Yns7jxvwrMkS3NYEG3jeQJUu9jDWXb7uKSufksRNoUAfQ6Ajxbxe35uonfBY4N",
  "key31": "3vixhYU2SAfzPJzqmzK5LFiKdZKK7br2qKy8w8yKeLgY65zuz6qBNvKNJteayqnaessHFLRqNvN9X8jWABExutTF",
  "key32": "457ohb3YTDBvZXCDFprscCEzFQo74rqug7qjJD3reirKb8siBoWcYXHbGKjX4KggJJYU3asZpkwWgFtAS1wNmNdi",
  "key33": "2wm6rs5mw4oud9SCYtWYid7NUstt9wCKMHipVn3u5K6HDFuyQTb1Mv4Dbwu6izig9ngJ6ZbX8hksDhTZ24xH1DTN",
  "key34": "572GWJHAwgWP5yfgAKefqiQgWHYdENMQAQGQ28YragHJXQk1fA9ybcDcuKJtrvN9XuKDocM4QwMsAdVnDvKa5XyA",
  "key35": "3P2tBJimsoEBgthACqc6Vnk2AbAJ9juaq6YtBYqZcuxP2JWe5ghG3R11SPDwSFQ2DsFjVFgg5mgA7pvjQzARhwF6",
  "key36": "YDWAq1SUTzWhkkNi8ugEuvTJSBUsA1L6L4q28VK5JfrqCKdFEDFSALBsd6sLYXnMuymSHFzsMFPqaZhpLqkr7i7",
  "key37": "2G7bK2eD4kx5NxunuBBbStXAzg9E1oZrVePYWtpJW1bHbvNSYfXRxkrsAMZf7kco1XphijS2UaABozo31KJVG7Fp",
  "key38": "9mazr1mwPiUvvpDFxbrvLYFt4iwYxVKFedzVx6cZK6CA5kDmpkfWrFiJP2QEi9fomeYuPFuASHmmXpj5WyChGCS",
  "key39": "rDDbTvXHAqT8p1eaxSd3eqAKLzq6Hkugkwi4vaNLdfaezknyQqxofJUmTCvEGcS7p9rFbfyUJ6L2eH6QoMC2Et9"
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
