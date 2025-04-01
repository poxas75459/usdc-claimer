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
    "3Nuz5hTkEjp1cBfhdtXLvaaDyTU2JTHGP6r9VYTD28hdAsDFxjZd4RK7aNRn8YKV9pxMF7UNSmY5psN2FjC58sAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o46K9WxrvN1iteMLYkqzJKUEDXpkDGryqot5FAHRck7QK49PdeDhdE9rm9V57uabwVjPHZNHYwEMGzsoxCUZfGq",
  "key1": "2bUqwRo9d1LG5EjRuxMAt6n1BwPu7rGh7GQGKYGabhLi4GRd9yNLtuaA9SXY95R96Sedcj7aQhpMQQRu7YAk2yto",
  "key2": "3uSbAD6DLu1dM4qhxP3fDrLkQ5EHFxNpGnEJc31wUCkJcrUm9KQueTvZf4YCcfcWEWAqw7CPpw5jX3g4k4c7U6ji",
  "key3": "1iBjJ29QR7V6pzEZSJDSGtJyWmNKmzUZGWynBHTyo151urFsPffzt6H2B4xqYHnozLhBHdYHgz4AVR1MSChUNUV",
  "key4": "4Hc3Xddby3b77sRYJFok5F2XUTGDg5rihAFHYqHyEMQVTwQzBtxGqtSf1YwoYcRKVpFLzPEBgUFxgCkPsnqGUYpz",
  "key5": "5PvHcrv7F8SL7aRoUBaxc8KfMhLWy99jC6iAwX57sZ4ZqpZUcxHUb8f2DbM1zgvEwGKaDGWxYs1EimdxVt23bqeY",
  "key6": "s2DwP3JHTMWfmgBM2VYqkXz8i6e3gE8MCtF5ZgkoassGJdeJdhxCNQ9uYEPWi4bX9cSkHcEjXe3TngtZMonkFQQ",
  "key7": "5f6q7pjbWe8CZNNPM83qA6qx1S27i8mz2H7FaYtFSjMhQPB39m9RZiviFgK8Bipr1cAJeqCLvVSqovvRMFvbtAhh",
  "key8": "3zqPj2KLPyWmo8VtoDPn9DNjhae5YkBpHjTbwk4ihYQ7MXrLn1rMR5eZeJuinxdGqkEYjfa8GbL1ZsBHRZ7mSTyz",
  "key9": "4vpdSJfpRQzMWzNfxvUav1UhfYg5aW4fPF9wttnLzx8YSDJZ9K93G7xtCoeWKWZT3xEWpMxRTwBC1SrQDqmm3TvA",
  "key10": "4YGVyvfrthL8pcPUWeDxXKM3j1oRHkYaMhHyWhtS8Hyssw547X3xV9B6rkJ6pV3WMJhqeppWvv7jS4DCQAHSnbHw",
  "key11": "xAxAdffTBJ51aqitEsYc1qb3EbwzRRP6b31ss3aCwrbGMgr2kHZzaugguBEX84Xd36kJRbmaFto5ezFfxyJFgkJ",
  "key12": "4QMnNKaeL6vTahPeNbr4txAyjW2iX2iWprnuhKoeteVGs6k6bBjtaUBVe4nj7vgT7oooJwE5CaKawwzS6oBTwXJe",
  "key13": "2s9Qb1oStVFtr8vqUtRU6nxiyApkq5ZnZpDqwMsRgHvqiGQ8dhiLgv8Fv3Yb7V9qxVgMYsFeE9mGEnB2QozAAfAU",
  "key14": "5cD4m3SAdXhErnEDLAbs3nZhKLRLCSBnfL8jPULtg3ov7Hh7xMiZ6F1Naw9TAukDEDAdaCiEzVRBbCxEiHHN8FtA",
  "key15": "56DE47XkmpiBmHdDGqQG49cwk1P5czsVKh34rEzYesqyFsVB7woZbQbpGHCqWpm5yjPqZighXHxYdwPmqmYEADAp",
  "key16": "KAU4vAW7R2rTA1qzwxpfuwxfgpiJXoAPRY9jfpooB3eYLHXt6PcieXCbkB1uzv2GvuCgzKpRxuPa75DFL4QnjGd",
  "key17": "4cgeeQYmwtTESy5U5ikw62JHqhtgGGj51NBqfAdyoNYeXNWpw64AHECmr15rQKWsCSXEisyV51PaGxXfXjH5EFCR",
  "key18": "2FsW9k6AsyE8NA2Z1s1zPQ3NNf5W9qu8zeDQeVXwVFpZstf3GNv1nimqPcMgK9c4cwPieVypZ7zfVtWeA7Ha4hM7",
  "key19": "LQyvZh2g1TpRWWvSYsvf4XCkMjW7y7pkcwukvYSLdViN3HkyKGEDgpR6grFj8d1Cc66hP1ku4Y6o1YpBtSQJ7gW",
  "key20": "3rTjLjMq9Fxewj6tcQPVF9Xh7P9BfbRWFdNQzdNTEkDTBy7K1qwhDUNhXyETJ8BL7ptm9FRAFfGNGq6WDHKc6qgt",
  "key21": "38BmL8ydwoDUqCUXi5uf6KaCifHRnY38XS8z61A42ST6DUmkqVWhgJBQQ96zda5QWcb4dfuAwqGaHNJVwPWUJNVA",
  "key22": "53kbMNPKVi5px52e24L2QySZo5QhMkUwK4KpcTWNwtPjSLQCa1Psw3Gns8zXf25tvuLFwjQZNTemtsLjN3vvL7CB",
  "key23": "2ZNSLCUzm857nb9wCceUw3V98ou5U19Wa336BoHHmG4cpxq8Wf11SLrCrAJYMrKL7z3CxG8Mh57XNEHDQFNMnx13",
  "key24": "5SmJXWq1YHUm2H93SjxQgfh9bD5oEPNAeMbLuCWdz8hRNwUGDqbCxsmDqqKvAoZrRrgB7iU2NKD6HLiBcYYdpdcd",
  "key25": "4zHSHi92ooBn6mH9qhSCKKmb6E7pSNgPqGoXmk5KWh9HQ7YkYN7TFBdtXQiGk8Q5ZSDy6FiyabQjDA7jdMMuEzdE",
  "key26": "42ssmDfs5bqMakDqy6M7dkcE5P4Cxc4F4S7GiWte8xbo9ZaqFYuGaNHaZZkgt5dKi2VYo9zZMc1uMTtJjABsAws5",
  "key27": "nSUBqAVL3YrFmpv7bhfqMw2Fwi8iizKr7W21aocuqD3C3JsR3utrefkRbsNF8oS8hfhdPmVuT1PGy8rNXzRKffh",
  "key28": "NGtVz89ugh3FuQBgRDq3yoDSCegMzHnuZJ2vRyYRYorqnp5VmJgJY4MPCkQkhxe5rcPN9jZU9G8FvhEfvgbPhzj",
  "key29": "3tSCx7N7YGz7DB21yJaUJgXKDDXWP4tZY9Wg3GvCK285hLU4iach7brN57BKxyx4shxVVWfoXi8fDSoTeS71m3Mu",
  "key30": "45M5wQpYK8EfUNjiRGURneu41hoCYweLoJqDrHnKaYyGazbLdH3PJW2XfrZ8ArHziq4eQgyGTdbAqQwoBBPsceCF",
  "key31": "4zzQrjXfTtrPLkqUzLepogjwNNKuVSB962zZcJAeuD76J6NfxiDCoJRoZ8EpQ5jyUfZsGKgwruFJyPWtu1Hk6ydC",
  "key32": "6tbsyQsAeToMZy7vpECrHG9yp5zGHaFEJCQRnjLMkGpJzJFW5TQpXyyq8PwPcTFiWMbpeHmzs2z7gE1JvYeFXPJ",
  "key33": "5EZxT4FYTXrXfpb3SP7UtGRtrMYRu7iK8MogLFkPtgyUp28t1tYKpNZ1THhE5W3ZGhkLTLvD8QM4pWTv9RmKgQUc",
  "key34": "4afZhcmiody1H7GkD9LqLVXPeGHtoVi9jsNgZhta4DZgvbEjj3DWkXoUF8bjwcDzXu8RGqfrEMJPCFEui2JjiKaR",
  "key35": "MGfp7ThCatWj9R57amguDHayhWKq7NVGJFJLgm973LcWzHZTPZFHdLdJ5xKNqsXEpPNSEBExkjL4N6VhdwMTM3p",
  "key36": "4Suug7CkrEJkyfbywX7cEdQkzwXD12FJo3rxisavKguaA8TMSmupM7YSLN1MWBA5rnmABsuWuRQtcdeEag8uMiER",
  "key37": "3PWEt7vBmexvuS4F7uiqn9XuVJtNcPESxh8LEdWVeZ6cSF4nUnh6b9zWdgJVkgZTkymWGdkYw77KVzRsqAsgqb3T",
  "key38": "3MVHsiAPSVEXUd4bqwVEmE3ot4VTyRgZWUUfn69BMF8SZnCNkhpS8Beg2VkMRpTW9c495eBGKbhPh5vYvVBArC8n",
  "key39": "28aS1RwqhuiupjzzWtKCyxcm82Uvt1YiNJLLM3GesfbJjVYJebDKD3f5cKq6dWQqydmGHgS1Cu2Yeab5t5wXnewt",
  "key40": "5nvnXxj75udGduD9jtcqY9cf5omXZjNGZFJVvAD5etWPQRjVV9qAJHsCPbomBGifESkiC8xzfMUGux6vKfksfTfz",
  "key41": "2FnGM4M49GuhDHVHoPETXy6Fj8byob3LjsgRXVRchzciVT4Dcr3jYuoyygcMv1q89vAFM5YiuwwBGfdPx9kJagaU",
  "key42": "BPf5wv7GPMzArD6wFu2FkDmEtY5Z3okZfrioJKQvemWqM96rNzhVvtRQJREHWS8VNWnZL7ebmhqndrgNj5sn8w1"
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
