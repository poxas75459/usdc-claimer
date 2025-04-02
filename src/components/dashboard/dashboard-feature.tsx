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
    "rq1ohphdF2MqmmP8EUiNJbxVGdmC9mAijJQ2pPhifuXHKNyLEEURv8cGoX3TE8CgJWKWnJ9zZqSXW6P2jcRV8zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xusja6cocF6nvHQiFqZHUHwgEy9kNrBTnkFqMGfmEMCzvyZ7wQwAtfyfC2yicPFR8CSzW2mrZ3NHN7hjTTgV6iu",
  "key1": "2k8NALNpSEPyLqpRFK1XiXgaoS51hiNFE6HQY8o4GUpfj5fwTWUeUMpa3oSzk9ZGyWqmnkQoyDT5ShNDS2tmZ52W",
  "key2": "PAGdcH2bNcmLYyoDM6PbWVSPfiLtcYgVa91ZPqR5FCGHEeJnipwsvwmmWAtMR5jGdQ4HZWmoq37UvTCKsEM8k6Y",
  "key3": "3mJwAWwmLwrRG25vPaui3rnrpHLXNWQbnivMKASWgdZS8o6wv12qTGxRFnpP2hezfLBeepHuUhTMCfy2ZSMZ6K7Q",
  "key4": "quNLYc8cvsLXUHZ4ZbQBhGFGewuLHKnvkCL5HXUJLbV6Jfvz7vRETR7iqVpKUnJeCc9rt7hzmiKhqjAk3oXBNLF",
  "key5": "4a63uPbEtEP3LZUzdXYdX564AxiNNRQZusituXEoMVoiU8Reikrb1wFzCBDNPbGVt8HpNnqzSBjyMb3tDGdVz4X1",
  "key6": "5s7gCBmfu28NqPQ5tR5k71dczcut1D4qVtXgT4xv96nP7f5emdxDJHxR9k3WzwNbuCuMQ6hH8UkUkAniA5kcv7a4",
  "key7": "5B9qZy1H1k9PjS435TeP54HyFNyJKRdEn9in4qwmtz1ZGbTC6GJMUo9nQMM37Vu3VC8gFa6UxExQdSS15opk78Yv",
  "key8": "4BYjWySALbfJhXMyNsKsfQyDgqmXhFrvVLaDSHe4VJid2AocUjhDo9EQ2yecohhg3XTJQktn29GgRFDxfRvTkcNa",
  "key9": "3b6KCkxfF1sr2iNi9yP2bWAkTVmYycBmTmR5RK23Q7F8LTEeJ2rWuBvFpsH6X6vSN3DSqdSNXpqBxsUeVSy7AMXP",
  "key10": "26kzwviUe4gJh26aoHdumzbm7bpCGQcxZkf1rga7w54hvikNyAuz2qgAMsChg2nusj3BCcXAupc85voh8vqwinCp",
  "key11": "5Ci6wnxrSeBPeuQysCmNPxPoEERt4roSbcLzu3NczQ2sHbybcDVkCAwhni155yDV4xDACdXR2USsaQHWSoKCpMry",
  "key12": "37A8keo8AcxSHNzCaMBaWzZekQRxKQqbU7RBSuN8bL2Bv7Jhc7EtD8r8RTUS7D1ymtZvT7BRXLoWVRo5vecDsXqj",
  "key13": "37mTfNkUEc8jB4yz9XpAfekPp2Yud3Nxr5rGegydkqfuy7PPtrsuiqfqaxkcYiiVQvEZZvFJaJeLqCxDePzYF9kL",
  "key14": "2nuHbrC2j5uo2Zg4ngMscw5dixWY5VoSkZCmyEh7zVQ9S8unkngKEDAgv97garLFGK6tZhMjbQmbBoYGy437N8q3",
  "key15": "3Ci1Bnb5DsnmeWS62GQ9MJ5Yg6KfD8yhxhqqbpoxSY55aE5QKfDgUcA4zqw6WKy4HbUFnLWuDz5fCVMenGbyUyvE",
  "key16": "qWwFvTLpjNPVkgopZXL6Gp53r8YLkKTX9wm99hgZW6LgDSWZKJd8XBY3A72T5p8ZNvAjFLqjXS9rGw4rPGPV66Q",
  "key17": "MSyRNA28ZtSmFMb7X7XsDX2J2snd698CnX2rPujQ1wwJGkXh4ppEFQzP1mzmf5MY1kmafLCyLiJf2aaFiymVg3g",
  "key18": "3gfKdBbPuSU8Zi2sREmc7pdsrwwgTSAtRptK52K5RoVhHSur7CzduvE5Y8kNgkcUCD25phrKF6WQMxkJ5Zs2rC8z",
  "key19": "nQKVRz9MHehgcwU51Xw2uff3iWhuCNteFVpZVSGnuk4ZP2z8j5JVqwuaCThWavd27iHTLJBtfWd6A9vWm4H5Mjt",
  "key20": "4n5brdAyv945TQ3FqRdBYNtHc2NnZf82uSVukzK7Su6GfEszPLXDTEwuzZgpusCeJ1G4FxpinTVa5m2Xxhxni521",
  "key21": "z5pjJBU6xkA61A3mKzY2RiiLWv5AUxU7nRChHU5HYDzm3HcVTDxLUsCkZskZrZ9pGKrX9TY6Da9hRwnMq7U3wSf",
  "key22": "3rb5cwVuKCoczjfAAsUZcZUC4DqpBg1GWxyDj8rL2nbvquohHEjetyiiWmca3UgKyLSC4vuvd7P3E3vFLj1YQ4oV",
  "key23": "3rZyMU6NZtjb1At5DSUiwzmeVkFDLHos4vzDv6PrEggnpUZT1fX8zTBkbRVS9nE5KNFwpWeM9gyDUVYk3m9etwYN",
  "key24": "G5RJmckS7MLE8Ry8Tf7XG9EzccnLMY4yGNGUYnP7AWNPFM5ZHe1gGf1ag3XH56p1N1UVf1s8H1KWBjfnCiHBpmM",
  "key25": "2aQvaVJdYHcgbni29U9HT9RvbXZ1dB99UUGBhUYi3crpWBiFgEA6g393xPuvaMfeDR266wxXBYCLYVPB9dUeP9GT",
  "key26": "5Wsz4rjFetRhZQ93DaVbQS7J5b4nyW9wq5X3MNVRk7M14PBiNyV9GXWQLNkJq4nQjBu4GvPzH75sd97RNah13i5J",
  "key27": "q3Ch7j2nfAcsHr36caGM9M64rmBmq95YmbwgE6VeLkvQpDf6Ch19BbyBfxnLBp9c5nTakv7StaVecB4jveXqhPF",
  "key28": "5LCj7WuSmrXjsn1HEeb7nftUbYrskZo8EYv2UBpFZ55cF2Su7UL7juGvLVVFnU9CCktrEkVFPL3tU5Lnw4jPc9Wg",
  "key29": "rx5kK9ug9E1zuPjwgGTxqCeCm5dWq2XzdP6a27aErxb3sQt7BqRyd7aJ5uwSF8fnpqZxbmtim8i8s91jkQgB2kJ",
  "key30": "2mFNXLw3VSsV2Xe6qvEs7aANtriqcjSaWhF463x7CdJ1aNJq1j7x8kjL4oYxfGwEYV92jUt4FJQYQ8CEKtjNfXWQ",
  "key31": "DXFqb8w55X7gdYCjqXdueRUsHYszKr2Xwn893MdLsUE5HNQqXhBVgoh2vBfJRCS95bYmgdtYHTMV4uBUSgNFZdi",
  "key32": "5uNhUiomHj9NBMtQiGWjSqXfeKBHaRD1uyJvYRJcUTPvzHzBaBsptS4zKvzL7vG33a8YU3o2oiQCEDSCBnyaFAzy",
  "key33": "3Eh2q7r3AQgTEe64P2m1dCnKa6REftV2yNuXga9mhgFKVARGSmrkCvZYXjZ3Ya4iiKGP74dgpMBiNrQ9w8ga88bh",
  "key34": "WAmSJCx7iJEHFhAkvqrDjzJseGEnRncAWyQuSKYEwQcBbJgsvS5niLCcjoY5t1pHQVscoZKXbE3utKk9txX8shK",
  "key35": "3A2ubwqfPKST1SJqaH2UXmmVzSvk6F7gDGqU5uqRPFSmkCaj7k95vzk3g68kdD3RDCGz9Jgk1iiHnWd83ENt1txj",
  "key36": "45RgZBMSPZEYf8UpiPkMbspFwvR873Bz7cBeKMcJz7KWVhvpcHXTQPaoaoJ7Nr88jNandb3DBtG1BQK6hxHFhefV",
  "key37": "rtQBNJXgCYuCPQLtXhzLa7ACyhZqWo4R3jujYbnW11ZXBz1nzjVsEq6U8qH58RvPu6Cbz8zNo2FGbEVfrYUajA6",
  "key38": "4DV84Kn22Y6oYCyuR1bRiW4hcXNBaM2ghV2zjrhuWQUo3oWhFHXMTQNa73EHeuRAbwBZAujbuatY6fYZQZNUdP5n",
  "key39": "2hULUTmPjtBz1P6GASZwV2Qzsn2Kt65dAWL4kyoY9tTAxrQQ9GxDHCD6pzvmpqrDCRRvH9V4NxUbZMdddR9xYQFm",
  "key40": "4qUAvRbFgZD3WNoDx9TmaPJ3Mj6S3cz5vDHyPdYDnX5akw3RobBYZX14sG4mYiaXe2KH29MTPW4ZTfexuUqp1jai",
  "key41": "4VHYhEUfpTwrhuhGz1r4n7M79rethkMxArhBZqqjL8swzYFotCZq8T7yQM26AiCesbDxDC1dJGQ7GzXJz2CNKDFu",
  "key42": "5Thu4zcGv5GgV2C7XYeXgc1AB8HD2x16sEnvWpFSDQHri4RvUxdaGmNRdpccSCHX61f66gcqSJru8BQJWF2hsWuX",
  "key43": "58pKX2ktjQFrnBNtnXeDKPkcnsqQxdrt5yqaDmrdXRmePYK68CnVng2zWet5xHq8XB5Yrtxaf4oSTMz3PsqbL4CD",
  "key44": "5GJG6KnQNkRxpSTgMGpLYLQKan646NqsvNk2L2hqwJE4DWrFLAdc1gPuCBeSPm1SpbT3CDGLY6MpE7mxLRUtp3ak",
  "key45": "4REpr1Li4wEquBFudrisuuHQpFygG9txo8cZ1Rtbsm3JqYbqyHeasrevuf1bXFwq3UpHMHm4wYeumPCKWT69dCLD",
  "key46": "2Np5TiHsy2R4bBpviCJXXiv9djSE48FSf2yQZ1kttWjxbem4r7GWVvC7dSHuTEBwD4DSBCn8RuiGmjU2JcQzKmeV"
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
