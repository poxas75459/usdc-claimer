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
    "2TdzM8crjWnsJTpEMsjernCQrhwk3bs9w21XUrmKAnsxKCXM2VDSraAXcjNZqRV1pBeSKMEWceeMGa6CSQd6LohU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKWWmmUJC6U6qn7cfXSCk95FhUMLTG7U9rDorNhsCxFS76C7YnSoyLUZafphtuTtXtAo2xqRPJ2mBAsr2UnUUYg",
  "key1": "VMAwLrC5mNt3yYRRqyigrjN1wHKNmisZH3BHxJ666uEYHdQpYsc2uhBtCQU3aawC4L5hVjjnk8uu3YNC1Ta93jy",
  "key2": "5vf5ZM4qZLyaU8dHX68zp3QTSFkVnqnkQgmcW852tzeaPh7Wqs6Mjc4Y8D5eZRocYRJdcrmXZnGF7t6CYk6WHKzj",
  "key3": "CTt3Yg7AEzCxA4ur2tsuK2tiaMhMw296kVDbxTvBKiKELw8jBtizDyWimZ8r7oQUbSU97JnMu4ZZ6pNWgjaCySF",
  "key4": "44y93t32SxYAwk47CSnq5er9anic8AZziVRS2Va2ch45EmGiCCzTCUs8jnKQcuxqHM9H3yJ1dviRVi9cNTNWTn4z",
  "key5": "2nbxqfQy85NyuRTH5mVZXdjxQuHzKvfvCHMJgJQxRTThyx5f9Jtvc6gmHSmC1trSPWkSqSfmw52MDYhuhngTMbia",
  "key6": "4471rEQE1D8S1TFEKFeMfQcjF1hiZUmMWJtXPGWDfCG2akwXLx7zviNJUb6GDqzEE8NjoJmXEXVAKetadFJbdNsK",
  "key7": "UXFoyfTKzY9aHUNyp7CuRB9JYwZvfjinhPjWsZo7g5zSqDU4ph29NAzNkdiRbtzA74hrip92Q88zdq2UE1moEQw",
  "key8": "5eWVBnnrWhPC773fW12zBofbedfr3q2fyzxkhWvK1Pc7FAYtRrYLZ8nFCYyCmpcn9fgtcqYeyb5S7qevk8Yiz1Fw",
  "key9": "3dsWEq3zoYA5NZKmDZoKmrWv7h9xByZRDkum6FetGBws3ketcCca3kYf3xt78w9tRCNh34UGvXCQ1xzvSg17p1Kp",
  "key10": "2noCoK34vMWA4f5AcHwjmBw1xKAydcNNqrauvBZUqsMEv28GCL9JMZD8e9ozrxNYFz3xtc9aJK7za1hhdBkBnCA1",
  "key11": "2wyKR5EwUmG4evyBpBAztdnQNZ7cx8FssVZ8rjAQ9ze1JDjQ9wDh6D9vgksTYcaMY6ZuyeKPyV3MVDCU1ro5w6yB",
  "key12": "5R3BHCxtc4UVe3gB1mpNH4H5PxkAPqMGQj5Nqj5bU4gpZGgp8LgSbBX2gFJyJJgsqVhjAXoEPUgx5qwXEAoeZAcS",
  "key13": "FZ3TojTtEeHurKc8pXACCriu2KHujPTZwXwHNDsfh8qrK56dgL39wRoeSEJe3WyJnwtUSCnmvkSSyhXb4gYostZ",
  "key14": "2NHuTSnUKWwvMSJkCVz4SetbfeD3YUfmyKBLN8Hv6YEmasA1nR3ycQJvk4u18BQ8jS7eZ4RCxH4bwgDits8Auo2w",
  "key15": "655dqSYLtiVurH86TPWBBsU7PYATWdnehcXg5Q1Hnz8bvs3y7hMSeecivvC7YRNngbzURJYSDAfzK7GcX9Mi3qTz",
  "key16": "3ps579ru4rSLBbNLSgmR5r8RNbFHLcKbWSytYd7KUqLahMfSjsLi7Saa6UFze6GTrHaRzPpuxQwV5z5SaqTfUfMk",
  "key17": "2EKy6MGVyrZQco69em9kXW3dsYf3gvDWjmCVi4gs6v939tE7VKRuzN8fofvcketegyjZdWEpqAoUazNUdcwJCUU8",
  "key18": "4uBBQWEFrbxgBoqpv7JZ4kqZTwCL8vexTDVAYB8DCPkTnDimb7WEdhG3GFEDgtPpgXxbZtJgKg8bMFyND61pm5Bc",
  "key19": "3UhcCUtaVv64jVeGNTmzUYpcYsujj63kXx9ZxjFshPbsswcoxpdG2R1ghZzrhMjTCYyMMB6v3fonaHvyw641BX9X",
  "key20": "3vi8P7tFzbgyjwzPaLsEXp29YdSE3LQUteihtSNbEv9Nahuknh16SHjzXyM9xxppj7JFpEF1fBbgpuTHf9ZkDuHb",
  "key21": "4hnCqtYeZcUY4g3Lsmpc2ESubq8CHdJMjv1DxUNMwM9YjHb1cWP1k6yMeoviK54csBVpc1vj2o6UKwwmdV465fyD",
  "key22": "21bBknDHVE7pYXHdWkkWRwQDHxCwqZNFwt7K3ZQGHQCVPHUSMLtzMSv2maoCiR3YXjrULSUBsGdujf9bWZ2pVqUP",
  "key23": "3EqCdXQU5peJs3bMmCSBgJRvK3peyywRNFKZZ6NJgoqPBoN9L2otZs8S8UkHjTkinHRYBN17VxAd2YWJtqy6NkUc",
  "key24": "2UhoiiYuEwT3RhEL7s6ZVQNQh8o52hRpevnYAMqRcaAGN7fUKRMisDbt4zQ6vyZ4q869tSwdKV41FES3cMQk6zVw",
  "key25": "5Y3sKff66dRj8z2z4H6mY7UbqdSZ6JQBLkgHVmzCwHz8S2HaS7xWPeaFhjekr69PDd8qJvEmHnNt9RanT4CMxiUt",
  "key26": "5Lcv2ma4mdm5vxuKc2nAe65D5kpEpwT9E4XSL7CB41QSqcZtBhbcUpcJzroMhTVwB1zJPgJUk2hx8dQnL8unatiW",
  "key27": "4fQyRN2TTMKaq9dZEqmdWm3Wf4xARTFcmvNXffu6mjtcSoVF1HoVDpTLUjGcro1ojj9wCz2KQYGC6GFNXVQeZikH",
  "key28": "veCh1V1NCWZe2NfsyasmN72YpivsH6Etq5y7vU3fB8B7Hon4g3xWTqhgCH3MMCrBR8vU6PSxoeuPt7jsC8ocQd4",
  "key29": "659yMjp8Ab6rLxHdh4b3ok9qLavnjHJFgskxEJ9vqrpJ4mhPW4bAze1GZNDwn89NDCrAmyvZkVJWU43N8mRsMJvT",
  "key30": "62C6PjnpVPVtHFRMef4656c2gFK4ws17p48GGW4coNwLUERuN6acPKFxAvT9i7QT7oGttQ5rcr7YXMKB4TSQ4pXp",
  "key31": "2wAPoFt7BmCDqf5XpPHQnfBz1hnbDCm55tEnB95bptPYndtiNGPW8vc48XdcpZEB6eZHEacL3pV1SBug9Lfqj4JV",
  "key32": "4BN8BESBuiRbqC6CeH6q2bo8VQKLqRMUN7EM1PCaA2QP9BHv4fm9yZ5roiJNNPfCJKoFdPaVP9jq4XCQ2sp45xim",
  "key33": "5t36CibMD8dk9MwUWRv1hqRMUbXNQMBXF1tLX1rDNX8TNsMq7xCof9EopPfrjf4JwApGsKqExrDnhLj1KWeoDLQs",
  "key34": "5q1AAwRZSyXGrTrrjFk3atG3rByxBtK4gUcNeVg85uYKN9FH8D8dBsktR6aKJa4zttNMsH5dAadRVncC2U1DNAK7",
  "key35": "5DUVJDPjRie15EkQLiDoB3qD62hmJcogVjmoyfUmKhxjUcKcT3orxm33oEJrykeoX8Yi81jnkhYyV7g8Ho3xsBvQ",
  "key36": "5DkDjn8BjinKMJgxJCxq25mKz6GzjJ1k5FUSMcDNGKfsJ7bSk18kCJtb3cmwsH5hHEEF1Rt4d7pAjpgffLZ7oNcx",
  "key37": "ATUHfZ7p8RTqdtRG8XkfsVPmqo1ZXnZ7zNWA2YjaccggBTpPz5FCWU6HvCdf5rKHXE7bR4rNdDsqbk2qNXdGpP9"
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
