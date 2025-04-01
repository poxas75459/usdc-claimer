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
    "iNKFWhtq99ASLdg3WAsjgoJP2BKWZ6GkCSXvQaucLzH9g94Kde3Bxo7hEZBdKKnDxd6EAFTNEh5x163R6PNJxn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXEzrifPCHWdJxQjw64htDwtbFrBHqR1vcusPY1yv9eJcAErYbZjVL39yxRVMhEmuk9FpJqtEiZUatXhHGbG6QT",
  "key1": "5fRM3Vdc94JQp7grBNT8PhRTrCv6agCfhc4QHvzu4MHxN1ptbi4rwx7QiGrN1NzpqdpxENwr7jLNdobRm4A7H4xm",
  "key2": "55F8HiybykRJHWPS5q4ZZDUasL3ZQ4gVAfECMhKxZKvbCkerYEWsvqDCTpn6s9tkcRNzct6gQtV6oD5XqjfbukNk",
  "key3": "397UjvQcAM8Y5yGmSVE21aEoWJXFCaHWsEZ1RYwnyRyBQiHgU2ooagSh8f9BkAvuTxSNGXu7n5j3fhJDYPfcUN35",
  "key4": "i6iMTMFp3iniZoYcHDKYWhrB2LhRzCDaqd577eiGz7atfwFtPRMQJ25ie12sJFKcCSXQfLFEia4esWEKaz5SuEo",
  "key5": "4Y8PT97U9nSZfaPD75v8j8kwN1UHJvgffxhiEoY89FuzCeYUESmxouKU2G1gQEiEwpn1e3f4tc4tjppeWCkydCUo",
  "key6": "xxXDQMmiMTryEkp2gnTjJTDvosjyyr2Fb8eRSHEYgjcGbovpcFKtuSuhfLqSwqVfrvf4KHE41w6oEkcaAAWEKL9",
  "key7": "23PL9sBzXMM7vMC53oJbVAFEoGaAk96ijCMoEN24JpBFpWAAUMAy8CVxXMreHRaUzyjhBzwPYvwVYaPCzgeofDEM",
  "key8": "4Sxc8SKsLzBYqQ9JRMKcdB4rmN4etCchijRghqxX6d2fdevaNJqbGSCjzwpyBQ9XY9uQekt3WUvHPX2ZwScbL4kj",
  "key9": "5ZQSerWaQ7MQdPar7N1UmkNrGKv1NXqP7GCFMbjL3uWgKHoLbGHJxsHAUU3rW4RkV48fXpyRAFQmTxdAhC5kVCon",
  "key10": "bA7tmeSxp4QQ4E5peGt9fAg3bqSqy2ketaHVDYrmZdntCw4VKDMDHaVzcJbTzXkjaQVSKaaagDgSeF4NGKPjQvd",
  "key11": "56Tjut4MHfR2bEysJNF5vYgL2Qcau5oKBG3XsoHS5edaRsKJ9bvV9tJizu73Djnj3XL1ypbmyqGTCJKiZFXjYERa",
  "key12": "FspFkt8huPnk9baFoxCezFKx39TBLKtp9pciCjtFHwba23EBX8jpYmJVTP7v9VqUYDLqorrp2KGDn1Lb1wAUyKe",
  "key13": "321HcfhXkUmsoeurcV9D7VPgFHi9zZUCDP2i9qsLejhMvTsvykBozj1D2mPzug7sD7WxShLpKuCH65ij1SkbCCs6",
  "key14": "ibkWmGhT6t6iKPNBBbZDGsTTX9uogbrCGpK5XBHP1ouRK6T7oLPcvEsELe6iaSNUFeZG8CpbmVB8UAwaJ7XzCRr",
  "key15": "4U1CKxuGhnJXvALbjaiUeiUYfqhcCRn9yhqR7PEMGoHsXcb69AbrXbGme32vvTRRmPkp3QPpE763pL9zwt7Pbzb4",
  "key16": "GrQHM9E54boDu4Hsia2YwZk7GRA1WqZDmpBXYyaas7qSRgMLReXgzVF6R8PtmfQXY6Tazc7AyfvptFVrCeJEnYU",
  "key17": "urfoD6DLHNPHLP3JDXavbaNpt3jFrqZ1AX1G58a4fGvC1BCFWUBkjTG6yA8ZxuT1pUgThap4v5AXqKGDkCua9ym",
  "key18": "2LLwpyTGEEcNgujAUFCeL6AoREGu62rr4G25qCv5QrnjjCbAYJSYHiomhk1TgTPUWUziFkdaYRCYAifoT7eYmWHu",
  "key19": "3RbS1zasugMs6cwiQxYuGQaMSbRtn8yHYRX7MxyCXHLDxpoEJY3FnfHZ8kCkNZ5oyz4aJuwg945mupt7hJ1b3sPE",
  "key20": "57VEphKuo1jMEMMr5h2NYCQEKEeEQeL7EEKnaUyU4ECuBy9DSrekhSaBNBBhy9TLqGL3pbNRCNzuAiHjS5NRqwBb",
  "key21": "384MLUj4aBFpcUoNc1eWYy4q9itecdRKf4JEMAthdb4BXQta4SzudHCMtCpcog8x6s1BUBkBRiaSGFGtNZnAtYGX",
  "key22": "3v5FtbDjdTfm1DgDyL3KjejSaBLEfC5BFK9uqZMixzJT4fRPJDsm68yeWdPtMt7oqDDLReYw1itTpwbCHEZVo516",
  "key23": "3ScTb48oDtRU3NNH9Q8Pyirf5DkAtqsafFZxRn2mhhND2o4uVpCnK2P2JKQivb2AdCRZJm37fTbXUaSXpU6xf496",
  "key24": "2KFg1PNp2S87Q7UUqD9gr95RLGqaQUEUM8szY2tb6YPT6NwnKBHKUzNW1gfbNKFaTYEF8J6TmF4DevZJK4HicSHk",
  "key25": "4Dc7RkQjqN7k3sPdvKdHjwDWGzSs8dSW4637sehEjcSRtVDvE7uuKNF5LQd9hSCMY9zLjgvvWx5tbjqvNzNrrn87",
  "key26": "4GajEnvKo3Ztung77xnX9dJ8MxPkqbGU7xWf5aCNoyfCByftteFXZUkXmVyKbtRUjovonLFwxq2JomfeDCM2FqS2",
  "key27": "rXCYfSnENrCSLoam7RjHfkSceDyvve6tCJvP2u4XDtYa3VeU1rptZKyEt8mUp92Z1BjVBfyCAELqQRab9Uzi2Co",
  "key28": "4UHGgYJQQugsf2NY5VYRUZri7vumDF2BvkEqeLYoEb14zu6obHnVADucSAgfVitfWvcbGbTvpoC5uEiHfLzXNZAa",
  "key29": "62o1BYw3U7nCBbnbgMVftowgArvVX41RT6Y9G4xDoq1LGJB6t7dBJZDYhGnvTFCQvK8oEnBZPdejk6wxjXNPWdGc"
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
