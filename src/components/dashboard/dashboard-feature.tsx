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
    "2e1NWbr8YfpWJs35MQxiXyotevJrdgkiPE7nqKrrvAqi4MdfKA7hU7jCyaM4mvtDYsdtHUcJZ15y48AqdBEpiRjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBJi1szYCRnCPQxHd7iEd7kZd4KivbXgMw4KkFkRydf5JkGNpEMeCdXWDQ7cmgYWv6GqjPspt8LpaxngC8SBPpr",
  "key1": "3Q4KiEi8yUEAvwbVjfRbvcmHtyJrjdNwAbacqTWppvyYVNmyBwDSqpxM31vt1ALuyzLztXaz1Zi958tLDMv9o6bG",
  "key2": "5PY4Z2oYis3TFtaapeBQoEQ1Mg5X12eai4JWQmDeqykccCferRTXD6nfhk8NcDBRvrNx7zDkXkXqWEhQKM4rqf7i",
  "key3": "aYQdG5PMArL9qEhoRNQQSwv865ye6avN5f5nVFGf1kfMNdqdpXkaHhYNrBSRZ75C4F3xvBo1sgYnmiGB4g3NiJC",
  "key4": "5CTx7vhnKSxqGj856cjMEQPZPHXm5pzrez7jicnpdvtpSgXRNks2QhbcYgsS6msipzTiAraztjhe6cvzAEQ2iHtD",
  "key5": "4S2MxCBNqnWCEoLvK7HT57vdTB1jjE5PBELhSK2jkTXEirZXaCfw5BKqxwC6xeYjidt2MTHwaVfQnZKUEcemWJqN",
  "key6": "2nFeKugM6siDzktw3dvn3HbPmrE3fp2G3rXaA28NcxawVahjLTopnpa5REmjG2Ani38ezQRMpUkQbFt9mXpYj4jV",
  "key7": "2WMeztpiNwtLhootpS7oUy7ATTo9HpMaMYnvoAtSSthNfvAS3bSyCpLEyAgXZkdBXq1remmHbvd4XmDuCcwTuUQv",
  "key8": "4z78XTrfVLYXiWxcjb9CNEU6hMWSdA8oqikmFDEi2k6TWJUJu88gy6yzMX7MYDV9RK7nbRMHFaNTff5Md43FjE1P",
  "key9": "UtEP8w3RJAyQHPjYRw23Ggmy8UEvJ6MrgBidPrAtXTy96RPfmeskYDdpxPxzKJ2c2E7XCT9e8EmtZNEtv4Rc29r",
  "key10": "3vDCnD7vjmS7DG5EXbihDUbCkj6yZdYEa9opFGDncm6sViieVDBU2WzZfzd2V14prmBGCkhDeEYG1LqXFZcXtowW",
  "key11": "5RZbqpAsT8NqgD5SxB9j5ewFEcLBe81Auy2926to5yqVX2GJpepNsxinQrRzvXEUq2oAdA5BpzoFiA8cgYpNbPB7",
  "key12": "3eJgu88YM8HhwN7HRNbMEXqPPDZBwasWywtqrarzxRCSbkwV3YZzmJ9DssSTmFfZ3ERpBpEfgw6bU6TmgPWfJXrD",
  "key13": "2x2PZBmNPECZ5HkphyWPFYpM8f66WJJgpt3XKYVizESvZJB8zfBybr87cvgw1xP4nhT8eNUzKo1FdUAg6UTvSxgK",
  "key14": "3zkJM7Qn3Cw529qqE77GTWqXXcc741qna3mQED26tJd8vrnufNAH3qYf6RZmnjHYn2PKRM3Sb4uaKD4YwcTCPdCm",
  "key15": "64uwJqtRoMAkSjLckiWPYPw7HMEjroN2rMJbSSMBhuv4pBod3K28GT1B3dMvbnZBvxhd1GyZqdUmoiCBtm7r63j2",
  "key16": "5WnhWTYAXA2NuCHmSJ2K1B8zZN8Wb3LjVFNoPye1mexTStqGJtcAxLWFvJbj4yJfQUmUspEY3sN9TqChCB7D1bnE",
  "key17": "3cstp6uj2oDmyi1z5Xgum9qEEcNS9G82oq4F3wD1u7ZUx4ygKCC6p8T9aL9eJiU7JEsafWtwQCa2gbkzcHKuMhbB",
  "key18": "53S5qs3tW5BgZRjb7aTjWszRh36xKnuybPsThedPtVPSuWg5WbtT7RjSzxnLCwMgqm8W9DJwx4JPhVs5q8b6fKV6",
  "key19": "24EJ66DamVsWYaiSJhUHpeGXPULn5f7x9JVLenuUh4M1VYeuRrrDRyYh3PgaDVVUT3L1d3qXoYPg2YMBcEcQJXRX",
  "key20": "JQcuq98WBout6H2EpiixqrALQ72Sci71LBCUaGFDMsZkZ8zmMFpf62bJN85gd8gLDqhjNktoDr3CaUpZK3bPT41",
  "key21": "4qQ9Q9Ji45B3wwSutkJTR7my73V8y97aWiwf1xSX1nAH7FbnVFAhJKbiMX8n65CgLRjihSho55fVhGd69BXpf3p7",
  "key22": "FD5fSu5MxE4gcetCA8sitaShsg2d5SauUC1omqjFiw2RdR3biuujsWuK6SdHD5fyv17fungDW4KhUGQnEeKB5aW",
  "key23": "35SjjZfQnQz7UMePBq7ooLKKqA6N5YWbnUfw7GUdHKzahLz8jZjf81VpjrC37Fc9Mwor4Z879KRMfvRAKQgzWvsk",
  "key24": "24XyNNEnTPN7YLS6BaKUUbMxbXwL1dtYeZ9EFmitWqtK9R1piM2qHUJz34MKX4PJvBmnCcfopEWCNXu7rfZqC4dx",
  "key25": "5Xc5DU2P7FmGJ4TDCSKRG4aU1pF9QNkN7AH4pjjVmrhq4nB7wGYG7QgDHHyZ7AKRR3E11SpjBN54FNu7CLnpLQW1",
  "key26": "4rPSUdT1EKfJyRUbfcfbEr2c9qk3rHahwM2k83ukApZvSwgDEN5tVYhJ4mpsHWoxSvsagTwdia5Cv24TFbpXBmK7",
  "key27": "2NZk5yjbDJ3xcuQ3zhQu4UPWfNzTUXnFUzUD2JNNHSBzE1QT8wCZgym8Dt2Qhsa9vGnDanXqmxeiNGKzYGCUDQr1"
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
