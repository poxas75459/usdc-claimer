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
    "3sr832R6431AvTEfX57HGs7Zvux2CW48bu8ehN1PeidF4Ppc2oysN5vdJdzK6Kg4aT162fuqfMeeEU1e3HK3rgc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QKvFPAevNoXc1cUoZfvHT5oPkRT75jiJDx6BH3hgmCpicaKpBLfxeLqSmRUBnvS2kWT8NrwEi24nrgPbhKfQyJJ",
  "key1": "3yMfJiL7q2ViQSRNd7r8m3CmL6KGK4NV1RUA6A7evuwK1aDbD1SC6Q4rkR2jY8k4pSDPkiwkXr4gLYjUaRK6GP6s",
  "key2": "3bj9b5QQHG7AfipEaTPiTRyjm1id2WcZ1eUkwvVZiCSDut8tQdZqR1ryb28n4wsRBQdXUPhn2ZNJEsFoqbomgmjt",
  "key3": "ptWCQjDMeVxhXXQDuoKEh75HpvqWuTvurnBH9GxokNFAqd3uW999UVQvf4ypWn4sQEgkU16PefsU2MhjdGMtD25",
  "key4": "3rgsg6vCsJRu6JfNv7K8cndDz5mRv5yECWQKq69HXeyDujHtNADcvuTw11g1kHcsBaY7VJjLh4rVRT7eJEnWEDHZ",
  "key5": "44c5ygNEg7yAzdWrLzZV1nzUSzJpY9xDQbKWmgADjhC86RHKvcno61hKjcVxS4q5j7U5u1xzfWqwPFiHqkpFqmsZ",
  "key6": "S2A48KyVLUJ3rSgnKaf2c31vcbbfHHQ7X3gpXMfkyfrEfG6BFQAKjHMVmcmx7ZxPsouA8RX4Ln4nZpWTTgyJ2Fy",
  "key7": "gVWR9EYpv1jG88yQYfeTgmEedztV61pQfNuDN5oajBnqPqnKd4iFMpYVW3U5tNQ5NSs9knwfdbHLKLhezZprTb2",
  "key8": "41agisdZcaZpQ1UhG4KX2Try3gSfrfVCrvKTHJd76YicHAYmKD23uEFqJHJwW85BwdmEDGSjVdUqr9Mvpf1wEZRj",
  "key9": "5G1H5HHkCScThguZXH4TaDyBYqRjzavJG56o8ZnyF4NptkUcpXaetLMaEqZENUU5t5Da5Qb2Wgu35N2yuzUnwBgK",
  "key10": "2CTy5x3Y6UMPW79tkYN7wjTCw7WZm24n4yMcbZoxtBqJ8r6ZiThoBoP9ziD1sfNPakwLf1ENx2SweEsnh7QzYTT9",
  "key11": "3U6PLVuew6n77oHNq87raJMg4oCu2qy5nE4mUkEkXEkXcK2EzR8vLa9iSZd1GQhcb6fUDg5tjUwZWCncL45uicf6",
  "key12": "3X2JEp7c9NSUvsRgEG3VXEkokXdDpi4uux4YKHdHfSCeRDzjd5uyAK11e5vwNzzDez6AdGciyRY7zVLBCUdJyXyF",
  "key13": "6765dHELkPJAachavuLkqMzc893nr4GfdLQb8wwDgRYdwSrVMKkoB9v9DE43jE5MpKot6B3xG8dB7QyCQiiFgUbP",
  "key14": "iYN2wUpLftgmH2y36GhYY59Ny2RHJraQ8RgrmN8TuDBz51rSuTDXw8jGkSx9kg1esunXGjZaMHyJMf83gdzwvRx",
  "key15": "46STXemvGk8MzAQzHuRfpERGstn9t5ZjFeNMd3V8h3f9mrmQHFsxL1rwJrR6fYUhaUDGgiQChHr2k6vQvhqZY5Pv",
  "key16": "Ztw3y12KBwUZZzG1ez8CWo3xniN564HkX81PBL3vKmEoAJWcxfacpLTutJ6cgg71UAiy6yc5ykaVbhW5CEvpPBC",
  "key17": "5XytUCQLbkJwCQhoDkWcu6p5wxBQSfd2Na3E9Lj46pTSzq8muV1kc4LjzVtVm5tiSHwrEwnGuiRwqwQRnyfD9td7",
  "key18": "4xnb52eSpaNy6m31493NPEBirm1Hg8LcCUwxivfpcbBkebkLgGyFoaS6XPrWEq2F1vdWvSq1k2aZLoJY5ayV5q4V",
  "key19": "53UtRZEZjs7j7jZwk1ckXsa7XVUV6F6uzrJMzGqP4TW35hcP9c2LkZtWhyDA2gSHcPwxi2CYobJpLxQv6Jb7aZ9C",
  "key20": "4zrZzqwfrNReG12hBqbiS2ANrmiN2xcrC5j5zAsgYfiL5zF7F5in6gTEjwgyr9mRPEdXdxkzobqSUcxjv55YQE6U",
  "key21": "2wTSjH2RD4ehUQK6ys9vzN2geKhpfU1RnM4yFEdk48Ed98DCkU6NN2EAuJMpekpdR3LUbuazp9ywoYPavH1yfU5d",
  "key22": "3vdamYyaUhWNHLSBVXD14Ky2XUpipKvma4RgCKcERwaegoKnPc7dMnEb3TB1bt6gzmCJxWtLdySkwYUNjyrtK1qW",
  "key23": "4kwzWPb6YzkMtnsgAP89gvJ8nH4jD5cHzhAKc9YVskceqsQvA5coiU4GF11CsVAmikUoP2aEBrd1Xmc1yjgPtn51",
  "key24": "BjS9TKRUS9JGs3712z9gR7g7kN7sZRX3RfiQ7zqph6poHNUB3u5QqUU1GSPgmvErsE9YvHG7DDgBTfCkYg5Mp57",
  "key25": "5pr37gJrTZBQzYBZMdWWzhTYfKbscouA77zcY9Bo6kZKS63S8Mm1kpCoWe7g6UyewDitS7qJkUnoaeiCJcw7MVFW",
  "key26": "46Rjb7oKwQgbY6fwaGiwuiUXPkK8ebT1odW3iDmG17xUvth2WYxgp3m8PHiKor72kmfchiCELje5En9Tgm748rFt",
  "key27": "2oUtFbz79QTsZjevedxpyasv9AaiJPy8MK7iCMxjjrNPyrN9frtnWCg6cPoCGVr7pbpmeqAPPCHsqC9tTLfxjhT9",
  "key28": "3bLCxLETFTzowmcbL4YAEH8YEKXk4JCuwzQF5XXCnYD2RSXrvfuL4DTHkVzxXLUReTAN8KSbxJGzrDKCPxt9LiF",
  "key29": "W2i1RoDrj7PiyJMTVP5eCDA3dt7eB12zBtgt5nExmmnNko91rcTn9ZnNyz9jmUKSE1cAaUS2rm6fv5BWn4kinj3",
  "key30": "3UpH7dqVat2b2juFszU83W5GFNz8HfDRX3Mhj9vsrWtXyTQa2T4QBbB29ptVfWo8ZDaGGge8sYxtGFJWV3LrqUTf",
  "key31": "41xpbzaBaR1BbpgQFmrFzTV1FTARjMhGhFD5j9VkeDCTnpmaZZAPgrthR4TXLdiT6s5zUnUrCgZWy43VTScf2qRg",
  "key32": "LSw53pbGzrbhvVCWdrZzy5f5Bf1SJZgdtRfDYSZ7ue2gLSR2ougZtQHeeownPi7vvBzobuZPAmVKPi8gJVUxwHZ",
  "key33": "5eZR7mWQwddLtZEJkbQaQRBcswKEtw6zytpiwFivBHSHRJXL6vsHopJF3J3eSFvxapcDfJTozwzkHSgjuAuss35p",
  "key34": "5kH1qU1s6P4sJLyM3CPgUcQdbHWSixqirYfNWBNFHfyRsEmy1QyKCyXmvB2gnDiLsiwYjisWoVg1ugxHW1oVLytm",
  "key35": "4PrKW7nSuVHiEd9WYhMmjCzG7wEe4WzmPJQed8vPwsiFBmjkWEuqaGeGMDxoXPqddmCPcwAqbZhUqK6Df3NApCx5",
  "key36": "3dJLRYhsWV38Hs7RD8rXRadogNcEdGSNu6XFY9j3MqJbHgBHFbp2fcJbiY91DEd4adiZrEWpG4HLjyV2E494XXPu"
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
