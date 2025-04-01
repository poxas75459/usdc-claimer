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
    "CK5vgPcXzadAxewHMeaLFQqybN6d3h97opEaqKX2pRRWgShsj5nHWZPWY2wsXeAfzdyuFhm5izqGrjoCBDgYvLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dchqGWy7pZfnSxR77LDo3Hjd3kFGQ89M9FLdyy2j1VhWgYEinDDBGVRNf1X6Qz3QYGSkyKgx6t1MfnFSCxZLeBj",
  "key1": "2cjK4oLNzxrM9DFuPWrTWK6TANZ6WrZCfuBVjpqw94RVhipM5H49Ygs869LdiGuoW7aNJz8RfY4KZN2uxAWvq2CZ",
  "key2": "3bDKL1EG7NUPYXz3Kg2JHdCTbhZ7avWZ2Y1HNsm39Jg3pqQpDTCdBxsr6GokYPfu6LjCRaW3P7GHdYVihw4i5yyH",
  "key3": "5DYDoCVsPzu3Uro3uSKsYtGiqqqcejW9deLhRwuhQW3a1VHfkmh2pPBJnfbYeZ9spGAiHVv2zXZnWQ3bKXHykJXw",
  "key4": "2A8AvoYCMswFDyUZRmL47D9WKVqDZEsd8XQ2RwkPnnXTv33QvUuXkddUHWbt5yPq45JRFfkyEzTZzbhvApdtPi4N",
  "key5": "5Lnx3nmvnRDFcup8vPjAyyZbWpUjA6pu4BNbZ6PPGBSxT6SMXMPqasugpNEjhcF95g5Q1APiH8uJrPXUKcWCxYvk",
  "key6": "xcsfJddkUJbAv7PUqA2o8a3feJYf9sPSxD9FSTeYTXbggNTFxiW9xocY9XasXEXjDSxCsQo1ddK1XdNgMMf6d2E",
  "key7": "5suFtLLHHLuifnokuR73gRkESbzxuWF6tsU3o7D41skdfhr8PAX7DKoFLFfLz6UAQ2ZHoSQQXt9ytXrw3gy3qFfC",
  "key8": "DqbteZvZsz8jHwwmZXFqXpn5ZFENiXSSRLhpAaTr3aFAD2akD6PxQHAGZBePaR5Sc1EtD4UyLo3gLDLD81w2d49",
  "key9": "2EzzoRvjiT1wR9Y5ebSLhGtzc8TiEGCPchtdheF49inadRKre5yvXwSnYG6r2TfYPGwZdJVanhxeWeNqGk6X1Cmn",
  "key10": "5uDzCXPHMzS8sLxRMLhZGqj968jYAVTNB8Dfy5AqLVtq7qT9yU4cVYzuCEUqfAw6sJZp5dcFeUGaR55C54JMtXtr",
  "key11": "2bNauxLnSmJXemHj4NCi4qk6ECxrgN3X6rtAJf3cZ1DV8MChxsc9sYPuAsDw6nLEm3xgdcqDddEFQBbETyHkhbBo",
  "key12": "5VPx8iZwrQyboxbMSupXYMixLEVL6g8sZLoZjBcmpUvGBPf5BhQ6u29dopE8xUYMnCjrzKBQaojNbkQoUeiUGrWv",
  "key13": "51EMx62VVubePPCmiuYgSZGtesvSWHx6c2NGqmSp1A8iCRRwSNM8dgMrAsC4YPefRaSxGMcf3HSPQbmzh57G2qr3",
  "key14": "xfqgvJmNsUJBvADgiveUtySPDH2L2AUgEkjwS4az6hrABrdhHpuJjrkUgmgyuEMQekBYxogtsVvno2Ds5oHq3wQ",
  "key15": "2tdQHJvh5ppLCps1ZWAt4pEkSXRCyPsUc37y4EqSQE6uWRzQstWLYxUB27MLp9BQ3CQ9XztffBehKa3aJNLfVF1S",
  "key16": "4KQUzysGdiCDG7QTfDC4X84B1EVqvdoMqtS2v1iXDM9H4qEZQH5JKnhwk4rYo9eQFSDrhFQkXuP6XpLepWTr7ADG",
  "key17": "5XbxRndbzn89HsKwJeG8Ru1ZcUKVw4ts6e2KdE3pLxEAiURoZYMxa2RT2s4xtLv9BMp3NBMHNrdYn57CMGyME162",
  "key18": "4ZpkBRaPJHV7sFuCbyEoVBNGNMUqQr2k2yEeKoTHBecHF7JMeA6t5z9qDztsBirSpdYwg3zFz5oNgPicBHdvJBWR",
  "key19": "2QXNQdELwQsBfcAPWv5CdhqxQSapRrz1sTpW5JvBJ8yJNhVakmcX9XYaBnyTANurxrPmhTNor4gM8rQmhGhU3hk3",
  "key20": "3jnQPMLCCNgnNqPdVNLbxDysQLsvG78N54JPKqHzg2hb7e1vwvhnFbqFtkRM8ycUfU5cEJJB9qX3uGYGibMWedJE",
  "key21": "XgWzKK7Sb8WpA9dunbYNBVJ5vgnr7sSsQFGssHPEERD4ZD1jWfqtV9T5m7AVqJ4Nj8CQ4fwnC2AK13LwueDNeaS",
  "key22": "PvYthZReMEZ7GPFKwJsn4f21SmwGTXFDZabLeb3ghFeqwUKcSw6BSoA6S7rf9VWWR3CoVM1YtefTTZEbWPDTJ9o",
  "key23": "4L82H8XdZ5XmorKe3JouxFRVHTidmKb2dFxijb2TNjMo1YPixDLiwwoecyP1db5oUCMmdUuCrPfhmgFraEcfEJ8Y",
  "key24": "2tux5L6KxuKk2J2hp9MjkTFiTKAJEECEkN9GPzYbMFhjYwXyboWX1qTsv2FmN3pqF4tyns8AF76tJhxD2hd5FuQH",
  "key25": "2iiF8f8JgUvggzNduRmtQSr3gaF6rVeHroAqtUK2T8yeCcD9aNqphSKDMxZjBJubKHqWtVdPyyDT3p3pxwbDexHK",
  "key26": "2y43VKGu4X85ZP7xXYZwuLtTfZzwqJahfb6AeMiHiiPKvQbLhums9VprB1UZ6g6GZg5gq79fk43JQVZT8Zg5hmTu",
  "key27": "55ZxEKdM6CM7sqLUdV3hFGpA4BCy4r1t5P8Xy8hwfeCrerBbpcjt8AwhS1tJpeq9gVQLNdf1h6VVjJvriB8oLsyz",
  "key28": "2vw2RAYAFuwX9PERMT43xNCGjqX55sgnzvfqaEwZKNoLReCRbahFTTR9ZVeFs1KrbFZNMt214f5uYWbNDfk9Sy8N",
  "key29": "33NMokZpYkWKuEb29rx7b5Uj41Le1EKogBsRfhxVDSrAYh4xZn8LT6qJ1AMCXiTssmhRTGNS5atFiJukMiMTitfJ",
  "key30": "5Ha8aj1XwsAe4Dr3HXEH2E3quDYwpYtZZxdS2om6iZjrj6qJ6pD9zExxXrMc3DnFoykXCR681P1qn2X3bXfPy54i",
  "key31": "2vKWvxCPjwn9vieNdMYUz5zkYX8PCAD61BEZkHkCESxTKNXyFkJ8Q2q696u22Cjk6HHJCTD8e94XK8SL2qFcSVWe",
  "key32": "3bvrioysRwepKTsQpz6YzMHLbJSSbR2DTPnZzNK8KDczxmRsT4mwCYPXPotoozCMwb7rdtLStPNsKUyu63dgVcfG",
  "key33": "Mz6uP91kAJWpG784mEZpEFPgRP6aGMz1hH7MXQ6qnekDNvK978bosLZw22dN4ma9UGSCQswd5TkkV289nvLBNbN",
  "key34": "4HxASpaXZPFjhkz8hVx4SKneVVbznZPk5QoPiRefirRcnSD6EAwtn5ZoNpEHRLS9XWUf2r61bCoLJHpFpreNQ3SN",
  "key35": "3rJFLEnyPXo8BG49BsZxDhMrgArMvGLiVhpb5JZ5CGR95v2sMi1P1pC1eX3wrscvXjCE1EvDCcMyehJ1sUyTkJpK",
  "key36": "51iViM7kC6eXFEXHoUQDBmR7A1CiYoLfWuWYycy7JXrnh5MzD1rAe1ooeJYVwvEhPKqtsXspm5hFkHYB6DUjZdAR",
  "key37": "4xHt8eABB6HxcBH4fYiUeypY9QNe1ni6gLvsUEfAFt1rSi3uhGJviPwAe8kGkLWWcAHswtmsAGuPUuPxBr5F6J5z",
  "key38": "63K4iKbu9aqg7WR5TuzA7Bm6F6FYHhkiNnw1CEE9ntd7bg6DTn4RiAewBYuF8M4T3J3nehqhU858T2f14jmaoi43",
  "key39": "4tfW3fBvcXVZtLfNUwbVHrQXi73kBx3GCENEMHhKvvNDNKN3XMFUdB7AaqYwL91ZwFUtuzSC9qfvUQpyLspx3b5K",
  "key40": "2RAc66ASoj7BXPFyz57KY29jVLt2zzs8UrgERb8SPRgsRp62oEHpVXbHvCXLrJ8qgh6FiJvW6L6NY9onEBG8Mxn8",
  "key41": "5h2Jviz4DwdyDCaxrCaqHMQqCNCbAfgyxsvtsPqjHr3SnBRWLeAaCHQQhqo7gfDbwSxJ4YiAsu1HsiLMb9VKDhnn",
  "key42": "24ArBZzywuWXrkFgvCXd5TUtj9vdZGhtWQDUszg5gBU7mn9NEZuvN9FXakaMZKt7RjbdnrdtiAcrv5qydKtaa5vG",
  "key43": "26pa9XzhGf57nUf4wGZne9VhhQ3a6HweMq9rap6RBeHYhMM1b1LQKbjFqVPgqStZq69vsh233yGEveXRu9KP8TQg"
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
