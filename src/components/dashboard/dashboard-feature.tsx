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
    "4FP5Q7A7jpPm1ACkMzNcAzNZbBQjt1Xh4y7e3MAacPWiMHQQRJGTzH6FmZPq2b5apzoNy8rm4Pe29HXp7fTz6sAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqZhAwsrBynGjJtseJzHS5TN6zKXKbGvExbrtR5wmvvaewABs3HtDnPKciSbXEKUWWbNj2vV6VjSPqW8WqkDJhT",
  "key1": "4YRbQ3QAL1JPiHTc82Jfa2uonA2XWSZ8d9d2tyjdZxccfMYNRgUTghs2P8nsxMBFM82GeXMPMee2ZTUfr9vFCTgG",
  "key2": "fdqWddEHp6P4mEqXBfyQZH1DEULZV1B1cy3hotP9L7VaLX4bd7xUKEZv3qeE16Q1TxzHZCbiU4ZVgAKSCAfUABH",
  "key3": "56w3PH4hjvo3dy6REDA8RErVVJCv68bSnmJX5wFHiUrE8bHMEgoyTfcLAUguVHTzDU8PLw3gpdZ48B6JhVaPjWsZ",
  "key4": "GtQkaEy3RbxSDqERqpZ8hfXKbmRmNkB65eYn9CYeEGTiqF1mLUXmr2mU2ZKKTX4RBUUoyDnPTojpPM2Gp6FwMPP",
  "key5": "2K1bFwhtuLUJG4bz8QB1dTRD7NTWWuhZoVTEvEygFLrt9aBM7cg5LvGH8vzZk6uq116ZGgHGMZvmSXVrJ4tb4sBi",
  "key6": "2iXDFFvsTXsNrJXEuS7g4oxjJYxxymjsHUyPHyfXmLKdENjD3rADgkjbq2M6Y2YRZkhx4S4pbQNWw9RvCDZyT849",
  "key7": "5pe53FDEuFkvKGKDKqYsV5WYrYVPVfK3uW8nrK2SnUFSW2ouW4WZFJEgNqoF4xGeRXRRJbBipmGE3t2bjaSvadv2",
  "key8": "4yMnpsfnYjJNsZBiDSM4wUyaZgwyQEkgWLBi5yEsXzbwojdjyLWbzvxHBAfAZXMCCaa1aK5vT7g3aDuVp4DTVuR3",
  "key9": "4kSuB5G9DuSJtzsUhtUQxoehzqqzC2KPun95SpbSNtDHhtmHyNnAAAH8YvFEKoZ1QDJtXRoGkdmkaoKAMTxGj1Nr",
  "key10": "2sNL74NaN8evGLNqkVFtRqbR8EZjyHJXCqKR8QMoCqMfoLAmbbnHm8ahQyo2M1w3AmgcEXVP8fmcBKDe9FnwxmsL",
  "key11": "2a5kYeuw9inxjdnooPGHK3osbRsLmgtvfWwtiWQuiKL5zr9wrGTxjZaJKrGBFYtRLrH4aTCgEviFdZSsWnhXo9jA",
  "key12": "22Nk4XLDKZ987LMHN1YJNf5dtShS8DPK5cGVkNhWtsqwWt9eD43EgLQaXcQFvKQ2b8WFiiAxXQmVyaQagBrU1RRE",
  "key13": "39BiCumrede3pE9mbDrWzdrgvbENobsRH76x85V9qTVYWAcd2EdzZSVEZuitB6wUn8fkkHwTujK7Uy6o7wiYeTFM",
  "key14": "3u4E3ko1NVDjrJKgZwkDoCQLCjF77cCF6mXT9nK5MFChgkG1xAVbu6F1qZ46BG8byRcK8zoowprgAD1DTBYvG3yU",
  "key15": "3HM2DrzdcaD5gwfPh7tVFsMSs9TjctAKtVAJKHzZTngTWVpXbJTiKVX3tv9yfFtcBmsVbNyQYb29EmxCAom67a6u",
  "key16": "5oKaQV7aQJ4LQXewer3hHKc7sA6FKv72mhLmEfKYTwDq766vfe9TjVU1ZtzMve5Z5xAJJMd3yy9oB4ECYPTxokP8",
  "key17": "Mv27Pt14a4wKVXFZwakDuo6THztPaWQ9mXpeUB635c7ym5q6vz44Hr8fqC3DC5Tm2xkgLwihMJcrtvdjU4sd3Ya",
  "key18": "3i8W6Z8uZKJMycNejFfG1SURtPUmyYjNfot5oPtLSwbcWPiBnGPWExnm3LJKBDePTnzzYKt3ky5dgYeBBuDCHeEy",
  "key19": "5c6rWQD5JgaxG7AzPfFguzKKXMhCzu5nivFKDF5y7jNqsnu9kvc9D8k4RXUhamTMxSN4HtPtYZ7pWyazaeFoix1Y",
  "key20": "2K5ao3MR3QmEig7sf3eVgLpYGt6yT28pJKbFBjoTLchqhHgch6SkKcWP2Y6hj9JsNjsnX9a5XjSCsdeSKrmGLcLL",
  "key21": "4f7cMbDcJftLWrqe6uZ9qYM2ncGApoZDyB8qbTQP416Ysu5dDwzCm7ZZkfkgSf8ikpoHQjLW5aeeiF7ZvH9CckWT",
  "key22": "4pbd8BKnHmjG7mzbkEAt13f7txQx1q7RehMDaeorAENYfMPfYwtzbAmmVMXH3jnS1nCJhJcpSeZBscetSnJi8T8J",
  "key23": "2j25iZ7YcnoVnfvfKxKRFMxQY9yGSrUwGdydd3GSENPoTxfc1VzmGf6u3gGmT4XbFvefDYkjp4Jd5A9sDKEPo6NE",
  "key24": "2PMPgmJf69WhsXTZ2sywEYxgRC1eMJzM5q3maJLNuYr3TmiNqhPyRM5RLvKqARQsCx4Sxf4n7DPK4V3UobEnHdjH",
  "key25": "2CFT7TVH6YSBN8ZkVe2j7Rt66sXJBJ31qk25yCqhopHXmn4TRqMbopPKz6FmtBr6PwhDeBHYNY1X3d24c7dYtAuM",
  "key26": "4BLMgEauw6TdbRvUkjhgbFP2pZj433cRjxGfnveJLtdccDbqKahgWLhMmY8t3uAGfDLFKKJr4tDHLK8F5MAyuY6Q",
  "key27": "tEUsCwwViQRXZH8FE42kyTATuZUd8DQtum2EnKTVY4hH7sfLjA8JojTrWtY2WDpc5f4AA1ZgaeEcPmnULcPku3P",
  "key28": "mW6L766kToPFhjFQBDXXwsC59GgVYarTfPxu7cLRfet1YMR5SqgLPVj4wZaD4xgT7XqtAmqi8QHLmPWJEaUqWgU",
  "key29": "2GRLJ9ej2y4he2hVrBys4Q3KdCHzJFpfcJRJ8z7dMokLjMkUheqP19wSybQa6d6N2UVR39K8FiaesaDvik8augRy",
  "key30": "52CKXjzFy9NdVfnXGt1VGvkWj9urCXdaZoiaCzJamJps7CthgmSG2zkqtDBFwmZkGQsgnTFdrpeMHxv4PumDcF2p",
  "key31": "5sjwvgFGLmohab4SejaGmPVxABgkfyKBq6FAE1kLHpFJ9pi2gnjdLVwr9MC5QH4By4TThtjdFuvRs7dd6tf2Pbum",
  "key32": "4QiHnZqmEh1NMgxXYmecNpDa9u3sLvmK1azr9MVqkuCb2UzFsMkSZXuZhkAvGcMyzfngbdW81pWHiP64gLJ8uro7",
  "key33": "5MBKBnoiYHigs5vMFiNawjBsUNsF4KkNmmoi9AEKtBxjkzfisjS8Hh4PPN19g6JtbuDWeDvA6y58ZVwjknchF9pv",
  "key34": "5v5qPA86h3TKdaL88PRkXzegUcdJfwRW3z9uj8Vse36fr3CT9LSbrnWK3rp4RQUQXvGiv4363DLNkP5BbikQYRr",
  "key35": "5kHFa3p49WqURtRfJQiRcMeTtvoYLtc1KamHovnjbQUPy84f3bmvG1iZtuEbkPQzKuTEhAFnFQkRRAMfehw3xLoN",
  "key36": "3iZDHvtSEnaUh1oRnKg6E5trZsTzpwCoAfa5LcFqBpijKqMHGf84HxGQo2GrstUY2cny7AzwvfNVwaiU8Hh4VZhx",
  "key37": "64PUzETtGx3cLaKLMorFxFuTmAZBfA97LhZKpvRbDJjLGXFsnZaPNnWeKQoakU3LjgnddwcGUiMHynHxmqC86mN4",
  "key38": "2MrybJwsEGavig8DiYqzBAscmeDPy6YvdmWC18DuWJEDkFB8n8WnJ7M1vnjMngvfGrFsg5Uh2B2JyQ9a2Zu6b8MM",
  "key39": "4xj7cPu2hYXUa3Rbaz5NEgn53b37B4QDx5aFmGQoyGMQ1F1X4xR2eZguxJWue9E8mFboGNzrLmvN3rwiPUvVbUYh",
  "key40": "3TidJWi3obhrc2R7uJ9FnkqvttBonwJE4GE2or1fGV6a6SPoTHXwPP7Tbk7UmeoHvadWYohi6Jf4JhtQ2F2FfRQy",
  "key41": "29q5L6ARhjzikShjY1YKNYTrnuLrBTWGrZdA1avbmAKjHBSZ6CGPDz8SzrM4wKoVSFeKQ7kx2b6fzKiwpMzGec79",
  "key42": "23a1zcYynu7tSr4PYKyFgCDxusHvYLWJztn2rx1dGXVhrFWRgb3o8qjduLyueQydvnYs7Vt7WAQSy3syFsWbUsXG",
  "key43": "2hncNV8yhMfvoXU6eGzpk9Ez9XS2FwCexzuHGRPvYudcyaX36wqpPDNh6c2k9tETwAx2VoRNAdwZBCTb4FA9tpTU",
  "key44": "3Nk8rhCs4tx2LLsHTWnTxwkxix6FTvtnBF8vvicbky1YhrN2jz63sN4sTEtszpgBDtqhoS7igkhoFZggEmPYqYzh",
  "key45": "3roA1nAzMHgDi5z37rvRb7cu8cTd2oqD8keZRTcC6mHUZmNBfzTG2JJM3Sk48Zfe2x4hW6ATRc78kLfY4yx9QGCJ",
  "key46": "2DUr7Y55wZiZcC7bfpkKHf54jnzGvULu2fsokMEW2hVEeExvdBYWrpuFBHZ6Q3moLnZMYHkK13kfscJ8wVY47dvD"
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
