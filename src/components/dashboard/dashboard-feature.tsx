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
    "5isS3ixgF9LAX86ZaBDBVY7bGoc5y6MEnADb8DbKLv7pTWn6DVy7dSqPotpt6jVk3pEo8gFPTV8F5yyBP6iE2ZJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KeJkmHQdd9Jk9k3yamuENQ2CfKQRguDs89wErtarHmK8iWQmCwjqkfdLLLTU1HRJsY19DmjAi1WLtEWL3bDaAWR",
  "key1": "4GFTqJ8AhkFvwo9LMaeiQXknW44KvHkLVfC5jW6AkMWdmBobZC5VLUeXk8UoWNBeLzrdJt6Z4W1BEgUdwG1YcFis",
  "key2": "67DvnJAEaAQ8ETL5AR4s6EfNLrdq1KgEZBzfUXaZuPmK9HtrfARceetnM4pnugUE2ymJZiQuQQdQy31XtxqeHJ71",
  "key3": "2zbufKYAfTfJyr1uxbp1w5ZnmXnqpTbYoYj3G5Lh5nTt5tQstiSGecfc3hG6AgEBU6mkmTwo24WG6HQ4L7tMXcex",
  "key4": "2H23rbtWTB6KTJjpSAWdRJEc8Hz9im3ra3n1nUCpgeKYY778DDWcHcRHeMLY3zSiZYxPsAsYtpEWyE8XGdUxeWfF",
  "key5": "41EHD2qeSYCjbsK7Z23kTvuxGZBtDMHyUtoGZdErH8hVbswc37oLafNxxJyNTzgMKZCEAXevijzf8xDRY35kysQz",
  "key6": "4cjy9zCbXCji143rMZ7Usx5pDsKPefAijrh8bFBu3g63VgMVKFEkkqJm9akGhvALjkw5mMwcCoZLrR9rvDJuw9Xx",
  "key7": "3Ktm3rsSfKYfvtnKTq1kTzDR64dfEucfyR8ra7fda1P9WKmjzx4DL68NgdJNWkkuyW5AagafuseGStBF2Ab3bepT",
  "key8": "32bfBjjwzvK4spoPxVYnpMmteUFzdDDARCWgFX7FUzm1SBAZwXVnsNMeqDN68PsD5munNnq2w3ST2UonCj3xgGCu",
  "key9": "5XCNGdpH5qHMqkpfzxHGPZhC5fnggt1agirGUf8qNiX3E1bmNVez86YSiTqxngM5Gg3sRV6VvC3sKH1VwzPUUvvZ",
  "key10": "5zbCSHv8LMC13gxGjA7CZk9BHrNJWEVvNog69x7xNasvwQQT573F62utXwxGYkkmUyg35D2eJe1iBnd3ewUZGKtf",
  "key11": "4HxNbu79no79ThsTWk5sQJmt7e87qpWzu23kmxaDKgMNHrA9jyXdjko9vhPJk1sjHBiWNL68FFA258evYgweudNq",
  "key12": "MDwQTNDUogQrgg1YLnUsDvAmMZAr2tvFEohYsDXbTku73XFLCfvQjmL2JeJuQKspR5YKq8iS1BHU13bzR4mssJW",
  "key13": "34caBkd9nsJXQF48kwVk3aQghXhRVwxJ4uArkpqVCqJhiz77TfzzWXbXCB16Du2stKmk3BV19iL7d9v21rCySmee",
  "key14": "2sTtwf86czaS3BVfq9YD2XMaNerxQscGXuFMYixvRwZE1h6yCuni5UUkMMqiv8d9xw6yYX7Z3ADEQswEfha24L5L",
  "key15": "4px8PU1nXMB7FgFWKtJWgBmJYekanarDmgPaWzqd3YnYnaLEchLJs1Vr9V7KhiKigQJiKh1LtimUfP77o4Kw7Ki5",
  "key16": "4kvCPJ7HPxyNnrBnKCN2ERC18K5Dty5UwUczpjjweAphUigcpuRphFD7fzzpTsPK9LjJLP7q9uTzmozEA2r8VeQm",
  "key17": "5ufQjT4Y6yowXXi479FYrW6oBoCUeTEtB3aVzUjiTFXBmTn8yxHNYKDgYwR3peNpHXwN2j3VfStk3ZeH7Tnuc5Nx",
  "key18": "6XvveErjQDXDWpuV4ULBAJ7sZqg2U8BiQmnrbrDczz129NVgyMWkyGefm35xAp3fRcLZryV3hrum86LGrTB93aw",
  "key19": "3qmMNM29Jh15H5MkBd3s7akYWQwhFVH62oSp1Sm3647sfNpav8WDNR394A1Kqcmxg1wghM7Kv1rGzPvaLSV7NmWL",
  "key20": "52aaq4jtL28qkTGuhPmi3ctrhSJEe2XM8LJQW9PgtonX9D7msqaXAkQq72XAH5oERstxkDqyZFsu5ysPGN3uykrC",
  "key21": "3GKWEg5H9w1EX9VdLGVyf2MGBuZys3iHFd7Jq2XdsD1VoppRPt9b65m1KdV2UJ479aLu7t4iNBUAHhDc67V53tt5",
  "key22": "2VREsbRN1toam1HZtGjFdChuD3pKSkBV9MYwTwJnedsHhUta6TqHXcJCtgu6toN8s9qc9UyXuG8N13zxyZFa6d7e",
  "key23": "3z1DmaEtZeBepGTuRaVm9T8U1nT5tTxAsyk2yEFg9gARuTStQWEFuAkpDK77QTGmoEUGJeXeoMP2yFVaVP4anDeg",
  "key24": "dLs2xTV8RHaDBbk73zPRPjAHh1vuqUhnb6rEL2iZ5MpNJ2kuBkUjXq8xaS6NjTgpDzGzYXKH6tAAkXnpYQ9FJoJ",
  "key25": "5bQZaggX84AkaG6hndQZsi6wQdnghHTeoHSkZTNowU64at4wntiG8QXJYA3rvgiWQPUbnk9ArYXEVTkbq953zgLS",
  "key26": "5HDztjWUeRXrZZhnBNHb8h4WmqYF1bp5CF7695dpcTeLobdgo5AzoQvQyh2LvnPsY5sXEhm6vtRHqV23EhAzWD3m",
  "key27": "3MW28jis2yo4pAeGkzVpFVajh7Q6vXkK7HxhxUXm8ie2JYSCaoWj9MQ8gn62bzr8r4rDQo6ndHGo3vWbSAAnLB23",
  "key28": "3pP7Pqt48Cpw3v2NB5AEg9DrkYExwJ1zfBcHNeeyWpyYunwnCXZhDa1TvCAmhSKkuNdJnyiQnUh8Ps1kb3VEAhrv",
  "key29": "MY5vZvC72vwaWTWUp4KcSJqYGVAK6LadcF12ZUXNCLTf9kagHgzGaxYJG32TT4ZZLmugrLfbdzGJhrGtpgdFRzc",
  "key30": "4A4TCiFimKHqPZgs8JU6F855wo2F9kuvjdv6xLxxUiVLGGKKvtR34oF99D5wy3q29K2NzzhmeReoz42LT4p2TihL",
  "key31": "4842Y9NyVHKfusjXC956MPZbYBT4xT142NxF732wVV2sFqdyWoSsJ16ByyrueqYzuU77q7n5myKTND7Rf9VfYi6R",
  "key32": "3cmWB6fhLhZX2Mq5WdxenzpqWoPpGFMnQiS8QUS3QY4HPURDfmZEvfJjv52xrDYSHEFDkFaN8KhfrMmuWyPGiYGd",
  "key33": "2qX8Zbeu7ZHBXtqt19qthDWBwVuE3XfJqH245qZU5KzDHxi3zf8WKa8FNo1MkjyT2zNHVUEv5zXiySDo9LKgoKDM",
  "key34": "5ibzmfTivh4LfssnKn8Xtpa4fjCdcKXgG7QVPU7g1zVmUYPT2krhrPLPzBwVkGE25EzKspPuhuQKGBRsfyWjLD1y",
  "key35": "5rPRczqtipNUkwfU8yNsr9KFBBrbieAX9tLYGojT3bVSiE9NAENs29apx6qZuZyrXxz1gst3WkRX8QEdSbqHuvLR",
  "key36": "K9VSh2qrG8GzNSrGz3rgnpn81ddQfhwzihHt41DCtkMdmYJWPaZXjb1qwhGfCHYL4pZTDpUD5rAsmTdjYhHJsRK",
  "key37": "2Pr6xfcKDskx3wQJ9uLLgmfoPTdGSiUqDD3t7nFddnuy37sMfgLuDNM3J3yHdukmdNsh9rnLzbrKL9J28fczJMZM",
  "key38": "3wyxdHbGqozpxSKiHFqcNz7sw6MMrRTVx2iNA2HjiojuGJUn4nPiAUCvkuupr6pKDx2K52r3ka67pH7PvyJY9iYv",
  "key39": "TZqohbABTmoLDBkj2xPzfrDqcpv2PvQbEjbWW8EBaiJnkVPimJxMTrLpJHavJCUCD8CBnirKu5THgj95Pjoorke",
  "key40": "4TWMaTaupXDDxohrbvNX7zXXSUcYarygizboN3jDqWP47wAfBrVRmREb4W1ckSHCt7GYCe51FoXr8wsnjwFAS8XK",
  "key41": "2viUyUY4B9gt1XMY6bzxVXwjvea3Cf7gZXZdDKyjV8gjXe7RiQmKz6H62uPqCSnkaUVf18a71qv18q1dgW3rvvA1",
  "key42": "2hDmYYE7rpvBWK5XJ4oqBFf79xCH2cU94FcVPXFHdJNWmAcokVkcKuXwcjReNXvJ1mmAT49X2i4JTqr5X3aLuZ66",
  "key43": "3RFrTgr3virdhGgRrqNBt8TJtUxj9WLy3FKYAHkkk9WVP8BEd6n8KyQM7PdY26qUvxpc6TvoRyRD63Wbfqj76hs",
  "key44": "4SFCHH4SmiRAcod5dovrYZDD4u7wDR7iEjTvHJVTtCEk7ZodNGGxMcqJFiFg9feTegU8TCa1E99fAm5vdxnk8PNX",
  "key45": "fjLPJbm2JnwLtwz3Y8Dvh26juYi8YanUukoAkJW4VQ44etYggKzZHRs9Epv12K9UvPEmVGGp1QduJTi7BghnNpB",
  "key46": "4H6Ch6cMHNUFBJGXmkM5wHQoRdJTR8HtqaQdva3bphUEJLrokjLfqguapCEHvGpMtuRzi2ZgiHQ9uxet3g9krNVn",
  "key47": "49UCt8p3bGommR3kSVftGbfLhm17iinsM4mBiZSbGUiHs6MfWoYv7gvkKKWJYvvFRqRyANuZRPM7bwDhMXjCUsX7"
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
