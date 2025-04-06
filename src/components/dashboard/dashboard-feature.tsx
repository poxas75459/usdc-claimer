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
    "3Wmad5YrYtjgdf8GexcfKAxxXQKsHM3mk2zZT61J8T7XXFwh2VVrQJgJX4pdHPsyj8B1SXCdk4ne2yg3b2tryycw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUJVfbae8uEUgxv9ZPfEpgXVxndZ3YyzpLZD4WbS6uzW1AutGHTFg7ZdUeCTVdW74z9kec6PTmKkK8iS2RJmbWd",
  "key1": "3tfg9Ec9MG5C73cq3DzfKotVnokGupDjKoR8nuMYuD3U3mxRgVev8mmyGRo6gA77cM9xA6EYKgk7UVEHMe62gH82",
  "key2": "NYHZKy1nwmV1VYiBZjGS5yyMDQ88vn2Cz9SczdZM449i5CfX6KxRsUfFV2LK3A5QA2C6MRFLChM3JN1g4d1mRPg",
  "key3": "26GqvKh4xBog2fx7cmtbWGSkeUXUV2c85ZSj4bmF3apESBsDX7RyjwWAAR5KncCasUphiojZXhUm8Y1Yk1HC8chg",
  "key4": "62C4uDVhT7K35iBgdhMeC2fL1KvMaPSCBP4HWAZVisE5jwGhjnojjDCudPRe4KqYNk5n3ZrAZxFLqXznhetFADPe",
  "key5": "FE1FWHxk53J3KXq1QJF8zPLgiJQX3uvJYvpSMEPL81JH79MpZrdEYYWJMLtG1nFHgwPfBp68qXC5mRxHueo7Vrr",
  "key6": "2yEUYi4F5R6hrrJiKm7Ukb8pvqCtcEqoewUb499BAThoF39xbNWhsxkTnUrgiS8mkC1Hkn9AP5896wuZAoTDKJfQ",
  "key7": "66ZBekmYXDw4aonNMefofHFdHuutF3wDQPbnVHm99bKz8VSDRt3C616WdFZ88VvmsBb96ciuT1iBaHkCu41RL445",
  "key8": "55zs7RSqtQRmGxnx1ZWW56wwK4HD2oKy3PT29rkhaGuP1qpk9gthb5TC8hKsn4RpoGnaWHB2ZF8VSXr94mz9oVHF",
  "key9": "3p4CXe5PmrU1pWEocHSeh1CvZJZZargfhRahxXXFHpHWFuzsQTqSJdm1RmZtGzk4AEdYBdfH2ZfK2tjwfttfzwY7",
  "key10": "5Z9NNs5HVU6PZ4MRozc8Hhx3cE1HRrwNvMsnRoYmqR3nB5kXAh9Ky7W9tP28UaXU3xVGDhycBGAerkWsdgA7tXwB",
  "key11": "52rdxjFzmgSr48NEwfnXByTmD4RXjcbYQWv3wNwU8aiDfQaX1M7xrAMDqH3vQmMBM95iohQTqWtcM36hTeT3StWC",
  "key12": "4N6g55upPJVDJ4kEnbhxuzHWvM1VGRU1VhKBi2pD6xD9crZByHdWtzYwyrPra12HT3n27uqnuENqye44AwbWGegk",
  "key13": "5oSDVednwAn4SBRfnF1pAugzTDWu29Y4npkGK7Kapo3A6Yq34yYpLxZPWSn6DbntN27gUmggnC2nQ5sY6GRfBWHW",
  "key14": "22r8UuX1GbCLswmP2ZjsDk5gsFhbijFER6JyvjuCiFynAMDwaFfrNajt4sXP13EoN4Kn7XpZtPctcyX7romANoTU",
  "key15": "66XYCyyJSCxYPP3RFMKJrYpnhyPTcG4GuA1htAicj4GRHAGxh7bxjuwdMX5gstD3aEP674p4n8YoEEPrYmS61Hpm",
  "key16": "67DQmTFUHTZ3gGT1WnwY4JtqCtQ63j1bAmPLXTTEb1L8zUgSbg7zoBqHfjoTciANNSfVUv2zBnLQ3nnGd22fAV5x",
  "key17": "61gAT2RDEjTuyvx1RD4ELahdRfPLJznL6k1ca7VGzU4GtyACYrgpdfkksKvNCcfpXjGEM8aYcZGfk6gnRbrgxduY",
  "key18": "2R2rd339Cr4Lk5KbNR33foPzHPTUATJkq7EUhzNaVVZvEj74CuMnJnLPeZMpdHdSgft1CGrqcSSU9MuAhs3DQWCx",
  "key19": "4624UZxd7rG2bQjRgZZaQJbSJPSb83y2ostbaWWSJsfE9qtb5U7TVr22J3k7w6F6eYouP2bREtURRY1D4YxpKGCu",
  "key20": "3fECf6NCvUubSFsUEFV8PBSnDaxBvkdwWniMdBjUMUUGkKutAanAD8WkjTS1yrPcmWFcg7AJJ6GGzZhroawXiKkC",
  "key21": "2peQMHnFaxbugrCRgVMJACfUfbFm9S7sQKyf6gEjzNp7SrNZaCvGwbHoSd4zjf1jbGxLD4ea15XNYYWHGhQVpioT",
  "key22": "3tjR3z3JiggQetiJTtkZjmTEe9BWAXZrdiBQCKQuHqSNw1ebkGvqAup5oTvygLsxCoACxJESjrp6oqR5ch2AVPeQ",
  "key23": "sfZ7SbGcheaQeRDaLKCk5W8wr62rHV1DgJJz4uKtSwLG1hgo4fFYahRSWMLosE9VMvW2aZrbYN7HJaqCrPZBkha",
  "key24": "3uFBu3CkfnpoZev2EweMbGQD9LE6s4Egn6ckyz5RKEVbRjYmJrAsCNpi3o1csK73YcKXq1UJEvom7zvJZWhmor7o",
  "key25": "4aWDH37WFDReVgeHaMyFdgg5tGVhGFeyJxXoH8wNQFC9mCKXSCLHeKMpd5qKiS8hRuQd6P2ozEcUe8iyHcPv3dUA",
  "key26": "3L611ZT9vqMpy4TebPC4Vq6QzZvhG5c1d5gRREtQ7L9ZBSgB5gCd1asLvur9LRjHqRcKkSA1DouVPbKoZHfUS6Qo",
  "key27": "44qbRL9LnrRYJDDy5gfDPMmZKiPQLgBrcmQ1NUSfwXuyaD6Mn1LTtuYPJCcA6roq2T8PAo2yJHqJV7X5Rja3LSj8",
  "key28": "4yHHmQMvfaWpcS2ZTXc6LdfrUrmPWo2Drr6DZQCMsjY6yinBR9av1e2Z2iBU3HPnp9Gitj8zdWJbdwRaFXUuXMJi",
  "key29": "2nE4xcrBJxjJf262sTTHR8nvvqhg3YrXFnBLgbMmMTtgk2dNSgNLYtaizAXtUNNnpwQRvnvp3uN59bo1CLdQvPXX",
  "key30": "5regoxRjiEsdiycMT6d4crPzjLGoQE69p95otVpFjmxAaALuzoCqFFg2X1hrttSeKNYHm4yuvefddkNFpbDPmzc8",
  "key31": "62Qm3s7QeRj1HVYSNbpmem1LKqSCCcqMG8jDt514GvjmNyVbFqx7EBfZaiiSUAtRp3eBFXobHGup5tC4HR9Ze4HJ",
  "key32": "226hSrSx94GE8hzdeLTfHJDUKaDsKv3ZBidz4jdVAYT3wjEk89uUvuQx2LSY5Ppwzi74TohPd8sHmckE7nwrFUBN",
  "key33": "5zj1Q7oDjYjYsj5EvqPm2jkwcwNdSbMptfuQZukGkyzqcBmQHs8cHdaKLMKUVmFARyyYjSMPrCbgjs22JoRHKM5P",
  "key34": "5TG5LnJLSWyopWiFtHK8i31W3b4ANUupXa22XwsASdks3Q9vTPCC55LAjYxZGLQ48BWpJceBC4w5Weth6ti629ef",
  "key35": "5jcgwf7jTAGYAhi5fDvvr4fg5CT3jLwXrp2qCYQz6rCAZsXavC7941c3Lum7he9awv1jmdxz3inB6HPh5XPh3vdk",
  "key36": "44qgifZQh6YRLFuaBL7xJD7AqTtPp5HckGuxbGBis1zYXLHxWPqXUJM7NdNsZsT3eGjBPSvT5pjo8tYUsKpMECcz",
  "key37": "3hjPDdRfbtw3UgcYEURqSVDUSkfrac3mkbsfudzHvVFvBTHfEv5AMecnW8Ly7o74Yndwutetgn52uBkfcy4s2LTe",
  "key38": "2VUjCGuanD9wyemosoLXt9K5bdPNdn2JDtKB4EbPzNUtCAFsk2JumHpfx3k7JMDE4K9FGHpFi6NSmN2cQfg3dYg7",
  "key39": "4K8Jq984CK2Tq87k5FJcGje2hmpduADXwqopfhCRasa5Zywb9NQcgbwG6FPybmLyJQjuXC55tsz5LC1DJLLDaUhh"
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
