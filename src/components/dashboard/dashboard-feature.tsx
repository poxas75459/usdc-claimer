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
    "5y7uirXsjR2CiupHeezSRaYg4TFeKf5DMwXPQAH7RGaJPTgzNZhbjDRtBb2xWk6dWJcxDFfUZdbYnQy9Fcy69QK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJJ359Pvku5FLv7HeuBqZtGAbhce7AWf8sKjUNqLMBRNAtQhuBAFfwrfFd88GZE3iQJWsSGgMbZsuvqyGjwHQ38",
  "key1": "2Xjwu8XXSCUL9GtMV2XEnEoZiE9on7bmhYeLit5SuuZzDzJ7xUtxBFBLbGejHaXcCP8EMD7FmsxfptT7kM6AD3ot",
  "key2": "4aDyUd1g9fo2hhH1mhtFJ5WQAaSpRBB6MTCDMjcp6RBQHMBGcUnsfcVhqnrFP681difmCA5xcGrtHiGWZuTwzboU",
  "key3": "2yTnQxjE4k8MTsv7xUjD5ERP6ohjX82sB7LiMw1MQgjT8388tnUPm5wQy3ZHs5fXtZC3JyPNeR9ATxaGqf2owuwr",
  "key4": "QGgHWXRsycDhj1qgotyyReFqfudgyqU4DJDqw4Kp1Nfz5jHzBYeVGxEkpMXgsrVivc4eCzLJj2aidfcmgsoC2NY",
  "key5": "5SCXdwTLhhTecBnTwx3g68RHkt49hQgJFLt7vBhTgaPfUN71vod1pQojfv9cJEt1AdM6JkUuWGNkomE9Xqj2dt8k",
  "key6": "6PvyuxTFuc4opV9Hx8fiqs1GWSVdrtANpFSFSEyYAgvGPUusNmFV7CpWVF6DKD5H75yLBJYENojFcdkR9fpCVaR",
  "key7": "4iK4vkWHDRosmwehob4YMMF3pZErQnoF6R6RB1DwJh9jLXJtBkPFHUxxERUJBF3RrbvinxAxfGLjBiFEm18p8p9J",
  "key8": "57verWh7DL3mrHTppjNngAo9tr4UeMnxUvCvdCbtdMN4Qe9vYTwU2z2jGoLm46yLGA17A83UzRD2DafAeXc4DHiE",
  "key9": "5BGNoKNJxJGstK2qovFENL3eq7CcV4bBWCGF34vZN1KQp33ZZdxoFLbJUgzjKHMrvNhjFErkgnmReTgNod5ZwXBn",
  "key10": "4JhJe4mi22AmXcRBpTTrYKL482dtZ9v3quxowjpQxifV1DVWVCEpPb642yHbECjLKNwMftZHr5XFGP2mAKCuQxzT",
  "key11": "58PBs8FyrBhF4WYQW9rDY5gqs2Boo9hsn1Db1JEy5NVG9d1QxAqmK6KgzAm5h6Q9m4dnZgeUxkN4LqZGCaqPqMGF",
  "key12": "3dCzPodNrc1Znpgi32eJWWdWTUV9PEFDkWGNLU19j6V6WaPkepxgUPu3MDDZecjhqptdMYxWo4QFr9wk5tDpvFjZ",
  "key13": "392s7Z3XpRxfa1tMYjTyzsFuTs4hsuqs6nF7vNY7BJnaTCaH4qW1S3ZLExsSWuK1pZMtHFH5Sz8NVAh8AQuRT4nH",
  "key14": "2RtHMyjebUzms5HTTWQDSb1paRQ71u8sUN3YNu7PQt9N98fAoMGfqhHtUBT4TJ7x4hx4bWwGh5RTx8dBHs9RnwnF",
  "key15": "o4PjU7uC7BEoFdC9pohcjC1qXHs4DDfGfYSM139y811xmJJFyPKTh5vm2KaFdwVUwV7DxqZNNGBBe7SFrqNixhP",
  "key16": "5e9wG6H5k6qcFEqVZJFEXTYnKWwaKn8qxFJJMuD6BTN3s9fw6HKKBQ9wzS6bWXtNU2nvYkywyVcGxGzLbSw7uHPX",
  "key17": "4PmxmeAN6fjN8XxrVGbd1WNEGRJZCK8as9qHKfgcy8yyZSuNWD2B4nonnzWLhrtgQzRee3rfm3ciDhLUHwRy5E6y",
  "key18": "3UchNcWtJXaiaw1xz3tAk4zX1WciUeHhMVHp8eFr2ex14pXzm8Laqg6Fyqv3BkCxvnvkzxmm3TnrhQsehXtccjzN",
  "key19": "25MFA3h5T7Gca9vJc1tH4rRaMRUu1g7qWsTakPc2v6pfQQhL9zhNHPW8mGRaxoDeiXHmbbM7sfMVegvhEGXRVgry",
  "key20": "3LFXUGMBDEHKStgiaSGkqy6AVYNodkGa4U7SXbK9xeengotZaHJmwzvTfhcgaZNc1Hrs1bwuLDSRKwFuDxf7H1rS",
  "key21": "46ti8xyqMR5bu8JLHJjWq2nr9nQ7oeYZQkqXwHkDiNyLT7SNgXqyLKtRCrcZ7dTDAUovdRgMayTAQ5naS29CX8Da",
  "key22": "XrKVZp4XV8yjGccF7aq2quFRpJtmHq8MbaaofmDWuokDS8n97y9oAyDZQRTr3ANz2s4W8gRobpy8JMgzqe7k3kE",
  "key23": "3anyDVnHjse6Wmqy6pgC36c47g5csC4zxfFh4c67518VQ1zueT2e5GGMhZt3X7tSciJotkHRiSnvMPwLyNKfWEoD",
  "key24": "4q7rYUNV6xturMrsis3BjQ2KftxZNqGeBqLRpaFbRHxXz9P5Yi1dUe5gN2XqDL1DLgNGH8h8mMxiqndWxx1KuDb9",
  "key25": "3paKiq6uvcLbRG4pVZaxa9f7VhSu9go1Ax9TsR21zKFxLdngFChPDBskyvHZ3VWUkg4SRHkiTxrBsACB28QRFvWH",
  "key26": "2Ze7221CuDKAXMCMU1WWDa6LvfypTGsLohEG7F7P8XHLzcQfBjeFahQJtAUAYQ1otKYgy6CKnCL7mrRFxizgX2gP",
  "key27": "y4U4N1dDuDwFNYEMQekuk6pmesXBaPrzHFwvF4hyrqaLrY6bH2HRJWk1vGch4n2dRBEGsuvpUG1VKdegeqfBo57",
  "key28": "45uvTzuk9RE765t9ipBhs2W5dzy7hSi2zc1aocFeKW4FSuLaR9eBu5ukCEg3EzGYANaWPNpHL2udtWfo25X96wh3",
  "key29": "kygePeJmF7ia4xTmk2V9GriyErPsWR2Dsnd7uuBQmVVNtUhCgS6ur1g4S3NEvKH9bHcyWfisYDdnkksCf8EGHeK",
  "key30": "Jo4NsCZt1ykvgT9k7zd8iUyC5HXko9kM5f1dLzHjjsSiGk3PLvPYnEG7F7bGeyUQJg72iWqbLZrJAdpmXvTpShx",
  "key31": "61qBtHkN1pdEzRcwk3wrCgr4HvSuRVVwHDdJbqa6yRppRfdNxn9aXmoEFbNH29vAQ88AgtWu3vdS4h9k37YixAwg",
  "key32": "5pKGtDVPKp5rLKp3kmTUajztoSY4Vwq7QgKfWLaZ7xDNMhN3cKdtqVErpQWuZu6cjvELWwhKTK4TjDo2QoPgVYPp",
  "key33": "2e4FbngbLKdyzL7qmzZHfAofbhLkuGnmAb2bbq9UAMtjtEoGg84PqGGNGx4Kj66YhkejjJxHFEWXEkyFVkAURC8B"
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
