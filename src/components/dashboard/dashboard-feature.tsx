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
    "3dE2KoRbjB2pyDXt8uNZ2F1DGUB5ybGLomTdArZHq5SWaicodkCpGhjKQYiM6c9d91jMYGMBo1YXsbUsa77EiGFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvwEqVzsM8DDZhfxze9B9VZ8dCPqy5KNsQdmSNMeNhVMZitYpU5PU1eng6YhT9iWAxChMXv1uWh61NwSsvSC4mH",
  "key1": "598xsNXKHhoKXNmwBmaXQv8XBKYC9xJsf9ubV4GiLnEC5phPiGkKA7g4cSHt4iytMuJYbmvySoGLwCKVB4jZ7cqp",
  "key2": "3ekgKZ1Q8SEFJiiv5K7KL5Prxd4Bi9TaiQopgZ3kkC2zNcL9RRNV9rkgKaCzSEdhU1JtiT4evJNM37mzSnfjeVB7",
  "key3": "5kSwYkYH4TwpCEN4NBRwNSGvdxaQTzPt8gnAAqBXSa7SaBJeNRyjnUKZa9QhWCd99CoPiwUSMMEhBMUGgaP4JcVL",
  "key4": "CsSwSJzKF7qtW6XiTrU1mnQoSz2gUDX2FPPG9bF8mSybewGyemJP2taQ3CtgzVbUgQJiqTNsxKQyqSRQGpB2Efn",
  "key5": "5DNA6cKR3FWCgxbqWArZzB8pfUZZGNmpavBv7szpBKvUj4Nxig6T2zA3on9nRhh9eVeaZeJh7gg5hW5QXRA2UimV",
  "key6": "2inH8mUArv28vuJoSP8fbAkraHATt273KoHuQkemQuCy4PAi7Ef2sNfegZ4pjGDD63oeHXPM9zoo5bxi5SWZCPtV",
  "key7": "KdFFGQvWzLRKfqxVymRgpVGzENRPHR8RbDfpzGt1xA2saBVBXs9Sofde9qmqN65sxNwVoiNBbfX6i7Y1YU49Bzu",
  "key8": "4RyZEtfNEXu5LpKpKATqCADbjKmygXVuyHMQGX3cDn5aMAESPUWXd3G85XZ6Gp22QHbDrVP1vcTarYx766TetM78",
  "key9": "5VSDoeF3SFjPBu2vqPpWxyKShdu9S1UvkJu5UWhhQodp5HfPrZZKxwxktYAEpXeLSGRKpuMQ8S4tcKf7Axb4a7aZ",
  "key10": "XY381xdXv3Py8omFgfkXJsAmhC2qhm9SSbacvAfoGUznKygA8qYvQcz7WqwbFdahLLQ1upuCKRuieddpzQCrXtD",
  "key11": "3Ffjee7DKJfZJHn4Ee4TpmEuPPdPtHYrJzn32KsqQAZKnFdoHDY3SSyoTAhFJ4Cur6CyFPKPcRsocSJ8SUwyedGi",
  "key12": "65A5wdkvS6ASpeDtLgvVanaM7n4zR9afChw3CXLNWiKuWqDpqGddD6Y9xu6KqrBNjv9AuSNtRiWX84tzKXKJf4NH",
  "key13": "36HjqdFinq1Fb7rQXZFdvQnZRnc3c3RFd9Y69hdbBr6joYXDNMv59h3iKjq281kibKARVwjw43QjD1wJyRSxJioK",
  "key14": "3RkjXU5GNzPjgU66dYuNms7r83pGFxLjZcmDAg7wY5iFKHYLasDGGHurCiMtSDfaCeXyBuZVTVnHK8hJCTGX5GCQ",
  "key15": "4o5Vy4NmRBNSqGXUg4dh5cZd3QRpuFHUcF4TjHobnD3GFJaXXJFgU4bbjSaCi6FCTdjPQz9dNcBet2BT9V4gQ8bU",
  "key16": "2zx75VswUNRgJoXxF6gjEjgnXgjFU3a5gQg8voWM1nnAevftdE1AT1BeqPu1W9FSGoujqSnkSPPa2Vz6CBhKCaXK",
  "key17": "3SX73BUouVGudvQPvT21raXk1oLKN32rFEC9h5BmHzcAd8Gthv6CPXT1WiVb24LXXCLxsLqjoajmuGRmv9DND9jo",
  "key18": "vwJDP9WNV7SUbXuFKe9YDY8EFginZZ2vwuLTumMhdq355rmzzmXJFQ4c6jt1Kg8uhwPFXCK2FUbSFgykX6nPX7T",
  "key19": "FJG8pZ2xLf5FbM9yx1LxmKUvqtECXjuZWDBuyp8SicYQqpKfBfNdoX4MEZXuAumciuZS4ZwH3TkGHHh6wGrANqL",
  "key20": "gsoyMHgwxyKdScda8y7qUD77w4gEA8SwGRmrQUD8LVDecRvPh4PXFZ9yLYsCUpq9df63mgRvS4rcUVx61MW7HMz",
  "key21": "45b6hTKLaGfekv9RxvzyzBagsv3wQWVSdvJJcLxXzUDBJ7o1rTzd3uysQXDcvmD8uKj58bPh5zBVtW3QSC9sF5Cx",
  "key22": "4BnYQsbbxGaRk6s8M29Y518Z37La1vUcPooQ8zeTtC3AteePDeEYmbTQewkqcRhSubSfrL9JAVd7v2kzpwYNLBJi",
  "key23": "61eM3uMGRmRHPSFeLfxnESSiNzTcXmoaYQ9s2jcVBTQ1S5wrqWEnjRnBzM8b2njBf6VNbDyNrY51HYqSuz6eGKtS",
  "key24": "4CVPzYnPRcgMZCRueA61WQxBxNY7oDCZ61zwMy5919w49FhmDVFkqSjFMGsue8F6uMr4AcNQzfRSgSiENfPgtbW5"
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
