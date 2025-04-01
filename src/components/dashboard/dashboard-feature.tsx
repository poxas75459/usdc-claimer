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
    "5bMvr4bAFiajUepdWhBHFeMPPUkrpePbpwRXVjp9dXtiCseK6c6mcydQbn6EKyCrB8jMvp7KWwKSxosqoZ3fxrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqzcHyyY2P1smyNhcrqHcnBVkwDdXdEPEvkKP7BRWFd8N6cT64pL4nXunxzkD5FK6DQpfyU9iyP9tb5xvyxtQ7A",
  "key1": "4Q637ggwKbv6CYCJo1hXsggy4vzMCePRV7LxJKmyanTDCtNGwsRSQc17nJfQWmoDM19EBiZDABGdf3A6Nx3z9qiq",
  "key2": "5ae7wTf1AiRSA6e9fyXacxNFNwDShAJMzTieTAXKWSzMQ2Vnpo1RGxFKXes845AskGXEqXCbGqsVBCbN3Zm17oif",
  "key3": "3CH29ZjWNEPSzrhBW8g3pDSrqFAuB9E9z9s3Z5BwBSNch1YAmGzpDNRwtD3JmeT1375VJge9tWqfCFoBV7PaMUqe",
  "key4": "5e2zcLHhAQe8TxfgpskHjwG4VgCNyth9XmmiERno5YhiD5DsiXzEqmJLHwe12ytQcmphSg9T1PHpBFVTbK59veZ",
  "key5": "6qkNx8F3A4aghnNLza1E44kjFEXgM61v9Mg9kpJbpCqMPLCZkGd3ZTfqKvA7zU7b84xAqwVaFdn2xvWERX27vV2",
  "key6": "3svk3eCiVun6HfKxBDFSyFh2k5DGs11A8D1v7t1cWCKVJKGgcG2Yh5mHNUh8x9RmAHSZo1YSS5fBoExSDuw9DPAp",
  "key7": "2u2MAZpHzzQZgP23JwTPUgNPkb3QwHGxNudjQoV6qVrP7Fiii6HN6ytH1k5RcTMgkU92DNfNd4Je2BFqinJ4wD7f",
  "key8": "3DTRFnZ3LZoKaK6mZSi7M8HVHwXcuW9okaNapYXQWCWN6HHyVcYcRhTKAwcnAHeBx4LCRPLb3zXnDr22vxwL8gvA",
  "key9": "36zUBLEDBjKLmpbaJjGmH42QR982uhquYS8WRs7CxwfwrzwWYwJrAwVunMmN2Qge63kD4DenZjvRPD6Cc3eTTXFK",
  "key10": "24C4HEBY8h7h7GnPVK3hE1tdgXWh3ifoJ5UWs3EaetwYzJSiKYsCy84rsnvdErKddcT5GJ5x2zBP7SWX9YB5nPMk",
  "key11": "5WwwCf4VA5wbteMXq2ngodfH8pWF5KmsjbjcpoQ6dcrUo7nH5nKcCBHuwQG2WBVw6bTf1AzumAjiVn47ifRvqFT7",
  "key12": "3xmo4HdhP7PRiqzvo3dwcL6gW9bPCQmotDYVShm5yuW2kmjrWTmqLdhTtspEEp4wVxx3PrPT6KC284cCd3mnabub",
  "key13": "4NYkCxAbHfaUXR7kKkpst3HYpAEvguKD2PtGSeMZt8WWqj6Mk2k3yePWtPrbEoZGAqxs489GBLM27Wv27MbmLpsw",
  "key14": "4D83sQguSZanjp2DfykFP3LwjqdDasfDHRzzSpM4RsK3ChZqjFtF6PfJoY6jXnzjGyqJEEHQpH385hNju1EToSqH",
  "key15": "2B4qCFCz6gmAdgknd157vUEagopCopx7g4b6hMfpHRvkxeBNNhMQ2P1WQmpxDUgqxMHxPv33Zjdn7QF4YEkH64rD",
  "key16": "2YYko4Dxx8h7GvGZWAVJFYptnKMgnGFqH2ykvAdDcAvWSzAo3uF56jSnikPUm77JaHzMLUA6ToLrJoGYqXAq9iiz",
  "key17": "2AiJV3LLUiTxcue1TCnE36VnqUeH8CCRKbWQazPvWCTCr6pyJpohnn2sBKso4r2zJVfHBgdyRuhBXYQY3MHvKPnS",
  "key18": "5pLUjba3GYutxzyuSvtNf19fw6upaTTKxAGMa4EY5vFEpkmF6D667W8G9fe558PJuRPJB6Q6b24bLmfWph9T89h2",
  "key19": "2AvD67pnAk925XrP7sqZBUN27LU8UALaJCPb6RQ2nv8S1YahT6ZhWmrPyRoBYHpGAphYJM4i6XNJYL1FPohLLUu",
  "key20": "4Dt8ZYXYQjQYNw9sqJWAofmHfBHQrWNgzjHYa1SwYdx4watVD8WH9ef26ghDygQjrmgR5oeX6vZmaMSJveKUe9i4",
  "key21": "4f4DZCzeUDHG9jQiPboA3dypddWwBust67tTBYsqRtsgMzkBrCTW8iGV2sd5rZq5LVjtst1gpQVwb19kZm1W6dX6",
  "key22": "RNH4NfQxpFQVSjVnFcSwQYSnDAxVejxhN4MmA3kEmntt1ZUhY5VWPENobnAJT7G7Lrmx8sb52nz87XwUbV1qV5k",
  "key23": "4ecjAnbwH3FjvTWMQ2amvsrZBcSeA9xzzu2TFRRSLg8gmCA3AffeSRP8WvgrNraEd8SwmACLJpE8yC4CsjcLEak3",
  "key24": "3iL7feTyiq3YMzgeGUjQD1FsYdeVSojjWH2udEibpETpSQiKaNViSk8ZnN8S9vtnM7k7PNs7bC66oQd93qNKAc2u",
  "key25": "4EwGjmTmC5LwvyH3b5yc3b364QacST4sQaTXu2iWR2yaguNyb2twy1Ngi9G53c8WZA6LtKKwtv1bzUvaq4k19ZXm",
  "key26": "33h72oRK5tvGh3KjzADfC7Y7Qty3U5kzvy7ZLa1zqax1RvgmAWeAMtpXKKQqSCEqEEk3PgMXECgPZAJfh4H8d7xr",
  "key27": "5pZzQntnUjBTmihw36hw4HpRPEqCtUKxdWmNLJ4Ez1EpawEbNipWfjxmRHCKkcf6Cv1vftcxYRZZrLYN5q1hFYmo",
  "key28": "46e52yuEf5WThgyH9F39Hn2sfN4NyKsE9JVp4WZCv4BnxT1rYsqY8WdyvPNM8NRApcu9GXM9vF436hUP6MHiaVzm",
  "key29": "BxrdH6aYUYjKX5stVEmg5FQKsBb2NtFj1vgvnPwUZsoy1d9bq7hFobHd33Uaz2jGmmmtrXEU8bTKNBhBcQ1zEPM",
  "key30": "3xdATZ2wnn1EFXhVa4UwLEoB3VKHCFYrFvzHVtM3ZDapFvy1xb6cQfDtFDw9iSp7mEAfnY4H2t8DWAp3eqv6y32n",
  "key31": "5nanjxCwyTDZm4Z99NCzRf69HAS9yLh9enrL3txdVsxCDUkESy19moDG92RhikaFg4aPpUVTzmvRzbzkVPZheZi2",
  "key32": "4r52aioZMeFZaajdjLnG6zYBAB5Zx7U2iXQ1qfY8GdvpDokyrXCySfPwGvZUi4uW1iRvWqjQjpdzK5vSuGSpiAFq",
  "key33": "5vkJNJuQe2fHoArTcFoUsjEPjCpbUuRXH2v9F7AT5Co8cm29F3c83N1QPbvM9SPXnv3yXPHdCA6XexKwkvcC2LeU",
  "key34": "2iZtEE9ajTLpjvDdCv5N8GhoRoFMReRvXXJBWfXNcGpokDs94z9H2mZP73i7MkhFMfH5EVStVfpy5bi4hDkDUeka",
  "key35": "3KXbEoWUJG8bM2BMFBN7era4NjJSnboxAwGwNsEMoAAvWUG8ykhMw2N4BTS3oeJ7wAmPwL9NnF1Fv8Qq7T1YQScr",
  "key36": "45ukoQQUu9LcpbixJ7juW3EyG8qi6dzdk5ATgYNQBWbEdJmvcSDjcxuA5D1Pv4xmoAinwkBkRFToHMKKiSmNiVop"
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
