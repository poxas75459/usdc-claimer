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
    "5GLNKscrCrqFiUDqv9sZNNsirkxCNhsnW7BE236C43pFDSM7SzX4YwaYApJd7rwAm83s9G36SjUZzC4i3K8HLh8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MM7TdWHf9JHSriGeSGvh8cj2JDojFrsMYkqqtasPxv177CwfPfYz8spESAseMF46u7bFR1Skvi3QZPYFihtAr7f",
  "key1": "3kSH6afozBjxX1BBmVeQkZHg8YCo1woNNVbCaW6n3WjY4b8CvK4vt5J7epUyVKCZ3XWPg2pVYCBRMRyQDDYVJmpq",
  "key2": "phXc6eaWFr5mpLYPcReBfuw1xozavnGXEEwCaXJxuSTKoJ2LmSADN9Y873MmLnuqaVqrYowMjJLH8Hd9VnGBe42",
  "key3": "4svutWvUvaSQQn4Bko2kpxenNosZk4JkwHkZKdfnrhwmzkYtWsm8Rofo7NbkJ3wtQ3YxfBidtg2ajfiKxJkrr3cU",
  "key4": "4HX4wpLobet13r4UfPbE2Dw9bFAKbMCdgQmDmzhzyZ1csADzWo7pB9gZsQ6DvYAdeQtnBEmGESbasjpHMc8githM",
  "key5": "2Z4fhZrzTcbME9fHnRFogAoaJCVbRANdfcXbk6xGezpaKgtFqeq1oHSW3Yf4ygsq8wiCXy8robSEdfkpbWHeZVAm",
  "key6": "5vVAfxvg6nqnBkkbNj49xS6fkiBjaBDLfwEbtvFBtebucBe6am3bJNaDrPegE7z9EnFoymHbcQyc4JNPxXzoaJ1K",
  "key7": "3e2o9B4z2qBZ56whAcL5VQGMn8nRNGg2L58dXkmNQiYY7xRmsuZpSCqCs6rufoTEvRoHdQPaM5KQQdo2kZHzJpN9",
  "key8": "5F5AwCvpQVz8J1nYZbM8abY8qVp9E6jQBbdULTQpnuuc6ie8QNdVy7xPmjZvaLnTLiNdc8qb3nmTPET6q7kLa195",
  "key9": "34mF66rF9XzggNTndx7dMB65zboD9hEDrkgSKPWrLHZZyVQjr9aoS2Vc8fhUoXpF1k9FfjUzh8N5LKkuDCU3p2Mr",
  "key10": "62SNG2dWnc9PiMr2xc4KYcC6qrgRrs9wf7ohs4SkheHTMNBuurjkVPdGT3VDqqnW7FpJxRoEsN7EWGxpVNzTfW4N",
  "key11": "ngNFG7pTgVGeEbGtxYwprsr7FDgVhU3PVHfXDMSqRv7LSEF2vK2QeAgYp1365VDwR5tUuhojSk5FhcejZjkXoCw",
  "key12": "4xynfzBNAPfvY6wPFUqbZYb5Mt7EzsaGuGTW6S5cGyq85hF7dYKiunGEs8zpJoCpaBCWPad3Nj51rhDkWxUKr5PP",
  "key13": "3qK2KL5RHqcVSGLr7jMy1Yftp8dxrYp7kepguMpzRWQJ9CWhUKi7HLBNFhs33fnacdrYWKQUKAwH97wtZ2AtxnsW",
  "key14": "3xtMJzp8sYTWDzRuHo99gRuYMUc8ycXQNcTy9CejAKYw8mXtjiX8ky75zzBXdUdUef9NaFYbhsfvqqEoPYdAZzZu",
  "key15": "3SKcKFioKCDkdffWVaoUDqLUdFwHKYEkx6jkAZL7pEQ2gkXRsNc9WqCApphZvs6YmWJWZj4jM3SYch88vM12miHU",
  "key16": "4znW437ERX4cEyeXrNX1mojesrfchRYXxe2X8fo2H2SuvrwQ1CCfm93WoC2zEYJEFfyvTvob6EkDaZnNTqU5m8CG",
  "key17": "eguGAefmVXz2xAhLKnW8N8Yjet3q5RUPpURjU3m9CWnLFXpJEgJ9AjAe7LTp2VwxvFduCmw3mL17BRLMRcHiaCc",
  "key18": "4NjPDPdDGMJLXwraqeX42xn9Rzxm6sRyWJmNu3dG6zbpeMN6kXu74VDswJPbZkEanicpqgQnnFknaZpbno6BBJeG",
  "key19": "5YxKTW4ijufs6qBipW5xfvsPvV2PQmFEfoS4btFEq4M8sFvMgjeMFU1bFq2uq1UZb9uEUYJsMzqFg4kJcQr6y3HQ",
  "key20": "49TMNX87943RBjfLUcnppy7yKSpckvRHM96tMfbY2siyqJbJeSCnTAHd4JaK1ZrE8fjhfe1XJY2EHd9sMtNJWoAq",
  "key21": "4kY5Je8YcSRCf7vTdC9eovS2fZrp9nV7SPjXcTYgNCSwGFBeumiFBhSG7vL96FroRrQBNSYjsj7jpKNH5ppZfedJ",
  "key22": "w25R1FRynrrxuuWQcPGMbxLTeUVDnEEz2Wy71DxBWzv64iRynAMCB5RuxHya8rhvPnKAeTn6yirpeE3EYHrzPLD",
  "key23": "2LTsLwfmZSBDzxae9FUWA1nU7ALTWmSy57ubnVUZJarNjSmwLS89L73618jD2ki6xRAAgpKu5TB8XT6iSnd6f8yV",
  "key24": "KR5aV2vDdznWynnP31jKNTU7qE2USC9VHzitoUazgoh2Jc7UbJVkJ6APMQQES6HnvfBNBp2HJMoNCpP1EiPLDTG",
  "key25": "51ttJitKzTgiwS9wcyTutaH8Nx1zGkeLtreQ3wFAMFw7bmp1ywpw6bndiemJujgkhM6ZDwR22sxDWjGtsiMiwSzW",
  "key26": "5aEwnyWZZvhwJYx9nNA1TeNvC6HcYF4a9roGLJJ7ojQNzbF83cWWKEgAy4mgdQyDDRDkDb7q4TFdwgcG99mZtuhy",
  "key27": "bncCkyQQU78w5ud1WVGbpmYZHc6A5xt6A1AucW6fg7aAnjAApcVeNrJT5bnchCCpfqYk6GZFWeoqXSjGk9b6qnK",
  "key28": "32yy1BQieg1td9YtsRzK5ZxWZAqaT2Fa336dg2xeudn3iKm243faXAP3sMBhvZq9Jk6vWTVFFmxNMMSueQNBkRSv"
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
