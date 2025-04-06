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
    "B3NMHnf2EQ58UEnnPz2jYRnVWoCLnpcjjSW2Mrdr5DVC2x49oP6sXgwx2zssVR1kAVUQDVgy573AT2JBjpdMHJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7T2BKn2CSvTngSJCNA2MF7NcW4WYvZ3fCJ5LRcLArwNqey43vfaAyzxzQaEajGZe8NJvkG6jMZiNVdTqzR16dQi",
  "key1": "G8Dr8bqAgd1AvXhbc8imVo4KSp8adP6cWTsj6x5XpAyJHpUFNDR5reCWDSCszs4xNSsdwJCPjehnjkdjsDiFwDn",
  "key2": "2c1JngCBj3bqrgYGghdtk9MSj4VCFLJwrmNsJXMTNLajZWWEhGGPUiZL7FbA1U9x22RynFAv1Npe6Qq8xjBmg4Wa",
  "key3": "HZeMsFX7TV86sTvF3daN5Eim3KnoDzqM1y38oADYsZhpfwofxDre4rXn2Y4fJJsHHCgwewZgR8YBqUhvyvCzYn4",
  "key4": "2GrLeSXtHs1ryyKWpSwzjRzmNHF28os1mLabziAnPbGo62KHKKFxPMjPvvq3gby4yPKiSfaCtgZ59siUCjhQbggx",
  "key5": "4dpWHCARBSWbeuTFczcWfekifeE1HFJrtD9n6iQ6EBRNgvrJ6xKST77k2FZtxqzjvxUK72KqPXuT9HxHiGR6jxS2",
  "key6": "6aUtyEQ7HSDMvfVFteknT4Bcdv7QA9Wzdzew7q5Qoq9DLUrHdzUKn59F3JV7gGNFEAqXFxLizLSvzPk99UChMi8",
  "key7": "ekkeGs48jt8BoPXCcEtJGfd8ieWzG5pQzZTkwmHpq932fVgTuKqpKvpNuzAwJYEZzZbUs6DQxKoJpeYiJdoZhug",
  "key8": "5rD7vLXjLwVXVHyCEN5XRDmEXed9eYnwRqzuLYSKacPYUkbuv2ubBH8A2wXeRed8qnXVXox5QezNXtc9Y1awtcm3",
  "key9": "3mN4u62uSYFDhvtCMFtxw1Dfg3sfpQfuaa9Kzhqim8MTtTzWzYhD2jKMwfdiGSoDXRjtLuDFmiXVefR193UFx8b1",
  "key10": "ssg4bo3Vj3YDDs4og1RpJExJgcHZyVi9dZpwkkfDNoeqJCUXPLfiAoK2HZR5PJfsZrBBFMjRdxx3traJa2Jo4PX",
  "key11": "3xmy8VwyA8hEirSN2c6ig4tsWCDt8jW3K8CLnGvp8ajKPkqHxAzJmNV61y46iBmVkpYh5pENXdQJ4ivYZXfPv4vw",
  "key12": "3NqoimBCYg77r7mJUa7HbgzE8rdJqvkpRNH4A2CUvZS4WidAqW8BzF499mNC1aZmD83wYGXnpSdocRqaR9dEjava",
  "key13": "4WPbHo4owtpaL7nn2CuRifDj3XcpaBGfPv4JHvc2v92HX7eE1wPwqbg3TvWW1jeeWp2GjAUGnPYnJLvByKooKYnV",
  "key14": "2khpT1YhjYg3L4tkENKax6mW4sZum5APGTPRNpHNcJJV34R2u8YJifJgUWLxzN47XWqnZ6CdWJAMivZ12kfUWCww",
  "key15": "4drctYrg6SkJVs4rjydqUYTYr2NEjPLkSbbMQdwAJNJSnVyDBNZdPPqN6nwKddYXhZogPVW6Nj6daZoiYweB3BaW",
  "key16": "5WcxfdmhyyjrZ1MxhAkSi8Q6bT15uigkNHPMiuyDJ1npMNiUabYxMtKTMLiWsJPgyEd6mLeKNJHDnmf6kiw1qHNh",
  "key17": "4zSU5TJBGA5hkEfm2kaL3AoXjG2tWNMCgBZFWiJ4tYwPV6xiCoAkKwbPqj7ERBpUJdxRF2tpr75Lynt5DFmKcP2D",
  "key18": "56x95GfWwYv6RJBo4pXFupZAwaYEy3931vcQwpY9MXYWMAne6Rf1ESRB5SquQJhGmWTtcPPrLUBDHhjUN5WW45by",
  "key19": "3EVGBQJgrD3oszG4wzXhKrx1JbYeXF161tVgyzu1uKoFp3zUgDLV9YT5fM8HMQ9AnTtGZ5Yjct56X1RM9vP5t2nV",
  "key20": "4axJTyRoTEDabW49z4r3yTRjjPhkXtsG5raWaNvG3UrocAYy6EqBDp7AxnFrmf5q49YnvAAHvLiQByu1PgXEYAwK",
  "key21": "4wayqcHLYjEj5YGVyQK2ntbFNP7QChAjjDJu63fT4fuQEej4Kpg9kjQFU4jgX6Q1XgvSkLfZqpDiQmjvaWWG9LXH",
  "key22": "5Zhp72ucw4ABraHm3m4r9EPL4a68fU9pXgxLFcuJVT3CYjVZc4ZhVYV2HNsL9PiFhjBy9puGafD64rVj7vVWSRm4",
  "key23": "36bykyzTSqCy49rUi1RqpoG79hNpcUV5CFa36rYk3jRxW2A3SsDWxTF1NAStygaK9BqbBcRvwjkFHxfiRWVcAEJd",
  "key24": "5CeX2t4bSZQDXPdRAuLKvBqVw53oS7Wni6YkSoWrwopTZXx2YugZcuUhuFGZ6efNrxL2Y87JaWHUhjttTanU2prJ"
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
