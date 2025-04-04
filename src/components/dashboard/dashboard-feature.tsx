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
    "4aYU1wrQaGzjRa97WAgvH2nGneem5zK3t14P8djZGsGF8CmMyrarKgMDJ91jvyA5WRjBY7vkYZ3hmiXoTMKbVoAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvELANDePghqFYbCmVp8XkUYkmwcdXiZJ3pVB75kGhxRdqFpKuTwJpibVMh5C2PnPr9ACM9w85EwzHmQpMo1P27",
  "key1": "2b3BUWCYUQGttLDNfCEGydNjuZSfZHhRBuf6MCJefPxKik6cyFKz57RMJurkLxWPn2ybAXc2XPszTDsBCPRuX1Kj",
  "key2": "CPQQHPhE1KBEN7GPBpnqTu96xnkGrLEd5pUUbJsXK33ez6jwqsBfuSAqayTmY2JFUj34gUaVSX1fDRV2sgjxQaT",
  "key3": "5X6iq3MDtyXj3gEB5ncGvMPB9EF1beQbyTBdrmV6JVSGu7tP9PJLujtARJZkY153yH6qjpmgkE3AdLcMRna2FsgP",
  "key4": "3jdjGJqFgNCP7gR7yoc6yTyRMHkCrwS5hnxYeE2ZFLhMcS4wwAKaPBahnw2iU3p8B6hb1p39efYnLA3Z2TCtecR1",
  "key5": "5HVdhBZr46yaRdoUu2rncSJskYrn7HxUQjx48Mv8ksLECZKKAXVivG65n48QN9aV3d1Gcr8JRs6HCD7fHHD82pem",
  "key6": "2bbJvEZ7qLobhYXS9rVBp2h3CKSUexR6NsRquqd22iD4dJ7L8we8q8a4tkkHnSnfTqfm6LahA6Qv8ZjyMnsxVCyT",
  "key7": "57qEzyWCHLDomFgBGT2iF3czY7bQgqiGDK1WREaR4vX3wcdX7EoFDFQgD5kezqLcVEJhhDJdfaBDUMu3c2vqScDF",
  "key8": "3tYHbqLRauUnqthdjMkPzMmnd46yob7B1Uv7Lgace6x17k8ctYXdkc5EUupbsYjEuCY3NXsf1XyhHVsMt3zW8PHZ",
  "key9": "3xddZmcMCZ9fZ3GrSG4m7MQ1o77dCQ2kTSgxB6aHohsPnH89wUav261C2zUpRELs5ZHf59aZSPZJgSboFVurhKDN",
  "key10": "2Vm3UQ3p1zxtPUTPo3idpx832k68oGKPQ2s35dzP5bGnE624muGm1SiGtu7beBrD9S8oRT2fjrX2Fg16cE1QNtP1",
  "key11": "1vtDSB15nVJ62XPVTQUkUHqZGvkXd64VP6AM1X6op5KKtsueuLo571yJgSapweDByrVWFUtteVoxgTpkw2Kw3uf",
  "key12": "3rTejPfjUMpSVtaM2y5cdhtq6MY3VuZum7EsZfnqfy24nZXZt5oz2aGjeqNGzRbcpdB3LaSGcapdkj4439dp8E6f",
  "key13": "5KGyRt3qcPFQzYYhjFyQXMLqYoRpnsou4q2wG7XQDGsHyya5s3afk272oVTcroysnjE3jKsND2Qd99E2ZDD3rXK2",
  "key14": "2fPgTqxRmJLYd8d2fKNdxHK6Zus7ZYawKG3C8SAVirgr5KRNLkU3EjLKNMWk5ebJnycYk8xnitbPmSsVEEvuPXzx",
  "key15": "4STzJiriMqL5J2Uu6z88gbzJ5vvrYMJ3NmC9TnPrJGaqDU6vGHhs9EgRFqA73q1jNVbsPNLqWzs4bp2j6CR3t2ad",
  "key16": "kryS3TTAmNJ1zEo2L3xgfBvsGGC3YzxGGVRn7RZJW1uXGtdqkdTqHE6eTpBSXb4zoAHjJfpGAocKownGZTJrNP9",
  "key17": "LewAeHZtPS6BPBwY9VSeE8P26qtgBz1i6EnMjf69mqDMwF5hH182t4pr2RoAZfayw4feimGWe22L8dhPt7vhWM8",
  "key18": "4yvmP9fFAzgYG83vbwEZpHvgoau12qNcxYY5ihB8gsehsWJjREMcWshTqe3kqBm3Z7DmhKnDneXz6FYtiteQ2xJj",
  "key19": "4qhYNq547qmAwCV9YAxHVbMNvrh6bjxcgn3ReorVFSea1274mBuXDwYAG9r7Fbq79PhsyBi32q2Km86cYZSgdaSE",
  "key20": "53k2uCQ8kyEpYmNEtxVo6opu6NnwwF99scspLhQSibaUR14RAd8fqrLNpdFyMmQqV4LvyYcNjwzDPb9ff47ei4J",
  "key21": "hJ6Z26pr6jGyMvWh23pT9mQBrG4Hhnj7AG8yK8uXP9gn92QvT4Pa63f78AT57x79daD75aGR42GXirBvFdd1LNx",
  "key22": "3ZrjHNP93zjoe7AuWmfXT6g1UZrFX5oDGsS2vonxSLCkq7ChhA1mXaFde9DKPTaYfUkvdnKyDUtSa4bZfenin821",
  "key23": "5Jp7YRCpLrcsRJc8c7Dv82bTmXzfRuX9qdLkATe7bixzXhk4Q8kmoV6yYRnAhPBcDxr8w7VdTuHZehzMy7mJSoRT",
  "key24": "2pvqEzF9TbbydqoXBNJijr1L6xp83mhz3Hq23upRVz7t1Nqprns5ocD9Tgs3eLXXzjQLbVtVszKpCio3jdp4zyX5",
  "key25": "EzVzGhbZtQWpyhCs6chjeLbrqQ4VoFUu8soL5dNit7jZDs61b4KbGUm9L6AuC93EBX8kn7ErWpQD6FfHbWzHXzm",
  "key26": "uzJCTsHBWSH3qBPEjpCvDRtjrF8MgCC62HiXWd7WWsnGYqYarzjpcUw7J7eq5Uyvf64sH1whYAHv7LpX6NF9LYB",
  "key27": "2uzEFHpyxAB15Z9bHhfXJNYfP6QmJjUmRPxXaxt5n9WWC6Apd8NkCg9r3GJHVvtdAyNXyydEte3pvFFxPj7sJaKH",
  "key28": "27bcGEWumoNgAPe59y6uu8h7cxLrRK9gtie9oZY5TjwgMYHt1RRWX82xiJcNUYXU9Ynod283CMsKfYzLXR8AGW4g",
  "key29": "2vPvfVYRusmSdXZCT7daNEDUVoJBKwh5CtPpdS2K1ceoumLVcYpE46XzXAqXbbeQ7ZB1PiPKLdj4pAXZau21Ak6k",
  "key30": "2TaF6KXnppEidSku6xcH9VLowAEoG5BAoozgdXqgLFDMTyMjmifrm3H6EUJfGT5FRVtxK6VHd87VzZLf8waKMxZU",
  "key31": "3hxUBLZkiQj7x1C2kmUCsxQXpyVuFpXRrBkJMNeSQuTpPfnj4Pesa38nLzwH5k5zxyJRk9ewNcNFtSv8YZ8t4TKy",
  "key32": "2oS9EbN7kP8LZMgeCcTJ6MHmkYdANrtfxAGVkC1BeWCp7jRz1BUoZtQSjswTKVHT1Ay1gA22xBnx3fqPt4czk31k",
  "key33": "4tq85ryReUvsHmFiY36hciTvQ5CqY4YArTcpgtxsQGJJMoWGZjmojw7k4FRxEF6mNmRraPr4wf6M2YqZVyRQYTeZ",
  "key34": "3kbmqjKEiQTnMPbnryou4p3fq5wPMomz8JvTy6QXT6wFambej8b9Kn5WERRhXo5PaGqWbgjm7TqhBxRFqmNNKm3r",
  "key35": "5GgVDKTiPwxMKXgAe2udMddtv3rMb4k7rZupg3tGxEdQzkbTximeuT3PsMsCP8arwfLEGtjpETmGW82R2GoBBr9z",
  "key36": "5Byyd8QfoM61krdK7B7duJmbjVJTKz4dEo3QxoYbj2BWDemVTJz59YrAJe99FuvQ1sy8yjbaG3nayaozQ9P8fUfX",
  "key37": "5KeMTkwGxeEXR4PjxFVzFkDkf9qHuWBHGV7HzbnP4c21uZXDkChZmT3g64wj65CudtrAfzzAtxvZTv7Sx6CK6br7",
  "key38": "5KLW8VwxxTUaqg8qa876TyvNx9N1pphYncWi9G7WJHRMFGAnZLgvXtJhKY6Y7u1A7dYVBQcJ2FCNMe8JFoFuTvJx"
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
