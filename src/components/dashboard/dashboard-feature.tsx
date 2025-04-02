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
    "5qpJQnXkDUJJL2dTeww6TfkAMjcXWq9XeCg85WrwPDbdZ2Q5QxgXhg9QdnUACJozDcBEoMgE2i7R9TdKJzsfdvmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628nSGpLZcKUX29hjEJo8H3ee2GZ73bivNbWEKopVrUavv4J4ByrGQm67MeYUvQrCbbSpNo8Dzud8rC6B78dpNW9",
  "key1": "47CHbgNMGUNYoVwRLJvDaeoDoJDybS2T9hyWKG3kWdC4xYLhNthF6DZzrK3d1dJbJRMudE22gL5XVU6pHdw3rX53",
  "key2": "2NdWk4TMLejGq6Rbj6gRtMn5C16DCmgvheez7JizRtaWJyHjNJb8Tr81gTYqwm9kqdGFywpY5rT61GWLan1JjWBB",
  "key3": "5vGVwkM7gxuCbScDUkaCR2wcKgKeY86jTf4x9azxKc9MtwCjJCZZyTGEfV9VdbQMVH6ubZhBK2hEWE4N9YeBujSq",
  "key4": "4QLa9NAASshetCs9R2BbUUyFzJvpQzMkScvRaGoj3AofV5oGgC1kDFyR1aEgdB2vE1LmhqSnw4bKz9C58fVyjpbN",
  "key5": "Ge7FjsgzBuv1orEyF3u3vV8VGx4kmewqptpMUWMCGktNf5We5mpA5NAC6UGVQAgC9oARZHk2D3WXaqmkkpmNwaE",
  "key6": "JC7pKJSXpsNXAaJz2z1DWN7tV7gXQBPfD3KYm2ZVm4ywkebW3UX2hBtNX41BQLnADj1hUBWJDjDz3QchsFe3jgr",
  "key7": "4N7BaWzuLvQbXWXGdLLw1nmh2EoKssTbg4uq2m8bUMfzUfpxAekHExJFJy89a72Kahw4Q5Bsyt7gBXc9MPzonXP9",
  "key8": "4JZmhzSq7MHoweLB8fAShjXo4mPCAh6GbmDU1vJDjjQm8hVDHJE4JNnQ84MvEU6paRz9Z8VJEM6s5bwVJGiBMNAW",
  "key9": "4cjhX9pdov7JRNCodCqqmCw8wHGAQBe38Nvi6eCqczreCFdniwcjmvQBVdrgYp6Ub79dwhh2WZXaANsVmGQbnd9t",
  "key10": "gHtWC9QUphYjYfTyWDKvJi469GJuebPqPuuybzHFXm2qRDoC7EDXXfSdi9ctRP586G51fiENfxyZTx5JZnCAjRw",
  "key11": "4N8RsyYraGcnkc713ECHfjhK4H1VYx4FnFtGSxmaGt8sw82aQrfTtZ1WammTJZYWwke8wdzibkpXUmMcPDuSzcW",
  "key12": "dCKZDTEEcVwyT3s2CESGBYhK2RyKCqud654oN94NHjYUL4qHwX6LqUBLjk7LD4tDQcnZLMw5DcPtzuAi79PGXf2",
  "key13": "3S5h7bfWktyVnaDzqWftHRS35r7FiGVkLZKx4JQMAiHBie4BKReRFC1VggKKmtwqwfWTZZxzycN7Sn2XGT351vYn",
  "key14": "26LYHm67UyYvgbazdFebPcDBm2wMriHFUDtwu4FGYZgVW6H3gXkDR46QY3cwJjZ4f4W2HDauydjHsLdud6ZaLL7z",
  "key15": "3tYyzct4MVicUxwiiiRMjdG9uHPPr9v1Y5WWkFvq5SsWzejnCzQdRVyb2t4RYZPGv8vK5mVMTitRAZNzY2P1dkUL",
  "key16": "2Rf9CG2MHHjSKxxShwp7rFrPj2icszEXb3qSWQbP6Za9g3ocNNmYZbEscrLgpG9rQoTmSdqFtHmfLi3PfDVPJkDt",
  "key17": "2bg5HMojAXvAsL4QwuTVytWcBYW8jfWj6ejLXGS8rqwg8Gi57sKEh9Pe311hBHwN6NpPU86Bwdr5gJKEzgnj76Mz",
  "key18": "4ZwZcXZQ61NwsLSGwD619z2H5N3GDpgieqDZyGjfj5LfdXSkfJxWc1DFSu6PmL77NEVLxNY78TUaH27sMCagBRPQ",
  "key19": "2396EbpNUkZYHKBBc1vzQsyG2BeJtiVVKQtNEva39dyE3sBJMUjsvo8778CsMQjW1Jw5rV9c6rMUSgDgyXqYcw2h",
  "key20": "FjRwz8h3vFwiTmX8xu1Atf4AmnMHWpK9qgpURgL157eAYf1tKvko1vgna7jDAWtrpdPq4hD2o2WeMhh6YVJo7qq",
  "key21": "4i2pti9DyecmBmAq4yfUy22q7PeSc1PKTHKU2m8E1RMBom3wHjY6ny8YkyDbNv2xe5vvBshbRsX1LWV7NatoAC2a",
  "key22": "3q3QNNdn9srYeHHHKdDtfrh8cc15RYVwYpFsHPT5qmTcbtKJoMXjdDHMG148YLvNAF8pZf966naev5Lz3wDmwykV",
  "key23": "XyrMw9Zs3QGe4h8S6VpjhjiC1rq1keF3U7Ea2AnVHYBiJhoG1RnohECs4sZGHzWQKuRLZ9JP1JsGxnK479BtnCq",
  "key24": "Mnx2JZ4LNPZCbXdoABdiVtKVzzvNxSfK4xrQCJ9Xz5MHvJF5GaWm67q43FCmoF47T2Jwv2g1V9GB31Hkw4hKK1o",
  "key25": "4a92uNpRyPgG6WL5yAMjQ1Hu5Mn7eotsAZXNQY4kttwTd7uWR3gh3uSEbD7f8NdX2LMANTY3gSvj3m1kBninJPTr",
  "key26": "57V3PXNfUUyLjt9iwZB83h6vkVEVT8p7QpHGcLkvT7QMkdShC14yKEAJWfUM35ZpJisFj5wNAE9XeoohY9iyvARj",
  "key27": "D3GDi6h1qU1bLdRyGtcWpf1m2PncNEgXxPKSDJM5o1KfxfnHc5TC3TTcJN7J4GYnfPDQTkXQU8WVo4ACP1ZHvRJ",
  "key28": "gZqnBmvLUinizy2a6fqfEU7VbbQn7A8xyk9fx2WERn4iHHufktpaV56NAjX7oJ1pZ1VFEG2RQH9K3SgW9xxzhqc",
  "key29": "62rC4hXZZzVJuZMzedZxKtJy9nkTkDzg8TrbQvfZTG9HfvoEfxot8hng8BzzGMpDiCQFKeTbnnry7yj7RbuYMYzv",
  "key30": "3pZHQVyAMbcvVA2fnfmZMGJGYawe1TVGdZQhGxaPEY4fX179awaTsxVdw79hjZwPVUVfeRBj61uye9QiGJtzWNz8",
  "key31": "4YqXvM6Nv5ghZX1QimXfVxME94tCp6WTdpfSKHXXXphZnHCz7Ly8DsmxP1nfXoGFpkiQt1iaQjMJnocDMgiXm1y7",
  "key32": "4GYZbHfw3G2Ns1BSzqa8fxuU93Cupj6qtDk7AEHUJBFPTdQUYZ58QXdriUncM4xTm716Jvtwtbs17CWUCTa23Hah",
  "key33": "tUaJRgXAXnof7tG1iwiVBYbyjLHnLdMn2EiFwHWzyQcLW8zp8DLX9SAdTeZ7BMyLxKoN7QJSb8qAAKjPtCz8uth",
  "key34": "3Qzo6j61p7xmXZZ6WxMRXSRLBchgoX1S2i6rT7eSb99JvVpnN8YSVathCGV3fULW4JywSxYyZSwnpRmQhvfUKS7k",
  "key35": "N53chdsu9t4RSe1SNr4StbyfoXw2qAKZ9DpzjxSy5zFhmVJDreMuk3YCqGawbnJhgAH5fj1GDWxncypKw3QjUXN",
  "key36": "58yRZkZhCJQQSWRmgExVbZoA3Mc4pscgoSUqBDnyDGsQwKThZNaQ9TcFjob8zwX66qsn8LEJTvz4EHDqUsswfUK",
  "key37": "PHzNqEHiPkBkmB8bmn9f52z7fQD5awSoTW8PG9tagk2EkFfKXjXy7u9RFTuChiJwcphYxVQgV9hwZHQgpdgM7Jh",
  "key38": "35qPewdpTN12gSeHJ736GGLURTxStxFo8tREAayJD1u5SbqEaABHAwybpgUJHYZtWUNpJeYxJEDDEXDBvcH3nHQB",
  "key39": "4y5xfSnoBztafzDBrdkRsetVbQnTfhn4QTjhPBEuQ3uBGayWYKSuDXTjZ3VSRKs1RZApfzu1PeACmpgrX5qkSwRX",
  "key40": "2ywiEzavjUeGUeLX7iJK8RQ4MH7FBHfEnApEZaQ7P5skYiTqRQAaRhg9J2oJeCfJJ3ZsY9hvdZp9PXtNSAbg4NWt"
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
