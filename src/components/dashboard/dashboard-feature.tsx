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
    "3kWAqLRKZzCFvjdkKKTqmuUtdZBiiyy7mmKcrLhonaGzUXYa6EDJqxvNwgoScf4rHuc6b4iU1PqerU8vYe4FXjNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29uQRYgutGG2TVU2Tvbu8TB6jGMsbeWxboR6Q9JXy8VjfBFLVibE9hskbDnEbBGQTGC1DoZSysYC3XQEfL1Tbk4F",
  "key1": "HWN2pXvznko4mdjSJwTEtUb6DTvJTa7bjFszrAJJyh1C6WUfhY27cdA8dFK2pARy2aFLCdsTfVwHNRM8Q54orDx",
  "key2": "3X9XLhVDXDBVS9iEhRuMtQYJzHVeo1Si7LbAtF1fr6vVzYZr89SaVpnSboF1njjZATJfVAv3at16UqvDiHkgJNEa",
  "key3": "5GVZHEKyv2k1Zchb1mLAMYqGJ4WiM1Q315NFUce1perNqhrgDHRw3rpxFWiBL9zfQpEPHFGqcrktBStAHGenHuBP",
  "key4": "5Bs8bzXkNdHpVH8kNtYkFm6QuvDNYuwSdeE1MsUUrd8DrzzCYupnCSzbvJgD9X543wW1HmSQKscmi8rnFaTxGejS",
  "key5": "Ei8VdzsLRDLKKKQUC4wykqukwxW6pqrG58APaG8L2iU8wgEUJbmmiBVwqJrJbJ4qJbhAH23PXEw4kdrScSJGuQ6",
  "key6": "2usKQCW4SacDNLAFAzmvMCEmR8VGvH65GRwhjADT9f8RzZ8jLF3YgT1a8XyfVvfptszhZ9M9QtTrWxWzmddNbhiE",
  "key7": "5S8ounvZCYq1VTy9UU2F7e52EyQrXZPCnSUi3QNojadigLzSbKvUDwcH1yvoV4qjxZ4XBU1MVzAfYRM7FvoaMRwJ",
  "key8": "5qkYsE4WCMoUnuqmbz9QT3peeXsTR6mspZgDUQLbzwdD97pYpgrkXmGopDv4vPiX6aaPTd8LZMbAKPKSLVP9aaAk",
  "key9": "4edXFCLNq2hw3XSnoMVjMfVKUeGFgERzVMrueauPRKcm3jVgVrCNrbbVCfjdFjCXKU5WvpkRvNobRASyYFqbeTDR",
  "key10": "29Dtb5CxcFbt5GCoXvM5AQPjXQhWGjhCspwNafMmZ9xDBRsFGR6HrmmPMUFhduX7gCQbyUUgbg4CpqmchqQTVKC7",
  "key11": "39XBLmVPUtJRpH5DRugmLnLidmwfk8NLhbJCQmD8bVPK2G3i8brB3vH2NoWvBoFR1t5byAyuEzEGJRkKdQrabdYM",
  "key12": "QrnC8gfYDS85ezEPHAyXRXFs9CwTPpUsUKFy1oQXaSPBKLE1UrcJBLNAHvxrokD4cTaFf4iYTZpVzjRxJ3isYit",
  "key13": "36fhBHZTNhUtevWY5vajZss118mfv6ajxmiV9vzktD4UZPtQB4X6c79uB2MhKGxTpQ3pmAfygvoPjLYr4RG6Kyp8",
  "key14": "3ZJLDLu5jdEfHHXVhkKQTuvsMqcJq2JLXVoSD9NErdZL3NnJCEymidZJpTBh4w5yUJnnqHd6ao8iDo5df9GHfQXM",
  "key15": "3NjaEPbDKuc3Edhvx8ppk261dajUSPX8ZYzFqv3dhuNdVykpZsbSkfN7vMcmd4zdqFt2QW6s5Jn1VFeaskvbTTtp",
  "key16": "4m7zz1JPnSZQUxXQGSv4o939wenMqT54Nay9GuxUv46rBo3XUarnC8MgCUjH1RjdDmenaTzx6xAPZehJBVqewg2h",
  "key17": "2E2yrpcqgqyg5TUFfQdFNMS1HK496nTDDmsGXdWxk1yb2buk7CLDWVphuqZUdgExtZYf4fergYhjLnCJ4mTss2Tf",
  "key18": "3j9M8AccL5Sab6ehRjv1UjWJHExZKoPdKVgVBe2sqmdBDH1JmDzShiC2qUsvvsajLjY3U58Bwd5SSySZBp2xNcvs",
  "key19": "7fdsmFcDZfB1iMLxXUZgLDiXSBQqB7v7iEXrET8RYvbnwtg98zLL63Wk7SDvzrFhLMDphwvrTuywD62RL42LVcU",
  "key20": "3VVhgecq4rMeRsLx8hGfEM6zu43NPqmsJi3Hq2XLFUziSjYZL6M6PcjvQ6rapMu65krduMFzJuFRhQLCjMBstHhZ",
  "key21": "2pSVNFXbqC8oNo93AaLWmPQsUdTTfBpxPfkAugBwWkCdGhyRnCr9gFvapUzYzUGScAGz5ZakuHZkbF9aSH25hqwN",
  "key22": "55whPXuH5ZdicaEWbh7emiG3Bw34cMufCQqSwSd9ekLuKgmAA1CbKjDCGwXL36bH9uUN1FL1prD8Qk4RSyoJNEsR",
  "key23": "5CJrbHY7f9TtPKFJyzopCua4CYb5K2v4TzCEMgZ1oAZLGGzgXctX7sEbHEAVAc8sUw1dg1yAWHaVz8GzQYpKk78P",
  "key24": "2rPZ6RzgKVvcCR23QnCBsGPB3Rg7qzhK9aQVVkteEocYaES9Z9JYCH6VRmFcKKex7ZmU8XQ3mpQ2JnXavcm19vV5",
  "key25": "2h7WSYXuk8JDNDJdSxDyX3fJsRqD3h6kbkwdfjDV66dCCQ33QjSTe9jKrmn7hpaZiP5AX9RTRARDsJyMuVGKmcV2",
  "key26": "4JehwZeHJHMSpdHv5Qup86VFSkxZb6AF9krK3zmH9DbRn3b7AJqDr9ToL9UokNCdByWDaUa6SVpz4ebPEyZ1HpRz",
  "key27": "3pVQaC36CHqRD8nUzcDAgU5EEasxoc3MCmcca33p9KFdEBLLiwQFtHf3dCHLbfwkiz1qCWHsQbVoAMPKERsedEEf",
  "key28": "5hBBFx8ctxGKMp64zGbXj4ETG9ZPACfsQpCqEyLTB2JyY1JVTmuftML26rXab5uMGTaZWUTaD7AwqMRVGdvRx7u",
  "key29": "3cvXiEYmqdnTW1kajAYCYQjBwNx5drDRXAnvkBG1qVA4t9Vtm6NsJBgC4x2bmTVqSyXcjguVxkxVE6jUhHexwwTj",
  "key30": "5FA7E4X98DJJ6en6cy3bEeSPZmwnZ8cysEjtUwFKHcvATG17p3CpQsS97WqX2E81A7XnJuo8jogLp6guXzTNaKQT",
  "key31": "A7FcjaMzCXFHsh6Qj93i628pc1oUJrxKd8NmM5WwZhdZQae51Pob7NtmgrqenyNXtwFDF3VSkG3cyvPF2ppXJ83",
  "key32": "2fCN7wv8rKAPz6weU7hanuhuVAPsojzf2HMo2GppWZtixu4U6dBgFjeGAZGYGkCnz5rtc4YB1staNhxxpAyjxSvg",
  "key33": "tfkLVPPGySNu5hUNhJrCr6Ws2gmGspxY17u4rodaa5yb31gSj9br5xZD5pyV81AP8NyDfHXi4p4cE3bMkC5yZ6e",
  "key34": "VeKqKNbF5JRc85KJJB1PeEgW6yi32DeTdtDKTdExjMvgJvPFmzyXHXbGTJwm2xsGV7x33eR2WGnnq9ActSzvhxs",
  "key35": "4sYKL6KznCEWTjTTLXoX9gFbkr8pzYM9tCuACtd4Ha75A591W8uqvHcERwmtVYbtFjoid1rJ24y2CVJZgUT1XWHU",
  "key36": "5GyeEKicZVjCTKzu6X95mP4Fm8fpBhXBhFKLQ95xrumfQVjtLEqf3LU8Qnpi5jqoBnekNw4T11o1n5VPjEUpb4P5",
  "key37": "5FnNbW5sVBACQhfYtiXHbgbgrAtcm2z3xZ4HDG4MkyvwJ9JTbxGEYAAPkw8dqibKihHM7CtgjsVm85jTn1U3VoW7",
  "key38": "4E1UBri6uzcWAps2CoVH4ziPrAfh8f4fVxFNmoHvdJYBHKJipvKRoEC1zW1W5aR2gmxq2DX5wnfe7QWKJMfwutjG",
  "key39": "4QBc1UjUgwDY41gTmTtM419DNTdg8Xcij7qDsrpFecS7QZteeVE2F6pq2ch9UwXNRMJB2MZpnzNowW4AF59AVRz7",
  "key40": "4y9sxUYDMm1LF3X65pXsSsARCLsCKCyiBWm7PejJQ4vJBhc8UPRT1Lb3vPfEzii4QgiKNXRwRLsPg2ZvSVzP1taE",
  "key41": "5R3PKfyw5zxbbyaCg4DC3ysb2S8zYzYZezsPxZfK4xgEpw6V6jYeqCLvukDBTi6eMFJGSz6VZ88oUSVemyPfpy1m",
  "key42": "2BuoqAfs8rcRRb1h9W5PjgDyWu96hCvztLASvi559B6nP773T9iYDGEs9UwaBce8E9Bebk4hx9GsgLhCYRWeWAiF",
  "key43": "34GgpB74nuGQL7hppX6eTuEnyMdsG9Bwz6vJfKGB3ENrjaSknzjx8zhMc49315HAUdMUKoQFdYJNWr9PheRCJb8f"
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
