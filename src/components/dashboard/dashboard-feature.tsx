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
    "fUfKHR4wJiypea2JoucBpjmcfrXqSyTawhgGYGi1P6FhTf5KGSbqPc7X8XykQTm2yqqVdmjWjNUh7UjJVwxjqwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BYtVfumJb2LcvBfLnxTyhQqyxoH8k6GKToC1TnRrBy66Vj6CURtpBVRjPP9P7sxn8SkgB7diLSaqjXFBwjpxVN",
  "key1": "3GYLEuGV2LnqFdVN3VQv9sV1M7NbsTPwmBiQZbaQP52FeiQjBWyvF5bitTyCxS86MLwrpztsD9vgzhxJo3gYwHYv",
  "key2": "DQaHshmNw2Q58K2LmcjPmz2F6wVVgHb43AS7CC5ApEhKRQDhhneR1KEELiBFBLPurK7vzsWfELiEHV58YLvpzYe",
  "key3": "4LBHxPS92kmfZZEiZV9xHERq28pokjPTfwnKhnQcBsLGTYENRDimqNmG3BaWH2T3Fj2t4D2yGB3eWEK6fPQYy175",
  "key4": "PFvgKiPg4TQfcpoiCq4XZ8gYrossPQPDajwhqukneBo6m77bygv9W2X1vtTAtsuhd4CsatEaWAkuLJkoRxcLCfX",
  "key5": "iF4yGDxGSdot8mPs7BZgiizvK8qGGecxYvuDgBtqjhNd8KtEAaqYhWVy9axRNfHXsA2shnmRzjNbS5Ld69c8pKF",
  "key6": "3fGKrAadSacFWUGCdZ6V8qgYY3Vc5gxQXDCYTcs6DLoaNjXU6u8iRwS6SMmfVpUzzyLqZrEdWxtrQSNR93Cbs8W1",
  "key7": "5pHveW2cEZpUUs8gqXqpdqNrKaSaGr7mNNdxrtdD3arUj858C82odSvBpjgLmFqcLzRrN7Y7GwtXa7Q45t6VYZuJ",
  "key8": "28LDs9MZcB9hoqx5gs73fGbPGHBfhfd4APWwHaLQiPoUjRzhxFBoB2V5HfaQEJYFbtydNi9JexALghrXCcnj37Hz",
  "key9": "2BwbW6CCewgXcvkSCZpErejUPokt3ADbadkq6kXE8schXHVPv5c8tBQtd5V1XFUJT16aQoZoA5ReJARaDVSHKPuA",
  "key10": "fjSpKhf9JRT1YTaqXg5u5CbhXioFmUvJGbwXKzqBNeovteU8vwkj5EmyicZYyH1tNyTHPSWcHu71STfuSAJ4QyJ",
  "key11": "391oNjAdjhB5ro6VyJP6FvGEE6SWVRQK7LDn86LsvP5prJkDvtE3xQU9j7wrYwZnmPkgBv1tBCqhHVr3iZ1N8GPA",
  "key12": "3dvbidmUncRRAc5mJ7mL33fuvRFVLTHD6po2HeJvBHZCgL1wJVTsnDPNxeAFPjxU2vYmRN8MTDTBzDVuYkthi86e",
  "key13": "34Z3br5KsHH8mfrmiuqSQitNR8FpH6Fd7bEH7LjVRNZZvEkovWXQy7L1Q58yoVyFb8uqLYRqu8seHrMKAKJaNTFH",
  "key14": "uNCGmJj332Gz4ybpXBjUvb9ifq3rBpCN9XYD9fFjrs1B5M1Dfj9YL2tjEUg7jMFK6Awb6eduYJGetbxmEzromzz",
  "key15": "5XeZi7fycDE1AEDq91doAryfRYZBr6yFHTUe4kZDQ23gP59X861e9KdsyCgpUL3av7uVcRdnBnjC13zziadQEY5C",
  "key16": "PpFB489dtXTGnUCnQHNfhJBKdXH5prmXT2Zk3U2LxNsBqDHte421GZxTfA2ad7P323E42Rd27rDHqkHyMXK1Jq4",
  "key17": "2oepXKqNiwef6zwUQ2NFyZJm2py1CAtC82W55YLWoiYcPtYqX2V6racw7eMp4oD3GgRdEwkdGsgC19dB4djVqk8g",
  "key18": "5HYCVmd2WRGrm2sjoZ7nWTEPn4BU3EPzgbm5D25nux57VEoVoZ5W4i1XVXwhoXAqx7FfyAYDC8h1FgL1B7Vigk7A",
  "key19": "sDDygFDUw2TFFmsQequa1bbDYDD2aWoDRgHz8y3rYzcpscn75a5LR2KotwDs9gmW3HUUNMJkQ2PLP4EuadwJ8jS",
  "key20": "3mm9Lx2NZZWEJ6aNE4bAnWBTYuJ66BTeYzbWp3gXkQniaNbEw7rin7cJW6ri44X9PQ19S4yTULczLngunYqNmMxd",
  "key21": "BwGyG5Hb6QuKwr5d8H46Pt77MgbLYT9bvqoGBf9B8hi3z5FgfHznMGNT5wPhA3qzYyixwGfsEAFCo4W6Wdnw67a",
  "key22": "LQMLJ77ekEGW5v6ZKGii2U7jKJdEqRqABh3bK3vAnh2SatDmCZd6jRSzSogm9tBqAMFojwg9Ci2eiq8GrC2uTSb",
  "key23": "4rzgE3fDAuXykzwwqnd9qiuVLQTH9Nu71nhbJar8hkebmBaFeuGRTsVZ4BSTTUuLXFkE6Mzn7fAybhFUqBoVK3Yc",
  "key24": "5PcKriCe6HUNDWapT9j9a6qVimCuRAPcuY3zNL153USw4cD5VJdkD5v9EwDsw2QCv7iwsLU57zButEmZEAFFnx31",
  "key25": "4U8Lhqqax7XVGgYSv1X32bSnoaNFrnMMw6jCv3ZURkdTnUiZrGNfrhiTHoo7MfdLjzosz6mUCCof3DL8XyKZrGSX"
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
