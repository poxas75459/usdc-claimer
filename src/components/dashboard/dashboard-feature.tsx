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
    "fYxJixYjDQR6AAsc6D7EBGkmk1U4G3CMJw69petqooJUmFHBej64ZfnPELWpf3wLjVU2bTwKWuJF6ybo8cgKDWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsyPhgnmFzzmq65b1UrNAT6FZPKjKFZ4s4TbwQmnT56fkKYuqh7TNSM4Y6p8Eq6r8JwXYzP29fYezuavr9Wjuiq",
  "key1": "2fkn9LvFuTc1EUrKb7xZQtj4CUD9ataY7B7JfcX1cFLSUhZLmsrjWKxSQZPmHDj7hySLvTZEZCHyoQpqhHyLCrQ4",
  "key2": "3E2tfWLejLAPq256SxKGPEicX6mB4yU3itViZffQyeLFdmtPkk5THRXwUqJHmPEXWqmDrJuhXaAdKLVjLnQsDC5i",
  "key3": "3GPZzSUb5xtVSLasRxwUUoYMoshVy219NSCCwTZQGfA8EvEH9b74x8mw4nYewxgfcKwRZ5vnqn9qQWMe4C8MLpcm",
  "key4": "5uMS4UY6xEYXVAZxWxze9Mbk2aiYYe2pBie4saEoZXqhw4kawrQbweVZRjxJifVpFHG4Z78dqABCDs9nktJu1YBh",
  "key5": "ygL6yAtgpQXG7ynkd58VbDZtoeu7uCLBbWqXDYT7qpNJPiHKcgz6mqwhybNHPDjxep5zHpbd1kecs5nYiAW8RWx",
  "key6": "4gMySMMV45PgucKw9tqFZaHmdBcxrjeGEhAu9C7AGvWtR8zucWmDju2AjvfG3yMRuqX6LzQPHFxawLiJFDEwiv4s",
  "key7": "2H2MLrRgLP1eXveu2gK8sqkJhq35UFfk6d3zZ5SbQ53NCvZVZidRea2uCb2yAgaLntttrqVSK4jQg678GyF2ziTR",
  "key8": "4r5BisvAaDVbW9WMVhuFU1miwKGa7X6DacqyA4mbFwLe3gGzQWUgVavkYsrVue5t9Xf3roWPeTaPvttEewmNoe2E",
  "key9": "ReEDHU5tt6d6S2wJppitezKX8YktXSNhwBdxFZGW1unFgoaktLc1ejyqaz8sS8W84y2WqUHxgwtTzXE4H6MgzZy",
  "key10": "2DFrKwf5DjWriMeAS7JYuPKyt74qdvPxpwQe3vRhudJjrGWBidEhXMpnnpxTeRfLzeWJwyq3i7DGZWWHBAnaYXyv",
  "key11": "3EksssZwLAsvJqivQhsQA44BnyMTfuLWUjPznBHkeGQvSJVnxmjEHZpxDWyLf5Kj39XDqrpZBsgrz3u8WPostbxE",
  "key12": "3q3NXNCBVUSWYrTjeeAcqQcA2HeiEnGpr15pPYjr5MqUPWFFEDK56F6j3EnCT7FTUa4d3ytMnf6ViKkNxFs9ZSrJ",
  "key13": "5XaPYWv4yF3kaJyRjzQmnX1riUcgu7FmxY3k1PozHMheHGZe5Tmo4k3MVXCYujPyxuumKK9Y3fUjsLgVc8NYtKJV",
  "key14": "4AtAHbmoUL2Vvd2WFVWNFGfWPwcReKi9FdpUKez51wR8kALFAhHQRgqGurNCY6NxcGatKJFf9JeSi2bheqvdpvQX",
  "key15": "4hkcQFf7qj5CHA7KA5jmepLyKbbWF8M43eYNNboEvKx1kkdQmzLFy4f8FLGffRQPaBHYcHytT9yoN5pzmW9kLbix",
  "key16": "36XjXUddDCJu7atSTpsPdNWnuXX3STuQDv72uCahguwQWyWs4ekecD2Ky6RF2QVyBUAGhARK6LJESunDNzwqE2dJ",
  "key17": "5FKMLwoMrueMFRJyXqihzjbvQtUaQ2H8PPEV14x3Ct9zc6YLUUBwzmCZ15KAGQp7JbPftuJZnAQvExDiakLMNMtK",
  "key18": "3Spi5AbX6wzu2MCmuBN3bdko3YxQDMEB6h3AHEAHCJ8xP7h9rV3izQe6hSEaaHqC76K1AdCzc2vo4YdPSghaXwRn",
  "key19": "5dSUs8KcKsVgz8u8bMfsTnpCHLoaUtXhrNgHsMpEea34srhbyqSUzUMc3JPVHLe7uXJWdsrGnxuGgQAF66hSVHB5",
  "key20": "3dEgGonFF1uwrHppnRcCmPyjeFqv37cLnYWKC12psYyR5yof7DVy2zW1TELX6UcFZnBcAuPuzPWDMi4xm9Rtdua",
  "key21": "3UjGHYuEBgKbrYXYeLuPBpNYar6b2DNEyn6bPxNcHU24DvUKo5JL2TYMcBBy9xY8czb4SQySsZRzKNb2BTZMSjPM",
  "key22": "3pHimeaP4TW49R4VjpJVhYNrHEmPEFFa7JfcHHhCu1AiYUi4Ct4fcGuV7Gn5nAwcQX14uArYMqvCTViDrW6U9ZfA",
  "key23": "5etN3jAu2zegcZHDLNFioS7CLMJQHdUV1cE15zon3ybDkpSTLdqEE5AxdrtoTCeoDoq7PA9ZkvQo4Np4jadLz18d",
  "key24": "5sERB11WKBju99nBWsL2tGgYvgZK8BXV7wKMN2nnMkEwzfoDJLnqGhJNExoPc4ic7KkVCc3snTLwWASMW9GVtgEt",
  "key25": "5NnDqLN65hniLzQPL9A53YgfwNDjrqTWUpXeQStdkNdR74oLHEA21YZTmToeNXUPe7nTRnRAyu7nZvQJuVi5X3r5",
  "key26": "621iT7KonNRJJxFUDr9uzEgE8s14iC6oi5C7uCuvwMPFrPKVnYyZCprTSACEKsgu8DeMsZJAB8gBHX7UKopTDKpq",
  "key27": "2yoTCV46D9AXuWeBsdMSCbh9RimSLFxj9KkTRmDW8sQC3VSJ1Js18AuenpYkJZeYeUvXgvt6bDuvb2e8o9R2dQ9J",
  "key28": "eV7XCaPEveuEDGbGt8aiw4s9jyXMbreJADkNQuxqXHtdD3aXwbBArLLuRSQ3D8CKXzAJWCt93rRQwR3qjFgcQAu",
  "key29": "2mAzTD8upYcg3gxh5ZzTNrQaUD33hrBee9nL54JSZTvxYc7uqdYbCg7N8Y2JZ3YWYaNe2ksfNp4tQpdXLM1duj4x",
  "key30": "49DneDMTjRmtakrBjzM1uW1kz83Fy4szcPgkHkb87pCbRZAfwQKNvmcsErVb8HXwdHJaGrmNMapxNobZ4F1VNYf9",
  "key31": "36JY498Yn29EFMxj1aTGCdQZhaNAK9a2uCCEWuDbjChcDyg97gsC9cjuSyhtXYF1tB5GWcooYaFVvespgmeWnz9v"
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
