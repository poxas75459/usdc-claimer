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
    "5UWHGknEUZi5obLsEQfjD2kvSkKFUSsuXCTPXfCWtYSa8CCrx6JAjScQVei1sS4zddDtqFF9pHTeYNa8tZfLqd2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jppjKjxK3ZNSyM3gVUT45tv7En4GaNrfANXiZyJGAVMoGDH8FWzJfn4GYRbpH3g5qr5ESKQaUeZxrRYYFEPQA4S",
  "key1": "5CY4iuQ1GenkXgFEGzepPmVr6XfWQdwGTJp7FswD6pAqopi6VXsYcoCfcY4qHwq2VDbueAACydFyqEJj8FZQCHYQ",
  "key2": "3vowR2bv7VXQKaeXcz5soPRQ9mrdmH5iE4Ed8FeEWkVgq7JHUek6oyhG9gc587YV41M2GXxt6SNe7FiqcK628mzK",
  "key3": "4QFUgFTEjRGtHJtAGDqTLRjqMETmZUPwbmQMhbYPxPBtoHnnG5mBbSbei5UrqmDYc4x32yFfvggExWPPbVQPsJoj",
  "key4": "3drFEdWxQ5y7yahTww6VPYuxxJSqfKjQbpzXs1TqX3b16iKAcdDVkdLjZuKvirRDGgn1x9UyJYPvd6hgzzqBRAbg",
  "key5": "58N4gMw7Gf9gXCgcRB9xbhU2QxKz4Uah3j614bk8hAzuahEwBtuLGpuVWuZPRdrqMbhngKdgSHFhS5wggoi4CXR4",
  "key6": "3UVnm4S4RiZmkYxEwwutAUwGv8755GX87U9m72N1A2uu2XaRmJLCCsmsx1514CsE6HZTRKMvaXRx3etHU69AMMZc",
  "key7": "4QtfTREu9x3WqzGo59Xz28DK1MU7TAdGQjYzk3UBukvyRhoX9RZHjUt7kDmY9WdA4S1uwPPQPX1e8rU4zzCtVQtX",
  "key8": "3cu6chqk7LNbqBffx6vySaWDefVZvEB9Z8GfZEf9GEpz1jH24xbHS68FacXdC1RWHXs8wzLRZvfNC1zPhqh5Ww9k",
  "key9": "4NL4148Nr95iVaau67fccrA6BcH3q4BuWearGf2pzWLYVH5qMjt7UC3LgP8yNr9UHzDe1evKx84u9Cf7BK83mtaV",
  "key10": "3DBXWZ3JKpi2aAwPir85GWG3CbfZ67KWoLba14kk6D5dS5bGEpJs8JCwMom7tYBWQ2KAxYavXEGMQ8WXuKRgc2Nu",
  "key11": "5tEusneLcNXMuzzpRypzDD3aP223xmhzt85RAQ7goQsrn37a8aPQpzsdJHrAuYR9GQERjseJWqs9k7P9upsfmVU7",
  "key12": "4iSh8XVGcMLaMhmte2NTyT6cTfvg2TQLfnEC9xLKtcw6pj1RR16GuUEi9fc2orEyETT2dRAGEZ6soMb5kqrrYoGv",
  "key13": "5CaA7SkQ5f6Dpgv8xJYhWUf5ib8ZJ4Nv3Rq2sLmeKQkZhazmFqyWKHnGMJsS3Qqk5GAaHk699nXyoyh7M2VzoS8y",
  "key14": "3Rs9WGxKEDYQpVaLmV8rgfgVfVv8ooXzEyJr2eACDNafrzrjvJgpHDHtxuTT7FX4ndMzoYy9Gn6wphc1cEkM7NK6",
  "key15": "CCeYoDpL8JHfcDCZtQrSnnzZAHE5cThm8nHcRCVLubeCKp8MNoaqFZBBi7qugqXJgNpwPTwgLPVdtEvgcf7gQcr",
  "key16": "21rqkLhUcyNqwA3g3mLRpvzkaVvQQc1ap5Q8xAsWSiH46swBVToW9PXUVqmp9ZTBhGMH7KUSoLhmUZug6dn94oF5",
  "key17": "4176iBmBoFKuYBdAAqhWqQoFtYVsqni1tgHLXG2jq7ujpPkrerocj2Boytd88LHiEb8pgXHGd8TC8pjn9Xu6jepJ",
  "key18": "3BbKxXeci2HAuvUqg6fCSBGdMpdUDXE63DKi2eSgaXQLsVHDtqRresazGPXZZ4q9XRKrWVWYGzcjawUCgMeqWAQq",
  "key19": "WYBs97Rgy71MLyVVYiqRuACdzCZf2SwfguJzn99aKa9wFYjoUVPgfEnz1nbVXwBm9B3vmTAoGJwGycvPanAead1",
  "key20": "3ssLdFSXWhcNQEVTmrCPqMmHJAHMiBhsG64AuLzJdFj4q7QkTKyLHqURnKhTQnsc2qhi2nfGBk6hMLvvCreyVEFA",
  "key21": "5VWoyDohfiHwyjZTQqGND5oAC2rHDaYUYFnQLCqUqGmcCxcNn7nXVS7jo8QAv2JJLrCA9JZm2AmJxmptMDUv7QnE",
  "key22": "2E3KsmV86CmpCyVTEJpKqNprGvdj93xurAFRxasRrCssoaUrdZhwp4yosxd84YoSPhtePU7uNnxZto1v7YjbZkMf",
  "key23": "4HakULx3nsCF1bjiNvnbYpE5E5YAcXfLcQhpLK9He8Gr2WZrVo5sxFqxxdUvfJhmYz8uMJgWYEyzU82zdgY3W7Zj",
  "key24": "379PQRiJXCs6h8XcjocyEiuxLPwtfqsdWBc6bVFCsf6S2CqMJRVyAZ2KfUY5qDMRazuMgcM4cAF3rUuhdig8wEmo",
  "key25": "2qtd6Ev28YMmTfD9gjhe8eRaJvkbnZebsj4V6mEAcaQU12z1YU3PzzwP62knQiQ3hVNYUTDw9ijwPhbhZ6GRnm3F",
  "key26": "4jRsBawu2t3u59yzPZifiZiKwCg3P7bWFtuGDLphkrPkCHNxyWBhunk1gGbnGKBvxexYJzksGtgVfWkPfU41Nzmk",
  "key27": "bjEUJqnhdCTxy36ntBFWN3ciUUf9Po72ehJsLUx8Eu9WDtS3vmg1nzBZeiRmicr1uKiRLqRUygvucfLXnkVtX7G",
  "key28": "3sUBY347XhaAjE8qiNjcLjMY46G7WEwyXfDhG3JN5rzYtTej6aWSz7uxmwXozFN2NuS6n4Cq9cr9PSna6btKk3Ui",
  "key29": "3n6nuHz1W2Ncw48iuufechJ4K4u9mdzYYZrV4yhwzDXG1tadgq1Q54wQidqaaZ7P9ZXxnkjk8ebqnkukgeGiiHJR",
  "key30": "4byfn1pxh1xemXTQvGVHQ876ibE5CFNMS4yhmvoPpmh9nvJjCYTPNB53NqmwRcAUY53VLSKrvJSqBRJjc3VEUzyE",
  "key31": "K4LCm7h5MCbhkkEArCzftb5tUyb78QGeveRgX2tfxfyyadNhTQkXsSVD4oEcbjfrekAH1vPYwHP71PU7sCDC1cr",
  "key32": "3YK4Berzvr3fBtW3HVqAMSnJH5xU2xYQgv69sUKHiTUdhAzAnxMisF8mcwtiE7SxDwoVeVs1B77YvFFqzR3aMJf1",
  "key33": "frK6GeUm7C78GL3cYjrfj5kJmjii1hEWdH3DoSwmQnhgYdeGgUGcUBQJYrmDKvYLCcY6mmWQeAZguUEaDL335Fb",
  "key34": "2jThXfyRaR4LS2x63XXFURXYZGnuV84cECts6KyUw2fStM1T9Whyg14k8k6iPw5W9G8YWw4df7vab6XCnwz2vb65",
  "key35": "35oe9YyPPbRewgysE3GPyiW7Gx1GPUdRmwRrqhowKqEsKQWzGwAvewAbJgtetzWsDouHFMf78Kg5UR7hyJCxuuYm",
  "key36": "59hvZagHrGDowU8kKVXb6k2T58mzA8oc9XNVFX2RFD3aShJ2PQa2LNdnokEpBWnGy37oFaNfxXZGYRFqeByj9QxV",
  "key37": "5m6h6cwCDaHsaWjTt425LCDuBKp7PnYnw7g6Gv99bemrGvmLHtgYqojJUy7enbtrxcxnKJ8XugffFCFMX8tHzqBT",
  "key38": "GZHiTp5jbgm7i1otqhPR71BPYy3r1nfm1rBZSn8n15fuK7uHFTfVqwU5tr78fXDPeYzbPqiQPU3v1uNoYj4Sf9a",
  "key39": "5nsassmD3WqYen2AAvEdDEjiTidpTcktbJobxyknyUpuFAW2GGHsgZpfVB1zE9izvKh1dGipB9ans5cBfJZWT4tJ",
  "key40": "4SVWr8KhTLMWXNPcSmjy75d12fA8xWeU5oCHwZzNA1ugHE1942Wx6L4gdx8nibTfjKSX5HsbKDndp2vt9pAqqK9a",
  "key41": "3Skzf9h8xNq6srscJZYGHKaRFB1VWQcCtP8FJrpSee3qU45nFNmVvPrL2hjfeMgLaq5tBLogC5SPgNvswY9YsWGB",
  "key42": "5Ay1FAcR2XPP1Rq2B4QJv1xcX95TPE9PrF7WXGtCRzxjLRSJhGwiD3Txg3Jif9SYopmvq6S8UziSCGTDn6rg5nj5",
  "key43": "o1onwCrbXW5biJ9RSdeZ6Dd2ucXvzpMVDMjcxH82hUNz8mfE8ps357zeN367Gw7yNZ7GnyzA4tHvjKzECpZ5xSS",
  "key44": "2X3JU1ZfwGdQbHiyrWNmPyqEfghdbK1vAz5N1VxVNpNBHG81XgBX9ghZp7Wg3ydg9or67ecK6nzLYZZrvzPGmpAr"
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
