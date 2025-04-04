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
    "43B9kRXsMFvsegs192jpAAsq8PsV2Q8JBjmiDm9S4uKLZZP45TEqpaRGeXMXVs5xKRMNjcyZze21JT2feyBieDd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qTd4rH119a88ZDdqP85SdcKh7UcPfPZmtB9f4G3zdYdY15YzGzZvxnWSyTWj8WvpAqmFzw7n3YqJW7Ld7iQ18d",
  "key1": "4jzTHGX4aKUba8Qie2zrACXXvKRyvb4GtcZQ3kqCid2ByqdPow61VngeVcgo5pW4KwBzifDC6vDzk7ssRYwiUMSj",
  "key2": "raHaJJXKuvfvDksrtWpvDsWJ9ccPBT9MiMK7TksWGCceAb6qmN3iseVwqVe6pqruGTeKvxRkWsRkGDTBnEoDGKP",
  "key3": "4bcwhZVJ7KcWS5DKxxph34nox6QfdPtRmHNymVHynoc9Ci51iUUBfNCEwFURXQENDBnak8LR8wd3mEkGmF1z5smu",
  "key4": "3REgbkjuQaPqE99DeChdKw6XCeYHRMAfAfm2nGmnNohh1WFMrB6UB9JdZNUDeDYXJBQsREsZxjXmHLHp7FXFti2g",
  "key5": "3eDNRLQrVmewzEG3Tsd7mmJgTjEEpawLLMLPMETU8D7Z5sP5288KCsCfMd19nHgxpwEL94Tyc8mixZtDaWXQJCGx",
  "key6": "3rRtrZvg9XMeM4vkF84XbvwYdMzkr48phzx3GttZwdtS3fLY3pc5AF8jsxFKrKLiYtfKdEcsUm643mgEbrXc5ND",
  "key7": "Xzjh27BoCdmD1rfw8P42gi1nmx4XDgBxqnp83oD2hqhf7XYNB6cTPYtHTeJVveJfQcEbr6jbU5qjut3HvtyPXdT",
  "key8": "Z2Vrgr3TVm95h8eiUX4v5GCQTxiBWRMneeePrPx1w6PBNHpz1ZZN4YxShhvSGHAbeb6kkefBghn4fhs1grK2FKw",
  "key9": "4gNhgNswuvUXJNGdX1Lk7GktQrKYY7aCC1EQ2k7RRtr68Yq7wyq1DKRoA4ssvF3dNSghyBxh1BK53u12ax1UXSzt",
  "key10": "2t9r6HYTKfJjsFrDawuY7R98BLubHkbThLSDurrDBA9kBBxjMmqXykzeA3KLHoDRVwQ6QxVdgcrWsapNpQb4BV8o",
  "key11": "3FBuyW7tUTWvjN4qWoTZ7WTz8eP96dpjenHiV4tRezRWoKVeP2DZEuCrKUtd9mn9ZGj9G1RrtKNMBjVT1r9g8Jh1",
  "key12": "4hmVHFAieyuS9EpRt4XbbUtVBKDJTeRUQ1LS1X4Zi4JAzJ2ySY9xhzHQCJt5tkaFQLvkAuUbvHfx2Gu4VdUSM53f",
  "key13": "4jHuBve5sPzKqA2qqKx2RovSfppv4HvjJPqh7ZL2wTcT64htUPViVau9C3ksKepCLXde8VSQz1LZsp35EEg5K5So",
  "key14": "4WgywCc1KiBdQB5xUeMfQXkE3QnM5sbrmJWhZEACLgugisejbxgA32RZws7ucQQXXEzRs5BgBNApZ7M9FPcmXrah",
  "key15": "27dJQvx8w6FkEgecsdVcrLEp641pdQwWy7tPEeo5gFbzauZFEbchgwGqvGvmuUJDwjApRgDVwMBCogw3QbPfSfS7",
  "key16": "2dZtqugnsFnWYkr67agcRdo1UxGcxXiUzpnqbE5fD6PRbSo3jDbmGtfKAnxUBnMZSBqAzaK8qKxE6kZBAVMpncaf",
  "key17": "2DCJvTjWrdvKfSkgTL4r2TE6TbTrPrPRUC6S6ngQxib8nXoeGYGDdD6U9tzWzYnMpcjP7cwTW6YugTdT8uWXb3ad",
  "key18": "2yWeR3GqJHQYk4xPY4BefNRjy4JE55UVQkzjGY4RBVDpTdyJYDD6wdMSZQUiidW8imhesNGu48fvsQwhckCM78QD",
  "key19": "4zzG3mX5k2u5wLGYLgYDm8VUcfpUSjZmN37VVPX2PwhishKm7RLi8NDcVxZAQZht3roLpub9pwJwFcWYSDKQVhjf",
  "key20": "24yKWBW91NNPHUeYLhPXv7bGdQsTsJ91LahDRRiv1YahBuL5PBxkC9ogYbjAVKmsrsZaNFWQKqx7xKbzi4ciNxYs",
  "key21": "64U4kZBUjvLsQXdyZurokWV1aRmeoMDrpUbAKH6iAHPKWmKBkbK1f9Cj6nK9KFBzYZZg9izHLdp2u5oouGoWyR3A",
  "key22": "29YwCpLbVWh2ELHba4K32AyjYokgpPbJEKSQ3r3pJoYhWu4MDsA85L74LPPeB8PaN1L38QCHKtj3pMoojJ9qq98i",
  "key23": "4DkKE9f7xFyZ5NWQasGP5BG3exWPAt5nPYTdtPCLLn6hBcuBGpjw2vFP2HdBqh6cXpBvDB3wHDWseZ9dQzS7Hs4h",
  "key24": "2aAw2GVfuckgt5KDhsNo3mx2ZfQQ7uF7uaSSgiRxGZ3uMKwfVMAfuybVjHofu72eUoGza98PMm2nxy1KZxC5NJ4q",
  "key25": "5vANTqkZJScKVzvZ1hg5u6ZRrbPAbFeBNyZTX6vzZ7EzCxRE6MvGcuhsRAnS7xErMmmuHZMxRxUwt986ZZqtc28b",
  "key26": "22K8pmiTKki4YLtcPmXsuWgnK9LDJ6FA75NrCkg8KVmmejCoXyPZHiUuZNoP3RUcZdB5hvKhzXCdiDk2Pme9LCxp"
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
