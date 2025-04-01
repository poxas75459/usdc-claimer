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
    "2CvrwhwaR3LV9uJczzhUgSKTjTptdMopR7o6wdp8HPSXH2hqMVKbRMbAJ5fWXi2rLMHgdjYue6JcknyAWmsCv7t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eda2NxsCPfpzEpkP8RoU5u2auAAxGjZdbhEioDUp7tNWtMjmbYUqKKhTYBUq6seR4JHtrs61jjhc1fZNMogGW6e",
  "key1": "QiwKVKft8kgqBRRonYi6w2dvB6AZqV221gqqxNbi2fK29gYB4B9YTbcQsnhPKRqL9mfRVKLhZqjCttuZvpWf3gc",
  "key2": "5UE5t5E4KpLJyogxTPGKyNotsaX3jNvpuzBidWNUX1Ee2xr1v7XqA2EQfcvZ6ezWkE6SWXTYVuvPzoTaS5uBVUPQ",
  "key3": "Y6tXTgyQQyh1CpGopuTFUAVq2gyCCd4DMrKw3qPUjX8qHdigcg4xKgn9GvXCRqo94ksdWakEqMRDbTTVkw64fBN",
  "key4": "dCETaHJnuVtE8FyXy3t6gH8nVLmLk5LmzrxSQaQR1Jmx16D5FQxenj89hfgTj89XU9E82LRuBXvKvMXD3u6DyYa",
  "key5": "pP5ZvHj1Q3hUJapkgUVQxnLqFaZiddVt95mXLoeLWaxESEMUhRjaDFtVYbTMjigrq61qVa5aRdVm4zkmaPGzEet",
  "key6": "5AbmcjgcsP2FFyfoiSXC1kzUEDujE6DM8SHf8RvJd8n726u2F5bC3xz5WN5zU81S8wT8rTtVrPyUkPyxDon87mqJ",
  "key7": "62xtx9H9ZNMDTgfPCKfjcESHZM8RQfw2AGrz42Mos34FVbx3J3WCDYmxwH3ksgXYfwgdnMcvdn1aTwfVJf1xnvaG",
  "key8": "oHqp44wy5pcy6mRP3NUTcUJSBgaKahbX7YfbUPQRFSiHCAA8vRwApRxMXEaNAf7J3DMSDG8VAqDy4SDEb1jz5ie",
  "key9": "4LyXaMzwdEgEtk4LE2jkkteTtHK9Zn9mjr6Zea3wPHvUzcg26PjDRxezWrHoEKmUqpbQT6cyVqkFZUkEyvF2a2XW",
  "key10": "51XCW23nQQiN526kgzgtmtpmMLWYdECibfnKUroyXRTBKpyJ91xHNF6rwHgDXHz1sWv6PBaeNXvyon2siRh2fkuj",
  "key11": "PnsgQoiqmvuBAtMjUqBjL2P8ZHxp5JdVPdW17EkV7pyao5tncrGtXQ2T955W4Qzsukd9jJUrvHf2a7KhnsWxNQh",
  "key12": "5SFyDw8pRn3yqAUmHGSoxRKRYTHopxEYsButN9jgayzZNEWB2uhT4APVMdkhCNUXJviFtxkc4rGCzBCbQ9avAA1W",
  "key13": "4YWDRdCEdFxeC97f9pjyWvnkJxGHb7yJupFDuuGadg8VARiuFhBUDrr3k3GPNsD1yMvFL4Xtc6tjrns162ubF82J",
  "key14": "ujgMSvNSLyBRD5diLdKNSoZxZVNoEcUEH5FmRwZTmjdi3o4sJdXYYYUHBiKpvUnuue782iwhxS2K2SBHEvpwhGQ",
  "key15": "3KQr7hnceCvQgy7X68FY7fF561x8gqs5fMnmD7r5VDukXTYQXCnH8mq8uRUXLTnBLGxt5PyZaXygXCZpcRae16gb",
  "key16": "5En5GLrMPXNAD1r6nzpBhYMurpJTTef8QeJL4Dn5WtmM4zNED4VX4u9hT2rhJRnjL1dRQntj72zsPdnnVXCzzBWY",
  "key17": "3b4ANr8sP2sGUxJciyvFxf6vhepzMqhL5Ln85ndABRobhLmbYhoK2A5nJWqFCXYW8z8i7RoUthUrQeHLLFsTf5jh",
  "key18": "5TECvcn8ZPVaHgqp3CSgHmNPhVCpBVkoRCjcRKn4rDQtwDLCi2BHDnwj3XtrCaWLZDM324zEecrCSEhbSByZniQv",
  "key19": "54nmTZJWSt9RsUxViUEwHWmK68RKcgDFRtX8iNGD9iU3TB3P7jQwvhWaTK2BBRBWFZ7L6SZhcprpfQaSk1GjXBJm",
  "key20": "25RAMY2PqqY529oniLkzpbLP9Atom64gMoQ7pCam53SjwN97gLrM3HEakX2doWgq8A7PJYpKCfSG4Wy42CngCzEF",
  "key21": "4NL5vjhdDEu3ahSwqDQUtp83reYdQbuq7gW7ypWKT5fMgfH8cRoQgryBrqkrFgnR7F7WcLTm6edG4bVQAtRwzcxL",
  "key22": "4vXkEr9ac97NDUTpQCDd93oxFDpqP86KxMuD3bcZTwePFCAPBnkiJM6PePxDdfQeRnFvv6myr2xs4Ak52veYRfkU",
  "key23": "4phQvQ36VwQkJBJ8fLcJbQyAvFH67k6Kcwr7j8wExaxekpeMBVrubXNNzi68W7BvWxU4Uo1uSxyqEowQZ6ga9jdc",
  "key24": "5DR7jopvPrQtFXD6NUW1fEdkMuUoYLGRm4cGx1ctd5wcAPYDUNSz4SoFsBdZTuSPbstFZjNJkuBYcrARhJCgVtfB",
  "key25": "2NjCHrcbR1sDYox2vw411DUvDJ6WXFghUFXRqqtoTaQzzPkPMK9UwBCo2CNczKZ2VgBs26pB5qHmgKai8vMiuAsS",
  "key26": "2AQY6NTmJzNVBjUxNsdfBhGDSvhk35tnWD5EwgJyWZ6ADZ3V6ZmirvgQLDKSKUUavE1TyYnVvmF64pMAGpXK8no",
  "key27": "5wUmcVX9jQY2qfGf9csNi4o8nf9cwu3KQcCd8Jem67fsTPgAwPGW758UTiVhqFj7czCtsV57WbQqRHEwkN8HC353",
  "key28": "f3J7emavxYLW4m7MDr6jzzWoNUmfi12wjnRow7e91ogFnRtyvWmhhEoqjrBZkP6XPqnWu9nKSef5UXK9nGQcbib",
  "key29": "5moRuFWdqf56V7hWJdfkyy62mdv8yr9sYv1BFvjd8mSon5uRWyqgARFh1N9R9pKKRdXbcjKiYLobn3Et9Z3wJGrH",
  "key30": "2xWBjBParSkgmp8ZE1JxhJvfR5UZjT8F9T8KEeSWRaQUMfGp5iEZRKX4FLuT2YfvYmM774jC82aFhrfhTrvUDKuY",
  "key31": "2MZrRbt63unANRCmKbWvEVeeDdVDZAKp2jtzjAB5faDvqVFmz4ijxAbhjxwU9qZhLENjf3zK1RovqDoJqHz3Nwj6"
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
