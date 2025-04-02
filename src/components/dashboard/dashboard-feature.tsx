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
    "4dqGUqZW7rZSp2bxVCxZEAgjM4facc7P85rM7zV5Qr2dw12mdhbM8DSHSMj5kPdhLGYe6QQ2SydFFAVvhxwbsjjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41dHJ75tSZuVhs7WoHDhWyT5kj9AdwzVu73fFyjH7v121e59KQSWddj81iXBre5Qzgdnugzmp1RfVdRktgjXxKRJ",
  "key1": "4H5Hc1AWiV4ypSK7JR5KpsqeUyqKxRFWKKnB9hExnbnfFjFR8vk7mrUsQr2G3YGWs2y1dT3rDGJKtpfSPopusMAM",
  "key2": "3N5VUQ9DEqY1H86E5Vk92EnsuT7eurLxVqUhibQHvbZF3DiZvEhfcYCSb4unBymPtU8kGNJzGE7DF8Nqw3NR8qAL",
  "key3": "4gouQ6S5WhWMnqumyrApgiQBmXwx9cQ2xZqSuPD3NtrcMBQn2TiErgBBM499AAWoRmWeo77jGsgyFgDPmGKVfZ7j",
  "key4": "3WYBa555XrBXF16piNHWcRVTGoWNL3gf3feS7ADe3RUwfDfccqLNG3UJpxYApXyMy5ASR3RLZGnr7CNn6RGpuFJX",
  "key5": "39J8NHNFTCwHoohwuRe5u6o61LYfWxwt2tU4W9YECprxN4KzfnHSXXksoVt718WQm8epHYDdUxsbRuzHqe78oaBu",
  "key6": "dPUJmmfPuDgjE1m2FC5yxLNbuJFUeRqTpfBkok9bVjjvndA1X1sphgL3Dbo4M2G5thPw6qXT6QrZizFGbazLbtZ",
  "key7": "3fFUQ49RpaWHcp6oKADzofBhS526wKAuotBHXjyUqHCbfe4RuJgSFZjwxB59Ja3CsvmgTfcRsrdGwzLmGJyrGXBf",
  "key8": "3MX4MyL8Ls5f6jh4REW4BHUGRcMpRGBQjWjX4DzMuEAJnw8H74rvRx8k8gH3TSPJmCUceaVPLwfkEkrZZEW8mrPL",
  "key9": "4MgD3sYBmHXjFCbfMs5QU7B6BQeFHXJS7gMTuAJg2G4tEanDMN8YYoPvD3FZUbXDetKeJfLHKK6vTyqRzbc6BoEg",
  "key10": "5BywE39ezXFrRePMxZQUKDRvX1ERJcvLiK3ogSaEYu8mN9e5kEhe1TRjJUQtoiZGKGVGEJuxRXX7mc13NFHVPT2X",
  "key11": "5qLm3amVBvSc8qvj3eUPxwHVXGHGmSZFSguxmKobvXtK2GW4ZHMN4GcKzY5JcUB89ZWdpUcpMvZzukZ2EuqnPaHs",
  "key12": "QKK9SZde5AYp8DbNP7DGxyb1i9HjZcohzGny3ygfsqQQGT11t3Q3tnggd4EM9bMuMYQaNPV45zfxhFkuCGruAKd",
  "key13": "yxw8oHAUkdT8j1eKZGZp2SZuWqpZN21LYkLHvGoH1varfCorP2mCaacQmGveR68BkjhMX3Sb3SEtWQadDmV698f",
  "key14": "4H9rjqbwrmPS13zFzS5jWSCqaXW4muX6RgKe5Ap34QzqYauYsuFmkdpEu3CguxbCS6kTHGcZEqfHnbTHtQqebR57",
  "key15": "2KYc7dzqqxPT5oU7J4uDLy1pUcjRiPNAVs4HqwxPi2K35tczapQzSjrhW8jypx6vMxJ4qy55REjLfBZEki1LrhUN",
  "key16": "3bf7iTUEYCZUVhrhHQndsuo9jv5A3et4mxZymfYqKs2eK7W9GnFq5Pd3LMx3YMVJ9weSf9v6jvbodAtBZH737ncP",
  "key17": "2qgaijWNFxStsZxbTzAeFZv57j5DGWc2VNzx6FuTK8LWujwx83V7i8KXaqze6be5KSjvk2YeFg6FmmHcxzeNTErV",
  "key18": "3oEQ99m6prhsTeTxpjmQR7RHmuJtFQtTwj67WSeEJHvUSCVjTdNLUDoseMMGH5NAPKNwX136oq7FACv2pSFbdUco",
  "key19": "3vtSJCyAkaJUJVUKuskYDxN2gTC8hXDbHR6vcRFe1BEaVmXTgQyepiBUhJ3GRanjXupXFcyMxAULbSKmmwEQTiGu",
  "key20": "4jgjDzuLSEUgzDTuSUu8LprXxu9Jt4XuQhgHupAomY5ce6NfbSDvJySybvrGsK2TJy53Qhfmy1s6vbJYjnNvax6",
  "key21": "2et7pdM42Yxnx59b3V1FMsZeG3VXhQMAsn8ZonW6eXs2V6yQ7Y6qW6b5f27exZgokBXrtdW6D6y1TavUduikt8Qh",
  "key22": "5EVkyon39Q8mw2zqaGizE1vqsgbyM3PKzRnCKjenR7BmpJEEhHsE5BDQPdsZpLDKSHNUuY9eGvbMprRS3huUQx6n",
  "key23": "3QhhcgctmzrAyRet7sxpQUVYLpT8cjxEqQTFVRguSf7Nh9HSbR15MG3Q7UEt6syZYRxaByGvhTReZAcU7CmnbFyA",
  "key24": "dN3HeHKAtvQDBaxoVvc34WVMb5CuZ3KdcVSbd7p2unyAvqugaFVxqEh6prYt1T4YRTUrhgdRP99AqFZ2k9eBwZT",
  "key25": "4hjMMBvCYVjf7fNG8wFv5ekMvNYVphpHRMqzqBorfk813P4HffAXobWSWbD8N9WJsEdd2vTwqiZSjsVhHK4K4XkG",
  "key26": "49t9TtMkobZ3nzeE4BEmXkyuh9ee2qDw1UoTk2yWUkq83T6ojmY4jk8zU4RctUX8cVnmpzwcizJcAdjP1SxZRS4L",
  "key27": "4HP6piqf1ZiCcDBJwKZdNGZBAmH53rBBrC4uLtdzt9PcS4DHkwt7y3dTcErWzJhnenNNN3X2Cfn3choztuKGNNkC",
  "key28": "2t63JxbVqTqVXRceBE2ZCr2LfqzqgnEMWuuEaFXreAaY34cGES5dFyD2qi1yBrCaZbQriVSZSaRFDVe1iDenvKkQ",
  "key29": "2bLMfkNvcXXcsREYKUQ7q8pq4PdmvHZenvAzKFN8iDwMe1WeTy1kojKExsuz8n89yiVQwHCXwkZsJmvX8mXUWaC5",
  "key30": "4QScSWnqDEdRkTevHmxaNwBNdYqXbrBrge6M8e1SpCuk6L8SYha8NdPwAo8HCvtfJ93hGYEGnqthVDskSRcpX3uC",
  "key31": "3aBKQDy8tjnDmY1sxscaTXQBcYTxpDGuLyPYySvST7S3SYCs77MCwsFbAYY2ng5umwwNyDCd1JuWh5HBzfT8krs8",
  "key32": "52KmuaRp7HDQmh6ov4EZrq5DSkacF9ep7kP3m1d3bqUgDySUr525ALvdur37hzkBXy7MTfmb4VwkjXzKCXCguRbB",
  "key33": "54wy2179Syb76ZcfTt1jNPr3TLFFRjGftFe2LSUCu21fSwydoJjKUMLwHDMnMj1ADxKwfR3tMWNKHityYuiKdgXp",
  "key34": "3SaxhZFrc74b4YpAqhxGd7BqEwFAV6tY6vtRGjyCSbpnY39r8kBQdZd3Ecu8EXzAEstjxKj78rwK3pRtL31Ry7Ms",
  "key35": "5efxnGwXiSyjtp7cuQn4BUeoGARva52wg5h2j5iqSuKJ9LrQMWpTshBbCkDiEDWaH4YiUird8eckM15WMBfnyjjb",
  "key36": "3PB2efEigdvNQVtTtTk7FeuxtnQSy4DNou8qC4KEWrpHjUkv98Cz1evYkUZY4VWfG2jYDhz7rVMjCaAdY4RvMn4g",
  "key37": "3Hte6PYFUdqQPczCmW5hUxqiThkpPcB3tnX4DsVE1sQAGQHoJkPfnR1aw8ovVx2y2R8HaKoAj1ScDWqNjxGiRo3y",
  "key38": "3vhLwkiqCKuNkTLoSBqeJRnEJvPkNVRUHcNftyEB4nCfLxsUfZWpjXLLdeQb8MnKhWtMvFKhaZcPPjFDKwPVVrZT",
  "key39": "35JQ856NSvzDDdt59ZHi8vnyyf4vUjjAwWMDnq77bpX8BRrXZNEvHRieinK12iLQEvRwZeLZFuYp9ms5FikzNofZ"
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
