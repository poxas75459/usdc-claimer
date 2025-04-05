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
    "28KQxvYH1H9uUVSSdvbxCsQd4ffaumRgW8BWBqWiQuMM5HAMrsCDa2uPx8LtZcUTU2T3wYaysXuzr45FCvB7RjD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ASVxgChLzWrMHmEQtU5xueNbHWdb8GLfpQjLnRs1uKfDRY9ayRD7cYPgFYKPpSuzYvxEY36NBx57ZZdMNtXLRqK",
  "key1": "27WfGSJpcHQ5qMcKXt6pu4gQBn5AUDJPhrMQKf7BZ1awyvutzjujV6bBPPhtQA1BxGpc9rLVjsqNEB7aPtgavp2m",
  "key2": "3wjgC6oTeDAd79SKmTexjspJ4n7brGwpm5eDq9dHrgYTxpLgWiqrR2o3Xi31j3U8ByJ3ckNqBA97XM2WbTx7ZRmq",
  "key3": "5CmcdnMymLRoQJi2KvFsGKwmff3r5N9y4JGpAKCFfW8PRUyvjJKSAcZ8Qqxo2frf7QxsEByJdbrivxfnZtEYAdWG",
  "key4": "51Qdshuncb2ByupxSgEG3PXF9tiqaxM8FzRnmFvkkAAnFJs2ofBCKBH3TNzcbxjvWd9hUfeueYASSoNkzpUexXNL",
  "key5": "5MvvhrnK8KWFYTxCdJabv8xbcSpcPVfbG3KGh8rmcKaGbLTPtavBGwkDAWu3LH7iPFi8qnGEgHwfdmC5jJYYeP4M",
  "key6": "41Z9Ccgf1gCUHk9Zy4yUEUsyGQ84KDXACmNAsMcy4k4dwGicZzxRFsEQMBbgXdHkgWJZMD5wr9eXjLzifSCMi2wD",
  "key7": "65nmcHCSB13FT9oi5yqGGP7g76XwErFqJfghCHeHuVSuGh2ZJvVkFSyUGXoK8FkvTFEV7jWeHLTrZWm2AmwUt38N",
  "key8": "52RYGeBujiZHTueDNrxUVLd7d8RWyWqg1C5F76Lucm51DWCn3Dg9r12T8uwjEcWUUQwU6J4eAthMtonJELWmVTuY",
  "key9": "2hzHAHLKEEA9ztmLytyaLxE2gW5RQmtaTSR7Y6TGgQosBCK9amQDGVRpq3QYfMESx3PRb3CLzrHMGjjHSGrbRbL5",
  "key10": "2EWCiAmod1f6P8iAuoqRFCuoPzCgcbZ8XYUjxJUUdqP8booAXw8svtH239myfSBGLtDK8dSexuP8yE6o5QAHLByg",
  "key11": "5Qzydtig4zcs3fw9LFJSbQr81YVjVjB428yxzZuan4VX1rbZWr8QU3j4NKhpbG3PmR2G2VSbRWh3i4a8cQrzdaAT",
  "key12": "2LALdKhTnGgfzPzbJREonGkFyjLDteHmkoPPny5antR3gujLUD6q1oNVA4NsVTAMmeaN9DVxuDSdJHRXNrBroNN1",
  "key13": "2dDf1cgV3LraNhdBSJbp7a4L6VhHHA2HbzytGWQKsStL7zv6mSz3jRkocTaGcPLpQwrNqphPhVvXKVQQQRixW3k6",
  "key14": "4tjrg8gAuxCZBdLJvaMFEB9Je9wBxGmMZE5RJnv3DTLP68YhcvgxHToUi5z2t4MZCZvZfQGGCDAW4oYAT9GTzbHt",
  "key15": "5uMpM6gDqDaH4wNChtgXL4DSuWhLYm2t9CnLwWn5U4Tu47MRk8Cg7swgtz76vSJUM6Cs4eHRM3GRihgKENfRAXGS",
  "key16": "2JRuD1iTyyeKLa48aLx9ipNNtr1FdtFZjENtyfFaogLghK81trrGaia9BHJZeBswFqfooa4dfYf1asggXzh2BX86",
  "key17": "5XwhPfvzjAHLq6mC8bmtpLC3qqEs8F44W2hVsBJwYP62DaPfxXbJYDLLi23xqZZeaTQP59aouRQ5AiVscnm9jgAJ",
  "key18": "xd3Q1f8BPdAbmm8hgF618EtCjR6nHRKmAxV519DdkjHrsrdZJNhQGhc8bGGU79AeSUEFQMjktnoNQfrtjyx8RJj",
  "key19": "3D1bdsRHrveYeyAALdbkLBDkAqYSsAGxBNbidMZ5TfgHJCYyPnPH16rSy461DBsbeDiGbYAnAYgQJYQLA94DLZng",
  "key20": "8SJ4TdaAxFsgny9XydK3eeiJqqFgzMU6oNkr14x7CzviWH1peKATVHP8KnhKs6NgeFC78HW39HVbeiUArEP8VZc",
  "key21": "4tkfd9AYXtjqQPaH1fCCr5q4e8DU9kM1L7yzGzW6NEtTfFQGCK8tfpWUWanLSM1qgH5ZD7AMcFeCAgUjAAGBJu7m",
  "key22": "2tLKedUCpZe2mHgWNNH715xtDCMSUTwqPEhkaaJQiRcFuBsMNbKmHq81iLZpYqwU7rH5cfU7dHxLwDWVUbdSdUU9",
  "key23": "224XJF9fYtZuSq18Gva8rZcZJczy1VgFRKH8MPKu9pG8RSprCr5iKWvviuBCVuXtyGhzHqXeidTXVKiaciZcZsPE",
  "key24": "LVRr33TEPvaHnrmkYyWMqTtscuQRkQsrEEkBmje7KT13XDVVfdgqgbchtQABosc4P1pdv4Ywj1NBNcHV3DfZivd",
  "key25": "624UWPLBqrCgVChA2D2UDb4LzaastkAuouj314cf78EwNZLyue59TUeTjtUnjLMPDjV3sBArtaEHpLuHxik2RL7s",
  "key26": "5TpA4dNtCckrdPvrnX5tyC2kCngaUS5N2Ytfp8wJYCmcUv7d6Ez6pkNEhYtgQg5DvxRhsunUTYDMYeVQWGQjsgGH",
  "key27": "3Zv71fTjXf2pmSkAJCzKPeoxcDemerVPdaYYpxLFkckxVATHmSBkAbi8XonrmZ8GLpZsE6FNvpxFDEk6XATM6Q2Q",
  "key28": "2Evg2SKyn1CwnAR2tCri4HNpy6DDvR94p6WUcFCvBkbLShqhXVNEVaGgLsc3eEP791BiT7voEm9EnayQephyzLEw"
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
