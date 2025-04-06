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
    "5pKSQKW7HsEewug7ETnaxiHQyjFSm29Q93KaCrqPxqVUVnatcXcoWfC8YQCgdr2Kc3krzE8uPgMLaYgY2FoGuNp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bd9p463MmcXj6gC2WXTnNenVSTR2NBy7soDGgKjnfP5ZoqixwPCs8vV3ZeskVNoyMC9XnGsf3K81tzedtvjPMhX",
  "key1": "eEsjQbD4qBV5BsTPsT5jF95yVPBis4MpLd7yTiug6XTyVdtV15yPcUXo4KcPYKGpoRPFTYmBGbLrTktyCkw3GLp",
  "key2": "21qXEbFQNQYx4ego2HJRTJ6SJCWPhNirKrbfaDYVerWFQffKHUNqNQqW9VL6VwNuncn9bHL8HG8hfaj1EMDXiyUX",
  "key3": "5P1jby3gSJLdVmrxWHNXYQ5WSHyB4rnsrfa5itmNbJzi4cmDJin2b4p5vWSm9adiKNe9yVpCcdWuUnijMZUMiLgF",
  "key4": "PK6amFRm8cycrmkQTSJcRDoYTLhJfMjEX6HEg5j1dThw5AtghMgSofjADrQyVRP6f6ihgnWhQmzX9zUp8wVX4w6",
  "key5": "3rAHrvY8EJTSyEqsXXAAHKFeEKao82hQZmyCBsfPMgKsE16c48Mx4KzYVuph3iyEUuDbSz1ga3HvmkGUs8y1jVAr",
  "key6": "2tEQpZ13NjDhXHTKka2A2tysPM9B8oK517wqqaT6FBcF5rDCDkCEteZwGCxivqfUHEhWxzKHwj1CFE6K2nPmy3Je",
  "key7": "5njBCJj4zBk8UxP6YJoAVztrP95UNY8bdCq7s2XvTHNdTKR1tqqmfC4S173UcfoDDNtrjLjZ6fDA1CeKGZ9E2b5v",
  "key8": "2yYHLx4my6bTdb7eYruXXBxgT6AfsiXArbDU9WwVwvF2kVAciUR6g3ZeYCW7wGdhVdEhhJTozMLKaJ8N6Pqrh8Js",
  "key9": "4iQR2kqSMfzrWHc2hTNbMTbDEBjrHsmB7VYKXyxCxYLzTQFM8n9pEjbBtZM96irRczQdWymd9pzqo8GGgeBAkoQD",
  "key10": "odKp3znQjuGrK3J3twQM1uVFXxEzaKPfBrkxGAnV6n61K1n9SuYSUsh2Kp13hff7N2wyT2wYhLmMowZRT4qZ8Ah",
  "key11": "3Ah4TanNRLtmVFhbvJmCtPfkQTWNGgRVSAnJGqRLQNTCZaKTHcVx9aJYr6AixF9DqAHh8iU56p1ZZharNQNDs5mM",
  "key12": "2Hei9zKKZADKZpoB97tjCWh2CPDh5W1CS5kLNj9JcYUSEh3u6E2cD88k5mEsMzt18Z7h8WXhdjNQDXxPHxVvxFSz",
  "key13": "3xHp7GgHs6VDeNFoP38F9HRDd2dcjMscwm2g126JbtoWjHVJAJmofmiD91XjALFRYFRFrtin7ymSLJT5fK7qV2Cx",
  "key14": "2PGVry8ppYA7NihjnMcXwfiW9GMV88UhPdThNnP6mLF6QaAXh6iTkCdNxzNykNmBwywVqocoAuYxtvc1gaBDuCDE",
  "key15": "67GWSjCB8eBsCMbebTHXwqxqnvwwMQ4szbELwJ69hWCMHTwMS4HBGRapcuPoquJ7vVKAhagjD1Bm5prd6ie78R36",
  "key16": "2jDkTR8F14oEdMTdXXziyMU4vXvuDu9FXxnjWWCbh5WEJU4ocoGQCWDbPefJhB6JN82txnRMxXp8KnMhpgnB39AE",
  "key17": "66Ra6XgavtsCAHMFKDjwGXqUsASSVZTS5QhC37iKDTRH3PHhtsEEy4VZLj8suMpt3UJAs732cNKFAzx4ZMyDeuey",
  "key18": "2CdNWYz4XQ2amPgtFF5C5X7NMj2qCCtHYMJbVAwpoCRkeucEYLPF4rPafJ2UCNyqc4uNciw7f7FQZdESTiBDgK3A",
  "key19": "4vzqAu4VPC9yuoQxMoLnxjtzfQYuVW4jCL1jjVrtLsrZu9TkS8iWtjFpWC8oox6zFLhHKVb3tZ5D7GbG4NzEcmZy",
  "key20": "2RgL8EJcWXULznEEVUHJoAXCMjNv2jCK18acbgps15FWWyiGksHX6ArtwegWJMxVWDtcGW3JwRJEj9fJRwg1o8oA",
  "key21": "2HwESYQ1yFspXXWX8giwBksFx7WmP5UwWnr9g9NQ6kBR4nY4JGSzL9mNkP9VutZS7fQjSxUUtz4EK26bshCn3vpA",
  "key22": "4iUBqRJxfsCY7GpywMwdzKzwxdmmpsWNAHc8L9NKawLycECggL2VnP4PyY8cMNFdBgWaWWBCna6JJ3gqqFTULisb",
  "key23": "s8HkmzzMYCCuVNctALcRYjqsWAX6TZ7su6uyF8cFC48Lq7ZUdgBtam8oudGuUr19PeTxmBiQQhpgjH6twVTRCyt",
  "key24": "5zGwA4somaXiKUKHxW7jW6Ktk2v29bNDDWW5H99oe7karN23AmWdCuWnBo5KsCoewF1qVPmzrrJdoz3M5btbqcQM",
  "key25": "43NFFCKHGcFTmBhj7TBLbSkatKRt95sXEaTGCdJi4CKnCdXijt8zMDjquXcwnvAYmmjka1tcuQQJRavVoioPu5zT",
  "key26": "4N4ctZKDAJixEBRHvgqy89YhcmL6mzvrxdWcqcPDE9JjWfLvkMKRRvxXwtVE2PQhLJTgkh7SPeFjSqkUprxLX4ta",
  "key27": "KthgYVUWDRt3mM6FQVwsqz2ZjnGHuFFQLRnYQhJ44BZVj857XMupMQbpxUXYZ9XwdePKQqThUvWWvQ88rJ3tbAX",
  "key28": "4cQ8GSnKphN7f87yStuUogYSpbWX1Js7MZgV1LW8en2KtKQ3iqsaYmxyDMUYPU2kM1oHSykcHGynYRLDbF8r6Pi",
  "key29": "4U4dYy8kNVHMvUjm7ESjw1LynjBe6UGF8aEKYzVnLpEfNLd5eaUMEkrELKAafirGkoqk5eLGfoNyuZcTbZL7vzBP",
  "key30": "3hwoap7oxYrGiamEF6eKxye1HxQUiiK88gTyuPfPsTAKR1itZf2RGAm24Z7gVm3ibXMXbanHkK4vmnHvxZnbKZgx",
  "key31": "5KcY5kDRCtdFJkiZmjwwRbhfCK7ZJ4ZhK8jLqov4EkCDLvod1M5BScRcV2DohbykQUuKZGMHqac79y4gh5vpmKBE",
  "key32": "47TTwWLLwdCdaCKhWXsrZXDPvpo8WCpzo7pfvPaxaAx6kaCkpx3Ct1f9wDsBenWEC3Pv6gi8R36qbQ4aEXoRyfJh",
  "key33": "2sETN9up5yWj9YxEari26TQZcQq7wAui6T6YY6TdwPkFEzmttLTjZTY6c9sUwyp6vWRMAfyxoNfbDCXacpX7tZ5w",
  "key34": "52r5eEqAWdzh7GpemXJgdeBQE4A9WemL9dzwDhkZ3H3ZhzPthjWJYE3jZ18UF5gRMFjFqeLFW554zGAwxaLWYLWo",
  "key35": "2Q2nDJefsqG3BerY8QxZR556rNtsm1jUc4LX7Ynrbf1KvB9C2CPNsFgpPzzYJy4Fs7sbkTfy95hui9Q3yNjcFwfX",
  "key36": "3WE5FWSpfL1rcD7JCMruN2LR5uXD8QMkjfYEUDXW8bvtYDQwdwtEKKKE1p7BcCzKWxTCGtQfoo6f6rJHcwtoMUjC",
  "key37": "5jBJwewdXVPmDKuwVXX1dgFvkjnU7FBPNzoj1REAozeU4nfcpfyyBqq1qKzD1hvTr7zQjU6rESRDtyPfR6wjVxTX",
  "key38": "37QBLqbtJRzhZNVDATD3wHjHAHwhscs6GcaC5AtmVN7R5oN9QNcnwCWW8ba7zFUEYoKL4etTUPUdnhThEVyrJ2vD",
  "key39": "4EB71fTqarauv2pKeFLBzmRY2wv8Bwgw9X53wWb1myo9u9Lz7DamXhi7enS9hpfN9SsgCgLV67uNAgKyoHUeTFEY",
  "key40": "qAcTrXULabPWWJSmY7o9u7whb8fJ3wAtLff7e8wENrLjPyQvTJUjh469wEhPZGfEEAZaYFkRZE9dmK3pfgkVKbN",
  "key41": "4gBWizbBehAX81DQpCqXjsDGXqL9BCEAj6DnseTnFCAzbu1Uo591XDMmouP1SdxuhG1aweAWn6N5W9XXpRrvC5t4",
  "key42": "5MjPxh1gBLYzxYDkZ9vuBFquCwruq6NtjRdeXMw9wC9DyALN29ceW11mF8N5em2yhyeGBg53rxkHQFRwiMc19wK6"
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
