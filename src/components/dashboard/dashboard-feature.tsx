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
    "3uWRkaqk2rkyAzh2cvN5tWwaQBhipELkKqhRgK5xVzYcJsuFPjeunyYAWrYLe5r9yFwZJrvQw9Y6WkLKWg6YRuJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a21R8ejDsSaohfS6p5ifoTRCFLUCBtu2AtzQVCjtJTJ8QoPvRwDy5HJgH6RFjttQFcyKUU8J9fYFnb5fZD5w7ku",
  "key1": "3tcrPtTAd4eTp6ptLwj2ZGrvjQ5jkQv7qALJds1EcUVHCjqGLN7Qn43XHs69e48oozSbzDz3saD7mhpgnvxbrNnX",
  "key2": "5Edmb47f4TEgm7nLVMxfhNh6jyP2Zd3WoWRwnXJqTix5fUFfVP6aFcpGQZT2Szsyw8c6ardPhr6Y3BrkLufm7MwR",
  "key3": "tvtYfSPs1LwXoGsYkTUSWnD9w8StLnxPppteboS5xJT8cAEZLZram4ndYqvvfcTW6eg2ydbKSZMs7tzZnYDApNb",
  "key4": "KGduY1WZbEk8duNrTSjYvZUJ9Q1w8kafTVn8fpqRZAwFhzECB6CCmN7En4yhzGpZXviLJZfGNNnJtHXbyb2HRJR",
  "key5": "5HhgK6X1rxrfegwxFv4md6ZB1662kqQSFpG4WiUQQQw5VSktRKb4SsTun7L47jSD9rYKzRwj5JZQb1z83zawYeVY",
  "key6": "4gagEhJobFHUgLAB5Sa8TQaBkMzp6cub5YeFRJBPvCxCkUKrJ34vGToWnMb3s7j37DwQLaJMrEtKkKX97E7RfYYQ",
  "key7": "3VwdkEeLrS8iQVf82h2VTSiEQfMpcjP5oDGA3xPKw2mrfcr6rMPpu1BmsqAoZqYWTEJSwNL7iQn8MHg1oqaz8vtC",
  "key8": "24aFjxJKUA7qxukZw973x94RGZy4KzTt8NNN5FbhE45MK9cEDX4VJu17mjiTrpjDrfTaG7vA5x6Snry1RztX4acZ",
  "key9": "rQybQNezHhx7B6yFdUNVsCn83cPUMwmcnXeJzsLkNhKQLkacTyPuoJvQKZFoL1mKvqPzukwaYGoFNRmBeivNLqv",
  "key10": "2cU4dThD2c9dwm4q4vfBsXeMUsc36aLWAYu2VhegpW9zF5hBHkm7KRFifWGqeShjkT5nRJBU3KcJf9srB3A97gnW",
  "key11": "c3JsaHhiMK9bS7RkVUJ7X1iXnXTvUZQzBEi8jP67d5zdZxZs8U2bjn7Le8taY6FgxVdjLmo9wRSkbb2uo4gDhCd",
  "key12": "53eyzZF4HwC4hvZuYD5zk9xrxWyKdaunuMMZMCzohHsGgT9mxn1VnLoHU8WgqMnTisxqgs7d3qh6bS4WsjKkaLC2",
  "key13": "yoeAHe54NWbJN7uJaunnmmB2uPYGZrrScARGRgdUiCXmfdt9aHqAHSZpaYT9nY1D3kt8gpZs4kjzoz5Dyex4Kwo",
  "key14": "5ijcMcRWc3Mx2Y2GNWzd3XgDJS5DsVJzBemuCNF4viSvQgzmXtUSDeKtKiWnsXutDmhR45duuE2fyC1Gf7Yv5G5u",
  "key15": "3FRUyZiFMvYN8YvkkRELGFFoQAMZWZGwdoEsEcskETJULaTwWe7ZAtN1ocFAAACg2yFEZzCqSTFpkQdFHhHNuRKa",
  "key16": "2CiRcfomUMvxN3dV9K8PB3khwQNTAaCHM9brqTx5gkavFsvPDaVkrHX4d8LuXT7NZXokG66BDDk5URdLdN1PEVaW",
  "key17": "n2eGKbimnY2ViDG6iVgCQ4rfN1Gxt8vQGX5d9SztFpNYqGPituJFWCzQF3JdpMnLYGhF9odszAxeddV7TZCoFFr",
  "key18": "29usjBt53ufkBk7e4swuxuxzUnof8BftH4ZQtbHnn64tVXo3cim8Ep7CCGHBySSQNiW597A2QdE3ERbc7H1r4YXH",
  "key19": "arBxJvJdK46e3p34AQbu28fbeCRn3SmQ1vGhFK2EzMFQgDbvZMuaji8AuM2pKVD3XdFNjFNPmsTcgVWqeL4ua8i",
  "key20": "2vKomK1o3sJWWzVirVhE6rpmYD2BKdJu3TMWA5LhUxBWcYfm4bvViBLV2eRxG7fkZBB1E4aRGHaTn8FdWHddwE6D",
  "key21": "4am5BQ33U7XL6pDqkw2E3cMc45WjCqhaQ9tbZXeMx9BJaG6pUK1xChJr4KXRct27NpDc3ncSNoPCCZj9GG2wFhzv",
  "key22": "4sim4MTR1dJ5xYv3hMjiTXaY1oRo7kKWv3W8Xy8pEXFZ4xfBYuyZqSBjdRqbxrzrmcDwtDVNKsqv5aZHAU8AtfTx",
  "key23": "4Hz6dxzq8wyi2tPFWeRKoDq23cdqXvdxkT7AQS5XNL14JhLiTJBksLndC6vbyLqjqUKzjYKN89PHrtyHoA41q9gz",
  "key24": "2wC5bCBxH1wNB2Q9tFqKvGrmnhwv1trnLtofVKCqL6x6x26gtzobXGH5hyAR4RnbxydXbBtdAsTY64xhUSVqh4YR",
  "key25": "3rD6kMb9qkGSZW68APk4dwZp6jaFeQbuX4bnZcz7GqBo2cimTb4g6WF9ZmoSLK18uDtjrBuMLmjXNzCZ67YNtPmB",
  "key26": "eo8MufBYHcPDSgwrUPab375kdNzuXepyYgqPruzLuXg9YqzzS6Wu9Nrrjf5wcAGL4CUyxru5LY2xQJieVptYHZq",
  "key27": "4hNyRe3WEGWkrdMLC9cGSeKnVPB2Y2j3iP7GAt4T9e8Sf99DTMraMAPGP52Yk9PCTbfdACtLaV714EXd5kkiduKv",
  "key28": "5Ntq5HNKVPPYu1VQPiA8ZoLMpRvNJ7Mjj9Zfv8R9GZHpe4VFdemYEYzWUEXRU63QdQPUbA19AF6YHqGpvZwD7ZNT",
  "key29": "2SN44TprWUZGEcVpewYuaEG1utCVTSHjGzKUyhJ4efpK8WibBzaDTfeak2KgRj4CeiufdF6opqqKfcgiV335fbJv",
  "key30": "2yyBTgpEJefhLTvisTWivgF9kQ4KQypWDbPDEwGgH1WwcZYjTX7T3FzbwyFPw6ZPGbMQNSRUVLdfEB5sRyzbJfB",
  "key31": "4tMtHc8eC1sLQfbkv6zpgx3Ph5koqevXjwmCBWzAQTymBw4U5gD8CM2QkkU26PJvasd461ifoZLyXzCqvSweYNJm",
  "key32": "4yMXVAtB9mP783qNRrAR4fY4nYDXmpoqmG6Wpq4kjV7qmUGSDk9gfDQNkcVj5e9DCwf57gwxGpyfp6zb8ctjhZZ3",
  "key33": "4qWAZygwhfWjHL4wnNoonLvf4LzYH7gBr9dPtKUwwNjNYhkRukYiiz3K43sCmYJhVKai2hHpDGTeM3rPBhLsn5Tc",
  "key34": "5amDvKsjLPAYgQvBEgxnwfB1WVu9vBrAJhHUeuHaFdZc49qAbfZgVtfymHiNcaEiFt8kgTRKsKCcsSYV92BV51rq",
  "key35": "5JmVP8ax9Uf99HzwLf4jS9z9cTVHkZfKhuk7XUooAWCBvziuQFG8ZNhQ6DiQEehVvxFYNqdicYKcQ4P6G4uYvXF5",
  "key36": "2AZxdqFKJpEspt6AhGn42MtSd4NuXJp9jt8tqm9xCDHzS4KGH9NPGNdKt6XGSTkGpD4Uc7SSLg8Q8ekJVjxx83Kf",
  "key37": "LqfnEw7ahR8nF4vnGVxYXnpcXGgSAiX7GzkfGYb4SQXt8xAdpGcakvDLEPweg7a5UXYeeVCZ6itwPKpLsAaHLuR",
  "key38": "2Xc5CP6WfzfVHo4weop7ebqpfum7nxP5Wsts6znzBAK2JJ1WikZyLY7wNiB4WCTfJ5crnxcw5atAnP4uSjieWQrj",
  "key39": "2Z8vgGGNaCEk66A8YwcFXVFeBJRW8huMdq2PtkWLWLziAQsxn4ZJceQ3VBwEq3QgFBw8nU6akgjHLVksv76mU9Lt",
  "key40": "5DfJcBVQSfGC1fi13qjCfLKi2mKotaYejMpT1RG9HKBVUV2mhkPgBt8SVrooT45iaBkC5XQXXsbsEYNkV7MFSW7k",
  "key41": "5MyVXK8gwiFfAY7eh9naFSg5aYWG1kZqogpvXaJ46avYoeR5NukcasptbmMaKup596A75GJJHfidSbYBRGBuF5sx",
  "key42": "N6osRRRHXMQXcK3ZvgxmKJfkj6oMrxDUtyBxxwLQRtqsRbgT9hi4P7ehABHJKQjEnhgdoU7hv4LJsFQi8KKs3tg",
  "key43": "3qzK5CVmR9AAJkkvG6WZPCZ6cwStRYPfgxCCThTK8Bav5XWR5b9gLXRiYwt5zijYotRhM11xaZ4CpmfcYLBKDRFL",
  "key44": "3RMTdbNLZzGgZNooVeKhNfMYpcmsycRHeFcn3PL2VWvaepie6McYummRUALfNFQsnCNWjeaEEJ4pFtppCr7AtQHi",
  "key45": "2RPKo1N8hwjVDZpMNsGYNzWEFo16jeMwYsBgLoFWowwnWseb1QL9ZZDU8SZ6Wcw2XrxdqDS5fbhpufYMfsf1aV6F"
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
