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
    "2n3C6dvUJ4Rq1dgRjecLUcwUSPdkJuQDAURqjWchnBTiq3rxYYPxrDsiMJgzw1rSnrxfeJ4djtNib8C45pKGfvpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XhvR71zwBGpHtzvTRjpS8NQvZuErnuFzwksbiZQDpDfwiPwy5oxUbxb4X92X7HLtiy8nBn3vhFv8t9uhnagjU9E",
  "key1": "5cx7xzKLJp5Z8eNUAq6XdVtZzE1YhpkpVvzLXDjJNYKXY9Z6D2CKJaJUyHhdAa54XeHUMMXAQPPzoiJb3qVCMkkT",
  "key2": "2VqgjUCzz9irwyu7CVEN58CQ7sZUFn5QZaeQwb3W5FFQWxPsy37qG1nPqviSPjf4xmz6Syt9dxbdMK9m44NpML37",
  "key3": "5tCVrfHQfNNmwevteEXcytA6CX8vVzifYxx7gvDW2EqPqsLr9DmyEUp9n1h9BK8QnakVS69hdfvbR5H1pCjLzsvL",
  "key4": "2N1eScGLW8hv3pRf5XDgps15i183i1Q5h4WJZ72wEvFoeWp4zwsUVaT94VEg5fnPPJiZKQL1P1Sk6xmbcyPogxpD",
  "key5": "oMRTQKgtBd9sMbNXuEFDrBTBvUvAvmHQAwuWvXjgSLUEfgZn8J13TcNZ6vyy64ZqUmoaWMcBi9bHFAd96GVYxoL",
  "key6": "61aCrDorgeYA3haH9rxw8MTF94RSmX9DdHuWKPphQ9Ge5dNurnPooWk769JPdhnXqFpVYprqNnQ2uVQ4xx1G4kzB",
  "key7": "2o2oaAxCwswz2n45RtGWTZQbPYL47ak1XMCaM94Lrnz6pWjmNx2FiPo6qH4eL1zJUwxm41SS9EVTyNQXWVyLSpSC",
  "key8": "64CinqXPvdy49tcnNFPDbL8srTpxqLhHYPjScgQdGu7m53E7ZcfR8zRj7avHYikPhPrZPuQtXQf3MAxEGzL3Bcux",
  "key9": "4q3QugU8jbvMVbNLySrbRrfbUZCxYtDujiTDVLGKrK2eFPX7Qgst5HdLNAZUkdxierFKgTzuMmTQKuEz7MvxVRfH",
  "key10": "EDTgZKuq55VG3uZHbyAU3drdEPN6SKr65nV8zqACg4S9j2X2FXuD8h7t6Umd5cQ1ZXzKcf5k1SxYLepLsSWGyQx",
  "key11": "ejcMZnY5Vwszs6jm8dZgckhw3dtLi6jGUsehLz9PAEoGRspE6yUBvH9QPyRiu9tXXoDoojkpoUrkth9WMdFPUL5",
  "key12": "3qzXdKdtZgJgvzJgzLAGXqdL2TXRFhTuJ6k3YUbCCRCYqE8Pm5RnadCLHT2zQBKCFhAcBzqNADSVL82vDGHhypCm",
  "key13": "5t7hP6ajbmLTtmuLpc9mkQgbGXoDUimrJf652wjTLRgE5jx3Ch8Mx2JAe2qTqTBmf9Hqk4gz8GHwgJAPewd8j2Pj",
  "key14": "Nt7XgUiF8GCpuyHQ4bzf9TQRr3iCc2m5VAAQqxascVQDr8Zv5rEkbzVppboUKFK9xXYRGuWGHsP6TneiomXoyZB",
  "key15": "3ZQvjuKsYfHAKimTSrV4meV3ythWfnM1FG47ZJdSckLStuiaK8vNB34mvkB7V97UHkfLH3xRmwSTRHwc748e4ie9",
  "key16": "3kWXApLZLMCrCoN1b9ktgoCapU9SfCKgH1xkU5kKkWV5KpGPaFXmzCsZvwRZUcRy8kPdzQZ2BhnK5XjdqPy6qNs6",
  "key17": "32xrz47Gsq822sGGuSkmDDnnbN16WdE3jBycCuQZTz8tQ3A99NGevubbC6c754i5TCLApQeGbf6rgkXNHqqMASDs",
  "key18": "49rs6GJQrpA8o5VpsvdU55Kn3YGvKDC8ECeoM83PTaLbfauqEY8j8pVz8EnYJ84FELD16vp3h7FcFDBikorVAEiM",
  "key19": "2x5aeXB1jv9AGtbDZcAVUobMa7PcKeF1DEQxoU57Azx4Q9mhMfw1TLpgiNrHvcnv96wJVUBfTCVMJDUEQMTdfqs",
  "key20": "4NGMWhuZkcxPLspXEaie5E9XRvY4Rr1KNfnaMcHibBVP7j4hQSgYrDhZcrDbZcaqpx7qpFDRmQnrgmDogvaKEgsJ",
  "key21": "apR4yJUoUE2xZVg2pxofXaph8a1j3uNttbL6unhhrsjHv9cszsXEZkuYVtceuyHKJFaHyFLXX1c1eyiXzARekxy",
  "key22": "3rrCZRGL3zKq6Ayf3SwRjZkZ6a3vUwYL7jsBK5AZezHvwNfY9SQCTD5DM8JtBrr5yPEevcesdLJQTQpUAi9pbjhp",
  "key23": "5pP5Q4tje4YGWLrPonXCjGRE1PSnfjz4ep6w6mLPyZ99XLFvude4EMpqAB5ytQTBoB5JgsQfqDTy6tanyRrkvou3",
  "key24": "45jqNdJ23p4TL6Hxz3sD8HKAvGcLJ4qU2isL4fF8xv7MDkbFSvRYK48bk97h4UDki2uA7dUCzCf9hKnyQzVWJMFu",
  "key25": "3E6NDwK8QHNfbuQgRrcuGrsWjmJYfde7Yvyj9rnmNtgKGN8GrSFLwumrhTz89iHoyUiKuWZbqe1e49JT2xLyLPT6",
  "key26": "5jgQzmYcnSpWpHiEY7zz99qaa3N58Gp3ZTkv6dQF651z22AEmkVWpgiByYBt47m1ReTif2APmBDw5A9pkDhi9Lhv",
  "key27": "3xXQqb5MkUBseLrQdH6dVduV8c3kvBCKbrD8Xejxf5CyPiikKKeR8JooBcvSrJfuUB1nwmUdiHvW3Qox6LCs9m3u",
  "key28": "3LeU5Djh9YJBBH4N44qgEGAUuYtjC4w8qqTEFcinGoT1MbCWK3TqugQZQPa8C78tkXnpUEcuYP73UzswfV3ADXbX",
  "key29": "5P8nCHYh5y62qvfuW7aCEaUuqgD1ySWAGF7sNUwHUs39XqQLABo1LZdQXZEd8UdyBhvSQr8k3b2fYC1TVZqpoLJ8",
  "key30": "5Smk1cHPyNxiP1ewV7XXwdaQCDmDmDWjTTB8pPDh7NngRzoXqrYdoVp4Z8TJhPUt1sCMuTnjP37ae71ZGLHKLsJU",
  "key31": "62x6uKXGHyt7JpWyH8MqsW3zqmsjuiBFcjg8Fhs8HdW57y4xuyNk73cPeyiMct2mq54tA6jmPCB71UcVKghvf9cg",
  "key32": "43LXW4G7tcHkjEcfwq3NPDKH8Ktq2MXTrCieNZcDLrmxwysb1xCH4vbKMEhyaxsJRFSQGXQa7jaYCeiKcYJRNsKX",
  "key33": "36ATsTaqXC1JB5vpyHhGAt8CsQTavkBCEq43qZMBG8UKp4cwTH6fhnaKzLfGrdj8ZcEo89QtrGmRbJnF2CJpEjdg",
  "key34": "4BWkBpuk2RhkyeQjkm8pMHPKyKiVNqXrPbzNmtPNVBPa219SZVZvcT2KfAd39hTqFRgFX9wt8gkFAXby5o3Va1T7",
  "key35": "JaKjBWJqgFeRLMmCPuMW62MSFwZZMJmgfBSb3EzpuaoChfQXX2ZuSj4hx5eiRrkACTKHm2ekaoo9Lokf48zihV3",
  "key36": "2rAhaA1qi7gC1exy2fMrpn5hccaNNjzdPP2x1tF7qzUVxiD6xok6Axp1DT8PPzgLcnKpL8M2Rz9VHrtcWzgvKsLs",
  "key37": "4fJB59XsrAzTETJjqSqPcP6p2TXYPmb3ynrzMt7jypWNAiDN7ohdEqk9zMscQ4KzFF2zqFYQs9a6L4du5xWXHGzE",
  "key38": "5CdsQvGXv5ZXkjrpXwuoA7L5jdDBzXKCD2qUay9Z1pMFnr9gGY8pdZFbyvaocXKjK5fUcGBr3DrHttchZ4a3cqhG",
  "key39": "XyXSotfjp7dFebrGNtQ73iTG188CKBVHytKoEhm2odR5cmTwxdYoVSUnRDYTyMJnhEUHAxJjNtz9jvHa1HKTpKv",
  "key40": "4gSNchEUTCAERMgRZipNe4WEhif6xso3KGagiFJzoT9ckaCUVNu4MDdf4y1AzRC7cfQNhxZe77T4HB8WNzFKeptG",
  "key41": "4naaSLeBczMasVTgNUMM8dF3YX9ECPYZWpCgGBrGRadoPGzaez7wZo5qVE9XJaprgGeK9oWr4VTjHaCwsbyV4voa",
  "key42": "2ffXN48Vn8ERxSv9wZxQPAxzRXnXuCbniuxMY8Z2VZJte9gTB55FEMPy2qCBYtgaZDHXwwbKgFcAM6Q3YFg52nLd"
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
