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
    "4CfSBoj3Ncyd96Sjv4wR3kJXdGBPLdGN2Z2dYWQAcYZxiWqZSG2b9ZQKDTqSBZ7wfy8tEAAhRXhsp9gneVzyPK5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SrYPiUgqbdtLdKMBFAWkZbXY7X1fa8Dnp9ZA5JVSWbRbNdroytNvimMmyqcGMncd5y67zQTehhxKfobJT2CN58Z",
  "key1": "3KNZzeRFZYrLg1aZ5omeGhQZfMdMerTkFVBqHCgLqDao561QSSkSEohXh1ZXBXgUspLtxNNQ37P3uATwUdQ3ZkH6",
  "key2": "3gGpc4oFeKiGhVVNcfvKC7e9y7PAon326oPu4Ndx9FFJxospc8ShrbNUGN1xuuYrqanEark7fzGtitZgBDA9aAuD",
  "key3": "47WDKpb6z9eUkAWF34vtJkZrLJenvjQykr6hw8XKkx7nwVAuBYpDxauAYPLyueUXsvvXhzFVr3hezFC8PEvbw9jL",
  "key4": "2CtZMDagqMTGYWZaVCXV2hX3aDaM3aZFMaUwwz3xuiXhNcmoBfhKs5nRDkyfnZWqDoaNGfvgZDaEn1tw5JnNSaKk",
  "key5": "3wa7Mcabn2CPoYcq7RqHsTeEuiMnayMsn1WneCyGrWXEx8sSFzgecW5HYNmg9B3sVkRVEyGdABEEQ88UDnzAJSn7",
  "key6": "3a2SY8NuJcuGnNmeYhUhFvW2L5JJn41FrqhAn1W7XT4EgjQiS9pfZJdVyzbt5shMAgrmuW1NpDWWYE5TE7CApNNK",
  "key7": "4XgtZg9BtRhwiWUWN8rxvXfLsmHzy2jKV5VDAgCubWuvV3m3zWWTW9rvwxAdw8xBSCfHjuUJXAkkePriWEYdEEsS",
  "key8": "5jNEucw2wPpZgxgmAexMkwaH3GDVdmoTWytHkUgtNVdckkC5FWHgqLet4G3B9FKvpHeZbZ5TojoCGsZGVjNTt7p6",
  "key9": "4vGdRKTTHnzj1ExR3KfNEaw3SrtwVtcZQQNdALa3gotvSSSUp9mCk9XtYek2U7YFUsaoYZGNwCCTJL3FC28EF8ca",
  "key10": "4HEXemvpBtQq8vDAj9Goi2e7rEHaEgaB7SdPozHzdbDd7HcLKCYR1cq3xqjshDRucJTNQhRYWRMpYr9RyB3MKRhT",
  "key11": "2TPgUGj4zoxbDjJVo4huDRtd72s4LZYgEDkyfgPXM5dM5GGhGgkUST7HwCZmyTaB1oN4GtaEZgAEevY6Wx4WenAW",
  "key12": "4MyTkzisYFLzAfdsfaRpCBeVRjtKosTPS4fYvfEfpB7QJsgpQfxsERssUpa9YNdPgGAq9JJfb652qyYvWafAEYeC",
  "key13": "3m35uVL3zfHLtognCFjRtoW1PgRnATHqeiomsCxJgkK974q4uHnVzfquAPBV8ECud5zX9zaHSZDNP4hs1FBJMYJT",
  "key14": "5aS258JbAnUWhvUXWKh8jZ7FVm6ZkaH11XSGxYikrggwFhtHjTns5C9nf8y1YgDTq8CThzGzejVvPoxf7rYdD9hd",
  "key15": "9nyMqAMAs844Aqz5d82RJAFYDZXtxMSjDFMX5NcH2koBLG9MqAKuUBUtrwSA5DxGteEWDfti7AxWiKbnp49KG64",
  "key16": "2CtF2XgTi5jEN97eosjQfUCfesfBJEFBPKoNdFFQCdeig1j3EKktaWRsK8NRvsuJDAS5Zi3AskVymmW4UZTswRin",
  "key17": "2CgFAXidQNY2pexSzvqVXTyTmAVHHQaUDUEAoGgUQ212BL7BXoQr3qX8Wz5tP6oLmVBVNujcYJP973zqZBtTSDih",
  "key18": "5boAnyxH9fJ5Pte7ekmHFRbu9ua4Z2y7Qa7Cau5tJVVJYmNC8E2A6UUKTuqN7SJvW8kHV9RXyWa3Ex6MrKsA4eh7",
  "key19": "3zrXN4oGSruNegprK6czXsC5WhB6EdsnLDrCYSUnm1Q3R8Nz5J2fcix8fuAvsAUfA7gKr6W5JXdBZMranDtrHC6v",
  "key20": "5wBGYZN8tet61zaq3DniL1eeS6SRPkYzsDTMuSaPHkdUMkTTFntYzgxXaoPCbTZepGrBPaY1WZuha4og7Ko2sQrD",
  "key21": "2XbFWNPLEQYBHc4yn1drDpsvh1rd7ASXqzZtat9YYpkYY6qLKGABGYDxMjkY5ig2i45sszXxG21fNeH5Rba1ixRL",
  "key22": "4TRqs1CdM6HSbCEviwhcgrZ7ncuHDrEbXXaZrhfnrx9S9aNuj5gE9WNukcAVLiwoJWCGJRFdAPmJcgjZc2qL7uAN",
  "key23": "dL2zYXj6G7XUbX2pMT5NCjMQtD7mfw1H2Kcr76tTsH3f5CyCR19tgJ6VBU8YyozoVpN1jECo8csdhhNg7A5LWtj",
  "key24": "4Lnv5swbvF7T67BjVwvKzKU8aZ34wBMLSaoNSR2XbHtxrrF5MhF9bVhJfUVwpq7Wf8KKRP8XWAV2MpZCFvScbFUZ",
  "key25": "4wrY1zPqRc7Adzd7WLAy6XpXu1MHpA1ZJ1DQ79tNjddzVM7n6rKCSBpzczZ8k2QBsKUAwfo29cUFUNBcVjpYsaaC",
  "key26": "62sHXojnKdMc5Ea3jzA3gGNGdWf5heCh7mKMWuvjpvUbwzHXnbwPcQYKJgHy1eRuGkSaVGbhyE7v8QVUb1tmwviF",
  "key27": "4c2ZTbMjrRPCXYhazBeNPjGstDpm2TyGAbkr1x3z6AanjYJuuoyfqBZxE5jiqVUbttdWYzar15srok46EW6EPuUk",
  "key28": "BCAR3Eo2SDpBcvTe6hm1ygWVMpZu2sirSNor12CDcYNjoJGQxEhb6f1a1md2RTzqniCSVtEmqeqnL9sBgHrh1Fv",
  "key29": "2165nXefcZcKkwcbs7ixqaVFnm7i6r1kYbsLXQFSk27gXQt7RSRyG5p5ZuK8bPJfX25vsBwHWWbxEs2kNXz5yDAX",
  "key30": "2DMv26dJEHWwXHNchrPHo9RehM7y8ss5JUVyauEnS36jZVgMSU1ws5U8YfzJKemxbVdux9PnpBriyXdD6rTM7x79",
  "key31": "4GzEMY1Hih6K4HnC63ozkk2N9GFdJyPA7fu2yXLyFnbzJw1ecWmyWiYGLeVZf2JVGX5A7PJAnzRt1dBsez2d4Tzh",
  "key32": "839C5o5zRFEwPKL3oTwqJtYkqF7nbYqXMnPH7CiWX6jkW3YMsBWrpmgYbbvGG8z2AFZTR5z3j3BuEDRhmi8K6cS",
  "key33": "4LnJCnxVkijiAKKGvcxXgnJHKW4VVGPxdbiE6cEdAbVGjLiQQ6ec4aHLs3h4MDEf6ZRj9q72z9PhZSKnSyqu7aSk",
  "key34": "EQgiBT9jKtCATRFe5pouKanTbkEYD5qMbjkff2ANHAer9hRHZQxHzvdabiyDc5JivsPvRVtFbb1vcFMFfx3ULmS",
  "key35": "2mH6k7tAiTvtjR8LeC4fsoncStHcds4h4FbBdoBFT1EV5nL3ypECTWsXzC62YqbKtdTBYUD3dtC2ThAu312nittm",
  "key36": "5858ynRES9MfRU3NsxcFm3hsAuz7QJSfbWGcZxzZT2nmJ4HkTmFWPt1PYPn7uAkHAoAmTEdWThDRB7nJoxigMUin",
  "key37": "2uWyX36Rg3pRQyUEh4auxFkJB44ZpijbYGZAYRrVyvLyRKanxAuoUmq6M7TNS5fagvvPsq4LLWqKYe5Qt6hnLYTu",
  "key38": "536LRBAVzYJEPNhBHTq9Qt3mfiWkt5QNESPcEkUKhnHink4gq8zrHTU89byabwbdPoT7WmCFJLK2t3vk2d3CTz2P",
  "key39": "41aXjUDwuQNXT5HjkEhrimYeD7ccCtWHvQVS2psq8JfyjjKKtAmfNXpbWxiJqg4hwb3oUycZtcAZUj3Sg4TAbEnE",
  "key40": "3LT1BnmKeC1kx2oKkhJDjLvhisxEKZpSdsDfYtEZffKGpC9LGr1gcM1w9yXGanRHjSRroYUboepkxr5pvzSaWQcr",
  "key41": "aSV3uHBkgWtvmKMcW7CMVV55Bsa5Sftzqxx8mY8z9uqE3fZQVm1vyP1r5pVGReoQMVKq6kwYXueGdEMSJQXoutt",
  "key42": "3ua1BeaY8nMzDiZKReZWVAhB5mgUf5HVm6sLKgtJCQJNPMjG7PD7QR5hdVcLwp1gZMS6fngRVttx59kDRtAbRzyE",
  "key43": "45FxEFzBFfctKzSxDYNz3Cbvqk8KgYVkmstUggcDC4vh8hEGjuEthYtnPnKc83tZDMgSwn7FpqdPXjgjAR4L8DMg",
  "key44": "3VhpsaQiMimhFYFEBhyEMbAQhka4KBzrzPGNBnzkryEPXWYpG6DQoHCpKwSQFLuKhFniV9YDWTmq9AqpyiD6tm9",
  "key45": "3cvLir5XoTKDe7keFks3jZjaUuZKuJi5gAziCAgMcuanfMgph8447HgSZ17YbBdEnTtvzU3tHLzTPgojPztTmjiE",
  "key46": "5fwBYh2Sw6VwyKXqgLy2vRAujXJ6HKMok3x1eyq7rrnEA5eVuTuXhKBZEHTC8RM7zzGadEcxLV8iUcC1R1rbRPm5",
  "key47": "2mRrCntadgdE4dUQmkG9NNXN7VnTrob2V9nSvrZrEWCvom2SQ8kHvWBNtNHrpgU548XWFCK3kt74o9Sr7ieWFNtM",
  "key48": "88JxFRaxYUb3fB6gQ7ds35nP2T1EYBk5eMg7aUorNdETbE5dS8ozUkXGQV3JeG5Xr1VUfVP2nUYHU8NQB1ooA81"
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
