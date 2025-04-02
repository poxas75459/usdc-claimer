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
    "5A5dMWh5LGFFqKDfrZyjrXzcZnKqcaXjVLywh4BxKovXv9H5xGGd6J7QrAgxa5VDVY2zuzbrh43j8yn5pW11dVM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7kKopaPwhEYcvMhAgV6GXJvEBwM9WayiNy8LMmxR1Hs7LELhWYDaCnBkc53xtjPU7xEssX5BtGruaAd1WKmgiEG",
  "key1": "38ohRFHYDdJM1f8HgirwdtqDQzLYdyEkwLfFqML74eiR2ficFhDXiXoYQfwmEfrqp8PepYg94Q67jQpeY5W3kVn7",
  "key2": "YKfVcuCHD1fgjsbFHPBDWMCSt7tVr67F4LAxtQt4M7FPQiaQsGZ1nbviGQBPuCJJyiMQvaxa2SCVQ6zsgGP8YCa",
  "key3": "4YF92T6zuLKb6ujpbmEJ6pAdtfzEXcvthqnRcX1gBARVwJvoTmY3q4AB3pRBnczt1Zb2gaFHF1qG7ypLEb5ffAdS",
  "key4": "5G2HLtqhDCW7TDNEdggtrh22vpzVjQCJ9kvsP57EL7RtQ1p2BCvvSNmy7sPe1vN6w4EqSpzWj3RSYYSU2P9WCpye",
  "key5": "3fEr7HCcJ2tqixT2mTeCxBrVa36GitxrBro3QitvJ6DbtKQXL6QdSmNGVR93NUFkJc2e5svwpUha9WHGvQSMVUhE",
  "key6": "5gRo5Npx21XB4Qk35Y82cE7LttrgWRprXns54DiV9n4CdavMsAA63DFAs1JZBBF2LoM2y7tLgFK2JvWnCpMh43sd",
  "key7": "58CBaMtVKDoZ2EudwDCNNuBwgxQyxyttpGPc35Tz1ihGuMJjxBa4P67FTHoSVJXnz41SzHN2szzKW2KR5y7VD5x7",
  "key8": "2dSa7LexbjZfazg3ndrihwbZzLPnS37u3MMqztJshktPhADHXT2uH1ELXeqPM3F9FqJCYkNvNLgKbX56Tf48Jeox",
  "key9": "s2wbBUriLPgqnBJYS2C9NRCrA4Se4w4Dn7kJWHcZW4ReMt1fYbYLV8pCw8ijNBzSN23sEW8tLYf2VH4RUPWE7Cg",
  "key10": "3e5C6vwJBmx62a1jdkVm3tYXe4V1wqsNCYupkKiwwkvYo2ioZm55eALbHuoW6334tPNVcEvu6QjKVP7JBNGTo59X",
  "key11": "5E4aH2QQ8Vhi1BAHf9zZNmQCdPes74Z76GAHzYcwKjpQDjoo7VUXNKsQkHEWr7Uv9c4iSNfF2RBQ6RxXcdNyVXFN",
  "key12": "RZiYaiGHybUkCRbpJc82GKAx6wmyREVkTqJK8qducCtjMRPK9V2oa5uFrfdvZPyRBJG99kNqBkUSQjZhLitRRCd",
  "key13": "4dqbs1pETKi8YRer1RxhgjEpd3JJ6VxCY2ZEpPf8swSx1dfAzwcN9jepfrqmsYMjfY8Gz8ThXwJQqyMz333b7W8d",
  "key14": "GDofhqzsqqEszSJAJmERvAztP2UDZPNysoybtEoszVFozgfsJJBLxw2g1PfjSTV3bkkfSBjWeTrpecp7sS73PmB",
  "key15": "2QuahkRL3cDVxdFZ4SLeqyEkgTx4kgCrsLx8zzNFQN6swLBEDjHM1pj26bzHMmN3GyaXFawUeQeckQ32r3Mh6ybB",
  "key16": "24TdtE8b8nehHJZF8kF8ChpZamgnSH6emoe4J5objxXGeajaVEn5YAUjTNLWWkRiYkRob4tqbbX2JvPL34mE2KxG",
  "key17": "3BnrL3t9wba6iw7Lb6Lw6EHPikFPx5USv88ZiwqpYPzUdH5VxQvZPmcyp4xb8oJ2sjjrA88kYFj8RAHQUSuqP14",
  "key18": "2vohYsmgNtKGoKmxcnWq854HWAgJsQ8UQNFhjZSLYozRLW3dU5WXNz9GEtKtMG9cCLx7XeFtYPR3icQWMXthfVjj",
  "key19": "4sjzMpPR1yXPorCdQvzwVPm7ZdY5ifeZrgXC8hQJNhnkN7SzHGiehnD2UYzLpSxVZoahe8Eb1SBqY9oYtJeDEkQd",
  "key20": "fRVXppQ9ZSgDVLKqruoJWNLwommPRNZYQmaN18SKjjjzpm7aVqdENFNHGQPKiqYECqoYA1cFsWTmPfHRUXiWwYn",
  "key21": "4ZiK27KEd1f4cTkU9Qt1Qnu2HAvHdz9bFGyC9bWYYP9ZQzxi9Lh5ceBawBsLtZ2uHE39ZPWfEVi9Xxn4BdAHwUnB",
  "key22": "2vDB8iHLgg7BsTqr3Px314mn2RvNd76WFAqy2DvziC98U6rGgrGQNjMrKgwzX1H6DHfomY2X5Ckb63L2u8KCq9ds",
  "key23": "2aUzpSZKSHU9CAqqpgjCvVBSccrifqgNupgTqyQw2Jr7muyJwnCxeBHrnDy5fsr9psJCVoWfuGGdFVbcyfXsht6V",
  "key24": "5VHjwd7aZCfVwWSSK9xrXFgZ2bxeDjK1RnQtbnhm6fpx9UjHiorc3vMjBSXqGcbZYkDNwHKC4VVizG3kAERnZH2Y",
  "key25": "4ywM8rJUj6VsNsxhUxvc51EUuyXatyWaZPoAXSKy5aJ84ZrpdgjWWtCGJQfmwnw21Xusv1H6HUsWMoUMemdjLLNm",
  "key26": "w3D9jheZmMKjk24zPviAxKvVP5fAGEVMZbHZWSKFztUxH7LqH9rxSkoHnjqFAdWg9tzKKyShexgk2JGXVs1Uq1u",
  "key27": "M8fG9rEiqiQTdHBRTq9uGrRTzGVZWioRzJwuivetyHAhMgfJQJHet8rsfbFwqb2Jdx4fussLWFE4b4VU4PemqNB",
  "key28": "3bNqrMT84zAaVqZhbBvYSJ9XxL7uWDpKreQUgtnAoaWJBqR8rtNoZ1jvPzYptyVXxkb4W1MWhn7THbPRkr6qtj86",
  "key29": "5RGB961c6i2KjTH18e6Yf6DS8i7CZxb97UMNBJJRMhpBkMZi9kBCRGqUR3KimkmqXpoSv8cHMP3ohDGZhvY3MzcS",
  "key30": "2ANrzfnJQm4TGdPsorQXnR1TCeP92jhbUohr3UzTA4EKGR3XZAT2r5EjU6EYrAF2ywrjqn4Y5AHhi8XGPg6kjv7",
  "key31": "4DAYC5vKhSWJijvS9zSg6XkGHYQetFDULrTk6qYTQUYBSrsdvQ48shFAYxoLHuNhueD3UTQkgwDBwv85STWeSFdf",
  "key32": "5tzCPdj5LYerNMwHi1bMD8e5Zg6b9DEXSGDtr1A2kuaVobhArGWmFrCDGfFRErizrTDZK4918UTbgQKHct1XMVwz",
  "key33": "4HePpmTRVGLZwVAmFVprfiUX7sHrocNHyxJfw91CwNzZrN8C2d9jzKJxk3mozP9obuDoJhYQJFkFotV3kT6ymtjG",
  "key34": "5aKbvom8LyFGwzxh2wm9eYpMYDyGtH3YSPCm4e4CVQSuxPcrFFc3jBYuSzmC1ZtzECWZDkMa9QfUt8HLG5aVZP1H",
  "key35": "5aBh94KBXXa5iLRNRJynDFD1R2y44BJY6mox7Asp7TDKYmY96h1VvnWQjWDFseEGZ8RJwT7NiKqVdbuMTiq3DZja",
  "key36": "3bfePrvh9A2TsQUbEL9RLJk6D9VZaX5b3PYp2c1wbsXVivkAS5rCbraa6J1PDY9io2CWf5L7FnGRRanKPyDZw984",
  "key37": "3J7r7e19uxdCXLQRzwXU53rx2GU2yX7wftQphXFw2KT7xXtajMj57eAFiKHSnU3WmjqgjaG3ZQDqHt6FZ4TaTdaw",
  "key38": "3AmhQTMd87BZF8TqcKe2fAcCqUKr1zmbnMPQDEbJMsmUn7TAueqAKip5F4E2RhfS58XK3DnS9z7TdLjb5sXQzDcj",
  "key39": "3iWJbfJz8LBtzJHjtyAAByajJ7QA35s3KfnptNYQsZpekTrhjRJAnJiQTL4L6MCNVB5G4zRZEwKzWJGPVcXmDJig",
  "key40": "3k42zauvCHFWpfvcyRPaDiHNUg2T8fkTpns4bq6A6iRbPsekDGoj6VXvpoehA8NuuPapqGxRa3XqDLkBEoM9fo1J",
  "key41": "3YzmPTU1kD9px5fWwb5vRBuvxL3NYk5wUbQUtPC8Xv5sKZCd826bY8XRAazMm7zj4nYfEssHoKLD2WxUj8pLwxiS",
  "key42": "3Qu9DrTUxg3S1pqgjSA9G4fA1F4zqdMQBhADb1Bfpa8fTxoFbiHxmWy6fYKJg5zs62HnWAvJvFYyXCJqdJmHr1zC",
  "key43": "24APM2DkAuJDPi9m5XfT4NDyCLDjDa3c3umWH9zcbJjMDyBtLwEp2EEyRTmVBu7orwKpWwt2VUwJaPaw7hquRuji"
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
