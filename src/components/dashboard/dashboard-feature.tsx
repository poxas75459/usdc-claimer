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
    "53SPFvUMvCWcJYSdvTcZ2EimeqH2GpayDZ38bbKZGZSh77tTkaykXhuoDysq4hSLpaCsg9CxeTrFFG4JDXD822yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uRDY6BN5XV1umnrkf8YsgHQpPfmrqj9vJXQoAW1gxZEfec31DLu4YXF4xZMDrJjaoL99xW1Q82SnjuyMXJ9kweA",
  "key1": "4Wonf2BtyoBBCRcRKSYTRK6UeFKr8r1tdRK1WSqj2rMshDSkAHLSvsuKELTxabuxWxBacM5a5dwKyPavJcsgsaLC",
  "key2": "2tBYD3G6MMG4mbjoRE1mat2Ha6NDurivqXxJF2pYxK4hHq4Cv8i3hnuVDhRDhKJ6CrTyHBiGSacZEMQNYPswefnk",
  "key3": "27Su3eBWrkm1LgPhhHHgujezgz9TztqDpSfbGoJp2cWeRmbyFPbYk5yG7y47xtt61H3eBGDk3gsFZdg55Hd5iTTM",
  "key4": "2UWUdRyPJLu2LnoaXKeaCRHXam24Ys4bfVvknpfbvTnhZ2mrGhHWxhZKtpr823gzhwRAhYNebxKgea83HzCb9ydT",
  "key5": "3QmVNwJSNACRajgXdRz1Tcqb8Bv5giqtiRYKv3AV5L9KJ7F7dGeu2RznS79YCEpbQXW76dXS1Je4mYfzJwRKy2Zy",
  "key6": "p28wcPzvYSRx4ypWjQoRyhbfgGDLy8BEDr6MZT8Gpq5Yvyr2N5348oMn1vphnFiCKQWjJ6Ucw94Kxpvxxj7ymd2",
  "key7": "3RuXnNokeK4bc4iVVFLZjPWwYrxNLovak4iHeuToKACFPKNpyoh87WXfMAjFkhJGuWCMbDGXnLv3ULGAFGPJeJys",
  "key8": "F9py9F7aY4ZXNzHMnQ1fBP9pSzufkWJosbJ9bmh4onVvwf8yZprGLPLMB2VhcsVnhrnEho5vrRPL9BZXwqKCjdd",
  "key9": "5wUAaKNr67r41BHPaCQoDyxV4aqQy1kPiCQ2vawL88np2CAoJnWu5mSLmds6asZ5pKgt3NCDormsuhnVob5vSwHa",
  "key10": "2jmu4hrvfsqpEMXuEu5chFeCMsxArZw37mVpRbxSR8zY6dR3tm8qXEssBvZjYBDEA3HQZvDAxEWUbZz5H7nHRun9",
  "key11": "24hGjqs9neoaD3RejRT8ffeP7rsffUejxEkpoinpyBmHh26WM5iBnkABGrAXsKKFn1TJzf4gVnUXcBJgUsmPcMTM",
  "key12": "58KGGEp6ZYLt3zakx6QMaYoKvQD4QaV9s1rmuipizYPYVph1jiw5uufddE34BsRA5Y5HaKRMcopfmzKAj62c5DzU",
  "key13": "4MLsS9s9EFBoQJPe4ogp3Wmcm9bgqw1UbwJeC86HFhFhQDczmhFRouxSuf7M7QUW5tviZk3JwxUvFGWDkdk2TMFR",
  "key14": "3YiaESzT6SCocKkrnRwHfBrreXbzHR5Z1Ljq8b67JiA3o2kMjztovnStpaL7YK1vXszNx17u7TGwWMpdxL1gJ26v",
  "key15": "66gaVjT7wYRDcLgXJF7qES8wVYCjeeNy5ECk7BG6r62XNUFBnXPWrNTZEmsoCcFLo8wjpWDUDeDQmMPkK3nPYxYR",
  "key16": "2TrwUqMFuKr2XgesFDg2WQ77gzeFYdUdpBY4dg2cErJY5HYjhFXG9GXbHkbuwVmdJ5QvPxcJgxUeqch463SxoeYs",
  "key17": "GNX2637Q1xC5gCk3FXiup6PTs6dUYWUzVMyfDA8sEuWp1P7XsXvwZQyLfgpA7q68tdfPJoBUpRsipDPnKJT2KAz",
  "key18": "2AyHYWzTh9GBXXrZham3NC9GRdAJbqPj9nzW1eWuZW5bxA69aRXuuYhH6soXdTEDdxYeCZHsDmrMMwx1kh9pr8JM",
  "key19": "EVFLHwz93qh3J8Av5ycWnFqCg85hyxPjKMnj7ZfNfzwbyw6pD3ot3HswrkZ8VTXiFd4uZEW1sHo8UJJfFiQJHgW",
  "key20": "FVcNpuxzg7UMVJJJAtbmUyZRrgsyAGrebsQ9i4g8rqGBi13KKmGR5AcLuuvxTNdbcMYTNyXKnWcZqegUTG42rNp",
  "key21": "4P6cV5ZdyFKADjf5H1xY2UHJZs993v9ZHUFfpd63fHjzWFJECi76MiJrcY1MmP7gGDFVqGSRAddR7QdbU3fgcsaJ",
  "key22": "5sLRkvcmiQS6UdhW2FsoZ8kDmdq8Y2eK2cFBkTFmHxKy8oZoN4vHqjBNqvzgmJhDSkMkzo7LGuTZ9ezFutHKUAFJ",
  "key23": "2bwm9DZ3jMGi1vypFdwgJg7jAVN7yk542LBbH83FnStyw4U9EaYrumoJAK1K7NBAqu7kfcBBV6Rzff6Y4temEwva",
  "key24": "4nP6V8VitQ94ByGDV5RJ5EQnPY8c2PHVoMrstvymGuCU4kbdgosUSzgU4kJaMiE6QDazLTgTMoDQT4J7s9TeEYee",
  "key25": "31fNCLxJ6ADEvBh8VHLjaA9pwGpQu842F2UMWBHcXQhZ26dotvyNQmvL5iHxCE7YMAyEmYNEH8ZH8Ea9esK5iZbu",
  "key26": "2BiqJ53iaCVTxxvWUQ3HiTneYzKru46WorfXpRURNPVQspD1vFRfGPiDv2wQwjd4D2kj6QG4wZtGfnSSh3eXaET6",
  "key27": "2qpJfBsrUuk1fSvYG7K5ZjGkNqaAtNLQnvaw358dtGRAFoKG6sGxBhzRJhXVCJ2VsgiF9jX1xgxcoSCPeiqNu3LQ",
  "key28": "4YnSy3xxxxnvdCM5343WYY2XzLHXrbohgLtCmdKruQaMc6QQtoGc3mRXTw8UBpEv6A14BCGJ9M5dfCDzGu5iRTRU",
  "key29": "33LEjYn7gx6gbyemtpxvhuEaGRCXBrxzwdmQfrGEzX3XavoVStfERkAJoqt5gquAFhunhh5bqc3nJr57g85LF3UJ",
  "key30": "Pt5wv9hgPj9rnh17n6acY6bD6icey5gKFCDtcfbGeWjFg1Fi7SMD9q9odgeXKrKJCrqcWV5yBshaNzyd62fFcqS",
  "key31": "QaPNpeeHhE17PhmyoyZdzm3GhP4gPpEHQZm26KEUCrUwCyLHmiCH6FASDkYE5WnxJinUC7sFAYofDLwHthN62h2",
  "key32": "5DVb9LmEt1yKAWqBhk9eyHcsCEAeRBUePcYJyJAELUhX6fZQqfs9ssV7w99BS2KLKCDtSFh5NXtm8Pg1gJw7ZgPw",
  "key33": "5Q4fUYcQR6cGtrVzKezN5nHo3bEiBJBHUP6pJpbWDjpcn221y7g5bLNKixfRKVcgChia7kDjnz8evmvvU1tJhMEP",
  "key34": "nq5BmZ5puHBoa1aLw6FTLJLJg8meQPoimPFGsh8ByADDbyWywCSGEqBmf4mfkgzbs4TwSeCSrHUvUj1KkCzHUij",
  "key35": "3AGz2CHrAo1tCh7GfC2LMAm1JB3bntEjsC4AjoT7LM9zaGRESXaf8cZ4ixLtvM15HBZsGz85zToK1A6ZjBK6qqCf",
  "key36": "4dQc5x7c1Q7cqUCTGZjMeeTjwr3uxgZ9wcv81DLgX4ttnNiPAuTds62Aa1BCxroWannB4XQ9YWCPxmyU1axWNw2t",
  "key37": "3iovjrMs6QsGNgeMupCWz2kqSGaDTDKuxHuBpgkHbMzgsmNjesF9eiFJsXUbm133tM9guCBV9Kq2vndFxnVJYPv7",
  "key38": "24goqCrL7RVH8xjoqypRU8L89mWuy7LimzUYfitBSmuyGJuw7gZJU1mUMWVRWhPpqN4wE6oq1qrbzVEe2QEDeUcc",
  "key39": "2iXkQsUNg8otaAMBtZpMAEiuMT9KbXTSmS39ZwbWvyWn54JGw4BPhYW1QRMcJ1UaH9S8A2CGFrkwL1vaYiqzJs6H",
  "key40": "DmocR7ML5vm8byNKjp9yMjnPnNyW9Vjeh6v52N35Fcb43VMquBeU8tL4or8e4vhmwsmWbE5HbAekXdv1ULAMkxD",
  "key41": "2bfUHQn4Z7RSprro6bmiMjhctYZmwFomGWHSVg4DsKFEdKSn4Mq5zj2LsK6Cpp6nscrw5MaaBK8eTPosGvseKqA6"
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
