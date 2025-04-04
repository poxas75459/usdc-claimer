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
    "4yvxEj8sudAMq5vZ1fuBSVjhuAoK7StqdErfAjVFvzR5euTFgJQg8E6qJkbARGMfC3taXmWw9pdLFwvcKXe1Vc2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnXhW2Jr4sN9CKS9XhzQy9Fw4AmA5eVpLozmoLfsVnog4uXCvSd1oUU4QnVBvq1Qbcf4JV6hrpNgiswRV9qADi6",
  "key1": "5eoFSRzTv8RYAbpbwQnHB4PbuB6r9CxVPivFsEaD3rPZKC3Vvf9RTEYJGnX8ybruiULBRqtBdyZEL4paQ324KpsQ",
  "key2": "3vPSuPtBsEg6YLmR614JTeTTUFLJRXfxgJ6CE7eEmdbjve9iSRF2gVkrResbfKWzqiheQRg99bn8VwNYVLMW2tdt",
  "key3": "2o6iZ3eR6U2faRhk4JeydY25YaxHVq6D6nFb86JHLobm1Y2Pbjo8NZLPfdocxyPv1kvmntBfUcibA1CmueoHwkUH",
  "key4": "2YRUPzSxSsRqUhcxAmgkSigpCqi4eGRa6LQmNcUY2U7qUKU36fYgrfd5EnnKMV5VWBLo6EVvnoZEBFDd7gBPpYrv",
  "key5": "3AjKAXiFg7HdWwVjQWNjUFcqXtsx3B5CpGdEGg4n5AMGzHMeMHHGSRWnehsyqHurqvHhGqVvo3Uf1oR2HRt6fjBL",
  "key6": "5RHuyy7htVt9jBDtzG8X3gJKs5rc4KR587uUdvqW2n33eUje8XW4mfEcE1oDThC9BVtVapgNYAv9AD4yDzM1Hj6e",
  "key7": "2PxQqKjHMeeMSuhXgbNA2UJUSftujdvHH5pYUiF5WnzcBdkvZA3KLzHUJwU73g4WnZvcUNyyUsZAhnK7ke3cLRw8",
  "key8": "5gavftDBxD6oQs68eWLm1nMDteVCcYXUPz8s3wCkGfY6dob7wMJDsADF5r6L91v9ns9GKVjSRcEwby238dzajmGq",
  "key9": "4iH1RjxZSSBh4fXZhYJ8ZWF2Rn7R8MSSJ3RMSDJPzATbnx4cGkMNzn3eVtXzwSyqReNFUnkxWdocWRYjUyFwHmxb",
  "key10": "3ZE6g8LWziDfycQTayW7Ahdv8j7huh7QitDF24nCWQiawu2fchvQKp51cYKWH2tp7Zs4t81chxcoTwRkNuS7LSya",
  "key11": "2eXVTiV3Vtqq6TzcNtQYPxHqfz6zkVyRdsCg6BjD3goLhMVLde9D2kvPBn3VNjVLgVUW546ojX78b9z2Z8B3pQw4",
  "key12": "5V85hCH34mWfkbaiMGH39WdENMLYteD3r7ArLDSBmYPL33VKmzAGXD9r8m9LBbyTawp8pR2vwrffyUkYiQhu5Rcr",
  "key13": "2d1sbd7n3E2Z2pMefmdiyzrsjLQYb4SnbJxV9NRja8eck6A2Dqm9M74x4MiyZJxiQa9LJjQAo7fK3T81CZLpyE1A",
  "key14": "4RYaZiNLnvqGNpmHSghHjxc6FqStn567bpwtqjypKUbgkZjsoBZgpQqgbiofPh9gvkK3tNZtBYCRdGoooX8GrwKx",
  "key15": "581agGM9y3C5VDRzDdLS2Wc3BjKrEDgBfLeBzPUuGR6fWNtd8291cWGWrQHfCj1YfLakUUHw4GRA4g8WQrgvuPad",
  "key16": "544mvRLKUswY7gyziG9YXx7LdUYwzn5NzPgxhMZAS3zTsb3chNWkKSt8VshHJnrVwugxCf1ZA4GtMmFV9hiYZZHs",
  "key17": "2GZTjFV9KfaymPBU8rvvw2BSPGddmcm2tGjvUQLzYigP2hoDp5W5Ncaux5YjZGgX8csXZxFQbKye32SWXj5ALZMg",
  "key18": "y6oJ8KZKfAY14Kv2ZYDf1Ae13fVqKAeXJipSoUgxYqmg7Mv41wGn7XQVAoASWjkQLDPi4NYo8UT4LuwkGNXFXbK",
  "key19": "3ioAmpeu8ksjcmsM6LWbNv5uu8wFmJBwpesUiK3wS8zHTrHDSCnnwHKD6fUMWrJf5edHbrthecq2mRcVrCPru8hD",
  "key20": "5oiNsiapTQQRXjHiYwCtgj3d3ZACgq1gJeZmQT5E9rJtkwhcpjVC3FXwoLTYCXKhtnvMyA5EpDZpYmLUhNJZB6Pj",
  "key21": "32ptFdLej5VHJrneyk9e7XcjX7qrNLHXCUawnNKfBEDF597t6rNnMRgUoqen6oQhCGpfYWTCUeHBWhQ6Pnk97Q8E",
  "key22": "2cuWhPXmc67qzxopf9CkCkn6nUHZ94HFrsd2xoRrHV7epwhd6VzrhUrzsMN9itepshEzE8huakamsWJWeFvupgSP",
  "key23": "2aFBjyAAK6B3P4YTvncHgT4Zw4ENiQHfx16dNHAHSQcTLwdnogqa4sNZGn4y5FXGHKrTwkpZZ9xZJY5x94zRnsar",
  "key24": "3tDTFaqD8K9vC7iNhjq6wpvt9zb5VmfZ5YPuj9nucXEtaWysQewEbSnG8gWn77db489t9yB6nDtsgPBvX5w9oFBr"
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
