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
    "554jmcvnWPSzMmUB2RFwJAKahc2kWh5cz4DgWRVaLdWXnGHn6QJAfESQEXJsXwcuZ7YTtWAjAhnVTXUuPoPk6x6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5ohskQuo7PGHT7rinzWxs3vNgVanQCELXN4vkLEeJe6hW9heo2EMnAsmwuB3omsiMrtz6hKcXmP1awVHwAqgUt",
  "key1": "5HfSdARiXyj3cN2yVfN8J5rAt2uP2cMotNfmLFsY6cT9MeB9TUbnpbPRQ4cQL4jtAnqpYCTFuPz3wsMhx5nMrvS9",
  "key2": "5y9PEHVUb83DN5To3GgVNDHaQefzubKhbRtGRSwuagqBmj419qvwMD7QzffLHCXyzSKgeep37SrR1mEk3hJDaSbT",
  "key3": "DXEaMemn71SsntuG56FeHDLRgU9iy8M9awUfAmRjA9rS8MJwdrcX9GjBpska1zzpHTTrowsg9q2b8cgqViH8yh8",
  "key4": "39M7Cr7oY1757TNrse3Jy7CFaVFJEjeZ2EemmsyaXnEtxd6qHGPP6WYfpPN6t12RPRtwLCX1k8TmQ6vXd9yyFKxY",
  "key5": "3YpFcQViqSGrQ6onAgYX93HpX8YfUAtoSu15YLX7C1Aju1ng8BH6C6KnvQLxw3Ve4xKQGNH9CgFGQerprvGYxF8n",
  "key6": "61ggLHxhPa5Kd8NFNiYqZsZCn1W5pSimiwJym2Umjfjp2QVNona4Uga3LFsMkjVf5RAQerrXC3yFNQkYGeFpnL28",
  "key7": "4q4rY2B6arXQuBBD6fWW1FCwAd5C8MbPY5sMZ1z5ERqJs6s1kGTu9q6ifgMnM9a9Xi3c4pw2t3RJhwtx4xSzQ2yE",
  "key8": "281VoR71aPXT487M6UuG53QgAfhcNeJhta74opmWo9uiB7GDcjgy1aX6np2c52RGaG9e866djFw1r1kH78tvbnwK",
  "key9": "9CBEUcVvwYskBQmhJUufL8RD4WHnRsJxsVTznuvvVkYG3N5pvrHPRTX1M2MbvgHKmGVv5dbYGeuFiEiBaKhEwiS",
  "key10": "3Tcpytueuudy6Dv6WCtNhZNUJ3AUcrdHixkSsj7DEA5USTT692czWutD5o5EsWA8LzxBKNTHwY1buSrZ52n5nQFc",
  "key11": "4qoEgARPiaX7YSSHKseJN93Cc3Jb2mqsTQSFvoJ2fFVe8zjxA6UUCeYwMHKGiCUy5Mg8bczPZ3hJcgszkH7TNGFq",
  "key12": "3M5RXZ1a6xZN9UPWTYmEVcJ8oJyi2fzVvBbHeGa3b9ffisvfdwAfaA6tkpJbuA71pr1rqs2jDZf9L5BTfJFz4quf",
  "key13": "RXoQv6YZtkFQzEjgwhEdp7icHRBNTL5dCvRhiQHHm4w97YkYXPE5uN5mxD2BRU9rLTG3qga5qFw4F2bBEQqjHzj",
  "key14": "2X2nednV4cGw83XnnafVv6kQoP2PDxhhjSwNWCFFogdHdj2s8bvfcdjoJnDiaxrDruGzMyRqCFgjoQYzb4nj51e2",
  "key15": "3PTKdkow3J8jaotELjXQoyMkn7Vmfnyqcd6grWQprApiJukQ13K37eM1SkTYPFAwjttURXr685XfCKcEFB5CqJa",
  "key16": "MhU4kQXDNkRfwiimc97NPHaFuvXrJS2CVcC7EXapRRoUC4byA4wciYqdTic2VS4ZV2vc55LhiRch54gcpRuPRfq",
  "key17": "3LN5ymYgvnWyxyLwBS6SpLQ4h76vwMFmjX4FesPEYvHahzN9MjFz1jrThmYfSJXZ3CJWRqCd3v14UEAXvB24Z4Ly",
  "key18": "AKDZzA3d4MtQutaU42wkmprsxzNkwm6kPuGEAN6n7Z3s2bMquHuHBCg2DNv1JRbAzKwpNrrUKDKmVbMK3qv7v2b",
  "key19": "2tRDzGm4ebSK2GewYSLBP5348GNc4sr936bSgoaRxKk927TM79LnJyMEPUZH2qDJhv8vbi8o8Ef8eMmAZQFmhJtf",
  "key20": "3PSiR6RsnF5zzb6SYvW4QvQCNPxbk1hSzCNs4zDvgBhZK68DL3Xko157SaSpWCLaTgtaVfMdQMpxGNXJfLWFjukR",
  "key21": "2GFDzASkoapahcc9zUACvXaxsgk2LvbnJX5eq7Ttq2P2rG2vbYqdHqb34h5FVpLQtYSQ8JMZL56gZHhDqYZfsY6G",
  "key22": "5DqTDDFLZz7Qh6wiKUPYV3baz5fGosBmFpPNtGuxiaVLs9jg5arFwAdSfdiJVyE2bLBetCNVcakHH81wVTiBhQnn",
  "key23": "2hpPHLN9WTF7b91Jo13WJgWLxc8a8gwPk6DDhM1wqce4x6fxbfSmtuQxQ6R23w3vjZmNL92ACZ8NNLt6hwgDgMQG",
  "key24": "aein5BD8fzMNA34AndV81TFfCpZYamwbSbcWtK8hHangAHQpCSXfnTBsgYTCP4t4sDQqVCaU5r6myxHNADV21Ur",
  "key25": "3XZ5xw3Q89kQkKyhsfodn265dbfuA5CdUYqCQwCKQT1jNwrxVLTHJbwTwAwPUC5UhmAxX7FPAbZty2VAvMSdXyh",
  "key26": "4mo1BZhmnUV7yU6VQ8DPvSwYgueVQwivnZoqg2yJc3GgVxDThyrfv3uHCNPeHxpvSpo67jJJPXePzV4C9NtJZode",
  "key27": "W9bRcLu65CyjWnBMTxvcvg56B5XJBdD375kx7a1K7YKc9GwSmacZdPc3wc9h5XFwfgB61tkjjU34edXqgBv3xUi",
  "key28": "2HmSHqeMJ39gHeoFuNLHM4M7RUWyzMZ9iRHaLmk6vGtEVrvQ5e6XH6ouwnLaXjbo71cv84Ch5p3VbzEQjT1kV8ga",
  "key29": "25n3M8AxM73zvXFavgDHtgK39zqdYEtTViuS62J5qmkSUkN961exzbshYPtjxcdfr8DBMw1ixLLApNXgF3GzdfA2",
  "key30": "19AdpAVnLgbBRbrLLtz5N1bLxMjfCkms2RugcQG4zj5s6akmPSUm7NsMt7UtiTie9wWPYW894J3uHnwaMDzDtpi",
  "key31": "REpNyAcYYGEXp92dyc3tEVtJroWpjZ7n26tmCR5rTqJoKBwMcbAHwme3J336KPb53FXUgDdJFgiGcXuoedNNMhG",
  "key32": "5adR4jaRCyT2gokREKykkZKXE7isyQBDWj2hPhSbUBgBMFEAikvUo4Zt8UpPQwgdxiWYo9XtsEgoyeSETncN1aZj",
  "key33": "WtLuicV7KnndAnb5uBUzMEz1q8ca8HJTajJCRUkaJK7BRja6XpgQ1iBiRNqFL3FWfdn1FxkELWduJGwGB1EkxJZ",
  "key34": "mx3WEc4bq1ihTu7PAxBmynknN7sBv2UhnszKiyaHi3UpSLKMLiSRHzSAs5MG8WCssFt4QXqfGGVtmkprMNfnmP5"
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
