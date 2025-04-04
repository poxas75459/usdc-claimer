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
    "46XoD6z8mQse66guSyC4TW4Y7ZopSgdqj237JmPCDXHp7aeSdqTWkDKRCx5GygsyMbfRnH9vu9mpXyS5j1YUMZLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ArrCuUo24Hbo2Ag1SCGbFXdUJHvzbmFiD9CLok6zCW2LhVWxiZet1GTntzp439dvDiZMvS9pcekEVMwaMrUkEXD",
  "key1": "34DqD3hZW8LKec6pjL8yBAqwPjLVQdxfQnJNLHYYVyyoA7Z9nTxGEj7H7JXBaGGxKmB7Zn1TPvrUwMqZNKy9Xwh1",
  "key2": "4aDHE1QkdSjbCsTP7yTmp2j61K8cXiv824jYeFA47Yhf58y48TRzCoyTCSHxT7rsq649Hme5P2FhvfongykCN4sM",
  "key3": "xm4bneQUC5u96B85mVEf3zy9WuPJ7dEFdU4uFM6SSxHyLkZdYBBQR43ki6V7Qv3EjNULbDBcZvGkJgd2ekW5BZj",
  "key4": "2xZkKMzH8rZocgaY89C8dgcG1vwVqs67riYtbaaFnDLxuk3AcpJCXxCVsSpQzScDnoA64aqUdKjJCBJ9nkQowFKz",
  "key5": "UYkUobPukbnVMUkYS6taKx1c8rZVQrR1NbrgCF8pfq9NxPCsTg9RjJK9NGYFGZznN21imYnmNSYf5jsJZG8a4kk",
  "key6": "5N4dymY42dHQRmRtNuY5fXAbYnZZNfnjen7e2LihNHyaWcJ9D9yBveHmGjyZ8vCunykNfa1rJEwt8vJWGq4XVhko",
  "key7": "2veaXxRTyMWQJByvWD7PJ9GXUos8fXYtfh6iVRr1F45xHDLRHxMnB9Tcbt2zzXb2gFgJhrVgLYHyYM1TVnMrJhtG",
  "key8": "2hYo7BnBxtaKvj5UeAQzdy1pgow5TUWyFoVjfRugHLUMCUq7aTZUZDEJQBTegZ3XFDwpruukQMZE2p3gz72Yeere",
  "key9": "2EyRQnnioMNf31FywBVKGEnB51fnPhoDMn2y9sWQk4WBn4SJUerr65RsZuKHLBo5yG3deoQwMn7oBzV8oPsTShF2",
  "key10": "2SSZon5ifBtyBufsVEDTBwZKCFuagLLiLd4vwCFMwjtjU7FXEVAveNUmeVBGkd7FjZCa1gvgsKXKM1Q484fVibWP",
  "key11": "36mhD2tMrNad9uhe7gFNxjmV45wTRvpwFSfpKkiZ8nqVULr8eELYW8v3DpZjGfyx88tpTe2SHyY4feNRRq3i2yfY",
  "key12": "VKNU1RGfJTGuVr6BFRtYFjYZVmdhzc3uX3nWq2jcvYpQYvt51RjeaVSGBxMT52NmSSGzFymWg58z9JNqaneetPN",
  "key13": "3nqMLeWfgKVFQxJn9j4sm3g5PhuHGq6LwTd9sUEK5WLg9ASGZ9ZqyKAkkHAbn97vDJs6tevuuTv6TbFomAhtLD3s",
  "key14": "5MWQLpYqkSXmiBYspz6tfqiwvSBg5ryE7brovqsTUoStthJN2fLx8uqwYa1NsNosbMqcpN2nZ7uTJF5jPBhMRy6t",
  "key15": "63MFZPGD3xj3wQbq8XhDaYDzpLbnFZH1VQwyVaFiM3d2rs2uwisppcEvLKXQRfSvUFeXRw7WqgyKjcSFnxjYwutM",
  "key16": "3yAoD38wNwie8FnKpMnzNenjKk583vCU8rqp5dR68TRS23J44HVLB7YnJuMyaUHhhbhX7rdDmRPFszs3MDCVFDPa",
  "key17": "4zNC3r9oU5FeCTuXqbXn2FbmheaeQvRGqdoDboRKR5JhqxV3ifwafCeyxGtNbTp8vphnCCas2bM4dkWmPRAZCMKx",
  "key18": "5FrXei5g1uzAdtcgxG6gq6MT4yJwxcAyUj7zo3iNr3Em97aaAVvSzuXatguh2xn9UFCdGhQX5N1MUeox718fPopA",
  "key19": "5trz1HnPfCVXtS9XT4BhtRrBPcN8pZDLmSNH9RjiMk1yp5cTPi4oLBUbPzgE76FKoeopkCpprpR4mrDPr6D2NWCV",
  "key20": "UaZ8sYFBGUNhHRaPzxaegLyoqRKvgVm3VGHDrkSPg561p5rRBb89jqtrqn27LxWR4Z7GrimywZKQWWMCJR9FnR3",
  "key21": "26oQzS82zEoJToMtTdmp1pmXcnXe4agqSqMsPdT8dPp37UShXdPfehc75pom3JhE4vYQuo8SVsaEXxXaCrPunr3x",
  "key22": "5ER9j6PpcaJPK9F9vZBYiwDerJjaKjMJi4WDwhBkbaMv43wVarRbAb3eYSFwi16btEFrZ93hG67TLp5ZnqRBcXyf",
  "key23": "5ti1Wuz97RSDDWVGPvrfxUbC85xcjC7Z6zuXX8ebDHn25ppbN5zArpZhnTo8Q1Lq8ZSiJrq6QDtKMwmJ4pSEFAAN",
  "key24": "42BFpiJsvti4vepRMh5FB1qhwxVTf8eA7UuYiqPmzFXkefRrnG1cPhZucb11FwxE2AM7FEJc6wE6HBx6sUQ5KMVW",
  "key25": "W6fikgH7j83j5xamwRrJFxZi7dLgY8whvtuM6uV77mW9beQ8btMkFf71eUFJByCF32K6jGmT3WbjW8qi7h796sH",
  "key26": "47nwcn4NEQ692X5cpLL5FNk1wwHG3U8v1wkqNy1gYDsoqxaaPwinTkbTSVK5f5xj3nzfqxyE5kFqYT5vY4KbX8Km",
  "key27": "4Ne7UudC5n7zqsoWCbsrFfRknND7k2gSFuKXD5RXP8x1u9GhivRGUEwo1XZLCQsXUKqz5PYYp8HYmsKJTooMieTX",
  "key28": "jSHUnN3Q8UzxTm9jsZQuHJ15iyyFNQb8gNoD4NErWACuB3iGDGaYAx2E6TYNgtTShsyngD47A6MVoLYRPghbhhh",
  "key29": "648b7pBsaYthuSCZeSRkDpjLcsEdMYdiNu7QC8M2FrS2HaYyZLg5WTJNeUhLdvuq8EYScEpvRumzibNXNF3VyGEs",
  "key30": "tNeifyP1heRRBEXX3nNWbE6GSWMN6JQjHuDqa3QCk2YQBwJVSrU76BfCZXkFkzXna4zWrUV5zmw8zT8y3sgxQcq",
  "key31": "64EmiFTt3Ao1qh87ZqHfUNcW8z5z66cQY9MVNCXZY9meCqEu5ksNrWxkMJEkZ5364o5PDhkpLkQQHCDJv9pUVaJo",
  "key32": "ys2ox8RcV5qt8YRavtWc4gbSLg3XJbPobiPg9XmpvUutbyKxXRz1DW1ktaab4bKuaBpB1m5JazTr2a4HF2Dp3Gn",
  "key33": "2mmnBYba3p7Y5iZTR61X49o8XJdj7UrqZK6t8ATZkuhePabxywQN18BjqHd1yBYRjEJFvaFS67p1xiR1PGf6JR72",
  "key34": "1pY4NmtAA2uKxd3r66T2rQSyisBbZiRgfCgXFTaJHVJAed3wenp6FqEzJHcHMDVJH7eipCK7TP9N6gt9WQdf4GM",
  "key35": "4JMfrJmQRtnLKN4V3Xo4daWysgpriCWTYXJ4uzXeDca4e3i7uY61hiFt5RViTmvyrLKDgAq1UdhqEFcZtF4UzjAL",
  "key36": "3m9F3SARPsaSK9LvVWp5bgcDTxg1AgML6JJs698ZFV6raMikJHokK3ZMmV143sgTbwuSUUrh4eyDwE5s3eNGnryw",
  "key37": "4ySdYYiQ1iZreNg4xkVT3Rf2UY6L6BSSwQGXTmiL5QQAzPEUK1yYwD4oCqn1DVea735ThwCvw6P5KwsGmFyA2S7r",
  "key38": "4UVkCtDGRyDCa3RLnAzz7ok37kp4KdJGK78yPMTrxe3hrNre4fSaGX4Wysud6c2FHXqqUSTsHh8ggQAYUZrLeJmU",
  "key39": "3bjvhojNWuJhiVC49cW4wSaVjFDsfP68vAUbYYJQHDsM5KT5VPA1WcFwMQ3ybJVpAuq6GUr2GFbciaSRxepBq2jM",
  "key40": "5FYaDdsDX2RAhy7TxbRB5vTuR6cUvy8cZTm9YkSsq5wHTWejrZMzRbb1BRcXarfZxAGuVjjEA7qy7g9u2kDixpSZ",
  "key41": "56ZdLV8Wq9JwX43z4a4QAGJjaaUPZPnHuV1M3vw5BxdW2mQVdc98pshDSALwotZhMwukaCeWYpjtMXiiXn8UnQAx",
  "key42": "URe69u4LV72Sv7hTMAV9dJdJqerixWgo1tL6gzgtkq6TD5GxksFTAs93v6haB9FTxL4vQ4aWCEp6riadM6mDKnF",
  "key43": "2bCkVhjVTRVYButmM4v1f2QbaG97CqYPmfh82noBUpvHzWV7JhP4GUbQS9gu8rVEtfr1vLYptvry4VAP8qrtNK4q",
  "key44": "4eksZWG4ojwAgZ9WNb29p1r4TQQe5XBF25yYhAHy9j6fxQsfsQptRTLyXs3osq7fLWVmy8icdVaB17feBzKaL8ik",
  "key45": "2UkUxLdeuXvnvXZKB7ogmFwyiN6kDrCxgxrCNrsuPTP3Erhy3jo3ugddWHtMBfY5QzAZShjKC3DPgWGgUMfqm5Q5",
  "key46": "46w7UDnkAWRfUdWcQwRgCfErFUmwSbDcQfQzYiQnXdmwEGWngMDkrmv22LvHKCrJQYH7W7RsDubYvkn36hmYnf5w",
  "key47": "YktT6RGVQ4s7Jys67LBFgnegwYrXL57gs7k6iciHvc1Pj7yVqzhXi4n2nQ8YcZPeNFqkE4MgdwBZ18yrZDavo4z",
  "key48": "3kHZ923GRALZrGM6q54mWWAQinQu7EBem2HNaiHw8bkZMX91CkrP48j2PWBqXoFxgmsqEvZnpskWMz7vPpRjPsGV"
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
