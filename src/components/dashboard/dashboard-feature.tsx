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
    "58NhTEeZ8UX26Kj9Jw5uCw6LwraWGrQrAJReRFq5PpyRFuzSbzhsoWw6cspEo6ASH9vJZec1GCPSR8dMrmuxZJke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZZqvphVYXqb59EpwA7rgkbMDbSnmdY9hWXemxULm3RnAmJZR8UtnohgmhTutiTdWFrX4vkuF9KH9cFx8yUrauq",
  "key1": "4U43YZJ1BVWnAkfqFmPf8NLj6LEkyo5gcvgwB2KjRbTWTnyALsUw5EFo6onGjKC886VHs4k8zHDP4xkSYNgFwwZp",
  "key2": "3VPYzSZxAMciXGfy3HbsnaE6CZT7977RZ7smWC4Ed4M4JwksoUvzDCyvbebq8dvTMfmq68RX6WRacKsByN7cafbm",
  "key3": "3eTWpQJR6J5bzEyCv69Q9AzGVzmDdDL4rNL6NseyWTzq6iX5V29W7uu7E4KhGjRx5rLvHp7pBJHTcVPhP7j1Jrqj",
  "key4": "4HJ8xxwop4jrV1xFEBk9t6c2aLMv9ZPVdT7Y3FHV4TqQB82yUDQqjLcUtjF5uUFHYZKAgUkU4b62haXAFSGWXHV8",
  "key5": "4zCTT1hGY6vzdA9anvv8qmbGcSpziBT7kACkz7gia5iDzgY1q9cJLRzxD2E1Z3tyjCMhWNUH25iQuitmNT9dkCB9",
  "key6": "5MjCpM5pidhUYyR9RhjrDgcGcxmZee6NW3h1eRofY94KrSv5Gc49RGx61nuS33zE5hxLUJXQbmJnEUqUKXuao1Sa",
  "key7": "bYczpYNX33B6oGEVVq1tqgNT533CMfbHaX6TVtwJt2N8xsEvwnm7u4XJw9vLAk66662gHHaAwRSwR6kg2EZMZcF",
  "key8": "2kspkdeUwqJA8opfu8ituQmUzfXQK5K29iizr2scx8ZJCqqzUdabdxqREEwd6WZiChYkwYaj5vFMGxzFsTxbuzEt",
  "key9": "d5FxnAsA4VCFqAVH625pKZR5nWTyzApL8DcwQfNeVQeF2FVWGq1wyJ55NUfrTbfLpziAo2wkrH1Ssnh5dBo158j",
  "key10": "2dJiMca523SZS8dLLJ3c4ZyBw9Mhj5W7e9dx1LUShFbVkJ2uu1hMJR4WZa1pp4kHVUngYBkB9NZitdXkPSs2k8c3",
  "key11": "62gATRire8cRjm7CTL6Kyvzoxwr4SwFALPoPcHALWwPmvhnzEiU4WP6kNnw9bhpMS9DWXvXeWm4qtfX6jix4viqk",
  "key12": "2dBh7sZVB1wy6Gs9c7HSMJJbpYJbQxo6EMotiVE8D5An56uy3b6DhBrC2xYE21w3KLc7SW2jr8d5zjB1YBXjDR59",
  "key13": "2WnseHxn5G3ZqNcvGMsz9xBiaQwhAWEDWwZ3U5JTZSuohVgiqrjCGBMRVAtZfGyqFdwdFXrYudnfyDztBxNHHBDi",
  "key14": "53ptyJLEVPoSYHUXuGEohogD13A3ndXB4EhSGkUqKvpEnhfCwAxAUYqiHrapvy6CcWPydZ4k1eEXyE8YjCssZs71",
  "key15": "khK2EvbvxLDJMXfbU5H5vv8NYWkgEgpfqC1rAtFKrzuvchBeWxt4KaiLoNE3gaDB97Z5mVGaWPZFwXgcVXn8z3Q",
  "key16": "4Dhgvtrx74EiGvPq1m8LWM5KRN3rX2zM4s225t5ho2GwB1AaafuuEVXqywX6C2BFxZdyQNhSdB2yRk51ZUgB2DA7",
  "key17": "hEQNWWVHzxfhxMXqqeim8ZFst7FP5HopmGjxvbGQvssSJdS2PhMn8a34SQv3ZRmdW83N1nwQ6xM6epALTjnoF6T",
  "key18": "B2urvhTNCMuifJwVFeQj6AH36L9VNEbuJ7xMicRxDdrPkw1xr2dsvLMXsnnBZiLc9vsYaYFxFdDmQBqmPJzAviP",
  "key19": "3HHfP1jTPDb7ZQyTqAYaqfcLPFaWGrjy8ntWcqYQpKiqddQ8t58Gc9r7GXWZvBcVLWvYKVZ564gTWFjwJ2teDuNy",
  "key20": "63ZMz5gx9Z933xN4WSxUtAi6bbVQy9fZkMHyyCbNt1d2p8USwNsu4ZVp3MsGEnejVLNTmLtQfZSGFDGNqGHMvmDk",
  "key21": "2edaq58BjpMrmh8hQB2o1EzKsTC6ss4B336DSyneY9XDZ9CU9eqGbQkyBnPcEYECLt3BRabaiS9izrTrVz2cznph",
  "key22": "MkUnTj3dq36UjABi6KPJbJRDcnx8yeZY9gGffCt89kpxWZdvxSXXEpqLecr3Zh7DY3X9M6tSjdVtf9oZFYHPZbd",
  "key23": "2LTyzeYef3s3YE1nUu9u9JrvW8YkEt21Mspuw1PPrrdrmGjELXbgNazoZBqoyRVyiSFxCS97kFy1Ub2iAbWbkwH6",
  "key24": "2ZE5d8tRoXbK6MShMiC9gC7wUt7AWbjonFwsbaaYVwgFMmQvJj8E7YXxLaQr3g21Ug3TV7yW9DpH6HsdbJyJ79CW",
  "key25": "5AavrqCR23Sa8C9xDLgSa6dAQ9QaeCjxdRNz7fG7AKDkeRLHZCYkiGpLZNJTXka9NuV99hDAgaxCJZaQNQ27UaRu",
  "key26": "3g9PFeHq1rosuPPCuWsEdPkQXUsRnuY8r68EAcdF1wevTjhRVaFYZsaBMc74rfhTjP4JmoWciNWnwkLb2BfmLuVk",
  "key27": "4WV7KcVGayui7TxcM4rYEu7QFS7bQfrgPP3FxVv5Z2RB6sWkhykPf5xzp63Hv27SknWAn4K3UCTQnKv2VbAr8rq8",
  "key28": "GZ9ArxNDDxER3U9S1yqUbjUJyBny8z1FoaDQLRvv6Q7MD87CoHKrWmr2Dn2i5e1jExtU7D1TZkMA6riRpZt9zYo",
  "key29": "uVvTyp7v3Ekk3McmcZjUhWr4fnqxogCKhZsKrg5XvXbSPhcnRcr9HZhxB1xXxPKLXGxcAsk8kbSffNWiJh52rQ8",
  "key30": "3eeuqryZPt7UxdSvQLQn7SUK2Zvotjs5pCiQmZLg2Q8sa3AZ1yD88att9X5sWpJNJ4K9kjt5xhQfuf83RvctGCnu",
  "key31": "44DoxXtn9h3arsTctVAMzjywNfsA3a7dHzzmzGpmaLr2qoHVRuBHmDsLq99ZYoitZ4CLFHjficVRbGeR2dNJ1Ziz",
  "key32": "4sPB7gNNR5W99wCatMhQ9BPB8rT2yvhNDoBQaV1GUDzGcHYvfRznsSKcoErepv9Bo5G8c1iUgHbTJohxxHqkLV22",
  "key33": "5CBH2BFZrCXR62QH9PLnvUdAouWbNsxnYZK6PQpS8cDjosJTAVJRgY7ibUQxxc59dpfbZSMf2VqVFD5AGHHp3dpg",
  "key34": "5maR6uvbapeNNbcosZc6kuHQ6gxY73ExTZF6jdNuxZ1sLqd4eAdCB6ogGFgUbGU83gKkAJ97X7oGA48dYjNQfiMi",
  "key35": "2udZ7D6EkPtEB8kc92y3Ei1DQ4fQfGrwqHPHvLzmJNoaSpNe7w8DzbG7bt5y616vgJWofJ7Bjsd4mcJkYsxaeBaU",
  "key36": "PoXt87FuNbpANnbfF8WPRqBsdLQF54F8qibsMLvXKpnZTThDnP6YCbEjQ6pid2dqWCxSywizN4XawRE4jt9bJsW"
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
