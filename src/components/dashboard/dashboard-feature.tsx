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
    "xd9hNAxDXLz8j2mnRhcvpmEgceeP7Dqvd7aLYiTyj2AXPZxbkkKyH1oeu9ndQ9AJnTrYFB3ce9JY3fVF3qjPh4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfJuyws6keHYbKGdNdxVp5PcA6vDcm8G3Voatgn16WfCzfr4K45J2Dy9UU5ShRBTZuvAuGpTz5sdDo8HPD1CdNo",
  "key1": "53h9Uj7FwGzAS6X8zq3fVhKHzeucbK1pgVMPDSoZrgQdZ2SFSMSQVohmtKauqsskAAfnaFxgxoEDVuURcMVtVrk2",
  "key2": "tN6JDn4m84SJJ4iMsk9LyioU1f4BjJDPYYo7vuChca5qnt5mcmkPx2zQK6imo5etiB5sdb47UCUYr9XehB7B1xZ",
  "key3": "5taGda7PFdbcfKesLx3bcinu7naNg2goPd2hgdCYPmfrby3L1iikzJZK9b3Nqntwq1xaFFRmH2obYiKh8RunQph3",
  "key4": "4YTKYEsxxoMWTXDDm21Qmcc2VhLBZXZfoBgRZnkwJzkr1BcjrgLCSDarAXqBrNQxfBaQ7mBYexnmFWbuDX4JDZNF",
  "key5": "45MxS2qu2Z1kQytcGg94JYbS5f3D7WzRMfbMRdZJ4MNqkZ8x1sxxJEtEGvU3WBxQkVFzU9w5NSNR71xQLsWvH6cn",
  "key6": "4kLcSQciVxnNZBFrojen4zvFnQPDcxbeoYTnMfkyPmBfogRUGjGTXvLGXuNBPGJop16gt8ankbTSXFBvQmfTHu7k",
  "key7": "2rPuTCauMaXzs2zxsytenta9zW776SqKQkE6wBEb6VuaazPPaoKkHVHQ4bVSeyXt3XYs1dqk33ubBspzHmkbThmK",
  "key8": "4LEL93WfukMRKs4NvZPT61XtdJNqPn3hKFMz3EyC2RV1F9NnAMJRDAa2RVshuvxY35ibbbVGnxkYJFjY9uc4eZrB",
  "key9": "fxY2kjjBWteMvYa1JsmAbpvXf6Wgd8yeLHKT9FbHbZYYkVPUQbzNSByP61oF2xYJqc3zU7efXM5gWAYDMnApLSN",
  "key10": "3fCzUpXvgHBGTpYBw92VKMvdXFWQ5aNz18kjcabMfY9Sef8n995K4991PZfumj1b5xyARshyrEAGCPxvhxrwBBrs",
  "key11": "2ePsCoQ4U6ocGmL8kFZtQeLYBp8zYseKb7jgg2vFViRcYivBsi5RpSoNx1ePm2ropVYf4xWjvrkbgqGJD41n5KpH",
  "key12": "2uoaEFL5DtqDws9AxepcfLbMYB1HSvRK9RXoAnx3GVkeXV7L5y5gUqQEDy7pHmFLUSWT4V7c8F9pPHWZkcC2C64H",
  "key13": "5uC4m3WJF6U7ZRzwS2csiTj9Qc3HjDAqghatRt7J6YWzKqomfqUiooVUaQQawdZCyc4ZrX54NpKnQd6gqWiFMQHB",
  "key14": "B7RhgiuQVjUTeF9HKPd6SMMiRmJcyV8CHgWadL9V1MUQGyxfRfby8JLPuW7LPBG5bSdcbptkTGRjXeBXjhLV62X",
  "key15": "4rP2yn6rtK2H66b6xvGDRmgcEMgWLU3g2f7SyU859kMbzedE6mYVPbYwUxCwL8BkSuv1o6GADieauhid9eZxey8r",
  "key16": "LRQYiFtpBCMDf2gnCb7sQQhDUvJGQMzbFjffEq92SSpYHMfEKVvPsuEyyPw3GSVejAZ9wum5BDQc6ctS9s1Nx6P",
  "key17": "51K9wJ72Hvot4m9hrHGn3hMVn3pHpML7ZsHqaFsn2f5UVLVC7NgJvvKoQ61tWYPD7QcFFG8U7ZLEokhR8DSpuzPz",
  "key18": "tdxcppBstJwayj6pqGTKBAGXEGbbmUiKfy9Spg3pevFCVzJcMxcSR9Gwx3jjoRXTDEmh7tg3SR8yopm3G6YyCVZ",
  "key19": "5jHb1y3BDyURTefh4JwHsZnVVHct2AnyWGKsGMaRBBbyNBzc4FWFE9gtedz9VeM5bMK8AmRtzNeHCaP87kLCwcKT",
  "key20": "3Hr9CCQYgG8YZwCNFpgni71QzJTM2aPSFDcXqYqVDtEwmKTX9QReKVWL1Cd8k3DDkdLuEtTBq77BpGaMgoQJfT4S",
  "key21": "46LpTQmSy6DCqfjrUcfdkzBYn1dRM2mRV6VEQu5ks2ZWWuq8qZje3ZW1PPJnYZgZVo3n5d2aEtWxukzqZrgPTAkg",
  "key22": "2Gh3xEQT9eoijJLT42ebyMAFdXFmiHuVZ9AFaCARt1Zy5Zct97kEnWpFocnLoNFoZYFmt2G1QBzbUWamkeDRP3aL",
  "key23": "29khZiWDd8TpoLiPRP1pHgvYFsuZvsCM5Ptt4wcWntWdPwBmNusyDAEiwWCXEejanzMJjRyiNNwDrRaYLb2ERYSY",
  "key24": "FDJw21ipXExkPZES2rdMCwv2mcWM9gY1NBgEvA55wb7bZuEpDvK4G2xcUcvYcL9tjcZvAkEt5LVUBtnF3Sv8vLK",
  "key25": "2J2AxRrVu8nYfyNGHqkQQ1XM6TYoaPm6PFAgzSgkJegGWChF3wax2fFtM2o32h78RXAk5PKaTYocVYHF7Nuy6jZk",
  "key26": "4AfNf6ymY3M9ionwD2JiruKsk2maNttHa7FeoNfsNKg1PT3LDKb3cu9hC4ir4nXxHbXfstU6EXRgcp4Co6d5wK6P",
  "key27": "9CPaytuHjmW91qUNLeQNVQ8fXqDSMVypY3sRq72hGFajFwMSrKGJxcFG6LjVkqVcZiuRpMc8EyjujnRtABQwVHf",
  "key28": "2nxQMsm1SQkdi373kP1g1xUZMovCozpVAL9sjZvQWHC35vMyNTwZfFnKPiq1pgae4Pp88WyrmovkinEPeozKQbfH",
  "key29": "3hmaN5gp7KaMLgJedMZi8fTqozZ7RNGHRTTvKuaMJEhApjDTJULf2jh8NcfQjnpPZ4bq8omB6nvXqMuXvYKY9hgD",
  "key30": "5qKgvUhp6SvSPtvhYbchKdkx6Lbt1pxkVRdHdFyx8SZGWqx3XTgvfxXXEc8tJmogiHjx3MUkZXhjXn5RRGoDwtSJ",
  "key31": "421V4PJQffnUkP2PqMUT3sUwByF7B8AhsFwyWQTuFGuND3woskqZar1rQVM7wWWCbB7BmTqYzS1WKgjAkeQc3z4T",
  "key32": "4HrDcvL1XzvdqS9F26WF44NxUubidVqNttGjE3DGXmJFzEvTv5B55UYjt3vXZEC9EAQQGQ3gGYmq5PtiSYETNzYK",
  "key33": "39b5tpxrXQ46HZiEBLG8FJaFAbUvbs18PmvbdNjr83gyc61rpVohvM1VTPDjLSE6tuRdo6L79GdGXtc1Q57nnMAS",
  "key34": "Jmc8Xw2K6kRWepSmVHzPREff2eKkTfcKcDXKYQtxrxFB2mRvSwuAHgUMfSsXGVMw3WQgMg6QjY4XMwMxB9R1Xnx",
  "key35": "5p4iSVQbbhHeCMPifcEZnbRbMmYCqZECoC4wZdwLEHP7UxXmDGBv46NY7Nokrahdt9TGYzdQmZbKqmTP9gd52DEQ"
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
