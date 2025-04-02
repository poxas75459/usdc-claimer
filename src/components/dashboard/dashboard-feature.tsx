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
    "4E2hYwkneEzLeWaYTYKd5uGH96V6qTZafm62D9gNxmUayzYJzgC5uWyytpZUUyFLqUpvWzWtdBCEMKHTzuzoAtWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259Te36MztnqHWpBQe5FY8tM7fPvLz5Jj688HH8phkTJcptZzRvdgtGZdnn1L81PwJvnkBKgdh73H2jxwLJiwrWz",
  "key1": "3Ythc8VyX3mkCXYxTJHgP5Kzi9XZzVSEJKwzdpLa34UsQ4tQt8CFmQ3rUZy7QqCMJUSfxWX5eM3ZWG1kf58gPMhW",
  "key2": "Ka4vnbypNNrUdca9sujvvyHcH9feR8ytAiuMyVF5cUSE7K9CVanLhaMoNE7hSsXNSBUt2ZDXyXdpUr741YPMTLq",
  "key3": "31CxDXfbwWrva2WbarJTZMSXNCRbx7jaKvWg9m7dKZRdfx78WnbhrMLaSW4vwhNd73czGecoJ8UCqwQkyGgMxoLN",
  "key4": "4kscJqK9kErwn4Ky1HAm9zbQjXDMdQiWSrH4ynggPkqYVCoHMJwq82JSKsmTJaMG7xBRYEsuJ6ANB9UL8Nkx2ivx",
  "key5": "4enNw1dLzNhCsaavNsRRLz1QMyoH3B22kt5ACykz8jMxwjY2Uh45z2GnztSEL4MmQbWuSuSEy8XqtXcF8kbTBcSH",
  "key6": "BEwDtgDAJKSmikoPZzRZhQykhADPYgZi12hspY8XGVKTcCXsy526VoYv8YPcNQMycSpUCWRLEx4kHUVGJ4sJ9rS",
  "key7": "gTS6GRhqi3bLVaU2QeLNuWjMZepRMBgNdgG62Lm2NmDHgVkSMpvBHCbjVYeU7i2kWkL8gKgQiW6a3LWhHNULEtD",
  "key8": "2FDYLp2A7owEbFE6i5cnmWYpYpoRieCc59aTGwibaNQW5Eiigkjxg1jM6jMyrQnmcfa3krsFGnAFTzz21Rs7sdso",
  "key9": "3SMuDjZw7MRrWTzgBNj3qPPJ5kKjRnbQgysWLV2eSGfUV6QMKeo79bFpCRtSzr1wPtk7s4dJpuPUsXZkn5idiPPs",
  "key10": "3MsD4nCMXQhpVdQSxD4XMAcyGcJzLTvJejGCJNJ4gqdrVRp63QSYtXEQQQ7PmBZvr1zCDMZYYHnC617hzUertHRd",
  "key11": "3AoANPwjq25uq8SMML6WV5RgLGy8TdKwzYsWGd7fxMQg8uaJRrW7aGwtjaAV74UspNPjYo5mu3frD31uAYTSKsnf",
  "key12": "2reqYvxnpTBz53PrFLot1xTGsRSLLjnyG23t6hm4pK68LMLs1SNUa5dvmVtgnc6SnCpPqhKMJzdvrD9Dud5wy1aE",
  "key13": "4MxGWKDEJ6Kx2uTtgSqwutoGf3tePn17b8vjJtdNo8AztnJC858LgkUNruUqkj3FZXnuez76m5J8f9LgmBxmgcvt",
  "key14": "4Uca9CnvgFA6WptE2GerGH8X6stBFEGWczScc1czmYTGNnTbHCMaZt2qM1Nvda7XKduMVsj5Q8DM3MFN6b79doo7",
  "key15": "dAvdpQBrdwVgMLLwVLNRNVv5W64iix5YAkqMAhojfNspwksfaeWofa7Rrp1n2sJi7Fn4Kwfp2ukG6gVopV322e5",
  "key16": "33dvzQiCMVqJzLnBYfcaPx9Upe1xWNN8P5gYL2WoCe6dW6Nhd9oQExR8swDPpE1U7hPJiaP8PFUFjznRGUHdEGn4",
  "key17": "2Dyv2Wgugsi6A5qkjxhs76RFNmstwqK6DJrqLRCQ4U5w9bb4keovgAuUtZmwtWVnPCnj9RWZS9nczUCGyt5pqQ2",
  "key18": "3qjqkMyne7TPAYFJ5Sm4auiJystbjsB7jooSvSWbcBFPC6teYUYy2XzonEv4DWFtrp29Vjvviqa5CcgaGL8BVet8",
  "key19": "QHSFDtYN1aK929sWEL4ZrcB4NJwi5yVPm4X33C5Rdi1kTi5zWmzh4M2bndSRwr91pjLhuGqmHeFKjAh1d3JCU5x",
  "key20": "a5gyhUCjCSCD5svT31YiVj5kfT3u5G5GChBE4qHwpktqaUuh95kBQ7VMedbDrn4putk6SvL7yCF7V1tQg3jzUk6",
  "key21": "52hwFGAojneaYYiHEgA8UNdJQ59sW7UX7LFvDo8wgnDqEWA2zJTVh3oY15ibwUboQfjYmvce6Wf9XrStiuzpiQX",
  "key22": "2zd1LnWDhV1ZFSWLmno74PAaY1rwdTK3fCMfmqNfSB45Kxr7idMTzoLMpwiYtxx9pZBuwQu6kLChu9bZjvNaoAeL",
  "key23": "4QT4DrGLkfCDmFy7mMBdXp8XNoj5asDnPoUfqxtozwDAmLdCJkNcz51YL3HpWkUusF6X5apGWAejythDCrMJcHGE",
  "key24": "21763kr9Fdi3QPYwxxkQDDgDrXxHXgcBhiQq5nfWMrWx6BXEhGhA4p6sdZz7aQq6kfvqt7sQFKDFnAtvFW92pDXj",
  "key25": "3UpuKFT39p9LwK5NCR85o44zQncnxXR8YyLrFhhhTg1249VPsZ28AEZ1cyosfbE2aaNTRJPoZfG9SGNeU2b21Hoi",
  "key26": "27HjskPUyAoTB87nTKcNYBq99MonZHZ6ebdGYeLUx7Y2qN6Y7B3LCBWefz9qJxxtwLqGPp9D94oYv5s68vHawhAW",
  "key27": "25gU2mayKZ1Bpjdjc9UffZJtsR3JuqxJBG3ywxAm273y3bQA6vBAwRG77AmhBVNb2yHgteUgzqpLZTQSMDGzNZJG",
  "key28": "pcdr8yFULJ9Go7eESVBfRdo3jiRLHerXZR3NXGmEFyYtKnrU3XcRgUoLo1rw7BYpaQD7po3raqGLGTvdxpH6BfM",
  "key29": "2Kq2HPTShbZPy5aMhscFQhte1KYaGLaDZy8yjqiaMd13rkarFwAL5c55mNDf9g5paxZYjphMipf4U8tKXfHrhjDt",
  "key30": "29exY4Sp6vXWWGhekrEJSjtqWTPt3HmnTqwwtieEBt1ouiGQaJ5vxvoNHzN8ejGqZWuTqk5RvSLXWqEKQ5kekAsT",
  "key31": "NzQcakb4QJyMquRGNANcFmHUzxAficpra51gJmk3QME1RKCCfLApCyWDKUnnQeAAkNfb1EnX9sbsh5gMB7v62fB",
  "key32": "3NmULxiQm9BmFrVk7x8nE7S2i9hwWCF7zDqU25m2Tdiuv9riFSSYg1JmdUmYuYCtZ8AFXxwVMb9kxdaGoZBMXgp3",
  "key33": "4A7nDMAo4HEYVbLd4phCAKeFUpkANUyWvajqhkp125NdE6AxXCF3AMQznY1efMBvi4Pk5947XEMGhmuRfttQxVZz",
  "key34": "3Xc7pgYsm2dzuN9JPcwbRDp2Lbkx59Lx9uGxigXRs3MEH2UqYqJqAh7x1m46N1DfE7tPhXJa4Cz6VKGmVFevx1CQ",
  "key35": "5BNRLPF8q32f8A2S6uL5r4pesWNJDfBZo9urqN7s6ULgfHefd5eYGPpJ5kepJXchKRAK66be3yYyRF81fBb96Sbx",
  "key36": "8ALrpMY57XWucG3w3J8XGi5poCLw7VryjsHCeRtyDaWEsxSoeprnEj1EvxXy8ktmgm6GATSpatSPrySaErLTWG7",
  "key37": "4uyFKoHgQyE6TxpUBnQJ6oJx9h41Sa4p5NKps2q1Pvnuyc5w5FHV7nzVASWSd3Yby3AEKLCM86N75uFXqexGMJEg",
  "key38": "5rn5VjwyD8EjCtvWy3czE7Bg2m7GWbBX8yPXNqwufBHEpAytheWpuZBLdir2fGhPAsDJpsxExSM8GcvfBbb1BJM1",
  "key39": "4gE1VYY7ei33EBF1eTP4PfZLtM5gXDeNC1TSg9XTgSP1W98WU6erC82fqhngFdg7GBNqrsicXYKTZ2seQNdkmwhw",
  "key40": "5z2JksdEBpNgDUDqG1y2gwxtZcuYnGmi7YmCSBgt6JVgaqK1ZNjYQPREVuWWAo8vNc2ZR3Cj7pLBaT5e2zfXt4Kb",
  "key41": "4UAAHoaXJKMJ5VNAbUgsiWCXUnGctyi1U6VQwyGjL3D48H6CrDQo6EobSCZUabjDsErzXw5KqiACNUXCVviN24fS"
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
