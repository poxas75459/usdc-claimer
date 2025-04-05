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
    "5ur3zmqewVnWHNyxM8Y29qsySPaCDxzXSDyai3YHYQuLiBPk53ChHLY3cokswF1WMb7zBBzBEeuDBa78w9iDCMzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bDXJUxM24f74ZZN7PJ7y1icWFcc8vGiXdGnaKPiG4nePqtkpP4sQF8e3V8VdeJA8RGT9YLyxqfqnSvWeHE8G44",
  "key1": "dpux4MfvuWNeJN2qpVjP9Nw4ACdkcqVamnsLoMYn1UR5jBK4R9H6b2trnaepWtjrrhJi5wDfH6N1FSupoHLNJSr",
  "key2": "3Ex4UZwnGEqUNfT5fhMPno3VYKGaFxcC7hMFAN32d38yxVQ3vbHhPfnbvBkwuxuHBpPeBSgL5qmpJzs9wR6EYRmK",
  "key3": "5w24DY76WxyJFUkYhRRW2eUGHTKMpxhibSMausG6Z9VTBcjkqZtat4yHZ8A51oP3H2yH4ZuQQzC1HSi1KMs3qyRL",
  "key4": "2SWhKjExodjDccHX1ueje3xVG44mD28QACrEm6nmhwK2toFdrSBcJ3BWa3raFuhgvx7NAF4W25Nkn5tWZro8DWna",
  "key5": "2xA69ys3JW3HiL7BfPV2docufMqzkbQTLfJWk2U3LULCQxhR5Dnc2YoXqVFqZrEtyWAF4E68GVEtQ6GexhxqCM72",
  "key6": "4nFJRRaFMDM82YfD2vQFxo6vQoT6NfusEkNrD9HHrnx6pHM5dkzpBZWd3sfBfpzvhvSCVCPkwp39VGisHMw8Ag87",
  "key7": "5EmRBj1U8Yakk7KyzDm3kgdBzyTx4XUMm6iTzVzznkq1ofiYUnhaU3ahA82cgeP4YzxaQio8JPM26766w243Ybja",
  "key8": "jhU9AHt9odCxq8PcWK1bJkUPkR79WytFzjCh4mVARCa8qjatZPfYsnwNRjDqA4WZk2ahvuUY3K7iCQiH6RecmpB",
  "key9": "5sDXGZ2z2ZrZatjMbbA7zs9J9r1RLyqf6SQaYZAQ7DXYBQMCjcfzc1u2hEPfPgSLzpzY4QcjCNvspm6MvAg8pndu",
  "key10": "2a8KgNEwY5mdDyT9K266KtcMWB5YsQU8ami4BCbSx4CDRbAcvnv3AiqtJ1oVGCKkDY5v5XLtZmd6N7w6oy4kEBRt",
  "key11": "2gysejUZbWUfdDBG5VWyL6nHpLdBTLtv39DNwYJ2EqTms1JGgEKetr8gaDkX3WGhrRu1fXeGY4XTDtRTCDcanZY3",
  "key12": "5sNsaqzyPwLdCdFCAwi9B4rsAQvMPDo1m4aWgKQnAdwVW5r9ADjqWd21rf2ji4J2Fb2xELLXkRSrVRggYM2a1tDE",
  "key13": "5W7HSHkPGkPGRsRdGWvxmxSf9FHFUBVYvSzoFj7zcjxpmRsC947kZjKmeQPy3iBWoPzfxiMRP7wqSjmUGSheRLZe",
  "key14": "5rFzduvqGgi8dn9rb27D72ZPpHKSmfN3hPtVu3ABkpiHBk81vAVfm31iAA1QgcSFZto27wqoWeszt2pJnLCETPTA",
  "key15": "4wyoTFnnVgmTLrSxtSrrfmojkaZDPy7vtNRcgm2z8sqrctGijMjnTaFitxGoTEJx8o2aZvgjGozZWeryLkFKE12m",
  "key16": "2UC6v9Y5ZYUzN2FWc9Rj4HsZbCAq4tChqgPrMsYkzztvwuQMAXktmR9BWM5V2uwUurYmbcjcCxGXt1sbE9rCLnM1",
  "key17": "23AhQ1FWbf7hUZavBmCFCNMc5pAHr5XZT8XG6mFA1sf9EXJgDZUCn5B5DjFv6LDgQqHnnJYZxxnDo3ZHyABqbZhf",
  "key18": "5Vv2dFKVJ9j7hUtVSKubssAQa9eDaFmygM9ApEakPaScb1tiXUJU3qxdXM6AotwpW4CuK4ke9bwQHV9v6ozZkfSF",
  "key19": "3MZAHP1nFmmKyUJbfnFDsc6xg7Gp9bCgYnwTQuVgckMeaSeUSbnJdegzkzF3msv8jKALKr42PQcVT5XrNbrnpSC9",
  "key20": "3fpumNq4AFhVQYLDNVsdbCF2CeKyhwwm31sxjtSfgRkkAZieaMPiDvHJeSxDEYKDk6j5bussC8vkZnkDgPC56rsY",
  "key21": "5CaoDzc29MKyNBB3VCQGXheFTnw6ZaP98pc81dnZW89y7oDTkyf4BTg9pZE6y1HP9GdJBeBSghdZRUaAZm6PyKn5",
  "key22": "VdxyLVuFX71q5S3f14gc5Nro3ypFNZLyfed3gTZjZxCd9DKpu5j44tSZDJqEV1oPZ7iuHfTsGYvGAa672J4XTJg",
  "key23": "2ZJA5xwjoYSzeRgUia5ZDxUuLo6pVrPZeRuzoHWbNsrK7oVuDY7in1d5bj26XAQ96opikZQi8PCwQzUvu7bc6bME",
  "key24": "6xUEXAXdTp6vWQvnfJXgERqhug6cvvTgiwd46B9yhqkntNBbgaXdXcXhCsfBedytPbjhgkiSQM6GopHtvckZMNq",
  "key25": "3Wmk47fbZXBQqm67QL1SLHrXMNy7Kwz2N9n5MtLx7Lpue3C2KcUs67QNg5btneMPeoxtF1ai1bvwyBVVWngibsQY",
  "key26": "3hE2Hqqp9wvBerXt7d4pfqrYHVe9qjm4XwwHo2yypNXwxjiBKqTb9ktivJj9DoFe8J8eJeCCNrWtBTTCa1KxhVSw",
  "key27": "3XTkJBRLtUGyZu4i9pLrARf59nH73QtW12mCCkD4EW8WUVFzDD74jifbJNrkRocxLZbYgpu3zMCbfzfYUQKU65cW",
  "key28": "3h1VMBpXv74bFp9DKk7CGyKHwn8Y4aZk7rEpu8ApqNMJmSoxj3ZAUd1hQGBv42TJ1hf1678CXuCRTNCLzQbafRod",
  "key29": "5Svs52AfuqNNUirXheaWJbRsZFSw39LFmuKZB5tEvGvk6vYMMCNH3nxMH54DuVnKhtPZqXtChWKnNRDTQCT6Midq",
  "key30": "3523WPHZWxdS8XWKGDQVioA7H4psFgVokFDcW4kKks1CCsXBCzDDDXW99MT7fYZctyjnRQu18RgWaSysDzHf54p1",
  "key31": "5szSD17bE3oRrcjgbAozR5knmKRFHx6sxq2QRpqadWawBGM65dkoYVohxFf5m6nSmHpTspTuMuk68x2g6Ma7sxB7",
  "key32": "7F376fCmyRKUc1WBecwskYhyUbNMyCB83BbpBxpbrrwgYfqMtcvZPnzJa7r6eMiPVefiJtXrvJPPUkmuvSx6XVZ",
  "key33": "4vhc9P157wSjFNNJEP28Dr3qYDGuqsW9oRiCUjWeFeMGKEqsNxR26EihzKVn7ZzQb5pWYPQS3cunSDZq6gwCGSmQ",
  "key34": "5Z1yEi7kevEb6yYvD3GFfZ2Wneh6ZcdY76o4PqPV3ECHtryDsujbxN7WBAKZZfbwLdwAutuZTbAsdbr9S2ku4CZi",
  "key35": "44wxhdYPcCAEdUpTz5sKX3RJ9C7rHbVkhRSyAopF2GuESytwwWcuYD5maSGUoWDjwpqpAHott6YLr6ZBCzM5JPtb",
  "key36": "8tNxdKqMZzH2DHAehBvn7bYajzTt2WkDrtXEkgK6txR4XMNSvPt7F9Zk72rn97BVgd8jHc3PT3Bnd3KfRBYR3FF",
  "key37": "2Q15kmQJECmHHPinha4yNxLkUX8egraDTankyGeCMWQUpxDwHeEfQbmyKG4UpKTJeBqPhNRCB4Mef5UhfxmUcS86",
  "key38": "5tscvjm4R1MMBMc1PXDvqG8gzzpjDBTP4VGeraCHR8F5n7gzHDbTiU9wJHAEmCvydhewUL7qViH6BPCDAh7bvN9Y",
  "key39": "3QGRT8XkHwtiBo6Eqo9rG66oitMVuZkLLFw4xffvfTk1rFaTStHujqzpAh5aWfQ3J59BXYFUqiNUwnsZTZdzZUxH"
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
