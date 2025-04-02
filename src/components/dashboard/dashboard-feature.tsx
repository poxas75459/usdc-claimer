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
    "2FdCVtgToyZe6iwjS1dTZQfg75ogjJLJUvbLksxUqkiap8GBXrVZzvD4rhg6my5bb6qYE3tVDivo5aSjLg6jXczV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJ37DkfD49u84CCop7EmMUu8mAPk6yxQL8ewi4jMm8fGVzuNQ3CaMQRoT6Ub2fiMxCF8L3xYoy2v4njSZTFQTV7",
  "key1": "3C25b8Y7jkmoVhirQnnLYnKjxuMyirvKeAmZCL5vezZKCxskskztBUNbvQpdfyFb1a8NVsJYNuhFRc2XBiGquRxD",
  "key2": "3QEBLnQGcoWDC7BfvD9zdmJsD3ST4nmWsRC47DX9ki785pUyeqdH2bXhSuQNRZXvjryXWL9VSqoFRULb6p8ZfwfA",
  "key3": "53xSaqAMNNKECk4iVbf7kgfaxDAfshUqiY5tAxqERz97NVJiynjMd4ionJVRVhHcFC9UVKLCoDn48fYfkYXrDdfy",
  "key4": "3m3MbQyrer9CyS9kb8NzrETYpcFzAXGdz3nF85bgen6Ym3zyTEREWa9bwQRzMDjWzMcGYhX7cQBdw6LNqcAqjxjE",
  "key5": "4JgEfucFRTxRnBczAXPpbFZgCFJHhX3TYLbRCj8ZXX2ih3P9oqFf94U5taBsrCxsCCxediDHTM21ggT9H3Lo6qHX",
  "key6": "rhxQY1QhvvQEwMa86tTDQt4ozpXrwg26dk9gM4GbSxJ7qy8UFYNZf9kJoAs2WTxm3ur4zdkSQUGsSe7Enfy4aP1",
  "key7": "3N8rT18RnBh8jmBvwhLU1nW1D1dmsbqohLRMES74QkmKxrLrHRiP8nAw7YhFp2pYgxJhWtYXfABZkzFwnEu2XhAq",
  "key8": "4JP2oywstLdtjTc6vRUjKYmmgDvg7mDMzHBM66YMHZZVqnQYTKPqGy6zPH8gPSkXQxejpXZ6M7XAcjxArQ56dtv7",
  "key9": "4j4cMAi7sRZ2mgixeyXoK1srUnEUMXdkP6aMvxdpbpSyhDq8iba4V6HjRXg3uhAbtCZJ5WWRGv1gUmwgrLfhdpYx",
  "key10": "567Z9HNZ2CJAKqJg6T6ZeoPWRqwqeq4UazTtjnQqjTzjkmReoDTTEDRZ7Grg1BzZPMuK5yT6Tg4x6Zr793PC7Bw",
  "key11": "51DdTZW292fxjRjGWWQ2jctVAzyTNkyMsVbWQCupC2WNyqKLSsqqjtTpJgWAScX9vCiXC3aqMp4ict7TiipnD649",
  "key12": "4TVYGLCZgpNiJFxyjfUSLBHEzUUo6sz676LxPqRwQ6S6UAsy2QCBpC55uxHVeGN2yZaJvRRQ7XtnPvS4x5aYAMSH",
  "key13": "5pZtF1bfMd8Au8q8a7HGDed9gueq1jaAEpRpk8Qq24LZ26eAHV4xxmMLqYUtJ5bje29pHorUnK9T5iLG9nXkrnyV",
  "key14": "3kunuohaKQnK9eNMPZHKwvkoMoEjuLDnB5mXDeBkCJewEQzjGexx3YM6R2LSNrz9aYN2vASsbuYn9px6zSq8mZPx",
  "key15": "5mq5FAVVuf3aKXysufoVgYgW5Yyr4zH8tRZJr69r3Au6wNd84C5pHbz9JSp2uwtqsh6QM5Nuy4AW2KaeG7We8HGf",
  "key16": "2dSq4uVZYEQVeTLWVnpqwnYPzQJ6omFynHbxKA3j9eChkCQoz34CQkBZHAESpcBcnYkZ1MX2xnQUV2u19dGQaKZz",
  "key17": "3Pd7Z3dtAWGtRQLxjiWbsc7EgxRFkg4XHF8psKLtwpqyHRPtwUojv9iKT9v7m8VTcog7rZXR8uWnmJZdg8RH5Sz7",
  "key18": "crPvtvsQPv1h1T9SAn617MYZqNtpcDxeLMUw2JvPoPvDF2zHHy64TgRuqx7WWnGD8iRQL3MxrEAXdv7N5kR9Ce3",
  "key19": "27s1zg5jKsRmqsCCcH5TYpvt2XFNmbL7nmAazhCiCGwNuLKMs1oH5hTQuZdJBZRtAWm3ThbYC39zjFzEaJpHTRbB",
  "key20": "28V43b94UMS7nMegP46LYB5JKdwKyVxa9fpcw5BGqpP88odZn5fCZDmRwmSnuKuaGSp5vomQU6Th1om1sy3cXHSJ",
  "key21": "5sP5BTPSXXofKAsZz9ZfcEu2wYsxW65Qs5CcCV83iEBJ4TfWsE1YrMHbZSzjKo297nH9dt6fWZNsxbPTXmnSgTdU",
  "key22": "uRqTZ5C72tydQWo969ncB8FLqJfVu8jYLtsUysgXt8upRFphLXYu2Hd5rBV27vqWXhWR2dVk5dZ4UGkKcTbB2Nv",
  "key23": "5XoA19oYBj1fDv5iVYFBWsp9u6fnsHkic5iCEqtsujfK2aNYTQDintWguSyVRymmyjLCB3mzvGfyDrWaeo9M5N9z",
  "key24": "ejNsi4y9tqHhgYkegPktZJvvb5f4a4mZeoJfQ87WmzKhymTQ1VmLtWHqtHi12NXhmpAr84XnWcHUQTyXRG79xA9",
  "key25": "4mUSbkEEgrpUu2ThRioTSknfLqinoedbh8uafV5s3vyeUXwcCwB6SE61VXZVTSRTYp7KGxMxHET4oUMzufBaeC1k",
  "key26": "4vJS7Faj2Rn51UzUdLaWfx7XKDKNn6Yo3vXGE5t82576vjmmPQANS1VVZo1r4qjyDUf1BrZPrTFHPcpPk49isG1N",
  "key27": "3Lye2LiS1SwpBdWGezLNNHfmu8Nk4EWbqpVxsbJzQdFU9DUbLMAAy2xEmZ11oYCVvK7ZnVjsqjhMy4LdkSFr59W2",
  "key28": "5zL3MPFv9NVd1h8HsT1uvF7RueuW8H45NGnhPxTihV5F8QUzw3dBq6BKtEwtYMFpxDSasZvkdjhfNYKSe4SXY3Df",
  "key29": "4sJubt47aNPEdS3bvsN6JT6Q9mJEA7RfyPqeQACktfr1LLpTXgf2atW7bdWboZQ4K4banaJFNvggioktvZaBENnB",
  "key30": "q3tb8rkoCcaTqi7bSpLNpoicVkQKXjYJfrFYdZFGVfF29ZDJsAWfqD95DEMUPnGV1aU6apnpYDnbj1zuhdEaSBJ",
  "key31": "5i4mWBAZ2pfRNxpNUntUKMbbEsTEnXhNuHNYHc7KVsPZt7S5N1CgbTxNEQTGQUqQHYnQfg4WUcNAYBCcUuECkB6T",
  "key32": "2h5GnhGbzHeRr9oCfXKi8JiKJ6Lq6oMnNVcGae3uCne5Vqa9EZfxHUFEqSM7LQ3i3E6GKFNpWbHNMxQQBV6T5o36",
  "key33": "27z7mSc3a8jvRRvtwJrqRUeqqFKzwktaUXYqs7vGfbgD6x3Uqwn17fHgvpddH2h2dzXe2aKcyKWKu9secrPZMVkY",
  "key34": "49tRvtzxPkWyjudbm8JPcJYuD79d9fruttKsKt5qm2GzRHJwajxbpFgqApokr8SV9Y8Tn3GvRoWS6792ps2qW9QF",
  "key35": "2gT9fpqVaXm8Fo99kVZCqWHfXfKPojftpLuNw3adY9qu8rufkwqiUtZb3CEfcTchvoAU7F7aP4xDuiLEwc7DEUUX",
  "key36": "51CsTFLXxquaxDEn4d67E93WqMUwXiW1ocaSfhY2bXWZfeVNZRWPfVpa1JAkWQDiv75sVkxc6yXBkJnpAUz3immh",
  "key37": "5UzafjDJFioyuwViQ5RYtoxGoBnY1sNZD1D4zBoQvZr3FNRERFHjbLGZrDeiAvBBRoGEpEixwjfuFE7GSzCMLTbx",
  "key38": "3stTPwPJqiyNMAMW1p1zbesXdHSE5WUZiLFrPaVjmSDL6y86mZrg7wwiBEesvonx2HYEboxQEBbPG7iutHWmuaNh",
  "key39": "5qDRvUFajYhLdYsKpxvzxjdhmJAsRhVrwcbQnwfyYdmSSE5gbDFzirJfs4BcvNqjGLjonSKipELwHS1fpVzyL4Fe",
  "key40": "5uRWQA2w7REdkENCLc9oiGwZocmXXhGNucCpZb6iD5jrvFWV927NZda2fX1EsE1Zh32pWWvPk9ipUAtNVMoR7moJ",
  "key41": "569gee8UvfHazjSxcdgqHiHbwJExK5XD4BXn1kRvV2bgno7t28xzMeYMgGbc7VCEkLsx7cZkJzgMC6KAkZ5fGdHf",
  "key42": "5Z9c5VR29e53rFXiiCtRbVUKRgmm39WJs2mCULkFdLQKdWDnS7htEHzCtq8CS35V1uZe5GSxvLKUW5G5nbn6Uzni",
  "key43": "3gCxdBJGELPUW5yGXagKuQTh7pxgb5hWWLhihrCCSptTAiqkmiM8rE88BFR3huDmDweLobc9iciq8JnFyXBspmzQ"
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
