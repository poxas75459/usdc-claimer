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
    "3zyDtpowF3cyqATPxv7tjaEDUhFgR52WCB4fJGT79vje84f47rf8VVqqeJTcmHdGRQqPfMdpNZwTWKdKSU6BT8GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HKw3vbNsmERbwUTnoiqUMSWxmr17t5vCi723B2UGq63Zq9SFBkf2ABHVQs47cQdRiJDBGEpdNv1AFLC8g6jLYvZ",
  "key1": "3syNdEapgdrVuKHqLnSHSjFi4zHBuS1q23W4sJvyCPkK682bzDJmLUjMt5TdxDs4H7Vsz2GcwV1RYN1mj2FjL1wC",
  "key2": "3aVmMoRhsqLmWZ2DShZV4oaPXt39pn72iHwznf8Mi4AQJK1A8e3135AH2jW6TWC7Fiy3y54mogGruLmbQxK9z6o5",
  "key3": "2HDSQDySaGVqoRYGg12d6qsDpqVJMitJjctLLsNjowM1tpafqybVo3DTpstdcLwiwfyxePu5LSov3ZS3KVYzW4U8",
  "key4": "2v14qBLvqSoRVMjPdsK931dYsQHENcXyfvQNduTmbj9K6StsHHpvv6R9JyU7e9AWUYb1njuZwCVGQ7rJJMc3xTni",
  "key5": "5bmcRjFPT3inkx1CBNXN9NqvizbhnVvM4RUaBHiQY5vWkrTU1sUgiKPoDDZ6k7Dc1V24tyatqfjav4bd7wyDaaH7",
  "key6": "VZ6yDsyivy4wMenkHL12ddMwKWsektFi1fDZkTzFqdeqb511pbe144rVVNsCTgSaxjPfGkE31dWRKUE9pnvzWah",
  "key7": "4v5v9ZsaPjvw2zx5iEiJVe61gTgiK5DX3V3KGSiLa8N1JzMWC1DEKFzSjf45pQBg4p4vAGhJwL7xd3Fx6fM7ckSB",
  "key8": "5b2yQAa7AExvKKE3MyitatLSqWwkUapeMnuxEoeMcaypsNq3TeF6Mw9E28JhnTpoArJgzHTAAvdT4RAQYUont2YY",
  "key9": "3Cafovq96aSUxjL6mhkctEpExm3n2CgRbWtWbY5thNcK4fpgtmmSvKQasMFDAQ6XRPfCQMsCCos7qq6bpvtAsTS1",
  "key10": "3HmcVqYCjhZNurGpWjxWcZTjgYdJ2eWnytCgQV7h5Xvo5uGtTjDu25yPCWGGD2W2634yWttkA1eS6znu7QQyoFax",
  "key11": "2T5P45FZmoJYP8quUqJmrHeWCzyELBZGow9DK86keYYK13LT2ZLL9PDoprmsdqob2ELiwEMg2KdJHhLLqGXRkN4a",
  "key12": "3F7TjgLs7g6R5BxYJzuyKn7idexrngeMNLQJVM2ya4YdYZff1DKCpCcsx7RpJybawPgKppYugwWBGCn5K8jsdd6f",
  "key13": "4j3dDvHTWHB8XqyoA1ZEo7SVTkyN8j8UAphh1bWDk3HUMzX18VAjU1CPUHxjYeC2o6HFb2C78kSdwGHwsH4pHSeV",
  "key14": "3DzKr8YrmQKBxqdyFmLpNXPzbF5QggUMmazb2Au2nTkwacPkgRvz9eQJjPSZv8oKZwHNFZbd3DoQ3q3UgkvdWqsW",
  "key15": "22bGnEU3rARcrfJ9uBMVMStfh3fWRkiFC8axebc7bfb8AuZMqxFrLVMCCXjmKExRr38uBmhi1nn2FUW9PPDmereR",
  "key16": "5paGCvNjXVGhnagecLdP9H6x7t5977QHxs8qbr9L6z5THqqPBfbL42tA2JKYtDToDwGYsCNXmzHbm4KTqCkmJzyN",
  "key17": "5Fuk6AZwAXeYrbgBE426TUq4aQDQNpqbvENNampJ8abvtVDc8Z8Gh62dATD9zfbSdAJqAbp47WxViXacPNMtuscV",
  "key18": "4XJRnm8WAHGW6fAd7GB3cyjK6v3BPFk7xDzNP9nBujnGpGFEZiaQokhGS3ELHHfVxBvDnxYzepByBE2BgV4xngZg",
  "key19": "o4MyLHJYbX8B6wGJKJW5gFLUtSeStEmPFSuk8YtESwXR49At6bLKrJApNKxEZ5ggwopunDqRqnUKCesqknPaiyD",
  "key20": "aee4nKPRpHPU3y1gw8QhCihyD3ueJTq2YTajXFqiQxbec3WgZRrctNCuVEykxXPL1JuGh9h8kkWxmqcAqspcnLP",
  "key21": "2TivxZJM1U3sNBu7bC6j4tZSzAha1wZBGA535fKZKxE5NH5AeJEm28Agd4YCgxar6b6PDkVUsdXKRn4PfDDpV5kR",
  "key22": "3HGasNyaEQqoWXA9uBYSVChpX3GbYAbwK9Z6isdB2aoK99hw1iikvd4pRSEp2ChEquAAQkBdxi6mW7xwq8Ccrtz9",
  "key23": "2Ds11enx3uMwatUFTTf1frYFMJJLSVPQKHSQZsVHvjwgYjtwzNhBmWomr829CiUkBicC65GHdMdQoCVq4sfHQd6u",
  "key24": "f89prDtnE3fKpKtinc3PUJXUpynwpRGDRJijeecQp8FEx4fdq9kJb3rqWEhiRtZZUpfKk8pTkyo3C4o8YcrcFAE",
  "key25": "2qqdDWH3QAQ51FPfAxQotNkgd6FQicwDjyQVb73k6xAHEwECyAtUmjhzWiRNLprcp8Biz6U2UrM72ZhDmfZxcgD1",
  "key26": "5YgQMNgfGg2V282zVJ2Vvr6xJxwzDpcD4z9KFMWweJ6d6JDU1sx7PhKe4bwKCDtfUtku6Q9qHgJAzmownxQZe2TU",
  "key27": "5rtFSdW5A4Zjyfbn3misoTieQptjWEe3osihhereEebVshKnqDBykA8y7eebkaubsDLpiTDfVnFh8Ho6RHKJ1Gef",
  "key28": "3rMf4yQysxs7BCypGwmCYMvfhc33iNhr32DTCgKxn9xDrFDNEmxVfMkaNzZnE4vxwoeAr8uAtPxh8XYeypWc356X",
  "key29": "3b6gkB6fucFCMgWM7K7ckcXcJfhBNeU2wEXFcJUwoncULToXixjDx1SZ1eGjGziUHhnXBSGFh48ucZEVqRRLwALN",
  "key30": "4qtcbEc15zpZCTugGGEzbhzGuwRCPCJdLfNwpicYHmdKKLYg43kjbDb88n4a74ErH4HEHHDyNoswNM4zQR5gLy8w",
  "key31": "4Jvy1dwU7Q1bQ6xMFT3F2NjGUrR8k8y7PgX7tao5A3jYjuxg7cLtRmdAE4fELsSRdSYeY1mbqVFLRC99ecDzafGA",
  "key32": "3kr9qmt56VE3kzW8Fkdzz6ZypNMe57a8bAXvRBxxHLu5MALyHjiF19a445CtvVTJDycM4CKW9H8MPVjZYXPYmruq",
  "key33": "jMFcPQ4zs4BZKZaKq86ShQS6qPMANkpGXikceCdRCmkgZWtXhidRr1a1UrgezKAczW8ZrTYx9Lw5zWPhKzxXjNv",
  "key34": "roH9Z2eT93HGxGgDMB4CGYEuqBQuU3AQVwt2D6RdL975AH6QP84q8GYkaCd3WKujazW8k8PgKCyeTj6j15Ttbho",
  "key35": "rHBF2KeRaB8pEsrc6Ajsx3zYDFnM3ZccwRFTMs8rTw32RtijofJUkfY31ipThQ2NbjWPAFJifQT9fGBQkMiBKLH",
  "key36": "2ohJBhBsz8dBgAJah3cSys2crEzGT4zvkAATRbuCgSeWam96ZaUef4zDzb2JsnvXhEh6GAKcKALioExgoyjNwF7n",
  "key37": "2mSJqcRMhzQ8CPomuyNV35Ut8fHz4hcNDq5p8UUHMkbjy3EAPGrKwB8kcusc3v1fcSuyrBSc7ZCvJwAncYpuXhba",
  "key38": "5RWog6i4WHqDUqTDBTwS1nNXbyLizGNxPhSaPnpiSrdGYjkkU8cybNi2BCprMbgnFr37ks3EjZEgNJWXptS8XrE1",
  "key39": "4BsEHEJi4iYBtKcknXm2BwyqgChwK8TDJek2i6EkqX4SoWDVBT8yKigzKSbhoj3Yrhs7eYS4e9MkEUsMkkA4gtLj",
  "key40": "3ZPjKCsB1VntLLXhKvYAq8hwPeceDnLtPUau498hG1bfuXjTFaWjWWDXhcdXGLWzZrfXigWTXV2iKQKb1uXfPpXS",
  "key41": "2TJjMovTeB78RAYBtXE97hfTKQYP737AAC3uw218rkGbJTh5i8zVvgQp53dMeH5LgGewM3og8nEA91SGTRS2D7ao",
  "key42": "2RTwvoxag8uMA8RarM26j5fovfx3L5iyp63pM18yDRfZWqirpDYyArV4sf4F3Bd5epPxTro2Sc4TX8Gj2JZSNHkt"
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
