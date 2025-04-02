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
    "4QiVMa4vYX2WhpQfayozfZZPuu2DQ3MNX7FuBFrWoRcP4GxWmfDcVKaWiY3E2B2VBxbjjwLwvPxe2Y7c1oa1m73N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSeK2Qnrd4otjQx4TGbwd4ZyQMfvEdLDB8V1db6CQnHVBVmMf53FexEhm9jwyuWcArr6svYmxiHB1CK7xUuZ8s",
  "key1": "5stVT8v4ncK7iyw44Qp1WftuwGckBK4buuMqSr8CESpg3cesvGbzWi2tHKzsFxEuz3KRdADhU5ebXEGW6H2pBJw2",
  "key2": "BoxFUU4xfKANHeaNtsBQnKuzQ8RSRxKTjcSPWsFN8SiYeJVpHeNSaoF8hfCm23ph7gNLrbTbZTTgog2ojZkJHG9",
  "key3": "5NLkBQ6a1n56zrQ3C7raMWKCq3FunwKmeCK3iHPmrG2AJvpvZnH4q2KFWzpdL3GQTrkQWrkw62VLgYcfsZpJHBPE",
  "key4": "4mwESpoZFAnqkktAPQrERpY98LZamenwyzm1DcrJ1GmLShYKr32nXnQFJiTt3c3NaotxAE5bYpgtF5CvLQdQPmqw",
  "key5": "4PDNmv3zuyNn25LW8oeDJmQcGAWvgh6NqRUxGeQPD5JZAqL3uWQgkXSJgjfXgAYdqEKJSzmuZxDA934P5S4QUNj8",
  "key6": "27hBvbU1Rw7BpNLrsXZNYf2fTi8epy1vXrwc4kgMfHQ5dfyqYVSm8sDiGLCYnPHbjhb1JYQNe5harGEhaA1otufg",
  "key7": "5htfys51MJ19bYoBBB18J2mqs4QBSe58WjVeRDB73wsxqbppts7Stoy8sj37kzo5T3PHu5PPDeeDM26F9eot3Ms7",
  "key8": "whp7HkTBaoGhb6TiDnsHm67x5dNQ5bZm7kJZDwdWBQRiLSEbWzJH2XZMQGLb87JraFAooCrh5GPZnLcWQpCnYar",
  "key9": "26nUYh4evjpbx7xKFkBPwsn7YGqG2tcdnVQCZDnAuYng5U6HASkpyeU2G1v4MRo9J2Qzu3mBDGhMYDAWpLbcEPHw",
  "key10": "59FvyVdhoY5Vqbo9FvVKThSEsLpbEnuKuivWVvSqSHiY3A5RcJ8rUPqcLasD6zKQYogNbY6Cup8vRnEeGzzL7riH",
  "key11": "2s42DvLxxtykMEmgmBMFeeX4NEz9mzFxD5AdiweXniGRwYPRNH369YRiEpLiT5TaeJsFk5mkKUDqFgx4m2qa8nPU",
  "key12": "4tjoawZ5xsURiggJHfkYD8yA9HuQU869sP7hoxAjkbx2EgRc1McZJzrHujApvKodcdv3TcTmepJrpQrUerc53NBR",
  "key13": "62KWatcHwZS13V2cUJCcQMbks5r2hLCjfebXmbTaGoUfPEZm2wj9K1VcUPZdzaoDBnGhDReh45NjEY9XNN8SB7VX",
  "key14": "3cYrA174FYHxWiYSHxjJKdj26w9JSY35NaYxnwoczZQSTt4Ja4A9UwPGsdAdzATiE3QuaTeja73FHR9ivVwDPfxq",
  "key15": "2yCWWASf2jFkRD53tW45w832iQKZK9GF2oNK1LoFUXR5ipU1xH5E2sDJrRLr2LhEWcEEaT829Dcq5ZcSCGSDk2xT",
  "key16": "KPizNdnfuVfnYbGePaLxSifQfVch5BcAvaUNZmqbW791fVxGd8EoB5NvUvKHTEqGBcsgvzfVrxSVNKJ189M2Mw1",
  "key17": "3YxqyWzuFi72CSPvSh23q7xLLbxUAAGjLjBhyySZH15iLPZAVjqFSJN1Sgsv8HZADnJRyuCakmnCoqG5gKEoz3Ad",
  "key18": "4S3SPxCJCaSdgr2UqwiM9SXTs8xRifEkxD9tqn7zct6SbzSUsYHnPuBBWYANJzGk7Y6JB6oTjrK1c1thMBb1AoAa",
  "key19": "vVBtRtQN7AHqN46eYvmjwNmBdVTDmbuCNh6MbQBrFn9F5ZALdMd2TzxdEyDRbu1nHA4y5kqc5DqstmkCVmUtLQT",
  "key20": "2keon4V2nDGtgJRsZ38nBZoxLsZNBTiD7Exj7kJ8HhyFEqZJEz4jN3ThdQ3e4cEi8STYqMgfGBdi5snEtqRDavsR",
  "key21": "3eJbTnKRGMKzMB9KdDadtt7AgTHsBj9a1b3r4rKJiorHjC6oShohwWvdEP1YMJHps4cqGjMyGfZhVM8SnmJkYCUv",
  "key22": "3EQ6nReQcBAzUuWDGA755mck8YbVt7n9Rtr7oseY4SqTVYZsRzEzfEKFxiSwLbegvyzEQetAu1MdbqbfQVRDYM9Q",
  "key23": "5So75zz2vooBsC5VRxFPsk3ufDd8QT1GS4e2rf9GwMuU1GU1QWHVvRNyHoknsQJB4oDV9Us1PcNvhDZBFeckvk6f",
  "key24": "4WW6cYnsXjM8XQJFerrsPSq4BBfrXzPXUekn8pvRMHxVmqKajPEzqzfBWFPxgRJuvDBSRw16VvXc2pYScqP5964Z",
  "key25": "3ZeG9RaZq8iBqSx8h7ioSVGGpTY5tqhhcDqfycbqxBLUTMq1J2hNiSa2q7myGEcoqz6WhwCy16jknqB4LqFbJH1N",
  "key26": "4g8uBQv92qS6GRfD4tVXjhCxUC8mu8JYEYwU5LJRinJHrKbm6zrPLLLLUR3rjncDziSdeaoAYosiWQj24sEx2zA",
  "key27": "nuGRm4esVHZebMMgqFt4Gx94QNHzUEzwzXLU9r2zNEWo19nb7kp2DxB8KHdsDwD44u4vA6w6bGUgSgoAF4RV2iB",
  "key28": "5eTi3YfB9Dnd6p9hodFVHeoNNTNTAnMX9SWDShgAZpKJghwsuF965Ce5RH1aLczRwrNY2zX31jR2axdqxByBNjTY",
  "key29": "3DAwaj8PUS32ambb9QRHoWrFbUVFtUZkTcfYA8KGzzydREQ1uUoAV7KWqKM8dZoGPaucsnDPApeo9zj3nACPvLvC",
  "key30": "4MsUpK5KQRfo454fzRttkQY7V3Z5MqsxaLe5JXZUkuuaDHN7K8V3ErbdtHow5bbYUbhvifPfGcXVc8JrFmeNTk77",
  "key31": "77HqiNP9WoVV2AuohcdB92TMrmG4zD8bdwAxHwiDDe2Dd5BX2VzMNLpzZMBUp23agnZN3LYnb4aPc38fjou6sMg",
  "key32": "2a1AJE6JVPAA5QQMD4yXT4dKjVhdbQPR2PomJi8dGcpJfex5aMRexphwATMUwpqqJJdkoMNvkJvFMpUqhrgT8CPz",
  "key33": "4MZkMt5say3uPmsfhk9n2NGNS5iCWwnHWa3BMN9K5pwuamSxmx2UVTKPQTz9g28DZYXtGekLyWhFqy2sxrgZMVEQ",
  "key34": "4uD1q6Z58Lz9CB8kEKwR3Xtwudxy8M1wRn9j5vYC1gy2nFt1SqTRcJgmyUoc8NntYaDvsg33NQdaCy8QNRJSo7xh",
  "key35": "248sD7y2pcWYrMQmt68QjGEiqCMJ3Rg2WAbv1FXwdof9gKpKoZPjzyCTNjqfjirzvmvCEY3462tG8QqGDc5X1Rz3",
  "key36": "5gFVwbHb8dibmXwACSB1N9E6AxUZBxhuUvJVYHv6of8VCjVVn2MMuFtTnAiHt6RBhtGPZSrKeJowkADcJbqeetDg",
  "key37": "3zmuM6rBvefyx6P1vc5URGZKicBNx52dLCwpMt9hP8HzTiZoZLtNYKL3wCVjnA4Cw53bKyv5maHNwFfV7FdhUq6M",
  "key38": "5KpqunJaMJ4Qj3dzK87fihPchnjkLRmtybwbpoHS6RwpNne2Gq84ihYMtvEtG6RaLuYqKYJQY9d2fobSPHtnvrzH",
  "key39": "vGvbpwvNH3U8ptdyNrmeNSiW9DTunj2VbFJPNHk4P5xCP3hPrGDmTwaMq4E1uDPxu3WjJrUKTKPW4Ng14yfiXSg",
  "key40": "3ABB9hLvTTnva95eCahqLK9J1TNe6NZKCCDRGgqg2ZhyGLQkBs8xtfdt1986cfdxrP4gtTwyTqzMgUVTzVhBi1Ly"
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
