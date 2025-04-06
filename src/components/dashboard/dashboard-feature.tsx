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
    "3m5xaggJSEGuzcWqT6A9ncHqzqMK3EZ6hCVacPprs9vrVRKFfLZw3dxKExNX62XriM4jCbShyn8jepwsd7DxbQ3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1xgqeqGH2rPFnUNxi4sRuqDSRvmCrPdMN3RZonPSishCKbMFnwmNjueYYCZaxvgi3QWMbbiwSSUK4HPjcjsBj6",
  "key1": "5JpVSDNcof88ufaoNRN4hr5cUspLPyyHc7UiMvMang7aPqHTF9o9qd6NWMYkjWHnsoqfTcSRYsy8SG2L3z9x1xEg",
  "key2": "2sCs8q6AzTW9Jry3LGGtY1VnkHwC2s6JK65CJLHhs3uUhXzysq2QVvrRCGksXqX7PY2SpN1FAgLzRRqCtTF2jS7Y",
  "key3": "4vm1TtzcMhuEZCMcJc7pmZGQYrVPDgrbkhcocPUaV6cEupjEZV4cejgWSDGNnM5Xa7qaP81eMEdYpUZUQCEgpBjQ",
  "key4": "5AAJYZzJNsXnJZBDUjkEbqkxTVboPXxwFFMUxh8adr9AngME5qdmxg964QsZvzXs66AjEQMYQhY4zT5EXNV7XJq3",
  "key5": "5rXsP9LBHnR4p6zM1TcthhD7BbXJDjj3QXce7aQhnuQfZDtTFwLL5XPmoZp2ZPd3MJhGLm2QEQ3RBFfRAWuY6CZA",
  "key6": "3wWXp91X4YBggPfTdMhCE2gX4sr6zv29aVL1PDwDkZs4nqSWVac4QefgxzTabSeHNbZSfzfAKFn3ThjBUnQFz3Ap",
  "key7": "jMjzgabrRe3J45QKA6xcdZRQ4buV31FAdvCQSQatjTH5aF9qjHRkGUBCCcKLR8V1mpKkpRXTqnH5VLB8AMU3zAz",
  "key8": "2BSA6yRyRDK8gYRTNxCd1kjLicAAtGuXxwVkcmTr8sWERLG7z7FruW3JKCXAzcCqrRVPWsjRQQV1oyhktzuz8uNf",
  "key9": "2zxV56xV4GomzTBFtniikXpzzsLFRDkwhygmkCbJ5LbC5Sa7acnpiUNvuBNDHunpfkLFoD98MfjMLCKrf5APPd1f",
  "key10": "3QYvr7un4WTGhtKyvA7Dzgz7zZihz9gjzoYRDKYxzymhRiW184txw41vDhAfuPuMKaQM7YfAPtFVeeacgiEdXHcB",
  "key11": "pt3Y4wei8zKRfdSuamCi29xzVZsz3F3E2mNFYVJVGDYWHEvMB68i8xjUbETDJUSmDxoEnX8joU4K94gHQWvSSTj",
  "key12": "pwn8B33F5aai5ATL4Q9MnUG39K9p9efp4pmbcdqA9SnAmyScd62JiQcUiry22kZjahipsXMMJ35Vh72xH8P9WyD",
  "key13": "3chmpSsyLMAvnifFmMTAzgk4Te33WtpNHDWnfmfDQzCnuqxtwkiXRFUGqCudLVfDSBER3gMskkxA5VeeQzEmLYBQ",
  "key14": "2ozM99qRLWi2Mvy5AqLxtsDWCjACDhe7qkRQXoPgQKfDFbSU7nBHb2FBhaQW53Jy3kL9u82wo9iMNSpKFzNkXc2w",
  "key15": "3c4EcJJz5VzWnbrJYKecYDnzfDd8gUZUiWdAnQGXQ8BmPirWS51DFJJgmgzVzwvh9jk8Ri6QWHjU7EmYo1jNQErs",
  "key16": "oZSiGXzNyTQVn8D3qocsaAuGuekTWYQEaXYGMkTSM2C2tcUcvXe4cor4qJFjeSse1hEjZPnusD78aCRtNYL4wbv",
  "key17": "3B7Ynd3iKSCZTo9BndhMV8VsyakbLsATweMaPzXBgc4rXkMw1HuETKpgF6AipFmpL3AMgFpVWFC8f46mcWQmYv31",
  "key18": "5NCvMdCSvYYueCLUxygb2viDYxw51RnNfEzCpf8HmHT42nABfgPQ9RGLCV8MY8PGju4i15Co6RbfS544nGwe9b4",
  "key19": "5yTAXWCLuF6CBvtTQhKQymfxTPghdYtmfS9ETLRCnL2HyMxLn3gMbrGFWmifYuYm6DpwBbnFRKXKuyeRCyJqbWs4",
  "key20": "4SZjjtPV6QTwUauJd4DgrBZ6ASYVGRjGRW9PNNY68Pt9yHUhY9pCPHznRxYao8KMeZe1RXWDxHvGNT6H63qVNsRo",
  "key21": "54uL9idAcNcL7LPiBeuVaQQby12MtUgLvZMKN1bAKozqCgpXn3W1Eig3fPKoZaUdAxz45SAE2vsjb3roh6oN1GLN",
  "key22": "3pHLymJBceQAXTv4GAPx6FYkv1y3ShDHEHs2Rj38JPDGYbWH4siEHmDHbqxvAqN9c93HsaEjMDtqW9GRb8HC2hGy",
  "key23": "3xUghx684uamiPEtUWZPwHM6UuFHWWWtDStcYvY5sNdJrUSr2gudJRt1JgTvnkWkrtAx5TvoQ9GnjcWXu5fywzx6",
  "key24": "3tfqu4hapNVUHhEnyqwsnd7vtQGkiquisw4wEfmhR8Cab1v4mX3SPhScUaCXPi9uXQEuTxFPhK1Q972novTQxzKo",
  "key25": "5QTSoyrRUWqTnDShj83FZiCzKKq4UedWah54cofnEBkLr61j3XZ9gjbDAYuRXGLrGLMYS6xzjQYfV6rVHw6LCzjw",
  "key26": "5kJ8LHWSGz5SrE2fxnBDosHtyjtVseW8LCLQjmPYxgfo5WDxNxjfvKoXJM42NDRynovMbCq7MRCg9d15237NWTJq",
  "key27": "5ZNf2oSMcjoirJssAsSXSWZhrBomxZzqnMV3jGCdJPiD98Qpx2oE5EnLJMWpbMr5L3cnfKe1S1DGYVg5TwL2PHWb",
  "key28": "DgP4i9kwPDkx4JUPHhAFCmhLESKHL5ysjuveCKD3n4EKpxDjmDDLcsqm17uy9H7Cr1mYwbZmC9Zepr23VDDKJCR",
  "key29": "2rHA5Kbc2FXuGoFZW99WuNwx1QhPYnUKswDQCQujtYvGqdB4z8MGjMKrMiwc6aY42KaY27Z6qPzSxwWgS9m3vGpn",
  "key30": "4TwqK3m8kQ7PHewEYUXPh5XyJN6ahEBpULYom3oRE4a2tjQyDuPgjfGtbJpMLMjGvEgeYsr1q5sM8dA4auGamnVd",
  "key31": "9nRszLKjM8Q7cPsv9W7cD7vbBVzFJZ8Y7daWnFdoVU7NmfsQBvtH4GqayhqmM2UYiWq95SB7mZrWTDZ325EHLJB",
  "key32": "3xGyUjq9dYZ8RY7KadoSB18R6M18BSnj4amAHvooNDw6zFEku6YdTvktFWw64JtrKUmoqw87Rhq9XKodwkEmnvuf",
  "key33": "2kZRFFnzGfaiQjysin51NFfdrfTGvt3aFLBpDskMY3PunBYcLArpu6KZNFvWQx89L6DUUuHPP4Kq19jG3Br6SSq9",
  "key34": "3PN1ZnWcK5p3BzRetC3Vy9zzB8aQ9gvpT77eDt36D5H4R98PnSNc7uwN3axQKpy2BuHTXDo49GBheEbM35Jt2Z2V",
  "key35": "LLPA7PdfNsJ5yYEFqZM8g6iqYcc6NFQr27oFKw6SZ8UhxQXAg9ozEduVgeGaZwWJUix6fR6fkH2NBrrFTphdbEU",
  "key36": "29WenT8yAJ35gAonWtCLjsdz2B9EzkNv8NjQrXnxKAzDJYtKJp1M1WMxvTedWg2HrJ3PJHNdNxCBHfx6NpjtGSHn",
  "key37": "5JK1HyMLt9iRBEB2g1ZaiY4WBd2jvBt7RpmdmpjQzyuJtriQLTxPFjvnF5hX9eottrHyjLdDAUeiU7ezGMNp82jk",
  "key38": "iuUNfkEZ8S8ey53ZMWGE7joKBxrpztDXdRsbQvN1QRp7d5Phc3cFx1ttm1ZzhwG5aor6TEK8KaaZQU27BQrDAte",
  "key39": "xxKDoNoZSx37wGLtJzMSee7GuqnZEq9ssw3oWx82b3L7w13Esb49rjYhzoSLXXvD1zot96gPAbgguBDQUdnJ2Xb",
  "key40": "2QcuH1ok63TahfKgt7gSUD9vs1grVrCPNWR251DxSmYtHUfsRbqT76nq5RZHB9WJepuxTSqM59xucyo8D6brXmz3",
  "key41": "5JSEohHTmFsidNx44bZ6VrqNKucg5ufZxk7R898LCYxRJGvHtui9PYNqx4RJY2iBZWqQab2UN4LPQZ1RQVAe5P3Y"
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
