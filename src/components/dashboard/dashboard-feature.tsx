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
    "4mz9tyN2xCzng4zr1pvdz3yPxxZ1insE1gKMzLxoUURsyeQMhtXqwE4JLUTwcXP9Ef8on8tcCfBqUdRQaYN9uvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QcJqo4DFtururZaJmddeqaSJACEGsGJ9CdR6ufECpfUPFbPWjESowQDvBVY7eReY5wwdratfyAfKV3HMzwdkzHH",
  "key1": "5j3L3anEdgPmSchDV5XUqpaeqHwnZzPrzfyPMv47qp356p1sqedeApyZyxvLLWnQyc3riQW9AP6x7D6w3ib6f51H",
  "key2": "4totV8rsDXAXNiH8sM4J1iWDNMowjyugrQpPLXNoSyDbqcpARa8gGo4q4qSitcPF2abHiTdpiQPceUm9j4pWL8uK",
  "key3": "41VxRgoBAVQPP9MNjhjYPQp6BaqrRbZPortNq5GUnJauGtu2DcRbWvWGncivQU97Ca8AqRHXwj4FwTQLLUqKqJit",
  "key4": "4L1yCX6DtxKe2VpS5LqJFiMChD68gCbNjtd4b4bN6EcyMxuGn9vtfwP4o6oe8uATroGSdGRhaw1cqxBkbszhejvs",
  "key5": "yTRypybvVsydNX8bRMUPgGVQ2Txkty1bfkmC1jarLvtieHW7fonAXfU4CLhwszoeMt6LuJgyAR2YQoSbEFbJxoe",
  "key6": "3YwZvkCETQb2ZfXmkxQLetwh3HUzBJKU4LbUEqUTJgkgxaTTk6RMYNJFp17srNrEAbkUZQ8xsG7eFQCP6vASA7Wn",
  "key7": "2KDrrsAgDvLVmmuj6eZdXP4t9FBmKw3Ce5pKBZwx1s7cjJVmWhunmszdCiHiMpwKmDMhPVCiLJmfRqhkJoJs6XXp",
  "key8": "2zMcrMZiJSMkCJ7c15mEKWMQYkKzuTSsx8hD6u9yqf2dY6Q1xaAb54w1xHALHk5epyKHazZsxjfTH2c5qvt2Qqhe",
  "key9": "31maCGbLVPdY52uc9uQgvTf3iRDDP2X4urBosmj2YrQs2EpPsNwMZw4gZGpjj2m7MbTe8ahLntFcTREF9hBdv365",
  "key10": "3LvS5G4UES3VwnUtFrQXAGmAiDRfeYeA6cuoBmgVJcnxESX3zN4f5g4r11kN9YR8E8chUxpV6mvTET2KM1Zvx3TV",
  "key11": "2bozudBjGU1dnTviZx6hUVic1XYdDdfmyZggLFDbDYG6fQHFj2PGcXHsABgarpSG33jUqXodwpaUr8LXPiTNwbhf",
  "key12": "jxu3pXXPbxrddnauQxpeShzzfksi1AsR6n1JdGaEYBwZo96tGbCssa7hrxfUmovg2wLVaK8y8bAP37u3xE7fQSS",
  "key13": "2jheRCRGqmSeDxPuthcjYJSVcYFTdm7rwfgagMsK27asLyTx2xZChJBZFMfmHUGcNztMsSWG1ppiDdWbbChCDnWD",
  "key14": "29qWa364b6j1gP8a1WQacCPykaJni9KdDye8RnYtepgCSVvi1qT4ox6ZEnAbgojnoPspKZcs1WNTL7tVryspkuwN",
  "key15": "3PzJD9yK7WVXQzLLUwUkveXH1r44FambPqCiGDUTxdY2NaaEoR4TqfFu2QE5QZjn3TREXM3CNJMvCuzArJ3uLq1L",
  "key16": "5TnfZrxb4d5xPpuT9H1RgSdq7Um7EAUg7CMhbKJPvwhziHvuvp8XLEv5hYV2t4aCjM4EWrZDE9CHtzmpbQXWSS5o",
  "key17": "NrWoxVbTcp5TAkGyRD6yDUpbGBp2XHGFsFd3U3RFBryV5YAa9M8fYdu3vyvrbw5fnwbcRGhATvBFYiv461kkHWj",
  "key18": "2ETwDrwCRHepDpyhFeJeKgH9pJtgEkx6cdsjVjGnus8fCtm2AjLDyf3BDHUdCnXUuGmvVic7JR4TkCNCDYBnT8Xv",
  "key19": "5N9QysZU92S7ckC5yLbrQShd5mBC72HzFeadEZ74g9nE8pXVQyNj49quzfLfS4f3LeiZaN1jEUxR1p3PMZiogPca",
  "key20": "2yyDzPYMN13SvQMMJPXMPejtgvNL9jbQbNt6CToeMPwfvqdXAaGKGDNfkoV4tBKTiFF3eNVtft2wdXi2yjbtnha9",
  "key21": "5HfjzeRkpqEdVj4LirmpQ8kGEVNaKJsfp8zBTBSKuNCTY5h8XP5zXejwxSLY5JXCatQuFZVMCG3aqHPsRiFXcF1X",
  "key22": "4Gk95HBmwDj5uXhHg2qJ6JcSNBLJZa8KsSyA5MLxqSntwkWtzyXTBkpoWAGwmNgJgTx9Apj3CiUH1TWi7xZSqgru",
  "key23": "NtkKx1g3uBsQp6X9BFyBUjJL2AwwLXQkVmPKkVJ9qUcrNn6qM1MhBXpMCGT5Dpkxs3TU5RgJANnfuZsUwDuzT2U",
  "key24": "y7n9PRdoMwfU7P8osPToaZCzU5FLAaGDzYnudA9qNf3XK7H6Qq8DcagC4JNtq57xRfdzGfbNzCeGwsQ7CT68xVS",
  "key25": "qEk73SxTbMYgd3k8whNan5chCLrEUxiaGqPusFKYbHe8GJ4eYawfbcc3WUxGdTho3udtcuetbedVoXhYQSNusnh",
  "key26": "4otkrbxRHP3Cz5b8PezD9RqVBijHKrVC4qZj3apopXZbafMHBDcMsh4GhuK7fNbgNUi8PNQXdGnCTezANFNR4JDp",
  "key27": "4KbUzEHAjgH1FTnwCUjqe43NRG8UwSc36izwTZMCQpScnAzeavWZYUGnZx9R7dCQBLjyTjf44e5sdYKGk5GD9xYn",
  "key28": "2hTKb1wPouk3RJaXygtZ6GPQ7zhsCu5khuk1cixGJfEtd9LUZgfGJFHYGcuwT2aueHWzMkra1F7f2hSSnwHDzpYq",
  "key29": "YyNzPVTrB9yBhrbQRvXFuUkG1cjxkmfqp4hZNmbcwXMqkBX51GSPovbLy2aaGk7EniuRMrmqqdF85DDzpXPSZSY",
  "key30": "ref54fyhhrjH3eTUeYNg8HE92xQoyLSg4aYhvQ227NYZTd6Kgs3o9UwDKgUerDPYw443SwTMc3V6MSE2SLy9T3D",
  "key31": "5EZbbdYJVYRsHs2XVELzXwq6ByGdLQjJR1vfUrPCrgZZXZJJdURCpc6qZWjHbji4rpP25GKqJGjR5neeGT3yCVm4",
  "key32": "fxd4XuehahvUDVkhwhi5ccDW1UVEsgH382HhybCpwk4BxiMcgaduvnNykzZpaeUoEuUfzkXAGMt4ha34ruuqxTB"
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
