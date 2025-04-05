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
    "497QLpqzwDpRBSgLWVMgcL3RnFERhCSdWj2MjvjVmPHaMqFL32x1CADAhDJ8FjYddn6q5EkzpKtMjr2HnZsuNKH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TDjXKDEw5Ha7Z8KefeXf4aCyniJagw1HfX7WCarifVXzcdB8PLzgC45SksUS24YDbwvqzpZpA4XvqpNMvXJcuDY",
  "key1": "2vwVM8oNjGGeFCBpd3cDDMzeKL1yGi7WF7aJQP1GdL7QtvJKj5Kcxk8PSV3BmQkKKzy5dDnr7BSEbYLD3XrYLA5H",
  "key2": "2AW1v9Kwd31wK8J7fAUJUD1oqWGsPTViBQnxgKnSGHX1ueCMLKFvaV5CNTbvp6DdVR5FBoipeC67i6ZYWTHLY15m",
  "key3": "52gbkSSLjjChdhcM1wY1x17AWXRu6GBNQrQfu9W5xWqTtBxGLQ4u1xPEeFZG6XsWKkDAteQxxfF8Me8MX2SZ7A41",
  "key4": "3jEbmhaRgL5LMfuAzqECobhvV45G4ga9A8RegqAL8AxcbKtcCqRdxbpWY8v7qGNHRsUX2tUaKbuG1YKaJs4iyqtV",
  "key5": "2nQu44rXCgVVdD66i6tgmoSaQuSpf5N5oyUNydiVTjxt9QwMyKZ4vsq4KzDUuGCgZZXY8mxz2k2Q9aF1P3suLDst",
  "key6": "2iFftNH1JhyySNtKtrmbE25B6T3JajLMoRSsczDRmXTH51wpQgyQXNye7TPwBi1p35YWcPCq3kVKieSD5QrM7K9",
  "key7": "5pVMKutfxZ9rQfCz691V3jfg5dFMBSvgTxzwYbt13jN5KkcS9zKPk9mzdXDoU2SAbgRp78t6d9bLXYgWSRtTrvSP",
  "key8": "5cZKCS3eDPA2j4hjcvviH9hKK4TfLzbWb7M13FUVu36xZ2QAn3E5tmx6JovcDtv3qbz5UD5dKFQntVBrNnAdfQqp",
  "key9": "2J11Pmw4z1AUMFBzafy44azWripYThtK4CzbGQVMARM8vhf75DGjAtbEnmma52Zi4qsBGnWcVy38knCWaVG3E39Z",
  "key10": "53KLNvaRJuKfF6bXRRUtRQz7rV34ghdiwymGUqo9pe8tS4ujqQwvdTbcpsEyDGtCThtzeHXfW5tv7Kby2c195fra",
  "key11": "5EQGZ8DKgAwpeELqxBWnvCSVyQwL6R9wEDH8iok85MsZQMd9XnUyURtzAAf2R4iayRHDKMirGQuYwC65FdMKDnqX",
  "key12": "4DHnqnqsuy7CPPGi6kjR6aAQefEgYgxsVts2hs3Mt8HAzg5mG3LtujC4WaYVJj1hqhzEJX6hMQ6FktNYcqS1CRDo",
  "key13": "37wi79SbwtMU6oUa5WgVqVbb3jW6xs9w48n6kDjS31aWMngCZv5zPWWpEHc3VhW8sR97dP22qM4udDECu6vbuRQ6",
  "key14": "46CwecNPBohxbtT9C8wtQ6ovhDEc3fuMFcuZ3zvkfSohLp3VbKZiRd3U8KVPc9GtScTQQNQqDp2JAB2sJzYxUNPK",
  "key15": "3FA6Fvm4v8xXTnmj45mgD87X5TGruWioNTaqmNg4Az6zJaHbmDvSCZyrWF7t1NpPh3RwXmjEh6VvfCjy9Pmu2cHb",
  "key16": "3zFHcomujfgMmSkYJG919DFhNLnxxPhAeo6eYjXnTjwNMaQuf9DmZXSt7ZkgxtEhpAMPoy9s74Hh6Vhjp8MzVwCP",
  "key17": "5PhtfEKSfPw7VPXLQ1YMPsx8zDaiXsMeWoUXCFtTZGQhzTogb1XpQ36zUXcDpgPR9wpNbyPwcwxcAc4efs87NBGY",
  "key18": "tP3RbxzVoQS6f5gyqNB7qhr8DipH8waSzD9hugKACHpyfru4dXAeEtSq5Bgju43oR3ZJzqfSsyQWd1hAc7QjtyA",
  "key19": "5NqE7rwxz8J42PpTacXzes68QmH3PLDG4akHQwmjnwg1fkmA8VsGkTykGeQAAKC1gKT9VPXZQHQwckrnoYYKLxCm",
  "key20": "mATKSuYhvoKfCAbAuMafZtAezje36LiHcnMukhR2QVbUqXkBxjycqkCx6eQvyou4NmziRTpNmjjHdvqzqENFMLh",
  "key21": "5i3Kk3aMzPFRskgSDEAN1R8VAuPV7ZMheYhftoTdJARW1mSCUV5X3scUHAW12TgtetUwGRN3Jbk5xt8CRu4KBYWi",
  "key22": "4s7Ndkra1KYCmBvwnMQuzojRdJ3SWzkPPwEVsG6UV6GRtq2m5aNBg66kXsuksc4QWWGCSpCagcWd7V91nxau7YoF",
  "key23": "2AkxiRWKHdru5odejGA71ZEqebqremDREXuWDXfMabN6U6W6HZP9ccoxXK9ZgVmjSJGWFm7iDpZKWyBfY9r9yuza",
  "key24": "2Khq1nnVX2dRZ2U5hwxQMXwqkkGUDFXcY2eqdrE4UPfcA27HTs4aejC1r2fS4UyBoSFokMQs6wTG9BSngwFDTcfv",
  "key25": "4sXdpaybVjWBudUSfd21UcgST4V2eio7rgzdua4RoaC6zrD4kNRY3CQh7ZieoVKhjVCcBpf8WFYWYfF3smL9pGq1",
  "key26": "3kWMotjgxUX3s5ZAmvyuJYWCxRJcF1wk4AhA2UxpgJgybx1jHvXNvXhPY554DA2gvqoFfMBRTbbkgFHE3N377vjX",
  "key27": "5mh3qy1XbPoqa4Bq8AchKfu82B1CSxH3XAMHpnaW4zKjZsFLrzEbpZW982rvDHeE5qiRjaHHAqpQG83nJkqFjqxU",
  "key28": "4TQ4rmQNimPwn8gZTAox2YDds2G2gBRH1ZVzjRN7L6mLVz7XPLoY1GJoPyX8CxEYVyju5VzTUvJ3rGrAuELh75qT",
  "key29": "3CKnrTdDyGCUYLZ1LkT6fGSBgHFKd1omZvzrr1wxuxXpffrLrvt96YpdgY3kNSxHggTZjQLe1WL3EUS3kYR3jYNt",
  "key30": "64Qsv47fggproqAB1wHszBUxuw54nUzLNzsMq5QmSWwyqwkUQhWdB9co6gjtH2dMBFQxV9CYUYbUvkKf9ci2DWt2",
  "key31": "4z56XqmfiB2YwB6BdvAjvLeSadhmQ3jU1xZ7w3S8s7HpV6W1pJbYWzJmgzqSrJ1HpkjzDw8oLqNELx76AZdMT1v6",
  "key32": "4LKNviG5WpmiKYhtYMvLN7NrtHeadghG7PKuBd52kcJFKZLxKShfHuyPZjNKxsk7eTQpeFtR8xEyFYyDxpAEL98H",
  "key33": "2TKMRq2AkgNW9ZNktSCyDsoPY1Wv5W6cadnq16bvhsFAFG4vGo1vNP4kkivLkD4wcd7NGRAMcXhvmQGx8zMvz7He",
  "key34": "3ex8W8g39WzgeHXwe633zuyag7ZJu5JJVa46eLRtBwtnSYseZutpWifj1qwWfsUZZaFPE61S7fMvKTfcyiJvCfuP",
  "key35": "2UGxZjoF8YphwieB35gEH2WTF22erPvA7Pv27vtRv8WsTyjz4xEkcoLzRtTzSByiCaJA4hMLGPLEMSQJGfhbsPSx",
  "key36": "47geSSPnCmjnkcArtxQCspFsArjr4jHhN5cepGUE99aqyHygevdyM7573pShBwSdHKXw1kYUn2XYNWU8hdnYM6F9",
  "key37": "4HAf6JrVGdTkMdu43QzYAohzC6FwGiQHMgt7oyGqnCyahVm7ajyWRksockpKdFiaDGJP5nSzU3W16aaPomYzW3pK"
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
