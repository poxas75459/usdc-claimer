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
    "dTi7MJDGLmya2xNvNXPKBjav9LDCHQXeS7UaaNU98Fbnv1tEq11wBWTqpqYMY5FfJvuGpPTqNvTYkEL8EsLHAbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LWFRBfZ2GaV58eqRohHwggBPL1PJZu7zoZoxZaTC22ewS5C4bVJMLdHNLQ3GoDjt56eoynxDSFdF9M8xtT43Yd",
  "key1": "5aEGiRZu7Zj3Ri93Eq2qJenH8CvxP8P8TYWfeH8gRsNGDjnk3Y9weNU8EcgYaBTVqUc4Sww4z4zdoS2MUfeAwsgs",
  "key2": "3zyRxiUfWjtFHDzAAREsKx1TATcfCmwXCAZ2mVM2c2b7Vriqek7Ceq7DhoEfmJ9zkQgJie4jPQxTxHHRpgPfqTYT",
  "key3": "SjxGNFctryxYN3UfiCZBVzd7eDhwT7uUhmwsBnSWWS1P56tN9pXcW7fNMKsZALYQn3hc1W7rnsYjHxMThNnzoDD",
  "key4": "4QdeqNhhxnDDjtx9CVVrbGmv2WGS146bzgLXHYjsHpAfhGjCUJo6gtqn6PX4b1ZS3zRVYeUB4MYujNJV9PW6Ybdk",
  "key5": "pSjN4rtjEdtDkJmxNmzbHrZDcnen2NJvyn1ZqhAggwJ2LZeYSDrJFYV5G4McDpPfjVdFtAgwq8XL77QBcvdVSKN",
  "key6": "5UUaG9VzRw397kZSqqn4Q7VkAjbyWJu6buXJ8LMr188Z3ipycfJFHHu4Mv7bA7WkzWxEK6GcNRaH55ptYaw6Fw49",
  "key7": "cUtrkhxpPEG875t1LukKDFwz2qe1TPqzQXPxWmpwGgarSBEc7FjbiVHHe5e4qfqpp7kVBLVmBexmb5urjrxXXDE",
  "key8": "2Uhwz5HKevjuGDSjSXCRr5T3rKnJEMmiFf3rLjWTrHbviAMpzQ84u2yHK2wvc6nPHXbZJzAhKWBrUssaVcjieCSu",
  "key9": "2TkrP8thjXHHt1qpdtkoocH3e6cQCGey5Fe9TnPxCMA1HotWGx69BqCkkkDoUJTEgafYX6V3rdUEQLWSDVPLSnym",
  "key10": "UAVAbN2pUZJe5GxX61HQVtphiNuXSHGQ6FfFcvrqmFUpGHai7r2B8U1hhxfAcgCVBjG4Z4mcgdoqr9HZAi4Xk2R",
  "key11": "2aCnXcCymhSHMAnnd4DQ3fa6VddyUnv1G5YJbcQDapofVNC4pdjkJQXYR63A1ivbu9bYihZGSwmn7NbRazwzJS7T",
  "key12": "5msWjwoqnHQLccPAxB4E7ukUygTA7BXzMnbkAtKNHUZLfPSCrruYC3QfaqqavFhaCjaWy1PDtirZYurAkn9t8Gs3",
  "key13": "54F7nxUay6tuLBj6zufnJtW3YvMNFGk8EEBDmGb1dTz9cvzDfDDYH4fyJXdN3RyS4WK1tFY9EP5DVDZCRM9C259A",
  "key14": "fmQBaSbWqrTWPhasLDQRxmQqER9Zn8tAgAVFCrsxFQnZSu21Z5JKazJ4vb9q2tto69xgBybxr8jRRqV93zpqJ1y",
  "key15": "4JJkZdfv62JmUsehSBUCMBKdGh8eetzntpaZdZtW1SFuS2W1A7zRrGUU4TauMUjDNoPecw8eGjmVxRYgfQHgiruy",
  "key16": "TMREmrC7LcvdajHXUcg6cLVVr3h2Furfqc455PSfRzpysH5cJmWUZsjqHMEqqSDGzjtkAm9u99F2yiVPksb9fx1",
  "key17": "LGNxn3GoeEkwExo4HydD6K1gvmXDoNP5YxtN96kzNeY2DoFhjNNXVHEhWHe51Jx6N6omcxGusXECHVxKPE9ieNW",
  "key18": "3hcuUzM8MGtmPmbzPLseHKFN7sryJirx4Fst84FrmZCXq8t5xSi5sTQaG6vqKSAC6FegDSABF5SdWMuoDjzFNkQn",
  "key19": "42QxWZ2fzLaTCmFEc9aMoziRHuVG2gBYfquTit2YwqEa8ujmvYmHFmfBmRVQkXvpFN5yZsML3F7KVAYu1ccu4WYv",
  "key20": "LDMBVKyFDENFePswhrrCV2knyGdUexg2Az759JHX3EPPyqEWJ1qFrbLfGbT5EHNnMnJguFY5fBgU9femvnmJiH8",
  "key21": "2AUCDRsR75reALFznHm4rD6UEzcDT7QmQyjec6J6WWiRbWba8LsnNUy3Pj1ea6UFQMMQA5yuCsRyPnsk5FaFfC83",
  "key22": "B4uiagJNdTczeWEuNrcdN4PL6YhB9UoWsypRMsqYRa7by3r3ir3cBouWbLuWkA4nTxcJPqk1WTgki8ybJ3ruMdb",
  "key23": "4c43pRfbXCpr4eeMVFTZf3VCmGGSkHdWRyG668AKg4EUwegSdoZxeeWJYzz54mLqsBAvMh9jX7TRyZctLh3Haven",
  "key24": "3F2J4mn6iBE6gDSWwQxs1E2SAdmu1DuYzmWmdBum7QqymmJwACT8Dugf2vV946XAys9spCcm4py9w258DWghR6kz",
  "key25": "wfJxNAT7kDj45zbhqSJo65dfyzthZ6BdAejpCMzqQzhg5651PsHYbzt2FrjVKRX4d11mBk3APfZKcipZMQ31ve7",
  "key26": "jVRjLn98S9snUpRTfRt6hB4gWysWAf8jJLLGVudYCY1aoGhuaoPY5RdUpWbWauLLb5UTS44UYJfwWDQtoVKuoNJ",
  "key27": "ZzwsKGMtUeJSUjnVazhafLw5CwDPEcjTT76pgZ1W3b23GFpH8m53pFmmRhbpBFqUYMk7wn7CDCeYqdWCfvGyvuZ",
  "key28": "2CeSqyRHqHeu84roiRHwVgAsJgRRv6RoLMH8HkbhoLeocFrdS1wDx6hyMTyknuMb6azFqEnu2qZebgJeJVzEmKzD",
  "key29": "36cVdX6LpVNHuZmgxhHQiyCF9PJkf8kxoH2mMqPSui2dJRoocGFSAEq5CZPUggioUFCrWvVUYVzd9covWEpHH8qz",
  "key30": "5uZXUmNzt1rwffuofiCpYJ7iLDMucnuJgZZEmekWqEE47458iebygfbB3NAFds8pTevjNxYHTtKsgwkiGzmxHat5",
  "key31": "3cZBsCXmk7d5ZAunieWem9kfREqGLPziPDJXE2oG7FGFi3WsRr6rSXEnL4gNrDWf4WfiUgRJuY3Q7YBZqTMdbVhy",
  "key32": "2XrUp4ycWG4AAfqgNJ2XZBGGGCj3azgUqHjUshqT6dxp9oMhqadg7rxuEhxgBZYj9JBezELAHV1PcAH2THKPfBBz",
  "key33": "ciV1ppTEheHFCc8FjJq2RBAFHXMbpguRsCcMybSQkxcEopna2a8we1B33c3MJK97EFvAgNu6rHmvkjYiRxgRvdw"
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
