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
    "2WySeX9NnPp6jRzN6KR6DybehXDAtuZYLZvEFxWoZZ1PNKCC1HkMLUTR35qEH1nvNTTJjo8EvoX3QSdH6WSUjBX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dfvC8z3E9McHtvX3j8QzfFeS2F78Y6hXtnSg68G3jE7PcbG97zixTK549j9kYm3iw8tKZDso8tfUjdNR7iTiaot",
  "key1": "2ciSzKW8f6iRZvrmBMz3yfWML7UeanHhsBxvNKg8ukE2r22orLqMWQhZnGrrNX6nbTrnARfwx5eAzY2YsAQFGG7g",
  "key2": "5ojJZavjDJrBJYqJRdo7Wy8Shz9YtgzDTivVNGz7Yt5rwKZKvcwLDfxsZx4RaXZoCdnHuvcu32nXnJ3oN6LwTvqz",
  "key3": "45RnMdu1MsURoTCND5dNF2CcsMPkAZq6UZvCaEwigMn6CkoRcVZzz6VdtvJe62Vw6HiJxe9yCgw9LBCVGT8nNsrb",
  "key4": "2CZ7b37rtHJDQukgTDTJH7i1KpppTqn5887huEj7vNVDHVhzzWMnpFuBVxWDLsbMK7Swh3xGgMv3sGcp3MrBYfSR",
  "key5": "4Wogj6JuNxYebuwgmhovX1nBUCdD4s3U18hbqdcmLaCgEbA8GVAcuJK5yNGU6Q1ttCPCi2Gdf2ihVaCfAq9VRmF7",
  "key6": "5bDScKRWwA3oHVLjFxnZqVszdZ9rXkermN9tFGcWSeesn8bVfgnbxfJLkJk5Q2WomiSQtmUKr2QTBPojurfZWmWV",
  "key7": "2nWe9mDYpTiS9qGA1pLJAKZe4E5VhoC7eojzSfHdMbQwWGWAtt4cjbhH8CFnvf9FxS4mHdLLVrR1oQ1rg8Dt3R4i",
  "key8": "5Wbrb9eUMA5tbE3mR1SMLLeyDNua6Py6nLbo4gdYGmpaQoY4zFUnRsEE4jvCabLfWnziMqbwJc5guvk6VFx1MSKJ",
  "key9": "4ohPdT794TVFPZu2gQLAanVVwpVPAfFx15aU8Ja7gFidGHYhhmtTBrYoPyd4FMAcDnN6T4fcwkzoczdStNHzmbHu",
  "key10": "5HgypYk5cDXta5N2JddunQF1ZdN4xA2e2cvtKUsjaBSHY8kjxzSWbgdqc6qP4Yyxdsp5JTraeLBDNS8CmHYGcdzU",
  "key11": "3z8Sk597aJpWw9ns1YnRKJG7yDRzWNCxKKJYZkibkLjdfz4uzPFSeQcDByXuA6SLDUBCFe5m4qZKpGSusrWtYFb6",
  "key12": "66f5NDJu8FBvxSeaRS2qQL6b95Unxar71ocHqAACpxmSWFh3RQXDhme3PqSKgFpwMkNn6ULHLST5cpmnArcZgrJR",
  "key13": "2HXtjpEpXkSqpcLw5Ss6UwgEdaygKLxo1A5DKri8UhD5CaYrCW9mKpvxBzFouFdfdM46weD3A5xZxY21WEeSKimt",
  "key14": "cscducqAd9vefwgw94eeowHHnZQ3jvC7tPUJCgWkDnkF16BS7kWkjCLQNbFbeXsXmEaoWhAQe2NLuwuJZvfabWk",
  "key15": "5qr4hFfe8Gz1noRFLeH9JTaPLu2HBmrKBHi2Fag3iEoZthDyV96fvRdjh5YcBB6iEeTJFhvUrEuhMhjaD68DxpYT",
  "key16": "49fqdYLQWcG3k88rJCBUK6UBgSuQTJ6XzxFBLrRqPHSoyusZqCAKLq5LHDK1bGXxP6iFmHjn3upFFM7bE9BKYiV1",
  "key17": "2fXE4wYpcnoTgqZ8t2SDmThW7CFY1af5yMzwbNMNj3VmQpyDiTUUZ69e6NrYzSgt35Sy6p5y8meoh8GQV1Xa8Uzf",
  "key18": "58KLt7br3Zk7ex6h54emazRDnKBjfDxTDCYzJGmHTsf6xjQLRnF5iQnGwvkUi8wTHqyAhgRsiTRREU5uKmnAXXCu",
  "key19": "2jFqVcSd64LhnZ3ihrQzAZifRR7ydMLnY769awQwrWPRZUPpReoxRgc5S3LCrJKxjBKYY2qXuhUweAE7tQnFeyT",
  "key20": "5gQLX93xRgbGoBttDUdoTj63ZXQ7ZFSbiV67j9Fk7xKrtECTj4CwJvUiDvRAQzeQCxWkirzxRv6bvsrpgZNRB3B9",
  "key21": "49cv17sevCim6NW1VG9PrpfJp6iBcgd25YVwDfQAEXWtBRavAw1Uv3yY12TUX8ZUNVSPQZNeMyigQoUG1G3hd8y",
  "key22": "3KnwihrPFeEiLLaxndnzfNock5E7RTcJcSmQMHDwoNaEEBPDp8kH3jhZKS2ftu7cmbbMqX7VpR41MAMqcpqtwkoz",
  "key23": "PHcz5ka3QgR6mbz4cgGTAry5vJ9FeVSdzmGaKa1y8WYpEQAyfC9n7k21kmxL3JwWC1fqP9PHtkQh3x9bULuFdgT",
  "key24": "2iAr5YhMHGMWsTV5ja4yFu4BVeZYf8hocLsqLfErXR6vZNd4Ce9vWtuJierwhY9p5jtxT68SWco6mppxZHPe5K7p",
  "key25": "2ZxCUn3J9WNx4Woyr3SkZpDmTPVTLFC9SE5d22dCMNDQodXMHdhZF3sb2nYyW1cW8oFe3cun1hRwouNhGWUaPqLq",
  "key26": "LJstMkx4mg5oaza2DkmS1pVcmC5cwsyL22BXKEsUAuTbT4JZuAwtRRpkHBpMDyWTiuf3o5UYwPG7KE48PRzrm67"
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
