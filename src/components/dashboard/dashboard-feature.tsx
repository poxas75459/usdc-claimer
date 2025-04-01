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
    "P55WNEYT79hCagp7fgeRszw4vMjxKMCBLfoaRuhUaWfrZbs87c5CaxAeKfvPXzoCiBaBUeinTseCMGPDZddfdnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55A6WEXiBRBWJyu6PgEEHxfuauEegYz9vG59Mv9Df5hZL85tk71jBgRtMveNwvNjBbzjJ2XVBivzkTtuVMsUiAap",
  "key1": "59YK8zmtHUgvgUyJbHqeDkNwMFMsXu8rJ24uhnnAFPy9441NRFVs5UKFtjSVUD43WAMXyJLoPzJDqcT874iA7pEd",
  "key2": "2LTwQCCoSEE3W9M78e1cy8KhhZ4uqrZhd2vAXqahvW8yUahSvV8r4wkY5DqetqH6zJzxix3Kb2kCfwdLsRc6oSRP",
  "key3": "2cnzTSHjGLtTiWbNkvyFmi3qpuYmoStvFMJS6oiW22btHWZ4C2C7pT1Wy2AYnpgUT8BEYeF6bmbU4n7fZtLk6eX",
  "key4": "3dZ4PRkLtNHuAwAoKUJDSPBhvU8N23DbTcqvscEH9VsY7wJXShGrtT3W4oVQP7FchXZa8gwZGRHzSRbMYEhXnrkW",
  "key5": "4jHJPKUjmZREYMqZE72hP5jFNrmC1PcjRHqdFfiuQ5hvntmgJ7R7ptaqXrLVXSfaVwMRP2vfXWdGCYMAo5mKweF6",
  "key6": "p8uKTiSYT3x9SbKZAgob5ajRFbQYnD8zw2bWHteW7kJNzz3PmfzLW3pkqCDuSjti3fe1Qo9BsmKp88KeRkAzHYX",
  "key7": "5FZGH5HrjNdnfhdrbFcUu81pTvJHqnW6zVPbD3CQnq75ViaDqvrZVy4krgpZimpsjcjYAFbg5NaZyqKuSYjt1jp2",
  "key8": "3xn4kmk8rwCCx5pmzcdNLSs2GK1FGnusgCXv52rFgxPMzaoAVcd46BFTvkvVC6An8ZkNzXwU9QwSkrX1dqTWFVBY",
  "key9": "3263TsWRojkQGTmzBnRcPSCog2uehyayjbX9Hb3HaAtxEBVAYSbxVuHqsiYY7PBDQGEJSUYBaz6QWNaYR2shnw4g",
  "key10": "4SqesnAsgZrS2ZAmZSXVPU7vP5hyzeHSwTZ2zscWSLmqPCJmxMZZ7bzgCieGEamgEsxV8g257Xhbo2AAz2eM9QMv",
  "key11": "2xj5QczmkCTKNvG9KG7F9qScNu3fzyT5EuLN4fdzysYdBT6NcJffeVq7LJ4d9zeFpZFWTVmZ3TMTHs7S7gzyW6sk",
  "key12": "3ZMWqWRRj8QVrrFygZoVp8VW9gfqQ7ywjkvWxeCUBHSXkm5j1WJHWxUHSD8HooHEBGdUnj7dFqxnBiFGSmQ7qUvQ",
  "key13": "gwcNzFrZTzMZvdxpvLHTBNT9nA3KGcK7HC5YjNDjCoZLNzXcZK2gEYRoMpFPR6izjvFkPHfmHJN1No8bt7RLMRV",
  "key14": "5DcHESaweFr4aSETB75FjXu9QjqoCr9GNNMn4aScnc4b1nZFm8G8w3zBAgvoARrdwtiR6BimyYYrB41tH6gt6gM9",
  "key15": "5CP9NYxTrKXjWao18xPgqMigXqq4tQnX7m5YySV8VxrecNk64VqkKkvR1W7EAm4PWqLdB11rsHXHftHJYdryFxzJ",
  "key16": "27Z96hXSKyXjYgJuMXxxgNmGyPjVBcyEYnpec7qQkqmrL5G8Ys4Pp28aGzbLdXJaTLZcq5oQSkwSAjgsDwKjjsmy",
  "key17": "5cUFKYDVgsxu2cNXrSBSeK22TfWLXNSFYJckVhCw5M4o5xQhrTsptnZ3VUcescHqU4qDiUVjqwi7BbRFhsfRe864",
  "key18": "3AN675wtMwt7dhvds4fkfqrZyLoyWUQiBJ3R6CJeFyukG89W7hPmLWP34SSmTbp5mxEJ4xmrYho9RcGr118weMQC",
  "key19": "2tkekbz4zuaTZdFBB727hj7mwtXiNAMAsza4Z24wNNeXY53dvfh68T5rrinzvz3x91krL6UmA9ZCbLhCPqBBp4FW",
  "key20": "4aEmywL1CkDB5PrPEm1XUjAdj9nceWv2j2yyVoRbAfSvG9Ge2ac65c6psWwMZQSFjozBhihne9M9BcT49TD6gvkB",
  "key21": "4yk2AmwjMTTa7pBkJUkXn12uQ7c31AMSkyosmU65euDSoAB5Y1eCH67632DUagLqHQkJAqtzPVtKA1NdwkojeRAn",
  "key22": "57ZAEBE1deGbjuCXXx7WQcXhqsncDRCjGqN4ewJGwX5wPnUp2kzCmyS2aW6udgNrMkmVYJmATxsqPBVaxhfwyWnT",
  "key23": "3Nu1MzGsXbQf7GErB6ZE12yqEDKe9emtMMQbWMKaQfmq5CYyMQBjPq1PEJn5zHkbZDbkrZK8RrpHVhgUo5FNhBru",
  "key24": "3VLSz4NtheMe2XPDsjKmtzxsbccXmtP5nJvKPNaujWqgiYbHH3YUbohqP9Dwb7TdKEGHL7rntT2DWM8GnX6Xd7Ne",
  "key25": "2v4fyTAFntPasAfpjw1U1iomAcUyKj6GxHGXCQGwf8AYiSVtmo6163DWH9ADcas2RKqjBT1ikGY5pn6zBTEx4DkG",
  "key26": "sciHc8DzuSabH3RdFT1A1AtexWcmtMfpUdeyjMT3akcfipmzBc1tRw48tYPTNymynY5TLMrhxDtCb3w9n3NKqZG",
  "key27": "2aJDmFLU7dxC662gE8336HLZExDxF83srvw456ZR6wgnB9HiheCBuX8KbmpdFCbXw2v3VGhvi7CYqfN7M45Shgaa",
  "key28": "uQnUpkJXw9fiuMUrBAhwBs2XmpH6KFYRPJYD8xGxZGSpaqsoEynnKxVuX5Ztn3mHx1w9W7T44k9ciuPiDnwLhKP",
  "key29": "3nDCkN7x89HRyd7py6cBfZ5YfkZHC5NnDdcHNbLcDVmWxS1AHTumUxJaDYTsuV2NmPi66mHMY7KQJGABYBbk4KNH",
  "key30": "2kyNL9n7MvHZjPDbbQ3YgbrSzidSA6iSDjJNyY1shmvdaL3KM8MQLrRdT95b2QNEiUQS3cJxU5pdNPvVEqicJLsa",
  "key31": "2XvuNTRjM5AHKB8pe9xGwuYJvmD23SXK5xKFBEPjSM9uG72eCcRPP9St55BdU7k86ropXr8jd9QXDUJLy17JjRu6",
  "key32": "5sFWQ9F3z2zAs6qSYxEdMwrUxJant3PtxXVghcgg1Linn3gvtLc2aNP92NdpNy28y6GdqcpSTGYu4VgJ1mNN5iT2",
  "key33": "2uMvczjQzvqoC3HWdc2QQWnA5opDKaerPCmuDwYeBuA4XgsKCqNjtbFBQECJhjXGg5CJr63vo7kp7W9c5n6LAmaH",
  "key34": "3dFetbpXkrfcnCjiNwZQDGPNgF1j56mc9A6RGYPSFSucRo1EVEEp7X139ewbN8JpkMf1sGT4g5whB9UqcFWH45E1",
  "key35": "55jrgCS6ubSf4TEgubW7cboVchx7PAHFa9mx6GGsvgED91VdAEJHkNst5bbnDxx7rjMiEJG9nHFJ5TuKBmdrUQaG",
  "key36": "459ujms6wZQ6zgLszX2PFsfPLYkhNKWE8qPi2df4fhaBiQeDD3SP19Tw1YJyHDubgkJm7FELjwCFeyUbMogyX1Ca",
  "key37": "5o7BTVSoBSL11qKtt2UkTmBdV9qDY2bQukfiKV8MFjcjmjz7sxLL573d5QLiAqJ5374vNZykvm6Nmrzaku9v68eh",
  "key38": "4cAr7fjWEJTAGgSMroihAD2pSfbTEwgnsRY5wHg4teKpRjaBEHMEJFkEtzKsMjBgoaKKryvQdysfLZ6g8WkBzNz2",
  "key39": "5f4zhXx4i6gjVMr3mPJSefZnvBsvx4DWSGi7sLihqLi7gy8grqYv7zHcnn23CkkTqvA9MfPpnTQsYSTKWrcdL4ab",
  "key40": "5cesf8qkWeUg3uizLezgf66FjyDehmMgKqHjCgiyHtDhpYz6mJeXsZKrj4aAbCvse6dGCh12Evko13mZF1uezKMz",
  "key41": "5qT4UBEyf9eJHHEfxHzhyEyYxJcDaLUFaEc1rA7zNFFZVWpgd4KuLeRDE5uDEsUkTk3pxjxi58r5Tp33qMLuss5X",
  "key42": "3tZgf1Bimnw1UJAEdiEgSBYe7qKGWVPNE8ZHamaWZUgnsnM1Z3AXj4MLT8fxvskth7UzbSUuFKcjUUiwoWw1zXjD",
  "key43": "2mXN5cNVCzuUjUAEwdcohR9FFrQCo8Va9W3YaR46nNQ2zcDFdES2aFGQ1MYoctDG72R5WsQc7taw435uWBZskMK6",
  "key44": "4gXWvjZvi9BsornaVH4JBrSksRih8MpAErpRKuWxAipp3AiCB4Bvcpu6FWZyzg7nJ3h2E5BefXBihZBU2FVMkNgY",
  "key45": "7xJzQHfwDrxKCmgTxoGVwAXjbyvAxJJQogfq3JrNNDqcKGTmpHvv2qvQg2YEVh1YYan2RerWaZCaPDzabUFHTAs",
  "key46": "3Fta42683tSuzbX8Q9QRg7DZe1jMxmtSp18NgDrVZf9xTciY6uJixfT6DNnAoH9voxNEZgkZPZRjueB6ZkbJGvAQ",
  "key47": "3KMpcAPrXYm7kyZZQpJe5CE7YXqUERvcrBceuDeotTQAsCYsfpCV5ePTnbqwZ6UfUhVu7iS7qTWpFpTDsSv7yjEv"
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
