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
    "3MXpqGWEsnQjrdPKqLcezBaUniBpZEHyzE3aSUXETyQAPzgd7Wn9sdRsngqfA9qJuuWuj1ohx6fuAxJw5iDiJJRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyD9fBdKCDr21Fuw1VYh5ts8cV5iUP7NmF5gEWkwX6N6AuUok4HsdPFUiBn31SF81khV2qeomHKhVxsPHEsvJ4L",
  "key1": "2hARqb4kUwasWAE3KhvkwT1kNX5r9mGSo97A1LAYjts7nZVo1tf73WtkJkEu7WqBMTknLp8Xyhm4YzpoUNcMwzEz",
  "key2": "YDpU2a6EkgjkRvy3jUkDbBXH8Kky53A9bjTU3UBkJ2MVrF3imC9uUHiCh3adyjFtGaKXz7iwYB8BrxH5QbMC7QS",
  "key3": "47ub93U2xSizPD9rgXSG3hvrEyYBK4KyU5bwaj25yUikDqRCCUeXAwJtiQ2AYJFJY9xg5znRGG82jAcjbLXfXYSN",
  "key4": "3iZE1vfaMZ3fJMWRXgKkjgbxdBW7JqxEfWKxA7a1n2oeziTVtuK6BKwRRhNMwAW166VhFH6uGV3usnWNaRqMKQRD",
  "key5": "5uXZ38JzKXUugFimQELFHCHy4yshzxamEp9ZpEPCJZnnJpF38GT78i15h94gHqqbSKzBXBg5XC1MBviP5Bw6t3En",
  "key6": "3ttMtPuqBGiireBMm9Tfgmb3NTYqWBjLZHmkWmrDXUKwaQXSAAWGNE1VvjTCjibTskZ6eQ9h4DvHEiVmTvrhv3hT",
  "key7": "hC5nZYSUjC2TXtnZQ5UispekyPMPz6g3NJ11HviFaVXTLLxATFBLbS1vmWo9FxFHQ2Vg3a9vLo3y6YefetrF63b",
  "key8": "3KM6ZfKkQisFM2W53EHfQCqbLDKiZYUBVW32zDxvjNGu8UDtNirAPfj9x8J9jAX2V37MR4rxmn3HfW9mWgXEfVTr",
  "key9": "4J2R3XqLP6FKDff7tDzLzZgv3Y7k9NfUSBnaWZxYeEQDV2wU9N6LXd3j6o6E5WD7RRpuqBDB8asShgDui3Y17CE7",
  "key10": "4z5hhR18S9d8VE9ctKZ9ccsDAdAka7gKGVmbxUn42X2ydsVPgFWvgvVqSZmwCQQQeJDTr3Gnz91htkxQ4rUsV2p2",
  "key11": "2tts5xLyfiarU4ZqgHwRL6CU1GkiidMBn76FPSmFpsMASy2CJQNcTg5fyC6bqEL6FP9XxwL1Sd2bRYg6WwJLQjoE",
  "key12": "4G5R5tR9b1UjtFToxSFuom6mwtm61w5QkGFdRQRMYfUfJw1PoGPBHvGc8R87QvFzcCPXjyuh3a5WmaftLFBJ26qe",
  "key13": "3Snbz2D8PZPsP6rm8BcSWQJJRZnWFsFEK9RAPy7r38fRdBCQV6RnYQCy1vQBWP3AeY945cpfm5VBXgF8oUAjjCz5",
  "key14": "3Z2EZ954vXied46kSfnDEfJvnhGa2pg4pvPF3DDW2yp9hL2YK6EoTD5fm54hyLakGcNBp9anb2yhkRhywcz1GXn9",
  "key15": "4Y21vs9XmcTUZ4i15rEMGvxczxbzR6y2jim6AXW7VNmQSCzvRQpay7QbcUS6krTjCvDW88HaVMRgBoahhR4mHkfc",
  "key16": "FRrNhc148aTr2HiX8H8dCJQtcegtdNNBpZZMm9UmZqQVGAEt5hDNew2FtBXHfSPCuYTGuu4SLxzr2LHfo1eqz5n",
  "key17": "5Z4yXZXYNkqUTG1ymDLJLzBLmknWBQmcbJdbCe7ABbnfv2nugPjQUNV769aEjMvuV5RChq89xAELmHhNcDEo5G2S",
  "key18": "VzWN81TcfvqJG2Rd8djcBX58CR6ETvpVpRK6SSAbtJLVaHHXrTX2x8T9VCTo5DnjLs6veSJeCKi3Et2zCDuEQHC",
  "key19": "48bn2AT6cSMjvL9WqYGKro8txfkGMBCismhy6eb2M3JHYSm1De8KLLkub1txfCenh4mQ14vDwsArs7ZJxDk6nb6",
  "key20": "5prRA7rKqaqY8Xrvs69as66vAxUX65Tqh8LobkK49zFuVX63UiuscijeJngoEU7CDdhrLchEqvGfVH3mLHkyZPfM",
  "key21": "3ZgDR7gYNLi9VaqQ2jPMMQjCau9icVzJTEkC3SQ84B8ztK8ADvnZFAdsSzi6dJx5LmUcGfZWeXQfHyNMEivycnZo",
  "key22": "KGVjC1bjJnDftJEMSugX72LYjwuEdNudrjjZmUeXM8fE3dqJbsF91GGPYva3dRpxzh95z5LgNzhPgGCVHWNeSbD",
  "key23": "4gjuvTtuuPheuMo3zJdGWqwjNedYEmCuYMoHtybBivXHDJ61HMSTh5tHwGJQzWw44pwDViZXRFMLGUUwsjMFe9z9",
  "key24": "3JnW4tPWsWG6cfzXojxJQKGJCa3sWzFMZiRvecqeCVV5kcoJJDYQgW2sP63M9JZooDrFqw3Q5nDAkfhDkXcjjYHd",
  "key25": "oWBecqXNfuDpD81wuTaLjUtii5vsJPsFQ3EWDXoKXXEKipLkWFQxkd2H3if1i4DN7hLrkqBbnPVwtjvUjAr73xE",
  "key26": "A71jKR7LgUxoAe2KF3EQPpQQFbmxEgrRYYvTHHXbnU5YQfnoMBJuh1T5TtqkAp3ML15YjDXr8NyNNcoeGctquwh",
  "key27": "47oJAkMv1EFQJBsmzFPFdtHhkJbE2q3Kav2xrx3fmXTmAFbEbLPGtugsqHkgRnAqUvwMwGvtzfkoo728YFUszuV6",
  "key28": "ajcaxrnQ6YvDSp8eBTEW2HXupsrct6HUtDhBosZTUFFtMRc9gFMn8CBJ6STT4bXsZmezFV4CN9qsYHveppwZn4B",
  "key29": "2pqbkrkmt3bWhVNGAoAC92tszrzFkwvPavxx5hjtqWjd8cN5LH1HLFhHjurfeYoca8koyq4SLTXDXCq5qkHYviYQ",
  "key30": "5HWkXkvAdcDUJWtvcywxH4moCDpfYbU9P54Q584sk95QgMEk32QmSBbf7W3PpxtZ9E8jYZmQXZ7cvG5ECc4YqRdr",
  "key31": "3L6J3EkrBzECDr7hNFAPj5JdgFj9WDygh6cjU9vxBvYmGzKzgm2Ai2mu1fpPhjWfs598Uvjf6LpEUbt9TzobVUJZ",
  "key32": "qtAVcAp8HDX6RTfX4riK3KtVEpSAAoc56aQ2gLDht9qdWVMGmRNfGKVC3rqxWeNVtk4qr8rCgQQwvbDhV1XhzZy",
  "key33": "4FGBo4ALGxq1juxikRjGe8YJ7m6pA6sGErs56RvfwvWEhyMAsU4LEmku2PjNVFccFWT5GjS7AtPrmxRs1m5Vqwbo"
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
