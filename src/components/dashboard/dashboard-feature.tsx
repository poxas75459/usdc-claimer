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
    "33V6BhrCzkfmmQT1NbRdmYh9SCcgNvRuGoBtG5NHL63gKuDs6BmhyTnC4ETrZEZoJYmASL7oRDGtENEahGk36xzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvCF5QvLLHWMtJGXaKgBD4YKerqsPT3qTtz8wmkoKDjGLJ8SdbZm7Dd9tWnU34G4APzaU6uvNDEQdsKKHpZav75",
  "key1": "3y4zu5C7rfLuRpPyGWCnggqHiVdqp7mXjnGDgMhybBRVdVGTq3H3jV5by6nsxV4N8gSnR4oEe6iRCRC6BqN1CyYH",
  "key2": "2DjgC5EoDwAG2MmcRC8WhVvJqnVGJFkHVPkZshcJqmioejhajocbHVfwAqHEiLzCWQWKJ4dv86ntqws3umcMwdtm",
  "key3": "yUVA3pFHqhJnSsB9t7YsDUpX9QUNCGk2bZppjDb8ocauesWUQP3VBGcHGvpx8tHx3dMKW1CRCsdNCVL3tH5eJW9",
  "key4": "2696KPeszssCvxzYMAqkXZ1rQvFqZbDsoeQpUJuwQjQzHL5faiX8hcjiEKPFRYZh2AwxvkiGp74Td2yA3Fc9CDLx",
  "key5": "2n89iLSiVLpUc5YzC5B7veyTZNXc86g4Amxwab2BEUpW4cPtQtdgFr5ojJS9hQJC2oM3k2qJKZdy6b8V2pw7uBMt",
  "key6": "3qfnbDerCA5xAKhWUSeadG29JhqzhYLXxt5K97YkeJnbEhviRf6HYoaZmWbkNADUS65sxhgTx7Q4P5buZLF6ZzNv",
  "key7": "2L2h45bUWMB3nq1JbjnQKyU8HvvqRNux3hiQnVqovWERqbgMAK8M7hZ7zRDFHnMAeRfqo3EfagWUoyjbRK3QNrx3",
  "key8": "38DtPPVFGhezDz7bSChr1EtQXZhHuqqy4wFwG7kwgZZEKcSq6GiiAdzVcRLZsKP8Kj6HYFYRhRdkaT25PcevtPHU",
  "key9": "5CWFvbejTkiSxKVaepdhyBj7R3LNfhRoqGGjueUyAqhvewpPxBCy14GN5n5PyMa8ePTnAnDXKZdWS6Ko76EptAUp",
  "key10": "3LurAPgz9PfMhP5PcA7sySikojE8mpMgaDNMYkEuZgpXVy6PJCcSFMBfMyKANXdov3NvPSUFtSk4fTeRqjtUxXMM",
  "key11": "ot812qjgK7vf9uZTAbbjHhQi8QsrhGfTSf1eYa6dwEth2RaSaEU7bK9rmzcpatkVv17hZX8NENPYoKtqARmoxnj",
  "key12": "5zUMYqZ2Q1ozutndii4xkgi8SCXjViGYGH7cuhzBFdihtHhUU68ty6synXEiCa3LjNwd6MUXmY9pLDzTARNmqqUg",
  "key13": "4oDaJJnjuZziVkcoPuCHoWQ8MvnAM3ZeBeaL6fsBfmoNrEVc2Zw5bMrLR75EmVJ1AVrn9Uy45sBTTXY9Qqfm4MvE",
  "key14": "4ibxNHwK3KV7bvDjv3hEvLHCpyQahf68H4kjpyWto7o2T7Y3WiDkXVggxiPaKubS4jUnub1e9EPXZTHkS4dLhKPP",
  "key15": "5EiY5yW5CaRgZhiTkmqsaiF57CeLUqZUghvD1iCie5nDDgYRpktMjhhGjXXzCZMykvVEu6rf8kM8vuZqEhiLMxnA",
  "key16": "5LpXHNubCkkCcvFXZedytFKZYHsxf6tC3Q95jHLcKZFybLQ5oJ4p7J6vcVyUoEVcNgApHeUbeV2kvCG4avg2E748",
  "key17": "5HPiEcHjsYZsXLvYNnWriPdS2AbniBW8yVeBYCx9DPjxuWyQjVVofHYxUuEbvvzWCwL8w2io1xmri81ADoVzgwhW",
  "key18": "2smWoUDvBWxLCrZaxjW9Ph46UioFtqyzV9f5VorsF9N8zCsL3ZPtV1jTq9CfCmsmmXJbGwgou2DTwEsqApsyyT8S",
  "key19": "RaJqsnCEiD1amHYg473q7otpgs4t9F972fmhQ2T6iufdrsMmhkQRRv1MWSH7G4vWVQPeTJie7m5AUmBGKiQmnQF",
  "key20": "5r1NKSAE9ZcaHFUsuDBoDUhYsHsQjCqYEV5jyKxMu5SyvcWQAshDvW2FEPJkpdXnQeX7bfYJPro18YC6yRP91Mv1",
  "key21": "X7EAkAN8DkH9ZuS7mAHt7xNRooonk4cqYPX1TuWvVbhBBhgaKkW34fbL2HgM21WJ8LtxMzvdHYBgk5As1sAdnpe",
  "key22": "48N7h9qwnJYgRpUaHpp1JNxHAWWhsKD3WxTJ44qFUWXSHiGHrzQG7vUzmz7ExNSXQAZ39cjsA7F3zAWRPXDKwU6d",
  "key23": "ZGtN3JVUDMrivq9ijdEXo8T1V75DSGmRX4E9KrWN2QNPyJTdEk8TBXpqddcCn7AQUJrDdRUmyVWe83Hi2W3Q9q2",
  "key24": "3M6zd3qzDcoAv5t3XUuR8uacGgbY63kRiticSkwKt9px4UHJt4ANeDjd4W427dU4o9dojnrxw2YdQ1sZJ1rmiaWH",
  "key25": "5V2mmmz5SW7uLXSpt8BMjBUkwsb6zAF2Zi8n5uHhRsNrpK4GBVEGHM5KUmapps3XqAUDZxiF8d5xvjStcJ9C8gKJ",
  "key26": "2Jfd7JSFhiztp7ad3RGMUdeCqRRNGUgyxnZiowGa7ApYLKodf2DPjzrPpJkdMa6F8NFc2wtndsxQVSkk2g7gfQcn",
  "key27": "2RPHqXZuUpthEm6P68KpCbRsA6NZSRwWD3gfdy5HEytMfgLC1PQRxojphLij9du3m4TjGoEHg4YK7j8v2VYoSWz7",
  "key28": "3aJY3pxM4oKfUiGtrc7o83V1zVYauHr8Rd5kh6QTNRmUNMam9XHWiYVRdV1jhWGWycZQkLCZHZX56M8ooC7CjZNm",
  "key29": "GcSisNaee6gigWZRV4fkn8zxj9LiVtzD2s9TT3kQNwQqDqEA8LGJ1sG9jr4t6t4gt18Nmz6heAaUxdWmGwoJnnv"
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
