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
    "235x43AKD9ebhJMfNVyGT5mHhxyDMEmwr3UEurD6VxY5DykPyq9AqaYBjq5ixsbZeSfnQAxnm1ibwbb2Bjo6vZHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dXCK4CHMVYRKskpXX8JNKByWUMLb5R1wbaXQtvJNLPpkUyMU5npTpTVq4wEPmb9adtRK8PQFmiACSp19jnYbtdG",
  "key1": "3CQkEmpfjmvhTXipcMhFFV3rDnPgUrniSTtssBXopDULKqxVqNwAHLyVp5YoGvfEqa5BD7YXEp8qZa75dLnXvwC1",
  "key2": "33vbD7BuxyCRWS2TmgZxtAbPfE6PACAYSo1wdht7obqYDUCidbqaMqRXKWuc5iNS6Cj333TaCAtraz1qkLKyrdZJ",
  "key3": "65T1DTjyyhuspePzBN84PZnivKAqMofRs1Z4tbf4A9afV2bZCUtjZZQYadTXBdEs1XFG8XV9rBs8LYWAbPnoLJhX",
  "key4": "4WHgHpf275Qq2W1UUhWQteXiAHiticgQTbrNMhSpWjn6EhRs5TjJLKtvMQrbcHJs2aeS52oLuSmK4XCAwGCqRXuc",
  "key5": "JWCSQ4aLEqvKEcXcWPtt6X9VrnpzWj1CH6RxSYc9w81FnVFSbCpvPhQeSv1pFQDi4Uw7NbeteXCmumFiL7iZzQH",
  "key6": "4vMDrndYWAfyqJfV4gWhnmyGUrdj1gAQGeicTYuGvCD6kpyRfCkDiApvoBxQQm8phe6pijk8ACuKGS4uHRuu7Uw8",
  "key7": "33qtLtq3aSCWotqrv7UqrJbBcPWjPJwrb9UmKYaqiTn6bs1gVNGKhB46WmD3FzRHn6s2YS2AfduPfAeCwpB9yW1H",
  "key8": "48qmNymwEnx2o1EMWFhgGDek8PDctviqJwwY4GR4D7J24By4SaALPWBmVyZjBpeQqC4gsreV4F6KWRGbHYJTChxr",
  "key9": "AjVzF5VwLvtZtBUw8wW9U6kyBR6uCgcnqeEXJ3VnrhRK3o1NPsZ6HBe8Ewqb8Vk2jfEZP9WpzdT9xqnnHSQukGK",
  "key10": "5juzvLFkUwotzYRP3BCTV8WVAJhj2EU9oFEK7D7xi9wx2Eyt8C3D8a94NH1TJABkYBQd5xjuW53DtWDgUGEnce35",
  "key11": "5Jf1bTsqHasFs7zV1yG4GXyczFdVKfFyvvXJJFj3r8uS2PYDpsxDg8kmEBRNq3VJKft84TvX9BdvZwqCrPafnk3n",
  "key12": "AHc4fvut7LennAgE2heHZuErpsuNDv4T6HNgTB5T6t7ZpX3zQZe8QzyhTcT1SdgYcy6o7zjpv3eYrTYhr6ALkSq",
  "key13": "mLA9kYWxSvYnixpTGBf3JzTHz6tdeCeF9sM5EcYYwWZ6zism4vrWwGVbAti4r2sqxWFidCAZWCzoT5EQoLLzThN",
  "key14": "53UWwMKftMAsL8xqqaiG84gWGwfAGVkNag1NrkPsgURwFzcqYTiwYJXyL6bjERLMXkemGu1pSP39Zb8Fd2mGr8AQ",
  "key15": "5dkbCWW7nG6DSrWi2p8U9B8CedhKhqN23Ejs1Fjmj9ttq6mzRP4FKv7mCuer9xHP2dHTbtdhbbdkhUGUb1LGfxwY",
  "key16": "ArWkveQL6tVZEUxRSKsADSgw9ySFsXcdiJEHGte15iBQhUV1XmB3gLa5kSGBaGf69mFvAqt6Li4wX9RU2QrGfBy",
  "key17": "3Qm1wGdM1DNW2FsxzSdssFdrQQPUHPUFwJWeHfVh8qY8nZbhzPgbJEhFTa8qkaKqrRZUejMZk1yp3PxqJ4xUTamo",
  "key18": "35szEQbW4MvkpL6du53UC9rQ5ZmqCLKF8xx6hSAjnsav2jTGAWLVtjsm2uPuRPT2TVuUV5c6eJ8YQ72yaZkCsawu",
  "key19": "2NTCCAWSWF2poTbJfMRukWE4ypwfdysdUGmTDmZVRUdHk3LEn434acKHdpgveWL1cXeT76LfuCtVaHpGv4jg64Bp",
  "key20": "5AWY9ZVNniAEsTymr8mhQ8JPuNkUZ4ECY6uyGQAh9n5Us17SyB6r7uTS5eML34ZjSqwMPx1ZQ7V76sG9BcgCytjo",
  "key21": "3MSTR1KVYoTrTdkUgGXF2RUJtVUxML4Y8i4xp7ZAEzJNPGFk5fqrnyhBBTebvrZxeMZYazvHCA7UNXAxAVU73U7J",
  "key22": "3oXesrULiJECeSUEUdg7t2Ub71fTaBQoVwJevYrLr4sXMMj6otrBPFgcrt1XWGB19kw6MHs5spbvEngPmUHpQjwg",
  "key23": "3qiroUZJNGz68e3yYA1yPhVeTSAEa9mQQs9wyz9BMEhJPHWeqoyhNTTV5uswthGpa54hXvRqLHA4LxKCXMwzxJT3",
  "key24": "5R5TxmJnD24KB4vAtAmwwdytfSNfvaLsZ9ytdytVyNnEURvkLF7x9APxwpBTAd8RJYLqZvGxEJSutLdA3DL2P3NR",
  "key25": "3siTJVK91UDonDwMe9mz6JSc75QqEHqs1LrzG9THkfpxK6y55TEj7RE8iw8WGFMTah7XAMEtNLvNMxRGAc5yS4ip",
  "key26": "5KxCNRs5ogN6Ywk4f2gzip2cpfgyM2omQ6PMPMC68ooe6FDyvS2sqjC3uAbnKDgXoG6sAUaPGVm6YQCkTuYa9HPJ",
  "key27": "58kXxUGgDq8MuQw82NYkv2FR5e5GC3f5Ag2683rEopukBX7FNrLifteoSYdFsrMS8Yb2zy5ejENJYcb7tXsiBBHL",
  "key28": "4Hgbsg7szdj7wg98ndurcGePkqBZiMtF994xhbmenq6TmyfRPxzbHt23aysxfw3XXUPJ6YSppg8CTEjJzzCKbhEy",
  "key29": "2a7U8MLhULkMMjxMTrdxAkYpcpkdiK18WxfgDku8k6zRCs7S9ihGXMdKp5vwqB6iodZQjyxSJ847R2qs4fUfXd7g",
  "key30": "1UmPdXuTQkYd98MBGtGHm3MLAx9NnSch5zxSK5AhpS13hAvjn5J3affNjzVMZiovqGFSJ1MYZ9ybRBK3k9rhX45",
  "key31": "4HduGcMTLhdUYrZ2nMQvaJwkghs1JhTtcbJjnp47cYcTejegBDgJHLbR24jSiKTb8BxZMH7327egmDS7k5pyR8PF",
  "key32": "2JnsJLKNMStQCQjUQCdf5jCDARezswoBTAaAbdSnmaRqSU7SQNrbNcHNb5jPLGXsavLBn3rbm4CqTLwvKeU91duZ",
  "key33": "3xQgqRHRSNV1F9rWwB2ouS6qHz1cnJMpqyRq6z7uCvMMDkbT1o9u3Xt26zZEHFERsDvTZrdWw1Anpy3BoneSMgLP",
  "key34": "3WXHCxGnxhCpw3RZKUZboVauMa6iYvvAW9hizXHUs7oymAuxT1CwCuD6D6PQigbRivGvCjf6JbPVhhuKRaHD4n7D",
  "key35": "4pU17sefS9NHaYxiLCCru8fpaTvU687y2cK5fhnYPHLxM24uSCa8kgQ633LpCyzDgoxWhQY7HEhYgvU4H8UW6GYk",
  "key36": "5Jdpq82zuBZAmhiuBqpScDCevFp96DXM2RdwLpwZg7kZtPhSRQcafW7BVUfBia6bHpCANTg2Bs4RpXWUChRHzRL4",
  "key37": "2hhEJhZfHiNH79rR5LiT5woR9RqaweLR7dNgsgMWErSNe2rXGU1rbQsUnDfDtaZY1pCf6kwpNzAmJrvxC1Gdh4YX",
  "key38": "4eRykHZfkLtbfEYNwiq8p5Cz2vRSGedQvDzyAb9Pkh3jnpej1xhQyKaZpC5a5iXMCPSTPj8VHVnPkDt5RXEGuvgi",
  "key39": "2s3Chz5Vj48rocYDhztZCaoY36v6wtFFwb9AdspTZsuHTEHCyFrukvRujRuSbkKTa5aR6QvnDXDqxhmHzA7ApSF5",
  "key40": "4zD3xN1FGSj1ESjEAh9wB7UfFK3ZGiMFoqgR19SbZ1ssuvhGsFHjHKeksa6DuXmP6Kyf4CshpMtE1sGC6THWp5W6",
  "key41": "Fbnj9SdgmXnqva1xkRWanRP3zPYQtqidobwDyqB9h6Qg2zg38Ke5uQebxprV2SrD8xLgitji545ACmUxT92CZuk",
  "key42": "42x6Vv8wAKfZgV9tEHuVEg2Dw4LDn8oK7JAnpgA87NUpZfqoNZrJp92vBtzs19QTVBWZSTerLQY1DJ2PMPD3Xu2Q",
  "key43": "36WfWG3zEJNdSywaTbsLnucTh5btiDy8NACGB7FU36QBr6kyBNyr6pPGpNEu5MhnHDSqVpKDjFcJHbmGJvQP5Jxg",
  "key44": "3RCDWJixGVcAGPyFkKzA1uwmoGYTCyYcRkGpiTryRqR596RxircJQfEpNP1BUDm4RFY8TgqHU7B7k39zEDVHqtty",
  "key45": "4Q7PmC1jX9YrccomFXu5B7QgenRSCpyNDr1vuTmsTEotNnnFHCKkzFGUVz167d51uNn3sUrtjj6yA2zYangxf3oG",
  "key46": "4PUP4hs7JJo9x1fHvJTLoEvNcKwWMkMWFQLeAwDKimb1VhFKtNZtCteyTW2rkPNXxZ4JcUDYWoZHKzoCGpRW8aT6",
  "key47": "2T4RdC2Y1qW4iRgBGAqmc96HGPgkuaeS3KtC28Hi5CvGVnTkPKLmp7pmnECE8t1Gbf2V3zccW3AvFJuaxx6Hay9p",
  "key48": "3612mN2QNKgJ6oNU4NNHRtj1d3aP4yxMFBqURhmxYVBr42YCPHaBYTKXoM3eFppYe4hSKXeP7Us9LhTxLEHYf7Bh",
  "key49": "3WwBP2f8xio441epGnsEt9f8UEvtvucmaRpMHy1dpgtPaC1cy9rdYJb1wcnFvpbGwHCw1djG3mUGpnw6mNfnn7TA"
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
