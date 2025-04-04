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
    "5XjH1P6iUbMCr5gzoidK4KRt3oNAhsp6EnX41Ff8B89CRYR71cBqWvpLLNHXdgmdWhuZPt9XNKvRQAfzqDupCfh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JVm1p4pooF17ag1AqKEUSor51wggK2HhKKpdoRPZGu8BeXvcJkb63PT28sRECuiVTmJ79jpm1ZVUouygAdRweWK",
  "key1": "5pKRtTpiuApBMnnPo9DQxzj5u8HPAb7BdyFeA9r5QPWpNCJHKVdfNdUP61kV4VwJBUkuq6mvHBNYA3TNmxUgFzF4",
  "key2": "4Qqpwcuo3wCrmmQJVkkc3h3BHTraJSEGKJbeo5jZyrg14HvpJZhGoe5FVCh96mau4TMJJfM8co8UazYYoL7XJfUR",
  "key3": "ujq6ZSAFjkGucra3XNRqXGkdTyRLuR2WX9MxoByVecaWnQk1LPoFMqxyf3K2J866MRL837k3QJGkydZppfaWqeh",
  "key4": "32o5nhhVsAgNLh9wragHvB2URcYxZ3KuKxAG8JULyVC7AaC8F3b7LEm4wzE9usD5GC4JJCUFJq2VDADK7RMHPDMK",
  "key5": "ThVTt8oZ2mZ5Lpn1gNjLRJsKiaNBcpW93nEotRT9AhWR1RHEdpYGDkE2scpkxJAcbJH6BpgptF54vcyiaEUiRY5",
  "key6": "5t1sFYZ2riq5L25JkRLM5ujSb3tjydeRMYK6nEo6jVzHXP4g3sk2zWN7WyQwTH6r1bbKeaEwFeT4i8pwrgwLWGyn",
  "key7": "4KpMPnNgNuf3Yf1Lt3oDZYhLDvvrufdnYZQrhPSeRjaZAFYG5PgfcQqFFxmBMNCNf8ZKhHpob7Z27Pbn9hAHL85X",
  "key8": "5tgei3UED51Lhzs8NpGJVw36k7LSv8Rbw4qpBBxGc6Y8pg2iDywdAzUanQFpfbsNKR32iozhstUyDb45cVZoTCMi",
  "key9": "4BAy7xVb1DFUWedKKTdXdLf1QeZQjkPBheH6nZvRhEiBTyETSk1MkBNnY45gFo8JcZncoXF2xXkNXSdcRsXxCTLD",
  "key10": "3kDsLGRMxS1S6fgbhyfYy59sLAwBQWnL8QNzKc393Y9JKeHtQqAK5f8mQJYLCLtqytU6EwtEoanhPgBPaRURF4Ht",
  "key11": "4SNvnegbDTL4sU9wJriB2ARymh4Jgm4fokeX4XCFBs5qYAsuySrxKyuwEkrv6ZQ9rm3uXpeFLwroHi4EGjWneMXS",
  "key12": "gYTWDBG9NSGbVVAhoXjVyBszk3Nk5nMtaTJt6QUnjEQo9eEi2LHZUdgULZG52qqaUa3f4aPT1uWXeFmiPytTu7b",
  "key13": "4rojCNWt5BH1NsrjMMjKK2wWjBJmXtzK8mskKW2woWTx7TjqmD7b1HPNxeRbT9NQ2j5BVbj35AtdmbsUU9MGu9WX",
  "key14": "2tptdaSbUrk9yRJ9uAsBF8HAjtnBJXFF1xrQqP5foJC696csGhe48Wgbs9WPgJckmByFYqh2pQ7kdBzR2DhErD9Q",
  "key15": "VJjEww4XtSskc52gSQKkiL4riknqdAFPUeDfbE3ZuQgSeo1xUSAXwmya1TQsoKY2LcQBSxvm91K7eQCjUehsgAr",
  "key16": "24PjC1T2efPG6XeYafEjzBePgwS52AbJjuuKC5QceyEp4sPcEukpWXpkfGbEtqmBztNJX3LRX9TrNa6fG1wJYCQU",
  "key17": "4EsCpBGDvDc3grr8veCAh48ULvirv8y3tY68BMesfQ2xKuThmRMrSHGRwTxhC7NzVp8WSY6U4Jrm3iicnke8VdsE",
  "key18": "4oPK6UtzwYsaLmLaiwffedx9LMeUsdVyCsnpe5vA6o47S2QQRF387S771MwfzoXowqVXg9pZ2un1YSPYSpUr6QDC",
  "key19": "5YYTgeev8esZuQdqyLzPk4x1rJ1EYijhvwWbaiWf1FagPRUbApDHPhMWZYkKo5mXovSdR6wyVz5N7tPUmQ6VC9mA",
  "key20": "BPjBP4542zoNEqYnKCcwcdREFaRrApQq3xe9Lvs46Hoo9Noj5KYcRyTdo4vyVBLDALDgDR77d6yJaS2GdgGQKZT",
  "key21": "5yDxTqncJsg5nyUVPrEugGtCpvC3zeA7U7ZyJW3zQvSwVpHRuFg8heRZDgnqGCLWJtc1X9dt7T1nMG9KEiy2BYF",
  "key22": "5NNkVKzg8hYQhR99X1KXGqte3Hzc8z6eVEAJrzzGGYnW7auKeM9hNdcuE1znU3pczEfBnTv1f18QPJJ1JSusPAgB",
  "key23": "3UoQybDYmYoXDBvWZrxL51CoyJf8C5gA1n6CXFBABCLaWTtT4xCccCqoJ6XiX29p4LCGFoMbnaAkmcX7s4NK9Tp8",
  "key24": "KWQ2cUmBsShqkFvT83topiDGuLiLAuSwrGYKZw6fYunWqzPnjP4sdcBVLd7wXWAymFZcApuiGhzYU6fYx5wtKme",
  "key25": "4h1u7Wk8ZtTAjUhK78U4K4WEA66A1HRDVfQJZxwtmy5uv5E8rjjt4G2hZ75WtNTpDcLRAozye4qRTwjJykgEAPuz",
  "key26": "PKyyyu4TqL569vH4BV8vUTnhYT9K4fBVFFdQ7Td8mrF56zW4MLtvHiUy5riZLJxKVHWGWHy4w1JqFnQ9CPaDRdw",
  "key27": "een2RmSvc5pDY6HszhYYeWbFvY981wdbcZDe8DVM4cLuCwtYUzouFGpRuXn7uFeVGkcdYhSSiEcz24mdKE3zjvG",
  "key28": "4phnamsJ6WJCP1r79pnN4qoRWkXgrYWZQ6mtnHtyQ5VPvszCkxpksaEXXmsWn6Si4pd66U5RsGSbuiWMZr9Twdre",
  "key29": "3XRAkhVfGHvctMaMqmrbaWwDjojZSvy4vDqFi1PZGGENTrU9ZFReFtQar1NYwZeKo6mcjeAu9JKRNhemFjRERqR4",
  "key30": "3Zc8X8jPXL3omrTCsq1EbJHspqb7QN7cX7eP6yXxtwKwfnXMa7yeMkRcGFDTopuaHQNgaCYeeYotksQz4gazYyBk",
  "key31": "3uWDKp5exEbVdWnA9SRNzApERKDuSH3YPU1q6aEFawVe7M1KGHFNyJE2NcFWrRMf2Xcwnkx9oLL6mY1tsLq3LZEA",
  "key32": "5YmD7gNDq6oihZJVKYjABaDHTgoKGbfnrWsefb4RMVbdP3XNYWQ9jHX58D1mNQQH7MMuxWM1jqYC25hsosSMG8Mv",
  "key33": "4xmkZ3TbV4Puznp3rZN8nx5s9YBN6wM5D1rkmknqZqc3RAQhv6q6iffWnww7wwatFSWKDZxBxbkF6AUuDN6acjge"
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
