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
    "4Y8tdbCSfHrD9jPcFjRgXEfKmpAqWyPSQaWWyHmyuevvAdvbAc8qrqoRdpuLb5DCMdNVFBYBHBTYL4aXCGWB8yVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2ZhWoApeEVyqitxQeFLq5LwmAx3DZbfPBnPXEX79bbjwU2tX8xnwdwReov8pwNuztnibnRmtAaAAXK3xcK8nyS",
  "key1": "33ghMLhe3dmm1BKZSTUtdu7W9rP6hoXtza7ef4sm61JwBEYjCqHEctZzF1a9LvD5xHabEcGheD5e44FfZwvxJ8R6",
  "key2": "3vJFSk3QkBsHyByUujk9Dc9bFpU2NE7P7LLDP7QfyHzeiDuCwrTfVoUGMdQgLdcvjB4N55LoLWpiEVWJzzxrwvrD",
  "key3": "2xWgv8LJsjPy4GkfNGRC5XLEeAivZxJavSiNYpZix3rtwPunvM4nPq32Ct7bNgB4VTRgdDsTCS5jUQPj2YUbvRti",
  "key4": "4kjSvyVWAj4C4CzReZRfrW43tx12jpziDpfRtuXVwnaC7NrR93NDLYt7TcaUHYqQqSHKcv4yQHqg45ryGNourXmd",
  "key5": "5JmwhqqvYH1ee6J2XLL1NqiK6JEw2DbhvRT5uTatijP1J2rmYXn5cUhMyoAVHp7yUX5REAVnXCj4GYXTm2z2s4yw",
  "key6": "43cDfobtRXb7jHkuFj1vs6isZmeGPhfvQnTpdaS3xx4HKR6vZmkJfEYTchf3b2Y7x5WFFoBQR5tkvEm9eoh17XZ",
  "key7": "3MbPVGotk9HjQkBq8mcuUb5qKaiTYmttidJ2xo4Q9d8GoRqVmh1vsXRwfZm9Sm5qY46VzSn55EQzWNftN1DJrS8i",
  "key8": "2e3E3bYUE6Ft1zXFsVVnMJAbXorTi2T5anzaT6v3K7TjPRFLr32iuWjEuo83NaaE4fsztK5aq38w7ScR9zNBVGqf",
  "key9": "3SQQdHakz2KS51qReb3eRxY3czitZciaAkkE5vDgAcRgZhymrspvZqkkbCSbsYMQUEfwqrQKbtbiEBYz98vRd9ZL",
  "key10": "2huW2s3g9ncHExuapeFx5h9MBMy4dBWcdZ3sYcaNjfHBKLfmumQ8tUordj6HoRcS3DssqsXTYavCqW1Pujead2We",
  "key11": "PSgxEC52xsffUC6f7jeeKJRf7n9XThRNMjTVbgxse3UCCcyB1LCbuTVoyC8LTrFAxsdEwXjL3t2VWyacSXkLBS6",
  "key12": "2pX29w4m9jU9GUhVaj7nYFKySg5QUHp7bHAyJZMKfPJoEG2BzZsKTgHMuQGuy6EBfG5d7j3dQ3uzCA1aXefHYX7s",
  "key13": "5oK3j8CGhetjTTsdz2v3EezWKkjMWhBD8puiEdbJgAkWQABDq2YteoBVUa6vTPGsb39855bMkVL9ZpyYELNQtaAc",
  "key14": "ijG1evBwqngvTaF9ZeCZxcf4yesU85GkAR5X2SxaHwnt7rLTFAsbJtze4RHhwQEdgU49HZ2JXGX2jdqX9PMtZDe",
  "key15": "5fb435cGQKa6N8hupPc3Pr9SwiqB7PdUa51BJXECjG8hd3P44XpEamK5yfG7oXkPe1dfLJBa8WJC8M2sSe3NkPUu",
  "key16": "3CAu95WvMB8Th6Bc2hHn36FjuvSV1hMB3bti6YkZRJTtArwncPtrRhJK1wbejanshQU29tCaLvVVoSY2yF1ZcKKc",
  "key17": "4e4usah1ekrgYLRTDGdpq7VcFPVVSL2TPn5gZLtCuJ22LgxDEtQ2kmGxvfVnpG2gNg1Z2hqbhxsNU3kDRYqv8MsJ",
  "key18": "yyjvCxzpKfCAQnJBU1imU7huK6tEdTkDsGngrCS4hYcXMoJpCm5prgpQLKXJuoC8BEjMAAjxQfURn27LbeCWrVx",
  "key19": "5k37gUMj4fpdJ6Xyv6RSJKMbhKSUhkXxB23eErY2ddM2Ur56wYqNgCq68SAejDre5qBoYDAK2JAKCKQsEMRmMFTn",
  "key20": "DkuEWRDqWXhB1iknbbWC7bwSftmbxVNimUTfkVfiKHBMWXCgLFJNjDX6ikVdZcWKWbZRkqVb64d4c2FgTexKCMu",
  "key21": "gMJgb7YBPnRBApeoNCZi5983Us7knrpxDxnuQZGYfQN9RjLufpzaV4fe3mco6R7hBc7YhsE53YmLUN8tta7fVBm",
  "key22": "3yEkA5QNjT1qfbnJapfJJVjAGN5VANZdsiARSaqbxH9CSbaNEbwL9rsSPQKAhdegHN8Dmg9yJqgutygqkgi2L2CD",
  "key23": "5QxLTrBFTQk8a2UzQWcdxMSGFLcmiXWw1HuLeBnm5siQvsWViZNoJKjkRHLSveVsvAC2cub1yt2pW4enNRz1WBh8",
  "key24": "SC6QkwWDfmsrVrxqgdK3jGCjqjRFWXX4orQEu3HHb8Pvjsj8mE4tCnBGWvxcrYRo5K71FomtxMvG7pPiBxa2zUT",
  "key25": "4HrFCkGaqTkJdcgqreeKCxJY4Y1Wa3up5CrDgrtQfEyPrJc2gK9koBt4TtRnBeoVYFj8dzkNHTU7PBm7rGH8qgNs",
  "key26": "4xnWdr6jpu2qZ6PJf4F1DqxsxFX1E1j4ouKcJ1hv52FccVmKYL1ddgZyrqnjt9Sw8By6eaVNcubAhxWoDU39imNX",
  "key27": "39yNRsdwmsLopGZyCDU6M2RSywZo6z6kaJyXPH8B2gXtU19eN4NNpBwgKAVSNovji9ASQucRAuZWAqUipRxHax98",
  "key28": "2YCjkxVaprKTviBHfEYnv22Nrfp9pQ9LfeRYPkc3qPrnb2ZqnSfrP8BvM818EFyknsWmjD6WZqy2aYkQf3tS5z93",
  "key29": "4Uvc1cuitE3YHtTdNhBWerVyB986qcanVetLwA3QEA2XC3TbHcnGgJ4CzXvycZsiVHJioGGvdSsMqUg4FUSQmCoN",
  "key30": "26btmWBYVTtvueigDVGTkJzVD7RagNtjo2QpyihAMwGLB4ihU8gRrqCceNKimrLSSryF5eMLPz7snCDu9GLy7wFg"
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
