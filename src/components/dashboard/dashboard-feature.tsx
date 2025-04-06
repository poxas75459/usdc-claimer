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
    "b7J9EqcpQmZpS2mLEhZW9GNz51hPdj2sM23g9vJ5VpRPUeE43u9GNXPz3AAMVZQzZrXTaWd4h65RFuQdhGH2NLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P8KuajjSb6w8iCU3dAfwdgkJ7bpnTNRJWCGJamxdZBSBTWW9Hk9HgBwA64C6UQtHKN9e6swbgyoEym9kBLZvgcp",
  "key1": "5Jqm77QfaAMxbjwPgLR3aBBgk9NckXJPv2A8DPkHRWEogNNmjtHKqT3s7wYEKaoxmTywmdP85DrYJzUfdhVJqTya",
  "key2": "5jg5BQ2aHuXgVYS4vq18UEQL5MhqyYNcKMwZFhg5NMXDL8LhCGRz1kLUijirV2tdJc7Xj5Ep8pkGyWMtDj9rmQhn",
  "key3": "2uAdZcCQEkUUcE4sL23ivSUDPTz6cjEMNiLnFyhEkCzf7qF6Wx216HdowMkuXhdSjWmjqHMECqwWBBSj6MZqYEbx",
  "key4": "3WnJ1KNdeZG1QEfknkomarQX1zZFErhFVEmhxoLiqoEqr6KbRUNDStoY2hdewE7enS35FCzPmotRyqX6e6gvcJwf",
  "key5": "33sKrvH1Dyi28amkApf5GCs9hJHcXKsHSTKYP6wbzJY1ZcBh1U6LR6b51KzYDPT8Z4AujmKsriJwyaJvkkz6psPE",
  "key6": "4bbWzu2ZDABjWoHDV9CrwRqqS6XCKQPdp5r81WgjJR4mofaL4B679VLfpXpiN3W6deGAySjmyQ4cQ36ZPc72r3np",
  "key7": "3TSG5DCfRPipPj6xW5mKGg66EjSpS5qgiYGzQmQBoVAbUWaG3aJ9XCX1haBG91MyLXWnNGZvPWTuqq6dnRx8awmA",
  "key8": "XmUUy9m2PUW4vmsA4fz2T6x6u3YkydXQYNbN7JJv7LhrV6CBU9XTryHuPSnbSqbkYukym4nEdFbztmy6BYVVxht",
  "key9": "2yTB5R2EjrEq8Bxrg1YUJED1PVvR93MMx4W1FngurapHEUEaqCjAjWzk7GrAPxoDmwDt2GomurxBN2GxL9mxr71L",
  "key10": "4po4vCS3R8C8HgJwxKQJqvXaMvbe18sjxN313jt9DZ3mYsTmbasq1LRrRihQJHATmeMwTM5ZNqENNvRxFy7WPFUy",
  "key11": "2iUnHB37tB9CUZB9U5pWaeUPRpho1xPCzhv6HU7pMunRoi3cYLKyoD4YmjpyxZaQju15CK125iBCzmt13nobNnXT",
  "key12": "4h4VmZBRZjrn7Bip5u5sXysBMDiGkwmxrKAivcxeuKSvC3kfESNxC9pxSosxurBQUFN5iKZvJ9eB3CGizKADkYBM",
  "key13": "3ey8sBM2hcjEgqaEgNjxW8xasYMTaGGHEPnTGsbWRvmJquMDFm71cv6o4GfhWZ3DuqnjzpeJvo42gtDk8rsqJ6Ar",
  "key14": "5QkyiFBjj63nLK2AVHJppaN6jWQXdhvK9H8pc5JPSXaTSVnTiYrLVZM2PnirkDcwKksjGFt7aSaZjFrkCXSDYHmn",
  "key15": "2h9rs2QWXPDuekDGcEXZL3jLFSycfNmnF4SPBcTGRaUtuo9pkdfszQjGZYF2FT35vzjdkHao1Dx2xjWYBt59gkoP",
  "key16": "3vRMTX8pB8BDVKLuP3BM3XoBUi6i8H5q9n4eNaopJqy3ARyeeJEtGzNy9Ut1ng2nuhrKiBZqRaFoGViAifMWc9fa",
  "key17": "3XsyoXGktkBrFauu4LkFq8QSFqtX9aXbq55pxvDvaozmUxhimhjPoTRxDRGA246p1iPaEMS2qJmx8a9ii9AuXvVX",
  "key18": "2bZenkGAiZSJ1h8H8UGcMmh3HCqbxF99Xt5jKDG2Zdz33p7cDfXfbCjFTAE88RYjGbpNSHHEn5S788ynDrqN3rAK",
  "key19": "BApW43zbNvKQu4W2mXQQEmThWD8wKUZfNxbNvPqwJidLPJfeiUWAe9oF2ik1buJAgWj8GfDDL3pBhahWXPwdTpu",
  "key20": "4XMSNSM2GoP21wdUQCens1datiLxmqqpe49fo89oqU3hX2NuCeBCUondva7aUMDDxo6yhsxEg7U6q24mXVVJiCNo",
  "key21": "22i7CmuNRwqQkyo6ZkYP4KM5SBoemnfG3XhnDXnRCZGCgg62ZxUht1G685An2zEqzbMML4vot46ANXMnqA7THbv4",
  "key22": "2YBq1gVArp2Vf1hB7HwRjCRFLgt7obrnxFkVAmtpKRoSuq1D9GmwyvSMm2DvTJ5nsGMcpYutHCrEWqXxGU2Fyk1",
  "key23": "oXYTGwmRrFMBXXkwLnzFZUbMFcREWH5uXNMU7VvBepgxXjxDxp2NrnVpUVHnrBifipAFoBEkZxzageW862YWrFb",
  "key24": "LS3ziuzu7aE1Y2x9hnnD6YGwi4oy6XbVT3TPb7Yn8BcnFKJB3PMEkTpMoUdRGX62gPXdnQgJbwR36hKrHJ5ZtYJ",
  "key25": "PW7sEmD2bVVEMdHbrvZ8sHRdux3Hoguch5CNgD6d21WCzcWaKspwJdj4dUtQsKNLParPXj58XQDoVL14BEbPbFc",
  "key26": "21u9VNuT131JJkq4uRRywoCv6wNep8j5E1MoUqvi6vfSfJFo6Qn4vY9FPZ3qaTxP16Cc5uVYa4KgqLAdaAeQxqkK",
  "key27": "5F7kkfVTtcpq89kYgKgUaGuR7jxt6Avi4DkAb4UbzMQV7j6rG4sYK83ySGgcxVZFL8n7eWzAzQfGwDm5Z2SboFgb",
  "key28": "3rzE5x3pZDjVsLCDsBfABpfeFLz6ZyGC6q76iUVWe39vZDSmoLYL4EfW4xd8EmnHBp6x4u7Pjh63PXtpEbudmMGG",
  "key29": "5qkbUg6GzKTaHU5v2srGsZSdSD7gmRAb6c3xxBtMPJaZviVPW7gfcQoLXqxKrSPDHBKrvB8Faten4nkeqVhQbNKu",
  "key30": "2Z1LrdGV16qC5vBknuX9V5TRRqfdCgxrFSPKqnPfMVK9Hq5rD9ie2euiQvmDzdwx6zdZ3xvxiFSgdJ1mBqd88dTD",
  "key31": "47EsyfGjDeKcGBboPJFYhTN6i4U6gAJ3mff3ZzrWDae8Q21QnC8NcHbS2UyckmidZuw8odB22oWYiGduQPiuoFnp",
  "key32": "74Z3FyBRiUpxNQS312Fvw6QaN3t8cjrFwPuQQkEaPVxveSCci266ruSXci2Thcf4KNUTo3BvHqxv4Jyx99iwrqg",
  "key33": "vRYduG9wwZxbnumyzX9njk1acknAoU6TNELAgzLFSWuJfv1ah6uSYBJTaEHVyWTkjHwHCqbuXypvHr8hkyVHXqD",
  "key34": "RmKKGqB1QUDSvZh589jAM3bKoHCTtSrDDbebReiokCwuNGPryAocURXBL61vMVymTCjr4yFFsdes9oyUQQsUZM1",
  "key35": "hPEfS5Fo6iTREDVcsoMRQu52bQ9gmcUTUoSHZN76sNNhZnmQVYwG8TuACrvNTfwj5RFSDXM4qembsi5UYfne5JU",
  "key36": "4GCHzrFJHhfJ8cxQ9dxxf5pn7vpyPx5rT5aWTcYVMUyB3iEMTNJNs4Ss8Pi23cjcRL4mmGLFSerC3g2SsQGjqgUx",
  "key37": "2z8DftKg5qxxrHRCDRFbxSaq3mg6jFhUaixqxAnRN1xoroFp59hqZCRbpp7Y9YJRy2KkjmzHbNCRyVuL9kJQWAni",
  "key38": "2r9Dhpc7XbbXhdRuzjvWsHcSy7SH8EsiJcVrT3ML26YjpCFui8DKJXgxDyqhXuDaD3sTCR3JNU7xbHieosFMAUc2",
  "key39": "2x85Etq1kqJm9CzfF2JTc9BYAymzBfvKBiU3RSgwkbHGNZPp29NxZJG5EDeqmZ3FNNWzzxFHC6oGvU7AQVMvvF3Y",
  "key40": "3u1PCRdwU19RSGCeEZjgAgHoNpgzMnAZZxb2x3r3D3feLNJyAoqr8ktVDcXvU39i8PAyZ2ZL7FgMfSqvXtaJZnZs",
  "key41": "5TyRZwxvcXjfWhwwhDuuSiYp6ikxfvu3c8PNLHU48A2N3kykUKPhVLKWK2sk118qTspEmtYTU5BwA5eiER7ENiZN",
  "key42": "2DeRRWKFPdpERPf1K2QipHfCUaECmrZcHtZuz79MijnFS3jtFzWSfRZ8JQMSvRPDxFe6NrYdHCjhVATT6tPDqzVW",
  "key43": "4acPYPvqt6U8XRRKoNbcoiBePW7zxeceJscN8KCdeYeNNQx8u4aGMNTAHabUdEQMkAphsRCxn8buESMPNfCcdADW"
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
