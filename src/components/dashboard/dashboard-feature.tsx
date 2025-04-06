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
    "sXemuFzpY2y9TuDudtKEfig41xHEF2pkRmjh7AWm7b3ghryjsRMJYQakGzxxx45s65xMPcMxUGx8SmhgoH88kbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pw3R9ocdQX8svVZaiF2yS5wxCf6xSvcAkc6CGU31RXApCkkUdoFmUhrqBfo7fbjGwRLo3tC2tvQhKs78xD5oBVi",
  "key1": "3NQU6SazKWLF7r4RBb9N6f5tDeBvNt5iVbQizsnGdwPCThf75viAufVqe38mZtB5V9BeYGyfa26TxA7GpWikt556",
  "key2": "5wJ9PUW7CpdkCGHbgPKMLVBLCVw1TpAJyh6dtS15q9TLYtfUNtv9cDNXFPZJ8dyY7SBqxFSX81ir1iVoBf6DMaFY",
  "key3": "NG5xQxb4wPN6oxHietNDGcfxWk65MHSzDJ8h5nBM8sNJYrMvVuDzcgstKZeYJCdimBJjcfkdpDHMTSwc1Bjh6ei",
  "key4": "3dzEh8hjx9aQWrb2WFeAke5fXaGNLMwLJpBWdighjHQTr9Jv6K5oNg1RSWBUDvGHieVMEQUYeEKMVgLS1mKs93jq",
  "key5": "42TLqUdDEHoMKfhm3KUFBJCoqm6hEBXdeGzsnYvZKh2DEos5o6SKyGwUZRzT47Wm3k2FFZ5ZYY5FSAQ4W2n9dRhY",
  "key6": "2jkTcuDpgKhRPctHfkQrUUHJP7ybALNVcanpo2sMGpDkqp39GkA7kjCGcV4SRzaZVuv9MZn833hhsyAMKsrfBBUD",
  "key7": "5SN4pQWFWam5DzKcfw2gKVaC31ZAGP3Mjj1FeTszuYk2ZCaFQkmqZwq5cQmTnKMDLs1meFW8EBDaYkGKL3LN1fex",
  "key8": "3XgsRAcaPFpNDGJ4bt2TSp8MdjHamBKh18TSjhQo6ACvVbtWkDo5Dx8P58zDBmqdipYo5XkDUDQp9gbaDhUhvX16",
  "key9": "ioY7TpG2V74dTrnwT9mhWweRdn6Ni5wGbp7GdCWUa61tY7hdQm2RZntb6qcT2kDheQ8QiSgV9wRDYZUvNyJXQWa",
  "key10": "3gTfaH6bT2NNdcKaJWfuzrnULQ9VraJey3yp2nhx3eRSUt3GPSVVSoDpqN2tWGcbpng7NWpCUGSN9zJLmXJys6SS",
  "key11": "5hYhUeAKE1zazX8c2nVsi3ez1JBJNAkibWMvNYT5nYYF5D18BnKi6T5SB8hEsFNvoyAcGHkEqp7C3KBwEW7Pxdvc",
  "key12": "4UABLH54fvXVmeWjHZvUNv1cuGRUz235qD1puQ8NgY1xfzuvApCEw4fyPNn3tZRNrHn8aB7L51yq58qFCBw2F5Jb",
  "key13": "5Gb2AxvzCvkWn4uikrfYge5pTryFRjxnMpDnURhC95zLbQcWAZsXAxDQTqYdq3iDaNHNd7knQQDUa8VsomrRBwiW",
  "key14": "oZ8j7ksX8XbcN2HSj1H1NTVaAbG5ZE2r9xhHcq3pF7qam36c7Zmzw9KXF7JpeacjZoZRcXnQq3VPTQtaKimxBd7",
  "key15": "2VeufupHPUi3fuyakkpPDdgrKMwtKKthJ9MXQM6kNjkCH8zUSJKqLTsKrUGmSgdLLDWuL4Qn84KhLYcLnm4qm87W",
  "key16": "3JKyYrEJLBDB8G5w2fcFPgcLfietRTfKo65Jt5xTnBqxsfxeHsuUN8QLomgufubXrUguKResoRyMZAqzoyEQxB9k",
  "key17": "FChrXxg6Cx5uKPviLj4FXxpxv4j4hc9GKD1dVEHtS65B7bXP7H3R95SNLzhsAcbbsmdy16BeYvhJnenutPPGrqh",
  "key18": "3vBVZYM8K4vUVLbGAnt2x7xGnFxEvjX9F5xsYv6hnCs1PEQjri2GVNMR2ZKt3nRzFkmFho43s3BXpwBYtH83uasH",
  "key19": "382kFsYgJ9qSNREtxKDUVSRPypPyWdpJi9w6R95AxnmeHujFuzUvbAyD99b6DnA8dWrtcLTZwHFATdRSLtX7sWHN",
  "key20": "qy98T9BuhS933DNxJ8i9Zrz3FweeoQKgnVcEgDFLuQBBsqbKG1esGkf1fPdAYJF8LWw3pkqdJ2xuTPXsqixs9Ph",
  "key21": "36wwVqedUDoawFo7m9LUBUR9LB4oAMD4TMiBbfMGDGbHW4U1DekHxv3WSqHzqbvJgWkgQUjzsgmRnGqMQKC8kAUo",
  "key22": "3bzJDy1W5s3JyAMQuYnfDyA1FWKjgypZQzCt26GKc5ZDTyRm1ZYDXd6tEYCooGmd4wqapu9G7cfQ1nV2yb8WFPEe",
  "key23": "5e2vJ5K4FgVrLXYsTywL1PwUdcUqdrZLosXu9A4T9XmkHe35U34Az7Dij4TBfyE9g1da3oMaDNyP5mACjw3PmLge",
  "key24": "5rQGKjN7GmnyeMTwfiRARySwpAo9YccbUFm5vy9NnLfcwz5P8TqYCHspnXdBnVFXY1Kycz68pQ5Y8Tf65aegPZPr",
  "key25": "5crW5jWimfWqLJYkKvxBhLj4gcmydquxVAe967pNycMvjxEfh4GvjmpQSjEcFzDJzKrY6aNcvruM8schxvwFAJsg",
  "key26": "2yoUjt1QE1UYrcnWqkXicioe4JHWBMQkdejedVLSnjzjgACWNEWa2wDs3Y2PAddy2q55P1nJW89EnwMsmqixGMMr",
  "key27": "5DD5mXq9VfGLUViuk2GnN1k5XqhRfiCA4mGhFHJyqCxe6UQ2kSpCfBgUTnJh3wEoddm3n3vjz6HnAsDrFL3c6uQZ"
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
