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
    "3PGFz8Dzd5CiEYB96hJTPhYv4DgemkdgMf5fvE8sbkULJozGLjMtJN8KYH3tTjLdrGK1zovTtNbnyZxxyMvjNdJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z6Tnmqt1aLUDrkpa5JHF45W5Yvcrst9dbog6iYacqepYD6rNxr4n5VYAyfDmokJStoYU8cZiquPegms2u6n6NnQ",
  "key1": "mRbp4AnDrWPM7Y733pBbJaReLy9X9dzdGDPcpLBoCVhiQyqUQJcDiNpcwGD5fvZJ5vZkhC9Bqs7ZJq6EWUYf2nc",
  "key2": "5P3uiNUAQyBb9Pq5w9hDqTLbPU183q6Mn84PJYXjCnEyPFg3piYBKWHq7kbtG9hGjcqpsjnTan1f38qL1J1Y9zXU",
  "key3": "29RpBhWwjhdLHvKkDc51Q1uvCd2cuvRBj7uF12vVMP8qA4arM1a9TafmAgsV4dSZohdMQSs3Vh1QEgXNSe34Ufxc",
  "key4": "2nYgvvugpo3Cy8DbUahkq9XjDW7WydboCPEHxmcPrw3vQKhZGfVm3PtnGFgEnZyrV1VvwyZ36g2YqYzxTpWdjDrz",
  "key5": "iHA2Jo5LZbYqxDnBNu1bd9iRB6PQQeJJRntT8MccUgR2ehTf69dNx2giMUMDcEuAhU1Gb2HB7KVeKcAHvGqomMV",
  "key6": "2VcS1Rkec1whVaLmTqrCcmRraY7EhuyCEYmXkKeaSAqD1JHLbSXJkF6KFLqz7p8zBDRvhRZ6u48QmsMHMvKfVy3D",
  "key7": "yHJU89KghzFMNMh4rV84JJxBZ7hwwKWZhvNHDymr7tptpBZdUwStf6YTcMTvGWDxkBqxCs42Q24rAQTQGbyaiZS",
  "key8": "LBnfqaKL3GowWDg7orep1UhsmwgwkFhfrigQviQhS7sYGD1Vy9jakZyDXsbm9x1JHHYdKpkQHd4aSDWNWisZYLs",
  "key9": "2tP6EAC4LKz2nxnGgd42jaGmU6UxVBScHqXgVhMfjcxPf1BoXxAz41BWq6C9TWNtpWaSY85aUivFZbWhn6BAJknL",
  "key10": "4aYGAfUedfrXj2p7aKxwActkfwB74iEj7S6KkbKTpsrvVjAZT2Vj9Z7PTv26SKmq6pVjZ41Sk1DqJ3ZnAM5ZYaCz",
  "key11": "3KjvGCYLHQ67c8Ci31dpSQzfBKLhx5w2719arrqNxTywqaNu8UJFh8intiCbdvibLbCfNpLZd4LJmdBJQad8pcQR",
  "key12": "Q7M4rnEfT79CEBf3j8CBNb64ZebXVTgMapsvdK8GSK3Y2p5MjQ4NvyCgFAcYVLbkA54yL7M87DneR7YfHAkzLWs",
  "key13": "21k24Wx6Y63tLgDdnTuNXRWpZAj34bj178EUruDTXMW2FpwSfDSrY6EsXX1EBU22SWzdPAxo3qTKT3fBtMqTbmxU",
  "key14": "5kUJGNfbkf4yptN22rdgUu7SDiYVrmMpo3dDt3pLQrdfw9esviVi9oVYD2ysDaU3GCid8UETwizbqLVtGVu1spev",
  "key15": "5nXDAHb4vghc5o8FhVZUPNtYyxncJMrREk83bwqLzRT28DudXENSwDhL2Tt8YhXWMvaf3Qx8TLppKVcHtTbViVoa",
  "key16": "2QU58KUge9r5X5WuNErC1b8AqHbvUzs1LPcLYfvrL5JkAPK8Uv6TwqFMtR7ekJY77nLp1GKvUyFywFRm7F5N6GGD",
  "key17": "5bcLLJ7LfpKpo5UYJBe2sQ2cmTeeHnJeTmzCV5HxPbsmspxfRmRLWew5vEomo4erPRFRM2DaSerGAxR2XmDb9QF5",
  "key18": "4CGXFqhAmv8PEh9dTifiEMhUE1qnZFsS2GqmzrfbSxFmsxxKHZ8aRCvoV4b9jo5iiPDe6jMFXe48s9dVuJ15sYpJ",
  "key19": "2xxhELSxXujihwgrJ1JAXZLEGL5PgoZiLRCdhH6Q1UybtDvdTAioMv2xuibDmRLQCugvSXhwTEsRVQnJpYwRMe5N",
  "key20": "5QFXqUnUPQj6opXsQaEvd8QDxTfS3CgFHL1RTQdjccweTAabjpQr5NBqWagxe4WaRWqmRyf5jDZ4HjVS29aiBxPg",
  "key21": "3MJaiYDc7j33WkcD62pd8gdavvsP1xqLVCge2MUev1ARwhVm3ciMJfaq79aj7CCzw2A8sLMR9d79DKyxvFuvgSCX",
  "key22": "2CG3assExdRwR9E5uZYdW9rnjLzAWWzQTBXvcXXjfSAiadjLKNjemrVSHvEyuXnjcXas5dDQ1zV1Ae1Woehi4XM9",
  "key23": "4iyjRggYExKQPwD2tDYr7ynqaBoRZZEmorYj9zXmzxgu3pymtjxpdFqy75qFV4xRR13wUPkuRRK51yepCUZNJQeU",
  "key24": "5RkjnEMjzRXd6umkzzALSnVyMycXaFuHJJF7G1ctSMfip6ora4YzgW4H4jj47dm979RCujshpjULx1mVnrvtpPmz"
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
