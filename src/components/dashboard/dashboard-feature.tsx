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
    "4JN6g27FJCdkMRUh8jZJVaggMkuo42qJ5KZSAwGwV4MKhhyhg3ngMZqDNn9TYRk66tF8T6KkCWzeccCH9ERVU2Ds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zojWfGJshVjbECDWyATMPMbMEjGfmJE9Etc2W9KzAuD37wer2XT1iBPwSBwhVrPA2SR6CKs9FHsUDnq2NwvdsZt",
  "key1": "3pvPBk9ECpkmKESBbpVvHZk9JWddoSvxxyqvCJFdJgnNVbfYHvogGutY9hfjNHiepUU3W8fN9HmPrpY2zd3YnqzA",
  "key2": "4TUwP9uCVCSzfpk4tM9hx4GPUYWBhatA4H5onWd2vytq1MM7Z3tD3AwYQ95KHB32XLAvv5txFU3anJzsMwfo6Nh1",
  "key3": "5im7j5YNp12LbBzAvRKFtQPFxbudU9CKqSFfMq9yUjCsgkyQYCAeoP5DtX1rrpMZRHX6uNzM2RB1T8oRMKNkFhWg",
  "key4": "2KmzhxJtj4sZqvSo1wLekoj7deETWmTm8YSWMJG8Td1zy8rEi7f1DQLPJkmUG7vGDKBfubAB2BZYxmutdLsAKwn5",
  "key5": "638N2wHhgwnYhyZaqFkmimA7fR1VnJor2X1eVXWaqVufhmfcFChn1PMs94Lmw699PPRVviViTym16F7TCrKeCRyc",
  "key6": "MX7iEpnc9da7r9LLkmXjV8HSdrYh5PiZPJGi9TVxGrTXDWycsCWQwGxQ6FSgoaXt6Gdg4fzVPCKxSpPzHGErT8a",
  "key7": "4E2cY22fTVC49u1LbHTVrEaYcouAUp6aoYMRbuPCCtzKgSsgfyuXcF9bpi6qSvvEk13X5tEeCxUMf8rGzbjZ5tVP",
  "key8": "4ZYWoJAfL9fAAQy2xVSTimxcBmrRKeVhPUyd2Eo9Xj3bSRf72ZssZspAtQVZ6foUaij8igqSNn9AgcT4dJS6Fhxw",
  "key9": "3HGgxBp3fSRBVzKFdb8qtUy6fUYhUyc7oKM3V7TGNPWFjh95YFi68YpqRnhpCCFAZahrGvL5Z6WDT34Cqzv6XutY",
  "key10": "9eA5vqdMEQzq82phxYDBYfLhCHwuGj1cTkhT7VdX1Q993vfswBVc4Q2vmMG3BwfjRKY614s4i8F4utAjJCWRyGD",
  "key11": "vjWNP9o5mh3f3aaWJenJJKXAiQUHLCPGtMpDWb9Sj7VL3SfWaNWH5RAv4PwNP2VEMdX4KzGgj3xqPDztwnzHJEP",
  "key12": "4Yez4YJFM6MJdbTWB5bvQJQBHAxkqF2Pe5RbPaJSNFJygkceyGm5g4DhjKc5hspCy1TKMpayADTiYCNY7YxFZe6t",
  "key13": "3p9V3scNiT38ng7NJg1L4xcwPrsFJGJUsBx7vs72RmZbvzpMaXQxPzna43ZtvS3hNnteFFQgN192VoH1r1wjJWyQ",
  "key14": "4uGWsYmozXr7tAicgufv8w9UdmKnvCtT6RkKz3BLSSzeNYDEpj6YuRHmNVc7rAVAekmKsH8FggsqxKdre15MRHPu",
  "key15": "SF72DWY8MTbfJ3PQxqps7tqrNnrFPMSHZv1iDmrwfXWjkgZ6hf1RT3ZBf2qmDUdehUxpWhQm7sYrTjtKxJd4ZsH",
  "key16": "32WVYjNkPbZw8tHocHF51v7QciCfkdL2gsughWrqpWMZGA2HRuYQwb12Ex1t9R1U7UtMifKTHSAPJh3SBVm4eFwe",
  "key17": "4BauxZB9JBCz7CzR8izap3arB1zwAT1QBK7zci5A9NNxNcE4Zv2n3V1nMxHqTbSXKNNge6xFfjRkwXkfWnMNgZiD",
  "key18": "2xVGkwQezASve8rqJirZVPbZBb82S7tmGt5kpx97pP3SKu6mDc4kAjT2jg3rp8UbFyPc4ESQBtVf56LUKy5Qj6W8",
  "key19": "3FmDcLmY7mm4KFSKfBxXarMJn58PTJBgCw5GZfrpmYa7adAWQ9RxXeqfnTje8qV2fPgiEppkRtQYrDEyxdjaa7fG",
  "key20": "38zDo4Fb3DryXbqCySGUht9mNxYzumNdZTJhqU9RnZc8BBhQPHEcK189ioxSHP27obqaJP7yxgFdFQsDW1YLqMcN",
  "key21": "5kBAirXntUtKPzpaYyqfXUyzMACNR9inUB2GDMiRyrAkVxronXuqbcYtjcGFHrot827AT2mJVRZZyHw4vyBs4hKF",
  "key22": "2oLZ6Vtfw41x2L2zhDpxmRG7PjgkbqKbkiZ5kSfqgok2QzyBzSrBugsRGtVq2pUQVgQ627tyPp2W6bFruq5ZBStk",
  "key23": "5yTMQSLxjDNMZoDucrHYVYB3M4u6424pscMaZGxVSzDs5hwBE1v7KHcn3285pTH9ZGCmJ6pr2CkTvXKcRWZS1F5B",
  "key24": "2o5hGqCZ7P5TnLyGC7SXcuC1a8iRD9XbtgCs9Eo8mhdFxeEqMR4jTTEo81fphm1U8siP65JAXV8UNDBVpKk4UfdR",
  "key25": "g46mgTzJKQd7g7CUsCASjx5HSQguhonpxPtkLbLS4eQrDLs55GP7QLKXQiNqfekSc7Dbo3PYGwnK28atUoCzxPE",
  "key26": "3gEbMuDXYzKAa7Sg3jHGv43F3P2bYcGcfzGhyUJBaQC2TNPPy5hEox8rKHKM4GEEuoWLRPMaCT14Tsbq2rVUXj2r",
  "key27": "2PcikZwYybnhxsN4wbD7WDxKCd4bWPi1k9gkaVvDGQQYzvCQ7KgLRWse2W6sr3A7hMetUGjuENP79zX8fLfFgyyB",
  "key28": "iUTpor6BSfRVyxknxxSkUrbTKrvVu8QvcHRK7vf3muBLcXM1g6CGNAaUjHNkoLc3GxTcHQiD1YGKyBofBFGrom6",
  "key29": "2VSpKZ9sfyJDFU2Zr421UHYvuEypjp1hySvwU5yGyPasam4oLrJSAjBndTR2JHXC3fW7qGKZBHTTdDg4vdbuAJsq",
  "key30": "4KB4XyBcnaxbdSGTJt4TVyfp2Qgq5YHfbSQ2J8fsKfSgN4b94pEWf4wvakNVXnPmPMtTgKcEuMVbpXHrPxgtSCcP",
  "key31": "ajFe67b8sVQCG9H8MfJachdqKo92si7Y1sqzMwiYfBhHxL899Sm8uWEEqJ6KdMnuGd366rffc2KNbiC88UvQRVN",
  "key32": "4D3dXyUus5S1USsvc1L9UqTzX2fhUnZiqb37HQu15MvUVJXVjX28duYrvoWb33xfR5SjT6qFV25aD92A9swpjn28",
  "key33": "2hk71J7YTH4memXYEdRoG2TfnSP1zxYri89bzKUMuSkoGqTZV46Riy4jte2jZm8TMi56STH4KjPTrvNUcrn6imN6",
  "key34": "3hfdRcXdSucpYAjdezt1YvR5txF6aG7k5NqjMUeHci4Axfk88sEzAGrKfeAp2YomhwUpVcGWFWDfA4BYTzHpvJKp",
  "key35": "KVDGcDzvxHWscg56wNQe2pzdNSnefssgpM24UANXqMSobnJrHUyj9CcgekTucVXGYWGzUNVYf3Vnb4MHjkNnde7",
  "key36": "L5XhKVeSrs3pFHLRfWQtXGMVat799jWT5uibNEjWP6MyorvaNNMiKjfza7rS7peJdMGh4LEgCPUyELPXqx6tQmU",
  "key37": "5FB6kiRud8mYKxYPjp24MthbRKQ36xQn1R5eAh9WDMVMSFj8j7Yp4ptf1JEvJLiSmr895u8okMcn188wHGYnof8r",
  "key38": "Zmwn6cp6Mje7PtNJ3rud63w1Ana8FFRGQSqKFY7zRek68yWTHdYAFvSRfZnPUrXuSYYi6ufUq9YUSJquwpwdAcs"
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
