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
    "ut5PpSHmV29RSE8AEgVZ4P2VQjFmqaeoD7BTqwDUwRzstVWHzhfGueJc6yCSb8hA8vtEz5mQaiJNG6tePwXgVZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKNwA9irnBfKoXPxoBtWqJ8y5xCcWdc5iduuB4S6iSqmQ6Jj59imzfwec9o7re7a4ysVkxNcpQaPDSER69VBZwa",
  "key1": "3y1CLXHAtE3DTzoCqEJ2vY9FJFK2fzvpdJ2ZwH6yKkbpTBaY8btGaBrRvFELpzjd4LxjgbQ9wSKEf7VQMhP5e6TX",
  "key2": "3SEaTBHqv2xRYLy5UnPGW8rG56xmo1nfwXHm9acMajeUZ2NGqJ8EdBAWsLaLBVGA9XoDKekhrr5pKJYcfhqZt9w8",
  "key3": "2AoH5RMXQ7C3seL72bbTwKm1MqPSeqFWpPLWKPZVYgvBUV5HTzkHwiF32TD3CKhjuRfQPQXMtG5fSF2CjfkBL6bY",
  "key4": "3gJNLAN8aE2Ws52iuhFGpdJ4SCZ49BbeTPozDna1iunTfsTKHsMfpP36soFHLysDghAuUXRsSrtxKYcAQ9VJMFPK",
  "key5": "35qatoiv3EPXz31zfnpzC1v3ETpVShaq3Jt3wgrGz1WSyU9Ld4FozbJzLrUw1CicQ3bNLMz4gwAfoP95ZanisUf5",
  "key6": "4kKmazLZu9vW28CgQiD7tn5bp95NZPPjztixGseAZpY8HpWjFHQg3T376U3mvtn7jq8WENgsDAeLZMLZf5an7AXz",
  "key7": "5Y8qAKfrmUrcWJKPWV2JEf4GahpWdDt25uxWvUgNbR5vSGc35BHvd79N42U3B988Xnwt2WhqmvJTJ9rNEbSpr5yq",
  "key8": "tFfYdSJ3DkRWbPQcDKNbjGV6PEJRMADNUqo67HU8dB2xCJqfZ9batXihCyMY8nyEnNS56JgTYgrdQt8xdD6HZZy",
  "key9": "4gHTJiszULfGFrFLS61tGGVn7xaiFvGQ7K6E1WDL8uBgUXLM8s5g8iBxFELZ2555AdQqK8pdDSwAALTE4K1cMFFH",
  "key10": "PyXwMZT73nvax6Lkgy2zKk82yp4WAP4XhYsK6RuZm3n2jzoQvjWM9mNcKa9bMYPj8dVYKNmgAH6UcpJgVRZb93n",
  "key11": "5PuncwUV2MKh3XGwXrmHryR6WWSw32m5Q37zz8MFdwT6wKEH7BE41DFKuNEVfDhMt6sRDmT72vu9K9Q8AMra8Ltp",
  "key12": "3Kn1YmHDbyVKdkkWSjZEkDo4QUNwXp2HirvK1v2T6eiRgjgrQv5ffpCYvHedNWGuJZ8gm5SrjaZghaEyC2G75hma",
  "key13": "3Zf9BZ4sFSuTET2KB33jWmnBq3bPJ4r2xGME6b4bkQWhkWZPisJHanNsNBYG5iMFuktggphChTdkcpopeAL7qsFT",
  "key14": "2Skfi5iQofahTPyBKMg5cQvuTAEUADAjFeCHTNPG5CSjScyWwEfoGGFYkFe6of1zqVzbECrjVkd8FRwi5SUv6G8h",
  "key15": "EZw5dnM5G1jbPVLjWAz7GC7zQxRHnb3Fhw1dw8yAVwVRAui16EXv7LCMohFwCFHVGW8vtQNLVo46i42sJx7JPbp",
  "key16": "2cLhsg7DWDACiBSbf6sGk5fNQWe4igvYpWmApyVcurJH4Z7ovNjccZqS3prUdAMDVZVzqnws5ez3eeSjxw2BSA5e",
  "key17": "5hWX14pWn6msVyFTrTxBnuDGz9YyYeQ9bawdmi8pGRvmhTFDevqyf4pbhUz2YsrpVoiXG5eeAfCNpxq99s1ZqEXR",
  "key18": "4CMDp9k4PQphU7xUFsXwFuYkZkX7qysvsk9EPQPursWxehvK69nsyKPRhoB67vcWFmxUQbQ4eqbRHPeSTpdYbmfW",
  "key19": "58PGnUPjRo9VScKXfExGWGhQsKbkETvE6UX1eTPiVy2tFE4eZcHmWBup15UdTWeTU4wtvJqhyWF5dSGN7TTY3fa9",
  "key20": "2zK5zwcbhf3Tko28uxJvfruFs4JTkB2KSR2938fmmUTjFWE2Kwpemz2fcCY1PA7d2ge4ZY3BU7EdJRgjGApswDsW",
  "key21": "2QfGB7aLraGEMzNpkPLzx4et4ieVA2nyS1adwAQZdKdhiLFu6MRXH4wT1ZXGGYVeriWqNw5dTJ42jRYLPRTrTXtS",
  "key22": "3fgmjxp3w9tHsWcAq8gVVQioV1ec87fqJD1gXQkkg2AZBapDzTHh24KGdmtgQ7xyp4oFrP3s8yDxZ9yeStF6QjL6",
  "key23": "3TeKZSnW6ognVYNkfPpNd1N2WhALnKHYgAtEdydHPoUwr3kb7g7fWKEQcRAwhvgsWL1j7L1nKmNws6uU4uAYU1Be",
  "key24": "4xvX28U73PW2nbqGKznd1UXjWHsfnFUZB8XFFM4BLAcApLu5tBtuVR5pyo4PkVKUG9y3c5R7qJpQ2xhcGJG4XUtt",
  "key25": "3eHvDjoi4BM7Fc2wW9r3eDWtRhvzBaRvTJRiZCR3Zvq6vLsfu7KKQUvGJMSUckPfDaQ8zpSTGFHy2RaLeGB49GVS",
  "key26": "3xT4HneSDV6qUgnfuSvBNG2sustDBvNsZHibh2DzbPXMgRAaJr1ATzRr4FTPVdBGmGX9LtdUMZLDADuysFqHz42C",
  "key27": "66rMLJNcUE2xnnQdePJj2bLY7SwDk6tsxpeu5JLWAJbGx8ouLWrn94L4f1ArujaxBagzy9cJaUwEZuxDLkLzAqcJ",
  "key28": "RUEPGkKyPgihXM9G4hxgPAo93XHT3ppDmhBivcv18yf2fMkpWYD9vkxhfdiwWGpG4SnnwYqFmrHRSP5W3rZGwmT",
  "key29": "u1tawdt4DxJiU94TCmeZKb9es12Ex4DfwzyGXdtRj8nTPSYJSLsQJXMVyUtWc3cDj9XcQBHxwDvpsLuyYUG3Lbn",
  "key30": "5aAxJWzuhz5HiMyxPkbbtAtm6CMahe7ith1gL2bBTvSdYWsxzxUisKo92iNNsndezkzRdyqcy8BfHbe9gNRwAT5s",
  "key31": "3HUqLNWEMNz7yYEQRxmHtJAReFzcdmr1andQDimy9NXAhTdH2hPefLLvR3EMxmRkat8wxsCCJMTR1ryfyNH97ZqH",
  "key32": "2tqUdnyitYQ8mjAdcPYnDFKppM6HvSJhVjKdVZvWqcsqWebpYYqQ2rqYxV5LVxp5EN84gpfFTmMtyBxX1tjrfi6c",
  "key33": "4iMWqiYkqndVDDfeZNGMrwoQPbqV9JcayXt96KmaVgeMMSNET55P6k2PGaRbSC3GX7DVwac8JvgeDZrWnJatR7iH",
  "key34": "4Ww7QHKb6Wpbdhhy7Wk6gWvtCacY3b9ArGfqT3mU9ar8ESxg9Qx1grGbg6cwVZqKZoZoQX4M4Ubr6bZv8SdhDCmc",
  "key35": "3YpWD6VUP6hKpRM7WoZVcxPA3ZBiDvZhaxdLzmHRDmz65XbGbeJosr3Ymk4QccVQrrvq3LN1CUtpYbQFRSdmbCMN",
  "key36": "47td7UonhfHVkg9jAuXvWjzVGPEHU7LkGYMJMsRVfiuophE8ENpUFEtDyRvCiFB8BbAA5a44fa3ZUa2rdhNEuMP3",
  "key37": "4k8YffEGJUvxFTgF373TQFogqJ7hrXh5NbYQFemmELcRRXvPUys4ZXtkPBchaqnkYjA21CD576RwkrLYwPwmqehD",
  "key38": "4tARCWuvWMX9RvkCPJJH8S6AmtAJ26fMdHNekwpdXHRg1pfvjwnM6cNxZzex55M82uUUktHGMK4ypHMMfoPoKw4P",
  "key39": "5Ws5JXFAVAjEoUFss7PU8FD2hkud2Eq12LvEnvFAri5NV57NmsEMxxfiUNRC81o6kttC34bGCKTXsv8y56CuSDDf",
  "key40": "2inSYnApXAEkH9tE1sdSF8JKx5KRnX6xcp5r3BGZjFwekewPJUYMTKNp2WUjsB3HpfLtPrau1vd8tnqUp7r8Nyit",
  "key41": "G1F3FGAUSmJKWuCdYq27E6Unyzm1nyBtsQAcUMexS23n5HqMrJoeUYLGEDZwd17VafAhAivQMyG8S7s1ex6mkcS",
  "key42": "5LGMMZYr2AEsuWMuR7MWTcv4vrVX3wXmirh5mxcx8n3yTnuDQXzZbyJrSvTDpEW4CuytBefbCuPHdpfHjDKyFi6f",
  "key43": "2cPdk12KXibuCYx9radP89HHbVUaW15qcqphhqq5GtPwuHBmv7WuC2Ui9CGMad1bSbHejfTwfiuaRWmoCAgNiSaa",
  "key44": "5WtyddKPbaLgEjc5BfmbXdgpmNPY6cnbSi4sZjJncpyLaGasXfHmgwSNoBd98sYnrSK8UX5F6CrFvwNTzix37N1L",
  "key45": "5TeuvikPA33NAe6fyF8Z1MqqrbSdH3SaiFxzciZgU6RzwXReNQQ1H5FUffezVjcWFziX2uHrEvNcHiWGEh7s8ipn"
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
