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
    "2SNdsKwBZXNAPP48Xm9xJiYJSmmKgbvq2LZeETZxMKEb2mQEf9w2E5JHBpGufUZgJaGPKe435oVBK8r5Enbe7eHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbjHaAjNiAtYWNxE4uRExiCKk3UHnce86g9Sfsvkb3nAqm6EFgAXkJHNxLESvyHkd4UW2QjAQEGgkMzKtKuhf5j",
  "key1": "5cnY591tcxbXS6SBhF2K2FUWYKzHRP6htYWfGSkBRfNjuQJ3D2gE4b5kXBt2QU8YnJHuXafAPfEuouZqTQdSnrNi",
  "key2": "5vqzGgVqKYSHL29NeAgHkc49TZDmn1bAjdadCMPjaPevfgqs4gGZujtFaSWbAbecdgZap3EzmNYhpv3kN37LkKCx",
  "key3": "qfamsQMFndg8g4tifczJ3ePPWhynkfwYoY1xSQS1Rt6ZgA6jgyNPaoQt9aDFxUjnjWjG3XX1PMtWKqByCwzwuvm",
  "key4": "QmtmqoHt9pGWhdja2rRYQhRHbgrw5LsQRhvQazrfawbmTnkru9RmWTHvA4mEgEzU8Lk2c6LgcRgaN7jkhLUhnAd",
  "key5": "Sw9HXjopYsX9oRiEWYFAycTUhZU56o2RqbGzi76dstJ3be1cenjwUVFmbqh9ozWTQ6yakmx5hM5jihdCCahkYUX",
  "key6": "4EzSvjNaJjxFi7m6ymD3eyvi8qZwvDfQfS9YtPM6J1MCUBwV5LDSyaMzfTn2iecAsKbSU3VnujfaqWS9VKVRDZvC",
  "key7": "51CSaBTsZ6tMaWcKU6jVJ2Qarpwv2yeCmX4EyRmrhcuisPtoyF91nP5SHcnAmRxsigBVwugQMYSkVYtHxd6UJ8gE",
  "key8": "gkXuBCxT1exnvJrAL292uYYD78beshj7cgkw6kJ99QRk8uurAitiQUsDdapnDRRUzso5hZDhCe6sYK8kZJ49Mmc",
  "key9": "56tz8TgVSQXq5tXTCvzX5L1YAo1BpffdB3fpD7wcCE5igYdbY1gqWWV5Sb6n4add4aJP3qvcLYVLC5TD9Q2w2J8C",
  "key10": "5N7Sg5WpjFVn1gGTKaKJdhM3XHYwnuhEJKbP7iRyBPxZe7GfckgbifUdbttcXbJnYQSFZWx757S8hSvjLYFg3zkT",
  "key11": "4MXm7t56qhLP8WvMWyPsKftRKRXHTRNFj4BxL1R3Wpx11giF9kc5oyRvDhzXTTXKT2xbfK3aDSgSCcQKMXckpy2V",
  "key12": "5Z2TshWL3yxw7QpajDTr98aXS5k5ZahkjtTTePaaVuVxzdGLizS5xTDSb6dZBDkKPXtPnYJ4rwMP3USnNkvpWGZQ",
  "key13": "5hptPTXdC59zwfojPqRgGRWbpqYDvMwnMUXAM2PLGqhgMSFS28aUBfsd6yCEz8r8xbTaUL2U5jN2hQqVK2LnPbV4",
  "key14": "5tPd7ZtqPyKfLgPrWkirfEL2YhmX8JzxdD7QBho1v1AUzwyMMgZ2KS3yaeV9M9gRiKK4R3t45pThg4yBGbpw7Kq9",
  "key15": "4RphWR1EYRf659pH4hF4ks8abm31MkBQ4DeM8vM7CZWBBKRhvVqdiGrmgkgtiER5H4dKdCy5FzhphHhy8hDWGGAj",
  "key16": "4HngmiNTcvXMSruC4R8YgJighFbcokd3VpKZqrAaXZ6F2wHSi3Ype45NmPfdAzwhNHWnUh6seUqcxgqwDQD985GU",
  "key17": "VECeanZapryoR63QvGCAzM8DzS47S4ntDkcjZJXwbVqtcc1BWMLQWLui8iSGpJ9YrN6vVwxGD6xHQuoTcKAVXAr",
  "key18": "27DtFUCEdwD9QtBno6VeRdSdi6M2TYE8qrXNZMZo6XaUuZtb6ZM9wGtCaLv41fLbsXwGSEHG29kn1gDrHp7rBpFb",
  "key19": "2XMVY656Sth9NZfwKsVn7AeL1FPVML5Lm8WCWbz96UW1yRPBxr2JrHwzWauGrikLWRENcvpHMEnibpZ3vvT4668L",
  "key20": "3Ua75q1ar5HkzDpzJca7EXiGXhb6mN76fs79DMsEWW56TbC3Cyvq3Ryi46mZu57e5DDPpcQ2JPr4oHZAFcpiDirU",
  "key21": "XtTsqnHrS5KWFhVmyfb1eAUPjV21mxXjcyh3dEmuffc8oGfET9JQRWWNgH1iQF579NSVaXjyWYopyZ1wvz2zeDY",
  "key22": "2JATGnyavAVmq6aqoeF2fQZi3L3y2hgYMSsfBweBoEvgyUwKFgYjbbz7zUR3pU6f61ih2d6eKea3vsJ6bkxn1pvT",
  "key23": "4RCQ3UWwetcpS4HueeKAg89TJtLYzscqHVWqqzWk7zbsY8GYLPv1r7PAzz1yvKWJE5U6jf8LNEG4cK1zW1rSudUe",
  "key24": "33nyXYx7ccZS2dupzbDeGKbmjA2NexJET8pYSM5hTHQP4Ba3NZN82VAPea3FQ8CYnZmm4PKw9XMnquhKrwJTZ8ej",
  "key25": "2fZZD6prVMvcidVtWEtHqfZ46eHtJAZL66pZ2yQtyPux1owsPvdQKTzjVpuA3AWpamegMSJ5CWpYNVrovaBsKhAQ",
  "key26": "59jp6kFG8xW1fQr8y8Nn4vkGLHjicxu84ovjrzWs8ao1FrXjDy9A5P2x3GNUWSrmV931mhUM9qhXeDxe85gkTkH6",
  "key27": "5iLDCFo7HcvQgAQwYNPR5kjCqrKbnWk7Pwcc3xfDCcpAegkivAbm9BWpdMaudAzUn3CEeSn3t9vsk8HDZiLvhbsG",
  "key28": "3RPR3CZWVvkTrMR4u4fcb6ELUqoeyFugQLzHmkC1bZ3H9htL5L34imsf181xzDp4Kdjy8KeXstaQDnkvADGD6RGK",
  "key29": "4qaJnjSgRjrjP2RxV5tjJ5Nm6cUuoRLaWQwSQ4yvaRku6wueK46kr8wkoiA1SSWgQWw46f9xDoQeuxqsC7rsKVuT",
  "key30": "629mKmSaAy8uVTeps7WxExjr9nmUJJtyGVQTCtxoybUDseQPeQP2Pg5twvVFbcWmaDGXXhR1WMZeZnrVFvB6Yzgn",
  "key31": "5XG92agnkoLMMbmFd8q1WBsWnuqRsaf9VS4Xtw57eaRfDcPKtpiCaeGXdJN8NqpXkrgs1XiZ5WERGwvARAVeJvYc",
  "key32": "5A8jmYQaE8wJK9UBsC6Me8dsrmshHkkFnDDif3JrcBMRnUQCTDMa4nmQhDJAEf2PP68aSyPYxyW1EzzEwHhpAzQb",
  "key33": "HqDXG3qq8QRZ4ccziUnRi5x3ch1ss9QDUAN5DNFcGjLFtqmB29TMQUnVQ8yifnDhwETEdMeWqt8HUKAS5LUrghe",
  "key34": "58e4Y6ANdLiT6HnoYBLHFF3gvb8DTAo4g3732YKLhqFP7tDA4284YcpzavXFGNf8gLS9aM2QHZjgH7A2AFNccGe1",
  "key35": "3dtGyAgvcpwfps2QjE8jCvK3tguSVqbH5y2kKPKwbzTNLiKYBtXAt2evdq1fn6WGWi3QXEuH8izRBDmnrTn2UTXY",
  "key36": "2F1tedd3PrQ3zFjqbW4A6DqFpzobCxtfpauoNh93kbegQJXr5iPbxPg1acKDqjAHf1zdqFRzjQaQXu7ftCGcZoMk",
  "key37": "Nr6Pi2X8fF6YJGAbDQZqr1qUvbR7hxvvtdG83uMZjAcwbeXEXKVkVFjrF1y1MrV1rLB7xwHTZDRMGg2daNvaNJT",
  "key38": "4mPVnrggQoeZ7iooBjpbY7bxUZVWTGuun5HqF73XnviTXiuLhb6fA3Xzw4yq2h6BF6AAUc9jeBV67yFJmpyaFDZa",
  "key39": "232NDRHqRrteaLjzM2TZNVaVDAV5KbfdDM7d7343yFzTXMiG87AehERDTQ2P6aLaoLGYLNi9nFEkSpngKBVuz2rd",
  "key40": "sUUpcM1VQHWRkUxUW6iWQrRivK1odZ8K2LbQZeQpT9AicmG2Nehd913T9hJZuhcJ8Ao4wwDctCvBJ1aeZDfogAH",
  "key41": "5Ywx1EFcsSty7zxiXaDhTV925w9qQiuEmwWPkgdHdt4csuEtrH1sp91hf3ynWkpGqYReR3arTdrhjVCEsQTnxcW5",
  "key42": "41FeKm73Rhm5nMH6j4Gb5wF2dirS4Ee1sSDt2ekfB6MpypWCaHs31gKUyWx4wy5hyKTH6m4hnkAeY95Xwo8nrqdw"
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
