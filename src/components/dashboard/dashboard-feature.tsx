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
    "d1wzjj3mdv9DvGxWSf7hnqF8cG5e181JomKHALV68y1RnVFUCZuQ7o5MzarVhzwFaox5toVaRMBXrXap253sGVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtBCPgrdu21qqqYd5SRhcAuHLH8jQQBCgPdMtW86FmP58mrC3CE8DKyaUNRfxg9RG2SLZrJS1gB7mE8uMmLRfrx",
  "key1": "2oaUV5LfWs4dsSk7M3NGqn8r8MPPZhPojdJUFQRaN6qfHgJ9XrKHXTUjKd3bS7vHKL2y1CcusgwgvdRmbHiwXjCS",
  "key2": "DvmBrqbsgJYjoQ8wq5zhrFYN8c5jZuHoekxPKxAmGHtFqwZN35p3Mh2yRdTuPpMoJWjjZMNL9zmoLkhvV1w34yM",
  "key3": "QrqP3ZCutJfRTdg8TLjh5uMckft1cQbLRNLWJc7ZWHgXrcRvjyDQ7GdtfkkbBRtiYdzzubLHEBNQVP4McMHWgCd",
  "key4": "2tfwvgpW1cXydtb2g21XgVRCkNKY1RsAEKfKLc275PGTFqQQRNkGf89VRR7H6e1jGDFBS18EgbM2ohxTRBDFtVvD",
  "key5": "31ALnqQcGV89BJ7NjkDx5op4oxB5Vd6CFB5JHYj8PdMJSa5vgbppEd8HtogSXCuK6L393ECdjmbKaZkLHy2JyMh7",
  "key6": "4qXWDo6hUYrgpahJwEYpANKuRicfhpTJmxPg76LvEsA1bfGZd3U1ckMdQnMhvxnu6ASE74FJAmSdQxT9YF7b2LnK",
  "key7": "2XvWTTabUN834o7VQj2WzAyAzKFPaMqCYWkX55ZP4Kxvj7jteLKFyuJ9dP2aFmCtXMnRK1jvav7v7rLo1Kt6QiyA",
  "key8": "47nEeeUpcz1zRi4f8N1zKaYdp6Tb2McXs31DQ2DnCNytFPRqq33dEat6UeGk2U8EuXBHhmFspZPLSzWgkxNAK9Xo",
  "key9": "5FdYTAdREi3hP4XkaJ4QouuvZw1UjybSjPdvYUtQpfr8LjriFprRTQcCRqV1RngMnV1EZU8h9WnMw7osiZLpZoJX",
  "key10": "5vnKsykCd132u9NYRixVYWAUEYpAA7kAv6pGrf2NjEqSJkhiwS9CGmZtSZ81MdYdPiHgoxVWmnmoVjWzQgZM5dzo",
  "key11": "67AL1QTJDnqCapTuoTxMVRHcyw22DYm1P2mkyroqDdQynDYMLaCRhdP4kSQ9QbJofMPCm5qp9LaaotgTrFXA2Bsz",
  "key12": "61Fn6Y6kEoRApk8SjnmZdGqbqkyyNBbVsEbM87yLKXFMdzxLXzLMK68iocrfHvEyjdbBzXRb9N9UzLYkaemjx5Ur",
  "key13": "EFa6gfDf5MeJ8NT5SWznDfiYQ5YdmeKxX9ZLYY7bSnG7rSX8Hmsevj9FNJedyY6dK15hS1638E7qjm3XcfGGrjc",
  "key14": "5cGoXxKQY3dTcaH2p7SGzyZPhwX99f7o2wg36963tJH8g58KkMaRQnBZw1PVJcmkcHZr6ztRjdkv6ByiNMS8XPz4",
  "key15": "4GtTeNrrbKPrK9wCbjAVvpDMs772Ym4rsfJcZ2AX441FsD9GkzXEtrj1Rb9ttjD1MyQGGwbtaAjk3Y8w9b9B3PMx",
  "key16": "4zvhCoG2HfhJW1izc7GCmNANLopZaB9vkYBfBfRKzL2EFhzowPdWuwcmkrb5UGJSmGxZPX13wZDMSTsRJuwiy8zx",
  "key17": "3fWr6u5mNaUZMDBetVcKBJHNtgMMgtV5WDj3syJ6m2yT8WMEsv7CaiVo2jdNCXD6hdVxNMWT5MejaouAdZ1i6m8F",
  "key18": "2SFyqX4VM1AuAaa7wvFYfQZoTN94La1kVxkSB621PWRYUWKgJ4nRWU3ikVLMjvuGtwvwKkBLt7CJtTVVrefqKdQZ",
  "key19": "5zdgRWmWM6nnDJmhFXF9psuXLfLzRueuHwwYMSb2TbHn3obukRezuQouThVUMPPanadR4on5eTCgy7BKKmSEfmuS",
  "key20": "4vqq26p9gVwnfQpYHi5nnyggEGPdXG1bsjrSVGtPEdDZFHmoH99cqKGb9jFhj6wGcRghdq8B25VnmmeuKHe6mi2H",
  "key21": "FTc1g2bqfy7oCdgFQtPDu66V4P4JmEikbBtqjzxeYxMhxJcKP9a7m3fAkJX4SiHgw7PKVjXfS4vkyajH5Wq4Cpu",
  "key22": "wAh2Mw2Xjy7jg7aZYPDrp2PN2aKfZmFVhzL3nHc61QYv1CnCFEyPRh6cDhrt7XuHTJkPbLPV2HMXL25jJ4sRnn4",
  "key23": "okkXB2HwAQngT5q3sYHRWEEbCba33LHrTotG8jJdhsmNjn83qWoLHENSrDbBVGfNV1vtRvxUijyfKSRBarKPLM7",
  "key24": "gksVqxoaiLQsqBaYKYuuEz5we8dMqGTTkh4DLjkpyFyQmTkFWkd17M8hzk9X7Kf7PY2bWHY786ghFavKxdFji4n",
  "key25": "3g8s5MWQ6NPq5Q9G4RfmVR31MY49SPDkujwQ6jxD5HLFmX558Xt7Eax9BmhWnC8mUX5bSAd3ohdDXje8M5p2XUS5",
  "key26": "4ZEYYSRuHNrn7f2uQebnPhDvjYAi7ZoP13qTakyQygARCAZPx9LH9G2iHvEUuQY4m5EK5DqAV8eHmwfG5T4Xd1uc",
  "key27": "5moc7wzxvuoEyz91sdb6Y6z67UFZtAG99zBdYVhpy6CvgPuWjScH1fcreFeom9AEYu9MyixTnDAFChi9T5htGZMw",
  "key28": "1su2ZdFZMPUfv2HwBTwvHWNDFSxtQQAczHzx8LNGTcVWY4RHfehczdk75BqTx2NjDJcZHkRkKddUqxkZCK9jwxy",
  "key29": "32kNvdPbEgArewngivT3iG9kQUmWCXtXq7DwLFaf1pS7W4aMDahqb8NiuHitjP9WCmnuuvHQGBkzdVpD1xRNimoQ",
  "key30": "mNoXCe3L1hbdaViz7ukYBjuedZp4Fvc5TV8pcignszEkZT1Q33jEdN5dzSodgdTGT8TLeyJoq8o8W5XhnwtgyCN",
  "key31": "2W2S3kQeJpe3ptSqwarJuHwXEvJZkjq9KpVwh47LB8DJ9tpDUVHnfEX5axQTixyaZu35gUc8LVVQSZ7uoHTUwZ5C",
  "key32": "5NsmsCHB9WUCSKJcno8P7UhuANK7DKCUGVvx7MihYnMuwcqWewHnnkEegpz67YjdcixU3njn4souy9VB1cWECJKj",
  "key33": "2mudjU46rSoGgkLviRKguyygpaL6ZBmxW1oUTH6kXvsSsPyHX4LdE5zFFvphEErrf5DBJJpD8p36NzvBd6W1AGkr",
  "key34": "2rZGaSeQ4UesW5uLZdmz86tPcH9ynJczGYDZUNpXtsaERLm1voyw9LsVyuAD8xQiYmYoNcCTPHvfAZnwFW4oVEs2",
  "key35": "3cxjbNY2MBEPRd3BMwpSqkBaLorz5kBXHK6Xt46WmCntzp8dJTduBEETn2dtuYztHbAjeF11rzSLtxmeqwTmgnyK",
  "key36": "5EFfTa6mezCRziTBEiShBZdJ655Wm3ub3tmezd3f8NvVkdEadaSYdMookUzFbgB22YEn4hDM1BNUZRmTyNN7oJJo",
  "key37": "2Z2sHA8dA2NTmsPGPEePrmXc8iU1zxQoYe4PGY5AnkJESD1uytBedCdpJTiWiYJCSy2cpErRtihf4rq3xGDrRQyN",
  "key38": "KtU54Sg21mhRdoCLUQoCf4e3v32cWTZzTKn3C9hLzYTS5ZKC3AB2TbrzEbTRMSHEw2VyBeA4sFJWs9CEiiW4vNM",
  "key39": "4uXm9amd2E8AKwmS2sf71rQvqAWEWDkekcqjDLU4KpYDGAj7htjNHnp8DvX7j2qpM4ebBCuCBfYxJ1iZGGMvpEwi",
  "key40": "3ckBouJgvm1cHT4Kmppbpomwk7SnNiv7dtwPCbyWFHdeAKweat26RwWefdmXPjsboKcUiuFqmSwJZwZHi792KH43",
  "key41": "8wkkJKXxvmZMTALEGihRdrPdVQMQXnd4iL9wsMwxKAupMG4Hcb7zNpviWNsJrQFjc8Jt6cQYhKnvg973GLxEMxq"
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
