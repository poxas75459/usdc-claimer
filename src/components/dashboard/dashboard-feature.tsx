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
    "3kEWJdtuboEmfx8rAyVweLuippQ8aN61sLoALJVEw2ypjAKs54qsRq6HFiEbriB5fw3HM5f4pVskxyzcfDmNtnXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKbTJ4gLduiYq8BfxV2zCruHATp7cpUTocuAiXGrNqQZcg7JxmAULtMyqV1CMmyWnkyXw8d2dKpxT2ZYk3JydHh",
  "key1": "4u72ZpusbUaCnBtskHLQ664PbVFkkSTF2PwsyD6E68AouBL7UZb8cHAQz11Yf5TFvEVP3LcKXGrcpAuH7DEmiRJA",
  "key2": "2AgjK8BUBUzxnq1Zp9WsNrwqNzBu4ZkU1TmFPW5fXkqKThGLtR4uBa3SaK3zQL82GAXRrCX5vSXB7ds61UMd3vTT",
  "key3": "583S2gVT1gCBt5JBU5VBP9jgntKian3q6aV37yoesFyu7k8VCuJzXdhAm7UxXMMyMwZ2B6N3WLeADL2vmEeJKtY6",
  "key4": "4Pyxi7Kjqe3QW9V5Bbxhf17MiYGwzUrmSjTjdPZx8er1qxT7fc6xn56ftVxqJgUMGAtay8kQGCbmkrPsMoe3ZSQ8",
  "key5": "3GHYhnWXwBgCkZgCtCqDLKF6MiekqC9cCELykXqLn53NBjTPj1isu13jif1Y2VJDzd5RF3sGofzwb1MFyS4WNKB",
  "key6": "5WUi9Dtf5U3GNmbaGztHsMD7c7mnKwcUHqKkXxwKUfiCFzjS7k6bJS7fA2vzyw5RikjW3Uwzzn7pZsfEtHG4SafX",
  "key7": "3YHx8YkhgLrrjcePkJFDgwPoMk1Wxv62d4B1wxotg1yxhFNdL4QYG5ymQ3HJwaccxiLXaQdJ8e3TtNSbDDcFS4U3",
  "key8": "58g4RWEs7teQ1T1S5L53uYaPZwWzbNfUGm6Pd24DUsUXzVGbPKLnRvxQbQCggjXVid5pEVYYUU9YTD83XUNpCKQt",
  "key9": "V6BMTEWWDX1TSCWCfJVp4o5HtTUaFpJ4w3Nr1hQJrzd8tXf6UYkWc4nCBYxjJbQsmXssGM3xrCQXhnMXhi6NhGE",
  "key10": "38Kv9FDyVCuK2WsBeo7sMBFZQoRiBd545pijHfXGX1eUw2ykpCuDSiYMpYfnpHFqXSL21zuxYRo6QqMwHsLdaBmM",
  "key11": "fYB6HcehPmXJYKvUBUsEaAUKgg4nFkGQMYrEtUd8WN1gEkcathKN62QWAeCHCbzdpT4NUHojoXBtsCSnaJWoBBy",
  "key12": "2wek41GtnoTveFJDdrVvMb1652pKA9rWWtz9xEWPpzXGFEA1ovZX8P2FxXwPaEzMtNPcc8yMaGR2bbrrsSQYBdxn",
  "key13": "34bdygEgRyojLLoUoeRdHSPLmiNUrJxSvu3fURzMpUAmzT7zjdgN5aG5tWhDWPrJTMq33aVRp7bRXPMYJRkJRYKK",
  "key14": "3otvohuxSaGeSBK4bcA547UzPMMPAoG8WaXp9S6wQJUnNtkcZNBPXmHAvYUcH7CK4ta2DhhwhT6WoEbrW3pKyxJR",
  "key15": "3DfetAYnWCByrrPcrkSQfEM5nrqMySquBhsMQdMW1xPp5D6yFbMNLBYyVQ2YgBJ6MMp8jVGHqUiLMzcNiCp6FhnM",
  "key16": "2CuaG7dJ2pinATicLfYVBEcZqhbnchmzGNStaCTVGMpJZMqC1B2SLTfVYBqFux7JHwGzAet4r5Ux3faWsgAgdXF1",
  "key17": "45wEc1kUUDBSHPS52si3bKaPBWFBTz4YrjXi2Gw4qF4V3N8Z6siDvRJ1MY1LFoujWSXq2UXHud2aA2szTKUKcUwS",
  "key18": "2BHZApohunDmmoZ3ErMYeKvoPbynq9S8ABsiezM3vLU8dbRPBdjFoKaUhPwu1XKY15WvtcHp8Z9jg6J2oSzkdBmi",
  "key19": "TBAKkqTRxxprgLsAb1LhVK5mZXdB5S4ADFo1oJDUCiFJ1YT28fVbRFd6xCVuDicojsejzmBfenhbx2iAZH1e7E6",
  "key20": "4byDrGT884BXkteiBzFcvYv9Cu2XLdjk4ru8iRmaopBsaTdBmDvgEkTQdY5maazaBWDzspxg8eqJYNotoYHum8Lv",
  "key21": "4QKHDaQPY1DdHpfBJPmVfwfcRaZVaZ1NF4bhvdCjiWZPTd5yuGUk1vGvU2aGMm6ECtcDvcrC8k9VzW3nTjoYNE2A",
  "key22": "3G6ai21Q6QmZdtbVnu3FrMzmmhYFj6itUdCcd7TWfGMs7j3c1fq2YGUmPkbyznjpc7aaYzGCoMoUSJmyD2MBXyb7",
  "key23": "2HF83P9ipBewgbJXoqruryyBtZzoWm4andSQSpUmRzk9PwALiEq1LeHQv9e9CT1niAu1skQx3JhPMo9UgNUSSTkM",
  "key24": "4585xocFoTMzn8dRrbiF3tQKJw2FCKWM6guFbjkQR55Fkb6QWiwxDxpVnpuUmufe7evWHZMAT7dHJLp6fy5wWfne",
  "key25": "ZBtHjx8a9Rz9NmKBNyo5YXweAypB5bkr5giCmf7Msf7LRRUFz2ernNZfJb71TEUt4JkoKhs8SjyDatTDRqsjcje",
  "key26": "294e4SjozAWuorvCfE7gBKSerJ9LXgnjpXEiCMvpMFxTSvcEH3gPstgB3JSedY2oAhRTMEZvyLDsct6aUFP2qMMo",
  "key27": "4RFmsNN5DvMdU9hKjoqzfD8hC33AmvRT76y3BzFqmMu6RJeBhssqUoiW9s6P26wUiBYftTA2c8kSCQxjqKs7GTvW",
  "key28": "2J2U9AS1zd1u6HKUWToFNTGCD4WxWYAfr6iqWHsjy4X3fuFvCkqTv4uBKGBQpzaeY3jyMeNK5mDM46jiQTRkRMKQ",
  "key29": "pyvgdtDm3LsHwx37L8tuejRpdNyQczWT2sq2KPJXhX48ec53pvQUdRfAJrVqShLDnhiYqVUpn3v6rRBjjsC9vik",
  "key30": "38fYHDeav4Xagb829GL7VWsiP8N2sVMaQHWgfZzxgeavPaMCxZGEtNrGGeJGRGbLYXMKFB6RsSMuFxLEBkFnAzK2",
  "key31": "33LW3ifpDTq2YMun35QaTGtCfNQ3MDQLwQsaqpUDQCeC6tQdH7s9n5s6Redmj6xxmwNdjTupifjQ6PStKZjjxeiT",
  "key32": "595KMtwfEUmAJsFZDuC4EhxSeHLTKqA4foqBwizahpHAZoPggVNe5npevC24YqTDCGp4McmNmmUpJtbWKDWtGC7C",
  "key33": "21yYbkwJx9MQw9o28izD2V9LqTynLtWi81Z7CRVEVt1WkTgurpkJxauTzAVgDKWMuuQKoSY7QQhMkdFuF9DwJZb9",
  "key34": "KxVTscS9K14wY76Yr1ZTrfJWao79MA3v5mEjsXfrYHLkE6m9s7XCFhvHfwBkeo39w3wJkXpHZdn5EdHY9FMWSZU",
  "key35": "7PRkVA6cfcz575R4KjZNJbhqtgpFmri9PgZmR15em4s7phRMfiKsmA7wwNALBGirpzz1xE3ZX8Q4DrxAuZ5jJFV",
  "key36": "UeMkhm3AYGBfNPURepjxcKaagrEWkcU2e665rkH4d4B7ufNecYN5p8AHAmWFoSay1CjGo55Fq3daYV6vaxoAkoj",
  "key37": "5xGtJaUYiwVaQQ9RqJexeF1Nz2pDyvJpJ4x9orkHgscZu3ub2fKmi83Q7QLnzgmtSYwsVSMSR6BrNgeP7dTnk8UH",
  "key38": "2HJzBt6y2M9S8kdfwHEL2rMNk9y6XASyKLAHqybqaU7zMTBsB7Xij9HykLaAw8A7UHwGdW1XrbFvwWGX2djXDqnF",
  "key39": "5Bk8oBVo8Exoixycox1yHyX8waQ5XKf5Q4KmT95gxfcW8skRThC8VVbXatsrLwqKt7KebhkGuxQvM7dKUswA7r24",
  "key40": "4g7ARFPZg9ugMvkNJZpTeBv6TTDRgtqC4oH9EMdj3pmuoX6S52yRAuMquLBu4LC6P8YArrNHUFEEKX9W7xhdymYm",
  "key41": "51NPgbEw8f95VrEj8rejDhXdqMHomnKgLVxjsHPhBQQAWRBphBQoay4A6QK5DgboyrqvLeUo8zNuU54fKnhJ5WSK",
  "key42": "2Zi8vEmcTJHFX5SfeMX8X5yYtfGGrwXmTRzkVFpVwrhJKL6e1AirRd7SinTEaADa88W4ym5SweWV7NM9mPKHy3PA",
  "key43": "2BZbvrGdDMe6ZQ4tsiAKKP2NKrMJ7Dghmunc7S7Cnh1hwdfPV6ThZcJQLTQ5o6JEt5twiQGsz1LmJSj3a8G8f6np",
  "key44": "4FKgGiLo4bNyu3kTnyP2N3h7F9PfjVqarKSFaV2FD71aKTAbMAdjaQBxFSwx1cLjMWA2oX15z9y4UdiybGSsyL4K",
  "key45": "5jGFVRYjLWuxwEGgX5JHqXebBAjTprU7NnMVheRHDkVQ6PWXYKM9NPvLGBo59EAvC2GQtG77LogCWPn3HXvE2yR6",
  "key46": "62MU1HsCJRvsaSzQUrmTXPKXNU3ZPGmCdrKq3L44ebfru5SqR296AdsZiTC2D9unVzz5iPhLimSnbbfRcU9w4Vh6",
  "key47": "3hPo916kAPfxHsYS9SjLsZKQBHMgc1tdiLkg9i8jokxSJ4vHGSzHW1Qy9eT2NQD13xZRQ7Goe7hMgPRGwpPrWwvx",
  "key48": "3Q2jLashYAS1UMfKdKG5MzQfYLM4qodSUJvuyPeMM1vXTD5yf5TyGnxNQ7LtrPJ3PjEQC5RTe77oM2rKWWBsMJar",
  "key49": "65cXdbdMWf64Q9V8xfEVry2v5wn3s4WX7s9DyQGoaPw9Hrn9p6kECmJnZahf43fnErKpvoS9bx89aaWYBLBz21WG"
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
