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
    "56dL9q4wCgC1SFaZkxSQNa4ngu1aFwDRKKp8npTRkCXWMKqMN6N1cQPqNpzTwdchM2HvULnmoDWwWrrpQr7DaHws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNLVcKvLzsG6igBEyT6Vi22jGUkawnWDLUo4KubkDCiJQVRujp2ZhxMUr7SeMDgqzUcF5BDhr8cFH1owJ4doSj8",
  "key1": "5TVUQpB7bAhQR3Kgj6aUqrZsWsFWyh195sCJtFMn4NsKs9yWYfXMCKcLnTRHKy51zpD949UZUq99Ydj1FyycGuP9",
  "key2": "4RZ2d6GfGzDoet8YTbRRQaPnikVg7GBA4JaQWGbjHemKuzwg1TjQt56Svg72fYj44JwkMp5AQRrKnfFeCVT9L9CB",
  "key3": "32Ww4nLR4yT1EQRKbUeztVNuWaxVPmQ8BJks8guAc1PSkC7xmzagvpys6c7ogXLa589as4ZRBtwk2XevTZtea5dW",
  "key4": "3pWTRQdc48bHg4pi2iKEa4vFdQgrXxXPkC9kFkUeZZFdb8nejZNsw6rpaoZp494E6rmeFs367AN4pGi7ygMg5VqR",
  "key5": "k8MscCRt2M9TUehpUDJc3yiFoVDed7B4KATR5serkUJKW8dUeLCkJntXTRed2KqKZj6FK6FX1ZvJa1xw3xs5ktK",
  "key6": "34mVEfe55CgguipguMZLTnzYGZUS83KkHko6V8aaMNaUW4mHYsE47Yh7b3avyomG6qUTKMrX8ED2YibDjtJEApNg",
  "key7": "3qVcsDRrXtscYNrY3Ewe1u5FgJnmzELGEo59kz3cd4Dv6ukkUvPneqUUwABK8bJGhLSTUmtk3qmd7fyhfAbGQffa",
  "key8": "51yCpmWExY97VE1Dtxj3FiQ14wxjKrYcjgn7qnKj3hJSZAeadzyVzBNs8W2rU3zDxtU8fazUAhGNPmuq3aTkFBMk",
  "key9": "2CH24up9mpRuGW2kedS65e6MLJ68i2gg4gNhgHytpRaHPirpSDo7gwFRPuYLY9Kf3Ej5GqYPD6kBjKNwYr6NYL7t",
  "key10": "5BYDaWUhHPQh6mWJ6avV8yD74dxAHPruDVHfpookBTqoBFURBvnLGkffRkNq8RnRSP5Ka4uvBdPeJY17XHEvJZvn",
  "key11": "5sAuGUvYTvLbhvrK9xDQQpkd6vAJefEX6D7WbqRyyHS3gU416kMoxrQrq7RZNKkCT98Zt66LHmgorvxDto6ejtjL",
  "key12": "3DCEkzpGA4Qhhu2zkoEYQbiCtSftBd3DXP9poM6xcUkf9QuiVEkuhVetv8y16YF8u1uHLD457qw3e5Ty9sXWYKDY",
  "key13": "3HnhTENK56sHoj46FUsBc61ydmxjADC3VdHYyJAVHCEPxeM2YGMEgJp6NTEJBc93oEY5WCud7oA1VnLpwxYdvPMB",
  "key14": "3q55zuGoZnaQWt54He3jkqsS8srGkAF8djpw3FfWZ8noSGG64V1j9W36JLaJB5tZnREMFhhUaMLTu2NWRtZKRtHf",
  "key15": "5REk53HJBBTt8vy1dXxBs1qWbUcbqvjUcNV9XWiiMUCiT8hHPU1qxBNKyTK9EaKfFXgpBZDqBxXCHd2S5dsFgTjH",
  "key16": "3FYRMTiEnidqYHSsyUJCkGgrwEUGx2p6E5ihUwB2hfR5oJKz5wdAuJtipYQcgBMsqe9UqYkaThBQMexWZJdKLMXC",
  "key17": "3bm9FgxE22m4imenG86upV1bybUN2uFC6nzLYeY3JV377noT6UVUFQbfvimF4mFN8cQYipT1eTUP7UCB3Xbrb7rz",
  "key18": "hDm1esM2wrfEysacGujPd6X5sRNYdc1Q4sjCdo16iSHBKWhJJ2vPn63MusnDFDdyMWe6XxqNHHmdoKbvLoTbtwE",
  "key19": "uWYgogErRG4GnFuLnYrXVfL7AaouPnQ4sxQVXTHVK2BP2kGJuDJq9AY45jp9KuC7fQiPWjja55LjL8dDHG4SP4G",
  "key20": "2g5EYYbSqDymjREQN3cdpzsjFEHjyK964U91P46GRN5Y4fzdhiWo5zLBNK8b8Cj6iWLaJS5JQLHnDgixG5SYtGtv",
  "key21": "5p1cvQLyyB6Nb2aMnqGxFyHsaPjcQc2NBs4vi9UV2uEhZKtrVZhKTDbAjGfWvrVpS8n7JLMwK4PEYBDdYd3QYrMz",
  "key22": "5EadrrDnivt6pMvUZFQGnpbTxrcDHGKQxvyersDyP9tQnR8cmciMetdXHX58F8xgx8BxaH4MqTX3yPX9dPexPrjp",
  "key23": "4Uhx1bbjLLwSWy4nAKuHHA9DeUhcWghj5iUqDFnoUS5k1Jj2QbRP9hGF3XhWomJ3Cx5DU3rZ7uLkC9uscSfvwQUh",
  "key24": "P5eNPysRU4565fUGmVJD4n3SfKjLzH238DSu4Brmponc4Aob8vdxvdxHNcDeYc7EiUy1EXy5fovXX3dZBfED9GM",
  "key25": "5WWNG9KRYXh4ZrjvLi1od3Fn7JQdDxkd5DBxdSGQ6DG1FL3RhRXxra9AKiQomg1f5qtGQiyF4kM48nWCDfxXMaak",
  "key26": "3bBXjRYZamzmkyWBSbCMu79YmBEXkpDbRuaCqACR4L9K7cm8eguTyq3V95aLRWYXmpyTBQNmsuqETeysJUPpcyAT",
  "key27": "qter3NJHQF9YnrgoLojC7h1M4Tw4SoDjprMgndNo1pqYS7ETdqFsLHKTkxAsGyZD758ALdKXR8fNtKuRCVEpRQh",
  "key28": "5SqWRkexNzpHpWrwUk269D4cc8385HxEDNNQ1KniyxEkJzNegBtomzjKg6tehkQHrxffTihWxvcLrtAZNZCJXQ63",
  "key29": "2qbnceUvQ1bmrbtuj52hpuXvFVhbk6DnN73H2yaNQXQz29RMJ4rdYLfoixpJ8yujV3bqYop7V2o36FVY7JP6bAcU",
  "key30": "BYex7wh9NJDrsbUK1P2FS6xtrNunh6v2eeHn6dNCs6NBvjmYG67Ewki2UVnMzKR2GGMWS7HmkVjwcQMD8ctN4xu",
  "key31": "2XUDR4eDJuG6K8RzfB5wRNMk7f3k9eHLSNvLpEgfHxGNm7itaiDnqsF3zCeLfQEDGm2vCjV3nitypVQtx3b3o1a9",
  "key32": "Dzt11TKvPkZdTcqXD7xcKeYJ9SrNV81a7aHDC5dKNzz7ukfq5GyhrRSZw9jGgHZmzQsJ5xRoSqYmacYiUGnBzKD",
  "key33": "4mgBBKG7m3QL6oNEQ2QmPeCi6oaYgUFXrZ9ypct2ByissgzkQL9juqVHcpVtzAhMXGLv846EjFMiY6KZoyi94SpQ",
  "key34": "4mzGE4zH3dLXcjbgJf79wxYDFh2XGbXZsX6HZUpMH577oUq8eHRGpoNZMPYdR83MXmXd6fNxKTkeru34VaXEc9w5",
  "key35": "2TusyqGxtemZYy6tZxcLNaPRqMsZR4JYVfmPvSBH24MtzgueKNAPKjdZoM7wF1ttsn87xcrGshBKqBnf7b6jzjHL",
  "key36": "3ruDoJgsCG7uXKPTEmzrcLi8i9yHcv9VrP9KMRpJhmJGLgdAF9cpGSugDQzk39YxhQ46htSJrSAMHKoPbco4EnXF",
  "key37": "4mE6eTFJyS8sz38Gt24x7QyfRZr27z7ud3nwYLoh7CXGBUy8icatHxbGyRUXoA54Rua6wzrneKT9HWYYz6brmqGv",
  "key38": "3ZVtp6LH5yHPmkd7i5jAzh18iWCu9GR9PGU3gCxm7X5a6tPCgxt26XFgLqhi8CkuoH8GaboQPQdKSowHStX3kCa7",
  "key39": "imPdDZtiL6ySdLZYPBqe6wx7RgsCauPYcPBJa4w5PjBbF3gDAmj1W6ZdZn9UjYYcWoZbwJzUuZwcjLwh9hetdmE",
  "key40": "5vdK2bKQjrmRA6eu57mrSRq8GJtA78gwQQMVSMtNNQv6M6mBhSNhETMcDReKH7qFCDNgeqsNpqfpXuS3g9xBuDLc",
  "key41": "4enZNzxLKzxEJuiYL4VWu4mGhsvZYuJsFXKaDN8baZ9EgpaaNRbhHSaoiFGUXS9qDXmwQ4GC4rZQ4Afzj5MTeKAX",
  "key42": "BNXm6KUU8xNQceuGK37XbhPDwPWqj4geDvTVXNHiYzbhUaFUEDDqo22ehc68uqqKwpLyxZqkKeP49mwcdXEsdCM",
  "key43": "BiiHXFYJWF1zqJuTnipt7gqaoyXSgT1JDtutouHY9LzSVSxikNiKWA136AGDGL5oDYVsDSKQEFdu7geQPv6xe7U",
  "key44": "5jsseREaC9d3pLwySGkyWTkaGCG1snxMiyBbHCUoHoHHqPCrwFjwdfEPBbwjR9gih7AYMJEgBrwDcuP4s2y3fD2z",
  "key45": "49BxdfsADFyAFXnFu1sN26ivJjqfRpjzLzVbo8rJ9NHtcR6cgypsbAyX3cKUi7pndEA2oTGqP6FJJQnE8h1Jiyes"
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
