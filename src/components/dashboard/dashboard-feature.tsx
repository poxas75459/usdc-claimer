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
    "22DTfspTAQ8uTcr7DepQV6gCTvxw2XV4eEe77Kj47b5MHnro1zSZcTbiRSgmYdeam35peJHJVTer7RcsJwX1SqaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inYtfmXCvFxy7tLkvggwu4SFPfj63oTjvYje5ZcjhAo4GyoTfwr7ckowyrCXbiiXNULAjfSZwFZfJ7gihg5JSyV",
  "key1": "4vfWzkjbCowTHr3gWMgd4oBookHBKJQzhm85RXSsmeM89aTWApofGpSNBA29gBqedQd9iuGbof3uXV12P4PzNr4U",
  "key2": "38SBavyjF7LwSCkMi1fsZmyHuqzU9FUaohKPti9YNgWPvyu9Y9CedxaRYRCHcGwGEgAKp8saj6tqwmPSrnck6MX7",
  "key3": "39B7EVvGmRA1nsgyYnvg3mSfefvT3ugDL1XCYwHLhZ2eBmYWGDYi4J8dMnsQ4qHdFPCyhK49S1yPQ9PYFEUf7aBJ",
  "key4": "2hAeyFBvMJjHDW48gF4SUr1JASSXfEfb28n88F8quHQhKB4R1CVEhp4aAnwNhH82jmTwB2Qp1hdE3PL5oC6BU3nx",
  "key5": "5S4P6V4ztb8XMW46zfsfFDUf7BwE1xCUbFk4JyWaJzarEpxh1WbQ5x5r1HcoFpcse6ncjDCKedWYNeQZ4NxZpLD2",
  "key6": "3vozPFt9BVTEptqDZLapjDM7C4AgfwGFzqLn1j4En4ym9LqdNc8j4AV1FiDfSHA6unGuRoM6vqdb2657C2AeZ2ud",
  "key7": "2o42eCZXpbGseWfTs9pZbAYrPyWN4HcTBThaGMA9hdN27zGzr8hTWGCMSM4J1hJHZf5BCc2BWziuCuUypcppaWzA",
  "key8": "1ww5M4asDUZpkxGkqQLMJeGBCGnxghCCWatSUrBrqSoMDzgUQgbYgPFhXGhWhk4dJMyfkVgbS29vM5t9VKsXqG6",
  "key9": "5JBR2UTNrwDWcixKjMmnN3HjSV2yb21Zv9wjbzqSPEZKGRjEzEsKMg9XYQ1zQc4hQ9p9aRHGfdnyLWUmecrjHRwK",
  "key10": "H8vHhBBEDQMLz9wWbAxgAGZ9sVay48YHRDTyxPBJLJCjnpq112XEgNybcBv9iCkq2cqTR5WQEEB2R3JR9fPDsLw",
  "key11": "5oL6aSqaW8XYB5CwCh6gXfMWEP5xwxk1LPapD6QoW43qmRTWRp6m19o4dFgCrur2sh1VGsbvxkVkrJd5hpdmmDxQ",
  "key12": "3uFpUVjExfai5hpfnh4WRwrBRqaxphoFdX9E8Us76NUQ8vNiFrMfBeYcWAuPAYJ2iibqVovRBGxEHkAdccn3mUfv",
  "key13": "2EgshZ8xYhY56rVHZt1MqHZf2TEQm1zw2koPrFSxMY9g5SGVzCHC8xj1E8aJGErg8hJ6C4Gs76Yistcc56XAWKwG",
  "key14": "44ZC6GbEGuox8E3r9q3Kf9o8wiixeChNgE8sQCrcXJ9V2Cw5wRS43qZw1pM65aAeNGEPgWkNpEqx4MArjk9ihcWp",
  "key15": "5tq7yLLLZfTqFHyn1VmCmWRiSmK64uBQ6URpYeST1emn7HoUG9j1Ggb9iKQLwEXxx9vAdS8t45hUF43C66xp8ynP",
  "key16": "21kco7tETJzr5Zfgtx4RgmcGgEgYVexAMii6X1t7bNLN54dECPXxJHxEuFJiU2T2c5pKQL9jfRoXUBYDJxeLXnsi",
  "key17": "48dhnoiwQJdLnFVcJNnXyBD1fSpBcMCn7nA9VaRuPH91HBBGcp7GfNuTxyx4timifhHqvti3WzDnxMT748MEJfig",
  "key18": "5GQyxTqYaCK6cSGqBTdChyxAnsotYmWZLzuhNb7h1s7CsiqbUpeePugP1TRifBCCfjp5RRxdZA4HycvwqqviwnM9",
  "key19": "2xhzKpk6rwJNCGicvkNmGFqXMqDGDm9xmiwD1snYXmNQs5t4YzMBfygbQ9ArhiuzSwYanNeQ5ebs7bs4YPDDZ1wN",
  "key20": "4t9oCj8xARLTMn2eqE77runzhfFLDDcFHnadtRLfviyNBCnkKuQ8HKNBV3ZdpXYxEQhN5StssXLAua3b9f7mypun",
  "key21": "2T7FFAZScQ2J8WFQs73U5zhfYui9mGhSiS3xLXyWPXn4ZxXZ6XNqcyBEP4atsVAjVfkiH5WafQFBSTKZQT3c8EZs",
  "key22": "4uvXKcK2kiHGL3KJ3iVmVba454FiFwjPKHX2hnpFgy1dpwhweB86AEwvsaaqrBCbs9ivyfs8r6HPuv8Q6ntWwiyZ",
  "key23": "344LrL4gP27bw4jCSo1kv3o4pW4fdM6PDm9nhYFibfaVYQpSnEuqeEsLoNobd9XZ5LD3sYwprNTPJQ4ZjFQEHmWy",
  "key24": "5Q24U3CqFT47TSy72JaLzGEHpdvzwPA6L6wwcRHfH1NrR9WUvf7sqofet1X3GT2Y4XLkTUVKL49AwKHcw97edHKT",
  "key25": "5MDAVQAhEQvgwUpMfgz7JUx4Go5u1QbUFkTmPtYghd1Ue6QprmPgWwB9Wb2hWkMf5yfzAnBcSzWKeeffXoDb5AeD",
  "key26": "5zJ1VwVKSRssKGSmtkg2DQAwC7tPoAc8mZm8YKifnRvvcQuqNvLFxRmDEuqW6avgLWYcBSXkMdkfYX2dJJwkDKkM",
  "key27": "4uWmWdiVvUZCFp2et3z8yFJi52EbBcVusZUxGTsFuqkjMnxpqdbSUckVwk4eWNVgwMRUNWHZqJmDNG77L6LyoYdS",
  "key28": "5U5arrXWyVSocwvXQ348wnDK2CYvYxGRE9o2s4yEgZXeJ6VjfpK5wnzebFgBUkryK44R8VKbtMhGojMup3svHh4q"
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
