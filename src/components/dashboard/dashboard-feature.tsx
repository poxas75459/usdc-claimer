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
    "4HfRcbroA8XPqV19aRyNT85csS8D5rYUDKsY3xfDYgLFDc4Q9c8ZW5eEkboSNKPTYdwmogHhX5RKcaKU5j2mswwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nYYTENNc9gqN9WijmctMRQynNCdT68RDfN1EcJZBgZcBkh8Newe8vCXpx7W5H6VASa5Akg4cxHJaMKW4r7CBsQZ",
  "key1": "Fb7CY8Eoz7GsknvZcwRbeRCHVHjY3CLRxzg8AjbDC7kprSJY2JAmCn8RG93HUEMBeaDkM6pv2u4DK2DC9YscsPY",
  "key2": "LoSDuLCnvxkKqNJC3C6vFjzyDHkAa4yYnS1irgcmDimvRTFxsbWAZzwbNQJetoVUZtBZQQNVWP3Ahf8m143dm1E",
  "key3": "22ddvmCqYgP1NQpCwFBz1BQWG3woCoyhXGRvVdGsyGaaAEUWLQAeqjxQR5WSJ1RbPUy6kp1cevBudZDahpqxqiMy",
  "key4": "5QCTQi2uZgXahUQN3e7aN3y9ywxSM1KgFxcJz2kjKQwgwsLzkbdyYXk67s86uidnr1hWpr2se6GX8LHuRBFs3vY1",
  "key5": "5mnZcRVYb7xMv42ndXbKjJ8MRi98Gd8bKRthVVNipx3T2zcbWmTqLBZP36GEBoUQPbfmz8LaQ6BLTgvyYCjXSN71",
  "key6": "5Fwi51Sk5Q58oR96Rue388i1xfPzriYCGY4NvVKBuHyrVp84R3NpThhGVFcNnRUphwUi9fsEjvJjHwCsHJS564h3",
  "key7": "AWyPsn3AXMUyFfF2zfwUaefH3yqQ4X43pHs9aLPeeHWoR7n8aPY4giiqG3Av5nRRvf8vrVDJFo9H1PzQjPUgT63",
  "key8": "2UUqXaczpxqWtfUTj1PNBdJ4R6avsnzF6Lq4e75vQJiGAFt9ALhmSqgiZKrzwjzKgDumsypt7DK5ydYVaQ6HgHAM",
  "key9": "4F6EcK7A4DaDFYNhtkLnGK8EBY2aEKCB7fS4oYEfYspg4b5rrug2iedX2HMqUA2Hpro2r25t6tDXa9vox3Ythn7M",
  "key10": "aZLQNEPM3kYavLvvwirNAu2LM1fZo3Yq4CBHBJyE66cnyKkTzJveyWa3tJqNozi3eQybsC6fV6rEzo7tWaXuNhd",
  "key11": "3LUY3JbYrTNkcs28niiYB2RgrqGNMqZs2KUY6EX69A1hLNtDFy9wAfs7doVJGgXGwEf8XT5mvGeZ7EA7oiAjGvSg",
  "key12": "2XHyFtTvsVtEwvNzuDjhPD7pMz1pWF5SF3SR36fpwH8cZst16jKbSNdoByUPru1S9xzcGo6KaUNWry3N1YjsAoHT",
  "key13": "51EJgKobyx12WddYWY3osSbbhoncYrNLKDEGChJN9pja2rkb9VWwyVHAXRocjeg7P8pgeEU4aB9dJ4JB278h8u5R",
  "key14": "3TfwYvVpxF1sSKTRqFQmpPcJ59PCo5CYKv6VzvJfieukQWRpyw2Tu6mZbmFGiinnaPb7aYqtt9x7mEq4cQee2CSk",
  "key15": "5jEJYTsPX2y42ZZ5zB5QMCZcGUtSWnquuSYrhUHh4hubCZg2HNMDMgirLWrp66qQcf9nR5TKfaFmgD6QbdsnKBqL",
  "key16": "5Akg6AUe2z85Nk3McRDh9RyYiCUJ2Wv47f1kKDFjN5HDrvFWCb6xpyFx4AC1WUBUcjukSBwP8wMCB1r9N2bxqMsD",
  "key17": "3CjKkMWRjqZg4fHsRE8kyGecR4RxAvo3YN4Mmnn9g53C1MAkvekBWoXEnzgLVc3ksYYK8JYfyvFXBnxrQSiRv16P",
  "key18": "4qLCGMxcRZtcY94qUMQCziXsfWoCCQJ6shPMxiSHHEqE7CvSmXg2sj1i5ncnixzKn8JAz5ThUsXfpvZ69MnoUQGH",
  "key19": "55rKD7gpfYqMsGEu3XztogUmbbkazekCCNurRnvyw8dRsyZKqvNkEDUy9WQfPXiynmGkWWPB425YYgkizZQvGK2K",
  "key20": "2Rn5bNQr5WnwXjTGteh5uzBLE89DLSPWFP9AjVHtGMemzM2i6CiAz1gWUMvH6Pzq8N14oB1oYguFXPQvAMxLiRid",
  "key21": "EJTnWdGKJ7Us7xPJUhBbvGkMVtF2eP5Nv62QJqSgvhb7FNhYd2idgsqLnea6TCJWfD4BiTge5L25dPBXJvWoAFG",
  "key22": "4deinoFftGYkZmoU91PtYrBispBY5LTmXh7ZVLf9LhihDWbqduwDf34H94tycnRUrGzEHKNcLrFYs2PvAZx2s5D7",
  "key23": "53FwdW8uescULHe1uRfNn6yznCnauDLT6wZzJfaNFu3MYb64Yt2DDjGoRXi15c5GJNAkQ13DrwJCbjs1JwUog63R",
  "key24": "4Nwjbk1SW9atZRAzyae3Pz2omGVRa1W4yC61cEWJKhSrunQBHdZPCUCdA1bz2dJj8tJSvyZzb4QLkCmTXVcMtqun",
  "key25": "37W42Bfthk1LdAUXeWo92M1dWVbciGne31XCYswZ2rTZBdVtPaXveFZMyAxRTtdCBbaSnHkALxVoewgRZiNsBqmt",
  "key26": "3gKj4v26BRa5AF3hn6Rn8asYerG4X5pJdZsLxUNWjFw7enJzQHnUpUAxpFf2C3TaUpgoVvN7u1vusczkC29BSoMQ",
  "key27": "stL5QzKDwzHW82k7Z9ojWZDNGYstniREDJiBDzSvvWTq7HjiSTtXA3RiDHG7tjqKCY2e2qAKYv7Qvcwyvo9tujW",
  "key28": "2b3rcewhe7ermixYT11PRCqtHowoecRrTyf5xXGW6VNh5nRn1gQSuC78irz8FjmkFwTzvd1dauUX7YHXQm4SVxAr",
  "key29": "3FfBFYvTWgxsshNExRNbSEHVYoHh74gDPjgaCrU3L9YkZ9QYoxyuf7AzNpTWHQdJs7vx6FSmPA5yrGZfsvXUz8xp",
  "key30": "2hZKCqot3kgAy9NWcGRxY3exG4vWaefNtmHhdZaDzgsCDh42g6yda9mSfa8iwS3V3wWThC2f3PW1t1zenwFHiVKn",
  "key31": "53omCEjtesf6ftMXP6VEFq7SoqApia2rbjhMyHoXTxB7cGDx5KV4qGpQar2MF6p2eoezntAUcxiFguiYtJMr3Kmh",
  "key32": "21qEXyTEKwe43ADNxQYjFdjMJ3nSW7fKqPF7YTw9DG7citvimL6yPWkgcMMTLgQscYLVSF9LRhJvX35ViM1Qcdf7",
  "key33": "i1aHBRNpKeG7PGnxeG3cVTgNpJ8DvGhpuZt7mtw5rNMNYmzBVktbJ6REK4fDrYkgFhWjfbRJRGeStw9ViRSvj5N",
  "key34": "der9bMtaywXB2iEFYdEVCKZZyKHBDKHrKF4PTmyfRReYKUJ1Z5BL2SWR3PAb7rT7puRdGTgZny8FUxji7Dp1Nfy",
  "key35": "47iPkdLWyPYDmK922VuhLCU8k97YVmNENjKpatjDw7wS9WDEfR15zom3VQZ8vvWUxcF56RjXNFZb1MUHwTmb9Wxn",
  "key36": "5jdoEaHMswNb1AWarqn6FK7Hc3hR6agNyJfKfEsxXZCboEyzYqw4ZWqTUSDCST1NPGXaw1R2t2Dco3Gkczkfwqm",
  "key37": "2Hz7owoBodAqWBDZVc2Eq6BjRRrX3SjhQCXj73CJJZmawBUHpzjvyKzCK1NfKm766dAzy7TkgZXK1CCZYnzA5wUr",
  "key38": "3jHNLbHXih61VGDmjET2U9pcvn4mTLLRZyzN2CgV4vVpEY6EtWXAe2D69CWgzK9WBJGr4sHRkNoJGVWwhWvTZ7tZ",
  "key39": "4aG8NthCnsAv8YzUKejGDYcaC59kSX27qyNRXyxLen53e17kYxRxm25zyWSxHTAzxb5oW2uX8AXqcxK7RzV19R1E",
  "key40": "2NH3qWwvjcknpmuCA3fCS8LeoCMrbbkDpe4D2FGkMS3BKLExzWA4Dmx2D5VX6aYSqrazGg7MdwsxDFyAR9zr8mok",
  "key41": "3iieH7JtARDcs9EWmto2W1ttQSgWV6x4kjdwzuGYBjn4RyL6VqHFRWaV36Zgf9UkYu2MKyvVc8A9Pw2CorBcZA1W",
  "key42": "geiZDnREfAzHNzBXZ4NaGfTUHTGsLxnbzcPFYzTDjvMWzQmmthGWjpBJJCWm1QcVEeqkyXpLk3bPwnQtR6UGkXC",
  "key43": "tCZxQXG8C4hesSzxqkpTmbQ2kfxomNb6f5e4WmeG3n4r2VCj75LDVZnGi9cqtXeSenuEuXcB6cMpykRuuzrz8tY",
  "key44": "23VwTk6jBren3ziRR5Rh9pwVNhYNLnAZApZJyj99mxtA8onuiarbnHV611WiwgtwqMaBRyssp8fck2tiKzRWEgoZ",
  "key45": "3jjfT8WhQw8jTCUjDFVk2KqExxRVGLbZHpio8pCv4LYXFUmgG5imdzrJo4DhbgQteRQeB4PN8bn8EgbP23VfjJKY",
  "key46": "672XD6JyrKvbeojVnzgaoEsG5z8JswMFjrip24zNcoqo58wvPKiUm6hTgmLgy52nbgNvnTE9J5g2PdVuKTUm3W6t",
  "key47": "L3iUYcqpoBTaua7vGdcgesZHaGxdeodGs1KB1hww4s4ezVrFoApVroSVjhJ1ePBipayF5BGbbNh97w9JCKE6haV"
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
