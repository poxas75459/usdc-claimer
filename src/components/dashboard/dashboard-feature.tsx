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
    "5YU1uL6Ju828w8LbSCEq6He2n6YuDHpWByVbUi8NVgU8h84TQj84aTF2U8eyukxR6ssiFBBh8ML8oZqpixjhenaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPESZGovSG7gMJcmc93rVyq5GAsSHnSsFBoS392skNUAfo8YoeA6zY3KUn6rjhymcRhKnU5FAvEzJCWcue9iyCH",
  "key1": "9tiiGeoF6ucRcy6T7fMLqUtUzowMkzvnrvuwXpkgU3sMp7MGHDX96QPHk9ApKV7gWWQYFszwwmPQJ3BFqK6PwAf",
  "key2": "2Qd6xA32tzR3uYiVL656iqxeuMtnbxBtshCtMeKcU8depMeLQ4fpDSvMyQbMbVFiUHjVSSb7cnnuYeoWsKy9pP9b",
  "key3": "2XUsBdCXjuamwWk7NNaL7qMc5PDiRSG9GxvJum3dofENXxNwFDgzzXQJcDL4YbEnpVtMZWc49DFzUgCRXpPXpcKL",
  "key4": "2jXJxMhXWSfjXkqhaubfCrqdtMvi7R4iuLWocsNaid4yQsfKKGyJZpEobb85k9qsDyFuzLhMDfqb33qq8QZ9Ms2z",
  "key5": "4WSgi2yyv9pUqWeoLsWR6ZTEBFiAyhXTSsUrEhaxW9S5BSiQoDHssunjt9EU1nXnH3VvmwRibzAsibV27tfuRs8m",
  "key6": "cKWrKy8gdStZKSHVWoojQ8uiqPm1xV2MSfSXCanM7GbZmTvqUjnK8xt3FTeQeLgYkVxoRGJeMFTgzTutBDcN8bb",
  "key7": "5JMg7YrCYWLjwZYciPuhZZzus8ySVbF2fTrSUth3w4GDkrjTUhJPmkRah7yDC2jUT9Xxk7FarF7ooYnxsX8c9ufj",
  "key8": "5mXN6au6kgznubfZuEgKghUmqwY7ZG4s492tYvVSaKGqXwqmY1cp99Fe4zemzhB9CaLgQNFDf1q81gMYsPRKg56H",
  "key9": "5KTaKmkKgDf4jNUt5hSyhfDS1Gx24LkB2R6PoML7opCq714VHPahixziYpNpLjAYg7XVevktLTbgKKHKcMJf9m6E",
  "key10": "3cfnvBWwdtXqGpw8u6ReJk8YejqQ2Q4tcHomMMNhgBmrrK2REjXfoFTmZwMuxMPqPj4QZU2FWjS9ctSvaQpYqnFP",
  "key11": "5qLdHhtBcbCmXNx9kHx7WXVLGVTFJX68jbJ5bdQ9yZ2gXxQcECZN5FAuLDGkjXCeiVn4gbk4wCcjgQg8VpAaVzHs",
  "key12": "5x7D8kxKiNHfVHtyb43uxHoEuQGHZb4ZY4eXjNXJ5RwTJ7hEn8LWjS9Qz78JMdKkFukkdfGMQC91RWJmgBNSshhB",
  "key13": "4V78aQEn2pL7YvsjaHn5ss2UMHjEeR8m1RKpkBfxoDvRBaikNtHimsTL6juNnrXBFT1ixrrxsrBVXGmMfoBVxKF6",
  "key14": "3EEyCWCXcLsMAGzRxD7w363d5gYFBj7MernQyBQacNBZRP4vFsHtHJExRRyeE2Kk8HY44kCudQj8eQrpTUsmVkpN",
  "key15": "5cQ8r3iYYSdZAPzxdhGAomoGebZjAb3MD9PGsHjTMGvGJ7vvHeBH9uvh14V7mZ7gvM239FGkGmZMvXCKRggiB6vT",
  "key16": "5a6xV3BfYFPLecx1BzrnoNZCCW4D1MrHPHFofdGG92UhpgmYN6JALbDyV7qHTyVkEQQ5cDxqtFqvECuEgxXPpV2a",
  "key17": "3ktLv16PeCZLFWJMzTRDBgSebxozuntaCHMvsR2c4vpN6wc1cRJcncAsaceNEnov3LE8fzmVvHEr5m7BZ2hJkywv",
  "key18": "26KU5FZUsWeF6b9fDQ47GuUk14FGWXJ6nmagUnYiq7eyDYjKC1ffeNmrdJQCd76KVUsbBsc2Jkr2G3kHeAhvaL3F",
  "key19": "2Kc3hyUSCx1QkZ4PCth4RGprJAFkJLH97rptD1q5rgVHLfouJgUZJT1GdK4Woh8uATeoC9PzxRD74e8AaTMZDnqF",
  "key20": "3Ti6RY1gYjmdHoBQeEk2L5UxAUJ9AK7z5ma94rGNY4WBeD7SCzQvbtvepxAfL3xo217MF7pAQHAN1hGe5pnATKGX",
  "key21": "7dRT9MEL61Rw9BxUVag63VLaAP8y7iMurayjuJg8ycGLUyVt8FbtZK4MauYx4BjVz6pJKG8eP13kJbkbFbL9awE",
  "key22": "HM4qDFpArET68Hz62UHjfCPvFgc4Shi3M5D5Jo6iFAdsWHPjke7w7G3YZm2XWqBAQwhisVBdAfhiwHAX4DVKLkz",
  "key23": "4zMCxUQN7yyqhPVQE2bw7sDG8ngRJEWSnGzGZiyzfGxGBQFPLJe9qdZRS7qjuxd9Mz3yrA4ZqKNqwixjGsofkGEF",
  "key24": "2mukVxG7TuLfgPguvzXuQqRrWN6WpAufFLdcc6H6ySMEecUdtJC2TwqbFDMFpcDZ6zequTLQuA1jSsQmxtrZrTyv",
  "key25": "27BAQnEaYPSvGM8Yr6mDi39xztc9Kt9YfFdW6cGo9r4z5FCqh8xeo8vbimXvTXDddvTgpKWe7LGQP4h5d1sPm9hd",
  "key26": "5xJJedDAJMjy1axKaNtoKB6nb76JeWcD8p3WXM3PkKoRRMBCRRauZxUBDYQXjvoM7FfifeGPsS9SJ56srPnRjxFK",
  "key27": "5vHGsXrcD8CvgjzDebihX2kvBRf43bkjp8ux7GFeXkxWU39nbRBt9yKK5ibtDQbWj2ehe3qEnTDUHndf7jd5ydAX",
  "key28": "3MZsK29tNsWswZvyxnjgREmiHUHXydkH2W1SF1SANWaRDocnQxL6Z6ZPaKVfqUiHQux8sNEcrRyia7YPur6NpG7G",
  "key29": "pEXQwAnR3cJRPfNvFRi6FnCw76eNF4pwX5425z1hHHXdHsJBTVmXfGgZsRY5riFWbeRBt86hAMVKeSx3QZq1iZg",
  "key30": "4NfSVyW9gNVRJc3en934coDCD2QVTBy25TPwGecbzNR8wpy3CLhaxDqkc9KzKead2YVWkSM6kHZBR7T3mcFXDtiz",
  "key31": "6LsjRX5Aqc5uiu3yV2rJs7rNdJhV9MtA5gZFVHHkeZ9Go1yW3kiNAkJz2ZWRWuhLJGwMNbNUEWNo8tDreBfCmuP",
  "key32": "4BHwFnXmif3aEhTceihsWWKhUuDY6JKpbmcLx9PQQSFuK5p6s3oQbLDBMQUR8sxpMWCdWdWfiQs33BCLL7qpGXMj"
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
