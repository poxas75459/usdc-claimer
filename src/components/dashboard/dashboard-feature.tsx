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
    "gq9HAiStBX3pN5XS7jgBk11PxSLLFWheAHWobRg6WNJk9aiL3984m4XPjzT7zFLuXo5vFUXqeYcgFPJL3wWKh7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UtaEXfKmZzu5fWrbKo2NuFEUHC7TYXD4G3zHUqQagqL5m1LvCDiLsKqfuzMmnzXhH5kymJWkehtHrV99w89iooR",
  "key1": "5RxRivRAapKZi6kUCBdLEdGBBoRmuhyfUZWNfebX9cY1UZ25AG6Ckb9YFdZF8dJw5CtkoHDe6wgghHS5azadbGBt",
  "key2": "5jTWVYMLad4Hwy1qEjJ7gHkzMriCzLFdCCDT7TCPAtXqn6WshrspstNtJm47KvCYMdmq9TKWnDeDyfrGB2W4eYtc",
  "key3": "GRFKLR1nQf5B8R1xcBrscY3mjFUPx4jCmxHAk8ULesX8NXGafwRZzy9b3fe5Hh2qHfXzAyBzutCGxLDGXSFTT3H",
  "key4": "3fqJR3xvftujJgrbR3yuvQpooH4YGhdxFJ2W1M6RozLF7MLAudpYon4nFGUzxWEDpCx61uT7ZiaheVAQcQJe21WV",
  "key5": "49LJfsrm4FtC7pV3MMEE6MkssG9jFCgtbYTFJUWFXfUjw2u1bT5J654g2vsvxbxwezYBY3TWaghgF86maJKSKjxm",
  "key6": "ThXgNd5Z45B4yuw41SJhbEJQX1bTWE879qkBNhWKw1JbyXjjk49sVaGM2FmB7uSVimEaSbfPiqN3siMUs2Q4dSZ",
  "key7": "3eceJE4UM7padMtwypFCvZpvJWc8Jox8BDx5SwuK37RkREgT6yzvgj2BjDMoewKozq7PzLnkcUuyjWYm5HQ1dUk3",
  "key8": "3JRbFAPbFsrN679McgvVfE3DuQaMgAQ2ZzV8n7NDVoGQuVu67uSc7Lb3MQXvrQv7woDjE2SvKtxNVniS2pwYboca",
  "key9": "yVH8aff2jzCGoizPdsxoz97F4ooGx94rp26bLEixjoHbzWeT2jnLn4hoZSoDVufbJN2JTYoW7mHwsxWy3dbHRt1",
  "key10": "5UKGse28D2Jkh74gc3rBFFt33J9EbrByzYDSZVjvipMkDHwjNJGdCJRCkVhLxY1NQAvkm1NBC7Q6oXYhqR8ERytC",
  "key11": "4n2deVyJhL6VDRJhbb89GqfxnTVUUcEk3bbbbKXjXX2yJ9Wa5PKqxYgE89rGm8RAtKEuYRDdYYdzZiU7tZUueMC1",
  "key12": "RpiYaouMs4dfRGL3SRYEXaMBNGSAKhyCDnAtgYWegDfTNKrarWEJFKDFydATPRpFHpx1GMUeLQViS7Wmcpc4JNB",
  "key13": "2ER66UmCbzniDtD9P6jjdhjgLabqJ9VU2zHbUgUudnavt4teFbSnG5h3ybbpdu3rPNjwQmq216ynDeCbxuvphAmP",
  "key14": "Zd6BhofczCfqu7n3yrHvwxYttFEAPMvenMEPG7Jkvxhecuo22GKy1QvDqghuGDkEUz86VD7cFS9Qp6eWUwX3MuP",
  "key15": "3kmhBK5pGpvdaWQ8wmfRhj2whoqrFxrKGctjdaYwwHzh6LuPgU5fVbLoM3xLNh4xqqEYrAn8wvshaN4JAZcpR8ck",
  "key16": "2eQr5KbKB4cK72uov8qiv3oBxTFjqMBmCj71SsPuatkXRJxcbQYfr46EXW5kJR64iZVpRJX3WcSeLaBv95EnmFVc",
  "key17": "58E6ZcWGy4a7Jy3CH26PRqNK4gVCD2fxd8GJkA5aepkyX17bDx5UyjYPGbDZ6kQpiynEhF8pdWqgXicazvsLyc2o",
  "key18": "3xyt9K5puSnfWC9EHhoE4b4BxEMgYiHtudgkQzxDUixayk35bLBUpm9HHdq75Aq56uywSZ1yQUBcCoKST3YVjn4n",
  "key19": "5kM4hTy1XvfCnAvDdcHroWJzxVnJgx7fnnYhjqx1TTUKySgzDy1gvGzx7hvnX7X4dJEtasiUgT3HJNpqAXfquMzm",
  "key20": "54g6Xc9gueSMm7BWGkvyT9JY472AifCa3D4myoyTi3mxBPoiVn4cj8f31RZ6cqSEKNSc6QkqMi6fsFj5eKgyZkmJ",
  "key21": "wtWi1LovP75ZCnKZqNGXXkLAmmLTN2BKi11PewDeiqzQGwBruW53c6cgFzNygLHpypTyasWuGAmxi72kxQbTxjS",
  "key22": "5mDPbD2J8A4QQHjnELdNz2EvJpVfSqeRRWSYq3BRuBRWMgxzUHftevDtwGPAPXKnisgaVP3p1aaeQTJUKzD3Cqxc",
  "key23": "JWuKicUCdhmXqCi8vg7RDsioemoResbNVk6QvZSVFvpkX893Gb8xAeVu7puLt6USzM6mM5mD4nL7jeXf1GDX6g5",
  "key24": "5nu3V5n4XrniKZtobwJdqMiBEFtySKZ5TvkUsMYottp2FAqBvhM9g1Jst9LJbhAvtqu1ykYvnRwMypZHuECNq7FW",
  "key25": "58KGSYYhKxTB6Zme7RJCemV9pvYQbnBZRjez54nQiBFkJM65oBiYmwM6ajWf9fRTTY4TYcZAFtGn6uYG1aJrdygq",
  "key26": "2JxxTSCoEDWCMrHjn9Bn86pQmFdgrVmNpTEAd9HtsQMXZ7W1z7tEEhv13xuf3cGPRExbHwhmonJtVCo8zVcctNbb",
  "key27": "4typC6Vkw5W7i62dbxpVqE5Yn7zzLtVhGvyEBgTeYsZitTFWPTe2yUY1caxrmSp2aadSR1VHwYxNTuMcKXDtuZF7",
  "key28": "4BS3iyze3FD9NdUKytmA6Bg1tfcsj4oguVbzUnnEMfAwANeK9rTgQzgrihSGKX5iZY4FyoHiPj9huvntRCrbfoRm",
  "key29": "KxUvuUdgZs2kJX3H9quc1nifrYPojEwC9sjzSkU2tJ4RsjhiLFjXgDDcJptgdX1KBFiwFfz5kXeayeMVQxiWy5n",
  "key30": "5yGHbwCRTomq7zK4UiymWWu3JRAkMyUH57cmEHeSGFZkf2jN876BKEwyEs6gpQNuo33GkHi4tcUt6zmjPkyXUZV",
  "key31": "5oyGv66xBW5qEj5f5HMcWbapzMzRUfPYVp1yL8STXiDFtuASeRxGcTiNbAsMJB6uAg82iu4ReyLdc1btrn3j7yq4",
  "key32": "VX7WAxjC5jm6E8WLKs82hbuYVguQtuZeQuXuXXnPvJZVbB8CfoxzqQQoDJ7XTqiqhN7reZbPyPGygPNM3rtrRi8",
  "key33": "26UaHNedNLRHdhoaD2ssDAbUHcW5YcKcreokFRHhEjoJeferFAkk2618Edsjnrkey4oe97fWjUVxSRQKiEJjsNbS",
  "key34": "64W5su1iM1kEjjCaaZUngD5UWcATYzN6pvcuDtzpofeBy1ozPbB2sPPWZNVeRCN3Mwp1EzUkYxxHzbu5Zqrg1gxK",
  "key35": "2tt4cyBT2dUHwTGrHKj79UB3GoYTMxxAx7oCVGJGj4DRwW4BLnLNX4NvHFdv2ZyoYYi74PHwHFuPwV4pMqd33NTk",
  "key36": "2U75nFCuCBmj7gkUabEf88qSxaJq7jQnsQJsC7kaJyfhA2ZEJNXN6RdZWTjT9EJ1oAq2x1sJxuVJG5SLj4eYwEAo",
  "key37": "HpqQa6ry6vKNMiUSg2LJFAACAQbabuKrwCD2c5Xc1JtUJ6DqbpWMGQFrZZmjfH3AS7KqphyXBHLPwjp8ewcgQqd",
  "key38": "yLAtQCny8PZvrPmMjwEmG5Z16oLsGAaVS4FW51mvDCPgZhSXvC7hNPiFzvCYPpz4YBYaV3bxzmEBDtn1p97Bpmz",
  "key39": "dqeRGNVF7ynG1YNjCjyDtvLh3drCdkQRvbzPZxoQTd75ZGV32BRfVh582PEr5BHsbG5eKfEtGMed8XghEkN7yzR",
  "key40": "2WbKoQufeqChEu6Q5yKSkNAzjod3f9cbAfJcYz9qjBShP69zdXGJomsCgoWcWY5hL8Xfo3izgtXi8NjJ7rNsUPGG",
  "key41": "4i62LebGRGv9YdJMaRh2vYgSdwVryBXjHMNF6p7AYj2E56XnfoE3HnpecDH81FbN348DckSuVXafUhFMYbvvmHhq"
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
