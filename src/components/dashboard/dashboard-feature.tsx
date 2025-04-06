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
    "5SwCBKrUyxMfwrUBrdzmniw6ohz5Pd4MJbgr6ATAzutxisNeMkwwk8SPsYhouSdEBve7FaXadK9ng1DV2Nmz3AKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lya3ws49cg5d1dHPxR6rfKGUXgm1o82M1Sgst6zoqnaqAwMJfHDoi1sDX1f97pXoGhfH77gDGVnomM1LnkPGATY",
  "key1": "iwRKAg9AXsENZaesba3jXVyp7mZbCvsujLyxTqL5AD4sv9PhXTpB625WU1rXmkFUvaGCaZCsqkfZawHYdYkpize",
  "key2": "D5dMjb7JBTECCFWQRvTaVCQXy4u63i5ADXTmW17appNDQ8yx9bHX5hhahAuTnNz1nLCrW7Pm5cVD4RRziqrk39H",
  "key3": "2UgCeqQ71GLhCR7VXoc2uBQMwpcb3GU6WZ2iCcW2z4fAXLK8yTbX6LerzFpCN2QhasjF9w9zCjscU3NaPLxMMtft",
  "key4": "122rsdhZbk16a25aCyiUd9a2jo7PtKsZWhdVVG6UAF48dV1kwb3a79R6k14zEVpf6vBuSyYrdc1rqTAJiHWGWiir",
  "key5": "56bXG75z1Mp17J6LyJwA55NFUSRWqb4k3DroBjAamRkM4yg1GnUVGUFBBWZwAtZUSvz7RkJ4GsCBijQsEzcKvc3G",
  "key6": "2TzaVoTWSBKZLzFaNETNciyq2zCVxVKd4HRAfQ87enXPXoeTogLNBWBeeAuB6yPxRsHovMHC3d5KBEML3tw2BmzK",
  "key7": "376BMrPZAg9twRKqeY6frYsENz5FuMyxLtpWvpnSBcegkdmLLeXgkmdSWxwC3CeA7BTqi2X3hW86PtE2mXg7nL8G",
  "key8": "RymHysQXbrvBL3ksnQ9VMuSjTNziv93fiDJEeevxBBTJyRrac3xAv3RVR3EhZw6Vs6FMqXcW4TZzQ89yfp4t5dT",
  "key9": "Vi8S11VhMg8zNBCAC4vaBtYfsCQPtCmut61DjGcnbk2scXpv4i4bTQtzXE12ugfsLr9RcNVUQcMRkbJJxMtrHcw",
  "key10": "2koea1z5ztBKMw7LHNBY7x4QVhYh4zzPfEQRbkx9MArhYu7ZZLKQozPXcqYFAdM922ywLaFAbXVVMV7vaTHkDWNc",
  "key11": "3pAPjnpt7e29GJJAyKmhvew17Z4rZ826Vy2hhrLcc4iEXEBZbL71ccTnVH5ontgGFekuL2mJKhYinX4wNWsEVdAa",
  "key12": "49FmFxyXg2v2njJsXrdvrnXniXYjpjqcTtPm3GSw7UZtqNUK7yco6VBBmpLZsZHDo6kypU2fRV34dfK1fWXBNvbq",
  "key13": "5oZAdMkRL5Sw7NzUXiMRNirPFexFiMuFU7Aq5rHZK8vAWjtd7Gt1UMNvNdRxGv3me1sqiWC7SrZcA7we2PRMvVLi",
  "key14": "2brYfsCFfe68Q9nRUfjGiki1dSfaKFAixG55N5g2EaEQQxj1Uut2aDiriTHrN5w77H6BxHemdTtn2zfEiDiQGwih",
  "key15": "4XKbRxcSazF4NxKPNveMw6XrNfhtUEQjLGGV55XBZmx4hvab4pnpqsDyG3BtMELGXWGPttgyBfDu55m4WRa2nBZi",
  "key16": "3x8m7rbgcGtqV2hu4Wv39nfzGqsEfh67EfZfT4oz4yY177dHY8FDh4CyyMVVSyygqJE7kymzvq4RQ6yeUFxTTZST",
  "key17": "2wp8i4TXStooi54bvUTUnCq1Lyn2UW8jM3SwtK8RH4K6H5nMHy895MzboKvQW8JMwvVG9mmSf4Niu6JbwpYnWPX5",
  "key18": "3NJ8w7Erj98nSt2UrSbGw4kVgMuqNENnTeHTihoikh6pw1nRRChtuvh2J2umYAesmM3nbb4c5fe7dbY1aJELMNw8",
  "key19": "5CxSvdJrSyXUEKiaE1pGvf2DC6zmPfspxHsPMCHWMuEEhFJFxoDgeLZYRkNhxSDcnNokhJ8kH21UDGSqGj9imnhH",
  "key20": "5Q19ySvqKe4LgYVJWxNDuHKowc4DMwBva2cv3Fmy5McoktuZ2efs5NFYDTUpRcwX5DMnNAtU2BxQDFAEzMZ4QmSQ",
  "key21": "RNU9K393GA2UhFuGUqcHBy7q5EjJ4a2whNGSku1Z6z6ashnokQXLwFkvjtx5EYu7mrm1uuVoaAwViTAhZMvD2sZ",
  "key22": "2zRp7wcJ4qAZ4hZoYBkgWv7g3H2Yw4Cbjk34ztGK8WgSPzDyETtFNQB3h1YPeHQWTt31G24eVJMdSJ4Gmr7urQ1a",
  "key23": "4KWsdWy8LTLYGPuZ8XbfUekUv7wLBi7aNps7t6cYVJ7BifqXBFj5mQHjPHDH1eHhJVvJe52U7krMzWdb18vzgbd2",
  "key24": "3XcXxzKNu9RQJ7iGhJMzhCBhGvc6LPZzUJzRnZzrKEwcmJKm4BHgMj6TX8FRWNpKKD39jS711DjuHyVCPZEhWPJz",
  "key25": "3UNEgnB22uLD4UFS3zc8DZLp29JgdQGCLEqbh6XxPajvTcgUJZyfsMZKZ5k52N38iv4AP241LrFVREvY4QiEcF2y",
  "key26": "633nY7HtvLWfZwwBcS3MRwxykP6uEXovVN4qkKr2rQaeDvgYPrCeK69sMhnbbiBJeWAVSnq2ux7VrVp26BGCjFUf",
  "key27": "3GLMBGTdbKRtxvvjLkGXxFKLFSbYgkg1GZswcGtR2HVtYKw1CCrTwGVJKEM2JKHWBLkf36cFtY3MC5x1x4iH9Zy1",
  "key28": "Xg3U2xMmA2S3iBC5vU92jUJCQ4dghJurPSvAjFdzd1X2MN6XCyw5aHhzgs9Vu9CWX4bn4CXeYuwvziHxpxRUTsm",
  "key29": "4vjuma9iXrEe3orcXNdQf8wKWDA1d9cv7jsPGsheTxDiyCNoMBc6o8vrfo6kTN8j3NhKDMEUpDbn6cFR1vBNKxBN",
  "key30": "462XJK2UVEHyWPUBWhGvmAkDfq5YCaXaRuwNtxYxZ4r12BFxxzKfwKjaX892mjc8rUC14PaKNGy5Y6HwvMUVxQru",
  "key31": "2oaNCL8RBNrgaUU9Ty9vxkjiXVzEkgBjZDhkXUAuUaqaBiohYW3CSqA3QZSExMsG37EGXRQKfp14pb6GrFrcsZHz",
  "key32": "5TKyfQpfT1CqvUdZzPpuMadzGv3D9kySVZFK6SHACCRtVcLbZZ6vrJrzgv32LxSaNWLkRSPtVdUK58crU4M4wEs6",
  "key33": "4TBhzDFxqyT9LKC8yzzd3uuRSxYDt5YTkytEdmVWu2Sq9suebXDj7zF9VM3oPZ6ixeyC3hpvX3Did6EfNdQXnenL",
  "key34": "p8YRJQQJjEJAxkF44bAVmYq93ZYjbdmZjgDWSXobNqcw2xwnAZE1TGsxFauZVya22MA4j92A9Yg4GG2MywZT6QE",
  "key35": "2XRjut2PTLnMpYHJmuJaSEC5KTznpgmp95pZttb9wawKx8QmAHsEA18zv8eAfGDtC1UyJ2NGy14zGcQC4jvmx2a2",
  "key36": "3CMuxD18ijKu3LSBBivr22CGQRmKZk4QvB87Wx3mrjg7tMTCjc2RQ2LyjPUC4khMAKNmAEaWhrVWzLrf5CY4Kmrh",
  "key37": "2vpXca7HwPdJ1L6huDZKo2KzG9v84LFZJMEpJyub579WCprKSM3otfhfmf3UR9SPfCdG3hdWjmVQjfK3ad7ZQk62",
  "key38": "49nrTSm3aowy61RGxPhZMJd2tdEnhKo7KKAGXhpNe9JXmVRkWW81LVtyLWNJKx3WDhmN4uGDVoqRbeKpJkbWu5Ud",
  "key39": "4JmqQKtDm9vAAbY9DexEESYCrL9XAqyfqHaczb1wbboKaZSGhrd7epHKdAfKvMMHpotQEY7K83sgi1NxPcTMztpz",
  "key40": "Yaq4Uzy2vF31KWy9MQmUCPceEoPbisVb97rp7jDgR3MtPyvMmUAeoxmgX2bZLrEbqkJ2mmByqQL1NTFk4yWw189",
  "key41": "4MMHvnsPQkV7GhHdnfka35SxgehrukEBT3PrDWZyWZ65QinuyEFnmx1rkwLwZcNZp3tzrovTYwjmNxhqFtScdo45",
  "key42": "4hAK4wVrRzXPcfw4AnEN5BDeqB7sTWuShn6CMyp8CC8MUeHUmFCQUwU11YK1zmwYBBcDzyR7Qv1Q85k4NDjzccjx",
  "key43": "5E43Y67erVWoUsKd9A62cNe9i9K2JCf2xxHiscjqpu2puSi2f1w6GhB6TjC589ckqwSypJE8HZGLqzNNXH7k63ok",
  "key44": "j2q7uPam3VFrH8WiP5X4pfZjCimL8EF2mH16MZqbexG5YSgvKWgZfJoBTf5tRrygWLtivWd9RQaheiH9mXm6MDA",
  "key45": "GTPSiMTJgj2HYT1jyKsBx3DTwA4Ac2sDyQjMB8w6Ms8SYjAjkkEsMmJ7SDvQefoyK3hWW6GagCTMWV1hY1m1Cuv",
  "key46": "35pVsSyPCSzcjku1ZauP4gz6xgSe5sa32WGNdsTzY935rU9fG5CGH3YmNSN1Bjnt2DHQgrJmVbw2GGYSWCypCRUV",
  "key47": "3FvxHofLSr2Q9xzFf6aE7vF8hMQd3ro1y1bJ8aGWWkKm6wLCwwGxC3oic1enQbA3t5jNhsnxaYQGYBKssPLWKvNR",
  "key48": "3AEHK4VFViQi3TyyiLKvLv24Zymjs6rMXmbgYpVB28xxZshBpPcnD4SGjH99eC71VMkk6KT1Sf8srhYdZbyQdjps",
  "key49": "5KEuify9PYtRVgaUrufDoihx6Je5oeWsSLaaKyUuZoGc2kAexd6Ho8Lv3JvoaeBnQ3WSBgZyCTkDP6xzT8WiKkqu"
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
