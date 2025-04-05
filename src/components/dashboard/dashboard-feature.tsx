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
    "5X9DRM1Q1WzxsvepCTybsvyDYhMStB97dJcRenU95dZGgkaYnC3YjGYsGdfXnTzTeTxTRA68XihBoPXDY1hoDb3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oH7Tez5GJKh23GWtS9a42sx84irgoCrdQHwomYKZyU2Jx3BpsvBz2VkzYNineGXNY7swYyrL8CaFVzXqwokFfpz",
  "key1": "2YFkaojaAGggLsD1b8ZupU24kjST9kVKHqoWqT2JiggUqvam4ejDTB1JMjdNJx2F5pdVWxWPHvVk9Syomv3a6D2u",
  "key2": "5RKCtQB6Vr9rzq9utazMVG3ryGX5txXn8F5igq5na58BHQ1ofGg6cF6PxxrXs4KJ6fsTmiwB5UdvdCmPACjAD4Ty",
  "key3": "3fiexACqEh3ZyCbe8eaQVH7GZyuf4BCh9fwGaJQUpjXB5p7koe32r82VqkAa2YHZz82dyVNTHJrxGt2LRvB9jCnK",
  "key4": "3AJ76hfzys1r56ZEF4zyrZE4RrBvX6NXy9VKvCaUAZHJMn6hTaPzbJECEL5MMuTDXjxiGPUa4Dax1sNwpyThtYdk",
  "key5": "3vjLXt76PhkKEQqzyXhCGKzGkrYsTwAJKvQr5Mv5ivfBYsYxXPQzhGfEyv7GXUtVa6EE6rakgq5z62S8sZXBnGJT",
  "key6": "3vG2qGXMhzTcCvYxgHEcSz8LHUKWoLNkiDyLncVtTpVc8ZnvrgJpuEbPbdNLT7Qs3Pg76kAkzk2YqFxJQPgxBGSQ",
  "key7": "3BtFuYzCqfK247DMVCVDSCzmiwGw2rY7syEBQRpYCpjsgfeFWaF4ug7X2Q4BrgXtbGCwZXV1e23gWLdoNC68qCns",
  "key8": "McYAQb6r5iec48B7uAXmPm7jRtxa7rv93uV3xvPvq8pNqyem1cxcmLRDUpbC1Xz5RBMdQeZ3DNgJw5pWuVwuBWs",
  "key9": "3Kjh1yyukw7VfBHPgCiRtycjkYufUWSnmdM8omHN3GNNSacgvV6wuUW5bvyU1KtR2Kq9EFbJf1RZ7HiRPyF1S4kA",
  "key10": "B8xTzwZYzU2tg7JsdFhn8G7LMK662nnrWhueS4TVkajLkvizL4kD5GA6amNjH4hDFZbP87NXVQpHy3eYJqhkjrk",
  "key11": "3Pzwdjw8urqCwrMc7jDPiT6zPAWwyRrorP62wprCiw1LVyZjHrGCrABjkFbJmrrmG1eaEHyX52RyEAqJ313VcUxZ",
  "key12": "3fjxNcDnrmTFB35ncJVjqevAqLyC9HrcpkqYK4rRya8HAi2FrBNjLysQGbbnLXQ2xk1JPX7gDP5qadV7tjScaGA1",
  "key13": "52zskwSxU4t1T4yjvjJiTuJpa8fTjEKHhjvsVWGFMBakLuycz4LiPZ1jZdTztoAexKTwbHTBakh89qY8s3b6p3pn",
  "key14": "5WNrhK33Xy2CBnSC7TphSNay6SzQdtgP9UCjetZDtXxdXULpuUqvhC9Jx6g1rXAaPUq7pdkFa2dLVRXXvyUbZRAb",
  "key15": "429p47NxntBMdZfh7Y12G4tZiexR3s95f4QB4UvEnSNuFH8XesNX4K8nTYC8HkwTUFcL98Zr27RD161mY9jyjfcH",
  "key16": "3351dkMCF7SzXJeKytCN5VjGfgLxDZs3QqEqTezWobMkLf17ERwKCYUnXwtHoXZSdEprvAGLDsSGvcPF7TS9krtC",
  "key17": "3JVtkeNVkMuxsVhYGwkXYS53VNZZrum3tHFDUZ9pGugk29jmpdjBP3KQSaJ4GGj4Hed5N8MjxhYuBervC4uNQQwU",
  "key18": "xWJPH8EHZYQGjMVRhoW73v4YqJ2M9njskZE2UxEdJiBhgcD9M1mH3CD1UvSiRzaGUmCBtRsWcpTT3W6WMy68vQx",
  "key19": "PwTFdC1TY74K1PgkZmj4gKGUTY3qygvreJjWZmueo6auADQX7YFhnSgNbCgV6RKzvCjknKMbmNFmEP4MLRkcHoV",
  "key20": "sRCHtzSLfwehrrUJ6KneqCwsB2Z3u7JuRjoBwYpU7tYeAA4zp5roAwC2dAWHCjKyZdaNFRHFRcmDjydNYqW8pMt",
  "key21": "tZeVGj5qokiCNDmTqaCga7q8qb4XQUynYAa1C61ydYNmDduybJ8d2dfq25YMJdUgLRge1bqcRJ2Ent9vuZJaP3V",
  "key22": "2b8bRo5a2Xqmacahq7rWAnNvmmwFKMurqNmFccbyxazhYpLwuEehxjhVBsERWrjBR3AGxzD2cFHhB2qu5UGnM9jJ",
  "key23": "ygZoPRu1gcSSdoSkzXkR6o1HTqg8F8aoPPu5NfEQnJN9egCa4P8Qn837k1Ws6VxtpuM632NyS745EyepMp1n1pK",
  "key24": "5ntkbqbmPmWfRCkYJz2FfmC6fNEjeBEhxfk65dYFzzntWJJDEAqvMzntjuJL4GnDMTqJG9bJxxAntgPfb1gJJoJz",
  "key25": "5ELnPtZebTtZDWvgSbprS7sFayA8CFV2Vsdif4Hgkk5ym788gkX4hLn7TCx6VEuFFrrP1TFnMTto8ez3G7S5nybf",
  "key26": "V5d7aoJCGeoMcdqXYEfdc9mBXZ5vaXE6MCN5o8FfLbZf96MZE2VtcG9jayQ67d7ZfvZaNWpijQKPd6A353vWZ79",
  "key27": "4qo3s2YmvNJ68Zt512GmLqejjxZ4oSCoDCyJKHNCguDhmSrXt4HmFAJxynsM3qEdCaY3ZWWxbf679sNWFf9DuVgE",
  "key28": "2h1Yj4Ru2yuSjNdGTGb5tqSFNuKPukAMTTQVSgCBfb7Svd2VQm4FyYTX4SiZczjioaLAaB94i29ABeGi6ELGZCSQ",
  "key29": "5Zewho5kUmju719fTwzXtFRthMYZEU3VdsaxN3yVUS2ZSnhV4fMfSQouBmzwrcqJhzJXPbENZ8q5tpniZ3J1uf85",
  "key30": "4N6t4Hn9QLaTzfqEXUscFu51Afe9wVpTxUxoL3vwnpWZfn2ovJ66oGzAPSMCcsqon3NaPXjeaAbfWAUB2rKH3Arq",
  "key31": "5Wk57HZaaVKqhGQf7kLkmuzVo6Gdww7bxT7gsNAPjBY9rWrREWUr9DAYzDSLERr494WoEyxFE11v2gLbKbWTYDG7"
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
