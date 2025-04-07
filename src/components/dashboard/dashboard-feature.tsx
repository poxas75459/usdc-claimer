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
    "2wkD1MBm8jzw8Mb3enkZfgmeZui6XWwEPY77MjvkQT1nq6XZGm4Yghd7AQwyYSm7kBuFJytpwF3996zK6fVzsxm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GdYnafcopUHGofBzfmcq4uJsgmQtvnAAWRhmBzV2bmW2U1zVAyRrgJEZFUruVbUuTtUeDPJCCu8tRC9vrjtgAd9",
  "key1": "2hHMHwYfpe3C2Hg3TzM3JFNroVfMm5B1eXUBghyMqakjRKjusjaH1AGHb9HMhc7yY6esGDSPMK3VUzECzY5g4xzM",
  "key2": "y1QdFSPD3NdQfHQxrFjS476yt7hXPghJEi94Pq78BYipPzc5ZHpuTDRbduBcLdjjS2TyeQxpS6BsKQpEV6jhzRj",
  "key3": "5DfNt1uUHQ4MmCYUDNkeYUywu7sTAbJ7n4TCbqjGsNjMgt13ThNM97AuyRzNssLYa6orRvF3zYjcSeqb5UVXsvSf",
  "key4": "5dQ2bZFFEf7vjHJz8zani64rYiMTAysvv9kuqJ1a479D9Upj4iLx627tqVMk1BJ22CnY9seSAoxka68DPhAhmQB4",
  "key5": "3391A63aA1pei1gS9rJQZoVRwrftBVcP2ajoTtqoeNUfAB98jcVnDFeWgGY2SRZ2SAXfjeixj6PxH9erRoEVTPdr",
  "key6": "4eKxYYUwNx56JJ7F5Le73gyLGw7URNsf1dtwuoh1uFbF5Z8i3jxKBkGRhNG6NaQQn6xtQECGFgy3ZRVvokoD4m7Y",
  "key7": "2j9AWh6KKngeLmGUJxLowGyHwaKUjje2h6jaiKpXWycLcUxhT3D5wwDWBvveec5AR25oiiJFJE3s6Zc9HjGa6YVV",
  "key8": "3VX3CkD3s1f38r8Q8e3ruZPPTwNrR2qvGzNdtpa2iw1h48ZbP4SXssD2hKTZKchFvJwf3CEHXcTSouqn4Rj6bwmy",
  "key9": "4isku384uEGeokfc1q3CCNBzRrqJb1ugt8htYfpWz3BPniSRJdbj7ykHgjuMQaf2T7p3rkvus4gS9WRXc87prks9",
  "key10": "4mPzQD6pyhY56AnZiJ9MGh6pd3YthSVbrL3kNZX9Tkxhvhj3KRzzhrAYrn9qc8WN9vQKEdBEDhnSKywpDg3iN5ym",
  "key11": "AFD4qbU3cLb3UW7gbdhUMZkn6nphd98Txybk1trZEYV5bWovh2sVaLgzTuHs5PrjrbTVo8X6E6EZR27JP6aKr7C",
  "key12": "4zG6PDKWpGsKwhmuk5ZBTfCcCumJ7kafksB5ReH6JmQesB3mcPn9gs4gScrSAscUB2ydhDW4TbpGXxAftmTjkEpA",
  "key13": "Zp5YVDbSpMJSUFjiFpoZJjVEsGYCoXcQ9zGYaDkbFoQ66ibGULdSEaWyMPThQcv2JoA6F6ZfWEeuk5D1cTgA3p6",
  "key14": "xUbxUdAhZdryaF6hKdEVP94nSm5fMXbAH9bhfjUGwNHYHjrYmrVXxGVKSQMKzyU7JEhRsE1g189GagaPK96VPj9",
  "key15": "29tAviSoxfTm6DbPW6V54RmfADXZ6v6CKUFk3eoRh1WVuHut6xcHV6J774zpb4ryvECHEN1WG6jJf5KseX1kPYe8",
  "key16": "4RFmYMKUjvBPrxPbyD4XmeJy6m9ZcNzp6TRuhV4tdeRbK3tQFT3BqDEW9vn3XZAm5xfrfovGrHDnKiBXn5wrnkV9",
  "key17": "3Thm6aBPLRjW3VQ2SN4mp97d6DZAgTUHcEw3UZFHSxjGBMBcWqD4tcJUajxbUkTEBymNnaHXuFc17GJyNCFaq5ba",
  "key18": "3G692P1j6uJBB5MpnDyg4PW5PYDx7CAMwR1LxSD3Jy7Gtqw2QFda3MBxsvrB8M9A37kx3imK3E2kattSZaA8VNMw",
  "key19": "462w4N7sgoQ2QT4sJCSoWpueH7Nv3nPpySnWGgdCTf2mVJz3VKr1cYiZwZ7KYLmLTRLzsten2i3aWU7dKVSmFqXB",
  "key20": "5kLDPAoxH2aYH4XZvh7gxKyzr9sLHV4Nkok6zAtHPB1UXiNcoNwnYpZqeWkkjMtZn3wMwi2yzoMhQxHtpbc5mMLv",
  "key21": "4eJdVUbDG5gJ3H81DCsimJZ4eqizeTeXwcff9fSXKy8LBPEyGZXXUgKZHJw788v2u2pYRXPD4nK2poLbZ7yHwFYp",
  "key22": "2FSLCmcDKe17nfVbM26vVCz1E2kA3yrobVCEA4xpSAqpFaPzF54UCcKdDGjK5QMCnTSQDn9s135PkLTJXEUPCMta",
  "key23": "5rrDcoPCUpcRMQhJf7LSNS2y1zxoKKyXMsEFVDn417xDrr1NGyEefELRyadyhGQAx6LAmGnWfCfehyqRgXhD6377",
  "key24": "3pmQJ66a96Wp394BHpAEGjH9ZHZL8dsP1yDTEkk7RArZb6k7TLMsH3CNmufnZCxm1i8EziDdh9F1Zb491HJFRNfL",
  "key25": "3mNyr6XgWAcwgycmDyu5ruhvDEjtpbkxAmboHjefwPjtaGwmyUayi2V9jUV6vvGinx8SBWfK3swZyEVgAzNRfAU7",
  "key26": "24njx345mhSGahpBygizuTb7qp7bqZ1UG6M1hpRc7zqZafuyxzHMenQjN8JEoJqs36tvjCVSxyA7xEk8MMK3QA8P",
  "key27": "21a6Rh5vCN7kc9WrCUuHxLihjANsoPBsKoGphEtsKmxu3qahmb1Yqjicky6HqGGBwLcV6H9Mb9sCCMWFktD92z49",
  "key28": "5vstz9j1o5Yr5QgHLsHiBoVLsp5Ybyd493G2mneLArd4P4ZTD8noxaZG638NKHon41URGPshUds1FRnKNRR6nctA",
  "key29": "2i8k1TMRBQuYkdY2WoscYZ1ywgVmypgHrZ2oTkcfxrzWYyZJVWPGjrWbdgge3hhZinUKdwyJ2prKXWbCr8vsqfVw",
  "key30": "RVSmXev7XbsBqmMp2fyKSSZcXLTjukErFZgbDWDMf2wzkXNx9rXUzGoSfNqMtCU678uS7UUzjxn6CTymasiAnkz"
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
