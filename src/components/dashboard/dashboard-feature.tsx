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
    "4CtAbdqY8wDrnqC3xSAi35Qzp7J1oxwhKqHcWLFsPZRVYNNWUW78tfJ2L9QbiU3GYsb5r3u52KAnMUnsedbjtsGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YAq5oGnDN8j839skwnG8xoJttijoKkjHQFUJox7qPDBNWCRVdToes2iZ81tjgKxA2NV5EjcgXUeidv8v9vMMpCG",
  "key1": "RfrxrrMzybmo82XDemwZSrfjkCkrwDu6YeZDYoFsKLBs7rBr1R7HfcfavoS51hk3E9tafMSS4rS58zPCf63vF8U",
  "key2": "3RkA5UggvnPzC4fS64UzQgsDzRTBu83UjowuAW7DytZB9Kx9KYVjK2xyEn7BU5NiBDCEDt9rkQ9s6XhoxvqYA4id",
  "key3": "7m3ca4kDVuYKYuxpnJPoAnwbFCXsS2rqbByTVm1bgLn5TKvKYkBqvdgrFtuQkhdaSc1Qb5sKSfvG2FVUzrRRUoF",
  "key4": "39AcgkngecJqJThFSDf5DYY2gjLV3489aY4u9HWHF6fMcnFMnAVcksJRwYb2tuzLcHPN69mUjisRtXQBAPgGhsEb",
  "key5": "2ykbmBqMUkK7MHQr9GFUPzLZUmkqcmv9XiJjMifndDUScenkU8sfMJ4J4XvNJYtqWHAArgQ5npnG5EYeTyGd9HHy",
  "key6": "hwRA3oGeejiHXtD9s7eXVUmFMyEBWzMdbEfqaJXmxFPhWat6YMX3feReERYSs9tDszb6JyhCHfUQ7TuEAMuyTRN",
  "key7": "3qfGDcwcfNUcvBbAVoRXVqgPVoxe8yhptF654QybqmppyqieiVmzwnJ3mU8Rxj3aint2YXJnT1xQmuwV2xmF7dHC",
  "key8": "3xifgFHVCx139cJyWjtrMX36uQioPo6RayfNsSgV9cjyAiyawqjP8BKvj92TZJ39D1zmTm7ufNaBwkRy6i2eLtp5",
  "key9": "9bminEWsXaoUwnvgAythGVvL7eoC4Tkm4yZwWuVjzKXXc1dyiNVAGiWoQwZe3uzyztMugbBfsogfj6BxAL85gAe",
  "key10": "46scziRtEHfgxvFNKwjXqhUR56BA1fbKnqEicwzaRPPgZo4a32Gf1prDKv2me3BT1QLLjSQT9w3Cn7w79sDuGCkx",
  "key11": "59oVT39PvhHkPDyvsQnuzy5w9bWhJX4ZtkSUANLU5Pe8m4bmP7758bxCyRqo1ZiDJSH619LxfBeNuh1F8Hao3VL2",
  "key12": "487TraVDEEz65PbggTaaFVzJFc5H83AktJvhXQvacxogxyu2r2KLtZvwKt4sizf5DnriSMwTUizxxB6YiJhsuhA4",
  "key13": "27N6iQHcbawKXKtxP2hj4Pz57Z8zzGUn2fTU7uomVkDSwCRCkCQC4bcxvtW9nmM5QF1ztf4knG6X3LJGdxGGsA2z",
  "key14": "k1PNxS9btuYLoEgmdN9LLGEBGV6v4psWg9hZT5uVbKHPdRgBycmKP925WvUowvu1fxv3HKDsMvoaZfvSa2pAqsk",
  "key15": "YLttC7tuFFdFyC1iwrGcPbWRkQja6keRnLXT4Z64XbYn3ey8pfeGGSoZvccxkNyv8nDwDDzhsAHiZbe4c4Q8Z6j",
  "key16": "3YvASMqrc6SUpAMRPr5AkxgkWUQqkqFXXrxqh864VLGkvhifFwDHPH5BP6oWvYJKs7mdkBqtNVnqyT6rqdqp1AGY",
  "key17": "xowBvieaRibczF9kwLusJPQJkTtx4zMeHXWzvvtPPZ8NHyS5xAKhrsKDwzypcRdfoWP5cV3vpBtqekqaMCVwxEv",
  "key18": "34Q4YuToLsaDfDpLg1RUdP6RpWW6bPnXeG6EWnQkMoGfYPTLEcXpgW5Hz4fwNNQB6GmYzb8pkX79pWT7B6MkvV1g",
  "key19": "2z2g9mtqL4iUXJmXg7i2TwGTTQNmxSwxPmvAbUKd2K2EYk9WRyat6zcuszK9mSW8SFAZvJpZp3R7WUm8LmzENA72",
  "key20": "4YMYcUTiFbGSs9FSmp2abZcKNi1ki4P3P9QAaXmNmNQiuy1fsVtG4aADqYQWFE3hynyv1bdMxgsYqdzUTWPYCgpW",
  "key21": "5VpSmfXDhTnbwLG6HR8zJ5FNbfq2t9ijNkqXDwBKphfnmG4Hhxhvd1vXGZfpjuUdUf15USTQ53tLxgqESDLR6jLX",
  "key22": "4iV4JS3zosxMS5NtTK7ggpUydoc4yCdfa1uLkkNkE6WtiBb7Bazjc16QpMV5o9YozpFQs342ghf6grgCthMfKy9v",
  "key23": "4NtMxz3RKB9QdrgDDGNh95F685Wj4Zkd2ztADN9jtLoC7PzHrASqpHiSLiSUxK5FM4ZFkv2fyFRSr6Fjr4MHyj7v",
  "key24": "4p2eQjBpaDhGDxaFYh3oCkN4pCVG8HQ3DHzmaNnvHmvN4o6tHmW7SdQwAGB8EkJfjMLSdPTJ7dgBiFheDpbSTnpM",
  "key25": "4c3S3198GrGeoczizYBBrZibBQcFu5ZMfkJqCZCBiqCWka81YyanbC7zQgG2Bkx7ww4Woi2MAj9PZLrABw4dwTXc"
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
