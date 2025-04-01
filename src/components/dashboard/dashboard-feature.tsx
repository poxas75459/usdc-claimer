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
    "3drLm2ARadgttY7YKZYTwqMCaVeG7MmQdjm7W5d5QH3p58QKs9FVrSWUVGXoqTdNzKKjSnZJiv8oRfCkFnzVNTUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyUpBYPwXhXNqNM2UhGFhMJmPFgVi5FJbTnZ2xuxd7BuyQuoEWhG1HWZGtxRo9DYztKR65Db9J89Z9AyTpT2ksG",
  "key1": "34eBrascWD2hZHKfcPoAE8SNYyuac8JeyzpYikLeCgFMVGfMyGgovkxZMAX1BLYHWsDASRHgpTh7F6VQGQJFJHti",
  "key2": "3e2yuxbGEfJXujRtgp2PYtjCfQGRXPK2idGRJSwiQW4HwRhMwfZFkiyyBgBUpS2qtcYY7YXAoY2YsEDX2afyuZfd",
  "key3": "cACr5SxenyJfq91XCFCsiEtSEqKvpk7FtDbLMVVJintDeVv4f2ZYNfaLq6aqoFohZ1zkao9PddZpEEryD7gEcKZ",
  "key4": "4m7GW3EHU8fNTzFugSpodJbgD5gnpHGhmNRDggwzVjYukLXtceeucJowaMPg9WRiRjVngaR6SNspRVg3rQ8Qidow",
  "key5": "Nt5s8eJVg91zvaVWwcQDd5BJXx7fsVt9Knhgr2RVqye5XLghVXExbuynWH5nXwptYuStbmVmDD3uHxs9GnEBK6v",
  "key6": "2QFjehPz6bLuK7Pvsc4p7nh5o1aQnbbMCpKoypmuXza1EADWEF6uSXCgakA61HY4gpts3EwuJz4NeCJucCwK4mhF",
  "key7": "3oEALDVjPtYR2Fm2eGYP1toMsHprgYVaDmXWQn8GhXFwpBcurgGiSFViNABbgRRUTK4khAFuai1DtKJoCyWpWvhB",
  "key8": "2EYmkipJHusTYZZNBfsTBLzjuS9rZ28rG9JVmQE6sN1N6JsVq83xrwynw11r1sJ15BRWq3SbkW8gpP6Ex552bC8M",
  "key9": "2CRHVGHPKL17HpFZXbtqf6tKCyqiFGVxs1JWzD9yTUJWrkEYxQgmWc9DGs8wAYswRb35vLq81D37fhc9N318jQW7",
  "key10": "2oJ5idymyVNem9GQ5qsu4M9zkwqhakuzAHYzyCpuLp876fNkbKjRi4HZMRgxjCwgovufrbYd72p8sk1sv46fC4SV",
  "key11": "3qP5teQNgau6wPNDP99WD2dmkdTEjcnnFCdcL3j217tz5fUXaezrT9U8FC9uu5posR1PYqB2LRcEgqYMbcNxYmT4",
  "key12": "YQG6jUAe1X4Qm6uMsGxsLt4upuLDPfGDrLqDBHUmReSuQM3UHrszqQGThSiyqUseBbfDKAA1FmVL1oL91MRfFgS",
  "key13": "PTUYmBfRPzbisYmmhpUmi1uFo5dCt5wu1Zx6cu89QZa7N2EQBcqtTcQ7odaULo72nYYDSDjp49BGADW7BfX1Go5",
  "key14": "whrGpRWNjxgqe2HDL2d1K6LY431c4vc7HiNgw9UFnnsaGjiPrN5mSy9X3rM1AWNhKsEcKcBUg7YfrbiKXJrmvHN",
  "key15": "59JRbGCWZ2mnk4epDY3xAoukf1hoXSw4wBqofazvKdbiYJTfwPinNFBsor1F2bhYzoEcVwJqFwfEZhxD1huHS2H9",
  "key16": "2pEpTpNNT7YsAAnaLPZxC88eKjRHuKd53FaR7vtzC1ej2MsHi2JEjc4YmLk3ZhsdEurvZ3BXYQQYvNPXcFfpv5p6",
  "key17": "5L6LQrNv8t8CbLknf3ZtTYs3wAumvSfCwUeb7wWqe8hUNcP31zpXQdaCWDdbf8Ag5aBBzLbjZX5XBzx3nQdankNZ",
  "key18": "2DbSGTaTmkTmrTkFdtPVsm5hVPCShHuLaaXvr1jdu9Je1e8ifeTRQBizwoBBwCvBdhQnb4cex8RkMvF5BZqVicu",
  "key19": "3dnpRWTVMDBZ42vrCk2MY7VcmogQkn73jof8Ro5qMTA6XK6HHHr2qimtnE63nBZ5WYBNYv86kKBFk3vCuWWde7Ji",
  "key20": "3B7Yg3zBaPNFAFgSR4Rav5Au3wVvpvsfb4Y6JHr4mJGURztCjhegf7fdKybNqvpo1T1nFR6hKAb7CVLH4nimbrHE",
  "key21": "4PurpnDh64uKBb8ALkB4zhwu9eRjMLF8ATTQ8dd6hnMRrzXK9uoeU1jZH1fdftLbywFfTjnrjQzNvRgsmJUY6fHz",
  "key22": "268o7MJvwfSqo4CZz5vfW7sKkrYjDGmfmxjyTR1kSoE4oVxwnJAqLJ5xn3chYpW7t36SiY7h8s76pG1i73dKVLnH",
  "key23": "6KtjQ1Nkebw6QLbU1zg97LvcGamLUqCnrMKawrr9tF8iaqzad1pu367JqfAazWWgYaCGmqVLq6xSqimNhmTgkit",
  "key24": "216fG8gzN2PuouwmWbBYNzh4cf7TrDBw4RuiHEADjkrWrcuSxV57Pxx2RRnzoEGhoj6oZPZFRRUz2EuLnS6Hb5iE",
  "key25": "4KJ8dxxwHRHoQU7qpvXfKgdZT9iux9jBVajyadwS9Y8Cwork59WETsKyu9Bo53WAUJAbTZuLfBTiRh4Zwok9ShVw",
  "key26": "cneVXchkqoC8pNcjA7pU6XGpZx8pWeKaxuYmDUjdDwpvzhdQGPoTfhzMUBHq9g1rXdyWRUZSDHXgs1hzGoLsqgf",
  "key27": "VQTRqSFWnko9dUaaeWjHkeNPGxQdS63x5Uo4GhtHxTFJJMvRLPAszNK1QLo92thv37c4TYxYUgvdq2ZxsWdEAPo",
  "key28": "51AdB31PoN5TCvD2YJhYTGo5jxor9oqdxW3kSJa2YWTZFs9qRvLw2UpAGJnydu8Y2ZCroXCsmzHzowCXHzh5b9VQ",
  "key29": "3sLocyNaFWYJ5hNmKAftACsVvapXQW4WtV3WjFJvNVCaanLyyYiUuoqo9CLrJrvn6bMR4htvNFnvJGHBePcijRer",
  "key30": "3MxrjJJpDkhzq4KJhuG2nu2uBdzmnJDcqQX9MWmGbh46yPu8FzTwBpqiM8gMvXw9mqQbHj2Q1B7smUXH13dkV4uk",
  "key31": "4cNNjVkF4JujcNcAebQNWMpcF46g2uBKGLfA8P1Ax1waFsRsMjF8xXGNa4vy7fi9s1YmM4q436njStABpRs7BwqB",
  "key32": "32WYZXThFFzr7sgUn7L5oLWzNbubEz8d5cDB9dwqePwPcBRrpy9Say3kbSRqomcaFqS8cesoySncantgwxRc2MxF",
  "key33": "5CdUDeUBd6RFncGWLZuSsuyPkeFF1sV65C9ata5Jdq14QdpfBXwpThnBG2gbNLwZUkmYg7UDK4dCiBKMYQPX4QQp",
  "key34": "WjaNGXxSHujr4XwwJCqMnQSkL6J4sNKbw5Uo3MRmTkK5NE3UCTvpTe6d8mDyN7fTqwACa42JtVPRQhBsrRTAwSX",
  "key35": "4k83mYmRzjNEjKE2nwkzYUSCziKceZUNdwU8YzUWinhmW6Nzv7MBo6mZ1h4MVCX5sZyduxNA1fQKD9CCj9ZK2v1j",
  "key36": "4JY8gt2T3umEEbcm5dH9hP625nrFBDAWwRtip6hJsUNN6vNMC1JfaqidK7oZ8yWDi6jddH4x38XVu3uDFsp5Wc55",
  "key37": "5YKqhj3YmCZXrmuNh4oSZ6WD5JnsTSeuBkpbrwuAQ7BHxzgPQh1rjnTCxMMmuDqZp5Tev4sV8LmhegWVm1qsmXyn",
  "key38": "5h4LZaXxd3X5s4qdfN8um41wjvV1V2wBNYKz695VQt6iaDSCv4FrvR6rWVTeMTNxrW2HVEUr8Ncz8T1buED4rUeX",
  "key39": "2nrZg7M297ikRhbc4eskPfUMHA5VoGh7Sob8UpFqj9M4gt3GE8uUcwBMYN5VkLMKnMkM3X5SpQnpW4Mz9BXsoNb",
  "key40": "ZnYtZh7asDBncxREUjauqgyv4C1kHB8osCty79q2CafYPryuBHxMJs5Um1bfprUgUh3cx7LMbp9HeJ1F2Vf4p3W",
  "key41": "4D2N1gYQAyU4TwjmmFerw8FhvxAr7KD67T5RMrCMvV465MPygP7x1yRWp41ea3NbqRsK16Jz3znnr2BgfT3BfqMb",
  "key42": "3Phjxh37B6WBmt6ZWGSEtqgGAXZNcYZFsmuEV3MAi75MRFpmd48r91FgjAax8QcbbqWnRcwmxc7rkimEbhSde6ud",
  "key43": "5PfihGAc7KHbg8DioDU3rd9jiBrnk44K2hy7MbeAETnkEWmTBKnEPgVnNP9wFj3EbNA8tNR3ASu5mwn7dykSGbVY"
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
