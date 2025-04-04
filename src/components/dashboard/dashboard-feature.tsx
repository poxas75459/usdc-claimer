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
    "C2VnvMX9br8KEQm3Z9WjUn2tHsPW2yKSJx4vQJySFdn6vnQcBgqqS6oYuMAb9iYp8gVeEuZfFzkf6UPPV1MUxTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47sf68DTWTndqKVaBUFGychUwLG2jz3xGKmMUStGsd6jWPtmWjHmd3uAzsyfsb5h5fYNyv3oTgEQ5oSGSZ2Ewifa",
  "key1": "4JTaBPJiYPBDKMuZv1XFph83eyvopZrmvZbp6Fsv7VA5cnCxNgzHNvy2JnXkRvMYnEJzd8gEAKDGsWVePkLTkmZm",
  "key2": "2zvSjuruai7kEL4JKAw7gPTZQoGj1bmPMSrWwc6QDKyBDSqvzKVPYdX7Qh1qxFprS21ZQWpegKJcrPDtFhctWPyG",
  "key3": "3pV6rHuMymvDbbap5Sco4e2UTd2b6FMm7bSiYCVXGNZbRXdQYHiLSxgEE6vaWsnb2f6Beg8UubeY1k13tdaQWsdq",
  "key4": "3vJP6XTawiZ6Tn4BZR2469agWpGcvUUxTWhfMp8hqDCLjgVgXZFb31BAQAfgSQYVvo5Q27UnEXeJNpwtDraD2Uh6",
  "key5": "zwxUvUhZh3P8S6JTjxug8h5wwdhJAqhH66uqRKuagxSxNTDpSmu4sVUBH7WYaWq4RKSPvMy21VzsWbxMdQYtebT",
  "key6": "4yy5fFfiJajH9v2dKpduRZfYiTcoqKtWcrV74K3uvuHQE5zeHYdULSGBvpgDBZtAbsAzrTLVabbvES6yKkLZp8BZ",
  "key7": "4iW7oTvh1npuABpWp4cRM8cWtjCzkUgjaLQ1BRNusJFgyMcGSEz5XUC8TeDBsHG4d5pcbZRipLCm6Ad25uBAt1it",
  "key8": "3hRFhEgi1vKFVdHmui2yg95P2J1MFE79QNiyGpuWYzHZu8qFRydtLUfhyKbHCH8pYWNhoruzfF6DmDBtaPLoUTXJ",
  "key9": "3QE7fVTuQQReNhrRTR5yWRB7EPQH835gnZ3F3zbaRhQxYQMVdhdt2vaYW8reZJPKenfLoitc5hf1LViCwXdL7p7f",
  "key10": "3KtmfTvJX7iK4GNFrcrDaKR5rY2VucxtUsVwgJg4TTXgGKSpwKKwkvJcAcVigscHeM5i2RAfVX6qfdJHkWuEBUqE",
  "key11": "2ZZCh4n5vcG1ZsJousDs6juUmi64odoGEk7GZM2QYj5g7u8aMGpb2XZeXZH3RFBo2MT9LYshpK1ioL8Cdv39dX4X",
  "key12": "gibBWzau7Dhxsnn2fyTTKThMB1RFCEtnmmJfD3KM9MsvzS41ygGYVLgVdPi1oEsfftjCQ2PF2EJiDUQiuaLJVTP",
  "key13": "5TK3GUUQtTffGvQzQRf6P96evNkedAVX6DRSkuQypE2Wc5GyLihgES2t2kbwXQFVc1tVRtYP6JVPPjScCEtd7odg",
  "key14": "5Tapt5JvkYUeFy88QRN8eF6ry99rfiHMeJYrMNRwAVBbSBXMhWmNYCXy88AmbazUQkVetonJhi3zMofoC9NRraoC",
  "key15": "4HySvRsaHaY2e3D5YnFvPmxbRAWXZs2YUsaQDUZ4YVnhub42oaRvhGU1FBFXzvFMNXPNEzn7dALepMo9nkzDYkDE",
  "key16": "qssDgMCUNt8KHmoEH3ZYFkp43PcPj3Cjy3ocUcZZM4uSXbsP7Y6bnUoFQ9WradWTAHdmJGXTiTTMumtYD5mwNvr",
  "key17": "5zi2Y63waSBTnUVm8gVFnyZQ2NgPzCFzMc5pfFH7kSZRgQJdscCFbUoBQmRFuhG1TQFfVpXyMtayaQYgWpXdHekd",
  "key18": "4bJjdgmH6hsbonokg8YuPd87Nk78UzLR2eVyoJKJe17gfdZA4PYQvqdKYWitmS3oNvnhVXtpDUuE51gcehu4yTAf",
  "key19": "5zxG5drcJTMmKpTqJ1RMPzENvYpQ77LFysUk7GZ59uNZPtaWKfPf3ivamXQrrcT1qNusPp6Ns2748QB8aRZBttik",
  "key20": "3vgDZytxuoCfsTYhQAEoziey2rnt4cn1AsKU6SR1ptFTbAzw4BYqLhinRDrcpkh1HYJ1GNEih8KXijNYgFV45kox",
  "key21": "62xc86BUbmCtDh25TJVZt3uMsTNNZpE4SsSZXmjHQpKD7Wy5xGEGRrDhhHCKsPMzKp5NhKXMmPwDwK28qtshgBvv",
  "key22": "3zbjJiiCA8Ur2f98uHDwqrm6C79x3pDXP9AMS2xRk9561DF6Ff5PJbD7i9SVHsUx1hdnJn4DaQBA5jGHukKq93w4",
  "key23": "3Sc29urR2nentPY7ZVC2DpVzHyqDQyyvRzByGbzFbbS3BjoxucSw8CZ5ySdGo9nqtx5iQWat63yrPyLnbGFh3gnJ",
  "key24": "3S4mZ4YnvjFbUcMXVgCyyDMS9irBhRx7Yeft53QfPQ56Q4F4YdnG3rVkm6HHcKLT9cncSCckCUNh9Zx6kVYWQzir",
  "key25": "ihoa5oiMSz6zhnS7Bg3owqrC7NaRuQWWHgjgPpN1Q1m22mmiCpFcvwpVsJwk7U9cogXzXmjS8dZaXE8inBZrkTY",
  "key26": "2JfXjkLX2EwXA72X681tFNDsLDEo7XNnuigeisXh59JCroHY5RL4kKuhtGVdacy7eikDn6h5ELgwQ6VJarUtKdeU",
  "key27": "2bGws22F9dwGSBSpxcAudN8qrh1WKa4BNhQjvjZg9HzkFJkimwRQh4SE66VcmfKWCkgL4XpVocXQrnBnmcomovDZ",
  "key28": "27PwYRHfPuAxRdeQaq5R5LFMcC1ZiXuMWggdCWepZp36GMrJAcmgCFgxAQj4QG6YEweieneo4AhNCrRXJ8ztT8h1",
  "key29": "35MaKeuC2WeMErDMwTK1GJFPJUEmXQ93pmhTSgkN2M6YqvUSADxMPhSwkf4wANy4SXd2LWs8v7QXvBYzCAa4dF2B",
  "key30": "5ZYMziKJ7J8f5oX93mYmdyRNYL3KdgvcFEhVfrNXaRh4kHpgqmigv6hTWbukgZcueCC8V6vjtxGNTkYRGoFXVZxN",
  "key31": "5xJtekoJtcPJd14gQizjhFBnJWw4BRidLtmYASvy6AykRrP2NaZRCxfevYtZJwnQ5iwHGE3BHm8v1NvKsbEz4ME",
  "key32": "LeQzxVsieBfNynzaJxNTSWqeLx9k79y7oq2jNEpATroGuVH5Ro1aKq5Tgr8dgU2eRsJxYUcXkLCgjeWuxwq91g5",
  "key33": "4WoUdXA1dM4XBg4GAeZGakm78sw1SUiQ9YHbsb3BEUYb3ssPmVjFq8iDVasTWj3gMHqfiWjeiwTMHig3ybxUS1LX",
  "key34": "5K4pfMvJg2U2Ah1wszA2Y1hSLrEaaHUTKCS8Mua6umQDzbuz2Utb9cKPst15otFeNMiJMTRczvAayrtW8WX2md8r",
  "key35": "5aZsJzpFV5VhsjqqGaLkiMu6qSNf1RYW6fx3FdUng5ibKLt3GJAYtddkU1yNignScSTD7Kk67muWiXJ2h6dsSUTh",
  "key36": "3K52sxQWw35KxbGqYvWxnLyoGMJzpWtRpL3tcGqd1Nivbx3kD5LTKUAX7VYtQYhLLMZoU9FvnoBsdc6GMC4NcWrq",
  "key37": "3GLV4J1bfUcanoiEiSZsFRBw4xNAnpZb15YJnKB6HqDpPFLCvG3bVFgbornt5hZKynYqRDPS5MfwyiT9KKR7WqF4",
  "key38": "4NUkUKKSHuHD98bBAkCQTcCmH9wr3jVNzk6HsYZ7eatSwnCRKqbx9D9muLpDJT9DT5fUeLdaRDzdqBv8UwjYDZBK",
  "key39": "5mBk2xXEKRsG3LismcgiQ7K8UtaQ5wbSjr4cfQyEdugeFuWg2NviHhRqtEW8nHZYyeEuHXpPb4rdThYDFACRDuxs"
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
