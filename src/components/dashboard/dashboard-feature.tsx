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
    "22Y9cGFH9uuVeZngXH5XTKSvdNhMekMLJfn6ZfhAMF2EX3Qfk5653Xt5uHRZJcsq26T9xa94RFCW2yQFfUAu1wVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zj184vt9j381gYpqJ567FfNusU9CaLmpEyRyJADGLeJ5ZJ963DBJdNevDoxdNyQg8XRWEb2kNsMGAMvqW1QYsT2",
  "key1": "2f9kdwXwiDXPRDEMH4Mu86ZXDESnJx8YWyreN8yXqCSfUKFezUt8VExTGrDEUTZ9V4WYnyi5s1FBiZjCkZ6VWJzS",
  "key2": "3QbyTB9BqXUVdc9BEdnBVEm8cc5mHYzo8H6mfJYmPpGuKkFjNEwgwXc21v78Etb8jnHYv5hcjWm8rDAeWRAvCS6J",
  "key3": "2PN4eufbhBy4mLx5gDjjqn8yjJTdHszntsMkwgajovNdkjrQqebXYSXp6oqr7bEiW2BmhpikKUsLJdtRSiYFcYvR",
  "key4": "3zHm9aqnsKjJHE9A5j2g1X8nGN2iakWB5x29kZVxjFfiH58iuiqxBQYGCEBWAqMoEqpXhaqcCNsU9NR4m8cjPWYj",
  "key5": "3FKfETYs13TK88n8H4msMbhkfVwuu6LnNyhnLWzivjYvrASSPJ5btE52k5iAFMbRroTZKH2tRE5TT8XyqDbnxyG4",
  "key6": "5kNkkTztjd7LQDGu6P2CJt9r2KwrqQdp1eNU14dbErFy83WqMq9cQnHmcLkEZfm8FuYdqbw79PHpgknhtdJ9VYvv",
  "key7": "UokhCnSeDnk3M86sTz3nRVXMcz9HVmHf9cTU7cA2B97aS25bpjVoWiknhBtNfHW8ntzbtXkmUboYDuF47nywpjo",
  "key8": "64VNBHsPQn9jkJc2fD6yNsySukfKTQBqmFAUSQWsmsncXwJmDarPXBNMSWzmNgL5Cz7Py7qkBJyhBBQbgxZm1UQg",
  "key9": "5hgWaDCBq85HmpTQ8Sxme3686fT1Gb7CABC8ZPFo6WZ337vH3bBDHxjuyB3z3pnBinvemtGJJ3LbaY1uGHMEbbFc",
  "key10": "3Mq236wkYDNZDwi5u345f1PWYCo18NhCXUmDSDnn5oYodw6WQ1ykoqLcitXqvNxzpR5FSWRoAzUQajCJvo43s9eS",
  "key11": "5pNSgWBP2AdYebJBNSx9bohVLTgUwRoJVran3qvviavxaSeCybK3EgeFCMW5UEuH3X37sd4oZ8DLtxYynKCxFtV7",
  "key12": "4szFECL6gJWG5iVdXMYvr4eExy9Xf7avhdpbseCMCJ96JnbLMZcouxULqxKL2xNJaDYodbZmC7vvNJdoNabQfwWJ",
  "key13": "3QfNGWLC2qwjDxMQECn5W7417ocVgDqq7cxXHmeaycJSvLsgeyuuoK9MkTsKimCPUY8y2PFZ1cVz8hsbKxoJxP53",
  "key14": "3cyDakKSvJ8GUhHHzMLajHtmqcGoztuiS6TyiqdudesGPqLQTh2Bzjfze2gSV19kmxqdBAeiD4JMqpaVtfgrTJTB",
  "key15": "5VmxwG85aDQLTsVNfb6XCBhRdvDVvmwdgQRknznXhF6V9PZsvaJhZduYntxPJpS7cqMi9tzkfs3EHeGzryaVCi1X",
  "key16": "4mxSEf95erzfi7frFU83Y1dUptB1seeEbxFP4UP3BBaR8hk9dLYD2cgBwzj93x7hQDzVCyJ5gYW7ufBgmUaaJP6E",
  "key17": "5fhsdkjeSaTtP9BPoe9HW8eGqAtGApvKeMiuF5jPUy7K7J2xNhoFMNkSoUWJqj65cGaUwhrpvPVuoUbPm7tmjFRQ",
  "key18": "3qJhbXxpSF42Z5RkFmA2FFbzmXt4e7t98vKbM2JMQBWDTHcq2yJ1MVphwgP2ZqWLfLA8oTnwnCBDkTZFVHJBjV6F",
  "key19": "2xr4JHKrQrMVtDQjegMYwS6BSVca7vSVkNwfcLcuxbVu75M59d3sVFQ7UEQ4xoMgLnwFDd1Ux87nAJMVeuaq99ed",
  "key20": "3rxdVP7JbsK1bTg7P9rjvfGmSSk3jAB98KMEMbTpe4apnhfYqUY5bv18WeLMvWj8Z48DbmDvMTCk4s4YTT1Zqu2C",
  "key21": "4UbPXYDCxLfy7A5hmBHjpk6PFgT2VwfzEs8U6CQ1A9jyptZnLjgb9QwWxrtbM6aF43n8Buqu1VvsZJEjT7b9kpE2",
  "key22": "2iaDCFSMBLg4SS6HxFjEuFMsae3PwPXW5qrKv9TsvNyf4oGcs7SDy3i1YCMWamzgrQQfo1v2nPbQPebEf8zmfsbw",
  "key23": "4Bn1vySUAF6NeVNz4DQ92qWAymbkHnbZXgvAqUSPF5jygv8G2w61wT61NpJjHbP7exa1EHrhmCcnhmWxS6BvCubD",
  "key24": "2cJxAjJvg6BuVfLEt2uyaCMUoAjQGruMMhf34CcUh4rnRY98AF1fE1vhf7CHUKtH8xc6J2aJy5hCHA9SVXJsD27o",
  "key25": "3zMTsW5mTuovPMWJ815MEnbbaaqpGxLjNtVaofCzqYM9dj4iRoq1BVti7kmwkTNp7q5ULxEGaaEMVTiqQDX9vjmB",
  "key26": "2WLjgcG2ZzTuxpY3ocJCdicHsqDhAbGEpPgAuKKi3AEJusATgmQCZJkMNocZtMJHFhUJ57uBQQLUHJVyPzT5d4sK",
  "key27": "2KXuFat4XvRH6mv5TpxpYHqf4zZsDtWAVwXbcAiJu3TWHCAH44Umfq8KD6hD1c67AZjLNjcErxSGTA6P5vv1WRL3",
  "key28": "5MSKEXBjk2fvfkEZQHTZ9ye2sZmk4rTZxoRNpNLdR5R5B9F3XowCdVASVrPv1E7toaZooLPLzD3hZPCgb4UF9GQb",
  "key29": "3urfgY7Zt9dxUR9CUCnFoaEbDo6U5h9Q6W1aB1wH8pDsA9JZScL2V4zX9EeHtrMyEcgFo1ABTLUKM65x9MS4Maqv",
  "key30": "4tEjRp7mkNDAGoag9H9wW14vo8QhEkbZUo9zdRFtwUbzioVmwY4GQcQdAuNiguL3rv7VMvwLSmVAL8Y4BzAzQ8pM",
  "key31": "3ms1GdQwrLuk3r5RPWsDcHC1X1xzigFijAg6VBTJDHs4x4AXWqzZM4a3wkQkyBYxM7q9cGuFLoUAMVkU8HEeuS96",
  "key32": "2LsinDCsk3344h7RFbdTPHy51dqeTuugKL5N2kZPuGn76MsA2JwUQxyo4wSkCf9ZXeyH1m5Fdy6zJm3vUpKPSKyy",
  "key33": "26xXyWpod58PUxv2Z3HW4VpbJxZp4XFqUMaWtaXj4Vx8XMq1eAJvm3WvRT9jB7CUa9MYTidjRQBkgqgMUwCbZekq",
  "key34": "4H7CdtS9ARb3fKs3F7mzNA5xK4uSTCHNTAk1URfDqwX2Q7bD4N1k8xpbxvCbo3bbKVAWheSE1rjyne6DCBKuxrh3"
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
