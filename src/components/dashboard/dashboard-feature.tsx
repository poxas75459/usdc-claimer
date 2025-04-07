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
    "5ugcGrzcLJf35aXGRwUUtMCsSyAJMdV8rWNCiy116UJ3Nz37RektWYZf7CQACD23ohcNogyrDSVZDGmKTmmFNjmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V478iytvwt66De25dpf4GJP7efqY9oV4PG3UBy7aWZdNuZEoTSH2DH6WeSZZGdyURH3RADyY2pSJMq2v3g1BUcY",
  "key1": "mM59NRvSgR9GQaV8aU2zHsPow8TsdJdoq2NfzYqckiAA9G8n9f3KQbB1D56WkznwKJ7pYcjRAo1Fx8KoKMW3Z4W",
  "key2": "vMNM21Dz1NH27caQKZ1iJTAQhNNTkTkdA1kC1fTCV2jLx2pDxxmes96KSUNx3NbFZ8SEYLqAonTfxtP6pYWRHTB",
  "key3": "3ZFnykFzQ7XBYb3MvgwhQd8VWt1y2X7S6ou9hDvh7U6QNSzD6AYAQU9vWbWfKzGrg1ys4fQz8EDFikuJTSFPWtQX",
  "key4": "5RY7PzdFLU7A3vtRu1MTiDf7paQGPS5gGS6a9o68h4iiRb7ne32ZRWdCPBXyLFPibZGYBzrXWj79AT1mhau2naG8",
  "key5": "gSHtjLBaHBSP2eLEzP1JR6ov4wynirqq9nASGLTnaEaBdSaYzi7jFgDkx8QdwEktG4GcEWYmCHxMkozn8dek9DY",
  "key6": "4uSYLfE83ca1haZtGmCktttrmgL1RPqR7GmPkQ2SWYfkX1CxxVgRinQmRXr6n64qCkobcpQrUahAtdUxWviLPUhQ",
  "key7": "37CNXStUWD63TuwztXNhbtF63BBCvPgi9exZr4g8ZTbDFL8Kdmcq68uSVcaxpiue9GjNKzjDiiPqQM6c3srmR3bT",
  "key8": "5SXri1dZUXBc6MujiU5isFSXcVfDVs6U2yNF8bkWXBNeeRKbZKVSpyDyDF72EXn6U4Pujd1BSggtmvWvx5H1D8CQ",
  "key9": "5LSAmgQJwod4JSo529yZgCwGR29msDbK5iaHUueu7FH3JUrSwQp6xW6bZB5bTg5xxYQ36XsYuixfUesRZ2xMuMc7",
  "key10": "5uwfMFpePuYaXXbttWYsett9EM9sw2YFoY1zNRh1RDgC7aknZcjNVhYfPimBfT9b6GHJ7iEoDWmT1Q49qyKMoRDs",
  "key11": "3Krm7itriyJGqYfy4BXvo83Mz3aBmBYCA1DFS7XfRq2ntgtyieNmAymVFedBUZ2CkEQUkZSPa5ZVbzgip8wADKFM",
  "key12": "66VXm9p5DL4uo3Anhowk68ThApMcWJkqXvrdAnSj7gwRWZZGSCC2ZvwbWWCXULHNDfZFHHE66oSEjaCoYmn48VHW",
  "key13": "EyTVuwZwBJv1aYg6X9VAdZeNTEjyEiDSryDR7VqddMRtJJToJJkC6EUvWwNqckVEmb1k2pByZ6AsxLeFfUgKTsj",
  "key14": "2bjRb2wabtAJK7McwLVyaFmA1tGa1pafQniJLNznMkeDNg2rRqHiesD5fvuK2gmoBmGudzt6hp7xtX4u9UsmyNRm",
  "key15": "bqh9nwznvseHM7gYNtEGLgFRezV1sCf7MDd4xEfcNPx27Dx7W3NEMb7QczUvDjf67owwmY5FzCUq86ShRUKYqmo",
  "key16": "21eJQWLjKT3NuzDFAv5R8sf7Wk1xvPhZkiTT8WaiBbq7JARsy6CZLyy5dv3QqYnYdBATZaZqjaCNkRGT71Bw1Sjm",
  "key17": "y1UNWcUC8nJULAE4XFVKjfaPJSUyTHwaP8XFHE6Xwv61XCqqbo1cmBZCPY7x3Rt2Cx5Q8R8Pofcuo4wsw2f8Hit",
  "key18": "2Dw63D67vGvZt3LBgYfkym6X1kpWv53irzcRbRDy6MMiyvYYoQvDRSDoin97BvkzKtFEebHSjC4xDETbhRFEAdCu",
  "key19": "BJbWMN9wAr1HDBHRKbJzmg8fuqbVCehA88mqiBBqmALF6md7R2ggsfzMC9utievWEsYQYrdmF3LkTEJQrwuwq4f",
  "key20": "5ByNiHpChnXeB7pZp5KsNeusmbaABWYLD6AnPJT9GwXVqCJnMqK5SvF4kRQtqEHKmG59A8Zbc7QfnEueHrFKWFot",
  "key21": "5JT5o3w6YJBM6UrHvzTxiRut4UTZYawvBWjfykYxN5cSebiHe7w2RVRtkzFtXacJkt3G2jYkuy7i7YXTxjbSvps7",
  "key22": "5QvLMqTerQPtfdSoVNz4FcCzaB6HQJsrGbQtEq8GVUb1DVHQK4MBmcwQ9QePED2ie4YgNUD77neCX1kshh41SjAN",
  "key23": "qFY5SYp9qxoKF9b9kXiBp1ERAKsQkzR14MPqErrdbWXJeNXkhDejxC7RD6sNFrh72hpEGCwicCDJF1fpEe2ZKvL",
  "key24": "2eHU2H1draHBYTi6UWpC7QumZ7ij8XTJjN3xZ2naPY1Cx86AhatYmdn8RAW9uyHBFCb71HLcsFQyn8DDCYTZ1SUj",
  "key25": "3MYTZfg38tAVj4Q8P6R2o9kynWpEgQ7kmz3iNsyK2uauq88Ypj1AcuAiPKE25xb7F9Ycxvvc4X2YoHbuA7qjfSfx",
  "key26": "2FNgRPYLsCkwSHnUDQxKd4iGnWXxS9f79zr2p3e2VTX2rbnm8YQmHRbge8R86KiYheioY3HyDS8MyNCPFKLZuygV",
  "key27": "5WZMr4gyVMy1NfiDUbnG7TBu2q6hTyhikLHap5JYkTjKcrNZ9Fwcqrtw9rALJ3GCWpyoenGNApyjJC1aLzaPXK2L",
  "key28": "sf9kiywKjQoqMgJX9dk3z2Nf7jEVVyxr1kD6ANS4Vw2bxvJKU17VZivQp3HKCLRu5sNQmQ28ZeQ9YDdYBi8kvxK",
  "key29": "3bZiquMCYups9fSQGDiKeCfhoNkE8izz3A6mAkNoJYuMDSs5QQ1U9mdQKE3giPh49oYKEqmxdDgVeSBiXWdZUT8M",
  "key30": "5Ad8UmkBi2HZLxERtTNH53T6DDJJAdrTPHrjHmonSGcNGPu7AjZTwnR4heD2AfRL5AkKqB979hKdrz2AspYjcrK6",
  "key31": "2M1x53E8FM3ryJCoNBMxCsPkzg47zLXQV4ZUbFScKzs7RUcYcwhshtyTWRT4PacSPKnDcgT3ntKGsj6t759K3HcC",
  "key32": "2rp7BPW8G9C7CUeG7Ejc1W4PZ6npYgPiRYUcwXxsttJHpUm85W9V8HY6fJRUndwuDYJQ51HgemxeDWGo55GY9sC6",
  "key33": "4hQY71obj2DLDTSh9jXswQPY1nAQYhEwFRdW9fSKJCYPQWqm2BzhYn1VWkd8ra2Tr3Y1FDb4Ux6rLcMzDFpxgPar",
  "key34": "5YqFNDXJtRkKE57oux418sR8b6kBCscwfpM7onUWUNWEN42e7PKKfCaGEmt9gxiH2JG1VHucgcjVccR6UHaBZv6M",
  "key35": "2fGwVYZH7RthavC6ormT3bGzQG3uttejSxBbqrN57MQvqtP86FV4iwJWNfcjCQvXEoxcvC8oiB9WXzK9hKa1dh29",
  "key36": "3LkMApvtLST1D6Jg95mGv9sojSs22ZeG8PjfD1KcwA2Now32nuDfntTdF6NmmuawVCsBR2xsN5zGv6YUVCJE73NY",
  "key37": "xTkNbhAjoZfxMVDrnpiP6AMre3QqqPe5W6bR7wMW2ZGxwKbiGdDoHFuHrmRmXzxonidiuToDXXMzBspio156RSP",
  "key38": "3cWpHoj22jZPNkDv5SGbgxpSuvsgVj6EWmt7hoc1PFwy36C5GFi4iR5NNAzGbPsyLHLsBKfso198KLLFPTKurbNc",
  "key39": "NvCAMryAxWgsarfx9bVk3F3GLnyxis8exQuEL7FjTQuGNnovYzrVQmWTRQXVXbMRDw4TySXFDpWeSB95dazKKam",
  "key40": "5QkNvMuqq8CEQSgHwGThgCWCR275YhV12o4yGnVxviB3xjmqXYWvxbrt473cqVCv7TApnVa8VnJr7qLx6GuDfo9e",
  "key41": "3EZ55fpA6u5sMNxr49Yc6XfChwBLnJH4PHpW5g7aRhgxpjWEMm8nFQBGTVvS3EPRozgfzKQXdkmhmLieQEQucN1h"
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
