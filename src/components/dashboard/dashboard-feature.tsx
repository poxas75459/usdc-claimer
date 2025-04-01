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
    "36wPVt9HeFFD5JaEcYJnW3XY6JGcqkFJGKbTVHikzSptGCosHhV28i89oTUcQBLETcS6Pb8pJyzLuWsf1LXNr9KR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DFB5DHVKKoK36D8qUfDWiqNHh8qoDoAAumCE9iAfZkzR9J78aAfm7P29LcKRhnfJW8gPNjSRMQPvPt82tqSHeef",
  "key1": "394UbuEFavVi1BkoffMh9g8gXDJTrKf6XThoai3nrtPP24nmPyTH5byDQEUsrBRKwFQqEECJVcvWzt1Zz18qyhRh",
  "key2": "5QgtRgGUW3GNS4Nnu6PUFFbcLkwfXep9rpqocC6CGox6tpJ342wCgHymGo9Uwi2Ep1dNaJvrAjGmuFm5zNgEhSiK",
  "key3": "5imig53Dmv8FyxFEwWQ4z7oWo1NiDsVVXBqw8XSuEDzYVm7qfBWA2PnhDtL1wWokeAwGCbskYPp8Csv5oar1a8cG",
  "key4": "3YfQsLbfvHvQQBJe1ZAgshVDe6fqgpsHb5EivKm5VF9bxekrjQrTE8QJZWqbBhR9EBGyiYumAoGb6CwB4ptYvhbm",
  "key5": "2ongVRpg1UwQ5oVw6jArrbWYys1Uvz3WXcoXhxqkk6PRrvGhX4rxKdn7pUdXiYyF9LnbJPc2sGM1d3idJDFYiwQE",
  "key6": "4wC7ZSK5FbC7Yo29eRSgLRBxhMh2LnuGoWSntU2qet57WK1xgrxV96vjMnRbZ9ZY2fVTWM7ayPNTeXs74jXYTUPx",
  "key7": "3SZkJGd4aeFJUfmQ8iNZtsuBKEUrRtAcVqULWcJAZJNruRUizKgijWbcyw6sFXheQFxLNHFRTwJbT1x1UeFTsDxK",
  "key8": "5Z1yQGusy9jyeKoVztCjxkjwZqY76yb2cg3ixwGGyLfdvpaUxK8MAhzseNKpLeJgiX6EDJbsmQpGxEsb3kGQwu2M",
  "key9": "63jLkyEo21iSk6dy9szudFrtPwSavvoPwd2BKxJDf25YYr1xcMeKGzsV55BvCnFfWjZGKKqxwugGAzdVKfPCTpqu",
  "key10": "AkGh5porek8VAtFRttcTsuzRJ1A81of7hv65JuXjzrPrABGtjsdwg9254JDPoMRLNjz7qHoHjvtJoVJHS64i8nU",
  "key11": "5MyHxfBRHxsfeV7wmLY87c6wp9EHnetvRL8HCC7nPHGvsBTcYgdMz6kEo93vLPUHYhEpMgYCGz24NdAVDCXcejP4",
  "key12": "5xVa5YeFDmxfPZgf5qJME2uyxiqJiJLfT1MmuFPaz5togb2LChsXSonbKzXSeUstgTHANBN9JuNJuCzJkx5Lr2Du",
  "key13": "5MF822YcyakPhtQdriMziCd7GoGduCsX53AiHCQNj35K4ZdXqW52W4UyUxjfxjFYCd612e9Y7GemDmSJQcy7aBTR",
  "key14": "CdHkfSqCeeAQgbFkSVwsHYAQM4vobFDPSDuVXedCjCfD34w5rmqiTJMAsE9mS58A8DKuE7oe17f9oZT2oLuqkmJ",
  "key15": "5bnw2AUhDtHo2hWr76oqw3KgDdGWiNee4Q43YZXQRniX9DGvYQjAin8WyBMrX9AokJqSuVBz2gLGcEDc1vKUxx6k",
  "key16": "2DCWtqKvbxrSYB2d1HxDKGE9yi8u7fc7yh9A7wkzZ9BgScRhKF7mNc5KdsCsZoW3KBpGTDM3BuEuWvS1zeaiNHXF",
  "key17": "2w1brZfGNs9xQ178QLr2WHpHrAhWYmVwTt6taRuqLBmzVtxqi6m9xRTLkYkggF3YySA9hZTeHYtWGVmPeAUvKD23",
  "key18": "4YarCr7u1Y8uHaLvwbqt9BiCwTuKoj5X9oaKfFhxD47duvSmt6qsNMuzBNYrgefqyJsHvn83MGx8EPUSW45mm5iV",
  "key19": "5bot7qa9FFq8JsknvrXJRwTRhC5ughrFTSjmLbkK74aMDHWK3wthieXe2S6dW5RovBTxjQrRyFXdVZpxsvZrQnkk",
  "key20": "4DDwt85g1FxxZvLxYtgaBqgPKVCcNtwnDdfHKe2AFDWvsEHGQGmfddo7TnxLf1Dz5pEiFTQSy8WbdCHB8ce5q9gX",
  "key21": "3FBCrYX68BCM4Ye1QDxTfPx8Z9qysErMKBFCBRyajNZkrDimZtxXd7FoBAhSsQByVJ4t4pfo7G1EsgY3GwW4bJNM",
  "key22": "4jEapL8L2MweuQRVMy3neP496ryaxAugtzvSUYVJwL7LnvfSPBHmnK1UR8rPGQPAAgVnrNtNbNbhZUBcAHsuUw2Q",
  "key23": "jDJTHAG8Bd4q2K2SWi2b3cf3JafkbCZyS13qcwZcxugHdcoNXdGSkd27vgc5K8ixrCRgo9XvK5Qviv1v3XfJGH9",
  "key24": "3yR89gyBqtB9ZsEEkxhfDqvs1JD6KHspoCcyZxSii9eJpyrqYVv4KsoTAx85w91XX2WPVV8xiHwhuMAHm9UbvmKf",
  "key25": "3AGV1DkqetQWQ7qmigmyJvPeZRvW8aTwoPjezvweqJD7AMAAibYSAUoNExnEjCii8EyQQDFA9tWakRJgV8VYKkoY",
  "key26": "2PxSVMW6JwhBueyqAyHrKqyWSkgUtRFaxp8NZ6KVzrCKBaYr7g9KkHAj483unUu8W6Qbk1CmJCLrU8YNMKLogKJB",
  "key27": "37hrG2BqnziBBAZJfvBbmK8UWtwMde3nFzQaUobdqiwWnQ3J8QyKqB2YZjViLUw8aRHWCkbYB9w6ZkaCamfXvLon",
  "key28": "2p67abnV7exQXLjHi9vLxtTy9zCGM4uqkoyAUYgRzhow9E8yHyvph8fjRqK4cvTyMVC6yNkaYGM3fnqkEKYWyqWG",
  "key29": "3AzDAbfMmRFi8oHa1311HnSWP3Qgnt6CTQhoeexwAikugxoKGkYhN45d9PSdY8NVV6yFHiAAkUhbKwxPzbK4ArcL",
  "key30": "GYeHP4dBVoeM6RkSsejU3GXBWVAgKB5cjbuouJLatu7mKShguDSfJJbnYF2gnJnewaDG28jHXUHU7ujJLEaqVPZ",
  "key31": "3PWsu1NAuTXdK4mxSLBpi3tdMqCdwZghW6ZPHYMif6BLcEFrjaAbDqjGnUJQUXHs2XuQ7nWzCa8wVEhNzwYEUqh3",
  "key32": "4A9eSx5R5xGkyjvw99JDFKBBL8KXd1xrdEz8vfEt9DMvko9YCZp4Bs9FjjE2zvgSydNnoURLTodEv8NeArnEoofJ",
  "key33": "59XaaDFAMo6ABanE4e7o7ya9nQCMZcLkEE5XxmozWvD6JcKYqrqbF7QGk6tGh6sGXN6cxwyjHEvqyAr2cNvnHQWE",
  "key34": "3NdNjpasswvq83jKTTynyaZXuYMuc461HRK2Zci5ioUYW3wvogdszoJBXkviKcQ9ZCz7H1CPBnw4gKhrMJcHJHK9"
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
