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
    "3NEdMcMGBuvobuXFQ6rbo277XctEtd1MymWGhBiv8FR6HsUTMVJcXj2LdgT2A173P5kj7i2KErMAgtDjWKqsrMH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaJtQHMeaxmdYV8pcftG6uaevr6Gb35ujK7J68s5cUN4YsJPgDuJV1S1vSsifmnLZuSuarAv3DCg7yYKCdC9kpW",
  "key1": "5gvDAzj3bmQY8LGpiU4XhCzjZJjPNA83obPwvubSJiWH1CeTRP29QsPgcUAbP52Z9TpiLCX7tY5NwZQ2WnHB4DnD",
  "key2": "3JjutnDFpjDeKxEQV2KPgtYezXzi2RA6xzskzEn5qzzeV72gdgeFeEMBCEf4HfuVe6r7gjChNnUSTggeWKRKhrRG",
  "key3": "5WaynKQqPjzvGdRPE2t1c6sbbVAWHt5fUJuNrLrzVToA5ENVs8RYpxudwMaB5SqdfqZzkH8dfU1N639AsijSZ9tU",
  "key4": "RASx3PXL5Ao6RjNDyL1sBxUE6ij5HR2g8tC5fLfN4QjGwCXZbGKrn5YLL6XvVCosLQ5g2YC5NAcMVWjtwUcXwCd",
  "key5": "C9nFrCRRSYyVbmCvhxJWveNQCTAYoqwbr4MEB6dR23yYE9pryR2fhYakoVQEFkfNF75iBrbxtH2veJ16aZ7UejL",
  "key6": "34d4KVXSCAobK6QXP8muWVnhzw5KPyTBs34VWuYqqtcB4PcBinFUzfX6iGazbksteL6T9jUH7WtHh7ocoYd5bLQY",
  "key7": "3DptNd7Hpx9Pmd9CjLrpBr4ufEbvF2JNbzRREB1YyXUJeXi9C1bYVarCrXSoxtjfTfBgTyG6pxYYdJ2fXh9Ej5Aq",
  "key8": "5NgDn1cFRX2pnN5DWkRFrdV1kAGwBbEGAUFJ5fajsD31Keyebk5xGfVtWT9UUzR5pMz6vhRPKDfGvURTv79gvgUs",
  "key9": "4y3WiEU6ZdV5dpDZt63JyhKNryzHvKVXzQB7CwkVedK2UUeKzeRoGvdvEoiLxsvFupwozweuJPKgz5Bdr4BpQqDB",
  "key10": "3MCgsXHBcqu8XURh2bWUsGm2xXVfBcGGVt1gcaGFLFpaZgze8dojEy8rHxsZSQaLAmAtbMj5JzH7M2aXVfcoyyxS",
  "key11": "2kGaUBnVKUfrBuhNcGyKLBsbPR7Ly4RtmdDPhysFLGAhTgn6izgFgzobhvZtWPEU1WTonqsph9PJWkEiDtWuf7WQ",
  "key12": "KudchHa3xKWG4APtS3MS2hY27AcYQLs4rTBgAAjQjtBTeSg6FyqyXbAmwQvARcA7tpfe7XJDqx9ZtX1LjN65YoH",
  "key13": "7Ce7dsssvwnyafhP6HYseKv4CPWBUMsS8k8v59eYdce9HWqB5p9KofKWgv5zb478uRkdKbNaRozHXDmoJUAtFZN",
  "key14": "4zATFTFuL7XMDgSThRa5EdmhnxbcjDcwrPi4A6x3f5EVcTJxJnQB9NnY2AedsyNAePPuKGw3H6BqqL2QHLYANka3",
  "key15": "4dsgazkJwbopBqZMbW7UfZcEaWdPiVZnfeb2LKaYfdXanQFHVC5qHvUcwVCGisDqmSQwvhN9EAKjdCwiTKDCtTEc",
  "key16": "4vk3GJme34gtcriG8hoako2J9tYvdJ9rXdKdJGjwZGg2niwRmfiomMELrapDFBPW7uo9hg8Lm3KNJG4C2FfFp9c7",
  "key17": "3eorrsyPqp9x1wgvM74PMCXuFBGragg3K9vAiEiUjrsQNVnXJExVKNCDgHGEQZdCWgStDWk4Bqw5km3rZveNyDzV",
  "key18": "qr1vGLJ22TYnmxaLv1G6NFyVofJ3VVbKKiPzi2o7Xyt1m5ExfuxGZhmazaiF3bs1iLu648ySU7wavTye3muHVuG",
  "key19": "5NE4YMTqZRnkuxL5qkvWz9nn3ZEhuX5j13ibY5oT7Yj4Kbmn62V2WghZ7AfTHKzJS1m9yz4QNGgRBxRiHG77BhfK",
  "key20": "2QkTysfWXAkV4chhnNtu7edibNyiwg8ZuG7D5fQxGEgV5AQHmRnUFFUdzfYNQeJbx8e7ya5rwd81YXyrUg3txpAd",
  "key21": "2tWYCjJvRv7yvPNiuZvtKYARW18of3zq8Bwt4bsXuwxNhMTSxQuhaby15xpP147EHy4SWMmZJBGRT4yFdoRkRfG2",
  "key22": "49XzmEmRxxXoJpZFPc3t3UA9ckf6D9G9ixTi33wUpFxSJtRMYz8EyAkFZorBpPs449jcRMmDNmNvMQRtzXnKH6AW",
  "key23": "4bGA3LpTAebDm8epMqZ2XrwGABnGvDTCGD6MwLZSQrigrrfuRecbQNTfQRzjXfYqMTjKST28qJzLEmMjJm4f5pQM",
  "key24": "2APpLbE3Nu4XKX24UDKhNRCHZKnsY5bfAiYUqSqHSvhTVrsniaRdYcf3QYnh7RjUzKi1TXiiRL8V2rYFq3ypFkxR",
  "key25": "5WWn4EiBURhR2UCVKaVkrVADgLUHuRK9Nc82xK3pubac1aDAYdU5JGb1tAEuUS675LFa5f7Bqu4SGDNf4qUL6nF6",
  "key26": "5FrjHwytbfo8yE7Pur8t2Jp3azSHov1WqbycDmg91VfhL3xn149QNtd9kCWNdJ1141yi993YWrrbLHXGWsqcEosD",
  "key27": "W7uyDqQZxwffYjXiJo2DtiX5C4ac9Ugr4dGHTdJivR9fqK8Xb763UGnw6GRs5iHfvgAkKi1KbKGEpisiyUCKJWn",
  "key28": "LBa54A1SoSSnVDnRXFzRQkxx7jjG1wXhG7gzk6YuvLj1XNd5rUiy6ioFhrHPTamo78jj2NnSw6UfusUJirr7put",
  "key29": "2smoVhsy6zGM1CpBgEE7QTmE7nyn7FfCk1WV8a5Uuc1oPdwtLTqzghkGSDsU3keUMpj1cY7wUZJo9Ws15qPc6udD",
  "key30": "2aeZ1rnqtX33D9abowggnEAfKUzj2MzsaT7uZr15VdDfFvVgY4E63rEgVbznxtMaMEXj57kfjotz6tBPnnA6MnYP",
  "key31": "5ZAJBjgoP3B6sPwQEaunkwenq1utdbABqeToFgdhb3dkuhW3LNm6XFeA9YB6LtzCyBEgsxYYztHiwSAK7uq1XzWc",
  "key32": "3cib93Tq1EF3gjbDaKHFshvf7m1nhSg6Tpte5ds3EG9bmSqzbX6vpJqiEUHGFM1zXnUdeHmYteuvTW9jBTJdRXUU",
  "key33": "4tDrVGfz4scFqLbzDDi5gbnMV4QZmEkairrot7K5aV18e9vTm2ivjVmFjW6vioFhLUMpHMHmvghNBV5he7V3bxLk",
  "key34": "RaAdv4eYLuhjF21Cjf39Xo7Jjy9me8dS37XiVi45tFFCHR7tq63rdYqMPqD6VsH8WkYY1iekDpEzc6WKYXZqZSV",
  "key35": "5EfJmt2XHNQ2WGKhaVonCbqfebrHAbk76M26R944mrN5Bw969iqKBKtF2roikVvomGfMQUTJNoAFTvM6LyGupbzi",
  "key36": "2HKkqq31andVCGUCwZ7ZavGnze6rSGmBtYtpA65M1dLG4XvvC52hvgq6WQtXfdAbjx4rmWoqM3nARCHZDqkv76HT",
  "key37": "53B4Gx7rQ4ngr85ieq42Fcvt2TrUaYKytPVnHs1isMN4oYbAQ4dM5ad2bqobRwvtqfu3CCDxMQVS3yST6G1HYDw4",
  "key38": "4FH3rNMnkrtDGWkFrLhkGwAKfMc1usx9dZDZnH3uvKgteKXNSDTMZCu6RZHB7KVZEGw1MpQYgAM8DyR6rmkp8phT",
  "key39": "AwMasC5HMeJcLz6jeoTHEhfNWLrn14F6rivJU7yWtScFCPHSpZzaWb294dqP8xdTwqsW3jKsYieWy8sCTE88y4y",
  "key40": "5oUqsYxKbpTAkB8KUv7eADxVWW2RGgnPeSh1zjnez4zFpWrQznwbWgQ8rTkHLhA8vDMwr6Fz3FgYH9q6ZNQhdKG6"
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
