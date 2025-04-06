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
    "3jHsLFvtugR6F8SFTAzExZU51FftxDmvfXdm8W7DxwWYb9pXNUNDNWNhFBDL9SGmCxjqYPEEFR5Q7rn5AToT7sCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYxbcuwV1zuPmmoVXMGtkJsmtHZWAW4abAjC6hEsVYDM3z5fEbLHyPew2vQuj2FY8NMLK8TYs6y58FJkJNtgF7U",
  "key1": "2XFdjZq1QJhNKfKzUzbo9LUxqQgsr6nMf2jf3gxiXVc6fAoR6ocgkbwvXUDUu4B2tp8SsXqaw3WCiz654UuNcaoz",
  "key2": "wfuUwkF4G5wj1J6TCDxUgKR8e24Ve4GA1PDWbRN2MhqSJPCPBqQSydcoTh7cCAhgiBw3opk6nv7Js6tXmp4CyPZ",
  "key3": "255knTKcD48K69ks7JAHpSjWk9EEsBQLHMupi9y3nUkiBiAMRchMqoUVaZBAFmwYnBxpNMNy3DXTzXHcXPAj2jsi",
  "key4": "5C3zSVoCc5PcKhvhbsjRjj7sB2deNgx6ddvwsPtY7eQKtzW7NMo3LbNtP3YUXLAUFUWxhofyBBwrDAKmbHHeZz69",
  "key5": "3xPf3gJijUpoGaz8678STSu4TzqN8sP67WbpZJDD33YwfQxR4uDUu2wpTDWWLrNEb4soUE9D5wtsUJHgK2pT9x64",
  "key6": "5i5A5gLoSHJ5i5qKmm6gFWXhX5wEvMEKtt4Vyn7454xi9XDf7DqG3qtWPXnTJePyiiQdoQF5MjGVqh7zQJoiZVz3",
  "key7": "3oTjNbssKwncYjLd6zpLSWVKLSQGiL77gUh3nJANjDCuMCiRr5y5P4zzFQrKDxAMrssiuimiT9VHE42TzXJdwiSF",
  "key8": "Ex2aGrV5ZVqaFWGD1LwQrSSaa7oomwySJNjFcriAC43YV2Spy4ZyKbyucn1Scp6dFCFu1D28EwMmPMugXpTEGtN",
  "key9": "3pME7hdP4HXD5Az1RWjqne5k7KK6QuEQ8vbKXSnjHuCjLL5Hpkwph3oEUkjdr2cFe8PUik8b75f3RaNpC4fRR1YQ",
  "key10": "3g5ZdfmYTxS9z3wod4BpRmvsWid3u9X2gBUfvEbbqqwQmy37LPgY2eg2rbgpEpNX94iSXpiamyGUoEtGghmFrkRX",
  "key11": "2xcDhKjvxuJZznGwGc1AyozQ7E9YpUmYZckmUjo6UzhdZa2PtxfSrTEMcNePieKxtGUyh9E1XFTnVtSmuYpPcd7h",
  "key12": "5EMLMznRuTwrNx3e9u219GSQBu6Mz6DzecKDdFRehPcbCgwHv5FUnCvRZstTiCf9XEh1owdF3WUy1FXSvnFFuH4o",
  "key13": "66GmQaYoNunK3bYg2d9e5C23f6FJ4BucSLgUXyJDKbmuMA2CBVqZgr19wcytR1QaPZztqiaE14QnGqUBUTAeNtaA",
  "key14": "32xAo1PH7uHmncWw3A599tECd1piJvZGz867QJcWR5bWEcehpB2iR4NYySCVCRAxRPEEb7WgaN1Fujw2rS6WsmgY",
  "key15": "27buY1Mbxdn9fuQ45CFqjMXAnWYcAYMYdZvzBqGo9Wca2RtAb9jdWs3L6XJBktLRmvUMFoaHNAxLtdd1wrbbW3sA",
  "key16": "4WAqhqMfbso9uC2xceHG2wKBuerUw6DbQ95H9Mj6ArqwKrTq1HdkV4mn5v89whKr9E6DSjALcWZ2sFvnN8Y4gAUe",
  "key17": "22ZrDBJ6KTP6xgsqzqESFzKN9urGVu4jWFZiy9WQkaCAguuztFSq2f5NdKMnBu5wHX2ZkviGN3nLiQrYu1JukAc1",
  "key18": "57tz2gtyNU3RWwhKRejtTPeAz2SoqTqYPtXASBbtwkV3aXPoTTysohufpcfdcnRvZXEqPitucHxiqSbyks147HwX",
  "key19": "3rAXbeYBiNuftQZfXE7VfWesXZd2eFVornLyEqNtD7Bon8mZCCgi6nYGcRo73yFWfFDW4Fd5sCWDtHcks8dG9q7w",
  "key20": "2BYuSatbXqVgduBb4pEZ97xJipaEWCgzDFjR7igsZXW2TkMCfiMrAPwXmsKgT9bPEaaRk2NfrdTHDhfPTcLxvYFJ",
  "key21": "4wkFAfzWy5vnvfsZmBtNfYipqaTYH7mcecKNJTJ2PY5mVL4Cx2x17v6EXjCkS81XyE9wA2be17wttyLYmQWnK3Kg",
  "key22": "5SfMaVwT5BJBMsbNh9aBTYarhGVweJRAAx6v9YpehDb5UAtZFAsug3nwnBdanoa5UKgn9ykf8DyhiymEKAiVpWei",
  "key23": "2EqDCvvpdUdBJ7LnoFi4WYVsaFc5M33eNmXKSh4X5DrciVjUxWAqtGEf59PF2LhDCY6c8nU1MKRbGRU5irzgykMA",
  "key24": "4UFsK1ug9GH9wv5LveFqBLYSES9WzDi1rhc9kbFVrpb9vwz6YSom98isg1RkqUv42Jn1ik3vJWmz2Qb2nm647Rp9",
  "key25": "3CM9kMaUXCsFYoRNNgskq44Pf1ThWWacZiZZrhPoV9o4ChmDngFkXAoT2Qp8FKxuZ3oDbVDXEqcWoHnAMkGTWNvT",
  "key26": "2aJMhn4W4CdpaT1rhcmZY3BiyVPsf5VqrPoriAMnTQs5SAb5EJ3KLDhkVzPti3Wrf65Kp348Bbz25VbN7HfaPW4K",
  "key27": "5Z23gZRjeU3uYVbdJbhRjQZvzxX41rw75WYoPChXGVjnuJZDe5qzKsMQn2wzEhJKe7w3Et5mqtjnb2AgAdGyBkUR",
  "key28": "3QsSTe9E8LzLWwxab8gNXgWvSmMbUaQQ1cvxdToNuezHpFt1ucqnmEiCYdigc9idq4UN952uvcgJZzb7N8nFNZWj",
  "key29": "46U4UQVGPmJQD142f6eWTWxLj8K79w9gnAoBDvTRJA6jX9rJNJKdezfkepGRN663kjv7RFoE8XJquicqpuKwvhdc",
  "key30": "2t1A1N5PeypC2moMEgr1H1R6UHwCLtsiaxtuePoBbKJHJ79eJnHcGGcf4WC78tKCqGNMEmDP3yaYXRvBGdnGGWwr",
  "key31": "TSSJvC1uAUgiM8C98imhcphqfGCmGHAVe5myiqoFrD3vJAz832UFdko4dfPbX1vXm5JgcqQ1kk93tkjP5WpJPeS",
  "key32": "315Wxfay5fxJ2a13LT1xmnyhrfq2PYoAyRTDpbcccLXkMs9vJARTa9NQ1tByeCALKTBoFap9P8KFTPXt4X82543W",
  "key33": "5J2thtXJeC45Y29vuPCuiNNCPe8yuQ6f96Mh6ADHGXFZjULbKmDT9ZpmapWwtTfMzdK2EYsqTFbuT8HzvZPbgx6Q",
  "key34": "5qqo3LyMVfjguWNmvCZzS89111NVtSu5UN8jnGbuS6F25mR4r7GNsi5FdfCKtAcJnd3YiCzHzXRSzh6RfaMpMkJZ",
  "key35": "4dckAe1CPc7tHQFTpVNMGxkQbXVStUG1VAiDnHGuvorPMiGzJTZw4R2J3BUynJQqsBnhtuMH3hx6oGSZzmYVBBWF",
  "key36": "3WtDFt1N5WHxoiNGh3uyUyXMK7qNc13xCeRqptpicFUhkYTmiuvpxEcNvtAv8TdvSqQEybeKKj1zr5yzKCzsZRKa",
  "key37": "4JHB1hJRW6fzTxmudbC1qbuMuRr9QToQi64VFFhJvqQKxnimmiegqBYwZeDJcFiLTiAtpYwyomdVGLLXf1gGfQvb",
  "key38": "8dvMWqxpuCntW1ChcqvWNJ2sCWBY9tiPy3391gdyYJwMq1aoAG4Q6LKZjZKpUcZax1CuisZ4MmUx2M3rZQrd9td",
  "key39": "AhEmwVVBbdZYLjnqKGNTzXT1NzV3hVNB1YgsjJqwFq8uLtShUiGYH3N2tHmquRNWMrjM8zzt7B9TPt6iyfTT5NA",
  "key40": "64T12j1Tk1c1jv1uwQ3v7eQzmNTt3AmhXaerTT4o9GZ6RHPs6wLf1kXR7dEUpCYz8ur5ammSuTAj2bkXiu4eJFTS",
  "key41": "H2hebXLrKeSgejiTFPT938rvYXayZruiyyXZS3rTeB4SeuxUFizw6JUKNehCYM3mBbFB5Vj9crWVsC4SRmqcYHw",
  "key42": "2zXUdzoR6d4fQCK74mF7abNEmWioE9wM5jydnEqujNsforVVfreRXcncnn2hzsgtXJ8JEJBft1ZTTXDSWduXj1R1"
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
