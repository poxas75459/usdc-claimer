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
    "59S1gbqB4joKVuptn9oycT2dbHVNBK6U8h4ZAYs2iGFHZw1prMG8ZwLSwt1NvyKvYcAtGxZ78yF5g1RLsjFoPzCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDy7sSCCH4wHB2Y5M8AzmeRt2upUY5h3Mu9Q8HJzBBSJX2JDBdP151GjAyhyAufDxZBsKTrEy3YmFYKYRj6922p",
  "key1": "fLK5F4jMtM4B49VAk9uEMXtp4yi9CGGmo4M6MBRE8FJQNDXcJZQF2CA3uKU1wdm7RKYDCN6f9ThbedxkHpVVHnK",
  "key2": "4dFdhv8kXcy6rj1RgttXCrs2AF9UQZuFyruK8J1zSuDKwpigtNGpBATWejwtvn8nRhr2PFxFKCQMnZiEMjWyGfY1",
  "key3": "gvU4swyT64aT8ZHS4fywoLYpoSWCYxH529RvjxShwG6ADG56pg5p2qwnC2d9t3sti9qwVtvhVitqzoFKi5MxE1G",
  "key4": "zx5X9nqJcaP7Xor4FmJ3NoYZsmsMRFKBPRAu1TfnMBKRp7XX6bQuBGNEpjxep2HyEzVWnbCyikkBRKK9k5k6cxY",
  "key5": "JDDTqgwqyo9WNBC5DDHZy9TCyRZQ2jabKFR65cu3Xgy8TiQQchfQpzdKst7haEyeWEw9dvVrWviq4ydQxr5F9w5",
  "key6": "3tyZbV8mnQ26Za3JyCZGzMT8Fiuk6RfV828QEiU4U3VsCvMPGgnpjLbNXtKuS3Ny6b4KtMBz19MoryhC1KDU9B6c",
  "key7": "RsVnvcXpfiyRr8XWozbkpKmEC5jagztvKA275BUuVjQxTvMBDZY7tqraqiyPuEcsZbtjJLJXrfEML7ahgu3BUYS",
  "key8": "4utQ2UNRBJY9Ey1RrRBmYfnYFaeNQoU6h4YmcMBN7X5AhzBfQHfQMvNioA5FMZaxU2XHxojW3NWQgR27V93QGoXb",
  "key9": "4hcU9mKjW99NCu6pmaTMSMnPXMt5QFczxrHRWtgzzETSEABg3UkePST5RJ4eML2pPgmqGazQfrRMBNMVxc3YHH5j",
  "key10": "2CmyvrJCoAhx8FDqiPAHXu39uXcFeKfHkAJz17yjDA9WoDTxjMiY6HrZdThQ8NRdpE5ZFuVrg4fRDG8GHvv4mhrz",
  "key11": "2b35PmptMDMApD3m7AP1izGiuXcxdLaGLRKFmZ7EfzP1QPiHCkHNwE9GsBVSJce5FwobFqYwYxomF3CnFNKoqHp5",
  "key12": "4YhxcUEgSxj6CYVCmTQYridh2cXRfoczERxdNPTTc8qxEairizpFnRwQMsmNjXAvfRxDRZRDkobmttn1zMTjHspy",
  "key13": "5HLpYxobReNhd5dHsSyFMJkR5qL9PHmfGFb3qEfYn5XoqJVo8KSs8GrH2hkUwutVDBqoz4rZtmNeT6A3oYDmfKwz",
  "key14": "5HaBiG6JRe7UCZmn83KepD8CnFVYY56L23WU6dyw6ZRXejkebUoyCqnKkFto7wy2spSh8fcm8ktrSgxu3RakmHq",
  "key15": "25d2cythxqE6pGjgcAB3qKDnzaQRdK3ficsQ62dFmZGxS2qEBSDj6byLzSbfbjR5Q12WrnrpKTcG7LuTPvrArwwK",
  "key16": "E47GsTbrzEc8Eis42pjK2SJiLQJWmX7WBHs1MFpzYkE2woqwVSqxgLj2xgED4vxrVnwGThgjmWgT6fSmGFab2Mv",
  "key17": "5JYozPvjRH33BP4Jro3y5xcpgSBpr8iaxboUNaqDM5qUxUTHQFXrm5xoBymrXUKi9PfHXcjqxXkXv1CCYTBxaLpj",
  "key18": "GkzMCoc53Z5eLiHDt4LioHfteKdTmGScZ1vmLzD9GUCQshdefTHDKx6gVBeVrGqSjVF8xcRBUQkimPHzDGQmn5L",
  "key19": "8QYWK78BnoeLgfChvDxaRa8Af1BpJYGfvwXdS4E693VeYtRwtzB98jVqqkW8A4NY4RAR1NXtZgEfD8Ux7gmo4VH",
  "key20": "4DYW8Xb9DRXJRoUyrVstFBwKzLNy2XmVv3jv9bLanvNU6FKWGn2nKyxztQfmYBWhGkrD4cgohs1LWiYanJr8KdQb",
  "key21": "2rnDPQzkv5LJzbBjwZJeJmJd8eykak6XbJBSssLE847UG7NGGuEGj8sv86oqfwx73QTTHd1BgpaWC6piyg1fsj5h",
  "key22": "5TEWbmFrvhhCGRTCW46mrYAPJ7RMQKN83gAgnJGzraM8j3pGTLpnQfRqAVxkFcRviQpjRCc9qgqcNKtT1GprB74F",
  "key23": "22y5dmRjWknsZsAvtF5gF6Cu7fVUjwkRGzrkTzcbVnXgGcyQ1MqecDWYeAW43zA7DooUxyiDGNUw9wVdGrfaowp6",
  "key24": "5YBHSPgZDtn6NyFfhsyHSZeNjw7BgNkYpSUixU2S6PUEME4DfDB5gNQMKPXGh9abmAUJsyzogLNbCQYdQ28njagF",
  "key25": "35M5QuEpYY4n41yCH9DJ3BPZpuz7WDyJMxN1oWM3bgWdUtiB6Tr3vVp8KHkw5pSotWxvKeCap8Ly23mRyz2bVxMJ",
  "key26": "56ynLBuMESvw2f5N2nP6z4v5XxevBmJM61Z6j3NUnZ7ukrDe3tffvEfyC7BS5zUZg4aAFgB89B4DKdHxLyr6JTho",
  "key27": "5Eyr5BdgpXQbX5vvoWvckih5aLzm7RFqGC9iY8r3SysFcE32XRLShDYuDzkhXRPJvf7mQyFkmspte4wWovyKwdpj",
  "key28": "2Jhifia5gCxEokXAYzCbpFES8Le1ExYB6NLnd5WsCcDQgUqaMvKuhzk18WMAbahasqkdBhu1ujeKMsMkpLiFPfTY",
  "key29": "4HhKoiPH3Tce4AeXdvdtCA1wKhmYAyEXMJbN9WHsGKWaMt8Vn5BvndcN4ietExgh8MRSXXsvzwwUtdHbW8Ye4zsa",
  "key30": "4PMebMrhmDK5gHZurb9jcv5pesq34GCgfqeVTZrtbLRuVNcCqM7bB4FWCpiup2GuSiy9riftNRFAo9pGjfaJGQL9"
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
