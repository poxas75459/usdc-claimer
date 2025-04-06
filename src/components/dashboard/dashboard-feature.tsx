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
    "33FCqb1Xv7gDdhgAVycWZ7DA3mJ3sepihMtFuoEKF3U9y6Xo922oNhXsrgLaDtDFfJF7sHGpzUJnu2ABdpeCF55Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xArfqkyqZ6rJeaDWwLmeE1NhEcjYfGNbscM3SETxS3a8YvUGovq5gn4zS8Gi7kBEwKy7fM18Gw2gtU95ste83XJ",
  "key1": "4nYSQ1364wwiCWgu59KZ6ix8KxkFp7Bpgu98PxiZxv62dr39YAymJzgMRrqkujnZP2Yx13NaJSnrruqg1k6MYjXU",
  "key2": "3eZur1yjokPTHdNZm7jGeMEar1HHgkL9AGEhsFDLCpV5coBUGybrcycHosexAz98XffgthiDLZDeknao3HNXjhgB",
  "key3": "39arkVnpd6X3g22xQwrPyaZ3Q9yNBPLUiDvQqaeMTeLFqQCe5z5qUo6WTfu1xes575u9vY1ASFt6F9ZbtzQBH5oA",
  "key4": "3C5JvobybAf2EAuYhqGJb8xHbMRRZWt29qfHyTM12eAEsCLPTbqnm1C4fG2VwavWQFhWLS8pbuGMJN36m8xrK5WK",
  "key5": "2wj1Us2zeTZ8z2bpCRau7jAYsk4hMmwdUABWwxz7PYkUykWTbBm3c7bXueAwPwx7CbsNraJ6iM9fyto5jTgmRZPn",
  "key6": "2ys1S3kxsdobzrZJ97hcdzqcrfP7UafsZFT1YwG3wCWY9d4ASmC4tT96oPwM3vDD54VcPxR4g91PGkg98mNU11Ga",
  "key7": "k5w1wy27s58ReaTmqb2EjSC6iWFUcQYvrjTxLbTkwJ6JtDYDMks3Mbd4JzMqCLp3M7tuuaiqjmWW9KM3MX2wXyA",
  "key8": "4SYYbQLPpNkQdrmSZtF42Ba9feNGGzeBKTcUFan4rx6A1QSfjpKHgkRVkwoK9Sxesg6Et7N5xnNc1YVcj52QbSZL",
  "key9": "3b7JK3cWCSPXUneUKrdBr2XCBJQsgDhCC541R1k786UGwyW8RNqWUk1JZBJNYjaniPeXneS6SpeMDVCKibVYnBKf",
  "key10": "3eq1GPcB3Fam7YW4aAFqfGXk3BWMUTWkqceVB1QCaQuiMLUKx43o56o48KXCiLbKy5Tz6dGsR6vYEDKw3akwicSF",
  "key11": "iSi19cJyju4MXjqcwxc7vTD9y4cpDro63riJEc38rXy6Ta5WA9aiwsPt3qBQF4LYk7wuqZZJssRmg7Zr2r5zSYh",
  "key12": "5FLpfNHZj8fpXuMAyzVRMNqetfzb7NXoMYVsKRGxYBLQ4jXciab4jgE5qcVzV8B85UfKUrPUaF7qfNUeFRVYjhxZ",
  "key13": "4YcYq9nm6fKS3RzE4S4d7tHHeNeNiqueASmcbspQqHwGJYajsZc8yb4MDPhkBzT34kWCJn1mYonuYJZDnfkKKTAR",
  "key14": "4fm8AQYwpJ8QEqCCRBYG5zuL8JqBMu6x1dRPfRkc6N2fCouQm2ZKcn35NGzVypn2ZSubvjQpwEpjMWePemDpRuoo",
  "key15": "2uatV4ZtJQpJ3XasQi5oDScStzVUKfQJY7i2qrz1LqKu3F3NpgDad89WB7kZyFiaGNg3UsQeon4baz7kNNna4TpP",
  "key16": "4aU5LUXqvCryyXTpzziCPBLkUaoADpRJ4xY5gwq18oyLnP3y8Kgr3493dCZt6cwFzktUJrrnGUmy1JRcVBR68eDB",
  "key17": "5VYNV5Ytq6gZLwG5GjsXWnECTYASwa7mPV5W16MfR7bYZrLAspnw26jjczZ3ZajRXJUe4jakWhisbfyYHw7iXFdJ",
  "key18": "59XcoepU6ruYDDN8TR3kEFpT6kXf3GB6UmCpnh5jWbP76zMSvjskAdoVZgjhAK51TkXRiDBULemXH4Xm2E2ygCuU",
  "key19": "2Ghimtt3Xccsmty3PRrx5c7UBwCqcrB3D1ndPhKAjqp6zjB45bVTR4iqJk5boD1c7w5j15ioktNgEXtTXrvDNnqQ",
  "key20": "3wWYynUz7YGnhmcdyvqS3FtxKdrqRTNkgiyq77ZWL11aXQPm2r2HMENuUDSoy1rE8RXLUMA8w2BUzwfRJNnqCQGZ",
  "key21": "4dzgEUCXo573s39UGzMSHngcb16tt4zpGH46xFqxJU32wos5am5zyVrQknKYJAwhQqgJAvPYyfNLdN3Q6C6xcU3r",
  "key22": "UFN25qncLAeSnXRnqoRsTyP4V2q2CuDxRjazjRetjwrFb9Vbh2USAVsi8fCkZPZWPTSdYj8eCb5g4xSbf7NL2w7",
  "key23": "1zq1RFsSwiRberaAQNTDtJtYEexvqrKH2QXLRPh7AFaaBmy1s73CPEhdFDothdmJsnFvh48fxRp1aSFCLWKvFn3",
  "key24": "5VfAVzKChbDF3iuwB1LpGMQA6jvBfabW5UtaqvCJ5waeMRoP6DnKptnEQfPSBx88bXAFGB1aR8eMsSrk2GV8tiqs",
  "key25": "5wH6iAsHH6uMdK382JJkjG9AvUZ22mcnKU9r7V5inPdqV314rorfeUFcaCgZ3q5aSWECkWnm7ybZ9u9m1D5GqzYz",
  "key26": "41mYwvCnJaAk3g9vTufwhuD9PN8SMPMSngCWTmUzHVUju9bUK2hZaFUgCbdXnGhpsvizjuLiUfc52upom2PtgK82"
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
