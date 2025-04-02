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
    "4U1ZgEY3N1wir9kqejtou8TAtAyJ3fLxD7PaWAr38AeKyRJChV3GU6FX9AuMF6k6nrso8NJC2zc79emoEwTpgMtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WD8W1kvpQMgSqBC9ttjocbZ7QFRLz5Sycfg6dLSFGZ94UrxyLVNLYmbdLEjK7eig2QKnbrj5ReSzVLKwsiyXTqy",
  "key1": "4Ze1kJkKPhswRZfm5x3YyWeT1geZ24TNmcKKMjw2FUwQ68is8B4bdTZikAxDKY1csAXy7SdjQZezhiFTwFv5Hg5q",
  "key2": "4Rhv8KUZTt1zTEz1u418TzvaJCATnersumzAR1VtPZY56g5k41nc4TmeEwDUxzhZDdPHxRFctWfqXYZVMKUiEH5",
  "key3": "3VSREPMF69PYJETruB9K13uSm3J5tfvEoP9ScrmNFMeNW2ffJFMHRhVnqj7g1xsxifGxY6S5WCum5wPqL2zSstic",
  "key4": "2fjvFXyojTRZ63Nkj6ucQW3UgFveDKJqZFB49auKPp7xbU2ULu56x8rB4u4Az1aRTELkfkjDKYJVU6T4MveUpLh7",
  "key5": "4FQrEKZxPnpRmPprNvcYdc4sm8rL3E4dre43g2jDkjukUNun42wtZh7PeyikkCLyuNSMMAozmiVnAahdW3FQtADr",
  "key6": "5f7L6Jx5vc8eFBZwWAbDJw2Js4L3ke7PQE8z3F1YB3DCNrcLKzo48hZiN8RzBeLSfabJVx7oS2xWHQSpA3hKcKkL",
  "key7": "5LBgHiK1V1BtCoEfEDTdxy23xwUK3LGePUtVDefZdi9o27h9mmUjKzgA86m67zrVcgTtMNB11sU65AyNNYcxayBd",
  "key8": "4zLXoCrpnBYfJL15va9N6uu2KdXNhQARrjZpKCvaDGL8w5RPJiZ1moUBuHFbY5p4sU7M791Cui1Tgw3x1hA1HDBA",
  "key9": "3tbQ9CFHJgRTtkapuDyEtKcJLq8L1LLjtAQYZhGtrGpytXGW9rwSygxzV2KVYrGXT9eDHGs73WmSBhZ5wXc53EbV",
  "key10": "4kbN3uqKL9XeBG7n2z5vECQ3MLGxGNgsCZsjgqeeTZVKRwcWySc4ve1MeZf9nHuVRhCfQBFbFzvn66oznNicBwtt",
  "key11": "3nzRUETnHgT8Zy1Zd5326egVpyHvRdNTEhy2fECpEuk2xyxxkPwxmaZBKZPz8JyaaozxVpBuaK92W3f2249y7gpR",
  "key12": "3uNSMVm5KhUDvThAqPbcccPYSN7TtBwDh6j4qRQsZQuMLZVcvxPope3tqX5XBHAuwqdBrpVn9hHoXw2ix5g4WTUn",
  "key13": "5EBkM5pSwLHxhSKjnbemPCaGqe8ey5gQJZsGrqpJKo2ocpFir1HnoyMHMySJSFx9XQk1nMUZJ1L1HT3V9zkJHJ7Y",
  "key14": "GLszZyFTEKdKbFronPKuGf7jppL61BND5oGqZTfhiYD6Mczo5eNuxjLuETxNPaHcThVHdXUgYzrzGUNG46JAT5V",
  "key15": "2osVbNwsJ4MtC2SmBVLFD5px21GfatsgYDVJJCwoTb7MhP3nWiudYNhYYfELV89AX4mmnLg64NpygHQSNLkRW2Z7",
  "key16": "h4F7Fz7RmQhTANz6xtcspJLrX9JzGsQyAVsSjLfipyFfSM8Z8y8TwCFGWZs7j31csEKkxmtpLASjJDH927EAauX",
  "key17": "1b6fm4EcwXF2FiAp6ZnU6SDBZE5HiX9tCkJWSoCgVGnnaz68Xej1ScomA8MJwvr9KRLEr7c9oahcYaHxcXHwiXD",
  "key18": "32eAEwLncz8R5G6yydrwHMsMmdtVKLVxC6N9fgHViU8EUQGMv6LcrmQfLXWQN4efydwedcf9TjTtMMLGp9se8Aib",
  "key19": "hrWsUDvNVmy5YCqGEEhpyduCRWQkqPbxWHbgTfGMF98xn9v7GyNqmm7aDP4HWGhHYRA6ogXscgzEjqzg6MbN5dc",
  "key20": "5nsFYoQ3Dx632jy49Gkp2uQLeoWKrfPqWA7JKFq38U24p6pH8WcdaRbZtVqmvTM8gsvzUCiusGqYkEfM5JfvP92c",
  "key21": "2DaNjij66kxFYCxabdVQh3iWVwPGu3oSqxq4qvMoewWztJc32BD2BrKP3e4u3gRqkWnb1kmZyg8Bz5csJFh4PRfn",
  "key22": "EtQpNMxiVegBzoig4gh2juhWC9KfRNvM8ULpLE57yogc3RBXV2wNTaw7pvcuUUuM91kupENPM76nd2mTgF8SgnT",
  "key23": "3WWLKRQbDWPMhctLYwbcJLUJtwcmEzwsirMX2F4vuRpMgQxozniFo6XYhWRDkFjmTJkPMBr17p3PDzN39RGjHAXY",
  "key24": "3AdYAkjkTxy9RU4bWeKQDMnBsVRfFpYAWYPtGn2tX29LmnLJZCpQ6WQQo1FyfJiYspMTfrs5JwaW1fEr9sA8UcP8",
  "key25": "2q5GzaoNX4ivjKU27vvTk6Y3VfodLTeEjU6VWzmpJCi44JkUjmM8ZkSdT2TWLDY3xbWbA9G7yAzjV4iCEWnRedbL",
  "key26": "3tkzAUeRKQdxViK7g8ogEt2zFrxMrKsvQn6PRCTDxourAdyNCKhQBay5Kn2KqYTijXXRNfcwEYfwHpX1JodHeJuU",
  "key27": "4PvxDNR66ZtD1zrTXVXE92kCN9xXpLusAtKUBim5e8PkF5dJUr8auKSxC2Gitaci2VAELspYq2y7oxcXHyLqgdt1",
  "key28": "3wuq9beoJC2TsaTFgrxT9HoM1VNQ9p5DBobsduLfKk6SWQVijrazEKDLDVLUDd8HXvtQ1P4e3S9JA3i5DSx9aLdW"
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
