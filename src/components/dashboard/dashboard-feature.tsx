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
    "27wqQATrLwYrYkxGYJYoA4zHicMRR7JZKT7j3PdYrJXL1McHiQwKqxcFNq3x3ELUXQzZHfLzJodfR1z6VhoxnNKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WrmUV3msf8XyVUhn5UQFgyAwW56ia2i7YvV7r3y5jLtwoSgriVw75tCphbhadWsXZ6GMEW2ZFkGbDKrzREej8An",
  "key1": "2UEJwB3bjwBmHU3Hhi4Am4c429CuBuiaqzH2mX9mgHxCBLnZsdfkYMn4fdx3QdcybVj65yjVYLynGkeKtQqUNtz5",
  "key2": "4neMLqHw67EEQGX7G6RsTGG74aUmft2p4iLPKyWS4YLFKxgfaUmi6SfWvDUMaiEPZ97W9ifigpzxuQcdpq9WZm8W",
  "key3": "5hCsCjAhabxoApXkJMATEFzvZDUWfZ44zrfULjDcXYGYDyjnwKMPgckz4ndrBdvoNmXFYzBQFUCmJvE7bDjyWKcJ",
  "key4": "63VSWWF8HorszQouVuqgG61S1WYH1ei6eMBWH9bbNjXa8LSRubhCz4NHGJLJqFucu2S9YXnzpKXaw1ztAEAc2WhG",
  "key5": "4t9jTqXeHvVdZsRb3a2TkBygLAQq6pvhB5o1q7BgrBnxYTtxCH4ukznQVuNNTw91WbhDaGFgNm5SG22ToRm8kQrb",
  "key6": "4SEjrNQzWCPDZTYzj9jKdqkXp1VMgJwXHs37zbFeQGMtQFyYX5c8sq1t1N1P29WvD7UZkApLjGKJGRUiEvTSebsG",
  "key7": "3JVXimx748oC1iW5awGNpWSP3mEFYgJ4mD6YENGhZu3tmsLcTAcELaYw84ULdhuykP5rKgEgtSDZ6cSiYePGvSVm",
  "key8": "663aCEeh3g241Qvy7hV6SU2v6Bs1NN6yfvLigh52JtBe6aPkYyFtaMDS1Vcjc5mwnPVb16ftSLgsyEuXAfXir2FZ",
  "key9": "P7N8Abag1AvgG6ot3trsYg7XVhK5aKrfxxFrEnFpb978syTHgt9YPz8zd99W1fEPvbVcqXcsta4C6woDPkBi4n6",
  "key10": "3rN2tjEDEm9vV4fBEnWNN9yKM1Hu36PUwkRzyhMysRiDz5Cs6J6wyEauC5jYAxBtE4E37yrZP6zkLoq7zMW9ExDM",
  "key11": "4BtQESnYAX7fvVkPGhiQCZpHxmyJvzSkhQCFA56aVN8o37vNRTteSwtLi4tucchzUhrbffDNebTWm5RABHcGweUy",
  "key12": "3vxoMjYA2ZfPfVdMvFhuoA8QqBqCukt79nJxzurbRitMiDQ93CL58G96zTzwH53MPmLB7u3Xd2b9DAe9UQkug4ib",
  "key13": "ZRA3Ge3J3gp5KVVwxU4SYvYWQsEgNhvyBWiqzDMukqkiBbwAQ642QYjBR6i3qvc7pfo8bEMZbehns9pa2peJ6Uj",
  "key14": "45yU5E66B4Zzet5xgvEMWweJWUpvDx1sHSNkWggQkuGBGqKcAa9EDycx7J6sTSqvBtz9QozFsD5MYxExNNdttGEY",
  "key15": "8sFmfu11xi4aFUkKhBjVucW2ihGG5o3iyzswY6uVqqRujfsbkS4dwf6v5tVkuYzkHhf9qqVe15PuytYodiX3N8g",
  "key16": "ebmPDNxXrRWi8Q7eJujhKsKie7JQDUrQzMUa4FRFvzBCZuVkvLyJJTmUdGuAdxyJcZqodedqvaPaYu7aVLshg8v",
  "key17": "d2RrE72RuZJJt4sKdxXtAkw3Sy34fYTYmhbD8bDdLc2kSWbvB9vqAoVvLXdDUgN8Y7vxg3NRMotygBcHHxsjSsX",
  "key18": "ranB2s4pY8E7ZzE4UXbotsREKfQesPAnvd59GbtqaHQxyHWeNfyvvWgos4cAGWrWqDELk5TLAuf4MRQaZ5ixcAS",
  "key19": "2LPAme4gU7tivfRPPQaMebTbeUhqc2t4UbLchU6ftxbxHnKKAv6PbNjntW3iQXomL2aP7hgb3spSXisxwchq9eE3",
  "key20": "3kxFQ37pjkhJf7GFMPTdyHsVkBpnRVeV5VoU2sFZUbxY191fBPazd2KCbESkLBKakNf8s3uXuWrFfEJEdz3L4a3a",
  "key21": "25JjKVHL4YYDgxtYHQm6KjYVQYSFsJVf8cFyd5VUGB36gaifmwoV7LYDxDJKw1VNoBfZtjiDo3XzWY2U7LETSfR2",
  "key22": "3qFt9sSY6bpXTGYD8QHGMigUWV3fHLr341WK9QHuPnfBnZx5AnJBpoNLb884pskvH4cYgnRencgcsx9TuDAg1zHY",
  "key23": "4agJrN4NmRcWEzZ8J5FP7qoJYEwXmbKXS98DLDcBfDzXf44n9PdXPbChXxawZuHcBvdZjp7esz2cXSTvg6DkHYP",
  "key24": "3wnsvLGLNiWLmXgAstdmhCGi3edb8jwXnaw8QxMJqv2twC8ZPdTj5G7o76anwUgtywQuLPgyq2gjBNAyrvn2vMkZ",
  "key25": "ydWFjDv6V3ngMo4fPDRcbrpUrnPJXQZrthVwACUf9zgtfDJYpJDa6pvbTNKivvokbitEYMmGpNaWwjohTMpbwMC",
  "key26": "2bhnmEBQ1ydzhubRJmGHZKS8bdmt2c4GfgC8YyPnvjy1Z1w2x7bqd9EBqSWvuAraz18Egap1EsGKHdabhY1uB1pc",
  "key27": "2VU2YmaPTbBB7S5Hy6uPUzZ8TY4UF73ThVktwscnBYeuTAUNM5eHqdrdvVbXoRPXkyz2TeB97GzG8XTKxokEY9J4",
  "key28": "RDi7ZcZ8ijGuCQ8EvJzG6NmbW6vibUna9yBdqPtgovM3WoRJkVzBtq3sSoK8Ap9NEiMNrz4FD5cBXd1LuTtZ7Ph",
  "key29": "23h6QgftzvikHdhKDxGH4dxguvTjHzHsuSZSCEr2zVERKHbzEaZUrt1ap1CxXPc7Dj6UUX5iyDD54fvSYeoQsy8n"
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
