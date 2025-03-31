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
    "52yh5BtUvi1U6Sui7tERDs4rm8DRMtcxJUhEMCpGNmhAm9mTFmvqT9nkDWMpqPmjr49p6ezQUCA7ka6wv7oBxn6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59s8EmnG59LcUhiCksoCDTzrVmg8n4cYZyuLM3ED8c6wsNhMbx6rQts4XG7fxza6J4YNPwoyqR5E1nDbSx8bf3uJ",
  "key1": "Pv4phJAnFBguNSm4p9o1FjjwYgQTxrUep2Qsnx9V1KhgFNRqm4pNpZ7pcwgL3hWeyZEvNWgdsP3bDYtLp8mvby8",
  "key2": "63oaruVwoGWniJUQpbCcmvvEP9sQkT3ftHcfBdzYVu5iyZJPnbXMLbNsQNvNK9N67uBj8W4qkxQ62CLLH2nCS1fK",
  "key3": "cEWstHkbgTLFo7MvGwkYvmGsvM5mPj8wcBZiAd36WP1XFpAr2GYKLtNRZ1AMprxohd1dTFmKipMAvYqyvtxGxK4",
  "key4": "3qev5Cb3bZirtP4YSgG8CTowZVf1mM1uguT1jiocUk8gu1KZ1UgcuTgGGMmoAtApcQwEjg8FeGktvRC6VBuBqyQ2",
  "key5": "3kauW54EThty37K8ykDYEAnmTKxmo2sQX6XX9LXJ6xmdTunnC5B1SmcwamQyebyVTwPpg95aDvQHoAyumhtdPTgj",
  "key6": "pW7tyQMebus9dNH6UwzrZfHkMLBgyTLNMbecnujfQnUcFMBekmpxNK4bXkZRaSsMUe69WNYXeAQVwqSXWYexj9o",
  "key7": "3JNg45Ju36e7ewqXWkGd48LDSVvMBQabBsCsRKk6Uf53Mn7T9hbPVkRjCTxXBve36pbvFn8n2zL6aXfxK3X6oG2K",
  "key8": "3Dg3f4HRG4KsDsLN3ngTMus9U85wxW3qsgJmGvud1UtA2en2mr1Ujt7BfSW3NephbAcpU9R6VBYNJ7EFq4Az2bn3",
  "key9": "3r1xWwg8FNAU6AF4xv5x7gzWLth7qnJnKjrKurYjmpDQZiNW84GUwUTJTvfREFqBn3YkYK2rhv6qb4LQcFv7MBBH",
  "key10": "4oRxupYnupmHKZJJcVHwfGZtuTSaqWJN3JZt17oY9uFD2Svc14PXApUum9RuiwipFNLuNVLzM8RKZiZXb9rBR13h",
  "key11": "2D5ZKNkiAoWd9EuuX5Nvmtu6tWvedxXdH4uEdbcpewxwhnTD55bj3TUVaTDiPGcLhNxoTxHMPK97saNC79RoARLh",
  "key12": "26opkAceMeF83SDxGPgfDxsjqixd4S1DHADBwAsYe4j3Dtvto6mG3qCSQuwcFkvNR5jaLRUKGF3PQwtj16NSwYne",
  "key13": "2AnjnJ5VTpEudq35osvSbuPSn1GeJZVwNeiasXcP8fa68TC28KK3i9aiSRhH4bTYhsXaEBf73Hxm3vzvbXJtShKu",
  "key14": "2gqqgpYkKsV8ZyabFHUwASWYSgEFsGwzi5s2t9kJbCouxxbU5SUkyCUcY8QSsn5RpQrixVcYAKjVGZB1xc5s4A3i",
  "key15": "612g3K6cgCvyN8x67ADJoTwvJbJmKJn8BEXUTTD8qCorvvD3tND1x2gbCBdy9JGtA6EqtqYfVbyHiAV3c5Wm1jpy",
  "key16": "2tubpUBbbP1vTXomUTLxLRLjGLoL2VthCtQ9Zkti26GiQeLoDGLk96SRXRu2JsEV1MtkRT3fZKCFS9n6j9zjRf3W",
  "key17": "54KwZ9t3NMsPtV19bAjbieY1TwBxKm4rdZhwA7qR63SGpJH2iuRkdzPo9xzDDsT4zP3xa6vQQiT5QMVZJf5CRXTk",
  "key18": "3G3zg9DunjpzUciGq9qFdyuk4szRE5WbqNptPnHeLLPb5nuebZZHFBHvtxBnLXdiRbK5bP9KLWssY2dYrRkfcqVn",
  "key19": "3ymkrXkMvNnnn13ReTAx2Snm5MkJnBuiL7CdmY4QKndTmN952gbQqC4G6Xm271QQayu6VGwVHpQjRGcoznFGMbyF",
  "key20": "3omGN1VpkM1X1w5bFgJTQXaAP3GZLhkGAfyFegth1DvCSuyAc4Cdqpexeyhtn7jpFZMpYfHgSrZNM9jSz2DXLHi5",
  "key21": "4TjEQjdEg8rLWG4k8emJQb6PWRkNi2JmwMVcCyuALdCWvG7KVpdwPMS3HsQhhoQotbeGcKEXEcEoQyQ2WnvzaM1Q",
  "key22": "vMTRMSknpZLqDV5wZ6Sjn2CrGasmWbGqDVW79afHqP6FJb8sUQ6cs4fLUBs7cdK6gLV6iChhc3M56VhvUUbDDqT",
  "key23": "4BhP3Kfemujjtt4EzMVsRLeqnYF7znmT8HH6KQqYNBVgaYjKdsJqBSkTsZ37AKGD5bFyoqsKM4Mu2xJw4W8RCnES",
  "key24": "2QjTKkeYMFKCc7KKnpxUG1xZWsiKcx4GRoJBYWyMSGwJU1yZQWrDb3tDa7xEZdCf1hfYFtP9cAkNksUDGieS6ie9",
  "key25": "5LQicTe1ZZUZ1zEqKUzsubgDPQLZXAyi98Q76kVweHxbey3W8syVMvLjkNbycRaaqwJh4nmBGZaXHw3CoNXv2zzR",
  "key26": "32c3dwum4PwPwvWNviCgYJjYB7GRtgrGtqHCbzuVYPLJH5XZ11oBpsHJ6DchDzuceySk4kyuX7CuJ4oPo1Rn9HTq",
  "key27": "4VVJ7vfUnqtAA5pr54SCpFi5MtxqqaKeiWGbC9gFoyTK1awCet3jqXuUZyuQz3cW2LzY1ZpnFDEk95TRkWCFaq9g",
  "key28": "ieD4Wq87DJFpxbpCBQZbn5jEbjdpMSkh7Xzy4d3hWwmgcPVLGUPdSZgPAAVLyYdoYmbBk4juRp85BySN5vrcQ7t",
  "key29": "4WgcjwytGbVixUyo69eTMfDoeCo7wpDs6gLxjUa83AKVwKJTHm6ZaW395ro6xhxWzpP9WqsmoRU8aZde3DrWd8uC",
  "key30": "5a6tAbDFoX5s4EkJ8MrKZPPk7YPYvsnGY68hAkyhRfYiXf2A76DANjFZmqgu64HnDa3mhx1VveqYM3vwX637UZmk",
  "key31": "3okGqoEfR24KqTtA2dRFoED6gq8GMGqUobwVKywGxaDeM3U9ip6Aaiqgzo4JzvcvsmDMQhhnUXpqcTps4SZN12EX",
  "key32": "2D37UvJvAk7F25cegh6fB3RFscmBpNg9Xdk51z8WWNLxy6xnfJF4cYTvCH231EHmGZjde79zAz2VHxUSvJZjYVPG",
  "key33": "MBngPMC9hdTvfLJWA636rQEuwwHCjaqCu6aMFho2v3f4E2n6VYWaT4tAKS2whmMTTPewJHxzzEh2DFmqa6BCpeW",
  "key34": "4zkFmciYT2uEmEY6UZPs1EhPP75GV3uQCHAWwNsMB7gxiJZzx4nTigXR7KPEL9wrm3fdBW2aRg224Pv8PapRxDKj",
  "key35": "A96LZ94e6hd8F4N3qnuCvyUxDeyEgyMdkne4fPnGAUsnYuN4sat3QH89KAvhDVf7L38i5jBNHLrwE7Re5FckUp7",
  "key36": "4QY1XPQRKf8mffY1Xo2o8qEe97qxtE9dJwpmyH5oDPMAuVkfCdJAvW6pzamiP5TizdBgV4HWjjjZvt5nffQKZHus",
  "key37": "4EEbwsfSWbgqWiP3gsU5dwPW2HthBZ8CDpE1LAAwfbVmjRX1dqhY78ei4B3Tr7RYURaDnNxL2MUTcJtbxwaUyJQA",
  "key38": "nQeYt5gQXzcqF6W8VLhNZwji5TE26w2ka9TzHCE7LzLDDTPyNw4gdmz2R83vmrsAd6L1ZKtvAitZ5bxThpTeUXR",
  "key39": "3mBENFB3sNYZCrkiesGw6bzjeNVctTg2N5YraaDgcgf7wkHa1RFFxqNBmFDge5N2Bbz421HZiixUSBeUpMji69rh",
  "key40": "5gYNGwfBREbkWrEhXkyUtoJo8bFZJLwGL1aC2DpomPmiUqUis5me7DbWukNY51ctmfBeiSDpXDMfCrWFYzp8qEp3",
  "key41": "3aFd2rzVHcgZaYqrXMkNoj1LQKTAjczHq7wKbEXu8auPv7neEA9DzWdhgH4CcAhZDwF6GRxt4eYzUV5wjDVgWD3m",
  "key42": "Z7X1r9yc29sn3hc3EkufDYoNimdUAWyc77KZPZWwHEYoYMXLsdRM3FQ6kh7FTszTAHbFGzDsopT1AUn7HGsHA5D",
  "key43": "4bTKMooVzf2V37xaVozUiTwLJNzworaRiXok9Cgf7iUzhAbSY2PoswAYbtsq2TGBeyyy655FnrSRr263pi1N4hpL",
  "key44": "3iDeRhBu69E7zhkTeV9igoDp6Kr5msxLq9Qq2Dwn7BLpjGUpcQ6uPhYNWvRKU5d3sw65WpezEbkpnHDLPUTzvyTH",
  "key45": "4Dk72W4LMXHJVpq8BRCtczJnav8e5WXQBVDW3rnBWQNtuHsKP1u9HmSBmC6VifcUxPevegMQfLyEY76eCiiqtTLH",
  "key46": "5gRo6iEwmqn8fEdUr4D15PDR5FrXKP8d14W6CYwG11Aa1AmnpTfpkPaQ1f2sbaLnthLu1pG4UYJVe7gKnLPUWDK1",
  "key47": "isEZu7BvWKbop3kKracbY4eTMVpsvywUGpJf2AaSRmx7JVeYia1nLf9isrDKZZfXGTdFQtqdHFiRSrFskCTLzdV",
  "key48": "2d6N4dqYZJU5Aa1Mddoee3KuWPS7JgJ8oDxDgpZdPs6gtWkFHKLsXqqiuppapceiFp753Wj7KQQ7MKztaVWZvhgi"
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
