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
    "39tM93o6dsB5tsr3rqLuV4uqXPL2VYcjr6DvoRDYwVFPM4iXUJGfob9xPzRGCe1mc2vGqR3AvbMtqfPbh6Fo9WbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyNRiT99RcVHYCUeUR4YWbtR373HRvEf81b4K2qXbTGAzcoTWCGuCD1HSUBGXAg7t2UNF2H6644PNfooVKd1fFW",
  "key1": "4TNvpBJr7X1RfAxqb29n7H2BwQNsgCqNKbSAzCgUkMDRSz1hZ4u1LArXDaJLgvqXrkemYMgwTgu6dNL9suo3R3QG",
  "key2": "3MwedDnfbwRiy9hVQ2d49uAEyNLboKE7ZjHwUtKFiyzZJdCCCGEF8EgD9Xt5bKY86mf26QJ9WznTG3H4GVfUXsMt",
  "key3": "p6csa4heyazrbff3qHwA2sTPmrwrpuiKvZpAAAar8bnZVszfs5SoNxvmDtpJ5NqZg8mNZkQKXFKiyWG19osknmt",
  "key4": "jn4SdgyQyxFhBGwkhTq9NGi8hquvE1nyBPz23spGVjrC3CCfZ3YaWZjjzNCKuD9EuS2HrLxnqopjaERJ2sKJFZZ",
  "key5": "3q9QZHYzjQBNJv25xpv6AgPRJttukYs6TQXkm5wCSVCE5NiWjNma8b13nHKGbWwJTc56VqaQV9Gnarbcm1j9RFoH",
  "key6": "4ZiuTWeEJYiMNSLMV6JYA3XtoaYPBqu1oES14UPwFYgPDhkS9w1NDdgP2XZTNCKLAh4nuyDnZNcVhCNpZP5EZrdF",
  "key7": "41GdXRGvp5HhZBagc6Ku5qbwBuYUedH1QWNTp8mveaBtnZ5vyQQXR5qCJ2v7Rp14iaZg4PRCRscAzXswHnkgZ3q6",
  "key8": "319szohahAwr3YKFctnL42V5Bwz2Yr8QRVehiVAewCPuTL4Bswr9JK2BHTpZR1cudyRtfSjpZDRKnZ2gnybDBM1e",
  "key9": "2qv6aRE5v6CtLSkc49zLDvS2cgUqUwPxsbLZqpwrq8GciGcVPvWsc5AhamXYxuv4nA3TK8X6sq1AkoJLTwrkAmeq",
  "key10": "36dfrEsPApE91cmVW8TV45yjPKMPTsvdCtTMWyjJ4uLkUrUbqyo7SzaNLVAEWtZN3qS9b4Yav9EF4oZVNQ7D3YMK",
  "key11": "ei7K9cZKc1gbcFSmwWoaUcuHQSBFW6shFPf1RQfbstFFyvqtnUCQzca4jrpjv9WYXMvoeADYmkt4H4Jj8jzFwp1",
  "key12": "5XM11UpVhbphk1qQg99Xx5eqKGLsqhHdUpERvds8mxa3acXUwo6sZfRnVPWNGC5AaTLRyLYWtRgy62QbPraYHndT",
  "key13": "2iKcXMGFdtFbyqhJr2aafG4H1vHPSvgfqJpw23QsmHMojPs2KQ4RvHyJEqWdLiADTYhrZB4Mubk6uDvdes66eDU2",
  "key14": "3dSdxNXcMoutYupBFcypXwJ9j7pu2SzVnhTs5CQ73wQSET1sLfLZPxvu1e7JdaH7iQwWnEJegM1zksBCAXrHDbpM",
  "key15": "21nUyvFpyjTMSoNqbsmUPXP7BA91gEGxCbuCrjecHs3BGtHvCC8gSKYsothtSHeQawi4CKGk9UMejVXmomhY7ddX",
  "key16": "nrvABEqEu2BptM3SFcYqRSwG2WyuHZ6UvCTjQ9iwJVnLKba7Px9CFgy4MkYpcHBG4CBtttz3WWsVQ9GQpbwRniN",
  "key17": "3XahTh4xkhuHWMdjAgFET6BLnaaRMtYVvFtXYT8WKZdE5QRY1GKJgAehjSSckFyXHdtNbgiPkrwXLv8tqxd2i7eN",
  "key18": "dxEKQ2CyHJNpkRhpxueukjauz1wV7VrNqbRDZiqeRaNsJ27DUB4sXQ7M4n7zpggZ9dgHDCYWT6yXEBx6RhHQwM9",
  "key19": "2h1fdAj4Kx5bXKcXa2doD5qYUAzmo5c4hvykYzgTABpgcCawPAmSA2tg1nvk3WZSfHeqM4FciqAn8FzqHijaMahn",
  "key20": "pzoeZuPfoCeq48VtpUeeMPvvqnGTx2PhwyjujNPwk6u4EZCkRz9d4STNvYvh9hGebzdXaEFS2FyQ5HFyCDDqT97",
  "key21": "5uA5oJrpgxFegqf5TU7ttTxDAEfZEdsLURUPxCeugWToqnANmaCf42qyhzrv86GcZVYiR6mvmyeNeEnx5vqWGCRf",
  "key22": "5nfGf1Ko1gXYW69N35obWqwzBQNqZ4VUqVDK5dDfTJDdXn4kgURWATaahAtwGhtw9mAc2C1h26d92JXGzE28TjkK",
  "key23": "vXaC9KJ78SLSNYVyVoYzQZnMLWP9FxFAJrDQiHwSYgtgCxU6YPUFbKnznN9b4w84HJwKsMSP32n6MLs1PatdYzS",
  "key24": "5iBPdZArWPFcJP9yv3Gjpm8K7MtDK64d4Bt9VCaTqbmgEcKKs2rHpYNy8turZuGk7CQELgERp2K6e5JjpQa8s9KR",
  "key25": "2a7qruY9S6g6eWvoXsvUYHczHhoiPyKf5JrcWHGCthBfhcdneCmrAoopDphYfXNYBVYyGDc37nvTzz6V8sormAFv",
  "key26": "StfX9CMch9DJr27hEXxLYN9HmuCSBY5vVAqsd4xZVtEjHPkuG7qDBn93K2bJC9WU3C1uRsAJWNtQMBbWZdSVTXD",
  "key27": "4AhLVvf5VqceswAr4q8YeUbVwmXoqSgHVVsV5zZdsW7QngTU55AfCPuV75xWK4X8tfeBnWBx2kXgDgp5AbFHwJfn",
  "key28": "4tQhsCDXePRn2Vj6LmfnUSoHguGncFVdMnXHMhqFFUiugK4Q8EBGA6Xtns2q14sxcFdVnCq5QiuPRv3ZhfeVBdL",
  "key29": "35BzkgTg7Pyi1NxnnEt9yqQhLYZjDXAt1dQjQSsmJj3Ei5iLS6QosEeXUS3jnQ4G2opEHmrXiQGLCSALFEznhZie",
  "key30": "3LJVbb5ZMWa8QsDz1nXBhMdNAhiYzDzg52DHLtkQEURvYn85bQruftdhHn1FmUMrBRNRM5chbFLt2YtLgPkR8C4j",
  "key31": "1XZJt2bSwTgqGgDo2qCQPzXBsrKp46HEDE6jkAFXty16CdDd7bcTGJSD2ZVNdJX9s3Ca77Ne5bP2yS8yEYhndxA",
  "key32": "3ogRe4tXFY4wKbp8UKKZvkmjToMCRXYxPtbR6AB3bRcH4eAx2dp8vGe1WJ44LSn8DLPErasKGpp95gbKJwwdjs5t",
  "key33": "23VGN5nXDxdxnJBn54EERrQrTT6czNSZqcTVZ3aftdQQrjURa89t7LLCaYxpkn7D2T7oQpAZoksdVVmFRVLcB5cW",
  "key34": "31RUENqvmkQQPzyHAaGid8cKLDuYEzEr4Bcjw15yE9XNvc5W3Q5bwqUUQzczLMKZHA1mUz6DFjrAzvFUETni97VF",
  "key35": "LeEVXmWzrqBFHP4fkPeSN33HrsnsHmiB3SQTE6wSyk4RxA1LpxXFihyKfSGFCXwJEWry2Grxmj7pYYZVR7s49cW",
  "key36": "3qqmLBLjt5athNBmU3hk4AA9LJFDSRW27tE2U17ypK6r5tVxWEemHqd1sFTRaumetmx34mXx3PWuwqyGJ4WzpQgy",
  "key37": "5v9wLoiE2Z8LXPmW4bq4D1g3dWaXy9KeS3v79atccYHmduwJSCG6qKhzW2FMsFQ9pKKb4WBCzgcEm3CTddKv4FPn",
  "key38": "7KbW2CdrY5EPvm5PyzrKEpdNBcBHabscffup7DYqZY6Sc82Z6Fg1L969FCu7FFovDyuaxqf5EkPU1VRqujUuMky"
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
