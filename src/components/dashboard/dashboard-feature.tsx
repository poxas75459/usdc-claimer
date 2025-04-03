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
    "37vcpQw8MpJCLnAyWWXd2k5pqq2ammeXpxLhqGn2hNB7BwXwbGA8EoEnPRAe7rqFJaZ1HHPXaX78M38zRwhZDCSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BgY7Q1cWsYiKXN44evBojdycUryWDAxzeRRLgHqRja9SFDbzGUpqNC9U44eLB7hMKr753fZLvGNC49PR4bfTWyU",
  "key1": "4BF2BgjZXjLRLX7FVpRNrpnCDrrCvLVMAP6GW7mnXPYRUNUzAGyBDSzeK1N19qrWDTJQKXBYJxLhiaSpaf4nj5m7",
  "key2": "3jC6sFpmhdBCDXHdrSzo75qewH9cNPhfr77bRD7oUu33jpQQNLEAtwGMvWur9nX2soTJtorxBLStzj91RRhH9qBq",
  "key3": "26oKQAzD5gCBfWJe5pBzqdRKTxqjnkgZCQPAmJ2rLFYnysTSw3HJyg775F4oRZyVATeNB5yW7TYeujon7cgTTL6m",
  "key4": "62s2dyvDaQ5jNqk1ksDJSrYp5VawNB9pYcmFWYpyxKNdD43H69BiMtHeTBSJVBAn1yy7sBjkRaqFJbvaCgTRN3sz",
  "key5": "4qyYMSx6Kk488jU4NasEqR45kywsVuQWTpwfpthyeUU3SvkT2ibNqDn4H6gW64tiJTSj6PZ1KZUxxtCuCxfDcs7c",
  "key6": "5N5yfZN6rCu4RmY5DDy6cg3gdDtypXWXQScmhXxWjt3hZY23A1VZccVesvdWW9dpJ8FTKVbc7uw9CF6WrSQbZbTQ",
  "key7": "58hhUypDDTkKdEtrwbPCA5LMVuRdxHnqkZ4eRs12QfqeMtnJgHBnvfB45b8ieooaYmMmp68SwyVFqG38tDtyKroh",
  "key8": "5JZYTRW3ifs5jq2YrjXatimsEu2vRkEBYZQ7zoAFZoFmMrgcuWR8XnoWBT2Ggy5AQjbWDM3hcwmnw625Y5RFm5vg",
  "key9": "4EEKVxLCz2CewL6rf3tmceTNuBBb64hAHp4wpFcFYfCkQ5PxJ6pGTwnTAWvBKoLm97BptHDErAKb8CotbkRbTXTR",
  "key10": "rFr8LSPMSBxtgxMktTEkYSW6Hy85k2Q3SDLoxKddPeFiEdTv4323fMZdZ78aGH9KPZjoJhEBFHNwLSLhTNhxC2P",
  "key11": "2PYwW5fE2qf4apYdzraZJCASqrF4jMq36SLP9L5zYK1yiZDGzboY4SUPozLHenkajrUFrtUoU6DuR1DBdq5Erwyw",
  "key12": "5ypEr3x5fdBHUJqHzfYyB854J6wHnub2qfZGPF6VHf8sf6mka3XknrrAxfLaouLziiguNDQdvR2qQM112EmknC1p",
  "key13": "5b2F3QtRjUJAaoYZGYCjgpqqX8Rfcse7JfnDyxRm4yQiLL6hDxBmReHigMNeNA4Y5QbrCnRqpNPdex7vopESwZuq",
  "key14": "2APvfTtj8QMZ9ZXeSok24kBfeWkR4mAHUf78XbsEyzeMxRxCc4EPJq4ibhnuoKY1iLgfzPfgj8kpuWCzjaq3puRf",
  "key15": "3DngHxmZDKMkk9msES93c53ncZjGJwxFXQQyWiCGLdx9o87XbtG7JTKJ2hQh9uFa3a9NUErGL1XHYheiZDNffABc",
  "key16": "3Dj1hEwJHKzPZfTQgfzFrG5rY4H1s8PouLadgJAt8yNgtt5vTYDk3pV65VSrbMTPqzrfQp5F9huzdgm6CsqLyJgT",
  "key17": "3azYSkayCXd7bAAyUi2ityUVMykA3n1rcu3HpfKaZcugT1hGVbHygDYb3DNdsA89zVryu7uyVw8WAc7KVPvHhPpG",
  "key18": "5TdBJ7YL6M3aDsaWkW8JNontPVdgRoTJxDWDnzchHQkJM1wFZCx3g3XFBvED1FS376FWmCJc4CiyxQsiYkTYJN8N",
  "key19": "42WyjbSGokbhNmrUGRyGs4zLECbqDHF5qGHNXY8AXsdxjSddEGhD7756PTaSwiE8HY3BoPVs7Sf5wetrWHJhyCE4",
  "key20": "onMikRcqudBKSmYH3A7uPQ7Bg3d6mKNXXeJJsUT4KoXATkwF2TiPUszGQ9otfajZyZFLw1wo8GFDojEvQfYjddJ",
  "key21": "4oAfMXUSSmbMrfoAApzFjBrTpq35btD9h3mh6aSKs5SQJ3hrk8XyQM4BqfXBpGseNR4j4vRLtXX3meHWwL87ouvc",
  "key22": "339D33vD93QY5ZRLne49hN9m9ed1r7nSY8Ue3CKRb2hr999Lbb8k418hVwwgMzz2GxJ82cyxkSb2znQgbZaBQN2t",
  "key23": "gC7pi8xpktXPUPbfHBRazDoyw3zXmE4WpAyJmjmotXSVCZ4yTDL7wB4HNsPGBYVMhneXZrz1PnhsNVwgE6VMtWV",
  "key24": "BtLpHN9d64F2cj7w9RkEoZfF5mApm5CMf6AFy98MQ4FCsB8QQdZjR8NrnyUvczyM3x7NfKGbLCYwd1UwT7GJZ2Y"
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
