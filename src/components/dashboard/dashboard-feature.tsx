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
    "23qDW3qDMWUESEVewwpy2VpF39EobRoo7EE22crRKydfUB9tSicfBmNKEF3JT5coNVpRXNBK7XyoxLUS1CX5XFB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9BGSspD9Ff7dPKcfhRM3tSnHMu98bShP6mseftF92rkJ4PcHvCevL6ZhrNBkdNdHBTUPx2W9ZrCZiVZXRJrLs5",
  "key1": "xDqniLSBkG4t5vDDFR5svQJMPV16d997HX7NtiHJZmJ4YNBWRKLZ89ap3vMuop9Sx1khJmzdp6BfX5YkKPZkPdj",
  "key2": "5xrTe26rCT3pCxgNmCGWw8AvdraDmVszcRw2oNGpZyS9wFZqCVAypdNi75Trmz9YVFsdiGjf66C82D2mm5eENPZq",
  "key3": "3b6wHA74APu6tLSA1ixm2iA1HL8BGs9kXtWhmhMGGefn8vRbZbYp2y71QrCjuASz6KfAa92p5SY3sfddQwQ9GXC3",
  "key4": "4g48qLhy1sDXRdhZBDhiUdgDJNf88zYBCiQBvHduiFNWtXZQjZh7AiW9RbMAx1xacks52c93qHT6WVPgzxHcf28r",
  "key5": "4yzbGW2GFtkiyFY9Ykmg2sHsHtu2a9JdjtdQx8txrpkPDZX1nvSL5RpJLb7DmRerRFLcfEs75Uxt8ivx1LwUoWzg",
  "key6": "5j8a3CEU5NTehAmYPV7wtCqutNjDRMHvd84thFVPpXo3DTvRx74tfiSF6yT2sfK7W2wVhKhzAsRVbyuaEABJrSzA",
  "key7": "kAdWPxFzs4gmurzNqqE4K1TPqXcaBoNrsCdXwbfX8qAgDS6ksxwHSMYvZPH5yy5fYjUpMTzy8GMHRKioN68tbeE",
  "key8": "2nFG5XpdVeLVZW5745H8VdNkATTgjYKdRkDBzcc1reLeXddMyayVmdCgjTBcUbiwpJFHNnJavJXDHCHoeyqqm53H",
  "key9": "5Po2pvXZjUJXUVCCHi5vQELb3tGT8HzXi2tFeU6iabSCw18q5GAZo4E38wVs1wSqzQc3th8AuQsjHKEr7bdVmPmy",
  "key10": "5QroM8vrVPgUYzc3g78p8ceL8WSRtzCR8oLgqeVYc51vG2KLGKo3cEkURED6NcGMu397CYE9oXZxG1r63VCrcA6q",
  "key11": "eTR5caejDxotdmyxhqVJGYCCiTRDZdYofVyR4MF3qU94KaZZxQGLxJ7PhKDKrf1ybThTKdmPYaMFKc1wwmXUPVW",
  "key12": "34G2DAVXNiJazdRy46doPXC7gJUzCPkyD7C6GyXTaaSR1Mo9VnmUTKbeYUesRAr3eiadxrpietBfGiN9d11E541S",
  "key13": "3YL6unnJBiNmiwWa8X634PZvYBksfUKHncT3jDKEJNTmQCj1ar2DndpUysqACnMayu27JqKDMvR2AKLRdnLsbGyT",
  "key14": "2vy2FVUZhJ2w9okvccYbxmfhKzUBASh6BLwtmvFZy88jZYZh9rqqAv5pyeTM3WnhEXkH8EujzvMKDptquyNGKKoe",
  "key15": "287eKBrDSUFj9MMLXj2puLA8vafJk8CLcYEX9wQ147JHHWhw6RvuENVAvMFPnqTAKJE8XBKtff8KkT84gED2uuwL",
  "key16": "P7T6X5fgnrsHquwSgUuackvg46xT6bh41c3Ni2S7tJsZWiGgHLv4HwG1ypZvbS9is8k6VfXQ9rQa1Ch1YuUYMR6",
  "key17": "2wN23pAy5Yu9GiCToqQ5h8QVCyZPmKy4x5HSDJDTXz6iLTLRnpHW3tWt6zfpiQ78UVAkqm8NG8X9LzuSD7tXFB5Y",
  "key18": "29gGNfbnZuxtEV5CDT4BnDKLCJFtBWFGCWqeV9ixm4s8FCGmRBKLHHWeFsFLmsomgL2qoX9LQxs8o1KmhotoLokj",
  "key19": "5XcgnDWVWfAF7EPrGs2G3zGXD5yvecbqhjR5HF1hjmDTx6nhyQQxBZKX7m6EHb7fkzxPz1B5wzNAoVDdcJrvpr4j",
  "key20": "39d6kFMkyE7jkemsi9p9xoULXGybcqJuNAsioSv7gZsfEbemfjzguatroksFUSpby5fd6s7xGfsE4ZGRLaxNbaCB",
  "key21": "5bEuQhBH8jocaCU6yZR7W3aKsY2DbsyPJhozMdisqnGxmXehFTEauef4zqG3kE3KRwCA14iSLrnbKpqx1RdZAwrf",
  "key22": "koU7L2XGkvezwVZWfSK86o4XKFUm6Avia3ognJFGbZwUEN2JaPRiVRKMBcWxgDUKFq7srYJaGkmVLrMdunGWtie",
  "key23": "53TC2XnWfo8Wu3qYRnzKBauMtn4qVA3mNDKqoCPSSXvRgvYxLBN7FexgLCsRisxie97FDwybfFhC9bA59Qqtsf8W",
  "key24": "4SR6qzxdnLdxhkJ3WbfLKMdeUPXtAZSQz1dX6o36HPXVjfdTkKmc5r78qRZanHPAo6q9HYhHx1GgLQKZ5xvdjE7j",
  "key25": "oLeTgy3KNbsBAWLtLKhTkYDUbZuojeEsn8WTkz4LKyZ82J192191QV3kZmEgRmtUsszkA2vVUJViwZL6EgaZg6u",
  "key26": "4U8ih7EGt4eW8chX25dwoEG6oc77XUPW7Jzus1WsRJFQLh1v3oUBhqP41VEy1cTBoe3w43d5LkUP7wr3qpUUzju8",
  "key27": "37jrQmySSrnScMbndsWs85JMaAQPt52Q2AQp3vzFKXXyxeAS3GaWaowLoyhaEhedKjbNoeDqprLsXP2WdpaGVcnp",
  "key28": "2GHWh5TeQMdydH8CBBiC4616vHorvLkqpdD9B2Ad8SYgB4TjvW1oVyESSZwhhvLAojnUNhwgsHh6EJiBSVqdLHeN",
  "key29": "zqSm288enoWK4HmdYYBPYmFUNF6X21JPrA2WEJjqxvMKZMi7jeLHL75EgkhSzt7zuuU3zwNWmcEC2MfjHBgRS4k",
  "key30": "27DrPR8F6Y6x33EEmzfAby8FNed5TJgCoAjfNSBMSV7PeD19qv3G1iCuBQsXeK6cDhMrVEQJgqUb84BViMELjsve",
  "key31": "65h3CmsKYE9itSp6KxGwomYS6wNQyPC3vf7CS28NEDJHE45JgfuiyjysQvJQBCDr7sQVntN3ypbL2Bq2gzog6ySx",
  "key32": "5nJr6C4LmgfwsJMGHBP2QtC3EeZBaZYLDMLAhzaSApiTwmw47UQtye7VQGYC8aiCtiKriVruSvBZou33ALg2BpSX",
  "key33": "4dnserEpkW1wNVpJSnWhJz6Hmw42T2xmgBGomJYcU22kSE61hXfkQEaDPzexjRy9sR4Vb8jJKWGFYu5Gjhc73mga",
  "key34": "uND7VUjyQVL8hSAEtMv7veD5QEM25A2PYkPaFqBkGWMK3bRwrYmNvVApDLGDePFDTPNPd1cV4YCfkqAnFfYLUmH",
  "key35": "258d3x2SmDsrn5Q3b7wN6LPSFKP3z6nAzyeW2UFwDZguPfHVwtVcDTTh7Wviev3rLmhCT4bpqP2RSghskZX3xQjn",
  "key36": "5z1dxSzxQ3JCvswBx5PakN8ixjhS3Fy2SvBqjfoycjR8j58boCpL76joH4uVMbAyctv7b7dMAhwCUuSB4qRhrwXr"
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
