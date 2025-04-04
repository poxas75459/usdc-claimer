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
    "2WtBppuFmx7EJg2sS7coMtpyb3uQ1zM46qtJdTZzg94isDJkB1CtFkSb76CbazutrrXS9hLi4aRFFKdBLsBF88Dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjq8D18jqppWy8AtVLufc22F8irdmscfgKNFZpV491Sd2J1nq7X8YL1inJWqWYtV8JjFzWooCuzC7sAaWm1zAqj",
  "key1": "5WWvandcKBFFjq2wNJJUXFAcs2qoeYAUhGA8HBs8Qc9pz5hkvkk2bidyK6itA2nTzrJPqRstvx1z6duDmjBFAPGd",
  "key2": "2MzRBUpEdWZtjE8DsB9U9BkfBaKW2VTFwZGRawy8RXTsNCZKQusNGMX89iz2o2au1KQXWBCPHLseL4UuDTgUenBe",
  "key3": "27HGeBdF2vQ6KmjVxsS9DaG9H79zDx3XHtHAq4D4MNR3JLjjvUPiRwurM8ycdbi7yLyChG9cfDiBAjMv1641PCJ9",
  "key4": "YaFptZb1nTVRLPcRNDcWv4dBjQYD5kjxoe25mQ45YvRfT6LZ8tRFVat9YhTx3y5VFkQHkeWZF4bwXcvD1hHPL6P",
  "key5": "4C3JADEKWyThUwLoJJ8g9ZdkQB3Ewb7nXmZV47r35aSj68uE2bhH62AYV3bnnxjKy1NHXSMAV5dfDtx6A2TdwwPb",
  "key6": "4TYjDcfjy7ZsTBD8nLC3KHGXyL8ZuizKAzKwAbx6gLwwDRAUNPV5kNRb6ArgMb7hPqwygdKhwPgzD4FdKuv3CyHE",
  "key7": "2sBrgK4msYxc6NBoeyZEf1sLFY9XipmFpiLzGfEfJKNBMn4sw63tYNvJxE6WQPhTnJbMZeex7e8xiLfNwdCkyy2M",
  "key8": "2G2nZFhxu1o1VHSHzKmsJTmecFDzHCKSb5EniP16BCjoJcCEgexWu34nLtMsfWaN9gQHshenN6C7M8kfMtBkmsah",
  "key9": "58crQ6U5nLea65WnytPrGF72VoiagRej7jRZNmHTyV1hET914Lbw7BfXYpzQeWp9GobHNFo4yMeffKdSou3dFKbS",
  "key10": "4nBJzUfwQj75SVwL8tz3WLkd9a4cwXLPpQqKc2Zo4dkdzLHepn4cVZFQ7xEDKDzwPB7XCf92uukiPeYTytsbaM8M",
  "key11": "2JoxsGY11tHNJBGfDYMSvNCaFG3w97i67sjkbWQcz4esY1mgRMfgnXv7EoncBE5BLmbegMMoV2XRxoi82EkeCjEA",
  "key12": "4dAnWe7izcWEAiohrkerYdUcynEnZucHJH4z654YAw82Sm59M7Zrb3NNa6xpMRAms94ARYcMtSd5mqQcCS1kDoy1",
  "key13": "2jRUia1j3SZDJH5ZcGGAVs996o5VGLM4PdPrhyTsvZbTULuHiSxf4ZBSdaLLwmc8FnQcc5adMSSNBwLBAJBDSYvA",
  "key14": "5xZq8xPxJ5Ys3mDFAhoQj6iqqNLFKg5BkrxgFif8hLyFiTvFLzPaoeZhtD9Fi3NJUKyAKhRoEFJcMLkhyDAXhMqo",
  "key15": "3xPL1nH92C7F8Ui7PSRQhcqGCNYFXGzcEyNeH3Jdf4DPMsK1VL1Q38K8r9DqY8PCf5wYTimkTXAtzJqfamxaJhA7",
  "key16": "5yXyaaFa7GcmWAA3MaPL35AKhrZRdvjydCPvmDVAe9AsHKJhtV38LK1VnCAS915GivScEN4e7qcLYrreZWoHPcAA",
  "key17": "1298jJ68Q9EZbXe8qGk9Wk8SgdCvcPwNY5x2dTrHyrSy7QwayezWRP56cpGsgzySxxgiqwv5p3Bz5x7h42we32ZJ",
  "key18": "sNqJZdBuBcYWSNcNN7kKhhsyAAva3B1mCqwFc1tGv3zWVXdNNtvkWHizqLRyqwAY7V1kbcYXb6NhLD2W52FR8PR",
  "key19": "62UtVnbC6RggdgjzsvMrkusiHpuwteEJv5DtfnwNGURLv3xGxFAiEyjSPekXNqgkLDhPAoZpXChkfDanN1qtTYKy",
  "key20": "26HMu9kJE1BCgMm4fKidNZfneafuLhNXTfUMij9P3hkAx31QNPJQzD1aPSHsABZ2TuKZ3EPmvjX3C2JmhhRUj2VY",
  "key21": "Ja1GFY7eVhZdvkXJGxVWGQ4obWJh893gZnKDovdJFGJ8K8QesUEiTWL7paCYPkYj4ju7n3NkmQHrVYSvruFvrst",
  "key22": "2c8GvkyTqQBVx5c5SpTfKEsUbmPeYmTwNcoLGhgoaazzFLM3AQsEVKkYwSoB2vMM9jPJGgg21DjaRbAh9o5pqkU5",
  "key23": "4HvRnAaDKxkbsP39Y5XQ27do9TDTX2Uz7epCgbFbSktYVvEb7WUi6abZzgkDguqUxy9yNmzbWBoKEL4WsCSTwxbX",
  "key24": "2dejTafFuZZvaHzRiu5xB5xsYScrrdQ6yPcK9AAKGgxNoZMrurXiXgWXmaMvpU1df4FbMuDd6MmYtHJWrvMJcyax",
  "key25": "qAt3DHTeoDX3JwhkWH2Uj9oe47PhN8YhFKvxErkgovStd9JNRGqoj2guCW74XKh7vV33FFxcr7SKyAq86AV3JAX",
  "key26": "4aywMcpFv51UHrPYhxK4tDGAfWxRHR8bL3wBbBEAwaAaF3LvNFFVFtDgeAXtu3JJYCPwFCw7QTMxgDzZhmHuQ4PG",
  "key27": "3QSRK46WY1JJeXpNapfwkyDcwKrQz1TrKLqcb4rp15bC9Ei3cZNurpv9UpxjMi7Vu74761iiXG7sX7FvDU3HcD3r",
  "key28": "5hzsdtGsKW157qXRUM9mG77yRrj7JZegwmPyF3ZxSvNWoTbYut36ku8XBrhtfDNzNovnQDZREtbP4YwsAUYBxHGY",
  "key29": "5ye3M1HQrDB5GmKL4A3T2LGLaKKJ226JLQviiQBLr1LG31Wq8PPQEUXzdSHw3eA7W5wrNXMTt78DkpAM24EoBkth",
  "key30": "29KK2ikatxE8yScH3GgnDDJdodLdGWtFXkBuyairsuf8WaPNDnqbstrKef213MDa1ViN6QJLu7aoCNnxX12Grqvz",
  "key31": "5f6QTdYgZtVCu1FBPMWqks3Pt8NxzEBXbYyCMBPzy9Asv9UwAATkKNGqAjarSJxFcX1tpdBatX8RaghduXZe6NZs",
  "key32": "4TS4fCB91e3eNcX2kJLYYY5TJa3Niyw645o2pRHvJ6N157HtQdMaqmm5cgUFuGcCxJCH5tDQJigALzoBfD7MQiM7",
  "key33": "5DkVXBMdEpzEQxqrw7XGTHoN2bbgg7LS5kHHD4m8T8mfuj2C7PR2qu5MvmsZhFqu91zuJsGfKm9pT4Qw3vP3TynP",
  "key34": "42tUQwLnKZHq3FHiW8rnQPgzdtmbopqMvNr5iKABwGYaEghC94it7G2aiCEcU916NdNRe9v641WaHUKkV5VrwGe9",
  "key35": "9BCBXfpJHdMkAqzaeSr28R7KGA7RAm9Ty2KgUxTTZ3Jd7YhqMBsPUpPMZKp8e4HG3xoFGEzaGGBGzLzGnS66xKV",
  "key36": "3Xy7H9Mtny9oLrJUVb1T4jzFqr4Ud2orhcc2vZwyzKeyaQ4Ft5riq5tkmXhsoT7rj2vhQLmB9GwNYuiTy7B5EoVn",
  "key37": "4R2PXm4zTJnDyNEB4F7a892e6NEYpXAzJ6aL9ohkrPPMMHun1e7DH29RYQGCzZkgJzG8FmqoAKTDhXQfvU9boRJ7",
  "key38": "4RZHWuDhXcg9PAdZ7dCMXfM349uKPwYcorvRpsFk5HrmKr2JjuDMknTczQ2r75qRs3Qxd4BBszwdtbks9saBDgEf",
  "key39": "5PAFKUVpUAPFWaKvC5ASvF75nkjmh6yucSKHyftbXnkNA5CMiqVecNHurFKPSX38MU4gg1eEStCRcD1CWHyvGfqJ",
  "key40": "5HRfFfVDZTxVzQBHQAAkGZMhyqGJBFkuU1NTxuxHadRGkPDxP4ib537b49aynyrsUZfN3rN7tHoy5Wg2JsUQmtDK"
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
