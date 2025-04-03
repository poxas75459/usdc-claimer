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
    "5tR49uCofhqri5kmNp9YThv8ptoDffVgQnTZaoDF4mCJ5ETuHNsHmRNfbg78rz4BEwJkHvh6PrsMVruaZNPEUMLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s18DmRKuDHE7KVAtrb8xYQnHVSa5uUcigrqETVrL3j22Gg7kYoRWQqhCtZBnsJkfpFs2mbccvaVXWwEdWP2JUZv",
  "key1": "JaaJ8nA6reE7pstZNrxcyohjjMnrAuFYLxdFbU5sU7CzHtKgiGtgFPNG9xFEjVLgfDM7CyDMcpS28J2FSzJbyZH",
  "key2": "5gP2MwjrCA7mVjw7dKQhB94EmynQMErNU8j4WNKqD1xQWpm14UNC47JEKNBhsy6o5fBNnYWj8SULtN51n8Zjc666",
  "key3": "2uGw7dRwjWDVxSCYcQdKBLJxv7caKxbqY64pN8xEEE5NfU7BCkHvH7tXYeDkEPKfT3JpN2fXs5E7EAcaYkGQ8K5H",
  "key4": "bTvQVDFqB22SbpSyLYmtC3Z4AY2MS5URhPt4Ap8FZ9SHD8DNN9w8ShiFE7pdnwsjkhFZibokyJX46iS4TGqRQuT",
  "key5": "4ae6Xyr4Ni5LbmrVkLQMvBZWgYRJzDKFx1M9F36mRkmfsXyKJeibsHS6qNUE6nSv5XcpC9dKR4BZ2bXPCANkEyJq",
  "key6": "5zdnz4LxH6HjAz6jRBkCXgYcspHmVo3ihVAZ13uDvNyidH8WZt9vMWwvbC2wNNPisNRJsX3JJ4L6wecE3vf4iWnL",
  "key7": "2d9mtceKGzBJjoTjE4p71iborgNQEN9iVxLvARWXEozbxgZBfafek5XDJ9AW1oH14ctpLg6KWUdtjYxeSD4hmURu",
  "key8": "5tQT6t7fejuvSBY9K14aEXBihmgyRtBDQRsGJkjVSjh6J3upTxYJbmvVDd6fC7EVTvbqr8ZLLyZGm2hMKNND62Dx",
  "key9": "V9efdFJ8JbBJfY6ov4fEFW6FdQyoA33tYupQCsy2QeGFWfceYGZfTPQAv2NEudDsHgXq6ojB7qPEZzQBLwf6fpM",
  "key10": "42Gq2Cju2EHVBHDhWL1VhvYmhLHEdNkuhvkpUFph4hqN6AjLKvsRfcP6ukBeZFQFKMpAFxP6Ub6Z5M8o2rxVVyXD",
  "key11": "26LeTEqbtdjHKdPhGimcix4r8hoZB8nyMNeD3zgst3dYNuGA8wbWpeUdGM2r7kh4qXZju9GPszfPe36GtTzaKJpb",
  "key12": "5FaqBCKQ8941zYcNfcUDF5huUSqQEkLuMR5KdV44dBFA62Ww183tmvjG42kXw6dNWS4gtXXgzBJaTfdrZvrTtjLP",
  "key13": "ekP7LzCAjxNA47zvZyq2KHspDHoYWfd7uciPjchkKFZ9fH2UT572gBMLcyEUpT4dCf7APxRV4tUcCp26cDn4ifm",
  "key14": "mqHJT5Va8hDdVAdnx4wWQ8Gkr28bhUBbL93CiZgPTcM7ubMaRXmwWYbuLumpLnKoVN4sVzqcnN5rvFqVggqmSsL",
  "key15": "4e7tKg28KZ5QD3DGoysAgUmha87e8RZwJ38whDdSK747nxAR9X2dcyYFybt3cfe4NYDsxUdHgaViFfHS26fTds1S",
  "key16": "4YwrUmwkMkvMENcZLg1ZGp9ToAGQ5bpiCdzJoHr7b7gNUEM1rj6AQVieEd57wqmnvaaPZiMhVbyCm9Xex1RweJcm",
  "key17": "3abfWhQj2iwk9BHQB1AiDSs241U42mMTduFzD55ePepGwyJjDPmx6xCssLaf3hCJverfko5645dSpdScqCSNqpdK",
  "key18": "2e7bqwuFmcXkfZeamVuAHRnVKLAeXDCvtyPVuopTwcTXiLyLtPSKKcNQ2M4hskRkA2B1GJ5w24Yd5JYJnynF5HmN",
  "key19": "2SGhZ1V6jFH6jJvZF4Mef1i26QEWrWiGWUGiFszxNZe29AttVYj66woeWnbCKSUmgD763L8ZH5juemHnsnbAopf2",
  "key20": "39mjXeAFh2j1pUdkgYBmwN89oC6Wwxn3VrVVeyED12uJ8HXkpARnyjdhtQFrrwtLfho5wmZrfsh9fKbSboV3bFXA",
  "key21": "23ZCD3FDyVBAgFXQkrM2MW5bL8PNUnndhJoCTxjyEAQuASGfAKSE4dXDWarFEoSjpdJEbSax4kcV1zzmEAbS4wsz",
  "key22": "2iWdbaCgPRNzZRADF25Vd9rToijGpTKwX9GnduwFPcfJSRY4cHLCxt8Ejp4ofG1yZFZu57BQmMu5LorRAb4dUuh",
  "key23": "YyLenKMzLsqpRdHXWQ4MQ4ifvRA2LR56G4baaVAWHF5mYbV9hWU9MhVxbD487U6vnfDv2ME8Fs5CF2YzvGGNQG3",
  "key24": "3TSLg9ZTnSvfRfTEfZWZQPegLwpQmhVMsBCNU4uNkGxj9Bzfb9Uve7bvQ3YPL5tAuUxozsnfGAn89PaCx6ZbgYn9",
  "key25": "4QG2Vi9cALcDCksaJRXVp7z38ZFeRxXQ6fxaHsbCsudHb43cgbCCAeZqdGtvpXSosvH8gh7FiYQbd6x6FK1xX1fU",
  "key26": "26K7bpJByQmEZ8XsxFKKZuKN5jbnszf6sxiEek2xowk57dMqhst64phMfxDyefG17XcH5xv39Y3o4dGEvMx2SL6L",
  "key27": "5k4XNMyqe9LmAHAt5EUbtLmTeA384MitHJRXGedzSjFjshJEtEDVuypPApq9gZUU2Hza2vZUqeafRdZ26UFFywEd",
  "key28": "5Xw4n6pJhH12d6RZJ47bpEH6HYcRa9AGbsFsJ255MH6eQyjGSLvxygBeLbCaiTFHAaSjU3C2SrjyNEDHBdZeSjYq",
  "key29": "eqz3Mpxh5d6Fni5r14AvMStDSfni6U3UrjK9yE58KbKo6fzi3cBa17AxrJfZmdkp5UamTwMZb14vuHyhyUfZm5n",
  "key30": "2fMnVWoLXz4FRpZBNpKo9VBqNjY3ZEcYjyqYomp5GwHqEaKG8q8WJueq8Ceh1mAik9C1YwZA26hyZHJ2Qjup9oD4",
  "key31": "5WdyNhy49UjHJa5SshCz2AvJu6u81Xk9oz276RZ2aykr98hsWvhMuiJFZbokWT6e419qhnp18fMrzaZGzizuzwby",
  "key32": "5cN7DJksmSL5cdAT3BADrUdTPRCAfXqtZE6WahoUbCGcL4PmWnHCCqePNKrMTWAUEQA42pwCPoNtk9eqxrq5gN9i",
  "key33": "5Y7LzUDgvXJLz1mvTufCQZKLxroSBLZZe1BbuTKBEgz6PUxmq6h1dUotRnPHCsThFtEiqfkNCZaZeLWk1j1jqZB5",
  "key34": "2RjXWcmqZokjAaqM1Xf95rQhXVyjwrPo3oTFjgNk1RFKefkmdVjNv2cXWWMFPGQCUiZg5dy4YyatnFgdq5ap2Pu",
  "key35": "2ML71Gf2roCDko1EfZWge8D9vgufhz14ZwyvszGz8TpcrnZBVZuEC86BCWRV9dSqzNeKNVXhEi8Ck9to3DmCnX1F",
  "key36": "57KteSRgG74Vvdkw5jg9LGPm5nstBuTfjRmaPZJ1g4VYFCTz89FiLwbjXiYWwCwPmC2Fy8EGT1x4Q8oKeJ4cNbzY",
  "key37": "4zqVmEW1Lq74j23bqkXvCEuyt7JHH7XNqwwySnoSKUYKaY6xyLxdmQfLs5utopoghvvpCCrZpmwNKYa5RPyZQWMC",
  "key38": "5RJkyTgWyxqRQWtHmBSbgD2MbTgTeNqBNCqyAdbJDuXjxX3YooBjTCtXrnt1jEHFoPdyR1FMVekRM8XtQkbnHHkf",
  "key39": "2b2DQzCSbgy8nanoLYhs7cWxcA4LQJWs5fBnHSjcbU4cvgEuJjsS7dDhTnKS94BkKtk2ck93qoCzbYtj77nuicgb",
  "key40": "3UKG1Qc4gekDsykDXrg9VfKfswjrXzk23FicvUMSgV89REbjsXrjhJCsH38EtprpAsWBZqgjwttvgGWSNWatEeyx",
  "key41": "3XRxPEFXXJEcPbGDTXqQuDVTCqULWZFJrZMjpesnuFkRuFMKCDZJucRd58ZDnKTXFJHv52YGBEVn5feRJCzhM8yf",
  "key42": "cSDDG9vGisFtcA9r9k78yRuGPjnE4pWS4t1DfPZ5bffdPTxqQ7x6DqfDYuWRcDSLLcyPzwLMKTeQ8omWcN8ssnW",
  "key43": "fUPy865pER6h9soBoPuVsuuZZj76yaAhCbQHpXTYzNZUGJkpaDNhibBGkPNe5dPoqDpcT9Zizdh2o2uLXv1Upie"
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
