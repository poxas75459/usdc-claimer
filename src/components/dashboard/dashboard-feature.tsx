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
    "3XGTLnP69XZsPEDyTUthxMNddudeKznyNE6bovcqs7kkY7FZgtwcH6UKkokLpCrxK6baFMJUFP6mNfuKvDUHpHNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHX3o42TFRU5F8QbbZws74WSH1oL2686SjrWcwYRScnkNGUr2yBRNAzr9yCc35qr4iWGeY9fGDqoUEqWC8vcgRz",
  "key1": "65KHwbCeAs7mKdR5wzzAaYWxRqUdynwoh5VyJB2PJWxeXzy3wDwrwK5in94foq5FXTJ3zKFRfreBX8MoJ5MZZKn2",
  "key2": "5FGurcg67yMoCg4YMue46DwHBoisHEFRra4fokbHTbhpzNvhYYMdvcJAVQjAKyAtUwKWrRm1iinbQ8NoXXnRuUU5",
  "key3": "2WDhbmxyCfxA5SfqoTCPAKcMBBWuF3nPq64yNc3ki5ZoSt6sPS6EQxULVXrWL9ZtdPmU2bxJE4pCkRFucGLo5Urz",
  "key4": "5eVmtxyZXTSTrGoHQQ2qTKwdZwXSScZt1MuAFqCUDts7hoEj2YDGcTu8Eg6Puyb88qZSyfdf5HDDwnDKp5GY8DNt",
  "key5": "4FXtXDD6ENiA56JCEFVFytY2VSCCZrSndEbMctaHUjwybafHEYMhSXNVj1h1sTfk4f8GvqSxyUtdUf9PJ5rhJLaz",
  "key6": "3yYdPiJPdL3n2P8cjRNnQpLYe1yiJQfwp3hdmJbYrNYtJhcfzgVCocFEsb5wYMhVka4u6om8VXZKnifcw2nmxvXx",
  "key7": "5yuzsVZMRgnGkJQhJhrEf19bHyProZc3wPEPVAE3NsLSt2bAVeyPVgKSc8p4fKZRaLKceyS6UXDBkZqnB3zHp5EL",
  "key8": "iNWEHPLR9dVi1sqCaHJBoWXEnJFdX1PK8AnUHxjCpjkw35MLBvSnh8HGoQkQDHmYmzAcnBW1iTnJSpbsUNUN7gD",
  "key9": "7958Zf56SEtVMJzUEZV7ghKcBN2EfdonSjte15TZV6R38MfZPpCmVUPxiY84tANsZWxkmYgRhEn4SiDQBRJbjCh",
  "key10": "sgYqZTHUtydofLr33j8GEVEakqPYiL4DYUg9tw3joyxZU6Sa3igVy91y4Ak8KGftdRBpwGKrYGioCgFkJyZEaHi",
  "key11": "4urhUKvgtnThCs89QpfsjMYptgMvwdsPNzZynRpZckCXPSGnUBj4ph1uWBPBaFEevLiVAmAKNxLiWkrNJaHHnB6M",
  "key12": "2pmgPYroyu1tdcFbpL11Hs2Anm2iy8TRTiCBSsSCMms7ft76DkdbPYvvL66FKWsufRzQXYvx3cDSUt21xgfycfxn",
  "key13": "t3EbUVWPm1r69vAG4dG1xTsapqanUonyz5knbNcYwZyeLyutXuuK7NmHdXHGiRYC2wo7zSvaCyTZ59Si534WQrc",
  "key14": "p8oMqbncfjRNEV97HKwXqhFiWusYvhJYR9RA7TQAUwg8ETS5KxyrVQUiDibacoCYktWiE1enoS1JDc54bT238jz",
  "key15": "3DfarrjzEEuxDZ9LZYDdgVir64xkkNXtgvDkWQoU34GEvMd5ZjZEzb6qXKGJrz382Ck3kuwdmEgoEJ6YhZJgH2ue",
  "key16": "5sMkreJoLNTrrVw7MBR51Ut4pVQanA5meKSmLRcHeMDuujWs3X8KW7gs8vqNJJyfjpVMKonkjdJvafmuMehnvqUa",
  "key17": "45okQRA2DV1ZZzCZMwn5zRHm1cjDBguukR43W5mMF4jmbYWpV5ybhyf4eD4fkgpENBkSqkwNFgTwKQxJ383nCfH7",
  "key18": "55W6d9A1cv82MLmdWG1nfzzVw75XuKgwS74k8sDm6KqkcmgfqvYAQhJZQij3gAViztc6AKAZNBDQ6WomoToemiXA",
  "key19": "4c358npW4XMikAhiQajZwdu2vZ3Tcyeu14GoCLbE8amLBmeBL7Z5qHF393XMoCrB9CMhDyePCP97AzRybR5EWppb",
  "key20": "QcHG5Qn7sMvtLcPJdXsErDPJ92LjjdL3FcDrRJKzEFBxiwq4Yaur8R9Pj8x5WPjJDkJhzQFvnQKatRLBpDu3yYX",
  "key21": "3oiKeHXodAgkGvbBC5refCUoAX2qW6X2Vz1Rs2UghA69siV5zVnXkAmGwXPnyNgaUA5RkwWcrE3hTRQNMo7nUSeF",
  "key22": "5nyK6QXaVGm48tftyvQM1pYpykqgaodWfJpGqUot26oL7tszcX61KvA8vLmFtKA8zhCzjaQHzrW5Mj7AkHmeYtaz",
  "key23": "29N4fCebvSKZVNFnFEVHQ3vzqtJhHcJ3jeLfa6GpU4TD2U1xpphQHGhQk7gbuvSw4DPaUkrxmTUyy2LdXHimBEDP",
  "key24": "QatmkdAhxyX2TPPoLQK2UGkHwRkAjQFdJN4B6bMyLzxdWPtUTs5WumLBeA7UwnFsUUwFSVEp9hnEHw8wM8ZJ9o8",
  "key25": "2Vzvg5L5tb7DRwhExAXqZF6pYDMaDxgjhmPfutCyVjYqTPuMMTHeadCVXvumEiDotHC9YQqothcNMEqT7qBztGSq",
  "key26": "ijadcymG3Qt2PSknxWskhko6vZ9S6sSYqn4FHkQ5PJQSNcjc36AWVHW9xkGHGp7tU3Piwcq7BY5PzYARj3x5Vev",
  "key27": "4HeDhAeHcKhKqpBeuuLpNXMFt3Qrd8NJj3aHqPd8wNaxS1huodxavx31FFN33zqDTHxZrJvNKNveG5VJE8MPHGh4",
  "key28": "55oVWCX28TEzNAdqcWmCSTNTtZRjqpPE57xH6Hbj8LuyAtUb8Taf91aXRBu2uHqipMDsUb7CyrDujzKZDvBLVJyC",
  "key29": "2WJTCZxFuGxrqDC7ZZfDEbCq6G2FgVb3XUiYuQTz1bxrffaud7sdsmVawD2V78UGMxYo6ZN2PAwEgEztfbXGMENs",
  "key30": "62Hmodq7gBqnu4ZCMaABXUVtjULK487S96JaqFoHgEyDTBucTx9wHFrX6F8gQYyLpm9vRiV3WjoqtFYCDFDi14qj",
  "key31": "HCtNPjvaGDUjyXUvJArUdbLhfHQhFeEWGamN7stpR4GvjJ1fBjD6Tf5iB6UYjnfwV9eWZVAwkb3MUhs26jprYmr",
  "key32": "3BPBdEeidXrWZ22XDE17s9J313dX7GZKUgfNzFJVcrFuEybBc3uZBMstVAy9X5HJMJQbgxFxdSx9wRUhi8NqA2nz",
  "key33": "mrcu7WBBD9Aj7EYY59oJbbyp4sR729qGSGUNHbYKNmHWUCWETBBebpxiMnax1RyGBCkmStoTdsYjCgvmLfh7Hsv",
  "key34": "3ZcHqfnQ2Sqj7CmWbSgQbosYuMK39fnGJuxKuWmHZCdN5GbEw6HzrFHduLTPiPwjhNrRA5H7rs9xXSgryPx4KkZm",
  "key35": "2J9XXZXWhMvd5g2hDFcqnSjxj3ZHQ8dXmS9rLrxS8REFhkcKNVmziyCeJGpzkL7h9xdidJCGMbHoZmBhi62noR4J",
  "key36": "5MXpZSjBi32guFre9G229TiZEw8ZrxTngjrK594hXXGjf6zSwX2aEwA4QBPa744WHsYwGL7pZm4gEhWwEcinWm2D",
  "key37": "yaMh4rdMSMC74rNv7ecGoPtNo7neC6VMDjYE4zSqRcrHbtXh8bH2D35LXNKvLrXWLyoFMGXSWyPbhVEsrMMyE6s",
  "key38": "3uqZX6Y1BKspqkd9omyrn6YJx2yFB111JhUxgmEvxSDu1X5LQCgYSE9h74cGas3QH2uSy9ZKnitfU7rCwqT8EU2r"
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
