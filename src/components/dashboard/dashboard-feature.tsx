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
    "2MgcyxARiNxF2wC9wVKN5ku31eXY3mqaNrENo8yP8jWY5Q2vJuweo4fYJd7FoMCgxCUry2zhAz3GN2t36RFSYufE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KihFjK1zWNV7vXDVKxELhQHu7rNx5ArPWwbxc7tEfmPtskfoQYQJsW9rECpbGpPUD8fFHqEFJRF2EWDsUCAAHge",
  "key1": "UHvHTZnws999Sa5fcHEkQfqa3XGKFk3kNL9F7hQAMwbH21e32ncKD51nyB3Y6TLvEJpMPycV1ZWarjBYZGfCeBF",
  "key2": "55BgT6AFoBTrJxbxRp67qRpJvgKyv4bEKiCqzECxxR2HGr3Tn1b3BTbnqtJ4Cn8YmwW2nHcnW1myudCZMAuGdEeM",
  "key3": "StJ4TbcmzUjTTGrrGycdKDyAMoDWVepE91ojbWBPzvYdhh8efb59X15RFm9LMcaJ78CrhcU2E9VrKW7Mj7CxTGh",
  "key4": "2wDs4bPMQNt7L38J8RqnWUr14EfkkepRxUTRt6MvznSsyYU6RTHzEsucmL3TobXXd38z1ScMBMKgzzAAU9mYiyCH",
  "key5": "wMnup7wDJmQcEmmpAiUDkUBNda7bJ1eqRzPJvdmbr8kHdSx4vQYtag8KKD9otBf4SuVPgFtya2NN9ZKTBUr5YRr",
  "key6": "ztsG1eHLJTrp4sDcCdcigwfX7DtXYP9DBcJGHM35ZabSjBHNDHS2CxMyUnTZvR499kjnHSXvedrZ3TdRsuLomJ7",
  "key7": "5n1c3q4FoKjGRgKPvC61Misjgays9C3QxENhWiX9h1xHMx9x3HvqnSpWjY6BEkjTGu4H8pBYzrGCzmLscKHd7k59",
  "key8": "4W1JsahUkX67R6jWfqZ8kv6QWH9r5Siux4yqtAH2AFcNKtM8WDfmNV4pG8pRJLVBwLQq6oYgDbxbpWire3wgA6wT",
  "key9": "2BCENuekJGWLTqpwTw7w69jsdnYU8xFAPv2sVga2AHCbVy5k8aqJrNrfxUUFttUgdFt5w3nnZrPQHC8czA2mTPj3",
  "key10": "ZQHekryPVmfspaPJfB31KyHhJ7SoXqwF4DExKDeEtwVcE61CN3JtfwEpTriL5e8Eydu8mdEguNLPxqGGiJwKAC3",
  "key11": "66M3WZ3A38jP117dx3FAhxc8LUE8AbG1e4A9ULCLtotHgF2FQWMneiCrcmoMrFeLEEFUKtGUu2yDojFgzDhTPzVU",
  "key12": "hvTihAD6H5LXvUdvuFEdrakMrJB9poapRhZbarrvX8YdTujjw5kaBX2yC8MaHu2VsMSxKmfvJUFjUsSYJYtPZpH",
  "key13": "iAVRthmBDymn2oUwDhRN3vngQVszmqkTxQxCWYejtq9SRoLFWs8rFGT1E56CXH8Fzb2Y9sMzCBFKthTSec5nf48",
  "key14": "q6vGvv6Hk2Y1vepyAdp4DKjGRfd8tpL71xxUX388rUkNDJUmjUnxvfSoZoRj5HhP416G9AivE8igVxxNAwrC71e",
  "key15": "4uyBzeL45afp28oW3mzu2PNcbXLBTpSw5JDjBhWiEWgLhNFRpgvUFd1wt2pBN4wtS2M3oAkD3AuBBoKJUXs2Y9E5",
  "key16": "4yz8A59Bub5bEQjvxkJt1cPnWPZviY1iVRRcEdGf2oAyPDyKkXPBzJ6TJHmeW7wmfGWnvSHRVU3RRye5WnV1H4i9",
  "key17": "27weLTwKthrwrKKGmUWi6gU5rcjPKTrc2zZpVcvvSQ2VpNZtEiVG6duiKAQ4yFqGz7vEKvrrqvgh1AHf76QEsapL",
  "key18": "3eScT9vWawcCQ45c6sfPipNWYYbEQdryBKeSwiZbZEzAw8gW4uScrTMA7GZKSdUQRrX95YShbTRZ5aARmSZC5bBW",
  "key19": "yXoHeof4hGseMPT2FDti2DHbKCfggSbRGf2SbrTVBeX18T5QRqbZWUs3xyRLfbW4qiboQaFaDrLxDJS4uzwYBdU",
  "key20": "2YNGM3J84HfRgBevuybpRVmvsUtG3EjxArCVNzFFNY4dZrh7hxyZQWWGYq11Rkt3sh3BGCqSd87aW9nNeaqnqdMp",
  "key21": "42puHfV4wkoVhH4Zq574E9M1foWLSN47rrYorbbw4E1aXcuVhJ9DmJ1bbTFwexJFWhLB7Njeaxabccx7ScP4fFmz",
  "key22": "H2kQfDzVfeAevG77UhB1hByHPHfYmWmbt74QqmUnz2YHFMw8fFags8VnQoPsU9ZtkxB2GBDifNMQ669dixgvKEQ",
  "key23": "4pgC5s5GaiudwNfwi5xu6iqQHHAvzt2addpLNdSmu7fYgxx6hnLvgKXJ5DKuTacctBjRBRdP74fW4agxmqtQESmj",
  "key24": "5HjN1AsnRJHX7wseq37EoeEWtdCsA6TvrxMHAhXDbmgsk5z7ydGx3CrdgWP1M2qKeA2RaZ6ZE6UGtXM8PYa5VgHx"
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
