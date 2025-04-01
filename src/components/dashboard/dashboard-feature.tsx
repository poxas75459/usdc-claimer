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
    "VcryaYu5TuTh4WuUCUf2Fay6mmWDBfoi3cVkYkLPAQufmL4gJ9J1oL6JYGrr2Msbd7EQc9gSMSnjMhpUscFXMhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkhUyjF3U7XJcxwYjoeQb5Ro5hSbHb9t2fAEkLjAYsc29UZu3eCmBQ349GUAcnkk6jq6K7X1p5u1MYGrZ5Asegp",
  "key1": "2fCJE9gJgsvEwtMkSYEuHnsWeZtkNiSbduyZkT2G9Kts7qojpEy1Yop1HoAjJFX8ePmMaPwzT1o29TLzUbBYEu9v",
  "key2": "5MTwfpEgjJZ1shnVMi2zLPRdcyrVkdyeWvtF8jw9mqJLJuwA5PCcvbQ7tokQrZv77u2TTnKeiRSPpH6eHLjUt4SB",
  "key3": "DSF3WMkRqF9kiSgzrSsXmNMBhEHtWCkgt4LPNThFgbiSKrqdhi9qvzasdMaEpXVK5dGY9hKUM1bsnMiCZCp1uVh",
  "key4": "626fgMRJfH3t5CADqWfLWXngA84QxxvqxqxWoYSrKHi21gXAsCVAEn5Cj87897kBhADC7HFRtoUkoyBEPnUDfy6n",
  "key5": "2jQ4Q1d1cWxuYN17W8pH4FHe9F8J4uLSnqxWb7At11XDjYBaT8F4VabpT7w4k5pqRBe7dkBP7NXdFeYDpArjQ3pu",
  "key6": "56FgUVMksSEE8fwS4QNXnPsfHUx2iCxfybXvQLKhZGL16k5pxdwadkXVKic1nJr6fwJRGvVGtZ4BtLe7RWEnLetg",
  "key7": "sqKRUuHwwuJTaPdU1sX181fMYv81VHDkF5uEShrbtijUT1o1WrMo9fF8Dbf3e1j72t2Nh5xkyhPsPPtqdFgdyMK",
  "key8": "3L7124QtRnt4RVwGo7cf66Qc2ZTxQRbkvkJnUoqrhXAUjNpnPD8kjkXg2D8QyYThyBtNo34VSkGsyj5XtV6WeTP1",
  "key9": "314TCHCohNYYhFCLV4PwbqodyW5TbEC6XKFjZRU2uWh4YRpUptj2GDPUenVLv7hZPwUxZJQFrrqgZNznod7dLSkQ",
  "key10": "2he4wKTYknuvwTUBHpcUv5WT1vZyWayaHHFeuLbmXVGoJL45soZgyQ7mrcEDxNzwMdyJwUXpeoK5d7MHcZRqzhPr",
  "key11": "5pqFfZBhnE7wTucbhrivWULmTAzct6TWnPPX6Liso9eWJXednA3g4e1xvcio6rQeKx7qresxNVRKvz1ixvqyBuR1",
  "key12": "xXBz8F87SzgkMqa4ePL5m7sRsgJEDh5oc93NQnQ1exDiXDZKkNcQ8FpjvxT9Jbso47J9mNocrvbQB6fAuZNX24V",
  "key13": "5HAAAhYSQhKr7DX8nLE9tZieUVTj37x11orqDPkfS7gerDSGns72ENvKe7RgH2anDuvGhwGQM5pJwSvUEAkKeNd4",
  "key14": "56c25cLDj1NyCUGgZYihvhZYJRoQdRaSYfWmnvfnZSwVBiC4QJQZfUurzcFEVCnhvQG6WQEHP52XgpHV94HAsCcp",
  "key15": "4EscQrL6beqcKnLMz2vg5N7XHaBpW8doL6eDBNqry9U4fG6AVGgcP9Vxy9dqccn3we6pQnd8jVcdCY8nSmLydHaD",
  "key16": "5ggkwSyhvjCMH6p3yz75Fo8Qec7cxt9rbvkfE4YH6eDaAJ7XYWStJ7YxAmYGEa7QH5FPMqEnHSehHZ1nAAXmJjq3",
  "key17": "4aLbxjdJfNhR8gWgm4gLCt7C4h5BTNzCtUD8toHJztfrS9PYug7S5tmrRv6kuJSkZ3J8Wkx3yMWnvihAUrft62vy",
  "key18": "3EgwH2qttghNLMzeR8HYHnyDbXKj5sLS5XcQw6dAaSCWje3EanBDarhFFU2AFsZvYpdvy5XmPmqp2e3EKf9qaZJ6",
  "key19": "xp6Md2LuKYT1bFZ6hKthLapaPvg4gGKMchXhvnkWpLaeRfs3wZ7gZ9ku1a977zMDxVWhYj5bdAym3BYtK8Gntok",
  "key20": "NKciWEfV1QoBEJvAkVseMzKudPTUbdkP4vEhAXKyn9UYawbJmj7FJ5MoMsnkUnEH8c3y6hWJX2HfEMTMXS3sZZ7",
  "key21": "yh1Ngz52cBiBNvSuU1JTnDHZh5gCnrQaatLq52rARRvK7uHbizohYbEazHcgGcUmx6dD7NfVwgoRSZcbGieGVWL",
  "key22": "2fCvKwKSpjJVxEko1eP3ZY3uANWBfab3oyNMJ1ev7g8QMGzkr59zobH6iBYhUosbRvg6zBwt1n77raRboxU1Kg3w",
  "key23": "569EHJRJh5Tu4XkyAyUJDmuRTBiTnRDQPJGXVA6aqK3iDhS9ebCnkLG851znWQgZKw9vUFJQVYXrQ2DvgNw4ck7y",
  "key24": "3srpExrMxQUuUTzjmBUDASYeRRxQ56Q7LJsSQET5gejkFqExEaiDZTuv96De1nvcfMG24RD86V4iHCokbmafayW8",
  "key25": "5qQE2biPTSnbwgCM2R1ihy8Km1BfcY1NPTNqpaBDpEEMeJrW2vEsvrHB9f1JLhdwjdAam5kPzEDBJ6Abt2eWm8iV",
  "key26": "8Nm2bHJu3EwTHc1h1ng2gDL1ketgwbdgNVqCVRxRM1xGWbmshcr6R2aPTiHAbWDrZhzoLz3iriZhCXk33GUk5gH",
  "key27": "ZbguqBiiqyuNeG5raN1ih2KkF6EWZeR1XiNhCCHGdUmP5ePFtpSc1DzZUH3jwRWQNonkmdZLzUJMk3KW7dtGyHM",
  "key28": "4X8a19o5D1isBmz3ixSiLuit2GNmo4Tw24PWS3Fs1N9wYcqCigvwJaA6yH3E9eRLth3tx76T2wTAQnNRgkQ3UcUy",
  "key29": "58BkjgsixJskDrdkHCVRDUp5tTrMV2dEX9qEf6HPPexVdABN5VL1AFBJ4adNiNj7cEA9iu3T5wDDAWLKN7tWQJAA",
  "key30": "4gggaCQahyu3SAqBvLbHJvPnKCaSNf4ro4m2CbWFKrXFG9PTaEGoSQUR5dJtvtio4WgpmbUyGxeHmFBBPdUN6tSq"
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
