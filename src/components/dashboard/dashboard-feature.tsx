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
    "Y2gUfw6efCU7RiruRNCBod3ogiBVq58BdUcCLrdXuRHn3uynFuBnt3Ep7V6urj9bs2QmujJcW3mBpkUBDEJgXrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMj16ycHhDTV4S8E67edHxbyL9J2HfyJJvrD6BzeZijmwDxW6L3H83znwMLHzmYj91Hjicvv4jB2abAMQ8HVWYN",
  "key1": "2bzZXVo4omtGNQdnziWBFGXwKA8ofVCcugJjTVvrGwk4bWvU28LNyRTAWKkGC792WKxCHaU5mjrRbpoHxFz27srF",
  "key2": "2khNhLkT3eFkwStMWKgdQLSV78Yq7woK3csn9ct8Yyf3BcMnkbBqsfUBFgUUzENxLbLQZQfWmr5Mx7iBYxehfwts",
  "key3": "4c93kmQiaTYsXaXXfbUd2j73LiUcoMxq91fxbKfcy5kYwrm2DF5GHxUPF4ysbKxAPju3bMozD1w9keVSykUgUJ9e",
  "key4": "4vYdX4XQkAtVeJzEd4kQG1eunzaaWXyDjLpNbX53aa8LsqeYuV9ZCqViciySNBHH9KidarQ7qMGP4GM5GFHfhgXi",
  "key5": "4VwsgT1pbFmP3CRSFyLDRcuKizxUdYPQQHSb4dYjShHgQSoJULU1wZ3RW5H1r3fzGoNNkBMAXN86sY6niRr2oUPJ",
  "key6": "1A5DBj3WneH5HpCFs9ULfpGdLZyYk2RNWk3YroY8t8nXhSr7Morze9Bwy6yqwYB8eYLVyrJX68kcVn6zu1P93Rd",
  "key7": "2NaMakJzUJMa3hdLEXyuDAcciREaQxa8xhYeCQrQYWyi72JvFVkofmfRsZ9ZNvgt29q1aZCM5oVbTSUXmjYHwvkk",
  "key8": "5rZoEHLWXuQwtAhH8GQmmBiu645fjFArukmuL86KeEb3RUFGmhKnR4aKFmze9g2bisY8wnXdYSc3TLVF7tr7bNSQ",
  "key9": "3uV6ssFNeeCnXZqvZFXBoqCwWuCgp9oMGBwePjEArFqKPTLCzKBB4nNoUEVfa3TnwZk7CvH1z29DtnSBDDVwDffi",
  "key10": "3qiZPSZ1quGBNgT8x5UbhMNKe9RUYDRrtkgnveuVE48d2n7iAovTunJCQ7opyG8vgoi5UEB5dq9ZJ3ckJcjqvW62",
  "key11": "4xjrSPcLdrtW4KejT4eh1LH5q735e7Tk2NVkzF1HghSGneUccRE9xFJUKseWZsEQRPE5CgCcHbejXJrY53i3JZjP",
  "key12": "Qy752VRgm7R1Wb3eA1A3e5RbXRxYpov3yCd9254AVg4DtHrtvGTJXn5kwu56FbNSJwzE2QrRGfdsBh5ecbMKb6s",
  "key13": "5wryqpcLCAeZeD7uEThmZK2JyVXFZdvzPdQynBccMicN8K1597jj9iaqtFXJyQkyPLdQg8xdU8cqHqGbMvN1frpv",
  "key14": "vrCnCmZgLKwqmEXskFVWE9y2Z3XR5Pyc2U7xAwz8o2D2on5Y48vsPrrC2fHFfKK3YhNWjiCSna7TGjehyP7Seq6",
  "key15": "44itG2bRoAVRRrKCtNFJa9PJvtPHbZcZ3vzk6svhYe43gC915tS6BvigFKHRgb4uuAAgKk3a7dbje4b7cmeE7p6u",
  "key16": "663jArJynuejUGmZbpjwbCr5FbMt6VVBqqa454KYLkWDgKn6bmnbbhxX1QkznJoQVbk2QnDpdVKqic24mry1aNEr",
  "key17": "22NrDdRFzSLnVC4wrDeVnDFqSZLiVt5xZkCRPU1zBF3bd5njauhUFaNSK1o7zCMFtfbeiKZYHcup5Tpxy6PMk931",
  "key18": "31XmYJHESTo9VExpBLeCSFikbNNApY1eDUTLx8voX3canHNM9EnMWM4Qm6PhwhhnP8J2SRA7CB1PULJUPAcggvH4",
  "key19": "qRYNTefeEG9k3Y16T9WgvyVeMPiGpKus2QwXxdCiGDidqjgvFebMWcPXSBGKFjrxKNA7FwvcjQoyiTASwn1SD7x",
  "key20": "a6oTopopnsEf4atXhtpKFGrvvYJgFLFH7Ck8v9LYHkM9Gvh7ZpgMcENZdmysLf7SCgHkADjVtPBryTfNefKSQtc",
  "key21": "5YteWq2U5hxsRYddY1TQa9VohgW8q9n5w2gWYQNSQxw872V9oZywY6fWfWxgciRSj3tdwDDZ1AKQo8JjpHDFFYGh",
  "key22": "5rhyA42S1tXEZ2EXbkmGWcjYPmq9mDBHKBzjnGpYqPaFbJVJiRvWsSrq5szXn7JNX3xbXR1dHzdWW9VNGUv2td6T",
  "key23": "5EQz69eyGRrLXbcvmerrvLxMWn3hRC6TZ16pv45wQxLANShFS9eamh58qUGBEGCUvreapyTLnJH4U2F9MLABuQ1i",
  "key24": "5yEF3zYUPVcddNVCMaB5BTqL1x1xE6BekQJQHRsqjJxBFrv1furX3pQwEftaASsdCGx6oj9tygbHD48Cw1xtkgF6"
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
