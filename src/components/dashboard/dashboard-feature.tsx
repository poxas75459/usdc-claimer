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
    "4tkbxQ9Cd8BioVgqqWwRR8cWSLWPejTTRYe4vTAkDBziWusQaiPyieXZAArhgyWiBNiqL6zjKzDytj3ri66Ez8bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g99bNh4CL6QywrebcxpmwYaHe7YzAMSqfjg4B9f2JtUdckjHUE4f4YkWqCfCcULo1dfdF2AB23Kz14PgAMMVRen",
  "key1": "3R4GpC7Vn1LkXMqQHiQwiAxHwJVhPjBLZGQz2yJntWDw5iyKcHwej3pGKsLAxfWrR7fQyKkqe2gjiBiLw5AJX9xi",
  "key2": "4D9Be2FWd9E267X9ucuLe5YChu9FtbmAZNs6mdbbuZg2nQZ1vGuR4YZBkZtSAb8sPwUpmWir3RT9tajeT8ZCkoS1",
  "key3": "5wqSrVRJi33mvASLPVvfe35DMrmWbw3cEGdEUQznNrYFoQf4hRp3pL4ugWeXxtmbD8nsPu5SVD8xm7Uc93b813Qn",
  "key4": "CrqMq6RwiJsewZFiA8AjdhKa8P1Ecpwk9HMikoECPhdEnDyYAbgrGyWiVkQCNM7h2EU9nRWh9tuZnmsxqZkRk2K",
  "key5": "5cKHCXaG3nY1a2zCPcNiWpxGwBCt2znJTJoECQRVqGwtnRjjEtZXzznH9pgBibqhWwgmSToSuBGMxBAoauqVT7cv",
  "key6": "5bUCe27b1syBCajMRT9qMp2zCJgnXi4beEiEP97pLemoTVwmaEivwGefQPMmBPSYk1TSXxoNRvADmTzQ323B1jUz",
  "key7": "5PiNpGJQu1JAWAkz8Wd2xMW6xAF7XrfvUgf6y44L4AbJYiY8KokYrLU6FQJ6XGbk3ekQebfn5SvFq5Z1CGne38sp",
  "key8": "38zorR8XGUvdhEhpSFyySQQ5jeBQ2bgUBGRw91ochHbYzQDRo5KXAexdhitvzxCpXs3q5Hs6hW4yPu5dKhVYr81t",
  "key9": "2SA5rS8pcMMPdpi8SPJBQfu2cAZkH6Rz8MVnkYSi1PxGGDf68JdiBaXiYthatmV6VV7GRNEPq3hEktVsGBC9LcQ9",
  "key10": "4eZ5mabN7uQoKNjbeLWPSaBP7xnBYcHr6YiEFgwAmM4Vk5cri3FMDeP8M9Mcjz39SDNMHMA4qcwycXKtZLDQ1cKm",
  "key11": "4Z9R56nRsKv92RwxjBhCYiKYg2sC4FCDkJC2tbUhUbo5HjY3DFJF32FKWdd5y2CvDSVU3dEzWNucZkXccsFDsmyc",
  "key12": "i7SyKeZzKzaDbdzjJFcV7DgM4z15KGDPAxqAFA2siThwWgFyGrJrHYwjW5P8MxbDEbShszGNb8aRXoRkg3V8TZN",
  "key13": "3bNA9xbAT2tdem33tKiq4MPqEBKeahWjS6PQ8F8hQdbh4GnFdspBrmAMCrFmKqe9gR7w776wgvXN1A75GWJ9fueG",
  "key14": "3yQQ3gzBgSGCV9CvbCx1xo6BAp7yuEUAjBhD9nPH8TrpTc8nUaMQTS5sLJMj9RttG3M3Si5Py3tetfeKm5UpNHgd",
  "key15": "4UqFj3C5Vtgv2aT7sx4Q4UaDkQZsMugzBwLvtE7dmyUUJcgA4SnwPuvYtsKBupDyHSp4fRK82soK1dQd1MjDbp1r",
  "key16": "3sVkHy2UCWFiWeYSRdW7aMmEKvcSb1aoewDLuj6MaHEvUK4RsS3DrTbPfHSfDwV7SozgeQhZFDs1xXJEHP7YRUEg",
  "key17": "y2AXcU9LKun9B6TcqXB63FHXrau4XwoiqHk9Qdt8yrAMFLczrpY1sMoeB1Pd7Ecafo1NZAE8pCs4QXnkZxHiZpJ",
  "key18": "2Wn7CvHR9WyfQhdSXkCx8zRYbxEKSHn6MfHavTPzTEbLnd5Tr1FkmwxKoQQeEZEotDS7MtgXiZetQb1YAViRmtbD",
  "key19": "25RsWC1yCfhsGHuuckw6in52gC7pfqsKhaVccRCKPFpdLwHfQT6T6jk3VnFYvfaH1auBWmXRLVTv5hjjY11emE9z",
  "key20": "4AStihvxqb6E73JVzr8UPcWZH1sMLndaJJ5vqg1XJD9Rzp7qftDZuPZL9eQunrMruo9ZWfihFfwmFjNRKho5LFdY",
  "key21": "2i1wyKwD9vzD8xcLvqpuKrWLRC4vbhESCn6q24XcGHXThNX5x6zgETjNv7TsnuRHpgytTSZzPwp1kEEV1dHNSway",
  "key22": "4Li1joFrhGbN8H92phJr35v9feG7gEKsSXWCYG7XjARAivGfjWBBdBFojidNiYn7Pr3m45oMYRALfo8qqziMLM7y",
  "key23": "rQLgDvcNLtB3rVNpykvnsCJTrPtvKDDyuTndhtZDeParegR8DedTq5hvWRiVAA9qHsuWy1AZG3JQ2Y5k9tKrGzh",
  "key24": "36EJ8fwwg6Py8X47zmY7ufzdHkyzc64sqrFuFvSepn5rYLWHX1HRDfB55xqkR6jdGMjDycq3Kg2USYdoWoByRANK",
  "key25": "UdeT1CuA75mbYFCUeHm9FPJrNnfiA9VnMrPncnL28L6ZEGwA7rHKYvKj2QSa9TMagLJqSJE5N6Rn7kPMSQr1s5v",
  "key26": "5RddGQ6TW8bdwybqt4rRD1wLxxiYUEDfKuGJo2UMsj7DG5eVSwwdMkYuhZ2F6Y86NfxsGRwxZoqrSf6wACZiy178",
  "key27": "rmstKpDSY23syyoFZeBUCUHokzUTRmrAcNMrFnfYkFSwrCS3TFcDjfWWYZfuz8VHYmoptU4eLm8xYxbZkQW4ZCb",
  "key28": "4ymV2XHGmHrxRfrbb5SXQ9oCvASYMuxDJ12c7hfNC5dbqX79NJLVu4K2efFoqbEdFATsq7JGn2wTgCVTEsanHish",
  "key29": "4BH2jgd5X3igScDkFPE8SFj4f9cTMkrtDTMgcnwknXTe2kcTGUCRb88iC3VBh9pBivSTMtYKfgBVM21gtVb1RLK3",
  "key30": "2ypzWnuQufqpPeTgRgCTsA7F3mHpAraz8W1sfTHMtCASQndwJt1cBp5bFHLEcrwjDMKGbQ7xMmxGr5KEM2R3Rtz8",
  "key31": "3wUe6uXyGnNW1AKW5xgDu74sUPppU75useanXdju7TYN1TYmBm9aWpUs2vtFdASCRHoRxSo7X5NM9kYzqhSwLJ6Z",
  "key32": "LaKUP8QR7xa596jx7yjfSnJcqRNh5nPJWVcrshNt8toztSM3Cgtrifxjessp4S918LWyH8PtGGiyW9D8TpRqefp",
  "key33": "5jutsyXixS38BxPrHNJJKaeTigdnSmLPiVCnwLjWW6ocPERMvLiNhQwkPzJ6fC9CMqTYwapi7guA1unpUPaDtg8v",
  "key34": "4k86DoCGk4oGfsa2tnbh9fbDTffEB9VRCgmBhKeKMS8xRNPozbjYWbXkkDqU4ychnQtV3smG9RDU1mA6a18hBi3e",
  "key35": "2qd5yv77pmKNDbKxezcmkRc51xBauWRwJgJrBDPtEe4KGgJXBEvZKDiXYRfyjCiibURwquoG1hSSFqhgfCMWPqZc",
  "key36": "ucdxUNWguYX4YbC4VyVwFuiGxZ5kY7Aj9avoKdn5oA47Q87dhXCzhJqPCXGGAChvSM54sm6xXXYVc4P8CTZ75t9",
  "key37": "2yb8zu9dsAaXEmNnj4RDivukcikwis6NT2ezTDsKgGtJs8rMHeMFtLzSQ6KdP1U8GBXHHh8YeLFmGGMXHTxpEcxM",
  "key38": "gLfZbk94xmcNw6wSuR4ZCQtRDFNmqukwyTBPxz1WN95T877cdg2szadQXgNWtuTAAeLVpFHtfm1Jw2AAg87nMvt",
  "key39": "3gemUGbhCHhiGdypgB36Zvn9tx6rsEqDrQ3q1VsfpfiwpqABXAf69RDyYDA4yFBKd8K3xw7pn76e5Tuw8N2B7C8u",
  "key40": "65pZ8Do5QbBQgoSG5HLHfKH5gr6gqwetLSq9m7o2fdQhgehUvZduoNeKy9aLCWMUjNhzFE2aMiK4TCRX9PwWqGK8",
  "key41": "2qvqQ1kSw8piVwdGEPPdE6DZWyfbt6iEMke7tTXzY6nBmeAfsQD6F5HFs41NiC9poWYvrV5qok57wiYEkSKJJ7ag",
  "key42": "2rjmaYJVuK8CHC8wXpfigQCPh9PBptBRtcDCPKp1Wpps3tD8PwNot7foG31Ja8QWsTqs9JAr4GMWArnujj3hQanN",
  "key43": "5zwtVEsCVzix2BzFXtkFhb3is5uPknNQkViFrumRmwcwD2SjHQx3vaYRkVeK4ZSUC9tkSueLTtLz1G3Rau4VDYqd",
  "key44": "4sZTWmiS5grPjkd2gGmrztedVhjtL37X9TaHdbSLyUgZ2E3wB3qG61neQ7oZzvHWyPDsieN2f1ytnNitHj9M6YnK",
  "key45": "28hCVk8c2rLqoah4xr64NSmEZ8PNKhFYJ1sovpPJdBBwHgXXc21MvGjqpWyW8xMKdEHgwGLJd8UELD461Byafcoz",
  "key46": "2UHxvewUHgwnkkb5pdyfZdruoegUq5ePmgHp3yZ2cgtdsNrhvi8HNMVBy9MRrtXQMSi7fPawvLTrxVZPHcqr9Z1D",
  "key47": "3JqHAtERfyLJ9N98JJieweQpa3jLLEn9cbCXzH9iSTVhQykjHKth6QziUd29GZ92yC2w7FMSGTzLD6RrUFTfgN8F"
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
