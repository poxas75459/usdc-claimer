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
    "3cC54jBJu51MMM3NGtDeYw4881qxrEVPC6vN5JZqFEEPpw9DvTsNet3DtJjbUS1HkdJKupa1BJSWp3wbBzLecfpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcMTmZm2AFYim2j7PTABRzGYqr96Q8NhWK1FJgztuRYYa1ryh959qFuLcXhJU6o6vHvXxgcALCtEu31EF4robGQ",
  "key1": "4T5RowWBWiVHFNLxVVzLEwA5hvoEVZZ3Ph2KbUXp6MTBxJx25nF91CmQhbAwZLkbWjQXKBUouSGSj8WkURLMRaWD",
  "key2": "2RB2TfteY34zcC7wQNwPbS24fvvz855VkjEd9CUJxrW5L4E8sWyXj6WrSzHzeQAkDTRtYe1sSk9n3K8UNEk2yzgB",
  "key3": "2y4NYagdVPYbrX4eDJG3sAu3TCkxjfMVrUH2y4NT1PS5Z2Hv3qaD4587A1dbFXyq3G6s8JWTVKCWWJ5pzdYCapVm",
  "key4": "2CfmGNQkJmXDiPAcXgnt97zAst2Ea8aNiZvbfcd46Rduyt4WfCYFy1z8zbEFGu9yNmq8RdjSfLwrxf2CG9tdFqWw",
  "key5": "2udb8KkihySyvHnfDwhBi4t5CetLub876hreN8UwtLqZYGU59PkQSob3bNREJBVbrSgjJ5tkEBoHmzCQj8oJUcKN",
  "key6": "3NygQayr6LSqpi5B4Fiibrxh2zF4ztcVd5tUpDyTt7PY84HLhD5WvgYj6EzCa5KZMRixAZu2Rr5YADZRnGYmrwaK",
  "key7": "kX9ZTynUz9dgHKSomeGs2ADw4w858HqYKapk9h4nLK1ySWoe1sHUeBsRJtq9zfogQVMszzpm28zAr8sGhzmkcum",
  "key8": "75nfgMM8dcpjYjY1zqiePwUUpXLwNg2GXe1padqNcoks72TTNsDkpYAw7jBagezNdSbjLbBUDsCoiw3azqz5Jia",
  "key9": "WatWujAqaa2oYjfZeBYxzMnDMnbTXQme9c5GGaVCYj2DmCnfqQBdVZadBJbeadpNMRzWAtMoZwGLV9cEJg3Ln7H",
  "key10": "5skiHVepx7NdY4q3r98uy9bomU34ybN8h7yrowowX17NTTXto2NDqv1ZMguS7D1vY8pexqrTJv9mzR2wHSpdq2C7",
  "key11": "h7hkFRJ8vEdQs5MSPRupQaj5W2BheYcW1z4iPMFfiH9SZSijTPY4FKSibxWNER48Sjw3F3iV8pdaTEieKn3o147",
  "key12": "eWtgzizEnEksc4AXuYfinnQm5hQyqubaaRmEEMbj68QEmaYBrVEMWqEuySZttBtvZUpXyiK886ze6Qo1Qsi9DwR",
  "key13": "4uPdgPcGFAP9KtnXDU9y7C8L1Vgoy7mESGAjLEaurwqprQkH2nPzq6e5fLxT9w31iMo84Cgyb69hutgLwgksByg",
  "key14": "5MH7KVrWu4DhxdzCXKF8mScL3Q1jLiWMETcPvM9CQMjjLLgYrWkqLrBjVBe5zYHHtn797ZNtcyEf8V72S1aPefRE",
  "key15": "4RZCgkjMuK6KsDsB7NtZNLFBz5su7QiV3EJozvrJ1598N91ax1dGdHqUkqQ5Eh3Mdh57oKE2UHtp8zYdWqAoMfNK",
  "key16": "2CUfUXx1gP7i9kmGrHZVknTTD1hukiU29G43SbjpPJnoDCcTi9qmEj1ecJfQJBPB6RqKfrf8zgcsRXeL9ZqVA1ue",
  "key17": "R8HkAo32ZvUAZjz4uBwuVwm4ZtCX7AMHVpD6viVdmo1kpS1mzgU15L28Fva7bYRF4ZMHFgzAgpYSgeqiaaenDSn",
  "key18": "61igk6ML9NF4Ydf1M1hgaW2g45j5tyLLducQV73re8LAJBKswYaaDRwhckbVFtPbx4ZvV45i5tbHDSRmsCkCGdNF",
  "key19": "3dBF1gdXM3Pjn7YkFcnK35AXb7SyibkGinKPUGAW7TBBvvWhSLxaXxb6XxzS6riXvq5ve22TaAc818do4mBkg4an",
  "key20": "3BNSUsHBDVpUEHBQFBg87ejP4HY7wSorsUrzSzzpBvkx88tZDSQ7r4TVsrpTENUhxJ3BVP9zhunXTNJ9D5LJiTvK",
  "key21": "Hj6e6XQWiGk3BZzLymJEEdwhXZFTGfmQDXc6VcoYLDkieVXr55S33wkchPTSXt6Ng5Mz43yFranP1KqhwYAr5oJ",
  "key22": "5Jz8zccaco7g1uK6t2oj4ryQEFVzAtAQKmuhYLyFc8NCpwGvKYZunyY2W5C95mDwfwHWrBhrsnR8GJGjkEPTZpwk",
  "key23": "5ndLJ7ehJgA5NaZgFnDP3Kzqn128Qy9Bt64oDWmSoSf7TUHQ4ZozUd6jAPVt9rghK1Q7YjUdpyUvQnWVDKKiqpUW",
  "key24": "2X5W5n9C7Bcr1UNxJ3TpuWo8pA752fBMT6yDC14GDBMp1NmcRFjWB2k8BhBvfqzxy8fd8PrwQLv1vib2PFBv8iAh",
  "key25": "4vFgf78pcAWwYDmDofamAzVHGZjfxfJJTL75sn36316fAnXGGwJpqvDdbPnvKygecwwjgjeJXhrm2cLM9QMbanHT"
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
