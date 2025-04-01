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
    "3XNwGW2NMoHVZzJmCXSXxX9cUonyzUDMqfxZvbuzRf9UEfzZmLKH3YHv9eMJWUq6jKFwZWpN9otWYAk1SSffxBkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qfi9x93M6tvHUftbfssYSgqUKjAmc7oPwEkX88gQNimAQWAvxnDjYhz4nuXjoa9ofiKYwYzq15GibpM4rm4ZuSj",
  "key1": "3Lu1ozGHrdgxfz2CuFAYdrFByriYrJNU1mYTm31bDT4rdeHdbaBd4qWCkawQPGyczz41QcFLyn4i8WMiGHFTW4So",
  "key2": "5VUaT7aM9PLYWpAKZ3TNdr5nhkvfv55hBBr9tu4HNknn4db6uraV6W86gpfk9iHxSCjLExw7NweEdEQwGwKQUSBk",
  "key3": "2wBLrHndoADoyeqFhN8Pb9t11u6JrWzLmyFAd8PLUafg79b9Wvx6ZJuj8DvpYeGDrczyjjYpHs5MmsTztoFp3woV",
  "key4": "5Sqr3vaVuiNzQgr3knXax9owbewN3EFNCp5cQEaa55kasvk4FvtdNdyFaVJuk2VxrCwRUFMWrwXq9maKAhSQC5To",
  "key5": "r7MPCJzbcUeb9aKxJ58iUboZoLwkpsRScQk5mDuVp4B9i1YTiRykEt8mdEGfvKiYJ5iu3VXXRKijA8jCuGW6wMh",
  "key6": "5mhS7iibJm21nFXPkPzvBUSSoitL8mLFdrHre5f81JrNFiVjVbq5xSL9YHzAqxqK1vbPPo42Ch5ytV4hJS4BWqWk",
  "key7": "HVzuN3fgVxxJFLF52xwiQb2s7dMtT6Qhqgqc4VsCPqQzgELms4BYEMMbgijV9zKwDYkXgoNZ2bpUChMemwigjmN",
  "key8": "53oYk3ra5h6tksfm3618u1e4ZuFSUAjheBQbD1V3CmciqWu96UgFniVBicT25udD3FKSr6qUPDsj9mQmLrr5sZDp",
  "key9": "2iMkzg6BJaQpuUSUMqU8kerB5uxxWxsZUeEyWQzHM9fVi12nMzPWiH2Bu5pyKgqQ2SHJ4zYgTYFUam38xympbXSk",
  "key10": "3Nc9vc6pXNRjwWMkSmGTHb6uSCVEeTNWpE42w8jSrgUkmocUH2kqLEuVMx5C5Kdw4qPaLcZEH2iyGjcWZvY9wwTd",
  "key11": "B4ZTK7pi3qMkJdKXF43CEKS5Lnugf8kiu8jFycKuckMGgbgCnCoUkwmrFvQtzVDxECo3yi92vjuoKCjfaAigKPP",
  "key12": "7xn6aeYnNgwAZbPmVcT1d63bF6cjithuKtK5ReQoemTqjTmUWHLPHJoEMTob1NcJspcubHPq4X7qmp1FA4A3EaC",
  "key13": "56VtGbGkmqaQYVPwTCQyWcvt9BwrU6uRxzUXfnkpPUDZRJQ3o2RzF64i3seTfsvvRLMPzX3SmsfnhNaUfEAmwoh",
  "key14": "3XCh9aCGJENBiSTy3rumPYjTHKiPtdA9ZrJqVpXQvdFWJ8RF4Nhc1xBF9wMC3jUVX1arftjnpW7i4dJFQtN6PNFF",
  "key15": "3SJoLwgq9xg42mC8cfM3MwtUbCmKnX7VjGKtuu1nXMuD4YLjCddZizWNXduJGW6dyeUg5ZZ5Db2cFX7GQRDhUS86",
  "key16": "42tW9R5mXaMqKrys5sQfG7HDCQYGoZ8LbnY7vQBKqsyrD7DWVvh9bzkv2qryF3csKYRzY3SzjLvusm1KDr5u5XJk",
  "key17": "27eGg6TXHrw6U8AyfGPhjUDTqaNfvn2QcAdA4BuhPcir3pbCVo1geuUJhywKrDKHfe8qR7JJr1er8XGzqVjBzpfG",
  "key18": "33r4KQFLhucFMasiGDHqzssbJpLhznk7o5TdQW4HHTyniLsQki55Xxpzim9yNodwGU175Yj6QXk56vz8oGSwG1F2",
  "key19": "2qKXawuafvFuoXK4A4sBbbQFUjn8T9pou54AQMCuhUKjSvbjmMDCX4fAF5rvZNnezu8h7XjJ5CoJeDwatqzcSQL1",
  "key20": "2bnjbV2bcQcdjj2EXz2Jqy9ksu42cSaw89P4AxoGsdKSiJhPZBhbfa5LzEULi5Q5AWrCp2mYkeep5PwhPZxmzm5x",
  "key21": "21iLSHyA7fbe4aqqdPUQTmRee1VZ3gQmzWpwYthm9uH3McJ1kjvTmsqubwdWuqY2F4Bf9kYFpYqnTviSC7HQhQ9R",
  "key22": "bN9wC11paYYFR6nzvKVdexsqEgQPvKxGw7HhHAnTfZHG9pEWfrGeUkWQZzB2cc2d83fV29AuECApPvAc8eBXwfj",
  "key23": "3pSdDTz8rtsUoWoxUDyLTZZpsoG5rJT1xmnoukCtxsqous6jn1aHk6Fzf8RhhefNbb9bVhWexVGBbrzCwCPvnpMy",
  "key24": "22FzTt6MMp3TXyWo5qhrjYof231y7bVUmjhaJuQbi1GEYHqxDfupjJNoLTboCp9h3RyvwZbx56t7Fv14YsKqLV7R",
  "key25": "4EgiCr9eFSiepPMVJsyqAQDnsnWFgwfZKkHghTUDoSjTabX1xjnXXw3ZAM9VKyAWjzUURUD2w9w5ppfiyQJbaKwu",
  "key26": "rkAeChPKbPxzwoPFxyPu1kP7yzAipxE3fbhomiDBGVmSCDNUEVfLXujoU2TTgbUCviQQn4mnu3CktzZftKPaEjJ",
  "key27": "3WF9eEBvBp87bEbh8Rx4q6Du4VXqoQfts3SBfS6VgXe8wvG9imew1dWZmYpdgg3rFPidHGx2PtG1Jz4RJcFFvzt5",
  "key28": "3tPKQpepzwuwg4VZZYjZotLd7u74VZTsLDMzCVac35474buwGG4Zm1WeoTAp7v5BXgCUujGpmiQJmFDwKCJEDeYJ",
  "key29": "F5iN2EM8erHU8mzaQ6gWdLzhwvYE8fGZW8mwYLGEsCR7tb88xtyQmVWLbJbjDbX7pEBLyKsQzY5yx5voJ9x9K5U",
  "key30": "E6cKc8Y3eH2sGYYQcSc6cteVZGeGyt7t2GiEyF9G5NkcDHHF9KzjAtDJ2HRiXcEJWFRqpLLD9EkdTpseX5zvwA1",
  "key31": "2jFkcTMuwkNgUmLZoe2cMtWq47qZWtjP9Vs8xLpMEBv1G14SRhW5KcLuDECh7dDCPnoyaiMQ9vdmectJ7jZxgZgP",
  "key32": "3GxjEyYdKtXSsug7qDHbMYJsxS8omq7uLnfi8Rp4M348ART1EqLySpdW1hyrHCmB3TBA9feZZ9WHd22maSoPfgwC",
  "key33": "2pHufBfskJcNruNApBP8v763r3hhRdtzBn47ESLW9ncVntjw2u1yuha96RMbfVNaxacfUUb8KoQr6znXkuhqVe5b",
  "key34": "4UEZvpsaKe29V15RocqGcop4vfj4BvTswLFBX81oRERazjznEXYNcmAhBE4X5Sw6PdQCBzX1jqtrRtMoeuCcJoMt",
  "key35": "4kcVSvKYEUWo7xoaFKrmnUdoBKV4Bvb3q1eM1atszmAh5MGkhYy629wYJnGeUYaDCX8eBn7MnnkY1kyveJG4jRTu",
  "key36": "58us1AxGVvg63BKrsTaK5fk8RaxvyMZxvmZce2kZZkPSMQfytQ1ECxVShWMSVMtDZRmDkhJ9nVzY4pv78xDi5jvq",
  "key37": "5phLWvH7WcAQfXDKc5b8bDqgLP8Jr3NbZiyfetQDXrCYFDi5xWf9X2zhrFfYXem7dnQ3VRWxyrS3p91APi3v1cRP",
  "key38": "2vDmuAgpBa1DousnQvCYQPGitS4jHshgc1H2qej5jZuTJVk3NwmiHpWV976UVuEobguLP8sGhRyRQffANS4Pcy3k",
  "key39": "49A8nLtQxyUBKdWRbm9Bk5gZZhUD35GVZRoa8dNiT17qycHBY6Azk6XDs75dYFYUn63bJGJ1v4V1fZmEzVY1qctw",
  "key40": "4MB8jYG4aWfSBwcMSjYN4LvztourtYWGRaKggdLK1apj9CYthqGopxnDwttUBarfZc6Pxqe2y685JxbBw6tpmeMX",
  "key41": "4mo9eLCnmdiLfhQqi2YCKqmZvYpEJTHXJwbDTzZX2xJydhrEkUg3LT36qDATvrajVxxgDtpp1C9oM2h6LZozcB1K",
  "key42": "uHgJkYdy1XW4P1YLiGpRTH43Qdfd4frnc6PHFd21cNDzXPfcLeZvEtJr54Zg66NuX9KnY9MtB4dXGM9uWZcFf1f"
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
