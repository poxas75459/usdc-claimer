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
    "5ahDG2GTZp89C3wngsoqxZLxcGXJX23EPD1iysjXfPBDC44ZhJLfCFXsaUStt5Cv6JhKx7TrcMvC15G837Wb2Hqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAhqoU67W24JPDpXvL4sxKubCyDB7DRusnbG74C9pCfMdziH3hdmZdzdkS41x817cgunicr4uGbPbzSK4TVSxRi",
  "key1": "5YNQXVWX53wahMaBjb2SRcFDqRXxkCHQJdiPG1V18d12qaRGLCjsyxf2jzENuhJPp9MTG2NNyafK3Fn5QqFffpKc",
  "key2": "3G7fF1JD2nKQkHav1hR71npG152i2HKWwdfukuVjAoVeqrt86Qy9nj1ebBej7YvrYJMCoaKzGVVp7Rb8h32wtzRX",
  "key3": "5KThHk95u6JWSHq999pfyvGY8RRvsssess5wfPPsogqg3N18FTXzFN4eCWArUnGT3gkxLA4rykkBQfWZKhHCSBCY",
  "key4": "xn7Q297U6wCBBpfb6xwcBkhv9dEesHEee9gNMtGD9QVHeKTEqzsNDQA2rGC2Xk8X9sNZBtNVLoFwsRWyz2DyEWo",
  "key5": "49cDkoci78pXuVhn2onsXpX855f6dsa5HM34BqD8bFWKVJKxsyBRqRip8UU7P7mKW1t5hi6Nf9ELtobPjZ85eXVB",
  "key6": "5SvMZxWRZ4HYHr3igR7cFtwaypWWVb28Pus9vpgofxL9BTaXUYK4UQ7vbwv7afD1VfTNiUL7AaCoqptqQAZcen4A",
  "key7": "5MycuQvJoLokBs2W8KHrNgBGKUk6pbtttVpuGe5PBEuDw7rPBeMZGUMuV2FyHruaGKyn8MHtx5zSv8cimMVjavgE",
  "key8": "4BLECbsoVwtoXxUdJdKqHC1DaHCriTMy191bEP1pT8SVq21FeDybA73Gttki8jQevcNjXLjmjGCdfX7H8bE3Csvq",
  "key9": "3cvcSsHDVsiQMw5JNDCFQsx7U4h2f52op1o8gQZv2qreqfFCSAEw9JhCeAQ7ASQTxD6eC7az3ohxGRDV9zYiAJfo",
  "key10": "5bimUkfgjjFBjxFK7ZLcVwjdjE9yF2C9LBkku8C73hhsqT8nyDYa83k9LDXE3KcV6MkWLXKYD22KKa5pZ3VUipHS",
  "key11": "5u17JGdptXkNgdUtsa2EjUJcBeNA9avnrLq8Hg3U2gK4CNcQC88Q5U1cC9V7fQjETfV7TAVPu3FkZR6uwdUx5GqU",
  "key12": "29S9iTtr82QLCgYnA6rgG47wXLxi3zXNsMjz8HQ3W6R4Dtw7CXerSHhKWwKr3H7Yh93CUz4wh9tzPrCBiRPHYaPa",
  "key13": "2A9VhCVjqWwjB668n1nmFsqMLQ2T2dXkZBbB3SFBvLB5fSFRYmKw58EVw28nRVSP839W4APxVsy7R1EbAwS2Hz1x",
  "key14": "32MxtU3b1rTn47ovdLgqG6LkYdFLpnRQJ48ULgXZxT2RbrSXYszXqALzFE2Bo6GK87ev27Br3U4xG266puRoStWx",
  "key15": "3UsyU8bWHN6vkxxiRU2HXcnj8DL6MFQXJq7JoniL76iVzg4UMuBP3A16TPPYBWoUqwcNqeUAhMbMc3qQCtchR3jE",
  "key16": "2xS8J7mjA3cXbnXksSFgkYqSTqGgwV9MrgRHicEZp8BiUSoYdT8sSXwh1274a6YgxxZXnARm95KCSk7VD8EccnKj",
  "key17": "4he6gghvUeFWYMAExmPA1fUCnZwLFfNvw2KSm4RVGDd4FtZDV4RqmxfCyfLNLNCL8wHmA8jmtozSwhEugGF9Epcc",
  "key18": "2vBYVXa1KMF1Z19w7W49j3LxqEX33xk4Cq4G9PNC96vNZAEu7Rfs1FhyTeGUuxAskEDiVY8Z6u5gMjmzHA39WaUj",
  "key19": "3TepqfTRzmp1mNW2Gv2nwDh8M3ZrdQQxj6YCRvHQUjQedN3E2gbrEDzgRSb6LjBCJpHk5YCvmpk3ytf8rukcAxnQ",
  "key20": "31w8zAQa6y2SUcobNHr8WbQyJDVTeMsDutwzSgJ2ndCdwndpdPjnEsBwND5dca79CQk6buNhJueGEbMZ1dmQefBw",
  "key21": "4ehGYrV7GXhgaQhYxFxtVC6ybguL22h7TDYj8tsqmYT2we9rkwgZdg2E7CksJUri3MWvXJ1GxpMjmXCmBsrCxgVs",
  "key22": "5KxPRoEmTBw9EhZ14wKyCbAGmrjPagJpLcfFkZnRHK7pKxRKsxUuC5rFzw5g42P1SK7HH71ZXggbGsNNic8pdMCJ",
  "key23": "4xRokHz7WRq4MYqj9ZXEWYrfwBaeLfbn1Us8Z8vo37FG5AZVYWkPTmPNKDRSb9VfNsbby3Bh3jPcUMhKuBS6MP7h",
  "key24": "4AfoXV9AuD9EvyzddvS9TJwwJVBcTZ46WxK6qUDJDUSAHhsUHaZQJoDcg5DG7yXxMmU2ydktD8G3813SsqL9XCzT",
  "key25": "5Kkcp2iQe4KxR9mF4LY7gjKojT62LhPXVYabFRS9ASuFJqeknah2yDUzkywjCJ3ApaYRiuqRVy9MRdFk2SB9wXZ8",
  "key26": "3MLtYzXqirhi5szPaWAGeunfTrUC6QrTfYC4pfLN2ECLNnHCUL7uZ5gqoutD95FE4njrg4Qs7QESg7WpjkoVRvoz",
  "key27": "53Eormo8JytsWX2He4Y5xznhLSwm2bWJcM7qQKgufwejbSB3v2C3pGrQmXDfoCJUCT8DwyrttDfdNrtYfZtQoQVc",
  "key28": "4EbPTdQpU3VTJiqraDMV3JcBVRWky4LrxS3acRDbWB8e3hdg5emcDjFdsJeTjEQ1nLUooohvDhunxjtL8thXM3xX",
  "key29": "4pc5oich3UahTowiJaSDo4TPHGLdcmdZZqPGjLgkfSrXa9x39qbdX63nJBgdcMbHvjy6PKuSaxZwnYLB6sbNmBct",
  "key30": "65SKxRR5XjquAzTFRbdsTjBTYQnQKuFUfffwErHXjFM4jhT5RAchLV6r2RJJJ9dRsgyvoM1VjgFWNGMCiTNp84P7",
  "key31": "4aJXvon9PQ68kriffZaPk1hfyDM2zrF1FV3mHGKrzgJmqKKRoFmEpgTpEZAQjFYTEktcPLuofjzEGemhLCZ96HJE",
  "key32": "5MXuA1mNCaJFiMugkK59EMmuBdGBwjPTepqjjt9TSeDoqLXgYeaRRLkXAVtK4mFY75UQKbjjZBkn95P9iZ4EGYe6"
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
