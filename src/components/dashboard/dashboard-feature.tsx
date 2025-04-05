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
    "2r97dkaB8h5T33fM4RAau4T6FeakptUEDUqw1N4Pqatt3kjGyHwAvkTstttuyAvp3meQnxBpZxSivqFigN7F2b9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugRrdf9AVxkrrxQjFrNeNs7vm96ihppfu7QSekCFwGNXxLvpqMt3mk2xfKTgc5QZdyVthwCtpy7QvRn73T3qotC",
  "key1": "26Tiy5NLHCRcqtVJvf1XrMbxn5dK59swvMHn3fqQ5GqQAZuJesniELu7Vdk8ydiph1qsEBWy6UpNQTErsx22Ggcg",
  "key2": "io7exDTMfKgzkcQDRUdJMvdRbxyrbY4PvrR5qaWdqkoTFWaGLYxHE9tHy85s1LnBqrsgwB9D2UTNzvdLW5rQVHG",
  "key3": "2o2FyFCwgXYt2J9pXnLeAKdi9EWEmzigsGQGb6oUoWMnSGz9VCk1GMFAUYbbrsdZGntV7M861xyaXne8PZfyqWUk",
  "key4": "1E9gT31SCotybLrkMaWnD8SQoschRhrUJceFeC1Te3KusR64VNaPZvtsKA7fwbC9V8ccxiuYUpMPZemQfgYawQR",
  "key5": "5ELDeDsgj9zGu9qgY6tJFvJMxK7mtVDVvzev9vYtXPswnHC2kMNK5ZpxXRbH2iTcoTK9NwhYP5fnfLVevWDGXCeu",
  "key6": "3FjrT4xpU26vc5LGrCHuSRhriyjVkUDA5vhinRYRQG9gYTmCJzVuzNegpfgCdgseUPVJGywYZwzh1PJDsWHPHKnz",
  "key7": "2JV9dNZ4Y2hCVatjMvq2WLUGUvp474HEpT2uUXLbYTLeGr2BkemzykJgP2bmSDWLKiphTfAVnxR5svvztkYaoWkk",
  "key8": "4Dyh98payeCTvLWmv7ZSb1CMDvPy1Q8P9cVaFVDtuvGxinm3dZPTirRZkFgKJPEpuZcWCy8EvB8y7KFgSFvmvr59",
  "key9": "3vmYLNgTkNJGBNSftBq9aRft2myVL4GwqEL5rsNPDpNqogGzifcB8pKJM2yujJLjpUMivJjwkXE2B7fE6vyVzq1L",
  "key10": "3mNA6KkYHFZgXRMNPGUghgYMZXteR8fukn3bemp1HjZwGXZseJBYEKgYqTm5DgkD4geR4AkXvaw9KxLj5QXP2HGj",
  "key11": "8W88JocGN5JUFstLok6TegxMwgCQdAHmJ67anga45X7d9xmbJdyUoGwbmwP4tGErz9oFoAeAuJXkhN9CbseS8vV",
  "key12": "28N676xX3t5M8gzqmcte7SAQYG9xDEvTDAURCRfy6t7o7cuVBuQVnkfqXqRv7xfLq9kk9fWQJhKeyvuc7SS8Bg3g",
  "key13": "3jhSKx37n1NDFZRxbAGx9GXTXfzB5Nmsh7Bf3eC6SZmT1Mz5RofZiL3CFCfmS769ziB9zqcBs4ynxP8TJXNsxdDQ",
  "key14": "2aWyXBuN8RterESxskiYuy9pKVhjorqgDd6sJvZPiGzK9b81MSeojy542RTFExzenNqDKfYfk2peNHtVnYbaqb4z",
  "key15": "3vePqG6F9rRZ2oCjPZCP4jhfoFkP9cUWgFzpArAGSQN2RSb16FStAw5oW7zrXmfJYjx4t67SYbY89d3NpSNcStkh",
  "key16": "66KcKwUGMomV9NqMkuhL2h1QD8pvN51fNWZezK1LKoNu4hFUfTm1sqZiPnaTyJF3w4Wbbg69qQ2hqLWEk1UiqW1Y",
  "key17": "5Ns7Tar8ULA17kKPxYhPQpXokAaiwRx8xS7qW2xbA4rNoX3kXmeo1qSBPrjbqTjgFQSceR3XjbmbmmzYWWyyxsFH",
  "key18": "5a29wdLXvmAX52i6RmcimSSj7mWVjJUbr1iudXQbmRSAGroLRkdcdMqJxzsecWXaTuZPcpAFMjAQruqZDGocfbWF",
  "key19": "5P8iVBghm2m36g6ZEWLvWWjdJuZR8AtR71htpwwDnZKrTgFS9hQgrGuTCkM9YfxD9xXs3omodU3UmB6M7G1sGt4g",
  "key20": "3V5usnkTGBdN8QyZhRKeXtGki5ZQYD2KXbgxWMnm2rZ2xgRZ3n1b3tH1QSk9RNw1eBHXqvUHQ5tmWFVtJ7zXe7S3",
  "key21": "4YQ71faB2qdoRTGZALzBXM6CuYxxfq5hjvQPUd1UiXfSp6uvNuxHxTfgcyWd9FFNXu1bXuViMthVy9bxW93G5HAN",
  "key22": "5wMPHyr9MKnbpLaVCEfZrJhoTM6SaFYMpCcMk7xdp5UcLeY2GdC96nheDHdtCjdtHnKQPMxGq6tBkX8YoJK8iyf",
  "key23": "4NbpJBk64pr12DvJH3Gr5krgPZCqKXXa1yKCXzhtEFis772C8z8t9r6zC4q2s9qvMuDcte4oEX7k8vcmfVZtNfP1",
  "key24": "2WnEaGMe1YQpdyb2AkBcmcxGtZ3mcE3mxYWjWKiLNQWiUoK9YCcvsicvmfiGyqMgHUBENKgxeKdgA6jtAFNZxiTz",
  "key25": "3B1Cr2HEB5gz8p5hdmFqS66XXyaxrJfJcXTKFm5CBnkd4VAdobQDWmsNEXxQFwRdRmjg7hSg8HoYUrRuccHu2Xrk",
  "key26": "WTJi8nKYPzr5vH2c8jsAb4v14NhCKYa9WLn5EPBvz6EBfjgagXBpzRUP4t2U9fCiaVaCuCEcXRDtKFNfANqBzch",
  "key27": "3shFGZPrzZXMrdvCsjxDBKdtY7QwsJbdSHu3nHBVkeopCXsgG9AdnfZGFPmYGN2JH2WVUtkBRVZPoXQjnpLjXCcW",
  "key28": "2eUbQAFZpWWY7hSMp6bFHRzcuUK1Cs364vt6b5qq16nkyHQBqtf9T6ozZdSRZwYfZs8B2pRxQXMQvAc9u38Mgoyc",
  "key29": "oWFRsPd6pQ7v3uHtMUt5ajkPrZApxnM1yxiTSd5b7aqiCemEa95zqLmSsZJrGqL4RaxewUUaLNW4JyyVwYtqNjU",
  "key30": "vUQAsaCBbAi34oujnkASn7BNE4cCnghyzP2X4P137zAtQvxJ4rbuFcWwHMrFDhqN3AvJVWLsrD71HHZm7e5criA",
  "key31": "3DPmuHmTLHAMxphZkQXh9xN2dRf3HHv53a6btETVDTDUcwL2MA6cwMa3Zq2q6N5qbeHDZaNeziiB6Ez1fpzUc3A7",
  "key32": "3c9ShSw8e4bkE5UBFhC8e3s3eWRei45ExNJKYvwHPsuWn2i4tttTF1JzdEXDa6h9iCjQaoB7renKxAKa1Jvc2Y1c",
  "key33": "4YHwpegff7y6Td6XhrUaobEYUrCHYAB9N48UzMmHfgeD621pLMbrjVuqCBUEaypqvrD9YUBiPQ4ZyNstyYXUuBiQ",
  "key34": "5X8Hpfzvjhbe4GMhzMDqDsPG17kyFsFvpzRryZKMNzrXe2WhZF3QgznysqCZat4nXs8pJeW2pKuVcu2YbbtmUJ8u",
  "key35": "PvYqGDSvCMVz8VezNpe7yRYpc7skkTPMKUbKCTTsU4toe5Wakj8BDErpV8UJujNhzRUURBcBdHoqvJ25M58zP9o",
  "key36": "2Se74xgumnPLHhxauu6QkvnvkKtxobTvCqu2YNkP1GhTfwdzCfH9jzLj619bLFLkfSsyXnaTPqE7tEQGSJQPQdv5",
  "key37": "2Hhtn7FZyFzjS85fUhaVREQVabnY4K3UzyEGWzMFnFgE4UEyrBUSk1XZZRhtuw7TvNtjfUzMox5p9xjbJKTLrGcd",
  "key38": "jt8vnKH25VnacKKSQ7FRfBbpvd7RJepr7VpmRgUePaq9nhzVGvPw6D1uAwWcNR2i1sHdbjT7WHZnF5hK57M7wxs",
  "key39": "zLdDfRhL9KcZKpYXLn4PsENW9BpPHagFjMy31q3vs2LMEFX3ymy6N9NJf6sXq5x4mu8uHVt2MDLsg7L9XTsQ5zZ",
  "key40": "56Mwxbn6MWAZkeyjRHVMiLVPm1x6ZaC7mg3asuMTLV5Kpw8PUk8ki543MpRHzqXphBFQvsctpMqDARLoZ65w69HX",
  "key41": "2xLHnZXwbd6G5hUMDsg4s81smvcGZizv7UD2nYzBgtJ6azjy4yeDPRbJuiKuETGaZX9Q663en1xUJZwFE28GZ8a9",
  "key42": "4uV77NFjfBmL8DHVxn8mKDvc3ZrszRVj2SZ6ray84bnguTBcNyoz31PbyR3u9q5QyGCsSAprSL78Pz13zxfgwyKU",
  "key43": "sfrXNjN1SAbLqMka7v8uxXdKbKXzdaCniu3by8X2J8bm4apg9X2mtf9mkJJ16Py8QrudcL2ygDNF8m7FWmVXZbU",
  "key44": "361Tsr9wew4yUUyjhoNSybLWarXrG1AUv3YCqcHdDTJFJR7cn4fHwzbRCv4gKaY3BTwjxX4Q54dKBsKQDhqaaaw8",
  "key45": "447DFLjWrH1ZKjwVDyUkpeXSpjGSrK9FMbsYy7pGDBVqkzFHqeiySULCzWH6Jy2UXF9s6qYZ6ciT88mTYEUQmzaM",
  "key46": "3D4NXTVqwNZa18u1cw4KW12JruWztm3haFB2KfnyZhWLxvy8sQUyCPqUZHoVtsM3uuogn5xr28n2deWYamq8evXX",
  "key47": "5pSenNhU3xHSAWWPn1m1bcAnzr7FSAAHuFT4cV6tsdkgXGwcvfxGRK1ervybYobrqkTRF4Jg1nU31akgdCFWDvCQ"
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
