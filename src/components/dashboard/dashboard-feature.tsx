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
    "663mEK84Gtmmk7X42sC6wJEwxhmpcA1Qx1Y1aqvV1zvucZeLft3rsnNMe4nA3ThiGLei4Ddk6kaEioAWKhqA8nGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVM6CWoWRudndxqMR15nPMRJkjKiraJFCZsqfyuJsVr4gSKpWF1KTQHMs4qC4V9rF6P5Ff5xh4KToR8e94ymGwZ",
  "key1": "3zj5vR5Yfc4JoMG8bjS6hLZn3FNgJKvXBDRm6WMEW1Ur2kb8rotJnzBnK3H1nknpYPqAcNhkQHWLEZM3rihi1YaU",
  "key2": "5mr8CQLysL8LF2jBrCqGCsjFBcHHetcWn4H6ekuGPfsA2maoY7Qd5LfZy7NJ9mD3hMJPwsrUQsifvWAbrUTTt33B",
  "key3": "2KDWnrdqVKzmSoLVV9Pz1F1LTwjTr3DBTLBUMyFuGt6fsJLSShMahr2P3fFSaMQZfZQf9LWFN2wcqfXUFTCbPwbS",
  "key4": "2fVGMfLD3kXzuvaHj2jUZjJeUvxqnsqVnQnt8ovKETDVkoZuq7CungYYbRmaBfNFkGrKWLDXhhgDuHdSUDEDipCz",
  "key5": "5Ewoe7rxWGvkZYVbA2858Ma52KVn5aK5e9cjueZXJ217pjoPQfzGaGAAbq7BXRPDHLT1Cee88e3BHhEFKg5e2Bzp",
  "key6": "2FUExo2foErJideieuteGfybyJ4HFiajCxf2Q1u3wqgpH6jGJevpMoctCssaocn5XosuuAkMSjc8jHwhZ5H25UDb",
  "key7": "5MsZFk3Rwb8beo2StBm2u6tiaHKThUUoo5gxNBA2cX5rpc4wmbKUVDnP3b35Neg82nqFihsgs7QdoVzb3NFin5Pp",
  "key8": "2raFhcxj2fJA5tGBHtT955vQtQjoNDKWEbwQJKtwcFrGeN6o6i7ffHmDRowDbezBg3XuviyXbf7PgB64m6jHecs2",
  "key9": "3zDSRdBJNYfA1gr9cofV15TCRqLzwbf2xs158ro6GGVyHM3uq13ahmd6hX2vhD3m1xKcMuP3S2cpHnd7myPiCrdy",
  "key10": "8o6sCto7qNS2kTbhWCy2rtaY51yqYTQCuT8gumRp8uTVJsEgMQ1GuXBfURLTGQzND6YXTH2YjRQ6UyXfQSwxiwc",
  "key11": "2Pe17TFZEwPMhQAiLAfokod4m45k5fjEs97WYtSoLGrkFbwZbJhEYtL6p7W5UyBTb1fnzwJd44mWNqB4736JWefn",
  "key12": "2joRQqTMD6QRfFDEexX5y9SDyJtGPPHHRxCs3dFtCE7iqzbZv8vgEA7ofzjG5xirZDt67rUezVYa8MVjBBE7di1b",
  "key13": "31N3Z9qhEkMEiKq8vErvzMvY7aQWVmeotvXVnzyL4uQgxM4uECfiNsyJud4c66uVNNSJNpkXNdgj3zAQF6nuw8KX",
  "key14": "4xP6VaTMN2zbmJpxVduRwkZcCk5cAK3tdCPTMn886LJ81XqJfQ57m2gJt7pnhoTorcKozy4D5kXQHv18W9Phnot6",
  "key15": "4XUjFwwEkP3j2WbyviuxvaVc1gXorxjZddZuqeJu6RJotz5uFrbFPz8owMUvEBWmCmmxCkVZc7ZjqzQqreQVGa5n",
  "key16": "3rJfyk4FtXMExcWe63tqEcbLfoAHrPKgYst6jdUYritBCvgG8uveYwQp7YtZoNUdr8juUK7KvTfEQYJQ6d3rcpwU",
  "key17": "3RXEV4fKJiNyUybJz4pALUXgkA9MyaLZzhzE88t9hr9Zi2RtmkBJnWGGnjWa4MS3DW7D3BdMyktmQnp84bfjfY9E",
  "key18": "4EmwkDGeoVLiNQHjULUNC8UjemS4ZnCnRwC1FAg7smRUJLPdHnCTpEFeBykVB9xLAYB8JFhkjANuNjjC3GZSTEwH",
  "key19": "4QJnhbFD2dC2pppMbqfmoCSKJjSTmnNn1ZU6bhZffy24taYVNFjpK3XzaxGBkZtbku5Km3h44GTz57bPdZ8wtd67",
  "key20": "tMekVobTr1CkX593oszWVWg41QVYn73dNAPPpES8M1YUUUZsaj6wGXwkPLX4NiX1VKVG5CaCe7eT1UZy64jJRW6",
  "key21": "4McVHyRUB8XckdLW92brJKoR2Ri9ta9WCyW4Lpo7XMjF6qspX2dWrhHiepFU12Cu1kH7euiQRsgBHqWs9ws3DKs4",
  "key22": "55sDEM199tnBD6LWxCfjmqdiJwaifwyFHrc1YDmshkrXZuqXftN97wFSiK3u1QbWhyHzkDQvsNtS7JTJujJd73Hq",
  "key23": "43dczDSkYDwNUZL32tnsMWpWbM92qUB9HSqGtEPbGwK3B6k7jiMV8vkmyLC5avvHqyjJkqTGUGGwHu6EsXaySy8K",
  "key24": "2XdPVCd171DUYAvAPaSJEjDDQgF7myLqrh5TpVmhsLTvDXeWwxHAWfeF7N29v56GvrwkcMdzsKi4G75bqj1QP2dD",
  "key25": "2QB6zq4zBc2aDBx8MQaFZNvMh64oDcbRVNJHEkk2Ww2dx4aJLyZLt8685dCHUdYVW4kpmsW8JNrMvJ4ku5H2kSDy",
  "key26": "28sKWuyE8wBR9RDmxGAG9hBG3ADoyTMvYmtfv6UFxf8R8FUnxtyTnYefVnURdHUuGbfwE1Uu4GQsiBcZDUtA5k45",
  "key27": "3tvwHP72E5FxfhwT3bybtpaVn1m28i17qvhpq29Fpx2stXHDHnMxR9eYhw9FtGSEmX83omKj2AgDBcASRK78jgzY",
  "key28": "448W8VQqZtxXDti5enni49NQKVaURXMiL8tbRdPGma44GvKnA4Q9d6Bm53YKyu2JHY8wyxL2ifQdWibZq9wpBgEA",
  "key29": "29i8LuZS6T4RThGM1CdzYTXL3WBPJGJibNmeNcEtab8KfXLTVALpQkotqyPnEZtsGPbJC1hyPkgnxbGm5Ufo9hte",
  "key30": "3FA7VnYzZbZASmhkheVwohfggcSJSPWZU6oWSLF3q2T7jD8b8DwW9mwW1jCUm5NcusCLx9LiYzd149d79eeD15Yw",
  "key31": "3uzZzgMuYuwzbnDqXQAnGZnDg8n4ejbdpZuWhU9mENvqexFUJXQPF3Gm9jUqo8YtdpSpXBPAss9YXCbF9FoLkx3J",
  "key32": "283nCq4icdZq1TAzQRvMeTfUV3xPbCot7xbNSoyW6ontmJBPQ6NoDHvS89NqmzJ45woeMwtHK9ukD8qNsPmU9Ezp",
  "key33": "4xVhEMSRyZrbCEYDeNXGzgHvts29uxSYy7qS9UxrcpqCVPWGddKVU5zhtG8SYCWWcYBYZ7GzYgxtzvfGwvqNpjMp",
  "key34": "2Bf8r5EJ2rNueJ9ZzpwgnXvDni2FnMqKK87f7uvBo6MMo27SPpUYeDWPkByDmuHtXFYnYQpebZg8W4KsrM5NAV82",
  "key35": "5RnFvChZh8oriXHQc5ojbrj51rnbta1FFHn5JCGUncMa4FSr6iSixwSAY9PpWGxXriBbgkLKWAtjVNjjtiRpki5P"
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
