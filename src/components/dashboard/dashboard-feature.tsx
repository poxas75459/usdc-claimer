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
    "3JHWBgtwK3CdYmR9BqYg2iRBnLQ57Z47NnkeQW8mM6WVELvHgjBcdjMDB5uAKg9jvLJ8K7hEnwCsXKTNM7wVrzB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1mmGAp4GUFcq6qsmCEh6u6Zdsnips74hwFVLMB16LgMiUy9LRyQQXYTMC9bQEK4tw5YQ8R4Jh96TK6hu9SVPad",
  "key1": "38Uq2uJsVdiR1wCe1ohNAkzhVaZqPBbcTo1SVAqvhDduYVVgCycy29zjaJq5ASNtcGkyPzcq5qWBHLkY7HVF2y1A",
  "key2": "VpBrFuaoJzkAoSp9A5Kv3ZkyphG6ajHTLLA1tjTT2Y1PamHvjA86gK8UjQBeFaeeMS8S7Zep8aG2bxsAk3qQBzp",
  "key3": "GTa7FujwoqwXScygyssHndFQ93jx362NziBT2somPiKCkgztS1wzaQmFNg83jcK2zPMhvct4vio34TU1HpDsVHr",
  "key4": "4oQfs348MhmAmZcxKkSW7tfJBoq5dFLshjCb5m4x8adh5nF5Fek4jkFcJQGiDRnkyevzwnWAJAwyF7fMfWJqAh3Q",
  "key5": "3o5aJ4H482eJ7mPMecsh1B9KraUGN1epiogN4JaJuMCnLdfHQYke8bV2hzXwmgEGZADFZr6U3BJJRn3nB5kwfED4",
  "key6": "51Q58h6vTobZD9F1rGHJ1pXs9JWRbRZ7deVmEbRiHGKvKwDR3ebEQJsRs1xxMxSGWNagPZ3Me3puyzjCwefxgAAe",
  "key7": "5PbsU1MySMcrFtTLSJMWcBGKFXZi9W4Ct2VqxxG8SLKbb9RwJMAoeJRexddKiVXwo63svuv8Y4ZzssgfcSRUrD1P",
  "key8": "5aFYfDu6LFYYtixKUTzy9oF3uaP8ySD5tNVBDNteBsCgyWpeCpd96c7kQ5KudURtaBVpfP3XrCEkC9ru5g49zt8H",
  "key9": "2pp5tpkFSE7qHvfciG3Y5zpqDK6C858oM6EhrnGx3qnT7b7DK9BLohvQgqgsKUUcMavVxqAEnomSxkrwUZpM7atT",
  "key10": "34dx2ScF39wpZ34ChAVc5QnXJeK565gWCWmtn5yEriVb9RHWnxRh3cgppkfFaQap5ZCKt4WDxYVFcX6KACGWqZuX",
  "key11": "hE2swZJXGSYQaZKVmReZ3WgfmH4QejgJdd6efobmXgGMQDGNcp1xoQbSfX34PWeuCjRfvfhssP79dudbdwnjjbw",
  "key12": "2ysYUua9oSVw5wyxLVHx4woG1axytFHJefsamesaQdjm8xkbVYLSnVZMK1i8PkeaHPcmGdBubZzog4wGT9QTsMNk",
  "key13": "3x1bZZtMmCT93GoQ46uPxW2efBH9kJ8BH4DgqCbm7DnJMSZHme6X9M8mN4T8H2xaSSYhpxTW4r3ESRS2Cz9bzCTM",
  "key14": "4NnCy61FPAZ5gpxadwoSEgRC95uksjPbeCJYJHaS2MFXpk8ppjsJPKpmrnMn5ykqec7HfeTpycCP2B8fEK7hVqUS",
  "key15": "5PiSnXhpC1spNFEwbcg1kRL8EXw7BuZcytkMkKtdf7UhXB7iTgoGdUCRuxbgVYF1p3ixyCgGsjBxhwDg4S9V4Usf",
  "key16": "5EYqJExT3rpPNpwwB6JM4nzioKDrNFHsiXptAb9DJKKRVDDAzzaEDcHhgKhSksZPsgCVJJFiUWMR6xx2yKU224x9",
  "key17": "4cJUjCzgbE7JYhHUKLxDwUs9mrZwUgDt3RkaiVktLeZfeaLjuEHda5C2DHY1juDRiBUrMFXMCX5gCqJR9SwborbX",
  "key18": "yfwetS6C8LKvisstdcjHaSkAT5ZbrwhNPw9rAQMvtHx7N6vcDEc8UWNMTpd4ePJENR3EA6Ud26fzoMBFiqvHtPH",
  "key19": "3FBS1H9EYxA6APgREDrrcE27GhsBiMtAuYwu8cC7RxmtWTezSEmDJS9nAy3c95qcqdgYmHpJwwTHDYRgX299kFNz",
  "key20": "5mqnkBKc5Hm9ps1rAHpqL9rx3n1TnLGccqxjKGfTeUSco1CVhGNo7t5hTYRj3AKFeRKVd9e3aobFsRwV7c7YkhNa",
  "key21": "4CNutfXaSbgKgAV61BBZxsWNXyguhFL1FkSHL3Bi1ADv3DquxsSLjSnKY9QLxzUGyhFZAvytA6aZte39FHnJtWqK",
  "key22": "5mRZcot8soFspowDs8CgYAX79kUJmWv5aGGXcByusdYPa7WgiRnyZiBytvorxhEwkyuDCzqt4oBJrZxgSjRGYA8q",
  "key23": "5aPe3VscHyDNyWosGNcFZtibMrPKSu6feqBQnxFdNrBKjK3fDdu1JBbmU2AVQc214D5wTYv8hU3Z39tjkcGWSbpV",
  "key24": "31CiG16yXVc3TWvNgESmH44MQCwiAepddtGUceCRJQCnfNFBBkcaqfrTB7UkVoijompJa8qYbCKtLAmNRQB17KV9",
  "key25": "4HGo2HYg5D2szFcjdAJPhsHSfQvsxYLZ4atZAtgeCC9WFZSQbjp8ZfSCm6whqbzCPhNS8k2E1Z1XYbeDWgmVrNZy",
  "key26": "3nAUo6GMb12wePssiGa4TnwRC3Xaq9ChqBqDHDVq7yhgs4h2hZBWPca1t2NJKAY26DGBYZsKyrkbDqAQzoxv6RU8",
  "key27": "28hWcNtYNMQhUbPkTLC1nJr8TFTcvpciDK14poJV1ewYRyWeok3jBpEtA78o7Li4ro7eMJHgqnp84DPb5PLbdSLT",
  "key28": "5ASF8QSe2GHqPGju5MqNFis2f3tAa6dU6AobPauMrAtgcUhLS2iGnEuAAX8WLnqc2jTxYz6EEfgnwF7ussZpMKPN",
  "key29": "4nrBXLGmQB3j5445ZPtuc2iRPcuH3HbjaN6PNqp6FropVd6Q5dNPz2QfPKZbZh1RfcyzPPZEL39e9PMruWxSCfNE",
  "key30": "5jDSxB6pAPAQe1ZwP6AsJyStHPpXkfxDX1Ajy7o49BkKWt4PRaAXtDiYEi1iAaiWTaZYayxYf8Jjog2BoHTznce",
  "key31": "EtHrtVsUr8HX1wwPEg8iJZ8gDqGznVt6gn7uijKNEG3afCUekB1LfiaxahsN99bBCz9Tz3NeVYMTP5Q41mLZacj",
  "key32": "5iecdjnK7aimn5CDN2eniEjhANtmyD1GHDxoYJkizmvYzpsHaVXXGheWFtaRG5gzLiQ72jCmja6ShWX5GHDb24Fj",
  "key33": "jNj1n6rr2SHttXBzLRY7fZSFbHzSc7Zbzjco3tW3c4uDCRzjwDY8V2eb5UQXiHgubVfaQxFsNPESdKAB4MWyVcb"
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
