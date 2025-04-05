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
    "Q9N5VFq9FSzDWp6TNkMBVTPUs9kBxS5L9ts5LxyAQjc6KD9BGFSWHkShr664QZMewDqUW2Cof9AADdAaFmB125Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZkizbomACS2mZuWh5JeDByLnN39FyS2tKfiHFx28kQTbUkNyuXHeHWFzV6vbwmjFiv5yWtY3gHDWFUYjddtuuyr",
  "key1": "zh5vLSBuKu9J8odjJgofNdeKshb9CQu652vYDb4LFfEaYfd9RCfa89x3svuJafA7Dixg3J13SDwPgdXszVPRcpM",
  "key2": "oryyo8gBuYaYbwUPMKXBMrn6sH72MjwAf5QX1ucPWLCaEmD4ErfVZ1sFgTFAuVYTHBCTzjowanxFjSTFkChmS3s",
  "key3": "4aTpHFxq5QKPRFPu9rZ13cVLyBnzYn4jjKLRmpn9ducYwQbHQ7LjDjj8yAPVQMdUQpUsHbbADLmpcwbXLMzMmDb1",
  "key4": "5x3hVsePubcffF13Upba5CQ9dxT8eGGkTX1bfNCwiexPNu15bZTTt4UxdnUGoQXcWTA8CrG2kPC1NfsM5fefftn7",
  "key5": "5HreSb1XNn4rDqvAWKfbaJCnnDWKrdwRr9zVb42chzRfi6PxuASjDMRWaZjjRbao3RN4KRzRZ51h6He9m4qWabgG",
  "key6": "2znxvTX5KMVW2Jdb5dUSmpJP3jHrr5ETgoiGbGV3iy3ZUteWSKTqHDEF5vEFqHnU8AF7tYuom9SsML7tKUdbyWhG",
  "key7": "4xwrM3Fp3fjLfNs7QSFQ2KpstHq5Mpvd2nu7CJmhjop1pkiUq15tVicgZ2KkzvRJ4ZY6LiVoAVCpak34bEsdny4w",
  "key8": "3yBUxfCPHmELRChsD4nJArUE2s8FCWo99Bns2dWzZ4CJmrioLVY2iuQM98rx34Z3oqYfsEwUimDq3zpDXQYuKrCj",
  "key9": "5YfhoCDAsYnyHMWhdSk8NA9ayHoJ2gG9Cjg5YugyWc11KH5myEmGwxQ7iU1tQyjLEdcehgnA7yfNAMHPyVAsEjWb",
  "key10": "3nUxD23x2qR9GsEhPqhhxJx7f89CcujPnwH4WBLKnCXvqAXJwhbhchW9665MA1dMVFLVAsdUpm4HoaJtTTSifsoX",
  "key11": "3LySrnYKBNsy5FJLAsmVJZREbdPBanfcvA4G1z4VfRRPppKmf5K2JPWCeFf4A37Mm1TvtEHiEG96bKbQsU1qWXPw",
  "key12": "3b3nmyGcXBZ5v5bAJUmhTKvrLjQ3ToGpJq9fzXXuyJJGpvprG6hHRgQTcm4gmmWPz2LYbhk8F6SSunkMhnRVCNEn",
  "key13": "34g7gZMxSatZe29ZcafG3fmtY2LiPKk931t5f6yyeMhYyCBw5PmDb9aPtLkuLVq87jVkVnPrWhKUQwWRppMMf4AJ",
  "key14": "51V2KG6wDTAzJm7ffZ1bqzDwGbTLE3h5vHKy2RKhDrd2gkxMcxvFgTfXsEagFmhf7ktpUA7Z82LzP5dseGUeV9Sh",
  "key15": "4q4KxwotUG3jy4Zj1gt5LJNmf1uFuL6qewDnx1GtcSMS4RM3Bogijqf2HHJwHNhK59YajhddfnyFdVYjtiQjdv2E",
  "key16": "5o4NZ2bvbdMK2kd52NLXnYfXgVKw25NF5pq8dByht84MZkyAr1fEiJ2YWjNKFbMJ2foV26EKBZaqN2dDXCD6MM7T",
  "key17": "tqtNjZPUpjbGWgPEaoY2CvFF1Rnz9f1DGQutmQ16bQfuNKzGkdR7W1hoy3djkYmWhzQGbYnPnoRXGiYBFxGpZki",
  "key18": "5zCkdTmtTuKuTw9y1Nk5Po217RzLJwca8grXb4SWxgmqMQVtupPJ5nwSfWPqCkoKjWoKoLX4qgv8s7LnTFgcPcqv",
  "key19": "2TzSuWLjjm9m3Ds5M9YLXb96i9MJZAG72S2MfdbfTQag57MhGVY2XRjxoE7G5nKgcuZZtwB33PTqfJgDvMHWckbk",
  "key20": "496QNyULThutArdkL9doiiqzSNLnvuCjg8ujD5tPKHt8xDhJGhyTrxRT8Krv64JkGSGk6RT4DJyXVMT2Jn9oRZ3e",
  "key21": "3AfDq6rtXBRf7N5PU6PGwCDNcbGyLYNVEod8R9aaJP8Cd6iAtsWQqUUFvoZzmy6MKtembRSDxotiRmCjf3Bv4A3Y",
  "key22": "67Gg8J3gPwWBmsNLp6rW3pS2Tawroew1z4npSNEJZ7spoVmxUnRL2kQvzWp5jo98ZkV2425MGmJNMbkRQNQegHgH",
  "key23": "4t26c6N1fKZNhkP5s8rhhPrULMUMVArKMfB9Se6kPbLFAQ5QPqFP9JzwFhd4GuoQQ3QEXWHRjAGqqpA7PtszE9Qv",
  "key24": "52s4gQyxFax4EPmG77xrLz1hrjz8nZ5cmeyFWwaEnYC2hmdKwVfRf9UJUvSfUZgJaNbAxUAkK8HbMZSbTDddLcBp",
  "key25": "FKPSgnB7d2fyV87y39FxcyH8Xpr98SRMiSra97azURDrkoKRYom7v1XwdHtjoaaD2eiWVGzGyyER82ivu4Nucx8",
  "key26": "24QT4dXJEYgCD3eHbZWnuZohwLL6UC5Nq2WGHnwCswahDt1THw8cBDkRVxuS47v6bsS8W1k6BswPqAJVyxm812FR",
  "key27": "wPFnSvac8gq69T9Bt5cUMjvrkP6RFC3B7MGbm9W9DW6duk98NrYJGUttVddSSmrqSAiHofHDANMKFSjuEMBSmuS",
  "key28": "2goL7g2Ps9ndcooTxWjvx9NWM5TpDXic1UY68Vec13QYHjqZ1MSUjRGFDD1QtvLcNYzMTfTeXqkm38vcERW7tv5p"
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
