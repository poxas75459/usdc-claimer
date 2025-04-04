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
    "5VhCTLDHJKZyLsdZkw5AUjgJh613mR1SUyieArjtr58aKXZYgsRsKE5rSN7d5aEyNkUQnqdQpxRmz6QGpHwgpdah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A1h8AwbBcuRP2CG8Ju2om5tvuVencxFXjrzL5JBw5pArzmsMD9GxhAVE8z7QKfZQpFwrFfA4RKiRZGDBeeeeMV",
  "key1": "55Mess5a58A9fQxLPAqvsMxn2wzTch4e5Fh6aCvqzsLC26Gyd2ZoJuSrA2mnvxoBV513ZjLKVTNKSYJmLpsrQXex",
  "key2": "3cED9NJBq2mJxKCkE3RE3DD5fgPsTxv8q3poMAtMNNhcy4fxdQJx1aXhsAv1pk1PCdTRqYWyLTP1yucbJr8izLEQ",
  "key3": "2gGxrzzkBg4Qukc8sTw5C2Uxsw1ymXerGRWzADdq18WrjVdGNKotXg99hjdLJh3rJBr1KD9ct1mR8yfktq5EUsCz",
  "key4": "3MD33DYEYEjotMQE6D5TJGv58CJBYdascVPdb1kDuGnTjC2ae3gFnaocCSXYnw5ooa5rXbTAipWPfsAY7egZgSYo",
  "key5": "5aThnBCHWGA1uXV3zkiAj84NsjYiW44S6MA7pNzWRgEAXSPwSSSmmWgbQsbyN3ZsCnxM99kx7psP694dFTV697uA",
  "key6": "2PajPyEyRPzeP9QbBSrgUpaqGAkgZmxzqXKtaHAFrbwvsadzE1rXf77bVFBH32SK54ZwN9owAWXFzM3hn8opzcFf",
  "key7": "2ymgwcMgNSJHYR1xiATAJq91Tb76KDNKsS5cXtigDPheuQ5AM5jvDeLzTcQ6CaVN7FLoEzgESjq6RomfL9h6AvgL",
  "key8": "2PiPW3G2xzHMmSCNKRauwenU5FkZ9ixhN2TTtwcT9xbjKDr1pK4V862d6mZYo36BPn4p9P7WGR6xXZxdDocnkXPJ",
  "key9": "3uJs4djRQb5YvLoKv3wUaHNqLFEjPKVVGoWY7bQdajHFXgoEvhCqmkJPds38MggGy2hEczkTeEBZZRnmVfyQybVv",
  "key10": "3v4thQinrWxtMWVtmhLbvWLHQjuK3qR3aamsRNr25m4GTVZkJQSS5mpDdG6cSpcTmWncXunJws7CTA5eMXjDQcbm",
  "key11": "2wPWFDr8gzYwWZYFpSxJbRGCUPd7DU3w1rJDHdbmw5nR1CPPBZpYbmV4wjt83gVqTv89F88JXZrRoPuq6LESv3ZS",
  "key12": "5advWNfYg46FvP1qWgeVrwHAyPgVwmJUUeVN2GB9HKcyXE22KEHcUQM3JGtA4b6vLWTBZe9oF64ywotCPVycGwdx",
  "key13": "3LU5MgQHaLJhfmAj44p8V1brsLeMPpFb88UenfwUQpnbB8fNvBMpDQKBSvGwNEaeLqbpccitd2Pq7z5yNex2PRz4",
  "key14": "3te96vrfjcZPNdzQ2GyvyoUBuG7RL6yC9Pp7kZJa7Q1qBXUCpVY91pDtM9LRTSzK1eh4hkcTmkuPf5cPp8zU4g5p",
  "key15": "2M2iizExdVedwmeiaFZP26vmgmXp8aX1jGDLftoMf2m9rJkvY8zsdnVQwQ6HtfkYyS6vZadgc34pUutT2xicEghX",
  "key16": "4FDKj7jEWrPqpYaZzFKdB8USXpATJ6UiswgjrZcqMUR5RnNocRycGXEFGu8cszYBYob1GkJgfagVtPXQcaSpqCfX",
  "key17": "Gf9cwGExtUUugErYwk3KyziZFVstPXZmFBN1XBrSxXSG8FWk3k8VrbWjRxwqPHPXSAn2GSgD1ca9nRH8uRn2JZz",
  "key18": "5iD3JvcX3srmDgvGW5KZ4DwidGhHn1dWRPAD4aLRoT5q1r7YZ76iTU1o3nYKW2vQ2c74tRHEMuvnJNvN1YHKc3Ja",
  "key19": "58QG14kgqAd6cnLgwX7UjxYkvnKZXhRaycpYQTSEyzziC25BFV6UvJHodztLAvyN3ynsvmcaBxYcUMwD5SqgyQ6Q",
  "key20": "59fgMC4fzZHFvEcYht5o3Kq1ELjza4x2Kotdn6AFDZCV2jK4nbRpQ93d7UZac69ZqqNZotEVUse7kGJwgLTXmgqr",
  "key21": "5vndoNhbJH7jXjmEZvNwQpCbHxiZ8hP8PG8LmfDm6nPYagUSFNEQM9HocSRPAeHgz34THbqTzFJpHwUsnCea9Dec",
  "key22": "5mSXi6KtTXuCePETgLWNXAmbdHiR5nfFg8qatEzsJgeD266PCf4CLPTY7QsBg34VbyMYMDKqBZ2mNN37xnZYmcdW",
  "key23": "2XCcT7oeZqv978LQoBh3RdbAPCjRKT3bDc915S5yjhDY3snodGEqu59zBWEPE9PtrF4EVuZJRr7RqEigADMvHaEi",
  "key24": "4sVX9SVvr2nLE7sHbWCJhgVS7nVUobiHqK5wbZXiwCzCXuwTceqQ5YvqsQKwJBYAtrs72WnhNUryP55U4RYY1rgY",
  "key25": "4dn6aPSD2zfSjiadp6JMqgXTtFCm6ijdUm24VH59RcYZU9cTeqnmeve89fn818xyW5ojTKbJNd4dnwAbsCwsAVdU",
  "key26": "c9FyyQ5doeCYYayYCahnPyPHMv5zngSeX1H4ih8XsAV79Hyq3PCirD1uH4sfBtC3qwkCCAMTLq4tFY2h9NEvuUY",
  "key27": "3V23manL6a4hF7UXJaiR8zMZfcdqpymGdMVJcDsVgvEp4ouxWUpXN4Bk6KrfXxakn4q6P21U1X4NHKrxZNC8x3H2",
  "key28": "chny3GCaefjJDY4WLe35XwyedeKE3R3ipRXd6ChVJcv7BTY88J3sPaiyvFRbgnYh1Dx9AL1Hoaixq4CHnKebkBb",
  "key29": "jviR7LG5pRqVYpHYrAgoYu4yc4snuvRtWfEnjZQB79Hcog3Fex8amUiVAXrotVgrrsMbiJ5hUmrYhj5P1bKNh9X",
  "key30": "5i7YvXk1smCpfko6DqgAnncv5zY214cC7m6iinMpne823j2RV7EQBBf8RyKxS2VLj2StmbTCCHPoBRdRn6UMsg8P",
  "key31": "5HGLDNJze9cicGTpFtK6wybacsm4L5ip9uJj8BN822AShwfBL5DGEDFV84sMHeRCbdFLkvuV9hn4kmFQejQzthUw",
  "key32": "2ncv5pu8HFioQfvuNRiDwBi7eEPsoTzSePv3J992P9Wew62NDz91Tfm69Suq5TptoMt1aAWfExSDRmH5fVXJjvuC",
  "key33": "J9fVnKML11m6WxhPykpyHZrSe7GrtFCsRNS5TbutkQG98QtUKKCssquucuGcyWpJGNabxjSFy915hFWagxoRamR",
  "key34": "2BCDN773cLyQT5FYEekYohWY15aa9p9MERXXHBX5bvRk1AZ3kyYwhnxdrtr87peSKt4D8nBrkF86XpFEgdFBuzW8",
  "key35": "41M52e1v6F8bTjthsRrx1zNtivMkbQuzjgpFMpMrbK9LCZdMi1tqk1u7sd6PZL7c3Ev3ppQiqofLNcMuzrxmtSeo",
  "key36": "YthFeHLdvkw6aJSquexzqhspTWbaRujEhq2TaxKE1ro3HJNBRXsPtYDzkiVzPfXQGbZnTBxmZMRHbqszVXHWuy4",
  "key37": "3xzJVVj3V8tjLJVtojhSqFEMi66a9prY4t9jQinjt431YchhybmkamZLkRaTQzriuqwfBkkzMCHyYPU3M6gzZ16",
  "key38": "5B7hYh6LoZqcWyURjMLz5C1tLGHhnsMeFbfzdCWXNjZoJiM6p6MBnyZCRDbZUfLhg4pyvkXfQpQDZeukZffU2Fuo",
  "key39": "2d2dAemXn6grUGL3dZokvio9VVS5Wd4ekQKNZJjjyVw6kZ4tLPYM1z57f9YiR6fthJL4MTouxKb8mVyNu9Qa5t5k",
  "key40": "LmgWm1xuH9PYTD5VkXUC2qh1Civ64itz5BxFxkycsrePoReyUTiUdKTSWJaVVgFMa4y3jGJ1vwAAf68MVBcuGzn",
  "key41": "5AkQ58EqZg5t5doim4YfHGk4pdxhYzjKvpMp1E3Uen4FZmaeSVgSvVjWm9ShSxBZHnRw9sUZVvPc5NU9jEzKyn2j",
  "key42": "47FJ7bemnN8VyeF49qxkvhBZvkuAutmLC2dvFMpQ6aDVRBKt6sVgk9PN4NZCSKPFZje1mWtc65W1zfF77zbeUBcG",
  "key43": "B9ARWEZH9Yxtxku2uLzrhmzXGQy9p1Q2ktJqikq4nGBmuMmMLh6tfu8WBPvBbZ6Uker2RGKY42NdP5XccyH69DD",
  "key44": "5SNYNdC6r511VtYD1561jBXADrKQwg8YXrhKZhKt6iuXZkP9YZewjuoyEtDFMvbwFxkqcfxJ2PCR4GHVzBwYuLr2",
  "key45": "61Bh9u9UiDkjEMhjYkJFtNDhwzPSsQoYR5VnNnFQs7fN6AbfXzE2ho7NDXK7uQmdfh1KfVgjPRY5zdNT4bpUBguX",
  "key46": "3bkrtpPctW1T3SWyfjTQzTzbTN3jcu6x9vK8puz4Z4Q6FnMeaiNbY2YrLKeowbdTe97urVmPbsBcLNsTphTTaFkw",
  "key47": "3UvmqoCqudcatf1avdtXUD9HZ7FWjBuQBhjrwYd6jGbMRPfawSZVV28t7GQnpRsiZwg3caJk4cxWzQGL6Na1tcGU",
  "key48": "3rdbMii7WCjv6wFsCKJ8ttqRuX9G8HaDWqKKCoSPc5SEuxmytdXf2VQbsrXM1tUGmWLsyxgcGjoQtds9T5XrQgeD"
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
