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
    "dJHod3w6F3qTwhbNHqmrrGUBsaNYt6RHiseZETrquXCARt4aWab2F6B9n1F9ZMASUSjqr7JseeS2veUD3PiJ3je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BtckNcDe4wBqfd7vBGSb4ckskoff3wq99knNW29dc3mdSL8oGGs5iwcYS31Ta4wvVZuPN3Z32JqBtGK19qsYHo1",
  "key1": "5aR6b2rtKr842tuDRpBqqXZ9haZtV1euWxV37bChtyt5pbpWmCqXUVUAtf8ojXX8DSsDCyJGyuzFmiCeUooVbcaQ",
  "key2": "F2J7NZ6CSkAyySypDr9xTJwW2ipQo8CyFhVNQNf4AAtF35e1QgmocB7sftzVozDkDJ2rycRbRd8yBo4SZverx9L",
  "key3": "RWUV1j3rxAuNXAtawLbLZp9M3yefpZ28nqdcvxkRSvzdx5V7Kise1jDwbo2PPDRQC7aVAzwCH5mbRrqoT6GB6B9",
  "key4": "5nMP6UhmhHHf82PRewvYB7HupTR5P3hJMDchWRVEzqanCa8hwMvTYHJdeDXmZYZ6LjAP7ry91665Unj2Rfqd7ZDX",
  "key5": "4pugZWgvhtcy9WV7J9oBELRqEzRGC5UyuudqQzpMXDH5zSkkqKZXozHAvHB3oeeVqPwpTTWh1R59T4J8C4ZGVgJG",
  "key6": "62yjKehUvS2GFdUVuC1cn5aMvgppTanX5CXxQ5DhHZ9s5aCUWUeLjSDjfSCmaf4vbz3YBKZW2radgiKgXV1RnH8H",
  "key7": "2GTCx7QutRi5s2KYRNfJ3yDwLWfjTQHkWtaVYAYDQnLBN5FCay4bPBkHxK3TBJT1iRBcDhQvHn8sBiPzLAaKhkXD",
  "key8": "35qsrnWESUvMXudEkYVY4coWqufuTVPumXx66xT8RsPtcQQojs1SHs14Y1BDLCouTGLesTLGC118SfnXDkTh9eo7",
  "key9": "5zARoiDRPHhgDsTyMwk5pKAVZbvzVzC81BZqKvPv54oJGirUJhot4jpj95Ha8aDVvcWN1DYrDEVxEaC9kPqqsai1",
  "key10": "3kYEmp3Bt15UVxW3ZnXQaGiAAWMSBuNbcA1zXCgysPsdGPupVpazk5e8mENXEJf9TaS6RwHdhQHBN8EC3pk7k7iU",
  "key11": "4hc5v558fU2Bd1497BsXyBF9DmzCja7c8DW9dBJt2ATsCbjR8sJ5d3npCt9Y4G1BQXcpJYRqFL5Bw5y6swKKsCWZ",
  "key12": "49wCDGbL9mi3jofM2ExJP5aCnkGfP6Mm3wrrz2jMDJ1jAHwr2g6tSq442uyWj6kkiLViEUqSoLBHebDr2E3WKTu3",
  "key13": "5frJg9UKWq9vvfusyyuVqxQZURYw4vrJtfuk8Hm8ttB9a4732NKf8nzg6TA5FaK26pUpK5A4a2hsrPjBMUcp1YBV",
  "key14": "5Hqm6p31uou8YAb4EEPaBkmfUhDHAkf7GouaGosufyZXeioSxwmmAgsBygVKHGZrNt1j9rfzQmVMp7omwAPSh7oV",
  "key15": "5zsoZ9FVtGmKdEtHiHyrTsiBWnbV1rd7RmJE2PRoASaTHUddjz5An2mKGaoo3znMM36BvAfJF5yxXHFW6DjdMxKv",
  "key16": "s59JFNddEHqNGqcVvtMdzrywYheKxiFWK2zLunrjf3vorBGk3vcBVehn7mp4dcRtszxh31Jh9LgP3J7MZ8vqn4v",
  "key17": "5bf1CecE4HMYKcwXhLaXsJMwZNxtrbABR6i1GKE8EEWZbHPfLbUweiHC3T7WSg9Da9xp2HfZ5LoSg5Byzois3Xqb",
  "key18": "2hrt9qpEATbtpXfsHv72Hhe8UbvxxurxHjutR9FTRtcPoUEi2epW4mu5NH6QAPPdGA6R821YgdnXTvWfQ8gzehw4",
  "key19": "3JzQyJwoegaChxNunRRBndmyh5ntDawb5Mc3qG27vvJoe9zGmCdbUrP9pA1218qmJ4La8rFytscdjfovy6Z1aspE",
  "key20": "56DXWziLDdj5hSiVVnTMqzmkj8BsDnsNj72Kj27A2Q8PKFF3dbKSw4HqMmD5YXx6WQzyUJUL9yy4N7ig46czNdQM",
  "key21": "5A9VSfb1DQ458s4AaxgobTwe7VCGNUepD1zDue2iwphbw6f361jX7LA7v3TzeXuHBAEXeKdP7WhyFsn5v5M5PLJD",
  "key22": "4nVHYxeyx5uWNwvU54fNz9a8AKMWYhStcyrysCmZXAWFKx766LCdddAU14iZUswevx5nMJ3Zwqbq9ULVf357BZHf",
  "key23": "2yJ9gLvj42hehceaici2yhECMLVg8hqKizwKEaknFUAPYx6tT6JjRcvBdR5eRPd5SG7wESyCa1JG9wLG6FKkLs8Y",
  "key24": "8tijn1Zatp9FPzDUx5mW4UhgYdguBzuwec9tFtXYcApZqdfZP1QvT32HVmBBgnL55KzRaaartdW8qgLw6ZqN9Bn",
  "key25": "3gFmKAgRGBNpBEfPGqqUrBnp24JbjKimwygarnNLJ8pw2Ypg34FFvwYeHtzU1iEvjVPZ32puWKpgvL72v7JRJi1"
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
