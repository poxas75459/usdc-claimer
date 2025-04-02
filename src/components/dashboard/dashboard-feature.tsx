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
    "4hEVx1T8QFJPEFAe2kiJggQTy4KfqUoaNtDevxrcMmUrPprxNqDHrz7hS5uegoSoPKoxgohSyU2rfru7mXnorhTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmXMzAU5vS72krfrUefMgEuXXdSHFaip8sKfCAo2DSi2nNewZ3xqzZpaoUddD9rtzu4uDVLmjZhz7YKNs9sAJNJ",
  "key1": "3LoN73BRCeq294S4ujw9EURHSskiTcadumdnrtNQTbm9G3sMWQDTGw2yAB9NymjcYV3DSTWLbejR9SP8tZDD4pJx",
  "key2": "4ULuSEmJC2TZQsV6i6yevg4bExYevN3TmqmnsyrqzvmBZAXg3bP5jypiRpSH6bQ7WKyiXmZMo6sTPaFHT9e9yS24",
  "key3": "fvSJ8A6e14wH9CXo6VQu8mt7fnETUUhpFepBZ3Z5xJQp14fFuLHYUfqeDPJ3coL4Wnem1aBRH18AXNu7FKkprZV",
  "key4": "5NtzUmJbwoeGmSfYexC7rX523Tgb1S4Da31yeMywnHb9xQdVUeagRPBnCrecRWWRgVQFyxDRFvW9kGZxMv7fR48a",
  "key5": "3iiAQrM6tm7U3ztxkFgUmCBVt5b5c3BmRU64WDMRUEuWgh7qWDUSDRzb8emVyNb7JACD8KR6Sj2BDG7FpZCKhDgd",
  "key6": "3vs5yEjYvQFxhCRd3ucPQsC3yM9XxHxNN1CPuXKgwGdXsrk1t6eoi4yLR6fa7v9f8TAFeHN5kV39gRFXjM7GaYm4",
  "key7": "1GiVUBsnE4PMjwPdtYXYE5d8X2wDf6kkw79XkunHrBqUEBP2nbk9zUPSQtbNZtRQCjLkWkAp6sGDMqoVL5UQM8u",
  "key8": "4tsZaniijz4WQN4VNKUyNPrHj8n1tDkADUQgv8X2K82pG5kBUXdBRytA4gmXjCXar3aZPsMjFKm3NogECkcFpVVe",
  "key9": "2zbtdES9pfMPRUPTo4thTmeqmGLNqGsypJbtq5yGteaK5YCSDBVxgAQDGWn9BaZPDiAgwn5a9rXZtEmf5FkgN3K8",
  "key10": "ePpA5LBRzfQcXj7sDSoWz23WCFDVNHjN4kg1y6G9h158A2WN7b3zboV6bZDg3cPi39dFTbmpQ5wGYZMb5domJAW",
  "key11": "kpDFn2TS6dyGELwgoakgq1C9DJMjJeSRR7Sbm5Rff4rJdfYEXSfJe2sbTEHjpi2VfnJkwKDtXAPi9meYbi7axM6",
  "key12": "4pJU2ATXovrmxKHoTVVhEBbcxMEqBCof7oQBY4LPRMMKw6admq45KFdCW4dXUUKYyKqGxYjzQoUad8bA8tnbikdE",
  "key13": "5xzEdX9zc4QJJAvX5sZdvsi1rJJ4WWhHx9tx616hevoKTXvunpf5qWmMkSc75wWBqhYJxmVNgKy3ytbJWCZu7pW3",
  "key14": "47Lupf4hUFB5His4HbLZbTTg5qUCoBQ8uu1SGRtV9XqS1A4C8knYbo4zxhULspkHqWCyiMmezV6txMCUKuC8cSRX",
  "key15": "3Aewk7cESEkTeQ4YnHebkqxU4MtgddvuHZbrsCXiHM8ziYLWP7giU323LehEPcuJHadertUS3uJ1FbD8iXfZzRsU",
  "key16": "5ePt62AaBDJzd2X1i5hSnyw2tSKR6pKzLYvbRRkx8NE4T552hJTJTZjVWvwxMPNwAtW8n3HLX5VNSneh9nE7P6Eg",
  "key17": "4m8Ru4hWeoFBQBdDJzHn48rnTGaz9azgF3BovMc42HcK8aU96ceuH7MM1uWpWEYDSL47otYdTvYdjGPdFsz1v1mU",
  "key18": "2XkNdPsX71p8yjJWU6oZWFjkoBYz2THAqQur2vcXNsSTaMjgYZ57iswy4k5eoaWZVCbMkj4zypFe5y2iGdzAj3Te",
  "key19": "53KAmjiZ6SwaKBGgnDkQvxwKmZ7xLi2UKZhqS8HnxzP4HkJTps6G6qqBbqvciQuToaGwGZnqDBwVb5mjhoHafH2i",
  "key20": "1W8QUihVaA2KQ263g6wtKEFBPV4s5JWg2wE7aGG6PUFvVL2zbXNFXqDLA2HEmkPpCfj41qbEgpdS77W5vBbg2PP",
  "key21": "3V8Hnaw3Y3DxuwZc9iF9Yo9nqS1be46fzG2mo2hj553cbcnayYqxEmjK5QQtGeBdmaM9u1dAt5JXypsat82jn3TA",
  "key22": "2YGveLRN5Vuxpja3hwMPED9dAaSLMzXpAsXNNqh4L22x8fjiZiFJqe1At4vP4jMqpPrJ23dWcA2CVaDbWqyRCBgU",
  "key23": "2nptUyZRzfJvcWgG8wR4RUcXNdeqfJfRHWAbRw7rSytW5aH6zUVqfbHEkhBnTphg5ehjLJ4otpsJR51FN5zsNbrR",
  "key24": "2asNeosE5Z6kN1vx75tjD5ohvgpgnNcZyRgNmNx6kQvffzENxqVfryoCKxGDgLsPh1t7T1XLk8cSRPdDBEt6q68y",
  "key25": "rMiz6cQU8kuCTr3DiPq9tMbSLwnv5PpsgPcUxPVpWdu3nuXAfzZ8Q8grELjVHkBCFJZWLG2scx8DW7itEq5fipq",
  "key26": "5jAN8XnwEPuXFsWZnFq2sVB2WjDqerJ1hHr8ykMgn6UfozytLig4mTkYz9ekj7xxRPi2VmDew7ncMXxxrbiocLP7",
  "key27": "4KrwotXSpWwPnmotuAb3eKKQN4qYiUbuJ6upjydkCZuebZiXe18uVMsLWkvxjxKQq4R3VTQXtEKDeqLdo3wW3nVQ",
  "key28": "5AikzpS6KetFLK2hrvc1eQqxWfCKeVm9dEcFkz2jaLnSwfLBetX8Y9VYFK4UPqhgoXCERxNLE6MnCXWsHATqeDVF",
  "key29": "3dcoBnBEhH1f3eGUjxJFAB65LqCQYezDckNrnRWKyDaWNAPKUAnEeeuhVdRguem3MbPMdaVUhkgKziATmSTTCUPj",
  "key30": "35QiJzVGT6zwFcLDR9XHG9n93yStcAtTaBDJWWjFpf8kuW12ZqskPpRpz7Dp2jYYGsivRE6YydCUeV5CpCyCsKSJ",
  "key31": "2Abw2xNFKeYA8LRbXDcTGskEPFcED755XUxeFE2NetkSggikPaMKUXjWUiRiysYXFafFWnN4e3zB6BtpdrY9e5T3",
  "key32": "239hzFJYEh7SWqU1Y2CykLVh4dzTXirn5AE3AE29AqKGTTkAh2gKX2YJskmNg8xSB58nn2iMBvbBTdPaA6xGRQDj",
  "key33": "2jqpqPN9xZ5PaZv4Kb6vMRZU362s6zv2veWxSGP9meJ1RrizCvAyZz7LnRiRndN9LQTQDzw35Vb6oGEFubaZ6RkM"
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
