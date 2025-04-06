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
    "4zn8mmfvhpNZvTRQ1ZW7AYyFLStwEZzDuAdB6s6i5mxjrW51NPeLLu8m9274LbmMvK5gTg23dVPqVNrHcBe1BVaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYiiXdFgvErPRhaLWueNpLm1ch6BFScsDPeYARFeoVioPEGsLaBZeuqiZxiqPhVgGQKU4dfTPncLKK33G9SAeh4",
  "key1": "FYPQR8HzGg6gFon2pccRYdJ7vdJoy6ZeB5Ki1CoSBEUh1f3DkJ7KLbTXd4zKe23LLBAkeHMu6RaWLzgwHZRu2gz",
  "key2": "26Cz7SDsnkvbgcQbmctKoz5Ac9mptE2HWXeaoieVdDfNUf7cJD1DWwYGWgkyB2Tyr4boW4BFvLHByDHHyB6qUnMe",
  "key3": "2qZ6m3z4GQPDK377skDyJwTvKU7YsVEk1aVx5rgaZ5Bzx62bhWW5FSmVDNUdiU9dJoDAPcEEhBzSwsbFPy31bK8p",
  "key4": "3SekJDcZEqmGe9FJFLdW1rDEYgYJqaTiY7cV5EzZYGGdhjLwUckyM7vMr8aWMC3jBxJw3KtEoMuw4tee69dvkkKs",
  "key5": "eoUWCKsEFh2A5mZvqBNJsjSVntnQ6jSVYEwf8HCVhvkV4f5NAp7zycE6ZoneJzNrFm8fa7f3a63JfGmnHGURBQm",
  "key6": "4FoAYsKMaeURBz5WMdSmJbK962vJjJXJmrmwo3EWcnJrwq11CKQhnTyNq6BGkD89rxgcyaps77JvKpcQsgX23KDU",
  "key7": "28q4CnVPhrXcaKvoPpMPKJdpTb7SMUAFqrwJVNyVMp3jqATAjKUzNPVkDn27bh4Rbm9ufr6XgMjCsQvkYEME1rzk",
  "key8": "aT6crkj1RNdn4wvty8aauecYh7QwuoJRvdS85nXZBShwb155qsHuFTstS37LmEhq5gVhWmpXPQCXAkt4tyTJ8pP",
  "key9": "4KUv4WgX6XFomRJMvhkjC7awAFkNBYsxebiMLAnD9czts97BxFFC2oU5dBH1ZxLfFyqEx73fZLFCgDFZvibS8YLf",
  "key10": "5fhqVdKCJHLkb7Dfw9kkRVGScBEkv6eqDkYFio1UqLxUFfXqy3Dc2yhBvp51gzaJLA7HsiwMFspQA89aphddd5kg",
  "key11": "67RtNPNHDPXN3KDXyfzk2A86kC92NDvxgVyhyEByqSmx5SV1MRZfpGn9UAh8N1R6tkUKgsotU6Canz1NTzRVZxjE",
  "key12": "4P62WXRmc69B5uvMYsm7AHBxXRomponJKxjq2pAQDFMboqpX2drSMquVb97hsSmo88nPUA3Zv4Bgb5SMmJi2ca4X",
  "key13": "61Ty54s9btgQrtRri2tBzQiLh4ty94ER43vdEwobATXGepwKde1Dhb5TQP9A7uqXmRAstqFKyocH7c7yyk4Pgec7",
  "key14": "4xS8AzKqETTbgbAERJJf6XjvyUDi2CTptvbz3vv97Ez1hrKMEpk82gWPERQFureiaWqEMhUEy18XqKsTwsu6F5E",
  "key15": "Bh7Zzjudwe5j7uChhhNw6hoW7z1ScUhqUWt8WLjzFmL7emV1RDiBvBKQYbGFXc8qL84un3ycafY7E8mJifJu7ng",
  "key16": "3tC7XS3sKwV9odg5Fdbk51AqkS7RkR8E623f1AS1zws1hTN5B6FWqkbbbrEajowDcGBiGrFepBC6gWyz5sXYFPVQ",
  "key17": "7EeQJRe8WXdJ8XQoh4ZS46PfgCTyaUzfDnvxqmq8wYHWy32Zxy2hXrzHZUhYFUWnJZUMurHR91cQBMyL54LeCS6",
  "key18": "5og585gV1rujrPABmCzJcNRSxwgnQncBEMLrAwt44ryvfbbfWbeBbutsQ6qrF9xpiZnwxu9eSbz1PHPVu3yxPqzh",
  "key19": "3U9skPdXWM571dmHGqwtAxPMennG8EhScZ4XWCpgqUkMZJ36bdgkXviHuHkcMJqeeLQpSpzAV8XdShvMt4pUBZcT",
  "key20": "P8YfzhdyA9uh9AEJMr8X3dGPg9Pj1jnxqDyi9SKttV3enSuNkrweEW5FdEqAB4AwiA2TqHpfSjpSddUEH7Rr7Xm",
  "key21": "4KfzcTtZJSFjuTCmTCD1sDeoXQevj469E55nfdFwrGEn69amsxKwZA8FxcJZtunSqTv4k9kXEN7BomgYH7rT4ZyV",
  "key22": "3EQUZM5NccqRs774oJJCddmTxqHc2KCJr2yKab4qViuVACY3k8G7sZQHYdL6HhbFUW5BnHwwpcTWbUvi5EGGHuWH",
  "key23": "4Ez2rpeuYFzavVJyAfwGQRWsXyGY8RLyQ7gqwg8UCc4ggc8dmMtcRm75RjNaLu5H5WVwcG39Q5Juz3eT1zWBSrro",
  "key24": "2yYanwuCvSmvbxrFkRYuRe9cMbqcV59FVv5imX4G4n98URM5kfoLDhwJ63Y1cAxawKF9kYdkZ6JWi5LawMoD3CuC",
  "key25": "3kgxSY1AkjogfsEDetCdYaueNa2xNuvDoGsAPFVSHt8ZsvCKjSJ1tQNkeUcDX4WbKuWWSPfJJoFrgNMZtUYkfFKx",
  "key26": "4URTg7yC4iSe85UEvM1DESAtzarLn4RDcgbKsNUFaX3jsaNpLjsKv7qczSxUyFFSqLbYmbzbUBX5XSxxRCuWRs2",
  "key27": "2PUFYQ4WGM6VKEDGDuWhDKVEtAZ7iejW9L4TGXTzTJHSTUYu9Nt9GQ3orUPwX6q1RyQVkYj2fVfvutTLKkjyMcsX",
  "key28": "4qqHujWxPkDRhckozAS1inBeK8CHf1RYeTn94KH7ikP5BFpBhhkDiHBpacXPnLFRczEPHbHkEAFCz27Hqqio1tEq",
  "key29": "5XQZHkU31YJZ9cYodHYrHCfzH8WeBvNVyt7JA1kAPvCdy7WVEqg4xb52Sup4MDyxArFFqzgQDudg3xNuZueM578Z",
  "key30": "3QDTGVTshBTqGNVtPNkvBL3qCBkoJ9zkXoqAfHQrhTdLpQ1CmMzgjHbu5bjrppMsnkTwDzvfqU63T9Ai7ek9gFue",
  "key31": "64t9JpLRp6M55m2aW7dGL42A7aW94MUrG2qbEJxqUGakwLpGUGVGE2zVeoT9zfJvhwFWsn5JGRcHjGGSoWpzQSYp",
  "key32": "2XXRA9LUrP8CSz1eYka41niei2UVqJFArSfe4XKmvHa5doLjK9fro45pqGfEfM1AJpFbHEtxbtJ7GdeTtDezTs9Z",
  "key33": "2qJbQyZidhMu1TvmQz3NcD7fLgpjwD13K9iqtkxhgJQky9G44dTbUyXm1cwdqfsFm1j9HJB1KXcfAQnqQoRwQcEG",
  "key34": "2C6waz5f4qSqrt4kxVdUfj6UYuMUQX3d1tNYuA4jnmjjE5pcpBjdRPRW21TXM5fibD7QAACHBkSo871dbAKVAy7E",
  "key35": "4J4pNnBzE1oHWEBavAvC4PADguUsUhoN9GrEXcgQRMsndpNPRHCoxDjVfvCq7duPE2QgDgHQNuMLAeBBGGMRmWJA",
  "key36": "2U6hqSgpcYTi9umGxcw871n2E1gqq6XfX5HEx9vYEtNFXpfLcvLTenjBUAcu2hGZgcSb5Cb6w7owNCysd7BJLshy",
  "key37": "4rNz8Gw2j6TmwkxSEnanoPFVscioMqtCe3jAuqMGgZjp3VQVZmo5MTGgziTVFPfUtLXuSNG6x8asHmNG7wP84iZx"
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
