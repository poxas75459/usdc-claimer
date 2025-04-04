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
    "moFh3YaZsZoRsX1uZaZwtpmnsFCxDvYiZs9yrm1wQo26hVtQ6oKeQ9hqRGsLa9hLkXNwNvm4ErNmmB3dxCVx1Ne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLsuAJneqbVnYHiotyquLGeUBERRG8LXGDPuXgrH4gcrE8Ug6ueN3ipQmgsPt3C6iPEsYjWehcpijhRsQdLdP3g",
  "key1": "J4C3EJTRUWMVTHHh7ZS8M9gcZcBMna9cuR9EaqM56XbYynkZc4DVfoBVKGuy3h8fcT4PawNJae4GcvHWNMCB12q",
  "key2": "5SmjwEtyqyb8drND8vjNjjb7wsYRdCNJ3BGJp14PrTuB1aJo4C5P9vuQNk9S6ugH16v1j49v96ZgT2nkQi8jjmdq",
  "key3": "2azZZj1ax1pixth2f5GyeYes6N1PPRZSrJAKkMNXCHtR3LXXhFyYUsfXazxEumnwwn7KPjdQM5nTKNaXYyYQdNcb",
  "key4": "5Y2FQJjdfDfuv135SMNu8NauzXnSmvAMZjE8dSnzBuR7eQTKCxvKFEBip1XhdNHesHCjjtcwr9feyT3qy3v2T4mX",
  "key5": "2qHppkbVtFjB3rKZbrjD93EzF3uzfbcuf9FD2PiFfV1DCYsPdnZEksmPrzeHJ1c1fkHnQEr14oyozXz6oNkrvFdf",
  "key6": "CDYgckH3FJqESxeuYwgkGax4mBB4UNM2uQBZ9rbbd8YSd4TZj6ZXV48TfDUwpPmqWBUTNbM4pst6xKyi1GgUM9E",
  "key7": "2kftKc9u9XrrMDGRYKL5W4EQv4cSwaNgPUx66wonCPjhz5anCZjHKL2iMXrVZ3fHgQv5krfDA4f6ebC4VPt6er3U",
  "key8": "3LDAasBgs423KjWUojyWsfKjM2gU26MedwKMEYAXLZvNRqpKcYbXeNUQhbf3gztfqQY3RKFYBWPkXRhLKzbHJ7RX",
  "key9": "4A7pjooLRqQUK2jteYLBQPYgiY12FS4Cpd6UTugNWYys5S2eqsxjwQrv4S6639VwHtVVFMt5EAL5da4yVSKHN3Ng",
  "key10": "tEErLaMrauAj7ewHKQEPDa5wv49SP8tm6qmz6fLcF61WBRsVvD6zqENtBkUx5KXkJwbvy8iqcTShBfU8qHbmRpi",
  "key11": "3JkQLqHxLurR79u6yN4uHjoyEmreVR5CVr7v8enkWJn8hmGU5GfUBfnLJ4B91FTxp9gHvhfaTgKGhgcyZKLjGAr",
  "key12": "54squSo9u7YfCW87kKijqBQJmtPutbojn1jiT8bRfpur61KKg2oTwXtMVDuii3HBBiTqRkPYFPtL15ztWwWpp9hL",
  "key13": "2v4YgaPnb5mGzjCWKcyC66ibYVCyRBTJ5we7MXhHNM3UUj7RTgsdMP3Py9TNpjQmtFc2QMn3wojNiMTp3i3BTQhn",
  "key14": "5Q2zGDDNbab7z5gX9JwfGKwQoUwf1aYDnS4N5sqpKRwax77cVbciRMY4TSHR8XTmVK1isVRy67rk8DrHePAyempw",
  "key15": "5o6dWDVNnHyoVyp3WiM42ejU8LdpXGa5HA9x9wdjQH4gb6H4V1JgvRUtUPgoDEsX3faBg5kVmJGgnzPwJnnadptY",
  "key16": "5aDbZrZrxVGKC5iszgGT2kH2s98PTuy3xmpa7gcQ59bxbWuZ6aYPkn8L7WtAeVNGAqyxpPXSKyuNEGN6nbmthzZs",
  "key17": "3FhX5JDAyZouHwDBoDUi6VcJYrkim5bUPRTyYMm1S9kQNTmQVq7wkdwpsPDVjSfmS7pb4xeYT4TFpD8SHMY6kURi",
  "key18": "2nCZdNXoPmdo3yQAeKEu42MzAXhh9i3fQYApfH8wjxJNgHSbWytm3pc5VCFMVaYht7JDFQTNjMp6PpCxGGQjAydh",
  "key19": "25jqxPqtHVHgNjbWKcAgUFAQCYSUrfKbMtUtHV5euNrswhgTnJ1sQ8E7XSh3vFvArEMyLCVejGKsjSSPUByQHN5W",
  "key20": "4TTwVt8u6s6fpHQGQ8NL34jUzcRiDwJ8QCYfkxoMrDeYJr2DEacgvpbJzMMv9GtBXYcW7KsJaPPfkretxwDkmdAP",
  "key21": "HaJnZhKCWzwvnHR1h7Mik1E6kG3cpy9FvfnYbMseLzZyUKscGgwBD36vLSZL3i9uGH9TYtdTHYk9F2695oZBkit",
  "key22": "3fTYemGe1Jg7y9YM1pu7gcEBYJ31JpM77Zsby6t28neWYu27HFkFkW2Fsg4dby9CARQtkn6HuHedNhHzeyvFevie",
  "key23": "3RfGMi6jjD1cUi4JXwXywP4T7hsidHcaEXaaijRiLQoemiYAUqqMiwe1arDWsP1iApDCADgsjxKGWNbeRsMKJgsc",
  "key24": "4jLWyTv55aZG7Ce2PUmeFbMNCWaiVhNmT8KWAgmqqSCjFCiuaMuoyWQ2WJ1JzZkZg1fAKYRNAb4mdgSuyV3rRKGQ",
  "key25": "2yYBgTzDSufvtGcDXtaUebLt9Ei8TkgWbaQmnL7EdFQdggXr4V98Va75bPgYPvnsRkZ4SQEeGv4dCEjuT9pkrGfm",
  "key26": "2hVh157bejqSrt4qMbccDrub4zikVMtmqPwxzWUjm1yFrT7fHQ9ozF1i8FjNkHd65L7JvcCfXuLRfGfLkEykkziH",
  "key27": "4vEAUiRBuJ3KqgbF2ceyu25qMGuCQcAujV3khGYTiM5UYoSsArFqMUgymgqrR8CYg6qT3Z8QstS1z8f6fZSfzEGL",
  "key28": "34qyqRCU3fRMcgJ5ue1WMmcywyjZKrkdxe9AMHhTrKjCfTkQhsg5wGLGPPXGZELo7ABuXED2oG9faty81qzRrkKT"
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
