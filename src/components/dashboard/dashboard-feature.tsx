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
    "611EyMNxQK658B2nGU13hWvZ2roPMbfNB2yAS4wiVzqmkfTCGkpYPU2ZBSfpcNupKPCYhLs7JR5i7QwMHcftAMFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vq8VrJeqXjrhCexvDbwc38vSpUHHUm3P8ij59ocnZZwNE3BCT3hVFG8167j7k2VsXXpATULhimpMx7U6ut57BLT",
  "key1": "QQXBi3NG3anMipySnstXNsbwar8K3sw8zwkeWstMPwjiFgqjqKzwfrznR5yxDbkdWN1qREWNV5oX8CgG661VDz7",
  "key2": "2b3uEnNuiGp3bQVGzBsC9Rb86wac3nM6kqfc9AGGX3HtLMeyRhwXwhF5X1dvppt67ZFxEKeJZan3YCaCC2WXsYQ6",
  "key3": "5bFcQ1fmZhsdb6fNkNrPrGeLymgWeLpWCLTvkTmtcKJZdVCi7b3j4y55yUXehtj1VPvCo8VNh5paDALurvUwfqWE",
  "key4": "UaKrYd2r3BpR9PihihxGhadKuvELgjxewX6gt7SpySJcseS7E7dYvqXUakopvebNaNZP56nFz5S96DNkL4Rb8Fi",
  "key5": "5LWtBHhTSvp9kHZJxHsNvhPrqk8Wbjp4EgNxBiRZZ5EmzFe3uWV36ihxUcqiYwsxN81XkWFwWf8ve2QXMngHDqw9",
  "key6": "4zx4FVnPsZ5bUyS7jawcwABt2oZF1UhHU3MFkUvU3R8czL7142az6e3PpuWocVCofhu8YDcRN8wBKkcUHSErpmtZ",
  "key7": "4WtJeSViaPMwzfDMaSdFbsxHMAE1dUYPi63sqJatTPPQUZAsSiTEJMJarJioPHWvuqZJ13cqV3wNV6eZL6q7rEAz",
  "key8": "3h3wA3jCNQm7zMURXWQGzcAvSfZkdGJ4C2gF1cps2Xi2GCKFyGw6e8uTs8KfpPGE1NvN3MDFHpHmDC6Qfb93nWfK",
  "key9": "3ThgDVgXvLvY8u1z9z4NS8uGBTt3ag92YspFyFGDY8MSfW3KYuY7rokvDCZckwC852ksf5J1rZzXF4zQRNGh6jgG",
  "key10": "4QLRRjME2NVa4FWqcmW85rNqaUrE4tQNRUwtM8DwfKoQ5LF7uZ5sGjs4bWSQTotg3zAxJiB9d5YqX5yAFjwwrCW5",
  "key11": "4scFA1DxjUHV1EpJNcPxiQMLovHGLnjou6xeoeaA9S1SrZpw5JzesBPFwXP5Bc1QkiPFiGxnCrsXc1oeqjzRKG85",
  "key12": "BMJkPHDWFk3LrkTVKpixaT31gsPBHqgKPGDkrrqKRQaLxSMzH3z39YhoQaXwkHkikBjSnmyCfgCgw6MKmBk86ZS",
  "key13": "5JDH6Pr4ySeXiV89144cvdyy15ZfR2E1n8GPp5Zw8cd38YT9bgw2zB1PbiXUTMmgoHkUT3Zg8u1dQ7ta8Tnb6jSN",
  "key14": "3si75LTincvnswHReTzoCDqaiv7y88qtQUtRppPYbCdYZuFavUzYzAFufshoNrzZDxbCdns5fJSdsP5ukfivpE1W",
  "key15": "LHcm6fYkUjiQSToeTbNCuy3WMmK8RfJPZp96KdLRM5m8ovZXfGhggBGz4La4GcZRLdYNsgQ7BSWH2CxGYkeywWf",
  "key16": "4N3nbdbF9ApRejBqGxsma5PehPsMAoMwZhMtR9KJrpwwPaFmo7Fae9CXRrLPNp35DeP2h65SMMJYT3VCdsmBwM2m",
  "key17": "3EpVrfYMj43trsgfq2i4dGEu2Ra5td5wuUnq15pgUc6C2bNa1R1KdvUb4f9MsYxpJwcM2FMwV74MQhiuypQQHxgk",
  "key18": "3xtd9R8ujt1L4yC3SjYmrWWyrkMsfD6dShEaNB69WUpwhxgB4ApKweoa28K8gSKtwnTASQVeLKDX4ADiyoFobjtW",
  "key19": "2iHuq89nyZASLxkRBGwctpjmai6KgSE41vqnUpPZ1uv3Q9KwkbYwn4AVK8EaYJKZxoVR3hXnXcANRD2bQPRNEuxu",
  "key20": "5oELqpaTmNTKjyAZPL8b1njyp8PqxpD6X4mHF8mmfMWfDsWib31Q7Ef5n7aDpMXWhN2MVAVefYwrg5wU1q3oNth6",
  "key21": "4VU2LjjVxZwpPEbEbm9FNmSdo2G9DNGMRxGJbmsWCBCDKNUv1GZGsWGPfacjDFH9TKmSMUirGM1mdbQrjJYo3bjE",
  "key22": "5mrwPNfnKAyDoKCbNfTaAm8tE2x3UCMMB86wLytpUPuFmY7fSTVgrSTTGxZbUbH5zvv2QMXips58BCMgKHH85UWG",
  "key23": "4kSaZ7zy2CMEPLu1p4vDiz2pLxxLVsrJYctYAvMUxZ8y6QVzVUfUu4drh2aXZTuGcKokPFN4kG3W3FMroijvcxtn",
  "key24": "5J2bew5c4AtVFaPZjrL7GgxLZQCdJFt2rvT9YhELnRU638Jfz7Yju8Wv4VwViJ8GcSyBN9pr83pwM63XvkbopR4V",
  "key25": "3jQUR48D7BkzExGc6aw25naDtYTWhJkW52Dsvq9dMXU2V7kkmrAD4vHvTWXbgrTVEFMgRjZGmML8WtTx7vbf49PV",
  "key26": "4vfVu8vsgYPTasFD3Ay8aVpzdNFHHhCDjTvhfMD9nWywqZKsAtpw5UzuYxSKavib3RUuRvB7YSZL3jHBfXKEkbDJ",
  "key27": "44y61KqR4LG95odaG61KKJoDcEJCpgepQYT5tYiAEVou3foXaqJdNPRbgF6tJ5m37xpQDMKnDat3xCaiGpFGFeTz",
  "key28": "4hX7R4bpbdn9GQoDp4jsteL5qEZmnWegdqTmEVYF3hLEDxGM1Ca2z2SXiQ8ZjgsncBMa6WfmhPYKAvokEas6F5i2",
  "key29": "5sEKrRwLCoSwGWaBED8AViQet8Y2Vs4BzXFhfKhGjvirAZEDbZPt9FDmNAhJ7cJ9EvzfvnNp9ySyDwR1i4J1P84v",
  "key30": "3VghAijmy6Ej2x8YEdnqKWiXuBMhwvehyqabxTQqrA4omhUCc3NLAK4raMdwKU7onFFayH4WVpw9P6FUx4YiDwh5",
  "key31": "4yWHB74VWt57wMDzcibLM7dqPHR2RGQsYgvLjopgX2yXdDEaEuy1guPbwF7CF8qiKnnKrNZbrnBH4uJsbAceYDfs",
  "key32": "2oMfW1TmNHqS7RDxZwEbktTrcZz4EqL7kZZAxkNQbYG4sEpJvaLRcJyfjZWND8WrpR6BQJQU6Km7fsjuCd7kYFw9",
  "key33": "2N6vqCMgBRuJDcvHreH77YjQYWMRyu2wBBNhZQFDpUngxFVhnHoyfH3wRknciz89xHHyB1k8fGJz3Gi4i7dvbRRs",
  "key34": "4cE3HGbXXfQ1xvtSrCMHggCUu5qK599a3L4FuYKBSaNqcyukrGb3bfo41nbS8SGu7y3Xmk4BUDgbmNmCEjkUzniY",
  "key35": "5KPxfWNSJYhx3orKzNmMfq7wDpGPcKf5j13pGgEpPgXbkxa2G56w54RogwcnbhxGHQgFSy96GYQ2kbfqzHA3itwf",
  "key36": "2RLSweNG5t88SqnUF2Cn79tLXnr1yMvGnXHLgPaYErTMoZt6ArpETSRymMuuNTRNRPSiEeSZMgyVkGhFpsAboucN",
  "key37": "3dXAicc24oXr9FJQQiFmibFM1paAnycejuwJ2VH7YRuj9YbsF79LzLi7a1Son1vzXbDbSoZbiBd5rp5TdiBLWbLE",
  "key38": "4qobYCLBud9Qwa69SpKiATKteggDaKRaugcJzrGEsX1jhHG9UjQ31qyT4BuJar7xa6eHrpCLc1pTtg5d4nYfjNyp",
  "key39": "5QcbPv5hr7aqBs1nfGwHHHwD2gdzVcvsU7WdhTp1X69Wb3AdHCDGVZxFvANarxzh2gDwTSkAFr9oC9fHCpy2CpHN"
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
