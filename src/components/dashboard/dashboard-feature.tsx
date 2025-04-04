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
    "2EPA9NAonmSfyWvTGCzWdqJkkxpVxFihjSidPPkhnyUAzCXMVyz19BM7xh7zHQ8c465c4uycjbDeSL27FHRxxeco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcF9Uq6JKqGgCs9pBg72C2sA2YPW5n4ThbTLX24DaYsiBVj62sxtWteimxp6MwhQ8dVgpdZmY51s7bwtZYVHt2m",
  "key1": "4HGRvuGMz8TDFf6H7E2fmj4VrsjKRMsDuLJHjjEUN2WyU8ET94hbyvzNbuz3vqX3ipadP4eYRn4FESuYAhPNwTtt",
  "key2": "3qXGuYnFL7aj12A27TYi44iJjyNDD5sYhLgPyEbYuLNto3JFSazGtZXmhSBxuXkjPPpSGCp1fpqdWGKRixvMHgwa",
  "key3": "85ve4eW6HmUmZVtjkv99hooFo2nrXr1ZmSMoan6McEznk19t4npfGoa3CaTYRJyrfGecUaupnYaChKqTygByPow",
  "key4": "2djzEjPbU5oWMEtsCEL5gUP2Rh58sxqjfT9hmKfadpck9zHmwKKjFQdqSWT2kry2jzyeuuogkFGe8mSPihjyM4Eu",
  "key5": "3CM4Lk1EvRrYxQVfTKi9x6pvqNhtTNtr3DUiYfKd3TX7X9LK3eV9XijnKCzR6GQx2bnvjHKF2xjnC5r7jsyaCucd",
  "key6": "3zJB8fEmZPdfJcQUBNMKPxyj8i6N7ns2o8j5WSV8bAe2bB58P7BpYY27tAzeJ1yYQ8KNnM9FSnJwxn9GhU64qR2k",
  "key7": "owUw9rw2HQjjiFSsFGD9J3NkxbcsRaGpvudh29DYQ9KFcGLsDUTPLphdtNJ1Ja4ryqLYXhaVe6aydAaR7c3cNxk",
  "key8": "4A1aaDJjxFt66TPvMNw3k9ixNb5JtPSd9uMhZ8xUb8cW4CYs6QidLNrm9CLguTYRu5mzPs2CZhiwqgiGtDsgRsqH",
  "key9": "5bVkssUdSvMr3ZNWWpcsJwZnD1p69483kZi95hqrd6B3XYeZYU6cM69WQmVk2ewe76aJoWQCxRuryu1uBA4d28Lp",
  "key10": "suwCLSSeb6cuKUUEYXgv3sTLbYifBEQ8FdBcQFvxSKcv1a7qNjAxnpvMHthVkegBNjL1hQG96ERAaB4GxQoceaG",
  "key11": "5bQrLSYXnoqDK8HfXxdKRSgSqRqhFfB8gPWREJeKcSw8d1CmCEvABAANJFj5LEroB2YcvFsGFyVZiKHGkcneBfQz",
  "key12": "5Jv8rGuDrNRxVfJhsnC7KraVR2pLHaPvBuNUv3YwH8XeyzqDXwk6aRHp6zqo3cT8nEq2ZBxHQS96pGZr6hJ2QeTc",
  "key13": "2XD1aHc1KF2V7YphvzHjj5joGDKMhoJVcY77ZYkEV2Cm758jcncPZrntMFraPyNhLy7A65h69N2UnyvQuGT1Z4hA",
  "key14": "4vtJfzfjS9GoENMpRfBcrDdS58H8WPXqv4JgR3bavVCciq7LhEhz6xoEfuWaTUyDYamKmTA8BMzELMui62kcMhkr",
  "key15": "4ZWJU43zNU5EiR7nxXaoH484WagXnBY4S5DkWCpKH8oHCmj1QZQ2tbW9naMjRMxmFMcmmCkRHgCYHcVRUfA5j1CG",
  "key16": "exsQHiJhFYYqoe1CmBPhcdyUZcoLaWREd78gjgkbtEH5FyLfu6xq7aWkprjjht6B657xMk7z88ExGyGRmxhsgqA",
  "key17": "mAhE9XQQf55ahLTYHqdHwDAvA6sRq29YJrPC8GP7rsdUj2XvJax8MU9426xYM4U7z9pfaJyy4DGbxSQxWCt6PSq",
  "key18": "4s654wWV91HF6Uc3MpksPmqrQKXaTtEt7TmuTjH9Gdtag92oqd7kkUjF3cw2FcgjhQsFHiGwXTuPwm3ZpyvcEcS8",
  "key19": "5J5VthzkdJkPQtGEgwFgJCPtSoZoXN95risVVGCCXQNzbJAZFBLjT5wmfkYrDb5S2ei6dYeqXdaALuyKQvQhKgi8",
  "key20": "2DZY9sgsKtFsKRbqoxt7LzbeeHHSzDXJPYd93xoHxecGogczZyAvehU5W7HAdi1eRcmDP8SDnknEE7LssMdG62b5",
  "key21": "cMtycHzyy9td8FXznPc6VMK63GvnUqzHPNgpEkvPiiUa1Xax4iWFrKgPb4Pvuvb2j1hSV4SKrPxDfWr1hgqz7V3",
  "key22": "5WtLVmZLTt7KPeQGenzex4PPQXcZrficymDTAJwzov2yGuRngw7fHHvmj36e155Hxp7PrBR3apmDHGCE2SKfg6b",
  "key23": "2APtNfuwgikeA7XTjcT8xpwiZrDv8oopKC825Ax2Vf5vGikBecWE1YccJyiboG42nD9y3aVFXJAgbQq7giEJjYYg",
  "key24": "419SzFPZqU1ygqYMgsk6zYvWtT4LBqUsFtgncBvNwafm4BSrS1G8jPjsmwHbUct9NQ6CjrzRqFqYJj78qGHTY7YQ",
  "key25": "63or4UEMQCSTJYrXuVACC49oBv317YcvyNaWyKA1PSf5nFqZyFgP64ukguZzSzzjUU3juvkjBWp1y9wFswxMwASg",
  "key26": "Z3eQHQa48Qrt2cqyctNbLkFWX8P13jWzGyoUfAYKmNJjiVqzd7ZH8asbXhHR5RChG7uqBd2o58GHNrtvPmkWejy",
  "key27": "3wFV5M6XfywKfx3LnP4BRRgiUu7uaCa5pg1Jkf2UW6UCYETNv92vXF2tmJUBjUu5SF71U6rKGaGgAaCd4qWCHjSF",
  "key28": "43ZoBezQ4NmAfGppLwqA3fWWRdcUsKuwDWWMyhkJEyhH8SAj1Q1XkQU9j6oXU7yQr4qdeiDqtVRAAYrafmBAt6p7",
  "key29": "4sxUGb6zD7JNreYBa5VjJwtzHHk6VTULdMYGAJ1M8sbHymrVFRujkJSdFE3znNpqGNjGXcWZkCq8Lgwo3Lju4Us1",
  "key30": "37GZ2o2oKDFdskD1fKZ2mmXaWGnKDGvqYBwiN3PaMT7NnsSqyWPF4pbkcj5JNKFWf6xmET6qQsJKRs5BRbxttQLb",
  "key31": "8s4VtCCsNCtv66Ld4as1kvQ9aCfBKbXjviBM322fXjsP35cvcvpiDu1NDYbUgE2nK7zFtDRn1Dq9Z2qH3rTPvFU"
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
