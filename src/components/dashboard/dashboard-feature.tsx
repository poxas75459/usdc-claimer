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
    "35Ub44douBVtZPtRcRkNqByY6vxeYQVw8fzUqaKvC1udMXoWWtiC8bh2LDVMYYweksVAvupgo49o8bVWL9i8xGem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3swH5FJU7ZdXzujB4kKygRbBWS3aoFg5G1KqHcLGGnPhERL4c3mYfR91DEdbHbqUw7CzoptR7oUXSCXbcPGjyxeX",
  "key1": "3eSszSzPJkgTxvTQkBTRrce2VJvVvjp8dvZaBa1DUfrZD8L3BYQe45uWcC7QpuJX4GHEmdxg8NspsqgANNoGF1HC",
  "key2": "VuUifKBg6KsEXPGvF25nN2P8qvTMbbaTve5Xkjt6H5WmVSPH4ZUhsfEZfcBWBRTuV3zHUtZqSqtxYTRtwosf8Mm",
  "key3": "4CjLC8p7Fw5mZDV8VosAauybCffKQ8V48BLaSYsF6Ud545wxcmqtzunnPBppK8W1JSTXf8USS9mU4nmmdprA78k1",
  "key4": "3rorZHEmGAp1SkkGC6GvZdfcyPNEYzYGtB566L3aSKS6aDACn3g7x9hbKkQEEqxJReZhkJym2V2nDQq5TJsXx7AF",
  "key5": "4UPcJsime99Y3zkHsfJaGbEnz8HJR7duQdiLRp38Z8MhoKe9vkQvXUNNxGayPbaRsj7BmQwytaLcGqRkXEzEdddj",
  "key6": "3YC89NUf9uhzW9x61kYALf89UQJfLeSnk9kHnEAjmBACgK15gDwbkuj1j6iPiiv6GvjukkVoqS8X81dXrj3q3CHe",
  "key7": "4Ld7dBSGoJpkSiKE9YB2VoeeUhSf4bfzn2yHit1wCRCVsz8kP8kZXZKmk4S7ZopWeuiqRR6ReEMMkqiZ73ASk89F",
  "key8": "scw1YJ32hhzkMMFeB8AKEg3mF81nFqb1jB4kdjf8NtofgRtQv7QU9q4D3zrtdExefpvmDw6nAjCueoUBKHMkth2",
  "key9": "5AoKTQyZPg76iKfXAaH3PEQ9rD5qnrCGNbYvhDHnnR3QYzaQQjMhifXsT6mTbgvzuZMaD8orks7mmMwWPCF3Y7DA",
  "key10": "5JLpzqkDdvY3iERFAHxzcDJsd262PPNN4hoU1oA8y5RvjUQhzx9MchcJbz2Q8xmeq4EJxLKvtp7oDzTNjXxjHn8i",
  "key11": "4PcjNEW69jVBt6G5hETX3HQuaAH2ehXRfoYL3c1kVSVcHChuzRJUQCemLC59sfodcd2VCHUpeeTtEjJURZN3uS7",
  "key12": "4sP9MGPjqi52cMukXcLQgc6YF8xzRw2Ssd9B3NatKG9KkEQNwMYbJQQUcm5bkSyRQ1m66bs7hb35SfSJ7rnuy2rT",
  "key13": "4CXfFxkEPuo2ry2u8xjpFoeUdb7yJBpHwXBdhf5CUS6LXnHWZb1Nqq8tGnxFyTHkJz3cqQr6WgTWMTq1aMepXh6d",
  "key14": "3DrE8U7FtXuKNbaTdoERzNfSWEqveAFMVUc6xjcnyusBLMJd5YGzed4MTPHBm8gxyEJYuiC9ro5GtSZBJZatiKC8",
  "key15": "29YWKsCKJxtoGqoXi83JkH6KGS1awXobdVQanehTaWuQyN2mtuENrwdkzoxx5nuiZKDfNssETc3SaqctVUPe9isQ",
  "key16": "3YkF73UpSVCnezFhE85det25oyRtMb15NvsKjAQE8M1tjkgZYYeEzbhhb3suoghGdBN1hRdZfbSEjqZpv7pSswJL",
  "key17": "jphXRQwUSZS7nkD1GnGoiDvKT9yTRm5zkAVCVHf2v7owhJKXweKCsj46dd28t2AzsNNYfEVB1j5W1x2Q4ngZUDe",
  "key18": "2MVMwEM4taQMkiC5RUBBDHJa4rjkYxQn7qEU1C6SVQpgeRbQUac3j9sGg1uvXK7azA8PSorhoT6k62ZWHbQBtnH7",
  "key19": "2CD5EZprEBxogbiAUqQDeBVcHZ372r6ZMmo9pSTSxAqZTHkNBQtAZHXEvtcPno6A5FSwXxfFeYJNburA2ZYdajXg",
  "key20": "2czjCsHo6tTnUhuTcqmsvL9WwYPdccoxN5jAW6bS1zt8mBCko2rc1XAdtGwFdr6cfcyrXuvEPQw7wTXSmYjCYY4h",
  "key21": "4JJ56FRJ1Ln2yeeiNUe9bvTzkdTyKq53SxWGvoLnXwHuDhFR5KxK4odv4U3YhqBxu2xHCnefkZS8ne6PMPxdQpCm",
  "key22": "25NYsinToyk19f1r1s9eWvWsvMGkKNYteWNHWnJCCyPuypJXrpzvfskz91pd9egctN3HQvNNVVfQxSWuZPNyyDZM",
  "key23": "TUU3cPLAx9LRGGSgq2if6nX1XWph5GdV7NPd6CdkZ1sX16PiKqPEipzHN6u4HFX7KKW64cAiLb1ri8kGhcs1pny",
  "key24": "5SQL7YDh3qXqmegeqM5EdirCB7XoCPiFDpGyHd9oCFK1rQJc7RvdR52AF4g2maGJP9LE5VaA5mg6fM64M7iecXnW",
  "key25": "LZa9MisHWzboFapjMyVnUzHdsxzSacutNDJ6kicirTbVMeY2Hh76ptEMQQPP9ozcBZgpbePcCdm7zmrjc8HPiAZ",
  "key26": "4Vq3QufXxk5L5T74wsyKnaGQHHxTFdmjCniT5zynp1tFhdjPeg6vFVRVj4iCvXjsHvsD3UQS2sDiPnqvpztMUrqD",
  "key27": "gCvU6Q2YJD1vXGfPrz1k9foNBHKeUCyXiQquXTvbUG6iFx9pXJBHeuBet4sGYnpQzB8UYQLxSfQCMKzh4qsTE4D",
  "key28": "tQEB2LMg6yCLaFPZDwjaXc9RAX8RFaDVCnSiRuqMi7odyYV57kbVrc8ziK9ebyQbTwEhVTXCuQcN2WLwcgRFhJA",
  "key29": "4vYgFSfVM7nforG1HxtQMiXqsSCoKVpt7yJjemiiczxRqoBweewf81msYeMxUadmpgSkgxLJWZAkUByAJAbHiJwt",
  "key30": "2M7C6A8EFWZjq43nM2WW1pSBTFKSrrLwrP9fYYJUq8LTfGMbAehGduVR6L8Wyx66GXgyFREPWZW1TCGivJ72jD58",
  "key31": "C5V5r1MqtmMvDifj6N5PFqHXcAPw6N8gmkX79kVcskiu4UbB4rwRwBF6fsu7A9zZgMbgV1QBgD6CPbQwAgBrzNf",
  "key32": "3YDhmRpCQYeGgZRsMwduHTChv2VzVU8jMGEjFjiLezXZ8Hk8ABRhPmNGnTA3jskvMh7ANpirEmcN1z3vkY9E9srj",
  "key33": "312rsQ9DGevHPzz2i4RTxkFbLX6bjAemhg54KhHtWgYZEkPNg58oNHBo4MFXybTiBEE1qnmJ7UsEvnA8dmTNoyGc",
  "key34": "3mdkYxWZqWF2mKe1srR3w1zGDP3Ge184KzvavMsjqphXS4VMWQnxD8x74H3PNsE7oB2JBMi8x3fwWcg73LVDfyL1",
  "key35": "3kDDAijqAh2Y8bw4MBPHuWc6kxjBVrjC6kKj17rqhuoKDysLzXKFeZiwSrVWWcXyjJLqtV2TNTM8TvMMusy1S5cv",
  "key36": "51UiL2x2uCJXvAkoVyPUmWF5nakWgfx6mVG4P4ZkgaUZkAxb4zqbZFr5tPhuQHxd8sQa9gyLhVaGXAn9FKAyJCSS",
  "key37": "2ic8HcvbpNZSNZ8NKr3EB57LF6MLnxtd6k9GGJTdCiH5MEL7LzCAqYzQ1fx9vro2cc1c2DnyL5D5Dz78EeK7YrZF",
  "key38": "5H3BqKfYWb5cqxGX4NyoKwwm4rUYLqXujPWPwCc3J2HNQVope22hzvrHvyPgA7nMLbvAqGAToxmTxVtkdFK4Yhti",
  "key39": "2G51pWV85xtwVsd6pmiFHtZ6dy31gJKe4MMNmjnVzbWNdBWUonmdy8s8UjsogPZxwGbE4XcS93YWT6w1s6md6gPS",
  "key40": "5CM7niQ4U2AWWwEHCqJwE9GPWbveNByEWmqb53eqcJXRFYL7Ch6QtrTYYtEeUFDaEaxE1DBephboMKj59FtJCCxN",
  "key41": "2wmPFiLgpfAh2ixwsHHJgQk9iRjjPkcppXy3Wdmyc3J2jTgNxNBu9jfs9mxjj3xMPBNujFjHtarr1xe688A4VeHE",
  "key42": "ki7UKjYoVPp4DAoFeZ6Pn7DTrwioyWTf2fDf5ebVLD1Zqbg84aRbAUx5HoPUp2VVq7MzfiUYWy55jCwfuXsQcf6",
  "key43": "5hyWYsCqdNhZ3BXgQhpeN2TbQfCzZiHs9NAZsiMkoU9EKroGjGx6akdpnkd6FnfBXteRdP7SGiuoZjPVgW6K6vEe",
  "key44": "2a49vD6t8MW27Tc2L2adziovoQtVSMF9RR474cEXrU43hLEDpE1sLYw2BcktEEPqC7ZNYJuDLkW3Rt6V5a77PABs",
  "key45": "3N9nuD9JvVAELT8ZVPcKGbnefjFCFYhVAieDHLU6U2R3xoB7KK6rB4zH4e9YZthUKEaMfSJFHX3pCvZg5gedFyWG"
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
