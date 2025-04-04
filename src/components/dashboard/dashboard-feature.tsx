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
    "QSJq7dLWLixZE4yfwumxbfqPeMNU59o3GFWjc9kQbpUBgH55GfT6vZWz2gfp5fYHLpTGK7FvXLZV1BFN4bh6xEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8mYXcUhvsbwiuC4UTQabMBVtwnrn4UsPaoWYTHBtofoZpNsM38xffmspQJZcJ62TRpB4JhsFok1kFqjf26JK4A",
  "key1": "3UcHDebLHYPBy3QP2b19cbMYH3sEeo2UcMo5BTkw1sVSv652Qj2tTB1qGGKEigPkKXTSFiydBhJMdf8JF761QnGg",
  "key2": "iwS9WcT6aBpJfii918TkPvpfqgWoLhjd5m61Sbxa5SSTkDD5jw2rkTUUJcqVpHTUDhjshsSwrfSPYmZyWznR38m",
  "key3": "3fCbSdm3SQr4UsiLWBMsjKGB7rqUrQp3xTx48hYAnXCTXjzfbQdU21BuesvN5MDPDNjzW9VHJjtL6DEJQAL8owWJ",
  "key4": "2uRvzefA6BhEdwcLjrPeGSBqtANsHk2XByCFeXTgQp52tQnkrQxpPS7xH4dCrr4EXksovtzTXUTeWkaN3VXaTQre",
  "key5": "dsDCBpGkyqvzkBN5wsxnCeSXdUqQe5umtgNxxyGPg7L4h6C1sVZY9PvpcZfsGvj9DpEnBcXrzUv4DUpBziTw8PC",
  "key6": "5g1bFbDpeoD91FBy3SbowDcodHs6gTzEKZ8SR2rL59RrFgWVKFeFAwJL5tnNBCCjzCqRdvVZ2LoXne2SdQjesnAm",
  "key7": "2VovbnPLNw8MSHVEz1yU5kr1NNap4FgtsQufDqUCK8Yo2NoiA4pUd4RVPAXSTHMu4TJ6if2NXa77jSFFmWQnWj9H",
  "key8": "3PVxCMv6oQBLC378LHjxUu23Q4iW2Pup6VxmCXDH3s2cmqK8QcaJNeQTetHMD132wHuCqjUjXG2ZcSt9c74KGAtS",
  "key9": "4cKjc5cuv69YLWGJh74aJh2QTK1WbJDxESiQcaS6ajzNmAxcBcrTL1crpUPBrCn4u5vprQDuynb1Lf9EGrxN1Rnp",
  "key10": "5P5qavfAcNYVnzhQHRpTejphyNZDfAjE9d3ndwymTRpGB43yUVXp5W5CgZ6w3bjhBvzJo7pDsEzpPS36Di4LPNyh",
  "key11": "t4HW548pCdexJMZp3Lc83AuycHfuKatQLZ7UvcJicVkPkiqYThtrapitvZz44heEnM87tUQREoKyaybWCGH8qmg",
  "key12": "2f2ZTBqUWqfHjmNhjX95cSX3X9r5ZhKkLjxzoaZSRxb95s8cVQR5drBc1NXaajuiBMAEF27XyQkyryffXD5vxB1g",
  "key13": "2sZkTUpur7PbpN9brfyX8rZ3Kg8xPDapzxkidyMzvcdYtu45uiyH95pBVBP5SMCFQs3hHTXfXHkYhx7hvCsQLFPB",
  "key14": "55aVNk8eY2HrEBBBq2YqMfrkdKKYxYJ63DRZZTDAeXfKzdLyE9wxvBrKokSUkWWXXViP5cWDm41N8zm6BVDi7AfC",
  "key15": "3trjmdK4pFc3MtNgzrUpkPikdGM2v2ebFNLb7e8fU193ztDquw6PxzbUKagu3cgJdZ6itym7G6CdiHQeMhM3sZD6",
  "key16": "26UqbaAXPQfzEpWtb1XrjdDczF4nRcZhA1rrB4qZrJHo9wUyeUb9hukDZQ7vBUWgeSJotBeo2xa3hvou9monGP59",
  "key17": "5FWuhMpxQxNTz9Spq15cdJy4K8qyZbYth4VHoZpRFhf6VTyyB3zzppHs6bi7M1X21LopapWwa4hcszr2PfJETHYm",
  "key18": "3j97zHhjzEp3nQUkEv15NbaS4dEhgQmE6fMfJp6UXSsgiq8jx6DtzNdUubUj9H6vsfCjggEzA1UVZNwt3myRnVfs",
  "key19": "3dFGbA5B4WQGNzivxG6cNns6HeyhrQHoaBUURXoeFymxHn1dnHAqDJFLGLzAroyvMwjAwkHjmhMtZnezk6QhxaNh",
  "key20": "41SGFZUWxyGjSQbhjEJ1e5cLGVTP6cZ5ZQPVaGF77yrepAPR95URGxU3eU67XW77fH8QT82nun9Uynxq85XqUjTJ",
  "key21": "24NWH1KxTVCySjFxVNVXzcXUCX1ve7g3uTUwXLxN9NVVorPN3MRkwxz6gALnYYb7k5XAaPiSUZCX7netG1ArBHwh",
  "key22": "wYGE9rwXAFmK18pM53kV8jAXzTQuT8qUV58xzobBhGxs97GrsWWMNFhVvFFRVWYxzxxucbNFS4ftUVbWdMYNDsg",
  "key23": "4KKMfE5og75GvGv8f3BtLQjed9NphGUatTyhhzz9hDqeE5tk77vDAfAmuppQArmmvNKLMPskFUrFeYDgPzjXBg9j",
  "key24": "5VdtdzkgMwCodhzEabtyUYhF5pRW2uw65koErUpsr6juKTgydMTBUY5ASAvUK8xrzk98yeMsi7e5v5mQhjefLDZX",
  "key25": "4kgrmNQCn4rzapDqubb2p9wRxpAsvejAYFTtWKK22APrScXnERGEV8wEoa7U8ZbmF4CVvpMntm5sHPWCKP8So8Um",
  "key26": "4vdRRrRKDR8xTAQcr55SxdQis9Ng59LivzpffbhnkHbBnKU9TFMkXQFszn4wzQ43XU5bQDMQ7vPoD1w545pnjBSq",
  "key27": "2zF9DyPP8EdXxmYKZhxTWveKRJCysKWNJYG1xURJjd6Y8QQRwWKfsT93ZiQpJk9r5cJkKsJPTFMjookaYSqFeM3s",
  "key28": "6eVtowqeR9tL8aZMjCDQozMvzRA8vrSRBQGd85o6wqjKB8hwvxZjKMsPaMq9Sa2CmxPFMmwKeFDsqnHvgBCWjo5",
  "key29": "3hjXa8z6Vw4SEeSUJbkiU19FkpjkLX6TRwgRLekn35rH18MzWZQq1sQMCuQzYFcN9JUwrRjW8u2LpvKqqeWujjiq",
  "key30": "36EWUwHdhirv3uSKFYv8eHsBxCGNty5afh6vj8Zgg6i7PYXnSA3CpbzjSRKsbjbtWLZUFCkPEuSHKqiiLksn9cwt",
  "key31": "5JUS3tnmfPKeeU6fWJGhr5q43pMZSfvPG7qL2MLD68f2DjZr2mSL2pA3b5CbLYECuADBvje5GJYjNTSwJNjH87aZ",
  "key32": "2rq2XH8f3FVAKKGw1LEsHjr8am2x8feFByF5Vgnb9vyXWEeeWsLrUe5xBW6Eh7evWBybJ4H416S4W34mQtzTb1tY",
  "key33": "5NcQweYbosiq8QSTQgRJWVofgT2U2pzXjK6VxA662Pkr5uvRQWxbMPZZXnY1tsJrWFZa1Mxu7jTZ4YNETsnPBs8e",
  "key34": "3SwNuMi7JYZXDoatPXBC3NY2zN4YuE362yL7hNtnaJyX9Ry9VyeTS6MhuNGkocQW9NNTqLTwQPK5wpFVnvvimTk6",
  "key35": "25epq4FddksN7HdotE4rzFyCMQ34Hg8Fy974QMmWgYzZE6dNXffSi32cDNrEB4rr5ADpRN1TKuVqmun9QQf8CK6k",
  "key36": "2P2xgkRdSqmsnDmtAa5aJDnYzjWaqwFxr9QbkY2bwvLAr2LXcTqf8fAv5njpFJACpx34Na96EPSpfnWe22vVtSti",
  "key37": "5mcYLs5acyXt2vJ6xVdB5Nmc4UwK63imoF4xkjaDdudXNyeC7t2mbyNWFmucGdWEGnVJS64Fg69CEghwd76Ly5hn",
  "key38": "676QMtdB2C85dubdSvMdEWtusDMtjSjr13wZoEzPL8N17vsUZv6KAYfGtDK32N6Mj6PV1xfridJv4517JvTh9zgw",
  "key39": "3TTf52HXwTjXq1LSvYnVuC3jGC6uWzHch4mxbjvm1k1JAPv5gseWqaULRTcGayPay6wRVcD1gBgYwcy8X89z85Gp",
  "key40": "63N4t8qmFMxAkhj98buuPJwyTKEhwHGgEHJAXVwE65fbdzZrQTfFZLiJ7JbDoTD521a3eM7c4unJtoUPBsSQMKt4",
  "key41": "473RuDedPfJJYh7hEN7K1ME3B94ECSyb83NyqgGqCadmsXGGj1JNGBWShHAcKFRaEHdhWndYH4NHsE7tPndUPrUx",
  "key42": "43uxBAbUVMF1Cj7S1Wf9qCapSk4gP3ie7NvWb6PsXnMRNNiQuuvNnJMqPrWKH8iBGiUcweJ2uMx5ixbcHcVnNV4K",
  "key43": "37g6p85hXNDyNz1VBo7QHnBPj1NZfzAtTEJ1r8bxsnWwhDbuAzZJVG8NwPRRaiKpaQYJcfJhnhco6t15nLpW7DbW",
  "key44": "5E5S32AiGG95FAqvEs31RQrPgw2N374QF7NooiuyHtCSWhetAqAYZifjRwVr5J16YWz1xaGCwZT1pc3nLnMjusFf"
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
