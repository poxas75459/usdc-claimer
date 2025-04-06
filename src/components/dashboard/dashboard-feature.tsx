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
    "4EShu9hJmnEjuZs8pqD52WFNg64wDquXRK7XSzdcdA2y3JsdAonpZHvVKaEzXafzwQgFQdEsxYPB2NJdXhApfLH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNR6bMx4MxwL3RjYZMJBzc386oxCqmXeZEdScL67Uuc79UmUF24JZiAv5FZvmNGvjateCxwHKemuxst5kX8bctH",
  "key1": "JknbrzCAnGYky4XCiBCzvTF5ofnUpB62DfskNy2Y7MXhzvSCVjrbAQfjvtTrGdKAjJRQHGxxezKTMjmHhk2Hi5f",
  "key2": "sYtRUoaX2hrGyPrgy16xhXMkmjPuAzjMUmf6GVjVEsEUtmjFUT1B9asDuc3R4fvDecdFofnukAqMjB9SRrmzPGP",
  "key3": "3gmt6iHDuBfjX6Qf8aPpx2ZkVmeJtT9iFV9c8XLWHM3uRCotPE8pnd8PSzSeJZcxGLm4B2Z2rVfSeZMU1RnffFn",
  "key4": "3omoTdxTZ3Jpn3Lv2US1hGfNpSdzhMQEVXvNWSkVwqvDAjsFVtDSUZ9P4CZ4Rw75BSHdDkECvxxLUkiV4zmtPW2o",
  "key5": "4K88sVwHv3sBMfeJknrNfrX2DbGqqbvLgeb5xe6kHZ1zGhxdrApJfog2mQzvusN4Hz5UihaWTsdnzRf1s9AeNMef",
  "key6": "j1P5pMrBkd4SsguKM98gWgngjBzdnqmcw3LdkxLcLFxmHwUgw6sp4BqZCdPfKSq42Df66bXXsftUN6ZjEytAcMq",
  "key7": "5Fh6S2YC2Ep3KiDjSBPhyEAojDHWegZen8fc1h1bNEgQtstBtjeiNhRt2WJF8TxZHrzmaGEuhmF5wxXh2oxHBvg",
  "key8": "4cc31cyfZ3tUokJtinQsxZKie2hhAV754k8XUiSvD28VmtzD5NAGjYzV5QuPgG2RH5Z7vDXT4ZDCHLrkCiNneaWQ",
  "key9": "2ykP3orEkdJogfnry8Qc4cgBt4fHzJxf6nKhVYGE326E8wmQevGQigstLXML9u4aJNsyUzPEC3MNo5bZZvVubNyK",
  "key10": "4wsJ9AD5HECdJPdz3QoxCZY53Y3eGsxSHEmP5AweZQSXzwzaDwU8D6GgBDmHqE7hwwDYKZXiUU5DoWWS1W8zikPp",
  "key11": "NGyZcoCSGChasxyaq7P6X8BKB1gYRUmg1Upo2fZNStVFscvk51po8qvXUYiY38B7Urmr1XCyWXWRE67dA67jVGT",
  "key12": "jmY8wcstkXVwCoK6rqzTyCEC7pbme8woXsSsStxrCX5bPtZpG4kRjv8EcLYSVdENY6PwEiv4CFXeQttEoEvj4VH",
  "key13": "5cBFhXuWaA5wR3ovPxsnhegYQ5B9HtLxC8n26oY2vK92M79Ve7dDvDsg8ipoLKq4ScYsVEfCebP9KJRu55HCYMYu",
  "key14": "63BjAATZgahiKSGhoYYMM3mKg7FbyPXxFfZ4uQEto4npgmwybzeqZmZqcg8hfp4edx22rqF65h2bVuPCtBPy9CtU",
  "key15": "9Z26SkLkhhFr5xsYin5pYbVfdqF37bM7WtLFsgCdHD2zjbn9wQxUKcuppr2p3Q3X931sF5ESTaY3q2zzoPCXxpf",
  "key16": "2sN6NaMPvzuE8qFVSaJ7ucbwTbF9HLdoQu9C3erxMZcmpc12J5zZSfTGkG23cY2yU9rKq4z27N31VCzPjuqWJ4Gb",
  "key17": "5gCUNVdgTuKfWF2FiZdvbstf7hBzhjPYWLR35Mrcgto4yj1S4kYxNYMJVvZXQ2ZUUeMZfoZ8rmiQnTEbM6DAWPrT",
  "key18": "MP8FBHKvhtr1EktcyeiXG7q6M5TDa2PqhiEG6BSdiQSd8h5Tsuh9DuayaXm7G9FwrguTz1zJkuWoP2CRCyisibr",
  "key19": "goD3FHKb57DaCUm9DFgiUAfgNmUKXSrRurgbX21g1eiPNHuSNr2FCrAgRrxoNzqDa23nfoWqytyUbrKF5PmxFxV",
  "key20": "4Gupn84mvWVMSi12mB1hYxMZny2hjvBx1QAQSZEeFzoCMFQVaoLAJUrn9ULvmmbsLXwYiQojyrbXkAKyYMAX1W1H",
  "key21": "YPZC6SY6GVznjqV6UxwnFeqoETUTAFHULQwPKLUqLR6nutePLNCxZNqyqTQDmLp43r4Q7XCbAVUi7FJhrc5HFEL",
  "key22": "3Hnz9D2GkX7VjCGfECAb3zFSHPkfywAA8MirVS6QNCASmZSQRWbQrHDyJs5RUQmztWMKqoaJtfSEj1Dzazc9jchF",
  "key23": "25GcjQojykwzhJjAJdgLTU8bAXuFMfR3XtuRqwufLTG4jpEwCANSF3WtegYcxxb5ZM6htSRHpGp7CfhSmPVawUag",
  "key24": "4k9V5Jfbm3tkFGT2Dh12mRYvLc1qTVPSEvK943YPrfNnPYSdA8Qo8TgcfrC6shN8tAqHZAZ3wDgbqVdzWNrtAe3g",
  "key25": "55iD62GdTbYQT5jNBgyzKfasP6HH1F7kXfoNpqHy4pau1oJb97n8P3zpu2exJmMMCW3WeLnkyNm8zD2oVz7nQtrt",
  "key26": "5a18KkvVNWd8nEJSoNJ85pznDKQjUBCxYYJw3YZ4QoQga27nZdR3ekx3YM82JaVoLnrjnbWmqkwNsNZ3jpMUkbfy",
  "key27": "4jEeUdyPBysaV8fgTyntQPcayXjs6VqP9SGffmggLre8xZXwwCLyLroTVqrHsnHmRdYMvUoyX1LyStYFDQqzQeVM",
  "key28": "5KRHaLn5eSURg6BSxHxcH77Kbk1bx3rJF48ZCAF2X8VKeDdRJ44R8gPuxcUVkp6uzevWpodzkcHsdfNbSo2fshM",
  "key29": "wwvw4gdeqXfM9hXKKoChySSPVd4vbDqjbhyU1k7HSghsbZXa8ithRCgRQRTQegzsAa71N6SrfzpGWbaHo1iDM1d",
  "key30": "Eby2qXXpTBbhgmEQJvPzfhoSE4LfTfiYe5isyz1tPKpL9czwynynnxXncd5632iw2pZSi66mkxiwPGwxVER7668",
  "key31": "YxcyWSRnUATN51LgaGrXnKfzBjLnLuKVBPj46FwyQsRCHWYXRCFvGPKJAEC6yHx3oLH9KccQiXQiTYbn1nHq6ef",
  "key32": "5xVAdYHAfQmk99oYe2mieEUbwN8kJnLXY5YtanXYmajcrpVvfaHA5pcTMLX5LKGnSy4QEXBFgZ5gHTCRsALecJE8",
  "key33": "4m8wqQiPiQXaoEKgZerSTSu8xHj89HeuvQX1zmrxEWCwzQsfDWt8cJ6DdNdQtbYH4onMzN8tpm2mBSRaS76xRJMH",
  "key34": "3CEdb1xjFyM2F7tS62cjfU9Bq61C4w4ncfxtGEhTgwfFtExfJV4VjMRUCQrdngeWXpX9HChvXiyvy6U7Td2Tynf1",
  "key35": "3NEJJSHWeg9bpESPxNAMfgw2MFw8woqRe9wfTfrCscRBrqEAt4csFeJWbLAM4USVfzA3batcsomR4MUsvG8dB293",
  "key36": "mKpzq23Bk4zifzfGtkYx4ZcefQr7sJ4TaKzotQs9F7ZFSNgUZgmv5MSwLmUXE5bAQBunTLPuDVpo8rGU3bpnRH4",
  "key37": "5AhwDvsxdVZrX67o2BXkN2jQd2fWzvMUoM4wGYYKttSJs5CXUSwu8NLmQnrjpJoizSdDCjxi4bVAiCjgBSbhp61s",
  "key38": "3rFaPqW6rFpgKoHzgBbTZjjjpMVzoezgHYdWnQKFtYHBCLARyuT1uu2i2JQ9jaoFZB8PFTMJ5vRUSaG8uB58fApB",
  "key39": "43cnTPCnhB3SY2XyCae7L4sx8xMvVVTMYKyfNBnBJxjJcsaZtKUaexWYimrFKKnVjDdbQzZ14wEuS5Yg6qKQuXqx",
  "key40": "5omvBAZDR5MLyLGzdm9a9xHMAA42rK6P9mfrGpvX5hFSLsYq1346ChmJwwfU6iAg69s7sHFiutZD69cNguGS4S6Y",
  "key41": "nLdDevc8Wuyuedq2hZbiaJdWHveRVniVWZ81LFCSkNFiXQ4EesJKHQ5fdd89tMPU827N2NViTPxqu1WN9Hue3Xb"
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
