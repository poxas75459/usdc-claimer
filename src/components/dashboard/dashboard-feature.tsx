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
    "46dWcH1UZkV64Sp3r5JRatNK1s1hNvjfB6bhXNuhcrQDGNPCyQQQZbrrqfbWgV6fq1AFZ3q9hFqXdjqvf8aNjrK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vWwbckin6Vc6f3DPtfYtd9P9mgfWqtpfcp8QuEGyrWhowCcuW2hGcDADNkhL6psMkFY2gx9QSQt4jAGowL1tede",
  "key1": "35Gj3W1tzBADyYuzpsQNEjz9ABwv54Y9jUbSdTzJxV2bR41bsQPX9N6Tmzq7zbrLvQ8KrY7uRYoNYJeiaFRq7SsW",
  "key2": "4PJdSNVMS7R59TppuYQLQ53S9gNGb4Df6SjTWb1tscDNTSvopa75WaPUKEBj2KYYBJ9W1jBdZEkPNtV8UdEMj68C",
  "key3": "2Z7x4tgiY689hpQAtDSAQWs9HpZeCVkWgB1G2wC2KmS8ELJ5km2npTMLT4guCYzrhMmDSx7XJ13WkeE4eLrC3NMy",
  "key4": "21ynW2G5f7Q1Ae6J8EMUqqstoXUX1hEd9SCyr3Rz3ijTrHxXtW4vrmpK17zGWqHSVj73brhFCia941Qm91E5FygD",
  "key5": "269qAGmTGgNtdNxRZaZLiPPe1HZzVxWMxgH8SgFU6K1aqEKHUhk6NcsYgNQ8YWg2YNdYa85TVzpie85xMkGh7pDL",
  "key6": "fFMkR21ikDKSp8q2cXnyjgYJfPhFRkFbWxh5rDgWqUiBbQHtQq3jcQNPjjBfZdXz5tM7kERnEEifFw92rLYMDpX",
  "key7": "4VTGyiKBo33UrGaEufdGLXnsaorB5gocZma8r5ESQzQAp6yrmMXu7BQTzt5nA2TCvKmZs5Gf6mZeCNAkneXkbpPU",
  "key8": "3pgVc6xJHHpdnDsSnWA7uZdiETVsqFYckr35TwDJ4LcSZ2z3nJ2vrZzmBKgmmJKZ7w6GpeMEi8iUbJm2b5bfAbwL",
  "key9": "4Bnx5DDon4P4V2keBLtozLfG2mfENg2TcRNeDn2MdjfcRKhrwPCavJEqcUC15MMvkJRei48QtZb6sxwSFydrXcBv",
  "key10": "2pz31KCvhr2K7xS8aGEb7fp1Cd4yz4VCAxLxTyniMAYm6nwwAAV4PYaXfoNERJR9dTfrYY7UD7RX8pdVUP2gPKre",
  "key11": "2Bzcv7AgLPg42eH3LBUBWj1RGPivuNpEWbKQcdAd7rgkYoyy1cTAnwSq71q7g8FzEN6WT41fxsh6dKtTur4v1w2F",
  "key12": "3wmDs14B9rgouNFBPYvHdjRD9kxfUoyRdGfnFGaj7G2VUADGoGpi5pxyHzTdJbeWj3AVYnz5qiRzUSj8MLj1y8eJ",
  "key13": "479Y2ekxdd1CbbG7kGynxeoHmh3wgkVXKmhvpZdkrjuhSY7LK5M5o4cAfRPfLiWD3WgTWpuYxi8oQ5BLBboAzkqW",
  "key14": "2mPsAoaW8sEtxCytwM2TjSpRz9CMkW6ntehfEwxLJqPMUJrxmPnK9i6S3MfJbT8ufr9F65YPgoAfzTdWRnSWYHmp",
  "key15": "2PjxDAjyRvUELyuKDwDpLHCxiHHvGmSY59L2QiCPF1XATiYN5z2sfpGA9dt5LbVpwn2oNMjQEqBAVwX8AQbjyGqh",
  "key16": "YBmrwGb8itzLkejZ6BdDytZcbv2asmouLS6ikcSB9j4KFn7zaicUCbVhTx6d1yCAQLSF2TQVYwxetx4QHAGzKhX",
  "key17": "2V3UvpYmQVJTo7MLZiwLhQBiunUw7dztJzbtNwQ9xpehCZsyqwkXDugKNXhFUhqcTcbRZYR94ri2hfQ4t7VVUL9f",
  "key18": "Kv3rxBDL9cZR8rrtxk534oDRL1YyaMbm31Nq1atq7yVDSF94iyhpjnyQv5UrbmoMHiSi2GjdLU4x1HgwoGSUB23",
  "key19": "rZQ7PJUGZ1VRN5GUx2GZTcvu59tbP7jP8ywc2aFWKFixVisyGHGVAdyL5X9sKE4H9P59vppHxPbXW6KePdsHTFZ",
  "key20": "fJRas45m1YckDYyqLFAyzkZXtBop8k68HWNDsM4VHBkXCTAzUSQHFrGqLZJnmzXUc7fHoeVmX9zd26oEKRyD4mp",
  "key21": "3C1ZRR42iqy2XtdoiDjxyyJYpCyjffQDcQZS4R1H71RAXLb5GQUJKTa9aC3vvz8H3XY6uacZaNQu2bNWxTd1ERRS",
  "key22": "VwHGhVwpVByKHaiV6tahfrwBCho2VERSncmemXXAQfGsx29C6Z1ct7sWn7iUY152No5osTDryQckNqpwFontrDD",
  "key23": "4iYkauB7sBy1vHLcAJMW6jszLHVw3BgXzmAg9qFvhc7DvSgSaeJHJB5zYVE85VWD2tq8Ca7V6DxvqVvCxAyZ9Sd6",
  "key24": "55aSBfpihyycLoYmnEtPKUfMuBemHmXv1z4oE3J8LgU7vt4TRjae9EGtwQQniNRRTkVzzAFyc8WsrG61oCezMhiz",
  "key25": "4kYub3M5z3jm16hfB1bfEhAzhsQVQ95Kp3FSDJeH7tiUrkJarRtrSvrLc4DGJMaX2RcWozDS4qmJXT2YRE3F3x6L",
  "key26": "eRt7Lty2Qern44UYZz2gXxwpGSwPchQdn4aLmkoNsmS3zqHHjFjvb8PmATytU8rKw2WGZM6ZFdjEStH9af19UJ2",
  "key27": "df8Cdt7maCyuEsZ559zMqWf8aq54LFohS7nQCG2XmrJhAkwTkjeke8k5zFHeRRXWZHmhtMR9VBnC9jinKFwzSUh",
  "key28": "5ynsDbirTvRowHh29iVmrKZRjwjKEdR1f9wMimwqcTGiuDt8brqU1DExMfW8iXPkrXjBXRpeoWf9muQLzBXQ6ihw",
  "key29": "hQjY7yERBCQLKsDzSSSQun3p5xd8HSnSnTYpvmuAh26Dm4ueSRtxmiwX25h65pJpJTrSWWVUscDRW74fYHpoLmb",
  "key30": "2FAazQhLxiCqtLYbnC1QCLXfMMgi2saAQsHFQ6NXxMh8otmqoJKw4Ea4tQDeh2zxyt21SSWZYezHryQ5afWvgAFD",
  "key31": "51YkBDznRY2NjiWrDdLTH5ZY7hrDNJgurVjYP3EFE1TuM8xxVPUBAv6ux4v3jQxuXhHBnCU9eD9kDZKsnGgTvV4b",
  "key32": "3rytsruh6qE1zNGGmun164TTnVUW5Aauf2RgzqWmVMjq3vm2sgfvx1auXE78zm9CAanahJCCqCFytVCTqnzUCPBq",
  "key33": "4iFZHEgkg2ZENrH5428DGXv9a5qib2tWGPwCPNU6egeNZnN37513mn6MNZAsicUAJcFDVAk41CKmLd1VL4U1cu6R",
  "key34": "63kZnVGs9vkJuR9T2p5huDbfUcS4DzMxZkXDViXKCt5ExP71B9gEQYc6m3vvdPB4a2bGjkZyGBPD8vBda6QWxN5g",
  "key35": "46PXsqviKtGtqxHpdTjXANdM5axKTjWnLEJ2PQsNFiJBib8P3Rq16odTYzLYPd8hcWksAhzT3EuSHFDULD3kgvTm",
  "key36": "3PnfYvkvaDyAU2K5HzsrTQZsUQvJ4MbGhLcWT1dwwW2toWWPA7YHWjYjA6YcVEr3g15p8rFWQuDsA1PeG4T2Uw7k",
  "key37": "4cY8JUutK2MdWA6bVYhcjWpTFesARh7W6v3Gon3dbyuJ74zQMZW9eepXCCZ3SuNbnhjVmRZmBsJEvQScKN4pG6dh",
  "key38": "3dRAoPhByR5B3eNWvx4eyNgH5Fu79tFownEafmzRcpoxDoMHR8vxBQpU8phjdzz5b8564RCuk7Un1X7fcfwzqpAx",
  "key39": "41sgWVKH7pZNXpsCZvDcNVMqYJCAXjdTAvdDdkGHLPW8QMZ8Mr9gRvMJqif9WpNrVGbKw687kbPjY5kjbJgBspto",
  "key40": "56sdWzE6ySuQ27TFcKGtqF9Au26D9rcPQtooJnoa7jgJxrsNwg8wHm9a676cDw53BPNSqMP5VHBNxqN9Guyo69QD",
  "key41": "551gZ55AZd2tdLNvJNcc2XZfaW4if2kce4Rm8ftGkbPjVr8RTGt6Ta2uCsi4tEXLs8s2Qv2dYGHrL1tCedGtN8y2",
  "key42": "3GeaBZoqZJU7RtPdAwZgyRrykrSfdqD8uNiEG6QLhv9UnhZ8a26chWkbxJLYyww6C6vaqj2LwpTMS4i8rvkSyiYT",
  "key43": "2o3VW8jTcLjtv3Pyw7PH5ccNVqKGSsNK1dTXYNt6sanrZDW99VskUK3xZtquuDmZWSoeHEwbdyYEh1Gqs8hjKGHa",
  "key44": "4WkFs7Tm8pt4HaU5BcSJ7LAagPZm8Narp3k9jHm6n6SCcsbBNPVynVcB3Y2CQA6JtmuYTNxb2u4gLkbCDptDiLSv",
  "key45": "Kj8b8JJwL2zrQAeVrDXKuAXRcSRJ2MPw6y84RL5DTPmsT9A8V3tFFYvRY8CCQygrwoCii8R3R1zzDvVC1r2iXkn"
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
