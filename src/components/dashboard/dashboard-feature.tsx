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
    "5xDjL2E6MG1w7i6XJkzpoMeRbYgsypHWCNUSiPN6gZKESQRs7b44rNNXCozbNkZPrvqpavTxRVRcKGV44hK6b57d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KHosN3tUrG1gMmtdzpSHs4iv1QeP6r8y4rpbjcf3ZjaDmZCN8YmntrhspjfTRoQBFpPQrzmc5uNciWUF78hftE4",
  "key1": "5CgHiLnKPtn1A5S8scR1HNkuuqYBsCXmBRt5RnqSGWxNFpAC1ou4bZ6CZkwBM9cK62RAKQyhingaCZxMqWEBtL1h",
  "key2": "4HG4KS2L1V7mNeqqcJqjeUMpbfxwU2yPABrmrTCMwAPefJFDRihGKGwQvBpR41rB7NiEBXmghrso9NB9c87d7yDy",
  "key3": "2N3gUWApEPbjg1iKQAr8sCQwtWHMp9CCJDRT3hNwajwGX5ygWUm13sGZuacrbPEWR1f2j7HRp7fJrhT1TtozvwoY",
  "key4": "jon3DM5n9bieXABebW9a7AW6HK1TBPxvcikuEx2YXbC3gCpZoscJLXsVd7BhhRKv6bP7k7rrKSUNZh7JEmW59j7",
  "key5": "3aRUURXBeG1PLUR6RpG1rUSbrkpa7WrrYw8iaTwQrQVcCFWb7n35g52wB4U3rEzWE66YqFcF5nYoaa7C6jVSL6TN",
  "key6": "28KGK39cASqQMA4oFT4G3DAZNuvh3HyD6Z8Nb8a1AbDRETaddrVuRC4YDnDANehA4jagAYAHkchhTfp3dHcYdxv9",
  "key7": "5MdFDfqBXMi3L3XcCjuwynNra8GH2y8DVGqrxSFgzMyctFXYYbb18nLFrFvmhqM9MH88ujfLdwd82i3W1CH4TkYj",
  "key8": "2m3yvi4wCR2nhu7fu9VuaWJMNesM1LkmviPg46sbdE6w2vWDHq4c8w1HpD836HtFt54r75SjoVFLqsS7ckDJvWpu",
  "key9": "3g9hqquxM76gmb3qw38sJjKBbXhGoNbYY46pLwVjo2RyDrM3W3VoVCVGN5q23QipEmjLqBA6yFpyBmZ9LQFFZYKc",
  "key10": "4zKMbXqC6b6Uh2GuqBa2M64QNsvmkuGDcJgCYWmnVajoYG7wAY2b8VTkR2562vZwBcSFEuQxJGgffRBmGjdoEfDL",
  "key11": "2A2CStD28C26mvjzCst6axtKywQjSuLWibyrxBn1rEgWVgMPSreasAyEiixAHhLRY9oGfw9yWBsokVPnHM2B7cPJ",
  "key12": "4ousFw8nLFVsCZd6c3dxqw2UWKEkipF4iNdL8BsDVVsf2AHeDpoenNKmqagedYJJXC6S6dMNxtJvXg1h9sbcu9oY",
  "key13": "31GuiqaoAvvDu4TWDZLGhFQiobNBpREowWWAvVfyrn3S6o2WorMGb2JNomdnqELk1qDA8vrHV2trpKxWS3GXKhaV",
  "key14": "5RuMBNAgTAE3e33BQxQLgBZa1DXKVWFtBGkbZxT2etZBwtFUaTKs8rW3YurDkGhCX7qLTxBryuVMGYQnA2ndEEK7",
  "key15": "3ZssRse4SA5eu1Ej17yU4vwUj3KR23WYaznYyXmnasdVinHdSHAzTuj883eY3XhgLzqdvtyq3xNGtamqGUK8zdhz",
  "key16": "3pkD5Na4LWMtQYvVzxRr3AhMnaFaMgxeayRTtHPZbgQvBcQEs21d97izgY6P1fRYFKGtJoiwsCXi4sJ1WiPb2iWU",
  "key17": "3Dh8MwjCf6Qc2dSy2j3Q35ie4vcxfbx5hm6udnfvM82ZzaB1yPBo1NHJmbKbAXAuW3Hwz9EsfbA1rA5r2r8aWamV",
  "key18": "4DeJrMgbpJMn2qmFvEoenr2YJx1aahF7dX3SD8KEwnVXjjppsZ6nxiyv6de4zsWXXohkEvYcNAgu2aPZ7yDXqaBU",
  "key19": "5sJphNZrXX4YPu75L7XwLotQkytYrg9sMqBraGVbuvwwkb2pKNSFqRQuwBvUQmPfgi8KpssRB7VQzAswgUz3uoab",
  "key20": "37RBCnmQVFnj3y13gy175ivu3X4uQ873bFVgsPtLjs8mCTQH6U4e5hSjuHKwm7eB7sdUnkf8rGg5VXLDbuGWPxe",
  "key21": "28HCqiEDmgWEPAt39VkK1qZ4yaKgcAuxJ4KiauJgkLxACw6XYbfg9Ehh8BdtTJzQrvWN45wJcdSyBHfEN1bHxa1R",
  "key22": "5s3yUtwsp9QfMzowfKNgSdaMeE8b5QsF7hNQnrJkdkimzoEP19vwJNZgvVqC2NERGkyj3wkMnRhqJixXBcxRNm8v",
  "key23": "3UdwwnSHNRZALyRXVBjG5wScG43kWGvfUMKNY9yyKtPvM8LoDCthu3MErUV5STMuRo7TFBFy72AWM56YtNXJePKQ",
  "key24": "2qTQhXipuQ78Lv5NNJmyy5ksqvwSXk7ESe1ZX7a4xBzmsrgGhnLcMQEfnDqKyXXe18XyKhsdD7kFShwPWovCcHyu"
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
