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
    "joxhCtyVjdJq4nQDn3UpNboav1erpM11MzBvbvw6eCrZJ77743XiaAy1UWzcKBtVbfym5SeHCwFTmuWVCxALkXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WptUUxb7KTvS91arsxEmtf2dTyPkV2iFHfgVjjoHkWUCowsd6nbkmeoWSjcVMwZrkSZxpUYKzoQvfprX82hQtJG",
  "key1": "4gucNcVPejDWkWmdGYoTURVcrBfMvHEJfsffBrCUYRyuDSR1QEwHTgNaQavArJA48Vexkmc4hh6eyMJ7apAb87ox",
  "key2": "2Qn6bmXcwFKVFkWB5dDK4PDa3hBqmTDuGaFNXBtn7JJ2Y2GgeNotKmeC58MAZjTVTxqgmjX81MKTQLk9KUhQWoJq",
  "key3": "45gRzzGbnrbCJzVdRFxvKZiDsiPXbwYyFEioGf8x36p2uJAq4F55QsBUGSnBZdXwm79NJyRPBtJGFaNPoNeYzhFT",
  "key4": "31MLnJio95A5DNy7PHkzzi5CW423GyDpH4rRMUF9oTEii1LJDUwf4vAWzy7LuJdogtG4rpD8CoSh9GMkiSa1mMiH",
  "key5": "5nAr4s4VKCGUdgguqYqwTfK22ERQqdmvP1JZqXCJpYMaGXEKXymLiXy7icRCpHqFBTxm1XDjo4aSysYvMLGNPEGS",
  "key6": "4YD75tdGoZMjuTH68zpwb3cqd4CpCsUymekn415ESa2kUjzGzeSQc8KDzcLmhKakrRfeNcBKwup1UYmoT9ZxGVze",
  "key7": "czieTwVdU6LfgHHT47xiVi7noRcwoRghECBUMeu8AWdH3w4WNmtnaHf2zRVBV9zWi4PkbEw2mGVKDCwdkoBezCk",
  "key8": "JM9kZk7X8CH2mHgqjioonP9HedaeyiL2xubhuetqiQ4AqReTeRwBisEhYTjLBJY3KRVvTtUdfST9o81Vt2RtfJ2",
  "key9": "5C2oo6YtiDgntGMKH9hoygKR2NQaM2bQT7hDyPtCdzQokFJUD5Ya1uRpE36Fe5AEyLqstBxLU3KhsjBTqTEtfKqk",
  "key10": "2Ngs7DseNAmjLxTWqgMy4dCWrkCyUBG7YmWpm2y4xYEb1vx86dgYYx1r5fNBj21Eb8PQEajLyiGiSbt2uL5Fn9Tq",
  "key11": "5zjxroXcBtpDrkoYJtvL3kHiYcbBLLjKjyYSRNLS4ExE5eZmHYvPvMNt2rkvZ8a41ZiyXyBD5DhGdVAAWEtg349j",
  "key12": "5VzS46rYNaRVazGELamY41zs3vpBdMNcQRKeQ5Yy9ruUmAFrMox9XFCThnSfuXdcxqBhyTFPmJEL69qZGrWoxbYt",
  "key13": "3bBQgV9mgaAv6Ra1jmJtkasAifFPgjRsSNEEg9GHc9JyzKa7eYjt2MoTYin7joDax98zR86AKfyYrZU2xUcG3nXs",
  "key14": "32nBNt2sZMKcWGKNJta9LYdrCKETp8DdQtrDL66ys38L5a8bdAy3WHpaNaeZHjrE7eyXeLkW8yoaW2bmbw3gyQVd",
  "key15": "tGSv3TSwnLskHTAijPnGL1KcRt4aB7pGXrKVdpD53BBh1JJZFbgiupC8VZLTUZCcMyRmxv95G56QjFN8gHbE9cr",
  "key16": "5xMieyBYWZwHkrHpQkYyfFPwPPG5mS969js5btHtGdZx7cshApoLywEPQx6zUmLRuuy3yMeE5KcDSKWWL1UvVC81",
  "key17": "2aQA1rqNkaRYNJHWvtm4vrg633XFBBv8kmTsssgZqqDwmK6yoQF5TyzQe5HMJdgpyHBJu7LDCsRRfuBGtKyPwy9E",
  "key18": "3Zyg8MNTXZmnqUQ8UPCwxcffvtRNbr3VG1bBWuva56GCvpW25i1cUT9Kzip8ZActm8Y5RG3EhuriEoSHyf7fxgBL",
  "key19": "bJriDLY98sbyiRfNN5Ss73iyBtTwjGN8MRSDCUAxj1AH2fULBvRoAx5sJpUFDsVzyMnGhDMws3kkwbhwNwSpkix",
  "key20": "59Ckmto4oF8FtDa9CLBya6Z8dm9ipPbY9Tp2Dkx7G91SwmjQhfN9JYo7wokHvWRmszsQBrGi1gESyJkJGFehcJkW",
  "key21": "3PDuLjjexUsrWEcjyTk5UcijyLyeoq58CC2Li8N3bJQvugS1YxLmRgdAx6dF9oMaAPaxemJPwv5mfAPQQxNvmH34",
  "key22": "5Rzg2RRryuGaJvbMnL9rdHoVuFetchyYR7BQZHTS3457zeNMxpg2gN8PTHyGWmVE9nx1RbBpusxPeC3xW6atQyvH",
  "key23": "3veF7ojTJ4RX42Mre2mbpwjNm2JmFsSEeztnDyLRUsUFE8xMkSfa7tpJjp6qsdLkAFosfcP9x9WbyvXkYz9fymUh",
  "key24": "4QYiSZ8mBfLhRgvJ4iGY3WaZAW9vPkXqbLZJbYMhJDyPSKwxxjzBwpodCHmwwBBHzUDMhcSd46Z7t6JdgSWq4oU2",
  "key25": "2iSf46gte2piBeobtmkrafgfMTxYisCFJuNZa3SNQTYqpL7fedTr4o8EbRMTsjf2tccKqCywPk4Z9ZHLUfVitJ5g",
  "key26": "27zservNkmrxHhuHNGfnsE8ynHfAq9J6vqxy1EB2SpRgLTNpDzYc7VBZJWER1MJ3Ckoh4kd7q3VPL2n36xkASPGn",
  "key27": "2CQrdMELqc5ixaszDyPdkeSq4RTXWBKC4Szx449u88yGfar9HWrraaWC8ghedVrP79rxvSwAaebXFsauun56xTjk",
  "key28": "4tkPuSqpS8quCcbDGP3y2s33fjxDH4VYJRUzb768SWtpRYyV1pN4xZ98JSByhcVZtzEYTDEzhCuZHJTN5XSHvhuL",
  "key29": "23DM7JYm7cXAhgzhzYEB8YDCMhauDuBdsjvofvqaRoHintHFz6cX7kUWpMuN6J4FEQ36AombFGnBHKtcQuYnXGiY",
  "key30": "37Mx4kBHuLSR5ujj8EzDaeLsGJigfN8jRypZx72syy2P1ctrWfct8FPcTmY1rRFqDNiDVraYm7xmQMv13Hs23D49",
  "key31": "pU17eAGFtdfi3QDLYm5rjYkvnS5MiaWPNnYMi1b8pS9D9N9DC42gPC1UccMmdHCS1NJ9XjRqybU6ub7MunRaPzw",
  "key32": "3Dz2dM3yGBgoUZeQY3nEvss9ePTNvbacGsNZsXZuiXjUSWyZBzTuuMyXF9xuYhPtDqUMfuRRTHZup6kHPKjpzzis",
  "key33": "4cHvLauJHci2quSdBYHJUjbEJdaBYKY6x5y29fLZbj2FrM7CKYNJgLf3MdBY53uMqMur6jD5J1Vr5RFjUYCPEVZy",
  "key34": "1V34yghCBcJ3Nnsof9f6c5Cknqa4pCRpLtRtaAX6vJE8S8qorCrAnNqvSPtjR6YDY5t6UtB72Ug682d96Ky5zYA",
  "key35": "67QBAREqTANU6vPifTmB8moLTyjcEnBCKvTKBR8kC1RjiXewRxDuJ2jtLC4X5nGTnRiKBYDmjUzQynhid8L15SVi",
  "key36": "4V7NbRHeMStpuCq1hwVj2eJU2ptdpQa1FJWHSn2LC2TQz6x8NRxsh2JJSwAJnamK9Ph75ZYY8VUtB7uTgFuRqQE1"
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
