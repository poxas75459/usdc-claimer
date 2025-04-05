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
    "261che8KzMgz6mNGqnaNHpL51MZNXfkyrfjE9Twsk7ByCfUHz2jfcQbeczLwWNKpiyakJPAbmrHFEu6UHjv9YjRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J1zLFsKCiDDePQoTPu6kArvqmCgndpy9HLi7PsJeJeixeBuNKFyFgc5uGTL8cZrhwKmwhZveWorYJ55eGomKCZS",
  "key1": "9bg6jLQ3BkNc7GEWD8qXL7U7mfDYKerU1mJ5ztqgpbJS7y3juyTEYxaJP51o89h8UuNCQhRAE1XmcK84JjVWs2W",
  "key2": "4ayshQYbCs68tsC4XCrKK9eg8iJTQSJ3YZHrXPngKJQHh8MQy4UjK4j89EeQXYZTFE7s6EV9eqjafDUK2qL1zTcg",
  "key3": "2uP7HkLJcvrHHbjYy8pxPf5hk2rTxZWrrhDVP5ZRzwRq1LUNksqrpMLC9tzfGpe347oGuerRGXLJHnJp3JtCHvDY",
  "key4": "47h47ogXNr7eWcuWKbxD4jar3rzZC6qpsw3pmTEyqywfUgpMU5pAEUNnCbAcWyhJUSVXtdbNkTrHzVxKFdV8RXNv",
  "key5": "3hGcz839mhgsyxA3nLVDV8jo7C1DKBYmz5jFGzjo6SmobHCBSgTKLEqQqdJRUUbAZQ9WtxBwsv9jZF2WAu8AgMYL",
  "key6": "4WZLsFwEZqC4jfMFXRrUeLtApeZVuVPjmyVUk6ZA9odS8px2te41F3XZNxvfGz6WrgZD4DWebo7CTiEqkwpQrVMn",
  "key7": "3UopxVkAJTYfMUWyGxdCgSgGNJbiW7TAiBFo1zXDAGLmmrZnMC4XTpMAdczu2eesqBnZ2ckmFGCdcT92GBAf2ZkV",
  "key8": "5nefeQ9A9a4Eg1JnsNrgRYhgMkS2vZzTRbY1BLNWV1pA3AfpC2nNXFT2GL2tRXH5f3ZdcjJxRWM92xLXRgpa9sge",
  "key9": "3jobDX6hCDKXw6tFavHt8GAPNQSsxucYeSQ2nnJx54KDkQixNpjpGKJgTkyrCwvzqc72CCyG323R2Uv7nSEiThpT",
  "key10": "31kKvp1i7eMQzSTQiCTLqyqCgKhDS9raqvxF88LKzyBJmjho4dbiNRL2Hw832xQ7qhnEYdz3V1yPFjjXNzRLtiYR",
  "key11": "8C8WpLGHjij2qjtUgLgEzRsmBsM9UWaofZXiaPxRYVJbvjEspN9dqRTTSyztNXGrHs2HsSjqN19ZcboD4CiEEh8",
  "key12": "Eerhc7d357RFCWK2H64zvBKf6fqTVjxunT8AjuLaNhXzJmWq7m4uDV7mo9M6jdMTbUtfAhdvrPY21k2LeV8Tmrr",
  "key13": "2PSJthGePc3LRR2tL2oZVaNcBniudiapJGp1kSFSFjJ5UgivtF98PLjaD1tirCEVWQCh5tQSk5gxux6ansjg237A",
  "key14": "2XHVQN3m5nZd3UqXLhr3dxEmDihzEadm3FAtsYFuqivcVbGyd7MGHRZBMfNLbH8kqdnhsC4LmioP2c1EAddiZbDr",
  "key15": "38apKhSnhHT8qR4s7sSmromhiBNp2re1zHms7GxTPyn9AxFSMgwt2EhKqDKJZHq7w1BBc5ZkksqLyhLw49Muf6ed",
  "key16": "5pBFBxXqxbECkxhBMRwL5zwnAbmx4sbbtqrRhFrQWnUbeMMtAj7KXNExHUFpTBwfraWy8ykDg96V46ijtUwarGBh",
  "key17": "5kguRP1Z1sueidWfg7QHjtYhUmQp5DfKjCbQTPNTqsksJFAEXBqXbNfb2CtjDxDwjfGWEGm5KpDjYxss53D6H5GQ",
  "key18": "55exjkVJ4WniqZdC3yZFfZAzM7G6DZhzd6ZpYyjHBhJKSECZGvEuTAirYx2dVEGv1JQnwj6NNqt7xiVREhEEtooJ",
  "key19": "5SScn7eaMVccoYiFrvkUpPD63wuSBc66TMBEee4ywD8FvXVJ5qbpckSiwzQxA9bRLghTyrBzgFzbrACQ77Z2FZiK",
  "key20": "5d3iVXb4jVjmvBDtKGT83YaW7s99fCWYRzapYv1ChCZSYaTuiuUkq124jKFn9jPQA85uszBAyBVderADUKi1znz2",
  "key21": "2Fe28T7HwzWY8rxFzmbCT2zA2CpU7wG5wvecoKSLQGz8EcgxD9WjjpHwTWqkP5qFD6o7STtWmKnggoog7wcHuHHx",
  "key22": "5pJBw9yVVS3KNdqA16LyUq1getqmPgB5tRckhioCFkUzJJ4dVjHUjp4CEEZaaAV1Buac4SEgTUMD9u83cars2FCs",
  "key23": "3HFFPWoThfKBytWuihPSWsGgJXm34UtNwzPTcLSX55W81D5cYkFEEXwsq8QyBMEdsA2TTmmA7z6DvV2vDTEpZ6qE",
  "key24": "eP1nmRaEzbA6yXTnP1KXYZPr5G7DVqDzfon2miLskWuXURjrfFcoj8Fr8cVYQ7dNwVmbcDD7jE5Tai9ebzizxKm",
  "key25": "4VmvpNCVePUqNBY1s3TjFCrtFewWqanRpRJ1tM8deXdvxKSxyFT4ZozuuuiZE98emqVyXMKQ2gSppgUxWEPZECKn",
  "key26": "3mudxHnen5X9q8PdT5iZkpNYsXeEDBAE5bWLpt6LGtftzAM36Q9xYAKqMcbjWbDKdGfucLNdEDnLWC7NKnDijV1S",
  "key27": "L2Qgyo82qR34tGfmrL4yAFe7aaKNx8oji5zFbjFXRSPHkctF7f1eGNC52gxGNAEQXhhNKSM8wGgxCPp2VGXBoqf",
  "key28": "25Ws8GSi37srRvJtK9UPohct9Yq9xyBDhh56jjZa2WDG5rJwiCPi1pHkDcVF9LNVdWQDBgMdof4WuhDgVRA1bU2n",
  "key29": "5QyiKtu3ee5oQgJ7sph3izdA7MGcjgE9anJ32JEKKQ1Dibpyv9aFyZ6sHJVZRf2VWiKtj4w7Jz6xLTuS15A9UWWf",
  "key30": "5gfdHm9e6X42V3ivk5odi7oNC565tgXAg3f7pD5Jpe2dQnmeD6Hhmprth6BSJsVmr6yVVDzmJgEag4f9NCYrrwZ3",
  "key31": "dnoLH36nn6G1BXsG9WEj5EjR3wwpT63cw2KZ9jG1hifiaoszUr15eP7hU1aa6KJ9orCKerfvaeZ5EoEmRFGy92S",
  "key32": "3THRHqPEi7M99kxujxJtpGYTQ9ueS57bkwxymmdoYrgegQjy37xd4Z5v91rDag7tVME6qESgH5wcxPVvGXfZ7kA8",
  "key33": "4FSJ11EC6jR4yd9XirtmdurZ1NUBxG3JyfbXQZ7R8yyDkW52CeH9DdFKZeP5noebK2NmDQtseoLoCgzw1XMD2RMt",
  "key34": "3G5qM4LL7UPZwXVZ6mynoXPCjijnPKY1835GDrU3rKiWHsSSNcogtv7RnxQKPowbXm18ZAqhdCzb5ztf1nSk5uxu",
  "key35": "5Pc471vrvKD5UQ4HMYJYeGrrNJBqBH31RGUYLqB3H73CcimifYWxfi8TYoKqQxPPiZALeAgzcGHhnAa3wrn3xUjD",
  "key36": "2QnNUncFiYjrZ9EeEJr6SG7ho1TDxohJH6XVVL1ssquTTwK4oq41ijwQQpV5Y5isZETQWJ73aXuZYBUFipnBVxbM",
  "key37": "56Ektu1WhpknS3psozRLUgauckD5GootKpbCmUBhNviSZLN4MKB8gWLJb1aHe6oZKdkwaApHRRjLUK7gn2YMPGSz",
  "key38": "5xW1s73LJ4ZvNecYGh4jtDgoGiAzTLzVWMjyiLkhfLZvsjmWXbKopnGJfUGYX59xzJthdkxZ9ouknLTSyjx1EKns",
  "key39": "51wyW41Y22LK7huWZbYRgQUZq5pzaVdHcssP6WkZTKV9gSquoEhL3Z3vmGeg662hFrkptvCnTnSXjT3oBAMqsspr",
  "key40": "s7QY6pHKMdrPSC7FCRMtfgQPkDHb9z2XUotzMDhZK5WAGgYJWt6ghvRiNatPBfpCKVYM8zgkTs1HTfbfC6yBToy",
  "key41": "2tniKGnrXTbMR7u4onRrmCqKB6Kgr3MkczTBu2gmyi34ye14JtRcceX4TV7SY463kqhbqMvcU2L4ybwrjySCvsvJ",
  "key42": "4wQ99vENuM9y4puw1w7k9ZpoXrwHgS1kbetxmNCc8NByZ18x9gLqtjwKjLLXwST7rqUvEN9Y6Lvusd7nfVqexj59",
  "key43": "dnRrjGzJEjVBptTCkBT1RZhUq7pFwo14PAiW7DmtstdShbYxADoV4EivNxMw9LE3B8TkBotz5Wcq5CnncVgBDJQ",
  "key44": "EvjAY4duD6et8JcvehDd15TaaAQmEb9NhDyFxboipBRYPoGxhq37FdzQXwhrxjaHhVWZ3ZrqsDYKgh9mZEFhkEX",
  "key45": "2h9tQMzXDDDpi38TmKBhNqkfxCtuhC28QCqUnuRTYe6b8gBECsRgP38mnKTnhMkdneuHfPnyyvieVq2iwPJwhtWE"
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
