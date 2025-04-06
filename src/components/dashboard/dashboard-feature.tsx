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
    "5dEdkpMAYvQo5veWpFdHdmdVSMZEddeCQUnXzC5L4LySgo1RdpqAv91rY6MAvV4y7bfidpoyrrcFRVtt2jEzAegQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1jothPpoPmjYZykghWiEVQHUNiziNksxZZmWRFP6wDQrKi6Ma4pKT7vtujE1d5JQsvZToSFKzt3ukHdKfQMcCP",
  "key1": "KqCfqQXsXbJsun9iyprrMeixnjGhfw5XYvownesQ6dECwBYn9HL2qBxgCucfM8ChtegQz3E4s8gmborJHKCRo6S",
  "key2": "5Q2Tk77BFq9Q9ZKRijDzeR8ujLQvhzxoUQFMAQHumghsdavMH8r7jQbcZwijJC8TXZg6WdExsygJZeB8mmyJPW3f",
  "key3": "2BHGHqXgAzYZeYM6yvW4aRqnwxMMqRsTEbqccxkgcDNNpS8hD2Sw7unm94QJvskxewXCEeApEd4VRrJDowQCUhGW",
  "key4": "41ELMWKjoYYATG4SVqj5wDRcSkqLmPLHfBBFjANev5YCfi6kATPj81isENrryFvajBTbaZUdnJQutnB9s2CNd26h",
  "key5": "4YZxDmQDhoYuRrfFuSmVJymdCMT99nY1gsSBLU4ZEMw5ucXj1xY1tcP1a94FCPMnJGW1n8mqSEgmgHaaUhyP73L7",
  "key6": "2YpdjWnj9SF3yWDh7h861Pe5sN3s2Kw7RM8iJyJYqoTaFshpK9QVeMqdm27Wgm2T1jVDLFRSwMPgFWaB9H8qv8rR",
  "key7": "DZn2HAkfSGWKe323iPNCUckupAL5XUtSnLzj3bxFq4g6CwjAmtPwzv7KKgPGoN5Df6dFCVRAoHTHtjUtk9zXRCM",
  "key8": "4zSraLVVo9vPGJqvLTijPWr3wZ1gZdgNGdm6RXijtNkf1jEHuRyFB5wz8YfxX2GhRK2RB8NFALftHM8K1GAnJWcM",
  "key9": "4knCGYGxYp784uvVbaneFcjGLrCX1BG9akrVy6JxekuajMSTzGoVW2yzsBq7oZJrMjW4hnbuBfnhtCoibBu7iJg5",
  "key10": "4KNdJeAj6ewaRAmXk4kimQAvUR3zp7Cxbvz5wr7mMuR22xKyGQvKWtwW3p3h6qt18S1hg4baMdZ5ooM8LMddxT1P",
  "key11": "5hsBcesXG8dRANeRZkCF7MSXiGhMhgL3y3TMG4fnwEQkm2UEjEseDhLuLjnPh8aXTuSKzFCjTBvzAdToEx8wqUHh",
  "key12": "4ikfyeZGKHdAvYnQrYS6E8hL7EHCXWfL5kek8ksDvyUcZruvG8kgae8SesAJM2ytYwe45pjKvv9wjJ736n1itS1m",
  "key13": "EP2f1ZeB2r52Rfanm5GwV471uJ1GsFyAr9YkhAJEfXZmJBbZh7ZsdTo1W1Lq3CKRAgHAY4CtAB4YtK4RbtNw4hv",
  "key14": "2kuwBUKoDKChy3CqUVd9FxawWyuPBQLLZHMT9VUGZoVyXGNWEPepCBsowwHciNN65DpnZyMKKEQfQBFnv3SugQE6",
  "key15": "2vRi7hvNqqLnGdtV2kG5bntKeqDuHjzW2Z7Wxy6Bbeq2A3fT1cQXfDMnhFqRSoxGCjfDXsNbW6dwCcYBq2dFP9tY",
  "key16": "3JqtYb4C8LqLWTuNGz6uHGH9BbX9BsTbwFYH8qocwFvHh8A4QQ4d2oKGDG7GCKMMZPzAshmoqmWbdAN3Hg4bHEQH",
  "key17": "5ZZ8Pvkt1Ux6C8ukA3ApGTKh9dh8JebGsd9SqhHUyySepTQiece9hJ7S8zWaQTVHkMzLAkmf7vTTBnYcecAoFhWy",
  "key18": "UCmRTjp29SDjD4HsssL56DqsWBSqrXcoj9XEej4N2sYLoC8rhYnfsz2bVcW8W4aghmTHJcMu93pYZrzyV9eE5Rx",
  "key19": "5rZWvTHt5Dc4ySUScTMF6wrYuFwKWBUs3DGCG9mxa2rL97fQCZuCb618mXbtha6nDYPEb4Hk1sHVce1AQHgRX4s5",
  "key20": "357SfGQHdASQztuD9qMQES3oZ3fCaDMMdfoa427sDLBpBwerbgaAxSx9coBJj3oihYAfqTUvz9GEcKRv85MauhkN",
  "key21": "229mXdShTPaDvoRHvvBwkqrqwfjGP8GPv3jZEhKL2qT8Lye6nroEAaMnXbMFRRHje8MwFtbTjJMMTwYkSwXzSBxL",
  "key22": "dGDdYWwJoTRCfwzs7VyUtr4DoCd3i1oCQDNNrQxGMcLxXdZ62hTJaFhWnZJFDHyWeKyQqxjozgKYDaH3JVzLjk6",
  "key23": "HbJZhQ5MowYt6ir9QJin3XBDsCproRzQ39gosu56yxRzkdK2uFSkgNv33xg9Gug6mqr9cUzEZN3BfmuLTsN5aSA",
  "key24": "5iWmD5N2P3wNf11CeGJGQzsE43ykH8n6KU7Wz34Yjy1vkGWH5MRrQabU5fqXxGPxvSDhZAgNbLWw5vfwZVTwL7Z",
  "key25": "2u4kdsLeFPR5vKYKHdgY9u7mJtBkTDsTgCdw3Gbjt12Y9uLoNEWQaC8sGWWxmhx4AEwKbkufuy5NqZkhYtEzUwPM",
  "key26": "519xeuMdYNp5BkT4wuJYyeJCRK626fVv2a8qwjvBx1Cq115PPYM2NfQJa5yqsckvfaFBpnxSY2fbY4wmK5dSR4PL",
  "key27": "3R83QFsFRQXkUvKxSCAuLgehAhJ6AeQgF3Rv2E9Kq9RKtjFUpwQdY9XtVxNqKj18Cy42ABHfEHS2iB1qHEhj1LeX",
  "key28": "Eo9pw672yFmXViHQ6RgEYt5svvWjMsRgiUwtcLHo4W3CA4cNYZmDs2US3wvqHCHX3ucGLTQPb7QFdSvHW8eKf9m",
  "key29": "3B91gRXWicEWksyQZZeocjTmkDT7PFmB7FwqDxESujSDvr5UECZvXof22UJV3ArNve2LY51iqEjFdTDB2r5mm4ey",
  "key30": "51GbtQk5pJ7sVr7fmtrN6FNVaSKQU5mLYNyUMpPfrpUJpfsmU9GV8kD8MUgAfeyBX2t5LbR79eF3SRPj6kn5WXC8"
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
