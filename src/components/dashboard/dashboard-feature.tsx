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
    "4MGDZpR8sYuf4c6a6gEbBEenTYSsmW3V7cKzv5ahGsvt3PLEvMKeeG2v1Dbw84b1kTonMCDPuRtKvKvrS8cvs36U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTtsx6b3zNEGrghs4DTeWHbXgHdu3jNqWr46LALAo74wctUkdgXxUc1UMmimAUkzyPUUYFk9QxdEBMetjDBSgG7",
  "key1": "r5NbaZGU6qGWGhzymKiJSorNatAjCUTyog79jo2pUz7f64gU3WbfqXMrubmQJfgMbsHh7PcUz8P2vGVm86xeMT9",
  "key2": "45vYpwgRG1wv67cSZNc7QLiB9svJgFnEGyTPa9oYpFVQGYyrCyRYQGTn4K79Nv72YxaRHq3koJ7qnY94RpWzTddz",
  "key3": "5TUjrpXBxLZD2T619Wtesf2Fjxhes4ZSbdCof4pXo8JhHQsivRvLJd74qVAk14sjjdtYTb1QP2rEjjCHSHFbLZsR",
  "key4": "3XWwva4LjLzqgfBx9WF14hCB94hzouAyXbCZZFo5Wx6yKXTY53j1fP3Xhun6ZPSjdDxUssWaSAcoVe3rgs8Zp7WK",
  "key5": "3nv6FvE41uhmmcp9ZLoxKCB3V2g8faEAdYAK3NLJFFr8so9vEnUJAdB33CS1ZLPDqtoaBtoL7eyVidUXn28Hds9S",
  "key6": "54KqVq7AbWQ7mZqg8uY4GXaULgMx7aEvcgdduRsyYq1YT6iuVPwdpHJ6S6WZCL4vgnziysVJTn4MF2uWuyzeKzQq",
  "key7": "qSc9CzpUcYDeHqPE9cGoQd4gNpj3LvcqkQgh9EtevxQTcrLPdZ3UEFRgaaHXBnFK6Kbv1wcF7iHjbyHDeJEm8fa",
  "key8": "5nAZddYNJMj668kxFKvBwJCHuGEXpyY5kke34JU2RwTuYea2zPYn3ZqdKGeBu2hgUodvJe18wvSwngTpZYby5iHi",
  "key9": "5BzBQ7vt43ZTeoMMnTH8TALitQ81Zh5gDVj8RARvNJXgjcyz1mTj2z1TH9scyyFVMD7SAeUepHcnMiGzu5b2Je21",
  "key10": "48pqzGe1chuYnfg9RsS6r7crEiiSuLkb8hcVnn93VwPVNdcy7vGXDRkMB2LfWmAj9o6dzRcX8DiwG9zVKpyQ4ZfU",
  "key11": "4f32sTqxNAqwdzZcQqG1oLyTA9s7g1A9Dw8q9fgMmomAV4izReuEDHRrKi538s72sAF4LshVFP8T11WVvjBeaKPm",
  "key12": "5XKxRRYjsAnuaEgnxSn1KF4C5AXtw8zp8R8shxn3qXvxiKnHkYpf1hMEtkCqZpKEjh2QUSZsh5CzWux67QUdQMbg",
  "key13": "2m8Ug6oGATb2dGDCy2KQ7BYYwUKnEFfdd7qP65KzJaarTvQ25L879J1X4VKX45mXXCQdsygA7jKCmA2APbuTzwPx",
  "key14": "31Pui7pGxo9YWvTVprAThvESYZUX15fAu7HLm1mw1SqyxxpZQKygNKzuv97sVjSvFd3Qi11ESQ7UBNqhMEPRTCjH",
  "key15": "m5wFoPK7WX51esXD3EznpRLZepjhJVJi56bxNy6jrHfh6NW1MmiT2Dgc6UBU99yisjLKJGhDcL8KSAoWxqEN1EW",
  "key16": "62jnFCJeG8BZMRtU5qaoNyJUQJB277TPDHcSoXVi1iM8e21gR9arn7L7LELakhFbZdtyKa4y6zVXSunwzGPRWcgo",
  "key17": "5Sr9A7za5mdwkmkwihjPXQQEpv32WVxX1DChWNanjFKwchiSWwEtAMLie2Uu6q7MBZLz2Jxk6fgo73hPHuneLNvU",
  "key18": "4PpTFeSrTfaNB9tfXb5QeQ29fYWS757kEgHUiqrjjuDQrqpxZuqGezGKsmemQGwkSgxLAE3YxDULkA8WCLQym1zG",
  "key19": "UjQv2EJ1Vw3qTCtGrqxMve33r76ggvxpDHwbPccNwMyWit6yF4UsnFwsY6UqjwtvZW3zHonUemKQJTeCgg1nX73",
  "key20": "3AvAubJtXyNtCCS5vxoTc6XGJ9PDzyZS9zfcwyNbD7ECTnTvQLCmPxb3RNZe7btyRq74SD3a3rEyjsCHNVtjoPG2",
  "key21": "5yMsPe6x4bUXEzhcRybD44mdpfKcwCFdhv1hX6tKzmTBcAa93WMwEKFakQNamzQrmPhP4Y9aAT2XSKSkG8HD8rJo",
  "key22": "uMKc6hn5g2b4dwcw6R4gTDWRfNh69pw1pMZYgqNYsRoJyB18xVFyCZuo3aS3VdoXjaxNzcAp1RLRXWFp3Hoz1dT",
  "key23": "42UvEfztJSDz2mgNLPMJGDYdKTLAZ9Hjb4pPitKsq3CX2WcdsYvRuw4HyHGTm3mZ9eW4BzQoZDMNPqwns2odKa5u",
  "key24": "cGudHC6ncJufXvZkwLcSsaqSTiWHouLTYRVtHr9YaDaU3QYFqTz8vcbKqrUUiSEZnwrExsgeTsWQ1gSjvnoUqj5",
  "key25": "3HfutKChsPn9RDptYgZkLQvnz9wTCyqJPmjUusQZ6rxguyfzKPq93cn3MThoaA1GYEu99wVShijPP3yR5Qshp3Ai",
  "key26": "3qnZnyvxRsa4oCkWHPcmWUvdbj9RRmgSny6Z1wFj6k539oQkT33erSFMC5x3tgcD2daTfiCjDC5jHx3CqzYYzKfY",
  "key27": "2Wx37UL8WZdZMhWHBHgajSN9xg9azwjFN4vyd4cTjFWyqEfGh5eiz7DcPa1xjXtAMQa8jxGD5N9jevBrdytdzpuL",
  "key28": "4SnsWqV6r97DQwMDUcd5WEQuHZe8ho3d7A2QT2GaBpPDqXrT8yDepYQia1K6QtPTURkET7nte8EBJFyjfYfmQAJY",
  "key29": "5JyPoBUCZ6sjFjW1Ma4uMpW3GD7XFgAwWU1NvAyg69MtWLYzuqpS54DKdmMCyQSFinwQbvzceKMZ6cUZKjvBy1ju"
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
