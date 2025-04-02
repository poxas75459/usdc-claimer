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
    "5LitfvSGZbzg9LyWNUWJbKtZdszczw1ZjLJwj33pRSCG2c4czNvn58sQS2KQyvsKoya3qPQd2QUbkadB7dDQ8rvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JeNVzqHuE8tkwAGGCpzhoG4AdyQZrZVqAk2bxz4aXFkGRgnbpvz42cyt13j1h2YBfQBF99wuT9YXPMsNz732Zi4",
  "key1": "416zADSo1NQqe2f4MdQEV3k85S9dvHyuKt5ZJswsiSw9JKLeMZHW9YRA5cPgkcfsDDiqa8vquoFBUy9oDtpKPBod",
  "key2": "JvYUaUVMYT8kkKqzsigzWFQZqRB9bULRXAwtoVgu2Sbnf2CXVTg5J9m1aQ93mpQLfMbKy5BB9pkRk7wANg567WW",
  "key3": "2Ric8L7hAU6BBjza2JkuosaMchekQu9zotwK5zHwFauxxq3dx5y4T9QRSWfbU7WvPhRJp8tfdqpaF2tJKyMVhnUn",
  "key4": "4TvSEnBACPavoegjG7oG625CC4Zb9892sMRCwjWGUEnM1NagddcaWYU97Ayo8R2J4Q7Q1G3Tjaw2rkUY71AzUbhb",
  "key5": "5uXsTeNHWjp3VEbbzztwkjobVBFDY4K5XBryDFKyQ2TnMenyGwhzt6LYpN8qo8Y7C94URMWVaiofnngNx9Qb8yeu",
  "key6": "5nJHD4doRzmHUqiPTgT2yTMw4qnyFZTsNXes3w8qAubiBT9h5iGb48qecWeKJuMLRDrak8xW8dKdKd6RTvANQWG8",
  "key7": "NX6kRoDx5viHuFmC2YhM97W3c7CQQibY6FkPqmxeKNDrmazKoLdDww1LxiPorqGfJNH8sBmn8nFpp6PymUKi1qs",
  "key8": "4xXzPazcbzKJEwsd6KbAr1KUTjt75vio2mCLDjpwoMYZSRnXBwBBnbby29SKti38oVM4mRV5Wi5W1Kw6w6zfnokE",
  "key9": "5qNhQL6fpjkjTB9ddNBURX31A5rPxbqcmmhpvEcULVuHJS6XVgTfccQHeaq9V8cP2egyLDQbpBBm9qUDx2RQvnN",
  "key10": "3ECFN939b3TvPF1ddffJ2wv3AnFqYHb91Zbt6Rzb2bjS962NrJ3mrVb8KL8KwRzs6qK1nb8wh5LEs9UYjycgWT4z",
  "key11": "67gmu8wQ4iYaW4A6wz6STcxAYShKa2sck8GFXMi1ZGhQnhsFhaX9T7uTgd8RNcWKhtZgeBu8uUkLFJ3SbA6yhmZE",
  "key12": "5mz7KVUxiN3FNDbPcTUGVKaBzKYS7CBkEM48rLkoLfoAXqPVjEMe5tHhGVw5PEMXuRVR1xsUBcYWKn5boG2FGofp",
  "key13": "4c1v8BDQ35d94n7VVRAgQu2NCJPRufTVXLV9VCbPWqweEhXFqZPj1DCeqz8mYpWGpyxwzNKPVp9eJq2R2TpQrrYV",
  "key14": "yeoSZDuccpQFTXMHwuGSjPqXkjyrejTn5shujsv9A1WopGcxV7Kmkthqaacp7SfSAzy1xJRY3N6t5yxrLhP5KLn",
  "key15": "2ASzmt3RUkWX5c56y2dLFZJhPPZBTyM7arseHksJkuNu8F61ntkkCtyzyCyfWZKo91j52A7LbWq1yeB7Ss3SnrU8",
  "key16": "47T4AMXLCJrrJKaE8VtiDv8qkwL78tBNBEgSe7bxfAGw6Mogf6YZyDuJYHah1CL8ikfKr1SiVgksWQj2g9XaqZjF",
  "key17": "rVPxmboCvkUrDSDB4xadAVuh8fbWU1b3opbtkoi2jRFJBhisnpGYSKFj5FHYyREDMMg1EfzaDtMVJuWfXWKcMeF",
  "key18": "39KTTNx5KLHFBHpTk2DhwrdzcoKyQaeQWYSd9GiY7HiRoQwj64VX2EN9f4QJLB1dFGq3VSuWUrvMLZqsotANhLoS",
  "key19": "22Xjhb3kG1S81YMNNnEdsCFvjbqMVAR32QaJikibuMBgcQjwtrXSpmc2QgWiYqztuJ43DCjeuVPn9wTnN4zW5jkG",
  "key20": "2NBWhQpazKWxAynwQq2bLCspBx8yqacsuuQRM3dnYnXABPSCz7JE38TJ4rk9PWNBFTJ5bMGmDNF3t9sJYZfuw5kq",
  "key21": "X6Bru2QRS5eUXnnhX2v5XLeR3CsoLZJrn9RXhzWFA6DWHi6KPbF5DPBhVp5cCjsKzEWa7B33SjwnjKHSN7TC5qW",
  "key22": "2uYN68C4p32itB6rL4zxfVpqd2Kyww3YFgrvXp9fnLjzhmDFuMFHwkEvBjzeGLxgdAxvk8nRFNLCq9t2h5u6Wemb",
  "key23": "58bMjXEnwxTGogiM1tcouMxRxdEwogy6kFnXVoHSLSjwuDtaGTkR8f7bUzZGNYcW3CgAracmsWKEvkkueJa44WcE",
  "key24": "41F1pXbxwwSTVwyegAxHpse1q4RH7K4QBw3eKcMs6NpG2adC4pjrxkgVdEMLfsiv3oBxtA49w5vg3B42oAgHZtec",
  "key25": "UjMZbwf6ythNcau3FpJN7HSgjy5qzgUxGQANhewrFLkPdMgS4N9fm66HA6XHbfpNsGznZHPsgE7rWfdg8tVeZVA",
  "key26": "53K4uJEX9MziR515muxhjsnEs1UpgYGFRKzg6YBKsELPineKqc51xPq3aNi9QwcVR5Kxp2K1CzziK9iRjbQ32EWj",
  "key27": "2teEKKdp75HcQ4ARZeYd46fA255CFh6H5ug9n6r8Kd9rQcsfpKvtBpUTBHHnBEVB2y68rUeHqhqWowrSp1uWfyaf",
  "key28": "5JP2bUdv6tVvd3aSdMUdq7HczgJWcYC4hyVEDsrV9pKGs1xCVBgNuexqG45ECsXQAspDyzyYnszYhHTgavctZ3TF",
  "key29": "4gey48FYRucjY8L6C6n4npkPEuABar8D3vjKMbBiBs5KSRmhE1YYDTqTKLnn4YEjVTkfonFRygWFWsYiiu3ZrkqZ",
  "key30": "4CuhnBfb5GhfQxWZfmfnCqTXwN3fnrePPEnoaiGX1A61JLKNphfJ8BbfPN2M51oCQTYL5HwsjyAZSCwtwXtBA3ZP",
  "key31": "5uakeLHYe9ZQMr7UvzmgM3pLYTYSisBadN7QzHrpXiJtAQZN7kDKcD6PaLWC7YTsBTDTUF2ts9K66yNwo6QMxCBb",
  "key32": "EFjrFZkQeWUxbhs59QLkGhoXyB7xCmtsP4motmyVWADzTjZDXqv7VPvRMFfcZNfbqYhHoBXE65t4tZ2jKCd3CSr",
  "key33": "qPUKCd1zPKto5jyw3xpwhMcEBgDgJwWY1S7YLxByspexfeEDC6EgBuBdzyYvvyQEW2Nj8Wsyx8ukmom9osiavNT",
  "key34": "zZ2r6chizFCB2xnbSnX5VqLKDcZGZ3bM9QHTjEgvsAxxJhxJNwmi6NGUcCa4CbXMdN3fB5fzPLpUnuJdJzGuiR9",
  "key35": "3jFxr8CnefwgHpaJeKfo5pB5QuAeWti8AmYcPS85HZaeSXUAxPaDyFz9PP2r3wMMgtMfKiphhUoQd2PMw4MzYKZ7",
  "key36": "4FH6ueN11Ke99TcxCsJZiywetFFFpMD4RnvVkqu6Ao1jdTYYjfZD8RhsH7JrG69pzn9mZWEfJBiqUtYSLXkwsJu1"
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
