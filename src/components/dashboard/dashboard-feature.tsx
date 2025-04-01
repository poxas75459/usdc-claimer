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
    "3eHLzGmsvjvW5bFeoqXXM7WC7ftwfc26SqSTe2898QrJQhi36sZojUBGf3Fy7qr9sgcFLgtTMGciPdhTUxwsM893"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668CfDPBcrYscarb7heGCVXbfd4w7Gfb3dMjWQEND8aKLjyMSSTXSE6kXFZZUsK98frzCJxam5TTAsp4DTcz9gFm",
  "key1": "2jVCFpFmkMCw7SFcm1SMYW66bCQvqh1gdWmj3coy4jSMbe8CVEpwc6v3CtVVRrFHutATMZ5EK7v5bFXbPyxDjW7m",
  "key2": "2aPrt55mcaJtD2fKAr9EvFxviC8QDikvtWjq9todtdRhDhTJ44HYuiftCanyeg3aehk8Jyuoavt38xQRjN55SQDS",
  "key3": "43VXjy38TWZvtj744KXnDjQBzkSQqhDB5DVm8XGtpRWThE5U7Y7H7xqrozL3r9uWcKJyEXiUU8kARJ142MRDnmPy",
  "key4": "5dCYmpEcNag3z8hRrkjNn2j6NHp3NmAq5TJZt2LgZs4SLftfoiY3aBHgoZMt5Fgi1d5Fk9uA67yzcHGyn2Mig4uF",
  "key5": "5JjjGsWJTyKpSQtH5UcZYdM7X3JGRfytnT5EeNkWKt8frM4NYwd85e8FdmTtg6WtKxZGXVK32fQ7edWwNSMPrCgz",
  "key6": "ziwF1gtLHBLRCx4tko5g2vMAaNiqXGwxNu3S4mW5UK8Y8FVjRhKQDF7s6xyXyfx3mkxi8WUVpH1qvKT9xHbbxSa",
  "key7": "4bq4KyPyhG7XmghZ6v8LUuL8GeB6z4x2Mn3uzruK1G77UX549Fb1hpweHWpWJAWEmABhjEXBrw5jM2R7dGE6paiS",
  "key8": "vicsqGwNmB5wmhZNc6xh72TaJm85U73cENuniRcNHuDm1YhjxJMhYsURf3F3ysYVvV4LSXNnYdZY1QRXAz8DNco",
  "key9": "5zzj6qhFjiB39tRt5nuJ8WhjKerMazrWLuVYLz5vxq4kpf5BtvvWBFhbHTWZpLmxELyQLwQCkXQnLydhUzFBJdfj",
  "key10": "42rH9xmhoiNdh3LGFHfa5C1vjBrcPNvWsyqoW8b6tfaYpBYhAyaaFBoLkzBoivC15SeAEPd1AhBAV6h3aSoVSJP9",
  "key11": "26aWuzVoG31cVUQMSKtz95KUo5tBAjXvYvdJrFHHP13EeaTMs3BXdqvJ6yqBL8toQ8pQjP5EK1ddoTTQX5iGFCPN",
  "key12": "352bWbwCRBK7TiDPuLwYiAxwgqyQUbMMB99fPpZpArWZbBMzWCkwX7weujjAAqhTmh3hTcaZr88UMV4eeygtN95R",
  "key13": "34RNZCZxpo5bhLQYcuC1AN9eQE1vU76Y9HULn7nzNQuxsDt4cTc6NiJxB52nv4pDE5bbvbSjoBx1B5j3uYHwfGde",
  "key14": "51MTRTtdCopXuWDLwqFEN4L3HTASTDoWALrcqa8sP4Vp5edhW6xsfuKkdDu6oVb2MWTHbWzQ1Yn5EFosPM3Bt78V",
  "key15": "2AD3tjaf9QD9MDgDTUnkP9bekpxcQakv5ZpKBqiPsq2Au8ZShHStXqrgEWjkwyLokAvWuf7zYeanojFGenAMU1cQ",
  "key16": "3jKsdXtuoXLmzQ7sgzAWJg4hws229JKiQSJn2aBa5p1TVRBprcd6GSXEYMKwjPhGvhxTFENePLiuJzgm2rssqEh8",
  "key17": "21o4cDkKkTzvfeKZC3993P57mnsrQqkSGmGd1RCZbgmzEbQ7GcYGkZ6JRVZKfr288DFdcPMg1Hy8WxqZDSejbU2t",
  "key18": "534LqXQMiHW5keacX8ogTrxAFkQQE5WGkhRWS79CG8sr97fUdavPAdBrvjXR2kUWXvFXio6rgnjvZTZMKEPc66G3",
  "key19": "3SPWGu8CB3Tk8JBw9ucrfgFZHFi9cMmk4TbXiPZsJiJWujm7tG7u1qhnKdz3WorFTjPqjz4JrCjqxGU4HJmBNQ2o",
  "key20": "46y3MNoS6HpVnnq21dbDkeDZnPpa8LrMv472NZMq9rLWs5iGtKsvmPkjWf3Zp6uskUJ3Xvwa1LLm4SDWdforpxaP",
  "key21": "5vjqsAXp1SE68ooNfZUMpvexpznKnEcZVoBSAyeEeWkn5YdpZtZ2uYdvYTxf3LTEjb8NkmA9Mo9NEsDfH4EBKAeb",
  "key22": "9K2tzJEFPBs7L8Qv4viwFBhV7dJXpp4okHbGh2YBp1aTwUGQ9pzH4AAjzC6TTn53nqV33y698cy8tnCf5jNhixe",
  "key23": "3ihtrhBM5MRScN536KfXesAfs18ZSiGqSHbPKjzNBCk8nvD6btB5NeH91RXNya5TH8eBATDspP8Nu2a4VpiRjsXv",
  "key24": "28vwwjzDsJUBbv5ATgfWdaAoU9d9xhKEDzoCg4Q5VhVuVxzJPRBrTZ8zNrZBJfud6BVU75LHbobNhtRPj3Qhg3Vc",
  "key25": "8wMeBKgdtTkJRpxDc7WBjJ7mf67s4xTmjPcSKdS5SWoNRQZQXYosjwRDsaRDHuWm6SDjtnpYbWomPf7EoK4njrT",
  "key26": "m2h4H3WHjSYJKFRNn6MQsRHKYX7gD2cujq9xFKz7GFU6MKM3faWGET6tu7EPwpXr68n7C3imhRFtivJQyhkC8Uq",
  "key27": "3Arji4taTSDC8MHY8jgAjkQfRd18Bh7agC2rYq8mC3wB6bAZmUEqo47V1k5wzMjKTrmRfQkuAXVCSibdwU87fBKo",
  "key28": "4hSeD1jHeAUW7WMzs1ZGyDCGzTPxYBhKEWXyKeRJ4omQxKUKcoQVXrKZ1npLFAPL1VhhSUozMJgNHcAbsap6ZxLv",
  "key29": "SeEfaeMgUg3XJrSp8pD2jySzaViR8yCNgfcXMo8cvsbbR1Wnydv3p4VhRA9Kaee3NcCZGpvVehAzC7DZMioyfr9",
  "key30": "25bKBKhPmXzdGUr2cWjnrdqJKy6tg8nNe9mhwPXUZyYj6cbfFqc7GL9AFFLKLq6rNitBFaii82MBYpMZVfibvpi9",
  "key31": "5Qgx1GNzmpvCVevA4jNrCSLvdRYoDRfW7QpzXoCyKQufDeUnxfE8XqSFpmc4id5svRPA6DqLgH4i8FTZ9VmGp32x",
  "key32": "6799EgdrbufSeJAGbeamJYqPNXZkgcKdpxGwi5peYJR2vih44bHAJ9RevAWLpXPpBeAwY2F3UJuz29jWfuxaaRCy",
  "key33": "3U4HmYD3fL7ACX2ZKpoyCshNsuxwMiKBSomjZF7oP3LAZDE6DX1ER5BxP1CNoJbX8pa14S6urJqj2H6k7PaeFk5c",
  "key34": "44ctaDwqhAzAaajiJg7kQkjLsbs6Ff6jNXkBKKfEmTMk7MJLRSbFxMCWY7iWEJdTcJ83wzrp3yPvXWjFt5wtCv6K",
  "key35": "3A1btar9QvNYCygH9g4gSaX26V5Fayyi3a6MTw4YDMTKJouanegGWnwVFFkkpDNyaxYdmn1yZoE4Znp3mGsDTzTT",
  "key36": "5cittmFQhXxr6jG4DZAnbbrrMbsp5QxSH1nyBFz5RtAesE3adcVmS4fK3yrn2fNBrWAb3hkiYKfWShTSYoTSouwC",
  "key37": "xyGcbJZgjYTThjW3XyfstBubdNTr2kjxCkdtQXVrgUxU4FD5ySxky5tt4oXT3X6TtqkwrAnXaau5WDrWkfxAsy7",
  "key38": "3sQ92oXyuQEXgdEs1xgFEB2gKxkzNaiuJQg3AyfeXK8f8vq7fFeSSVHJpFMyHqCzXcBxoG8WjeAXkKSHDdSWXykU",
  "key39": "2P6sMJ7geKURZ5aousugTsnqCfy3hn5tTyK6RWpc3H7u1gp7Wz3mEFfYhbDwBfpzPatbVYrZgupcpgGxvZkG4Fiw",
  "key40": "5FEvx9paJSzQT98JfD5u1vCDyvs9EHeXFv2CNZH7CowmMwGbjk3MMJ8wcW9FXp5ZCFnXpkm7UQhGDuv4YF9QNjSm",
  "key41": "356TZFHD2Qnc4WfdaamZvnAWCDwyTzYXTyiUcm5eimTx5HVwMuMpzJHpxZqioMWNchj6n9vBKkW5Ridvhw2sdsQE",
  "key42": "2KXeyeu3YgY7TP5LnoEiCB4h8LWy1Zu3igVHTENmP4egkacyKinx1RpokF2TayfZsqyFXh2FJidBe1m5QX5zVZZM",
  "key43": "3v97Vjtfsy7JmqDS2yR7UcY6ZJWxoRRg7rX6gbhvCdeFaR7Abs5VoiaeixtRw2oWENdeeTXvzmg46DaPkfKLU6Fh",
  "key44": "4CqroYMbYQmLBRTdnAXwLhZJY7WqG3Fb6iGKCq7DDfrR65YyfFVQjrUaB8dELjovSMP5D6MF3GFH9APubL5yBNNG",
  "key45": "3o7ggSchMyPt5XAxXQTkBa2UA2S7iKZoeNYWDMh8ppzxFh492DhC5gjdUVR768JrBWjMMxbZ7oBeGanHTKH5Tv6w",
  "key46": "2xT9yHVNaiB6LdNSAohqyfBRkv8F5f9wPr4aJH9KTRNgPDnwmzi24KUAqvJ8auczyS7agSz4tQ1wq1VyWasnzXgp"
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
