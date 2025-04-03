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
    "4iNiFoGvrVQ2DBZrCFREjzkPAf9YwuSS29KuaoWsYUVAhpanNHeAdJxvyWEzXLEnuCUqkdmCb4chN1CxmQuB14aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KfWvdT4JWTifoP8NbwKRzG6p5N69Ywf866PPVomL9sizghek92ii7dgCuv51WW359bufuo5HAU3n8RTCRRENQhk",
  "key1": "3MeJ3Lo9bW6aC9mKmwD4Gx6vJ4bCT9kE9pafdYVQiXrJ28tcxgpdeRpCJzZm52hhXicLU2rB9EqT1ZuSjaAaQQsw",
  "key2": "3FM4k25DooRLFxWHwtwLKp49nqsCPzkakoqsfRYawq2W35szvVZQPHpyVDyEWtACMf2nTTDSMoJnFtN6Vd7TddW3",
  "key3": "5kC4AoXokrXzfzhMvYcAEbn74miBPRbSEsn2Qti7d9eRJM5DzJ6sup3w2jJJPLovEvnrQ2EQd3CBKtbLfQQbH2AM",
  "key4": "35jsTkdY3Ptn6CqK6naqrFMszdnHfUyAGKAHPboBwCV1TBuyD9fdCdyz2hbjuNx3EPMQB8c12K8p711QE7abLVoG",
  "key5": "37wQMKdcppT68MR2EG5hkxC1WhZnuANioftUcgUKPKMTbFWcn3Rh2nyzwqSjiqHnereTkTr6zdTWfz4Boh8Ywt4p",
  "key6": "2joLBJCc3DfZhj7E21G9VhKtzi5ucgzUr9oVzPxkZT4sTZmm7k57w2pPsSboS4eyXeApLstnC7Hek8zFXkcu4DLd",
  "key7": "3KLZ27ri7WKBkG6s1wdTKhnPsWGpTxb9sr1vD3fJSW2SSnwX8qHFiaedXJ8BWSSJRTovV8G4bczYj2miDg8PNmdH",
  "key8": "4QraD4ZiiLPnnGqrC3w3iKmCLoagPjv6LwGGqZbQvqUoXMpRr4ZKdGxZnwHVVEoWQwK47J5zFAptEdt58jZvGa6P",
  "key9": "3ZXwoMAbGzDWPeCDSzdAs2N18LvZ7EkJAsW8H5Aqu2jf5JFgGWD4NaRnfSQm2Wg7NTheGmPagsFqvRGcbWzomnQK",
  "key10": "3g4RdD4uxczkBpjvYcw8fMgMQTLWLtFHJeVxhgUND52DqAEyxyXEJC2BPQ8sSH8u5NB4mSpYN8q7mNaFZ2onm5p3",
  "key11": "oPYZoA6fW5JZzwmrXTvruzE8e2G2yRaWCV41heA7iPkAr5Cr167CK4jJMUegKYFBfvQszUxr5S6dVQjbpnSeqSV",
  "key12": "2xGpnp175sMa2A4g2pg4A1RaLNvpHQmqTkNr2tt1rCmrBCnWk6jwQxbuNmjbFjbKvwUmnrach7f8miWepi2JB36a",
  "key13": "4fgtg28t4hzjyWdMvZdf9LNJFKFfUJSsSEUWiMY2mxKtDDfeseUUAxeMYz4ub64899agHAPXw2tQG2QUG6nT2fZd",
  "key14": "51pdCCTfJD9fDpSfqZToUWgTsoUhmBsHZHThGS8h1D3uhR6eLNHo6twmt7Xe86uPM2wW6vhdRjdo9gzHCXqdB3mV",
  "key15": "2EnZnMCoHnJauxNq8uNpR6y5WLkRExD4UJKGvRakwgjHk3oewHwWeKhjM2uC8NknJGKWs3ykuYJDHAogHesPZvqo",
  "key16": "4tbBrnwqSTmRem3mTpgBDdJXWe7xwZThhh38e3jeuMV2VXbBsMCx17JjrGxafZHTiMivuzT4i88Y32bgqouG1cwA",
  "key17": "28MDfawUGBtaAY4dkPa4un5nwsk5jH7w4a8o359RSTdVvW2sm6tvqTU5qVXtBam6GXb8ccv41MomqiCh3prYRGp2",
  "key18": "RkCwuSVWDGjR3kZQfJkr4QQWi52o9dbrDNfoF9euujkJCh5KtZDwrpgzbK2j69sE5wW7h1EJaAe82JhuEyE5d7x",
  "key19": "4KGYjkRjXu8H9xiVT8kovQkKHNdAWvHcawLShNbs9XjhiDWGxYDexJFtSFfJ2TJQbnKXeSXqwj2LLojwqX69HH8h",
  "key20": "45Z4sLR8ejwAhrRzRTDTxg1VQW6ae2t2FZNS6SGiMtYm9kSSw6c77kCvXCngX31A5vM4gGwyagUrQ1QfMWYrRsqk",
  "key21": "2mcLaooC1b9nZpB5GXJAfhzJwLkXKB2pVJcsKWAUVCEa6czNqW1zNAdZswPxuNjNDcM2ef1q4VULEMYc2PirteWy",
  "key22": "bwULBJUG2bFxXrw5XM6WSz1yFF1j1Gmw2MB3ALnwjqvgJqptTBR9ko5Ro5oEPwRuLBU91sNw4vt9jtXSCqQbNjp",
  "key23": "3m7uXWEZLr74MV2b1NAAhcTj9FmrYG1H1uB9WLFAAzuLKBuwJfphisX61NqPPjqweiQedp7wwTtrGtgm6j2sNE6k",
  "key24": "39YQ9SttHoTUQB4pu4ZdoLJtZtUE48kgitWeBLt93FBfGK2mFZeb2L1dapL7t6kdZjPwdWWAJqhGTU8uqFdpjBwN",
  "key25": "5GfJG7nm4KNFW4frU62XECmxZV6mrAKcXd466WLeAQFw4TMjtKPBUte4NR7YBceGrMzJjBhXKqM8yrGNcRtGocJf",
  "key26": "41eukqs5U5UKZPSbiGDGVSMmx5paHNX6GvvmWqeccq3DvsaobJjNzKfgz6CJLCW7DjP7YogTfsjKFMGWGhnqDsRD",
  "key27": "4qqPMnk8K5NzFzb25MR4jCPMn8PWuXW4fDRgiFNAkyxcFPHUGvLhZhLD2GYK32jFnHGnvbdwg7U1vysoxGyws41m",
  "key28": "osMJewRxf5raRw8uaiThFQ7721u92Y4vJCb84iCb3Mj47gsiS2TPnwGN5SHybEKniGJgoK12n14SA8K4qYYKuXf",
  "key29": "2b7bkyJHXDcHGHG1jcmKEwD88j8jnG3ZyGPzQVfzu9n2QGqsqgy2dLmQp7M5XVT328uMqBZdkDPC5uiHULW7ZqaY",
  "key30": "5gq6nrV6xJARnoApTQTLtXsp1i7PEzxrydTz48DmpcRPUgHH81JEgHnWWeuHshWDCvxncQwXmM82TwFD3gfcHpQX",
  "key31": "65UFsTBYCT9zj3Fhh65VbsnDeqBKpNa6QzWUhUwLc3iDqr6VpUDWuHEGjQMtZoak5ZEvSJCMtxLaPruqWDVbdjJH",
  "key32": "3CVKZbbcCuvbAKTh7z4XaF41u11Bp6EJDidjWLGkDZA14CYy1UpZwXGmctaUb9jwPZZDYcF6UF4Y98yawxh9LFhF",
  "key33": "2YX7SEULzTTBjDABymmhfoJNHXr4AFJg5hzEyjZ6V59X9vfp2MxnVNr1ZchCYVsHZmU5mJMLu9EgB3pSoGDyAd4R",
  "key34": "nRsNc5cxsRKWTpBq7r4qp91SQXYuUxpkfC34caCRPtnT1XsmPXNc7XVQftgVmQDVWHE5im3843CXnwj9HiL2BV7",
  "key35": "21DUC6CpMbHnZFQSxM1awwdxq7in9YswdK9SCFm1Wc6no47DEKBmJ6zfB5jqZCXufFe4nf8frzKcsLRcuiBwsNWN",
  "key36": "4yFrLJRUPnXDpiUvNZtopqrShN4SQPkvfz2iWbsTWYhBZPxADVP5FZoCzTzGCbws7Dj5AxftUdzQANLpuW5swDo2",
  "key37": "SCe5bmrRtfD7nKxcycQkd1VWgUP8KR5LeGE9rGPg3TSa6Mj4puHwPtkspVtYPrzoX2WozTY5EAS5VN1ddDGvn84"
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
