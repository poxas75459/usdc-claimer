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
    "AK3QtgRHXbiTu2pHJEu3nADdsQw8yBdyY9WRWER6uk6G2BLTNNkn3HFmhuaXwxmjVPQGBcFwT1HSbqSRs3RQk7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMReP1JmHWKREoZ3ZpNBZpxRh8UrBdVVDdeJJ1bLcyuG6FHmR4ktoycLwgoPS2Cmi4LXKXFQxoeVzLqjSd8SVF7",
  "key1": "quW16vRa2aR8qUFV5y6dxeRpbA4VsHTaXgKNgy3J7cU5X8gx3wdnuHEVG6y4FhMYFwg3geE6mdcs7rHq8ThE45M",
  "key2": "eGUd8wmqai5ceXzPdzonZxtk7NXbtUHskCdcvkCLGGNabcz3Pu8n1Gd6yhhrWYG6fD14tEc1W4UqqYfQ1L2JHn3",
  "key3": "43Z7kD3iwUK5iPzToRDiRazVgeNWNaHwTC7j8AmAcfi7uHnzCXDbVj13tiqfrSFtzVunFXDbvLUBGffkd3zHqwDV",
  "key4": "Arsus12Cy2LcTwRmLdh9m3DgCpd1EFZnNaALkqfMkaFBycZzT6PXzffpEX6XAoT8be5ErHsvf5CKYDr5vqwtBdi",
  "key5": "2csnVHR6GQ4tZnAuDXYL68aMTC7wdBXYMBkSF1b76HqYvQmd2Pa8r6NeLPBMQ7jQNgnQ6ionr2YbrgBXeTNRQJWE",
  "key6": "48FSe6ZzpvdyPVWmdD5Lv1adUecCPveW76NCfsTdbt8aP5zvVwBfrNuuSUCLcgcrv4Yp2kHCBfoSkkP6AzvTAJj4",
  "key7": "5HBGv1kdsQ4Wb5xi7kLpBvXpk1seExPjR4excQ16EiG3qPwdwhb5hmfY6QrnMw7SK9qESkk7P1MPEReghEmWv32J",
  "key8": "4UFo1dCys8D5DEyBsjhNemmkSajzi9afNJTZnARHfqWBvYVfwnYRRKLA6cmq8q3BGDWLv9kxcyGzQLk1LZGQLRzZ",
  "key9": "4rNhJmuKe2qgqPieXr94Kb9E1q4CHiBXSTcispzAyM8Ugv5753s74nGtF9wzvQzKdLe8mKAUjj14ZQAWHjVQvz7G",
  "key10": "RMaC1hMNxt9S8kQs4zta5pGkZcvXFefp5C3PhKLq1E6sNVsemsccjZEQEDg4iTeHaQAuGGdVxwG1DFH7TVB61eL",
  "key11": "PYZVHYrH23hDRhcdSca6QEHcs6abfXPkk72berCFQNoKJhaT6HZqbqZ7sCvpbcYv8renoSEsLjkXhkcjBrEdugu",
  "key12": "3K8z7PbdbtGbUJwNLKNywHXuJQJxFhbsBChbiTT9Euj6y9zroZouFv65yQeyB4eD5Cg6NauUgsjwif3Cf7FcUKjg",
  "key13": "7C3aCtZAgNr2gCDqJ2tHjKhtqaEDMZ3MSo8SJU6bAmVnbDd8vh7Bx6RkRZo7c9bhuroevBf5FsxSftp7ZGU1LNT",
  "key14": "5NTG5WpFyRuSDdQAiJE81YQ5iiKXfzfFAJeQJyg4txW713xwDuDCJKBN5FjQXvYn4MWfKN2pdy6NRxCn1HFiDM7c",
  "key15": "2TUYuvnAnyaBsek4UieidVJoUTfUh1z2Gu9wbvzmvv344kw3hQeedmJ3ubVzAm48YG1opuZ5yGy2YeKmzyAHLV79",
  "key16": "66xM7ATeAEFq9iDT5MEEsvJLU1nqmn9dAoEKKcKFA97YCA2HFDNp83G9mqyZWyARFbpKW8SpDjjeDP3LpvRz3imx",
  "key17": "5d7AoBogwLTq6ZMkv3jLUXWLv9SHCrL6iW8exMjcm9qAGyv2jhvH7QPCuQfKS4UNBHEo4P814oVXDfGWVFC8rjjZ",
  "key18": "34LKDYHM2h8xhekVivSZ3ZrBdzSoybAcEPwE7sXhyxkbhESWbLnKVXwEtH2QfLVxueAR2h6FSdCT9S9mxqbdz4Hs",
  "key19": "FRGFgJs2g5xKAm5sJ6hVAo6rVj3nWKCCCGKeCWs6MU2UdZu8zAofTdqXTdPL1xT7X3hjtib3QMQZ6d9NJTYzvyw",
  "key20": "21E1wp7e3ZHjuxbjkk5UNemaYxd2LySQR2gf4Ex8VWcLpNLaHAR5gEdi4awjsmSJrofLRU5fJi7ttwXZKKwT7Ewv",
  "key21": "4hW4PgaM6NbmAyiKyVA89GVg2oyUL8wTDhbyLsJqbWUEXfZ146WTrLyZEXBtXJXNbyiSzAUNFQUxaQntfhAmaqaa",
  "key22": "3kXyrVvVHx3TggAtzzVqCv9XZ9NBaWePratwQ3vcgnW2EAksFvgHuaf8VgE4GHxt8VdA6o2Vn4McEa6kJhH4LwLr",
  "key23": "4ddoavpHdRQpL4WPUHpSxEA8B5FZpVTihrj5iHskwE1nCaWEghzxSmAvL2rNyCUMW4LsMeRqgbxhjFnpo555UsQe",
  "key24": "3B7rhwV1Nt7CSFSX5wk1WxkZ56icZuLQEipqj6pC5VaAVot7EA9u327VDqeNoPQKq21n42osRue4PbTHhQgNWsgW",
  "key25": "42tG2xuXArGthQoggHS5MC1U44DErjXVQ2Tgw8ou7yCzfYFdyWffxxtLwbpzpWs4UJYQqTkmoooGZXC4Doh7nHpR",
  "key26": "4zHum7V6ZQEUDRg2prLE7bZEnHjXTDy4TKbsCWHVsc4be6PErCHvGw8CEybDTGurPUrueURbwbBTGBK8Smq9u6Bg",
  "key27": "3uCyGzyNBEWZn6XXJy31roAnT2h97v5CUgURjyRAB9oDmdRQytT4XdpXKtPErokxYJf79348kc9fgym3Xdzw8ekR",
  "key28": "2Voia9Udtg77yCvokmL5r5FSgCybHp29MHVpd8viDFrF9VApesp5iYojZuFHVbDGNJhVs3rKjVPiifYYJFoMY2xw",
  "key29": "5ukndiqdX6oRVfaUVjKCtpr6w7GkxrivcUGeSxkgQo2NwYwpYbLtrfVh65L6XN4uG7dqzg4hb8oBosSKLiVdSkxe",
  "key30": "2Ed4uS92KdF2n43158Jd62U8SnwSi2GGKmxebthWiPzDZET3yNzn3kCdwQCN8RzkmwJ5cjSTWycoejFgtaxR12hZ",
  "key31": "34sUWBDaomnRh2fd7USNG46GH7Xvo4k7v25tnshJSqoCirDFapidggBfHuADywnPKtB9dMEeiNYQfrYGToyxMY94",
  "key32": "3TRMrNUYbYMkd7dDiqiZAHhmPrSsnJTeZmkgmUvEzLRrw2GDhTsgiG8xdowvW3FjGCFUTayVCU6q4ZjHJbAHjWjQ",
  "key33": "5W5u12Bng4HwRpAykZiGnXpWWy1GWT6q284uKp8bCMG1rz2eZvLRM51mARuvfqkBW2g7TRojFiFp4jPeUvgWUe4M",
  "key34": "52BcFgWuXivXwisHScagXkskAGB8UCL3yCJatfs2SsB2b81VpuydFa85omA9172uq6VZVcHd7my5xDmu4tAYfVhs",
  "key35": "3MtAdbsdJUyNyy9EFh1uFpZqAesTmuBnPCzFT1fepwNJKpzMSUy1rzJZqMUtLwD4yjE1HeqG3abgGe59DTsUF5Hk",
  "key36": "4z1XkZhYp4MN4tJqwGQSvFtvf8jB9vmvfxXsDrcsPLbJ7kvsqfNW9sdN7zsrBsonwsSLHVvrPHFyYeJjRAuNdF1D",
  "key37": "2jQoDZVbPFoUZxYvGCDVPWKgV4W8zs2Ke9sGDiTZXk7qZbP4p5xJusHMotgbVvTWwxzCbFRBysMnV4ke4xRVGiNw",
  "key38": "hi9K6gUE2gdMAZbkFbWPTf1XEczPzHoBjbhmG4TxD77U7oBsVozG97KjDWqDGqcBgjpkGuDQw97MVH1uw3txvcH",
  "key39": "5M78WzV4LKvsHn9CgTkDBZ97WBn1Cv4ZhfZPTziKp7CTJwWSaaabyDZwoNyUdQaFsPg9iriht9eQjyoyLPeDggcH",
  "key40": "2uzXDy5smigexj3iHF8mEXLqfcCvwsKj8Cpor6N6ZR8App2eXMr4JdvhHc1xndQDU3Tz3QfsZjrbtkxXQXSeQJwS",
  "key41": "3Si7PCdYG7m4tae6N5VJBnxo7hczPfbtyTFJcZ2m4E3bLsE6YSHdmJVbQc51wu4C8J4Shioy83a53RDmVwYezCLD",
  "key42": "2F8LjTsffqQyExSjMKYKn8bZvqF6Vg3besPaugffz7u4zsevR5vi27vniBWh6HSC8o6fLNGRMU9X2wLFchsx76Z5",
  "key43": "2PVWJqTz9W24x3PZUhKFr6kPi9ERJbVYy1nvHMgHszzywXsMgBvygANkcUp84i6RBYCiDzNHKkP9eTHxJ3TqRGoa",
  "key44": "nscE6wYqZ53bCVraMK48cUbYwG4ceEcM67WT3Cq9Z54nQ5fq1sWQK6ZaQKppSqM194k4XCuXYr8TJ1cZXzMstEL",
  "key45": "pgcVbh7XzBozV6dZD8YkYbLfD5WdzuiBj6Dee26nhXz3RAvB2PFKdYVQY38DHH9xPJ6LSgPhsoxaWt8Vfbj6r7S",
  "key46": "HGPjuTe44AN8FGfrjnqvNGXVThYEVp1nhPew4hgiqd2qEJQUST8L5NtQAk6N5V8CeTkp3i9HUtHtHaYvCdn2He1",
  "key47": "5nPqZ7xTW4EZYCzyxxrBKbD6UgP5eLhuv54NgNxZE6EanUTGBz6TiDPuvvQ8DXQwRwtcqqkpXybwVGC5D5DBBVTJ",
  "key48": "2JPPTB1NygXgpmcvqQXU95s8iVrmo3DRW14WXoYCuSnyBeu5c4ccvfxJp6sUQ5tp2UFaz2ESuudw5HmMQzKVtETE",
  "key49": "4etkDJaJ4v8mRybBAortnvxdt3TzpfMwfHWzubUuGjHLvMibKjavqgzJe29D4sYXNSD4w4JrFPcLw2GQkBhAmcEs"
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
