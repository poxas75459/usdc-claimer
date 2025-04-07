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
    "2qoTnjCvfvsgyztW3fe8B4zn83LQYquqRBy5wCNY9nYvXReeQ588BHJ6MBq9mSLjXkwTop7H5LgF7AaaYpTpmPto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3me4F9sUeu7dzxDtWh586C3eknF4UXKds9pVziRqApiG61cxmJ873xL4nhanfhhGtumm2ZFgBRu4EwiWsaEbmW46",
  "key1": "5WkbYNoppakcUv4UmGBWFkVqZHSdLLUj4ZpDZuXaLRr8TFvUNyax2qEnKtnDTa7U9NiAqSaoPZbG2VZWGUZ6ex5U",
  "key2": "2UY4DgXzGev6YUR9kCrPQQyGjY2hwPpjsHJtskbHE6DQTFNbWgnzDXHitPdCF3xhsc7xdJeTDqTuqwu1UQfApvTA",
  "key3": "2S1oUraBSWy5RxqNv5ziYgBXPied9DScWjXb2ccnrqGuFXheYAYbSYVwMmNMDRfV98bwXkEDdw91ZgaBxQnvVbym",
  "key4": "9Ka9ts2pTB2npyT4cuhPKZatgExZfZFib4AkuEHzL8hSgmXjCoJ5D4tjJ49UJDLxStpjzZCvh4JHH2RWt8fDMJ3",
  "key5": "42HpYMhBSkH8EEw4Zwm39MzdaLKxgvwN1VVdEFeZLMigeVFJZBCwZcYUkP1rQSv6vdyaEuu3y4Db3Kujt9UKanjY",
  "key6": "4DJHc4NKpEb4Z1Y1SG9d6cc2wJo8rg48ENppgMmGj21W1XMdHUU8UbjQAn6yB3HD1RZx65NmxDTz9p89YWudgS6C",
  "key7": "54a4nAKE2VXRFpLBcpUqZwwRnYDkzRfJyQBASKMTekPnWXc4nEDfGrYbB4VhGPENepFAk4gWXjPf4L15UGMGyPYY",
  "key8": "2UxzGdaEYohSXtU4TMgw1aspouhpVYiPYUdYLwzJ65kP75CFVHbfqUqW4vY1SZmS1Be391Nx4GSvwtZnmPHpfzzB",
  "key9": "6VsLMFKYQ6GjNvdv8KD95FZiojATgw98ozwaCe5hn2f7nxkEn8n5BfdsW4RudjVoopVPmpCYEKutN76K9eSyozJ",
  "key10": "65hpsVnoB1RfMaxfDpFDurqobERjgterWpogh76cGC1jnks1XSrh6XTKZny1ERtXPT7HJ79iEj9nKAb9id8tMwAT",
  "key11": "2q5c9dasLmx5NZucsbR1KRgL499RsC4wMrD8Kw84XesKtLVCtxWRLp7Co3aSeyKs1sCgHFVyF4SPPW4VKPBRTkzK",
  "key12": "4eZhN169b3XBu6yYrKydXC1QWA8Lqq3q54ydpoKmkBqzTrrWECw4g7KPzVA2qdg7UcQyr6jeBxYVfsC5wKskLtCC",
  "key13": "4WSRZP2Lw76jYx1bwnx4YoazyKjVMvZGRa6gNWRjYpW9jjDa6QutsVv6KZZAhbbw3pwBWAGaGSKPdcrYJ1PpEa5N",
  "key14": "4jVcM17vwahBpwX6zzkoZCuTqn2Uq6jK1V1zW6VTg4vhDUzTPvcPCqJ9dF3p5WMHReJDyPHjfDr1CiYcnp9535Gr",
  "key15": "o82c7yS5MLMaTZaqJ2p8rw8kPsnDT5LxXx5Bv4Ukse9KxmCGqHM7xzNSgs6BVeT93feXa2u3VJXriBqHm7E3m5W",
  "key16": "3GdfdVSsFFAgtaWSGxhHRT51zuJLdXXosSNT3Dk7Q2qJfP3szPuBYJKajUb1exboZz9hip5biGKEXa9KhuD12Hce",
  "key17": "uyrTBXqXvDJG6Xmst5Y2TEX1Z3wWHZdNyQ5v3yHK8TustDq575WTJagU2MG3rknaMZ2cgAxJWmE5i4LZTpmYeNR",
  "key18": "4qVmvF6z5GLZzLkPw9tvdfk86SxzYdmYWGvsFLYwu8ppygpoKxhaoPqjuaUEfK37vB49H4bfguXKgxSuh3GYxsjc",
  "key19": "2wf5SdveJ2incqbH4QAHMATghCvtrKqMBh25NC9t2WW4G9q5DoU95xLr4pgMN8K3nnQSTfaf1dnjtbBHTdL4kq1X",
  "key20": "2TFu1nMYJvrKyP8GmGyYKJ774qzFTcXg5xmi1nd8s6UuCTAcTdnp7BBVqRsGkt8PwZAb4K9sezKN7u1XMzPUunNn",
  "key21": "62MbhMz4woLbCWQcK2bbX7ZSZWKgWkArxqMD7RsYVNZe61mFpMh5XWyG4t4uhjP8vChMKssMNXSvzGaosBPHac3E",
  "key22": "5wBbcVvEB99DTa6o52NfhuWZkjR23kWkjaHG841y6XjxKX6g96RpjpDarjTKpe9HNQWc7zWp9vXAY7ZrT9Q3FoRg",
  "key23": "26Y5VpB83prc3uw5vgup5edaV4RUqAt2voHNMXb2db2NkocXaonq8UHzvQY7g93tQUobcytdyFJuaEK1fXk5cddm",
  "key24": "25URDt4hdSZcu65tunDS7re28F6DHccKA9h3caZkUC3R3YiavxitPHLsDGpeygAX2LknXzy61voQMTUFA2Q9n1S2",
  "key25": "rNDFBnCrW37jXo8JasSv8eMJ2qKaejLgi39HhsnRSHxHNfpun3qnwC9ryvg1hYQJK7xovNvjoPapDpqacFJYA7E",
  "key26": "63LARezbN33uCa3tyFrbFrT4FxmWtuKLyTFe95YfxYTbhuStBuLoXCMZDpztPZfUJnC49aK4pZo4tRTZUSA34m1D",
  "key27": "4WTAvVwfnJSqn1GvkqrFcuTRZckwh7avZeVtSQbuzzpvKxFHDemjhHggXfVd2HLFJptRMNicVoCG6fa2GFfJvY7W",
  "key28": "2oehWJvgPZ4mn9xXWaWZt6SKemaxytDxiKrK5JjLaUQd1SBERp5UV2qp584KZwNHQCKeQHZypshZ2fj65TcSquZw",
  "key29": "5KCyEcg8jYWaXpUJNGZ78ai9DL3RE4Xdu3Y2sK1T9K85a8hS5iW31z4K3KK9J7WuXZYT5xuxgx2JkWfFy85Te82a",
  "key30": "5rqM6DUn5Qb8uHsBpxFmSjYdzb2ckWHR5BWEMHNwZDjB6wAr2Rb5DNWMbsvnLeoE1VJeeKD4Jq5Duv3A5a7g3XFx",
  "key31": "5eWu79Smd6WLGtjnCf9Sv5qW8yBtFr5fcSUpSFYrLxnqvX6Fx5Fw3N8XwFbKQ9ukYyB8Z9afQuMwu9Tki38XbhBr",
  "key32": "q7KBaLmf6EUVTdTRs46x1qpb3FavqrEKPKqcgQxzkPfKpSqawyHsyXYJL8P9iKo4abRkuMoEDBDfBvpWsdecTyA",
  "key33": "5WpVRFRfrHmkwYgfxsXVZD1xSSXq7ABEZH95CVHXrn3vZAt46VV4eCFLAodoAgRkJbsSJSQoYXkbHgMDwWSWLMyM",
  "key34": "4cn5FQRGBKBVDJawZpMk53eCbUkpR5HYVzsavy5eryQf9pKsSHUcVSX82HJroiXrhKBUCxLtRJ9UmPEpzr7Gka9X",
  "key35": "38xfA4Y5MA2LTowJHJYaEYtfkQBqWrvQTUAMWgo24XAigPcq8bZwRGGZ1GHz7mH6VgkDzXMCtbPzM2EBKcQFKhST",
  "key36": "4b4dCsaUkRCEY3V9Q2NhFFfCUj2YGAwgaZP2qhphL7kKrXTu4n8M21mmx8xN55GCJ1aeK98Yg3S35BG6Ctq9xuxw",
  "key37": "3EULqBAHa54ofqJPkV6LQEEEEjYPYy7jJp3PHhWD7UTEV4rdyTRccQoP86TTQomcTdhsRee1dBxJ1NsCsuaFtmjn",
  "key38": "2TXJFueVQULeazoCbYw7rYXf334UpkdE7ibDRwXKBBfqMuuix2G5MmmQ7R8ZwoJ9Z1D8NQeXXkgEkpxemgEtRy6B",
  "key39": "54SxkNXhYDdf8T1CGYfMA7fUmEztRz9JowyLo2egdP1WfwPwf5qBvqJQ2qCN4bfpcxyjsDQ1cr5CQWet13pDUYsX",
  "key40": "wM2X4UTXGajgmJfo1r5Zkdv5BNp2EY2TWkCdx8YGGjELomTJhRQfvkjSDDdcXQaA8L3SJrEhQiCg566fvYmfvxp",
  "key41": "3Fndg9Ww4PoeR5Q7cecxJJ1tHTS9ZjPNauUsbsCgyTsvaXcsm7dMP3Aj8xTCTBweCs916Nqtmiesc9Q1R1NqpnHM",
  "key42": "MmA4XVQY8pEY3iCXY3MWxtpicCHE3x6wjwXa4piLp8bJAwQcDHAFPeQsYJGcJCG2vej8cHCS1k51SZ9qgdP8N9f",
  "key43": "m3QFXRssqWtSg2e6tmdzwwLRh1gqoey8CaXmYUuuZfA2rMwDAoDckRNvGzYBoYAJtJpbGM2KRuSZaWszV8uQCgZ",
  "key44": "hZQA6tZhVMQn1udkPCf6TrjNz2akELcdZ6nhyDbCZRm52b5CntBScDENAZiSPgTMKVFQRW4hu539WcrkNJbZoZA",
  "key45": "5ghVoi9Q5oP4BGnzyYXPKLpL1Xxx37g17b7mmPFpZVzCuAjB5HxXUhrthpHCFutGHCf8K5xK54mh9srYko83ECtw",
  "key46": "5hSuYMCZkjTJN6s6gwQjrp6P1WM73HEePgohsVtASpojcLiMnci96SiYQEJ9bSpMDS1GfN5AdxbDCvJS9XzK21D9",
  "key47": "H3tEVSEoxcZmhSTCiTRZozaszMFVAvQ4VffTBvTWZe9S8Ur6AEfhhCNM5Z3Ff5seNedviT2qtqPTSvS1NFMoKBR",
  "key48": "NN8vniA2xc87JSNduWiwBDmxihsHVeqNYyDR9vELkDmnkBNjhNAEiotqwGjbNHNiJvbdBt3Ftz5yfTZ1fipYB3p",
  "key49": "227929hZMPP6Xms1PuAZWD7ZesHJ3CKRJL3HiohpyKQjPs8w2eWzrWx14ot9iiH4anCNkW692aosM5PaWRMtCdWa"
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
