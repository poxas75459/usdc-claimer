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
    "3nqkAwh1KAPQ2ehWDAJPNK55kPPzTYWUKpvXq4AzYzWW5ssRvf7xC6aC2zz8soQbGR7xeshzBfGwGeSaNWDQUP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hq9bzq7Yzw5HpTnYiARVPn1Ho5GTRgVM1NnsVTTfmvB2Lw1m6AkveLnS2EgtCgqBaRAQ4J8KkcU7jVtqQwjufcv",
  "key1": "3K4UBaboed24yfaGQNHjGrWzH3ptWEpvGpx9kikxtv9t5A7fPCJiJUfrfeSRkaGLg3VyF1F2tDExNE4niG8p3qMF",
  "key2": "61ZVmpmkM7UFqHTP5ANJ9XntXraXytPc74xKxE9RLR7PY4MCjkXXMS16wPakQ3x8QD3uYk6SrhCBSeQAP6HUAoYK",
  "key3": "64bead3Ls6bP8kgPC86VMHKTZyN3UtxLR2g1wiXpsYF6ZFF8SthTh79gMwCySBNkxgGzRfkkFUXLFnvLEgRG4eoV",
  "key4": "eyV9D9MVUfhnYTSxup1TnP3LbKUr7Ej5XUGY2ygYFKijdDJ35E6wwSrUpheXCRXKZ8Em8N1TN3pRcbmWBEUH4YP",
  "key5": "2seYwZzZGf2ZUzz5jbPHnJGKJwrztLAXFoJr9vAGcwwpPFUzqwK5gfGo3XFkZXVgXc7vicy8DfshPsmX5Ppe4VKg",
  "key6": "edcCV95TTr7HtsQsCtM2JdNE3ENStHk36GniqquQrDD1Rt5qLp5zpaQhUyKtcj61gfxt8Cvdmpkr1JiqFpQiQsr",
  "key7": "5Nm39vRwaCWr6EJzrFo79UTFCdQhSeboz4Z4FJ6eEA1Aay7mujD2kH8dLq57712k2317xAfCjjikBPqQi9Rio2Vg",
  "key8": "5ZfXCJtS6UdZrNBTPVscyoSJoYcEaawB4WFZhahEnemJmNUs3j5mszi8aTdu2d16t3grDTMQ9VLHYLBLcr44rKVU",
  "key9": "4qywZ575RBEQas8wu3JYedMN7XzzsKFbauvGtgGCqRXTDeKvFDuAKFdYW4EeLGQrpLKrm598Mgqye8phJDX6o3qn",
  "key10": "3oQqFyy7VNuGWKJxUEe7r3JEmoGuEncV5s3CuXw744hkUGS8MwNv1NYAFsRENgKQMnB38gmzoWeERYwqkP4PEgxm",
  "key11": "2UHMtJBzb7QAgt8NAj8M9Niv4QGH1h1ziR5ijoXTUuHK1ekDzB142SKc9Wrn4wq3AtWmJNJcaf7WDGp3s8hTeGpY",
  "key12": "35Xy1CaLmXonQUbCTbBNDTboiZ9jt7AobVwh7K9fXUrWQs3EQodWgfVyVD79VaaLXKKso4pJYUUPu7GQVtwU8wrN",
  "key13": "4QGuYVFxcmoN7QpAzfwJxc71Qj9GuCAxS2G2TVyrK7FgKxsdCf1437fpGJRUAZXXL9WRZzxPXXyH8LvxWFRT981H",
  "key14": "4hMvVsirU5kXgdqvXid7bcq6DDgnfvWYyHiwGaawrNhzd9tkuJnkFhJzYMA68Rm74G7WiAwrgV1iPMBRHApMMcM9",
  "key15": "5SbLyh1L4YWreNNP8v8aVxHiXARvU5p1JumnTNxaWmTmZVyVvNVixame2wGVhEE5b9ijNqgz81S6D2SVx5kHVmqu",
  "key16": "4e9pDGXbenF27AENzpFcKF6yhbaLyL2fhnBhhjWMkosHmfftqFzMJMWjN64vpapfUjovn35Z1vgkaY2aBc8CkQhq",
  "key17": "5KyXGvaXRe9qkj72KjctxWUefLVZ5CtHAwtwB6CzUC6i49ELAvixmocd3o6GVfDCKyqYNSJuhcRBtsy6EC3aFTqi",
  "key18": "5jqc4B8EHd7d3yju7FQ2CwHbbDRtRhjRzSHEhML2A8ZnLtQHdiEUgzqvBZFVw4wkRFJSUXpRCLSh6wXjRaXAaKfq",
  "key19": "3fNjt6UCFka4JKvHyHB8ymRicqyS2QhMKzUoQ96CU8H99AA6CPUNDSK5g8HstSqtkNyRQShuGN3uj2t9iFZJEohq",
  "key20": "2Gxdsqefd3fBvmq5dFNoFvvUniwf4aaKecjBG7sLKfmEguXVaGdjTHPRJZuV8sDa6ke6EJwvv9cmEEv3agcW9ce2",
  "key21": "5PhvG2MjDLd4joVAgxm168ebPLe4DJ5buSS6qujB8ma8TAg9Wn5exDdKBH5BMAs6HN4tkAoMM87ZT9bBsKintdcd",
  "key22": "39pn5TZutEGrYLiAd8ai1oFnxYqLp4EwFNaYMB5JNQtPZqTNunVErH72x9mgZ6MxGxTbRSjbbEeBQ9eWeAKFbCVq",
  "key23": "i2WpsD6d9zEy5znvWGtgFg5hA4PXwnGS2x9vwGocKFyvTW4bLLYHis5cVhZmo5ueXGAqszKhwLXJFBhFzZ97LqT",
  "key24": "5Av12NivJFgqPeTBx4PGnjGJqmBFT6S6Euh9LkqiBBLeLtMTKCJpP1qXnLTi2HijSZg5edPXSiSeGGx5754QxNig",
  "key25": "425RisgRjbxuqj834ycT9kq78eLbaiYVzQAYEPqTUXJ2bGkYR8TpETdNiT2EvxJbweG47cndqGYroiGxKWsuNTQ7",
  "key26": "5g7t8RuDhRiN7f5oGdg3SFwHhPFZAvD4Zg9N9Rc3TypUjKu8HKgTBgVkRAcTniidRSosZN26hTLqT23zocXwkSpg",
  "key27": "YKykJhi3hfcvRZSYG2wsva57FSg2inbMakFV54Kz1275Wgee1x4C23rd4Q21KyLMcxg4K3z8qfVVCgJYd18stNq",
  "key28": "57TAaTzRkDvD82Pwfta5MU3jcngt9YYCaC6DSsgo8QpmYsWiC6fZbbXPrxae2Yxx36ZMxzT2rDWwrgEFLCPg3TD1",
  "key29": "2HfZeTZGeyW1nW6669yohqEvqB2zigEn2uKfUb6Pod7gky1MiNSfKx22LyzStTrnj1Yd5bnUuAh61vtzdVFFyvjW",
  "key30": "5AiySodZ5AYBHEUNAAhH3JvA7p1ntfXedrCfst28G91vfG1zW6m8zc1iZLzQgEJykujK9tZcnA9Ux76ifrmkZ1JC",
  "key31": "4uiv21BBCSa66dCzVaCAstx2WXTabZCT7QEDEYyjnU9mVtGfRQYAnXL53q5Rf2LdnyU1Fyv8BvQUmYHy6HnvuWGd",
  "key32": "4P33w1ctPi33Dzdq7YdU2GZJFN1qZoc1TGVAGXsbnjwKNncJ1jpkaBrZct3LYz3HXv97wCsRzav87TXkTQQL4CgP",
  "key33": "4mcf3UftmDeyKCkHjL8FsgqSLrzYSwDMYi1978cn8vtXv8tZShh1zZhpxYX9GMbXEQMVLRNijQJ5qzXNW3kt2Nht",
  "key34": "udqnhRX8d3WjxMTPtyEWna1TY6CcZVMxjgE7qoPdCXNnaZ6q19KmiwkCohf71xN9iUkshvWT7wSpZwgeLnZZJkj"
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
