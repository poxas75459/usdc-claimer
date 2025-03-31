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
    "5iBN4fTuWbRTEUMEediXRULBDKdW3wVqZuFcjACvjvn9aydVQu36AkCa5RSYfyDzAELq2qedUfLHB5boKvLJHz1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r67q6veQvxvm277U3ypUiSbogMiMwuKHbokyJxeJFeRtax2WyF8zWyLtP7tFPRrqtbUY5RfJ5LhCmqdNXgV7r9u",
  "key1": "5738h8zXcgFBjvoGD2zzxkhi4oAvAkdhRN6hgFgAjAiC2mrC9pCzzYdcSrxYg33pFiQpkGQYzgtPeTEp1wmLz3nd",
  "key2": "4FTCLVHFyjYX6kxB7iH1oiy9J7zgQhf2yiyJ59v2HbdkJSnveEeRzAkkjeoq9xSb8y38d1vJH9kBkYCgAvexHPHE",
  "key3": "4se9NGwoSr5fYDT1izNeWC146MucQhePrKfFtsKcB8cQzPu2hRRaw7amNnCtMPhhVYz8LiiLTvGLQ47RHAENMNyH",
  "key4": "NTkRWdidxiabQVQqyYUjzErqwvkrvy7n8YqqfUWh7LpXUUrgWBT7dos9QhzocmVx6KQVQiUa1Vte6cFUg2gfukx",
  "key5": "39VRruFaZo3E4it9dQqXRtaoShmnHfhr67n75fWud7rDvyAPfsyw3GSiT7BeZyDBERSqixRYGVApRSNht6vXVBk7",
  "key6": "4SSeYTyakg9XUXvyfqSSaonLE3Ua8di4Qys1YcssNvyZo2pDd3uNqDCs8NFZCRZSg1sVtQqzWqmAX7h1K3yXzDEM",
  "key7": "3HBqxAfTntBencAsPX2ppDGgU2Puiw8LVapR7nFv1pU56w3z44yL2NzLNGnYAQAy6ZLS8gk2jt5Gt72aVm2UPED5",
  "key8": "3nphodCELh5sSHiakvScVJdMEWpScs2wm8HpP8LTVP2qQdMG5hTnEg8Qu8RHFRcq6RkiRHvcwt6dEoYgK6oxNzZ5",
  "key9": "2UEjCryh59wHb56ozVK4n9Zf89gqzo2hVx1LaEARPEzUXTgQ1Dt9eZC3f7ziTNZANKTWZ99gGnB4VMW2Hp2xL1g2",
  "key10": "3urPdVWCDjHT3ZZQdi2NGYs1QcASHXJKSiMMDChHSa5abH8P4XpwqgZN7aFGsaqkdp6MG4vpGSdAKjftAp6M3yfF",
  "key11": "2s9T9arhckSrSUZUfqvfsHuVmWbYBXvZjGr1cpGSKp4qrA6neaEugG7ursvD8Nuz65MNFKZYiQVLukWPP9jvkDyi",
  "key12": "4GRsSUQLRwFmygvcmcv9t2Nbvti9rT3FZxTDvekmwrNUWtTpCTQQkVKTwdTeaAw3PRv7FmU29kBB7q947tgGgG3N",
  "key13": "4D6KdRZNGwq1W2drwBBsGZHfwG3jSA5jJ56jUE39tsq98EtnLQ2DB1pf2fNDuBaZ14axJnKuqCMqG1Ne9ZxnHVGi",
  "key14": "5HXooq9MDhfeGoUnVfV4YKFfKMKhZdb7fUd2L7A8k78MQhHq2ZC93Y7sw6b4KefgcLiHgQ3pnyHhHK9a5PctTXL7",
  "key15": "nTzXvmhVxEBcLboVqKrWSKYZ6Qow7BB6Ra41nhhFNdHwNowVGq1NhV4Qf6RyYd8PmbQmphjRFZF2MATLJwBgUM6",
  "key16": "4cXNq6vYgPJXNZmKYBAT65g3RionxxM2HPf1AQRtSFVSfE6emZWzR1UUJDTDVRmi6oEJ3xif6jTi5eYRXME9heQk",
  "key17": "3r6ovzxVxRqX8gSeyJ8nCZfvPf8gvdAsLjE37ZNHHc6NRjuPavNvyCWPfEWqMiEeLcJJDso2NFneMEDQZ8HcQhQm",
  "key18": "2W4NtF3oPqztAXuHmB9NRWEpDWzf4pGpJ2q7CfeV9ssWUe9WBB6kDHvJrD5AbpnCsY4fsnM2MEX4crtpVWScEJMG",
  "key19": "3aLvqP9KDcmRrebDfbTLiAFFwEtTDfHWm5dLrgiJEDQ3X6EJHKegJk1G9Bf2Lafizck2fTCvP9VUvfUpu9GwhNPf",
  "key20": "5UHtVZsZDzWvsr3BoQBgHWtoUc3bxX5nWz2hKSTiiMudrpKExbDcsDQWgazoJwVpLMTZ7baCphi1oiMHhWdw3C3i",
  "key21": "44Urmrca56hhiAJeWtJT7EC5KpzBYjuMrKfEU9TGMpcsuc7AFBAq6rQw8bQfaWstuxpRf5bTsEMV9YPNPidBuEBn",
  "key22": "3SAZZNAE3AqFyWDkjbYPs55BzHXiiNp9n1YEZYajvdGUuP6kGokoLXwQea7Vfm26eAfC4E7rhrsKx4aXBczT1wKd",
  "key23": "5YYSKaCBJEtCgbQUqCXJNrgxmxt4VKW6vE89TeaX9J5FZf1XRzfV9MLFpKNk8zJ88Q9pns3xEG79b6PvASG5KHs7",
  "key24": "5uxmnGbZbuSFdPi1i6M14aewCtorKxsjEgb6JFD2XmVTQmP86yj8o5zux4LmhFEUfj3uB16ao237gF16jeQmAm9A",
  "key25": "5MSU8VpFsy6JnLArQoEwm4RyBzKLcRrqcBDpf96aQhpDAk3J7HCsdnY7yW1hmhkjQo1QkYCqrQneWXnpcP86eEY3",
  "key26": "2qLH6nvuSka9XZycQdN7B66NRZq71yMtaxywBPfjTMNG2TqKWr4jUBq9KqCS522UU8AP1YRjWNuwnNhkq1eSfZ8E",
  "key27": "2D8uWaVs1dtZ7hMnC69MSV9jA46icLh4cNahwS5XkxeAyFgCpodvd4rTACDLRNvkhKWZm2YpAPU1XYbT7AHNWmLh",
  "key28": "4rtFL9fXpPsWGf1i9Mje2hKLVgZGJaAL11s7RCi66z1g4iBC9STQa4UCCrKctuViUBDj9j7n7DnBfof5qWmgmgrp",
  "key29": "2zAYY2YsW6bnZq5eNZfXCF9ZNpHDje8ZH3jw4tuBqZgWFR5QGTgV8gvxKz71MPPTM1njTXm3MMy6pdnnRTRYLPFf",
  "key30": "3zhD5cXwEDEHjCjZa6yBjLnYLQMGtEe2t82VctgfEjR9Nm2tUdvDBr9Ffa4TDsK4LBfGiY91PrTNNkDHjE8nYUZU",
  "key31": "TCzQrZWhwTxFx4G2J6xk4sNxKJmQHmwhzKF4RPgFhktjK6RtbDA7tsa3DrVUsMgsFLdgcCcdyK2kTJMKVDvrzC9",
  "key32": "28afZMcVM9ZDc1rdmTVpT4GBqjdnAjGZpvxJnVPuNUcT5NcowQCkBftVwnNr1e2wH5iFif4Ri5cToZUiWijFQccc",
  "key33": "3jKWZmcJtyQofnNVv7RE7AisWhKysu8A3oVSEv2YzxQNrUCZ7xDen7iS9TzumpkBpxHnAA8pX3Ncf4dg1FzKyZiU",
  "key34": "vw71uzoJXPSVNexx9jSHtnmuRN2UuyWnN3QqJGiPeqU3MAonDYq6fUdD8hiB7YP4ZkUWd3DsuhZYiUCikc4HaWr",
  "key35": "5hbqW7hcZPaLYuhAAR4yUZYp6mB1oBbm4KrAkXPBddJjF8VDwe2Zu1yC6xdttCbGCnNJ9CndTwVEhEqiPX3daCbc",
  "key36": "5ynowD59d2TnFYPrxE3x4qEHiN1zPedCZKNMKxnfjp4SbTSHDzcSHfMpKvCp2dnGX7ZYS2b5k75CmaiJTDMhs7UL"
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
