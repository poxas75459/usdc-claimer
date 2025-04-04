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
    "4WxZ5BJpyVob2o13sAXDu69vDWdxhEWq134uYwVqh8KAnxASowHC12s54La9brqd9C24UNnRQb6J1hcUxKk7zU26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xkmtqaiKFGXYao6t61o4xqPQjV594SkDHEYjEVNjoYb2tVDNReqcxPXpZu2fgMyjsuyKSMFJkQsqkPpRWQLjTVX",
  "key1": "5e9wqCF4brU9cjqFtws4z3ERYckbxtJLLo1BCGSe9Qnw7Q1DHe3jfzHg3XXEZLScyaHNQkuU6tKMj6UFxgWeexJD",
  "key2": "cjDFrUJZGySRoisdHJwbvbH1GAHXxjJK3ma2eqhFag6G5znD82Q4sgizvTf1PEfSN97g2bJwf5pNG8Ci2GMPXcR",
  "key3": "3DqG87BVwC8BSLMSds8uKecVY4wV8Mmhunopsf5QaXp3rBW4cVWqTcpzFwJR54BX4iEzLrLg5mS3wHz74tUUJ2Gx",
  "key4": "2aaggqSVp8EnnnXZCtDQzoiS2sRUrBDpMiDv3SgeaQWEuq2ocjSTghBdzN1pZVuixTmK22ffdzyh49PdiELLSrSL",
  "key5": "2ANQkNXkagZRCmCddQykcQRA1EBiZTCBVbwXGXS6CFWmW2LNfafJnjnq8xNMP8MtjCojiQ5T6seXUu5PK365qKJh",
  "key6": "3gcTAxWjY6QRjxQgpEoYxFiBiwH7EBjBnNzg1jNXciVZz88AK5Wnmv3qPnMUrg2mpyq6YiGX2TsmEKLVuvnGeWY4",
  "key7": "2ACA1cee2AtG8B97G6EquCtprCTjWEMHdw8xAT6m5XZ855qEZr4fKff7Z4pqsSXGiX7sBieCdMJc6iHzghQoyC3K",
  "key8": "KVeQ9bj5967r8rRvUGpeKs9GT5SJ1Gucb9THyRN9yo2XpotA7pve5GojJ8gpbMBwunjuSjtdz1k9ecY9T344xuS",
  "key9": "376eMc73Sp3GaqGeuf1NDUzaDAMKbAKFXKYBfBJ3VerT1N6mCgMVEAn87pnQxMrQY9VTMWk9nAGLp2sva8kUGofS",
  "key10": "3ESNbDN6GT14jS7rBu94XziGRXjCN3dnK3tPA7crZfR5y5FpEjGjRiHQ3XspMYer33pASi926QTaTX9dwvCVN728",
  "key11": "54jGhRpvPbnQC8MvTKQQdkEjdEjaMHCcG7CbKqa4j7EqKHMx52qhPbE8GQCpwzzhGoB4Ac9ZDypzYnNuiuCJENp8",
  "key12": "53MNoKf7Yby5eeqzaRQqYrFU1p1E2bdV2XPk8fSVJrLYzeytngNYPQttWdpUwLncKXS1rViKWKpMTdA5eH1bBZ34",
  "key13": "dQs37LLxvA9XVop8NzYy1M2r6ZeWWBW3nZ7QJwio6g8buQP6ux4ByDTFJEqo31nSLTi4CLvnPpLV4pcKPCyBQwq",
  "key14": "4HFPRRJ22QNEvbosH2pdePmU67MCDngcqJRcQE9YmSZPU7eesRKbBvxLjRrnrcjXpqPWq2UJWaiFfBTiKdkEgiLM",
  "key15": "5npqUWWuyPpqFdSwCPja8fvLLyyX2xepXVV9tVYHUKf49XPR4FoiHgFMrQzBrXwQHP2vAvMVBajaaPULqzmWMwST",
  "key16": "3cknJRcr9jD1zhnfNkaFVw7pmYZBtV13GV8ZnCyx3LckLax1JDrvPQfQREDdeTAiaeMZgUkKBuP1NGcDePJ5E4wd",
  "key17": "26pYoXPqvEWi7DJjVHojzL627rNAUYkuHVxCnRA6q54DGCSKG9SmVWBiHcxKJ2g5KCYvJJW1i3tFGqPBauYrbC2W",
  "key18": "3dzZK12XjHcsrodQgZ4s1VRQN4UQkNddFzUrFwxUaLi6minq2Cm3CJxGJkRkR8R4PBEGgJEhTedx6x5EnnSSN8XA",
  "key19": "3fKzTfrRempxHJndViUBvGSUgvcL2w6CXpyFFDfP6Qt6uacbSZwfFtEHMDKNGsJ3f5Y73YnoJgH83TxcvYok2fAV",
  "key20": "5J7B1C1JDUjWi3ZggbzLM73Z8sxU1z32oRsPjj79GCPnzw2v6xazJ4TxLBg9gC6qZ3eo5HSw27kutYRfYH6HkkMm",
  "key21": "4kpvefFLZEQPUWGEeGxQ2T5LTJszfPUwyEetcshXB97yqH7dUJ7bDjwpEKZkKTN9fuzgHXK1qjg6MyvGnyNnimqX",
  "key22": "2m2i5Ei8Jc57as34roLg69BWdDwfHEVjeBT1hmAcgbdJKyMG3GSn64QBmrrn1kH7w4CFLHdAMENt6o2rG6wo6MfP",
  "key23": "3dSP6W5cEGsrz1cDAvtzPQxcW2hCcW7ziLgG7c7YWk5VJgnt3T7kTeiLZkaXJAbUJT3GWrbrxvCdhgaqmbkkmBUb",
  "key24": "5E96mxAnmj8zDPYEi4pihwgikuCdz3dCsrA9qe6Bau9qHppPnmPvn2VYb1n9Y6wGcQeJyrdqGaz1ik7GS534G55u",
  "key25": "izWHz2cEFUUZfbCvigTwC6niCn7SdkiHtfWhSyMryRu1aM2gTYvU1Lw9k1V7W5pd3bF3LSaxsJKaKqxCEHTQazN",
  "key26": "5g8XAg4mh8JiG74NRJEufN7rSWSPumbb47WGbvezaNz5FskrcEav67CzUdfpGR5GchSGENeYvKKDXre5jbj5fGLG",
  "key27": "3QHMka9671s2MtUmmcJanwNp9oM4U9rN3ofuPcN9hfaowT32sqdPmHCrUziz5dTcfXCQKdk6BDye736bQ6gcGrrr",
  "key28": "3JQ5g24p7VtxnLtuMP3BQrC63wKFP1oSJV3FH5At1Qzyx1H6v4VLFYRK6DAcN84UVDppN9Jhjo6fg1oZhmsBiw3x",
  "key29": "4crgD4Vmg8ygwa9Dt2JStcCnAFi2F1iN9uYh11uXLBbdLvNJKURY3t3T5qEobwgS81WDDcpKvXShn1Yc5GQoxq53",
  "key30": "27Yw8NuAwo7mR1dwAyGmFj1V71VnyvczqcyofinxDYmr79LPHcttpM9PaR4MSpLbD7ev5QCB7gTeyFULgYwkAaYG",
  "key31": "7Xn3Lq1GLRnUK745fNTNaSeBJqgWhRkmTWSV9F9fCKyCHmNuQpadqN2LydVpTRcq5TPZeNs5t8aJj4rNFFgdwX9",
  "key32": "5VDgfAmA9mrGR8zwk6xcGJ8q5TE3wLrVVi5yV4Nn565UGfWPZY9wUoCYfTfLky4CgP9ANx2U5BXJJ1uPWTSbULnL",
  "key33": "3UXGhq2nNd5DhGbYLR96AUE7dRMhf8FjHhU5EWA2xibUZUbwJ5KkEBMz4GRwDA9eDjYDHr9jWV6a5rqvNG8gYkiz",
  "key34": "axgKXkVxSFpGZSXpJTicBDxGBNvfuRbQfLLJADNnjWEy5KmkKztNqXDVyBFjRBXryZN2UsgxpGbif1JH6TvwqcU",
  "key35": "2dfpZifJBDjJ8FNXhkoKsUk672cfJcFEEXLqzWpdu6t1x2k9psry31DcHSbVbubr1KgcyaEYaRLx3b8N3tSSvEMG",
  "key36": "2KNP2AnZNJV5ZK17KbFmMQXu5ksCUSxUV1Ypz5QtLGNkT7SxnbzNBF2TmAKStiybewjYRYcADABxDAhgnVxB5h1b",
  "key37": "2ioapX7BbAyk5YUCWLa1zRDfHnefSyxC3Wkpo9c2Uumr28juSY3ZL3JskyQGV9Vi3aSZu9hyd7vqWAQv6u6wCZQG",
  "key38": "3fDbvaBvWUaCsUzzysvMaoWekD7QYL1YKpKqUbsbVPCg9jLf6KA1kuabkuYExPRpXe8sgKD7UwCBBctUtV7vNQGu",
  "key39": "i7Gu3szzUZJHD9xhHJV35Qv4tFF5gdFg2rbtV1Pm6B7uEstUXvnTXrbySnSkPF9Xzr6LGRzxuaqb1DdUdwSZEnh",
  "key40": "4Av2525ZituUkCCh7h6WQ6mnkusmTxhcUTy8gvNmoNrfCJksaLfGKQfQ8tutaebi1vxSwTk9RwusSrzpSFyEcQvU",
  "key41": "41TMQ1EMQhfLt4cucp13jioXKiDsbA2VUeyqb9d4evmgNXTkQt1WjxHPTiU8PD5R7rZTGevCT55PBtfDSrLVweVS",
  "key42": "3XeTrAptydrTSpupPdmbvGTuZL7WZ4YmsWgm1mU9FsaB8zoS7FSkvEFgu6xiF631PpTDu2xbZKzasgahXAAawr3w",
  "key43": "3Fnxio3LYFSu8mS59RyFrwoSMEi46Qzds4dgkFR67f2x8Ftu8hRX54z1mdXDnx6qPnDpwoKdhfevXsrDDQC9NM8F",
  "key44": "5QEyXLNySxq4rPYotMg3RkVZZcUzmkFFrfRtJRsgLbLYwzq6YMkG3XV1MgXxvKAvvYFD2AUo2Ha5cv27neLk7Y6x",
  "key45": "2y2k4mVQ4HGbzxYiTqEFLkWCc73FWLF71adgbE8uP3qUjH5EHa9DjtkxY1txCsnaTrH6dLUv81ZwoncAopZxfe8S",
  "key46": "3Cc48edvWhReEi6yaNv4T6ogpgPTNsR3pprp7pNLsaA6N1vaLfn51iwMtYRvh1ofGeYcG2MEqjeRpYGjexMWs72a",
  "key47": "2Q2EieJFdz4Z9t4SyGkYSYwkegi31kAGzGvYUtpoiuKX6bf9mhLbgrfMsDr4SJzz6t1UqwqQFej8vEaoKLaQYqJQ",
  "key48": "4AVsKjMSffXnRqq5pc5csoTFNDs2tFs62m2RvTYbge1f8P7o89oLwnPmnJPMDss6595KB6nMUsBbC9pKDe8LkF17"
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
