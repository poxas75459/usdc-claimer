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
    "RMreNeH4JK6s66839DRc6U2uehxmXktevPGR9XvHVAsVgg4z2v7K2UPt8tHAKUzECngbsXBTTP8C1xA82sFmMhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wq8ccmh7T1JkvdXZwpmSDjkFK5JkhfgqzrfYCz7tfrD1ixAwZGh1JXKBobvAtLohHjMk6j9QNFryjg5x4f4AC97",
  "key1": "5ou5c1JgHHEw7pX7rXKsjxtg8VD2LxXdUBfNtBMLmxn68viZ6hUPhtjmX42Qo1L5CAzYuq11B7q2k75UnVpWML9J",
  "key2": "2px2X1c23Qtt5qRAJUBcDEbdKH2hhxX2XgS2prJgc6KSdNqu7FBRxTiUvU2x3EZi1TVR74Zvd4LomKrj4FeQZnRt",
  "key3": "3WpcnDps4UE93JQJJEPWyVgZBziBTxDsoBeA6cpPxqwUxsdhWV8jexs48sYM4LpSN1EvxH6riUkAmqWT4ZbPEPKP",
  "key4": "4BHGAykG6hMMs3oeG86ZxeKKBNhXNRPtANqqPxhAixURRMAfN6BupF9JzVMHpftXaY4qRFK7JUNds9tJC2BYNx4F",
  "key5": "Fn9d66nRMB6Yogmv1sw3ep6G1sjgJyuPKy1fNq1LjPhgbQ56EsFypE7jt11Av1mVeAknjovYFMM195212pH88zP",
  "key6": "61F9bdfQa1n5Xto5pjrMtajwZEM5yNDaT3k4AsrSypeUCNo4vzRJyiweiSEuLuW3ThTJ7hhV77mxEQnajYcUDwbi",
  "key7": "dD9tQ695qzXAaCKCRfxubqfY7V8v87nczwdrhMAZ26t5VXEBwq94JW8Z5AkPzQMipi4qSgznzAsMUFwwywfMaAY",
  "key8": "4Bcr3sFRev2s3ZejDdQKEy73XAstQsja6bRfoT8KsfMGCpjrrDHgh2E73ef8f9mEJU2NAdLoytMcztRgrHpDZHRH",
  "key9": "4EeATuB8ATv1Y3SuQrQPF6igPUnb8Q66bygjYVu2ePwQYFRWTW9i6mN4QYwGCMR1auaZxJh7TpdexLM71jGHRsa7",
  "key10": "2ydmXEMfdb1eFuYL8Fq68SbqS4qp4qArxM1KHQWT1RzvDZ9wJhZgjgsdVSKTf2u7JGtzTNg4g3ev6Yy2WozCctEt",
  "key11": "3R9gmREmratsYyh6vPqGCED8AHTcFULfwRBfr23qXM8jwcsL3ehGybkAXDy1VyP4R9gT5Z3F41hdbAgphVqyKvcV",
  "key12": "2fBMU4ZVS9tvcquPC6HELoT7hAbmiLoisQY3dDUcUpwDY3Mq7mdLuGYYTrtg1K1J73v3FKRT1j3iSezLXY4gBLdD",
  "key13": "3y2T1bD6isnEivFyQQJ3nX8oVyF52vTChQ8DsynVx7ZCoP1phMMfkXUhtCZpkjszpedihHyT8AieXXWtxQAWrPUi",
  "key14": "34ExF7bnFVL4m14gt8RfTBpgfdNYyCzeeBNLv6XkXnW6ziQNjiyqp834KeKCk4BS8R2m5P1NYiGLMSV56RDJDUSP",
  "key15": "4G9xivTBYqsBUbicFQkT7quY5pUiqTPt8HGPnTSBWhSrmMXVRKyx68fcmmhBRgVFeo1RsoJaP1foxaMcdqSwL7qu",
  "key16": "4SR6XhGT7H9urt9g1Wp63Wet9Qi3P2iVQ5irEd9z6Q6UALZr9cKD5c5eUd7VzPJYsrtaY3VumbYgQyDm6Vapnuh1",
  "key17": "5BW7r8cPhHMoSXhkXuz4AXn7NNd79A8ezBcosnu2TnNGB8m4oPTJfaFLKUhzfZJ4XPFqLADe4rYkjRLzV3SB9rNi",
  "key18": "2H3pjNrLDG92wXxv9WWyti9PWYtoLdYzkKj9s7oXVM8N7W6pj6eXnjkkP46C6rSYaKHMHnuZFKFtyUjZTu8ADNQY",
  "key19": "4iRJk5e1M3FGRhFeonzvpwRfLyyx4pVqzSzTUiVm46nL1WGsJiAj91BZZbyfZsn6XyHSedm7mMNcifPcNnJCLWJx",
  "key20": "4mJy7JqASjTVqDZ5fT8hJZsvx1qS9JZEwM7xMKV28bo9ck46wFFS1A8ExkuFuY9RF6Dk7KJxjUfFD8896sdnAA9a",
  "key21": "AoKjgLfX66FqLr61mybsEKDQHduHtZ5VNSAWKGDZS8b15xjzy3VzCP99CodNgba9UM5Z42dv5sjG8Hcbzt94ZHy",
  "key22": "3V1Rk62wT8EEWZBu8bAzPD2iUyCaKnAQR2m1anioEmM1sMhofqFC1WsAuV6nimfJFqdCqKZG2CTCu21QNy31oqMf",
  "key23": "4wyZAHRMHpYrMyJRdydrY2Jk18G7bDdEVFafT2qbvZ9pyFVw5JDBvso9mcRpe2w2m5LQERXga8Yi9JD4z1DtnspR",
  "key24": "2ZRKt2WrDkb1FJe2Ba8hFNmB93SFHZeKQeUbZJZyryuViCbEdo3RN6dwQypck2QCNxxvvuCKoSfkBuiV3u2RqcfF",
  "key25": "4oaBBdkaykffQXhCasswyDXidCki2LBGosdc9YTuM9JrvMCDHRkwiYW962L95Fp5aZgUsJDvnKBewS9HGnwGe7CH",
  "key26": "65LR8C7mujpp9AYBwBgdzXUP2CzxNQdXEhDcRrWJ5veytQWiPotsrRsAEQdEYXgoVYBsw1kaBaAfGFz2gmpPgXFV",
  "key27": "2FfUS4DyCLhbr8A2gSknNxgkaNRyZiYrmh7h1izZ8nMBC6CKgk7u8LkVW2j91R7AVhk4jALKa5veeYXcK1UGTuzY",
  "key28": "5XEdq7hGAzN37vmJGogR9yZN7uKAMkwyV4rChGs6qujDrBCgLRYkipyfbkc7mXaqgbxcjyupqchTtxCoApkiyhCu",
  "key29": "2qh4yauUHZAzwWYxKFkJaPs5cKjeSuDPjjB1DnfMmCVW5SHWs9G9JYFUQvzovFrDhuN8u3euTFD1iQQFQK7XBH7s",
  "key30": "enJ8mS9SKewv3zjL66yFYxrMEMY3JEUn5A7zWEVK5ttmLn39HpXAEwpNRGvub6Bc2mYY3vZzTeQmk7Q73BKXmph",
  "key31": "22P5UUijTbn4Z6P3jqT2qNBQ3R6ikydbR4arsagHi3tRSyfEhiyBjwF383wS6VHy7ZqShSPVUg9juRGGjSKoHDrr",
  "key32": "3c37epLkpiArpkvERFteZqWevv5yeBbRuCeo69gY3BT42BAUK31h6a8jJwUQZMqDshSNd2o5tvbKxCKxRjDFMy8L",
  "key33": "4TsuxmH3UAr12yraw93oBVXMfF8J5hjmsEGMSmkcZrSLnipGzif2XJhuEg12yqjRqfC5eFEC4Tehwwqs1remDxmi",
  "key34": "4zXEQougfc2CfLzJJ32KKdVaQeEzBU6r1BugkkNdx6qNS7emPD78Y9j3q6LvkTF6LMZtwXWAFepm6rAsbCuKFmJg",
  "key35": "4Y3gLkX5wVX7bWqrJpuSCJ2oaNjGYjSMKmKvWMQjvMn8r2SBuDt2fLVVGCTNaNuLabiShngYW9UtFiapGHSpEvty"
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
