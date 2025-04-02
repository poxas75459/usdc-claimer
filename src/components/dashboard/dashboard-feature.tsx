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
    "5ZKBJG9Xaaf9Bj6Wo1XJ6n9tbDBCyYnaYLYJu8zJAhBp38Yro8UDpssEwcH7sucjpzJYgRRpPxWsEyuZpQkcHKxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRTdnGuN47HAbNrpBSf5AJ2hvJ5CvkxDcmdsTdhTjQmdfvX4GaXR3yqGv6EeNL7MfZAJaQjpcKmVXj1y8Cks5WR",
  "key1": "4NgYr7KWTRQMwXKjCy6UNJRuAVpjmnYo2mDnZJKpkQz3mdSTeEcHXAxia2uG6XxJQuGAHVJbkQgKYASYap3R1vGu",
  "key2": "47MSxTbswpkKsPppZZunTDGx9Ksd9kGtrRYi49oLGFFuNfrPyCEX6USUvUAT6ZD5a5tfxpP5qoSqa9BtDduMpqoc",
  "key3": "477YkDCtecNdhLMpTgHq2ZZ39N1FtqBHZ2tMUj4xLfYq21uPX29PbtxqbZ3yft74djzzGYEBpoH3VH8bE6YxEAGh",
  "key4": "3iwJ6cmdXDHnrCZsuZj9A6hJCWUcT4U53yjhhxkhaS53X3Bqm1dkTHGpNFzSVan3AjCnvEp7vCwAb3je37Vo8oHM",
  "key5": "65eByT23ni6ubpjZXTDNQgK1Q6XpueCcs8dXCNhmcoEcnHTgXahtLCfN9A9DsEa3BM6Uo3yucEdskwHbuvCYgwhB",
  "key6": "22oyrPTybdPJ1oujB3Bqr7YVdmRTSAmhfXLM1EtQ7kgEMiuYoE8VEov753BPA9rWNwoZKeUUGk4Mg7Nc1qVBhyB7",
  "key7": "57aLHHXhosqcm1n9UmEsEUvdPYTprk4MzMpHGKGKd836XoPsQVctdqGygyF2UoQ7HTa7iA4VgTRpNk5AQQ2VbrDQ",
  "key8": "32yqCKFAGLkSwfpAmGzbVAyjzkqB82fJcLErfynrHv4K2QkZ8G6ZXDMSs9qSvetGoecwkgweA4W9XXxoLfUS3pub",
  "key9": "4q7Bizfr6r68zZXVKSD6FxYWu8UE6uGETC2YaEnX2Q6YnxqPMrJHK8ViwBZzGyt2mg97KpTSzGT8jFuC69SDo1v8",
  "key10": "2XHfZ7XyvQrPo58SiSFxqZRdV49iAsgLXWoStBDQVMUuPMVHKgsqyBdfVJiEWzRZnMY2ThVGixJg39f93GcyB1dr",
  "key11": "RFZFmq1svJz8TE4LzGQamWqUz7upgG1UEG7YAoCV8ssBumPECj8B6TQmsRvsuvcYQDv3Xt2swq3LQK7j518unKB",
  "key12": "4i7UU3FgB1yJZZCQNCEXsnfi8Gh2fGgp2kJsTUeHEP8iSy5uq61rcjRComGWaf6KrbtTXZergihdUiMT584wLjJm",
  "key13": "5pskBkYtFFuFf9pBxUGXLqYiTQ7E2KLmThBqyGyJfEAP7FgED6t51LuhHDisChpcFSCoTJtb1rMh2LQyzZzbwyPw",
  "key14": "3jVz83DA89FeD4V64jNu7JrktkqmjfRaKqaC6dhzBNYFYaM9FTFHazw2uUf6sNPC4SgwpSnkHaHaJ2tHtzRU9z4V",
  "key15": "5dkSjmK25Ps287itr3mUaWxREsvPkCdXUE7VKXHTtsMNGrVmUsTwYAm7bTkALfFvCSfkewapiFews9zAb6de4Gms",
  "key16": "3FuTguYzamvKe8Eb1GfjkuYfKiZFRetsDSjBzeLPVpjmqpUbXn4XX6ibqgKJxRkcXc2U5gkqCtJUK28qphiehzc",
  "key17": "5p75M5Bwi2Dkdd8qxka1xFcNrokrw8oUgrRUeGAQ98AmxNXVY8MHDitKFUVKwwVdjkBi2S4hCkeZZcLZsxTTSH67",
  "key18": "3M8mVTVWpAg8ZTzDuaqcbxcueQrMxbg23dCw8Sv3a1qXeobsEHUERpfzfzigaDRUvt1TkVw96CCoD8JkkGijsNVP",
  "key19": "3iLGxKoxkRqk9duCe1crE7f4fk98Qjg7MoNpZAVcxr13cMBupjbSszSnNLZZRyXGLhGwYnAFc4afBPqwe7jXsVJy",
  "key20": "5bCb4vj92mfu44UFZFSbL6oUa3Ea9kAZP4zBkkHLa5w6i9fCKUv5iQtndXB48sXH8P6hozALPXCMuFsK4AS31Y41",
  "key21": "446XTxgnPaoLi6HbmGTrYwzVCoKn3hvRLdB7WgYpvz9J9hprmj5DU11sqAyzXrLkc4hmFVK7U5RAf9HBBJCZDP8S",
  "key22": "2e6GxNrzDN3SoaN2VAwiD9VGZis4EjPG13Tmr9dbkyLNLXYcaVnJm5y1uAUUFFXimyUe6wV81K5X2e5asUHdAN7d",
  "key23": "4aozVHNdSpuWvYg8Z2PTbRLdsFfwXC3LXYjMqRkWoEbbjTmBxc1yqygMgZRHouV98DLe3Am5DygxJzeTQKNrBjvi",
  "key24": "4cx2mWvhSDa8mWkb4kDvbKkyPNHe2ig9dvzsimnyCNKmiA5erYiQNSFLuvzS8qKo7dEdsjfirBEoQ4cPUFrok9eq",
  "key25": "2iQUo3xQozAPtAL8CBfW48pTWQM4xT4TZXMGKxYXJzp2E12GnrkkMspsBAapQMi5pNKAMewVSdk7TbQeiesmRAPj",
  "key26": "2rzZKZtdnnkRzAj2mHZJFUi8BvjLJFx4bGKipucrWnidwWcgt4zuhKYFKmzGTocjSSqKkyxbqaTKSs2WK6U4Z9Jq",
  "key27": "4HkU6yLEGZRwj1BjY2jKhZcU6Y2RniLaXWQ1rFdHbf2c8mQeCBZvphpAxSmvjzcbRgpa2UuednzngFhuZW3rHmN5",
  "key28": "4D3ZfyuEXsheojAUbq9uGeNc3bF6WY8ipcE9PjCQT3AMPgVJ99Wtb9Gcc6hbduowiyM518bbTZcL2JcfigPHDkTi",
  "key29": "3YnSFzzUPkh5i1xx6pLnDqExb2TV1Dy1dCMD5NDAeKDHv9nz3xPbrKxCcw34VtDVXk5AkL8DoKezudJv6bQaYREu",
  "key30": "dZFTj6A7tBnPLaFfD18TZwfwB5jwKuUAJKT3LsR4yfGH6xzcpkcwbFrvbrBckMgcQ8tAyYorQ1kL9vKqKRngAyb",
  "key31": "3PxdsVbg8sAGK3hLU3FJFt8exdANwg6VgG69oADqVMcQ5ruZTQrAK8Z8aNWHdffPxR58GZiwASsLPA35xRzZGqbP",
  "key32": "5VbYHvbxnKXts3sgyr11vbc51FSrT7XgDRDKcAXxcSknSQA9xCDNCaCAc3W4Suh1TaGsCZYXhgs2hgqyQV9LuWoj",
  "key33": "JktWo86AAXqXyNAx1j95ecPfPrN8qqxBemyS8hkLY6tvYRZBYE8We2doEnwjVK5UWbbMs7fkBotnLxkJioj7p1m",
  "key34": "UNVoJtwvxvjz1EAY5ZDzu3GvVNyDF65hQReK6Rsdizhnretg6xKKrgWNEyaji4iG4GKfhTLDsCiz4aMN2wvL7K9",
  "key35": "34Bub4cvEKvSuwwmp9t68ysBV7WP3uUPMJdNnEX7FQ6mcJMyDoGCDgyZ3HxbGRAv2Tn3DgwKn7J3X1h57sRLWEab",
  "key36": "2FejCYNeQfzzsuPbcMdRR8gk6yBSNndWTHAfRUFKz3m1tNtMGiw2f2kokQarWe4btfNFqXnLJsnZCo6xFvvYTcAJ",
  "key37": "2wDJL7zzCZJdCGGXNo9CXXzVBsF67f6AbokufDcZaiQJYvxm6DJ9ewnwEzDfLS9kV2DAAgyqRsN8EkrMgdAgwp7j",
  "key38": "3QaJQE3XLkySnYYUbTDS3qwjvxqnKCoTKxnviHfMjSui3Uo26mSdqbVHDG6UdfQxo8VozV2Efuzaam7wFComZ4ez",
  "key39": "5J3NCDQ2NhcnAJs5pMdwZSpQJK15sM35WCLAeCrCp93cp7t5A4yXKqVfeZjMYDsNgWmtWbWDLmHXo4KCpfQyEyq7",
  "key40": "53Qx9GUJyLNbN6qTq6HvqFJ5FLBtrHLJ5zbsrrxnsRf1FS78BqBjzz4Zej9SqE5uXvvqnJ3tTFSG8jpJR55rohBT",
  "key41": "65SKUKSnYdr1RBwvWKPaLcT9qay6RhgEMx9wJhwHxDT7YESPzVvpmQNAccWEmFopWzu6jKKZjhCwNvbm5rEyKemu",
  "key42": "4K3TUqpASFJax83jPpMe6jHz7RG2ppwUa4Kqwp9ybN5j7R8ffNcpXSagb27DEPMTzzEDUzcqBqH5vcQwwwoxXvQs",
  "key43": "3jpMxNvSCUqGWdroBAVUbvig2Rze5Q43ACoTCkVcAfLzPrqt7CiLJ5je8cBRAMD1DKBwQ9efgytnRpMwjupdSs1t",
  "key44": "4TMNX1eh8gvxi1b8Rwt7mkb8ieqsnyRLUpck12ehwRDBcBiWarJBcK1FazHxKAXahjiZ5E3jicpNLQk3wswMk6dH",
  "key45": "3gxNW7WWjxRjAiJhK48PXSrzDyQitM3Z8mYoh8zN3DW5dnuWFmFr5pnL3Xx2cPfpJNt4AUgHCwekUBfjn5ACaRkK",
  "key46": "3QJ5QigWwLWkXXahihtKKGvtjbmErwPYpEf4gcnGMh92wKu5uTiYjWRxjbtnvrQVPgHCr49F6pCt6ZCystVXg5uP",
  "key47": "3521XuxjaVZJhtDoX8Ytex2s8cRafmNtpY3mnwseZfNEhNZGm5dd6aDbpXYaNZNF8F9CGpQ9pabmfkDnCo7xq7EA",
  "key48": "2s5uW5C6yss8ArAVT7Gr4LcEnEBkz79KA41e4zkXowywgfhon849MbWTsgchvAaLwqdAeyFra4tVcFB8dYputLLX"
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
