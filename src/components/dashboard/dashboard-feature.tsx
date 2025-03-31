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
    "3Rwpe2H9pErz6P39vQ24trBX5e2TyWnFTVUDZDD369947NLuYE6xSic6JeB5Sdpk1QRsxfqzDnDS3nK4hrWvxrjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wciLcYfCNv3LnGmjuvP6n75WqMRiFvVyvvpvWvWzDtBShF4byLCgtWYF1pqHQSGftZHtudBKEmcKrT3KaY9nnu9",
  "key1": "5WuSerhfeqYEKrKcmcTmjtm3bicdTdRM16qgsUCixR6f7vNrBkgFNvERiYtCXPwWSUngcRAB613RNKHDo5DCRj2n",
  "key2": "4TVXYbud1boGkerRLpn3Yytzzqub7K8pwSF5PNNrbLgFdjSFeujRJMVbRHVjVo3vsJt9T4ej76THwj5ZkeSSxDYk",
  "key3": "5YzuhmocKECcbEbudj1ojKB8CVPxnfHzkijp3XVUueDPbv2NZQtnh6Tm8UrTGehhLMv3W8o3XCTHAfoR6rLx3QVN",
  "key4": "2d6Yd4gv2hbmn4LqU5haFAW2DyeNctyx4vsy92Xwjf7WTgw9o8fJ32iZTtGj6y745Aw88bW4xARLmFG46tyVvdMs",
  "key5": "3XEhJjwfwzsh2cCam8WXF7dnqUFwbzixFZVvFnUvksgFpcN4ahtUedW4Vv7meKGSWpmsGSFWbiWtu492NazGs4hZ",
  "key6": "3ybffvNfH9oMW6mEr5KM9svH1byrm8wRH2cMMR4vasCmSpKg5y9EjQDj6V9niemqEXZhDLqEX29iyXiw7mFkGXgo",
  "key7": "3jFhioB527ivhtTtBhQki3qvgF62ChBJMafKEAjuhLf8VwRerbkR5tG2XqAFDFfqy5pDmveT4Cq5nyrZABJHHabX",
  "key8": "4z6NX8V1SEVu4Z77sJ7cNCJgswDvpV2Un2gpo24p27p5s5zgvvEwNB79B8VvQ6FUR3FD2dAutci42CmtRGPEhgft",
  "key9": "3LhZRJq3cRTw9UnDhWESxvfJtgcyGfDeTgC3mS4Bo9gcBueJ3CQA1WEGiw4ybKDpi5SWhzHsLVmCdPhh5L1uj5w6",
  "key10": "4ycnNBoEhCpvj1aEwJWGahGKdGboNKT5AMU9s48toRXDX5cmAFng3f1dTnVk1CT6rDEiUHm25j1Mi2QZ765RxBuE",
  "key11": "3eK8e6Yncb2ycRdpmcYxv9CifSYpVBo3ZYsY1nx34ZNyUpRC2oeefm4yevYq73SWqLKkxzhWjkkrwXEf3Ex66LWT",
  "key12": "n3YWfw3k3UiR2QU1XkLsqkHq6wZWE5nUmXDgGZn3vh4N6753wpVjTt6VJfWrTp3TpGajaZNde9az7JNptR4soJG",
  "key13": "26X5RhTmCDD4MZYiyUaP71s3DDvhA3w8tabAuvbUGv2f15BnuApudmEcAczuQee5gQHrcTKC2EXzaD3CuCh3XcVG",
  "key14": "5KwpM6ajegqW5gowVoYKPQHAZoiBW9wGxWi4C6EqpPT5b5d6uZMSjsFQXA9C2vnTb45HV2iWxwjcd7FUntC1zrNj",
  "key15": "2nTXL3zZE17LJNT2QpqXQWtLm94VKiZ8R8oAwStWs7wWuZFu1kSA46NQHJbu3ebB3bVxhboNib9y9GzsJzqDGSRp",
  "key16": "tD3wfx42sy4AwvRyqTa3kZSUC6AoY9Jwb41irZfPu9qxCSN1rqQJTPTjfL2jf29fnSt9kasyjCSWyLTdkp9c1bz",
  "key17": "4ymKmZHzS9WWwt7a1oiQPR8gEpBvnfQ1JVjtMobHcEMf5LFBpW76U9i81SCeEDek2PbRmGzor8sFWGSi9feWUaVU",
  "key18": "4U27cRqX1pTCgGpAM7P8QzNXApQFdwQcVSJpWGKzbw1GYjeHQaDNCF6zRDA5RTdHY6oRgVvScec7dS5Pkp7DbTSS",
  "key19": "46T9C5gLA2woryA3ui8v8tFLCY3uS7DKBGdgxf6S8zJQGrDvdEyh1jYscCFf7FNfK6NEfem65uK7sC7weqM3y7ga",
  "key20": "3yAR2fd23Qq1pk6WqrEbajdbQa3JbVkgcQrExiBY6ZggTGX93GUQPsogKKGkasY9MDYT3M6Gw63ri4giuJ5TMRgr",
  "key21": "Hv7tUohK5RN5bCwuu9CVwxkZLcXovrYhE8ZhS4RTPUS7tZdWXZnYnAeaCsov89kdqsccbiHysFpdNM4ZBDNWW46",
  "key22": "2coRwjbqiJRc6Kv5aM5jeJDMSUvPgCuWH2eAnTMULhuYHhWsxNyAyFwneWtG11pBzMaFgXGyJQWvKd3AKokaA54H",
  "key23": "3cbgaZfGLB8tscDaq46zv6pjoKARP6HHVJZm3hQoJMDxCkouyZWxzueN8rbLcLCT7EvzpWxv96sN9xeXLgPLYWEh",
  "key24": "2NXvtyMt6nWwt93XDBCqKB1dTzgs3BZqTBDincGRabFCuqmh388PzGvyqsEYzw5Ay8FsUpRyyKagpNnRFu5ea5Uf",
  "key25": "i8KWFsqG9ZyKrQ5GoojypZvDjyAYdYq1GoN18sUkwsTqAbgc6Zs3erFetB1aQCraZc9ySfmMnc8njuiBYkWbHjN",
  "key26": "2iy1ZCbiKrpgrYwh2dazwKyGKcVg9HPMWKpGT1HE3ekwTEQKWVjbVN5ocfXQLc7gd3sVwzfurprxjiMbY1ffepoB",
  "key27": "3g5uiZS1EQa87sJD6N5bHowqPEcaWUuhUwDuGvPUKyFTnGL3McRiey5wZFVgGCVhHercm8DiKnAP145h2kMfLDDz",
  "key28": "2ohthWbAkvKvS27dgg2kCkYesPte3X1rvJsHWC84QAN3Q59GDG8eLdfFhLPhcdSCgfBxDYZEucEpZjvyPQsKDkZJ",
  "key29": "4PvFmUzxhtnGeUA8vJ2AR72KP94MSpz5CmgCEN2NwjpNkfDpGTRMxKcHsTCueL493Yth5sG1A88vAUobmqhzzyub",
  "key30": "4rCbotNuGi3T6g7GPUb9wp3Lid6hyJqnzMjiHJdUgaDjoxEFdWgmsLLyVsyRiYeh4XcBTY8PPi2gUxFZkZGc98Hv",
  "key31": "3auGdYPCZ9rSz6ow8faVg2HNGs8aaD2YgjvKLtUgHB79iqSQwfrrFo4xJHfWbbfj5fGKzWrHanDxxhfMSPhxSBiU",
  "key32": "5VUSofd1cixsMkNQgf4w8kAetWCoF1pz8zfQvf6keiBVCR9rsk1zBMAESxfmynKGM9nUJuJvqJW8M9yZajPrxPLp",
  "key33": "zraKkQNjVANz79zcrHmfJGWhMvohHxHNgVdqFPco4eCjWxeJKf3VrQcrrMgDN8hMM5NhMQyZhgAsMqbEuYaWcfF",
  "key34": "5WnUDtYxjsZkj2qPAQmUWhNbmcbeyWoBrpzaMXCDw9uEbdQUUA6PxcqMCCt9QWDCb25WiFFsC28XEZyq5fXEV6yK",
  "key35": "48jE5Ja6shT3z53m6GRwgeCsBnkgxFTcCvCCJZpDRtwZW6yLeHM2N87ZvD5GyeoVpH2WZmggoPTcWQaqt8bqNTYV",
  "key36": "3SgngyWgC8dEBUpn79651Yrv1ZEfVFzezfbHbmfN3XLDvzhYrb3g8SHh2usJ3hMxo2dHmeTWoksDsTz71jA1GLH3",
  "key37": "2W66F2PMFJYWe9VgBcBiLwvgdhmBhVXK1AeaBwtRd5KyZQLKDLU6nqTCkabZccPMVw2n18YsBNJuk7jDG23SaRJn",
  "key38": "5VqVZzefUqfaERBm1YPmusTH1wSh1PXme9cqDzUb8ekUpZRu7RWu5AGgwmrGm9PLVpY1in1pXKdkoWymoMTBxvrw",
  "key39": "2GfUD1TJjgrd6j37fJZY4JzPX15gz4RmXMDzJL5suNL8mG6CxkRnn9fWSXNCsr3E8QQvi1Loku6NpTc6V9Rb6kva",
  "key40": "438W2s3GaQxRxVtk93fs8AS27k3dfYGxa4yQX8rEate2wxB9PMtggbXg7YNVpCTiTSfJEFUnuXg9N7qG1dqhuXtc",
  "key41": "28xSEVsXpqisV5wn6Tm1g3CUPHghiM9J1SEjDNmgMkPiHkrTCfzJNizK93kN13rnZsf175ByYJ9kAA6nhbGutkGS",
  "key42": "2Xcf49WY5TppJcHJcU9UYyEoLpsJmqA5uEKug7stb7pcutrssjZHZc4a9RxTSusGgoEV1L9GXE1MJw8svezYm1C8",
  "key43": "RYZYcW15qRy9117jtk8C1LsQB3niBcZEQSKqBKvPDhf7X7nx1MDJjs3Ke73a8X6yeBPXk3ZVyMHt4MJhX4k8dSk",
  "key44": "3JXpwW2ArDxMK9p5dqRup5EiUJGnT6p78kcPaZZdw1LzzUS4dAdCJtsvn88Jz9bXxwte5wWiNLDLrsLGpNF61B6j",
  "key45": "5WNT4NSzTZmCdm5CyTywrgukuc5gQwuj4ZF3ap2euxCV276dqs3J8xGSWtoYqEF39o1MvPrPwUfxAWY1dNZgUXYm",
  "key46": "GeadP4Jr9MUFqeSnE4dkV7SZ1UX6uJD6zxF3cV97FN1dwpHRzxwJqZjZgugnRYCieYc9fMU7VvMTgfnQeMFKtgQ",
  "key47": "2SAh51vUSKWurdzVKrYRc6LTYGsfGMUgkpELV5eXwWM7zoLY2abHdGbE6f5arJzspyrZLr1i9wnyUkqhZV8BrPqu",
  "key48": "4SQvpW5m9nVYdc1a5QWuAv2geFoDqsjRp971Y92yy1pN6MouxafNYmgiUtAoYrpJ98ScbhU6of4W3pLptkg8n95L"
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
