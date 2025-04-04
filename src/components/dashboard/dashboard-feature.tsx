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
    "2rWTRxYtNqjU1Tj1QEb29hnMrSiSpt7z8u7Zo8K3tMkVrcbb9iYksKMoYNoVAYUeAfWMRj6R3b3RgPkGReCg6pbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Zkgb9VJLdFkpx4XYnj3MkhEc29bYqtVMriusCr5i7R7gWm4n2hh9J2ckL3b6v5q9p4ocFUUd1X6jMn7tHjUNC6",
  "key1": "3WNzYgc6qgEkpjzYGskVV5bbjH87DtQBXxwEg5qdtoNjKsbkUhs52j53pj5pZrVVgHCvG677fdGRV2qgKUCNUrgK",
  "key2": "3u9iXmEKmviVv3LtY5UZkMzoULuJd7Ai3i2joh3ByHH171bEQKoR5R2MHVsptmeKdhvVT6mAMSPcnjUYTN3rXygV",
  "key3": "3trSfqhhDRWRZ4o1G85LWrmmcb1t2S6D8svuCuT6zoejY7ACEbPDA3Wmg4BPktJu57Ug4FyaaL5dwG6f32B7VWHL",
  "key4": "2zzJotCR1FNZQtoruo6FCtkT5nzZ3QfwinLJosVs4RvY5EkPnR6hG1JHrKi7HUHs3erUQUFTceXVJqj7JXYieY8j",
  "key5": "3XJnQzFWQMpbectD6tVYsgvMz1FAHZra7yVVhoSNbuckXRL3k8o3DL6BFAXFypQ9ybnHHM4MpwStZmkpyV3K7KCF",
  "key6": "5GDnkfJe8N2JH8btAtRuaJZ4xBPJNYaF2bWm48NbmDSM194Cs5BGQ1RKgJkUvStNeJFyYe8RsynDanqUjL8RiWkG",
  "key7": "3QyNw7v6sV4C4PS4pKNSzn6cwNyhZXBcjXMAvwhvmWNALqV61PjVHLhWQEmRRuqVBoAJwSuDRNSfQ55sjmVpmKst",
  "key8": "1ejirnFsVQ5CbjoKiFCr1nMtSPtWLHfeaxDd8tP4Ztyxa9usogDrAmLSuSAvAuPP1ZHarvR7F8SC7FT5fvSxqWB",
  "key9": "5cd51ERKMosvGJjUQSdbQ73oCthjiTscCqbErHf9FzRUJQaiDXowenUZuyPsdo8vj7mkwaxCBLeQqAQAPJPhQmFv",
  "key10": "4phXCYv8TkgUvi4xLpTfQ1pGFbHkzDzCDKjFmZGJTWhajGNGXZDm4CoGanfhk5uzqycvjhFCU755hsYqXUoutj5b",
  "key11": "2nPvu7sdnwcukrQRAyxj69pjk61tmDxBy5Lx7qzq5yHXX851N5ea6dbeJaiRV4y9oxmuBpMD5oyTEfPRHmp1MGLu",
  "key12": "3nBCRkYkQ2ydY1XK7dwER4hSjfyA6JwREW9fK5C4nhf1rJbbau2Hktib3vxwyQnBBN9faE5M2y5bHBWU7a24f2c8",
  "key13": "56vTmS9BAHyL98gsvmsn1KRgmFU2i5NtCqj5dCnyTjEcnH22FoYXkvSeDqQrsK1gUqXNUSGxmaz4gp4q3tcBA6GJ",
  "key14": "2BYMw4BtCibu9UaqkjdgnHWRmpoEWnEiBKKVGFxKfQFvZHSzLYBQWLi2F4fohorVX4EFzKiG7cePTdVsnHKG2eoF",
  "key15": "5MU3Ji61WgzEGHqpgQyGCiWKiGghxw9qcF9RfrZha98CbqjKLMwBERm2jCGTEb8jfZm8wv4faYePWYCd43aLz5jL",
  "key16": "5E9UVZ9BY4jN3FLdwruqgVdgAgwhUD85fCJjDCYzvoHFw6becKxGg5wfuQahEYXtQ7LFbe2m6TmTyGUM32kiFJYA",
  "key17": "2tUSFvsCnKFwhmQ76GSFHZFiXWkyesSihJJ1YfxgcRdZsSeFn7i6RkPGjsPUqKVaaX6P3fEE6FuuPZ3mzzQSmu6J",
  "key18": "5eXgznwcCuVi9dJ4MMCgUKVDm6dBPh2FViR7dWZZweWJVs1FeY2gNZXVm6d8LhuyU9tEjUs9i78qDEgCnHphZEK3",
  "key19": "5qtyd6tWZUFzvyWMyxy1GndmiRaA6KiakvanHYci8ZLmrBfF843Vg1MLyedoKgkchZSgGPniL3nMcdsZCRGFQQrj",
  "key20": "Ggk1K7qohduGATo7wKNCG8oQhsyunPgkM8LdEcVAtUq88QU3n9mb8HfyHzKhavfxRMhwK6LDB5MDeVwq3a6EmAG",
  "key21": "NWSX3euucqcTppQHkfszQ5faP7oYHrVYHxc1TqfMZzVnNVNiHTc7RQ1F5QeaGijeEaE1x8fsGPDAjWYkVVVH8su",
  "key22": "5dKhc7XP7rCQC7Jn1Jpjtua8EDWv25jdC5VS4GV5xmZ8Sj8u8JBmUf5dxvTtKGR9rkWVgMF8vwS9sVbQ7CofnReA",
  "key23": "2t8bXhqzySWaLrM1z32fH3xnCURjkuyXTkVGzdPPSwrH2eTjG4nXW7V55XQP7PrgPiRFp9y75HyzUJwWRo5Me5ak",
  "key24": "kD4YRFQjwyKc9jRV1SZJLdXYYUNmzqnMLGKtLmKh3iFZ1GRmwLXr1yR6tqKjvFSc8nL5pQsRmQ9UCZ2Mo978XpU",
  "key25": "5needHcqb4dJY6UNc4fraaayDV5vD3uaEVop6Z27maVgRwkL7LnSSvYj6CVWTswFGtYG3NN5TEDfhwddpTGB8yPW",
  "key26": "45xADWVHNQXXycYSLv3pVPdMfNyvPYqz7rXps9ZDwNiCRjayd71iTk7m5n8yo7jRC5Jp9Af83Bg8QPguwWPGPu6d",
  "key27": "DVMQ3CCHDsWqNx4hk2usSPDGphyaEGtfcRZsyRFoXwduWvnN2XSGyxRbhuZ5VXgb4poE3vHdzkHkpZVnQYXWw4G",
  "key28": "2ZxZdnPd9ps6rMDspjpUM7xaFraRztx4d68ncHYuRyQTQ99LbZD8mr2x99Se7TKyK5g9kn7bz1CLcgAf9PSgTVc2"
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
