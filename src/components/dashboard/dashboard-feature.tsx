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
    "2PGLLaajQpMnVGhid2cbvXJede4PTNTbSaaSm1kTWHB7JUa4ZCUhKrQiagjS3fZgov6UNtFfu64EY5XcLDtiWLeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QqDQPeVVeraUeZHhyPUdFg5tekmJj963twtpvtuGGMmRG4CgLrD47vZmMV7h1EUPeWcQ1LQw5YdLp6JdzWi5AhM",
  "key1": "3i9JYBtGmsF6zyjoAJ23nxMniTfazfbNMxFW9uAr6jtVErMbWYTrUqBbc6JKHUf54TfvWCGpkNaecBi4vuYZUdUk",
  "key2": "4kCkJvHeTVZ5wkRqU7T1W424Kg6YenAjbRShJTEQQCrM96NUbPbyTUM4C7NowNvqYUPeLngYjSH2DhrBcFuwMRsy",
  "key3": "5GczXz7C76ripoT36P3k88kdbJzmBP7zUYE5fMj221rzq6KJcYhnN9uSvmqkWj1VaE8N2bfbgxEstJZwNn94wBQa",
  "key4": "r12fGCvEAwo64oUCCDHj2tmVWFmDGditDRdF9Nns15p6ewV77CEcMVZvmEkHAA3ns4vaLcXBkhDNJt5J2o1JFoS",
  "key5": "3TXtDtdXiZSrsiQy4Pqopdes8cWpNejSGzeas1h6XvDcL4F12grcFhguSKKiMzY1NHZwHSUR2MXjnxad1am92WGb",
  "key6": "4vAsSLZN3eABA5cvZQ9PxaWQ3HLAT6SosinRByqWxB4iGBw8Z1KvXfUC1PphZGsyKdjfGKYeTVQAkaKvSc9oSsNG",
  "key7": "66yMUsDzBJ4ta88Gzx9Agqy9wDwDg5gBqoovU2HUyhqpgkgc9vua825CVf5E6zbvLRpJ8SbEmgGBGmb7pw8FWmpC",
  "key8": "3XfkBZwLQgkqdGpXmdWx4pgyNAJXLabsX93p52PGwMmkqX4BWFV48kG5FQ79A4NbgLFDHEjins9FeDfeZnfQdSmo",
  "key9": "Wag9ZUMJF2jhNdMcWAeVR392FZS42orojRV1bcivVoN9M4JVyt4CoMorP5Ag8EAkmb8r4tgBJPBztA7gSuyQk4M",
  "key10": "4ecJWf6vyxqYSxHXXcGeZ2Sdm9s3cftvPLhDTHzP3wHNN7t9PtYibdP398ypUKxnotCvX1HfsT2poeUW4SqUoD8M",
  "key11": "38dE54tGMER3xyZ6iq6439qr6sGzTux4WYRfmzegGLX8PqDgMJ2KBjFWCfUgbAkiro1zfg6rqVTQXUUp5NDBUKeN",
  "key12": "5ZpVLRiwfGswf42kGi2gjrMjf7QpvLqvjRk1xgJEgDCzEVz2Ltx2Tuh6EMtzrgcLPhiSUMfq7wGYYRXQ4ZJWKfCE",
  "key13": "2bSx7ov4oDb8M5GaRoJrweN6j96mBp6Zj6TcMwSyxr4iz2tVYFF8n2wtsdqsTdjD9Gb6tm43WvKbEQdvfnDJMQ1x",
  "key14": "3AnBcPhax7pknyk8xMsp3Uy6s6XEPYGEsVcht5Uf7aNVqwom66qURKio1kkgVqB2LTPMA7c91KuULdXn8t7y25Gk",
  "key15": "2XsYjLqjXYvah858Vu6dvGqormJdzjYs3iSP8ZdReSQajzeRDxPb7VyLz6NcLSAHWVcPtvYW61pKWxqMrYGehRqM",
  "key16": "4XSLBekSyZEzJQZLXrFqR5CuRT5FXzafLE9jLG62TekEFmguzBf48A4heGtkZjVYyv8oDfhkXkCZz48hLEBRSgQY",
  "key17": "32v7aYRFwKrcKZ6DGm7PHyrty7MPuiJzvLu2Y4JXsB1mzp5r23MnCy3uMFTkY9182eivgZ2bibWwmTGrAqbb7SSR",
  "key18": "2uMTU2ACKxpaVbBa6Qt1sTxCkBxM1VFtyvUbHTjHpfDWPzZUMS5KmrUFY95EMABkN384TmygeYt1aDNew2s9ve5n",
  "key19": "3xY1UF656KgVifaDkzBeFq3tNn75Fx84b5RxG3d2aGYHMxenMNsDHH4LrYGkWZSwmxHsvUgHFddxWFXZsfSPCWSA",
  "key20": "Ykf2fWNcyrPcwxeTG2keEBn8qHWaHh81WbxcWS7Ap8ArX4sRunmSgywYXHMWRWUqd1aLZCHogwnSEt4EySDQd3M",
  "key21": "4sLbAdp25eDMxMdQWCEnBAcxcbrywW4HtsfdyR2aMtxzccG8rLNszja2mwyxRARqMozSk25HMT2cSBRQXm5jf574",
  "key22": "FY5VuAHMUTEo9tQkm7KUNKQzZus9E7QSwFcCCvwz9xerxWETvitboFii5CXRbZAm3deGUjwbZdsgNhS2TwiA9QJ",
  "key23": "5qtTVd9s2SKsmb94qSgg5ZrZA3bD3kFHzNGu6KCVT777SrXJqfKc8GuRxmQMKb5vu4sEHH4kA4SYrbdGY5Qb8msh",
  "key24": "1w16cjCWeXai8wBH1Fv4bnY3o6ARpBKiahbi2Zfyuhdekb1DpbPjGXDQwyecAoCheSNgoRuaRZ3e7tydm5Zx7Dt",
  "key25": "3Ppm9bqrkWBPDEBKMRwzhGJk5LRjbZyYA8KnbjwZsiXhiWqeXsKUvJrRgaVLBzhg6gRLoz7VYmpSS1MbFWkUb4vk",
  "key26": "5XE63xxJLPYYsVYNDDhUptAH7zcTHKA7JspiWBifCneV9uR4dmUpa4MUbAr9qZU6Yfh813j9xk93cd7vfZzorwT1",
  "key27": "25oNMfJxiqom5Fn42iej55nPLumR9sLzaLURoD9wivMnvWnqGdNDyNaAgv7VEqdMbfrte79pqUuwN3FW88swvpTz",
  "key28": "5fonLnULxV2rJsDQkFeBzEEq7NHguzznXfMaYwC89GoRL7VdqnuGSPRsukD1ADA8K7Wht7wRRYi6QXzF74CviKJX",
  "key29": "25UcjQA27kbLxNoBUKTsTbhXmGpWG4HxQ8sPr8TERUGtpBsg7gEHnAXfwEQohjLxnNVrJxsnQaYwxavxEtDfkXL6",
  "key30": "34KttsnAxfCb9GBuEPXRtrYLhDMKR7ky2RbpmNphfz42Ltjf8LdFrYne4RzQYNRsuBiMhZk675aJq4tPJULX3TbL",
  "key31": "3paCLKYyu7uxudWfUQPkbVwdwnvA2FQYL7JCkEhYGVH1CiSQKnqMmLu1W2zkBsMehA6QXujcdu72DnGekKJ7Dw6h",
  "key32": "3QneeDF3eGXUxkJ8Y9j9ddxDTJxuuWRYs2KNHFPnPBmYiBphqSJTr2z8typ52gYmwHSapW36Kx1KbAyoMNCPheZR",
  "key33": "4GgkgT2tem79ZoTGjidnqa1bKSaLQ2JH54NFc9jCfQ5boXjZs5a2T4fC5c3wLFnTsfX9Hi7x8p1RKZsf7nMV97hD",
  "key34": "4dm4BaQ5aMDmbT8nTQmvCY1qLDEV4j2CG5R6p6ooFgyDknxZX6ZR5UgUzR8tUSkxRTbuaCkFZzKZhJVSQP6Hmrhd",
  "key35": "46kB7ihzX4ve6727p6XtPcNZ5qiWLwpAHvy677XnjDWvmVhqxpev98SiTFg7pKV8upscsx4woSjg6NhYBX26PwCU",
  "key36": "5DZnUo989VYH4P3PDUhQwQV4peYzfVJpxPdhjcKD18zq11v3TkSPRmnMDzR6qLaaVnVHoxfqQpdQnh3ZoCUxXxn8",
  "key37": "3apPDhGQoAZ9zHcP2663iEKLL6AUrdiJM93Nf6mzF7dHrBanrGovDaXRprzDReVUGFgcbucTbnLVd1NPyzygeXvG",
  "key38": "3sBk42SWHd3EKDqR1GQERd94frKMHMFj6A6mNEJRuuJmxHshZc8DuDNp84ao99y1vQBgjMrPSFJAToTivJAxyVz9",
  "key39": "4aUZQam3xQWFXGQKnvJSU2wZcauk5vvrhTtjqyDcLuCEWvy8oBr43pNzZ7VBZBuXzXEfx3cR9uwFipe5br2LmJ2X",
  "key40": "5buiaZfKd9tWpdi4iDNCh1fHiZ28UvytRSqozdGQpvDmydGXZAWX276ajMMfsh8cUPSJ4kw34mXDjajfpmVivbST",
  "key41": "3uMJuvX6timptKWsYvi85MZYYByyWAPVSo1W3kzC2Wb1wa4d44dh1FyVby1iLkeyvQu39zY3KtR9LGo9yQqg8DtF",
  "key42": "3kr3JoGAZLWRTNAn4JpGgkMTkrtGwc5dcbt4h1tidnisLFdaakKpNFrBRgdhhAQsofopVYjm2Wjh2Pg4GPA3KUPg",
  "key43": "4vVtMyRbX2QpRTSTz8LSEhsGU5iKWfExWGswFUURS2xzPhNv57JYruy2BXQb6ZAo1aFjQBtgUKswVdjyrbVLjPV6",
  "key44": "LdULdjh91iT52UU3vCXCe5v9zUE6WNL4Dg7oJo9yLaPuvA7q1W3zcSwmdYqg6Lhzk9fUoDXCp3d2qPwCdNnyPMN",
  "key45": "1DY3bjKt2N7TrcL7LSsRSAi7fresXSRdYNWDxZ7zwHPzkz24qRF3FHnA25oNmgVFRpjfWpQTZNDMHESgMEF2A3u"
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
