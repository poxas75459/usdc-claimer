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
    "2AkfRmL2Kc3XhCYN8Vk4i2mcXxrNtF3U9ZaPox5gzJeh2gLsekmGTYGNt3DTWd6nvrFrSwSRntPTaA3mWCLfGp75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRsbBmBKFAEyZhBNhu5MbdWjCAWfSPitNBU91eSVzGpyysdsqGksJi6PzNTg67KoAZCneu3tEiF4LJdqYhgxBFp",
  "key1": "4Ep5nte7ZoKP52BQRZPUGG6yPT67gG9yfopA8nkvTkdf36ZUAyRvi3M6Aw1Bp3mLNYJMayn5wiamu86ajRCVzpcy",
  "key2": "4EHDLf9DRFTXc5gJdS8U4BVKWpzskte7AMX3ehpjZZHNUq9Ai25UovhYrNedYqALYfqGGr7EdQQdBTVitKLa5Rzn",
  "key3": "5TcgoDe4CyFsQHAwUUxAmLNzATPNEM8T5PL4msmLFGYeoUhGki3rxU48GiP3p895J5C86NzBxzHnTBJvEwex8u7r",
  "key4": "3ayJnfde7rB5i8pmxQCUVzvtdZBE3Z7CTx71PFM4Ps5tsVTMrcM5itd3B6igq1cx3Yu4LYTCJpefkg2j6n7Zcxdt",
  "key5": "55XcN2TG1NrBoGsFx7Wgx1sfqr2ypKWmcsL7vttByrhKE3xUhek3SGF76y5h288bAybVYKHU4KbtqGoXagkvPem6",
  "key6": "aoQm2Ua7QMqFXzdnsrgTFHrBunnmwRbwhtky4gqijoZk5ZNEnf9LgU7t3RX7Y7NucAyBtyJsoXxb198QVMZXWFv",
  "key7": "4ZVpi8YaMJ7LYqnFsNYxCGu6uoSjeU6DDj5SazGE8fHjTi6cEYpX6Nrsm68AtUdCLe5NbX8vxK7bNo4HbpTGson7",
  "key8": "qVKHL7HXFUiWJXxAka8NMh5hUkjPdMKsYqD55yoPSxvATgPuEn1YQLeBfYE4dgCzQyCABnJdnxvBh2TEtZamc29",
  "key9": "2Pr5XDjhXaJJJNZtyzDkMPXrz237J7miR46rdCuGdt2Gqn69d6Y13b1YDAtNXdDwQQEWmVC6cE5Yc1ajwhiQ9f4Q",
  "key10": "3r11F1jMssyBEoZ1PX2rgjYQ36CDVjUTCWnt94g5bFj9X4gyVtNSKMRH56EM5P9WndTDWH7G4fmP9hW1wrr5yKEz",
  "key11": "3Mj3QZvVWfp3GiTycpKdVAStnetMLDM3aikunhtjR5YbUFnYfGpxttRTMp36QSkD1NnEdeJcxF2VYtZa67EmCgRK",
  "key12": "2HZZxddiHriKt6Qoo6ucFxin6x2HkMRZoCxvHsrgGnE8muGwNHtHBWcMgRKxKnxjNddWadUHSi4L7x2c7wm4QkdZ",
  "key13": "24DQUDoKmoC3T2cKqsAZk7Fs5LvGFkJfQ3WbPimCHGmSdx7PfSMnanbnyMojachRFHeLDTB9YxsZuagZcGJKJuz7",
  "key14": "2ynpBLCgQk7SjoD3sDTLzt9Tp7iX5Wehwpvz1KXdWjLiQSyodneQsoqy4F9oxctSBwyq6FP4STbi7YPyjTHQCKXJ",
  "key15": "3PeacQYiNrv58RMQhnkhGkzoBjkaSxzWcnFu8RyeqLw6xrN3GSJRUUcdK3MdLLrhfDRD74pLeYMVHF2GhKjEKPZi",
  "key16": "55cXa9Jdm8raAB4KL15MeWQzsk23xwudgrLSXu7n2zMCr86nv9D9NdJPWcw8yDUqZDzrD9EEQqzKJuewLszKyCX9",
  "key17": "4FiXTEE89xFpV2paJk95mGqg6cNdYyCvtDutJ7zEoxBBLn2oJ4RYBqRfjaJ3LFnz7Rkmqbx9b5nVCjDhYTV8ULdu",
  "key18": "3HAGNafG1iPjfdpUxdX3FXq7JxKPaEwqeGcu3Wp4n4T9RVK6pCh9JY3fGB1zU5vzi6NEHqf4uYjfV9Vfhy5TxbAw",
  "key19": "VcyzfPPNctU7GkozeeWJgM8SLtbZsfe89P2wgTrEcxcx4oUTTT3cyMAQMTwuuQTwu6wvo9MqSA46kRzxqUHdXmN",
  "key20": "3Kjk7qULRYCZd2jQYnAV5r6NcXhP4XCyZQh49sQ7Y8R7hbsxXHgharWBSmTk3AePUUpvcJr8sN3sNr4Xhf2Y5yyq",
  "key21": "2cJDWCgsTEQB7QxJq7bxHt8teCLX6fH5pQMeSTqpBjmLqXnJ6c5QnnsGHcWeUyHkhbXk5CnCyu3n35eYBayG4osJ",
  "key22": "EABeAbQ1v6oFr5qaboUk6umNzyPCTy69VVytFp8qJVenoZ9VjkJVsAJWDEV4UkhTqddpTLoSEBKmBV11DLCFzaA",
  "key23": "2nrq7pm1NSobeBVtGcRoz6nXgaRsuAteyNuKGpeWQNLkzj6awcGTQHKv7cYrssdh9qC9epLHoQTbUUDi41FLcpyg",
  "key24": "5PNMq4jiSEamuBjsDgXb1pwr9uKWGiM94sKmv2CyNJjtuFK2BXmGGb3KHVieXZMGikeRNo7naUnw9sS6baFrGDje",
  "key25": "63o7XPZHxjaCrZQburizsvhJ7BmE2ndm9qqG8qFEA9PzBNUPsyAikRh8J9hWnTt8ujtuoXjE6FonmgF49cXyNrY4",
  "key26": "28ygsCY7ZfeZKFhk2ws8wBSpyK21K1dccmfpVWyxtfdQHYhdTn2SBMigaqdKJPVgBueieyAHx7YoQ6nkgbrtaeHX",
  "key27": "4MU6baSenf3BGcSwsX2oj9JgoDb3U5okjptbD5JPdGKMbFanu9NwmgeDKPbVeUhEk3FHSz3nqV2Uy8mtT3H9Dywu",
  "key28": "hqsdyD73bwD7Pb6e1uQrmwZZARCJP2T8j4bKuXJBYWk8JjuozpScxHZYBPquQKb6RZMEsjJ3greEwZn48NnPxoi",
  "key29": "9JZBPCPJQcCmiWUkRiWF1FCF1NYXNqozmt7b5fvjeXmWVnqVHuxBNTRUYYWYbUyEdDJ3DScxMDAekG7RxGwu3tM",
  "key30": "h6SyoKNu1apYUBgRRayhqPwQMHsVUoFNvjM3mfLakzubehrRNaT7dtg75UhJFUQRwbYMZS2FgFbmzCADYZJnS92",
  "key31": "55xnisB1a1DnEPPhhtdqzrEVsoSnaWU6TGkgBKRkCEEbhBoMNEwd4yiWd7sJ8wBGfNmGCwfgKjKwzTYAVtYLdaAX",
  "key32": "4y7KvWRyN6fym1qVfP9CZruvyHp1rHPK6Ri3jf65Jc6WaFgLyHfW5hcuXPJwVdYmqauFwkshG948FtKhyvkCvgsn",
  "key33": "LUCBkSvmgRi8pXG8kNpQPksHSStyrf1XDqD2XdoCkwPVuXVfDDo5WQ9iC9W3KTFLrzTys6mE5SfpBc2fRk6tmvK",
  "key34": "3vSa6Wt9hrv1BQEhGi6Y4t5cNXNLCQFy7TVRYsryfFVcW4Yjo7p2c9V3kUWz7b9fZXkszxHJJCcocRp8bJcVNC2n",
  "key35": "2fF352GkAXVhuMAAmtE5PgF9UF117YPWad6zm9Ae1vgPq5LHjawsGqHmTzC72k7iu1wrSEcLxve9pCHTBYR4Dcwd",
  "key36": "5YAA1aZqYHDxm6vJYYhS1bVccrrpLeB5TGQNvwjkswYaQi6axoZfDw4R31EVwEusURWF4DK7ZBvAgvfEvcWcfLWB",
  "key37": "2H3DKseiUJGKuUnuU5diZf7BDApNr8VC4Xf5hcCXHf2FyCHn97GxkWhDv5ogKPdgeDdnnS4obXAumE8qjGob6Hjx",
  "key38": "5HdErjgUtsC2qVKAf4db3Ej6ZRp6Q5UxdqPAjjQTdacANtbnQm4BL3EmebA8Zyyo26NDL6k3PVdmEZqXxX1PWfjD",
  "key39": "5AoQJtgSqdbuSHLq2VvHR5CYwoPVN6LxUHUGXD7KwiJ34CQGR3sJg7LkKTtmt6FhSBo3GzoqVRmUkK9CScXgeDfm",
  "key40": "4SBjVZDDaM6wJZDdpRyKxQDpVV6bKQnwKvaRMBbEjThnqPoPzQNzhiWVJCozRXkntZf89JHq5xtxeBv7uJ4uoD3c",
  "key41": "5iUfpmzPTbffWwEDDG48tFNSQxmnaqnyUYFS2hefZozdry5XQofjRwBtvmUei3ccunvGrZNYbPcmqe7pVjj1MwVU",
  "key42": "2G2Sbop4XdmFVj8HUwvKo85eeiCuaNKhBhFmukSApy4YgjwdKjXApD5sFvMJiJscEbX1Gs3oVvnmyzBGBPs7uuBt",
  "key43": "43GfBqaVHjiyojGih9bMWSYHaUEExoesxRVugG4y5ir2uvoy8BCX58jPpzrEeV134NLnzXw315HzSJkU6y15RxZB",
  "key44": "5up2ELLnzmcGTSyMKg1aNKDcf7BwAr8heHicSqvJgAAEcwiXtUSeEmjR2xfPGeNPcTFY9deB117XWbGvxAHZ6E84",
  "key45": "3ZEHF1tPQb1FQVD219MWiX74RqoqcvLXKMuBVG2EdRnfG65iSHiR333GkwxADTc9h2CXkHMj4dud8C1HqfbELAjA",
  "key46": "5yXanwfjMmTSFk3qGHpysqcrMmGcL7uYNQucRaJxYB2aUjgWC2ooCPqb6emz7cCKQ9QgRybJwy6DxwciK9XaY5aW",
  "key47": "5e7DtLnWw2akTXgvHZayoFKVSXVMuKmuCdTataqGu9K1RmW8j2VKPsaD2UgduEPwLyrR76JEF4sQ9nsgPJyZk1wg",
  "key48": "5LXgdYAppp6RgkcMoM9xZNq3gufhAbDe6SMUrRZSPpbwPyjYDMaiBWBhvg1D7xp8A61ZAzB2NNXTwdUGzsnBKmPs"
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
