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
    "3FTg7peRnqNF5j7pUWg9imT6b2htzHNntZffwB1ir5cTMiQUgQULcoBDspUwpcnpwm4YwHrg7H4H6J3apqChze1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZANxbxEQJkLJcL6fPne2vF23S6CNHT2q5BGZ8PB3E7ckbzmTf7oh5u4s18FowPfmo8XQ8th5rX1Lf2ukDcpWKYn",
  "key1": "7RCrnnuh2PKRHMGPf8VkibZcqf4hN4skwuSDdLQryWqCroQFUtVWsMB6BQ8zhejVDQcPbXkji2pEt2rVFRujDv4",
  "key2": "2A91oRKLWcMJ6DXri9yW14MG86MrqVjZ8duevRMsHRcpHQgNb9a7ywwEUEXeqSv4hMuB9N3YhnZzXW9qGa3g6xDm",
  "key3": "5hC5toN4KECSNhtEBVd5LeqkPW93GgLjf1z5oTCfHZFAEexhVW9sx2rPzJaTi2ZPcyP9HFYHghewRMNURKDb46SV",
  "key4": "pmFw7GAx1pCU4gcQaxnCfDZQwufv4S6FaWTNaXZuoYMJwr92eKepJVXmRYzVLGiQYB74EbiMWbLUARfVex5yisM",
  "key5": "423LeZbVrw2hCyteMbeojA943jpEdTW1j9SkAALC5DogURmWgYmpP4eUWUodKTu3FKKhGLqXRdCxNyvAVoKs45Dx",
  "key6": "3LgGfVndLQf43jv3vXANiPAVVsLHM9HQSVzmnCZ1qjb4sCGSCUyyTPPApha9i5h2kDYWpyo94JyXqhbvdMhENHFr",
  "key7": "3Kbye54hKwm7R54Ww7zM6VWuBcAmxyLap3JhPH5Wvpgi18pXKcjK69SJHy5Ecjjk6LW1BkfqU3E7M2kuVDTQGXLN",
  "key8": "5ajH5qWg4Vzn9vsxyDk9HRqd5UiPokpzA7fVBFGSfpAm5CvB7KdQu5y7BBeJDdyo3Kcbn9RZfLt9L8nM5gdSEBVA",
  "key9": "3WqZJj9zipk6XSLwUCdkJUf3GrC6VLgdQr4BqMANCKViNA4UHFhoZj4QvXcKXrCRQX4aZdF3VGRGxU6nXqdRnsRq",
  "key10": "5FTyFtwDpPHnLTCszKNieVvbxP6PVSD2uhA2iUj2Qia38Fe5i2f7hRtsL314NjQjU6bzArGqQMXHne6esP1QysNB",
  "key11": "iEH2PfFduHZBfLmTrQqu4B592dhgRrwohj8eLK5YkbqX2is2VZSxDQpwJkxnfSTxmySi4WtQj72QZKVNiTTG6So",
  "key12": "4gTA2Cgh6AioC4VUaETAYChECGH6AisLaKZQ8pm24KfNQX69tHm7DYrKdBDgEtBndvuotVVVk3T4qRmPDSK5g2o4",
  "key13": "2BBMPJAnGRf7Xaqky2rW5AWKkxaGkdKSoutgbAXQbrZQo8tKuUrxodJq6WLCiQwSvVy9V474yrvbWmEEviKrbLzA",
  "key14": "645Bdk1BZMmwWk3DBF9qzhMvSPrVUyK5k4o45chzgAxMeaGmKCNGgQdsL4vi5tt4Qn9En2w43rn48U3XodLaknKT",
  "key15": "36aFKzjmcDziUMkRamULCbpAY7Ep4kKF4WkxLu9sWMbEpfR8qzk6UfEWosKZ29RYQrPgFMJcV9eheggvHxTxGEXC",
  "key16": "29xbvQ49EFJ9nJQfL1SvGNUgxUTrbYE6PxygTowMZmXLCfr1purZPMc4dcNfZGsgRamRYtDCq6dFaNSHy1qwxVxJ",
  "key17": "s4pXjPyJErfYsbBNQWVoUV5vsgCDRemcXrvo1hraFBaRBCrTHzpFfnPLdhFVJMxg7KnPmXZEttRRoxbGNaKMNjc",
  "key18": "32Rgx8zZTCxxZ544fN9c58tdpp5CzXbaJmAVg7b6W1PHRvYbGUaoRcZkY7vpG1fSnpJdyVd7S6t5ygfkXVtEaqCW",
  "key19": "5qSgcMLtnMacz7hSJyaoazu3N7eU5thKe1bDHjCoxTzeRXVfQMFYYdGhRJYDbqZTRFx2dXLAXuDZCy6aG275Ge36",
  "key20": "5rnY7DKVjY6h86vhMNjYs75QCxfJX6jhquFKBXTjCebyUnfCW5afb9DNXs9cFa14sUJwdmciqLzkpyFisvvKR8rc",
  "key21": "n5amVsq6QF1R1smdGMViCpmNbBsgTHu97TSaGvAN6eRyZWdjpEn2TQCSoBDWGAuQj9Lv2xHXRHdVDrGT2DvttHx",
  "key22": "4yNQCuWkAuFk1pK99RxgxxuS7ZheTgrZ9UzqPBe3J1y88XBcgeD5Xw6pGCb5zGkYaez2oDSar5xzvrqeA4tdutVS",
  "key23": "2QTh4aA6eHuUpPkAfkdstxhq4ZUUhk3QGoUVsbPfSfzg3jMxqskPD5FurJ1DaoMcqJAJGqtWcJpr6f6Z932NL5T7",
  "key24": "4GZnimxsbN9JZGxHukvzPXsi95LEEquqGXcuHuN2vG5Vpp7JeSYSUYZfiGovXoxMtGugETjNhmtxbcmizZNWcN3z",
  "key25": "28MR6qnVwRyhfyau9uzcgkv1yhPgUxoFto5wWiR3Vp13HCSG267EvrhdkmRZUqnc7TqH2BF8fZiMSZxZGBcvFxC6",
  "key26": "q5NC9jZX5XSXmRKbmyB6ZCnQz55H9nJmzydUgPPNPjLj6Sgo9R53pFB7hpHpVjoNXxC2ewqgyHAmBbHpuq2XaNY",
  "key27": "UFRk3xPFoHBuyaVxp5LV159Wg6ZW7WF1uJmBihCBMkPTDKaLNsFXJJAYTNW69w9BDwKnZ7ZgLd9pjtszHMhvwLA",
  "key28": "3EaVjYvfNZaT4gNuhHH7nMGiZJhsCJr84opPY4RMBLSqUxwzeSah7xC6perYiYqKwML2EuRVZ856jaMszVUpYVFo",
  "key29": "5HLzSRcseDzGEN5dHz2DjHUJari5yxwnxqPk6b3jLCLJ5QvNxvpJmXjHbGEmnoB4UWDoxrjhT7k17LUhHKfwQE32",
  "key30": "4JkHBRz9Pi9w1RomyaQexWjfZp3ZTV8g2kawTcAAshRYAtNaZTNLxMKkr1EECbsrc2croMzmi6AUHQkqFQaXhSfK"
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
