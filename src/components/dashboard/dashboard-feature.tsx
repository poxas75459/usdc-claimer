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
    "5buTuZNGP44axu91N2ZLS5tpgqp3XAMSLB6nQEcfJejnyFEkWNJsqaw1pYNvc3qhJyPTFrvE8AbrpfHxz5w1KnzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SmxKqqFtag1iQfNAQxLU3a8MY8Z4Yu2NAFokXYfiuk4vDp9FZgFUJB3nDLac5DfD2F2KmkkHwug98J9cPuGALy2",
  "key1": "5fPKATZSuLH5imjeosjuGgxp3nkbFKYELjxvKZYLLkAbMRn7bkb7wp3tYbZidxXscQkLLeiCxpv2PFcuvrKRYopW",
  "key2": "5SUgzxS17MbejhPt7NXG2CxF9KWrxebw7XatSrQ6bVSntPDCW5GwUxVU7nsRkH2AorzaBgdfXvoeMBDbNLvgiv7R",
  "key3": "2ZDwvuUnHgaKQ8338BfRKEoJ7pNnK7zk8EjMWNCs8B3kSnHmQMYRYKnHDLSaatasDQooeW8W9EcG4cBLiDpQHktQ",
  "key4": "2XQwyVVKYxXMgo9ddmvXznDpVfjYN7HKnrMXBgtDhpTofz6QEFVPuJvLRvi6zvyAwcsjUy5Nmfge7bKw34PvXJ2L",
  "key5": "2VsM6KKbjQEp9YSXcPT8hiuFfZeTjwJnUj43nzJtdghKSK8yrUknCSC778fb8PMp2C3cQrh2RqSyShnbkDkGJegM",
  "key6": "4ptGUENbjmYmH4RboyFFC1SBKxBNSExQeZbV4TVzuhZ2pevbA2jrhytKJTLCevqoqYekgtHSbuUbTZrUkV6s1K7p",
  "key7": "2awxsj6MfhQBtytFViXvWsZaQ29YTkY8gCLCiAtdFnqcABDFtxM61sNAQJKrv9z4hsRKwbiRmrnG8Yc97hmRCg5o",
  "key8": "47uRmSZSCxNZR8AEjDw15SQfbaL69NiEk3YU6G1EwYFQ8TokXXM9ATNpVgxdEQwW23iezqWVxGL3zF2wX45FAR1o",
  "key9": "3c7vAaxSY52co9pCh5kJsPh6PUevMzXHB4Aq6mwG93jyPC31S9PfsZzDJE2afexavriqZs1GfwSfVM9vMWsfidrr",
  "key10": "2YyzdWkcBB6xhHwzQbdwXbTFZEBripSdvP7nPE5M96UsbtTGZNuL9xhZsEbXRV5TkJcTLaWQrTWZs19FX4cizKyH",
  "key11": "591d6KfqHaFaAMqG1rgWRdzpEtuXAyUKHjggDMaBK2KR3TWSXqqCYrNtZg2o53cPwFdMNQr6jAacjA4tboEnNrCs",
  "key12": "3LD5RTav96xKCkCizKi351rVd3SKU8vpAqrqJoYmch5aFYEFy7HqtdhjDCdXTyfhdJz9ij2vC1DoDVLhtedkZahs",
  "key13": "5FxFPTBCYdfqkj5nETs5SApGZfjM48MNz9HF4fgiCGsXbN5sj5NCegfQY6FRwST5XTe7cgN76YbQbGTy2ToZTCbw",
  "key14": "42zreYgFEdTRLtVHifPTmqbZKF2oxDk49Zi2BMHU3uhxefjy3iDiVk8q3LeFfzdfYVu48tsE27NptLQnJY1gWfR9",
  "key15": "2uud5MPCLynUEnu2WTfYMhH7PbjSK8df9s1ATgau7jgsEj15hvapfsT7UFYfaMWmJHYtxprztjVFNpovSU1bN4Du",
  "key16": "3EbVbUyLtzKEMBdHYfqtZTnDLcWprxzjeQ8DdyN5gvTLFuKDADJzoT2hANFMoMc7U8mZF2CJwxwQBs85ipAZG49Q",
  "key17": "5WrLdn2oTY4L3xrwPAgp8e9jEakWd8EbJXvsrj3qqTJ6QSdh6ZULUR7mr7P6CBVq59kZFizDFv76adwfzzTqYCSv",
  "key18": "5ZJK4SNK8Vk6PAmHycFYQyW1eJPrntpx5XgZCF9N2mc5iVDNSvSBzEVmaRhj6BnehV4xtCVvPGEqNASi15mcVWYa",
  "key19": "4dhpZBF8EsWsbbPbwQyYj7SLym73y13cL4YypRcSeCJSUjPquU5JvhQ5fMWpAW7JapiXKVt3PBLzfAn8dD6K79xD",
  "key20": "3gC7JspJM23YVwMjjJDftJAh2Dmu8Pm9zFotSUviVJp8bGXKm1XWnhQJfFeC386Mnum6tGY95e7pLzDxpesYUSpg",
  "key21": "2u6XscMmLVzAvC373FaAMyWAFgbPqwJg9K7njSF18DAkGDXQqy4nCc619QX6gXrNTrvxkDhCHs8CNq8VWcj17Uhn",
  "key22": "5WcZYGZGno53Z724QEmbW7PsomtgXs82ua2huFxUcWLw3F7UFH8Y3kQj9RUdP2PqvMvqdydfEykxBSmShJLv7LkC",
  "key23": "U2cUMiz4wePKsG9EfMzBQaDrY2iude2J8iCwNWooAPaANn7JJEUDFiZUN1s5maXorBq8bMapGNYEn6XLmCZxJoz",
  "key24": "4yLQ3Qokhnmoiq93tqz8RfNM1RHG3EpHerkVXtvQRBxW5EaugUX86LuwGJ3AN3bVUbpkHhyGKboPKgDFC71RQEwx",
  "key25": "5SbqjwMCGGMdMZomw1JVDoigVLMVMCryWi42DbnxbL1ue83goo6cvRud1WhGNfrMtL8U2X1PAxi8dCQ3jGCG7CYK",
  "key26": "UHbmbRbP3fVKPaRY95JJbFYxnqqYyg8v7JrJdQV57QmhHkMTihkbSHY3BUkTJrV64fbrMwjJ2kkdiNfWa1aRHzP",
  "key27": "2bcoGByXQCyvwFESUo377FiBrEu3CakW5qgYiavEVXD5UMrHMtLRXSpcf2rysqqbhRPCBMu3Ft8trhhZmoke6g3G",
  "key28": "2TkE17TTNZk432Zu3sr3NLhirhfNmm2jkDaNCrLRcthd48cvzhoNdeEPtRpfewkSnnNzF5cwqRTCDFVSyJ1G8yEw",
  "key29": "5LvuC8R8SAj2MFm5rr6DMwTpb8RcyRGLDPzepDf2XVp6Yq7fHWH4xBi5imNYBd3BbKgGcURctgsGh3SVHMkbZHzy",
  "key30": "PCWMmhST2Z6MRiNN588oFGoTZK8tuU15uivVvAGYm2Dvr5LB8X9kxZ3LJtEGXLukFwWjyH435PfUZqVyYPiw3XQ",
  "key31": "5ufH4UzkfwNL4jMSb1xQ5AP7aCuK3mDcELZ29FgKi5XuhsVxjU3kHQvqPUQugVS1UibuCXX7UoKikV7vBtnEiFQL"
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
