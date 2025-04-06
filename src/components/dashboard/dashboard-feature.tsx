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
    "5VkQJKFSeieWH1xDePTBtpPPND6dthHrayijejGD3jAt3umiGJ2dSN51RZTHsfhdqpT8zEVurmPZU3XUVMDnJe45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y9teTHYMsfXjEmtaJadUYs1gubbyUZpCQBovw7pGZsbi8ijE8gJDcc5tHPz4iusBn2Y1ce8dqLSn2TcM1X7V4UQ",
  "key1": "eAWHqjNPCY5vXVTbjKrnTbKfjPjb5bjVKSUBSbaVm3hjceX4ZVBAwJgRE6TJTjqjtvZ7RNrVSn7Czy4L5zS1Hrg",
  "key2": "2eJQM7mhFvNzCpXgTmgH3NxAGyqWZPFJ41bny5WtEDVALfBKwxKmiesDAC3KMT8VU4JHnYecTrMne3uFy1d2qecf",
  "key3": "5SDPtfP9hSVuiq1my9rpXbzwVRstEwvXgMXnrN3TBuvQYHh5qbQdaNytUqiLywKHCuiifmFx253SoCQWJvuBWf4B",
  "key4": "2AaeUwEEJ7yBjzBUy5EH2EveizCFotL82vTrUYJ3wfY15sDW7B8HrVYQnVnsXPqBXMfoG4GA3827DEGgRswwPKMe",
  "key5": "4spD7r3YR77NwXQ6wLsepge34pqayhB3S5PieAKqoLLJjdbD5KyAYaeB9s5GWUGX8nGAo3ToPjq9aFF9WVRReCT8",
  "key6": "2245XQJi3AWGKKPEPKFecqV6of52JbGQABMcqPpSS2h4cBJUB6J39N3wYV4vZmy8hqtroRYd3WqT7LGuQoaiNXSk",
  "key7": "2LNZGkecNtGiN8EHCsfvQg5NuJHt88ixaXWtqtvaXF1qW8mvkRNjAcLzLmskKoXrYWqKVD3xRXJFig6bUjEpuFwr",
  "key8": "4tpkuy67FVrupqvR1dhcdNoAevFNVjG4adcyUnX7N9BQ2p62owtmEEczxBahbkzGybFGjbTuSYNcQhWji9aAemgA",
  "key9": "4NdsS18L1jSLJ4kJ5Rb2CPPLNv9S41iK51LFrXoBZ7QP8ASpKvsZMV1HdYdnDgBumDb4F4ufSnCjJMvijEFZw2xB",
  "key10": "3hT58ZVDtn3nTVk6ysN8tXjtw6Kp2fuZ9aYjUpo1NF6zzuHkgf9w9uRZD4mt4B3igkupBtx5c5J1SZfpSTQYm5zY",
  "key11": "T47kcyvjoW1z6phN5y5TFnGRgTteX8MNoW3okSPxwpHu5ZRfyHZQnftUxnxk3DBF2QfgmvZyfg4cT9nXqV9d67H",
  "key12": "47AD85QFuMJHNpTbRdxTwMfGURafX2YGqywseKoGcPfkWBN26GZARtM3aDCQ3okxTdDZEePkfxNndrvAbyXw8mRe",
  "key13": "66biJ5SWRDvVKKLEDoAkxwBMSJbcM385KXF2uQpuYewBv2ojG6dnrmCHsCyU1PfPC9cqawziPVwmRBN1WfjRDf4o",
  "key14": "2MFxbzAd7DJGycZSsPkrFUGD1FrhLLxDB3aiS1LtfMsyKmTP9jMeg6c1BKxsd26e6JwxtutDVzaZxQVQPGJSA4Hy",
  "key15": "eMTQP7LEt7HKpcXGSWhFDdN1rharfsZRpCy77T5iugEavyGv1UCRCfDRGFLUWzgpCLt2Q3AsHX2sE5QU9x2sPXX",
  "key16": "4KrtjebxuLsDGu13Uzp6R1jt77xRqnQ2ULKZKW1kKKALwRAnAdhvtZjwwp6xAxYEE1gjgEvY6Ufsf1DixCkvsHXT",
  "key17": "5vGt4CWdyqSc9h6dU5H6fpLQiweLmXdamtHZADVtZt6QiY2BfFmsg6MFrnKffY1Jgue9vTZASYHMsNoP7UggWf4f",
  "key18": "bBbaYAgbxXJk4PQ96dDc9wzn4EjmBQw1vDRvfpo6JHk6W1KW9SMFhoMU7HNL9zU3Wx1oUnFQmSc65MthNnUoETq",
  "key19": "vzXEMzzGUoSVDqj17z32G4ypg32JJbN6AXd59oeJZf5TQ6jvdQwLDm3ZD5eTZz7hCtgeg1EaEkDNh1KsM3x1u7o",
  "key20": "cXn5BAGDeofmdF2LCp9sqdRD7xi6vmwzkghrSxwHYATL58iUNk6RgqGUS2MD8cYs8CPcMZJni5pBkyktZrAEgme",
  "key21": "DJodnBdWbkREur7CokA5RiwMnfYpqBN6a6izdTLUmMzno8cojyjo8BYkLaiViVww9FjJ8TW6gGdeQmToMd7tvCo",
  "key22": "679VWY2e2SLzMvjTCdLHo7B87yZ7dHJo3MAt8stRp6GDZyGuCctPDqM7dBSRQzyc7cxgcuDb4QpneTp71mSKsp5m",
  "key23": "4gQNtxCt1SVi1Z2ayui3oXGQYkPC4P2DF32WR9XbNKE4kp2MMPqYywkcbyFfGeYxsGasjc2cr6auH31oNErXGZnc",
  "key24": "2pneQfKtFcX1vxTMRDZdZTJgdxZtiajjhFuZDHsNUtcrbiqxYQ4xcxUQ7UaCuuEUZaiwyntiCEDAe4vTx7VGoitV",
  "key25": "2hcT7ZdqTCrGW11ZRmyCA6Qbs3yUeSQkAsDoPZm5Sw18o51ivTiyp6Zz5pu9yLegWJDFDxKgWQiXRtzpn78Uowp3",
  "key26": "3Wp4WbiXnojQh7LzWz2cLQFo7SJ5Q7jmRHj4AVmjDaM38NALdj3YdxwDT1Xo8GUaBaMGq7iy9MqxqTcD3uk5qQEa",
  "key27": "4U3Beecae5Nn4H3J9bf96mjNzjFnXvikBJrRGkSJa8ArAvdrDrxmSghL7JYCLECKDv1Wk82zrepiqDDngrwexkHF",
  "key28": "5yZ5VSLhVMD8xVGXxzzR4vjz46rSx8JGdij4UvpHWhKU93td8Tx9X7Cojt6mr5LYEcXF2mkshkuyokqiJrsLMBc2",
  "key29": "346uLq2ZTNWeHvJo2SSmdPsH9oZUaBRsKUE3Nr6pTj3dH5PYwc18QxT4iU8cCKspYuhh6XqnLegbEf3fHEP6t1ng",
  "key30": "3uy1TCqmn5JQEw217nndBVSizBUkjdTmE1BZJ6NXKm4Pvfg6N3iNvXqfesJxbRTuSVZP9NK1u3AZdkQ6potyM32g",
  "key31": "3po18nbpEya6VU98ePM4iNXbrPZavojhQx6CWgGQbEcKq5QmRYTjs4iEt3T8rmPgg9DckRiX83foxMLwrbcLCkQ5",
  "key32": "4HtNTNBEiLxCmP8yMM4t3pTRE95yNzu9Xt4hR4YDVTzZbtzFuxtpjES9Z4wpWbBHTfdtVQm1NT8FBa6SdzF88Fpr"
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
