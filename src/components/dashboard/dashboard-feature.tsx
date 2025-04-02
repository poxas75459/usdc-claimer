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
    "4qPRvrN6BTwPTb16gT3CnJ57ZeSHBb5vZ6ChYj8mAVibX2xheJ7Pb5Ft3E7M8Ce2V7t2JdZwCgdDxkkGd8oJKbzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnR434Nrtjec7WhRyfhS8o5UBFMtxPwwC5hHjm9zi6zZ6g9sJbL9NFkJJbn98DQCAXLm2dmnD8AYWrxfdjogEcF",
  "key1": "3EeWNp2c6sSBbtrf39DHaJ9Tegf8P3iUUsgGxqgVFUSEuRctuoELgobTjLwkmFDQbuvV4ndycXLHpm1rjYK6mW5g",
  "key2": "36AnXHqjnDkzLP6tpseN5JLRF6dou178QU6iE5sigU6XypmDFcJuogGC3wrTGkiJns12U2EHU6mvaRXnPS9K5Hc",
  "key3": "4hHiwFT9ZpJRXXcR4BTENzEkb6AJDZpq8Jo53FQMbEZ7xRMeUbczZcx4u6TP8tb3A9C395dNj1nTHTBSpQifr3qo",
  "key4": "5Fpb688iuwWkgNMA5RW75q4yH467QVS3YABxprTPs1wHYvc8Ak4Pznc9ENDe3qn61f3qz2Hkk23a2yKZoWpi4GeF",
  "key5": "UkT31zcRb7Jn5iGGeavfJbvBXXaZKamwavqFieXPyFGsYm18bnvYsQ9xcaE1sDStzpNSHJjiodGoziXDPmprSon",
  "key6": "42XJQ78fMD7WgC5FP3q4ZGfmpJtmheUA45VKVCBVenDRuw1nm4JiDMCMsZpKLWs2uojtQm8WzMVTYfqGiye1dFDD",
  "key7": "2724rBzSz8E2PLhbCYwZcdtHKwcJ6dWTtTpz8tJY1hAzTZJaSRk6btDx9zK9TN6ekTdK7Wu29y2XYHpoQgbSZVU3",
  "key8": "34oAYVDdwcurZEoagWfcuXXxMSHNVAdzZzGBraLSeqAgDWU5yi4gU1Q7ofpRy4kKrnj3H1yBJaJJervRsQGzPP3F",
  "key9": "2EYd1UJxhntRsRCR1fcFgMRe4P944pBjFK5sbqupwwM5pRL3jkDfJ4cPbhK78LRf9TreJsoFUa6v2tMWubb6d7Ti",
  "key10": "3LhGE7wFohC1SKm5wK8xHdBESrBSKZy1kgXpeXTi6czBwiUtkuHPpKyLf1fWnWo3sGKkVkH1T6LvcLZGzzYXQwY3",
  "key11": "5kNjdhbj23fBKpLoCr7YXhGvdUVTT4N8TUFcYAv6AhhsJfrHfuoqSmXPzDF9aDh5VMCqdtbN5wyTudE4Dn8muZoh",
  "key12": "5jaXjxermGGg8EsSTXWSKZDxrJj6mTmD5FsdatB92YaaTrcSidJr94UMSW3tox5szxQSNu6BzbPB9RRQrf4hX2f7",
  "key13": "29peGVmUVWwTDyAbMThnHTJyRukkmWGhNgQVXVhLCRu1EXhdEbMUURy4hsFgUtn4sjwVdpM2ogNVKijzTNXaDR9m",
  "key14": "4QzDCcgASzx6qE419VryEZLspULsPzkUjTqus3hRqV2BPPZP75MpyN4tkY2AQLrymtWix8V5BBkca57f63BGTHPE",
  "key15": "swGGzeEW6c4WTmahPwf3S1B3t6JJz4jTpvy471bKDaArhXBNzvyEM4ycfGGtSuHQi7ESVRLvcsUQ6MSYNGvp4PQ",
  "key16": "4TpTyc826btMLEP2KqYMR5sgWYSjTv6y1fdPmwJxAZyc3jgPUSQkPdgBYKsCSjGEeEgLm83EbYPKv9Y9UMtfX9e",
  "key17": "5w1pERG5iEFpCURddMP1g1y7ALg84M37ywLPzs1Bur7Z3yVNZhxbN2rUoE7vMB2ZuhD1LUxLGXbai7yktZXCi7BP",
  "key18": "5pMBwsM5T4vnGZ2X6Qq32ZyjNK9N6FuUhULgtvUAZKeMxPhcguxTt2MRSq94hQxJmg9Mj34rr3gAqkD7XtUftVhS",
  "key19": "FV9cADqGY2fSTDLSNHTg85dRQvbCkCPHpUmkmJiJsJdBzMPWWtZup74tcVMX7DL8XHwS3JVaFm33XsMBk6EMaZB",
  "key20": "46Fo95sRm7ydjp2Y4LYxF9xcHccikZMYdQs2C31s8WpuSoxdSnLeG2dMm4cU2zp77zsaKPQ66EQQmU6gdBT11fBr",
  "key21": "3hUjC7rq38BAb5kcPuQv39WdLJM6AtJeDyQCzruBwjuuY9WiPsh2EhVMR3mePC5uxBXLudwMKjqEK3uqLN8JgchQ",
  "key22": "5DkQHNzrqS1fYhmtMdqzgK9ufDtwQbByjq1JFNWprhvUTvNycPQ2D8ZFky4WYHLewRSXmtFoJXFNgRD9zGbX8GzZ",
  "key23": "2dap2P9CBMUYNYnB7bgSUT492XdTYs2LJHH7pgzpCiz89TuxPQUfvxPDnncUiACvXGSiZ6hNdGVPvmfcp77gSd7J",
  "key24": "pkM3eSp1wjc1kTm6fWDNGjsyoY8BLvPP55iJbuVVJyo6jGdZUf9qFkD6BDN3E2yAPGiWwM8Ng1rkmuxRd8DvNLT",
  "key25": "rHYadCfrWd2myzgHahLmFPutmPR7wQ1C1X5N4oogN1mBkcY2CiMs6kDTbbkNkeBJJ1k4QLCHeHt56Tfhp5T6vAc",
  "key26": "K1kwRNuJm7uWpiQD4AcszndV7UN4gpnNA2s6PCt4dbVJMdnpQqpC1T4hm1yUN1MtCwVNC1Nxpv9B1C486w1ZceK",
  "key27": "5nyowi8U8yZw2ReLuNPxJDSojs2nLUVs39hJn7MXeyfRR3pJ2wube8AtEvPS3sCnpYy7gKh97LiWbcS1hfyu1yJq",
  "key28": "aiWHT9nqwba84aTqhRcqUh2k69WG1aBXuJfokd26pW9CKEPDgzjTJRZWSWvj7JDFNCmaaktThu6BvWSgscLxYXF",
  "key29": "kNYTdi5xWLbgFhoPDP2NyEiqUk4wN5soocmtj8ZYsLZ5WtNojfrV7PYtiNcbmbcaRcemZMcwC8rfw4NpmYzQumK",
  "key30": "zpbXqUAF8fhvef8mJRtW4qYmc6ucF3PZ34nZVDVUSZ39nWidmPDo1ENkUVUf6HmMSfkc8ZPgX7MVkVibfUK4aTd",
  "key31": "5dkKWx92MdmrLgVofM8iYrqD8JcUybjKYV6qTMiLUeRHksnEQvdHSLYbKqdM8okH4kWD32dCA8kSzQstTsMJxnVn",
  "key32": "3mk5zeAysbkssByeCgGLuB6Wok8EyCt2DYSggxFeASM6EMmCEpSrqJwKonEbWBfWTfQcP6nEbAgX4k7miUKwUv4u",
  "key33": "4Zpjfj1uDdcQKC3ahQbMB3MwNXi6TM3qHs9C7fcPoDda7zbh4QfwG5kQRMQKoChucFS4miUtGhxePv7DFz6tBNF3",
  "key34": "4DobihMUj9fegLXkdbKvRJ7VVvinSmkiixg8RqaWT7zLJqR4NVK2j84RCzmsf1KizB6m2TrKcp8mvqHjy9nbLB3J",
  "key35": "5uVGPCZ258s4W4VU5aVMCxn6DWwUvo3jA8nMJis1he27VTnMsk2WGCTmYVRUkrPvcVB8WLoeTiYiBgdq2WXxYmTS",
  "key36": "2u75GNuKVn4ohZqhVVy12UCS9oHKw32eLkxt6mnzxTmCMeoVYC9A4fGjYGssKWYdrYGGUxpQEQtcKsZkRCXAMWGP",
  "key37": "2tMkQgjurzwmny25tNik9uNk4Nsv2mqhuAsC8WLivF4KHvvU1v4TRKvrGrewFygAwgkfkDFeL9zTze2o5kwDNyzK",
  "key38": "34xeozHNsAuyWrbDJzoaBvDaZihipeS95yhgysmf1juPzAJHAZaPkVVko7pJ2a2QYDfDVz3CXD31dgngn94kpMKA",
  "key39": "47sg8tn7rcaNjYULkhptVf3cHa91NBHC6MRJeNAR8XBPgi2SKvgUzQD4TuUpRfkRWz1MFVBK7JN1odTDmip9fPCt",
  "key40": "4Bti1NToWMcd8ceBPKi2jHpUhKG7s1fymwkz5HSYidG6hmj8RckvnQR8XRRQY29HZVcbSVznv4YEf95w5AQcJKRk",
  "key41": "Uis28XdSUte3ZbG8mZMZjAB8zyrzr9yx84jWqv4AEJrH6rgVkjw4bifarC8hNKF59PqPGwLAE5BQ7D9Fg4Va3YT",
  "key42": "4oaqtGDkGe2mwuzjBs1KFPz9p4UJ5vJRTXyZtEah8W2eZVySbKWu86UX9U8CxdyN4mdrMuu8A7U7p4RYMXG4n9Gh"
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
