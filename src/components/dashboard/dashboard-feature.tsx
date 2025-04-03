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
    "dNdsTUWjGkFRVCRfEVMFR8zwrFDn4NxMV3PU3653fFWZaapQZNYjDSWtUDfvKqRytxtBYsemEk6Pu3pob7WjnhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArjSDMrWbQYv6fQmgro13q5sumARWs6nj1ZAW3ABXwryat9wacanREtN1ewXpbGmoJyWdYAefWnkmeN8Z3c63At",
  "key1": "5SAUQKkMRBSzNPCGFznq5nVR8wc5iL22KGx5fGwxZjXjgAaEha1d8fCJcycbb7EEFkMBSqEEPbT5X3jHj1gAu9e2",
  "key2": "3hu1U1Uzy2sBrnGHVXwxbBNSC7SaGPzE81EUNUF9N9Yn2prn5qHPadpd93TwuKtUdz9khC9sD9NzqDAHpp7U1Xy6",
  "key3": "kSgaoRiKJCRQQ9VX1VDJ81xeiPi7Rzm5tfMNk8kypW7LaPPqEAjwCP43gnVoZgz2k1Sw1ioYsrbmkYUoCKhMrvn",
  "key4": "4KZwJUV1ocmL819WuajGqSYYkWUUfcN1cz4SSikUjqY6fNoFFTgDxsDf1f13Gk5YJ7Xi7Eh6Z8WhdazwMGC7F39z",
  "key5": "64hre5vnWUFdp2WnCTJ1H8f6gfrECdUxPXAaxqrLbHUvgFmidkxEvo2eVuE6gEB9w8C1sbajc9PUxDQu7UeFzhwA",
  "key6": "5zZmPBLtMePyyrwDJW86ZX74nzq1XguYz9CPmhSDcjqfZjyqTuFEySo14UwdgvLkA3mwbBxT83QAUgMmBvgZUUmu",
  "key7": "3xTxV4GNABsaAhpjXSQNTcgzLpzPmciVR9YATSupe3Pkyf2d3bHPQMVC8XHE8EaPohAM16kB3GJxpQdAMy4SaWkV",
  "key8": "nx1sZpRshcNurkLnM2N4Y7Kpcn3iSAFJ3fvLMyxn5EtTDZXY2p2QqofDmDb9MUPwZyQJztkXEETzztJ2tG8DdqX",
  "key9": "332F2naAe2wkg9givzdzjcYzNZjAGYCrmUoxCeRtyhjESEvAf5X7YEePi9YrUb9gisknf2wpFZ9QDNBdNzqeVHJX",
  "key10": "2jrwouavFJUsd355cCioKTjw8ox1N9Lojt4mjhpR5rXM2L4M7MPPUgEEwDuE4thvKg2nTnvyBxXpR2x1yvUj1Mar",
  "key11": "4ktMfSWW9AUs3STuYtYSX7vtsNWyGtfWA5W8Lc321S3ngtLqVmNeHgFqXaWCsUJ5cP2EopUpYNZwiDUnuavvCQYR",
  "key12": "2coTsQ35aDJzqcsWpumzKYkCkMhNkY8D3eU8BpMfqdxiyJKaK6pD6mzGqoWWxdWLyqqAh7jzqzkWPhZprdMEz6Te",
  "key13": "2M7QcyFc9KvZwPcr2c9XmH8zr61Zz8w6xHnKVXGpvrpsUcZm8Egis6u5UUVbDVNynkYPps4G5qowANnX1V5zSeLw",
  "key14": "3hAUE5Y4otigTzWX7VcV8wJit3e1iTkbZCHaH7zE4sGtLX8rC1dZiLBqwSQpZ6BvSArNKuVAjikahRPUg7MvKUQ4",
  "key15": "8mhVNEDNGQjHBY1Au293w3Vr5QgEWJvhtRBhEYnxdYUQf4tYNrbvntT8z1ryt6q2iBo81okM23VGH9RcbeVwSkr",
  "key16": "2HiTh72cQTbrxzoeF1vAjTWgfmHkfaJdzDqJkDiWEuKFrVgRDpAnzA9Uv3o5j9iLJRZTZ8PyM2yJSwbFgY41qzTX",
  "key17": "2jy5q8vHp7HyrJjWNNCumaqwwKhQQznELuRhCk2QkTRWFnMUPZrvpKwubiTRKbzmuLisysgnoakvDwcY3HbJRvgC",
  "key18": "EWom9NHEjNxEYHJTyur5UeatxbVidVsTWTVevevw3avDw5e6fBKY2HGRZgSX5HGtdaJom2792DUQQV5raM4A8c6",
  "key19": "59u4PKbaHDgbeabv2TUftrVhHprm1pGtpCB7u7abhimUgU21Tb3PaAs9a7LdDB1nf1nQx5wUzvNsP8hgCng9mTfj",
  "key20": "46tdVCqhaVTm5gkmEuui94B7Kcekw9WM2qoj1zrrbmShxXqh2XGmERtJRrXpRAj2ua2ii8SA9isd8sFsffqgh3rf",
  "key21": "2AfThrbdSM54BcbdkDdZ4kDQNbG1RHTJejEYWJgVyvWe5inYxGVhbGygENZkR2HA9pVokdA7UgrvNkwpvxeyav6g",
  "key22": "2Sd5X4aRnh8iQQ4waLc1cyN8ep9CopXogoBDwyJvJJvWDaq3uXVs67FT887gNnJnbjPxdoqj8UmnBtcWGGMxbqUw",
  "key23": "CcEdC5s4pXqCAoWtvqgzBWAqfcxUZtc5uAxz7VwU54PrtsUcpBPDnR71XHQr4Adg6ZviXaZtpoUd4KbRsfiLu7y",
  "key24": "Dt8jJVbETbcfj3oNPoVniwbp88D6HhPSCdRMpjiaJ9garBEwv3iWNxiFdggyJdmBLVuQDvRqtPav9EUC9zPJ7TG",
  "key25": "7V5eSUsJUsjfmxgkcNMCCHTzVMCbX7BnFtGmQrfRM85zhcgdY6aoY6bkcaKVBiV1yTC4gzgggGAu6Txe6kRotvQ",
  "key26": "tNVpXpFrt2qe79U9HSJ4oGLVjHWzCgBhygsazzH1gAGyYah6B5HueAR8c8SDDWjz2zPbQN1FYMj826YoWXbFTo3",
  "key27": "4sqP7mC5RKwTDBu36TxxFRbUJAc1dJQadDDtng7WQFwuEFdkCRehydMkNMh4NXwd6uTv6Ae1P7N6STuq7r6WGqba",
  "key28": "X1ef9vKRLZgmhSFsnk1LB1ZatHNekbF8bmfbPH3rfV6sU7RgxSvUo5BkgimcWmGoDj9SbkMetCGkLYAZ9JF7ExT",
  "key29": "5q92aQKpwBCHkWDSbdk7x9JxJHNQKwf47SNoehmvSk4h7G3cW6wjfAqAb4sKprNeXa6gaA987HxWfA3U4qqtUgMA",
  "key30": "5fKTotgS3ecuNmy1XevJMUKHorBjUqhwK7ChYR63znDbPwGRuB1SYwhfVN6L1ZnTcb3gzXfMvQUzyeMWTYBN7W2c",
  "key31": "2FmrCzzTdwfJQmE8ixcjVQNJYqG2eiGPF4r6oPSctexyephyyY7DEfGuLYvgR2fLHAfuZnpxiGWvHZVHJckZWrk6",
  "key32": "2Q93pSsWt3GSMVYQbzG7BMb55XaMENdLRB7mmZpvbvJKT6XEK65uGxoEVk6tAK8GyUPFZcR5tUKxfzmoTuggoL6y",
  "key33": "3P9KGJmajLK2ie3fSov3rjWUmbzkyfgbb1pcM1DKhTd9hZnYE9fymx6yoWexXjmj2KomEbrRNc1CEU39uAmJe2Q1",
  "key34": "63qdVRw94x3HmzNcheZ98Sj3c9TFjUnLsb5NV4P8YXeGeAtvrci12mjwEGip8RkusQvMHw3S7Rmt253Nm1aNM4cS",
  "key35": "2tG96Fkq6kyT9XpAXXrNBFYeK5Kk6GbcyKj8J6CSNv6WLL7SRAAMcSs14oNpcxqhjXbQG8w2H2gb7ynLsrUkK9uS",
  "key36": "3f1BcLiihAWHseX5CZjzmhhc1fZDBMGm34668jbvvEnNk682ZYxRBXYqJ5BG1wmvAjeyMENbMX7gDwPsxyyfTCgU",
  "key37": "2jtzgBBU2seaaLn5vJUeCGdG4nbgp8NTuAiyVNCckXVpUTAUdZJaz82REfqJUD56oGvrARuTrQPhd3uxBJokWsFP",
  "key38": "61zVgZYt7MeUFTP2jaBavVccTLqbQ5YkUbx4bhMzptymt6LTDbPiYrn7QoTS4BHxnCaWrxjyrVjhgdz7XMxN8jgP",
  "key39": "3kEXEaK39FkV8fsMmYJ4uupuQ5WUDwVvovu9T6mV9Dzp2rTP2SnRHWmnjK9AF9RbaQAbXuahNAThAB9zY1qujj4r",
  "key40": "3FTLXPRav8ZMCHFViAbPVHSFcQAigBknQuVBu7TfVwbEnQ6ZAaDNbSRvrBYsDfeU8phj4W1RjLXg2hmVbvi42Vio",
  "key41": "2xhM6z7AsW7f5xb7fwdhgGZqPCHatgDfRnp3rc35Cw8uyTg15zqrhB8sPFiYNBsxHejQYAi5Sq7bcxLQGbjoEaGW",
  "key42": "zGrnXPzQxoedzxjMSoEfyHfupCjEdCBkGcdWP5kdt3qAN28orVzKa11Y7QPC9FQtTQS2LksBKcTMgSTzmTSKFva",
  "key43": "2T6f2RX84DzT9HoQSfQgqmVuuWoACFyhFMWF5wrNLd9t2WsW9CHoTBET5meEPscaEYkuTHavJmdP1VDQrExubrBA",
  "key44": "5UypCbEFd7vvY8ytKmofxpa7ZLKnFmRbv68vkhUMV2xwLrj1WNQvg4db8JGiBMHuwvjh8J8qJy71AWdmHPAyVhic"
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
