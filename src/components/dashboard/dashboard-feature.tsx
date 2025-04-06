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
    "RNeqcQotPxWejoGWkDwgALGjxXPgxPJ9vwAoAZAtYTAk3WwQKiQgptRvBFo5nMhciP5kU8eAPAxdjn8dyjTZvFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7RLeW5bsRtgbkF8MJnrTdLs8kme3vwHqzygrLgUYqj46do2t6qhC1gfZ5QdCF6d8Dghj8D6AVwRCmBcc67jhxc",
  "key1": "5TbF2xZSK1NFdAAxK5Eyu4FaFTZ548BMZXJCiRB6ZTHPzEHTm5fWCDmewUs6cp96YPoLJ9PvaMXGw7scSgzDCkju",
  "key2": "64mRagTUca1z6zKSq2MLhe5FWKcfFXh25qd7F4g24iLCn3NNho235WCAKu5zJQvRmVgvZ3fyqXgmh91jaiSpLcy4",
  "key3": "7UMuyMbQAJ4tkFwfWcJU9oSgTeEeUizzFt7cVcAz21YpYLuFLYqRR158JgFTtiDXmhCZwMvDsarR2SVHCoDGEQy",
  "key4": "4H838RTrs2bxVRTUgHgFJWtjJmhbrK2LyGDrZ8HEKmxmY1mwswLm1Rjn7oE9eQ5uKQD4B6EMuQqRDtYwMcZdUvM6",
  "key5": "3FfheQd1kQ8BhNA47dJzQQQday6zD1WgnRRecFpfE58XSvRGWgGtEJv6LKfem6fo9uQ3xj9mTAkN1zgykjXi8pMT",
  "key6": "4sdiHK3uj8i9TdfdrLuyDeJqnTss46aiHAdM5ZojrAcjfbqZUwiGdNMudNZqfL9y9W4zn2gTJ9dGkySbX5ijPBuJ",
  "key7": "2pPQa5SPRfvqhMGdzC9xqP6B5BsHVXbfu2YH1AZ5bkhnbX6Yz7GPNdotB3DWYMRvsJPPQV9KGJhve7SmUEe5kHNk",
  "key8": "4q7jqv6NikLKDuGjNYyGb2YAupvSSCsWaj5WfbYBiosvFvwQfAPgiEkizFtYnYyW8iSDXdqQCbf2iKmyLPMKLVvQ",
  "key9": "65CoxBr7BqeewJavh9A8Ls5CFCzzb3JXMGg7YKp3bQvhnTMeCgQaD7Qyu5c5fqFE5i6Cbse3MoQrf1zZ8wjxW8d1",
  "key10": "bgZMqeza4v85avEAfY2yt3Vxh5m3qPo6zoDTHwv1T9QzNvespsR3fmcn2UVgvgNksFuweMgLxBuVb4PpAvu5uqn",
  "key11": "4yYLciDTqfZXoeS2EegpvUs216tvjN2cvyVnj4n2PAdDbmh1XNSCRCeEZyaJn8RWbDTksDaUyvMiFNaCpKSuSdvZ",
  "key12": "2djVu6aqoeTaJp98tC4XVcT8Aj5aeePs7VXvPQm6N1JzngNZ33Hq97YfjfoKoHHXRcQGyepXAiycYdLjnPmajtx",
  "key13": "b6wDMKjWtkekMqkHW4o48v2ZR6ybnkaBRNGPVWjFwC2krseZnXQm3eiemSSngerBYNphAUW9pWHQd6Ck8eGSP9n",
  "key14": "wHeT4hVxUyNnkek21WGX5LTB1HXCckBD73KCi4HWHcFYEKi1m5Jgz6sANpnjA59zskzahjkz92ieZn8vo7soGzP",
  "key15": "5YymMPLBabL7kUa9gWrCb3c7pixrjGyLifreyfbcEg8YnYXHpHGSZdfh45zFhb6bXUGjDfBFemgLkiU3pyWicj6T",
  "key16": "7k81eiXmV89gXqsZyw9rfs8Hudjx2vJkQ3QZsEv3ESKtKuBeyuzeP4H1MNQUqrfLBrLZ6eciMVVzouZG9WAnrGu",
  "key17": "66w7vaKDzAJRF3gduwdBT87odzDzqNG683BQfcZwCuVNuY9t6kPwtCoocvZucQ1jcBLeFn2AF3cLSecpo9c4VC3k",
  "key18": "2vUJmAjdnwdyRt2uAx2txFrsu2Kp76qsi64YH567h9hoGVf8o9QrKYeb5YbsteU3sdh38hc48BrRwMh82DKXcEUF",
  "key19": "65sepDCX5UFGDyjpfK99GUKcZVMaLRd6maPV1e8oeFvoDbvCKoKSJTJc6WP3zCvnHHsHWZg5KV4woqtp9p6CKEgU",
  "key20": "H7NYAGPvFBqzsNTpYkzTb1UqzYRPhc8C15qqMTrGQokVNqHC5Hjio358R9sXHsExvtgL5gkpcubRXEMwKV9aZ4D",
  "key21": "3VxfaWTVKb6ETnYXWT4CAaSJ7ThL3dVoZTL5igDFR6d5z74wDve9DdMcoumHz6MEJcrHcMFQcJVzrhY7eGzVbDWu",
  "key22": "2z6aZ2uNSYEop3bbCi4eDPKKNk7AQYJimAK5ruWWV6tRMMzD9qrnZDGFvzZJ7S7EqKrqVTCtjQfXe1CvmNVR8nAf",
  "key23": "3wbiheW7iQYShNt7Vytk4uLiQ9Ub3wph6edt5eNiRDjQK2TbdNfhX1WKwbbahV6Vowrdp14MCwrAE5oSaTwUC1rZ",
  "key24": "7GX5yXLbTMprjTQ3BCDfnFojr2Ud3Nr5qr9RJoiMNsYHev1BgNH9etvpEhdR823dJt7LWX91sNvwoCjD6UAWKV8",
  "key25": "35TGzRAqB76WJmUtS5HSW7B6CnpjbLZAiGUucx1QnWkYy1D7gdSsEyj8geVzHBY2TYEHhMq8DEa2tzN6ENHJWPC4",
  "key26": "3nWgcGoBCMGgZqdW19KowfHjPNpwNTTvTnzZP7N2ViipfLAPtqEe8uUzfcGSdy9bKQ7Pjfn5Wsz2PBmu5LjYqKfC",
  "key27": "QvXQS64nbK87LArvUQrYs6Rb1qYxaQ8y3PfXFou998GhYKSHYR2gQ7yJLcCd1bU77ATmRPuHTtKsh6scewSgbBp",
  "key28": "4s7Dm5cSnBcPv296CmZfsU7WvPnUKhZ2gu44wabWGuTHwGwXTmVdnTzoGERe8vUCbHQWfjmw2rxRvnFZH3CjC8xG",
  "key29": "2ATuE1ZK7sA9Basnvg8xDkeucqZSbmYX4d6F6Ws4aoB2LrqdZUFaxuKBGToguP2USpKEyCWFH3wn3RXJ4vCigN19",
  "key30": "2JC5nkVzXyyLnmV5f8CHkXzCEkkzSrMEgTp6BLtQdc7cQTRvN1xKp2FU4mjcz4je1hQA7VDhhDXzaZNddw39ChZE",
  "key31": "2o1RHkYqoBoPA7xqF4qycfi9EpSHVYgwvPvT6Us6BnNrdFpbsEZCQKxnq6agzfbWff3UUHwcyrruJjCLHxcUqtzh",
  "key32": "3d1ywQn9dzVZMRdoB6Ydj5MqrAGQW5h8mjNrDgFx2beparMnDHd8H8Xj98epPUrxgEoMGVUz2PTpPYgqMtuB1HeC",
  "key33": "4RdmYS8LfZbUkeVDvZgcbchRhpKSqkRRLLCDbRofcHFDy5M8LTA47sw8YyzbyGhp7rotFu8CMokbyWXGZcx5jNS6",
  "key34": "3HMsYcAxKfcP3FF7XtdGMGHzdffj2LqqX9hjMPk3J765Da1eH3YZhL98SqVviwef9nus3Kf9WbPUjzUSWGtWdGfs"
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
