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
    "4LcMYTv3r5AgW3qcgg3yB2UEhPXF9N3TkVSTA3KA8xs8rwQ3e3u3Wt28RXegEAC1yuZCJgcf3HhMo9y4QJqXk1o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6KVfQCZoMxr3RAyPc1h1JLVKmNTetCwJPAvXRC8RudvCkCZ9Y4ezQPCrfhruDy7cJGd6LfcEPU7n8j922JYq78",
  "key1": "3tmotJQDDfFSHAcZf1hN1ogx1AWeVJZVJhH2ui6S1y8CkdMzwVNzAUTgVSBmE2MZrzJLK4qKEbwmanLAFvZkZYug",
  "key2": "5JZacd9AdaheLSBr4P4quxu3GRHGp6pP9PU5ufZt9xo17dM1aEceY7AwgrM1d7ZK3iRRfp5oKD1kW1Vrx89ydgHq",
  "key3": "2NXDhitEy9X4NHEYcQiUmkNhzpsTCRfesGKvxmiyxH2a66QLkv3WM3tDCRWwAR9wWHNrB4bC3bCw5Y3exDf7ZjC5",
  "key4": "2rgwTiz78xFqGkFbzx6enUwUHWAxWMYs9R5NJzmQUkDnb4EDbtHPrYnKmcKMrtPoVTTdaBWAfK7TzmwT8UPSZ5Ac",
  "key5": "3J5HJ6YJqV2q8UuzZBAroiUDGMB4853vzfGEdJ9ioDHyfeCFWksu3KZRsxPViB3YVcdrVsfjCj5oNPbbDerFSFNF",
  "key6": "2uPW2EYrytZNxMriXZt1DrHqXrEL2yzugo4LBG1tTW9DEbKVRxs8Mg59TdP79HW6G1uTADdGfSumcE2CYpDYSVu8",
  "key7": "47aPqs4kHMXvYXrK4W2JvQm6d1UAwtM1hvX3FGUHf1xMnXCDwG68gTmYMVcTQRRLdS58oGnKY4VFVbWQ4jFvCRNC",
  "key8": "Lc4Kjad2VY3LMmjqGjLmFeWFAdLcso7FsW9hKaQecGCqRrhvPKRhc9PZxayEyzcNeSEvoTTMhUYD3EBDFVWzjDh",
  "key9": "4ijKGWc6b75Ka6DEwd5CZvHwurAf7n1RLDDCrbS4YNsma48jah5o2fbv3BSHGVboQQcN8KCfwunWQUofR6d4WeeQ",
  "key10": "XWsPv1dYzK1pRdH2RbUuN4qX2wrwwmnKsJN9PuW4yrimC3CJTyhgfbLAmtVJKQKWzmbfutb6mKosPMwqmDsGwxN",
  "key11": "2a5gBWsQpM5EYwtCSNq1ha2k3ZTg9x7NLCpPHjvxbgPiZHy8sRyvMokycM5TCfJi13i1cSDG8dpwqp89x21A2Khk",
  "key12": "3HAa96CfV8bAertMgwS8RsTCi2wotB8PmJ7uai3YtTZmyuCXXH5HfGvwYD8hMQewWV8yvxGTzxiFJpPbWjJRoqEg",
  "key13": "MJKR1czEsuCQG1MT8B3zVrfxQaC9KLGinCaRS71WpJYhLVEsBWryer7QW1Kx5TXBv1m3kAH9QoGB4mcw8sHY63r",
  "key14": "2PH1ZJHYoo4vzt2u9dq6xL8Bo1NhGwykDVcJqpSL1uEjGgt18zoBGoZ5nLipoMwLiDo3HX3hrZUrZz5wpSCfjShj",
  "key15": "NkpWDq527iVnBqjgVe5CTquTJvtbo9MsV9cggYc8jEnPPE97Ne9NyEL8h9nAqRUUGaReZNen72UmAqx84De5MsT",
  "key16": "WkgVt9Pi3TYrbW6GXWccjXj1o9sRM2xYJX4quy89rMVZ4x7XtzScxfV3iSWTgB1cJx1DrVfvFegCKR1JgGYBWHx",
  "key17": "p5wYAbq5QSQ94QEXX4Y3eMeXuSGNV85vfXdZ5Eq3Y7ZhtBgkTNzqGQgbR1oHZGd198h1tgdii33SJJSZRjXJ5pV",
  "key18": "45YAjXiy2WnriCpHe9xT8VzSpgRxhLQPtVbDAqQG5SWdkGBcy9hkD93dWvvbnUPnVK8QcU9w5pkm15vQyqpgNGfD",
  "key19": "5gc2rnmCB5DEuYPTC3mYCXK9WtMNufRTkLRQeEi6HKwpcujh89DW2W6bR71HWDDW6xWoRaiamV89KHDuoAWL6Cq6",
  "key20": "4M8pLPZBUQDYGotfGTvDVNjsJC91cXRZLKB7PsWV6ZEceMdQaKYU6X7KfCXX2ahf8UNv1AZCDQMVPZfiSMABrLZg",
  "key21": "2tyBTCt7mxsPLvqNW8T6kDvoCCxrZ71NioYK6JF8qX8SXV3C8djDyB8gmNMxchLXgfiK5EB4JKyYU27ysJ8hpsGR",
  "key22": "4AZ12kvwqp1jpBSWrduizPsmpxcUAyuod1tffrBrwQ42RQB7emEGVngFSYUKhEuCY6QNpAKV9maKNcTRa15Asr1M",
  "key23": "3Nt6idAyLoKSpCRETfZ69J89vH3JmpfcGYEaVPmR97RcDSLaeBAcr4swnevLCxMTg4tCf4TEKMS1BoV22kJKHa8s",
  "key24": "2bJHqxpD1fiQXWMfqSRRB8k8PUSqTC5NxjThKCs9FhWUb7cnaKoLB9EqEVzcHjxaYDmgVPkAYXCggRdM7QZYc8SN",
  "key25": "2HcgSiiCDHNFy6HYBhdiWNAvTvnosN1faWtm3kG16QQXKd6hfkd2NctDMkDntEDtUzLf2of9DTUTUzMaLMDkJ1NJ",
  "key26": "4bSYf4BPDHNb1BfkAUYn2mEt9kr3GSfCcmKJ4YtAWWqSEPDtxzzq1imCtoPbUDqwkgdNDU1CgYRW7VzqDjRCY2J2",
  "key27": "3YjqC4YGuFitjzRFbqBHd5K95Ku97UT9SP3dqwVScqWoGWUh3VgRyk95QcMvRrE4PsoXwCitr4jtrYqX2j86ZWy4",
  "key28": "4Urs143voeoN1R85FN6pFrKx2pBo8GXapbVQkWnFDu8N9G5HzcRip26rrsjEpnvp6GRtFSfUpk3TuRfxypT24TKH",
  "key29": "6vueW4Adhdai72iZaKKDpaKaT3bwcDC7FCHtgjaQtq1sx3iRxGQT1tDwyWkeXSKadwSR2TQoM2hXMr4QuFoN4RJ",
  "key30": "59LnS7ki7UEMKFXSafTdavRHGBGEdJKa7RPs3NLPGk7VebZyymAbk5SxTr1EcvBXKMFmFujxoGKThEBQcqh6sZj6",
  "key31": "3xXxJmmntNBrt1XwzYYRTNUrQFR1YDkcHDFtwQrqJ9axwxW6MPh6Mp3BxjMpuCThsK8QMJJuW3ybk6HTdZHT489L",
  "key32": "3avV3Gk1hPHjbXoNEmE3HvU2ozRbbHNK3NVUDr5v7Mf7aQxrcM8iNFrEpkheSMfKoyb9sPDrRGqvfj47KAGjsarZ",
  "key33": "2Eu7Mv72UiVUMUbJV5xudJptCaNuADnfsX5azQ2uV5QftwdyZWz8i7vy4824eWsy9VjhYH5govFcHmt3dQiEGvsP",
  "key34": "51vXLiLgYi4aR7nnLaN4M8xZ2yzuQeGmxbch8uDuUjGvQfmtzSLESTUrqVeuXwJg5zx1pmRLt1GS8EjhkNkSqSBJ",
  "key35": "2Y9XHU8fZu27rBoghbTJssCo5R5mJz4sFYtQwKkZ2tpLToTNxtR3vTaABKCKewQ2hecwyqkU39yushEaronrZXKN",
  "key36": "bEnLYV82ekxuESnoXVkpN95ZQ54zfP87vqmiuXmffY7rgVkVw4xm2zgSzz5yhkSVKhK2yGVV1NQxj51hLf5YsxK",
  "key37": "1yqgepPQQhtJsN1X3J4zonPigmmKv21jTt4h2sfqutMd6RYYbegaXN4cDQz6czLVWvmaADY5PYE2bMRsDZ8mBmv",
  "key38": "3JLrENhew8yrhw2c6HdVvWW7wnQYc7i3UkHW7F9Ntrm912DZ4bbB6vjSBF2Dp5QrYea5rE5YJDcZyPsvtDs4PeoS",
  "key39": "3BU3Azbq1xYpw1udV3WdcaANS9edm1fyGN9tYYiJN7mpEDF6WRqQbSk2cVJeaEvLigdtaQ4y48uDdYSPbE1m9Jhn",
  "key40": "2Vvxi6UKWyLja3hiwVkaGXW3Jjy5ZDro5U8jo6FPavKRL6rhcva5BpK3nd3UMMC3zhQ5c9iaYcmJPTRWHFxrYUJs",
  "key41": "5Z3RtctyXMN7SiuihnwAEnw9WwXHT9ZWngD29SGqKHVc1f47CpKRmzD9hBWC5JiWTEUJRHnKpqh21epaqdssSE82",
  "key42": "A18mmU8gu5o6kaRm3h6Y6tzGmcUHUBmXYYPZPPfxZNuhDZGUsTfL6yYiAXqdwrHTxFzkdRfAWEUqUxuozouNCDT",
  "key43": "5LCu6VyMUnYTvNqLLxLrPqEaKr3YojjvtrhHFA6nhH9iP9dnceL5SuJSwB1VaRq5YDquP3AFnu1ztocsfNgAEToD",
  "key44": "2AEGH4ENZrQ8q73R3CwseuYDkyKArQ1iTPSGpDy72DXZxEcjA99AcDX3aWt3LcSxd2oywvAmXZkCRDwSt3qRGHm6",
  "key45": "4XLExXrWxassjziy3rfq6bdugZ8vPkExHu7Y6kjdjzEc3aFQ1vVnq4Xgvhhr54vFeRy4Ak5kFe1RjaK9PT3f9xis",
  "key46": "3nzzjV4DsjQqXfk3ZGKPYKMJgDqhwB3XCHTL23v8YSknkwniCdJBtZ2ULtNDosCUjEzpKcKYRWcS4kDLyJvf4A7R",
  "key47": "BFMvSLsr9Ri38LnxBwQoPQXWjqUgJQu2DoXzEJ8qiBto65Uf9pCpg3XeMrPyepGAa6v1ENUCcYhphPRVTHMK5go"
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
