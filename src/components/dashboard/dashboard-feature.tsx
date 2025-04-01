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
    "5oiRTPZaHycNMtgqChohf9hRTePm1Rn48Qygxti2Zrpp1dVWuepRpGxp7jaRCoikBFxoiVaunu8E7BouxX7TjSw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cYE7mR3RoVEWc4cMSkf8Kwx4v5X6m7LuGd6eW3wG7VowkMGbWxufafaG5D2zf5BXviSz3w2GXqkZiMuizkZmWqP",
  "key1": "2m9k6hkB91RFhivMFWBRw84NwVLgtxgZMMzQcsA5BjGbL9sXQw5DjoKB8qSsgQzrhP5JU6u3RpTT7CsZ8dCwFFBf",
  "key2": "PFhSvVFpUmi5VLybsuxZVYwLs8XS3scgaf8XzXQkSTPasFkKBKM56tkhm1Hi6rE6jpaFBsadR8tT6SvmFQDKiPq",
  "key3": "3wFX18P842YSvGyTV1bCmCHJ1R4AyYSvfXv5KqgQz8hUo1VzWGUuBSstAfun9SyW1xjeybfWLNfci4SmLT5w6ofr",
  "key4": "5KaBCTegRzyDwNPuqv2fCCMYHzmaioyTdKCGQYcte8bgzfVaZxRabmxL8dTRsxdLf5dQGVRLvfpeypTnSAQtUcdT",
  "key5": "51tmX9p8M6ENPHErZVHQ8YpphS157UEcSMEBpS83s4mJJE1ws9yLSCqNW24fp9qLQFBgS9tntHXX6nZsX8GGsr1G",
  "key6": "2KME4PyjZd83tkuofHr9rBc7D6kBLccR7XABycEARAAbnveXGiKGRzXhQKkPu4u8Y5HSEduebZMCZVMperLiubDP",
  "key7": "3zAqTjWTtmu2Jdv6ZZ8yYDiwoShm5HRQy3oiJ7heSLbVn6m3gJ2QKuhTvmC77QRGenCmaNmLqwwD8qLE53mk9iwX",
  "key8": "2B7XdH3aufKeC4vZVmJnT39HV2osQo1R7Huxn4tjmEsHNkPABkTyR8htAVuQMNHwJ6L3HyMjc7CmRFThywF29xSy",
  "key9": "2s74EUACKMyQd62fk6wRcBEhgQNGGm32GhheVdGYYa85C7Z6WxZre1WNPD3aLM6LkSwabpqfSgfuiwUa7xwDVKZx",
  "key10": "4QMq95fqNgTFj8MKtpABAJHw77Cb28pVW26U2UV9eiM3NvR7cnGQYG4gxc4xLMdr8T6X8JnQgq1SmkrBGrfBU6AF",
  "key11": "2QboL722D6P5oPKaMo52hbRAvTHgno1hJBYJooDybKx66vuuviNrGtagdcefz5Cgyow6WJgPrpSXVLfmwR3GL83w",
  "key12": "64U7n7CS8CTgsj73jCRj9gwooteEoXxwF9AyEtB96fTfQ6dTdKXuPg2hENkBb8NEwz98p7ajYedxJufLZZh76PVD",
  "key13": "5t5FfjcV5JpeqWy3kGndNHub4TQcBDwvwQ3jhJGRwKRJznYAeCq7dCGmYkG2TJ3FGkCNu1v4Yb2UWRDi12RKqF2k",
  "key14": "4CFKs5z59si6pEWnH6KoWtYxaiJKqHLRzQYTKYvsFziLTGyYLhTVvLJ7q68mnU7h6mfU42FAPXqpxQk1uqhHFYkp",
  "key15": "4SxEmWZmTj8eb2tFdgWpxMe17mwzhy2koP76PspvHVPkBXFZyGv4X3MutezvRzCF4xufwCHgfL9zfjPxqWo52WdV",
  "key16": "49RKyjgu6kzEroezDK53m1dsdTbGxusaLE9uwDhqaUAJsJXUZ618Yqf3mLy8MvX2PYwRztQiJmCzcxBnk1VaD2PC",
  "key17": "5fCBag88wP5yQgAaRTafkvaLNC7QEYnVkEaeRvZAk83WXaqJ6VQYXQR9xokDasEjSLXXYr32nfQ3e2QjK9rnadnN",
  "key18": "4XCNfhxG9aehFLpGkK3EyX2k4Wd458b31StV932S86Zwnhmq8VyqF3KxvPxR9EmLDfMfWrLJ6MSPXubFbGZVjL8E",
  "key19": "5NL8HyubKWwbYpGU58B8VqJEPojGBYzKKN7ZsmRjK2ioJGpMntDKa75ehjpxY6ncXdFNGZ7gpo9qbJWKoRazrfAW",
  "key20": "53eTAiBqpukWdhENtMdJ8zTc2fLZn5fAQAmZkLSCwvUQKtXdMgL9Rof8uzdJRLSRoE17rQWUuSPjZ6TyHATYBHRp",
  "key21": "4AXPK4aCt7rHUF58VRE8bZk1MUpi2VRXfQi3fbiMPHYiyUfDqs83BDsYrqohxTNgA8TWSiM79eM8wkqSCDsEyAta",
  "key22": "c5M3fa2EkSPSTsqAQJGFvGUPFRPeZnwF6KVuWGHww1NdmpYuWDHwP4ULBovy6TGk2HduysNVv39Xw3bkhohvntU",
  "key23": "3BUf1PfxrooeTuSMtSEM1Hy465pGe9Kd8auuD69m1TKX3k5dUin7HCtrXMnEfKhkohWYSPyjcoVyizEBrTFV1q9P",
  "key24": "64LJHSfrpeuMcf91fZiNeBwDe9Crxtws7ov4obyuCrHk3D2t5NvnEY9vD2osDzGAb8vtfQsguxx8HSMZ7LWQ7oNr",
  "key25": "5SWsNhUrSU9ivEWM8JNrezJg9FV5c1X7e7HdVaAYLXVLAutTW8qQckb1x6C7bQVzYEDjv2tRPbAy5FiqJeY7fFCu"
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
