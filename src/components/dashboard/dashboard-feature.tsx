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
    "JhEdTNfFHePxFdvscBrNvQwKqUhAi8AjPj6Rg3pmW5mC3S7VzEcAhNqR1yGtJLrAD4QDPgfpgbP6PXaZUQeNkrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDnDtuTskXPUgHQzeAAZEkgFSso115hT2RXKYmtU3maN8KjC5LWCzEN7yXS6Pci8aE1Me2da5EX5oUqRvHXAknT",
  "key1": "4B6xPzbMZMNLxyYBPxVyUE4QZn5KBf6hF8cSs1e46hp9RvHi93tW1oM6HwjxVqp5i29TdYLGDs8pLZT9kgaouGAv",
  "key2": "MrKhGg5v1mfgJUMC5EmctRu1jKUm2QUmAs3oyJWBh5pLnNRpKQN3xR9AL8sjiWau5ufJL3eDsj5BhYCWT7ETnLJ",
  "key3": "631DwnRBAiKFZvmmqgmZozAV4sbrFx7ewN3M3e9L2wghAgMkoGq63qRu6mw1aD6qneLauwGXUtsoLYr36Ls26MDC",
  "key4": "3mVLcqoXVme3LVhwsam4gdEPSjPnUAG3RB2BHxUQeuDZGQqapZimh8SnwUcUMgjEpBtdxX7SSKadQBLVLPBJfuXA",
  "key5": "65b2CE9cKeGLyktZcPXNR5VCsQA5ET193wNdsyp9TGd38LzGJCU5ByAbWB7GExxZNHyNyodXbQWXWS58DgT9Hv7H",
  "key6": "ET12e7zrVKsr9aDFTiD7P8RJc1MGoRFnftov9AcBCHKU1eczn2k268RniMZhk59nsySCoTLk5JjrnRHS5omm9er",
  "key7": "3ui8YQjPDiBYccYRCsWVsoc3MLS4Mx7gfgVGBk76YEwXPt99YKgyvgNQH7HHzuAcUejPTnoLwLzGZEgJhyRut1BE",
  "key8": "2DgHXxudxfkbCVWpxoPSWJVs563QftF81oiKhYtSbcs7aYXzJqqFG2sBxRr2428Dxhud8oVBoBApeANpyRj4BTER",
  "key9": "5UGnsD785EWjXhzDWhHtyuFtyqet1jDYy39a3vAEbCkWwX3eG6cLQKdegPMU8KkJbeXQYsL3KY2KQ53SR31iX6W5",
  "key10": "4aQasCnAkCEhf27L2EsLTeTa3XcvaT5t4uEaBZER8CMDsD7tJ9YfG6tJGXEUBKGh9sia8pQAQjaRRgRv3PhD9H23",
  "key11": "2ReHCZ95LaMkoJet1AJhs9mzfac6hXmssPWNPwqrrtg4ousnF5SpJpjdAF2h3qXpD2qsyzNKn2uHZS4RtLU6an7e",
  "key12": "5RnMP86eJErxW3x7ruAerxTaikQa7byRmK5Z4FzTMekRjxtuT7FDkwUQbnFCNNqJmRCmYj9qroWnuRR8obvgMWdu",
  "key13": "42iAWP91refG8VwsPHdmLEu8xpL9qjKKMFnq4b1an5i5Tv2iJfreRTfU85Rdpm7Lbq3jvCsdtmBLM3JaH79Bfo4S",
  "key14": "4oWiKhPLUAYkUQU2J5Yp9dEmfUvzW3kyRbNsf595MgfubPYgxRzdg5aNG3phUfYQVi8sQSLiF4LnsVWSockHyYtK",
  "key15": "3a6MLPJqixVmXCgtFrL8xHNGDC42jJQeq7bMcgUj1hMXzaAwpqvXC8dRiUi5jqD4VYX55KFJmTYUYuJ19JaYm9av",
  "key16": "572d1V4CnZBqgvMdDD3V8ecuxBx647ara4czdDLUwaTP9XVSUF26wcX6e8MNjVBYFDcyQzLVfRWtAvVqYDKQbK8h",
  "key17": "33A8k4e3tYZLqjwsmBebG1xM7qxDqz9Kd4xSabrQ6A4WiN6ThcveGuF9uFWe3RdQgEJWx1pQLFfL1wABauEUKApi",
  "key18": "4ePj2HYxR3nBrmBXD5DvMCyKUwUBkcCzwtUzSEEmGFcP8TFN4UDsLuYJWyqaqLKq14eNP6SR9aXExM6qZctRzWFV",
  "key19": "4obQfiMSoFi1CmihSAuGBDrQvVS6mGuBL4ZEbSi9TEmeePWv4e1QF1uW2b8MwVbKTJqgUr6dXxdV5q8EjPBUTHuo",
  "key20": "425YkwsAN3jzZaCMmVu2bYBVSRDJsuKPSYvywALYh7mSmGd9bLHDT3Zzncm2W6zNdhoPDFPvNxB3c3MP455h4EeZ",
  "key21": "3saL6nAGVgFhPd3szrqZHNykjfZMB3obKmRLDErXSTCqsK8Kdm1TuKxjxsvVyyPZYAgk7wNgmXnTHLuAxjijTj1b",
  "key22": "4NEVoUw2Brv2UpywEn1EbaiVL29wCbzgecN5fYncs51h1gYTvPGYvqMV8ARht42W1hr29SHRdrStBpNzxGzivRkg",
  "key23": "4fW8QdUCVfNtEKCG7cGVesqHUnaEG4ZL397uBVN59kgMgdXtuLU2y7C9M1zUL91HAhMjgDkEHHpm7RAjSxnJtvHV",
  "key24": "3MMdgUu1gAfZuZTt26SAB5p7G2N47KjfKpFJD6Red4T2X9BRvNC1Q3Vtbho9uTUMQ9CtCtqZwWkft4ynoWJuAbpN",
  "key25": "t8kXL7NpAYfPZiHiCrAQedpMmWECPeWird612Ux5SwHiAqQKmTyZ3JTvTKXMEmTT69n5XYPnGXyJDUuGT3cXi9K",
  "key26": "4oWGFcD1MrbXJYPDycgFUhfdsZ3HJdoenAP5ifrH5gFhoUgKBYvY5hnrw9DkzXidKf75tgxvenCMW1GaTUjkg4XB",
  "key27": "ctBjcnmvzAGJrCnWovoA8igKCavXVintPZ4S5mxNm2eJkqbzjr3Dp4NRu423TNnSX7Y6hLHKDajT4i5LfjHLDQC",
  "key28": "2QDZucMgWoRon2a5k33ev8GJHv8muaDZSiKNpwctQzFhTmsWfpjxZQVLfUuPWELQAheZ49vGXZV8KBTSW5TFekVG",
  "key29": "67bBVbpFYo5E6ZsnMApo4VbAu2SG4veCpst1avf368H7URQYGpfnwywgA8h1AEmzWn7ScyZP4MFzVjTPV5ycXZvz",
  "key30": "YNN4dEbju9rz1y4un6N1ZvAFvAHFsc5fmB3JS7xGXXNKu8begcXnZfu1jawnW9iUuvmvBUwg9XVaVBB5J4LLHto",
  "key31": "nuLxJsvNZeJHtDNrat3HaydURYiKNWazPnUQ5iBSGS5L4xguC6FChhJWbEtMKV4Qx5mVr6wU4uAkc7DhQWKDHWm",
  "key32": "uH4rLC9CGYMHGe4A9yzKWn8RGbchSuQXjuDfJUCmA8WqivjwirQa9u3YY4t7BmuvHfigsKpoFQokFQrqaHQApfe",
  "key33": "175v3buNbSZLCKvV3r8xRYFTHiUB1EHLP81iUt9iz1keYWQAec1atchs3vWasNvPPnvscgbHSrgBzQj1Zh9dmVE",
  "key34": "4yuNXedHDpSrjKEfs7TgLJpz4f9gjTHNZe1r1Qeh5LYAvcDs14aLcALuwNNJ6AU1dai8gA1cxkY4PGoek86v1CyA",
  "key35": "3DjF3XpAnchZkUsipQQRjVAANqMeE2NfUfw11YASNMq4aoq97AEg9mofzay826Th1zCQnR2Wsjp8VxrTdYL7Tehy"
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
