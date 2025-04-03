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
    "63VNW8fNJ2v4exfKHmaDvKQUqCRQCqHmvbcxaNvACp3yjFvYSAmceDJFFZWgJKsmqB231L7DNQqsLuvMF4rn9tgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATvdQnPLjoihQasZYWP7jQ5QiauTtnNy7jtg5u7CtRmjTbuheWDp16z2exNt2B6U7yWiU2TaTNZqDUQVJm7cwFq",
  "key1": "2j9ixLsYaNYqsir46NZ4ChDmnpnwQ7t8dvoyhFR2B2ajXMeRmN3y9aq6JnX7BMgWwsCcPHFyz3rYRqENb73Hp8ih",
  "key2": "5EQqqnb132XvNqWpRg6Mk9j6nb5D5jF8rr9ZRjWPF4hRwtdB4pEdyG26bNxvAE5GNe3TutAf9CrMf6hUYwue5WUF",
  "key3": "cCQA3TdqfDoCzvYwFG2Y4hrYQJDbdp2twCTKLr1YhstLzcmtXXiACMELktybMSy4JTRr2Zr8V2fZkr4EoFJyDQR",
  "key4": "45WMZtKZYk5m7S7bedYjnSJ6rkbmXUdTRrH5A5QvFYCfHQkcUNM2LXJw1TCF2ZxHHUpciUwUUarjuf1w995Ntrd9",
  "key5": "5tgPpCR9DTGMkq224LX1HhqHJJ3ubCgj495QH9czUoezj1BCqx9W1rcTX89yvP73t2xsCFdBZJ2o13RkL8GLPCbF",
  "key6": "4iwsSxSzWoMrqsiXpomRsTtWNA6MJc6LwkD8WhYZaURPccWFxXuuUf6AWKo9YghfNE8EthxeKKpaW8HNM2a96iqx",
  "key7": "2W4dXXhs8ssWDLpYEjBtFURAStUDcSQApb7F1qggd4VjvMbrCdvugZxXEbMuPq1tNEcHgz3kVgWaE3LDqyXEwBfj",
  "key8": "4qvgrrncRSgTFBUTr337Bj9TPCn7CvxaAKDdpxUfG3NrGGtNaAHgHuNZSPmemMnunZKW8rBMCnQhZv2dxrRv67Ny",
  "key9": "3DdMB1Yuf81yWbZDNuNseg4wCVYgPeoe4YnAwUDJMovmFfD3x1WjgF49cPDduhZin5LD1EowX9LQjyKTYkz6G9EP",
  "key10": "fSR4JGj5rULDqNhbSgQpLrD3zhzLi5tTJrVLwAQYKsRHCUstTTRvL81n8LutMtogf3Pr5NF3Ff5PwUzSSynLTYb",
  "key11": "qwEhxg33qZHstsLGW3Jh4AJzcYZ9heziRwXnZCjeByWbZ7geWk8SiSL8iiV84GRHFfpjcKbNVehBzUXbkdK5s2h",
  "key12": "dK9BZsoQAFbX16v9RM8WmbgZL8R5SwoQz6jQnrg454tZrmCYUmjMM9QhiDHgPe8jthhCaWv6HGYCeSEnJVLuu3i",
  "key13": "5T8to4kaWKgVzAPNRc7YffyXjifpDkfqV9bVFrKHwyYUsKtDyABkjFbNthnXVdbQhQfuRHJ2LqTJrE8W18yX2QWN",
  "key14": "5ELAxFwQTT3ue7PoykCepokJN7qfiUYmvKjUNxvvMv2bApx872Xfm4gjanWGJVuHJhu6BtXLt9XjMhJ2hhm4QUn3",
  "key15": "2ZfMeKkTS4vhSnKFstu56Kju4tVewA7byBWpRQNFkMuHXKMi19T5HNcw7rPEMiCqmYuKdMbVb3EmrDesmZzQLV47",
  "key16": "61oCYontzBYLEHDds6Bv7wSksdxtxYTJCe3GyEmVyARCz9gb2AV9XGYM3VDBAYDgVgC3Ei1uLWRPq3sxRrjAiHK7",
  "key17": "4DBHssdCUN1gy9QPJWkWqCugyguLC4zfv4XCxau5gW7qxP8rxgmpHB3etzPcEdrHB4Xr3VVBMZKL83S1v3tJppMj",
  "key18": "X7FoE8DTpRE6gRMExKMA3PErLCUz7s2DNBbXTPJVgFaXyf8jbBdLicuAhsDgMhyHmE7XQ3jWHQWnNS64JuXoJx8",
  "key19": "4Gnoq5MvdS4Rfwrz2nHv8TcyqFsFDxk23MXY9azkZrHVUqpyhGvBwVeKXPZa1mE3X3PnuqEy4UwSHAh1RZBmtqMR",
  "key20": "61q64Ujeaex4EyUEQaL7VgUBsDZRHkyLAKmZ2ifha5K2gWsbEmEd1G5ghFGtq7pMh8A3vxuwUDaZmTiqBgC83cWo",
  "key21": "4LFvWRNdgyKjXrtnDVMwMgBMQK2cvGY4arnZ6x8BeX3x1piNK514upKWLUAp6QUg55mWtPwWTR9xeixWEMKkymBV",
  "key22": "3mWZPn6Kz7UrDuYb72qdhTLRKr8TXwD48hGtdHni4953BGAXKsYV8WH7dCn9gtzmYWQTJ6wUcJTzbJhKk1hNQeKM",
  "key23": "4HHVP5TBTYh15e7CWpeu6Nbpb1e4drU9X4za4yGTp1N5Fgcw36xz6L59Z2B9hUNqhGgGkdWKEYzQexsdz7EyTLQv",
  "key24": "2WoZQmAAWd6Dupsv14kNF5J3vwxwCzN9BPeHY7GBzAyNFWTjTjy4ceXbwphs6GNGobXZ63GpTDRooz6rwDoKNF7T",
  "key25": "EeLmnKEbyqhbkbVpiDoQj8nb9wQ7CXBPcAhDkVQFPXbxTz3x6jbTecfrdiSYZX5spPBj4AbErwipurYRXoPUCu7",
  "key26": "2howK9FwhchBYuaqVwZeUDMBaz3EUZw9eYkhXcvHHSks5mL5dcEA9rWpLzkaT9iPGks4PduzRKG1kBGcZRjxxLwf",
  "key27": "GYjhvf2JGSKHGYwd4yKi7pggEihHYkQKFMaJzo9XajLPYbJ78UdRwc1tY3FQoR5UuwvWgd28eXrvDwqqAFVndNJ",
  "key28": "5pbZDRUzJ5g1RTV1b6Bj6ro1WYihyv3JJZNW4CZXBTckEXxAnFyQbZeFF8UJr12Q2ZSu3yb4PuNyFyJwQdMwi8Gq",
  "key29": "2umidcukRzDJN7JrNtQq4J1GscJQJVUx4MHk4Jc2HtznmEeSX2oci9noochavSkq3U6dKs3Lq6MhJ5UqMfXywW5B",
  "key30": "aaNnddCDLcisjTMxyL6G37X4sHicGtt7FR14N3GwLVRSa5XGUZ8fZSrmjubNgkFVuzBdR8rnbV5fn5x4KiySob5",
  "key31": "24PoCQPXc1F1ePC1fDxETAvJMVdPtQnU4djtXqbVt3o7TYNGb7eieEfHV2z1V2r23DZELjxjmnpkcL2XzS4UYB3p",
  "key32": "3Uko1g2u7NwJ58QfosTE4sD69RjVrPpnF7mfSMRP3eAH9BV3KKRUcJzbBcRcBPSeAhAHMLAV3nspnLt2cJAbxh2h",
  "key33": "2j386wNhqopRUSSBZA3bSY1RyyWdrmy9j3xdUPk9sD2bDjDMaHn8SmGPSgZLYVJSKiHPac8rWAoDhFiusfQkM4Bo",
  "key34": "cjcR4eReeQwuN6T2Leiu5wigbCBLQuZUXfsGMhhpnC23PrJVe1dS2ds3JHvtA7VeDT6zQ36sgMTb6GUD3j3FWPu"
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
