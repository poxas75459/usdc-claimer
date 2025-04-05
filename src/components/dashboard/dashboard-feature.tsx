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
    "3mkGN6ifAfNrxfLTDj1TWSt9VC7CsWwweGW87yanF1M5YGL3L2UFitKKtrEZ4UyS3vL9bJ4Jt2i2khMczNqSoxEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36vDjjMpbtiK7g7SnmTJaWUsqFc8PbbAvuBfUwLKcQEo4nDpY7Ng63xpQJf6XoBACNZCrvjqzzrVZHTsUiRvzdxy",
  "key1": "5xocjuN84YiZuWqimcuaRcGtSgKiKtgAsuvxcxngC7hBGipWEiMULzkfCL26qiVV9nhgdDudjz8yqDPUHfbNhKRm",
  "key2": "VuhG1uTHjrerFnSnBkaj7Z3Xg49qpSBVQfbPN9gZW7rzWwtkpJRYzGtd83UGfdKLGjFBcCf3Pv1qWCFRpDWcGsG",
  "key3": "4rN2uhRJLN7nPk9J1inaD3cNaNzHoLJrztzf882yW5FccDbwLRA6Gm1Tshf8DZhdyT9QTLLSqSrCeQ1skP5ygLsr",
  "key4": "3PsCsTknCruS33BBgV7QcTRkVvZbvZ3MqH73RLsDU7jRSLCA2wPSRzgr9aXuSnss2Bwrq7sPL4UQJSaf2PhjebaT",
  "key5": "54xwxytep9KgZZduvVmC6o6RrR4kQQRsZERzuX5pnLjAU5CX6hFpDRpUfVx6RhyugVBTSkxdWcz1rF5VxYEA9fZC",
  "key6": "LfsKRxYZ51Qoa6cKTpTzif6zCaFCZEBvBP4NCv1jKnTSfC4SCK2sGApgERg9ya7CzRoJDDagt3rK34zHPUn17rS",
  "key7": "2wk1aQ9GLzKwUnuBdc8haZ86qFYDidLrwNRnBK7fP5X5XV1dSuFmKeEMux1pM5HEeNZoKCCUbKJDmVJVG2KvqC91",
  "key8": "44ypuCZQSN2HzyVKPhdnREyhAirbEz3m8uwicKeUqtg9ibshnryV7ctmCL7KcRdgRYwCfz416GnYaTbeXvzMWTgw",
  "key9": "Rw5q6NhWDNiwGzATNNBpghcT9vfZaYXmpw2Ncr6LbKJTSjConoNXwjau59Dqn83RcE83Knqk5djpbdBM9TSTWU1",
  "key10": "2bJoyeZFNt98JHu2cyE4wY28id9xK9Zh1ZsZkpGFzkXaM3D8GB8E294pDezNM3pqLEhJNDNV6H6ZZKbo1ioeprPM",
  "key11": "5zws75CSJxb6PYpLpBDiN8hf589CCraku7bxBR872UuFTocdnaKM2ZULSjzPDk7vuk1N7bLC7mu33THHsEi3Bt2N",
  "key12": "4j7b41HuD4Tafky5b21XThhEpCfPX8SY4QRX9h7DfKpApBkZvEJmdUz4SEs1hNyrBcgyZHXuJN7xYf7dgNi1Nwkw",
  "key13": "26HvhUY3jv2TTNk6a61acq1c8ZtEs4NQ9V78yQCsTGgPTHLv7PcsRJa11U8gPWHw5kLoieRCASALP7HLN1buEPgb",
  "key14": "2G9f2eU3pSiFrHdTTbRNrQRJwZXSSsqfRzaUenA7FtdchJkk6P2v4Usmkwo2ykLXsJYvSDZ71x3QqHyZi947nPpG",
  "key15": "4mxgx9k7DCNd1imczbyj5z4M3sXk4kTVBjqvVmtLyAAXoM6rnujdEBKxf8DDdwaFxjG9S8s1EB487eZwzogw7HPt",
  "key16": "3x8nz9rcUAf9b7cdPzAJdj3S271mDHAVwVqkxpMiXkdGQdbPKLVUqdLyqocS2sbTMXEB5hGs8PoWUcHaXyn9fV3w",
  "key17": "fvMEKDwT1rUs6qXihq74vUdWPyy75xXJvRSLjkoKjTVFibYgAXud72Lu8iUj5dvgT9aHY9jr1uRpRMLUhV96nM3",
  "key18": "3WmrVMZmVQP87SCm2FrCEMKRuq6Sq8F5E2riFSQ71aJYGaL6GH943XBj8FSx6hwqBNPjYw95aQNkg6mewLnVtFsq",
  "key19": "2KrsXvCuY3TEAMbZ266DLwq9JUnVERvvZKMvYqZXxccUhrtpmNskBcmw18hqWkkRbqKrK4TzbRdVV7R127dvUf9h",
  "key20": "64xazssWNJ3rrZ7U1jinjjRn9Xoa4q3to1Rda9Wz46qMiC99Uh5TRtb4uCiAace9MWsQa6pEcn8xP1aLdgTrvfu8",
  "key21": "GKTSnbBND3tPaMNFstGs2XAK44EVizH4UmoK4mPob9J5AqygGVAcKV1zLwoG2mrymyTVGJUUZ1gRhZLJmW5pPhe",
  "key22": "5BC7U4NcmUbjrz4guWCF44fpaD3UdTMkTsFAH3LDu4Z2kKEywJi2j35QmR6H5ewC99GRE5a7mdwF6zYqYAcLStad",
  "key23": "3RPToZzaT9wQdo9BP1PoozARjScVcGwXQfRc2hcFaV6f9brehi3eibkYW21vawrDvDJhhiftViK3eoJnwbqkZEGh",
  "key24": "hDJ789usdfcfwU2TVTYQdMcAyFbYYCTCWXqc4jfg1hxAxR4vfPwQM42pdXyrxwkj2mxyajpzebBskiYY2ZgPDYe",
  "key25": "Jm1ZB93wmaPt42asmbUPJz8mhwiREsEBfsDWfMr8KfNzdfN5cYZkppXM6qFggf2XsQsFoGjngmW7wwaSa1E1EqN",
  "key26": "536tE6rDQJxSEsL4j2WnijUPPfVpZ36QW4n8g1hT6eop2LWE6y235LbWMRj6KG9yp2hfiphbFA67iwFvKL1CWnWL",
  "key27": "5Wp3mSFEStNTtPEJfLDqm34jYLKehy8RWvPXLZ26jMBRGX2tT93SgrieyVGfDrVtKwsYuhLFGrEtzkzKaiPwi6sk",
  "key28": "34FQmLGKncR557imyrgZwnBbJWE7rFYkT2MY47NKg1LqxsaKVPjDH4kTsZXxTaFrYUVbKxK66xpqb6ttvay9CmGT",
  "key29": "5iyVEN6k9heLX7MWZVg4ntECtmqGKwRmjQGHorjK7subPBQ47hDXZkXJy413hinyd4swzph5L7EPXefD3iULk1KC",
  "key30": "31b7b6vLqeG7kETP1LVceYWmxuXAFcsdPkUBoPfJPvhtAuhbWczShbF8KwFGhuJeGSwNtF89poG9Qrx4vPahQG66",
  "key31": "2vdHVQdBDbmpmWPu6P2tF2H41psm8TEJFCrfHJH7yi7mWUQJY8maPUkkHG4hNDFRXPSVf9196Qz3aVAzRvn4iQoH",
  "key32": "5AiVYLvLA16s7Ga11cudEGA5qCHck7Fu5gtPZvGe42VhqDTTVaeNwfV4wYqjnHJqaWsdsD7qFMB5NwG65aSJC4Hr",
  "key33": "5cNSVHpXDz9ETBnWo1KVZjeWojENwDygBera87yVXCrrRbaXHYrjVn98rvcyTgvvLaqRiWV3Z85aGVDf4EjP75mq",
  "key34": "3NqqMkm65pCPLD2PTi5sgNiCChSaPeugiMVp1oAnDx7SqHpaSzErVmSJnxDaQ7DtBQ3fsAVQUGqszFrZFSCJNYSW",
  "key35": "4s9n9cugyNVdYEBakNfsMMwvSKfxSgymPbR8QwYoTozEda7FGynrEwN6UszAAn4S2Nkjt8N5Z6pax5ovfFQDkvxZ",
  "key36": "3sX4tCSSvDHTLf8PeEHKGhEJHroBPxD5iZVfUeE8hExjMSY8F9zqtMwXkbyqwFFUwhVT4cNCW3ZBkDEUswHcj6Qg",
  "key37": "UTKP7y4HB8MGNx6naQcFfh3DfBwJbMEDAzBgYmHPBdJebNM5FJHsYD9wwGNWY7TBpbjj6adLfaPhoXopBLJWTZt",
  "key38": "XaEWU6FVDt5gq1eGXmyLtZVciTuj3qy3ZMKQH7hLFdHDZbNBwC5Dk79M3HXQuFxw82xXbTs2fMwJHEtLRhREpJd",
  "key39": "vt6T3ykCrKaU1NZTVUoPeV8ND94D5YwYbS28fAVg1CHY99vGYwZLeLC69uSKM3oN9a6a1fzSzYiw93sKQufsZxA",
  "key40": "4MG2eknF43nfF9JPZmJLYR1WuF7vsgfwNyweLUmr24GfaigDpuMGuPfA349ahVPFeonwpeFbXYRknGxah9EmePtw",
  "key41": "2xFGZ1Bg2BqSiaMSypBLvzchMvVa5tojQNF6FCY3GvZ434Rg5mUFivwHkaFbvMA9hBsmo9X4H5XSwuEi6u7nCPMh",
  "key42": "4RqSGqDdGi48ULPVQVYpkLtWEo6iZ4q1CE3BmrMFL92JJESx91y1fTiBGs6TFhZr37UDjXMr61JHHa3UXefBWkei",
  "key43": "5EvE2GbSTFjm8XFGmLV377EpY4h83xwjNchHBQVBoZhRKptp8fqTSNeuA2wyuFNeVsmt6izkCC2c6HeHqGRX1oHh",
  "key44": "3rMC8FaHcQgn6SBwj3S6ErBPwnC1JE4sSzxMUNTmVGoWDw9MyqhAFtmsRdM92td7qG8di1CPPCozhcS7czSffa1N",
  "key45": "23KmBJmm4tUWoKBvGtRrMBMQ31aT1XoZaZUtvhpyU8BDH5ZYWCT6feNC8p5uD85kiMUubXfbizgTAMF7NJhGuqrG",
  "key46": "3V7bKnVL4JsoPM8898rkpt1cEpRRcyoF7bgtdM9DBGieJ3RjLze83dUqmvxAfj53997PjkcWbeTtTuZR9yUN5V2D",
  "key47": "3kx8aW5twYSFnQKNtXzYxmd2uHwaGDKLotgCftfP7Mi1WfJX2GfWBi2rvFv5Y5cHb7DpgT5QQe9YdKU2pnVqMWYE",
  "key48": "4ox7dmGfmEZ6ttzgqWHTx7mbYs4EWaNRrrUfGRnqja6nztLEFiqg3R9Fa5qACAkCDJw39ZHUeSLcWMKH2nKcfnt1"
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
