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
    "p6fPGkiwnKZcM7cLSxd89Dw6yRzYPxVRZKHegHUmmR7iM1x5BMpJsnazCDTbmjCPF6xBVTah7UP7XUGhXMgC4Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hr59rjCNWxZYEMQymSoXCyB6n4HYLsLegBQwFQYm68teUFAYFJwbd9TTnaCkxxX3PufxvifjEbRRtT5atn8yiw7",
  "key1": "57bkFpMZxsMQLzAD8vfuY8vjgbweK1V8FnnDQaMeraE48UnntHH7xbPMwv57m3xy9GTpiKRJfemvq2UoQk25yLLD",
  "key2": "65dZj4HScAdWzbsyeQB8w16VgSdE4XRs4RRMEJqvkv5wicC6E2z35CD1gGX4kEqB8FcSRzaaqqi3CYkn8H3aeUMA",
  "key3": "54pY7Z6m84nE32chJWcGX9TEHVyzfAF1NFS3vSTkc94h8gR6sJxDUUMubq3ML6kbTKSkBJixsUY3LFKUdxnwH6Dt",
  "key4": "5fqtguYoPu4UuuuYBsHsudkA9j914WBxnaPvR7gXaBBPd92EnD8eg4xgJgGDhHx2Ei6bcUzxMX5yjeDjiHho7APX",
  "key5": "42yXKGDvSDE3QeWq2jmn8a3RyQBgvSnrkGP2g5ysZu5rePmu9fc5hkZ2j9cK56azjDRLw6NESkT1bnW2Xk5oeQUP",
  "key6": "617H1paTg3JZzAdDzTe3Qgxsiai6NEzj9njWkbZsoNnttBgCxpTdJx5acfKQuVHmvPvqoraWXdvTFfzMBRp1sMjX",
  "key7": "4teniqkH42YDqMun9HVF3Vxn97TSEXcYqod1jygcC3yLrJYXDdB1VYDFAs6dbaS4bQZCv4dUbcriSgLAwiuUwrWq",
  "key8": "3mWDWxgdbUtsFQsYyXi2WZu7dYN8BprAZ8KGyatV4bj78voEWpGFJNZEtYMeSZPENs6ZEiny48zDpo7WoMLe2Ejy",
  "key9": "jnkGQrwAmHcwEVrCKkHfdXZFWAAkmse7PVYFbfSEB7a7epGqLqr1qe46gAg54kpPfERWan1TbeTN4wFeEnyPhsa",
  "key10": "qFTx2DqPX2ZrNRXRZRJyoi2EVWoQzoFzDoYwNbUKY9iPEEjbyTJLTxK76h1xDXRw5aYcDfnFmDG232RB5n9Gajx",
  "key11": "5qUUizM8qXjgBTJXTgAG9xYd6V61dtijPMgZuGouFGB4vXaHz5XYYLRPYgSWc1pJ3UfedGLdsoXfAtXrW3WPapCb",
  "key12": "392Kriiz2TE8duSUYWcd1vnoNfk3qLjwtUAsbSCapw4bcArwP8N3hFuyc7SM7WGvu4nwL8HLXafN7o4TL1GR64Ap",
  "key13": "5f5KRiqWGZddUa2TvD8yH6dA7Vw8b87WofGDA59zWM4722Ba7RAiqSzAe4ZxmL8erV8UniNeQq8DerGVCq1gRkE5",
  "key14": "39veLrrG8cpURMxNpqXDnwm9DrzcMubGwsc3NNGb33wj68S4WHCc77Q2yLa9RYRDUjAZd77xjh93Sy9w3Vdq7s2v",
  "key15": "22UNemPB9i2Hww3GYRzuqXyPbXkuvyaCsSez4twjqT928v4J6CVk2K12KB1jZPDgQcpNPA1W5ywDQysRnwNbcY8e",
  "key16": "5fyHu2r9qzMDAsfpJ8fagdLGF7GYYN9NqpxgTrMbJDvyFveCMjyShd1zdR8ksQ3iLq8DN3gDA2pGexMDFXPXahZZ",
  "key17": "YcHzvN96bSRGFty96c98uVoim7zbsTM5mvnjb5ce1LUfcDXdNFYnp4Bf8ZBudkcrDZsd5LuzQyrZchKqYgPthuW",
  "key18": "65gmHvD6YKE3MepPP27ZAFQWjPzvkvT3X7zMe6xqyixMqmabDC9EWJqre5JMBBEf8j4qvnbm9bDbgN8XfqcD1xxc",
  "key19": "4f2ahRr63Dydy9M3XBQgfYADGtSQdhPevbCWw5ru71ALQ4KmtsnPchtJXp8cjcC67MGS7HNLMg3Bab12ZJDQuZJ7",
  "key20": "2sRDjRxJsnfbzaPtozbHY3aiaSbwQFJp5beNozpwDGoTBGxWPw59Svg6X45gy43v2iYjBzdeWbNAr3o1fgUAgvhx",
  "key21": "2v1HVbc6bUWL6uuf31ZHQd9777dNs1mJ92SJb44Dzh9W2eXEP3XGVjb9ykRKiH6sexnvgYogtmgcaFNheUvvyVoB",
  "key22": "2JuWYs1ub6XJKxSjTQoft4p95tsqxRBsz3Q41t44RteviVePiyinRYqVqG6HvfL7mqVH4ErnRW3YH7VtgDMvbWfB",
  "key23": "3CUarAnQUNaiRswedcfkfKXhzhXShXXQGf6gtYtX2r6hwaGrmRBijrp5XN1CodYD7bt3Q9ASzdup3L7idcUWUXpx",
  "key24": "4gCu2rCBLwht1vjTQVWqo83zrVPnoWtE3KSaYrNiupCmnWcE7kAMatk7DAKDvfGcJ6FF15k852tYQidJeuwsZKNU",
  "key25": "3idZR1b6fLt2tLVZiJ8N3jUwTswYGZSU8tobG8CSFKEYi8jvrhtryiFsQQ5H4sfAv1L7mkd7urX2uuFUVSW6AiY1",
  "key26": "4vZqagiW1Pj9et4wX7BiNgZrpfsfdxGakxPJtSbWcLpRTKTWMNrGbmz6d1Dp5rZDfnj86jFiKqG9aYfjDJrQVBvW",
  "key27": "x8rRE2KawSYUavNEnCMj4et2YSENiW6bFvYzuPR9wmzazwvoN1gswZNFnh1j2t9w5KA5YQKSQQfYHjDYGcp92Wo",
  "key28": "GiH6ZZ35AxXVE3tTm2aGZxnWczkeqWASCtpAP984FX9rV7KbLusPw72BxXKYvbM4A1uozJDJLWaNBJEmeqpqK8j",
  "key29": "b8uB9yzBbLZorm3KJCJB2uNoHgPEph1YL1R8sGJfMZC72buHUPHMSA9ToGmZHx2W1iKMinXt53zUEWGCWxnMdRx",
  "key30": "2px5PJuxENq1pjD4FizxBwoZFxefL2fca5znK5gMBuYeCv6UvahUkxpjwmN952yAsXX8wW7um3g8Xc2Wy9QU4u4K",
  "key31": "387iDD4FTWxcGLLUu2tcxtxWcZVCzT6NwKsNVikXV919Qna6NgwhdwbdhRkni2T6RGf1jU8CeieHUqh9jX1Y4aWG",
  "key32": "3p3zT5p73pPcukqu2VPjSoqL1mPtvjX7grv5nF6opPuRXpHh6swoGfRkBnnsS9J3JuvTXYGr6yR6wbLUmhDY6tWB",
  "key33": "4yXHRA8ySJFmhhR5swLiK11ejDiY9HpvymymPRNcwQydp8RHnFbCPrLDov9x5QpPpdvskiToFwUJfCyAcPWbxFeh",
  "key34": "39s9Az1GwHaHcUAyS73pLyMhRA28mHNkxbdtutSBth5MWnywNgLfo6vUcZ5DRBcRUZSJ5EQameXANYzr9abJnDuy",
  "key35": "3tvThziDFpAZ33wxCAwxmH8A7g8KYe6n6Fd2zBjR2n5NYgTbkPD3MuPfX9nKUAKctTaQ9xUA4kv9V5kJrKtrPuf7",
  "key36": "4LUmQ2ViiGgf2pGoQQEcCC8PttwbYL4tcXWhFsVq2xpjMaB6DE4YBPZWPWqApzsNPpAZ5zoZ2JqUCe9DPfDDqJqf",
  "key37": "3QPQY4z3vgsTx4RR9PAxm3WYk9VB5Ta6nLDXa8QEA8k3gcWa68Gz4a4qzmB3HV1Z7ML42co8G5EhN3YwgVrfJE3n",
  "key38": "4MjRtCDiRzQYciyHdwPQndXj6QAvZ4JUpuF3PUNhxL3npCxeroQpYRZARTTVyy76Dzrm5L7PTP3ybHyAPyEFEcEa",
  "key39": "EimL6aboKEfzoSVbYifcyiWDTh2HcDLxLfUZs86LLzsjT5wwYEdfCzCd66U5JRAqCMfZXVa4r1Mt2E4vaS23vi5",
  "key40": "3VQkij6JW41zNj3H3ZkbjJtJjwxcdHaGFLKA1ZW6jnBUsBLHZgb9qF7w5oNgsjknAjgzMRLWwqa1BEi1nNZVWfD4",
  "key41": "4g5wPrA8CrWEThjKByAJ4mPndB8DrAN1jFUN2br9mfoJ8tFevw2SbSUjHN5LztMr37SHqFrgxZHxd59uoBHu4xVa",
  "key42": "29G8gNa6FybUPgzCVANcnfrshhKADuhbEBNM3hPJAbYQZ19Cn4gpsLnd6GFEZ2BQqs3u4afC4HJnvCioGTfHa6hj",
  "key43": "5Wp73iXCijuqJusty3Sj9ED1TP1BrvWfdPVzRm4Ddvec6DxAhHAmFfB1eZ5qR46awrnkKCzzgTqsjRfjKRuJTr1L",
  "key44": "3Bhgpp8q5mTkSKPn8iqAM1XwApCGwyB3VLeuHaSehoFHANs86nLgMHjfmKKJ9sByjXUctNsp5M3u99QPoqihEMrC",
  "key45": "3dMBVPW1nS1QiPzQBT9ynjApv7QdoK6EYh9V9sGZF7CjK6cdoafdaDDvpiv4c69hhaZZ8CMocWwGY5KrbhCShn4W",
  "key46": "4Fzr6VnuE7bVrhu5jdMEZPDfJLNmpjoHyqYoq4AiBpfaST1Jc5p3WMXJS9d2mxrArVLeDHMcx3xGRgwFK13f2nQ2",
  "key47": "m2L7w2MJdvp8gFLVaUT5MwPJ4cEmDaZYrT8GuQJRjBEh5by9Pv1fqecVRBmUMZFXa9sZVsuRsxQPoeFLKnGqVEV",
  "key48": "3Y6uiDEJ3QrmctZMoRE6TFiuXxvLme3Pts3fByNrPAScENhVCFpu5HPd9rnfjCnK4f6NcXT1gXRxAsuVaecPkgFS",
  "key49": "3PX8uhqT5pxZE8qtu9KJh7ak2B8hjtu6goHZGj4odKLqWej6R3oHnToL8skgUtuaBDJB4qABJDHVNXKxe9RoGoWp"
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
