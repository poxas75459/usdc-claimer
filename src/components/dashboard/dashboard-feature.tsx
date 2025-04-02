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
    "L7rTuujFT34KGxjG2tMykfR1yMLumrSaWmDuuMmK9UNKHeZymhHRKNQ7CzeQ7v2VNvwaXHTZWmNqjuP2h2WH61B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFc7797hQkGxhU3rYjumypDEjR5xviDYxw2zhno7gvBjHA91p44FveFGHyg1fZ7iaYwX77npKQ38oRSfV1TF6d2",
  "key1": "5f42G5R9WhHdCks91u2iKG6vZWACmfSGpjxLXc5sYCFoKoXQVgcawY77wkZWNhUcJBirGG9bs2fRb2FQ2QnWtUhL",
  "key2": "52MJrbY5zxQr8xWatGAbbP3pZPYQ1B1Sjmr6Tt6fBBB1vss7WBYAbunJvHDAharJVQ1naMfvZBrEPW447suj58U7",
  "key3": "ik3rMngPVmHuZXZjVHXNNyrXMSsodYjavdsP67iaUMPpvruTjoWw1MunmeYuwRGknGhxTJXeaLmXWwdXRfUVjSP",
  "key4": "5FcsnpCGuAZshUeQGvhjhCD4L1DRe1i9yco4DDXKaoedcRpsoUDax1rQPYxKuaED1WcLD87VMPGtCVJG4Wdxi1Ez",
  "key5": "WaoUfzzoLjfGXvXA2JwC5B7MuiRz7CCEa1TsBckpEZvqpq5SnbN6bqdw5vWSJxH5aaqAmzt3mq6nJdpTiDnSEf8",
  "key6": "2THaj17A4dxgkqkczQ6oJWn8fpn5WNt6iaP6fX2DBkKeHaorrp2m4MbSTJUP1qiLJdjQAGwyAb5eJTuSMTeFwrzs",
  "key7": "4ZtHqDFEqrchNYyPkekDS5vdfwZfMWyKgPBTAufDoLuivWMWiTzBWXQA6TmTyRRpiwbkSFQjfaLfbtdDZmgru23A",
  "key8": "5jt5H64JL5fNPEmTUimUjEgdFa6VM7xocVkzWRE6vEz2d2yamsLFkbHMH5mCEE12cUn4FyNCv6NashtLsVcQiP1P",
  "key9": "2zyba5nLPfthWVWgFA34LHGS92u2MJh1D3Knyeyjtc4frvmYh49MwZcpV5Em3KXHo4dnAi52iWJwn4sT33JFLWiA",
  "key10": "d8seJv3dfwcXUhpg3QbbSg8BaJE79SHS4kNniPN2u9J76EQZenVUnMjJtMPnQNfd3zTg3mrb7u4PN323NHUUr6q",
  "key11": "5SDj2EkNUiH33fD4CLZiKsS9jEnkvM4HwbFc4G3DFK9waBfwLup2VHiREyojkDodndDbZLYKLBhh9SKhPe4vU8tn",
  "key12": "2DrpTriUndEkbPisfPVPDJmPtPuB5iHc6Ge9rHjbXUjFCrq4RAoUARVZAmYFWscd4Yx6QLWMoBRgRhT29sTv38ww",
  "key13": "3nqUASe9xbt1eFMY6gVRGPqsfX4BtJXa5b937PEJKnxSu5XPMbnFAQWJjoCM9sDur55U7Gs6CC8v7gnbiLM1yx17",
  "key14": "2Pq8m4QREtejci1MS4SQKifFQkwfZvMcWB76wMQXNG1hgSX9kv2yXdZPy65BKByPysU82EX1gMAmGHbW8VjzSmiq",
  "key15": "3USUjmtzqMHbzo3JMd8mGQBZzGUKEuw5MLvc7rgLvZkQaABbkK1RSPhAE8UZ59GEdrgySZMbTekHHV9n5vXA5NBu",
  "key16": "sMGVMmYHqrZ6JcApWX4bQVReaWEmDucxa6cYj5DRWkF7CqNTRio9TtwNCaYcURvVCjSwkUYFmbGwG968coGt3k2",
  "key17": "4GgrKPhNsgMSht73HKjCwuVm6sZFaNVUxeJce8FVt65DvHy2vQ5VhHG9PCWZ8p6JH5QUyfMUR9yPHtb5r8ZVEKYC",
  "key18": "3NdHgqBZN4KAB69GBjfw8y9L9NZULQ2QP1JyJ7fS7UF7R15rk6NMPPWGxkjE1wS4p8pLYQXjkzezE8r3XXEgKyMM",
  "key19": "oj5qLrwCcPkJWw9TEjS5FjCUtJC6F85JipWHcEsNFZ13w7W3zfyBkMhCgome2kj9XfTNhTm19U6vvZ85hJvE7kb",
  "key20": "2GFUd1xtxukU7op4bh8ocwmZy7jNBzG8T8yA6UPmyAi29roebq7TUj7oR9bnYKgc6WkbxVd14HmrhcYmYEPxBRU9",
  "key21": "5eW3BBpu8DCJfohvnPR19ztqUfipTiA5Fd18TEQ6maR4nUD4WTDx3PyttaMNxrqZ9SYNicAhkB4BQuLy8S6Es7sr",
  "key22": "3t2Akop5QgKFipzRiXUSsSqANARKLgHKTGpbCi9NEexxKfbVz1sBjhCe7WJYCXspioWbxngiNHMEGkQzBT9Dj9qU",
  "key23": "3BhVTHCmUQ5KJh6qJEhL3TL6G4JQ7PGL1UovJDQiwednzBFPB2WRCvNFw5nHYehWud9qXekVNC1fPafFnF4Z43Qa",
  "key24": "3UXNdigoMshLxUtemEDkA5ub9z1hu8mDNkdceUYuwjWongMCtRTk9TUvRoTxzaooeijDfmW2Yr1TiuZRdZGa7gNu",
  "key25": "4ZGyXMFx2i44gunUa2rtxHwis67uVtHBzd84JDFbQnuSPXdjzUchdVrJQUKHyk1t8Xf5xTtwykd9iHAcgPX5M2W2",
  "key26": "391ATz7NRN5SAtBDMhiiGqD48Zp6StcxZVwTtQfhDjNoMWd6NoE9d836TSQ84Lh5TqvFDuMLPssdfz3BZBzzcVtn",
  "key27": "4NtVcKwZv1FdoaZFb4H5GjqHG1tk5KFMspKtgHxuPDPkjEhU58TT7GmsBbcSxgehVoAFNVRgiGZxUDnCjWKiVts6",
  "key28": "5GxK2TXdVo69tmZVpdDhHnTzr93pPX9NJoej6wTN98nejAGzkyQGVxdqzUnbm7Mho6RnEAdnWqTb1B7uAd2E5Y8X",
  "key29": "5MDwT96gp5CnFQ8dwpw24f2em8SBkRE2pXMhhYFKaNpodzuAmyymSapzWm1TBSUN7FEwVtpfGADtA98SxjpprLbb",
  "key30": "4A8wqFx811UhJoNtcBBkEMnbwoPY6DP9dNp4PXFtW4MeDXkKKbVX8cAKeukRAEiN4QQ4duetRw64hK6ArQXZhtkh",
  "key31": "5kCH4rcxPfVGZH7YmnSLEz9LzkgMrahURe5RNNJzetVwhQef7sigkrz8zR3bVrkq8FSwZ4kVhyaZPSx4XLUva6Um",
  "key32": "c5jdV1FnSRUhRifWqWR2ctHLm3h4Rq7H9KEhBxzemkd8UggY5QbREU6VJM841QGm3rmQ2Hg31oTuPPpMdE53Bii",
  "key33": "3X7zoLkw7SUeD9gzdAzBhMrnLcPaaYJanj8R9nx5Dz9efYXcv7U5AhcNpPRHAs9PEULpRJrxcqGNaxieMfAtvyd4",
  "key34": "3noF7u1MjSTTTAf8RrwbPL4JhSfJH5x5cxDqzWQ4KXKS9Fs9o6u6Hxyw2zf7GjM4nmBhd1H2aF6ky8uYvK4ovGFi",
  "key35": "3iawDB38RCP2gGjQW1JaSTMZgvTW2LWFLUztrWf1yM9NGwsduBnFvZhANZChhCndmqAtLWat1KoW6DoCoNRUqnZf",
  "key36": "4oStd8AkwJ6UrUhYbMyr1Vp5YXWtkvxKeLqPJNwZgvLhPkjbREpXvuSwZCkwoPtTz7YKEUqxE5y59yUEogLSN2oy",
  "key37": "5fEe6EqgCGANyzMpZxz8zpA8kKtuBkYtSFxxm5s76k9mPsjoDc5j2xFHHW9VkqdzEgV3rcdWQbLzhmSusErfY8cu",
  "key38": "2y2U8f6e4hKbqimWv3RebGPkwzyxSsa25GQZngXeTr2EdKvcWo9HGJPprHbty5frLoCfueNx5G4KUrrgF4EHnCEw",
  "key39": "5Rwoss5HRQdZ7eVy1QxbwSRqumQSonEF9akvaBJt9P9TqScbjjiHFZodQZ6Z2iDWazY5vdCSmXPz4uaV3zuzaHV1",
  "key40": "2u7tvVUtCPBsDfgVBW5zMJCVowBteay23GLjkKRBFhp8XAVt5H6PVrPLGh9G3nASux6BaSsKmYS76PvEehuunrh1",
  "key41": "2xqybzDsGggVouJkrzEYAFr4NRHmJARWaiPBJv3BvJ9aKnEmYFJXWjnCb7F8WAXnZob9dzQdSrYvZEZ8nbMEtmPf"
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
