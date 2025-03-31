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
    "5XcSEitnqr9F2bXPmcfXPHRiwk25K9meWFJRFVVetA5454EmN8ZCCoDJ1qByoZCLPqhTGc46EdSDRu552mcrwTq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpVNjunvcfeL1cpAdPT1ySgb4WgnurfBgUzhdFriiL4sED8jWiS8XphWqbdhfpahayo2nS91hTy1S3CepejUBi9",
  "key1": "41dQwpHb33FartT28wwiWUWSdodRhWpAYpBuShKaE8651pSsSoFoZVarWEp7o48LxmWfeZxB8MXys23cPD6URokH",
  "key2": "KDdSP86KcjG1m1KFi4rC1DwXk1N7Afyjom29rAPB6xkv8AqhpAFQCsFizCc4chYu1WpJ2iHpF45fSbkaZVPx6LW",
  "key3": "3EnUR5vDz2Gbww7uPb1hQ1vV9UeZNJGmajN2oGwE5xWVbjNVHgYsvt2Dngt3CKFjzkUsAD68cnQzGtS6HQ7eYY5J",
  "key4": "5yL7RKxNTvDKDaB4UPPZu4RMijZGPrzZxSX7izo6hn7X8mYG3GQHPbn3bPuYKJRbedJpcuS9b4mZqKBZbsh8feXb",
  "key5": "36Dj1KHQAmuMGznuvj6KifuvmtcP4T6A98qiQcUUQ6DvdXSYMx2TbZtuNEv22KUEDqxKFS1zknqoEPPbY3LZZ22X",
  "key6": "66fMWdrBqMeg9nK5AW2gr1DEuBuRnG71ToFPoCCdLbtPdztf2Zta6FecYKTPNtFa9ZyE9iNWnyGb2HjJy8EbSFzh",
  "key7": "1PPvGeEPZhH5x16iqhMQvJDKtsmKFJHvMdBnJSG1wdCbwnuc4HEcfCmbqceerrFZ2QyMSTUeWLjcqpSrRQg1WPc",
  "key8": "m25Y4CRL5Gw9Nc2KYvh3tYPqx8cRE1DoBUyjcJR5gF8Pvdj1yZe9jCuGyqbUVARLpjwp5uZMWKAv4hs86o4511f",
  "key9": "5L8Mt71MvWqeWeePbjqWjdSZncQexrB1xgpjk5VKDJWQjsrAr5VQSxmz8PP1UWhKqyKUZBAf1zVcK6qcRUX4smid",
  "key10": "aGfiDbSug9d8oNAyCdP9qYDY7K6mHjBpmWCzdsDFMcwnxe15djQBjd9RVDDB9Fz6xBYyc1Ur6bLPWvV7ehofnf4",
  "key11": "3Dtb7vFL5qUSbAUeo9oof7WxCsDSHFrWGKXFqcrS78CZuSt7GaRbv4YsZuZT9Baivg9ZpUFzZJfHjks8v1GWvgkc",
  "key12": "25Zwa5KF7yjF7d9Ynw3YrNHAmmynub8sPA8hfS52rGRyYfuKCfuDv677dNBz1MbGFXApYek3VtiwPrirK4sizvPd",
  "key13": "57aEbs8mt4bhcG7qSAfui1YeR9mYCMvnDVcfzmtPV9EVKfvKTJ6o3fkJ3fGBitTQhCMq8cWQrxHjaFFUUUDv82Y2",
  "key14": "544hFosmUFJ1zbDgwDziU6aZqkFBYHpWdkj5ci4FPBAZjS4BmjxjsQQS66f9he9EtSi88WdyweEY4m9HRnBa3bNa",
  "key15": "4X2Qnqorbb55iH4K3Fyf9y9QKRQ7FRDGVZWRXTTKWUPRTmncgUcbd4bQUZRBiSmqrKxXq2KSLBCc8UeDnk1AMHTC",
  "key16": "2G4oDBYribjz8eFCswwMQPFDe9T6tpL3PR1hDU4Btubb7P2vjRmzWsKLPBdw3dtxzUWhg4dtVKyoypVPJYzzVy9J",
  "key17": "2dZGErh7Nvixxt6yRVXz3mCkhqzSwpmomVDnrfezzv8GUSkrrSqJJiWxrtPqZjPMgoZYFLeQVtvc8MxfjgsgyzYx",
  "key18": "5XqWzNJBYqZD1Bh8Npu6WC5GoWWrQvt7ix1EgrgQBdMY1TfJ7G1TpdiRG5buxZXNaYaDPDGXCDQsQ7DH1CYfZMu3",
  "key19": "2jQR4JwS5cmKBCjuRHEbyGkYMSt7X7UdDMyNGyuXikzfEPfhDG5DwuN3XhZk4wXypd1Si7tsqirGg6v6yq7BJf4d",
  "key20": "5PC77DkAD3ZD4DB57GNKoEeEiWkFYt5MGCv4WNrYWbbogLhhV12ur7RY7Rt374V7gSBwHJ4EA7kNZYXkR4VNfQB8",
  "key21": "5sFRBAMqBzSoX5aT2baoKEDEyGYu8UAqpAghy78Xza9Df3H8fP7oPRbAC2BYymrJFhjNd7PHKesUo7VrJscZt9rB",
  "key22": "2iKKtPu2KpDMLYEoKo5kNZC3H4kTbKjRKeqy3JjpKUwfsNvrNHRm3sPRVajRohNPhpCHvGmEbRRVB3gAWRMpwnbm",
  "key23": "5SXNMHyWQgYJZzY54c3WzYds5Ge5qZaFRkDNMmQFXH3gsdr2PhdMjrmSja2ZVU2xK4AcX634jvLWDPrfAUVSvzhL",
  "key24": "2AJVKgsSv7c8HQYuSNmefEfTK4odHkEotEufmg9HjEgyHsF7A6Up2bFPismn8aaKYg8JrvQpKapKqqJrnzifcbGM",
  "key25": "UaQNmMEwQw1VY69YAY53aYfAsHw5gQ8w4wJRT4E4iYZcb7481xgEaY8XmyncWkjiQffXkf8BTrwsMKQ1J5YS33K",
  "key26": "2KK5MadYMycAHma3C4Br8PijGmHm39dCbUB3PTbRjrVVzE53xN9SkWdvCSZ77xquujnVsZ15gB2hdRAK9yUSZH2w",
  "key27": "26M4fTHFaUDxqDFfHyWotaUoWSnfvZYMM1KxH5v3Q9LdPWusD3eBPQeQ6P85spB2trPAdSgcT2M4zFa3je922dj9"
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
