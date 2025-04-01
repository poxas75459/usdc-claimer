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
    "3ZwsuarsqdLv1qubVEfhtsDPmyTAkciH4Kn5HTQgkwpd18DU55Y2eBx4ksa7s3v8t2dDKMDUasyML5t3R2tda3Ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VXebTCa9z42xPT18ze4qL4pfJmbeW8R4TASZ5pwUPcLc9ieAMqatJic1q9qE4XUHfKGcEHKLzsQaPZXnbmXhq2",
  "key1": "49XxJ1nFgGAhE2V6kecykakmVWNkZgZpRkCSQ1rF3Co573U3ijg4SqtMasZEKzVigy5kgRtw7cVc73uDSuMUibCp",
  "key2": "5dme1toadYiiJVBjDv4niAPrJ4EVyAJKFZWRBDckWbAHj3zTVRxp9chZgE1trhdbqrwjW9ZbXH3tt2kacVAuEWyG",
  "key3": "4QaGibJTXbjQPcH8yhEuUuL2p8NrCsYWW41hkXDRAF92gnqYUZAL5cjckjrDoNVdDZg2L1VhfVbNYek7iJjDm6FJ",
  "key4": "3VZhouheGESnk9nbuY1W83TpA4pqjtLVU9V2NcS31t65tvQ3FdRPaazCZ4ybNDpP29xrjT3SvE6DLUbvzsNBkGMf",
  "key5": "56VkRNTJSJcLZseKqVjL6AQgQF2EZLoyVx5U2rU9MqYzkiV4RLjmuRPUZRY4rzXn3PsrJVXQm44K8KtAorPV3Yqh",
  "key6": "5gmNxsZpSAkPv2jkKFA9zU4pJE3G1E1T4LF1pqdDXwSebFaEDEGr5kyRtQ8g9ocnno6B9mRNx4NNgQ5tCozaLGoA",
  "key7": "MVE32Ekj9y7CexnyWPNdQCbXeqmsjpcbhZsqvgXQMenVT7yws5BRQdKeXGRpfvsGs8auvdpSnypKdX1L1pqkpjG",
  "key8": "BEUpMazYexmeZoSK9bcgBTcuaDyj6W6YN3utEdXxBA3rmcHHxm5H7H6ra6KmT9gYxECWD7JJaMdV8vYbHbibHRx",
  "key9": "iKvg2Zp9x8qNGeDZ57RvfyPZCqZ7kaWmtgotS6QR6cMbY3oGtE8PCCtFkFLpHdacA7igXJMFUqUHJbZGKx5ejvL",
  "key10": "c1nfkkzGW7i7NoSTTAaKhrRvmUKwqLH83vHe8tTU9HHbuLHXEHonWUSxJywywatzrgvuRgjRDd8TiH1V6sRuYXZ",
  "key11": "4Hxf7wTmcLfUdgKsSoyKEQ3VbtSi9kfmEaFv25kk4nPikGrjEfNYJ2cyGcuLxDLR2pHjG2oGFAyLJHPG9pzKQBrX",
  "key12": "JwfcgWgxFX7JFPtwxjUR874owxfM9ojzfxssxQsBW8xu8HaDoFes4rFMf5Diby1cB2XqxQkP2wNeGpLT2g6yzjd",
  "key13": "31kJwYuRkcsSJWtBLAvr2en5Cq8mi3qRnKtNWowRu6A8i21RWyXBpTqqdqUPuZoBJdKL6dkey1z2tUV9nNudz91C",
  "key14": "VppSWqAesCAHzhCQ4fuU4wg53fY9qisz1G5zF4aoFPSrb7its97F6H5H9bjQMiKrVhYcUMNbyfKxNtnrxgjzYpF",
  "key15": "5Y3HCPMkLQoQduYkVRcocwyEGsckySxdgw8wRW9W92EDykQ4VwRPyj6fcssw2iGdA7ZNEnwCMXTSaox7Jo6QnDoJ",
  "key16": "3NyT9B256MD4bpKPijqa51qZHWY9dX1GZCrp1ybw2caUCF6ZLCzJ59a3cXhZkEdgKVnZ1vq8K9vjMUozhrgFDc8q",
  "key17": "1DeBGstmRLoPEnHneQNDA8tx8mnGigwhaY3T1BCfSZvQ6VRfpzSESgJ1SAcJDPM94SwnEX5kyaPjB59oRVRksJi",
  "key18": "48Rvmu5wSHJ5rcnWZ7J3n6hMivZUiri94FivD99FogksnQyDcNr691uTz9PRHDBvAqmwJqJYLqEKdvzkwqFAvxxW",
  "key19": "sfoNGd5krcqg56P412T5AkythMaHr2fUZJS34kgwVLT4doyVrCbTvr5L6Gh3n7WzBv8szBP3CEF4jcao6SrUXha",
  "key20": "22StmVSnGMDgGwW6DbyL1TN39ua31uXWuXqhxc3bhNMvQLusjK5TfLjhGMLcs3DnWh1bKWtucgWwGjhdiwJ1QNia",
  "key21": "4Qk85rvTep8jEWet9XxhcHmTn4hPUtMQTFdGL5eaBG5aY93mXDLWeLJtkDcRhsC8EqLouDQD6WTGDnCHCrqBW5GH",
  "key22": "572nvxNiJFjNaJB1NYYSRFTcD5d6pPk9B4vazCeVpvPzQk9jTFzbmm6wkpRfNPx9YaHRnsqC2jSrmwssBNZVWbt1",
  "key23": "3ya9KMFeGtF4TkTnyvB91YXnXsf5kMdABpq7GvSCNTor2t8gb3ZqFL4duc9dwHsuSuAv2yT1i9FbMoed5V1huhrd",
  "key24": "3uztdQAZz66qR8Cw6XgbPwMt8JfUsYY4jZEYqHSSQJcqUvoKBtpp4qXs8nhsnsdNzRucgaZqAhn1zMeKv749PEsH",
  "key25": "mVitDzriWQzBfAvr5shBpNr2kZQTNxUNZM87snbxsEKniHWnNrHkreVkD6LCPYTcZcogbqn5L8jNNi326bjHF2s",
  "key26": "Kj459uUTESU3uMyKtDxgW8GxuzKrNQTRDk2V5NE9Znv9miTDouunF9MSwkZvAm8cRKgu7rJZK1RBxcdWQ13KDLk",
  "key27": "3X2enuRRP98ie1tiar9s1hAkHf1p8Xhap6DsechuAzeZF3PDq6ym1ne61xvF5CzJC4kBkqswTYE47H8qi34JePG7",
  "key28": "byj9XizCPC9Z1Q1d4nMQEGpJfjAnFNH8CZM15e95gkw7yt6urjLc6y5uPgUzLUu5fYJSdV2e3mwXNP25k5n8Uct",
  "key29": "47estJFtTPcc7wyAQwsRvWRREL5fDtEytvM61DSp1pgVpUXwchDf91MdicEsAMS4FrbQ4PHeHkTo4R8Tv9N7uKQW",
  "key30": "43Hhxgj91QkxJeDGoPAeXLzBkoBVgLkzJYqWGpQQUXs3UtU6PfJyVsjfVTs9ythUKpdcLyMkQ5hAuvE3ADXPrpn9",
  "key31": "ZBBv27hmjGkSjaKPsYZL7bYbDHruze2ymoLAFr3rfpWkK4s7nw42YtQm883PyQuaAqUz3UJ7kXUJQLroKqH2z77",
  "key32": "5Xdry14xS9dcHXL6bJgzj2gp5egBR3VDBT3yH5TtjVWbfiEEttosCqxABxWpxmu2QWeHGSScDYEVtwcnSBTh2pB",
  "key33": "51ZGcxWQRm5Tksh7kpJWdYHCPLJT5o8ZWXqYCWzooLTbeuuas4UfenHiVd5F8u2Q9PWV15zSKp2QsV5VBEUsnKsY",
  "key34": "5eyipwqLDxKS1R2Lo2816qdLEtx5FzTejDQmxhWW9rNhbSmzM6nBUTPfBYc6wCGDrnUcvN2xaHHYRfbR3W5z3peh",
  "key35": "GAcec4byyWTgZLd9aXivoWfrf1ZiTtxAvqzSpgdD5acodGpg9r1Ewd3SCyMzVRBDjghFx79UDDJo5wAx6t964Nk",
  "key36": "56SLmYF4gdAk53QiZdkmxtw4EAacPxa1Ddp3dbnhhLYvxZ4YGeMKyR32hvv3SmoyEGjLkJSnJK698GgiL9q5YCaB",
  "key37": "4k8QPeoFJKD8jGXBjsKaUQgx1NoH2uzEzKAhPEp5aDp6mYBRrJS6LK9tB2fwt84xUSSq4xwRwhGiGYDjHpNwW7v8",
  "key38": "3QfehwDKnqGqbaNE44CfgwqtskeQiXZaVy1q9KpwyJ7gS4xPEgwTNjwHCKcsafTFew6eo3jLiNaYaHZfzRCYhmPX",
  "key39": "3mC9e1wVHXhFZPa7VvrkaAAYvopgAy3sSaBkdyZauW3JWNmcdQ4n1cno1F5Crd8gAcHEarV3XrBKFyDvmTdv2Kqw",
  "key40": "3rrqVRXN7vHJWb1CLCPsM3hQs2tVxXJgZsaMXx4G6nTCwbPB2UgWZHNd8GNeP6stZpEv2cvjZDRVCQCMFDM7syxs",
  "key41": "4ZPZfwoghPG5QTrysgwJWzAt17iTyk3YwNJ8mRs6esehuVpjj5akMnCxyqxFRptKNEd5pkVhwq2CVqRExvoWKjPe",
  "key42": "5Qe34gaTpJkSuB13MiKGEwbUePmNj6AFQtXtZrJsEiyVGK5f5TDrBXsH1UPGY5evgEEbBtt3LCsS7Skit61BBXyT",
  "key43": "2uij7vgDtechKQ356f1LC8kry6Nj2M9kNqraNmfNRwkjanp2riiRAsGM5TUVPKSJNcEfp3aw4a6EdmmxdFjUyYrd",
  "key44": "48LAtPUqTsAVtXhqzWxem4GKZ3BAg7RBUaZGhMudBLzxxi6Szo69u8TxzvbCADenTUx1bR3bpfep5fUecohuqAzW"
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
