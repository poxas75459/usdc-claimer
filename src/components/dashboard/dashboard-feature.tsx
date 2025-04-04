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
    "DVCs8mWsNZKUM2LFR7wFscqscoRyBRc44V1c5NEmigWjr4r5sKJ4oFzqTnv3cDThBkz9WMzjz77DJ3WQutCdepY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAyJQA8c5sdJetxTz8yjdyEfHx6QKkYQhppvBjRhJgwYwRx4mwu6BDJZBqeiayXZYaB11Fpqt6HSVDSGrdeJFk1",
  "key1": "4wBZBjYPeGySLSNWMLmJzAkMZjuZmxKwjaRhCCeqHXFsYKEus4kBra16iDPr7dztFSHEwv2ttEbvZMfC3gWkrbtS",
  "key2": "2zMKNWyLsaqGf8p1f4CxRjduoHrDU8LS8FH1vBEFg2koibqu4N4CUX2MEqaTXcHzRZg9PciMAnsLrpCKjVd99o2E",
  "key3": "5qrVLcEoPWKYjAavsgHPHTofphuHbnauXxSCQHxHB85ZaNvosw9ZTGfud9yFVR5oaF8ZgyYNVzwieqSrcrCrGGVx",
  "key4": "Y1wisKo9YkRmL2fqRscWx9Mx5T3LMCnCZCVFoBQF63DEPK9vg3dMU18vE4RbYeUEzobowx7hcU7i6MZgMwZPa2F",
  "key5": "Hd1JcTGEsTUKX38XNHZJZnC6X939mWrE1pb79yYqim1WUAwjW53qH2rEYrYHuBorvfricndbCZNhJ4ro9n8CZT4",
  "key6": "2gnax2wTzX2qSbpBUheBDCKVHg78BSyhEkH9tmQmqp1cw49RSyLtaYFy3eQHF85SoJcjgCR5i8s9Nax4EAmveGf3",
  "key7": "4jL3e7tzHCzSuYx2QkAuu2xHjgKsCKasd2kUbZaG6P8MkN5w2Ru3SMzYxi3mFnhFSstj83DXXnYZTCN6N5gavLEy",
  "key8": "4oNp5THDDTUqxfWw2aQxZM7MYqcfpw8DftzuCqN3VBjcrJe49zeJh12iCEYifMhYdUfzQGYg7tApi8FPBhzYxjbm",
  "key9": "2Mpi9qA7XLBnjEn1hL2vFyTGSfJL5fGqKRHzzEqMpAPbmsZrhNfHfBxvoBCg19VXGc5hJ5F6bLgoKHccsf5ufpuA",
  "key10": "5x6p4RvcAQ7W23PeoG1vLvfdw9xCnuar2E3JkYY2ZJAtXN8xqU7rRVEhRoN4kQZW3GV8Jk5oxBBvh2tFH5CFMN69",
  "key11": "2CJoFznnEf76g55rq7x4HejffRjCZpAMmouHCDwBx6tpJugJtC3EA9e842ne7RpGyeRE6azWunV1SUQdvhtqAkW9",
  "key12": "2XScUN82akgSAgdB4PVxSVcRwBMv14YgTdkSy1qh6o1uYdzh1JqDcnfQyQTFHHF1vrk6u9s6Jj3Z6ToKQwMiDZbj",
  "key13": "4yswukdVaCTsxKTrN1eacsWjdDLQ8juu56cbqH5csfYbM7tNMuq3wsmfVLHspHKDAT3R5oiWW19kqJUbDrrbnx3e",
  "key14": "3ejKdYjDycH6SaqYn4Q3qfWYxGtPBmY6jT321gfVB3Q114og6u5NpvimSBEecwAoFDWsNS1W4jJQ8MaWuNuaHLW6",
  "key15": "2hDVbrCvPBK95e2xjDCSVStCFH1LuMrxkcBRwZ4FSbPmWMP2Bdo3QmHdu6ZTYepkBtiu13yYzmxWrEnqS6nzEjkg",
  "key16": "32Pam7sCZw6ieeJvfJnA54Wjdx8J2AEYmRYTHzC1MJgU1s4rqzjPJcbTno8YS4oaDEN21YTkDq4hkMWaykqNSPjR",
  "key17": "3yg2BSfspg5p1bjwz1fbYk5seRPLE9aiFDVPPMnP3LGoSC5q1FthT5qc5qTVwXLzfHRJbNixtgLnbFNMb3pV7sUf",
  "key18": "3YnRp5hebRTeeTp5sowm6xBEZZsxWXcVzp4ndmKTJyuVyXfUk87bgHjXxqch77ioeV2mM21dqDsixVCSazFNxaEP",
  "key19": "CmfCdE6176GieLrXGmLHZmQvnESJCjTBWMVequABZ8TNhMVziseApivJnFu2GUkDgGNn9aPQiSimya3SBz3Qbif",
  "key20": "3esQ1DFa7PHV3ZF9Rz8mHLH5zPMwAYDy2Y1264Kdbb71ixRpDCrfw5ccDvstvJ5had2bRTMdLtEY8YNGr3ak6BNw",
  "key21": "3Rf3L9XVB2Em6N7RnHtsVwMEjPFJGjicRo9u5R5r6jPtNSLd3eBgYhJPAHexeEmmgyX3bUAzovsKNgdLnu1beM9C",
  "key22": "pNQ2mFdHsc1HiJyit6NL2EJyhy8d8kDcY2mHXXMb5ZZDififV3hDuXsQY1ewZidRYCLWQ4MG2WSNUfGdJfqrr67",
  "key23": "2HciFKPkYgs8RecyFLW3DxiaypbNCvMsGJDyuM6iW6xeokGzKbGp7t3KhxjivQDrdyhHAXKuZ1rpapmLjMFrUxnD",
  "key24": "gH8wtTDGjiHYLHLsGxY9o1s5FsrNo96UL6hTDQs1Cr7Fv3ksy6PJ55r6DTRZKGsge7FiTBvLWjVBGBVcB9UacT2",
  "key25": "2LXxbjzeE3ZXVXN2WHoKMkr6TjjKLAYqK975y1hq26fm9TmsSe1fqMBJ56zH9SQF26mVSmciPBeEmajqK9b1CxxU",
  "key26": "3FT5u5zV34PjX47kmxLJUTJiDbb7cdrNF9aX9jJTk4h8TgMDbhgVmATy4oVKw3CJcv5yLwSiUufH2tMdqXnK5S8N",
  "key27": "4A7R1cyJfQHmfemr2gUPBpdP3rSpw6u23ik7sJHrEuQggwxrV4jMvsJRJaMWpcPDPmZT1YKcZuSwrkRm3unF6hvD",
  "key28": "4QYZ9qScvM9eekrGsF7HqGrWvo2vKbRZTm7PbXLTxrxPqHyF1Ldk5NSgb2vWoQpUbsQdenWQRTJsLeWnWECddGAq",
  "key29": "7hSL4mmRdQnZjmKSBaQi9qsQPmSxsffa8pUchLh9p7jSQ3fUUtMzjyQtriA8mfGTfLZ3oLCLjttcSDsYedNHQd3",
  "key30": "2xk85ayuWQCmQFnqD4WqFvXq4DT5vBtDtJTEYAFyZaXVn6ZXiN9LrvJd2wJ5yKMqMxvUeQEm5MLFCsgDnyU9C7hQ",
  "key31": "4D5vLauqoShKoF7tMVCwEcsRhEV6HYxzkGBzoAv3NaddvCykCsdCMJd6EMP8xcbS2bo5FNeeb8J8oGPZzWKTCCda",
  "key32": "3zfbkdfFPTaRnSDGNHvJRx7mQYrSc472Hmbp9uMdxvZVRKUSWRG2ryjREEUj8EzamXirJk9RsFKQyG98mR5SNKj2",
  "key33": "5qE74EwgZ5Q2HTcUxkAe6L3mFSX282buLTVu9TeEswnBwfEpinSLFMhkKjm8xmbRYHFQZfZw2SJ3yfEQHg2v3jBY",
  "key34": "d6RnjZ7RRNTLiESrwGEZpz2uFM5Uy1V6kLyDKkWJSCYxq7SNCKW3gGQwATwk1jETBs5dkEbXFhjcnJgqeDfwhJV",
  "key35": "4FQKde3qq4hCRKcbeCMfo2AVJyFjaQNnvY8Zp3HaXij42pWqBEmygCXFBXGbNkmWyPJa6V844ESRLEMeMrGvt52W",
  "key36": "4DpXH9DNTrmhRey4VmWXpr2weSsefzVXPxKTnfwVpDTH43gb59VswEEuyhTVdaJdJaq2banfiUBWEUXTWJitznwt",
  "key37": "4G8oVnhyKzVNPLAWf6cAGjfKfCZyYwvyfxmzz7JiknuJjuwBcKb7F7ZkpDJoSPxV3kReR8dKMa7ShqppeSyXyZL4",
  "key38": "5nNfNiQDUuGE3QkWYYwztDd18wDYVJT7V7fmik5AqUpWe6s3Zn3eqXhjkVYBMUHcgCcgn11aV4gWjVfZD92biZVG",
  "key39": "3ATeQmXwq7L2T53ipNWd8qaNkaHUcw2otwU3X82vYNMpM3YB8Ytrby1FE5kgwgTGKF4YhsTE5AaZUm26FeqnjDaQ",
  "key40": "3YiTjxfdoXQrv2yzXqzhYuRJ8g2waoGopfNsE6LSTjRSbFLEB4akKiyBEnCWeUmp43jTJc1jcsfkg4PHvS39RyxB"
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
