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
    "2oEH3DnSJYCD2DDqDBQvmtyujiQZk7Bf1KUa5fUyHPNuitHq2NGMkBDqtmQz31KcccoetisT25FK8cwjfgqCwLW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmAykg1uMDqyiBsyE9UQ2cvqsqssm1wkEjkhzEDjhz1cpkmxyEpCj6mqQXnNM54G5xRU1MKDUwFRbvCTieZ5Pft",
  "key1": "3z75yqH9wPVHahFXxBPeYvmZS88q5kFn3PCbXPEccQWyFCh4kkNPaHcQcmFhPoHVUpK7kDboeUc485dTtkgzJ65C",
  "key2": "3StWnUbUh6a8gCZ4zrgkc52xayeuz9vsVvuqYZVdQjgnbZvR1DvfEZ97o9u5p9MXqmyNpQ5qkr68dQUyrHD4D6pc",
  "key3": "5gk8x4asydSXLZSbzPWZHvmLYBqZdLgiv1KKLAmqqDcSS4TJx2jo4nH4CsasUbt14TbGdFvULVZyXNxEQs1ai64e",
  "key4": "4vut5aCmdEWQuwgEFacszs5hTdwh2SoS8S9qX79Q5oyf9MeJ1bPhxKR1Bg1BCg8Xiy55HZ3VPKozKK5qSchzSpNh",
  "key5": "3Ag48kgcwEqYjdfCh5veRMVeKNdzMHwfwEonqm6goKp1Bgpoy8HJacekuVeZuyEwY8MmfucoghHm9nym5iet7QHD",
  "key6": "3P1T61HQq62Vu1Fa5ncZu941tq279oyyWpidY5UsFR5JU7f8beCLZ23WE2XWUndTPHyKocnJGgV3VrA4UhgHGYmS",
  "key7": "47rvc6d5EEcytFzu6s3ejCnzCZrUuYtqB9r31iPu4ajQ2gFAqGb35hesegCuPFNpXPkMeD4fSpuJQFv5SMN5NzRq",
  "key8": "666Lx5QCUJPLk9TbKJBXxm9BU42QSAoJfdR2pMyQmb5VJS4g8wgoK37e4Hr7UVo7zFMqY5RneY3f6uJ2mqKjhxrb",
  "key9": "2cNHGqGzTwwxMTSf2wF56u1Ef6nYwHv8Y5Mb3vd6rJoJuCZiCnsMx5iUAVJhdGmXXM3nmkSoPXVavuJT1p8KddCa",
  "key10": "648oKTTqDo3BijqcbX9dRfwdACLDwcVpjsaHckc53cKzNeQTFwHyNdP16djaqWVWohHFjuezbjAfXWa7aoV8EoNP",
  "key11": "37tACbfmqd1EERrWdMB18HaehCqtEtNJCroQqnpMwcLdL95vyUpU6UX2PnLLJXYYMiQgZTsezZVRaVVH5wud4bia",
  "key12": "2LcSuLxsYXgNZ2aLpE4M9S2GzCJKg7hFbRJXwqyFD9SqGXb6oxKX5WV9wBewWAeCzYWBopb5s9sYs49oaKrD349d",
  "key13": "2pxBM1gQvhn1oamnnefawzzGYoBYiqCVVeZAd1pZmCiq2NND1XnHPzHDhhtnUkdYo6bQa8cYntKmu88n7rDguET5",
  "key14": "2oAq22XPhjwvKFePeXnoPx3jscFaraCG7Z915Md8A8g2gYKqshLSMx6uvsgQQHMMf8hdQeDNEgfg4NCbwW6Vif1g",
  "key15": "5AhpV79aSi1MBmwWoy5jD7zaNqgNkQDyiBmyZaUpSoGpyszKJUb6YqRPQbv7UF9EBnVMuYPmgvihyAUjMVUCZabS",
  "key16": "4RJwHcMsC4GiaBfVrrqCN1Q1j9pToiJbMuD6yUXfdyMQojmB7P5g6pQFdTyn9qagP6pGBzLtRu2p4W4fbGMEjv6V",
  "key17": "BfNyvJR5iabSEY7RyG2nLT1Siy7L7dCenpS7UgEvGYwCnrGk6CBfjcidASEXTwG7bDW58utAKoi1AWR2rK2jtB6",
  "key18": "2KGgZKiMrgoQdcEdaLt6acBmHvPJQVX4unymLqgzfQNi1uYGraDAPSRioTktNXt3M1ALeHP14UQR2CJbuxzcY56y",
  "key19": "24uTq7iTcMovofiZkfg5oCHHkoTNzjkhS41uzPDewftAr1BsfPUbuJEy1DMxdCpGKdLTg1cGdB5CoND2pa6CQPbm",
  "key20": "Fc8WJSbJxDZ1ovH5UVaK2qMfRCA3hq5MJQEDVjCPjJx1PtAvgtHeF5Bb2by17uhEHUeqB3BvgSHxLLGTzpCxvVf",
  "key21": "JXKqmS9CapVjq1duLx6f7NF3ghPGeA7viwfUgsCACTyCQ7hko2wejFnAydvM9tamnwLrdnQxqxQMXjU5iCuPdJW",
  "key22": "2QVx15Tdw7Dbm3jyBuGQJJY46fdMKtadRzq7RyK48mZ8ff2WthNWKaieyqQvD5CuYo3CiggEpxNWSshY77HESJRp",
  "key23": "59rDX1BhNqhFydDTJX2g5te1Ziakdb9md6KwPvMfWPMmfFPiyX9WwyK6d8uscwj1z3MeZjEaWbhh2csVAaEsd7CZ",
  "key24": "5Ao6GSY44AJYEfMZ7V6mSn3pf8dy1s1AmSLkBxqrSW68Xgr3a1H9dZcuhzjpzY3znmeJgZjAnhKCPsG3Qs5M4sDe",
  "key25": "4G9Tj9rdkLQRYGSY1FWSvtitnFZbovEtKhh4mNka5BKTqNiMDZw1mdA4Q3h5DtEEqYvuLd3p1Lpz6RVM6JjeLaeu",
  "key26": "5bwp7MFAsqyiGBZ9C17SoZT8tov2Zg6461FYijb48bspQacmrHbsX4yQytJiCdQbNPHzDt5PfckDTL7iayGMuNoP",
  "key27": "25LqZ49R2ufLSniJsnSJgzrawuqoNDnsPfwU2cN3G187DWzMTL3McHSxPtCP8zf9prcXSmf9QvXb8Laa8YHX8t1X",
  "key28": "3BPXLqcgdgJbPv3hRoDFUrWTaW2Z15bbYhqjc9gAFqsHy9QqKNW81RE8cjPtfTc6yHvcuPC47FwLRhw6Bwzxaasn",
  "key29": "45Xf6zQ22bd1AbXTv9QdPiFisq9yiEkEhotAJTTavuczsx5S5gCNAjeCArugeZeVbb1EFNmUu2njSmbaUqwAsRus",
  "key30": "4P7PfnSF3rk3qdDJNAfsCGKGiQT9ZFF5rtkopxcLL1t46qMHM5w2Cm8ZyfttydHdDn1KPKUMBNbWUJxZYnEBcxAH",
  "key31": "5J424eJGfaEXJrnUntg6VN85jjU3PCxw2PqFCbv2by1ehy7gfwGPyyQStoTrvacjkagGSdfGAQkLqHaPu18KBEco",
  "key32": "35Mc1Hh5ggsFaqZjyHCYU6rWscphKsngmBFqVJtRFJ8s6RxXmACTBpFaTZ9u6aNhL6vQ8dxAWyvZfc3cMkHmNF27",
  "key33": "4eRNh8ADGDGAqSEFm7m5jN6uJSGJBvZD9EZdzqmKgrKBZpRr6wgw8F864pPt4wBsW6x1gmuFJ7yNLE4a3cXfUmbx",
  "key34": "65WpixJbzb9bLsVfXe83z7uJFyi4CuqJ31XMz563sSKYhB2YFgiGaHctEmYCjkWVcciq5yDLcyWu5c7LS1do2Ugp",
  "key35": "4SWXkqXBdu9mY9x7GDwkbjcQh3c22fjcbS9UwMrm2dYoFRBwoxa3ugNzn3nuFYNbHW2c4TS4YHMYLCDT5UDK2wBt",
  "key36": "5i2WdZ5EZMi3PgA79eoxQj4KaaeouD47cAGYqiymhCfdFLaCmfUnaPd66vxtnnGYDLCRLDofSvqykKQsdSUXKTXD",
  "key37": "3Q3cjWR5Lkw3ScWtDfBZbtptAF4M7rbPvMppBnBmh2JcmMHrQuigZTDAUS2btksVJUPbwQv3HJr6bgiYTtBSLZAm",
  "key38": "3Jcx3NA5tH1h5AmN2LWbpaDseowtHow96ympRgak3e1xqtGwR2WKp34R1h1LkZ9x7LdKD3RhNYA5yj258obUApNx",
  "key39": "3BFJ5usnBmvfLRwnJJzM2BPm6aKMHap85iASciNeRmbGzkMuL8BdMLZ8obi1TNptb5gZy9YYvC9ADuzq3MNg5giN",
  "key40": "4c9VPkqPauZmPPip2rbnmYsqhFdp5zcHUXz152ye8cKC16NYvEfuhEsETyB496JpD69Wmvvi2Jj7bth41KRe63Xk",
  "key41": "4BEopfBcQSPH5GZqfKy8Cix3KmZti3QLJnX68DNJxYoPhRb2yYFJPANHcH1NxgfUauMCsrRSjQYCNfoW58QZB7tS"
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
