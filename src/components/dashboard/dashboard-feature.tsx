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
    "658AKEFADhfr2EMzCRc7yQCR2L21MLpEGDSYA9LmjV6vkQTbuKkoH38nhjjamnWXh7n9LeUEX55W7rbDnjSojWZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLm2vdDTxxVAoDt4oNV9qo2PA9LaZvwZJPbLYnu7D37QPG5JBs5Vkqy3yQeV8UE8wmBwseYAv1PaLqL5x77agRZ",
  "key1": "64HzgLwJ8HdEC2wB8QCcvbHZCLFtbqhjo6brkTzwSkh5hb5KA8roLRNwRNsDaT7CBZFKXTQX27qsxCVx2HhFBYVW",
  "key2": "5v6jqwCnPdzdoSo46uD4rhHtruEsdmtzHWUscTgNztbfKs31ZejeDDMiaY3ygwe3QrEWLYDgYVh2YHBbGeMx2z2j",
  "key3": "vr7EqtXjQXc52xj96GtVHn6USiR1X8m2G2dZokCaMjjbc44cxi1HQy12JyaX9zKAiocR2ntPSFvDQXWUL2ryJTf",
  "key4": "2uL3UShsULLACWj6pTMw5DuYosUUtz1KAMinrxCtJTu9NdG5bq26VXon9FoRuievwQEqCAswhUfgZrcR6kFkkNnJ",
  "key5": "UfFPRDcfCDP9DdwnUMugmuhyUVU5Maw6PnUDpQaa6Bpn83FEYThp12bhpiYbpEH57PbmCoFhuCJ3AqkAu6sgbES",
  "key6": "hYD68htjNiwKQVTbqHrhk1Mj7JtJAXMBW3wVnSMbv6TSmvrvhNqjNFAdT7ppg6ccLaM7gKLDtkKapw26PtiRseA",
  "key7": "3JbLKV6A26xBXLB3rnMchCdm4ddDxyNN6WzQbp1eKnknhT9RoKMmqgKGgsqGdwJKgaHEuWf7VhiCRsfRiWRF2fgm",
  "key8": "3LLC1iYgLc5kwaGeMEfLS7aFAYaZjeCDTPoyJV7fk23UHwRYQ78rxzDwwV6pfXS459LhYPqLHXUoZsrSDURytmv4",
  "key9": "tQYNbeeUjNec3ZFqYv3Z1aLXkaUGoMLkdZByZpfeRbU6Uc5R2d32Nw6qmr54BNZ8qL8TWP7Y5LECFvT4YQoYfjs",
  "key10": "4K9sRxUygZGqnh6MeLvKGkdGzVm2E1FtC6iMzWqfPFBVwv8CniDHQKgJPuQXhiXE7Vg79CUMR44DpmzhVFGoQCKN",
  "key11": "2xuBtS55RJEz5zjXXkQnT3GZz3JHyeEQhSCgG86AAiK5sTcpGb8Fit4pyBJ68tZasjjPb5KEtWduuyt9hT3QXxVa",
  "key12": "342MkdSkpBtKjgH9LWvgRo1K7ygYLUAkG4G36DBUe8U8M87zB4umTRkeAK6rNR9ZvS3je52JvaUzmToDLcFNhR59",
  "key13": "2RtPtdE7jBPNk7JDNPZhhKZ7D6EDYxih2YVxBMGqS8m9AefgdmBmZoP8mxLcM2BSmtpLPZJudUuxQWvcrXuPzHTc",
  "key14": "5DS4YSBBajA2wrD9N6NMpBcsfZtccSaSxpis7juD9y8VbWiMXwXj3T6weZrtUaDTEyRMP4q32f8jqKJF3jq9YMDf",
  "key15": "3mVB6EXgGN8onZRiQeLF9WTJDpQo3pbHGRKsHSJvTyE2Vk7FRn2UVZnW7TosEgh1qirx82bR75K5E6g9mPC75S2",
  "key16": "5PK4HT2XL48hx7h1gzFK5jLYe7Npf5y17akWpSquSpn1FH2wnRuoMxhB4tZGy8x8EJbahf36TuedQZTdWZ9Fzfym",
  "key17": "5mTX1kGj8e4925pbbtty1FEiSxrhBf5QCqbhrxo2yBzEP2rQW8ZiT3TPi1rXWFbsSy2FgFdzemNXN19VR4v5XUnY",
  "key18": "58FgCRRbiYcY4UijCRJsjRq45mh1u3terzZpMFTFkNLmrhtXcy1epkKfLXELudSNrpQiJS491RRKSiNvcFknnJr5",
  "key19": "5bUNrwmjPhiWwXBKvv9VeiKcdJQdN4twx2ZP8d8YF8Vm3nFbWgpfbqKt9mG9HHeuxykpAcscrfV5s96L4ByGBjmY",
  "key20": "2B57VfR9adDpk6xbMepsMcq94UokDR8J1teKt1vEPUnmnfUC3gfKbjadNiUEAyuDheoPS9vHySdrhH8MEH7rtSu",
  "key21": "4e97QtFoCwEKSv542KDXdhCdU8Qiarpqx1a365dTHXMT4Ft1t4RAs2v2R4S991BgRbr14gHAspnJD6Uu14Tu3bSt",
  "key22": "JWB96rgoXkoaP2yxWyWTBEepz5R9ySsA5jz8WGVcRUSzqMubU1rNeBvfAsR6barRoRxxce17xr1JNrc2P1M9bSW",
  "key23": "5eWVXi4sWeYszanoWQCVydqQ3wQECZAwir1mo6kCNm9TL8TURDaUMZ5tL8S6C7hJnb9GEvqTurMZE31YDGzd5cTi",
  "key24": "28sFsgXkCn1EKyPSEmmah4hesec5uyVku9U7RLTw9w6qosaZwZq1wB38hrgf6R4R35hYiJfHfZar4ofEz7cMVy7S",
  "key25": "2xFhFEkik8eZe57Lk1PfB1HGCG4MWVh6GYYEsi7DkM3nfugopBFxLF5CcssQVpKaygjSi6TVZ3Q3u3K2wFfmAk3P",
  "key26": "5Qciu6KUNQe8TZmhW8saod66KXUJMqiipyDe7s5MGHenWFEeuVedBv3FhnW9LAJfRErPNFS5Dfra1x277EBHeJY6",
  "key27": "3curSsjrL3LMjtMkRtjQcck8JpBcJ8Y7GvBDCaAEdqrYK88c9X7gxBLkza8xNFj5XCsPhkd2jka8oSWVwN5bNG7J",
  "key28": "3kDtnBq7GEpQtWsbRxuHt4jssky9VLswv6WiiYH9Ygoxpq318S3c3jVHitfFwTwf9e9aVZPKdtkbY9Mifx4L9544",
  "key29": "3QZqh54QdkqaieZmFbvopeYNeQWJ1FAvHKZuAdbUji9M5NYd6aUzgWopxkYog4gBP9F5qGjr6zEVJVTxgbn7Wgib",
  "key30": "5LiaPN3bZXB1gofejWfSPDiSudJAaPFePEm9QLUUULaoBiGdipRnZcASrGfYdfJj4zsGsGd7CnGjGG36payVdqd3",
  "key31": "2HqVaFQpowNrhKMY7BGsgfYwUjo9uEuXeF65t8JhMH4eS8qTffVkZfq2YSWGDjFsfSrLQMdAJqpexWccMHT5VjiP",
  "key32": "23mkpm4mcqtuPyVwVsrqgRQBmbwaBGnn7hMamUTh2ukRyCYWKhtG8FKf6k1pkXivwbKe6bNHYz8Hgs266WPCzvS6",
  "key33": "4bAb27Jqpz9r19CoXH2n6DNRmq1iyLBAuHEbzWFboCPfuvvJFDX3EErSuWAchQ2LTzzpB2u94AB1PRSgFsZAzZ2Y",
  "key34": "2YifRfzXduuT3oP3iveFwN6pjNcdnxXyHrspLzcx323LRKnmjtxCsBzYastiW32FPHhBP4kMTCP3kxq1MaSmCwM",
  "key35": "9smAF7jDLph2mkhywZtij7pD3MhFzE5sqcjagjKKaY2tAAp87FtfGUvfgBi6E68bt7xSB6t9ygpefxiCyC7M2RL",
  "key36": "48SNa1cHdtyxeRGQbXquAbY38TgYyfVNMh45Kc3Z7CNafhbvbrFHd1yQR4h4ZXbSUQjhk36birHgPmndSJJQM8py",
  "key37": "diieCaRpJ82eU14f6dLcc3wZ4APbgNFYfE44HsJZq2NooGEuvCj4fE8zW4UFZ93Cwe7ASzG31WVbN3JSB7UfNAz",
  "key38": "22KXkn8jzPQNmuhi77fqU2L5rKr4Dd3U198EhF4qHd6JJsAy4QGWnZgJ2mywrqKWF9LJLVYjfEEWEbm74GUgtSfK",
  "key39": "5Bwb2ouuQD1CVrjuALhAaCUAZus5cmMUzETG58AwSYmYuS6ktcY5PFDhtdwVWZCcQx7UA6wr34BZGfsGfJvz2bm",
  "key40": "fJB9FrR3kD6voerrkBs5ZVKQP5H2qPTgB3HhkkWPkdfAjNbL6nu9eRLk4BXRHHa9hYw6VG63EBh87hdF9CAczeZ",
  "key41": "4hGWZo7sVs5H4zkCtJihefyJk8yg8zbBRipgdSYexSxSATRdE6h78AJWMPxsHN6o1QX1EtaC1jpGYrheCwPqeBd4",
  "key42": "4JwWo4bPJfs1NKG84xG6oE2WiVUJC18kcaLPJbRc4H7XQX52GbCC9HXJ6xugD54boND9xESoJNvLrvvs3pq1HKAa",
  "key43": "3K5sPExrAF4yNeCDkRudCUzJTjoNnVuswHJkDWmwWjU8XK9PVac6v5pCm8uCMDx6bmjKMYAsnyck3LziMKdXpNZn",
  "key44": "KYDpvje841vfptqVUPy2e2RhoNG9wkRiizuhyBsyhXkggGW47PZbCz3TvGQHNcohREPyu7bU8kQ8tejqLVyySZz",
  "key45": "5KDiw9kcwxCpm8uy5aZR2dAMSRfQJp7PCK2WfxK7ptU4hTwABwM4Nh2TRtNoKRnEYybJ8vzpeg4gUy6eA64jk5ww",
  "key46": "2w22utyFYSANeKzhwY4PzWtP5aghywht4d76FzEsPD13rgdbX5SRWjTJZA9JuhFahmWgNoxncfWP5YqMTmF426DA",
  "key47": "48RVKv1QYCGXdCYNjk73VFQhrLzQPoYKRZJdsEPewuMjRewrsfw8gr8AgmAwq69APKBLxGNYSsFU3zBJwrgXbinS",
  "key48": "ddo5ZW2ToxsFv5ysARc5nTJo526oeobafJz5rd5LTsAgFHfz81BqrhNCB4RxNndNFER1QYFtcfqG4WNKGeLAWQt"
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
