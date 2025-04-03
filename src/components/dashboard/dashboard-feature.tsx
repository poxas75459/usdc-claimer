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
    "4jMEVaRfKULz1nTqg27YNuVt84dyjAFSnbjJwhssV6SVeLutM6dAse3eXM3e28YRotVQKW3Fr98XwRtJkdgsY6ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFQsgzyLXtpDkmVseKk267PsHqj1ateZFEkSevbwR81mEGAAf6BToa1cAbGCRLP5uYapt2fCA2tC8oXvtbSC4x3",
  "key1": "4MCiAbWa4jjMQk25Nyamt2ERTTuJowYV5NGv2Fwr7yqsLtHv71feNSPuddRBE3kQDLYBirQXAEujU14RzaBhjTHi",
  "key2": "3vgHnhrwXY7CS5HGzM35ouE5zWLEu1R11hRguRkbt6pURrLZPmwauCpu6QqWz6XKu7SCtvttGaw8FmMor3PdZPJU",
  "key3": "4rhF55Fs8eFoUCQ9v6zaegR1BjxFC97hvCbNWFeVwk8bqrYb8kLJ4GNyiesfCvMTjDPjraop7z3HsiF9Y9Z1PhP7",
  "key4": "2u8DuTqPX5RMTB7zq5fgDa3gzjwzRkG6Pzd5XmdjvgZKJ6PsjiCg8STaTnoo457tqgdANqVuZ7ajb4RKfVkVKAHJ",
  "key5": "UBjqUDvRkaQRkkc3sBMN3TqrKTLMWePPtPvYBcj76AWDGdcR2BE8cFVJvF9QgCrKaUv9h2JunYcGMRNE7sT2GZb",
  "key6": "w9UF1V3cn1AfQC1duPV4Tfc2h7WxuwPQnnP8zpKy4NnzHEwMGxRxMV93NzDoP8uC8sQqGb6jz15o8PxAA2pcnp8",
  "key7": "uNBtTQi5rWQqhoi6AABHWe4CAGrm9fcQWd8455RMoGwL165cY8CjPS4Med17ho3DNCXd4V6AAFEkGG1X46xuceM",
  "key8": "9uszyQ9dnX7W4ax27tojTUUmtGfpc1faVnBLQL9ajt88Hsv4MtX7vbDAqMm1tBcXZyWtxV9CFg9Dcn7Z7FpWWh5",
  "key9": "23RyYc9tdBbPLXNvppEBWTia4yytC1CyEBKDNjq3SUPPQLPr7vNZS1ERgVSTKu34uAQmtwR8tjRuCov412vNE8pz",
  "key10": "r3Zw8eaQCZtoEgZMtqL2TMG3T3xj63hmgAd1QiEkEgkNehFswkPWA7H3VbKbcKUk2fhQ8h9md1ZSkGZwVq63PJZ",
  "key11": "3ZrQMvwqi4TV9DVYy3Zg62Rv1SeZSvo3zMgTnnnXVg6Z3eMKVXmhRh5kES7AZeRcKPzX3We9kCvTtEpAi83wk8Kd",
  "key12": "CuQsSH3DmQoPmLTgYVS1nPpAM5E9yShehLjkWy2XhpzzniGgukHQrNd1z9xtY1i9dt6zYQNudzuRiV5PVtfmfaN",
  "key13": "3Tgbybjww5ZCwaH8ywFPRMzbvGCyuExW2d8fJB8NwjYE1ZYuTEDmLom9ayLQpH8tFyskeuFoHBgn1oMg2JEF3pCZ",
  "key14": "4PxQp18qUYNAquYjAvHpwzQ5HU4rXzBjJ5TrdrLcJQSj54VSLCc8DZsxrxn5sSXkg4kCfn5nDBfaTN4tHYVTonZz",
  "key15": "4VwXMX6ghAZXbEVtSKafrkctSfn9RSsQjoWgAy7Vn9XW4YAhikJbbxPTsWVzqaoXwc8NX4YAatT5NcAMN8fWVwRG",
  "key16": "2UGfjM82WDXWRdXmqF13QKRoxksH4wdyRfEio6jXvoVpGQHZe2oYQ8jY1oGaJBCSVP9FieqT9fDEUwkyWSrErFbh",
  "key17": "3vrKCYheEHQv3ucSFcr9Y8f8CDjicDGUVEwCGeEMCQzUxnBwCauDpvCkRzQCqZdeGV4w8oKzrK36pqBTHdx4sY2T",
  "key18": "72TiNFCo5QmsJfrnBVbAmKk4jqzTctLHau443vhsvgHjShzV7CRZg3v6BEsmNjwrA1Yomncf5FXzU6Ss2zucr9J",
  "key19": "4wY7tmRgYQQSmEDgBCApf5Z1eKiCjgEfYVdd5KbxFhJRpyeVzUAQEwJeLcxc6icqrLHF9qGtKGaqRgvo5RK7RVs7",
  "key20": "5zNjoBCGu3LU62v4HSzD6TUb7atYpmS4vrCFZfjFTJwXefGnHFj3PdrcPu4rxdYkgc9ZRBmhUVXbNDkrsmPxyxjU",
  "key21": "3uowU1cZwd19M51c5keWggibfWcR8CjskUbSftb5nC2Sm2kEZCdK7fnP3k9aQmMecgoW6aMaguop5JX5E7xotXop",
  "key22": "gLKDCgsE5tVsqskfrTuVy3RCgok4hVdKVSJZLuGdfbgQr1JJiGSnvxWx3EeyeKJo2f5brtCCXKKZc56z9kr5Lp3",
  "key23": "5gZWccJ66bvB8zZq6gAbHMH9t2JYmc5MBF3reYnDdviAKM78B16SYxmWwER57tCnZaBPUiWtJmqaovb2a4KTUXJ4",
  "key24": "38jw643UN1ZAJhNhRcwymmiDfJDLgVKM7ghhqKDcLHZW2mJc9Xx6517szamCVpgv3aYohadGVUEBPAbWqkhQjffX",
  "key25": "4LDYTtrL7wvoR2FZrJgbT3cS651o94wu1BsrnY7aDH1jkUwUAjCoka1ZD2pV3oKkJgLD5WBqPzfjbBQSjLQAL3g2",
  "key26": "4arXiGGw9EoYx5jDJfH5kZVeJuYKGbFPtzv2vipxUvcUMgm9qAfYRd3N6tAbAS6RMmRHtiNuhAJqg2AKrvSJJaJ6",
  "key27": "3i73XzsL4xacegpUz6uiC3mtU2xboxFt1TVgDVPgRCJjnDUx3usmPTb2ZWJDct2LZ5g4RJ27ZxCNskJqz3mnu4rj",
  "key28": "2rKFwQAjtnCCJCTFCVF3y8LngozoQRBAE3i7GqLWyWQqS6Xf4U316cSnB3BU4AgDruQfbkM4Te3y5kTADjnMgimu",
  "key29": "3epftGjvMa5bqP4PX4nk9yssruu5gHNffopHsZVvFo9gxmcPTgocVM4iaMNkUmXfdqv2KU9pND4Qa9Gc2G3aE6ee",
  "key30": "5NUcE9j6rN6ybJL3PtRkR7XsSDeiKHzYXGbckttXTSwoxYZTNqQpekL8vrMgxrYGnQpkJYxqUMz9qiYkCANSietE",
  "key31": "3HHi5EeQnVDieoGdAhSZSz2PsGcUizqkPtWv15RuxE4gRPbntZfEVMrRz12UJ8C2ge7v9BrJ4bzyEq8FPCtWtZdV",
  "key32": "5pMULuk6P5D4XujRuK72vgjfTGgH3qzkeNWTmctcxSCgnuLvDsGQniMrmdGnwVqNare3yZySFBdDn2xPTC1TzPSL",
  "key33": "3KAYrmUUyA2suEcPPGh9eA464x66t2vF76qXKozzctiAMF2kAhvmkAE892H7UXuBHjemBL6AjBqJRv9h6D5CLVBy"
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
