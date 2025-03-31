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
    "3Go9BoBZRLdW8NJmQ8yGy7J4iaY12GXZTdB7JA2jKk4yrXWFMAhPRx9nocHin5nKu3c5zCULwEt3vgj6ihtpsme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jLroGE2QAsvF4aMvxZWdmKeZrd33b9NNcKYgdnHN9cgHfUYY8aj9cDmgq78krWRmGBPHMTKsCj8vpGSDzYWQbP",
  "key1": "4NepZTEoTHfNAWWK4fFFCepJe1LoMuLMyQt1Dip76ARaQanGido93GERk6zZeNH1L8zZjXbt76pmwsSGkhLUBxDU",
  "key2": "3gpxqnh728nzNtjajheoYinFWdL7JnT1yqwJ42TVJ5tEkmytvFW9zbQkz8jFEcF3y7vgWAoTPfPZN2kVXKuzD6F5",
  "key3": "2oZwNV9HqnTuy7S9oTxQo4bmxQbKyFrPRPJvh5DieiKwNqspKYyxLnP9bniypp3Zuh66UKB9CPrLSf7QMahA37yL",
  "key4": "3u9D1QbT3p9pZh1As5X1LzcdvuW5gMUMM3rWkwFc6dGYgvpCEG7yViVJXE8o6kJ7kcozf7GkjdqJhNDxde8BkcVh",
  "key5": "3GSXH3WueYKmZPH4fbN4MqCFyvovBoxyLXegD9NffPTjyESffWbZWnxXMHcGPnJQ1kLKxieWGP1gGp8WZ2hU4heU",
  "key6": "3nWHPC2KN93PhDeSZDPNHb8MVMiSUaLFsz8DcHGYD22QsKjrxBXBSUh2zZAdtDB38NVbC6rmV6gFmesYDT7oGWeR",
  "key7": "57Zxjt3tosffHHxtz7aoXUw2kK52jXRtSRAXAocBaK321UNdbwkDf25KVWXB8Z1axCTWPZ1mmU7AfSqUiEkDgqfT",
  "key8": "4Yr4WNuSx8Aoj5RFxYfUoBPbPUoBtr2zYtiuzexipxH43CSKWXXyPHoje9mcapVg5YmVM9YPnPtdkf3CZyXueJtT",
  "key9": "3MoFKfG6gLQEXsipjokxSZ8AvpBZzgLqwvdyTsuz3DPZiXasu35JadJaXBGz1FSCo7GYdWx6o77gnDxJ3sJAy96D",
  "key10": "VpXLsRiPfhfNRcLwx4Ms1aWc2jKrtEYXaTddwxyiGwdooi3XtFG2KsYzzRNe6hzhfi9kiaLKz6Aijz39sZbxCzc",
  "key11": "JNAaMxR7jKYnoYvG4fg8E1TV1RcLZwrbexj1EvGpf1knBJyanKevqn121QQgq6oRQwkrVo4fYT5fvgypPF5xgax",
  "key12": "KpigxNS7Uzk34G6R5mF2DvDSx1Nwx3Yz2NrHdgQkSj5e5WWiUwV5XyL8DyZ98Eyd7K3EzoFJar6guNDNRRZjPJr",
  "key13": "48Lj37cBqKsjQPJwe45iXACqbQ23H2tFtspmC2ZJCGGtRFQhEaowhjQA9tKX3AwWN144PirKWjEgWfwGiN7s4UJG",
  "key14": "5d4XYaTukcJth9NzLxoFGyuHHV9QnVqcV9q2MSsUkJAstHT73qXnoEKvpVztxnjnNaKSgQJ18d5Y17w1PLYaaVwb",
  "key15": "41osJhvk5kRhJ4vvHffYsoufdNtgYb9UcbcNe8Hc6DkqA9F21QMFS7PUhychxgarcEZ8iczQKeGPiNwjVqG5i721",
  "key16": "3HuB5CaUfHysvacPrZrJfNkAJJSUstX1cHvSUSP5FTYFT8nurmJAio6htqapUdcPwMfy4w3RQREFqqhE2GP1BCLL",
  "key17": "5wax6fonqgywn9HESQbhqEhMfzK6aPSZrwrkiwbVLtDSttGip83Lz1derxtZdJCxZqxjJJ68YUq5ETkXDXWkEa8V",
  "key18": "5P7CRkVUgLu8WFUaCJf38j9Tw6fLkJRfsxLuVrgKtWaiDkju1J7gGU8czkH7Mr1ZWNk8dUvU63a95VmuhwqjmDGR",
  "key19": "4cAy8k3wz3Kz2d8zN3iNpo9SXHgiKQN1qJtRAkCCoXBxP2SRydY62k67FTjKXjfGz5fhtwKi6A43zYwoEnZiJLC8",
  "key20": "56aHrNRoE9i3dD5cqMtdrXojCvDbtWS6TxL9MiTCpegt4yjK3BW7G1mn7cZ5AQWu9UM4F2APZd2sCjUnwxXknwcT",
  "key21": "39GAL3CeE49Dvd6sVRMMhFL4sexofSLpgy8FqZEXN4qsJLuxdLtY9Rqz7C9r6kLie3d6R8YTcW7hNYG9Mfn7AYg1",
  "key22": "4gUZgEhrTzfoHiiSPpUVdiokD6HVDGf15QeRFFEws7Qz77PLetbM3bLJRDcw8poEGCF1cFJ8z9kL2V4MwiS9ZUJj",
  "key23": "4B2pD4FHCfLs4UjViAWe7XAceVrEvHumy91WxFReaNXJK4Roz5FeVntWyxtZoJF66urU34RVXKLqSC2q88TQuicm",
  "key24": "2y6Tf1AdLGXMpSbnyxAVSZ86sps6r5GJZqnWxRvA9BeMothgND8p5WH2vMSDRsLCCqHVC32oxgdCw5PVw8dVVnLA",
  "key25": "5Xy4Q3sDWDjCUVaaFytCqRb8i8hZYVhQyT3AcEB7tPDLq1XTMoCMKQY4xp9Mw2zkk4xDrYgmUH128aU2juTnVdNj",
  "key26": "2g5QQu6HJ4ToUE2M9byhELbomwS7MALn4Bz8iGk4JHd4PoQzkfR4R8drS3zxVFL7TQkMfhKojJif9FqjeWgVvXpa",
  "key27": "61J8M4ismVr4gPktE84GTLHM4wrYdppJSAaHCyiP3S5Paa6KEe6579uTTTJVkiRATkfHMEqLZydMVEDxwSujqzXA",
  "key28": "56ugC1yQD9XGQ1MRb78KSsQT4RCaW85Sbt13uKwoRpEJaXgQULH6Wz7FjQKjcc2bHgd1RkpZqeETmVV6KHfEfRNF",
  "key29": "2j49JJ6bax5UtkF2otV5MdgUP3daNejfixDpz8WcYj8HKtAgfWyN6nDAEWd89ibvwUDwmTe9JiQT1ER4NSY2smCJ",
  "key30": "61FjYeuEHtVCSV9SUKxEtQFuRnphVs7QbqgNAB4QqQ1fQFCYLU8jhAHPbudvNnrmfJi4gqokyw6fxixnm5yWkaiv",
  "key31": "Ev4xNjcNdUj3tn6KtGKBbKW1QavSwAGhs1UvLu4cfZuhjVrhjwfDFgMffheZMNKaZtqHw7yxH71zFfQFZg4fyVU",
  "key32": "2mHXcMfwzLhyrnXpeajnGJPfrtV6Uy23krwCZHySCAgHPa1RfDggbtnQA9jTrQk3vBcT28UZHhw768FHEeQ8KHZk"
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
