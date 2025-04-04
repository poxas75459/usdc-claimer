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
    "3b8PYUhN4P89LnrbFyTuWuC5zd6XdQR5g7GMc1S22vzhttrxoZgaPA23qse6buYbGFB2j9qN3KPDGEUZ1igZFVo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZnS5x1gWq84ZP7fPhrr8VpL8ngMi8aYASnroYmgsW5Nv7T6HY99EzBuKaeQxqzWnEckhB3pCQZMZbHUdLfAzp6",
  "key1": "41gzgewBrsTzHdxk1j9hTKkoPgLKEoqgcuCpSA5Wuf8s9MrHtd4bYaLrfui8PS2pzH826M1yZF6N6G22BBva7STN",
  "key2": "2ZQkBhFYp2BjhQL9NfaPutuQqezrKAZ82hiJi4GpCuW83nSY9Qfu9GXiPwSkWdp8yprwM6xwqGaXHBFTtesiRwYi",
  "key3": "sqF8hBRLJCm5RUpzrxB5nQ9GiXenuAbT79smV9kNkCug6VscLWxJZki4SmdqLYkKkM6Lb6gSefPA9Qot1m4veJt",
  "key4": "2dXwdWHpcSRDqJSsBYWUamgQmB3xGpfkTXvei5xmwAcLSSn6KvzW3thFY6Gzk2g25SWbbV5kWXkczEkUoiUjoCMU",
  "key5": "2rZoRCz7ZqYLd2bxAU1FVgpUhQFb7CjjRjJLDhDK8MZKsfvJrWdfQMxJfE2hGe9MqJsqcDiGqiZVTz4XuHZfD6sL",
  "key6": "2smpfrQvr2C3KJspJ2tvFQPbaZxiKuDq5pgVrq35qG95nkCucZQT4nKsYx53GRjKfvmDbLi2qz5NfPHqHCZPyudz",
  "key7": "3etZtYg5En5RsK54vYnFLsecNtUfJPqMvmt9FZ31VLsQBijayuZvVY1d7piKRNp64Zngt43hip97U53WgigWGtNu",
  "key8": "55smBxa8Cmn8ZiEUgHPyVDR8EBkKy2G5WZs81ccydCiiakET7TWx1c4j1GfFoEBkAJMhVJMNvj9orp4oL5qu8hXG",
  "key9": "rdW5MqiQ7dLw8bNzQ5bXSfKYCUVd7xoKu31E8qsfv6FpA2HFUmmEdrtvcXhFxs3hwzyFZ8c1pEf8emyCPTJFpNS",
  "key10": "3KGuiTSWM2K5acjd83SDJpcXP2QFcY3B2jXNkZC8bkTXvNyb1rVbH2JJhiBvRpAx3F5gWxsb9ARiEJDtRE17tZ72",
  "key11": "2dWdHGzxVXMirA69AG9uAwh4ZPQGPxdBMe14fW1B76ure5rs66YnU8DsF6Nmohif8LDYLxuR4c1Vn6xNarAbvPeu",
  "key12": "326GVD4RsNYvfT596P3P1keviTMqnRR74wf2FqLCoDyThbb6tkWDSGJ87tzG6zKJfc1XkDtPcgkY3AUw4JQb5D1k",
  "key13": "hRN2Bb1vLvYHDzLCQP3ikrYJYacf5nNMNjSqgB6uCbKadWamzmCPaMiopYR1KSbbjR9ttfJuoyocQxiZgsjSNeX",
  "key14": "64Ht82B5zqTmNkmqtmUB8VvgGWuNcGSviChsfzbBVR2AySrWVt4Zj6mP98tBv7FgKyxEiUEvyZbC6CNdMxkE6HVW",
  "key15": "31WY8E49aDkip73QEt6cspuaEifSDpyXMzDxtWA3vqXG2JoTRW3SaYRt6C8H3Fo5cDYbEi3NrSJHAAkv4Hxnrq7D",
  "key16": "5jwcyTL9ryppdpUUUTU7v5j5npxS7rHSCaDwq99wMVRPiUxH5qrq5S6tQswY3Lfn9Qq6NRY94nG79YoqZXgbr5Zp",
  "key17": "4RnKiADpAaT5VefAxf5kftLMhdqe8yLs5coosfVwGTKmmdQM3qrPpR1JByW7gHVuVCKC3RfetLUY17ns43GUTkz3",
  "key18": "2EnFVJu94UzApgHG6pYeG1YAQi3BV1U8Asi5wdoak74793Pq9mYGccZnr9u1djKs371iKKxNephsyCL7De8XcniA",
  "key19": "5cq7NCUqPHBNzxfwwf8sLNbYffDkYUxXausun8oSbBcp4LdrscGriR6syswMo27YyxSCrgWM1KS9X1ESY2Ss6A7B",
  "key20": "TVQZCsMprHS6i7fFkGqWqVUVx55q9mot7awEdrxZd48f1iMUxin2RyUXw2BsVaJypT4tWWijyQFGBLGE2MXZjSg",
  "key21": "2sjuxtoCacxg6r6827K8EFKpibsZ4ZBNeX9fxTVYbis54Hggj7syyb39S3fgsggEbhemnRB8wVz2nBHJv9XR3XGG",
  "key22": "3vxAhArTn7YjpxuEDh3FPGNzKuHe9fMdC2MwYboTY1zYQ6uY1PtAxjgAeJRJTHTviahnT6FATru6tr8MsdLVLioG",
  "key23": "3siSKyioSqRXcRXbVQ5jnTAjZ9SXJSFTPyNUgKN4G8v6sozLtb8z4gSsNqtaf49cWHdTXJp1bpNxMQF7PJnnMj51",
  "key24": "4Hkcphfhn5UEyhDXyNymi8ET3zhzfKoDfDx7xS7CCZfd7wSTs7hD2XANkvRi94FL4pnyQsbaTon3UutABLGecaQo",
  "key25": "4xJ67fXwNZu5gaegdC1nVhXcPKZfXdXnX8P1rueHncbvyKSe1Mu6La8UaCrfcJwC8yGyVUtMkhRBWhmEjVD9J3fk",
  "key26": "54rXH7R4yEHcvwWEUttTKjctQXCukto5Qx3qgYbyZkBaDf6mYkrvLQM2h8XcUKk5Ef1JeYVxQLTGdFbS8my27q6j",
  "key27": "7WLYYGtsof59LrYey2fQcRzeikbweJLPvwLpNo7ohSDEgKY2iiZ16fg2uM977UTECG1RyCkkDw9ubDcqh2YqCux",
  "key28": "2UDLpwDvBBqWT56HqQi24fB1SL4cbBXCrAWGoh17LEoyNCcinnrm9EvxthtZbm9wHsH1o2LbDh8qWmPfRi7SsxBj",
  "key29": "5Z8WsLrrVLZFymarrcw2RpzhXFYL3wouvhyXbUiVxHi2g72S2jZ7nTms2UH1g8uNK8M7tbrRiwjND921obwSbDbT",
  "key30": "4e6vSLFcj8xqX7u3R5DfcsSL4fsMCauWwxGJ8DAKAJzoqddiCzCN79DTnGTX6m28xxcs3GkHn6dk1memTbWtQ7aL",
  "key31": "4e8XVFyofMLAazCeYe9aoYFRBYj6Vhxqzb94CEMoCwdHNfHWQgaeL9yQCdtK7SYKn6hmhg2Qp7Ty4tiz3nXMkUn2",
  "key32": "2PMHmH6WayZQg5Am7J4E6QYhF1DxCXUoCMjm7wnZLbDGrs3FRZrVjuGCGsaJNoGDPTTUTeDUc53qEvwHPDsTFcvZ",
  "key33": "42CqLgrd6qy3JyMcXa5XzcsfyujoSuP4aXLS1NQjuRdcYueB318P61DqGPLuD2fX9xkDkKoCziiExjBQc3gGWGEa",
  "key34": "5VVh911pbCXbnquKcJcrLVQEtzGt5QhN1YL2HYMdvbnB8u7kKEaBH2iCBQ59KquxXNURnuPsZzheN1s9SaT8nNB",
  "key35": "3icn8bNincS15JceXg3yVwcFCeb2QiVkKVDpSMdr1uy27QtGWLxckpHGiki3RgzfztpaAuRdNAN6Xeh5KsAdhciF",
  "key36": "5FBc4AnaHATh2JJ45ZRUDaeoaarjQBvibzp1aMUpxFagkt5aRTWUeX7Pw4EU8bMr1vsTjYR1oj14eu888ArFUjgZ",
  "key37": "5gai3sBrC3KWCMqCHA2mqeWRGECJxnEWGHGEATiQsMz9bYsLkY4jFZTpyx5SmvwKhJ93zkTW1T6x3cNWnipR8B4E",
  "key38": "G6oPevQRGJAhvLSXLZp3fWugtR4NZ2TUuVYz8KiX7hYXkF1xrahnHTYSQdozc5H72zvZHbap4GKx8mifajusgHw",
  "key39": "4Eeu1NuP2Et4zH9cmFpjNX2pLJpEtR5XtoyG7evswiffrDQTcMTeekouoLCdGeeijGm4qkZjkDdDc2aKfsRcwkGz",
  "key40": "4EN4qCvj3P1nVHBB68BsyxZh885p79uBKWoD34qyN3kCSuxiuwvTdHnPRzvAU2kHgE78pthoZenyzPREDMouivzK",
  "key41": "2cpGserfz31V7dzgWTikFavDbeqxYUaDwVgp3dTT6vZX579tPVpSEmUT5CNosGExPKBcb69f7Sbvn7SDbQS7EzfB",
  "key42": "2RTXwox8pSMf7SxHfoEkoysm4cWyAX6WTfLiVCzq2K1Xgu94h31zSoRkkCJofQoyG7hk6XkonqkWS5g99MNzLuHo",
  "key43": "Ua2YpLYx8JqBSsGxZG7ZB3n8JTZV7b3WAnC37poeTph4yNVQWh1b4fR6AB7s8NfkeGwbiQYuJ9xp83rnY63oWRd",
  "key44": "2psGCj82og3qM1UBgYLbymnu39Jvf8WUTDaFMbrXzBjQeYMqJ4NquJKenchdac6BRVNK4WX6YgU1P2otnjFoQmh7",
  "key45": "4S9xh3fShYwCJyimEDBn9uQrkDkzW7TQVg88VX2WmCB4s1dU6oEqdW9FdKmcrAz8a2kFG3htFP2EcS3t8VSBj8Gp",
  "key46": "3SMk6xhLXuysfxTrTyJhwkNA531CcyUeDXVquzvHadxmfzxNj86MzFhQhrHe8SQQ1ogJRn47hi9bLY67vYAWb6qC",
  "key47": "5vXjxL1qsG2CigjVqkQi9UhZ1ghmmipFoPDcNhU6acKPqxDcaBuPMJYqsCQG221mQHqXbgVnsA5oSVvb1vaCnzwa"
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
