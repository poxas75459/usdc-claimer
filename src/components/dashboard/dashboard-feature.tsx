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
    "5oenay6JQH4hWqgcrahhVGnct8VwxwSMrT2gjqcum45c69AhehtZ1Cz9i3fZjzEeTbVWGVEK1NaLf3K6Mf4bnHyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkubbtXPNWJbqEeVMLGEogcgALMcSf5tBb4ua2kfczTMZva75Pj8ndG13MT6rebMVqcutgbLX6uDQS1F2PpYwUo",
  "key1": "5pnAiYciaBz2b2E8xciu4Hb2mPWSQpvijg95eWLyCbE3QV6SLzwAKsLKgCSxVf5utKj987EAihrG43YWSCCY6i8Q",
  "key2": "3fLFi4Qu9PAmpAfhtqTviBxCyiNq6avK25Tyx5PVpkKyfa1itSvwzPNUH6NskZGEc2nKQezANxoc2ZWse68Bvnf5",
  "key3": "4Um8H43rtgpgDZtGcfNiN8m3iSNMGgXnc4cThgMfi1joye3aTCiuisVtuj6kx6UoWTMXFbfMhjdXvArG1yzEoUYm",
  "key4": "4hKFkWB6RtKauZLfyPJBVgdCERerqHUHJP5R3FqV92NgGzeKS95jqo2p8ecDczm6EiupsyLQuii7WYZnT9pZXZCh",
  "key5": "2LKSGwqRXj7S51xpZxhmgxecsvy7N67uJPM1gdK3TVEbGHHP3GpBGwxyXQoLsnhwhXiTyA9rCzKF1zoWuoZ84zqt",
  "key6": "3T63B6eRhsWdSNg8AUhpqoB3iXnP9CrXVw1G7ArTrJzjyKiw98pLnFmP8hZAMq9C7xM6avSskpA7HmuNx9eK56Nm",
  "key7": "ap9SiQfBnSunoPhSesy4i9QXSRUSEhwGiapLb9un913eMHtSXHm5ZXtLNHFuwMk4YTVD5nr4nxDyKoTkdoWz9Co",
  "key8": "An9wq45ceb9qYVwcvURcq2Q1N6PvtexeYDrayYjEW57G7LRvExp7CwwfL4XSh6QG33yaNzgsbt2cjnQraBeP82N",
  "key9": "5yydHmUFYpGpApov2QYGbH5d22ADRMghnREVKyciA1t6WCdjsJcnrtNQnpP43Lou3BiMrLEWKJfXkpxJRhmZ3fY6",
  "key10": "3wVVNWUcFLGhGNAHNfX4nY6TNZBeeYenuK5dGG41Gv5QZ6N7EosMPTdXUuaZF6bwfraEBVWEiLfKc2YAc3DRb9R2",
  "key11": "2efaLRfsm8rFYzk866bP3E4VkrxAfpEUYQ8VUeFM75k9AzCSSrD8hJecvjWydRmG9rW6VQFdAXwNbyyg5aBu4mG3",
  "key12": "2YS3uU4LRDVUNXxXmGHhYPjTacXbTwDxGWfSymh26DMjikUNFERkygmS43CQMuWpHBEfHitqttevQwbCbt5sUmRk",
  "key13": "5NGTMV7Dc1cQNXfSR33Y9tksCBGXm14DZDdGa5KkpSqKYBtmhWsSH24SHEarKqjieMKjGpwLm1RHJ1YV3E7bRLPW",
  "key14": "ajT6jYQZt42LSiQ6Kifpm2XLWo93REs4wzSCLongfqTcnY19EfimGdkf93dseTK6GQmmo8JZLwPYjsAHbQVNHQd",
  "key15": "5bKfjMVTZmGnBWMMbkiqGucHiqjvDhMyxzqtUyB3z561we5a9ruCgPhH7tznX6jA342ajD2sPJG3Kxo8AFFhppEy",
  "key16": "3np4GdQ9VW4oBmqCoqnBHr3AzRYvuPqVa6CowmH8WcGePNp49kXrPUHR8z8FyXer3ZZaHCRYRC6d951PYjJuYg4",
  "key17": "2zvi9o4ggmwbwqxrtaCAaexEhhJN4jTFcNH8N1acinhXdhic7Y7jKjGiMa3jitdGGvbxpcaXqD9eR1f7gEg2iXaA",
  "key18": "35EMRUDQogHBheZEbV97xnWu3xB5YmbRGaZ2rDovyKLatYUFAZ9fbowFeihyg78zTpkScAEgY1SmPL2E8svfvMjL",
  "key19": "2D3uyZFstoE8Ub9jpTYGD82x8AYmEdqmCCpJvJPp1sh7sLs7DLmBo5HqGPXvc6FAffEKFMmzxoT6GY5riJQiGaA9",
  "key20": "5Q6BoCV6s2ueox3tP6ESJDB8Gsz6ewsD2AK2YuHSxNuSRmtcZSWYsgDeStVMgJ5zX7HzwMGEJ4TfuRCCEbDmEdTx",
  "key21": "Kbn8cu5XwRaERpHnWWBXsr2vazChmtAnGDuKCGTj58tQqHSgzYHD8nfJAGiaZbuAgydyXsuzCgdJwWDjWHqMYHp",
  "key22": "R2SC7zFafZfb2Y6JFoAtT9DpchA8UKypznoFnybUo39QLwVHdgntUJtqQ3m2QJ7EH1wDoi4eMv9WorWcXMJ3pmZ",
  "key23": "4qwPMXLbsGjLPEQzq7daHR7niHt3inMM9sR1aNpMCfvPVrBobNLmao33taYUn8wCjwisdcwTpQoyF34DXGyeTmo",
  "key24": "2shdu9WUio9CLfUFfsJPuaBcrPUucUSrA3GbSTUfWcMeHm8uc5pNHEitXZpKpPaqyGbnNoLXyfeFkmBc2G4tA31s",
  "key25": "4Q4PxvFHoeZcXqCmZxbzgCDtSq8vc6YEgG3ZWrEs4ucow2qqgmyVcaD4PThGEoJ9TkNyZegkHQtndkv91RVbnEue",
  "key26": "3bNquA9qvgQ5m4j61PtCwQWKLwkXtRobW1V9aBwLsjBoHDfr5557BjgWs88E4pMfWCHP4kLw8XnpwrdYqTFBm2eJ",
  "key27": "QPGDWELJ23BXo3Kk7EPjnGTH6kjAkW4xoU5F19r8GXMSJDyJefnxHQqmFz9Pgsfe8VQbYBwz1bVuJ2n8GX4txmp",
  "key28": "5sAjm8pC2inMe7y4bVKy4QKzppCozWmcKrVNARbKnE2kgQVSqyFndZ9w9HbGTpJRxoFFKVH3jWDzsQ5uhfNss5UP",
  "key29": "3t7Y5TtgGYdyrCTxWKXrKEM7Ai5MPcxnpsiuGB919XM7WyCAoz6dYCM5VXxXSbcigVMPcmrwrEVmr2iaJzFVrA1Y",
  "key30": "jxpewiQZJNXrqvp38kWVF9fmRYNF4SQS2kvkYKH4EV7zNfs3bry7RcFu4dmKxEsh5v4be1Ub8Gy37JHP3dVVKCP",
  "key31": "L2ui3C6aHLw46ZtuDCp8s4sNcwKgFMe8h3UziJhMMk32Gg7NdgGY9ddYRpvGXmRF2L1EnnsxjwchbPoCUu9G68A",
  "key32": "5pS9zxZURR3s7xHVtafEY4dS3q2hVDNxXWV8ci5uVAWSQ53kDokr6X4UHry5FK7vxaD6LqgDKEayyF9VPa5uaruu",
  "key33": "63Mo27jqPGSwVJxWUbLBk54TKAWVU1EvGbKWDYYHXWK1UqcrSiKFr2t99BRp3b98JvNQR3L1NZLHCNXPZiv4mTBH",
  "key34": "4ncTrXN4a2NZdfvo86jwBfiXydPF9o6at5LiZNuEH31TDUZCZDPxbj9PtifK5uHVZEq7pfEbzWWwZWJy1dE4szta",
  "key35": "5fnjv5gcvkrkFL2Uw9gqgd8nSfiEi9UiuZWKt9sqs5teMB4ji22YHBJzyLKZ7KEwSAvG73BEyCYaRg63cjgK5EyB",
  "key36": "5UeZyzLNR16DZKkKXQRazwDuNVhBy33j5fxwbugXbsQacNStrKLdduSiMQTzgjyjBqUCZusDYmAdaVh5SFJ4hTRv",
  "key37": "3jwFEphHgJqTKSU1rCmJjtetvMG3s2xf2f7w9k47ryt4xa9JRxMNB6HXwCHGRqydbBjazkX7Bn1hXqpTfDSZUwBC",
  "key38": "2JupnoqE9BwJy2wmV5msDvu3jFQ9xr1p8FMh7iKWyDypzwtmuPkyQxiGLqtYCdgGxaoseTUeDwgtWsMJQ4XZADxs",
  "key39": "cnJ4PJ33FyzG7SmSaxHzESynTjtfLGMUXS8kc9BCEhTHuwb8RNR14WLhCdMnxKkS81rHkPY3Pp8VYDVou6MuZC7",
  "key40": "HiRtnquptv4MVNHudJYsnQMU9UzHTkqk1M6ithQUZ7oaiPVzFsu8ZSsxeFQXtR6GTTrvJFsj3Z58p6TeLfNAumn",
  "key41": "5ncbdtAX6uegm9jo66pMqS7tNScqB3GdipHxWZdQhwXnvN4wax5Q7fuYs6uFnzhRxeS2FjjxMMCSuKJbsJQbPMw5",
  "key42": "3sjB6xL291QpRBN2Up7pWESsCfP4sbsiXmEP9MvSV44wA9ZgPeeGmULfsmWGpcPobNzNwMToihZw19yQyowpsd9",
  "key43": "WjD9Lth3RkYZ2BwSuMKqrxBapbjERczcBhnz3V13Q6CRS3k85mGSjP6MyhrMmH8zWoVrQKtGCPkLDAfYD2LGCai",
  "key44": "3J99mAkZmdmUwiJJBg4D1CdjKcBFJo1vQCNLft3bkFXJVxb333kzK1Lgi2djEZg2Li6f9FnLXCEFpC7dEandskEJ",
  "key45": "3mVeFhohsd5PRjtiRdtUN6LTURazkq7DgXgEj8FUF4iWJWXeuVZus4veXdHZJWhdqeWKsxJB1NYkk2xrgF78ebXw",
  "key46": "5GNL4nTChh6FHsdYfuqax753W7uRaUTZMxXMB9B9Y4iZJWMhW1gtAu6M77yAdifhSkiqvcfdGvUMUnWTTsZr5cm2",
  "key47": "671CLkfB9v3aNz4or6kXCN3QY6x71h2Z4AdcbCasTVaq7dQFDhqoK1Q5JPzXM18w2S9nPChJ84zhM9tBPTZJgQSD"
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
