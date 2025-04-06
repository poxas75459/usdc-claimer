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
    "4ebXBCiZcebd2honz2tDygQp8d6g23Kr6qGPgAVG6sNp1fBfPMitjBtHUwhqu67kPJEMDX918t7H1aeLEPzMgKR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCfWKGYE7qp5HjqWojX1DFB8ozUrKXGwmKwXixakYo6wVANPTwJQUj5rpzPg7DwXSfxqm9HUhm8XsRvqUGCru4E",
  "key1": "67Vv5iG9xjGq8MKz6CBAd5gHqRxbM7co9uor6g3PjH6JNdPto2FoCxJBq8yvTKMpz37EujmC6VbeJXnsDN8GxFbC",
  "key2": "3D5oSuLjdh2LiAkaFPjFeg6u8TXNH149d9z46gGv61izW1jXoxQoh1mUTPHtMPTqkf47yaEVK7SiHVnfNjzcqwWg",
  "key3": "2XZj1G6Rzeg4m9WAbA5RRgovZrLxs8xCcpoWnKxcW6Kpr178w7wQXPiLgphZVxam6HfVdGcHF9cWqM6QcZwXx61M",
  "key4": "4xpRrxF9zXFcmQmkE6Li8iJvUhfjZKCkwP2nAqaAD1eXj8TTjuXnzN35E5RCSkETBmBxQDDq49GNGafufQaBcunh",
  "key5": "2Eq4w3JvK7iAB61JGwCGE8vjEpE1svtBZcUxR3B4UrkGUsdfD1CdtiF95fiqJ57pPjZY5tXe7xpKULNUA61Rozij",
  "key6": "2KchQRHXPecEDDyhSfN2zz8mtQMbFpNkpNyRHcfVvrYbQh3uefKxWeBog4mFvenDPGoS43RdActZTVm6KWsUyWnK",
  "key7": "5uZHu7p8U5SfBkuN52E4uFpX8b9TuxqFAL7Qey5QuB9sEXXrCy7z7VdFnS7wLS8sqwMDHrN9X5NY7QVEAKKjU4kB",
  "key8": "4hFEzjvcWjsVmMPQxQF18kB8NYgC5PrW7ZRaHzUzz88PxSSkew6Zh7N1Ltw1MFWoLsMSgJBtijLw6anUPS8Q2yiD",
  "key9": "cQB8H4YqvnQyPkdnXdGSJTY36o9MxrAwwnyAxM1hAbtSWg2f4pNdvoX5QEiuekKXAQYg2zFTpTDLH7FmRJkFDbt",
  "key10": "3FFUt1iSi1SADXb4UHsoXgiueemt9j7f2NcrHQmUiyVoUfTR4WDdvJefB7zpZgqzJRQUwgB3Frzye2reJrzE1fpm",
  "key11": "5atkB45EETjPQRKXh3d2VHtYa1rGsrXuyKWHjJsU2XhfQ35bzD29VDGacxXGDevCbfR924gb8paNcquPwad2Xhkj",
  "key12": "2qEf9Lo47H28hkAWc7nZdKgaE7Fqr36sb6EkbMvARXGDWkzSArptdq9RuRQw2HWgK1vNocNYigFCRfNhWAnaqcX6",
  "key13": "5mUFG1JJXj2VJx97mbpSqWTwAZf7ky6e2mi1qA5WtdB5opoyZyfFRHfZwtvbYdihk6TDrtzYQxayN18ACEPYqSi6",
  "key14": "4K4HKVic4tEZnMd3URFcAcrnjg2VkNWfK2WsQzcmtyW3zDGD8irfcCL4dvx2j52Bz95jHpaHKJ5wNqXAQjkeWLps",
  "key15": "4HDGTd91Xr43hWWYQFEXkpoxsuwnULoW3QT4Ey8TNk9ibUDXeKyTAo8YzMf6BRkmTtSRwc9aNMtSfHEvEnYFonVt",
  "key16": "42pSLEiRK7JJRUzccFHECB8Xax1WthpCh9ATcdvpFg7PCQ75bow3iU4pMiQ1dYoc2aXMa7HuTxhtXemKkBwMU2w4",
  "key17": "TQ8x3MfbCdhyQbu6oxy7yDVWVr715zuy7X9AksMHZNUAHEVys9bHpsKq2qTvwKqSKzR2Go1xpzdBniDEVMVHkj6",
  "key18": "4xJuJ42dazM91em1nVQnPPfwpUMCFz7e4qTQFnHBj4XmEtcnKY47ESq9o4ZvuFEbsEyQGaycJ94GPnkEYEz1tmNm",
  "key19": "UFF61smzm7NEsFdedaxftPZNQeyH7UncXzvtZbM1HwNcsLziCCeAqJfN288jJ6YZGuU2C6PEsXGd4h5ddJ8RY7P",
  "key20": "2ZNne4WriYKuLNS2b3D56detDEVvLopa4RhgXzhha3Erfaz1jWa3kSoX5h9R5kccNT7LqZZYPCDnZrHLMHKF6xe",
  "key21": "5sFbCTC1vFqPGNLk8fuxqLWvCBGjSAW7UFy1tUnV5Mua2Q1aUsbYdGnRQ2H9rwZGVRriMGqq47mF4k2o3PA2eJy5",
  "key22": "2C7tDpK9zS2FV42vUHa5pTKk32Zjsf16oXwyvwpnkM3eWRhZL93YaWaCSXbjYJXRM12Bm2EBweNmQSVbMVpUGoBB",
  "key23": "4iz7PgnibQVYbfrUQyxBsMdVeaZvwaJcYoiQFNZLHENAetjZaLWjnr7Q8cfiv55szDoR3dRow57EnPwEq3EB3cGp",
  "key24": "2scjPoxrSpafmS7B6wdFXFvStLYZPFtk2PfnqmtYH5cmBfUZh2JarhZUTqbHoy9R4eDXDSbgGADzrP4PZ2FkapJk",
  "key25": "3xmeSdFvMhDL44wzfYMiCpKbQnxe197QR8ciTVPq2v8eTb4fQ6BEpv5QwqAZgJvBbUAeL5pCpNjdB3j9Gsj9apjf",
  "key26": "3VaxLvfJnghpSQHi1wUHBLTSjc3nXSrkpRjimSjr1ptyaqkZgQJTypFcwuzQDYaK16KFC1NVjofRPPZFgxLVhfLj",
  "key27": "5Mu1CMmRtQsBMZfbfWV2dnHjM8MNDhyBWN35FdARJZR1VWYac18MdNftm2Bosp7RaVgWFTA1mnqX7ixW7ekp6fr1",
  "key28": "4uZHDLVhE6EA5Sx8CP8sRhttRYhZEABPCKnziu5SA9srEUPZXD5zqY3htDDbjvbwag9m33TqPqLeiD2MZHAyPqjH",
  "key29": "2LrhyrxJxuqY1KLrNX2H6v27Xd5QjewgLmL9baCgRDXKJUiG1qCThLAqtLmicA1mo4AtZ9H7Txo5CUoKonkaca4C",
  "key30": "4ifBtzjyS9UPd1YJLu1kEKG9jUHvHNvsda5LxyTwPynJmS1eFfut7qPsTaLiJrCGqc1sXyAxwzkE9ZcwYJk8HfYP",
  "key31": "2HZbUDS6u5FYdhaHLyqkVQfv6xFhauy9iUxjQ5JeTMxdJqk9HVCSLLLecYcHKH9W89GYNJvrrTU8XzCJ9DfuYbYJ",
  "key32": "4FAfQ1JEqbbJp6wA25uDZFnQe5Lxog48Sa7mhCrpNSwtkCzzuMtKpJt5JtqT6VaCqFGaVLgFpc1EQsvpqFmFFpiP",
  "key33": "r4jrYpcR4u3Vbmw5tMfcEG5qWr3h7bZJJHDcR1xECZWRBqidTnSa7uS5rLcEPdQUtgktXiBqKD8CRhNgpk1DNvJ",
  "key34": "3QKX7SnT1TqtxUvacCU14EvuTNJnX6dxEbMJ6w1i8qKSrBxgQ56itrv3wbQr9ZS7JWDkuhhu42fvxbYCASsk7bh4",
  "key35": "5a1L3yypkzRKzZwKLTyRQgSmnwjEQDfRBVDcgEdWuPdVGr9SxR4k83e65m3seqSfWuJUbMHkqqpJDSi3CQzoPHsF",
  "key36": "3QAq4QBYh7FEUEWS3wkyuWhiEqGiDJgdENKQfSYvx7cLp8KAiLRYqyZuFHg858HrqCWAjTrTB3RwCkZEMSpnHhsx",
  "key37": "4meSBSFtFWdHNGHZtWzKe46J8Yf5REbpxVKoVjFF2dBqqfjyNqF92JkaDgfPq9XgkzxjXYCQVD7ambfYNBtfCYCq",
  "key38": "63CnAz2EFo1Tyj8gvMuwatDtmKwVYFR4en6pKY2whmTV5DLtbPDaP7ix98xTz2vvBYcD2Ru4N5hq5hYbgzZZGt49",
  "key39": "4rKjCbsCig5BCCT5WL5RJPVtt1Wk5U5p4V3eZjdkhhB6qPytYUxpuRRY3ym6eF1yKzZwWhEC9QhpQyQVjVNFTzTg",
  "key40": "3oKsryAsL87o4FbBFBoGcXSXSMAmfuTTVKj966GoADx88UNbk9oBdU8EwceiZXr438s8qFPZjrvSDY8Xp9DpYWmF",
  "key41": "4cY9nuTY23iwPyW7SGwxcu6gFutJUuJwsHopDQRdbRnUxxNihS5nPGGKVjMC9eDx1QFhub5nGahbvGDTACPYHXkX",
  "key42": "XTf9m4psDBSCycRKWBmLtuFhu1Qgi7tdj8kQudXmPkPkGbgGzpQqcASBqbQnAFpRsFjrzx1DrSspFUZ7jfyNsjG"
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
