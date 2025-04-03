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
    "52KTqu4fTFEEQah6VFrpELxZFQUxPCxJpG5kh2CW53GNa9CeocC6M1yxg6XNCSPvoj5z7StiF9uztWQbUziuN7Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yyVLXfqUwgGpqxTdrSm1kpCTHwtK8UydpgdUpVbsh4JKenXjhJHBKd1giGupZvfQnzQ9KvNSGoMmbpDsvXpmQtw",
  "key1": "33H9hrMCTkNnyZqHJ5dY9KYLUpShZMHVzpQ3ZTL59hVmaHbJYcsr6urkxURm31TRQsBwqiV9pSb6yZHqzqVJqn89",
  "key2": "2UiVHM6Hn4zprkzndJcdkAD679M5giUt1j7YDLjGdfar9bQ2FFzLRqP19KgCXRfmbnhmDYAnoaP7DkWX3sBsT5Tp",
  "key3": "ohDatpi6Q8Nzv6THgkyBRdV4SakCYVig6HCBpzFxqscMYn6YAMMFYiV3JUkBV6Syd2hbwqqvsTsGa7yVs7thde8",
  "key4": "5baZycNuCZL5vtpA9XRzKD4ChTyrkExSvjpAE3Dd9J7zZaHHE43bhE1eSS1yctZSe3QctZKHkzQWa4BRv2coNudh",
  "key5": "3opByYvMDwbckecyu93Vfvkd5eaz3aft8cJeDhN7VkFdFejCzm6hiZEcfkNF74FoR6VW1nkstVZUJAkTD8J7nrYQ",
  "key6": "3QXaeAvR3jT6GnnF4PukrMw7t8P43vUCcMpB2gCgBQACPn7G2HLM6gQGHCn3yrVAJG8oidwAGFVYkuCHWaNxEcJX",
  "key7": "2zx6yXMrKF9LDiFH6FyoD7bZ8CqWiYtNcmsJz3Enc9byDj5q1LPF58wbqiCxGitwH587pdzSaNHALrei5qXobnKa",
  "key8": "5vURGrZS8z4GkN8w8XiGPbcyrEcfgrVThwxNcWPfUGHCPoUBfrQJEcYQPxACeK7y2LYkMK8ekTu7ZWj4vkZqpxHS",
  "key9": "4Paw8i2jsyKBZ78gaYUcYnhoQWEdhPwHH8raCZa8RkfzGjcQs1Smnt7jKzJq4Y3Xt5Uz5bwPcy93eRswMVjtn3Yg",
  "key10": "rCAG2haaatKKAA2vxNB83wfUbEBBfVj3U11dApjmenxu4zQys39YRNRFVxaVahW2CT5mvco9cnnMoxc6Qmhc139",
  "key11": "2sBHqEtQXTRg4dohFgAyzj37837tQQuPiaMWCMdkBj18WSemJLudYoj8VFvie1goXtxeDMJtwaMGrpKyrS6ZDnUb",
  "key12": "26jztUE3XecmkaQzqBzJyCbKiv9LKHV86zYpbwZdJ9wdc26wTCRSeerBqrRQ4m2qpLj3Zv3Y9LJeN4YApPHepsYo",
  "key13": "5WWihufdwZ5FycFvjRWTQbwwwUkChe5N1xd4DnvGNwbKS43UZ7a7BDxXSKW9LcneX9SVU7dhCVqLbrhy4LUPmLch",
  "key14": "2ZmxRJK7RG7zaZNfsJGqG56cifDTCZpD6hNnZSdoXNXVxrpw87Df6fmfcdkHXnEW5GP2YYDgQ64HCYD8qTbp8us5",
  "key15": "XTYUPcmfBYQ9QrJzGNyHCiJUWFzQ2s3cY3DfE2P262b1imRGKX7Ru8GfBbizR11MnW9V8nnStuJsm1QzsF36xu5",
  "key16": "Ln2i5wXAgN1V51Dej94kmreuPB7ZV4rHPwbSZDasE8KxuB7rhFiYL6x6W2oVQ9CjZ3vLVi69n1XM6pLu5u9HLHy",
  "key17": "4Nq5pgm3TU7PJJeF18yempDyMoA83CSFAMywvhKB5KwjSgqzfKA7mh27FX7BJB4NtxXMtD4r49HpmecAutAd3s7r",
  "key18": "4Q71ugL4dzHx2J9QQDJcyBNvDvJ3GoZzY7DEf783QKoMBSrd9aDxk81Xs9jKnsYkpjiwRbEzFyXwtP788NgZqYwL",
  "key19": "5nQAgjqzLPbvPBum9DQam1Gb8CpbWXRLa3HF2h1vDwXyYW7Xjzm7hJbdVi2VB267Bx1yvMBMvwWXtAgv9XsFqaef",
  "key20": "2XQi3zyFjQVkT2kp6qfDYmv4AQHKESzbhJ1AtsXbkp54eMyFfP1BhxnJfjqn3zgpMwNJUPPiAKVPyXs8TmvJcaLV",
  "key21": "4MSpmPLH72cf2NbFtk6MX4SqcbSqip8k3snWXipnTkxMkNJNduDMPUG1pKaCnYy4P3wvtd5iV9kHP7jbggUUgZ17",
  "key22": "5C2H8nVUxEYo4MjmDV1Rf9LvqMHRiULUpV3o8KCqFXUvGN2ACH4RgJ5hkNsdLK8atZw2453L2QH5boaup5wQ2fCA",
  "key23": "4jHg3NwaTz7LVddAESx9gpbdSmJG4m4P2iEcY2zPhZK7v5LA4Y1728RxduagkFTq14TsAnV1ZgMWmZZXs4hiLDxd",
  "key24": "2EiDz8qXpFaLxCopf8KPy9GY97d5waD6F8gRBPH3k6bAo4xubv6Dh6Fz9RR5DvPhVWwyobwE6z397cgQndRh1Drg",
  "key25": "3y1fa9E5P55yKpr7gugenHQGFnv5mLWMQ9BaNDgQTxLJwDshZ8ayR27HGJAk5PzL9gJMwaHKoKChqcB4F3R8vfch",
  "key26": "3r3mXSw5XwMwAkdFi8YrWgtNzehETpA57hC5quN66itxS2B8bZtmrD6c6C5qeqVVj8v8n13sUHPrBrgX4KcqZF5C",
  "key27": "2w3WRSveKScTVQ1Sqd4LJg6G91Dz9n6LxofFCzhy11HzPSs5KuYY8aoKbFfmmqtPYU5ycyDPZ7VECxaXbca6bDkT",
  "key28": "3Mt8vb7uYeXdWKSQnv9aWbHQJEETV6uHotbcpJofLp27GGM4HxECDSNjqe2Wuz915UkXHPa3sSQFhLAUZXdHTP92",
  "key29": "64LJ2V58A5Lq7V96cGs2nneHGmFqq4Q7bQn2MZaRg2DmLTizaDFkmUFcJdhZ4SECwFLiWCUtJrzgiEqGYsAcD8yJ",
  "key30": "3uzKkBFg3Ugt3FRCqJakHLa2Qyh51UqcPHzPrJxd8pkTKbSw4sUfNFBkaDk5SPxeETPR8Trci5T3BmnibegR8fbQ",
  "key31": "4Gg6pyCHZw1TtuXr5P2EeEW1AHrHYCmKy9dvG7L6fiJfPdMHYwikH26QDh4gA5sjfCLqkgT1iw9NpBgN4PfXWmnq",
  "key32": "mrmtpKYHE2PkSPokVHqsGgQyfDfABcyK8zMDd3fEkkCtMthBaz4Lxn7FZrxoLf7SUXttQSWJv2dA8skaQ2aLGpT",
  "key33": "61abxuHCyQSQDhE7zYFS9VJNppmobDMJRdSUPSTNBjdF5EifSyQCC9fbpqDht28fcz7EtwvPtvW5Jfrj9ZCcHv7S",
  "key34": "rEaTh8NNkvbxbqXZMnKohPcrenCLhqquMbqwZX27tXHhyBHtryZ25oWkQbeDVf6T51sQbw9Yj4eM6D3g7xvsEXy",
  "key35": "QCSoSSVko76F7rdeLG2HPB7NUEgXyfXvxU3Pj3xVPq1aMhfzU7g5zW721utJDBYHRGAygdakADg11VTAeqmXMP9",
  "key36": "42dEq4ddCu4kPfeGUXhSxzRrPpwMJE9mLy6BNpUzdkfFDg5jB22S5sCweD7FcYq99tF257SxCQNeAp83TZ1ekrRB",
  "key37": "5LUDbVYG3nzH62pFoZn7vE9ZMtd3aDXMFsxUB5Zumzb7ZjvdAiqmrifnSP2KfbxtJeYMFBDuYGcbvFkPEyxSSnaB",
  "key38": "4FxLZ2F8fQPTYWNGQMgNBB9XCUzT6G41QYePY9fMEhB6cdUa28nvh91Rf5TWpVmpDwxZAQYoqVA4BMMiGFi1CeRv",
  "key39": "xJUqLBKeAQ6kkQSUGEdN5g9eAn4fBj6Kft786r8sCvo5xqLRADYqm3VtQXwipP5vNnoBUbDLCdmpLE2EJt1kYXN",
  "key40": "3sWGC4xc8ssFo6SiLJ8SXQiTrjEowEZx6kEqdvUoaDgYLnTgkWHs4JE6ZDW52VtUSabVCAQ8EsKxbBmeox6F6FEz",
  "key41": "2uCPE58NtbFfbUS87uRmRyMEYHWRpc8qyjUQq55aECLUWKebCvgeSi6CfXLX9P4F16tGX1eRKMrGp97kVLkCWKBF"
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
