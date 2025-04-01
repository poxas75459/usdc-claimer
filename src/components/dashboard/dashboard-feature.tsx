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
    "5NfZTSvESLvrCmy7cHXqhU1cx28CFrCcxJEM5759H1t4pr2uxCMb5UW7qoTTyJ12Rpx2v4dEmWFY3hx8eKPMLWbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doaSTk3mtQ68euqmEteAEefhKAuu7w2VaUUso3qBTCF1QYf9cy71E2YVfFWcbDjYy5nHiVaTHUDMeYr5hoB1YxR",
  "key1": "31VnkfaYWiuVDjvBnvzXMVkezC7XN5brgwnAee97TiFYsvwNaF3ZFhXRq9AvzQcFYh9guW9NXGyxbyKgUZW2H59",
  "key2": "5ZmGzVkRkMHKzb5fPvQLJJJLHA5JSfoaNcygEcbu6qjbKYmfw6RZ1SvP57UJwpy8817MqEeXohhada6N8b4LaXfj",
  "key3": "2ZrTxKdYWjNV41HB6yY9rYWudfedtBVaJmzM3nxt9c6oDgqNKxgmDWeGJH13nfSHs9vRDGKiM5vc5HnReV7rLkZL",
  "key4": "CjVUfZ6UPu4bCWCKjM9XBvqtFdrMw4SUfiXSpKkzefvqrPR78m1VCyhzU3RoPGtRRgMuaWtcbnR3V5ct13EgkJN",
  "key5": "4Q5j2z1n2rKZcDctXQeKFEhXBnCabxf5pKTCA51AFWZxgXvAYti5GbbThwTG7Vj2xkmKw8zDq73mXSLgXP158gv1",
  "key6": "56az9MgxXafN8wwh7jhiZejLHeBcH4wsXA8mmbymetvBmuVuVp8MRawGfApXG1oyg1yGhyfQQt4NaRxUF7fG8meV",
  "key7": "5eYp7LkwvXxo4YoqEA1Pyk42bs4rBDLswANCtC8NnTzp7MD69p7urTMaTXbZfbf3R8kbLbcCkSa1vZrEY5VXbPCx",
  "key8": "2FL8tEHRtDk2UNx96rdugrxTnHe4RBCQqn7jYipspL6K7bWA8mcSqCvw39QgPPUJpkZKEPF44Qmry8Mbn6vkWNoD",
  "key9": "SBzReCrjXs7jNQ7dLx1MvLuA691YNFKf5eF53hMiNEXX1Wdfc8eh16rFmmZTJPaUsucNuqk6HBdr5RVLLgJ4qkw",
  "key10": "49uQ5HJ79hx3qPrrQysjidiHTibgeFpnVpBYYjhiyEwh2sLywZTQTDMEAUNKhxRNM2MZwqQKSHfYiC8SorirDNry",
  "key11": "45Uk81KAu4V9mtiwvk4nCXRYDTGuVRYXPw5Kqvir3C94hSagSNtPAEyRuE9knVH25ar5eB5CS8Vddi2akAFiCk2Y",
  "key12": "5asSh9dRR2CLy7ebfXNceoxnfEkWaq7XqqZkN1XLSvfGDka8A8jGXJCbMo2FG1HoMHeczDduwM9TxU6MJJECEeUa",
  "key13": "4su1ZMgVuwVoTqgeXt31FbgPA1RVdJ5HkV9iPPbHxfku5N796BiXeQX1hRX4h9ezr5YmpZdGNDmSCWFfLxpKJmN7",
  "key14": "Lycp6bCW1RoFZ8CkmC3gxgT34AxxQoUkZyDPCc6RTzqXhxRFZGcsWxzSua4rjisVBtBDy44UmGA7NxtJTsdfJSK",
  "key15": "9KuGDR4JMNuKfTdXVUAk13YV2Lpxh4Jg1PE9p1S1azaDshcDjWkLmxCmNo9pKBg2Pm56sjL8jwPPxiAuGJMCJPw",
  "key16": "3EyCnEiT9NoqyWuALSq2UF1yUuT7a77tmcSJwUnjFUx6VCwdvhTzev4ecPP7wyAJzGp5M3sFvQNfuLuYtQYyB6vZ",
  "key17": "4ZY5W6djcq8ga6qrrDN7f56JkV68Us3ePSL5FgPbuqgx3feFbF1EoydfrAXskVMAvYw8xTk2WchdxQuXczpT4jqQ",
  "key18": "3112W6ZqYuYdtwfnhkJRFZeciRm2JX4rd3WB3oyfko4Z3qVrr3QVRUmHe3toEXswGQBpWL7Nt3wHP7CkZQuEoroj",
  "key19": "5axWDnc1nCe4hjEcH8pBwAT6aBKYFunoYLbzMAH1UAdX5kAMNN6EoU9MRRaeeYh6uG2koiBLTekHTGKp3CoTLZbx",
  "key20": "2cdt58nmdec2xreMBH15rKoeCqoGLLRsiLcPatVGR6QWM2GETR9XijwHf7wAmwSDxcQPHukS2ibDPM6aNSoKjJqy",
  "key21": "s1P7eqjKkD1rqBTCtLtYDaYEAcAkxA33TJjFuNrpZEt9ZX1EKfBC2txetDBNBg2Y8PxyC1HFURx33ssT8TGipMs",
  "key22": "3gxR2Pa1crBAfMirqZN2EfqKmiDyDtxkhMces5DsUNnn8xeve16dhqhgQFbeFmUXRT5HgG3b4JuKrViumLbHV1Qz",
  "key23": "3ykUUDCwqPmt3HvHVUXkNbq9UpnQbMHPtnsYPzBLNbLHGhskLmF9hpqz8DbB44ZN5krJrXgcNNHqRpfyYU3YEkiZ",
  "key24": "5BdXFumctDqps46XaSZC26XbvbyxS7BPZgUX5wgBoiNmG8vqW5EnkXeEQ6R65VbK783SpP7nfBNS6chkanueBrm6",
  "key25": "2CEnv6FZiGkcrSz5uEq6sjEaC6tAyQS8ZzGu77h4iW9kGhzHHnmqdiuWn2CvqwFUN5GpMzyjjxaptk73LiQXF2KC",
  "key26": "igoMRtnNYbURPxz6NyTwAYq3xCarsG9ktV2MuaUfZpYWpMWExAXb9DpLqqBxGU5gonVsfs4GCCBqsvnUUmJTG9z",
  "key27": "2dvapCunpD595cMn3obvEnA2ivz4jiM4E6jrEbpZeF9WPPqvA34KJ3CoU53aBTzEvN4jkjpBCuvJfqhwFdnDdqdm",
  "key28": "4qHTgba1sUPz1qiCZfiRgThnvniJpe9YznMrSuvjM7Wu8EMfoE8kcgDqFYCpSF18oaYPH6yysPHFc3tnan6i1wW7",
  "key29": "54MKMXxykBua2EQrPGhcqskPuSLiKKWApGLkjFKazjXrPhzcPPkhwRZ6UABYgypGuPJYhWXFYMj8sz9a8x7sekJc",
  "key30": "52NPPK33Qm65G8aSt3WSZhsTwUxuoRZubaAZrez8uqvqM2EwrwjrtjiXkPdqVNJrqWskohqtYr8JeZ4LzVQ6HaBz",
  "key31": "3Pn8qugmyrhzozJS8EQJa59JvJEEXpDQdZHkPLTBMUXPnsj9Uxy4fyQxSvQh7QAMuFZM7j5arDrs1La2TZrDRzrx",
  "key32": "3Hhwoaud31Fbbu6ZosciGojfD9VrQ1EEebr7RYqUXQGvVEMvthYFizUoMeYXkgY3PCFAGw3fP8gZPiP2NffyPLyp",
  "key33": "rgH8peDL6p8HLVYY6E1qGjD5YYVuJGoQmKhivwMLoBDHNccQFyEA5hB3afrFPN4Sww7FjHhaKgwfnUQmtjEsChu",
  "key34": "2tAQHp4ir8R8ENdfkjp4ShX6YnrguERoBZRaa5Y3uRNKcvjGry4iuT2gZG4Lehosy84P1UJJt8X9KFnicAmMovSz",
  "key35": "5kUSJpuZtAa6uazZqA6sVnXWeTsSnzzu3d2emBCVMKPjuZTWEfpc1CQe3vEQUYgSbBgiVh2c5ZiAzsfLMPynxMgu",
  "key36": "5DUaufuCyMYUERHcNPVVzv2DsEF76nsvE3cCBEMhFhtahGrUNcFzrReuacZ3SYCaPYtFUzYJcjghML73d6r5vnrJ",
  "key37": "52L9gSja5QkLnJXWzmDTfFzsY8ypnBy4UcQN8WTf2YXkXY7nDwo8zy8Yy6VwUboMiN6BwQ3cY1y5diCu34y6mMvv",
  "key38": "37UqG8Ud9iy6tUPAmwGan2muYqTkvDGM3YcNUMr3EjfMk9Us16eC5UVGvJ6eTDu3kWWrQWTMASLmwdM9Q5jpj2j9",
  "key39": "SswZiN1C4nrQaJEbj1aPxFWqy3ZG7LnEowRFvLn3vcDFD3cLEogoX9WvUUdMgSQyQanPYsLsHE3ge8rYd1dcVmz",
  "key40": "2JXmsKNZrnuxgBDf9Lg2XYuM1oUiMeGA1ZyAWjRieSpmVkEZoaoaf63M1EeMknt8gNnujPVdYSVDLfc4oDwoTmvs",
  "key41": "5Vx4BS82MZVWGGE76yGCNhwmi8fPJLniC8CefsUMy5MxPRaZe7kNsFdRDJ4ewCqZDALJsgV8PagKYs6w9fNE7hDs",
  "key42": "29NFovsU2izpStgGpi46suR5F93C9fTDb6ummFWyswgPLXZbyF5UDV5dSjtEAjzrN21GbiEUTjjwcj8g1dY6jLLJ",
  "key43": "3p4EbZjghoaubfLwZ5XNz7hJ6RtWgkFjKDSWjQWqqPd2RFrmgdBUzFFamXqw89s63n4CZ25W2AerYeBbzmei7WgA"
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
