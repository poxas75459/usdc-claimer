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
    "3Ur4pfRdi2FXhj3zxSkYg1yV5wweZvmh3w1sUGNWfjp4YrjdZKHKJekGxdxQ8VKA6YhZ7XzezBVPfmnXXgf8nbH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bj5FKnC8C1N7kju4PEqexxofURb1kBQxAo2pfJUA95mtK1zyMUsmKyDas5Ctx1hgb7m9cg9bvBb7mjUo6HoYxS8",
  "key1": "5K1UY9kQ85M4jHH4z2U4cmxdebNyGSRuBdG98HXDqAeFgt1PUq922p3peWvv9KYUM5hig8KrQFgqYbAegUh7e5ZA",
  "key2": "2SxgmejcxCjwLQr1EYSdA1CqitFJ2kiQRh96mqVeHeSYUsRCg5ru5P1HmFtXVXpJ7NoMJBvwwVQmeJDCW9KbeCSn",
  "key3": "5aQW2LBGCbNF1sa29opQbruKAuuA2eFJYoedWJ83DJ2zYZBiYdhQMee26mHmZL4EcyHkhxH2f67wtXHtdTFEaqaE",
  "key4": "5HQi5my8qZwTyAjGkPYxBg67N9euPVyqx5PDYCcnnXftYU21r6dKQA7HT5bXyzEQD6bRDgNcQNvkAk4zh1q7U3Lr",
  "key5": "3MCj1VYXacNLsJp6rZcx9w887TYYiT6HvHFoZKgQXMaM24TEAWoaCHdcyPjkR4HeJHUKsWgYvXd33nzpZDhN9XLg",
  "key6": "2j6QYuRsY2d3y2qVysyzCtAqU5YWGwpa37HAFdufEVC8uPwX5pAsiRmuQu5PRs3Vj45UhbaPNVmxhS5fMg7W3NhB",
  "key7": "skFJRV3gW2hyiaPy5CsPMw7iz2VFaoSjceEmBrNyXsdESZWh4HEtXarGtUL1X4E1tpvZmkv7Q3yWiHVgJD3js14",
  "key8": "5jqjm9dJLJmuzdoR8MvgXZofGh74zJRnMmVA3FiY8w8JSAEngsx3BtaoNyXutf79hxEvMBjhKEZEc2ntaTwNxDCC",
  "key9": "5YBdrUTHxWs3U3us6JHQLEvioaReBNjwsQ1ymK9kYedGZx68QARU7GDKT9pF6h5Vrw4BiAJadXArtrqbhqePwwKW",
  "key10": "3rTZRubGNw88KfShrWgEMNYJngskeFBTZeL4dcUFZBdp3Yh5y68Ti56j6wQzsBBcuoaLzJCGG4m74L9X9Phyia2v",
  "key11": "4JARLeeDR7WXGyjUR7iSLeJQzqSX8NMQJTQfQsRXUHmvcN5XnYWh3NsJhSL2yXEvu6zetJamBVDxaYK1xGDRW2vN",
  "key12": "5k1XemeqagPDJo4CNiA2TvZS7aiDJg3AKFQwRNgKKQ3TwRynfmHh1GGqv6tGQxdAePmDUXZuUuB5csA1bJ8Wo7qX",
  "key13": "42GziA2SbdR1xaRgjsFrpyTTLByeJCW8mWBQ25wZRTxssdYWoSdzxyRvLN6zdFHut78zGT7Xtr9kdEDiu888R6CM",
  "key14": "27ncs4UuCKoJ5AmAK5Fr8ByAGibSraEaLoYwtnEK4e6qECqsFrwJ9b1JTSg88k5spSyARJNBJXGB7gjYuzAKrVSG",
  "key15": "2aruRPA48MgrMQnwMReeVSNXHm3PZCx92mZhm94rFS3e7ruraHxjWuYA5dN9kYqJLRetKCWBaZhjLx9zP4ezqKrE",
  "key16": "4eujUaT5uy8iym7JZG5CLDgBVZ1zYJt4rBgJeoYk5r9ZukCmyiAUU9fmVSzqw2yNt2B8CAdJnkBzL1TJg2kXM7dj",
  "key17": "66y1bQUUpgFwTohctCowfx9U78hmrRDQu1VhLP9bsYwMDpDJXhPpqjoP8rb29PdQmXgWYnbdufYy7bozQBvGYM2i",
  "key18": "4VvTDqKi4GdpuiXfTN2eGXrZs9nypb9kKp5WCsk2HBicVCgaoFnjd3UyXwzFK1v7Q5aAqh5AG332sEj5kSepdeAD",
  "key19": "4JgL2W9XioiBqGjUt5KtPSnS7LhDuML6NPad9n9HE4c9Kx2V6Fd5gc1Twny2bBpSG5e9aJ5FZtFi32cw31ertWoM",
  "key20": "4S9zBXokefiDkVnRqGyZVGbzJqa4Mk557MNLJ2v9ndbicPJam88JSuPbL3nuGVy9Z9vPMqJo5eMuFvuiyXYMYQNj",
  "key21": "4RkqmtA48Wr7nWZMCtZnhBkgctynDvakzB5hifrghT8QUFWZECYuYyBxHgZeGkgkeNi86ouxMhddw3yF6qnkYvbp",
  "key22": "3czQYb2X4pvm1wvYayKuPdkQwkQc5ZJqsKR98RDdqaf7VtVmMMx6nCWHPgyjJRyK1ojppaDzhfL6fSqUkq1xX8Yo",
  "key23": "5Mf72R7d15TTNn3m7738gteUajWrphrC9miWPMKJAPgeogHxbyTqDjwZKf94TZ8fY4Z73DPzcVZ6CYtvy44VhVM2",
  "key24": "bH2kuKmUgMHx8XRwH3eirJss5h9N8AWqbM1mipvugJbtTAbUMocKHMm5ky8JduEM1r75YwKhnpUuX2MWz8RsWaG",
  "key25": "5e7o6J51GkEBmHVE3JJaKyDbm4JNCpqihk2uKxdkYvMVjYiw7LnXY5CDCugtEGQbqXRQChunkRjJri3RP9eG7g3u",
  "key26": "4ZotbSgKSgPjbVn8izFY3L72suin3N82T9UzRov44nxRgiF1VRWvDZAosHxTaUWRAaau4S6qk6hhhMeFfQHgWVJb",
  "key27": "3up1MPxWuCroPazF4riNLwthFiScpHYzNDh7jJDfS1uJSo3sDYuYshenUGmVYjivrKe9yU4V4ULsMpbemzWraePY",
  "key28": "2bVzVg3drQEwbzeDV4xpv1HhmJj3rk92vCwhoPy4DduoSdEqSVjUC3Mn5MThUECbbx6adFKGXSmfV7DU1TAkfmWk",
  "key29": "5KdBTXrmZ1aws6te6VKSW7fyHTgP8m7aLokuNqNx6cJcBs3Cn8jKiPoRJ163nqJMpMNHzpC9vWrpuQkSK8gBnWHJ",
  "key30": "546DVJK481eogk2kKoXssPkPJNFK5DBfq7wGJJPgce6jWfSkvDGf5TvMqYmgg1AYjm2ftMxGaPSQDqYLLuDUi95D",
  "key31": "29nFTdBbGve7dh8cugoJ8FJ8N4shccaruT3ejs4CeupJQdHn6uHjVpxMUo6w7DwJCaxjUx1xth1m5jpAvJNyidNX",
  "key32": "ZuetvtoF4T8R698e8XyKugfnrwW5F6gzVRySMV8jU3ype9CaFLhrEVGtZ2RJi2XaKms6nqPR6K7jWJByJnXNyZa",
  "key33": "53iiTR7FQ2rUe86Nwg3Xp8Ay4LVDJC4kEisvTRFdhCJ4JcsjLnSd27yPH4RTzjiVHXg9UWnWG3XGBtAZS6k9TKe2",
  "key34": "2dFJ5UPcgFTrX1CaUdaXwoat2TrZobfkMXHLdwPMe8gvEVAACkQMhsVSb7knpCzn3UhaqQeLSgKmeNmALKh2vmPF",
  "key35": "4a553AjukSuxY9rsxnUUtaPp8Ep9sRv4iErX9RU8Mf8e5QQQszdWvbiKdj99RVvkFcZE2mUfnS9AwSRpLnwvEXFA",
  "key36": "yoptqoHSwYESt21yhLBwvDb9mCSM21NzGBHzHJvZe3erAdyjXPn7ND82hLrQkKETHt55QFNkoUrbDQYTD4Gc4o8",
  "key37": "49kps4eALos6rcPfGR1QzqYFeospCYEtZkDfzyRexdMZywJoi4m2USn5g7T1q1LpQughmtSZmVJbYAqec4MJg9LV",
  "key38": "51AuTPmA4nPF78xN9bp3oZ7Yi7FVzWo63jJECF4q5xHXUyp1thBUwJvUnsfgtsoSBGj4W8FaUm4Uc1QZHQT31p22",
  "key39": "3s1Wuf6uEsxTXG7tUCgjh4fzBSMASWrzG72C6rQRvwSBoBztDfiJW8sTLJb2rPBuuBimN29zvwsdJnLdrRGGmKSR",
  "key40": "5c5AnEvU36RbzJS3qsu6DGQZYxaVz2bWHTR5x24XQvKGsXfqubiNSBvTD53mhGRyNd4eJYoe7snx8v4r7xNud75c",
  "key41": "aCkqzw8VwZVwonYWJqGzeUCj6JDpqRopeTSWLrQszL8D6BgepNC9t2MPNDAieyd4oE2cTQBZh9CNU6zibv116oh"
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
