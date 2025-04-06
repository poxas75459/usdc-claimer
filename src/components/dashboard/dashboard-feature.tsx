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
    "3HGE248fy8FiZLSQfW9ByvMvMozagpoKUsbxiJRRgV15b33Em4i7gH6UrtjPyKURxxok6qRwzzqNo3MZFATDMZkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65pgTQJrmMsmpxqchgvZacdby81u3XeUF3emvmTV8svg6vgMRXUCcgqAiNuqtybTobLgGqoY1jXwDbm4vjGLt9th",
  "key1": "47JEenPPScMr45JWsTJMcJAPXSL7w3LaNJPAKV513q1LWoHxiFz6JUyP3Wgjc5E7RNeFDGQWP3jyU7B2Xu6HetCf",
  "key2": "5BfzLigGjUaNew1TokcGFG5T4jp95FiTUP4eSua7dFBvmcxWuYzLGBcWELL7eLrLvnCPTquS8EzQELiAh1523Kye",
  "key3": "3iPSbqgnY1Bk6P5tsLsj8RUXUkJNyDA4WsfiM84tEGLdgy8vozGwWYJnCNDsJJenLaU2kSteeeT6QZDaSCND4RDm",
  "key4": "53L8oMBfYqQx4i8bhCncPaegsFctDvuqtX8oK1oRw1SDpnvpCicZysig4Cxh3Je6MM6R9pz9YwcKixvpXdjLkoHy",
  "key5": "4GGmJ5FgKtho5KZDmrTArhkLXYw2ESbPDjCFCbuvmMzf55NySoCf8MHgEQ8s2EtDHhvyGMwj5nHYPzAZ3MURHtT8",
  "key6": "3CDrzDj7pqzYXN54ARwtDnWgA9y6tfatxEShzKCBgXn5Phb7SK72HrVijhP1QYUrXedwztHrarfhUSzBJxw2pnYs",
  "key7": "fE93xwDepLtEwU91WkmKxkxpdrhiQh61BUZ9Rq57hUqSK1gkAmL6RNTmzVnjfwNdY5QGbGPoHurmCKe3GW6fcsR",
  "key8": "ZpubJkep6rrv5N88Cm8vcjdqNikERCaCEZpwC5vPhnTHzadNgmc3og4pMGKNVeSvTiofEUd1U4L4vxLkUyBAeaA",
  "key9": "2hCTYKTr8mcHXiTkyftUShVTWHutLRxVDnmJDhXwuiodDTRrGoDwEcdq75yuwZ3h33ybiYCRL27qxyLeh98VbRtW",
  "key10": "3vWAuBc17QXeVvACDKNd824NJCPXcR1CeYq4B2E2RrczM2K2LvwBxhG9Vrvraso8VmVtEC9E9y6FQnQQgCNMWvqR",
  "key11": "3j7CSGoCNLraCL8heyoxAV3HkbHcGXL2Lr7bDPJ6soPpVTfvbgpCaaMKzwwCxjCCG1XFoyZvEPh45xFU9fYNQTRu",
  "key12": "3bYPVP9gha2iuLcg3gFcKgCLjsBamu62YJfhSBkgQiWuotMtQznyLK36cyFV4uHXptqYvqWLUTmPn7wdY3qkRKUq",
  "key13": "2XWjU1S8HukJtru29VbX9oW6oojjWNgwxCyNPkashGmxRniurEaw4QHtHXzEoHFq9nZvHHKefC1dj2Mqwir3VuaY",
  "key14": "4u19NRyBkEGyYH7JH65N5jtFUdd9WeGUYmU1twQjzdgUBGtHMYrKnoMSTUvv6i9WhRgYDY1s85xwybkpFqwPCHfB",
  "key15": "5R2w37BahYFjMyAvhdGmL8sHSaVhu3h34Spqk2WYwMgsyF8trWLuuYj4ozQV2a2Kco8cP1mJctm7mvhDB3ZfKZCV",
  "key16": "2fwCrjBi22BwkFpDAT23SDvh2aymqxBqPMUfY7mbohffV2VtRphAZj73amrVaZ1XahhAfQS5KjhNF8h63eaS7BEs",
  "key17": "Curze9ZV9ftK536UhAteyff7c5cUD59GgEuhyVKrBbq7bXNvsAvExS7FpFSFa1RwSTUZMsDa7ktYqSZLhpZcr1y",
  "key18": "4kEdFW4ZZzZozrem5ZxwFUe1iowpPKMyJ7C5PvWxMFhQwdAe9gdakJvv6xoQMpnk65CfxsxH76sqH9LAPhaf8B8V",
  "key19": "4RWSDRu6vqjD8iKq1M76gGkEZNpaFZsshKSBwo77nJRX3j66jTpKkbpv8MRHTedCvrqZCfDTdwJEEoWGuJQwRHmc",
  "key20": "2J7MhbgSU1PCiJpYuLjpVMTE7xZmvVBCy71d5DMiz2nuVnvzacRsrwDEd3UakP31XQqe1bE7cg5wxdMoACpSm6vU",
  "key21": "Y7ye1UQDVSu7X8xjYkSZsCKcBoBEnKhhkjSEJfohF8KJBbpkuhmn3Q15uvfTEaU1abfkyEWRTqhbvgUoSAoEnWC",
  "key22": "3bXdQYKu584Funyh6Jf7gXtpKaqg1TEb4YgPkd5JWeKVSP9HFE4co6t2yXTHmqBH4sYdcto9FypDcVLKp5xvX1WH",
  "key23": "47WVALtFZWaWMp89Fegv9dh6R6Jk5nW3awnnogpZzqLFcurxr4XKzvpUTz5Bk1cxFZvAgJ1J3DBQbcF5CqJ99JiX",
  "key24": "4UVMAQ7BPNgrMD6bp6XtaG3nRrNMBRhU6McfWX72qMBTGk5uEBTLUyQoeWbacfWXwz6enp9DqPyBtwhqrNTU7exL",
  "key25": "3CkN8WNQPcNHfGCZmbcZHmGM1TUnmnEwRWo5yLSNMtbkUWHdsi7UhEkPyuSk2JPAcyNVzd3RQtrYxUTzXNE8ukCW",
  "key26": "3RBcrnDFyQvhdFVmGCXCbtwugRqEEmAMr6iXCZCEpXeMrrNwrgRmAX2WGGbJYsdw2NnWFjJqWejJ4x2XCL67fctL",
  "key27": "2uwGygD7oJuCN96asnyMRZSCFJXSgStgYYyVeqttoWhzeMTJCZoyWZ7LrTfWdv7mNjas1sFB9HLzVa7Ts33Y76M6",
  "key28": "4KvchAD6LiJ4u5KkUXikACwv55jaHuey5QZmBhqNycby6zCBDh1FKfGPtenm1NeesnVtpi1jxEHbxLcZyNbMUg9p",
  "key29": "36w6nx9dvZ61NxzeYvCD4GH4ACQsKmwq8XQaAZrrvzQTuQDbv6d54ostpGxcjvdcPhvrAcdKFsoJitHKcFnxqGmW",
  "key30": "2CqHjMLe6X3UVXFGNpYbZWEaJG6cRwxSFeZb9b5hYC3zCkDa1eqgrDGtU7vCJu8CY4tBXKC6RPduXJn5nMYsrta6"
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
