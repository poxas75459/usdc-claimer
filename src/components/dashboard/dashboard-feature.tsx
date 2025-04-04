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
    "4QJFvC5qaHcW1dgbqthEakhJr6Ndcwt8D1oWfFshGGrkYbxwyUZGv3SwxddivMSw2bxcgetd9VUeEvE4V7k4DGiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gh7peeK9ixDubgb2SZh5eh57TMRwGDzRPRUkmpLwmfKEhGYJAmuUSJqks9DtWAyvqqPTA5aenr3vZXUEog7mdvB",
  "key1": "25QvmqWfpsGUqVrJEFwgM61a4wWm8nwKXqJE9PGMkaHwbM4RTLQypcGMxUJpsvC4Es23xXWUNoMSVct7ZMxkpJu2",
  "key2": "4ezD2SqZRJbZCwaby9WnLdxQw6ZR5x3ocXpmbFsZCCti151i6iN9pHHb5d33nz3bKJ8S1wD1qtJewUA6AhqWcSQR",
  "key3": "4NcNV4zvfRQYNDyWMeyt2vj5RB2yydtNvrKmNQg8tWSAH4gbFX1ACeFLbG8St8E8TgX8LWnM9cZpGknideBedek1",
  "key4": "5rsKtdcRsjCPLexJkSwF8ya5jXfHErk5deFyKA8hpSaKh9wtTxdSWep6JoeFrqciJXB5asCgYdwtReFdA7M2woMp",
  "key5": "5FNfbVxZxxMrAJgh8DdRrvsMKP3LcT2DUGxK9HJcCQH3rhnUfDTAZ4R6hB7MCLbVrheiZNmWCRdJ4pe87JYATqUH",
  "key6": "64Gz7M2vA48kGR3tF2trUT3jV8wdMMPS3QMjVH5R1YeYAGHPzKeeddKajN8DJvfUTncgr2ucMMwYK7S6yzZaUsg2",
  "key7": "5iTTjuiKye3JVkQZeKyBvQyD4H82yrhuEjz23qBQ8fHU78nJVCi67coQJEQbGAsR6BEL54tCmy5D3r2P7drAVSFo",
  "key8": "2m47rUkJXw3Va1qFF32Ryjiu5zp27XuPLXTiQjen2wR7tPg75s3qxqL9a8AH2oaCrBhEqHnGFJo8N9gHgBfjaRbA",
  "key9": "2CewB1gHr7YZ9s9H8oYATPRJ4MfJoAVcLq7VwkZvxz3xGXpGBZx2MwpDxi8U2qDGcA6So28crgxibL6kXgBJJg3W",
  "key10": "4zEDSXeWEXRSjVQfrVpdN8Lsfuhu9YU6gLVGS25fETvKgr1bSNN7aVX3VpNSw9b6P8LBDaCmHR8TpgSkugcNUWfM",
  "key11": "2ENaNGqwr4MJUb7EQJM73b2QPU2GkWyQoZGhRPYfxxWiCu6G9vD2V7Bv5SLKMpzBtfoG9j3LJZueQwdhdPhctgS",
  "key12": "A7CWorw6r6erzkHSDFDTHavgJZhPsFGXiddgzRFmL1K99XbAS7yosqh2mG4dJKFxKbwrM9zUkuUfzorPLr1FG4L",
  "key13": "3cd5ZSxEHnAaxy7yPFwAAqry8GZX1WHQq9VkoD8dTk3T9517yf2qptLRsikNpx1jDgA5qDpZ1K21SHDtp4xpZwVx",
  "key14": "hb7TawEU4wmQsfXbH3pNGjNqXdyUpzkSfYE4cxZmyqXMiqJ1nbzZ9m9gJ8F4Q1bHaTEDpbnWnN66Tf4hLMSUuAS",
  "key15": "3wKCdeY6mFrLi2wMWs87UFB3G9htdyuZSvtQ4bTeedjaKndTRPTw3ZsBt9HVWfyGi7U1ZMndGNSh6jZWMWpxkPC3",
  "key16": "5JVite8ju6ZTUAkb5M8qnCFTn9zPbv1ESL35vSwSnFmne3otYzgzAib7nCwedHFFhtys845XRWYFSvZJxnjwvEW3",
  "key17": "1GQYT1sUe7d6w4m3B5kQr8uPWECHXam7fp7WDAEn7Z4dReCVb9aGbiPk34Nr3u3jjruEZRSHwCeawb9Wr8tDidq",
  "key18": "4RHR2mmkoPvu58xBoaLdgXihgBdKSGQUdvhENUDghu3jTu4GguuYGPQPKuHy5W9WHNk6qKdAJM7EjLhRddkqPdPU",
  "key19": "sD28gzoDZMFdqdZvPQygNTBjhNWKyG3rvEoXzSKfK7c5RVm8nQk8nZQcD6kdvYTG5HzPTz9HgaW1qJuft1jB8KF",
  "key20": "4Z5Jh1sHWSSy9vdwaLaDGCtuLuteJ6J1MaTLs3arqBWVKo2ModnVHASh9rocULPg3obuutQh242v5eGG9qXtzDEg",
  "key21": "4TXArNvTt1d4UQDwmAKf5necArSv6QzaRvCsYztiGbFRirthPn1zjrpPCkfySYnegFg75vA462EKcqMv1JYB29Qq",
  "key22": "3woY9abM9Hupm16U7fVLPTnKTqrv9nDyLRXDwe736r7VVhoPLoPMsN9bF7pxZjVXNy6XKSbAufo1fCDd7fv1r5vj",
  "key23": "5zxRcFQRAdSUERBRdsDKWrr4VJvQQRkq2eiBR7A36Zgy2fwdddGSPxUPTwJBT3wLboxLbWLBMRtSt8ApZmoJqkfJ",
  "key24": "3vjmAABLiKFHXppCUd4oXJYCe3TxDyay9Sy7xz65MfV282MecajiEGWoBWxeGi1ywDmFv48kW3qQHVr2LXTGCero",
  "key25": "3zmqpoNFetUkcGkUbvBStLoCdDwXNTWYKJBXDAAbMPuSiY1bAVznbnG51exe5ikMQx8JJPgPE53YzT7ESLxZPzfF",
  "key26": "2uwuCnN71WHUeDguBafEYh9x495pkiwG4DyFvNEEfUmnahecZfdkg2ynybhWhaVnXTTCHWuStnDE9c7QUvGEAGNo",
  "key27": "2i5a2jbDHEkk6ZvH2oEcZ66BTYd61iRGvWr2jbetmXPtKsq3GhAr2R5fMd1PQ3C6kBhxnJGPhm9LfjHH8a8VZnRw",
  "key28": "3ScFLuoiM2vqyL7SX7x7eQ3CmmrxWgA1Wbz4U4P317b8WCnxsgpPJJd8rGx18Uo4u6dt7m8gFtrUoJHjw8vHbQDB",
  "key29": "2nfwzvvqQXXRzyzaQJU6kpZZT28qwenEKCfRTtcxXJFtfBsLVjmtLaDpn26B2jEP3eZUnWxD14zPyyL8VzAUfFUg",
  "key30": "2MiHgSD2VxVtTmJnhSyjhdZLVbJBLqiwLA5tj67kt2TRUuXrQQrPSyZXLWnLQ5ApB8y47VTMgwZFxHvEY3MNVUU3",
  "key31": "3Ne4rT6vr3jnsWq12qWfk6xy968tLqrEKSK59hT6KKrFyjaFHgb481zCZMm1uxhRqxZ7xq9p7j6UH8j5EeuRMD8c",
  "key32": "k6rH4GmrdNy1Fg71zpmicbX8kGwtYAsVKWfot4Uo2LwBENgLmqoWjgiBVvyXZ3bReQKyXZFPCSeA9AY6do589au",
  "key33": "5ZNpkLQb8A5HbNMM6f37pE7pRn7mwEFNuygBBvR5KUkUMS8fYd3FoYg33LvTv2NmXRu7DcDr4hizhQBhgbwjw6Q4",
  "key34": "38jeZvCWHNqRs21hLxcpoxyU17TXRbHpsWbWEbFmRH8YK8GTyw7gMHVVyNuE3au5DrBbxCBuvEpLiwHHtn5ck4qb"
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
