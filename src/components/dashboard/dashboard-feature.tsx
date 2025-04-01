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
    "5cbSCn5BxqQaxGLunzKm4oS1cKAXDXo467eRsmyDpbHBNMKrG1gPtKpRquQ859n35jszwA4iFqHBPHG4snCXsfuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPGgXfJWkvcKqT4XwXq4EhzAW9g7a7RxzSS5CgtQFhKnnHporBN5RiCVCmJwmKxwRZ6ezwXUKu2bqETf5SCKVrd",
  "key1": "tJijKTaYWAdQLumq4xNQ2FhtzFKS6HYfzbQKAXkmdJdguitEnXvaWFvvtbxMLVF9qG6AEG1brN8CpTFY6JdYopU",
  "key2": "5fc6NYkXTnUiuTxYSmGGfRvDq7cbhwSzrkCJg8B4ipN8PpH8peYhDhP3xZemgyEukh2e4ACQhjj7WHrUjiDk1mRM",
  "key3": "4Lr7W7sanAtovJuV9jybXN1QuB2A91MLbaKUdaa2YrC4X1UvkR7peY8tj2qr4jUq5VULWkwakK3XJwV64wjBCvw2",
  "key4": "2Nmuj14fWMDggnP7ai9gYHguzuWgagTkoePt6MU2gzn5Vdkin4u5MyvDSG1QoGsb6nzZ2Gt6L2Kp9P53biJMooEa",
  "key5": "64m6WMzvvKEe3kV2WDLonBJ4j6mQyXWDrZ1qVZtY3XBHFK7TEJuf5m4wVdz9ebVmsYw4y2R4UeYyRVrjMKAW1n8N",
  "key6": "4fYJHdUBtdjHEt8vQzBu4kdBcTWS89cNCCgfZ96rWk4TnJvhCA9skFB961D4BCyRF7BHf2outQGZ3SMersN3EMQ8",
  "key7": "5pqzYeyAsmCd7QP5FdVHJn29xShBLJhYU9aSZKi93Y4GT8jHUAYVLaCcbNWRKbWgpvSndkoWGwudsvg7w1n4i47",
  "key8": "2C11CXoMETtrMwWHyqXnxJiNN3ymfcNUrTsvpNoMFSG22uT5eQo6Lz47BRp21Xb9a6LWDtLqY1FLN3vfnx46aPcw",
  "key9": "25TLqDmyFgSd4cTvKf9dAp5anszToVieW5vVWgRouCR2THb8Wf98TcPWPuKuNTgWNpHBC94N16KXG9CqQCVHWHD5",
  "key10": "44K2ojjky1bBMVXTBBkMMyixh2ncbuJwRn9AwRV4QsLx1G7BgYCkHgPsx9qYaa8djUoT6WQAst5msmQXjnhoXXHA",
  "key11": "5UtL2vbeVm29EJNqNbNHH98Tp8uao4enUpZwDMDicNGLKXPcbo2Mjf1PTSi9mHptbexgvN95KLAoeBShxGNwNPeq",
  "key12": "4xSec7fs1Tv8pHsYXAQnxtG36RZmWfcLX3JMCbVxxDLoGi4iCEWBJ4WXV6HexL8KEojMKbpdErQCs45JHVmKByKL",
  "key13": "4wJhCKfRUKPEb33PymyuykidjXQ9jFvUAZr1hbwLeTcMYvRCdFZKu2zVo9Ew3TfzFwpSDRBD6XYTXXXbN86xyE4C",
  "key14": "3Fmhtn81Ky1ynxSjbwJdSAWfJVsoHLK2kfPP5dcp43eUViE2F1bop1eRqvbjTDA8gRbuTrvzTRC6RV7ZxUjxdpf",
  "key15": "4WQKxAvna374mucRoQkpjn7Tf2oorjp7tpoNmJqu1JpwPhwMaf6j35iemuB1A8zpWj75Paphv3GzJ4TaP1tJh6rs",
  "key16": "mECK4kTFaC7bGPJatW37vehLzStqjTmsVbSfYyJsup4fYvqPJ4wb14cg417vh4xDA7ULqSpaJRz19AGVnJeqa4M",
  "key17": "3vaLm64N9udK5J5bpFr13VRBV5vVM9v4AML2mjRaM3swCLTgnSX77xEWuHjZiVXLuc9JpBp6mCw8qq5ZJNbHzB1X",
  "key18": "5hL5vDQpHqx1sXDPKWiu7jRaQa7jPixx6hcuvD6qj23aauuFiL3F974CxPRCXpc7FvxhA7AEbRpmnWZh8RTuCN2G",
  "key19": "fFTdhHt9b9M17amZYLMADYjPSh132bj963tsjJ5qjFEdNZuZRFHqqZmrfL5dWBMzbtwSBjN9mTpLJUywZ317GN4",
  "key20": "4ZfhhyMUmbvMxmJ9bf2pNQAupkF6RMbzHdYKj2W5t1sTeeRGH5hhk6dKyHSUZqvdBF22UK3DpWix5HhjzMe2fpJ9",
  "key21": "3M63yKzdRfNy1vxADaEkb2WEaNVCGMq4WPPbptToj4pv8QHeMdCLuSc973poKWzYByGuQTK828jRnsHUVSUFMwxX",
  "key22": "3pNWT4Kb75ossxo6BT8vPSe719ZDqmqT3Do4E4EqPqAvbuNpVwN59vtM4ANhhhdTxNKdwe49dFWxVt2FHpKDCwcQ",
  "key23": "3517FzrKAV98RAAysssz2x2v7ZNLgqaV8Zguur1UarGcpsBs8DozNTBUdKHFGfqjdJ7WjXk13DWJhbpeTRJ2n7Uk",
  "key24": "5T7gQeUWAd3pA1XP8pbE1WyZm9us5P4jdfptxg9u2Cq4h6PqzatkoywRhqbxcoSQj7SE3sWP3KnuTxtwNgNJQBzc",
  "key25": "EpP6sYpw28RSQm9mpbWcQvc56HVVN1ajM1owwcitW53PQ3Rh8diRy5FJeBbDL2Ta6eazeWjGQEaBga5U3yTvF1r",
  "key26": "Lo7xfo1jAmqGXN6pNzx6kEzLoZ4YPkH3ppCQZPyuLE1CPjvbaGBJdauGxaMAVEPMnxXNKQhCJ1QvsCdcXHooUjF",
  "key27": "2qjRS2u6nr7YKsfw3zJfPKLWp5A4g8xWwciKZYEK2VTvDVeiBvgCRyycWyk6nMdy4yKhmUUHn6oRTdXdkQhM5WiJ",
  "key28": "BXP6U34yeJNLD6wFnveqaGmEW1Ytw6zsBt9rKYukiJ7UPYSMtrJRm1UGR4CxWDuPmS2uhxPCrvi9rUsxY4JCBfE",
  "key29": "4SFtYcHjjvR32N79tkjbRdgvriguVtwVBVCajrN5eEcFr8c5i1TYEq4ZDpMb1bFHYackMUY4VkRnNCB4QAgqoEAm",
  "key30": "38heXbMr3TkGp7MmLwy7Tb6pN3skyxBoYoQLmQ5qQvfD2EPafTNSxzBrjbFQDwqoVbyN2Sfv6jb2LYZG3eFp5gSU",
  "key31": "2bnpvjsuYqnTjDzBrVQbicFt6GvtTUGbgfYMzrCQX1WobPSgm4hTFJTdJdJ6fxV77ACTavZXp6JTg1X7tVCYktX3"
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
