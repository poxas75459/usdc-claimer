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
    "3tGArSF9JxVy17MhGbtt7njx1jiz8o7sQ54h3aMohtGciK2565YhB5VBbRWyvqMc8wHH5Yim52Apj4aiy4dhh8e1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vWx6arvVf8Z4eBf3SySrF6AxYJ7f5KcmW1EbGEymMf5HYgbz94vQeYC5z7CoNcozs1vt6CjqNjQZ8CSU77p2tKv",
  "key1": "2MPd2gmNBAZHAQYVoAptjoNH8EUMPUfCjyteU9AHfD8FJe14yASqC7sfPWccYae9HMo7qD7SpHW5ZEQcUvPqLiVd",
  "key2": "8nTXPfvJm3m9qjGRd3rrdfHsi4bv4AG1w61NqksjZbm4BHF3NwJuKDhbWHcxjEgQYimNas52cSoZFnEf5Xg6jGL",
  "key3": "3qvffzPDBaC3EKAQqWdSSQk8HH4vtmUE8xcpnSb7sJamBRDErdoVHTxYefpTuLkvv2Wq2h1kW4bd1i5uRhCCa4yW",
  "key4": "4YhK365w5YcYy514oUk3VEX29n35DnDVZNDebiTci2aiSNVHD9wiva76NAsk77s1bVSdr3ySiWmwa9b72KcFu8Ff",
  "key5": "4BwjpxuyQh186J3hzds8J1xJDHHFRekJGMXbRfpLaoQLkBpheh4svTzLgVVHM9G8qxdXXvLbcWEcewsXHb1wbHza",
  "key6": "2gtk64JZVxYKDbb6yTtW9QiDrmJndLffdY4pj5mXFVNmshmFPLmMS2U9yBVrhgTZTcQjVdVFWNLiqEfv41PbppJQ",
  "key7": "3VENiSrg4NnXKxXbv947CtwcoB1K44n7p5iHGDfi1fUQep8w1Z4KfChmH59BnWoUw5mpLfqGEbBj7H8weE1r6Uw",
  "key8": "4NW2GqZwbjNmASWAigVni8QEDGqKhQSruBuMxX9UovQEPKtZoCqF9NgVTMHsK2rLU1SsY7iBrcHBwYLgEf5HLp4w",
  "key9": "4WbxmgAuGWKXxiaD45bupMroKp5UrmLAk9nioviaVfjeYX6sy1riNBDZCrvsm7EjbCPTLvaQRfds8bLwMYSXJRGv",
  "key10": "Nu6Y8soxdqUBCCeeZrgP51X4sRd6hfzGdCAF3bvm5XvMQtXah7Gftw5WF8ym6byzoVQuMxzpzUTk3yZsUeW1Ago",
  "key11": "5ocVGMywWQ9eMF3Pewiw39friQa8RhYJjUDXuU7cEtDs7umKpE8hGNJA5f9834LiiTrgWSL7pYUrpG1hY1nv2BSD",
  "key12": "5UTtVASue2BKhUcg3Z5e27qYxNfTNaqnTaXZ4EQvDX1JgVm84eFiaKXjQfubtMc4ZbwikpCSiRHz5QziZezNaqPi",
  "key13": "35dEpUK1tNJSwVJipoBVC4s2F5gYcEH37L57CAHAzKmbT4ftqSzBZwkt2DJrXoouJirrSVH9iFaBGDtTNuy5Q7Li",
  "key14": "nSy1fMse83jF17hTQwBXP2GGzTBc7iJuXipbkB6kz8sVZYskx1bja99fJYgCYkj8FQ9MaVPZ7W7dUHzmbbjCnx2",
  "key15": "5SeQgT1etZT3ep4C52mLPrsEFmgEPYgaXdJyvEGmc6MiBpHQrKvQhWvjfBNNGH3NarkUMXFyP2d7qjbn7sUrVoYZ",
  "key16": "VgFWf5FuMQK43XoanQKVRXhsEyaCh4pj51iVw7MHZyaBkNT7GdrFKWEyMFmJHLnjES79xWaGctc8x98EP5SVRwX",
  "key17": "3AsNnaSj1WRjcGuysJg9fqd8S2Kk8TxAwHjtRDzK41N3TKcJa3Z2kcmQswhMfX7njbgJ6p6ZKGszQuRX8LSxiKbV",
  "key18": "MXxdQ7GzJZFk84A9TuT5QhSoMSKt2b5FVNo7edDisVKEsprGxC6b6jpmubcT52CEBPcUuMY7ivcqwpnu1ee6bFC",
  "key19": "LPg72eTBmjPwRKJCtN6qTGPH9T1iAW3SAzRo5VYYyyj1KjTib58G9LYcxcaGbtRXwWh1rs7mbm8gvwZmJW4i7SZ",
  "key20": "5qQhBgdWLK4rP51yN117D5Lk5M7rqpmtb5DxcUKexwMwESr27SgBjmaMEKDdK5VV3rPAbHfV3FwMswW1dLo7yfQK",
  "key21": "5CN4gpfH9yy5sgnbtp2nxDDABuqPBmcTarBpZENGMQvKu8c2vow4RG3D7yLwXufou6ipwR7mSVpT7T94DwGXBmko",
  "key22": "2BRLJBJM372ckS4wUPDZSV9KesEQ9YPtAVD4jFT1jvYaxRQNW2b5frkqTDMm1kdQyEvQNSe9fQFZx2BKGdJb6Ype",
  "key23": "2fqbRKWxxN9bKZRUTFd7wxPXZzshUZnK2J7CiLMSe1h7ojcCe4c4v3nDsMXU5cCMN5zihUNQsBetvSGTLzuUWwZz",
  "key24": "3usG9752yVkpMVcUpbMHcdobWwTxvrRoKw2X7yTkKyBT4Xb2ay1nsmhnLtjUrknHU1kC13A1BGYe5yncPt6K2ExE",
  "key25": "4pP6pj5dQNcg9uBG7k4JHXS6kUK9TbfAwwNNTPuKUfXWD8LsWAcrzXazqeD6GAA6zue7DmRu9fXrbmXTqZFhQVBb",
  "key26": "5pMb84CPDzDx9uqk6qusn5ftVEpCodKk3TFiDPckvUgHmRoDDpnNEcJUTFf4nW5s6FEuhpsBi4ihQg8qhfGWeQwD",
  "key27": "4RRsS128fJTJtYTNtqvXKYPHVTZgnwgmjGszr1dX3FPVj6rvwFzjiVf9qvef9gpRT1HtcFSXgUnXAtxrNmHWwcgF",
  "key28": "5iE89kVv5MFbg1ghS8BNa9xb6t3EMWx45sW92H42FvV5RAXnzdLZ83sYYhwiHbe3tWUBHcLC5cArT7n7zZgPziVc",
  "key29": "4dG8Go5UKNFDDPns1ggRgUh5v1wqtPxGHuLUiJExqYc1eCeaDT9MDpKzyKozyHbmnFPtcWym5vnL9zxZoLu6P4QK",
  "key30": "1zXTpwAqH7XnhZbbUaK4e6r5yn7D2RJFh9wyaDwgr8x4K7sNx5zRewHxyseHqLcJfMCevDpwjF491HscR4znbeh",
  "key31": "35WnMZBaZNtPAa23YmBnnMeyLspiFFAimLzFext6PMmdVubcHiFFj2L1zn2LGqWmJbr6nLUyYYnUdaeT2jqdv1HD",
  "key32": "L2NaVgzNdBUDnZGaKC4TgVQy1ndFsRaAj6s6xzs7NES3HjGwbyth8JXQYQJ19o8x6eL3wD9cg5axQhb12he2S1x",
  "key33": "5YcPJSeuqwAuehEo1FNvVPwQZj8mVJiinPctavLzGstrmSK9Scmv3yyLnvWkTK7rzy2arR28Gd1PmwMnb7Nf863a",
  "key34": "2ujJZhcGsGPpfRG3gWJAmbuRtpu5Df7SW6GF6gCQN7gqVRCaeWr3Tm7AGRzN4xv9qAUWpSWjZbNMGBRWDGmu4w6D",
  "key35": "PG2RrBC4cUHn8EB8rP37PpKATCPiDrjgvfYKo2v9Cm6tKhR1tbFSXtQYFH9JzoZ4v1VqZUaXzcsK7cubsVENNkj",
  "key36": "38WvfYHhdLswaWamRqmftyM1fEHSXjm48k8vtZMa5XVvvuDxkV9jZT4iccVTaXTyfT49sL1i9raPdThhwE6B3tbW",
  "key37": "5KKqEmjU3peA3z9yscvKXbspXRGSoNebRetJLvQDN8QvypcJzsFrqRLybWH9q426nxyUQevi3RChiVRrHA84P5sL"
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
