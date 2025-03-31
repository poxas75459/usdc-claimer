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
    "3qV3dFSSWoRSoS3ScnDPFji21MgRxaxJE1yrqpf1CuKbK7XUrMH8icKNfcZWxbb1o16DU24HKhLMHT2cDsCF8LNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7SLb6noT2PwjadKhNbgn3SA7jYzv2WPSQ4xo7A6ww2e36wwkauJfRnc9ggv77aiVZoLZRpP4oyVwHotaigwZM4",
  "key1": "5r5RvkueGkYmJKdLbRJx6kHngeiKy8YD1m8hX9rmVXwGZrnZ5m37jY1dPVTS4wn67dnwXKw19UVhPhvkF2yPfzAd",
  "key2": "2GwGU2yB4ot41DFiHafBqL1seWMqeinE7P98YGCg6D6amQTCdwAj3dKgioDrswpabCZUFKsC7z2FC1R4AQfJGZUd",
  "key3": "fA8aBXeyg9HCphNDYxSeiMahuum61DUoqj5gvsVZp2mrJLbHKfUN2iSDu6DRzK8JEgpqKMJNb5XRgzCoCLYTWnZ",
  "key4": "498sRjH5zSP724gfSyoR2ESQeT5BJfhHWaSWd82a8ta9deNyFFY2RZot8gjfnwpJdaDrVGm18SgUqV6ae9xLUC19",
  "key5": "4HERTksqysW2ZMjEBmx8YMJVRSVHXFANwDA9deJ9vFYGZgQHVYhAmy1rquz2DYkan2TUVZYrsGQ76FdsBE3XRGnN",
  "key6": "4sDUokXxSsP444oNesiRLeCMMtVvJYy2zGWTaXxXTWxtdjvRANHcZCtAUvCuU3Ard13jQxYjDFTMXNRwFeEXTaHu",
  "key7": "5mXAyTYmqNyUQYvgeyDvvc6i1sZkMutqRve3XEfQr1EbYjKjWb56scyutdiKHivE8hsVJ3QkA3KDz9Ehtzw7eVsG",
  "key8": "3sLLGVj9MTgT7ASG8X45jVScBHf43o3vKDnJdApUeZL5vAnzMF7PWmQBDZt1RwhHnyLJqCMM7ujeSvn5mT6kAXfe",
  "key9": "7szY1rgAfp4w4vKv9EExMf6P1UgSER4jN5nDw2JBsv4tVtHKa1UuFEPQ3urpdpNifTRazZpuHs8RjcHZox8GYAF",
  "key10": "5528tLygsfLQWWEQBMDFd6Kj1gEz3ovSZ12BWiLH2NKog6npRtXGYPTpCLobi8HFvMdKA9sugKpHFuTxmBNVaZfh",
  "key11": "4TtJcDfhz2AZJ9tyD7tewYD4819PrKDNz1Nyq19tkSv1iSx3APrgcUf62CHDTBD7z1BCZ1gi6G4rt4fF6Ke8hTQj",
  "key12": "4M1zcbWdG5cVfgWxY2f74hkt4GtyxUTEPGoVkHiKkJDihYaU6UvEV9Edbw9XQvEoUNJHmNonJLw4EEdP7NErwJMt",
  "key13": "2WZPtQNbioTnpoQw3G7R9KmFydPh9yWLrvKWUCcv9e489rxtZSqR8cx2MGnJngi6WjzYQnWJiatUqYGPUxY1cwTH",
  "key14": "4JRY5dJmycmQ7z8YPBtyPytR765UZ1KD7ssZHLEbiagboFpGmKKJfD2K56AsWhMamcAPoLN9gNLqBDv2v6kncp6k",
  "key15": "23iexkySnbsQmH6cmtRqMhSWYFGNhbd8RCQZ7QGwttTjUfxCSWxyfRujF4sqeKpCh4FpULhkzdGudufBoHYSV355",
  "key16": "2vfCq7EhP3aVWtgMndVoNs2jSC3PiQwwrrzexB2QjNFpmLrgYzZ9vMiNEhyvofB1d1dUCGZcdToikqTcZeeNwSfN",
  "key17": "652dzawpc3UeqeKmpwjxBJxikGueWtcTfGBgqjF1UYbk3czJfzufJLpwWNBZXdjUr7ECy6gwV6KYwKVsDgWwFprP",
  "key18": "3fKmxhNRP1Gm4FVvTjNPgwkyMkWj9oJde2JDyA4c6JNiQ543bXEpUUcX5eY86TxHNCV4dsgBJoRbSjuvPDBK6gDs",
  "key19": "2fDwLFiNdxgXMT2RR5D2SGhXN214K1DsB2EiWqvtW6tyM9desnrU5Zo5dKbF1TGh4dNs6vJgBg1fJi4zMHR44CYY",
  "key20": "2YtVManYVcPR644mPxNCH68gcAhhAruQfdWPRQgpbfExBSU57p8iuhNNJM5fFf6deSerx3aQ6puS24qchafFbMnp",
  "key21": "5ofoEhE3ZMaEsr1km84vwwzBfVWRaxEYFJ7FcfYUHWBjpi8mKKxAGaQRqszXcivpGj3xvBBVtDk7XzzKBHEGqbeC",
  "key22": "3NcJsfUNYtf2E3HbhPt1DSgKNBfVkhqgd6mLjJBoFxWDdZeavYNykcGUxRgouNgtHMKm7EucGbCRGAwv68NSCRUR",
  "key23": "3ZzcXtA4wPw6HCGcVd8Kiu4zYJ49XRxPhxgT6db7w4e7nvSPsJx4JyVVZo1GZqxrdUg35f1a3aCWmcTd8cyp5aRF",
  "key24": "67SccKqKx5jZaoijQd678LpprAeuacBDEcLyEpfYdpYqUb7ZnFWiYBwQZ5XDyhsf9T27mPGiqySRzQbcphVCDMw8",
  "key25": "4xcskHVrMZrWKoXFjJsPVwfqZkHhXMvk6XFptLab6bXYtynjYiKW1vrHn2ZfPK8w5JKF8yAxMoVbFueRGXE836bG",
  "key26": "5PiowxKAhtuZAiidB6tBAL9994d82nDzscaQAsigNC4hqWPvT4A812Sgf3SLh1BXNxEQPKZH1Gf2pr5BdBEeBnrP"
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
