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
    "5nthBG3cjVQZCEgvFA5XvGrUReJEUAFUEM58d9287BvPMEsPWvcLJZvh4GKLjx2S3r2Ce6XRdeHKw9TvQcNdCLe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLgHgrkuR6pdttGK124MF7bRxTiYYMednuTurVumTScFCD8H9jfak5VqM1xTUwnZN2zqtPsKa1rCowgPqQJK3t1",
  "key1": "5qb1nLqdfWx6QrfS64cvs5C4HpkeyfSEh6rT7cjme6gtz5N24dchpfs4Qcv88wGwWdaLzzzNLdusCDJNekBRvwSL",
  "key2": "38zKhNotBDcBYpE7GmfB7zwGpEV8Vs7gA4G7KdebXq971r2DQcTzfLmeMXpxeA1tAwN66CZZCVxvFfGWn1wwfvz2",
  "key3": "4odPgYeT1FbvDKRNvQR6vH36S6t4ZKogFXwsoHfuquyQqoHfCZgNqjGghn3k4Xb4S2hJUvrcx7Nigczd2YYsogDq",
  "key4": "2y44i27UPSW5evJ3tYkzpNfDNZbQTBc1MkR4dDz1ZaXuY8ufYjq8MAb5o5ZeVM6kscuH9kVcW9K2P7QU9nnB7WTW",
  "key5": "39AvB5jZu82yVdNxy75eVkDoQ4KK22jdRQNebJBnB3sj4839uWXyMQu4oEWSqQUfVFCgfsJbQVxqXu9xZexPYyi9",
  "key6": "2bUUpbcDTwudmpjUxUFiNwXYWudLBUzm8iWZ6KsTXJaaGFCe8NsGxRoho2VHCk81UP51dfPrQGGGnAYr9dB9jsE9",
  "key7": "52hPUJUNBoEKHS6iW94ydzpqDGJKd2tDYqGWA4rH7V25SwDSrpRBbdcgfWMwg9g5twmfR9QPnYbbFWMN8Bq68ZQg",
  "key8": "cqSvLLKyyLuoYwLSEeHC8H56e4PP98mxPumK71ugczwH3eegdPkMaiHt2itYLF3Uf6YtKWbuz1eiFtqNh9oNgRQ",
  "key9": "4mrNkLamxGiKXYR7TA8dHBJ8RCPi3adLfaXSwqBWJJARU5kwkXKthzo4P54ABS4QkJkqaWujq8oXqBKLhtobQG1j",
  "key10": "2fNFTb6o6LwFZaEzatKBEyNrwSQKNZH6zptDyWUtxFbxscvcB6hHRuWCaQ24E9WcWF5ezuiqnUjsTwWLpZQbxgbA",
  "key11": "3sbqiA3cEMGARQhwCMZy6U1ZyFEEFAB4EFxE19KLd4o9hhveFgQJp3x9zneBFq2jehu1MtsAqv9s7WTBcC6CnAjW",
  "key12": "5CBDivmuzvWbvWYiXKsigTggs8P2c1AjqCnBvdAm71ToDQp2Hyz8C39zEzUDR77cVEaZoGiF3LWuvWpqBomckJCJ",
  "key13": "2BdFTRwAZZ9KL2wMHud9sPC6fdUgPyFtqrzdeWggV4xhHbGjaWA7CGW5dWcZF6gAyGaqFJQ136oSFZwNVmERdnwp",
  "key14": "47cdQi5YW2YfsEW7pMffAvpNRxkY5cTsoWspuobsBaAWVS935DumxmkcWN2NzRXtP4mPeoVvWjEG71UQ5cisfgyH",
  "key15": "FjagfYTN1yAZ248YQ7tCELPQ7ysF47DVG6HEMtLdZRuWj6Vs3KRxVFt5HbtwBhmaHmUUAuSQVi6rL28pf5CjmtF",
  "key16": "54uwwoB1etH5NhG6poWRpqgpeepJdLo5M88v2iQtUssZRyJv83855hN8V42XM7bKm7S8tHbZxfL9m13jVhAXJUG9",
  "key17": "3MPs3VdqSrrvhanohphMcgj9RmbBLPDhbriidBHYUEy97VoTgKywSohdu9bCiuwNV8PFXy2ATTX8TvZd82DvSFQg",
  "key18": "5NY4BdgyKhVbG9T4xim7zf1xDSPHAXJ9w96JNicCADizjk7P9Wcc5r2rnEU49NUiHeyG275wtruoGuzfm624trtv",
  "key19": "5rBVgAV7fiSWSFMnHE3YsKYeZPo1xA3PWEsvRLLobSyEBsHash6F32szGWUkby2hhCbYjwAff2A3JqTEUjWBnWq6",
  "key20": "5yg24rtcNQ9ZWFovNQfSms4NiEz6QG4xNxzn3zBdXtgegP7oebjztPBro3do5dBVwuS2cjKdRmtPpZu8a9wPLYGV",
  "key21": "3jJTAt7nagQH3on2kVJwf6fuSjgbBXJEXoxQ8esschtffJHdA4EbBnikCXEpgxCyfwKAYzMrXHCwJtpBSb9P7fix",
  "key22": "4AYQQwHq7oP6v9BPmJ6ve58qFSDCpi9KEXUhp1sQZcDqwhUPpcincgss1yW8Nm8JR7qwwVuWd8dfi1FUoLRLNSyG",
  "key23": "2gb9VfXRCspLWrwVXdEAzsNmfngbHyk8kfdkU6ixWAvJJgo6JUT5mE5FftMcVi1CrnD3SQ1pdzfKbrYjHkg3HgYg",
  "key24": "4uZNYFBBHuyWi5KE7Ld1wwzEzcvnQpUYa7pZry1frFJrQ2FkjzcJeZpWpypxf6PW4X7rN2A6Xuh2n4z2Qp4i8apP",
  "key25": "4KQnXgpiYQnhobVSZP2wjWQGyuVboPnCajMAo6RwFADEfyPrgLYdkrYM1s5sDT824JWXJqptxsT5cssZkwUuaHj2",
  "key26": "5JeHGnHkj8DZAwDc1vueUGkquzswMv4pESrskx6XreBB74b44F9EEEupSAR6noGv8FE2JNoFa5TJViMP9PC75kYj",
  "key27": "Ka77FVB4asFTi5QB3qZi7JrT88Ki7WvrSg68Bfs1qorrLwjeQUzAPWCqwiKiP2bbDV6Gu2NReQMK6MW1hj3YDuE",
  "key28": "9uy1MQn6TKyoNrMwx9ohsY6faKWrsA1dfvHPjCy7859wAJSfmBD9apTfgSb4fzNR5mDAUMfXZtmCCucdsYvPoEg",
  "key29": "4RsMQbfmeK4yDwzmVAQzCEZ2K7TVaJbEEsv4aHudCy6DkxTB64E3WR1Vr9GB1mWkazVVtcLbYDHySQpukbRj7arg",
  "key30": "qKkEnqAFBSqUyue8v3Wvyo78tYFZVxPc9c2WwHhnSBE95wrGqQ93P86ykfJBAgGSFAxbGLn6JyHJzzR89VMBxwV",
  "key31": "5NK9UAhSumFTMmsyiY5nknHjzW5JeRSY2Abm4rYkQJkPEiNxTgYSpEyZrJMjScjGh6husDYCCbMabc41wRgeat6F",
  "key32": "2ZAZ8ZMTwZ3gahghvTc1NA8dQmAU4F5TRScrkwX6K1jtHZc1YNUUbv7tuE54wvHXzbFJ6JfDjMnJqySJ6DT19FMo",
  "key33": "rwmeS16qjzFv1RpgA8ZKRRkCtbfKsRudhkCT1vBJW4VveizGY4qS7eNaXeETH8WVDg3jJVSh3ZhJVxyKuvQWYZ8",
  "key34": "dpPqAs4iWL2RhgooyingrPr36WGtWvty36SmfXxEtDHhGeSrqkhFnw9CzTbt8acXFRxfFz3YzQFSnVjsy3qmtdU",
  "key35": "uaba1L1uhrQHRi1R11GfXPavftM5CdyPCijJfcUGkuNHHoJqo5y5mUzZrQC4YnaBAVEATG3X7gctoCWxcJNcE2F",
  "key36": "45KSLhTaGsZcfm3yjYv7WDW7VZbdd5cU6mqUgxAwdfkgjHXa2LpBbfhvTvMrNH8zDwUWhxzrsxaN8bC3A1Lf2944",
  "key37": "zbUc81YV6s5yGV71s57f57SkVvYAkFoqNDJ9eJUiRYPebBxDXxePYMcEGxM74jpgo1hDv9Tff8hAR12mwFXWsdK",
  "key38": "55zih5tYnk3NaZgbuqUmkmZr7zJmKoJG9C8SD2nNaUAK8Ag1f3ApJv61oFd9BvT1w2mCTBjjx1hmayfS9tq29z6A",
  "key39": "3DAXJ4Bf946fj95pG6tQ44am3Csgw71qEhWC2obEh4u99EXMemg8qNBGdEJQw9TVUKJ3cT3UUpYFdwTnoo71QB7Q",
  "key40": "bnMVXj9rkjPQnbBrNWGErKbKksAHzzN2FRbm6q3UKrzTJ5VDGqV34n7s6EbBzP747c8inhR2W7PYXgYCjA4tS48",
  "key41": "35e4k7hV3CwqaheEFZZ84Y4h5mSgifvX5uo5i2wcTpmkwSHbZyv1LnxMaYJiTg4Gdw6Qu88YCAc86BkfBkaE7Jrt",
  "key42": "5x2f8P8oFZpxrnfo4hc7XjiDZRDEwjRHveNMiUYMYywdufFwL2xHf4i7TV5XiqS2DnGYSo9A9EyUYTcNJyewiRQT",
  "key43": "2MAS2xnBQj2QdVmvTqVLFNTYCc4LTqDoR4ojYEfsxPS7BFdL4FxzWZCwQ2Y4abab8qtii4pMeaywSojF3GbuTsby",
  "key44": "2Aoc3JFDLVkj4R44KheewLeYswohq3AGEJYmyZNs5BSUDjKv9g6u8GdpyA45ZWQNJZc75VHYVwQWbASPQdddvgSN",
  "key45": "24NvaKSx1LXqw8ntAZ79JF7tg3bpfEvn39DTLSn3MYdWE74j6dmqZY8TBjit8AKsishiwjpTviYxvQJKezokE614",
  "key46": "4P5obBbMK9PRaaRY94c7KUFtRh5vSdnFa5EjL5KaBkWjoNtKooFfpYGRK9PYccnk9wsMkN8pXrNiD8u2MAJSCZ2a",
  "key47": "5p86WgLfNwfUCmXHNbSyXjKqYivyyoBnJgyhRUDXPCtTYPUUyxfrwpttxWXUpCDZ6fhizu2gvg8wqK8tBqzNesh2",
  "key48": "heFRjkDYZMioSLLajsmiF5fZCoKuiUreMi1pJEYeV57PK6h9XwE8cxLvfVgVULUjHRVvL3sPWpHQrKjnAaDyXct"
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
