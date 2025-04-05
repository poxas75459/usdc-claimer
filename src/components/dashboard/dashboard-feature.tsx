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
    "4VbrnaxaAwdfJvxpojMX4AaKmey9Y1EzzD7TYXKLyaoDMKxyzX7cHNvXPsCsnQDF5yKUPx66RLY8MiNAho1mdnAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLiVR1HT1RpJMAXzhS8DRiqi6xt5FC4V8xkaq5NocQFMnUKnhKAzeKawRJdmgg3rb2muktRfRsGVkMGideoY5Xn",
  "key1": "5H8jkN7Fw8jtCJtB1gtTgFmxBbnHA9WhxbqdKS1zcDo3QjU6sqj9vjuTodTJcMRUNsSYsKrWr4AcKFLUJaakcXmi",
  "key2": "269SRtVAZ1rPwjwShoKRGRdK7dbhexnb4D4yz4E1K7Jo5HFbWNH5tgKYJmCRZAd2KmHm6SMxMxsuqwticc4Zc6mb",
  "key3": "2dQnsMMd3Q1PPkFZuHYa1szrWQydtud5pVwS6T4wsHFVAK3nZcezvE1UfjEnZKPtre9yg66DgjQLRMcszi5sn7P",
  "key4": "5c1N1rVyskhjNMV4ch3qqmVxLsJQSbdXtzSLhqmUWY9StMLUKw1xPUrutqoeCtQk77JimygLFuWqrYwV5G5r5R5s",
  "key5": "4gxDagiT7Y3ZW1KbGa2HXsGkmMBt8Ujmx6V7coScGchoi4FoH2tXMfpZWEQ4K8M91hR23iJTz1rDtNbRSGgyma93",
  "key6": "2HTGBqEmii3tVuoSzUYygPZxWEPw1Ct91LfCv1bTRwZLz1bYYatiEXmrwzyGxFenDW8rvqMywUw5PXKEWmashwcJ",
  "key7": "2sbkoPCCi6YqpKv3QGUY312eHMT3ecQaZTTu8bFT41qmPFsbHJiiSyz7PQeB2GpGfT5q21sboRFC8JDnQZMtGxAz",
  "key8": "wsGHedsL92QzzRrcTYneCqkuLVZAtx83YzWzwzv6ST22jPAaA8isyGxxmh6qbMss4VSeECd189JRsQbD7wWxWdm",
  "key9": "Wm9GoXYRn14SzssdEP3GTb77XSE9ihfoNpBrBS9Jb86tDEvxrbhkAq6nXeaqbmJRCCtKJDkej36zuvmiD5xt5Ms",
  "key10": "3XQchPmR1f8wGJER3DgPK5YLgMLY9s1gRHnSS3xDVGSPQQuCx98DnjQsAJ7q1jG3j7mxRNbz74K5h9niDQ8iAvgh",
  "key11": "5T7ZPsSm5gNQCV61R3gSqRPHuRRqdA8QeatJVFxK1uVAdLY3FmzYGcJ3P1FX5dAQRrtSJiYrDGi1JYgi212QNtwJ",
  "key12": "4Q8HsjLuvaxmwXoHqmPHq2Uov2twfoYoa56VBAjxYumBJdYdZWFVPNm8rfrXfmgv4znJMkncXmWTiZpqUcAcEfyi",
  "key13": "Wh939xrE8NEtZvy6LSJLhhWTJvHWjMtd4SgUQ35ZYvKNTbxNCZXBuK7PsPvewhUWDVKSHtGnMoqCnMNvBFq7NnC",
  "key14": "2boJGWoEA4kB9u9n7NCoxicVUGmJUkRzdX78X1U8NHt3an9xoBEazT9xbvEhK7YUUhBPzD8kowiksv4M3hedm7XE",
  "key15": "YbZT79XNhk9Ak1pZrARHzKyKpKqrZXjiasVM6GnisexgRfhiLeZK6ktz5hr7jQdFpaX41fiLRLhAEkno9kQGTtE",
  "key16": "3Svn7JBJvnbn2nedT9pVt9Y4L4KHXKHA5zikThRg5gFJTUZ18Sabs4wxxDS2tvzow5jacPKvTHMbMiCCwKRkm2c6",
  "key17": "2TjgesMycq36m3RJz4vJYzHbEADUuyD5DQpWJBtgMeUrW8jJFzUmVGYdsxKMbNhzdHeuok1XESc2nsmjUS52fs6Y",
  "key18": "3JajFEGMUjtwXDvAQLVQmiiPrp9aGHbHi3RnsJYm4zNmfNHQ2o3adAjvCLi6MBpxrGhN58vUucj4dPPgAMPib4hW",
  "key19": "4MHvxWdDgrStKk51ueaCbDTMpeqkV9pPGoNnGgLf57xip7edK7cxrRftrY6YzkDAepETavPeD2NhxnbQps94TK9D",
  "key20": "3DCR7sVjkDnw8zMhQHnFJ2BoxEnBUJ2fneVf5hPwN6vnus91CgwE318j9CDeYTMwxE6tZPQ2gJhXRuP5ESEmQCk7",
  "key21": "FXANCUdsb8pxsacRj7CwfGtXQLsY9CHxuWkqujSziVN2Bd3yB6yDfERzwvCr2U6w6s5TibTaCCFZSLjFTcbtGoU",
  "key22": "FFMCrggmRyrkKpMmDKMzuBh6Y73yzq34mbembLjzkzraYHv6VcnTvty6cArAuYbnV165sNT6u2fEEa1hNS6CdsG",
  "key23": "4XGgdL8WMgQXoX9qtrSSZBYspb95AYim39BfxGhq1ZJubf6KE9d3pqtwyYg6QeFAcydo1d7eM6gm4svLWBCdBq4G",
  "key24": "39EtUc1kfGWpg7ycD5q3CjRxgQwqntFYe5t8aK16RDFevek9Ys2SrYKM287at2eGzGJR9vGYF8Jw64yP4wWfA7P4",
  "key25": "45UKNws1rUjPKGvFheBtmtRWYa3VAdXNyFAFS59nbptT5ihPFvu82K3foD44eBFECJ7e4FzQnqNzXoFkVoHrGHRz",
  "key26": "5Kctcd5uozKXtYEcg7vt3p48qWB4T8DeEo4NYymNcukq5fqg2CuQ2muQ35pv8tbgMDESy4SWesDyZHC5jz2LSo4i",
  "key27": "4U76v5XKL52NmBW45vo1uEJ9AgkL4toZt21n9C2BtPucihyV3FtXHPEMQka66XTd8MteEzwPpUqU5KuRPEDsi37S",
  "key28": "4CQzJNVPG9hSPy8bP8rAMHiFmmaNxbXpxifxXG2GJstx37o7bnKgxTWg3tdnF98SYMZorm7rYxWb9FmKdWUuHAyA",
  "key29": "TbKijWF8DTNTPBAbaN5UJYbFzv1FgV13eyn8oDmorjSfdXaw2ZHknL8VFjBesneLwo6hDUtEDWZ8Ww15qgP9gEA",
  "key30": "4EPe11amyDoP8fjDyNfGuBi7sQVFe2i5R6kZ9SvgeVESbnQN24yZNirkR2qDBnLicS4ksLL6mPijMsJbkCNitzpq",
  "key31": "4N5AgkNnD33ucZft2D19Kx3XiGD4fFUZxWB29KbgEyqx9zkyS1Lk5JxKXmS77C1iPfPPgU1wHb3Nc1eDhN1XhQhY",
  "key32": "272hRqNSPPtnqfwaU4hKfW1JfpUfq5A6jZTRvCiNsGBdmKTvzrquGwMEPXF9fVToDto8oVEcDWS67h5AYzGjpxbR",
  "key33": "3XTEg6jB96KaGEjPTzaJHtCDp6JVk2NGDUf1XPhkoBJiJ3r6FDzsXWNnd86iePZg53tEMr4BC4FPSiPBSLX4989S",
  "key34": "4tfgJSUDad1mBS2RsDBBf9YYVVXUe1Af841VtGPAwbVnRKT5zsozXh9du6TMw9XkyUkTPxraEvbkpzMqRrXqiGNX",
  "key35": "wBNLBxz7rgCTXi6oP7k9W77JojtaqbMovB6iqGMQJvuQVwsh2GpVN1UvgxHAfBSVGCPE65brqtx8n8nXe2zmPKK",
  "key36": "2UCgViSTwNCgzTom1yEECzgS5XgivAzQCTDBgiEE8qVnaAq7EVseXZMRTFayRmw6emckyqVtVxPU57MuSb4FGtft",
  "key37": "4KMTZqZNsqF4rFQnRouaca98yTx55jqXDD9QiPS18FSuDhnY2YeVAZugQViybAAe54hCAt8carxzyf2aqKSrFqT1",
  "key38": "3K5jxfd4a5FrjCAAG2LR6oBMuVCabbeJkfjJ9EVv2RzqRB6DaCyt4nPXe5qdz89i6XuxvrpGAxFRV1qojK8q5biM",
  "key39": "gYmx9zU2pF94DMb82iNqdaKXYXo9Mgz7QD13oj5oZi6y6AsqZ8vS7Grs3nff1cEYXAq64Xo5PEE7FUbR8iQRUM7",
  "key40": "2nPfs6oYYjrTJeK2ugs1FDdkSbWAgnoJ1pNYmeFesrsRXZ6Qje15apqk52Y6Hivv7jVqRv7paaonqeQGvJgttANp"
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
