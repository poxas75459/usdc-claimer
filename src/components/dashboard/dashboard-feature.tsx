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
    "5xroFZHuhYR1aT7YCEaKipP9r1DFKZvJ9pGK6UK4qdEnzRd3EDmzhyUfaNsECQe3n2KP5La76cLtwDKWDpaKwAdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GW8NgM1EFxyypmJr4XJrJRJdF8ftbXtskg2sGVMqJ9BDotVb7QypTESN2RweLHk2fE3Rvco8kngmdGtyV88ftTm",
  "key1": "2Unacpgq969ikP591nKSeEiBhCEvHusGocBQxt8JouXTNQeHZBDRnLbGxQQ1pyJxEqzj8YNAScBSCgqt2waprzn7",
  "key2": "28GRbAEZSJhY5FiTV19X9aMmUdGXuiBGY6Hc6U9cZzFPzjxBmnBv7tyzmNUtfcVYYhCFK198cVpQ1mnz9fpuh7nB",
  "key3": "5zQdN7nPCMyZ1q8ZcBQaarQBARzzAaZD5oXqDNBUkeNKGpu8xpiNfKDeVVjKTLGYVHgG7f9j7hyracVQe4hiWsxc",
  "key4": "3B1UjLbwX1JzaPoffLm1gUNrsfTm6HN3E9Qq3V1K6iJaZTAAaRpxdpZhFZKocffF7dT9T7jfKhERBkfS9mi7m6CX",
  "key5": "3npSiKcDznnapXT3SsVeq4YUqg6RB9Qi1s12sAvev2Jb1TqTRU9dgzfiwxSNQQHJwWfrVbcpmgNQmB7wcyBL3TL1",
  "key6": "4PEFWAiRDc5ba5C4RSuf3VUEZRxRsDZeVEiBYhJsk8fE4drJePiAKjhFooAJ544MD7tFdq5KoT34zJcEQaPyJJoi",
  "key7": "5zxF6hoKnLyqfPDv383g38mBSpfsjJGP9piunSZSsoM9VUTbmxqvFSCDCHK5RvNvY1NwQkdDQeiqjA3aSZSpgjHJ",
  "key8": "4KMaVNEMGUB1yY4j7yCDxw5djYvftRat1MXDsUrMJB7k5q4ExJhDuoXTTECtRkHCPMDhfkUaCK8yoEeCK81gjRUF",
  "key9": "5Ftqbw23NvG8W9D1GSEbVHyyRRbrz4L88ch21FByh1RoqaFbKCkmDDPMc4P1BTxoWfXVUj7wqh1k8Ar9v7ZqBBiD",
  "key10": "2rVqd8k4qRFZ1kQ3yfpKgmRQdSdHDVrgXeew8juFhLnVyRMNBJe2T6UpYkA9c1pJxMvD3pfzmLnstKJABexqhbPX",
  "key11": "4H6M6CaEoCVXVixjo33gv8b75TNi6znhBoUURzFnnaT1L4Pg7cqmmL11gjv9netmg7qh6mC4gnzBVrjB2eZkS8zW",
  "key12": "59yEGa3jvN8StnDSQzpxXapdF5SL2fx4Ua5LFqw3kz8Yr6PtRqZxAqbskRuMeBVUHMZMygcRbSpsRngnuKHZUeec",
  "key13": "4n7dyGaqWbfo1m8Yv4WJvaWva2m5riBnrP65sBbNnRQvXPo5xrAKohsDQ5d9c69dhR3vC1gHUqw7frMVfMf8Cg9F",
  "key14": "3cvoSyKbRr4nbQWHrJeJAkvS7Zcz6VPowiJvYcukxiGF9FrTfHGvqT386ftS43nUS83JemkFUKCdqhd81ArPZJtS",
  "key15": "2g6SDmPq4hoyspa239YQTi6T5fiHPV1T4trP8vNAEosPNh5QWtuiPXJG42HFdYcpDAtsEBSh3X4v9zC45V7D4sk4",
  "key16": "3fFKvEMmMwnRN5cPeen7PCA17ehLLFoSGj2sknnKsGj4v37xS1SnaFbLRUPpVuZYGrwaprP7mxXpthBjj2wLTdhU",
  "key17": "5PYgx1pekBMXSi9oKp9E7dmVUcTgJduCQMo1V6hhKorptBGftcFuD5kxi4YGrhrBoCBZYdw68UHNVGjq8Mo36NMo",
  "key18": "3VJYCjbNwqUcAdiGiRDDgwdqQBVYS38zuod9KMe64DGWtdkBB6etg3seKNd6rMc65UPKZtfbSfxFDYVzXwXE8UVy",
  "key19": "2nL9kndbtHhVCiwkyyLYH9HjaGxhHhnaUd2g12GQdx79VmftNNLY9DtZM3hT1Tx6jAERzrXqsR5qziPr6JLgU8yy",
  "key20": "3W5NxhGtWnGqa2W4L1HMeKY6ZmYpQRb5jbijrPcdqCMhudiKqttWkowCYBFy1awBxCsFHrvq9gZx3hJ3dGzZa2wt",
  "key21": "2tGtDNncuJKz5XEmVhzt8gJxfggatWtYQWMgQouDvqv9CAzQ4126bYdK1hkfZ6m3SK9hxaeJiM9ZVsCERQXZ5kbB",
  "key22": "PXQDXsPj8b3VuwgnP14UcZ6JSmT8V4t2x4JhTtFyXr17feVmrqFzFdtGUaFMCAD1DRaXKgR9EwUceEpBFcK8R7v",
  "key23": "R4BfjGQhJcbwasdkmwrPtFtFx5K6zvhk6dK7CVvgERVgVivZyjkpgkmzPyHookDLyHMWy6ACGCZ3Yrg4Cq9MVFN",
  "key24": "2JUZ9jAm8f3YS8fLYGYPC2KPZmGiHULmB3jTNAds9wp4XxwBHK8XUqtfnF3d7JRV749JZRZeQwNY1MNHQJLweHJF"
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
