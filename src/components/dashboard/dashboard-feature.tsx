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
    "2PLYtbGCwCeksZCmG6K9zjkAJdb4fy62c51gXhcXCm11DiWrccAS6dXTzoq9Se8frvmAD8W2ypBFDuibB4B96uyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eak29n5E7cjwpdW9azhehWjv2dfVpXBQsWo6wwMdBWoLGmLSCx75ZLEv8qWj2T99FY4pyjSpfeBWB4aLJ7Vivn9",
  "key1": "a6pqj5cv3sShnG8pReKt69XeYuoT7N4JjbpC537FzYCH6oKoa9wMzTxmdg8EDmJeWC4B7rvRP3gWQjvCw1syKVf",
  "key2": "4b6h5gB1h4AMV2d827rY942G6AsmfFgPrfusfaYE1crM1Kdpxs7YHkrJbXkthkfXf5pRNpKJWSfGEoWsKjUjRFEH",
  "key3": "4WbDWdZxu3SJWYeyG9FPeL8fQ5mNhTSVMed7PNGLrqpEcXvjQe4qY24TAH5AGTPMay7QMThH9n5ofANun12Axbv5",
  "key4": "2MTUKC2jf1ecc6Kou1qxeLCcf8bLB4KL9k8rvyorTRTPY4sjyzCrZfdNWi3JDhTpAanYWX9FGpspoGfnfmhSWV7i",
  "key5": "4dExEWDahuguvnLtQ6k3BgEoV96B9bb7ENVG6wnaSYkragzEgFWgfDSEw9guv293K6Gk3pvUUBy6vuCYSFhwPabk",
  "key6": "2YDH6AdoXxJ83aZAkWHa1krLzHu6x9HPKT3xYYQFustcGnRAPFdMJepfZayjsWZ1SvkbomLz2fsTE15jqizTKZmV",
  "key7": "4YGJTxtWhLLMqTpD7xH1f6eZTV3a1fQz1DZ6Sd8kQWgjx37b8MpvoKkcSR6eLVV2gJeCPhCtqAwAr7LBeqZ4TmiL",
  "key8": "kdvTu8fMhmJC5ZFqzQsnP5ZurEiCmAauKLix7x67rGq9vQZaEC9rMdR6CzFzmmzoRc43uYUhRAoMzkZ4GtfissH",
  "key9": "2cmCjvLB5sCYoXV3R2HFCKua6abtafAgUpNhZGPZgnxmvwnLmLjbHtZTTqVfqdEmCfp6uHNDuY5rgfYkZkS8SWTC",
  "key10": "3Sy931DDZrkjSFFKkgDG9UAHjvNhvf7ogwMYGiKK1HEEao1mWwFgwQhMWtd6JadpwjwaG8ynjuep1jWgQhGm38Hs",
  "key11": "3UmBCHUx32R9dmsf21RfSJyXffrTk6xJFyp6XqcFWfejjiBVhuVVdTfAKQZAD4yPf8ox4z6E2kEL58eaWEadV85S",
  "key12": "3EQFeZdYtb81YCxeA5X9yxZZ28jYFVWZfnEp1jfVyrGszQtEqTvvYktFetWx5E3RH7obtrmnDTSTs7p9LLtGzE17",
  "key13": "63qNXaXn3JMzts8LTv7FE9bKZdVPvzabbRtyDRrjDSWNuQ12HGY2wRqJAV1Zau26WSECYAQ4gxCevkU63nbBH6Xo",
  "key14": "2Ebb9p6BMRYYVAX6GwMuqBobp5gE5ojDyWsej52o1Q1nMATJBa59pg2jWfTbxRfJt7uQ7JUhGtWTZbpcnYds913",
  "key15": "4FDXXmaxKxAduznsyphRd7vbZL8iMSJSPggP3XSvokL18BKMB1pGQ9jSjxAky5ncxZfRzrWiEftEED6pmP6mtPxy",
  "key16": "4UjrAUKEm5cbBuxsuFbBgw1t96KKDv8prsQoKRWXNnaJTfhpe9aFz8L8TcVMqftkv2Ws8YQ6o3Ej2GVZuuNSgo5q",
  "key17": "3LjfXm5cKjSWbqcEdELDNLBRLfvPTPzsLRtQc5LNt8UrBjCVEabCVwmKU7NHPcpeWChJqnB682P5dVTazUd1zCHC",
  "key18": "5fNQ6z5FtsbmytEsGUfGQQfz6JJVjp9Mte1vuKhH3jo2EaETXUQFnD2AA1mu2z6zHUNepvWgQDKWioNPmf7jVMce",
  "key19": "g74ASw6Sg9ESLESPMEmh8Jds9T9FP8aJWjqAQnTZnHWzCnHyt2Lw3pEiYoFoCyV984zxWqLTTShfSmNrwHcsCJG",
  "key20": "2ChEjWR7BDbkAkNKcwPUbeMdAnQDjMsuwFqN1AbdJzkLzwoLUtKTZavkJtLY6SwsBgLm1XDZKX33Cf3iok99LwFG",
  "key21": "5wcvCZsfd2sf89AJCe9Luurzv6cBoDPxCn7qATAPUmRSJXxznsjZpb4HxrdXkXWA7vH7paYUjC75bB2vg8dTQyyD",
  "key22": "3yjcv4tKi2PR5eCJH7BRxmJ7VeQtEtCi45SHhRPYxsAjDjRrNXHa8zsfUHnoQVe4kfGqD2fmg5rTdwLhNkuBLDwG",
  "key23": "2yD8Rgbvv1229MC6zpFTty6e4mdBDko2pEWHdgmhZsSKTX5pzXcyaM9QAKqTKvscRDB8SWRVJ76fXWGD83uMKego",
  "key24": "DNxnXuEpkPkBLT2BwjHWD4TkbiDPoNWfARhFDD1gaqv14RUmQbYt5ry3gjYgiZ94xhqjKxMqJp6CkeK5dua4nc6",
  "key25": "3tVxkPgQ9ukB3ZhgAXfr5tuPcW77bCymVn3x4MH1gspw1jT5MmMk3DsfCbpbC4Yvp4k6qiAbQJaR72FzShqb44T3",
  "key26": "2y5FvborCdNWxbEjV3JwQxvj9SPh2zhNipdbX5FMgSPW7NbX4gaggpaVmpB5LcsULAFDS6gmZjhfVCE3CfHvK79x",
  "key27": "4uk4yStbg5Vxhac2wbnYR5ZMVjeakXrRa7dxSZJJNp6hjMTjLA1HNv3UBfkWkkXTPxjZ42cEiLDBYqp2cLqBnDmY",
  "key28": "5mHP4zN5e9FP4vifuVbXXgZKK5oQxYEAFgC5PQpjy4VRx9shaszfi9qZvoXHS2LAcDTgkhVuTidhszNuxNSUNLob",
  "key29": "3CH2puqWK6zcU13PCbed1yoHVNrVYU3J7gfKo4LBKiLhdzrLR4jFEFTgs3Vo2dV5uFFpHYRfcYFo7cds1hBCxnLo",
  "key30": "3F8MWGhTeXHipiCBN7JUXmFCqGcfcxe1iXZXzyNutNhbJKWADu5CntXKBFUURdWWg6cQyRrZVDKmwkGpz3z8R4q1",
  "key31": "2xtu9zf2oCU7Ac7MYYPvvyHm9vqCNiFWyqNRny9ckqWifCfdB6EgC96tVTDxsA3yaho4RJ6VaysWdZ177qyEPkar"
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
