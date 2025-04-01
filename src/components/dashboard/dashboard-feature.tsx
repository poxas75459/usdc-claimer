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
    "ACjFfQ5V4LAsorfdaNekiGrvsAKQkNQr7N7hYU2DFPadgCccnAKLhUoKjSQgKmwE1jXS5SpT65jcBg1cyHqyPGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oh5TUgmediVbBMJsQaRdSJLb1qU29NyVik1pZYems9VjaN6r5LTgGGDt66cKKc6bzCc3aL9noeu7SofwTkAwnz4",
  "key1": "3QHZRGT8QzYw8PQhosYinKkqTKkHGJr3MGnBBErg2pXYHEmQLTwie63D97rjWXXkv8KxudWpRza124KBMS7W4YTK",
  "key2": "2H22uhRDq28B6qmbyd9GPqeHGSrzwfKCxfW5Xe2buQwWkzUaj4unSbfYyzgS1Aest18JMef5tukbp7D4NMSNSuLC",
  "key3": "RYuS74wDP3F7Vy4PguNPLj9PkRzvRNpPdcmS9ygcroXJfgq9qeBRetjE44TyiVRU2JV37AMYwpDtFyJ57ue37kn",
  "key4": "2Bk5u5UTvxh2L91EssU7Xcn9oz8FznwUfyL9W2JySXDL883MFcGXpMqxoGEQiUfFqQfYa3pKjmD9gy71PzBpeQaR",
  "key5": "7b7XZS32yHuVrRV1M3DWaz2G6Dc7nqvEJ8sexcMuGFR2xNXfTgtmPVX9pNdpnu335UvPKjkAyrSvLGc8AkFvK3H",
  "key6": "o4GxsXTMNEB9Vyd1sJW35ij4W39ujDh9mbY3PfiUPkaCMEpm1FqTDY4gQstE8VT7DgfRVEZ7iwwdMubb3goM289",
  "key7": "42UfqNVuQhWcuvDMvERYPv6GeMtzJeasicMBvBDNaDFNTnYxP5NB1p7REuSNu2wSA6EH36m5Y3sp6uBRMTcmNhtg",
  "key8": "3MciQkJvzzeQykCmaszZBktSbeGyRKyZosEpypyXXk44zwovVUmGdGgq6bVG1NAJ7RahgaQBMkmQAhsN7AQDhjSh",
  "key9": "2WbzfWAcDVtNCcFRqwPKzcb4NpAwAJezPjy3xPX8obLNBhJpjpSQA7Jft15Ay5JX15XkUUNiaoyiCEXCbDMzkDco",
  "key10": "3XDP1TQ3685xvRmCwo1zMkJREnRpHdVjucPJC6ppMv5q3UQKoEhNqAJ9UqFpFYdtarRCqfmd9y8fWYq2tjHLCj96",
  "key11": "3oM8TC4A9Yqj3ZSrANHZuUpHzR7nB1tfXWuLeCYePDWSycAqUgpjNuHxtqjUPbpHXuTS3b246JjMPD1ixFhJjEBU",
  "key12": "6r3qdo8FA2enkHxzJQ4mjvRddvM3XycnXzqTLT4Yw9EYdG5cbeJStjhpHfmAs2cN3evg8zymcWQyG6tRw6LFMGf",
  "key13": "2xvKVtUaV9m54Wmtxta2Zxs8kFKnyju8W1dyGMuAJgwSiFNnF8WPYpFguvKfKE6c4EwSmKiGfcyFRVAdKY1EYio2",
  "key14": "2xPirqu7Qf78x72aHJqtUihUUB3tPBE6JQqYPguCNNmNDVejcbvW5VYQHvn4dC1U9WcRkscdPWKQ9rVRxm22SBTy",
  "key15": "3bBueYS3kbR9fgrN2Hr8ujm3baUBQrrmJoq9ZTe7DUN2sWCDoyRWzECUXyHfA21bU2hgohqYkjsEn6mwzHv4KgZg",
  "key16": "4SUATSwUH9JaVyRU1vwuuxkAcCERgU9u1iHeqyikMJjCDesaW6iogkyu6rtvFgvbAdzabGYKno5Hvd95bdq4ozn1",
  "key17": "2WsG5RFfn8pJ9NdQzDR3D4DKpMjhB5txY6XqLt5vrCuTNiCFrriAEEELsFxKMCAtMR9Ps59Kb6RTMbbRPjwhBhDS",
  "key18": "pGmRz8MiurF9b8XYf7kkU1GwyfLW8Suf9bJM4heaYoPfgjW4PpvD2wHu8uAAYniqWcfE99t3TgrDWdnRWjJRmkT",
  "key19": "2wEhAiyNo2ryVw26xSgxnFGvSythz3TJK41kUW4dY2D4JQsMaGwEwSfVTNg2TWB8pUCnUYfBqKtzPzfxdE3aV1ph",
  "key20": "4Wou2x5Mf12MDEhjCQmHTTu7Z7GYgkS2wpGsWPqdrHYVLKMiSM1186Vpqx5JPqkedXLWj3VDwQFPEDkzt5vMbgdE",
  "key21": "4VDWqTeDqCF93oHwLL62LVuPed89kTv6xDkr13bkYmJgui8dRBoM9ycmfFSrSmAZMaEfUiiWMQ6XK9P2RkqoNSuS",
  "key22": "43LYKmt2BLZp6ya8VvAqKerJm25Rr1uuyyxnSnESkvZSb9o56MYT7a69gQSvWMQZqWWUWWy8XBdDfGn2J2PW1msE",
  "key23": "5kbGXKLWeokWMX3Bywe8BrEz1W2XbE1Kc4oeofEtJqw3WouwweJko6hG6UQRca7xyUDdCGWA5q33hV4FTejHwNpw",
  "key24": "4gUGnn1HtKDQhKRNZUdK6MPndBg5tpkYfnTAj74hDqHnb1SBV4u1hRbhok7FnLKQ91cXfgSC2ftSdnrf7itM2NVP",
  "key25": "5XBzXyKAH1eh7NA1oMfk1vbtWGU5ve1M9JXXg8LkrShgfioN4o59JSZrPGt2zeJhdS1NQrh1K1Ya6oUS1nfNJ7TJ",
  "key26": "2G5M9V39EJ2zR6eGnGHqhkGFC5gBJ5GQZb4zp8VAAPaRX67RxttqR2WuZEQCudSeJmMnK4S8fGLdJKZ1Wt5LJCT8",
  "key27": "5s72nTTzWFzLW9bq1JS8f5X4JGQFh8abKteptfpfESvckYACvyrJM8HdGN2EnwNvGHJm1Mhyev4uPapi2sPdCsn",
  "key28": "5z2zqgC417c7YRKBpGq1y8BNJGJFx1rRHcWjop3NraxSG46DhNsXKWX1hFzETm3nPM3gQd52ucB6gBP3ZrJgHKEP",
  "key29": "ANgn4Tk21sGYhPtxJDpUxfHEr2JuX6zf5o5p9tM8oSHwsCzKPY1TAkMJ5WNa14LcWPwzkYMbfPBaGmZ8atucYkd",
  "key30": "4mips2L5R8AWpKe5ibpzcRLxHimp5ypspDmDHh2SQ7gfbdpCCcf8pXSu7nYDgPBNRhpjfdYRSf2hLKUY1pprtuwt",
  "key31": "36MVeeUhvGpmUyMdduebeuZ25awZAS6NtusJGfQaEiSxoaXaggZjNdrqPxjLnFHiAmCBV8b4Z3aUnwKaqn95XAaJ",
  "key32": "2v1wGi6o9gjpFj7Qbd5U55z9cmf6YBWpa2j3FocAK7yDQ3R4bCvWBGfbEdH7ZKPBCj8URWLSAJjzrj6sNt5FYTrD",
  "key33": "5WZGZJs2mMMCk6h3WYis3RPYQ3aaVbP8nRiFa7STPXWJqyNEtYcKeySRgEoQDAPkAP6WAQdWAQyv1Q1afaGUPUwJ",
  "key34": "2TrVmrDFhQrZoh2qavdq6g67ZooapamuV9Eqkcv8DkuqbBcn9yisfMtsSs5nn2BiFWD3DqAVCepAUgiMJsRLe2Az",
  "key35": "2mYjLrt1ad6pZ8iAA7fyCxzcTpTjBkHMCHZRbkaptvh3BYUy6nfDp4KgXLg3GCySsrjritzGHMCwXJy31o9uPoJn"
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
