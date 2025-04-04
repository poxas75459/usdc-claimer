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
    "2YW7bLMCJg4WAMKWNgUECBpFFxK2bokxYvN6XPLGCH7qa9kjrFCF9eBFL5bwVNbRrSo3nM1BJ1y6Eysk1gzWUQnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BBjS7XQkQMpGZTinseNU5r9vAQ8uUSpq5FbqA6zq9nUdgiYvEYX4JfP2k5LPVfjZMZEQP7PcA55omynNBej8Bt",
  "key1": "EKmiftnuu3vtS37owR4aGRvPij1YtCCYCzoY9sV55yktWz8UN8mE1Z8bcJZDceod6L9k12QkEEJh7rB1K1qMLcK",
  "key2": "5Zoqx4tNQs2cu8Xyr3DstnWedJiRG8fTdkkjwbugmv469YGmRVgEgCyDXe8Wte3ncboVrgFGLLbVQJbX4sCUqCRN",
  "key3": "5rZW8avicPBzRd522MjLvfsJRrFJ5bzvipdq3hVy7vLQ8kqYuRSGswcdxNsV2S2Nfzhv97QSPqXdwRdto56Y1sdW",
  "key4": "2NLZCGkaTWdP5x6C78hFM268g2FDViNu9XWtQVD4KHUbkHRNU7pGutG415GMTRfTW74QeMV3drBEYTogAxFfWK3o",
  "key5": "fw8joo2kdM3D6x5XSaNgMYXKdhqWVnBuksTiMwzFgjijLevn4ECqiwUGxGSfXK3uyvYDMTob3MuUesQjSWwUDEw",
  "key6": "5trmawDc17zH6KCjU6BkDH9TSHV4ppGa55yFoUgFXm7gbeqaqzwq5KseVV7b1NxwmbvjGCmoLi12g2XNtUoATrQK",
  "key7": "25yQomrkw5S1KxTVs1kDCeEL3HJxYfxHjkihHY7p8QxvxudGyXincQzzGfHDK7WtbJq5MP8EzeKq1WoQUKYXrJ6d",
  "key8": "2uT7U2E9SNUFSKxr5ZZBywWKMSqMseyo6X3LWBoB7HNWzn7xcTCMbDBhuhHvyMsmdwCFJzWawvfe8ZdW7TPK8wbZ",
  "key9": "4QeP1hgabrWi1j11h2ovKGPRshBD1LAhmp6coDxiD3dVtp4LQhuRYiBraT6vN7knAPqvNnBXTGuMS44UcJgWKBd9",
  "key10": "37hCf9MBC1wgm6Fc995Z2QdPSdRoSseUTTgziurf4GCjkLWmQevgK4druWLQNZ1SoN8VVKcWxd6Rq5UFu2BzGLv5",
  "key11": "2M2PqL4RMkM71DD99QGdeMoFRQvooRuxbN4CWiMWWBooXpAawaz2qCr28kUovdHfkcwPDgYXrBUReckZkgpW7ZzS",
  "key12": "4WcCocR3GboXGjmsK8cWwgvBGnE8soYdC1ac7kRGrqFV2TsZGTuBWMvgo49BXdzJbKL5gM4ttET1q9MKP3BrT6fw",
  "key13": "3XfqVGGB13pmUxLKXG8Y71pu2ZeasLgwbS4DrZxgiMLQk4duudLq8wFYBng3htpR1Uy1B6exPuMbVsuBt25x9yKS",
  "key14": "5kvVWM5yr6QMuySv1VT2EWm2spvjtfmW1q7AjYzCvRWi2fwEUszdcXziL1sMkWprYuEurDHN4tj37kpamarducpf",
  "key15": "5rhNdoCKLo2YFfrLPZsD4ZruhUZ9nBHvGjGvszCbEQG6bH7FJQYYQwr5FAsc482QwVL4H7jbDU4YueKkak2HdPYV",
  "key16": "3KDrWMfFzeh9NZigqnM54HphyNDSMs3o6nnsguotFRn5GWy6s6w92rA8ws2e9xgDidsUywtvwqcUH7SY7uhHnzhz",
  "key17": "43J2aQ6H5z6W2ZbcnaEYXfMv9be44u6yxrJdeZpZiWj2cdVKHdZuDnS1Zmdi24CTzA5ctpktuArV72dMwQyWuXAS",
  "key18": "4n4cnGmVWXQ85N8xTnHe6P6jPkkUK2pL99B6b5uXWZE8waqzuaA2kjqSVhMeGLJ1WykcuzChfxXwRKD6SfVDwE8s",
  "key19": "5wxSrju59ZiEhRuQMVVH7RXYpniKzF1CppDk2hvV2jXeTJvdFpHXxgVPzGPEqcofrhQNvvdBtZrhx68zkhxvqWgd",
  "key20": "3knyMKDPZLHAQQ9hWR5kX16kgek3h7GDqqF66mDDDzdMhg3gzTEicGMW14hXgnjyD2PkfYCFZRUZEtR8DQQcEBqz",
  "key21": "2WHnfWUJ7A517Rn4EA2rNZYVkS2KBjviyKK35J8E5E2BRsMWf48dhZpbWz4fQnrmLwKZHuJJZdJtrwkDznZodT6W",
  "key22": "6fShfHPxwbCNee2hB3oGsBqHjDuDEzPpg82V48eN2Xw5JXaVHsBsQprNNVca6JE1mQnHuuZ7yt2JeyoVLf5NX31",
  "key23": "2kBAcj6TnPt1mEEwMMweg9rm9XD8mjMQSpMdpcYpwfbBhfj3vVrDqnig6Kwjey5QQjsihqvMM98pUX2M74WE3ChL",
  "key24": "46WnJuSkWkUgkfw9LBxLC8y3LJRhoM5LvinC3gbeB7w46TFRVJdWWWZTVF5YThSZiQBzGDCvcQgZJGUHy8y2zyHx",
  "key25": "3j3rcWKUTtaeQyE68Lty956HfTqo9ZLxSifa4s12V5EbuZkEwEGM5aLr4bd1AX7Z3Zqkgo1QZsJSnJ1zn4RX9gAo",
  "key26": "P1qX5bW8NbMeKbuPxLxTL6tuzwbACZuAq1a6LRTR4zuSQRCdQyixb6T8uxbXa66yo1tAGcc7AjG5G2kCnYMwn3A",
  "key27": "5u3eo19FMWjDQ9eLAkAyNSkQFk5CqerV2pd291dTGU39c7RPrL6yLkh6Yi5cd7v4rUR4zDC5i34zZ8ekYJ1bGEtu",
  "key28": "2W4cw9rheC3C9r3LqWKmcfBDJJo6AdbMEDwdm8ikNGXmsUh6E9RdYtv23YiaTfinGNHjVwLupiNGBk3vtNhEpH8D",
  "key29": "4vdUSydh2xqkPSRN6pZgV8oushWs7sopQWYEYfTCUqHEDZRywHWLKoqnBBr6UzNP4LxTtqYCEpWSGCWDscdTVcF1",
  "key30": "5i2CaB4ope2qjkF6VPyzRQomXWC5vwk92QRKmT4eWU2Ur6xNLsjw4NVdFp5FS1DKnEftJcJDTaqJynFpFAXNgqD2",
  "key31": "3CP7VQoXuCqDNBqZfnWBPU7iT4ruBsbT7dpNL6EU1iSEsFdvw1gnqyGLLVXfSbcY7CbNqHAnreJTARHP3fTUixa4",
  "key32": "4JCdFY3wG71RNo6hT2swRYQ7GJLVU3NqpXsxUwMGBZ4jUPdSzfAgbH6cGta2YPZ5VAAXGsxURaYHQYK4UMSe4T9v",
  "key33": "24WtA8d5zay88Ae4sTdLnQ2HrmNMRVQixtH4Dw8FcEg6EqvEWzSELKr21cYcTypWuK8No7EVATbFLiQ18uhzjsBk",
  "key34": "2LgUzAhAbyxmiKcDyesXvM5d8NDyMZK326q29nfzvmZQvcffkx34E1KKxAFGTvbfHTobMQTkhxjhTcuAGpDmsJPY",
  "key35": "3Cgrb1Cn1oE1WYWhFouGKtw1MeR2JoeVV8g2ynRPBr2DbKDvRkvSatuPPkYsB1F5biLPyfyxt9WRxwYCSeQnuQgQ",
  "key36": "2MLUQA3Yza9P9qQmA4mfDrSbWg4j7w8WY2DPK8ssrs24a7NiXpnBjMRKihqn5hMG9Q2W8t7Y1sB4dF79ViSQkYiu",
  "key37": "2JPsnYvdktvkdrsvNBuBYXNnZgWeeNt4TG3QatCmjKQbBvv6y96xGav9QXdHb3Pfm2Wia8zn8vr4mTE7o34kevqY",
  "key38": "1HTuckHHLnUfwvQreRRR4AsuPBh6AtT9vjjppQYqMoW3LQnsSSE7DaTYsdf6sJotBmbeQN1SDVJdkM967Dz5mm5",
  "key39": "3g5ZRx65VSaK19TzsLVSDVTdAj2QEGCkyPw2shSYLDYo1JKDPkRQ5hAtdC1fWUcEDZj5gYHLMDiyxTnnJk3hDhEy",
  "key40": "2PP7q4Jrx84VDrTrNj8ZzqySsSxndj8vUKV5ERxVrszyERsh8zAFgLdeaadXfrfx2zHr2mBDdx7C3BCr52DZun1h"
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
