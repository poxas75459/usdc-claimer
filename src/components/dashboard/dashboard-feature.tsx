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
    "MPAF2pJdnWL2u7kjmEDUSDm6fFJ4KK3kxmhxLRHYhkDRqvA6uYi9g1d5KYS5XMfQiHeESwg3tkeWR2iZbQgnFee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4kra4G8ToAGt6wTaZUFH59wTeQ2CoctzBNEg8szDGaryEeMVJ95xQT7BFp7VW1vkg3Nj9mhVQseewbyWZXDUin",
  "key1": "sQKMX8bVefjurJa6322T6hRJbYYm1GGQWy1kT4d2D5KhxgFtpy7RjFkVWVuXWwFJpMG9gJk4mf43vZ5kLHrgwhF",
  "key2": "4gTgYgqczPuTpamKKP9iH7xTZW2yasF9FinsRNvaGeEtQwB2Krkmg4ihC5WNgdxP5b2xh4ZT1ByNxbLQekuBdkzk",
  "key3": "3UsiXh3aUmhSxtdc2kEVxQXUewLCBYAEa3hfcm5qWQJVHaoPPCNZDtw9kK6ijfkb13QNpNPY1yANtS5M2vohvrXw",
  "key4": "2ASF8wPMR3JAVdLm2q82r22je3TvHjmQAxFNrAYNDXNLFV54jAbT89xDasQpu87JrmxCx5u5VPp6j2rkvPdriLw5",
  "key5": "5cFDfrhZX4XymMA1KA1BuHYSeVSjZAwwR5TFnJyne46nPeoHKApinejPUuZD8xHSFR1vBWA5T8tP4cDJeLQaxp3k",
  "key6": "4yiHjak1FoZvmAubXkTVLGGQgyhY4UqcWU67z8mkeMW3HkH2H4ioUd3wtW8kJx7dVr8yM6Ef6Dqdr7qj3C9Mhqka",
  "key7": "2VPJbn8XW2yvhZkSRGKT9Zjc1vyMFukkWUpoKmFCGrtehd266BnC5U2Mxog2Nwe2a82x7H8DqDEDaeWbS4zP2Qgf",
  "key8": "Vpgy3RHoCLAbCYQVCEqQJs7eyJXU8ouwBYxAkXkY4W996pzsQmWLReDS9h2XMdKT82VtwXWiDXnqKQ4EG27qCAC",
  "key9": "5MM8MFU4HDoUF1wPcRUTTEzXxJuHj9JwKo39xy99DrHvek9VZ8UX4uUuuDYHiUCND31yun2Ep6XPz221wdTdhTaf",
  "key10": "5hDARRepgVsyXJQU9GgvuAnPmBKbRVypMo7RuoThC42fhjqVFHdVRptSQYcKbZdN98Je9BgpLgwAPSgmo8V9Krdo",
  "key11": "2mUGBeATqkdk4bYhawKa33FoBebrzwcCLPNvSH4AtiFukTJufRvsfArs3V68vaaEAgYXduuA6iNT8MvzFUFqqk61",
  "key12": "2wV76Pwvhrm1kH4gs5ELQChsU8TdCLNS1muT3p4oirEoMFoL9amN1N1t3C3v6aPnpSP6KqiAuGgJWDTxDZMqPBd7",
  "key13": "gRDUFnYn6ebg2zFyvc3cS1mkhML9XazPcXv6CdtcSyXzRWivVjPLT1JW6gWxYjsYxrKmb16FTD5BEMWvF8Nt2Vz",
  "key14": "2517BdqSHS8HxdVDxJHRwQqK3JVGJzxah8YBKPwVYiFV7iJsMKaAtZH8UtYzqirwrC2KaxZERuDxuWhUw2ytg1N8",
  "key15": "66GBpHWqBsufBvWoMgX5bMQSHZRVLc6UTcYGWWbuuVtCo6JBvZyUmiSwGwxuXG3CNFJs6zcofFYQHfYm2ZzcXrBZ",
  "key16": "dLu9vDmx1NZkaXzjH4HAVKdR7N3W9tLdaGuifzH1fffZQ9oLjRzBTN8Rtfd3NqEFMxsKB3r3X2F1rYVoW3ZEtHT",
  "key17": "oiGMYVnn9jJuVU522cJ1EosLuUeNRn3bPNCn5hRbcjUdUkMDaM6KR4y6tN7rQ1F8VjsGBGTChiEseE4di7akUSf",
  "key18": "5MFBhbv4GwcQxtczM2VyGyUDi4p8DVwjrGL8eATB5jHbnKs34wvnSAzvaPRRfTMPLSab6Usyuah68vq2UnDEcKEW",
  "key19": "37h7m8Wf5mjR3oF8L2pg7WcLeVs5jHThMf1xg5E87QGMEo6wqdrtgJk9A32uq9ZeS6cEYxhaWiKfMjHhGXnfcNqS",
  "key20": "658a77eeKZURtF2SGVHQrEEdrwPaGHxvgpmY9tMfWd92RtCNikGjXuL7gAXUDtmtfk6wpc6eu9pvQDKo7N6HRWM3",
  "key21": "5bmqwnaFgxGK23yUUJ1JGFJMVzuyMaG88KhbwH3ws5TRhKNffnW8aTpZhBY7VpzGWHHgk6vxZEaNDceaxdtHufeT",
  "key22": "28tKXAHommzz7EqiMiesB1GfwVD7rCiF17tTkpC7sDdQ5DqWfFVDS3Nhn5bQuPJgiaxjvRNLtNVyCL8kC881RFTX",
  "key23": "2RSzSydT3qLDqs3Zmie37PaygHBGNPm5DQRYfojAxVfc4LKsRgJ138o8trWiia6tuuHip45cZL3HeWxu9eqLvo21",
  "key24": "3vtCJJK8fA5etAF5ZgQLRcE1VL38jcKHL3ZkvJntWZ4sHZaCPC2rF96uq83KwDPYxrP7Bk9jCLoaEjbPHvxdRfR8",
  "key25": "1c84dSwnpZyCEgBxx7LAXQm386c46VKaRXfKkw6YBDnqNmgLAmeJSExBoWbug56fQQM56GxNd6ppE88LXxv5ATQ",
  "key26": "4YsBAJvuz27ZL3X3j4zRyRHZp6iLuiAyMKy7xrHad2gJqHhqnytwLj3tPmsMqzDtPJkYyCTdeFYcgKp74pQtgqWi",
  "key27": "5xDpwrAgqTn7VDEUSpzwgLQqwx91M3N2gdrTCxBWBVBZW5t937dLxXbSfqbac6cWYkFipTLn7Kdo9SWgz612qsCB",
  "key28": "2npbwD12GgU84xDz2jWUWShStc7ULwsskUFFk1RgmiaUnTkZYsLXwpdRDo7PyoicnSirz61bU87D4qAA69jL3WJc",
  "key29": "2vEo5mMJoSnk6VSPLkpAmGDS7NAP1QE1vyeBZPXPZvNx8dmSsrF5eCWC61Z2MYkHTB6QhP8Kc7g1ffYZCAodaKMc",
  "key30": "65eynL7ToLkmWEGUWSBs4DTD1mR9SfkL7RF89SQNfdrn5pRqFgt3bDSB4BJi9aki42XHFh1XJVVh2ZGuWkCL8KcC",
  "key31": "2uSF8aVynbqP2xMUwKeke8e4csmJG1cEtyUthdAQaB7iBSjBqCBQbFunNhhAStAjcZHXSGaug9FV7UMtuwa5a88G",
  "key32": "m3wBMXUjHycAkVraAnbPqeWC1j7S2JenYBeU2rUShf29bz4vGEmMpv2D9GK2kvdYBkLAXT1mTbfTnQizGQczQJe",
  "key33": "28SBVgotnqdtRspLPjgC7hfFWnh6yR7ZzLLedinTi3ZJmTUQ62tCcnQawQZWvSZqgMiC6VDTLeV3MVEizNo63eKG",
  "key34": "UinLviHV8PwePtHjZtT5PZzP6XZLaK9iY3tNmoSgXNrcA9pyCpSwSBsYAZg39cHTBXuM6wM96cqxvqfkihfwntQ",
  "key35": "hP7ypkUhhNszqhHjrj5M6nradZXURQenfMNCWSb3rWFMTfTuEbcGNT5uzspDG6B8ZJp6zNfdf5zxEoMtpMd3e5o",
  "key36": "422SWoNSC5oQNqoHkjGHZkTiWWHoAeJ8H8EZCPuEajy69wGyLneaxuBHhQRAAV4WvBC9pShraWmSptSdYAYwFNxN",
  "key37": "3ciexvmaa2QgcSzRt9pg3Tk574fAkpCaVr3Ttef5GE2vAHz9tpq37p4spKsh88mEEFaC7avJknSRjnimt6DLHy1P",
  "key38": "3U8p2w8YNT6Bg8jkEaW9MsaSa1dLTHvEtgDPDVr2dmkfUrMj11uk8G3vVz5zinfuk4uQHA8BMDAVF2WPxeVvX8N",
  "key39": "5iPR61XFEj8ft2cxERKEFK8MoM5yPbhwBRKXYqDpKJErn4BBstUWBgmVjGoQGCn8MjKejCUiLLQaMFAZ9HGeg8bp"
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
