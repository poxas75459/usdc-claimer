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
    "26A5YitAWtcNqd9zykK8JWGTtF6wBqzh3dFRAK96jLKYJpLfjio3fKpwf7rtMqjGTUhimqEZgPZoqKgDxeGengVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wxbKL9tqytzLP2soKTSv3pstcRKkMkcnX87SfMe9VXY7JMojFWHsxzJq2ApAzWkC7m5LcYrjDewTkdiNQ6BdhUh",
  "key1": "2g8SKS1PDamC3q2WDRvvFHNcXTyWPemLbzZA8EDjubZdtf7KTunEQ966J8a97CttxW2MZ2RUGwqFxRcfsynmcMrU",
  "key2": "5mD3dCNCWyrRJiBUUcVEhLS1tvj4Hd6xKwCr5X3msLyYJ7Zo7rbHsxnW267pcoMmEZkeqMrkMLtEKE5EwGBGjzz1",
  "key3": "5f9BArjmvW1c91KuCzpLBVCKEQgDstEP5HdDLdJ9gb3rLr1KMXu6cHQ2CMiioQbcFoBKy4bFR4aEkJDrbhygEmwR",
  "key4": "65KLe5fhDYga8qxamA68j1XUm2h7tjqqZhbbiqmGgnxKQx9hGHSWQkVMYkKXnxCRENks8Rtp6BQEsJZT2joXmDt9",
  "key5": "38ppJbbiERnbsoBpUxCPqGMQ9UTdzGnXsMzCJ3rZDzZRcWVhrzgBLDhruQXjTHpkVGozdSvM8FaBUSkghJp31AcY",
  "key6": "4ap2Zw5eirfiAECFkQQ5CnviYny4SGe39NzmNDVae3NE92ndzkJqXt2vuQ2i2FfZid6dfa5G15dfwqxmq3tyuQeS",
  "key7": "5RheB8oEAhZKYwsuEU5xUhKR6oXaeA9DLWaxKAZxUQLXEfN23TZidJcc95VjA8LMZnEJoqYmyBtjHTQMSV12we2V",
  "key8": "UnHE8tP965KkTMZiKMDB6EVdd14NwbuRprX72GeG5Bq86kSDaHdsETn5wM85dzRfZtvCKMgbLVkUmZBRqxYgoe6",
  "key9": "5EPgReBAFK4tPBsSns6hZNp29SSXcfQhw7dRn9rySHBcQ9DztnuBZimtqChBZRLNX6QGCzReQ4AV6PxJkCaAmtDh",
  "key10": "5C6P8JrrkFrFd3m8oz1qeukY6vRj1E7mpDyCec1oQwUpUKC6SGWYNDRh4TZ4qaGwPLgdewrDxchqU4eX29rN2Tfz",
  "key11": "42BLACxiMykWB727ooVZa381rpFQSNapRWxBcZaGsbzi2F871C3QwWPXyXzfNQmEZzqmtbsQzBzSaijD87QnvBpu",
  "key12": "2QfXThvvnugSWWMYPsq6LJj8HzLLEkrxQfMcVCocX14QQYGCypx14DVjPBWr9UsRW9zn2tUxSJgCa2ewiffRGhmb",
  "key13": "4Xa41zqJUab8MEAKJGjwYuD93Rxvuhjvab6E1HNXTSwgGFQaqA2bponSfkjnKpqUv9VPchR38RiqXy2uTk78c6bm",
  "key14": "EvYxHuDqxiqH1f1nTA1MzVCiXAFoRq7iCx3Wp829CGbVVDxp57EdH4YKYVsDLk1XAK5Ltu879T8zapThfedgStT",
  "key15": "3PMhqdrzDymSYX1D4Tzfen8YCmSJR8J1W4DNa75GhebxgGyo4m28dZWfuruXn6HKwm6H3PKhRg32BvtdvQmxxyPa",
  "key16": "ArYqDLWgjj9fJXUNnKhPKdPFsJ8o26bYufenyHCxvpMjeRpKAk4ksZkXrrXS39ZuAWcXobB1UFKNapJAtpLYm4Q",
  "key17": "4HAriNRoTr9NwDGTKfpygXK9PyYYcuPdJkCkmbtR6QSjiHmzohqosCm4ZtvCAAeg8FXq2Sr372qhybv6mBVNAFjy",
  "key18": "3dBdU17eBtm9a4odgyL8LFvBVYQqGN8cuhxw6LsLsPFr84mSPHbWGpELi4wcjbAaSMqJi5is2QgQbr1jRxh419TR",
  "key19": "46Afdk9WL3Fr5KTarqEgf8wiWDZui535WECYuMTyFa8g1psjMJ5QzdXqxVjkLKkxKcEW69SgS8y2M1Fquca8u8Zw",
  "key20": "2xFjUquagfZRnkK2xGsHdNzYpXWSabZfG3xPWTvC9n6pRXbofMR5h4ZjNfnLiriU5SGYKZHb9VgTdRTU6bJkHVwF",
  "key21": "4HM2NehUJjiGytrt82HsjZSzLZuDptXYsJNEyoP3q9tCDjwkRm77mZpr3iRNJwFMq1yVVVHQHAUAdPGn6toYfXys",
  "key22": "5mxBCbHiAbYK3c1BaBE6H7aGECAF5FfwgKQSULNSts8XsBduA9as9iErg3coRyvCnzWHmAW3L2cHYZ137DPBYWrZ",
  "key23": "3nVjfFuQhg1MiBHVt8fxAE4g5tWoWjRR8ygNQftfxW2dse1VVQHYxVhFcEQ5cC4ccbZc41fgSwqM8ZkwAoACDJU5",
  "key24": "4Ui63otjcYYZbH8CPPGaibRyet3LrLZMf3DeGUCbaPBBuSZ9fndJHaPRD37rMe1s9JQqZ7YwfExsgFDFzTRPcdda",
  "key25": "2NptQ2VEXoJYmzhhvfo6Bg83waEVTB6GZWBohpf1uiSqP7yMzUgXcEhNRC6qA3wfHYSWSe9HZvZ4APgiV5L2rPDa",
  "key26": "2VkW3EeS7MQW7kjYay1nPHjW9Km35Xp2K4AkxwkpRf6G6wabegQVpNfJTAqmh8Jh8aM7jYiQv9AyWmKTf9m8yTyc",
  "key27": "2Dgs9XegXuZvWUoiscQwWoav4NEPUexUvs9VssRXhk16jUsmnuWqJH7qYrUAg1xDavEheCkb8KRLzHA52SVik95V",
  "key28": "5PpJohKneVGe65Uao4kw7wWuQsFqkts7H7cDAbndzp88FYCrk16ukoCrcB2wmr5fZZ5uz8B9GrFXUNxG3PbMFvuo",
  "key29": "c2RQ9RuDzoc4nnbJyiDMTSRs3hey8K17YMGaiYtZhc9zkkDCz3xVfTzN9m6gUqeA67DJmtTtTQmX4uVm8mi5jtt",
  "key30": "4RtVmCVcbVu6R17Le8MEYW8yViA8zYitkDNxAQmeUgY97cW9TmnnAYhovBmatpqqEWGL2ezRjQA83LxFVVq8d3ML",
  "key31": "qLrHvaEUcbWQneAAij5k4kNqDySkK1k6a77npLumVxNkZahUj6MaR3n983dghZkmce1nkbSnQAt8fCiegQMMJBt",
  "key32": "CgkFMW86C7dYQAcCU6UYmtnsUddRkfH47chKCPvz6MRazc8m88nYAisD6HHd8wGGBC1dkCihEko8r7Gi1h3dwmg",
  "key33": "NggsbAfP2ZXXxG8LCuTjhTYvzWk7Yabi9Groom9nm6rwm7qoiN5DS6eaQtGwj5dPYkt1tMYG9Ln1aXVpp3aVG9S",
  "key34": "gGPcvb3oKRu2zybpvDBuXF1gBzib3fP9euq9Y2dPZyEdWUJTeAfRBmoAmSJEZDR1ikmChuug5Z6FYU2chAT3yZx",
  "key35": "vKU95sZ1ch9F1eD2Mf6bvhqLjd7npssaQJZsmDdhapippUdFUoAoeiiHfFdY4g7cDxjVuRS94uRPY6tmD3bokic",
  "key36": "5payx2HLewHqF9LbTzuBcDukD5Xni29k1oEnTobeuLZMgt73FCSyQnzJw2bTScyncQSi6u5LrFoeTkEvRqr2LWcc",
  "key37": "5dnFeJyF6WcbfeRjJsBxmQ6wP5bkN5ddFeg2yD9peunpG6cN8TJeBd8aVisFgxupqFb3REKX2Huvfs5Twt3pLNTK",
  "key38": "ZqzUemb48YmNa86WfQ5RKRKjMpm9KDYYs3y1o1wmyGTUUomA34vEGut7pPYvPXuWwe46tbpmZu7aM5AHohuZKFD",
  "key39": "32yUstY6xEhw1NssL7wPQorpKuzSfzFSkZS7gqpf1xqNST4upKtW7ewcUDopvCgT5QTUVhWP7bRw6ExyFGGFXdih",
  "key40": "31FvHwU6tTxBW3a71UDaZScdBsYMX3AhzAGTNVsdjX1DeiU8SKmVDPvRnf2462qYC1YZWmbpX8CFqUpuqDrmDCW4",
  "key41": "3WDHGQgb9jy6sRM6Xt3VnNse2th9fPf2xxHgWkiB6B99vNYMzoPJ8EAUt7KjFUpSwRdpj9i1o8xAEqyppFKkEMsC",
  "key42": "5qfhGHih8DL7UEMjv4eifQn6djVJENApNN5mGWAsYSFPqzQdGHYphhp2THBZR4AEdZxqwBitq2EB3B6evEwcQH5",
  "key43": "2oDLUYUsCLbnnvvgE4cTcDQ7Xtns3kvZZk9df9zqcyHztFDngZ155SieKoBnMWhgTkNuUhh6Fww2oguhFNbFpGZK",
  "key44": "ktYmuiFymtvDpWaNQpPQsRCqNyKaN13RhZncrccuE1ntFqWtwQMmKqkg4zJB2Piu4YtCwYu66pDJhCwZdB9o1gk",
  "key45": "3oCocB9NF3qoDDZLq87gxN5cGXZ9PhdeXqjqmszmR1Whuq8KoHLBWWw4Tuce1aFhcg8zxmg2HYzJWvytDAT5Qhio",
  "key46": "3cNmQasfimqWzTuubd5YrnEXkhL7hq9EUUMeD8GZYnfpdjs19gE9boULKM4y5SnUyEqPVuN1NQcZ8BGBbuADhijt",
  "key47": "22yPM9J7Jmczw5SnP5Easq4NeV1CbvqxUGgJxzz5L74oDHpT2o1nGaVBond1aHo72K1xmYGBhxi4pjYBJgi3g6LL"
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
