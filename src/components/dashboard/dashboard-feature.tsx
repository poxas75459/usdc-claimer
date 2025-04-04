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
    "2qmkypX7X3fESnbZjBbkhHRaAioLY4ELC3jKS7wtb3FRMfhvDKZwR3kEvLpEa5EPNyw9SVoNmdbbRHFsAG6vvDay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4a3jC8dnWBaDkc6yd8Jw5vio2x7CVMCwgEtZMiQZMCk62LqZUrFbUv1h77KCZF3zLorjBKryYkZc8HCx8BcAof",
  "key1": "25zWQ9h3U2LvmFcqh39UeoxaKJ1VFnf9Y5faCMmbPJpUf3BFycAJsMXH6vhbvwbcTeCCCtXk2Tw8KXuUpZQmwo89",
  "key2": "3sE7fp7vDHPknyrswU9ohXscuNCZ3AoFZVF3oNpZ1VRF251C5ykYeQSUUC8hYxLHEJj5enHFjCTXfX2Skrqo33Jm",
  "key3": "49kCtxD7pfDvVuZeqjbd21wRCZkDuRPc1o1qjqNEGEgpDtRYET7BGCDxrDGbQSruPx2NZjc3J3LCwriVGcgRbvt",
  "key4": "2HFrKbfua87kHtQqB3JXS3hziAa3VJkQHbf6bnnw7Y5bXDTdcdHSDLW4RXFMiKj6CA1sYdWfEjCxcTERNaYLW7t4",
  "key5": "uJAgPE6QvkV59EKMSFGvRZUkw4nePXv3gPMT4NYP3ZokUv7Q5NffgRfQwftDm2uz7FgSRgJhwT5kmn1hDEHBJnG",
  "key6": "5XK49iQTPk5iZGnzrSawhoqVVLstcsJWZLHDWdWhfu8zSPegJBYtwNkigRcakSQThdA1KYtQKcPz9et2rgSLSxA6",
  "key7": "Fje1YEzCATPTspiHnbXXJj1XUWQfAmszm1BPCgNwm8qjZM5T6boAAMGYFm3KE5qYZKBYWZtmuQZAQM5mr1SP5XZ",
  "key8": "5xJNuyz2Wx5P7L3iV9SC2kCJwgdiWC2jucDEXjK1WVywJFA8XdJGdC3ndBkxdDAPYat8zDpTw992wBQDHrwbbzRX",
  "key9": "2dbKazsipUkUBK4nGiLtHRSzqpt5diYjoCWHXydDoe82qNZ6wPUEQaZDNWH1EWcwfwh986m7VREuCCVnrJeWnzT",
  "key10": "23GjAwxvKD7kazBxZB8CGLVt5C634sh3jAKvuxtCSfbTZ9FTALRyDQVWnqmVxSJNRLYFonL123a3R5PrEVUkn84T",
  "key11": "5VLAQCydMDYyHEFn3H5NVHSPjJ5nPuCgh41ad5h9N9vDjkZDwQ2VKufWZkLs8n6avtBmTP52d3SgcXbH9xAwpXiq",
  "key12": "5eewURAh77KFixBp444dYG1ZG1qJMrCbYUkatLsCXkhfHZKNACHZC1F52eddB9L7MrucGxbJ6XBViSeZVkbYCEDh",
  "key13": "2b65pHTHBE69RrJ891EcttJga7KhZsU1up7nzb84ro22HoR5oSgSfTAq7aw5eX29aBze3uNd2dFBADjrigtejSuA",
  "key14": "4KBfKdbFJow2LF8zpHydZwKAFxgJyyXwnmrdCo3Zqv3wDDQ8FpQhzzoRxLLU8H5rNGXDEe829tcCPzANE7y6y2JM",
  "key15": "46JX4xbkjX1JHXAptVAxMTjaYyNKJXki3MbtwPZt7qDFcXA4TjZum1bDzETyQyPR6Lkq1NmVWFDpwumRqd6zKwak",
  "key16": "2yf1LobhVSU7haRCgeFvR26V9niT7MfEsmJjz7S43GcMkkZvxhA46MJcUbWf5dk39JQP6AnYE9n4LCsnEf5CiDyD",
  "key17": "i4rCtAffJCCPyK63Lcahm1bfjwWx4Hand5uFgGLp3MNktn4gYTeZXokeS4p57Dzi58w8UvNYTi2FM9RpugUEdVM",
  "key18": "2odzJNRsyiE2j44AQzFFmKz8NWfBywYbhK9nhP2V8XbUMNrZvr6mTpZz9v3QKfT7QdSvZrjjv5f3Qs9Vj3CDLuad",
  "key19": "AxCQ2i5n4NM2EwF61VcXyiKYAkBPzvembDV4HGAbFKjQ46sqYurHqrVAzY3m96RNLp7Ykm36jwE5u3ZCd2PxcPM",
  "key20": "3kRNkPzTUHoW66JwWhbqJAnht2ZG1FswZzoKbxxbByqp48TQP1X5yr1N87sRZaVuFJwE8pm5q5vhbz9Un9ExAHVh",
  "key21": "2AmgStgd1iHXMuNNRDi18YRFueyej8cUNuE8FdJaC1wmHFj6TNeK6Cku3mYoRWAP8E3Ve9fFueC8qvTvJP4f6b2K",
  "key22": "2SuawX8swxzt4aCC79R4wVWdBEPnYy1QkcDnKMJySEiBSLnwhd6exxXd5nvDnsAep3u9t27ZHBX664ReDo8BBR78",
  "key23": "2puueTUBNudX8666nWia5xgKW4etFaUygn81ZtziuAFGnrdodVpYuRieeZDFMrsEV68kqNm6wskQyArExYna376S",
  "key24": "2gAHSpSeHJYZzceEA6rP7KsJuCKDHxJThypFM9qx3gxjdxGQdu8eoSNwSErTwDcuKvxTiUsNYbzKbZXvkrPUpjHC",
  "key25": "3xiwqFoZzAfuhDDobVFnHHaxK7KMCNvjXZtwD14ycDZmNoBVZc92WJYta45qdC7XAuWPE6VU3djrFQqo8nFF3NdZ",
  "key26": "pyceGebrWAMW3LPr1Sk3Zpi588gMWVnmfaCrW25gHMEeoAetUKrWoA1eZwxP7KanMM3BzWkEqwWj6XqHG7k1qUq"
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
