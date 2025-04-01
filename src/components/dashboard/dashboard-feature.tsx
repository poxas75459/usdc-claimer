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
    "5E1LaRLU6tsuzZg5d6LEeJGBUL5gFWmwpxLzTGrZMdXpZK9raUVWHvexhDzxw9wAAHcQGTV7FL5M63xrQaR2SNsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qny4EgpXQoBT9HXF3cUD4FvJSGfpoBfZAgBLGX4Hzwc5NAT9r2egTxesComtCuut7PF9phecPMU4w3SDKngm3jC",
  "key1": "2gBiyPTP6oTX5yjWNu36pH6yYYG8XkjS9niSsRbZbpvyKitW2Zn6w7UnR7uuo1XQ7tvjjN4e2nXtq9k2ixbarYyu",
  "key2": "249gictEtXuxag6bU6saebWHoE3ZLBquvXgvspAyYJugC4kMpE92eE6aBk56JnsDJ8jWTkfraNqWBRpjPwN2LjD9",
  "key3": "5nkXwxSxZpmH4VJCYVGLoxhb77T3EUet7fsgDVG7zqME4DAgHjmS8v678R1Afh6eEE8gEX8veU6ndPx8Kk5Hb86o",
  "key4": "4FbZkCtrFe7MS5guNaLXWLAVUhVcpoQh5ohoWbPsLYVutRGyfn9nAiSWP1GeBA9DatFFdLVHsneZrowwWbyi8KED",
  "key5": "46fpsjNYeVr8KF2eMYoRCEYRQ9X1bm9gznjLzesUk9pc4ovozjUabj99uBBj9ZXVU7WYBPrPAFyu4H4SLnP8ccMz",
  "key6": "WLaNGaJoX42aDBhwqjuaTCn1wssr3NzZ55rk6DTYwz6SKBjzt8S6jcbuCvSVe9BnJaWzKt5oDGgzEgQxGVLaxCB",
  "key7": "2gaDUTYXCRjJ7Vc5GGznA4x3LiTqBgJL3gp9CwCDEbHrh3KvkufuopXeAax7Xy7AD2PdLw8D52YBz1NuH7WNgSe8",
  "key8": "4j54nHB5JKYzoeQchauoT6ci674MiVs2zG3t1nggcrGjhqjdRsAnycoCamqKoX4oqQLfEKyfzmkehKYk9VfrGa1m",
  "key9": "3TGATdwFx4DvkS8o9j3xos32KqHtaLBKRArCf3k2LFXGC7mnqZDs7DSbZVnWvDt686y1Ph5zRuApkxnEJUnMwMVC",
  "key10": "3uwdTBctSmVnwzywBcACGSD8LAXGeE5nEhX2FgJ3j1jeqDTJsMcrW6qbiUa6oQFVvzbMQLgsDuG7ZRkRjvZwUbBi",
  "key11": "4ADaViW5jCQVF9oDR9t1hk7oxAW8vTZ1fVHG78H6XHZFxdvp5Ekeyt8C36Ee1AHPvT1U3APqxPsWxKNb9FUE1Ko3",
  "key12": "d3VwXMZ8uYsgpwwzfikfYBZ8pmzxS1GsSaa18dgHPraa3BYjjF5up7kdCPAPYUCALkAUSc8W8N6b8dyiybSeY2J",
  "key13": "4T5xgdxvoNQ8SScpU5uepwA9zMsvTN93qZxNRx5hH32GNEYdTBz31xUGdu1QBL7Lpu29Au2YSehdf5vLqG59QQwu",
  "key14": "3gLUoRoMwddh6SxmoEFZdC4aHpAmeaFAk6CStjhhczAgFi99tm4a9BbWHkGQ5o7rzHHEzwVXmH3PYWE2Y7Pmcsht",
  "key15": "X79BFU3eqtAF2iGZbmoQQTJy337shRD9PLXQQXAe88Y7yctbu3pdq5v5zLZeNdgGXvMexoWyYgm58wrmTdFvPAn",
  "key16": "4FjWpc22RSHLogdVG9bWnyJFtzRBHyPrnYZ3e6fn2Gt6ERUBXJsq3TYwmJBCzCLGKHw41vwnWnnLECqk4937udye",
  "key17": "NUxCh5ruP8YQRYCtzVa9WvU7FhyERfmePT72KnpJdTLiTDf596bMAtWUqXqyLBSFzcrFgRp3nPc25Bw4svfKNLE",
  "key18": "kgnQDPGoaLxao2mLs9XJcJmi6swdFw1WLSUC7frPBLmcuEkjUpjuBvPruXzgqar2pBkn52LcWUfq9JdqMjavhDz",
  "key19": "2UVqKv3uxxzwy9au3WeW7NBGNo1K6QEdhHT7A8FT62ppRfQKsjHxHjF5g2d15g4u8igK3D4t2FrvNsErSni9wGUU",
  "key20": "5DXez5iq7xhux1oBMbqaVovCjoJigKgmbM9KgU9KwpB5CFxpfotHGuJKfEWAz26oKpr6ZKX3UJezCzvFw28Z1BAQ",
  "key21": "Chi2jTAjqR2MLVz3GLvpBqviDubsorYyCwgGUNQxMXxmsbzTT668ZW3uXhjTkFLjgDuchfSP4zQQz6ZSThBh7MT",
  "key22": "4CUcpXzzFpAwoFmtguXzftxvgKYZEkujJhsvrMY5zYXwC4bMGBtQWypDayQUZfZfsCh1eVtgjDcZ7GiVYxxrYmiq",
  "key23": "2Ld6iqHtnP8tD38fNAtU5EUHRBC9YG6Q6kBYf3U3om23qv8zyrrumjosbxzx8YdKR2yYHta4eeWqq87iHhKTyP6V",
  "key24": "4xRs4VjFpnVGxgmoUEe5x2PBYWWZqdA5AAPhZgapMEGzyPggt1rcs2KCziZ7fsuPxyQsRxoe4nYRfvYnYSEyasJC",
  "key25": "35LnNoUgZG8y6SEv9vCmaeeB1YsSy3VKUGU6FnyuVazZbQM4TPG93nuxbkQNaAShY1jxLoEkaNcfLrvw2fL3e6he",
  "key26": "2su3sGFEbYqAkoArC7xAT5nhkcGEbxUcCkzWuXUqJevzQ8zmdcxKXSV8y3uaZBQYv4RwAQinExAHKyVkHrkP4wu8",
  "key27": "Rha3BJQ8Ed5KkXTj1haHvNSBnLMWcUhPjoyLyctBAK4docLBsxrzycmV83bwx4xbYKE7eCrFrQGPaEUypm261dc",
  "key28": "31nLGgFMkAzEfsCfkY1TSxjqHGqqu3SXKdC7zaGU62e7PDiYz3upVoGDj873hoq7GRDCYx7Y5xCfzVwNTEycaLQX",
  "key29": "4jLLaEeycctoh6oSfqWNRMEVcN8D8GATt7fY6Q55c1RmvRXfVPAXgqPHBcGrYxMgPxNvCWLoMvVDirYeWM7H6oCH",
  "key30": "4Wmtbbc8nVAfKxApkhjExjZjwEYa3Grn5tKS1uk3SiPTNuTStyivERTqfshuXxQJrtJEqSyPg2DNdrqrmyst6Wfj",
  "key31": "3VnvUYJu7CrsCh4gUpqmZECJzsAoSg8arKpHfFx7PnbGnuco6V4UGRwvAq3vLZ1YmzXJ2xp8GopwTgcgJ2caUQ7J",
  "key32": "3veBW77rWRSxwMWKb3BTRf3g7iT8XftMFvVRd4M2Rkxp21JTp9FquvAM6hFr7q7ogMea9samcCTGSMfoX9ujxiok",
  "key33": "4UvKoT71wZ9XiJrhj7rG2ca8uMjKmnArpAcNs6g1GmkQ69KnmsBg93LVhLZaRtMjsX3CjRPhXa1nz8bpqviQL6rB",
  "key34": "53Rb8qk2BmMqv1NZsoDv5DpL6TdTSehXcF59Hy37b2UXwY7XukRgYwbWBBrP6Bzd7b1dQunarRrE6XHre5ex6fpU",
  "key35": "3w3yLnZUL6GbRgNxZBXuMsWNDrZiKgZXprRsQnAzggY4ALN9RiBSGSzYgX46MZUq6fDBsjwXjq8STvpDE8GUY9gq",
  "key36": "5LoTmfDCtuJCPDw5SrnCct9w6c8yiSPUEm83SsgsJJz57fHpB9eYXhxVeMujpCy9BfwXzeYYpVJ7UPGTipu79vGH",
  "key37": "3ep2fQVGAh2SmRrhmvAtwbTmJtcTLUdCLpJytqopjSNT8y8jHQRgLduHBHiFni55JtmC4pbS6NYFHzQUp6siAMQA",
  "key38": "2Rp5Mvt1MpfXw2sN2YMRBwURGBHrhHmfuJPrRHpdGzFqtraLbWc3runHFKT6tmYZuHXRGpMnmmr4qpgwFWSP45gf",
  "key39": "hPhEh92VsGijc8cKk7ZJ9GfFpmrSjkj9RDQyuRCk79XxJt9EDadNhHqEvNMmisi75ANvwDt4VnrRo6S2iM6oiug",
  "key40": "3MLRUzmxs9F6EVrjvU2XmhvkDF3uEvxtYeeWizYRmbYhFLFaDJqyUs2EFG3KCAuwBWymewDGX6wu9fmJ7uHewLqB",
  "key41": "31hDYWgjeMseViQ9P3zZmzXiwyTTxqR6wPpqYxgDiaJY8cnwE3NUWgiy7Po6yZsjgPZoL7rc7KHtdi7m6LP7Axnd"
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
