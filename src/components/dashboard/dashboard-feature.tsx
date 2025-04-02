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
    "346TRRN3ojaxRh7cy2dvueJmMt8cfF1VCngLNB5yjNdhNX8YzEzZVHZtWrPqKQeiooXocVd33NjwF1EiP8PBexL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tpu6vmNjMwJqRRtmFJ6p2KrfcKSjsdNWKgjwZpyP8eU6Egb8dS36r9YFnHGoZao5onHqTbt1xTUc5baeSAGzio3",
  "key1": "546z9J5npU4EXu4J7JeqNisZ1BoPGdstjpwNEuREvfL4cmCDhoTk7HcNnALHHfvp3Y8NkNPscBf5ZBjwP1451kro",
  "key2": "2dWPLytndMTv5qJ1c7PCznH4ufFqA5EYQaA6wg9L6jB6afZnbB4DKNdVnoHLxpjL4sQDNZEfa3Enuh6DVMsKBdVg",
  "key3": "2cUMZa6wZzyefKYh7cMyZkpUgrHoMuoWayf4Lss4kCJeadRRgmExzPN3hs7zspceyjvYuFFdv9Ymh2mVJfSuXDdx",
  "key4": "4SJe7NtrbDDj7Lm9vi2AkBJrw7gYHnpJ1Ts1n4UNxNksABRWZH5U6bW67naEhrpabzfFodu1ZfGXmbaCx1bxY5wn",
  "key5": "3jftuGYjZD5u95Fe85qNU2SYiTzJ6og6R6xwUrNM7uS8FJTvntZg5thhGW8nt5mEueriLjb8zjcZbKKxTBUpwytt",
  "key6": "32Vr5duuRNDQcKMdxKAhcSf986kk7NXDUgGBkwk4QaBcAYp6Zpx5aXw2E6Euo3dsu3Mr3LYB21AFmRs4wKNyJJYC",
  "key7": "5LCuhHMBdzKP3N8K1Kp6kGBFswr5AYaMWDfcicdJXM3kg5QAQ7NFmBNJ6WVMDcUGR3fLTunGXtkBzt1HqP3XNEJV",
  "key8": "3DNRCG1kk9NW176PiCZfyovcMTEb73NbY9toK77RANwSZUAzd1RyyzePvNyMe9EjcTBG6CK6ft4JC4qKoewkqxkX",
  "key9": "2QZ8iKLdoQMHVH6pR6WjBowGFV9UsFW5vKH6bpNyCA9SiUPzXT3xC1RUSij9QW4AH4V3TjssrhxfsELEeig6GSQp",
  "key10": "4yePrw4VVoJwASFApB2keWERJFqeGBdhPijJiZUGmRJQBqtqrgtXq4kqUdy84NCnayR2ACUvGFbwZeKeL9jSUeyy",
  "key11": "5D4o5vv4rwWGSrvsSWwKbb8wr5By21yriALXunGPm5apmAanpcE9gQ2HFBAdkR6PE1ZBDESpuk2cbdCJBeDEYEj",
  "key12": "3KpwyBWztWYwuxEvNheb8pLeAZYnQ9gnfvm4hNdpXiaMkzzc7aYmCXtQsGawUcLt3dYx7Rdek5KTmMkigY6pX3W4",
  "key13": "cQ5YYC88Kfsdf4moFq8ssWTrcEFf7Eyx5RWkv4woP9rLNc8Bfz4YyG1WpMhBDbDTHZzauHaLqXa2JKd9RvpuRjm",
  "key14": "4nisH6PovzhvQS58KWx5sf5w8ww7LDkxfEfJDceAZmC2h8ur9YtYQ63TmAJyWrKvQrTnyg2fk9iiiPMwBt1zruhe",
  "key15": "4GddHYGy4CAXBFY1RgjuRQaqfoNhA5EYZ8kPh4ka7DpG8xKHN3SGZvqr7FjYbRw9ebm9cUoLDCGRFcH7r2JUJaVD",
  "key16": "3C1NfndxjtQkmzDz6EZRJzd8HYFmZnzdGnqSJAazLqxs4AyCtQwvNMaafjfuifA7CH5BcsD7nD3idwtuvBeDHwpd",
  "key17": "2t7JEQouUrca7GPX3jxBq4tgrgEcf35erVU4uHynAqvbRohUi6QbJGKcCAiapfBX7CJaBttbcoWcPK5bMThDoK6C",
  "key18": "KdknwDS94yk5LykMw7M5rmVrZJRSHTYTnvZsxBW8RgawGfhafGwdnaN6cqK8wcyAMXFRRgp4mpGMusgp8iB44X5",
  "key19": "42vSbKYG4gpDEKqdN4ZNPJAHa1cah9wpXfvGVB41QsHamJgDmFAXkuadrRRSazT7enCi76YvYkRGuq5Fv1nQDNWT",
  "key20": "5zqPpGxH6Vz49AA41AufFwjCuedVe6ntbnUYYZ6px1MTrXjeJWB1XyPagVYbjk96tn1qzxarqZir8FPMXCvVgFj8",
  "key21": "4r9hbEpjnMvgfEfc7MmEAyKWfHcyGTYyspAyemQaZ76rCnScD2TyFjzKNqotPy5ubcxd4otdAwz48ZaUE564nmtP",
  "key22": "5GMhehviK7aKETXpdjeaWiejhqMwVHxnEkbHkUQqEaeUzxZnfFs2C8pMw5d6NW6nPuNyQ8re1KJpRfr9ghhdJWWb",
  "key23": "3oCGxWijt2HNoYvkMhCQXCt7ZsQs8ZP6EMQoC9iDCK6NFkAUtyq4KrD9K1X96cwQxnMYpq5GdG7CnxcphJpk73H8",
  "key24": "38nbstWmVWSaG7YPfUkjHURziLCiCJjc1qby6UTZaiTJWDFh5418i3JcGiiSxRg1YaL8mdQPp51QR3mUN6tgcmHD",
  "key25": "a22FS3mh6Br5X4QmGg7DxrwFWm7gksUdddXX2VHbMhMKha37bSDsdMxZZ9aG9CEVZMCbXeUte53cgRZSskpVtX7",
  "key26": "kEuEWseeWmcDn6pfJfSJYS6a8RerruWjwetX1hBq3Q58F6gFqhoUTbcBKgiRyet1WLCuVDJJjZNugYFcwMwHfs6",
  "key27": "29852UNRwCcKbrd6DkKBZAZdJS6E7uL513tbcdbSAhCeQMGLEuw2uUAbL8RKK6jou4y7TKsuSfFtEhhCNWwEWUAH",
  "key28": "4teipssE5qYzESo64qTtFEm3fEboYwm8mjNgvd3nAF2cHtCWg5FhsHuGADXpn7eQTkGH6t81oe7FYJhMaQyuoS3k",
  "key29": "63iDcyuG6qBuZoDBUTs6ve3r8oxeaRsbSmHRScJFfVyFKYtiRoLGmCFZxXfao8d9edCeMkdwFGjCRKSpxtpdYkXY",
  "key30": "126fHWvSLYPcdDk1LzSiSuAnGv5g22NntvnkSDXmpUAu6b89LHtSouJjvbX6nhxvFbzK3tDFKitZLrYd56gTJp1j",
  "key31": "bKRDc5sHd7KSegJk9nXfiDARym8pRyFUy6iFaFvez7uDhd7JYD6DnJsJ6LdpTdjxuvy2LVgc4oCM4ZYDX5KsAEo"
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
