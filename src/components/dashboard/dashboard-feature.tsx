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
    "5hpLB5twzeHc1hvyZcJG9XkDH7Ta3T2iUYsBHG41C3w46JSWBPPvP8v6MfqQ1xz8HmZkdQ33CEzSYUbCHvfXnf8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwDwU4EsQBSKaLdviZe5tEiweyBX9aEDKTTNJaJxqsPNBFo87z8f62Y4DJ3CJQbRpzEQsiTDKV9dCYazhGKEurw",
  "key1": "679rgrrEeQ7Kd9aR3a8EJfsdn6E9YeSWKbBUA9xvCYLRdfCEPSvjQCjB7Sucwa776ja3mir5eWRXLa7mzxz2wWav",
  "key2": "2tYKzghGSz263GXH8LbJ3QXbTuJNsJRTVsXpiV3ingoNHZ1xP9Z4UVofDwKrFbGUZ8SLdF63NcjQsuCxfRUzjbVh",
  "key3": "639YLaJhaLoDh1cBu4LUnoaRa99G7wagaSJRbYJ2qooRsyjYuWd7AbbMvpREfsBqT299GyjRPtLkz2VQEnXKs2RL",
  "key4": "2nm6v3pJvRfNxcRWmCpENYNuj5wD2zeY5xuXiXJsuGtv7tSYNz19eBhy8SZxRwW9nMhGNAVwQqs5mt4y6YsX62Vj",
  "key5": "3QG3snx9jpJDhubqbxjCwnGHrTLY1G9SVDEuZjtMxGoAt6PTsKM3Hr4cxU5GsYSzqeoxNAYs777PDDJvUTmJJxER",
  "key6": "Ub18vKWRGJanNVjySmebDtGq11cGfYnQ8m5VKHW9nrKtAQkiY11apbUVhpZSyywVkPjakAjYcicCusn232yLNyW",
  "key7": "KXYh9JyCRwkFvoroHszyV5kocnkmoD2KPFbuhNs1Y2uZV4bWJAfF9NzuGYQriPruVW12ioTgX9D9nVYBHLK4d29",
  "key8": "5S2o2J4BoQ8Lgnrk6EWs8MXHWoMXLTKvrhk3EKdd4nsUxqbapYnCadLL8ohRbKg664SZokeQaDn8e4GzpFK8tnq9",
  "key9": "4wn2UJtwoqf5rGWV9posoY4gkksygKpuN1QFQkPNn6v9h883c5tXRtRpuiAEbt5h1AXF5G959K1tWvZvTLuPaB6Q",
  "key10": "5L8LQ6THt2LrraKQB9q9dscR4GMJo2UAeMAmGtrbDJaKabeK5ry7uUwdL8AogkKi41JWmG3bVC35wRaPvrPdyJao",
  "key11": "4KpDYEnHAZeWLE5EhEF6SjWzw2CydtSMGxtXmPbHqh6WS1BetUeBv5J1QwQJQ5TKbHXQLKMN3QuKV9ho1scHKKwR",
  "key12": "Bxm3x1YCfTjgqq9A1KwxUpmxtJoEc2o4JYGPgwY182q98AXEMmzujSGnERkCUDXRHcx4aGtxNmxP39wmMmgY337",
  "key13": "36XGZZVj3XHnRNWcjqwKMjZZToYXsAKyVErmMrkC3Gr52JDPsXc9DTNU27seGpEWmgDWqRAD12LcvqoW1i9k1gKY",
  "key14": "32mfJ7YxpPhCob61uC74fNCQ3MQkBA3PBWTuJDAJnmwkbYF2GyjYGKtp3kiKGrAYtCZStvLAHHomJUnoAFosJW4X",
  "key15": "4Chv6c1gPm4sa1oRquXE66rghw8VsEJsLyECdb5i8RKUXN1ZqU2H48Jfyyx6LeD6PnddAvhwEgDybDhHzdBobjLx",
  "key16": "5tz9eiGC2urgvBtMwgNwfYc1PkUpwVQFkb9mRShimApJRCoHronWXLTtYZNqZMjVok4D3N3mGhmkZC8BdRQGTvUh",
  "key17": "3CetY6SkLfDTQcSSdZRELbRdQrP8bYLDtcDbiZFB77pLzJDQBR9jKmd3yXk4BAsnQyE1AMEpASm8EW6d9gJk6QST",
  "key18": "42Vqqniqr5JJDouCpSTud8dnzWea7Goe3Kp5PApjC2yvHmHWAfZULd9cYLYteBmAkQHED5VLWQN6s5FP6ec4bv5x",
  "key19": "5cjTSdhfy8suTqdvgtP1KxfRhgQGGVtYvqW9Yydd2X3A8HCCtp8QwEg9KMiXyN7NhiCwftndi9SXPwCGC2bDUzmk",
  "key20": "5Y4Vf9sy4qmcd6hvtB2f9Udh2xDxuEZAjzj14YnnJAMLEsBmzqRRQdhEmLMDXjYaNbtedbR4nMd8Nu4sUbKZDSAF",
  "key21": "5UTZQ2VWERH7RrTxonfit7PbZUJVv1HE2wwAPxfNkGSgwotvoGztT2K4Hoha47LiqN96sfcpyRTeNuE9Vowv2VPU",
  "key22": "3oPgGKhVhkgixN93jEAra5ru7LAiYv7KQ6VM6yUSQuP9jZUGJjWbxmVmessQgZRKGjQhcfjWbtWnczMWY2yW5Aez",
  "key23": "p6bdBQAf2F8Bw3gdYJXhSohERUBc3rAN2rdjYX6fvntjyea57cLwaynzoggYGygAGtWGxysBQwSCZvYuS9RhUgc",
  "key24": "5ktKkzspWzbvWasaNAZDN156GqrriFi4K2Ft8pMn5Tf1Zhp3c7JW48pCsQGQWVtPxY2wfMSKV5uNCADUEBZ4uNNi",
  "key25": "3LExRWS3QNSxn8xyFMLYwgaERacBHu7JV9d74kvP1mKVqqiKtme8Y7Ef55dNNg8pFXog18R1SSSM1Xde4P7LHrHX",
  "key26": "zwr2yrjhBeaJiwsegSSU3yp83v7b73J6z87CLwjQCMgBqk2UWSomgbvBYE6z5Tt3qoJ4gJKkyfMLPuDjQrXPeP8",
  "key27": "3H49u5DzKLS2YN9SWFXigsxYUd9yZTx5W6zgoTuukHPtFV7BC3nLA9hKZ34qkobkfC5tKCDea7YFfWDAwggNQ7Qt",
  "key28": "2QTzjtHdCE6BuJQJDToBumdfZa8FGkRuGb9VHHqQ4HfC3xdJCTBe4eV9FoP6V9kEz7zWFsDwx2LM7nokHBdpx171",
  "key29": "3Wm9DDEWdddFZivRj951V1C7S62DNae85mZ75vMxRdS9TwEtYqTsEfW9KEdREGqNUeConVjTkF1iSoJRXmZyrPpk",
  "key30": "4cHxDvAEjXS7U2DP5DqH5hKJynTWzFWhZoYzN7CLNKN1bG9AKdAneBE8wmxgo85xmgfGb8vnDrGc8D5o16sk9xAf",
  "key31": "LnBed86rixavfeGmYuq4kUCxnrwJP4ktQDnN3YC1fV1Yachz8sFGpasQvB3qNdSLhV4ShXrJYGXojw29nySM5Av",
  "key32": "5TGvyuJBSTeELmiUmGvsxCAJ9ZK2u7tvAMEi4Ke9QTne9D64YwPVDYExKpVsh2c9tK7doMiwo8bnwvc7nMNE6pVg",
  "key33": "Gb7UUxBmkjEsyhFVZmPboUSsAMkzPocDKgnHYYPUaGBcXQCtT6cq2tg9FVquaSdtLBPAdw2j7wi53boLxXBKZWT",
  "key34": "C4sYVCcXH6vYejEeBnXNUzRXW6wJkgNmWDP6mQdn3DJaoT9jzLUofWefA3HFJ29XSvQyxDbKZm6FhMuY7rG3vQe",
  "key35": "2akUaz7zwW6KyoWyH6kALVRbKHSrkuXR9qSJ421sNxKWNpMpUojQgRb57Gue89qNwECSfWmMfdh9zqAoacd4yxhi",
  "key36": "2JXLQqcPT17ztxtrXgwMZNbJ3etygRCh9gV7AVALdyTikQaLtEPfmjmQi6GQjAKBKgZSCJRsHhTTmXw2Q4HX9WJk",
  "key37": "58srHa3DgT523Axoq5Vv5Wthk3MQ6tPpvBVfYFChwKDg6FFVHVgEnrygRSHZ8boTncwjWyCx1hN4jn9BbQeq8sKg",
  "key38": "65daGoCxiGxvVPfmBhUqsen1bCihtKzFFUuwnkQZMbTPzb2kucr4AZmfhZmDJuAuFseAAG3hGDo6rNfGw3x3aB5F",
  "key39": "5jcSTurMbVcfk5qfcTG3ezZuifszWYPXbSn9YP6aGAiQoJ8WCUxDC73BcVFyp71qGj78kAE2zucViDr6xaD7NxxH",
  "key40": "EhPeEbUrTRLqmrzpe3cA3rH7jcrZXx5YagoMxh9GLd52QEEme6juony2WR9UdKDNGohJezjSBnENK9SVJ6tKpZx",
  "key41": "5kGnC7Soy7yfRCLPZS2MUk3cBPUfBcWCoX54pofrhmBwtYLKL3Fmim4326tWnLwbxUhTu95Z31cMmQmfjfy6ZJVB",
  "key42": "54t9uc6mNnpV5PexzCSjJJVKpwussQCWpfxRq1noUtJ9HfmzyihHGziBgxVMWNeW7xN86AnpBa5mxTvAQ9CWgWLr",
  "key43": "AEbE6dHfbTKwATKzgUvXCcCnFWfhvK8XqBLSEyZaBf4SXs2dxd76B7Yt1T4QMEDwawGP1nzMdgqw3qtgP4T4aLW",
  "key44": "3Qp4jPi6YfkAYvNZSEyp3jBCLvrdDrgDS89AQBh9C9QdMY71D983jskMjbLStM2eznnAdHivVzxsnxd5cWx85rkp"
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
