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
    "2dnyw5RCvyMEohTgVzSEnbxQYZoMSVYGhmQz6q3WdF6dwa4SmsGjmMA6Bp5SZ5vH1qCGy7f7LHisqMzsABdMKYLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44eH67pikDJ3LJsWe2TYe7YMKkL2s4L9Jb7XXgtRiZJJpWqzyvHKx48ofPvKrK8envv8FRpgcRX9UedzzeTB3ciW",
  "key1": "34dnnBvjx6CWEQSC7zQ3EKWFvHHTo8reMugiRhb72tHmVL4hK7AWUtH4kUPFf4Yw2BYmRELVLgzG5Z8B78NoVTc8",
  "key2": "52kZte42Pnnv4XqPrcQDSrGaHxnxNiNKNT7UdVuFttrayvmPu6MUFsdV8srECFJEjcEhj6JTT5mmQUrndC8PK2aL",
  "key3": "2FtGqnMp7DZjVqRz63PTLqSLMcP7zDYiAFaDvE4VWG6Eu9xNGWdCsEeVeif2EtMXKQBMLgXPYd65zNTtFPGs2CpV",
  "key4": "4zBCe7DKcdFRzHi1x3uU5At3erY3L5qFhrvBvNRD8VF4BmudZ39ojPMHZBf7P2eNVGXy4Fr5mDvESokdnjutm6i3",
  "key5": "5q5xs4rDojWn8KFXFDFTL2y2s28SXsESJGufHnozcVVuFZnjj1GkHqggQeJ2LcpsttSBNT9mnVY41drGMUf8tFqK",
  "key6": "EtiNFeuXvbRTC2WLacBDGv2NUsEm9A59Q143cdztW1ipduypKESd3YrJvGdDHk2PKQi5veqY9iYX1WWjJ1Ktyij",
  "key7": "vPzT2Qmx5KAcnfrqowS5Evr3UEsSRBkrrbR7J6mPvi1Warm9sULQKmnvreUZND5h6XVTBNmppZVa1PBwkNt8VhW",
  "key8": "62yiJFjpryRVmaciHpnzHsaKfT6jsK2Cp3w6BWtEcF7RcFbtREMNhT79f5yH6RRjfW5ykfVDMGbAYbzsEtpYu2mt",
  "key9": "2c8VpmdSt2c8t6myBi7CBckhAbsHquLBjCWdrh2HNL7RYBfk6KCBLjvfuvgsxXGpJPt6pFBiUMGsRbUtocsg2otM",
  "key10": "58LHqxrujTzz7ApVgsU114xPMNzJrgCvorZyURuVifMYCxfAquSKcfX9c4vUQWrcgANFFCHLXFih9d7u19UcSfNU",
  "key11": "32L6mW52aZLCrVHXZNxK5uyXdoB2pNUZ1ouRP8STdob6wCMmtonHEbR6W5KF8steAZFebgUXLiVtWtVWYT4Vqq6Z",
  "key12": "4wyrmKiDkr8huqFWyJWkCAxKoUiJAPDHJJ4fvcF7qc9kBT7yeJaoJw8kMuEgYkKVzVFoTSDD7HmRSFLZbatY4eUE",
  "key13": "28DybV9n4xJ45txTGA5JaBtEN9ePXCqpSZ9Y9DMD9JeAQcbDbj4SMt8MPYNuwTL1Lfgt9JS1anGjuKL8ZNLGSNue",
  "key14": "63GHvfWZbtibMKihnYDcQ53QfxQg2ngDpxuwHk3B92AzvMQ21eEND9mGQmbppBrVXjMXfi76aEH8CeqGLyhP5peb",
  "key15": "3m18UBxsUuf4wJ1u5DPHtrFmUyG7N7jcaC43W71t1S2DVMUvwuqua6oekeJXKPgJBLgZJjPXCCMQN1yRgQrfPEb3",
  "key16": "4ZK86pyWzGWH9Gf5HW6WmRxzTxGDvx8QSZ8ErWbbRebcuBo5wwCWUmLwvmWrhBExqsoNadzaL7kzbvqnxk5Ticss",
  "key17": "2yJptVNCA4bQtKBdYKnwJjxkbYf83uMGcSPFQztn5V3XxWPnLdABhBaHP5cMWLALVLtEyXiWuq74SuksDLeUQ57q",
  "key18": "3fiG1unKPVAS2qyuiGpHHxKKWok57F6fqczFy9dqSMBVxivUxSg2AT67xr6nmDDcgVL625BUb1Jq1vP2QTw5iKZ1",
  "key19": "4DEAvfXCbrZXRjPpMuZZng7LPyEXENtso1YJnr3diTgLBiqZWxuAxQx59x87KaFn4996TAkP75Qmd2tThvikkiR9",
  "key20": "582p7tDiXuAfbVbv8kaDSaMqhzwRq7RmtdLKymbav4gFpxxUReExrxipWhAiQucNT1JbmPg2KsQDgSUjRgMTb4aM",
  "key21": "51kJen1sMs5k3FYs6mX3rEfcoMEeS5jNquE8mGAF7ECVHCz62DDRnTWa5Kwkz1W1hrJqakAwa5uGSK7s2DH8tPo3",
  "key22": "tkUSaGZ3npBbpAGoK3mfKz5uGCCTTrsYGhqHpTiTVU41GYL9G6pkhx5QFTbhRBb8G7CERe9NGvRrrMbWRJkCpQG",
  "key23": "4y2LrpFwCp92t7fr3ocHHnnpJdFhZBTXx7eajJ5s1EizsPetoAwp5SbsHd4vKsohXADANjPGg7V1ZQyRs4ZVNNWX",
  "key24": "5DLNcXtxD9LZLvKtMxezxXLVCCHjN3ZpEFyQEivdRiUNojw1WA3dLXMkvjS6423LimESpp8hSDH9HaYwEu7PWnkE",
  "key25": "2qVr31w7EZhTMjquVzKknt4dRMBS5ujdPWWZCmJ9LeJwoxQxtTSiZzWPSfgstzc9xJxgcRKrYFdgEkVfeWch2tDm",
  "key26": "qfCKhR9V3nbFRo9vavAwaRqn6wDTyefGkZ6dZsMaX1rBqqJTMLagptYGRo3NoTC3sp7iErNHX4e9iuvzv1GH1yH",
  "key27": "3hYaTshku6E9yY6znHYD3RNQCcqh8MsDtmfuzioXM3n74yru45d3j73uwPeEFx1W3tFtZrPCWHW7szYzrMLeEpjc",
  "key28": "4FZ1hjGtARW89Znz1CabWd23NSi76crc7usM5YEgXVgG5zq7JQHhoZxpuHmvEyxrbXJ69NaL8qock72Ep5KHULgR",
  "key29": "xTy1qQgw8qJGTyiXzrRor7xgzmCBkdQ69F1fivimF3kL7bQfrR4rkf5HPW61W9gShxjCwWbS5fXjbb7UcHvNqHA",
  "key30": "5EtdJ82yvgrWA5PcwWUJ28jaqRW9dEBCwF1pkdez4aJbUk89zUY8SmVZrRnvBFfwZdWiG6UpQWnFPEAmRsg4MzfK",
  "key31": "4XmE9wuetYfRoYBDVcnBTPhDXs7VmHADtGzL5fNkCSyVrMjQxxdJhw1VhTQtuAScRtpkqpXEPqE89xPMZdnjy9VS",
  "key32": "h8v5AHyhLJqWqYPZpTWS1aYJthYHZZAA9c6oYAHtWB6zY4r7gxFKmuBsLawnN2kqhZkwkyLnjM5NvVbQmpeM1nr",
  "key33": "64tMsftWZAaB7D6bYQpYZBXLsseF6bfv5RmKWgzEAqZS1oRsEGPjeq9nJVU5VCRcLe3BDpzYB3Aw7cKESECs545j",
  "key34": "4FqSGfSd6Wfjze1Qd515cqSrNja12ZQv92Ewa45YDAA2VmyfhE4fbQEyNL1HFNXMHqVw4ZaajC42JiS9qGk1roaq",
  "key35": "2ndGtSjyPB9JK2Vk5D7YPv5ij1FEHnE6zFnmSeuVGHB5EhEq6pPScYJYRXEpvQpvGVqgcGCBkeE4HZe74BwnSLhJ",
  "key36": "4V74g4y6htyP7UiHeyDbpvxfs46VBeowqhtE5dQJ9pLsGCXQKDwnHBhNEKsPdHgt642eMJeXuRqimwJdRYtDWz4F",
  "key37": "3LpFhkiFR2QZagS329eW4Ck3n6eFwLV1nzSUPUAtgST8FB79ZUvY5Uz5tCyra4cfbspy4RPXkkN7tFXsFWFUi1GX",
  "key38": "2yYXFxAkHRZ11Xx5FWzozJjKPSoCuRuHKa28uAD68Mwyd5uiywDtbTy8fM7MtfQER6LTmqmwUXG2BDGbHC6o9vXP",
  "key39": "wU4fhGJBoCLoAfiHD128NK5eGxDbyYdN9HnUSWeeb8kK5E8waDksuKN7RwtYHGVyS9SsvjgxLLZSnwSLTVSSmLb",
  "key40": "33zJzZjDuV9YR6NKwdP8ek3e5U9mfErcQGKQTsjdq483DjpcfiJQutEE7VoPhnoNKjEF9pJSApAJuk4B2RSoU1zm",
  "key41": "3d5QiAgD1v9xz8ABRCMA6QMzSF1vJo9CRPvhnod6q2t23P6GN7mRpbqUejANaeu4Sb96sf6WtryfgHqHiLYmFkhj",
  "key42": "FbpkxD3nPCKYmZdAGMBkM9gevKEbwdmuXKDHC4VJBc8Gh5r1zye1Soi5hJ2yCEgwihWBFuz1bMcD1wxV8G8mT66",
  "key43": "2h2YQfVyed3wSMXKLEgGMj8FTwf6hcLJ8hDHWum45oDdn8KfQXhXrRq1kt4VwtVjt1C13wsK9BDXgTYBCK6p3fG5",
  "key44": "5SN1FbCf7EGk5Pb66P3vbrKHBEvmgwyjUVUgRaVLnifLaG46mhhdXUN5n9ySanmrtshTDoVqosWQoJmB1zjBzXyt",
  "key45": "67ZRDMa72fk2iPrYNuUdVsKCrbkPw87TzDYXzo65RoiNstPfAfWaL2BJvNsGyCTPiMnS2no7vF8BghWXMyMYt4Cv",
  "key46": "2AZTEsXbgjEGwUsnNEQfpEMvUgACcVG8BhSgRsf13kxL4pdakFUHEm3JnhMiJVDSfzkNpK7i4gipPkfQyvL57mgg",
  "key47": "4TpiVszDdBoUVW92d4X9JA7YRRJEmPRE1Wbeaaxpvn5ydzwUqnS77HcSaiJP5f82nb6Cq7omCMn2uZ7BvB4T2NMq"
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
