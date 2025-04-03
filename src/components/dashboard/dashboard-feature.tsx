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
    "mGnjcCJagcpGVgpUrHyDh5kNpGmW1hSF3FBtPWPwvW8rQSq7Fxx5znPD5WtWDjdu9CKo1JFuohnM2d3PVHjPorQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3srUaMtECTSuN5T9jd9FpCGmoGgwuqnuGSueFWpmPACsTRNQjTQoXnTChVgXBcctVuE8t3uwVmcbBs4khf2qBAzt",
  "key1": "2BCZpgyPm1PkweUrYF8KMRx297o2BF5A3N9zjMfaDc3fpbGSvHfjE86MDSpZJmSEWHY3QSEbuCvuAH8Sp3KXeEbv",
  "key2": "3g6r49h7hCWJTuetLGdsgN98fh3rE4maswjyMQBPuo4ycZBkefpp7Ca87rGmspVmosHSEr6V4MayUJSHUbPGTkqE",
  "key3": "2SZ7fWgscwgzYz59HKmsvnEofVo4xU3Jz1FWaTM7AQDvsq26onfaYpmV9xEAzoMyR1Vh6BJiA2q3boWh4mfVYVEo",
  "key4": "57zrb9APRQLfdDzm6P91uP8oXCGbRACSsFMapQvEZ79hjGa6Yi1VyJxnY4LgLSS8hHVSFKKTB4gRk97opSMJz9Vp",
  "key5": "E5o1K8h7mrmDetRmeo53nHCEtxKTaU5P1zYDqV5hU42yBFrTEyph2w6Ng1eQHFZ16tqiVKjLb2xsjuKyLxkZjxo",
  "key6": "2bf3cQkXP4NRKaTMb5PbhUxyuRtngcaMNDRy16uWPMMrBiJi9puGWJPiFxQrjjAAmmMVZTVHbLAdy12cMxdQSpSY",
  "key7": "5ZD6z3CBqyWqvuj4qboLpSDKL64SWRodwvMfPhC7W2oZCDyjivRynNHX8U9qjiUE6dbmhWJccKJN6jXt2QCn87Cy",
  "key8": "4fDojDfGBrnERhGFkkrxKdSakmdftJjW3J6R3zssXMcCkJy2uz7Ktd66mKwn9mpRJSLTLxCKWBkCwQAmrKm5esA4",
  "key9": "4MRxddrKBVumLPxMCp7CXG9UzTWZTtLRbhArv8M1AcXWCNW1UsdsvZ9Ne7E1e3spwRzmpiPECBcHy65YVuXfAcrT",
  "key10": "5dwAD9FafqoqhkvcCDdruMNGQCqYQ2WSFbLNWUe74CECPrMBQHrPcUXnrzzQzcPZ8Dt1dfCp4qNSbunQRkDr3DhR",
  "key11": "3kCbEZpisvgkv5nZk4aRTzLvSXimYtFw8UgtFN7qwpiMB4YjfV1Y6GxvNA9R4RvxLZBB3NhRUYcumYbyVoX8TX89",
  "key12": "5cGyfA9rDCFFMNf8BvjcjnKufgUYWBMvjbucpRrFBEeE4uuhCUkBEiQTor54rxA4NCA5fY7kAiVCC9CGcTJbzAYu",
  "key13": "4W3StU4zf4yLhhYDg7YKNL1L97UMcTHTMRVreCGhmcdmt335t4Wv6gp4htjTBvLaV187UvfGSkxtWCEk4Tgg4tbw",
  "key14": "3A77z1cZG8sk7TH3SRRH9xuo2Vs9G6DSWVrT3UPWviWwtf63Tvmij33hd5TPXseTeSn2rMLzQ6eKXH4jH1GC6Meu",
  "key15": "5MKcLcCSashp5EqgFBN5UGEuZQSKEWR6ioH9ZqVMR21iBDaniqbti6ciCRpCksimbtQvAdvEEFkjA7XxfHd1Jace",
  "key16": "3V4eXFXEHjrohpwbpNRwme9nbbbX3mYywXatUhgPjZrfXV1BUZqc6iw68R7H3vzDt6u943wQt4fZ2SgwKorgz44e",
  "key17": "4df6PrXf5MSUaARHeuA2PbH8tfoVdBLctJGSmrMGE6Gxp2uA4yJ3qDc76syd9ojexsaMMtaJNG8rL7S4M3nRnYSs",
  "key18": "cUvn1n5U3Rs6FE19LDDFZ8R1HUvEvukkaUR7hTygmni3AGczFMUtD7NmYrm1xdZS6R9o7tMt5ndYY34RyzmC9DD",
  "key19": "41QUNXrNihKLp4PpFGfvZNFXGFvyRNpZ1zQG6yt71AmP8LPNJ6Vrp4XXuuvs5zjhs1WS8YfGiFt22nKVSqd47E4h",
  "key20": "2aQ4hPLJ5DSbvU7o8fspC8fyRYadFKN2scNDjygMg41NQJWpWDTPyFUkf5E24YsZpr34erusXorpEnhUTJVPriRq",
  "key21": "5juUkWgDtpNhnrhi9xjKmiM5WXLaiGNgYhQ7oa3qAH5ACaKBLbKyRr4yQcHXSjLaVtC6w64QJ7syho49PgVPAseT",
  "key22": "2ZwafNXwMBzWAa2RgEnyDwyTKidaiYHSS3VibAcf8xiZDVa7NnGMrqzUUdz9gsJogvkNJkRHqcmWy9vfHuEvhvoR",
  "key23": "39wDKZv8LtPkvUfreGYmxERa4u5acsegeXQPtDxAFiQayk5HonmHRr9W1RP3imDGUMzyPwBDLscVM51xunwoaXKA",
  "key24": "3Ys4ziybhE5AKidFSj3kU4cWuTDZgnt5YFRgwJXHMZtWHNnLk9Gp4uuK33XyCL7cHDpfKUwinGN73k3vLZHrqMQm",
  "key25": "2EeB7idFHqhtbgP6obgDGaoGXJPoErxuDFZQLC7JUJnmf3Dtgr9sqkKJ9D15KvzMdd9m96iPkZ9WoerKUwjz6ruc",
  "key26": "3CE9PemQEdtHw3DQgX62hhvWRB3PbrLgEZq8zEkvsYKGqNMc7zXmThuSn4uKnMibBkF6py3N7QeHLZikhcHidw8g",
  "key27": "3ijdd8s92xW4ZjLpeyAqgUdjcejqQb6VbKp4wNNvA21PF8g2h6v54nM8YrmvowwhMPagkHpdghewEDJnbYpUeVHv",
  "key28": "AAqW8Z5Smwz2ADnKf3gd7x1yUrZdN2JUks1pNTQK189m1ajv1ASq1TCM2oAoigTYicghKQRGPiQWZFcLKNdY1WL",
  "key29": "5jTUK7ow55vy7DbTa8GDU5tfATUe6CsjgAAXr7yJ76ycCF4N6HcdzNk7gPEEgnhz5HNGHk1emzjdAvpNKTkDTnZa",
  "key30": "3P64fdP2HPZ9pG1T6RxfLrZTT2LyzTWVAT5W1mZTQarnVWXhtKA8ysiwqKtThZ34zv9QoXW5E5tUMiS9gXceG1Lh",
  "key31": "2yPDU9pw7tsLDb2F7jyYzqoQQLoNMokNTsuArZDmRzbTpfge8PYD1Eeour4ydK7wgNWdXKanQtN3iPn8DRtNcwrF"
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
