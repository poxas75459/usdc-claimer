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
    "5F4NLQE4JzyMguEZLzDpmW5iKghtKiF8XTCzwpjNJNgjfo2GiKabWqUQQjCL5KbTijMgtyiTCqc4BH5ZBSYUKjU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTm2cec2pJkvCeENLYfLtKZMU6LKheKw26fPzbzcte7AE43V3KC5SU2Fw6rDipS6sT68gyY3pQaP7otqYGGgL1d",
  "key1": "3wYy6iEXPXtcxGsH7vGk2Rwhrr9SG2yxEpdr9dcTuYLr1rTDoBu8D7MfTyok6YKGwmkQcVUyPvStg3SiZap2EFXV",
  "key2": "5ZAwnoxn7J7mY4w14xLW4NbMRWS4ixtaEvwciu4DBmpzaJ5W9XTrGGsPPCWrBAyH1DKGzGmsyn4Dv67F5GA2C71E",
  "key3": "5WYyaqBc7o58cprp7HsuAsFnjTixLDEQW8UPTHRNpxYrTKPpHktEvcvaYsoQWktujierSNZoDVNy2KgKRPHoZCMe",
  "key4": "5B5KeqgHhdVdjd6vj4yC5oQg9GcnUyt9sFYYjGhDk7EXADnEzvbbqy78meGUkivJE59N1Vsdj3mLXdndupvsagsG",
  "key5": "5RjH4Xf75RxtwJvuRN6pgsjyv5reDkAHedj9gkmLdJaR2oLuCZHzFEgnrC2J5fVM6KQ5sgpzukWNUnfp64yNhz2Q",
  "key6": "66kToxpQ9thKo2dFUpgCSi3ympyPstHANV31DqWtJqGre3KUJRiHwQk5V4FqWDV2uGY3WUefxLaAS4F8xYbTcJwB",
  "key7": "gGv8J6TJXurNzk3YAz5b2yARDJooDfbD4FMNMbX9pMaDudwegUjxaXzQjLR4tcjLStXgizzge1zxw93XeaftZdr",
  "key8": "3HSesjRrpJXrogzRtdafovUckSwBysAux8u4Fmiasbtr8LDeS6j7fo37iXiq2ZCud8r9pGYtRtn9SnD1Did5ntpE",
  "key9": "diFSvhChqete9bJQWjrQrBT6SgfNSpVth9tYLHc6aMVL6Wn5mVn36SroCh6DKZPaenvEPkCrbnRe1FBcvqbKKt4",
  "key10": "2AAWhdz2ZYuCWVz9T3JKCmR7hVcxYmjchroLGK1VZngjLxiU14HsHhpsLfep5jk1H4gbdbrcNzUGTwR8ADa6GnSJ",
  "key11": "3sSA5WPbRFoD4hsqSkKjL2iESjqXe6QnxqrQ6JYjLJZqunbHmaHJVJps1kh5Wofp4A9cp926sBxDXTnc9zCjw4Ke",
  "key12": "PmGuRrk7RyYdoQiKsFuw4GrvVyB5semeNd2HFpp48hV7vr6DTmRCNYQrAVi3M72WZaBQT6ajGwfBYxANbRJbuWf",
  "key13": "3M1cCK9yjJRYBurm4hRj1WE6FqGyNmYf9mR11c96X6cdHLfUnDnz7pUEa79hyPkJHBgnzkGkALHAFJ7NEJQFfvNj",
  "key14": "2DoDir9YBPJLwtb1JZzhsCUFH9k1rZBUpq7TdHznj5NpMe4dxiPbLADvpBGUFwo6AtkpNF4u5dcj96cosJ9jeHq8",
  "key15": "vwrdw4o2Zda142NpapkXTJkbbyLcGvC4W79yudxBanizVozrRFAD9cR7zfkVzoTRq6snFEhD4tQy2AXskK4E6tL",
  "key16": "5UhLz8xVNwKccicj4SqDmQGW1dSo7EVi4g5v6a6PHiT8yjNcruFkZABvpS3T9HXBnXcGTYJHaME5zusuHyNXynAj",
  "key17": "4NwPwcXzxbsbuz9kaDLqBs9dFqDbwVv5va4ZwTXia9xvoKtsfqE7KMfVvQGyoSPgS3FwcQhtNQWmKn58uMrb4AZF",
  "key18": "48ijHR9u46KCJ1qu4EFpsjqezMDt6DXPY5vixqkaX9uhUdekQxMVdX8XV1YMg2QDzoqWs3WdAUkod1Jge2vTSrRt",
  "key19": "5CxgrqaUos7rkca4sssmZJVRjK9L4qWa29UfFhKPsGFT3xzkVKKc8wejQ9fiCe89a4xEja1TcRUFXCdyf1E38BEL",
  "key20": "5C77ZPheMfiQUtsiwG4gBvK9UvghFFk6GD1eG7UMcuAmJoTrMy6obRDnpnrjzFCXTW3uAy9mTjQqYWgZ6poqTkdR",
  "key21": "213L2kKi5dhzCBRC2TKbH8U5KtH42WbsgmubTom1ZhjrBQuK1ZK411itdCcFCm9tSy3TjgLdQVMbxDj5ryFLnsEk",
  "key22": "2f3e5zxp8UBma1VwbSiAh34MYiXzMuUQEhkszhBjdgxbSNhcv8RkeK1sB1EZoNv36gGQimRZR1DuteJ9vTQLxc32",
  "key23": "3QCHDmZpL2HBZBnwhrc3mZZ7inakSTgYBstZLBo1zJvGUu5Bb2WFzgtkrRpTRL8CAJfamdVj42uAaR4CMBVjocVJ",
  "key24": "5PYnTYdBn29NMnYjtpDBB6zc3vyiKUR5e68MH23ZGQaxPfZ4jydr35XSARjCJ4jDeRjnV5fywn5NspYXQBjgDTN4",
  "key25": "SuncLVAJTqBGshR27rxQz7WKVhZJgF2QgZ52P8jfhJ2EPDoh5tsbvMA5aW4kjR6gi9CqgU7nZ8s6hYi5gRbiGex",
  "key26": "25fGzsKLaK6pwMTNcRrSWdwN2otRoac8bL8B8ZTVRMcs8mFUDppnryuKUNWq4NT8mJDvjaBhTySRVBVVfmfMd9p4",
  "key27": "CX6S5ix6GsjR4PgASUpWKDieMGvLVp3aAPMCuMxk5aG3UKbUAPQ3wWgXm6cKTJfWZWab75JKwa3FXnaV1PrmUYv",
  "key28": "627Lppoo4MBrJsHumM6dXqXBKh1UVMeoCFjxtPmXwAmhhCtXoMftETrqYR6rR1x6UFPqo5Xykh8DGk3Fusaka2er",
  "key29": "3EisxWndQZx7FpWEyRH5naKTuvuqARGKBzuFQ9cq3fxJesjnWCDVEwLBfV8MaPh5CNXJR1zrh3kTfWrcSgZgAM39"
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
