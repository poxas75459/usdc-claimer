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
    "63DYWRDwJdmeJaXfwKyUAriZ9bVZ357jz35pe7fvQYa1Q4oJPcsnnED2smpaBxTftXeXEvcSrKBeWFh2CyLFYp4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oKcpwV6FVCVpw1FSUYgXwhz2okR5qgx9oz53b5kzza8skHPE1jKfMbjYJwmMh3984nrQATLRZuuV3QWVFsLJxRD",
  "key1": "n6ux16LHVaRWaRa2rubnc27tWjd6XF89c7bUBY2rEbhZLWC8C5151pgTvZm9SfhkDhfRkh3PKTn23P5BYtF2fyk",
  "key2": "81p6NA1g3UdsknwWNucgYXhU15MTGp5iLTgZsw9skCvT2sutYnmmYNGcKb6AwmzruFoXKiCFyjAZeF7aEPbbfwf",
  "key3": "4YD7bndbyEtaDE7kUcMexZsL3ezgdpKCSpq8RYCpVwwtMrFtTALUDPem22hCfrCoMpXSbq7TMiVHFWcqYphfUGK8",
  "key4": "wCv2JVtD6GxSPhvimE7aBEVwVketXnW5yiVs37Rz4H4trsEa2kY445Ac7da118NbuhSzkSkzsgvci7WqgjENfdA",
  "key5": "2huzktD7CbnVV4gAH4W4jTMzxx6MXnBwHeg9yCMpt47aByeSQGHvJxvASEhfmxzvdcgWPoaf85rPq7wJp5pFURfn",
  "key6": "4NtvXEfUypzKaaHVKAT1d3RzrvXTyFuBoXSWtiTTp2oxLJUEBWN8fxRwbzGVYoRQyAFTsQqNovJvxJ3paBLQwUr",
  "key7": "2xTauN22vM9gZxTuKUoDc5gQ38rhUveREsfCq26ygry66Xg6s7thk6ME2JQoC2fB51RtwnTW1nVo9wTxHqnUzfrS",
  "key8": "4Ug3jMMk4DXXVHrqxVS35m9PTezLQ55yjA28NRfNKPZm43m4dqZ7ZXnuaZqV5yRebF6fyaiNGmLB53T4CZDM1E5k",
  "key9": "29oWmnheYnikwE2jEyWtkcePHMrTJasHeuMVQHNf5wNsySKFy3NxYh4ia87qhC484m6zzamzfuk8N43xRkrigek2",
  "key10": "617yULJvRkgea1a4yR7ui8528ReLmaFT9YMa3j6xHx5Zn7n3ikmm2KMGWzLWoJyXjne8tD8sUSS84tHwc9bucvNT",
  "key11": "61bHytys5uyzmYpFRMdEgYeF2wAguKJDDUQSY2GKHHCnpfb9KEZVuHzJVAheCbRPMtVUzwZzSADwCs1sbpJutaGe",
  "key12": "2VXNez7u9MsSExKCbZs17Ygh1bTpXGh1kpZwwGCkdjHibWALeDQ3mCR4n98kxQwmymmb5TvbeaNJvPeVuZWMdt7A",
  "key13": "638pjwcRt2NJ7kFqynrQPAXmv3ASXRYvbi5yctW4hGbtmNaN4ACEkuGpQBLvS8JH4wCrwffGYjoS6fNA3JVxgUVG",
  "key14": "5gxdYAH1NAbD91UEqYz44416tKSTosdjjWDn3mLjG6K6tiYdDt5WyabzBL2kCnhbPmUnGDe8Hb9Y73Rp3Xmmu5dB",
  "key15": "61V5uejwT3j7h5od2MFPqfzqerQM1Rxmh5wQLa1LQXnDt6WLT5K14ocBwuixqd8hRjox37mUsk3NHJRqgU21K6Xb",
  "key16": "2SYbGcWiLf27j2ryLNQN5c34eEGEu1UhFLYkA8hJLrm4kADrqPkkmSxtfqXUK1QokLPJQt7h6kv31P6UTzJhTbFT",
  "key17": "1VQf8huzpr8pw2MR4THEBGaKZLx5ut33ifSmjMNtsKsHUvJp68NvjBCNXBDLN7iBzcFvGH1KTiaSfU3jrxCa47r",
  "key18": "3S27RUuo8PNFpnU8uqZPhXra7V3G9y4uPDEZBBJc5MsRV9GseSpGRNqzsBjtaUdSX8UtvtRMMrDRENFhwuzkTHa6",
  "key19": "45C84U1Q7bjutGZrjd7CSJX9TNdn6nNNXpBiGR3wBxoBY5DaUmGfzqwEJN4d6M1bn993qBzRjsGJWpMqjnS7pWoZ",
  "key20": "5iKw69S3vHeYit92eC6e6iZxX1TRhkNkef2Btsvx63aeHKP19FU7aDjPuzVtcgpPJGnzFQUaHgLCuWsBkR1ywStC",
  "key21": "2ePb4HbnYCYgBtMUYtdQ6rEqoxvt1ULrVkeqDr1CLYxVar9U2pRWRoCEwRLY8Egfm3dj6xxQgu8J3SAzzphsJTDL",
  "key22": "2QwujEj7GRYPZLrLjeqdWhQnuxmFbPfB4VqrWzU1sUT7QTuRicrc2rjYkiJJG6MXBAo5SZ7bYTpYJKqydYhvyw5n",
  "key23": "52231pKWqf1V4trt2YhHDNaQ19brR2oLAfnh655YfHPPGTAB9uNLzct8K5vbNmdWxKuhojzzfgVngj75DXunmjd5",
  "key24": "XrcQ3Hz9utUrmmX495Q8UnfbS2ZpfKL8Riv4cBN4v1WJSYjJ9vGu1pooMXW8YhbT9B1NVqspMSqJgixgy9rvhxy",
  "key25": "2VeBozDCmjvqka7uNCP7sDsr7axCceTSgXXi4s3r3kJxs6x4LzWpJbJHPbTuHyq6eGsGeXPK6nEvRS2296o8wHsP",
  "key26": "5KjutMxpxmXrZdt4VgiDW2GMpKX5X4cMhXUCspoc5cE3xNbSDfmLK9MRbsHcfthAMpyvtJSFfsuzTyzEfLj6Niza",
  "key27": "284JSdJ8Cn7JF4YycNtdW3qn7LtQudMiGMSysc3z3LyDdJYyRWojMCK6wsmTJdX4S2wGyhFiVRpErGTXXjtp4mKp",
  "key28": "5VWYBawmwzu1xzoTh4Z8U8idVSJsNrubVhJp2XDzxFfFWaKX7mPesTxnePVbVWfPP5btqnkot58JxFoTNGtRVmwo",
  "key29": "2rVzuPEmsDAibsrkvVw9ePwzrLhtZupmnyZdHy6qv4Qcxb7JXFgFjmDsKhVNA6hRte3EQYddq38qozUfDa6J7uHQ",
  "key30": "3Ndc2xF7ED6oDpny4bMme8BTGzwn26Q2gYeqa6kgmgH6f39sJeY1sMxwAgdtZyS5sRWYZgmnBSyK2zxZ2aWRcji7",
  "key31": "5Xa88Ag9vocCP5dr7jUr8Mkh3qxHmB5ar97NHqPCSh4GQ1eQG85HKXv6oUQwrxYBLeRdbowvzGBEPazq12fAJhj2",
  "key32": "5pwxZ5AuSGeKVdNkDGg2TuVSyyKerGqtA6gigc6LD4czBcpjgHvrcLWJa93QWYrxsEsqtPgag6DKbgCiJjjvX4s5",
  "key33": "7m3H2L4QTnwVh69VfhbVNdh44PmXbm8aKGit773fbWDg9sQAKVgdjP6jt15gXTHsiH9aKkbDL4dZt5pyEN9jVAG",
  "key34": "axArSv6pUPPj126MCUeeA4puFA5ehCb2o95PQ4bYjGAeY4ZFYeuv9CJFCGWego6dXwfKyDrs3nDwdsgT2Yv6xdu",
  "key35": "2DXiYK7ahcsWr7dkfGrk3zJrjKcFhNaDrMoSxn9Bvbu6Xe2capbb36z3oJFhA3HkpnxtuoMe3rHDjRUdbnZTvdav",
  "key36": "3MWPtpTXBUnFLp2pRZTJb7uCeFLwWzEQx6Umk1gKoJqvLCbvN25yiWvw98pNcwhphXoyMDF19e2BfMUgUbZfysty",
  "key37": "k5yGJXyG84oCdrvWbhDUkquVkQ6fMqwyyQvonR2ixtqj51sqdrZBwUzsxZcY1YmWZQHNKwtK9nPepbLbRN2FHft",
  "key38": "7YU6iY76dD6rH5WXEeDdxyAReNm7EEL5QsTxaD4mqJLKpxLzL3HmoQ8S8eLYN8tqkwG7fEvjd8HKeFh4TWtLwmE",
  "key39": "4vS5GrkhjBbBBRwY6zjLYb9Ya2mzkYRAZVUZiLr6Xp6wHEV5Btrc8tGrxYRhM6J1nXpea8Y8gHbtaTT1WHnuiheh",
  "key40": "2skexLrtjp7H5Vbedc4eADCuxyxn8PsgsNWdc7YEb3XVy7uS9kP7rcXBPyREdEWyo2AZQvo2NuTQZdpKo7FEHLrp",
  "key41": "5JzW17Uncd5qsTAGcr3iDMvUV2E1H91wBhywLfV8qiGHN2dfoAQMBEgQNfoGFmhd4bTLG3CcTDPSdKLuzhhEBnLF",
  "key42": "vFErw8zhkxZ31jyB6PSTGFpGZ9z4wnUStDRX5kRGVD4xyiN4wbMDmH7imYqjc4TCCDSuJJrg5sRPkfXmiURcn23",
  "key43": "oQ9Ec3jXNeJKJsLo6dcHyhEXa9RZVyr7wJ2bwvkwSt61wgi66YKrajL2dyGwGH17LMtuFNZ2onYUX9MSaKyMRpG"
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
