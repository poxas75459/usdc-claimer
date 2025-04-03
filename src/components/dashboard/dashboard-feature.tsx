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
    "QKgRqejYPtRRGSanN3JSVRaZ92zZJZCG8U4u4H8ZvG7PEWdggmuUjduQ4L5VSmqxVDApw2EkGJQqZcdXpdab4mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cw3T8S54D9aCWzupDQ4rrCxBTy7Tqqvu6TaDcBNa6iwPnCbNSeqLHLbty1gCSQLKTsD3VgHCXHHZGWYgDmJJo3G",
  "key1": "5UDhv6EVzdB72686jjtGdYdQJC1hhoGi6q68NjTjLPrCqw8xeois7WzmrKdxH5sni3ZWXM5Jzk1iXGwjJ4B2awU4",
  "key2": "5RgTYgD12A9rpy5Eb4bSYLfaW6wc7Qp6sXh4CpYDW31vFdnyoe3rCK46gMN6VPBxdforeR3u5fq6GoZgAFvS3n9d",
  "key3": "4KZuDA5bibzo8ffYaV33GAMcogEdCpYpADmLXkbi1HhNqYrS7iZ13cF7vKeBGnk1vPRA2irR1NqNZFkeaqsXgBeK",
  "key4": "84WF533xgrFeKzHqncYisZxp7zFzUvLueQWCuJaNXVYEKwcgJf213wupav9c3fvPFDgMksB7GNAPBq8FH5s3kdq",
  "key5": "5hwb1QcnyCSsu22vSss66pP3nWvQpRETuzeKbweNLpyPhZB9zBgMLhccwsNWiupXymAA1wrsrtZd8KPvpd3tjBpe",
  "key6": "5thX2ix3bjyXH6YeBJivcwYcSydhGa6ZF1PDo77ovF812vELY6NxZTUv7Ppjui3yi8mjiRFsDF7y2r3j1xZWCvXz",
  "key7": "2s1JzNQizkeYEqcuQoyRfdi2krwAo7vg1etuCsKYfVUr9o1Nt7a68JBUtAcxHVWrFN7fv5Bo7aSe9UVFCtbe4i5w",
  "key8": "2ZGncWbWpUqD8tf8isK96bnYhEgECAAujUFJFCQaxYT1NmcfoZbqBhe7bh33RqE6wujwuirAR8vYwsBbsjG6gt8u",
  "key9": "9HStLREK2EowFCAmQ6RjUM9k7dDNzLKpQtyzBmNyADhpQPoXgZuhXowehLBXFN1HdggWHSzSw8FJt6vxaKddUBC",
  "key10": "4Tky264QacegQUJbGvKQcEzNgKz1UoVd51s6BVAT84P79Pa7HK4RqSQ9XVEBM55sdYeXZCsAVqCzq1nMRvx9vqki",
  "key11": "4xwfWCsaPs13xwuJEX3VJBAAjAfWKnAmgt3zdALvn9sdN3Fwznf32jnTGQtPdvhfNJZMYp4STmvJjDdvgHzGhEup",
  "key12": "2oQKS4jWFRsJYUMJ9JNgYd92no86T5UbbZxF5x5LvX7xormZYiMMZvwNSgrpshS7iSKsrNwTK7nx8wjQ6qDRgZQY",
  "key13": "5qTGVVUZdHadRXxSTAY8ce1hGebgVRkQeQF6MgSaV3g44bZPLPpcdr3Wo56P8SSR56ekLMaoAnbumFYR7PzUhk3P",
  "key14": "atUXboGWttnoqFqpCSLif99aFEmMf2BasFcy4DruWUQHdjWmGvGD3vREdjjMCqBTGZn8Pdh72cQd63TarR8kKPi",
  "key15": "5uejYVndXFiESM4RWCAVSqeXPt6Xp5Y3uY8ogjt2AU2UVUaFk2V9S4M4ci7AwDnnCySUB8o9ocKU1TgtTDSVVRDm",
  "key16": "MwHsyivJi4GB6oCDNMJiaE3GV58aVM7fSnxvERegd6cNSkhMqz6BSZXuB26zsinT3XrzgLkyhMFGJCDKU72nJre",
  "key17": "59Ew4JMhPLEHrUCwvGUPb68nGfvsnt4mpk3P9ttkvUmXXJjYtvh18ZRfnyMGLS5hFAzsJh6zGLJQ3j79DmE39pgF",
  "key18": "2PBgpwBPd4SALXMk4KFuq23YuDFUeVxW53Aq7vyg796WYN1uL93SdtfXA5aeGo3ChMcrLJVGTAaWh9ohfoH5CV5E",
  "key19": "3nCnsZGqWnEqDDUewqQBajdW1auUWNWT4pbFdBNoidPnQgftdQsTjUnzSaqzG3Y7942owASordB8WN4UqP9FyuFX",
  "key20": "36THtknQHwEZcYdikKAmqpEiAeHbK4rea2yWFZp36YZNhJLJfsNWQTheNNKNeBqknB5gbTwu1pjL8Rf6WcmXo9YP",
  "key21": "5AHaAd2YJAoAYTkijU1iErFMuCjWHfut9iFGpSgzmzx4NoNJL55LEFRTq5KhQQnDbcoQkSUXoftfnoPMhnPwXZDq",
  "key22": "3JoWcvMuydgqGDXvyGegftW9Be4XCnDBHitfdWpqD2oYh3WnL2UF4nePg75R1UwygEbcqwqcDDAavKCUxYV8xVR8",
  "key23": "463CVobWh6FZaM2g4GK4NFzuEHMJtzwQM63u1z3btbXmgTYvRVPWiaFUHBuyYeitGbCxmfbYSJkSuMD99UgvZsWc",
  "key24": "xQ5K2wid7ZY4eWJgQLrX2vo1PXo2jde5s1zdKYx5aWvNkEVUYjeMArd5DTGnVwqUKS9PJCsvDjWngVcaPJ7GCQy",
  "key25": "5Gc2WCsgCufe7jPAJqaRbvdKRAfS8x71SpZcLnhUxDVNVSQwdJ2cj9rgGsg93rLuwsy3TqWUihBwGGdc2PWH8yJv",
  "key26": "3t4VnsAyPNN8cRUpxNHHiYWCTdzYw9DJ6bTvUQvZenu7o5eYTy66de6q4kqwMe7HModk88JdYkEHGSSDYsxvadbd",
  "key27": "5571HHPQkYHLCGreh5vfTFKc3C5iie4pv5JHWAZF3SUhcFna8zY28EF4xmUMnxKJy9Hc1DVZxaoy3YjhTQTSbNFK",
  "key28": "kHEnWUSomXvd4ve2KKgBpb8BpumDdVD3bVRsaRJM2EoAt7ujTfaLc2bvZXi4BisA21QtiYzb2qQ5tK2eAchoa91",
  "key29": "128zvfgGLXdPLjBxAfYqai9kvnwa2gX95HKSczRKhq9nAq6zgHRHeAAatQNazcQAg8GZkddWBKsPrbrTTd6ivGu4",
  "key30": "5ZjfLCzy7ogHuC3tMrJWCRJuqua9jhUGapdnaiMKRv7NYys4ZSFA43r2EZivzjsM5vVnTAjVN15koaXZqnteVTNx",
  "key31": "4iJVoWPfbLDk4pq6GgMfB1SC3Xw9E4k485WgSbRH5nKPMtrXPqxAZ8QQraWk5eTXAXCUcxXPBEuF4HTSC5HEPqt7",
  "key32": "5RCaaYPcCHxtsm4s5Rau5HdfoVA6jNN4pZfUTUmF95kyQfW1E4Md8yfwt1JSxdUZe5Hvmp72r5pc8isRiqCoso9h",
  "key33": "D5JDyFxLi6hxds1A7marL4PF5SodMxPUh5s8efxn63nVr8GafuqX7N9eBH2nBD1g4L4WLNAEpQfvzogV1iAHTPB",
  "key34": "5JeDAvpRki14oCH7xgBZAhMtZWABrQns7LMKEYNurkr48krhbikAqKTMypppU9q8RhLTGhqwvx5zoxWK8TLTVipN",
  "key35": "5ZfsEe5gWHhdD2javdsWLVHphVr3yoydM9bEkUV7pYzc7ASuUNWat2rVm4jRXPEhgQUkohJue7cGyvSTxYNpYFrd",
  "key36": "4dUdkye6giCxGXjEcqYWAfqDddhn8cNqLGE9haWZCEnHEBqNa2CtDsTwP1GLCGdUTNtv4sjZnP4ZZyphhGQSwt5P",
  "key37": "QSsQSgeeETaVp6rAxaqNzEsdNid14BY6BVM34W2Wt8f3ePXf6HhaGhrVXTziEEZV68LtHbF5vYr9t9GFyM3awRC",
  "key38": "3W7DMcwLchcNGHSXiYRKvo5oaBCJBo3nrnvJWdTfoktzcJpiTxDKmHEa2MuF8FiVAhUZcozYJPLioJ1oyRbRtf69"
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
