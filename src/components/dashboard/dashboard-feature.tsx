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
    "22vZXutaASQo1CPVyXuwT6AL1ofG74k5DXcUSHypK7AfDy8rJAMDkscKfGLTRCVFffUqdZMQHtmsBsgJTf5cXbYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppNRutfbkh8b7HUbovf3myBAsLeQmRLuURxYWhDPPRgLxwUFnWKToW8Xem49efXU83jsmxJmGz9aHeuZo2RXKap",
  "key1": "2wAQfsDjd6fJxymod7kXamGDjfVwcaMihNQzRzvfjCGFcy2kKfkFnTe8VWYRyNCoK3jCQpRrrmePsCCau7zBEMtM",
  "key2": "3VAQBdKVBVQQEg6s7SoxrYZgHgaGTVpGGwury1zcVz2ZPcjkMkbuwU5vfAnBo6XbRJVfBb5kC8nD7sbeTjdkmuE6",
  "key3": "5W9oPgCVzYVieZQLMxyku1DxNdeFZ1oaLpN7Fh2BG29gB1bLrYh7tewfnprVjpNWpsog5hgmtmNweaf8E8kR1Jmj",
  "key4": "5pSsmQHStEweMLnd2FDtkKWCJRC6LeiSxVtksQha9ogxo5jg8JBEyg2L2ugRZxA3KBdxw9qp7UpHHqN4cEAPRMDU",
  "key5": "4p597pRiGe4juUD3mEc21t37j3iNB2Gm4T2TJy7XH7B9Q2zbTigb4kSSBSsSHNNtcAqn6FJsFxoVz5wjpUnKqZjY",
  "key6": "65vr1zEvvXTCnzEnAFNVLeo52Hd6adFZXsQXYDvqPDtbFct7A8vJZZGYyrb2Jyfehe6vq5dJte5TWQZfwwsghXvG",
  "key7": "53YF8aMs2J7SWJLXVMmj4yPFjuFc1dXDsvcZsoT8bzUgUzN28Bzmc4fgKiiXiHDRmLnbfhS8VJpYJtb29jJqTTBo",
  "key8": "56tnf6Fe48JWXdx9sZCZsK2LEmXuYrG8S2L7RUzgnvi6bgcicvqsgLJVUo9fMZJZT1BHTqdaj3ktb68XSK74Vqzz",
  "key9": "4uFBamKJz6xWm2M7YuJWUAW8bis3qvTwaKqKQ1afVCAgrGhvNGh4iz1GWtxK3Wd2h6aQZxixrUSPPE8MTBsWzy62",
  "key10": "3BX1njgCEYAsAHCBRfD9NWQj65NFLFAiLMSieqnMZvE8yWYTgxxFgcUk91LahQ9BUnSfXjHHNiyiYxYpi6azrGW8",
  "key11": "25f2HLD1HfYrQvwTNPoKcwX867QnMwTA2xobnhPnQQPgRjC4uVRrpE8r6qinwxcjCptx8ZZWKXDqrd86ErnQoTax",
  "key12": "43gcGqGYWE9msRWSCcf9J9muaqyBhD8SxamaSqUeQPZCFpDd4eBo3t94UNBBz7zSsXvtbNeAAsdHypbqAVk61WA3",
  "key13": "eRjjmPkgyHUP2xiDG3p15oTfzE4rQbRJdQwPELEzj4xJDzRSaDSYxzBWhDxaFbfyWBr9SqwpnuVWZWYXouLdkDM",
  "key14": "2jDnoEyiRijxYgMy7fspSiXvPP4s8pGstM5qad3XkWkXQwxe4R9BEe85EQwEg1WdnoCpcjz2z5DKJv7ED2jmYuds",
  "key15": "5bJWePyS2PHSJLkyd9aw4dGGvvjY9hLSVCPkwTRZVvs3gXUZyvTUv5sR2XNZgZ8i7ffuUUyMR2QiXNLpmYpwpBgq",
  "key16": "2pQy3yneLuw2xcDV9wJ5fAv4fKhrtJfREjsB2jaQ3vLyAtwLA6wLzvsLp8cms9f9xXc7g1wFKYvVZ3gFfnkPq9V5",
  "key17": "ATaspsfjy9ozq7KnkX2oyKtSScbve6pBarY6rg9WDKUbzbnDso6YJpkuYA26NwSrrnfPx7qG6bt8ye5kyD4FXKV",
  "key18": "668c4URzUx7sDFKerMidJXANsiooesT99tsNTVC2zn6Jg7nZtbMFGPDHvMNgb2dy9mJeSFesJ5wtTqPTN36HExSD",
  "key19": "DBUbz8UGJcJGPWHcFzeiPtgZQ751tZqzyJHuYyZTe7PhDaTLnGoEvZMHUFmdx9jGs4Uqe5vtSjcdbkMcVuisD7U",
  "key20": "4iLgsQJ54onCe9Lq7aCATxR8D6niNLpmL2mmaMKWahoxydDMyGHW9PLU1Xoyga2oHPHvURESkrFV3XLrJcYsGux",
  "key21": "2yfnLMGeghg99Pm3JcdN5xUnMjSeB56aKbuTjHQ56RnxHWyCSVVL4wqqvYUfW6Uv17Kmc6f9tvGriM5w5ZwVhmBz",
  "key22": "5KeCMNYeHp4otjFjSn95LCo5egQnh2h3uQSjf3fXbNPTePXRmsqMQg4MGNx4drui34Wq5h1LKwFxhUxprY8Q17XH",
  "key23": "4mELZVR1QUinftzne9P6NyEqPXXdZKyy3h4eg9N9WgS2yk8euKVcnqXKXr9QJrFVTK5HwAqiknYytCc1usaPKKAG",
  "key24": "64p1cbSWrNAujZ3sPyCcx7BjC7BcVjL4FSDkUu79TntaLdUxDGNjPhJudBnDXCVQY1jLj9Hjax53qaQtket9dLvE",
  "key25": "3aMhbhpQ2th8K8EjKYYux1ZyZQfNL4M5Bmn8Di6XWGCXQ74Qj2szUZqTC4kCAB93qLN8FCSMS6jzJi1H9naSLRVV",
  "key26": "2EzXZdZuYbzFdwG9c1AG7Gntdqqge4deYZTy7UQj5YGttA1g18r8vHomk8qTjjnEtrP8szq9zdmattEi7G2Vp7Uj",
  "key27": "56kxH1ubaysf6NJ4RiD2QhbWyUJFX83CocwdFtoVtB2nYGF73zYZoRgDsw7jmtuV3eiJQGafFaovLjinipaknDy",
  "key28": "3EVKjaomEk7LZQowuKjHMxPrc5476ZpJKZAXq5jCAkTVcZTLDgxFCXbV2w382xfQdrB31h5MLv5o4s24SypFz6yH",
  "key29": "5oUNsMqU2fFdWwtThDQVG8WMFhGTqJS5rBW4P3jZtj1vqCirMVYoh3EauDNnPMeNjJRde6AUXtjywZhgyTAvxihX",
  "key30": "2hkGTWY4QXjiSv1BGQsNyzjgj1zNJncKdA9ggwZZbF1yuNxhjKS3cN5tcSsh8875hhAErYdwK9uc17S8tJxdVQW1",
  "key31": "43ZVXoVqanjV2Lonifp8uVK5Em1KR6XDnFqfMAgAYXVX3DfbkNSLfkwq9nkhnBUkq6DxPTPx4FPVVkn6qRm4TYH9",
  "key32": "27q4BAzuyGA8A1XT43gNWapq1Vjy2f1CoWN6hpPqEHLgUVKLtKne4EhFX6xtKVUrt5irWY4Z2zyqQWRstbHqewtw",
  "key33": "cuUAzou5oARrmPEV1GuzfpQPbtaqc9bCXLqW613dXKKdL3oGdo3jsBdKrpxfeVePJPHpc8uLv4HnWS7TpMeT6c2",
  "key34": "3wdrCMwthvGkVKNpHSV7JD3jLrJMMHbBY1SqfeqNZLk1s2LmaQWmgPEV8cY7MGmFpiGMrfo7YQWBHKookCshQqL1",
  "key35": "iydenSq7548LBQsySYQc1fmboooEX3ikBm2B4tkfWkhnJaeXM1eNPjhsLQQHqsRCPYMJg16b5PULoM3xytL5nYA",
  "key36": "7cwJwmqLGqJMViv25dXJme2nFTkmaWMZHdokf1a7cJZmENLxpzkjqe5P5iYS8UZ9ZJ2yj3auDat8as9ZAVnzF4w",
  "key37": "4RQ3XBMdTdP2oTiCUWZqWxXVFFDWkzznXyDS8SuoT2MkjxpDNdRpE4cEUo5BqseSsx2dtZb8b6mk1xsshPNTH8PQ",
  "key38": "2c4HrLTZDXm6tncTfaM62MQ6oMhWCfV3qzeoNghmfTdRWt6J3mzyTwqTqMx9ECS5QUjN8swbh78cVGAxTHY1n3DE",
  "key39": "5UBxCuuxBJBb9smm6xPJ76aj8Us33EQw9odudTvrrq3Qs9YHjTvoF3fdoGxQ8b87HZFVPYTDCB3dKCKTxjxgTA5Q",
  "key40": "25wepasdyumRXai2vEiNkiAmLiebjzsa3Rw7bCVyFUVzvyD4EG3xbMfX67koGKXTDhEMMEHEkeD2s2RXqM2QRTZo",
  "key41": "uiE6jLdAQxtaZivp7qTrb7w93Dux93SYq95AZmCXgyZK5iUpWEY1gPrp71rfJ8ZoPLVzmzEX5cpq8QK9J5WS4zd",
  "key42": "3fmSw2V3ASZwRCSP3RyibqZbT6VS44TxwHuQJC8vFH7ahXzXVP3udAKK3FeRdb8KQ6XiGQDeLEtiVEJQKymdBn3r",
  "key43": "3hqeRS6BMEcgN8hGkbmGwg6vAkVcrWWNKXuTetHiTFjTjbhEKW1JNskCqESYBN51PMtzsDk1t5eo4HajV19yE4SC",
  "key44": "hR8QmSnogy5x2vaV9LDUKnGZ89xrZxDFpSp6oBoE7DnfYt1dZSzKvv8wmrQceks3sEZB42sznev8Yet7NTaRbLY"
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
