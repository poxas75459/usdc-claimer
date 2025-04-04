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
    "2kTg4AiwDPmNENQc8ZEEFJ9WDh76UhH947vnKfQ8A8ZSAJxFceck7K89rDFStJtKszZEaxW2qTzNddNRAiE1oTTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTExosq6FVVY9ijFeCtq4DPaXE1UDUNxYucuQ8VuaVG8rW9a6fiLrkE637UAsCgey7iX4CFUQu88h5cdKrurf32",
  "key1": "2hPzc8iwYTZzfau2EcbbY7sKC4771QjtZGUSjRNvXaM63KD5MJ9j2wTV7R2XzCgbzbVscktMkmzosDooWsKPC8CH",
  "key2": "4briVGc6vdF1kxMkgQyaajpiQ27ptD6RYwiaFogZ8xqetPJKWYC5PiUdvvMpo7mNy8ZsjPVfVvn7f7cjb5JfiDx4",
  "key3": "5oQVg6cYM9FbvJf2hoz3kUcfFbcPvTiqkThcbYcXHd7pM4PcsakdxucYRfYdTbi7ZUVZDw8vMiV5euV9hMBVsyXw",
  "key4": "27VmMu14CK2vru4rkgMynmfVbrstQTnzAXmHDRuRXYChTnQYHxjLaPzKmJVGcTrTYeK3k3S8zKikExr5py5xw6Vm",
  "key5": "2Nckw4tXDVrkmZWcqhJ45WP2iBeYj9NLQ3KBUguHDDVsTYM2TiN8otFB9535mboZbkC7Dzq5JBjhnZrjkrcFfjtu",
  "key6": "3JebGBxAPwRW7vr2RuEYLRMnpgPzh9KbLm9f3Lertio7QU7CvdVPgHFLfzai6Dj9AjaQ2XCmeP2af9MndZV8wb6r",
  "key7": "5UvRuZ2ZyYGqFjy5w5tNyxwCHtqcGJwnmPt7cTcptRiFoncmwdckYuLyQuce272DBXn2sSVn7EgNga1vu4srdV6o",
  "key8": "591yoGzTnMnycSTDvaZHSh7udv2ThLCFTHMdxPqJUWP12eipksSTZydakWYzkpLUTL6dCQVWWt8SiVbe7s3Eiav6",
  "key9": "5WgdVaEDqjwje4Hc2D2bXWBxnv3Cg9qT3tycvY2xDJJAtyR8vxJqaPiZE4zmCRhfw9TiPRQE8mc6RgRnERtoVseX",
  "key10": "2jux4j98YsZkBTPEMXonJkUQaCukQRpJaZNvQLhrLScCkuGWxN4mxsRAUBDojzjzFEk6CuCWjpS8PNtyokBPomJX",
  "key11": "EupnwoTkLDVhN9Qc2FHg2vwwZtjUJ7ShaAYnqwnHsMveCwGCKuHUS3drHgHWkn6HBFcgcMH8RKsbf7pNpzrfocR",
  "key12": "3mZ2GJLvbrasQqWyo7gLo7o616oCvzSEaK3H2pTY3gLxYTcL8Tr7Bx9euJgdEmiixzboempkpHWcZEyYifiU4h77",
  "key13": "ZyxGaJp5Y9uHpmdbNLeagvtzBDfvyjCT25UREJxGLdDbyZhYyuM7VnA7e8cnNPkhyQJ7w7fgk5v5v5aLjKhSGuE",
  "key14": "jpri9Kf9ce4tieSxEAT7cNkYfHt2gX9UJG46CJEuoewfrhDNTU9VSwhVUWGSHArsoURoAS5FpiKSe3B64zvScEz",
  "key15": "45E5PuMMy7uShzNfEWCqhzVJU2S665X1QQz4P9W746EJe1U5ZAYkgtguxjRrcxXjBnzYw2eQHkBnNy2QvSMjZEU1",
  "key16": "4g4tvWJRBQ15qpCMFoN86QdoxEf7VwQMKsrX1DMNqhHHJwTnZTR8GzS64ejDN7AtrQ4RL97PbuTR8FZDqLAFzrp2",
  "key17": "NM2PnJUNzyGymyo8cqd77zrHKNpTpAntcB3c9c9ug25hHEMYbyYxxJsJR6z3EFCupVKknJTwpdbGmT481hfK8sQ",
  "key18": "5FpaUULrzEWMtTuxUGWAjHQWzxF5EZzUFDQMS2ohqzBjnHe4ddTYsnM8C9m1a9HbNxGm36zHtUbS9htAVacNjCQ2",
  "key19": "2sBbzPjngLT2FriVsv8AXWX5Gw3CaxUMeBibBi8QqCwTt29ZZH5YJyr2eczXtUd6QJK2R7VhERN4f94Zbu9PmwFX",
  "key20": "nuLkziKzed3sN6PWNwgksiiNmrcj4Z7sNpXKAaX9rjSw86b7zQNi4FSCFX9uEKZzHvR3tHedgZEnz43m6C8Dx69",
  "key21": "4du7GXkg7vnqSMnLjGTrPUvH3NcEKwgwoYB3C3s9Pm1rhPKz6zMmxTLhahscGC5BCDe2EQNtYb69J2Wurzmjvw14",
  "key22": "3XQK622obyn9goFhiVs3LktARJdXNjEGAQtPBD2DXdva6eFJN6MdGLxCgUtW8BXg7su2DnKSvVVvgo3LfHJcx7sm",
  "key23": "CtgdXEgUUQ8xfptZRWvSt6j3LTXKiPVyJsShPUeeBisyjZr2G8U4oaPVZkSSQ6V9i8WE9j22LSrrqBAobC2t22s",
  "key24": "4pdEgjPX4WiX8iuoKkL3fzaDUuMqbUg4CFMwi1KnXwx94TUQ6Zb15Kyfcy5jeZYHqVgaJEFZitFvo9bMQfkA9518",
  "key25": "2WnEMzv3gKDKRSCvGkgEzGQA2NNGFQw672XT5hpphFMEFki1iJBU2BF6y5K1NtAjqGhAoGEsSfsTYw8Ki7aQUkZ7",
  "key26": "cZP9Q9WsL5PbzJf2spc5JKqmnRuY3ByATrh2k9Hy5uVDDtCNm5NQYABZ8QptoRvKU9EUuydQySS3HwJMePf5i64",
  "key27": "5yZQwq5kHy4c1hnmKz9JucbU35txcLuWYBSpVvrZqz7ZJKeki5bWhiCErc8GwmmytGhMD8UgNmd523fttc4q7v9N"
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
