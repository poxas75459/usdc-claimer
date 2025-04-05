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
    "5BVu7R2aRR19TWxRs4csxxqoKeq7veCg5aaSqNKJagd55gZTGKNXZasr3xoxodJto6fuThGCbCqd2YBsNbSaRg6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45PZnAjkayEzNuiy2NHD4wgRcnYBRVpDWyzSSG5VZw9mT43mNsSNdtXaSRaWX25iPWnareCQY3NJK3SvmDs8LVSv",
  "key1": "4VukPu2AKJDiv27zuSA64j44TpBfHeEWxneQS83Y2pR1HQv1xZpTqXTojcPLeaKVgo4RMtjpKEWZWqoBGc6xj4Ta",
  "key2": "5N1Crr9H9nYiREnk6kGZHvgmaowJzNvPi42MC5fV5hhtuDvjphnPLobG4q1jkeixzmiS9TNJxu384ReiZfrPHKgr",
  "key3": "4eyfnY8eYTwce67pfMB4yHkxDrDS5Hpvx6jxLGrMZTEtYwEht4oBaNwyZgBnRV1dfELLkfjJi3svobkkQs2G4ZDK",
  "key4": "AWLnW3Ty6MJoVixK8ZtrmVByULHuRHCyzJWNoBbuJcvb8xC8pYHMdLb2jqaNqRCEoxH7yTY1aubYdbMnB8ajaJc",
  "key5": "4ojz3nQqFYrxULjvHQiR1CbpS4j1AtdU8bEqLfYFQfUnjJnZ7KcqT54smcFdAwrE22r7gD8bo2mEsVCDtERdbrpN",
  "key6": "66Fpo5KPVJinGv2S5RAYBGKwHww1YPodQVLMEkxyRrMjJrbRU39zAFUQ75J3RTMemG5DLnuoQ199CkrVUvsm9fdK",
  "key7": "3RUqq9738MhURFqJeGsCokoEAPieQNNnxNBRPVWN827ARU6wvgHjfCuEHMjGhqZa1pFbZGpC8cBouYZkyQk3JbcX",
  "key8": "2y5jXPcKaSogBaZcaWP1wRAL8kRqWY61bPF1PCpLB6Dbh31LKZyU3da2bkpjwPpKsQtL8WRRneBWxQQTubhDRkAB",
  "key9": "2MWghbZjBCgRjsekFwk99jvN7yfRT2jk4DLLXavQEVFBkJbq3YtvMxjMCM8KBu1vxAA4NWzMpRAwd4wyct7AppwC",
  "key10": "5rPCszHkVaCkLFhsjmMGFkgXktHtsg6F16ScTWTxgtn46EFb8wHqA3M8BJgLimftC7PWBERitnkui2ZGNr38inMT",
  "key11": "5XPDj6RkeaBXbECZMKaMQJsXT8wSZ4hNFYkno4JSgy1ifUzARaDJXiucdLpoEvGbmwAD33UbR9hvZQb4Rq9FaY9v",
  "key12": "4dP8MZvEyJQanPc6d36azdS53UpN2vHSQLvAsM2yM46eXQvubdgVYD1FHpMh96fzBzuf5GsmfRpJyBUy2ch7uGCx",
  "key13": "27vowqF4SocMR4nWfjKGDiczDN9cWX7GkRZ4w76B3kBtKcnumWL13kyHE4JGNr6wJLn929r7Wfu8DEwDQ1McHHuq",
  "key14": "5WTEkdxQS8kgRYu2rkd5p3wsV4tyQCbTmFLT4TtyoVQGw6D3nrTnBLwBYfwmgEp9weJc5vjrxX8gqf3MgDEmfWZ4",
  "key15": "2RnF4w1udSeMX4jUouXd2nFYKQRj7GydDyTtbsUg48GK8Kmd3sSP1mCqWFKuUfc6WgrrrM4bAEQ9kSUP71LQtTT5",
  "key16": "36Zje6ZnhjehaDNJij7Jzwgdy6NBwU45mekgDgspcgzcAB6AoxRpShAYuYs1ukgSiy11k5hzy6vCgC84ZVjYhtE5",
  "key17": "5BnN4JcPcz3AnCjpLoKRrdiG9Ja7Mz6P13Zg8cXZuev8T53ncyodQcstpTsZKjkMmQPu2NfN7Y32j4FH8tXayPcW",
  "key18": "2kzKbm8J9piozw6SjdvVYPCjPEzCz21jqW1ZFRwhBXePrceDmSdEAeKkLV8DqjsDKaFtrdvitiqragSnAcsAdaKe",
  "key19": "4HbnZVVtqWCpJKBng7TP9oUg6NYyPWWMXSHhLbEsDLYwDcsY1NRMiXDNaNJoMX1FE5pKuv9FuCU7AWAfdqv4toT",
  "key20": "572BapzTPRenhhBuPzorWf7NikjAqL5cBJmBasNQ13kMMqY9EXUpJdRmBd3JhEdqaYzk6eZhVjUUKpNmg3bbAX4q",
  "key21": "k3kNVC88KYxutxjKHxmMXDxHS7e2Mg8XkXtoyRgLohEyGxeYdEsCkHvLhure6NLQUqvCXx6zFtivd4TA1eerGUK",
  "key22": "Jm8bh41YspHo9o41cBQsPUHzaHdcdbWZA8eAvtpYtGmepWXraAGkiM5PQUoMuTQ6gNdXJZLnBH4iFpcMxJ9bZGX",
  "key23": "5mAia2zBs41dLubYZ6Q4rLsLLmFjxb2vpd2DEFDn72QnEZhscCRRevEesgtnohLFpdc1FFUwYMiNvRRBSchvYWUi",
  "key24": "3u8JjC58rHnSo6CPkQu8ayK9N1DhVeP1X7nKSFhaxBaWCVnnRGZyoEtzUYyH3Z4FGmXzJhN3DZB5nzjzN9rgnAvG",
  "key25": "um935dAmD1qmHhPM5BGF7XqhrQdBz5743CE7RuyyErb7HjPmdRkT1tnWyVV8XaMNrdyLELdEJzozoHMM3UieUDq",
  "key26": "4ikVfeYafw4B5Vrm44jwA9Fpj45TYTCVoQAtnVfBaQpti17yXWJcFpwhrMmQJuyHtbbLQv2NRsjEZHhQ2a5uYeyD",
  "key27": "4Md11JNMcXRLCESJ83RAMVSGBEtEXLojCzHKSUDWGCjMGyYMM8odTizTAvAevHppFRA7yT1v6UpQ4xEirZpZdTeb",
  "key28": "5U6h8wsmuV27GCajuX4ScDGo5WCf45VuV3WDUDNsnFRFtPkmHJcXUsqpE3tcZppnLKQcPGQGZyCCnse28Nm9M8og",
  "key29": "2KmSpcUn7fhsbvBVDxBhbJFuQfaMv7KDgtUZ7F9EVvSWseARosg3rBe5xvbvM9B1sJxKpa6LYgtHL63VVHjBpdsw",
  "key30": "5zT5n4WiiAJ2nvActA58UB8C8kZD5ern9oc8yRJT6sRzcACHZmkFQC3KQjVYJjVFb9YUtwFucx69b6VtXikYzJb4",
  "key31": "4XdAKEUQpcDpxfgrCumXm7HotC79QEcQH7LpPUrKMa63V66nmtAieWN9Adrzrinbufjpq8VDFmseGHN56eAc4Syp",
  "key32": "BEKAZ7fJ5hppHZZ5JkLBKrXEeoJcd1FvrqGN8FeWQMJhnhU7BmqwqvzTSRX1iFCKViy6YA9mFoPpDYdMTcXQtyc",
  "key33": "5RWSK5V4BfNMCdBv4hVmDCthXELGT6TJzyHPqVF9YeZdJvuMzu6AxDi2BzqXH2sfkF8C7ajapCkhjpPaoXkyZDow",
  "key34": "47dSxksBqJ3kGDetJtAKWUZzPnCxDQwpifCGJrRXrATCwELLihj3DW8U6kJNwdgyjwwPriw1fUjUosjJfYrqtgZR",
  "key35": "SEXAgwiU13vbnWJYhdcpVVkwk8uLRjC8tJ6uHyAnZCnPYurJN8DwzGVsaV3FUbB3Dm4PuifgL7Kq762jYPqK3xN",
  "key36": "4UAGa1d3jb4RtUNRFUdqev4gLfNxsUADR6s9UU2hN4eM5sxR2v7dtGK6zfCdvCAKdYuC2zJ1hCQMSx66Ca4i62Kb"
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
