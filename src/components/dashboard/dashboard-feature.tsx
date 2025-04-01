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
    "3BqNyunDRmgPvV92CNRcg4wyFNS9xpU1ZSFmWpY7i8WgBm2HsTGgsrtT21a3vppT7LAgHXArYzEr3HShaYPK4xka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4311nnVrNo9ecPj5VMQVbx1z7SZ7HuZNnNRcSqger5gvHYsaodgoUtaZAcGRDGmmoGPPJsK1Qik9MuGrizzGN5eH",
  "key1": "59wfRDBF9jPdNczD3cFiPfvGjhycTaX36sCyKj39UAjFHdHHdoG75vZgcWCgHbJpo2rXgeKsZU5DFMwFkimyevGi",
  "key2": "4Dne17DFR4VdErPhRkFUMryDSnctsbYs2nhUT2qJam6FJiQDZmrG8iNKEvCbwjr73Eu69ksBTxuvL3nJERhqPEMd",
  "key3": "KBXKAHqx8jZYFaGiMX4M82grP8RsWhqJ4nLynG8MrLkvbxtDGhcj1EUWW1NdSeg6ZNrBfxUam26edwxHrBF2QVx",
  "key4": "5eXbdHygqn9A4AiRXz4STsBsvGcDEz9uXJbGYuxJVGdSBSSPDe2rDjGsq3DQsvCek9bvaGuB77q1BJao1qDgfojr",
  "key5": "4bnPWBn9qGHD27qwMLJxFbntpQD978EnbwADvJDcjE1b1UaC8ZehieLQoE3bVb4swHn7snt5qZ1ZVMma8Ff3yjdR",
  "key6": "4pvzqW15oJ18qcySJw7aeXYB3BfeWmfHEQNFC8L63PAskAoQ9vx4M6ii5xMJbvgZghHG6Dfor3EoEbGDeGaGEKBc",
  "key7": "2kbYMcARoa7nWPji8XwLnQVygx7pptxNop6g9WqsSzqwUQZn8prerHJgSzj9DQqcgCKejZfJKCHbDLtfHQTtaZVQ",
  "key8": "5jmR67SH2bnXy9vZLRCZkoSFZceC5bEP1ZTzZ1hbKMdBWhCeYrCAn7xfoPrUbdVr5qB8Wz7sEgPjp8iEK1adg698",
  "key9": "5VkLqitk9EfZt1Kx8didtFNn4hrLtMt4Wszc11dBAizyic9c9YcEi2LrTSyvV8uxrEk5G2itoY1Z71krSVxxbPM7",
  "key10": "q66JZUk9bBQjJ4jyLxJmPCXzCCxfqMwLwedWL1L2wPY5NzDYE4bjMiALSmdsPSFPXCYZYmnNpsHenYervW24HMC",
  "key11": "2ZVoyAGpBwKDdyhKto4m2ZKvRcSwjQjj1RQzwYZBYBjcH7KeRawWAU9C2ZUiZPwfu2ksiML4zJMifAvyGPmYa7GE",
  "key12": "4JEUkShvy5nHAzzDT22vApyXGKYTfpxE5P61zBgmhAzpbpi4EdaWcfe92hwjh3L1VejwBCQLYnXdBx1HGGxgST5T",
  "key13": "4gj7vvMayspW9BqBdVFwSjDvKJHZjoWGoq9o4qjheNtftbodVFymzGZbp1NyWdkZDpAdUtpr2RAprP1srzyApuR8",
  "key14": "g5LKHQrF32tSV7W1n2BXCgGFfGpdEQi9B2kFdXq7u15dw3SPmNjGtJZYUm3qHpXE8yNpFwsasJQzAqMjRfqbatU",
  "key15": "3uVK7J5wwPLDdUWPob5LCffWNotLGxdVXwZnSrwjRfkyzZQvTxfbbrU7XEJHxNVGrTearY3A2LZRTQVXJdva4Z6D",
  "key16": "61Ty7AiFFt3LGr3qk5KihR86Z6nB7njmkDzdbjnvLjefRSoKfMfEj5snHodcaeLJTkxYbZgCTsWD9gq4CTiyoK7k",
  "key17": "3dMN8WhfAd9v523DM3RsPJKUijVd4SESMp6bwsjbLMa7fZEki6SRbkmhR6Vn2eEz8eJCxTEBhwqh2tmUSqoNAuZY",
  "key18": "34WoxiTUjAjxWkL4xYV1RjbrntsxBjjxjePvvsDNg5AVrMtsNEkJ1os1VhYpF7rgQsZigLcY92rfUKpNnRs9DHtp",
  "key19": "aDQqKUM9jryz6GYoXDBwaPmJUW2iJtWcoYUW167oeQKuH3hezYdW4QSQW4ivY6Wnabe1fMSdfcSpgB9nbPfEyRe",
  "key20": "4ApzuAojbJXYHUe5jq6YzGkZEJzajHCARvo21oD3NTcPhJvoLkPSh6JX4GNXihm7dUMWcVZd7RXHzDRcX4fu47zh",
  "key21": "3TKdjgGU9zHFFZHiRDbocnNeUuo5C7XskSm9PV2Z7mMmwtYfYATtKKssLdabMgstCjyde9Hpd3XR7nLqjB4uiinH",
  "key22": "4fa4ugJLCpRm3wkDgoh7Ffqtg5z2vAcbCJatp5xcfQ2MG4NjQ6tefRe3KAG9crVVQawxuzCYhUF69gn6H86z4FYE",
  "key23": "351RJzbo9dgX7yEaBwT3kSygLeignJKrEhPVuyT118oA62Y9rGULLtjmLeqM5zjYr5R1UkrCVxsjESpGC1jxu6Sz",
  "key24": "wNmrAyRP1t9JnrkeTet6q7vqnKmF1M3iNsRywSohd9kGDV8NKti4nC2AZ9JGAy5GYet2QuWn7xof9JampkPEYqd",
  "key25": "4VMUTGtV9zYCHkngUpAJcY27izs1AvJw2U9KN3mfZ8RKWbfRy6MQ45XKZKExnu6WGmzEmjP5mHmdEoAoz6DZhko6",
  "key26": "23FcTjiqriARvjF84iovMxYmRoBaXXjSXS9iuxAsVk9yNJEFoKHb6zse67LAEEvGCt6BFUDULcQXjy55vFDb8FEi",
  "key27": "58KK5eZEXM9YoaQ2SC1BCMkC1cacRhBwEa4XmTA5QBy6ZLRZ7zrjrjhVEBtYvJCiYjC5gMsBJHehwVfu6APTPtn9",
  "key28": "4sn2MYFsXBoKv6QCB6axZoAkVP48pbk6w1vbFxWprBhnnZoFEtDjwDGCGWJik9d3aMaDyKwzkNPj35VyiswfM2Sb",
  "key29": "4C5J1cfCishfKqpJaZx9SzQngHgVkHqqgevZouJS84bF9PwYJFFfiNcaMmX1bR3VuxY3hAaKY2eqVtuobMdaTYvY",
  "key30": "2rkTMKeZu1s2CoahJ9W9uK4Rv2sdvhoAz5X91m3hQxHSth657b46EJFu2V6sJD2DdvrzmNRid47LWRAkUar9ZD7z"
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
