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
    "4tyFbZ2cA9x8C8KNKM91yiU6qTM6eUvEXNqVVibgsy2w36wyDT76HbmwF2advonckLKBFZHHidhesniMCAowU7LR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LStnxjxEq2L3jn8E9XjM4n2zyxFQpvpy43fg4qSognt77aKNLSeAeEho329LCF9kFXTSzq44Zdm4MbXC4QEpWXg",
  "key1": "FU7upwYJCZminhuT9gGs62VNBzgiGeV67HYAtkLb3KaTnoXVt7F4iYzKxUvVj5zva84efg5B79TYby1gXhbea6q",
  "key2": "5Ueq2QyPgQ5gWCe5RMvWu66Zh3bqAoGUC3Vo76QdyaDNGen2XWp724p8DpCJK2SvDgN113LgSysATgF2CmWJpdSh",
  "key3": "2b1mtqKLTcqg33zrAavpjXnN8o3nzjJGM6gjpThrYbmb3bgdvQmLUS1msPVz2rPz6wpzudx1cLNTu2w8yJztBLKx",
  "key4": "SUjX4G3oQQzB9wNXCzFyXAESiFz6oTxaZEHZLLAcuwjP8uwCrZqcmtEptFkrseA168JyRqjtLw5kxuVqvAqL5wR",
  "key5": "3s5NKiprofsuv684hFvrJy9FoufuSiyjaHvawhfejmThtX4JrQw98XrjCXbFkrY6C6uCKrhWdQSVAJTNNuZmnCCM",
  "key6": "5TUv2eyrUjXJaZTgB6TaCAwksiPJD77hpg1yNXWTTE68zQRxwcQ8Hcwbt9AqnFukWEVUibqCYPhi6PLzV8kvFZ2r",
  "key7": "5uMei78gjptjpR6WeBm2Ryzsuxk9WdcSE61cYMcS9cCoXdTz7iTRQssnaUCTK9c7n4abKrhC9jtvfn64uBmC9GH5",
  "key8": "3mXQ7NMdjEdLBnUXgbRpj7mnHzYNhhaZhmhCY1YdDKdjogLwxDrFPnxHvYhpEkJ66cjQALJunn9W9XPB6BMcSytJ",
  "key9": "392jn2RdXCEkU4GVmbUoVphq61A7REhGNbiQY41fALZXPhpaVYoK2cV8K4zT6nT9cirGeiW9x3kfiq1NaRf7LWZ9",
  "key10": "4jBgiBxbQwQcgj62sADYxTSBQ4zRN4nb8WcQnVyNrcwoCHEGgRRxkG6j7aGmUp1Q7Wf1D93uQdMZEChCdM7uEYW3",
  "key11": "61i351y3so9LFFZuovUVjttTTbHxJP5nnay16aqqvFeQ6gXbJtpadTojxDPvfg8qLW1qQ5irNSF3ErVyFZiMkzKy",
  "key12": "43DCPfpckwAAz21G6oxCa6hpzeJmSyiMpxnbcG2Md2xRjNsphSPKA9L3H1Whzqxv1xC7aQyfFeHnXKRbwjUD2yrp",
  "key13": "3LVL7AoQdKocQqk3TKRnjhhfYLnxwM4mtGQHy7jMjQ7YqWJBJSW2G3qnzvg76EM9FEnXtv5rEUz4qzNPRjV7gJao",
  "key14": "4B7ekkrSUpHw9zRGSQfxNwq5WQ5if2zSAaPapv9ujvvx9GoxjoA2yLWzpfsZCGjM2Wuo8r3pjvQwz9g6tW4WVovy",
  "key15": "3yJjonZ8jAR3BRBohuJrRCJCpbtMgYFzXCwwxK5ByVUGzawpb7rRcwbrpzEME8iPfBKLdvzmsmZ5tNf4VJ1nyURL",
  "key16": "5rBGrLxGStMriuCBcrmzifE1pwhJjQ6SYZAWNRaNMFNKYWzzJrihZ4FPVkf7aN8CxowYT4WiWp5Kn6QuTjBRNxXV",
  "key17": "2vNWaiGF5XTo32hYN3FtawJB55Xwdccvm6AkqYsuKccdbQgLyZ4oGU4Haa6VtdvaJpBeoBxuho6qW6w2JnXe5Jyn",
  "key18": "58MwNyJRHRMUsd2Bk9xLLbrvXyFVCjZD3upFoBDjkuYV4uVf57yokY2N48Jo71CPVjt7xWRznhYTGt5Wxu4Bbmbr",
  "key19": "5VaptzXhjiNGuW4pxMZ7aB5rKmQhzYthNcuxFrDmP8fWzvv6Vwtiwi3LtHzfK3tkLgrUaqHXZEYprPZFeL4nNUKq",
  "key20": "jKqpCG1k5aP8WnjfLkQn2LmrTgRRxVd8HE64p78Ja3NRB7bsc8sgRReD6SWJ7ZXJ95eVPAqAojP8YXyTscE2BTc",
  "key21": "5iTWov4n7dM4VEroszrX7FS1WJsEWXvGYAMuWhcWJ3d5xVQvetw58DnRhMbWndP82nXAbE5GaGZuogni2qhzPou6",
  "key22": "56HH2eEdgNVBQxn3pVZT36R4KL4FQMngTsxCNhEQgtkVSfh76rVbztA4ShGKBciPF79AhncsveN5vg2gUnbFXXHc",
  "key23": "45DTT8Wdp2g9T6TQschb9wVWYEW8anCtWdfQRofBr7nYFvSgqH5AY6GHihNJ5Yij1GzSsLuCWFeqqLhYVotcGRbU",
  "key24": "3m6gn4U5SKwdeXysiiBau1NFDgzxpNWqdoEEdeA7u52DZ2YoUb2nDD6RSXTBEeHq4s8gDkshFsP8Eq1k1rH5JxmG",
  "key25": "5hnLv1zkx2gHnkB4JcK4oMrDEPSd2YTrr6VKkBW3phzf3itN3ce1sK45kmqricbfphZ4bsdfaVgDcNV7aCj9uY5A",
  "key26": "dceVXPHHdb9dbiJXXKyL9Psdhb4uTjQeehF3Y3kwrLXFwCrTwxycMTyJTRLDz1TkWCjBh7M4jstv1CiZeBUuv8U",
  "key27": "4NJwQsPKQV2P7j5iBFZbH6gzWJy12K6MmYLQgfJkUcA8ZU9y7KhgiD7GdCQSaqaLqAoNQNnZaM3WGeywKT1CygMC",
  "key28": "2cz2qGzdbkbzsSTsti5PaDPLmJvQCtf1RAbimHdHKS9TjifYKvyWD1RfZa3j5YiGanSCt8wGrgyy2upQkG9sre9F",
  "key29": "3BSnBRJvwh7L7xbJ7qREnfbAGqPysbRcb36y98wtcjYDBk7UrGMtAkjqPZTpqYjyogvfvZT8tPuMT5sxWWCq9269",
  "key30": "3tHT3wD4dQ4RoPRxLa34YoK3eNSsEw42Dg9kgt2i7vZwSjJtZsUJYCTSgbMEepfYSCYGMKq8v4GqaGgvT86Sji5b",
  "key31": "4oPTSpePRbPcsiZDbQk9PV6HGBYGbJk5kwxod7Boto7yRV3nPJ3nMxg35au9xdvCFRMbkDFox5L17kRdBdJHsPvd",
  "key32": "4UJNMdbcgHpWU8vrmV4VLkzMdQQ1fAHFjVSekjMbYxXgN38W4VNZWXexeN89ZSzNwBoZw62VJ3MSEime93KKfsRE",
  "key33": "4Nri5yPam85n5fxMqzDqE2ujqbdduBK5Rx2TEmN9fAAbaTeyc4G4Uut6KgfjFFC6j1KPUBpTKnxBC9JEkYVVTGGb",
  "key34": "4ZXvhsHtPYC1yfZ4xXJ3goht1gSfzJQUf9BzP7e1MNr7FE5EfyrcrtvAHGyRhk3rj4Y9A9zpdHuGH9TWpkJinUVg"
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
