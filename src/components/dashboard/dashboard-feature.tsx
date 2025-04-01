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
    "22dGUEH88d8tA8xA4WsfiUxN9tZYLwNe89g1eVouM8eqYj1G1BWb7f8WCuyGgQmY1yr26zsiZkY5rhrm9PXwNuYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HN3iVYN9Sg6XMgkxVURYGayYqPih2M4NEUzB9kjL1LJeDgHvju24u3x4F2FdZw5JrD5bBRbaA1wVRRma4HWcbAS",
  "key1": "rz8vhT5CuQWN2rmmUrhRgo6QnscWSZyih5BTrFXDnvSfK6uWPUxNid5NZgGZXmqrJGTjGVtWPMVKmctJoJUSYZS",
  "key2": "5o9CSWRQ71UDUaMhs5ksMBHnbHmy5d3WyrAoFyTABdsDzez3EgngNHMJH6TazYbb3qy3a3oMbYV6cCXTkVE67pZW",
  "key3": "5DwofzHiEcnrRRRh2cY2yG5JsxGptgE6YYgoF7nwTFt9SHC3RHcBNBG5Vu2DitFxyX9pJLGUAQy4WPfKtmdnGApX",
  "key4": "4MNgxbFbfnCa19PtFm6pPakeACg1x8SRiBmj9sJnTvqYfa793y6FAccdEo7zYys452oe19oUrniRa8n4LpkLdSrg",
  "key5": "63K1eBUVx5WhoKTPDbrhgVP3JDsDmbXkdER9wajcsJxp3GZAMskQEEDisUUf9maW8tiUcDntQUkLiySMrzkJGbjY",
  "key6": "6cnXQ768ivB9qwPzUJriF8WhFES9JEYMBka3QCPFfoew7Gm7oNY7BHkvdVQA2pKrC56vfD3ZuDHj6YVmxfCbYWk",
  "key7": "5jGbVamQcxSpRfTkJUJBWuqPUmYbaQT96fpxAMDFv36Gui8EXvjXqKkz6D4EiTycCiTn84UKwumrbBp95VvuKJnv",
  "key8": "3FLu3eS6JkLNk6CXmx66m4hgfXYN46VyDGEChPdRvX9g1jFsh4KHYK7WM5bHFM6n822TkgmDcFGxKQkH7YZtPyBy",
  "key9": "d31hYbG5KYwd7JNvnHTNQRq3AWNvTUQBNYa1VgcTb8WHxwBxfnHarxYfYy9d414uGiPB9XrBULeGnLnSwn3wSBH",
  "key10": "5YoXQffrR16vkSiSTX91rdCAco4Ca7LasAcUPJz1AAHKefgggiXQk73ebMyivYHs4e5nuPNNt1iBLiUowGAXtECK",
  "key11": "2rsBmcspPNwCKtHk68gK9iga4dk19SimSqU7ZBJeaBau5B8V8tQuSD2qPMeJorbxocTFretWQemoi9x49yph4BQQ",
  "key12": "4KXJjDdzHBFRFQuizkUc5iQqtUH8sdW9WoXHxVwA5qbU5TPQ1y17ibgh9mFmBfpzH686sxQ6w89bRxcrBbT4u9ve",
  "key13": "2aBeA7MdaLqSLtZKkyQsB1T2vpAoQHjojpQUhGwZnoJEDJnytjZzM4Y9iWfwpJjMTZJPMeW46Vbp1UA3qKWUkkxP",
  "key14": "3BDxCJG5ebaVXBbeSfgQ5kLywgtddEzAfdqymTfVEELTgJMUjjyTsnE4AiVJGAxNRiRQ77g18sQY6PWNETzvTrhb",
  "key15": "qP42ARDmJkA8LFaUgj7wnQhmbrJsVZLP7HanRQ5guCBvwa4wJtRQA8gc6487Fhkz6Bco8DJbYZMAeNWPjsg5FvU",
  "key16": "3uGH3S8ScLe7EkrAna4Kx5aPxeet5VMkkptzSB419sGibT1SrG1J8PuTB4zSef3NcsHZ31T4Q1nzzvz8RLczFr4y",
  "key17": "55s9fbf6631ZEmLThwMGxbzfJGethq5aEBMsgwiNBkb3oNqba5EVYA3TFGShYrzxR25pCjMRMe9qyEzWwE7svfed",
  "key18": "4ZGYNNUHawfGfgZZ59avqZgKyfTsBZWZ7JQukW5JPZwSKnSqhxCTFVyAQQG86HjT8TqhBHS3czL3YdooNN5qLM5Y",
  "key19": "2SxWNGjia4R13KkLhbLA7Yjjpz781zS6TMKmpdJG87nAXJFuqKCQk3Cy6ZnE6ygxLMtKojoqqT9TeJbrCe5KKr7o",
  "key20": "4KxRuWh591C8GCAfYFpZqjZZP9FqvBxCmykYow5MSPrfeb6B4vAD3zLL1fLU8tRrNF9UKC7SJLHKAMjC9DzQA7U6",
  "key21": "2WDCtASBWrv6VZXCqG9T5AcUZXfosLFtFQVHagjXZBByFMtXzr9AAUv8xiPNeh8m6zh2sAHdtrV9ARfShUfHG3Dr",
  "key22": "4inNK7m6QwzMPFidNdkW7D2JT3muWiFcAXdXds4nauthkwRevCNk1pX3rzcUz98VPZjiBm8qgVEaKZEH49pab1mC",
  "key23": "2VgrVYUy861rMpZhk85B98no3eW8tZgJAzyVeupxdVrxqgmxnPcxuGG1ezke1gNbFJdjUFKFYXyJXM9GhxiBYwoa",
  "key24": "3pP2PitquzmuoaxhVpaehZ31faemNTWZc5dc6d7NjPXenaZ4dRAAmvXNX2FjSmvkKktJi33de5aQYnVJCgVUT6ih",
  "key25": "ssnWi1buWULzCvT2pouGAprJBdGdxgoErLGxSe8N29z9xdymxDMg1kRnKNNTg353ifqXN72jqkX14c1yGLtq3m5",
  "key26": "sr216f62o4HE4opzLe5gQakXg8dyZiEDjpenSNbBggrkdvrhQaRHk5BDa11ugPxd3aVs2wpFnVU5wJocg4MyWWi",
  "key27": "5yKABLPpjvVvH2xptVpoYQf2QACV21y438E5b52y83nV7h7GszSQm4r2wy9FXffNSkSmtJRjEyMHaqdtpwYGfKhh",
  "key28": "5LZrGezWCkjSMwVGrSk11xyqadtibARcfo1Ac9uKjTjVoCeFpVKzeSr6i3WvWR6tykndJcsWqKLUgcwGbo15zBvU",
  "key29": "5ZPS6Q5chvZEz2NT8da5HPJUXxdJGh9H9LS2dK2ZWHnhcbuo5XLs3bUtDWSQ5XZ2fBfqPoFLAbMdkHVpBdFvi1Zy",
  "key30": "3Q33fCQuasUmsh4EuWAoSPCPS8x5tqoi96VobBhSLaAZN6bL8ZX2LFQYC5oBJqpestWhdH6cjnK3ui94MjaDYtaU",
  "key31": "5CqGcWPPScTj64dcJRRprxSBJHkfbsDp1NUbse9YwAb8S6ZALT1WL5UHr1vmHUPH7n94bwpwnnYfopJeFthtQXsC",
  "key32": "2xwozPxv8q894sVjneFphC4ReLrzBszxbZkiVmG19791N8BzbJDFo7ooQx6awU75L5NtDN2DCPchJStLqVZu4U58",
  "key33": "2p3zwGhvZeHGEi4tYWxCh4NtGXYoWUvAC4ddei5vxKZFs3vi7S8mid6rJuiXwL9c9kCdmzPiABB6wDs7ZrMd9nti",
  "key34": "3e38ZuSzkdGpLZKhMeQaSDpyuvLyeyGUTBiLfrDgi5q93qdgPu5ECPUqV8qUn8V9wh7rQwU2ZJyyWmhrEekmgoSf",
  "key35": "LHZ4DsjnacXAzoboD2mBfs95sAetgkPwWjDxHmftg15Td58okzG8s18a4HuVGy4Xaffwce49s3A4NK34oBshZq1",
  "key36": "5wTqhsfd6FNyTSrBmLx9BtMZSVQ34vZmFVGdjvgfHcGD3YY51NHupYkrq9hb8fiw7KUTgWpZkzG8zrRWA3uMqNZj"
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
