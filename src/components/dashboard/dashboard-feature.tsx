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
    "5JTidmqDBbZTjuMVzdxtF8bEY6P71wRovN1FTba1nxJ8CuGy9Porcnh6yYiQbL94HibvyxL99nZ78NbNv3dYhA8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rfAQZgBaw7GF9EqWwD6r1eAZ6uijATD4fNVfrHxNvMzUEV5mDcpa76JcTyZ2jujZPFTtHhwv94SjQ3B3h8MFaTu",
  "key1": "3UbXq7ETKdMxfX371cZQSnbEoKcTKZBQhxFfk3huCAHycCE58Sd8qatbLSYw2E18URDPG6ArANJzwtovpqPYH1M4",
  "key2": "48nzktMCZo27cxDEqiKBu1khiU1tK7i6VjC7arv8C7aVdtNAhUDW2QQ9FgoaQkU6mScD11LJwUHgRSXapTr1C6ju",
  "key3": "54dDK5iGe4jbEnxT3eQVgnGTxTsv7ec34FgBp5uwQg6MbenoZqr8zQJmgMsGD32PPE4C33CieBaCVbwXDxyT4Uep",
  "key4": "3CHuvEbmdxgvTPoZmrM3rMyYKHYpGGoDZDPvUdysEHxpzgkPAoE8RMTfSNwTUE2yzJ2Y9tvwtgeoriyotGdjV9JR",
  "key5": "4wqneuMsrRgHChfZVWtzBTePes19vTyYCsH6vNcmELE3ZvHHCMhBkMTcMSkpEe9jeX8PkWgHXRHgAimvbyLQZ1Fc",
  "key6": "3xhvwkJ37txg4ruzvf1iLxAxk7aJwZQUH18UsYh49toTWevnGCVtoz7YXxT3rrSC4CWvdzm5g7cYUivYYMVMZL1k",
  "key7": "4hMnoPmWAWYABEmBC38BPLyQx2g8ab7V37UJAiH5oMihWz67HmYSXK32mbYCDNu9PrY7kHryW9ZXidfjQxQE19zz",
  "key8": "46KxZ5JAHj7HBn9z9N5FcRpKPQXhj5MhuG3aKkQKE7MB9KdATsAUxf98J5KcrGfUbwghVojWtiTfb2ts9uHJLsrR",
  "key9": "58io94cEM5JZLDjY8paDbn4uzQuEmY3oJGtfFbqxSqdy4jfng52N2f6DaTYKNjE9d1ce2sn5cwhjTNURdB51EANw",
  "key10": "5Y3aTSRG4PuifY8UBT5tyDFteeMfqmbG4DBNxxaAsdgjitN9RKkBuWNAvVGbfhTqJiLZCFYQnvMpvTeHoq4hhNHi",
  "key11": "R1xJzWC5x3PVGbQbYxVGY89AsKJTEQ26jZezcpWVmDYuTiWSSf1BNm5VXSR9p1LtisVnJQZVaQ8b87BEFH6rsKk",
  "key12": "5HLFTu3wCh1N4HTwBSzh54yv92xad9FMoyitpGc6aMnPSMoustbHLTA471cPARMY588NFAt5VqMKDeCjJeYDoYKB",
  "key13": "5jX76UVoaCCyxDyoTgEmzhg43FBL8rF66UgZmFJfDZt7Cg7M7FNnRYcvaq2gCKJfqk2w4RgLwXY9xw1S1TUZLm3v",
  "key14": "4jQbKUSiFZKTpPKNGfFZKhpiX2kiqyt3wpke2LDmUR7wXwHoqXnfNJYmdqN5ztECGFpmS9UJPpPY99Fihho2gjpy",
  "key15": "5AshfvaQsNUCSdMzYDZivMrM3wnR7TU5g2CzhgtiyHLuPqFEKBCXf9qZXnTubfDWiAJVjvwC4SuPapaCjf68Fqzg",
  "key16": "62Z4JGgT34GstnNz5fia6ePHbHHen4FDj31CR3EsRDYNoFdCQWfBnRKMhyQERAiJ6ShQsUzVSmYNosC35fSx6QcV",
  "key17": "4YPzvgxMeSG2z8qaDSQrfWmrHKLPwFQv9oF3vCWRay9ckJ8bNh9oGNQffayv8ACaBbfUs7N65yPXxdUUxAMArESy",
  "key18": "2CZyMr6MHqZ7MP3idpsTXTksMKP45G3daHHJEEcJznhfENjvPAqhFrNPVWLQF3yNbBrmD1TDFcNh5NwzeSSXUCZV",
  "key19": "CRMpmiWDeDV8jnn1qwH8cp3qABpP5PSgcZ5MUFwjCEWkruT8KsendoPN11Revagtx96zNbe3QFcY2X71UvXaMA3",
  "key20": "5y1u8pv5uVCFxtWtRmHEFg6aKq8775v3ZejdySyYbFBrTeZWMfj5B3KMUuaoxJsFKT92pdWxXw3gWWQdmCWUtopS",
  "key21": "fB7epNL9HfhnEEoLCC3bi6vJBroZRYv44TmR4pwUDXKEzn4P6rcNU1c6nbwqqNV6z1rQf7CWT9A7MZaKaNh3kra",
  "key22": "3sVfgyXVmdc4dFfyo1B8CVywewJcpsVpw2jWwoPKaqX4N9BbtJCQAKeoHc6A9y962KfJ5Qj2EPHDBQQ1LMfdJyWu",
  "key23": "PqX72hdG526svhb67c7ZedEWtET6kyqdRWXjghgSpdnczz3C11QMLSGQXi6hBDyEXN6DVUmL4KXqLfneRYnbryc",
  "key24": "2vHRSNUC9PQMNedtLA9PvKrNucnH5cpqQ4LKyTME7mwAtEDG5fQAuVTwC9eLX4AXFCjogB9zSYgbEuTgAruH66US",
  "key25": "2qn5NKCjiwd7bcUdhe5ByLpe82C8VNL62G1xTAy5KDkjDm6r8nSPXzx8WDgAajBVkgJg9w3tHFW3JYFwhDFdqcfT",
  "key26": "2bLGvy65SpixhiLzBDFHwiFcpqiPR7KSHSWDQP79Uvp5C7KSUbVWSyjyidxTjpnmFRRSASUbUvmF3rzHB4aBc1KE",
  "key27": "2hx4Vce4tTS25mtBck76HVuLVxLKmNsS3hzymv13AGArRbXw8weWDVVdK7HythbduK1gxZXpyE7bqW5mvVk4sQL3",
  "key28": "5kWDf26dsPxzNc6GJsqrBmjatpWY7pyee86H1RzhJdK2j9zSEN9qJNP7XYjhY58crWXQMXTaAYvwqcYrjAVrGBug",
  "key29": "Y2Qon8hGAvrJGfBKUbxP9ZsxqbfiNQdmWJoCQi8rKpvkssniZRipEtjr4uEPT53bHJLQvMo6HWUJjoVD6uk1G4i",
  "key30": "4kP7kdnSy9UKa1ttdZP6u9bfJDeMKpkBNb6uXu5oM678r1hAtNHyuPYoBydmvkFPob8dnUgEQ5ffUMbtvKmXw7s2",
  "key31": "5Z3KHdsRofAktfrny87g8nBjhTVUg58QieBi4Jp9tHyCRU4e72qYGcZt9kCsRDoFA2G1YQPPTUZvow6auLQS3f63",
  "key32": "5w9NcqY8uBwccxJC3xZTupdTj9HfLtDEfmE74MvF4LqFjZfe19ewS55kHyAnnCUeVin9xHjohsjmMd9E8opGf6Tz",
  "key33": "5tKoDvmfxzv7ixR142Yk9FxzP6L7bH5s9xoFQs3ea11AEZoPQfEKxDZq9gErKoURJ4K7mhT2Zr1eXAkyxXHqhx2a",
  "key34": "3JStv2CtLQQv13exHaPsbioLJP89FPmUEYxTmgyxG2wDVqdYcFwbxzFUxXwfMKMXJ5E8J8KVSTSnbzTxVmTjxKEK",
  "key35": "5ytXp7hQ17cNn5tivrBWZHFtzSJzHsnvDkLUuUbpa4h9uE24geL5VDk6ho6KYrEVoyYXpAx1V7gPCLJ8omaV4eNd",
  "key36": "6BTiyUHPn7x4VyrGfWMDEj1vqVYChm1ShXXMhda9nivP6t4sgwyVgLGqH9mkTg3BvZTZXMs1UgMaAFUsZFdhtK6",
  "key37": "3TVFFqjXZQs1f3i11mdSBmqU9RsGw42sTEKSisqGLQfWaSScCKU1xk6JYveDX5btxgtReN1FyaPf4fSneqH11SsQ",
  "key38": "3y36WVdN3jgG1gphqagq4DyjRvH67pLs49bfJEfdZvWGkpL6cjVZwVyazkgceQzHDvNcZkZvJGGR7U5SwNgzsbuf",
  "key39": "24grC9xDyFLzwQn53WaW9TRXwHYge44JT6bVFqY3mv6fH1ePLNSvgwkj9winTRforQoVPxVP8fUL12g5dFMaXLbq",
  "key40": "344uxEbVWCJchhhDna7wKNiHAjW9RnjogsQFUPbQEw6Zp2eJjpQaAG8zNFV617KSVPKcKYrU9C5jMB54hWNyhown",
  "key41": "55ue8drW9cjt4N2y5LgeXAP5RvAsg2qeDpAwSBynnRcmqppvzhByGjinWox5vifZWRiMuomMD6YEDJfJAo2PtB8U",
  "key42": "3KxycAULVhbi215bbcBfdEinTWuPig7VmtT8Qer1SWGCoHjcD9rJAGXSF6hYMY5MMFMUbzwYU8rmzMcHm3bt4cJi",
  "key43": "dqc4za1QdgmAp1TvtM7A4rFY8zNApKN4EF9mRZ8vL8hZ9vRrca7h73gVFr35dEbBQj8GRqfnmXuXL5ccdsftiNH",
  "key44": "28cx2MYsShv4rtFdA3sfPL8jhtaR1Sjcp39Zj1Lp7DSF4Robs4zxkoRJndYGBJx4SmzzLvNcPCZGLWUANfT6ruGR",
  "key45": "5XQt4hX8wHyVqLAud6GMQ7UG2hAv8d8kKag62tGSFvokUZxYAG3DckxcbUzvnCxuM7ByAAjXxhRRe93dRgXhx343",
  "key46": "4uEEsjdkn5Q7kDtjCCKEaf7RcA3xx3E8VfvxVhMumb1rZq7CGZP85Mqs4E3u6dJMUHMHu7mUH9oGp3mrT28wfqVb",
  "key47": "4pAPf7TdVbHd9Ep68PDAioVQVTpRRvqJ1tqyW79iSDB5hCZ3wSMxrTovwuUbLdfBykdJygEsTq7Cn6CbhSZX8iWz",
  "key48": "2KS7xQFLZvxvpAkJarJwUuAnSXeYWFT8a7SJUiZXH3dVx4sTJusgVp8eQJyZA4S1Q8H5HKLdLfbcJZFJUcFpcgf6",
  "key49": "MzyjmrVdH9WHh3fYQQZ4c8q6P1J6B9uidgRB8Rvviaq1z9dRxos53diodkLt7qbyPgczmHLiWvapVE2cXNC2KMg"
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
