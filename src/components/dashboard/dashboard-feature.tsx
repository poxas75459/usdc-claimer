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
    "3HjhxAQBkVJkbDVu3aYDmLgH9z2C763uc8CZqwrqgcvPPCmevAWtEy5JoL661vfDFHW67jWrNRppKWBXomRpjkYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TP5eGnmxxJvnWC6DPyxfoatRsAQx5RcsYDoVVcqNyTn54wV6rj1LAujZYf9JZKbqPzWLSsPsHuLU9GsT9Zn5r5",
  "key1": "4Ebh6a8uKAAJd54D5CZ4XALu1TfhvLDTbx3WhxNVjqcZwMNYmemuMranF7crH3NqpEdFreeyxHJRVhEr4ZqnPB1M",
  "key2": "5eW8aEkNmx11enshP6kFbDwkRFRAUJ4jsz2tyudv2oaCqzqQpMd9q8R88tfD8SNQnS9VsWJzePDr6ofjkANNhFiQ",
  "key3": "4coKvpCbiLc7BfJMvcdwWTwCmS2GvvkXiPL1xnqg4iRizDMvuXSA2Axth68ZGKYWPSNqm76WxYcx1EZ5GuKp8VX7",
  "key4": "2DBbak93YiqeKZjfpQPKx32PNrvNZwbKW1U3pePdBhUuvLsr9nM5nL1goi1rZLErqnYejU1qacp1DLq7WrMJvRFV",
  "key5": "4k4BWZwv4q7QocGm7RWLtNUerN7yrDVmAZVAzwoYavWzzfv6znmXW4pWfm7kWynD4KvaCYXCfy5Rbda9Nbzod26L",
  "key6": "4uyM7hbuhi8GbPCTGWXPX5rNeaNCzPxGJyYPfcX22MgyAwe4CycS81nZaQrWJm4cChfcAa1b8goVmncqu1SZvZF9",
  "key7": "5C3NXqdFJDbbd242tr9rDacQhuaax5PyTbjidPshm8uQfaqqf7RQp3UycCZsEv7aib8yoV2Kiugt4cXKUWbAGS9y",
  "key8": "RZUVHz4enHVqJ8j3tFMZM4zaLcwx5MTqvcFbEX1Jf8NDNVRRxzgHz5GMWNKkqmRSXpy2wW6ZRMgKU3WLRwuzyXs",
  "key9": "5k7DRadTn5SWGXFXBzLUrunUeS5PHiw4kkSR4J1PevFXGduXybwhiMnVqrf1F4NB6XrYHF4bsh8zvengw1i9Vdwe",
  "key10": "5wJpk9KJG4ukVuqz4JKfin12HxzwhvQNnqhHJTpqeq2S1HaN1Wa9P31nTVU6PehkCAZYvFT71qt7DJnpSjmeGDgv",
  "key11": "49Wfp151AhyjMFfcnWXdYvnadgcVu947jTkpveWWWLQ9bq86a7wP6FhjPXkPXhi2Ys8RnWudViqiTFjkuxfUM2Ey",
  "key12": "3eCmDcZBafogVuvZ1R99xZGUAJvaRs5bFShwTrBy8eR9irhzZyAkmb3X8H7bEWQaP1HndC4hfGHuDgTXRYdZD8NF",
  "key13": "2R5Wg1X8aMaAfpZqNZ9jNV2QCBbRzyh8jSHxjYeW9BiKKVbrJ3pg33CEKjoXxS4vkwsgpd94xwkRYQuTdtFX9n5W",
  "key14": "3CR1MTTgxjpu4KmmVYdkSs9LXscc2iR39UfT9gxRZncniLGPCteFy5z2VTCMTFnB9LyetEtiRnPkXCy8JEt9BtY8",
  "key15": "1MMem2E81vs5HCQYhMQh97js3YupZwKFjVgPKxicQ5iVj3p81W9iAbwFbDUhGZ1fsnr5wHFitmyWqPouM7UnT72",
  "key16": "4phjcgmQMyEMrhzxzF3tZoDHjGabaN3zXkAhCZwvN2i6bJUpBshny9739Ro49kE7D97utxkK6xcpWawkCtEivcT",
  "key17": "2zAuFFrS7kofRQsL2uPNESN8DmhPb24oxiPFdqWg5gGE9z1yBP9WFNdgfsDgDYMxgS1FyiRFmKViJNqGhPG4GdPB",
  "key18": "5kF5ss4Js9w8uEDVuE7FEzS42QtqJ7qcTHdECBDNkKJmJcWKKNEzEm76StukjSjCjmmBeZ7W16iT8isJL3M7ohK9",
  "key19": "3icCD4Cg13iZa77DovKKWQo6FgSP661NMZRHXBZZoBCogPgMQPMUTGyB6QSfKMpoN3HWGqnBjqiSdpyRTb52GHZZ",
  "key20": "5dhbwtbMfue3e6mScapmThquYoKj4rATeDp1wGYKcoHhXur6o5aMqQLGJNBt9zFRHJHUQRuQiaQpC4GhvaULrqzS",
  "key21": "5Mq2Zh2f6J43tHLkkgpTiLDKdDvMSdRZmnXuRzHWFbG2oYruv1XSdNWV8dQmBj61AXW1TpUVyRFXCKfhTeyx9um",
  "key22": "3fnSZFQtioYxhVLwxZTTZiYUCvASBY4Hjy9CEuXmux8ubWNmgBpkW6HQfo1K5xpi8tbNp6au6hs23sBst9V9vE55",
  "key23": "5shQMqDmBNsjjbivods2yjWHGwxuhdhMSa88QXmTH5Y9okYUffFDaRgHG5BK9b5ebt2phwkHSrxX4r8Frkb8gCaX",
  "key24": "4HQtDs4EbBYv9CJ79DV2FH5rzYa647YPpUpuRMFhTgfbRaZDMroFwacFNE4XeUBrfQRGCU5TqAadnxFUetqnWc4w",
  "key25": "25Uu2SBe9uQpWtQ5b5e1Hz6Ed8nkMUpVSeNpesHgWQnuuvjgTxp9pkDNGzGpgXdTURxBtX87cDqc77SwAVMhoK4v",
  "key26": "2XfPEC4xFQP9gFdDdo5ybESwPrFUxeb5nDrRd9RPEPHY2J9V1cLbhdq4dKZnELSqE1PMjFiy6TxTtAvGnK9jMTs6",
  "key27": "5LWq1PWm9Vh1qwzjxYbuhj2BxSAz5A5TDdfvzUU5FGZQ4Du8tbtMH3UqeVScNuMo8JbueEfSBFPfwWShX2sX11yL",
  "key28": "5BNoBMzbsbdj6PidqcqMdC46XaoEbzLSABtuMpa9o4VHyMagvYQjcr4Txp6FfKnx597PDhR1AT7UbjnnVoYmW8g3",
  "key29": "3NFeTy4mpb55tf2qCP3G8NQMT2ppXpdeFLKMEtaqrfHHSmoeX8k9gDDvi81YNrPxqW9P4UPgA6pPcoWwLGbLctFS",
  "key30": "4YHK77Jo31MxeCA3R3x3yd6VnpBeHdYa4QYCmAyAbJPm1Anqbm2tAh2udsThrdJYx2L7Dwm8hQpy3yCibEK2zx6U",
  "key31": "2zt2M4fayamFRx56E7VdZmJ4t8B6xeyD8ADBB1UsHXN1SZekWjSjUW1ETerFDCUUaCCzcupSCfBmCSoL46gETeTz",
  "key32": "3xeG19KNvEZAQo2QQZZy76xbJfQyJ8ufnAkAN3dpYuWfFnqw3zoUo7zoGD4SrjnvNxgbNzXEfrWkaxPCtsm9UAiC",
  "key33": "vdKHzqH7GsiDLS1XSi7tBH7kE1nwGskphCAAYD3FBzE2dZwEPULnt58wmyPNM7dnKwJGvW8E5Geu5xgCqPqaYq6",
  "key34": "ZW1sVGcyaonDgiZD1yySckZEz3qBDgJ14h94WDEvABnabz3M9S8ThkWc27TLYHwQ76pPPrCzzjzNkNEbmST75Ss",
  "key35": "19jYHzxPz7JNspWYzHffy8dvwtqj35ybKMZRsXvpXSg99nnAd3mDqHA3csTe5ZPTfiZFP4ePxom3vnDzsJMWUfP",
  "key36": "4HP6SZ58prtRhAQLHBTsbFbdjbLUdnQZUpMuJuRnXFmLmDuqPcdsPLA7F8PKvyBm49iXaPQ53PxNmYgauwTx4FWg",
  "key37": "2wUVvVLxL84WDwMgxrfRo1v8iurAsYQQ1YkpeEGyrpYQkDeDL13T4CwRraLh2qkLZXBnH4cETNc5j35rG79WuFYc",
  "key38": "4ogVeR4eLXo1UfQxLcstcbp6FeqEuKUpGCvYPUSBfyqPuro66tHDA1NCkiKxXCgeomK8c1S6TFrxPGcv8CbRR9n9",
  "key39": "52LrtCd3PTRhJdahVrPVnFoWRzb5iXRP4hgxFCMWrBG4Ehk7beFdTojES57YrTasv6HvCpTXhaFTtNwpAVD1aLsy",
  "key40": "4Xe6UDuA9LtaNASm7Z2PrEWeqq8UiJbT1MsTgJvRvhctGiTWm6coWUFAPm46GSjsvUgcF6kDBZpG3ng5kC8pZ4DB"
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
