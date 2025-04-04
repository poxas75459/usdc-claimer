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
    "3YciYxMBRTcfvurA6C5rVUq4XXeHYs4amxeSAXNjkoEBVHxJYqPQENLJuQqXsWgJyJBomD8bvAzAKu3fX9qC5WEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgRsSdvfgPxNdV6ZuNfaWYPZp2SXfkzG5MRCxsSobdeQ92zDJ18evA98XFRfPmaqs6VNytTivPiFQANUHrTf9wE",
  "key1": "5zVS6FNr6duEuWCFUMgv5mjreszSyUBBnXXGdkwGbx5juBTMhSbhq8ujtWULdrvwt7sERn4sxM99YtreKi5YBa7P",
  "key2": "47hQbDqdVbyFzUoWbrdtKsVPUGsRGFefYjTTVXYD3GfqScLTDPoRWoDCSWVwy9tszmEo28iy7c7ubeqqXbxtSM9Q",
  "key3": "5kpbRave8kxfpMWKckSKXxEwmBxPZYtp4pAuCaxwANYjpMtszmdJkBMvNBh6uN6JHgma3pqNFtQQJrSJuCmhPkMS",
  "key4": "3SQVTPw29k4fPeSnpXDbVzD7SngTDAuTVii8vE5Ar2zsEJ2Yc3Sx4HMNEHmzqN6kj2RBqrcfA52TdUzYLQCs4hMt",
  "key5": "NAYFr3Yhjysc9pLJtAvphe6HhKkfMbGsExJCxRw4fj88pxVfruZL85nxUsjBML3hBraBA1taTvx65vuhUDC78Dw",
  "key6": "3hPrEudashxQ349Pyfmyp73uUmqtuxD71yPr6T1icVvwAMimSqyxQvRvv9qjb5u3RKUzAWxwiyAkSxRamUpiQPJY",
  "key7": "H5ANSivU1v2KCVa3hf5u6z93XErfGMvPperUkHN6UunDhX9fcmUq76uEmEYj43E8GfBTAa9xXhZbM4A5LGFUQcq",
  "key8": "4AtaG2GAtXchNgPiwxb1Y5py6URy8yxSbxWFVcSRRCsDM4sH43YcEBjPt65f1Cu5diChZzyEC623dejY99UdrdTt",
  "key9": "5Hgm95tRV47QStbGBr6rGtgxC3h3gKQPhquSbVpsdnKC9H14stzD25jvikY7VvaPnLiFXksi26WqnEHB5FUTHbxE",
  "key10": "5DyoFN9MsjF59qTNCeL9y5aKa3MEFF5Z7kTE4PucgsZy7Qhz37y5XU45wL4grNQpNBQuNXwpsxAdJjtQRgRK8e2i",
  "key11": "4V1uucUtCpAFDY1NMtZSPCQD1VhHGyoVrqbqkPZwNcDU4U1XnGwhW1u5TdpAuCdLT8dSLxyBg25TTycSgh6ETVgn",
  "key12": "4XFoqM1oDD1Mt9F9LmUjbvSxDYpDKARATL53fLFQYMHwaEPuBTEo8xHCAo2UMFU6ZN4N3T3YoctB2MyE9G9kNQre",
  "key13": "5QQig4h27vfN7oQJ7BDshmoRfbZhxMMvk3vVTjVCrXPKdiH4WAGho41yDCAPHaPpyTix4pFojvzM3KAKzuJb1qRW",
  "key14": "3rRfcjLTiWU1wecfyCPJRB91mCRNyXLqBfEK4YeMMs1BuYhXBAwLaboyGGhHZYxhkQjaZhNcf8u4Ef3L65ycsWEE",
  "key15": "4AMouZcawxc2MabJvLSnjgh924z7A5hCKCoppECmsjYbQzKiuTXqhGNd6qBsKa84ctFJwWqbWbPGpwkAZM21eS6T",
  "key16": "3xzMdx2SN2WTfB11DTqPVu3MuEKX6pK68zqRttGdrDqSHu3RyFdof8seRBctW2ZRZ27e9cMxZZSizBnhMC6pH35s",
  "key17": "41SBaazrHw35dYzd57Z1uj21zcK5f2mtErqf9sBhZc5k83HtFRxByJeziwFzMgEJvgaWumecbNaQ3VfvbkDUKq62",
  "key18": "2GzBTUh6gN5xQfeTKCoCWLt1P75T38dXFXtJyHnriTSZCme2wsLRmHi8kMkCEhWzfZk1wfhXCc8QoGhxW7QqkwyX",
  "key19": "49KPbZ7nxAFGQv7VwbFSzdu1RPcKTcbvnRuwtSLe6XKhKHAU1wMGEA1hQsU4PAZCAaFXJFLJQNedbPo8ActnX7dk",
  "key20": "2nby9TvCYvgQsz5cL59po4GRLyjZropgNsNgMjNQGx3GJ35Uwe91A5r1EVEZuqWKg6PsfaQFVCoJ1B4T9C7BXDM9",
  "key21": "3WRYeDskAV7xrZE6X1QTM4xphVezEnbfzUxksBpfizo9VVmHBLXZhdMNt6zSDHamt43dVNEUo4KZR87J7dmhvXmi",
  "key22": "2bhH7QdJKMHYH5hJhiv7f1KgDaWqSCKue1CbuhDNSn2aCXJoL9BXVejrsxtAqvKdtSoAS4nd2rFcA3p2rq1rQgxw",
  "key23": "5R3om2dBD8VbdtXoVR3DozUK34fP5FpfJnDUDBByRwc41rTtgYEz735aXgzkW151n6r7iYizvT2DTQ6QAEnAebks",
  "key24": "2PDQmy9F83Vn3V3BiigsGWUnt1jjSFK4WXVwpw4XBXqRmQRFw5PRFkbjggYGRPKRhpk7VfVQRqBKQYBatFDTFdvD",
  "key25": "32o46mkXxX6AWmFHg8FQdMkssMcp8a6eP8TdjifzDqmumCeCbDaUity5GycHADnMtZhACNbddZssPwmUSLcKf2b6",
  "key26": "59H1wn2wkvTMhmgXcvLDmvWP45Czb8PQF3kM297XMiwDks8bJ5iswNLkbCUTXbDdZJjfTUDivXzprvNEC6tNCeQV",
  "key27": "2mvPL2BMywzzC4jjA3LvuQ375CgYT7uhky7Td43CoW7qKAbWqVu1R118hFCi4pu28pPP53UrpFXXjZf6gkuwGtex",
  "key28": "36ZURwXNLYmQEiSZix2bfCbiUSxwM5YnZyMQsXDjEW24pcUYygMLzJXWgHWFALagPqT1eWk8iuV9pC2z1uDKjuPj",
  "key29": "2XNC6VpLmxejMn35YyGTrQXrnvhKH2uiWnQ5TzwSW9ieW3qo6aTMzGese7SPEg68wpBT2hrekucLQUaxgJEFJQCA",
  "key30": "4dc2E227gNX81yiiUbY7zzWkHHcatT28T462jzQJFh3KuJPBwUGWwzvf43A58JKpnWckwmddBSwt9Wv7icDs8Emt",
  "key31": "32vqgAGhrpfZcW6un4tdn4Vzdo7vygtb8mGVmxrMMz3EGNX7iMz3xaAxZEZ33vTcAwQ1v9rSwDZAdkGTceE5Mw9F",
  "key32": "jUcnqR7VhRLFpGxzS8EBisp9vZ468JGssf2bX7dnuJBRJLEFjSEvxMeNhRU462RM3Nxs7Zti1bC2BdFPhvL5iXD",
  "key33": "QENS2ZFEVY119tzVhcx8G9PCaepXjZXeJ4Catu5wFJcBpwTvo2mi6LuS51CqqjkeVZeJn3wF3X2AVgcYRJeQTQa",
  "key34": "3VdFdNHACk1Zurq5XLJoKtXmkLpcJhMXRhk2rZx8m4BuyAJrkre4AqzMmPswdfk7JyE4ghNVVa5EpvpSGndYHmBY",
  "key35": "2DEahZrwQP7Bcp8K74h2CR2PPgrVPRVzwtXQ3c38A4b2tV6QhLzepGt9TiBL55uQCahRFYQTD1td5BxzDByTpmpU",
  "key36": "4e9PrzyLoBmj5D63GxEAdB9qUw7TsFBxEhibnd1sSqF212RCLJJwHC1GHwURXnZfPxdLX2W3AmMsDcNpdv3X286g",
  "key37": "4bNtMKCDGc5QKDLejYMbKDL6t4NPEzdDxDNaJRgSwF38R7jh2nNEbCkc1CbSZrxpsNNYKcyeeGuWxquK3ZBUV7Ax",
  "key38": "3U5refZyh65XmArVzJjhRNwBxrLgAkn7YepQ7UB7KCLJPakWyiz3ihozFxtTwZzL8Akpc65v7KKKPo1erVeopzEj",
  "key39": "56Egge6E7EYQHW3ZtM6yWsWD7Ft1Bz7WDELJGyHMyTxAnriVJxMV8GWFhfzbkBvejAAmXvd5cUbzHTK1HPRLC3nE",
  "key40": "3ba8Kw2kkrKTkZ5c11TsWXUNiFyRapJJHdU7ryyUQ3bMzEmw3FvHzTPSoN7iq4q65SNZXfBXNpRoDBjzBCv8xtVT",
  "key41": "4Qfyg2pRmkMLHmwYgkqnHPq4zpmUWntqhbdCh6kZu5DPdTHeCSShaba5BHfMbxj2qfxdnDkhJ8em5mywcsE9APfM",
  "key42": "ZCs9XT7vZNo3SECFwhG4zBB244VyLH4MFtMfFCMCuDnPQkmmsS6NdBE4jhbwKNbxfVfQQ43og1v58Q6m4D1SKuw",
  "key43": "4BqkhuTmXiVPBKjJ3AkiJYtbMLVV9jRqGxUMqMAJYRjHTecjPsFTFypK6rpaoUHnyy3bqdbzN2fZfGZi46vCkmbB",
  "key44": "54UBToytoPN4SFnTzvDmMqTt73DXbuGMWUdDvi5m4uR7D52tDkeYfvPJuggpRdF5KFQMCBUmjXVHFzRd7jB7H9ua"
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
