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
    "4xH3258qXxcQM3tv77JThS4N6R1FXyUzyTEaW7zE9dSzMdGzKD8BsXu411sx1Y7BrSU2rTqropNBYbi818ZeWqRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CjRmvwxM8m6126VKBodVuVjHFbmMS3Q48dVTg53WjXpkGYRiNtxwm8kCEVbDNvFEuZhcvF8tfJGHZ3Xq1ryeat",
  "key1": "29E4XtCkKhWbRzaGxvpLuYd8Rn4PyR2oG3op9k6xmqf67U4BLDvGu6KnEhFPmEaLcVK4KdpV7miDVcteV7BQGxCC",
  "key2": "2wQRJzbYWvyM4Mqy4qs2Sdq7bLaMyFiua9D9Jbq93kAYCxPzdRa5UT643Kwi8nHXVtL354FQiWNWTqG4yKqbsEHX",
  "key3": "zEA5a72FBrEEuPcoC3PTi8aqbNerAmCYMGVpE2WqSv2KFVsYPgJmeQsDBaBMq6CviaBx9ShWnVaLoqzZmrQCX8f",
  "key4": "5yvwgk5L9S6AsatQXgiMtwJ2epvU6FaQU4tECbxYTUzPZRJFQaLQs5rN5FJmJiSGFCAWcgEhsKk2MQjGDmJi4oit",
  "key5": "42yJ5P6pimmTnwMoXbp27CfW55LQ1LqvqJtB1XMaYvCewyPWkzdzazCg5fxe1j5tERY484FRCjxmEKaEjjq8yWne",
  "key6": "3pK6YGLvmHWunVYVpWsaKnFms3xVhphnfqkYk3RsT2Ayf6KBdu9KMMwg1c5afqQW5wM7evjk38NidoN11jgvVFTD",
  "key7": "VrKFbGBbHc1UhUY3BX3DFc4orGL8mHKZbiXPbRWz9vb7dsCeCaaPoJQ749trjX2U1F2Z9aKUYkP2ixto9c7fyba",
  "key8": "MAtGhmj4SY5ssJMujC8aXtS2ssLAmNiSzWPFik3sesWfaaPTKRKPE3gpZN6ACjS9wAhubuqmWvLxaNrLoQcLMFu",
  "key9": "iPhpXUEjeFY4kDELhDxBcf8oceVHWMEsqQCdgxSykooU5tT75ovynYqc4DLvMroL89RrSjnQWF9iXmXV98KnUkW",
  "key10": "245o3chAqrgg1jmY2F6ALHqpeev54GGVE1Wgq1SYjZc5b7o8T7Gey5nNWTLDA6mgRhWBCFWpsDyMrygXTZ9zv4d1",
  "key11": "4nxY13VLfVnhrWfXpDCpVXToRi2AtTBaw3Bda7mR9SuEQrDaa8fFYXYeRRzSyjqx9UsNLXTDKfUmKCyuv4ba5f2R",
  "key12": "fHtwsCGitbzb2Lmx2uBnH3z75gS7gU1yyFaafdsPAAsEzt4GonB2wgvWdE5rPDBsx772qzyduQ3JqYxEMeZ4rwd",
  "key13": "4DJJYvKjabrdvR12g32fmtg2aas6sDERx5DdG1Msv5CBfJPbXcHKjc1B3FGWQugFsoZfg2KuS4t7T94vtY6qt1Yx",
  "key14": "63PU7awvN8TL1gcejDsJFo4dobb6kSjvQxoSiGiPpFpSj2DxR3ivjsWMJZGn233U6rX9irnAQ7SzUyZ52vhXStYN",
  "key15": "3zRnfAUTPRqtA1BKpN47UksYHW9XyW2LuHYDENSmF4rhkcDqThFvce8qXSEWReJH4cAfJGFWyLhpHw9EgmZ49vDM",
  "key16": "3oV4Ry11VfN7upy69QEaEPi3WjwU98nKGaW7a5i7ydyRGVkiGyihUhHaqSngnsrFu51QkJrTMy1YxGdcYjHaHABe",
  "key17": "Wvq7STPVS1eeqmTckk7DuHmfrQp2mEv9Gboud6ryBUQ5uepu57LQRAF2L9FSh3sgHShWAHSuFi5U3bsa7wtpR4S",
  "key18": "3bSjwrXozyhacr39i6co1XqtQ3UKGknT4WbPuEEJXfuiJiQRBS5V7A26qvyQ4R1XmBAtkNZywQvfwEtzKohkUwGC",
  "key19": "MZboyen2qfFBLLNJe7LkpuNAaNRtzDQPnFjnSn4v3EUJTEpgTe9vrsyd7LxUGbvbx4tpNYJvGjCqxXBfTmCvtdh",
  "key20": "2v81kGCWBjejDzf7aoRDUC73mrQPLKwoERN1d7j2xk4bErwra1k6TLKinCLqAEUE36beBt2KqjjD2vTPoo8hX8NC",
  "key21": "5smqcAuV5BmZEWzqRTjUz7vraJKLwbmWBdgBF4KQhpaxSbJtLnYpcA7dpBX4urA3GjmRG6QAArKYPvxgJRMvxQsK",
  "key22": "3op35VwRWLL3qSYP8HmPmvCi1YspFY3LQaswzUnWyTosaqpiB9e2yJvu4QpaWxrxLUVUR9gZcy4ou7KHo6BtJGRF",
  "key23": "5c9tDmZbPVvwq9WhQCpyTEoxp9LoWShBRwAkKZTFmzbsZHGR7wqwFFyVda4TsMEM46mn8JfSzAa35LnBBDKgknry",
  "key24": "5dtgGLYNYxhLZnzwdJhJJdcT21dYWK18yKC8CQxS4M2LWVNxf99kX5LRkTEWY9KFkSzeFL85xi7KhXoJ6cVWtZBe",
  "key25": "3SQ9jQgUsGTSJN4xNZjL4BoeNw6YCscFpY3waNE5c3wLeErEvaNQpsgymk1RGZyKZWe5hVM8szjXegYUbHLYtWwt",
  "key26": "iGmEjqNSp8jSmcvvJ5fnY2juqxM2gxk6fU2zvSkkVpiAirxK2Vz3vsdkHUi2csbh1BMpo2EbLijX4khLxPMJARi",
  "key27": "5gsod4HfQcw8eDVpaKYV8cbHaEAL7WXwmGe3WPqFZDRBrjmp3LiiiyPTrXXX9Tcbp4ywNEMg4hdsvbGS68CJeR2K",
  "key28": "2zADUJVSqxpB3Y7QPtkCpNXkgJwMesqBNqSk7AFFqMejgrShD3uGfFjWbNuaP3Fa9BX4ZUax7iXHRhQHkhRqKRDk",
  "key29": "3EumoFajqVs8AfFXBhmTAqL45bqoJKMvCrt3WZAZe21FRoiEsFtws9XYSxo4B65jzdkGqyxKvJsjSX56Th9iNsi1",
  "key30": "4hSMXDsrv6tTu6w1jyU9sdo9VkgZcpKkcLWNb7pgH8DhpWwpA8jqife7RWi9f2casGHi5rB59cHesTL1Q3G85Cbc",
  "key31": "4XcPFhu4z5LZj56QjpnkSSYjsc2xMWdJuVYq4wVEjuULLB7peED2iK9TfESYfHZaSrJXZ9z5JwSTN1bGd2dxLRh5",
  "key32": "2sLDUrwGpixwGNf8SnnPN3XoC4ZxGv7Q9w2eKX3kD9EP5HNP2AYr8CjgbtvdYjCa8qHmopQF2919V1Hbet8XZDzu",
  "key33": "67QGtQfDiYoqoJvvhFx33PqNSjVbyTMcnkwAwr4QpXwYBmXsNMAhpGGEAJAje2Ue5dJJ17nkXzqBJ4i6H6JDacAJ",
  "key34": "2SoCcnHKbUwMZV35TBtaxdRv7Lihi2hdnFuibFVxD1iXQT8GR3j6sUqu1MCmyp8f76xTm5KXLAQoDR1soh4jB4ti",
  "key35": "5C6Rvpxc1hWKjRrTseep9vy8QjPKfKm9YnH8oremjebgE2dN2u8WxfPi9x651swyQn82hd3MSu8x9xKzem3KzWFg",
  "key36": "4HHAPMgjL215HxxiNzFyYxoAULJZTEptZuB1DbV6ybtwvVbSeQ3GNYSv8oCzEKCa5Ci33vusmEKmcETG2t3PdXvY",
  "key37": "5PTqXujwp4NEdrrH8c6sfGkteuEvm2yX5JMmW1Sav2xF5UUi2HdCrMq95EL6aRhZCTcJUT53NKKp9D6xLt48bX83",
  "key38": "3nrwnJXmczA9icbDutGhUpLoj2ikkCoCNeRQGbUupK1eitMP8V47ggAbnj6gyvzACtv2RKAknoax7acFUDJZ3P8",
  "key39": "3evurATkkq6MuhfapM3BtPqQW2iYU76V7eb7Y7csDX5SvSsnpEcApjY4WohwM9ttpQ1ShoBobRCFYeyGtaJ45Prx",
  "key40": "vifJV9rkuhPm9Zf7p7hWxcUSYTB3ECzWRPqKmiwTjXyEGuq2uYJftC79QtHqVZGY64Shrh5733KPdMXxfHDpZ58",
  "key41": "USGWNPp6aWU6SwayK6BjxC5htsPMGMXZjWo3EsS4Fec4VXTisQZgjKhFm1jq4e4k4N6isWJgrQrcnXp3YYHz9u7",
  "key42": "51FFZXunE69ugJgd5bCW2XPGQLxN2S6eHgowsMkA6uG1Cj9SBYjVYm1RVQBuE48kyHkfdsTfMxfbq2PwQZsRXvzV"
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
