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
    "2N87WpspwASwpBZCSezNfdsuqc5qUBUr5EEYd1yw74jwez3FJEcsMPK2tszHY7oESrXJ4ihCNTZyb2we4qGVFRh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wSjbpzTLsUrJKitTeBJj9gZZUkkpLwaYCojJw2WMQsU8cPFgFYTMuHdWfG5WumsBdr4E6i22bvSSeStHdF7rJL1",
  "key1": "9B5hu5f7jpEmoQ7jHsc3v2jjkgrsdyyyHm8T7BvcPRMxwK7u5pc73ct8cw6EKLEAH6Nw3imNW2BvswoV4KoMpKS",
  "key2": "5ojeNke1LGTT3Y4SLn2eyTeYVJwVhwYJxBgHhETy2CabnNmyVzVu4RfqeoZb9DhTyhDdijyrotBCj2n5j1BR5nA9",
  "key3": "67B4PD82qqznvfheUqnLoW9qRDghuqwu7ZNZg9uu7zSTQnCt1wnT51BA9SjU53AWyxwFsQp3dBAZju95oUy6HjWb",
  "key4": "5gtMURJFRzrfbfLXuPdvysaQxi9ScZ3jAQZJnGLxgDqihyDC1AtUkUtbKBMutDsBVaiCp2FUHwAyCK4dgXpArufb",
  "key5": "5EfpbWPcaZYcPYvYvXbt1EChEBAM2VDTdq8WN1B3jh1CuiuC8rX6aFWg7878xkgDJBdKYwFNi7Gxq4rRY1P8Wc7T",
  "key6": "4FY18ixA8N2LUd8hzuMFZXH3jirpYJPTkwmqKUN4xXqajJtZWBtqWZ8mQGE9ErVnnUoz6vhQDen4b13R9oxLRUX9",
  "key7": "4ZGnd2SuwcaL7xNfmWYnvDPZnhjSvrEM7cVAqECuYZstZgNRcqfsP3bgA1aDDx1th7yGLVBxPRvizdkPc1UxWRu5",
  "key8": "51dVsQDarjxRx9mXJa4i7a7PT6LPsadyBtBaexxt97sdsefcNSYKEGEuvYn2v2cD5EHRHhqEPPpUGys6y2s83M6y",
  "key9": "4AqCbK1fJBNYEhHh2YfeMaRXTBuwXTfRBJbZqfjze3eHsPKRV4Jud8uw3tC3awphfa7WuhDvk75wAUwSaLiPcnTA",
  "key10": "5KMrr2Wrbp4C7X7rZAA2hyDL7iXXgEuCMvLiH84AAVH53myVMCUiqgYKZoCyrFC7JoCJz5JLNWnaF49D1NmGQJ33",
  "key11": "TTqCQ1hGCCA3g7j71AvFM1BZawL3PJ8guyFg3CgKmpcUiGq68Vr5Fia8HeHGAmPKv1Hn6DeFUwpmnd6U9cMTDpZ",
  "key12": "KQowJXWbLrxpZgxGFiheZ8aYD3LUcPY4m9DNY7W15vNcTS2WWrxkypRTeuQUXMnMgD2YHUbdD1j3sEhqe6G4UVm",
  "key13": "5rE1BrVHmH13RoADvFcabZDrzsMwMykYhVwakkp3JQbiHXayZcG2B7uCjKSETUWaoQbmipczAK2LELE8Vk6VUTrs",
  "key14": "3MioUv4NTPtvgYMmka9aKCtF4QzBmg3i2XToZ9nesD6ymF2qpd6Ko8L7djydKzFnoUfrkqxU29kvCcT1FumdARYg",
  "key15": "g8nuNBS9qDKZqhZ49HV9MrnzjKM1QhArxLYg6U3jkAygQkmNYtYdMa6cgdhqv63XwntSE6sjMA9RZCb5g2AZShj",
  "key16": "54oqxNngeLcDdJd5agTM8awoSMhiGmQyPujQD95zmFJuV22ttphMHFhfYhURNKfY3oqRc6cd4vNnxgtBP8botSuC",
  "key17": "29BToRGa6hsN1xZDcqqcMteH1CZTbLX6A7C4bG5dDfFCevag9Tp41iSjx4ZXt6Wwx58T5S1tGtMqaApnyn3x2hJt",
  "key18": "5gCdDTkcNQcPDy5tyE8h7dCwqbFk9EKSZqwunqwDpWQZwMprCZp4jfACufdQ6LebuGcs7L4n9Gte1RduizMsCkJT",
  "key19": "29invjhSsscwSkR6FJmCmjZLLnoPPq3hpv8X7Ae35S97UHzrWmSrkosj9sfy171L8a9rLKSM92YHvB1bXUnHHzkZ",
  "key20": "3XqbHendpxjkXmgiUqYatXDjMeJYK1PA7PvD53hSGVTgzYLtc4xpVnViPJYDB8TnjXBx5R88BXdgxDy6fHdfSH1C",
  "key21": "ya16cZ3D1TFbn9ZYi81arr6s6TnMD5PDb8v6196CpgBsgY1cTuAn68zeQ8YJQWB3tHs58BWG9bAnko3qqfwXcpf",
  "key22": "4ZcqNbDEXoPyZV9kGeqXb5kdnX5hEFfA2hGioNBWwaZCDU3G6xxRcLrwCfX6A5GLpxQwWs7R8Ynq8G769xmzqyqN",
  "key23": "49oVShxPgPn7Pwhob61pfmx6W6mXGEB9UiCH39JYrgeXA8ur5F1P5QfucyLWcHwA3QRCwmEUKY8KjoDpBgCSYHqv",
  "key24": "vUrt1UJEKm5yYv7mu7WxiRpB6oKhpwZhRwHfgi2HbFkMqJxZiX3LJHeV8B4eCQ9R95FpgMPuz5m1arPu74Cw8o1",
  "key25": "3hqraFGn4nDoSXHXFDVn4pCwA5veERSpdGj39hXaTkCWG9fxRV3JKjo1r5uwDzhWcph8TEakZsiHFCYHkhDXkXq2",
  "key26": "36RKrmqWzym6sW4BrQUZ8gMecMKt5mPce6Tji1Kuv7REMaq8i8MXE6wBiSboZhDavCdSG8axHp9Swb3rLkbS4Yar",
  "key27": "kYuHEQukYXetHvWUfsHNcs2URGm4HFdWV4oyGeiXaUZQsYsPeGEMFgobTA27PLo93NcVrwr1eLYW5neFcaEaSJw",
  "key28": "5P4aFPgbfa6EqxJRxWMEJ8mgaqGw3A5PqnweFiTsNK4cywRZjMKJC4WTmCCoY5kqQZjyQdn8Pz9LvWUmNor179vK",
  "key29": "4kzM26DC27JFpc9rDmfJm1BC7Sd5mo5qTmnCeEVqN4cc9bHcSywtpTUDBnLjpLsuV3oLt5LCFWD2TghMJBkpe4sN",
  "key30": "3D8QAsZP8d9MsGUnTBdhniZ8pMH9RZWCKo9UHXzDpqECF7nM4YvwJiYZAbntPXqVne3gjz1KsyxscMTBvsqSzAdg",
  "key31": "5mQAJG2JbTjzNAqB87orFggsvCkT4cT7Gx6Mx2Vi7TRfwPpFVsL4yb9vYKNhhygPZDuqiUzBhEKXfo24NnVWaXJu",
  "key32": "2MpBHzMk41j524aAwm54oNtrRC3DnGcDSxh6JgicNDf2zvsMiuJBzZY4dfPHphB3E3H1jwEcK4ZUqKzVCjCgBo9E",
  "key33": "43NPgN7JZCguHKhpu1YPMFC6poEEtx4F57aHCBYg5TF4cv1MVWEFKLvZXYc6MeSfpWeNDMY8amnuYXs5TpUPsvPd",
  "key34": "u9x9RfDBYsHWXKdnb9oJNNhDrBWnKJCTKqKZCQD36wq1cJZ49LwE5hfKGjbMp9YqMLRTZb1uGSX19DyHUvbVTB2",
  "key35": "3hpa1RUVMHx8fWrhCQFF2HcHcbzVuvigpA9CkmsCQv7GjF7oEZy7QoqLrQZtkqxHQodB4sSDhXrjPJmgEfeVN6S",
  "key36": "KFMHitzW3B3HWMDgGqD8nyVe59PJKToGDkxTJYh1jqA1Xc7u9D2UJzsa8667MiwTGJvyAoyFntNcssWot5kXtR9",
  "key37": "46B865fdb5qS7J2gBGvFhsCRDJJgJDR9x6S1U2b35AAf7rtAej2wA9h1nuDprbzcyz7VF1g4vWogQahYStZjHPhH",
  "key38": "32TzrXgSar1eozMu2haC7nis7ACxM1yZWTM1EhJwgHK8AqDXUy3zecM5aUU2KmVcem9JHWKtcYKD9j1bxxh3G9sC",
  "key39": "5N9Yi9Udbu9PjpYKdt8Q3bVLFsemDAsLznJCdma8gy2hSYZhFWMJHCZdV7dGiwJkp1nBn5zVgcFG22VyXThxz9r1",
  "key40": "3s9jUB9ueTfVyA6cVktEVuq6GEqeV432Ah6Zz5Lku9bTCvxEQP69RnjSyzz58DQGZ1G1NsK3Pz2CeaudTrzVZDsV",
  "key41": "2YAwvpmym4P6HkjeFenGTdCPP7NSUKdzudTmoppohZ61E1N8JngEZRBbUZWFeDZXKNcQdmJfxvn71Q4k6ugJgja4",
  "key42": "2wnachApPR6m8UYWXM7C9CuzT15cF5KRvmdb4K4JopqPuwwxWfwvfeQsfqNkKJ6STeLbT62f9w6Mq4zcDKogVY4y",
  "key43": "2zbZbUmgLNW53Ack2zj4r88mTCpqPHVh6x8WdmWYkMquExmpXvXtbxiqLmTTYjBXxVpRamXn3UnG6RBXmjFqYZAc",
  "key44": "34WDfqvRyaid9JiQ3sP1VN38eheqFJ7eepgoTc35qL2cPVUdc1MKAsz4Jv3TABvyus4FfnNbr738y1zE54UjyZas",
  "key45": "4dSoYEJ9aQK7DxJyhcnF2pdQETqSDs5qs9byEJsveotUEpbe8R921kuBx4vxtJputovgjG2B3DS2U5JhWHoXXxxy",
  "key46": "2N8jCfTapbn7uTs7PRyVmVY5TZninvBDVSPr79yVPjPsm9mfsZMTjnSxX1oGvv5ifdqqJ2xFtutVvUJMihRAwLD"
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
