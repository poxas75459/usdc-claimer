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
    "3eDbUxRn4bnBe8foXcTBWBL63wgF1t69gQk51V5hSZ3ESrgFquNLXEFd75L9AXkbxWU5xWbEqqBaee7aRdiyZmou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSpazm2dGzy3DoR3g3pNNFSFQbCu9Kk9RDsjPh2k9CGFTiuyQG86ff3hZfdeCFgLjYuPwUnwNEbncioLiKrjDY1",
  "key1": "4PB3JkPct6NTcV58urrZzJsFFnjzSe1zJxbe4zzrnrouiFQS18prGiACXuK81vZGDkM6cpQs8eByzAkJhzFod4bg",
  "key2": "ZKhF7u45hyxDiaPtGsVjgQFczjp8WNvLgRhTCareWNLwFGvFwdQnTJCsa6PXYozJMncpVH4oVw9qQJRAqAMFoUj",
  "key3": "41cPpr75xhfY1mkQVnfdmRXoELhd4EC96jC3k5hveSG23BjVa1KuStXXcHSP9PuvmtY36XXQnC2YeNZHNFBiZKT3",
  "key4": "5ZuEW7op6jwXd6ww9a6a4K4a7LyL33seNE3KNA2PQtHkXZAtadRTRnQfHqr9e4iWQFwby9bUj4nLXZZyW9eimuPN",
  "key5": "3igtsZM5xdYTS6m2CYsLx2iZmndBhrDEjbNEWZVNyhxkbMzGRKxmQRKPMBF5NrqQ35EWWTwuL3VSg3P4HKmARaL2",
  "key6": "67iEtn2ovym6uhb61ZWBUo66niLAGRk5ZXVxm6wwTYv9QkHhwYYehvwMgEfCgyZuciLxzL5Gy6rqdxmvw3odmVv5",
  "key7": "4JqFZcWMyCohwb8mdB47L9fyT9zVDm9PYN5wDVwD8ZHZXKzp2yqc4j2o8a7Hu22VPpSLLU9FaqBJWmbP7oQD3wKq",
  "key8": "2FfDwu91izqDx22yBF6D6wMrgy2k71pocL3RKRpyvDTeNVrj4SCoGTsDUR69E39CUAGQqv3WfS435JeCMpqrQP59",
  "key9": "7kaNznKujbJfqtD3PKHLmTmmBXmrG9bdwuKM8p61GiUVzYTfnHo3g51FpZ51YedJb9pBR4SEStvDqcj3tjAEzjr",
  "key10": "41WE5VdM2maTFZxzZyQnEDqzjnZ4eKbbj58nP3CjCHb2LdVAPNktBwVfDnsdPGx6ntYabLxqSb1cioKS25UetwPQ",
  "key11": "614A1hcijVQFWmBwyj3Zgkxu8NT3EzbksXAnrD1J8Q2aCm9qu2NM6okYAL4yz6hSUkadmnhUMwpKgat2nPE4jx52",
  "key12": "gC4iyRBWZC86rtAs6G6ihMhwaZF5sTe3KmZZeqV5UPaFwMSBzEaE3SyUnLkbyjq51J5pvCqsQnJLNWa8VZah7Nv",
  "key13": "5KviceFizbpjy4naVDu3Xk4P58zPDoWrNeukSxpp3c7RZLx8Y5r3JCXf9RCZ6ouocQPFKBy5oGyrgJ5TiLgnzbfH",
  "key14": "49R8DjGd3ZaRj64X8LPSHrfzyX6YoRqTS3McXXCnXPJwKz5SCfjuomnufUrSYDu8bQS7FgLGP7F9j7GUyzQczYc8",
  "key15": "Bt8JE8SiupLfYkx2FCQ4RMaHwrSSPXKqM88AwNWbgMvJ7x4qrBtmpbmyWPz8ZbHx9sx22DvkNAJm5Z3oKaLStvv",
  "key16": "3NCDrsdTWdteZrHivxs7aj1M5GzLSYAGULfVi1eLv8mNjNepYPcbwCktWety6mCL5pXihhqHpik7cbAUvid2nojR",
  "key17": "WS3cAEGUaogKX6F1SXEkfogAz3tv7PxvPUbyPDvaYMb6XzjXSuKQGLuVUaL6XE74GBDwMdxXveXfsWG7xs1jnBP",
  "key18": "28RvMELP8y6ztQFn5rSUnGTJH7zaRrQY1rbHtvd8DPZWKvwZM9SX7ikiUfL4SCi4h3BqFj6UB6BPwmVpbnDuFdFL",
  "key19": "4owKKKX6ufYj9jBVmMje721kEPiMhYya8FeCQvQhbHmZX1hsFwJRmvoihGA2YYKgxSti8FJbt3eJeWaJA6odN5qb",
  "key20": "4ehR1iaQVN4BzE8Q7nkDtbPD9eU4qvKRuKWbByTFbVwQ7o55g9khcj2RDnhY4eDJUSb5RByPEdUD3pZ9mJJoQeCt",
  "key21": "5c3bT9oUer7DmUwUJm1eLJSJuQNXXFiD7WpKd1tQr4En2oEiUTx8PmV7Ug1iPctBSNuj7LE4HX2LCYamY6JrxJ6R",
  "key22": "5mv35UtZzfCPFJSNNoPtsqFLvmy91NRTuYQH5egK9GvguCaTbNiqXtkR5SS7QtQoYuty9drXbYQPjke9N2J6882K",
  "key23": "55rkdUHzGrKe6p1xcpusofQRRV7KxPaP9zYdXDiWKcUwCKexVPHJwLUYJuMhDEGUAR6c41LgjuvCfxUm4hYtxN7E",
  "key24": "3cRSWHgs4JbfRd75DADuZb44CCJXjQLfs6FSSWSNGuVq7WzU5tJVRi8Wx6eRmY9fmjvMLC3pzfpyzoQ3f2x92h9D",
  "key25": "4Mc75xWNFFmmxGbjJk6KcwiEUQkv8CXskRDbRnaGRQpedrSJUNZP71KbfpzKKwSg1buGMAXyfSDfzRz8UGx5ZCGs",
  "key26": "4qifY6EBMhtoGCs4T3YyGEW1hKnnzoM4XXqsU8to6Y3zjnqWFWgDUnYXerC6sCc6agMyqQmpBXfVkZ3KWn1vKJZe",
  "key27": "4m1y3wsxv5mshY5ygWJcNC2zLJWTdgDYo9ddKAEbvX4eHF4pC3W2oPmzxkNxqdv8hjo3pxPNjw6VcFjtHyRp6K79",
  "key28": "33mXNEP1WsyqQWm3evg8njcMSx4g7XgHKt7kqoeGwDLMVi8e6bz9vf1ZxJVWmdsebBMcynjdokHwGQWLVwsQUuh6",
  "key29": "2gyD57t6oBsmP7GW28jJ8wTPMLkWsFgpY1dC3nT97i5A3XwicmmWbgrzGGqarEdVEtwjnRkb3LL2aiXiYBMskdru",
  "key30": "3H9WCUXwXeqJTM6KDtC159LFtD8MoD9fmJbWtu7fcShq5R4izray5wKWvGGy1T9cebLCH8U8EqZkbuGeoC8gQYT2",
  "key31": "DV3XDnTjPs7HhqFhHmpqARZmvCCjytsbFEVBFhDiagy1Eyo5Lp5pcLa1i8jB7ktQwY2hnjFX3ACCzzSL9edZans",
  "key32": "5fGEY3Qcgax3EaqnDn4vfmaVZcpYoaP3FDsfoiWDtKQNvXepghujLqTM51amUoQGxFiC9hwHJ8Ty2EwWofDQmZCN",
  "key33": "2pm4MoSrz6aR9ZHryEhfcUNUpFhAKHHbsTf5NubmQfwSkfRzsTiaUA1MbyW5PDvbAD4YwhDG88E1RPwNbqXQWSJv",
  "key34": "2g2Qmf9wXkE1zY6odXaMZ6FVSjhBKkoNVXj74vFFALNzh6JHgbNh1ueWrGWjKU4ZD9DkwhLqc44n8fmgoRBJwsDf",
  "key35": "4xzA9wApXKTyqdYURvDVAqxazBmQCvDBUigdRAAadxcD6qFmrXV7cqJYiDfh2hxHSSxvad6WuFir2FCXwhXf6Zxw"
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
