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
    "66rmUtMD3D32neJJjy5u4se2wZa1dimFz7ac1wSaeQHZHAriQiPqLZK1UceGJZQACz7bp7KTWRgCxtckJKdnc4ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnLXyz2i8eNMvUNDJS7of2Mh3nck7NR55zvgpasjL8WLaUu9Lm7KL1MeskC4b2TwcKgWWqqFFpwFninFAWxruTP",
  "key1": "2bkvNRjELCjpWetX5Xva4dWHJHc7kKzxGk1upCYGSmDxCZfFg6MRMv6R5vpKYVu23BfDNPZApuSEbFX6kf3U7SVp",
  "key2": "BcFYgjUUwtgWDKSxvsNiQSFicgB3mpRFtvEVmd6yV9e8k96X5JqzEwGqHuphwqU7CzMSmLSCrfQDNGSpFk5ey3C",
  "key3": "2CpjiKWo1UG7ZrXStV6X5nnaZr8PoDmHMmYqeVghDWAK6QmGeeDxYuzNnUDZtZPAV7acikKdVLNGUsGArYHrSyGP",
  "key4": "5SqkVLPvAkWDK8Lh9ip3axhP5r4jRiFLS8mA145fd6cdA99yUvqvFdwb7DJJUVDvkyUQpEUUX9F7564VPu922a2c",
  "key5": "4bskjdakGCkKcoXANqwjViLZTFb4CHQzt3cy9FVadxJYSFfYYHehTyRHuq587z24GCHYWWXGQajRVpCLFigb3AQr",
  "key6": "41AsVSVQLAUmDZ6yDm8AHPpzNt9S84PxcLnnN8J6VnC5bPVBhoxXxZwufXL5mhB2vcTaEtdQqhGYyUxNsCMzviRp",
  "key7": "34eqX4M6dzUEAcc9vPPy5QaEHP59KVi9LrN2N18cMW7nwpqCJbBmL1sqeUJudRjjJQDixeC6Mi22QpfCtW68zqyu",
  "key8": "eDtokwF6ChyWhMWhQkgJubHmDZxWbGrTGkAi4k9FP9Q2fRWR9Qvt9gSNeDs1PcTDQBGAaq43MJ6r86PjaFNgaqv",
  "key9": "5nCAzsdNpLfyxE8GoSQxtBt5xv8TboYvejmnyNbaYVd59PSAZ7bSUP9QCvG2m2s3DAuvxLo9BNrkod6jXU16suWL",
  "key10": "2YnBmvPGzb7WBfVeeChufkvARJSCz6jYP85mEAkArQ9dqsvbpCeHRdd1FRpg7seBcsGWWffXsQ69pCbgawzrTY3x",
  "key11": "5s4fgi37Ch1RTVru9aA4xMrpVLTRL4x5cSutVQwgQsUcnUnj51FejdRAvUDqvULmuqCs19NpBRPL6MNPHebAg2me",
  "key12": "4DDPHBh5uxottGouSoekvmjMn4aGfeAzDDNYYrzhpRejQ93vsVAMBMJt2ziCyUbu9E3Ec8sZg7KZ3aMXUfq6JXTp",
  "key13": "Q3AzdGfJeKrCRA1crF2JqQoaJCgYnczpoEn6d1xs52CZcekLLFFGcpd4rL58FBncbnXaSAnLnmm7HZYcvp6hXYN",
  "key14": "2hcdqEWYdDz8STBCXKDVqo3oqbuSkPeoDuv96ahZDi2SLmW8AT9DDopAL5P6T5DonGRjkwY8p6Kn1pWDkDX3tVNN",
  "key15": "3haWYRjvpXRUPkNBP1DJAa5PhkhyuMeikjDAdgRBjT3xpF2Gi9pPqCYhF4eUUT1eNYHDWUYp6mMWALUT49rYpXL6",
  "key16": "4TDTB6DrEq3DfSjsMRYk2K8MoXgt8XxHrK7h9jLnkkweCgKMyfUogm75yrgeEqKCtGbHd8UgmoTvA7fQoqRRq7uE",
  "key17": "2M3zDdfoiynRFqpscZjTcye9SySrZaAaNndSkjEGcFmKNu7e4ugPrMjGB2MrWbeEjsJMzsXMZAt9PtRmm5sd9JiX",
  "key18": "5qrvj1ZZE6VkimaBxEaw6D2z5cunqSe3iuuj7s4ugY5t1wcJybjSAxMjUwqgSvJvNsNHHCN7Kc8aSF1AyaQUHyrd",
  "key19": "3RbdUEsUYErd9KPgkfLZCCFG1aKvPniEJARfuafMfge5U4Dvc5761bzV8Mm7z7wDy2VB9KMFHysCPMwbWftJe7TS",
  "key20": "64v634uAcjnXXhzaNNrw3Y6zbu8p5J3LQMgtHAo7eMWfwZgVXmbf4dNDH5a85mWvcpoeZcCxzMCK7M7SevmQLUWp",
  "key21": "55C7Xhobaz4iCgfBPYcBe4M3dVfpjns8XP7f7KKiKWfghyLzQeWesucQGfXg2uKezj47bB9wxAgzR4QmB6Fsdo7d",
  "key22": "4ot1Kn1B9ATurYxckQ5zjg5dxB162ZYnKQ7Xy7q1xRga55P54uYtBautidRrkMvLiiWKLf2dq3m8Byr5QcegHYri",
  "key23": "4NjrzjeeX6FzWBagxc6a4KnyzqoDVscpcWXrHFFC7WpPUAdfp2exuVE6r3S5EUkwGQW6QHv3iyT1MkBwtF7GRBDT",
  "key24": "2bAW7qDbWTVtNmmQmh5TJwjw9CLBi4xPuFQTi8UEJbyRZHTqTMSX4nK6gqTgaZBFLy9DcomtwRF8AcDjCZzmEgc5",
  "key25": "3CdwfCXJp1WkUw2WVHaRusvVtqgBjrLZpC9g867KLNU5SmJ8YtQQGEhUXujhrj9a19K13i4Sdcv9RTCrM1wUrR5o",
  "key26": "2kDPtdgWCh7qtm2aKfGMgNkhVbeTtYsQuuhSXB5DadB2JbkPrnYS3pWD1DfJsekBzuvETTzp9YhFMKKTidbc1vKb",
  "key27": "5rezFQhrNfqztExyR6szZXFNHV4yv3TVzvpwhGFzPfZUpSM98hphHva5eeYUnPoExXdyFVQkER42dEieouHKKfgq",
  "key28": "2TrUFBNVgW5DvjM48PvGRJR13R7KU1uxPtpB18km3PUN3s3N5gmoAW88uqH75VrPDXthqc4Jdoxg8JMZ4qAe23vU",
  "key29": "3dggGQaJoZHNdy4FuR3U3p2jTjyYuTxKwFtw6LL3RXWXuW8CtwyXbTo9FRNJx2AmEZeUXVwqaoaLoM69xES2VdPx",
  "key30": "4Xc1A9onqWKg4ix7iXpye1p5hinFW5YQmMkARWUUjckCEiyXiCGSNHZwnZhiYrhMFvxVUTRcx9RP4Y2QgtCj1RJw",
  "key31": "3dxNoEoj3HQtrMkseNb7VAzQ5PrD5VWc9UhpkXGcw3CwDkEL1h7yABEzshfBvD7skfegBqFqy9T7JShGpUgFjNEQ",
  "key32": "2qPySryndnf1fbz8UQSHfAMPDxLGaKcJPZN359vAFtAcKr3bS6EwheLjNYbgdFRxkZU1LeWYLTWx7GXXqpv8bk2M",
  "key33": "2RR5tNhLY2CfgGj45EHWoichZMww8K9p3vWT2NeQbENLy68Aj7P8BUfuGqNtc1iWH3tCXpa9rRRrDPkrJcpMCMyb",
  "key34": "5oTsKyKvbwCGhpz3FfuxgyVuYfNaD28kt9xdMEtAAZFSKkiNDx5Q1MQqQi6BQwHEaGQ7MkWbyfvK7SL15wvMNSth",
  "key35": "3p3Y8mL87mFo2eZJrubnbTKkhyRiPXjMAf7uW5utQgH3XToxFDTcczStEmkXLUCbdpBRytpCqnVLsurF7kExHxUb",
  "key36": "4N1zLqbsh5jnTBMRsj7cSu1qR4Q2b4ytU92z6wBhQ4wycffC2GtbRBYs8awHchntkjbuLMMtm75jt7uKAF899PDU",
  "key37": "VDmxL7yk9i98sUa8S6JfgpezXdGeNV4N1yMDFTFPRL8ZY4GNRy7HTY2P4BiH7yiun1tj4SsurWijSVTLMkcx8J7",
  "key38": "4y7YdPNhcnZDYuB7zhncEPUJbK4nWqgus6zJC2VYmTmH9TkAuEUAkhSjCTmtouZjb69VzGLjzPc8TojdnjxXEVQU",
  "key39": "4aTqE1w5TkfwqKJRznFktcPhLXKemd5ZAJY6F3hmSh3mpu8mFxJ1byGdAwaCTkftLDLXGwNNPZ7Gcc3zdeVLNFCU",
  "key40": "56JznbcEXA4dDTnoMUow3opzXvRVoJH4Bsgty81jaYCkArAWNTmfGsFDd3yPzKGXUrwygPHQA659gvRsbh9Ri9Mc",
  "key41": "43LPozCnmqXQ2tdwZzJsNVsE68MLQcZUi9KEHhC8hwSNd7Mz91pb3FgVRADyhHsn6YArK7jTJmg8CM7Uz5L2PVE",
  "key42": "DnuqzYdn3GzU6kjWX4aodMz8dNjVf7Mpo9ZBq9oN7kVPJwQfqVR2Fy89JtoY9SNvoBQPhkbd63ep8SktCMZNuFY"
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
