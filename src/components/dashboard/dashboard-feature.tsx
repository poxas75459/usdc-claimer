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
    "5RmqpSUh5RcQMpq2Ui5X84hBYYgyngG8mr9zVnkvAiTHrUnZx5dPgk9QmwJWrSjDKHRzRyGvdMAn6ht2Ri1LDBJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5om3dbWWvyCePWxyKKZKbb9phXMsYtnUSmPNiCZEMXTmsXWZPwtYxxqhoRpRhHGAgHzAdLPFNrmEofUDEJt9mwyx",
  "key1": "2SeaQ7GtHP6ZZuxwuDYNcjcrHM3xTSuUPyKqVpJkM2h7amygP76z88cuK3yMUE9TV113375NDeX1i5kmZkSi5nvC",
  "key2": "4qtumrTkp3GTfNnb4A8ETEdmqHqRM2tH9tm5g25KuGHMY7H6q8AZHQ4k5D6K2djZio6TgwN76JWFtL8GBHVCuzKp",
  "key3": "NjYZr9GoL8eUbv3GUXqdDw17m9xe7vVaXqwfCvW6xXgX9g5yziQ6x1KT8StKDs53jzqHsQzm8eK6jiVRiyZMaB9",
  "key4": "5eXThH8YbRBSwC8ma3VtvKPj8mnsyKmpX4xDmS3GpmsGNoTB58gUPHLbCviMbfHvWB8gyKVYWNB4eNWXtoM42ehN",
  "key5": "4SmDWJFu2VrE52DsgWn9ATBrUx2T8pqsaL3iqYK1pDj7uXrCxYjeDPBacjeLBYAyTSXFdaT641MexeRCsF2ivcnd",
  "key6": "3vpkN1ZkxqFLw6TPFa4FVsiBN3a349kRsmkpnqhFYpSaS75Z5TaaHzgtpdRBb6tBi7FZX8FSWXsFvn1gth8Wnk2F",
  "key7": "7inwARpf6a4mBHj9PBopv7GUqMuwD6mRumNQvNMJRDHG225Uhq7VgdZPtGQ9zNy2J9mkj6TAgeeGW4ZwyN6WdLz",
  "key8": "9PA6GTVZZtyPWaJ1SGEk5b5wohap4Qg5wqcJdynWAVrWoXW551nrgiftSPJD7VZZm7QF1yB5FVpYEYC4CW7FPq4",
  "key9": "3attsekudJim8mqCHrWwWnSWMjXJK4HY8RoMrB6HgsEkPYY8Ud6y6SpbQXUsaFGqFKWWV1vBxRDm4pXYNLFF8AE9",
  "key10": "66A9anfF5hfYRnyZgrcB6QiHNBvg7sTVkT7F8dTcLjRL4bdYLVBQeBnEQJHc7uuVq21pC4RKurHRm1RWb7cdH5z9",
  "key11": "3XyK4Y48HwYiz36zyt9btteE5sRuacGVTvgTXZqMRgPsradtK2BW2ik7HGf3TNcpu6zTB3mEQduv5DTTPKDu3njP",
  "key12": "17GnPAGNkfQBbMVN3v6VmTsLD4EMgrMTudAkGb6pBouN9JgdvBQfuBw7SQKsMy6jrUddcsiPAKYdHcrTC2tun24",
  "key13": "2Uo8bziXf5prJsty6jb4L4nL2SGu5Nx6CzkCMAvf88aeem7PD6Cmyo8x2sRTmja9jqUKv2L8iQyumgC1WgyJbDhV",
  "key14": "4qye9A9gT2jUVUmop82D9DmHxXdaqRcUcoZqTtiw2eW5CV2NTxhWPNT3SuWGQ8BoJhKPNQyiPzEe1At9xvKpbZxE",
  "key15": "LKkc5D5yaQT1UFqDnobHLYDMymFHuv4qCqPYrwf6qm3ZPdsvu8mcyvCpFX4SvRjj8MzHLGBvMRp2nQMwKexrc7j",
  "key16": "4B9mXfhMZhtUHQQYjDQx7oAqXMD7CXkjjWH1oieZbgkniak1U4XcEx6EusrHmzuiDsaqMRAUYDnMSeXFkfdBXBTw",
  "key17": "2KiWQ3eFrAvFBp4aFchzjARQWTvhLK3FZtVdKmcXY9NYX6y7q7QDJcd52n7LfqZAK6ReVMsTVxiG4mcSbVKeAwyp",
  "key18": "3fVxQAoziobCnjAbcyoScQtVSvnhXNVb6AojKzH387f1uKzodUVkhC3ZcFAcrCxAVxZ7EdzPG6J3oUrAPqpimdpa",
  "key19": "3yKQG2hcdortRwKyXWzdBBAt9xaXg4mEw1NdNDd3qtgdqSNKsYpBPnHaXuQqaKnuaTXC9vtxe5z2ZUCZpNSf7gMo",
  "key20": "5MGxNjtptamwarS3Tdgu3gNcj5sRRmWFqccQbjFyedyevULwWPuVsbPF5grQygAM6kDyKompjrjLnxac4ZqpYyfN",
  "key21": "2DmBNyudzt1fjBECJuEHWT69R1ZnJpLvmRnzzL2Ajb2DVV1qdrgraLeTtXBrxwNyEiBYw5aDw9wj3MdkS1AJi9NU",
  "key22": "2iE9PkvKEvmuUieRuH1WpZdQMXhmUDdmpz93DGzHtEic83FS7J71QVy9HrsH4SUFoGnKQtRYAJk4e4jsWhNVA9mR",
  "key23": "uRNxxEoyYAvAHZ7613B4zaUF92brQaFsQ98rYcJb6GqhXZ86f2dSwfK1FFfFREL5t6yYB6mPFVQsjTHXKH7QovQ",
  "key24": "4G8QUpr5WaLBwbh5WoegB91e5qGa73fwbRx67osQFd2rLQuu6e86mWTkF9rMkAdAmdoQhuQT5NhwCdRfEHqGXLb3",
  "key25": "2dXKCZgsDaozxZLWpHqUwyEU3q23v3NF8Zu9Rne7QKov49oPfNzSzcFpterSUXXA55DWQTRYXNBbpNCpbmp8WPtu",
  "key26": "5Sx3AAs5cB56iYtXJMh2BJ915ajm9edR3oVYta8QQKXUfaCJcSgX1mntZdYhcLvQYN4qYSf6kD4D2TkoSpyDDk7k",
  "key27": "2udUeYv2r86Jui7xXHtvtUE315sinz3sQziAVKKkZczzR8oFYkEo2o5wBYNhg1JvFuWk39EQMB6HEZPwSp5h5Cca",
  "key28": "5xEyxFmJsiWwBDgFAfz2V7jrkM7HieLZfJfL3TJQ8idGTU4TfnyU1CPo3qG1w7AZjQLm5rEERhG9nn32VTbUth3o",
  "key29": "5qJfENdf9oKwif6NEd7bq2KmsydArwfaJnhd1vS6U7bfZunaRfYZCKh56RWi15EF9SzBw8vJXDuZySMB66jYcS55",
  "key30": "28nHqvxSLwamKmu4mkYUE2nTsGJiDnAp6rKKvWMnSw2YXQqeifYhD9MHsGtJvzRHjnd7zxUz8PQB6i19KeDUsHt4",
  "key31": "2yKf6FBb6qaFHP5MmMvs9S6jKtJhRz9maAASyK767PX8rTjG2PuWePpEfHer8AuBG8CXbn6N2C17F54Ng4NeUsk3",
  "key32": "2m4r7wDJF62M5fnkr5cSZs5DE9whAYtLv5hiLe25gdEW6iQ7Kz4QzLvPT2PcLifRBGqUmwspbiPsUh6YTvfuRwSp",
  "key33": "3GcRQcnGqcNobTXeosqi4fJMoFN7pnCCoLvnktg4mRugTjtm33Hz82745CRQqnunxiU28Th2rbvhRexFgugdKg1Y",
  "key34": "34pYT9i1ejCGbCwBVSFrvHdevrSyeja3q6PoKN9mgVxrL4B9Vr4vGKETRu3Nf1EDHp8bKCR7EwLZ3RbTtasd1sac",
  "key35": "4uZGpSwuePsmEBUW5T1ZPDFx8YeWwAw1qrE2ApGz3GXq7aLVb16Z6aesLVYhp22QAZGT6AsdG4RzBQg6aYTXu2qX",
  "key36": "4bLVBpAuCqhLFUjEFaUjm6XZ7kfhvSgvLWiV22C7AtTDkeET2AdsDs9rb56xK7Jv4tw32QB5Atj4p9qtUyesK8uG"
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
