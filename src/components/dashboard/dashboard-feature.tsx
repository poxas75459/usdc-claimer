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
    "3BAJTqEmNYUQYc9VJf7D4615R1PJKERzbdhN9uDuKRZMyG8R7X4vQeGfV95yoJTRQNvcNcKLaUWg6VLdx8z19QAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bGs2b7NRyruEAb5gcWx5vpBSmp5R1W3zTwJLsHAQbHtuG7X4F7Gz5NuPiQmqx7czJ2t55917csC4gsvFmUkSRd1",
  "key1": "3zirV558Am73uRTCJunpsbh3byMJ8HGi3LuCMhkxNdBVR6TrEemzX3S4dLDYytCebrcqxrJnLqTyETDTMZyucnhM",
  "key2": "3FngJyRoWRQwDk2JUdB7KzXpC5ZK3bEn8zc2ztV2UZim7dbrNMP9EpVjT1uMTNtNrVgz6E7NB8Rzsm7JcruZH8QK",
  "key3": "2LQFcQ1uuKjdWWPoUZ8sPx4ZW2ksCfoPXwpGBgHm8u3ptiBEeGX9QcjTRyftPaqgHNcfqMpHrEJMizoimSCutwe6",
  "key4": "sCYabJqLQzhHaStH8CgyFHDMoVEg6uwZBztk4BtNScXD2E3L9VEzUQXsMdBRFZfcoVwMbPF2qC83VE38Ghqkuk5",
  "key5": "PJKP3PfLsbvfEa5pBpfvNfdajEudEm8dzdJjabPv4btuq1Rgyyy9STp1mi181ehqqSeM9qWpJCBvmGyiDmZLkQi",
  "key6": "2TssjnQbdVpQUypS4fkBA56H6pzKsiM2wNMfVvmPnBh87mWZnnENdhH3osAou6DKMpo8aLtjxWdGidZrjMV1xjBo",
  "key7": "5fhD2ofPLWAm9uCF2Nr5TRdYQ5sPN9HvhjYfxaqiZiWh9nLwGwTjKbT1y5DuUL4KdfirMUoEZ4EckQfoB9qRPVwL",
  "key8": "CTGu4ekFM5EaTHm3sAAgfZ3oeTQTGbhfu75gPKFqKYCBVkTfALWKj6gqgdFf3tMS3Dfas9dotR5wLg6ivBdpete",
  "key9": "4qrn3M2eG1Uigqe7ZbP1LuSS2agaTfHEiheqJz8bSyCdXx9Z69Fy6eXqY7xwyZhZCoYmcJYVPBVDFhf8MfEnF6q1",
  "key10": "3qB9H48rzPD4iEujahb1F2LHZkJCHJUV2UrCxKiYbnF31vqEbNzg7PmzKMuU1qt7MtTxLVryjDeu5Sy79FRurGzM",
  "key11": "55mYteg7T8BeXDbRQF4PNF8kWhD4zvGBKpE2Sed3e9fzoHbFn9qAN75nZWk3aDBXa9TKw55iFuUHzog8UXQB9BuY",
  "key12": "3PZcBhmfPWX1zXPGWkVsrxMaCmbe4gn7jrM1zCWRqtbMYAfMaHoPbq61xxMh1DZbZ1GgCZyJeG9t7oZEg4nzhd3g",
  "key13": "jBEzTomFVbd6W8TgXL6CdCbQH7ubPY8nwj2ha1ZGNSGFJU3tmfDAjC7QTKGjqG3ocxk4Jvhbh8UPWupodpjLab5",
  "key14": "4MKSqe3mQSBq1UqG11SFE67AobfWYmdXxsDVK2JKmR4wFkQUuLjvqqXooHySXDcPLM6whJoETJrmWRteA62MFHLP",
  "key15": "2YEwdc8pbiTpeqA9iu5BpPXxNAAHdP4reaXuoTpa7UCNjxBQU7n742Jb4Q4PEzyLCXZzQ7d824MgBTKRf28Nggf6",
  "key16": "4UVBiyMsmCL4SxPacL8EDAF7DhhisP5WF4yQAau91Z3vAofC7Jhppq1TCaN6aeccB3PU8YZL7fecU49QMwDKw3cR",
  "key17": "tzp6j4P9qTZVYVJ3N8cyMsSSbxgtBESbNG6VmpNKFwpDTSkRWd8x5jDDJpfLF3n5nU1KinrAWTZgbz3MQQqu2eT",
  "key18": "57VveQ87f94Y2esE3Vsco9Wibrzmc12oZqBTueCau76vQ45YELNmcVj2i6YZfmtS7xsvUFxXuF2yYuED1JozBPjA",
  "key19": "CoNCQuG4LbA5vFEQA3YQdrGk6vr37UUGUP1TCiEUBLo8YhAPLNQbr1E3VC7tEWazviZWj7aSQsVDzE8wK9ARLzY",
  "key20": "2L4jhjLjtFBMJyPpRyHdPvvYWxyy3MYkY98LovEdokNfMvznHL8QkkYYK8NNfoKXXor4A46WuyQxKsi8qsw1rf5G",
  "key21": "3tmaqCrfvNnhPXbsk1gQQTnXpBxqSgVyPHNpuNepou61Jq8QUXQRzw3qQQU9y7HCjykihKC7wXq97W1BaV1tXA7j",
  "key22": "2YLnzkqZjPkNrA5jXK38rdJ7VtrNKpd61sQgTs592z7PCYpugqrsen3MBtqSs9KfUptzn8xC3x9YQ5U6KvLYyqiD",
  "key23": "3V3ggKuYbcwqsxczYVoc8fVhGGKDhVnrM5VDeW6YCkRAEfh79cfbsQdEdCpJ9TtVxEUVHtiq8ne3pwZMc9C8HXHo",
  "key24": "45jabBQB6odxPdMhomtmFMNvfWGbVSGKDjV52NvunTJLmePSfeUacSgiBrLNGJu7iZYufWroHcacRsvPCjiyWdRv",
  "key25": "dkeXWEFCxgpWFwYewBehxw81C5WjVqqGwTCbWKRmdG8DGpnS9LBXXVGXTdGPaSj5GDro2noebVhYL5HL1gZYqDz",
  "key26": "3t85iWEv2bQo4YF6oR7266iXY4vNFXaB1R55owgBGn416bjNQewTFGmAP2vzhTUn2GtZHv5ZhRApGkpp1Y95hdWX",
  "key27": "34NY4U2C8TfTx1oHxxYELaRCFECJvbAbQyo1K4Aj13tjkdWtYhYosqV8Y69nbV1zGXQufB2z3xP1ooaMWV8JLjvV",
  "key28": "2LqfQjA9VHeYMi251Yyd8diwfuQEFFjRoRfAWENfZZyM4vC7EiSHo5x2fxUJ8vmWRsf6wFz2cvdNbzgDgLL18PG5",
  "key29": "2nnJXK2r8zRL5YTbHd47NWLfxL9sFEEsSyuZkhKAieBRoZjkWvyn5nG2NfXCQvqgcG2N6NRBKhKupdr4KkSWHGxN",
  "key30": "2qNN3qXjnqT8oxuRpiWnBRf368JAWKGz5EwKwGnoS8918jE4ayn4DfmRNTgqBPXaYrukPhdEeSoBhaoB8Xnht37X",
  "key31": "5a5LHnc6nfai6AJpok11v3PFqFMRYys8pN7zNDfn1J95yDsnBNMD9w1jzbXzi1AiKAyyhZk2WKD5u9pY8ZdGd18Z",
  "key32": "2SyhSAxJfEw6CnpTFao5kapXf1mwkrqFN8oJehDCVW1FBvJcutS1JGRSMcwQxTwGx7r5mbJfkf5ncxFitn5zf3i4",
  "key33": "2QPLyPC3Zo2R6K4FPhTwBmTb3jhdMj6ov1hojn2yZvwKCwJqULT7ftrQMMsjMT8cJ2X8wBF2u7LKQPgzq9gfxJaa",
  "key34": "31NS7vF2kZbfxbvg2gS9wTjoeZ18JJHGyUeQSJZ7tUCyjCxAXiBzQ3tzJjLdjH6eLPfdhpujjVKL6rp3D4gVwyXw",
  "key35": "5FdFSnimr4TtJF24iqvrzrPYCXHtqbqyr2QfjQSvQ1dJzXnj3Jh8iStjPXfMuRNdByXCagUjPboqkQUchPBUFf8Q"
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
