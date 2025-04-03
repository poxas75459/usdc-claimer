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
    "4pX3z2GaMM6DdPiXRASK17weGBwNRnppe8xknKrAqJGoSk8TACcZYHhaNVgN5CHx8g3JLUViLdLaPA4RdH8bE4Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yeUwbutT2TrZjTKDEVQWLuZT2KcvAdAbxXK8jKPjMN5SEka3EJtVduE6p4P6YTffP13qk1VQPsxBxnzKQUtg32V",
  "key1": "24ZeuEZogVRpAqK43aedBYY5q3n4WkuFH5jRjPV4hc2ShCMEpPz9JwtazLPLpYRrqHcmYvuBz4JfLfsHztrY9tEE",
  "key2": "62miSEjaxhTxXK7BCtn3QanDVhfpnFQqht3CcPHw1QrPZa4QLT7crj1q5i6fSCes9EeMSnwjUnRgF1fnZ3othEqn",
  "key3": "2sBUtPUmWP9gNg5WCLyhDwnzuSxt8Lh1VyaMcUDmk6k4eotgsLhhoZ1UDXKkkMrPUtcZADYhx9VCxB1QYKwwA18B",
  "key4": "2ZfgjH2Ugdt4cDf9c7PitC8ATT9N1wQy3ucakLogP56sKL99KM1nzEHQaYQrNehKaU7hUMz3ha3JpRNVxUrEdRew",
  "key5": "5Uzv4QnmfMAWxCdeAk8qv7bdEKQkgVpDXX1YzSGze3ipTAyb3WadhD2oDZ5TugAiNMEKtoxXH9ji7mV9g4g174uA",
  "key6": "241dRMc2ra3CYk87F9hEUjJYWniJHqseQo5AHH4iaHAxEgUwhurS1aZPYxWirL47UA5xzJytN4b2iZQuArj36CBV",
  "key7": "2GUfaCn4fTGr4pvtowjzPZaPPp6G3ThKtRdcdhUJqBMbv6Vnw86DPcyHCogwbbcZTFGR4wVSXjmJtu6NrMkCNS9j",
  "key8": "2nKER84rFxtWvJuRvJ9PdiS6fJyNddmWYRNQXTJQ8UUNa79f8W8vA1nH3jdAmFeRguQJ7gxbsEeuSJQg84huPD6j",
  "key9": "3Ae24Gn6nh8PXGMpacgo78qaS31jNeMiaZZFvW11ZYWBxV21hd18bjDNbzzL9mid56mTiTbo3dnjuyT5U792d7ak",
  "key10": "2fKt3DBw8TGtA4b6r6TxNTZ51wEBEaGe1vw4nNWHkSy8aGbqgaDEyYDsBXUAXdBgA45BcgoYf3piq6xUv9222Hj7",
  "key11": "4YdjxXn5ey11X3tHLFrDgqmHpXBcUjvKgDhYWsmXZfSkUpDd3w1e6mb4vAqNea1LFf5oW3GfyjRBh5NGZriGkaij",
  "key12": "3Wgbd6FYSqf28tAjvRXgKn7JuUVKrzQ5j2CZ3qym6VENt5JFv5vhKyDK86U7zHxSsnjEf3d9evmzLWgMJ1RXPrxe",
  "key13": "5nupQTkNYvGgJum3UdLhJxrufpozf1ytru65bpb3XqVcmszCDPhc2WAon5MFR4ZqUCCgttqVigjsL1XGD5Qep2x7",
  "key14": "5yFvJCmVi1V1rQZC6BeMDZRqBxvq7PgEi5uuPVha3YLwSvWwPWfFYFFBsHUp3vK2X9A1snQBdniNrPkB7Roac471",
  "key15": "5MGn9oFGaz86fhMuQcSD4x8pw82p8tGTt24cbx4N7QgVvuvpUvS9R9KQZT8pvJb7YeMdKEUuz7Krz56wRjcPb2rV",
  "key16": "5yxgosNzdHF5Ujmg8DbQeJAuA6mf84DUSJhMQ1yvPd48yKqUAK9urgZYFN1VS16furDHAZJuxA5rEpt1s3VWfSyj",
  "key17": "5AAMpP1deVbd85sjWq5i88QSfad8kZoasXzVMbgeX2vKo8DjecKNzFZ2e5maJuoSwFzYnfr3jMWwj3QDKMYANkTG",
  "key18": "3gaPVCf9ko77JJanjBJp9xAA2nnzoyrqKcczYRi8DN3y5yEEykzRMH5CaKqZfFXL5TvRjkVnRhFTodXtRyzgZ6ig",
  "key19": "596Hn3jNJn4gv8ZmXPXkU53X5jXKfFbEfc9aReEMx42w5swtJ3rdgeMCFmzbfKq1FJuJ7yMzXiwmZ7BUqrpJnvnt",
  "key20": "2C2foJsLHi6SpDu86n6zgnLjH5H2F3P8WH3pbjWV96Q1zUhjE8Z1xdvn4v3SbYwK8Y1sz4Afx9oEckXWQD3NohBp",
  "key21": "4BqwZkqNYVVAaEdv2GSy2S5n5GJGwx4xyAZPzdUWcmMhvHoadStoJP6Np1m5BmegvamByz9o5yLmr7J9Dn8CSVPU",
  "key22": "y9RcKkSWicX2SPwj19u9ry58FsxEXqw1nSLP5pYWErbHVDdBYzpt1wUVzB6geUPGxkJfL7fSNwy3HVY6g16wfF4",
  "key23": "4dzNS8hAA6TdWvyzU5rHn1qDX8qxTAMjWn7dmpdnvRMc7kp2v6kRKqPV1Njf6YzmxwDL3QrMPmDw9HeZc7BVpR4w",
  "key24": "2iSabkxwAJz82hq8gEXKyxytTYMjgGaV6BETQLvv6ZvY6dgf9bLaNKdA83adA2Cf2ysx4M9pbCkTwxjWcdusW2s2",
  "key25": "2iEgCQJ5whBvzMUHs6fsqziDu7yYQjj9hCKZtE9SJUm4sqcesU1y5tRXNuomDgwamEkbk24mMXMbHQZZo2UcZn7C",
  "key26": "5tcTULh5ZUfh9YSrusfS9sJpArfTyETmiB7pFyJg99z7Gd9BN58ezTTDmsa5QG9Dqcs1cQBus424nP4jD2RmNRFM",
  "key27": "34AgZd9UTJwhggTnKGEyNtHwMmsGMnJ7DXNk1NG86CysNoU7bJfDZbstXMkSUDJgsEA6RNv25J1vwTqfY1rLzeP5",
  "key28": "zWf7NEektDSTRr2VpNr8Ts8VREVNYBDcztEANt4LnSNgUr4wHJypTm9wwWLvSWYNga9HdrKW3QBhT3HJufqY3xj",
  "key29": "5CkaQxCJ4DhxV9pmxssU8L7q67L1MTc91DfSqQEHvhSGcxFiY5SFcGs4ZPt17shtcCSc2MMbpe2EKqtJftQbxdaM",
  "key30": "5b41hLKCds2q94LyuepNiUQxaMNh8z8oLzMJVxXCnuC7bRUMEDkJQUV74AaRPVneHqzEKstsAQ3QoFhxT83M92MV"
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
