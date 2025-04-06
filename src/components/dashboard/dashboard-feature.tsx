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
    "4PdV72thiYGPjmVwQFSy152imGDoquxsp7aVL1bfNJSMSfsSVw8yvKjfxqXgqUJCeTLQ8cW8XWNChBdFvKQPZ2nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBkBxz9ryJzfesv75UmkbzPHqwchnQsJFMcs9bun8m9Ue8x4hcFb2nR69Nxb77fPk8bg6tyBHh3Ue2UwBRgrEr8",
  "key1": "4saMzADyLdMC5juoJSQSu84xw985bBwBfrAvt9adycw4bDxftsdVaEr14un7w9amJkyNCPb2V2JTMjQXSpUbnVzY",
  "key2": "Mg4XnPne1gLc2JUP2xUpWvq1Z1oMJmJ46qmKFTu6Wrx1qm5xnFyoSSBrSx427aHyLzPYjGvKRuNpYmFYqgeCFox",
  "key3": "2rfwRpiy4Wwn9e6AEor4PnXCsntFijq5X4sqix14RSnHw5vEu27CdAinGE4E5na5tJHDNgg1pTEybtetjwij7cf7",
  "key4": "5Qgmcg43Xoni6SiRXZdqiuNAEuRhnBZ51NUhAXpgsk8C6gLyMpi4DY6m867ScxAAquzDWkRkNXBi6N36qdkMzoY1",
  "key5": "61LQXU2T7xKLidig5zyGXD559FyQh522Y2Wp4EFRZfECGWty88uVL1v1rKmSrxdgEiz4sTrkU83bwFSw7Emwc2s8",
  "key6": "4jWQVhnQ7nr6ZLxdXcUBdwChPdAMn9ojoX9bkMvJ3JUJtc1717DXvMwHKmLm3XsmVTLvAq5hgwXXN1ZaRSyD5kNb",
  "key7": "4WWrWwbhjtPUkhbaaDHfoMPLGnZStNADYn4LaBBSmsLCQfHJErCpH6UnNidYpshQtUY55iTyfMTUZkbVRiWFLk5o",
  "key8": "4HzaMgFki6kbZJqekmC8VXFo8NqMDbWNq8WzDsNnM1GbJrGC6yfaWYjUoZtpL5VMsRU7VQSHQJE4cqFcb8LSbsuZ",
  "key9": "zi5R9T7Le2xvCo4jA9uf1AcyCry25Uz3uHstnrppRrMmbjJZSxyNbDzEtKFYBs9d3ZEZG3hrE6AX7PTht67KrNc",
  "key10": "2Qf6XUWnhJDUR9XPG5TP9x4kZqE8qZhHW7kgSVnEdXmPP8XYo5ZuVDMnCwSYF1bTWheUtNLWJWQ8RE35gDvXu35U",
  "key11": "2VV4t9GgwN6CumJQ1ALRthxo1aKL6kBbC1EYdemPk7G8ggjTWByNH2jDkC1UeTGvjvYXmB2YehyXkKsbJddw6haF",
  "key12": "2LFbx4ZeKM9v8Q6XJvVeE8SRiuz4Tx3XQ6zkPzB7BuSxswaSf2NbZ2xEPHzwNZApEPZBbg3XgkAwu1jq4ZYiMvVH",
  "key13": "2W1bxnnEmYuH7cGXMSqRJeRwcQpjtWF98xuuB9AEf3XUtFfECWhLNScu2YR4gM4QBPMPWT3iwTGoHpUJUEJJgkJw",
  "key14": "3RmYWLCsnSc9NvHFXjTgmRqNo8DRTXhrRA8fStFkGgC8UBf42BEuv1EvEJZdocpQTkGb39p7uwixJgSGkERV154d",
  "key15": "3az53TqhmVsQUdzXtGNddm3zoLCUymjMqeysKjt3navJzwScYFqhERG6YDDNsriTXXjKyQKEFke58ehdGZpKg8Jw",
  "key16": "2zkHxp9oPp8n6qbPmms96BfmSjaEmrYPMZt3gXLjtU3xPhFmmWm5XC1vuEzvdQR7EdbnSXJayzgTVVsM1SUuEaLx",
  "key17": "39NUQM1jBWUJhVf5g7RXcRJmbu3MfFpDo7Wosm3euq67hWbwd3fJf35jtTQNctTRfzzTSamSA88RQX8gTAz3KSNe",
  "key18": "4dATUX8Mdd286zvQQVZPCFqi7YrYmk1v3eVre6U5shu8GydJ5qYtD7MLD25KSphozMeRGvjwDFfRzLCaLuNTkhRh",
  "key19": "52KxN87rukPkMzH3NXFHJHpXmNT8iq5HvXk1Bbdw5AEzSPEuS267dViVkh77hkW3NjvMveczyvHRfBmDbvspvthX",
  "key20": "G3FtvM4Bnw7UQ5CXUQujpdeKWTB6SxhTkQZ6uyMb4ok5n6EKmv9XYdz1oF7rDmavm5CE3L76r36cwRuW9w57Dvv",
  "key21": "23fwXbSp8b58ban6sGyjaGuV7zQit7EQmSJTmsxBfZNYBmo29MCQMfg8Sn4zMnBFQpPyoAwByCJzDyULKP8U6jRg",
  "key22": "cWTMHfDWGBenKjmYVYMD2RRUFNvfW4KXxR3DKQ8UgYDmQrsbSyYt1NFwkW1PsecsGBrgcNNZT6fFCQTTeLG18gG",
  "key23": "4BfCf27bsmQuUCzPgiwABhw8td4imEJY1qxBKNZuf4MdsU6mTXGieD3zQQ397sw6p1szacsbN9LhCe2NCc7hRmLK",
  "key24": "sg6KRwPTcFJKV78Xotniy5HuCkxiuj5qJcPN8EE5kofYyKg1u2LTjHUnpEzg1R2wUNvvxH5siiW5cJ1jUR65A1E",
  "key25": "61oHktSb15RpQoDbnJGgW8MoouiaUeG1aGS3csoJaw4z18H2Hajft5qzsSyFDHdLRTPCLtNg9mL7bNWZzrhUyCnY",
  "key26": "5ZsQTnnGS2YBrGvfe8aiYEjGpG7p6b2nx7qBUHDJpJUn1GdT7ECaFQWpJQNG8NMeVWxPuojBRdrLxbBQAjpGFJPi",
  "key27": "5jvSMTwacmSnb2RSuVXzPQyS84XeGTAokdUnfAz2pA2LbHD3pHtPzt7SDX8vH7R5BFHd7UeitwcFKyh1f1xAqfg1",
  "key28": "3Ty7Yb4g2mtgjAvEwDJpduPJKmqqmpJ1puYTSduaEFHMRkFg5wubmNLRdmGJn1zH8tS85D9BZWZ5V59WZxnvpKHA",
  "key29": "3TV35Z5QYb573P55Xh5QMtSJmBKLw7uRbvRqF51QTVMTuBSWTduboR74EBGvzZdKHhA6ZfoHeD5TGH6dKFfqJoEP",
  "key30": "5fSX8uX8e1RH7sEFamffeFg3uJdLFk1QECxcCtNtW4bQgQ1Tcbj5vJSaMQviamaA5V1ZksnPbCZavGBvqTZr5Yi9",
  "key31": "2WLnHswuDJ98GECDgkf25a9sSy6AvcTEd7mMgKkDQmgSvLaU5LFkkun1eoViSHnnxrYctEU9fwTBTU2UwPHXdi5Y",
  "key32": "2uxD7ABo7AQV8zxJvEJztGctseX8DssHJ2PXurKDzMcPUoruWJ9wVnq6H8qv6GuAFK8mhEsTyyBHrFaoRoC6y7rd",
  "key33": "4kqRSRTJ9WdqaBQgPXYiL8jDwNSh1et5TxThbqQGcFf2JwCwZqQpLvvGBvuei6Kv6dVjWUUz4yymjavDenQ1nKWk",
  "key34": "5DQ6yt3z8Q7mzWg5962c5nSawfdP3cMWGqXn3FLM3Ztc5GWBE8FcrMFpev12pGFApHKZrdMsTwMvpPXrXoMqWuT9",
  "key35": "dSNr3s5qtJLYF8rgax9y5daMm3PmgSQsSwqByopKcirnEt1sS5cj11Hk47hYYihmspiT7vGdExFxSxcWUt32h6r",
  "key36": "rRsdFxVf5Z1BFqAFdvZdyrbLyg6p36X1YRJm91WRddsxeGxEXhxNsKvbfaJ6nCsP1dy4y3fxjH39cKHSFhpeypg",
  "key37": "5pRRiU6WMhqwn3tEwnzQG4aEsheAQKtpnGdJRAYQgsQpmpd4H59tNjE12UABLvx1NXWoP37KNED2R1fsdC3A19DA",
  "key38": "5dS1Tm5dvp325N6ooDd8meyA1u9tcYbjbrfw57JJ2sWVak1miXMpk1jPdc35m7WLGeqbm1b3vdWmsiNFuA3ngo5w",
  "key39": "62SUXxh2wAG5qFuF9eQiitWJFYEGNR8GuzVXSCojXQSLfsy3CXksc3bVHwprrSJ6D7u1K8hcRYjzKQbvuGLWgpkb"
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
