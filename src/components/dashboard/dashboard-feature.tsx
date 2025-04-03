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
    "2iCXkrGrMMEJHiKWFYgTgAZ7iZerFrigVCs676yE51Qovebkada41N1hF9pHkcg6W1GzC4j66qp8zz4hsYb8iN4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eWUc7T5ti3KAN82q8B1C3Pgcws9xg3yX9edNRLxtYJiwMiwgEUcYbFAWt6A7U7xY1NXWTeyfn5h8wrUmVJqiUWH",
  "key1": "4LHEfpPFYBREnknrrRBhuAs53FCu92kuQh2tsVXawKJB1QJFkgtsCi6Lh8dnwWTDFAeoGfQkrEdSJ8K7mix4eFG7",
  "key2": "2VNfjBN817K8iJC4mVgbxFqrNzSkMfwgtKuhQTK4nGRKRdhnrcTT4aJkLztR9rMisWyitWuDW4vEBtgVUCTCRCfP",
  "key3": "ZUeYJtGtqJTjaKdmczYN4ZRtfuRKy5tWx1s7e5Z237tKYCcJ6h9W9cGK9okmRfinHjGWKK7BJUZ69Rmrfc2q5pw",
  "key4": "ibyvRcY1soTTvK7naPrbnm2i5iz5p3yizUTSioRC7N5jyaY2zD4XMWDgd5L8AqwLYc1JiqnMzeV9wU6sPpeEeqm",
  "key5": "YK7rutfikHiCXYjg4VKeTTmfySDq6pokmM8PbrYDTVEqFePAuhB88E4nzf1rQf2xwu3ZnuDpCdMmWLTjaUB29GF",
  "key6": "27gToehfXHJpTgAHUNsWiLrs3LvKKT5qCwvHgLgFFxFBXQK4w9EY1PC8UKvH13yzzkasjKXyQGS19MXm9ysXs9k7",
  "key7": "3mReqHeGRGjCYdGAHpwmFNmVVKC5v1vZ5oRz1SmM7SXY1CQfszcewJaVjG25bzAL2wFraRWAAS4Kzxu2Zbtahx6q",
  "key8": "38GX17Xks9bdwJui1UpYn8J7nvsZGBURpwQBYeKuUY8Ave5g4zLh5wWZQ982M3PWW2cFoKYxRW6KJm4QtmJdM5x5",
  "key9": "Y8BbLRrkuctzotiEXYiieE9jW7vyGrWoN2bfUkeE6FyfMW4WMXLtekN6wFYTtkTKkC1Xt9KTv6DwR5tNbDwUuga",
  "key10": "3258w6L1anC7TJczJm1FsLeu3Ky5NH8QLFe3Hit1u2THxfZUKgw64rBgQWq4Wto2W1koVnbZkU7TpvM5Shnn1ws6",
  "key11": "2hZ1RXTWd299SEWjvCJ2XQPtUnAdvDrGqjJsFirnGA4B5Mx3igunitA5J9zNWVEoCZqnyaUM3pawJ47xpEvUVNVk",
  "key12": "4Vc1ZHpoYCoayMorLL83D5fb2twEvBBK8cf7QT6KM4cVopmxuwnYkPsNmJJtketryM613fSYTqgf1ermuDbQ3Y3V",
  "key13": "4TH6VSJS7n6YNW8i4JKCjjMq5PpwBrx3zeJRVWVk7uetXXMrHSEacadGgVuptLZ1w1cJFuaMbTcLzqMQnJ2MDP4s",
  "key14": "4dgFE7JJiJH2JREkkugBGiUJrdXCTT7T9xoEbtpXydNKvQ6xXRcsb71U8ojMaxGtJzdqJnQacX2JhhPpui1dRYZu",
  "key15": "2xwHWeZujyKbwtxztgmoUud77h2dMfKrXR9Z9cJ3PEtZ2DXpZYiCvduTr9WnCfd7zEq65dBjooB82Xe32TNKHKd1",
  "key16": "2gpp7uPURbPLD3w6P1ver97pFXqMwoiWxR7jfyLDbYynmsKAhnJvy1ZLoEu5NSbH2KihNYoMpzPk8HwYK8mLXMrc",
  "key17": "4jU1Lw5W1xydAmgmKgH98KmRmEEEKSNVmLJK81G5GGAGfq4TKcCoGmwGtBAYy4vVRH4TyLZChAA6MaAqywe9Kwz",
  "key18": "3LPzoiDTSHWqnZwfBfdYVomHMQzhKnds54cYNJd8GVecmmzLkDYJUgpVn3xg58CqauWWRgmddryvVpRNSX1mpcSi",
  "key19": "3UKoLijrtBPScDby2MpzERtnNdKt2WiCRTBVm9ohF6bTSxvCa1AwJMSJd5kfGY9iyF5JySdTBc6r6BCzP6KcDxva",
  "key20": "3SYUX9DJC13uh5gNbAahmGHqcer7T8zgP1RvDz8Jm36XdmbAgvypqr4GdmwyWunzRFvQPk5iDhKYebSqdfEHermf",
  "key21": "5dBsoYuM3hLXtEPpBPwgqv7zUSz2BKjWNDWpdq5LCjkcdTnnrGsZ758CWtUdSfwcXu7rmh6hz3hfXKYVQBSiRMQo",
  "key22": "zQRTAeoy6aianYZzb22ejRMJ3DSUx4CxGcFvs6XdnF3ioUUPVjcGDAd61kfurDQyAm9xRKFUGxawd6urqMfeQCU",
  "key23": "4z6jUu8kS69i62RTCE7TKyjFXJpk4Qsreae9hcZ9gR7RmYtCg2K7g9UoKfU8dLVa6wuhiufJESbqfHBP12ALoE91",
  "key24": "5K5UuQPMDRFRkgSzLuHYpy6DoP29h1bpCsyFmYEfMui51B83twM89Qemx3zqPQou5qCBDrv15unWoMChUxMZzRDm",
  "key25": "8ZnUfqBmGDgJfM9oy2NjhAVqiQgkKJyFRgVKkuuJXseMza75YS9XStpvETm27BvJczWw2vvw76awEdLQivKTs3w",
  "key26": "7t6iHjsaBzsBpjqj8r7Usnzn3V4Bb9VTRUz4d4oMKD5s6rvjLj2ia1YgcLnrD1EunSXneipCpzgxiZvsEUAptvR",
  "key27": "2oKCTdth9ApKPSULxPNXF622DeDY8mop7jqv2NKDMw3Eb2fPUdvosFHzDkDU13URwfGDWAN7pH2JbdwzNsTMqPpc",
  "key28": "ncDEhsUYdYYixTWiX3NStv7dQnJcyrNF993mce6fnYNPXjrtgbMXM8P7citv6EGk87ksQxJRgLAsD8DNTnaSUN3",
  "key29": "2dY5pCn1Dt2hNDx37b33J24TEJndH2tSoEKTBy7ProhYoSUvck8BMUuCRp1J5bQLQswHfdf7grPMTn1DAqLhjLVm",
  "key30": "3conNY4yhMd2f9VHFYkUuqXXJrxvYiYNLV4oiJnz9pHVHgcUxHfDWikqGT4XyAEHis4z8Rn5LQ7HuoxnGWe1gJSt",
  "key31": "3DPNWB8iVDTC4QYnRVMNXD5hEwQkTV1hNhWhuLUU6SJahZi6Ai6kyH4rUEWdDeFgNy1r4LGebcFtoUXuGam5rSue",
  "key32": "3Km6DbzYZz8kxExuTz8gW29AduhdmD16kMPfyLXGtgPYxf5Cf5PXHkPNyd33JUGHqV7JoDy7HY1TyTfLaEyW8Wrg",
  "key33": "2nPH8cY2a2EZkUw1ry1kehsbxxEwkrKazDWEGe6dpzsqYHCStFy1YHJAwtR7AUwB29QbCsW91tmHyDaZnQSDUr41",
  "key34": "5ibw99vcPqbzWJpQNj8s5CibgJ6B3vVsTcqocFJugMfCLCE6cxNrTW5myaFEmSoRdjhvY62KZ1tvm6EULURQaJCu",
  "key35": "5xNPbojX6TnZrP3xD8q332d6efRkQkee2xyhyMjSLwLLugGoFGrFHZdjeSiKvHDnDxEzwGzzba6PobY9Uek7XRy5",
  "key36": "3QDdnjj7oUxHoMNkiSDgjXZB9xaRUDBefEjB8Ma3J2i9TM3JJ3Ar4mBZDFqF9jpCEViPEML6AUfSV6ZUAcZZF7jX",
  "key37": "5iWtsv7Xxt2nAMqyR4LNXWehyXRyJJQXwYUHjs4CU6LugSk5JwaTFkXRybSxyezhgww9AgdKX2FPPmSSfmEu3UCJ"
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
