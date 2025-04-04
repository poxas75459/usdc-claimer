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
    "Ad8PQU9n9cuBJnRYJRt7tfahReeSjoQEw67b1fM1kLKbSNe3jHrtjShWECm1pMVnFY358xBJHEXuJoFSAmoFRk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7EoFKfkyWUAb4GAKaD2eKRV5VdWbh2WLNMbEVsdmUDqrfoXF5abqnoPSsiSmoSPB1zX5cnsFNDHGw3UsSgn8XF",
  "key1": "pcfxyoSsktBWv3jyuuJo3iPBkafiuPGZVt1CW3zqzjEEX7cHBiY2JsXeNi66xnggLqBDKDxQ6SFJ5bhMsEVHhuC",
  "key2": "5dix5Rqum1X8rVKjLf3yF1AAnpMxgyYEGN7cWtUtKJZZ98TQFcHM9jyckBWkj7Ay8GdQP3FJud5PtRFMePZZztYD",
  "key3": "4k8Zzw2jp6qDVZRav6qgxEq7SHaQMbY4Nxz8cLpWCnNa7njGQyjr5MFnYNCrcdhEN3W8AmE87DTPwQdgWQGXMLi6",
  "key4": "55Vw1p3fGUudYwvevJRJ8qoMYPrAwGSXMi3XN7EbpHvdGJLznyUJozNPdKgZe6ygNB1xEpcaQEz1Ny8omFHXbVhM",
  "key5": "yNBARMg3JCv771gAo6odPV1TgyrJi8TagPc4pERKosdAjFsqZsFqnqgSHFWqgDCqG8vyrbyQZE1tfNJRWDsBjyz",
  "key6": "51SKSd9U64qAaFSw6sQGSwxE7VURfM2TayWwNSTXA47NKQQaUvT92VcujLgtaSG7E1TBRpGhb7EzbTE9sLGrsbYz",
  "key7": "cbEC2oB33wZHB4EiTVM1KziTk9vTwMin6NAsPboEpb2V9t8oP6N4h974ciiUvuk4hBToAzsYEZfaHB8gpKoGQjG",
  "key8": "YrcnKkddhotiJSSqrqp9FwBmXwoebVmv3iaNXq3MTM75swcS8Yauzgc962QAvi84VN1GM4EdM7UqZaAjFqN7Szf",
  "key9": "3FujfWHACdasy17XoAGUuDZuW9gXWBUJBm7feXUZWsmK8d1xF9rcwhxrvfsrRVEyj7HJqXRWTgekJVYCL2KM72KV",
  "key10": "3mmo678nky7aurgjrQ6HZeeJxvX2sQTLof95db9xPuNv9335y3jbLrv6b5BXZXq64iVgJrsAv33am6QQ3xNytMKj",
  "key11": "3HxWXLr4PGyuvjYXqxWA1cNqFTNz1gAVCyA5pNUC6ge7eYqdDfeAjrzV6DimGG9936RvBzqZCToNzf8sTXJ8Vc8F",
  "key12": "2nQSWkWiXUgvxMex5ygqM2axvVHttXUCRXQ1NXNuiZAmdd5XCaPzC5czmjehYRkos2H86wTTJFqJ7AocZ7qnyUTs",
  "key13": "fkzNmJABJeDuv3uiPzbjyHuv3qyQYR3wBkMMaMNbXLDf6MsNDpojEijZgXmm4BAQqSzrHKUbxEwJfT7fApheKuN",
  "key14": "dnCzcC4FXxyffiW94ZPRoHs6Yk5aatSmmWifjgjxWfwJrWxT1U4oHAMKuEaLJPXTDSdGujR8J13UqTURpfTA6GS",
  "key15": "55yD7BobbMNz2w8gNTQktMPnxwrQbQ6fNHJi8bXi1gzBnCxgvsZUoDgphurcggMstvP32re2oCo1pxR78undoj1b",
  "key16": "3pWZrDBDivshEDSkJ9x5hJivpYYjHWWvYXyFPGE7fxaqRiNbEreCuSCQimLWTTHfYdGWMfYGwwthc3pcukStBfJG",
  "key17": "5m3LM5HywhkAnWLr45X7i181Wn3ZmC7RCBRZffNhGNBDBmNByi42g5k7dL3wXV4nVwrt9RLhFqrekGEGcaTegV2K",
  "key18": "5b5z58hqAkfbVJPCzwhVJPrYSG6enJmDXDz2dPukrKCPSzPsFfsBDbC9X7RGNqrygN5CvNGV48fn1Ln4vHMTpdnc",
  "key19": "2igoEf9EJ4FzwoJvVyXRwF19YKHNF9LLfBguyQUL9au7pv1YKuH11VEpKGqWQQgmbfo5NLndqNehiz3GifaKYPBL",
  "key20": "4KS7PNmWAA54EZgPFSe74pUQKLf2792qrmLbZ8G13MK6txaQTGnts3yhn3m2UvEnTBmxp8GCt9ER1cZWe39e9peL",
  "key21": "2t9y7BgDxNDNfqkAzCRnST8QMQU2BkVnHrvzmigDw27p5hDNhEFmdRPo2N6y2aiHQQgurWuMaR4CSAFpmrCKkNXY",
  "key22": "2TPaeejUSbv6ZswUCU9CqLz6oAKg6ppRhX46Q7DsPbcyNPJf9f9g7K7VcbzeNv6d39smLT61iuFAhdRh4dqhEYj1",
  "key23": "3ZgMgGzUsZ71Q2SezacFyosn2VMfsc584Pq7USy18pJTiYxBUzLbbYG6PkJD6BAtmJeSUqvtT8LhJCVmuRZX7oMh",
  "key24": "uzNtPFjgD5qPyTmVDfwuTRdnLGCidcbVyEDHvczcsd1Pekp53gZuWgoHDBpuY664f1RSXYikbS7D4S2mkY8tLGz",
  "key25": "rSEJ1fNDJcopHf73HoLbfxM6c4gAZTYBNvkw8wuobZznzmTwGLESGvbkXYN3WFxErRRwHZQcFe5HT1Hxkg57emL",
  "key26": "5gCDJ391kzz6K3JkPScmQZJSftjYtrdUUNLsQBFWnB6vzNtXae5tWfNfkfF5KifAcYqwaALtTrMR5bTdbHSNRco8"
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
