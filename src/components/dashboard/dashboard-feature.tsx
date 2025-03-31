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
    "5gw7dhDSuYRKFviZk8GiumcbbaPcdxi2KwBjdqZDLomSBCSADBTC3mVwBePTrbWbQh1Qn6M5BoSkGraLVt9MShTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMG1EPyM3PXx36a58KKXiY26hRFdb9C7kktNeoTC1VqmMvSWa69TMasF78tD6ySFrffFShcavKBg5YrAMibpVx5",
  "key1": "4vqrNd5FpByyt8MLeDiupcoS1n3jSnaxvPAufmXiPb6rWNVwLut4BfpswKSNx98bx6z89M91kwsmgZd9j3vpXfti",
  "key2": "2AZcTYGDVvFcQ832SoeRpaCgLquFhoUhJNRWoED3hDP377mVz5RMDheo5ob5VF2S1whRZ5hcjfTxpEi7PX6dhyrJ",
  "key3": "3RJT5GC5eqStDU2Gcuq1T8BPzbEehqR7PR125hzFvaTuz5pAwjJg2t576dAzTud48QMibNETw6cyzkMLeStrBjpd",
  "key4": "TiZJuZPM1B87wUXojcUgwWVLCNvca7EkhqiCNBdziKZCc3rg6yoDvHaAUiy34fmFDuAoBM33RHV95ki2DGfy5yt",
  "key5": "2jKNu3fzLsCYQZpUE5avmPm9HQNx89vW6cSbhGA2xnJ9KUnHegDQoBtUx6uDSBpqvmbpYGwQ11aEWZJXb7kwpBsP",
  "key6": "3wLJX7h2Ctig4EwYpngPf17sJRgcQC8e4DZ8ay2iY9HoYvxeTX6XLWAWpQQFfPL64TKtf6zFU2yFSeT43ZZG2BZT",
  "key7": "ai2XfC8d5HtZvaUyHhyeuTS1SHM7rSvGVJYovaT7si4rnyzyXYeGGAa15Pp7EVe7HuGPmuLL6V5xv223NFVTSCt",
  "key8": "3p2RSRPMyjCAMtwRdMPnpfJvVMdDNNvtVC5SVpLMdHBTHcf9mq6U232udbRoACdpTWxTQnQT3baLu9h7gqzbNTGs",
  "key9": "3XoQVKi3boadurobk6GCaAsEF7X4AhNT1ZTFk8B4ecEqAwDCFm1S4H7kak5cv2Ji4Sr5YDKmmVWNJPa4DXbixmNH",
  "key10": "562sFyQAYDQdsWW4FFCCvuzEpMuJEPWx9Kzf4RyYyE33xmZ175tPSR9sfmtjg2iFLYNqRekjRRTxHdVMpcsoAA4p",
  "key11": "4S6C1Z4P2MkSL7c7cvdz8AzFvh5ykGzSqidYyDpfLigbLZGrTJxxCb5wYPNUrwdKdB9AhtDqG48xaHHHZDZyNS8V",
  "key12": "322oWX9X4crN8fPaFNV3PSxLypQkSpG2Qcnkgo8vddBEJn6GChArHWpSBG5hQpKK7kaWoMhmk6mEfXM4gd82tEH6",
  "key13": "4HMrac5FA36HPbN7Ufx1fVi6Tfn9ed3pXAHGMCfNcFqnT22hMMmh7cyd3KUso4pebmtc254PuX9hNyXHeP7TVbHB",
  "key14": "5QtfLa9GN1zgguiHrhvosQthwDtFkQfon5kpsZ9Rd8TBkGRVt1RgxhtzRQVJoSQZGmwKBmSbZkB35494tYU729aL",
  "key15": "2qH4xzR15yC99xJcqn5zgvB9ppkfznnLoxMXBV6DoCWbSJ6XEk6p56jHqsKV9GcULyxrciKMpF49GAxVG6d3Jz7W",
  "key16": "2rE3BdroKeTVqkXc3Bt78wzF9JdVa8QrZhM5WaSKYwSD1KHaeNiKHouwyTYi9m3tNvkdXDzZEWbbbeyNBDS7tLdn",
  "key17": "432PyMj5N2Kkz6A1K7aFsbtqsw7638BXyfq9uGUPuJZsmZGE5wfSApATMFxF1aG9P5UhbzWPb6JMmKUofERzb6HZ",
  "key18": "GvWWLL5niXaXeVM7thkhuZdN576cHPTGGMt6NaKHomC92HmmR8arLWWTi7gKsP2x4LAkgBmUKhYz9vnT9knUEfk",
  "key19": "5Wsu59ZecKHmKN3g1gjcdeEE5MWY3eBEJqv1apVoyUKcvKqsnojKWAmSRREcCH1u3t5EXjSCBS9xiRvtrb9LXNFB",
  "key20": "3NpYC2ympHvzvP6YVnhNEJGKPDtUcb4Qg6CQUZ4QPeBY3LSg1rifrhN17YW5kkCGBrnW3bSicdKRK9mEBdQF6D5Z",
  "key21": "3VTMxZaekxNbRZCxHt6CQtCqFrKaiC9Y3To1Hun4qFZik4GEa792fqDWkgZFxyadz1usjDWE9EN1VpAEB6evZm2J",
  "key22": "5FnWfcgQNEKJ4KdYjvCr2LRL8hvY4Q4p2dhY71RW4XG7meXhLKtYEN5B2Wtc43bsdfjaTRxyAHrCS7UfRQvM67x9",
  "key23": "5jLrhKajm3wew4hyk1qprSGKBT23Y45MWEGyQKkZm7ThPjZoUJgyr8AL8NTPANFYNvyJaiMB3Cj7svj8PcvhQ6uB",
  "key24": "4LvbaixGUJZc3REMMmvoKUo6VYaQhkne4a81ckrsoLZ6XH4XCLHRjkgnntZNh5wYT9ecqhKBCi9K1TTeW6ukBVdx",
  "key25": "3QGeCSy5y5a8JP1GAS8deX5MMUTHLThVqoBe9XH8PUixHeJQjnbMH3Eb1xd2ZJipuTyGpwd2pFKutBE4So8vWU4X",
  "key26": "5Meb93V6NPpAnRuFpipp3sjKo4B9ynNbLwbvEqRUa88WAREUuqessuBUyqz3Soq7V7kJhjMkX8pe6km31S5vRDx",
  "key27": "TGMHU61FiK8UX8YqfnsybqM3rGu1e3FuitHgozgv9BwFNPWRpcpYPWPatP4mBu2vnU23bdNZKZuj7zje1VJo5iv",
  "key28": "5Vaqy39tffha4wcRaNJLjKgNWYw98vRrNokRb9AER5ARbt66fES5Bk5KZo315XgNtZHHvUYZY8yhhKFJPrxwmXaK",
  "key29": "5EWaEcJssv29tPLThFjf3gWJSLtTgWBRQ6RvpCSuFftciEFzZ9p3Jjb8fnGBqXAki8fGyQzquiVJTSv7jwB2iVDA",
  "key30": "36K5P4gsyWCEwNniyoXwzXhVaCPveK5WupRedn7NHg9LFXkR2S3JXzP1uVeq7yBmiJBNHcMSUL5aa7wHnCe8uK1y",
  "key31": "5PwUyRkNU7wQ6Cv9fDZ8FintFkPAzPWeBB5zbPhzxGTpMUmojMw8K23g2ErmqcZuEtGBqenzB7RN5TVvi5NwxaUW",
  "key32": "4Kc53NnHKoYwDR1BxuMDcoNcJbwz6u4Uhq9VUQ7TyKhgNKBxGGHQRTmhUniNGNmx4hgJLcMqdTn3WA6NPYEqoBRc",
  "key33": "T1W4ZXzjjffwtGaepUf7AB1u5f1LWPHvv3WQNZ7w1mQn4DgpPmLsd6qdWctK9Ps67oSVUkpnuaMZvxjbWzUXQKz",
  "key34": "4Z8RbwYujw9FcKqDs5HSK4GJhdt1vSCMHko53JyMat3QPSrfb6rTp7SccrK3f1YeSmh4ey8eRL73h5tezhFercbx",
  "key35": "q6azZ3uPvMNB4c1XfxuNFL1HL1JuQarKPZmzWjDmyqHhn65TsNc7YLY8GiFmNmb77otkMo2QLJbFqrz9P3TU5D7",
  "key36": "2MidsD36xxtRnS8C1fBDkZjFetXNWDRw2SvS4jj2Kbg6YWaUafWiZwYy86JnCQS86jLgDXZoB2QpSCpopDuQobeN",
  "key37": "2n3TXzoxVfNqJgj2sWFiHhQXhsXFFkyZWZZwdiL7DQs3uCwcFTqt2PrT5mqFCLFdqNPJtjeVWNBhWZiRBR34FREB",
  "key38": "4s89o3F3EFZHKghhEwycgn7H82D62RwS4vKh8cBJMRsTRDUHF9qq4TCWurHzyKLzNtDezJ2n8s39zQ6DwTeVgHgZ",
  "key39": "2RCKvUiztLMW67LLHowogLUywmz8wEnWAj4aQcteVridEjQwMg1RDmBSFG6Zkb9UfzBs8kk2kXRBjmSQTksNAE5v",
  "key40": "38qivLhWBJg96rdjqZiE5sUSJcqg6Rqw682JaK3fo2mVf99ztSgD8sZ8h4UmfRVKWn6YoVVSnVmEodrcdGdSWCX3",
  "key41": "2jxq75dvHXoKvPuW4sRWt3d4Qz2QhjKu3em86A7ohSJKMvT3CcCnJR7LirRztfLmmQg5GYEph9U8GyUEkccVNwRz",
  "key42": "51pBxknQNtB9Fi3NJAoAcDDyp1MqrhP6SCGuMgsiotYChstH8UzM5KPdJt8u9cSTeZKukVJHgzFNVgQuP6jWdzCc",
  "key43": "p4jhPmeMdBJYx3dRzKDy5kganmQPYGqRkJAzzNZpjSzHk7LZdAg9ZNvo8wsZ3FU4JLsteJDt8dobzLP4qMriqSa",
  "key44": "2fPfiqamv6qmaAgC51HidpGw14Jm6QxqmqJb4dUBrGL7YefXpFE34fE6x7AGdePyZrmG7JKUuNw6BAsBLBv3vYRR",
  "key45": "5eXtanA85CruWKBUTHLmSrP68KxNReostYUpaT7uQRB3pLC3z2FFeN1bkFvmw1oxLxw4Ano2m7cSwKUfKfB5pxMf"
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
