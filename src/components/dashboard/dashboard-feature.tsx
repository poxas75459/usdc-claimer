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
    "r9QzVQpQY974YKbYH5N49B8W4P39va51SbFNo8tpv7KksiFWn7xLNGyPuTMGEZV9Ku7gAjoTcJ9XymmL9ayT6xJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NfFUMapVYvtwFJqNcvAQS2TFxtknCZevTA2b9AWMkNE46xYYizymNe5qBdFcEDWWuFtC1jixVRxmJo61w2WZfyR",
  "key1": "3gv26jzrK9Sn1ozYZbiH1PxCc2TCzGbUsdxDxFjSSrH3PsbmX2BFQgadcofYd3MHMtknZuuLq3a3xub3Z3theRxZ",
  "key2": "TnqUK4gD6N4sLgn4nZNb8qD9mUvtpzA7TwiaxTHD8pit7eRZ1BbBYLXEbmfTKRAt81aV7yGjQzrheygH15K3jWE",
  "key3": "2nFQxYYiCC9AqXbjxZexBuD4zS9Kz3cso2y2acWRR5DiFYukXpumxedk8a13NkuiZnFZq3FbRiSu7tdJASjBirFK",
  "key4": "NhrjqYgxHMJPdJXmp2sCWtQXXNTUzkosHgBGBVtgvGW2Xo3SejvGA8dzmEUk83sn2Kc5yJWPL9xUMCqKHxwQt9f",
  "key5": "3MS9nVwg5ngkhMaU4yHHdigqRri8htFo2wx7z5XkZnbg5HdSjyCiGop4nxYTVhD3NiCWPD8HxyvaLAaNtHN3Dccp",
  "key6": "2cymMvtB2RiL3usnfLA45VLDgxdC2P9abMKgYqHc7AZDFNM3UZvxuwsAbGS5pt1sGixfpzCkLuN7JbmreJbkbsLG",
  "key7": "jo2CHnL5V6HSDzHoU3hr5G7uVgJUjaZjq27w8DckdFYh7WwAyKN7mhkfPKp46VQ4YLyRCQ4VrQ9meHDxigVwPeL",
  "key8": "2s71p9oEgiFVjRF5DBF9wgNnwHDsApqo6AKsq7AgZfqhZz1AyzdNQZ6fCHnMDo5UhhibADuLwLkEA6WyBFTVh3Zn",
  "key9": "4oo8vUjGhbMYbAi37auXkQjN3oJNYk5TxBf5EVJ6LGW4nWmoPQZhWkUKwXSdU4XgfsDjH25Q6rVPKDfxrimoQoSL",
  "key10": "h9YWbAVDggJAdDVYo7fgyhdCR4y4Te7cuQtdJ5W4qaNVkNo9FVNX4L1yBM5rb23er1air8xk1dMwfpTpkz3zYqV",
  "key11": "2DL1xJ7pNx8dtUvxg8V71vcYQa2V41p3rF65A7Gan7cjDKituNvz7bD83EHb8dBT76zkmpvqBq2bUCWWrr8AtKGg",
  "key12": "5bBvUkPEeSw4EdFFwEkatpqh4PzKvYgSCQsJmosXn5Ci4tspH6GxCgrw2ZvFXaWJ1oyETfUjLhwG4bhA2ShYKtGi",
  "key13": "stuNJeV5bFgGnCxrp6JLJEDVH18RWPJK11uNMPUuuZYxr7nAXWHxBmckEcUDXHhbofsLn3NUB5LRSHyGVvmTX6W",
  "key14": "e2RtQ7zYES132y6V9qmzzVQjfeWKTFMQAvBD455ikD77a8NupYngo7hciSAuJVvjD6kWZxwRrfC3VnxWrLZxUbM",
  "key15": "4TBkNbzaf3CGz8kXykYZu19gmBwfp3bC3vhCbSgW5znTe2ieC3CwNZRXXSL4qC5HZsW6jAm8ThoqSM288vyceX9t",
  "key16": "MAAYFudk3zhFYN895jaamkSd9y5PGFP935Lh5tsLFQbCHcZFXVqY8UVcgV99tJgxLkznACfPBtxdsWuXhHuV1Pj",
  "key17": "4gCkiUSgZUh9jo2KJkaPhKPU2oeb9AXT1qZGe7QV8gA3xUaf8xp6SyLGbhHy7USMrDmoemQXgjHiFxZJFpic2LMq",
  "key18": "5Ep44Y3js1bSBwT7frBcKi52uPmTvGYtttLQLdXHoktCrSbpEuVV7nuTvdU1GYKjMpvuiTbWxyoUrZJnWGLU58E1",
  "key19": "3T8i2Q1Q3s2Fu69mNa1QHuxTJwo9mcTqZ14hx6rXV7GsgWjjKK63uZJpJqJ2a26ZMFyiypea7Y1ZVD15mNQUctDK",
  "key20": "5LPtVBJbwM71mRuJaKgSZyBN3fP4Lu9xFk5UHFQqQesuWwsNMpK2sN55MMcV8XYwUGEPQqd1gBsijokuT9tggWcD",
  "key21": "2qq1QJeLg5X3uAmsk2GnJVcYPwrPkwSeEoaiYRUtjxuH5g2Btpwm1FrFrRbbF7vVQ4dRZneZe6DyA24aQr1FPiu2",
  "key22": "5ZatfjD6B4xZY5guhc89rSwGTwMzJeiD8RAgUrsCC2uCDVCwEJiJysirXMpJrhfMmeCNEwkXwMytyGMmbpZjkvFL",
  "key23": "MTEZ5MNYkwoi6artzdzeemQP96b75K578PJhCKgh6fxqzfUdjCwSqoBL1CqGz9VHDR4cWTbL9bB8iuXXx5MjFF6",
  "key24": "3NefMZS86jBz3NSGrZxq8VvqkDUJPpoHJEARGu55VwBBQsYUbYnKidNaqYrDUNZ6auVQyPNzN6s3s3Ci44tLSrdj",
  "key25": "27wjpKpgtzymHgx9CNygjTBi5KydhWYmquLEXws84XHrSXnQBGzGTQV3gRS2e5CJ1zVxUrwwoyJcVEEbeccBAjvQ",
  "key26": "2ATdXJDP6JmssnkQpUGcwmtzY676U3DUPmwySgnN8jRzMjybDg2DpRjy1ePDSmvPK3xyFEymJb8DBd91KsMT62sV",
  "key27": "64iAFG6AEbc2qDEPPn8jauLfsBieh9hCcE6tauXMVVihJ8xszsA5DiUe6gy6bUSjHcA3X4LJxr2d7WfJ6CdFeucs",
  "key28": "3pwFpshYFeB61oiUpmuD4tfJ79ZVWMvsD9cXAch9aaS4Zzd4FuXF4WSmV4GU87KfXmHyQYi97FMZN1stajyagshg",
  "key29": "3oHrFHtQM2LUftrtdwYvgfn3rzCHZC8Efzxrop7jUws9uoDyXfxtFiKZwofMjH8h3ijzWJ6qpURV1wniNzr4J3D4",
  "key30": "5PskQsvTSfBoB1exihh86ykbnhoqck5NbME7uwtP2fojieXE3wGDMtQDhqEyFomyxyRFbBzWFHSCt8gSJ56U6qvD",
  "key31": "y84gWY54LPowkzDN4AKmmiL3qkRbSMpnoAfpT68GpXMDeNKi4Ds6Fbpehui95azwuDLWfLMc3DsCUMdu42Xqu4F",
  "key32": "3XqAfbdjoFkphpbWLCmW1D9f6oftrWoy9pp5CHpuWoJuL4jH9MjR25JMtc2DVapKsSJMnBNSQ5vZWMMUknHT9Yjr",
  "key33": "4pUYcic5SraRMkP68Fhh5pDs9obCq4En6KASQruRfYvbcmvrAwpwzSzZdn9zx8BTFgNsb57RymrUL1kCyq2qweoN",
  "key34": "5KdyUCgxZpQDN7BVQfZ8gLyjapUcLNS2b9JyZXkh9BAtLSq9RkbSRgHUuV7MSiFHHTgvX4TwXKk42WUt51rPX1WF",
  "key35": "3uw1Hn3p22Dwhc9Z86RmVycPgYaGwJHypGvzwYRcA46Zec2Bp2qSEKasuvBvYZ9Y2i6rxaLas6vqa7pNFfF1hBgz",
  "key36": "2PyNixLxycp1qErhH6po7JvsS5SMMU6v4iY8wxwz1gxLekNNnFNvhXiUsXMfDLtNeGGJ7LhVmn9kPi5nYniYbL3N",
  "key37": "5PpxdiqvxgxF1EZYkjJreicDJBw8UbeRYEwCpGKhGGxEEBX8X7sBM865sQRrUouN1SAgdzkhcTugG8cwsyfPK8PD",
  "key38": "6eqhsTFRvVYTPSF5gHuWdGHoMSE46uVDrc4xUaDsehDHhJ8sDsAjGaoCdbWsdWVYopvAL4UTHQPH7JnDcTqHaiA",
  "key39": "4MQoCSojoGVrTXsj1YP3uC1mBXzybwdTWueV6yQfrVcjtNu2Xqy2V9H6cQ88uuDyyGGZBwLKupMsB484cR6PVzDp",
  "key40": "2KvhJFmEUYnfsVzTcL8Q436CvSCe63DWuXvKg1vVUFfr6E713RPLdZwVYKT6378CXC2wWLrhitCZNDN9UTaME11z",
  "key41": "3AZdkrWpQP4qst9ZHR2XVnWtSrNKp4rQMsyhMQ651vwzfkKnFfeRsTCPbjw4vHoiUasV5ZxKUTMVhzntwuK47jhr",
  "key42": "5jWXnVyADF4T3WvtfeX2q57ikBYxni9QYaXnvx7ip8rjEgYJFReXaVGmpaonDrpBqbaShhUva3ftLmfzahXCWGep",
  "key43": "4mFYJzwBJubg8YjpdELDuatvVkip6zFwtBHfn8EMKkFXqgcoK6Jqn5dH9w7ngEqjrqHPUkAShKdFurMs7GGKdGpF",
  "key44": "2FN3DzeDf1MQLv7qQ6d8hRLW4yym7y9AWnuu5AGH1wbRXjeESAjcgvhgUVV8JA4CrMaFHgktC6Yxvu5pD8S7Kjhs",
  "key45": "5rsNDaMqGQKJDCyPK9mbu1VjWWmjG69kAzRL8hBAsZSQLkS3Uh9pGkavW22iWytnNxLpqghwKRMkDTpeRhBUQoCm",
  "key46": "55S617Bgq6bWmHbnN4qzYQW2xW8w6PCtr3K84WR3rLi9Ct3c1Gdk6THC7Jh2AKHoDqns6kAahoS6Emfu3qjVnmEK",
  "key47": "2SNVnQuruPCp5Aw59rx96ML4cGQHiiUuGAfZHu7o6AZhGrpHw4mw8mF4SthidYYEsBSimUJ7QfuCdiTEVhzjbnan",
  "key48": "5YbFuM1NXYZMLxB2Wo37ELEtVSseaYQakf4r3MP6AEam1yCC5HENYouvUiZFemLiioS5iemEJqJ2V9hQmwG6zJBc"
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
