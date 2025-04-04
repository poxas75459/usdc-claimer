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
    "3cGqG2iUKDj5EEBnZfJJkt1SrBU3ZXp3NMwU81jnbAgq6dVjxN1MytDbW35HXeqBPToDUq8wBQVkN8RH3CwW51cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QqYCviDD8VQ9DZaSpBijMpkifjZeH8QngxXEYZUJTQBRzriKgB28q7bgLVyx6HaZ5XAQ9VLZXNk3WVcLWiVw5kb",
  "key1": "4Y89qc3K2tvi5RAJkAXsFfDsrs4jHaE7Tr56JkGRSnYnquZFnMhxwpBNBeCXBjv691PytApKoKrTPxTqTbKVytrn",
  "key2": "4g7S2wLABxSDruR4znx5Hd4PULpA6of2p6bDoYCu5N57DQ76VrWDEJsPSmfv52r5vGHXgBtewMfP7uH1g7hzMHMT",
  "key3": "2V25KSPNCrMmxye1sfZoCvehdpGPhY2zo9ob5vdL816MbhhZrgjiTABg6fzS9XngGDc9HDFzi9ZYmeHuQHyxj1MC",
  "key4": "4mdAeVBHfntrHLaseSyRJQft7xsYgXtohfzizAX78X64xDJmonUeDCAkfLCPFY6DMpAqRuSSkT3gZL7XgF2yBNBP",
  "key5": "5f8FvMkV7HGUwJtU38apDLRtfqbg2LqeBm9UxrJX4oPGwY2FXetwsob5VN73iwdQvi7vN6AaXPKuQ4nCXJsqQvqD",
  "key6": "65Bdv41H7wNiFL9e1pMjTpHePUASeY1FCrGFUFwdy1GKL63QHL6koFi4pRQTXerYe7tfm3xmjcSVtNaUUUp8xmKb",
  "key7": "6RsvCYgoxqHhjFpLBokZ6TNjymRS5uvYamJjCW5ACVKTJCN8vVe48b85Dhx7c77TQJp2rPtAwdnocSiQKu3NmCy",
  "key8": "4JJ7N5WBQr3FCaxDsgvEMEfvuuoH45XQhgjptGLfMsDbQ8zeyvCmvN4Bfqka2eZ55c2Cr8mHG1TuJ2ejAPUNMnku",
  "key9": "4TxBJvkE6SHGJYud4YGR7XYQm1GZGS8k6cSAgVEd7u7uk7cNnKHMBoRQGbNmgrnMZ4dF2W1719vDS8YjB6RWcype",
  "key10": "yWG96kr76Txp8ipNgNUSpvMaCQobYxDt5XCpiDhB7R3wZBfpAvqeGKP1NmtcNVF7xHCixd1yvtNk8wjcBAzpuFr",
  "key11": "5XctHWoJuWrfNvPvBCgxDtuhAqY9pdPY9iNY87BKAUxdmL5NM4WVRto7W4Ai1uWgTuWBC9DpPU7yjhXqD1pzjGf4",
  "key12": "Sf1DDEwvFNWBqBivwdwAnAdwUDruKNNnXystKSFijHMwnX9Tcqo3zZApGQuZDDLHVGomg86b8aAoxWnKuWz3J2K",
  "key13": "qNocx3gxaxtiii1jVfCpaExfLt75ioks9WAZovyU4ieMMHbbmfEFohJX99CzHuVBoN8JPEAEwWd1apUM9asTSgv",
  "key14": "31ddKzCXUsPy82nrbqut2Qrv8RocHYoKPUdHg9UgrT54RGqNYCrjU1Ca6qXR6ReBCZDBbqmER5mNyXg7ZxQ8aHxL",
  "key15": "5mnPCVkqHktmB7rCQd6WScqAh69ZJhqncPAp2TPAG653M6aAqcnVhEgxQhWnX6hCFMoWvdKaBv2NkJYAzTcYsqgg",
  "key16": "o3ryCGe7Fmz8whCoi9PoMBJpeLkGo6xH9CgJabDrJQ4GJM7unBofoxFJ9Qz7A4Z1rQNeb1fRSfF9YHqAgSLiSnq",
  "key17": "4TAKXLML7s4TZEQAidEgsdGt88domQNGPmsDRE4Zsp17RJpwHFn3gS4wHPbY9JqBxJP5k7XjTxXRKtFVN7i9UjbQ",
  "key18": "3kFBCRU8Zm5VxjW6xJ4hSTd5m5Ec47BAp1FSfC21cXgxzzExVKiZppTXWu6SGa841BxKJUNjvuqkrdGnqV9WxwAb",
  "key19": "4wrXexekoRqVLL4nFp7BUNQzCZd8p1n3tkpyep1XsWMruBeDpc1SpS1z2Mm75U5ko98AbG1JcTwJzYKoRv1i8gcS",
  "key20": "2LaU48XVNmzkMctwSQWL3YhwRHYbx7FgXuRXxbajMPDBxQUGXJGmh8aEfmJugF8T1qZYvNPxNmRmqykGfGkTHoRX",
  "key21": "5YnqpXnUx7kAV1Tq2zLrv9DD3Grcq2MZErnasimdjJeJVHa2RPNSVTJ8suX9WARpXdrjWQ3gFHmN8AeYMaUcfxYA",
  "key22": "5X8oA7ymV7wbEq6gmdb3vdUDbeHf3GdcCnrmQLhEkme2cvZwoFwo7FxzCGVU6cfxeCEcX9dX5VKKyeKRdhNjQWKr",
  "key23": "3exNQa2Buqti8rPKe5dFd6Mp9w6UonWcXpr3JbP2S36fDEHrRbo4MMfVjbNAoEtUCwJpSkxTKpSsN1Zu23ty87da",
  "key24": "5JbVJuFDHFZdt2fxgnVe5tQNgSGeSJTdaph7u5SqhUYHBWkXpuBdRMAAfLVjNf1DeoBS5W1pCmaWhmLffUBbvJeB",
  "key25": "213BFXRAvjJHtxNTcsLnnpfd99YrGn55KrEts7QsavYGirZAyhKvGrkxD9V6grpiGNNLVzFuSNwgGKukibYTfHZX",
  "key26": "5JkebmQkjMGfrvchB1o1v2gZA2KYPkLdVTpnyb7jE5kufG4n24Ljh46pDrdoHmhKS6LUJHkjYrxfcfbfYU2ravUF",
  "key27": "3jv6i9ZxMq5SQyLaqwS8YH78BgRt2Qtet8WFzmDCEWn4FLStUKbhEWFRpwWZKXStHMyURupNLUxw91bUZE5HuibY",
  "key28": "2j2ciwbACntPBFKj3489UkZqtpuak2XajQmSoQkrqMbyJiShzQPyHAJymY8i9VicLiebgT87m5Cdb5r7t3M7imCV",
  "key29": "24GitKKkPURkx7zkxG4wHcCSQW2MgTigkcphrfzNRbVcGQmyeesex3A3R8utDpzATG7iSRZfCRFnsqmXLbTmKsXm",
  "key30": "61GGK1xKyToEuyNN8spC75emGAp43vLmA36g4T5pKiadxEcwZd1ySSQPeuFtZETY7mLqbBqQRw8FkrNFSKBg9tfw",
  "key31": "22j47z6GQai8iCQcUseKK15Ld48wHhHbgRnkk4fmNYPZT1s1Li2auysFq4nSrRjKfT3pj6yGNQBoq3E2zKCi7Cyq",
  "key32": "2AAXXsD8E6mSrAkvyeNEYzdU4c1H8dDHyosaYxPGq74fefJa8aYfLQSVfKJgp3VSHd3DBgC2CzWaW94i7nuJYQjT",
  "key33": "4ze13FmRHitotQtcwUFWTDizdZgsjT2nM4Ayivakm1dvANACZPmp3rYSmNfcVcSSLd5rQ11DPfmmV6oc8rMSwHSV",
  "key34": "4fvdpFWHzSUpa2sH93vXD18aYQYRmoKL75CFgAXAHbSFRmLJn5HnTyEtzRMKUdsaSfLzZt8nQaud7yyhjnPAGoUM",
  "key35": "3tjsQf4opNvHL7BKSBFhZAv38nJ7DjbLLfKYitHS3BnWTpCztwhtrX2tKFxWSs7Sz5wchihfW5BnfqcNhPSCfG8o",
  "key36": "4srpnB5GzU9uXcioyQ1d5f5UpkH2cBHyarHaSXL9ADRg2oHRVffsaYaz1mfuYaWjeC2JQnXqGN6pyYHZHTRW5g7h",
  "key37": "2qg2LnajaTUk4EkMCapSRApPoXFsZxhV5b1pGnDCchf4w3YdxJ7SeKXBpXDk7PXY7gjZYpEYhZVbCvSpg1WcsuCV",
  "key38": "P8w6utQ8stcgXJr2RSG8zhCCBwGpoaNf63Er4kdhN8KoQCoBciVckCRLZ1rYSrTrrqgC1eYk3M82uqTZeyBXHuS",
  "key39": "5iP4y8NCDAwxoXMdQafd2bW7d5HkBgTBW2zmaVtBeyW2ztwRDj421VgcfzPebJ6KQWrGkrqR2sT2aDcDFRcrNosi",
  "key40": "4zUB2NBLtrbVMpeSNux4sgRpA3hn5TwhoQzKb6En1uo4ArBtk9UqAetz4nNJaWdfvqu8vK5NWBxy55U292sCVd1N",
  "key41": "5qe1TAUkQdCaz4JZDpK4k3UVi4CMJiSS5zSmS7UP5fP448ABbmjgNTB4XbPB7t8qyxC3yfCZZvCybX7FV2mNwH6x",
  "key42": "2jqQ2h8ercpnJeMEVtez6TTungd3BVdv186EXY4W1mpG6nHT6yKTSyj5u1h1T7ZBZiNdZMevF4iaMSmT3nqjXvXY",
  "key43": "4kSSfqexS1NGAKoYPeM2HFoFqsKZfTCGBU8jyGagrD8ZajEvNeFHjQLTjTgQDFN7UwM6YJHNd2Ca2HxGJy9Ar9TW",
  "key44": "2FhPr8sTaP55m7uxHTYAuyTSePbq1BTFDQEU1z27cfKjLJ6pcyE4h7vHShprSSfUx37QQuKrdBCVjdcqCgTRQNyd",
  "key45": "G39LenZnVahLpdaDQiRVJoyTLsaPx1zYonqVJVCbbdkfRkqpVEaQsWqHr1rkhc1Utkbpqs1MH41hjCPB2oJHbzC",
  "key46": "28r9gVi5p6UN4MG5QQxf2TQR41TbWDHvoTvHCgckCdGFhRzwYkn2GpXfhN5C6z61YqGRhym3PiGDDSa94h8mjUZD",
  "key47": "5SAzEBCCKAfgoErwjVtFMwGcoECkaVxqU3vBdGYQRBtmfEVxgaWtnahvGis6wNe3sKooYtMHfjG9rKYmJU4oZMY1"
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
