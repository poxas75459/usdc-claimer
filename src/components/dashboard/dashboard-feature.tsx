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
    "3hvD2WSUXv31ajTq1Q44yCW2v2uJ117kBxj2QM9UPiNKDaNQyDQjiXRuBXYjMWV8uPKP9RRtvbmNtvdGwEuxW2DB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rkqo2qD8QMySd9LgexuweurjSKDbiPuKDdeC6MHbSWGR8BB5wPmHKpSnMLNk81ysSjkgr7R2u7YFhCnwDzNYa8X",
  "key1": "3znDyoAk3MkCAjoU9pj9vTUb9wpU76uqvrkr1cJiy9NBQuDvQDpX1cbXfquMPQwDJU3cZRBRppcYzFgaVxxV8UK3",
  "key2": "25Ni1xbZeQcKkdstDMGaDhBaSrESzdawigyZd3AvqnSzf9fn3iWm4no64xwN77QZtNef3xqLWxc4r2KgaqktdsVt",
  "key3": "2yE5B66HWWkdekL3ekigduYEjbVvZ9tdn7iibdNrHQ7u54JSVKT7yABbXY1NY3kGh6peCQvXMtAMJFNFWySyWUAQ",
  "key4": "UZzHYS5kpMu7DR2ht8sbHsJeXdTKxB4TUuVz7jgQYn7aMJRS2isMVyQdSfbn6HwhHytPtJ2ajMDPd4QrKPynAi7",
  "key5": "2qSEdWNec4yWZvjdJhyy45DrndAQ3xvGmdxpBrg18paGskLsAQh7GPXBPN8nK8ubua6UmojTbyZBqjCD6ZwuXfs6",
  "key6": "4P7wdhPGHVsqEf2SwQsNUgjCDHtxjb4i8Q7cYjAJyD5gBPyGULui4bjq9dH68RhFyYRRWBx1WopLt7AkFXZ5sEZv",
  "key7": "tv84rAn9TyuMhCdutFYhH5n6JUMvG7CZ9hooZ6ojAW5jxTmKRsu2AVXHFu1vw14aaF4UhPP4HfAB4pWUUqLSi6g",
  "key8": "3gc36yDENjL8aU6nnUac6K6SFnpB59AAspxPxPi56juwTrQ1iMzfTmNpT2oiDMZsSgh4mD8ParMNU3dcBDGu9Ayq",
  "key9": "4jtTxCs6tnnF3Q5BbtvTdf1HoowRZuWzK6Z1jDUtZnRsfCpbWuCnHDCX2bkxw5J5Ro2eYS5pAxYQk1A852jYCZic",
  "key10": "38UxCRKtPUg8bMsZCZ32MbRbUt2C6yrWrHyKSnZQcBHRVAKm1QVLGo2cVuEPRBxbVaUtRo1RTfy7DRtaTyvewHue",
  "key11": "2rekiV6jev1S345XCQScUM3u7UhZQ8vsaDJzjG3Bi7EBrD5ATjYCs2DKCKeU424Fg5AweunCvRVoTW8ChBLBe1no",
  "key12": "4YciUk15Yt8br6qu6rP7mTGSMGavtE3Q4AjBYmJWLw6Sau6hNHFzgBtPR8vonYnGa18jv8TzjLSt8RxpSyQcVzNf",
  "key13": "2uQx4kJ2dzmiU9w8pmFn5GCo1BCHEvnrThR9wGwX4zFhG5JG71BB3jBsZDkfFKs8iYRwayxnMLUUXgdbvgsTsPPb",
  "key14": "4KnrSj1XjyBZAPxRWDRX6JvziAmrSvEtEwGBbomemAxkzGYMe6SgNdhVg8kZjhFqY6ECYio77i5wf9vfKXtNzQ2H",
  "key15": "34z4War5twE8zu8ZLtPFFUhM272WfivJgQQfMhsSYUHbDKkdLA2kkvbLkQqaa58gdYHkNse96cS8ntqdzEX4JvMs",
  "key16": "5cEVb4FrjYSUysQ76acbHpx9AHVxDC8iJUdYx5buYYwc2RgFzZj4DYmQQRzBbkhoQdmxwRJuBsphqYYFWkYaJiEK",
  "key17": "PWGxAgmY2ShM2odnuBMHLFAD4cenTpeANctdrNUYfHk2Ska8hMZSVeP71eTS5pqRgPqUj7C5sU12ZjTBTnSCaz8",
  "key18": "3kzzoETLZbd36RMAu1wiHkASpyHeHsPqqrgYPkKn57KQRNiPPXdT5TMS8UF8z7WBgkq1myX3dWpU6wdxf2moxN2o",
  "key19": "2EVFY1SBHvz9tDNJ5XhWeXhB3KaZvMrR6hQAkhFjV5R2xGEmtxovWo54oh6QM8Cb383b1YPZ2KC9b69aWLB6tWnh",
  "key20": "5k4Gmdu2tyeFPQa7mh5SXuhJPGqBH5xdW3yH4PfJ6oPfivuQMwRMtX3yUEYqnnPfhhfWBdjjLujt7itQvq1QYwBR",
  "key21": "4wY7KtxAKHPnMmYELer8Ko8vQAgCnN4m5xq2mBhSeTsVwjj9mDpJgyrysWUPBf8hnApPsiuk7qRsd6ex8wK85QSb",
  "key22": "32KxRUAa534fhUx7HWeTE8ci3Sneac3kHB6nLyafTpnyqAMBycZ2bB5z3ZepYzGzrkmQY5jApFd245mui6hEzru2",
  "key23": "37Ge8RKpnS3ToSnGRczQkRbV355HPuvvgyaLzwzq2aPqX2HwW6Nrvev9gXKZQaD6uBvEFoo1NLqHN6nPPsg6yhMG",
  "key24": "62qPQocoCjTzXsnF1E3PjfasgYcXyeDjuaCcyWZMYWHAT9YUhGLgqFncrUTMtKWREbgxB4zKdNfz8azpN88DkzhM",
  "key25": "4LbkHLGGD3i4VoxnuMwudZaDo1veVxyiGYUzdPCTkuWcbQJyHTxX1EG5aJ47JmHhDj6keNzPwNnMXniPrFMrsEtW",
  "key26": "iaYQQoaWnZx7qYYjkFSUshGDDTzZhnLph9joRdUbAPtSpkBkt6aFoHH9EQSM1zzFP3B6N314Zo36hL3skJzRRPp",
  "key27": "5VuKe6MXLp9U3y7CWnmxpDaxgKWWcCEggun3QrJScWYYfF6FnTMzDSiF5Nr8QVq6GtaqZNYK6pcN25mdU3GikiV2",
  "key28": "29FaNCnS2BYWXo9Pk7tVzBgNPvfiPTRaVVPYCriBQdvVnLDuNDjWQB7B6Vav8f8ywu8zwg72Ehgz9XYLFoHBvZZg",
  "key29": "5wwRPE2UXWJsFL7bFEwopMmAmB8jdpTUE5F8CRJqcvT9qH61TAxN9q4HiXSqkfJKbDHrVi8TuNg8NQjyCN29GpHx"
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
