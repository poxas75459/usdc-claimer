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
    "4zNgNmFdNW7e8RFbaH1DdaJBKWx7mWVo5rjmLrnQZrny6UsgAKY6sTCBdPht2mEjTarK4An5HvG3zE3qov1M29Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DE3Ha2MzaEbMToq1igbAtt3oQrHFyigFEehC4utxvyAD628RRez28VKJDhKsrQRzesv4AAmDprxdFFkXdjb8EEA",
  "key1": "3vmXaURFJynsraAZCJKYBmmcbPFtns3BfWn3TUQSSKBjdNffukdJX6RZHC9GffnpDDDvaUyBwFd4nhJsiEftpL2E",
  "key2": "4MMt7HAotnjjEfFGr3T53hEBHSmuJKnjc51nqmRA4t5kHhC7GshGSikcx9Fa3NJRv8P85Uo31R5qjubpLFnvPVvW",
  "key3": "3Cg6SGevoNiMxCbrT1GDp3GN8ZsUpTieHoshZnjZtCUX5kAT1ZmV4jSGtXLh2diUYYPgJJAAVDB8DJHEi1zQtvUP",
  "key4": "3o5WYNrP822RqnyQTWuQqmVw96tqCswmqTTk4WDrmiLMAoaoKh3nL5SqimYaG9psnvqU3ritMP8y7BA3HCySak14",
  "key5": "4ftGAubed2V6yvzcZCU2KpNv8qDCz17e1yw3mwZGtSkbFHdbvgTT1NPdSxYzp6aYwKA1ukvQDxjTXtri5fKm1FGf",
  "key6": "3St3Neh2LxzXuXJvVhiyR15soHF1WbcqfoSEUpbTxKi5ftTe69CAY5CcKWVU1a6awGEubuWxmrXj4HXgoQsHSLs1",
  "key7": "S3yp5xiKC9Q1CDTtNUhbajUdm4SBvPB5KZMguorb52Z9oWPbpcAD5UNFSkwmRpQ4G8s2GvtHdsWwNPStsHRqAEH",
  "key8": "615AU6KHykJiMfwezRaH4FCtrghUG8PQ16XqqbV1dxF3FTyrJKmjqjFGwavoGLVWcJYQx8PYWWYhWUyH9FBkN7WU",
  "key9": "SvJpMhut5EAHWhdYYWfmHwzs3KC2XGPns9RPcmptfaWjcbu8rFFTsqkSuzcQ1skyDAojZ5xKM6wSRK5SsKSmSWW",
  "key10": "5Los3zcqTQojQhfQaBF9KRzdQpTzQy3NtQfoN5JtXuX7AUMrFsXHD5toyrTQgY8net6kg8NtJ9i2LkjdyP5WjU22",
  "key11": "4gJoJCgYxFhxaVRVgrT47V4ufED3EjEreedyL8SUPFE2XsR8b3FT62RJ6ztxpUuFLuWXbX9wc3puc7nrqbCGnzN7",
  "key12": "G4yZPe8sjjWZoryYCCnP82wR5uHcZwV1BNKVKAGM6npVKUR2MLNb9Uec1qT3wDB6v9nR6FLZmJipjU2PuWz7sUq",
  "key13": "24dRJxm6jjiDp1c3BBm1yt37FUDJp69ZMzEv19f5VqbmjG4XxGQyEarwrFLQ586k1msCJcuVR9w3CHCSvstyfgMg",
  "key14": "256EC9RsH32ZqqokVCpAweWyEkaBiwoJcjRtMHdDxDZHjw3yHr6KNEgXfNNsCgFTEbm7ZxXTaW4dTQpAmgSrMUUi",
  "key15": "6f8TqhsJLdn1zsaD9hjuuGqUVaycvxAsfTDpg6Je5sUxmPxq52Zut9TCgL9To9CYQq3KjheXFYjmL3dfadhNEua",
  "key16": "349n1tM5y2ri11GTgTmTNER9isfeaN4hWUuMv2ipekiV7PKCExkonnvYiRxRmaLCJX1pJ2aSUJ3aK4eVCWVvuPzW",
  "key17": "LVycuatAGguSaWhZDqgr3e4NNkUoNDxRWhBA7s7VLxT6uTGyia5kn7U7waTq88VVVKx4pLaDeyc3j33VKoLosPF",
  "key18": "3bP3QVxpBPdNNZQjEzDWKVNNE1jGCguZrMMhgqp2QYb7UpR2dJ6ZwVGawWqoACKRnSmnoeo4XS1bfSJv3n2h7rxu",
  "key19": "5zfgbVmeKYBQGPjTzsbPcf4RfzqthhSr2YzTU1dDkmE1r7d68Fp9AjSGoGFCWzVcaj5C1UtpgUM43NWwrhMY6oDv",
  "key20": "5RaZ7VRPYo4Eubymsjnby2QBoqu4Mkj2mjTLqeDJNimhTQSMH5Mkkuxy2ZNcHcSMyJnymeQFKMno91PbiTYuq6Uz",
  "key21": "3yMvHRQLgsDxkeMH5dHNcFYrWkZ3B6XzSzrQT5m6GAEuVJFo7D8eQFjF7xHPEGw8ZDDmZqnUF6QoL1aSQmaxnszx",
  "key22": "5wKRsBE6PQQFsaxWMbFUbenq7tKQ59ZRQgkXubpQ5oHekR5dn1EwQ8fmTVUwBLPL5ND4nEE184QFZSNn4sZfqkD2",
  "key23": "Ax84wWre5pRNvwGUgr4Cx7gXRJZvEZJZzCnJXPaqQLwCMqqWvNypX29bceVpXZgHkgvozc6NpiXBPZ4XRLSn2kq",
  "key24": "2dfm2nxu4axpR89xtkEuGWMz9pohUQFypG6uo3QMigLW6zrGS8Sgq9ggNwhecxgE9ijSPssW8kZMeg2MvNFnLRiF",
  "key25": "HZXAzL35VzUA92wvKMB5Ljb7Z5eX49StgzjNjT2hNogvW1zWRouA5quqev5b3Yiy9oz5QcYgcppFh31S4YCevWt",
  "key26": "5QWoVQ824jVD8rUQ87ccqcm5T8uMHhbFiqwVLNBUy4mtKrHeUQGiECuBc8636MZsdEySZDAfokxjTkL2hfbtEqHZ",
  "key27": "2NRPMMeqXE6GDuH1ydFDXX329EtpbJtHtHURrMhq5kZqgehxCJ7NRCkyCv4SwhZQd6uW7YQR5ok6bRQzTM5VAfMz",
  "key28": "Zpk51AekzFocHfRaWHpWb5wMGooXc7wsAtVsB3uKRFGTPvy3TAqi6pwGjW1v8gFzwqbiEn9cN9N8qBwT5Z9NErz",
  "key29": "3EURvdudtMarrV2X5LMdvuA8dMEATav3zZMJV1Q3ijsGeBcJHLx6uQoWb9PAe9nAXkDThfQTkd9cwe45fVcbKofZ",
  "key30": "3KcKLjpM4n9SyVB7BiZYy7zum5gHQkvkxcxDuUyEXycs4S3CeSpHcvVgDPb2F3bbceLmERQrwcNKioE2uU2mG7my",
  "key31": "rPJvqhzooX6Q8abRxLmYu6X7eTQSCziky7xFHyvBXioHHVupycDcDJLLkEQ6D4wRX1uFqWpksoLDdjHerN4Y8yM",
  "key32": "6536jepGbuuy5UWNtMXQPQUSwYY8ZGRxL6rT2FzVSjQmGxxtedU8jQnGeCH3d41RFssVDuehToPR3wWA8SWW1Ar1",
  "key33": "3mpwgYdMywstUspjWG51DJfHBjekGS1FoHvd4vRRCuK9J81BnqfCrPmdSE6us2zf4LPim7PDby3poHXT1jWkEVuA"
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
