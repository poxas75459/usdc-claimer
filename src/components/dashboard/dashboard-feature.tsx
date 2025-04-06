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
    "65M8AotszizNWYFzvarHQNwmDZwUQHN6ogNnsNEy4tuarkixB7KN9rhRUaHskd7Xv1b5p2Hwek7tE9FfBoR91k5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MwrLDJDZWwzTGrG1t6c3Y4djXmcM5jU72mE3X4pjgkRCXbvKWDLp9YeJE1ZK1LBPNzv9vy4THborSXZ94PDW1x1",
  "key1": "2mPnwsV4y9v3uperbhZ21FuPSP2fVfJB5WsTuBSYkXshHXGWTtRqK4m4ZV1XXZWNct8Wex7sWiAroX9vnvpNWJr3",
  "key2": "5vfQYwx8hhqcCRBHFE6vFUdhecFKsD6MRjm3mzWEWr1DuAqWXyVTd2axGrz5MJjWzKPBQ7PFP2WCQnvVjKqvXcKo",
  "key3": "4rXUFhrhGg69sg3fm5CvSADoENgYwRDXuhAHa1Uz28EuseuY49u7WdiDRXyVkjyb6JuneZhR9vqbxAp3bSd6zdLY",
  "key4": "u1pmjwVmEMrp8UcYBq6FHagZ2mf7M6hYVVP4PwJ4FkoC7RKBVYtnzhWVR18sXJDpZeE4GLnF45gg3JwsiUosA8F",
  "key5": "4MnmQJaS14xX4x7UvESaoGxEqoye7uTamxd9mFFtCpm4V8RLhUmrwufYUkSxsPUH832i2ztpSrETdfcKXmKvUYpa",
  "key6": "4zGLU2eA4wUk79dVpMqvCzzdRbaJDkj1rrxNEnw7fjzcuRMsfW7esuscDw44B4wDenrvAk7TNzLiW1Cwb97d4X4k",
  "key7": "4uEvzMyfuzBg4P4CaELYWvETzMy7Xh6tywJnjeYWfYiFZpwoaV4xMpQQQyvpafvrJvqDFWXV116a2Rp7KG1eYdZP",
  "key8": "5Dh58o4JKm88HmUUbJPpMuzir7K93oNpHs4SuHoatyjRUBvQHBKtdbZofSDjgUjR9AT4Hroxd9mGXLD7i5R4w3EL",
  "key9": "2vzstwtQXAhhzgrP7e1nNLc8a9WHYC4HPXtnwfFBCwpwJ2XTGSmYQZ3zrKrtqijNFyiPEeYkfDYtB4rGqB4tZUo3",
  "key10": "D5oe3iTs4xtyPNYQVpi18jHxaFUVrVg5vfp84f4zdEfKmK5MFU5D7NQnmhZyj8PomcFAYBHFUDs2J3Nqrs5zK6B",
  "key11": "3aupWWNqrBuEg1GAQPsmKe5Vn9ZgMMh8y4XRX1EJ6GYDXaoUNdNjyHs1e7QJWxRMBUXKgAsmTU8XVA8RrARVL5f7",
  "key12": "KHfzScn4UQYiUaYDwfHWfsTD1tHN8exKwHQA4AztsLjtny8cVCuS7UJsY51unSiExptyZmeAGsYeVqycPVZ1vYg",
  "key13": "3ZTTs2aSDAyDun4Tm11CiV3uoaJ8U7RgjXz9myV5TkpaFmrVk1gkfLsbDcxsWX3coFzPtQpKQoYm4XL514FkMbQt",
  "key14": "5HbdqYTm8Cj3WSq2gaVKduBzgqE57Lbn576kMWPNTyvwF8uBpvkyNFKNMYPjCajeo1kw21KCXGPDGyDb4zaTMBCM",
  "key15": "45vTrk9ZZ7XCWiPk5cVDkz1k2HJ4P3kztZqYkFiCoCmkRgZHgav7LtU8DWnwKiTgFhYwHPyW1yxhNkcZ2YamyYLB",
  "key16": "joXnb21X4nVmoZWJcEkDBFhLC3Vo8qD1WCP9a8MJK32Vxag3DeQBEs53Qc8H5DwnhPKCarg1EKpcLhNfRUyXTrk",
  "key17": "4fUBXNW7fc8N6vKcZdKTLAojyYkNZ9ba28X2tX4HpxF4Z6wZ4bkCXk7zv7iyRd9bThaG3FV8crUDNgWRkF31uc1H",
  "key18": "2VjyokFMuapPdEi5jq289hn3pcfuATT1UgPkScWnpGnvxhKoBs7doPNCdimNkYhPfAQocWrxFYBCm1D2WJvJjNrS",
  "key19": "einyZfgqCyoRokRyaJjW7NF7xvw3YBAbnKJTHMkyNBULdTybbuy3CTmnZptJUK384GL8zPo3voy7abFRrwgwuyV",
  "key20": "5qpvE7FU5baVPJoBneByDssTx8L6mDoynM9vUjdhVKbWpsiK6hMXxedoiX3hgyn8vrKPwkPi8v2HasyHwXEvYb84",
  "key21": "3wPUAc4bB3FfGQhnZ4rvG5hLXT41XEf1VHuVvNz8gn5RFVZtRtT3jFG1G2ackw6gDDoH233gFbDfz9tXnaobYbWW",
  "key22": "KjRbV6NttgVZqVENNBkqQYQhLNRSs4CyN7ai2yZZS28jzkAh3wn57QzcT4ZDiAM4fub1PnBw8p7h7brRgeMG4F2",
  "key23": "4F9MBHKE2ejS7QLNVykRKRydpaP9fVV6BvXfnWS4w5ioHzH5TzkwtuGF5xvbsMSot4KVHntPLZ8gf37tLwpBX1Un",
  "key24": "4QuBmPxViWgVzkrd9h2Vd4Eqm2XmqxLYW5p9QyucmafQZ5kPGvHVezApwj2AbBXPXtPVmwaYPYx3A71VksMSnxjp",
  "key25": "2oR6mk9jNdoZ8iSoqSdpggbc9uw6smJuEfhkFdCpUFmf3PHJRUhKgNoSyw1wgikQmyCEqW1qLhbZZXkyAkiPM4U5",
  "key26": "2Yjm9wk1HxghNhv2GJ1ojLhYpjrP97c3QoFpGEaszSjVsajjzM5iWNv6QLrC32oxMpHQcX7fdQpsbsmmjVhb3hAC",
  "key27": "4XnG71pRv5Fgr4NKUax1b8UBQ5mAkLuzZqCEjDHT1qfJzNnuxpWUmQqLCPcsuCNMSSPnCtrmjXC9Xj1GnQCsYRXf"
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
