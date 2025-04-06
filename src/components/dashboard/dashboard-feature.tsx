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
    "3edTCDF4T9Qu5VfNTUsqXvRU3QDY9XnevbU1DLy9aKrd485DszhzDCW1SurxBc5ozL634mprFNdF5T8Bj1DMX8AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48GK3GEpYrEfDuaVmULHz9HXFo7hfzWAHNNagG1Wqd8cNyG5ENZe7M3NGCFrWNCXkHrLab3cNMQChWAxSGN9LhLN",
  "key1": "3h6f6ZpJmChit4Wxacv54fMkgZ1bmkpdca1uEmDcoNedqCCdsJvyGXKwNCQqTckUre8WsgR3aguAk5wwCCn5gCa1",
  "key2": "4JVF3sffZfRm5A9L11ZAHVEo9nc2vYw2SijZSJQBJju9J64UMkZjenVkYsoLEeAveq2ecSgSe3af23tDbZhcpp7W",
  "key3": "3XGr5Fk32LcuQ5zyAxyv2K57W7wMJVn8tKzbV9qmFzTw54BcU54rcAsnrCVEBQZbNUhfy2KLXKzxwDeX9qbAAKZu",
  "key4": "4SEpCZynWDKQxzZzhrMQfz35tGiUCZYf1i7xQLSvcJdRikmAScNiWvpj6L5KeuGpXgc2m4LxGjaxzDpdhg9aH6T4",
  "key5": "3m21ERBnRw1MYdWkEtfpxn5m2D7MoP6k5Vz6e7T4M91dptGNbo7C7jXYMwFRo7ygCm7GrWZqPKB3NZbciTk1RrDP",
  "key6": "3y9DSg8oK3dBG6Cg5UXyUyakrQ1VzpesXPT84mNTuw7NFek2a4VzWLeweEZ2hUr1wwJfkNgN4F1XBSwTtpLwJhc8",
  "key7": "59eiXCooPzQHAxGfKYm5pm32y1ywh6osasMJch3M7PEzXNsZ6e367cZbsNPskxCid7wZVhxVm5ZwpPhkaMV84ZHy",
  "key8": "4UJFsRe6gDykRTLRwYvBiGyevvqRyVrqChkQkCn9U8xaCeCgD8mS3L35dBVaE1gV9DNBAfd3pCGQsGEDTTjFjCQ3",
  "key9": "3NZ4XgpyLSFfxVwV8vmysFLj8ycV2qa7zQY1oqREHZMjLq5wYSPXsWjbmo2y1gCeVVJnr4zSn9jAy5fhAPVEmpeN",
  "key10": "4rVA4VfnhpYLD224oDJKV8YXjzbMjuJHiKcuth6V6XbLHjYggeqsmTNiyu6cE1ThGJLosj96hEfuHtz9cMAAGFEy",
  "key11": "r76rqBW1Vt4cia539R9XPvLZVMATauP8G7mzmXiAqteAF8pE7WBHsToXUUF4MhkJBNfLSRD8Rth6JKtz3DAXkRo",
  "key12": "5A4coJB2bjyH4mXBNDQZ2VxBybGGN5gZeifZvtGJsTkSCUJoFWYAsiFSUAnwctMS9ZKAYP8pdFDF2vmW2uymJAks",
  "key13": "3BBfJ4xV1Ux5FnnJDucVgWwUksddS1Wo3fWnTaTdAq1fhbhTf1bdYAsPGdXBB3b7SMJqrs1zVBzW6N5FRyLPMXXt",
  "key14": "4esszEXYWxM4VdvwgT64Z7VnqDQwjYbeAmZPEh7JQtE5yEqzc7VS71ZzkDYc1h4xPZNhqxyp9kcr6cUtbrMx5JQX",
  "key15": "31B2xTPKixP4NpXr5ayoHTbLSuHd8FSBjNNeCMN1RZptJi9s5ysUqSjsHcH4Uob5mCH3MF7Z7Y66zyvfEfM3aTye",
  "key16": "35swGc31Ua8JmPTN2XFh5W681e8iYW7rpJpEAkZYzq54zfnq99Xj8PfKNyC1JyBP2B1X4oGATsjUvQE3y3vCrGrf",
  "key17": "eXD6jBnRUZdAUxC5GHXgDS5DFBLu71EfN9ygqi9oYWAyyT1W8EfRibgZqesVn5gNBJbWU3XDXukBq8vyiHPaHaw",
  "key18": "3ygtgtt6D32FzaiewpFAWe29rPxoQPJQ1RQHXUmq1t76ydmttwNjhY6LdXeFRujpQvCRMXLZVnrCa7f5uWynFcMh",
  "key19": "3sppKSMvj6hKS5RY2qyEpVSnm1CxiMMihgQdKhW3XXcBNhFaUaidbYoR85EdazvVpeEzUYAJnzgHecb9zC85busQ",
  "key20": "5szaRoeMBN7HGvu2DozDEhd3cixNVEhUQVYqhVMdzp86kURpKdo2bD13QwyxCeuczgPwgJKnfY4a8Xw2xH4P9jtE",
  "key21": "zPV7qGqrs9rhS6J5AA4J4cBcXh5KTnJZMob4ms1LxzA5ceZQicnrizM8WLKfN828SVQrcqEYDCXdS1UpvV3ihKz",
  "key22": "4Av5N9so2oMb6yyPqKEm5YZk8WNdnPTsaBGZFWaf6sZxH3DeWSBhYAoEoQV3M9Cn1V22zd6tDyuzd9Bvk9XzQffR",
  "key23": "4oQeM7y7usxSKWAoM98j1WXWGKd8KYMdSYdFo286fg7p3Crw5X6MB4zkKmhSF9WM31o92hZKY68Cd4Wtgmmdq6uV",
  "key24": "2D7J82ANKhcyvSvjAU8uEjEMwdfLAQYbmFKGfmvBRC7vvPFHU6Ui8fMgn6ACYvaGcFqFBey5mr2k8NxLrWjZ3RPy",
  "key25": "uU1pDX9r12Vufoiprb53FNyg8me6YbHLZraUXwtwxnD3dd6bugAh6FyDveuGVEK4i8UkjrAjzJ9dTcExrcTNNA2",
  "key26": "2NCJiSZmAp4QD5i8DYXFnRWFhoXVJpTRwisp2Bwqn9uWiKEvJL7W4qZ3kXAeTkaCqNXn6YUbLjBv7Dc9p1t34dvt",
  "key27": "3SjAzLsEUCR7cSrVB99DYdfr2eYEczqx8BBuHTKh1t6hPjpKqF64WkvmEfFnkg9HtoDwEhH5WzhAqYAQzR67kyXj",
  "key28": "3jZTZUmgpeTwetm3qq5WmKEUskqUV78PgK8H4rmq8miVnoWK1CZncUjvki3ewnTQTHpJQwR4sAkub87sj62WH8gC",
  "key29": "e9Z4DHidJTFH1pjQLyvQenKEbNXmLx4RrxuSdYFCF4XjQwXacyBC31sfFMY3u1UJnS3UdqcnR1pMu522MGy22Ez",
  "key30": "4H4n9Y9Z7auZwNUdxYsMkp7uE5WmxnwyGPC66i4D6Lbzz2p54EbYq6ftoaKnr9Aknho2derm58aK6K6FTgLdMhyK",
  "key31": "4NpPn7pwwphGQLft6ocwR93davmQeAALgdi2YgW5Jo4FnB5d8seavTJobsLGmReXXgu51MJ9tVp5LjfTou7aej2K",
  "key32": "4VkMv5RevGWtpgaFFUsF8Zi9VwiGmmusiMvpmm7PWfoaivCNZSKZZHCoNVHRANU3vhE5gK3QzuHqxGEQ7gs5pQwC",
  "key33": "5B2VxSQgycP35w3qbRYoRQRm89xjSWJg6kCpKQtcgLYyt6Au8TFnymAi7WsYqEAxFjr7ga72RDugDD8jRKTLcR7",
  "key34": "4RPepxtatmc5QSJoHuyQtdUpETLNBsAmoWuTzMW3zfAy8MBCxCYdhvVtxuJitXUsGQjxkQtZkqpjz5ozZPg9yCWm",
  "key35": "2e18in3oypFhbKg5ydmmfqHZD3AvUmLxMNU8AV8Shddwd4DThByj6EihirSbFUZG3VBAz2jsEmt6VGVsx4U9L7N4",
  "key36": "4mmMFzrXVWEfvvgyQQAtKD4nBVPKX4snBTJwkqvCFf98SsCZ1zjHZ1v4pb4LaDGrcDbBXSD6HEzUh7ahRunRdTPy"
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
