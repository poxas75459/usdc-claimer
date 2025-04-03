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
    "5DPKiQmYmGaE4d6KY1SYshd3SpT6BDX7kuW4UdvqkZ9rQ948Yfrrs1uk4sM7Kw77Za9zUmxUQ7hMeG6PeMHLWFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ku3xatY4mdLbZLWZNUv9TLJgdjdCGg9HgXiGjUXAfcy782u8Du19otoVmjL4jJQjyG4KrjJ9pbvtVZSU6oXpwSt",
  "key1": "5VvKJLgbVe29jkhYSU1cADreBCqEdgUj48bDZsv64d1xaKUXZzHAigvBRp7UqHaN9vt2NDVxbUMo8FbnXhf6aiBv",
  "key2": "3F7gMJcF8kh7mzmhhs3zsBF2usCsinnuohzZw1mPkFkPHcMfSSkJ6ywFkZLeeHe2pt9wtD6s39y7WF7Y3hYFAyaF",
  "key3": "DHT1jrUwe4qvhQHjXHCLvJtejoJk9hVKgAoB6YbZX6ZG657WNs6wDFJjFp4y12S1QpVo7B8k7JmWFAvzS65tgDR",
  "key4": "57pCMNqVkmcTThgdmbzb5ds7QpgpgqVgNmCxK28HxANkbNcU7Zpnp7Uqg9auzifXh8Jv6hJkujqyygUPrKbgV46R",
  "key5": "cdHLbx5jVCT6nfjPpCcGgQe7FT93SU9DVg5xgzR9dZWxkcZpKHdtHmwb8dSPJrW96pfCkR4YutXKU9Z9NGVQwJH",
  "key6": "5Dinv7fqdAv4EYKqnjQmEfhp9mHFUomvmkxipjVaYijSeiL5fCdE1VTnWyctPz16RdidtS9oek1jy6ZpLZobr8MK",
  "key7": "SUkvmotUDNpoxgYvCbiSeGeWRV4CFWPPxxhezoLwFeeeGBgaAJ2VLBeJegRSzcDjH3GV7FhxmNX1vAFiAQnqtmD",
  "key8": "RYZ5kYeAJBE8SrNkhEso3ynRL6VpGjWkBMteSWLgGyMyDsDR6R4rN45MzF6MCUbdXXuoTUY9a9FHuA17NAKWxdB",
  "key9": "2XdWiC6D4hUyiVvma4UVDg93CK668AFhwaXQFowMdSSoGwJUDK7X4rLxdyD867LHytheVb4r5ErH27VoEverqPxX",
  "key10": "KmQe9h3mpfUQJNSZN685x6eehUgWBA6PFdyiY965E2gjoNUZZENJ4PUeT9ESttUtAbPZvS5dWZNHHak2os7rhuZ",
  "key11": "4SH6VigZpCThooSrEZNwjFJuoUUduFsUs7Q6cUGiumP96Q5H7tf9fD72j5eJngtfmk64whxVf5ofQFqpXkS2HaFZ",
  "key12": "2MBfR9rTXUn9QeZdbzW9qpQLeLEd5o97vzbErwchwdgDmcM5sdKUA3FoJUc4NGpN76C2ofv9DcRcVUuqzHAgFRQN",
  "key13": "xuYL1f86MXSJJhukxufsubVoqvP3wrQeTGzqrczQ1hU7pBSyUyhG1SpncSWTfzYvz91vxa6yyR7q5fDB8oSwzaU",
  "key14": "4PzGiuxj4NwukJHXqz9dAUWtM3osdR3zGLdi7t8Wm89ZnN4zA2WPLWiD8rMCvuSXF4N5s43ekstSwktkX3bKLWSd",
  "key15": "35RtaXG7Q5yn8GJdqTtuNVRzkKtmoaWGLQJpmYKNMRN7WUcneYt327YFoZtoUiKmdg2DLua5UmhQcaf3UXNNLHtJ",
  "key16": "2cJEsQ24HpZ9EP5hjZ61uqnsjtUcVsdrPJ6MwCbjmpzktbegvavaS49oDMhsKsWWMK37sAz8MK45FftoTYzkyFqH",
  "key17": "5Pg7rZb2nzoTHSGWUxzaXbpbNi9A4DjtgLiKhTN4Fwn3KECMRwAMyw1pthBJ4qonnByx81YSy9MTJQ25DVdtzBqc",
  "key18": "2pDuHYsWwmcYUZFr2xXyepMCiFqBnPRQ9mm9pzu9ngKjj37H5vZEyG36rD53L9z7ivp76NG5fFWdwHqGHVTeF3bT",
  "key19": "4RQVJC9dhngRd1YEKbritWwEcm1WYPhQ2a8ChhwXj7H25r6fU7S8Ku7JMCGxjTX2nnXdbh433rCVXDgY3NdusH5J",
  "key20": "38z8LqJVnatsUjUwRnPsBc4JugwVwG87DS3G6JtN2aaw8BmBW5aSiQWKTueQjA6tCfdTyhoDPThsB1J8T4UYy5yV",
  "key21": "59pEiYtYnoYumYxqnq5PNNzJzkbW4EmzyxCWb2uJZhJKDgLQpSJES1sx91CyhPHJyZbPYH27VRoa82k26B1NwtXD",
  "key22": "B7VHL7HiVXp8punESQUeZphxCkAnWC6xqHWh9w3qVRxdN44HYMB3Jr3cxz8jfVmVtQ3KYJQ8cDYe1Qvcc1nf3u7",
  "key23": "4Kwpz7HYGxgCt3hC6WzBcFEV6HJDK7LxBZND9FYFawFqha1vDhVyiAkTGQtddPtTAP3btz1nEDy9yvQTDxQWo7F2",
  "key24": "3cqJQuDHeFvpcvrtmYgNHbfd5bnXJKpbUTujqd9YDsFrZVAPZFSXKE3nVSQUcvvohpq7AFrBSS4JEdr3m39qaNQL",
  "key25": "23LqKGob5s6sm1U4ojMjXB39ntHdfE3GfT7rQqg8iWys24D7odnBuP8gsuib2SMEV3tnkuSov1QM8yz6zYsai9h8",
  "key26": "5fFWrvL13HYtPHqcLCDA26hfShvaE8Ja3eeiUKxB5mZc1NTxbeAD86w6ezJvZ7WCiXigWh1gsUu9SZ55caw3qJQD",
  "key27": "xfsLAii5SL8QiYrokx3TKs6HAscJMw6XZgkT5FJrKGjREMGZrp2cV7qTKkDTxsPW1ZQeLjpDSVyPLxMwfRH1T8d",
  "key28": "2ynhz57mLdTVLENxmhq3jN6Xkp7ua3jvCZYjhCoeEh8HiAYKQjzKq3t72coNuThTV2WcWxLU1hexUYHXATyjoq19"
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
