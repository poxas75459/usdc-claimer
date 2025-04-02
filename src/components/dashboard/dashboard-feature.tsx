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
    "of4cFtceyjbcnJsD2PXVf75eJanRVyKrDyxiH7xNSY4myDcksrQ8yCjH47GAEWLca7WF5FvyifTCodAZxLPjxGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAD1F7CUjG7kYCNd56zLuKn8q61BAL1uLE7WFDPtwrvQaiCb8n83sm4u7f45hTKo2CxJFLSk6oiEWPVgjqVYBbH",
  "key1": "4nu3S4iUAJs3gt7JcBNzw4AfCPqg94HR6mbKh5wbJJ18pb42EQ7wmHe7WJ4E7W4asPYNHztmp4GkGLxmTgRKxSrZ",
  "key2": "5mQWig2LfWqvGcC2diMGRC7HDD3RkBReMuN6YUEipDxJVXmQjMjiBVeDkWaRx4dVgTWdRH7vTF2ivb5pjsTyHH83",
  "key3": "3FcYQBcFF7sq4uSq2j8c36u3PGtnjGQVQ69NhjMT5kmNUZRntwRiJwd1bJ2ixmAcyjGTSt1ZdUjHhCpG3Fnpcbpr",
  "key4": "4QZEqt6eziVJAH3Uh7wqT1x5eqsitfQCveakrDSD53tSiLcrau31UFr3yrGCysrxHu5P5fYF8QBbidNnSitUHKME",
  "key5": "42EgLUeKtbGZuspb3Nxha9F69hsVnkA7ahWiF5mJtQ4SJicTjKr4VVvBsJ7FSFC3L1EzEkwDPcupz5CNFsuvZf4B",
  "key6": "65phFtnBCC4qWGxu7cJUrbzCvcZZvatjg8uRBp5zP9Xd4iEBPzanQqKjzMx98wF9ENo1Hh9U2EeUci5eAFzpwVbJ",
  "key7": "5q4xkui7Np5eKQf8McTWJ2cnPrtVoS8Qpzi8yk4XkQF6QWad4WN1X6QBajhWtZHuVu47a4ErZmMFKeixBUboq9Zr",
  "key8": "5gMZVj2evJhFKXcEBeE6AKf6KJsNTMBfMRewhdGCdWZKjwzA4hdFEKZV6fhKr61fysfYMPc6nNtVD5118rcnFPd7",
  "key9": "3YUfVcu3k8vFwYPsNqkepKKPdtRCCX7E5e3KN4wwcLHa4echpXVSTUKMH2HXJGepEWyNA2dhBdWw2Gm4vKvqsBHZ",
  "key10": "5SzNmGu8VVb7m6mQaMXunkFjj9GHuGEbrThXfeKefH99BZ4XQPk2uemv2UEeWKrcn8kBTDQgCAJqCgDEybJ5ZMmU",
  "key11": "4vQtQihtxrTjq67eos8iLf7ecFLyT6i2LER3i2bvZ7qrqqZ5PZz8AhvsMFG66Z6ePBgZey3aEWUXmK56iFNQZugG",
  "key12": "4Y5Kg87Vt6vw5sb2s6PFk13Gu7pMQcRVt6DwVgjqGt5guwWP9nPHDdWQtxCrRhjGDRKnW4S8JJDsZj4vWvuritdx",
  "key13": "2Kp7Yu5cacDXnmsD5B5pzGoa7Q89JtNhdnsczhrP5kFg5TaW6wBc26ydrCzFWc1n2ycT6tc34dwa19tMWUdM92Ad",
  "key14": "ZZWEmjXTbLKMvcg3Fi21s3X92pfXjGpBr9U4AMjaGpgbUkuqvxGWBbJXRypXhBaxEiPSdYJqn6V5Lp82CsyzWi6",
  "key15": "27Fwi6jJCnvM4AjKLbVW7VKm3QNueFW6AToB8qny75XGjmU5JdwzA9HorNoerDoViihgmpQNsS2Fi9XDsQkdaCDF",
  "key16": "5BfrubZ8cJNvugTtu2VCWSgECa72d3WQgoxGWuypsWrQvqkwEXLxWRSUXaMycyA6HhvhiyRQA3GHPazGKPowhzDo",
  "key17": "26RKZeZanTorMUFVW2tUSdgzsiXRdWsxMyNeG8gm5hymZUjB6VZz9ZesmwSAr3H1RTqbXoTgh1aw3eHrKBeTeoEQ",
  "key18": "4WLiiNbUw18Q6TpSiqjS3Euyz6LLqB8B2fZ3jim3tt1KU7UG6dpndLiUQw1tRgniMmT5cH6FEZkhruN3jgKkA2Tj",
  "key19": "53q6e339SgiF9t5SsZfL2x3qoDqXxRuEFE5RDf7Fz8HxKF23tj7hgy9oURqctvvYHbxZ82YkoNZdPfkd2exjrU1F",
  "key20": "42x57WvVKUzBfQrGmq6vreT4BreHHEdRd8yatp9jLPFnmdPqxznapYb8d96e8vcad5t6nZaVwmyJx9Xr8igka1wu",
  "key21": "299jhCqjfS3Gg6SE5Jc98extKz3LgikAfU3ebmRHELKtWRWHPofnzQPkRjynSG6Ahf4F4YgxF1Zv8Phj4QCCG5ET",
  "key22": "2qjLx1BTNHreicaCkcL3TRkYvrZEdc9Bxcqo5Cy8ePpsThQo34L7AL6WUyQBb2MzSdcqtG11eVGf7qP2CpZq5NiB",
  "key23": "5skDh1X1so1Yi6dySV9QyD7YLpYrFDjbVcA91sNff8odeFjBsnWTdApm9qTFm17AwPU6ZyLSng5uHgsbPeT1kTt2",
  "key24": "4BBvvyRMvaRNKe2ZNZPs4hutkSo9YDgJPSm7F9twYoqkhXB7veTduZCamcaeRjVFbrCB3XKEZ6qcaN6q5wrogmGb",
  "key25": "3SGkkTbL5EG3ymq1922AMGwyDghNhMkggSx6pqRCLRoTs9v6HYfbn6xYX8AStrkBHQHDAaQz4Mxc6uC2iMHyy14J",
  "key26": "zhPnvxEMbogn1dVDtiRFjXJhfoPjjCwtjXRJsi4vFsmqPEQ6prC76GqPVfA1tm2EoQyMUeeKQuYwtDwesUuNh5z",
  "key27": "3uxH2JBMka7hkpFRPck1GBgiMaBT35Ba5phTjyjMEK9GKaaDL7jefYUBtGnRvwLwFjoGv6HPyZoezZMg7esdvKZR",
  "key28": "2GaWhq7rufMwviPu4wxUayZrTNzEyDAQzJBmRGC7KvKkRpLMJpbtG4VSvWtkWwd41L2A5oRp7dWFyxMS4YhtTMsX",
  "key29": "58FQSJhodMkAponBUGv284Mtt5wpXFhRAkYd1NM696hyaUuRCxVQmZ74aotL5jYxLJxFo4b6jYVoETjJKDnPq38U"
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
