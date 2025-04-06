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
    "7LxwSL4pkdjUZcWZsQbMeHGP374xD1pwN3rngxJ7AEKXB2jdfLQnJh1NTBkV4ERSem6zXw1LXrbgY19ZyEbEz73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AS1LHnu6RbnRRLKN8NEs3LdjfRm8jWHqUMFpKHoUdRdMc1vUDYZQfXWYEigKdq8qkgfb6cG7gBdztXZopkvbF9k",
  "key1": "4fZJzLbCYwaszY6B7PPbuuUrT6ycrfnUcYEWmY5Gz5UyMizkQjvb9SnboPQQWR8VdhZk1h4FjHhBPuhtq3sSv5Nk",
  "key2": "4xemaecG2QCQABoq36fMYvgegHaKXvSwMAq3jyRztFfPFepxgFh7zBBvwxpxoS5QoCTsRcUaGdB7g3Q8QQuxH3ib",
  "key3": "359ZB5aAcrNZ1G52oiicCT9bmFYd4JjesewJd3wbXAkedmZme45Vn4FEH7QRvLqN5a5FjaLJTnw4P2C7EJLYvXhS",
  "key4": "2CwKrpMJZVe9arJUSUawzVFYfpYVkcy2ebTK7c6mUy93pajk37w8K6g2KcqLEqkjou7a7ofd3PsCMJ5St5vTYJfb",
  "key5": "3pqqpfZWKBkN4YbumatufpXd7jSoKKHMCbp9TF8VidU2jp4MVhpEc5j2urdBQVd2nCmBa3Eooxs1pZE3suwBUxwG",
  "key6": "3oDGB6yrqnhDhqWaGBN4wEkuGNm3HKjVtXuEfiyHwTvh3wqcNwuPRFqB5xjyj5CvKzbbCiYP31hLX1hfSQF3gLTA",
  "key7": "6QHE5PSXD21cbG1vjPncu3RKUD1VCgLzkNrQK23BTwsH74rCiHYsXit8jT5Rm9848oqkMqTEniFY1zfEGBkSsuY",
  "key8": "btG9EJy4RDbwsao8CM7BHMGWEcsw1SckgAUMVq5v7tPyquLJdZC3sEgr6UavNfeoTYDuKdkxc1cuEicZ5Kn99ya",
  "key9": "z195QnF9GKMWH96GtjDufeTthy4rKjmpLdjqnobNVcJS9tpyS4PAZqYXQwUNDccRhM6WDmDTjCjgqYUC4RKFJsY",
  "key10": "3emfafyzrJojxpJ6sT969L9Nw1AMH9ieGT5iVKQSgHSKj6MVaCXZ4XbkZLg8RkeE5njjMQ798ypPvuz5izCMVnh7",
  "key11": "5v6CpnrsnAfaMLmXgZzdK64xztvLMYejtwS5e5JxRH9RUTFLMg8NquRmhWMbvgTwogSv5b1ChaWHmfhHDdM8oQh",
  "key12": "5c11pWMucUApVgnHgy2bga9T9KVgWH2n6m73keab9ud9BuvGjF1fc1JGcaujL3fdUFnmAGD7MKffkPfnW3Rq6WN5",
  "key13": "6dJjLLe5QSgLtdbSe3BBwYhTARfckAotouRWZov99i8ko61nZLhBrswdcKFC9pqACckMBftYHkhxXbBZSFT4G4U",
  "key14": "32GLdoupU7rGV1VRmLVhBHRKt1zzfjDLXRgPbeoWz3iQRZBTG12U222v39UzmJhcusrbZbpG6Ng1xS95w6JDEqgH",
  "key15": "WZbbftjf9cQkUgEd3L7GuucoQwiGyZ96s7HHH4vzWJ1GooQ1BiX8BBsCK1eHcQxaikSmoH6V5pFiooco5YJwK7f",
  "key16": "3x2vDArAMSGuz3mf91NDnSZ3oW2XSiJMd7QeJhf36ie9CT5kFaQaJMezzbyP5tirdLUeLR4ssF5pFngg9MrNgQnD",
  "key17": "2P6DkgmijiYVNNTqxsGzBCLatdXx6VS3e8Rd89u8dh9RzPB4mNWUoCBXG34Ee8etsaCaQKdZzmnps8sKZZtCgNMT",
  "key18": "25yvvm9qzLMgQhyGmHXzg2Rk6AcLQ5r5X1MHcg7BxPid41vtfwAaDAh4HnVNZWQfQjKTca8rNJkm7HcKGFi7bhud",
  "key19": "4UYRuNB2uervzzry5RTEDNXBuSamrRe1zCT1fCeyHHM3cjF8Ck59BCAs5tig2qff1qBvCBrrezx3UyaUxricSjyo",
  "key20": "7xKEYxYr1ikSxa1piHEeWLgkgdv7BEi38j4T2ud6kDRgadzu2yAMVnqv9VW4Nqh56ua5avuYecQS7SD2iYepkJp",
  "key21": "tN17mWqVRWb396E59qZxDpZjjQN3a7S3cE13S1hhhj8jq6r2ojTyaVod8FHsjwBAMKFXWVsk564chovVPuYB2Wc",
  "key22": "46mqA4BxKEnidam4whHXVUFu3SSPbVswXAnNWdRwLpinzAs3oAsxEAMwp6eJKKxASsz5Mn9P1jqbw44xEe715hsz",
  "key23": "4FYeeEudvFEcEgUwuHLdgX1DMdFQeKqvThSCfNYyCjx881xLe2t8EuoydMDGFy2QxqrWvKyQwGpKDFs4NtXsadgQ",
  "key24": "2onMbwuTXBZ2UWjz7q5cF1ZQCFRd9HtMQWspjXdxFpdacY1DptUriseLGRYtLEFfFPzt5NjVH4xTyCsNkevJpkgg",
  "key25": "4zQFVwfEkyzuhYDecGw7RwqyiRafS6ECxVwnxfhBDTCwHd3rs1VkwBmEq3SUhvkFmoL7hnFTi3WGbKB5RVdjBLY7",
  "key26": "5uzChV6CmvQCQC9kKWV6ZF7i26avdTsZ3DwNQCDSb1APCUQDWvtahN767aQRdcwBYks8s6VKTuysRPhHL7BwDcTg",
  "key27": "fifTHhZW5HKRDXeLktmUeNxXSkK2pmGgH2AuGgPuKhqng7M5SKaUSreUpGzY2BKCDeyYRTbBbyqHwpPbPBcLLyW",
  "key28": "5ZkER9tTxTC8m8Z4nao4GNG1RfKR5tXARtdWMywsduKgmpsJfB1Ge6bx9PTRF8r1w4nAFSAbzofPnMheXvxAuRhb",
  "key29": "3iBJFQpEH6ohqWJCoxdgxjW2z26VuCBJon2PeWh5xDuAnpy15vMcDdh9z4aju2YJs3CDvHyyTjsUXtyaCNy4WBhP",
  "key30": "4bhovqCvSLnuf5Kb3srtFCNj62sCUszykf9T6U5P7V9jE4tCnC3TxbkBHzc1EkVpWGQdTWg2oxiHhp6Hi8edzpid",
  "key31": "bsAee3Gdu8QYANb9PQRuMAuTF4Hv1pK5ezVXEH9nNXzF7KpTHGTBCViuxRh7ffMjJRquX7CPt1smJC6cc8s9TbH",
  "key32": "5q1UNbrM3i2yCgLBJFP1VA193eHzpD3CxvT7hdNdQ5DbUkXaFm2UFhoZcSob5trKzdGuBEnYfapPT6AVZHP4giUL",
  "key33": "2eTZRq7jLvgEZCBaZYZ1p4wvbWpXCRgj2mKpyQPCvqYmEmyBt8uJc8Ysvxfa2FaRFqz76egM6KjuAmASh35vnLzQ",
  "key34": "5MHst3Fe12eiriZPpWhxLUKPFpEXD8QcPCenX4AVF7KDLEL2fMiXLyKFuPVVYzb2g4RbYaxNe1EWH2MyaxXs3g3h",
  "key35": "64SBy3XCKQyHYsQvVFr1Ei9EWo35YPq1Aqa1K39HBvGDyvSWEm5twuucfXJmLLU22XCuaoFnHprUnTHoCXcWp5rL",
  "key36": "v7yzkJAh8micH1CE4eedquzGY8E518CGSegqnuGasEjAJdYNax6vmdPDnag7RCYuv9XPwzJBdHpV8JDKBZ51NcW",
  "key37": "3XBBcikKfX8D6QMJtv2hXS78E3tiLP9exWSd1t9HL1wKmtC8XoH1VvgaBoAvSfCKmp77isPAMSgE6yZYbDsmSvh",
  "key38": "k2U96GUzo3ZNc5EV4EeXbyHW7p8wJ4vxSiar3knC6wNaf92V8r4Z1zmrPhmNQSrbRyuBko9D4LEnKFWgpB2s4La",
  "key39": "3uQHM3mxvZFvDoaF9oMWhqUAPjvueRonSiDx1UHr8Vx6Rgi8CAU2HF9MQ3ccpd2p7GX3jXTM5Br6Vbmxi4bBSiHd",
  "key40": "2EcV42N3sPLNU5dLXjcgyYaTRDNAuPjTVAKab2Eog1DQvkprhFo3nc62GNWVnVeTFur4YqSTyXkcNCzatjbqnkvi",
  "key41": "YnNkE6TAxqcNARtqzjzeixNqNn2hJ5A1tWF1UVCyBRkQrjsWTazaTXa2zn8BQKUXhDLNUegv7Fhovkk7iMM7jS5",
  "key42": "35uMa41TzSZmnNffsy13ALc7XJnke1dEbGENyaEbvCYTt5SLezBdwYKvM9cdFqJN1BgKB7QygJcPPRtLreFgZDmJ"
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
