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
    "3iDXZW8zyyS7q9o4EZmsyAspYeMBcDJfKbPbP6CBdtjbcvse5YJZwRmkNiFzXoxPT5Crsc2jYUaqd9YnF2HS9Jrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iu6FgwBgUkynUhrUsfWQRRxMQGtNhtfyXm6q3feiC9DxUS6u7LJsrTLu2VhpkPr7UEdYhTSoqqBUZsyPnAC68jY",
  "key1": "3Ccz8iit9JF1NePPBixD6NzZwU33D7ZKdshta3Z2uPJAB54icTQ4E2CH7yBRTNogw1br96eep1zrYdEBj6jabqh6",
  "key2": "46zwyw3ggSjArhqiPA8npNzudHxyKCBUeRcoRsRLS6bMoPY8jRF1EBisbZtrfSZDyG9H7nXXeSCnEJysZHxpLLjM",
  "key3": "3G1q1PNvfMswwk6hxzjkCA1orAbV2dyvKe5eUteELLF6DoRxJqzHmwhNL3McRBrENQE6HzDRqRcjvvCqGLULjrh6",
  "key4": "2kJRVnjXRksJWAwA7UD4S6gsuvBzyi4RQG3vNscBKaMqNDwPvLV55fg9tndD99ZK8SUNGPJd6UUeivn32MBwJu4E",
  "key5": "2pwiK1Co4vGRQmaRXAwn69oCP4tFAUy2H7E1qMH1xJ6F9LxzS588de5Bhd5X7euZ5DyYfcpCM3GsqT8VCQKgaKuA",
  "key6": "2A7DZQA6mi91MrLw3EGpKAyXMA5ccDRfojcgbBqYdCzLT8Q1umttJ8vNV1mPTKXrS5GXKqPKLu1mwKCf9Y2Xf9uR",
  "key7": "56MoAE3vffccpwUsoUpViAKMCTwTcsRV6CS8RzuNEU2WLe6TxE5B1k7wFM6YwLPQ11g8nqhdcs3jC4C7ZXenFAx",
  "key8": "7jZtWxymJLHmNnaxoZEWc7LMrPGyyJGnKHrAerChxu47LARK5mmGA7mBci1wMBRHb6B5hKHM2H2JpNh6TY597Jf",
  "key9": "2HzJWb2GSDmt4a9GNtwJs9ibFYp3Afiq5jdvSYeyy2Xy7L491fMe7sMSYNsB2raaSH2HELtEyaruoHXwbD5NWLVZ",
  "key10": "hvUKYFBwcpRY9f4ijEqcfDsHNewEF6MaMBTLesZs4BFhgwi91sUZtiE2h7fKFmrYkEsREvr95NhY8uaTM2tbSMe",
  "key11": "37qhFMnV5wNQXFyes5SC4mLMAZpi6BFvCXMkxhdyG9GNjD7NCxfeqes3GUjmGxp5CoCJEGCx4ktLYKD5rNpxYApK",
  "key12": "4VSkCdjU1KkzBwB9Vh4oWvjjf8DVFvdpi8ye2nC6zLFoHY9C4sC8AKyMQPwi75XdbnRGjLDVcR6emyrBATPhmvCP",
  "key13": "2fC7ZJvjmwYr4YWJMrQfXutpaEP5kxeZWrk7THaS53v5hHh9pCBAgdULAoDAMQ6HW7geswesPga7Y1dhS3PNa2UP",
  "key14": "2Bku943SptBZX5WLcUfphNMTLvsVkpgm9MSuApkhyCPRxtiAmNMCcBAfB7fdRUoYPBL8x6TxGnstMR7yr5JDSZai",
  "key15": "5iVha5hbN4B73LYbjMbSB5RkyiZYA8fuAruWKXPw4ji6MdE4pkRT315XcTGV16KhLBy85KjtTUxDaHyRuJUk7TUJ",
  "key16": "2Mnabi6jAEemaCyF57iBfaT2DL17GLoUQsMoGzFHjespMSKBJo75e4pjygofeLAypuPhMMoFELMWaeVvnt56zcYp",
  "key17": "4D7LovFif2Bdp6dPbvUeBvQmSyxHswgbFr1aKt1cZxJagyy4PpHprS5iLna1YWr6s9t8RjirvcHru7Xw7Sy6GASp",
  "key18": "5ohhSM6GXuKgWrWL83apfEftLyXNt5w364yYSsUXJ8tDyACMBTXJ8p3NPA4mJNgLMhSBN91TXCiRmFMBGPtUV4La",
  "key19": "2wESkC3QdfyShAStYrgRAtAdsczyTfCeUXtpBUpM9D4gejWqf5zRGWz6pZeDhZLsH4NDXCgkD6qXL9XXXMgftyuD",
  "key20": "4pi3rsg7cazzuNZ2BNxzRYhGh1TTWvSLYDe6W3m4y9TH7jEbze9rqWja6hnNb6NzyEayU1VQejGzKRGPcuxRv3J6",
  "key21": "2C9Bftc8vsCxyyLesFzqXkKFtenuQW8MpnRhjGKYRrXFGBkLmLaU7iNZffPurKGAZJpSYz9H2x2k1LDs8nXiCBao",
  "key22": "3StGwVq4oHPjb5TNGq5aqMMzcL5yUMkG1Nm7jQQSzvegy5kbgcmUhskfFevGS5yKVDXwgGBoYDVL8q2djnZrFYkx",
  "key23": "a6abK7fEXjkXqCG6LZNRdnkWUzQ3TzzgHAuck5vqFWM4Mqhk844CE3Q5Ep9hW7FBnECEi8i7sxnmVFcFv7UzuDF",
  "key24": "3evWiUjPvQwiaKcFiSHsNdFBj84mCWfJzYejtbsDHHnvJ5dRTH6bYcMMuPdGMjucy9327Y6A1bU1BFNkRKYkBSgE",
  "key25": "66VaEdw8fr3kHU6GH9V5R9piWGKAmNY1VYJ2t3b9Quc5zojPQNfKk5ZWAwNM7Borz5WJzW7NuVA7no2L4Fepp2dQ",
  "key26": "3AcaowPFVfqbPDmXyTjchyortAQzbxWLip5ZfW5KBETWvR2vjFYZEPQcfj58KWSjGr67HJQMJy8KseXN8oUFscs4",
  "key27": "YccNg178nNCrVpNq3STmuMhqW74UWCUnXu3M4fZZM5ThuJTTf1smVB2WrajEFM4co9FXbcdUTwetZm7QcZTmQua",
  "key28": "3qMoNZ8TRxoLqmnGZp6XG836RURz4KWGkhgdf9WmmcrBVkTuCZxnxtky4MMNbGyZTNSttcxd2xn3hte7619xaC2m",
  "key29": "U3wm6LeB92P2gNB4h9nd9mS3sjG6hbGAtvHKWBskH9aHceFGaS7TnunshSybeJHL71bhX1LftCA5aPNJE1oMPUo",
  "key30": "2VPUwEtEQUh4Whfnt9gSvzG6seFWm7YtkVjkwhH7S2FuVDdovRphPgMjMUyMKw8ZXQbEr4g8pyZP788Eq91iojW7",
  "key31": "6168GS2iTxWQX3riAVqmSB9TiUDtUYqF6D61fN9yVw8WJtvVQw36mjoE9fJrWc8f5qnbokV8FysQXBtTiXXQmaF",
  "key32": "2RdYryBUVxLP82Dz7wLQDgbU7DzMvcNgDEz2WrgkHKiTM4EeW28zdbpqQun3N3h3fMQTK1X6ArnGC3uxxnRF1gyf",
  "key33": "5Bh2hR6oQo6v1SrXL4QcFEJfVPjUdU9grtrgXwwsTBYrXBL19LbvGBW3nTEHnBn8prJng4eVjZKwrsYK6Sfr9btg",
  "key34": "51FLUHnzxuoTq3CTaDHoskjobxwba8Gzx8iSLSH4hvH1ZJUoE6jbmocW52cNEdTHURnb7EbZhubZcNaYyRQ687q4",
  "key35": "2PM8reWcWFYRBcXpHd3czwy22Zaqk57Nd4ndCwKco5RJKRb19VJYqCtLm9GDeyHXK8S7FTuUnxWmSPXVoLEFmxs2",
  "key36": "3k1Fr5YErX95tDRs8snq8p83vcQoqgCRyeLDXx6GCxU4kPJqBHdam8g6rhN7qhEok5nkD1wFiwE9T1PFb8CppRgh",
  "key37": "2uothshjh4mbqZA63PaUayskC7926Ejo7vz8Xb9FLHn7soSuibkA5arxTZAwSq3g2uoNLaiFeqLnGMpAJU5xWMGr",
  "key38": "3ncDvieW1zcawLqgBeLXBKb2oSefhg2QMX5XGFFspkpkxkSGKFit94rV9TQFDDjtyrYDnQuaZEepuyVsLEfL5UBd",
  "key39": "5HWPDxVjVA4Bfe5weJiSzLSqpScTeiJ49w6GSDgCjJuZh8fecc1oXoJCsHKeMehsEbqroJzBn529mgp9NvqgukSk",
  "key40": "4gD67X6RuHzunAJzQWtTXF8PhQUpTqKsbbBXeqnr2vnKjoNFhPocXW44zG6ekRqihLPTov4rNSBPyZkVECt8uM3K",
  "key41": "wfp8M1Cb45Q1B4Qcv6XqyUjVN95BYadhGvch5aHkF8uNBAeCzGqkatrtLaQWJQ7VebUZnU3AX6wtrzzJdaDuR1V",
  "key42": "658ieFXaCrWuSjw97ogZ8ht3RJGzAg1Rx7Sb4iYJVzbPR1LyLkgmUYuKqo9Y4M7XnPDMKCNXsKSHz9r4eEbKP81S"
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
