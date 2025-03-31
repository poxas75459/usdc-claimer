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
    "3baurT6JPKdWg5vYJ4EReMRatG92vo7VBCGeftbMRVQCVnd6r3MNmEWiPE32NCpf6238CsrhnYh2UNpsL8sJCy4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32fMT5XWAFAkV8Hka1Qunirg6jBTzfpSP2Dron152JBd9FpWE7cz8bPKmiMFN6DJE4X2ra82WTWfPYAaizFwoEPa",
  "key1": "K3UdVsxCtyRdiWsyJ5bryUa323pmRko1kHdJSrMkcmdduLmnsSMvVD4XcSPQrQykVrATVo8zXpeADo6zJeZABs9",
  "key2": "3GgbFAgXbUjriPysrgSZ474zFWa1CrBNn7LyNCVHvrVeWbFi1eLR9WhVER8PBUcC1Fr9aPN7tYRpqWWoZv5K8Y8D",
  "key3": "2Cp4JrdateeQ68yNEQhVoKHki2LzxFh3uEQZoL8SRowb6znTTZVVr6YwCnGohzr6guj5bUmxYrRRtFoYpBjWpHoL",
  "key4": "3VeoQ3p9ZybdgyhjSuvRGbcm8nieZrS11QKY6V4gozB8UhhNEqaiF5hT6LWjMWVyENyefNxdkkJS77aMpYAGKkXv",
  "key5": "MZSebxAGvPdzzetDpmfjHiBbJHkyRPweAnJNtcYWDnnc7V1256eLZqtPVhNSEQocCKWgApu69SByMZYWpXD83En",
  "key6": "Kmds8wTURy6FY4XDqExba8Tbrgp2oTbuJKyDSuKXo1GF7XPgdLjCwhNLtndimTSruk8TQd29rCpwvLuGfD6zFST",
  "key7": "2rJMV6WtbgxRiqdJnVu5xXnnzTRpKQtXHWYEKF6S6MqR4LDDLqH91v7AQAh5w17TXhUYTj2b3FxNJyeWM9LVfrbo",
  "key8": "3Pnkv9gfNQJTrbujrLsVK2ZrgiWZtczVsWwH4JJLYvVMg34fNRCWHr7Jn11gwoSYN5NYMKaDKYW6t1H4yzsqhG7o",
  "key9": "NR93QBLLSp4KJJ6fRXx7rYGXKq2fUpAkpVUvTd77nsAMm6GyhEG5PEHa2L1qeAPHDrByM7reXbYLwyPzz1Skmwo",
  "key10": "2C6w9ofvVyXrEjE5ARHTUaKA34nz9N77bJLvSe1x12tcx32NMGEA42PUU1mLysgReFYRGRPUnSURPnYmAiQ5KwQq",
  "key11": "3vyp6YSpS448ZBhFUjNRbDM5qzFYqp1NNn2nShALRfY21BRqxkTsejndxT5JfTAdRwVBEA3f6fGUd1ooxMsnJsik",
  "key12": "54gp4c8odjJMrK985p5n2rr2CHDPeGLcXyWsjETkcvKezzu8WKZPsDWB3uQQS6tqnmAmkogVmqqa29YoQZU92K7z",
  "key13": "zSHz7WGaCTYJP5KeNvCLMTzkJWTVBVqdQ8rjBnEgPSjz9ZojDZPMiyLuCesUkyVx1W2dxihwTkRJkxL3R3cKVRG",
  "key14": "2Zt6MRcrcZ287V5iY66k4RJEhGjdhmKWUWHbpw736SvuEnbc3h41bvtFk5yv4PUXStqJaJBBDQfURrVTUwn1Rcqr",
  "key15": "5uHo4HE1TqVE3c5wB5uHCJKYyqjXYhRQHibd3diKRbqvUn6AXrV4wFwSpCG3G6veiHhTbTSs3QjkwGSx78irWicy",
  "key16": "4FT34a1YtK6tKTdU5BrtwPVtFgKBieJvVBEjBcVAHi9g7PFom53hkLtwy7pCEo2JyV5ptHUUB7oSRCj3nqZWUYEQ",
  "key17": "2kK39PsrTBct55ywAtY4DJ7j3NhKeS7sBK5xfLViRq3Sgjd9oWVBZGCS1HtsHcrVwxwg6akEdimw33oVZGeeDJoK",
  "key18": "3cqK3GxLQAMNzeeZsSe5nKuvMePLXR6BVuqbApm2zj97fkJPeatfb8VR6UqQPYS6szVVNsZRkWWrUoFbg7wwLVzS",
  "key19": "kW7fejXHKpEp1rq9ECgv2K99qMHt73jMh8XLjMGMUT4qvAFj5RRPxi1uA6Jx9uQncTXDAUD7fjtKERzmLbm5Cf8",
  "key20": "5FEzbqYmMDwVc38XW76N7b9Cv1ZdFEbXnkEiWW8zWEn7dB8GJ7wb3dewkFkJrR76nr7MqjBeJ3Z6RqENRTkoiiCn",
  "key21": "37uPHBjn1Ry3VSvNLxj3ZPExoftyeBWkMXiom4vkrLdCSJBnMR2b5uxfLVqQWRszEifk3qGSRqoX7snnvaCP9NRK",
  "key22": "3kd2GDgjNYL5y5CEoyDha1Bghme6ifka3GisfzLorthV9iz5RUyTbmfM25htJvsEq2MAkiDfNSMMh7nF5GhVBwir",
  "key23": "4indVDrrppyeauxCBzbbVeT1sMte9eeKcEq8EqEtow7iM6VN2RZdMSkX7HuKL712ToZzLw3AJW2NjhtfDLXfxZtn",
  "key24": "3DKMNKPC5FSwsQRFosSFr8WX5V9jjmmKmJNWK143N6hcCX5ymS6Urrgi3LxWNqzaNSHyryvxyjL5ZCRfLsiHMJxC",
  "key25": "3HNmC7EbNKHbCBLY8WBL4N778aKaABMHeFnwf1mD4AHhXyGBAkvvMFx3oJnMLvezVFfmKrc527W2duAe1PthzN4J",
  "key26": "3tqssVMxzMAyLYbjxMZ2e9q95gnb8oax7YCT8KhhugMGuUPpJxTZvi68DecG2hM5UngjYFMD8QmzB22YNWQUm9ig",
  "key27": "2k3kq7QquRnUbsRARmTiVZk22YS48sCEtaY9SQbjRXAkHHRg3vQ8aKiVvUpH1s5DhKGnx4hzqf4VMoyv7KzBf4Hu",
  "key28": "3zsYC3NHtUESi29xdgQSUNDKQP4wDcN6edu5e654hyaxicHMgYpcFBjc3bdwb63K9SmG4y1qGMFA1pPSVQFgBbhb",
  "key29": "VFoPcJPb64n9gTa2JPJwcKbCMCG81nsf4BKqcAX6MygKnoCwrzkSCZmKPWAA72ZVNLyCUPRBmH9i9JuthRcvxLs",
  "key30": "3J2uywRnbcKMZrTgFwiM6FECWCxzvFF7spVTdaNDFZ36EcNdVvSHSXJ8tyf7MfZ7vjvti6UjXsyaXv93yw6uSv5J",
  "key31": "mkPtgUr3nzS9PLJ8MBRXzQNm5ZbxoATtV4XFGhEbfuXmzUo7cjVxZniDvSi9JRgXFL76CsPntkXY6dEGLd4YZHY",
  "key32": "3eg9HsUtHNNYtaX4p3VLeWbVKxYWZcoXaE7n5EHMrKp4s7ooKsh3AEdCDnPH9iVhjFi2fhFGkG9ZvdtPV9cgFQ3E",
  "key33": "yznch5be7fbja5C4qFvuuXZdkZud2Qw8RYvXbULSE1AqEfGWp441rNijFVPoUBgNTbonwUYy6ygtzJTfrkkCGce",
  "key34": "5kTkuWqfQEmv6ZomMCuemuprBpfGaxgDrVB9HTee2dFWUYdf9dvCNSTLvv6fwiJs6eaBXvhMTSi66nGVngTh8Rex",
  "key35": "SQC4aB8XYMCaNkLHcEnBPEGuLt6DVLXLGScXJ58MsN7TZTu7MyAva54QTHXGWGXaxW6BdDwRXibbCYSkv5KmZKq",
  "key36": "2KJ3AxCDyWDLDbqAvXwiyfMbYDZEU931KGkWoPVC5TMzEMxEW3NhKo9PjpRCxHSK1TA74QFYwzkRZtUMmKSy7khn",
  "key37": "5pvZ6AAvahErxCLenm56scDV1pffmemqAJgechCTBn21Zbz1SUd22gYKKrTXKCfPniTqLFQeg34HaXYBWMptatB7",
  "key38": "4NQtWagw5tVxFSgt6oMXo6qsiMYRyWEQKFMGPHg6ghh7n7mjWFhfxCfP6Rp5PYZ5AnMabsjcPftZr9n7j3hD8B1N"
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
