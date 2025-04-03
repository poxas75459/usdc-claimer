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
    "4SdAEJfiYHzpk4ktDHLHi5WB6ES5MEwZNU6q4VXf9mbejq1ZPpJUbtoeUXpDgE3DXRJZd3QB2XzUDitAehXeMByy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vG2iUQTsHjZSd4zUEJSiDn6F7qck3XjqR5pmwby62LvLyJigAozR7PcJ3mGE1B92GoD8tsrUSVPRasKdEkbN72V",
  "key1": "3qaXFfNXgYZ8frbpwn31cMMMPZXS39LEn3gZfqCtcNC77EYRkbsjs5N5pn36VmB5LQCZDYkfVaPRDvawzR3Pi337",
  "key2": "5sPhCsRzeUekdYtXFMqahXe6aRPeRM5q9XVkTPe16rDcee1NccKSbyh7CwKtu1DR8wNAuVznU8ZmciVnxsSM4fYY",
  "key3": "2VmiSWuAUWXECX5SQmTq4svHVJag8mYm9xSwYeQJ4KD9Qd67rsHpwXoS1NDqfEsRNiXHoQ3W7RuGYCmAKT3LBocv",
  "key4": "2XFmLmaeDhstnzgvXuXyUCa5KJg91MSgEEAwreixCyf7Nhg6XcxByL91FPRZpSQqVVPGPbu15nBAFxdupBSg3cFj",
  "key5": "5MoPH3Nsi3VagrTusCCYo3thHYEqd5A34asJ8H2yQyzbtrpXMMqothGzTfYtm7VqLS7Rcpg28dwPSqWvDzQzwQe5",
  "key6": "SJCYFbJ4XzvSRDDxJVht5qQEM44NrHWb1wkDacLHgh4WnfH3wCtQFoGw3KVQLa1RauYmLtCpJizoY1BpPPee2mb",
  "key7": "D3Amy1xYDTa5spN8EjACUWEc87DbHKPcy2kBM9nMMYtugtK1Uf4xyejriF9tps32QA13zp3KgzhpFp5DrzYrCTP",
  "key8": "2tGM8Ys4bFghTYmYmiThZNbBFUuEegwKXdd7byegytJBQRXm5XhfSGbh13SMeSpJNg36BR4wB6Kb7nRGko53BYDh",
  "key9": "4PjhzsWPqPSH4stHWBmNUEuGhaBknAmFrdq2TcJhRMdsssFjnP599w9CzinWFii44M4eSsQ7wGnfGCyd1TtB8vKD",
  "key10": "xRoz2wqFrMBoQqBdmcYVKPa4oWhCTEhWvKphq1XHvhWUwWbHSMai2Zx6XyCRXtzFmkWMRm8wk9AYeNL3R4vgBgk",
  "key11": "32qgGM1XzSSFFca6zFKaUPiJMpfcLjZ7qeNkwkW3z4fJwzWUwHXg2mtSfKoZnJdmvZmmqtnNYJsLVVqzLJmEYbiu",
  "key12": "3mpcVtGfjSTUfgobi3ucz7ZBhurgfJfzznnbB2Xbca8aQvjMfQLMURKJuXMBUcCPvN2ya9UWoU9GL33HC9uyCGqU",
  "key13": "4CLBMeRbQJWsefxgSknbqTcVmCRWQbSG2ug8bf5Tvxj9RpEqiJyHFx5MG19jn4LmRMpPbfJ4a54mWdLJdgjqeqMJ",
  "key14": "5h4nktK7CrBoef1u75bJp8pV6BYjYkxoy1GrEcqj2Yzn9snSGo6Vh7j6tx6FPrH59W4yAc31vmnrRUw4Vo8fBqG2",
  "key15": "vErPEBoo59499v6YE74UvzdU1jid8cbACh9eS58yBVZHFSgm8qSNCS21349wKbpx76TEsC1cGGQS6341bMj7nBB",
  "key16": "2t38CTbYwrqXfjNEX1P3zBDPgqLhJ8RPCn7zCgjkPALMpzBfwUwe4MT8fLKxbczunZNq65UPW4uDu3ZcaDCfMvje",
  "key17": "5etHmbvpRjvZxUqNpDsNgxP7Lz93djHyBSJ51k7x6T7XtQyQukksUCRZexNdUFPxPHwUpdyNBe76fmD6GtBzDTiw",
  "key18": "3RTDLoYFDQGc8G3CkqL5GBgdaLFD9HiUyn7FEaTjVzpRaZwEKkZZ8duDPHEZ3io3tW5avmbRZxvnfcj1Sn7qgxzL",
  "key19": "2KqwqZA4j6BHwwqRADBT5Hc3CHPi4qC5zwKHffuMZKfTFqP2N7VSKKyAGbuBYet8ZhFLYLc1KPVWMMV3uaCNjbfQ",
  "key20": "2Q4t7BQeq8ptNyV5hwqW7KuBTcgtp6aYHS5x8Z1Nmhrg4jAbxMf4AdXoamcUMsBSfgQ1VHA2rcqjCMZ2Rwtaks8J",
  "key21": "22P2boH7EfkKz9ovEa6SNKtVAdSHLS62QduxBy2kgzaHzpqaRsPMhR97b2w19YHzzfKhefwn9QZ6AnAnvmFJkHMG",
  "key22": "2nVPzAgpmrmASh84gskd8e29jvsn3QnrHXRANpRArTcvDDaRuJG6KFsv8371WCznJhCbH1Jq8ePPWFcN6GveVjfb",
  "key23": "4YQWWF5ZGXpLj3KbLZpV9LGDLxQsc6wwQvdUxh37Ynpqje7RHJq8i9naYx393DWjm3NETxFeFonMtnjZEWu8mD8t",
  "key24": "2odkpXf62Q4p4oTyw18kFCf7mxkP6iTcSymypmByiyXzMfk395MFiDuvpnjVm16qYuEEsgVeXBTzQ5YyxX2Ja7yY",
  "key25": "UbzY5fTo3G4GVdHqsNG8bGr8W8JrwtvqY5HTqRHm2PsxEc6tYAeVKyXuTXCE88e9Ap58U5Tfswk8R3u74wufvZ4",
  "key26": "2sS959ThDdeuNaJqbsDzi1DWVSvRBuNcavD5qUSyKioN8vuhfACNhePaVkaE15EXmh2GvbCf2zeiuW9sK3LbEW3J",
  "key27": "2gBPBoWbiPFDYUwn4dkZcT2Y7JEWRzaQbKbv2LYpP6CnWBJVpKQEaQc5ADizx5bkCEc1hSAArXN3yjbatymZDpaZ",
  "key28": "34WRDjwbUMFMUXzH4bKaxSpPcrLcX15shH2Nho2DLSv3Ph3vFC2vhJ8aQLudpGmwKf1ATCcLpegkhZoU2vxPNsfv",
  "key29": "2RnNNQferXgruH6FEBPX7hHpXWvmMjjcd2yzd674dYnAPMUQ63CfUsyrNBrr6P8nZc8b3PfZfGEhaV97CPoACaif",
  "key30": "3CUubwUGc8uRRy9D3n6wJjLTukYnYpCD2kE2AeuBrc1gZXT4mHYj48HkftRM5oeUGkDCXmbG82EGrctEtjRUEhsB",
  "key31": "4roxf1N63METoUx1sBLb3HdqeE5eE2XdkRwN89HbRPX3Yyieww2nNd7Qi2yG2mmYrbvyA5m1B2w494vdJLPyBDww",
  "key32": "4qDrtEnNuh5ZBihisHQmtFCiZq7NNXwz7tZrBmWyx8RQGhmWK2vVMYaT6PZ94BhzjJz5mnUfWR1egZcWSW8dMLr9",
  "key33": "xkZTk2nH9y4SNajLjCKs94nVjpifcs6DYRK7qdMMtsScvTFBRkN62cA76uwU5H6BPhGCLtvDrWcv31BoJs96pss",
  "key34": "3muTfxQRYTWgtb5mnVN4KFpwHw5dg2BrmJBGExB6xxoYhLiTNZJXbXbHtKgevoQU6eiK9v55CLBYQrEdSAhqSWHc",
  "key35": "3AmvB7a1aR2FGWm35PmAiAkzUb87xku6XQ4X2Vb7fNWGzYYB8G4Vsu1iTEJ5bc8mAGtiHAdCQrp33ygCCegSbGe1",
  "key36": "6K9q4xCnGdxF6ZNgu2vUC789ikAhHwHcW5qfh9LU42ms94XJjTdgiBDALGxPJd6kCVhE7QiMD38WpbUZdVfVyLh",
  "key37": "R5gpq2hs227LYRLDcee2mhM3S2PN174gcGpF1AN3naX4ess4rmZdTdmXTP8ZPimbdWFGvMC3Mkh8WpAznUzKz1x",
  "key38": "3pycUCBiZjNt89RpxiBQGuKj5ytSUmnhqMVYvsFCneSyhAyg73zMijEdytRUR775Y5QYx21N1orc8DkFn2e38K7h",
  "key39": "3d2xQL1fy5ZegCw8zfWunoWzoekYKPuyP3YxPNztDPXerdDSotbniyonuttczMxh6W4vPMNTBcJzYBazs125SU63"
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
