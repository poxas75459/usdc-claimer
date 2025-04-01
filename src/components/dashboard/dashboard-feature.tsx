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
    "4sZuhkYhpmEj3msvjkk9HECD8e6f6ctDrrpB6nz6g8CbWsLgkBEh4AG6syvnGzr5uSEW7vy23mdubXV9VTEemqd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uF2PV4xhUGaTtkXvcbDAn4RsubdiBkrx3mhXzKqNiRfz4srRDWz2oQoBZJs16Qpn7g7N7mGxKk3C8y93Due1YfJ",
  "key1": "274bFjNz1WFrjknbzvC72nP5iKt8xQKpFm2GiWrFMGTMVA6TxkXTJtJ3ob4TWBRmiKCHbaXagbjNgJz4u2yfL3eq",
  "key2": "5Bff1TUfQWpW4rkvzZnn8p5M45adt2EhwaALbN4M3nvkEWvCrkiKe1622DwKtfR9Qt6vUMrKAX8wdDr2xYyHmKNA",
  "key3": "5Zyr2BTja2Sc9BZ7jcgKiR4RdZuGo74WAgiBSxjhT5MiQyPLWBYUxrtVxS8EJFyd22vq42tPRDB2tCw6szzPFo3g",
  "key4": "5dy9PWoGiJgMaKsZkGns6sAQiNK7KGLsQnT1BNSXCdzVm1nhsEvwXdzzGPEdNioEKXXnkhJxHZoitTa5amtwemgV",
  "key5": "2QUG73YSRoXkrqP9BcDqbSYX97VGyJT75cyPYuojRjUCa4v79Y97U2LDWhb8WR1Aeq6SsRBFWxh2euSAHsHeFtCW",
  "key6": "4oUUzdht4Xp5f9f5vsWqzwwGBitDPRRPtFNK6WzzkRK3xhbXAPQ946EtGzDUoN97GQyfQxLNoZqaXnYdijWDbFz1",
  "key7": "3y7JUHMrDK6EUMvBNYFGKpda3MFJSpDE6nGBg83keuj59R5MkLF6SPrCyEfp7BCnrcFDbNPphYKfovkmWEMNbz45",
  "key8": "4xgu1h6qfiAU5jCJbUrvQZp7tMH2dybEt5LY3prtW9836GMuZN8dsz9phfj2JNPhD1y2ETEmrfrwKbapfsjyAYMz",
  "key9": "3m81vBjjmNtAAiyRcMDBPBuGuEhL6CLJK5i9N5TpxNdMJdRW82Za4RLk8chctMCrc83ktgtesSPFgY2BcXneMWqH",
  "key10": "21EA4ajD79HU2gk5Zo3fJckX5LkZqMfgbYbLAinV3fnDE6p8MSZAtta3dBqsRCUaH67bnkUfKTtyHcFf4vgM89LX",
  "key11": "3EB4FkvpQQyNAPEcNfEt5szHgRsRBDmEQHjT5kPipS3if8vPaPX5eyz6kNrk65fmUAdCE3x9ffHt9LiST1envroH",
  "key12": "iuGb7vqXXEdWGyhRzegCPRSQeec637dZa3Kjd8XpoidrTchd5xxNhMY5Lnsg17yyMH7b7kSYxPK9858h8TrgMiW",
  "key13": "3YJByWLV4LzaUrMam54AKT7hjghBhj9XWRpSCmzNBTC3NrafEb9ZXCcxavj6ifLQNVHavY6BttDvRXPLEAyKzsMc",
  "key14": "3RpHHEgv4QK5CdXyxyD8TDfA1NsiRS6ouPZMQjGFP9wFomN2k1eRWPKxNZAognhKPnKnaAHsxEkyVpFiahrMbCPU",
  "key15": "o6F6nXEm5xYF6KpPY5tfCBr2X5wzHzQf5RgEPGFwy45ds9R4ZvsPkGcZ1RDvkJQwupuBiWcNpo52VonBydnDcZX",
  "key16": "2pJsaAaqYGZuNwrbaybbS3oQYqSvjaU9S6zVE4mqTPk7c8ZNvtGQmHP6FmEyhm9GXn1bszurdFtXvZYD3WAQ9uMD",
  "key17": "63SBjFhoNcg8xxEKNxF456FKw7GNUAmjbBqHp5PUSQZDRRa2oDoGQ7njUcLgVKoVhT4FKpSiqhJFzGq1VgaRdxyM",
  "key18": "4jpmHau6bd17XA8SsVvxPTdGuFUbYegeDMfhg51UbrCDZ6HoDBWAUp7JJeWeJVvVqVuvNj2QdvJR4a1Puk6FRV8J",
  "key19": "2HmGdrmBz5KDBaUaxExZzmTw52fXqsHkjZKfs64LiFDnkiZMajeWDfp3WDrFCQRqnrC2p85vdc4K1h3EojF1cqEx",
  "key20": "pGjbnPcs5BuJj9uTcSvJZwoWtrDJqut8GV8AERpjdmg7PWtyVGF6Ao7GtY29bfyeKYekC5dgQTXjU3zg64Dc5s1",
  "key21": "5QwPHmuvR7mgEoxySjPn1q9AmvtM8W81GUvYofmszmPQNxL9fq7zcbewcRfcp3HKw3e2ksW64tfjLFtA7zJNL68e",
  "key22": "3AU4kheSihBP1ARgx2eEFWCuZ39VkXzdCV5h8Q2YvJ7NGtwc1ymuuhVmUEqjBMu8PDzgRfVjQGbTHymcAWuXzzNG",
  "key23": "1znKzqysmRqen7eJaVPmDigS7sxPHPRooVJSAqY5AE1hadG6Bqcp7rknCn6bVzZw7piowpSUo1E9tYUyb65e8DN",
  "key24": "2txBJaopsbmRHuE8qB9ikmaQTG6c8SAnHUPqyJfv5pCtbPRNnJxnca6bfFYfwrvgMX2KRpVrUUNb7FssoRkoGXQo",
  "key25": "osxbvkUwzr5HxQoXvutdDDd35dAYNbe9tWUK8baL3rc2RTc1xWdJiBVu21BJdsrUbrBGqbsCicv175uNvHyfZwA",
  "key26": "7Kbdez2gVHHsTyii3efGq3MS8gBApKKADkjnqiwLyGpj6zi2r9hHnnH3TXR3HsBvCWY8CeTjHkfEz6qex2AQZce",
  "key27": "4U71anMLjDbkGGw1MkpLpHEBMyt7mN97QMDGtmXrx26r9LsBReemmGZ9GyWAv4CKDqrNdwvudYBcrpFvMFSxVNgA",
  "key28": "2VnCmaRctJY3TivYAKGpG7rxyJXsmzqWwPfu2pkfVugPPFAA36YmHvRLAQudsAmdsP4MctP6SM5NAFhwKFK3JrK3",
  "key29": "3zYbjHByJd3PD3Qi372qMwGfvCMvEYLgFHzVUjDAhdttDbK8NZCbe84xWWeDhr83CaxHE6xhgHJbYnkNRkM4R9yL",
  "key30": "62n24Gf13qcHdFUCn1kz4LkfA4H8jKGxq8M4JdiFJpT9xxANj5uM9iCK7jz1EQG8ZnDNeK8NY35yeFDitugHrF5b",
  "key31": "HcrT6cdMZKp6sXhrWKGVzoCMkwzRakxdiFhR4bw17nkNk1vNuWC6qKGdQHuZqSzE7yLufHxGSWPikhsQgDc91wh",
  "key32": "2ZSvcN6sqboGrpKmMM94VaEKiezRpfYM7Cz5ehtCADak7FHEtYWZVzqCkPrM4xSBw61itFuoon6YvkMhim6kSV7G",
  "key33": "54xswcRZu4ddGtb8FTctCPuYmnpphMh3ykoDHYXGJfKq77eycAYx9HFgF59r5HVZpbtkXbom6GJZvQUnHXnJ1uFT",
  "key34": "xhg1S2WojKaNVuEHre4kAPRQgyjLSPbrKHSL6MARTGnQxHqP4sT7QYDmbm6KnXHkkYzPSN5KTVxR8LFTG3UxNvM",
  "key35": "5jDLmsuBJkPJ1oLPbJNKhC9ytPgwWiPwXUJe2VXyUjBbsCbYKQKYhNnRL7o7FCCqn17hj7d5R71U2TvduSA8Kc8E",
  "key36": "5rF5yGju9FtsjvZeFNe44Az7aRNTKiLi2MtwLkpAijN4zMMrKJ7zbempowmVmRgMenZFFdhxhBzbfLpvhgDozvit",
  "key37": "WSoUXR6vP4jzSDRJN7q1JTMTmT7utgXsKEeNxzqHAiCQegkhoquWXVZNxcrGKCLiAwDjN4UVACWdDmoP63niEGK",
  "key38": "5P9hSAGQXEARgQ4XNZnKBMNUyvZJkeFJxwQkEtQ3C1mDcccWZrMgjpAUSUvxXKsLmgN8H1SY5RPbQSXN8MgiZuuH",
  "key39": "2s3DtMChKGtLNyHhbftvaYCYEVgcKFSPL3XpuQCvnBrjhSQrv56cUSUdPxN6PSmsJEvpqdmUrWfzwGfj4d4Jzfch",
  "key40": "4DHc919CpdQbN1aJtK2PCy5qqsBVSuC7qEqXc4ogQZdvuEoEW4WyaagWKccjpWjhk9QAr8xPsZbL8jS6cj6VG7zh",
  "key41": "4BDHZKX8kMDvFanKsbyrNk23JVh7s5RwHY2CRt64gxf6SkPG4six5Qxvj4f11VxeMsjRaS7Ebx7zmmkESJMSCyWC",
  "key42": "3JDf5t1Rvy6GZhC45RS1R9dUF5pLyV5tkA3N93nmjPf62UdKhxWHk3ypVLfSS68G2yPSfEU6a4mriDeaDpXLTCR3",
  "key43": "2ZgCNoTbiNEydmvGdYH5TSMsHd4BynmCgG8JA91C3VtMLHtDkKPYxgJdtfnt2SkxkmNbfLw1cFiFsRd33kEsoz7U",
  "key44": "2mWv9LSWTEnjwxD45xq5X38TMTqbf5w1LcE1oQAAKRnjnVeu85TrfvetWTjiMKqaa1tYpGEfYDWib5f1HP2mPsAZ",
  "key45": "bpxD4y1nwYty2GqKHqxSv4J6bDv6wSzACy55nUmKauT2F2n92wRTtq8eM4qmh6vXrVARLrARmBnM2xAUiqMsnha",
  "key46": "4sRgoBdSwrwETRmnf95cnoVuEknmaqqdCePmiQmLAC9bUWMHWydgWgjUqrWipWr34LNTbA4vtr2WtZxzJiXd9zj",
  "key47": "ZrkHQKZSC4rixqTvVpKBVPG7nnqxJbYLiww8SKnEPP7cr6nNVoDrTq46CmMtCuW4b44dSmGXX4MYwFWaUGWiSbm",
  "key48": "2jonHWqtsQJi7o3yDd2F9TQVZt7sceRTGLJurWx3oVA9Yi8Lr14r1552YHkhacpW9FHgD6GRANcjghuuaftZVVVD"
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
