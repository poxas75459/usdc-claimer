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
    "4oSYkrXZg2EGCQLZzqk47rvmw8R3yeogED7iRPopc1QvyWfNTL7PaK1G2PHLbq81Kqf1RP68xxY6uXC4SY9kZv2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVbe5Y9AhKDj6M2jPv5siMfPnwK2s2GnV1u7FDLfQcXy4BfncLXPnMJUR8t61rkpmu5o9EFphsyDH9jWtm2iydx",
  "key1": "cMnAjkEHZHBDayp3JULjN6tQQjxEmRLvU6SthA8hKw6XVab9bLWdVnyfqTDTXrurYFMzKuD7DCnKnhnCz9F75A8",
  "key2": "5mZqAHEQrCTjBHr6wMuRBPzFHnRJWcr5swUWbUeB5EbqtEysG9BzXx2ZoibHTHDwnvp1sCNgL81K2dufXVNW83Df",
  "key3": "3KmhCtprSmjiWoWBNMbFYmxx4ki25FZmuErRf6QEJdhzQBdgqUAtkV8RGUHQayyuaTidXbmKmNgTm49jdHE9zugM",
  "key4": "9b8arsE5iYt6mQ2WXXWR47BV9h8HBxgWEA8JJS1wfpNa1x64iRVEzoVK9N1AWcX5d6M52rnKDgXGBX6TQU1XjZw",
  "key5": "5rJjDAf46uV2WKxfAsr8PaP4fNeRQAHpHSr4mAF67pMnStcB5FbKGYmwatAAf2w8psufQfPvofRXBGtf19Pf6Zw9",
  "key6": "5jXX4g49esdgnN6ffvkD7yfuWsKAtLMLmGZoEW3JuMoi3vZa8kaQeBjfA9CGg6qUxb6Z9s1T1FdaspCyEiuyLFyj",
  "key7": "4Hup6YNaaCPZHq9hFd3CLhdp1gLko85jshpgBo8t9Yvtk3M6emxUqGLn7JJAmw7BqaXePphPRSLrC46TeSp48TEw",
  "key8": "2KHsTMceWLKCPQ9VnHNUmxwVvBTaxCz6MNZa8U9ycqb9GCfcS44qoyzNxa2CeGJ1VEaoGJbZt8wDcXF4NM1fbgsw",
  "key9": "5YZ7Y9Yo3Y6hUhVumJJg8x6Bp2woGK5zxnEmhw5WNBdJUH4QSs4zAkvtzzwBm9JiaVDPus4Un4RzMRBSNnFfHrf8",
  "key10": "xJr76MRLco1WMZtdLKeVXGvT9xgT7bqVMwDJmiUChcdepG34scdwwWYFnMiisWuU2kqEQeocCTujJzqv952rM76",
  "key11": "46LPm7c2psYkwqcUNTi4tJeSDWGMAQCwoL3tNJcHLZRZyVr8gUnt4RuDUHs3uT3nFpmWjJ8fefgmr4phk5hrGe62",
  "key12": "2SwuWQxqfubLDF1LoEVAiJmuNyesBa7dESQD7HsDLkRGZ3A6FeyAfA8Qkk3ecHt6zyYttrUjLNTSYQyo3BcZUuwa",
  "key13": "5WSN2hwNMtpTY3RPJGothv2YfHJZsVcxnnZPEvy4KB61hz3s2CmCQNs9Fm493fWTzfugie65p9Wym6aFBUXxy2BT",
  "key14": "3mK6DAZNTk2bjX44qyTRJwknuBXvFp1qCfqMykKadXVSm5tExV29Y5kdAp9CgcZPGjTLoajDaNafMZUKczyhJsRp",
  "key15": "thfCmZpL6DBAhEf9MspRBZo42B1oeBF6KFNZEhGsVEnJsiASAsLZCJoL2gabuN8f17MFHu1j3ZfpkUXq26vTGu5",
  "key16": "3RCvDQZ6o4UWL8VMRkuR3dMUhvwnVSdurzNR9Wf5X12Q58tkWvrWLaijMGmZmp1jbPuFVUQSW2cdD89SqFXdzEjU",
  "key17": "27wWCatXKvjkafYa74S9j5CKo6Z5ZX68BNTjFPcuP4Jcu83TwR88HSEbFi6gjFrMCSm9dTnepsYeCYkMrrYkidPh",
  "key18": "4VFB7GDLVVZcnSfjwsttWiEug9JbqZaBc8td4JsJ6Tz7EDJCF3LThdeEPiDqMeqLR68JRCgC3VeAdthd7UQqFEqB",
  "key19": "2FUK8WHDPtGS6NC7nkwQDzc1oXaEyBJ7YGvHq7AZSMdTZ83aPujQu1MfxDLLd2Zxtxxg4L8pMZNAz9YZ25X8Uwjg",
  "key20": "4kDS3TL9PonhCoWfw2eFhsv9VZpXaca7MLetMngMXT7JheewS1N1LoRzj8L2vbqqmR9iNudpaypwtL9qZSRWeeYr",
  "key21": "5uyTtXFgaTyo55NEufCHo1x3m46gHUAfxmvyA1DecNCza6vnL4QQhUKqvgifJXyD2BWyX4EaMWqJxVYScrojJcbX",
  "key22": "3DdgB6w3vWokMrUkZpuxanSEPSVpbanDSbiLkxkcSiJjeUhpt2vXPiEwoM9GmBiFvpqA6jVaAEj2KNhTX8z5qSkC",
  "key23": "f4V1Ft468xeMupM6LKFiMN87gZtnKk5qqvD8C6oPwkJmpwWj9pqvLxkan4RPfJCWk5uCEwdZB64miMJ7GnBzvBK",
  "key24": "9bBb39rLNonae2PNqbkZbynTi4SYrkfZvjEPP3BSDSxai1Qzkue1u6a3juP41Wx33ZEqyhqz3HWMKdB6oW19fQk",
  "key25": "2bGdinDU4MyhquvXo7FphssNJMHSNfNNKJTDW8nvMyzdip75BJ67oqzkRmLLLLbNES6AwPtAJSn3PAvdstbZSWbm",
  "key26": "wGuwWUi4tEomUppozRyHBDsmmPLMZhQ4PXirkzq89yxzkcmeZ7fJwqhN9YUpAPdPzBXXZcecmqY1hGjaNU5YVMN",
  "key27": "2xdrLw5SxWNo5HYsawxcMPuWfRhnF4vqRXdsuQpy1MffE5RrVZu8Dm8g5GskstjiaXFhNwcaTbzoAkR2TBJhoZGL",
  "key28": "44rgS7rPVeAf2LNrR3u639E8dGTdjNgoTwdtXFAVfNcUnGNJBsq9FDmrshZkDn8Ljg3Ak4fzKQ6A3HcHXQq3zhDU",
  "key29": "5eDbUmGFqH7cQLB14wxKYkz7MZi1eGFkJ1Rs65CnboanknZ9pfYvwoAgmPdJ8ZEXUTRf25NzonxEj79yHsRH82Ae",
  "key30": "4Mxapbh9wfoXc3ebFRPgL7CG8QkweXbX3xPZhWCzELUMs51QQ2YgbpYYwTXVCKjfwXhh4zLXR9Lxm8WweU4pDWzt",
  "key31": "3RpqZejJ6iaQnQbBCEYhzHmzrFwQhBiPkAQQobaGxERxk57n479S7YKpuHViC2XUhBxpkUjLazuanvzFyaGSyN5v",
  "key32": "e2f6EPzopHU6sEwhi8KNq2XiLKuiJxrLURvyJGkHw6PbwVxMNqhQ1ENXhEbdJurZRUQsE3rUYrBzkUv6hbEvjtb",
  "key33": "5UU2iT3VUtsAh5kFMGvruPNxn8KE7NcULXpnkpbwWC3W6GkVVZamLjcnHia6GFAj49i7wBzgKc1Md79tsSZzAk8b",
  "key34": "3uRFX57L85AEURbf3bvHswPrqW2nbJkAeP1cwNM2diHoQ5tk3SDF9oQAxAb9z6PFxenX714VwHu1DtWy9QcEv6a2"
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
