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
    "37jcJXFeWsZV9ZmWe5rvCkUszYW18UERjeHEcLHgtx2cSmos6CSUfPVkuYYDrgwPh1kZUFCShmeuAtYo3xistbfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w1ovuVvwDmS2wNp5MjtYo7ZRtLFLDB3ELH1HjQMYFhUskbyFTwqZuGaHdiPshBZ8TaPk4WF3YrENLxTuYVLrTZA",
  "key1": "635x5VzGipMJ9PW3ow9LDSBhpA8FmKU4TLeufRDfNQbV9aCwM3j34Bt7Ea2zUzTHf3BKHSYMpFP1iqtHTVfvfskw",
  "key2": "4NqhAdqisaLnoCD6S8K8GLe4KHmmz3bqnpeaRntVbtdktJyPGZ887tNeogggSghf99R71MSRhLdJ9cfCUH3Le25E",
  "key3": "3acivECqRYqXW8GgwzJWjudHDNSg183euHiizAA3GYhVBDhU8JLeux37Z78ts8EL72Q72q7kCVKwaLA9K69HqyYp",
  "key4": "4yJoUhN3vHzRczgVH2Z3ENUx8jWgcynNYgWhX2MLDzQohKZLZeTibjmFZhzJ3VwA8Cg88uQY6YgsNqMftHndgAZT",
  "key5": "3RaG8X1GJY4zUwk5EBurDpaE4ez5xW4puDP2DRNoZSzysYFi6xNQM5rK3LJR722hLbjcHtNafUXM9xJWeHfBnuFz",
  "key6": "5eCgzWwHcAdHBS1at17Za3F7s91qK2F9HZXnuJDuJFNnNsmQZAChBj7ByRiZ212CV2Ngvrgc99D8AFMz8jwDK8G4",
  "key7": "5EWE6GhoPfBeYfZ1dwWuc5HCQcu7qe3bxxerx8E7mREkiUJBhPVybLMdEZbCexLMfUCYozcHjVqpkiFodBoE36cR",
  "key8": "3Km7eBXYbdUoGQp1TUBN5iKGTmzduBWG52u9o32TuKRjpC6MV1eCxY2eKnRDJhj3Mr6W2i11u8f4d7zMqYCkDNb",
  "key9": "3U1c8oFhjwS52A6oivS4F2KWQJg5afhrEYRhErUfdhrtptqLon8Xi1KA5DGcJUp8cuxPvNDoeD8BiHXBh7ydVPLt",
  "key10": "3gxawiUtzfaraMHaphzXxPQWXQZvQ1j9qhRMSVNoEmu5JdkH6QMvNdpuwhHEfoinbj4U5Vp2PXYh19gbfEAreQtr",
  "key11": "42EoV8dmTMe25D8hNicowdKi9mCiKr7xaK5C3rmVwonrnyoh4Qksmmm8qkdSbM4u9QLX6Q198BizEX6G43wF6Ryf",
  "key12": "4YM2ouC8nRifLFkLafsaNfU4xevA9ftAtuoGmqTYXuUPrMGMKhDpSuUCTmKkRCa9SdTS4iftjsgFFccd72S7uxo5",
  "key13": "PsEq7M1cGe7oEP8kzUnYmxfGEp5kgRjsJLaryCoaubcYc1JurqtoruioYRwujCPxLTjfVX81BrzEZ59FS1SxGBn",
  "key14": "2ohgzadNfQpS2Qzt43fB1GDHVkKepNRLujBzzqdx7wuBJNA5FGywGGcdNisYCaxEFxBqi2hjRJHbqWp8Sas72jXa",
  "key15": "24yQYC7cLtYGbtj8CfGyNkPiRPJGRdh79hHE9DYEMiyHNwy2cDjGTdvAH6rhYWMLpt95Sq18UgfgJi1g2jcASJiQ",
  "key16": "4yC7n2rYZsRhLE3jGSLLGzKjA67WdASWF1N3CTw7895yaaJhPU1p6oDEZjed3nfC1EyN9JU2VjiRezkbNFxMAj3A",
  "key17": "2MLdALdKD7FE1YskF4UDkE19iczxAVz7w9WupX1f9TRhdAvG3qEmVT2prLnkqt5ShoQsyDyFuNbkYPb9e6YjxJhN",
  "key18": "4k9NAYKUEWvMyRgr8vYgiUg3ekW8RSemauVC1L78gzsbQi5YhY1Gy6oUrjgREMchVMjem1jGD3AyjGWeSASBZCsK",
  "key19": "5K8Zk2EmW9nPynjeVifRa5L8a5XEj5XSybCWTgh5B8THe2wSYs5qSAi3SdApq6XvZq5ySw4dTXo6LHS6JUQHTu8R",
  "key20": "2p4t2CLeCgvj559hPQtL6fbeZCdrCN5HtXgfCxbwdfUJEpHiRNhsYVv1nS6vmRBCSw4PeUcm25ij2Xv81Q43dqb1",
  "key21": "58XYYSofvWrmQBT6UTdWCLZjK5Yu62LqpFHSsX9SG7xxCPbN7F2dkqV6QRnsLKDv9GEovrgRxzw9mYGezZQC3h8J",
  "key22": "5hyaTz2jdM7w3KzTW4HuQgGnmtPoeeaDAsijVYps2EcEfDTp3rkMQ6D21fxJSTNZvcE6yazoYLjmDs4MEvjd6JXE",
  "key23": "44f3aXMVq92Wtui2CPCXcww5sW6puKFq8fAzxUf5CrSLoQiVvW2BQmxz6xyXpYdmubb6iD8nSqpzwW7jD8dpKohn",
  "key24": "5j77ovuEa1MpEDjUaiMqotD89DRNjxTWxmum7oYTSyX2Q2WKwUortz5PcrjyRFaL6KDqu6oLGbsU7ifg7K2x8wiD",
  "key25": "5wN1V3qdP5cvLUbFKtNxZKCEpkV6vWEBpmX6VPDSf8cvD8rbv33Uy5vcy5tCrRsYzFU52a4RJy7Y8R1S15NHUjm7",
  "key26": "2wr6QHc1xVM9dGpAkF3NFVh5R2UC461GgCZoqGhqcs77GfgyBsGDGYaxDmkWTLUCXKDHezzidMraB8vCZv8qq7V3",
  "key27": "TNhG8cTznsXdt4uFnUnZSBLeUqfyAPJMjC33RbcWCzaRVJ4P8fwJghtyTLmNmSwzq68RQLSGxbbgGyYc56xp69W",
  "key28": "31rEqxxxoHzkXtZqjtkxo6zLxtpDxXkkqAdpbLBXgG3SMYKp3LtgyYMLFtjzdBJv5S2L25FwJP3aUxqNLZ9n9VfA",
  "key29": "44fQuFoWREHa8zP1Szh5Ftet5TFV5hyKipyybrtnb5DHNnLjLa2p7Mx3hkBNnwCpoo2k1HSqGfeyFC6DzWPoXz3N",
  "key30": "5RZL5kFzpba4WnasLk78259guodKhFo5j5FL1nsabqejqwgbPvcCh3RiUwWHZjncp7kgJdBPjygoGEzSJW7RpKbW",
  "key31": "2EXUmeh4Ja76du6CC1mrvHfWiYrP9uSYbQ2mvk6QFrAkBa8PK5RCDNeqVaLSmEEs377vdkV1bzaTE6tpcxxiyYqc",
  "key32": "5NCzeKEtTLPzjP6CGBphU4NyLhtFQJyqap6j5ZcfyRVXyqWMb6176qZNFmgKAximiN3B6A74y9huHyymL8PzUp1X",
  "key33": "3mFoYY8WzMvhmohJBqv1oFxp38T2HSWbe9Rn9pfPZmCqpgXs8y9wveE6D5RmHDVN1gBDMjVzGap6MruKfnshWG6z"
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
