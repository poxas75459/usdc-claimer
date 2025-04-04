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
    "QJ7n3u6kKPmccaNNfuLAKYxo9hzrvLG7nfK9ZzLxrGi27hDBFj6YvSEX6trismWjymwVCq7Y9NbHVemTuAfDzFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpC3L5xPQh12QaXgin6Gxf9jRgKNBy1r5ErJfxcQVoRKwXMtoiBGQTWcFiQPUYRKD15V629ZRTwwovfWSxjCBfj",
  "key1": "4akHi3GdFMi3raNPHfx4KbcwmmBcMaieqj7Ek34uKb74Q76Ugf1EREHS4ai8KRZ1NNNsaKhx6nH4CQVC6iy6cLqA",
  "key2": "5L6nJsba41eP6LjdFwEou4dzhgTn6JaDoPeTSQ7rd74NS2EPCro14Rhfy9HDuAtvnTcF29Nybf8xvAPtKM3Byazb",
  "key3": "3UYpGhTshJbVuta6DaajYoQ6aFQVMkn1Dp3zDpE5zE8jZEFZvNVPWs4NTdZayUSyBy3xcH5ccJKSM24vadCYX4iE",
  "key4": "3eXWnWAHwr22SFcudmqYNvUSSQnkP1eJZxRhCuz3zmN8dFQWsbHviiChXQ4XUjetaRHprczgNx1uY3SsaDTWX3Dv",
  "key5": "5E6DPuMXKLgSrc5sfmSaP69BXFMfNTkyUhDpfzxREpahkeYyPjuQa6HibwVF9aYiVBAdVHUPi9EfWTQrpYy5NcwB",
  "key6": "4kW2c3wecoim43qsebhkrpWJKCei6H33G5KDAmBTcVWxsRAfdxFp3ouhfehhGSt87iuhz5PFANArBUAbyYU5maiW",
  "key7": "4c11VKk2dtk3nQUouGXZMSfAft9hzdy4SzAHxY3ECUJxYCP6rZrd7CeftXA6JjEFBYTry1MtqqBWBtwqPywmY6yC",
  "key8": "3J1HsboHkHcfuLHXBHczhTQFMefxc5ojbMhSWDbf6korkzqX9htAm7kUFhCng4PaEzvsdi4fiLYbb9BmTLAgX6QV",
  "key9": "3ooejZ2HdCjEBLDYUGiDQX7h2XRmzfvpnV7rPZS2r69q9PzAq8LyQxd5HMq44VqmNwDGXixKnwbavJ9CUagsKVgt",
  "key10": "3Z2VSAtiWidnmivaG7JpCEQZEZDuscJvh1Zw2tYALciDqvH2F9WKUhPgEiKhjYads3h5jf4VnjHUmwaJCchapvij",
  "key11": "2v6jadDN1im1h2jSAGWYDMyR5MZMkayudujtxnVqvqycfRww5SBY8v6XnawpQtapsEwns8uJwrH9bPz5UPB15pn9",
  "key12": "5xk7MfmahoGdAbQP7gWe7Azd7E8HJhmp3zYi89Q6j7q9XFo6T4VhrXt99DdHkW4aoofaD4dwV63vEbHmEcN7M4vZ",
  "key13": "YJNv9iFA7kwYNfFJCTXCgpNcDBhF5dU1rVcD8zaKWf9GvZGk7NA4km7Xrctip2GmKeEXqbmSeMjL8R5sJyuxE7w",
  "key14": "5wFvj2VDXfKPXdrxuZ8PfwrTNNbY81hUJL9kGCJXwPTmiWLY3ZQb7zuEVKAXGXcqYYpPLEnNSrYwPvvbjE9Ec4x2",
  "key15": "2JQYVWcjndYaALJp41Zx1jHj8DcMatmjLkFKxcGUvpwwLXVdj1xCbwv2eSDv3D8mddTmqewW9HFuWMVbjnHZFiKB",
  "key16": "fMrLNhaXzVNWr4QqSkrCyUfBq2PTiNHYU7kT9kF7kVYP2dWjDtCAtqQFQSGbWFJsRtFCw8aGbanXz7zDaRg7UgE",
  "key17": "J9hhv9G1vQ2v7mdStGkbYU2uHvuZeKskv3YPbdc2hFGxxXSmHDq2zGqVkaB8gCadSX5bxqCdUShjgvYBcMnrx8q",
  "key18": "2rNb4kj4x9RV16tq5TKdVeaidUB61x6E387FEFvtg5xLw2Eiqk5PSAvEHnKDhzCJ4Vj3zvN1Z3cimZjF4Sz73VrD",
  "key19": "2rCdAD3czcbKXr1zjPTtohwYTm18QxNPLgETw5mkXsowCqC3sek3kA4cGpwZxZqTTX1zkuoKa9qAtqLs4irxjWDd",
  "key20": "2jwGUYHgfRoa9cS3qvvHFmcc7kRATLhg1wfqS3fnXcVpJdLREhEU9rWWk6XQqvHhXxSjwtC7H3GpVBdsDumzTXD3",
  "key21": "5WKz1uXFDoHJd18ktujS432mT5EJDy1vZ1sS1RHS6w48eDCrCzz7s85MXMt3VbbHXXHnTPGUkBNcutAxPHihnLAz",
  "key22": "m35f3b2Gwy7DhjBbprT81p7NS7YP8SKSyKRnktntg2sL9ZPHBswTzLjohYjR8vRWGF9CZAPQkj8umvBVUEeamsp",
  "key23": "5pdKr1yUSJotDtXc4TmbVQaX9ECMD8AxKqgetREzejdoP4ibSfMbpcsGSK6mtWeKBQoqBXQVV3fdFavGKnUBcR9W",
  "key24": "4bVzKvMG3v56WNL6o8nrwu8gdrHnkzSXNiZeERpri6fv8hNMMxWBe9WV56Qmo1Y5vGBt1cttABrbdCwHRWmt2i8F",
  "key25": "2LQcJi1w1WbGFX3GEsdC5ZiJV9YYPNEMNyCBv1g9mzDi8xm7HBMLRweEGDBp9JpZv7XNG1PyWuVe2tboead36mHv",
  "key26": "38poRACwbFKHFH3dgSJb7mbmHn9wkarG5MuGA5LdhmbvXtVVQJXpxT3C1FijoyAM252PAaKiVMeYMJ7PLGqrFPFh",
  "key27": "4T6ZVGLTi536k9sfvpJRS7ewbiE9VxpmYh8QVSLfv4zqvg5Xy5eozkKeqfdG8rKUzHEHeH16zo1RGoJbDT4w4CxT",
  "key28": "bUDaFZkFbm2ti8Tf7tfjyNKdqKiP7tdigbtfbdnqe18dkRYkCjpJmP3DwNK3TeKW2S92yQjwBAegqZMmr9T3182",
  "key29": "5574yfMQaUwTKye3YvhLgFXuwces3rpMhkPg4ZYwviQcb49KukES7N6PZWdJkMw7jxoSKPaWxLAUW3yd3etGRAvC",
  "key30": "4smZ71Xj2cp7GqXcjvDg9zoqaA1shJBuAG69uRZsgE5BzYrcdqa3apjnGe5Shu3oWDmmLdgAfwhFBSFd15PLhniB",
  "key31": "5SVe7rXvc7caS6i1jk2pZkwZRCNLRG8RKt2CGBnZdgLcqKbG7io3M2vcXuyJzrwi7YPxRYikgp3Yz9GaooXTtVQt",
  "key32": "5W9ay8xLDme3qeZeM6C8pWmFpfQbf5SW3HFJfY956NU8LTDcaU9HakPza6vcbpinF1HZA8HfCe1h9rZHFRiZjads",
  "key33": "5wNbKMUZvxDJfZNbr36CVYYP9MuM77Up7qBdBENvHvLqTqViJqHQjcKJWsMjCCGd78FckwDmyxbXVGt8xM3vKaEb",
  "key34": "5XNhtnd5T9oFtaSQfmwQacUSCmDUwKHWKiuPmfC3tRpb149zssF2gUywQcWRwrxfTAkfFuVzoE4uJ9NGMoYVxuwa",
  "key35": "2ALgEySkDBCa48e3sQ38gE9CUhYuo77doiJYLoAkQndewE2vz6JoDdgyfkE7C1tFv1CnqpxRsFGykcaLYLuTZDj6",
  "key36": "3eH2owLYZieFkfRq7Rt3KNbfmgQaLMWck46e7PkzWB7gBH29eRXRagoSnfV9JnrVPBshieuQN6eUHwNuN4WujFhK",
  "key37": "4uYLc2zbaNnwsqhEKs83cjprWg12M3uYnt7kaYaa1rxTPRJAYYbhKHSqMMqqWEMfzHkym9WvR2oZeEXYks1cE4J3",
  "key38": "Sd3ttLFnawwFFDw2gSvAUvwU4tnaHa57MguiVhbZiSmtQFdKPd5JHvLieQQuhHNhdoxBEdHPgKg5aWHRBFekppJ",
  "key39": "NJgbdh2Ek3hZaStbPajAdWxbkxCgntNe19MpnEMnP6qYQV44N4uLj1XF7Y8zadFvhUmWe5pEJdWCbq33mfWrQ3Z",
  "key40": "3ndvwWsG7QtfThYhMpZPYgYRFJxoLJnzFsXJGRQFJ3N8gtBPSKpJtDeRXsM9nCsuSPBfYRo3WECZU6YvC76nsnK",
  "key41": "2gYhzpg9oJ7h33QGdKagAA3KkK67HaJhWULDQWJvMJpa4rq8zxkPCvNBuaUeV7HWuvzM8Y6KmmD5AERV9osvuiNx",
  "key42": "CbJ8r5MvB7icNcAhUB8oySAEBJjNPDXbhEZAMdxW6YsioWpffa5oHHswa5FAQozM6C1DXzLLGYS8QeAZEb8mXZ6",
  "key43": "q9w8D7AVRo6unRFy7b186KrX2uZQhJ6WtVMhC5hrCKfAkbc4JBuWzreNkTVTAjhxYp3XNLf1Cg1g1G1qpnFZNWX",
  "key44": "2QMGEu93c4Pqr4DqLKvMd5ehXRJFWrdarCfFc2Gpxzsyd2Qkth3PQyttJGcJ2pDnGWxWtknnMv44yaDhuLKCyeuL",
  "key45": "46Bwp3yPcHfk9w8Tw5Lx8em7f6ebEVx2zLrmHdE9n9opXBgkdy7QbWhds2qwspgm1aqK2v3jrVfFh1yXC7PPqj3J",
  "key46": "2tVDB727e7ZXhpJWUXgPippvCYGcKvdBkf6BBqUjnK1GW88L4ViUZcyJuW2wuUdrBFc9rWAkdV3oKB4t5KnXKQAV",
  "key47": "3gWQ6iRoBGgS7fxo5vWbGfzTGUHe9n2HaoavUxzLeWh5TcHz1hBahEVJSfrQbsmPfSoZKtX6hmFxLbcGKqGHeb2q"
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
