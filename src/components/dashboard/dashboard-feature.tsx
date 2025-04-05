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
    "z1S95Ys9JEyr4dcgNbZDLQJhQzVMXdz7epLxTGXFpR54QLKWf1VA31wgcXy4ELeSVRbSvY871VEjfC65wHGqCj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHQK2QUj52DU7Uw7SjfZXPefiiTCSS3i8nWw56n73n73d5ShsuWMFBnuZEATtu9h5eEnRLkEjf73KQm4XDAavKi",
  "key1": "EWji8Y4LLVmkb2r7wEuw8YB6wrSHUFvMrSFMQ4opR6MbipfPueth5CUnvnPf2B3V2rubuhbeiKqcQxUQ4ExLfv6",
  "key2": "w87gzMAd2WtaL3ZL7Sm6ExJUfqV2cyARa5RiV5SF36GCq58ZuMUPMkVXyDHSrX22GQBtvwwDWWdqKDiy93SDNQB",
  "key3": "5uJoQX75gUzQoAHxiFT3yHnfEhF7rzeEMXAVeFPSkTXAWpyKfuzWUhrbAguBTrPFdatv8SvHgehGJKGBsQHrPUZ3",
  "key4": "4a1RB9NRVaWmCWQVSig5kAkK6odP3qqKKwktdMnqLScjAyimxSNASsFQLbCCf2N8bZhshwo8dXVVbXe7DdYScmc8",
  "key5": "45Hg39hrdFCceBAsWjDPfYNBHqmoFUmCUFTDdDmjfoyizQYNR1EqtECGSscf9i1mVr5USd671i7Ymngih21eCAXh",
  "key6": "4JBY9dqfeC4DziTafFDZGWqSNWvmghw194QTMtreoGVjCrZouLrEHH7Ljo7TVDoM67Ge5jA21s3JxH39PtPgUJ52",
  "key7": "4L5x6rPxFNER7hQD9dM6Sd13aVMyxUjLeqYQqGqdQRxv4tGASA6a6mNDxaS4tw9tsSEByCDbe77SMyJi1yUzkh1w",
  "key8": "4WysPPo5DveTsRhAwoL6vssqFzTeh6wP7SKHrwapbCJbNB46Nj2Kjn3tULdsHAbpYn8r26fSd2uAG4Mr2CGbiibd",
  "key9": "3wJSDXiexXNiu6ZY3rMLyZnixkm6eNtv2LTT3VYvJ8TKXB8io2Cwt1g1vgjeAVTHfg1LwrbTmU42D3RwwwMBANJw",
  "key10": "3Xh5oVDyqjnMxecMRfPkeJAfn6LbVp6GVG1Tj7Q2124qebSLn2SqQT1uDzL6PfXYRQ7fmk837c2irQPwn2D2gnq9",
  "key11": "2gV3QxR4KMjouqyhhgyECQK7QWRkvVuPMeVN4Fe6BqTgauNPcQ33mrxbmFBUU1S4awYc17NVDQQ35ZmBVLrWmWqF",
  "key12": "3oB25VwLq5hqHYeNifQZejZ9ny8efEKSjfZxJ4rkeq95BD6VY4gbYaQyPywLcUnVa2GhF5e9dpXtKwdZ1ehHTV5a",
  "key13": "3MLRp5A4rcqd6mqhrwfUWR8z2Zf4fakgr5xLHVmiXd5NKneeQkdtZ91mL6NTHAgUUkhjWon2hkELHsSjUUzNNDjb",
  "key14": "jZehiMnxawkP38aLy8VXtmbnzDj8cY1VPJs4m9Cp3TGntAyr4ZmCjznPJc9DZULug7EnTJhc6hjsCyNvNacAPSY",
  "key15": "2NduSniLHgXRZ8k1cetpjiYUMwu56zVX1hH1445UJRsUiw42UJyoCwcLM87ZMWXKbmDv29XAQk4D8s3feLbCYVQE",
  "key16": "3hAtnckiXJSjptwmoqajRYYrJ1RFM8JMtZhbee5eHVzw8VHxKaX4wWTL8S5dEiGZ6y8k6ZW8QSdMeHdJWGgB6cjv",
  "key17": "2JwxQjf3HEU6Z76GmdZatw7T4pQGZx5JCJbF1tn8yqp6guLMyLeqiDfESYKu52gNyYpqbDBLGTjQ8fEr5gz8Fs8e",
  "key18": "4RE4fRgf3FcyjRkm3zVvUWomnFwA6uDqM7XdnJawWavMwSu8p37pobMpcMqhBrsd6Uxpj1snse2dX5rnyaxJMTqr",
  "key19": "3TuH1miHEB7ss1FnzCXN37eQvFZjdfL1TLdemh2LhaJHNdDxfCz2WVhctdLg9nqGEiETmGkr3z2N2dSMpfN7SDgj",
  "key20": "3EAG78Aoo4mEQZ94Mh1SKYyVvhEGEsUYYmTJtaW8PJJpAg3P8rK9XVRnepKr8Eh34ecxKaneZc7BCB94TnoyCmVF",
  "key21": "3KMrWHFddWX8ThVzAHykkTR7qCAa7ytLTkzqMX37PNbxfz2mkuA79U71z6TWTALoagtxe7CxV3LQHY2WokBTmeV3",
  "key22": "4HDXiyKygDEfzKwtHugeFxorwKXKgZVzREkvgy9yLw2uVzbZpYiE6g7krt8Ck75yeNfiu1BWZbfMh317ahMJZKhn",
  "key23": "3s9VCNSuTJb36vAJS5CPxaa1pQBJ6xiN3dnCQABzKmeXznsKjH2VonVkDf9DLMPRp8r8m5pcMjbUk1KXVMiJpeQ9",
  "key24": "57a9vd2mGYdXWpLePuV996i4dpn7ySDKEo6oGmZyKxcHTkb8vL8myjwQUxyxYoszmuVobkBtuWAdHyDAhrZEBhVu",
  "key25": "4S7AsEvf9zEDgDTKf6thKx2ihxEgAxg3nKXuhFKpBRDeBezdmbdvzN7wWHvYtXbPMqPfFCU77bNekGX8DHbzhNJ7",
  "key26": "RrpBPaUJEyMxQ2dVETxNst3vQmco63ScaQe3WWd4qVCusQM5jzpAnDLXP5KNY6qoAnSYXRpoca8E5nVoT2wuk7L",
  "key27": "2oDDK9K7CMbBqXxCWC6Ki47PFrTNu3X4pVc88RoeiaTAXNr7mMx59xTgUhwpsLeLLsngBWvWTSKaBgAyJtEKJtd8"
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
