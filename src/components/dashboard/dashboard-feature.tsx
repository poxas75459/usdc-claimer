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
    "3ZY3CwavMskFGbrVUKkHVk5Tf9ZHe9bL6ga7nTeuxTuSn9XBozqGYeQmXdKNGeaC5YBDndjSxd7xzNopz2XspXxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nx8AvwkQNHWNtVVgAFkHzZSyEYm6Ub1NMAKWF5aQxTCCssS9qR96W5jQbNAaKAB9NYj7KdmsAhNyMt2vhemkYmD",
  "key1": "2PqhjhV4y9ceXbXEa2AEhmDPm4tPpNE58TqXeMLMutM6TdqNogyUQ4zwoNdniq7VS1ZnsVUp2giwJJQ4cUwpAGBt",
  "key2": "22Ljd4RQoNRXkEKSjucWWq3youTEAsVCybb6pu5ABucUVDbgES6xHH4ACRbiF3AqBFF3HyJEuJqJWL7vJcaZpJ6W",
  "key3": "fHGEexkJYzzVkpwqkPaCvmmQYVhJYM6YpeiMgKRm1aQxKfcSAebPAYGv6WMb5nKFSm11USnGwq7WSN3tMrm9wdr",
  "key4": "2CfDCiDPwRbQuS3WJV2s2SWHCv1MzBVbVapj95J83A1bFJmKRwAoRzfXppzwQSSddn1pP7idW62y6Vfcu8iMApf7",
  "key5": "2k55PZwUtxXTaLpKur3fjFKLBNiZfFq1py9cVbAJqiuA9gcZHwCxUQUoEfJnsDrojDCzTLqoMN8ZhWi3mMm7i278",
  "key6": "wHnFb8juWjGua5M7t9X1NRMdNw2DjLfCCHGh1bgGgnXiYGd8Wryqa7meybxFY47VCcsFWaruev2SBn3CisuCuAc",
  "key7": "4iMezD5QArBFfoC5EnpW14w4ZgNJzp9hC3R4ySa5hKLbbvcV7aPxbkiYGccUqw9jBMdquyc7EUoNN5ktSLGry4LB",
  "key8": "3ZJKpdDUpFBy21XSvd1eHMtadod7JccAuejbnzhvFhtcX31QxWFeGEHFC4PueWPSjTdN5eqWuexapR8fueBYKKor",
  "key9": "5NndkxCLCt8AkR2T2jFqCWh712ya5wdQt1akSxixrjmqbtsPUNRrByc5K7HrstCy3iNuZ9m2fTVqx67FivQM9mTE",
  "key10": "2LzMQLBm3irvrghXGYKoKWEF6EeGnhLYAva4jSupLmiZ1vV1mGbYKrPtag8yisF7YP5SNJVv4p2gX1cSmiK5hX5D",
  "key11": "5LTmXXMKzKHkLixEdmNAYikS7px2G3EzGK1CMYcXsGAC29Lg3bB32JJGh3pvCXiSocQaVV6p8wzACwFXNwuGtY59",
  "key12": "HspnQHkYYikAa223fKQUKEuYAu5pQ6XD18tHVokC5ksRqxofjtxwrp71TFZMaDStpp68FTvT3dBp8aZU6JXCGWg",
  "key13": "C4KF3mSpB94b5zWsmEV65J2UwJsjZCh5nHfmuRFKptimEZRmk19TmuoJKdBXSeSUDqyVaYovsxuw4viWUoXTERj",
  "key14": "26m8MKmwgEGRLyjSkBPvUFX5GsKJ6pNji7F9xh1aWGs6SuVX8WUBXhxVsGjMuQhDda6UHfNeY9rmaJKGa3V43dWM",
  "key15": "2pNF7C75iSjoTrQpGrvWJBrcfjGFUXA3wgb2Qd8FctJ6n9NRjfJyWEgJngXVEKg9MZ3JABb7tqy4pizArt6njPf8",
  "key16": "XXComXkKsA7vyPtEWeabPusJjBjTe6dgr6xc2wE5auVv6RCzvdYux1LJ523jKL3zu1JM3PvEKfxyikjAUATeEUR",
  "key17": "57metYqk6k15jHgCxgXm3NcdhS6wnhvoXAyf6pRqVLGE3SXYXjPWHEWBnMJpcNUivW4TEqnHHMkDZrgsNnqCkiJa",
  "key18": "3RiK7n114R4jfvL3Axp4VrZvk579tLAiHqQdMq4DiTuWdF4auKensq96oD9ri3zVGurr5P4pi5GNJGdyPBkr4wg7",
  "key19": "3amAP6k3j58UWeXvnxvMrDr5aNdB2Hwi3bGh8TvNbKmvENjX4hJeN4yxzsSzBkDvjrinkSEFGEcqWZRui49Exqbc",
  "key20": "a2ZGvqv4HctHLAtoTG3ss7RSRh96teGFBuuwGtvX2XL5TrjhS9NpPQD634FKZUcQ8KAYR5PnN1LYupzMEuxnTcn",
  "key21": "3nX5HjDSRDDnwAstDuocWW9QwGr5BYu6zS5JPY4EZhL1fArySoA4wLTuZ9pFouwyQ3DdqKC1rZQ6pftnzqERcSpm",
  "key22": "JtBhWCaEurnuLbS39VQR17cHWawGYS7i4qiV2Ga8McYL8QdyAfJjQvHg3EKLspk2Md1Evr19e7GFsBJM9zfgzLc",
  "key23": "335eDX5MfWwaXVDhsQd69LR5nmji8ZikV55npT2Nw77Sv2BUcmeoZfsP9kwGoQ14Q46yBCYiBA8wcT5DgSE3MPNx",
  "key24": "3FRGowzBxSw423TUVLfYGTj6Hxoctf8LVAFcyDiq4MG5CJkmh2FsoGXTqm8YpXHZaeFKx9U341L6QE6g1PajqxdL",
  "key25": "7nci21wuFXhFqPqZsny5XkwYXhDFQferL6hVMJHaKqxjPwi9z4YXARBTDT2sHPoPwuaXFvtq7Qn1xj73qywSS2H",
  "key26": "3RyEzTRnj4AqFWi2Z2aqPE1vAhQukkVKwDKoWwtCokRtzzBuaW57Fi6GWzS7kT4WNSsxa4cnLYP9b7TSeDr9emcV",
  "key27": "4PTr6QyhdqKxh4Vje8bJpxSHmvAW61j8YkBaytyiW9cKAod4RjdnJfof2f2335aghZuLTqP1mXJNpmaeybmZpBWH",
  "key28": "3rvyitmSNzi4jfRNkFLRrjXXrhZ9otGHCrCDWWfZDMAW58itmd1mJBweFwDHPNpRKBFbAEVjzePEcNmrJdME6y2D",
  "key29": "54E7E6aP5mvyLzDtU2PdsT83VHHcgRSPFQcR2d7xayzAoUn9951UPwZ5hfSXn335iB1UKMwga3T75XgFPuhBvdCz",
  "key30": "5RwR4AUUZvnjLs9PiaRYLZCFd5Dn6dhgMHerMkS14ipaCrArv9yCEFZoazn7ZA5oyWDRcXnXdivG8zE5EqoWw7NK",
  "key31": "34YxuXFYnxBC6MwX3V1s4SThJQi68oQVCadFD9hXf6cwMWX5FAy7eXoYEZVwcoe2QXLUcZE4UrPykSS8xiak5eCB",
  "key32": "4m3YbkmmkLEjHP3SsXdJUmGhh8UXrURew3Fb9QNTzbuZF4oApWoGxvqq5toPGRtrUXEgsHYRJxmcLwnjyDc71hku",
  "key33": "2chXDiY5jv4v2rsfgrkcxCWcSJhe9e9kScKhuU56ki4L76kYwJrH5vycceLtoa6GqpiJVFLfggZPnUCBRkvCdAxy",
  "key34": "4kBkHcVvmpnM1bud8NVfmaF92U6MkMGBRy8UVHbkvzdsQEMGqsTrqPEmRj56Ptjbdsbf42x4KwMpKMDWeKgaLNCw",
  "key35": "49wuWRBQ7sf5CNMvR4BGzCA5acB7zqeoYSzo6TkxAsfGDtgACtYQLipeuzxEXug22dUrKtpbacX9bzsFGGB2g9eH",
  "key36": "TAgLZxq2wr9r6wP2N8yCPjpq6mPVLzZmcodr2tP2e8TG7dGA3eR9VZ7MTQiFjMTvawv6XCCB5WvmRUV6giYWWHD",
  "key37": "2thjj8ZXA6kVwAE9Z6NuMG8ueV7FbRzghXhZacTZfBgB5ZeVkFqykRWE8Xi5wUVSwzg7rnicvR8WxCnMRasfQVyU",
  "key38": "46W1m3Qv7F63GS6bajbYjqn9P2mSjgBegXH8jY3FTGxMX7ZodAGvKDEcSKdXe1LtKfW8yHALFPUPPgCG7zAQETtW",
  "key39": "2oK9QiCtDaUKm5aEfCbMHJEBxkBiG6oRCWwqrLMA8NvT4gtnxi1nKm6Y1mH3WLCdQvVpjnXxWu321i7rvawn4ycw",
  "key40": "zuq3g4ivXKUyVUBHGePijx5pnYQmJ6EaxFdCKQCki18qSpx6FmHtBTu5SPYwfyPm7MAbvf6ZWBqXUWs1zkdXn5W",
  "key41": "4p3bqSbfecY45EGTJTE2Y86gssdKAnVFyw8nvDhpWYwTBZSQpC7uxiv1sa7VabJMtcfTbKfheXUr6cJKT8oZjJp3",
  "key42": "5ZfY12K6kV8eQGhqTZwUKoQXwHT9vJourWHG6JYDV2Awckhj1j1zSaDipSQ2nWHswiv2VvQDMvUzhSv19XJpgedr",
  "key43": "3WkrZGsnpZANgE6aiMmhXLuPYbYXY6maNhJEkL2VexbqmmxzjrRHxQxxr3QVUUcRaPJzTEPkZ3kn1Vy44RbQDhfa",
  "key44": "2BSRWi5GB66HgfhPSGt6BS919ZjJh2sZP4FWJ7PY6xRmxmKPam35LnQu1n2i7PE9M4DMvDXtY3iQLTj3Up84z9B5",
  "key45": "5NBhY2uA3scVhMvDPMoBKQTMg3a8Ji4gcSkDfuEQgdQKcuvaGF72swbeF4HfYcwLVPW8dMrn2bs4E6fHgb6BvikN",
  "key46": "41qwzvEeA6cPD338ts4YLtg1A5hrKjwwroAbfrTFWoCm6SNBr3urefJ1yqVgyxMZSe5bXatpnJV7PBbMpFZPuEB7",
  "key47": "2WciKAEbUCENkZ7nkBuMxnBBfwsEKGGZS6uZU7nMeFwyBfZM9PCnpUBdrrWKKrJak6Lxs4ahoTak1iMbmCRfE2aY",
  "key48": "2tyFBW79PgY61ZfGvVRuA4yPziua256NJLgL41Kh8MizLz79NCXg6wR4MRZ85p2YpBak4RXggngBKa46smsoWxMY",
  "key49": "2B3ew9iKS5E2NWJ55ECxWfjRajmz3Brv9HhsyfHgXqUd8CuhUHZ3UKf9TD6gLcZ7frwthMWxbPsf6JqKPrUfKdbi"
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
