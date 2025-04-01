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
    "5yhWsWW4FRkn6KudzWssfp5vcEnfHt5z1DRyGxNG18FNhNjDQBLo9b8ABfYBTBN1jDMKxTdpr5SwHrBs4i83YpE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Abx9SCRT9ZTXHpEXtWv5mehyHQKUqy9Siy7fcHq6k3XaE41ZqxFBfgPCHpTYVCABseChG3D7fJUBDr2LV9xmK3q",
  "key1": "eEkUBs3pPX7nmDUmqmmf7ESFJWDB7LffsVQ9Gdq6MprfWKfWrfsxPPZzQ3sq1SHtH7uWzyF9KZHYtG7vxLmvzZa",
  "key2": "4HZ868oW5QA9mkJzghM1ec6sxNtPfE3FrnQ3wcoeJwgbDsiDFLiaWEGKP98eRuZeFrLfu7VARXASWsQfdjy1ajxk",
  "key3": "2xRA6Zpo7LrJEKhSvAy1aVuisRmCzLUW4cxR8KuDjxtPNHs5P16r3KsmKyTqyxgv7fWNE1yyhEpA6u7oXhBbqDYu",
  "key4": "2dwA2qFPDuduYpPhFdkFCugnffyXEgBVHgAreHbiCYH4B6NV3VmoV1RGAgpLHcqQ9VMaU7nju3XK7P6insJAWPaD",
  "key5": "yGT2TrCErCRQWumwaeuWaR2xFsqbpui4mcLXLzX7Eoxy6r7bjhRMQ9NYP3dpjnnzLEjDWMKZie9srWPthgM1ujR",
  "key6": "5o3xWraEvBJ4ejLeuoRcRdPHYWvV2oBmQs7W9kerc46dqhLf9h48z39sTJP1UoXtG88iv2QP9seh5pjRgrJxBR7Y",
  "key7": "5QBkC1FbSFaWBGMnEfTNnGtwDgc1QTu4d1WY1YbKmD9Aqdrd9kbNRy7d4e5NoeBZP7hy5XV4UPzmqcr5ftWXQph",
  "key8": "dhW8nmFQQu5DmUfqLR6WbRwAtqEwRmun1JeJAkuQ4LdyhjcCXVDD3kuC3TAmZ2hG8YXVTwhb2beHbAQuZevW5qp",
  "key9": "HrFgdjCGnYQ5Yy6ZvePJM1XGBQ7vwTW8JcRr9VaTYEmuuu3mG9ckZofcmvGWhxySB1SRb2py9RzCFAPhA2Mo3iq",
  "key10": "3mH77RtKjNWZ2Y9KnXeRSrVWMRuhPztDaKQrPqfyhTuQiucvYFwhmoLc5LXjxKtZWAJffnD62TdCupiA9Mcv38DJ",
  "key11": "2Rs6DfCgkdZXLZdyMPpGcPWYENxJgxPCesFG8ZWM1CqTGuywDwXA2duKRAmLCeWB4bFxpt5iKYd3zktpfTjrhMdb",
  "key12": "64mQnoo1HKapkKmb9irw2Dp1pfewjdmTn4nuzKjUkjQ8VCn7ERPgi27rQfU5kjvTYHq42y4LjLBSQMbmxn3gPR8i",
  "key13": "4HArNngWMpw66FAztSEfeCFLR8jGoJrt6fD7X4N5FeC4VKBLeoh7e2giASzv6mCew2gM7S1549zEcY1W194BgdAt",
  "key14": "2c1VcXWn5Uv3MiRaJTMvg1ov2yksJSy2UR23kKSsJLCBV4oiYx4fYqZTm1WiKuHYBiJuv6jkA8Xqs3Mi9a1LCqnb",
  "key15": "644PboX6RLB4vwT9jiiDY8BCfaFt4vqjowv348xwZtCpFnzShvvzBfok3WYHod7FF8g2NoEpvrugFaK2QKdcrka",
  "key16": "4WsqrEwhayM9eTpH4Sa8NWrPSWR5NbSQrAikthD4YRucpFy6UDfcg5dAEDGtUo7rQCJWmg3v9yRps6ViYj33YPQw",
  "key17": "2i5QBAM4jyvws4rE8CKw27mjpMsQsvMiPLr24EzfzTXYfqnWuiPqW5kJH6K6XfR6ipSUPVAEKGqxWTKpKZiSg47D",
  "key18": "3qFjq8EQNn3Pw3a2yKSWg1ARo9iUKGLFWYcsWUfzxeD54H6CStsB7ewQdwC2Gp9fPM43RppWGTQgVDrpxUMnNQAE",
  "key19": "28gJGt9DyW1A55NguLPkFGiQpG3tXdX5fVuM3zeMsRtoEE6SZE1N8kx9unNVz2bKjdg4kJhykxAs1hBvMCf7ab8Q",
  "key20": "5QBaMKrn1uaJnMHC68tgajFJE1QwVPdfupdTt33FSQNa4cyAaBATXtc16tgWfDcRN5SYmfNjqi1SP7KGB3SasvQ2",
  "key21": "5gcubAJ3JSw5JigL3zcyfqn9PePsfrTgWDAvWcjZTyMHDQmSaTuYPwkvFm1BQEpgNfsomF1RsEb3k8rXiNouRNp9",
  "key22": "UYNouUjSLcjG6vd2DqoM9BPLwE9ZyH5VWQ15JUr3d1gyf48Z5yEKGMD9LWb59vZJVHz71Jeoer2bHHdjpdXCpDF",
  "key23": "2oLQxrngkwz6cA9o2nynvwvDfWajdtXqcnrwDNZ8XafG6YGztvT64Tifhw8ypKC9WDe2QeHfiUFZkB3GPuU7nZ6y",
  "key24": "4qWm1sTjg2euGXMTqiMQj6xJvx34WRkWHQxoDB2LwGLiUpGCR2uZMYVwcLqGX7gn6UZpBVcrBCEiMZfs9mS1ALrd",
  "key25": "45BWLKhirb71zQginAU2PLHeg75cWvafvWShchMdYUsD2gyV3ecdaxNWcUcRQpufVgkeQCKSgM959CG3JpYR9eWV",
  "key26": "3nyUJuaUgxrvCDBFRFGgPo92qTFMcdi7KWxmZ1Y9h5XrxGkFRJ2eUyCmVc5KAFCTy1NiYLaPhYWfuvc15j9EhYnQ",
  "key27": "28pGCQr89By9mV3zqqmfox1YoHFC2h9HoXjVU674T1qJGhxvYbo5o8xFyPzd9YA1FhALcCNgyMaoqtNczHxRRt4Y",
  "key28": "VshUNXQBLF7cKNQV7reu1ePJxTkTVzXMitbx48bRQag9pzwiA4ZFL2HuftNaNxzf46ZzQqBxcnsqpBNV7HHUoMQ",
  "key29": "67CDSNJrKw6aKzgmzMUbQbbqNG45AdKck3EsT3x84Zam9gPRHAZS4eTtDkMqRs5FPPA4itA89hVZKBNnU2jfbjge",
  "key30": "SgujRgJ1NnBh3RVSSv3SCmCeWQSBCBDFiVHbSa4HU8rBwmpoQ31CEa4fy1QU2BMJQd2JJ2Xc78YSfn76BKCsrhW",
  "key31": "2qKtsgJz3HYCYk5vNc4ziAeFJbLnvmvRaYSHQ21qcXhHeNYfggaQTpkypXfT2FJFYUx3Uy8GYEyb6QbX5urh8dP6",
  "key32": "5ph6etNb34Ns5prhTVd33VWkKnxTF2vK5QMH5Ms612UgV91sUQxJxoNyFUQtxfFtASyi6zGiYRnKj5cnySffaZ7b",
  "key33": "5i6Ua7WsQWp8cXPyiP4vGxaAZJEgxvmrvKufsmBFpZtSZqTRaFisZa4dWbWmJLZhE6o89kV3x69FBnXfEBCMAHRB",
  "key34": "37HUkTHjE8AybirXC6gofAVrY4Gu4nYEfGWoizrU6rM1KAhsKjuPgGFLQ4nD5AcemRruerTwsFnYA97q2DDoW5uk"
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
