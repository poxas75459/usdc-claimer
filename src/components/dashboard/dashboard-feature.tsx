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
    "2qwPfCmc5FcE9N7m6F6AU89q5LZXwZFLyiv7w1Ey5PG2jeociBHQ7VQNYqMqCdCiUr2hPtkFbFLYjmUEto8B5kFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fa3MmogeieGicdA2ovLw6n9c835crPw3BfBuDjat4jzAE7hY2bNmRBq2cDRSUf1Wb3R7Y8ofBVCPCmoJjt1bBNf",
  "key1": "2eR7MPatXoN9mz9XsncDYH6nqHvLtAGveV6WKpkigRKBMzGpWkrcYPnKTtiR9FPaWqoFhAD4KqPJcknpEE5dGTw8",
  "key2": "439EHDXHH1zf9u85oU5kco7WzXAxPxoyRt7eKv6JjjW3EHoPR86HkMZ4EMwzGaQMsFXgRFBvt3jzWnaMv1jemYms",
  "key3": "3tGUHKG5PTaE1atbQfgYAgzVjQKt22GZUz33nLyfdkzRZhJquyU2F85BVG4RKQn5gFHijrSmth6tGpoHQdAA8uE7",
  "key4": "67DhWEUXx69994qRPpXhQLuc8P94UjN2ZqkCfCNfDPJWCRwhMDFCVWEnVNWx2QEyQnJpmkDdgRU9bfapAoRd2upn",
  "key5": "5Q4newS3qDcsDPXS2QEttWenyWYm5GLqiy6ynRypcD91vzjK2LTvFqp4YamhDeRPbwY24mN7NADn3MfjLYLMmFDT",
  "key6": "wtCf9Y5RFim1DRVEpbqiTzz62ivfKiet3RTocHW2qiJQbz5zVGT33e2gGC1eSJE3bfdBjdYRf3eKx8aqbCMVmqj",
  "key7": "5h5P5uEePEqzYfao7d3TXVTkZu1r6DTtdM2LGfSZrDfnUQixeWmKh3DMhjrFYNvZ4yuKwTgFgMvMySknK746LBB8",
  "key8": "23yrEjPaJ4nKpiA3awbAA8V4qYGimE37pgxknMP3Wax8duhr73cF4dS4ti6wvANe8QShv3ZwMptHtsakCJ4xfXHW",
  "key9": "58xuazZmyJPEJ71pWASjykk3KShF8tEhxstofRvM3YGwxrGEo22sDV8XTGXRAtmPpHJ5Qo8bjwfEfEqaiLiTaVpP",
  "key10": "3nLxKdHeECyR2iqLMbo38mTFpngRbbNBPrHhV9K7r27H8kb4pVHASndCuwEidCrhBNZStTt8wU6QNdZ8vsZGNkpL",
  "key11": "3iDmuuqEqBJHSN91YMcY3kbo2AsZPnxfVX29Ew9r6eVp3rFzcprYPTyQcPrpRFhvBZ8TP4t2snvskKnJo7xmSwHv",
  "key12": "2w8aNp354YeqztVsvDF6VLjJWTYuegFfuXw6LZUNwpvdpcQ8pavm7BGtpu2vjH98urxJDAbw4LK2TR4FCAHHmjqq",
  "key13": "2ZC2gQdhRd8w5ZwpzGxhfiouwqzrBP1pa8Zr2qXNBoy7Y7GmifMenuaQhKLNz5PkjM6iqJnXz7pJ7bT73LA2bHWX",
  "key14": "3EmwtBqWmBSAA6yHQxrf6EMofzA4d6SjRgP5da8aR97rgb646sgBafM1LK1byxVfxjreXP9aoRMjBms5yycqHzNQ",
  "key15": "55Neg8odg5VvRvTYXAsnaPZ3WsbotxSnoKCJq6wDuLbfACt3jrbr8kQpvebivc1VUJRNUbCgfB8xJUSYJSdJkYUc",
  "key16": "4FSfyFUrVPwfoXdNr3hPh8qKgUowpvj4kMWgTfLxpp9YVuFdHLoiTxcXMXpCtMiwo6mC2N3ECaAofcogL8rUF2GN",
  "key17": "3qPZyDnbrUBdWm4RALRUepBut6Ak54CE6daRmwcdGtH3A7YZK4S9KXnbf2QKNasL6pBaG7X9R9oys2nuQdJ8uNFT",
  "key18": "kBUiuypTNqFfR6pjB1uGuFFJVhDxni5uJwdFexkmXmqHDqCMQkrKtm3KEL41pkZbE513cB317Ga7azf856E8kXo",
  "key19": "2dfyad6WMJYMmVz5dPUuceyn2LKSdGzJkpDy7A1foSfAPYdWNtpo8vwaHz2QSKHzLbLgpjbJGqMxLX6hsJNuTGf6",
  "key20": "2SYjQx24QsadUwpx5Kcbn3j3RkXQN9A4yc1CJ381uDE3HSvQgTx9uzvA9zZHxgqdPH2B6BHnyxt8F7FtF23mfVae",
  "key21": "H8Gvnm27xvqg9iXVSRiVuV1kUQAPFqKJ5TZqCnv9hzeu7ParwhSd2HVSqpGDw2rTqti9yex9QExTGZpzs7rsPhu",
  "key22": "2g5uoYSRScEYSjL3qdb7GkF79UsD33H4Yy5AoZz3jGf96rvppsmFqhDFrDzdAkeTWfvzoMgyE8wh5bMjyeHjkuMF",
  "key23": "65qdwkRKqBU21tANCXYG6pfAzEBLg6YiPuigNZV3dPGFeN7jWNckKAWWaCRUVgkiNbJXLinGjPpCxkgvH7EJiCFH",
  "key24": "4apu5XRCtivdiVszMBQp83fLC5LWn5yQCaTsDPEHpWrH3xVFC3WjnyTV3aUn6CoEkF7xgZqKMU9N52JWUuASdS3B",
  "key25": "vtxJpKwJ1ywdShLNZe3TPVBxeUdPhKH6FmPq8g5CjKEiKW2sLJWrvZemjWhzy68EjXhW7M6oEVFFtE3vL5Vepkc",
  "key26": "2Qtuz72XvweWRGiAXgCtb3BPXMxAB4tAUnNGEL2FbCdiF6mEq694tzxVY7tZJQCnnfafAMRXjHcQRiHjMkmgrQ4N",
  "key27": "f71ewuavv6VeXKRi3tXoJCim3pYEiZBH2rGapDR5jUByi8ECY33Fwi925vvNPezJeLHPBKxtnoe2dcTfdnPa5qc",
  "key28": "2b9kbdopK1fwDVBuY3x2bKF6jg7JMz7B9FrKckUHfeWLw5nKXxdkekU9543QRG5FGwgFCnVSqDtVgbs2GB6J7Qkc",
  "key29": "3MEef4q5Usfij997o1LH6oTxmpYcF66zsCCjACHGh3BSKseQKzfdoAE6zKkCEA6SVk6SwVBYNucns8Ku9HSaEXpR",
  "key30": "22xSBF2yZkHe5Mvc1bK6EoFoCxEx7hcMWWHbJ1nnnT21dn5cPbpGsaKkYnUVLT1HHC2z6yUzN7wNvoopG9jZNEWy",
  "key31": "4J9nbHHqEkj34QnNYSFJV34eJT8WV1NP1g13MMtkpLASBcJusV5dUe9JBxDYQesqHqyMETZseb3apoj4VYE8ZJw6",
  "key32": "A81HcteRQV4v6TU7smRE9GMDZfzQ76jfauPak8KNgPGBzagmfHxNGfxqZ3AVhEpL3e7nmgruYqJeMXgFpoEjRt3",
  "key33": "xiZ1QyeqTHefgpXQw81WLqpxG8w1HJ44c48AWY7FdQUMbHradGcmA3SqUGwSFja4yUASAKLeB5MnRysSEJEvGJa",
  "key34": "2EREtjXsD4dufh2weFzM1tqBB5cwckjuSACJ7MEVqYJs9hoc4FV9XCoxnT5vpPacpBnRn1g321VKsLhLe2kUqUwq",
  "key35": "58oc4M3UqFhDdYm9qN8Jx9wzAxb92gnEJxjpJmqQsLtfEw5LA8HphzU4CqjZ8ksgEvqRN8sA4NgfSRoe97vjexvu",
  "key36": "5tFWDJMsSHMGU8YkhBsDTrwvUDhEwrzLx6VZpvZsABhFsmw4SH3r7Fd5TEcYMz9jSMWGYzSjUfDMJPq9bMQEs6nx",
  "key37": "36MFGCKXX9MJY8qZAqEEwtqru21f5sSPjsupzoCh9J639VB9vV7Uo2MQLUKiWdSUZy3PtGgsMh4YAd8wiwbXoShY"
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
