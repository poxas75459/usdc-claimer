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
    "5Ch1q96yx7W5oRmyMMbEvSwUGS4nRycjKnC3Gqf4xPydzGrFfo6251KECLjaThaJcTnfMMetUcSc2mziKDkQVBAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jp8humgNHQAWMsMcu9meQsCtfXNVyu7H6yW6a7drgZT29rTLBS8NC4Z7avTyRpZWvPBEBL2yAPq61tJ3u2kfPQD",
  "key1": "3HjJXb3khjYdKR9cNhXSGtiXP8h8cURsX4MRc61KJcLEJpCEXmYf5ybvuW1RvD9FRkf6on3hB4sTJof14JGiQnay",
  "key2": "FMHHY1WCbHA42MtHovLJiTFjsJ71Khcj8dkny995NNxvdSyyj5yBGyxq8mouAhyrdNibSWqxEYiuiufnj4N1KFZ",
  "key3": "42eWxAHUN9pjBU3AU3rfTSpk2fReDSDRpog4N6uC8Gn4sJJkyMTLi8ob4RYWSpLMb2mArBBfFFZmu8hnBauEsNZL",
  "key4": "2yFdH6VqDZWqGpDYRuvejio6Ue5xzHyui9AUEYuDESCHaezZWveSWCQsqHoMrS6R2cphQAS6vUX6TYcMHyRmnsLB",
  "key5": "5dAKjTZo1AKaH42gJRdUssNXFcgHgqM2Ug5sc2oYMwX1tQRzMUFqeMUaf5qd5YXmZ5K8NsAfgRWYAHCujgoAYV6k",
  "key6": "Kq2ZZfupW9GTcWge5H6ZSfN63LD59mRprrSc4MP1ZYC7vqMT1BeZDrzhkhgbaiA1vduNaGk9ScdNMP7PdBCZYKG",
  "key7": "3CewuoDq9Fjh4BMvMHDCYeiunS366a1zfjefkzCH9LVyq71Vx5NKk3fJ3nxpvnp9EMi4EhywZL69Hmt5a513AkFV",
  "key8": "3hpZLY3mH7FfSRdvJadUJaPXD5jZnnKF1AehExyGmEVBHbeLkpsM8rJ2vorkyYnQmLMFE1RiGuaDcGzwjimxFd1f",
  "key9": "5MeLvSoDdecYxzsrCnAyP9vbcqJqR4x3Ug39euUgXfspBHHrpbvmsQxZ9jEtXACW9PxwNr9gRDUi2pMepm5BSC56",
  "key10": "2kHkM7oguJGw9dGte4QRDBqDFY94se5uv6Uw5KvunjhDXE5GBjsgLPxj3Us9qdDToYDHa3vHhHABPJf9esVC9Gvv",
  "key11": "3H5VWZqHezY62DCD5SYsMZcMDNrvq9nGt1bnVw5LzGNxjH1SzHZV2q49Z2NAE4Jdug9NSdXU6hnkwZtAGmiVtho4",
  "key12": "2hyLK2qXR3bj68g8RyUGHvipWgwHpcdF5DYgASwCbyHZyVLYHYcVr4zBvFFGpWR1qFhqMvHd6QAzEAGidoKffowN",
  "key13": "5PNbFBQ2wkmanXQL9mLJ1kKMfZbHfKNg8Y6STdgEw5bChhy4cXTkTUzuzh9hZ2yk3noB5yX5QwW3Sq5ygYwJJZ1H",
  "key14": "bJsBVTo4ibE8b7TzGqX4kWVxdjqHHecjdRzjiXJjERjia72sNjT4AEf91VV1mqESFnAhVNVYHmTNdi7ozJeT8JJ",
  "key15": "3nYD4gMfyjDkBjWmPPoGkj6FExYhr1Atfjbzr1KoMUUCAAxVEFyKiMYGBH1yS4q868SpNeU47CX2jFpuR61TL9zV",
  "key16": "5hgkv45bGL8Ggr83TtERefuCV3kiT5bhH9KfxKRCsVc4fWsoroCZyTsBgVqHXx3KcY1BYjNHZmj4dKuSsj8o2S7R",
  "key17": "3ekzYeW1MFrg4kP8cvPowQ4twH7oYBwfYZkBRYzxeJ9vj7qRrZ4pBkRKZSAHwpfSyzySDdthvNC3buZJU7PKLYX9",
  "key18": "5o1dKrjD4sbWE1FtbFHkRdaPPmsiEtRDesortnR1mMrqYK7oRXmNJwAMR9vtdSrwZ9snY52WxMtNfZe4KjrnAvMU",
  "key19": "4SV2SEf1Eo6VdL1dCKUeUS7QjBT3PhizzBkqNWhAkCdVWGoQUPPCjrWiFCDNjbJmNcaCMVggWZWQ9LRaddtYCKxV",
  "key20": "43bKCFyyQYEe3LmtR2BU545x2yozJnhsvtUAxnFvUQyfR8qcsdAWwDrLRB7ZvWrPnx7eaNE9Wy2HwKKenLrBCnsw",
  "key21": "366F2bLYoFRit3qBUgHbj1Xe1Fw4q5TLxN83VkaEqknfsJYEmUt1PsQLBZZcCqqWsvWyxN9wqHpnRrUB8CENPdnu",
  "key22": "5N5baakbiP17Q2um8qKSeVWTRvhe7jcGByFkcGeq55ivMNawyLqDiT2V8qu8LE4fRvG1deCXZybwNf5jNfnepRB9",
  "key23": "4zFS16v6crTiXUjgVuPke5ooqhKwV54Kc535GKNwQP5sf3ZobzdhQArnCd7jw3QnRSZEhvguwMEAYBRK1qEBMPFX",
  "key24": "nb5Bm1y6Dgg9kvybJH8ypMbAFFwyA2hzmtAebjRE7KpS9U5dZ7m9JsZBGpfzsbtZ9cQ79BRh7W35XcS5qFv9j1M",
  "key25": "4KQa72qjapwiZEVis8gP3ovX1ZC9z7USCN81xZ7zpwT2dZfPTWVZPKt4AJrKPHG9qFQtWSvpHngciy1wPMH5rfkG",
  "key26": "2yx7kq12SuJ5Tr1NAUb6cnLmjuuHV9pqttCHVCNRwzyh32HbcL7vCWqFPQeUah62etAe6ZXpzBWf1QMCBFF98Uda",
  "key27": "5Z6cCgjyHRvfdzmk11eNnytWqbVhAbRrywoUThAsBfWCARrn9qaHYhShdSfqYaxYiGBvG5B7R2wqDscLRmf99FQ5",
  "key28": "FjbgcKfBvQ2Foc6tykkkC5HRMtpe8AmwTkGxdpYCgFjQXYMttQmCLiZrVeQa9B6aLER8HodihzBBjS6ZxGxqndZ",
  "key29": "5LgcUj7BaThEBEc9mAkmSQshGsHYn77A1gy1gehaRpDuEpCtMEkZ1vbLJoifX2UiAUiGwDp5NaN74XMrEp2BSiEu",
  "key30": "r6oxcMKxRyNCJqA54i5f3zpVc2BdKV7mCNQSmtLY1quVeh9M8nDj7TCEQGuw8q4c9ZUTZWBsifyxkgygVJuj4kw",
  "key31": "uxLPtoxgsouVqFGvWAPVSTgwkMo21CWNuYFbmuT2L7RA41PNud4DXNvxjFQ6wckE7JGj9Ti5YJq58uZsJJH9i2G",
  "key32": "4VLXY7Y8giNo5nH2T5b93nXwDMi7eM7esp4aNUVrdbvwmJDCSjT8ajNkG5zjCLbVun8UedXgPqvryCDMFNedehBi",
  "key33": "xjwgvBz5mrnPDvZ8Wnm6Bh1eh7k6EKuqx17kUxG9mWuDSksAR6mNxgyTxH5moqqop3XNNdL4yeEBrZDQcpvYC6D",
  "key34": "5VpQi1Ft4q5Mhzw6U9i7JS9ftwyV1eJrWuDdwXaYhtZX6UFgmy6KvnwG1VxiyMkvepHn3rRad9AZ7ojv2Ub5BeWt",
  "key35": "32M3CTMskLh1SHD9tYGZQGzmzcAU7DCVPeAhNjE9bVWpohmRm1J1DQVMRPd8rfkFHHJpYa72q77FtKic3dVKJCga",
  "key36": "2kTg2a4MEUd31GmyfDeo7DzGCsgX28AyWk9k2nrBfQTPLLvXysnjfbp3PPQpk696BquPR4bLdgx4ef9R3UnwyLEJ",
  "key37": "45aFwiM1kiXzxxZ16fckecCKzYhnppRf6QKsvsXfmH1AqFV6YtHw6d6beSFynZRkuQTeMaMC9nP63b15LnVKF8nd",
  "key38": "39LaSVsPnHc63ukr2aaBumFK3XdkgHbyrSc4w6qaS9Uf2ubg88tnGP5SKuLjTqKBK9MH8ytKVJCRRm4RT6WKUACA",
  "key39": "2XVTVUAyuPnCW5rGALqw11i27NANcZCbozffFpPTP9ezkywzTcZMmRwvDBjVoSD1oHb9Lwr1DvZ1ihqLFt3gxxe7",
  "key40": "38pQMdbGdr5Dr26jtxAK3orvpVmS3zrnxaMcHqTbg56FL5zHZuZaPNQtSTV6day6ZVpNaAeimDLnmZRczG1RpPU1",
  "key41": "2YNsX1ZFUuDx6FSm3bEHPm8FYTAj4a6kD1Uhb6sb6noJvB3KaNMNiLi5JK1vAm34kixHyG1Y62tFmACfN6SRTwsH",
  "key42": "5P766tY15g5wfU9jV2QJUbuPEjAYxWVrwHsyDFqaaLpsUbEhfbWUFVCw81oTHJMhWuY7FJ6GqDaTzn8zBQesVrnM",
  "key43": "2dSGaBCT4MuLg52zynTNUHMS5inV7jNkDaRNJgKo5xhsZTRZvKTwktA1VRcagWRd7Eb8zQXNoyFGG5LRKaMZ7JUU",
  "key44": "vqCi1g5LpEnhzh4zqD33kNZUFrRxnXFsGJ5HVHRhgspZyLsFWBQTQXFBt5kowxCZsgESRasSRnnDAamxUT2qdjN",
  "key45": "5R8bv2ggKG6bGB2PFgimkTNH15S1YMz1r598KmeiUrMeA8VLaWfFUreEHNf6Y4M7LgXiKtknoR69RVmzbZqZ3zy9",
  "key46": "4h7z2e9HDVrTw9N7Vda4sDPfevUftkuCwWzeSWBxMLZtivG3cegiSmgcXPHcjc2fycqEyWVhgv4NzX8bWDBqYQoK",
  "key47": "5fyrrFknnnqSFTugHKF8cEg5McBXPHA5UL9aFwU6GA7LA3vt6ZYrS5vBHZaEmH6eNpi52XbRAbVtgySek7dCj4T8",
  "key48": "2eDm1WYkTxMEhSU712ZqVZcqcjWn4CHz32F5YrbkbNgpek4JSV5s6F23z9grmkBwxximFB58JaS8w8EW45L4JG4S"
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
