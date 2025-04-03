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
    "3oX4gJmZFGpcN6gvgdcveYtnqhjMaquSpDqJ2XypkrGEbuwNwWYw6NBNSRcSra1GtZqc3uzd5iA1EjZrZn5BGodp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZptR3wyUhWEt3RqPdGWRg1mLqKKsVc65CWybwpZrFi4p5hmKR6AzWXYxsiyiWfHoi1fiKDKBftD7DbkvMK2BvWw",
  "key1": "3UmW2rUprZuwEPRfNUZ4UKpMhnoy359VX5iQbysY5oQVmHRfYGNRMiXZj1PnNPdsAvRhomtvPrUqHwaJoKbZEYNe",
  "key2": "3tuDVnV1WUFnLMrTRbQmqwZ27ooTH3yHFScuEHyAqC74Za8CVk8goHZvQ15Yefg9zzFtLfoAdwfhKnWFkbs1L9Pb",
  "key3": "3RHyE1tfdLrR4sZtZTyxnh8GC6mtw84NXjM5VWdTAxMapynLPsbQdrEfN2PwNNjNqNgfKVjzfbxGZ8TqWxiXMjY3",
  "key4": "3QETAthEKWJt8d8ca2LYL8MeuRcZWG3iQWnUrDA8kpGEbbWcmFpHcZCvhzw779KazJjXKE4o9X6UQtGrL7RntNxD",
  "key5": "5Y7pbdDfXbjqDvAsah31WaFV4smwii9KiF4CdNRym5Ty2TQX1JxX9LHbuSttoWNmWZtVrvaENrcoXbTh4R57b5AT",
  "key6": "2nRbpGRrjGVPLrCaKuvH7jPzqErUoae5L1QWBDBABFGz2ASUj2RQ2wJSFrosB92KKsF1jDYFb9PrvoPqkDUFSjy",
  "key7": "5wSaAw756AqgL3nGDDbxiDx7CgaikepcL2hh6fJcyXjjrb2zhiLXpFWRACpeQstYoFHg5mF3hproJvp2T4bH9J1N",
  "key8": "xMszaFdFMQM1HZtMKQknB6TsSM92R6QHG9DrCDQGNbHMqZyJ7wbktsdLAY3ynX9pgB5erWyVB8m6EqaHW5CEQsq",
  "key9": "3rCnyJ1AcAXkAn3tyNXvdU4Ua3G4CuUz7faj512ijwjdpiiKwPSsADGiAfzMHdJtPz1Yj6N7pxfWLWn1RcbWdPT",
  "key10": "4wVEuXcEGeGdM93HiWHNJL86ronQQQeu8BVBjDrgLKk7eTVUFnubXmorqR6G6RQfNznZPAaUFJpfzVtvT2tcsRSu",
  "key11": "25GtqPfZRsidsQanep7MhGUGDvRudAHLVyLqJgc89h3UWw49Z8w84XTazpb4uoMYpqyUR72vKP4ABTb5e88p1i2X",
  "key12": "2gRtrzvGvEXA5wtuYNfSF7HvCDFppeAeBUofZabW3QRTyNRovmqLn5wUs4JQR6PDZKGYhmPoNnLjMKY8GSQyDNaR",
  "key13": "4WMVh23qnhWkDvv2BhYWgSW6REWxt7mus8DCkcDB6q8CBLBswMKSCeJwt1Zomb1ZyBxZcqr7fCWNd9TT6eYPK8LN",
  "key14": "4CBRrRGmkmBPe8vjE2sJ9AHbEKs36b26ZKo2VsA8Z5rkrwf7CxiLjZV6cy3SLvNtGu2DXbgFhmLbMDpD8RMmeR4v",
  "key15": "i5Tki19gM6JezBd2nnqb7yBs4KX9TD5iAram6R9Qe7rHnK7RGH74yv9Z8HggfDFBRci8ygh79tcntgfeHNvFyjk",
  "key16": "5aspgwwcyJNqNGxBhsPcaAM6CWXhWXWN1tpyyHBqovuRuvhvDsKQQmZ3xqyQjLnc7kQhYoZfYUWBK5XDCWRzURFf",
  "key17": "VGgax3RGddN9tNkSc8s3Ww37th1BeuENdwLCH7ZFML9oZcHp7Pj9Wmojgncz3aS3iLVoagqL7528ZxtD1gcoDnk",
  "key18": "2BxRbgc8AFHifWHGTMx3ki2gfUEQz4inJonCpEcA8hQA7fKR3mseMhCmNY3pYekp86cNCTaeYqBgsqxW36ZenmqF",
  "key19": "3UAdnoktXSxBxkHozaE83PRbiKTyKBLoNhfMXFPHpmkV5RLD8sj3Myv1hHXe8VdfD9QSgj7kJVqPYffgQE6q1xZr",
  "key20": "3DauSdMqvPmkz2tuUWRb9Q2eQ2TgNpV9UzN84Ejb2rXWUhdGzoSfFN6mMSHqiNWCj18FW1iiPSrpwqjeBRxwisCx",
  "key21": "5Y2HW4UYrqxyDfqt3rT4f3iGiNbaVLqvg5GGaAWMjeRjziDB25AwkHJa8yQUVUNvF5kivNZX9WunebETgjbMgBxS",
  "key22": "47eiRFyFyJyKTKcJE35Jyfp1WJ3aCnTAjYc4JDkPFwmEyUxZ94Wc433JsX8znJc4TRKSw8w62g2kmCMjActhCtbU",
  "key23": "NVWDAAeWjY8U59dp27yrqQBm1C6oCTjq3W8uRLvkL9Q8rY9rz4od7u3vnwzsxAvjHknTzYmZ89tPBYDgXvD6i6D",
  "key24": "25xvgSa473SxusWy2bvuGmSMdAtvvx9hGfGpMfx7o1bWqJ6z1FaDpbJfzT3icunbmupUSS4zie17df6cYH59CeGk",
  "key25": "24PngZt3tRbJJGxHutgKtvrn2XLkyEdCMVKXpYp4MvH4VumBNWGaix4suJpo16uh3pmzGXHim587VdFJUzq8cB8J",
  "key26": "4eH429RBwxkDVv5MUUnsEaPCL5n4TkcsqVLYx4QTLtACk1g3AA8aiVjUtmFq75ZG1fPqM5ZPZiwTWsWZmWRyqoni",
  "key27": "3to4pHH7gbDjcwfu5hyZ8NbiPv6RL7DTzBzYmpdMLoP77sA7EhAReZVwKNLDyipsqmnL7SVvbrpJy9pnMTzbz3TL"
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
