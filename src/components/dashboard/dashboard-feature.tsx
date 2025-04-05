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
    "53XKifyfxfqLLXZfHK6v4F5sH4MjzLB8AUQdp9TwuCUkr1Wj4tTaq5fA5S9ogjPGhEzWStxjb4t26ST8u9wqn8nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sMtoVZ4Kr2iE6vzGj3XRb2mi9ESfph23ZAaro8wwdYaGmxodJ3ac8ywrW1WyEM2s8WvKezoJ59Ng2RwxoSA9XZm",
  "key1": "UToTnm2Tx5aq2gHhQZEgVThBRmJgZ3mze1QEQDd8qZ5AABALaHTsqh6UkLZGR8mmyjMZery4tfPBS9CVJvtUjH6",
  "key2": "3tUsUux7Yy5to1M9fAdZGSQF1LC4pUxZzVHLjWciYsupaNU3pM1DKRJMjYD6Gg7STk3EzLLYRVzEzcSUaucs16N7",
  "key3": "3tch47LZBGBGNgYahVCrqkx9GsAThZbQ75kbqef4be7uDhK4QPVGt1ZGS3GGKiZrXnTc91PvWwCjRGpHejKboR4b",
  "key4": "2VMuq6CEyyKpMA8APEenx2ryfujs4gPttb3dbwuV615dw6ucXx46gSoLLGPFNSUxyhXk9MjSzmrZYUU7hRwF24dg",
  "key5": "21djs8aVHXpgW8CgY2YmWdyZJGToqipjZ6FDGnqfSwNW1rRRy7nnTjbVaXgqLVPTxnYHvYAZ1GGqkoX6tzYYrc34",
  "key6": "QNJqUNKFwC4toub48Tf7HZTXtsc7kKUQwu73MBpUBeUQDVDG5C1sCy6WYvpUG7wG7P9EJsfAW4ieortddw3hijj",
  "key7": "VNP9BYNBNPMqX8rgEo2yuDBsaL1vyF1D5k19VEquzpKnyZ1qs1zaNvymyLt2XHTeEVaSJzjTkf1nf5VcKy9Nr1g",
  "key8": "4YmPnp3AEpCzzHtwsXdTwEoV7QmKjr22DWZUkHT1WusqJTuz4wCGAJsB1ZcHEyCvwwupLnuroT3JLzLVrqKpug5F",
  "key9": "t2cA7msqXUdL2B6qyPcE6VHCXWxmNADcqywBmPLgWuG3PmMi5APMGiDu2a7hC7Toa9Q46AndARiGJNUAgKeQbgn",
  "key10": "3CswFxyiLNjnZC1tBusmwWZQ2eNo3khwnSzQ9souhhXgC97whPiVSJhjWcgo2AeAKUBB2igqTWHt1RNZ4zsb9zvd",
  "key11": "66npmyg63C15TYa58atQZ7RXWGuKPjTqCPefRTXM2S97HavwZdBU2PNGM3k26aEzeN6RaUTjXXaj9cEk74psUohD",
  "key12": "57G7YYAd8p2PCAs9pGMKJFUheuFYcHkzvtBQoxxzEyX7ASw1aaEfqSXnN4Zuam4ASrmCDQaHyw9bi9ATEtu4Hq7K",
  "key13": "dS1eCVEkLdetWk4odRyyRYKXSL7oWtEKxrg8uKCKFgYPxpeTPwKQRFf9S5XVyzMdaPkY237TCUEcC42TwkacUaX",
  "key14": "5gV6ZuEkytAGHg6WYehwaid9rKtAcJZkbav1g1yRGPxkxq4rxt9co9ftGnLU6fUGzN8hUH7RquWv5ZL4Vo9T6XmG",
  "key15": "2RtJCtz5Q2wg6ZKZQyx4NcGxjSujDSnKU8Fg5aUEk9jY271dRZu3xqbkNrgXKKLes7nBrj7UFF4954FQHNCyCVFu",
  "key16": "4YDcA8fFrZxYNoj4eGEYEzeoCNStgztrSJVEUDnBKY6hLFSLdX8qYZH2gmrPutcw6dBsB2xSr6qtZdeNtgXe26yu",
  "key17": "2u1CgD37zNsY6C98u5xu4NAMF24m8CFxLjQ4fbVp9wPtk5Jz3CgAteUyJ8Pi1vLKQiHiHWZzLj46FXSW3Jo3nyBB",
  "key18": "4NNzDWXwP8WFqwM21DV4qQa9neDKbCwSMwySRVRgxhfvGcKoX5tVHB9AeUArJyC6gy4b2RV5Y1beZqdyhF1pWBVU",
  "key19": "3HyxmsW1L8cAGyRRN3uqefZcEWaHCFRZ3rRp6Aqa1waYXiny6cyKdXFvz3xsLxiGSsZ38nnVyEoPVz4Yw1UyM1yL",
  "key20": "2mT25BjykxoW7MjBnNRXXmsjE67aJxGMDUReqbRnBV6PcS1r7cdZm8iTfJ8TDAEFJ4E86aV3wgt5H4GnCzzc18YK",
  "key21": "2kHGYQ75aWgE58Q4PiQFbpPWDiHsRx4V5t5mm2K3fTqbQUvTEdByjQXQj7JZbZwL6fx5qHVpAueZ7pq6Da2EenyT",
  "key22": "GwTqM6R412Pwq31kQXbVCWFPXd5go8czKGMCw8nLbH1TxmhhFPLxbnih7ZY9Tmmd5Sr9ZeCCB6JkEL87SEruNyf",
  "key23": "5Kg4SKD1zNhxkb6h1AUdqKWWH6sh8QjynGgqZ8yvGGFdU9KxAKq4NLJTGWQz7oMfe8B4KoHwzKtZpsNwvh3NCXZR",
  "key24": "5TS6ck62QjuqYepoeQ2A15P4AHPNZMdYfPZKxKcRhTuoVN63vQyXgQvR22U4mtrp5sspmtqEsQo4So8CBCU6RVCQ",
  "key25": "2FzbZNetNBvbTd53U9LVfewtgk2NbgNURjKuKT3oL232MmXj8KjjjvVMzCcpst3GXDzMchR8hdjqveMPxaqyoULy",
  "key26": "5v14oDrD8TuXPA4GQ5nGs2aajcWkuLV5EZ5cHXqegn4SaagTsupksUfYjivyJH74xohGgFGCkWMyHuEuMSByZARL",
  "key27": "4jGUjtac4xBbFnQWzcwSVJGa6gUzYfKwWh5t82cHSfqZwJC8rCpLVAAgP5FuxkV5VW8wtG1M6FzNMh2YKifZWW4s",
  "key28": "2bjQAoed9fSDng6G83fCYkpJKKXgyAU8WdfrdAo8nhJs8VKSGcr26ecHNFjYixW69mdTMLJhmJkZ2bTwstUCEawo",
  "key29": "5ZTbDgqiDgVpVCu6sB8WnoRPYzGPBPR6WbfkNL8fLcjNb2S4qLDrJHiPwrrcbBeZzY1t8SA8Pr6Rdf5hd5r5nsbH",
  "key30": "2YLgk56TEBE7rnE3PQ4b7LCPGcjwbkoka7Y9WQq8VqQGSrT6SPFUXvTyfebEsNhr5pUj6bVbMnjX8nbN4FLDxyhB",
  "key31": "5XRaAq65hRTkPDVsgf1nZGqVv9Wnmu3uS5EtWYpNmfbck5TqW7zJwJhcrrvxf8pTiNS2LEY2UzS3Yru2xh1J6Zcm",
  "key32": "4hhwioqQxPnvcHRyPGyP4xNSATnwbbK6eHeKvbjsLxUc4D4KBYMHk7QT8ZCmf62y9ttwbwVHQw7QB2T7hDdXxna6",
  "key33": "5hr8ktEP7kHYHkMmE6CDUrxEG77r3yhcEktVLx8Ffvs4S4wSsm5btaup63K81xukvvVKh5GJT4sAf4Dp6ykbtU2G",
  "key34": "46fqHrR36NSfEdpu5HH2dsKnzHp5Jqzmouu2RA16QMxVwgqwAieRfhfLXkD7urVUv6ENg6pKncaSaaezkeDFpH7n",
  "key35": "2XjaM6reTTMQH6u2Vt3Ez9kjMU9bG8C13RTYGQif4Z2U58hsQFp9BU7MSBotVz3rRFSdQ4Y7JE6opEgARMy2uG6f",
  "key36": "4zaFrc52k8AWeuouf3jUPFq53APdM4pzUYMfsbYE7rwKTBFzw49D4HGzNEMmi75xrxAVXxvVZSfiLA2DyqGkA1uY",
  "key37": "26utC3Nj7PqxSLTnFMTbHhMCKfgCmWHq57KiVbNUfqY4u6jsrsHWqTZqmtxsstb3nkRa9RL8p2QTgjdQwQ8zRw8i"
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
