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
    "boMSQ8RgX3p4pReMEV5Fqi2owovHqcHWXDAsuZn6Ze6WxLrc4NqYyYuCLhfMn6Thns6dsNPqjYJsr1J3KBGuKSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGdcKMwiU9oa65FRDfe68UrbhAU49Y8QnHichAwfUZUPq7QQRS8gTp3G6wR6DDAgBtZ1wXGz7SM1vnndiHRPk3g",
  "key1": "53ViNTSSiTwXtGWxtia9sk8HzHzrjGW7RkVLTHi2vUWuhzSRkEst5mWZzMJP6hkNQRwaP1AJfzULYYQcpohvAHQR",
  "key2": "2ckhHZBPTbtwREdQ33eFZad1sKsM172WgNK2qZMjziEHwx5tU18y6dbfyyZ9C3KxRcS6Zqw5P7EDZvtCX945NRTY",
  "key3": "3gD9ndxEJK97YZHzdQJnhaE7PTAS52dVEDMbbuqU7A45MHGiaocCohtybn1RxbqkVpmjxMdfYrb1GE3r3yJApGkg",
  "key4": "32dCtso2LEpevXUKiybLL7z51cxshH3dTuYqJ8eEc5cHuELvinHzkY22qifz4NPru5zU5xBd9cwNj2fLiVRmBxcr",
  "key5": "2TvftEczWVyZHqT6yWJtNUKHUvkRUm1mLsi7sjAr8yNGtBxHUsSLZdnzUSiXfsn8FUf4frLwsgtFFaYUoXtG1MtG",
  "key6": "4y7vrpHxhhcrsXxgv51ExAptPqDqkCmC1HkLr61DAWJavFCbsTxyjHtEzX487rPLCJg8mZmzjsYNkyQ7zWBZd3RR",
  "key7": "5x7krQhGoxz8Hqe18LQfqaK3fXBHAcxokoNzpwScgWeusSaTep7vimzrSnz3LvTBboNaHYdxHA7aprydkg2rkwrF",
  "key8": "43UbYsfLqkwDB8upyvXYH53qUFwc8GCQFtEmurgk7j5KXFKmyG5RwrrCr68bsH6NNZttL3vTG4VFi4Yk2r1RGwnX",
  "key9": "26D25drALGfigMFkgtU6AHFDYVmDm7V5GW8FRTnbhnf173UmfWRUs5AAgpErN8GKY8BFwtu2vDbJN6igGuDuuAze",
  "key10": "523AX7htaA7sUphkPuPgf28JAFjrnCgrjEDZN1pFvhHggiuPFnVfi2493WtN6xkhJs8feUzmBiinn85bb16uTXxo",
  "key11": "3qztiS4yUBTFzKzmSAxRzkjKL2DGByeSvL7tXJmrhgq5TMKrNTnHDG35xStPcbcLrADveWmSbFLt9eq1Wxa8qBeq",
  "key12": "kbvyo85VST9Kwz9W4TZhPAuSYDoNCC1qp1f8KkykStA1xqX1E5VqxZNnrZuziCRLKk2vaftSUtYLjoms5wLxd1h",
  "key13": "4N4DjiWSswisabY3peULfkNPVZUbwfBs6W8KB8xVFCaJeFgtmqunL23zmsfNLwyCsT3W6BeMRk56S595iMX8NDcC",
  "key14": "5igtW2FMKDSj87SQE2NBV2XMhRiaponsUpTQukZCBGKHYo5UNRXWi3N8ipGM3EtznCUdY8BEkPoGovufSZaLL72g",
  "key15": "mz2NFdUAq4Wv19oiCFvnBuwrVQHJ9Hhwwz8Qi2GhjJdHnxNWM1bqeQ6E12hT7UQ62qJg36Ghh3Gg6TPfbCa27aR",
  "key16": "5FPzVzFwN5ySWwX854qhkeVEDtNNs4EvsrC8EmoCwCNj1jkExuXsaNSnHF5jnYR4JRqW5HqhYjPstZKihu89tCnF",
  "key17": "3ADaCqQHMCMwz6rdbbzdA4DEem319pScjEfmhnLjcoYDRjkAeUHJptyUbawmFpHhjNLYPmrPR1JBpuiHngWBdFkW",
  "key18": "2GC9b4RMfGajdshtdAkJDfuMv35RkJyy9mTP7wcJVkeTTDGcdJE5wPdS1xEH8cFaJZPa6UxFq8Ho2NWGwiPqWWNh",
  "key19": "51EHLEsA3JWyiRXCnrB6jpXBJ2zAdbkCpHYnoNc6Dued2GWGPf2LbaobLyPzQDSAAYcJXRJTgjvGERsiV5WfsxVp",
  "key20": "5tvERJT8z6mJ3BPFkdeBdktMvKtixSALJvk5go2q9hxi5LTsPmTsru2Qr5QrrD9QjuRBRPZSeBP1LBSoSzkZjEt",
  "key21": "3qJKooh9iR42ALBRCkujNX56GVboFY1kkc1wYrgtD9xncUs5Dyu9a57JghgMhBdRvGicpyvcmYuYeqWs6YVs9NHw",
  "key22": "53dGSBggTD4AxZwr65x3gaFjDUYVL2AigWhHKrGD7Zf7sBEnGuKAatQofLz9vLBY9ByYdKZKyJ64pgm89GBzCHTD",
  "key23": "KVP94BXZ7VhdeZL38yeYXyiSfNujtGNaftTviTaY3D5xrpqkHPHrjBZBcVPdLWB7cj4EEcaKhJbZS1kFE4yn7QK",
  "key24": "4v2cNhXfzB9T92i86uYcNVF4YwgA5CX1LdLLRpMo6iNf6B5RkkD39w4zfrmj68Q8a6YzhNdxgyukq88U3UGndhHL",
  "key25": "2eV11V1YgXbx3z5i9bLU3tLk67BaJ6axyzx69ZZjbrqxqadniZ73fH4gXsZ1TWF1SHVBQfUyKovpvGqbvsbPR8rm",
  "key26": "4beDEwwUFCiUvj3UK1LchqTgtignyMKGKmVqc8Kbjjw47gkwg3FMkvkhFPNfEsh4BDBtZNvq3CEbiLhGysXr6Yrp",
  "key27": "3yG8FReUiRYDyRmRyr8ZeoHTby1LxbNxJ3XDhpY7JUApraMyaB53EBpW67zpmXxXqNfKBn8ULgtVhNVFLau46EwP",
  "key28": "38DJmM8XNpqZiFK8qPSM8oL2kNajHXUru9PhuvWEdQ8dytKuoTgdhVEU33vQuinuXoqHvgAiqTVP6sFJ1aGhYjUr",
  "key29": "5jG9CmBZ9uWjxRSjkUZyQDmzQfUzRyMohUSEwvhaHvpqNfB2VtWBrSpZ7Gd3wfdW96edStHyzrFt7wbdV37p6HvS",
  "key30": "2hhPkmrp4BJPCY2bVHwM1Ggmxt9qULyyCyHo9sJonkEdd511V5Pu4QkrAKg38GuTkpDMARvkEeXP8Yvv3ssYkBsG",
  "key31": "3Ma8oNf1H5tM3UC3vj8v1DcvzYJWNJgERqeJLbrZeeyryG1kLybGAbk9m2J1sYxik1yFB2ySRj7X68HedLZWoda",
  "key32": "2FVLycxvqpG5XTRtadGaPYaa7gEPbtEGV82RhXkLpRdurQdPqJJ1AAN2uts4JW6msXeigkjwrJRmrmWW3SeLv4jB",
  "key33": "3ihGLGMiUUJUsRoS6AQFqyegwGuF8G4u1ohmTMMWvdAmz1WDU4kjHaMjr9NJQixNpVcCDojuBdGzcB8WvNfeQeVM",
  "key34": "4JraRhvqYLg1jSxuuckvJ6TWKXvQeZMRgKhTpHJvnr9yJ7SYt6gCUkKbZnmZfuVUi1692ZebqFY4iaGKYAhmZ34b",
  "key35": "5vMYwxcqrUr37p6nTfXzzRFaR3rA3q5zoHUjfBbmMj5wUDYic64Au4ffraQtDAsmFFQGGAXWjmn1Ge18scemn5dD",
  "key36": "3grQ7reaKa5Gc5p5FwwxgFnhXEymLtxNQLEX7bZ8Bvzg9sRaWTW5CP7SRnnXnGBFh7aWMCrZKFNZmA33asjtyh69",
  "key37": "5yRuHsE86uZCqeb5JcXMnHprLgGJGeUWrsfnaTVYvXRBr4JLsoZB6x4mb7QhD1rbnEERkkmx2erYUmLZjb8wfX7U",
  "key38": "5QS7MQV1fS5Gica5TdBsuBsvM9z3FpT1UU1sCkde3LRrG7NnAFUQ2d1sBZ1WhybstWaGtTE5Zybt2sM3VN5nmtsW",
  "key39": "NaV6hssoKPtKAxVSm2Y2TmLZUQmipkaB7Nwa8oTmgqkqkjshqLKk9tLZcatXDRxNxdKTwgnN1Ym2Jtem2FHd6g1",
  "key40": "4Pa9UhJw9mbvuNXHq4R3nAdoZG1rE9erSdBKAxiWeKHat597kSiy1JnANqMy6cnijYcGh95AacXJdspsaDfXH7xX"
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
