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
    "3MCBSdfTdz1gYF2F8DiCWVEBx8kg5TNJU4Y1v4jokHdi9EZnGfyZM8E6qDvVML9J5USm179YKb1mJEycWFhd57M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muN3QRw1QLru6P7dgAZ2Pc72oMePRxD4GF9fG61ZtKffhhQBMKFzFLfG79VSA6DPmhFfKN79y7uHnH4qfEokFdL",
  "key1": "4Q4KWfsGewPeAGqTG1guoUZxULeMibvzjcv7TcSgc9D8ijMxxBXNV6ioedi7RJ6ykjvdAKAYhDjHnS7rQXaxceYU",
  "key2": "K4ssDQgr5ScYzCpyJ3fhWSVzA5ZpV5GF1hyV4S3yq4kWokEfUM21FJtGsXPTSVCJHbuVx8fC3RWGLxxSbvFVhis",
  "key3": "3kYzYuuSh2VkKM6YWGCkEVNABWh1qYj97cKKpc3WV7uHE3fJF7TrBbkL4jDDB3gGgaGUPxQzXReHok2r9TFwNLVK",
  "key4": "gsMQNWrmDDvU2bgBwBkXtYVLRZoDpVrpdfwwb5BYiMT8aX5WnHPtCZBTgxVRMLh8Vrfp4ujzQiradzVAvUuwmcu",
  "key5": "44q114zCvmszpXmqnTkZu8BzvmVQDXDcqTKJ7djqSge5JGxSmTojSd2J7JCPNbT4Mnf3FG6wfVN1QdNr431uEVsY",
  "key6": "5cW771vgZ5w3bkLUBS5YvMheeAKDe2WroJhGk4K2ne9YSunytVtkJojWH5U4GZQSemb2i626zq4D81n95yDCqK4w",
  "key7": "LHDqL2XdUU1THpcXLFnZgAEwFZzzrfAdp5QSb5ftozEBXYZqXuNnQE6AarRV5QK95UUkpYui5NAEJEJorizuskM",
  "key8": "TyCJeqKc8bx5vDDETa4bPAgqUhwZ8wsjtW9G72W4j7qP1rDbbYB5ikzgRkWnJRnZ53RfzSHtrYnNrJfUTWnWydF",
  "key9": "SfUZEnztcEK6pPJKCjnqZdy1GpLsteEdFUTJdvTydnKddAdXWSAaSVvm8rswbPDAQhEXE2xqEBiAiXJLxE2r5eP",
  "key10": "5ceRBmoumpbmbZtAAu36tBiWZCPazCRXfpmGnJqDeJUHChYPhwfsaK4RyQJBipqAKi2E6PwskgLk3ehCF7TnFno3",
  "key11": "4H67i8nNttirwB4tCYwrn7he4bq18ABL7M14EBCZZFcfUMSYSdFtVedrb5sbdQ7CmbwcqHKMkwRz9tvvNrTE6JSV",
  "key12": "3mYDFTtmzcJVGGVmca5kR5kmjwziQY1kBqtpze45hUxQ8M9cVyJqnvkWZ2U3V6hmPBsq5N4dFM3TJcCLaVxQtsYt",
  "key13": "312cQCoPRxHx9BxM7qD15xsW2VzYnT5Ez6ZFKTDe1SNupE39j54VxmUWpsPNh5nAbpScc2aHpsqQkikWJEkfXEJT",
  "key14": "3kxUUYCfgb5WAnUGia2Aq1FNwchAsedchwMet7N9KQvhKjwMVrTJFXTmPDH8x2TeqQVhfiWo74JdxmHqXwDyqMc9",
  "key15": "LZr9n5s7Rxe3SoXL9nzrynoSYcseX7mTze6va8PnbeJvR1UR17fvssE4gWg6Yog1LKwkCXM3ivyUZyTeEEL19WR",
  "key16": "4jRwZ51d9dFuwcFWhCZF9H4tTqtPyf7Y1wiccWrQWtfYsWD5SySij2TtmZHisHWr52s3aEiJtZdpbjWNyGUhdpnX",
  "key17": "2pgK87BKxReAJzyqtwuquf7tzx8UJmi4yDVSUHkyfYrdcM5X2GUZgsc7yhSX8YNLTPJqh7SbM5vPcJaT8y2yhTvv",
  "key18": "4XiYaXAq5oXvFFho2JDqLKFvjBQuzGunV462xqERntv9LU2Jsk88fyqPF7sFBXYT43RxxGxGfZUv71LJESd2Hmoq",
  "key19": "4g9J6XG5WYtsmp9NzPFQL5F69kpKbnthXwqAQ6wjMLinkizPtJMKKZ8SvmZwDM2y7Jda22twTYehC3aaNiBc1T9X",
  "key20": "F1qQiSwKGed8Q1Zv8jo5RDP1r5wWZH3K5mRijJvs1AdqLvdncTNKmfpCQJ5JpYAivNNw15ZkuvHD9ZXLNST1yfg",
  "key21": "5x9EKoXgTchvu4ss6MWACjHW3zDpwmbf5piT3LbSmA91v3r1AuRWubkdoLTJxFYrkvjJcnYKFHgVVizuUkYJJTqh",
  "key22": "5UeioQqsxaZGjkGKNXhoZgntvgrBkTpnZPWdd9CvTCuybcDhwVvm7Q5H5f5Ybjpjjn2GAHaEzdh4tDNqGLY29Zi2",
  "key23": "46J2uVXR3pBvC3eBN556eC9XWZDpy5VCJMdJ8qMKV12hG7TpHE2Wf9j2ie8upNx7zKQRANHD7NcWoqyqjveRKbkZ",
  "key24": "4GxswaMrPT9ZG1nTnk5MdcU2woaoiXyx3jRyCRLJWWLYbaj1R1ZvAUVgajEGkxJ8TJXde3zAnEE1NxorZSm9HGwU",
  "key25": "35uQDDgAwx6rozX9xjXEWvQxET9YfciVkRgSxLKEqjHPDa356RGi7Z8zWpcA4WMvF1ZoEeGKC2FJNNM6sc4E4d9Z",
  "key26": "467CEJ32unBWddBR7kkHoj1Cr7QPQa4REBEAnfQtd82YgKFKnfcVrDS2m3qsSPHkejXRoE1AT4RC6oQdvgmN3Zsb",
  "key27": "3d9Ryh6yjXYJEhxaL5h9XKkRi1QQfU1Z8WT4VcBZH3hfFDog7Nsb7kY4CSAb8UpKXuF1PEqSpg5LC1TebD1eJ5sW",
  "key28": "sjfMV2YnxjdACkxpehmsgH6Wf8VnBLM5XAxyZti8XNPn3cvD921mxCssePE7EbHAE9jY5XYhfRSbzyRAkrN2uwp",
  "key29": "4kzjwbJkTLZSvUmgyp5ntB2SQV1dGgo2w8rWryynzWHPGYrJnie8QuFMiXvN9kT8fo4ybZLUuDmee9cKJkJkL55c",
  "key30": "4Lhf7Yd9V9jYB6y6XdTBUXQduVpZmHE7tsvTfUGGJfJaznZ6YTxKnfRx9hc7Zpa7t3QDWmCsUcFBwFMUCKWBezcx",
  "key31": "BjThPFdGAycVh5PWwxLH6swRocdRg9agHjXjj7d2vSCe17No5SE2yLkMQpCn8uACZKKdctj3eVauC9h8zdoTSLk",
  "key32": "4hwxEm2x58asV3ByNLkwK4vY4Q3ux221acLsvjNN1932bEnBFR5nmdBJ5G7MERgDq45DrRoSJ24PUtThqTRZ95UG",
  "key33": "a2HAq5tSp94myqSb4jbuqPXKCzaSvjZFvTpDzYrCmN4M2rnwwKRPc7MeP5ZArEQiFEtj6PhpHPJRo8eaBnF39eL",
  "key34": "53muDpSUnHqcRLH7m8u8si1gLTcsYPwXGhrLaEMC8FLtrdLaUE2hfkhNCxfJyMK2jf7WuGWqYNdHVjs3nFrGpwAT",
  "key35": "672STL6m6TL7hfFCUJDgLEHM2jz2NYRSc3QdQrLQjaCn4DZXtpMFRy9vyvE8RtM1fbdfFMdVKHfZpLhJ1uZZ3eB4",
  "key36": "2twUciBqN5mLGGALF4cCNgF2tYmNV3LDFFeHxH55m78FNEFSSGN5CrzpzoAjF45cK748ARMekGSEwr44GRY7jxjd",
  "key37": "3hkv8SHUeMFgY5duTK7ovDfHth7tqLxpBrkL3pQvHszgSrTsxEh9FWJxSZZvTfHMygDALw9YcCGPzR6Pz1mGmo6S",
  "key38": "nJj5jdi1PgdL8zEGwAmcp1uZGLJPyQVeTqt9qbAz4N6vUb9hyCsE57gjuGrPiNsJWF7KsgAcKRH92jRnCRsgb7z",
  "key39": "rWexDERXPK5zGrzDxxtwXf7KNMdrRTnedWUq1esPPxDVq7C4jDb8pUBegG6WHFQyUWirgthJPHFsMf4bduZvvUM"
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
