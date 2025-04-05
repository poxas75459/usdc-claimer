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
    "4pvN3341FH6bgwdEo3R9j5DF28yy7cMu48mmc6B2z5jGEKryUW7eB3azhFPTpKepc5K6USBr88gnw11duAAZqbXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSQbuY3eW1heKg4Jz6dtfhRGbi7W2MkUwTTUKdmjLdx7bHFgGxoXnTQnc51JeXPhzm1pvHw2NSMUnTr1kS3dAyM",
  "key1": "mKkaTuSDA2qbnC5Ldc2FQ3kCmhocnb7ora1P3YX744152V7dnWd6X3Aw9hbL96XLpJFhML3xZv5sii6H1GyKPhe",
  "key2": "wNLSxnyoAJjVsiaBJnNN22Z15wShw4F4QzNyy3R7fFE92U9y8DCkdHM45tjJeNe3nFtVDn9z7wJ4Q6tv4dXmKgh",
  "key3": "3fKBbfm8zL5JwymEDgvL1jReYVDaNSs4jSFsHiV69KErWTzj3M1ZjWGPST4ans48xQD44fRQyS1xsnsMVyVrhyj6",
  "key4": "LNnf9NDWQSLKznuM1MKnU6VWipVCPfyVrxCFjqpwGx6o7PHBQsm9CY3KhZNRWZrdHcxxhsvMUKzTceT1bwDxXzN",
  "key5": "5yw5xN7ubDvHSnZyVCw6nwkMmQQmpMGYte324UPB59gMeGGBr5YRtmC8iZX1uwx7paGKf9spxTYWFTTAJmfZBzz1",
  "key6": "5j5eg1LLiuLc88m2sLLJ7RGWn623m55hATwQXLGLC7yspxyzi46sb2tUDeP5gzTNWfktuxE6FY3QLasgPuXLjFPr",
  "key7": "4AFjmZYbZPCbE7KsDFbpBPMhvoMCJcsVo4DY8WvedFkRS9qi6thLRaj8QvEqQWAvVgQyEqzmSSq7izdgWy8sGNF5",
  "key8": "3g9uwJzF5Z5SqSJK4b9ZrdxsNiZGsZdAT8FetJpanmqKr7QR5xUQRFSSjuEa911qiuvmjkCgL3b4FNFgZqu4wt6u",
  "key9": "4cCwG8Ym12BXubNPK15BMSdodNxnjX9Zz6QdhMaphwtwe5XENJfQhYw1y8w7evKUGVNgJSLu9MU9FMfRCoCycKHm",
  "key10": "4f17L4Uz57kNgbovSUDnyZUBh4bnUmtfzgoZDYUFzVoqpW76cEgBmj2BzwRydLUr3sEuPxtTpubcVZ9dqX2R234c",
  "key11": "3L8R2F8PtpqRJHHMptDg9nySvi6z6RrJKiKSUqSQEuTMyuq6JUuoqmxaPe3A2GwyzLFdrbmasVxdXrWbBzSUEw7V",
  "key12": "2fCZd4XmjuRTkkJVQs8nERDjMbYrmC9x6BtmWKqnkeM1CVd6ZLMwdqGuWYURwULfEZbPtuWpPo7RWJBszKMUXkUc",
  "key13": "g8ZMUZE6RoUk2zQtGTvv1j2Ud68g8h43RVL2EvDcVPUHotqVyw9WxQ8WRFhRYoTtGQMeWt8uhJJbr8i7LKhDvDL",
  "key14": "3u3BiPAREK7P1t9C1eVt7bXVvPPrmtvpbT8dUCEMt3Xu2Nyona49hj5DPF4MZVVaDu9SmhM9uELuy1YBZq6NWaLa",
  "key15": "4qt5t19KSGn5ymmmFFrGrwmvd7Tzy4qmoGWchotngBsktYvBtgEvr4pmGjnDgPmwHZcXSdodTD1RyuTCAKrkNGBa",
  "key16": "2egDiTbKS7WgmYfvDkMqe1YddAsYrgTrt1o7mAvcix51bMsTKQtLGwFmYkLQpCNuW22Gi6oPgc1QtgYQMvMeTZxT",
  "key17": "rxuMxPuBVo6jf5wNwFzx8Ge4u74zSf6NmVqsMRaJrQdaKczVxe94K42iWT54kizz7L6MJZ8esMUrUov52P3BeAH",
  "key18": "3SwkZkC93ysF5TsxfRkSdskgi3V8qdbzbX2vnD5P8taWv5wtWGyffkRcPTXUc5pQkcVgHjFXbnEUxQCv9mdcGaU2",
  "key19": "2qFbyRZC2M6ZoQDk7bKQE5iGDXVEQojKKYPdUk94bj2a9T29VJ3QHr5bATwyJ9LHF7Ndx5EcYZAerWB8Pkni89gC",
  "key20": "3giGfaShSJNQrKyN5XVCtV2CjJq7AcERkx3e39cProCNzdCddg8hWkS4P6VhTXzHfrbFMFwm43Z8ewjRTypJDX4C",
  "key21": "4jtTyev3SXKjM1ZhNajWX2zy5V1JMNHqVM7tQdwjUmVT8oaRqACGURmE8i13n3bYdXpUMZ4ncsQS9kJztjvEj48k",
  "key22": "3ChjPiQd56uA3U4ewZcDvhxkfXd8xo3x1YTfKVz582Qc7TaN4pAAw79QAtowLT3AmoGDS4CeXRMMPiFc1FviZvPj",
  "key23": "5peGZB88JNWfEZxGiGDNfUBWgPYAS9ka5Tt39kn4EjeeAK7RYGsFonWEMZs4Kyad7UaJichefAosLFM1WDqJVXMY",
  "key24": "49U4eAZBgorngDLP7VRZSWx3aJhpbuQxgKR8KVGifoLzeqpquBYCVJ5XgpfArvNf1B8cYJ5rhiGX3K6LLRc2cPrm",
  "key25": "2aefaZ26FRNUnDk44DbuMgyEXiesMs1ZpD5Cnxqut1ggnngihT2jzT8qSwbb3s6TvSwYj3vZg4NvbM7LDrxJdNHz",
  "key26": "4nmettzvDf6f8dynjYVPyDY4sghLgSoS1ismstVUDtrnAC4474fFEv2zxZ1TaCkV63uJtw94EichNyghiyQkjci2",
  "key27": "4dabUWed5MZGnZdckkScfFH3WLZY4t8Hvc5VJyCnCAFssZBYZwfQzULtvEZ424ZnmQXSCbf6bnxvoJyBu56S4tKC",
  "key28": "4NPtg66XAcmQzca9SFpiCx1pkr1AGGoB5V2ZTQtnBqnrNK4DTVVdMdtGhSizsw51NUJhvC8ZVbTsD2zs45g6X1WA",
  "key29": "5NEZZD2jRwhaxzqoS4X6hguEfkfJR4ybwkBsW3eE2fiZei7rGn6jYyaKKMAmFkWi52HzCrMeRq6L7DQKowTR1ZgU",
  "key30": "3Smt4Mhg5H99pgPPtNRBALK1Zco61jxYoJBekmMzdr2yW9nwSzTHQsBrTpw17FopL23FjNMtQS7DTUwzkYNJMYDV",
  "key31": "49zrAS3VxDEUdHP7eT1s7iKdwG4LfAYRCLF5SoKqtCjB7Q7mCy666pYA1upnoDxwUdFRCQQrk3CZVW1nZp4hcMeE",
  "key32": "mxGXS1eqLDRiLF5FMHKpTgRFGwy2T1nVyeZMYa6qZSc2eE8iFWpMoZUpCDrB4XsfKawTtzHGwMssBaeAQzWHyC4",
  "key33": "4rrngYUeKsUPqgfpd68y8UHYwT5hDp9yTdN4f4UjMWisMRStR9wmzELHeNcZXH7WRvTKVCKc9DVFchEUQNZ8RPoM",
  "key34": "2ssMhVUqj5SFHKcrS8jm9ExLZXJLA39tyY3B43zEGkdsPbNJB9jDYnvajWdexcAEqrDBH6kK83GM2SHzgeuzmmt1",
  "key35": "3RZTMDsFPkHErkoxBJXawfVZSDFBy6tR9mPCKpN2rqeGAZv6HkN8TG9bGquqJx5hEhv4j4E9U7cRnbFkhTPvuEKN",
  "key36": "5RD3yCGxJ6qBUVSN6tZn9RmvLLaSfdEofcyjwTjrGSuHkztPDjtqgFAgR16tie3mZi8Xeys6RDjCVjmq1H5YZjdT",
  "key37": "3KjXfEpFYRspdPuJrcq4ic3qwcHm6pjindjtMhUUsWEycqht58CfiLfKU2JS8WnZ9B5SuQPjVF1TwqhuR7ZLWPPW",
  "key38": "4w5nb3nFPdFZofBjwofu7XF3f3YzBYLwyzg4spro5gk3BJJnJBN7215WWBobS7nVz3KfGtZU7CoRHZG1FSg7VuV1"
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
