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
    "2Fw6ztU9T4kobkbhBSd4FbhEMPQMLvXJazjV53YDdggkrmJMZqV8ph1bo7mG4uFgxpcjdMBCvZPVAdqTtc93zLZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epLqWrD1SJWDFDCWdcSWZFUMXi1eadGEv1ZK7GjJ4UAFam4XdzCnMzBE1HK9FZMrFj7tPtMq6Fh5WDTsh6ToR9Q",
  "key1": "5arD2hsyjsA9zbHofGG5zxdhrpnaDah3dtUyGiUcxPNDCqDAqthd4TTMNWgA4WWAGf3NcPjVf82AinDZ6yagxmBP",
  "key2": "g7CPGYQco5ZxG6Ne2ZGmAoUCFWVd7J1EXm7WbP3seR1Kv1Rxbe7xNRDcDAv2TpJkbD8ztvFCBAbJ1hKCQnooUFk",
  "key3": "4Z9SCL7shuk9EVmngfHc65WqJ5wfHesDXnuNRMVGkXjiTVARbetJVo4SnevcS4roENtqNTZq7JjgSP8JkGyeTASZ",
  "key4": "hhezqX8gzEUdEWseb1Z7MrbSx8QP5jkDhuwcn8V28Wb7QpS8ZZkK1oJwAsRKx5BXooMDPhRkF7gGpUnMrjzaF5o",
  "key5": "noRNQPbP1yzxsn5S2CPL3xgi8K3W9YaMnEQk1GJdtfSQMeH41muQAa7n7Y52v7ogi1VhRCnZuPSR2k6ZVPddLaP",
  "key6": "4bmFTgrNd3X9hyCJpjUPrgcJpnoSBMyCYGjQTMTN3tGtFPymXeT9NcMZPR7cddCoTxaiVsAmrVQ61inaw6BA4m33",
  "key7": "5pvxpL5HBqNq4MtXHeWoiuKfSBcW97AnLbURxXXTd7GRcQayTgDH3QyJ1fTJ7NNS3VKwkXSfxnrRN3ZSBjDNb3ej",
  "key8": "4ky8Fb6Qf7YgoCZvinytBS9eBz8DUD8F6J165sGupAJDc2bAm9VeVXzHjSaowx3TycihXjN6StR8mCaFt4an62aF",
  "key9": "3UzefhbLCxVwM4tXmN9k6uS4DdD2rpdwnWqxFcXuPrv6TLrvMiZYA7TQNaZFYRndtCmWY6Ae1fiWjWpUbYFwU2E5",
  "key10": "2zKPAh2z6pCuJG5Ga27nHx3oXXGv3VDhuhVCnyxt3EfcLp7MqM6c3wa8VrKGuWXhG8YiYpsE778G4RQEdB9pZVmD",
  "key11": "3afwmEtQY8ebHcttRaAphPYVkWcYu8yUhHt7fqJLbruyhVG8uGyvUfLh42xA8rtWJYYgwxjnJCSpfw6bE9bL8JKt",
  "key12": "2LW8vgYwHFpL4EgzrCiR8cVbhqLN19VU4bSibwkyXvpCkp4GLQV7fHp3aHFM18rSeeFwcA2ahc558egDKnGZYyMD",
  "key13": "uwLUGDDii8FjXPykaDXGBNwRdANqJcZWNTFPfmKz59BpfH25LxWue8qCgLCt5UrfBBqfbFKMvHYmidVf391Cv18",
  "key14": "5b4V8KNaxpU3tiUzPtNNynbFB6pbRDqqtcazry63cRj9euCYX5BPgzySwbN8mNVirbKpTtcSNCFvDVwWYwzJ8Bpa",
  "key15": "3bBp2osedDcTFvh6h11F1vz4d9tsgQVmGVtro7oDZViPByPw9kgVhsLV4X2rtDSbUWCVCMh9HkwcjhLJqFGpaHfj",
  "key16": "4GamwgLrA3uk67FcLbmFgWfonf57UKDf6mYKN6JSjwWmoqhvaYNE6tqLyweQhwULvjRpTd7utqPQhMawZd1UEgTc",
  "key17": "2CfBRRSQmNA5aC7uPSfSef6fQPaFhp3ec4ZwKPVEVwhWZ4Uk3AWMx591rFMnkMp8tZCsqtceGSBdKppFpjqTZDqs",
  "key18": "4jSMA9kGC9hxHb6j4myKbWoF3ygqYm45AHT8nwEf2hWZNNdAzvkcbTUmcBMyamQemKhMR1ggC3LmUTtVJ2Q735Ne",
  "key19": "4xDV4BiYuptZta5pSApjE9jGYZmRgNL14r3vK9kp3AVNShjPHRsg4NrJfvWCqJxxRimm1w7KLMGYhGhvnkHYrxk2",
  "key20": "4WsK4eKkY7fEqPfhcGKaD8W221vfukydqqq7TbCcZH4G6mfjLbxne5VbkcSr7gExEEj5UyjFunRtK8avqjcqh1dg",
  "key21": "54ZsQsTGKDSM2q3W2SUTYeyGdpQkx5mWv8KbJ2xgAxHpBjiAtsYCXdzKSBGg3XD2xEkVhu6nKWscm3hcYNVr7xUX",
  "key22": "4TW3w3WC3jxQ8uCPVf3ZYd4mKY3jii4jBD4Q55Uf6E68fk3i987v9FWaDoExBGaNbnH9ZdEcawkMJe6R8Xip9xa",
  "key23": "64PxsMabA7HY6WYwiXhSyNeVYi8jQFKdi3bUsNtTLR7psm7LYgGLhdpRs2gNJWuzo1JMjb1VP2AwAq3JJ9mFyw2k",
  "key24": "3XjUScWPyftZQfYNaz3iueef8STJsPJdijGVdUVJRxQxy6zeBzvxDXMtnvwbha7PU8ngvKvhQP2VEhEdRV1bvynF",
  "key25": "4NfkgH9gkndcCrUaECPGJopJhKp9oHgnAFkvaadfatqoX593mkfYdc9bY468vHkSNfyjsQycrVg4CxBnwpZUVNWp",
  "key26": "4sYo8UcrjjL5GexRKyLmqVoe7trF2MqvVm3VBHocfZvJHRxiuzDbVGVyU7EuyTNsKPKh16UU5WeaPfJ72j6o7ALw",
  "key27": "5VV8a5dL8Ctv3e7LUoL2mfLwTn8pVmE9AmLmukwMd6gFh1mygtEdQmZiVvctZXC26Z4iruWVZBCqtXM9NnynFGsS",
  "key28": "5WRXBYrpXFwmCZmR4nnpt2T3RBT4uaAFWeRyRcNj5vdJ2md2hcgYRvTha47q6u2v6RzMfjZR8ZVXXXmP5Kbtiic8",
  "key29": "52gsNcd8hRx9fr65vfZgXhfcAtmkRKmpyKrsuJGhg649vh2bTxcHF6fsnjJruwsUCTgeWPhnS1bPWKvhaSyL5P7x",
  "key30": "5H83XCWpZZHajed1LP6twJSHtzesMs1LSpL1zEzs2RithwazJH7Hys3WFsjP1mJQLCvVSQM5UWaLbzt4k4UM5Ji6",
  "key31": "3FSjDKsat9XJ91WwjiqN9itaMd8QRFqVq8L51JBKMpnbFNpkzUtNgRmCb1p3EwjLCmgo9jhWLa5AYv7V5E1dMnUp",
  "key32": "4YDepieicvsdHzNyjJHhfbX4mBmBg2VSnZpBXPxk5XjYcHyRHjpZuQjGYy5KEfhfzEgyz3Ro4eSnRvHYSVLidNie",
  "key33": "34vx7Chh9Dk7oazYutsbdG1ZVF24cMULdxvkYggRuJGyZTrCfUhqeNaHsGUn3w5gECDCAygVSB9fsoy2vP6UFzQG",
  "key34": "5jEZpA7u7ABw9AebKxpR4WY8oGb38Kr7vXzkF1zg4rzUaV1dQ3y4T2hf43DUf4CmjJkpLuBYTbvx9Q8x8HNJ9xEV",
  "key35": "2jd1XxSNos69WodMeGqhW6hQHbcYELLBXP6UMsGy2u7zpjXrFp8ZaQEcbzMB8aqdSB4MWpLTEtpGEVizGQ4Coak4",
  "key36": "3fmQ7zQ9opm5vZtceYNcxYS2mKJYhspr87RVrVwB8kWPmT7HVo5r3MH495xjKfNRqne4fnQVWzXbUjpgCWNruNPY",
  "key37": "4jd7qfBDgPjXALkRQYq4Bzt3bxdVRiFLb3tQBG7b87jMNQhjjX1YHb6kEseWVsqFQaB5H6D4j9PzPoDiFMd4iRof",
  "key38": "2CLwvJVQb3YjibQd5t3KyAPnTsddjsziDpjgrrmViM6PwoGVBYiAcwMXwYv9eDgYZvudaAn9aLNhpF6qKkucpVMe",
  "key39": "4Se1YUJzFcx4tr3f2LbCsfVxvbTbd5bULAZqjKdpk5JVgEnz6WdsnfUyCjgkuqjt3qRNk1R2JKH8Lx2hExTMzsfn",
  "key40": "3cTTmz6FowCeXtUqEKRxamqfMmEeV2NXERz7rmrBafccyJXsy2fFjHDBbg1GzfJ4LNTLYyCdDNXZXJ1XdeR3xxzZ",
  "key41": "3raHS8efXJAizBWZqtFivUXYPytWoPZhozx2HPuvRtpf5FzSyCvmHeWGMxcsPW4N9UaBNvZhHQhZApZnmZARq7Et",
  "key42": "32weKWnG9XrbyqvRBeH1gttZ6TG9hWidQv7atyj9bZx7zp6YpHE6JGE5mr9bSycoidsTGvSeJrxtYV9sZ7d4QjWh"
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
