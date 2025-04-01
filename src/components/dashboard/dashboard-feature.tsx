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
    "4XVvXtaZbj9YnqoWRDwHutuHBNZ68prZrctpEtbaNHx4rXkUWcto6qqZHtNcCsYw9N9iNdL5BCmSuLrpn9Gpk9Z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "643WxHkPygXKtEFSQEmZcFQdxv7gK3as4dy7KQqh5FuzUWQevV57oRfNTeH3DGTpUKc8CJpbgSUBSuNQigNCcan9",
  "key1": "2s8psSxi3EAwP8WgXGpPth5VFHCBwzbSpyGGWu1tAZoLE4dtS5T4dTn1hJJQbKrsXPPcAQbYsKgB2Q8g5fBC8xaF",
  "key2": "4uXTQzT3UYVnWX5z45dXnibthwQzfVjzYR2qYoYBiw2izNLSbdzCdeBDXw3UxmR6WNExMgKbE5DFzoUfZHxuaQNA",
  "key3": "34GQR4vSJmgE9jR7uY9tChd3hyXiP5jQnrhqnzSLLYXB848dHiJQK5SjKtnXVtJVA6NuKnPtnMEL3GHV9QbgK5Av",
  "key4": "4YgfNGyJmWz3LyeJTTqRX9ndjUcX8MeoQyQwDxDmZLrN1MWiVFi3C61KJZMWQbUJGxSjD7YygKnLTYDwzmmR46at",
  "key5": "4wixDt5Xn9EVcs3xbkpK3cP1x6qWpw6VDLV117pGkK4iYez2wXVFBidAoRRPssGGG1GfPTdG6xrnczWEH1YUXnF7",
  "key6": "2J2nixNkPCjc84Ftk4rgi12YqXgqfZYXeuZTcGSBUagw7UfWZUANEMp3BFgxGsGJxfXCPAdpwTyuf3Nzdsmc1zSF",
  "key7": "2tgD41Ln4ZsW1Wya22XvRSB5aXdnBJYeLv3knAWi2YpQbrsK96wVr5TAknQLjswTZe8vwb7FNeTZQTaYZijTZg3Y",
  "key8": "5zALhYxxVA54nop5fmnmj9qmzWY4kHPqXQG4yg2Ntw99PZghAiJPvXhTLmBgnoCxyQKZBnYYUyWNTSjTjcgcmi3P",
  "key9": "5ikFuQoi5DsjkAHyPeggf4q7vHeE2VkbLXKT3vRQe47DErTbnwg45tothqk5JZCqgoMFr4zdTCTeoDGJY12nbpN9",
  "key10": "2qQ9QDhWTbE38ofAiA3XwBhMQ8W8x2PCosTECo8g3jACpdVpQFxfQcaPyTyNZH9HZWDapTVXyWXjvniMb41uQV4p",
  "key11": "4iALsDr3bBz39UvSAPEDQnUp2Zgez63md9CgzNLjKrBqVyWNRETH1sp8GwiD5o8U96des7FNxSe1BrxYFHy6QXRK",
  "key12": "364bHD5rf1CAB2BWo94d1jhjUS36aHbbSo3xwNzWRXznroaWEyAyNrfGEcaBMo9bndzfd23u29JtqiGm2YYaXQD",
  "key13": "5kKC39XnN3Bv9uEBAjZEoNyoGfLmi2UGd5sqkehJidkc2KqFfMppA8vare7DcfHRP67aNT4wBFEsvsNJi2CSAAaL",
  "key14": "31PqWLhLL1vbYLb6RnwbTGQhWnZS7eN1gEXkpJGibuNd2TbNvHPTvka5jgUCc9CZfARPYqB1BmZkYVG4pswVRzZ9",
  "key15": "2JTZ7i9GNH3c6UPGGpGJYyX7Stw78WQeUh4biNvPqneyN4HmFv8ufzRoKppgG6hm5wKUSbj9U2z96qi2YW9BNDQ5",
  "key16": "2rRP87PVEehRfBSQFTTvDjZ16D3WaZ62NqQn4brQ1hxppcvwmppeTVt398Ssy8c1CSFFid8Cvg8SSDuNxTvXKLsX",
  "key17": "5AouWfPkMwERe6DT3VJRXgZQzL96iYrQgwubrbNwNa3Wn86xdqnK8iJpYjnvBStxJzpNNkp3kmvgs7cikvBUqNmw",
  "key18": "A9Lf8L1Juf2Aqf42vBhXQfcRwG29sN3UeRFvDUVHJNi3aVo29S5kHxYbRZ5vrVumreF1CFbsckzuBS1FRQwQoKf",
  "key19": "228hwMNGYmR57xvso8T6MC98NeLRbe7sUDEC3FRUayohLUNLC5KJxWdNAiexLqsHEU4BozDCaLF2RTXZe1KLmQZk",
  "key20": "2u4Zut43m6RfVBSnKwUe45EVqPSCSrFmMRS5XDWAywo1buyhgx9xY2RcH6ki2wTAyjSXe3oR9D1XbKoA8zzPBfxQ",
  "key21": "3qgnWUacQAuwmb9WiXVZhhaiaPBoimffsCsGCUQzJNiyzXw6f8eUCA5Wq21Zf2DzKFiuZsu9sDH23YQWfbizuAeH",
  "key22": "3u49bREeVFZfbzHx2E2mSRvG7Jjkq8ERKnQSAPFLGMCNSuJrhUF3CWtR36ftgSHXyfhHwFGUbXbnR6kz8jbw6m9T",
  "key23": "5UCKo72AmRSLzsFoHGzNvaZf7qdSwigFryBTXarqyfbNejojFyXAz2ZdHERkFvqMA3H8rfiKvtmqTpXMUtp9tb27",
  "key24": "55M5JmY9pKpHmaEVpBwe8tKNZ5FMfVcVXoyXPGSb3Dq5Hco7QidYVimfqgCMnnixUAagLXcPv2RDTDsvScYx5BtV",
  "key25": "E1e5dAqSAiri3qJJQGSiiK5wrr4Rnr3aPGJ4JT1sxK48bfWkCK19vZSrxUMyu2k69PyjaSu5KSXp1d8UF7pBk36",
  "key26": "5JoR4WpM2i94QjgeVK9txM25W5YkgtnG8X1Y3SQ7iKxnL9Sb5XVWkrPz46RKi9dzoKJ3VavjDiE3JS3optuMhcy3",
  "key27": "44oiFWdtV3b3monqALueodjU8rEycAd4mhR8Xg8XJYzEm7imEyBpcVZv7XxtqJT8RXZQjuRsGjzrooZEYxXxE8Pu",
  "key28": "2w3e3q12SkScfTKMpCPFxA6wXXsfDQhek36ypkkQBwT2kkrCKSZw89UrrJDLzWimtgWzkw2yaDeVTutYKGnsbeSN",
  "key29": "2k2EmAzwzoz6Go39PasdbYpCKCJK6tjYCAkRQ2a7T6Qjt6KQuLLXrfxoXtE5uH8BwxNKa66xsCdAZtz5HjkXaM8p",
  "key30": "2vCcCCZqzpouJck1radVKX7mW9cYkRwZE371uEYsbVj1MjVt1EScHr8h2o3aM9XH6y6dQebNBpheNWCoCo7seCz5",
  "key31": "55DUuoS4oQ5Q23FrWMFC6xoCj3yVP1ep91LjZbxu3sKvjt1GPmhhzom9nVJwa89CgGfTw6vVFs71XgD1UZ7Mj6uJ",
  "key32": "5NDvxwbZrtoTK28aioJMZ55UfXmAtWFhaAB9H7A2UfZb9n81dxW77EqeZsD17mgJjxvzS2kcTQY7wAqErvEfLq1K",
  "key33": "5Nqj62B4aAJ6e3prGpLxvE6SuR5Uo7HXjBSpgamE4CcqcfPcc4Gno9j5UEs9fXisK2Pg78qyK32UwHkL1XLj3FCX",
  "key34": "5q2uYSW7Ro7govzLqtvLGSchgPggGdbKncyzyGf2rBnuAf2rShmQMdSeDdghZMPQdMukvBYfTsnYUawvynL5Y5V6",
  "key35": "2TLq1i9fvZyzconTviAQnjyJUcECEEX7ECW2GcQ2XVj97CF7jf3HzG4nPfhRPa2A5r4tfXen5vCodajNSA24hMmE",
  "key36": "5zywiEk5bmNpFXmhSHKiXLnFBiWDuQvCMmcX42DXvoRZotKdKkhDnd9a5R1BpjBdhNcZpYjQk87cNQVP1e4U4TvZ",
  "key37": "5xezP7hmffqAmtonmXkK3xSEzW2tpU2VHUK6nLNuJU2dDxxVDWrhgzZWxvPXtiTdqdnzmUptAamBR2hCUbPpSAq2",
  "key38": "24hmNnEcVKJqSwdpUTLjGtuLQkZCuPtYVrWrApHn5NvMFfWfFhupBWSpBd1MG5vfxwZAdgips53FZdez7DMNyPPK",
  "key39": "25nPvNj97CFU3ipNCk2TkhGDu3qCPXW52jxXFzwJgyn4JiKaetUYkkzCv2h188uD41vCdiVse8P9TnCTKMDSyn5Z",
  "key40": "2kYWK6xcsCA2STYGt3tpA8Jd2AKsVUDJsrR2Gc9PwcWR6apkAqjCQYtvZp1mJqhLqSCVJG4Sn5PT5x5BLoraa8VW",
  "key41": "5GfqQPJrScdLfpY5zjerAVKxmKbwAuymH5SzGiYPuTZY7Gd2U2Lx7Q8nUU5ofa9oehBwNEW8PvqKfxu9gKckD34",
  "key42": "5LKoAWhymp38WpdhkrAV58wpHeZzM9MGNkVFFTJ8vsDBK16h4VNSVpeSD1MRvbjbywfg65Umpovm6jRjL9BnkcGQ",
  "key43": "5L1xgYCi6w5f47avwDxpMiSGEftTbPHSNkdfnrHid15D1JjxA49AGCdxZxX8PxQCnxK1THMHWPPYu54fACewbQcw",
  "key44": "5JFbsT1WAMzQzNb6NjKiQtabptPiwYRFYuSq6jWEoLcTE2eXxsNA7iY4Uhvgxs7v9xkr5ccdNrzJbQvVNdqoJP9N",
  "key45": "5Erq2p9xaLrU3gi9FSemNs4BuajcHnA7JXFmSMv9W1osZ1SUZNyvrhkho37EMGfCnPNiLreGDf37csF9NZEP2r1A",
  "key46": "4TJvmsybexv4uKjmqzCf6LfrXmbVDmzirEXKMz1Am8iiiBVztR1fYawaQLuGD1XgHNBgRsodMjABoBSj7YtmfVMz"
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
