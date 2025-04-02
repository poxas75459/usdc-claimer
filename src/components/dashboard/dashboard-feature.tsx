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
    "26KtTcwBRe4k8xVm7Rhcp7YJ1evXMAYpVbLhg1FY1VNAiD16JMAnPQTdC6zsUZh7QHF7b5BPwzt8QUsyeB758Rsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PumWMGkhvxRLp7SwUAEb7dHsXfCpP5vGAti4dqdSNKb6mC8snmgo6TcNGYyPBo6hJL12UqSdUa5FhFJEN3sYQLW",
  "key1": "22nK52C7qMae6df9UhFUyyWRSXEUBsiGUFfHjCPTj9EK427zqzi614hLAuWm9kYu6EixD8UDoxz38cCx7rdCFeLN",
  "key2": "mYUGmVUum1Jh3fEJnMcTaebaEcUCUxaonBNrtTL6YjP8ZMF87C3ojxFqbAkuvEt3cqnXjgmd9aqLjnHgQkJNxiN",
  "key3": "cfCGe9uGYf8i1NiPzVTrLHnZHwhYKNdZYahtt95QvMpdgWtTjHagiinkuM7isGf667ehw97ZqVpqzhGR8p1M6gU",
  "key4": "5MwrfE4VTBdumyp1Dqp8ecnFBp68X6zqtpmqx6Uz1Cu8EzgKjpY2sjNah63acuBoTXm2kn8h29tJGupTnrGppNNA",
  "key5": "88v6ZSP3R7Hd7uQ9d4DkWHzzqTLpfeo4Ns4QGkP7BzxaTFRZps61bEYLb7a5MisHR2Hx47ooiFGsjhWoFJGTXYM",
  "key6": "4SoQWhSpdsa14Sw17HHF9v6ijEpDZ5oGySrPCoUst5SnCPk2Pu8DGD6rGtA7HxDiFgabJBbEEPQrACj7qjp5V8Aa",
  "key7": "4aKvb5TFwF85gT5enLMs32hFU5g5pKNZHtPa69t3aoYnV5z6m5HkbJBR82VbsbKmrBvyzyDfY3bjCFaePuzKweh9",
  "key8": "2efoK25yaUC6a2fWjyqJZk8acyaKJTJwF2C6i2wNByWimMh6Z7KixDpoQp8EErjA311u4DR27dw93kMh2yLNtfP8",
  "key9": "5SRrFxX53TFVTV2cb3n3LW7b5ch4G6yBsBr3WazwzFxL5hTCvsFEk9J382pBMTuTmRwPsdgU6F67i5GoJ3skaXGh",
  "key10": "4y1MX6p2dmjkBkbdiKi9SVHWJvD3ptRBogJLxSNxgZuS7Ggh43EJjF9Fz9DbC29cxd9DGVwAo2Q86GBLXW3MbvwD",
  "key11": "557CPoXZVimzvogooVqQDetYse6Li3trtRtSHzcaMitbbfZNmZ5sGF98YvayuRJYm3d2ZZ8GEPjzXW7R615G2js2",
  "key12": "4xxPoSaiifK44Nx9b39Qv1DUXhGjDC3HAPZH1NtJuX1z2Sm6w1BWndKFCfmeaYWjZyok9gjwK7zgqNErmUSikQpd",
  "key13": "59RUxM6HDP1LHEPC6gp1EN6SwKF1mhn3m55tgWDgALusHxs7X71ftr5uH2t7UpR3ogKFF3uvezTNM6rgitiPcDbY",
  "key14": "5TFcGdTct9ZT3P7BCz3uFuAgFSUDzWkdtQCu1HCmeNTbszFBvbqKFpN53Y4KVA9TPSn6G3iDVCEZ2GDZPPMTNoaq",
  "key15": "3pDECa6pN5z5QupEcihcRW35nbnNA2iWExdKF4vhL2THFbX1YxkHihQtZnBTMoKMcr1rz6SDuYcdPDEyGhQK9Vgv",
  "key16": "4Er37vRsxQgDm8D7BizQ4dxLwpqybhBETWeQc1QLpU8DmTFim6ckVMBPLeLtzktf8HYp7BTA3m5uNFRZ5JjZcSvx",
  "key17": "3A29A13YegR3JEYqx1M2WXdgQEYAdNQobseyg4oZC75TcSnVQxFzLm1oVtyHRGWvPaLoVfYjiKiSt8At9Xo51iYS",
  "key18": "61ahShXXmoRX1QKXRjjmqDhYUVf46oTcJMV6qkUJV2TZ2UFCygMwW8dL19vbrhMkC93Sx1hrVnyLDgpVEEtLsTgX",
  "key19": "125tXuTw3FRQFZey3XyMMsyWudKSfzJ1QQTz9Gca7r6EZE94W9iWHsmyM6vcQEn96VHBrXixd4XRPA2Hu6RyruLS",
  "key20": "3QM4BpCXauYpLtMSav2pbfUqy82DEgdBmQzdh7qzoFpERDACYgetQBW7BsEfrCUhPyuofHQ1FqxYt8Ah2qLYyoCx",
  "key21": "jU3bqr2K6KE9vzu8os4eYo8xPcT2WYFkgnLmAzjSJFwfw7YKMNoErnQY4zrTm1pWALAhvcvYXzFd9qwqxiCx4Yf",
  "key22": "2snKw5M2cyiwEwBoQkzyfmL1SFgNRqKjTu6FfsSWJpCUyVx64jHgYV1vvqJWn58emiRwEWy8hruRiJMGKhqhKaWX",
  "key23": "8x3mpmUgXoCZ5VT5zpacAqvt6g9hKeipMJdrhFciGpPdvXHgF4zM1k3yttZK1cyZbYeU45oqWwE75ZMTvFj4Hx2",
  "key24": "Wcb4SMB8pXP6eaQ5VaTwQPQwyRRXrpTmNt5pZRaTz6nu3DM1Bk67rVKhiXJCZvqFUqJfMZD2S14eP4UQPgmxVdG",
  "key25": "NmztsYyAQTAZzLd8FxiTRPRmU5B8vrbBpEmi3wvaHT7azptMMDJiP14PtESXKWJZhJKN5YrKFYkoFsAMMiJnGPj",
  "key26": "4o1s4HJQGXHbs5JacAixMSncmRQA4jKVZhZ5n2A5hxB7XfExrcCXqWGaD8x3vYNXiZAi9vfDP9DqkmLMSAn2bcAc",
  "key27": "4hrbDX58hgFzA3bDQ8qmeu8NL3bNxv8vt8utdntB8JHgMUFfUYgJ9ED2LetNW8fdJXFDF1uKwvwhVDgyEvgEtMyM",
  "key28": "7Ch4diBpYMXx6WgxNwaeUKr697BXWzFSU7YR6JX6Pn5Jy43f1SjDDPx3xmt4AY5wU15hp1hfx2AXBeoVfr2D5M1",
  "key29": "2cSm1DsSpGRdfmksdtPDHcJab7JGBZ2drXyaT5L2X6hwuKbVBE1j77Yp67kjJPYZBWpiCr5NDfDwDiy8YtD7eVGr"
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
