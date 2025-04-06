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
    "w7K1MjSuvhYWTUXXj91AM19f44AhCUydzazrDvfsWkkY3ctbj6wAAmkNffdGcDpnJHm1ZJ6d9pXFsuYEhnDuUbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sSQf2gJyRQ3eLm8R3ADDyRKfkM9pDXzQ2dXubaKDLbCiTe5UNoVmEtTaRTa2JJ4h9d4GSpFJfjdi1upHgAUmQh",
  "key1": "4L3EYPCaAjpdwF6adaKjxKg93ivrtjF2u6X48DJxV6zVKqfPV2nrqxPKPqAuTTf5wDb9T5Zxzxj7oCiqeot7CKWN",
  "key2": "51HJYTB3EQqCohQ6u99GAtEG4RZbWbX6byq1S5LVYfKB17ATiSHdH7N6Sm8W25UoyqdXfoiUkAoe5izf6e4vizR8",
  "key3": "ANJvQSv2rk3ccwwDi71XN1DPqad5ggzXpQenKSh1hrfzjnSfhsBEVCeF9ok3RbU9kyr7hLBcTJY7zEP2bdapdGx",
  "key4": "67CPLsgwzgKS3yj2LipASQhXDLnLsVreh6p3MAcRqWJCTp3Kt6E17rbBo7pg7245FY6oEheBYfpjiE3cS4YaKETk",
  "key5": "Wrkj1ubfcLV5eKeJa1Sy6sbMsg2ANVvxpwhtwczaggQU3csgH8iAADWpXQjZ6Hndu9U812wAYdqs2sJwWd22VKN",
  "key6": "5hN6UDLDTeEeYprGfTjmdH2fVAkH3f3Yt3pVcJX9EZaPh1zoQqUyoNG4L5mfn5h4xkhUMAjGcNVq4NptVcLMu8pi",
  "key7": "3nDFTvYtV1gXfJY3JaoCTwSoMTgf9o5RxtJdDJemxFw7btpiSQ2zBJBkLu3M2aKDjVd3pA2LDqLogYNtoFbgYPvE",
  "key8": "3S6WpCiq5brz3uFiatx62PUaR1bskUVw2qa4G53nEHpzSvEjKdZ9CTA4NnE72VoPzrvij7KbyHDEfPtVuEvsZ156",
  "key9": "3ktoSBo8NkKUzd7Y27pgYT2f5NjYHxGnNPty1wWwybAgemaSLaJgHMxN6utLw8tybJoyLgCugh2aSEPccfqupgZv",
  "key10": "3CXG5UUStqg61ycMVmoWoTguibwuMAn5JpYcmoS7wiSWGaPstN6AY8xvhSPZ7ZZddR1G32zGhwSbdk6i2aPPj1vW",
  "key11": "66htBfPXLfVPSByRj6rE5DWm9iSAaXjtwjvMok2BwW1uZzsQL44smiXGAkLXXcYfNGAt6xUXo3SKQ4bEZhK3kpnG",
  "key12": "2PBZssnqjKbGq1C3WkhCfgs75bAgTE46hPGzYuHxfAsu69ouPiQNbKEr8mXRnSeHXpBWokL61CgsMpeC4F2RB3SZ",
  "key13": "3DjQhQ58rnHhFBHS86tcWYEb6Lik5m6JdeiNMPsrLrWPxJZU5tSByp5c9QUNacQKtysS17xEru59edFZgmCdMBmC",
  "key14": "b82bCcMpj1Tu2hHYtYKWryTyDmJfhLH7Zyxz9VSRWa3df8EJiZKmFiVopoJTxGzqjPXWiLpESTKcqxiQGxjXz5Z",
  "key15": "4DJNSbNncJLc7JcDbKy7onheY4CMjHtJwLVzrarDVYBkkEJYzvYR9yFWqqbeScsSrC8E8jSKeVBCjDoVRP7j8WyM",
  "key16": "48yZZCYjNZBvDEXQhS1GzWD4EtTdoBiFr5b8iRBSEigJsHBEAFeCScnFzaW1vFJoKVJPqMhNZpXZNwH7kcdu7CDz",
  "key17": "2GUC7WfcUfoFGvfEKGR6seipyxynVzsq4wZZhMN2EWkkqjMzea7KWCWYCDQdJHXFAqKKNxtLPgGAsEQm1VotLZc6",
  "key18": "5R21qzT3Lf86792BKZ8DCMGWWrSZomAKSsSqmybyjD3cXFbxtkBM4LQao3pifHudQDrwZ8EvQnAoUZaFjewA7L9h",
  "key19": "5WKid6pvuvUTRoDdMqpgMSy6MyCMZNQfaUZJLTmQV3eJkSv8nAMTSaBvQVUyiHWmHbFtNPL3ygBqFaj9KvmEkChL",
  "key20": "24A1W12mzGVZmmgJNVg3fQMpYLAe7NUuoP6izaGqatFUmaivdTG7YY44sfC26D6K9n7CdhD1Tb4Q832rP5GMaiio",
  "key21": "5Wq19FcNLumSHZrGBj3caEpFYvaB5EhMg9yuxi8UvF8HHYWdxHpyvahNDjjiwt1Yc1d2UqTBV1bm8CNiEantNYMH",
  "key22": "3WLSEnajLdwk5KG6P2Pwa48v64TELMnFB7KKzNy4eUrHK7eYuY628yYL23AgETszwr7wkVT99oEbSLAof8PHFfew",
  "key23": "3NAsNQy2NMagj7NAb8ocFQZiVWcsj7sVZPpXDontg3QtnFdmUuDCoHJ7qGhP7FzyEuCyn27ARWgHHVqM7mqXmkXM",
  "key24": "41Y5BQEDPGSKoLZFNP5baKZT6U1kuCbtZhcb2kDpXrJrPUWksgpZWH2S7i2o6FpDg3RmXJam6P8VbTXfP5MhdLCn"
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
