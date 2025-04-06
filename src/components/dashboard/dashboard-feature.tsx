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
    "3ZjRGEP1w5yVfAqQnvZvijEMuC7vZYFndsQGv2HmswY2UtUJWK3ER8ZmZ3nQEe89STHJXv566SxBC9nJ2H8zh9CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PbpfUSDijYCM1RbYYcmewo6gZEYV97kKiwFPLHDBwrtvhbuniy1hAeFcb1NZVp7PjoNezQo8KxFh1Wmewa7b41m",
  "key1": "3zQoc4gmvt8nMyuBot4m7YC5sj672AK4QzjQ3HSU5Gey6szwKJcr73GLquQ9wcYYBTKwozmsbywHo3BYKTPzy6gT",
  "key2": "3EBE2pDcDLY7FPNoiBTp9G64NzjgR65MrnaRy8Xmqsg3iYw267BDHUDx7hpQu9E4W1gEMcbijHXsAEfFsQq6ykh",
  "key3": "37Z2dfMj5y1ToF1oSSspJM8ErxndxQiSAMLnK7Y6vfWiSZCKps9ra8vpshvSo7CzH228Dmdegpe1sjZcfQW1i5Li",
  "key4": "5PxNgZxMZBpJmJFBsabgqJHYeV9vcwsckqyfCwT47886JuLfC9uPwQ2QaFzfcpXhFTu3aT8FhaT5qfNAozJGBqYa",
  "key5": "2jmSk9UVEDheQsSdg3rpkd6ZREAR42mr3XGaGXHJ7rmbTLS9EGm1yCUE21aiBdMXL87fquvvFioZLYwMeR2kedA1",
  "key6": "2xxetXukMRv3keRuFGsDPH4JVTa16Lz24ZoTSrp7gPbZZddkmfHwe1oGbb2U4QxSkFiQvRpnAsA8mEk6mh7ikP24",
  "key7": "u1jvQ13H3A6GWxhrg7ihDBSS9uSuG5k8sb73uzzPp6ccUHCpUkjurjLLSq27q7mycXqbevvTDBwU1kkxP6pqwru",
  "key8": "4L7dwtp2XiXoMiarN1i2r37YVH2LKyHpVeL5qbvX7ST4hdTBRytBwshjXVsMSaJmHnLRL1AwydK7hYzp8fufzPWe",
  "key9": "5U2J68AmEmZ2pzg1P9skrnYnNmzTMGGL1g8taD77YdEPZDkGEEb2S7KUzb5K8nYgpqt7Hbn7kdm2nnVsBEB2cqwh",
  "key10": "4JzmnFcG8CYtJg1huwgcCpGW2eFnWKqJt9SCwvjsSngEQwEbKKfiSkDxVzJhPg3x2TtA6aAWJXAgQTANcHZeKDYD",
  "key11": "2X63JgKqXTkNp8tDHVJvWY82P6hmYPRDDj72RTCoNWAejVZm275ey2wmWYkdnmbAc8jSVtqm8cfF8bjVJZrtZPre",
  "key12": "3gRntK2BbPM4SGcKdFihQRnd13ec3LLYs2UProQnijrsYMNrVXvF8ihWXnoodRiEZSKLwiagMi5yDQoNyYjWRqM3",
  "key13": "5gpZq3kTWGXeUWAPjysHFmA6Et1ukS8eTC1cMoVVFcazB4icTBQBRdfPF4hCAekthBNQUdWcNXLDUhX4k1MnJzcb",
  "key14": "5fqmENptZta8FxC4XWv7NYeX2PUJXBEKDi4apKZWp8v9k2MUUwRA1LepKtZ91K7VPBojfSsC4DMgqk2yzxJewVMH",
  "key15": "5hAg33Y738GcKYKTac5u43mfRsyjsnU7V85fhVLdwvBTh6LWYy1p79FWJASzVeXEcn2QCtmxF8LbEp7KYUMqL2hn",
  "key16": "2YAEq5vEBMeWWS7cz9wUq7dyj4uQ29FVevyX5CAwDhcPYiCpREFDcVU2ZpGJqt9U3CT3PixXRwGfBaUMm8eMmCfQ",
  "key17": "5F2UrQ9Bn23YfqxiRmNkqVTYRvwXc2eYurJgDMzbeJs1WiwgLkVcub59UWSHJrEKDpFQfFCMhRAmGWC21z8Vb8qW",
  "key18": "3ENHdR9SHQzZu4cG5tV9gh34KnvsNCrtmo8qZ97pHq6sfFaBRZ2p8gtz9cYxt4aSJhivNJBGwBsdaDjKCQfySo8a",
  "key19": "4NAfzcR5anZMjtPVx1bqV4xTmWiE7Vwu4bsY8nn1h2MQcnrgcFxEyJh7QX3w6Fu7YnNf1ZSbjg9iknVVDwbzNSQa",
  "key20": "2eaQJddrdSTK3pN2scAjWTmAsDiRUC5xDFSHUh7A79tU8hrxoBkgmEMJxMVntz68TwJGABwFKhmXRzG6bkXG9FQN",
  "key21": "suXQYmqCQCowFcBc9VVnfcKQDjjoqp6xymADtWNGmP8JKnxYk4mEy6kikSBmUZdK4WkKXK4AYze63vygWP4YYCV",
  "key22": "4VytdmGAFR26tqHfAC1Au6i78fGFrnGU8ahyYb3v4RoJD5bgBWZ8WdqFwsj18bS4JHCWESgixQVNqVnbqpAiGbvv",
  "key23": "3cJuAvGvM8BGo9FHd9R1kEQbGFuwjjQnixqnfXZbYV2L5nrwUj5fs6CmjAvPV9Ue7pGNDKKV3A8JyzuqzKDBC1km",
  "key24": "4SCqmMyQQZzZYfyQQkpdG2VUcVdnKKRrmQxzSTnY79guUyyV6SVNprqbaCEVQ8vdBzzdMpSVvTDScTVh6v5PwYMR",
  "key25": "5TPWEY53pNFrhRnwYDfLf5WCgX23PVhGxeXiER5Ve2RhXuB2Zu61sdTNsUJbkeuM4q8a1jQLGAeoQ5od5iqirT6a",
  "key26": "HAoBcUjVjy3aKhLDQp98rha3JsHd1M1mDThSJtjq8Wc9wAcFCaFTjzwzSZsCPuE5GwH9C6Jf2dyNMUdcsRd6f19",
  "key27": "4DJvvykcGsStwE771p5s7oohpf2aj8EmsTFi2xoCj3qBhcG2xv4eMvM85QWtjXakzJ5YDTQUvhYNfumEqTLtGkDz",
  "key28": "2Frpcfdf1avJR1NJJo1qGipXWJ2CVioLVhx9SeS2jwWcErZWdf916vQF3gHAHNSejUf5QtVSUztYdoWNo3zfXe8X"
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
