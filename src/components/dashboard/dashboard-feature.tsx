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
    "2kXAB2YooMBjRHd7SZHVKi3fdzv2moFgnDxvoXBANvY3E5XXMtJKYRoLzy1g5mTBKz4XUoE3dgsDF8Ss7eUmLFDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tmu5pq1dWDa1KL3kcsSiwoCgiUJzMtojMRTJ4vkGENeeR2o32YwRbBFP9ycMLNUm7MARNR7hTpz2uTirz3y9btx",
  "key1": "5PheH9VQeBrBcVWZZdbtr8cDecjaqcoxz7mjk8iNBgsinu3Znr3NRJBKdwcdHoizzddhW7mc61S3QNXo6eXPZncP",
  "key2": "5eu8FpyguZQAUU12QtfevRmUQDgXM1GawFAcskWGuBaW2xtNpPzmN9xXcWDWKFHwWwth3GuLKbgitazBYcAeBEQY",
  "key3": "3CY3GNtAUcDTC49wqUgfjtqZm1naKw8zwe6aY1X54vURoAXBs3bvZWhtPe7TnSP1XLcAVus1yhG431TTUzW8KhJv",
  "key4": "3FpjncFKRU7CLpf7QJUk6GE6zLPGgotxibnYRQRjb7kt3cLZjJ6DrfBHe936XEMg5752SJ8DkWenzWQ2j1icvoqr",
  "key5": "4FPaGmJNhgMFGv9JssGqwuqLuXKbd4hiJEwzAxKvD2Za98qs5cobmz5jc7oEL5wwLdSE4epmwY3w3ymGLiivbByf",
  "key6": "NWQgVpFHzjTKRooq3ZfPFaFiSYs9rApXCYHfzHkwF1CSdj2L9Pk3JBuD5qxgkECs8biESpS3DhWxW9TvgcksvtP",
  "key7": "4hMySoArACmteyjyZUGBYMXox7URadFuGFjBfHQ1J5PXWwvprKUjwgWm61pmyz5UDPF57VD1MfZUAZJCdCyajbYS",
  "key8": "tLsSeGRibDcWjX6xFpRm2MFTBc18RyLcvZXYrZvdumESu3mvJstVEadqgyRNjj38zZKmxD9DxUUSJmSvqqWt3H7",
  "key9": "2jgKjN35BzVR2998nxGnY69kbD5yNqcauGBk6GT7t2hjRnPDpwx5kSMh4KJyj1Jg8uHUhjP8D9gLyyBZKsDcE2Ge",
  "key10": "3USub8ZKywhVDQshWtR9pEPsYriHmLCZa98FTVneEVNWUGaCD4UjhkUQiPW7Ej5WkRDSvhYLKNkg3Nm2zvZyZ16v",
  "key11": "53cv1tUSN5SuGupSZJU8PQMVtpVeySBSJ2Y6QH7qLk12qVzRiGyPTGN62QiR9FN763F7qoUjHUGcGo8pFsFgLiPK",
  "key12": "47qsoJeCtyHfxftUnFsHn2KmJnni8f7vWDFULu8ytWfztcJGr2C4FCcLmsnHpL2nK2ch4kcQJPEefCj8zQRW5erY",
  "key13": "63MtxqB8Yh5GDUvKakrYemVPrGsYiNnNCXTNBArG2oQbbc3AjCbRH2qmkpPDDj9872V51iP1H8ZNkAr5S2QLXSDs",
  "key14": "3ASStd4irtXvCcYeue96gEPqUzAwQFdwSojajFtQzCq3MnHyb21Z9Chc6j5qXu7tptcY8SKV2hnqeqUNsDbR7uy2",
  "key15": "5ddjCnBmAtGcyDY45X2pjnMe16Z343Zbz3y7MBWuHpGVy8xkUx1UpXJD6aDahyATPY9pPCZJB9XTmGFSH5jGRmcQ",
  "key16": "XRTkx1BHrNZF75eZU1HfJA3a3N19TAQSHEkRpjZ2XuNMopkMH54GnxWni8kuEFENH6VxczQSQYyGnDe4dSEVKsz",
  "key17": "34qBkiSQ9ytVQj5vTbmxRFe1rgYy5v86FmrmU7X18A7QcFFEPKZP8XwjBjNDSjofBBK34Gw89ffasKM55GMwqUvT",
  "key18": "26aWik1VoZk2fCYYcRs2pLdzzakEiGiZjChBoJXd9NDPmowZz7KicZE5w3xMNyoAX7Mwxo7koKRVHfGPJsNWGGMN",
  "key19": "5UMUgfNxqKbNcRTv2wFrMbLAJq6HS8BsR8JUamBRuGgRjUYgycQes2oYsRJRJyPQ8ZPHmVBq9JzMxiS8ZLq3gh2",
  "key20": "5pRvN96z1w96cDpa2iaBqMaQTTw3UjHNfQrBqEPL6qeemapiJKLnz3KPRVvJnuNNmgd17YRtAiWjq2b8Yi3PnECA",
  "key21": "5V4CP1opRXQ9xdseUqQs4MAgKrocK7ttX9gVqoyGJ7ECm3CpSPJMWqsjQJ8MYdYm4x8AKJg7zcwnQ21XhSFyYDQR",
  "key22": "3V5HNEi3mK6wxB9zDnk44WTJNyRc4RB31EJpGbeH6sVaPNoTX3EnCvMtNYWXMHY162GB21oXoueA1o1k73fRHppZ",
  "key23": "59yveStprDhjaQXF1xB1b5Dx2RnfGan8zxYbdY9jNxqAabmgQ5uS3w5fvBJp51xKiYYRfrPv1Vkbn9hGPtz2KNkH",
  "key24": "4tPAYbPG4rhHoTeJmmZpH31YLgx6UxiYyBN8wF3KgCuJQT99JdoZZX9fVLjdBP2yCvkjKqBokr2R9jZZuWKAQ2dF",
  "key25": "2sFC7h833UVR2C2yQjpbUs3hoLRDkWMy2NyUkv1oFeYi5dNuhN2uwEP92xoTFKLKiDMYsZygqxHXEc4KrgxTXNHN",
  "key26": "5qVvjbCBGeNUwzDEHZfh5QVRCs9C73j52umNcEsxvcemtQ2UAEUyYBWmzrStHyaPRqpQRe3fnoD4gsyeXB6V9cae",
  "key27": "4DXCq55krP6ud1SpbwWyj295PJPgq9g3uQ692fx4coT4Xn1osgtwL4MGYysYUh8WuMZXtqu2JYWYQUhEcwzmJtz8",
  "key28": "5GUFvK1PVZwv8be7LBPTLmj3e4JMiaWPkW4TJ7dA14fN45Q9wXfVeMvcYVpGHVTjKGbFyhWnMWLuoxKNujH114si",
  "key29": "4ZvYhYYCuyNvjZvUEMA3F3iddWiZWjieTTqS1q7NJCKeK2taVR6Zp3W2DpMhVm4o266JDdscaqzyTyrt57gnH55Q",
  "key30": "3JTjZcCsbmJPCpaDWTt9J3PrRLbU4qpeP4FLpencqNgkSRZzU5jHqw4PtWPLGkrv8enqi32TaJdKAvUrEnHTMNnA",
  "key31": "31dGg8BDDRmtCAwWZAChXwRj3rBY7e6MwgPW9Rhrn75yajsB1n6ZQqeei3mwvyA86qV33bVTDcXFpJQVtG9ug4NN",
  "key32": "4Mr7vNrGzWaofvs4YHL1EFR5jJhyvJ73zr4zm1jtXaniGyVZMvY4qoNAbVufrhm9J1qmYGEpKvNzoGZGDYzpJN7B",
  "key33": "3ap51DaCMJrxgPHEf822yLCW8vWdFQH3FMPQswBYBzJA1mjKYt9SBR74YHHxTdp5qMrXDrtNdDUfkSSb7sVNJgTh",
  "key34": "3XAZ37ov8t2ceAca77zE7wEhQCRSxiR7GxCJG2X5qjVZeWV7u2haQTzxb3LZh9YJBpPJNVk7HichWjAjTcaLBfu",
  "key35": "5P2r4eyJRAQsgRJc7WQcjRADiua7ZQ1aFg3rDDP4xtrHjwHKcvQJHQgEe4sBXi7vEHwvgHZTRXyi7MibrSstGyMZ",
  "key36": "3x1M3JsuucyyHC2mFqpHfcktVgdEkgSKT59NbbDRemZt6HBHZwfgV9C9mSp2QGtgZuwFUJ6eHsTYx7e1m3zFaeYq",
  "key37": "43aRNowfnwHLpXoV5SiYW39wRuMqVrgZAryEeymCzk9ZwSFrzc3QbozHhbcmjxR6Xd94nD11kjavvJ2fSYo99Z3g",
  "key38": "LdfnNxWKry1tw24Qv1ZNsDFtuhj74zMtSNeWU9gBrAx7yFgSXdaDy8sGLzTZbCd3DkNNxFcvmaZjDzZL9bCUtmh",
  "key39": "3KVnhrrocpyQjfkeyAW4hBJNPg6eP81CRAMzNxPFX24xfd4amGCH2TkgiPg7krdX1UQ7J6Je2YW5ZWQFTGfy4QJY",
  "key40": "4rPdvzg9dCpQ3zTnRbrgwADEcEu8WFUgFhbAMEjw1MQf9sEvBYCZpkWTPeEmcwLQphqfCuEcKwd6XmYMgyQPkC2W",
  "key41": "5g2jLjqydfuocsp8pHykFUfHcX9HzNSU2uxmMLSwDwdzvbD7msqmz8TB5oWeqg3tEpAHhLfML9gLP4sVyEgBUTtq",
  "key42": "4yqcnwcKDUCJgUH9ygGtJYEVDSR6YfULwrhGTksyKNmiLv2rLeBJotrAwPcD5D74P8yRoa9L96SBhVELfe2btEaz",
  "key43": "57aUXpJEfrHpuDEqqRzcQEvtoauYg4SQNNNJEMQKy9sfdUzKk4rxL5MHaPqduDPDLmrjLtTY342HuGKuXuZwCBwG",
  "key44": "4iBTzUBGRwHc8ak4Pzi8NxnosxGubS7KugrYShH7NkpGoE7Z4YWtwyNDS2Fa3arg8uuFsE8tv8K4C9vsV4ZQn3oq",
  "key45": "4b4159gnrRKtSL3cF2zXNL6GGYBE3yUgUHokn4wnZFkj54JF2KC5FK42XyT3RcXPuLksk8KaYfMfYYKfW6jvbQcn",
  "key46": "P1BzxKeqtpErVUM6NqnaG1vHC62neSs9jzrJFQKuzAuNKyZDDQtXoXLWcGeHFh6edTwUxjCVeKtdQDsp2nf4rrU",
  "key47": "5QNGDJNSgnsm1LZNJHejajRvR6wVtGibaLLsbQv64XcE39ry3scRUWhdzTAegiry9MjiwTtrrsDrnRXATLmti1eR",
  "key48": "51Cf6i39XAb9LYe8TXh2VPJpzMwNFis5Tot9AyfjFtoiC3ZfkojY6FZT5vUTHnk3K1cGr1Um8y62ETpQox1E8QfD",
  "key49": "tnZeuixnP7poyUybAjFYfpEz1MADx552HALwRvNfXzMvLp9c1ZY1peHQ76H4azFxJNfcREiACcXvKVGP1izgF6k"
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
