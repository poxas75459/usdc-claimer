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
    "46D2ftQi4NBtWAkEDYm7pH5bYnSUCK45atSzoeFgwFTqA9j1ZRJkRch93cauc97wiKoV174Tqe3Vmnh5qQohQFCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WRER4pPTmNQi4YsyVVget7gesEV5zaoUkTXNbriFaBby5bgMeQ4yxtgAWGd1hbQD8ymsQRZgL9SbNxtSaoKngFM",
  "key1": "ZEbVyeQea1krpDxtV5kaMDofpuXFoT589AZysxBJ3U4NNtXEda7rDn8vUt1fUzzCM61VCxfeiTf7RfiRKDBush7",
  "key2": "2CuFYihuEir4pHwiWzJQCueUKGrnwX63m6524znb6pD7m7tsy2W9Lfegcx16h2TCfwUmL1BBbY7eZ4dnKXnNBSrn",
  "key3": "57wuHizd6RzPtaa38iRdQpL1HLeopJCkbJ1iRuKahMdmBkphtMhsr694GqiXh6juNQFaE3w58Ro6vxC4NrNbF2bJ",
  "key4": "2pHZvYxiHkDcuBypR24WcEVYwqGuzPtg8kpUcgMdRc1QQCVCy9tgy5kLbZkhz1PZ6JKUx7VSGSZ4Z65ZXFLhrgyT",
  "key5": "4Sb7M41GzcpT5toHkbSpKQwEY6KkPnwF9myumup8aLL6zRy9Qdw34WsZ6v8UhfvigSyRfHqLDbFfv7rmum21NB3i",
  "key6": "4yk88r9zqHpXWA1NhQi1CKb7v23BZ4W4MwTWGhn7Wg9ojSAaDsLUC3D9BohQBdW13JGd5WjeNA4fFo8yCv5oJ5SF",
  "key7": "4h4ioLfJJSKjHyQ6uTz9MSKHPSwpct5RNkipH8qnaRq5GPhomXgv1A1V5ehrm34vWf19oRkUA7MUVWBY4nQbnb4e",
  "key8": "PQzc4bYdggYrJ1Gk46ZtatjHCvbhcxCJ3CyhUBbtfbQNaPmNDUAaU1kVXmZEMZEm7zp6B5222ikZBEbUi9AWxQ3",
  "key9": "2BUqsKKoz45oyHHyyxjzQiaZXSjPkBeuoSPi9pUwqXFotCLynByyj5oReQLZggx83iWwYfg5rzzqvhwCWNL8RfcV",
  "key10": "3Ct6Qb1mcgoWkksMG6f2MjaNea5kuQ7Jc2HGK3wZ825BkE35biWiyJp4e241CaVmjpqUFCspFddgZqbYFH4tijKn",
  "key11": "4nkbK35tKKTPi6DxWF5Urvgwu4J6F7DMpyWCo6BdczEPE19o8kC1MLoyeKg8iFyvEqB8RaUPuEqYPEo15xXkqkwa",
  "key12": "NGV5PqqX5wzV7yAr5RQjkxR3UJnBn9gAB4TkwS4JDvLKAqZ9aGTgBbFPZDGaUAfFmxa7wLT7LQ6bzukEz8NRT2z",
  "key13": "3wcJeMyumHrHd7hb75Yeb9EGtV7jz7WXpf4vaPD6WMBJp1TAshsz2RmrtnhkNmb641xYYXnwFi6gyGuVDQLBBWiV",
  "key14": "2nKgErAkWxXB3ZHbCQWuL7rueChp5CCuDrsBTewoeHFxdZpKYnvsytEpFCetVrcQ9N2nxoE8mKf4azjLA5yg5p3x",
  "key15": "3KtoAVc8ikikszYtGgrmcNQhZ9P48CkgAzUWciX1q18nbhyhjifamcZTKbae5NXEhNyq1GTSg2tDMEiNphMWSTD",
  "key16": "4yoHACEBbWW7V7JephsH3QySXrneowoneuFVvQdLJqBtuisPxdT7diHFYCjuWQmcr4ZEo3X2yyQHBm1TeMUNutJi",
  "key17": "5kdhvMN4KZ6VfJCHjX88BStFUXyVp5xTPSCue8o9bEoGaDJ1SKfNRQNerD1AXX9Go4FoDTq6FEYyCBscFiAxBtFw",
  "key18": "2KBJ1GecNXphSHiF7qptBGkfHcuxTwvra2ujrNezPkhxGqpsZcEknS4bHrf9G7YRe9vNkfKrxZeuzBQT92qtfAVk",
  "key19": "2MLcDsnP3DL6ijVSqejFxSEqpP5sYCdbzHcCbTjhh4mfUCCz5FqJGSatWqBeYZbUNZJMRSvtDDhKBerxeWmaptNa",
  "key20": "48EnnjuYC7A4uqzZ1LmXX43EZ9Psk3cEteYpNtguPJci3U38KXG7ULKcxUu274U79GxMT7tcctEjBEun22PquLDs",
  "key21": "5EEZgukmZfRmW1x7v1TT7TNL86dHbHMrXSbRDQzko3zfhHQNHW29XfAd6VdHbbAgEnR6REe5Ddb6ahJJwGiNu3Hb",
  "key22": "cc2cicWpsBeRSN2EBvo9Bfbg4am7CmMAXcvT17Kc2fTzUindUPq3anrxkzbUonA5x7znd6JR71P8TJTz5jQoiMm",
  "key23": "3kVfoeztzceHQNLCZj8cn1Tsb1EiLXJsFmW5T3F5vc9WXzpmuF5Um7NUBEhMnQXurqnMiTxP91Xmz7zoKMpcM2eP",
  "key24": "ZY2fi2MTaUrGBG7Wv8XAYL8ZXHkF8EVe7Uc9atC4PXRGdtuyYi5NPqEmsWDgtxr2t97HPLe9uMPSFJ5R2cbvarL",
  "key25": "5BEDT9CwkDbNU2CRqtrGvBKtugW1EZqdikLPFDkc9EYQexfRF1hqk5JD51GWJqgj7KaVfjw3p5YVRBZKbcjSdYka",
  "key26": "623j12CBw5ssQt3dzpWdCy384fT6JoCZBK88EpytE6EuHrLf6xMJQR5h5raZ2HJwzTSGbjdcCEhgzATQix4ZQznH",
  "key27": "4shwbKNnrB1KDcPPX5qc42AsGtLGJdtUyk4331NTxzH5JV7B39zKSMmAAHbXuCQW4FCTqhPJLDueE1dFn3mMeVTf",
  "key28": "5synm8jxoBkFQtnVzGG1knvYAXzvRqyNhCM3s3Dup38nQrFEhzHg8hCfShX5GVFZUxh1zTbhD6i47fYiCPo1C1pb",
  "key29": "3qZ3wVQCPjXr7iALfAQEEX8rUgKLpngdT3zY5oVLn5PYso55X3rrQhQ5GtUSU8oHaboLDtxX9cCpycyeUAr8a1os",
  "key30": "23vg61Qybes22rhP6CwDLxfUn2jNE9tEfSyoZR3dVbHwBNwfGBhrvDRWRv2kP4jQtn28AdDD3YaKEhSE4cFwz42L",
  "key31": "22mofzPy1qNKzvwCohmazUDuWFgffodpCnN7CNxbmA5kULeiqFMqLZ3bMyo4m3UZomfQ2zrNjXV8aeyZbiCkVoUy",
  "key32": "26AocYFY3r4HEqRx9WLh8HfGVoTBUJ9iWxM1ZebMjR69RoMntekx7nXerw2LZyiko5cDQf2gXjFEwCyWhv6JbutH",
  "key33": "aGGhosqWpj7AnKsnRXzZhCwUthsBnADohZK51K7gB89DkEQwasmY6yCtgbw2uMURURyRSAQLjk4iQrtU6CQEZ3x",
  "key34": "3uATqBSQvHoWaCwPFA2eHPuLzkvT4hKz1CmDLyBqYMjhaDzCbsTmdNXxGvktDRR1umS8yEjHh489G1XZFRShGAYp",
  "key35": "4uoxgZMWz4UShzvAxd5nkfQmJXvxcMEaoPMa5N3T3XPKUcnZ7AY91qn1EBWeSFj2KisXqDGpd2m1KLLE5JyBJM8s"
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
