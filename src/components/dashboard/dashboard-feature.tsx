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
    "5mQwt9Fa9hcsNngjvFJ2bYqeYN9Bt1S4N2Y2iF4NrwPiAqzx1hBQnHDNLXj66GSErd7d3JpjHBZEvDmgJZhT9q2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7UvSuGCjfvZsaUjaqSFpuz8V3QAsg66YMt5rZYxq499NByBVRz4DcjoHmckeKcKcpbmoLa7n1rVdnFnVhiTQDD",
  "key1": "5SsztvMoPvS4ecm6DPmT4pyxts9KGhbv4dWee2xy67PUeQcPVEsBiDvzy2SSGue1ocHCsoHBswsoByWn7VdQE7Aw",
  "key2": "2Uka9koLXJUz4xdhZnyVMxyjNQUj6xTHeW8edoApFFS7Hcb9Jzv94p5kM9HiUrbX1WebmrKmgdw7QdgLDdXvjBiN",
  "key3": "4ovK6sYNtJbLXrEpWD4MB2GekQggh8oQ8gKr12dd5493Nog6vwRDG9bJ5vgmTJs2Z1UKqDeFzqS422HVRKqwJAMR",
  "key4": "41Edx2Myxv11nxNRtUsUZqNi8eKViCfcksbZVNhrdEY8r4HoKCMbGmnberNWFspzCPuRRcJmKykhj1G8hfhhZ4HZ",
  "key5": "5RcqDj5VLVVD919xenDvpsy2Thisg7kQUTB4ZYbkWCmQiBqgNqpVkkzk3HSHYyDonmKSE5fCM2qErLkCYbfx9CwJ",
  "key6": "35yKufpafo9XduM1DA4eRoJU9FY7pV4bfQVZnoXGT3Pb9PjCmGrtwRigUdZzCo8ghkqpt9hEfZ3e15DXUujJtkZq",
  "key7": "3vagq3dMKMtD5cL8wSHP7dyoSRV2W6zBr5eeazZQgP1ssi2FDDdhoFzFdzUY7JwqVxZsteCBj1JfsCf8RHWQtn3",
  "key8": "3fkbjoDUGYxt4TZrobsww7guoxY9zNGS8ZoY3KqjS3Y3JScgHhzjnT8i1JHJhGEFAm5LTfKZhrBqQ2hqYrLLpQHK",
  "key9": "4cSB6dY6oyjF2EvhfYCJSJBMy44cnpu3okAhgiD3jLqZJn6fDDjapthUbHNeixRGwtPfk25tnnYWtuwvBu14Gbyo",
  "key10": "yLBj3J93DbCJqWanovmhZhYa9HvtUUKeevLQxxrSvNb3VQnMa8mDwd6Nu9QaHoTFSA55bvTQ1i7y8Vmw4JKH1F2",
  "key11": "F1dKVAMkJ3WtQNXMCDisLPUcNpkHXmabRNVak4SoBiX1zCLPhHiuav8qDgVezPfKXLEWSPBKdhK1mesdCHiejwp",
  "key12": "4W7VFhx5VkCQLwyBQQwQppfSfaD4yvNDtxe6XpNUfjLFmkHxZNLguqA3squHYM3FNsMnQuBuXa7HeN7QNFXy9WHE",
  "key13": "5yLXJKHstTzubwiS56gsUxhn6VPZUYvH5RUTrT4jdVETUDoGUFvKuRKX47eiHtVGJwYZQDsycTkfKMhDnVZU1xgG",
  "key14": "5edGd8VcizTkFr5c6HC4D22hwS82y7LapXFD4DuvZqbKnHisXNbRVbkqNjob7czbnkjygm5xocfd6Aax6BL6zq7h",
  "key15": "3FcfZftLLtU4RqvwkmNEJ3KBwKNwGUgrkCSnmkHoephRpke2P3Q6TNMdEsCLWSDbLhf2a2kaiPE6esNvPvQmJF12",
  "key16": "3QTxvyDaJY8J41M2jBNGzvcVpDaFmp5g4FuofsB9FTn4LhfCmJ21esXioZfuyUQrC8tWmC3aWCTmj9TjDZU9X8sT",
  "key17": "62s4BtJiVhU5CxKBTsQxhziqJzj8YJkmo5xnSPdimDPjdiDRYLmHt7CPsvuP1nsrMaCDxAxnqnJTrf8UqSpFcD4N",
  "key18": "3N7LfruHYAH4mnKBdmWHXtxSdQQopMBR6wh4kbLWqAUFduaLGbuiTzs5xXShLbsy3GAJUJMrepKSjBvNPVuYs7Lt",
  "key19": "wazr4cmQ9vwv8BcMzk3uSxFv6wb4dcWPJyVtDmrZhLHeWHAsEHscwejYNUft3VvxwjJjb8e4oDZ9N4rff8DePjG",
  "key20": "5dvNEHZH4jcHwC7cYW19FPX7gxoE2UaEfqCvfpS1VAXAMpmBK6zBKYEQzbzDSvR4e6PfF913gLwvxCgNMZCkaMCQ",
  "key21": "5BZRuRGzELh3BiazjhQErz8z1z1QkwojTLA1yn7UFhVY2oSsgZhbL6iCDBQhVEJYkyRnUd5f2GMXkRezYNZbcZyG",
  "key22": "3AGzCP7fyN6Zs5U1Q9sYZhfn6viwqnnuGYwDqX9ioRDSeLtKEuHrZfuC4PmGsMJvSp9sRF6UjiyzK7D1q9EM3SG8",
  "key23": "3fxiMbuqNzvXDtDX4pu68TV1KWBMYsovvxquSgpqUVsLVBjaMJkG5Aggtaz8CaPuWFHMAy8gePc4xUfXxocZBQTq",
  "key24": "3jm3qDPThXkiWngPVjRsczBUGS6sD626DfRgLEgo6MTKK7RozFZM7VYV5xWbtq2WgzSCM2q1YFGk5wjhtLdbRTSv",
  "key25": "4mJc1zq2TfH9NuZkt9cUMgXzQ7feSqG7duAyCMnEtSTagqbUnSnrRZPS1Y9gArCy21Cyv6R9yjCh5xP7ZgRYLjp2",
  "key26": "4KVy6rQdBCc9ekaWqnA6niCFD344fD7CT1xDxSaLz259TLT7wVkb6r72ypJZHsY7Fz98Pp2zJ9Bh2BnFpJtVKXop"
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
