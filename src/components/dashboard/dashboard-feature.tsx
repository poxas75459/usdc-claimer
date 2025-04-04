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
    "3A3N4gViLX26n8dwuuyKmCXWvqubf41TMzUjwgv1C4Nbqo41LrrTaYpoPaeax9KZNJRysuyt4BofUYvq7j54AhyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KuUc94v7dvZdFTzybGk7SQKmaAFXKbMD7yQfK2Sc4jhnpTtWm5QNBJBLEgXYSwrdo5u1NRoWi4EDGw6MZUa8MBA",
  "key1": "479Ln3obioPEcmWZiTdZhu3ifrN9nmH27dXQmRJzj69RZgKnSLZLsWkNkzYBRKUJhrjks4aj44ArzbQZNBBZoLUq",
  "key2": "66NX42n8vfGBKvWAoFvEZiBMc7iTemt5K79rZvtihSQDfCgwi4dyUqVyNnsfh9WQBAqhtxo7qPJnyJSEZAYwMPgB",
  "key3": "5iffYt3MWYQkRn4uRozZss57wh9qjVXtqLenqknfkVU9v6Gpyo8GaN8rkgiPgHmP9E2mzFnXT9tdzPHdKDnDdQCD",
  "key4": "5Wg4nMaA67ieFDUCkBnRudHKmwRr3SPCmWNuKA1avSATJp6JD8NXhWRhDQtTRYvVZhJHFCqqwrhHbVh5wxnwAfP4",
  "key5": "4EcW6C5nJ6nfMPWoh26F7FVRgk8ojjBMd9HQbhvgSS54JYwUyERLrCrgbDnAS7Ab5JEgevSqavEBDHodjVyoBXbb",
  "key6": "45neT7Y7SeYX8xuqtW4JxFK3VboHND4C6MLiKvP7zMn15EVX4Gdwo4fjZxusS1jEdi8aHuyexENPNRhqpHtyDNG5",
  "key7": "3QTcjP5hfGPCyKvp6heYxhRcAHjuL36kHuoCty5fwYQAUW5ZS2s7s1DJoASpSRvVTwJzuCViWhP4Ap8LyyL3E5eC",
  "key8": "mkPZzo3iToLQt1HWcG9UuBpmugieJNSDukUfeaCsohGcaxhBWB1nhgbX2KaMQPEWVKZd87aS6bXjPwFNmARsKPG",
  "key9": "3teEwohHUdbNY3PQVDECyyktoTsS2tFB6MQNfzwYBE3qwdjw5PE4bfA4if1RPBVyrwXuqeS8BkiAYjuspv2bXRmh",
  "key10": "5rHPiESxHQd98f9EbHxZwCb6KjCuvXsGYWLB6GZzQpYAcyjMcQr1cwkohvek6SdUNs5crpj4mPFKfVWpNQcZ3Loj",
  "key11": "4hfvQMAZkP4md6NtHRbEKjTwJ4KuJreqz9TWYghxbK39JEbcZd3c7ttjrFYgNJxqNw6eMbqzUXb1KBE9xdj1ZoR8",
  "key12": "4U71KQRWBnkhQ3pDq8c8BpD6kWLMhYTTqWDzTeBStANxTzRmU4ztRGSyoKZSX2FRgVYwsFMRtwGyh72xkZ9DnFth",
  "key13": "39puqkUPfKKTPi7ovh8rXVi7gPM1MsxkTiTZtKxcTB5WEYwnvDs2CJvM2qtrjQYxUACa3y4Y4JtV8UGy54GSfUXw",
  "key14": "4n7KwUM8ZmasjAJErtdyGk4x6YGh4gwpYF7AuCUswSo2yJH68YNJRiAv7pjvpLEddkXx1HbcFMJqHgXAttyu5Kei",
  "key15": "5Hwno3KLVEoFMqFTb3J87sSTfWmUDJuSVZudvrbgNaopo6DbgrqGW7y5aK25BhJLq8fLqHPYQBLvQyL43FWAVCCz",
  "key16": "3LxgdRtZzkngnMfQWW1CqG1MKforU1YEbGCYwiUj5CWUqidQuQSgqUGH48m6QeiTt86H1F9YvHUMGEw6yYpGD12Z",
  "key17": "5HUCNh1XgqWGD8FPu8twBQLN9TYB7iNf1WgzBiazgHFiUaownfrVXoQwLb3MXgtYwmSuWVBW1LTZhLkZUAXQohvS",
  "key18": "37bPAoFoAdb9K12RUjKBRd4Lyshjxwe3dUAAy5741VrizURaNoLDgMhjCNNPmzxMER8YLH1zsQ6xD8c5MzEjYpYf",
  "key19": "3rUMYU6hG6spaGGo7LDAXPiMy7S4SXy9ptn7HokkcsCxvGU2oTQAjorLGZtMPnnn64jKEW89oW3t9DWHvp3URQQJ",
  "key20": "2NPZ4o5Fm3cB5vTRLTh4RppRPToqNBjMCESdiYotvKQJ5HVzG1JUyokwVcocb2zhPTJTLTDrtdJMbPLA6wBB5dJT",
  "key21": "5fHYSPusD81wPAmzN1yRTgutfqrnLi5rMuZLhpqFtESmZz1tVffiUmQhoF5knEn8jjJx55EQ6wYsmULn4EVWShtj",
  "key22": "tH1ADqiR1zLkthtXsFKxeCQhR6r5f7GhL45EmSNrToi18toJ3ZXDn2cKhTP283Gu5pgZYxM2fWJkp3hvufaJwon",
  "key23": "Un7jkrXvnZcBj5g5W53wFo4ph5xkhEqu8jyq65n8DMhnBDR2eiaeBDtzoqWd4guu6y77sACcsUsbTx6jMw4Kdyp",
  "key24": "4rNvHj4s965xKyWmTwfwM8EQEmRDtHJSWJP4P7QgpEPuJoQEhrBx4T2ehqAYRvhJ9TcwTMCQvBMXGFY3KijbMuwj",
  "key25": "4HcwtSpAaKbamLooKnHdjwHEJtasreZU4Z5RHSGahhAGFQurNemPfQR9AT8HxvmHTTFJDeoMriaNSXYdxuqGHMTT",
  "key26": "4Lw3N9rsfFdLVUhZYF5WEGqdRQbnys54nWnH8aFSP64TLePSUGdX2273wH59UMepBsgadSAo24ie1E5a3QQeFNSh",
  "key27": "WhkPPNfk7ngFBJRatoVba1a7hzA4wQ1KxUhFiLTK1vQDWGvrVye8qQ4U5MSyoJsefmDNDvUft2ynHEmGdQ1x3L5"
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
