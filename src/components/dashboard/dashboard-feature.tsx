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
    "3uRgcTdPEmNR4bvxqAFBmPGcKym4jHhrE2cYMv8Zb8w7bPqknqTQNmT2Le4wkcJYo1ZRStazwcJFa9Sdv5q5MTkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJA3byiTSRd658ygDR9bJAsS67ah1q4c4kKzt94g6dZJWTtcG7Pk9JZMxVdTi895fWVVLw4ZTzgeRRVVackV1gw",
  "key1": "QoiUwaX23APBRKF2BibcNkmqJX4mqAdSBbbQrxrCWjVFCkbUMSkoGkNN3ppSbaHJabWvYpNjBa69KCFYiHfLDzt",
  "key2": "3gX4jGZPKkAt2JLefwpyMFHuSw84u3vy31Vc9yAXvKJM6ZaWmKjfBNQJ71HDd8ytKsT5Sapqov8761UgFvA5XqdK",
  "key3": "3EjXjPid4fT9AAEwYkueCDgcratRxzpPusUezfosCf8KQWJfBDSuSwUZxePmhN6yQkQxz9b1TCKEyBTEgnMTMxeY",
  "key4": "4Thk5KefHhfuvoyWY3g2vztNFg2TVzAczM69wx3zhc5UirZPy9kLoUmL757qAyeyHuUhRSioZ39Qhsm9t8hKN4tx",
  "key5": "5HuWHLyvWy1PPhb4udoPfuZnskSUUnPWZ1YchXi95qsXPiYvCp7nUct4xCAXVeJrHTVTQCEcWtysXVpF7FceK17F",
  "key6": "4cJAEGqiLJBU7uFMe598crf5gkv7Zr8SiFoR881EabgS8mWjgaDvn7kYstW5ZJqESUVQGm8Y5sG4dLEWaSaSMcRo",
  "key7": "5koNpHTs945jqWmHNbiQXwmtugsTQWgyQciSYAwWrEaSMQYNSrxp1k8TY5s2uTA3xSEvXs9j8z2xnYcofR9mtyR5",
  "key8": "5f5vPyfuk5jbzrfykkzM3VbvwU9MaWRBKaBTPoacCSkTYuvEdDQaJ6vTupabK3FRtfurB1SRZuEdYXKRVKUdztUB",
  "key9": "2SpZ8XG8XY2GZReR9BaUDztGpCAPmbU4p68suc28XA4AU145xx7csKydEmhWDJzvndAQdvUiUtyBBHdggy1Wfwaq",
  "key10": "5Pn26nojtHqkgbFDyQXUVVgyZVDZoiXKUkrPgU2X4d4ZLLBR7pCfs735YsrEeqDCJdB8wsjjz2U2Vr2MyV9Azn4j",
  "key11": "58FVhUjpHGVcQeHwpoNeQMUAZwUqtb7rmZxMWtJwgi2wWnjxwcnRpVV2wXDTizx1xFEUnc9XQTpQCLCc695zdhGj",
  "key12": "4mnDPDfhT9XMxWm8CLNMCMo2GancUN7B1HWRFFtUGg7YSzztgAJ1PHKvQWxNmjqbCzGfkaiNQEUrQEHxjBRApTwo",
  "key13": "64GQkUNr44n2spsKqp2C9Lo9tS4u7onJRYEU9xAdbQNH6WufZewMx1rbzfaeD9sMMFZnmDmLM84NYzrseNevkZ6d",
  "key14": "4pHuNwZR6v5R4MyAVjVisGM8ghZsBfTtxJXbu99nZsFbPAYmRHCcZhHmnJLP7JLpJZo6fdB3kXXmjbEho6VynxBv",
  "key15": "GyRY5dLVdfXNu29zAG9uJ61FxbE4YRBTcBzWh19eATKU9156GgMaNiicNGkKMGbSDo4G3TfWXRFmhB155dSdEQM",
  "key16": "4U1mSaSNNzjT8tP8BhPtPWqwaoLAqwxCimMgFESaUmAkkRqMcyTjBS7dWDgcCX5HPicq68WQjGuLcdxE4ZgSqQt1",
  "key17": "3cUMfj5Vd7C3qrVra4t7zUAAPv7Cqn9hzY3a5boksC5x1X8vERw3ecLzFrrWMtSG1PJDxAhkSWDYtQvhJZ461okD",
  "key18": "3UTBs3rtW1tRw2QSd8C3BQ6TEouBhCgqqtPkBrx9mFebMoyZxCsrGH81QzFsf1t7wcTiqCAraCDJxfEJFuhD5R7g",
  "key19": "3pnHBFy6WcgyFexSm5tw4khCP2WvmUFhbyPenAqqCnYygFbLQZkML4Hvpo4NTNLADo67hrhP3HEo5ATSuwXykkWA",
  "key20": "2gast2gwchzMSmCewS5HCfYupyHnkwTshzPdVPz3ovUtuHp5ThmRn1dUUaF3kwhPBysDq4hTTt9eF1jrvjb4fNoJ",
  "key21": "4GgDyqdre2tkJyxc93i6r3zozM9aVmJzBbVfhyuWqPqxJDLXBJVc2MzGApzkUjcRQFr5bWq2PVTDAgpyo1bKwQHM",
  "key22": "5kHfdpdvxBoJypn7Q4jzry4HBYDGYJfG6WzPaLZh7J1YqNENhYW5BcYxydELMoPemryzsLRCx5DywvdcZvBQFUEG",
  "key23": "5YQeGB5Up9uzNQb4gdqo78psE7yPNE1T93k7guwgGiYyCdwhPeZMF9At3tWeo3chPkNc2isHJK9FnAYjXSSGRR9u",
  "key24": "4Dh6xzJCutVcRBd4E4MfbL6PJBUD6uLwSyDgu7ad72cQKVgEMjnj5gJ2xedKFsTNZMA1spAyEqQqPbJYT3FxtAqi",
  "key25": "5CnXPYapj1oApa3oqByJEtPEWm461epWugnePMpawqw41scLBN1gUDS1311E5GjuYPgvWFrAQFykAmRdgk32eo6m",
  "key26": "4ziDtpkCYuS4wapSrjrHKWMYT5zx7iwcXk49jq4PuStGCEApHWX6YYbSgvyZTpuArJDFdtf2fWQ679KJ3vyasD6y",
  "key27": "2KBxyuqNs2yDCQXKmmd5GFBqePkNZoZ9KzqdJtZef1RELBkWcH6Ufo1GmBmMz2BRGVfTd4uvm79Wdg6buWFA6pE5",
  "key28": "4rtrmAokAGHFst2dsjbXRpDvVMucKNsmLuda6EBtWS6AohBnG5mXGaKZp79SqDSUfxcDg6ZEKuZcqrtVh4Jshj7P",
  "key29": "RwujRo9zJDumRoQn2a5HNBJmziooexLUKXZh4Ti7HLhBjtX8niDi1pKxebMkG5abKx6xB31iSKDNRLRTPN6VbcV",
  "key30": "Nfm7C6g8iYLt2QGvYep5B6kdBHpgZb2ehnTdPnTqrhyCLE6P9fAYbWKuPnQbuJTnJYHaXyxAPYekrpsYHJVECw9",
  "key31": "5WvkTC8t9yPmRZqxtYzjzSydR9FoyoKHbWf8o7QhM3Q3FR31oyVFg5Zbgvj9SqKvX7rPELNS8EpeLkjCECjNZVRd",
  "key32": "kzkYyzfSpP6kmtsjbRZh4s6wfdRF2gw3hEKiBxsdUpkDV1Ej6ByyasHpvkZJ5mZt2BeCVGEv89KYgNKrCccFFSB",
  "key33": "5wQ7UTFHMbgmCArTHS84yuxawoLZTQVoYxgG2rCmKSXECZxdXG4HAdn1jWwAbpERbSKmnnh9sQEYRrPnwbrULXDw",
  "key34": "5AA6RgeBhZwyNPxsg9nyNtxBHBurUJw5k6dw21gnBYFfS63CvHEXUK8bc6uzn2eHqmsrqr4bqKN7HazP6sXpQ8qQ",
  "key35": "4rhTgpVVSSvdHeLV5SMeG1GtuXTYXPyS74o8GKDPCdRrABREe5mMfLsottMxhqURLWFeRQ7bP6WWbrc2Sn9PBL9u",
  "key36": "3ozHevP6bsdVhcH78CPxgsDaCDrkpUvGbFjWg7rxVZjPxfpt6tMEg3T6VHsa1DuqCCtWxsvPaRko2VyNXbbxKKeR",
  "key37": "4XXnV9RErhhS4sUkcWHfh53EFdh56W1EB5am8Sw6Xt6YN5FoqumYyQgjbf6j6w3PeZHJETv29gTeh5GQnFSfcn5J",
  "key38": "3wko1W5HLFz96E1MkSK3WxoZcSkDTDTPTbPQir9MtgQPtEYpngkP9a6WtRrmCT4B1J2etKg8MRqTvmbnRJPzEM5y",
  "key39": "Jk7w6WUewgDaoND8ocySjqViDkbHP9jwRENt9k1D1gZsoWWMBYDgjG6wMtY5zyVxCz8FmqpJpY8utnPqwYhwoqf",
  "key40": "5x1zE3zeB5fuKJ9o5Q4c9V3iD2UrHBWPsxKTVGx156TvCYGkjCFxwHo8WGJtEm6pLiuPrUrhC9FqfECLx6jzrzy8"
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
