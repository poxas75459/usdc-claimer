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
    "pw1kpyxuHTjYbCbyMPL4Yvq6cJskcxEVzErQJR5QCmEj5peoXK4k216MSJibXV4E5AMNQDxqQfYcg3tRvfeQS3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnLQSasb1vFoV6AZhTZenSnbNnDfC1eXX7dmR12babHq8w9tAqzKk1WZbbUYLrVAtmjVNQKbcqTwXQiJp2fayhQ",
  "key1": "2dg5oyRW38fbfcgfKsFQgXorVvmSF1eA74qQFdP3LBYDywXcx1p3aSFT13i7CDX64ee8ed7wmFdDGcqwLgQaqjzg",
  "key2": "bucXvQcCfQVhFiQV6smRpAQRahhRUy5scdDb7ejUKvc9wwjDngCPigkdoFsnrsmXAzXFy1NkGXJ85Hfnx9aZnmv",
  "key3": "4TqyCGJhyQwkYJS78LggePgP3cY2ZFg6a25b6Vf88xdEwez9ErMk5C5AdiMu6RNtvFfuT4XFna2a61S7XPdwDwg9",
  "key4": "57D7dq38EsKYYGBfeMhGaemANafP3KaA9dXnBuLQU7rAZJKg6oZzEWrmSRpathegJCyQVJNVGf1TNJx4ZoLwK7PN",
  "key5": "3biuanynxSQL1S4RQUPTCjYwkLcAsvcRqgzNGKXoKcizs379aBWFAcaYAvUZiZr85haDriG7Z3LE2WQQFxU95EiP",
  "key6": "fzw5eme53QqsfuKzn2fboAEFMPbjt21fYxF2zxsGXy6TWgawKRbUBgQf9sNKqJgpVfVmqG8SHkzcC2Q94VUWnch",
  "key7": "24JpHiZAqdPVC3HQwqntiatNBN8sJXMNNexXhqTjM6EjkzJpHiKEs37MQbnHUZtyvcsRQMgoikCoVfYLYZ4qf2jj",
  "key8": "6eZ2gRf1vDm2i4Px2xqsodYqb5eJTdVd5oaiVYea1EG2tFUnFhHPJ82dchkX19XxgC7MzhtNtPSW7FtqfEoSkua",
  "key9": "wMJLnW3ncPxJTiTdgjctgfgHQJEY12SgTsHw3Q1eygecZZ7EtNpgoaaHNMfEwri1wVJEJAygeDZNL1pyDvi9VMn",
  "key10": "2PLsCrTtCAjCYU7uDUgLeZqfDoCWBiwzWCwXx2aJUAiFmVBizCmsjWyhKDsBqYAeoKwCKp9CgLqW5pKKhWTN5nNa",
  "key11": "234gSxyCcqnrC5xJPApEMZnsMrohaNUGTJvrnMpXVTrqEfirWqnK7UhkN3bsdyS9XMzHbWY3Ffau2rX8UZYfQjHz",
  "key12": "SWKQh5NhgfH5iHXyYcQKjnYJZi7uuMGhDsdstGS2vmaVz1n82SVr9yYJEGPodSFKrTs2FkJWADjpKmwa5xYCugs",
  "key13": "2KfpLPqAX5sPNB6V9oCfXS25pfoEz6d4zd3Wv3oTjKrQ734ijdfthzwWE5YQEJHRUUgGj1Q44qrNrF8RZhxLpaB3",
  "key14": "2neDvGit4W3ymPihCxCniQYAVTnRnDouaB8xLacpUjvxKiRJZPsCRwA13YRoGfKfJAiD7bPXXa9E1Wfncp8yZAyP",
  "key15": "428eg7fEuvpEiYMKtm35EsPdXx6VYUrmRq8QsKvHS3CQHV6KNps9pNisnCMaPVuwMw1dHN3J9wXdgngdERomptfC",
  "key16": "5bwi2KrDFR8viA9qYeApUfmuxzkwLCvbxaWahmneQiExnH7GAN5tDbdU152K1nX2zBzhN4gEFLpNzAcYsHg2eXVZ",
  "key17": "KmAheWx9j45JwKGsPcjke1pW8aYvBozGaH8V16zfeDduUhYmcgZbbg5nLsKcxHU5RmwVL4rKeiU1v2zKExEhJcz",
  "key18": "4PgcpsDJiyJa6KRqFkuwXEVHF4c5EZzUyuBXSz5HPEqDf96WzkExu27Z6m1xztMUs8gBGTJpeLx5gmHrAxuYH8gC",
  "key19": "55vno8woQ9vFTuW85eTpV7bhPCo9UcNMSmcZdLVeBNhJM1PYKNh6qMibjM4bfsvKEYfUWZjLZSZZ4wrPEQEKiYty",
  "key20": "KqKcyQLTsmX4kSCRSuk2pCbDrV9WcU22n552tPV1zcFpi3ffbGYPs4sZyDR78HAKCT1YFuPdfb7gRQHJZMUkn7m",
  "key21": "vWjeA2mBKcG5KfT7QCumi9pSU41oqGPiAbjTjKnVXQ38qMh7nMKSPdtgBnq6wmU88UoTEEf14isVKG4o4bdURny",
  "key22": "3A7kAWcwg6PRUnzAQQggUYZQtrTZWJPVXwjAqvidWzj8PR2kYJ3oYzqUbdaY6AXJB46mu5quwpXpyXByCQdGm9TB",
  "key23": "3Sf4j52cVqgAUrgK9MoZuVZMYjUTG7HxAv4nQ5DU5LbRvXyuoURVYJoJomry69o2wSKwju5cVoq2d4nuxSyLmhdf",
  "key24": "ZLXAUDmKK6nFvXAv8CgtFL2yXcaiDXUmzRN3jeVnMqaJXpF8MdYr8oTeooEJdNLTWNMp8dVgXPYnM4bP4hTYz6q",
  "key25": "3GVsV6TXTWvhUQREsHtifgwPEWgLRuZQSAFm8Sm2ZWksyMWvdTApp4pNoKjA3DXivKk2WoBZ3CV15Pumn3dMLyTq",
  "key26": "42PE611hZXNMWtowzRZnFBdXJoZrMGK4E4ThtgKsCCM3qKgQr7N3eZ75bC3VNDGzwcok9bZemU1WdbctikTN4waS",
  "key27": "2SYT2XWJQkYu7QBb5fmui1wKL3WfP6kL9ekRAn9qmSfQRzRNXMexVppRjC7Mt6czjH4Pe9VXxKCdcaCVqrJ7Acf4",
  "key28": "2jBa9Dw6b9Eswn55Lrhkoi7RoDvsLzy4ddwx7QfGHxgtkwQHqhzYpxWkHQdJQNvQZdYh7TU9PAGmgDDN2owCxsat",
  "key29": "P7UKmkSekzK9cEAt58oeQ5kHxp82hX2sADSpituiGyFei8WWPxqk5sLQjVr5JiRG2MNpPkhvvEPA3rStM1tzvrN",
  "key30": "4csVQB9nSjKahP1fPo5sXqDeqqfbCbSMJxsE8vXAMwrarJ5DakPAWdgmuz7UeMANoSi7NgwcobT2NehYUyu6PhaY",
  "key31": "4sTSSQBeATnXuSixecGejKSEnmhzeRXr4vCTmrnEGiABFr1eZZG54ynnXLBpF2dSp8kWNm3uN2xL4CBEuHxM3YRU",
  "key32": "5tkg6cxtCFufjVWvLSm9ZNZatZPohXrioPyECMwKy5HPX9Gw3YboFguQKmeTWduXKRD75DrmWJUS6pxoRnTFu9of",
  "key33": "64tZFGNT73RYJG4y4SCrMbPaboHkVpyRsLUURkq5gXNBzUUntXuz5XxAPHH7EX4A1JWYvV4KjXwFuHXcfshrbTch",
  "key34": "5t8cMBkwWLEQGyJvzmsaJ2hFjEwsmHgPY3B6RbwyLHnH2peNUHzxp5mC8d5x17jpKWc4qFLHDtfiaZWirwEMg8t7",
  "key35": "5akAJJSqxRCdXCMBTyYmagDryC81QiLSDSEX1sp9P3PweDwJAQ1FQZf6PVfSP11NxfJbKGj2rgriVLF6LznxxQEY",
  "key36": "4HTiRDJ3cCctPYHXYDncwXEw7NvFMcbQ6iXS9JfJkQNj6P4kpVjqARCjhHHuDJu4KyuVaXSbgYBEJvqkX12M47zy",
  "key37": "5Wsz1ZbXURC6EcFtycEHpxwa3VromPneT7bKfTQ76vJgZLKtadjgwKnTi3WL7B6QkQtkh81pepg2CwYo12LgYudZ",
  "key38": "Ar3aiLiZvFZToHFF7LK2sWgPGrWdhCZUvvXbr6g55yECbF8TvZF9ZLJG2EyrJPqgxJZ57YL1n5uJ2q6v8NF9oPr",
  "key39": "1gHLYqC2z2LYc4KH2u5YhFQYWE991pBhV2wEs5U45bc25JafGXUmUDBvXQdCqopES2NQ2kshTPUvapvqbawUVMX",
  "key40": "jqtPy384YVNezcnzbFS47oFTBJtFYK6q7dgfVu4RfoY1yc263pyqan9mbMTudDtCQpCaww5HDdptzqhMdMhkmkp",
  "key41": "5whCrcKDVu2avAXduScWJjFNDpToV5sTiZgKWH6NhhdzBSL7XVyFWtyQHTn3mfobwwiaPSJ1YRTqJYURaWrRBicH",
  "key42": "vGGx6a3PMvyt76mMyMve9NSN67DoaUMTibmc1TsWsnLVpAAGB6y1bpHp3YN8D8tTHzTt1CvN4bq8EqLREpvRpu3",
  "key43": "2hRptbM6o46nYKHf9LHjf7YnHTzRS8NyBRz3xUiSgry2A7xmZExQ7dJs6JDgFaJ914X5UanbhHUaAtCqLAiH36ZU",
  "key44": "66haRtG3vh6UmsGUWFZMdNYkKj5FKh85cTmyGv4hkq8K1aaezjsA5UBgcD7XLS1j5hDeeXiZdwkSKYpJg8uixbzN",
  "key45": "8QT5GMB2LZZnACjgetcf97jzpeHaCCanpGS81KT1ekqtcu92XGb4WngFFjg2oDrHgGqJdKMj9bEHbxUZgjsRdP2",
  "key46": "15sT6SJL7ic7nBj9tWpNqkWTeXNmyupKcUqfsdHroKjDyfDXcp8s8nxKq9q9zk18StxkyBFB8FC7V1TQgyGqeym",
  "key47": "2h9hSEMtvericqMmaU3nB3nrLwtDkQMzypHfs7DYCRPYAUDB1nojkEAQTinHK83PRAgss6G15AGHgWiFkT4Y1Xq6"
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
