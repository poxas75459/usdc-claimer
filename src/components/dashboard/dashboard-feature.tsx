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
    "3F8SXQPqTtxMWHit7tAYX7cshuakUtrSee2aP9jm9nDoVuVU79wTC5xkjYPFpJtYtLCWzh1Uo6CEvZdQPVDKQCE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wZEi6VYBzEb2Vde2hEXYLS71c37vN7idn3RSFEcUUEdc3Vmmrrc9SnHbpV5cZQTc6Sttta4kvzFEijWdRs4xcVX",
  "key1": "Gs7nCYa4J3FxDJ2XkMfP2tnNAAM9dxoRXH7199BiPB9SLr2MZN5HzDULnQaj1Lbz3Qmr8zitD3xnaX9oeKsufc8",
  "key2": "2qA1nbSrW42SnDdTtXVGyidmLt57EvVSXqsWSLa9uSjvFCLy5xdyBpCrxbJvrQ3SSRnUXdcN4jkLW2pYYCLz9yBY",
  "key3": "ti5mQJEdFmoeFGD3ztWvAWjkZNT83m6uJLFjEGx3bM7W1gt9Xwz4psDcV9w3ZySJ6NZgriehLfk3k1E21bohhCc",
  "key4": "E7SvwqRaG3F5TSh5caBR6enyNhiuBSiJLMVQ7EzEtBRx3Dz9paanGEmJosMCHs4grRStcqG5CYDUo4WhYfiPscw",
  "key5": "2ZqzY1pR7tdddsVGPrCXndWTVpqNHtAGcq2J2n6DnFvHJZKohSaWMHaZEVZ7NfUdvUF6ujiSeAcqJtzWBgmPyZaD",
  "key6": "43a5CP5igEc3nA4HJBxJKuX41WmHGH2xfWRJoyecggJLwB7G117uh2an4geiJZq5gUWXvB8GAj4vi6E2HFgZjdR3",
  "key7": "4cEraneiPHxTwoefsbAdJH2J5EyhJCvGJrtD9Wi7FnyXwfAuGSitbQ9nAKdbNT3qnQBTMp9caDAwcmw1vuc62ghh",
  "key8": "FAGYuhMs6cP8FwguPaRmXYasciP97ZgLGpvtFsVSPnrhWD7HKPa9ZhsP5jWy193NGUUQ8FWSnfd3wCFEuXzPFTD",
  "key9": "66dHLbWQTq22Babq1pa9pk91wiKiGtwDuiC5JTPJ5EycAfeY4ZWmKzRycagTTfcsTAdk95NPaxESHNgbEkNKbicm",
  "key10": "FqrNbBqdgPv986vjuK78uwuUxj7YXvAv9p7sUnprvfawR2TPZQvJHpYx9P7gWf4xqnTLVM62q9tSnCae6GRpZje",
  "key11": "4m17P6J6ZdpKVHEAekfmrZLgpyoL3Zdq8WTBcFSHN1DDUrzx5TvMjrWNbdF4kyauGy8qV9ZinSUGX6eMve9fMy2c",
  "key12": "47AR6UQ57zG9pbx9H7ZMHawTHzwpGe4fS2RBXapYdJTL5yjHAFaRA8koPmisxaDWjJSmKgYCCKuZG1ac251iUsvV",
  "key13": "3kpJ5NJStWcPTVAmxQ5xKXKVDYXm8mVXQJNgjQDeJDzJHjTNX9Z1YbNyotusYCrQQbhv63CmsCCJZxbWNvsiBHTS",
  "key14": "4khTpJpYpssKKwJYygDVbkprDEUoJSdPxZceo5Ht7msKhsJtiXgFQz9itoV2rRL6cL1Vk8fXz7McfCRfoqpbXRDb",
  "key15": "2QtzQLPPhhnoSnjLSvyBCfSzPeW3xC1mwtD8A2xx7dD4QJF85DNVvETUoR9g977aWws5YdYs5XFe5SPNiJx32DtN",
  "key16": "5dej6ipC6DckLAAEmgtMc9woLjuTUbfWAT6kdJJZ86ZRJ4o9TZdAhuwv8LokVaT1t94BE7FyRa1UnisYceT3Vxov",
  "key17": "2o9H8EjMnvhsUATbV2CtLaLAANc5SRS4mdykPcJZ53nxThyHxsC1k1BPTLVkVtjFG9ssJG1op1PDF9xeTSkaF5Nj",
  "key18": "2mvtPnkEPV2MNGLcUFPRb1xWGCnJyKgBZ1KmSqGsNSN61BGVxMpXPRFn9jmrFiNQr1MxzHM3cii4CPA7kDKYMbLB",
  "key19": "2RJ66CXEJpQMDuFVG1cc7ihwrdMAVht3TSSiCALt6njGAETuPeL7Um9RXnGWTBtfp9sdXFetfnh8xFKC1XqBtEQA",
  "key20": "4RZwtRbEUBdBwW91Mt7znjSiQ2rGQixzGnFh8fZ3RUeA7RQS3SQyXZsVbGeixj1kDmSTR48LUfVvCYoCcd9Tjrm9",
  "key21": "3JZvRP3beShmJXDdWPQ1k7odMhXGkvbZrxHRN3DeqX7GdSXou34Bk4xgdQy7ii8rpQ3N2HK3KAMSpwR5vqyASA65",
  "key22": "4ordYRZrthhym7xLUBouvr6edEjmmpCvhi89tH8Cf292kCcV3Cie6E9ju6QaNx8nsKATS2LyxpGd8fTsxSGo6CNP",
  "key23": "2N9MT6x4Uvgb9nxzb3FmtR72H3kBqkMskB97Ttj223BEyBc8hxERTghQGEeTeMPq1DqYNjJn4JQQWZFiQyShHJC6",
  "key24": "NyQiyNdPf5ikhqpuJMVXkS5LDiaRBvXD4VGgN8uYBTTcZ6eHqshw9kzuczCahLooMs6itZ4m18C3JWyqBZLc6Yh",
  "key25": "5qEgkH3ubMgb8cPKqFiHA5G8YHDpWkCo4WvK9GkLVEu4Q71tYnfuETDfzxSwXeAVnw8ZsBeqKpGLPyrFn3ymhBtu",
  "key26": "4ipwJxJMk2DyPrq9hFKroR6mBrMqnAMxTk335dVxb1EfGbTzuXimmyUXdbbcS4bWUVFPXs1gvc1YfqnhFMLCjZcQ",
  "key27": "c4ZbextmBwak8CtPf3G2oQQn7Ltxw7XL3tu2wMUW2hnt5e9A9P7YtYh5gpqFj9D77S52SKhEJoAH7oYwLk1aZWz"
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
