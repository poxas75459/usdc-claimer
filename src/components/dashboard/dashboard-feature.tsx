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
    "aw2k7sFpxWFZ1TMy8hnTDPeiH2HNH6r9hJ8vZLFPmTtT2zKND1UGtsw5638omUKnWJA4FWgjY1avwVXmEgs9kc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J7fJE9feYEwKLk7zRLSRE9W3KkC71y8LLg9n8kuY11r3YxhGbvTWKyy8qKXUHYFUnvnV88vVFhWZGNt8V6VeTMd",
  "key1": "4eNiBqTW3HrZtqnCsJEsWcp7x7wJ6txgeTJSN6SjtqDgayMC6tTwLKmF5PcPPt9VtStRyyyx6wVNM5ySDHT7cT5k",
  "key2": "wz5GCmt3tjeMb2mNBNu4ZYQEi4XhH5CdRsh8ZCAa6Qk5Z7AS3scFzNEHZz6bXskfBPgqdasArFfj73enwuwxgaW",
  "key3": "4unuUJPkdi82W3fcKHWDc2FY2tdhFSuCWJ53C4PdTn7WocQZokwW1C1BidoHCQrQWMaNHq79tRdYcZjXfp3SyHff",
  "key4": "37uuy2TvvpyyXZUsfunrF12FMNr3U7msR7H3UiRPHGZnZ4szw3JF7XnK7LGnvqpXsE57tV4bBwXaVtJCg4DGkAHC",
  "key5": "5q1TUPsZnp3kXvNYjUiKuUTHqMXX4TCUPGnY93AdZGZn7fvxcXTty18nWK8SKfGqa3DKyEVfu3ijqBnESqidp5Kw",
  "key6": "3c7XiW6gNJwCjxhPzERrJoTea3UhBTRzXbAsNsRPWjGAob7YLdiigqFLxbNsEhSW3s6hHQvVUcBLaWTgpSXqi6F1",
  "key7": "LtXqKVqC7LG992cLmf1KfiYWWqcXfyt4Yy1RSGVvLv7dQ3HWLEy9druMx6oF9YpcebyNda7xnNBLxCuy3Jh6dGr",
  "key8": "2qPqUbCkmTqDjGXyYgFHvBwym3QWWX5VsjyqaDv9m7U4KR6uvVXjgXoCLwXE7JR42SA2q9M4dNQviQgTT4ECY6cH",
  "key9": "rTtgiMrt2BKx9o5CLxUasxE3zMyFCpdZBCrkAwx1stTkjovg2tvYRbgKzVVohRTyadVJEEtfARoDYPMRAizJ9KH",
  "key10": "2ETJeikwoSPPd4xafDBHg2L13DKL8XRmFFdHtr3rQVoDFB9RdVJbGRUpM5KzoF6YS22JFe6iMveV4jmFSuGynTj9",
  "key11": "3pfUQuUj5qJBwuqt3zHHYd34XXkC4ZjkppGUF7B43omeXhqn69BFK9F9zKdWdVLrLX8AHESLAFeqww67a1zHrPcb",
  "key12": "52T5TEWYWv1L6FZ1TwUJnj5XphwTnAMG9TvUyDiPxyyjB43a9faPBN2bMArnDjDqE5GLj7RQfGYSwNWxqtYAzHbf",
  "key13": "5TVPJcRSQzmpoLvwxPHfstuH5HMgtxcNPqzZaKgeFRQUikHLUkcSZfeDD4XN3tkMUHRtMPKBf66mMFQoLksEiwhE",
  "key14": "4oiFXauBMiuT9PnKD3CGNHntmmXJbusvPNaMWAaGvXnPp7V4CxEhEe2f16doBzNqdbK95VKR4s12oKZbeYB38PNr",
  "key15": "34xJfjPBqSwfQw5N2wh5N1XU29CyXaZ9sPamoyWHx3wNyPaTyfKystPiL2S6ZLRMQwJvdfm15pwCBdcW1AfTJssT",
  "key16": "zDGsx5sr58hJVjP4TtnBKNy6aYSGRedaQ5AAP2TAye6fYgH47p6HrGhHXPYbT8bkbsihtVeKEaUAsDLsmUm14jR",
  "key17": "GNfGgZj1Fv9N85N2wW1AtTWutjzGgspm9ztq8BAiLkr3Uv5fbZ9ZNgKsJSct941DA3fm7YKcnAJECemEZuYo2iF",
  "key18": "8BmZ66smmuorK57hTcbNZsJHACvj9BbJihDtkNRmGymxWgeC2fyoZ1cZZJa6ndTvdKxueMWVU49GUoENy5WfCMs",
  "key19": "5Gtsn12NPE8ePDiFZiSW23Rm7GKa4P6ZoaFKRQB24bavqqW2u8M5FLgU7n5cEjp75yPNokixQsmt778ZKD5f1xCn",
  "key20": "2Af9PLS6jS78rWXs3ptDiUSdTSyc6djaG9NcBqSnkBW8BFsFHxmosQMJ9ZXeh5ZZJvnca6FVvHnhPzBWYSjm4exL",
  "key21": "478jNc7XTFqJVqNCsfcwTZiHJJS6XeA1qhQAMC758Eye3xtni364nzJLotnMF9JoqZrk3xg8S8Y3nDEJuPpjNFCq",
  "key22": "sL3mJNf3beAsZbx7JM9XU5AHqBQJu3MVjaCkp4tqD593mDYMmFy8a1474FAF4LJhRA1iJiuKaGwcx5d7ZDiuEkU",
  "key23": "2z3cTdnbBoeb1PE2KbFNYL4xgSwqg6U7KmrEu67AhMWpbB18VnP5mkhnwD59nzdfM1mv3an4ew12L17VZAEjCMrQ",
  "key24": "aV3cMJRwypXkGV7UTEzRqay2mJLEUfWgC9TejdCYv3faTgZbHFNDPHW97BfWL8KSVEeqbNeMfnyNeG3hPrArygF",
  "key25": "2QkDuhqbHxCrKnFXu9eUCh2fDHGVwBYvUtbUQV79WMLcH2JhrZCecVU5h9RZKNGTqieuuoXfYqeEwF5QK9YXFruW",
  "key26": "gwUeHkY2jRRTGue4LLN2gExYJA5gVrJtXu8Pq4QCwx8NiFwJVdDUVQ3GGewNSkienTfziB93FR49fJuJirXTqKv",
  "key27": "3BMZJeAdbyPXyuLyor1DtD7qTTyP7dz3rWSiV5Vyqi8xARTRjBvWuWAAuKQcCwUhCnUm8oZWqrEqNDcMzzyJ6NaY",
  "key28": "2h7ZKJ2qKeBsm5ecJS6Rcg1C4q9jJUmb7qyCDde2cMxDBprX2YWnpBBXfigXtobHxc2HRZzUDw4M5QdZV4dcrbpn",
  "key29": "2JomqwyksJKpzYAbWqwpx8mgRiDzRH9jHKxXLRBqoGZD4R2iUJQ29TfRn9z9qcQR9EzJPQJhPFVtreTHbZeRdYos",
  "key30": "2caXkqRg8krgpLxd41VoZRRuTWszWoeGyNAXswhFCY66B4gSwPn1tcjXpNwywBLAMSUWCG4sg6hbjspMqMzvPwyv",
  "key31": "E4V91HuV2kxQzQvAbnXNyxrqkJkVvs27WjBqnftinPxRYjxpj1Fq4VZSnuTzvnRfqFymngzhyzL5GvVu2GZaYPJ",
  "key32": "3UeSLNQYH6h7UpNUsxYAv2CDKB8fADS6a3Z7xBAvozCqXqvpQvMLqTfzpsyvxjG5dMofW8HGdLGAHog5nK3S8yhj",
  "key33": "3ZdpBdemPe6vPRQ3uVP4zuthouQu6VLt2w7PYZiGBaEA7k5XaHP6h8gPTMH594YoyJg1vuymHmdwJkw53NujAPj",
  "key34": "5wdvFpr7PR9E3oiiroovJeyHRS4ndjwr6knaBb9hKc37byUYEqqiAChoAL94mKMXNLtsT7bThfc7yf6fs7qH21S2",
  "key35": "4YvKiebqn36dMRzFWUD8q487VA6PgB6vrUYQuGXFQJ2jrX25Tb88E6nepk7t6Gson4woHshuKw3MpAyqNkHfjJK5",
  "key36": "PTEeLDQNDNw6za6yKvwCL1q2M45ig2V4gQ6ya1xi2J2zLfY11qKpSvws2mk1tg7fU9343GY6BSBWLMSAXKGpH23",
  "key37": "5fimhHvL4Aoiwt6AiFgJApU2nJpmRUbpYwarR8VcdAtukcEEYxM48MEzYSCpGgx34MtRWPDKNADBhBu9JGqAzT6f"
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
