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
    "3H6itjK3cYFy71RKkZfAmNFXALGSev61NxgkDQzPZbQJGsYLmRHrrWpRLVxD9kS7insJ1rMU5Kp9KGfjqS5ExBow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52X1fM3RtZhr1sHUErQEv4mgjY2RjStdFFztpdEQsvJ9w46qEGCkP3o7qMU88JShPJKmeHsKH6iwx6MDonkBdfSs",
  "key1": "4tznq3tuLDPrGnMyYQNJsH9XkxVf1FEbDmEgYJ4oHCUKYK4h1BgEY93zTwHzuWMqMS7XNEcUBwsjW5qUp7BrMYne",
  "key2": "28CM624gEqszyYnLZcyXb2JbQkUpoA9BqF8P5nfSx2FCTYBSH9MacoLpbWGQFwMPMRLWKhbZ7jc51JqKGbutEMrT",
  "key3": "5eg19CPFami8GQdkuFu4vGMXrCT1kZiE1yUvBd7AGnkWNSAcmQrZiwt9fXcL6MLyosjcMoADY7NJwmTnmPmzEy1r",
  "key4": "59b13PaUgKQ8V5z6rGPeTZmvXbjQQUhRJANnuqDSUhyBmmaxHkEVqnRZmtegFgehvx1WEf7cd6Vp7d63mhHwJkfN",
  "key5": "Xg6VDiSLeNFmhEtka57vDHGXehH1fSPGdTzqtErsZr4CeKSNcMY8sc3kaPnJ2RugXarBqus861JoN2mmnsne2Gp",
  "key6": "25zrb7QBbovaGdQvwJ8Vzbq6eG7ZDvaev2vnSbJRxjUv5QcLMYccPaQbMspgUuW1NXJ6GFPR3ge1wwaQWUTf6Awb",
  "key7": "4zgXigEbctW6oSXY1GfMwmnDm7e4pHyabS3sbEFeanqBt1eaCUuDedZSRN4qAw4BQ1psu7h2GnCjDEABKxPHdpM5",
  "key8": "48Ww9no4AShk4dL5FBff5a85g6SiBmAaD33TSgjjYpPbzTmQ1WQUrTdR88noUaHY2VkWjYj2m8N5aL8Ayf7Zw5jY",
  "key9": "5EPmgLKmv9mbCyCLteaK9sraYjj9CbUtNtLv7LFaTk6Dnq8muG1zzvVDgUtsdRTvHwavkhSewPuMh8Q7jJ7GRm5s",
  "key10": "5HDZrr62XhQGSeFniLs2oo64t62mYegEhbFq4euNuMe1k1BZiQQUGfyR7ZFNzZWbrbkEfSYR4zqrjA1iRvkXpQN8",
  "key11": "2cnPimTVg6ixPPnk9Xt3zXz2b3ScbGrkqb6FN7vvz84MHkRWcrEwb8iPgo3XNE7x1uzauwMKxkppM9mgyaXemCyg",
  "key12": "41Tjf3nXP7UbBiuohPJZSrvAHxQKCpV5oyzzZKiFMNxVuDjy3ojYdLTLAg8FLAu7pGqe8AWRfiDSHBBGEfCtgUAm",
  "key13": "3FJ46QD3xkqvCwCj75vMUffQR5LKerwmMPr2Gp4Uv9rXixzKKkaNCSnjfrMdBAikSZ6m9wpYJEYnciiZUHmRv6HL",
  "key14": "fgNvxxyGhF63JhomEhwTcJvQMNMm4QiqeYUAxHH133R5sLtRXEr6NoYYpMFkUaMQDGnu1kw9jhuTmmrV5m8tRSu",
  "key15": "2HsrfzSesH5Taj65QcdaaRP3KN2jF5AyrfQmNNLJCTeiYdPim76taqLM34nzaeX2bk1uumU1epZc1Z9vSKWzL5wF",
  "key16": "gJY5UvnHyx9sAqrGzVipR6dqbX9CCfb1bAa8XwwWo5M9t9bqX6se2FQ8E47QeLiv9JFBN375baRa6777jbc6GZf",
  "key17": "5aFpX4h3xwQMiS11uTdteT6W6XFCYB6duMi1vDetXxgBKiKGgo637D7dT9e72jcwvuJi7KQS5AKLWDoFn8r4Q9eM",
  "key18": "4Pxg9RQeCtWhoGY9ptDQySaZWecpXunKPJmynwTwMv4VhX1KKTutp4eWH6ed8Qfmj2LdySoc6o9m4WBgNjnCXMj9",
  "key19": "3bKy47m99ni5eA4rV2YRFuM3xx52FDSWcaB2UnV4z1TKKftNVkzELbEAUKzZKgVwxxCtPUDUV67azQaGqPEvAYrg",
  "key20": "EPg7cGMsuUi9YW6YQoThWLv4ssAqwU891GC5YiMoejba56aJdodAy4cQzYBYyQZq43P9FbbXME2XTr4odniUTQh",
  "key21": "3gLcZh6sNcEPyAwv7n7Sc1haTqwnoYLQPWh1D7v6HLBFB2R1EwnzQx5suPBeWh2h1pVP2AYQS2UNmszrCeBajeMy",
  "key22": "2DWEpJAnbXizLgW6JYcBHKqvg2GySZvcUkZy3PgptWiSvWXSQuawJngFtAvW1Dys1J4vQivM1vdfMDtAaLaa5gzB",
  "key23": "32ZJir7ivRAAg27n5XsMvCfXAvxrZUsmKNkvTtP3MYoMbGo6ogB5WtenvYfWacfg8kVE56TaTN2ZnhzjktxbED6B",
  "key24": "46rfZdTvBsJiBEYzWVkCHgMaxiCvGLCeWbUFe6xJzzySu4b6MRCExpcDpBPk4p8XM67VWHbUnK52Vkrxc5gSnWe5",
  "key25": "4APZFUt9wvmSCVNFjQufcyVgSBgUKSQBWCzBqPiDmBBwKZRF3bpz2GMxLUQ5F5TpcdRDCToti8mtUpXHcmJ2TELw",
  "key26": "2udcJxync2UPPMNMetKDePhmaZQLfzqTHmR5HrzaFN1BMNjXewanSfMRhHTZg5j78dFRNzpuEwuM4VJU3aRWAESF",
  "key27": "2DpAMjVPJqgaeeGsXL6MBLfJvwiCQHBXmnJSMxFFc29V2SLWAR666jFKLxqw9npmj4hsbFcN2pCtM4xKE5gosh3F",
  "key28": "pwiChAKqdTVmsoAZs11muZdXBy476h3vK5owUrT7jBZapHuwfdFczdCooM7ohTJG27KUkMJGaKArhJyrJZTJHtS",
  "key29": "5qpCWyy7Jhkq9xV9DicsP5H7PThkRNofMCPk6UAHMNo3bAaTLjBnnQXAwx9bPvh4unbtT23DozXYZeozp17nx4i8",
  "key30": "5tSUVFU1X9GxuLyJRi4gtaR7SW3Y9u7hwcf4Ec8WUa5XzhFFP55EpXjfxXcpdYnWJXeW78S9nrGdmX6ffiArzAxL",
  "key31": "32HyNqLrAVdDhp6nmDHkoWzuydUFuuavBazgkyMvU2LRWhHCyKcaF2WgbdhGYGPYkGgKq2b5UtxwWsdf85Tvu6oW",
  "key32": "2AL7wxZmpwrqobkp3jbQJ8pvg74gZyPHcm1QiacyPgXvXY6uqYU7EYowgzPNSA1f6CZbG22UtjiqnDdu8QMc5dT3",
  "key33": "4Qj8ZKzdvMXHvRCvxuswAEUVJBuTpctkauRnQ2cbzHWYcxW51zFHEnsQqTJs6kf6LjWe4o8Ah5U9s8yBfL8GEm3z",
  "key34": "5GgJJVQzD3bUNCTg9v31CmJfARd9W6dyxJxKjJfnC2VbDUHSm9MgcXHiURS4hhMi3cpyFNJ6xdGbfLA21H8eE7wE",
  "key35": "5FiskQ2ixMkG5sKDpmYgx6ieGrVgv2v2ThxvTApzPddBs26jbjXRSwfiB3qubUiVKU6q9NcLn2X3BXQwHZNsV4ET",
  "key36": "2tiU4CgRaN9VupxxBhaYbdGLXdRFrRzRoaLJgGYDHtmkeSDjRsZEmvZ1oGs6tnrmmGD8q1Ph2RPbVLJwLcDRnkei",
  "key37": "4xsie6LbKeEg39Kda9r7qXo8wNguNL4xY3qtATLzqRvPfPbJorD9xvDDA66dLfDzk4oGxvNERaAzQtSioNogAX6e",
  "key38": "2K8vchQmhMM7D2oeDQRZLtG2YdHwyxq5FsDLwiX1HoFtj5Y1MFGPhk3MsPUA5kekH2fUJZPiY4AZoVeCCZqqbr9j"
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
