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
    "stsjaEEQ2cmCTFqGEB9EABdAstMbxNKqQQ9UWd6nnxydzHu8QSBFbVL12vADfF2PdYm4oXWZAcDznaxcqpmBdcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2BfapNTzgLnhrkM9MFN9Md6fdopEcuZmQHUeseZEGbCzkhoVo7dJLxeNKNqEoHTcxnRWxkoZ3U5ZiH1FUbWBah",
  "key1": "4TChPY2cC2FyZQxCyou274AZntd2sU7jT98KyaztiLDcoDMees3BPFRKbGaGWsAGM2MB6rUw7dtKQVfwt9VYUAsL",
  "key2": "41MbPhU7drEQzMR7yJMk6yzmU3Dh4X6tfz3ZkwfnY7NNYe4EpmxPq4iFXbHUieV56iBMJRTtSQjCS87LW5ijYi9b",
  "key3": "4ZU1oqqssX5FjDqgtomzfB5xY8oeGCqq21i6LLPvvZ7p7vZwDZUTEC4AsYxVDVzAuXmxxk5BVEKa8bxZee6qVqJ9",
  "key4": "47CfqSGscNk7YLz6EzPfwhHcvhEmq8gaMHvVmQZQzFuCs8DEk6frQEJGNxSxjscJCzuiYDbHkZeUhiG7dRp6SJqA",
  "key5": "3hLEo8hSd1DBCQfXFtxnatPC6r4h6WYPDsvoj5Xhvdoz36qc7V6qTRcG7CYzg8iN7ZCG9MtZknb5K4t8BBCNvDeq",
  "key6": "5US8tgZAzwoqTLTc5Ua9GbqKf9rwgj163sTptTmN4uTm2BgNEzhnzdgntvy2JnaagzqVMB7acC6kRogFKKopnC9P",
  "key7": "337KJsTLPD1xT8qW3dZohRpDrztq7wwfcKzWxicrNzgo64t58iqkkSR3Zzp56Y56NrxaHU4jN63zgvQWhZ8ffnf9",
  "key8": "3V8411bY1HKWvYNGcCq6rJrZ7JdQE9897RXwrazy4xWjatXGtNmeBbUioiV6FPMjBDHKbCVrKjtNdDvnqbJuH1Au",
  "key9": "5GALzX2rynhBidrvZtt3EMig2GdcFcUdw11NFERoGZa7Kd5Vr5wkYRk9SPufotBTTu8Zj23xaLn9T7Ao6mM68kwY",
  "key10": "yruBtduzgv7Lxfz2vT1YP3SxSWzU6cnsFphb5QMPzEvey9VgHhx3jJd9aK4NXpK7CTcPNhsdwjfnxEUDxUS7xro",
  "key11": "2R2ZCGoUe1sHJUCboqzLTAC8hovCYmfMmMYMhKaraUPRQoLQAtFt2LNcrbvBtZwYKmnruwVRZE2ZWKzJtFheBeff",
  "key12": "eBbhjBKqG8jYVy7gcwSvALGU7snLQsxEpnVhqMepWuNPfMdBCoPYjDiwojit3FuV94gDncGxbuaiCfJXRvMatE5",
  "key13": "aoR7mWooEA1GEn13MnaGo6Q85gTTxAv5FkMgQ8L6nnEW7GZjesuGSv3yC7s3Strc3pd7foM9WY65nGZYxkpPQW4",
  "key14": "3wHmaQqbZgYSCbeGtSyUNEcWXHX17uM9dNtzYQHwjobB1JynaHxLWaAxVdQSHhBVp3optQ8oZf4Tt4LjfaXSALzC",
  "key15": "nTqbUmKH65oeNYJKkLD5kdSuL9Ymk8qVV32UdRgCXDCamf23EUx5FEVVYcSkts2PMowx5kfhLNAZgfb3wVaLZDU",
  "key16": "5dj82DFafWRKyw5au595grRYrmTgV3FRpq9yNEijt2HYpYtWa5p3yrW5fdycyzrfBUsFgC3MYMAhmgaMcr9ZM9j5",
  "key17": "2ywUb88Ry7zD3MEiShYpjN4RN1ycxjfeNCdd65SW3WVcEpFXDvRrDj6qxfRGW1uBD57urWqc8qCDP9YuoEzBREnW",
  "key18": "5mirHdhT8GMvipfGN1M8dKxht7d23EpGMMWSX973DtcF9i7NbhGFqgmJY68TVPnr4um2goutrWHFjS5xUMUVX9WU",
  "key19": "aWvUcjcjkmcQG2TqTAugBVD1nEKgg3wYqYUhFu3QZKc8vaegEAruSNKxgfQAreRZTQ6q7PCHViQYPbPNBC1MyzZ",
  "key20": "BsqfjUCeDCwmpfztsy64GBq5EwYJBWvoKGzbc4gmoCgFKsS3JLRMqVjurgnX2WP6LnzijwtFZDTgHxBsCadpW91",
  "key21": "4zmyjZnLRJya4XzG9rCMZMxYgnJqbvhB5QdLfZkzRpAKmwzyzuuqtMWHmqDRdNERXbgrYmWpjBsosgLHCKkRhqyF",
  "key22": "3q348vNPfM3UruVTNzMoVprTRZoStzhpjUBpVa7DJRSVTkhBn9NHgpENjzMxu9XD3Z3fCWv3NG9kv9wrfh9mZJMp",
  "key23": "2b8ui5hZgs2k23RMyBbebdzQ3f6jy2dhACmKauWToHP71YqFzz4r83ETXT5ok11WBLCTgkFYVBido8v9gz1yb7G2",
  "key24": "37f37wj42BLuDFrKEjNgdYGfeTCTxeAe7hpstLyCWP8khcFeRvd7jzjctkWHi96Nut5cJ2mPTTfesCv9RKAxP7tm",
  "key25": "5X9zHGLuproSr9ZjkWZj1su1RTJs2yqUFEUxAaPtGYcZrVoyjhUpsUHQCxgAJbbS9whd2Ys9oUpechbDm13hWPMv",
  "key26": "4gdZ8b7oG23J31qxdt5B5fgRaT3KNvdVEdDceLbutuMNf3j7cADhUMfCEPKEnzrsk75wDDfC4JkqqNPKoMYphkRZ",
  "key27": "5uKK3cYZjhaiqkEijRJH8uG9fKQPN9d9Uxz5739u5rkdvLWbg2epyXz3LSLA3oqK4gKjN8xgJvNtrmNZQJwREPzm",
  "key28": "5j8gGLyqbbcA3JxPGH5wQG3qoar57knyYQR8NkG8vSJj6B84ZMrMpS4kck4ThQfFQ7BwgEn6PkcSx4mnTzkC5v49",
  "key29": "3THUdqAWqWvjS4GuQpFESd3eLuSVpbjnuycDb8vAd4QSjZV9CkZHBrh6pcjDKGBiec34Fv9Y7P9krusJ9BffygNw",
  "key30": "2Xwuw2H4AfESzd5ktzqQUPHb1vWJQ6otpmFcTzQDFDgGg1B9xj21WXc4F7zjvE8Vgp5ivNqXv2qDv2CACq35JgZ5",
  "key31": "2D3rs3xJtEHMUFQzgnpZYGzF3frw9Asx6CJtYz5t6BWbvPX1EhfuV8gPQd8oannQ2MwbqXM8ZAdg5Sv4MEgUtda5",
  "key32": "5JBE4dCYa3KmKnbVqiGZovYRGDvEi5y4U3qxR2gdSTkJFS1KvYt3syWvQmpLH6j1iZXuLqje8hZgYphfYpQv8zsr"
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
