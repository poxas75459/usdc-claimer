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
    "5yKvBy5d5c2EprBhjqbF1UVaBkx5whYFJWgpxNpqPexBSLdcrLcbENTzqcMeW6LmFADwv2txa3a7ApwvAHDRgyo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HD6AYtZAzYRq4VHLkwNPhEZtcLkeJ877R3E61eb9gws5Ar8FRoR9KFEfAU1tAKBkkfLWhyVEnMoXf4EneH88pZu",
  "key1": "4umXJe2VRfHd6QMrKwTH23T1NxLghrREwFR7hQ7pYUB46n99xFsAfe2y2vB9driHPBDNr93Wq3MHVWWcG3xNY3XN",
  "key2": "33VDkHiGwiEiiYvfPc1HFtJTsjtzP1hhgFpxRRA2aQcTqxDBVFHK7h9zty1vyvWPqF9pBYZvhBrTxoKRgmTtK1QM",
  "key3": "2iDyuNEcCUPMp3qQU73VFDUbuFSsnYsmEQ2yoRwwoRpEVsQjvfZjfNkW2VNfMzhZWa7MMuU8pL7rxmMv8HZQppUN",
  "key4": "44uXNaWAo484i7bzQDwhz9YxbUc7Rt4NeZHcBsapYLxpgdjfXWjZ8FRD51V9sT3W63G93BuuLx6wdiu93hZwtqRv",
  "key5": "4TtQS4kuVuM4goddYXnbP7Nu4PBHLqA7sV2FqWycrPv9SwpYBXyXaQrtqJXr6j9dhZe2UTHLqbYiu4rkQADzTLSz",
  "key6": "5xaUaZA9R51SrD1o6MEmzbnCk3FXDGHpACkYSgTkam7QUMNqPXgdWyek9RBvRgW9osvSRPdCo3sk678ySXYHxjDc",
  "key7": "DTGvHVrqNuBJ8ukcpx253kqCUBzcTWLE5MbCtTvFGEYSXttWuhYHxrmbLHP8q5A3PxSyfHPFPMFjgZHgw4xjY82",
  "key8": "PBRi9LucW5uuBMEpuwqdU2ZvHjucWSjhqVdVWtaphdNGA7DWBaCx53hkh5uiTXENuSo1h75yqGzBS4pxVstYrwM",
  "key9": "3ogZYkhpeNUHPSYWKQsHJ8Jd8ZYdyh9TZknRnnZYSW1PKe1Fb1AHiXyqSjUo8a2aK1hwqqB7LGuKzWBG83osS2Kx",
  "key10": "J4xedMWUoXXqumiCrNNt56WJyMkyLNwTyNpzm5KKHah4SaTc9ioKLsA3G66V7SVUvy3Sf9Bf8AAXdEMPYHbMULG",
  "key11": "umNgoymdbBk2jag1aNTUg5wXJTaonak9DXEJ9iycVY9sBcvznp1RLy6JuphaQ9NnXDdbcvYzFxzN3W9fZuKiUB6",
  "key12": "PQUvpovEpP6Sn2t2Bbg997nAsgQxVaURg6FzrSwTjccGTDGrQAZ9WQdxk2ToSugXw27XA4hzcxoNPTy4qPeBdFp",
  "key13": "3RsvDFNVeHaf7fUJtxYErb9iPKwLARJ66SiMc2R2bsJz5ZF5kaBgbH2tgXq68iWvg1ueV2zBk74xqqeJbDMsf1vb",
  "key14": "2o86sXTxPXDeqcJTW1V1HTWSRtR6VnVLxDMbpbnBRzsDhZ5UJoy5tFQa4vbswAvdigEZTQQJ7nFAbTDRZNAo13wG",
  "key15": "Ya8ZL3XMmbeh9xnRTyByZZayoYgR7AYzg7x9R61ABuhXdxvGuD8yz8AmSu3VNYninexfSfa46q9QCe8heA2wPVT",
  "key16": "2NxVPpGsNR3brQxoChngKbA7YYS97EWRyD6u9A1JdKnAPC4Qcet8qZNWDLeAr3ACi8GkVTrUpuK7NJzUYKWziVa9",
  "key17": "297uWQjRmdidxABBoe3UxVXBzdiSWdTYWnDXDqQTrKxyLUbXBSuqDQZDnD76kT8CyR4MUfyR1pRXe2ce6JmCHYcm",
  "key18": "7HzxRvJ794HUntCCVaitKP96nky1iH6mJd7iHypHLfawitzrFiRccGGmHzY4bKS8ejnuSsSpJER1x9wqeN8ft77",
  "key19": "2vvLzWHgLH29LxWvkVXaJpPDPzsjWEfD3rzTB5uxEM7Ej3Hs7vqpi7h5mNGgMaQiVjdivvFCWj2ZXghPDZhzEY8V",
  "key20": "L3DeCFvbuo54wS3HK5Xcdd48b3aUj3Msme1to3s2RnZtRw9RgdpTss4S7N9iB9QNiDA9UHuTgHu4EpEtrzoPP3Z",
  "key21": "4BpHsLLHtgBKro6gDojTKbLsQ3pqfrCFSuYCXpDgZwvtZUemdi9k8FcWDGyoKbSPnXpoUxnW16g1Rh6NCxv8edx4",
  "key22": "5eMYkp3rzm8DzNsPVGjVCUgF6u637N45ApEB7d8X9ur7ppKaxc8jVq26V7iyjDU11xo5GmkwpCYPL9fjuBB4Fqy3",
  "key23": "3FkSSyBwbfwcxo74GVDjY4GpxA23kET3QJ1TCvXKxNv7t2fgZCbuzi2W78haHnL8Crup8F3CKK7KBb9nJ9T7cNDM",
  "key24": "sMmb5KBQf15NB5RHPrVMCyspGABTZ9qkzAdfauJnTZFbuXrdKAquPaxg6jwRvCTi9YossRchcNdXbusChJDP77r",
  "key25": "2YxRTdvgTGTV6zrx6VJZfmq3Spa2d2TML5tGAbHt1HnPBZYZg9zj3Z3whPAh2sGf57nqgoLbyJUDYCCBSHr8FzbG",
  "key26": "3RJMhq62pRRG77cR2rJWyAZFCNLn9rPAd5osD2rqYGr7Xvo3PAXt1JTrr3WEeoNdCH8KJDVhBa8gYXM92RVcX9sN"
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
