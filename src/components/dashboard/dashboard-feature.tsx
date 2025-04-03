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
    "37dnvwEGbrWGHpy5mUBUm6xANBB8pHMj4aiuNaR7HpMUZifFuWBaWuyyZukjNSVoh3avAdnj5y3XT4PeqwPu31nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RciDh9GwVUKXVjxVjGMVE6cdMrTs7SQ7hEKBVADfE4fqnh82G7axcgZQ6aMHhgcBRdhY1Eo4siLkakD3eRezo1j",
  "key1": "5p1WxSr7MwJ2LAGw1wxMKGF35V8oKKCSBGb2rVM9Hi2bJu8AtHfV7XYPytw7q1Pyws6gJXjWeuccTsDgBVNg3EH",
  "key2": "4vjZmg73acAuxkkR2bQuPVa1peh8TbQAQqSsN2MMHS4JMaF4ewYjGm2G4x8vZN56QGawpfaVKrDyAgJqgFMMqufk",
  "key3": "4h1mXJQQD26HoxX3rW32afYYEEiENoTCexHrQNLKZRGw5VDG1PZuHvMvP6mwdzJkPZzwsGUufp8vj7PauN2HcaCF",
  "key4": "62VvPP2QJUreJzRtS7Te2cVV8EUFbpmiwzhCQgjniWEzkc2wvNSt7NR5mtZ4nVoc4diZqzMd5WUmQmK1LvdNJ1Zi",
  "key5": "5R6QJFNDqsPtZuqoeG77DjyjjeYpXFPJr3x296T9DFZjPFNv8VjB5vdkn3mS9zRT67sWuqsLoY2cqjsKrt8YLzdS",
  "key6": "2y5MSjGhLPJEUHe6ZLrDjPFR33m5sHsFeRAEqLmgiTRaqbLnoQyBR7TR62aPvFGJ8KtvCosnPbA8qLaqz1dBqV4m",
  "key7": "4HCcrMXSxyssx2nP4EdEJnphqZDQAiarN4bEJGMT7nRQaUE1U7gwtrYDka6RmXd52ivXVjcu6Ng8Xt6tTatVYhfs",
  "key8": "4EHt7xVzw95LNuMPfk7UEhGnNSX39AZsM3CVz1HNc98X4BpuKihFrdrNFiigRzM5nidbM4K6vA5nnY6SMUZf5b3H",
  "key9": "4utmBDA1LxTta2jXbmzutKdjShYex3UoVC4EDUvFg9vNiSMmU2HeDHDn123jDaxw7nGWfjiZxREGe5xtgtztp6xq",
  "key10": "5sVzWcdmKFJcaynAraCQnuZzrb59V6X9qcB3uL8oVozhmd49dwoohvWa822yimA4qkD8ZNvm9RZdGXVNWCZ1FKFh",
  "key11": "y1ucgjbP9S3pYxV5chXzNHRWguzoK9xyeLvXA78bgSCfy1jRQfBkNBhFwRU8vHNHy8E2KG4WgNZ3nBH7U1eMLXS",
  "key12": "3KErwpMyKM5FS4Xushvb9Cs3hu2d3SswWDDXfMFzWQaJvH1mXG9dTEit2b8y31fdipqWYHh5HG8nGkNjTU2RmFEC",
  "key13": "5UFG8dm58dU8ZcUNk4gACqUQnR8bU9pRexpJbfvNxaP6sAheePgAxNwwqDw4PMJkYx5zemkW4ZhPQJ3paQwkEiiP",
  "key14": "52YdW8HLQ2q8ZWYvggz4pEBjUNAf9hkdESWX2G9BTAo93LhLkoaaRERyzNxTmueQc9u2M2P5FPixi4srpxn4SxQ8",
  "key15": "42SXmud7o8F2c4iwJbYnJG9ctj1fDNq3TMvTqQRYXX6VsfsN3kkYC28R38eUhReWdYhsbmvAD7SGB1UVQwcDxz7Z",
  "key16": "5Na4TojtmM5sjvzS1muw3whjcaxNZvLQptjwWfE3TTENQeYWe6f4WjaN6UHbcL8yt2QRR7ksvDWYJSNDLLjUKkeP",
  "key17": "5cFRgbYiz17w76KmmBpfgVC3QdvCX51NYdsdsKPMH8GNy6wWmW2U3MrYKkRnvcvZXCGwRnQyQ27MiuCHMRqzSzRA",
  "key18": "3BYXzoAUVk1M42Jr3sRvh1vBMUx9w9JR1rswLWjNbTTXAD8azf3hFiXwmPnbzkCcRuQHuAiVZr4BCjVnkHUkdgRB",
  "key19": "2KyutQnDgHudWZJvYLLAd4mQRxfGeMLisYeEsa1Rr7HyA9ApkpkjdD2GjGxN5ZCt2eLEMwnP8hfE6JAabekZ1sDY",
  "key20": "5ev8H6nuYKh8sHgNdRj7HyWBHUT7Y8E2zHezY8Cam6bGtN4YjmY6raPp8VD6MSgZZfCqhLtrjqji7C8SiJ5tjF5j",
  "key21": "UzgaDduzWtdJDmNJ4ULqVKBCLcNuvDszEuBXAoC3xLF41DSAee74T1oQQCifzZionXZT29Qbp9Da5Kb92EEen7J",
  "key22": "2S1KN6uFeQBBaCoF6Vanu3iK1pwJP1qTpom3du4eMWkXA3jtQGCe6TRUacKV6T9huQoRRFGnakTfLGVQRTLju5uA",
  "key23": "5AJS4BqL6tESrcUpueEXqf7sPCXRuF8KxH1EfyU4bHx5fvLAEaesUt917diJzHhENMBpqxa6gR6HUvXDfxe9W6Nw",
  "key24": "5iELjsZ4zXwyLh7ANejbaih2VBuRnuoU9f9ngyQx85Mhkdeg1M5DV7p1L1zdGUndigAfBdM3qStHcNEzHgKaYLBz",
  "key25": "4PHTGTiAyZvwsxriPVnkPGJgpn5eNWxNgfANipZoZZX4sVe7DdMUEAAC62qPLCwuuVq6fjpsqj4cXkfAhZUvFUh9",
  "key26": "2d5inrtsDgXBLxPZLY11LZBc1nwebFEMhCXUK9vgFezvRA68prQ4untJ6KLDSx6epU3U9HTkFcsfhoMaexxa4veg",
  "key27": "yQup9CZX9oZTAsjAjwEb2jdUMbrhf7zhhmZ3qLDVsvQ2ryrQdYq77aqWr4eRB5tE47KfrdMwEdWew341JPST1zp",
  "key28": "341EUzsviYjmWxGgqDSxv5y9P15Z3NFDRjsEbndsrMCsBbYHCDi5ZVi8RvGJe3zEnq1XNQxpWWSVwdP7mv9HhdRH",
  "key29": "2jacKYTFBhdjJkbcD7KvEpVHnuREswEWowzSzKxPHKRwFiggw4uqN8ocYEwfU3UpVVPqarnRHTsco22ShRfae56z",
  "key30": "3vs3Y9oynaYQZ76tAeZrcAUQRKTP5JCRb915mZddW4BsEazjo6meJEF7wwxb2PAQhBMKqJcGxcFkxi3A342NSgmW",
  "key31": "3exXrpXgUtCEr5RDEBGB1hbeopEx445y6sqDj2AhWDvBPGzdWK2u23jyi4mVzEXU4xjDeNR8JvuvnJyTKqu8yFL2",
  "key32": "YZLzBXuBYn7K7ABNPPTLkiVDE6XyCxqUiWvDLBgRob8wJgkRCakmeikqwdtCsiU7MNtxuqnzdPRuURQjAX9Uiz9",
  "key33": "2tCpBJj8evCsQkAtBvrA59wzcvfzbSm4BouVtRNz2ddB8T6wLp47wu6gCTT9odK9cJEfvHSZf72YLuUSLqSVeNwK",
  "key34": "3DxPyJBqGar9Ugj8c8Xgi6xLa1pNqaWe6UA5Pq4cJFi7ayXJEX8Mb2kuW8csvsgj2Pi9qb7RY3F5xwcMavVUrGXP",
  "key35": "5othYECgL5nVJriHQfHsv4jk3orhkxkymCErse5txM3vYXdEwmfWiV1mgd2syDsDHCXqheDnd6inxehfyV7Eqaxg",
  "key36": "4kWagcwHJbrdWX89zkjdjoKgeNzE3sbAhC1bEniFsH6jTkSy32LtHBuHBCMhdPeuQFuJS1dm8Q3tEEPivFXGC9as",
  "key37": "5P78fA7dWgzxm2cJWM7HARcYmSz4m6fW93xo7j5rq5dkS6m3emyqsPfBbbAuvsFYVGWSo6jp2pVD2jGEnbQy7xkS",
  "key38": "58az5Yjc8BNrTyjZQZi4jEYLxbdnKcAz7ifYmMMPTgu82ivFPFYUkzgdMQJCBVEKpnVNVJjDdDfDeKG4Wqv3NQYw",
  "key39": "4a8Kx8Rc4p9cnEx4NiXaaF5KUuZcnPe3K9zB4Qyx89aSkXjCQxu3zkkLuHRBQpm1KgN1j8RebGwsc8SKf4mVXFF9",
  "key40": "2L74yXaWva1rrhj8tkHpkmTNXyUNc9QfzAUPZJBVzc4S5ocqjhhjXxpnjGtzbFJTwewAkUuXYMMUKcnTscXrdsmH",
  "key41": "RLKgKzNaZ7iNaBK1ErkbPZnCvDidaKLoxsbSAgGHjtHWVWpQdvtXCRZvGEyeDFCJnvRy5pPTrxwxXRqhufa5mVQ",
  "key42": "2gYEoMqM9NZc8PzJkFbhBxcBJU21yw2tjTZNBGGtQcdmBHercDiK1BZUrBfLiMcHsoQQ5ZmzYgALNbADNLEH9nGY",
  "key43": "zHZanp7PJ3fqzRNeojk1bHyDBG2L9p5JxdjmoAZEFuHJWyCr5ZkbR3mdvTAPD2yJVJRuXXsgBsRBNisvKKjvt9f",
  "key44": "225NFYhfPQ4fcA8twAYd7CyjYJmKHataSvuLhXFBqM6rKGuJy1VUeeXb6n4xKJRd2CEhjN6uDThtuMnk82WzjwBD",
  "key45": "FbJZmRSMvVAVCPraaLtdpnr74f3pqXbBCjNjGRYyjBGpufDzJfYMZXEbtJaVbZSHqUiJrYpzKSUFQPVxtBVvpnb",
  "key46": "3Wbwv11RRzqwBjXmYRygikf7zTcuDx8pgS9PNSdkSQ4R4dygQ4ChZsBJx7foZhJ41bCXr8YznTq85fVtMdQt3Duk",
  "key47": "4zLBUp4A7n91d9JyeiqXskoPRaP8J9pERFQhZrvLGHXkUF5skD5n5F5fAghsPViZHc56kxhSzow8oLRUXF5AkXpy"
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
