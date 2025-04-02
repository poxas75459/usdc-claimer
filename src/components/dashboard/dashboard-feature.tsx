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
    "3mk2n5HnTA6cgE1CwkXrABG1kV72xsQ2Wuvgukejd5TiAqAZNmo63ZbkJhk9sDBUtJ8EHneVP8V7jUrphXutVM4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTHg8JZjsx32Mo2fjLLZMReM7mNpvDWjmRNd9J9qC66SCEexojZfKrMJT6MTjnnhBbeekogtJfsj8SGbkqg1BFU",
  "key1": "3Hp5okP5phcwns9mDvGnZ35cyvshpK7KzKp6F6pjdUe5qChwqTM2ZVWfYzr44X43nS5DPQqhcWRSssc4qsRjN6Dr",
  "key2": "5Dk9gHQtDZK33gN22jBeCzf6VwTajkPK8KwGo9FFV9EG2XXExnyWvxQcBF9ZUcvTHt1H12s13U5r6trUok6Jjr4C",
  "key3": "3Aw5ywf7EtsF8L9i2tZfJNPY9s77SPqCu8ZxFkLd3H15aUTa2hn1isAtP9BnBtjcbU7evtWzggatWaRe8DfVfnqC",
  "key4": "tiKDQsczMiosJGwL9dAReufj8WNb8Rz69hjESxSKQKkp2Q6wETzxVVVQ7BSF9nCfzw9KK2oXsYZMcd7taUXbu8U",
  "key5": "3nCoYrCcy1AWEfbQtWMaMe1bnDeLFqp9ixafEibkvL9rq52q1zNYBMi6rLKzD232jr8fpPs2FLmVELDQ7n3DCXRV",
  "key6": "3CrWuGCPkkLbeMKywS18nBSknFnP1LmDz6xS3FRip7EPF6GRqAZ9prvDn1HzA6JnXSPpqaL4Ndk4o2yxqorTBQZ6",
  "key7": "41U2BsjCewCGYTKXWRMN2jfpoPbCn8evAhKmTenQqnXi6UX3cED2BAuasrMiv76dVA6HAhQuNDHTB9Xfjksgp6eR",
  "key8": "5WNejrmqD9KwUcJ9vg5ak6qM5m8T8fG8N8Fnpfv6gVMrTUHWGBJdvCcmMDUVW5azur3vm77KnppHT82aeCKcz7ce",
  "key9": "5T2yJoCvCGtkxFeFc1gqjomvyADvCYy5LtBgE6utoFMvR4vF8KYLnEVtHRX1e2zAxsj4iVuch6V2KhghpYgVEyj",
  "key10": "KdaQPTo87G5QR4vCLn6uHgcsPyyTSf3HHEBxTL3NBWvYzNQcXdSnx585snFeijysJgj2MMa5jxLmbvN8CPQQ8vA",
  "key11": "5EDRiQ3yweqrJJB5kjpPzPxkCEftKUv9qNV6PdeprwFbVkxek814XLd1tsBNod3osf9j1ZgzxPjquqPCfXe5SjSs",
  "key12": "3WacU8aV1R7bfGXe8suTRZBP7uXuVPphDKid7cbDvAWYgtQswcZGTisiRfo2PcPxwuwqQxGCt8VLY5tD9sUbkALa",
  "key13": "2BsAQUY1VBLpFER62EgtGmDsfafdHj4BgwCTc7Asgkhz6fhD73iyNVtTHENiNgcMjLi6UMhPr7w4ZEmXRsun7bQL",
  "key14": "4YyhA2bvwU5DVndsGVQG37w6c6ZvmhQyTQCP1jN8tSjYCnmj84VSCKApnESHnmUntgncDxHF3FEChVJEr6T22iVX",
  "key15": "5uPUvKTgEzNgDHw2evgWZtfCU6eWxeWPC9y3ahWF8DXwDr2LVQy1vX9FUdBWXK3Scq1qMPw5aKabE22SEhf3YvjG",
  "key16": "4k8siDYzMXAor6qcrzH1NxEZKhsfAbLJwRkbdJ4gLLxYN7KoW4MwXeCb1yuSXiGv95jTM6ahkV4jkUnPC1W3upqk",
  "key17": "5pu57b3tpJGNkBSXPvFkMPw5VntuSthPJyvLLp9DBjuofAde46pUzNDcotEPnYFwsy8vfPL5mhTGY4juuLDyje8U",
  "key18": "5nXQ2TrTWrnBQ5qYJ6hDTqCr939DUW2YQB6CQSvb66eZH3zgtXXgXEYXbu5VXR3Q5YsXX6THq2aZhAZ1FZPpkrb8",
  "key19": "4f3btdUgk4ztKbwaQcmirJua2kQFRUKZgg8qasHueVEHnHuZXxkrQMoqBxktoCXnnj3c2CcJEfMPsVJRKtsag48r",
  "key20": "66KEeDqQAyTD1VMbPHAjctDLF895rsC5rygTi88qVADtcE7jijuEouJcZAk9npBr95RyFh1i7e63GyqymUWXiQsG",
  "key21": "4zTjJYuBCqNnDQLr5pwg1jQtMgkrvaZbRnW4ipQqVoV86nFCGGakDr4o5qMjKC7f23zyfMkAP3dVLKuY393cedcb",
  "key22": "3aYevC5FrckKFkphDp3BPzz2z7SDUnbDrUksjVrwZDWscbiCfwkUzsR61aoXh53Nzu9Lt6uba61biJ7CqFoVCPkW",
  "key23": "3tmQQwniMmub5ZbBTGbRoDQuq7mWVcYUst1oxC3BinibJTC4Kk2e9sqGa5P68bCHbCtBcRqWxfzGXp6uWoWCSCpg",
  "key24": "5pesketxYEnXJescHwHbQYtvMvXQqTfQGSGPuMu7Ffk3nHz6hVvPtE8D2XPbsDpoBQ9bfTa8jTFg4WeAr5srzCAj",
  "key25": "4xRNsHMKT9atEQFM8j5drHQmKbpuUeEEyjGYHC9B2ES9AYtoUNQWBFFEXWcMdLFCQ9SS3MgxvUXab6v5xsLmPa9R",
  "key26": "3edWSS3FzEF7NWxYtWPcyRTUkzR3L2Xw8WJmUJTz5pf1HKGqTgSZwxyfDTvauTnbAeiQT3SZnu2N1JfP7ifLqcgG",
  "key27": "RtPzHcDz4mJfg3scpMV4aYQHdJK784svaSPr7HHhdohuLm7BscYXdaZYKkmDMT3Eq3hm9UxymH25yvH6Y1bLn3K",
  "key28": "5LgF6HBEtWEdsjvHrVLX9dzNd6PzuGd5U6YDaPsGHVodr9YxCfn2cSha8y29GQKVGHRT42tcnL5KDcNEWn3cwQns",
  "key29": "3oTUpK5msX5HwM6gNLxjLSwN1mdsJ1JaReDJhhdry3eHmqW2KJCBpdG3DRawXD6E4gRRLLftZLSkwzNd9EdbG1Ak",
  "key30": "PHXWSBhhEX2xgaisTVhD1hscSp7FJ65mwt7KFL1D6yBJgxTNGMAHcZXvWVyYuYHKfiY1vKkVpTzFvS4vJqMHFta",
  "key31": "bQCmjhcsBAhyevrKbMsT1ca58u5v8SkoSN3ujJ48UcuH4PKCks1frSJ4EcoLYCP4hctz6k2SdzFVjbvuS1cTyvS",
  "key32": "24fj8u9NBehPwzwesTxTxacsmBQy5mHAzoaNchMvL1sgs2a3XoX4vqpfnhP5eTj4g2zn5whqkXd6naDxCHQjEUij",
  "key33": "54XU8s2hKyrbP84Wow9XroDD4NSNqJyDd2uZceiHMzsnVcG38VYyLNiBwWBxQ3SwYKoUvKqj2GYhypggTNMre14H",
  "key34": "59pFubHxJYbGCC7GvPBBU6quDtmZBjsKmfWBuLnQJPUun9e8vQF6ug2rM8At9GTLYhPDMSbcdvQkvvEScPiznTCZ",
  "key35": "2HsLTBQntjXhziYxjdEc4zwVKy3mW4Rz5fHwufaK6HeUTEtsEJ2xcQh7UaSG6gz3PJJHhZPXzYCQahB1xvGp5K92",
  "key36": "5WtimkCHyqe9QXVeKTEWQ6EQFTiYYzWEaJSq8Gm1wZ9NtL6zrHKbbWRykUXRSghYV9J1vF8bv81BLRxAAwKtQapN",
  "key37": "2rHqWJSAVh7PgotnZfHxUZfK8ibNM5fBVgQGFuRqDBwW2uV8iyNTeyMhLkdCVQEoe1nY9c1i4oyuEMYKsB9D35tY",
  "key38": "3X2AFXkfRhnf8SVaTbVvjMKAYEHifakb8zexy4QqTsasjunXuRo7MFkjDxLred1aK8smyeP9GwCWWRm4PngJf7Fw",
  "key39": "ki6QV7MpmMvg3yzp6FWrajCcJfkQeArTtV6xaDU93swLAxvccm1612DKjFSCpYLTvRm19tyLdVpugyCFn5vivpQ",
  "key40": "2BhVM4kk1vHoacoaMYy1jZ7gR92XcacbkjExodUajo6i438HURFBJkQpB7hJ7ByypSxt4Mp1QQyqeVjcNvojFA1d",
  "key41": "5N2eiH7UVzkfDxMwMN5ZcFbZgGSxURgKTGmMbtXU6r5ubs2a3ANzM5Gi3kfEgHids6G5H4MH5E2dR23n8gKqBtEd",
  "key42": "3YgycVvLzieR2dJTjuwiFoKZLSFSkE5xZYusrBB3PSPpgiYGSXwuDrQx6gnokxN4UgnGwrBcJqCWo9CgunJ9YFqR",
  "key43": "584dhzcLujd396FZHRi6wGsojGUUvHq8HoJ27KddTRUA9bH23k3zEMPYoAXtyDWei4qHx9w8QVU1k3hGZt8Afpa3"
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
