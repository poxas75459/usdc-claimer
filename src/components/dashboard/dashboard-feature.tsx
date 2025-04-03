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
    "3LNLKr2DJD3i4LHxqG5yhrPQVEoXGTQCoEgzpMAD7XMWuXP4d3jWBjbYVZzLiCrmUZ8SLn6qCfBqFdjH83C3aedq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "visBAYMqeoEdX6NNL4ANcAvRbSLnLwLbUprke2hDxP9LadCfcbQqYZjJRYzjAX3znxf2ffvfwFRRk6Qh3DagPQL",
  "key1": "5PQxVDAdsJpzd8EpWrViLX23ghSUvaoGThoksmaZZeNs8EAwbqDr2Hw97SG8yNYHZf51V9oDw73zBNsnAhsUvSg4",
  "key2": "4ijRzZ3494fNKdk88i7QygkxU4CRQ8rqJSBXWkapcddM5WsD9QVwEog9UnFeUKHXvBiuWzvBPN5RmofXSzF5DFTQ",
  "key3": "32HWSkAYt5ZPAT32YXJuxCiUgMNQRK2Eg4B45ZE9X5mQ4UfiQEBMbHLG2XrGjxkkcZk3Af1xGgHHa7WvVQepuqvh",
  "key4": "3td4dBGfzgRPHWjKtCY2QdxFaPFY7Ezgi6p17wkWaxuv3sK4T1vk1Pk2asqks7QMHUMLBawJ8JMbGjhT9xv6mqbR",
  "key5": "46fbebGo9rQjajfnYgUadGisDA2QMcXhC2HfS6KjCTS4FGjGmhraxF7oqGhRXJo4KBToQAZsmuVCdk7kRDkJiU7F",
  "key6": "4ZuXJVHkXTTZgKwJ9z2nvfWpvzwEzj4LfWbdgzsGxD5i9AzCh7AkETh43NPgynj9Z74FXBDCeRjjF2TtjWngQWpn",
  "key7": "2TZx48VWGygitE83hb2h3xWeRrNUWyg3XohRLYVHWzVhZd6j43LM26tKjPY8N8wNRkM24o9BXuqtbyEVDhWKCzQk",
  "key8": "qCQgCUBZ8jKJaMQNbdtgEiXoQJL8eLqVSZApLw4jXUA4MY3XDzjidkmavCiAczeSHBrCxsyALeXYHJt7E5sLn7g",
  "key9": "4GQ7ew84LVsUz4SL4HhhppjiUowUSyzCNz2eLaEohvRE5iMEdk5ddDoRaAk5dwc98c8Wi1gxs7BnSN5PhgiF1uBY",
  "key10": "5adxn3xegp1sSwKYvdcvAiQZc74md7rV4qwSDRFstoXwuLNqySPYKddqcc3GcBe9ujykqXxE4cbJM7hm9S41hGf6",
  "key11": "3XWh6qdt9fJJKQ4nHtPxwxaGYoKB5BWeRejVU83CFf18yFFkDmHYeFKkSukea2cWp24WDapM5rawacajnvbcSQ5Z",
  "key12": "5MKfBcjpUMiDmuXy64kCFacNb2B326vcBhs1H33ZDjr7RqeU3vrsXGAkVvDG9DAyzVtPyM4o6K41VerCoUn9nTGT",
  "key13": "4tr8yT3hCciTpfKGdKA8Hb5ceBUiE6BryL8mT7THGY1DBaMLVJAwRjBcakDj6awBty86wGqvDBKeG6oBbK3KZSoC",
  "key14": "2xAZEVk6qoGszJZCd72StXyN1oUVG39zuMPvRLVojHws8Gw3QTp2XFc6iXdJFX67AzGmTgFSRgUas7YiZcGh36Tt",
  "key15": "541mRbxnvwVC96B3kbav8aXLy4oysTXnVtzgJLNUiPsyGoZ3CUzX6BcqtKJbA6rkFaqohuWdLFiuni9NBc2HBKSp",
  "key16": "4mj15RciaToBsZbnbtCYTYJLzQaMRM9FAC5AhJJGjDkt3GQpemTdRE1AjBuS1brcMDtjg2wzvfpXrhoBEk5oirjX",
  "key17": "NyaL2wx6KKJcr1XwKko3XRANFy8Ats1tLQgaSvXimgFQKUqm1eqhYLMwMpWS6MMNbcnwiyqL6HurT3Ctokffudb",
  "key18": "4sbM6fy13n11d44WZtX7cZ7wyjbVeFqdYqASPzWbgh9DFe3wh83fgSo8Wxs19HRCkPWrB5Bz2E4YrbDcs6hnHBTH",
  "key19": "2AiADRX7pNcaNVAKLGD7vNFGC4YsE5tZBF8An3Cr2bueoQQiNMiEhWbvSq9WFinwtkM3f8wDwwMAhimTe4JcidFr",
  "key20": "4REBWYiTiy5jUMcHA1THBBYTNfDUEM6ygYKJgzKpYp3WJS2x3hRxdTmWfDKdgsA17QZNxeqRF7iqr4vnPePn3aXq",
  "key21": "4eBdRe16hguGBLWzisgHPkzgtJpNcj871Ci1Dt9mW2zqtKuGHtVKw6iYXRKuyVYMVV9tT6MEB33oWWvoCGhUMcri",
  "key22": "34b8y4JYbWJcaTZK8xBrP7hAzurDT8tRMGYJDgWeC8wEN4EU2LwXWDynPRwTXgNMBxmrzkM8ZkmLQgVr8Ugt4eyk",
  "key23": "5Qivr8cAtHXE7gynJpCm3U85iV31qEXGHbeUrrJehCfpxEsD3nGg2gXTf6SJSt3DvrNHA6TqDhhzh6qi4nfycc35",
  "key24": "2feUZZa8jbnBA35Sow2ocftXeQYe5ABBEm7SVqfye9u3uRQupwynmoaP3QFQFAnYJDu9xQCLeywp4ZUHBrb7Vk9M",
  "key25": "5weykD8zgt4gNDq3iGvUebesVVrEyW1VcBgTZjJs6SvuAvXQg6fCCJ4SGo7NePLdxUgBQCZihxv5fKzzJ53cttRF",
  "key26": "eH7jGxWnWu9zMbGjAPouj5A1j58q1KRsJFGS2YTBWCv2TVetS5RgaLAavTGiz2Tpz553JEZ4vSJce2zkoeAvPHB",
  "key27": "2tEEF5WCm3P4ZGScX8eLXNnMVCtwfpueMzyTS87V1GiLXwshQz5DtiveMhLy856pso3yemDv15YcnpyxHwMkPMPq",
  "key28": "46Qi2hCogUxyAwfJJ9w1i3W1PJMjJiXeQ3Mx4xhMsuMcbeAvLXQocgfpEvCvZjYiqdJ4dm8XtZvMQBjFyjgjk4hA",
  "key29": "3feJc6adq4gppk1XjpC6dqR7r4CUkHY6GfNRbVavmccGzknKoRigJzKh1nzQ7Tj9MPwk4WCDzVim2j1KPoAhwbW5",
  "key30": "2SEqKkpj2HPYs779meLijrmwW7xSfyfnQi3RfpgLvMUVgGGuB5qfq3Ps3e9ovRTDbe1ktZHMUxnVCMsTG9yjYamj",
  "key31": "2T4L4WsqWSZfapbXHRy4kmB1scLq1aJuLg5sTG8WgBcmi9ccvBU22cgsMnJfRG2UrnxLvVTfCVuedv9dUyXkJwhx",
  "key32": "4oTnMHLRFd1jKvwzEY5LRNUfwz2zi1ZdgQPunJJmdczUGjNK7KLGxJnAfJFXzd7ZfJhywLdtXUy8umDznGPwnJKZ",
  "key33": "tjLzWm9hESQLGkD1GYQ16MTAJF1JQP6S7HBuhLYHzhBoLq6HPwMMwSjQHkwgERHYb5X2ayyapzEKKZjPVnjVRZi",
  "key34": "oMADPEsNpNoJTRny6bH5LrjKDdSnPG5bu4JmFiXiB5E9ii4wZvJSfrPMxdKWxd7unpkB4tPJKfJCC8PvUFbXRni",
  "key35": "3vzpn7XSSypkbJmwWDFSmQ2cS1oA4Nf5FXqd696qhtWo98Kc1yBrHwCaiZ5pv3A1C6EUpffqjSke7DKywbqcGVL",
  "key36": "5eEtWQmcFohDBpghjwkYuBGQ3pQW35ezdc9ySCFEiLqmQ4iWZ3nNxAxRNaTXpgjXANTqiVu25EeMJ8A2YujDbhKC",
  "key37": "3z2fSGQFWWKeQBbVcP2ibEe1jHLTbyVR69To717zaLjo3151SLZH5NuFnt253r9yJYwScXbGXL3zGNWrfPLHYeSx",
  "key38": "223hyNwwC7dvkSzhApmdT9LuAnEq9cEjdL6pZitxXoaFAe6kzm2z8AEUcZxm6d4x96d3LP16JacXK6crEGkA65Pq"
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
