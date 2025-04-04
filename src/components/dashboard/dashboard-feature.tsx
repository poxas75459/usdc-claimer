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
    "2UPDqpZzw3UcfHYMv4LuRArujZXG9tv71CMWNmdj71UUzdLyYFXuQhuetsz4rorBCRfVdTvLHSCmc3QViTRXUTAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M7DeSL5z6thGm1CJFRVmmBkbiN4DZPwzBiELyWKz9RqD7DMR8bLcSezBo8Qj4NxyP8fpTrg6zv1vrimuAbjD9Vh",
  "key1": "29TEsJthd4w7rcD9UgEfCsTKFtTsLdfpBKuz7JgvFtqbzgobwkSmS5DJdHj7AjDwzJsUCxndbXyda5724GE2BJsR",
  "key2": "2ubvb8sicQnpVt2xFvQWLcJQNaNgr5XRbDypVBoyYheeWtPLqXbCjkRmZU6wif8rRdMozEK3oQaisPhCajzE1Sj9",
  "key3": "fb8gNgM16SXA1NBysHhYv8DFAvC5ujMR8F6ZjB3eceCf5873jZSFGmSyCX9aad7tH25KRgcJxeZnJbTS16h2omt",
  "key4": "U3k8jwe8oLm1i2EryjMVxmCxwcptkrgkxEkmWZy3H7QD7KDnusonHaDSD9QZzpCkVk12P6EYqwG15vPGBn7VSN4",
  "key5": "2Tstf63sAxGsaEVcxKED1RKnf9GbYafB5LsF7JQVN8bMirKLX9sNq4m6qQWtW7VxBm5XxBdrX9ekA7RZovAsY4mW",
  "key6": "2wFVWQpFJRyv2hN4z9bd6SXB5gUST2UYbNJo9YuS3kZ2dg1VqcrH7pdWLSHvK7n3CfjbUv7vRXa2ZeHAnxup4Tbh",
  "key7": "2a5Wj4BViSoT7VpVxbN9tQMf7mtN3ECh6xJPtikADWD986FbpY7zx1JDn3yzfbjNuCn6m8JMyZeSd1YFQbK5p7nd",
  "key8": "c9suTj1tcqnanPmd4vEV7Dy8eou417y8D6eqmGLaHx51Euvt4JhjhJFJpqHbdkwtXHyt3Br9j58Fxnvs2hMyRLw",
  "key9": "2hChn4AYQqw628LKdciwuUq9eWZk6NL9Pb5p5ctDyoBwJbi2P4aVEwPPsdArmUUoFf8DKvQ8yaduVrbKSnfVJeK2",
  "key10": "3DhtLtgEmSwCSUYWDwUE7fnqsmfZhrkZY83auLhsBJm7w17Dbxjbn4d8bsdBLx4SoCdAhWVDHkbgCYyF1LCqxi6d",
  "key11": "5WwAd7pBBp5CgSNSAPFCjXaPHrNsmjZdm5am3mneudYDwhUNKbYGNcJdxNERkNkCvJyFMrBnJ1v7CsKTj7RA2Ljo",
  "key12": "3PZb75NwB3qKULp94XbTDHZeChPGVwYQRyFMnGmKcH6jQntzq4yvsbnk1RyzR9Wzd1QBKKMcUwvsgoqzaZr69tsr",
  "key13": "3zDaw6ZPUqkhoeNbLXnCTedwxKxCU5YELyTFy61pm4hfYYwQzoEY4cJUJxfXCZ5x9G667CJBwv79kFPbEBLyT8Xe",
  "key14": "5B5YsEUS9k56QwMuteiQCch4U9V3nQ6KQvuY8vsmMVkA7VkxkgjDnoKgqNmh1xctEpUvo49mvDhzfHBt7oEBu1iH",
  "key15": "2cuG7s2Zg1FUjzjZBc4wQ55zjKU1EfDuVRMccuw1jhp3984Vic6qcaiyqXRLGrFfHH2E8M8A17aM8yiMyXu3cXic",
  "key16": "627KzBfwqwXSK3CNz1MqNexcjqL85X7Nzcjfk6GxH6Q1YsnhVnABnBGoFrPtWuVAbyBTjySU2Rj9t6UaMXXsqXGP",
  "key17": "7RaVUCS9YzqwMnmnAFytoubnyiMUwfso1Yi2knRwMGFRd3ZC4BeMdkJaRMpbZ93xY8Erkq5p7svBdTsC59xbu5f",
  "key18": "29NvVKRgcxJmTH4QfX5bjbj7Xj5tpS1PEcNLpBngqRGQkWUVC5x3hdr16z1PDnkggTaCspgr5Jgb4NZFfh9Egyvc",
  "key19": "p1VD2NwCMRaJKhvojjiJeYyicQXBGJ6qsAWmWvjzAGWAZiMJYi5LoG1PfUzTM6C93fUksx6uk1UQK6zRxQqq8q4",
  "key20": "4fvw1Jqm5wdZofjiiE1mwCVPtHr3Nsipx2pWDkSoECiGEjrw84nWyAYJsPkTtiqNv5KQ6dpDCqEgvwxSM2axFvWS",
  "key21": "3n9KRTGfdvp3YKF6BngLVdtBPyWkRev6Smjy9etnwxZByYp7W8tkt9REUP1gmPpqbPG12EVNbYNX17cMLxKJ9zyc",
  "key22": "32cR5C3fFU7LqnRr7p3fZcjuSUMruDXi2Q8hKCwnpwrraD4MkTdBoPrYPi4T9VE1bTRihbyoLMyYN3ffuHYQc94G",
  "key23": "myEupxZxeJMMZMiZ5f92Y6X2UJ4ipxYvqKoERNEJaRwGkCWucFj3c7CnynekF9SXz2yDGqG7LJcKEpfkLEa5sBF",
  "key24": "43MY3upN42pZhVZHdUK9y89DDxStx1HMnCiZJ1YVP8odsmJmau3sYihXMpxdzyuifczyU9hwre5wZpX2FaQ5Juuo",
  "key25": "31uCFVAPq4JdBHHCyzVwAQQ9dKZnFScPmkpZQoUcMAEHVaT5vkv6c7XWVC4iEW8S6Yv81mhXKxFYx4hrWmiHpWPN",
  "key26": "4FRjvr6zoZTUMi9HG6MwApniGxqcUpofNYRTUQA9otLmbQboTsxuwYmDJCuVZuFdEEw1miiXGhNwxMreKoJ3w5Dc",
  "key27": "5Ug7Fm2eSae7t5U2h7zXeFEXFUL3JAqY47N5askuuaZh473rq7JJ7uBqwhCwAEXmsBk26bGTsQopegy1uhUJg36Z",
  "key28": "zeDnrKAMYudBiaY4ghvYRVBx4RjLYWoJfpVjTV6L5JrZ6ktAXGfMeSFRFR9Lwy2myZGWR5LgA8pjbT6ndvCJg7M",
  "key29": "2hCBmSMAmeZfg3hrq5NXLjUFGQJd6E4CAF4mGGpDPBq5kLWqg8znwfNHyUEob1JeKD8G77xQWj58JFKTyWsbGXyb",
  "key30": "Z5pNEM2V2mSXipxyxGDZoRYE2Eue2opxFxFWgwvhmBosG87Y8kmAcj1e69XYjWcjLASSNugNgCmU3c4XEF6WQ4F",
  "key31": "4NraQc4CowXc8vKq4Rbma18eBk1DFs2F2VwVEqBhSBn38pjCwpxr1tKuugbcnE6HBbCUuWiW943AnsthnryzYWKX",
  "key32": "5p1H119JoDDu7btnQW94dUK8bxdHiXEfNey6oH35peozQz9vqnjbmmgk1cbkUQszJ3d5NL3613GXp7dZP3sEpSEK",
  "key33": "5sob5N2detCXTe2aRxs9yQQAJ91JgRdwQqR6ABexCxi9UoT8TTJqre2EH2cGSobAaeu5oZPnHyaRXUwjXiPL6Beg",
  "key34": "61GgM7yVjAsMYL6LDyEiW1qQG8JivxiazMve6jejsfZZTy3DETnpMC21E1uUmxxcu8mbxkLh2rXbkF21D3WqjZTQ",
  "key35": "2PngGbgqpZfxZWQAqvYJeRRhE32QsUwZjHBw1CYfRTAnc86wTNhhHectfu3r9DPGRcDc1bMYXA5vHVQ9j1hp85qp",
  "key36": "JidqtMygfycfrDDskDmBZq6WyB6qi38dmQaQYyFYBLyixFTYRANLE8CupWihmb2LEMS54pb7E6XFVRjG5UruEAB",
  "key37": "5HEUJWjU4DR5nrvjnhVQUYg66trRWXk8kiVqvd4vJ2ERiZFpwKi28vov5NbW4k9ytJNa14BS5zcMCdtxXyJeREdN",
  "key38": "3pUhGvPWFUwHgVRFiqpXzoVhPZYjnLK9HJtbwWZEo27bg7ZHqHD6PdqCAsheu6QnEhig53ek7TQKb1Vh9cgbEUVo",
  "key39": "52yZJ9HpXNSEKzv1vzHoYaTj9r2GXfaDFSpQ3gJPoJeFRUJ9PY7FxKPKi3X5YmoQ245BJVXEHsyTjgSULj2aR5LA",
  "key40": "eaX36f4bYHrBWYZEMVjGWf5Go2eC91iR3pQwbYDZkcchDM2sYAtEXEzYgFmZNmcu3ZX4GU9Cwhgp9J8WAkHkCHy",
  "key41": "kUdp9h69uogM6GchiZzFRysLoRwH67q1ei7RDMciXG3dKcoLTtgnkXuCi4BG16vz4M18tmyTqoXVjx2bdkJXsCs",
  "key42": "3akhTVwSWMv3ePzeCFbkLbUDMpyM7BN6BGS32GQWiaJMsfCxYUtqBVWgn3aauofycv1Fmw48nvoLo7jyyYxDiY3y",
  "key43": "5n75TUnxLP9pyxXF5Sca4R1nbQenyc9jsEfKXX18sv8deTefCMfPcwqXepqSmNGPQcWEEjYNubUYqVDjefb1DGYA"
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
