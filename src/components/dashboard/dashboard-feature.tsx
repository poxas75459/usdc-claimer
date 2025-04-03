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
    "4AaZsyeu6B39hKhELuwAw5zUve868m56iWwZnivtoG1UkBAnPe5d1rVodLu9GXPmZUq4N28G7vXaxde1MkPrpCPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sU6Csuev5YA17ZmP7rsHRyqQeR1eJoT2ukpNZvfYvn17EkaSeG7wxaBbhd3YfBYP6fxFdjM3zJEgyhVRjcuVcSZ",
  "key1": "4h1uC9LrvdEXTwDArzAzqdk4odhZ9i7jsaT944LPepwJQEkE4CQbEJSejJr8QwT5JuPHWYNG9e9dKpRuHnHQk1Wj",
  "key2": "2K4ciE41opUTLhgtzVwBzVx84QJnjR75CqkkNhTF8u5ceGMzyMd4oD2cKcJFBYkKfryqdmTekRNhiZPE5jiRNLGW",
  "key3": "v2PUGTMasGM7zx5QLTY2LXci8fmhEv52zxJXq3R1CQKmbGjGjVw8FAhbAn9K1N6aait8ELA41oExoDQJR6QWJZc",
  "key4": "5PyQYa4fpLkQqWqxtgW1yxtgz551s2NxA44rNg5NandEHmqJwUjSuvqtXGPYLnhsyG2tGhn4DAwYX46JNraUX6vM",
  "key5": "4L14suxrqYqhmbaxt1B4n8fggU7Am6mSATsmG86f87f92wikuCMB2BDBbAFXTNtKpo2NpEuv99TcUo4gXxDiKbsW",
  "key6": "4GzwUyb5v7xMP9QFH1APpPqwD7F4Qktrkh6cDashJxt5vmevnuP7DZG6cCReTgZ7yRS3oZvwpMzNhEJN19CMuD6f",
  "key7": "5DWsUrn7jk2hnrW2gFresWubtbNxsh2AYBySsW51Ks5131yhuCobjz41M3ryzLzWyFPinbhvxmYdQDhSMUnDBzen",
  "key8": "21K5WVNa3bP5eooFuEPtcP6Sh9W6b6Do1bTGmm7EWUPas5DRXvTAcU5ExRqwSM9UUoyZ4w9wyCks2pGA3JGttsAu",
  "key9": "3ot1FYy74ZoCXX3LriKDkforbCrvZv4XCmDe4BezXVh1W7ng6tYxZSN61dE7wuWXj5wa64euQ4nyNHYoatgi9KVT",
  "key10": "4sMASiRMBpV72vKB65XYPnrs7JKf1sRGC3mSjE2m7FxXruCYNJVY45PLPwcKpSh539UUCMtMuviegf9Fp4gD9JTF",
  "key11": "2mHinGgTcqWTfY6Bni9uRr5bUqCpUM9cX3Fd6UM2NyaxFx86PAom9kcnuyKf18i8MnX49D7bND5gmReAP71gx13B",
  "key12": "KykQgmhTremfyKhAZeaBbxV6d6HYWv9ExXebeFTaqeBwTBZZpjUUJ1rwSktmdniPmtz8E7ukwigs6HbsKE1N7Wf",
  "key13": "2d4MChQTcaNtpH1iTcc61NTjEbmGvrSprn8Wba4e3xnqejpCGBcAXaXH95yjaAGHBFzTwgpVPE5tu6zZSJT6Gkmg",
  "key14": "4pPc4jey7TXUhEZwTAoZpF4EgeqGjeuQETkrgFER5GEtSLKvLqnsyqC6wSkYSeGt8F5AKEVb9ffSEL6zqrgcwxX",
  "key15": "4isJ7pFLSY7QTnJFbGVTpYRXeUrXP26iRxy9vdSJbbyYK9xQsUZkFSknUtf3TZV1p9nzNfWwFLZyvRRkeSyzr1Ex",
  "key16": "3m1k2GuwXfpXYSLeqXPe8Lo9Fpk57ZWrxNT4U1WhpfWtDBniHpYAPNUwaWY6cDXH6f8z48E1RsNkjkxDjitaUamP",
  "key17": "5Nv7VAUdkvE8dQaVujkbKjan3XGaqqutuzxX6vRGeZcuMZgncXSHNisk8pDChMVpoVps5N5rbusUbotq5iwu3piF",
  "key18": "2v7JQqPuwsNk39uxZnNVXPkCyY6EN6XpSqNFZzwNqTvTu2UFv6wVXF9NWTAvhywqEDnuYCP9o6EmqS8pKtZurnvP",
  "key19": "4FB9MfjgZhX81r9PQPBrHFU9Lw6iU8DBFibpXXkvaLpc9HujdT8DeqC9VJ5CVpsAcf7u33diAZtxDAziDPP4N8zZ",
  "key20": "2zUUkHUt1XSjt8WChs4dehMrZH8URvLvqquy2UrsFbizaiWkT8aLvnb5UpQ3P2V9FoHynBcd18VfaDSTyJVZZTEo",
  "key21": "51GYumX3MwRzhHPcEqdtgfqbBSpqdoygVF5pUthpa2gHR99YkkSXFPFwSs1sD5ECgTWmvh638fU98MTHjD7RLRN2",
  "key22": "3SghRAYFDBwpHjgdKoCPsvAURpLfUg9EETMKX8XpGWWdQutQ5oWeqmPkvyNYM17PyGU6btYACMMjrPsvMxjnzvpP",
  "key23": "1Fu2V39WQFgYKap37Z6NXWbGmic5sRkWG67n9SBU7RcMurczbggRDALu8D92mYAc7RV6mGMiVLPJZXEnaN9URFS",
  "key24": "16nj9u8pVuRmoXZXbgqoMSTgymPgB8wxsD1ianrDpModZkAu9aqo8DanqMW7UBfhgJuTFzCUfrEMHyfzzuZuf6t",
  "key25": "4XnLupGM9QdFf9acBJqHh88xQR1eaBAWkg9qeiaDm32ytKyoA8cWeNCeePWhuTx5bAHrXax373jrJmB26HSf3sj3",
  "key26": "2uK3UzRzZjw6Qnd9tjG9bptQsAupQBdR2WNdwpnuqFb9557s3TEp9k68YTVtzZpjgrWASyBHavQZsRbptwQNZKGg",
  "key27": "KCHdeMFbjzLGQirnpc6GkqQfAiCNeX2d1HdYoVirqdsQd9ySv4AoGmL7LddFZcgvcuAc9JCGgdK6phndjE5kCAW",
  "key28": "4qZKfx2s8ZVfnerN7kmyLdta26JJi9pL6m4ZDBP9bvsYPpkuc5RzuMXfVCXpWNmskX5L9KxmWvTtpXBuDQ49h63v",
  "key29": "656PMuKUgwsVoZQD78zE8GjZggFMincyktJFgxakRwhfDWWCnWyBG1WnKMxvBvEJMyUoBx7L9CMnPDfGy5WqXs2j",
  "key30": "3byKTQDmALyhY7Wb4FKSoCmHHuH4HfKndmwRpc61pPnnHv14ojJEmRZ9yg6KN13Zz2sV7DBi9qiTs1x1SvmGVpMR",
  "key31": "3X9dQvYvjcLMdG7WYJMiw6tDRWWde8CPYHMLiAVH5S6e4AZk43t3uNZSTt2k7Z3bQSvMtrJax7foLsKDs11y94V7",
  "key32": "hB7FfxYdtj8GVyyF56zKgNU5KXzKMhji3fRLJqEyDazKuCg3DUGahzVJhGDpzFRDrfD69G1ZYgvhnUnX9bVkTkr",
  "key33": "5DBcVo1hsuWckGqLuYU62z71ZJneXEvyPwWEpruuTjB8jCi9XLWstWRknDnjpmNeBLWd72YwZqdJXzRoPPVfYwQA",
  "key34": "67AybGGnhaXWpUjDbBCtMQJZShw6ALUDWQV9hH62DeaXNcJUZfsQioK3WmbJrtUmsdkJ5NKSo3nbakc4niEs8RRt",
  "key35": "4qMaYrYzqJ8vM78NWuZ7nMShb1Zzjrqbf67q4zCsLJWCW3DVJ815Hk4iqxZRkV794NmVniBZxpBkxcx4bqyPu21R",
  "key36": "yZqBCU2fkSoXXAXft3i75SMLcCsQRocehNVJ1wwMpFRhG8g71txJPQrS9Uz8EQk2LGwfq7HteezCMkcy5ip1xCB",
  "key37": "PQd3bE5Zk1fM8ropsvWd5HmaCdcEMaF4Fqbg4t34p2ujjrNGai15HuYKQGCQvcfEEXLntsaKqG88UieWkRyobmc",
  "key38": "2Pt978f2GTPW9C3n4YKPkUpvTxU5noH42NC7dLe483v6PiPdcAGjURUAYajWRLPAPo2GAassVVzkx2aacg6tSZGi",
  "key39": "47JUBxAUWaAMZ5JZc2A26j4pbiPkHnEvEcqnCdaoP1mMf17LQS1sXZDP46oG1mpp2GyGmNnEAuyJmHcNkW4oxvHd",
  "key40": "55msPV1aVWuaPLxyD9B5A1QKUTmnP2hopmZpDpXrfDQdKA8BvA1HG6hc6JVdcKs1Mg1XQxxZq6jY9Bgz4ZBQtcYw",
  "key41": "5k5PzwvFNbFwEUyMFVvsHno7up18hFoQf2MV4aLLSRoWXACcXZinXFcN45VkgVyhboFn9BuRYG4b5eqcxQajAhTp",
  "key42": "5KeLts3wvZWuVnGt7ABrYaUtjtVHDULvbU2nxeSjsTu111tnGFKNK1uriYPFZvT24Wwp6CpALVjhrcbtZERfN8mv",
  "key43": "htu9hkKH4pUYryd94LaK3xgVv6pfaauQTfVUVNZXBS3NzmBDF884PCqGYaiqZ3kuKPoisV6KpqHRhjow9SQHGSt"
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
