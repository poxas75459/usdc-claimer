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
    "mLkSZSdKvN4wo8qUB3hEhGiSEQJaXRdeevLWzW25nDPwe8RVBGSxxfEJvrh1AHdxaWT65GHdXArkmc7M5hgwWyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQC6WSkDWSMfgSEbfrWpmFhBcqNvHD3owJMe2Z53nKrfzz9E2AnJfZWEtRbxGzB6j4PYJEs5g1YBXkC1TQRL7ni",
  "key1": "3WSXvFDjtHEUbjFQX3mBCShPDdmaXQgeaLhSsM2ZzhYcBQX2ecrZMFHxgh7StkhLC7g2wX82k79RctkuUKsP297N",
  "key2": "4ZF2PMKrPscRAuHDB2VyjxCWHsRPpwrgwubQRjg3dipib1eWxeWxGHtzfebqguHxfSdpcCCKymwgY9WyndKG8smw",
  "key3": "kBJKwsW2o7tyZ9N7oGpAS71PND9hEZw3dNs7U9XVyjSAo9bSRiP29TknYnEzHYZswZVdcofNVjPSoKVHPPRiPBN",
  "key4": "24mMZRKAxUvUgLkUwDwkqhz2VBna2HUsYHwqrqgKmzWnKrDsEhLASbWivBZVPDZ5mFnRNQwDsF56a7Qn5X3WGGvX",
  "key5": "3tfKheXoS5TwaaQWmSQXu7J8vBMBj7FiGQzrQkHrYsje97kANjFUyrmq6sqnncxQHnyu7z6qfLQcyuPiUAjukQD5",
  "key6": "88AdJvY9JeuHaqE9Bdci2VUZcaBnVhHJFmykbohzbX1Xeyekx8Lsu3xYWE4w76HgU34n5v8aCUUPDo6by3ifxYT",
  "key7": "AL22vnVkTDm8hoLAAgJsvKojGtwRdevWzgFd5ZC3jw5RJBUDS4yTRe5nYH1K6ccQM4Qi2CA8GYfav5ngaANnHzo",
  "key8": "5FYXPmPJexk7ffuy4q3HNMEVwoaP5eNoHngdnng9n3LUPQ5SZBKGCbhSqi9GERDXKvz5iEG1Y89c6tbmsQs1GyEQ",
  "key9": "4rFUihNL8VjuxXTyNALN8TkbxxcAuQTRYyQi4wwhvsN1vuY78ZEaGACg9aKPdbhqcnKKDtjsMTo3ts7XisJpVqhq",
  "key10": "5hNBCtLQCavCL3sUtuXJUBQuZFjxajcMM7D9WuKv1AztH9biTAAgXgNk6kqmHfzzhJDRSpYsXwZYBsGwBAQuE7sX",
  "key11": "2t6WsHk7qSBrQNArcBfAspWaeyN9oCKhevgPAmAwwyiqt6UsmgJQweq6ATWq9tf7vK3WGVpSQuJsZtLLB2qkuC91",
  "key12": "TASyopuccu7ZbBmhJzKiRZNWDA6mMHpcyJ5AmRnDENAUy22AmByxP3B9PoJhTH1cJ3gPVPrdVHX8EMECAfyAFwP",
  "key13": "5N8sQ5rx4G2wQo1u2JNAuHXT24Hj5SJqHzcAscreQm1yy9pC5rwTgNLsHkzKLLT4b1PdWEMwiVHJGATeLryC17Lv",
  "key14": "2ZKtaSDZmGTW7wdogjFy8KVqd9ruiJpLfweMTTPvVoQ4beWxqEnyGWicq5uuZA6eWnpUJ1FvDUoURN3btczSww5m",
  "key15": "bkuvxNvXHPn37Knhz7k2RpqcfLKtgbCXufs49PsxaE9t9o6yvAZbdur7EdBBj6EgGnhkUrtL6XWUnQH6BmziN6s",
  "key16": "5AbtSPqnLrAMiPvz1jRQYUgGwBPA7YmyFfUQATCJeg873imvbfHndFCtNMUd9bhSwcKFXpYnbeLS7x2Sd7rnpV4o",
  "key17": "5XUhNx76egryTxicdpriDViyYDUbyAMvMHtvY88kc7jjmHNgqmVyx9T96izvrCJZJdiiA3j7Zhc6WWuQuz59uqkp",
  "key18": "4YvnJDx1XobVMKVBhY5PFtz3L3FVnnjUCySnNVuxaGGqhTKHJXR2HgZMpRpqdqkzQja4f76Lvi8Fb7ncmFMKhvxs",
  "key19": "5ScWb5GGxknK5mmsunjaNJUTTVaqyeMsG5qbxvj9N2kgFRjCzeR2VU25o5ui32Fc8qFMaLfot2BvBQvZJDpRhiR4",
  "key20": "491NW66FjWgPSm6CfXRxfdw52MCMLADMwWbhpHBi4PMFMrQX2jf7sjSh4xarcEk7ZhqBTMwKJz1kYJ2tK4pCpEW3",
  "key21": "3mJ12rVxbi5VJphkMLdnszH7sB2LHSLXqLmcU3qjbdaa8keAQppdifqYZKev8TseEMMBYtSxKvHLGZ6kwc9pRv7y",
  "key22": "41xQAfqVyQP1krNLSEaVu7nP4B1vWvC7TnPQVPV5wn9kJ5MnQppgPZxxCzhQFyuWrJfvZqN7w2Dgq8k3oemNzJus",
  "key23": "4fbawGDW2FRCRj2NQ3i9nEhRMeAqqgtGiWBVQoUgxUz8cb24y4RcPxfFRCUJuGzXYB9L6SPyuXV4WWXZw2HdbxDE",
  "key24": "XKwwUMPJGV9zEWsxep7basQTCkPLjTJcLpZEDygLebg89Dy94mvGghk8eSV1Y1JpGY3AFc6r4NthHo5vesKhiQc",
  "key25": "hpHycjrzzGkBEAVqYuPWnyH81uXM54CQ9H2TJXsEtcq8UTvkxoxwLsqcEtyfjnKtBah6GUTvfzwWKFEK3WTDEDJ"
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
