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
    "3yPBiMwNj4gcqc8hXTnZJChBUXemPi2p6UQUP66a1NdKJ6arYPAzebVA2dMZ4x4ZMq6ksLyCGQGQVv3yoTZGxE8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KwsY6ZWMPnuSBsFHF5v8r55brWeK9ht5ac4yeNwjGZdznaT8CoBkf2nEtieBtmGo3V62fhr4JprsBf8qj2D8oJd",
  "key1": "5QURKCn1NAaXBCeYhPkGbLbKGcJLJdJvkff39e7M4bPa3keipkTekHKqBvfZ2kfRAnzoyS7J7gK4wgdGoRBH7Mqe",
  "key2": "3AnzY1XkB9RknoLCJ4Zx3GgKY2bY5WPHYFS92Q6ZuZsqsHmWshg6U9avihyKCCP9S5PyrBytoNie5TFUYe4uE2GR",
  "key3": "2sdVdZbi9bfGijEa1icb27W2jYvzunEMZTnPofQiPtEyM984cs4qj3Wug3fMVHSUwRw1KTt4qmnoL9rCUQ19K4uA",
  "key4": "2EwHg9GREq8uAuyh7L25aXHH4ZQCR2s8ujHYVhHdJbg5YzHpVT6irxC1okqYtyN95qBYWkwX3hQYcBodCtvPBCjE",
  "key5": "61W6dumL3HpfWhAQrh39qdPNWNKFKxMTGiVQH47efewwf2v4J9fvPNCifrPWQrmHvHxxi6AVwozouxCjKK3unvaf",
  "key6": "Mh7QxZ8A2me1GXgQ2qZdy3aguZbY5uEKFA1pWAKufn5bDb1rBkj3mUjbVgooQBEBtqyHcijXKbexSejtWfTyJNT",
  "key7": "55pUmCnfwUiHs4rAcD675DWSdaN686tVxhqhPJ5rLHFezHu4sJTZozhmYg79FqLhCVo7gMGH1B9WbgMy9nVi5Abv",
  "key8": "zBhD27V8G617iqWAuDAmKATuDG9o3WxitGSjUfg21FqTuvMqfe2bXfJFJyDcXejaMGW4Bkww3zhN2jf91XAKcU6",
  "key9": "358kz4dfoqUEmhrxWFJJZ1ChfL9EuTHu7kKZEXy56wgfbBmzyAkzxReB4utHMHnMHGF2JGHw9uDTqsXko9DPMt5D",
  "key10": "3dJ3v6wjNi7j8Qyu8rbNyxLTpgWQq4iz5PnYYxcvpLnJxmNGKGtpM6CrHewA8hu8V8aA2NrT1GfkR1QL2atQMEhx",
  "key11": "4g2JBMzfjV6GeCZ9iRD1Utv6rVVawoVdsSramnanTtUMGKMBBP7sx9SWBq5F5sTtHtP33jT1Ers4Mz1BY7E6zw5G",
  "key12": "9GSkJx8QgziqCA4caRrMoz9Z5hPpLr9g52cgXZYdQrHBCyPyWN67ZEmUcwBYvU9yb4PbyVt4kJcsfVs8Kvpvsev",
  "key13": "LKLruMkb11AXxgFZ3cLjVjeviYw3bjqtvpxn33etdUGfSAj676MpRQNd4yGZpmcezifFkNBk2ACsDeeRBj1NxLj",
  "key14": "5C2sem22SLAmLXiVjapdKUnLb9LFQD7GZYeQk7bxKESjooRmZbFDW4M4e3zFucUk8MyoPzsS5ZKBRyiooJTfjwoZ",
  "key15": "4vLZbixFvNSL1khjJhSDaWiq4Y4HZmXVtpByvdVUJ4kV27s1VaszGvtdxvkBrkgGqs89U2SR7ojZa2vqh6zQ3PV7",
  "key16": "4JPSsCKMs56ZaVyHgr7DAEpCPG9SNuZd9GiyJgHkkM2iWiz47HZ4cEHQwhw5nmo87pCm8AWVY5wFqME8nqmsNiFB",
  "key17": "qsx5ibcAFnVSywJhziDpV9DMdfNJEK7KAZutafJK68W34CkvRd3SycdUQiBAvBAUprHqnKn8sUKYqok3rfCnupS",
  "key18": "3grJDjpRWrfPpbYidXZc9Qi5GUhijh3E5XUDL1VomBPpFEXLJWAbmsoBR3jrYzqxGWnPW5YPScGR9xPExzxniDBk",
  "key19": "47Dw8Tb9wbKaaEojyjHdtTCkfr9LZ3B1JJB5Z2KzUMeDUPanLDfbKiucHz4i1NEGGdzYcsP2fQRWSQYRuZNoJVgS",
  "key20": "5wmHzWhDapEogcosimPMrrFrzBESBn3HgUT5aiccg8GPjmJTTGKhFcSUFRwftyNYkDuGt6DK2pivkTMzw7tUgagz",
  "key21": "3VRf2EArW5sbJwjv9SGPbFxMjAi9jZokbnbdSetT5rmv51QkSsj87JZ7zMbBbQ6ZSwWMpxW9irqnxJmYjau7U2kY",
  "key22": "4CcD3V9GctGVY9mp2jL5zvaECZhsEbadYf89qUBBiwByQuttQrwHiDM7kFq8q5SEUkXxU7qdvtVoK53r9o3erXmz",
  "key23": "2MgRWynRz6DN9FmwCePCeo6rqop1ChMTisXamecTiy3PToxigFe9498YbgkQNUDpKyL3vKYeyMgUhhAWtLdzMuMk",
  "key24": "3646iE6vE3twd5uLJnHE2PMRjNgYm5hf4V4o711NvKFLubfqygq29otgR7L9PnzDUVdTaSeCADcg47iCtn4ooR82",
  "key25": "52u9s8TUn5mnuq2tzKHHxXjyq3X9HF8GxCBhbVsQStv4uCYGm1fzMK2t4FmEs3unbAvHZgEiLHPwh4zu8gR2KdYF",
  "key26": "3uFAo9en8jrF1PRYtogFiArk46bjFXaK1bsDDzKEHVur47gGVMNRd8DibC2Th8ZcpGfuNcULyHzPa16sogxcGnRx",
  "key27": "sVMkHJE2NzV8f8SqquXGAkHQyoThMPoRgihtxHtzMt9GJF5KCr23cjNq4w8WznjnBjoEK3ou69wpXBxyZgNhkt9",
  "key28": "4q3LTC1SkbXbkNfDsEVejkabN3C5T8QUFW98Xzy2eTht9UnMKPcQiZWsFJCuc7EzTEyfWSUFsaaxPXWU5MnJTp3",
  "key29": "4jkpNvCZP5PsoETxj2iweThNDa9wmjaRFL4yaAJ7LRXJvYmzLkrEbyg2Po13eQgRswTjJ1hTMswknoaPBxR4naD8",
  "key30": "ABYffHksTAMyeZPffNpmSVLvf4YJdgJq7z2PAQj9bqQTFDpfpQmxVupjpVMqDJfgZ1ycY1YMbrLiM9ZmejDWbiv",
  "key31": "4nGXt3DBk79CpajEKpVReFmHZ5U1sQU1cgraZzJLdPcL6uct7sSNjhGg3hN5RKBSZCb4vseEtoiuJBvvo3RPvHtb",
  "key32": "64gmuuvW1kWQbCWP4vdQTvReHiq6kZ4kJPKpP5ZXUDZmbZxmqWSHBVZAuwB4ZDdCuGw7qXt2Tv8uQkfugnPdm2KA",
  "key33": "3vCht4Smk5yfJ6saBkVAWmXWBMRGWinnJbktzbPpRCj6EuzNE8e4wPx2fTf2maq8ArmqqTbbD22x9UNti5mRC54u",
  "key34": "2aF2DkureekuNL7mj8ZVwie8eEMfBXL1ydtyTLuxstnjqP3KwJeu4GtGJK1o5WEPWrLsKe9qYDAcDWjcSMsUEGvh",
  "key35": "3Yp14aS16p1WKvZNgpAMn4MyXRMMpibkNsjW8J7tSHyPbDyMjdTfzDdgYkWHqmJ4rnMUfpvi3nLLAuhLxYfVj5Nt",
  "key36": "ChBr9HJDP2jAZyzwpxiYjbGxpPPymetqwHj6jTWiKEUYNNWCN9QLjEWbkzt1bEHKt2kZe5qnaiytpRMydRfG4ua",
  "key37": "6ZsgTGzL6SzQcw92DLQdCwxkfFbE93uQGcr2mxd57Vxk7qLTcrupJQZxPG1Nc79uzTGrjct5cozkDxxS4zdH2vH",
  "key38": "4Qettrrz1GNFm9xSC3nbqh6nAvzZ9KG75fYGsshSAK2K5XnxQF8v83LF5f6NpTwPvCRbfphxd9CvJhECCa6AeSMH",
  "key39": "V34g9eUujMK2gQ8WcYD72gw8XgJyWb3MB2DihS5EcbxGHcxN7npmCTBPpYjVwZ14m77KnEbiYgWaU7E5Lf4mMCz",
  "key40": "3EsVw9CS6CtX2ygZhuDjkSZUWDJ3ikD48P8fe1YbYmBCDmEfhVqGZERd2rhsFij6s3XSgFXChNDpHurapLCfpHkf",
  "key41": "29AWYbCBKvuWjCxUKHifLZ5LYRmM7TJrJPdeV5AphndEZT2zb5McMuggd5WhKrA9dZknrisZWndxCdMe7jcGswYB",
  "key42": "4FK4Mn3vcksrNU3MJwihjxReEsbBfQAzpG7cALdVRurtJW4Fn2A8szXX3fZeuedv1WpmyMaXZoViQ3Losn6fr82T",
  "key43": "4PyQ2t4VQvmih5vDnapbvTgjhsdqeaS9ZDMYmsnow9yKnnwvFfRP3D8T94ni5fMcyQBo4H7dRJQVj7SWnoGKLuwZ",
  "key44": "3SoZDgki3k7F34ue2AXDNemgrf9MbFYz4yiwLWUvByzN16vGtweX7vFDciBQDKcgUiAgE7dw9kgGZ11ci9BJgNyS",
  "key45": "5XYK7KeTuqUXSz56xGz3wkxKpSL5161vRhisMeFMR31K5HhWnLdfp2ZP6DQwRfwnYWroCmr7niZ8qQMLW7m17ffk",
  "key46": "5uAVzpe2GrBMwyLvUGHpsB8NJHEzha2CChBdp5yuwuUHYyM4KsyEaDHQK1QFVt1qCijdR24jctWfvF9yv3QxGzKn",
  "key47": "3VV3auzk59Ggxyg1dKVFaLUkrg1VYbNZ5YxTTTTo4AC2JGmrgAKJzYv5whrEHPbsDgZEfVn8WaftEqur3QncUjAR"
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
