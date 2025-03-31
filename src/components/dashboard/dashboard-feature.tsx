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
    "494qxC6bcMb5Hp9AifwBtQB14efCnzgHL5wd2GYFn3pCHBxx2g8QQxwyhqNmYHLNcSbGSXGXxRfjoM73mj6NiSTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2meRwdi9a6aj9pwsm7wEN3E9w5t51rsAYzSKqjH5c6W8RJQyobcB5zEy7bmyoNXfDLTcEM2eYubFkZwEtcFoKveH",
  "key1": "bbngkRiADGoNgyjmp69FAeYmQQ9RQtdy5aWNSBXv1HiG7H8iSXaqGEajptoh2TkddmSz445RrzFZ9ARxPko6Eq9",
  "key2": "2Ev2U1QrsfyZ391swP1jVdet3DjnRbr73VNkoCHYdC7KNUn8RG6vUx2W7Q31ETxkytLoJC45aiDX93nDwUE6AhyV",
  "key3": "4mLWtzAUnunZB7LZgk8CmyxaghR6tkKZaEk2kTqueARp2o7AkjoKa5MzZBmRsWHwqBvoRzUwuhNY8qHeuc5xbr9W",
  "key4": "5gk2R6WBCPaM1stwGuTvrNQTBQhrjtgm7LwA3RnR1DxgrQszpGNF3Nq18wkvbJcjuuLz7wyzvdju85uHDwp8p4mu",
  "key5": "3QJKHE3gdj5TuuBHYxrsSPGjDDvfeRfCVvd1GUfgrxCyzJzA8pRm4w11r8gEpts3M3iJsVM4VZUF1hpYDLjgDKCa",
  "key6": "274Yu5TdSiTYzr1suTNp1Jmrm5QY2RW1mQfDXkK8Nv5HBLwbxSkz5hCETqd6FS8a5vQGdTXoJocxMan37kTWf8cF",
  "key7": "3viumdYeGaKs1jYDSWzBLph3AFSEKtkpyfrwuRruw17bkr4x5hDVMKm9jmwoQJED4FBKhTsNugEHxYdmSmKEtXVS",
  "key8": "437hH9SwqjWRVLD3pmy3kUGmcymcJqasosi4tZd4vuHr9URTNLm1doFgxQTgCq78GakePKyoPs6AEfdErf44s2oy",
  "key9": "AWDN3efCuWMKfTWVS8w37xLDj1kn7aXVpRKLr1jx1ao25qW7g7BZspNCoKDZndXic3eUPYbADBPXpoLYBRns3Ac",
  "key10": "3V94geJnk8h3Q8fxHNmZjQNiQDq2WzhmbogRLUkkesW6S1vApSR14H1rbC52BRYvCbsrBLpzLpFcx2vasbvqwDU9",
  "key11": "2E9foYsTQ8k3WDromSCvhNfo2oPgLqQGpLn5JxAZhna5rFp6sQyM2dW2zNHmNLdheN1zHCVCK5FnkP75wLtxkuF8",
  "key12": "3xyijRTrpJjDHtgvCxJNH7fxjMvStDvfET9Gidpx4kxa4Cca4wdTHULVzSKA1ifHEHfDc36hTcTwdF34WMk3YRPL",
  "key13": "5tVZFoKzpEbyxFPFCbSvYebFZYQrjkD7zNp5272eMF6mXy3uiBR6mGazrmwt1p1qomh4nwvwn9QZSH4MQEZaQ5d1",
  "key14": "24No5XLqwUFUgQ6HAScv4Umhb1rqyoJvmdsyTL69oqWsbT8Qvxk4CqDQVQ3sr6Jez18x8H2zDhDhJszU2FbM1ff1",
  "key15": "5QFy21QjNbNprBeXB8qqdWWoTgcYDPWpiDCw9qiD3Ypd2s9VSNHvLyRAZeQqGKwomAbVmxJdBDoUKUxM85GjGkgi",
  "key16": "4EdiMg6um2gJELcCmATEpPPn42ugu1prnHUGFUfjbofwHFF9fNMnkNUGqaiPcLxda4WSReTCCUjkDUEseCRMDBVT",
  "key17": "2KnqxJ9uXRvuSqwWWmmjPzB4yDLudtDH9zdTyUrrntzDhYVJ9mzBWzg39phZEfC7r8ZHady2NYHrK8UdN1ZyEPUP",
  "key18": "3TmAFG72heCcHiuSHRT3eYgrqobRzmuPG8su175rchXBhizKk4tQc2Bb2tTvp2iZWEFG3faJDABtWBrTo1orQrR2",
  "key19": "2ExDLq7517p1SM8CeQpxJPaTTng216Ap4Aud3cCYw3rHX5XyUcxm7QGLrVF75jGbcE4zw5xhBTUNRtTbXAuTZBBf",
  "key20": "4MDvyBqBD4KtjATBkKHQpsdTEqenxtDWJyiUE5pDYgEQW1CP9EBvkHarn67kspkWsroybGgjnrT9v3Q8LZn1vn1k",
  "key21": "2nNeUmPeB2QN3vAWko6XyYkAa29mimrWyzHe6qPMpdcMXAdfuNKiA3FC7wv6sqnifEFq1GZqP5wesuxGbcu98KaF",
  "key22": "wW3Y5R5sEwRJx7fn74Hge5PLAbK4rDSg1fwdVJsczyDbsufHCwtUyUEpc74Jk5C2WZXxW5AzNqAPcoAciaimMXF",
  "key23": "5Bn4E7LaevjQ5Q9oBSRVtYAYdBXS68utjRFZn6yWz4oagsLwgBggCseNnqGms4YQgBcqZwRd2iNvhFRHR9oKxuoB",
  "key24": "3z46FPobSTYFKy7cfuEhBtVvPqze9D8j2qjBh4iLpF6DueCQ2AzvGbyKzU7XgFWVrYifVGvV3RchAZKTGEwELWPU",
  "key25": "3C65z1mQt4uVAWRX4S8xvX69gCURKxYhfPiYNZsb9p8uc2PjPvrbHKBNxiWC9U8zu8XEbTEBtKtAdyqWcVksDZ6A",
  "key26": "4TVJu6gKFRS32M9P9CuRzw9k2mmBkyaChbWbrUDEHx4T9PFRVdjs3TRao8zed7Dnz9DNpm6ajgtAnpGJFFDWjYuy",
  "key27": "2YH1Jurv2i1Lf2cuTmeeHNB9MX87NsbNi4t7ay6W7beoEuWtUTw8uwUF3X8dALs7YCkASNe3MjqfXVXcKWWQH3be",
  "key28": "4xBnQ9XdpjGqX6zdHkaa42UB2CwbXQLhACf7qPasiY3FRTuFSmxKyiXSiTLNX5NYeszaGLXkexMYmHrVpNFGxixm",
  "key29": "4yXNSeyCShUuW3SrsvUqd6r1xUMKLwDwye9JicKCZmKv29qEneLbKX72UgPCejSQESnq9nHxKWYckYfBBkkXptGo",
  "key30": "282ViWU6scJaWyzxFUqutfxytGK24QwKezvkQnXPVGHk9PM1hq2zN13KAMxDepqPtDrTct4v6LbsAw7DmMB7rqBE"
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
