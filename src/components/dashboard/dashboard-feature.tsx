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
    "4Ua73EHoyVgUXRy8mom1UPN6ivqQdK5r9Q4tU86UH9k78RMkE5FA2dNYNCJTXpHtGbcvjfYRuqSqL1zcfBEL3Fjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364DA6TFbJfnrbcgkwt4AoAWAZvEqPKacmoJDcVNh1zBqGG3UiApmqxLmHTvdGhG9oWdrB8cN5wbbF9yui1dBfqF",
  "key1": "4GL8fDARDdHUnDbJkrZMKWNNcLgRweYouNuP3dS6LjfG64XBQnC24xAoX6onL1JiUK8RSqthik1xu86v35mxwnMF",
  "key2": "3RUvvenPFD8kP1DqNby7T5Ksvi4uGpzx2iH1Tt31METsRKNd7Hrq3MmdK1Z5e5KDLHCzBKi65UeiJbbDX5CV1aDS",
  "key3": "5WVfvBWe2iiscRCfGzuymJpD6xQWMmBz4LuCvTjxtf3qP6MfF22q6prWjQwgu9vkdbk7FhknXPWdgDW7wWcm8wG2",
  "key4": "BBNu1jqWQWDJX1sio9iJoqh7LpG5JXcNGD4DKTWX9eTn1G8PWy1Pdk9wCYy5th544ZnG7JMLgy8AxAa7uUZE4c5",
  "key5": "2vZryXFfjEfQDBjrJp8FkPTnJkFmUQKhFwNaXavuU4Nw9JKTpPybRN95XJKMmFPexZnrv2t7usEHnrrwaD3rV8FK",
  "key6": "4yehVEfMJpqAYaTHQeniSHdvQHUuK29RHHueFvn2MuSvhcv7m5BrfBvE8oyZ5CEgH3rGnQRXVW52URHmgxxwSifq",
  "key7": "3ZPfYqqvAn7uVxZPMQDmstpZB5QADMEjaQJcNTf7h14PJ9owe5mfKV2jcuxdCXNsnw8MyyEUkd5i7BFr9W8gj96i",
  "key8": "3gEqHBCdUbbBBt7wvhhTDUuHzKtzAj2yuTTZjJfUac1ZsMcwMpwgHduyY1fLQbtmq4hjp8FjLjK9UHW3kw5jhfQq",
  "key9": "2dzAdocC38EYiqL1VxyPLA6xh3q4WduWjmV8fFRK7aGsaCugvrYVzEkduEixNNp2aggMtcexv9ZqWv7M6YnVFYvY",
  "key10": "5bb5SLUT5sJ1L1Qkky5Vyjujn6hZzhF2eGv58yVbaowd4sVGEEaQ9WfAhWgeKk8ukhGnckWzmm3EJAvQwAR6Psru",
  "key11": "3KAuASCYGwkDvptc4zhXUJbtgWx3kpFof8U9mdcAKw9iW4s6QdM2v5idsp8GRPNDSAaoGGhycEFJeBRhUY8JTaof",
  "key12": "36pvMVxzsU1g3GJPYtn2E7CobUXAWoQeAvHetGL3WUGoyFGWLo9jCewGDjZLNHDh6DNieLrXZ2SbDbLqQoWRpFSQ",
  "key13": "2U4YYjXoLmwBVbgje3T5W9jw88anWrY1rg1ZNNtxLHUuac52J9DSpVGxS5uf1EBbe4aPTBGuFSh7VPgYE5sGNyMt",
  "key14": "MP5NXNnsLDAZRGSrp383BYJgRkXcNjRcs1gsEN4Xn7RTQT34oLd2YjjBv3mPYHEFg6yWLoBhhx8wXoashRZMVgf",
  "key15": "47WAS5qMUSQfyF7KX1VWbHFuEjndazahaKu5e3JPaiShnrGrsQAgctXD1PG2Pw52ozZ3gMvjeShUmqi8iYkJRtPp",
  "key16": "6pmeVJjuSs2YZ7dBTGD8D8p66w4YMGpBiLK1RqyDWxaYKwm32KzL1S92zYH8bt4yoHN8EzVqgAKVekP2gRtFNDY",
  "key17": "56mEW6b1QTDdmsp1S81S7U5MeW2foduR5kjLNSkxc1UxrgdgCvmrzWzSk31FZQYBU5ou2PtgJbekfezZzGXhwNq3",
  "key18": "2c2aU8Js2RHokrMy2qiXWkTRtdPhnzPRPwTaW9SmQ6MRgDRmYLLMpsJhvGZbyXmP5BDxhaLUQMLQxqYgCmfL7w7C",
  "key19": "45EB8voAEmk5AwyW6URsMPzKfJ5gvr8xqEWJUpJUgRdju3SiXdRkHM2R1EmbDqUGdCySC6Agy8GuijMnJtACYcYZ",
  "key20": "4DAmRvxsCBKgfdd1JT5U8Xud8msUSvCiBamy84QdhvzhNwd7SamWNfzXypPAt7waSNvm9SNu8VjGX3TiRUmHEPGr",
  "key21": "35ePAQUUBRbLiSoRBzChvDjsDvcPWmwgAc8jjQhW3ZxNobdFsJcGFXzY55d3ia3FJjfk5hQB8jtHpTUyTLabDAY3",
  "key22": "5UAgg9PJ6UcUqfRtuDZA7AHZiD7yRV5nMaaFgLebSNDRPyt8PhpEUhJHs1kSssVYDrjwr1LaSqo76wrtSHkuHots",
  "key23": "JGCXUe9oTfT8nVtEMa5hi7iNfHTXUnVkSUSusjWRkW4ViJMnuogoUzVPn15d8re9rqqKLyYmrfsXnMugeeMNwU6",
  "key24": "34HonE7q2LwSyZfMjiq7qfS9mUkztMSJFMHzZwSjxxjj3NafWkP1GKhbaMj6MVqkNgn7XVvBLG89pUHQdB74vZpd",
  "key25": "4ye7c2k1VLM3e1pz2aV7LigBT6DXbBszteBKeuK5ycYoWmUNXugjqPv8ddhyiKaWfcrZcxremX7mHETvb7KSapnL",
  "key26": "16NHt3CUoSjRHVnks2J9pna9ekjVKNZWq72e3RB1fcSFq3fWWAUVWuZ52cERe43ESuuFwCm2VqMvRDHLTcha8Wv",
  "key27": "4FEpH5EL6VJkiBKyr1ophqxX2AMSo9J6tVkCAqMx8UZGaxqmnmkdgFDPmGWdr5JhZQGBUxBKdTjGD7QS7jwmafWg",
  "key28": "4bDpbKngk8E8HahFM2X8XeEVN6pX4nNZwaWqA6KgigNWzPmqrG52v4PYLeSf1SChWZnMCMvy3SsmnM1UUkQFQ7aR",
  "key29": "2dk5s55ZvB7urq8y25VUySpQzA7knzizvJ2a3ka6NQafcrJfFsXXNVHpb9SngMyuUdKxyBm1UnFDeevJDmCGhcw8",
  "key30": "XP96mxdmrRPCzoDCjVesFwA7EzPsnp4CUwEgDnW949xZKRsK5S6Pb2oGBhUVosTFKcGhDARhEPZZmQN8fFxiGy9"
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
