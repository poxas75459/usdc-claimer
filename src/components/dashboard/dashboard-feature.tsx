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
    "ErnUt2wHapPhyz5A8mpcVa88G8enX2uDYH3rhKWtmri8RgMNic4WEzWha9Z2WwJnStL8r6g6QcPZgxNdrPLJj5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wof6Xrj18aoRqkQ1LxWFE98QVBiBw9DJqNG2zqzkgQ8Qzf6xL4UPxMY6rT9iBpzjapskzHP9BNhccQqqieFh6FK",
  "key1": "3BGooq2ktrwASbVCwaKSZPgVTk4nfjfdfZZtpuaB5PF2AMFFyYCW7GCyk1Vxvv4yy293Jiso9FQycyEytpFhNBiM",
  "key2": "4QUSeQDcs5UzQQSc4Dd4yjkHwMCUDM2QBoGmtYhc9WL6NiMwfwam58MQk4KLMZ1i8uSVvS7VfgQJHWwKY596mDAf",
  "key3": "3xEfvH3a6xJTX3a6JjsvMCFxtHLNK9oCCz4MPT8xUFmXsQqm7gmuRJFVtwgE5SLgmyeehzng66HSxqaospXCjDqZ",
  "key4": "5sAB8rPQWPXxXTJCjJJgAyoVPyEp45yLEJHvwmGrZpYZWXmQjDUChs21JYJL7mwMSUMXF2nkdcE9kbc5sNoL1sF3",
  "key5": "3bqvQPvT4dzeBiqHfZKL1n16HykNn1yecbRGZMJnzEYac3qmkq1kanVizzwaNXvSWhdDZFxQdaYiCnWW8vXcuj2T",
  "key6": "35jWEvsdRAjMek4yqSzfaFQ4TK4RDwXhn7WpfDo3VYDzrzmG2tQhkTvDNGYRCqiSWVRSxwxHNn5m5fywxLiRmH2m",
  "key7": "2CLRkHLD2YRmC8ENFVz4PJPNestmpTebpYPevzBvrkUpmiszDM1uUGyGfGiGW2D53NPYqrSQ35uX74kt19aR6iUP",
  "key8": "chPzqwuUMyFf8hmjvdaAgNEHBH9wofJGPQHaLoQfPGHrFt6sUMmNeBt4oBG7XMeMPPcv8Q1U8sMLVpxTm3Q7g5r",
  "key9": "3QkNZVq3QF4j5jR675mkn3bDfpYYCauC6Efym3eXgc6jEwqRVgDg5wnmjozLXTYKZ2N6o75NXoH4Kjdca8MNRxB7",
  "key10": "GGjbZpgY94tuPNLwXAmZE9o3YCedSeUWehSjSN2iMR4Tf4Dk7JpoX1C7AE8zGdEKZwpNc9uPBACkQ9eML2PviPf",
  "key11": "2uWFEAQkUCAYE47AuWTHggtiwwujMgxUADDHBnCNE5biJnQ1x5gbKzTQyoFaFNpUzNABJubCYomkp7mdcYSFn3AK",
  "key12": "2LGrA6qLu3ZZ7Sg2vYbmoU5qS33UvKfLJBrLpdizfrUroS4pyRC5yVmKkhpvN8zgBWEeRUC6wYTh3ca41RGuD9B5",
  "key13": "63nSqCdzY2frSrD2g9TEper3L6kCYJuYR3Xtq6GXiGVLDXTjST11FZYtYeo3aaCgHNs47A5LcHPKfca7n4igz1Eo",
  "key14": "64itP2URz5hpDtoFezgXctTBXgx3YdZH4DaQeS1sEKjzyPGacPfVFhPjRSnt4ZSJkt9abeFwa7hXNzftPZ143qMV",
  "key15": "2Scf8uE6m9a89mpJ74Y8gjzQXZGSH1Zis67zDSW3vS7FUYk1AW1PNqfZ8jShkTscYw8SLwEyPX9friESZiwyquyQ",
  "key16": "4y8d5vPz3k5zUXpaSUAqKHiJth5KB9HMWtRJAYvXbhYirLFqWMGKbajkaR7MALcHnoU1tPhmDosP8qXXzB5ZQoLZ",
  "key17": "3yTp7qJ2EcifxK5V7EnNWrQyFgeQaBQenVEJ7yhR6ypSQanw1xForhxndSkMmrVEzc22eX8yCdJ1nNVasEustjih",
  "key18": "2xTzpE1ZDLqu95TuPZRTQjM1uaUajVBPH45vTkgKkawF3Z37PiqagQfCRa6H7EZdpn5PMUE2pfPoyrdygWmGVFZt",
  "key19": "26TE9tbUcp8ZHAWTUJ4MRy9BgAAnV84TTMCLreCM74Q5diQDCvjm8UzsNizsEAfzHAXkQoNzAKZeJcsT2gsYU5u7",
  "key20": "2zFx7zkWzsf6bRNR2qiv3kzL5xTVa8BEtFNvUYydT3SYjDtYK3KS7GonfqytWDG3ZCLXYVULSapHrYkMQEwCbetg",
  "key21": "46MSTAhy5GC1De3rwBk4temY8GWTj17Vz851Lo9dJLZ27dhJ6ioaDmsh6J65qDHCLdcikGgcgHhYcZEfQWZvFpdY",
  "key22": "3aBjWZrNobBeysjVCLpSoPGCmKBgfVf4B3xrsmgGnJaLq6xw5cAZ5xomzctBkyAJhhGVwmniHgJw77r9DhSab21A",
  "key23": "2BzLD9qMytPhwvNjSwv3AGr9cTWSmyqchF2KWUryUSLvJyg47m3ZvJZrivX2qrWopEBfMHpwEAxMoYm5fW7r2wqs",
  "key24": "hWoRFa5Xs4bQa3EhgUdBJDxQ7hUZofsqbG3LtDRjmWbnZ2PSVKFtU7sGFB2svXAkbH4Vzk7CL6U1SDeu8cqw1uj",
  "key25": "2s1JEjcsjepFvkgNwFvjU1ZLmgqeDmiRNPMHF7jhRE4NSTtbvQB9HJk4Ww3vexpf6muaT4ZVqUMNVN9FJJFyPiYJ",
  "key26": "4ZTmh4FBgbPsbHLKBzkwfiFN1uDdwDMuszXTutpBV1Q9gn6no6AXrVFP9FBpAkKfTH648rDnnpfXM1xS48BqQheh",
  "key27": "5Sdg4bdq1tk32wsTnNeDayZ51nFrypKvqLa49qddG58ZpJKPj6zJh7S2Pxr1VbMLmks8uhRhULEp4vbvKwtHpR1N",
  "key28": "5ZZVfMSUtbUHanm5923TYRZPiE1W61Pb2eDyhntacoQBEnxNgmFXwxrNjnuLwJbXSQpwS8g2S7ZPZ5z3BbtnuGvN",
  "key29": "HrsxkpovxTpxQA5A8FY4qcy7GQkccJ2F7kzx1KixGKkVTZDoc4eSwmXkBtta1pMTz4evVwd9mYcyiMxCbjgkGRF",
  "key30": "18oWyLwzEziXGdm1Eo6KBpVm7ZapHCpSWiSF7v9dF3Hxkh6qUT644FUXP3gS4ULsBuS86CSB6jEMnjZxQSsCo2G",
  "key31": "5JECwmB7kbPEUaa3gSdsk732sEnh1KDZpTFE3VPZemur8fcXMoq21BJ22BHVmxMr8Pqdh9Qzh4UGy8FrLe4DmhCy",
  "key32": "3S74xF8QK2SD35yiv6h48j1HY4C4M3MRLmwvr18Gk8BV7zEyrZ9GiWzK5YriEuZZTqrhzyF6BHitS6mWwmARsQ7K",
  "key33": "27FZY9C6K89FnaUNpUt6aqpsRSNkBXyFnqJicXtFsM7uraBMbiEVg92iP3LrULG5gz4T59g9DFMVgqTZgzD2h1G7",
  "key34": "49ixdpPYS2tXWkj295oqXxdeDusmA3DtzR4WP9V4Ek8JLEY8otE2ENzNYeTvHXyDD6gQyYvwqdD9hLLQZA9B9yy4",
  "key35": "3ZUuuNV9GRXP7n5zW5MQPrs73tMJgtUxexYZSzYW2yBbWnnPkLzYip1wDGvFSQiN4EXLzafRL7ajwkBrVrUz9ZmC",
  "key36": "64UCah5N73WJCqxYioKkTx42q5onKSGRPcrjTo6FexsosAMWqj49JMwgPBx2ifgKi1LuwpEpGjeK9FcwFtBsovNo",
  "key37": "4mGhD8EPxZTCASK5DhTb6t86KsHvVxSKwGLetHEhrxbAVEJcMrpuLifANDtVQ4gk1Kpv3dc1nVCQ6YUpxCCMGvoR",
  "key38": "4uDBWHvQATiweMyGjVEgWy5dKVzWQuVdBh1hpfwCe2SHXDj5E8G5GZr5Pxm3W6Wa4qGbGGBCYAjYpMaWNXwikw1g"
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
