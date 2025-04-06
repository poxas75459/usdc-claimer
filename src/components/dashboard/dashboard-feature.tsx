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
    "4Pn3JvQ8GBS4GbMDLP1JCrRJMSYTz6ed6qqhpXHeCMG31zQn3s4xSfyFHQTyzRJVCFNX8qB2kbxdTj988PewHZQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uyTE9zSGjxAFgfYZThCMqDJEgpeWsg78i1coWtC3nFw1vGW6Z44AiAWR9YKmrZVDzbp7T4S1NdFrEjwMCBaqq2q",
  "key1": "5nG9h85QYZ5gYSabzT26G3HpsCJrE6gUQY81cHmcFu2Cxnf6NkWJ8wsd7rBVDcQMMa3zwq9H4j5W3G7ZYYN5sT3X",
  "key2": "3khbrUQKErCSksJ5gh2urGtAXnyYT9jxaqYM3PiEnjjGFGZ6VLWXunU13yzs6U9op3awyes7CHRMeyeWLwKGstuX",
  "key3": "26FFG8ojt5mwz6mpeYrsVcAFFwayv8aQQuUq72KAVPEcFTYWRefk7Bimm4ytfJ3DcQ9gvecbqYFYhgjBCLSVZRJC",
  "key4": "3HhaobaFURJ84R1hvx73N4Cj8NkMJJbPZ21fKmjwmNDy1E1rbmny851ECU1N4VK5qg7nkKWTiprSeMeb5zzABCw",
  "key5": "8xDhMbAxovZotCdGQJLTWcXmKNTtWp8ZmRCNn7xQKwGAETeDaZByd9RZhsGbreDfsrYYnwaqAeagMj7JEQ2gHiC",
  "key6": "53vFHEwem1jMqydpe2fThuD9Lh97p8FsVTwi7M2CiTgRbN9157CLxB5yS5fQLEkokxHF94PiFTdyw5i8W9impddz",
  "key7": "mvr6aPLfE6Q8nD2JjM4oCEnPBnx7sW57pzKp1JDissZTGXfo6JLHadwedKXhAkC1u2e6YpajHxhNSBpU7BRu89t",
  "key8": "4njamL9pgN5ytVNQ371vGjy3vMarxnCTAGbEVvBF4oqNKzuvZCnrjQbcrPDfQ1eayYNk5XaeXN7YpJkadGxWR59U",
  "key9": "1oQFWfv3Wbqypv35iAccwfotmDMoXC8Ukiw5kCXz81tsy6rtqRuU8yK1w3FN4kdWKWStuRBLwmARRTn6xLSqrqg",
  "key10": "61JF2KeGg8D57UudVHCXaen2d4Rf7DGdrAeQFBgwFqpBXG6iQbQ7JNgzKZeMwetxsCNpRqadBQYgSgcJqD2NtjUi",
  "key11": "E6xz4ZqvBrQr5fjTjTVG4Q3WurmmDh2NPBVVDkf5VSgDYnqctNzrSowLu87gamUozmbq6583ttkL8Kz9u2gA8Wu",
  "key12": "3JK5zAsSsYd5z98VuBA8cQgNApqj62pLNCqVgxncXgfyqqH813pYAUzQzQmf6sfgknokQkkRbVoUZGVaoAZBEhtr",
  "key13": "64M6JujN7uEKXpN6PZPoMeHyrNFLCvSBjLVYoaUPMa79ufAzVDKz3tESYKh24yLEDU2X85GUNkqHhR1dn1g18ZPt",
  "key14": "nZhxg5bZrDEZUdijTFRtzRDewzmBUKFqGoyxjZ3G1JgiGKVsNwGfN87PYyvYQWnAwq4GkQGfeywoH2kjJh2KtjT",
  "key15": "3MdRqoJcdQGyvEP9KaS1mqxDTJenpUYgN5wcpPXzZgu1SdR3hCiLLxCkz71N2WVLxSmF3MXxHoApBULQdKjW3Vm9",
  "key16": "3FXBpXsRiA4Ey9SLfaFkg6Mt3c2NyYVetZXmG9hZYgoA7m9Lsogurp6KMK3E2Tz367tjyikeYicY3b5ehgLZZdF9",
  "key17": "5WBiQAy7c2GLEWWm7xKvyMLi1xm6owhSRmhPYuKLnuvCmkV8fnBAKk5wiU3q8JW9q2BPVMZcZnpbZ5iLu4VnsR7N",
  "key18": "3S9RfJvuBS1FPKGeyF4CK5sNDc2PRJ8gG8AmJF6KvB59t1m46CLV6WPnZ2j4P5cpCRSdyoKu1jAdTnbuVxvJ4yFD",
  "key19": "5KthRNw8qHXo4gLzXbAKYfo7gsXcniWCJYUFvB6pqE6R72QYfYKwwTWKK32XHQaojJtKZGfiKKypvUZKiSx2oMrH",
  "key20": "2mrB45wdVjkwAYigfMN1bXkVkcA84SQ3yjj3Z83wGfzJ32XGLohdE3dDa6LJvEFDAeQDg3HGLA5yBLWV9JjaMC8X",
  "key21": "orcWT6VxaEakdNQcH6rREz9YjWfj8q4fmTUXcLd5teteKYoSKwgWJ21S2tRSb3jMeG7JDWBEDrLEJBvV7H1xiYE",
  "key22": "4MjmbweEdJ2f72a8s64aPvr4WBCdA5xGmXDrQj7gutR6BHr2PcSzFjbDnnUYCc7JsUJrDead2XNq94qZME46Wa4L",
  "key23": "5rj1N32MHC8VzjrkZwrrvDmbbjaByVWg7yCL5VSywcMk3bS9h5HXoWebhJ2np5gvsjbKBNBzNVHD1aExtbXuRwUH",
  "key24": "4GHxP23PJHYrnJg1suKvcPo6Gjtct1XWtUu2osX3zNL2od2VGvpfogacvVG5rpoKdi3j7oFt8TPWsWypyPPfrazy",
  "key25": "5h74Yk4SpQS5SgizeGw4zBtn3o9Gskt4NU3qNs2YFQCCJpCyJiVF2oo5f3pTCvqStJmhNm1H1oWKGP8GhSr72n4v",
  "key26": "5DCzneFHPGPXADPWyC8Zg113SxJc2xRTRd6TWV67TTNj8kNdSFDwzFJbdnwJNkoTUh9JbPxzauEgDBTWKgqFAHJy",
  "key27": "3avbLrABGaAK6jLUNJ32PWS3gKcVE4XAViNiv6L9nSDDkYDAocPNd2jz2ZuMfVKv8HnySMn59yD84afayLFZNmWX",
  "key28": "3tqnqQQCZD6bKzP7E1uS8gQLM5mQHCx4zTRcLFa76kuhDGiQBk5T1cYcJkcGzZwA6u8b1YYGwbruPrX8AYjYTQp1",
  "key29": "548bchX4pDiM5zDoDCLNYHcaoM93DBanKYQfbpXAbs1nLGNceWKkSVbztNkVS1AtuMmYC22iR4PwzMuPhP79egLB",
  "key30": "2Z4rrAryGYTpbWi95L7yrc5YaRwAKwHGdFPNZKqHzCqKQG8GVKWfqvED5VzXpbCjHAQf9rT8PhNyQ882LZe8giVS",
  "key31": "4KZW9GXxPFFgMmtPQ3r6h61GkQD4xmCpEkRxXiV9bRS7HETzT4GJ4vd7wZ2BD4pU1pmYJy3BLE7eAr4kvFQreDGG",
  "key32": "3auK5i4R92oBh4sNQeV9v3DQrav2LtAUuioprE9ukUtJXK5N11a93KeYjWoQrNReNWQCU184kFjHuY28dY4GVQ88"
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
