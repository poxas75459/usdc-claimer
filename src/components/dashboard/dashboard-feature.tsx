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
    "4oRsWYkh9BgLGk6d65xjJXVgewfuhTpHAv1fjk1orJ5Y3BGRUHAhHRTmeouwSpDT7ubH6v435tGAqkcZ4KpupTFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGguYtogdCu2zcFrZieCoVQewUR8kKBRYUyUxm95DM7EeSKatZMizwZ26DEHVTkShQi3mCiHiK1ZDBpZ5uqEgtj",
  "key1": "3dncc67PxZQdvuKmDxXLwfbxJZazh9pwou7E5mJ72wQuyPgZ9HA6e99b3nJRZLuyM8H1zZ967pRjYLv2cQzksF25",
  "key2": "2r2FZGAcEomsc38EHVyWqqYUuTMPyjenPtEWH3MZAgDT3wskMvF69kTHoc3xm9VUoY1Y5qFxhmnrx9iTNWyGMSz6",
  "key3": "34z2rLFj7CzguEAFaFdvm7qTfduXWvWNHjfGkhzHxjTKiLj54upzbTHqFbTmWDmJAUMF4YxuTYkcwMR4ghmghSAz",
  "key4": "2JbMEN1RuCHBSCUTgTtAF9jjBua7GUKGEFWEQwGr2kPNUKh1oZCTev9D68npFvKYEVAa3E5XD8r7xxsHxV8KbyqC",
  "key5": "5gMNmLkEuAqBDdcDCwGfpJWachJJTY215WJqBUmXSyJfoneJQsng4h5qNL2k46kx49mJNNzxJ8BtrczezJgHuFnD",
  "key6": "3DdKviwCV1Qt3Fgd2qvfZeDr8vRtVi9QcfqimJtuXBQyXWP2TfPaER2Kk6S2KsZZTjBPWZrQoJRB2sYM5H6VcBHj",
  "key7": "3jqJpS51CvbrToUPp4D76dYR3sL1WX5QRocee2RZByfjuScHgRQAhYQJrSBuovGT29kGwZ7hsSUeXGmx7HrsrpyQ",
  "key8": "y3sDvnRAA5W7q9oBNKBKsY3RymAmyzv5yUCgm33k8KSA2kA4QxiDb3u3A54RR1kvrVSJxx2KeMUd5c9noQ1Tvmz",
  "key9": "2R6enpsunDvU8DZy6jpbbkRpMoLpxriQjZwFScPr4swhH5J6TKoNoqExvZxi9JBaLiybK3sB9Dz7FXSQtzAQbTt2",
  "key10": "62rwbKEBNhQ2T7pm9CwEppcMZmqrFmexgfi9zT5UKRNfenMEeQ7sueEjRKg3TzszeKjiLfQ7PQAAMAuLDwfxGTpx",
  "key11": "AwCxNCJsbYxD7TsvhXqaM84vneWRAdo1Nja82wv46Azce6hY7v4pwdnzfGGp49K85SKc3ZeWb7XxTuj7ARHRsxj",
  "key12": "PUrCQapGZkXzHPKKogUW3Ak2mnrnV8SvyKjuzts6wc3FzqoGQGZRcNetP5rTxohQg3d8rwayaQZiTsVGkg8kp5Y",
  "key13": "4b6oaS2TSN2dq41QkhkVnvkbJsTNYJ77km3HrrpK48fw1Fz9a1BjTqA3Yiw9YA47qTCPQtvhFUQ8B7hPYWzHgqUs",
  "key14": "2oadC7m2ZgQwrzseyRAwLUYqx5QMTAfNkp4Mb3fFhA3ah1p1DX8pVV2vM7iWfkGoDUYeMA82FhxGLE7dv9SBzeH6",
  "key15": "2Z6GenWZ2dQZPP7yoauLojNVUsnyhSXK22cgPKJLfRMBE2tKsvpcPM2i1PdzTVdSiNXPiUbpHmYjraHNe3LpoV7y",
  "key16": "5kBfB1zeFFqTeRxz4BjEuQki8QTQeUcJ5n5THnphNTrNTF6RBaaAh4ot9fcuSYNDmJR3W6fQw3LkYi6Upf5cQ1Qd",
  "key17": "2bpwH3siKBDpR5sQAQCUAVLvhmwKj43Tx89b1ESW46aRqhbCvT8tZURCouhGU12NPt9yUG2s4a8FiLucX3AGGkXu",
  "key18": "nqrssWdNsWEaEMcv1wETkBTHPsbQrzaQaXfCWdHJEk29d5Pa4y6mdQaFxgey5gMn9GPaFJbmqZmzrHGjqz86qU7",
  "key19": "2bvRbihZNeUNXWhd6XnDW9FbP71CjhhmNFLAJUA2pjVqpxvEfQHnxUaA3HtdWZLGudGFRJdP8zLQPhWc4UJqGaZp",
  "key20": "4iHpTvnNYnLbwSX6QLGGpH8G2LZi1bgRiZUHJHq6v6LAGtpPnThKdyw6c76P6a69k3ZfJxpa4pXZgkFPxz2s4Sqn",
  "key21": "3ySkTgDaXHPEUpuVndM58ogvimtTVKSD9TPHbS4oZJ551ucbd2b3hDJYwYnmPNzessE6vj3F8okRxQh4Lekf47od",
  "key22": "5W6X7z6wsrdaZVNXPezNJ1htvxZjy9XgQh1sv1ShyG8qFH4BJM1Y6kDkv1LiDwWUucqsnXtkb3Uvvr2hnGdo2LpC",
  "key23": "5iUacNtyV8EZ7bg6YWaJuB3DzQksHMy6iT4DkY3Nj4YYWiNKdjjNJUmWzcw6eymEvkj6vdtWvKCQmTpeSJg2psn6",
  "key24": "4qConDTrNnwUSsTAABfR4nDhU7jMfLtmU7Zx3fMfpyjqE93Pncc9S5qGFEsNmww4Te8gYyxAPFRHDNZVg9Env1Js",
  "key25": "4Zha4GDX9GRoVRAb8guwRWHoZ4t1VJwA7nXH2yEdtB7BeCFTphbeYqa37Cvx7JpqJcKpQwUyVxFEAzxgPWK1Hpdd",
  "key26": "7tYaRbXhNykMBcm7XDvFUircLzb7XLbqqwHvK2qhyrssJrEVCwijQGRAEEc6gufQX39zWQty3QvYUSFGp6sZM6M",
  "key27": "3jdTs3uhkSy9RcCoDZTgMqiyv2KiytAKtE2iZhTNwf46vuk9dLJpPSw83KJSnXA5nzPAhJvr5ACitag7oQuYPEov",
  "key28": "5fxT8eivRDJBgS24rTEQmxzy9Eq2Yfo36wCdbfD2aiFHRixjYPopsuetaJBr21ZQficvwHKXXLFP69EiwRKJHFaR",
  "key29": "48jgfSXzNBbgy7N3xbjwLUuyLZzosmGZTGMkALBFpWa95vDqkDzZhQFmXkcJec2gqKKueLmtcMeeHQrYiNzDHfWZ",
  "key30": "45iDFPJSorapZBpFTVBWgTHJADhQMaLk5CVi7hFfoJ4LAprzDB9DuvPbFbr1Z5vknHpfw6yjBFRjEMX8YqE91ffM",
  "key31": "5Ne81wnryyF3AMtwen6WTrrzc8vamJaRq6ZaCRhpHuSW6QN6VayAZhBRY7k61J4eX4tUgrkL4zKZWA68AyHAKALV",
  "key32": "5Nd5pSSnc4ukfNZDM5MTcHnS9njrRiiwfhBdu7vDPedL2K8Pu4usZGQMCSjpLmh5Kaiu3o42qzsqdG4rmrBpX3mH",
  "key33": "2dFcvvCDoUDv9cmgxJQ1TkhnMAUtPHUduy4KyA2B7vxWTm8mmRoAMRH1zM2BvsshTUqP2jhH4eEfNv87Hf6qEkTz",
  "key34": "4vDAdsrN13pPBCrGaRB5EDL8m3vrPEJDHcUibiJv5xzNGTxsybypLAL1KyynGF6XeHD6xG8UEW8hzNt1i4h3mUYu",
  "key35": "4iBwDr3cPUJVDEw94G6EKyNgCG3Dys19t5kDPSG8mE7pgKuP5zz9xCKdPiuj1xQ8aVPkjRvZFp6AhFPsbsPgdGVn",
  "key36": "5XhAYTZjq5t3D7tqnvDzgQaF8P9BPSCczSRseLwHMUZJiVqqQQAqg8MSciQzDmFVaTfrms5ipixKfDhhUD9M25r8",
  "key37": "3LkVXRrYQLYAmS9nqiGYQLPaKj8AL8UgqhRkhYVYsTW3RGRacQs9XwAdmtEW1e4ySKSF2u8sXLGQFYCviHyCiA8k",
  "key38": "4JdP7JPvofdpby25Buukb2At6rET6thjcVA2BBYgtt4fqFawcYorfLqSXrHsVgzEkeDJn3jkFMZGTx8MP7as88eU",
  "key39": "5wMfLatihEMgrZCvUtSNehRTduPaHbojEP8LjxRuNNWcDSGB2SJhtciBeJmyTJsGc467LFKpe6JE3mNb4AyrAUm1",
  "key40": "2eX9L3XkcZW9Vezt8QHdhpuMguT4rS7ohWtU8aikSbUNXJEffZWUyERWDWo4YprqV4XvqXsBXRnkVkgCfRFiaB3H",
  "key41": "2kMBdzGHRsSvBwG2X5qesCEGp6zrUQt9G4BwbcRhzugS4cstS3Se3sLASBXud5tSoQF2e5fLgQ2eBaG8bxNVVu37",
  "key42": "2Pcdg9e6MJfk2vjq162fhW9a38qivnD4nFdP8tjhoRRmZqdZoJg7LhkPP9fFpX1uYjAArTBxbuKVaxGQxbwySzN4",
  "key43": "2XZw2cHjk4yfGegdV4b5ReeXxvowJWnxKjKB5kuC9XGmHj4yTy1MyKA8vndpJbiPwAzePjJK6wV9TVLpMaCDgHL3",
  "key44": "5bdVgmC3AkmzuSt8g4GwigYKxkWSXKrCvtkmYxwN9Mi6484p1DtxK45ZaxEAtVDXjCoYnrRxgqFkMojCpRJGKvmP",
  "key45": "4BKWiHSdZcbcV4rsU9ZpgtwTiTVV61TZA4Hr9iXnbcWPkXeunuAqRFE5T88kEqntwo9HuV92oLs38zoe55Q2eVAu",
  "key46": "3Q5NGKpqVVinEuqMY7gWCfwipQNmVKhapiP8enxkQzz2Nmj2Gb7Aspf7PWxKesnHumiY4uuyA3fkDJS7zaEATeSd"
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
