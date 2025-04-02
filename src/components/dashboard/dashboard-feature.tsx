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
    "2VnK1QQCdm18mrTRnjenujn1bdmWxNd2Q2ZqMqdrfbGQdysa9WJ59WWy68R9DxmFfymaBnTTwMQndkTnZUbzJapP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YkkaUXB4PEtcZGs5c7PvW4utfqXJ6pURNUpYvwvFktg6QNia1JGesBWvqRfmuhGhNnGyMJ7gKapVMRDy2Jbw6c3",
  "key1": "mCcrBbnWRjTRkpQDpJ8VKUc6375kDDnxaSTZ53ExEmtMQ5MsKFcEjJEzz6UjhfJr9shUo7Uh1kFfGoPi4Lt5kRy",
  "key2": "5cB4yzemHYEoSg1PMP8F7hE3CLz64LjwSsxyn6CrMQNtg34MqSJqyBja38xTZKdPrjGfzKigAvxoEvkXRWVbReCH",
  "key3": "2kkHJGCvd9rmgvP5wrYxESwywWCUpYNgF49pVAG92Y7NFikpBqMKAfVw5MbKXUoEaJyWh9eVg8YkYdkftc1KBSfj",
  "key4": "5qok1B6w79XpJyL98BNpsBzwsy5qNYVWxZ6LRUP36DcV9UF9SWagfoKKmdBoBJW1QrevmK3PxFephfsn4mYAP7h5",
  "key5": "KCNgueyqNHhUU23SdMcGK5teY8xjtcdoyuQ7bAXNVNJSzcTz7XsKqHJzVKHVdJrKCDeXFhwBKDnhZ7SgP9SGkyz",
  "key6": "65CL48wk5pTnLUbBxqe7kpyUQGDKEf7dBQdBpGWCtjNcxL9WdMfFf36JjqZsdD7nznrqYCuUFJaDtgjk4pPyFmTY",
  "key7": "4FFyGhSd8JJeMcE3qm1myKnFUQcXdGAkmtPe7D5dE5BnqLGQBpCSz9Ve5kwV8azkQwyssaFhdMLwSgvHAbSGVk4e",
  "key8": "3QNsvPwseNJed8TPLPFgLdr63c3zUvZ55rwiYwnirv3TKZ1PDUVpsVsSg4hfDadFU6XgqAdrYo6mReJ2NuTjqhVS",
  "key9": "2zKBQ7jhJtKUhfCJnLDX4zmTKMbKNSehuZStDq8qyUfqxj9Yk3PafqL9wh5m255gd9tt8g1uMwQyLALmAnHgVBJJ",
  "key10": "uc5mQW1JZgszZJzpvosx3tee8MRzYsfYMAF6WoJuBeQtXzVjxZCK5eLjZi6DrQmhQ7dWTMGq2uLWfembvMnBRGt",
  "key11": "36nPM4hLv5FmJdbth21M8pRvWoqoutA2sYJZJTL9Q3pJjZTcwvCAusERXqL3RACA7T7tAScriziwd1FRMvjuB9Sj",
  "key12": "3kbedCaonj12vtVZbzSua7qkmSubwgo2KKyaPcdygcyaNZQnch2Ak2Pkg2KvL9tQbmUFKgmUcqLQbaJspgWSdmTb",
  "key13": "Qb4f4ykoNr7x5MgP4uCkxdRWbJE17vnkqRtWfHVTrB7R6cmQNcSHweEG58XHk3u8AqKXvFdMgKjFEWry6vrgyNR",
  "key14": "avEhV9DuNv3s5xaz9xMxsm95QqSG91QLJ2gPs1ioew7CRiZLwYpkCStFVLWp25hj6AAGkMyFmishn1pk7Rs47CN",
  "key15": "5R7ogwZCJesCM1MhKeUquk1c85eXoqpYfWsyFYyNfUKNQA2o9Fmw8Fa7DvQ2BjXKyhEiDXfvda947Z9DzRHUMToL",
  "key16": "hzCZPteXd57TmQiwMWavSG9PqL1wCijqHYNpdApCSshw1t5BSxPNTjjqqXKeGLD3UVLLnK8LC9sMomdPbyFcmeQ",
  "key17": "46nCwQx39uNoPcvHmXLJnfpkgNwJasHwqnQ6H58wEdzaV4hhmk6PZg1x5Cvr22p8wFYXdFvo3NBgmzSnCaKaz8Jk",
  "key18": "4vX75LtdDDWeNDfxu4RqApjSNneWmTwLDyxZjNdjiUNPu4ZFnuyMszTqMcZJF8oCrCmKTm7YcZhxUVcYD85vq3w5",
  "key19": "4brxhQgULSe1p9hdpW5j5PWX9tjcEKDdxRVaLyyJSk64spBFVYfXgvT1wYyN92ATV6tMnPMKB599sjcTpoTy8njW",
  "key20": "3q4mjzRMSsFpNN4v3YVn25hXQURkZYP4bspKjsDrPbdfhKESgMAwKZ2NqQcCjoCccDRRZhJZD79abVYFJGkZZwxi",
  "key21": "4ArxZTKza4f5M1SBCbBUSiaHsgduyjcTNceimjhVCQZgVphkRpJUWNqbQaHMeQ34k2NwrNFV7PGHrHYfmyXCTfko",
  "key22": "2cr6pQdZ8sFudZXCx1iHeJw9WEeoCDQDGbEahZzjtF6QA32shc2nzvFawAm6gp3UzDyDmdDSyjSzzLBDawHf3x9y",
  "key23": "9ALmCJe1K6dicEFJSiQQWUxZiUQYf4d6bRtCkrr82Z6izfxzgJU5fyC2isKywoBwChFqXPPNkFSH1cjeR4wPsHt",
  "key24": "4gFtEkL8zYScka1NEJiiHYM4iJCmKe39X89v6NK9nXKwUrdnUBWD1jgY7pXf1yi5Ap8gJCrmNEX7cb6U1R6XvDxG",
  "key25": "51FDe7aDPDFYEW4PRmdXA6w3hrT7RJNCrmHQpXYh4XNRWwS6XBKX2t9U6ia9dpHP9mLQ7R6bSRo7TdqfKe2YePYq",
  "key26": "3fFfLjs71TkRsR9FCXPnXFEC2aVEnzm64zo3AXGgapdFQKmT1BReNQdJvxUTG1q3ZvhgrbD2Au5j65GJBrwUWpnn",
  "key27": "2yMac7snxPgPEJbkprNMJ2P9aAuLxtEa7z5dF5cJyENnyWymYi3GcpywbodqoLvpuhrndi5qd7ZuXVZGm2h6Z9X8",
  "key28": "32HEGbjJv3ny1NVvpd56JgTf2UhwWbY5n8zAZnP2UJfoUGwht7TsZ3WpWZXZvHoFGv4rfP1oZANxeDFZoSBR9936",
  "key29": "4wMVG1MV9857Q2UXWUwPAdeyrgTNGwrXpFijokuUj6ZaS6GVJh4Kz6MftFeXs5ZQtQaWQ9JnwMmvdD5pxmudgLkc",
  "key30": "2zpz1o8GHMf2zJvPJavzJGcnbJtqT4b7Zt6t7shA6PmZSpZ7oonCsrFnuphu1TMz5fAoRoX5D2xQnBeW8Yfr4pwD",
  "key31": "4V5PKT99niG7C4St4FR4DeF16js9Ax8wuAiFwzTcrLEkcvyvqfHa1T88TaHgdYZBwMaaDzVam29wjZWqALWUPCY5",
  "key32": "5UxJ1HRbrMpBjSpHwN65Ky2PPRsKSZDNjBanx6bDGzuRhuPAdEEyE8TnqigcrDurpkkAEgeK2DfXf73WFXMKPo8R",
  "key33": "2KBT1vhrjqH558So11t6L7fukHy5bqLkEfCu59Kdv7U8dSDubEonNS3m2AoCCp1BWAkQeCtt14jKavokbXUJopgS",
  "key34": "3hJKWZQecp7Ltfvhviqf8GJ7GxAeVWkwf6rHLDR8kKwD1TwCN6tZfN5cc4qxfZJhGNHCL4t9z7RQPuE77zwy5pJF",
  "key35": "CTrYrBS9mfsNRLUCE3ocAppFrVPppS5SkMfzx3JiDyvXMfMKJQ7thTKMrDMWoiNgxT3fCCmSnCkNVP1L1UYp1Xu",
  "key36": "3rovSN9LRqcACrnhtENWPTjSdY6PGymWY335F56R8RgmLFbUF6bxyMZcxEnxgohKYi2XxJ2z5Hvbob2QMdHv6793",
  "key37": "QRSPLWqQZyqkvmU7USjnKvUHtovvsLsTuV7SVBdfo4dgh7VCqz7VpYMYdmyyM3Xi286fU9NMdkkpacPg846izpR",
  "key38": "2n37ifb83YTmVqHh4xUDrhw5B2FnAAejFzPRctcMLgcJkHKbHjEYPGxtEw1e99QnEMdbt4tG1eWfYHeskomFnbez",
  "key39": "4xa4fvW39yAAVBVq8rXgFQvmMJqVM7d4RQe8XcyQYKRreKnRhXhwT5WUSt4Vh28iHFVPct5Ymbt8ZeSYrNhpTvFU",
  "key40": "2mucm3WJXNe3GSYFQ6eG1Vp1nj94xdG2gthAPB2kRzYUv5DGKx3zhTa3563M2vwQcg1BAqQqsVayesWeG7DPLzTk",
  "key41": "5U7xf4ZFzKm9XW2VUBtrtAqeKPdFKNswq9EXE3yAxa9n5uRT6PnCjXR7wcF4D4ksGtCfNdK8k9f8PrWAFkjinoGJ",
  "key42": "4uQTzXMqiUJKFB6fxKi8oM3w7wxJxV4AyqxzfXCRtRw3avitT5aAa7kYw1VrcugwRvAXsFh26aVfUQ6z9Mjxh77s",
  "key43": "2SLR3cBcgtFCtAmbn5JbzLz6mvykMRvDKcZMWjbWV9WB9d2PcC5Zr3MUmqtwHVsSEVjxBzgNrr9vg28Fgc8aVvXz"
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
