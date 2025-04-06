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
    "25yTPDxS2GhezEYTFzw7pmmSMnDwAw19cdX6ygkeaxEn7PKV6vDShfrtFMjT9rpq3hF745nBaLTrsafJ9cB6XAx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QWGHT4VaUGKmuv7mbQ24tK3iwATxtmGwJazeDyoMevKcLVWMy8nz9ZEQwyvncw5SLswwSYYE1ZqkJn89Fz997VS",
  "key1": "Xsjp1y8978aCzYCvDwLWbttYF4tg7pNpufWJ8hMXKSTAnaAbZF2t2UiGw7HFL8LPQQAn5YPVdeTLqidR1Yx51Qu",
  "key2": "2QqDttHQGzqjQ7CN4wT8x7vMFGTGQM4FLYfUT6su8m7imxH3jRHQhpHWUSpm3KiaHYhit4vVLzzJjw9qjaVbF2z",
  "key3": "i6yeTxa8xyb461znaav1AvFLmomtMqJHCvmKg1WmpLBEGw9dMXZRDeHK8rYVe5AqYWgiNLeTuTPj8FnAM2RhJp8",
  "key4": "5toyVT5LM2AHWq2yGcqBQKwKuTTLM7MSkcvoh6SXgDSaiQrnFHn22yR9nZD7KYEygKQpuxgrs7rpN8K4hSFVM9NF",
  "key5": "2u2A3Y5T4eq4VxwM3T252zt9nYD1AntdynKXvvkAmwTYYvqAMVtNUzYT7hRado3DxRHaABPZ7bReVoGMv3WwtyTd",
  "key6": "5xH55uy4A7oyvaNsphW1HsQpqWqYrrf3Du9dwBaFSHu3NCxXB1bJNCUHmh2GfiHxfZkgoQfijz9t674bsPekruyT",
  "key7": "47XyULXsuUi7KB8SBQ8xE5mKuqg66EGM2QX4EAAZHeENQXH5wJ5zMt9eimi7Rdqks7Swoi4bL5yYwcdzVuSdNB5W",
  "key8": "YiiEs67zCY9HppftEsa8EysN22VfjH9ajQ5mQRhyG4pfyx1Nv6AvT9FjiU2zkNXHVxBFXxmF6pC7mF8iGTnmdYS",
  "key9": "vu7xCy28a6UBeYLqDKgZ3NEuWK4vGMtDMFzt6oMApHN6KuuC7he27heCw2dNxPC32yiVsmzBWB2JC66WmRKPsSG",
  "key10": "4w2S3zds5sEqyVpDerW6mfASCQkHeVZDjokVrpUGjU4d92ENHmqNV2Zp9aX5gfA8aj9RTHLsCKgMESW6jQkVYgay",
  "key11": "XTSW23SCSqHFf5bSoHo5zEeH41vHxehotUE5c2LPSVaK56EedZWtYrzsf7R4c1NXYnmg96Ter9Wzggbf3X7BMNB",
  "key12": "32wW4DCDjrFVPoSWiwyqmvpRjfvRWmkJjDLjumrmT316yCgh6zEymvRSiWJCS6AwDE8RENQsvTr5LvLFtSsxhVnG",
  "key13": "2TaTN9EZ3oZuKJA6VE3tnuYFwve9Ee32RyPmZQf1P7tLJSeFXMwW1wXLYDbQd4rHaGGW3zMdoCb5LJpQ8weZcDaW",
  "key14": "4fZawxFaYp6UvbZBVgBD5XMRYCgcUy9pzM62EmPrtRyWwtwf1XQgotKSY6zdSB2RxeN38EHFpHnWVMJU1oKb3fZi",
  "key15": "sLPrZXvrrAjHvYVdwyWLTYvcNRrfbJZn5zGiBVdysLui83anXy1uq1EBFfhVrzukGR5oPGyCXJ1GpzxATG6sLfV",
  "key16": "3nTMXaMQYx9rHKgpSpUnvVmTmn28B76o3kysCFR5QfhYTwdc8NP6K2P7MpjraJS5t48ufuPhYgMTXzHjN8iW7Cof",
  "key17": "j9ocn6cqkttLErJ9VsuMQhYE6EMoSMLWHEKePqMXomK2PGgAAhfKbDQjn6SwsngfiNP4ZowET1BCcLTEyZn2j4S",
  "key18": "66gHJLgyJz3x4MuFmUdxhFjyj82gR5npiHbs89PiyQgpTe4vdeZc76ZrQErH6DxqBmKe9CQ6MCjG9AbVo5esyiDF",
  "key19": "BfPntantypGRJhGKCR4KZTbe4Q2KRrUZcjJUSZgGto47AUaR9bSYhRgHww2AHd32Mxob8rEaYdeAn5HXX2dgGit",
  "key20": "UH1qwFNNvCWTY2mP72ZYoBNk3omuPKYgBq9URpBxKpdAESAWwbMAXgtQ2qoAibd3HcPdj9isCTKqaAv2EKoS39c",
  "key21": "62CcUNxbDwKoRd1g591tVaJvW65qbEz1zvLDWSmM1nJNKzvM3buHcqFoh6xrKLgMsp6m6CLeULW9fxPPKKiQY3iK",
  "key22": "49Qjb4ZXqBVCcVomXnvPGnuu5S1tvGx5pANzttofbrP657Sb9zJ498fpBbGnuNUAdXH6KeC7r2MjTdxmqaFM4qTa",
  "key23": "5rFZdD2zr5uuTRfyDfYP42ehgUWMUBYkr3EsUyX5ArV6hStXFqzyZVy5v8vsjMwRvqrYxvk1zBukhqqPW4dZwjMG",
  "key24": "3CQZnWUUtLgwMJhwcA3735gUvBFrcxydudXLfmL3FK1LWiTA4nQCHeKs9u2gniJyGeGwxra33hQJRvcuPQpPbg1f",
  "key25": "33XJd3iJ1svfu4RUuHjnqzFP1EnJxRpbzbLMQuMHkkq9SovcYc9NdZekyA5BwvrrNkrr54tfWzvSdC2cxuEKjgPQ",
  "key26": "hYSm6HQ3xdqDT3R5ay19wvKn2g6tZ6vhJPR3WwUWx5r3N6CogYdyWoA8h5aRNmpKNyoRNNCeKAACj4FNGkf34wp",
  "key27": "2XMDpj9G3KmRPKvpRBX1rCfuAU5LjGJspfgcvMDtAdCyug7BLVNFjG5gVAEeSLdGT6v7mtKSQAefK6meR44TVHaP",
  "key28": "5go5Pmtt9ycvmUPaxjMrvtQYf1Apz5b1z8xjvYYXHz8wLx3EfSuV8jjiF1DbWaTLP3nGQieVbt9khzUC64mCmfTn",
  "key29": "5dviL5fwA4zhkdQ3wJz5Syhxyqv68LoHhq9fhnYqHrzpatcPPe6ipqsLrxFGLGmRDtUoGprokM8UHsG2qGVeatqw",
  "key30": "5d8ve6SyTQ3MXJxd5en7rrix3Phifm5Qzr57htoAtoWZy5KLXyL7Z3NM3un5ziDjjshf2rpi3VfdMiskfkuCzNJ8",
  "key31": "4i4axBxLkgNEz2Yzod7gdyTzht58bu3TvtcvX8dna6K8KZQpu32k3wpGgiFyAeXkbJwJp4Ap66ZGxbvQqGQVi3pi",
  "key32": "5HkXqa5Nnm2H8fyeNfhKF8Cn9tvV6tmuFt7BN3Qr1VkEabVkVjGBPBBi2xyy8kH48ctQT1Az2hPTwykKu9LzVHrd",
  "key33": "5Sq2z7sQ1oj8m39vJnDGBf5H7grEf4hoeUKuaAvCHu5PXMQxEn9P1EgKWbVnn2xwdxggiifnk1CdFreSTq2eWdL4",
  "key34": "5hfXvx6UBf48Td75TnHJ8FmknN4895J4gvLfWQAqFdAbF6njzX48Gfe6ksCKcZSMaowCKb3iHuTyw5gjAs12XACN",
  "key35": "52RQENuB2Xo2RriJRagGgPt8j2KM6dXYntwPiGHqR3x1ARTcjjTPf3VPdFGcHrysfu2fmswfui4HQCBeTjprALtB",
  "key36": "3L1KeLcRvq8ice9tjjJGBaE4tdpYekszzbKbpthKMN2bpVh9vJUjakSeyyeX1vTRDQXzepYVviGWHUoKbPkxrKTm",
  "key37": "278kueAsDDPAUQf1skN9gkegiGPCZdY7m33acd6TBTXV1xGNRdMc3KY8iKjcXy6BA6Bno4QTo8z2sH4Cmr4WvcEH",
  "key38": "2vjRCnbLYa6Q4SLYGtENzqs7cjQV3RtBCnsCiJgtHpyk4bv5P7Ao444kgfKBZPWpjz7iDF6TaCBPg6z9FGRgnjmQ",
  "key39": "eBkfBSFhmhmhtb1TKD7vhf8J5XpcGipuC6cyyDvPeu9jFmfVo3gkPtuJu88vx4T3ZdHRSdD7wqi4PzMq29KJHj8",
  "key40": "24ahUJs8kg4RYyeHvm26DgY9aJqmyDYtT11m8UwXADTptVnTRyttbpY572JgN7EmBa1oJaRRuFWRe5sWua9cP9vW"
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
