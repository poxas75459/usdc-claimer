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
    "511btqZMgXB8Nbb71S1UjuqtsYZ92cUY6r6NJtWBX93YKoToriDtspGR23rE57bVVLwPtKjcbd72jUeur2BVtfe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sKX7oe7kkp8GYhYUSgW72aq1iffWT9Dzux7kxm7hNLrT77GMYPNjMQzyBhaAFLWDfP5WoA33XGvZ5keJZqHbwqB",
  "key1": "5TtwK1RTonYRdYMNaJEn1tDjAGND8w24JRs29Ysgk5PX74HN43o45eKoqUFWXrcTNHrQq8k5PgEKCtA7Utdixmr6",
  "key2": "2yUpqs5n3dqbkjJHipJZeuPWrKR2W4CLdKLJMgvCfRF6V5pPsi6hgw1Qvqm7QoTxugEarCUrdiUq2eFzBXdiVs1M",
  "key3": "3VAua5kLLniuVsCQzJBwSFMVtrU7rd3tTYLZ7BHN5gpVrT7w8Yu2u25HDY9rN3HJu2icdKWN8Qp57HKK4pyY9YPp",
  "key4": "5vo1M4wxMkorgMWrjNFAeFgQpCaZBidVJaMSw4DHsh4EwPGD7VtZNMUT6uRezWjjBgGGjCkzpVMpEccMjpS7t2qU",
  "key5": "2B3aQKcgMi1UR9Bu4MHv2tzArbH6iLhcDPmSPucZkCrKYoPbgNTdTHMrAqoiuofmNRwBEmVpzWPcYkZtg2gFZskV",
  "key6": "33P1cLXrEw1TwjzSZiJXXKwyEcn6gTJWAnH6gK6moTHqqWRHg1rG4t3FkLcHYKRutFYbfAJtjp2r1m3K7xLcVuc2",
  "key7": "4mqf8Tjy8obXJLayEtnENbZBYraLSe5an8hmYMU9TEuT6uPCSnrbWa55m4hktB4orvnQwFXvNN7PDYo6tswVgu92",
  "key8": "2zWjB5qPqGAnvfxuCdihFJ1D7ANM1PDBLtDGPBFhNJyQ2rj8vcEV9txj6JkceZx8LtYLLH3SiPtjohWK1bgLx5Nt",
  "key9": "4dhtxP5QjS17yDMp25vBYDkjAG3xjB78dzNGzgLrrimFyPpJKZQpb45Pfu2mL6CnKiL3BiJw9PLVcoLjhfqJmM29",
  "key10": "3NjieiW6prPehMxUfj1htRzmRiueWYmAq8KLPwxKPj5WYtQ4o8EibpqZfnMxXag1KDfVpmJudiUDn9hwZo5aTGCW",
  "key11": "4rLkzMVApNsRTBcMSVMCQDRKFf93jcsB6cFPDcU48oe7icHgfGacerFz1nECRUBPFV59iMs55J6YEHNaMbLncaxC",
  "key12": "3h4gbbzDRJK2ffibjEovYepn6iMZq9BoJ7y5jZKpD4nqxHh3DakTmzCvGEjLhqsk4SWjY4FifpL8mSxay4v5r2WT",
  "key13": "3v2KQWnMoxcMXcoFjRazDmXEG4q4xecdwxyDwx39GQKMNVgfds1SjPumuxTXGtTWnqLQaqtdVrYoVFD4ATMnVAb9",
  "key14": "y3e46wvVgjdwRNsMSJ73gKqjeZWF4aevRZMcqPGeMUj1AeqmVqEEoU47fVAzevnw3FLhwWvx5UwiK6AJW8pScq8",
  "key15": "3gGE3fd3gC2ZaKZnv1aXS6jTKB3HxLxvTLo7QUsbQiFrCtUkKvCLHw8cx2gydGSyJLzhoGzEs7EKGUEsAe91792t",
  "key16": "2TpjX9Kw45ap7pdgMvhuDAquZpBmDwMzDpMjkjxerrLxChchsudFtEtnmZRZJPcGNzwoM5Wwcn7ev2a3AMTtDJyH",
  "key17": "5ckbWexoj2t1qkkHNLd4dnu5g1YkYNwAj6QF74zZdv7dtr5rN93qGG4DZPBtZkv2HaQFBR4ACqEf3GtEzX53foyx",
  "key18": "2aK6r9yHzMvvDBtE7C4jGtrBdkVKJPiLKvm1mf787b3RcADcBbZ8hydZNgHJJyR4pFyG1o6LfNywWk1duYTFWRi5",
  "key19": "5LiVukzq8mjt5jZ3JqVPvbr8zxU7aHGTnZx7Yartms5rXxQ5gkFHYYJE37LZmAyaTFsxN2GAZ2cxy21EtzK3S4ha",
  "key20": "3HUyyAPVcuLyTPnoHQAgkWUjcnAeTaFjgJPnnV9kxQXwvoBj5CgeGdu6mfhy2kttTPaYJhBiJEDwd7dzrSfqyiUw",
  "key21": "3cJ7TchGBwEncR1nUKjy4w22QqeNLr1pCSBVpNLmXKUK6UwbiaNyHZsFfbJwuJzDDwvvxog2GY46TdyVWPnAmoq2",
  "key22": "2MB3y1jS1iTpVDPD3uwwfXWWTS2XP9Gnf9chB6b6pabAvP4xR3n4FHYyYCRD4MY5pa6tSuUWCLJmnz8DLXZqxeHt",
  "key23": "5QUfoCLgafnmmYTZt5oXkYGTSe6pKUmsePi7EVU67GCDJBfstNMHhm1EsTc8W5zfjBLaY8pe9VaV25G6CqUvUbB1",
  "key24": "5pMY67vf6zQJMeT8gq6pVYNPhwxnkSZYYABwscV4jmfVDGj36vXQU5Bj8eah18XWrLWD6ZQHfmQdubVgxJRxkHN9",
  "key25": "2meJb8aJQCLZu1V6nBAZ9XjyFMkGGvdAEP6bu3Sid3dZ9YFWh6deNRhVfZvAkzhztCkHMeJuJc3Q5Gy5XBmFccZ",
  "key26": "57LLroSpTJMbUkBoLaayWJMQZq9nGdxbqWC83Rfvsu5KY3yzzyBAsEt4P9hn8P1bRA54Aoi994C9YV5FHE2zCc3U",
  "key27": "3wCQXHteDiyaaV7gJAq8cqXqvYYPg8xyq95AGaJdGpc6brMzoAh66xSUMqX3rTCQatiLj14Rg2bG8TSsdyvXfkUQ",
  "key28": "5JVqMhyT4cr72GNWJtzDEJooNbVCPkE91ou83oQCdEndMcvWMkcUUBEUnjqXYgZdaLLXpqAZFBz91TdXqp3J7mPm",
  "key29": "DHCqF3qbyUmvPEN7Gj5ASu1a5Lnu2d9h5Gy4oqB38YVNaasR3CDMt9on2Yp54cAPCXY4KB1TMeCT7HwEyXsa5jU",
  "key30": "T9eFZzPvpNpZ7igAPBDewccgLY7rY63gLhQfacpbw9mDG4bDMkYo618bHxcpAzzK1o8sD4MPLVMdJfime5RLxvc",
  "key31": "3snpEym3QxsCuVFE9NA5Jd7s3zcsCpUuHUmRhMNmQTQo9W1ri1Msvyc9hQie3XRNDaHr5MApDGGPwUvgTporr4Uu",
  "key32": "bxXJ35jTAKzLtuCewWUUYRU8XV6exArwpHHzMBkFsd98vGbjeQPVzA3DMxmgKqZb8bPeqh4HiT2bDEDNgZ7itd5",
  "key33": "5MuKgk3J3ZXwuaXg5zeSpcqa73HdBzRf3DnpiqT37XJzQtwM5ZqfN9xRhkhgCN5w2yu8f2usjH64uLkmkMzsguEU",
  "key34": "36x7mMdDVZQmVmCpNYCXJ1wPCC4fs57Ht7E9ppk325NNN82aNQwvNQcFLGx5dgALitbGUZncxNg7kLVu7TQcxURD",
  "key35": "4shfUujGqn2gumjpMsbsgMVp3ya1XD2F4wCfDVxkGCbBuKpfADo5HDMPv3sSj6Nz6ddXwfxwfv6796mdy3NtNFXs",
  "key36": "3rSEr2avpsRBXXtW6ZfNUkMa14wBJHq1SboLFpT3vev6tUx8mXvE1dsB33uANPiqnFPyw6UhtVYWrikpk5mkNF2T",
  "key37": "zECBNCJivesBBLFEWS7d7guAX3ZxxsSPFmHxAGY2EHNA39Rmy9d6unfgH8jzPbkGwWaK6i4gZt4ispo7oKQ51ii",
  "key38": "5XUFezN76S1pXxTAwLafWPm55Lgc7m866vwQDHnYmmvBPqocf3S3MZBtbagfnb564WSCKRTu7N2Tuk6MoQwiF5tm",
  "key39": "fx3v1GTZt91ip24KpGwFtv9u6qRKh3keNxBgCuVBm5aqNQLC7YP4pK3ScDBzKamRkNYZDAYKKp9XjaBbEvsaUmH",
  "key40": "kmjky7yt3KotEQxtqJq6bbDDcqk2yKUzJEToZWheqBeJxqqFDGpRnofTQZvwzLCpyt8LJFNyZr1on1m3UvGQTEP"
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
