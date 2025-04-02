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
    "2r2bgUKzg5HegU2m4f6aC7iVyGJ7xccwGMDKQhSbALH3x8LFm9Bwtdp6TkyGWUXDh9X4ZifVuMuSHZDfT6r1Tj1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ct1RQZhtofkThzrXh6t1ZuRqEr3Carxj87zSgARPz9KEHF9jf3CDyV9B3EJmRmguDUp1jdoTDpqhSNtiGzYNuhk",
  "key1": "3BwE6ZXqwBpqJtLtPVZ9zDMzvdN7oWeeGLKuAUohaCTTpY2nX4q72Kvhzbtom7C8TaSH6kcEqM2eswqUoYedDUSS",
  "key2": "5ZZbUSakxLiXtrGs6Z2PhW6PmyqL1qALnQ4y4dhuyKvQKVFNY9N1XpGJQdgCNrUnH7SVk2rH1g9dA71jYmUfqSL6",
  "key3": "2fEZPWVLnECjjAmsdE8bghpksGFHQpqnpUQ6aCNWtXvEdKwa3fmxRWzT59kpMESKqye8Bd9788rDacdAq7jXmcMx",
  "key4": "5VjTRQXNFcxkfaeTYtVFMuaHDuGXjEb6unjxfneKr5XeKzSLsXVZhdGitxFhaZKPQAKLwp4vU3bP74vm9dCm8s4a",
  "key5": "5Nez4z3q8YtzwAhMP3rJVZuHz1bh7JDq1F7fjEztTVrQ76ot4kMpvJMJzjqQUaGDvRsDxjEmPgj18gJf5taVSux8",
  "key6": "5rBH8GV9fVxpXhD4pGRafC78LEJJHt98HDDjHaeVAkyE7bcUm7WdqSC7A4hrtQ1vmYjexVfvv5ZEd5C5rRmhcYWW",
  "key7": "4r7ZmcWGnyW48sfVXfFLnHGinLVqKCGzbNc6aJusKXcxhvbo86Sb7edkHRzHFGRLFWNnMidwVsdym18c3mr7WD1z",
  "key8": "4SR3U3xS1yk22jDELgGK3TaNm1rRiv8SSXcHQ1RFUnGVKCCu1Ggk9w5ahCMv9G6mcaj3RyqvfRAirgHzRNcGGWYt",
  "key9": "3BJrusopXRxiTFxy7ab9mASHzcjiCZ1KPdZv6iTqWCyiNLH9gv84o3iHxRWC1Vg3eLk5uXsXG2C2VU3oBAXtmTdn",
  "key10": "2mhMniRNFw8Hpvz7J1RYEQADhUu3g5Ydd6gx37Yrss6k4XN8EoriRF5ue2DEzLsAEEV7xbqtC5mRDwNCrzpEcuup",
  "key11": "5rafuuyJym6XNVmo1GobSJfPkVP1uzjdh96s8UTScX6hVbxP2pMUaCUUJBnoTNoqx4MS7GjKBpm4Ne5N8quq31Rp",
  "key12": "5nCu7NYnFh75dNeP4KNWFsiRfmjMXvcA5ozBdH1ap8yfKkTgoQfh544AEfSFq93mXgDttRhuDmC96EHZD5FxqB9a",
  "key13": "4NYrFCG6QvggJce2tRvXU7pxETg5at2BpghHAEWnhRJtC2YLrVswkx2oaBx2tofdMbFE4E63NmuVczVtr6hMSAwR",
  "key14": "4fqQmgZYGVit9gwFdVbTSmBLWxNhVzWe7VuYEmA3JUVMkXpBh2v6d52RJKkprSFfzrycKm61xcgpzeFEPa94pPN2",
  "key15": "66oayPTLbiKK4rcPzANmwKFyCVgM7tkrqyKZ9uS8HQdoJWXjAp1vJy3MJ1N8jBv23hyU2QXt3XiKgfCAYE3PrJ22",
  "key16": "2XUZgg1A5KVfYNDLDUYS7egTJJwZnujTAaz6mSn6uPp4TBFgsaetPEdGe12d6EBb5Mm7u4Lk1k8YtKD9KiLwpKCQ",
  "key17": "438DZY9rBZAK5fnrdQUgH18phhgBJBy1ynBoo9XWUXMzmY32W4WDiqJLHphS6kkMi4JvbN87cqZDQxjYpu3dJkcN",
  "key18": "42sf7MVtszDxnApLGBtRjWQu59kiwCnxbbvHhhLCMY7yH6fMtuTZAu3ahJQpxddpWM2dZmPuwKqaAsy7MPH2e8Dv",
  "key19": "5qQvcjqACtxTXxhtpbFQVqyQh4XRAWRYaddAC9xE318gZuNjUUpBJ2YwDQ6S6yda4vcJTdKbbNMNwQGoGsY4SD7g",
  "key20": "3gx7JhMaBhx5uG7kAvbb4cUaA5rbCRhJLBjRb66aHbVENDWKEumk2yUr8SmuZ1978VqAfszHqs9RpnspXU7fskJi",
  "key21": "4Km2LJHXebrBSzxf2nCnZ3Cue28UZ8qBfGA4TmeqEsJ7A559pau1q61nfsy16K9wxkY9EkNxmwmyzweBTGatmKaa",
  "key22": "3S9bu98kJ1SWjJhXfprJDagjKYeA1hhM63T1zqo1KW7YBAm9vMvLxzUsXzUpbTV39cBVQuJPboj4sobQSZJNnEhZ",
  "key23": "54VwE3LbqD8rY46iwhXVx7PLP1FA1DzFsBXNhYiNdg45vaPsRFEVyL5ADzg6483bAXmQaYZFXj4Sm1QZyZLkTHm5",
  "key24": "4unJqiyDKGDawBxc3e9QbffUS3cSnCTXE4h64sEcNUQipvjy1UWfBCZ2ULWJXUtsU16ps3TpD7CSaKzRQGc1Ejd7",
  "key25": "3VW68osqKZNMkGukdS4SjC3JhthTYzMmH6k72VJLsC7X23oDX1mjQhvvYrCzuwg7qhJPFZcbiUjCtxfPgiZE6DzP",
  "key26": "58zy5BLzwZNVfhQUsSssCEADxPNsdwF5sboveR2QFBuynEJ6G6SzfV4P4q7XiikPfxubp8GkbPpFFpBPxbLxfwGY",
  "key27": "5eKNMKkuBS9XL9wFWFBHxcSt5idHzJpoNiaQKV2bxkycVFeCuF1uQPhhtdNy1Q4kRvpXbqyku7RbSqgNGmAPivrn",
  "key28": "2vbrBtqxuRjp2yKuDtzVT7fDou9LxWt842wgNU9a74BKdMfF39KrA3uJsCKgfLCRgyB1P3LWV7PhCihUJPWptiDF",
  "key29": "4oReVAHKRaL4tSbTohBRqUCiKJCzX3hsSwPqSzeXLYWqnwXArf9BKzUeq5B5jRik4PHq5bxAyKXUjdxkkdTk86aw",
  "key30": "2G3tG1sbuxw8u3NKuHShXXNzgjzdN6qmPu1zx94ET5TW4maP4fS2uxpu6Ey4hz5sESSPxpViHWxLHXFSxye4DRuc",
  "key31": "555wcMsAAMoHUHL81hTVmfVxENtLoLFmHCBWH11iwKc48XDkamVoRdREHjvbYc5HzR5mUTVsJyg1g6E1rudxe4VB",
  "key32": "uWUdSsEZqLWnETZDm6jZaTSnb2Vb2FUAQFszQEUu4Tgj3B5r83mwbQyRdx3RroUb2NE8Ka8GCJmKvcYNsQQ55xF",
  "key33": "3oUTrmkAtLuv6aXCMsaTEXxdsx1VUK92B3zecxxnDL3obYqqtpKxQhXL5FykfCPxeLsV4whq8wgpFvn7WEL4cs1w",
  "key34": "5vmyCCRwgKEUadFKRi5BuMfjfqv3zW9d7Q3Ctii5ErnR9Y5xyCLrgVCzTTe9cMonTbdTuVSLX9U91s6DAU8Vh5gx",
  "key35": "67s5x8HKy85921PqrLuAVCYqUvTVMC5AZZqe6zhaUrKfenP56oKWnbFx4Q4CdMkn1V3mEfjB3oN5DjsK7pp7zmq",
  "key36": "2mzb9CryuMaUK7bvqoHvTpKnfa8PPVghN3uebL3yViVP97qvpQTBf2uWbGt2kVtUYbWHCTYn1t7eeaQCFGitZMtf"
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
