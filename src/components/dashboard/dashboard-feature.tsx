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
    "4aFbkzeqHfzoX533TU44oW5L7GRiUxNmhMdzsRjq1u5fdrwPEfBc1JWu76ZvkfYaaaVNaUT29ZWg69Piq3Sdbekz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7X3mXmo9XwvpXNdFg3uS4CzMG6AMRgCkoskCdewk8Rnfgjst9Sd1UxT7dKLM4Zi1wKtq7ys1NPRZfm3WVis2UJ9",
  "key1": "2AGNkGvx5gkwWMv1ybYwa1276nRMNF5RxqxR6mSh1HeU5sSdF9iBwQexwE2d8EoEhsgqHKfCLFwidofx24SzrMLY",
  "key2": "3kFcB3pwaV7JaZ1uTqke8FSvu5av1DQ5a3A4aRXDsRBuFm8ZFGXJdycQbWJGHMCBtKpiUtgpx2RykzrYsYSHni1Y",
  "key3": "3xpmDdpSy4Eua5pH5qifTreZwfabbDR2bHn96q337GNk1t3LeZANn6iD3RYWvuox8fHmngCLzBmKVMoQu8kBmCUK",
  "key4": "5HjtektbjXzhjLTRuvWarSEvbj8AJ4Q3KHVhwE9Ccu4F2FKtVCVfomESGf5DuL3apCBjBdxBaaai5bVq7otRde13",
  "key5": "U9Kh6E9tf8JVEhhbAZWUo48GFUYoFPJNgsj54WsZFoQWcNzdrj4b8ZvhTAU1LfvhtM1kgptjVV36qPJwzhp78Zh",
  "key6": "43tj5Hq31pMwLSdBoczusFwPGRDdG4PU9ketKvN1VgafrEHrrVLH3zoaVUz9j9xT1Sf3FhgLCwogr7mt4GXCsk9K",
  "key7": "3CCBUDaARRrAUobUZDY154Dhkm3jMQSddq1RCnxTtqE1kj9MS2yvXSmcLev5einECfRokt3jLSwxdBgdQeqCeB5t",
  "key8": "EgWRD84FVZL94bqLCTL84dnQnxrcgtptnVE7a3rdbirfMjrX12B7CpppWsY3gW18uBoe2TQ7d5Rpa5SZXoaKUFJ",
  "key9": "5QthdcAJkw68KRTpGLmgSXUj4kwF75WP4RPBrFkUpHrz6Y3PDQxHQCXF4Un6DYFhykm9wjBDPr14yBRTM2JiFrtz",
  "key10": "5qextQT3jdAih419jxU8NNfVc9VDBpJvZcsHzAfFnEzRpBz94qTS5MCUmGmYZSUf2u6WPnAACKer3c2nHvgL8A6h",
  "key11": "31ghoEjYBUPNNjPEr5QA6spLKNh8GDgdpGj6zQVhjQydv75fca57iZX1PEiqSQWQzLovqM5wevf7UBuPRsstyGVH",
  "key12": "5X6G9Uo3XC2wtfX5cEFZAcjd6ooqNPD14pZ9cVdmJX9CnJSkzn85jCF6Nq7pQe5u2YrMiRMTq75JeZ78c91CqvwS",
  "key13": "5NX9EKV1m8VQhJMo7xM6NUwHctKY9cM9xdQKmARWcAM3Rsf1Xv8k5GeE12sTKBxSjSCh4B9ti2YM4GU4QcniYHLX",
  "key14": "jpVqxStYh2WRtojKcDYz6e3fHUG3EKwxiCk5S27UMBPURvpXH3P63uQsdCD8qaNq4JGfJsGTi8Q6hhYkYRW3Emi",
  "key15": "4W4KaXGGzHZ5zci5sKBUgt5GJge8rLLNk5PczAhQDWBS4bVavpq321RdkJFPeirerTtBSya8Kcpc5iW2qZYHMpjg",
  "key16": "3TDTXwRdaWu3tNTTVx6BSXpNDMmQLb4gUatyPAgQVSKKgVPVnMCxemgP95MJ9orzcNkGRe3zRZnYvb5b8Uw9tsR5",
  "key17": "4bxuv43qGpkCogY6brwRPdWBfpaDsPKA8XEB9qz63ypNcDhVvxuZeyAL8diLGXV1GYpDRBfvPkA7P9aJ6Whyuf2q",
  "key18": "p2T1tpGixE2oKVXNDR4Cm3MHfvGMhRYZuUK63JXnLgHjJGMaTHrJXc1nVeqw8qcmzgH4NaKW3viHpyuBaDueKe5",
  "key19": "2J5r1M1TbLJLDrLY1wVu5AZRgGwrLzsv1qTCpD8Hr1cDir9rH2LAeG2x54oGijN8s6owTkeXaWdgZvfZq6sRYaYb",
  "key20": "4JQ2h8LQ3XLXXCttKkKdJHA9kk8Pnw1htoyLD9M1oaADPEp5GoDNCjB7nAEAT7D56FkpVGVc9UJKYsPKjcVp2W4K",
  "key21": "3H1txMFJ7BLUY4f4KRcZwJvQhXhvDHtFATZMASQKoQod7rS1xdWXfe1rfSjfkzcT6tJKsqTuRrdMHX4MGUZRXPFk",
  "key22": "p1gve9e4PcnxiGoBsGS9DiTnqaFBLo6YycrrPJwP28jNLMKxuaoF4rVibqJzvrGyBuEfsHrC646owxABcfgAmHr",
  "key23": "5zCCjmPQwz91hX9qnCtFubrmoBk5tmBokcqXvTrsyaZQ6LXyHFGZ4AuMZim7qHKEwo4kvKbreMutB8X8jWcZDay3",
  "key24": "5a5cJdPzKJ4Pziip3aNaPnnVJm43rbXNHj3JXa8btGCELxZz1nH4FbbPt67o2xb53Td48PVGgJNHtchKvfZjRNCk",
  "key25": "37SeQABpteDVFsJtYjzioykkZxMrmeLfB59vTzjZDK6cPehoUEDZpkLEJF37xnDmyA2QJpToiAS2aMJX7pVWqjeK",
  "key26": "2cDi9DLuYLu8VjiRJTYwFcmKJGaEYAzEpagbJ5vVZ54XJRkj6wsUhjNvcpvTwuuzv6Tk2RYm7bdA7UAMZn8u56T8"
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
