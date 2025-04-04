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
    "4UGNwgUa4qFZpFC55xeMZjxQ9gZ8mbPKaEUD9k25e9NAnGpBRjisFxgRo2Z8jqFUoJbyzpWpHb7uheowHkrKtjDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUoPU9ga1D4aDCYQWgAjsTYzQ4dVaZQmUFbb7bzHhaDX6Cs9BwrB7jbXnxLTKPv1DrFh5SA4R4CB4ad7VUFEi2S",
  "key1": "xhmYWUWzg2aXhLngXVfwUwTQkcvt1oEwXpUzhZQaydyUaitCuPLPicy5evxfxKSKyjYDZWe5mgPZpXm1Nohbh4u",
  "key2": "2aQ5yjD1FvRiSrPfaF9dhrHM4iEY6XXKgsHxAGPeKojAWcJBBtyZFcarE3bzPkwECTZPmvEjyB1H47ebnfqobDSQ",
  "key3": "C7nA4eSsqGvDsTqwBb2CeR6AueaWZeVviJ1JUD7R9rtqkYaspzGv5Z9a1Pk2rdgvKahwSMFo9vSjCWUEU9WjDVe",
  "key4": "4MjMKYkikCGubxDWSRW55FS2Hn3yWKiLB3zXDMG1ixaBuUUNyYHrxLgeR3K5r44MGTMt1GQ7AzsRg8e6kpK7m6HT",
  "key5": "67DSLqUACK2wqjdFhZ99fiNrCNEfDTDKeitGUvZRmPCkRrh3tCFAXfrgNPGPLXjX6KCYbjbWLfqtwvYxN9Wz7SX8",
  "key6": "2QydX7vegpYU8q8ZhMSKYSc2LXM4LZv71dfPZ5XLhmHrvu6aDTpMbW6YwhJxaW9bRuTxpKhudRQs1k3EXZHEirwF",
  "key7": "5UzhRzzKMbvYUnDGgcQdqXYPUMCYbwradcZMrKzT8kHNtaLe5yj8FzhYhDfSZQb4ywazksajnXyRQHnfNMhtrj7E",
  "key8": "55c9C9atSXuPwtXzdWahGjT8VRmtoNjoN9xFZZrDztcqtx3UmWAUBq95DddNVcxZJFoQ5s7qxoS1gkFE5CuiDJss",
  "key9": "4AvbugBStM83FcoRxK8oLFsg58dV1Po7xFQgThPYHy46xdNzE5XpV3NdFwnfdWW3sQCRNadYMLtEi6Dy9CsW3tJm",
  "key10": "4anjt1Vm3uUKSn9x34LJmym9eEYAcnR4d3Vd6vbtz57yiZXAXS1fkcyCeyNy2GG6zW8QNNMTY9LFtzy4PJEATgdD",
  "key11": "3NHsQxjxTUp7J8s95VffykvfgT8bLCtmHBVGsU6DSez8ut2atPqCfXq3d9HqRskiKioxo7oySgDJ93kRu6ZQvmg9",
  "key12": "3cE2nyAfmnY9UAhJKW2gtrLhATArrzcPTjah6MyhP4zcKsoPHVnTWwCLpyYfQ4jZBnAJxhewNu6QCq5veZ95DKT6",
  "key13": "488SSJRC8kPnrWHMPbM8aRjfCuQoSe9aWbHM4tjZzcdstBVQuyx4duq5KopQALJkNVVcanVo92cb4hzQ48rYGpVC",
  "key14": "36VQdod7kVSHGoZEWsY7NThGGL7A9v7GbF5a2emw5m1KZ5TxXDrJbF7cbP4vfFiJJBYfkVbKhg1h5Lsif3jLDxGr",
  "key15": "26PegzWRhzBDhHpGHyAhvnujVGEwdTwfMZVgqJAJucCGv6VUd291oTubfAbXziptFd8u6823KBvbG4cbY4QE3HeS",
  "key16": "5d7SHXZqXdHpxREo19kAdw5NxAHXhXms7AvanhHoaqxo83Bfhs94A3fArttQJYAKe4LSoFvbxpDyrHi97VrctX7x",
  "key17": "3x45HWEsqkFKEtQKGhURFLVb2QLvVCGcmQ1djiw5Mo26LoyqopRpfmGYvcRdGmHzm5T4jwxGWNvyrX6cCaA9C4dM",
  "key18": "55swuEa4w8REzG4MA8a44xZyzWEY3mN7HheXqAZhQVgp9j9LUMzHiPtT7MnuaDsrPcTwiruMZgYSobdamRHGQcZX",
  "key19": "3QPJqwrxQXzMMaMWf9c4iuLC5CckW2p7CWJgJKy3hJDzXgEjLAcUBzJvgztMefMtoVXBFcrcz13mgfqVhYmVxF3n",
  "key20": "582fhs2XpcDNLA4JonZTYQv78VG35rtdyR1Bos9aNmL3gWBuqfYvEYbCDKuY1ytoT4ZhBZxzmQNtFzhbkQj4McDX",
  "key21": "5CeGp9iCEv6NUBykSu7YyEJJSUttoeTQgjrWRn1LRRervMp9hQg5t27NxMsjTY51xscKy1VD7UNwEgtAyoUckRyY",
  "key22": "2gHNVhEFwjo8xFvYnY6r6jiERxwrmxyBeeqhhN47ApG2MEVsCb1ZjScLMpZFVo3ipiizQyxzbTWZXgMKaY5TZdYC",
  "key23": "CpJCqSUcfp3RUKdLZpTVeUdrzHPUS1kvSxJtZiCYyWNQxLEUxaTzStXu5q2bQzAqRZ5rcPCqLhFuzJn2WikhD9r",
  "key24": "3WXKAxaf4bcZuX9Pyq5c3XyGsDyZ1gY5hP4jw8StN4o7w7oNWGZwRadb5e72LFsqFBbu1MVJctbiQF3fA1ooTohx"
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
