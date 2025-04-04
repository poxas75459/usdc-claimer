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
    "2GTqqpLuqQPDfW3WBJQ6kVRN3SivrN1estNgZCSFM6NsUjc96FWQ8wc8jHmcqTcZjfPypvUrp8hKRcNKX4wy2fQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqoUnjgXahcdSczk8LdmobpQnfmVgc96fM85hQP8dFxVZtK4ZqUriRPbx36ELLvn4Ytnq7QVgqXPGdkqEE59G2g",
  "key1": "2BhSFHFt8ytY1Vw1KHGNu2C4mFoqvz6QpS8esnyh59dVWXs9sEGRBRviAo7Xnudo1vgAif7VNhwoTDaDTVoD4vHG",
  "key2": "3if6HbJYkxybVvnQ6DUuDMJhWywkFieZ3M29ZKjrMQSsahju62evLkod29WLB5ijJqN2a5PKNvMGG5JSUSgeTM54",
  "key3": "3jBKWejXoWerhDLWNaeDAKKkNQqkYEWuCqi88nqjz43xnSrQFjavr87fvfQMNA2rT5G1PVdWr2g5YHVikjutxnvU",
  "key4": "4JBZSeyqoJKJviCfHaiSXKf1AtN6dNtVchMdDk7yuFBoE7K7tTibL7xy4CQEnpCsJE8CW7EcSMDQ2iqhKx7Q1HeY",
  "key5": "41KTidnFt1PghQDsk5B6TMEgW7zeS93Mg3h1QNwumD28JRAUo7BbRJK8v3GcQ588wtG8pmJmj3hsBvne2yG94G13",
  "key6": "2Na4rfTUpCmTxNypjYkbfN7PCn3CCscfmtKKk6hQ5sa2DEtuT5KCX6uW6uGEJbA8zMYjve8Ks9CMnW7YoReBka7E",
  "key7": "5PZVUF4UrBL1QkVtwRtfzwtpwvStai9dPiW5PriLgAJfiJSfaNFvNvNBkuRNf5udGTpSRzDkqaApV8DAb8Yn9v5E",
  "key8": "2k5GaQ2Lp2Kx61fmJRZAh5sfFV8dtsfhyXKEn4c1poSuDsDdNwnUeTB5hEgYZtc6kSEPwykQz4VAia8DjtEhtou5",
  "key9": "tPe5wk1UWjkKdadrQUf8dDPsdJ6BCRQJP9GxjohtryWbc6hNJsB76jFsMDj5m4bV4TVnikbgochY226XUQjWdU7",
  "key10": "5xGuRB1WPQhwYfzDvgFSAvpnNKs9PU5Cysk9Aao3V61RK2Hk3jF4HjpBDLFgHPJgkM2sUaKo1y3L3hvyAuePrM8q",
  "key11": "eppdRHr56ExLvf4GfybwCHU7p3SYUApfVGy4aDHaPiy5FdSvhn52vMFsa6ymYVYDctccnCzT67sAzZFjPDVK3sY",
  "key12": "5DoiYy1oEHpifxUkQ53cVtCo2MEy7S9kGA3YT2r1ww1QU94EyWzGbdvW6tqA3LdwKPt5m1AGkZk1JnRqSSyrPrss",
  "key13": "3HUcyZnrCfSyCd7xPxiSSRqSdCk5uEsMnKfjz8o8g8vksiVCDHce8VktehowGVWmn53zoosYQXMPStNK2e3Kzq2P",
  "key14": "2qkbV6BvESDGoinQxB2swc4d6UHpFqpHAxs2zjN4E67iiV8comexKgLrZfW7jgqNHT22rMhLsdUy1WSoJptRQkUX",
  "key15": "2MGkzW5UWTguBwFnLi1GLGmcR5BamRZp5W1mFdBunNyTkisikhKk43Z7NFAQG6Wo1Rm6eh1Vixo7T5FUy9EsfDt9",
  "key16": "5uLhYcEXDRRL5rAo3TiQrBu3VT9hX9JkkjFpDNF1L8bPyuwaeJS5ZSnsd6xqtvwf1YWfG8AydNi3cqPW24kam77q",
  "key17": "2WJMX2MSURn1MLVhdU5VLajhLpE3bpS6jw2yWVhfTcZzyoonWjtaP4unCkVX6zFPsdfZJnBuegdiusP7UUNofbMP",
  "key18": "4JNLGy4wgSnXUGPjLUhwngBFdPfWhQWJrbPf16yrMziTw5J1nN92xMkibeuo4zR7yCGnPD2j1Ci8TTeHT3fFdS1B",
  "key19": "5JYcRFFgvpt4fsu382CCXnaqWRT8mvWTzZpsPoHKkqNjoiVyXLeNxdiyaNeMssKR715ARwUqj2szqGTbHFu5chWJ",
  "key20": "4q7vGn2pNkwxfKZ5dAHessUyjspNnt2e8Fu6AmJvqPQfkfjLzGCFjchsnpQYCTHhQddS9wpCvARgtYetqyxEX4A1",
  "key21": "3HbvVJn2r6BdYkgpxGLzJKymCnn48P6Q8obTF5xwDBeWKYuK9CxHYMdVoDBzWvCwDAmS2VLXXo5ztyFVxBHEDF9B",
  "key22": "3veDabxviaDnjvMhCegTtp8y1VSi616qtWA3vmGD9wgp7qPRfxKSeNh3oMEbktECvC1nEDLBxokfCUdDdY842Xzx",
  "key23": "5GizLQfxkqW5MRY5kCKPJHXF4e5JXMJj8h9AoQBeExr93tR6SWDjX5yyaH5EUNpKFwZkziVRC2iAtiYFQSzdWLxh",
  "key24": "XqDZ2TFNcHzB9hNSEvSmUjbswCq12wUuVjkFEw162SAZ5Wus6S4LABxujuf6xdB7XQre79cSi7E4Hk59H1S2qR7",
  "key25": "yc257DoXhvw72CfbYGrPVju3WD8VJYRN5DKaEnjbFxP29mofcnUx9WyUmx22kNAudty2jWhcuZHMVqPx8NxAKTK",
  "key26": "3qUKvx2otbcc832nf49yL3PXJo1vUvXHS8tU35QS5izkvekTEDTaFncVQrE6NMcwvkMJwarZr38Zgsbyhqq6Ezkf",
  "key27": "35o8hjh5GqM3w8a6aUEMr8tW8ty3yu7jYwcx4uSVg49hBfrbBZURH7JNiPNB4q9qy8ri1ZCVfbqzoX9FEBNLTgqL",
  "key28": "53Ljvu5yBcCRtZX58hDbrCthJSKfc6GNLPkHTi6EowsGmZY98XSHYuxpA567FfgnkiRQfdSZkxms3joabnUx1uvV",
  "key29": "45WRMfZWLy1TExJmbaNStvCsYxZKJLWKYon4ZKTBsmx3HHez6FDXT4YKQFFjhoFxXzrEXktZuXkJZ12AFVByjge8",
  "key30": "4UwVUVrxNzZwf32QR7jHs3gCSoZ4A53fpbfBHKvZsQfKw8ytn2XMNxBRCPb32mfyMEgnj28sqVE4x2x8Qudm2NNY",
  "key31": "2ann3qYzRvUVU8gPDrw38BW8iFpjMfkEkEyxDM5QM1924r7MU7cEoJ9kmfqzPZby9NEqKcHSKBJbRyAAkA8vkjUe",
  "key32": "3BFd7TVffeEiqohst1gQWBqHM1qkzQwWTnxQ5Msdt4pjPjWDzCC5UbE3eJpZa8adg8w4C5WGFdeq68Sngvy7Qvs5",
  "key33": "T1ofTBMp5HrpEaRqnafvoxpNZAyaf8HuUDjAgkcfkGW1wBWbrupymAEQwRjv91hAuzuAXwCzx4gNxwiPsq7vvNg"
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
