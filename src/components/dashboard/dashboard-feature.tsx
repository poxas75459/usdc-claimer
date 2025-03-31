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
    "3ArBuqVTKAUCe2E9FQhQPx3KUEZnFRx5n8mLoraUVnNanD5CnuUjeQ3r9ptKnNX3ZEpvH8tRP2R4NxJ3JjX8rodc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67CSBP5Xezub9VirkU8FGAyRfibMc4nQCoSRMmsobBLZGx4tWnD62mdjyVV8TBVpqB8mVqgjLab5PWUoFjV2AHVw",
  "key1": "5S6LmY7dFyHGnW2oPx5o9fExuGfyCTevNgVscacQ36nqPfyuVYXCHt6ty2LCcS1sEotQLgC3wzzrPCyBce7YkPZf",
  "key2": "5xCSCzhgPW1afL4ijaK9gtBc7BJV5tGFWPHPfkPXuT9dWz1fHmBkNxLKRU4PueXm5Z9NoPNJufEG5pi41myeaWmH",
  "key3": "bPQzDA2bWo3yAHf4vfPCCUQ7punsCjt6HRYnahZNWP8yGw15bJC2fx7YDdjLLGonjq7WYUKuzJGPLfsW79yFmBH",
  "key4": "58Vipm1jq8peetmMfZq4oQMpnGijwi3GpqGcBedi6r9hjZdMLLWmJE18LCX3pzEmiJjgiEhqxLcY37fiSA4TUsui",
  "key5": "3RrGCo6bd7yxtyo9ZChkarVwynuZefkKAWP8w4UP91Pt7wsusU6UJFJ4mZKzfSfsP84azQ7f2NHTwf2PScGfD7Cr",
  "key6": "5vJMQfoujexKHj53auyF64AfTgrVYDZEbvJrGXHHNSR18WzVETi5XYdo6FKQUyFjUaNNXMoxE994xGjjxCykSHD7",
  "key7": "2qjTn8aQpaoQEihEqL61Wgkma2e6gYqKt3KoGeYL3YVrsK9VNkV3BffqZ2pALqLQn5fcyNWXQR1387K6g7hGSBP8",
  "key8": "9ZHYKVxHZJErxNQTiWntYPUyzwaKRB5p2RkB1C7nda1MwCqRfpG7zWpXRnwGy4ZjzwSZESyHgYBwoLciaeEisRC",
  "key9": "3V5tsY4aUwE7DxdxX8gUpXi7L2RQqkGCno5YmDHSSG8sekJ2S79HurMKbjX9JyPBrFG4SndNRzPyARJrbDD8EP6c",
  "key10": "4YLTLi4fczGNpHrZJQiG1nm5246zkSjF1hQsb6gmzBzMKDmK2mu7dutfJxw84WihagMqzAvP125HvX1mAyNoPyDG",
  "key11": "4pcpWxBNGyNjCahj4R9CACN3WAh6Lzazqnn3C6NTfzyCxyhKDoxwp1sU7vkZRMK4f7ezKgMPH45BvgjQVifXJ8Vi",
  "key12": "2aFi9Siu8fZ7v4GC1EBkbtg3JYhM2GmmLmhpBy4Rsiuy283xPhqLDbQoieidTkppfc1BQoVPzdWV5GkTV4ABGRkf",
  "key13": "3mbH4NVZeS7UCUpbs1RGAmVdjrQd3CzwgsahP6UgpKmRTNK3MKJ9GbinVqMzmjgENQEPrutn22eFpU2ZqmqnqDWR",
  "key14": "wvXhYnujiAKCiZy4L3AVzJqVBpsz5j1eUfjhEEiCM31CALTgCXyASn1oVUU5He1eVbS8cAVU3bt4Rp9iwCvfBkC",
  "key15": "2GPJcHypKXpEnUBaj7qTuGNH38TBTCLEKSzu9egqBxWTFU3feZWe3UQxrDG3Qh6sX3QKXjH2DZjtSgcJwCrq2Q9h",
  "key16": "3D7BbbLY2K1agdALFRXev4z9Tck54H67yE3G52z1SRcm7wap7ZzEknTPH991zmVcBhKCwKqSkhyWRmQQmVPAieBm",
  "key17": "KQYuU5nMhCdJxvPLWm8PAC1B5YbPm2DdUWWZMrvSPLjt3eJ7kmtieWZyWGQnRtAbVg6wFmYnVKNzEmJZV2bpJkJ",
  "key18": "4pn53Ebdmpn9ZtnaAhbgEXcoE1eFx3yj2WAH3L8g8Vm9PFUoBH7VXmMTu9NvzZYp2zYpR1afx4EFnMPShTFtbPpj",
  "key19": "2T4mZvF2SuU26Qhc5wm2f3LfSiDN8xbm1g9MFqpebhgjqNEW1Y3DiM6jkYwNkSvRHBY2qsKYGQotNTPQ5uD6P354",
  "key20": "aDKgd7m5P52DQFi4QrqrS4FAw59n9xcrkzn9qPaK6oUSq8ifQ1uRbpcy5Wp6RezHKw2JywnZ5B4czLrArsHzgUW",
  "key21": "4dstqc2NVLnfpqgoLNKEhbDZe8ncbvGwpYL9Yccvn1cCFtoEXWA9Y1VD1HcsURnbEfRetA2MMBAbBgCpJerQddNq",
  "key22": "5ugd2i15Ud11xWCn6aXF4U2br5d2ULVAnPNzPEQkZYyxtjc4KGqJnbrgnTAG3muV81N8Xjnpn9KptK41WVJY9uXd",
  "key23": "2ZYtycie6HADis8cjBSpp8ME43Qyu4r6k1SVZ8SxBJogxPKY6zDG98PTULKuDTnQqNQ8hLVz7z1yLCZNhABf4aaU",
  "key24": "4UU2bcqpnodKuKaLtR3cCbAn8w12bL3e8Pkj88L3j3KdhtPMayiSzRm3f817uv2NekcXtUKChGo5F2x4UVxjBMHg",
  "key25": "sJhBL6vGEUR9dnbhjZBxhHUGWeQGCec9bj1MQLivinPQgCkmymeKBN34QYFP6Gwk1mnvKFVpqdx4XT4R241uMWr"
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
