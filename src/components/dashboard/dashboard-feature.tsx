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
    "3pfJTEDS1UND3XfvUCZeT4usAFkvuRWHUsvNQb7m6M7rUQ7dvAeQL66sQ68dT51ynQrpytLGk4dWBQ8MFc1z4cgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X59ZESU58TMxWs4LStMXnNcdvQx48FeycULT89E619RHZNhY6WyTcmfiZ2LdMFJPx6q74pACEfehr5DKM3dGmL4",
  "key1": "3tZgjworHvzeG9YTMRWaTdXNnuqouUyDAF7omNuWzc2ZM6pn5C82bAQkZDyPUwDoisf6fatxUPrJLipuk2aN5XHS",
  "key2": "3zTYFRd9SMRS1SzTfC2YrdYv482ARWjSkn3iVcUcrW7fpXMjBJ7brvULyzWvRsWsSFkUU5NYAoSBWZkapbf58Vej",
  "key3": "3Hi89dufdR8cgSEwAKV6Q8hnKvwDfrkAcCTMQKdoKr93Tdc1DJbsYP1Ra7TxSyALWp8vG44rwW3mYmVCTDzUKUyZ",
  "key4": "3B2LZyoCu83pYsnTj3vdUDratAVshmeUvFZRdj8T65z31u24g5osbhmF1fkYn2VSqCPPYheNJjNSizKQKJV1vpye",
  "key5": "mWpM87KHruTjuA3cxV62BCNWLrpfhxSfYPL6VRgTyygaxWX1oKASRADjAU82EKLXfZ7J6ftUdG7L6zWYzQE6Yws",
  "key6": "qyvwWiNeFfwNgrpjsBmHkUePLWd1pPfgi87zY6G9w68HsA6pJLCv1GHLf1V27S3KGcuReaAeRWnACQ4n3t1CxCL",
  "key7": "2VxsU31DRoTY2SkYYnVvHRYuLDo5P7FnEKqpzm5KAz6F6uKqksqkKobePVEzxNgE3gQLQSU3eQ4aRbC2Bij5ddRK",
  "key8": "5cGn67TCadTknY6GPgKvqxv7gqCCbc642m9nUbchwbsZfmw4dhfgkwirEp7rWrxgWKeSsBk5UH2jjKDa3xddwyjk",
  "key9": "cZni77w1JvFFHHogxFuwYkaDQRjsat4ysJnL8bUYJRdqoJDmaDMg8umQyzSATBrVbXUGbn3nLWQ85NkWDDn1SuL",
  "key10": "KKrF9PkhK3KooTCJjEoogd3xDtzCuZRsLrKuZtizy8sBpXGAoEiXsT33sxPhvCRonZELpZJGzAqdN6LgwpdBfoZ",
  "key11": "1NQWTpqPLo4kT2jRL2DBwafw9n4NgBsNruWd9r4xPbYQghrPVtVHcV5di8r7guV9daVvZozd4t31iqNeeK8gjMu",
  "key12": "24hykNREWo8rVFWmWNYK3kXwkJQq6JBt2QZWUEW1WxKvqbfkdodVNdNajF1EaD37QBAHVFgm1MHEw8tw8xujf9X7",
  "key13": "29QB2g6zJYZTXT7PWa4QWqVwtydSmSjsNMK1tymiJjYEchE8vF4VUfwoU3TNa39s3iJ81i7wNEA4sW73Vc5MurJE",
  "key14": "3Y8799YCPEUUU4ijQ2AzWKUuZk81tJDSrZyHz8y15uJwYYtVRXcLhnDB2kdk1h7ge5p7VjPQX942jh2d42FrN8Td",
  "key15": "5peGigbST3LYyUZ1bgTKynhy8qhpb7XUPm96s3hHiuPiUWUpiPkng6496LJYRQdtu6cgNxvPjtkX2FkP8CJpF8uf",
  "key16": "5TZU4p2CdE1aAyrH2crFZPb5RNUJRGfVAzHMZ9EXtMUhQT8We97FzEGhc4mBqnfgxfFFYVxNoepxDk15L4SLNjVh",
  "key17": "9LqVgNifdbRtBEYoaerG2HAhqfkoYmC8fXFRtybr2a4AmRYi3sDqrwPAjB7krG8uQeFXVSkVTLUnBkMSQdASU7r",
  "key18": "2onHRaUq1CHRzLspGFi8SKvFvVh1c3NFcDUbbc3VVVCJ8YuDjndLxDm1GYG7mEHFprtKFm6uUDAeQCB4GqBeRtwB",
  "key19": "2VtLLE1W9HwrpggPtz2EL5MFv8u2v3fGbiGFPUyRAKbEoWQK92N7jJzrWLzsU5ZMN7KJZQVxQUoMpFD7YBQFGRzR",
  "key20": "hSXUEioEooQthMYmo5mKHdoh23R76FcbCq7wyLAbGU57mrRoe1JyzcKhXNksZafiQ2o7tmfoYXKjkoRVRRLzp1c",
  "key21": "5Gd63ajkNzQ9Akoc7QpEUqJiWX7cmWFhHR8Mvebp3v4w1YbBtsW3tL6hCPf4hAbk5VHvPqAWwzMwx7HERn6PQJ4p",
  "key22": "634wo5pWx9uo8ZZuHzoE3QURCqdqWTeQFLVyjRTDQK97QAEcfqwvTCdCPYY3tFaviTcpRc4LQy55w8BG2WC5fg3v",
  "key23": "2nTMHw569H87mhwdVLMnRcUtyUXsBpT9U57nXb5NokiP15rx9g7Efg22KUNsREECRDNXSwwj2r68tuGJsywUrD76",
  "key24": "2t4Qyj1SF12Y7qQpvC3ww52d5YeXFanxzk2pBy7NqhZdSiraRZxWV7cmwUPfQRcsLEsYNf8x7smZEri1V9DXkMYL",
  "key25": "4JJ2VXi9aAu7cED9Lxt5R4jssNZ25KpN2LBXg4qeQCuZP9rHwahxM9exGczMMpijnSfHz5fP8fT7jboYkkiv3EW3",
  "key26": "3oYd8P2UhAEeyPdVKLYTNMWTBJeFLU9PR5Vs2RgQqicwoRhyhSyBfGeUcHsrcZ3TevDHFcEBYoSAaZ3CydC8GbMr",
  "key27": "5KPXjqMN3us5h9mmnxFDQaa8Y4nTWuC7GWw4xwVsQgSopZiiku7PChCDG4jZYwTrHi8PeesMDc5LqCzZrXTxb7Qy",
  "key28": "2PUQRkdyU8AYSoqttCwgrpxcUbhqBvBApLZFQ14wd788duediknaw6EHZEiFuCzSpW75vNMZhG8b5rDo2tVthTf1",
  "key29": "38rfSjdAH5uxsy5ag6BiiCb7dUAvfxwnLN6fAmhKBT8NJEQ8mdNzaDbDpM6g2kgoGQvU2Z55PrTGc3my5Bc1L5rB",
  "key30": "5AhvRaZjqiC2yT3NfoAuXsZmehcmQ8a6bDRHt4JghEMvAShAk6uCPHY4Fmduu1QE8HfDGPqQswTpWG3YXQG4u7UC",
  "key31": "5Vh6SNji1uvZszbJzms1zt2NmNh5N6wbZBiLJ6xTdbfNjDZfLGk6xmgddTDwty9DhRSGPd4WK5dXo5AWgxgqSUD2",
  "key32": "2a2FuQrJbLZUBob1eCnC9S6E6x3rX36Yw8n9YcSTWQHT3jWNEUe1DqFrvxKvZCBcc8Gd5ERXK9yaHuS8yoRBcVmc",
  "key33": "5c2iZkC9wSmGC36cURq9vf97ZqSyfzLgYXYBA4Ubj9ZQR9AJsmDFFweznKaKzWhgrF7i1o8vuicycoZwCSBKoLEV",
  "key34": "4R1WA3YQ5sy4TpZHhzEgC9PpgD4Z8fQbSytmvhf66uYr9Xs2wM3MW37EQMhRhR3NfJoLpKt6Tzd4Enfn6YZVqrxP",
  "key35": "2X8jJAQjP4tEJgdKXPVyMk7vpwU81nf5iBV5iCFBEM9VeMQJhrJiCH7X9moiu2AFShKYCaNpZ1zHv4sKsuit3nd2",
  "key36": "36ZCACju9HU1xYjb9vE27MD9RUy2fzgzQAKkqeMQfbDdQGCC91RueRZvYsm8YpwSppdeB3mvr8G7tu6XVgymuaAu",
  "key37": "6McmqaFPFG4Gj9gP2quZDBx9XUw6aAes6h9mQ8tsVC4zJr3Y854qtQXMvHm2Arw6d3ZqxcFfBAh1LeHDKCRH9Df",
  "key38": "3m86auE6TfkYhV4GW3Pf4NoxTrFFp61U2c3rugNjS5PTpNDzrmSmtCek2zaTp1dR5GJRZo6u2MhoNxVarR1mCQVe",
  "key39": "63YzviLuheAiUbQWRRJGd48nmLJxqbPtNUmbg36EafRUrJqc7rNQWQj3mTR9sQuRu1KUxu1DELPwBaYMXCRqVoeg"
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
