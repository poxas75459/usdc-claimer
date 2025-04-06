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
    "2ZeFc9E8z8ij57xa12pv1o3d18822qKXRBCBLaFgAPT5h9EocabAd9Zp9MQervESPpiCKrUfAVKXfXLip9wS2aJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiqSJgu8Wohgc6hxvy1ptXrRgBwnKjTsfpJf3CexuCv7bVgBDHhQTSztycsNytuk2gLcZM6u4cnzL2tcAFLp6E6",
  "key1": "2CpgDs6VaMzsi66JjuKjesQ6Qg3GB9Fivwt8tMsGAABfjsoaAxJTbVhK5VsstmuV7USEAMAwK7pMvcy1zrBUAPGm",
  "key2": "626QzUhFNkr4ErAaDq2bTFMHuQscPSAp5r45q4mvfaZse4s4JxjtU6jGLMT128rhwGviExCXBAevncRx24rDi6oL",
  "key3": "4sqJKpBkPq5yLJqxUGL5H8k4EV5KU9mRsYh3Au5MbPNdUZxnSjxVWiztA1f4EsHZsZLTzNVU3QyREwEzBJDLfkSU",
  "key4": "2hiwtmKkcUxdEwfRt2ZEsTbRxZMUjwhBFPCpUK662C87d7BfQV3FCY7XnfnaquEVTVArkw4ySn9V51uujtqXYbcE",
  "key5": "5NadtFwMQyeaxFPxRwzhDaQftQvY3FDDNhMn4HiV4j1tBEmxT7NuAUq6EjjY8zPScz7CGBqjNMjjBLnGfUT8pZgf",
  "key6": "5hB4DimRW18oxDVh3iWScSbjXmmKpYbrF4LSjcQEbKaTEKGcZPyCS6L4idpsr4WpTBr22khAukcTEfCmeTEXTo6P",
  "key7": "2fMuGwsHSYc7wqdZHjTvrETwQYaHxQLh51j7WgutCwkMsa1XU1djUES7jefMHffzpEH54E6AHbrnbg9P2MDa6DDm",
  "key8": "4GSDs8sBFysVHZgguqvMWf2HGHpXHF87GmYjvqRivV4WNeaEssRNWxF4HKG3QX73DUx7ehgfnXYCTPR6nPkVAJNR",
  "key9": "5EdPJWKpvEFkqMtJGcpn6LytTcyzZZmeb1qvU1UyNUwyW6bvP6L9Z8Uid7i71UZfGdsNTFwQnfcbWJbJuSiCgSPe",
  "key10": "5Nn8eb7ByEuvHY9ii74wsarKUhqvrHFzm1LLfkRJY4tzHQaUvUcVpbRTx1nu3z8raDpGveczZwKBnU5pbHkFj1iM",
  "key11": "36BHFFvwTpr5X3fEi9PWRoujqP6Yx26JGkrXqAC7TyEZrVqn9QocrDfghYZ3EHi5G7JfPB4Ka87g8zmzVMDm326P",
  "key12": "4mwxAho1GTsVfH3DHFLsoTGGi8ph8MF9d5yaCNieG23CXY45gdzZB1GCpFe7N9LYF8zo4Qoqo9ZSorhp6iogdHse",
  "key13": "sVER2qt1Lt522nv6TN5ccSYUktajRWutnFukTnzsprFQLZLV5tcQ1habHAqUBXcAEXGhLjjzKtnM4538FVCpEKY",
  "key14": "8hLqoZKCLKCWhwZug3Ypetq1qyK4Bd5k5iwuzJmsaNgLf5VfdGaP4AvDk9z3vUDkgsSWdqazSdJJhFkaPRdpTcQ",
  "key15": "4ttwQC6hYtbocrBJoFjWwR91QtCZPZfGBarh7cRD4sYhKtKjxk79pThSexHXMiV6MYJFL6XqvxWgJFXrZwq42Xhg",
  "key16": "igb172NXrVGTx9jdqBed2bFsNwj7APdtiQPQ4uTCKPZXe1ZmprCogF1LXFyPdbEKEsvpwRsmGeCZGKFcNZvbVGd",
  "key17": "2J1iTh4E4tPbjHseZz2ZZpnGBrEp9a6BzL7Fi5piAe4Jtvj2ukzuKwUEpKy38jzYtiQ4dSJgNMoBTominJKex74V",
  "key18": "8nrDbMhyFquTqxNLFNJdwmXBJu2LWN7wZkYNm5wGc9SxeXNwVPqt7VAcKo5Amm9HLXKSDd3ghLYeW55Be2XC8s3",
  "key19": "Hm2ZAFF8CmA4ytT82rTJV6RyBKSqqhdvkywxkoeSN3vCCPpFopMppYAdaAroAGFQNCWZiYiGoHiuSmV4QG9pKU3",
  "key20": "5qjkPv9YGr27J6p4bhJRoBFHJzo6an6JAmPkN9wchZon4stjxnv7N1KA3wXcYUKUjHXPg5hZZyyacAHG7jMNFcQ2",
  "key21": "5R2nfEsTLiovFUqmDDAAQkfFLHa83UZBSJh4FrDd9pbmMpueCLxBYnszXwiaWs1MHXT5MUQipzHDobfp78XDopLs",
  "key22": "MwZJ599kzunEyRoNq5qjwyJCqRAxURcP69vxpGeDYPFwJwFF8GTom3FN3hbRXDXrJSfLDfakmSuD81d6wQ8jAWs",
  "key23": "5LMBL6pVEYZDhqkcHHXZcVxNbm5xhWTjDjNXedquujFq8xg1YY17vvx9a91ABVmn8aNaixY4WMxJ8mLvGQytZ2eP",
  "key24": "2AgNtLccabeGaCCAMD5fRir6rfB1cEKytUfujCB4wuFiksjMMryA7YYsabJ1o3FYchReNFgq9S9MoGxBM9ZQZK4L",
  "key25": "4XGC2j9vpMWUeS2hAb75CvCmEaQ5uyD4wXdDU6GhPNDsoX1WjfVbAeNtgSKLAkcHJwn8xUE62hzGj2SH3xe2EpR3",
  "key26": "VnYhQ5daPTAYmNY2KPgKxEYAEXMYMhzwmMi7sY2qkuWtdaAnH8jWXDmrfzi3GhpzcUkx3E6pVtU1sfaVbJKEBDH",
  "key27": "3Nh1zjUB3s9oaJnPcRZmBuFnFBLG29eqk2HP68KGpirVKcJLDp2diaceh2HZ6n6k8Mz7uQ4SQ7BA7Q6rBHbF3kbA",
  "key28": "2RFwnCp3P5tuzKow5Gi9gavH6fseriTDHzTh6XWoV7hHHxsiSfnVCbJtxEJh8DBunaD1H685hoZv142QzMEAjTVa",
  "key29": "2SA47NB1wAmdiR57RD9q8761YS7dCyfTwBNxY2hY3ypS3um5x4QHT8VEj9yQXfipocRhUsqSueKJqA3WhBoK5aaR",
  "key30": "3J4QRREewYPqyw8WwefPtAZ54Lg9Mnsj1tvJoyYGE8S428PeMhjrQM2YpWPpHgHARHDP5TBCeBhyxJqTCcdK84y3",
  "key31": "5NpaqLxrvqesJWc4chF2NSZLKEAznTHomfnGZ79CVmBnnDnEWWPng29qeZHHS24Q85kzrFBiS4E3V4JonRgzfdxc",
  "key32": "KRcQjDdBYoe8eFJyEfBKDQaMwcRMW5xgnB6DSnnnBrbssXJEU51CnkCTRuXfEysiUTPbnVvr4NsxqQHEG7uYm4u",
  "key33": "5JBZGtsrAXjLrGnqJ6YySbqTaurnbUni31gYwZYeXeRVbWZqJipUAiXn891pZ2gEzNS5EJXLjxPEK7pd8C3xtgHV",
  "key34": "48iCS5qno56PmhSXMfdux29cTAur76TKUascb3QVF9KwexhvMffok5mbUWXy2t2xthfgELuyh3f7osS4JCd2bNSM",
  "key35": "2iZ7y4vvZ77VECDzQV6AkRuTbGN4chcBnHBsaf47Fz7n47FXPDH2aysP1nhwP2VjvcrqbTcBgXvwxuihAju9uZZJ",
  "key36": "2DpzpoDgBvZQPKmDyAdZRvCQD65dr9yzL8j1fZGkn17kynkpwGQ5vj5BUvEgDdrUTHuULqCR9nMwoAM2RjXJfAuv"
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
