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
    "4TKtBVekKSw7oUSs5qLYEAuFy8pVmv8mRWvHGbXJA8UfMeUL1RokbEe9tTqN5FaT4btAADx58svT42gkG5H6MJU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVx8Z37L3BGKYS7fUU87K6XBZRYB4JFwhr7GHZDncntK5sPTkM7Xv1dw9agDpDyF9A13LCTChL2mjmRcFgiRxob",
  "key1": "4HWm5EdqvKTQ7bkpEaxKUF5zq47i8erWTzwjtAU3jH31uZfrWzbmdFdpnshchQjsWypdbCV1efuMSgCDnFz9FZza",
  "key2": "4TPA2MPVJBLvSQPA3o6tZzDU8pHqBgkmSvJ1uSXa7JVSkYevVkmV4GQ3ciBhRXxjfv7f6sHwMxbsQ6qWcjpmze72",
  "key3": "2SwAibYHf2qPnoVmcnv3eXXsDi5edtaqQyKsyffmqBoTu2LLGymtSH2VRBXnsQj9d94dbHgUtLidWvenT8vAYnuH",
  "key4": "37DvFmwsYWxBL8JbgeYznqjns2AaBXuyxnxRHCgoRn2sbv9mPqpQ2HLoj81qzKyuLWxoS6w72jT6HwF2jSksfxDo",
  "key5": "4JCDPtKKdT7oF7DQMLA31bBv6nN79BmRjkhwWoeHBGTVNWJCkC5MtAG3qid6YFHNLEYu8shp6gfPA1quf12nVqZT",
  "key6": "38ej89pHqJLmX5sudvvzJDEujGS7kyhSjEPvyJhSrE5kwdqfcnSA3vx1hw5eZRwZbYbKPcJQ6EWTkzReuf9PDgkp",
  "key7": "4rwhaibxRm4LeDFgD34KQwSntLVKsUeur5d8BPQVSDrivqxk6e7rVWNLvHaYev7Lswc6oxn1wV1Z8aVFGev87gjM",
  "key8": "5fMsjwzb3jrN1SnsBxHKnHydyTWe1ipVMDXsi6KsizWRMPKckXrVfZ2i6eTbRf7VKeBWjssFe3kd7yMkTXaErBwm",
  "key9": "2KC3kqE6YkrYgWZJeeuijSKmmFS5sEhv1kRDJm32BpkK4Hg4brYxDv8DHHJwS6rZNZoRrnt85y2sctjvgQDeSd9L",
  "key10": "5jvHQaDUy3ersZSyr2PUPk5XVLLpErcqJRf3AdMvzVjQ45mrs4vvicg7cbdXrrvtbEEnKHJTNmESL6ioXGy6ZT4a",
  "key11": "5YtY7p1G9Rb155YXDKLStB4rhrjRYt65iQc4Aw3LhEPgT318h4bK2yYFnwcfDBuPqhnndoX35hed6iuDqDpKKuEq",
  "key12": "4bvNQsWWwfXApqBkLjjWUYKKtXdjGRTkcKUsAQNafYd9Ckrif7FsJxQpXr8zcbZ12rGeu8jCxXPkEzB1Mb9UytuK",
  "key13": "3hRg5zNxneaHLTpVqSh8AGVrQ8oMpVcuagrpaBFNt115h5fv4ix3bkkV3icY3Tm9iDdEg1Ku3R9s2zpeeEMN6Wnv",
  "key14": "23fAXfzktw8SXmgpQAWL9yfDBi1DnLJY9e4xjSEdGrxPUf3AMNrwtsYLGaaXMT6V9JShQEGo7FeCuW58uSKwA9Nv",
  "key15": "yem1geb2HLKuoRmowab4PkaNziAwL6nXoiiLyAy1QUGQknYh55iTCbxC1aFwma2enLD22vzZmVJnL2zHyPuC4Ee",
  "key16": "5TZXeLq1oFJbkLoaxqHGcJZ2RUKiazLNxb1Fc2RdM5ZrJhCbWeKtqyC1jXVECgzCh31tNY3Sv6H2KctirBHJtvDK",
  "key17": "2qnz4ZKmJJUsKn7bBFMi1mx7qZZFxWjdbKg8if7KgS1J5JqJovicpeXnFWcsoPrCDFS45pzDTgR78ZnwTdAMS3Yz",
  "key18": "UUJFNT41AHAR9vkRfKDEkDnS99DkWVrc3243h8ett3Dnc9ApWuGxRHEFAbwazQjM2GtJUm494dA9bH8TvtAWdoA",
  "key19": "njVHfa6bebC9AmiLzzht7RtKyxLdV4ByB6Y1eFTestsdL2J9XbKEEC6XZJMwz3MW4jUMjd293KtRdjVN5kUHeny",
  "key20": "4xf281aBZQdGy9RipnSski2nH4ZnzTWtwGc9S3dzg3d4u2skVwerbRJGMXyzivXBsWsFZ4g5qn2x41c7xLUK1twJ",
  "key21": "5RDeVuCcXgVAYTxNPnbSvx41Sbhf33ZNK4surMyj99h99vgmCkm8dufQ81e6GKrMpzVSc4mBXmJpY3fWssTYVzgU",
  "key22": "4RP5uivb27FyBecMCHN4sAGctneE3DYEJWmpFNKMh89dBjYfKvJgvp6ogkw9VFDojqdgQoc8uyk8SHBcJygkXzJU",
  "key23": "3ELgPAh7pdmUtxRV4KFsfFVtuvo2pmpZzVaRh9mHQzdscP4cCw3EJssALHvmxdNPjYeS58eB4bA7hfiBjsDE8QaJ",
  "key24": "fJQqBYwMKMbgecejFu6z9GefhmNQ8sghNMDDVRmwshLh1Qdw8MwnrW6Ys9sx3YvkBGYetM64oDjUfLZGRiLhXCq",
  "key25": "4qMEQtc4J5Qpq4Tiy8g4RzEppzHxiogXV5tMbLQ86rbkvnU25cbTftGTgNWz3BzAo85vAi9KVY63bmhpZc6rhxYm",
  "key26": "3pd1dprQrsC1B6xpy5W8oorxZcBAMmd4BkMPixxKh3j36SttY3YPhZz6CATAUrAZ6xvePCDU1GKLwCnszvY9WNmh",
  "key27": "2hUf3THYSjz8D4HCV5pHBWANGzYW97vMp13vjPNQMQQ8n4d9fP1PYEKAGsxxL4pMcLzLMAV1Aoykb7EaxbQ1EZRd",
  "key28": "3HHQsLqCeD5fEZe7DyQjNGnKzTXeC4atSU7qxGLEYXoLPuFWEosJoM9snsfMYP33ty6x6utRsTaAAKmGyGYxh2hs",
  "key29": "3qq27me21hAAR25o4cfhAwKaHvGvXjW1NqvLejfL5t543oyxSuNgTXaHHVwL2EapDyXG7JcAyof9QZfJku55kHc4",
  "key30": "3fWn4pw3cuiSVffRZvH569CP2XEpAu9g1JfyWWsDt6RzU9ah5i2mwvpKSoCmXHPu8UYyFaz5Xb6gNLMvYDSeHeyt",
  "key31": "2uoRqfZ2Z13REijzapTmgUKpCszwuJebWoQAgjcVnM1uGv5L6NMAg8wThC8HPFRxx13xQi34ZDzRxMBH2Gzo2dfE",
  "key32": "41VWwWvu85XKYp4MvG2PS7xGFimHeS3nxdY7kxeMForAEs3zcuKtFZjx1mmESvZBNWcZdsQbiipVf4ZE3UtitVAE",
  "key33": "474fG8ofArNtFvQ6PvMjNqLBfaBTawX8YcQXC4abKdC43zFWSc4KwGoY41HhxzTejnCouW1CNNMSaaDe5Y54zW2K",
  "key34": "3Qd7D5rBvugYPKRF2mhrhvPe4pHcn91E8k7xbUc2nPh7jKUY2X67ePA2c5H9zfofeXtUUaaTXz6ScsGCn52cwuYt",
  "key35": "3p4hpnwPgJFFmeA9WfWbjwfePE3hs431GoTU9kmffxwT9KZX8Mx4G9NxfQ6Xgb8xyAYifta1BKomTCLgs8qXyeBS",
  "key36": "4qGbmgQoo9e274UFXxvDgF5zQPZ884uhMGrEpk4by3A27T7J3DybNkRWLDyr9teDLSM2a4D2M7fj8igceCfDs9Yc",
  "key37": "2pnuxc4HCtsCfaFD5ShpqxehGL91tZqDRVDWk3YfMyNZuca4KqNRLK2UajSMZsQH6eodWkjxvHtWAQjS1hxg3Spv",
  "key38": "2HBTmrhf7VHRwCKc8NSvDyzJWtrSNcQUf2kF2BTwbMWkUKZP8JmyZW9RsrNDojxkLce5hSmxaFcoZSLmo5z4B9ou",
  "key39": "5JaFmDnh7tq1Et8VGQeyWsgjwrq8tJGEkTwnpez5wVyvxwZBqTmhmWJFt1gFZgpGSnM55H7DjZDparePPYqTNBqn"
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
