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
    "NLHobhobK1HLBDDmkF7ErugPBnZgEeVQ8QvbBr8raK4xszsAAURvEDiw4RFtBjfYVsDbyk89s5evHwfeP41FTwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JzdjzK5ykG4oQVDcdfspPzCLH8ioF8xGkscn4DAqsVsfK8FfJohPmKEwqJTF8ArEW8MHtNGj2Du51BBsyJA6gmT",
  "key1": "4qnnyJYmHqcMCEsy3Y7EDWJFaPGofZtiHGDirXJcimDxrnXwphm7ozWbDLTDmFqvtFpyhTieWjXyQb9hTwDxmDSE",
  "key2": "2d9QZMRoLTDt3yH98tFQfW7UngFUcQyaZ92Us8mMeTLwCUm8wm7UTSoWA5QYgkduvXukTAJonP62oqHAtjjzazwg",
  "key3": "5xUFdWZUyS9b6ky9YKM9HyzUzi2zqf1pTreg9xjKmXHsNUA4JGo1iAyqhxjZmdDr4rxgZ1EksXJF6sqpdoMN1CVa",
  "key4": "33g5HqFXqdFgS5n87sgs4DgULuJ8mFXv88SRDTiYLYn2Zwuzj6yP9Fr7BLg3Y14d7hFGS9SH9pMQ8YaKHVVa9nQX",
  "key5": "5t8RYd1G2Rms1yXqYRv6eTJAhwLX6Q6paRZVqxqvzT6HveiKBVvK2o6cwtut7VMVULPVAmjRtGxcB7BCHH8rdTdz",
  "key6": "32iRDMNSmgCMV6bT3zbtg36kuTYYJ8B7ajUGcLnyEVECxNZ9x6mCWiHuC5ybRijs4RJMGekHdLYM1qTqc3FD1fJQ",
  "key7": "5utw6FpuuQU74jGnKFmy62ArHamufoSFLDCfRVaAsZP2JNd5azvyanE4SxMQDAy8Mir41Sr6Cz2n9a2UYfd58hz9",
  "key8": "eMUxdoP7KC9wWBveJmPLB1ECxkoNa8uda2HpETGMPJDMijrTWBvUh3oRAbJxHMCRmYAzzkvuNDhFFgWxpBtK4Tm",
  "key9": "LqKtJNKH9bQKhkyq5dwaGftdzHJiH2xmp3P4DFdbf1iTtq8zSR3FtDuVMrD7BdZDLMVrbbGd2RsyZkP2L7QtZgd",
  "key10": "2UjS2WjrWuHRQB8v4Vs8EFffinM32UqPKbpqWGqFc55A5Nydb5Bb5q85o5Cz2BZkm9fysoUAWjtNy9wRDbpRVvfu",
  "key11": "32YFBFYd5DBj64XLaWJGqrMmf5D4qf7cFxaQe7BCi9vBLjcEdGioFdFVKVYSzfAo5XW1zS46N6s9yPhkNkeqtiqs",
  "key12": "5F6hGuhwHStFH5a821dy1FCAmUQ1CHiddp6Kf7wUcYAmFDh5oTewiekREDAtnNMKXfwumDmHiUjDUivEGvDRbfu1",
  "key13": "4fooBGSjU67wGuyXeWd7yWBh43sSd8LHUQ2LMEf2WrgTx5Z3pNC19ZonL1Ng9smGJ1Z4ALPtCjqPJHDdjcP6Wmox",
  "key14": "4ZwBn16f7R6pMg3xHh7SJgEEfAHh4KdyC7VP3SYkEo6gRkt2tzR9H6Abgu67274VC1DZTWS61xQFT9Ghwpqg573Q",
  "key15": "5ygvqRyo6s7yNQwzFTf9DjiFa42E3zrnH4DAXau5hvsnrv1wZk1xmRaQYsNwurpiftnqCSQb4h3VF6GMaDwo9rps",
  "key16": "56vGWf2kiKNtiYhvb9pkELb3ZdKkGYgFLG6MXWR7RbWCvoKfTmropbzUck9EWUNJFw9VjqexwCeDDMErgCxGjPph",
  "key17": "yt97rhB7S9uAvQ3rMw7CeDE2Wj16jnfgRDpfcnr51y6gMjtbqUxbkMVRR1Mc9NjAo8si38apqyfd3UfWUiEoKQr",
  "key18": "78z9Ls3vDwTWqcQMDw9r2WHWxQtHX6FuYhACjVTYra9EUExnywPeh64AT6HrqRshs6BQXtC54iiq7g7uozS2Ycb",
  "key19": "4VJzRuUpXtJVkbTjQsEm47RtFZ5K1Tinizo8Z1An8QRrAgX6Ka7fyx3yPyHLTrZedUvJV1c1JuFxVu5PwDe5CLr8",
  "key20": "5PJ7msSp3tqUD5Kp7TysB3VU7xnLvt3ztZGKtBySd7xNnRw3t2R6XzceJdXxfeDFZZsbFSxdhDCy5LpBzr1Ui6qw",
  "key21": "4VGNNPzX1PV5mNwCBQZo4pmBgxMbKk3iQ7X8PaV7NHEypPoxZhupWM6twgkeoz5Kang6bNNoKyMA5i7Vk6q4Rjrn",
  "key22": "5mFXCD8kYyShBEgN6UMhnM4zkVqiEkYVXARjeARBJ7vwzC9jmaC2jydysAdQb3SZQztNxCKU2tAN4zN4E1BugMsT",
  "key23": "5QCch3gXaCSDBB7wGdiuC7oJigASTPJAmeKEMdWmH5x1nbfzbdUXCLSkXBb86hoCxkyXukFKiB6QqTZsLKo3oRLt",
  "key24": "5mGHoNL49J1XJDdg2rhai5dWwWeoZqfeLp5MjtfQst9gEYX5Xp4bFDLCT4ZKnFRSZ56KUfi72ZfdjL2kUprtpHv9",
  "key25": "4WJBEdEzx2jwutiy6NA7b1D3zTbHCLa9NZnKsJmELWx9FMZfFHKfU5XnUr7xTZt3mXgBWL4G5kHceKJDAJDAkr1v"
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
