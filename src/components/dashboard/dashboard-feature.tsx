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
    "2yJFgrPj5dNJajaR3FhgJb5Yg7acjDwZDRktF8W4SwjJTNvkbetbuz1qyifCuoP47dVivgvZ4y5LR9eRCVzJfFH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbdEC8XEgrrzwn4cPsNgj9ea3UyCC4qqgifh2eaSdaXqKi3sMa6WLbPV6QTm2gDDnFWvuxqGmG86A7q3YXEu9Yu",
  "key1": "xMUJBCemozfjLXzfeaQxKpKwCZUhqBFqh1Fi1BFtoFWw4RTrrqe6ByLE4SwZipePQmxQB2KB6qw7FkuE2DJVwSj",
  "key2": "L2ysEbKETk3yNSM1sWSb287P4cBVN2iG5WRmzjFJsgRBgFEauU5cCp8FMaC6EMu49AyP1qehBeN35yAGxU6vkpV",
  "key3": "5NM5z55tsLbqwMTxrciS1HghcL5p9dJjpNX8QLLyKGBjYvhv4ktBKPCmDgsArSrNsUL4eTqQx1kiBHkpRgM4UBvG",
  "key4": "3GDP56tuakeJXsMFMfjJsgXszjpC4EPHhsUXR7wNQKpVy9aoSNhy2jD6wsVjNV5v8EkoFXQBHAj1dzz6Kh8MKc88",
  "key5": "CHSob2NZ8xCDwbFcP462AJJgVXf2NFLnmF9FLeLtbRcUhA65t24Y7Nhcfo1zEgL4JMN1K8F4589oSEzPeb35H2S",
  "key6": "5sbPyhs6JjiNsxyrtyCJyYsunxBug9Xpge6mWQjULRtLyGdg6xat6ipoj8JG3if8zVz7izsUpiEjW5xaUUTsUvgD",
  "key7": "35C55NsMSxQvhbqVCngQBq3xih8j98sac2czwHD14QS48dkreHFiA9GGiT1MZ8oAqLgEMkfUvr2beapshc8tTZUX",
  "key8": "5AaVBRAniYKakYDtWfkgXTw9xEqBJ1ChMQBwhj1fKNAv8HKXz78eEtk6347vE7u5tFEZEwvgdR16hKEQAoYYeAa5",
  "key9": "2h7D6dNE8syqEZ8iwTtDb5xMuDRTXd2p2fg3YAqmGQsezzYrsgtKvXNYcicru3shmDzbcF5MoNS1UKxhSd2d74f",
  "key10": "3D5FU6EAskX9beEbVzYP5ySyCFwsKo3s6rrqKaxieM28cuMLm2sjfgB9thyJAqhtgSRw8NXxM6VjpgsTDworVuRV",
  "key11": "vWp5eXvLGwg1SodgwzfwU1zaSZjMm9Lzy7AHA1e3sBUC3dJKkPXCm4gRKbNqsvcn8stMk4rarJQ9fZgZLxTjm5S",
  "key12": "3PGBAjRMfj3Yd2kYS9JF8fPXzTwYMMW2uvgaTpS4kMXu7Xx286Da7cgFqewj7n2H5ayuwWMqnokJPPqczpEyzivY",
  "key13": "53tx7QAizSFqzj4r2JaCjjVf8xVdqXgGq2nm8C6Hdwi1VArPcdUBkKhhKTNofHWCexXshMyb9ckwu4hqFLXnWuiT",
  "key14": "3wFDhAnYYDo3NNea3LFCADwh4HxTgfCPZAPeBgYNEsAYju97QEqrFeC2pbnJLafTKxwX8FbSGCqz2YtwC5Vr5hL9",
  "key15": "zEAAJLxc9YbiL9ACW7ACWQgGBezU1DGSgdEsCdvC9G8hnz5mHz54jagHXS6Uvtth4DM4cYzeRwc4R5NaXS8fXRY",
  "key16": "5RvEWmj8z66eo2nysioLS2BGzVj9MNtnanG9h61rbMKGftpSRFrFVNsNBAEfnpvDh3Gm2rDa3FNFHLmSWzyonyca",
  "key17": "356Xe1kvj42bwFT5gcBJ4zFR9mdgUiSSCGeEiN9Y5s22tbRuaJ1QpbzHrMaNMPyQkCQkovaQo7kkHC6bgQkQPQrY",
  "key18": "5bKA9pca2g1ePdA2B4CwpZyXrVYWT7TC5czFFUHgAdP5Bo1yEb8fnU6RskPDbvMMra56B4kmiNiRvVo1LtfwwUk7",
  "key19": "5suzLTR3szC1T5RjAk8Lah7UqK4kF3me94AVgt51yDdhX2LDphsJEgH6MVLFAH2snWoBb1fBsbjm8AcijWFifnkT",
  "key20": "5DRWHnWG7qPYErhxhqnQZ7Pe6373Y3huD3tkDsmmGHwfhNa4RYqrZx2qvrixy9GYJECaThJFq6Uap7caU9Xdyny5",
  "key21": "36FE6xJ7dV89hKw4WYzjNGHNQp6VnBcYgscki37Sx7SThSAgPoGmLdsnjwELvcvW17NeU84SMd2uaRdJKj2daYX1",
  "key22": "5G9JsDAAWgBgcPLev8o65C869TyW9fZzLfGGdAjLxrmxbK8zKZwyoxdvFak5bnodj18EfbiNWP6Ku4QvN5uXrWDw",
  "key23": "4b6aGrQiZZfCJs8pA5oMeQpaUtGDohWRq1cZUEnuXGXARqWQffjoEmJ2WhS7sPfsxgbbZknokhAQPT2Gvc8K4Sqk",
  "key24": "4WXdsG5amhSZgs8o3Gghh8W3rZT8B2V4ixXwiCjDeVD5FN9Tt8PKaGPAZuDrMc1KpMQoiWTr4ri2gvX8t2zT7d69",
  "key25": "4DfTNrNv9UF9Ww4j2QqCZjiy9CJrE22nihiUJF6YMcPzUsfStGaeHjVnvzXvbwB7wjviANGpAYCAhwb5fikK7q3n",
  "key26": "bLwbDwTKCi7UC2Jg9DMdDnMcgZPvHrk1YzoRyMXxY1udngXF1JFdo7aVtuBWzF6yBi3pXaKG8kYVQbHiXeg829n",
  "key27": "5Eq7KuayyVuE4QJyRJnWQ8dy7YZLNxVCnDD5Zio4FuhTt6Qy6FJyuVpbxtCyjbAfTH23C1VHTiMu2BS6mmok11Xr",
  "key28": "sojUa6ijBgcznWhmGXaGyHxnZqzK9cSWHiS2vKg5rt7myoMY7RceXEeBNEHhGRedUfpgWek1e41KvPbEjtzCBF8",
  "key29": "5zjmemm3yK8mZ6tCQDD8EkHoPKqkunyhwmH4xEhma5FuvHhZGHm9wSTeeuK5ne7mjfBfzYTzrjhEJ9Ub4f9CCEeh",
  "key30": "3LYj9BkL7A2Q4ecywj5XQcQXUN3SgSGQ7rJpWTGhssH8pg26BaAnA1a8jWYKpJw1qthdmJF3R6faC2Gyu6VwLFVJ",
  "key31": "4qZwQzkuayv9g4kmiZWzQCDoJX15unLXZMMZsFCpVrUkutJL3P1tDtPfUQTDDZ7kmLawfPRVfUtuiUYebH1cBej5",
  "key32": "SRbwbNPygciJNNrh5cYYjG89aVAx4aZNhxUuFoDCSfgy1kVxmeCmub5Zz6w7v8LkwodHehu2Pxwvpu9AGzVzzbt",
  "key33": "2a6NjJwTuSD4kyK9oAZKuoCyMnT25mksrXXcDH46JZruAcaRwg6rkqmirmKBVpRV3z6VRFXB59ceJaDvsaKnN3Tf",
  "key34": "2fczjDW3SE46idVXivreDTNSykjRuDqLB8CfjvYhko5P2cdTCATUNNaHL16ACzL7NXw749HUJqeEJRRbJ11eHhCs",
  "key35": "2dV2r6bNfbinHbBbhXLjhp8CkRFstRtN5sfEM8xUtFHwDLuvPLcE3NfEF7cYFkoESeVB9xT3HuCkhDt3YSq7fSc5",
  "key36": "4rSZvw5b2hqCtWD66sHVj94GAGYTtECtonD3yy4tWqWnvbjLS3SKeAwdmjE2Xsp4WsLjgbJC99dUmEzUEcXmcBpc",
  "key37": "5nsdrqmHiAQwfbA9ndTN3ps1Byv3MQCVjrRAQuMFkcAvTsKqZybfd6WskZRu54Fece9ia8fWo951ekciWCYkUSK7",
  "key38": "3TCbNHEZRjuxH6EWsvn7hD6Y6CeBwwApyTo89Kdun6t2YZru41sW4uXGa8FJvTvmxMmpKFNJttzY4tP3VkX6LDrw"
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
