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
    "3tG2y451fdMF9LxtHgZubzEGjXP9x9QmZ5KeTMy5abmqxhveohLiYEd5WmJU8NkeJrfDGJMXv3he4663LhmSVDVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uMxk7inhkaBDouc2oAcJFmhFAor5i7JcDcRERBL4Am1Uq5wTs2YsPAVExvF2hnaomzsyk3ufqr86vZZWMX26SJt",
  "key1": "2icVSsxcuXBu4Hb8jc9tyYRV2w7yLV4nLjTpG6sdiWGTNYj7Q4aP356bAuaHfPkfsiGby69z9hn7AyoY8chKrUdW",
  "key2": "54uE6AooViEAKpShzBxvNkk1ArzgLapfVouN8pAqYyHXB99wcXAYcC6S2ZvFjSgheXEGv47FhfqCUfdjbJhrLARc",
  "key3": "QD7cowAvyVchJRNdjhkgHzV12TMvHKVi1HtP9iR2wjGBVXft4fvorcYjuynx3FBoZ7bZtohYu2ow7uLrJB5taDN",
  "key4": "39PcgDC5Mt3YttK9yoM8zprMrhCsj9dwsvRmXQckw4Q694YfPQtn4xAgD45YdCYfeySRoFxfGQLbmxNCd5xYr6xb",
  "key5": "24UrZTkvt6NYkJLWX5JBGeFeNus9JcSQVngcJJUJEiXmCNy8m33UP4z1RUUvCr6fLanaWm3hzdhVupRCm8q4exYk",
  "key6": "41eXJtov3m2eSEVrKq3q3JEKWjtwiJfRGJULoGYHgtos8ZufVbZ4tQBdGrixsS38VZBBp2SfqNXEYNDX6vmJuSG",
  "key7": "2y89E8DzVEsapv8pN5MLSjw8Td6GZ8tD6gmXzbeDefweQD92ZtbxbM6CqJ8pS256FkHzjCe5yD8mFcZ8NG3GFY6v",
  "key8": "2CVH1MEqEW5r1nQU8s2HrTbWi6JYss3jZQ3HsCUuoHhzsVSDh2Tf1n4SQy8BKaPJMujCjF5DT7DU9hgJWb9YhBwZ",
  "key9": "41JqyFjiHVMsTJ5SNZZdM88C7tbVFi8jcLiFjXUBjEzqjK23bNdHSaXsKFxiD9YprCQQwpRqsHMGiCjJUhTRcFgZ",
  "key10": "3eXVcuimSfFmLdSjdypYt8gTe5M74xkdvPTwAUDoU1RWFxfBpwjC66m9r667nj1JqBn39sfz3iaGCytPDLCDgg7R",
  "key11": "4jMu9fG4aDDQF1NMDxCNHtbFU4ndLpBgvPcwg9MYJbaWqGBy5rrHqrGe7g3aav8g8SiAqdbQXZo6A7yuoXGRZbQt",
  "key12": "4ngjWz8JuobPdwZLAmNi5pZDJKSj52LvLetTagriTD6STKDjbSQReHHs4XeUehW46LQAYk8Ldtte99F1TpcV6ZJw",
  "key13": "3PsYxoQBpG2ke6xciA1yErjDJLKsBorVSzBTwDTn5j4ECUPr8L38ji2XhtBd9hii3fvzxtetr2xeKenNWNXAK9Lv",
  "key14": "2f2eszebnV7EVzc9NbhJrmvGLxjKrpfqeayYxBxLwUe8QhgoJqCoVEbY1CXAKu3rkmafwMvGA2JMCfy56c9Kq7Di",
  "key15": "5XLrdju6nmFSPEWfenTqV7DZb556gRL1n7XcNmJucNjRVj26tuqxiSZ4Wp38vxwqTakNWNgB9Sbc77ywVRV2mCcT",
  "key16": "44383VUfmrWkkYUwTj4w3HzP46F3EARxJu7Jun3a4pYDPSdsFUR75J7H3WsXVAPq1axZnH31Ai7avPUW3mJAXc1d",
  "key17": "5VV8fDWdd2Ei5K27Fyapvo8iSvmw2DXwd7SJ12yuLyxvjTc4u4NtTTvmrepSumjF5X6S7sbRvFt6xfQLSyMBWn4D",
  "key18": "3Wxipd6XbFn1tmPaDXv8nSstHCz1KRyWkYnGCww8WAz1bAQXrAdmVon7zdGHwkjDpBQv6Mexdy4vTKGdD3BLWYnx",
  "key19": "4kHr3d2jAqpCe4tg3xHwEdtFyrrdZNHyvTBkmhGj71CRuSY7Gz2ZLxjBEQr1GfSDGUQeJhmmeGMYDitB2n8gkUKx",
  "key20": "2Tikz5Y9U7VjSKaxLyFCYs4q64j51PjJNS6Cgmh9FsYs1Wm3NtHdzMcCaTACjWJxWsw7PBfvds4XkqCK8VHFE3JX",
  "key21": "9hoVexZup2SvhLW6RbuinXzjKDNx4neNHcHkT3zmi8h2SKA6Q4wxVyvWWCqqxaPw6xT7mC6N6EUcRdXV6awSihu",
  "key22": "3dXftD84uhkVpsUxQX4fRr6PrriDrJj77upgGzBZT6vddvfYPxpjjyw9x4EKiTvef2y4DKQdbDqREYntwA7WpGSF",
  "key23": "2ijPQUu2HtKxmkuuFy4mujkBxyZ2r6Ys3tPzUwvvii6MNtqoXJ3TBWWtK7VKXqpaj4Usydjbe3dFQysVSCwhVbC",
  "key24": "5AtkZYLcXuUc8VAbio7WvPfDy4K7KuLrRQxPfkZwLhCjjrPR4RJfXsfVNBhw16phXe9Nn5kXqpfzn22SsEzyLasc",
  "key25": "3faXTaxJzz6TfGSEDbPH4guXHfvzRPRZ9KYNgjGFiJnnhPiGx45EKJkzNt1r3KRbMFAZNrcQwk8LenUrKshMMUfK",
  "key26": "AhuxnGUvEAwyKJhh6QYeYQbhu5JhvsikaNNYpBbJT3FVKZXV29MW8x11tu2y7grJD67FLPFknv7Gj1xQeRNxM4K",
  "key27": "4HNt7KiVNtoDBez4vndYdBfS3RoJdUJz65nynMWWF6mpBDkCf7UJCUGgejg1vFx6S5q5Xiz8ARq2if1k2ZhtWi9J",
  "key28": "3pSiVqUgF1nMHYPwiR5wwekkj6UrHfA9ZiatYt5SGQVuEZ4zuUCfF5d8ykvN8ecL7s3gPKub4E8LB8bjFtpCXZpM",
  "key29": "2nGdecQiUy6Z39JwP9Dgj6cWpdjgy6BbcqPKFjPqHAruJjs5dTWXhSmTA3Z5JNvYS8tr8ZoEXDtmZs63AudV2uuW",
  "key30": "2AMLMfpvimXPEwAzAgiQxJLkjEtc2rZDWS8CWahxCGzp8MfeewYgLY3ps62CjBzEcUH7A6XVuDgNTzQAZwYpFBcM",
  "key31": "5YoPRgZSEzu88ddw3QgnhcRZofbch6k4q4PQV6gvUtR3eEwDAewsgwaBLjpssCRKxAnSNnLqnQKbtPsNEJ82awNY",
  "key32": "5s1Rii8oVy8DRhHZyzqieQv1rr6tyq3DdAFykiLPjhRr3B4U8DrLnXuggF9opTcqvXaf6ywAex9WFdTgDonSt123",
  "key33": "3vriyY5eeEUj72wdF1kypJqSAAq7Uc3nUaUgYqZBqAYd949Mk8p7AVunZXTtWz7RQCRgRvxvotvhpdWnxYr7H4Np",
  "key34": "5P2ktN6hMPz4pzbu7v6M8BNpnokvCWvL15NgDSpDXnsHHtV2jGTsCA7y5fVAKt9ehAm5UaZTZELToAiWyuW9xqhi",
  "key35": "39wE3M1gJK6bPSFkRSZbCqfhphngn2YpmqDhqLfM1EUdwM9ciFvGT2F8ZHeJa8EM9xh52Tpnz1xS9pV2dkY6DkzD",
  "key36": "5wzm6gmWR6ybcPZNAx3wem7UYZtwZKsumrfg3HA7yRQTuKJhW99HXfULWoX2fx5RCUbGg4KkbfKkFTEvCZvMP1SK",
  "key37": "33VWB7RayKs32ZCThDXcCgsQqmH2kF7a4jBqcyEcpuEwnQRxYMaWA4mwGCD58iEydQSYNQbHSpV1GSpBzZHGLrjv",
  "key38": "mozYXt8LHWoPXpPf4E58Sgur23LBuKWEgrP8MKWeTahTdjcALsSqXMD4yaBA7pkVuexVJnVmtdQq6zvBKr1KR8U"
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
