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
    "3zWEkygrxg7XGK4hdJ6XdUxsjWEERUJgNGFWrhgiiLEdriuziJBK6scURk6Hss2QFgP9TBoayVhWFVjy4afC1tiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amrqS5jJZvU4bQc9PMcaFUbfY23C5kKUKEg8Uz74vefVmEQVUu2HSxETEQ7sMNsHYyLMw41kb9aBMVUCdc5dRQf",
  "key1": "2fdNtpCPdnnr9ki5WS7gDFmNEPdzxYPC6Ac1aGRvxjeaWAFs8LRLLpJNwWNXmyCf7tjdkccjBFjYma6gA9tzDuCW",
  "key2": "3ALV4QrNwAYbxTNpGzsrQbF7kdDsfdSZMujREhH174XFGrrWwoJG9r5QZCpxMtDWKgbJpvpgPVhrQ8kYn2erYc6c",
  "key3": "4KsxdLhUBaZVtgtauTcBs9SVX64jwfmya8Xwx3YRU28MvakrSCPgBbQBFT2iGnSaU5J67nudF1vJ2ryJZCjmGoai",
  "key4": "4uBa1NhqdLy5oNeXCnQrdCGfP6uoWqToeZwQyNyfdHrjFKGHvqzvX2mGCpQvyTLuJvfX7sNqBsB4RWbeoQ5yVb4a",
  "key5": "5VL2wcJ6D8g3tPcZgQmqbp2kHiVKYUWpJU9eRmAF6UmwcKqCKyByax71WMzisHfxjcZY5vxjN6o2Dx7DtCDkem6b",
  "key6": "LhWjppMDRBgHv1dXy4SdfCoLwHU1H7xYq6BG8PLtpvasCN3Q78hz3JXeiNTZBRFBzRacCPDUL8pPt1xkPMHGvNX",
  "key7": "4iRYg7mmGMjj1zHge2n14NDU2CXqYrsZaL5499enZLsfBNygBKSEyhpu4b5vBT6tUi9LpbEB1Qz9J2chsWDUPnnf",
  "key8": "5qnC5ABUwZ3k8Tjh71An8cmxhVAmZEu21cni8QkaJX4vuUaotnuYKVzcYciRJU2UizuggoKgXEWHqoJZXmXD4FYy",
  "key9": "4h9rEUPSrhC9mzK2Zrv26vqck62Xp8gtHHfLn9d54UduQQ9ZFhwHg7rTUJ751xtMethWBC8CEU22TAKD3ab4nnZi",
  "key10": "15Rfg8bGuoi5r1BGos8wurrE9VcVQVYDK2fwkazjYf6gGu1YwZM3TbcSmwFa5ndrPxC8iZ6HFbFgKfkT38C9Bqn",
  "key11": "4mv6d3uRqLrs53wHNJSynTQmZR5fVpqnF7iYv9tVEGDS3fUgeQ9J2VR3bUADeWucy1nzipSTugwKWkVRUAf8cagL",
  "key12": "2vAW3QoWEidfEZZfyKsMyvdLD2DNrFG5UpEWJdtCWgpbKrRv9eRsyiXp5DeccRGrB6VoSazTyR7F2Ls9cwDoydb2",
  "key13": "4tWv9oQyfZzcHxhrXsESfJbVFhb8mgKs9w1zNMAHQiw4YmRUhCL8cXzefgi44gq5TMzvgkC54WtikYKGVLRkKDkP",
  "key14": "2U5PtwsxQAYBELvVksZ5CyemHtRhX8dXTL4JpxZA9sMHwJLknnYuVU4Nwpj4nzSB2XPFqUHfySHq2oP5NiMhtcco",
  "key15": "3efF4g5qXx7qPyZ4UK11t8BjXKx4pie8Wvd8mdksm1mpMq2Qwy9nejbD5KK3SNLqpA9xC7Cqiz8TM1DnyXwcgoQa",
  "key16": "5HHwqmPQEtHidptdHNVRVnoGC8LL8roEJEzA7ycF6hDWma4vbhBAV8zJRrvUjyJ1CKW69kedB7VdYBMjaWFnBsxk",
  "key17": "5wWgBEKqoiu6QJHCy7G5GYxKdQLeZ14TDehBSitcYMjXwo7Wtxkj5HKFGro6KPxiJZ2WN2cNwdnPoEPfyLENVc5U",
  "key18": "ZUNTPebUuRsYdVvyiKauxwPW1J2ErwhT4hj8jqWW61RPgKWrR5aXHnaK71JAVfnw3r16mXmL27hZyhEe2Q1orsL",
  "key19": "3eRNuSKjXzc2JjNAREKqufNzZ92c6GWxo6RPbCyFZsghUHhVGFG6kzusii2mZTtDW1mk5v7Uzw3ai988sFvJZDod",
  "key20": "4UuPLLKGzL8M27Kysr9GK8FpXmtsZyVdmhe2FhUj4Hy8XViiNXeznFVaCq3EVZXLoQZA2WhQnezsy76kN9ap6X7V",
  "key21": "4nqirWbDfok68ZNMh99N6GQDxGLN6PCTxajwRh1UEggPWrJHwykM6rGEjNGkHqHhYiabbx88EwVGugPftU7AiEMR",
  "key22": "4aW5iBQvbwKRc3B7r3NGNeEvEJyBpAF8zPUMX34BAbmFC81HasyTefp9dZqfFzmzJ3KaHuEp18qNzUauvAQowF3a",
  "key23": "3hNwhRCJQw9ZnDqSpNwGCRb6thrbGMicc5K47fvxME7qr94W8p9aZmtJWcw2NocWn2gMzTHDvze9GTP1ZVUApF8r",
  "key24": "6b4Fv3MKtbsYnfMuGXTK3etb9Dx4pEHnABjRxQYu94xdhTBCDhyiP279BeiWjNDMkehEu52FRNEVfhALyM4Zj8k",
  "key25": "V6XDQ9TQ31U938HnZ1gLKLYK1WWmJU4w4oQ9VpqTsibz1mmSGK11VwBBe6AzgxwcaxrephYd3pAwUjCE5UknnQj",
  "key26": "2aoh3uSGCATttUmoQCayun74xuat65c1TTJghEgfLpJb8jc9DDYbFQZaunK6jmQthZXiMr7vvcBi1XKJHkZabrWe",
  "key27": "2PXNbWKMMRe21zX1xkEmZYmvxF4QW3yRjAU6LnZ9UkZqKeP1nzssD8FRhLvCMY5jEeXvC8FTFZUsQXKjJ4LRhbvL",
  "key28": "xqmpGj7Ep5biWeip6jGrwJE8xNidWYNVFw9CCE7zR8p8XxUnnohCLQodhA6CrqBzwYq9tV3BqPHN2Shijij4GL8",
  "key29": "2GwmeCyYGbgJEgBBeCcdVNjiczJXAmrLz4RuDPyvmUdbkNfL24Sw9Q7KAX7bStrHzxTnk4AEmzxEsm2PnTDpcwRG",
  "key30": "iKXmVh39vXoesBZ8siGkez2g2ijExMg551B2gy2i5H2gKo7uHjdB1r8d8c3CdPjrfGdVahXEymKgcW2X8BLoubu",
  "key31": "4G4Dj1PCfvqixyPQFkNhiRdWXB3TPeoRFrx3tvH5xNsSP48JggFfhAkuAm8y6BPrc96qBAKLvhPpY1qFPBdULQyp",
  "key32": "38hga13rZ17s6CNVAKKcjdW4pAJki87QtUZpBNV5WF9JGETAaEPXA8CZK1cksU17xgFpTPDVojEyq1Yux5FMAqBi",
  "key33": "4zwfJNDTUESe46Eyt3XVnKx4xVFhZ5GSpTFudtDFBQgzpyxequtqo97aQqd3LiJTmoZa8SLAT1QaiN6aZx6H4epf",
  "key34": "CHtCShFHT2kh9DrrbJGW1jLNChia4UUMUB8FL1jbX5bFXkH9RzEeW1JFVJYbvP2NfooH4huWt23JWEM9LLtYhq1",
  "key35": "K549qc3jcYojE3TEJgwVScNLZ54g3bwxi98fNHFxwHw1Dry36qGJPkUMgrdzQsAFpfcKe2gWQoomwXDJwFXykTU",
  "key36": "qMHKmxR1mmnH1gejPf9xex4fa7DzoTPsuFzPPWYfaEtSDFmVtaCpcdVNBXjNbWxDyw8gg1WJtE8p4Cj13r1qMPa",
  "key37": "2tVJ8GFtziMqScvXssYfTuggz64u2eV281FuhqaDfEtV8FkLeX5JfyDk94vxKXtkTtxMxwyzahmdi7gTH6pB8hCh",
  "key38": "5CdedBxhovyUcY76xuG3vR1Bbo2dREyCm16U5FyZs85uPV421QWgLkVwn6McsbqAJQbMc5HcPUaEuAJtK31xEyqx",
  "key39": "51BJHWUkomgfZ4PykWrWMkok7ZnNXqyaim4bnmKPiTnXfYAsNt9K1VrjEkX9aXMHuP7sa2C7u3DpLs4u4UFLt9Rx",
  "key40": "3XjpAMerUjYvHycUkrfnAX9JPMY7zwBbpLHnCPyP5waNQ6dXJ3jhsbymuGqXG5d8rR5YHYVacAxTARjLjRDBJy2A",
  "key41": "5i1nrAdzQY9s7D4r7U7Fp73U23kKSF3YUh6FXSZE1KypWVHh1bf8nbunGeWSpTPFnrMpKmW4PVbEzFo5Z73Nuodh",
  "key42": "3Gf3uSLpH7us69gbvYyMZXrfxZnXB9cqnNEbjtxqAFYiQEytb3WkTrKVAQhbi6Ba4NZRr3puahcEgXUJHqub5bZx",
  "key43": "5cnp81xVTa7Kb9DvewZgXiW3xWTfdP4vNghjuW1ZnxTDyUxibhnmQ4thrRk9RV1isaYBt2SYMCox2DdrE5L6cZfp",
  "key44": "2Kc88tNQypiihGmDMT5JM88rECCpjnrMmCZDVy4BszzFkAqoKstW8tsotobA6gZe6XYxDHNL9ooMXXVhM9eRLXjC",
  "key45": "21ET6HkGZBsmrDcEjPmjKBpGgvTXJek3fJnpJzF3JYubjtnUmUHk119Et9STdyrgwpJgvktQakJUVJtnhNpnq26r",
  "key46": "2jLFo8y187k4ByVbEL6mcp7QTsGod5dYb8LWUyvy3Y2dnBfg9z12waWXbMPHCqF27EpnW7htHan6jXhnDgF1rqQ7",
  "key47": "4ZGnoKwQ8CxPzy6tAdcDMiKyqysopnGEBrn4BXxoD7yxzanYdPwbNTwXRFSmx7JsiaW2skafjJTqAaf3gr2aUKP1",
  "key48": "3k9bkfibYgf6GSN4Nbsmaq6B5a5iWVqSVQog9sXCTDqrPg7Tq553kuqgkQ4v96LDpAbwW7phH5UN2wJ7EyoDt8DQ"
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
