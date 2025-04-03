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
    "4Ho4P6pAvbdTJY5wDLE4TLB5xfzX8GBFC9vNqwNtkgzs9duh7zztHg22J4wGBakT2Ead2a1C3wFJ9cRmhVSDartj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KgaRwnN4QTj64eKGrwd4BY5s7UPeKPdytDJ2nthF3i2BoUbEsLemG8T9EY5pcQ8iXKmJhNV78nHJzRCmpujgB6",
  "key1": "3Rw1rN2iptUHBC49YGHraQpY79hRPx4sufxSVfgKbtS3e7xftV7ZMJYVL2N4Ujm9LnEabNHJ1Ez98XD34fS7riTh",
  "key2": "3tvus5z7FbfcvLFA2LPquwkzqJzTwZEzPoiorN83TM4sspuPggQcYbeR4kFYM1stgbECwBW3JNiibdEp5KrJL7Hs",
  "key3": "4ie5yRi3GTWYpuJ8LG1G1sy9zyAcxGUj3PAmGFMS38JPoMhNQoHfnpUtKk7iXsmJ9NuwPzPJh7h89N7iynAAJHwo",
  "key4": "2R4ugi6fV12vDzBPsVu59ENMkXoS4znVpeQ7CedrcrTcgrsd2cxPx2jXVWHR4MyNKVWJkTzQGsWi1N7yQ31neodr",
  "key5": "3ygWqfXKw3bFVWPXwRuzGeoWYYkzSZcEX8s8C2NsdyyEVGY6sJ1MoSXCiCFy9mXxcjWWvgNW59UWtQA8pLmsoaM1",
  "key6": "3MWt4eroCMJKzZY2oLyNr3RcKQNdM3GyZk62XkHKkQe213KdSsqMMve8tMarricnBdaevMQcQFor1JyMueE4dhuL",
  "key7": "63GXQH14QLgnpftegBef7Et3wXqZDdfPQdoTDRiFucXBXC9VzmLPWHEpWQJ3iwKa4GdNQwpAeGnLoVJ4gVEPxxn9",
  "key8": "2i1YyRGjLpKfVtjFiBoXLMbwaZhiJDX5MN8gKFNdXLYp5XTUVF7jpFLkKbgJKzmQrfL1FATdn3e5CUDdJMRCfRbo",
  "key9": "Z7ygX8hKBNc9KNcq6qVFpZojN3bUhDwEKXScHrr9f9JT7wMvGy4UoCCKkeKBj5XbYYaXmEEiGJviHGkzrYPDamC",
  "key10": "3DHLiRxFZLiEVgAAr9pkMMHRP83oTuWkGxZfv6w81rPBVXdeCKu5qZZ964MJFa5XJRcbA2TiY4V1goQPaS7fSQ6",
  "key11": "5BxPU5Z2M7c6EEP4KuBJkakkakLvDjynWTDD3YhGhLNLGi6HktHbrrRaLaCq5dcEqMcB7e77dzXJKUzHKj91Eocm",
  "key12": "5Cn51Wz1oM3mTsL7hyzV92xsccrK3J1c9e7fV4CL8wDFKDEw8ntKvewGLFWZkKRpHPz68Gb67TQXoa48MPd1yMur",
  "key13": "5mxoPPtk99YggS2S2qLwz7tkagkkdsiYxVuYwRmxud6EFS5yqxmUR7ewG3Q5YBeJ2vh6iH7jEwKCHar9urjJjWyy",
  "key14": "2NYkHVak588RarkQhC7ebE3gU2AnufpYVBxiujuTh6JvxMNfGhuDJNXuHf14MuWCQEktsTwBVyC7oaE4KZDZgMe",
  "key15": "2KfUzynTaEjvVWGvvtgacGJNcAaN9BNEeQha1FkYhpVCWD5SHVeJysa2LF1oQJjqAcSMssLnBHpnSMt8byTrKKRV",
  "key16": "2uPTYAun65VCMAbW6gp9aUopkh732yh5CSN1v93R6C7nf7uTvLcUXxDBkorWgP6zsrTBnBudUDvQ1w7qdgFYB2SZ",
  "key17": "Q8UEPabXJpmFX5Wa57TstAg33a7nLnP8MbLjrqzGgL8A2KVr1qbVxkf9EMGqEQXxEpqWEtMioXSSdjcXpRmWGCu",
  "key18": "8evp3g44sN55eDeaDGd2gijkZeLcvw5h9CWr831d31xXKBpizrQTbt76E87MjgDpihcxNDABAjA7NEf3tkSHPXw",
  "key19": "5iWBZ5PX4FHuXxJjkLEq3iMCHvop5KawJddfk6gZUQ993fNhq5JR6UDTSXrhUTe6Mp7htt17NMyT6kkQVqmhxTTR",
  "key20": "3qorZq3cGEMXsg8NyejToaaZdGqZkS9SVu9EfxAGzpApbPbgia6NXe9DtfawUPFjr8f4AS9F4FqAs91KZXdhWoWi",
  "key21": "4ExaKyPWa9vWinXQeWRuiymgeN9bqVGiWvBTrUv7v3WXCce8e74xrBigAQCkFRzh5KsBdd6cFf3KVejhwNxstYJq",
  "key22": "3V9ygGR4Xkf15VhH8S2rvDRmypVxFWTW4D5KgJBDQGxYD6Pekgf4k9GgEcFTxpXJW2bvw3h7Xq6Anm4FCrVAjz1A",
  "key23": "4yyynAP92qDD8oyQci3ee4SZoSPM1eGUrt1kLxHFJQwDkVnvqiQPNBYoGR7fzZVkW2YVZB8h8mbFyDvAwbmeP9dF",
  "key24": "3sRwY4vmxBBjxcsGygoz9GgGsu5ifffkCLk3HMubU8TciFL5krn6545feS3fQ4jfHYWETBKuXRMWb3jNku1aSX5d",
  "key25": "2oRzY2jmDFz1ozaEcCPfKZpyzfdRG1sPKdfjxToJy7oZfmPWuxAF6dR6yPrNe1JiU5jE396QW7c8syPeSiokLPep",
  "key26": "5hghuiL9NADigBMsN7z8wD5j9h3Q8iQ6LQeSJHWUJUC6heN3rBMsjy71HJHC4c62TY4aXmVq58Mg3nbZSPEtfHV7",
  "key27": "4PPuEFrnW7pWnbF4evXQHGCeQRd5TLa8kLnmQ21wdHx2K31ANFJx3mNacc6Z7ECdVBY2KzPwwVAS47teZGnqFErk",
  "key28": "5b3DiQnndeM3kjPiC58qKxAKj5g86cGAWm52EeS3Ft6EqvMetDV1EKLiGsS9fBsyKTN1pgXAV5x22T1RzPgLHnxV",
  "key29": "5SDepYLnzQDFaSj14iDkoUVDwwdBwNdpJDuNDWp65yRsstq18ThUPqYs6m51wHyPx5tLgsM1yPQNvYZEVYT3cccT",
  "key30": "51Jo3637z79UXvgmartTi43LkhzsLcTHKr32oiFg18CmNJERRwfgDDgV7HN55q2fbB66NH8XuP8zpfathJXzqm7M",
  "key31": "36icbEtguWa6b64n9HXnhLKydPokBieVmixyR3uh4ihf23nADkFQM36BjMp8SoAX5h94b4EWut2NMP6gmaCkyiYL",
  "key32": "5d6rQswzyDpwet7NfaWSQZ2bcUaiesChyHKugSsmUGsTyWG1k1PwvhVfFNL8nFkZMAxMW8kX7YLHRV9VxdKfMqqH",
  "key33": "kmfMDLQEVZHQHUSqxrsp4QYhFyPSaMUMWuPKhoJ8eCiHW54yRW5Qb5DbAJ9pdEkjqqK1yANoRXvj86comJFoXGd",
  "key34": "3AgLzgry81kU5nWshTajeqeS6rR7wPv5GZHJPH96dvjhgo8GJg1xHsjskSr2krpUW8m6xfu6Egr6auABRwUk5tPE",
  "key35": "2f4Bz84Rt1WEJYVN8FcnueTEDJaHyZ3Qo4Q2gzRe3KGYcEut2HhqdA7fHo2YKybF3MjrHUmDVq5e9KePepDW2kw",
  "key36": "vK5RYcnUCdQiyGTyhGe34oUY9LuTTeqH6L3zVjFwiomStxG6zB8PoFpGu5K985cNbtyjTjmuBRgYRn5NbXawPUD",
  "key37": "uNjgFWJagVkfGHj6M9YSDaiCHJRf8jkaDygfzvAKPEtAiSXe7NstQZexP4Eh2tsd4JvP3UuVkqnHRbgpuv54QQW",
  "key38": "tZ46tQv5GzAwSnQHB8W3jntq2w4iEF4q2uQZFKerneMo5bM5qPvquyMXFYwsZkCjCent5DESEf9yYAU15Pj3pgJ",
  "key39": "4bT5vPafbJdKk2gaDHamD7pdU3e71KBhz9THZ2nQFAZdcHTfPHud9Akyeve62K999tJBfenmG1TtoAcf9ZMGTdPK",
  "key40": "4WC1ArNqtDyyCJuiHhajv4fnMGmhcx778KUeWpvPMKZ2N4RXsPLz6PMqUhVYDcLGbjeKhisdsDsR9UV47aPHvKQx",
  "key41": "5jywcKvvcEJJi4VtQXSaaomVbMrxubEmGk9utudr7HLKVoi2zp4X8JSbVBxmnpWLUkLcdFdHt9wFy67x3WNiwGtH",
  "key42": "3NBbvymZAwsiWV1ubTxbKPLubq9H6c2skjKou5jD7s1WDneNrzvBjEbaQg3q4VRPwuBeCXTghwiPohkYuhXoszrs",
  "key43": "4Y4tkbF8oykQNR7ceZ1fXyqMowhFx5zh4NCJMwzUYdiYyFNJMjp6fhJacq5frKD9ifJnSzktzxAoHuYWNEhjNdQN",
  "key44": "2Ys6aBG2tu1ox3hczB46GfbnYC3UqW8Wav8HJKtqXSLuhY9dKphY9tMZduTPKCMWhFU4r7PfTbeSUFs7Z43RTX7Q",
  "key45": "23Yy1FYofYhtc1L7t9pFfXoygQXEU7jtCRKQ1XABNvNm3T9soz8w7MoxgT6wXpz7jqddHWx1ajZC2DB4DiJtDkV7",
  "key46": "LRMYF9vzhTExborwS3XXP5989r83gWBZrtF3L44Hwu4MajaYn6dto3GBPk3CK25LsTuJhfSnvpG6kRn78sp7qcL"
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
