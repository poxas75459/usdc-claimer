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
    "4ZWDLq6c8LKH9MtVJULGmgHo2B9gh9LBQyhy3K79QZZ2MqYaygU84w2icdoL7LFwqxdE4i37j1UHTaDTEU4SoydX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4px9L4iyJZ3K4rqao76kbocYR5qPiYF4oPVkeaemSqrshFfbZh4Qndx8agXjZWfUFp6MLCquXUzSrWNeatwEzKVy",
  "key1": "2V7oPtwvjZ6UZdxjw89nJhjeQXhF2zN1oCLK4uxKDcmq8Kdx3EDivmiVmMqzzET8BuHiLmq5Z3gKeo8eX9y52Dey",
  "key2": "5uVzjfotycGAbuX7Cpw6MF6kv2bU5atpyeu7a3pyWHoKuW644g33h5DYcUz5YpGUsbS1znFfyh5bF2m8Nu5JH2eb",
  "key3": "AgDtWGeS2KAUUZJGvNyZpkUtKreasasjjVmop6uUQ8UZTcW5nMY7srGmGFucD1EhQnXMEyRtVaDY7kxrabK5cTV",
  "key4": "5GEZSGQdAQ23peZ2UPx1EVrCDm1npjsKDtUKdBmUXqfAcbidxEdJcHDGbtwi4ZgQNzk2y2ct3858ypPvbQ5GnGhz",
  "key5": "5CyL3GhwTFEhF7NC9FXh1xYpM1uh31fAPWcDnpCkWLhVizZtiYXJumNtAFFwjsJkJHXJJgiEEFZAKrguLFZ3bHVn",
  "key6": "5bQ3KjEHi4hqEFhwFzgNqjP2aVEUSTBUWABFPiqACX6P73tosa1Cniz7JddWy9AMVPH15eHJ2fuH3VBME3CgxfjV",
  "key7": "2HVqqaCsatrDGsXzvRRWbC1nCveqNfjoaTZzYBSaguTraEkdiRpJjEqQQZX34DD6wLfb5yMfbaKVc6k7yqW8EUcC",
  "key8": "Rj4mT1EydqbbEcsVGERtXJxL6KaKcDCsqBWBWowBwPZLpMm8foY75wpnrppxPffCe2AuWYyZTFvTabESDp7foLA",
  "key9": "325erRtznS9Wqq5jUVe9HQtVMWbMeJiddEZ2GpfQmkV6maRVw5P4NxBMsruGLRV3i4S1YyjaaBDPZiocejTVU5wQ",
  "key10": "4x637i2st99YCtfcW3vBu8wwL7fV7nknZyRcpQEdCmnndN5GbxAFCFc4Jz4D545GGWt7WjJsomFJfTPgT4ZLyFCv",
  "key11": "zVLRwJaQ2qweDJxuEAn3gu9qLnS1ej3piAqg77EPzXm6nmyjsPdkHzWgj2hz2NJpiVAMaDMaTKDjEbNCfxncrhm",
  "key12": "3CAHVZGnJLtUJbSfoPQbjePYxCTdcedgk49vohwSWtYagJzvaTFQ8qRQ5HBmGkxs7ZUvp2UnmfDsLw5zwCsm9WT7",
  "key13": "5N2ySBANu7icxjSTabYn1tQ8AawjHbSzAVbBbQLP1JKxfnzGy7kYdC2pDVj93reZJxUpJshuAffDdBsKHKC8T9X8",
  "key14": "FdZGV7zhpdtiLEX7QsBp4CSCLPRVPYDPkMdocfEPTbYzji8CCSsVFqVCQFF69Y5A6DsBLxTJ33UUZJirdoVmBwC",
  "key15": "3UzuJqQEA2pY6umNJtPGnKeDibqnGeEvRRwoTLN2amwT9YiZAVrprpymayGLn3vTJMMZTsSKKgrhUF7eCbdXxcGt",
  "key16": "33Vp2TntpFid9ZN86EPVUWqE7jZpxqpDs9o9AJLZjYDASP5URTHJTsvnbeF9wTMq1nFXLLU5NDr7kDeq3m7DtXgk",
  "key17": "36GndENS9Dh9th9o1jAevp7UrCgW4mkNgDHixzvKtTsXjC3N7rvKes1YCeATUDgZaLYvnogQA4finJpbzcE9gZyK",
  "key18": "49aQUW2xcKXfVEfq1pQc79hbFMhWPfPq1yub1cV224P7bVWrP9TQDsB1JYYLRyp8TwE5Z5qXd92gnziQKGmBncUe",
  "key19": "2fRDYT3NuqbwXh9AGpjjFGc7ScJ8poQHNZoy7mVa7ksCTbXfg27HeizyevzVSMqBL1K8JgbJef9VXaYcyPGZa88N",
  "key20": "25AbTgEoof1JLaDDDzn6vdPGefXswJjKfhoUtDfJ9T8YfPWy2cbKDsTxWZi8sfivym95uQKf7wviMuBdhwosEtaN",
  "key21": "4o9cZL6jQoR9cb5BsVUtZbmwqgkiUwPVBy58jCvErg9NqAQvecJH5RXq4CBEP1VX1qxo8SuFk3SrAN9fGjWxzyMe",
  "key22": "3MCK64oD5AusheELivPZ3gggKSafaeir9Emzee6uKEEMpzrt3Sev4CCGyqj4KGTw3UB7XVqCQTTpxHxzZ8bRK3Jz",
  "key23": "5vwU2LT5sjKJqXN6v1f9ygnCYUxSmwkkN9mKVy3o3BX6dJRW5tpDNHg6P3CzgVfqWVwRzqj1cus2qYdyYfRFrjq",
  "key24": "4MNtSN5ry8PUgWe4usVobwkFQKkMoUpEFKp86NXynLT4m8Qs68HMdtAYexgtkeRSfD6W6EUQ7LYV4xgYoC6gYwoX",
  "key25": "1PYqRA5TfiFJ714qsr27Tzx2nrtXR3Ac4AwMQufBBP946NEGkfedbG3hjmgVkc6AFsgJvg27tBAPoXZzjYuWiSA",
  "key26": "DqWFpyRKvXo1qb77uKw6ApMzLtgiS3Lk3tgLTgS8aaWA9JhfaADyDPSZyWPMgSe3cSgoriCqKyAevqZEj5eCRwb",
  "key27": "zFYnw9vxuBX8mEwVUGkVkc4pANmKj8TJtQiQzNDUXkCEGkBkNy7CZgJLfciUfUWBf9XHR7wF4ky4prV1fD7rAFF",
  "key28": "5KE9NHCjnWGNJobdiRdETSX3V4mWKC3SiyDN1XrfxpR4XjDkL3E8PApTG4HHXBPiaa1Yfsa5HaxSw8xP55ieZVh7",
  "key29": "4YHdPF8AGryXJMVh9WTiiFtQWVWR8KTV2PNLzLaGLpbBsnFLmjBsU2w7mBNiHBs98sACmqScLBmBNMwfqvYaP3yE",
  "key30": "4iA3LA1hs3bANUK6f9L515ANau8KUw2Ti8XQExTUuM3ah69oaxmv5epX71DPqat8K58Kf7S5omwjb3NsRVRt8e2G",
  "key31": "5WcPFZHoKFc6yNBEJN7qCfo4w2jiinLShdby1CMAkYRitGZQBq84PbxhB1AAcDtNrpUFpX8uiKjgGE2tJh4yzgJS",
  "key32": "5vBgbzmGHQRja55jzCTcVnHrRBewxtFHJaiGKXqSNt3ZfEFMMhMDKQsygQGWrU3AJ7AQkeMPH2GisnviF1wCZNGx",
  "key33": "4RtPi4gNcwHXpLrgJEApGa6jaDJKvSycWR2mmiy6ZcimKBa34tfiYYgvTN7bSQNSeWqqUo3WvZcpDc2A9rE9smHX",
  "key34": "3Co9uXd6r9Vdk1EpryUBg49Xp4mJa9BrYeHgFZPTZgdNt8jdinDTxNWnKiJWesuXuvthcqcUAwzGW6557kSKNSav",
  "key35": "2oY3JbGjtSgSVQTfuztgsYpNFwqEV3ZcdkZKhrTkh2FhxMUbcXRH9LWCpt7UP14Ah4BFS2k8xautFhgtPJY7Pn3z",
  "key36": "5WUCyC6Dsg8zq33WSVEwFXtWJAxhZNYZhXsz44tk6mhUoVLqFBwk8mEbwNUMhsnPMqmtybH833wdh7a6DdUMpmga",
  "key37": "2mccHwHzWE4vosdcmGi1hXgoJn5HUn6SsmZ13GobwjAjWdWYvjqk3TgBck3dwhfNHV6YyzxkCmm48vH3D64bHzdt",
  "key38": "4NJ5cZVywqw5RvsucdPuyuebipSo6NZwtcpsPMHz9qBUeCZ9QvDFhEkrBh4EidnXxZTBxLyTA6HZzyfpYK495zHT",
  "key39": "4G99ZSkbWXDb6Ye7GVTmQxn1RRJn1j8hmc2d565gQ38A4JAff2ZRnDY1RsdTDSLEEBSweVBvsbL1o2GfqufrGGWg",
  "key40": "64CGhQh4a9CTNHLbKL6MA8SuEwvwBsy69AqL5JeEfGxQwU97Vt1eSS9Xz1gpWKdNkTjJAcD4E8rUzv7inaF9NLXn"
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
