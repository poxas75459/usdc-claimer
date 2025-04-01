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
    "651utfx2Ke9ZTuPbtWxX2KGeDbrjfmB1571zkfo38i9s62eAFELdjpczTU3ntmpFp1ZgCQ72xwUyYgvYEf25aUCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53qT48zsyZasmbCCHozDNfnmA7M5a6LHzY8tnGZbTBRu337RPxfk3Tv3sVL5HBm8wxvyTkYQwRQUQNjpd6NFpW6J",
  "key1": "C4pJcrHmeMt7H4CpRiF43pvnEn9TkcfNx1hqt9pwLNywijrVZGpcTfk25X5g6XMQhabXiKfcHFFhgbScNcHgxKQ",
  "key2": "4X4dJSdUVd1jrFEq75h5KcyC48YEU6ppStahuKqsMaU5aY9fwWqaKys6RChg1QunhHYYYSFC49vfnkMBtZfMvp5R",
  "key3": "41Rh6bQ3LYyAzSzcqwHugQUAFCXZTSvkmnj1c998QwsRVGTmaRFtqu4rQxWvME4mD1YD9ftRokCmA3PT8gjBRJhz",
  "key4": "3tJRfqRY2WqATBN8zB6FoKnZ8Ck3N6LkqwsJuDijQ1ypjBav3mZuGAYRPdzM4VmGdd6u8WXZfHYHAgkmbN1H91WR",
  "key5": "2aD6eSfNuXf7DDKScqFbBxpf1APck6rBcveioVkx3AiTd8Br9SLZLD7DvcLyNvBDhyynSdo3eRDQvodfEY2p5ghy",
  "key6": "41accVYWMyGUegtCabUw27tzYKmscNLjW6xUwr18UizFFbRgh3P9yzDsYX5R1YqbDAoazGG8rZmaEQ6yB4YoTAMt",
  "key7": "3iSFFuNQoEJNxRCVZWnCXrq5f6Fh37vRzdgwVcXG7Jvsa7Tsmo39ZmKbhSjNBJgkN2jUrhJQwaiuxT6EyefcEJhM",
  "key8": "47UYWcVVGMtadGhLHAnQTfUJ8wsatNkAe4mk8YddK6iZvrdehShAhk3m3mgyzNxqsEUwmVGxLH8MFGAn9GddBBuh",
  "key9": "26EQkRA5XzemhkJ2vNtRn6KK1wrYm9NHaGbiGX2kmYbeLfbWTnA4UXj5t2aFCbx2dyoXwUP7m2HeH1C7UjzQzrGB",
  "key10": "MALxf5T8TP2VqeQEozd1wE6DqPRfUtabxdViAfpjiFt6ndDCUN7Pqq6k6z3oaoTh3DDBK2mcK96QF8k8thcUpvi",
  "key11": "295thUK546bZxPZv7HtfFjF7Nd5tH92ycAaTDda1rPXqUWbyUvqeJj8AAdtuBi2z8oG8Z3pszEevPo64wEuirDdE",
  "key12": "ciywzeS1m6QyzGX9wQ48g4jSrMqNptNEE9pvNQUq1FRqyZEPfaS1heTuSbVQdCAGiXZLEPBiLFeb2et6ZcaLkNU",
  "key13": "VP82CwrPMDyF1ZgHhrfijr1eQPTQpc3thv45yWUSkuw9DCxRFWGj9Hw8zC1jsiEvohjJE5yLWDxpx4LEYaV9JqQ",
  "key14": "4LTnNPjt8ooHrxH9BJZMU8F69XMr3wMQXZGVdsc4s7VVgpmR9u9E5oc9EpuUVEDojSzUMtNcFsTmbSCS53CoYBZR",
  "key15": "PxXUx369BVkhzTxDdWvE5Jab76SXpyXLEVkKEyrsTaWkghLV7dmiz6QPDq9brSjx1egbzNs8XRo6AMDFeoUQ8VS",
  "key16": "5kz5s3DZw333y5H232AMCxkDEHBuMw8VKmVt9h9iTxa89VEk1mNTxae1vzBdPwrsok4Gks5YWJq9poLPVQMMs4QS",
  "key17": "2tazTM5jW4GvYDmXfjB4DaDYoUuLR7PXxFs8zBCwNtF22NYCuGzxEHJVJV2kvEK77ffVg2WpX7Ls8wX8hLNpeTnK",
  "key18": "9Lr6z1ajuzWyA9F5DH7KWXCC5i3HXQw4YLgP56CURtnhToJuKphitpPgahQUD1vLFwVactp7m1uCVmzw495PyRW",
  "key19": "2hAQnsMeShwcbh8ZcZUhnGa9XV1mqik5EZTeSSWG3vce6VM4q622UB9ETQLTmSo9KwZGiwZJbWSyo9BwZmZR2CdL",
  "key20": "29eMdrUWT65xSK1CqwQzEgeVZe8i9BPPtrChQbE9ScqwENisNLAdtkEbVJfhvmNS9BVaMVsVBvk5LfxPLeefwntH",
  "key21": "ybYEtpNreWXz2pyB1bGkKhb2tfEKBJcXs6Xrf9xkarXMpyzB7vXVXdG7W3xrEgCmFFXRvtGpUMNY1V2YSPED5sE",
  "key22": "4d8v9Vu6KY6VWCVhVbDxHi59jKNsxh36pkRSL2rrHXhTn8iQsdP1L91eSjFGSbwWeEggtKz67r6Y1d9NdaJhowzB",
  "key23": "57LGLWNtHQqbCzEEnCetWrARDbh88uV2FPkzGVdimZWtCLsRmoDtP6tFWNPV9oPk8xLqhGUHctDbBPCUwRPu1jYH",
  "key24": "4nyYS2nFqpdAFQgcCsekfSzESokF57NPZpv5r8WbgppuhswgAMJc16VEteejw4xmTZrX5Vysgojefr9rnFyaugcG",
  "key25": "46BZgnFmRvHQakynLPGC9qrhNnXX2qjjgh8DEbGWobLkeNxBPLGmA33ecgGYCHrZMTBy1fBhWDePMRYGPnwj2Eoi",
  "key26": "52KN39ABgXrz1WfYoZfwYNLAjD9P9G3UNmEJV1y5wgNt92ck3TTHhokviro7yguWRGNM7yXHQfWPaZVxbyFMK7Me",
  "key27": "37PKMzfUo581tXYg5trJ2VK5KZ5kXVA7SHmDtP7x18yeXSQSKQ1S3BK1Kwq41ieKCu7uHBa2gjs4tkMf7dAuBYCF",
  "key28": "26i8JBMCT5KJa4jMaavTm3h6r5baxT3X7B2wwoDjMiTX1UJ499jBs1DiWdZELD52VKWAJNcoe3JPHDN9VXWFLTH6",
  "key29": "2UAr5D3wWWgwBXRWtpXiPGqw8SRtUHLcnx6YaxWWLKVTzPr2C7cEAPbaeLhiT3yUPFVKjeQAcdmYYDwrsefcBhZm",
  "key30": "4kzKdzR3vThCxn6uRe1Nn2CjEBxJNS1di69vZoUtgZFjFfzN9QfaM7B8dCcRsKWajUhD8QLDNBbz9KJWdMAZzXjo",
  "key31": "43S5AB8RtazmSaUpyjkpR9di4G6kJh7Yuf267HsiQwk1YpVTsGrKKkNE1JUuF2CjQD8EWt4tHH1EoMa1b9nNupyR",
  "key32": "UWyJiEMX29ym85uHxYhYuWcA2swHLi3S9s9gyScvniJNhhXERChRDV7YWjZ5PvTR8tpZxhTnnRBoMeQv5h3pngb",
  "key33": "5wwaYnd6GfPczmCEcZVfBZSq52WpCPGP1tTBJ55awNiwTaVoErdh6WhadBRi27Kq5ZSGQSpgwdojuo5WUeKc5CZ",
  "key34": "42wEQdMqRMVAtDANHBbj2TgLAVD5371nMdcELRZVPsecftoif2wzi5fmmn9FHowFHKvXjeRCpQkpZRWMY43PMmFK",
  "key35": "5wHVVEQV7Cj4Ac1m73tAJKa8oyn8z2mKdP8jL2uDmvWStCSQffK8YbPxHJXV8xzhnfLR1xzY7yYTfA5innuV2Lvs",
  "key36": "5p2WEYUZKToL8Bf7ihbo3GiXxzAwPeiueW1SDz1wwruyAaBNXyD1JjrvSx897mSGj337tGSwFpLWtfrM4Ex71YeW",
  "key37": "KG1fR8mrCDsytaGu5E9vSBytDC6jLCP4frgU1tvRPjRv4HsoVGhFTGockdBsg6UX5unxBZS7Qff5oK7SFCLXFvQ",
  "key38": "5wNMicbEUB8dG6WCqKGtZeSpba8wAZr13973w9JNHsAqpBENFvMMyMvFSx2xYqPzA8M1XJMj1MBnQyy1LoT17cDR",
  "key39": "2cM7SvYuEKPV5k8EsU8Pojye1P1NsBktahavBBMBEn7n2mKUf4EESvWEgzadUVwiBYNi75NecpLVm7MgR6Q4ELJS",
  "key40": "2QavxjgzbzuDdCzrPZK228QdzMSzxATHXLb8zPwkX92r91PGc9gaqqkGWq9QuLkxZidWUzRYn2t3s2uZMRvG4xVx",
  "key41": "31zS9SYqswGfgm3PZ54CETQD4T9QWhaEny4dG7KiVxPT346tLsVbGB5kBEBdpiefdHkbm4uQ1YsUEKzwUwmoFCEG",
  "key42": "46Q81HmmbXfXLdTLs9MfjXjrQ37bZ3bdEvMkUsPxFxMpTuJR5u8eqRff9uh3PJcRtfnyLtzNuQBePQG4Fs3JYXPs",
  "key43": "2nJrXEBD33Th5pidCZARcsUL3xMEWggSgKT6USH8oKEV9HyPWrwsb9wJQKHqoTWmf6gPo7E49zMRPb5psDossEid"
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
