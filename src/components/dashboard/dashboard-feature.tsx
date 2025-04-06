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
    "5M78ZDwN63VYG8XtAUJGKn3BKmjY7dXGcsJRFNSRjeK6AVM1UAgXNaFjfswCyjY8K7AtXF1x8fxy8zvd68b64azU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vmYy6xWiX8FUkQv5W28U3JYX7p1df85mu45sX1pLN2ZaoFqjbmDww2kU14QK7GeGLrZ43RrwNNdbMBjCWug3ht5",
  "key1": "2SS9FxxQsPeZDMkjAD3X3CmWH4Ec6ZiTEmvDCJ16ptsbDiZ6sYrXBASKqx4bniaaK2ToFYTjEBcAx9RRYjYTHor5",
  "key2": "5e5ojt9CpevthhJU7jABtMeKKPuzj6fAXCX1NtMPRMJSLarR9Z9uA7nZXpc8iqFvBgtfMdm3TbAHJBto8pdSx738",
  "key3": "44aDZAUmPE9FDXdyfUwLQjicDtU3dmRuYTRL6U4LbbcuB5LAhWraZE9hmHEoCqqjB3vrwsc7N3Mot8D79ea8zqtS",
  "key4": "2p3dhEfjyLU1TrBhc2AoQwsWXXjkjXBKLT1FrMN6Btgu92SgZcFwZcct5jevggosBcW1HHCPVqE4aUKkhyMfHPPe",
  "key5": "36csF6fwNNzSqm6GPRkqh29u2PMq5H8BB28Tpty553EpPHNVbisn9fizuLmkgbjRuam4MXnkXtjEwgJszXac9m4C",
  "key6": "2WVLzSog4uLzhuAxiZrY6YUApQvdPbEXJm9tSNfXWh9mokB5cuspmSjZwbqdg2YeiBLZcuQnrRH1FQQR56J9awdw",
  "key7": "2uT4KVVJkHviRUBHRuSGTPymG2grhHxVXeVRUcirUXLF59Bz1iYzkQuF8TRCjKYkdqX7uiFC55VQaZZVBmEr1wGd",
  "key8": "2GbP9b5qibmzqkfSsa1comTDRkX2M5biDQkhb55uZ4XBWQpikPMSzDgsbBu3XhH6B9zYB3wYpz9JxiHGJJ5neUWb",
  "key9": "QLTts5FF2RpWNHnFR7yEoZb1GQrNkMyXSUqHEdgABPnxikbqZQztH1aQbCnp8At7rPo8ijEmBMCuku7df3a31rb",
  "key10": "3ttdjr2PRmJQ1Ki7c3xZCTEfxjpyuv31FXK9eLVYfAnomUs3Brcc1dGjVAciNueNz5YZdxgfMJYzydXpGxxnztn6",
  "key11": "bznn8pzeu3FXEW2QiVfXLzRsARvRsmzvfFF5hmQa1KMXkZCaUQB9SgTiaiPFTmzPFNNDya4rZ4eM6xe3Yf1kH6v",
  "key12": "yAyAaHsHac78uUGxY6GobNeH8VV6GTTnusYumdZrM8X157tDouGkZFzEaySzFpfDrr5sRtT3WMpfFD4SCxCgEzy",
  "key13": "yjVtwtGUJdxwsQTUzcJaZNqCFf2B9D9Pm86RAJcvJZqfNkgngWvDGYqCJKihXNaZSb39QkNkk6HwJJFrNtLZmJQ",
  "key14": "3nirFEuZpDuF7khZyx5P8HARBDBvZ5b2BuSCgiAq3pBLq3mXuEAKAuKgk84v8WNzaS2QHr1ePWXMFSLifZzzwBj7",
  "key15": "3ingj29J5dZtriEvRUwJXe4ygVu13W2Deqp1JiGj5FWYjETKNfwPKegZ2iRGG1akTWfigTTMu9TbXCHXS6SJPMUD",
  "key16": "3fRubdNx1WrNHiBBsVbgPMw64LPLrMtEjhMhd8Rx6Uyb4FD26FaEqRgRkYRaUbCYiDHcoF1KDinS7VYGCCznAgX6",
  "key17": "tW3qebzYom3wJuAHn2cgDTCjC7ePTRfVe6FrAtr6oVF5feAVT8FCLrPdJ3TCkBva9nPrx9caKAW3AMzRcoLnoKv",
  "key18": "2JhNfGpUP2SwsDXJLLL3e5ynDRiVf4NbZ4Upyad2iSEgC2kDDTR42BDhX98yUqkaGDrzq3y1UvfKnGuDyZntPiGM",
  "key19": "5UubantVG3SvkSxJVuGvAUKe4ndeeZFrxqZsR9NWTMrTnXoFMVEE7we2PnkEX5JisopLrWMwRz8BbeYPHXAHbdjN",
  "key20": "3uZo5fMfsKMsUJVBCAKCWDJyvRRNuBhRVn2p77JcAbcPgjRYw6uGxBvYkpmLQpyUReMBg6q9QvY1nSbSMG6K3E1z",
  "key21": "2yFhUybzYzM9DQkuQ9uZMeEqpUmQzmfC971hvVMKQ1fBKcsdZy4hNAn44KEr4CGvbjBu2quDJAPkspvzsJ2rff8e",
  "key22": "3opVs6438arUichEwsiNUTiTBG3YWxU1srbTMC5WR2boNoSPoKvZ5qkxVa8Y3gbGBQKvPuZKe8RQzQs2Bxnn3ypT",
  "key23": "3nH6a3pioD8J3gpsKmevB5betZNfvAav9gYhzFFcosQ3xg7ondh6hRhtTsTNywFb2TJbyaiYhRDjTwz35MkCAGUq",
  "key24": "2ge7bP9Gh4ocGfDXGYTfHGk5s8hnyTdkTURibpRuMY5ib4xj24Sjh1FGjPudPnLBA4S4NxFUgwoshwn4WtHacXaN",
  "key25": "38MDzPHo4ZVdP6PQsadFFH4tAWLko1VBkVtce77iMGVFpfZ4uqcRgx4499wRzxPYKj4JmsyumyC4e9PbCsRTFf5V",
  "key26": "3nD9pJQsbDyNquoaZ7p2bY4PkgHXaoYVQRvbYV1whNjYLhHRrkaNYZnU96tzczZxadLro7VLqaaGvds3A52me6DX",
  "key27": "5gLS62NcQAZbi97C4NNQY9Q1ZFhFM9NfEFb8Sqrpy3smMHzd3PfCPD8evTvbnxZgZ3XWo7Q9TkQzT9KJPyfuZt2w",
  "key28": "5NYqy4qjicLJWAu6SrzaPL9qR5XPHDEc5Wv6pyM966ZauhCwZz3wh4TGZTkqdQuMeBTNeiPjK15ZW2zAJeR3C2PU",
  "key29": "5k8sLkwHqBu4T7HULNry4PaWqaF2YpLTsdg9sKPKZ25KXtovcov9cmK2W71mvDMA3JQP8FrVE4UEGF4jqgtW84Hw",
  "key30": "3kdXAzZ269ad6fMpRfKqt7nfDyT2nA4Rj3ZmmCdzcLTfMHwtk7a7sPP6XvB9M9pdUSh9DyemZQwG3v18G189josJ",
  "key31": "vEGEs2cv2LgYNbFBYkdCseESk9AWmehGfgXbMd5B181VUVwEeM8tXkpVSViyoLbAzjQLy5bFi4hQmzKmQW9P1De",
  "key32": "GeLwebb8cnWkFs67vmW8oMFKNesjkMZqgoCuk5TfmZFzjWwiRRYdhHaqZVrxMYtdE94kreGL1cWjFsx3uVt4YUQ",
  "key33": "3i8uccfZpG1T8aSthk75FpA8hwBK64iqZWuPyK7CZdpT6Yy44ds4XSTPcadiQwK8z47GZAqc5qMYxoaha5Whei2d",
  "key34": "5zHLvjhLZjeLzac25jmMdfy8wWcoo82Rg8Rvj73sWZrWx8U2Pt74BjooNgSsH4h48vpRMhAFf5DN6jpAFzJkg9qk",
  "key35": "5Csmufe4FWBxKtE8CbKtG8mVtCKft8w4zaZ7RfwwME6MEUapouDcWtv68hvCKy27vQQuSPdjLNsxdtqG13hzNWjq",
  "key36": "6DDXziAWkSRVJ6wbS9sJjDjfdYpiwiuwQjuy4zUWayReB8UhzTiChupFra4wqhE6GqYJ6V5JQQaxiqrFs4koKUF",
  "key37": "2xvNBCJdXquty4kDiPCwpMz9B24bakSWg4Jan4XRZ2S1hWND35VoH3secB9PT9dTuJhzPHJCUAyD2gq9YCui4tTS",
  "key38": "5UejSc9hSQyi3r5L1CnyRkyPtczrsnBq2m7AvunnKMiBmFD5SECh5vKEX7aAj89E9Kd1krwdYzwjgxj7krGKXBLq",
  "key39": "2fw7Z549V4KqRnbuh6QZzXuRRqNfztn2DUva4dhkziz9FYSUi9B6YLwQknVtseQsFaEwh9BxEsVuiPF1yJxfY5a3",
  "key40": "4j4gj99SaJ5NLqTpehanuQBYmSDJz2KKaLUs4HUKQRzbGNfHbmnH2HyGn8HrfMP8HpUWV5PQ8911pm7WsorsdXVS",
  "key41": "43xN2TTod7Zr4J6j2iYjs6CH3DJBGt7FGpk4h9eQP7izHvoxz6PdQD73gj17RJsqxk75Qgsz6BfdS7jzAxd4aoAn",
  "key42": "3uL2CXPEeK4YSianwh1FZm3JReZKnRNdjCDZwmWP4CgqVT8mQTrHDQsrZEpHANddg4q3ohCAxsYedh5SoDsG8ipK",
  "key43": "2WtsqDtVnkcb7c59VbyEN7Aa84Vj6gLLJkpzSRBVEo4qj7mE4a1CdYvY8qM16y53pF7xXtJGgdcj4xsbuMH14UJB",
  "key44": "hApoWzpDy365GiWPHpt5e1xqApSC6sJjDHPLts22DA4fwnE6DVvXKFriaVXT6skSrUQH446pBB2rM95twKAjyZr"
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
