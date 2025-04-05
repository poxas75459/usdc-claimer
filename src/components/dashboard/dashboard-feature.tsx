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
    "96FbipTgpvuxkjJUaAzN1M8Pf2KFM3ezbr8wof85bJcjCqJdhBbZ3DYK98UoKy155YCqTXCFwPUHFwUA9zFmXze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A46ApzxPZjEQakjcbxuCPUfoVE9GefdaPubQFBrw8KcGT3EQFznPuZTHuE5A1wu1jirQnYZGwyPwJgyoozVCofk",
  "key1": "5HTj5QDKM1yTEaciJ8Ax7qQ7GjbysdXf7d1xHygtcLPPNBcfm3GcozPxUatPziSE2YBtrQ4H8qP6eXtx5XJAQd8k",
  "key2": "2TbYFfZ8fLqajXzEapGLea99LyRE9esAE4zkmidxCCpKRk9B6FcS5cVVbJsZDG6N6EsD2UXshXSdD2CyPRXNfBAa",
  "key3": "SaSXWuYJTAL8syotKgjiRvuWQF5fUjjrGGQYKEnQiQuAJLnuus33D2h8GzCmwRtgqncLw5cv6kNf4DdwgMVJWhF",
  "key4": "2vQEhaFEeWmyLqbH2F6Hzru8Ra99viaoJMLWWcgPy2TxgVTB6rku9FrpkBJGjLZ58ctABPBrT5hk5sDctWw3Kf2E",
  "key5": "2QLYT7REyrU6qaXuG1kFZWXHTFehM2ztHoggc8TjC5jTUCa1qPJrX3MPB7yUixrgKAh8Ei9cbxSQFYAXBMwJQ1vy",
  "key6": "2NbY6wCBY6fz8JVjJLrL3rasJezijJQFJ7uL7JjHeo4iMxwtxTrH8N2i7BCBqtyxc1YJYsY7eAKZ7h68vQ618JCQ",
  "key7": "2nvopL1Qc6gtLfUZA3cU65Qjn88gQNF6Mg9BmGE3AHvivJcBpHgtUpoBnfWYNHqKwij77ZNghZ9d6f5G13cgLe4M",
  "key8": "4Wi72bgViyBBPsWuQYige54Kj7WdSbmKF29YifBwuJMY9E4wtBgUBeqFeyuV8YVAdpizUAxjkVaCgPUrkWmgD2PA",
  "key9": "5Gke78kFQXnL2Ufc7Kjo8DwkcuxLYocVqi8RfZFYSfcciz7B847RVGdtqs1ntqZRBJ49ZgGbaKpPo54fBSHzPvPS",
  "key10": "4zy6uccwBuMMPQEfwPW5xEHyLxoQoRxhy6wVpGNQNqpkZEfehZ7eku9UMigtpt5juDCGQ67BAsmVR5fxZfHhsUtj",
  "key11": "2vGhDxEFMMCD4rwbC69fUfJxfZRxaHYMJJ1BbDZqxnunZrZ9N5UaKKWPLkDucqFdkeo7zMjEtnMMStiyMMCFwywL",
  "key12": "2jvxWd17EMv4CdAS31A868xfUwKGdHzMJjSr96wURHb9LephrfB8xJDPXsZQKd5JGLVEztfXYuAY1ey8F2uMgd4m",
  "key13": "47bPkBqPRGS5YwiuYWpourSnYjSTVjhXJ7jSbhhARhXy1P1wEXKUGWSKwyUZesL6FDM3o1ro71huyr25FidPmzgY",
  "key14": "4tVS9wTYtczJbzPz2SJTR1Pm1EicRk7poofg3FLCbPRTv4Ert2GMw84phTJNJDg8nhkDwEs18KXXyNofaqfiZ8EP",
  "key15": "4jpg7fmr4DQSxRf5XZGUyV7z1JNBVXVJ1mYhncogZvmZSJEJxC62F3BQX1ysDGq7mNrdB61hU9YQxbbJqZ2HFtJi",
  "key16": "3cDQjDxssKT21uCGVHA5NAwwkQcrXFEqVdMBe5BAM2Kvi39M7K19Th8t6SRDyL1o8qbVX7QwvpLCAToThn9pLHFQ",
  "key17": "UrdHSN8iRpRTfR32PVAVCyTVUHSJjwgu4NvfeZ5nk4pMV6EX1iu7mAX9CC5r6zBRDYKKSHtKCkCqz3ATUcykk5M",
  "key18": "3eg9cb28Z9e5USL6XoudST5V91A6MS4RJcJNHJ2Ehnkx9whN1YdNkVX9kecJguKVr8XBDLEFQj4yJQ8r2E1bcmTg",
  "key19": "2NMZzLYuEjNYh9RkoLhD6yZYt27G24khybtzPv8dvjFtCPSUY91DHVBAaEDR4cPYFK2NnJTEiMtUEQLC92L45HYU",
  "key20": "2cpghLyoYoQG5xgUo36agwPPTh5pHV7q2jrvVBWocgeUUfW3AP1oCKFDmDCSzdYnM5QJoPmqqH63QWStYADmsyy2",
  "key21": "2Jr5k2sAMmykx1jqNJyb1zMKpSQneBW3qYC5hAcpo3cp1GgqwzZrjD4iqhA8vEvRtxP8ZBQU34FZoAXZV1gmPEpn",
  "key22": "4p2BXzD7q66CU1Dc9Sk6EtgnZGdHtdRbPp3XdYRzDeyXPjx7BN6HWSph4PGYuLxLBWMQBNreUA2twpPKJvHRXzNC",
  "key23": "5y724zTrCQo4sJDWiFtWfzoXq9ZSwS9PKbM8krd73vHWVVXUzv2BH6mcV32GvP396UdVHoxmVsGutUtrCZtN4Pnv",
  "key24": "66fA5GHzcEiV6KuD8CmWRGkpcEWUZyrXyo4W5mTDZuxdx9CCwJbgMfDwmqWhnp6Z8qsAuKWaBSDDNgb9fcCmajfg",
  "key25": "668xkkDwUGtwR6fXjK94SQMq31SZfnwyNkVPUWPckTjGPN2fDXLMCSJK93NPNQCJrD27kWAJHo4DLao1H2h2SQpx",
  "key26": "3RXnp8bW25hwugyRHmP5MmbkkLG4MSvsbfTBkf2W6gDxVCCjyP6hSZchVE3uPyCFcXvpXTMyF73CbxvcLUqVP88",
  "key27": "4vvBBmEhq7mffffEQJuntKPMGretAi4xhuv8C1ki9BEw6dnFfhpSLamgWyDX7BHcgb1JNKXSqgK61Wy59cxxpCRw",
  "key28": "EtYFtpmMCFCdWBo6UmRYQrFLQ8J5yib5AzGub7yusWdHMKETJv9dnp4Ytiw35ZiCEg57vAatVTuj6fcFmC15uWG",
  "key29": "2gJdprKctGZZ6izyvLKRVTwhWAFNRMaVw1dJLQJDamHYgNz6jUKHkrueUqH8EieKZziec6agRmdnt6oJhyFCJMJy",
  "key30": "5w7k8T66ZCnjxWMN24cXqkySpkreBZH5MZyTyxXHF5mEsn2ZvGDk75DavL5ocP6GadrV166dYnNquX86jZkyXqCP",
  "key31": "4ifxFKFM1vhtaeXNPFKwVdT9yjugSSepmaW3U2QngD3Cpve6nXDNCbourRAytet3Hbo47HxT8NRvBJ3ZkQCVi79o",
  "key32": "iK8zsekuM98JLsJUGykkm6wywAhBPDmZdEUiXFEdXx9xgtUh7CQLk6a2VhFxhvof3U9VNjDfGK9Raq3mnXutkgy",
  "key33": "37yD7HcRfuTWZSXfPcLuZ5urRa8sKKASiYTUsuXi6hFhAQarsRWwXcqMipv5Ss1xorM2rWhrRRgS2TYZBh7ExCLU",
  "key34": "51TzabKFYvsFGgJcdBFieipucSGfJDxYnuDaAxTcSCBvYzx2csihkN8w7yHAqfizaXirunAdrpy6dhFgAYj4p9om",
  "key35": "3E5KMnoHjuYXrz36V1oq7GwGapVmAVVXpNrmHwLojSiTTbY3dBVRGbP4nbLYhRtC6y2diGrVYFeRdwi3Xt4giejW",
  "key36": "oSudo82fnkK999X6hR11B5j4jHw2YdDM59HvNrQgMQwL8gdSRv7hH8ARdSdxSaen7WSs2t5dubwjn5c5RpbooEz",
  "key37": "3xGs5Y9R44eBgKF8YSBsAPHEN9bjHpgSdFrffHpPYeqNXMyUy5nNYpucxhRpzCZSLFURUux75ayWpb6NcSfKDW2Z",
  "key38": "5B1joDd1VsysDwGSEPEzD6zydDqJPd7PnNHVpV85mN5L23kGg8KLY9JXwHzpXzCbN1siFRxJnZh8viNCPs6P5MJK",
  "key39": "5126fGqTh2w4DZCecDZu9xwXurmFCVaocskXSA4zFvzHEu9twUMHSeKJx8Vi1JzHcPTXiryS21z2sSDS3igZBkP7",
  "key40": "2WEbEkRQUTVW6Wf1cZmgXwSemsnA9HgQmGXXkPPMh9Q5AvPbYdDVscLcWYryhYPdjqcDBmXpknZLxUwYMpRsU6tR",
  "key41": "457qdDRAFFYANRcVqTaAYNUey3KpGoR9ngjNsLQDr3GpUy9YZhtWsaTnccoudyWYcF7iuTKYT3CWveBnR5hvKe3i",
  "key42": "3cGL7B6bSSrZ3NUFknz3TfPoZnzk4evPjRS6ciDwLZxxh6s4Fa1syyUM2yfHsz5KwN2amDZFU6rmFAjfeErsGGW",
  "key43": "52eogDryb3SQ5dbC4WHgB5tPBNY6PYY5y5BUVWn7TpcDrkj3bBJqu3Wz7Jg8qEdYMrdhyaKFUti4KHbFLx4tmqnB",
  "key44": "5EDU3MEBJPGPLn73BaguLWi23vqT22rDrTb6vhuKMY6hnaWdJRp15ymWuN1HB3iiY6vFZxmFuVbbqykuYTfddB1h",
  "key45": "64xfygTkc88Fq7g582ffHgvbnoxLrWUFFr5w4f2wrKzcfPtTG9xkZWUwoxxZwYRf7UaJhBqDTCosdjM59PSRrA5F"
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
