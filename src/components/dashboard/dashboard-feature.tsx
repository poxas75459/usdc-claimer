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
    "3fBLkP9toUPkFAfYsRpkwLYmJ69cwAizbyQYH9MJLtMNDjMKHRPXnthYhWFnjE2uAvX8VaL9kDKQToa6g1tz8TLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3edgbChdr5RFcK1uJYfzyoK29wTxeFSWfsaHiLWFmq1emXKXtoMQf8oXxm1nCrHSmh8HT2NFUhCcmcfKAQDQtWoZ",
  "key1": "65JA7xhC9txgRhb4yodcEVtNQ2jMhSoJH6uGbf6jS1s7oksKum4jM3xmefn4mJ3ogYCcAw6swfar1yZMGJYkVQ4E",
  "key2": "431WLMs28GqvYBrtntaMqS86JtyPnW2WU7x4E4A6JVFEP9fAypKAaMuii2GSmTZLuMtc8JUR6AmoLkC66fKG3wZf",
  "key3": "2vm1VtA28pViV7tyG6jw5FkAATnMayc1K1KhFtEV7XohYE5P74JC5KKZxJzKTc2yP7G51QAekdmVvymydncyvvhb",
  "key4": "2UovuaJwghyDyt3e9q2BVscbcU4aKYZ2ZSw4H7Kcaqfzt14PgcGJuioiN1k8f2AdEkKnwCc6ZtSD7ZrisxEeN6DV",
  "key5": "5L9N4bKCiU4E7hppG6XdBBEmsoC7DrSjswjjDpc9amXQkaGVEhLp9o6mE9UEd8Ks7sxXwScHvsFS21tLihkMoch1",
  "key6": "cgk9NbB2129vdeVuF1B3aLDv4LhE5jePXcgDxNeQHWFTAegtnXU5waf9VF3kahNXfSyXLZhdsiz5D6LnFoFdFRf",
  "key7": "a5AHBRYsuX4acYCNzENfzpCydYYAnB1EiMKinL1gHr5oPQmb7EXbzRfE1oVkz6yJK6G9GJ8YwfHBDcyA6YUf9dS",
  "key8": "4bFpBwnsJRcg96hULcVVHfb5Qyf2LW3enDPXJcCcWjszYFL7nEcQQL2UzMi4213cc7wRaKHQWdyhrgKFs148oBS1",
  "key9": "2Qf5VRetzCj6ZRT4P6eFZwniZnXtynL9NKL2JNevoHShdcUWtYaephKvWxDLK4SzUSBPt7Ao6GsJ7HCEzFK16V4q",
  "key10": "5jo3XyMY4kWiVuLaHgvUxnxDV47rZcoBEc26psCvXCsBmDNZHR6bDSQzfp26X8ynbNzuXZHayTvadkH2s2Sptwt9",
  "key11": "pYemN2EReWkfM97811tXAR27f7noCnjRtstESwBVc3KvX2hazhb5FJDpELmFn9oeP4syNbmhfwvjYzanb8N5jaA",
  "key12": "AF8JdSDj68gZdnhdX3F6UqdYCdHrMnJxyYvtDHscNBANV7B37eDkfUGUuJ3bzBh6c6ycqYvNcJ6Sj851CLeVzYw",
  "key13": "3SxjqrjiPUhMBNCcCvCczegzypQNCqqFdEZmyFLfpCjDvEvGUkZfkjkq7CG964BiNi23KWeTY4U8SKizKjSBwqCX",
  "key14": "RmgrnXQK56vy2aCy6sGg8rv2xDBSFvHFTy2QdnuhMFV7qVGAjWXFh14X4tHDNywaCuqDuur9dLiXgLeBPmcpFCG",
  "key15": "3xdqjSTZsfXVNqTcWpK3QGvDm2W5j1fFTtyr3PP9w9BputyVvaPqtqciCAa551vpE4pSmg5javjZjjrhhK7NLaec",
  "key16": "2PjXp7kEavQgTJZ9DXCyxS6JanArKZU8HqMW32EsbZ5PdK8HVeHLpFoESiK2NttJsrTryzJvog6uiut5trPTD6Nk",
  "key17": "2nK7tYHvqca4fkTrhJ59YgQWaNstNGR55kMPm3gFdW8K3mygAUJaZuPcXHREpZAqRxqjXrPZkzef2TBrABN2sGZk",
  "key18": "62haZ629Mzfca5HK5t6BfyB8Vtq9V4s6Psf2nKkS66TsUwXFN2FjQL9Zwuid4275FohSPzS8vV6YXWUvnzENz3d3",
  "key19": "5vRxvpoXypedUMjh8hHXVe7deKKtxYSay3dwomn52wmVTSk4WiDjBofWy7Uj2NqFDvGUBrKr9Fu3wWQPsuYgf3AH",
  "key20": "5j26ESBBGHcrZDRfGqhRsG1L4hx2QCo44FjfukYYjQYnGKBgCKUZtoWS6VuX5bie71bETxdB6XyAhFQacZmUtHqV",
  "key21": "554GZK68RV9mHKUBrKbLPeerF9KqyB6gMhKapVMMESXp1G7f7Bs5UCj3GPkXCnaNG5rj3joywJEBCdRpNqGnyDo1",
  "key22": "3nnCPcRTKxY8ezBVtUUZ9nkU4e7ZRPbHDrFbCV3bTTYhoVLWuE6rUC7X7JBJBgYTmYJ7ZkKV5ns8kDtGw4RYV8np",
  "key23": "4TuGXcuYRmVdNHk2XDmuGCfbp15ahhok93ivD9hsT4SB7ddV4RUX4qY5EKkxv2aaYDk8jLRsecMbLNMMxx15Ywn9",
  "key24": "2NrLfVMMPdcFyjJERyUTC45B53UZk5WSC5zPAZBtvoLZqUgsEK5jo24xxEo8rQ1vnGB8w2qVfRjt9jJsQ1HkY8k1",
  "key25": "3ePp4QMenUzwqnRy2wsPa7j8TRrqDT3YhmAFhWuTp6YTBVp9LzZTKw9pbimohRUErcSsm1QEAip8bzp8Jxwyss69",
  "key26": "3zkNzGtGDp2LwngX36aVknHWWjXoSLA526koL62pSdxjsZ5vjpC91LJz7kfmD5fn4xMtprJwNLQ4JmPm7oFjzBAm",
  "key27": "22SviXVEVRmBL7UfMXh1D1gsJNoV9TEYF1o4J6iY84jeL6Mv23AFrjVwp4wLc4SjFPJAkfMJKzBJ5hEXRA3UWUuM"
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
