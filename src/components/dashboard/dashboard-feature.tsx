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
    "4NSvV9KM6z1T9iFKGfy3ZewvJGckACyFzYB4DRazfXjievrbqqYfs75fWdrpes6JMnKfj1Li2eCcfRrpGuG1VbgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WsZQCgEhVw6WQ9dWi55mKx2Kk6ivkYz13iSwukvqTrjgVUv9bvAvS1vYcPgqAtPiv4mKmcbChVWzBwjNhjMPj5r",
  "key1": "3S65UpSrhAmLzF91zS6dnvgUJrNzki51q9L63c2dc5gqcZmWzcFvweVUA7eS4dh3h7cxLUEJJJMb3PNPifVth7NZ",
  "key2": "5GSuERCLRwwT1AF2Za4PLcbMeguwfrAoGjqUMgahCkVLs3owoWbrSD1AW6m75FzWZCffCnKR9ttLLGVQVSuzffvA",
  "key3": "2NnyTbWfb9h95fEDtcngGic1zoToKCmAakpMqso6H43NK6CUadtZuHCKDQTFMSzykXNNwjiamjH4TstDZSo1vsG6",
  "key4": "5754gn7BowMh8kbPW2CmZjGVpifZk7he1T5urjL712MYrP1hbD8kPrM3MC7tmXf72sgctbMzbD3Fp575qwZKnvRh",
  "key5": "2irQSaH7fdoqbP4Mpe9WVBiDERr8JLynY4cSSLFXQKteWE2AzEFKAUZTM9oG2ibeUPWMpzwznrA1dMLEgh4iere8",
  "key6": "GJRdKMZ4E8dbauSezjamShZVVSDJJS8JHG5zSp5b7Wjz9rMzdouS5qYys81TQDrTcbESoYDtWCY2ZJtMKHfqg9G",
  "key7": "4ungGv7h26DbAg33Hfy8c3zyrXV8Zx8HC8pG9MwG2mcjraJ84QJ23aeyC5E1G2qFLEFhQPgNXfVL9bJWXf2JoJZo",
  "key8": "MqKwtGrbq6A4o9S64YAYSAeY7Gj6QkGXRMPd67JSQXZ79kkuLXnzUZzkJgo57Wdqi3wVkMw28K3FGeBDnw2AMot",
  "key9": "2W74D4d9VAm2ad1ohrPZJSgj1A6N6AXpAKRsr9pZ3yZFqqhjzf3dtUEtA74iEw6UUCHjP4e6KvbJQUuHvEWCXVTJ",
  "key10": "4UPXvsHSWNUP167fiFugKj9aarKENVtxK74QVrkyDGuHvmqY5TujQPEkcy5vGvSkovNq7fXpVxKhE9ttBg7feoKP",
  "key11": "31HxBWgfPt67p6DN5SmyMj7g6ra7PJ4WVozFJb4FhFdPB8f5Bq7LbWtMiAjMxP7to1m7EHZov8DySYGYcbTAFcjC",
  "key12": "3q4ZpaccoZKi6ziogQAhsUbGXcEsQpbAWaUJnKCBS4S3Bo4cDGg7scvBccAcr3uXHtAs5fMPEBkp3SWxL2bzvdSa",
  "key13": "3nZ9a5yD9E2tdqzbvYaMvUoTswREvhuwN89EVtMXHF558VF9ndP3MUEvZGiNCJKqvXSDC6YoTU9Gbmtm1Ski8f4n",
  "key14": "F2cU5qqytHykJAYUiPoe7wHuGkEUfqp7zfmbWJzFsACvjn6GxWcFqG17LkM3J21P4N2qMqEL4C8fWuYSpfH6cQb",
  "key15": "JXRz1krB1eRVSJUBp1rhLWPCqNqMdR1WDkwR9TiYbdY6zFy73QJQ4MjKDeESaimRnP45ktXET9wanPDP7vUbyXk",
  "key16": "2XRHYge72msgAm672jAZnr9wP2YpwD7GoY7N2gxGxNhmSMXXhNWfY7FaxNXvYX3iBP6gYMdg85gn7yh5nJyFGYQ3",
  "key17": "3pURzFp5aRinbi3jGEFZjD1zbvGYyiMHJLyhQVBg53pGPUki7BuViR8n5jXWrsDh2AcUrLuo9P4RBuspnVWbNnJM",
  "key18": "2B96GQsBAh2bEJH8BmXNEB3XzdKkiWpmZi8ouP2C2oDhNK2Mr9H8BsgKpJyNEsizWsZHQFG1S83C6Bog9mjMVpqx",
  "key19": "z2WRX2iAb8c7TZKqUu69c6Pom7dbiJKdvSSrAdYv3gcC197N528WqZPqQhf1cDrRDRfVinZD2h1JD1rZAJqfzRd",
  "key20": "5RndxkUjNFb1o3W9vwPNJVZCfNJeqaowAZpK9SZep8jo1ZryuXUABS5gptsj8GUv6srmjR1h8Q5EJUQgbKp9fVE8",
  "key21": "4fHTPaeAayhqixkA3TJb4G975Nztjjaf4grkLWyZ1VsJyw6Ne7hiokBENeQoYdLkHmHYbAj9rhr3BCbubaiXs9D9",
  "key22": "22EqRzgBvkYUsnbkxSiKfumvf3JKccD5QytCdFURuGM8yS7DDBi2rhRtURbZZCcoV5iareScPjcoBc9xCMDNwg8x",
  "key23": "2yuaMM1sV297pLdYirDV4VoAFscA6RQDkjTSgZkMute93P9kTasENKS6zcFTRwyEktpZXcSUNLWvt8y1gXbXrfdU",
  "key24": "448TCU59ob1hgpUxjiPPNzaQKcUwHQFq1iDwUpzTzKpD3vjVKo3QcWjQ6Ec34cJkj4bkTSq48tqH28KoH6TxTJN7",
  "key25": "2xcXtT6FVj2SX6y9mDaQJZ9REpL4ZF6XCreZWTQc36FTj1Vp8TcXyuRrtaruwu8UaFDw5P2fJEpJqagu9CvehvW5",
  "key26": "4MHt61DRkjDG4Bjd5mm3hGVaYXbsCC6iHewH3PpzoK3aQnXDrZuCgQV3JQ2G1tfQSkH9zeh71rDGGKRHU8FxJaKu",
  "key27": "5VyZQVcAvn9oeTW1E9hpFZa6JtVjgM9WYoFcLxqtkEEZ4EsTFRMn6ZvoXTYfoaGh5r4383oLpZk234iuX2R8fH5R",
  "key28": "2pzE6BE4pWuPWjWwzzvcVww5WJiWiJRU2sM8oy1f7WcMnrm4B5yHnLcZaUrgfeeVq2ruR14M9ahsUrJbGa5ZirV6",
  "key29": "51hax2fgovc7FBLikZCLZ5mnVdFDVjTy6XsBqsx22f1XByMkfNLTmqkS748Ti747WAR1Avqpr9kW7eRGeGLfjebn",
  "key30": "2FTmgHTVKvZ3SuUTKVP4xe1CH6FabtzSgKyHNvF7LcfMpirGuQCU8wepYvx1zJjjZYMQj4SR1YuE8p3rJeoBRC44",
  "key31": "5nuxYgsReqnqLUSWsowaGz3rpksG8knjxHvuB5ovDjpfGU7U8GUu65V4zgNF6obHfLMFwF7PjyCSraszYJsUfVbm",
  "key32": "4bKxZgbUkyuzqEnwdM8A92nVxJV5xzvhsrxSqLf9YYgT9hf4nhF93akSu2Q6ehFpkkUTBLqw9SVm7L1o8wuLxbMq",
  "key33": "2nk2Kk9drkYkNPT3S5p2vdFTWE16ZJxHHfJiaKGf6qLTytXF5jMUSRHLKEU4kMG52mtSJXFCGkkqitzKh2BzF9bJ",
  "key34": "5ZHpv2DF8FekAGwjBrrjrDuq93EqYR8GPucGaiQJ7jETUpCoLTAW6aC6CqciAZwZh1YhFH5u34gVK18978baX6qr"
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
