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
    "5XBsLDUjaJd5KrNP9D7mKuNZYeEPrws3nYBYw6YyhumF1zer3C5zLuVTy6P4jJH5nACes72zzns9Xn4rCnQniKCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hok72Tip1hsqhahs9CjiXRm98F5b8khknv31y2uXTMKQzCb4BYCYiPgd1kmoNf619ZnjxCRAo1CaNzJFw6qwndF",
  "key1": "4ZLPRi6PvaDXFJHWVbfRz5B4tSHUYir8bxCjNkb9xjNqs8LhMBYpLYVoqi8hKd7qyKFuEr5t28LKg5y1EDcUKTQi",
  "key2": "2ewMdDAJ5SJn3L3Shb5tThpoNmXdkGeAv9AisFx7DXeM3BBtvdtStnKg2XHcaqLRw116WBJTKWBLckE84M1Lv9hL",
  "key3": "2dNirhdQAYfskJ2s3BHVi7xf7Q2B3yx77nTsb1Y1K2Cip3KrittnhrmadsythfJL3SSuDnSqV4MmqGnqbJBdHxSZ",
  "key4": "4PoHcgZZJyn38hutms5ruxPXHpAL8wrJBj4CDFbGWA5Tt4cJe3i9mBc1PsNAqmSuLV5ftaMfQEdDvxQfgjdpF5mF",
  "key5": "2R8qJzK1SUGdCSnHKDdwMzDKHtQp5PC7L8Gqt2sorcpveG1y87rm4ZuGaQjSt5897B4BkAgGdPErhMnywBPGWxGN",
  "key6": "5qDQpRZYaFZKMi8Rg5rkkzKxsTLfMcwBJ4db2svPULd4br7rCr1483bPaqCQquz4qEUKwHAsZGbSoC9YSu8qSyma",
  "key7": "5WGSeWLvGZVb6ipi95bvUxukpYyULnQwcXjEpcBMM1hkAcWb7HpgYS4q2Zd2i2ic94c6CM3vuNTX3KcaE5852BjP",
  "key8": "MDNroh6m6rnC3YbWDwGpRUe2Bope5bbfqy4egzmQ76AX3834abqtMZ6x9ayc8At319wvidrm8pbqXqGT8qTh5Ee",
  "key9": "3ekuHdhgae4bsSREFMfW7mNetxkEJKAMAexB6Qtifu6D4QNyYrTFgGqyCeowwqQezMSjZEKvan9eTpBnjw5HvnsM",
  "key10": "5VdKSM17TXe7E6QEH6gpdz2RFazb2C22zubTknFwVkjdnskkVALNNMwoRWZ3Vqrzr7bE2ezq89QMhxvvYU3UTdyA",
  "key11": "4XxZxbojsX2M2aVu49RTR2CXciKZKHnjhKe87v2DewrNKWzSzoArdCPeYsfce4raMn1cSxccDPcdDSe3y69rfTLh",
  "key12": "238BjgS2PThTH8A3EiuGwptyD7XmAkrWx2AYbEK3ek3TcTj9vNzQyAKvUMiN5H4VjCxbJEeZQgdPzCmfg3L3ccvJ",
  "key13": "46V8jS6s79k8Mf5k1Kppvc8ka7o9Aj6ZVFc7BHKRddmkrCwcC894etB1r6r4z5CNUC7372oMUJwhkq63oBD7eYH6",
  "key14": "3NfbpdNHau369HqtoMNgAeedBfTChiFkkYdymFTWwweKsNrtKLpTgqdgVAu9Kx1B8Ku2TToxq89dJ5A3J6cfrdff",
  "key15": "2bw79oc6Nn6NZjVM3PAVkehZzo1aEcw5egiVoBBLRZyhHhy5J88rLspt97bfyema4BeeXNy8DjEofUNnLvzH6oU1",
  "key16": "3kysnxMsAeSRQmK3dEeim6Xe5RxXRCjp5JwtkdgkfLy8ECLsd1E41C42GSCWpo6XrK9RvozHBdW5qJqroZ85Ja2w",
  "key17": "3aCm8WhoqvHuVZU2eQ6Stbj3Ew6rnhKHXT76hVP9sNV3ucE6JYjtmXoxFCQHbh3tTKoZsPxCCaPV2GtudZp1zAXy",
  "key18": "4CAHtu1622uYB1YyNkMmiTxzq59sc5DW58C5EN5DKhn26dxVZYZ6Ro8EXDRJEopUzK8nQ3GYbi3VAnnP8NDCQv1x",
  "key19": "5Mmu3HJ38MLYETaEHj2QiS9sSMCWabMLeV5AuD5shi3E1wVrKGo27SaFaL4o6sdbXTDzG72JVwbuavxPKJy5fgoP",
  "key20": "55S1J6MqAZiTiJvn5hD8BP3ZdmHBjaUuUvrpXRwS1FvUW4NjcnYthqBB3mJi9eRZXWyHa5XMr7HhFNmSu9w7PG4",
  "key21": "2z1TQyhwJKw7Ft8GoikzrRb85aa7SJuS1BkAc3LsghnTX9gK9f8McWjsZwfqqG7FywHdmRQdCe42upXjs2e3VxZf",
  "key22": "24SEZ9LevUr24bSJ9zbFN4W994PrihhMDBLy9tz4VcyygBuMa3pLCP4qaGPMkLto4F6eetqLrdSuzUX819yykJ21",
  "key23": "3SRhu6jbadg69xvZB7NNWRmHaahpSkMrSa4YUrgdWHXwUv3gnekGpDa3rYNZu17WyRxp18x8VF1xpjj2rxmwio3u",
  "key24": "4HfEihuFfZZedeh2edk5ZiHZy74A5zLdi8pDiKzAxBdpAx39urrxNMtqsXgQHq2357KVzcBjYMqpJ7WF4xFw4PxF",
  "key25": "jZ3SawqDGHq12cqU6eSHGfcmNgcj9jWthsgSyMfcjyyyCHLxgp6qBYUTNC9r78Zro5jMYKyJSu23K8QY3zgwDdE",
  "key26": "2G4wjho2fuJbEpoCVnfQk8UTatTQWV3gDXqvUSdhEuexpZ85JzM6CoJy5j45A72h6Jx9hjWSRyeqymudYVcxRmoQ",
  "key27": "63Le3KPyWbaRgo2TH4MLe3GDDtDpiT37huXvogeNEHFXqtX9HtXuckv4cpnw55bJhJLN4n85uj3pyVJ6umPUjddj",
  "key28": "5vrYbaGz8AJecZSn1QTXUd6ZQ7vJZijJhcJDj9RMRKJi5yvwT3r7KESA6JCquegLKZ6XYPXxDeo4kM48HVCPL22g",
  "key29": "5sWomwjfpCQ1V2xroJ1FE1zzAxhE1DtrRdCkf1K3JDmapbygwqCWbGA1wkW3QiFv1bN9qtFimWE91BBR2cVk772S",
  "key30": "5eyjNejcorqjyrCkgfykSMsHnvoyz5t6DbanLTgJBsKson9H8i7efBzw1jnb9Rtu7eyz9SBGnh4ydooERztdY4B3",
  "key31": "4L3eLo1sqiQ4QTZxTCr1m2aaeMfMjRWoTCynXaKRVW3QzcK7McxAH7N1vNE3CaJQEhuHiygtu8hobgZUX2NZ2xj7",
  "key32": "CzUezt2ECJYzFEUhxA7pkYozAQt3D6w2pSPhmWTb59XqvBuiJjeGFxdhNdqznhw85Wa1Ymh37k3pXp7BJwKFo8d",
  "key33": "2Nyf9UyxxFaDH5pJ999RVGHYPkb2ohtF24M55FbH3GxyD5oLahzeTNcKzV2U8i35dnsDSP4UDwkMjiUFyUPuH2jh",
  "key34": "5zbopqWPKdJTX1mykJPtnSmLKCU18MrViCSUdvax8xkPmcuQQVXHFPtNR7JhHS4JZ4x6Q4hnCp9pVPaFMHzvfFrs",
  "key35": "3Cy9k7jKmWVVYzJo58PpQrg4zC6XSGYt1Uz4icGnwQJ17E2HrMjfW5zeDvsTocXJp5Xp64BGNgD5M5Gj9VS6reHK",
  "key36": "3Fryx34Z8rdD7jWWUXEoDGqgQKjYKUoDoo8vya55hf4rdT5q9EcbqQXoeY9MbmZg5DCKuvnBnxVw3RjLnAj8tsQK",
  "key37": "5U2xouTKKeA4KcvY3vmbq6U9BEntr3e4GQUDH5uZwjZ9Xx3pi9RRGw9d9hkX5Q2q3V2vuvDXJ85ArcrJZsFgDpky",
  "key38": "37rGgMUFWeHduFHPLYVoPR8sSSR5cuhnum5pNRrufrQZNsbs5yv35fREcLU2aHnzyuVyqbKHqtfV6suoMtQfpBdf",
  "key39": "278r2ZwanduTE1zYgWWqkuZJpsanEZKn6aZZVVZZbp1n9sS2NTxS64f4BVaFhQ3SqZ5SZ2E2vJi2tft3554Le62o",
  "key40": "2YphtFHA7ug2XKgzuXshJYzLtVn3re6AYTSsD7CDKWbBJvdDWGDNTP9nmTjYJw9eu1nxvYnDbe48gr9AwzkWS1td",
  "key41": "4jkjkzA868DBoiC4t4W8kmtjcK5hJEB4CDuQYEcu3mExCqD74pTQKDma8DqTr2SWLrnkS3Xbpk6bETUBgWmsKmxX",
  "key42": "583U2imT5MtzFMyvPokSK9t1jnZHcCh75ASfKBjb7hbURVr7br4DzSvMGHf7pvBoH6j5scdhPJ3NXJ6kqBTvQ8Ba"
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
