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
    "3eqGysUcBXdFpNVViUaG1TL53s2SUaYNUgfHU9NhDEeRMiJUyFwehRVLG7wFQzaMiWjUYuK5pDuB4X8esDUDFK6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kb9o7zSp4TfKDwXCehQxG24dXscg8V5K36Wqw2BU6rU1Zy8LR1WEYj4bnGNjybSfzqLeNqfrTigw6ig3nwgvWTo",
  "key1": "3HtR8krwfDap32HamCeDv2eK52ZyzrrpxYRXQFyVAUgcwXKMWCR9fM9nZCtYNXUQ8a64LR3mh178n3GDBUkuejpB",
  "key2": "2qGwUmZgsstXmmUvRgjDAraVvg4p8ZdK6yUM3FvRZpb2yZMChCoyDmiDz23Gr8Hg3V5mJ4WFywDVTqj2UwAqZcZj",
  "key3": "4AnY7fBZh78XJ3iTyZYwKVDRmhQy87skeGWmkvAMxgaKAMax6YJzH4P335xVRNnXjwEWEF6uLj5G2LFfDAn47cFX",
  "key4": "4ZLwhqQQESzNLyxZ3j1FNEKYqvyhrGeuSJmx5gRRVzSr478T5wL5HAAaJPb4UsyGGbY7FjDLJALPXkYC5Ea1JZBB",
  "key5": "3f2mA9sWRMyH7EuXc6A1owxC7aYhjgWpkQrJAT9k51Qp7X1aH35k4BkMVATiGWGGGaJ9ziPLgpjdQTgq6AKSnMGr",
  "key6": "2AW2MJg9wbTUsVRJua2SHT5CzxPZBLiDjB7hXXLpKLSCPKfpCvCBsMBZMQ1FKCHqZsidccURRnFiYXdkkrKHGSyi",
  "key7": "EvPNqG2unpW9vtg95feLCsYbgPRhaaT27GpBZ8mxZgdHEfk8Qc9Kr82paps2Aic7cKHiuH5sRWxDRP8rWDckwMb",
  "key8": "3vtj81C4p56QibaNKDEYjLNTFR48arQWiw9tepXBwiM4MePM9NrTe57qJ4H3PeNgtAiguUqDWoePaReYiGjDFMr7",
  "key9": "M8hRfj1eanvXjs89Ntji6cQW3fxKtpnqovNMW1aKhn6dxPEeto27Hr71ksh8ye9VFnDn43poNFe9xn5M4QUoBkC",
  "key10": "4jSu4ynnyMnKJGazDFUYUCM46uFgASHDRn73gLWcBBXYHoWtBqNRSNbkJG5tiJ2fjaeLGdRq1JkB71hhF8sBh7U9",
  "key11": "4UoH3LTWXzrA46ovMspeXyXTkMPa2fi4ZGdXt4B24GcoFcNZqks5JiiKzv4sx1v8E3enPNKkyV3MBMcE9uAWCbkG",
  "key12": "4bic5Q468voZBZSj6pStDoPWpScKoYu4TpsT2Fujea1A8Cp3jABaAmeLS6GUyojFPUm9Dut3Jz97eGG64s6gTntG",
  "key13": "u2TxN8CLKXU22ChvmEgo576qdjEJ4BKixjrupTxhbWj3kZi8zN6taZoKgEjrXrjra8cqGyotXvsZwMbbYPQBGX6",
  "key14": "3nsohUEXdMdjyoNEn9fh5TUqM7qmafxUEQW7PghvqdYQsGtqQBQozx4PvofvvAHgfNLXZVthmYTLu7K63kDQuQCg",
  "key15": "4dDNLyjBoKZVvMzwzgbG8Pq6482nLj4YEUVk7LTwvv22x2yHA7KPzxFjquEXDYwFDcoczDFYGQRrwCJUJbnt7dbX",
  "key16": "31mxmBaVWtqJ1H1AMrRP29ESBSm6yWD5dUE7Fxizb9qKWX5aaQUH1MSsxLLS6oLY6mgPZmXUgvT92E73yb9YZJv1",
  "key17": "3fXqpipwpXH5uDQpgh8VpfnKCqjpweuqVtPeKBoqdaN5io3ATRCNUUqo6hJr2wwqNn6qdTWhkUiHUcnAgHq9Y1An",
  "key18": "4DLy6ffuVecKyW2cZNgF7e7rqdrdhiuXXG7CjRz1nJEVwDTY4jxEhE4DHaHgmHRNySAmBJG4njyqf5GP1LeXDFq5",
  "key19": "3jUWeGA3CLU4B76tpf7wmkftUkwBAcVcnivMjP3UZPFMYy3pWKNgexckJiwzKEAJB7GJFpPYnmbkaWhoCRokANw7",
  "key20": "5y4dP3pWw1gNVMwudR6ZYfwDmaC7CWFFdY3UcD9ztvMjXtwhDEcW2sbsBFRtz7V5oE861nuxmEoW4zJrWNPHhx7t",
  "key21": "5rm9xsCn5WicCUGBWnANnbktxg9gggZqjRWeJp14znHZtMgpgZ7rjQZ5k1EfAV4kfyffBHLBRfHJACynbcQeqfe2",
  "key22": "4eUse9vDA2RhbMGA1i17Z36voP3MpbBVgVcxoTiDRPQcKe3wV3kq39YKHwxUGmV3Q5GHNCoZ5zmryvegxpxMuVru",
  "key23": "2QrRxEtLk3nPF3CB2ZQrio3VnD1iBjbfXZk4kQXZVJ5ymcC6XqvCKqqX4h6FGKTjBK5scUV4KwHA9rWDgVm1RFKU",
  "key24": "5roJWeZjdRHaashcyogiELbhWYH7VNfgb7LRpKpm1RBTpn4tCJvar2tCLdS4VS2Meo31DBKfoimaGgS8SuEEZYou",
  "key25": "4mnihctFQYpy55gm5UPwv3hsZM2bxQRyJjo6zujX9Si2DF5XqoMzsZMxbXpy9v9oZMWWgGr7Xe1VG5ak8uh1QbhV",
  "key26": "enifvR27GSwVE9Z8u4sQBGC97gvzAdvHo5JTizJpbPGoQFDkx49A9HAYuLhGn3ALgf8DJAyQZjyzCbQ5Sa3cjQL",
  "key27": "4jgnaSNyR3hux8czDfy4fF9uFZxXjJDCGzHvFxTzJZ9kW7YQGuZrP3xKJid5AzzvyvT4pQ6rj8Z8ZkCSE6yUjJAn",
  "key28": "3tW2o6cpNRPeFudAPv5TDJs3ZAaC53bXJbNU2UDZr7kA8mdEHRcBbDySwWbmYve9TCYRa8XsX5hCNZeJhMxG3VoP",
  "key29": "2j1QPzXy6Ho1HcJhpsQ6N6EMMTEp3naGn9aAECuVBkaedEgMtzvx3LiktG3owjfLvjiuQzcwms7H51d6kzi259YE",
  "key30": "4jvj1VGCUrU3TVbXUoZGELAGj9WbEH6fch9ubgFp9qdHkfdqZMyRvDx5jTARZeRW2ZQZCmCrJwy2NHXSDFZxysnZ",
  "key31": "m9d4hXg8kMhUknKmjBSri5xmT2w3Pytgspw63bPRfwEsBN7N9smBLbgEBvvCMDz2uQHrtX4B3gSmCoG9K37A5hR",
  "key32": "22mWVX16Qy4caDW3pm2w5dAVX6CZNaF1MQYhgRFA5hncqem4WCxfVFTRaBd4m2dddLkaQbkbJiy8iUsSiAiu8zNf",
  "key33": "4k7L9HaD6JAmVLAPBaDWSkRJUtZzxXzsFTGckm7oNydaamCirmwfwjbr7nzXykgzaB7jjRfrvbWRxu34kT53e4cr",
  "key34": "2wnUuznSTxtM2sM5yQS1kcHKFKapHv75pmKwRyYpY4v8LfJ5FC4Ftw9QBLU1Ycz9ydGkRvy4JKxXnKoGk2XWMjKD",
  "key35": "2NBfZVomNqhKDuVBdMDBmrKfn7uv8A8KrymQNAyNscHSVktFwA8m8ME713hRNc9y95xFooeUbU7nQzabDpXBGide",
  "key36": "3PXe6yRKmes3Yc6WwQybMNip8y6smy5EkDeSHgbdyiCj2treJZpUWmK1G7QzTqs2g7X9VZttSWAL7w1iVRCtcPUW",
  "key37": "6mimVP6v6RcQa8q5NAPmU9dqtuXXaTAX6wrSpcLUm3ZoHeQnWsF2JtEbm31xBtYpnqh8UmK7dRh9R8ScQS7UBBG",
  "key38": "4rq4g1Cch4ghwnmyg2U2j7Y3tKduQvsdZoUWyJp6qH133iXV1gBnadsRqZC5KQgFL85juW1ssUSuXabCmQ1TskKg",
  "key39": "5a19yGkNaafdJHXCE27TsrX4Ko6FHv8M4oYj2LkwKMxSs8oUkJb1YKZ2tYp2BoVqym3kXuGbCwyRgiTv7szu9XYU",
  "key40": "V9mMHCKiFZgHHuodErX5jLgGsDSPaAcN83qZQnpio7gTGPPK15gzQo8q9Fn63QS4mFyQRzF7Z8vUsssb7xb39Eq",
  "key41": "Ahiw9BNLsjt7zksDhobFBMbGRypzVGT9MBRBxxA38ut6YgsmvDVeTpENCGgR5KSi6DDypLUiVH7B9bdqjQG9oSK",
  "key42": "2xLqa5UVttfVwfaiiHm5omyu4nrw4CBXri9hwWSeKXXLzoxC5yxWnp9JVGq4ddvbDBNB7aZHcHU3Vhi7APSQ7Nfi",
  "key43": "bqEYNYK4WSs2j1QCZTJRf45ceiUixZsX3nCHsMsGnHTbXCnHQ5cvL7stHPzrPAun1CrdzxzovV51VgcofkGdY2r",
  "key44": "3Js1BRLkbjCcTmf6T4x8ekxs93DuAvMAnBPzAVmraRz2hnc1DKW2BFFDwbVemZjip197jagjFT1ZE4Qe1JmGdn7B"
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
