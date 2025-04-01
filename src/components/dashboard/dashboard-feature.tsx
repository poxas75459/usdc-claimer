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
    "59tXeaoisuDUChGCsmLuEiPrwJpo6BHdi9neipTi8aA5mTwui714ziHh9u2p9VM57L3BPfLTDPzfBnzgbhLT3cxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26hEQi5ZMZspHmz5X4eqC8SxoZEXi9858UC7BPUJXSyMCJDaLJ5Wq1g39jVQzqE2zoCqv1exXoz2akZ26XEV3r5W",
  "key1": "23SXLtSSDNYA3R1xTZCqxVccbRT4xyzL6zt2jJFa2kmotAHDKBDepw2VQodp7MLeHaJQn2bzaKg5N724sd5bN1fr",
  "key2": "5uuq1Z7gLv3CB4dAqdhgahHq1JykYi7RrBhKtDWL8XvhWLYSix5VP9CdAQG5cQuAZBCyMn9agifZTrkFRA17RuTw",
  "key3": "3BDPd5LtNN926mdT5K65cT113o2MRzJEEM2faKS1CDShC8D7k4oH42wCg19NeNFYhgBVnBuV2REjqDb33egpWbQW",
  "key4": "NVbsDbYLhADTh3r7pX6EQrJaryxpg4Q4obttLvVyZdtaC8VZcdrfnDV3oUKqdWogeJFYkaCmqox1yFtqhoihnqv",
  "key5": "3fa5jRE8LSgXZvpWpsNVTwatxLnhU5FCAUYwLcUnmWfBWrVvC9e3uA3asY7P7Pd36rvAyzLY1phrMp4Hrf1WCieY",
  "key6": "yoQvEvqsnXNMUnPXY7estHrQDyz1PuSKUJ1EFPbkvRci7Y5yNNdkMVHSZgN3Mxq2oi5zxUs2x8LadAXxed5UH5g",
  "key7": "5YFKrG7FvDHWMtUC1M3gg2S4XToyD8BLSmJN5euPbamLwzMhBMnQ8Zr2TkkAVWxY3tNV5EJzQXRYkDTgqPEHuV2S",
  "key8": "y8r5qpo94HzT2PhTa9qcjGL3LMybM3YRkWnT3JqH2kaiip1Yt8unCye8b66cBQJxQY7ZrhhQZnHqN68Ffzr1RUF",
  "key9": "22BBAAePDgJd9y9HkBpkoUP9gMCGKUoUDn8ssYXfAmvNYdjwzputAHJy24N5GnAFCdE3DnbYpPCnyYMWHkhbWUQG",
  "key10": "38dCm3Lwckt8RWqmBvEc8ZKuNkeGo6pDTnz8Rc44cSJ1LifuR4FHP6CPw4Bj66CKAK8CoPomAwZw4DGk5NEyXwF9",
  "key11": "CdYTDFiHZd23zaJJWnQCGE6K9eEQaSXi6hhV2CiZAvir3gHba7m3iNgwjY3V6tHnEC4BgiCeqAoZYH8eRYyQku4",
  "key12": "4XBMUbmMg1ywNDPFNMgbv6TRZ64WDfFFg942wjE1K2hH731QMGqK69b6E3Kwxv8ax3xX42hsKewzcgfKeU4zNiqm",
  "key13": "2cJfufs1u24qkL8pgVisJMphQuQa8pGcu7CiwAMZUu2jDC8Bm7NMmgCggn94dvMoKNi1Drr67gD8s39gjjTL5kAS",
  "key14": "5oxWmWb8Qvt3PAexT1f7eLD1c553RtBMr4GynwMS7WFSoSCT1xaobUxy38UiJAmUnjy4rMkhWht6tWyrp8H8mxjk",
  "key15": "4c5JPoByVNr8o5YmEobcb81czMdg1V5jf89Q9sczpYjYoswziw9e47KXiQgP3LTnkcQ41bjc1D9D6Jmm6RZd1eYu",
  "key16": "5pjruie67WTSdkYQipJGaNSxMYxXxwwnAvXiMyPZLsPRVBgF8KBtmVeK5CWGWvjBGif8E4o7QmnZNtih9qWj3NUe",
  "key17": "5PH8CwuWRh9f6LFsTpxrRourF1LETYRspY1qeZapFRSLq2jrd7CMpGZYySxkracRHyuogCa7mXfoiRbbGGg4QDYT",
  "key18": "oEccGuAJs2auErcrn5nJSw2Qjz1oVcixDzjWVDRx6Nx9zeb4gCYdb5kAACwNd9sfZRSjvbLbHbAHsFEHNepszSF",
  "key19": "2Y2SyBypt7BF3JZ5b1y4KkLHpM9933ZUCLAFCEeL7WPHSCoX4NuHd8BKanXMxngxWYM6EmrBuL75Y5hqzbho6iUP",
  "key20": "5pQioEKGUQz6VQH5tkMeC1uoTBmEvDS8jd5N59sKKXXUQBU6NPJALeRh32iX9eGxzzxXHD1Uf9xkwdXDU74hE9ZV",
  "key21": "R8zmd6aym3WjgtzJzjJhDY9T5uB5gnrSwnGGa9uQwCGKCDDaiBYt7btcaf98gxLA3DQGhnkmW15jiiUcGzphjne",
  "key22": "2XVnZiKR3JLhnebTUYFX5jrpHAbMeTAKJp46W3ypDqFPJ7rPG5wHebfTaqDmY3rBSgpqSasujCUzehMMoTub8R7F",
  "key23": "3jkfNa9nXDEhxHhsEMHwx9vWsg83xV3AZaPKsAkyCNZzTEMC7acoh2fTjEB55oPL1U54aunvdDZFaPa4SGGxJYAg",
  "key24": "48ThucDoMxyApLk7nChMuRtspyUCz12r3umKVntfjBrdffbLDHm9RVLg6r4E5hMYv5tT3jUvtqPrGiT9Lr33J78j",
  "key25": "2WE6mmvW2Bpk4stNYZFiravi9GBy1KPsBVsWxqbf5qKQHrQerwhcLZ2CxDmbT36J3i15oxe57V9U9TWaF1Kq9L69",
  "key26": "qjC7pTEgD4fLEwA43NDvZb6T6ib7K6ztRe5AdWN1MHCLrG1aVTvBGeNt7CFZhWrUDgZCGajYUSPAVULYpYfYyZG",
  "key27": "3MRb4SCofAJFixkfH7EUedSMkrsHBHAZawNsusF5Lu92KKAn47s4ihPkePDiZ3JtHNRrnS3WQkv7bGWvZUAvsCCS",
  "key28": "46FyqBrFrWvuYMQ1rMTerAs5Jw6GGYNx9d5XTNPGvXJ9dxeJeuNHcRvr58jDZEhkJu9MjPozVZ6nXRqakcuUjztB",
  "key29": "2fXCv7JaqVR8w6Y2C5UziQwSD8FJbGN3ofAX6Bdi979vkQ4tFaJWkUGiLa2eFnZzciWwZtmFJqSPcezaa6ccCuZ7",
  "key30": "5g21ct2JNJadaZXv8N2vYg7d5CLkRYDLPGhoUmjNuKjJ95RivtSERaPAknc9JBzYFQRav4Nj61dqrEgzkzXuR9p2",
  "key31": "2pDZmUyqZQgLFGJcJPifvkoyV6GMvSZ9Lub7JDwcMvU4ThLWobTsL36EZuy9SiCc2eCW8YK4Eitwn1Noxuq8rF5D",
  "key32": "4SsQDrRfp5aB9KMfFE8UtWyUidwW8E3c4eyDv8eqRWSeL7xpKthubF2Ckce4xH95sDvZpc7R24zDk4drPnM7K5N4",
  "key33": "VkrVZpBwKSSXLupefPjGdbD1AZHqwuXWeWEX2LJAp6C1qScR8pNAqqJ9ys9wqcWJXuPugnB25E7PJ53hQHpH8nn",
  "key34": "4JbQDnBxspPBFEFxZDZ83HgTGnSYoku3FVBdcXPUu3bfGfD5Pg8Z48NMkxRdDP12WBhuLd4xi3gP1VtRucQaJ7jG",
  "key35": "5SZRjCLaVPoJNkDJckaij1jDMpgqWZY6kejDuna6R4WY3ND5x8CJoeTbBwWnww6mYUpSRDow56eCtAQzsbhLP2GZ",
  "key36": "5WGw4Txs2ZWqbnamosEPan4NY5F5VsaB9zPjSmncMuWD5i4ekzowEt69pe3iN2sv3Q7oZnGRqEX8DkV7BvTZVsu7",
  "key37": "3kkh9py43gRajoQnCRZs2Ei7eQuz9Bh96THhLpj7zLoxa67bgqe4h6wVi6HJrKE6KfcAcWqAd21PQudFZV3ncNz7",
  "key38": "WQn6BsRgRrpTmquqaZDgEQyCZgoy7MMZ9KAFSozBKgUi3Z2GYyZ3Psk7Cah3PRk3zcD6WTKSjtsCyic5vX8uND7",
  "key39": "3SGPwP5JqnRHpSyTko7PYrCixPWQg6eX5Gq7AkSmDCFNDfSy1ofd8rN4ck181b3ugALmtF7z9umjtawFXGX3u2Yx",
  "key40": "4WhPnJzFLNbDWBqi1GYjBwQAZotuh5PX2s9r9XCRabV9DtSdiSDaaj5p3vyKnpx88D39MiKzPx3u2Bo2KidNTSiD",
  "key41": "3rTVbXvFnDbAnfFjgmC2LjG9HCNgJDuAi448QhpjHSRuXYmXgAyCXQZXz2ZrrFAQgrvpYLeY4iLZuvJJWcHgKMPJ",
  "key42": "2V9WJo44hg4jbrmyLFTyYSyz59juJnMsbYdUtut5SvMYcBgJUfcdo2tv8n7ioi6Ax4yevTuTM3q8UJuLEyZecxvR",
  "key43": "4nwbACm4qQHP7HE7SKTdFQvtqdzLpnGruHLfsC8NR253AmiXCW76BPtkx5KACj2XTqNehTmXgBYw1oyB64rcfbjt",
  "key44": "fjjHRWKegvq6oeyn6wJiYHDS9ti8J6oHMpk3r3fgEboPqZtLGLDAae3dXmUR9fvcWaDcjXmbbWSfCJnba1o2YwV",
  "key45": "SaKbUGaKZxkS4BXQwKQD5FuWomBTss6H1JZ24KsYSYsroRrEB3y2yfLjPn66GfRJKdzAQhhWdrspdyhYvt8LfzL"
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
