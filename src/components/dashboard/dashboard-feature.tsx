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
    "2xCRoVUoNMC8pDY9Uz7gwG472DRb2gynXGuVUE31uWhsd7U6AW9F43TxyqYY4FG5UxSfhBARDbsbeEkFNHmSHGQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2ABVMzGNPbBR4rZwVZDVzX3Ah37PtvxhjzxZTFppR15Ht7dk6sVGKizKuthPbE7orAaGUja2uoU4ZsWPv7dYoi",
  "key1": "5ppvnVM5BitXDv4y1JBpjXfy8QXe5c7kYscUYovrEYsXC5hWXm9Z2GRDHo8W65ZhLjBkzJxopskpFPPFDwNW4dAT",
  "key2": "2Knr2sJMzVVuaCw3uVuyy3r51erGJMZAKU6s8JkxVBCSXn6ZCmzJxWd26AGUuauxMd1GKLg7Lmj16nRcxCuF2YAZ",
  "key3": "3bmfYh3KnEabjENvj1wT3Z6uguZyorbuaqmjygg3aiBpFg6aBYB4iCmK5bcGCLuEgkFpMAj1DVBEcbADY6QUAvPT",
  "key4": "4AHVbf7yXKneuioJ4Re4xYRm8RYZG8Kv8T34FqEFspBr8VjH8M57fWScMMCfjeuK9EGbYAFeKwjxKLt49hMPjppd",
  "key5": "9hiEKoFQwFFh9dReSbCVzsfCLcqguf2upLH46bnW857njvFUdewsXnqZZxs7dS8De48cAh1ockByw79Rs4n6V6e",
  "key6": "2EbLZAXUAw6MfJQdXX6SsUdivgjXpGWEXrenLqzsEvP53RYDLsH4R742FpZ4N9QHtmXZaVxVepAbnNrWfcLijDRJ",
  "key7": "HDaCEmyLseu1BZz34fEMZYeVt3KE2TLPHRX6LPVpHKSFo2fTaQgRABNreaTVJ5hgz5gUwmxm1Pe3mAGekbo72R4",
  "key8": "3TuUs7eEbkpSS67wkbB69RxoWmP3VHgbbv74VQPTBx9vdJmQoCgHqdmiy1WCfSM4WNybSJWrmesK39tfJG1gURbz",
  "key9": "NaFznyWLSGcLFaxZBwzHBejZrbbPX9f3LufDAVsrRyi1Cj63BEfkRQ8xr6GrX9DPJQ2sX75o6sKaHRjyFt9RbJT",
  "key10": "5AcMcXFd3wXnicyUwbjJ8SGYVHQzVvoSewMaSVqfrEHDtEJx8NarrFMEdECoBbsHF6AASfBNKzZ7x8UNW6DJXawV",
  "key11": "578Mbowm5DccWxmyLiNr2ikEkvJ6gQMBGkvZJ6UZzZgA2taEsLSxvNCbVQXxgdBYMArDmm7VfG5to1Ra3TeggJ2E",
  "key12": "55Nx4A7UjdLHEu1gt3ub7mkgrmoQaxt5NaftmxLJriwMCCJBRcrz3gaxg6jTvkLQus1peL4stZWoqQ8CNP9kKTNo",
  "key13": "9L1RN5ndAsT5svg3coY8gGYVAu2tBqv4dpBfA2rfVmwWZtXfikJ5g329KAXZp1nyXqVNhG1RAfy4f2PEbKSszPh",
  "key14": "37xpuZH1Td3stwhXFtJBnKqoqZjhQ76EUEieYH93FPHCvNBQLTEFksJWtxo8d4aC7nNXSFTBiFoKLKRtEJEazSpS",
  "key15": "4FTEBFkbyJuv1iLJWwLtzLuQbmft9V8Zf8Ucy2FLp3zPmBMwGSppN6ESJaaTWE3EbsVQeyzkUMMJw2dshFAWG6Rf",
  "key16": "2acydnEeZXa9mfbzWgvdvhxjFTRTf8rLhA7aWPWAvS6nbE7fEaTFuoMjRA2SqpkZwfQBLah9JPH74k2v1TkcBFkP",
  "key17": "65T37F9VbbnrRUmSR61cXeBF8R7QKSBoMnUiQKWUFDgiQVRq6sgGBDBzK18aEGXcqKzg9ssqaHFhBxbaYUmWQJ86",
  "key18": "5zuCwXNfs3Yyh1d1yyaoF2GZqNgKMKuuGiHApku8gLACCVSdcH9SFjCZtp6pnfGj2xFrkYEQdmh2qPM8PfMF3Jrw",
  "key19": "2ys4BzgACxwtiYyXTpBJtUKfrWLfyy5Anx1G3pGFkrSwgZYcuQsV4HhKcuwJ88HhG4kWHHVaA5UsjwysAaJy1crm",
  "key20": "vmaRjo8QzFVYEdwpnjDVq2Fx6ftEsBAU8EemT4LNkfpRAaeHAVDmAqggri4YCVh762WevHZzYtZuNqwBJc4xzAC",
  "key21": "3EA4L8wCrBy4RY81Zxwh6ghfVevRDnzs8bKyHTYdJkM9KgBvkNjrjBX3iqPM2jtdUGmHBjpxqyP3CRbzazGqF9rb",
  "key22": "JER5f42zdLX5wjthzgxdVMfyBMwAeKjynYm1HcpQHS2KoNJMpc5HheBvgqkeSuQ9Bg5iuNhU79w657Xg6wfoogf",
  "key23": "67rYWxWRUamY9QeDgAcF7jq8og9QGZ5CMsJT4arWsCDeh6eUBsWYUV1wDQD788UEiYDcdHKsSjj4AXQRqbPhut15",
  "key24": "22SvySqBmAt5nNtXtcsjoj5J1dZH9Lz3mA5Dq334NXyR6H5W1g14FykLjFi2ezEyBc9N96HQVQogJ7V2U4mcU8aC",
  "key25": "2nkWNJoSGNCFcmPTBXaJrjTQ2SEk3eEXeu2gNbKrikAZmmaiXEpkdayxZRzZKpZ4Bb8nxduWBE7xyAFtjD8J1BAE",
  "key26": "5VKt1ppXV4BoH5sLtnUzoTUzjBmLeLVypmoh73SrynCB8cBfj55ozu3wzptCjZseddoAvCWfVhSh3WkLE1bSJrJq",
  "key27": "61XxNfmgHoLbfQv5W7fZETcDyD16e9k5oqgmNav1qRrvdugHvSx1ACZc1nwtoCMAcZxPaUkfRn2VJFqFUWo4dSVp",
  "key28": "58EVG6wMGHCYbE5w81mfpKX2CkdhFVZHyGmvSQJjq5R7bSLQ82Pw2yzTyyX4k3W5w6cpGbk846GR7ZzrupWjugtc",
  "key29": "3sTDpGZZQUJA7kCxx4aVGNgRosBqiVxafwnHLkYVoYGLLS1cqjVUAZrs1BkKDcsz9TknvcTJEGJBP4QHd1iM7N5Q"
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
