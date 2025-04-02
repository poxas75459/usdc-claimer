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
    "wH5nRwBtq17bp6898n7RZx1y3kSbKnBH1FDj5RuMsS8qoVY8a4h1Bg6xkigt1QyaV5fbckn8JHRx7BF9TbsL1Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwjYgfj3cTjwVfkWcNUrFdMmuLUM6sh7bpa7qkzSi2HCFc5CX18XGsuGLxDvtP2wrDhY9V3DoTMpYRSCekGfGco",
  "key1": "4mQTEsupjqsTtFxs2y9n7pFehN12r8G4AUzodry2TcDHt7g2mMakTyuvNQkDJGMBbgb6fwAn9MAPi8aoBzCyRzrT",
  "key2": "2mqn7BFBjxbD4UbHZ6fsoGSgQXqkktWYHym3D1neNHgMXNFsv2Fx5kWrNZRCAv3ZnnvKjmmo47vKpSKFejxknzfm",
  "key3": "3dFSfU6zkyf1mJwzDxjDSZ6xwfFsL9hdQs4nHCxeCnA55HKUbeeWb1oEDkuh71hJkjT7e1YZ8eh3MzZ8kQsyuER5",
  "key4": "5ihw8sZKQiBJDxAozohqShRbgNBJ2Tty3rQYBEkkHGhZj7cGAFChsxLBukSkvugZ4rHRmy11nNMbqpFxv5x55Afm",
  "key5": "63YNeE6822zejvVE8WATHThwEMUDUEk19sP2RzgSH9BeRL1sshi5hQ5vUzp61XPMcdMLa97g3DNE4FfMAE5pYUm6",
  "key6": "DkfNre2ooNMAafMJfehDdE4sNS3xz8qagVqbteDtib7YD2AKHdDUsC2npJQhU1jUfdkr54d4rQsZhAtiqjdSba4",
  "key7": "3fXsUuRBuoNgUUfodbsryMdhP8Tz7Q1rCQYZtgKNbzgytAgVr8TcVWcVdiHtFfxid7ZB5oaKMhc3Bvg6s5zDCuB1",
  "key8": "nxTUVZE1Wa6fuCxQBF2PqNSevKKz4dtkkzjFUoe5fgigGXQWMih1DnASDDt578h8mn7JsPViSs1xec1BiKMvU14",
  "key9": "2WSaLKrBTcQkLqCPFoUGeg482CbvjfZgT9ktMb6rbD4116V75Y9xCHnRiajbGC9Kxwq9imor6J7ArcXC4Wvw4Sa5",
  "key10": "3Q2sK7zofsAywi6PW6Kgcm9W71HzxqdpyreMCx1QGYEKo4rz6ztXYRY4Y14XaWsLMYjXXmM3x5WGi3FuZ6zXpnXu",
  "key11": "29fxYFDqeGPi83tB1AzjPj5nXKkdHqaRxyXep6EhubogjZqWshYaRvz7C9yjHMMc7kFqPn58o9hz62mL7GNMPxLr",
  "key12": "p1x6Sa3dTA5jsnm8C1HMx3drPA95x6owzV4o9jynZmk1mFYyBuHahYRcgJuxjVSnpPMZVjojeL4S9dP4r4FdUs6",
  "key13": "ksXcHvmYyV7FySAEjWjP1oyjj1aihwbYuX4T4AexbHQM76NtV24DMQbufEj87PhF6UN6Dv8QhrUrhtBUhJQSLmV",
  "key14": "2V6Togs1cyVCCqZfUTPeKGCq2qY1epoMJcisnYEygzEHvCLXi7cRM19oec2HdkUsT4uBoXBUa3eJxjThqwqFWyEv",
  "key15": "2oLzcJCXHFoQoaRyemSFgoQpFVvvQHrn4Jt3b5MyyLSoAyQbUFNjQZs1ATxbtyViQiHCYMovan8KbUjvQ1LXEx6t",
  "key16": "219Jd9BhWk9XPCQafuHZCmZ79y8LqcTwGSns1cTdftHpr14UYiSvcriFTBoumjVMEGQCyRxoL2QmfJgzFYxX8bjn",
  "key17": "36Di1q3weaPqeqchbiFPQz21N2refH2DJsLkf7KLZcnv4sShjfMSmENqzvnhuw6bkbmcBNkPwL6ZatrpYvbiPA6Z",
  "key18": "4ZJLLxvetYZwPDdmLbY9B7ivdDDxDgEufnpRGH6nZ9ZgR5QT7TLv3VCkk6GMQunaNzfBTP9PkFfhCN1um3BQ2SzZ",
  "key19": "46HECpuDNYq58WDbe7UcLSxBbLhFrkNX7m35h2UvRVMbdvmBDT8hVNJou1SnaUSMbAUK14Mxq2aqRkF7C6vN5r6E",
  "key20": "3f7ezUJfWr7dJcsP9FeLATEU7yuaDKZwiX4UDQCfEvvCpkPh5BTxuZsooyxJLW9AZS6ehySTkxxNGitcGcsaKAT9",
  "key21": "5pBF9QKed1eemseMiKid1kXB2zefF4EjSnWKdVh2ZSVUgvBnhbyUa1wjB7czg5kAeg1CuHh6peDbM1iCT1meJuWS",
  "key22": "stzY6fNvnnmR8JjFizwkpuSgsi7R68XVQZcoK34dk87yMj8ibQN9hjbhw4NaZWirYuQkk6scMSUZapHuWNkHKHr",
  "key23": "4kiUB9ZE8Tya4eD6FZBAzWsV72pL1oHdR3AtDNiAH7XY9FxvzH2STPzGXxgWAQr63654nAv2yZ7tTw78Ck3jkEAc",
  "key24": "4UMnYDGy4zHKZz8Cf2rz7v74hBTdi5SGzm4wUc8Yet6a5gPnCGFZaXLVkL1WDp1kraPMPWJicjrPjwPJRzdPorVR",
  "key25": "2snAAvnLaY8j5imrsPVvifaYBTA5HTKbUvRQPzhKqRC2z1SpKmgxz2aUyQqA5wzsFkCLn7bGZzkSpKwfKzysXbRp",
  "key26": "3KmXLAVSYMFwbnFtGxXL5LWs9VMA4f3aTkSNQdttrweLWcySEr2vehSKQuVQ1pGxAZsJEj3ff9RULJAjkWj66YU5",
  "key27": "34ALqeoocWyLEMBsbw69pwYpvKs6XVACsEGQ8EpnVDVPzFXtGp34G9Jw3QKYAetYK3TtJZEgbUcXejmWaqRR2mZb",
  "key28": "4ttPW9ojb3thMkRHwPD11Wt1YcQKXjGdYaPuQKkhsJuDqP1qrN83KzcvKJYQ455HD61An8f4XRAqGbXkN6UfGSG8",
  "key29": "3HiqXwTxCyHZUeRjaNH4RfbsediBH9R9vRZZGmwcCHjKabYEwMJWsoHa8mBUcpPkwJG4CQ1HUjtduXFCCxrBYBRu",
  "key30": "5CHhFTCZdUZeqQ8nYVrsFWeBBQFZynYPxdwnPgb3USHMe7ttDj4FdkzY9vwaJMB9m3fccgn8GpRzrpiicti2Cjty",
  "key31": "foeA7xkZZXbfrv1ohxYGNYcrTYpKRVw6Pp9VsEt8cBJ9uRKPwgKzHDLkcXE6XnQ7sw6dHR1gu4pnDG2wxUjjqQo"
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
