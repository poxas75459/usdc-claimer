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
    "2T1AWWPsFJAGdKQhvHVWyZBu3ywdaCVqQHRBLftBUyvbEJKDtY89dhAi2aKeWHWbEnS57iEY79SGjoqsqTxzy7p1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QSwNoWcjL89FcZjUhPoQ9zNJMYZTXsWzkSsdra6rN7pchi25D4pjnhBJgx3HSoXVNCStKPHbFYphHNZMTzZAo9",
  "key1": "47vYQUhAM9w26TYzcw7WP7842XBN9NHoyWTdNiJPcX3Qi4p9HBfDvMnvE32uZjoUReMvNaY2jahD3NQG7Hrcrm5a",
  "key2": "25kj5pHat3dystaCuZbj2t7VECUYDwURQtadD4Gv8QRu4g5b9Pyi2wEbCUKhmMg4fVQL2v7L16DaWo2EvErSeUBq",
  "key3": "3Q6Ym7UZz52z9sziBSLSYyDdu1MUMNMoBD3bLBAyjVMABzL9RSifPKrrvqpvrqBTwdT1GqALPdUmaZcWAmYLWfH1",
  "key4": "4DNgisbVCK4nZJrkQeS7ntU9XHpA1dXVFrZrRU1GvGGBkt7PUk2WuWXtosoXfLYVMjRxJmrB5GrDshtzoxd9Y9cd",
  "key5": "4wwByP2eQbyC2uob2c5B3QZLYDZM3j7rp5bvY8oMEhyL55B28B6CoSZ5u77TLL7JVjyrYANPU8EF2uEx826gbT1p",
  "key6": "gEF93N7sTp3Xo26AsZdaj9VPNRxKij5BJPsW1mmaUQA5ysimv1qdqA1NPGZit4D2zF5ePm9kNVpKfvX6asvPJjZ",
  "key7": "5ZF87LJPQbmPyyfbkAVG3YZdmXSHUzcFR9xxj3G4n3AA9ggn3aRPxaSkQPJ5eLoqLZM5MVbZpG6NAovUnwPqHq45",
  "key8": "4HXAEYuWaNKzHCm66k9Yaw4GoBdQi7Rnvq7ZoLvywphvxtsdktjqEWRu5hfsYsSX7Sc9fURY4NzGRCkjbpw3y8Du",
  "key9": "kh1CRnV8KddhRsBNieWRQZU7DxryYbDW7vHghWK7AbYVFb6BGtDPXqVXzmSR5nZ3gQ6BYemyGg864hYRtyZEVJe",
  "key10": "3f2KS4cycS1aEJgT8fmfSFn8buwqXX1rt5in52aubAESQUvwjKncJJbQdtAwB6kLSmQwrSGoECMzJ6bMttvHRtGG",
  "key11": "3sBqKjSHMhYYW5UvsU6oJcFegPx2ZpMvWbzvT9QtPWZNyWXNZZH2vAHpkJiPAFsNXRTX735wdgKMoP6TxdsoyoFs",
  "key12": "2E2pHWYKAHHjJwr3o9eCeqHgFnqCMN7KLQdYwRQmrAaQb6qi3WtBUaCGu7kmUNYW2MQvGcce5muEFXGyCaA4wzwS",
  "key13": "2LDHvzJKtQo1o5wJnYwZ5V1YCdeHZuqh2tV4sLcJWL5VNhmf8qp1hNU4SsdEADSVgPMossLTtCMB8awo8qVcvZi6",
  "key14": "5gCS7VXzqKXabiekuyLYrs4Gy98skvikKESEvAYAZdfMLUoL42muXMw87sy84jeAEjYGgwiJe2t7PwgJceQzQwL1",
  "key15": "4cQyvabbJ78GQMCSCSQNM27n1yFwPDjXNYkF3EsBdb28iQoNDZUwiyA53tLXinqWCRtVVR8bFrcqVwxrpdB4U9K7",
  "key16": "2o7PCorS1aper3pi6F4LF9AFo3JdTgNrwCFhMjuxwGpDfAcHi5bcFpFGtkfmgvYuHUVUR18jjuYN9e3YoQHqxdBr",
  "key17": "pnMifu4JzJ8PS754CpKB52soYGqnDQLWeYcT7BstLFcsjYFFcKeJ8kVASoG5DdCef8AxAe5xJ5HcsyfkLewHvzd",
  "key18": "2c1gjJbebTQub5s93ePcQV33axyNnrh8Ry4AvFDEhKv6dHRqcX6BS3qbLu1fpSBTTiWc5Vip8SmGdH3rjQEFHGE",
  "key19": "5n84R6d3X26zzvpmB48JB4Vv8p6CPsLqij49Zq8Y14mHDemRUf45xM5QUUQ4XcNX31v8KLKUJzzgrqYk8kMsMryv",
  "key20": "4ZS1jCAZavHT1G3vNmhRD2aQTv4Cb78ybVZt35G8xvjHm8W2i79uiNYaydr776p9SUHPaVvSJ4fzWSZRgXqVJDvq",
  "key21": "4AGaaKKMHiK9YVCWwkP9wwCVJAsjXBMGPf4mgoX74dE7xEUtjP5bX7JXRTG81EDPn7nqut6aMjLs5Tyq3uezt79y",
  "key22": "3aD5NECWFbjncXDEFejqY9eKQY1PZe6iNRNGTHsc1ucLGs1kw9j8GSMmxJmJGs2uemy9nKrXX2SGNDvHp4VAMskp",
  "key23": "g9v5uvCU2RbJhaqzduEmMsAsEkMHC6d8F3YgihyLWyYVzXVPWirqLfwkSZULDubDPRfVHMXnMd3LE5qCkt9kdMC",
  "key24": "AAaES9LdAFYgt7oDmork5kmDY4CxQgErRnF2eAr8SM93C5Dat83vsr1VTRF7EtcM32VhFGwYoXXeZBmHvyUFD85",
  "key25": "4agC7Rr1CZ1Bh8X9VDCG5C1vNHpa6rENsFWAchWtRGSdGH6LXQngPFxEgr1FNeb6HDDQmeXScq1gm3gZ3P2XX9rp",
  "key26": "4QdNSh6soPgDBLr9QjpJAtdysijz5aXQLzarQKBvSEvtfgiU4LDsukgEYPatxDuk6YHutKajEJEjE17jA5YvEnpS",
  "key27": "5bDZHHPgUDGv8KMBcqAEc8PLo5owZX39PZkbJGxmTQecqqwRQGVQTkxAKq61kSu8y5axx41nXH1eZnsA7Gzj3YVv",
  "key28": "2YN9XZ65DDpCYHKwCn1aUAShWTPFbb37pxSVzkv6S9s13h2L2daNVFLQwaJJ453f4NVi9LRGaafJn3z5KmhhuySY",
  "key29": "2ByKADjAW8z3mGdM1nX98685EdyT3pvp64epfdQ3ZcLuAXCzcyJ1MEqmKeobMoAw5zegQFfPZo8Czev5amQACfdv",
  "key30": "58NU8fyfpA8LmsSXZaw52bvUYGp69cJZkKtAfyjqQqxRQbehfb63U34DdbRM1iC3aLRebPMAQYA7uDB4982tygDQ",
  "key31": "2d7YdA6gbtxzh9ES6F9ZKGU81Wrd2yDkXMSQzqgFnhSxzVcrere6SzZRbTMXfnQMTmsPjea2tp1W5WbcGRUY5Hjo",
  "key32": "3tUftmWYg9jywdhvYrNefVU2dQsx4p92Pu7Cwb5joQgk4iVy2HgAQeNnUnHkoxutzPKeKwa3JmPygZd48YyuyuwN",
  "key33": "2jo1NZN3ztFQWpbjHRvWw3GjTmYpzNp8xHw4m3VPgDhXtzkQGFyz8EUhehPWwTaF7UyauoWZMnr8bTWDPKB4bLWQ",
  "key34": "2TNBxooGJfsq9tWmUErd7ckybaRzoJmpGMbvQ7rYMa4HfBPZpqM3ncA6HhcqLkpbDzz9pnEZaMiRqz2ivMjeBEjo",
  "key35": "5DNJhPxbicsVrXcaCn3aa2Y8A6tt6uYwimaTrcb8KY37hWDDEk2hT8iShxh4PTxDrMTNrPe3HKdVjDJ4HxMifLoH",
  "key36": "2wvqVZMCqsMvuhZXVPha4hpua4GSFjZbh9ZAnNc3FZ3Jw8TYX7PzJTzXRR2nJYnTxVbCvGgK6XNsNbQ7eNtENKmD",
  "key37": "5TKdLDtcZNvgmJ5eDGmXQKH2SLUFEehCDUVBKi9k17maTB8GUkPFrmdqbTGVKacDvJayPEGqEB7xAQwGEG1AdEMA"
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
