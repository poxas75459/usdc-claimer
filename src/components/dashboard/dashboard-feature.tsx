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
    "5EfYAdJaTSicCDKJ2gdPFvTcyDxdqTqRwPczycafQAw3Bz17CMANK5TLukehZMyYMR2mwHAWf3kBK1hKoZoinE3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ss4h7W3qpwVRawkPV3bMyFpyQ1SqcKjbsbGe7jWYrBeUfevYdL8NZ28jQtTdVkiQdafh7HDvNg67kFUQWjqKDuy",
  "key1": "6GTeZyao6rZi7axT1s7qb9aapn1SFL5oq763QkMJsuJrVW1pXSfF4dNofGea64gR7N38zxE9AQcBem551LhToKK",
  "key2": "2DxgNxMj1puBxPX5Z56QvatU84xXtZfsfu9KNjQnQ3qJgmytHdShzQZEv6GtdUSCdYSy5ZDdsnpjAh1RP2f9Yuji",
  "key3": "5QGuYroRcarCnfxKKLZVyRF4hfQu7k2vCNFKnKYUSYDaHTMNATqKUc8fumrZ61bGjQHHbvkGZn32vshqrgUKRFMj",
  "key4": "3CS45NKSSZupnKRiVahUwPGysMfrZsQQnAEg6mifGZXsMiZrjxMCzyVSWfbV5aw5DVGnvKXxiYgQKMuttS6asX9K",
  "key5": "4bdvofqQPcrRkoU3MDaQvH4SX7pu8SUVutPjzkRjpmBpxiZ2PMFT9sy3qLqgMSuTC7bfb6kGvBd72AHDj5Vn5yCX",
  "key6": "4H3PrNvFaa8FqzZwcL2Ud8WowkNQp5HdAXRdXBqi4yYUc1ofF1aLHPyoLiqd1piMGxaHaaGVww7qbWwp2Jz5Da41",
  "key7": "2eQRZf6XP8rVGpxN4GYA2FDUCmpf3JRxSD1S7TtXVXYMZgzioBppakdcwMW8qafwwRcFvUJEGXcS3HMZLPVvSvXC",
  "key8": "5MmZrvXymMQ5D9hevqxNxcvzyKTXtHMos9hE8qpeLWiQy5LYUvUincFkWtTsSzaFEDhYFWsEVTghSUH63ziKXoiw",
  "key9": "2LoeF8bJv8HHMdKHqRH3SZSnM3JUoZWNSzs23jjBUoU7LDKnrYYvU9bfjJ4QBWaGPgCZ8qDhreS2bvHk5c6WDp5s",
  "key10": "33XnUkP32Tmzpqjm8QYHYGtK9XMdFsBp3BDGBAXjBLhG4y6Fn6iBMKtiSKDL6EMud7MUxEaCQXvQEEMJyAeKVUo3",
  "key11": "25ryAvsnwtgMF1qfxX2hSVTHVRr9j75vdeghgg5pzjd7RcXMNCsLkCHxeBTEGzQYy8jFQCD2j2ARCtgaLnXjw72Q",
  "key12": "4MzMCGc16Hn6F8kw78Sb57k5ybswN9sboDVmbWb9PFShZUF2Sty7LePW1XVUjb2vYCxcwjcneuvE3PNd48h8NkGB",
  "key13": "4gsQiuvLjCAnV25ecpo16UC8jHmqysdadF9qbNw6YdPGHhVifuyzymq9SBh8yoKoGHzkmDfUURREvfjVcHdVDrh1",
  "key14": "75NczgdXzyRQXSyYfdxP3K3mebhf6hAfuqKDQWevtmLJWYSBdGM8CUm45fMTQWHiKwV1hBLqWxfQXLhND3yir6g",
  "key15": "5pdQjeaVA9ffHiHpVuycvQVPxsjSDgH9rYF354z4e8pMii2Bg6yxfBS21x6sajbHcDBkTDxWxi7XQSTRgVrgMQrB",
  "key16": "375bnnrJ839nhMX29U6ek4eSYfo8yv7sDeNAGG1hzTtEURioz69pBjdJoNFSojiSJHxud6k3WLGJYR9KcNSCAkDW",
  "key17": "2KodnKWngT2puDquFGq1WJSsd5H1gSQM4G8nNLAw8Wra5ZbyCJ9TU9MBeP9ydVsNmkfmcGhtoq47fQi8zN5J7RKq",
  "key18": "5AR9cEquvPSfgkWNXCBPevDik93mYNf5QD9Uuz7hgJFgPX45mgSJSUd36XzLeVNs7kkSscP176yAJgkiriyPsMZy",
  "key19": "3JCvKC7w8J2AicW2DGxsVAwkCqJWngZ6SPHHaBM4bKeMrxsprN9Lro5PDcNVjtk193jAqPEbJtUf5TENobQ7WwDU",
  "key20": "3MyW1B1tHvqZkwHaMkYFouAGYHFnSFNTLdSoKkGyDRFEY58adA8WqLGmqW5Y5nrijrAifeSfU2zk9NtdR65VSD22",
  "key21": "mtyvHHYDhYM3AoVcjL8E5iM9WFSGdCGCp18QZaX7eeSgWbEY2D5mpApspqwGYSRNTbE7KeejWGP18bz839ykpQG",
  "key22": "5HEw59PbsCU9cv7PP8SDocz75dPzLywscLXD9uUizzRqcVKVqbQ2wUzx4wVgkpLp44fg1XDt84RCm5crAQpxCD6r",
  "key23": "4EUgLBDsvtZVECqbjs4nAwk4BshXLZni2debw12WRA1yJsTF8mmnTqREUrmhK3YmaSjRBCdW5gQS3PexEKDvp9vq",
  "key24": "64bdunG11CozGYrEnn4DgEDJr3vojFoyZRPHvE5HW9SjQfGfdibH7BMZCzWvpP4KeJ533qMSAbtP6PQySrLvjBuk",
  "key25": "4A4sxmgcQq3Kf3UHMTQwuTbdUNVbnxKxUABNBKDambKYbD42gRwdMqvBCW3UeCNk23wTmujrdA1ZvnDQsX9trA9c",
  "key26": "51WpSkufWZhkKJJs2GqoxmiY9fo3KfmCmyueazhUJic2wvzuj9NNTw8xmddLvN68oR26DdfKiuKcc5qUhD83Lzwg",
  "key27": "5d5YqMbaPcfanwTsAeEfmrePrqmWb7LMJUw1QBbYjAgKWGEUHZDxsboQVtHnwyYwGWCEx8YwXnmqzTwh2KYatXWm",
  "key28": "4E8Ed9rGrasiDKtud9KcYJRNC4AAXDXsNTRUVNuiAHYAexBoFWPDiESvPN4XmZiQQsSeYPaLbwKyXuoVVxFPqQcX",
  "key29": "Nk2Wqb5PR6BZsnwG3QeQtxZc3D1RfQ1Jbc4F8iKUd8ncAmK6EXpPjR8F1SsyT6VvDrTQdHWskqATkxMciNxwUW6",
  "key30": "3ns3RUUi6LgeHyufvYPpDsGzcFxnpN93f7nRgNNrYnBQgCX7hPJWE17QGPoCNp3SDXqTYcTTEVaBgwLMYJk3EW7W"
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
