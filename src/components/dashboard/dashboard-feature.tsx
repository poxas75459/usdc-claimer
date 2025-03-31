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
    "4AF6Rp1jbfD24e8kqhzSw1GfJfYRxZ6cpztBj21txqKxnHJHRacPtDV3VfX8rN8rs1oki4pfa5h87TWVsFYKqvAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpF3Q2dJEsbQpCLmfd8phntw3PFHP8GWt6MBWACizFRgBCYHPpy1ZDQxg4GCgmaXMpS8jN81MGqqqaivT85j9or",
  "key1": "ryc3BraLda8mHGEgGZwkb7st4HDjRBD5FaVNC8tDA8STsB5JKthyuD36ptG9LmDkyoz8bJBvJb3ZKnYH6NYxbmP",
  "key2": "5wwjhHdLiibiVMVLRan7WSCVHL74Ysx3ptFD4koLNkxsD4gLFpns6h2UYmhScQCSJDcBJog922fqB93XkGCLg83u",
  "key3": "5wrzvRBydkoGP8vXLsJZQAJU86Qrjst8XTZyXxgkinKQMacUwWwgEmwD1YSvRUbVaNQZ9Jir9iFR8mot5zkXEET3",
  "key4": "4uYv4xGfopJaiCsXzH8uqgbEaJcML2o4UiP1bBbAXx1LFzANbNNkUDsUvf8x9x9H9MJdUBYdYb37DdBc674hZJd",
  "key5": "5VV2VFSbg4T2axSJsxaYWnhMrLvhNBsGZDkCAuADySQErLUq4sXxX1WfHHj4nL3pDXw8F5gWGqjjefkXyDFEHVWY",
  "key6": "3C2MKjRCozPo6st7V1S16ZqBpuV2TpzsUpxU2oTQ5wyXeXBbuSFrwohhmZ8NxwgDZifJyS5fuBYpZnBfQWA61n7Q",
  "key7": "47GF5FyQAmtBk2KGMdZGyt8FmpZnG9pmdJFFBBAAUStFnf7zE5BGejRL3oLsN5P4MHhQMpJzZuaJX5Lo7WYbbvh9",
  "key8": "5gzkNGxJoghB8vsTVLgfUBf5uj4HKSx73DjWDPcuN8tQNHCny1RsaL9wsoycZBqiivLbJcofdjquQ7XXzQ7xNtdb",
  "key9": "5EZ4r7Cp87tJu7Ge4no4Gz1DuqRjXwnVVETDpjdCk1tVjHppLTUC7ni9mtuMqNwZpdqXnkVhJPVZnsQNbuv6ZPgJ",
  "key10": "64GnedpRJce7SBHGprnVaPEK1Ue9L2Bfv4CEMr421oTegyQ53DAL1sNG5XT2hckpYv67hdzuMT9G5Sm4bZeSjSF",
  "key11": "2grCVEVWwcnhhZf13JwUACN5vpghfnLHAb5WDP7CXsPDU5sdiM8r9y25PE4dXC5QPSVC2ta7YqrsjrGtcaPDqdTd",
  "key12": "6NMDctTmh2PchD4W3QmcioTxKp4W4D3HSnLbcpKCejAEoZfuBFaFYRJtkfyw1oGwrujMMomUZkcycEMT2gjntDE",
  "key13": "4PpkHwis69wAiaZPF4RutuiGXBBh4VkAqCr6QxfCKkKVdwW97oX9TMhTZ6WsQSaseuPC9UKNmsnNa1sgZnnLHoZ5",
  "key14": "3Av4unDZjYb2sR3EnUweX5h87YWqBmCt7k89gwJD61dYERu1yzWw3EU5NuGGysLCSWDeHCNLF8W7BuLRwVNHBpQ5",
  "key15": "3d3hNhPRehwzAcVXyNerPB1EukLxnggjvT5DX7QqdASDnQd4Dv2zkzE8rQ9YstA1ngbmydfvKYrTPWV5Qamf9GY8",
  "key16": "2mnRy16L2CjbEnDoptsoMEsMaTntxJmDHDVU311hjLP2mUAbTLcg72Z5rgP4XW4K9ShFCEXRd8bCSXAUwcaDy4TD",
  "key17": "32sKPrcUo8P9hmu2UJDFF9cKxvDb4E4tXwYhtaJXhDVCWudCeSTXLGSAXoz4HgEWZLnNkX5WgK75VHPpGeJERM9E",
  "key18": "2xKRcUjLyPCyPQeMYpfCft1phnHv7FGNerzcM2tKpmL8GtMidKuC9wRNjy9psQ68CrQARN5AenrDDcNuJYn7wpmR",
  "key19": "2Lv5rMvSNhhcqmE3TRRZoYGGLzuUwBKZa8VeZZGuxYeM8drL4LcHwGmGubUzF42cLNdKk3zW3NqRsvdKR1n3hVZY",
  "key20": "4gpEomHvo33JSAroZFr63dPYzBX5oFrKB5XCEcKN9bYHxT7wXg85cYckhFobTxzBdUrY6oqbyYvxSrKHuP7Bo54g",
  "key21": "32Aqs1sn9Z9xPrcsyFnTUGPCGZqWE94Xm7hrUcG28YCepd77YzpmEJvjuXT7Dfrs3GMyjiCUAMcQsqEnNe7CHvFR",
  "key22": "3c8eke4j9YAG1yKWxsNWRgH5GfwWXsJxT2BdVA5XXtBMpXc1t5HESJUbsAevM7UwHeJKGmLhrAXavuqURaJS3JRg",
  "key23": "3hBueHR6sJnpqrk5rB4f8c1A5zj2fZj38PD6nGpouQEZZG5eYC1jbUxrAxEuyjb5FdvmEi1tDzy4fMrU1wP851Qv",
  "key24": "5JjqFE1uWUu9n3UfpkvnGz9iNn3TbH5KAT1d3hBoXbah6z7gJwSBmb1bwsuHmWWuwV4YwPAKPX7wRRfBRus5XaN2",
  "key25": "5wg1mh75zJW2EbEdXsiANwsQY2Wrghd4oxdVQhiHHGbrna6sALsS9FjQypB9QfKcV5FGuFt9ENs7XrEWQwmTmWYD",
  "key26": "wPinEP4bR4RNEccciEYUYKZ8AQktdwmLrhbuWKA7YhgZgRu8Mro6H4BaYqwF8tYeuCYm2a78o2gyCgXZ7C3cdqx",
  "key27": "2UAMtaCdYLJ4dkjGiujXu3LqWuN4RxVVkosMkYxKYR1NpYx27vRB3qjmgRaxYCixyHdS6jmKupGav3PB5L2SoeUg",
  "key28": "2AWBrv7yjQ5FtnkiFAfFYwizVEySciN6rjotasuATiJthwVZ2VWNq4P9T8u74aNDS9uAMXMZUyPtoY8KNfP81Lj",
  "key29": "5Tgpkx65jbiov27p1guhjhbBSDyK4PuoETkeszvcQyaJbMjS3komW9XmkH4FAXhjGj4Lj4bBJ15HrmWZHX4TfJMU",
  "key30": "5VLLiFHQiHw5yRPaPbpddnmpphH5w1s6q9L6oXUzPS6daoD1muCG9pZiUmfavLWWLYC2ABsTcHmuuNEL9XTyLJhA",
  "key31": "5TXtQwNqcWnghb8f1SrDw94TEMyqwiyKW5LP8SsxhXAH99LeswCoFHLQUTU29veUoVphp3fNYt3Ekzx4nq5L7rAF",
  "key32": "4hNya2qtkR3zSPeJiQz9XxZ2AUFtpCkbp9RRmHB613MwmYoxR1SWD6Joxe9xKwRUnaHK4MB9bCTEScFg4D3tDinQ",
  "key33": "4rxPz4HnvdAh8JyMU2beXwqDSgD7Z4awzQYWwmzxNJPyhsA43sRhdfnZXhbe9A9HP6FacUrLVbHBfLJdgkTpEJWV",
  "key34": "2RQhPYGN9n9zVjUeSSeHgAvS9DeMPxV94cG4ChshD4bKUnFXWVHayre4RNqsjfURC3XHAt41JcS7iogrHyF1Tva6",
  "key35": "2A2U9MDqNeVWUJdthvv2sUiMQAXDCVCS26yj3U2vvNqohXLYmZMu4LLQMu6yjKVRPADuV5vathoiRrB4ZGb5F7Np",
  "key36": "2c8Z7PVVqdRL6sFrFdHh4KEBbAixEyGLNXYMRjYU62NQuZWQcEFjTSQ7ZbKjP5x5PMxqYmKsW7wDb8r2VXYtppV6",
  "key37": "51HfjBaYkueRJXU7r4tDsHNJ9qRsZscdhhf36KteH8N9wUmLbHmCWxBqRGq3Qn6PM1jdDT4cS2Gg3y8moSTwvZmk"
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
