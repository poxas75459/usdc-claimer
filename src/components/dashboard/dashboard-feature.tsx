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
    "4DfPnsvAQS7CHr9mDKq4Y2Qr9xvzbsx3RT1Yr6ZJGu4wXgHNkJKdqkLpHNftWnPdzE9zRTEupdd8XGCsiuQMfGpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDaHuZsuZ2Jbet44HjWTj2JACL1fWGfzD83MRobQSDsrcfVsyMA7tSTBnC6jJTa77s7v7G7cFrV3GM6bQSJXEor",
  "key1": "4nLC7KuLm9EM6F8pVNGd3bm9r8vNFmuEuTK6dPW7wBkiTYwqNduN3Y8c7QBLtJEYzdZeCjSxFZXrfxheCLATu4dW",
  "key2": "3Pwy5qYM4bjhsaZ7cLZ446jzAsd8GHPcbDmMGpf18TTdZzRBxhoK6cwndeF44vzXAy4sXs9T3zFZuDR9erpmfBip",
  "key3": "2z5PvBaMCpyNkjEwrhmyQGQAucrnoctG9pbBjT1bZ4d74yB8io1dZZPJEcxwbC1xdkrHvv1tJeBpBg9Yxy5GnicW",
  "key4": "UxTYKmygkknQhnak8AvgisKZo6Tg6yf5tvmV3QezZSSPX4iYVnPwgeZhSqnY1qyt4RpKyxxDrXX7t7Bu7zL4qNK",
  "key5": "2NUjMp4RwQ7TwEtcvFK2QQV7dwrSU1aYWHAioWs7ZT4fDzGA583w3cmuE5CBYfXndytoZEaaBkRChgWUHUVTKBfD",
  "key6": "3TxrjDrJ6ccUNjAn8Q6wqf4QCjfokny5JqFgTxffrSfgQvP8iyyE3K8qeuhVK1N5qxmcSrHqoPHCr33U4hULrrR9",
  "key7": "3ZvMeXi3FX5yNUjQZXmWoZU3rsJ5KRntfeb2tAHrEC4FNwQ63WXQ5rv7UvdeYk5NeB2GLBStf3zsnRHPp68SbwZc",
  "key8": "57qH2VnXKLAhMDcDxm4YYNPGW24gfCXtkNoCm9WmP4K7TV79YpM2DyCskqXMbteFu9WP6UutaB2NuQthr3EdJeFW",
  "key9": "2aMAeEEBuozvopMPofafWwEev3An9tUvkzknSC33HZcNDiRHnR3V3khxUKfNQyqEGzVGf5yKHUYwaEfvfn97MwoD",
  "key10": "3xYVLHFGTKSaRSSQi7xgBiFU4CDhoG8pPj13M73Zom5nrmJce9VqWXM9RhtdGZ1VrxuEEx4MFtHxMD5vfgfg5NgH",
  "key11": "3deTWC9y4FXyKCw8cMmejtyH8MQtYvNfe9RiyqFow5wGUZx8BoQaWTcY9472ZPSkE3JFhbyJQtgWcQ7jdPXHgnGm",
  "key12": "4V3z1fxrn5JFMBeUHYi9RvD7kccoQ5Ns3vrWKj6xpEcW5Z7odQrsLcQDMdV79Gy1iUacezFJk6HgAx4yjkFm4zpg",
  "key13": "4xe5YYeHM8Mo5ReHwr9WYBpqn5xYNxbyyWvwEQ5V3y5RLLAuy4PhNdyUTCeayYcYaqEwtZqsyakCXDS4n2oYcvW5",
  "key14": "4wMAkFVUSV7Ho5QFo75pL7NtNRErJsBzB63am9nK8KdGSwENuXWDZb7FNx9WjBBn9ZjyViE8YLP154FdxdmaT8pn",
  "key15": "4CYwTwqEkcQ8wKjNZyT7SRsjt5RzHdQmDs7kEqWV62b3SA71zkGFu41nTzrFyvXQtmNaoQhTGqhwnLsXjkhadRQS",
  "key16": "3qm2gr9pFKWSvMcpXDqLwSfsybTBCHQqauQKGUeyKeYiRE1rXTjkvh2PXRHo757ZwPxxfxewtavNDqkPyJRamcdp",
  "key17": "5qUmDZQd8zSmyKcG9bi3rwgh8TG4PoVsxZp6XKfwvGob2StQ3LGcpD2zHLcu1x6StHwtnPZEQgXDPshRC6mFcThk",
  "key18": "5ZdvAZ5NFrcfTVHQzEYG3GNTzhRqcyLqZzkzUCHS88cTbMherHTVeWz6nbi9EvK3N6akFdAxgS3JVq23q78jHoRV",
  "key19": "39dVrVvkto3oXjSq3SWNUWt1o8pbCuhgdSxoqCa3mhgtypNrLH8hEdySjayekx2aLkJx1GEHTUxjBP3goGBoMxrU",
  "key20": "2ERbd7WckzEYXmVxjtrytXVB8UYirQ5RPB1brsjrKh6jwUCQ4uYztkZXc1LiBQgf9uwSmp4pfRymuEGXmx3JQ7AG",
  "key21": "67kdXqAty5CzRU52Rm8TuPguwrRr2him5JLTyhjqiExEMpn5FfpAfhm5uJpGfTZs9CKcQrUgwomPHB2YbCybJKHj",
  "key22": "3bzYdXz6shakRurS9KKRWDC72zvjmg9osSAf2eyG3MhrYFqnBP13vkUGqxuhdsLT19R4e8YHGba3a4U6EZiHScea",
  "key23": "nYwPHJDMGW7CkkBcozfUizJPqaER2cP3juSScUsCmE6ahxKBUGGH5zi3VVEsaAYLmsEMkDqSdjZhfyCxbsoEYt2",
  "key24": "4HF2hj3A7fbGmJW7k3kNvrZMRPJML4wzW6qBqSD76hz4wPQ9WqkJoFzqqYwuPWS9vnyKrvo3jFTeK2jdqnwxKb9i",
  "key25": "5tnJxRkD9JpbhojQRWjoP5zkWWQCAuZQJQKr489oJ5T45LGufr4r2GuAjK2r6PZwc3obtVpE2Jf9z87hKeEoVt4f",
  "key26": "5gCHd2CMtpkjLMZc6F8GyVDWpZnz9tBtDjkPLr3V6ikeAg5mFW37t1YmA9pZGrhvjQ9ZCB3fUzsitsV9vCAynS28",
  "key27": "5NaRumQt133Krp5bbeMUHQ7zuWRugC8yRtWmwHFyhgB9MYDGjJX3wBBpi6e4LydoEmdpjpGX3V9YPcJaZ2tY7QQJ",
  "key28": "2Ps1H1DQEwjU6hYtzs73R4EqL3xSEqQ3QoA4UBx5ipwwAyqzXDAEkSKzgK4wUUgV9wjriG5GEsseho7vtX1P22GY",
  "key29": "2QAGjgzwHDMCn7fwcZdKBtDGP81GtkPBZRLMmN6BEFu1MQCUSQ7niigyeGuZEvRLdwJJEgqK1LdwxUS3ubxikvMx",
  "key30": "5fsSgRHeUkdrotqgaPwyBf8gEi6K7QVuPJ5KRBvexRgki4dv8Trt4GCL87mA2JjRTCxV12XnyxgH53FsFLkweddW",
  "key31": "Aq3BL1YdzvGii9hYn8qLVaab7JrFPQnrtK7JAeYr6K9NXsedATe5WdM7KVP55MNQgWf8JHHAZEnXWRT38zd8kKh",
  "key32": "2nZW6Z7VPo2SwATeutarEU9kbmGviALcUUrgcdLJncMRYxVYimQQfMesd19f28oayYKnBDXqupY6qbU5dq6mEbMr",
  "key33": "311mhksPuLrsj85KfVyCPA5BwEq2RXoSC2ssBpFnZuJBfrMizxNf8C8gyw7Dg7xKAomf9sDSEBMsxGfUFr4ic1rq",
  "key34": "2MAaxk1HBkAFkDKt9W3qHyZKaQNK3dtjEK5b148FPYkyWi9vA1hLUQNAeVS5MQZr949sFKfnx88xP1ACKH4cknN",
  "key35": "2aGqiErMwZMyc8XUeabZmB2tyATRH91EbRAPDxjM2uFdRaWarB2o4pYXTGt8AqQGrJEWUYAyFw75ReTdxXn3kMTW",
  "key36": "539N2BE3fPmrbSHrxvz7kL9mW7G1BhsMGRBHF92JJjzWhBLQgt5SgDgn1tyTPyATxz1LWbG7wCrbyHNs7yjP1pMX",
  "key37": "4XhuEhNNXA7tsUexDQMCcuArGH1nN694qg3MViDDLcSm2U17U9t9EjaAzAJDnHhscDpTx1CGT9ieRJmS5EJzAj3E",
  "key38": "ZaSE5zrpdRxGVrrZ3dE49Xw18juqZAUbe8K56tcb4LJ3kYxrkkvewPf2arbR5XgrVf8KimVBYLyrGVP8Jqc6SYc",
  "key39": "5J1eTkQb6XhDbUa1UbDyKguaAjcMja8uutZ4oQkikfLS8DnGwMBQ69HLQYbWxZoFFVBRcs89wT62hrJcPXwGb3QK",
  "key40": "5xhr2upvY4mMC6FXadeojtb8bSr3a6HtUpt7oeDrGhyY3MgDWYrBNEMHTFf5RhVmQkjAmoxV77HSssFLk3bwtWVK",
  "key41": "5s5LwR3LYMwsUi3bDX1etUGnL8T19BL4AzBKv6rYm8UPXsYzD5Z9KqvYQ1nEit84MkZLHbdNLwU65Hm7sDUNpyYa",
  "key42": "3SYz1p5qzYS27Td5TbE1Shu6ymZ1fRFvX9bDsndWtnwU82ntw1i2cJfd75xNj7SNkaXrHgYfwkGsyGdUhvJSvRxb",
  "key43": "4VG5oX5EtKs81Z89sfssj4Br5M6j6Qz9XrdkVAczRXkURM1UnEVdSQ2nguag6ecsE1xCpuKh1i9S8fhZSvjiB3Qg",
  "key44": "5zixbvPvcviCanK13pAXbpyvGx2Vird2BphpU3cQUWssEroFJY9jwhFTrFXkAY4NjTLZv9zbqCAZ3mTZx2W9qPaj",
  "key45": "3kSHMTeHJSNtgWD1nN32NYCrDXLsMkXMmgdb4DEYyaCagtz6Gj7uF6Nr1dPWxRbDjcMJAvm8JQvwYzk873AgwqmV"
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
