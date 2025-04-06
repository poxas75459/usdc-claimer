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
    "4yZsA8eAEMJ9k4g33z7THCaAvLJBDSVerMEPHT4HNVxLwyPn7Pbshtj6Ww4RUfjCxjn2FBi9cEzcfKQxgytGTYCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3faiaKd3ZYAS1GPdnKBzCj7aX271fHKfkWabG9xikr99FnXcXFMoKeRvM2RUtPY8xbMAkMF4XN5w6KrPCxqqYST1",
  "key1": "4nBg5npfMxvUUnAScLq3pMrFdLkJ36ScKWNr21EHJyLsuhYEsznoWdNWPtYiBiWfK2fg1dtNgKbR21B9NWMRdncX",
  "key2": "4aAkwftW1dbrHHMppJhw6USJ4bS99noBqKXjRjCk4Aizs6QwV6yDaf642TeaoMMnvtw7ZMZBsai8M3kMEfj2QVm",
  "key3": "5NysnE8PGwPodeKPqzPzsbZQY9YPoam5bVYi4EkbKUJZWE78DyPZ8oF4kxWJUvFE2tN9VwCu8TVMDyqzRhsvcxE9",
  "key4": "aXnjzbMudTGrTzdiFxMCGYUSuyUXHcZKECAeFJEkeR6dTUPLLZEYTxkNXdiAUazRsrSUmL6nkDbT9pZchAAdHhH",
  "key5": "4WvpD9uZeqWNCvwQVEChcyy6nyzM2YX37EN3dz5tAThvCUA7dZedB2P3Huhsv51fpBPYax9Tpij3iGzevhP6Z34T",
  "key6": "2UWZ5iDMGGxzTT4y1fugiuYTLfQDyqmKV7M4koqkmx9XknH8VJxkbiPuT4gYc8SfQj1K2a6XM7oFEYDW4q6xUqmm",
  "key7": "osiLTDJpk5BXi3Q9kXxVhKeguFyntpuHRMM1hs7oy5gmmD275W4oPu8XuisgbtYyCQtnA2524CgW9ix6QVt9YDh",
  "key8": "3bXhu4dbg5cG4mnDn8VaGxhVp2HH1Gq6H4UGwXBkurMLZATtccC45nMnstQJpqj28EgQYJFeJtbcpCNkJi8GmiyC",
  "key9": "2rrzTn1qeJH6WSG1uyMMYRxGF84u7WvcxXW6cNjtgzZoV8nE37S667ah7MUE8hw8N1c4DL9Xttf4eD19CxjNMFnr",
  "key10": "2ZXmSAUMatRd1EnZvomcmsmqn9DcuQ7g586GLjckVS1P7XFEThRpshh35QvpPLzcqKzNgeGjjrfqhVgmMXDvYN6g",
  "key11": "45VANCa2rhJ4HDm9L5rH5bc8EccseJWDJjNXXwdAkdfZ3FZqTFFZKo5GoSdf5EJ8eLhmnwMM4q5nRkNrW4wSiS9K",
  "key12": "C7sjdr7TEJkCenqw65zLJiVXSfCwQg6XjULK1STjjYRfGWrt7ihEQNZA5A1CVa9LRuABKifk9fRGHAmB49qSaeW",
  "key13": "EqUyREQ9SNMYiKZrW1QJwagM2PkUfAgjNRHjERZ5uJ7wiPnaZfoVep51BdVtzBTZjMMeC78dhhU6EwcfkCZp3up",
  "key14": "3JvRPkVJQ2ZGi89LP6vQvqt3Mq8P41m96iSnAe65agcTeGtozsqgYd4oBuSNex5ZvbmcVivDAiP6K4vVwYpxahwU",
  "key15": "5a7JJ4PLuqeenzRmBF7QvRNMV88XArZFrX7kNqWLTfP61QCa7WF9nEWbxnzLLPPBcALM5Hyimic9jfcVT9jPGnL5",
  "key16": "5DVXWkQh2UYTfUMNQA5xa57CN9Me88TGWdrARUpQ287CgjcgMSsgAGUKxNQcBM9Gv5haW2SXmoS68ewEDwCNzKgd",
  "key17": "3dTgHDcAhWWaSkFdQtFm3cm5poWX3mZe1U1gKU9Rxbxp3hWmriiFkKBRYySFQqUNtEc3yyr9cMF6pPUBSqQ2w8zx",
  "key18": "57kjyaDBJjU1qPDLycsHecdhueKZSC1fqjmZeYHrdHu7jLPuqAaTnFuY9LaApXUZYU2fsLFXDSzuC6kWjceoQDU6",
  "key19": "34D8FwEem7mB2DbV1aNHJPvRj7CehZsPiGCkcxoePc7TGx4gMgYJZcw1TKcfBFetFjvgmNaHArNnap5d8VSXQZJo",
  "key20": "b5gbcLC9GU4wQKQa39oVxcEL6NrnX42HdpX7x9NvRQCRh4NUGVR6mebBvD5zfyWxQ58ByXsL2tgPfAZtEnPyQAS",
  "key21": "FmpcNetXbnUL89uRLBZ1SLBU81f7NTRochx3r1dom5rWrwdd8o9aL93bN2ZV6PtB2DHfdnsnQxJvGpqc695jj4z",
  "key22": "5K4U1PqTp4Uapu4uyA4PwCupNj1F4w8NpBT9NeXmEgCL7A2nz7ANP6zBwXBUXYEPdHYYKYqQQLgNPmDt3GEqzKXA",
  "key23": "2btx4S2afxZjNnvCL21crSR7j9M2tP9AKNWriqPwEvHkyatrKDsrQTZRJixDYVyJH4yvQmAfAGL5dvH7FkmUDaKd",
  "key24": "fvrhSzwKpAinBV35a6G9dMPWuN4sgFEm3Xid6DCGy6DV1e7GsAXCrYZDK9Byns5Yz9erwTfNxHtkFBFinvdfVTr",
  "key25": "4jAbvfkpR2dBFK7s5QsPgGoNnoE69dWA6pFcQ8E9S1t59n3T4VZtUukaGJNQ4iQ4MyANooaM2ruevjVXrFw1xm2M",
  "key26": "2QGhYDk247G5C9j8zTHgNg49r8T6WuRJYC7d5UqvvHjuFm34NC59B4G9pA4XKTyWJU21jLGgPMo1vrj77DChZX5T"
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
