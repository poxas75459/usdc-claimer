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
    "3PBz1ywdX6hYtHXbJELWyKbDaeHMhSUn5YDFinZqxLBiHCyecQeL8K45sXNAVa1BxTJW7GkaSP7r9raUTAh4KXDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3edQFC6YZMkqkJrjZLrgAfhJZi75vGZB5eRYf6Bn94wVPbt2t3BfUxYwMLQweKRQG3uqVpVYJm3dZTKw4396HpVB",
  "key1": "2p1k1KBLSYLUv4xxfgbgzfJc4E6R2zQ1pqgCVmjEEhBwTGthofuKbht2GxZeuHLubf1qsgwL6dt7sngFy9WoC8MS",
  "key2": "39VQkXVMExG3dUYKF1nAxKByy7MespD8bd6nxWiUNaKJ1HnCU14MgXx5npyxXBiTysKHHdGwbGSohPLT57aH1E7x",
  "key3": "2mF1u4GpYkXxj5Wfdngd3VeFjF34jt3bi44jV8btanaBM9G1gVaShQ3mxBWrFhRQyoAmFgmWr3WLkAw4heMxoRV5",
  "key4": "4ysojLXGbwEidBaRw3y7GY3LkFGDAHAGg55CjckEvyMLz3XM4K6L4dRUZJ29xF8swJcry4DXb4zeiBcYwYA4CJPj",
  "key5": "3VFfuPR5uN1FKZQGYBnQLzJsSSY3VuYXhUswPsdugGpEhFJ6tJ5BSdRyBhdaYfTYSpP3SFaNCy33wGZCsD84srmR",
  "key6": "5B3kBi8GwW8vDcBJw8811euwtMCT2hWBJn6iSuHsba6XuQFhi4BhTfoeprPnaHkQUKEjsgBDnSTcErwE2iruYERT",
  "key7": "2x5PxviMgbRoD6MbUaZFmaceZH6e92pp3awaWHJVGk2vT174mLCTrMeXZ2SiDLNVfw5Mo9Qo48B2egzdgJBSjEJm",
  "key8": "5RUxgewm8jYRSfrobpxDnDYhjEhuFQFJQjJSUugakBSXVWqhKUbF913fr1NZo21BzqePpEtgjnhNAh8WRU22ibQY",
  "key9": "2KDaHJzmGPTVaSANiC1RXkxxwYNBYWHALi7j25LruxWcnRuUKW6rxcVZJzryrwYR3BEKFuNaG8PEPPBr5YXh5Ng2",
  "key10": "3VudvVdaJXDxz46J6sXoLE5FtfpgbV9LK8pUfXUR8TBePVyuDi3is6qGmygwqKk6u4837MDFjmWEEdSmktC688M",
  "key11": "RC4SuVJjnyXcADfSdJKpa3ThSMa3A9WAj6Acsw3QjcreDL673ix7jSFRT1aSeZfNr5sRTnDLDY1D9S9de44eVsn",
  "key12": "2MF28R9T1mpQewLP3ksHDkG7YHmAw8ZNQr3KAbnM6vmYycFz2fKMAwJgaNYWyHvehBPWkqVqjhgpjL4cafzNbcWi",
  "key13": "2f6D6jA8FUKX6mm4hvNAo1qWYkfuM6DzQSVqSmAZPP7NQtQHxu3zuHZYAfp8sQnKzFeJfbu5ab29XzAzcxpS1uMX",
  "key14": "4HqdL2jLAf3KhLsNyXJVLySGvT46UNGBCzdb7bEWxbjqXGjpDu3aHbhsTzWmNaHM5VoQoj4rU7ockEAs7NoiDvaN",
  "key15": "kjJJQnctD1BkghBUm2zPcuHoYuVcqVYbeVj4N3wc777v9bF4hSVpWErzFZN4GJXZFV9drzWpEooakfwtvpCeozJ",
  "key16": "38hAHsFJsKdpyZ5K16PjinnNG4a6bXtPNckq7KczCrKThjDBmA3KyqufAZTqiLxpW5Xtk4CTVFiKAHduz7wgsSAV",
  "key17": "51pvh91BkbvJ7pwWCZNZfeJSPeP9rWUvn6ECGJRLjGvPupyM63NpxiqDGYzXJD6pHDMkoCY2vT93sEdcjcebgC7V",
  "key18": "2bZ4b9w4L2fGh44nf7PA2YiNQJvp7BiHKNtsrHH6Nrcupvp5TTQ5ymBtg43gNQ56GV9ZMYcqPC3mDF49C27MZXbn",
  "key19": "iwwsK6xWNowuUHHzbqy5hD6i9hrTAxK8kpF5zXkZSAK6KuhyALsSSE78ndmYLVnUzc5EBsDxbjeSmMEy8dvRmdv",
  "key20": "5CeFJDo4gwyXu1tBqQt3bTBCc73zysDjxQwRgLUSaKsYiN7JGVXqgcXF5DsPi67v1bFtMiTuX5XZX4JoijVN4bfW",
  "key21": "5gVgPxBgojp31umFyQHAfsfLxKSF8ZWtJfeGUj6KsJ1db17yHxmAkJYNeGo4WYsjrRKXrwQGytvfBpqcA649ZxkW",
  "key22": "571tgRgAsQn9nKW3qth9GAEZ2qirJqK9vhVmzr4fDcVR757KkQaHBx9s6PngshQgfUPBuT8pZB5F263Rph5y4RLa",
  "key23": "4Z9WtSRcUXEtvQyCWUGZgi1gguwokgHCekXHsUsrPNAQLQACkMpKCCepU3hsLN17LLdxAzCV22i7TNyeeBDNAnSd",
  "key24": "3DUtZ1uBsDfu43GUeTjafkU4ME1GAMuWQGzPnXXEghfDT93DNGbmxcApENaGvHmMza5ZAr9r6MapdtLd7ZiJ7wdF",
  "key25": "5dNQ1DT2MuZsmWBdqayFEBV2thr6qi5zzHuti2ZbbuLbLnqB6T7xiZdmpPVvewbdAC9WViqFayQuvjZQeyhfx5bM",
  "key26": "gobxRzZiaEV8HF1ESytg2mZqa5CsswWER3RirC8D4rcb4udLF32xfA1wqbXWsgSVQoBU6EoHDkuwBALsQFvjwRR",
  "key27": "2Mv1daq53PUtKH3qpxzLA8SieGyNmADubBLp5VHqHiWxDrF8zZnBQqSAw6twHz5NSqeksRMBXDeEifF4VsyLPeZo",
  "key28": "5DDeMtnh8eBDvhiyPTfqxkhdqG2rMKBe3nJMmEcrJoR8mrR45LS1jkZUhHfmP8rnxNtUb5pFvqThys1PpXkurUEC"
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
