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
    "2kvcnv569udSrxKJEV25xZu1e7j3kxxXhKVTzqraG6LixnWBSQhzHqbnRF2avTfJSSUgcRZab1ZdPysVsxGKLqBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCyrVHbeLxtgMNYijpqF1nTnUumBYzCiKUtYGaoM3rbHvseeWwUnmxW15DXW2dgVtsy95agnJaVkSrhFxnRDdTH",
  "key1": "3TeWN2fYiyV7iqWaNckpkQSJWPcyMAAUZKAYc8Yk97VdRGKMmRx2R13avQAXEBedvrkSZAG1rq9DqXtEWfzm5fjQ",
  "key2": "3eGrNCCkMQkmnocwQwTEWh6CGixHyAZvLUvzdz6WaprrJkTFjsQQGHnrCENS3YSH9oKG1UUTTRDsEE74nRpacdh3",
  "key3": "4vRRSBZnujg2ahUMUArc16uMnoQD46yccN6LqNmRKgLCcAvYiVQjmqC64EJVUay4sFYM5wAGKdXX7L9QDTvp6eQA",
  "key4": "PNgQwV7AxLpC8DHPGXc8MvuhdVuQLW8zvGQw8ePK6zD1GWKjetcPXFuPWXGfAR6Wvh7nmmoAN4NbeDaYuLzxkA4",
  "key5": "y38FJakJVvi4wzfhadkLw3WAWyKB6zXxHWycY5okcF5uLz3q53Nt9FarcQwnbuK9ckiKdnuxSBotnZ7h1J19dMh",
  "key6": "5GH2ta6qdUnfbAcG398dV3Kj5RUN55YWL6wpBSGB8nJiFQYHzL4wHoztHWWh5fSbgxHEXh1tMTGuJwioqhapdM8t",
  "key7": "PFiciF3wXRf6Vz8RZp9wFGu8TWm1xC9bET7W8wrsDGt4N6t8Ntd9q9a3EHBu1v2rKM41ZxTG4fTtytxdZRchdsw",
  "key8": "5ZLBZ2prw5XxGnqFuVDcLHMFyQ9JZ8czaHQLFevdKCDzfAxsCdPhzXNxYmugYS2EJrqNbVKtvkZmFK9TsHnukiwU",
  "key9": "TNxR77C2N1inKAa4dAnNcUpoRsVksCNWqbjK1gQmigiAmjKDyz1bic3D39wdbZR1L2vaMK7GLjngBLUFQxSGSgT",
  "key10": "4aEJbkFooYNcZ5goXHh2iT7dmodcSmZBxnGcGuCWMhLsjWTdG7CqHCTSXSwATPRYos9JSsUhMjcwnzQe2tTucMuD",
  "key11": "DM8u58LMfM9HZPorYQpfDPmNEGgxb52GNDhTrvPHFNH3y1crM6sx7xm3YVVy5ok1U6soi663zJSHYW1mFGfZZ5M",
  "key12": "5gSjzAgMVSdGgz7cdGeBLjPyfdH25Y29iLRWKDFmi55hGiz33vYru6ursDvJTRKFDmbT2xXx6eFGCNQy1XRW7qpr",
  "key13": "3WpwHsWtNeDFaYhkQf3cBSf2D9wzar1qPX8matUut46ajceo7HXNPCHTy5hirQS43QtCgxy3h5DtKiLYR7Re1ks7",
  "key14": "3VF6GvJTVEqPmNhcGNcbNCLyirsx5oxZHRZ5hZXG1URkmas1eT48wopDeBQwGB4YdaUpn3F9H9JCjPYKsf8iqNCA",
  "key15": "3v7W8Ao98Tp6mTjjpbTydinchBMQ3T66vb5ZjNUfp7Ks17QRUfPut4FxCeXYWbnY5AahtZrqUjKgfisQKUC1j7VQ",
  "key16": "2dMqa5qgXsXqGnaKAdkE21izsjSbcnFsuYBZu69N3j8abbbvpNxnEK5hH3FdXeajqqYUeVnEi9T5Ux4feKXv89yo",
  "key17": "2WZRTNjtEn383JZYCNA87Qb84xqEBvurNACSZVR5RpJyk9kAzhwioYAUGfeFdtRyCXxZV5Jy3RnvHbZfK3rotGtd",
  "key18": "a9VH8DWcLoXR7JaUQ72eUQxv1EeefurB1rygo2nWzqyXoBNeh36ZGEMYh2VALxaU5auqLoUKMjUvbws71WijC9b",
  "key19": "4NV8AXvShaLAahnQv7xtQXurJaRi3HbApZziKvWCZoW6hyuZ52tQgYb7zd6wXojge1mY14BH6scbbwQ8RPRRq5bW",
  "key20": "u4hDdtufHJVvCDdERATkymynAdC2tboszXFvphy9C8fBP3TAfmz3zVuhwG2dy7EgCvMdVae3uidRqb5f677pqvv",
  "key21": "4CEarkyVzC8YYpHpS6wCa6xrn7eBtnqbyRtRN8TYK6V8DEvZXQHWa9efzX5P9HBVPSAXL43qTUMLrXvHn16j4jRd",
  "key22": "BNkthnNcNBD55dW6GgSe9mWoZn8MXQwKqW4uFZV3K8EU3TiqtHsxVFcG3hVJFN5FpwPRkKzwL4avj94Pe88YfpB",
  "key23": "5HgpTh2STzXvjVrrKLqaLkUgaLmuVSEqxDpUu8JVRbziGdfZ3zGkTj72J7nYXfCmmZZzW5GCWE7ikBbgEAXFNyz5",
  "key24": "2Tj1q2P73ZYKeGrcNNJN6ywonKPCZkDDB3cvUdGeJ7Lyjzw6FkhyCNTzQ1ivReRNQnRrBiuTYPZWJQh3Pb96WHTf",
  "key25": "47Woe1dsg9CFUyCovGQ8YGvRWK1edUk8ZJT17Y99zq3wtLdNsQF4fW7cYeVVKC9nWA1tEQdeLLpN4u7127eYCgEf",
  "key26": "5KASoB9WFBnb8y8HLxCdHYfFrHtZwHCKrEK2z1nwu4ixMzpcvtgCM6UNvvToNKvpUFeF8xJ3vpgqKpAwkuiQLegs",
  "key27": "4AKsvbz1gUVULH8isCaKZBJhVT7UHG5ixamJjB6pADZxZqo2abezoXKNoEtWGRzydRW3NuMnT43MQturXsJh7mm",
  "key28": "42zJHMsQBAwSukRSFR9sauPG82a9vnMNjZepAh8oez8jamHnw2yTvqqCYmEuTNMqZrFDfR6uHV7qfSWGLWzoR5pH",
  "key29": "UNEjZ5KHQCcQJNN6kiWB2kjCULCCFCJL45G3bVbCtFTHysKoEuRQnDqpxaFGHXUxWSxR6wL8TZuYGUWYpwuPSqu",
  "key30": "5x9kVmrhfbekk9n5Vmk5yc29Gaj33jjqqoyFVfQ1swC9ZHBcinzQ4MokSH58z3933XxHkkobMFyUB4zxHnaLk4Gm",
  "key31": "5AtzHsPT2HpbNJsNYYtmKnDLsuVRunTRtKM2GqLcT7FhxJXryqUbB9aLFDVHeGs8GaGA2CG3GLLpnm9aUwTYSHNg",
  "key32": "2VVFyKur24ETWYgtnBQHfVj1EV1CFdmZMq4rEb1iqgUoEKyz8PVXWwBDerNN1oQ2yfFiPqJZ5S71JqXpNCr1fd21",
  "key33": "5hChPvf5DF276tw7jqBvVyoAy5ckXAC4kad273jzpWqj2FvQMotgefpEcPX5eQ5QuE8PksETzWYSbGG2UfApWFu1",
  "key34": "4M71sHZTRshbFjwBcnsBUdWx9x4JSGt1WRKdpuAziL3zQWzoC5T9BSB6bd6jXE11Gdm2gwPnfkDMZ8q4DZJxWcFp",
  "key35": "4aBe39fiBLhiQVXKxcHsdtpa7PLRk2FDwW2RTJQd9kYPTrJ6hakhsNtWQRWEtQCYSqSoSZLStiDTggXwL5kM6MR6"
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
