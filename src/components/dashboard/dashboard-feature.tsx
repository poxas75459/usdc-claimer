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
    "42r5b2T7HKQGARTRXNffV68xprQ82anQjL7RGMRFgTs4snbzuwF5SXxW4zdQtSHjKHfSVmA41ktYxHrGQiMtB7X8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sx4UCnFpjBv4yGonUK5ny6bxntrRuYgvPzVjUChjWYEVZG2uMbLHfpDarDSSCVcvYSovBKegaT4nnmV8JFMYWz9",
  "key1": "3DaSpJ4cwtzKqc53w98EytEm5vsB4WWU1GeUjh9xKhaYwPgCrWkrFo53EWz3KcMjN7JnQM1pZnFiWw3YHGZERDNm",
  "key2": "3NUh1XqBwE7HEH2dtnv8ffA6GKi4hPjAW6FemFwQkmynwVK5Aj91HR4RTkz1WYgbkjFowPWWwLvuxEqnk3rmcy8",
  "key3": "2Xwup7o4syoRAsU3QVd9QbGsywHKvEDNkcXoKUXvmvnBQZzB3JxJjZZhuqZ36iN9LQ2Xu8BEHoo7QDfCnexmffT1",
  "key4": "DYtkgkY4EDqtiroPZ6Jj5jtwjxBQEugUdPEvprAeAV35mwkbAhy6EpkHzK64MRTSLsiQUuDTQFk83ygwHGVgLSC",
  "key5": "25QeF6TL6qKUC6GAhr7kYxRai8samkDAsrzEr1zyPRF8kDBFfhWt7jnbHn5C921rtDaagukypUAcbAgXmaCLpuDo",
  "key6": "2SKFR4wTtXhEKzNgRwARHeebjFuveRrEnKuX7MaeBZfazHiKN2iLe7kNrqr2fTqvYipf5CcCuYPmvKAjxoCnQHdM",
  "key7": "2d4Y7UKMCcGDmGqzYdnEBawUEPwaZHEr7EKenH67p6qErYyCT8DUfdfivkNqQfWh8CxgntRsYBEdPSC4ygkUX5Qc",
  "key8": "jkSwZD5shsxSDhL2vVEKvG3uVa7TUkEzBCLbfXudyir3trivThi5DEJjQXmMYvb4PiNFvkPsiUhCw1ts5eaMecJ",
  "key9": "4KFP4hx2NLpVnULrgLVF2kvMaYQtFs4TpEariHwuyYXyYsyWpr1vQNvNtj6Jou56UG53bArT16PpsJLsgihfhjDi",
  "key10": "2w8UsZPb8LawWA3wPrar5M6YBav6WByaGuySmsUjDQjRHm2SHLi11Vf4h4nFEjhBvx2ztkvXuxdQn2yPyCTaUYGA",
  "key11": "5fdkEgVmEDDvtEqFBtmJseJUqPyG25Sspj11r982vf5U68gFmNToesVcqmSpww7VrD3Q78YuT2HjdGxcCdYDKndp",
  "key12": "28FC8quAZMUZsBG6NWgjUa4JTffHxhoUvsZcewD74P9GDQwnRitA1ebyW8h4vnrwVYk6etkMPjwZ1oXECSYGfiQQ",
  "key13": "4Q1uxnMV62Y8Qyy4NB9W1KEdW1eeskT8r8VF5pCppYLkAazgYnQfaQDG1jCfyq9ZrXzPC4paAfih5cxCkCJpWH2c",
  "key14": "wxJGwuRJGc57R3XRU9YdJNt2rEjdVs7rRQTmB4HfFHyazAJCDF6zzdnxqVeJDzf1TqJo65PmTm2EmZcxa4EgSuo",
  "key15": "5grsFpPLn5rdmwxzUWbXL1KyPVYqe147xHyw21Hfnhrj6TftX8xVHeVkp5CtP7kFWv5uz3JWnBeJDvoKj5WbLTTa",
  "key16": "3cYudBPajdexKz2fHngfVhnM4FmFS4h1V8FtnrQa4h2BcFDo1CKCLecx9sPoxLk4UJYNToDma8phNwVzFCMfQ66n",
  "key17": "2QoS1MSyyEpiAaZgZeYvFYJpYKGxXwmRejNmr8GBgADD89g39PhRFYiMmYoFor6RxDWYnkkU4XCTiDffExeMTzLW",
  "key18": "66XVbuu8ybJFcbaoYzTCDakVwE4TiMSos1bZLCK2UREvZaAWpYT3niat23HfrNQJ5q4c2gQwUMv52pCZTrfLZG5T",
  "key19": "3PGpftuh8JmN4vdm24AUUNBpGXvKPjCPeRdB6SHuCtCWeiUiZ7pnwbANryTXrBQiAvGjsg7JGzCZjh2oUjGMkZLh",
  "key20": "3nK3ZHnyPQVT7kDALUdW6Nx5cQighoDzah8afhDRzj7RSV3c14rL4HwRBcixcNqjLf9EaPcY6yJv7BFQRPs3ELLN",
  "key21": "3VAXe129UkXzZXbczWCCQkqNFqVp5p7SpCXMiNBRcxNskh5sevLyHn64Vbxk17tzD21Kq2MkAhcZR1jvQL3dAdnk",
  "key22": "47MmbcpyYm5KbEX9dAC3gAus7eGTnZVzjUYzSdbP7Ge9WnP5haa3rwYv5HWreXaigXL4hyFSpbgPUC27z1oGsPYi",
  "key23": "46CxkndP4L6j2dewg39DfVAyuoHUZicKmpK7DZuasYDVZhc2EtebdXofUE1HFEMWDqiGkzCKgssZaKSwzJkRyGBK",
  "key24": "HuKxV75oKzkTXvhyUoh7xfBzsVtS3Wb7uxwo25wFQqjsVVRZeFN6p98wf4QgrTT9LfSD4hxiBdTxuDZfkA7QfLx",
  "key25": "3xrsqTL7seRavytyNJPjm8a9UeEmUeBMfGHUBUiJrcCThdJ3FLKss54bgBZuMRQ8EE3F34uM1TPSdWycmW1NBKuR",
  "key26": "3obpnHKWBZsj5ztj12HrXrVbhnRu2Vu6Nh5oKy1xpMAbj2rXuN6surswxp95d9QhkAaRWCGu1fiRqMAr4d2LyftA"
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
