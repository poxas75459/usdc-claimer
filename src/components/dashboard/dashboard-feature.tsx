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
    "2sBZgEyoWLbdvtpyGG2VF2HURLr934sUSFcB1s6Ma5hReR7S434dtBncRawygexRMbbehoB7dsE3gGbSma35akGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGBbKD4igRm1eNkdrXvqgb1A4vftTSPAre3fd4sRhmK3UruBBggVVj3RmHAQ7KcUPMBPGcFMwRbCQYcoFE92QMz",
  "key1": "26iwQWsdhYscrRVzozE3LNzeCNzHvHr8g3Hug8hoJXyv7YgFgpKQZTQF11kjHK1B3yXYRixgF3m9LTgB2kFodCjP",
  "key2": "46fg3mZZgRdDo9CTrpKDVfbKezRgJNm1Sx7tLqfuhdEGohNyTfM37KMfcKgfUUpsfeWnPq4Q1oN4KjAFwUuRJVbB",
  "key3": "3H5Nah1C3ErDxymW6unFzVkWYoPKJCjk8WEbSZkKdSJii56eq89dp6kYAysu1b863tPpk5EksSm5xGBkbn2d8eRC",
  "key4": "zRRWwQJJBXqtBQceWsHLVoxtTSYhAnGdBVi6yDXM8G4m68JYo7vAbfYRzkZ89hHss1FL4NJVkT7CDKbyGrEmeNz",
  "key5": "41iknSVpYuU5kbR8ZxGrBuygE6fK25sESxM5dsxh3df3SbFMAbXLUaomxTNHtVEDuNBqvQhevARnu5mVrvHevwMf",
  "key6": "GNZcEEojqfY27Sw9rGMjZ7CJXkUL3Tdn3w6FFTzUSGuvxXFmBikaqrhEW2rtmF84xEivTUfPWw9xoMmhm3cHTAh",
  "key7": "yQzVN5WZADTXXu5fQet1C8pwg1eHZCUzXyboaVUXMv5LWLgD6X3KHh86AD7G3MjAr6fuQpDNdYMBNJ9fojrpeqg",
  "key8": "5VokzRfhQXDU8SchQJbg3fd6ksMHZyv9zbP2yjG8GYqtrSJtv5VEaaEhBqgyWKAEv9zgEr66jQZRLX2NKjWoLqTx",
  "key9": "2RGCMUQjTseprSnqa4K6XtpBKK6eyjY98UDh6EzURZkxRboD6dC1auMdMtRDpmvWAeJgHgkbv42Mtst1B48q2CUq",
  "key10": "5JwBSwmeJHWGWEtsgjBiKRddqjDJqX3cVo1UzgmbvqUvmFH3dFb6f355xMwPn7Qy6swTALp5d5HB1pPQrhn38rn7",
  "key11": "4ysNoe4i5CzcTTBbXAqPzbtVZhEs7Qo7Uki6YHnCdoDHePWpUF5rXZHJkwiSds6sTimVF9V2zWtmbCnjzaGEdAy4",
  "key12": "4vMpdQ74Ey51wCHigijdqdSe4gZtWfNKvxxgcYnMZvzanB38Pfy4z1tnuqcjj5Re2RDefDeD9LwY31qaG8bbREv7",
  "key13": "3UxkmiXFXqfXe6sgjvgRw6puzE4reQwsKg7RAdDFjv57e7S7YiMvL5D2xZLsZoHwyHgw5Pf5VygKKEsfExNDRhoZ",
  "key14": "JXveSa6Q4LX6MNv1QezGPQtaLBhVvgHthEi7qkNEcXXizZEZvn2X4vSYoabsk84KeXedG2AhxNj97MkTv3kgous",
  "key15": "5fn1Ldm8GoGe7ZDJZ1aiPXFu6FsmzNkHpmwJXZ9aGJ1dqKjGwn3pFifrSm9WBd81FVvGcBZ98LeWRMaKjonvoxWF",
  "key16": "4YrtvivnZcoUUk22bRfUvTMYRu6F5K9sHUwGYUDikkKLmxSPVMbzeiodLxSKAgYGCpbDpJ7XHvEfAwF9dkqotjbD",
  "key17": "YERiMVepJzu88cJzAkhyFQnWnFmdh1v5cnnc85wdzasWcL1VaZ8fGhE5NKQ1fDKJEoPdgXTnqopwwihg2Q6iWjX",
  "key18": "2giYyaxB3DQfRi5LjbendQLFGTrDFfZA3a5LAsByEchvSvenDeKLbUiQ2qwbeKyXE8PG76jaQPiU9bZQAt9wRGzf",
  "key19": "rTVdd4J6x7iWkKbSid2Lem1GkREsZdwHDwj4tm2qcu1tCCTmg3oSoXswq6DnuoptvuGTnGb5CQsB85dfUVPXDbo",
  "key20": "xhrDcZhyHP5XhFSyT8h9U6MmaRBEN7QwqcJopVe77162ZeoKSR7m1Y9ZmmeZmiYM5mEnxcVjcLYdxFryx9qYH4E",
  "key21": "5R5o9J2dzGNbCyaU5MfzqLx7QZousz5Huz7RrfmES28PFm3uvKhki3jrbTpYqeG48Rn4pwBNmiRr5hRwz1TxhcCP",
  "key22": "2RGTD82morcijaJqQ5UWvLALFYDkpsQF26tTdx31HRaMNXZy3kNmA7A9hNrs74kJS4pTPfZWmRwCzVYkUmVoafHG",
  "key23": "8MCBWpzgsfSW8dZ8kNL6nLW2mGuJfHxoFnVFVEC9EyUgNApYBb3kCk9iquthc6Efd3uTTnBBEceE4HRRxhrrGvk",
  "key24": "kfXuB2r39jYqiQTd7MXHvxmspoALUS5AvDkx968kuLqCvJpqLwxqd5TwhRhTcmEaeWWu6EipSnJDY2ua6n4PxPz",
  "key25": "9yDz3P7uRij4tTM2ufcCfQNfZGavnen1CCzaD7bDnFpmGPFyk4n36R3agGUaZ8UXKbibS3FDMb1JfMaRLafUzUA",
  "key26": "3DvwxBHEMhKTdh6Pxg4z6CJBRkFN3pym2qn4uXC4LvFSKwpuMBNF3sMohGERKSY2jEzmp4gu4U5VUePytBdFSXPG",
  "key27": "3UaG9xBukrEjMCsdgTUz6jUkjsdvfQXuuZ3ED5PR6vEDkBH82CeKMvZ2YWTAxoHU8EoCvoAAc6bJSSV3nJVnqgYW",
  "key28": "4nrbGLG9TeahRNvpoy1M2ZaueRg4DV7imoyqnpuQLnofJ6yhjTZVwnupvWuV2kRQMeLU7m2wegBqWZYBZinwWcfp",
  "key29": "4DG25gi7RnP8G3YHEvGyh2Hf83ELPxUbnvHnjjC1veMoxT1ASTYJRXJquyBQHnRH29Wa5rvLgTYLt74kYpG8PJnH",
  "key30": "6S58b1LHmD3h1BBP8TXuNQHavNqbL1mP6HwbSMpHkRao5dyaDq1baZ3HFRy7Lwxf5ijoW4uVVxBpZsC3ctjBhKS",
  "key31": "XWTSm12gK42guD2etfoaYDDixD6anRbC2wV69e2KdoLcRC5u1NN98yaj3GaAQLuToSZYcieNZ7BMAuJyfywD3aM",
  "key32": "3KKuRxBFptLXYGDErkaTpanaAqU3QkJxN46B6yQLjLfNrjG7mtfVug9hAYycMAm3gQCS6BvgZggKrPuXCj25stsd",
  "key33": "5mC3SDvssJd6HH2d4VuchwmkA5gqVS2VvhuBZYopMLwyiinN5daKCbU199CjTSkpMDbWzEQBahvx6ncn7o5skBz6",
  "key34": "2v4YmMmyp6QCff6hX7zinR8qPwJMzSZCoPgWacRWnnSANt9sWk55xWgwFTymDB4up2Wj6fGTJtNe2UHZgrPE3Hrt",
  "key35": "58fVZXhTvjbKULbGfdwB6GbyqRapPzQR2aW1wcSZqDBPLzPxYeLd4268J8e7JVzaMBgzwLsL7LhSpzrxDUHJutJf",
  "key36": "3da76PDqcg9sEWcrUmeMgJCFMiJUGVN3mQAQgdkAcM1Vw3TdT4KHN8J9btNxUqRk8GTYi4TWdRtvmS24D618eTYj",
  "key37": "2zHwoZJ7PP1pfthUL8AjdeX32FqcN7z2RYBw7gy4GGweG8hwXeoo66qjPKY8an5NWkbJ7MvwCCHV7YS9xnLcBj2H",
  "key38": "55uKakVewgszZzCsRBqCCeVUy6daFFkD3KCYJsV3mnVu6KLroCbavRCJi4b2XxibN16Njov5kv9TYmUn5HFqrz1y"
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
