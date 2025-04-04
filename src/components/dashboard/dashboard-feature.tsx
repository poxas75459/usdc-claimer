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
    "4ugM6J1qMCb3pfEwAfF4yKyi2ciXMQqeuMCms4MdRYSc4hFvkyjKakczmW8hFvSSh1jKLeeUhopkjvQhhytAp63W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVLF4NKzWLNtDveQ4MoQcQajfALQR1F3HBtzKn6Y5LtKshUmyVKRPtLwuxvvYbcvrqfUVffEjaEiaVGVHD5TfP8",
  "key1": "5ff1Xt7LNhUCzEwQhSZJzznfhBrdY5DYnzWembMehubDwvWPGxUYAxzNSEgYZeZqxibRE29BJbumPTVdTSMzXfY4",
  "key2": "4vgfmpJfWXcHAShrczc4uoViSa1T9hrGDkz23zoUw1czeajVddVQAiguafDxcmFG9gD7QA4H4eVu6tpKRTZ99CDY",
  "key3": "4kEw65YSqt9t8FBxyoQpG4mPnsP3mdR7H1SpWPWB3FXDS6kDsQcsrygorxEf6fwbMC5aemEWDu1zMNEiT6d957ba",
  "key4": "4gBPtSMsJnRuZ93g7cNPmzBRnqJqkyHS53TsFhPbbQuLfYP7tFoyzoZ1ykUiUvmfLPA2cJ8YtTpjEWEzfwsU5auD",
  "key5": "9EdguPNbVRx4a2p1AA9wKwjdD4VgNnTXDNDNPuN7mtENzoXh2zVsqtzqArTU8bJaLDX6ZEzLaKETAEMqZ4Yhs77",
  "key6": "Jqid1Z7KuYFKhG7oS4G5TZJZHXZsdAsBGjBtGFyGy83jZ4GEV57YUJQMXhD3jfPWg7K41Uadfu4K18c4LywT4wf",
  "key7": "3CVBoq2tQAX2QE7pjp2S323dAZ7SwxqMsLgG9ijJSS6QS3wH1pLDDStLnC1rWAyHwEFSD6DseUVe934LMKiicx7X",
  "key8": "5BzM1ZuGp3qC1ANXUWgun9jN2r2ufLXrqQ2YtK2p2NiTZ19zzKw1oKYjQ9bbFvT5XookGUFhYNHZoMHGM69uDZvC",
  "key9": "4kb1in2bqjJDyww4kWZQzbMsoYcPpopH6uEHK2JjkmzLxJZ6meeC7MwiZexs6ZUGZ7P2CCxgYbj4MoKMC25Pz4eU",
  "key10": "4QZqNg4RyqVEPw41AiynioQuqqUS177ZD7Zy7AVzbeedNcQauwrwFhWu5CbbUQkk6wpF5YE7Y9FUicqurg5hZt5S",
  "key11": "3Tb48WP5GYsv4G3jv19xKuYa8jJ7GvVDY4E4JJp4GEtiitUmUK5eM5umUchwNUP44agfpZZEx8GrRK2abereX3ZF",
  "key12": "4Dw9eMiTep2Two9G6BTGcRAFCRSrzVA83JAMGAbfhRVWarto1EruFRhJK6BURS5raWq7jvq72gcgd6CuPe3K5mqx",
  "key13": "2NB1yt26Bf8KCNAuM8E48FrBhrJ8hNuHXp63ww1KKYhW4SAocRtqdirAvKsFmVipBuNSgHgTja6zLCZtCQLpVXGN",
  "key14": "5FseaCzpmEf6LoRfnTXZV5vX7MvT1RwcfxbkXXbKFPBkVMSp8X2sXNgN3y4apyNcmTJV3xY7SMXk5F7dKbsSGfcz",
  "key15": "3gTJtMY3ZiSkNKJnouJDvBPEKvAXGDzJFeovQtciLEGGXM5f9WVwkaPqUohVTSPrwNwz3J5KLUqYn4uqGw8qaUbp",
  "key16": "5Vdvr5HPibCdBL3R2VD5S2YhRa4T7XyhXhbiYJ7ehG3yqhEBgMjbCGk3reuvTmvZyhneN4heYA4rD3mDYhciubKT",
  "key17": "41V8YYSLt6hn1XSVCY83tHkYEFktryG5M5a3JtYDzKpt5yK64o7BigVHSrvjMUAPgRrHpaYEtjBdC9mFr24qZP4V",
  "key18": "4UXFDwu8eSPkG2zrgqrTC8w2Qo4tdoE8qaVtu2vHSHAYENDHWDHwjC22qTH8FzdJbwcmed81rtPQwjU1epfhYJnT",
  "key19": "ctvxQvouzGc2TowbrpS917G7HT7qR4LqHtg9uybKp8cbj3v6H3de8K6HLvszvffQUZTiJ74ufTqDuY2uBeKBmye",
  "key20": "3KHxHVkxyYn8AoQDu6f8a6pgRdvWrfwiQ3yzT7Tv1CD2AgXmqzBVjKVSYb9ygtom2iPNevpkGL8XDL7YRfWbfR87",
  "key21": "54rk1G7f9t8B39BECNNijRU1ci8inpbBwgzsjMcfN7eNfm1cGHYb9QwdfSw1c231u8GBdxeraybD4Dpnom7FRRrV",
  "key22": "3XTDJK6sooRrQ4sKwCqWzE8ExVMyouu7VpzMV2PDGHyWCrkXd6UK8yuWPZDJVyJ3UZ4pYqQRsuzpF8bBMPJTEUuA",
  "key23": "5qiVLsLcCzdhtYDkQjUX2CXHycdNjQ2cZwrR819xoqeV5f2sLtq5fmrEwcepaDmSMJpimfracJ1S4UG8HgKuz33q",
  "key24": "p1b4Ec1MeuixDyYtAddbWA2GB4imrPZnuvDtTyFx9Lc73yZfisTL6QfvoYhQv3hJjrHidzywxFpaDcuvcXq6hjm",
  "key25": "44UajZVSH2TdVQvCBGarRo1dsLvZRhuwBpPyBtRiWVoBEoci5QueeWH8Lg6Dh6is2fz8GPw2rybwswpCCqkXdWww",
  "key26": "26fDDYhAbDEthJz9KpePQGXbJyoG4zVjoAZGsidFAHJNLDa1vMDMJUQcLE5exkgza55Z4bmqPFK5kspRLiQZdVMA",
  "key27": "3fViXEXVWgAk4AqbAUf2eXucDchzLpfgdUGrb846pNdVjzwgLKJfaNYSCMoWRPqUnpyuQSE5GmQjcxKm8rBFVCWd",
  "key28": "2jw853gcUz6iKCm3LFwkx899jqZ1eHccMvXuXVFzbHKB4mJuuH1jSsyafyYzfk278ChBrinLWVpJdHkDSDmTKLPd",
  "key29": "4kDDoaSxcA7t9jSbTmWrWJAUZgJ1EMWbWiGaptKEXJRCZarerMu8v5NJZAdCjnCNVu9zm6XnD7G6HaGv1fQ7ztcp",
  "key30": "3ZpxHGDLc79Yy5isRpzmBTComaqLYgbo8FmqiWtvbnBDtZpHd3187ANJbKdBDxLdFXzezoggrkfrWNHMATpFaA8w",
  "key31": "3uV4kYBtTub74KnFfBZx2gk9mqKGSb2qAt7vvzBVjNwbwW8XcWKyAUfbMdDV4JKwoVDr9md51LgejiNn5opRVWdS",
  "key32": "5ychaJegVHCBvfNzzvHUKKdFnPCHQJsC53QqWudpASdmkDsZaVfXJVDa693phbY4ypgCMp7k1FVMuS42M18DCC6u",
  "key33": "2o6K1Wy8jWZ1W8gKbGqrD1nz6DmCxBkxfgY1MU435Wycns5abEPHm29zBZwwx1CCrXiwFv1nfxS3R7b8nN5pz7hp",
  "key34": "63egLAa6E2UFKJAPa9seL6tQkpvcNAJhSH3e5Wvp2zk3sa7xaJvEGCde135aXrdpc4FrMPQJ9ZFnp3TXfcE6vTz8",
  "key35": "5jPsRSLGKYCvbzcuhFC7S6QEDKNfVJkVVSiUZJH9A34gag43bgVPvNCWg8pEVZ5MTsyvXFEWHmENQEZ2ewmbm5td",
  "key36": "2EoY4V6B84Ug6hWmMQLLPFi2jmg5yycaUJ4NwWYm1TGwVEgWKu4NdsoSCUgDa3iQSaGbadLatFyARjFJLggnHA85",
  "key37": "331MfX4gLqhckWA78uCFBRgLmfMvdWR4LTQNBVgHFw65yoed6m1UiaxoBtv1jnXjSDWTRkyD9e6N3YF8zbs8nh45"
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
