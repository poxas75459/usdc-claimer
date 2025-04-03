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
    "5aK6zq8ibkQmEWWGJyDLgwYa9SV2JMh1pzQavhf6SJPjd9c4mmjgoCWNHLs6gGQAnqUzb8DManXYyek7spMq6uG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxMu2RK1w7p4XQVJYn8r343CAeiNxrjSSMzVbChCYnkydafB5sjQbJsUY2T3dbcAoFmko9bCtjdj8b4RPJC8qPu",
  "key1": "3Z9oe6WrJhrHXVGjgfw2UuBdL2AwbiYmbUK5LNgZi9cemycwSqRkr4tUuS8HEqC5Fyzqj4BgVZdTfG5TgVNaaHqz",
  "key2": "23KKntaNaLq57rhJC3goEuV5c7kjJPyLfxiVQjVxxgxfiHQHMQ942XB8rweW2mFNPwMP4E7sQmb38r2up5qcVpbj",
  "key3": "3KNmaSWv7JNF5C7Q79KqYwyXs37RxYQGT1ESy4WY1DBe4cexo6f5XLs1KBAwfayQWaSiyqtKxhW4vVqA2uA7Snu",
  "key4": "56kELP2SoqJXN4YWc1AmqhXfPboL3CY3atGT1C8cnXWHwQzSqLSqoALp5bhNvM5uxmdqvRjyiDcN6bbGJVf4n9r5",
  "key5": "3A6WtkPhcyBKLEZ6H8cCxn6Z7B2tEZeEBSvh5gm6MzjkbbYMdc36wJoTdZzsM7sRUpNHQg3Xg1nrn7VfzWtpaqdJ",
  "key6": "5W4ZHxWoNk8haw7ASyEvXRdr5HGjPLW9BHuJUWcdw1H3oJgDF1727NLpGNufBa2YTPML9zWEATXotucP27gqpsWg",
  "key7": "5K2PtBXtUQY4Tmw9bHeWBTJonjXMSYHUWNf268J1bi3frqYUrZid8PpFKKaSG9AAaPVqmP5GY8HV3LZngfVNFzf2",
  "key8": "2vAZxR7vkgtjPFfgJYjyU4M2v6Yb9JSP4qEVZLbT4xuPVT3mUos6oDLuVMtgve86m9bwVWPPDq41ipzpGJvgaePX",
  "key9": "5D4KwEL5NZh7aAYvEwrGkoUp3DjZnr1AaHkAahmgPzfpZnNyN9fuknHeBew7pz5T7kUcwRkb3nDuxtxDY9DUznz",
  "key10": "51YmSDooMnLrAMUmbw6fLtW1SPemC3rBgEe85JFpEPmVoDcfEJFSiL2FfYg5SPFoaznRg72RgEGoseELfRSkCfdu",
  "key11": "4Y7oMBrPTxrvfGFt1uix4a86caGbdkdjrockx3BDwju1YktC16Kqo58ptqg5xCpA2wXr7hKSU1Enkg4PotfspEig",
  "key12": "4sikkRN8rvX7NRjywpjTC3ebfmrfrTt5TARNNmj9ibBa9ZW4yHBCDVaSahQd4mL8JVyFhcjygAbP3S3Cjqm3XxY1",
  "key13": "2sz3AVaUWXTjKpcEw4vPAdHHVRzFNQutAr1rzWCdya6v7fVPEYuy7yUgvv2G6HeUypiaNK3kMHMVBbzenkH8CLGF",
  "key14": "347Z78VsGwvFHacabzyBN7UCxWvFSjgw9G2TEz66oMLhbCC95BpKgnevnBHjqCLaFkgKCqy9hfs1F3dYU4NkLpYV",
  "key15": "5TD4VAPtaihRJ3iwgUGsKCSzLV1Uk6znYhyGCyioTfcfUgfE9d839S8FZezVEcWSNDzZiALMCywfQWFcABipvB5T",
  "key16": "3geCvPBUV5TDWS5wTMYu78tULj2siXQfihBFXAvFcK6ZVtXy17cqHGVodmpEc1ZYyjLqZwd6Kc4KQCmsikGsEZ4B",
  "key17": "2BEmW5jjrjE8X7QrrmvSLfVLUpnQ9fiy39mkUdhHEmzB9s9PYsvSVEkm7tiu4eq8M8hFVmXN9aKRXGRQHyaXWdTX",
  "key18": "gRXsetWKzDi58FpuuV1mVexCNwhpjkxdqu4FdhquWzZUJRNc7K5HH6gRqmYE58d7bvxhf26AeVc8oUNjECs4N5B",
  "key19": "45UeLNsRmRCtmoZh2axrn88Nx8TjuKr79EoT9ogV27akmnxo6i51VCFbUbvoaPAU5gdoB8HPGJNG2eGzadeVJT75",
  "key20": "2tgg6Edu8hceh75rxdPbf4dNKYVs6WZ8dPMmUFzKs1Spg3EYT2M4bzXwjtQAmGVA7qHaLcj16wkX1pQ2BZFCGdVK",
  "key21": "631XeYnFURYFUAUpoPFmqoHLcXb5pFMyR6D4sFvtdMh7CWF8HzffnPStVmFbMApvHteaEiFfURzysWQfVd539QaC",
  "key22": "4hRwsNfkA7XqRuJ261d6V5uUd3NnoYqkVAxCTz5nBEFUBEaDCYQPmrTbVaunxJsYpBpF7CqdNoGD5cVPB4fdKydn",
  "key23": "4QsUJ8ZbX7rtcLprk3ffSdCs54zuTCWVDLEouwAgmJHWTUaknjoNboCgSEHsD6vJr8pD12Gx67yxBwa7H4FiLA2V",
  "key24": "56jCDzNTvn7K6Y8ZNxMGYMcwedqFGnGR6cKK5EijJqvGHJsPX1ahwaZL49diyqnJ5zADfF7TBhoyDufTqa3pfgFm",
  "key25": "4w6VuKLXVSpKbGPmXC7ccmGwKSBPc6XH7HiWM1yUry16K8yNDedm3YHysq36ocxD5SNFsWYRYTdP3Ka6Ww8WH81o",
  "key26": "3KhBm6g7Db2Ct38aBEj2vw6jjBKFNrfJ9TbjsTDBQDD9iXWuKMWhQASWUNcPRYnLzwNTKprCWNMUo4TQJHUQnxge",
  "key27": "5XQPVhRNSBw94T7peFn729XpAq5dkreVGFegVtiQ1eFdJPpjoCSXMGAwXag4qPnXjDg5qDGwuYU8jXoAgyvx672t",
  "key28": "3HrA7LjRGh87yYkdiJewmKhsEXpKYYJT3MmPqvSFF4ZgoUc4yDyouiuWMnxF71UY9o7GE1oiiu1APHxKuxuQcY2P",
  "key29": "UEkATLoPVZjgTfBD4kwpiSjsnMFdwCPa4w2zFvxZhrQ719UcDz3BFt1jDfSkeYgCkSK4es3EayrbqE5qjDNpdN7",
  "key30": "2c9bETgF9EanfBhq4hCKUWh6mc6u3CLBRbcntaMVrmBhvfRidAazv3QDNMQJxD2fG2yYK1U41gGevsQH7rNEudbD",
  "key31": "64m7YAbZ58m9546m595Q2bAi5WLQGAN316Zx3uGmL6uCyJ2Fm9Ap1uuSoNakktkpofiNh5gZy52F3mutrFVE51Ys",
  "key32": "5AcKoDsHRAudcZ6PCHt1tUkNSUfnV8xzhHLeWxDKfVJ8CBuAmd5tCgE9jZYZuk4W4cyqqAnN1KkhN9Pbnms8Ra1q",
  "key33": "3PPXTKHHxhKpCB5zXP9q7UhsM8Ux5UjfhNbn6MsTGAvhf6zxZisJtpphiLqR1MSkYhUuSL2SmHmks6tttvCzRh42",
  "key34": "3rRZJ8LvDHnwEzLLks8envzDRWfTh2wYSZ6Nr1BeqBoegv1UBUySvzBgSbvauu3Suhdf4jMdFjXa4RSb4pdKCuk8",
  "key35": "cozW35RwRng6vmsKA2qJh4xqhBAeuoCTXFwmcNrcDqnFnqHJoHhMfq6xaxgKvh18qW9VA1fhfhhsUB1EVcnomWg",
  "key36": "5HAY33gUYZcN1LSU51zMjmMHwUpr2THeSzzjLZ2AuCScqX2AfHzU3qW5XtaWKdRGL8TD4Rgs7W9GxuUCzpyiEqoa",
  "key37": "4bymFFpCQgdQFN8TnrhRUqVVC1Q9nmgu6j7jubdnWGApin9t45tALfrMzPtYC9sehBuitx4apWtqsg47CigKzdoL",
  "key38": "3Dh9yiXABZ3ZYXFfaFBGK6apA53Mh6Ey3QJFnbBzTMXjjgBm8azDjfXcuQSvHSnqv5y1zB74JZaxprj22svpWmFi",
  "key39": "58gQMBAJ4WHXXpgdwqBNMNBP8WxuX4cwv197MZ748Jfu9ngg6dWr2aJtQJ4fpXzsdTKWFkJSbGy7Dmy9n72YB96U",
  "key40": "58SHNLWcEUpwmbApVkVRTDyyznGmz2en5Fzm8v3tuG4cA5ne7ef77JJ82gzw1DsMnuHLk6acoCv9w7WA9PCht7at",
  "key41": "4cFSuxfNEhELKM5D8BPnaWJv2GWNzNWRdTGNVC1VNbGvaudKZh7qN4CaVHnmAwWaZCKjTK3rqFKSEApCq3NM2wQy"
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
