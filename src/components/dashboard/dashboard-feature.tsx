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
    "2vB6Ln7hrtVDENbwYG5QkiStBejB1iAMYyaJjtbt7wLBMyKuBG8FQWwsa66qWRmC8GQ1wZheLBVxxVUyiCrWUTXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvPrM54AAuX2H2gz927pksSReSSvFPGDvCqktWg7zGJtFt8nqMDP66UPnRTzN1yDV6NWxHDjNW6U5fm8oCQuqWF",
  "key1": "65PRumrTsMzZuX28N5gveq54TSozgHX5GPsSYC8qx6Vg67CfbbXAF5WszdyY2rt4PGnW4fZCJgARxLrAFx1MmkYy",
  "key2": "3TbKBeSN7UtoihVtDf8J8cY2MJ7GzYUjpvBzYGYbRXyrx4ZH5DoPkWgrvd8DH58kqyp8bSXBo1Lr9rQT41rFCeC9",
  "key3": "3sQnmW7P5zumJv81y6F72CgUhgcTEDghdp75GfnhQ3eDBNX6zwN2ehPi675eQj8yW5yxyX3junnUXz9PMZTSWHi1",
  "key4": "4YUFPR4cnxTDj8Bk1cwixSux3xtU3muSzFocDfiy1qBMNu5hwGkfpvzRWV3dqtrdAi1caWdhqBZVAA93UW6Roy1s",
  "key5": "2ChAZypoxXtaHwhQVyc5zn38E7JHLK3mv1hVXN3YyFkZ9CfBqPqP6iu48kb4MM3mj9WpfzA6NrCQ8dW4gNXyq31o",
  "key6": "DshyEM1Gnr63rZpSpZTKKhHumJMPda8BoHcLt9dBZTi4K6fYTFZp4v6Vob7TB35QvPw57sBLZtUmg3Fz5e1wRwm",
  "key7": "3UrCWSXw6GxM9rGJgwc7h88EsEuH4jdUx88GhXHEkwFMCAWpue3m8KKfiJFL77n3N26XPYSN5jKBKKXFRPFPFq5c",
  "key8": "Nu9oh7w8YL46AT43GoKnnnnGUg7LwDA1PEvHLUSbhJ3hxFuUXYvqfaMv1bFhFRZzp4i5CuEdcsYykAJS6FrE3Sx",
  "key9": "5N1W916ixgiAEBuBGDuX7zsCpCFJM6KyYruezo49qkd9rsosVHcAi47KVuYvH95qYMwx4wmo9JCt2t7mH166SLCF",
  "key10": "XYiR865GozBFs2JpUDdaKem8dNPPm4GmEj9yzqDQbWmKbKVBXTMgRRtdDD359MDy52tQjiN1Bu4veJ7L4rSUaTq",
  "key11": "2TwLwxEvGNhEzFkyio2a4kun7icoPNs1sgxConVBbDaFcS5NxdAyxy5JU3bsgomo9A4XKzn3sAg5sD7SDQUDPzdL",
  "key12": "41zp6FsjcoZapMH6UrYLdrUqd9DMi8uPtkUZRu2Voowjd3sBbUmnP1Skqm87hPPgNVeZrWHQarthCb6CKcmYEWKh",
  "key13": "uAYkivkecvtxDvGvBf75w6pBPYtSh5ztAE6Tp728ZTB5sRMn22jdfLmPXhT5xM1aJhQo1H2MaD8BEb19hxnDN9R",
  "key14": "5eRvVSQVLksp6pmAWNTkHtE11V2PiiV6V47Qb1JwsqX3ukEvKCmgCHdpzn1Xn6NfyJE6e6RyXvwwDvj3kiWX9eQG",
  "key15": "4HYrgFVwusNf4Jnm1vqrHcgQufYmF9siSnqQKstpfwt4x1zT2YFV2gACfaKHVvX1BHP4qR81HpnTYQiDMzwnjKGM",
  "key16": "37aXStKJpkALhkBShRCU8ZBUK27wh5XUfHQX8fs5nUV5ZrMHmtWnA8nvYYnWkteQsCoAjy3ithrNZcNoD1SGMbYw",
  "key17": "2GALmLMk2BTyHotdujDyTmuEJ3eoq9HPLCHhuKTTBwHxpyBkDk68VSNmqNCnptKLrRDk6QhDfUYep1Cd99DyfZa1",
  "key18": "RFaEcWfKrSEG5e2TGRYKe7QuXBqbSGK9Ciq9hzXzKo3BD1cBJxsC1DobtLR7bxn95vzjfUNZHgzi2K6SxYCsyEj",
  "key19": "2R8rYQS2tV26NxSNQQdSzBXRXUUVHbyimiyTZ83y6YAj7oevB7wQfv8izwnUNadmFXXWR69gZ8JmFKP7rd7TRgoq",
  "key20": "2jzG7GU9fd4Ymsy1gx7rc1hqzQu7L8i9thtor4Rq54rjzibJxHYHTXyL9FpimzrSSS9PkbWSJ5KLuqRzZX7WSLPk",
  "key21": "35ScCwce9f4Gn3bh1EqGoyKfHdMZVRroLdnu8xQBPb8sa9GszhpmjoFnBLF3zjYC9PVnLbxf25WotdjkHMayUA9X",
  "key22": "317pUcoRYhX6rfa4cc5NJcNqHynX9WLtcCM8YJJFGtsrXYuF6UcoRuBULFxZ8KsxQX4wejByt1nGHPekj21GzyZL",
  "key23": "27K5urdN4GdZ8r4PipGm4bmjhsNSZi7WdVdXaNMk5JJWftMnT1TbDV7fvx918fPXTs9jefr4gwuVTdgbbMsQqTuE",
  "key24": "5D42Rhfcp8aNEK5WcyQt6XB1GXc5cvMjjR5TeaUytoM4UNnfRJAnx6uhR4sucQXz3Lt1VzeGQyj7AHFXcvpMoSDq",
  "key25": "5VcH9zpDqTYEzzbLWnb4qdki3qdrRvoLmGMXETKk4tP8GTKxigHHpt31cyzU4f7wjp4B7CqtQBfrgriCKbWv1dks",
  "key26": "4bEqjk2mQrpSuUnPKSRnvtJPUXT9WGWmTW4NkoR2Fm1JrSY4QydBwDpnmB79H1VHS9iEUPoNLx3yj6CyNGkwhFU2",
  "key27": "2xCBo2hWWc9VAksqrnJKdcZASyrwaR6xwhuEBXCgqzwNxh9ggGLohjJXoe1KeLWhw1466f2TbV4Q4wPucwoJUbu1",
  "key28": "5hz6diNuncLSZdGAGSsk1pXUKdZZQikLLFbTynJjmcpo6spGknhbyHDh4Gunadjgj9s7kUXNfYF7k6FLfaLzALUv",
  "key29": "2wcFzQtnnLwCtu1heUqUR4Uh56fTkZ1vvCwyDYqfCHGAAefKgHhBWBoQUJs82HuCBDGfDckNGvvWKXUEbeWpSfZe",
  "key30": "5ZhPq9zK29wpUpWEF9C5hnqsU7d4kE3MZ87mtus7WehQAQbEyumcsbu4d7zs91aoB5UWrhWJz7FeUF1SViyXuMuE",
  "key31": "49UKoMSPDneGcJ6eJ2LA3i9F3nf5JQTUXe65jRtrnU1qsgZdUdQn7VAotXapF3x3vQ6t44pUhBd9PyyiYJ3b9Ft6",
  "key32": "w7XajTfQoFxXbASV79yU9D6Ts1quxhcAWk3tbN7DE2t9Eywhxe8P5Y8qtWDsQSTFP9UoXJnsowW3zCgjn1fTXKe",
  "key33": "3ULDKMYNrvDNsFE9GmcJAFJrKj4r1UrKLpwwZHbykwzxY3ChkVBvfoHbtEFtDiMqcDZSvGXzzJDfcRY4unxcqwG",
  "key34": "2baKxuMoGwtcE5n1yyAvJpqvzSK9iPuP5LSg4qKQwQP3Aq15JFMbAdXcASSySiV7d13AGMP25jsCAfw5dmvtyg3w",
  "key35": "33ZvUupwbgjajygMxPF8JPAU6m3hpoMPRomfP8FZqQnyoGr5DEnFUASdzdHEx6PFXiZV7UAQjcfQPt3WxUm1gDa1",
  "key36": "3zS5ieHhR69cZV6fADwS8mNFjtUk1LS4K8twPfG1kRjrdr8cnufJCA3B8nfMVc1FDhruaU61NGRPokXML2beNHgN",
  "key37": "2kRGG97ASqdySokQ15y38f7ud8nKMnZ1S4TQUphVQs4JsanquHH8noBiBchZHkxWFAmyfFqxKCyeXRuSGjhx9art"
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
