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
    "3vsfybcRGJeuyEF1FB6fLTb4LTdxTvpX1xcCP3sik7scLJhCyQCQYanBUtDeoKNVYVUZY54iFoNZuczPsL7FGVcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLqQhU79bpGY16yKiELUccRTwNR2563cmBj5LCTeCEkLoP8zmYcKu1fwvg3LKdLBzxfqBKQRgQcSiD7gvWxg2DB",
  "key1": "34ZjFUrehr5cX8M3UPyt3JJCBd75w1zBCK5MQFNeLSckSD9RT4FuZaRVC67ko4oK9EN3AgUaKT8DPQ4dXULs8r3r",
  "key2": "2aE6jWcAGsTqCMtZZtHnjWz3Tw11Nj1GrLj7BpNcLaJrt4cBqraXduXndJvJHgqPV7iVZXAQFJvdvwD68tvQooN3",
  "key3": "WuxrF2kshiHbuUsonWR4qwjFfrLW5PZN8dD3XgHS9kqgEuyZBrW5okG9wzbt9VB6BGajGFrm1XTeJn569bSSyBy",
  "key4": "3xRAFqAbtcPVU8cf2syieTRGPjJDcEvwHJbGM4w8pFDAnKZuYmSR4F9ygHAGjJ8T5L1qrpE8fZgTL1t2k6HkG8cq",
  "key5": "5vGbZ71rX8abE3XnTjtUeq2wa5325YE3myp1vweY1w4gx8Y9UDNy8ywvxHV8jkgVLmzxFSRfpx167pXNCAGdxpP5",
  "key6": "2iHyxLr4XNmbH5tG3WkCxaUxdEaMFebxKmBJ79LWxspgQeSizTQrQsEJbXDANFcp8dRdRDzNpBGxdP4GxSrbWAHN",
  "key7": "5K8qVNqpkgKoGvkMfdt72qqmUqnhpbmRHgFAJ7XtEuZTyrXmcyVUaeQKJW2Gngb42etZaTNxBoPcjyocAPh4rExy",
  "key8": "2YcqA8gqn3TkesvneajtJMVgcPMHAMtxYMQMX5fSbdXxBdNEcLU4wRMHiKbyCv5nB8sXAEM1tB71uYShHqvxG8YU",
  "key9": "5G2GpKDfVxwLDjP9qzaTqyGUubcrenMKvXq8HhGRaZFS8Ziz9g9ZPJvBRZgxM3sJDvY6TH6ebDwXmpuevLQ6soif",
  "key10": "4gA9veGG2ADXcpBtvn8CYk9CP9jfod9K9n8XE3g7cJsJduB98Le5GKJoYjANq38sq5GRuqiq2sYZwFK5YjyPkpT2",
  "key11": "5aZspMCoZjveMobk2V9uDZgjiuVNuSo8kPDaFLKsQqAKeoqvAdgJjX5pX2UwzDKbyzReuwgCWpPwoH1S1no61Xhz",
  "key12": "3XJnBec5udRbxh1PGpZPRcgnHo8qvaHnQm9iz7USC6WqQmTBNe81yRxLXTWourdbfMK4adw38fepgkt6B41YSjx8",
  "key13": "43ELoVXhuC8oSHxcaYaHhfFtu3YR9FstHhm8duTBNb98p964Q7rKZ2XF9HxTWC9qqvd1TcRS2tUJy4cw2R8AKzF9",
  "key14": "5P32avvLhWrzPog49bsCiAxC2i96a5TEYbVqATj5YRPzWqfsQYKkgLWv3GpJ9X4XJhduX9pCkb1HawXWUpGq4aT7",
  "key15": "3krkFic1uPj7qUBM3ZtrZPpJPBJByoaQyALMiuBDhFJjgrn1ERaqjG6CX5CFn13LJb2JrhpojLQoUknfAF7WHFpE",
  "key16": "JQrG8kgRYpxG5pnqzhKKKcvXVKaqUqVji6ptwBWVUNBgGzANhvi8yhxMQgbB6n8BgtZUzNGt61FofBmX2jLrhby",
  "key17": "65BFXDhwPGSEo7ARA84EiTiwXdwTdD3JM3mDP3LRLj92D7awQ7TLVxRyLKrJPATwFiyGVot9DKi4Afd6x4DSxaJQ",
  "key18": "nXGE8ewbKeVa83EhFRQ58eANMzy4jN4xdmLdH6ajJA7BJMVqjrAAgAfQnqw4r2egZrumuEhG34ZHHTySQoYrXWY",
  "key19": "h9AUjDr95yhFUGL7UsbUzYAFNar96rcCfAa6qjaUJmhwdXYDmS51sjzJ3irHZU7Pfgx9EKPKTs6H3i2KDgb3ukr",
  "key20": "4GA3MzRzVeVxu2sNRtSZ33oV3Vw9niikhucvJVZBPADTTFKZn2gfbKuv8LP7ZFKLhapHhtiqXc6Zr3EYYkK2VGJT",
  "key21": "v1SduDqGtw1HyuAsH8iLG18XAMUVcq3z8acRoc4pNEJPqU2s4KB6RcXFVofraq4WW2YafCi7sA6TwqvCSoxw6LH",
  "key22": "22Cm7q23aHEKzufVUENQEForH8fUBquMRp8pMxY5P4kexeZdKbmanNGXJB9LDKMqkcEpmaenesAaTLavxX4uWcG7",
  "key23": "3h5pAQPeK1jUqR6HGjt6bkMMUDQRzCdMfDwkXEdfrQH5yiqCz7d7HYpGzd7EE7fgrrBNbgFxjsjugkUXXnH3wVCZ",
  "key24": "3PMiQJTCkQDrV3v2gBKkBMG1XL6QJiTGzQqkD9RAqwTz1ejmHs6HzqvKNq9TjEz5DYG1rViZFjfKwFuSBxaWTxkm",
  "key25": "29imFJo5fgQMMAJfzuBMhtuCZxR9Vhz5jokMNWg2aZd6GshC29NpBj5TzrxYXjqZ1xkBZBontp7nU4mmTTrBdkoM",
  "key26": "3M2HRfqoVgsuW8ab98F8QEdmrZKwg8GW3gxqhU1AeifyvTZ5K43SPKoQkWojZYGcRUVN42AZtkSgyPjrL1h4FTxu",
  "key27": "4N5BeQFxAEtF2yLP6Bonf6fHKTqA2svDDG7ode4U1faVtj89ScjHa4YcoVuUPagp82dYCR5MZG2RJCpiof9yJQSk",
  "key28": "25uzcYb6WEitZPF68rdJHrzbKKfRqNTLGmhEGyGT8noAX2PRXgjSv2BCpjwoKfFCcYSz93XjRaFPTExCV6hdcA9c",
  "key29": "2osPrFhZU82oQ9DrmFsRcA6KPRUX14wnyt6FttkVmTrU7tLb76wuATVBBMY3fS34atZwuAwL6YUin3x2m3cJEcSP",
  "key30": "BU7WxdZV4MNbemYUcMfp5j1e8U2KyzKXjyMBS9TxZcpigm7b9big1C3xXBqZHfeHUngs3KvSRUxnqETrcfncHhF",
  "key31": "3hEUqe7YR1fpjZxSbNWPWocvUubvBEHKNAXmBeCdLtpY4jLuJPXt1iRD7HQZkxf6tKYGKAxJoe6ZSjYF5UFzVzMw",
  "key32": "4eScvGjpZ1KZXaEMnNxvuR9n9Qi8UgUPrmBqM9LbjYb6DRcR9SYdAHHWHsaS6G75EHz7NbBwGSHbbEofcsopZzfp",
  "key33": "mrcm8DQij2nbCboXmmytf3usFVkwKWQogjAGYguzRvL7p9Dc5MBwk9KPakKZJxpsjbF8tohVYj92Jtbx44PbvTb",
  "key34": "35is6H2zq262nfY4Ezr997457DpBeiRexs2WgaeDcgDBNuK7iGsnRjwRvLvJkQ4qtqa2jWHNWt47uwYpwwp6Gc1U",
  "key35": "kLcQ8fhSYhGdxWKM4drsjtoUyE5HarZv8BnocNp9A5ZxKngnBimaEzWZ5QuoBdPm5331wKCXc9QYvgLVPvQA7oc",
  "key36": "yusgS9gSifE2Tm8QyJEqZKgmfY7bk1G3iuEEmZzCVZEs7zJgjxToViTyqHaGyvU6i3Jg6u4Bb2fu2RxasgkjGA6",
  "key37": "4rxVJz8MHmws9uqeMWpf8u7YJYMqVELAZvS2hPvPEnsLE26wujD6kDDCehHVmYUmSFaAb4ZvPhCtCDEqxDvheCMN",
  "key38": "5XMP9duKUqv9zmkeTrZJPZw9kjaoy6dMjPeCRHf3hQUmVZNjvkdYfgmVGtxL3gDK5Nv18DBLZW2YDYF39WF6fL71",
  "key39": "2f8WWKSneyFXhChb8QJ3hpSiHTWgv988JviVA2aK2GgRHCqMYvgskfFxExMRUKXag5Wn4qBnp969Ae6drhQDZDxv",
  "key40": "5pvNAiKfRMmXaLjZ92yLCGjwZXfGJM8mSmaGFQk2CTe9hKdoBBDZoeULjbJVwZjk2Dy3M6Uhe2UWvQnVTcNDsaA7",
  "key41": "4TKgGezm2TowbNUnNUkeCNw9SZedEehswq3qySN1umC4y5R7FgTjo9GXSEL7k4d5DgidnNPM9iyD96F3xxchshYb",
  "key42": "3q2riTApq3k3qtC924jmvvB9RtYkzBEM4S5YZfxJhHLm8ur9HFG3avDc2DsR3wY6LHznwV8vfgy3Mz32o1SrM9si",
  "key43": "5LBa7ZnipSJLyYNoxwXwMvUMJpdCDXdPmsZK6vg3BQbZxAnBcUjCwN3eqt6iKw9j38EYR6cyHjRjqDBUa4k1SF7S",
  "key44": "4soS853gBvbtp7LAfFV8KywG7nk9de1XjqoDAkBzjHsiYun9pX1771zxYPjdpWVyTqaRvhJunxSVJWXsXnLyKQJ4",
  "key45": "5a4UFXanhm1mrZZuGJbtskCU2i9FiiBjuiNiY81axMYaMu2ZvYYb5EUuQp99bD4p6nFT3hKyKywpe3dfgcHPYTmp",
  "key46": "5EJevWq3uwjjRJe23bsF5iCMvbrQmngsMz7uiFPP4QEHM474iiJtn6TWu1BDGBkYvAEqtWnYJvFZjAUjVWMR4i8W",
  "key47": "5fUwEAX67vXX9HB6uYrarQWwc9FketZ4uprUE84W9qET4u36e8scP7eRKSomBTUYWf2MxNGEA25R5sJyFXKH2zE5",
  "key48": "8vMPuNGvtTyzvwdCQZv6ss3gF43uqUMBP9wfkWPScyzWZywrtU9WMRAjfnuCMLVX1f8WXQSCw2wQtp3BwuKFM5G",
  "key49": "4gHQooPUcWXAAhD11XfCw9pPWwWF3JRvSHzaDLxSErbAvTmhv3TnchbLukvYE2K6fePkv3hFb8o5os1PfVyUeLwp"
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
