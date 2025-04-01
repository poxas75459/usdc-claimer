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
    "52VRF7h77Le17YzuffrjFSixmU5aNbMTYittfgKhuXLnPMp3v3Dk3xrm4yCFhcedqsNi9hpzUgGerbh2Lzy4sEnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ho5qhCv7TfhY1NSTfbPkjBgcTfNhwTMLPNLTXG6hSx4jc9BTtGka5ZamXtvL3WUu3JgnJs7TBcRe8qNwoA8Jzve",
  "key1": "2ERGcZBqD1qKhukwegze7coEBakNUCDHKAJRKMt5BH2UsS7pcPNjNuzfsWDZF6N2HAyQ7co8rcsJPv3ALhnX8cX8",
  "key2": "3VbFja2MBdhY4MYwQ4BLAX9S5khP53x4kvLL8imtnNjW69K9vwyMxdeSrjc1RQMEoKhGABj3ibigBqyByf6QrpGv",
  "key3": "4nEbBicsyLxsiAZMhXMfjzgZgBYxu3rK4e2EGi4ogdo6tQMvFYJTgFGhANvkPHUCuqJksWgt1kg9emwd4wC8KSxF",
  "key4": "61CLVvzu7WuzgfuPUcRkJ26LJe1pN32C1gJohL1Qrdc284cPoyaJP1tiFC6P3AcuLZTbtebNxktJFNWKxbf2w3BP",
  "key5": "4F1QJw2g96zuJSAbQJT8cGZDDxkEbXaGc42xUKod3FURYm64MpUQkqHjptfGoGGQbUSzg5nE8oGFDA5F3aoRo4Qq",
  "key6": "zg9TyjS7jrnoHZoY7KvY1wPZ7QY7822EvhWSk3KkuPy2uaMefd3F9DuUK1czjP1GDpaYGu5qzWAX3P7Epfv2nS5",
  "key7": "QxSsu6taukhzNweF3BFxtLt2utfBqALs8pN4sVcpS18YiRdrNxvgezGo5eDzFvYszdNYBSeJnnLk6zVvkFUL6Hi",
  "key8": "5CniyugDrb1e4zYU92wPA4sywwChf5kB1GbNsp585GhMkH777otEU37AxgkXmQ9RuFkH8pzg1SUPKv7eHcyThGyc",
  "key9": "33AWYkRW1oYfhzGj7pDvFWo7DXohquFJi2DUxie5Hz8kLduaBiFCgUGhoUiS4uPPDTiT73D1tc6TZb3Mxg8k99vw",
  "key10": "5E1yDYQ2VmnWsdzBAuREHcV43ZXyXCTnQ4t5dRtPviEkDXtZJTV6ih4fZMuhrAVB18QA43zz68zEYuXWPbGn8Fb1",
  "key11": "3r6BXfYsCng1RQRmybB5oYpwZMUwNm7cXtbqVc6DuuuZNtGTZsjCL6aPFKDzWiJTdLHsU7vhp4k32MLafWQEnLuj",
  "key12": "25ua3MG2wXhjXt5aq6HkjzY9jnyeBHbyA6aucy1KdncdzG2DnmsZKfHXpmVgQf7GKekKmALTp8DQqBapUux1dky3",
  "key13": "WgPzyRoLWoNjQPwBj5spor6xZFtzsXDKLrC5XNHM417GeFYXoxf2DeBBNdWL4pssUVjLqec1j2Df2cFsbZW4a9g",
  "key14": "3hS3jNnMkG3UsNRYGcxDRfwWaA3hA2fWXaCeYEfQpw83FRVonwH8pNLsdYrT5uuQqD2448iVmz3BdDUcnrrWycE",
  "key15": "64NrL66x93WBd4S6WKoNBRyCk9zDhfeqSxZ1HXJdH857AutJeL3CiPHjJzEnbtZRcUNGkWrRXgpyiyU24BDNb18E",
  "key16": "21MDdFzCJBn5jvdaeE8VV12A7R1ka5VtpCCD9UWGVUUPQj5V5P445saNK5nnexkVUtnF8gNLXWmCqFWzWKtV9G1H",
  "key17": "3rz9MXCXPd5NMAZL2RDQ3CHG8B3ntEuYVXv5hoejTdKmdMKRDm9Fw422ZQqw5ecG2Z7PhNVX92hRh4twbjSaCBrG",
  "key18": "2q8TQyF9CFW8fv475X5XksPxicwRxscWKPnLmRdgC23XWfwTKUBKwhcViNr2B1VcbAXGapigyVHQUBLL2m97tzJ4",
  "key19": "2XsZiKkp6mgauBp2KegBdrUhvfKGqkQZB2rYmT8vup6zS2xo6hdRHWj2hnvpay28U7MAdsj5KXpaA73UxfxCZ6FP",
  "key20": "3Bi7Qk1sLFX6ez4FM4Ss9mqifFt9JUbWTa1ZKyqVxWSheYnEQf8UsPEDxmZqURAovc62M1NyKs4syoLUVc94maec",
  "key21": "UDgHRBuvdBTyFS3ZAXjfoKXcByCmVKq876X1mzBbQtRjhDzxU9eKqbbcUNBDd5QScsrYfVx5V4vhhTgDMwYeWZu",
  "key22": "4cmFr44XgMy4ZzncCkGJdtdNDcroNwDxtRjk8LBPcZqceARFcpxNUZFFBU8BvHUM3LrjRmbznZkP7ZYmqEFKkR84",
  "key23": "3jMtzJojRJ7bgmQt6YuGRBN1WtWRUi5gQfXrwHWTkcWnyiN3kfeDkkj1PRKHh3yjYHSEFAn5roqzLKpp68tLbDro",
  "key24": "51nNNVE4Qpt3vRkCejX3ppRvvQjoUNSmNz3q6TrMER8RbpxCNLxrYxVBohKy1s7Yc7GBLaL1TkDiRzmF4Lf4F9rq"
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
