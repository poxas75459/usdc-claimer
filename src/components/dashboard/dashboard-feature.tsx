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
    "4X3JRGXTZDsyMi4SNqrzo3JibF1YzmJBnnegNcAttBBpzoXWfUjomnZiry5Z4rTzHFtz5Ww4o5cFjTwfrbigdTC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oz87Ehv1SBW4R5yzjcd4A8HNwM1SCtf7Hyx8XWgLW8z83rUKoNCoGYtxZRHSwTMa9ksNaCbbnuahso7UnvcPDUg",
  "key1": "2Ffi2g9BWBv5wJ37LvUNq2AoqewMDRez4hA2osdqv3UxrW5bB1KvwFAgTDTMRycSQLg6iYXXpZkZ2CNrPb7WY9Qu",
  "key2": "ChiW3PRx65xfQZwhWA8RkRLJZrV1GkWJbwoMWFrHjWmVgdgjbFufkRYji2249hjv6uUXCp5Ch68drc24QnBgwPw",
  "key3": "4aAF1ke4PR8EKQPgA6Y3m3XGKJARqQKTqabWkzRaWcoZX8wiqGdSaEKvizyzHT6qxjKfcJAuMdavX9b683uzaH63",
  "key4": "52QnZPUbyhJCCDbhMUsiREBVvWSDJy2p127hV6hPQ4YeJuncqiF8xiqdk27rACGhvf3ReWHZvVF8vA6NcdVGPqgp",
  "key5": "BMTJZBgM2yyWVpLCR6uqea68ttzaiuBSjaGB24KwZ8Rf7c7imTZVB9oMfPyDJrvysHZUgiBQKzz8Jd1nnKHphEN",
  "key6": "2ErqYWWPbEm8xWB5ywFXey4hKTou1DosPZDAMgGoXg5tns6yqdjsNcuuWkijJEPGfqGX3gJSjvTwofnbXj2pthXv",
  "key7": "5NvZbCHtPg3ra2UQt5QhEjrabtsBrjXFZof926oUMzaYCvKia62agKh8LdCQ5G9YSZhMVLzGMcTq8oPCrAgMg8ha",
  "key8": "22YhhMT2Tm96bVyj15yyyN4A18uCn6zv7cFrV9uE2q3fyYaVKvkNpfCfyxL8S3njPM4BDo15Tb3m1ar8bmjMqj4W",
  "key9": "ACAsYi7C8He24rs51Lw12zTHEDgttGjWTzSK5TbJfaCzYf9u2EgZ3zBeV7kbVCL6tySaQhAz8RYLcJKxK6oB56s",
  "key10": "3wPif8JoM3rU2U8HF8XNnk1hdAbRnStNEp4KExE29GUrGoBULnQiKUURRuzigmzaVfWPnunGA9x9EYLvb96ginAS",
  "key11": "3stWX4TvqFfP73ogpJCVvuGUV3efYXb2sHzK9SmsMFQPgJJqiKdYtM1BJvK7fL1iUn7jkHDRY1QUS7svek6ZDexe",
  "key12": "3iZpXJ8XcTnC6uHVqH4y9aa2uq1YERZBRCSzQM752aXTo95139bLzaBjspMQBx6oERmrpVoyTkWRAiw1J6p7apER",
  "key13": "9LNXqEyFghKiMzFnVyEcMLie5LyYeRtdosJMPsZ8rMw2oWvXopeq72QwtXTEFopofk4qoDXJQcoLAMghktf1G4S",
  "key14": "4q5kBqouRfyYVVqG6GkENXso5DeWM8JhtFurMKD4p1rSLUdjmtsmvRDiA9FAkmEGasJrwq5DycNck7ddZkCetFTN",
  "key15": "4v8CfwyeE3iNmQmyKb71dCKkiJ25tHfUNqJVZroPbDKVPjbC4BTStJ298YeC4RP3RBJP3RoM23fgppFZ32t3tEv8",
  "key16": "bmFnbkzfvzRevmiBTyS1rsjotvnXSCZLz7LajYmUqbtqKcp5XJ8sysWPEVf4eTDc1indxusjvzxukpSneapJs5E",
  "key17": "cjPwK9Zw2mXRQujtjjFkPeqQZPYSa377H2i8XQxaPeNoWAiQyausBMsaSJhMqaH7EyJ2Jru2uAo6G5Z2KP8KWom",
  "key18": "3CJeHX9EqaSfpYeibkPdcT8W3oMqGs3mrDHWfaCwE2R8375fADjYGm9jMGhcCGtSMfcYfHgdmieNyanznDFF3Xox",
  "key19": "3uYehiHTNWEyVPKX67H5Ca3zDCWshTLMHQH5TCPw7At8dyV4FvxudL1sRmswUuWmJ9B7SZGtPTbHWSVxhtR4cWEH",
  "key20": "5TWnjtRZwYFb8nUP35B3Y2vDn8Lmpv3vxpRg7gxtcVW7mfQFY4onj4Qk9ZofJtzSuo4oGtEayP8phjDbdWK5fbkV",
  "key21": "qfqYB175tPsB41xBeHJMz6TcA34WHmGECFQneUmJ54SVMyBegjqe6nQp4fCsrqCKJK58goThqSKvQPcLkjRdpiY",
  "key22": "5QBn7xnwWkQgwPDY4L79wnGv6fvTmXD2vSJ2hva53iLg7Qsuu9QuT8fj5vSTGVuRYwhMP1rsYDsHjeGpD4YA2xMU",
  "key23": "3Y7WDwdkTLvXBSEvAGPMdCymsCGNK9msMUCiXk9VjFCDErnVgbVFoH1quv6VepKzhzwZHGQb51uF4ecaFshwqRWU",
  "key24": "nrvVHXEB9UDdaooGFXHaRst838guxhruJL3v2kz5HXgaBgx5GZJKqxz5WhqvuQJ96eNMGHAN8LnrGHT2DWy28g6",
  "key25": "5DjPf9ZzfVSJ6NNRqJvqoWtbXA6juscTt7ZcEBx3oD68ARLJPfu5SkLxDS1YburHzfNEKaJ5FeekrNRAV3mDFRgD",
  "key26": "37CoePwxe2MZyaxTNnyk9YVJAUewHfVyLCJ27geixzcmk9Euk2qs3BGur4T29xQiet9hFswN2cMwKQdKUkkkffTL",
  "key27": "4Xeom95mEK4gLfi4KHtocVbLTwcjPhVfsrTVqzYuNXh1UWP6AT7pGiB2wo7wvbj2iJJPNtFqYobG8Dwzm2BHpiij",
  "key28": "wFw1axBpv1JDeZ6WhpC1yB6ENk8qWj6XWVBrmF8R89nt7MJSRWfLmAEkeZ4GXsqTPJmSGxyap4X7cV7zdoaiqRz",
  "key29": "2HPNvjju5iH6Tnwt2C3AygR95ZGn6JKv61cJAWP94BdS6waC2yqydpKE5sxZ9JdhXx5C96fruGGbgz5E47z1Bqkw",
  "key30": "5RDZsmVyCtrYezQboxWAPr6VkhEzzGpuqxUZKjP5gyEwfGTepqHtu6yTpVRC1sK8qc2fuR7UnHFmWr4rkGgC6s1a",
  "key31": "4A6U2Hdfj67huf9SGLKyA3MtF7ArsMoh44wXdUFoa4XGoP6b5RnpV85M8WmPnhsGZLuhdhgiUNDP6R3thuk8aHES",
  "key32": "26MgHp5MA2ELGWhwUyH4dU1Fnm4fv86j3rvxYWQxxVjMs9C1u9KcYmHLtmjH9ks6ivduzcz7wcFWxGUEmgkDp1oA"
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
