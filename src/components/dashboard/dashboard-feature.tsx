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
    "9zUG74MLef38c41wHiKLSutBDZG1NQtoH6JqQmHkALBArYgwDXV2qdAXDnCDFg2jKesKiNpPLypQgfZLBtYigWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62y9zdFPiy5tVkQXPzr6fQR6Fw7qenTH685wztyE71xhxNo3zYNZgJTjJPaNVRggdwFkTGN544pyYF4aThanY6jh",
  "key1": "64FpCV5wJ5MNQqDppQBZZUxZNKhTMaQZFJxKWauYePcRynSLSiarfXStWCq4qgRLSDFTKzvC7x5FzXWNCBFw1iN3",
  "key2": "5Vb2cRvx2MV5uQ8SY54MwTRRApyKipzq2sYBZSTbcmeL4N6t1LgNsfNny5J4um99796dEXppoPorYPGNuS7PckdW",
  "key3": "66zbr8mxv6K9ZC8ycDGFNmHHGdhckQQ4fMTfMB639fQWfyzVUF8ZngHEwzsmdv9wwueHaBnRamhcwHzTm89ECPXw",
  "key4": "4mf8aMpJovwfiZAKaUC8NrMmDbAJY67CXf6XpfUw6YrZe2kuzVLAFT96t4LM76QUtBz7jXxiwXtYGbR9kcooSv7k",
  "key5": "2FrxBGrDCfic8zjuB7ByJp72b7ghSVq2eTdCDi9jkmu6KZBh7yVYxmDqyZWZiA4qnZbTJrqgbntP9hUBTSBZoNp3",
  "key6": "3jMvt7goWyZWkeNGPDJoqrmS9gzF8iXK2ibpapBXc6iGaptkak8pjSkhFzV3eoxEXQqoADmjX88HVn1Bx6RxBiBH",
  "key7": "5KkDaPoK6r1urtnJw3cv4xAohXtPfMrsP3jqhLqUu82aXfg8ayzbKg4pNGR2cy2mzNBP4ezeRoY7KuD9QTPeiuqR",
  "key8": "5tTX23hvShaeb5hZ79jWLZ4a5ivyMiH8F6ByEHgkbeueyWz4aLWpSwMazvHekumnEDNgigZxj53ks9xwMyqx3rv3",
  "key9": "4WYWKzbvMxqXX7XgunN6sQZgzPTSTZKZToKpZE1iqr3EfFAPTkTsUXmjU1Nn3YYpvoSosGNMtnCNiaDH7zJPyuT6",
  "key10": "5jzMFseMrgJTpUT2b3LZqKgc7MwphRYAjxhxpzYEJqqCKCjLE9L6RdWTXi4RgK4vgnqNRvBYWa1gvJHcXn8d3DaN",
  "key11": "3iRmftU69tT9CTjMorSo5gSZinKBXXUate5oyBnAPgwXPLzKJA9j1sGzpB4rjLCzSpfdgLGLLs4XFkDg9epwf24P",
  "key12": "4pyRft8f45aEPH2RVGugmwWQXC1ZixvEvLBS2btM7thWbhUYAxTAexkwiwfUZUr8etvxLzFQpCQpqNow46WVitXi",
  "key13": "5hwRg1xtSA5h2vKkF31mh112MNhhih9qRPkoUjGDbVK231zc5r36S81PZYQJpHzbRofpjNRDkvLPxZnvTQW7Y3BB",
  "key14": "c4XPu8nxbkY9w57f7ndgjRPzt4hBu7mYo9BYYVfH8i6Bqyowk3XNX5enr3L3ykRJN5E6L1a1G6np2W8NrwavBDV",
  "key15": "41vT65LjYdqsko75ZdmGBr91aPvZRsU69TS7XZYtP8oq9EaoqPPgn3pRLfHywDUoznvDWFUBRf31AcFVyiA8b8GE",
  "key16": "451LDfJRbvKxb2oVm2NQg2Re8gz4P9cUitbcXanRmNXxTScBR88To6ww6xsKNAagoQut2jx3wKFkN7oRHCN2xin8",
  "key17": "2dADzvvZBpBt2DE9fP7cY9qv3R3vmdsd2KCpU4hxRdkG2u1V2hLrLycWFT9AfYQR2Y8bjnRu7yz8vh5WdSvyw1hD",
  "key18": "3xSHW7QAu535ZHvZBaPJ3oFvK1n5Xtuu6ZyskvpXQ36pCPL88DyNjvrnRYeFby5ZDfgj1jeav4ewtaY9ZZfSwo78",
  "key19": "xTevKEiyuhKeQLxzNwVLbndZxh2KoJmhfjZR7KUUQTzYKe6rsXDMVziXsF5VWonDNSnuLxwuhp9UC19DeUX1joo",
  "key20": "2jH13n5Mj3eDkC1fkCqq9wedoZBj4zmtv1qKh9i1kY48Xawc5j3NBLRPLZqudhKzKbgnsVBucrnBQMSeZ3iCg2rK",
  "key21": "2kzr7SzygQ47rkgDfi8k5QYHMdSqTMV5UT3sEyVbd55aG895qjVLTPD6gBiEGRnaqjX9K6FZapT5kZPk9RJ4gM4z",
  "key22": "froLawgAoenZtvaydLKhyGNqyQnx8eT9c5AdT6Jgao7KZgnmFSTk8r8WbjmwjxMNM6NTy1hAwGMv4anjChzuCd1",
  "key23": "33mM8twg2DgzoxSM3skH4J29R4hsEh9HpSLwuDZCCGv9edF13BDjW4ZodvokLBK8KMjLMbzR8DqVWz7WJ5HiN7Hs",
  "key24": "4axLGqzZAmVHkBsk2Z6JYdmnm7BwPDPpNzvRMSUggeqnQ7YXP9ogHopqJpi39Tw93ETKEB3vj6Db97wQFtWuELB1",
  "key25": "62N5MyzfvQBigUs5htycnwkTv16Mvv6bgw7RMU6nkRAZgY7ApKjrtZPALgH4HrzwdYHf8XDuGVjmUbmQoa9VGfFc",
  "key26": "dh7Hh6hTYCcE7cqv6fwFT6x63LxfRsKVPRe1bDuoAK87By5Lk5QyJgCmystPccQD5Agbt35yhxAGGMQm3udWirG",
  "key27": "JufTjmTuQiuhM49SGus3Y6DNxvqvhxh7hyxQhAHcDk1Pi73vNMw1V1Ht2kVNV6ingdW4PkAwQ79xu8KRDD6SR4E",
  "key28": "rtr8usGu9oG8hFAegkMAeRAqjwmbjGuk3S7Kxrm3uKBrQKDcG3qeTHqNBmkcSkZntRPw4NLRVHCfE5mNVHhDDo1",
  "key29": "5v1TSH3EHzJBC17Fe7oDCsYC7TLmi8JAoz8LKVgXiHKXnNXbf1gFk6QTmZh7qEJXSS3PXHx2n4mFR99PvRbashvx",
  "key30": "318TsaWbRSezfgdnseyZfCDYvXJvxn1jebXwMrz67F43PNN52XCB7MBKXzLQ9yJvPxGp5o9ekZdcTDRoZQ9d76gm",
  "key31": "5jPMW7N3CLr5vLdqPJvhV5teUpP1CRn9WtcCYRJ2AmKo27KSETEKpwdiHFm5nVXUDBjN72xppBJQdnaZFgvsgU8f",
  "key32": "4dVkurDBPXTmcvbdZbuswRbtLesKhBVZVJocp79c7D5zQKEbWZok1nJALgTdniAnWcW6TZmJbqyetwJgQqFgntET"
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
