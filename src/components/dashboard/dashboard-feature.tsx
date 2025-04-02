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
    "4NKw29eRbqknDJ2nntjBatGvm1Z4JmaoH82963xjrHU2YDqZwBxiJR6recMukEtWDuF7BKBETndbzWwJur5QPpiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jX2NwN9WhGuzaCsewVrmDXQYKfkRRQGofMyYNKGoRTyKRXVakL4m9wsx6Hy5ChrNJTME1HHLGT6nwEjuqdUV5ZQ",
  "key1": "2GjfpHuxTv5VuJfYHC3ksyC9BjnwaXK8PPV6XcJt5ert9eKBUBFmWGgY4cwENWiAwX77QxrMaSQj1e9MCCdc98Wg",
  "key2": "4kUT8W7QL7cuktZR8qAKU3uD9qej3xN4nX4hVxFDbonkDaurQJKwkAEmStgC9xGoq9tUNRQC11XphJwADme2qT99",
  "key3": "5bC3GdEog3Tvib2m3sjMkxhmVdfEc4jhMq2wMMRs2eMDcZopPDeqTxaih8sM1jYZyVUvPvCbt3UNC5aJNudtfSDg",
  "key4": "MqvPJViiFqwQB7PkcHeELi4ijHVRCi66xURrCaKZyEM4mYoEgG3iSiiQ5HH89165tV8XhvdgdgLEZhv28orb3cX",
  "key5": "3642aM5cJqcgSHugAGuAFFcqjiRhhvVBGQE5RxhFSHyyxLrLvYtjugr7mzyhZWZSACuzpvyR4n2ovgf7uQouDS57",
  "key6": "4oP9EZcq31UM21LKN4Qhh2wdK6WxLfvkR5g8p17FfWWsUZjpYaBE8h83rszKpJoLbuB24bYzyyr9CRyh5PV1hnir",
  "key7": "2DFiQuSjvHRFv9G5JY1zQmkDyqHLqJzm8GVwb9fpeAtVoWnuf8eVU3F8wCyy41SYmaKCpg3vXNcr3urDsF44MNAD",
  "key8": "3TUL3cazdcD4jAPXQJT2P3MmgHpciDjdGj6QhnZAy5PsQerzhheTMqPSmqCaa93SqWsmExGVdgKZcCVQKAZt85G5",
  "key9": "4hZkA8no4AL695bmf8MkjSHtwrK96HfZfVaKKmakyw6xGd34HyLnBbQbDfK5kinXa5CzYgGz2QcXj9z95ee5iwsw",
  "key10": "36Ej4rntYRYuUmoJvnsaoW3QYgtVU3eypjUanKMgzm1KoroH13NnxvnShnWJRbPPstEqo7VYkHF17gs694TnmeQA",
  "key11": "3iLWMy2buUT13ya3C6Pw8nUFV76NntvPd8TkNwHAARmVY5BYa6mkDd61az4vyuqxiU7MtwEZNyXjwWLgT35AZzS1",
  "key12": "4BUGb8ZBu7wW5C1UjX9744NWpuZLLkg5izNiU1pqBpXkAJzZXiq8rXF78r5JJpDxpvUA6dunEVLFDm6A4DCW67wn",
  "key13": "pDYhRfaz9g69B6rRdrZMFauHDPStnYukC5KjDzdrYhocidyxeLcpVbeYbtXuWmHrXgK35nMVg2rP9NihDHR4DNf",
  "key14": "2e6NxgC36xMjD9DBWjAhsEDLqoympNw2EimFEHYeJV4h43Kx9NioshHVvisHZMmYrtmBJJmKqqKeSynvp6dQyWMR",
  "key15": "KJS1RuHyTYKvmzhhEdZbFM7cSzeoNMshPWoEXXJNDt8aDRRv3jhMHKe734TzbtDvavtgRAkjHbyA16CUgPwG6hP",
  "key16": "5VZRAPQwBAWTtNcFixHtAB25u5eNzMzW6Z7wBC24fTVLWPHxuyZnaMJdd9BE2U4nPb36G8KVgrYgDD4Tzw8cxfxw",
  "key17": "2PCPqDVxBP3n73KccyPwhZXoRAbijigQ4DTE6v9ZMS53nZR5iPAt3Ncp5p8UBAdyFuPDXhXxk3aYvEVY47Jkh9BZ",
  "key18": "MzAypU7b5pfawYbok2FFx2urniYPWJrcNhMePnsWhX1JmYs8mwKmKc6GJvj9VYHwtz1vLQTZSWUcERnCGT6ui9d",
  "key19": "CjiiUXd3EMLw6jnMjAXek6PvTGroJXWK8hn84UfSvjDjbNQW2uZzDRTUCfLicmiPXEt8XUr4QUQc7L8v1gJ7AgJ",
  "key20": "5GM3rigFYS2ksZ1PjHGdrmajbxPt6zzeB1NcsoUY2AV6EZytNgm85h2RzEhPKx1pQmAFUJWcDwVrwb2XLwYcE6RQ",
  "key21": "4rXWLr27PbtMoQrwQMhYoggZ1ieCzHUgi3UrsL2tKuZ2ZaEmiCJyJrhDbGXt3EPaMtFU6UwdNm2969Dm19Gfc1zL",
  "key22": "MHm7C7nengGo1Mhuxx65WexusTG6NHwr4TB292W3skmExdo9SvJuuocTdGiCiEHrfQtcdVyvnbWWChLEafhGh2U",
  "key23": "3SpLNho9tNWY8sBrXTxchrBh85RamnaHxAiF1uF9D3WevuM5ZTVL5MfKivJAD5rv1cjrsrLVsYrxuoT2TiF9ZuoY",
  "key24": "5XSwTfjsmazx4EXNyHdgUjEue72PVuteaQgVi1uMzov5Av6796ZeYqfqYJ3AsUhSqFxNB8Rpmg4g74rf5nMRd7yY",
  "key25": "4sQoENEN4PoXEAPDEpm1Ye5Zf23fm2FVsqpogdDzjjqHGq9kNpiKbN7Bb2S2dLHqZGb4qkw8vwn4QruVwyVqGYRo",
  "key26": "5p8La9bke8dByn8P4dVe1sz7c6Bq9aoUCgYkXAxFjZWLm4hsVj5W3XrcpFAVyazqJD3DSjYrst3iJNC6s356kTuC",
  "key27": "qqw4j3SNFSNvscMaLYKWuWwVJxHYbJa7JGCTgNsN4rvMKdFhy9iqLJpTU7k5GiSbEo2rrnA69TPNGSZxEJY9YTm",
  "key28": "3qF2DwhhTRtSxsH7Ee6bDPVQQ13sHXoi4rJfEfAKTQJv23iGxd1av1o8yyaFmwUc8SwBNsD3yq2ac7yvWkiWKBoL",
  "key29": "33Jg6sQSM21LGmsn6Z2sVwfFyGf6NgumJry2LWdSyP3pQHkXneLFBQD9ye6jMaf2qS78JGn8MjzJwEmXkP8Gxt9i",
  "key30": "6sxSPBKYCT3ZV15LDdAipoWpkrmZtGyLp6CYogpHmDttWNnAXT3goqTHQEdk356K6nDFPSPneVeRg6ztgmcWtrE",
  "key31": "5j7LLY8iWAkTieEnZJDqoLCpYcFwsZjS7aDsY51vQA1quSu5PPB7xS1ZJDf8b5MkjWTL9VizcbUeQ5mYvWJc6VS6",
  "key32": "3Yx3TjgVeMtMRaXPoX5mTahoTQWkLiXsVWbmeCV7MBSbaiYd8MKNrzz7v13uFAxBDiz8Siru2jWuRLQW3FTxPQVq",
  "key33": "4LM7eJQnyqxFvRuDKbCvx2FqfBUTXjdCyGRr3b8zDCoqkfXE8jzx8WEiBC2B1h5FFYjGVyPokzQurQFtPfhQwFfH",
  "key34": "3xKBrqMwLZydabkE9KmjqyrpRB3RSRJ2455iB3KePRr2kb8pDTGUZ2uyDYWHSuv7q9nYDp7QDNjHPpAqWWatc5kT",
  "key35": "2pYUPdTVXqA3LzdrncMWNzZV6EcnjLeh5bBoxBdTbgYZzDsgpqc5JzEZP1Z6Xe5gYYwn8CmWp5p7doo39swt92sf",
  "key36": "2sm46HNLrs9hHfTyz3k1kBCt364vRozh1PwfFWMWNFDN7jKMFL4PUx8VeYRhAVTeJ9y3BCdEXMhgnEEnHp4548St",
  "key37": "44ocHCZKvxTfuRtdJLysqcnqsegACp681r2EBzzxGMD1aipQws6kuEoQxVBWgUimpPJ3xyweFRYWEQLdH16MXMKG",
  "key38": "5DkhgdrxVWTgkRwYS6nEJiu7Zm1nh5uenRfYNGNwQWLxdMK9844MtjkqoB26nB2HbcvYpA8rHyvqtBzMSfZ6Maoi",
  "key39": "5zYPQHYVaGTU2bLWbY9th7yGKG6yQd4J8GtZuz9TGvRxpTM3XBo7eVse1C3ffqrmsDHAcSkuvZZBfa2aEV2vrwnS",
  "key40": "3smgbirvLoDizHiCzYHw4funMWWtG2vAUvYMFb6ZmpX4JZrEUFtRo71gayH3s9mdjgBzdS46FBt3yr1s36HEi3qz",
  "key41": "sedn8i1bxqkrG2k8N1zy2yxDLuksf7seiuUF4dcFxpt9uxi8N5cJdGxg8V58t8pyhQRkF63kBTccKR4jEeaj6js",
  "key42": "TtuoF8KWR7VoixUpZ9yGPfR3mA3vSsYH9c2SUvuZZLTHd3539WvGAZF4XtdbtP1EP5KuovjTJboaJtGkJNbCKby",
  "key43": "3P8BUZztu61zBdvrTBrGcmZwn31FD78iU6JXLV6fiBGk9MTYhb4SQBi2kwuxwfbAcj3kquoAvDj2keCLYineL3dg",
  "key44": "2swachVabWRapsZRhhWz5Wd4V4WhLU6wGSYfUPHC16joC4cSo15TokiA91UNSuq2BWcBhrMU32Vee3CrRuXFmL7i",
  "key45": "46WjKCzS9DfUgPytbsd3XckNvNgeeSH2mk6RBeW9HJLYxk1v1yLY787aYLsFR8eQAEoABEVvh1bgqNrBDGqH2q47",
  "key46": "4VURJpXwtLvn4LFTMKztmFMX9s6BEzRSj2v8cMEPxNatf5GseyWDUmK9o1iFFjq2GEFpwyxsWKtdezuM4et3wpUe",
  "key47": "hvLs6EBZyJ8VNJNCQhSRP2waVVTqPU6nTc2j5ZzAhorf8J4viVjXL8P5w48wk1U4PqhaEPBL8NZAVsBN3Jemmbv",
  "key48": "e7hwkjpBJJqKRMavkjAULkCRG1S25EwdkRYvL6uAZ2ifMe4dAf4kt1PDrT4QjJCDSujwuFF3wqrV6P5Byfds9CY",
  "key49": "2py8r1BM3ngzdDdXXvnmv8w9zvrF3QEQfNkb8SYT4kcvZom7snCH7dRfFwhXhfunbp2DqnttRfTt2UsXbmggn1HN"
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
