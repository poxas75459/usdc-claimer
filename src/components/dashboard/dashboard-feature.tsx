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
    "5DKGbELCndS9oJ1WAjPMUaWM1Gk7SDcWsZshy6r2fryxndcojfEiDogWKj63RP7mujRrKTxnB85YXrYA8VBMj4L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578F3w6KcmuziknJVky8wXxhvw7UUuqSgbVK4CUsPUjzoMqewpU2Y47Ysik3ycS5nFH9rwvrL2D5ze9v9F848RE6",
  "key1": "46jT7Fie9mnAdrS2A8RjbPQGfzwWyqKGYb1uUBs6Fefsr2XABdWXJEc4vA3e3zRHcRtFmVcgX6epUZZkaDG2kTTQ",
  "key2": "2QkHtf5zct7YaS3X7Po2nhFykjAEbTcXZ18JBeUG18YabAf8oiQKDwM6v2QeyrnjdAWfLMwTN6Bi5Le54Rz8Mfsk",
  "key3": "3JpNsLa4X4A2QgE8Y4zd78aiN8qWoGukC82Zf9evMXEg1vajQqKsJnA5KJNB6DV8zzbqH5gXpJpcsVLtY1SEdHtJ",
  "key4": "4kHUFK4nzc7MW9e7LujKnTdMTHJbabyxbQzuZnGX3CTDgAPkyTEhhDk2GGYhYmwjJBjVtJWmD58s1MF5orqsdTRV",
  "key5": "3RTwGYbqZkUCyNhhU9tcGhaAAoy8JSfM6tDe5Xoy3Ryio2ZNkus8GK16EXE4mpbCJMFksbzyXkeRAE6jdt6J2nhS",
  "key6": "bV7PVGfzHPmkKNUyBc2VLstnBEAqsZP7RUHdecwDUhNXUpmFi6KGcd7Nz6TkToXCtXrFPfjGnpsjuRXFGB93ehb",
  "key7": "5NcWj9yB3d6rUYQxfGuY2nC7yE26e2uad58hXoogpyh3s5DkbXiG21dyCPo2sbxTUt3JVVJRpdvn9X9bgcqGpVfv",
  "key8": "Wpwn134Kfmv3d7JQk8cyA7TPgWJ8whoQbVsTD1obaFArrdMYTrN5P3S3AozhRsRhxCTFaPiu7Fa3PMgnFFFY8Zj",
  "key9": "3V5ym5k6uR8pT4tysmCoz3DN1DzzLKQPKebtGUWrQ6FiBhZSvoQ1LJxdW34cnCDbuwEzFUcDWJUWVA9pALH34Twv",
  "key10": "3fT55HGS4mkiSpudKQin1nx8YZJ35uENNhuwv7HMJ86ACiN1VR8D1GWKNijv3oDeg4yvcXjYou6tRKWRa4MfwvBL",
  "key11": "5tPu9UYqYxhc4N7EtZcqUwZ9Z7BxNy21dN4HLmSb8mgZCDrXjeAeY4UvsxH5U4W2AwahmLNuzkRxDcMphVHZypS7",
  "key12": "dKhpiNGTdMFN1nw6rS6ASUdZmYXVZDVqRs4VrU3GV7S5kUnXerBGJLp2xxvmS9MNCsoifLZihxoRTHknnd9B8Zj",
  "key13": "oUjgfVqnvdCHjnQSHiJppbfr6mBhvY1RgqEm36skx5barTwjAHrK7umFVSQ7xF9bEmdKXrX2B6XfcoAbtDsCYjD",
  "key14": "3UG3d1yEpwDSXgqHth21KiGhHwtnVqh87JSxbop2Su5qGDYiGFx31WqyCnWJVf7nGF2ZpyiGko2Soxpxh4UiJsJX",
  "key15": "3JUQutxYm8v4T7MuyU4KtxCPoBV2Ez5WVhEBeYk9iiJvPAiETRC5JPd1XpzzYFEvMBLeCn6SDpdBuScf7xtmjneE",
  "key16": "5i4Kq18HTNu7fNZ8JPt9qzchiCj2H1QZNujbtTvt9Xtqi1s7GAdDjoYM65aDAjoLX3GKSzfyC8JQGFLLskwovwz4",
  "key17": "58YAKefW8AGWw4Tfz3ZJBmB3SD3a4Nn4fmhWk3FYzA58ZDqCmmnu16T8WeUcb72i9iS5WtHiywoZpw87RqEGxvUG",
  "key18": "3xs21QhaE5PqU5GcQFLnJ5LdoeMqdsUt5mhipE8CLGRqJuCQ9bB1XPHvHz18cLpXZF2nJqTbZJaFm7pi7jwbvJvA",
  "key19": "3JK5SD4e2iQ4hC783mpvopAFR76sEawk4uLqTx8L1qomsEw7J53bUU1bLHW92b9rWNQmUQ6GMksQZR3pJcY37qVP",
  "key20": "38vfoQMMXbkrvpPT1mPG1iZCKeAxndMNE2zdrqm87AybvjjzmgjekuW8js1RNYLEFe3jx2mPQ8CDaQCHdTiWWgf4",
  "key21": "3ErWGf5XZ5sG8NaLcG9goN1THXmtgEiwEFAZpNemyPxmH9sBwvfoVWSxJoQLr6oGH69ictRb2fNE4TYphexvv1NY",
  "key22": "3HEcxSe3m6bkVvmmsmbg3uFnvf5cdWKQaDQEdoryATm4KzgZsTWiSiimi4R5YUQL3vuSRJ4pL65jNgYSgq15c56n",
  "key23": "4V8BuZJytF529LukEL25WrptREkJoiw3znC2TMXyp8TrKgVEFvo8kGoos9VTLckzPxDwZoMHRc8wyQ5fCKtwc7Dd",
  "key24": "2ri2JD9FYwoWyoAnhUQFQDy3uhkkVkyq6f2PYaDoTMctkMpGa1R6J3JGzYsFBuh1QJjJ7tdzv6mGgtioNfUg53e5",
  "key25": "5m5A4TrFskpXxnhC324V7xJpvU3nKXqMQf8P2biQoTFsD9nKSag7EmQ1k6wYVBRPCmsf8QtopsNYMufKz3rqk4jK",
  "key26": "5g1trek5kr26pXDcRvoWdgFTdiGa2TQf2mPLqAZwcgJfLkV9RRnPrPinkN1SiN5zZthSXFTs2HWPtwVRHqqifhnH",
  "key27": "5UCBzrkekAkh17RofNquGtwqR7RRMZKfcmoyQhcfENgHgErr9HrGmjAcpG3DoHiqBFoQ2GzE92RkWGZTCRVsexNx",
  "key28": "3ZZ8BYKaPuKcXoeLt1o7o4ghNYqL66bQjxJ7R9JDGuToRjiMjbn6PnZ9BEd61y1n6mz4mPw4tLHfBXHdSrLPfSPb",
  "key29": "4Qo9GmfkZnNoqCtXr7iq4cRfgvkL9AYPepkV4vYXeGFKy8ZrqgWTajDMMbxfDWjtFEWCiAmatqUPDWZnHG3s2iCP",
  "key30": "3kvP4qDdxKiZ56wHKFxcQDAp7RZuswcr4xdtY6nbbFn5LVBXbRkbwbhzzzGPzi1CJFMuQtMebHbnxELe7aHQBmqm",
  "key31": "65ktAcWrnvLhRUPvJhzAfEge2z8YFtDNRu66qCvgzaaDE9Q1aavuD4cZ2XvQKxAaRYCYk133ynkMit5wQJ16cJym",
  "key32": "3kj2SC4upJVe2WFsRMGLXQaMYxshvoJrEmThXnZNfvc5964tZyD2HMg2CXyqbe95eTxJtrawwW9HnVBSn54YMq61",
  "key33": "2fuEoMmsY8vxcGe4JDPSiCDCR5XygHyTjW9UXbKxonHz7RT3RSnMgD7TkuZFBxqA5dxmbbdED7AY7S1Vs4pZq9EC",
  "key34": "3XApu5D3sXTd2esgNZjnRq728HANKgh6o2Xwa2yTChE1GiNZGUNNLqrBLbP7QFByLWnjDKBSySZvynR4HknxW4DY",
  "key35": "3iPzH2QBgWjzvt3F4CayNCu4fVDnZpr9DCgdPFEX4VF57dqw52k3d33xDEmiY4LykZCBAriAhqoMbNocEN3bDXhn",
  "key36": "34qRSACFDqB9rnKcGSVZihS4UfrUFbqPZgoVguimwWyrt8iDx7SQACrM9xwuBGtQykYzDXnUqZMzCYr2DgJ8p52c",
  "key37": "57dscPn4782LLxiL2xZ9SsS5Vy25mYy1rZm8wXtwozhEsutvCFfGxQmejq7YAFpsUxAL42QhVoztsrgSRRXkBGaU",
  "key38": "5EUsniy2XDRwpxoaX5eHshB1B1HKWwmN3z4kJQ22V3tevafqpBVz2pZSLMqQDZySQd4kuEAkcV5ieM8se7Tvtqk7",
  "key39": "55gbMN9G3QLoBbVyU6UicCBcd5ctqPH42p5r5Am1ezuqgToUdASXonJS8Dd1wQ9Udjd9nD3VvpSpDhZSvr77fsD2",
  "key40": "fqTmmA5fzcZUxM8aVxPixbgiED8xs9bi8k9hmsAQHR9MvX6JgudqqzacWrdJoPexTE9u5EUQXWQRkfVgrWsaByD",
  "key41": "a6tgCJybxabCYVjQjUt2bjgMSSY2UzJ4FcxLhifxqjfggkbMmGHqhQV1YHvWauPejudfafBDztdJ57rUvuptBoH",
  "key42": "2eSJry1DnNZ8iENn4dY4dfctXwZVUyv7WemVn2QrEW9tnz6Z3uidRnzvv23FmzGNLugsMA4b31kniiECpe5piee5",
  "key43": "3GH9vT6uTnUXVZag4BtPCdX49Jk3UE3bJeV6cxZBc7qy8QmbF8tGCCnYwHdXKRz6nzeTkzJuPTff474dmQTcH1Dz",
  "key44": "nDrxpyNfXLJFzspzkgLkd1Z84M3b2JXP4UotgQdctLoh1ML4rBHg4ZMPz7PXyDhnNPuXq5KfaUapNPHoRgfAQMW",
  "key45": "4bD7HT8PbMTQzFDQfqX3fbBkTQ2QeFUb76zexp1FGStxV6MmYBapLoNXvzqKonFeJzuUtRkrUCLSDkhpvGvrqY5v",
  "key46": "3cnHFzF64EfyHZpkAHN6iJtYSJsv7Y1xaWN8cbVa1iY89QVEvSx6TwK3oRPD4ecydwtZYkK8bv2q8vBLAYL9Q9Yq",
  "key47": "5UGYa1f3AgbLvRJHFApk4Cn113SuUe2SuDaKrQAzZDqoYTEn36BYMMUAushVb17uvWt8NeSxba8QPjdtCdaeywnu"
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
