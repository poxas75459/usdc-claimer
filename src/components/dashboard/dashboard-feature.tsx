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
    "4wAdNXXDuD2tB3h6cZM6TipM1nCH8WQKjkVPBMjTz7ENvHi7rkfwiJmQamSBkZ1QZ14fCC2gp54Rybhvai9oiio8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vs1cDLU9Ky6Z3DUvMjniesrzKsmKvmFXKTJA67aeowA3x4VMQ1s24DyJ6Wfo1ctmVP7dzQJCW92VyWhqf4tKsxk",
  "key1": "5FKtkqkz7tVuBHiYcGgcvwLezjhSzi9hA6hDoWS2u7iBat2HM3YHesXwgGTpUAnSYayg4uvV3pTS9XRX5eXig7Wx",
  "key2": "56jC1hXJvHeNVv45ECvw8w4VzSY3T3cpKrZ2QPMdJeP7soZ5SWc1agb3PnuoVDckbzPrjAhDFbrPkAb6p9LkJV8d",
  "key3": "2xtTnsPSV6JBEsMBVY3MrXqxin7yivLjYCrqMN3hqwwSc71M18jZxtgpv5dy71NdFLbYdcCpQUMdso95zRCmKiwK",
  "key4": "4pxpqDgsPY8PDTvsqD8c27bAfeePhnjcVSUYRupgZkvjBdavj26WhRFiDYkhwxNrSLZu9e4MurH4rWyNFGdNJBTn",
  "key5": "GNq4BTQbR9u4SipBR8ZLQvKgJxzfQKcnaJyjVaazuzYAos1c6tnkKTxG6LWb1nECNd7gd5RnU8TU4kcci6hN44y",
  "key6": "4xXDPJK2qtQZGZiUxMsoE7jRtMkAD9ioETn3df47YHq8B6Df9bWKEsHH5VvJ7gtAf7K4YpWxangKn1KxuHQcBeC6",
  "key7": "449y7KYFhcgJnean3ANap56uMtTu48vXZwo5RrtEBAeHfZKeCnUCjtnYGfL8g2axGssJS6mosa8BRaK9jy7WS2Rz",
  "key8": "2C3XrieSQsNn2U3ca6PHeBtC44XU6SNNdcVdmdqSv7y3HM798BXtNgVWBZqX4ZPQ18RmxoNPuAmZEpU7oNVuiG4o",
  "key9": "rkgq7htCmReESG9oboic8XVgf52vwKx1NKpCWYzMgYjAej9jR6bqT2PmGEjwLhQvfhmq2cGV4a4Nvrqkg8rSNww",
  "key10": "2Kf8Z3qfysJwaXwg52ctK8rvhVfn9PQQNSzWcrrWcVJk5TnX5y58bugf5NvdNaRVq219dP2EwB1bjaAoY7PVy6fv",
  "key11": "5g9hmGWLTC5nsN3u3u5Vi9vyvxYVBFDyN99MU84FXKkNCZfQkwhn3YtLRHP9Anwp3sVq52dgXSFNWeXAcQDH5BN8",
  "key12": "3vZvQwxRa56m7LVYKm5Bxk2yxWFLyuczPeFb1QxQx7R3Ub9Vk9Ke36Gxg6hiUNnxxnCZXWJFhRvWbq1FSdrQ9KgJ",
  "key13": "M36CFPMTN8cWcRVN8QFd7Bnbto5SePBpoRED6M8sdQRCQzAJq3HfU73Z5gXdHSA3eGN3X1cQfjuy9gdb4yTtXmt",
  "key14": "3WtQ2VpW2fNvPA4jQ3srQ6WwPCyTjCfyCL3xEj5wriMPdZ7dTavWdQethqHYpz79m4DgNPDRWUTXhsZET2azDvix",
  "key15": "5ABh2Jvb1ETWN3UiP9QutJe7HN86QtsTRrWunN9u1EppZwBEKwnDjtuvky9zKYk7JLwZxY4YL4Yc8pD4KYbAAFLr",
  "key16": "iic9jAjws6mdkLtJRPQwRQDAYBr9EEDgijWRmCu119oZjjkF8YeQYdwxVhUdaajS6CFUCtLfn2umBP6PejcFBKi",
  "key17": "5S5ts11W7YtFB6UDrMKMRTm743Qk3GjDrMWkVmp7zMffcmWzfzuvdVovgV4M25zBazLAc6nSmH9ZxGVG8Vz92iAF",
  "key18": "4DzXxiX74p145pHZGYoHGPEzPDND2WNpnyX49Dr7BEnHwYujhKYeAL9VcYnQTLMWk22Z8a75JgRDUG6tere425RH",
  "key19": "62jqVYYw5z5AEeKKqdsPJtSSftkFDS5VRrNj4yQyBaa3tKMtNZtx3atuEuHxiJywL5NwzPkmqjo5N1Zh5W5zx4w3",
  "key20": "3RGYUKoK5GjNdnx67bCFRJP1qrym5YQDMy2BkpzhUpwgM9ogWcET6A5jPSNyvJAfSyhNAwsfYyj77C3VT8LWiDxY",
  "key21": "3mf4knKg319WfXm77eCZsMXLqbwrMMd8em63iWejbWPxv8nGFNYmn8xQsBYpMPv1Cr1bjxjZxH2LtAB9aQ2s8L6v",
  "key22": "4WYa8rxKBv7p4sqsenxR6Caaq5g7ZMFWw8bVYeAHDfxiB5zwLQFmvERk2j3wmPPpyzsnJYNbsMUF17CGpr7JMYkt",
  "key23": "2KNYG8bawTJeLajXWTB36ztQCqyBpiLt8ybrXft7PTnBMZbrNDeEHBwrov9F7Fn74w9QYJw8MqefcqjFyy4mzxRN",
  "key24": "2QTNunvWdzhd8npMsDtHLp59ebEsijLUr3HDk97CaX7XkA8iTWAGEk8rUB6dVKhddTXHs6WLbtNhKrgLT9iKVfJC",
  "key25": "4XqNr75v7gWS9V9AkSXujh7b2UddFs56RfKfRK2uhDoBgCXsBkrXAmYhxwXowQvft5rdr4GpwVph3sztwJkj7YvZ",
  "key26": "2YziUK4TgWVprs9pqSM1PbFKKxoa8wuk5onQaLbbPeHvPuvjhMVh7Yo8tkdNzjLHUxsCw5WRDv98GCfPnZ9acUY7",
  "key27": "27pNX3TL2m26WrHVbgQ3wFXsKLi9UeHGUxpVMgLKYXUou5AMuGcLNEyLpB7o8f4zpSVn1JQtY5z44jiVktARjTGJ",
  "key28": "55AKFiFLKJqYUgb2EQ4PZt5qrA7ZpGHvwvQbP2DPAriqTYp1WuXeXtg5fvUVui5FFbrhiWX5AGqYxfKUBtMMqkVe",
  "key29": "2xUx8otgP6WW51HX3FU3EXoxvPP6YBrLmjeCKgoLgRcnEp6FeGRYDnicS2SzA4h7Q664sraDEG1mibzkbt6fkxVS",
  "key30": "3B1fvfgErjizjoHGtV1uxGSnVjvHQJpCC1E5cHkDJ6zrq9HaqXX4vvZVyutFJDzbQLYkFtdhaAj6j9sWVvjqE9dn",
  "key31": "m6hybSMfrRKfFQ114qmyiWB5PepNbC57s7BCS8xh3qhb9PBsn2dAcSoUPFpbPdHTzrUc6fifqW9VVT9nzyUhwrq",
  "key32": "56Xm9wp9M5kv5tqz4BVwph1PfCaGge82auo2btGatsfmELXdBa2haZUoCE3bnp1wcR6CETJS6V3pDJCL2mUMT9XH",
  "key33": "5HDK75z7qMd1TvrRbaGAFQK27K6GMG6sfLeWb8wTm33j3KwuQ51gKsRYhu5JGYhkC3U9pZv6BAjTpTqpRziBoBuu",
  "key34": "5RRwtUgvJy2Xko4apQhSccCDXbmrmfeesCrBuomzBjjPJL4fLjUqs4TeVfxnv28obnA73HjW2M6UQBUeUSB2DwnG",
  "key35": "4vR7oEUx88ck8B4JKt8DCb82fTZwit3MBPYqA5Mm2zvbKYQSsd2pg1mh9uJYHwznPtk7ZNmQzf4sfkuRDh3r3Dc4",
  "key36": "32gqnUtmVDXNHp1FeYpJRyPQZEaGPVAzE3P94rEfgwQA2uyJox7sxQqPeddKjr81mT4t78N5DTv4TGLDxKieUADK",
  "key37": "3qvEzgqjnwVst5kSPuomvzGGqFuyJLRUyzYNre8HoYCy6oPYp2AsFhdtKLybc97ScXWyQYH7rxZQd3eZVZVY5NGa",
  "key38": "47zuwd1QZVvS7bpbWxwjU7ZTL2j9mqFGNPBssSZVPXquJsU7HaAiFDv6SHfwJjS6Bi4jUBwf8PiFyb2tAkqPrVk8",
  "key39": "58YqZVnUG2Qap1Xif6VkBWt2b3XYobTNf1Mjv5FfhbsNJHf4oits8aVFCruX9NAYuoMrLyrR5teyDLF4m3H1P4jY",
  "key40": "2jL6iZo6iyc9YyB5P6qyEYRcqz9sPJvr2aXuvFG7gHJFQFwT4ggLxrBgwLj8oUDNbe2wwKjYTXxRMjekf9yu1QHz",
  "key41": "2qXRxmkofNeymN7mX8rFMsomd15wSXpTXEjGCxqJDxrswiUHU7ezz8Q8V7wueDbnHFyqHAgnvpjW5Ns7XEHL2eJQ",
  "key42": "CP4qkbgBGmhhWUQw88R9r7u5hcK2nn88C9hkGvEybcZW33jFUdx2BDpdHm9LfnV9YDquuV24TXftaaAMrtLvWpn",
  "key43": "3kuKRJDfsVmdtrc8qvpQRuhT6b9mJpkS2L5YcxkjGjo945J6FwhGKwRCDcwodVBjft42w8x4MVES3TVHJSmm4vyG",
  "key44": "53RmBAgDnkGJGqgBYkEkXuD9MZnBd2jRQFWmBAE6FPqvZa7qaV7NB6XbADyjKk9oh35dgfge4kznLpkzumyHLz2w",
  "key45": "3oquwJq6cSRc5gEpz9SnTbGdt9NtqQ6PmyDouz5QYvTHa1C429Q7zsbYrFSe997hWmit1XZD6uNvVw8xSP4yDwEY",
  "key46": "4MzazAnPCEfmJMwrCH2d2fNoyN31MmovEzpfygYGwyiTWnm3wxMPsrAhHEniBcUWxJnXTv2pY1dWErciz3TjupFE",
  "key47": "cRHT2FuPAyhTZTreSvrBByZTwzZeoNrQ7D2qQi3NQ6pEvCXPsGs6pyJjCPP7B6FkWDXHRTmaNHoVuS3Nnz6fn2w",
  "key48": "21mBDBijGQhK3Q2xT8nn9RZKpkNK1pKSFgq9Z8T6zNhQc2Ys7fQxTKjjBsvdiki2NkU7irSzjkwdJDKxh9k3HrKc",
  "key49": "jz6NyVetBVNCiyk6FMLyz1iuqrJ65Fbau73YSBKhidSvVCcQSc7S7aVLba8tM4hWkzfRo7EV4XjYhbeivrZxVVX"
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
