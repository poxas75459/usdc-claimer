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
    "4GJ5N41gfAQXYHFtVjsk89SVchHSLxKA58666EYVpw56x4D3DDkHrbFDyWCMVCd1dp7Xpb64EnTGL5dwLhRtSETj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCouEeQJigBZzvFVSgzZeJ8FxpgVhUB6AZ3EQL2c6TGVPCVdUhMHXVxdkTCY4oGQxrbUcM6jiNZBgAysxhSCgfY",
  "key1": "4JnmyhtqWaYBnx4WrA98DD6pJ5L58aUBh3ZpCrvZQprB5VFCmhyt1vM1kc6dhYdY51k6oaU2PmZTt7k3wnZ9KLU2",
  "key2": "3NTsU49kiGSnYP5AFBKzjHNdw3XyDZH8BdHduMYMsTtvt2kr2qZeQRJxJ8e7dQJm1bqzntS1aeV1wpiRoRBAYqbW",
  "key3": "3ZPbsGB2GkBkSAMqN1cQ1sHhfAfuX9h2vzB7ixme5PL6JA29jzU1Hhhy5x9VopS1WTEXm4E5gFWVqkFWxs1GKRcC",
  "key4": "5o1zypLH7gR2hZzsgFjXWUPiuwwU423Kq5eGUykqrwjP6npHZsRNngAVkeEM193MV3RdiXYufdsBzcimvGb28tCq",
  "key5": "2j9XUJnut9rsuncjAp3zafTvMoAchvsivft9aNRqY1GSFVFbYHX5mqzBpvBq7MMh1jt4RcQZN9L4EdFmmAnDQCC7",
  "key6": "2aSMpZsjU8uK8GpdWU7xgLTZnUxNMv6AhwQsktSFYjdaoNkfVQpGo8ivGC1wPodzFwTLDf2r7pbzhfsZZDbomfux",
  "key7": "2XvAydqkrPX7hcVyuHrESamXuFdPmBUi2CvLWWQ5946oSgZiENXEi5FN4SNcmH3cfV81YTLpwyECKK2krGsi1Wc8",
  "key8": "23dUvBeigDeAwbQtuNdTH3WtN78hCCwDPDWk1AvMgi6U8XsvE17eLx41ybWrWWEQyFQbFuU8wbS9WMTgiz6tYXye",
  "key9": "2ynTrcohKgd6waUKVULsXaATz2wwMFrLoTmxL7119LbQAL5vUbQkfUNAAspN9CraTdRm9PPj3qainMrNYZDkQpLq",
  "key10": "2J1tftNUbKNGy8FEtaXBs7n2cf4VDJp7E34xLKizGHUZ3R2PdWTeNdoARWryLRVggbVQ1a4GPhQ6EyWuWrwiyGpM",
  "key11": "3pTfQ2kuofLo3XPTR5enT4F6PL2pGwzJghaCJpzEXLgJr6xgLf5K9gmfCZYNBKt6tvupmQQWm5kKj2bF3co7At9w",
  "key12": "5FyNCznQFf58xE1hyadSyr6pAepdjpAd1xDGok6qYXctvMSiTEPYBYzkv5HPmF9cGvaWoS7vHbRiXsb2XBYpG8pt",
  "key13": "oP8McJyqKVJ6F8AKvsbXqGfyk3zJwnDTX7xUd96nzEZaLmF1TNawP412zGAatC5HLr5S5W2vrAzfqRBAua6f82t",
  "key14": "4Xyne6bGyAauagWgvs21Y11fSg3bJf6VYh3pssmWyBcAHQdFjbPPs2nHYGnXmeAv8CGGDCzPpJhe7LVouT3fb9ym",
  "key15": "5wVQMvmbvpuYD8AFB36j5UTNguHQfEL2VDEnGWaWRKhhXvgemEomVFRzqPSysKZB5XASVTfe2L4i3FpDpNXsQe8X",
  "key16": "dczEFSPiUN93TrcK7R1E5cWwQLVqhX4a4a5fgFfYdATSHsCJt65SyiDvutcZfxTPyVzqpy4pY4C18bpuQJPJqxx",
  "key17": "3BkznaSrHXfXosgcYZSKKk6pRWfK9dYs9JaviHRDJPBSxLcR6Qa3L3F2WihUvGytDSHjsDH26qAukZ3VsgzyDDwM",
  "key18": "T9Pn3XwaBx8DQPRToKJs2tiV7dXz9Aj4GWsUNjp6x51cyTJsnkHEcvPMthB3sXnU5TAqkrUW9FW676kq66QmkbQ",
  "key19": "61Y8BRqBdJdTwHYqGSGvbkBLxi9hok1PFhgVhE21MyAddeae9z4SYZtYXQW6kSngjTCG1GKPfSs5wdfawijv4Quz",
  "key20": "3ipTq6wSjW6gtLXmvjR5mM9QWzmaHtmJoJy2rX7EBSvzJcMeYtvASWx2vVgsFJFXgNeY13udFzoS2T1LQaNhFCH7",
  "key21": "4Zgqbx989ahSc9q7yju9YXk18mw5zfHggih4MST3KTJEaPEJxYPFhi3EyLXyY34ZZx17Drpmw6TfhmdFin5kmRi9",
  "key22": "XH5KGSvJNt6wGfxk5CBdbBwCEsMiKFoszzLJxLzfc2U6u8u7bYNwPHz6JGVAfxXJcyxD1yxhskY6EHmh29kN3V8",
  "key23": "2e22HcrjV7j3p2Vff8xmCvgTyw7qXGtE4mwFsEvsc6NE5arUyQjev9A67Gqs4GtZEFkaTPcfMAsq1THNDuv5XHCh",
  "key24": "5b87sbKM6gmBy4kDwWrwxkXvq5f3FNUPhWDQ6ckoFgvH38395Fxk1wWF8E4XgAK75ecds7zgJbQph1SyciDqFJX",
  "key25": "5pRY1vMGQ9Fxv4K9PFwZVRAzpjuwbbeupC3w9KNXappRZWmgjMHKFGqgkeYTZhwaFsbzsUakGCF2wcGWcqSdASor",
  "key26": "5q5Wz7z1V76qYRwJovhmTKQih4XWkmuZrADLUp7V7CW7CC1srJnipajVVezDXD6KFqfQLfsniZQrVvedqb5Lwf52",
  "key27": "23SG9oBxpCZYUhebraDhyx6XVhAqms3W2eDQK3DtLQ8HKrsnQaFWT2xnLocP75hTHGGR3bUt7GkbLZtkNT9afWJC",
  "key28": "61vLNk2rnsTdvm4a3Raw88Sz6WDa1n57SMUL14qi8ALt54VRbyJg3bZbodsNMou9RhBp6h7oWSQpoC8DGvduA9zA",
  "key29": "3b8ymvWfQDe9XPd5tAuuGmUenYFZEq723WFgLzveQy4Ci9d6z9RUX9miNqae1WsBkaSbbM5V1D5AEuyBBHTeYCdS",
  "key30": "2MFD4oWoDHtiARUgMfE5vnUmgF7A7JA34FgpXrymbA7SGT7318wSJoqgu5ZbiuV5DHaEN2zWW7gShNd7JmqmT4e3",
  "key31": "RissPCYz56d9LVsNUwPudgPxRyScJnAikdGLB4cqp56wbeszE9Nc1dgk9zmhXEwNtSSLVZXK94S1KiB7umyVHCJ",
  "key32": "iDE624RvMvhhnvdf8gmqcT7cj1F4gZ4j193HKWsXEJEdwhuzQG7ANcAf5ciJ5ZQ68WqNXfpjdxs1WFnT4jDRoqU",
  "key33": "AyfqfoGsGrFL2LdazumMiLVcyBVQ3at3toKT4Nr1MZQiBo6kXYKu4L6GHhxdA9dU9EBjNMXovtEQDnxrHsdFb8Q",
  "key34": "37psj3tHfKmgKBBE9mxYDaWCHfK5uASzvKb86QdWzgLZaQKH7F2dugWQMeuownRH9WxQtXGewWUXoWXxxpXh4pPu"
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
