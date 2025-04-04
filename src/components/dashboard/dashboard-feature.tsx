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
    "uZ753uVZpfn6cXEpDBpe7F9Seg1sKJdEeHPJSxCFjC3SMFmDGyxAQLxUPyFhQheTNhAHynA1PEPnBKxu9AWV7fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59UL5iLya2f7FS3HMsKjNy4WRw168GLk6a2pxxCCMeBHxKL3975Kuyg5ePPJ6aJd1DCo9t3PSG4E7QBMLNGQNNVN",
  "key1": "5hD3FmjvkoPfGYUq3zFn6bVtrRAC4Xc4fBxYMchCQEbyY4RRMeriGaqjWMEuQru6JwtdojdTKwZUEBvmVcBcRHs7",
  "key2": "2vLSR7kDuB7DDEwgNUGxweSYfmUhmWFv69UgBShn4tQKuXPfeHR8Yuommo9bz2pdgs6vvhufi96P4ctneg5SB18Z",
  "key3": "KGiUF796aB9EyPyLakmpVezk2jtVVD9ZYfvVDhZkpatPZwdHjyakQ4QKxUmZ6VLk333y6s9hi8oxJcFcaNTvm2g",
  "key4": "5pzj1M8aRAM2YtzqUn1qdZfECwVECsKQGroDi9DG2BxiCKTmrqQC8rJ7i6RqAJF3etTXiAAMz8anHtbfBfn4emHS",
  "key5": "4vJGmdqCZ8bw1NpzrbmnV6PLPhUAvJyeaujWcHVvvTFYmkHf1cnhxqG3FumF54HjmdteAt4cLn4621SBBvVw9uXx",
  "key6": "4rAqsdM9cYSrBdwHMBk2d9py5wt3rpyA2fBpkbgmUVWn2nkRZ6DR9pfSeaHYThJTG2hCW2P4PUdZsKYswCYeY3PY",
  "key7": "4BCbn49zkLc1DwPeEdJqovaFsrhTSDikwQXETFVVu5sR4vNPPgG2yXNbsHb7GRe5AiQBHvHS2jmhqpj7xeC7dtnP",
  "key8": "GfWGTJHWfvRHbws9a8sr2zWSJZnT2jz1Yyi5SZkoY91JSz1qTH1VPFC3SQTZ3XrR5jd518ucjZA3NxXF4MqJZkQ",
  "key9": "5hrdFmysS6cJEWPth9V3wkqtARhfznviLk82WmFSCndtr5fnhhPjvJ5DsbQ8qbGPCboDZieo17odABRtr5Bp8sjF",
  "key10": "5nF3ebvQPrWQ8pfiGwBRyS1nLYzPpspmHokwrbryBw7woTyg38wdXwEqoxRe1eRaJpskLNDBpbSY8ZcbUJdfZdXw",
  "key11": "3MtdeH5hFxpmqtWZ19dwSpBmVb6W9yeiQFi3YEA1Ap6xB8Vi5ezLvm8YhH7cvybg3owC6mFmQmthiKLRQLtnmHV7",
  "key12": "2jEu3Mm2HAHKbYptFjcogEJH6NfJpvV5XFLyWDWwQ3vA2ddiPC2JULxoVYxu1qVDSyRYafKN7RcXGDFb2EhyBoFP",
  "key13": "2Ung8rZbqg43tA7k3s48JUxUMoXZNx9D8tWgd3DKxcQM9gB1xbmQZRJuMk3GemggcBUDaTVCpY59xZHjUGrmxEux",
  "key14": "NouSVoFtQrNLyzUH2kfkfP4449bRrEGF3QjF5BDNPKdmhLMJnFsG4bYToKxULwDbMdcsZwfDzr2oUb7prApifv3",
  "key15": "3rvXJm3jjtRAX4fumcpApVU78N8hv487CnsoWHBDsmYX6uStikFpHYmKiVsoWazHk5uFpeS6nGFarFUsr5zZiRFy",
  "key16": "5xjLcGLvo3US5Y5Uxyza6Fbf5LAGtQ9KLjhMoSepUcCjAT2nViwJvFPb4s4ADrEULs65vhsZeUWUMFMTdCRjncay",
  "key17": "4cAVX6NxMmQH6LGqZ8oQ51pB7hT7jvN3KscVQcQE4wrVceyWE4p3vEV8pj3LeY6atpwQ1VZiQb5hVWeREUU8CiCw",
  "key18": "JZauZRwu5vP2CL6joTpt7iRduN1Xw1DM9WCwu22dNavDusKgQDfmiC1FoECNEJmm9ojKyzDwtxtTgX6CQH9BzqM",
  "key19": "2TAC71CdfMhNrN28Vqg9vnvz1WDmo9YekVxC6Y3Jta7P9z5WFxcXtbF1G1gWXMpjWGgmVcLfhSQkCpdqarzq9EGp",
  "key20": "4UvgENj1JiBXL5ciVn9ammqPrN3duKdXyoawcQQUSKwx7yC64CtMkDB24WoLp8Krrq2K4ALLL4XTLihdcGoXCtz2",
  "key21": "4dmFoeaNP668YCXYpu4h3eTXCvZB1EQE3r7CuDwyqvamYNJzGrN2WeSwg27btdeGvssrHiDMhECnQkAoz7pWs8Ps",
  "key22": "2Qv7jNsK2mHDfbdBvczXHaM4LxXUWpxUVbVB63Fesd8TKT8tBrpnnG6iN6UidjRmZAXWm2n652JoafV2BpEyaV9W",
  "key23": "46siSDYMxeFXkuox4ftrviLYgs5TdFGYVsqfFfEw2cJB71usHyeQrfE9hnThB3TLyWVFxqfiX7cm8qZ4hjeibN68",
  "key24": "qNTVMCcMLGBnLSTdqXigJ1BR8qDgDicUSeNfziYuEkQBEfo1NNgGQcMbvS9ZkneCnaikpwocgEv2SvAiRwZM9kB",
  "key25": "J8btG73bFMd9icWbR2VPucibp4TrxwykN4cJongyEdPUKiugpSJrZbY7UBoU8764wzbgTcT8oG561SjZiVLeCbm",
  "key26": "5YEUk3Wsh7ADRmRn5aJV9srgj7fGmHSPmbCS22x1F1d9vqMkBKYvLfYHw5SxCPRpx15ZGoRZkYmcbNN3rotjgGh2",
  "key27": "5Bcg4yr91jh62kdLsARQtAMNJLz4sDXpEUF2g3tRE77NzNuVsXWefN5Ur8HYRZLuwz1Mx6vfX7os2Bsr6eFFyuLe",
  "key28": "54JAMYLv1CWDDSXaYHVn9TBA5FSCBF6JpfMtzeBBXuYHX51dJZRaC1QRkUyuz8imzGcvQ5ZYsqCzWg8csWUb2g37",
  "key29": "3VsEdUoyX1JxdwuCCsAivnJWJy5Kxm3hbpiUHV3hDrRNt7ikdhJJ1NA1NAyDfdAPoR1S5qqHntKM6gf8V5zoYcqd",
  "key30": "223nrV5EEg5K6zATVjehmQTEj4Uw7GRNEQbYEMz7GpZzaEmc65Sf6iB9DjQMXCEjuPsusP41Qka68GaKjQbJG7gs",
  "key31": "39sXtyCMD5t6rzRciMr8WQKWKMbBFmfxAYT62E4ZeBy8A5JCYYmKXW1UJ7axn5XRFmcdTDy6etW3VVXGooZcLuZK",
  "key32": "2mTDJGrUjKkG4aF3kDQoih8pztw5VfxBLdYM8CmZsaB5mBLBPB9MjiWob9VhvvSRt3iBLJN5G9yKsSWxssoVCM4H",
  "key33": "2PQPvPiLu5c5bRKzX3osmYWmgaH4rSVwxk8hoJ4rfXuck49PFieRxoV7WmExJVnpYGAacv2TUUHmEHnWo4M3a9af",
  "key34": "MjDuBK1SAuqJwuoMq7feeECozAmxBHMciatwN5pRLLVvZ8dwottWkfypQvkZxqGcQBiFish8QiS8UnEbk6MqpFF",
  "key35": "pEdsfgYeimjBv1j6qhd4cUUgwzPRRsq5JYAWkcvS2EQ4apyabDyGoaj4W8F98VD5du3HeUiUrXo6JGqFAxLjjc8",
  "key36": "fQJAXzPYfo26W8PCvcT8MZ4BrsVaiCBHRzbZdqzsX5SXqHDo5do6tFFVvrEz9SjvXPNAaQzDNka3CLYx3Mik8kC",
  "key37": "2Y3WHzmJ71iqLmqo2xnUoEjqXiztyd1paWck9pogtLeH57uf4FNCpxEaJLn9ptqVc4hZSshabjm4a4J7oiihrEQX",
  "key38": "5uq3ZUkHPMppyMNgNYYwFjsob39rpGJTAWztpGcZf6zM5k2yG2QbAoUXCAv7BqzwH8E3kDhzwQNpvYrLCjSLP3Qk"
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
