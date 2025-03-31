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
    "xN2oH8fqJGhY6ePcmeBhtWRGMwaF1SDktMjhnMmEFYQoyBouGVzdx6k9uTRAPK43ZNUCEhEqJhwJzY6A1fkB5FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kwd6XyzVqUCegbBvDVBUSwYmU6B9bLbTZqFVRuK9cudMKPFLz15v6cWqgLtk9A2S8x7oWj6QJaf79tdmuBZ2WvU",
  "key1": "4P5nCu3HzN2dipxDNqwvwVRzE9hihwA8idZL79XTMe5VZKLmzx7XgWHnWweatWCvqAPe79pvsG7WfH6YzmXwXDwA",
  "key2": "3hTwRm9ZNiwBDBFBQmLTN1v9V9rAPtmtmixfVNYExYyi77BnV5uEPCupRgJgx5A3EtpKnENVkjv5nrN7gWb8mUuY",
  "key3": "398WRpFdt9vj67hFUxgfdNeipSa3JBGr4uybACWBZ37Q3ctSeKsuWAvPyux9nT6QHZ8NTnyZ2Eq51KBvUCMqJUrN",
  "key4": "Bg1td5Qjh2MYzzReVD2ohYzFSDhyYuEAykvo1BcN9z5fdnXUZ6fzkRJTtitZwZ9UQjh93nkQPedtsMDf1c2nmMK",
  "key5": "4rhKT4KrbeR35dUoR3s2gN5J5ETP33vTeaFP2RCY73oZDV15dePrqk8PHEascbiydMHkRj4zMpLyuCSNjJRhs5iS",
  "key6": "4xNiVoSyQaTfHdN3HJycUigisFmzcjLCuUahMovrLTsDPm7mQmiWYqHgDS6oYdGsmCCAzQNz9QJ1ZiMmYPSi4TNU",
  "key7": "62SVdJp5ymFd9QTzYtodZK2Mssv55SiqTDcFbtm3WbUQqrPj2wM7YUgsMjezS63UrG8d7m9yFb9PcBR3AQBGReTW",
  "key8": "2ZVv4Yjt2gZp5sitGYeewa9KurAS6GgeqowaoPX3MBBEJaHytkmw2yLpStm88xwBQE8XcVqeb5rjafHQx1YPAFca",
  "key9": "4h7PBd4u5k65qMeCNayumMW43mee4tuxPob2qrcqDPBMHJshnX7Hzp6mqSZBXscSLLrsZPEXKQaoFjPBjdGLzTtD",
  "key10": "f8vuyWJajABcojcZyVxsY4xGeopve6CuuKrLWxWphGLtGtuVcUoAijhbqYggVDp6qNmUw2B3dTFNg8vA4LJUpHj",
  "key11": "JjBBYV37GyZUwEoxR68Aka3FaxXWahwja8kgfXeAaWLpACQnfwQADeuhMKZ9QZ7HoPY3UTighW1wdPYkGPW5GFA",
  "key12": "4N6RnBPtFUd81mpbmofxjVhdBTKva8BdDti6BjrvbMWtLk7Gr6ZAGok3NEkn6uDRz9JeUFTyzNs4zRZSwU4mUZhn",
  "key13": "Jw5AVwUtPTocbe6zgWZwG6P1sDEScvamzE95976QgeKmhTGh95w2zEDaqfDf2312byfNJUHcbF5dy2woYqVPWvg",
  "key14": "4QwaTd6ZXh8pZNhEyaBgSigSedhcY3eezXhSUXUjpUvFvSpZMpPrDCj3qaLRtoBY6qPNi8whVrL6KfvBLfgb3Cyb",
  "key15": "DteQoXGa6AxWaRNGtHsG6EguN4eghTXrk7H5uxkLaUHfM5Zqpq3UANbppbhbssvVxuk7nueHhjSV8KaMASUNRZz",
  "key16": "47sTtz9yY8YjFGo1i5avrLZUDiaJrLSPWeALz4ukdXVJAevqsS2QptKK7UgPWNp5abMathubqnEwub3SbxLGwd4K",
  "key17": "xt4jro1qr4XdRzUP5dW1tFh6TL1WE8P7ysnwEcRPjUNh4J7ZSd1KU8P7RyRwXRDaNmWu6FzWNEAot17mMYSu3du",
  "key18": "2MZr8Hc7zmp1yS7s4XV9HHL5r6TfAEsHN9Bw9V1Xd9WB6YcLJTh9wdAJzinCS1JuwXPqK5FbVexrRbezC3hgQcQA",
  "key19": "5KBrHaUKBb5itMqdRyNS2KP7yKb6ZLEeorc8o69QzEZWVNodT8kv3x8KgHSQ7m5FEuSsLKC9P2VBBuE2JZus8ygt",
  "key20": "xqn5WxqKLSwYYQczzNsSjBSaMWimtzCDd9JXaMhReMZKSEvXvwiT96KLvNNjZULbt8R4HsY2JCATpvxikiCrxBW",
  "key21": "5DMD7tvmavd3hoBtq5ogKigjTBgjcXGRc52RBdyL9LVgCeNLsnupeqxz85KdaZDfeagFeWC9pVvEKoVyidqNtuKc",
  "key22": "4wHDUnpNF3x5CFpQq3AzQqYKk3kjg7RxijGF4EWzcLnAUXMbLpzFvqL3GmsqEtXDcGPsztGvoobhT6iXMvzXoxsF",
  "key23": "3qnhhwqeq7QagnSUSWHfFtbPSGsS9hR7apEAPaZ2ggGYtVgJwacFpCHRnr3kNS35HY2Tr7f9XTmVL1mSJp3D7Gpt",
  "key24": "3foBpHBkhUvBfpfQVFa56ep9ftRiNESaUypzcb3WgYDYGvzgjEm5AJpe2xjdSLaYDYZDYBm1aG4PRr2uWoQSABEM",
  "key25": "67eYqFZhNVdi6TWwvquhJS5TFGnoXM7aEwargwSxvVvXHUEKMKRA2LaVj1VoFsvTjVSBGJcZUFZw5n2BMS5hPtj1",
  "key26": "21c3crxfHYgLDWnd1TBrZciuUjvciTszvfoQg8xBvL1suzG76udKYQExVZqrb3CML6wx3YCup7jYwiwFK1ZWk41C",
  "key27": "2ZqMh6V31Lt5LnxmLSt6CEKotnPo8DF1QmD29176iA9ZeTZqZGiHtChg1zV4ptGfWU4Uxh4bNCpWdeXsTPpAuSbb",
  "key28": "32DWgR1uxhzJJm7EzBH76tWGH5ksj9fcoPG6Nak2Q8GH1UPyY5azRFZMytpkwNqrdqcgfCYAzYDkVe8FB24NZRrs",
  "key29": "3GDuLhRGScZzoBHZS4D9A14K9iiGhNuhHoHTtgZv6XMBPjLbTQ81EVU1ihw3nmTMDVi6iMzJAhjkA9iiA9SGqE9K",
  "key30": "2soRQgHCrexiozqd3UP3oRe8AwSeygdJFph38ktXGknxmVTvLeDJjxPMoXgEEnnigm1ctnF91LNqpzadbh9NjQ5k",
  "key31": "4YBSvhjv33XzLTAGnv7AkRs37SmEszqAHWo3xj1nt6tcQqAZopB2dmha1vrGE7rpewxREMcnzaPXMhnjqag1pzBo",
  "key32": "2SZNvNUDeWHz7FLw5Qn671WyVFD2xCTQ2fiwCfRdM1FjTmccDRufWPaj621xcFeqZe3GPXjHM3EUkkaNBSpoGZsn",
  "key33": "5fDk1bs1qtYRj7mHCJE2mjsR9xGVzZSr5wFjvj4mVRL1AnC3NipnH18cdwprJ4NErn2H1awGkUtvT1zGMDxFA8y7",
  "key34": "3vWajkptw6AH3TN26kaLuwjwhCfb8zFuTkYc6GmcSJGJEuqHzpCEUDvJcLmEXjdYBYSzA5kadRDgeq7RRphYqtR3",
  "key35": "4iksSLJoFNBLAzFVnHk7KhRx4eKgCJjXrhpdexr857XqXXqHfwG5MdjKeJjn6F1yQz1cf6H6Vp6jPBLdXYddvYtY",
  "key36": "3VCyKp3aVvvsXMDjp2XfMfyccfhZ7oJ3kNtFi56eevSFiPTLTZXajBqjL52LrBiAGauQufgayCrHPsbdicFmwWZX",
  "key37": "2XQe758spvgN1GDFMRF12JNzEmFJb57W5mq6u3DmPyxKLnJsAqugQnb558dwxwan43aHuGHGgeGePQD969eJVoQk",
  "key38": "3dmDpE2gUEnGpCLgk1QBpAw9mNRS7VcHCzbTDK1zdrKmq9LroAsLHgys6gGCc2gNziLkdvinHHCEgY1LUr7GsYSd",
  "key39": "XkqBQc1HJdsZZhzFcWQW6SCeCkoCzDmBkjgGx2SpETZVrf4TaWif3UNBHTsfAWUupjHDbEiyRtgSFXw26BvH6GC",
  "key40": "6XHF1gFoCecjuYRTo5UVFuhmtrV6Yji3v4gAP7aNAYDqrveLSRuj435g3zkXQ3cgnwdkg4vFExyMgdoPJjHiaZH",
  "key41": "2bob9z8BGjzu1f2P1eppy8KeHiNUE4E39qbd29e11kP58G8fr9vxtXAXsLTwtJAx4n5sVqHxRtmHcpszqtg8su4m",
  "key42": "57qxH6LLxBeJutULWUkEtNDUotGq2T2EAZJKdBFSMpVfcis5jmvCRMsx38qCLNWWs51T2ZHmRhiJ8UokyUvy7Vh5",
  "key43": "4E8kWKnk9kJrgQMjFoYBzFeoyzr5wiuDVALAqSkvGsLhY2UQJVxkERYX9gCUnnFwaKUd4AHCxJBHoxa6GfrNbMnk",
  "key44": "Jwob8SgARnYQS29DgtJ25GcVB5jgihFUmytMTZ8Q8eeYyzQ4dkh8pWgG8iEQkqJR3hFiBb5bsn5s4FKqLrzZjeB",
  "key45": "4tHFgu7QFXy1pntGKFrWrjvSUW7Ka899ewtUDodsDYAYFjsavti3byv3nAet2BsKzJqUPFovoy9qJ2hoc3vks9ND",
  "key46": "4r7xz21b1jWXBF1f9VpPrPiMCYxJqqGL9uN7xBpT9fme7VQGvis491Qc96W2Ye2zg1oESGci9Y8HFtR5iknotPRu",
  "key47": "5piys7e2dRDFrhHi5YQ4R6GkG3LNcmVDeRJhtN8uCRTTuibmvjaDHJFVZJvv5KNfRkSk6GDs9ZTXS58Mr1ZYRTFf",
  "key48": "4rsEq1AAWv5cXVBWTZyHr2JZwDYRs6PNwfZrhJWSTNUFq6BRpBfABErhE4UnrVzK58bCnCwitYfkgeuWmrL7qVuf"
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
