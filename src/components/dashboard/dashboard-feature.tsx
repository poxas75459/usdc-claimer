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
    "xkGPEtdts41R4DD69f1oSajviA2JcEf6cUXUcNGN2aVw9E7HbzLRdpZJxA64eLKd4rMzNXfymfUvrprT1ykRXnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otz7a7o2GceqSVm2r4DrJeoK2kExykyZ6ANam8hih35czY851kiSmsqqMJQV6XNv7RadNwvhvuLUhwvTcJnxwAt",
  "key1": "pa8pk9mrbNRRAwoVBz5zubtfrTyChHeNgpjke2s87Sy2mJ4mzwHaQJyW4wXMyKZvgx2pja9ZiZrHJBjop6qcc3b",
  "key2": "5WSaiVdmLVEiJaEKy3HinjndvBZQwggPBCAHf42TGBEEqcML4Dmx1kB8Xbf7xTtC8mRKgYytXexbUFYZ6Mm9x4HD",
  "key3": "4Qp7jbAmUqMB85BGpjYBBee7HJKE1i4V87oq23wo1ayhAAF44ERnSi7vpbvNx7K22EqUJ1Cs3wc37FFsDGEibrLV",
  "key4": "a1ek6sRPfPpESDFzYFWQ1T9qnh1LjftZsMg2mGkWVuJ8xUNAR1v7QHkuwvwo5H7VEbxhCKuJu5ig4JeiA3Ymyu8",
  "key5": "5p9bLbSAcEo3jciEioNNjCxRYMVFFHEds61skjYUB8rAXiFBCaHUqMLsUsZBqJYbJBj7zuCswxuLhuxbR48fbGts",
  "key6": "VW97TT1g4MCezurrd5DUMb7zUzt2t2Yz9iKZ2GwWb4LvEPkV6q4dCJZarsKN8QepEUagWYCjZ2nqPi52bnZU2ta",
  "key7": "3mVGBXcpbHXsrVHBbPmZ55im4N24CUR7uU6TmFnTtRQviUX3HBG6gg8Mwhdy5SZ1LPwCXXsCLTPWKVjrjnM8VU54",
  "key8": "4b13nva8MnhaaHUHTeEEQ9dEbUFMsUrcYnoM1UHZ9o33sxNpxw9sStEcbVYfcm3YzgXAZ73NnKUBV6ZCy8b3hqjA",
  "key9": "4pmbMumrona4eoB1syLKLJC78GS8bVJFZ5R8HKp6hFyMEgwQFBXMPrGr3UwGS4paDqk9Pg2VoEpcM6ijaph4X6KZ",
  "key10": "4xPnizgxzyLD18eafM9WRjA5yAG19QVuzGthq91T9eAWdLAEHk3qPZz8vBa88RUGReAuNJYHHgXFwiyuNrTfwdj2",
  "key11": "4Ndz4mBfutkLL6u66V3rZSciWrEoXENy1FrR5ZLAoN6D73zHnj2VE9QzZKZ2jda5TCPzLAuNmfmiFv4Sr12h1av2",
  "key12": "4rnmgVrVEv3tyG57Mn8HQbdmFhfbRUpJf5NJ2yFSh6aeErtKKt9VPbadqTwma45zd9ZMPafz3PA3duGbfmyCJUio",
  "key13": "yjnVT3vjF6imUsGjGyfF8eSc1K1McL9kE536BNwMbiAkpGemuYGQjA6qqFWLhEGFzeSaSU1y4nd75JAPZ6Brkaz",
  "key14": "4jQYgBkri3JMHwWEbwnu732pCchJuvR6m4KqyCxijix4MeS9EDRrBNax9TFqV8788CnHRnSybUDyByquTUAY1B2T",
  "key15": "5R5DtRMdUg7nwzSwVnFatyusee6ivoCitTCfE2vNvWG3RRzgjm6rPxqN7kP7gww19AokAYS45H7ivvmkjaPRDuPb",
  "key16": "7L7tWTWS3quUBMGJw5XU2N7rwEHAvCkPiR1QCup6kFoC5K2teK9fnzAnLjP9Ct4ozR6QbuMuEeWJnh4SMdEHy9j",
  "key17": "3W7jsSXaGrQcwMZzeMNNuF1ddaCVWukkMMMqhurQJs9wtFNACNe1WvdhkcjaQz7uUqtNrF4XzKmhDdPmTdsJCeMi",
  "key18": "3TzSZSdfWtrVJm5vdJgae5v4FzV4eAzfrP7oJWEP5pjzg9d1V6QNTbiMEx199NnT6BEv3so9TWtfR4o13EcLgp2",
  "key19": "5nMi2d43LCmr5dUaVcSV42V1xBVpVufxj9ZQkHj2qhpcUzSQ3LKHNfff6YG81ffYdDbXKCeYQDqF6UJ8wrbxjpws",
  "key20": "3ZZisi8VpBH7pV9AMJLMqkc2Ghn5A5PVUvKFeneRYXdcHy3x7YK6Qg9eBHQNF5Y87FPZXPrrPwkSiHjDwiSoKZEt",
  "key21": "2avCrw29a6tKgGFGB5Pd6js1w7yTpkLCqn4ne34jyZfCqpYif9yHBqgwka6NbjgkUH9su8ESuE7jn7FPARexxQ8J",
  "key22": "5asN6dyyAZLZoDayvbbhPJ6ZVVyLcYAG7HENTCmPt3B7zLfMgriwmfnJc2L8ZhVc4jWgcaKo8PPiYC3RW3vbyMx1",
  "key23": "58uVdwBi7c1dUBdjWuJqBA5PT2bhEwCPMgGgeJwafi9RGLvXzaPZTdykQMdNkEi2k3NAkx3vonyH6tSjB8369xkM",
  "key24": "3QHdDdkDUggq1EgPLkVkFKnrqB4LWGwWBgVjcq6hUo2M2CHhRdZuZKeg2RmQBR89ZzDkpyGjFK4dz86iZdbx84V2",
  "key25": "wYgEeXynX8kwLg7834JTUYXxWjSvh4N8ZwgS4fSUiYrYec1k2i6knZ9WCXEA6s32LL8F5tNmRQ2z6XGT7FaWWL9",
  "key26": "3kShKckWmjh9jB4z2sCRHxV1ESorMtB4Fy7HbQUzs21YDW4yyYi4kkTGSiXnt1NcwT3NFfbGqzpD36Ss7YPJyPB",
  "key27": "3KjpyCqXY6uvpqj6bULqQLvmJRFzmSNYvhCQC63KddewHz3q41eZrd49mVPppcY19EArqNQc4ApPLqzA7DEAGUxF",
  "key28": "3kv3rn4NmhvykMFefhQmEEFhXDjtEJkzdxrYqhttTrnyrevLe6xbZVByfgVSdpRj5MNRuudNVbcBPXsRRq2yZnpW",
  "key29": "zYAcMBZ7RqsfBA333ssVgZE2dSWAaarWeRfXrAxG63aqBfH6NbdSFaZzjBsGKeEFtordoHz6FL26HbRco8P7vrF",
  "key30": "c8193XsVojZ1C7PYdSq576Dtq7J1Xjjaqb2FUnRNTSYF5VdvZ3b855ANnXNpSEJCQABx2dHMB2rUaxy4Kegp9Zb",
  "key31": "3nr3D5oEWd7x6eUmcymSWxnxGuy28XMrG5T66yuKj1LFSKTz2V7BMv9H1Rq1vUq1e4Z1yHWUz1swcfy1BysuHgKk",
  "key32": "26YQ197jvnCU1motZMrKKA3hnsf8KYEW9a65H9gjsdc6q6mG6h5xPWUj4pWNQ8pDFBp7NQxRRLh8PsXXyWrfXjoP",
  "key33": "4tXhH3jbApG6z5nuSpnz3vx7tVeC2yT8iuvhxxqr2CUWwQHK1AufzR4sDBnonNHvZ3xw6dTqAhYJtqpxWyBMcEnG",
  "key34": "RJiKynh24n2kJZBM5CipZeYbtxsfYxuXK3JynrNM3aenqEMcxb9Jr9HbSFQ4S2po2XJUyTNyefbvTFuXLrWDQSD",
  "key35": "4Bcca9Rz7d7SJDMQXwQJkdJspMNt7LE6X5xhjYHmpTYJZinjdsxYqTDa6nbXvsLQGB6Pk85tMjMWmLZiC9qdFxK7",
  "key36": "56kv1BgNo2LaVZj9RRHVCze5iA24Ct2g73ikU5vVmAdKpsf4QQ8bvgkvELGyrqEAnBCFpjtxShvtagrPeesyMJTy",
  "key37": "2Q1e9pZMNmodvAMcoEUqh1ibyNHgobCuCrnei6QtkvKLmbzhQcTuCYcLLZr3EoXkZmxLLLVKWBfVPq5LKf23rFuo",
  "key38": "FXUJzwGC3XsRVjHa5wb6FyttzpzyMi9d6XT4uhn8AM4YJJPtnwLKTcZeno6NyLPDvj6fAjRQgFwPQZcx1jhNiJR",
  "key39": "38nvoJ4kYWQCBvWm83B1yzF6FajVFhBtamrqc7DBHLA4UrDFi8hwCyUYgwoZ1qyxd37xD86s65bArdADW4DqixGQ",
  "key40": "Z4DZSUyaz9D1dNsD6Btof1YnqmLrw1nGbvaaCYbEyyCXSUPayELDrzFMinZVtmDqRCVQRZyVj1QpWFjkgEcS3JL",
  "key41": "5cuCHmBh7w7i1W9Snf3VpNmTcrLRrTWoy72ZhBHUsFGijzQmAVMhA6B2UD4NEQRJdy7Y8RW57CzRwYUZFRZBo5we",
  "key42": "4GfDA6UKtGVduUKFo92GctdJ6XnAy3wtfZ7reZP9akAsHguBAXjoeJ7Pd9pzGRJb7F6C95k8Mt1ejBr5ELzKKf51",
  "key43": "n9hm76qhde7up6TLGrUY9qHWaJnNc9VtRFZb1EXwzoWTgYGRVRd1pMLv7a4v7PpXtVCmzmzmM9oZgkNS5Z4rvFv"
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
