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
    "2i1kKHVnEksMuATGVKh1z5kotDqQvuJbR9AMWLTKybxbH1NoYmZDncEdNq8KHH2CXuiBHokuFAECYCbHxANdp9fM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ENG3w96pw4Wuj5Pd3yDLs7XvRsBuAUMV7TcfkbHncqmVdBAWkFvgrFhE6zaDryVATmNedAYJrv8fwKuQZN6bt6",
  "key1": "tV6A6ei8sZrXT5z32tZfwEBffz2GLCYN2f48s8usj2XuXnuuQd55MTRmpWhYvDCJKTgLsy7nkPLpd1NpdJdaT5y",
  "key2": "2213E5zLPe7Mn9KXVpsYYBEfE3jcBnweZvQuYG1mGfYwEv4RqG8vJrh5hxw2kVaF3WeWnMyUULGEZVRnSRAatpSN",
  "key3": "bpcBnvuq94Xv8myjLexTCmYNFjLs9VXBbTMAdw1d5e4PzJ6QkJbrPeCLCvVbMyZvZV1BKc51kK3YMyT8ozAQF2M",
  "key4": "4fSgRaQTmsfhcHiGXDyTF6LSzcrenwxCr5ieFmtpTJVrgwWmnPeZSTHaCnrv9gKgaw9YCNkhCX1BcDjg2wnYrwzP",
  "key5": "5kRYwqPeyJywktkwdhn9NxTTTagc55DFuH44UKS1UEx6VMKHJzNq7ThidP4S72iPyL4aV8v9tuFLTNNmCTB9Zi7q",
  "key6": "5KLBQPUz51HdE9v9fvBv7ZDwSPJm1gGoB3RfxGaCWnFnCAba4M3pMha93jRHstN3pXtLUDNhzbKFJzwMaexXGdEX",
  "key7": "3PzhrRwcTLJuM97Fy5tvY4dBvPRsXFApusjWkhhobM3RAAWMFLmyiEfcuWJ5QMjzxCP8yvvvosouAX2tggVFEoaL",
  "key8": "5u3rzgcGHJUwy8qBVgbrj5dM6XTJGo4mDnRGcLTjtXWCJJmiVJRPjn2ZhPVuRmXZWBaioS5R5W9GzkZgqCeo6HKq",
  "key9": "5UuKLua4mgWCxx2chHpBV2pnqcmKzks8Eh8WmYgKZBrjEw5ZigyuMxhjHE6NpSuURkdffw5Y1ERAGeSYsCAmYRtC",
  "key10": "2Q4D3fwNQee1o79HMaFQJhXdZZbtY2ey1KGDYxHCHENmbcsqxJTCCs8GVAvtWqVaQEyrU5k6ggvUo5Qca8VsDehA",
  "key11": "2LKNs8r3La3EfEVjh7r7p2xYPFVxe7Yis9XvWGzWdVwEdLcUANoDeEUMdht9EQB9rvnYGMWPif8FmnqxTT6FGp14",
  "key12": "3iZjC3MGpZbECxKGQz5ceWpZE8dLrowD8LyKg9PafoLyE76xZ35RyzkkxypgKgmSXn3QEezUgY2NESdx3r6CxkbC",
  "key13": "58FZxibkxL66QkgTUTgy5vXuRFs35HCChyD1uBPaKTkupQb8LbXxZd6Wx1pvvvZnDZzSTeBX6LBqwk3m75WqBERd",
  "key14": "5Sp98Xj773jJWDZ83CCcNzEXsCKhBPR5xBr8dhJjvGG5tni4xiokLfP6auaFeNBYy9Dv3diQp6DaQLx5hdZ7fUrR",
  "key15": "5GRxxQpeAJkUMBzwpTV7QyviJvK1EbZu1Nfvzr2nLzGW2PdZoHjXhPunwtveQq3yvyzUUStog5T1zYkd4DwvbZce",
  "key16": "3sTNRdGoBAAARenzh89ZX29o9Q8CnooXc7dPdZXY8dDZnEpJ1nTfMMMKP6FjGExX5tv7Qx77VUJbjYpcWiBtvmaC",
  "key17": "MBhpu2d5A8iAL8uiRwRR4TZu8zV1no1HxGvdHcifZLiuR7P9zVTKzEMaHK9zdp86eYrtnk1V1jVrQJJHpzTrQDJ",
  "key18": "2UDE3KpDNWZtu88rL7Mdzb4Liy7oCKQf3zFFKWC1asGAwZSNtaZ3vFg8fUGqtdGt5KDpWMjoRy1pns787Dhf97nJ",
  "key19": "543st9QPF4QuUnSZR8SEKwt3avU3vsvL9YUjGuGbFYNakKpMtiSszFSPgJYZfKunnScPPkmq5J65wzkSVTbdzNEM",
  "key20": "2SKdEo4HpLKr9X5nn71mh2R2VEPhJLMxWbVnxBBtTw3FMSaiLvXufnJes3ShHQmdqvNJZcszvwetpmHnfhjFJ1yn",
  "key21": "4gakH63N3wFecbqNLX4JxZrqNCFkxYiige1QJW42Ja5tVAtED7DE7GnaPq5z4s5hb5aomT1ZpuvxLRPXKVPpJbSi",
  "key22": "2zoDGM1nRZw5rUu84sgFskyD8So3p1BwcDf9jUqyBJN9oLdD4L3Fzc8dSce3nQjSLdmi7ryPmB6L7U47HtJxYDhc",
  "key23": "2ihY5yfwjgSBvq6WjLRNnwYB1Y41FyfYx5eSVwU7K6URK2CjAJZq52ECXjfMvzU18uQqWMNAFbSwxEsYSqDDCovV",
  "key24": "5z83HDFX23UseYHapEragHXsoaksdPT2iiwzmc4B4yZWzvbcHqtfxhfc4L1TCDVyDStwPAadVCLHgYckdK4UJ7SK",
  "key25": "22tip3m6jpVhqr58sfya4Rbw2dFYGTjgbvsbB9hGbeEiEcYXGgRgQioj2b8xL5cpbbTFC343dC5Mc2bzfQpQ8B3w",
  "key26": "VaUSEinLXUMtnk3ndDXbLsvUoQuEXWYRajS2KBSn58vggiiWZjeFEr2v1R4GSbnT9rYQFeFhnnZAZiCnNAurXLG",
  "key27": "4YP7RDGCcAEu4hCycHkWYVsYGozWi6ufkqU63tcwwpmrpghGwDnjhpybER8LBXo8GNbn71xYf7Twxg9vpJpWHVsN",
  "key28": "2JmzGoTMirttoUcufVThzJddhyYsVSfUYL57J3CnVKxmW6W52DD5kyKW8bgX9DmRiNiFDq8VGdDBHnXbd5yGJoLb",
  "key29": "4oN1DbFVi5PXkTQpYiU67ujTmZYRWZkRY6wdDRNmvUDS3J7txugBsVoSJtMtW8G7zMGixDqM3G94nwrBy8NC4JQ5",
  "key30": "5fos1LVAQBrRTnnY6VcdVeczfkxpg56Li8orEiv8jGT7RTjcLsVd9uRJ7dv9iTE3uj7BKGpRPM41Dqfv25fhiCcT",
  "key31": "3JVegUL2siz59KjpXGWPpj43W1v5joYdn6wAoSukg7xAdtEvttirdueK5Uq7j5hVpEUDt4a79UNsNJNw2QUge3vH",
  "key32": "61GC7jXv6nHyVKUmBs9RjVimMsGbZ1Q3wPzZXFfHWiZBNRYNnfYMfCwbayLxsR3c8ojUshe9Zy8r1dLy5hwRNLPD",
  "key33": "Pd7inxW1cASciYjodfDBXoDV8Ktg9XCbyRwDJiAT2JpjEbMAA3TrJud77FHLo1GeVyS3q57CU46tS2cCeUssUoD",
  "key34": "qkz9wZ3Vj7m8Gyj3LaRxZubhP9mxqMFDfNJKnaHwLg8TvbjytdauHF5tXAWGQ31NzzG19P2qvATGpvWxyARKrdW",
  "key35": "21FhDreZyMDgz1NJfhqp8BvEp5brfrwq28Hq5GWZapW59yKHta68ZRZfuk8SRrgbgs3uuqHpKgwRgQuY42Y7RSEU",
  "key36": "24XM2hDkmb725hoXNqBqSzRTHy1sm76rZCkrBnavJejuZ64mxWUZfHSWEfMpyYvU1PC7tBpk5NxkkigzR2ggzMJF",
  "key37": "3b3ZaCbzBPpkR5JgQXhSwQfSV3gg1kyDHqura3NKsfcQZfojWPom3jVQCs1y9A8oqFNWNqWYan7a51XMBPuBhcRq",
  "key38": "5RvDxspiizRaAHdVouGdW98yG4fVKdeepFfwDrJsRQmmvUMhemX7Udd4XpGs53wE9GELSEC73w31vWanSSfN29cA",
  "key39": "4tvZBUEHJvJqr8uXvx3hVKWRr9AXNmeBWMDJtrrCoHA5Y5fiHyeYys4HLVGQmqKDT6yEVYD4kJ5itoAGeTmXVmyg",
  "key40": "5W2ts55115K8H16Q664BTrZVLJ9xEwY4HHqcy5EsFWL28vdKURbHZEZWgEv6hB4bSVLUqng2x77rR8zL1vAMEim5"
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
