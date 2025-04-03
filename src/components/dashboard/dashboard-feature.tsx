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
    "2HbsrWypBxr23bJCHwFxqumuWvuTk8bqPtce4kNDhrLpF365i1HW9mF81D2PnsvTsHbKiVL4K72cbgBarc1HMDnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44srWHaMZUijdMT5HymMna1mV3Ao3N1zpNNWJR57SBdNoYFfDoDzbQRHnpW3NBtT8Xg6RSG8nWCXSMExZv2Rf1zd",
  "key1": "2sXoDcj6q4NjTXtLHtfwRnK2yTmEzSidGmkqnVGFGUwG9dZCiAq77vkRoKJ7BFRNPhAdwa9Eg6K6SWwX36iioZC7",
  "key2": "5bci4ripnCcgYHD9KP5BceCs6jUW82Gz5C895jovBqd9hBjj3Cr5JgpSa2pLsCu7zM82jYaZiku8hX5kNTvXz1bH",
  "key3": "4gVKpwoCA9shcRRqA9JsZLDETxHkQA85itTiL7D7WFDSxpXWZoeLiehdoc5fAQtJrJxmNiSi8iXV5aoFSwJTNDo4",
  "key4": "4hxrkLfL7x5vhPaVGQJtCPwrrMyCVJ61B1dL2QeXoD9Bpa4hNRQZf58tBFHZLAHZw7Bt3CjBtowox5qJ41JwWcpR",
  "key5": "5zUreCB7UxMndRTZLtAGj3PYFLK9h9ye1gMrYmSEj4Bwipzkampay3qTq6J9FXvuA7DP1aM8C6T4ywqwKTryYb8n",
  "key6": "gWcPj1sDB2xi88PX3vmTW3ozTM1vAKYuTpoL6QqBv9x3dj4egPYnysoep7BxQtrtQr8ewjTWHQ7pMGwoMoX7j5a",
  "key7": "5ggCMx5ZaYz4gGLtFSEbp3wKcX54MTwfVCUWAfDJR9Ai7NjpiGt2EJLiWcGNbKT7Ss7oRyi53NiTvPcWRpCyrsL4",
  "key8": "3DZkS1uVvgemr6oxUZBzjfRTbzT5QDnZGjMuvr8HSX8H7dGq3nhha3DcMkYYV2MRz9cjHqW8H5QQTjpWquGUqBzP",
  "key9": "4LnhTKL35Bnd3vRC6SDBfPs2gxHH7Zz64kkmpd3VVvguKWmp3FzhHDGzuM75pAiBQiunZPQ4KK3kMcoFQqAyfDe6",
  "key10": "bDsndaPdbvu9jzPGWhQUeUfdT2SBjiGa6NNggZFNo1EdUF8Gm2YUeCrZG3P6vfShnFwEvwNKFEPLYu5nu9BwdKf",
  "key11": "hwoKwrLkQD7q6kpYgaCU1iM3vMuNZduJquZCJ3EibAN3ooLQbTvaEd1PSJsmDiHz9dtDR1N4MrXJmeQN744k3U2",
  "key12": "2xbBhQndb7qif9qRttAcRhfPHEusgo4iqrXDQSDHDuSbE5LNuo7was8F9n8ZpXKZTDmqYQRicai1GU7qmxK3Giar",
  "key13": "3c6pRY75gtsgjZU3yPzRC71br29jUPbr9tTq1GUwB2Nk6KZcQwDYzCUxUig98TuYRay4fR4RE9fyhqYtuzqzNEuE",
  "key14": "3skiT7HDCH2cYrPotsrDWNf4oG5t8M1fwzkSdQfheNEapqCGdTTDaAHQwkTss72PZFaedjTYxMGPL38qL6FJ9nGE",
  "key15": "3f4kAastywVUyMLBsqSS82eaA3gkTXx4oGHdGtoG6vkxf556Bf1amdp927Z6qeJuKR6gs5zL2QRUkp8w98RbM2Bd",
  "key16": "5ipdzdEiCmpa89K6GVFiKZVrAsuGHrfPeNGAb8TnHVA41HSH56CPaSAyNL9mopxSqZxCuFhoEmrdx64YuscDqGBF",
  "key17": "3jzPRo29pcC6eipGjeLX4XhqhhQwTA2L6tbLPPXyLntPF3jRbmzWdbwKqRjzTjoWmv255PyMYvk2SXHUa9fsHq6J",
  "key18": "3EAkcB7Ms4Jf8zFp3grwmLKK5uBSbToqcDDtt5toYZtcm3JbMGWBxfNgWMWPt8XzyF9pHHt1r37ofyXJSf6uV9vF",
  "key19": "2cDETZ3iZ6QotVyxR8hED6UcupzdZv8o89sxfEhvtVJxfgLU7rX7iqNooaegJZyBeoDP4UXET3Uz1rneFoYXr8Ty",
  "key20": "4Bc51GCvF2ttDFvRomXXvRJyQqeZoC6ruf7oYYgtctZsU9T3HDaZ8KmKM9nzMqSAERHqeJNs4vDkt7CUXkwjcc5P",
  "key21": "2rdRLUnZkrNjp4LQmMq5zvH6ZcuiMyTAQvmFadeojQJ3MXQJSjU64y7UoD7qfMxbmobtGoAbrPCt7udJgpQU195Y",
  "key22": "JCNdJFREocaDxeQb98ra6Le1RwEFXDabWXSywp1yL1UN8biQhLae8pKDkMAhg2ZMBwbkqnXgXg7zHDxwdTT64K4",
  "key23": "4iqa2anUv6dRm8qGdpNZCWkKQwTBXCkUGebBkavmezR99FDZdwx4bAX88hX1nnA2yivTw63jdEu12Vf3Xx227xK4",
  "key24": "CvnsegEQpvkfpJLX9Zm1EGji2aJLCAU1NtNzVZdhPxqzHrmtTCMVgp6G8aGhix1iydpsEbJ1gV3PH3iJk3uEdda",
  "key25": "5gh2QbtYiV7efVMEGV4kuEct63sWovHq4X6WUpohtKmbj8CC2ZUcjELH4MijwNLB2rXT9QVEvwxTjG1QssYEkR74",
  "key26": "33eUwscv52JbnhATurxRryUJAq6d9JpMZFjRSFWoQrPhEYmvbMGQBRwho3AnSFDPBDeNWHZ2Be4HwL7XbvmFpwU4",
  "key27": "5HUZAjV1VxdJwqdLKHqzp1CNggiUfKDMdKXeRtc5gphW4eEyw89YuwfaTkq8LyaQ7DHioCkgHdLxpQjsqJ5PaZVa",
  "key28": "3FAqyPpvuoask5QnoACR8Qd99fRMJpCPcSgjNEBea8CsLPhjwv4Cwey11aTGq219ekVHSst9T7QkE7MEUGifu2TE",
  "key29": "2tDu9zkLmQdD1DcXjgoRtdtzqenRKTkeKgiF5a2ngmpJNWaR8oh43k45f3io4nXw8uBAKapNX599a9PejUWAtYqy",
  "key30": "zHfnVHYZogt8xgNHypvvT8cznDYMoRw261g13acWeDUxe1eWtsA9DsXKa71i9dP1HmcwG7Tc41qX3mMDQ3KwPmq",
  "key31": "5kYx4z9dpkqh2tLUZ53hRMjM7ML4Ydf9mZSwNDRZAdVrWHc9KxoknEEvkHfoRgCwjchyrVZ1bQpy9zHgz9ifU6Z5",
  "key32": "35PkMBfn6XTzJN5fyrhfZSq6N4RnjfzKi5pA7r7KxCt7kTt7NtX3s5s8esLpXP1hTGYdVVfPaVbN3qXJkpoRaiYL",
  "key33": "ihtfAgh9rWuUHCAuWpcCYvuYLNCv3CbKegzpZwVAX5LKbquhqz31Q5HzF5RGc2deJKeJz6tMmNAz3BpnHe1FeYD",
  "key34": "5dnw4ucHrap2BQk85v8HkgbKbMBkqoHQV1FozxSXiPG2WQWssTzcdiMmUwofJxbfWMAMthS6ooQSYg91SuU4d9fv",
  "key35": "3xbs2aDWF1Wv2fJH6c9LbiUDkdPAPy7zMmnn2qUVbc2RNrUx1BLLjBhGgpa2sNwQ8XET1VKpa64rbpRdBQwgzXjk",
  "key36": "5BuQe8hoaNSh7RKLiG8Gda3m6dMGZgNg8kjcfEtHPewoMcE9bRMLLujcbAfA8PYnV5w3PibomFakDg5WxKcXj94a"
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
