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
    "3o7zq6bxwFFftNxdJ7fQACvkFn2hC6YGz78XbHTFSEN2YSxzK4dFkxJ2XqTnWPmcZr5B7dQWiFRorGEmtncDjjb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sb2nLVqdcLvCEbUVw5FdVHkB8m2S65xXsbFgR77qwcBtzksPGJKWpPzh6BrHsRQUcgSBHoiFieaAh3WQCSecttx",
  "key1": "uEgv8HJojwY2bggv3tP8EeurFWvpeDavwHEuY3f9GZkwAshou7vCJ7sNDHEKTjNAwEsvTQffHBMB65jjN8rmsox",
  "key2": "4etd19DboKqAAvuk5pUzXseCqdVwRvt56PZB3mcE8TByLfXBxXbWwZHjNeeajRmdEKyaLhmvEwQfPKZBoGdu6MtE",
  "key3": "5SWBJPFMC22E19YbK4x2LYXpnVAR1wg4nzwk4simtVVAghQXbX2ozDxZ6BviSkbF69PGLhVn3hhFv8FAXpvTkTgW",
  "key4": "2eBpdYaGQAcibLgkjCxpnw6TacdYddKVDJL5h8bqQYWNXkVqD67Nsb2qAX8dnVk3SwHhQi2uBfxtj91S9nqwDYsn",
  "key5": "3jfZfSFonthKuFojgF4FXUfAWuiHfS6dnGZrsyn6Gs2yZgUQp4md9KBMENywZhUjYLg42WCXGVaJiAEyLsCtFZ7",
  "key6": "3sVCgKn6L9AjKfXESuMWgxLbrcKS7wDB2ZBvVEPEYs9qPX3fDDHfZc5UjWDdSqTnoxmGzaj4LcPsL9WNmYx4NanC",
  "key7": "5kMEBCwzEkcbcdmWVigueNn5xRxcqk4LEdqaMAv6Qks3c5Rn2cH217iU3yHbwqPKpfD6VhMfjtqcpG6qz1LuY71N",
  "key8": "2ed2V4RggvT4u74vuTerg2UDo6dRXMQYAY7BGoEdZhx9yXTjpb5XJ3cK9gKXH28n4B7KmJ8dGnAikVHmKLr5UosH",
  "key9": "3Na8XrH9qWZdqV8FYjFDWajxnMePg3NBQMJTYvuE7jsCVPGxuqvqRAj9nhHjDJ6aZBB5u7SuseRQp5MTN12xiApi",
  "key10": "2uFC9PfzK5EndXvgQNbcv4yj3A1sRSSJNJQYn4b6f4AcJAUZ8NW6xsD1peNuFw8sZa5mdu6NEzZRwXm8H6qUsi4v",
  "key11": "4vwTShfBbgMFSHAd2JkQkRYiUPBBJmWK7yUZ2dqjk9Ke8dFiEsQH9zDQu3oKujF7ioURMJJZ4Cy4xaxjK478af6s",
  "key12": "5EGS9heSeVqxkbFKn67SGGsKiYkg726Chck9tkPpcMuwQcvdv92oGD4k1K14QmPHza3tUdLtAGKHKTR7ncreDbY7",
  "key13": "621ADPHRuRsNpqfsAoDvdBmkx9bBx4YpEBbqiR2G3X5SEbdqfUABcN83M4yeBihVNDFsQ4o5RQmcRK4RFKgNJmkH",
  "key14": "oiZQ5E89LcxNjpfxme4CTBaEHpwsK2MJ9aShXKH2AZqdGFowmYoyxQ5wbgQoNEYD2nKwiS8c9Ni8CR9XLhFwH4m",
  "key15": "2kottjnLtAqpZhdNMLSGjAPemPEzLX7JgYApCAXe536xWvhCHPkX3dUuzotZZfZeuaxpfLPDzogeCYw1gotXhxTJ",
  "key16": "aV1Xnh2Zn2SuNDPz9iPacFmgqyYmDf1wGcvqouW3qtyazbRQMf5YBgfnFZDVKJUrLiYjqnJtJ5h41KMkXdd9QQ5",
  "key17": "49Njxx73ug3Gjjxxc8HP6eGMbJEhoJos4Uw5M8i1epkpLVWmWzBCMyUhNTtrwqzrfr7ZQSGr3RHGdk7YAfA8F6b5",
  "key18": "38NqSDxw2PvsfpjbbQpRhziEUK4Rrn1uANeidbaPiqsXCZ4XkyJpmGVTpHRA1nYYUKc9LsAxiQUPzbEePCwF3UJb",
  "key19": "5GMu3hHrFVfwtcfjCFZCQiAPGWRvpRpUXqfaMzZ9PFLRZcBWjvgPwwPubMu6VsU1A3g6jKiZePWNE1GafcjbB9N9",
  "key20": "4jsRuyyYTxLitDxpgAsPwrNGezJ6rNVtQCaQgVGqh7MFxzmYP7RDmARETrjZACSNVcg6bwyucSsczfSXX95z1nSd",
  "key21": "4NFNpwp2aTCosWQws7DRRsGoqNgV6JVoQvpGV3Ri25pzGW3acfNhmjLtmpizbLHJQbAZrEvSb3Qjei7Pt9e3xkds",
  "key22": "4zEBc19Nmhj2FEv9uyjpREJALd41aNvxM2ZzTBGr2Nt5XrUJMRQ4sqR6cRE6ChcWH12z57VuRxq8y8r88Hrq6ytA",
  "key23": "5yVggAGm5XgzxKnSrvbpAfUF8DpYCBqmTTx2UnsStz42gq34tiF4FoMiWgByLyg4kZtF6kBp9NaW3EUjALkAjYWU",
  "key24": "74MkVr876tdGH6b4TKtmTHsCEF18FtTPJTLj1zty95Yy5XMnNGk7Tw6ZE6VGojWEsvK1wTdinXYaLoSatmTkKgo",
  "key25": "2PY49t9PLSZJWLRQiJaTxsUejrMjEuArponQLkqyskWQcAWbZ37X5Che1jA2DX5irGnAHjWrvoiAZsTUeNfgidfa",
  "key26": "2ChVjSU2HVL8a7d58eGoqrbWrMJZgJsUDrFi95WXXfjnxRsqixLN4oxH4CjKuDLX8pAL9Y2GhwHJbjHETDtBYqct",
  "key27": "5G511xFti9RDmBv5UoWsJwog7A4p3QvJT83sh6aQMpHqVDgKzT29GR9GNqG9BKLjZFxQqvzDCeBY1L4VQG6J1Z4Q",
  "key28": "46bTm19tPhw9S7qvzT55yXb2S2Jwj4DwNm8WXuXcvUP8cWQtM1SporBHBANmMHGs7J4tS2HyjgAX2Tswt7zYDFm6",
  "key29": "3JFfN6KGQVSHkQWH7t62gKNbCjhxPy7aHDzpiA7dxwbZdc96FFTNUbnWD8KyXoHDPEPD2CjE9ogDnxBPdGywqhe3",
  "key30": "2FF3x9g99N5R3mSoMYz9QVoCHpoFvt2Qy4xNvDmNZy7aoLhja2eLAdSvr1SbAEXRerzGM2qUavGoarRa1QcgGGee",
  "key31": "4A6ZZWzW49fKKeveQcRbokMWgVjgGJ6MdnSEMYjTrMzMVgvrfYBZ9phT1kU2kPoYLdioA9xVB64fi1bNngGTZFpF",
  "key32": "CCwn7QtxFzeDjW5BmmZ1sf75Baxt3bL54VGq8ckXEQRwtgnxFtFcRRNM5tSKvXyHx5uws8oimZqVkULiq9hDTfH",
  "key33": "3XrtFBtRxF2RCNv1KP574p62PHUm3hvf9a43JcHaBqw6ykjvsZGk8pvU45oov7N1HdhUaH89ocAsX1FPjUgQtx3y",
  "key34": "4brKN5JDrrHuogm7JXzJA5857DdHpWrVUjCNPDfzXmmVGRjJoAkrD1M8j458nPgsqFz5T3pnBS9NiM68gynTbzYG",
  "key35": "62y6RXWHED8MvvLr2p1zRKnkDzWnydDiYnnbgmLtj45YV46XZvy4pgCMz5FvusCBfqZHozq2sgJF6QYvKD3grN72",
  "key36": "cFgB4TaxTr8YBJr9bQY8M3LpQ5PeWWZGPhSa1XHXbLYimSKkoSV1vd6MNnovZ3g6iB38yxjgRUZb2Hfa5EAWeiZ",
  "key37": "5kiDtHFnzZchTNkTQt4WzrwNTQPUTCX6TeQHoupeU5fAdSExX7MGr3EGJPcQ59aoxWCbe9WHTpzCRPxDfNzUX3cR",
  "key38": "mBLhEeYFdQHWmiG1tBs8jHTf1Coxi8gxXUa6efb4EE6PXGwYqZN9dC4hN9T5ATDbHtSrUPnhGwGoRhhw3CvsDp6",
  "key39": "43X2D95xSSYVkcv1A36zwCSpDjGwBRVL4PFeXU2Npse2ijQNuzYzGAuMmerxXtQrByfeJEgwnvEHZv2fA9D8yGGY",
  "key40": "phfzFesMSVmaTFeAkbAKZs1CVTmWBvKDHhnqUHMqRUCNsD9vhaq21Six6xj9pJiFujWYTpgwqhqkAuaz6dWB1GG",
  "key41": "b6iW98P7b4fygWHxBDdzwm4NCakQ58oiR51BCxZhkJxBxMwffFrgPswPkUKKaEFAaajs4p9aUAPJ4JU7U4RatgM"
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
