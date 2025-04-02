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
    "37PiHou5Ac1ZQHsjnwkdCo2kUC6QxG2xEEF7zhJus1Lk1sFZNY3iwiyERkvBAW5uAXqFV6xyc4yigeRQMCS7uv7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5PBEJK6GdabLpmt45Sj7JFjXACxdkvQ3GJ7knosEggpuFwKp283gYkaHMr5a8qJjXUeSmTkgRXFQcQWd3jawtA",
  "key1": "nyeVCnPzeAHM38iL8nTVQbb9NJi92akzcJauKDnD19dLRfStNuBkQCjyXXz13PXecqcrQaJ2ECxiQdGDMeP5JN7",
  "key2": "2Qjo96JKvVohSESR6ZNz1ymH6WurMmTvZnHP7KUQ4RUzqThjSE87XhRHSNWqNZGocyKs3npo35QEjbUjWFKQgUxx",
  "key3": "4PTGSWhbPVLCeoZqX12FJKmqgUP2ZZM56rRayGyg1Wv2n3MqK5FaRgGk6MCdNxasfwyq9s2bHbjX7UPceP6qCtLT",
  "key4": "5k7uYhLut7fwQ1k215UDJxq8Y6nRmzHB6BDkkyFswDH6aautSDGGNiXgFvyFSfRG8AtpfvANuhMjtrh1yfwxAnH8",
  "key5": "3y4gbLSpFS8AS8A3aSUSpa7jCruzkNk1iPVdp2GvzZRmKmFY9DVtcXctU8rXVCAq4o5vwzUx7NbzmULBPLHFa5SQ",
  "key6": "cUT3kkBCXDfZNcn61VEt6Vr7MCT8cus5LpAZXKWU2vneeq1zNKdN3WiX36gni3jR7E7J8AVkX95t4LJaPjgCSj1",
  "key7": "3U2vUQNm1yYntmZyCSW8hfCUNuM3BBhkZxMLV2MMH9xVAHNYrh9V3DYdQNvp9ZiLfdsuV1hYk8yNWqkBpGg6MF9v",
  "key8": "5b3ZVFuvsRQnvYEnfT4fpyPy37FUzdwwmTjJCmsGShJxUpu1Z1GhwQaXTYkpgCMrRbCe8TE9oJh4T2XHEK9Xq3sX",
  "key9": "4rn1qpncow34RGnjmfghwJSbYXKjkoBeMpaUkvDg1As3P7hu1bjeJJyLiKWzBTN7DoAgBanJdgR6nfaNGE226JTK",
  "key10": "31wYiLqRQtdt83RuNeQT1zMQZ4aBP2j71ptzkHWRsNseTgTn2E8h41SzPGm8Bsam9hGA8BiNMgFsrieq7w1oVxst",
  "key11": "5T3xQ6wZn9pGG17cFVCvzb7HerWUFSwYjyvpZGo5ZKfF5WaFhbg9eeWjf2rFoYaK7LBdghEPtMvJRVgB6GZ7CaTV",
  "key12": "5Fg9h9CqtGX8oVug2fNZztHYvZSiqcEXbWpCNEU1vNBAFTGHDoYpXh6i2TUyH8S3ycaoQ2jCAY6BjLMVdojiU4N7",
  "key13": "4jttBMH3QtrmYAWUdVtsmRqHwurh8Dwo4wM9u64sHrxKei3ny1dHPjbNsd8Y6M7CkA7LSsegB85Hdz4NL9qsKZzG",
  "key14": "5fQgNZCY4RaZnJp4bFYueqvmWqZbtMUnfGYF8rzRfyYtUazYUJNz8rVinQNJnyVbJfGn421gNFfGvWPoLV4u4SHj",
  "key15": "5iGfRMU3s7yg6Fa4xxLgG6C6UXgu1RKASnX6snhW5deYryzSTDVMo2WQ64dYnoxDKdnxQSzYNcdTfoQe7KEzYUsn",
  "key16": "kvHUQBnk4697ynDJ3N82muhGBqsswRiNNDu3hnYPe8mcpGryGSgy4W2fNd2VrNNSQ4puTrrKQEmikvxEogkPvbU",
  "key17": "4VuWZ1xvdNHnZJYwsLvJvKk7tVfizUeYntgtk2nLLXL3xqynY5aQyXcKJfy5JgyRy8PJje5dgqQjgQkXm4ssniEf",
  "key18": "4iv75F6Zf1xDEobknHpSLZKu4HQptEyFB58BHSEshEYXGzwomXxc9NS5eyyCpVCwpF88QznB2Bpp1LTwngXD9EFr",
  "key19": "ZhAsYDPAaNwYywqTkvmhoaar4q8wyuW6BjrrzWhuK5FzTVei67aUaX1ar7JFiWyeDwAyHc6cf7JzQt9pXg9WDEb",
  "key20": "3wbSJe7kqLe3tibz2iK1kGMBB4VUKZEWYC9sWGSG4F2GQzUJDQ49STdb3EPJMpo3Q3MBAEBeNVRdcHakr8cvc2ZS",
  "key21": "5sCcks6sWd85A4y4av5fyxNjc2YwCqqUrHc1g9bgtoWo1qJG4eKaqp2XMcjaK4GFZJvr5CupQv7gE8r3Hrh4B8p2",
  "key22": "4RAiDkK43fzXBReTjHUxUYcCnUgWa9B1jzcYJEk88XMRRKuFeLRsFsmE8fkFeQbsBumeQVASvKBvFfARPetVe1iz",
  "key23": "3hiUp9vFC1nensjJuyXeKXSVa6oyoCPLfHUcdVas6aSZYM2TV6vFS8vvWy5QEfakz3GCVbgb6LZQNB2t33rcUdPW",
  "key24": "5GHVGxid7gsAebJT2CZb2ZCwCHZFZ4QQD5HJxY5RJ4U9yYimYurJySFBkoJ7o1Jgp3F6FyAoWZH6n8iKMwZtoMiw",
  "key25": "2CSPCUNqLzzsAriR1FkunPxcWfPQC8r7euGb2SyYEve57bLPB3QW1gwyBJveLf17tpMZHddEUepdZ7Zbbvr3bG1k",
  "key26": "2TdYLxtqd7mNwPJPaU9mC6SmKoPmtp9DE8ETsooySEGMrnm5JWygyKE8zJMjsPcKFgEM6YveZnxPuXSzPF9APL8w",
  "key27": "5DCUqojcrPcNNmEjCE77VQVkj6zDRQFi4A2FqwrxUhna3ZwE3ET5hVSHymTCFdnTLKiYtkmuNuSNSNW3dnQpTGDx",
  "key28": "28kPQYP5zzsG4gzMTw5fww9SshLkmj2SeYjLYibcyBhrmqCzyw3kGvWxFJo6JyLzEJuBkZx748ESRzcr885BGFyG",
  "key29": "22eXn7R4fyK8RsbRP78H6McpDyzkXBfkbcC6nfMT5w5Aa9nKA9bohdaAXs7z6y8TzsoVGjVp7YVBoBhnexxhvibM",
  "key30": "21DpPYmPtYHdV4dujtxE1aCtN93kgXjtEuBa7dchxXSTDnxLDQQBe3QuB49kJai21DMoAa7AfSRRMNK7qbbe16uH",
  "key31": "zQgNzWnQ7x6EJEbgFtjzKiYyNbJfAVkJ3V7Bt3e2TSNUozYK7HiAMDg5pS8ZPrE9At5vFBg1R4zSauyB5Q6nzzW",
  "key32": "4RiPP9TCnwDdgfRTiSHhsSeUqMMgZWEqSy3ZWPy3F15hjEYAXaoq78j2yL3fsYk5yNvDZ5YDBGLeP4FuVFoxAMGb",
  "key33": "2KV5mpezke6ME8t8Vbix5ixnjmXzKrWwVmEEApRb2kik3o5hokyw5zAQpsh1zoPqdBA6Y68xXA3iLSeWgwnfM1Z8",
  "key34": "ZGPmgrwxThD1gNYGNrUvboPWVm1V2yCn2Mcet6cZrsHV6GhFNKhaQgNzpoy1oWfcgqPvQZATxPd5nc4yU5iKKZi",
  "key35": "3U8JHkzcPbvKYk79THcWQf2crtdZcYj7Hpe8N35pa5iDvwMCDZ6p8qpu5AvqLYw2qxDithQXYLt8T1tsYKddPyfL",
  "key36": "436eEiVANgpWF8DrFiEomaMQ9A1XhiQeZyhXHrHpRVeWpspmHXJKTRyqH3uPzHpJEK4YvexBpRvcC7mSMddjq9t1",
  "key37": "45fodKCoKkoF8CBpuwc3pXbL8y1atFZk2nFsqnwsoyxHruw4fXkWK3LQhqN7h3Cc8bjx75nkmyCdRQGeMNCR7h3f",
  "key38": "5sY1kD8umGFPsVDnrjiHNFZoFhoWp3AYtVk8Xj3rHPSqLBqyW34CwiYPyNKmZLdYBCJju5HFcwiN9s9j3puSbZU6",
  "key39": "9qx8MDvusuLu1jjLPFgkTERLGxA4nbXU5XarKcafU2K1sgcDecSvuD216BYPDWBgpNb9y5CjANRpdECCd3HthC3",
  "key40": "5wUF395ZAveGegqa2ADanSURF8iDPa1xRdJq3v2yskXzjCxukgWrm2hGemUEjEjLejVH15VJuvMoFj8HkLjvhcfd",
  "key41": "3jPzDpfj8tTRAvgT1AJwtRjcQfGBJDsMCdCLeFMb7sFf1Q9g3P2mrgLsv1dthUtHv7Cva42RMTnbqVTrn8QCVnZw",
  "key42": "PzXyAWTzGSKiRzoUxqM9BsDjf5BFPod8MC4HE5KUuR8gofbG8CpYtWAucmXcsDee2YvdxJr81qS44dYTgfALKkr",
  "key43": "5MZuRvULtF4BHv4iKtiNj1FdzMoB9Se9qKSTs2PDMAaAetXmiH5y6DqRQq2t3DjTmvH6xYDjKfN8ncjcTxXhb985",
  "key44": "3spQtp5LiSD1Q2W1VE4Eb9tqFAHFLU2YXQ8wzYfhSCceabgWM7ngtCasYnGNxTTHVRS5UeqpVc1NdrXA3w2EFNqV",
  "key45": "4TNfoeDP2CWTZyYfdfgeCG4M5wkAEr3oeyyXRoReDFV9b5yTfMsAG4mZDMB89TnhNkkXVU995oB5fVoz8VWoBdDm",
  "key46": "52aJYCU3u29Z4u6oNBNPvTqq3MvRid56ZYavHmYqsxySZzQKUMxQ6DgZXocjwumhtQANMa835nBANc6H1eJYhMGa",
  "key47": "5u4hwTzLRCrwtPuQtj9HnrTsRQXxjnWCgSpMbH3cqXuY563GMYFBB4PCN5mZx3V8wvEkqiBd1CJacFkZJDS65kXd"
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
