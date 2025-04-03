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
    "GrFmXypaqzC6g8hEirFToxdqLEGRrF2cB4P8mshujvaoEXikYjZUwhzjFvFQDCGmfZhE4quDcKdRnCCj9UNt34s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifm9cinyS3RawRwQEsr3h1RiwQc45gsZqXPVmez2DNUsxcDpZks5A5Q6ZFpKd7hZD15A2LPzZXVCFCVn4UjdcXr",
  "key1": "5cAkgVBKc9DL4HLdYSvT7Zhm7bxq7DtNa9v279HGp1aPAhL3Vq5AUcDjYBkMVVrCWmVdkD4QnHhhuS3WV1uXgMrn",
  "key2": "45rMPgJKMyANZxkA553dNthSwoirVZLRRgvrQ5vB6fTv8Yc9yCboiooRGyonHqwh6BUmN4VPxSaF8dFGABwNfavt",
  "key3": "3RHqdr4J5MCP8NeSLWNSvSAtxQNFF5kyEZdGgQTZqD6xszpods1TsfuyC89kiZJtXAunjTSz1i6145MLiTsYyjxC",
  "key4": "qtQCVm7EiZKitjQDMFmnnvaN3Wmji9RmCs65tmn3ARBBSNxvYdXo3htX6uZvwvBMRkbsruB4i8VoUryU1PtpD8p",
  "key5": "4exx6Fytwc1pp2fSTkMS7Sh6xHDRSYJSvbkhW1PgqR8YqYU1sV9TLXeCY6GBXKrNhUrFz5oLrjZPkU8hFv9pENEr",
  "key6": "4P4Y3snUMe7bzntQ3UuUDRRAKVQTTnVH5576oLTBKcuw8YD8ZpuJha3qqPUPP3veDyzNDpfthrU6i39Kh7MKBpSc",
  "key7": "otKRx8ZQk3DEwRGDYKMf3ney9jFJTRZrfcZrwJrzNcV6C5ySSnK6XMnoNiaYExuuW63o4hyBFEVGDPboApK32QJ",
  "key8": "2xhtzTuSeL1oyAJJozEVZpP6YiPRs6nCgk1uCh4GLG46Wm16Ym8kGYgCp84UM5hWEBMBCfLBfAwZwrzyGgxNvn23",
  "key9": "FAjvkktUCLJLtCQioXnokH44aq9LB7xpDLEDqc9tAdpg9JnhK4UpjetXqmbKEf41eSJqFVea7coF31iHjJCsbA9",
  "key10": "3peswxcLou5xbBLrZRg6aZDmja2aZoMbaMaUJgdMxJG5dDgdLeYbmmTFxfgvfAkeZDFfYCkTfSxJfeUr11zYpS5y",
  "key11": "3ZCk929caHgaZTmGqy7pkAVFsEUHx4ry5SgLqhvTfcS1wbZUA9c4R7PvkvysNpEwsUdhwxcXV6og4A2gVxX5S44P",
  "key12": "4iQcSbqmRhpB1URYweZ4KM8VWxSnhTn9eCYdLaQuZVCpem1hQHMBS6bwRX9BCmEMPsBx69rhFP57hT1pXkoD6CVC",
  "key13": "4mH6RksnyE942Qkcf1vPLgaLRZiuubjPUp5a9dGDSis4A4TrmBfLLaP1b2rg2sfYHJ115H8YAMkzd3t3BHXfKgoU",
  "key14": "3FVJirsTkHfAuvJSi2sNZSpiVKr9Z3VB6PE8pkiRAjZh7hELT27x21WsJNWUN3qBLJSD1VSYz27jPGPKUmXvyznX",
  "key15": "5CpY3YUU15X2Fnh4wxzqmh5Bsg3w2Lwg4CxvSymhFzRB9xBPrdcPd4a6WLAGh7psynjbPwmUmg5rhzYsKoKMLvCn",
  "key16": "3EVBTDTztmWH25iw4GFfYrio39PFGyQGCTo5iw5aZPwGBpHgY9JgmN4nS9V6stoThxkV1WckxDMzdUi5TtRrF54E",
  "key17": "3kqTqvKBdr1Au3cmWkUTsrAwmAHe5roPBUBVXEmQ6RYPCHx4uy4oeZiTzQvzsWXfwyDQ7e7ahGBczPuda3sb8f4",
  "key18": "3KQ7BrxEsb52vsofWc8HsZYK33Po91PYGtkuHtDHGVnApJ6cXnXcJ62gYRDbKDQ3xRqpjeA9e5qM6iURaewdyyYM",
  "key19": "3iMzeza2WjAYmj6Vx4ZbL6jG2RxW41MXEqfLmfn83yWiRjbSUtuq1jjzkxySGV3Rnne8mtnmLobMHowGsPWAus2V",
  "key20": "2My6tfQr4jye4vVucTkN2fZTXLyF2WaURsHwUyiRNJ2CyxvqrY7pHz8gnju5r2wzeJknfG9HssgTyAT4GBRoPxpR",
  "key21": "28anot5HXvaJUrCLLu2H51GfbortJtzMGekmY9Ldrp21ugdj4RPXT1dRBJP3r5Nef8Kf9SPssVkQsvpU43AuwGwz",
  "key22": "27iYGtVHvYm4WEkpkg9LxwUSUgAEnvVbHdmKZWPDbpTmt8ndg8Lu2q7uCxXG45qZkG6VbrsT9inviPuvfC865Ky2",
  "key23": "2mYF3bYdpEQbcNKcVkBfjvb6zJie2sKK2RtVJDJb6wUF9jdsmyFMyYbBtSA2H6RLg8hdKZ9cfxrDXVKrHA47tjSE",
  "key24": "4NZn1EDSMP3hdA8yvhnWyvMsgU3FQJgx4NQDGcP7LQcLNW3oNQD1fCuyzkF1g3K3q9jG2M97A4YfJSAg9qBDkwdL",
  "key25": "2q9qp6whu22UQhP5Pnbsz7ByD3EySnGo9EJEzWRB1fwRTAf65QEUspxUgdaMmaZ5J13SdhdoQH7KuH1Js2hYyVVq",
  "key26": "4ZG9gDAH6T9ms6XX8bygqjqpFoymSY5TYhtn3Lkt8mUNXpBKRU2rUdhrSLXqBjJSpeMaDV5rDzwe7gjAhnWFSU3a",
  "key27": "2t9oaKGiNetHh4vh4meDBhRswvATWJYQRRz1qSHahFe3hiaUbFZPHBv8EcLZqyy9BB3mfjq5mG2JmQbYdfLP1jd8",
  "key28": "5Xy2S8AiQQ21sH8e6UupwRpURGXvU2WCwJi4CDr5sM5vqGnHEQPTytvkmu5Yitw638P7EWvZGWijdBoDruHfWSQQ",
  "key29": "3X3xW4q2xeaoj3FZohWwu8e4bX8SXqQiWkVDXbeLAsBaqQqvPVMf92eCiSjHp48SHKeuk8N4qiJYDLWhYNRifwTW",
  "key30": "UiKwNub12FttPj1bzqtgp2mH9c86HK6toHoYYsoXyEuzueynCnpYWbrLZoaUUWMhy5cz8mFyv74qvvcyDZ7u2b3",
  "key31": "4Hap9Xg7siDT2HVtCMTVF7AQifH1xuRYgVxK25A5Kz5Zk3DzhYqY19Hsmn2E3LPdRpKzYbVftCidPnQgdyWNtkZf",
  "key32": "5irBpCknnuJTeX6Tavtr5MEEj8fPnb7JaG7zPMLazYBEefig57hgQMGEy8bh6GvTG7ECwdQLC4gk6Hc1nLkTeFZo",
  "key33": "3BX1Axie99Pp9QZDS34RZcJzHkAeBvYyXys9KpFrUMuX3RFuLJa6MZYKVQ9n8iuxqfu6d2tXUbQ1QSMSJhb8yBEj",
  "key34": "4aWmGSqTJbA69vqhHWCbhhRAmLwE69zj5xwMR5xboYUhWRP2syo5mCAw1ozdz8ogfESPh9FsPqcUEMkzpw99LybP",
  "key35": "48by1HTRTjHwavCq6A6uqTX2NWFZTcJCkm5gDnvAH2UzS61y86FaQ6B8cT7KMBcV4CiJdn4NnycKi5D8LnC45yuy",
  "key36": "34SbzAZ7awSgYiaNnAecHqHqq3cfFCpkM45x5TtSQTtzWknxRgMDhkDAKgMqKnPnikpTDZoiKa1yH83X6q4BY6so",
  "key37": "3ZZH8W3MTQnjL4bat7RfiTe5wGUKkWxdEagr74GZwAHPHnaTp9ht6ddsHGVWRtyVps1bKn32dKWZB39W2BN5x2B4",
  "key38": "4HB5GSNKbozYP3aAEM4f3Hc99yioZ4LCCZcE6emWBpFM9imzaRwSMtqVz2niVDto3HLN4n8NBrE3JiFi3py3C5J4",
  "key39": "2vk3Wms3qWZ4TPfA6nAomWnz9tSamg9ueUNCHSJBkrYmV9cNnPT4jz5hSS4PqwcTm8GhnPB8e58WGFrzBVHvhucv",
  "key40": "3XFCg8wuGPp3iSkTPiedEoVJkYKruD4CpvUnaZTKQyMaAaB3nxXeQNEH7CCLSJckQuB4vwkxtpNRRrGD34oGFXNp",
  "key41": "5wmbcYUUdjb1K13mCyhyTHRUaDkmrp623EfhsgDfZ7zrMC2GNd4w8PC3s7L7wd18Z8mR8gHnfQsKUcwueE3KtawX",
  "key42": "55w45SsxiuFfjd763vYd9a8dAkib6zPZ67Xz2r3NhZvAFVv7J4qmH2QPqNHrqdQSLqJitefaQyAtN9SQRDvYWkNt"
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
