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
    "252bWr8oLbBPSYUoipWmhowFevFNa3MJ5NdKiKUFhbCEV5VZYbogupjkNChxnCtAtHuBhr9Az9P28jdGgKekiwRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mV7F7FL348vGEjjMWKUaMNJTzNbGSBwEm5NPoy2fmSQ8RuoiujTb7ExC7uH8rQwGNds3PviLB3fH7oBp2q6Pwk4",
  "key1": "5Y6cMRpZ3siJDVoJ21td9N1UePbJEtWEsqeLsJtoVwDY49VPAsuks3ayrVuZ17Qor1r1HnSqJ6tgRYuKZksW3aTz",
  "key2": "3dnhZ7etvJPVPfr1FUWDnyfsrtB3pzxPPPMyuP87yh7CWr2FgP1r97UTgqns2Mjpbj2Ad6yXu2MxB6yJv6y9tnY2",
  "key3": "2CoE2FGq2yQR2BQKVSQ3xsCduoSicgwBWuSTGm7LBr1nZYmDe1pjvDPt88ggp87se3P9q6NTpPDEBr2wNKVK4GA7",
  "key4": "4SHxmyqKx7SKo3pj4AEvbCtPXcPCs2QYczKLDEwdDuKraaHtjiMFJmGa1FAXQ366Ct4wKBE8PpkbDdKGUq9QQCdb",
  "key5": "3oLA8ntohYAyGm9pLSrgPoJR4jPx2peC539PtUGrBwwfHbfLN7bwKzZ1AAE3djb6icNuLi5azn4jAYHYBG5oqUEK",
  "key6": "5SpnaRhkCWa1pPdWwG7uKgNEDy6nfCEEM4xp4BaNmo9GtsA41epRg1YJPPNjbkQ9gagzGn1ukJYdNzqePvY9ZKkk",
  "key7": "2541aHjXFwTTLLCpMNNrRM5eRrFhMrM3euSJD8ZWojzvJeE6zYMHrvQWdC7CRCmDaQLcTgAkC8NN5UyPRCJBFgTg",
  "key8": "WbvJvqjSiPBoiegkAFrWie43bYRUsMCbQYu6u6FePvayBb6AGjKAVK8DUYNFiFbWAZX8srLu8Ziyedm4Lj3TFJn",
  "key9": "9YmSex7tQ6Rf4uAMav4EYEF5CHFUwAZpix6ARZSpFqc16gtvEKTsJRQtJkq3WqazP4f5tEsdQzuBtxLZGh6fZrz",
  "key10": "4reCzURU1LxNQBZaPjnfgEb2PddXRWHNvwtcknNUgdQPXC62hxKcFho1TSGd3domuFpTMm1u8WT5fB15Sw7k32hv",
  "key11": "2QowfNfVB3VAvSvu26ESGqiSFLrMnut2fn52aPgYrAqYJMy2amZD4LBGaPLGtxvKA1PVpxwC2CyU6EDqbMXf9uj9",
  "key12": "4zbavgg7AA8DThRk83dxc1DPvVyDwbc8oa3BAkkwFDKJuz2mBKpXartE1icAJ2X4iApq3Bf43S6YZyTVeupDMjyb",
  "key13": "5artWgNVfeHnVMW7r97SHt6u4Z2hHjiunu2AAcALr1yjTWzFJRrwhchvDPC1s3Ywgz9rVqFx1Eik2zjeU97drEMt",
  "key14": "29VTE5mJZenSg7554AevP3ybVXSkAwxiKpH45Uk4xwQFdFeLmtWgihdnM6PWsbmVn2y2H26tLiM6LYxKnBApjBMa",
  "key15": "pvn2rGh3V3n4biockJMU5UddaT3rzueanhRzDsgzg1sDcZNEHKe6vgLwWNheF9FrgidhzTtP7bfaSaQBsFixVop",
  "key16": "4YVmsmS7dJA6SkthGLzCHaU1z37KtaXvVr5c36oGfrMVW28t1PNcN7eQzB38NoWqZcNomd5R2XXp6BhjpCyQaRoV",
  "key17": "3UEhZgHmACjBk8WMdw9S5epZLqKeqaVXHtrfEXTSUpkKu4gomgHKgFWjdiv5kRqE6MMc2zuooTKHAgyHWUJVrZsT",
  "key18": "4aNaguZQJKZmQeRRLyxvkkkXG2MDGPSuuK9HpedeMtJ9RN1WdqcpG1YS422iskSuErVRuesvbtAcPBYwDSjWcoTJ",
  "key19": "AzBjrBUkUwy1zrzvHMBS7mGgWbKNnZZKv54zJzwCLo5em6gUjFSC5rD6yV4WhDoa5VN8WV4dKngJbk7JPYusBYf",
  "key20": "27u2Mu1YWEVN3WU5miRKpVAt3K3i5RxfM3KLaNtwqeJVLEA1p5YxRsq2f37xoL3AvFkXcE17UQjqPjUdgRmQM4S4",
  "key21": "65ZoNbw3U1nBWG445NEZU1aps4e8qVvft58iZnGLuSXqSB5QXAAQRfvdt2JR2UGKw8cCuqcW2npkHEoUFWwxTW4M",
  "key22": "44LvGZ3dS4die5CZaZSnCko2Yvv3vGeXVhDDvefie2FnL3147taaVeFUkSuZfNJ2itou9VqC6DnYmrxhJ5HK1hnB",
  "key23": "2niHvYbSv64GrSJNhN88HmJd4VzNDsENhfuiziKZSH5fHn3cxwxHKNWwSrJhkJxpxhCR9jUMHysu6KgbwEMXmXd2",
  "key24": "4Q7r1Dpo3GnbZw5bapGU8zM5PypdZcDSjbckWmk5cGHia3BtpMetcyoSW6NKeP6XxLnTwvqmSusguty6KewEsUb3",
  "key25": "SYBhHbGFXVxm21rLKzneoWXmgzpYEh7XiPXCdyQMxcFz4ex5MZmaCHqQWGjDBPLQwq6YPhsechFKB9gESc5AXCd",
  "key26": "25H1K4nwZCDGNormRMZoDLDiyZR57knhCUrSjPrdUg8NEUex3XGb5q8PWA51Q67uvF2eBvHbqv3gUae9cv2uB9sd",
  "key27": "2xVy7prFvtZ5tV2BHBqmGXwuk24c3X9eKhpJChnCiu7tgYSURQMgg7egUUuPDBcZMenPE3WudyqYC6fJYgn95Xy9",
  "key28": "3uBpXU1DDLrpGVEmG2cJpdk61vZfemqTZyWn7mutPCZt7TNvybwXggFrVcrhjHacpVD8bNQ8EH4RBvoTXYzT2DDE",
  "key29": "5JWHJ1WsHcebnzWxZgS6ep3A5AnJowWJhJyoqNeabSNaLSfpSEfc6cV3zh6cE6AHrogrv1DWtsR9yoMdwKJpaSgA",
  "key30": "4jvUKuEv4JMS3Q8UZUnFBoHpdKKRGcnLmNMXbKp45VHjQLrTdqbwmFneEAJggH5yRpNiGL1AHzzAFti8ZDnS1Jh7",
  "key31": "3Xu4BUYt1uKqbz3Mt84AhbY3Q5kCQSUtri8mBTdSyezfGBneXwLqwxgH9QBR5v1W7grN8tAHZgxPwaBKshNnUAaM",
  "key32": "41S1UXpyQJp6jytqsmQrUV2jWwPR6BMSrR9rCQxoLVVvC3n4eHtLQnQQhwRQsWQdXYg97fdEC8bARzanJBntErXj",
  "key33": "3pAREcMWkkw2HHmFoyjS8a9i2YEPJpSaQvJJdsTtg6GqzajStqe6y3sjFyvtcN5AT4jo68yzWUifFpnkEztgGGMU",
  "key34": "uXvktp7JTqXeCpEtmZUh55Dpc5U9YA8CRNvELkwoouM1UYLWN9MgJV6AmpvpFx5vbbe459zUHeH6sTChyr5bcXU",
  "key35": "41ttB4mFFDpuuQfunEKP9BeMeAzNg7Bvjo4czJ9bi6cm7z8F7P8MMwoGjMCkA24ZQmAkHdmZBHKTsx3d3QpwZTKQ",
  "key36": "2D3vB8EFy2oydSv87mxwPa9PBZNNQ4rYpXEsEkXsUrgUNEE7k7VwV5W6xnDpKePyvDCG8mDqpWtGVbLqFAJ2mg1M",
  "key37": "5i4YiTum5oMQpsTgJ9octm5npuFzA9QVyQWkLn2vwdmLTmqJ8rLjAVHbz8gCR3wkpJBjuwzRagx1rn2w2SNzFUtL",
  "key38": "28Wan5wPQtW4S49YhZ1c5mz1R81rn17d1FX7cMgf6iyiRpo5FX1N4XmvJ2qEHPjExrfxuq39SCbLYDc7dqU7QSoT",
  "key39": "5p5yGAYh75aCxZB3iuACh5rV5P1pjZnGZxDZy4bHRzKHAWdJFACVWc5RQgvnzVsRc9BaTjfz7D14RpkCaHEgrdKR",
  "key40": "BWaEHGwAiiE5XdwFysFMfQWQZjJNxunDD6mbUUSDHCmxxnN7oUFK4H3AREaaR7gk32B7p2RN7eJvxzk4TTn1Y6e",
  "key41": "3bFv4Fbgzh5yRF2J5rfBdWg8LVbxBhXyzCnxVHjct8tsHfSv3EfZCFNzSAtnNNY7NHWQ9o2j5ZRAoFktdCiLSyWB",
  "key42": "rT3BK9xg99Yo6fjbc2ZpBEQdPbMQWEzbdL4yrcWwnhftqZVfdg9mLjAnLcvLgd7HWMQyjiAN3qk15RJxZCDV92Z",
  "key43": "4Jx3vby9GF5aRhnC5jrfmUFhTvfU5GNwRZYpsYASWZiHr5dB7oz1VEYf1Nrvz94PZKBiPBqEekJeXpWhweqRZfYt",
  "key44": "22gJQxKsQHZPAdorqSG34MtmZEfWEVmGpipdPDgN8zjuh6cCmMhuh4sgQQZx9ogpyPoUFSaX41yvcN9jgn88XzHA",
  "key45": "KjFMze23Z4RHAVn7i4nYFvegnK2rgqJeA9BSoTbB8pRKsTeqvodvPoPwXreRvfvfQi8dTuX2QrtqpuHEKjEJbhK",
  "key46": "57cdwyyoPh3yGjrguavuGhZNWvcW8haF4FFWJ4GA2n4FBVD1woq1iHKDfDV7zUHi7AkpjVYnjsGHKFnpwDRRGY4y",
  "key47": "3AG5T6KPCPkGS8WwwsBoMYQtZTx6iLuaGwFfNiUgpHSBGX7JWzjTpi7FvMV3YvPhR46H5hLUCau4V1XR46kYiKTL",
  "key48": "o57vscFbfYtzojsmytcHnf76Ar9XEJn6tkVkutCHaPJ6i5npwJpLh7oFPndMyY7sLGsBBKp95WkeUDrdzuigEJQ",
  "key49": "4EoMnocURRUvPmCNAJt9vAvfrxYLB87cmFSPg7kny6oowmkXAzAC5PfLyYoT3PAUvVxAacmzxrWV7KKc7PtMNZnp"
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
