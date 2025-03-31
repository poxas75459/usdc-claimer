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
    "3H2f7WPdjuVRwd3zg9qCCksSgGADWGQQtuvgg2hvTYxtzCeeVvZJvgbEzdwZ4gbfYMM7NmQuEA5JKzmMD72Z956h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHLaSL7Rz3LhfMD4CzM5juYzFQHc6fjGPQW73PxE8nfXCALj4NQbzBNEj3woZGizYFPGmBiEhZNfpz8ihpY7HXj",
  "key1": "2c316RT5eu2bEsLV8azi6EiixV17okHG4uKze6gNVv57Ddxpr1WZf11mjQJiSAaKK1DD4TZ1HnVw33o65WP6Fx16",
  "key2": "514xczm1b2UUFBpGdDCjZSu9dmNp3E7AxjYyZCuEmCMCarqzyawEZbfxCYbjeqaHbzp3EegfFZBo8dhiJMoFAk3b",
  "key3": "3KunuopQUKDqwxvetBdzB52KSTGcimppi9ya8kmwaxJLZBR78dasYSrEiV98RnuvYVA5bSzCY2QTnHk6mRm4a4Nf",
  "key4": "DfF33MmEHnrW64yATPpqX6E63GYfyNrqHUEUZMM6oQ9j8qNgQFq9C5hnMQzQc2aHmpo9uUwZ56rmmGgxTp6Feve",
  "key5": "3HiUZogZt5aU9XWXmue2uGzxRQDfnf9cFoCyjfgiZ1eQCZPcEt9Y6Fvg9FKBdpHeCcdrErjeS2ANQebxdGyuPMr",
  "key6": "2XrhcsSN8pkt6qxiAKbEoKZLA7ceYMXRRbDnHYd8HwPPBx9UGSLaVSgfmy2jEcfoGbqZncFKrHLMykxVexSdPtjd",
  "key7": "3vf5trFc8FZbq4oHRVTtg3caPPQYtKo5KhDv9dJmy7TnBTQ4zNsYDyxF5cbg2BzXDWpqu34M47ZzLJyqxDS3RiUi",
  "key8": "26ka7QXH7xxsS49craJ72RCxbk14Wu9r52mPugW5JUcqJZS4Y1wxm1b2jsHj99Q1sS3s8KgRj1jPvujLAnHY1Gj2",
  "key9": "yjAoTHMjeuvWoH1VeCxoaEtF4B7sXsARVPL6sWfoncu72uMKaTCJbR798RAktNQpFcawRDN5fLeGnkcsneU7m2f",
  "key10": "NNfCzJs1YJQqkX2C8N1Wu9GcXdFeiyRzdamtKwyZ6mNgF8DknAJcKB2iGkdrc6pQG9nM5FxTxy9xbShHLYnCoJu",
  "key11": "3cz97p8mcFFwRNH1oReo7Fw9t4yfzN52gYWT9a8LXWid82QYbXhGFv3v2ssUPX9pabtWS9N1Y2HEJjA463JEszYX",
  "key12": "3d2cZnFdrsN5dXdTR6KaCyRaVoJYdbDhZP3Qs2pMcTkkPw6ZhWnnMYtLvzZbYMBRVcNH91TA77rNM2CgRgYZmnZM",
  "key13": "XYdzX1z8ZY4tJ35LV47kmLvwB4EGCFtfAAnkDnymHSg83ypgmsiwzY1mc1hURxeyq2mGAjAtkfCwZa79Usmv1UQ",
  "key14": "2eByb3SWpFjKrsK873eGwVk2U3Py3karAUFvvCQmxDTh7ckNAoZNn9asn5uFiNu55FPFKSMNxvzdNkq6QmwYhaQp",
  "key15": "3qMS8S2JVbDvW7RUs5ZK3QHs3GovPctpakX7k3nf4KY6yBMd9UJaBLGHKfHTauy2Fk1hfRhr5kUqyLhasFdsQ7TW",
  "key16": "WBKZQnCzaEmaFCZ9Sw8Ar3CZ52N5nQpsyBuZpqNt5EXDLoGBLaLPr5yKD6XwXUsN8b9kKX4SG8SuMQPtcAVFdVu",
  "key17": "3QqdoZzdvxbU3hqe5yv31Xcw3ub7JWJa3dy4Z2Pbpj7KheYkjhx6hQbwPggwREndR1FiKN5SaDgw5uqxHT9y5fUr",
  "key18": "5fXggP5FXeEKKvx21dKzhzaV1NqRiyni5C2YT9EKRWCD5KsYm74WSvgPfdkeryNhbE2w8pg7fF1XNynFpmfZi4Me",
  "key19": "XzHW46kWPaufuB3pbFBKcUAWgmgkpVbTFFzY9JM79w39grmLyseUBETQagK7aD8Jku6SReayB4g1Cac3qF8ssUr",
  "key20": "49prtZ1oTEApZ4rW8MAebjcS5EoWv9jTYxXGjifmpdTdjfqmtjefGYFjPTmcxF1UjwR3NCVnALNaQAyPLdLYAv93",
  "key21": "3xBrNCsnMzpH2eHbwh3hp34pQPEuLKMdZnBggkoN7RzhWzpqY9cYo9HzxnQhCwiMbHq9r6Z6RJf6mwpuq3izWvAS",
  "key22": "2aUbSRJDfbKVfad3fRo9tykgiD26sNYvTyVkFagyQ8HMZuNYQvFZSNdY6u4wcAJtHo1T8Ny7SHEq54hjjvshXBU6",
  "key23": "2AWWz2m7NnnyWCCBhGsgx75La42ddNQtUP3Fim2G8ZJ8YzkZ5cTr1czgmueVZktnCAyx4J41hVYrrVVtHWWb8RSR",
  "key24": "U7wgyZnsvsTRDLG7gwFssHkuaQzXG5Q6XrphtoMV3mTWDbfbqgxGF6jENPiGCpPjF8Yq4Va73HwD7MSJS5aJN6H",
  "key25": "4YMzojU8eTUEg5UBEHNcSkEBqsNHNE9d7FoUwRnqPkA26gxxLdbEpdmqEAZcVUUuLJqnYkvvDnSYWgW567JcWQUN",
  "key26": "2rmw4y184oz8D1A18RxuCG5QFqEafBh9XX6srXibitoecrPPMVrEpZ1YaWpf35b2JSR2Bix3BhRN74cTRan7fSMz",
  "key27": "4cmZUZkVW4GMA4VdKD4xGJCqxDSHRQ9Ygzz5bUqspir7RNJydwYGCiCBCFPx78cyjdwZPf5ckP43vUzu7UiNaL1k",
  "key28": "5mFKCPE5zbDb3woiRpbcX1WDHzePaVeTE1QQpGgc3ccpvdt7m8j2CxszqL6z56hyvdjPzdBYgLFhLx5JyZ3HWfbU",
  "key29": "vyGJLcku8ciZ22Lzn3Uxhw7oDUHo6W5aGsYU5JXFY9zUkoMgNEVARLxRG2RwowyWtkFHzx1cQ1DGTYxRRzuxRbt",
  "key30": "2rhY6oYAg7QVfyQQC9JbRifT4GZUd2hGTPGy4cDfaYMRBjQGYLH3wvf9ixqgMUqojs164fD5WXDaKSqkJNq9s9po",
  "key31": "52zhUgGdfNYZDpHE7hyYLWD7YBMotXYHGTiBEdm3mWGKDW553768gj6KXvXzvEWh62KMMhkECUVdXL2bYNru3aGS",
  "key32": "5BqKSNcpzJJ5Mr983f9rJNkiXYCLmerBiuGtQACqLPJiko1CcK4EdXC1ajNAZLDFRrJUuGdH5Qm7S4hdDhdopmKv",
  "key33": "4hZKiaSAXk2FMTMk86NHrBYk4Ep1U3T8SAkzf35g5VzgoKxDn6JMztLcPAxGxXaAy28h2KCx964nQomPZoxEK9R5",
  "key34": "3NJSfGVmbBtmZ9wWbxgoii1c9UxzJnSNWwhjfEMxWd3sijWpVsDRYm5T1PaTDGv2vvDnhaqW7UfzYPELknRM3Uke",
  "key35": "5Ce7XkUioa7LaeRwEog8p1ZgcfaitMR5RkZFcWokZbf695su1vYUGXkmKko64KCvWDU2geBGevfFwMxri8RkDARm",
  "key36": "2iN1WCbBcRaVCQ2bRKq4vABC8mmvjQyyp7xDtzCHx3tWXpA2aYpzgxGwzGW4oDE9wHF3oemhp81ENoGRed339pYq",
  "key37": "4HaWCeKG5M4Suqp7y9FpDRUk9DcQWSLcD5Ab115EFocY7GqwESDXkSxjZedYqxj81Tc3jRCc8ZtAmEbdBaxXeSAL",
  "key38": "712oTqdnpJMPG9ZcMEUfWBPgDVawzFU6Sgtbfm7Xzu22wZ3G34As3ZufLgphejYavUmZshXuaBg4xx8rUeJy41j",
  "key39": "2YL8CXzcRTaw2k74pbqTkAfaZ6uaVZWn5mBayTkBRmFm4rw7ChupaY7eCtqAo636jd4KPQYgUhsWsrAzd64YMSBh",
  "key40": "4dPUz7yemB3sRPwTTx7V1newQoKbrqbTarhSCUkyRF2GpRshUrj7st1pnUfxeXY44JwV9SF4wsVecAFC8AU5auLV",
  "key41": "xVmUnCFt24H5U4yVXQt45x4GpBae75WfERu7hzLbxE5APoaRQodFMH22mM7o7vTZg1i18exeoScHyjULPJJm5by",
  "key42": "5S4M9Ewx4jD6ANdGrCzNp78RqcBUmrJWcTDZydkXPs34ZRdPKsGmSzhx6URxR64MfsTQT8ZXp7CK6XHsmoqcjJ1h",
  "key43": "2exLCy5v9PdvhZAvoYVXkzshyF9Q3FryDmnVxS1UJJNGVTuAEmgdPNYchNxrdPQLe4R7FSoH6ruQBZ5uBSD4H53v",
  "key44": "33PDdRQ3enQ4fLBzjAJyWmp45h5BmtLUXMx9kJKCMmpJqhy4VriLfMBhmLXTLjTEiJBPbYBnUT4UakyKeAzbzifh",
  "key45": "5JbQBfV59LLqJytuknwVndg32kkT63EYR1Ch67Ace7uB8NEyp2EkFVVcAE8zhb2BvxDCRg3WEHTCCVPTMF6STPN7",
  "key46": "34uBHTpPAZMdLBuj24ScjwtgyFPXNr91KevspgkT1iPiUYQfSF1csipDyTYg7ZVVqyFVNFGXF7mW5SsGyzuxo6d8",
  "key47": "5kKk5ihZ9am8egfqHchpQbQoPRtaUSMfrhrk2FWQCovjRrXxorbXq5T4cyJJ4EKy32tUeL8zr8ULXzWtHfvY8jf5"
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
