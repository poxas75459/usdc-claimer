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
    "3CJpd3HnMzDiSWW67hcV2brueA6smEuksVJkj1aZCChhXc4QhKjVtbj9zkJ9DKWjuVuRVQipRHTJHCkAndEm6dsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3aBXzxF9kFFRJyen4xbejiip4cCAqMpyxrXuQDhKcGEvcaDkMwFJdAZN1DvQ3LrhkepLgRdjXTJgoDokPtyVy9",
  "key1": "3bkBpwNeuasQ6JBdU1mhzuzeYnrA1LkYJjmwvJeTsfWA6tEdDMmkh1FoFwEvj1mfxdZ2ytA1BGuzZsB1Pfc5Jfx8",
  "key2": "41WcCxLbjrqbnZADsk73HP1hhMpkiv7MogM6dH1fhoKNkTUauxuPdWXdWa89Y3mh6ZuAmnCdckDq44xrvVDnHdMH",
  "key3": "4S4iKovBfuMsNUAhpTvZ7mzSiEPQng67wNjT9psqU8XVtn4bzwV1YAPBoveWH8j672YjpasAu2UoUnSBvNaHEaUL",
  "key4": "2Fe6JZAZVb5HNGxCumidx7kkvjz8ynSuZRxNUvcWw1jRBnTVM7R4kwSgkw2jWCehdT2soQwxMPSjC3NAgpAmNH9h",
  "key5": "56985Td1YLifoHb4LXv2z7WWgULXCPSjzBhaawXzCDiekEUs1GcX4Dpn7fHs1E7ynqSriqwxvJ4bFWFrg5TrmYYk",
  "key6": "2MJPQqVth2LxZEep5UedMrdSGrPPULEQKmdg28jhGWB6MzhjZQiJBywkXxL6tBUAtGx1pXsQjG941VPqiMg8KNna",
  "key7": "4JFXYm2ciN8DbFdiVBwibWN9g61X3Vhfhk7dAzMdY7wNyENUU9zPAdLCqMvT9pjcctjfioj73LxKHbKBFiEtzwvz",
  "key8": "46YsiTG9uF94nDQptWPKQP7NXTyMmaMmtdb99EaXj9cs7MpeZJs4mB2x9EBBjaduShFCfwW8w1YxKN1nMhUM68vu",
  "key9": "5V44gGMoHa4Boa428bkSws2ry5RgCZyzvbMD84KDh8a4ougwY2qdNVbuTxAnYnibDeCsD7WZ59piKJ3NrWLcucBM",
  "key10": "4KkdWepZkwMKHMNrw47RPaiwR2UU2Yt4wWMz3f8zuk3fmPx35kK4qSrcJ96jqSmVfaxT4mfqNKhR3gQVxRVgVNVo",
  "key11": "fQQ4c4W6B6P28MQWWLfMEVubR1HTUakruLsFrSNLWZRgviKgK14Kek3uxsAJb6GyhBEDbZYuuDay1CvprUbXyJm",
  "key12": "2iqVWAudH1F8eQdyP4UkzsWtYKar4c2vJSLXACVpxGaEQWYqQ5jtwL1zjuuTD4t9DVpCGLqxMNJsq6PiLqhxcmt9",
  "key13": "5iQhfC5fa7VSFVtYgmjz7QM1nwED9XgUj8vgcFfv8TSphPV82tksVigxNXC8chrLBHPSFvU4c1vns5jsLHn5r7XQ",
  "key14": "hSuagaDoBu3N37NFT4uGWh3JuM3ZzfavvPmGwcbMztjzcf7DUTV2sGGyEG1eXJwj5QxejsigtUZXPCoyaKKh4ij",
  "key15": "4wFpjsfz5mCSL1RLfjDKndsapj8YDLPdt1zHwStP2QN5SaRrfG6RxynPNZSn12ZqNFjc51nExCSrUKQTwFHsmiVB",
  "key16": "2ok62XnyAXtPASjgbwbuMBM7wnUojBasa7zF5mvKqgdzEJtfiuNtMpaAYT2DTpA6CzRkEHawJqtpLudhc4ykBQV6",
  "key17": "2uTxWrg7k2hgK1GZDJia7Zbh79ZYS71LncJ8ogtj1ZgzfjBBJFYkMt4EjK91Sd1BHw3Fdk9rDBNpyzFaGy6Egka4",
  "key18": "3w95HhPV9czUXaM8NyvDZhZ9MAfcc4SL7TjVchZCSxy1VvVq5TRTQgfEiYxuR3BFUJuqHd1DK8Y5VE1QoKXux1cK",
  "key19": "2MAC7yBPUeqZJUDznK8Si5LxbPjrxBkPWvSwbryABWvB92s63nGuzDB7TyKDVbjWwAHYsTWJjyoJjRNyaTDqrmrm",
  "key20": "2gGQgtNSFNBGBPTvo7F6YdwvLJ5584DuEdKhttPspjTbBUctFrBTNGV8azuXUjQjecvC5vRnTFYNXyYvqB78UdHY",
  "key21": "2KAG9ysRrbU6takouF455QkQK8qFXP9fHgEJ934QXrL5yon1mNWTkYNS4x4bigdyGsFn9dLB3mVW65q5MspMJBVN",
  "key22": "3wzCjcUTLeafUQ9AzjEQsHCZpZMovTBUEUr9VueAWr6jmhb6PW2apDJd581uojZSozeKWF9ABqFQePZKGke6v9iT",
  "key23": "3fNii6yH6hBXSQYrnbxv5KpPAwcBxv6oDHi9czv51kghmqCAKtGQE82Zi8VSNw9cYSpbqPQzzRDHWNXux21k1XBt",
  "key24": "34kYumjCqkngccKk41EmocSMzKCZ8k9WA2oY1Q83P98CfMJ3dbQ2BnwHWYQGCSfPz82DubhFErVt43askuf63aAx",
  "key25": "2CmRfMGGRvnA9TUvv3XvthbjkTV43Wdn1dkaKRQeCK9Sx1UffWcGNjLRjtQ7KewGxLDxsr3qjaBzGtHabzztrJkU",
  "key26": "59ADs8P78gSE3wwX1LvKzfP6KZRUZ6mg2vc1TSEiixCow4htjmUh4svFdSRhvEfMDpgusQjGabocXxia6QCB5jeA",
  "key27": "Li6uPo1PCmzkFQTDBjfBLTKLfPY8XqjemmRhP21qYkAepraBrhw5BQwQVVePtAstsxpBEABQzUwzsULp6ks5Exr",
  "key28": "2pMEY78CEuHH7361De81smmtuEBGynirapoiBJPvDHHa9rMDWyffvVZgsRDXZH8DyGGhbuZxS3maWuYnrsqHtanW",
  "key29": "5WQvaDf13RCNjADV5cJJv8Kwwbbi1ZmJ9Sbh9fhuh4F7uU2bU3zT9f1WTLiuNGpbWTnkJGgNzrsUaSEUDMpFsNjc",
  "key30": "37DhdWMrsQsgKaa8zpqT6YnJQUCmbMu5WKVzBzxQLG9oXpdz1VonjV3gJdkBs7zKAU6ccuJiLRqQJ4mq2Cmgooo3",
  "key31": "x528tV8P56EWMgv2qwHZJfkAuxChXDfRKyL368X7GeRijbDSxcoBtq7EoFUJaFCAz3TQhke35VQkUYi5akWhRn4",
  "key32": "5EukMbaCsPEvV4aKvQowFueE7U2uvRbkriA7ZasbtwwFPbCxfB3E4gGVFbZttUTzMKNpoZCWp6jcriUfNqmAewYQ",
  "key33": "Zmqj7gvHjHn3Wcjs59LK8bVLGs9fKs87Rk9Y95NLG7RVwQEMWYN6iBAZoZibtXTPb2hSvQkAn29WozUCfL5P4Sw",
  "key34": "54exs11omUrqjJPu13pAksAcgMopXGUYE1JKV8S97FSu1SUkuJKaatwjHAHbmsjZCj7o5zfk6CxCen9e92QieCVp",
  "key35": "3jATveCEsLVVfRq8bGvk6DsbbsqJ14xB4ie6R729yLNpMMz4ZDU1D2aCQZZFJgHKvsLekxkfMFjyMCiEJdCKPMaK",
  "key36": "ABJTJJvxFZdohC477SAPTfXV6o6kJ6g7VA6QVk6DYb3sy8xmbD42uunhmFsDhBntpYu2ioK4rLdPiptSwPzqWg1",
  "key37": "3A8BroFRkiXF6qXfeScLEotkPCVY8YNqTUdRMJdoXkRwLKCNMUwb38xv7dh3fKup8zb93n4Lhw3XNJtTuaQHHbbz",
  "key38": "3HA2hVg9wUnRS3ai3DGFU21wQ1xJusCtZstcuzqHcn7KArwmTfQHSyWJx1caSRdJH5ve1NvLfrraS8wXB1kfwBEB",
  "key39": "2yVaXxLL7PQQZs18nNwS8A5ayHoitdtUqSWE8jHocfeAw1tK1eZ5i1apaN1oXKtoZ6R6RS7BytiMTBuayje22K1k",
  "key40": "2fW9tNfvFF3Np6KjYvEs96CvmDV7xSQyAukWddKk16ohmmbKk5RC5nzaZxq7QLMuskpmnrpkbJM7sLQW4zuruY9q",
  "key41": "kGrGqf61URcBHKpkKnpFpuvKXrimBx2c2jbMy3EGNoSJWQXpLi8VapfNYErDXGsgshZHrTfhiKyqxcrNprCeFuM",
  "key42": "3WXTgQhRQ1h5GSvBPtw7SZxqLT3qFjrqbDwVokxHJo5LhW6XEEUbkdadTFm2xzbknxmK7YzSYJhqoKuKTWgsqkeH",
  "key43": "5xAT4R5SwjrK7MJpeR8KUnLKzgGwTPLXZkmP7wKVN1C4Z64Egw7aQuXmD12755PBpBP1yV6SXbPJcFtUqEXtqNTB",
  "key44": "3KztyrYk6gbybPiKi1H7623d5z5iHvzYhRP1cCfjSf5t1bpMNmPDnNzxMBSR8KDWpGJvWb8ejeFJks1QAnjEvrGQ",
  "key45": "Ai8mtCcP3yrQbssM6Lyv8VKyXbDcYwZGfrVPcd8zGMg2SrVbaEhQsJY85ge7TqUJiYzQMbBHdtnZKFSwX9fwdZi",
  "key46": "QXk8RQw2uUJTDsFRP3oTNsZztUAbAJ25jypyJHbD1VXp9Hk9qu8YufXgZXCWHXHJBCSyA1LLDuRJMF3mfJjZyDS",
  "key47": "3kED3Fu3zgLunD7DvrknrS6JAbkkViePaHSce77pZU767JNzUM9Bqk7EqDDjJgmEm61EzrutW2d6ujddLw4ypGjY"
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
