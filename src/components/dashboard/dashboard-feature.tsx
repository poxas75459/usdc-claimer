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
    "4N6UxWMf18KcjL9hpg92nGsVibyRbfqZLxZA7h9Lgnz4AUdTyiGU8gZC45qtKFxCHj3DCMBLcc7b6QZYPytmqgWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PBgTSVAHvWHCmmSeJWTnZb2nucqSW6p5D56jpqS6yKhQ3Q51yX272k1Tuw7Vmjpa1ASzcfaSDH1s8eyF4YA1bGu",
  "key1": "3ktcfLT3ZJptXQqmRt6xsLmNGehnjQoUXNgRPbZDxC1QPUFK7DSXt1ScWi9vYMxJCU97RN9DZtq8euyNGxHBUjjh",
  "key2": "64bvf2vcTiar1Y661vaM6ztF5LThoSLtSb3SKs67U3uoRgsB4gwvT7fzNrHuFFyt4bTkQTupTKix3c3YGHpmekJE",
  "key3": "sDiKVnrnbZ775ygizEo1QkuQiTiqzqvxnhxiHxyYoidxA9mV9Z7v4pCHh1Uv3AZTZW9CWbkFy7NEVDaK95sS1Dy",
  "key4": "5Joou8uxHoPxnSmKkUEZDUNb6rvr7oHxLgAXwNLKdxFcMTbFodWrgcR3eDxUPJHXwiQobADhr3wVi2vUf53Vx2eA",
  "key5": "HLmBf27S58tNntsEUSsiVvR14RuQWcwCAMurWGeqmxnVrNqSRJs8uscqwK9JmqTe4d7ZjYDhEGivDdPhRAg7YoC",
  "key6": "47ZtRt6CWT3Gw7z75n7cFFBoU55WAYHKsQy9pCWtgqwLWXCoJBUhCrWmkvMqFr2jC4kUJ5ZbVZ2xe28YS595szAi",
  "key7": "5mTMERgeRFV1PFxHHBnTzmTvW8uh3MMpGsggqae8grAb5Q1btLZk6yGJ2LknX945iP2iBXuAkrEZDgi6VNb4z6ci",
  "key8": "3rWD432TYgUEMZkUi9NpcEEHgrcXt3sCVePDKpnmXZ5Ld6E95k3T5oyskLLK8wnxFEgiUhBv1nYkhfqXAWEYyDVm",
  "key9": "3RHfnQ3sANA54MGuSJ1mmwTZjPmSMpZtrqPJVSZZteAmoPPx61pjyeTCYxKHy2w9hECG2hxPP4E45Vs4VPqveYX5",
  "key10": "27gWQ254VQtZCW2VnFYQFKogoa7Res9RBBheejXuzosPXs8iM5NS3SocvEknTnMt9kut7kycvPRBvdWALU75Twd1",
  "key11": "2BAGFwNUWeDdeJBEGA4nUkMiNcP3C533t6B2d9A5ESaLccHgpJu2VMPtqEPzfCjPEv9nx8YZjrDA5qxmYt47xx8M",
  "key12": "27oWYdMQT8cnEQCgtaf9qDA1pANYFDNbMTy9JTgoczSzV13vQ17fwvtKVuFTWDGNRh3EGgVD2zpto3uUJppy12aT",
  "key13": "2EsFDLxr3xvxY5e6FbG6nyG5ofrFbnG3N6QXMPBynTMrekH16jq4ZxvkAVeDerbSjhhHTR1o5RHqtQNZPTcTC9ae",
  "key14": "5drdoHpoKJ9oys3isT7eKCfscKdPS2owcyn4Tsdy7mAyKjpneYgjx6xVNspbGmcCmfBMLaDY5xTiWRe2TatTVhZo",
  "key15": "4LbrwocyzywxxMHVWRguDgihnAnFVjozytraxTgp1J4sLiFSv142ijVEkAqi9FV8VDrpXhijjMazeoKh7DFkugWc",
  "key16": "4VyxiLLK2p7S8SEF7sFidNpgRjdHnSahak9vDfPhSdRR9xyrsiYg1xmEZ5VDrTkkP5RSMLSzNvA6v65vNV9AMKix",
  "key17": "3tyxB1Sv68FEukiVmeqZB6gRTUtSeLU6UAj2Bde2jCDLWJCHp7xm4gKKMPFQ8ZZrwsgSiQCbvUeigCRD8xwR2mgh",
  "key18": "22ZkLwAHSYxW7Scr7zPQBbBFp6hVU8BUz6X9GbNiSusu85wyNNQdDDP4z5V5bX2Yfar3X9S7a7UFAztB3UcPxrWu",
  "key19": "5aNE9EkW18ozQ81GqNGqCYEjcxC6Q3QH7GyLj28Ru9hdrsADV58BvoTttLqgVCZqLTC8XBv92aGunVqgatK5hDzW",
  "key20": "3DbP7fKtLxuqaJjjTRjNPQcpFRTHM5cVfKzbSJapkce47vneDdqq1vWU1pyKpJhjrPnvVe6vVDrpdKCmG16B7jdw",
  "key21": "2ccLJi8M3iSmjb7XCzVzhLvCVBxhpfQF2z7fa3TXxuCekH8a9mdKKcFeN8Q16H3NMYfGUuhuxNVKWYkBVHKnvWoo",
  "key22": "4tv2pFkTSLr3pVWbDKsEegZjcDRTMaRCuPXmkaSDndYsJUg4qv9CBkbW2SsNDyCgbJwHqsw6uqDmKhLAFqcrYXiT",
  "key23": "43HJu1hKY7XTVe7azHTKYcZhERbCRpU4AywcnHs6mHv8aEs7DNoxpq6Qm71iW4jFkdGnsiBrJywM5yDvs7p9n5rB",
  "key24": "53NjvFbjHmyn1KVyjfSoGu5eJcVFPZ7GF3kVX6Xin7vraz29zXsHxghhgHm4RKLGKkvnsoQU36uqHywvjYpu8cAD",
  "key25": "5JzciAGwuRrTmAVdP8AJyo77CSrfbR8icRnEV7DypMhNBnzNrx4vKAc3YkacxNKqA9fVXFgg5hE5rHXhnrDRd6tL",
  "key26": "5L2NKEUdZkrKsWXyzkNUUWjtLawG9KpYAjbvVA9XEipLsDpjfcvtPZ1J5jhrz3hMHtXvGaPzBWoavD3DVd84EEhG",
  "key27": "4n178yf8VydLngCu1khRBCNx1JKLuJagytFvveEi7x6MGWEvYTzjWZwHaYNSGQ9cysUDvLxPq5WKzskgafx6eoYk",
  "key28": "5oZ3TJSwasW1gz5ehiLc3FGh7NpQ8boyg3o5rBRXPC3ESg8GzoWyyqZjw6dX54e6pnExEPyVS7awrKpSTCwxWamB",
  "key29": "4ev2NPYNmzQCLNe9vAAsUxgvCqKFpo491d4UcePRzP4bxJfzdVUDbTsDt1gAxvUufb1Lh9WwQ2Nyz8unih1K9Fyh",
  "key30": "VfxaGQjGu4TZR9UW2UMnDMPjwNdfjcX3wb8bvSLEsiHvZCgwAK6HpFbXXoJ8eDfqSTz9RBSZeaJXTypwgaSh5k2",
  "key31": "289EnP215ynHqvUZPrZRSfN9KvaFbqigP16qQqQKAiWQ3Lbk6tZXz3sSkUNB7hariS2ooJ2w12jv8X2mdkEUgkLu",
  "key32": "25i2oSmZRMuMMQ6SN19rVQvPEUNtA2iq4Ba2hbd5Wenh5pdSKZxUH2wchPYoa7AAMnW12BRLzvRxWX6YhkUpVyDb",
  "key33": "4x6w9cNw5KQbM7fSwzjFNDN61jeN7hJndvyDVzSHL7ZAn7a69FvnR6Urp4Fe81GGQMpBXWxur2s7vj2Nx4nH9toC",
  "key34": "3RQsVU7UEznn22aLnVbJph357P7up4FJRMkQcQJ9fFQGirfVSKhThuMuncQYFMModLYddP6Qqzaa3i3dcTbdc1of",
  "key35": "5CqDJX8nRp3ghVybsYiopHa8W77NE5A3bUmhgzgh2q2M7oVCfMx7ELkYRYm9xYeENimsciNvchnTt7miXCoFRcTX",
  "key36": "iCq2KcoZSx3yMs6dqBkcydnJ8qAhW7oE9tTKm5XRHfrNY2P4j135MTCiGadYJ1paEoi541ERsEcRF6QM1oKiWyB",
  "key37": "2fP4cW5rk7TBA26cb5t14YofD8E44qf2k2up9AqrnzRq955XUErSKevKMeMXVDrUdPgpieWjMQWj91nqV4ZVzSyS",
  "key38": "HQ3JZqUj1U8WcBrBZt5NpNUmNihFGgt2YzGcQzJgm9hEP5V4AgdNzdAaAA7AYQhBB6UhGCXUqdxcKdDKkJtEgur",
  "key39": "44YrGLVfcbWbKnhAhoVksvbvXDyF7kPdDN8j1taMbfnahpUkNmvFybCHZmT9gbKmwpHq9y5922Bc3XcxuBN7phZP",
  "key40": "jS6AQy7h1SKdMaLQ8avvkXA31F7312QcKRWhJU2LVxmTAPFYxxCGYpcSKvYmqCPN7wFdc5dhKSFGzMbV9LfsdEb",
  "key41": "513Y8dLaf5w8dJGN4ad5AL46ar7zH9JzECqrPQPKptkcVPGsSmWPdadphD6UusVND5X9ZAT9CMHpzn1dAFxntGi",
  "key42": "3tW4jiYrGMZ9EfkhEhMTddCbkdRu41mh9X2jbDo5JZm4MPsyopmm9cG7vQTjqeFPEsRSao4mtnehHJQhtkpgvgRa",
  "key43": "2zMD3FLowfJaYxFPdQWdeGjaDWx3GpjiSt6XNdrgUmsJbRqp1SZcUS9iiFkLYoWPFTU239oYv2W9ThZK45hXUAei"
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
