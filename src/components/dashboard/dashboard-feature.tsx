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
    "4tghyKx4fDBQzPRvmZNW3LLvSheii5gjNXJpxbhb2kkRN1MXhwV39s6RCQweKMUcsqu8DS1wA45U6TVbuiQksdRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Wf1LypCGcRJsTRHXGPNWJXGfH99ZCetJQb1ozPY6yiwggW73pyXiJMP8K8PDC3ZYE15ALvUDhdWBqJj6aqRGx4",
  "key1": "32iKzyayW86EkfsWvwZhKzLPcGF5j7p8iDfLwGpe7dsUnexUzQ1RjKTrxyCph7Un4QGBzttZAc3ga8tw514fEyDL",
  "key2": "3DT4yYMKytokzjpNjvKCVFpn4kiRNewz7yc6eYSGFxQZpuFgAG79FH6uQXsPPFFrQsA9WsuUKfSzrNn2QMuhp9Zr",
  "key3": "2uT2ygTqk3sThM7Zb6h4CnVmtgdyUtLK7NusoDBukrW9mepiUWcMVNubEaHK23JhY8VLvZvdCWTvm4VZQwUy7crf",
  "key4": "VBU5VnZtekcnb8jyaMoK3ViV1i8tewv53aXyp3RuiTRAVntModZ6rPgmDKQeF9LUkviSBTSDA6eRVpVdzWZaDMg",
  "key5": "35R7w6iLwdD5pCLNZVHtfrpjcSXfJDbob9QmHZZYbHxSP8XyjLGmo4afd2Jew4or4yxyfbaEco4shp3ZWmrrWPEj",
  "key6": "5v5SizZCroCUDk3isjSJpBYAJX7Bzf3vu12K1LEducRKYEtvpGDEj5dFEGKKRWmL7ioiUgYWfSibBzXQtUDA6ckB",
  "key7": "4Y49qvRCaC4JTXC4WAxNEyv6PSWBJwQyVGDc9i9PVMvKrbxJ3EwYrgBLeHfUWsWoN8Ywk7V8sGij9jbvWqMBASQq",
  "key8": "2hyetBFgLgbpzZLZD1AM131HZZFin8kypRqxrPuC2SaxZSK1ahVFY1GzbVXNeYhb1d4s5vxkSkWXZE2j7Xes5qry",
  "key9": "2KDPpsxgB65FWSPEBD1FUX9znVo4YREnutYMCg8HLT7ehpm748H3znYR5hmbaDaKh4RYvD4S41LnuEw94gWxn31N",
  "key10": "2kCjTnjXygM53XdSyAQ2ZPr4mtDvho3n9GULp6wafKRWasvuxAUo95gziiaUiBLkUKJ9vXGWt7EcgZx1EemYSE5X",
  "key11": "32FwPdHsRD9XHxuUXxd5bascg3fDCGGqQneb6n2bs9LrbbUjSeR4ukLLUB4kagUqNM4xc1CyfRYYESAyoAZqS54t",
  "key12": "2AHwXa2fPTCgT7zLcHt5zEhXU8oibWt8wnvTnwwmCKPCtXsYJDA2fpKTTSrpw4MAcuKuTJvCbE54Lo8W9JxoUjbA",
  "key13": "4yRbVVZggxmmrrPJMda6PLLqAqD8GkjaLxKCrz64LsZePAw765U1QUvUav1QTb2KfFR5HdFqAUFpoX8mdqaQ4vsq",
  "key14": "4YTJKKitC5zgWZbDG5FMyXy5zNBZFSbiBVMttWoWkQymdbwQSAeXZYATnBjTyrQWwoEyqYTsqDHrnR8eBEZxyAv5",
  "key15": "1xNAkYmAx9bY2coELjhyLxFnDZ2Qd5dsmqMyj5bbpWMdafmWFCQDrnrxy7Kmezn2t23oyqgqabc4wHUfSyEPDtB",
  "key16": "64diZoraT4jykDciotiv7ZvUq7kEPiAu3mteaDUhiJmczkeQR49rYbjKRiEXUJ9JY6tJh1mzEep265nkWQkJb8hi",
  "key17": "5ictifW8suVAcxVn9TJ6DUE3U4fvpXPqDbcN5rKfqQGYeSsbzieW2Vx6xJ5LspA3dpPfbqkReR9J3ZeQLRN5wkdJ",
  "key18": "utPs5Q5W5bxCMjiZvrBtxXbCAAvh7Y4ZK4KZYoBQv8ogYnCWjpEChfSq8mjM5yEXNkMYMFj9pkV96KnWs9MAh8q",
  "key19": "2dfJUkRj9yrhZC5YSVjRahxCuMwUF1VmoWiUjNyxagZv4vBSevRjVUBcvBqhezWtKDUsw85mSUbwbmcmULQ2RsqZ",
  "key20": "51o1uW7bCYu3TtyuFgR9eqGnpWCTE4ZGp3qZgUdWsdFaEVVtjWpiRnCbLpnKRN7XeVKTMWpJUMKdXRLK1LUVMwC9",
  "key21": "4KPTeeXX8pdmxghkrNfYUKfkD2iKf5uQPxt2V2Wzi8fGvb98XtN6Hrz29XrXg2KphsB1EC7PecmRxE53baNUBNAg",
  "key22": "5aNi62prfBeHQ9KjQUo1hhMoKyN8PQodH7YqfxhdoUBiTNvjv3tpavSwCZiRQK2HBC4ZLHRij1Atk1EKwE99aq6q",
  "key23": "4uKq8qhNdM9zBsc9vt4MDnATK3BR8FiisRzssnagUwVi2y4sGsczWNXPnuox8t6u28eH9bruUbR6qxJf9TAPykiX",
  "key24": "2xJ5MB4dna9iBjCtHWbw37gx1wVV84C29cfXYbPCtBGtYB9ZGzV5pm3AJBgb8eWZBb52BrY9dfka9n2evNEXicGC",
  "key25": "52n2FBnww5UFCH7w1DCHhwSMYbq3TauCxBrVUYJtdeh4bRSSPtRKSggjyBPFEhHrNpXy4dAwtHH6BJvH2rwdum5S",
  "key26": "32SJ8rTP8N18P9t64uKQ7ws7JbqBp4HeCG4R9tRgznMqroJ8tGDtGjvkx8LnuMejdsq81vfQsNkPB3m3LdAS12Em",
  "key27": "5b9B9N88mmDwoAWPsxR3cdrBf61VvfPMLH8aMFfTLXM57FxNB9ufRhk6NmFgUa4wqAGbkjeZDjx9Was1Skms3uEN",
  "key28": "2ktZ8QGB3a6upY6AagTSJekwEYbgcPJs8JsYXVZytoQCuj75HmP3Ra6v5vr65Yw2NK2ksFrQW779J9kzjXEnWxCo",
  "key29": "xgKmoz8H61RwgQq6CoehxUxSnLaonyAG9e9AtK3ex6E8VXDjVYXSvLuo7Kkb6117NEzCKMHeW3JCD9U4m8AnrPq",
  "key30": "32eW9VYGcQXCM7bRvL9sB6vn9NmZKLffcYaKTCa9p11WZhaeUxNqrHxN647QLfkRWfEu2vrjstp5eddQKALWiwj5",
  "key31": "3Mbi69G9YDXPpy2Qymhvqiq5Q9WGW5HoasEgitMA4F1GDC2FxyQVqZ8XnFd8idw63agrpTY17AjxG8QRcHXbT6SW",
  "key32": "4P3uFxYHiZa8qZ2bC8XrjKQDSnmedf7bCmxyRytabcPHWE9LQyboyBdpnxhT17CSvjwxvhovJG6QSkmkUMhj8fPv",
  "key33": "XzJpCGRhrjpJi5AdCtGn4M9LdS6q27k1L3Jj6t3hAyEyWT7erGuaBzzudBUjevmwyNUZXPoYKrWMbwUgSwviKDC",
  "key34": "41EGb846FKcNLXs2p1VBaFcCNaifGtiN6CBheBm9VuRc8vf9gC7bukhSjYZ4yyLrYQ6TnPC5HQYcckR1gaKF9Eey"
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
