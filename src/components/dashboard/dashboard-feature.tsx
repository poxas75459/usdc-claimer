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
    "5kdfTR4fm5pdHXbsUwh3pgAGuTpBnW6nsEMouRruXnntDFjjkAJsp7u3Lf7d2e1DBrrTi5YAauYMtY3JPeD98K1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFAmyw2z9bXQXgbnct8E5mBaMvpn8CXbkiy6kEQBrzzYF45e3pRdFaHy5SVbjmSwXKUw45HburfrHbaYNu47Co1",
  "key1": "3fSixec1zLo7vzfZFSWDtYWRcQFFcH31jkV9xRGNf7QNdSPKPCxSoZRWAXjSDwLmP9aSrek3jw4G32yHTTM1Gfqj",
  "key2": "5NRNWKDM2XCAMN8ub5hKPrDxefc1162tuKCCKuc6JaFzKQVGyXAuqjYPQMYCvCb1WBQrqJ6ETZyaVd3bGCrkjuwf",
  "key3": "2wAZKKmj4rgdDLkPs88QzPiw2M3ExdES9Lxujb4YCgN9wdFy4yWZ1s13mtUUZ1kRfqcAoH5raVZhHsBUgMEJAVbr",
  "key4": "3WaNrF4ZEf35phJXUvf1Lr9Xr3HYmYrdUTtbzSnzyAoi2a3ajcWRCN1RcoJ2sonUnaY9XTPMENA8mReUyrxeFNbt",
  "key5": "3ZG8FiaPd1hMrBrFkxKEiYbw6KW5HXGPhrizko3BiPhruGjaYjn1xHV3KmfQAjSTi7mhraNNCjYkZeEWy6G2v6M2",
  "key6": "ukn3FEMNwVuDikZD1dYTFcpXtP57hz5YQ8fkBtVnykzFJvrhGLXunxZJLEwarNtszdd5F15RJ3jLvzE9gHSRPeX",
  "key7": "4rbZD26sgJKNRsqnSzMHiYUWnWtamg1HoJ7Ng89FarbyiEFRdAmXCrXFqtnKfdPHudzyT5GBxN2M2u6z9JWF2Fwi",
  "key8": "3GmACjxnbUmPx6SiXx6J2o4XuJjmiC13n84RMSNF5QhobVMYymQ2N6uqbJAyA5vx3kpdcuYbkg84p3oLAFffs4ag",
  "key9": "4WN371AKDgNBLChgwAiten2aKU2bsZpT43BEqgxrGewKrvAHQWGn91ppHFAUgj5poJy5GYBHrzBRRGjpyqjhY4kD",
  "key10": "62EGcAF28e1rYHe3foPbwfapRVskFLc7LkjxyqYZqEWaQwEJEqjFUoziLobgVKigmSVE8bGvxz1imKjj4zjgFMue",
  "key11": "3z2Z7xr8iKq3Bcu34Fn9jK8d7hWmtRh61ccE3ErgoNJLfNtdkKCNWkmNWkH365MXjA9NjdEvKT8bv8V5NUm1nt6D",
  "key12": "3ybsx8LXJMLMTrNeDFxwue9kJqcoVXCSjxfgbxj8wUQLAXHd4cUYzxKhnuWjmoGCecNdZF1xLbigCHvbZYxDmAeF",
  "key13": "3MRvpMTUHEoBVAzFNfndu7vQcbWeU7PoDMizN3xvp88tbnaJAYXk2EhiUA1jz7KQWLRvte38JGAxJ9JTShPQrbif",
  "key14": "2eELfvbdEamktAS5p6VtZKx3R6iLnQnNB5rqEukJepnoqFdb9q4VkHDo1T97Y9CBhh4bCemVuqiR92RiTVdxv2YN",
  "key15": "45VoR6nsgeJNuvpUyDCKRmBGodGcSQoBFddKrqfNwxpDKVTBGSCk1T8jsnfXPmhGVrKN9EyFZYjjSR6vB39SMqy6",
  "key16": "23ns11hhTWUqHvn7KN2ijGxAWf5KWSpZUF3YMGCnumMx1H5AmE3aaNVsjf2GF8JUnfmLpJzUvzDgdDNDBTBpoTtE",
  "key17": "3hPG3An6SPVjQN5v3xjQQxsHEqKRAsCv32JgLL5MP9QpDEDZEgmQMiSZ86bWNK3w6EbQXG3d8UhjPmQiKuycYWga",
  "key18": "38MrQLcM8eiFzJeAY9rpAnn15zacPwNw8DEyHY632vZcpR23YRKdRaXccK4ZotfCMudTZKitTJnaUQsuCuyx9DaR",
  "key19": "HGfEHkTbmEuhiKyXTqpmYUp4RXeqP8Fmbd87mDskQVenD5NEFdK16fubEgmFr3Zt8ZxQspPML31mG2gsXjR6osT",
  "key20": "ojoGEi9FbCXjitkc7Z4pw2iqcDNS9QMUBUzRf7trru3Z1ruhdroNqvWRYRF6F5x94SFSYgxt1EKCpHFCrRWq3xY",
  "key21": "3NoSqHCYD81tRQKAyYNzHSRjxPEAD1is9i7j8PiPJGQELnyq1xXgE2q9UPrjh9QwviphmwFSMA7QUQR9ojN5vG25",
  "key22": "3DJNfw4UFiL1PELtjNGwfYYY6CbRNuuJ9dXPiKHgaS8YjYgvrCS4J6h6zjFZmu3Rjo9HwcC91ewwFxFDn9udjvMz",
  "key23": "28jFDUJy6QtCdjJNmTYKqqBkb79hvA8C7RZzZtWijn3sfAsxqE9WMnieBM1Y8Lf85CYdXJejT8tbkDwTEEs3vPLv",
  "key24": "3ZdQitcanuUEi5kLVpX9fhzvH8YFDXYEBcDoP6pHh5Mtxchtiq22cK6E6DS6SuTrUCeS7se1mTb5ghLK59u2gbF6",
  "key25": "1oBGfGq3XR5FjMAzSnKeSVduEz7fL2FjrnTiasKbXELe5ZKFyFCk3XY2ixoE7fNvqRsAVyWc8budsNQmDhH9oMR",
  "key26": "4CB9REF2ffcXv8g7iooRA2yx3F7VGs3rNrBsn7oXMQK8pSJpidSiD5F3AxmpThsQ71Nf8iXokcfrAyC5EN43mGfj",
  "key27": "s3vYd66ZP73wbZGqYoZqwLnaf68ghB7Paog5hYKe9R6cgskNHQSR9UxVzpj1qs3jCS7yfSZgeGSs9Wp5cmd13dr",
  "key28": "2fPQPKRmpdoHxQFYoE9p7npeb1YeXhU77vnTB5fR93DdbsqNDjCagmA2Qtn27Bp71ZCwWMrVJTfW7ZuJ3R8rJdQ8",
  "key29": "5f6ziRwAsNp2gZxAmCLtnihuL1B9f8qsidh9Lw8pWGtEvbcQmvVbhUWr7qrgoRGFnZpJeP2prr6e21AgjMLcTk3c",
  "key30": "5HXEDv6fCu1HiPkjwR7JERDJpFfP56gQwcPUAnAJDh3ekzTJysxp6oNUNvZ9rGBPMmRfRR3i4Z7U4YZs6xr1QwFo",
  "key31": "3t5EgtuBkTnEy5sxzc6g1iFK5NSzURWnpZXquymx1SFZ7Wxtzg5kejWsyC9AD1aDnUX3tu69uxNaCiNXNECUzKnM",
  "key32": "2q444Zrzijtj7tp7sW2sUZSTks3bBdTPcwS43Q3qtJ8idHD8PpXtzbTFoAVWYvuTsEoUxh1Fqd16rsXWmhCQRioH",
  "key33": "264AJpqG14nZP3SWyCNRwV7RaK7EGcgfSoLhMawCYX89EA4HWPRdbWioEn95szpde4jedhpZnQmWT5Up2oiQvTvi",
  "key34": "38qzSMG8gs2YdDTjMR1YGKXRkYeATPUcUCePNy4WWJfg16QgY27xFsdipn1yQFMBBFVjZ37a3TgoZB12pR3vriHp",
  "key35": "2cbFbW4P8so3jZfMpMAVzSL4c3oHcm1xQkMnmNvtwetiDWh7K4nDf2uE5S4boRFNd6iuLUnkJA2MgRPhKbqkh4kS",
  "key36": "4GLUSQZKNXfQqSgbZJrx75bqZ44nbQtmsA5kwzXes3ctw8Avkxs5xN1t6RodXieTyB2nMksTxvoBmzGyMyxCCQS",
  "key37": "aaJ59XzzKvoN7GAvLwnzQSMvaz1VHA1Te1wdEgm5PG8aYHsYBpQ6EAFrxCsZ571L8zGDzP8R5sshXBBLyrsjCmA",
  "key38": "322qSwEccmsmuw4mQ9cB7GfsFRAyhKRU3vjr8VNEyfCBLYxYbiSimjBcrLSg7UaVXdeSATSZkULfLBNtf76K6j3w",
  "key39": "2jc1JJR694bLQowCY2pkWa8zDp92FdWcsk9i1eEgdBG72gq6gu8hTA2Cz1wq89KWeRAkCjQxij4jmQCobyg38UcD"
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
