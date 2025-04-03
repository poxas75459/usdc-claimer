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
    "mMzHej9bTpCKDi7bDYvs121BvGmYa3fZUJqa6fXJbzXy3vciS5qPEM2pcCz6nZVs1nx7j7ExWP1cQdLtRQzCH3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYDSoqESeEW8xc4hSfC2mHnxki7ffiG464KSeSAvsLrg7fohxR1z2N2zgvqN3cGpsyCYMdybHWHtPQTAbMWALdV",
  "key1": "487Vodbuv543JVuBJLjuYfGS6ayv3FtXvbYpPvV9Pjt7GMcVxMep1QSbTChTYpUy6kWLbG1M8ixWT5Vsu86CeoYi",
  "key2": "MFsGbCt6ARhHbGRh44CVp5RFKcDqyNREcc3fp7ThvWqu9oUtgtn5VLjwcoUDH8WdKtkBVetRmJtJeLwmuYq3ZA3",
  "key3": "2wbkBvjUtCDGvPrQ7nLtTRVTpAidJUpkcwSMsXtSaVXh3AWsfDztJayKKL4TRmkYUJ4QUKdnbfbngpSJTBRvTNoi",
  "key4": "5FrN3X9PrxTBVXkTjVfp7xMHTuk2d47gpUjKPQFcC2iVjmqboWQSpWTycNtYUumbRUdNDVEAT6CiZtDmgZgs4k7v",
  "key5": "2nxxW59SG4YeUtg4sFr5pMFxzWtLhofmNDbpmnpZudk4CeGs4Zq7JtCukmFE3DYWKp6EDaYr4bmR7PcJubZJ6K4g",
  "key6": "3sUMJMAu6Fi2HPgwFRuDWBjLqVdS9myP1hF3CzgaRTzChHpji7KLrjkVpfe47dWEpNreWLXiEeE3VAwz6wWUxzMK",
  "key7": "4FJ29E4ipeHKMvE5iaZYmudbJTCsdHSCgYLdSKz3GKfGPhWRKP94nW8dTPBNu5B5ikeX2YSVnDhofJLmwQfrgrvw",
  "key8": "64p1sc8N1kEgKXy5g9xmj631PHZ3bPXfZsathLqwJJ8bug5QjSHXsj9znvfQtzXd1ucjWVFH42crTNu9ZunTAsZ1",
  "key9": "2SSgZG1uRFTrdxFPc6tz1MhLehwU11rjSH5jAnHbHoLFenhGKHBFVML6zGpKNaMasjDfVRGTN7oPTdNVhj6zCuzs",
  "key10": "jGQcs1mMfsgUwX4Po7rndbkN4pvXyTvVoKQbSCCCP5RYMwkSTnrwjhCAwhod3tz8M7aZZFESQew94CW7t3V4KJj",
  "key11": "SFQvd7EESEW9szmoFmiU28beGy5mrXACxKVHb5e4JgdEMC2bR6gSPEWZaMMQoFQfoTesnKLJ675Ny7cfGtxwqtR",
  "key12": "4eyDhbMDLvgaJooQXpvZszsGKGRgiDvfNo3u9UVQo3bphfryQ7y2ASwXd6CMEHvmZBAVjZtMA9B63eYZLofzepXv",
  "key13": "5YHstWxPVaYVYzpzEL1mjtxumL9sWDXDTzkmPieDVpzHe7vnF3vVjj1zn6fF5fHRtKY82PhSHhv2Z5tjXYbNR163",
  "key14": "3ncCGAmHP8TfRDQW5sM7ui8N6fqQaRybnpuyQ3URxwzheGsNYYjizG48a8j1CdqVALFUVVmU1m9kAieRzHgrVA3W",
  "key15": "5Y2fQBycnjwxZEKFi5u4JgGpFBfACtgFdCG6nXXCKJTcrLyip549tG2oxaPiDnMQbEWXvTpRasnHthZ4cXkmLh89",
  "key16": "5W6exXwfgJc5pfFd7g1Hd52uoorrDXvg66xE33V8GxMrocN62VT5zu6AqvEapsXu6VmxGnoCZ9PKDgYaRmkdmUSy",
  "key17": "2QWFBZPHwBHrTAqvgDVbZ4bz9eu3J5wKpLw9CF1gQtMRVL3imvRXVt5dn8kKoH1QHuSjnE3deMiSEhiQFtmum8U2",
  "key18": "5ngc9Vhnasa1mnTqBV1jxrWJzi9ToAVdzTWmB8XR6DZRh6iwXP3E3wg26AZLWbh2aVqQKaUhCPqpnBre89SnHYEJ",
  "key19": "215nwSkV1SvtnNQGoTQiWaPvfRJJheYV9z4cNQQi2DUij6JUMwtQe1cB64Z1LgKtFaichLvFSKhLogpRDmrqswBa",
  "key20": "3FQhcA2Bg6MoQKXcArV94aTscudJqK8SKTfF3G1jLWwB77UGgQDycoTNLCtM6YagFpeZHFS2F7G4V8H9CQ1wXrTR",
  "key21": "1svfrwfRMugYxh9GsKJq6Evako61HRc5L4kKtUtsYE6mZy7z5waZJsYBZd18Jq571tSwfAyy7Up2v5ZBPp6As3U",
  "key22": "4tSv5HxgsNLWbUuf3ZgxtnRQj1ySkAfbonyoZqeYxRVtVhZyR6noBnQALnSSrRosXo39NEf2yrN2Kfahne8m5wrZ",
  "key23": "trh7pPRU2XWuY4KB3FXCzYNi2Ztbkieri56r4LXQhGGmDZ325RQM56peojLWvBEngttBDjxoENSDBstQSiKzmYy",
  "key24": "jGer6GSUpRr3KvPxwATWjJDUmWWXaWJvxyc4yhL6eH2h83GTvzvWBYikJBfx49gU6L2roGbwMvu4xdLJ73TdFWR",
  "key25": "2nhtpR4aGh1zZbB3tngQ1XPgs5N8Lp8MDtGdgHJ2isjynDDbRTNVZjN1hQMqjp88awSbsaDcxEdDvFMtQgVbm5yy",
  "key26": "5im7cVpkwhZTdbtPqjVNWqaaPJhcUNrVviwwAGnkaDu1d1HdTTha7FQkKMLX7x32UHr86r2gFZsTUdrJPVkPN4nP",
  "key27": "3b33SPRMwFfzWCBUTTipR8s8fYer1SmhV2uJJVEUdMHXRrRC9dMkDNBuZq27pK1625f56WonfDXk9chwU6pidVNr",
  "key28": "WrQnvPGUYHJqHYwDmNZ9wvcncPdPx7uBfCHYL25TGMnv9CJWxWZz5kE5UCxya9HaF8A5o5LT5A9sSjiPXoqauQT",
  "key29": "3m92SKums1pAqMEPv6VvZyCtgHbSeJGAvH8QEkrk2TkYPd13R7i38Y3R7DKoprAUP9t4SeLAJSuazdvQ6e1CraML",
  "key30": "5FyiTWAch6MM5nNbon9URytbhmyMXCRZFevigjG9VLa5Z6ZF2xPXdAwGCnk1WibSKoSJmBYZRajvEtovhFt5seLJ",
  "key31": "49a6LbX9LMiQLuqvhbYSde3rAnRdJeaHanpzWKnJ9aLwZkAvsjQeGWAeTZsFDzgg4nhe753YHSzLwsdLX6Sz8pkt",
  "key32": "5aCeQ5Nq6mPTFwWRUzFTPzyhCKZNMTso9xEkfEiQJWVv5wSxHefZpXGEAAXoD2n3roM1sqw14obq5YctanWqhs89",
  "key33": "3ehejp6Cy1GMLmt9myrBN6FJWrWSe7isjAreDM7cfoCeCdsnZp7FU8wfUbND9oRh5MzQoG7mVuGc84BGufiAKU7M",
  "key34": "joEmLjoWTciirRVq2J7V3SDe9C2rmBa2kxEn1miZ7TdzwCaypAp52UY4ckJZJTzdYJFmi96dTKT6QKXCa7qK3Pu",
  "key35": "kJmfpwxJLhLb5MWEy3EGEy6rVtgA9DVvUNXsAqhgRkS2Qs5Ro5ceeNLqtpGSWTebzS2fiZfEuibsRj5tR73T2PW",
  "key36": "3N4BjRu4JjSVNmBFuHiun47dgDJ269RqENrH8s6xP8yj2wJyWpNSYAXZvrC9x3TvHiGedcP4g7typMUXhGwPAYcJ",
  "key37": "agmu8Mr243gYCfiTzJxRKPRnwaDuFgqENoYQ6YkmvqKqi5NwLVXYoBo5R5gaKg2VAyZxtzTHC2j2ZsQzjDfmWzv",
  "key38": "ahYrpnZxxAPmcixUnWtFq7fN9aKcxTSb9WJxzRtiyxSf6uAyFjQk2dpe2SfmBnrvC4N5Jay3Nc79ohUe1Wp7NJt",
  "key39": "2WRyg7oddBcrWN73r1TtVf4L5gr719o6wMLE2aCveWZzpDr9iqZsmtgQr27WTKde9nP6Lrb1QV4zGMjikEuE2v9B",
  "key40": "DxhAyJjJDv7aBdXxFmyp3592sXYGFyoGSA55MrLWfz5RT2RKwrxq2Psqs6h23G6x5dw55XyNB8H8phwvADt8VKR",
  "key41": "5HfxSi6snHthBggaeyq9qExsMBQBg6rWZty9bUvBuVRYw8shML8oUXLvDjdeiiuJi3qFAX4hjp9ygzYHqK9wNSer",
  "key42": "2thxYnE87d79U5XyFFJxBGhGTWZWNSjwPrNJ5mGrtkKZuZFLMesbAKgyuSvEWYGDGNmLDYPSPKdWpmFvmhPCxM5B",
  "key43": "XMeUnBK1CkJegZ1LGt4owAaQQ4i6XQrbsJkruBSRRKUqSDaQnr4kPJj181HSxa2GjsV2xiLAM1B5fhti47qk9GV",
  "key44": "4Up641L6gcCm6ya5te4MYSPBUBuchX6e96z7VRBmXrLjp4S7fHGHi2pvraANkRJmQU5kJHHQ15kf3WQiHB4M8bA7",
  "key45": "4Td1YLRcbsQRMGRGipxedDRrbfVCTCQc5mc1uT4Y62c22RnWiH15sXUszDsAymbfiLxq4yLstSXNZzAiPhpHrnGR",
  "key46": "yZyg27UcNhcBmW23GMz84fmUKUhGMT2PAPcfoErvtaQeLA4jhiQ3zFSmEpwUukiraV4mXGjDPXq2VC9r6JbuxbD",
  "key47": "22Ji4f1TEfPkSQcJM3bQYaiLgYYbcgQBanMW3gmSaU3oR7XJUgJbEKdDPh9uUPXsFqdetwSeuHJSWeWvoEfg5iSE",
  "key48": "Fu5gXTLhXLLZh9Vuxi67AGpKeJd1UzgGwo1pZPp3oBg9yVcHyEAa6tRuncFFXAyjcEjMHPmYzepT1tFPtiDVvnD"
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
