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
    "5pZ2XzrGY9J1pMLJ2DCSczBCy6McLQF5TnLnjV4Leyze78zNfakAohgmHGLVz7D9v8hyBsvKbv6QnEAfWpNAF24j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCrg3UYTMrv7V8cxT4wGX2CFqmVVFtjgs2WEB2pV5ckLLJNEtWWZjZG2yBF1XobuWXFrymY8HFJX4yJMow5pD7E",
  "key1": "kaG1SgwDVoYgmDSZYEoMkg2nevanbnChSzJHqRNaUv48gji5qjioaBxZC7aKhHPMHWXWyfpNzFziwFwVUcT7WCq",
  "key2": "2JqsZbnnw34B9xFF4iU2eqT9TvB593KGxdHFDspjLwhX8hBkzNTii2e1vb1X8qfUXj9R2wjNdFvNsC7eQmXrMQrV",
  "key3": "3FZDdGwCWPAfs2QavVtfQaywUvXMtoyKkcnWMYtT4kg3qxEkuMMz9vhxPKtfWFKsWBNd6SA1DtpSXYLjhD2AuU5p",
  "key4": "4ixLRGgRQ7uzEUDUFPzF6RaQ2uF35LtjQLjC9NCnVLZ4g5S1YQQKZ49p9FiuMnsHc4t3TZq2EoVHbELcQVncxwg",
  "key5": "2kcdPHiCntkkvvMVhbV3YEXPPrFDsi7ws1AjkW6wASVsAg6R5ryvH8q195JepCYtubQbmcrHLqnbeYDUYNzhS6u3",
  "key6": "38UeHkoWnMdJ8mbJMk69nSfKqrbWnsCF4NFe1J3wW4rrHKfAMZfMETmnHd8hPSjKRECxee9dnMtiZjEAhJYkmx27",
  "key7": "3VDCqB7x6AuVD8yu8EfHegu7gf3QRtcVRJv5xKXvhEpCBxTsTrmBKKrPKPZdqum1tJPrfWJbJbZrCuFvr1mTfhUU",
  "key8": "4txmTRusJ44CJaQHVSrst5YRjwLDFrp9pA7ayuNBBQzCB5Chpj7vK2r6Ujarvtm7WEMJPBVr9TSLrSxyTBJWfqrs",
  "key9": "W7kuehj1X4ZW5ECKd8AePqkTFMmX6ij9t1FZiYPd3rBo98gqKPBFpa8TTVSJuS2XbYAVsMKYjqB71UDkvTwXqzy",
  "key10": "4feni5Pjro1RFeNQC4Q9su89ZqpxxZgUwn3gLRzfhxTBV7KGPJSfHwv5pZfnUuSegDLR5i5yGJY3kD25pd1pxwGS",
  "key11": "2Uw6AznGyMgjHaRigSA6vVcwfoMjPouKyuqwahEykuRJx9AxdBf2MQueeJ8RGFcythVtVwLxkLXgV6SnyJBXqSBc",
  "key12": "3UDAmH4XxzA64S34PCQayWLkAjX1iUSKfBAxKdH3hFmkWF1ppqeckyCfvrGiEhogbiPpghoUjNBhsVZEZJ2BJUwA",
  "key13": "1g56AYu8hNez1GpnbNeuw85RZovFFUmZzdwZKC7HsDF4EmmiT5Rpba9GNdEcKMhoLSEP8mh9rGpMpDZ8VJPq2MN",
  "key14": "2TPBNKuktBKtfcY4mLocK5JMKfNp4eS5JvoGnZk5d43dzqytQv24uHmCoerhzg9U7a3fLUXX3BXSsFLXzdMKX5eZ",
  "key15": "4PsDUiJPLJgr4KGuJiDFTpcSKVuiuxKBRTpUBdmUJoF1BMVgVW9DFQ9o271DnUb7WhkX6rNbHUNBzmeuR2AwpXz3",
  "key16": "6EMrbPpCLdwFqZdgMBjz5eY3ceyHs5K7vmDcJx897CsvwoFpPYfdf5KmgVCfwKhYeQhVDAhjk5VQuztjjmNQhkJ",
  "key17": "4JYqNmpEUbDKWbAKk4gmPFEeE2oDo43PvJ8t8gKceB9GtNWRb8WY7wa5vxqyGUiCrEZdnKUpHvzco3JMqhAXLwv2",
  "key18": "2UkmxwnAmRSytS5x1GXFEo6hSz6s9QaHknrEz2ovQTvq2jAeJgzcSnPmN41q4GWP92CEgnQUjbcHNbcWZGCKYLEB",
  "key19": "dLUX1a56Wd4AHy2TKqbPGksyvnz8fPdfYGEWcVQHypLZjgwNBicmeo4kq5vXu4EkWR5SCR4CwyY5A9qpgqFJAhq",
  "key20": "4gNs1shNH2C4LK6ERhSxTXyGmmgFjC8DK2NeQ5LkCVaQbqRYZ2AdvmgXefNTfpjw9F97J6tMRRVjUiYYwJDb7Lop",
  "key21": "5Q21Whj6oa66jW9BPaoC8PrvdQrWjFKCzB1WWtXEytr6ATiJFrXTwysew35i1UqnXsZBoMgQwkC2X27H9T1pN3eB",
  "key22": "2YF4hsh9E1s1u4HNL6hzXJqXegByuHbX5xJvNZjHLfAqs87Umzfu5nmLoYPkFzaWDBecXoMEFSz4kmDmgtnQMsJq",
  "key23": "2Z91mGFxBL2WFejDaWFsrqTRjjEhZSY6tZ3U1oKHHhqyDEffeiohLz1XnaEn86q3Ek6HaNyHFLTXrghwT1o6KCyM",
  "key24": "VqZE8JBRRyFY96fJFCU4cKQcgGAXgB5Yw1eyq2e1f6Fr8byf4nsQEhWUjsvhd8nh386Bdgbw2EFU4nCH4gwQ1ud",
  "key25": "v2tjiGRmKVpX2pTCbdCKxRyUnhx6dPkTiLAcbsBA9sR6cqanJL8Yqm61ZNKRwAu1tVT2QVWRYFHo53wp9Q9pMvZ",
  "key26": "5u52vm6heGjuRLxbpvJaobPC2Ak4PkXHKPPiyeuYwEfwqAv5SxsPJVSzzXYQLygKkvrtF6NfZBwpdK22C7RNEijT",
  "key27": "eF3QEZcq8vLvgYiyWv5pdBRUdZVxGutbaMigqquQUjvMCEjjWvX3io48MtwAXUJLJ4T5wVra3UAzkDufPGwbS36",
  "key28": "49vhZkBJf8ksDY8e7fP2H4DaAaZH1JMKdrCWxfU9RSu1UuvD2cjfFUrFUgLeMQGVNVvnbYmrRBzJmy9zmKe7rfJm",
  "key29": "5em8WN8U6gGEw9D9rHxptoWyjUwJ4LDqxNNcBrW2ufQwgENWJmQDDrMASoiWwVc5fAXR77U1kJAURnwHNaGbL9Es",
  "key30": "53xkZrbbf9iBtFmvaVJfydtkvadFFGKM3kHs5DEYmmEKz2cjVzdgJ9NUJxj4jzXu5Tm66hvVWS4PQx4yJdeYzBfz",
  "key31": "3XGMFewmwi2a84XL3fVxbEcWQ5XqmF3jhjqd6YJRgi5HUCzU5bKw5ek142q1v4bjp554PBwnx5BhzuMEP4rgGQwf",
  "key32": "3ctRY3TFyiXtrCrfExf5Y1mvTUJczJq6veVTicCMD7YxZzBDhnhsEkz9FbVrgXrpTH2NXEAfwvcuJ23Uws1TjVWh",
  "key33": "sLtUAm6TGC9JmSq1sAYLErpnidYv21wp5EaRzCXi7Hx5gQvu3dTpjLKhNXs1TiTzbN3Yjwoa9WGvmGT6Wq8pSKR",
  "key34": "3SVu1qPC9Srrwc1P9omaYQDXqQLEmXJedwGS3qVodBcKaxbE2xU8Dv9WrohP7a6seRMcWBbCQLpmBPqngHvpqRwK",
  "key35": "64SsQppTbwgx82Jy1tv7vsADkmBQhMjue88sZcXEr3D2oYVM4Hve9qcFEivLVintzgtakUS9Q3PWRxF6hniwdiWd",
  "key36": "5rYMkAWwsqFwefDxsjcYx6qBh4p5J5EZHasLZJtXaJMuAMTdAmZSDZyvGHTWH3ZLQA6aR1PxUjM8Yw9qayvP1JNG",
  "key37": "4hV1TCWBtdcDWAKX84dykySB8iSzVwBXWwigmC8xRp74ADUYhT4z9eDSMEGGWtQJ9KEE4da2QZyVRiPs16h1oFxK",
  "key38": "41nU4pkaCGsFaAgHSf3KRB9WrM2nfr3jHkFAVecTYYhkkqpB7dFEFnaTNbgAG5osYeQfN7yGSAYGLNp3krBk2Fxp",
  "key39": "5dLBGST5MXCCgv9qwi83r9PFaN7N7XPaZCf87e58Xo4dVNjLZKPeJD7T5YYQ21SF3YJz8JT5qCvoVY5i2xNSqcLL",
  "key40": "nU7mg3vFWkXkZbWwGY7XLnXBLs6Y16iyUmJbmZQUtGk6A3YAsLFjcmCfL5dfCtUUvAqrEMMiZbEuexH433FNToA"
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
