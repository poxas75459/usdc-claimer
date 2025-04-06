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
    "4w1gW9fXgNHrrwZMNx9Y3SwwrjXb5WHUfaLZPP5bX7TzEdwwGzA2ynwBk6Zt4LKCLqFcKBX2qGU8v8J8APCNY1QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47fr6arvjeW3vUzQVyYYgyxfKB7srjSzxs1TaebeKJcr9VVMAczsXrAZaSQPRgZNzupW86KAFDn8rsTAH3YuxKTL",
  "key1": "4cGepF4nPDLiwotgqS1J4VJVBx2hXbN85EZrjxnuvevzCkEmuyvbB5w52qAbFzJRmaKXVTaSP213pbm9jn6LXCfX",
  "key2": "32pmiGv2pvtcyZSPB8QGcQ7GAvrLxxhy5aX1EnruRYhi1SvCmt2jn2sn7dK1MmKEyZJVidTtnJp77G9to8dsgAat",
  "key3": "3BQ1Jdqfb65hMG7VVa8XndERpkbswh3HM9HiLkjb2Nqa8k8kFarEpHxW85LdFjRaMs5abK1aRawiiQ1CV9GsSpWp",
  "key4": "5MAj55vEESg9X9XXctAzWe1pDYGguFSW4hoGEgxHN2fSWyD7BuHCuCrEUnneCmc37qJF9BK2FxUSByaRaK7GkxyF",
  "key5": "3wHD2h6uGRRfwMd1maNEGmmTQTX5Pq2HMzth98qQ8txY67TCSKgDxxxcFcZ3HDurx1h6zyXRus8cSd3JojsRraDe",
  "key6": "4QyZTt2jchr19zqa3RBRDEXaxpTUd1iE9YxtftzJFGEBaGcFSrKH59gmNDYCpu7M92AwQiJbCbbLujFBzJRbrLT9",
  "key7": "5X1DdN8HEFjD5r9LRJDPpziD6jg4B1fPP9m3UWetxtJX5iidixg8tnPA8rt1n81TXgdGsemUZ7nyEsjA8Gg6t72h",
  "key8": "5Rm9bEyxMmDn2Z3ihQSRu3eQkdRQhenfM1vMh6eMWynyQkKYAZe4aySguHq2udNDnKHiQBE7bTU4vgk5uZ91njYw",
  "key9": "aVKfhAcdsyGvUem4EQE3Y6Liby31ttP2EyTSmgALmEc7SvXRwJbK7sHEEqwyJz3pvPoBgsFE9UkA9LY8cgf2daw",
  "key10": "2p97GGTFpbpyJRqoVEweV565o7c7XPJM9nH7L6AFJeThYX4TU9hoMDx1LxWwUd94LhiTcZpZNkB9igsXF9bfc94n",
  "key11": "5TAsWzVM9szkja3yqkLRDgXkzduJ7sav6mL21dwmnveGKH5sfcDyjtwGZTtJM1aW7eeZznsuiBRHGEtnhakx6eYv",
  "key12": "4VY2ntaCoVWHm1MHXotPCZXV7hEaFcQfM3gpCYyFgq1VzRX7o2e6AhjVh7o5ruuvoGkPLUwKj7WRgbauqDBJFzDP",
  "key13": "4LciyZoj9brmYVmc2JKagFMB73U4jsdnQynx5MqdcWX6gHytPwXt7cWQiPcbz4phZcoBhvNMK75txUd7ibGEMZA1",
  "key14": "44Bm2hMbDxAwZikhm8upGZvGRRjjTULhrnxvpp7gSBAMyKGrvqP9GHF1sxxbaM865DerkZH5Dpoz88PGvC7dGqkS",
  "key15": "2cKCy8BZUvmGXRaiFzU7zHq3fpYRu2ogjFNexhHgXKfdf2WrFNMFGddGw4pjkor1vGxCTM6CbwED7saNqAEchJ3k",
  "key16": "46xz6SGfWkM5ps3EL8tefVLBoUEnRzJgMPBhsdfg5oqsiXWy6mkmVvNxcs2zoegfoieRHgUS1r2hmqVCbRJaGspS",
  "key17": "4KS223zR5EciZVA6N4hFSs12dse3CEMxiV3aQHa1Rba6NhrKP55QPv5t3LYXqPwEJs4jqiesEb97Gbf7KwUkKi4E",
  "key18": "4Mq5qzEvqRf6PXrmVyF7vK1oK2wqGTHSfqioWMEnPArcSc2i68eohsRZvRJT1NhNtHUWGiXvNjbhAeuu9m7odheE",
  "key19": "5EMNM4RpgyfMzWfRwiuXBrZk5DHuC1jP7MmJgS1RnNABymcrbCAdJxZGGWjzL33oyiZL28cZFwbmmqDNUvXbbNaV",
  "key20": "3TRFQJDEQHWoX5tGeMkxKgmNWFsJ3yqaaACFnCjMPbUDfqAfT3rFrt6qbMceJEVd2aGQ8hDqVydtqaFF8mH4NpKN",
  "key21": "5nQRiTyFah9aVW49ArG28714qGrgagQBDsWYSUBvkdLtDF38WsCS1stLYoM8eFSswfnqx971NoR18BSNfhGJ6tSb",
  "key22": "2NQqDBfR1daz84dUrGXG3zBd7CDC2Bd5m7x7MxRfWGb1ECvPS8ThcoeDnoNF35qXWdtQdR8C1QkRi39M5LNk3efP",
  "key23": "zXFh7Kstq1NckeC5z9RaBFefssjGLv7389tV6fpHKt4GYNrj48yYejN2TKbFLH1Wg71G9RAnKUPsWNcndK2RNPT",
  "key24": "n5SLQUxDZuGiaADQU2UfycJRAUPgqFk1vPaictYnxzS2EYanC28oZKb3zqEfvNmXiePpqdpefwuaue71YQWiKTq",
  "key25": "5M7QAL9rVAeuHwaFMGufr9vnLTExgEpL2DnYph48Jx71bEHe7GPo2HVPHLSmCC7yjSmHwcN7YwuwkojYcUj6LX9Q",
  "key26": "4ZQoDoE8aPm1dzHVH4Da7ZNU7qta7kYXbL2L7UmFJbkb7eNxxMTT3YQ6oisGzwAd2Y7ZfvWfDf4ruSpuyNdHfU88",
  "key27": "dyMncQBxsurMEQr7BkPu5mNFkwj81W7YnKmmZCs4SvdtA7yGcTgdTSDcU5M7b8fLYN1eQr1DPfgPtAxt1aRu35Z",
  "key28": "5MMaBa6LNJfRfyhk2FGcAdcyNXr41bn96fSaiZpw59piAsa8vkxSJLBDebDewmMV4oYHGtXS2qYS4dCP9pP8Lh3X",
  "key29": "3EfjHjkoso4PDFqMitozGiu4sVDHhqtvGkd2wHYbREZ38PrNAChFBDrjS5hYxcMwdiq5a23juYkHr2MhzpKeWW49",
  "key30": "44qkDBM3PzETGsEpeXRGyMfQoZvxRkXFatakgryRE5zMNYT7CmgbzEYCnALCyjhKF8B4pRY8zRS3XbLZybnJK5fd",
  "key31": "4KiSycnPSkt3uLHnbL5gtS6JhQKCpsHQzfAcsDQmp2tdnJEnvwotyaxttUqFQz1CyoJaGmvVxooHs8PuwEiKPZWv",
  "key32": "fWGrZmtsFSySXqCeFaBQtd3rXAtGhUfBdtPyMxxyWbzwLWacVV8q2eTPoS5NM2vZaZewXKz4CUukiBCQtK1uZLK",
  "key33": "1PuS9iTFB5Kqactuqns9Dj7ai7hgB2uj2jq9woe8iNp5o7VZUHcGNKAx1WP4BmgHs7QBse5Gtvanwaiu6m77Wp1",
  "key34": "2hsnsZHKLGqBrki7c7Ux6Eo1oufNXtCb7MaSbBuca1ygdgTncPDGt7SKixi6ZRJHq6Gwr2FrwsJvjBvwPwrFwbs7",
  "key35": "3iWrEh1DyYHVtCYhC1oMaMZAS87ZFUvUHmWXGYK64K8GSg7EQ6HFDysNrEtwQjxLufNWGLfFrsQnS23ofsyVQByh",
  "key36": "5oe47TeQP3dbZ7b4opSimQEzT7n65rjoL641c7hX2NyvC3qatxvYZJcDYozd18D8uagoG3pJ2HivQW99zXwRes78",
  "key37": "4j9oysoQYTAtzHbZW8kpejXMcXXxLr6zYWMgDbkDTDWi6qxWUJWcHnEbZY458ds8ZmEW8ea8jjrB8ioUJeNMnDNA",
  "key38": "64w2TWtFsbQzX2ZREMTrJShyy8sM1y3v54pQZcqTyKFnP4Ex9fv4iboaBwrvKmHinu6Nnm6havTZs8aKBuFKswKc",
  "key39": "5eCYmj1DPC2UPq4GHLmthkAGeZ6wtg5NUkUXBUBPsBm2EZ2XgRmaRc8N9Kr6rUbLgr61arDsNQ91aouUGCzVzRkP",
  "key40": "5ScdR1tgNb5icSp3EAK2dFjeRrW5mqRKvTaSjPpPxcAMSKVKVtaBvdbZndCkD3ZtL6zEbNcRo8rQh9VQahmeMT6g"
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
