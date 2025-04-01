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
    "2ErxBmt1251rqYh6YoGZmeVWk1gqTAwVEeX6HGucazKHNkQqFYJrvYfpuXwzjhkKf58uohqqyJwCFHRyWZkeqKdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VFCQ5FqxVX4LEmJcsu9EYDtkcz7wBzVeEZVoyTxoquXsXPTpVpdkar7hJRqcaYdjZuGuGSHuDptxMQtSg1Q6iUs",
  "key1": "gdaEYb5CMQsTY5MmUbPHBbTgbKRH6EWHb95K2geUJWZnV6U3eLjY6eJNNnm4k9r2wQsdFm4ZDRe7TXciJrQxnj2",
  "key2": "663H4UqSya1YXzqWHgxhwz3Uug5shP6mc9QccxqkiNDr3iyKiirA26QBQAf2tHNAKRAHPCBBJsnHWUfyc9XiUQaB",
  "key3": "5SmVeyHEPCREJSfDz3fLJRg42k5nQUKut8nSSgb6zSgmzYo21qLfGanQmqrCFCwkqpRdqL7Abhc4xsmHB2fnMDNu",
  "key4": "4remNfLNHT8XNDV9uxz5rwRLE6BEW3qxwbSvdwE8zANHgFNHHuv78A5Kx3u2TAUp5WpZ6NU4Gj9v2cXotpGMsCfb",
  "key5": "5CEUdBDjE2oPm1cwgkhXdFAw4EWLJfKguzbPLDmrLt2b9W6V4grC2CtJsdx64v55Mu3DD5mEajKSXU4PNkbU3ojw",
  "key6": "4k6T6Vq9VW554UUdzPy8iuuV2RUFiwqpR1VwRGbZyG131Qe2xTQYDcRCQLGXV6tLZ9a3VxFgYvmVUvSyschYvkDe",
  "key7": "4ez9m3aQaxPsyhnUirv7EtnaFvZjMdPU1Kb1ZeDGUNAqXYMcAkUJoJumwDqb1KGkBTinfpdnuS3qm8WkWzPU7UTG",
  "key8": "sd1Rb5Bbe5rMsda8UNp5KTKzgiHRBiLFJj34pJ8qEPuQQRsPCYxPa7swFUYA2v9KmEc2mF57zocKnQ9evUH9jZZ",
  "key9": "4RS1pT7sNHAYesH1fQ8as2rmy2Ftn3wFhJw23jtqnXW3RFUPhcSWxz2RRhRaHV8rgRSdaeL7s4KT9Wbgu8WR1BH9",
  "key10": "4f2J5YtfT6hvM2rPcRv39ojUUh5Gc5u5yeHRHHVmBJin3Pac5SPKr6M4Xqgdjbur9Qzxy1QNwdcfuvUrLSfBPkkv",
  "key11": "4mcFkTjTr3B2pTZmjbRZzBous6LZ3wVgrshyvcJwm2C8jKMN8TSQ8iscpbHHKAQJCYrRk8iZCkvngkfRCo79R4yK",
  "key12": "35gjxuUTeH5PjzQHucwxnGLMT6mwqFVWUGDaQQNXTKiqXWBk5LCYuAhVuShHakxbUkQez5uUjrzKaXVZM9SQTrFV",
  "key13": "2nskXA5vLFx4osNjYaTCFpWQ7n9AbvqP7zAfh6WFYxtDyxmbSfJc5VkHHvDFMkwNK7VmSEzHPmoSGhkfg4gG3WfV",
  "key14": "79Y6fMudk8uLcxwQhCEWosj6MTDhmUKkTa9bgZ5wLVMkFnYWMBJSKQofNB3B32FTTmvZMyTjentZy6SYH4Kxacm",
  "key15": "4VdmAT4vr1MsHp3KckZ5gFC2aSaGNuWdkQypeYSKCAeLeRF5dN9eBMb53smsPVbX8XSL5C9M2FQm6UKZb8Xd8Fh8",
  "key16": "3J7MfYo7ezZmUkkxhVKbL3M6QkjfZY2J9zpwDvpuGVEhZaKVTUrFTaZ6mpXxQkmhXQuUpsGiJi7KzuufxPYsFy4e",
  "key17": "3a97bDwmheGBSpzpniNTux1aXg6LVptRR2GbiCg8LdXgKqqduAo8KU4B1SKjDQgcNWkTBfAuM7qs9XAJitg7eoY3",
  "key18": "wsMNJU7LmfqpSxdqEDiEFSYbgHUiXvY3CmiTcG5Gs1479QRVvC9vqMaDjEJs8KH1eaQFnK1EJS71YzVjk5h5Efd",
  "key19": "fHryvJPiNVjhndoXY7Fpf4f4DSDVohzrs3ic3R6e9eTpeFBhbEST8eUm3PgKB1SqaKNBj7SwdDEExvg9ZNQhfV2",
  "key20": "474HBppRe1xh97FroVCSFJWJZCmBENtbzrvpAruTExw69AnU84Ujt8z5zX8jeYs5zwMD4HS3eQexT5WDvrbnv3vp",
  "key21": "3jr1XZ3itzNB3UWtfSEGP5B8FwPGk6Ho4e8sGXxoWdiF3LrCGF2n7BN6Uj9s9KVbxvuRFBPe8ES2WzCRj5anjNab",
  "key22": "5CrbfNBDbvxQkw79koNv3s513VwFQViTUHs2iEK7PFvRs5e5wiSbf6qzzKNRiNDMjKVeQ9ARXm2SJvYkWmznHTwi",
  "key23": "5cNWwWP39d7NHBZwJn3oAuzUaW4VaPVztt2V3AN6KoDDG6hv9iaP62iT6kGh1agY21YkKc98pr4pEiSXtFNosWHL",
  "key24": "RzhQ4TZFrLkkdPmqjUwAA8vRvKDMEXtboJ7BYCpwf5nKKXRMSVH617y2uSyGbDwfRTK3X6168RMBranEM6DCgoU",
  "key25": "5oCVRyeSWkTuhwcSVQ3e1BMtvXpK6wbX22MJwAJhsL1RDQ2nAu25eoDKhmJUAjFrvcs1kbMSnYdtZPSK8qKgu9uz",
  "key26": "3uqSd4k6fXHUejUXzBqiner44f61f2hRvbmJbSfwXd13yt5C3xqBecsuLGUigobY2eQNEG7WEbS1dXDfY2oCHJBb",
  "key27": "2gMRy5bhr9ULggRXTYbXr8UjYKfETkLvZ1dv9o6S3HHNKvFjcqsKGD1vGMzHK9uYXi27Bq4CtyvPcMN4817yqDdh",
  "key28": "5C8yijex6FK5sREoV5LjE1Bi5LGiufrHKmVWGs8SWZco3BKh7vwvsDteAUoxVRXQX3a5v4gDBgJpCm5rFRywqL9j",
  "key29": "5DoZyHf154TJHPKH9wgJNTPhwQG6C2Xjn4UhR7VwDnivfJ6GCbqoy4uomRW7exMjnvo2VcJM1viT8ZKMwHGsnB7S",
  "key30": "2jtb34EVQQbqbUruFnodiKjacNQraGzWnsv8r3tWaC2gNE5eSAYukg4pjsw8uEd1vRkgGCDD8Y9Zcoy9Zha6G25L",
  "key31": "3b3LoeqFNqTmEq1aAvZt8Frz7zKK48ZknN5pb6SXdBMywHq6uEfNmpQZZGGrDMtQCXRPBFs6u7FVnGNvSGMcMzjp",
  "key32": "3RVgz1SDnTdXBK7RnswWRCpfGN9hZKp4XJXq5ocMYpda3cMVbKrTR4ZrW7yiztcWxG5HYUtnBeMTZTPDJeAngkUF",
  "key33": "24csGHaTGEKWsoYc5XnsFEkjbg8TncMn7Gyjgy5aYuUiVqcUDd9AYm7qcvZSFsR69mR4xzVq2A6dkgHneawag7XX",
  "key34": "3SzBdkjm4ikMrZFWRELwuwh6cUrmLDjBCgFBMZgNQpcHrTCFyBfc7xZhT4icxVe5sUBfBCdWrM3LKBs73T9VdGyH",
  "key35": "nBkMi3cb9w44bjMvU4Uh9mNMVVsdRDWAJfqsxnKo8vyZbR2QXxB9UVTegqQit9xCzCgp6vciU9ZShjKj54ovoFR",
  "key36": "63yqZsnZLBGRFBEhPPgcj4MiMtqPgbipnQdTKTRqYUKemNJbxaCxhyGyMsPnT6uT1Gwq3kmQDVbTpKS3HMvHBZCA",
  "key37": "5VjATsdTgKa9jiVtAec4qRUV1VwgNiAP13ioEvWvcU9TeAAZUkyHMrxguHyNFS9hzCgzg27JUArWAiUcMAtvq2p4",
  "key38": "3cMwu3JnAd4AV1paFa1tTKjY7BZtCs8ktbdpxVvh1ayBR8KcNCJcQv87Ws6FvWMUDpMWpFzG1pgnCabbE8LaqYGe",
  "key39": "3ht2jv1Jc8VeVqrKkGZzfatWKUDSUBS4qrjiohSe9dYSwsSxfDAUy47LEMwAiESd6ub7WH9nHdd1y2ZE7FV4bgz8",
  "key40": "XaYozJB1DgZ7Vemh94KpW63tcS6uQm6gKi4BWgjxmiN6LNjFtNqnYUbUPS6tkpjPfkoZ1if2CF4DfuwgUHjMDaL",
  "key41": "5RV5WDaWpZ69Gm8XPVN1kmNZ8TEBWJ3TJDn6eVFawrXqNhMK3ZaambviUonRoyUDEGvc46QxkyvQzB8nxXn9CrN",
  "key42": "Es3hpT1XippP3ZUEDrznWcHh7T1HkFvLg6ZKvbotHpQ6NfuG4c1R2BHAAA8guPLq26kUh2hoKTRL3N6rGFLzntf",
  "key43": "3fDMhy2U2p9Wo1tVsDAFX9NuxKberxoSnAeeQHmPB1afQ5weaq5rc9UppBSRWK33J1VwhP4GgBHhZ7MJWd2oBT2s"
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
