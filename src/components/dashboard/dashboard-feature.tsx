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
    "3Z6V2kjD5zDhY4GJx4riPExibFFj9dS3SXB29G7Mu6gQ3dz9ufAbBq8JkfYKroiASc2xtRo661BEkwwguAKq4cfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56zzm8fJm76eRD3xuKLXFL2gvnRr9iiKWgDjebegxrN295igaaYmf2VdGs7uqdUkMV96QAiYwScy22tdW9QNv2gn",
  "key1": "39zdugpyVpeSdk9Nib89D5PjYqwG6vdzyycPdTu8nXh6zbco47VxXaxGfmWeNYTcVKxR7NAnQ7JvkLABxaQNFv39",
  "key2": "XVHEwQ7FDB8u6ma2UHP2YX2MVGZ7E2rkA4XFZNMvZjFqqbX3oDxEHnCYJ2KWWakTTYSpyheXq7utPH9U3nFS8wd",
  "key3": "4KWkEVyUc28LA8EPubZeGxewZY39NwuULceZpDy9tK7vVdHWJ3KsHuSiwvLZ1Wtnw94y6oJfexSaphHqa3z8733W",
  "key4": "1redMtR3zwHCmcPvkqik7MmEyCSts42AsJ7DUMP51sSsTJ2xwHJNpqweC5LHcvTzw5i4XQX7eqiroWUrLdNLHNa",
  "key5": "4uZH8KjXazv7LGrdCZKtXswYDu6WTshPJYDhJrYEdgPYYeUj94q5yVgbKrWkkLZsthQ7zEGvo3eftndoD1zSN7Fk",
  "key6": "LD3LS5uiXevv4eJeZubjLZAUQMQQSKpxZcfGTFgwF19imm5QraADKtkKk3MbfBBqcuAxRmq2drD64EkaU6v2CcC",
  "key7": "5aCm9CZwoFMsSXCRwfRWpfJXc4GniGzWFkEJaKMBgtt6EHXgdAcUYSTyGD8TLLDsyxSPfqGNbieBsiW3ZjG22fFy",
  "key8": "2vycuwtuxL5JNG6mJAAoNcnXk1qPu6uyA9NpvHQEkc8tSEV7bwyPgYnHoFvGJaXGFsgbLHPQobG42ut4pENe4Ebx",
  "key9": "4XGZf5ck9CeQyboFf4XPbfpJEdBu1f8rg4Rj9uStfDri1SGubefPCMu8J8vh3cZ2Y4tGkViGM5o64feZw3sdWmfq",
  "key10": "VBGYPcpgKp7XbvXCnwLydDTBBE5Cpr6bjdG4eohLPHX45x4epkZH5AcgNtVx9tUgCZuq2ULCEEv71poWX42iH99",
  "key11": "5YUSKQ84G3yr3ZFtnHXD8bEKCqw7cKdti8axGUdugPHKNmy8J5neo3hG9SyAft8ZmXzvyHUDqLLjk7cY87bUfdZQ",
  "key12": "215dfXkqmSbMB8MEM5darR7rYhodnY78Z2S7H7DcXC44ZPmnseh7iBHZhUUzLuzgcBzkKNP1FxH39pAaPdzL9an6",
  "key13": "51mJrJbPgwxYQ1VqD5DV8KbBkUiug3sNjxXE56yRgVyP8aUcr1ckZxDv2fDEgQdrPbtbPRqDSHDjYBL981yffcn6",
  "key14": "ggqUPYKNhPJsYkNUSdmyi37GvfBrSibkhANq2MA8ELdik3fUBwiXGFTpNHWiQpi18fkwfw3oWm8vT5UFHwuJrEQ",
  "key15": "2yj6SWPUYnpgnm2zddJGnz8DQyTVhsHx3kib21hMD6yJ5sAt65bo2ch9CiZtXyEiPLpAfVhruEuCPgPupgsuFLCx",
  "key16": "5womJRhwowxQ5PUY46VJ3aHyjpTskv5VG44fK5FMQ1vfhFujzmCv4zAiWWdyFWr6WyKRC3vm467EvxvUsq6QLeMC",
  "key17": "4zPYJ9YD6xYG6c7fTnNLXx4Vi2mZuESzhFV7r5uEQVDA6DGRciGfi4iEp1qxb9H2cDptmxpCmShBAARQqz83trVs",
  "key18": "282JUTAN23Be6AujZPhyG7s5sRkNQDKoef1LiYGRWiqe4sU2fJex3jfwSHdC4M6r4jJhqy47UHN7MfA8AWduxfHo",
  "key19": "pZDNS5aLhthBaFRadU8T2kHHCApooi4C2pPQib2gUMeEupK6xYnDJy6nUgtGga6dhVsfnLd27k5cnn9S7mFseVg",
  "key20": "YheSxfayDx9BB6rbzWQESJ7BXJFozHrxnJkhBitVFiEd8KjgSiaMArRPk1J6fvGLY5jqnf7dtxtESvjVHHAnBEm",
  "key21": "49SYPJwt1adQxnri5dTxNMqS59ivKk9tQ1sN9sFaAr9aNAYM2A34K7AMMY6cfQS1n71xB5WRvtz3oRT6Xg1rDh8E",
  "key22": "2b8p2mksDYDmVbjKhhGo6n9bEQhpNDvaRReFxfonEx4RYiHYQG1MAocHvM7XLQE77bTKQFn8pEpqSC6sTqGaZ92N",
  "key23": "5NDrQZz28mU2dY1UufGzL5RBuzP8QwPZmtMgn7t2s8B5dDbPYdRXsGZHDz6PTwf36Z22HGKDdHYc2ZLinHuNuoQN",
  "key24": "3H7e5cvFd4rJnRDDiLHZD5Q3wpboC1KZFdoukj4Bufzyb7MtNczgnfr7RxXcmncLum24MSJ3CCkhrgURf8AtAHMa",
  "key25": "49mBtwoWi6ZuejEJRVdDsAd6R2hTErjr87BVr1bMC12c2UhSgciiRNj5hakpLQYQ6kQZYsV6wQwuNE1CGWk5kGHJ",
  "key26": "56KKdofxzZLaM661Eoq3bAxWD41oh61cNQaavfkrAQTiVBLM1CQz4ZETxhcm7FMMUoLzDVGNTCXuQqKvYcU9o3Fc",
  "key27": "nFNaKfrZpa3HFdczfmr5vzhxP3CMdfwv1dbtusawFKroCAm4z8ErUn6vUDLyVwUG8Hxi3fMZmDixmaZkwcd5a1c",
  "key28": "MMCm5GBpvLo85VuLvCZRTvCfcxtXJWpvGeWRE3rrftkpYogNXSdQu4YMKKzDUy859udxPhdAqX1LR3HFwHC1XZp",
  "key29": "5wh4Pbw8T8sq8ikhYGCbMEsmMC59t7tPPghiJWU4ZdVjnQetX3ECi1Mz8axcyFx7rw6ERx27BRw7WCGDC2dh5MUe",
  "key30": "5qRn6Rca7Am8F6UbA5AnRsHwqTPQNwniaXuN6BPGypQn5yzyT8acUrdLr2ebbLXsTjVuiwHZR7Qhhjard7jG2zVg",
  "key31": "3CANoP97r1FFfAoFKduufXzpUFZZnRngJVsciK8NHDjyneRDxcHxcbP1PPva556ApQXqjGhnc8Jaq9sfCPABoaas",
  "key32": "5mViifuUPyJSYskPWtbGKgoex9gUKzTtRCSvyFY3P9QbWtnEbVb3qYyYGB4YZe6rNZmPeaCAJhDCSqv8YYvEsR4t",
  "key33": "3WnZRzmRH8iiX9sPFAMjFqvMWMpbuCD16tZ4rLug2DccAvN2HMvCs6c3SE9T6VsLdHjeSA1i5DWAekydawi3VtGg",
  "key34": "jET2Q9iW49XjFADesfSZepoKbDvz43oMG5hEdwM3mnD7Uyx3B9sGu3HRRCizwtz6nx1uLJHMxJJxPpT8kekZ1NR",
  "key35": "5nQWyA5LyEzJo4tGCE4fZjB3zkDDfH4vbBQ64d1nLzs1vZ6AZyoVaH7Fu3HdDb8tGDN4A7o3no3qkat1VPUQ96Gk",
  "key36": "4XgfUGNDsXVP37ocMdcM7LXqfi2oQbHXeNfG6uZsgyX9PjF4gjRNqsn8Tf5fMDvGUFf16qXzhaCiUTZzbZDuGeGg",
  "key37": "2ExtZd6gjx94cNNz7HqTKw4w1eBimPp8sxpVBAa7VqCUMFcgA8acsY9Vmh6NKTfK5JyagSVdJEcmq24tEUz6dVEo",
  "key38": "518aRKckJqRaScG6SuoLSnZQADZ6D721WzcpFWtz61dcoEDzVmvNqQH7FDuia7FGue2EQpsr9NKA4AUJchda7krq",
  "key39": "2jySv4B6x6ZyPmXqye8KVJJguJ6g7YmygQ6CecyHF4SKWxpAogD12xLe6zwFGGSQ5VEHBP9poMV3hXMcfHeprshJ",
  "key40": "CWYyYaDVcsLhG8Jwpa8oN9oT8DmzKgJByy8WZQwNAFdzUYVdU3WMmASfYUDDP6CSvmd1AUvhTLe3J1UZv2ggeSb",
  "key41": "4EnCKHuBvZp8A8SXdniP1MGfmWhPP6Qp5Y8K4Z9CyzKuFyBygDHgzETrJPdhnd1hV9oh5PgZiGQ9XzMo8c5fFa5C",
  "key42": "38BvcRh4fvR4E9uUM7dV1DUMV7Rjm361WYLXSxXdZor3XukMzmNyUCs95b5sdZmfkqHjCYZ2ptMm9PNpESq3rYev",
  "key43": "JRPKKZxurUVZSTb81eNahJL4DR7aSJYTUHzemSftdYCuG45mUu1EoYbbvDakJ1PKEJEUmruy2YcWTuYdtnQ364j"
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
