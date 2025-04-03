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
    "5CnSu5tMYfAcUfHyPzc76DUJQiqL5dWRfQBoQVduZAk7EoxPCFGJeyqn2YfLsgFLx7GTwBbH5jaP379a4atV1ebo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6i7VrXmsaw817V1j8jJ85HeF7SyWf1uH3zq3kM1E3TrP2EfsN2f1Fwmu16DnrB3CfyAmhMwD1FiyjV7FVqoWFH",
  "key1": "3oSP4uFKdedBTfBFZs4KbUqqnXuTd6R2gaKgV56UrPVf3t48EDGR7hHnJKzW4FGjrZ5EiVB7UQWmeminJrcfE3Mg",
  "key2": "3VDz1AXqWE4ZjcbHV3BAg34hVHwMvaoZ9BztWJe9jZitkmoQb4rdzVRDJe7MUKDZXGhaArPVykCpUmprLKddUGEF",
  "key3": "29qTUCi5b7x2r6PLUpK7yNgLA2SRdJNBrCLk6UBZHKBkYaTMhqLyJGDnLG4GVDg2D8gCEQBccbFM1F18DAApzHSX",
  "key4": "51j91DJ3EPZb2RFX9FKp3Kck2nsBuKPGn3duiPnS17pzwYpDZErTFQ8wp7qoVMYgFgWPJQXUy19zeoMX3GyVu5t5",
  "key5": "4YCsYgHwdVSNJr4BAS1cow2rznwd6PYbAsyMsBeHWtPXTF4jeuLbeJeY2h4S6zJpF6ZqPG4UvhhF5hCJhXtPnKex",
  "key6": "4YBSziy6KwdNndwNWUhACstbJeC82JmLEQtjvdGZoJQyxS98F1nVEzD2Ex8K112qSMpCARiby5PonRVcXNsJHVCH",
  "key7": "5WiicC9nxk4sDB1zj3cHB4vFQHWfgxrRddfPQNvxvJMzAhzjRCqFSbLw6JdosTrdEWnGdLraPMjYxYpRnmpq6iKF",
  "key8": "51x8iLNfkqNbbRpQm1FxzLzvLmBNeZpg3jjN5oF7F4FaFQA7tWMofTmz5VEJ8iTNFNLc3UHnForPKBX1yTnVoAVL",
  "key9": "5eAKztFmSm31NqJTV2Zn5zar7ZEszK7uf1uMMUhJwfUyZJDW7oxxNGkVX38uZyYGoqMeSAhyEmgYG7HYJBTjcK3V",
  "key10": "3wrnV2UzgSkP3w5g3K5JC7ybZD1rxb6GUEWqRuiTH6tz3BHchTZQd9cfvqt7kZBu7YpyFDnDSCYGdLJ26TVLb8gH",
  "key11": "2qaa7vRyykjsxZDg5Aa2zVHaBkTCr9hmuSHbF4dRFoBwpyM2WpwEBYD432Z7892ibxh347FgNviof5f7uTKZYiAG",
  "key12": "rBuUpiK8cxGmYnARYoFPT63rpzn4FWRKdHz8f7BJWE8dJXBhDqJDjmGXK1BPrExjrhU9qF7njkCHxUYjpS18dcE",
  "key13": "2zZvRHZd4ZVHD5ZfBzNrrxSkeWCJDFXJPPxqUyS9nAZzi5ah2Wvx5d7oghFXYsiQPs6DACeRy2zEdyfvAqVhmyTm",
  "key14": "3azNfYVVURyTgHUkxyjgwQjvfQBSHwBqB2LpibMCkApXQzNKnjVZDcoQCMstCAi4jhcWPFay7WQzStAv7yCAWv4o",
  "key15": "5fjy7ycXfxC2SvBupC5g62jG41J4kSXEA7r2iujfsiVyRFkivmjqztZqCD94557QaZx4bDhrBsc2KYkgERkoHpNH",
  "key16": "3DVyMQNQw7fztdh2EEXRvqWpq4CKMRwPAnT524YUB1ibZDWAKEKVVpqtCx2fHiZgp5V797qdBFuQvsUGwzLMCcAS",
  "key17": "225vjr35hLU3hPtcGzV6WV8n5YbTmeUCR9z7gkvFHcmp4Zw6jNFUsyHsUAiYnWo28eaKh91NmvQb34s9Nr283VmX",
  "key18": "o5CQhrBineSFan8CDhuyTkZ12JXtjFC2tjKZAqH73ndCHmYTop6XaoKwScdTfJmum61gnCHoDtMRN3A81WhztvD",
  "key19": "fnd1T58mojmMFUzrE5oRNp2Z8wJACdD1bwokRgXqgRsm9ku5bEqDyzu5rNokZZ6YC2E3uPjwDX3MRxn2Fc7Ey7X",
  "key20": "3q67qDXsBjJWi5ZZpkXKxGvDnZFT3gF9bxpB99Cx7LxjM3NEQSgoPtHrX5p9gmXCBwSqHNGdh8RBrPGtUx6VXDYW",
  "key21": "Ffq9QNvvErqQTJr3e5BayqmhsaYjmen96KMuaTD962J4kYTANkRQjxJBvRao3TASMyCJbnR4UaWjJeS5LqoPKSu",
  "key22": "2yJzEXgr6MYphRHqDuS1dGqGXiMY2RQdTx91izR4EsCTetSoZabUgG5GpZqpoLs4qCL3ikDFGWYiMsW1Zg4vP3Ej",
  "key23": "zqgJMm35pfKvckWiqbHPXb8WKo5J4oT3s4xLfCxvVtgFWED6hX2Kd2sPSpVpnAqJQyvucRCKaxaeDtXqzGn6t4f",
  "key24": "UvA4UV5BxtfsFDXVaWKmNyz4YF1ZCPF5nyJMz5cL8R6G3Uwc9Nh5ik7krjNcGdRMVcGRfMfsd5o7RJxxpYsvkQU",
  "key25": "5XrhxVs9VLCaiDPJNUpiFtmqcygBdQ6U479UDUkCsiAVF7AyHAcfaKDkAEBtmYNAaBk9m6H5Fs3BNB3AXoGhamWf",
  "key26": "K9q42hYFaqPHe6VLPX9hP7J57qcYjmdPHckuHTobABDcuCpAFHFoDMDayMABFqCzmGEMNt3YmyjMf3mEYdYz1JF",
  "key27": "3irBw6WszPWRE13nHvWWW7jJL7pHQFe89K1KJFvcJ2qtP7fc428jGostKcMUwY4us2V3smW9exNeBPGxa1MkVZwi",
  "key28": "22mDdGGTHxFLswex6fbY15cP8JNCtQPPfJpwNsosTvfXZyD933m1MuyM32zYmkJJVxYekLg4HiKiwZwtvPVcLdZN",
  "key29": "4LmCkHWAui7Yu4LMGH9TbqAC2H24LrayeHfruZjAGdLpToxLvnrpWGNHvwE7YVcpvmBLDaq2QE5VRo49CMGmnEon",
  "key30": "K8sq4ELjCvgSxaaLoTsfPi6Mc8VUqDxziL4bHs3NE7L9gQxd2j8a9CAqp5cxP1FTqL84jWMcidX7Qrrde6GF7xg",
  "key31": "535FKkg5a7f5ec7SwRAHTq6yj2axAgNEYcsFzZGHsjAScDynEKEpgcaKDkZZFayr241JanfpfdNUtEEFucd5kcDd",
  "key32": "4asWTPzoGydSo9ed4UFjkEGQtXwhbXj9sF2cZUwn3AE9N8Yc3rM7BTUEtSpS4bVkXJwE6Ry4qtRbYQGshbGJf54M",
  "key33": "5WRfTSRg1zpkFUgKo2mnCcT1g4xWThDkiUU9ZV9xrkJFU1QdFowmRPFGJvUifs1k4gwAAnYavweHy7E1uPNw2iFF",
  "key34": "GstxRRyuBtkCUM8RjY6BVtznGDW37jYC71YMpVGYEupphnN8afNLWWuoSKL186A5RbPvL46RqHbfuh56mYewPFN",
  "key35": "3d8DHSwLpNy5eWrKPpaMQrddjS3muPafQTNrBZXbtzbm1yjzTrqYinCXMLdA7Mniv1mVGkzLLAifyfoLqBMUhEom",
  "key36": "VaELHS45KL3G5XL4SHxoR7zvRM3ii5zTbuz9NFvG9xXd1VHTcGEoHH9fnECLkvxtW2kdtXfzeqJ1kP5JJtAezwp"
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
