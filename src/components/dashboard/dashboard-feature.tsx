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
    "2LDSAyAmciyk5tWFgAtkA1YGiqoHV3L1AhdXeLSVay26QjMRe7GqVPWmmDNd1o6QsXPpouxYYRKnLDttrUXZHeuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQqdJJ1qm2CW46UqMVGxKspeFrv8pwDdrXCRVi9LyuVzUAnTBwk6ZEEiDrfzLYbz3XC8P95VfpNcpGAGZMMsbEP",
  "key1": "eJbEZdTX3naxjLmLney2BCdeXjkjd14cnHMLxbqPWXL4jFahrN6xFdmRHM2N3zwmkf4BgaR9dqLteH5LwcBJS3d",
  "key2": "3g7t1YaP6x7fJw3iy1auVJKDBoTr4uo66Ex124sd6V7ZPMeiKEnc29AgBxQhQR5guH2mMmvMZyrE117Lyxrxzfvz",
  "key3": "2mpBzrG8ajvfJufEQdmctJEdBa4JYFTdEbgVfHtzXaxK2JNZkNzvydu2sm218w87uL4muWXf1dsdgtQJte6cXBZc",
  "key4": "rPUJk2CiH72R9KJSQSSbfwTTbzWYW58XnwcWZM2LK3xuFotKmNRQzz2STwc2QneSo3gANKkKH5JHsuEAspLujJC",
  "key5": "5zAw6BqZZdQgHEt5kmHZNictvb9RSp3nX7isL5Hse2dFri8Ao1RdmaLfjKtSsVY1MZUkzdwm9r4QQhXLsSCbxZuY",
  "key6": "4eR7EAkpJDw68cBwbrWeYgBMUe8tKgKLaGwZyC2DbRoqgJRk6sqgHWvgYNTHJwHKLsy8Zfk3MBQFDv5MUyciFoRY",
  "key7": "4xJYPsyh5aQxmGbonDBH6LkxnP4597oUVHnS3BqZSj11knKnBRnB2Brw5hgLh71H523pqi1BifbDkDEzQtgviYun",
  "key8": "6AApwReg1hULd8v3pGg4VkKirEXdKXTuRKmHNCC1uS21GVSfU6ciGjmhXpYpj8mRnN7eyrX1iapdSd37C8jXPC5",
  "key9": "5mF5cs8cGB1ugYWf8kmmXBqCZD6eAv6HowjdMWgnhW1sg2Ki5Pz4K8rmwtTAdbeXp5yB5FiPK4DmzXaJR9KcGX7E",
  "key10": "4UNFcAqRpzEhxzmyWaR1t9YL9Jd2s5StAC9WDwYbSQvHB8EaSmRhY5ixoUTNaWEDZEfZ9kEc1dbCsX5XvWoKFdyS",
  "key11": "uuUBkSsTJthESB7CQ1czXFLG3UJZhVRCTywyBhzs6VMH2rmKvidkRt6XoeE5SZTt88xUgNhYvEmeux4v9jCTh2b",
  "key12": "uHcMmCyzF94HBByftC4RGVcKGuvan6AzqFKV3zpNTZEs93xvFxJvJk7TeRXqeHoU1PqKvHy8Nvfc16ZVjuN4Q1Q",
  "key13": "26mFBhcAsmxziPEMAnAu7gHSXzbiNsSqK45qnKafNJdMo6q74uwJGWAYC81SBtEaeumdFQSW3FBBhzZ2eAPeZWVU",
  "key14": "2TFrkeEemBK6A6FphL8LqZTq8MtX6ew6zE3Y3x7YVceg1sGi74Ug5ZPYFEz5fq4asV5Bh5hPbx4wh2L3JcPmZm6Q",
  "key15": "3UzV9euo4hwcE8w3J4GoodD3tvurZvJFqRYdAs1a7K2MP9rMy6UEi2eE7PyXzFbHRVjuxyKX7RAAsrEVPu1zPdJM",
  "key16": "59zfhJAq8kKTopQQz2BkhVnBxYFu7QXmYiNirr8hVoiAVpVnxtWRTcy66S6gvXCi98a7eJjmsqpq9YcqFwjqyLbD",
  "key17": "6HdpTMxDssj7hexo43ni7QSWPhqnCFRqSCfdJxgL5JSf1R2x6U6LuZH4JMQ5mLtXngpgq3fQgxN7Y2Eod4ms6ou",
  "key18": "4Z3k4wbdAfEByByvWuEqMEpNZcXbqQ4XJMoH9LUDMVxusT9NiiqQnWbHKdNeofH9kW8ntViJcvxBXJED1i3T1GzF",
  "key19": "ofbgnsHDMnuXUnaN7vkKUTPyzmevXDi5DgmjWhWsGRbmSWohy26MuV6XvzCbN7EfW2wAwT2mVCxqu8SzCu5izh5",
  "key20": "23ovv32CxGx885pbcYVDqLSmg4j2GARkHtxNSgbBM1YenfUxeMWScZ9FfRHY4zL1xGjnC1nqKGtgragZgfWcccga",
  "key21": "3dz4j7yYpLdLpVLXFcpZhxdaXPcau1zN58nrvCR22igh5QkCHsAcGoQEi6bkuzbpMdnxK9xQgqQkpumGSNhLdATC",
  "key22": "3zggHiychYTWg6GzVtdcBYEd2e3JLaKnnCdBvCqFd7vfpgrSTwLYHNHuPdRqNUUqbpdirfVihndqZq4kzqmn6k3P",
  "key23": "2QEkiFuEHpA5rUaNBJ2jiGKjmhmC9FYz3wwxvzDvwcQT45ts5YweacbMz7biu6fBJ6j1Z598W8MkNWRBjetYTB2g",
  "key24": "5sY4jdtFFHWXNvvNHucB27xEfH1ozxbBjGhhehMBHURk7Fntkg1BMsXNBDUju72RZETC36F3V4jbj3QBGa4W8Gyc",
  "key25": "5bAq8ybSGh4C7g6L5NGy2qDbxoChFodMiJkz1N8vxNZMwSDULzPDXdZRfzy3BLTDwj4KJdd9779azPrY8hN8fysB",
  "key26": "Nfn7fcNcbNnvaynkL7pTNoEBy7cLiSUDj9VLnWkauFhCv6jQNzsHfWCbag97rmH5eSWCyauqiJKasXrDvfqgaRT",
  "key27": "5GGfiuHQ9RVLMqTCQohAmYrFP4vc3bkDkRuFskc2Gi6sb3ns24tonghTrjjzH4EznYztqkSAXJVVmp57xwms2q71",
  "key28": "5a5cPjk1T5DQdfJGWVPwKmPoGpwUqASj5HG8tXhrRFUnscsfZMreUss9zZ7icT58xcpT8X53w8vZvSoDE7YgUqkC",
  "key29": "4vQAg7Htsz3JsF3KLe71kau3wZsRnGc75S9UCwn3hb5kDKcq18uZmA38fb4kaN3soQzet6vWdeUbwbdjTTMPB55t",
  "key30": "3xnqHG1hLRrUhpci5A7zrQuJUZn2jLKeS3i3xyrdJp2RXDGP2Dniji4uoN1ETVWNcJHEPKGu7zJkvskBj7PsMdnh",
  "key31": "2jTArNin9pT9H2MuoWjzP1viGqn3d2ZtsxaPEfRGbNdpp1ahCWSW2DgWiQVZoq5aouzJBJ2PenBVY1VCp6ube9oh",
  "key32": "2a5s8cD1dd3y2PrAYbS2bXBVwhrYLvh6sGsN7f46ZpzrYqkTwVH7gxMtURkWswrFoD1Kr2TtrntXSKpyegrDrg1V",
  "key33": "UdoPwFubSZcq3jFTqvs6AvUtaSK27CjphLq9batsSeYTEhC6BP5kTuEspHe6be8DuJS2KxbN6RdvNbRbMAiComr",
  "key34": "5abJoRCDcM15zFJzRxnExy2wK9c1DoZgw3sRiHUvfK5UdyVHmdjeecMp1hLWp5knrfw4PqqQjx6djJpEhgZZDuap",
  "key35": "613ZtnhwW2jRCH33qf5WxKtmqNLCPjdbVkD6hhSU7GTJkSvpzq9jY8PH3QYYSGHhsjRviHWDzyz8oYWYvCsb7xxa",
  "key36": "NaUG2n8PRzsFBppwXCbgh2N7NV7V5KHXGDECpsEtg9f4FbKy6dWL8hMCrpNypn1r1cFSYhp6y3zDwWYM2MxppF6",
  "key37": "4A6PVt3UBTpJ5omwxWXKEc6brXaDak78J4xDo6WtXQdhULok7n4zkFyhAsaXm6ETmpzXsQuVkAhEgNHQrvEEvT3k",
  "key38": "4VwHSeWW8WcVSgnj2n5Sy4FC8He6BWiVY8LX2SUdfx5kzakP6dbjboY6o9TiynqVffBA5MVbB8d98YAwS85WUYbV",
  "key39": "2fX45Ef3ZXy3AQhvRE5dbGCWYgk56GDe5x6hXLpLyudAFXAahvG3ncp1wMfeyzpSLvA3dHL6XaYRJkvvKY6Bexao",
  "key40": "egtd4WuujVLxD7vjCrZazjyhJVw7yDiTbXLGQwEBXiN5Pqs24WB5SddYB6WQzWQ3SHqNyDrh3hUTtQ2yrYxrDXF",
  "key41": "5dmDiyq1qeyv1esazueCq9d4y2LpxZ43VMqgMfzukURcH7T9RyKJ75GGTAQtQqur7LbBxhwJxCEAHJn9yTty25gQ",
  "key42": "2qFZddVaFUzmAXPgPRSPwGFu9osSWBJxSjRTfEg3Vcx7mtAsi468fx6x8ZtfeckQDn8B9ZRMaLoRNCZXkGh2bsnR",
  "key43": "fcGU9YdKik5Xvvo8hfwAqwjzw8A3zuAAwXKe7s5UkuGTna9hmbmieYwPznvgnqBnMk8WqH99AFB17StduyZALgc",
  "key44": "e18od8p4jJZu5KnN9sREECgTRBK1JM2Wrgd8GBcnrzEksVYbheb8J2z5r2QuruBCH3aF7bpyeaB5f1zUetNKxEC",
  "key45": "2Q8Ym5sEoystNJgnfb9mLo5koDxihcTsr9VPwT8UWaN5cf5oVi8XxiSRe85xy1dS2uX4GQ4MxEz5acXp6zbUEEHR",
  "key46": "2BYouMsQv4mbvBQZ1hRJvNpv7TgCGeByctgjXNGn8XSY5i2fX1NgpoqCynWMbde8vLFpShoTmvxdGTvkqVLWZFXt"
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
