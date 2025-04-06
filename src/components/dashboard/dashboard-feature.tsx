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
    "4URQBY7Pw49sRJfv2Zr4fR7RvGbiPrWuZAuDC5zdbsJjJY5paqbsMgA3Y9HRubhBUZ6hUQAMmjR3J4ziGuVkRrLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJ7H2PZoC1ExVMpGwZzqj65UVravmrnvxTEVAXS1tskWkJzYP7S7DKSy85vv4Nimu8i1LYx3c9bPmEpyeZV3mjE",
  "key1": "3L1AtCBtwRCFjTZUu46xSVP6RfDKNx3Uvc3w6wbwYYecd8jqM1m1hb5J4DRg3BpZys5JQD4Pbw18fkkpfosqN2MF",
  "key2": "3T41MFhU3cFjhdvyUJrJnWKdmWUCSCWeRZrhMPLq1Hqc7HMw8CckEz9UcZMtnxGBPmXJk9x257EqEYSfjQMkX7rQ",
  "key3": "4DweY4vmkwRX2WGZDAUtqc1qv1vgwX22yqff6qe3HX2qK53foqtkcFLGAtYeRwJ2fbTwb6CHqF9s1RBYGrDVR31n",
  "key4": "2ww1ordgTee6amsK4KhTSkqvapDYBuAfhtgCK45EnZcrMDm6eTumfPKo338DzUZ793FY9zXFv8CrV1ZzLzz6b3B9",
  "key5": "5oBBB3Cv9Nj8okSaQCL3RxXikBk2AAWvjFCw3rQjDkT4TWw77DSjMih2N2En84QfHNa4MjhxfUxCVsy1HLJo8ycJ",
  "key6": "sCyytwJFPKG33P3ukx3J5oJZqWb6y3Mx2jdhg2UvMq3tUtXUhCoGa9yinmemSkE9HP1rEkDB8wKzfgVRhkHdu1D",
  "key7": "4fMsTdUbBAX6yLBzukrEhra4jnXzY72ZoRPHfDW1d3wWFzQSntzPCXrybcNrpKP5iAFd7CHfFs35WeLnmQbobBEz",
  "key8": "57XPqph5NtfXXHy53FLnEaUJmZLGUbhG5qkGmeD2o6nt3QmcDUDVm9bmbjdXqvWp7QCGuS4vDRHxm9uiMuu3b7xK",
  "key9": "2aeHbXZVTwWhCpHCeWEa2YySXyV5bGc2CAk9F3JqEnWdDRQyqcPRFjWDAwAGyL6rWEusfuhtiDs76okPiAwEsWe5",
  "key10": "121fKvmtcnvkxfKp6Cst1GPNHhLPqyxdTVHEQmq5z17zTryeWD66LV6DE9DRUyBHyWo9dTSBXG6woFMLt4erwLzo",
  "key11": "RRsBUxRybCmLf6EtU5SkZmzPZGEQ9zikNPaxukUBZ8BJgwPvKkcUaJMCZciqA6zaHtbZxAynUAqoDZZfGF2PBFN",
  "key12": "5w653QtE9PRGKSZ2mNxc6i5fSmKknSqzj1jtGhyDZszFgWKa8LYzmZ5eBn29NHj1SzMjEbpTxQwkFPU847Lr2Hmc",
  "key13": "3wdhM3hV61v3PeUm8VQttLCb4mmNispmKaqZDf4QPj53LwCE6ZPTak8k2eFrycTi424pNJ1E367FtGLjsy7nkP83",
  "key14": "5QEQGR4MLVvLEEycJTMvEEn9RknV9W7pagS2cobHLLKwojAF9Lza6cj9kpSksFRA2BbC9YC7G9rQxk4StvMNVBjK",
  "key15": "2sbwdp5zCWd9obEH7yDSQ28fYbEM3zVG6hpAmyjkbrFBXnjGsW5jcnuJ8N7h5Y9tZyPG1oKD2R72MNBjmR6rtCg4",
  "key16": "5281gdMoskz6CoEhqtKMVJz88fYLyJViMztG7dq2QUzWWfHJJce6fBT4zcBqEs4tybWj7ZceEL47GdNLqUUV4812",
  "key17": "4F9UDn4EZJ5jz6yF1NASbugTS6CVVoSPn8BRG9nRbhS2rNo3PQ5thWPoEsm1SMhK2Ywgus9CPiUX8xonK19swiPx",
  "key18": "4RzzkTzotr66Zt9bJeYvrYqkcqYvhg9Brc8RBGkx2zWWe3TthEXcZCCKBsx8twuHQbDaymMreup5dbN4YhffoeRt",
  "key19": "3Lu3Pj5g6kKq7ZQmJYhDS9rx121ozDTDpxbe5WdKxtwe1JcZHmKhuYLRhVzArh8ysyTbHqoCj4RL1ddaKcp7T76p",
  "key20": "3sG3RpokBUnn4Z3azzsAjwKDiPnHe4vFjYziw8Tp1qqZk3YmL2FNPfhoJGGPBkjzAEF9C6FMSLNRM1VaSosJmXP4",
  "key21": "WxLYQ4sL6JT1f1o6qxN7ixm4jjyqKWJsA4we2R7AQQDDivAQfd2vBNi5Vh34fRwas5EfYF5Z7ctS91LVRnfVFDZ",
  "key22": "2bu3EKAtNDANFDzP85FvoN4839nkU3QEjZg5kbL7tkyVoGEwek4qvcrcZtzJMX3S58CTTeC6BKREwZtJiDEwV9ov",
  "key23": "4oCtmXkNEZDNKYyk9fP8oYhLJdMRg2PR4toAxGjZjm8tEzanAXkXsaS4qbM7E9z7oBD6mgahDwVWjkuhFyRLpdWf",
  "key24": "5dezYuP8HdiZ5a6VCuLdQRgud93weez2bCQHCY6doKZQQWNWbMgdxM3Sp85tYFEwLSa3tYWtVKiof8jxf6vGkhaJ",
  "key25": "nUvdRZeLyeoQJdJ6vhMDKi2YT3PZpa6N1YF6xLv21km8YVsAZ6K8BaaiGJCrbJJgix2ksRSMkJJJgVUhSSg2DFw",
  "key26": "2eDcodXChXziyStbZoXWTHHo5A4Ewj1ZBL24npFjTx2UYehzd6AWnefq7n7RdPFbDWsQwMTQPxbHUACVMD86kaTr",
  "key27": "2thZ51wdpLsGuM91zkeaipMCuABLQ4xLYcwTr7anYYs4bnN6fjcjLBb1d1T4AzwZ7mr6DFawDoaqpLS3XBtCDkMy",
  "key28": "32CUK1PR86TDdYRkYjQDFV7Jj9rLgk7Um6F8QZWPZH6R6NBCtShjEjBqNzTXJhVzeDhvcvLDJfTcCsMWtQGGJAc2",
  "key29": "2HvjjspPR3TiTMo2CW2rtFd9ts3wCUnKH9yDDMB1DJSyx6EMvpzzs1y7DWzqEEgoCkzY4w2dHV4rjcLK24HWuvmM",
  "key30": "3BTgczfhiUnAMLq8vvbMKHaYVnpW5YA7mn5393dTqp6RKoM5mpRfB4BPGVqLzj4wtyC6gsqyqmzTMqehWXYgYEna",
  "key31": "45Rj57U2ZRi17UuSN1JuKXYpzsapJ11uYkpw62Hx8npUNDFQNeFCp21VrpFyYTKYEMiiu82vor71roedaphWWMAx",
  "key32": "FmbW9XioWBJX4s9mf3nNeutsxxhmWurQhj6jVaPYCikCeAa8NNgrWoWbgDj8q8rVWS7HdrAseEspyMLDKegGsM9",
  "key33": "3qxC8XPMGjc9SEw35K5qnt9frZj3GPKKNoa7vWwkd12Bea7F3u29MbAQPERE3Goihf78rLGEAK3wrqTJrWceVnVN",
  "key34": "3pE59TMqfgbPRr3omN6NmWepAaNf1aCG4BocgmWdPZS1t1vg8TG4V5pB4ZF1wzWNtQtxkrFHa8fWLDtwEhPx4kMu",
  "key35": "26CJ9ff1Ct6hkhb3SY5eKNbX5XMsktzm9Gx1hCk96C3q7VykUGnMauPPaacd5FFWN4eXrh4bWdn7Sjh8JvKoNMyS",
  "key36": "RD1QQP7cqjkBNfbxpU6LoM9iQfVL5v3dyeyVKRRazByJ6fkphPLoRe2Lr1Qf224skwXVMeVHFuqbCQr6q2VnccK",
  "key37": "5U26oJ4ucpijUkLC5dcHLPoNPMoBRWgU6UL4sdGFTSvz7EHtUyCVu2XrmdY55Aq5c63mFHQvDAWewLrH9FHJjnCa",
  "key38": "4RmaKALL5wqXBsQ1bFgUDCA6UAPpBeb858fjcNjANJrjexKkVcSZ3p3yfweaEemSGTXahC3pMVv2aAgQwqbzzxYi",
  "key39": "4RbETjURFjBRG7iGnG4n6nRupdFuZtgyq2PXpm42hcyLz2HQagVetqZGAQBGD9oLNgGCQykSojmzpVCpma2f3Byu"
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
