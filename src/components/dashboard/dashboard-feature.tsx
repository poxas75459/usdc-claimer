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
    "4yZMrBe4R2y2xcg5mGwEevTeV3C6Uua5gxFeQkSTLz148chknawLfajsLjXoscmiRqnkcG8GUxfcEyRHVtVzYxej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXUt29D3FAc5RuDpTibXVGS8Rp2hGiFpJwkpZK3WveZV6DLfUsnvGYBHJwmDUk8nRjBpwUcHGUVXo97XRyXu3Cm",
  "key1": "5aFrjmBeEfX9oDcfGBQKjnoCysgzcvAb6ycyTVSwfPYQCbv8deUKnNRZtJneXgB6Dou2wHFVHQbEGyLPsmTvPir7",
  "key2": "2vBvTXrzvGQa4Hmwd3k3jgvPsFJ4bMG6ncDgqoU4TZ9x4xKCcdSuuXWmzB4ek2oeVhQfPZ2TDcC7aKDnFJ1SWa7g",
  "key3": "2ysGN5xJDkcUcPA3ZDB5mzvMSQv45TiJA5ii2kgg6qbHDDhUCtUnUekzHDBdrjd8ezB4sGKKt3TR5NMj97kNyGg9",
  "key4": "3aXhesv9f6GUbvZQCBnbvHDpPfcNF71Kx9nQdQTFLxHn9Aq8G1TBL5AW3AW57fZ6MZ2pnypoRZ71qvGCNREXvGqM",
  "key5": "4pognZnyEcFgzXPxPp1Ja6aYiKhhABptRJhGg9SzE6Xdqi6s6CM4XhGyaDEUgGpHDWYpcfXqRo9HgenLse7m8H7K",
  "key6": "5C9SHYpW1CqDbueCm32brvuhsLF3LuwBTAZBk4ky6RVR8M8WBvnMymwujbEntFhF2XAvk54vRrSb8Zf1Sd2DBGTG",
  "key7": "2AeGEa64S7eeyL42PeZmWNU1jCMFWnTB8GEn4dCP7jso77ajg38fuPTCzS65UMXNFYHhcezaj3sqZs8jAzuVetZS",
  "key8": "3XaZ7FHsiLKPkcSym5nB6DNuTAPecVWv5N8jaoyXT9XxhUoVLLMFhjTVGqCaMN6TD9cpKVy7vcKqnPKusDLGmC14",
  "key9": "3bFF2vyiNhFZmR5vzsf7LEocqh9mbS4yvQ4kb4VGVrddXPhJxVCe3x6iVtgLTBkSLfjSHPh4mxykKpnBeoprcwy8",
  "key10": "2rSeVxYtcZwFt1yYcJa5TnwiRsSJ7SJhCxwKaM3i1PTDCo6sfRrbbhozgv7S5wz8K9fcCfaUQPt548T53rHFdk4W",
  "key11": "2qMw4jzp584otvhWradeY3yfm1hm7RTtz92mkyaaeN4YixJEPu2DcJgPKeNydGUbxVs2yNRrE9gFGkpnJL38jwki",
  "key12": "5PNeaQodHHZ6CS39wEJ4rS5UBUUuTGkGSGF4tix694M3CxnUNAeor1YKK7sPRjNt88ZTZoPPLYkHJgwHiMYmq5Kr",
  "key13": "665n9W2EemTMbnkUNmqtXwS1tivsUpiM59sR7TDTxWHfZ3VSULEgUU6q684foViXqBHEzx2p3fGpnc82iz44FZp7",
  "key14": "65zDtGR2mmFBGsebEojSGqnF5dywHoSdb5VDJQUk1fgTxq4NjduUVPsvTi4JrTHkRYcJjvcGsrfumpHQivCErLEE",
  "key15": "5s2vnWDhumJLQsamSzv44FmBxLkJuv6ihb7nwXXhpuDuzLDmqJ8kTLZqCJjrU44u7HyJbvnZ7yLkac3TMG6btBsF",
  "key16": "41wpHi8PGjcvjGxvMc1JCGD7bPRkh3es5i2xDauk5VWmcemFY3oaXnEtQwDxMPvygi5nnXJuvLCNwn3ZSxt4dtT3",
  "key17": "2E9TbThLCcEDfZfkwGL46kii4PfCtHBihi3AmeQoFSib8h7MHHeXA8Yi3Q6VYPBfvT2tqer2MMDYKuPtrBT6bhV",
  "key18": "33xWp15VrEYn9wCNSVq7Cs6LqUY2C3CFxNWgViHNSUGtw7gH1TZGWXDHFy8HT5i5aYkLDuoqXBaRRRCGN7Ej9XTq",
  "key19": "3eMWZHaST1dfixiGsZ76ZoH2zh6VT6po9ozWJ3UsGNimbAxekAuTKw4ZKVysSHnWUa9tv1caEZPNdDMdj5oAH8m6",
  "key20": "4HcVTVdaL2tWF6GKdhPmPWMKdPttE3wqtCXW2eGcaUDTwLjytyQ1Bz4TeCeAfTDnikX8aQ6mSX9UAfzj42Puq4Ba",
  "key21": "Teg5suxyScP7GXhc4SCkucwFFT5ZQ8FnkT4DWd7hbfoMvPuwqYESz4fa2KTFbjiPxqw9FnuKAsYFqi4JBsHdqcP",
  "key22": "5F94Rg2Ya9Ee5pdQeaLUUSf36KpKLiPUwPeQH9VzduQWa4Hy2sn1R84CmMXKdFkamDmoVubCEwLK8DTgfkMbR5KH",
  "key23": "j3Z5Ttcrc7nnmgYvGBZwAXT7vceXfStxaxZYxvw4rwBBdzwT8uUUymAFr5H63ipUpYyBptayWs9tMhC79K2oP4m",
  "key24": "3dewPF4XDN6UMiFfc94JokFxB4rxrXSDCHGgVdjX3CranjbMMPGK2Z4DcYw5jxoVXk6nc6fXA2dpx1upNxd4e6Dm",
  "key25": "5twnGFKtWMYxa4v1EGYNm2U6sxoXB3WEZhDTHqCTjbdnAMkWG81FdeAhxfo5MzNGDNUF3bZGKGfUT3KqyWs7wHY6",
  "key26": "5Wy58w3zCcF6v8AUYKFDuENoo5JcN3fQvadJR9Rnaev8wxbENU6RZgApYCisFVqFWTwtidMJs8krmkEY8tUe6H2a"
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
