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
    "UxKJsVaH7GLv1wyTFxj5CBRTTqkZmod99pbQsFAJBuhCB2UQdMPDXkTtSnru5jmSyZm96HNkRiQwvT2Ujg9Un1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfYaGk9pLhvAt8rJbsPoxqanBX6F4C2xSXWxJtnC2gFn3PN4ZjeXF83GK3zrhJAgzNXqWGrFjWC7nvvwWHnV3de",
  "key1": "4xc4LHe1Q94pqQ8sr1YS2zBNxLmf6LFRyh6pJ1qPAGNMcyKSni5bdzxe4oLx7akHS4CHHtoNEnP9YxWsjQkrepcB",
  "key2": "2eoG91hS7qaJ1vUhumK1TVhpMftRMH4M5QorL2ZuBEg2W6j8Rzsrjna15QyUKenm6mWZGn11PWzRpHybnDETdVQG",
  "key3": "3aTiCyegzTCYccAEMN8gwe9gkWBfS6ipcPSF5wYMEx25GuPxDLaRg6Ab1ZxXA7KvKaEEA4zQFuQ6aHt8TN2NkdHD",
  "key4": "3nmJ7L9uC52ZTuvNX8Bs7UPwTE8C8cQdekJfFJzNtKaHQ5YEMPJc2UzggBy9FR1NnCwB6ZSQgsnKbYUomShAX8wV",
  "key5": "3Nb7oXxSTR6EDqBDrhXpYHUJorBAWUru17JvNTAuZDNFmUBd87LjGKvCqSvs86UKNKEFiYtSBTiPwFDH6TUbHZJo",
  "key6": "5UdULFE2PeUmucaRTRs3v8TZJXEDTyLYw9e8Rs4B1u7dBs6aBXMzdXH65iuguCgArDYdcqHrwgEFCNq427ua8FT2",
  "key7": "UNZzfmWHWozmPTHLa3RSBtGcRD5kERcX7uWKnEnvRGS6cVzjx9N4ERdJAeD7bryDQbj7876dTA3HQNpGmhgs6Mr",
  "key8": "5MnkHw6dpy6pteeMXotqUK3fUeqTnBfw6ttdBNgxBTNRgPs32bxApnczqZsoXKxnf24ktRZ6CMBbmzmWNZkE7FCS",
  "key9": "5kVpfDGSerdSGuU9evJY3zEuhtvnFxsFMAef3n5ZrddQKa5wuLUx9XwD7eD2ikRxaYEjrtddsQpQmBUen6XQQnEf",
  "key10": "ErgQq8gPAWWJ3drNmRSLrKUaTLodXznkytJ3Pdk4g73zyGY2AgW4ki7W8VgPHYmxjxAakyLNuD7YPBWkXwhEi8t",
  "key11": "3gbSkRuD8Ui7baszPFvDAxMBtaauHSog54xES97pCmNRi5xeZP1vHpQbHMsVR9KYBcK4NpFcWLPjWaSm35nYaL1e",
  "key12": "5abxfK3UbUXoxm47zzaPo6bXWQu2Mz8FBAqDJkAeoQTdhWnbQsGWzQjtMJPnWX53JbEGWT7Lk7swrBJWKQvfPSHw",
  "key13": "4HpEESScBmJ4ydWiASoSZBtX4AxDYNN1XRknhPeCgGyQsfYsaVVBitFiMhMk4AyAhWYWNXckCrJsHJQSYhWW1QAg",
  "key14": "2p1i77HokMZJUwD4AMbuUvrpA3PyELKyW6oKemRAmCReZo5B5PLMjvkxdxgMLiHnN1PLY6PtXWDDGpX2bCm3jFzJ",
  "key15": "rQGy6NeJWfwZQ6shZoCMLqTm8NMpURLm77MtmQJbqSbo9sxypAzw5VQscdpsN35jBGa11ek8jSCCWCC9qk1hnR5",
  "key16": "3J7bZ3H9d6123SC6Ui9BusW4nC4VgUqPBqaQnRtgSQG9GxQUZKPrcw5Zxw9dnyzs9ijRbU374D1d8QL1SVgDgJdw",
  "key17": "3s2LUeftVUPrHvdEVdeN4N6JTBEu4YrGZ8CLcCo3iZpnKGPHd7XgpLULm5SzeEgciqK7aXciLz724cbL5tcz3NnR",
  "key18": "ZnQjptWX9pZnbJowZKvSQ65LsCKVwaXTqdXdw14yzrBFZDrHUpwjmi9f2TSeECARsJ3yEURW6Y7BxoZqACD2Zym",
  "key19": "3B9yjdvqqFP9Zd5a6pABotgyraHXtPrLSKhhUVvnq2Yx7DxiPRP93HEQURFqvmNSFepAYbq338PS3Gs1uieBmsLU",
  "key20": "3mXdxDXmZjYyeutvVB3sx4YLpfWLftuLLsLowZZGNKXUhXTEee4twb6EpwJ3MpVWtSbdPcbD5zAoj88F6dFBovag",
  "key21": "2em3vVToCrgN37fPwCRptN7q8ktvPdR8gkQGSn3hNvEPjpPhjSQ8GsKyrWijmWKPBZvbeg67tqEcA4gwf6N7y8oh",
  "key22": "4shfVBF3UgdyHticoBn9ooe588zzzyEMha8jB3vHcbib5rLg1hCtE4KVMs6FXQubtsS2vPdTa9VSSEcJKWHXr6a9",
  "key23": "4TCP3gDR1kr5UgNvqeSdxB1cHqeMcwVgnxERDikG5evx6Tjty36zP6WnjDpbTRY15rThNnNxzQqg1TJpfdvxMHtj",
  "key24": "2U2g9u1NdF4Q66MUp31znvATTD3mDnVXYKNEku4iV32YjHLhRHWFchLGC3dwRRh39thpep1i9KZ5AfYbGmrhp8Gx",
  "key25": "4Qcg1EoqUQR895dswF6EyTf1zWS9HMEhZuMM7drRVm6fQj62F3R4UHgqdjCojcB1ZVxaseTCxj13FFQP2Rq5ecZY",
  "key26": "2zAUiSJsj7jfHgsoXHSMLHqv9MVYYYbEtzt17AL5YsXAjEj91G4k8MxTDdqojgzg2ErbDLem2tKgHUGixM88tW8o",
  "key27": "3Sa17x9vWamum594yBZr5nbKcjeNkRUhWCfT9296gaSufnYfbF17vffry5YP8Bo4TdawRD5dJcyhe5TLPn8DKTES",
  "key28": "2DyWLxbdv8DcT7ViE5473J7QNnt515p6eMoKPfRPrZW6QmdMbYxUmt9RUFC3yKzukK7iHJTQ1rgEv5FndyyLqndb",
  "key29": "64bX1kkerfcRbcDQhPKNRnmxXkGqC5EzrpHKz5sytCvkPQWBn4JW1gawapC9NKr3JHztovctdaZ5kwcBF8wRivbg"
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
