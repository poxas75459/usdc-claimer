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
    "7bwZZfaJZsFqZ5Ba7GWj3ToUr5zJRKVwppEkh8vbse6iLA41CYxPxeHFUbTbjn85ACmACPHBA368SztKv7MQ8T5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZrQN7RTJH12u42zNr48Ls8jDgVf69vrtoxaF1kz8RtLqFg5sKcwzMpgorKBDUt6s9jCJoSsNrg3dCEqPQoSFBm",
  "key1": "4dP6vzKqioWskfufdu4G1bs3TBdS5uPn3DQdhYqUUEJqKP2xRJx3A1oTmX2faKu1E1pGqTp37PXvPd6xgaDJeovG",
  "key2": "4x14Cv9bSV5FRn9n1QuCsq7wJhLZad15y6Yp7xKnDY2CkP8KvQDqqsc6wG3F8pbTUu4PQVUR9Ne1Wa6PQyXQYYCG",
  "key3": "5G6Wfm4MMSaNM23548iYBgkEdJzuKRjt3jBmt8LWe9jUQBb1zq9HCAi154r4v8nP6b5a3Q4YeUcswC7tBTSAmA7T",
  "key4": "2zvs5LjS3HQzGQCb6UnLBn5YGm283q1NTF7YvK9CPd43ukSJnYFKtSWZ5x1expW3y1BqGZAa5ARPQfNep9kvcWN3",
  "key5": "4Y76NaamdfEW3cEHLjQujPzEGwjceSSTw1SJwydMJdsoi9eyJQwvt2hZcdt5FR2u1FacVuwCEG8BZBZnfHdEbCPA",
  "key6": "2wf3En48HTPSy2BZSEeDWGp8DnpPee7evjtpRcLuH5QtVCHdyjwGX99NpSNegsJHVXdZV9fCYvinrmaYHig9xyZZ",
  "key7": "2YTfCNquujEgtpdDWmPAEB9QCgdJvF8DW7BRwkoWx87QHpLm7gCNwCxKFUUap6wabmu6su6fF8mHJqwik5vefm9v",
  "key8": "3jKqUtELx1oBAgy5QCi2bopsf7ByA3cMc6aMXrU3bUSLss8pYw2izBzecdp8fJx1tSrjLT5fVnGSRc8EK8Q5GZmu",
  "key9": "4LekTbEXJj1XexzKffhCN5jECNgBsoP75JaikqbALdfFWxwiV6CDf92gfkpo67Peojwa4w5Tq3JmZrvMGH9hoSP4",
  "key10": "LP762Uapn1nnBvsmta2sHjb6MPPP3inF3pFBr3uUmTdBPFSbZx4eAqALNtobJYegqbCzrMnvNmFEVQnue2rnuHu",
  "key11": "3jZVwkCHMuANrbmtQWZyxpJEf6hjGHtNbFGbeFNojgWEC5wVRqPbB8vAQndM6SWbSJe4qXey5gZ21sTJYq7weGjS",
  "key12": "5VQk1Ws3oxySqtrxXJHFa3dsXuoKeLCjp3rvZbLqF1CM7vB4Jypv8vb8GZsSeSeVF1swGcEdwwgsoVtWgwSBKomb",
  "key13": "4K2BTgrYxM4Robz9M4ixitkDP8x22qvqHYEoynxQiSpmkWuvXHKjT6HmruhBKmTCqVEhrzSqynmjYTfrGnbHY1sz",
  "key14": "3PDEYRem5Zso3fDU7StNh5gcvQBQp92a1rJWbB5zCbSzMeLAqqNZak45JTDoWPfwNsMfhUmADJgBAEkyRP8Ddtm3",
  "key15": "CnGsKh9hVB81N366teStcmjtcZ53SUPkZxFyevMUxz1ang36B8wMNxC9wPM5JfS2wGmtMVpCn7PtntetWgser4h",
  "key16": "4a4KNL7Lt8vMnbh7skEZBY2pjdyzgbTt3c5xAmyjDVtaw7vmjkQtcNirYr6xTVaXcwXM6n3YPsErjV6c4w7GRe68",
  "key17": "5qeU4mqN8EAfgGav3hPoYAmFrLX3RSDb6yh5ixG8ezQMn2YqqbQ69BSwoQpycKYkJ8mQJuWqeb7qFyALySnw6Dvq",
  "key18": "2gM8N8iWX2AXwKCExxK4f7kzCtR2gt4jeEQMTp9xtEaHwjHEBT3SqemMwdpdDDr692tDSkVV8q64d76qyqVSZsPk",
  "key19": "58T1JvJN4wMx7juhyZv4g4ADqyFRqvpr8DFZUchfP4BEkZJQkpbjs3wDSNbn1soz9j3PiGy3qdGJHsv2o5Ymj96x",
  "key20": "2yBDQc4FxEX8UBMatjsK93zPGiqDZzV4sYrqX4DFikgDgxZg73398jqeyYFQpjS1iZDqnVR97gjrqSA3BUz2B2em",
  "key21": "3bEZLXkaNkhZ7vXRpnWEUAcGSg2pRSBK4UwCbKSZMCYxJ2KMow4vCfPjqVnU4qnxGPzFx91bUh9Ezem2xk5VwdzC",
  "key22": "3yhhJebjyXzoymNjz3ovYPyMwoeoMD26f8NCQki38BsyhhfmjSMHjksGMAucbRHyCwNKknZ8fUDCJF4oaAAt31V1",
  "key23": "5ETStqoJu5QSM9Pb9hQ41JspGhjMdFtCjNzzcJLtorDe2dHSAxM9ayWNFxtMCTryCWxwFzBN2iCHVvnLuQqJ8wau",
  "key24": "3mB7kc4RR5Sceihf8kHcS1RHq3MgmuvE7RpnccCqke22Evdq7u1uqLuqPT9E3yEEUprZucFSKEFNNY2g4GToBP8g",
  "key25": "3acTmieKV3QrYwAKzLg1wcJqptfaqBqr72Z2gRQ5D9uqWWyxKYioBrCM1uQxcZTcUZePJCNCEcqEJLRyeCeRkG41",
  "key26": "3FyqyYmZfYYcUJuxhPGFyqPRTqPjkB4tZcGP6qAytYA4VuN5XqZcF5GTWEnVAoWQU5yPjmkXRVm3BzSCmrvEWojZ",
  "key27": "4Kw4rkmVUXxpUg5HJjo47nh8Z1AwKn7K6quwECJe7jwxm4RZFS8z9grY527EARwJHnw8HuShUA1WjXLvhYpuPUnb",
  "key28": "5kYnNd7UmBciW4VR2aTrCWYx78tZUHDkhHBatXyX7FSf9NkfdDgKp8ExsfwmXqkd5k4CVLnoVNMKw12mYiwjYQoE"
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
