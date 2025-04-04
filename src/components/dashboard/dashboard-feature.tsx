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
    "3dqwZBjDto6dY9koS8PGbCzjaH6iChmSSvagsayhHhscUBih61CaMptfPmU6AehqKQbASZ2cWsJjef5qbxdnp1HD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRt5x91WEYAGwa6X78zCUAg2B5RZ3DVADXGTT2rCANE1fMLjMoJqXu3ZoycExy95qn7q2gKCNtjNZCDenHpSCQi",
  "key1": "3JtHQigr4LDpJYhDQKfKwdDggzG1gSPdxwLQ1rUSsaY6yKhkiUyWNUsznTK4LPC8uHKWBdHbgFveXwiStfgXzL1S",
  "key2": "2ukjTcL9rmVoDa1JEVmY3XGU9i7sCcWWyGfDas3pPGzHAcDP33AcQk2cDjf2Snsasyk9EMThdsW2fbkYJQZv8WDT",
  "key3": "5TKwiAZcA5uX8tRXofGdZd5NBEeeLeyz9TnXkcQpCu2jL81VpaBo9E5cop3o483AP1pScvQ6hCzjqFj9LW1MnvZ7",
  "key4": "5g8zgdaSJQbuGukgs1SkdewngoeYN5CEPwWwwhCfkH7MYVZwf2qwWksiZsxrMpG8JRxkDhmDFa9cGTzC2p6wWxaZ",
  "key5": "4aWDT1ZU2SLmMysQkvj2HJgQaL2XZoBjPR5m58qUrHrsqfPQf7u2bqvmTFuDvGvtjuzJ6MFmcZjTNjMLHFafpRAC",
  "key6": "brgJ5xmsoBtK9E5BNho7KDmP44cBDn2jhmQrdM3cYkKgUGCcTS3R5FrtyH33ADSNUNkXjtNg4pkME53AwJTLGqS",
  "key7": "4pNDDQBy1kmfKi3DBJpgTTFmV9HfrhhMFXuar3cPWYJLEV3D8f1cmubySkiXLMathCppo9HioNTMnizsXLePvW9P",
  "key8": "4aCvdfYfYyKCxciXj2cBV9rHBNPzHk9B1qsoaKyeJgfSMisKExvu9UAvq76Z1amNf5MYCwDf2AbaCJJ9iVT48dqM",
  "key9": "2TL7gGucAJEpWx8tYyspVbmctw6nLtXVVSDWtyuhBFGTMapfgstafvP9VmiHkfndNADV9NpKTW2EPgcRc34f1zNJ",
  "key10": "1GEX7xpM2x2uYbqtwLBWjrF6qcmje2Dv9m9LrkxALLsgqie8BDwNQC5EF8bmU5v2KDfKshfEtHTS6fPb34bb32o",
  "key11": "5pQo1sCV8B7yXMbXga9tcCGJU7q8gu6z9LqD7yDMRWxNaxAsoXLSczHaxt9aE3BSZpDwHVpSJyZd5N8BovBPrqHh",
  "key12": "3vMh5G9HyehiazCDpocMhJE5gBKkCGyUp1v1y3qoKpC8q4xmFAsHRfH799ra5U17TfFLmHizNA9Wb3tNSXSgte9X",
  "key13": "5kfXsDmLE9qfJwLD684mXE4L5CY633GkCVFrjjR1Xwn4bcmbfeFgs7Y7ap98vqToyt6wMYQjFugEowq25uUsWeys",
  "key14": "pb6CH1Z6rsWXRYgsQ3vG2MFpXy6heTKYj9uXrK38jQuyumreUzN8j2frgXKgBKwtXYFuFr7V9zY29HmBkSNdkiG",
  "key15": "Co3J1EM9EZpmuQJz2yStjana2631Cj5WpEhEgwRyWHZjUFVTbyzCLdogcjxgcN3wsn9Ym22NTEnB9VptEJoqbTK",
  "key16": "5N4R1cmtgTRhKg2qMdk7xxXaQCnsMP4kcQ54E7KLQtNFkLBdoddF8NcMNjTNqcZTAkouoEHQKtjCDyqh7ZmUokBR",
  "key17": "3Vs2MSXQi49m6XN92Yu5p4k9HcH9f4Hta4HoMr2tjwFp31cFGFz2S6NWQYihfMts2HezhDcaG5VM9CFJTyDP3Gva",
  "key18": "3D4jkJk35SiJnn9NGx9Pu81666fhi9kyrqztNKBzKc2UpgkswDY39HQmjff54xXjR9MumXbBqSqTuncJvn6dvQv5",
  "key19": "5VLxbMSztrvT9ytLMpiP3neQrtDdsr4CVFEw8oJnJCsosYpsqUDSAje3W1GT2Xa2gGdi2Vh9VXVLJ6vLMnHed947",
  "key20": "3z5Kwmyhze8WJARjtq8QGzXQMukyip2zGArx3E5pLf7BtoEwAABGwNVcMChr7z8UtPWUoqrmwYVyYEbgKjNyKMR8",
  "key21": "P8yBpjZt64iyGkwohQKbS6KkaTT8KtkvNq2BrTJiNCnVia9gesYg6P3Njq2cUwUbt4FnaFixruo7aZXwP67YrdF",
  "key22": "49wTmgPwNViu5aFSJXu6kkVciVrSazvfc9sVmiEEAU9kBtAmrzCTpWgukwj1NGvvgWdnBDoaB8k8882H52kPoxRD",
  "key23": "5sLAjq35y3JzRDeDBNmnAcCDMad1D8JGLZKUSEzCjdStdAWPq6k4sddczKmHDikDqVUkMUxRRPJoAcwJdCGExrnH",
  "key24": "5WcnhW3JDstfaY97hTdQS9VQ3pfZK9qgfG9GoAKxyMmNcBFF3QgWp2xuFzL9k6xGSgQkcuFxcwQ7J1hH3xqviKu2",
  "key25": "2UjN3pkd9u4gPkHHJGtdY2VDCiy84qaYRR3NjFFYDModKvkWnaaYG7CN81GfvzjAk86KCsFNLwH4EV6UJgAGss5j",
  "key26": "41fWoFV996i6HppZyPqupStGXa4Yfo91dknrkRcPoZiLVT8zqRUkDCZGFKot3myGR3Rjqt7cXmNHzfZtKTeu5MCm",
  "key27": "3gWfYeTi3LRifcVHhz1cjhMGsRXEx83AyCEJt11TSgmtXYwEB4Rt6FPkKM6jYokKrRXXtPywC8Td7JjosbGmfFaL",
  "key28": "4vTr5LKt5b88eXmTVwKYGPcSSyfyxvd5zmFKrYJAT8wJyu9FYehihP4yjbYAaiCWSf5tmVuTBXDLPkeDPPwGyTUc",
  "key29": "5r1BzjciXoNX5FSWXQcmdEbCLvdakvdy1XA3XpNW1fU3LmEKC6eAHCETVnbfpnFHAt88NExMcVrUyfVXg6QWEhsY",
  "key30": "4GuoWPrekS2sVcb1prbEpKN9jvvG4ujxMCe41B3NEq1LD5dm8FZKx72KBHJAz3kiRaZGkqUnUFMFs9jGm8oqfVbF",
  "key31": "E82x8W52vPTz3YM9mSiwrVbgdV9iAncZcATBLVBUYfvt536hxGYMdbz43CTDmzi974HBeBMFkRZLsdFm1ug2Xsk",
  "key32": "4ZVjjGBGsvgYaBFko5R9ysLN1DnRuAhe8CtBohApQh6ay3k5ju9tTgrXT9tuWru8y1pomoQUquAgBip3JritHA6E",
  "key33": "3wrAxGWem4UWt9N3z5NeoukB6jwPdieiUPSU4cbD7QMf2A8mLMzsunFbn5e5TFBix4oPWcFS9mDN7HCC3X5n4HFW",
  "key34": "4mNyx6U5kDvjmzKDcjXFvdAfdi7uUCFMjWnNx8YSK3j5bQKHfwC2KTDmg3gAp9cdpYEXr8tQ2DtC75TKNs2WYY74",
  "key35": "2goWkfYMrGiBPo3iMQQAnnZV3VR5GLfXKdghSm972nHSLwqWvA2E6RmpJBCjd96z1QMveuwciQZqN8JSRuU2qMFu",
  "key36": "37xForGwTK7m6PL3RdWdHwe5B33WcQCik2jLQk9naJX6TW3gPbQ2r6uKMHDcBsLdcfKZdZSAoGRgMGSpTPoMGJNe",
  "key37": "4DuW1GcmhqhNGPNfM3orJ9qva6aTmKB2Q3Ve5rkSfLacKZvYUX5cq9PHvjvrFk3y6Vw6kMDoeYiBQDAKoddSXQay",
  "key38": "4yYiKMKvczJSEC9jfBrzPK4tvGdj5UdgEXMd1Z2VVtmKZamUMy5S7fUrKJnNrscjs1mTh7v2JXMrFmHv8h8Ztzoe",
  "key39": "45cSmjcvzU2ZYauL2khA8tjr5vd3m9xqrmLyEQrofwiKfP4T1Wb3JxhzVKxv8TJqpJgy3ATeT5z3GMiy4dTRgWsq",
  "key40": "3hC34ekeBDopFKoLz6FQkB8o5oy3RZ5dG4jke2dE2JCayZoCid3nXQfe18LiZXiFvtbmULxTSnFjUduGSWBbpZhH",
  "key41": "WTGwrGTStz5ataCUJSK7fSXtfAMGvWinoYPLuB1XbcxTmSLcENKeAjBMuZ8ALrVDnLt3UKLoka3jSw7HGWCMrCn",
  "key42": "5cWxEHbh3VvCXL1YVXwStM4TeBLdasUMg5keSkrHZXye6ALsQHoT3zEWzeDV3xCApvnbCBn2vQRZvxQ6h2gsfALc",
  "key43": "2ZHt5tYiaiwzHhnBn3GJg8FafU3N5aoAKhrpULTPYS3VNxQ1Skd4g7MGQt1BvnTwaFB9N57mTU5oP2oh9peEKze6",
  "key44": "4GHt1eYZMBxtN8yNxMYbFtvU3Fo3tR4wj7Snr8JKqsGHhmkj5vhL2ViVEwGAjCfqAX9ALF4WUQP6RPcshwh32bjH",
  "key45": "382Mth5uyyVGBCjGXQfGL8NwoG9WpV1jm6EUu4co3iWTo1YE86v3F8JfxmqEwGD2sBPT5VTs2wf87ty5wL83SLy5",
  "key46": "3mGvd4xcCxBQwcAjZNwHPhso69KTwPGxFPbQujbE7gszDNevpq4YxR1X7thypYctwxD6Zh1j4q6nrC8mYFcYwEQB",
  "key47": "5yoMXiYPVE5isF8A2XQRhaXfqUokE8dTcMY6YYWzaNcsCaHz96ZMhncDgRdmUxWzCDb89wjSj6hx2X9p3fPHkBXE",
  "key48": "3Ly2MZWNzumy8U2mnbAYiRsuz146QQm3DScF2Kx4jzr4HeAcKEvHNXCzTdazgZq35LzhxtQAfQSwHesCsyt98AEa"
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
