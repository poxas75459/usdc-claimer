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
    "59DTgEAtqeKtssk2nYdQUs647DiMv33WiSPu4no8ixERR2Gnek2kbWo4hNREQ8owvYV33yvmmF2UrGjjZFRyNtxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJFScVAmAURFqs4cWt3KkjyEivm2x9D7q94aoAuQHsXYWFoomUAp4Ds5ecVgVXU35caWS3LQXSV3NETtUoiz6jN",
  "key1": "4evsNJ8CF5jhS8sBQbDcewLn4ZQMmxRmAFZw8puKh7m3GT9FbUPsa5yrmxHx7NMr3HgMs1WAsdCbt4kAeXsy79bs",
  "key2": "4hnhedBEsG9FqXVQdoDbqpPpqJY4m7suinLMYiTgwNaJaZc6rqCx4WMheJjVyeZnbUTyDKUKHrTAfJcMs8stcFvM",
  "key3": "79PaffAuJV86hYwunZcoixoNN8v3NSBcm8d5zFp86q7XTVvnoYGU2hnQUUNa2xVfZrKLkhKAW2b6j969BBxFgLS",
  "key4": "2EzeAA6RrGMs5sm36zzNfKLWynuQaJKgoyT7uFrKYmBZc2fziSgZ2E72Kzn4yXn6z9qZaXMjsVBAWt3mTJgwxCQM",
  "key5": "UT1HrR1ZusyBvjSYTqrBpjWXCBwmfbmdMYe22pXiJUpNiHHbvqpnvUmUzqkMudED3JWaXhLR7CwuRaA3Dcnk4fj",
  "key6": "3FfB3qWDte7umLTPLNMQPvseuaLFHPz2AqeeJLV4yuVgBUotoLqJXfJ5zZSnqcY6kDQjspy8jEkoqrjCPTm3o2rE",
  "key7": "4qma5X7BkeW2sJx7QDWoiNvUw9MaPM2iwGGkjeSWc3p4ZpWbEYHJcCiLoJYbMH7dMdkW5MNndJZHYhgvNm6M7bkY",
  "key8": "2SpyJu3gP6fLJYMreek9UQJSMxwQjMk4gCbnTLi7QYgVJTzjsdeU4FymXQZHWUDonjF2LG1Z122vRA3jeK5vaBrx",
  "key9": "2Nm5NacF4f5Y2x7nHaVN2KJiK2VKVEvwYLstrVcCYqXcukQcXpRUpEduVrRGpjX9eMLqSGRfi9wuV65KH5HzuZ9y",
  "key10": "3y1akQ2Cb1TsLP5ooAidx518ro5pNXmWK1Gh4w8duX8HS9nVDhxBe33VJyvU5JKrRApaKzrhgEY8qsQbPegLM5P6",
  "key11": "3t9wdtMEcRPajF1NLejeyigfiiFzLZbUE4JFXx54CzWSzovJNJTAt4VmJBccgKDoyJJScSFzmLTD4tPhPC5SHf4W",
  "key12": "MyDrmh4mNkjFQWJPUfEsvXSzLTNbZZd82xY6NSHKz6tGWp4ckqUEc5qrVdJ52CahnUooAPKHbwpWikMnHVNVEta",
  "key13": "3FzFi2atUmsvbhhtCqPJ4mUW7hE85mqBDAoh6Q63UMpzTuVXtmASAZsL7TQ7geW8UMyjHfsVTpGoE45nwfb8Hy9u",
  "key14": "xJYW5AGJzXexWn2XiUfRt49tAwffDV4suoGEZnGVMo7PpiszgQtptstacqvSfRagrotensN9dKtpYrZHhmpocjj",
  "key15": "4wycqPbzBwD4HgjQGHYmt5QArZjC5WbPSQ5UczHDwefRaeVQpQMHG4izcp9xS9coTYmQPARtpnyBik5gYBWcVwgW",
  "key16": "2ydj6QnW2DyUwPbQ6iZ8ihpdQLDzMh9vPLNED2CsHX8nspgCLmbt4CBvc3TGfa6cGTbm5Kh34q4W7PDzJyfPC6Uz",
  "key17": "T4qNUyomsDpRxd9NTEGMVXHvbcQZZcpLPwnpwtV1pXYiE2yAU7Ws53b7PRffYPXQ48GsC6YgFUPjfWjEBcu922A",
  "key18": "38xaErD4AkBTfFht32eRvxE3hNn78WR9PMTYBCTMqWD3TasrZHa8dSWvTXoFufP7iiBSY9r9fmuTBTHJF7s42FDk",
  "key19": "5gP31Zf8ZqoFssFAmPrkuMa2PT7vWDm7HUetViUDzHQGzF3P1YNVDjsyv69Aj4rEWk9oZrLYxFBVtcThHNRAJGqP",
  "key20": "3Q2A5284v73Xi4NkVPsEhdjGHgyeVU2uQXc25eXvvKG9CKnNNnEM9VwnSxhhBDfZJeu3XXjTmnKfE2cfSQNYDiU5",
  "key21": "4RkmvagYWmX5wwDafiAVLhU9NBSn4aKNesMsLrrdi6DfJMNH2bissFSHXSTv3HxwRBmDdw6vaNiyT47D3tyq66xY",
  "key22": "65okzNrxbgrqcs9NvnvzfMw5C5tErxyupUTL8MxWifdWgaVwEGfxmAD8t7P8pRsQbRCNeCbBgbTL76y5cxjAwyS4",
  "key23": "5xQjaMkz6sMzqQtY3nXWSaY2USEoaKAaFimsJRVf2nwaD5emQvSyhawGvivcBVYEw28LMdjEMrGSJ9VM8rZAVuJv",
  "key24": "2uBftFRxT1zcGCUDAJaiikrfrGaXjhYP9TPCb5dnpU5F25uBx5j6yAPUYX16EhHJUPU2JKmKZzukBgptKcSgubj2",
  "key25": "2dCW1BNVqsoHKzxxeutaqExCqBm2Fj6GriBkxiPwtFNYrYuYRXKEtStFWpDqh5KbDE9Dskeq3PdgpdxfpTqr64kh",
  "key26": "5ddGbV7NXL6HKTRkLKhtzWadpdfR5fL63Mpvfr5V7yuTQmwsQzs8PWgTVjgRfqUuVZssvgeZHri6cUM8eSjfsp9p",
  "key27": "5EqhiErAHzUPbCrvQ5xBzfsK7gaCiC3iNTwnY6emqfbvX66yTDG5hfvUGCJixq5ZmsRgnR357N82ybfdy5qgRGxU",
  "key28": "4pmi6JUjvpxMypbKa9Cgmo8CuGiKYx8NV6vVqUu7kZm1Paobt9FSsWrk8Bj8iHa4WPE2bgCyeGvcbJ7u4ZHeBqHn",
  "key29": "51pC7GdP8yLNDnv3TrnfFVNnM2HHQC5MLCQXFK3ivsNVypDUmLD4AGmnYvchPKBKaWzES2XkBF8rNBzGCJrJaaVb",
  "key30": "5vc3psLoHNf9hv6iv116FLCVssEMeRxXMboob21YKXseWH99MMAgnCV56WTkTiH5d7SKYdXygZNs4sddEv9M55kv",
  "key31": "pwAgnHf4b5g2sjMiESUFcZ25b3DVYYbmBxP2crsXB4zKbh3b8EJNEu7eecctJCbNhqAwxxaYQnMhGHvW5HLeeTk",
  "key32": "3RLjzmvSi3L1fT6FabeJJrYgE8acxauDSvVs3oRj9dfK97bUWM532zDaTghHHinM6ppLwPpscgpNQxSmZKCH6dMo",
  "key33": "4sxwJBpQKX1Dt7bxyxKaf1zXa4SshGsLUv9CTeJ8FwYWjZXimkHRBD2NAG3a6Ywm2YgFPLV1beSCcowJgW1tQGYB",
  "key34": "58gXWwT1Yyv7S2DxEobUE7FqnnmZ8y3Wz61Nz6Zjf38gZReiQY6RFNWxEy3TdMuuTpoRAvG2FF67SGQW9dvqW9cS",
  "key35": "4x5zYkfuNiJoiw4T6imqQxrGgNR876qrwXpQzsKMtTWxJhR4bhdp22HocQYBrtcxwKgEap1CKYWRar3t4JhGJvw3"
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
