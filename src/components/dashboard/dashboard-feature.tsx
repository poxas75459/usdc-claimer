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
    "zkiewz72mkYK4cwCXKFVhqhPprRLhmJAz8SCR4s5TTEWT6SxSTS2onj2GNph87jHFTagsDhzX5A6yGyjTp529sP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "392CriNan9qS7XRLgnJnrnQ6TtfKTU2hY1J42rQgqBaAje2nWff8gzbg7SDchXRNhc8Wz8VxEtwbJhYu1srwRQyt",
  "key1": "2aivn1mgpbcBvd8WL7NpbdLuspZwijspoVqtZmyLcq1Nmx1veLPNZGA74MSog6AQfXCJ9MzihKbFoyC8TNJAJUvt",
  "key2": "5LydpY9C8VFrK8U4whdy8sa9XawML48ht2pTzvDTHHR7rnZr5HKgt6bAtN8Ruzndxoo3LR5QyMLnPt1M9cwqnf4o",
  "key3": "6ttdWCeebNmGDv3vHQKPqKCG4jNWAUKhEYzFE5ofVuAZgfnjNQYm5Bcftwgok1cYB3KL2fLBx94XGR3NuDn7ry6",
  "key4": "2gtjKmrWBn7Xg9dGUHgGY9xLz27b4KTpkv3puRmyBpKtWAd9pErM4ifdsxBEP78nTieqMk4pmMfVg9NeT7R57R89",
  "key5": "msno8HgfHtz8986JoCJNaUx9WJopp5Bav4Yw8i5pQTR4CZLqdL5GqtrLifdFb6SdG41NsaiACU8uukWeksj62j6",
  "key6": "YHc6zbsGjSatFw56hQXJWG2tZv2XA2wkfCQ1gsAdCqhq6TGBcKNMK9Jd5sY7xd71ob3jfUjjv9NDGCCoae97GXg",
  "key7": "65iHXVwhGGzsDTrpfwqqBk8XgjL85Xm8y4W1XJ3L7hwBE4KnCxgWyXwQSfFqforQVWuWhAWiBMVueRm5Qy2dQr6B",
  "key8": "2yNjVgfcx3CwcJYGPHbWfpfu61EtUs4oLqRPudE17oYPfHZZRfe8LAoKEAsnYnNd7WmQnd4qBhPu4HAXSFSAinab",
  "key9": "2bTKZ7u4fnDdXuzzMVv5m8oJW2xYM1z1WshoUmAXgemkzqojcP2entSfoJTE9ZMrxRGpvct8N6oBzH3hKN7x1CN3",
  "key10": "5kFZu8NYE6Jb1TsUBzvYCNzzjXNAZrAAbaunWURW8jGKKy6B6sa9Gn6UcfXFoHuN5Phbi2jukyFJwvyP9iS1vJwL",
  "key11": "4mmTHFcnoq8ScVnqKnPPQk24gRvfmqc3dMoBL5UTjcJf71QyqRyjkYNECWhoA3Vtxims235AX5ht9ozeWTDP2vj6",
  "key12": "3XVZeY3A9pp6zoYeT6brXyLG76otBVT15ZbSLdsV7Sgp92xyZV2ZXtvgidKAyMPvFSCh4Z3raLSj1yv98oLcMKLL",
  "key13": "3QLxhh8TRH2XKSco4uj8aGuPSomTcNFqDEratQSzWWeAUDzmLN2rJhf2LziYQZyksR5oLfAkm3GnFdZFS9xBjgh7",
  "key14": "55sxvrz3uqKUj7nnm4UpenQpQT35p8zA7qHY3JzJjkGnAe2adqBmW1C2eE3VgZ3WcXJmu555ajHAQGQNZ6Vc1zjP",
  "key15": "3trBwYr63FRNJCffCPxj2uV3HtRMbUzZEHncvgrh8ic9xXsMgHfhEqbqHKp9L97NLn3GRTCiGALQpNZsXnkBUFgo",
  "key16": "4AN7mqZEqQ7PvbNvRUTuGxMuLciwAURp9maS8Y3CZKuzMyb3RfvaWdGFQEoHcJP6g7zAcJfVVhyUssfGUQRvs9j9",
  "key17": "67iW8797FEXGEr43bvViGrVRBbLNVTDa1CtTPGgoP1MjiXnkEd9zBNsBgTcvcMdJhxf2VGtTsdpfgHt5c8Wo3KxG",
  "key18": "1sxrWiRF2gobWJeV6D9YS1edyzpofHw5uvWmtWL2MvHJZPj3raaCmvzTwHdVBhzvHsDyGrZ2fxe2VBV37Yc9ekJ",
  "key19": "3rG5tD5wgGzAQQWd57AbTyPdmD4v16UZBGnCdBHb3yiXkqRpBACXWhztrZVA6SrrTUQc2mLk3hCUfA5SFjnquN3j",
  "key20": "2dk6kkEtMum3XguCn61rAgRtVdKAGDTZCACqJgxerrosiad2GpQR563NtznWL7mpmisfw35ah5ZU2H5woapm9q38",
  "key21": "597dS7Pnak5Cxxqv9xDaPf4y8s4c9hqNVDgsJ6Pw7rX6aRa9igYdMpgXTDziiL4kZxPhKxQh4qpPnahnB7V3JCDj",
  "key22": "4PXk9Gu4NhB7494vpU3drAxc9C2C9s4vHSLtU5wXjcYjgBfLCMkFdwEmc74SqJt4pSr4m7Nj7MZyT9G19iAWwPMh",
  "key23": "3RBSiNCeiNN647kNRvJan8ZASnRSqjxJNmM92B7i5TwTLDJDPMbSC5zNcCgQqAZ3H86Pyj2GY6H27GDDbYDH8d27",
  "key24": "3ZTgXecn5LbM2Y7RAv1JdSHCxa7LffWoYvrvi2LRWKFQa7kAt6w4aHHPi65Yi3Bki84NU7DbZnGcN3dYY3iBgGJy",
  "key25": "3zewbBYoi7RWNshWFC4atvsZQZo2z6whswbLQGx6saCSq6uUynEQsHkGVDzKz5MDUJnXU5GUXV6VdRru17XgfKAo",
  "key26": "3fXmkthGJbn4bKcuNxrrRV6qN7PNprW2US6jJ9gC74J1ChvARvwXMUAqjXovpSfLzyAg4vkWt4k4CmzXsSghSxsv",
  "key27": "2J4uq6vzz68VMUC8eHvGV98FLbqSB6qYoKHh1GcaKCg6WbbCBfUxevBZnAnCLFtx8DYd9eFB33WKjQN7vdNwRCfq",
  "key28": "2hHvU3hxu2Hmf38yCoCREETfpoR6NEYi6DyyBmJhJ9ycmZhcxMQvEAKdABV8PBAyZRfEbr9eq3men26FAagaPPzr",
  "key29": "4A9Hj7ppjAuJcFQVq594MUrbwZoYJatUzsQdxT5LPi56LQHAKeXJw1xXrLTecnqnMqciSn5YBhLeLbT3cdtsZJBo",
  "key30": "5BaQVQ4mUFHqqNzZeiTpfeds2HAbkkLo2MrgoKZrZRCt7PWbUazkC5XCFNdjs4MEkPNHpNdJXzLh1fLq9qLWG3La",
  "key31": "2qpNKPPUauDKUv17pgJp5SLccC9xXRa9KHXzpai1TT7zij3eZ4qN6GpyKTtgH9rnkDBNYQN6ucds4Vyz16MJuojV",
  "key32": "5wbVrHUpBP3pZNhcRTR7t4jH4UUGWD6JroQ4vYLutTKMtM9eHtiPtTEo1bySSDCuGwLvuSBXehmqEVaZ3G63WqB4",
  "key33": "4inEaf9vb5J6FxbC2Koho7J2yneCXRdAHajbAcMPKvW9vaKnom9yk9Ep8nSPYu9QHiYCFgARHBPjDQhnHtG3SdG2",
  "key34": "mbhxTTjeKKLm8jmYpUiXfsqZxkRfHD8mGhjXqWVjWdGbtfh2t9rFtuhFbCfT9bQP3RNH3Biizung2Bzs5PrVRDS",
  "key35": "5NL6bxqkap7w4XD9DJ61hhsZJYY5Y9B85mBmi7av7xHCZKkveDwFadi3WeuU71FVnBq1Ke9eBNEPUwJSYvvzfLbP",
  "key36": "2sRHxDx6EqPoQXp5yCBHpD3944wUfu7cRMEePRYJwWqBCPvJTUVa5cVXvTh9QQzoBw1CBmbYon7QUfpFafdvmp3h",
  "key37": "9a1P9xBf5DJawXDwbySKfprkTUWsqc2KZdPF35KpAgk47xXLSqHDM7jZxYat5YXc9BaiaNvYawhfP7dJV1bXF2k",
  "key38": "EsXrM41W2jkZG23SVTn6eiNi92xqkNohvRXb9YmZyCFn2ZvYrsMWWacfGUZ84AJszSFBHj15omnjtc3giniHUET",
  "key39": "4UowhBbkgfKsgQja1bhsCKcBCoRqzSsj2FZS1s6Vh8G8A69hrec9Gyhqj43eqA86XGU3M8gBC8G9FPQZ3LymnUH7",
  "key40": "4Mpsgus4N9ATu2VzwkUScC3QXpCtTHsK69rHQRuw6eXGqVRSnryD4hcV6Wk9UUifA4quzBSA3eNJfAVfDfYa4eTz",
  "key41": "5eWj19h1ZLJ8gR6ZLDzzFLidodLsR5qyJu8GFNkvv5eb3KLrXUPj1fae1SRWhTCJjtgN2bWh3nbNwpqnkh3RnkK",
  "key42": "SHtt81qm6XaRQvVVeTSDBbnrbixTbXYvTfw7M4y4mJaanHabjSZJz2PWD21WEyg4gbCfFSBQCmgUJBQRPqQQYV6",
  "key43": "4RmaNyBCUK1U8Vrto4wDmmyg9jXFxVDtW7sbPeRuEbSJenhk9XPZ63AHsMZzkj5b9FHx1MM8UHxAwBrKGasqkzzs",
  "key44": "2aTjCfTN1ukBEMYfJHFUoVHCjcxf2a1TZV9djzQ8DSHd3WbhXKaBxxoanghotGsKmGQVW4HEVfZwqQnuKeDuaf4R",
  "key45": "4iiBmVmbpYbqauEpaP59HJWydd2fSwJ85vqCE2gECNpAj4J5mgcbS3LQYDQJtXsVHZiwPRg4mnFzXTW1DLUXvwhy",
  "key46": "41F2phCtjY172LER6jSa6MLHXTUqjkVgM2D59kV8EGgD4WrNsm9rPuRbW4y85ZW2ayXUfRnP5bMfouwu2GaLVchp",
  "key47": "3uPCaVKASCUZLNik7SEzd1vnyqQmrUSvAbqsSfUZUDN4r3TmS42tQf3yVErJ1UecbWTitjTfGFCrHbjJMVd1XjFL"
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
