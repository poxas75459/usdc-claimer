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
    "3XK8TrCrPPvmEZPQ6UavqCdfUge19gky2nHZLUqHua1ukPGUNMY9vw4akTJxcHR6ekxrRMszLN7bRw562Y3NvUqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PmtcoLqFeUAtjtL7MEuQKAFziQXdVf1gjtQuB7EgRCdELeJQmpXMdLjAscbzsVWNhkTMwnVDGhPYvwFx94BMh8",
  "key1": "4QZC9UXZSf7dt9yrgFdB4ppXfbj5iaiKwwbdjtq3Mzb35xTyK32Vhm8JkpNaz2MZFySaCrd1QHjcyvSf1ATifMCv",
  "key2": "37JdoBpPTn2tEBge8Vtue77EK42wsJrUfhMgbb6rmNHWtTTxzqQk3DsBhWf2nCPWogrVxVdsSJTyNaia4sde1muQ",
  "key3": "2tS1147Z4x3nWqZyrECUjWGRgwBue1k6HsZiHPjpoEPCfCLmKY9AS7mgceDZxsNvLaqwdeVsnXaoHFurzsQtejAW",
  "key4": "5WjJTK95W3V5h5ARY3y9ouBwaYQVswNYmDqNj1SWgSDdm8YfXywM2Nw9XHAS9rp3CTgmARi9TzTJbQXsSwh6q19L",
  "key5": "3Tt7moo4KxDB7fB73mpf3HwdxqjxN8rao6kZb1taBMesK51Rkw6CMBxAxsjkNggFmz4bGxv7F1bG8DD6dAGirnVG",
  "key6": "2ZboVJZRPPatZ3NCTYg5iqpM5HKyVN9oCUxyvc6n1TQ49D9wvBFzdS43vJuV7QXeCfDjkCwYfSGUAHFZDAEAV2kA",
  "key7": "ZtRu6oKQPLriY1aKiVFK1LcaaYrHFdgno2nB7TS7jCwFh76RYfqWF1BbvSXkVpiQtk3V3Zgvaj7SS8ypk7ykhqw",
  "key8": "kqNTRuK4AsA2jGsgv9df26ezuDkqfDR1fBFk52Va395bnFNpNeAVLR9tr1ZQMAK3cBQZKYgwKtaBsgbR3SgFP6R",
  "key9": "5JhPV4XXxjWJZQW5sbxKaFr9BnLaEqRoQHZwuBEo5DwEWmcktbgr9kXS8u2HPMiogy6R492ug6dcajRRsDK5HZnt",
  "key10": "3xe4KKgrVUQJ96dLsAv5XqfRo7YBdHhtTaoBfc4FbNHqpxUJkrKKQvyCKc3RrthMJZvfcu2CazZyeVaoBQuLt4Ag",
  "key11": "5qEg6DGGXc4UXxdwTE9LjtNQDcWKuqxk44Lbkg6eAPnTaTpBRGFT9aT15YK9uCQfQj3aAnPJUCNaLZPXRVRAK5D4",
  "key12": "dPs1o8ZGF4SFaDBnTfUNZMcM3FnhuXBgkMT1kjvVbubwLgNQ2Z5jyBB3wgkaLo5beG46LrEiXGFJKH6r6cQMb3s",
  "key13": "27Ma5kGcJ2dkfNkaga5b29sNayoMWEGYKBgjfymLXDEQGGfgtV3oLhgu2edpUyMxNJBVQCu6VB9hJta6f4bkYXQ9",
  "key14": "5An1jqFANJej7fCU2tCk2zThvnfPNreMzFXKmZHUuYJYRL18j7Tdug9HepWqYNdd7Ec75GHREf3r3AEHrwU1vE9g",
  "key15": "4amPXCLhtfpkwefpzaAWSQc1oVeoi2WsPNoSRFcS115YDbAv3kFP4VKE4mZyK9d2jCF6fDXudN3r6omdvcP9Syt",
  "key16": "e8S1hCst42r1NxHzxAeaQ3LDfJ4yMFQDcqTDRvZKEHRKsEdmEFJz2gGCwVYxqZHZQjd2jCHzxpMDn99z9gRFmQc",
  "key17": "5MskxjRgH1VcXRqcrkggfAAKucFuPZGkKEsoqL3xQBpGErfyXb91X96ktLyZg9H51HSifqXcZX3mCTW6kD2KZQew",
  "key18": "4rgrHkbFY3Tr9u8WFkrwSfT6gcoYUhSNKmCFD2dTc3pKXbTTnBogpPNS6MABhniNKRWzvid4J3PrRS3AgvUwhMo9",
  "key19": "2ezqSq6m11LZZnG2S5CCj2jrEAKg3x1Lqcc9LvbX1VmKWkuwcddV5Jtd8PVTjq5dP2Kz4TMUKrVELpAFxUKMqhij",
  "key20": "5YVX5tXp2nGMzLEGu5tsxmw8fAW7uy5ATLSzXBXdAQwAcfi1BUEGv4HPqF8hjaNgJPYmF2CE6ku4hJegkkrXaatk",
  "key21": "j6wqq1kghLjsnzUMt4w7vKuCiaggdER8Vurx1UC9FJLfwQt2fFXBqTiaCFrGYMNoaD11cajAqsK2ySwqrVL7U8e",
  "key22": "2XRCURh4CQ37fS3mcHTkFzXPZgGo9TEvUp4DkfZMzJtjMmtC7rWoxr4uAnJ6RAN4dGSdPxeTcveA8FPe1vyM36hU",
  "key23": "65zBhqZtBKd9MayurMHVG6h36CE68ekruoWGhmJUikMBLrEUHS4i6XD1xJezjtFKQTXKJ4QiHRuY19NYwW4DRnBV",
  "key24": "1GPUsBsxV8vjhzsEM6wGXcJ6HR51ro9wv2xRrWWT5rvur4JrrbQXwP834CoqZmZavG5Epn4RjAeH2VbphfygVuy",
  "key25": "3LLev9Vu6VyUt929V8s3siJTypUSrUc2oBw4xBCzHBD93TKEkRxukrgKMFas2kVgayXQey1SEh6sKY8ryjmETQCz",
  "key26": "67gJ8iBAh3YuyqthE7YnQm9hLxEo3RKRHrsRHX4f8aEdBLxPYYRTTyUGZ4CbEwigkF3Et1YD89CUt8wDZBqskpyg",
  "key27": "3mXq86nYjab66i6wobbhVKA1YQ7Yi6bMN5xqFRQQeP9EjnLP1SPDLkCxXh6wxjUkX9pQg9xJkofdMqoVqwMcASEG"
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
