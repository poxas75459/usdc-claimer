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
    "cKeSfd8aRLvkCdKZcFspJZaxc4Cv6akm5mS3t2KFj2iukpr9Gw73MuSRowrHSo6c6r1C9CLQQcHHQuqkTeiZFed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VM7Abewz15rk5svF2XwvVhouaisMX9hHfwcw57pMZnFzLkJt7HimywnbxLpb2g4pKStiFtp2Xre6vyqL7nSwAmC",
  "key1": "3zs1SJf3juCxpgJTR9WqAmDx1LdgKmpvPV1CtWB7CqmNxL1fz8pnipzXbCbWAg6dPJ6QCRfJKvk9EKvD81GfamKi",
  "key2": "2mcJrQsQfmDqaWpRZztTWa6vTmAdU1yxLaBYZQNQqQcFgoWioesz1uMcoBNuDgPifo8yVTVj4mxUrqiZeoyzpMC9",
  "key3": "26uiBVa4Bx4oEnMscHBpjEUwvRFtHgqxFnUv9G5wtNzbY1kBwYhPkSceQWLPtP6fw7NGPVWkoXmdpurWwkowyHp1",
  "key4": "xP3h7gBT2RtPSnHijemACc4ubNxuYtgktgYCDaCad22nCURpEt3kYyMDmhju2PvgsKKj7k3FzDUvaX6Tskw7CmL",
  "key5": "45moTT1H57MdJRyv5eduhQmPwLNmk8ZF1uB1xzoHZYqxmK2JtArnUNeLFdycwzLQ8Q1feKNdSupThnqp8amC2yA4",
  "key6": "3GztAxwAxquRJPWCMBHd7DTf1fQ8PbhqehibXvBRiiic6cdvyT92cBvh8PzB51Qstoj3g7GaFWFQgroJkEuxKvFH",
  "key7": "3tyY1tHw5ZwZftHHACBhJLMaRvt3uTQ1BXpizEEMoVf5a3dqtfpGAXfsSL9qv1vHE9PJqKJYkwtWgd11cqaU4bYQ",
  "key8": "3ohfetF8ppiDnQAncv1TMtwZ63dKCpi8MZKmT9diXigxc6YyptwTSKadW5DRPgUT6wuKFtWFAbqx2hk7xBwBJZPR",
  "key9": "2qvjYoECgebryLYt9tFCmCVu8LJbqExq7optB696EZii6CvyFKjVtVKd1VkeVoDJ87p6WfUCrfJfeb38ZUZGQdZm",
  "key10": "2y1c3QP75udwKL9zZYZR7iVANszfVYaCjWVAYTJ4FLxTiADVvroXFpewvu9Vd8Xp7s9AzkqpJ6pa81hcq4LqpSYK",
  "key11": "4dacA6FUMzwG1bWwWFsNeWVFFEiKAs1LshTMxEGp4PiQhfQqphYEfbYRpLgBAgzhqhLC4dNwYcA8jp9SYa6mhzfF",
  "key12": "3LpRaUH8V74QTvLwdSzwFAMtBBNX1qpzRMrgCsy9PTAzRRUFn6YqdBTvUHby3wkneX4iuv6VTCgVqsQo6J5Gfxoz",
  "key13": "3KZPK1UMdMGawcSPWbUnYxqdN1R1TVDVFr5UmfzLd8gGbHFedb4nzxja7YixUvPRFqPCJd4e845vY1PQhWYxsEvh",
  "key14": "5BRMrugpst93MuwLodvvM3w8WqYkZMz5E3Jvph5WN4cxBuPd8GrxedrhPZ7sjZHVbJndDCu5sVxFv9jJ92fun6zU",
  "key15": "4mZMWGfpqncRZLKYe53TC5bSSFhyfYmQXetQ4NyiKtZsGopSRVQLN6CJ9igKYFHVYH4JHLGyd9KEf9ASUn8gixSf",
  "key16": "v1bmsFCBJuCkqmHwrp7NLGYftgSj61gUquF43KXYEfPTrhHjid9zKHgwXvMaUXn2Rnek4PehQzRREUQWH7yhgKS",
  "key17": "4emwF9RpC9qi7X5mWPBoPBorjWC5g5Bkt35RyawDev7hVif3dbPmmYDnBpN9iK1PKdGLPJFUFSCquGEst3axuoTg",
  "key18": "DhuGuQxoQbyvkdKZoFFunUExaLbAkYUX2cNQjWkDbvCZGvoMScPNjEScNA7Bo444azJYtHkPHfcpK5p5aypjUiY",
  "key19": "aGzFi1UmaA7LZxWhavvx2nhj3gVCv9A55nVYDEJeWwvjzA1WUrDwfq9q4b135ufQZLVk26L44XzMzMmJZiFhZnz",
  "key20": "56hbrKNhnxF8hySAvYpuzxETHgpfz3pavDmYMGfQgnxYqMtLCU9gtQBic2gfuJunxZZoD9EikccTbAfetAgQJQRY",
  "key21": "2X8TqJKVxnCSjgiUYiJALMo8qcR2PWXsbo9mbwuzsGdSq4xFWqbaRHs6ZXogNGkZoqcGBWRyJJa6MKcTSDdBKSAk",
  "key22": "2mtD1vNqtchKtKrWv5kBij8Qi8EkiQn7vWQYYpyNvS2Sw3696tSYp3JKuddYAZtJZamcLzxv9sSD7KUUHcr1q1At",
  "key23": "4MzZ8gDeTqoGuKM16Cy8zaqRi79VhbWxpJGbF19JkHpaQTbdRyDNvGgXh1GPA1WReCJXEuUQLTWHwNDVwSoxmfx",
  "key24": "5dcoipqKpK51p29AA7vf4rLjAv2pA689RRRXrVgc8ACXStPYUdKMrDfo6WhHb61k3UkeSda9ieqNyMemzAuA3L8K",
  "key25": "JVV7N14hHFx6HmwxvERtzqi9zBD4YnZhvmS58JvqgqsP1qsLn2SstKgg62n9yojnNiUj7CH9cUDAupDghgpXtVA",
  "key26": "3v5M4qNWVQ3SUine1iRgaXxB7NMgNLzLUKfsb55kh5NUEGuvEk1yBoTWMGGc5oJ3AiqV3U1yHonmwE5igxNFsFk1",
  "key27": "RzPvXorhjRbA5L63fW8UxrFHvsY2aCKMJEntx4ASbNBzTg3vDFbGVJxuUJ2tCSFNHvxmymYnZKDicqZJkScK18T",
  "key28": "4d9td2Z1fm1feHFf4namq3hMfHvFN1ab6GtkdTVJL2W4vHWkbBBvYQqrgjBubN85Se8u7F3BbiTvDKMsgdBkZtuP",
  "key29": "4w9HY4xWW72tdg85gctdHzi11p5PxypAJPX2hnrR4Tk4r7P9bZXgkPtfqX5a3GSBP2AaM1Zqb9WNBhRmHMjnfkjZ",
  "key30": "3hShCojArzonXpvN7HY8XFdeBZfQGKfXYHWrnYrJ5hTEWRKiR7CuwosPFQUSov4kAS39r282bTYUm9qGvzLWtbnJ",
  "key31": "26wYYX71UbbSebSQfUsBdaEiQ6ktCg5FFSMNKds1Ub1rMuCdScAoPRrXEe9fN7CqnEhbhhhWSVHA7juZJmqavFqW",
  "key32": "3JguUFoNCNWiZB8SXhBe373D4WA1EtYAoDJedXKdm8vj9waAeAmQFJDa9bWv1XtK6HJTY129L9qwM8xT5g8qRwMu",
  "key33": "29saCgiZQtd9fvVf8qPJcek7ffi3bSDwj7QuTQZepxSKQgB134fvADeq7pksJUrjCsrCALuJXeTwLHiUhxp2V4Y1",
  "key34": "5Np1zkaZPMw11gJxAa4ab5W864V6TcbVHoA1kJyJnAzie9VTxrNd4n912nZGjH5QNVrwURzcr79DARD4HmMUXChD",
  "key35": "SMfpUVaXCWka6AcxC4q6ZuV2DitxT9PJv2dATZzePCjGUL1jHF19i3ATi7p8mHrjFZHMcYpYVh9HvsHWrycThN7",
  "key36": "zjRkaeicrgKf3w3UgRT5UYLARG2m2gCZTnGpjnwkb4sap71ZLBFhUWvardQyNueKormTkC1mV2cE3MUGdzqx82J"
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
