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
    "5YUzcK7gFQaE8srPFz2h1ujw4JhtkF4VQbM9ENA6ewtRcgte6C1gXoM3KfwUAZemeoEHBRNHxsYqKQRiU2NcQm6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgfX4dAsWLLgeHTiXcUfuaVSG3VMTe31TikS1YBE4kyhyYtXpPQCWE5rdCzTnsTX3Nq2XJev7KPmts5AhxPY1NM",
  "key1": "yKdbvyK3b3ts7YwdjkGREm3kHv8nQEsWa6bXXtyUMDprBCWTiHqLBj8LsVfLSVgKnDdYHeHNSbKwKWEtz1Pjsd4",
  "key2": "5zyo9jJ2TkTrPPYdgTfgchMjps39gQkEHeVbwimhxjgDSu4Zch8q5rFkjQjZxKEQcdm6Zdhurf7WNa6cE9seKMmD",
  "key3": "4GR4HvDmo2AE1abuJWhYHfCfrM7Fq8EkCb7ZLeeNPfh3MrLejhZLPwxTiGeNpPgc3LpL2MC7ppKvRP18acxjBy5S",
  "key4": "4Xaz6u62JNJS3gvx38CnoeW4TPpvttYFZmSVNtWFjJiRxFryjBNfeQX6nN7XEqgjmgijh8V2AScKhZ4Yvie1qvXy",
  "key5": "4BdS19bZXMSGx54pzCv86BqsFh72yHBom5qVkfa6DdXAuU5coxhrUQPRhF8Ab2mQZ1BzzAgzY6oz23fvidvV5Gwg",
  "key6": "3h8AbdZfZGEXJGM1Z7hGvn9g64hpp43mHY3szgKFx26nE943UdHW5T9b8SddB3TbXhESZ4nWnZLtorjiogRThkRH",
  "key7": "huo9PHhCXkiLgX1b6wbA2YoPr3GHE8qKfNpoqryRszDAoyJzMcTnsRvD1PoEEq54RGn3fLp97A3nqjERBQtPfmM",
  "key8": "51wrNxEfsZdVsbgPNUPd6hdQjgfn3tKmxmKdEw3rFT1jNkX4Aiuj722FiymBSKjriuxjEiMu24V9cHC1niCS9s1k",
  "key9": "4G3KNh6mtkwLi88WKu9vDE3nri43hwz51wZo9v5CJMxZoMD6vJseKjdpxJMagycXaHv5EY3q9kgrDKwoHqJUHFta",
  "key10": "5iynCbetW6HdMZGa3ydZQM4XhHKE9W5Nr5rR7RXzzmj4dYSDvwLz4vT3fWqVZDcGwTozBcpCtttRfVwnjewkgepk",
  "key11": "45N869SNhsTBXr1Px3LMW359bju2hpS8s4L8b52VUSdPdnrVo6rNS9QvmVn3jt5XFzLtTYnCGnW6k2bnFhtbhWz3",
  "key12": "Y8ZZALmeRB578NBG5aARbZZYK8RUgkjqqSskDYiCjD5DLnZ5V7kdHbGHFXM2bStcYvamQoW8SnDdo742cg8fpgc",
  "key13": "47EpqnNyJ1bHBeo9LV6rGiKTeVS22Dd6bKpbkujxQK5zsre3tgDFco1MuzNfrwS2bg3wuoF2VpMhnyW8GKwAYhPv",
  "key14": "5v6kdmK5dkgdWLyA1P43WFgbY9G42nZRaUqeBsbodf1eWC5eJvH7QXeMMb23NC7LjF3WDeaA7J5Gm12LP1n1yFAB",
  "key15": "5J4GvbFHdAEJTxA5WCozYR5S34WJf1R9BDjLv2pBLAY6EEMG8thvdsaHADmxSimif3bzUTHhW4kj6caob7uAP1xm",
  "key16": "2fxAP3ibga7j2tkobEQ2gT2xhP6Ss9uXwF2hhikGRygmpV2g3bWPRvW88kRZt7hPSN3g1iLFsaarryPRuTcSG4Ht",
  "key17": "2fRTeKqAs757Un7SJ9pRrHh4nihRuU2WPpfXgP8PbTv7t3SHZ4qRBTWokyekT7GiAMZt4hMF5B4DS9wKcS6aAQ56",
  "key18": "5HnqmFDoyWXZxS4exDCFxaiJX7FPb7sBgYWsQeWQRjDsz5KCh2KUQ8f3MzogYhxndazsC9uX6ti9u7p6AnHWQhtm",
  "key19": "5RxiWro61rLvM1ZDCpoMh5N9YoCu6i4DoN3249sMFu8YT3sBrUKrZnxLP9sRGs2fmp4yd7eXDCRsCR1ygwWp8s4x",
  "key20": "5y2N1nbd16qk1EsUxj4H18agsk8Q3BScw8AQsmKrPKF3p3mSBC742FAbFbRuHi5yBrggRuyWupZ5bKZBDji11otQ",
  "key21": "3nke7Dexx1KQM738qzWYyxBiHaMHEySQpJv8mExFtaQcDG8C9UAVwN657R1ZQaoL679UteJtQXA89zWYvP8cUekR",
  "key22": "314KDgukdG7NvmZuwUPgE55moDXEYEZArU73p6QKT7v6EMvXBZC7GQAhEnfhEndSNeeTJhHxsq3eio6SjFBKfojZ",
  "key23": "weo6red7ks2omU7nbVVVMMSQJQRMDG2nqEXm1zR3dqUWjyMbMZD9G541qnr9ZqfCCzBvsVcmHgLZqzY2JQLW4Do",
  "key24": "3SKXSU474GtiXJ1HG94sRc2H7mfZD5vgC22uqQWUcUSbpt4YV3oVCTZ5WfgU1YSqm7VWooyscQj5hALGVUoqz2oG",
  "key25": "3UuTVNdMR8tNCBDH8KFq1uvuwMV5QrpzZaFkkCm68S2zSgQSahX6snozi8ByedhZ6VoPz6cTkBwQD5WY6cH34Zxg",
  "key26": "S3Qpxx48uQszsFStxbB7hR1TXhNJeNdHVmYFFhf9F2S6AabqJevPZfSGG8tBwdKjFREFdEaJFqYEGXUyBZBimJ1",
  "key27": "v4qKGTs1dcsNL9PEke23D2u5puouZzkCaDwe6KPVAPwX1zhJrVHxQ5P3vNEmZkwfjqC3HsNh9rvdcvNoqA4Q9uB",
  "key28": "235EQCzoext4eNezT7WUUsphadv9PpiiiRjLGW8iq3onDEyvx7ejKrmcS4u6SHcF9o5k8EzpLYoBvUEQa4huanw4",
  "key29": "3xPRj9ffZCBQ6Z7feFW1i5SP2YX9ffLgbp3nEnxnvzfqHTpugan9SysBgcDHUCeqX3J1fS9vKx33UzdSgVvgcBry",
  "key30": "4i1jg2zM9h1ub7BFCAetNMS7aBE1h72FkjxJzJQo6GzqCVPvX62M2DLVhLcWbgaGYBKoRbfJR1buHKqCFE7WkUx",
  "key31": "4iYsmXD4De3HeMHJHvDMApDGgcXHuFY4NhEyf9S3pWt4EDWFLynAfHzDEHADBgHCG53icHoLeUPNToo7UnuLiaZe",
  "key32": "4yFhJjxYBGZcSxbA5Zu1oZxjbjbqWBwpQF8tsp5ide6HF7pdAz9k1jQGWuF65gFUn225aAnJ4GNMLXwEbUaTCr8q",
  "key33": "3v3ciRVr2y9HC35DhsqTLNZ2gHbxLYXoVtZFAkGRWe4vRvDZSKsMPYmq3aCxDhBMuc1DHGBbKSPDunDNcx7wWzCe",
  "key34": "37SGx5pFSM574XcFhwHB8LcmsGZGg9f73cZJAKvpTxK3KsW36SerwEm64DRGRaZZL4mrSXVXuGcUU3YFck5rWzgR",
  "key35": "44B1Eq4PDJrAjz2GDfg5M6g7y1PoujSCFnDcR5dXxdwcNkNZCjVzGjPtd1MS9Q2tym8SCNsesKm8BZojqwipn9mp",
  "key36": "2w7mftgeVQLdzAJqeHi9j7L477nnCbNHCHhfsrfyVoqButoDDXr8noLhFqgHbDcMto8DhDsKnwiGyhKFS2bHaWLj",
  "key37": "2TTD7hTtasc32XYvrourQaG4HGCeS2bocivgjdfHs4BckcFXhtiEBRDBNW1S4NPe1vqY12UydH1ko2AED3ni1BfE",
  "key38": "5bWMMCzs2Er8o3yJypMNF8Dvm81GSDB8UB772vj5tpt4yXCB9Qzsfj7CyEfkcTohPfJ39f8KJtEMvhCTuM3YHDJf",
  "key39": "5Bp79MaPeGtoHGJjq3nSM3j4Yc1wZEag3WkRv9PRCaqqis9R8Sv1rAatcrttxzcjtFGBjcqujeDEdmkNSko3d87K",
  "key40": "5aTfSs7itJ8rhjxt2xN8KxPSBjVzsitb8UMm8wEZDrHxVbZhJWMqUidrmCr7Ke6cyhxsK5VVLtg2FGCKj9cSMa4Z",
  "key41": "4XG4jWArAoqEmeX8LmErhTbynoTeMrrJ35uKKGcc8LB2tEovb7JauHKBHyc1DjHGr99kZ6TsSroRem7fqnDcKfqx",
  "key42": "2SDKyVn1BGttQ8LsaSbKwkFBcA8KtphdHA6iGqVLbVzYzxw2WGncQvokrcLStKi79G4dxeSr6nkgUxumVvpB7GTr"
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
