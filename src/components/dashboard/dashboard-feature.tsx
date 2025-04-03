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
    "213rYhkCRF2G9U1Mreuo7krMeQWA9iMK2y3yfgk7W1BDCZCzjiiGMWk1EZC3zh6LeqJnwTqogHSvEUXpjN9aGpPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zuNBkVn15xZ3XcfXwwoVQcNtFAdGWe4PMCzrSwWQqdTZozbAVMFbCZBuvgEFEyyjB57jRSpZG7ZnNhCTok2N7L",
  "key1": "4gUaha8MtxnMu4GW5LbN1JcHYb5FXrWvfepyGdXCfeu6peeScP7tX7TVXBbtoaTZBNoX5W6zma1MZ7s7QNFBEReY",
  "key2": "2o4SH8EVzLArZNLPg2xtffYz5qr58EtTsctXWJi1nScmir2fQUXezgcDP4N9ThudUR15wcExc8MZkiAC6RbYk21o",
  "key3": "4X7q4euhmttg7Q6tRCMQpQ3V1MYwxt1Ei29xNQaXRoAM2QaFqMw85orgfdcVm8Yg3LqehzjMHRokobAStXNCixPV",
  "key4": "6142pS8P5aDEyT1MkmhvMxbrxMLNmCJZWZbxyZ8Qz6Rt1ovJqhSsqhasBpHfAbAK8igixB3fqGneKLsfmnb7CkmA",
  "key5": "2ccGM8SN4LeZorVHM7Fo7qjKWA6C3TRbuW2eBuh47NZyhowKZ9ymXPSvHbLbA36HaHstf9GHPuo9cdWqRvy7jgfz",
  "key6": "355RzQDiLM7DocUAZYpSVcY4tEAZ1BxYEHALkwcSm5rS8Hh9tuSXqGrmL3PJwY5RfapMb8Gwir8gge78o9U48LUs",
  "key7": "63VZDDvBYxfhqYP1Wwc4hsKjZJfBVLkXjW1Mrb8pTnPaw5QvyRNASjU2oDD9DMPyew3s1kBmFamUdfQNYFi2MXX3",
  "key8": "2mJCFqXVmUnAW7YZ1yguQQX5z8JPNCQBGx9qoGiCT5aZGKhokrWZFk512THgZ56ZF35gYiVqKq1bERKDjxSCkT3y",
  "key9": "2utyfampcyFtAkW3uXRP8fE1cbMMjYyiZ4ubzXrEGCQHjfiYSo5kt6jAWirsjsTd6b9A5wYMuXmhQQ9UHK1uWSVd",
  "key10": "vpQHKo1kqM5LwwSwa4WyBXhWtQb9W9SB3LFnYwK4jm1dGYajhkzQCDgwdCo3VsZ6ySxuQD5C8mxbAFpHxGF8nU7",
  "key11": "2fvbkcNZJWezmEMqVaQPwEed1YUALjuRyQ69ezD2BH3GGu9NBwmvihmepWsuXoRFRJ8D6tZwRoVZEix8mzdYGVfX",
  "key12": "ggn6d8PqdttipeDK9TMKjZKKDCQA6pPe3dgRp4rj8hQCmbcsUffVhezwPh9TuuoCLzi4f6guMGeuFW9NP3FC5fv",
  "key13": "2MyWJnCEJz9tX1Nc4DyPoJGnDVZGaUaKC6TmoJgD6LZqVJXfK5vJuu3UcD5X2GHRCwmfY5FYQpt7kdbk48rtjNSQ",
  "key14": "4YCXRubsD1S3pzJdEzseFyrqFZbbGsZKf3wN2ZXyaw2y5jC6cY5teEjyDjcyowN8FaDuR8NPFXCeKqok2m2KxYU6",
  "key15": "35L1PAJ4TqmY3oQhbTN5A5fw4nSytMHGxEovn33ySwZJ3eRLfdnvNNVejFSkBBoSbATCZNNugvmAqfdWPLi3b3ui",
  "key16": "5JmHQhZBNyPqRsCc4qTKze1VnpGtQWfAuaJJJqurX5oWzvhVST1SnwBL6iC9ebDumTWLCUYxaLwCq6jWRRyunqwk",
  "key17": "2afoBSQQKKPkrSAyoShjjBAXeK3DyY3HKrkKBAKRWA3UfNq5zvyRBcREsmxxtqfHF18PLoeaQnaDDAU2Yz81Duzr",
  "key18": "734jpDSwecvtvEkXUta29MGwxp91oPggHyTASEbWmC3XMDzDtu5EzEAUQjnMpxk4kHa5H61gzK2dh7AWTr9LeAT",
  "key19": "5miYpYtqRL2XHkSmpxMtGGypCHSNasTdjfu8kKVv5KDGQgVAhdtJ5xSk4XG5uANs5DMFCbTdQ6HeyzTLwVdofPdd",
  "key20": "5GG5RtJcyD7ip6KKigZG7FcTFxEVGVkQQh6zHVUa1CBKmxNdWbsmUnh7ZgpbUnYACdH3WctMyQ92A9ExSsfHd9qY",
  "key21": "3mZrVumZVoGP3XEUqbGJ64S1stcFdwnegB49fVfeayodVs1U9wJDZTGmuAeC3hyVxG8VKNgwXoC2V2HM3DobwbyS",
  "key22": "4v3Du1tqrN7ixBRkqc2rhhfysFY9wNwNC2eq33my7Yfx2AKsU5yAeufVDpfokQeMbSx8cwsRq5ZifR8DH3f5VFVd",
  "key23": "3s1eTyFLqN8Fq5JVjGrCSkpGDnJ8DZNibSsfh53PJNSd3D41LQEuyXwyq3xsBrFV8nevLJqbCdMuDDFxBtbesF7S",
  "key24": "26GRExMJnx46z815cygzsBR1D5ZLaq2dC7oS3r86xpLZCXHrVniQybi37rXXGUHHrnR9Kj1hxhTrq7BWDABKfpAs",
  "key25": "2U6cpfNopGA35tB8WuZNBH7ULPE3U51oHnvzfcLKDdukKvqTwrqRfEbaDpezCvjBR22LnKKHRU87uM9hGEXfzz2o",
  "key26": "2iFGf9hELT9BirQ1zEMLVzpmSQThev3tt6eY8bKDvanvFdXoCbaVm9og9Dmw9fyYtXqbEYpkoGo96NP5MoDz8hdn",
  "key27": "3X5X6DqYLZ594cpL8HPVJrt5JY7R3x4wVAPyEpthBNP6u7XCnFFZti695VqoFmYwRZ3DA7JduuE1PCvLENG4xZQm",
  "key28": "4gECczApZew8ZNVn1ha3BFKT2iuuqX4FdBEVnADQ5ibD65TVaQ36c7bdvwegv8yy2nxVxZzV4HqgBCCHgco5FovB",
  "key29": "4poaCM9FuijFZPTwN2oCLeX9sAjzcgoCtkKGctDRDxTBrJKjHWgstGWtQ17WMGkuFxCPbQLEujeiPMdkRB4rEY9X",
  "key30": "wJZhipFus7XHQbSTjaKfErgppmEQTo5jkJ2AWBfXFyZgCukSPhRbYxigV1c4W5J4rcMWJCbEkq6ztd9Xh3txYvH",
  "key31": "3mScRqqh6fvLhQTZkZt5bNsVcJHw5DR1koUZ86r99Cc7g1BMVgLTYUVUx4uoWbkCfNjWkZmXTJ49Vo5n21iyjfJ7",
  "key32": "36DHW8xntY38yTPEtKXqrxcMRUdv5kB8spqGMCjoRh1ncWaqLUbeD8cTTdPTE9m1JRBkUQXDqKn4ztQGtq1VfZXS",
  "key33": "3fBsHSLiikhJv92bfKdY7QLH5aUVrSTtQr6whMSuBDaPUbKSfhat8G7QfgYTEhd8K3ion15nFMgkWGAT78J9xTtC",
  "key34": "2y6rUQG7PQg7EgedCLHDogu97zFaesquJdBvsukCs8djUKk17EdU7yRPFHeXqETUETCgBKFLdK1JeCSjHPnUL6iH",
  "key35": "4Wq5HKLXkGHfPLTFEq2onk8e6RbYRjL6gEbki3ni6cfTNFgwFh71NtZxnt2bjUcUMh7B4vGjkKmrBTvnkEH1fbXU",
  "key36": "Fm3VLafrkBxjnFKoxprsfZMX8EvpxxaPnyUd61mCUN4TYkGreMD9cmncwX6ua4GUPZLuncuRBSdtbLWmyCaw6GE",
  "key37": "3tgXYnurd3qKqgypNFBaixKHxWH6EHu67tsaThLToD41e1DKwZew2QWY4wDhugaPoqfraLTZWY96sxfdxg1CRwQD",
  "key38": "2YWdBvWrKYbfQdMD6XNyyGdRoJ679e3sCCzbZ9CCmzQq51z9iMGGnVJutjs8yVuHVBxofrRrMWvbvecamPatnUmP",
  "key39": "4qoFqWBp6QoKhfMUoeh1nNDWXmnzSUoTLS5npm1HHughpDi6r284WrhntTB97Lsk3TH6iY3Dt8SEtBSFTTbtdTRZ",
  "key40": "5M4xuZBSFASpLGxbBLKTSBPTczKVWJsEkVswFhbvsuSh56jrcFiaMiFU7ufyP4fpLZzNyTz4cXERdVFKF9zmT34j",
  "key41": "DJAwoQ7nBEMe3azC2RzM6BE4166snTNgkGdBbE6yQFQKgqrk5AKhYMWzG5P7KXa3EsbMCyUNURA6R2iXkcYnJty",
  "key42": "2Zood6odBQdk1BMqKV8K4fp3yY6eJKdVLA6rLK4dz9CGYiYdxP6ki6komArTGwbyHNh3rBMV4XureFiqZ2LsxKkj",
  "key43": "292Ps3AxAG2aCzNjQxH9yVysXm7iUtGm5M1WhkbFbpbsNfam6qvPrBei1oiNjNzM2psdSSfjUMDjfR4h1QyU5HU9",
  "key44": "5WdbJRn2KZRxB8oNKFtznTbD8An1SytSdWTREG3jCdE2fDP3TpKcqAuBhfkuTNMGb28Vmza1PUUPjK8DtVXJb3Z8",
  "key45": "wFRdajZGYgVs3RZkyLB7hG27T2UFf7fLThAQYVXFiVjVdEdo5AoZVUgudzUoPPkpfoNesoiUKFCkETK5AH3KcKp",
  "key46": "3yDnptmkAVEsXauwaaxxGxAcpi57UA5Qj2yquwb8YxaFswghmThSJHBWKR3QDKuhnaqwHCExXWn6yAnmc88yjCmo",
  "key47": "4LQJbNBsfBzrSBMwSGYcG56Fen5cSkTJUuQyS6RXBJPJEWVyDwMxpvxKvrwTWTZHXUEXZARpXdV6avhEHVPQ9xj8"
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
