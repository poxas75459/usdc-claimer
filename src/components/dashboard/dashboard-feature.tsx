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
    "4NMgqH61iW9i2o14xdgeZ4nDrMKigCFbj7oPw9eTkxrJLF8HNaTgp3qMpYiKe84iRSwMrjjmSxDt7fWFPd4rZjE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTFcsVojQHrozxftrXD14tARyWKdMg7P8WmbgEATnWVWAwiqAZoU5oSCrRqnmhvb87NnLRv2uah5WarbWR1AUae",
  "key1": "3bVjDRGKz69eHQ6GV4kzEJt99QAnm69A6jt1h5CAWGwWi2xbu1YLsrbWW4sWbAFHRdTpaoCUWf93uqR2rUURG4H4",
  "key2": "6juMbB2EKmZQ74pcuAy83ajFXPMwH3zfXnLHBKQqLqoxP7yFWtqN4bC9yaK5hP6RcHdYgjn2ShBXXuGUGYEBkcq",
  "key3": "4V42GDT84sWeHWye6EVDuQgnT3gAfDXZVfp9f1E9j8MUYYEAf8wi3e5RZ7yMABxm8vX3TRD3Ean2tFbEhbd2gjq7",
  "key4": "4q2YbhNN5VzUFZvD1yczoGgTM7VbZC7o6G16wEutxnC4HFgKamiL3yWDFQa5H8QUsPduUFPi2rAPZfPXad8MUPv4",
  "key5": "4iajzUYpL7uvvnYUc9wLLTuGKQNEZbyNdfzNU46qVDu544CoJ8gEFEYvkrZ61K448zBp5jyAARNurpf1ZKa2NXbx",
  "key6": "3SCmA6bSZ8qTDSSiwx3WTdoePgoKjRSxYFXNXkiWvfyzJURjMiYYmCrbbs9tKu9TwEHNrahMHrs5WsgUS34XomXL",
  "key7": "ag3JUbbRhJ9GqeveMsF36xGJnYvKLpUsuzrbZoixHDuZZpq9CKjtQTZGY4zhxtzLfo5XfcPxGCtREsDWJBSpyGc",
  "key8": "4yHbe2Mgtz8qrHLKRDtbg2Wz7LcdWTEDNFdbvFzNJ4okS1LM5kqfUBkfpCKVeY1Me3AGWQveTy4FtJ7pyEwFDhV",
  "key9": "MH4JZ6BiNKQiS7Z9s6BuBsT1cW8ftbnnW1TE2A2wEhuxttsfXDmuLmA2tSxjfj54hoQ8JngEzZfgyevSGVc8Vi6",
  "key10": "5JrfQhhR32NPgybkB9Fn32knPLECvQ2Z1nZPv1T86h9dU7xG1rQjsTBzFMo7dJiyoeXq51K9Us9HLqoxBN6okqBQ",
  "key11": "9uSnZQ1fQRYcqki9WPQRcd4vmbiK11dNgkWDhHmtnthn4QFdJerAGSZ4fP32B8wSRpTnRJrKTtGTwcC87oN927p",
  "key12": "4gDnLG3Dp3Y9FfV95vET6YNSZZ992yewkeMvJ8vSw5qWoKYdSGFN31Xx3EKNd12pfEJj5Ghd4VqRJ7bokDPVbdnp",
  "key13": "5YBh33DZ3uTJKjhrgPVXFXquyBF2WaJoZKU4LAtL1wbTaVUCJKVqsYFPtVZTDpaTq4dvgqfUxRBYcgtqTyy4SFEU",
  "key14": "5esAtaGAvnstX5aTFQUegCqtWLCnHbgdNPyTwrZrsGAeMk4nbCxWYTEBduFZxVXPUu1VFcby2rYYQGBEroF3sGVT",
  "key15": "5FYMJ5k7pHcEEvLpjd4KFHUpSLGS4NUoy4qFszbPPYcyDhQyhv62M7FK4B7PdeEqZet6aFrXgjKLT6bsJ578Acbi",
  "key16": "61KtbNQ8H78KuoaPoesDGU9oXNy5arwdAbFBvF5dkPq5PVvER4MFYZ7bs5WKQw47GEp8ULMRtbuaZwBvLHHVNsK1",
  "key17": "2iJFEyXA5dV1L2CzwJvwcW8Dbj3d1iAGVgbTYJNBinKrXvQtj4BeBan54aoAmgzcZ67RCTcZ4KHJo8wgSMjtTRuP",
  "key18": "5usxCqaCgST6LpRZJJoAhxjib5zprSTEDhcDwFLoDAuVqVBP6LRy9Pp4tfMtYSU3Bny5dpugm6qExpVGgcGXe5qp",
  "key19": "wD1pBevC3MGCNGRWWUQPhKU1kRqeTw7YoD46xYmcz4kzZJasiEvuhKeKoiQBfiKbqmCPixrJjNHhhjMN6APaWjh",
  "key20": "5bumLt2K85uDqRD6Qbc5HhGy7k8AiywhAGRnwJkWutn1weZS1fcL8kv7cFHyhnUfLYMk2kd2UVYZs2NX3fEJChvR",
  "key21": "45KNtDTehYXut245zkYTVwwFr2cjfcJkvvD4XusDoPyboHhaaQu33L8rnpdFvVG4bXgs8ZPST1QPdkU8wrCFqDWM",
  "key22": "676Z9hRtHi8ojX7HB5FNbwRhTReXWT1uw6iWst9NChibYPHVaiEA8dD7DWfMaRsYbZK7r6RZoRRFxMaQXtdNxNSY",
  "key23": "3Tror9wfX8hiAGHHGFJMhA5Zk3Rn2RVh9KYCxxrozgMn6zQmb8o8ZheKaGURxCN53GccJfxJ3d2jyHqy3MjvYiRG",
  "key24": "4sFEqGVqDUPDBpgP7VGbC1i5cEvAQ42AqAfewCNcp753uLLLhih6S7ByRWJgYo5JnYPNpDQdSnwTvorXv4HTiCnJ",
  "key25": "64zxqm6w1QVmLCfFD3zW9zvcB1XTCMtx7AubKWDxZrVj6bXsZfdZfXY2kM6CTR9uEtRs7tgwL9RUhgLaNTkSyCJc",
  "key26": "2oeQyc8TYRYFmrUHX3J2Y2diLm1px2q2sNCqHFduop6SVWhiQ5TmM4SS7RxHQ3zdvSqRjGyCERvV4R9b6bCrChg2",
  "key27": "4Ak8S1x8BjF8jAEzLGnq8B6sW1pbVjErZzMCMkrLYqTbwEZVkvhKR4UsGg46ZKAQReWVsPR9ihahkSvtEbWAwGfz",
  "key28": "5qGQ3t9Z7BuFHDZgSiUHPJUMy4fGozF6ZZFPHSDEKjSq7eikURZdT91S8RL4bYSgZ97C3wnpcfZpeTqGCGS9UgnA",
  "key29": "4kjWiCNziXDfa6SDMkuj6UF9uNdVj8cdjn4bVt1opUADVybUQC1LADE7hiZ7eSwJFJwdjBn2fuo6eyiZjyHNftXS",
  "key30": "48ZxoTHriXQyLca6MdFxmiUNL1ykvaFCcUWssQyHFjfBvtAMNu1Z4aG6Rp5agpYF1dU71sfF36Sghs91DcrsuT3k",
  "key31": "4KwivPfaGqQPyPqMRGd4BwEv7nBAcdArYXg6ZD5JCkXyU3s3tCHnu7Gpqg9GA784SBkJCFhjEqytwHe97YB1tfqH",
  "key32": "4ZJ83E4SKYN7C45DBpiV78KthiXoFJ49R65Goz52x5dqadAjYtCrfRwKznB3VfZ4m639jWj7BDtCjbwt6g8vwLNa",
  "key33": "3dEQXSme6x1MTSW1ZDx2HRPEU8C4KhyBUyPhrMkNNmvsstDMr6PTqqWbPypF2HMpTb558ZFJn6k2Q3zyYVFysLWT",
  "key34": "5NMNbm5A7htT6v6kGxDjVNg5zhTwVjCLoB5cvqPoGAXWxdvjd4DtSL6BMo3BW4XP8E5feB285xGY9igR3pBo89mt",
  "key35": "3YMw68AW2YUtGzDar12ZGPWkPq31WaV6dbobzQqNYH7NiA4HpAaK2WC9z8GXQBd6r8RpSxckHoyKNvGRCN5nXhdT",
  "key36": "2GaWkU7dcXoHKa5KW3EeAMSHQFseEgyQ3xyjeT38TDALqjLDNe2rfz9tXdhhFJCQNyqTdEbBDobKk9RW8oya19aB",
  "key37": "3uC5giqTSjCMA6wQDzjdQHKHERyP6GxtrvkUdToMsVyUmg1QYTa9UCvbCHYUwsq7Kav1zST8TznduTC3hSoJ6te9",
  "key38": "5fHkdkLXmVDEciAC1Wn8NdR67cSfavJAAtxghLGrJeUxYjFbBBN9UEvACSSLcsjPDJv9pgwkcUGyKLsFTDcNTu2J"
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
