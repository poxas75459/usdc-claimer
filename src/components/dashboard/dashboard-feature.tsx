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
    "4FnFVokGxyKk6Q1Hg6EF5SdGWFcExMtXKcsfDVRwbgGeCLbkMxXNDFByoxP4rKWMR7XaEXJHpKQfXduD8uX9cDAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CBg98Pye8ACJtuVJruCKoswwkV3kEBhSQbkDWsyLWj22CAn4tcWwPUPy77bmPR6BDzC5b3o7kbhEZXXjTARd5m2",
  "key1": "58WPcxNNyvR7xvUxgCuaMesF1RFZThjiSNccEU4Fi5FjSgqBxK4BZVQKVoqA7kkXVjpXEAbhg321WvPpYFafBC1q",
  "key2": "rHmvVU5m2mtwHWcvYpDgtvKRs1xWbY9YWhNih16yd5aWc9zxw5aKW3W3gRUsUWghYGNDFmYTQPkpfkC7gde3BPr",
  "key3": "2oHSFcQcMvYisHYBEXajQsShtP4PRry3Ts5CZLUKqTyaqskdVmTyk9fX7DP7DyYBesjTMmR2Q2WQi6zTDsEtLiwc",
  "key4": "2yJbkuyiYtVMWTPBex2S87LUh2UdiyEYwBMWBwS1y6HKi2kbtizoqCVfc4b8HmbxoakXY7PysZ7ZpcoiAKu4s31i",
  "key5": "3LJV2oLu4N294ctokPgT51tPTTrTaFpmoTo14fuWFmgXbv669uNCYZMHRULFzCAE6zA65JuiA3Vdtfcn2pAi4RNY",
  "key6": "5Kai3of3SPDXnPYMV5bKtqBjg3j2vwRGNzBbpdMkhoymy6Df9CGNADeWk6aUwrTefxM3xhdci5zPSJszmFRmKZxk",
  "key7": "2gsHkzvSpbVubgumj8Yv83SSte56wDhgXpC2xnNNpn933Lw5bMcQ1zxbv7aUstNb7pwYY6EmTerLHcN9G8hvk9aN",
  "key8": "2EkLhCNmMFwAt116iyykTwh448HAVdgSCxbjDW5ry27DkzbbJ2SLeUx6Gp67RG5jLMGE1gJJPw4kH3FRv2oZfuyJ",
  "key9": "8uvFPK9nEgFx4ncAbJG7pN8dKAZbonWDna5KkxeHf5WmP55x5WSJPBdDNnQLRvJf8Zb6ifVpFAc6JYiWh785PtJ",
  "key10": "4YYH1T7DWemxW8HCzUE5bLoz143B4hhTwCihRtYScKCaeuUk4ZRdS9Vvysoho8qFBLSjmxw2LmyZqpbJm4YQ3mZY",
  "key11": "5sjcv6LTaf6bo4hPWSKhMHrsphnfmWbR3QCgcWvK421x4nxJcZ7uDRD1s4xmm8RgAhwmFuw2XUwdyBDYRuAFnL49",
  "key12": "5pauUfzRudFD1qs74YEz7ZN3vZBqbDaH9etJqmAAEnJ3tXSfeCqTJ5AR4Sa9p9s1ej1tqPRoWEdKiLQ7gHgQYaoU",
  "key13": "32HEFgSMDxqCdjJkKjgTiKCTNWAgYWEZbTJNXonvP1G81uHN5BjGicxtU369FKkgmrKtCmYBnNV8Hr5o9kzCL1Zx",
  "key14": "3oZZxtj3CAL1uxt7bcQwBSJRL7k1R2BRDFyvGuhtjoiDg5ugo3t3wicRJqWT5JNN8fjaMnrm5gPYxsXhR2DEsxM3",
  "key15": "45u3AAGK6i5R3zPEKLEMyBUW6rPv87RMpHDbHcdJoHoZ8FbvkKQGM2XAHjf3BsZPtaMeRpF6tmJtMatewZvpKMLc",
  "key16": "pnT3ov8W1Q9wMFEckBuvLWJEpr8CRoQApWd79YUR7Pare5TbrEkx296V5M64utBjg9K7wr7QCHSV8DJiYGNHLCw",
  "key17": "4Jpd12cdAsY8QA1oudVbpuaD1UVPX2KTxifUaRPrCf3JGDNHYK8PuPM1EgdqA8aUfCURV2ytkQge6rbR5tFNtAyr",
  "key18": "5HRoSJXYTPdajHt5HZ1UD9n4oMQ4NECZrdH2suYx54fitVZnre6fsGohaYqkLzRD3VjeBVWioZSWf4BYaRs8RY74",
  "key19": "4YqvkLbg64Q6vcrBWzP5yesoqb6cRN4mhKm4acaHML9xsn7E9htuTyb443UVfAQzN2RQQuPBhJ3VEVwsTB7oWvQT",
  "key20": "2yNQtwpttvZFn7LQvFUefrj45r97wLZsf8a8tkcyNhRdU6oViDPHsaUcia6BnPZC7zuhTgaiuXRUJsyAHn6tjkdg",
  "key21": "4FzhxDqhUgWdg9T6FztkeUscQYB6JCTMX7SkMmX8EUHjBDwyH1vzEXWchFDEqVkNz8yfPPtshcbftPqGecwL9RWA",
  "key22": "5VJydHpkgQ8p5HSJgDJeyoDH2J7n8ULVXczUADoSgCLLkmTjZXNZMQZAigDhrAibzyH6hv5oAQYv775i4cJ5iL2d",
  "key23": "2c5hwZSoLShrNdYWH6xJCq4w9HoC99mo7NyHffSdSrL6TZPMoSPrN4HoypuTpbyAZhcMrDPGyrXd22giyRfrQZVD",
  "key24": "2btRJ562dYgfRvBLHZVmUboXhab74o3JF714LxPJN1TuS9YoRM65FbFCAcEP69qQYtE76CbQZXdo3gbfQFixMo3P",
  "key25": "5FuJz8gebrbkfHRxdxWFfAg6xBq1rdKeJMn2kX8bPRRdQWUQ5t99Q3uFdeNrHrvzKiCaLFwwcttS3ZfNRbUsnYBK",
  "key26": "5Uv4fGx9P4gbffn7w9pgfyayeMuDjM85NZbiLkQTsZdTKzY28UJxpWxFvy1oBYRmYanQ8eAvjPH2gKfiDd9CF5xM",
  "key27": "2p5DWLAeb2xVDXZheHqmhpwW6GGyXsYz7t2MnhHopkH4er2BAfiw1671oqAX9Fbe2LAUzMu1uka7oCu7mSeVQvZh",
  "key28": "44mLRH3MVeUJ6dQgvPqMiS2R3y7Yqd9eRM1TSFFUMcYqdsvmEy4FrWEM4kkvFTVSscgTAgrKPCvzRvg7fJSTuzUB",
  "key29": "5z2fwsyX8H1cFBbckURzzoZR4zZQHaN8vaFBMcgDdyU4BCdUWqjGj7wi1aTTc7s2ztDDauy5BtE36kJ2MtVwuFwa",
  "key30": "erSBhd6oSNacujqLVSx2GFVupVmDb6vAV2TGXp8G3Z1kHTk4HZ26Q8aTyNYifBfoCxCbJE5tuXVkf89HjF6wKsP",
  "key31": "4TGWqD3e4bz8nJWD1LSxahySWQAALTodKnj5XNYJLkuSHW1A4pdHi9cxKKCbkm6HVQNdkD3VgZRStg6rTae7D2ZP",
  "key32": "2WmCzPDoKo5akDwGgSCyyUd9NU5PEitDD7TrMz5QK7xmra3AE8Lx3A1yVwdXkVAvCkLXucYRPhM4sDZBYshGkDts",
  "key33": "2qWukBTvFce9endr4H2TG9nG48puiGLFGxRWH75A33NoHcmVQVz42MN8Y1ghj6TykLrJHSsN2FTB6FmMxQDxwjvD",
  "key34": "ieKSKVtfAJYNtoqNAheiSnjmkZzGiF7PGZeErCQFg2Bv8phjAny7BE3KAsn3pijT4KVGACKppGs2MFSMntzg8vu",
  "key35": "517i78twPbUWSQwRXzcDsLLME8ibE6bgjauMoraZseBPUX97hiUyWxEXBEXRXHQbhV7WZrdCA5qgiXZMH4tUHrSd"
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
