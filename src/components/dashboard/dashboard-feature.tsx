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
    "2zsNtDL9YfdmNMhQz8vjBS5VgedChg7PteC8SWG17KXQkYfYZyrKtWEkdbQeCfvCaXtEVepaGLdfPLN1DxhDqzYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hvw8QFMCzurSQUbCuWRSfnr6bVMCUU1vCtNMLWg1UuPzseBTkR8vLwWk9i93WTryz9wrL1HdsLPGxCea4XD3PwC",
  "key1": "37U6J72EK6fYm5QACGUpmWMSdeD5Ba1nfET941MVVFbwu241YMFZhR59KUFvSF77DyDu5zKSVF2EJnnDmCd5qG1R",
  "key2": "2fiGdeEtKnoJSnJgQcT5fcbGRcFtHb9amzRXFnncp8TFvDHGGnjYywabmqHXhVESkVJvvzgZbY6145nbpdPpyF6E",
  "key3": "dtCsMavzZW6qNyHMGf7sisTG9Vi3rNBH75vxTQ7uryjftr9BF2Tm8KwARiofyXkAPyVQZ3SiDKHbXyhVwjrReeM",
  "key4": "2qms5aBykNPmy8XwydsCAXEZAKzwjMHthhM2WpXxiVKySmTsBaGhvxGWJWDxbjCptwmBAMYNAWsSr4zD8eyhu4wN",
  "key5": "5HKV4AkwcyoJ5UkVi8UkNSg4S1w4rMJeLbqPcvCExG6baE3p75XpbV2CJxtFyNRndUNLK8xwqoi5MEqewnJ8r4sz",
  "key6": "4Rss1ptTFs5Vtntihk4gMQz4FfRPMThPRpXec7YS8MKaaXKVLZPNRZu4GJcgsLRFpRtQ79PZGktUa3jPNLWcNCHQ",
  "key7": "4o31wQQHMqa7ru9FxV61J1QubTtDAyVdoJ5cvkPKTnw36dK2fJpUzAMZU38hNAYCRRv8KTN1QSNL8o3CgUvRvCqY",
  "key8": "5iHrbtRdHaA4YYA8A7JkF9u6WG821qo5orE6enDTczGqP9kz5qdoNM1DGdMzdRxjqreRwYacLaSyFp28ErGW4Psf",
  "key9": "3E5ofqDSbGUbspw3MUU781nEdNtUbGjUZ2tEDP7v3FdbaoLRhCGpChWki31ThaaQxb2Ck3vx6L2mMLZ6Lmv45Woe",
  "key10": "49sSkVZM3ATkAmQ7YaZbwaJcaneFx2a8tv3iBz26Nif7EXUJNrhQsRWQu2SDgNPos3Zcub6Hj2DUxvSvQFD83NUd",
  "key11": "58s7ogqh1tDWDCLRLiQi429Z8PTiWbWDtNF5Ayym4yhbXqJGYFgp2pjqsgZRs6U2n75dcU6uvfCLq1oQygouBZhq",
  "key12": "3Xaa4SfmuRiyNCUot4zT1ooYG2ZzKW8ZqgdRNGekdWqbXruCeNqRrceAzWZuYMxwr9me2DGBjWfi86bNmTRGYJYA",
  "key13": "48LdxrJ4FTM2g31aMsf2rUXFSqvH6K2ZHWDNAtd8z68AoqTXP4mgLdNyhXmYByBpWefNVtLNSV5driQ3j8vKzHCv",
  "key14": "58A4SUTtShNrAocNTxny9gV3tcLqBXD1fNhT1E3n61Gw9pn4yW57Ch4Z6hWBJRVAG5JwPX9F8eQQXw3NUedfefFw",
  "key15": "32jVwuPXktD16bW1yd7VZSQGzw5ctchvvHx8io6p63ShJqbi4wtkYyXZuRERzC6AvtkTgMGynBfQmDgXMDYWdMCz",
  "key16": "SHqQE6WoSRjLTQdZtrhdu7uAvxfcUFubrFpeobYRtXcxB4HdE7bLvktfjvhNtceHz96Xq9UCCSxeS5dHGfdU8P1",
  "key17": "3mJb85s6ZeZ1msJgWZwd8munrwXSd5GiaBwv5kpMwheZhnjJemhXLnzpHpmjeuqaTxzexN48mmeD6c1ym1Zy2KxR",
  "key18": "2qtmEFn3Rgs1AEtvK7gybPuiAww6zKUZykEc2hWux5mgBb4y5Hz8yibFh7DUz8Wejs1h6wcJG8PUBAD6JSARELxU",
  "key19": "4Uyh8Q71DjE6i69t2zUvdHiCTYUJRSkrEpoJKKsPA6ZMNVAD9vEDjELhzZmff2g9s7DvEj6YtAcuAeEAqkHdh2KG",
  "key20": "F739Y5xVctFLsEzLkGFJp2YfHw3hZpEckG5JjsH3NZ5dZetCasrRVQzJL1s14uUqAoftPgZpYCJP32Yu4NEDgF2",
  "key21": "5egeAicRDQSzCEiCC6cnvmi6LRY29oExjuMpY7mNAP3Zo5yc6YvqMAXnqcJZRoSeHW7YnBmv1j7Wr9jwuejAp9ef",
  "key22": "5hJwjjYHfN6xGtw2N4wUScxJRwutHWBxptVQKiGXjvKTMLzzRbMGionfU2uwtLCSWax2KZECjw1UVnui8D4sCKzp",
  "key23": "VYbZ8UZfJEDB3KSmHpXQYDKesFTtvXQV9WjokjiEUfRGE95e6WeuAYx7qkhZ7BXbdKpsvmgQtY8DAuU2sihvGQt",
  "key24": "51yetzMxBUBdaCi8by8KxentwazDzUEu5VNfwt3oq4RgjFTTFPnNb3himDxS2rt7dFuhKLaGkb19k9zrfwbAiais",
  "key25": "UmMH3dxeRNK51DMgvD2dXiK7EMkGhLetPwe5mtbu71dLeDXwGnGXCk5csRk3Mg3RFPiFgwywYxRbuQGTiGsvdEQ",
  "key26": "YoS9sZznP9B4EXU6RmjhyxWVsExg8SnKviw7hiHFDFFUZcWzkUqhrGRQRzjEqzhPH2ZHziDFzMevwjeBvn4XCku",
  "key27": "3aZGAVnR9PRYU4jwQusvd4Qk22Du92E29Tyqisg4RoX4SZcCQZiQQouUCbrN9qzuMCYpxLnSptGw99R5P17jEvkp",
  "key28": "3g7LuDauoYCsW9Yggs4bCQcbQETZjZhFhLF9p8JGdjKTDXWyHxtPqrTKw6oD3ZcyXseoNNcKbPLYJQTuzHaisF5v",
  "key29": "4dMmcypHLTZunkc4cayEQMz45ZNnmMMaS38koHgXei2GifV5Y4ji7uW747tHYbRFn3USUfHtQnCEfDLPSZ52rkzi",
  "key30": "5wEML9NuEb748h6dLvcZgefvhiZDEyP5bJ5L4YVi2WvTXz39XtbwZKSoqBxDskS44TtZTcCuDQ7J9AQTMZsvohgr",
  "key31": "5HwEjtUmP5BVsTfur6XECWG5m2aXuFCPhcoU3CL9A6UCNyCNovWmeZQaXkjLMCMDuP2zdEY4k6tkQwyVzNuJB2Jv",
  "key32": "4Zh5CMdeYHZuvJntJDqbwj3vqP9ixPQ876n6yjhUszFXnLMne3cuBWfVtAzEdcAQ1nUueeUm4pnuq8w9bY3U1YZu",
  "key33": "3wwPib7hKY3uF5rBRAUcsrDmHKHiEDsN94xDkz1twuP4vpn5C4msrm6nD8tPXPVZcyq5pEMQGEcFb5RJump8dbSr",
  "key34": "5sastuiSHLrc5GHfDZAK7PPWzLYrCcZgJUwnABKUUiomutMetGk7aBG11Lny28pBwcao2TgdDY5viHf8q43CCAxk",
  "key35": "5cWij4cqJev6GBocA8oqzToYz3Y2kduwJnaQrnwrNkpCrhqvd8J4rmS9VSg96XPRJFYdRx8hUgWkgo1hLhpDoodP",
  "key36": "2Cka5EhLa1HS2gk9YSBF9Zqiw9LvAS2xvdiQyCaarQ8qFtxTqQ8nkmGFMxL36uxoqk6mbufeqVPzzhYLr3BYH2kD",
  "key37": "53tdAeWXwis4vcHMxvYh33LyZrsqKA14T25SAhTrPgpHSdi8rbMqZ1ohQk2Ahp73E5Dzs3ZMhPEgm8axzLrekvSA",
  "key38": "2zzMja6aSqK3awLwuV1mJrYYa57SCfb8nCndBsmg1nmoBdiz6jEHu86qC19MZQv6h1hV9qPXaY62oUEYMX52nBvg",
  "key39": "58cwYxnSKrP3qAye7z28mJLNiaP9mzAhJULeUAVrNjxsT5gPFAyGGNkHXuTvEHFwDhgPfovSxUw4xfKWGkiwhWqP",
  "key40": "4Ve67aMrwMQrkhZLVWXGZ9jnBFK4gSSCyhAfuzdY7LhnzshcQJEmvjNxAughbL2T4PnKJCLGNaDUsTAm24o2ct1t",
  "key41": "59DsWjwsRoJJs2qKKdvNTQBWLuyQhJy5eqvp73KC24y8g9bVbjntfharqeiD8cELCbEUSnXyWHr61AHnFNdNv6Cp",
  "key42": "3y4vqVVLukq3DrarcZgHxXjvAmsKcXM13m9A9VYNRpJ9F85bA3vZCXvYSREgWU8eHzUgDig9NJczcJiATyz8rji1",
  "key43": "zPtnhdHRXcjawmEZPgW6GRVReuW66pndhPpisSnFiFfJ1PEiPfffsCdS9oaqA3qCYZnzDWG4GyjJVU6xzpAArNJ",
  "key44": "uDoTJn9vFP3JSsuReonBKg5VLFsTG53txbFtRsv6BJ4VruKMy1r2QY6bBq5ubBV2QHetxvoudK73odE6nEe2kVj",
  "key45": "4nQBZdaCvo53fV8VqJv6hXZVQCBvznZC2J4wKBqzWNpMJFxyjShJKXXEvfpqU6MBxE3qwjkPDRPYB32AJiCi9Hij",
  "key46": "57UWcSHCtbbywYj43GusnCoCcVUP222TBvb6imhoCAdL9Zt2zWTQLFUmRgoVkHuanZCijDEGkCk4npdBYSVuqCpV",
  "key47": "5iziUqxUZMaZVPsZ7K5DrVE6qBNDxbP35ndnecir8Gt4Syjvh7P11wWaHzpyRsorQgRrrSCSXeJ32i9SQZN1ZSEz",
  "key48": "z2t5YBAg5Zvra2ZFuhq4QuX5pEZMLDi5UJUFyMuNKdd5NJ6dw2bpmQSWj1jQeXRAiN2H8cpLmvdWwaXXShwGmU1",
  "key49": "4QtsjF9ke7VkSuKgjeXqTTWA5aeiEo21VCLXEq6iVAkjofJcQJ947zfL7enewuB3zBiqWwhfUp3k9yCm7Qz2TmjD"
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
