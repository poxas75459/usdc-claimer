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
    "2Foyq6ZjsGFaLtAcSEZMMYX9foHR8VpWBcLNKXpV6QJAsA77eDuzmQWtTxkdeDFf8ZVjXmcerewLEw1Fs6thHzeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JxMbNCcRdhGip9XaicfzWKxGDpVtnqsJggJknvVCtbTKFCtT2FgMxK4bSmYX266yxiXRtCrniUAhw4dg4TWewV",
  "key1": "5wJh7xbD52BjnzT99V9qLdCWLMidPtDrfwGGS7i7XhTr3ZwPSc9UkMJ7hLmBoPgXbzhn3ySkGY7XteXhqZKGCcwK",
  "key2": "SrUuvHbvNPMKirUnJdEXh1XjGnvfeReSvWj7eA7bRNZJgQCKDD3jvxFnD2U7oDdzQLc6LMnqGrgdHxsM8pQfbrz",
  "key3": "4zX2mGbE8FhtMGSZitsoGL4AqZ5kRiZmRSW4XGDBSu1qpkNVTdaNEyMmS6Ys52Kdv1meFRReFpyTZ1XHCqffA7MR",
  "key4": "3w93cmAZYH5Kyx86EBbuiRcsgmuwnHPj7CmmK1Nxpc1zbkTvWArjjYKc15Mtov2xkpk9N1VqPLn39hzrPqEBPhQq",
  "key5": "5qbewVd3yty3dZMRFQGSSFtxi62Ct4RfVLjPc2EbXfS4bjq3CuUZGQA8yVs1YiMJtKj4mK6jgHgA8GxUC9cEEmNt",
  "key6": "7pZJrBLiLA8nXeVrd7CY2Ed1L7fj2bfCqEuhUfUYh5c54NwkxRqAwh1i29ge4SCZsDbGaqiVtCxj5CCybUNm6sc",
  "key7": "3iCwJwmobnCzoLk5ChuTqyMRvd6GasWnj19aWDsW8iXJDJZAQBhjBu6HFHVFy3PVo8WSZ83rdVqXcb5NrZJAYEVu",
  "key8": "2GZES3qpvPc8yYimM4bBnpkpSMPTwwgVdtNZpPCYjnMy9VKeN8joGpZvMhti8QYS1qv6tb8e2cxJE3UTU8tRqkP5",
  "key9": "5JkscQD5PzTEhcVSqSrCuPBH5igNUUk76kSUBNFB8W1nLCNmeyiezqimV5PRZKVfY9cFyvcdnsfoKfzx8Ev4L7kG",
  "key10": "5gWpEkUSA2tRu9vWD1x1D8A9eayMCibqGhf51ooMBLpdwmjwiUVpiQdpoGQbbo5De9Vk79Cf5FBXMhZ3cLKu29vL",
  "key11": "oa2ygrTPci2eYpfzwHrqKzeoHDWeNY3UrWnvbEnB6DFqyuyFbBNEuRjQPWPHiit9sgwsmigfQTPTXZnvVjtrQPR",
  "key12": "3N952AjNTgfNuSYY4dAtV3XwduioB9NV16brVKN4xcAgx9FiYkYecHcyH8rYNK54AFez6Pr6yXSGwxfYHmNqLJk1",
  "key13": "44u64xE5Wke5Zcw8M4KcBS67LsCzsVUedpjEzsa3XWZa5fZbQSrjSw2KkCHXjtjEHcn3i58qs1UxGeyknjX4CtEA",
  "key14": "3tucNMjkgnkncZ7jtS8usKErEPfQmx1iSNwRB73pMrrDG36w5b8Fiv8s2awy7seigBur9wo6sjvX9LEgr5MPGCeU",
  "key15": "2QDX7uPwqPriofD5KeubDbHX6ke9PFdtMeJmsSr295kfpgn5rn9a2N55XbJ4uFwNcFJc4rC5e16SiZsi2iVgt5uW",
  "key16": "2VRhGXEW6cNXmRGe8qhwY1aM3wz1Lxg58oDMqmN6ZXntRyYCcBKg9PLcTCXsuxxiBNPnxRrCX6GsZbSxdYNPAUzp",
  "key17": "5tyMyPx4Sj9CypPGKTGTnp6V7hKozGJawL8mLSH1ziX2r1o1gnwqmAg2WRfpZPCymJSuz2WckTRa7UYNbQdCJUXC",
  "key18": "38GYGwNxcdLjcWe37FHvr9AkVr4eER8wSXNwLQzscwVsZnA5m75D9gTPy7TuJqNcSGxCtKJ2AmX99AhnMzfoyBpd",
  "key19": "5RNoNQCqDiNCwqueHr8shHyohxhrGi4iBjEt4mXQNNQ6mMqDwTJptDQd6Td97dRFb6ucoFM8hWrsvwFuZ5Es97hZ",
  "key20": "4gYWbxMG9H22Pwz3DfAartUcyFbPHJHo6W9gWgLnb9eL3BJEJcN2mtaRqjSdhdTvyTjG9iTaHwiLCqTHkSVVSkRy",
  "key21": "4YNnKadZ6YvX9Efzoifu1TetrLBuZumUR43aumDK1H9QShCtpAuFm7AeoSr9V16YKJ8U2ERuVqCqAZyjbggdcAZf",
  "key22": "4dNrjNhwaCiYJfhSEUXKcaqjGEdgGxcdyohGEnicxgTvpjk4mHrRwFLTudZauvK7gkjbTbh4XRfTQY6ntAhArvGQ",
  "key23": "4vkBmrRxjJkKvuiQqCmvsLPHqmwaGmockdy9VfeuFsPLFRoiUhabcdBLrLnThrdiRiCCiAHuTEj9spgdPTj1Br6W",
  "key24": "21jhB7Qnw1iMa4FDUD2Wzm4F6dnaSFCNPxddvz6Qq6tGCfL7hzsDCds27ptD9s4x5YQCn8WdgPWvz9mpks17f3BM",
  "key25": "23tmUxpqiJL6Uk1rrFbuKeKiouyCuXdJhbXquwSQkMektd82A2NQL8douVcE4pMYwiusqVZUWhsn6xkH2sxVRAN1"
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
