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
    "e7nbWUEv1JyfmHMsjgk3pyXuEXZdD5S9gUNDUQXPtSZyf1UEA7WtgYx4B4USbKsNxVAq9jPqgu7HdMgSZMBPnMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeWYPWpz97EjryXAwSKcddgQMF85ujA1HgFG3MqcpzUJKejqsk1ePPtiCKBxkzdaQpJwrAVqhBuxNxEx9oZNeMp",
  "key1": "5pnk9qh33BxeNHA7STLzeLXFabgkrh5FmyeVsfTndRis8STXXrAckX3UdYXwGv8mBrDS9RMmahH5eu2GeiPUogHJ",
  "key2": "4h29LqNryfEuXktpefyswAxidmFhwpvB45oNqgXXYEbcEYd3hYPxd2iNjBLaR6bhTHUskmfahVKZQbSn7mZZGuix",
  "key3": "5DWTprBSjFW7QZ2xTmYS8pzMk2yTBUrz1tUHKpmJZi6JSYmucKtGVyp5gTtuLZdQXMFji568GSRotqXxGQFnHMjZ",
  "key4": "3yoWGMZga7ShqVFtEbPnZe4ZiFzPJWu7BP7YCn6W7GTNp2ibEStjZRKboeYKrA6g2ZkLMo2ViooMyo5Azq9howBY",
  "key5": "2ycPaEPrWeTid8J5YEbXJewgUWF5XKfeL8x4j6ktphg2y6Shhkx18whKx8LCN5iBPEAaqzcVXoZMGuMGc7v1xWrp",
  "key6": "4zscwTNYzVrcs6nHpx32xCYPpgij9tjotABxnPPC2zHPndn7JPHuzbEqU48D6Vjzthx6uXaWQoriLmHAbmbvYmLa",
  "key7": "3naMkpYZXHapsjFWhdRQiSNvuCgmX9ur52iW5TekvesJiPAV88jLT5BnNCowV4EfsiPbLsVVL32rAiMqgY4BsEgV",
  "key8": "5NMPq86ST1dCKneNJ2EGEEthy7dW7hazHVmMZFai7GzMFZuY3Vh2p2tEEBohoisny7ri1Czf5i6TvicqA6C2vsRX",
  "key9": "ktcuXZAABXGGPWu4xDgMPSncRHc14fuU1qtR2Ar7F7AqNzL9rhnmuXfMcDPxCbNZT8zjyf5hUbWL7Mia4G5455i",
  "key10": "2o4HJ77ci7k3htgFAibW3GSQnouJ8eiY5FmMKSxyEhBygyGQ1rXSRGqWngjgGxzjjxbbWAoqsRXthzwSBFFVc7az",
  "key11": "3gvRnbpGoBoZpHkgzRs6TEnTYxDg933XffuoNUy3myupDxqpLb6Q4jMJrMnpTf4FjqbMvvsR4FQLuoeHjiZRkZWV",
  "key12": "2gGR2dcajenwD4kwrhETJHrJ3NhabzHdgosHGzxQJRJM7hRDZMdZ4HWeeXByPtR34pC1d6erpUuf4uFuf9Byvfj2",
  "key13": "3LSfXXPrhaCyed89gisuoR9h1xhvVmJwZEp5f5FeL3v2ujUwKyXmXHtPWjhsdmQJSBsDcnF5v9eudDN9tFh8WrHP",
  "key14": "N4NHyTgcffXySncahUp6fNgTkso9xe6nSqLKFusyCn6PoQq3bX9AA23EQnUtTU4EEJMeiKU7Nu2k3CB9caufMXA",
  "key15": "4Vxazgov8gWh7Q886Fqgm94C4mqh6gNdRkt5gA79Qdro5DNqezhH7ZxyRRSjbDgQfZdoJiYEWJkQFsTDcJDQ79WG",
  "key16": "2GGGQhhGK79sAATkvtB8VUmeJVYJNxbPS6BU2pmUCSzbD6SDw2kNfFQx1vVdXsZbiSeLbiW44gkNtcAtCiQVvfhz",
  "key17": "3k8v2Zzgz6Cu3DRaibRqbVJXH8BqCHBtjGePRRgQr1VEihb5h52dPbCCw9qQs72pjD5bozDSfoGh3gVjv8bLq5Zv",
  "key18": "4WuHs95QGxPiaAkbayvGry3qddyFx4Gr6a9cMVk7ZwutcKKgzacXXbNfQ6aMeJ9pvpgh8UTQTTr3J27KixhgvwnC",
  "key19": "66w3nz2mfppaAVJPjkmGVD3VUkJZkzVhakB6cBkaEuU763phQPycHxUkTgxxtfrixKbxxc5ZFtAEmB58om8pktaP",
  "key20": "2nndDzowteMGzsNZeVkGN8YeKbXRmdE6CqA2c1ai1GfBHT51zyNiU2PgGQpMxCPZLcxxq6HRLyoKkhzVNQYkNo1k",
  "key21": "3v24xkjnpCUSKnpn2UAPqyiu9icMkN6bGq9kaqrMxauU2DsJpLyy6gpRFw3HT9pD6Yo4LcixhyncPfs7aNku5NZS",
  "key22": "3aU1CqjWbfUYrwTybJJtmUobMyEWJwEEkkYNnjNum9JA55bnYcF5RPtWyRk4j4rkixj4eCynMvvvHf9aSELuN5E",
  "key23": "2uiNR8Q6Ys8FCCLkvSAsfZpuJknzvbtDKsHta6Dg4begUmApPMHu6gTdvXPh8TgFEuu7s9ww2mfrVedQFUEqGB1S",
  "key24": "2WUXfqKbUuFmG9vWPSv3GqihWDoXdjqFPHnscuZ3AJc4QwfoSxYWEpax5hQdLvNg23Wps5TfYmuqB2LJ8uQUyqA2",
  "key25": "28wwhDDnkgAkFEcssdtLr9p7ci4enRt4Kux3s4yxSpdYbdsK9H1TWsEr3LAXH2YKKeonzWw1Gsancu6SK8QP6abd"
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
