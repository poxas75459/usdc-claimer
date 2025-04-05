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
    "3TdVDnCDou32cdmS1bhMQ97Wm5wUtE1MSjMY46DYUZwS1eauXj3s59SdPYnoHYugyLKTrpqbCLH2ypveWFudjyPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwEAywqFkkC9bJ8NLFAKgrC4s8u5J8kX43mN4ShJVsDXLnotWHAxfzLoWC7tWrHPCxmMHm6XK88zs7W29gshD7a",
  "key1": "57ZmY1hz6Kw2J2YkXjKhd9bvL9XwpDuGJFFpot39AARrqjVsmV2fCWhAYyVH1oCepK8JPUfDskDGNyrEuqWMu3X9",
  "key2": "3uKp4PV8ASQXdUpCozHedmXFXVEBBTwwdTNkxTEevD5aRaonCUdkbyCtVYgtHwcyKzE8jKoNRFW9YB637ccw7DQQ",
  "key3": "4rHAfc7ZCMTHSxZwsd1MHgwqbVSiKgYn8moWDwPMHfTwqx54LVYKLQ3Yb7wEJWE9fwR1HNrbTPvguEcvKAVkjC2R",
  "key4": "5mnfgU6mYiK6XfuRq8MJngn7yJTkzKEVpF66oYRgK3eqMWqjoTM3XoMsepB6Cu5ULMyjmCugfCL28onFoVzNMJiN",
  "key5": "ggAmjRAyJ16wKV7Frr6Ru1Tbx2XD26Ae6jpbPj9a39fXPxNKX4dLjT9nFjMDN4yKVBNzfcK4P2FUHa8PhqDEogY",
  "key6": "2fZAFPBvJYedU4dvPYujsPnb3pz915qw8uRjtWLQKkdjYpExxoC8LHQEi1JymEgdpbzst5qR77XgSboaFY7Gv7ds",
  "key7": "4NyLrLKYqe7biGaFZBucyN1MjkTHREvmBB4Dr35e1boksu3t48BWBbV6Shh7qHdt72rfKeEJXGfza3PgTZwTfTVi",
  "key8": "Y4LRrjWZ8E3hSnz88bEXA1NAxBhYwYu4exsvD7abzUJRAFGqB5sx7aYRiBtnHYqVgo73Ah4Z28L32fg58JvChah",
  "key9": "7MiNzD7QpdynDNL1F4j1AVA2J7QBa9yNpVmFBBuHUqF6V2DfJQxBMSWEiDuv1fPeuedpTSGiH8pUxj4tyTrLz8U",
  "key10": "wLyhGidGvbA6WbBoQf2vZAUe2DhtqzNQmeNQLZh7rxFQ3cZzdCBfF1XtQNGncQH822c6tMwKx4z8zPmBKxAqv2T",
  "key11": "3hoEorWomPtKe7siGtUDCBBhBtyjxbezme5ZU7f1VXATb6BP8Z1pQjufcZP3mHRcdSx7aXaQsY27Cv33urZKg2my",
  "key12": "4UBvT6d95RXjeyCSQAZxW7fZhuPeJsxN5ofNrpvhs5eCZV4RwLwaDBK3PqdGcfJkuNSU1j6nM7RPJCMDDLb1yA9A",
  "key13": "2YxCdHUiq5PNHSCjXXHvwiRL2kve2NmTA9bvDkMNhLxzGVDGmg8sVKccQhsBqXb36SGNuHicZcoZT8T12RDw3em9",
  "key14": "3UiNXEAwmgC1uzdFNbSpY3bRP3s3sdGVnhqA4mkCxweJQgkooj7FNfTUxMbjSG3NFS2aYM5UygWNTFgC5YkShmsr",
  "key15": "3xNpWppGJ1XrB2wuUyE2VWL8WwzznwKzu6LJPZGne2mQ7GGf531qP6oZecDcg8wxDyPwTqHaRWbxv6DT3TbEsPnp",
  "key16": "2jGveU7vub1X5qKWH4QujWqc8ntsyJHpdatg1h4g5mBfK5k647MiMYat14DKWuCDCoSEfxUDHjJaH3KazxLCa9Ch",
  "key17": "4v8H4dBTZz82RdhGBRvpzpxHPgr7n7RzLUJZmcWvo35BDfsnBLErKaE3Weo7buJZi5wzuPC1E6QwNb6J3CVS2u2A",
  "key18": "2ttt5DZQYbQ4it8PpDmYVvrM3fsdyGTApeWXyqykYNLR5WeLCwoqy3rPjksjBFeC5kMwt59sTm2jNk6vpRUUBBfP",
  "key19": "wjfpAjyZNL8BYK3eLEbpNN9MjMAy5UEVQxK66zAnFN2dnvJACev1BVS5Pi3UeK6CSFDsSCEAmJWkUcHT5C6q5MC",
  "key20": "L9BH5WnekDgedE4SjDovg3wubCutz6sXbmf7NvJsndsXjdnTaDnDnwTZ3m9g51GnCrEo1AzUh5jTtZGgEW6GZh9",
  "key21": "53zpyrDRPpVE8o16Y7goCA5C9W7pjMQsLZ2vB7aFgsc6RLeYwxSQRE1jfH47nSwH8yoGB2YteXG8LNVzR4V8328F",
  "key22": "5se8UDfmVjc6eF17CQJKoL5Xbza3CEwR3SYdzeqgzrThnS6kqMYwddG3AaSFmCd9MXtrB7QMjp6AvzCqyAuPgV7E",
  "key23": "U7itGxj9vUkeezzZbznrvJf3GrdZFeso6gpciPZeKZoVryhcAnYTWrwrB1qnQ6EpoBtLqf4FdSVnWoqVDfEr4gd",
  "key24": "2PnCh6zZiGdvVkZAJseUuwigbPWHEYvbnqMxh88HjLHHgHwdUXJqRYDVvb8BNU2fkUmpfSERgLBaTqZHK5vFBwtr",
  "key25": "3ZHaNWKTqpKkFiS9ZqgWnRCx8MGkeeQb1HvQP6Pc9gQMAuoiwZpij7hxuMJYVxEN33Y4JPcwKg9eHUjkps4irxRY",
  "key26": "5meb5v5QVmE1FBnNAoLTtcppikVouj5gVVto9pcqCL6zczTcdD1v93ivsbxszRp3GYKyNtLLEbD7LyemYKVfR8q",
  "key27": "CyZJ1j5nXj3GLumxpPqhRqsNpcbLQHSeU8G1jgCvHPmiw2sqSXfDjW2GNxVjMsuhRZawLxvK4PkUVfKr9SJ7Adg",
  "key28": "dsvcmfpi8JMWUVsS13oSQb9Gpqjt7gQFvE7p6PUjFM9AfA4DLxqycbrAwCoMTcpJMSDY9f1a9JsPqz3iZebGfgF",
  "key29": "3ELBjt1Y6Q8DjbZFW7Mq6VzuxLdKrttdTY7wSQpA4SFREVwVZUQRBr6ss6M5pZMAx5soXJuUjZuaVMxq2YCypd9G",
  "key30": "28SM8JsHXT9pPW5ccd7VSXqF9Mv5fJSbEs2CCu7eT8Bgpe1AVVBEeafsxL7GhZEZvqn34dXcbfeaFjuUrXgDQwFP",
  "key31": "2edsKhnnJcbhL2dCuuki4DcuRpY7xbDNrvrNyTE4Ki8DW1eQFAXrJB5rbRZdbtE9mvuhhwyJAPew66JiKQn1LEXH",
  "key32": "3hrnBq5so7V9dAJEcHpRZCXTYPcuprFvtFvUKjb64gamAMp3goid54LU1eCWXehAnkHkEkJkxhJSagSSQmzhNSZc",
  "key33": "2aXi2Hg4HQunKfu7tPNCvU9CLJc7SQ69EZiVVSH65ZEUeGRPkrRComH79ZgrSo7wwTzJYLeCi7P4JkuLLzmo18Pu",
  "key34": "5vDvUK58eahtars34vEdPBCgEJFga7yb5mCcqGeEipSWyfoZYMoKPaCmYs4zsNPYSZK1RDJfYwbEq2QGF5789zLR",
  "key35": "5oi2zwnbkKjRJqN8CbCkCTk67dAnbb9qAAvDo7bzuBqf5Y924XB7dax4K6MW7kmpKHyHjux1zVLjeAXbT7YsZB8W",
  "key36": "NDgwPHHd9RWCrjDwTHPNx7dLokVpNGWHL2hiJHhJqUzm16RS71DEWSRcShGSbqWWVVQ32qYpbYqttRepi7yqiie",
  "key37": "5Cirs8ofpwSfcN2YUGUJURrEKUrFXHdQ2JtFgXPuYz5DpLR51VrSo4Jj9vn9uauvUzi9yNEDLk9gTtQa5i9M8d3X",
  "key38": "f2jwXPoFQv8VrNNq4x4tXeY5zEaKsHywVCtt29HTNjJRPjwm1MarjEPrszCpnL3cjLtVyGz9yebaXQJRrtT8EwN",
  "key39": "28LYGEN3a6fNyTjAZJS5o7KWngGw4ELcuVQ7NSf9tWfm73CRddVatgXKVDgifGWE1bLgCYKNQwdCmgVifLs8aK4P",
  "key40": "xLp7PWmzYhTz7uqpegQ2pacyXRkgTTDXpoPQYQt6c69hzgYKf2RwXMvqFDCpgWzPm1yK6ZoeaxDdyCVvtK7CQeb",
  "key41": "2cEjGjE2aLaqLdssEQ1q8xcbxnkurLMvq1y6QsBJfbrv6BSVJPSyFvgHoyb5ccxhNYz3pVKM7Gxawc4W56M1QXEu",
  "key42": "5wiuxbXHm3nvdLwE8in9HgYXMfmP4AkQtVY6rNaqBxh8rmHE5K6kqjZ9rkPwtcTKvJEtZdHSECzSuNENhX3Z6PLu",
  "key43": "4TNsYDHq13UEMgt2JmGHeQYpy4zjFChuUNyfgVzLY2jp2C1FiJ96qUSzHjpw86bMq6mUoz17r1FDA8gwdDdjepXz",
  "key44": "3aB98KyJS1nFSgPvzeoGeHQuSrp9nU6VkVzGV6EJiJvf1mmGkdijZSE2aWMYiR5cEZKczmfLbDEfywiNrfotu1ni",
  "key45": "3oJvSN9Ki3grGWJ3kDcQdDiVLKvbwPz5qpaHePnwp2461rhwsiFVGnYF5re1aG4yYBEr1nqEaAhxZo51n7u7HrvJ"
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
