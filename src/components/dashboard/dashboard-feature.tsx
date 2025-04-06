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
    "urWgoBjZenWLMQUCLrYXoDPwSG5j21qNbDeSJ6ZxCbiyBPFgjBZdwdCRBq44MhhrQvR6YB9fRyZHqiVhTEXDE2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bgoR4ewWoDSFtTPCfaGLDsLvsJJGwqoxExW53RHgfBJyCcwnhNzPL8uexQEL7KKvDFAzELv68NCvTtLVAG7S1vC",
  "key1": "5q3xHZ5dCQuhhnj7fxET2r3haV7EFbp7UXYKvphUoo8uzpXZoHt36Q59my1zurVtPwh11NxMtrcipbsrBzpnyq6",
  "key2": "XNovkFEmvog6nZcHMLy9x2Y11QNjd7dzFHbwfHJm63ySBX5wGPmeYfkTTbW9MFLvovAko5Uq3MR8dHMmGbVatjX",
  "key3": "4Gr6c2nSEGds6zfmzMTvaEZRsqAbP3xfMeJjyEnaMkrWKxYnPrpgYecHLoPK3zUty7QoMo2z3Xhb8d11KyixtAx9",
  "key4": "28Z4mFcD4CTyPqYrgeFmAhcHFF61Qvq4HWqTNFy3opVa1xhyWWzinMKPnpwEyTsbVQD4M7fMPyb6QzMzSkV2AGZD",
  "key5": "2WQFv77omugrMxwC3ULbroM9PTBeAMhoXwXXSni5C3G4f4PthEGfmsWukhZaR1DFdoJeXGJiKS6NkUMb4YGWy85P",
  "key6": "4Ud1sc6FURWhvvJ36abzGg4va7GWcu7ARkAaH9DXneiZWY1nbyTdGWkx86joGAy9UUvbW1m5sDpWsYtBkxLWtrC5",
  "key7": "3VhhxRCQ3jqnt1zAeD2YqTFATHwBhD2ZLV68XKFLG2FhF3HUWkbSpUxRBJpdjM7dUAUzLcjjn28EaCGXzfUYKzFv",
  "key8": "3EAXwQURFh7SBqNKqJ5r7ZbVivwKfsHHwQ5FfwfveA2rL7VDZrEymdCosd2PDUMJyj3EACpm4rXz3hNdGPoqJyjx",
  "key9": "4ZAp5pPf5RLcCSiqYJVe9CfXhN41ruNvmNoxbKjrE2YksweUjyK6Mb2ASvdbzHfETvR4cWPiSDbxy6xQ6rBwoRnB",
  "key10": "3eeMUER3Yq3gHmd8XcASK71H9Vku9DGVM1jSAyzjBjMxgr8kAcbL5e6xPHawbwC9vu9FvqCi1sphbcVo74PHECct",
  "key11": "34jQjcfVRC4drdZshMriXCesB2ZEEWu2dLpTF5p4qLLmBsVRsmzFMgaA5q8GP4vG69cQFzRDLY7N4fKRLdgerijE",
  "key12": "6YNBoaM5hva99HSAmhddX8yd5JuTwoy8wkcXTHETSCuCRhm65LVV5R6b3uREVS3UASUT7ebCgcac64pjiCNDxVC",
  "key13": "37YombA1oZV7N8oiCU2F2rVyTB4m9izVUuMtoEFpH7Skf6vVX6hmue5Cw8kqqdPnWWcSeKnKuAjrNQFo6XjytD8z",
  "key14": "pWHyGYXcFjsxNMWhqNrdQtqDRtzcU6SQSxcoCYCcpccMLY3wmG4A7oyCnsGoXSdc6RYLcArzyuGNQ5yb7WdNhie",
  "key15": "dWbWcftvFh9qd4QpVTLGyxXCR5n5DumjLMZ9TTgc6mFsmeemktzJQvYqbf6CtZkiPpUpCBKJBSoYCf2wBEEAdWL",
  "key16": "4uuhDX7nzmhYBH7cAe9GjKgG99qqBdYBWVbgCAQvYFHo97KUju82KUfGfNRboVEyRsecHty6zJYKTxn4P8st1Sg4",
  "key17": "5RJExkc27asGxtA3h4cfNGD7AHS1tjE9nNdJaMFEHshqTRqSZHKzo8N5PRbq3x6HmwABeMQa3gdaWyZkSHbgHPeT",
  "key18": "4PSpS6JgFB7QS7WYNgfwhV6iXLJq1qhU3WFvmD8ijpCrQY6EW1jREbL1Xf1HTxUD88TgnBUFE2vvG8Pw8WuRiZRQ",
  "key19": "39FoeYPMHmLKrYNJc2ZMJCk1aVkJu6efXi1mCEDy6jhhdv215eN58KXZN2fZ6rQvLUn3GgeMPRb6Pab1jxsLsb3s",
  "key20": "3HKFKHPgV7UY5V2RKKhdmNr7Q4VhyGxVqNEA8o3RHUpXgNHvWAoHMUW5nint6KMjbcPYaZkTe2LBLGN1CoygpqHG",
  "key21": "5TndAbJHbQYcBikLCkEhgJN7GMpTP4JWXwcmj4fgHg4NQcKhQvPkfWL7vb9thePF5KTbb5CRA9qsXm9etuGdy76U",
  "key22": "cjtgTr1GGGhNPsUm7d2cp8YYjmyXhfdT9E3M2ZRjZ57VwrLayN9KCWEoeRs4WJs9gV51UZkcbJ19E5ZaakDeVkt",
  "key23": "5jD6sWLuvFTp7EJojvsZxFPE3Rgz5aYhV9SMDvWyAmQM4sXefuLfFYYeCte9ZrgSBXKR5e4pENoJ2228mjiMQM1Z",
  "key24": "2gQjzaW4fAfx6DFb4kn1fW9LRij4QBqfNQxAzwf5dfCYHMs6xnHe4gWgADE595ZaaNC8qNXc9n7SZDuHKa3NTMVS",
  "key25": "5zmmbbGMyMtspX6DGvaAnWBVZZgey1ja1xgjxDQH6Ljgc9gkvq2cskXLTDQKmimGMAAwFCfQdePME4cLwHp3fh1f",
  "key26": "66axssyGKJnYE51tigQfBFjonjMxzk5mtxxjxHX9pfRhvS53U4cqycnJeDyMP17D8pD7a8Txo7G7NPPydvYynZcB",
  "key27": "5zpoX2Q7pqF6E6kToTTdHfo7JK3YcjmskkQSWGwTsGXZ1uhbMtvmCHZMEoohp8hZmfkErgh5nPuk5CuDsKPTL5CS",
  "key28": "3XmZZC59sk8GbkLpkZiD54iA7Trr4TnceRMckiabR7PBThqW5gZaAQaQNLLuGHSU4HsGL8vAJLh5UThkN8szqV7q",
  "key29": "515zrC5oApaVCVUq5WSiVqK6Z7zdiG4bZ4MjBMVK1XZz8RJeEFgqxcEWcbJUzFb1y7gq2pMELS5gtqZzJgZvgAC5",
  "key30": "44cnTUXcqyUDeska38L5q5VSCoYsHkgTyVyfM91VWxwW1HW6bVXDpQhQqD6HCQaJA2ya7gbj2Hq6A5HxBus9zVkq",
  "key31": "5DL7SXGm5gkpF1cwUAYM1aEgTAakqGMNKjjj5pLG4MLtuZwj9oP6ziSkYqFGRvKFoJzJZYUsyHuFPCAE75SDbdVL",
  "key32": "3txPpYEM4YwXuYva1MUDoDhG4MVFVnJaNcwYncGEQgZ1mJRkrykGXwEQWHX3afUbTb5774rcVgibddF94c3gUYau",
  "key33": "536fL4byXrS8PHM99HYHgwzZgsRNnPqc8xfFTyzBNyjQrcK6NNMyB5sdH5iQiiWygDkD6wDmG8dVKbNHmJ9spvJW",
  "key34": "5MKBxkhkang3NGNRExyVVuPGyq8PW7rRdtTXYADLZPwZJb8ywYzqAWB5MycNz73aBqXiw38NGAm8cbCVJQQS6k1B",
  "key35": "5cgq9gk6DTwu8YF84RBY2KHcbqn2rGoHQAR5N2HJd42QeDgZK8hyVTUrCpwQSksKuoQdpsT4sksF6GZ4bUZyZWx9",
  "key36": "HeCTp7xeDs3fE19M3WR2z2M835GyKBvz2XgyN45nDkNzNgzoTY1q6P4M1Jp4BVj3ujZE15SGSgxJvYRmo8isq7C",
  "key37": "5LhVUCmSr1UL7VkJTkXnXpKRLXSxEMbErm4aQSnmU88LJmpfFiqTPyZigPbg3pa6nQFwSfFrhDg9yJKS3Uv8THNG",
  "key38": "3KR9nP9GtJ21kzvBrEt4MhvJy2QWjYQ9ewMSBknzD5RqRhbyRHoAsS2p5cbkMgg4X8UMnaJeLY6bDH6iwSAhsNkB",
  "key39": "3Mb5esvzGGxR5xRg9D7Y3YnhTeASfj98GBLncRGjdBDJ4iYxhm1cSSsGXEBG23xQUejZwzwpSQwyDGSVrWeHeWp",
  "key40": "jEKRcmPwCUf6N8kkZpk7DvNZBpGs3oeSvXLncL5m6eKiT9EBdZZDXCTzJVw8QWg4vXZa2ADQ11c2urjRFJb2HrU",
  "key41": "3BhhSs6NDUp1bdrTa8bfU1WtpNE1iAGevFXWfwZfr921qnGZgB1YPP6AS3eBYqXtT1CY57xy77FEKJ6inTx1PAWS",
  "key42": "iniwcHXntXm3cuACNkqYBhxoPiQvzumZwKTifuRydsF1YMbSqBufc5w8Xn7647Np3Un2pWtzfqb4GmeYhhJoupc",
  "key43": "juqFAVtCw8CDPJoB3s62JkAJTvBCzdg8nLwotQ8kMdyTHdqjYmFjTkrLMJKDfP3p6z2MexFDsCiDRN6N114hVyG",
  "key44": "GdRTBmgTFcvQGBn7mQyWX4kWDaf1ACaE5vyL65jzUaagTHb9eNQW5EhUuQCUEAGYccc3rVUF1SLECSJK8Xf9QDy"
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
