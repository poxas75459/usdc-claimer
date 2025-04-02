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
    "4kiQAE97CR6fD7cCfPD4MUKgoADbPwnCDhotFrvcNxqQmGcnpdKFxdmX6n9BowPMYuVw2LLWgdwx7bN6LRcpDPio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56yLykxbkQfN89xyarnyN8Jm6jtscke83yUpv3GWc3F8ZLXCK7TJMthPotxign3xSF3UP6TdPBBLyGmZUx1DCMEy",
  "key1": "5PHVQ5n1CS4pPMZ8KqkAaGsK6CSsJQxg7ceiLppTpkzkZjvGXAE47oXDMFDkxQsGJXiuubmDWAGdMnEnZnwRi4qe",
  "key2": "7ZiBABPs9BgPD9jEq7ykwGiEw16mVmSnP864DQWxoJgh9sCEioYyVQV1S7fzhhMhuEfZJvpDKN3i7EHYdTHvv7o",
  "key3": "RaZ4bUkFB2ihz2yBYQAsKRAhZ619JxM8KdeBmdE5PjtAqMc4iKJwV7uonMqRzZhGpMMUWMkL2KfCE8EseVVjKGk",
  "key4": "siKj9h4jKQtxYagRq7t4RaLEr8DsRJK69aea1kQo9DfPADFtwYsK9rfMnD9Q9kVk2ho98v5GBwEvnXoCWKCzu3R",
  "key5": "5iByBg2LytprnWa2ZUb7XiraSttf4RiFv4yBbiqRS3FZnDeQ6ngwamLDMq6QijTqarDreJimLNSJfqaAwsbz4hoC",
  "key6": "4wmcBZ6TJLU16oXo1VVo7DF1DUFhACbLEpE41651PzXngwk2KdN4okoTriECSaoK87yQ96Sv1NC92vEQqWj7c2bJ",
  "key7": "448UuzwoXFG9HVA1cRRgGNJKV1gc7S5HtH8SeqvdZZpMJo1cmCkmAyzyc8GaajYUfxRU7D3CpNNAVyj2UST8Mwzw",
  "key8": "4vfTYKZV1RZRrDkvHQBk5B3XL1qmFWHAiPGeX5FAhjubj8n4tYa5ZG1wYJjEZoQ3fxYDv1xudu5q2GBJaham1JH4",
  "key9": "4C8fk2N7AiKxY7H5YxR3TS1uKuhybYdhoPD2U9f4CpiPMJJEuEjp8NmvuHUFQr24DJPH7HX88KwMeQbvXUD5iZpL",
  "key10": "3E98BtqrhpJnbAFvKJGDPLshp8xdRDBTadmTgN26LMXAHKCKFqJNgB2XRk9E1hkLS8TKJrXa38eYKLCQqkTngVuv",
  "key11": "2wpZaAz9Te6CZbvg9ySNVnqQJKqaLSSx9BiRbsSM9FY4ryuxUFHfctvQJN4xftyKSm1EE6F335Ccadk1sHjnmcgR",
  "key12": "3UcTgVnLbjANxTrAS9eNAfAH46apkaXAsnrNCQQhyjL5Dw9tC3ZS8JqMMJULhjRsTpSNZLQxiXUy5Ke1XZjgqRsP",
  "key13": "5wXkqi9VhuweFUh6c1DBVWQmSsxh1iBPgPPWVKi6qwrjhDLNXxgNoMrrobewNg6euHqUqaRPurqwJ8ePeNhFtzAb",
  "key14": "5dkcrq9EL8fhD6mK7qxGfxCK44HNuDggob6zEPLZHpHrMKGSi7fVUWBGw1AtMCn3G3YBKQyZcZeWGcz5h2dpYdrK",
  "key15": "653mnFuX5FdAQ111S5LPD8bcEdKRT2yFLPEBNUDRJ55YNbw2vxhqZXT76eEzDgM1wTp8kTP2DaeTKb8aprToZhqj",
  "key16": "4oJw36aFSxfzGCw7YEKziAgDdNxAwz6d3y7yW1YTcCKGurtsLy1XWho832iys7JGiFWsdS3bcu3Mm37NCPVPRRZy",
  "key17": "2ttdYmJw6P7SFVGeSHBPtC64B6Djvqt9th3W3dVbrubrrtTmmyWqmmirNTKUBMA9Ah7XrhaPW3B5woq6Cy3mHxVA",
  "key18": "4UyCe8LkzU2BNfy2N6pvmyySMKk1EDzfPAkyrjyMub8jcpKB4VVDw6ZVDv8QRh8tpZ1R1YKCSQTqLNU6GnkYVVLP",
  "key19": "3Dh8pBJDHRoParB2MzyPtyZkVkEPbVXpZrJrrU31yGHdgWX2p25BS9vhxYyEx8jMSHKspwFKc63HbXWgHUbAnweG",
  "key20": "4uhTtrXpKuR6trwfMvH5dmS488AGYJE5mymLqLpsp4kfaWofscWuVza88MnjUebDAEDfDg3ztwrJpNDSNoGM9mzQ",
  "key21": "5UcWgZwwsUPDikW5Wbd5YAqYaqea6iJzkKVksqd9nhPcritVYZEN4Gkz7gctzDDrsHYim7RkeAGHaUpwvTd89jgD",
  "key22": "29j36pc1UcQZ1pCzAe21NPp2qW6CYwrmz823SkwrF5QnquVKe8wUU7n28AvNf3nBqtPbTdyv2TWXRkaBNAwVYByC",
  "key23": "bH4f3btyhXfbe3PgVYra4fD2KieKmbh47kAWMStFAanFB9iTnWUYGVXCfak8u4U71vSVGKNEiW692drKrSvLg1r",
  "key24": "5Fik7qProVDgdyjm7cskQfEBcDATtVG4VJczqaS1QF6eg6Bu2EoYrFjbwLKdkucLii6JEFYK5qY5pACdEHVYi7oM",
  "key25": "3Ch9mZvL1aSH88yeKR99SgsM6vBNTNLut4Jva5AGqkRGw1Zn925AnG5dBAWnDNEvmH7eFr5iXshxnUD88tPAHghB",
  "key26": "3Mh9oJQteUBQMmoK8M2svx6UxLZk1H5fJQxHTViYNwiwavcsomgnZpdy898Kk1nSmFaLTMbwnvAnACTNVj5CbipN",
  "key27": "2vV78bBttS6AfhtzxMsCiRggh6MsEteVkiXSzrB3iNNoqRaE9nnhfzgxgWnnETKNHeemFSvmUQjdDRoKX8F7rB7S",
  "key28": "4MTfG2ARbBDR6muDMYXfzC7Uym9TZ8RtSTNieS8LQKJtUrrDz1n9tfmuFJgyStFVE4fgBhwKg7EkRGPzvasmghUx",
  "key29": "PNV2WRrFUq8D5i7oB8burhWFVeZQF6wcBqn85ThzU5assKDDAgUBe9UVzZ8jKzWT2APj8FZUJfPETEJPcff4Xnh",
  "key30": "4D41fh2B4CkNNXcccDBNiAvjC9JhcN1fMU9NE7sDQaHmZhowgY3JJoPJiAi5mfuuLjSkewzvoqKNFT2xFec59CGu",
  "key31": "7SrvKsseCJ4pTxtKp6sP9jsyFmRQvJQjdr1UXQ1uDV3PyzA4GeRiiDUdLPMz6Y1iqPUdU4sXFzZ59uBvMYUeeu4",
  "key32": "pXmRkS8B3gfTWzaooY1zHnggpJq55RDrHRMqNjw1HDgpuNg5Vj5MjtaC6bnzkNEK3pUe1StHsAbyNjoCt1yY54e",
  "key33": "3cj9Lyu37sY4mTkjNmSqjuGmFBnfhDEagFSNMcf2yCyRtR96oQfPitXGXVUqSsgasfKKN7CC7KHpWPYog8ZothTY",
  "key34": "FFpmzqLYJUdNmDfVuKzvNuFijNt4Qwucjc9HiC9QGqNNe9NDm3im98i5MGCroUvRvMiBbADwFkr99x3soLhiUiZ",
  "key35": "64VqhvmK8mhkUGEgHPf3iv1HcHbVt5xn7gtP33YAwQS6fP67kANqGv6tikvq6ApMdW2YToFZysERXRF8BvtXMUva",
  "key36": "57Ly8j2q3Xwe5e51JwXQqGhKW88haEsJZBMiWHMnTurgkdF1HRoNCnUiop8ehU1BDRSh9bofwXZW8YRiKyqUTBq5"
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
