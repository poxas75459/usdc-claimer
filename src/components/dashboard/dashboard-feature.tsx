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
    "5J8DpQ7XHx4R7SAAg94DFSLF42PWR7eUduXVRukxDt1S99NVPG9iXcqHUyJwYALWQ4E3wrSmBKhzpPreazppmgKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4Qxr4iQJWGy7bRbCngsN8SQs5PHsmHXnV8BvZzi2SxM9jszF62y7AibbMoYNpo5reArV2w9Lf93fHTsqYNTSto",
  "key1": "24fJprC2x2pjzRGzFX5ohd3t6ifSV4AUssPdSzREZj4ywQooDbUmroMmA7kTbqpLneNHiEHdYoJsvtiyy4s1h7du",
  "key2": "3yfSVDJPzxs92ncfUJFUMYWAema3U2hN3DtNzCsWL74LLj18h3FpmCUJMUUPtHHEXfm5uqJaJtFieq39WFo6s7ws",
  "key3": "7MYEQGau3b8ndqYyw5ihpzvg6EstHybsJYquvC2ooQSKLTAsoDcYq8NsVjcFF1HDyxQ7EexNC8xPfquwCcK33pC",
  "key4": "23W9WnxvKGEbr5tDg7UM7uKUVPV3dz1FVjeXnmAqM1HPL49DZtgRwcPy2dBXsCaPtSRQh8Nr9WbNWrdAvADqzL4t",
  "key5": "2EsVczDCV59rHt7ntfNnw1E91muQcTKh4zQ8EEmHG66aCRPZDhzSQdH14gpycRc5dcozHCH5fprCaRP13tyWHVsT",
  "key6": "3jEu1AC4EMkjUGBRjw9a8fdqvcw5y57vaJiNfa4LtiTZ1LGLd5w7U9c7fXKSoo8my5H2ypHD6f46HPcBHkerQG7n",
  "key7": "23TuZ1yyUskxcNrxGYkD7YNPU6Dk3EA8uY82GfBf4rZJhPm5WaEStwRThKvDKrGpdzHZCkPSmUGvzJoZ3eSZvCzs",
  "key8": "3opAR2KQ67Siao5LDukwTYubyvkfo4FhAS67AhkW3fuJCkNMeFwybJ7mjE7NxEdB7WxhYfAACS9tTBTXg2JwLuoe",
  "key9": "35jzQ8M5vcDJ7CCcyHEa7CBBqwvwcx2TRsA2tbHg13NhExh5bigK2d84Fvi1a6nXG4eSj3dnsunyTNLbgY7E7iDC",
  "key10": "uDiFzhBSotF2tSQPGXqkcFiH1AUioxKXiea31RQ9SFWkXWipGx3SSpLEhgu7LRJogYBK47ZwgLNTz3axk4Lf5Wi",
  "key11": "4Rsj1LwsKzPC3bd6mqh8SgZNFK6STxoZXHRQspFes3mWzWxZNitF6FuEc8eUGLBkPSMUeZRoZayaKBM4Kfn8xoQE",
  "key12": "3xTC9t4UPRtjmYFw5ranPyTJpbQadjav8cG3bjGq7QB7JzZgVyJiApTC6dHaZfnXkW4rFVYcqFu1HGQkF3q9tbPj",
  "key13": "5wxk3q7piMXUZT5tiKUNximcGi3pwq4sK9qmi6tJj4buLxUwi7JnQz2sFTj6cyhZihAQZJsELLA8uanPvYKawf4x",
  "key14": "2nQWc3jSieaiTEsHrYvH8R1NN99SAskPGvWV4hitPkNEPJM5EaSn1z3A1C1wX1YMBrYLThxdaS9bHUxboTMvwJUj",
  "key15": "3ipQcx8wfiPovK5psqdYTojLGPSGLFiLqWAdeQNxqWpXVjX2QwUkJ6uLKCDZ7Ab1qj9PZ3A89HLgc5ECaQ8SdYdU",
  "key16": "3ffF68gmPeTmBA56gLqoHCpbdcirXz5dop9KTsaeSxBVMqwbxXUSg6M4bcKgQpF1mLbNQ1R4wDmYksQyjyKcYjJr",
  "key17": "61kabB5HezepK3nW3y9VyTZW45aiJ5vvNXaZ7aHnhSf8DyMraxNgBw9TWWkkp73B3WEbo3f5SJKpz95vYQCdwgy",
  "key18": "4yT2SxJEjy86rUrfjk12FjF6tENM8D8jKbz8dtUDteFcTPyFJvFky3FmFKaYv7LJB65ofDesT4c1JS5eZdF2Ju3m",
  "key19": "4sHaBHLddgRs2ELqpAJL4hLST87QS3QJ32sUB76ZxkZp7E4qFC7LCNVAmtMcdyzwKzv7t6KdFRQPjqky2PRBgxgZ",
  "key20": "5CdzX7uuMWjXxBd9uyK56dq58ijzt8b8BHt5j62MhY2Z1DN7pe1YTnZQYkpVevFUWhFS8xJYs92jxNPXfA4J2nBG",
  "key21": "2dpTQtvqB2xJj54xFeaWuSNp9UdMbSYyGosUB88aYhmLh9oucXNMpbxBofJGwpKHUnwuvabiz8rtxfcqTAHo5tvs",
  "key22": "4JBLusX89AURbXr2agmk2DFMiyenh5c4J6drhivZiAK1bG7V4Qf4W2Jh3HHpedDrihvmDon6B2xCGDjuiyHmqGU8",
  "key23": "2XhrX3oenGiecxYzSnYkXJ4dDnP7Xoe7REfkSzSeLwW5XmUtVdJMwvzMkkZMCV42qMVET1hDVNmwh2p16RnrnwCQ",
  "key24": "FQ1nyhHmrsyT2Awk5HwNNY1NyyfXpavx1KCmrrGpj1BUNgtFjFBwaNvPhSCEEsosfVMJQjtz4N1guiUso4u2Zzg",
  "key25": "37ykpWD28i7wbnpPNv7uqAYZigbmuTzzRwq2hgFjsjnzYNM6TXzt2TQU5EwGnf8C4iD4dwys8eihPzR1kyX2dsKE",
  "key26": "4DP1kwqsdtDnXpgmK9kqeHpsGCb2g8DRNAEVtcd5UsLTLqiox8zjvRmVrCbSgfGSByJgNMsZ6bjmeJVrkQvHX6hq",
  "key27": "5C9HQAQB7T9Gw65YD48hTZKpUSkUQ3FgPm2WeSNB2GAs7r92tvmXvC8FjJA8gg87mk3i2MrRD3qvVoiQreaic5sj",
  "key28": "3VXsgAP6VtmPFJzGZX6SFQeEsTJN7nHLh3YhtZk7HNeUnbwMAFrekeofy5pqJEUNhW76pHGpeNZfqbRzEeyraXmU",
  "key29": "5hikWMbaW9GAE46RZQ7z9G8R6TvvTuFk5NQjjwG3BR11k7RuPNzGSSBdbQCwQim8YFu7kXEnMoqDu8wSbpy5ZtdM",
  "key30": "31kno22WnACH95sAwm584ivKe7gon1rtbkjW6cp3q3a9P1csDNgJab7pvzPTCX6t7KUdZ6wgMaQLsaYNAmFxWpSU",
  "key31": "2xGNKBT7ErcikCKCNdcYVtE25t6ywrsWVmQoBqcsPqse92gvZCHLegWcQ6vaEJR6SfQPjF6opz2bFtwDtZmQhWWB",
  "key32": "26b1JCq54uqH74FF3xAUc8mkMDc24wTTjfYCKrEZSa9DyokHoJQakEKG9WFyUAmKjQkh7wkUV4SuWiez3muFoAHK",
  "key33": "3y9WkgMrriSLPV1D1eH3JcLE6tGsgyDkai9CoTmzF5MSw2ugGjeSkiANnSab3H7CgwAFmr6SNZc7iM3yUAcvPUix",
  "key34": "32dyMAphNDaqVpbhaQEjJSX5afT566xQYPSGpgvxTYpqxmJCVtdCeFBN7waNPJbvyznRjzopszwJ2dPpmgNbPqGn",
  "key35": "5ufimmYC6RZMkyZ7bd4t1PSYFphp93JLDJDvribcKi6YAbbZVq2tMNGXGJyXLdZC4Xtwt2B23iMn3715N2hSqDou",
  "key36": "2F8rzf9qMUYZZ6TBJ4Ze28t5DU7a5PmQBtVo4TCKAUSgmSX5LaWs1osAmHy8WTVbYRuoLxUkctWhAA7XHQtk9zDs",
  "key37": "2wHqn1Ruv9jgpD8i3EWefw4W8dXpmV3qjWvdY6hUjF9XsDiMmnStYmQVavqa8R24rQEFZ2xQLsbyNupdBpTTaNh1",
  "key38": "2ZvuUkVRNnQpg8jbww7cW3kUE8oWUr4VobTXF9nYQP8acdJ4vf4PQtFYtRgnsCADg1Z8XzKDHjcbNgPTv9ND1hbM",
  "key39": "5cVkqGr8kKLf3VVpw4LkPHfdtYhFkHRkB6BQhcMLpEg1NimzzfMzUgar6vGaXjhaSuyMYbRD2GzYdMaSsuazJTh5",
  "key40": "3fF7XihCPzTNBAMQJp4RkwH2XTcWB1XGVzYP3JGiprjWGPXXFEUmaixRqEy3VEoKK5sZT64vzXjFyvhweKrcREGg",
  "key41": "3JdjPASG2dFALBWcDGTiAHYnVXcRGQ2YT866fVDD57oBjtsjuFozXBqrdSsEtL6umQ3JDbAhtpN4yN3piShT63R9",
  "key42": "5M2nkao5nxAi3ti6dC69YViSjED6zKC4CMWnoAENWmHeJp5RrVfiwfzGT77U8THW4oW8rbeyk2zJRNuJ3Eojwedr",
  "key43": "63a3mgjQbQkXvHHnqPjRmX1BvJGKfHWPwqUBySTHCKcFgcY5hxRoR1vupYWh1GBrKSNwwBTMo5wV4PyDZ8ntiU88",
  "key44": "4E4MgNfcVMWkCYo4BckmXLpiCv764pQ8BhkcnktBxfyr3np5BzvMfjsKuXxXn6it2K4a9QTswJgCquXmZucbwX3g",
  "key45": "52XB7KpAQZbE3TKy3WE8v4D39duoy3ndmf9R47aLdpUSA1UmGnqEPoBV6oYPefMSE7McqTKMXyWhTYgSwob833tz",
  "key46": "4QVhm9Ey8QqsBY5KBDwE9V3TEkvCF6hGfvTry87gxmza8QZ9GZ1J8YM69hsQBkhJ3AhU4ecTsxqLv9N5iHQob25X"
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
