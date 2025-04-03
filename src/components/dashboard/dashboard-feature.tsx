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
    "2n9y7g6iVZKJdU91ZRZQCPokN4PmVtGAb6c9jGqv4mgsFgAxJXeujFy5HVfdGkLyGRpEtMvM4BBFmn6nZPPEGnru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vR16715fZ2MiWpSDhpQAapM3oXGHebqvd9B1DpziqNPyvzh6etEh3J3pC5Fa3FY33M9BhsfntRP9F7mMjqCnrYf",
  "key1": "53kGKceaPAYjDB2Mgf6ZRWw6tEVKUkKpKrxVovifgongcyMiL218eRipWLDsHg3ys9nHRGiePHPVvrGfYJLu5azc",
  "key2": "5bvLyG4tHbsyb7BhQuN9uTsEGS5V4aMA1qya6WAP4qtDrZavakrDYwHcxwqbbjKvrg6aDNDUVQJb6aSqEuUo5PBw",
  "key3": "23ixzhQNosKcBaPoD49JQ7fNBdoK7D9DuFZM6D2uiFAofF8kwFKr6yCEeDNEGmjPF34W7jEgyTwHb5TtxyjntfEh",
  "key4": "aXWYC3Evu3vEryBTRaRiWhZ4fMm6eAomo9dnHNsx2N6VUBUYfHio3FxT9s9N7sDeoDXJDugqvwuFpfVN81y5PM1",
  "key5": "apn7ihEWweft1tAQ5A2UJQBgAsEmRLr7gANFFT4FivhuCxe8eUTW7xvDWkYxEofpfswssTYcFbbcJ54obLBhckr",
  "key6": "2E69RTRLtEUqg453JPxK4ArW9qMdjBHpWwwv4ZaFkjMkffYjs7SmqKiuwhfyRUAPfx2TXaJzcyjkb2sWZ7kybQen",
  "key7": "3JkEZrMaj65bpincjrjyYV6drz3mC8r5uyuorvLmvjLjQoVFTcvBHMhX6MK5WbFMgQyoiFBttJHr5rpzhajHJwwP",
  "key8": "43KUYhhfqXGQ5isG3JMLiLoND9RPUJRKoCDSoCeExZ72Ybx8HdMewGdbnntRS12Vgd4K7g2hkA5zAarDKVprVuNP",
  "key9": "2DAhAatUtXyG56vU1wsjwyW7DNjEg33Ctn7YQ9AmNexx1cPii3x7335w448zNNfbhqSDyZSvBhXVBQiqi7VA1uad",
  "key10": "2DuQbpwdGzNBqvS3nozEREzKh2k3FuXAZwHswmwLUkV5zoRs8kqMBF46qyckAC2W9zXYMzSajpYb5LRuZjZqSKQy",
  "key11": "2z1BdHU3pNqzzaps8enR9Dhkwcazk5vYLUU13GAZes2ZvUkXbR8z4kY47pq67gvaPvt44A72PN8HSuBnyyMj1Dwn",
  "key12": "4hTb8cx5fXiwsf97QTpHnUvVndqceSihDhcUWs3ZS4C1uPkyiup5vUXirkBz4LVcJcyKeZDJBKXtjWim5MekZ2eB",
  "key13": "YBHwkPXVvS7DHeD8wBZFsqe4zUeewUVGtbTGxwzRpszXJEu5NLy9AgK5d77EyGMsnm6TTaLB5vuAYJDPRH1XqTd",
  "key14": "9PUZFgETSqefcbpu6iBNGNaMZexYHjT1W3AAJ9TbdQVHJkLcr2qfJdoXHgZMn1jXUHiYxEmhwMQtdJhEKMMSypC",
  "key15": "4CHUk4896a3ZZpV8bpJqVhT3cf5kfT2g8DP3qzJU2rkqvGqsy2Pxq7MigHEL3WK6FNMSmUvFryQknveDaAtGxdk1",
  "key16": "4bC7cWKcrvF7yosMJStZ1GC2RKPxQYehjp6YzByQUEk8x3mXScwPHZRZHECH1Yw8YtQWgM2U22qTpgBrjdetNDsh",
  "key17": "qQYzBqZaWuHuWNL4gWbQ83heH7xrRVmP2Y9eiZRWJUhbXCFtZfruDpnfcRi9amiHTWJidQsAmZStmXau6nN3DLX",
  "key18": "4Lk4YhZAQtJHXyJTjaSnaeiFXfaWrcPARnYLoNpyZxQVNwo6s37yPD2gRdK1UCnVC7uk3jfjzVQZPutrTc2c66k5",
  "key19": "2eAqddb56JucM6gwJ39YRvyXCSgjqVbGU6xGDBqNsQhdepJhqjRVcwFbZuCUCBzt1tCQtUvSmpPmrVgXDsgYSq7w",
  "key20": "VMpsLrmcAPAcR7iXqma2RXtnyyzG18CDA8hL4m4t8DfnRy7NkCZXdnHZZDfsxQjQax67kjLteFKDG3ysQDxc5HA",
  "key21": "3G1o7paBDhDc86XTDBDyWMPgXEUHaQcPaVronQ4xjsaiCR747AEBfwyr2P9Hw2j7EmTbenF79zq5sNjk4g6mngvN",
  "key22": "46ogTyKqfYUbWcvPgjxvuSC7hxyhFkco8Tk7QvJdn2n9J28i9vDZXfFg24qJB2xP8d4jYUTSGbxbM4A9cuueSo65",
  "key23": "2LryJvCC8R8zNNKZNU4pLgeAN1wtgvfkFcLtB8Kq6P7AbnxPTgrUH6vozsbySD2EfZ4M1Tv1tmpCQ5q95r135A1s",
  "key24": "29KVkRJRzocGJUPN2ELMfdTxErUGeHXQQezbvE5XbHzFZi4JQx1eduqya2LPoJgM5ZDPP28xbTq5LwFe67JYAZNA",
  "key25": "3y8BgCPXqN7G8xBqJuYD7SbzJdCnhZa2U2F8XMg9jNGEbZCZteSBsuWw83E9K6Jvj7UxufKiE4Nf1XogLW4RKSHa",
  "key26": "49YhQYLVJoqCx3CoqQEgNJLXzTjrFQQ7eM6o1pSDuoa9T38E1c5WVHU3HqQBLuMKU9HJJB3Ygjt6wnXH6nFEuF5F",
  "key27": "4zAV6gCE9mAAQqZbAwJefooNFL863sTBExYdcb6gNyVb9eSQjWK3EoFiwbhHVmXfaWnjn5bfXpKAkqUfqFWXHDBy",
  "key28": "25ngEGULyQjq7Xy6ozMN8gLdeTQUUvRnhMPRQQ4oogZPeoSKs5uhGtjyxxpxiLaB9SvQkq5zop4NTxyGfXHxfgDL",
  "key29": "2hXadj9f4aoMUa76XPRvhqv8bA4wCBnsrJsht2ewYdotKFcaLFcuLLCWwYEijoNWVPwgHs2jShXYmkYGFjjkASkF",
  "key30": "1221CzqaAaBhbHZU8jAEw69xn641La8dNTWtTkpwHddG4n4fy1YTXhRi9bufVZmvZR6kUmmyzMMJVWA76ikLrZGF",
  "key31": "41SFkyJg1r4hKB39FTsznBQBrrQgFzcizWi3hhyTgcqXs4wwAstGf5gtLR8geKVfFfQ8QWcxNJUb2sXxZtwFzsqv",
  "key32": "38kAGktXTTWGtPLXh7uRg9trTWTiHE3bGt5fRsKWwvaKpn3fTLDPnjaTZ2XKGLyfBfGs1dpNkcZJg3kT1hgxCZMi",
  "key33": "2PWQWWh7msmPf3w5vyHojSLv2mn2bFUHZ6T9JzriBU1HcrYq8qKELNGL4mRtVX5Q8Td6w4Q1zNhpzKuSMfzhdF8C",
  "key34": "4BWCJCVUjRe9DT1jYNMnS59pKRwLD6vDTcC8Ktcnsuesw4Mnj8gqt57jgVKisPsp1Ug7VVm2QiAanszgGKZ4vmuz"
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
