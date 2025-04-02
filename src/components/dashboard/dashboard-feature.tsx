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
    "3rzeg9X4BzHWtvTiq2GtKAXAevuxCjtiAPeQtBUMbowaHh3zMkbTdsEmZ7i41MQRJEXRhmS14AAkxcWCbXy1sVHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PgAQhRbpY82EDAEWYYe4MVXEW3sBRBnjEDfXAHJC3obVK5YJWxdNJAdkJvUCJeyQjbZdZ6x6hqSQZSfNEjnHBVM",
  "key1": "319h1seP39pKACo5qucEsPDXitV4RNpWx2VkJC1LTj6SAhXobTGu9mygZWMAnTWQYQSAYeyCSNwLSoAheHGg6jzJ",
  "key2": "2QcNxAM1kPkgPLExHgXtXkQNCDMuqWskCLtmChRpX1e8qvAtnLkvCP2vVmhhabo9iAUAo819kxFx66ENVVL3vUnz",
  "key3": "ecjxgz9Jo9mXuszB1wCrZMNQrdnSaCTMQQkSQQvvupqTPnHydJJbsRkWKRYhMC59mjkhkFok7kEFTNWtqFxcXX7",
  "key4": "36aeLsnidAFDBgeTQt1frCxkomwTEVP6UGYMVh9g8Hv9viv98hho1DY6MuWHcWqFQeTAbaUEtBC89Bya4CYLeKHF",
  "key5": "5WNomLrj51eyeQFh53hk2Daa443yhBWggVKd2ySrb34VPVKqzfRUKt3Pp6aPB1LbBC4QPrTWKxTmMsH2fRuVb2uX",
  "key6": "2ykyHiuJ4aiPcMX8ffNas67di2EoWPerFmt7wRVgFgo4eSYm4ySzW9dcRoY96DYgEDSEFsd7MriEbSfRiUDiHePd",
  "key7": "4CXfL6Dx7Ybpjov2DsHSzGPgkSHgWLmMwKvsxwRCWXPz7nwWZmsYaAtmxwspLXBCuZtFeSFgqCqamQEsXf9qJCoX",
  "key8": "3dB82mF3iqKcpMhtfayhAa2MGiotqBSAxydk4ohUAzW9Jd6N4dM4u6VrtjHvjAnWLWmjwXdvuWods29hwbV9D42v",
  "key9": "eM7xcybrTPUHtVzQvtKHfhJZhu4HpHv8PdXaWjL8P8bLzugkZnSAixzdAC5N31iGS8C833VS39X81uVRsdnngkD",
  "key10": "65PJR34Viww37FfGY85hZ7i2cLPncPdwefJL9U4Dck7LNfgw9r8YDdApbjuLmN5bC2HrCQn9XZf1RdsMejtnMavK",
  "key11": "G1hiqgM1QW8MD62x7CEKmgm4x8iwSa7F6Xa1wNJTKUYewUbd3JBtfXm6iAh3HJDXemwpKg9PDQxUjCTfbW8CzFn",
  "key12": "9ztFEx83EWXJwjUdkUTueASfSDF76RtbiYCFsv43BR9GZb3MVZkuVF5EamDYFaa8ACjZk2nsmznuFhkY8sXvn5q",
  "key13": "3VgXoT87rze8gmDx9UhiFr35X1dhQxHsJMQg1e9qeJovCagGzYi7ueSns658573bNBvHbu7WSGbjvDNTYJhXjgND",
  "key14": "5zjcurut6Pax6jvM5Q7gwpZFX6Paz8f7Bcx7gRGRkYiPLoTUJWXNb3fLEnYP4meUb55UpvzVYHAogTncKunWApiS",
  "key15": "5wwb5WxGrgv4x1WqsUbaQix3Bn7ZrJiYiZzEaZYK3EMMVq4DwcgRFhfESVubxaxT693RrMWb3vJ2FSJmQUuKmb1E",
  "key16": "3GudNQ3wfngsh8snBv9GnpXSGSkNnJBaNYv1HgDCWvhpP4j2SYqn5FqwfbnycBnA7R1ej6ZXkzsB4iqKvFnQFW7J",
  "key17": "YSu1KMcYM8wW24X2hiHjcLYXwzrv2QGLS5pNxT27eWppBKiEw42DxjQW9iD98XQRry9ixE3ZgNjzB6KsMpSkyt2",
  "key18": "4L791AfhjqcfSCzQD982mjiSm3AdxyiitA1i9UcPPL1wjBaJdS18gitt1koHDdFe5pjCMXEosK4qVuCZb54vJ55K",
  "key19": "PZjhSkp4fvH72BVQzFX6rkNaFRJKV16Lp1M7KUzgYaa5K7NUdPmpjXZYNArkT8KY3BBEP6S9M66pewSHrrmNG18",
  "key20": "4mvt4fNR4xs7tGmQVsmtFitMqgznyGyMHsGJm5vqQ1bkc8vFFDNCGpY9moXNagN47jcSMSsr8zgNb6EBUQaeqWNz",
  "key21": "4mzpgR3uroakqje9xkzMsqNFduMw4tXXLgjDS8A9jzPH8kg5AWSUzvHwXt1QBWk3ierGeA2AhRd82BUjAGMq8o2U",
  "key22": "ikWHQDqfvD2REEwmZQ7xqsK7YEgMkWJTuKiZvEeXER2ecUMBjHXJ4GTMmzAhL1R1KycB5C28p4oR9KFTBmBdmFf",
  "key23": "uo2v7dTo9fCY1x33pbxRWSUkCvtRdUpJmona9Y3dTwTQSFBYGJzxZaBazTY6692UWAWUe9v3j9bDeSD7dfkuVoK",
  "key24": "5yeJH1p2brTf3HDLzEL2yVZvH54aLet3g7oUi1dUrKxH3cnQB7juaFMoHft55t6W9xzdQUp7YS5E4nBTTYK6BuLg",
  "key25": "21wcmzibTPdR4sJGky7H6Hj8rRihYnnAdqc94ESX349YAqXtcyUzNSGQi29EcuykgafcNJS5dThrvFKGggWr7Kar",
  "key26": "57pBjPxKtQRcSvPeRRfcgN2AoxtWJSrJbFDDB1m6ktzx73tvJLEy7GZzR4K65ZGjLmEHxYS8QSe5MrokauGhADzM",
  "key27": "5XN7CwpRiMpTPDEUsikTvubJLb1AbRTMr7nzQ2yMUSLEGCJsFBFqjJ7nvi5p9Va3UJUD5FPuUX2fdjsiqYUbSdUe",
  "key28": "4QQc9vkXmBKfgEhQH8hQAgw4PvPxnEobKxCBNhRe8z4Eg1gWDR13NCVTacA89ALBPWjUumC1DJF7jEWaQY8HPRbi",
  "key29": "2wEgKbPpgfFum4aEZJFVMW9wYvYRf4LawhmFc6BKv1rxBrq4kWsBjoaq3UBBiqzaU1BrwK6AvQ9MiMxVmtsDpVhh",
  "key30": "qCQz7yDWePu5HsCGEQfKMqkSWULsf3dakftRPyg3t4s23Xnimxs5ZHyVqhRNsjL6W5vvcrCk9XPVoh3Ny9Q52kM",
  "key31": "46vDpmbu15n7sr76qY5QB7P7gttxNwQMSG5nfYUmbvgPg3LBDFvkUhSJvY5sA3PLjwNHR2p2biutefrPWSqKhYUL",
  "key32": "4emgV5yZeQjmEa9D1P2HjLUyYGEUgEmvfrPRnztQWMx8HiZK879ZhWPmqBV8hBh78eMyq8sDz8fRHT2qcZ9yVYgm",
  "key33": "2rvbNnDiPVLiE62AJhzVhvXQz9yxKsFoHU1dzngvHeoS3z5aCoZkSHHhbmNWARPz1RvdEMCShF7JqiAabfrw8wKZ",
  "key34": "qnn7PivPisRQHQF88m2hGqLyQg94jaCymMejQVQwKv1YBwy9tp7oUUFG1xNjbdq4S1P21Z4rdpLi3mFL6oUhrVw",
  "key35": "3XfVwNKPLu9s1HqHm8YefriSYZvVBLLrco6ZBEte1DnVmWMdFgMcQCPTkTR9ZaoQXkJfgWCsAybr1KW1si7wHuJ8",
  "key36": "yBPrQtfD7QuM16VP5qUd2QvtweDSgrynZBNziYyNjiTbSn3Wmi294ZpDBuLf9UQtexByXV193YRMAxhaYYEfXZF",
  "key37": "3ESUsDkbp8f78G8NMUm97eLN5HqQfR2fH7E3GwmodyVFQcMe9bP1L9UEVuucCQ82emmUpZZrpjcogveqckkPCev8",
  "key38": "64FyEt4W54B3r5PwjfivtbP1Uefu8dmK3YCUF59GWcXGyqqyEoxm5BuhQTVi6TEJXjTEwrNbm5DqYD6hfc6HL4pc",
  "key39": "626yZoswSekSJrh47zx5SFRbdmGn5mTFCz4Q5Rvy6RSTh3gUJk2tSugbCRhe6eByMvd5YgcfuMLBGWqKpDTv64ck",
  "key40": "369sDEwnkKxaUAZjm92K5Udb5Jr6krDZHzjgDuLiUVBVCL2EWHnTr247ArHiuNU1VViTRD7dPA1aWFAGKwD2PCD2",
  "key41": "5RHmRDFfHRKMuea7BPVmeag6ikKRp9smxuaV6Vpzq3UxChQAdezgsK5JPoE5yoUqtPDNXcj9f2YhidMqiWQ8Nvc7"
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
