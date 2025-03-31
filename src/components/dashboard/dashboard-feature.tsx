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
    "5uZxybcrotEFyhwKAiuGezc3v4jM9b7679HpSrraZtLkbvdb7BbMMV6QwQPJsJsixypdnWYoz6bVLvTX7dhttjp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F8G8LsRCqVLZUstq4PgVNUiYDkFyRZPdYixKwHmrumxAYVt96H4W1T3Lo8UEh6NUM8R6XVSFLKRaVq2cVLk89PZ",
  "key1": "34krpgRPeYMzrerkPrkzrCmLgJGR7r7bQAQzEiF5HHQ2b6aJxryJKfgd9kB1sbpjk91YdKVYnXQdq7eibGSQT6jF",
  "key2": "2ViFQx3Fpisye3zTvfghtCtoe9bdcsZHk16YcqnLzV7AQPREQqieXynotocncNeaNEtKquGcmdZob6KB7EDDUq7C",
  "key3": "5TfgaE3xjTFU3A6ML3FSrjWQMoyyeQL7vtYwq4TL3UDZStwE6CPrNmjyfHKPBZHLv2nzynGJJTX7QBM8f7JHfNvJ",
  "key4": "2aNF6RfEqB8qzvv7f7CW89zR1BfFtovGA8AivFD6ZucJe15sj9XGFQiiAiFRxQ2MqWfE7sZJEJKk5L5cQmMHuVrx",
  "key5": "4RSV2NooLjsNmf9cGTNqe1jn94jddvYEWKER9vefDwwMKAWFfSRnF4NgkcmkZZmFxX2zvJkgqXvsjyspnmJvfRio",
  "key6": "h9wKKCxjvKU4HhZmeQ5UsXzEDRL4PcXYTnA6ZvTpp56ncKeKo7bG28MSmPdCKPP8UrKHbssp4VGVmy4P5LjcV3h",
  "key7": "476jhfeD71vAeVo8GP3Bzns7GcUFcB1voN4LohGHFLMbnKeeFzC9KmiE8n68DtuA1kX9E1x8A7xR4awYzhep5wTG",
  "key8": "5RYuBznBbZt7oSMU7TbkCKuMjjLkaZsca5iPB8BWnUgbg9aQZCbYDeDuTgJZUk3zTeWUz7fakkzNhUq22Wn86QsC",
  "key9": "3PW4WtJzHtpWJDYT8tMYV7SDAcTH7acCSq5CcAgPcLNAwGHieAaPnjF4waVvhyoocppkphz8A4xis2urcf19Nx9s",
  "key10": "2vCn4JhGr8SQedsK3afbWeLS3SrZiaD26v2BaKPpG6txfrCSkwXjZ1VdPE5ZEBHSsNq4D4yHtWJ2RrnKpdeLSD7Y",
  "key11": "2ipytdtqbwbCLabcZhdYJ7RUWHPHZU6sJjAwxEe9SZ5Z7XooPAs8uVGygPPbMz35QMTS41yiuvmP1AiJfWV78gnp",
  "key12": "4WWZGXAB6jGXQg9MD668Te9swdHJTziHt7gboegTfxKoradUpVGDtcJUZNs9xTaZRJ9epc46VtoFVSZqfu6JfWY6",
  "key13": "4xGri8qFguLDs8L1Zv5S6d5HSG9nTxTGYJpPCg3N6BJj5RJm2p2XDrNh98Sb7EBniKbB9zEzNQpcHztJjYLenVKw",
  "key14": "5AbTjcYfNmmK8DeUr4ysb7EiF6aVoMwy2fe4HaQCfkRSCF9ASbaMGY9FmW5vCVsVHncH7A2Qix7GWvz6ebrcciQp",
  "key15": "5JmDcgCMvQyYpk2y9ngAHoz8ZPCfmabjQiXGE7nHPymdhBJgAUDtMjSSWh5thaP5EQC8UFBxDZ36irAvS3DZSyAj",
  "key16": "3uxg8pRiNYcg3teakm1zxHoqLoi7oVNKDYBdqEa6cgAANTaMRTHUj74EW9WCLKP4qMdN4drX5RqzFkAUQaqSvAqq",
  "key17": "u714ufncu3Hs8ggbeugJMWDHSSNMeEZRWYg831sKPgi6sMGwwfhvMN6GfwWWGVmspDDmnUSFkZW5CUL2xSpCi1U",
  "key18": "3sTMVdwQGBzM35NokwscqfyYRSW7xFNvuMP1EAGfEishXRKy4fttyJtv8EzzWeXM4Znh5zZi8XsQgrKt9BHTWyYT",
  "key19": "3asFaqHaeBiHEBQ7Y1GKPpiCKbPG9jjU2MScQZkRxPQBSFnzKhYgGZbNYb44mqKZR4Uuv4K6b2bs9RQv9MYj2MnE",
  "key20": "3GxkKvP73Yumhcs1vdwokTrtjxZWkEu4BZDxXBLmTiKLvXrprhHvtpdDjgMW63eRs2UAY6zBMhaUeYuFX9pk9ajK",
  "key21": "3oUxMTtZhiZ6RxvTKR2FbXvTWiMqrt6PQ2XkiuTqgewHWNMWUJsBjsSwf2wyp35q2xET3XzqhdVXgL5uYmMQa9Ba",
  "key22": "3oiW12CPuqMVwFQPq2752cTE6t7p4p97yARqv6qCgrkCJJ5BQiUYHbqjDYPZ8GKyQZqGNDZ5zTE7szxdDG8fK5gF",
  "key23": "5F72VUmCNgqJmGFoAmu3akPy87kZKQJxe5Voem352DY86nUQkMnxwET1iRN4p8GACQGU1ZbDjL75fG7K4fBksyHh",
  "key24": "5Krh6cD8UKLXgGUkZwixkDNCHCaUXPUK7opn5hu9br1sp2QhLDN27xk1EVugb3XWbQ5xoEPs3FwXrJc9W7Zgo1ap",
  "key25": "32Z6Zr6o5ucFF7PmiYY8h8arM56LM7LCCptMzh8TVirmsg4MN2ZKQaaeFpvMPuG98PCtv78CPPbwjvVyU8CZYpyk",
  "key26": "4CRNhqQZfvZg2i822Zc9YUF5G7iFWdtghEWAcnc2LrXD3wkfKKSa6zeGSFjN1nAz3NNvija6JXeBUXPBcTUFKVCg",
  "key27": "2LEvarz4xAc7A5hmDwKDgEaEdJbGxnqcJ7RSBAii2uMB2V8rhUhH821Uav9GbTatzvMyX1EjHeM636M7oZGrU4DE",
  "key28": "3Pmn1t4E3TxUCC324GxziJ4qnNPnLEXAsUT1ScbMPh8bZvFS25yN9GYJXfvjV8AGCZZ5p2Q1usYDirS89SgA3uqt",
  "key29": "2og1ofoUiqRM9t5nLv6Moz8tJzS4UyPf7RnUbvWDWRGkWFbu8jMemQSyry8UAn8MUhb7wwbkjT6KHy8HZn28v4GG",
  "key30": "2FGLZcCZQV7QE1bXxSbmRnLZpDoJHm1BcQ424vADf4v7FfJoNKwUmAoTNYxB1GktcXqywyGBgGLJdBiVT33Vma1e",
  "key31": "4hnRm8nrHfsAimtkFhY2qMTNfELQBPgx1zZrK8wBiwKVdeYi9RFSo3RUpg3Q51Qj5qJmhgZTg55KP5YH3qXWiMQe",
  "key32": "5n362HUmcFmDxc9k7wtKCU6kSLsiCAMSvF1dxUK5NG8Hd5fykX8MTKibycXtuRxXB7YLF8CVeFYsw6yvKdFEMmhA",
  "key33": "4RXEWzyteXr2ZovVRGSDWWtPdvCXTuoyMHKDJdHxtUp36rbuW7zYQiiD3zZBGLqFWv5b91VmmNbyJ3K5BKfoVDeS",
  "key34": "4p4hb1sjLXgVnHMx1MVLts9rwT9wQbXYdxaGHZReuwemDu8xCx9PnFoBoFSfB69fGdQNfEUdUcSVuqycD7YekjHn",
  "key35": "4hQJGvthMSn7YuUA9qX4rxhE97o1sZvTuW9rpPwKbDpoX2py9JQjT34CdJbCap5gpe3pi8Gu6vJSrrsxqk7fbBiq",
  "key36": "WfoTboKsC3TqLs3dXBPPKLWqCgF9hwBJMrmUovyFSEHXpZwxdXaeoayadZqdNtUCTjznEUh1GtkNnZurvN7dcAs",
  "key37": "56rxrxAYuSheruVeAXmCZnqVviMdExUtR2fRj97BSfuW8DBXcQfiDvfae9mx7XNAma9TgfH9igsbz1JLUnsX27me",
  "key38": "3bsaFNvJBfjLD5ZV9PQVMJe71KGtAAF4J4zTdKGrvLjNWhLCFjzN7x4k9tooNB8DaBYjP5B6qKLrhTkgCj1x66kY",
  "key39": "5MemjSBr51fxZDjZgQBmK5WiHcXhdHQWvr7SEYhQXt8iDjeCJ1f7QjtgoJXJTyNbuNhAYdN6so3xCL6nAzHw8sWp",
  "key40": "52zGgSfFKUdpryij55jTvkSSvA5Z3qG8XWQ8dPu6aGSw3uj9YYwzif78zkC8JeiJx1M3cmQBxaUo6vFSBfyXwdLV",
  "key41": "5KNxvJY4YSte9CKFtpQT4oeLpPtjFMo4xh87SvNsYE77T6Lj5xfBn4dNgH6CciMj4azETMxbUyhtL2Dj4DcUEjko",
  "key42": "bZ2ZrmoLyWhVPytZRHanPZn9rKLY9pDNuEBR3pC57WD85BAbHf5TvLu3AYYPF8ZFUGfubGckXJp7LYVowt5769r",
  "key43": "2KCpM3qusxEFTcRxNXbf6c1Tbe8RryFtbWYXbyep21zJzuqrPxGtwBXQ7v7UMB41aK8pcSA5oxEEJgB1u8G7LNjZ",
  "key44": "3q3zuTq5XYnZ7dsQkhH9D7hgtwx1SQnuif9WetTCzk9FHy98WzF95LtTDKGAxaJPs1eiEXJjPRZ7EoPsLdz2KNTt",
  "key45": "7QeAvMVfWqGSYzpTXUQBo2CzArLshCHN2V4tA4X1Ss15wVd8ydz8M7YX8KvV1Px8wczBm8FfQ38ATKoDaGucRSd",
  "key46": "VcU7Vz857Li2oWey37heQQo9WMDPEZ9JpU9gxLEJwPEa39iaDHsjLBwa447gb3ZKJij5XSEAKNiuYNVy9RgnDZe",
  "key47": "5yLLMHoKMxhWjrm49zvpo3RupAV5P5UroGXZgfRnEMCnJ6yPYYUDJ7jWmYKduynXDcmExtF1RJFN2vZsTYqdBUsD",
  "key48": "SH7crGuvLDQaqLHsfFa9Zc2BybzUPCsfERrcxGEpYvnx1tCZQV2s8Gwa6rf2QyL5a7iCt3RLrCJMbN4wJUpmrbc",
  "key49": "LFEyjfvxpjoS7di49eWnK2NANq6W8vCSrEvT2vQy7LY9n3KnAsFPXnhSgEBDfEiLwFLNixnXt58v8xXArAojkNq"
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
