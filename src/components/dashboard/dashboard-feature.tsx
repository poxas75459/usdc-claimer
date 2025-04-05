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
    "3Kc6PAi4LrSmXhx34PnyttXWey6yeDvB6nwfrbduRqhUJd6CPq95d8659bucyZrGvb8dBPLBJXiJsnWFquEJNUK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWdoW9C2rMyKpXLiR5erkSBHaq44hJ9RikUBPHMNxRV9ESJuMwx4CadXfAgxows2WtQPbjNiHdMRi3apSiVkJkN",
  "key1": "67EYCBCUxm91eN8SBtr6Nf8JWXe8wAjfsnoLmx16z3R32i6stsyCwrqEpiZAvXpuDWjjgZdcg9U5RWLr6Nch9Kiy",
  "key2": "4PTnFSzinWugvDukgoAHPphyeScPYrxNDMQiXdTvCqAt6F7kRECgW4SxEoZsR8hcfNdAUDg7SYRm6FtyCmJDa6VR",
  "key3": "z3QmQaEGoDGETFBLrUG8J6BAw7MoopxbY6X62ZcpDjtzkaZMV6sFBbNgEVyLj73GmMoAt9aMZdivT5nec51ydiG",
  "key4": "5LPqhV2LWVeCZYWxZjkMLHs6PZYNrrK621tPBJHcL1uDkaRu6mGbazD2n2DPJViVk4veExS5jHjyzdZwRAPnPLsP",
  "key5": "4PcjAkoXCXaiaguDCWJqqSXtfoGd9tUjKC7RRfWWCd3m5iv61T3NFmSdLgsoiD8Nm71pHpr7QWJ4sn7CMHhxnLnM",
  "key6": "5KUZiZcDRuh96GcKNpe1gH1fD5ykEYYcfUnG4wKF39a5NnY7iiWEp3Hg6nDaCGPPr4Y2QZs4EvavB5hnZMmXk1PV",
  "key7": "5Kxc78qdx5BxQhqtMkLTmnrwwmb6CkAEmXMGVNaipQEjHnnkqi8mGPB1MvstAQuSSSTEDXyE8ZmMY7WNTbYobfKJ",
  "key8": "V7rVGaadiijVXerrT9kqGN9Lm7jitbsGN2MF7jtKjyzWDuHSmzTwg9F8vnzdCGGi4cixaLbyPgqxBt3Nxdj9CYi",
  "key9": "3cMHpxduJXCDXFFQJ5LQqg7c5w14kR29BnpKRa7JaQFahk92Cx4xJVy5HKDKzrfxYJqEVphxs5Qvh4pCb9LfiJxz",
  "key10": "eBFQGEqc9VApDUbjXSyTkBVpJJ8EWrXCLuueLeQ7PNXCE5M7wGM3mthPCnbnV2dm5mdMGaonnqDLTtNNsxx1ca1",
  "key11": "43bVqukodgso51eYkEUPJwogdoJd2WsHtevAyRxf3YimEqX9Qb1JWadAefWLB6tTUXstLahLaKt3qpn6ZwMXBSzr",
  "key12": "5LbHRn3q3ZhAUQHsKa7XQ6wyDv9SGMQZm1LUzTV5ns4Uh7WYhQk52r3eeUrjXBhV6X9nnMradaXBZwhqdPCpL8ay",
  "key13": "3VcHz35w6WujK8KNYNcBRLPneZQ2EovAhyiDzfbCeAGNXEdEAhr2YGThhMLSLvKgJvTnLfsTRWrz35JXHmP7DoYM",
  "key14": "4WjGapJqRXGdzfuJPNFtMAZjQAg5GcqduJQRM9QmmjoecnoCP8Xryx1WiVfwXH7UF1PKHjrvFnzwETGUsNo6ocf8",
  "key15": "4ENa558BQNAg9R8KME4cY8renN2BaPS1M8oWKu7BcPtmhqkEbTW76hG18Q8JPXk8UMLLgPZhtQfUwLfvCMLqfANw",
  "key16": "4GwYNHPDvAvs8p7fvY4fynw27XAa6phSGXo1BTd1w4qJQfEBA3QUMrf4sXMqkBm7R6QGNVv59c2WNqPugDYDyT4K",
  "key17": "GY41PpuQxzXm9nbC1gGvuG75itRAmTPoT5YeZB1CRJjhqS58kgoj2FB9SgfY1rUYaEX58H1LPDD4J6GGQJFMR5h",
  "key18": "2zNa8e6yKbeemRGtySmL2VvWkvuxLnCv9KAf1hBkzNkmd43hzTJgJ7bjeegpudgxyvjihV4oFQKZp4HRrXrSF64L",
  "key19": "Q46WDjgsJLbop9ydRZSxPXXjAARF294aKEKRV1eQpC4BNQD6D8NrKyr6AxkWkDwxyB34gtgq39f9LEAh92Rs4En",
  "key20": "5PBDoePFyY561DeHou2ambiYESxdgwCbNHg5H3YbboNJQ9t8n7XExAwEHqNwjPSXNPc6dELFpVKYYvRPXP1iupRz",
  "key21": "2cuTHYy9QicRnDH43dcJFRXtG9vef5cdBHHsszMZ4LRhKkNZ4agPpoC6VyeJRJrG3LRKcxxubt1LSLZ65kBaUjnu",
  "key22": "2ue321eeTMF7WuMceLoZfSLv3pTxxSdR8REbfbbuhwBJ6KdjgSMznP6CagFwdux2AsJzifVTsU2W8oeXAYCk2fXv",
  "key23": "Swft68h8Cw1yYHB2jJp32tNHdNKaPc5EdWwKRXictz9m7U7zzYbVK8QjapKdpxLmTT8ZsezL1wqgp3s3hs1oy6t",
  "key24": "4hMWiTQyMKLNfEjWoorJrWx2HyzkNo1otxh199JjysKS6s7KWLnBPic7EGPL1T6oNyTjLkVK27ZtJg91B6nsFuaS",
  "key25": "5bXAxk6Qc93ZMMxv5x1HiAbiFEkZ8MHfm5MGAnro1Zoxw2UgydZkSPH7WwgxxCGrZ3F4AmFkmN2HsJYqR8F1cV2v",
  "key26": "57rEoUDRvbxHjDk9JNAZCNeKYarStn41Mh759JSAA6FLoTJseLRCbn84Lf5rrgQXJAn3oAYZpP7LdQ75f5zzz272",
  "key27": "2udsRxMB3Wr7dfXRnNNi3ZQfuWQftncPs5ruwJFnNb3tbZAKp4KDmdopizUE1uxAcyquVr24zmnKhNG1Tu4Lgecy",
  "key28": "2zyeKAWRZZioCDzy6feGKhjTXokwfbMNTF8URB5Me5vUFBdbaGZtYTKyisC2riVghgW4jbR2tBQeTJrhxyJziVXq",
  "key29": "3WWN8mWp3RvZLZQhDeLyCMRyn6Yjn7ZX3CnajSMuqSGCnh5y1xMM9M7C5JLirscu3V8inz5Yx3HwusP1H1hwHSia",
  "key30": "3JogEhMnZmf3Lr1rLMsW4BQHJAXwAeBqeAx1ZFZFMxGoKVHCXbTrFwMVkKfAheWNznyTBSNDGwg3oVg3ZdBQHBQt",
  "key31": "3rerFaPAbDXsTCQhAXPLeyHdW297K2HnhRSiMUoPbvLRaDUrGdAvjhyXhH553DXgJK8me7NFpDbipMBwWttpPS9y",
  "key32": "4EmWmB792rBBedtWvYLmwjXGUSxSWYjSVWje2pRu2QbTP46AZoa5t1LyvoPtKh5zM3gtzYv5VkenQyawcfLtnkAg",
  "key33": "poPhejN23P59XEXYz7xedoebcsCyXaWP7M75e16pzDpeYH2VgqSuVctq9jHT2zKmz4foVC88wsGMSYnyUtQMyx6",
  "key34": "EuNcUzV42JKckH3669t437UTzU2NExEmbProudBKrwM6deLZoJxLTWbZS9ktnX3Qe24qNhqGP9urNKndmmDs5CJ",
  "key35": "jy1toMqFXyikjwiwkSVTv3diHxKtbx2k8s4FL5wVcQb6oLLu9tUuK1vLf7Bnx3Pa31wUAfWpDrA6Uu7BLXYrRAN",
  "key36": "52bqBYBUzJv9rJ5xWbegcWW9JCouXCrcKkBt45HGZmaZR87irHEGpwhjiJ5WkhqYD1Lojgebf4Rn5PFThdgH6Z6k",
  "key37": "4TLMvynT6N4cA87W3jbnfAqSjVL3qPdvyRa8xKh4AGrerPgw6K6HhPhQaVVSzbC9yjHZuXd86EV7vRSk9n6Nkgz6",
  "key38": "2kn7E25XiXNnCEPcwW1vC5jxSszkbrLxB84mYb923RZUBvyXGcBgQ7yiSCVnEGX553QtwbEpYE36mxjyAhAY7wAa",
  "key39": "p6mwZhX212Q3wdZ3GF6p2QwuCi5oLXteEddWpss6ajXqrMsGhjd3zuiw92e5dYaWGSkUHB8W5dBNZZtPcnvHUXL",
  "key40": "4fEmgxc6hanP2CkSvcAsBWH4LFEwUGJwTQYSpSENRjEiWF1U743eBYUWz4zwhDcHkqKso7iJjE42kcteXxp6jJp8",
  "key41": "3qpsvpm19mMnK3YDYWLTUD43BpNNsV9Mgzrv4GLRbEzhUqYFTVwYTaf4qQAF29PxB6tP2wcL6H8ALy4j1BcFF7sw",
  "key42": "2m8qQGSyk3v97EW9xBcCmB6LnxqwaAGQ2cX2ZYap8JkxGL29UnNGouREeiqxfoQTiQnJfnpXbimVukYxsp3HhfTw",
  "key43": "2YC3uYC52ChowYMzBE4CqzUZ4oW11hhrFx3BVVJ9Y9LWPKhHD2Vm9WEKWZEoCpUcoSg7S3cyvzwnBVukftya9bbi",
  "key44": "5rTcnqNRvCJZ1CMtaDbJbFSkbJwKEkRAAHn3cPFS97CGDCScnkpepf15QXCkGppvPqTfB8PqYHT1sMGf38LBFnun"
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
