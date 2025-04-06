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
    "87Tvn2VQxQuhaC98msBfwUQRFuEyNB5XVaX5Y21cteu2RbwdgzHkM2GAUrCvppYnMobvamLayyCjCHQqPzy1j4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eV4Tqieymebb78CYgYubuZ1fxBRVEizK7imEzU6woXMeJEe4oJz4PyU1JFVJsu6GHz6ZvRFWeDaiYP7e5x2SjdN",
  "key1": "31W67F4NKDP8ZxqMH1n2KoHJ3r1ZM7nBJiNQEQzm7q4PTyQLiyMX6WmxSdjaTgUjiSBrNSS4Q4dojHgvGDmTjsEQ",
  "key2": "3A8X5NnPqq7G1qB9qwpKRMeWrCPDvapANkgjvkfGZaEjubckSDChcbRipefZZzph6fp6VcaqXJMccAW92FfZLQcb",
  "key3": "2smux3mbr4wMSXa2AT3k7WgDT9urCAJ8GDoumigq5TRa38ZqTzXf8395zeYZgb5wY5xRgFZCBZ3vfCyaGQ89uhwh",
  "key4": "67oUMWAYuubz1TtbhgG4nPhUuJXeq1hh6LB1j4FXiz26pgFCaZosWPeAyL1AQca9Kz8FeutDdMtGfcLPEg5m1dc5",
  "key5": "8Pz64N42ES8eHkaCDTafzpLhdw2kE3nnh6Jb1MtHGoXqHyuiqNWT14S3RKUVjaXaK9PgCnk1euxUAMfFnoy3Svx",
  "key6": "63gGoxHS6m1goRikcHEHLBWpmYhenyKqiJfm55zasMEBX9YtfdJPAsBDezPgjQiesicezhYYxc8cobFYi3FexuZN",
  "key7": "2nkRoAVv8LePRFqCoRMoqnrLVZdJwUKUN654Uf6tJFVoXm5xeCGDas69sbQgoSMueaXZrrFYzCfrmC1JfMS1Q8Kn",
  "key8": "4zauNrP6uEdVnzqYtmkthc3Je6azUKLHZG78XXCk4n1ta9oyMyfA8FzKYo9zG6YAZH7wLBZiabPiuGHim5WwLt3X",
  "key9": "1JziBA5xUmjg93b2N5tDHnDHGYroEHWZSmBVjdEiZT7eZyeaj4qMgn86WVfv54uvcyensrbwwZSG73AqX4SP1DZ",
  "key10": "ThYG9ng5ds35esGwqCP8rqqdBACsgvYLSHzfPNjkXYGWsR3juj1KggMaqTP1PfEaboQW5no28zaBBKUA9qv1opH",
  "key11": "5qBSQijEgs6wDHFMqKzRmnUSt6hBQGsw2g4MiYrf6BTKow1Z78FiwbG197cbFe2nji3h43ytoKLuvYeAQeVdgMZx",
  "key12": "5ct2dvRoCGeiopnUNvNpmzTn6FkGCrrWeH1Jvv24N4MnV7kZwKGoMLqGDiNcZ6JYFMk1DJq4TkNJz4sGY9CkiMB",
  "key13": "5iQBebtWqz3WUsZh56Rx4xifLHcfCSr4FuRd5rnpzgfL8YevTg6Wnt6EKnHkoU9dDcVCeGP5U8aQg4btDwPF5VNF",
  "key14": "2CTH2Rq9nVdWVYuJ5yU1kdTwnCRSfcdHVXALFmvVKmK2H8J8aGpJo7VrQPrAL8MQ1BQu1boPqQ3hmamxtF2tXvdF",
  "key15": "2jwtrG4LosXc2gDurV4r2pTy9jxLmN5XTSKyDDKEmGyFZcxk83dfc8k6TegX2zMXizCVU9mcunP93EcdL4LdVczZ",
  "key16": "2qUrqqfjVQwne44izy9gj6e8BMgbfrGG86Cq53imL1piLmi5R5YLFeKhFBvoX1CysW8Ta1eV2ycxGdsAcu2n9U1d",
  "key17": "3hVFbPkBshJRMu3R56LV13TdSFdCr1DCRe8mH2Xf3URugQM4RGFcfGR45DAPfDe7x7upCMax1rc7RMcDKmTT9pDD",
  "key18": "5Tb8d6cgCeDG9cwpBbvtHfgt5vPmNwTnapLW9Asm4QjggU9v1rcEsZtBJJo2RCBkwoBbuM5HJ6kQ6Da9DTgm1ud3",
  "key19": "5DXu9UyVFZKLPRR5N5xBf5zJZ7DpqePNxzZhHnrjYxPHG38NfUWEviCL3e2YTyPF7qRWRqg1KG6tzHXDoVQn7U4e",
  "key20": "2rKWYcrCPsVt2ZUEdbahkYEJ9nSzv8cxHXpKaLqzqHDNoBMB7jK9mbLHrDkrJXEjgbbkcDpKKqcj3TjnVhGES9HC",
  "key21": "52WD5ZDeFX8DFkRLgZjpVY9XKhk8ijA8BweCWnA1dBt2rKcc6fxYhUjM3FrzQjX9c22otDZ7Jbv5j8VJXCajCv3k",
  "key22": "i86mgUgmACMEvpgDLJ5c2dmJPiwQUzv7DUoFC5Lt1xDXyxRiaUxfqKnmZrJ8TJVX7hXjeNTDxVF5qi11zdY5Tax",
  "key23": "fV9nc3W9wC19bEwMtDpXW3SQuAWwUVvgSPQPKjLVzxZ7w4Y6D7duvoZzqxkEVd4FkSc2H2VXUJhXV7fNQrFApd2",
  "key24": "4oHfnbRDvWbJnzibnpMggQijj2fvF9YwPD5HkYWcLBSAAQVY14oJNp8HexN4fVh6nmmDAN8YKWnBfAJ7aU1W7kLV",
  "key25": "eUGE68j88EdAVRqhGZertoEkBFRp3x2tLb5ctLM8hsgYUVbfeskfEh8P3ufnkgEpwGy6F7rx8Qzt2gPi5RaU8ar",
  "key26": "CPe3ym9SRJu7vaiz7KuJBgSxzq2ugsokFE2jwHPeRK4tArETStQY7BSxbY9FvVrQGYHkQQxbbBxV8cSqPotaKZP",
  "key27": "2QcqriHwj78ZGjV5DhJSYBqhs7Fj7WZTmLX8E3GtxYkJJciPXmTjSdFnCfXP1wap6n5kz4JgkitkWfjTydBrKMzv"
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
