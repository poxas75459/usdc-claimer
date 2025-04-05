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
    "5DRZeHL2RuUNMbV2dzSiWGvDz6hd9vfHLXsm4ZvY5ZU35ju9SHBX9BtqFLNUHnTGYXpzzAiVaoGkDsiLUJzE25s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1eKY2g7UvasrjC6Rs3AD3X2mmH96Ym2gLvDrBW21AUiPj4oqsUHezUSvMcpJsUXeF3zGgBKEsthBABA6qKQ7yy",
  "key1": "A7zoj953QPczBBPRCZQstDc5DSxE6ss6jvT5AApLc1t3438X7EqEgcqXzndCzN59GJE6MVzBxiqVskqb6UoGx15",
  "key2": "2k8qTrKjEuBntBkNTyjdxx8ZjprktpLxpucSukvdM1hwfQcY3Ge4k17f2oTpmx9mg5XvqCM6Y4mwv42GwTSs1sCd",
  "key3": "kzFmjemUUffm8JjyryfKLXZ25Lsg3eWH4kmHpFYFM6hmsEKTeacV6KFryFcTqGhShH7tbti7eu57s92TzTTVJom",
  "key4": "3q4CB7kA2J7wUfD5qusyvZ7wkmfUZJBByqLgwhW9nZxgh569SjvZBB1i7HgHq2JSD3HmRA7g2WDUEzg3TDSHgXCL",
  "key5": "3QmY73Vn54BYn6R1jcniFYfCJbFdfJi2v81YKQCJTZrdBkdwPmDg5HT2ewSDPcnwybYScsDap1hdzmRfqrCCdReh",
  "key6": "3y9CpoJpWhwGSUGP4K9WvWZTaCFh532AoUDP7hwJvW9JqmbS8T987BhPy9Q7AjB3wvUTSrKMmmBbCo6shXKyyLaG",
  "key7": "MU6mq5z44qiYzLwsCUnCH2z1BLyLRqAeLDMNqSJ85pY1JJGNtz8ZSLY5p84nDQiErP54ZAFBzcjy9VfzJDEinAJ",
  "key8": "51sATfJtNhxrjFj6DW11JqXi13PR5E5gQy9zGMfCnN1igrmAmWghmvki6VSzZzfMjx2r2mDzLguSAvFihpG9eT7c",
  "key9": "2oEMKf453z6r22S31e6VLoJ6RXyNMvXh8knaGF4ounW1uFGEYkc1vPbcKuFJ4HDEXWHjCWaji2zz4NEF7gkvrFys",
  "key10": "5J8FotLxx5fiY7gL4aMDMLHQgE4zRQKY1mRzYZSB8NgtmAg3Eg4uBXpf35y4hHPu6h9amZmGuEPfJCURsxcCXzh9",
  "key11": "5dPtzQt1UJttiXnf6H57Yk7QbT4qU9yoyPZNevraLjhkFHRrxJYYHyM499NQQNFZTPc3pTt45dGr8XKEfzg9Xaqq",
  "key12": "4fVXNAk5czSmeUPogVk4QW1QBWDvEmhWFPUs5xiDg37XQKpBXkPutRjTQNMeZTW3YNuzwtTdBdTDu4aqiiRmXPyG",
  "key13": "2BvCvDpMjEg7oXP1Gr1aM4bHPrTjK8aGAT42tGNhd4wicoAju5fsT3sKrxucg7H7zLvCjZ54aPQxjCrmnnkGbynr",
  "key14": "5ug6bnmn9t6gLiqtXikZ8f3yupzNbn1uthCHGiDmSBPZBazYjMaNGLWm8pgr9R1fDFYFzE96riXF8NiDm7Vr7Juv",
  "key15": "zNm9GoHdXmnzi3HacyqueEJvXYTMhAjDDqpC89CoyDtLEk9utH929eqxp1kquHGrG88AxgRufnR8fu7cBwqzDhZ",
  "key16": "3TDrVzbSsXtt8EvyLudcvnqbenwv5eQ5EY18jK8i6hS2rUeKEF8QcVRye4CaHjm6FSUmw9KzEnymUN3fqvUgaaSE",
  "key17": "4XLa7fezj1NyFJ5XwkiAvHqowrZHck46oEcbkE9hntvi7XfFTgrg3PJQn4yNkk75Lv9fUYmsX7dj7Vi15PTMpKYW",
  "key18": "2ZYk7mBos5MpStrh4nrdbM7pBPgv8VTkUN7BKY39LeFsoBgC1e2h6Stt3Azh6EQrn7ioVMNvuAbc5WzWgyqNGZ67",
  "key19": "2HCAipdJcDXFrKUChspCqVpHxqh833VcfhpwA8ARVB2qfQ5rX6gT4gPmcCm3M5KoXVbXMXoaUuQ1TtchW78FtXbV",
  "key20": "3WC9wsgCY7GGxTMzAQu58awewZ1UqMumZb4CQTUEVWiF1ciVrRf5hTHgcHP7z6XWs4UYYqQjdhxooYiFjXup8WK7",
  "key21": "GB4vbSCp4tkZFzS3SMC9DdAJzjs8w5EStSRAGzdsQnV5dWxWVrCavDQ65MnfiMkWVP8dr17TnKLSB4uuGa8WFEf",
  "key22": "2GHRAfVSz9BozBckBa2X4hXCJbboH9akeJZbEmrYqPUMHzvnNpEpX28BQYDZQ6cxcXsHtHcaSKLN7XJEuzTjsgpQ",
  "key23": "5NQwB9iei6kQ8ZpbY28xNgq2WCo6oS63ANtKcZDnwrgeXEzeHksgu3bdyQR4ASX79xvRLXjF8fXTJuGVdx81mCGk",
  "key24": "2ATcGvx91G8NBTdfdGRJB9PVLvKkdH4noikvFF1PihbpiELpPLJuqcRAvd6gfEDLyp6Azb8kGVc6Bh3MNZJMLF9C",
  "key25": "3HQntkJBZNGrSV4YbJkUcqGkfZUuRytw2ceHsux2Tz6tvm9nCgkWCVfMo5jqUYhRthwdZiX3Qr3DGtqPZdrvwbuC",
  "key26": "5aC7Ndz9c3ymdwBLU29xPK5rqhYiNHZjr5N8iyWfMKMqoBpikwJDDToG4J6iCLUQynhxea9mm4R55D9gZ64WK2SQ",
  "key27": "5Hq3fQzNjPxJXz9TJMGE4DSTVTSLBPiz5vqwWTodZSrSStcwwyx8jTJPTi4e7Cz1F7podrrdJsbrJSgZz27UbPxV",
  "key28": "YrM9p8w5TDq4dbf1EudmRKV7LUezUbedxhs479YcL6uvq2Rsc52LTcehGCT9hnj7CpCtq1VVhvfcBPozC5Bm8bi",
  "key29": "2XmPL4jW6vk3KNrUjsCMcDr9suRHfEHgs6awdWhZLC9PFSBM1sa7reaNyS5wUdfrLMviQ9xG3zB3CpmcSGBqfdsc",
  "key30": "5BiqLpUizxa34Kukq7iHdJreDtXu22CTeM9oya45uhPTYTgiejjhx5sZAjBA6KMg5tr3EJMK6LjrdU5onyq1X1uQ",
  "key31": "4Cpph3rnP5ReseP4BgLSinSph5SB1o62PUu6A21piqCQzdJN2jHAuKataFfB8VG962NVctCGeBYhVDntDiXhGgA2",
  "key32": "5e9hQ2D6SRhwubEGxnen4XGu5ihLpU4f8NjBv4Bvsp6DWi1NYeykF3vRNhHBSBu8yem72eBffjpw3tS6yqZpdJzw",
  "key33": "5TE181rp3RVfs7t3t1Ma87V8u2xbUqxAvBvXxnNg6gMNXzDM1yAZ5G5BCwNKdpn5ZsPdoCrBdWytyLym7Zc33gui",
  "key34": "csmLGSUG7JzYSQAHbxiLZmyrtDzEueibyU6CeqNAuk8BcRZ8uLRJxm2XTGtuWojR25cRW24HNgZ7oPPQJurXK9J",
  "key35": "2XD87wdTGuQSQtq3rhGAtsjcTWxro9zoi4M5JPZ5cmbxWciSXWQGDrCrThDT7ZRvtHRGduocPRA3EyAP3kWpEem9",
  "key36": "32hmMV5YoG8U1ZCD1fN1miFi27QHBJKg8UwLonpcdfu4Nw9BWwpGeestQrqsG76jpHScQtugtX4Am5mzh2RBaj1L",
  "key37": "29BgGLvdwAbSyxoEi6AupBb33CB9kQ9cxsnhwbkNCsiRcenrMNwjJFVEkHxXyCyTfb92qjhcg3gFGZ46JffiAa72"
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
