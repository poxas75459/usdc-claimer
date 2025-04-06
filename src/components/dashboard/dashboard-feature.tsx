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
    "27cTmZ68NhcRy8XKtLNYdBZgDxe9fwiDjjwDimkhNYMSk4h8Mkn6AYbfGaZUiz2yncjXa2ECCuhRfXsiWBTBnZGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xniEYaBaSJHYSzKbxVPVGXT3h6Cu7m5K6Gx5V9Wf1RvgLoh7iiU7PohV6GUT21MP1dWAQkc3F9dnGvc3rk5XKc5",
  "key1": "3PagQANr1ZB7daqNJD32Yg5gsbWFi8C4M2EQwbQhe1rn25XpCYrPfR92yDEFeBJDiHtkNru9SbM2ZZe8o3LZBxMw",
  "key2": "5RvCTSPn3sdm2zVQRDbkx7agAt742bbVPkEhi6DR35ANt1cQ2cJ3rTm83mvENjLa97rXuzr93pcPnAHCP5xzm1Rj",
  "key3": "3WiaHkc6tXyFbiZQkRx38Y5QJjNQwgqaQENpafVNNwDKsrNyQkPAH6wesqVggbURs2dkN1tC6L3hcC1sXjdxVz8V",
  "key4": "smWt1GSsyhx4pRJaBE1zzK9HzDKfmicE4p79Cn8osDB4Pt4TYDYtaVV9dHgyN9RQ8L8veheLEs42rzUYba4xxz1",
  "key5": "3T6QcdnQuMH7yWfRq1pjZSpeQM3MPxv6z9XijWUnzbb1k3EKTwYLa5K6hRWd6WcwiNmyyxjEdP8Pa3xGptakqmux",
  "key6": "28XUEkhQEXGWfpFNFhpfJV7Wk8uJAceuG1bcR4hdVnQrkqk7WAoqLhvLsJARVdXG3e4JzUSe4aViRNWGUisPp2S3",
  "key7": "5Rj5RnHByw1SAvnuy8qMr7z8mwd4ruBkax6hkkXXZR3SrrTEpupurWySuFDAQanCSR3spknz4fFLKxuNdifU8noe",
  "key8": "3wGro7d33DnbjiCSYK5qNfuH4EWJnJrommgahLqovHUn2wu1hdUScxCH8Ph9jN5M55i2YDp4LZ3Nfv6Quqp18WVu",
  "key9": "5hLU29WWHodBmMTd5rzfk1m9GvSpLp49NTEZkfPG7iuA8cuB4Gi1qbuN6nEz66Baa1h5DUnSqWZ4VnjmNNUsSTv8",
  "key10": "fYeJ6AddTfaTnZLq5quDXVaSAD4BwqqbhGRT22Apx23o7wvqhgSFqeTz1yMjs7Bp3MWW8MdYAG1qrSueo7fiZif",
  "key11": "4NgQjGZa7QPb9eHKa2yQmDytZcwtK1uWTL2qGweWsgPiCVmNh2Czytf2JYAGNKMTi6XiwdGNmPU7S6hXkcSBqfoG",
  "key12": "3PYYXX49aQsSHmuSWBkyDN3zoxuhcStvrySLi8Qo21QYyVgQzDEnxut9Fi4idamsMdEivMLUrVenrS4m1vCPm6vu",
  "key13": "5qYAsjCZ5AGWDY5BVG94mTJkwoeLkjAktcL5rs3Fs3ACExYWwvtuaPmfpUJtukGgdh1bcq9ZTPayW3pgLJSwz7AR",
  "key14": "GkGfeZcHX59Y16G4E9SrekVjddCiMsVME4sEwds8XwpPukdsEV5PSs1C9jHagWbMXt7pyAPpLx7ahzT5WLY5JRK",
  "key15": "4thLygTfVHq9jF6jSw7ZrBVc2daHGXmEApvbacxqyWLxUqse7s6zcYvpPAxLBuMTusqKnJS1EEiRUgvRVW2NFArz",
  "key16": "NcDAvoYCVXCUkcZhT8EEtLjzwvSbVMtuxs7J3oQ71Lon7v9f7tjSDSFTCnG2HpUGqvNqiLBeQub9MhWeMZsQ9Su",
  "key17": "5TSgRuyA8eTVA67HMrJfhHrwzzeDCJtBT4k24qULHH53UMb4Jmtxji4bXaZMNpXT33USsgLYwM3j5oLzBgUY1QwE",
  "key18": "4jJeD1w3XvhNfgfzKWcrHTT77NCjfbjsAAKRfpkfCAuZkmLMxzWAMuYAB4vJCW4CmEFdSQKsEfNqP8bYVhHwfFoF",
  "key19": "5TDFMeQHRAYPmArrEfvbhqgcPqunQgtW42gzArsQXGBEZmD9G7N9GpT1QPiJnmGTfreijtx9C5fmVygUttSCyeJU",
  "key20": "6PMnwDTq4dWiKq9MaQo2inKJ9mZ2Mqi9Yyh9nFS2reV1HGNeQKwHV4QEhyu5CSAi2WKqxL3tnVMGxZXTmvKmqba",
  "key21": "3T52eQVuFuw2P3XcbXuZBsw3JMMAbDbCAqXJgehkqSUvLMHuM7MUKMcn1bgBgjVShEHs8qd13MWTDqCzgp27iQJK",
  "key22": "2MCbCBVHaNmg3NUrKp3jGJvzisRrZe17mSbt3z4V4FYbqZsxZigAx8D2dM3thfqu5tMYydtzRENmQVMFr8Ro4hiB",
  "key23": "3JDcnAhAdzBWQWMetQzWTFMRrg7WVvaUrsqFHTrKXrzjUrh5MY2Hy88MBD7Vh4BVmQAMo5aXMX8EFuJbP27k3tnu",
  "key24": "bwUFGUMZ4C9M5Q2gykZpeSNiN8imA9wdUnGoSH3S4XQKvcyZ66i1XroqR1TtqZbmKbRiVyALQbnHnBYsKwpvnwd",
  "key25": "5VicauJ5GjU6825UgG7Ays9ikeyU3dqeBAeUC9Ljc2zd7n1SAjcLbfNCNuczzhcoEXE6cexjuZqEd1JfpSPnbQTA",
  "key26": "yyjnozuS98pYhHMMEHRB4ANb8MGMgm9SkeQ46HmTisMGEnxx3fbwVoasUhWkibuzFo9RRp1Poo2p8Srxpa2JGmR",
  "key27": "42dWMZ5CemDXPYvsFZAdFVXK1Acw3fz8KT95LqesYHxyiauzxrZsGhNsM93QD3p7Qkd33gyM6AQYG8sQBdZR7WoU",
  "key28": "4VMAzVEuYecZz66WkPHTGLKPjpsFRkuUv3odP2sqZvdNDfdNp4yShQQGGPFFeWh8jNJsupTTYzn38fGsCTcpAPAf",
  "key29": "5cgHPSJCc1p1znvzA4629DEikTG5YQx35vWeEpmyyfDMLwVDCUKSRXKghMLyohHxJxxduHTGnRhv7Y6HMi3FxiPU",
  "key30": "2th9CLPzQmYPG8KubgPFWvzengpgPS2bq6QByttAG7buBQu3oBgdMWCU9EEbDC1WyJdZSDkJryRVgiGmN2c9h65H",
  "key31": "25yBYBiZAFQjBVxUC7XjmXSY8ztNGVf6oz4qnYanCGR95qbaw7KmjCyqe8CcDiLT4NCk5ioyKtkPQXY9DULiDBze",
  "key32": "4PNa18TJeBqzZin8HYJ3qeUXbJcYaeinzB9g2AKJyDGe4MS43uywHxDoMY5MsmPAtUfzVMiuTJoJ2de3RNCz85fd",
  "key33": "3Gk2MmE5244nGF94o3XhtgqSUaTmimPbDrii4s95F7XQiMcmwZ11qPKLLXhqsTmTM4W3jeZAi1CHBjZK68D3xxZe",
  "key34": "5hMsSczu9EqqnJXA9G4SsDkK9MwzshANt7eUdNYkhQugGaco7suD8tPrRKsPph3DnJyrooxqdP62CdJu1zu4gzA7",
  "key35": "4yK5rnShLDekjdUpC2J1mMxZrxAimBYPLjnGnFqGA74J3wYRHd9fSwpv6zZkEDj8k7s6SdWbp2JMxMJHMazffzsb"
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
