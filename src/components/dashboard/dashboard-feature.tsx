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
    "3i7xDhUu8K8wceAW3CzzW6CsGBiSrxTqsn8LQyRcjBEfAy3AXtEjj2Xayas65DFYdefzudPEmFMzHJYWHrwSKD57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uU5M2vr5pfDVqFeerJsPqoaha3f97eXusVHihu84dW5veoaycpWuzG6gm7cmYJtWvsC66m1pPt8cpXPCrhsWMwB",
  "key1": "F3ym1uRfke2eAfcQZmYaub2hZvr4yQKeeP6xytzxfBfA597jwDHFScmuLen83amHAKxVvVGo1Q9DyAZZjGmccgd",
  "key2": "BeDbCceUhEyWzBZazwKntZHryRDGBYhTXuKQPJSC6xAwwKM13rJa1Z3G9sPj56shdwbYNZs8VSoS9q8LnyjJLCT",
  "key3": "347P7A2CAR6XaeJRjv2mocvJSA3V29pQ2j6qv66oydKEUC93Txt3c1zaUi1qNEyLQaKfj4ubnyJMzTNwS1ftAkr4",
  "key4": "3UYaJcQViCWvriaY6fZuw7c8HzT3j57BtbidNJHfxYjVTzc61fcuL7G2RMGzr1xWkb6cfeN84Zx9BaYzQ9fkxurZ",
  "key5": "45NWFQycnDexhkHhSYcV8enZ5eCndXVHSrcbH92jMDch7TkJmH7hzJopFBL95eeA5U21p3rPMpXSo73Xd6iMQj8g",
  "key6": "4rMPv45TbMYCbGjBLiY1uYL7uVaRgDrZ2nRfn77CFrRUJVR5aFDMRpYN8ekzpE17ZCgf8kN4Cd8VoyU6MDazV5Ha",
  "key7": "3R5i6xgnPHPAwkhqPyvCKvGCikgUXDKHQgzpNPwfG3J6Xi8A7ZewbuErkKmJKeJFWxq3K9JiGb6jv3WpMqTAFnuJ",
  "key8": "hDaxRWkNZxoFAEeb4fxRQqnTPCj6zJAA1vnvfLdDxPU1s7QLUWL21RLvGf7PphojCy6QTt7mGyoCQXqWbbMLUxf",
  "key9": "4ZuSS5BbxErT2UaEHZaL7CNbo3EHUYJW6E8kzChRUS7NAC4rLQtVCyVNDRrk3pPt6VBcFNw5pfg8h8uBCPveZRuK",
  "key10": "3a6Tdq325KvrczwUp6G48CXPcBzktvbmmDt1XN4iFyZmGx1CDdEBcM1DgVc66qMTAanF4f8MAfa2kGdNYwwrKDyP",
  "key11": "3P8CEfddMgapazKj4jbtG9AtJeKGdQpNqZL4xWNjLNixUvDComqobLKJkaBWZWHzWrJDWnYRUjoxt7DWumkrFCda",
  "key12": "5cfuxuNEviH8vYCa6g2mzijwpVwxYumRRZkSPpzEnZUFt8TCezPHsSu63vFnLDj1MVrx43Uwv58pWtNpt6RZdMni",
  "key13": "2gwCeucKZUr3JB9gk8ub1Kjy1i45e713X5f1Tj2GMYRs2q7ZNidfqLZYxu4yXZfoUesVNweuwyQy1nVs24S8BviF",
  "key14": "4KFGLeoppZXnB4Xei8jP6YDHH2q5FNoMp42snk2Hzo2EeCxgT8T788wRogbMTZaoaw4StWNfVZQM3dthKBajnbVy",
  "key15": "3Z7FWmZKaiJn1uNLjugu5BpKGzEJEh9FUoetPnfao43UEPzgBzTS5TYizmz7mTybm26rwfFTy2V4Zv4ksc5JyK1w",
  "key16": "4EwC5pZRrp57q14f536X9wUttLEf4iVpnSVA1S4GVPwzVXwRjhhRn1TFzKQnRJTNicEBw4aHbUaEZTPGR49ZvU64",
  "key17": "26mFeAncX54puU2KMYyPpUBbsT1AVDC2nvVenSsLHNr1LLgsN4hexCxaHootxW18QZzQytgEE5Pfd7VCwUxMkxMg",
  "key18": "3XMERUeQGjcLVaaJBfdwXBzPj8ziDj8sZUPz3rLwbX4Q9ebryJLk2gatp6UgaW5izGLTsb6oAToz5YBgfQaAcyea",
  "key19": "3TaFj5xPnPXFDga11o7D5D3A8FLULLPKioA12wYhTavY37MoimXREMQw2UbJzvRo71JXKFXo7Zbryzt2cPcFJ8YB",
  "key20": "21iafxQSjeXSL8LBnn1ChEChyaGZoMDTojg4yqUQHzSXsvoh21xkJpqHYoKtNSvd3qP7Wxt7298QEK79THrd2NZd",
  "key21": "61UBYtzUzUEjheVTHiWBs5LVBfJAzRY4S5dC6zDbDSYeFs8DM5pwjLjgxcsX3ebES74rAhdSu3PGtYvMYJNKzDfL",
  "key22": "gMRJTZXZvDybnew22fzCz4yZ6AffBRVimUW8dYnhaN54SKCCR3QSgpNTVjMv2XBGLVipvgEdXw64WsCxy3JFvgo",
  "key23": "4RTKSLjHMB9Syqdu2CcFLBirvCd9gu9HW4LJH3Z1n2wqGXF3p1terobyx2qjJzx1KZJ1gvtuH7Gjh5p9St2VBptX",
  "key24": "3mks3i2zPMUGsoNze9su7H6FQ2KsnvwMykQTNY3L6ksBHLGU9KJHDMYYRJbS551wsLZH8AKJdpoL6SzYnUvMBp2o",
  "key25": "4AJ5C9XWu2mjP8ssgrMqsLRrGcSKX1YYXFrF9FSsENq86Z9yYgkYiiR9LFmyWKPThgTjsBRU82qcTqX596jzf3F4",
  "key26": "ozJwY1Rn4DyTzj8CjBuWLmHrpBMLu3LifBaMQUCZeKJRNEn2vLeWZtHrJ1zfzAL2d9qo7P2tVgtSCMqpqzU7dXP",
  "key27": "3WGiCjxC8KE3nJaHSoTVPbYeKDqsZvUKHwrXvcE2wGFfVe4cyeqp2k2gHrTUd9RMV5cFi9fmXKt6k9jdae27Be8M",
  "key28": "4G59cpTZjLrDzasBWSjEMBDQwMz8P9cfUPSWGbV8gaMVgvecjfnPv4WsMJTh9bvTiPj3V7EEhCbsWz3RMdv4LB4r",
  "key29": "NDD2wwLu5Zvp2ciiFWzzqmcPMjqhkxYzZ7sPTWJp7MdxtUvrZBHn1knjtFWHCGnPWcna7LXuM1ycWUX234AMB1u",
  "key30": "2D342vHwrjaGJauWReswRkzDRi3RibTkv4rfJvSBsKkP9RNRYzGpfi9nYthLhMe2cbGVteoDWE2aUB6nPwYNRYYH",
  "key31": "4KmR3KYcGGkZAB5W4eR7tQox4M3Pu7vgABhCck4r4qMV9Fft7CLfvzNffgBJKLV9M39jG8GZjQMFNY7EomhjshoG",
  "key32": "4UcQtBFeGmT4wb3QR4eXMhkQf7gmnC5tsDqDXATBMWfQ9ayx7S26FuZHUjg68yCFpEHmCo52YugPvwtugyHKhdDm",
  "key33": "3puFQ1z3QUrwMKmL5UsqeeRNmCmzHJEdGZUwS8fx1nyk52M4XXjkJLfk4wK1FN6zWeUu4nSqydpMXAqMqYhqtEzw",
  "key34": "5T3Gfc6WSTAZz7yWHGcwFiTPbTjqMspuHzeVWq3HqQmGEgixC8uXF9nP5iQNDg2rfCh2H1nCCpCsfP8ZFiQi1kUx",
  "key35": "4fhQso7QLUWfqdrMXxh9qsRTiMYCS9QvgnTnnVCMmYpbkAhcxJ6YwL2yDGvSwBakvaSoSvwSBKvms9JchQGdnoBX",
  "key36": "3K3uFM5dYBMjgBEdhwpVWa17ud6SVs6RThGBCNccT2h5yciJnFXWzQNJEuJh2witkzrrcXC3W9Thi4g24H6dHrmN",
  "key37": "51qVorf1enA7r1JxXo6svKcbeWxAF66pyZXGhUSQ2Dt7jS19KZSdtYC4ETHrD61e9SuL6sPZ2pYKKgLHBAMoTMFN",
  "key38": "RQ5TfCbEW51vbAvwkvHLdUStnHhDrGsgzH9mFycWSqEMEWH2NtffqawRaCAoRPeBF8dj7vW6474LEpiMaQCYE2D",
  "key39": "325V3kb5ic5AVbxXcDj94kUW4kZPa4uUM9zv1ye4tofwH3izoYyVagcYUgJUur3MC6VgvydidnzrYWpyrBtWdFkG",
  "key40": "3fFoFyQtYzrnp3UgPjnxecu25dtUFppTK9HafJ2XpoWGFBnrsLpxSHdLPKTeLNtCp4RimC4m9jLmW3R2YfeSzMCQ"
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
