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
    "5ZyhZ3nMPpetZEDG95187P58TWfZeazDUQuD4gXsdAGXnhgE7su9hHvoUKMPR5KbDvpFbM8qeve5QPTX3rH7qHgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aJNg42iarySbQkXEEqQrPWnCax3pyWBS7e8wNNdDNyoi6JNrQYgoWru1zrqDKgeH11LqWWDtLB1GdDGgV6kabG3",
  "key1": "5DFEcDknQByYAshZQCPLebykkyWMTSQcy2J6GHR2cZL968aDVHuhXksXox7CzJMEWPzFbcgEXh4fPszk52cL9Wsn",
  "key2": "5h6etSz34RShPByhKtcH5z9z5tuUXLrp37Fi2MzTWv3RQWxemZuiSKQ97XDbpFjACBVXdasR3RN8jyKtHdm4Vh8X",
  "key3": "2Xx51AsAEgZcDXuoU9iVibvShXERXJDty2o9TDT24HMY8iSyg2q1pGwUgc3VzCmgoyX8KfGzFWjJF3rJT5qwZoue",
  "key4": "xwKWXtRHXTbpewbQNWgcfidxznLRPFoXcGANX6SQFgBTFJJRi18CtwGgPF8YmUt57KgXN7XSDGVbHiteFwmpSZD",
  "key5": "t6FURHJKVApnjiGt47RFdAFyjcmhVq3Tr3cQdVgAyDvwHiLEJfhqYP8J8f1dCJ3WdHzxsS9RcGXbUbVQT6GUm7z",
  "key6": "5v5sLxoiL8VruCTCZiokLYwbF45pVQKtfmCVBmRJStXowPJzLpMTyuticZ1ptUJa3gXtNGZqxUK2jkqBe4ZaypCZ",
  "key7": "4H7f4BscHnmqNmpRCQRwDyvHWvkMhBAohirLxibJq3aEJRTVRM3xu6fQL2azvcop1qubSY5Se6KYzp4n5g4XN2wQ",
  "key8": "3iq3B7yTnTa6gXT8bkG9qcdZr8GQbSuQufdMazAVtqn8Bk9SBmpptBi8j6KZYXKuB22BPmdCjCJQ5t9u1ouepYNp",
  "key9": "5ehSkrFMdSz4pSDfk6Kftq9oGpwy9TNhaRPUgyorhptaXqGX1aD97QkX7iCMHMzu61uAQg7rEAQU9LsvM2WwQUaP",
  "key10": "3fa5Hbz3Y1ZhnLreybmH61B2TMZbiB732piUSKCZfJY3MsgWyqQSmfq48fKdKxFrwyXgbFKQjFLcN2EmybHMZLJQ",
  "key11": "5ouJjeTE27dEVVbRp2AzDBYmgghJm69yngUXWrY4RBfoabPxE6DS3uy5w8iM4gzuQFiENB4cxLcbJVoVZ8ZhSfRT",
  "key12": "5F6Qpe6hVqLqFZMbut1RxheriUGjAiP1hqYQ8qpUDLMAxJQ9xhpD3PPf3CrzHQXKt9AK7uEopXKeEuY2dHqpvri1",
  "key13": "3iDxV18TAvaRzdV2AEyR8g5LYbXXe3XWzoin21QcMdt6B8KSFk5vCdwPhuiftGbJoMLpeU91uEPahc2RhrhEHCTY",
  "key14": "wH6NAoQeKC6TaSpg9Ho21XdrNgYxdQvdWRW8gEBAMHzjTjk2QjXE1qoaPULw4LhQdkqBsVD27EfGBq5kaHXuwpk",
  "key15": "5PmNvkv6jZE5c3hnamoAKohA5z3aJgYGDvEgJBYXym2qTTFLBiKKLSwEXC6GhtakDmt8taUwY7koGFQ9q7LVX4ck",
  "key16": "5eDCsjTDftZYmpqD7fqhRRM3nfCrQ3996brfyrkYuRrzVZUAudJ6Z3hshhs6qoDM6o7sBL1mox9ppsgxeZAuoNBi",
  "key17": "2HQSbjidrUGiWLzsHB7XbUm63hmhBUZvqqqRVc1vRsQ5kMnDqNtga3vz4nNgbLZ29WzC9zcKyNFD45y2GWgVUYSi",
  "key18": "mhNQJu2U3o432bWGQULUAi4gMTKG7AcLhvKm4JfYcy6twJ1VdBEtzYL77tz6VLLvV8crYgQhgiPLos8w4hEnftG",
  "key19": "2iv27WcHMDmfNYiTMCWYHLfFk7E8fpSpgg5ipKyLFgo64Qp7jwsc46cbdHmwFmwUFpdcPkprM6KiipTsFPWcy6cm",
  "key20": "5c6uJ24EMpJQZWhuKJ9pg4qkRpRxNFu2PKDpExzGVGPH2W1aTdeudFpTxFZWn6es31boCeokWCeXSzbmdkMDZtW4",
  "key21": "5Q3CiHCLibrqghFptpJZzu2XWqi5B899BTiTYL1dgJW5tCN426frE2VKn9J97vRzwBMd8enuwAzwLJWGnCZJwnsw",
  "key22": "5RuJnc6NfYthaYkCQ4mRF5Cf7e7Ph8AnCePePVGevSAb8GMJNJtKjyGwkrzfcjsK2Rp4AuFYRVuFoSeLLmP4NoNW",
  "key23": "h4dkGGT3Y9ayAda9VcioNGagzc1RL54VmM8KhCwv2kL54fJ3vfaFupFMF7NuCrP4p5MALeweEsLS587yeEzU6cz",
  "key24": "2jxk37DXvR4zuaCWMrK21uZagiyFxQQTspD8riwsNudJsPiputKBXNFoSqum5p4B6yxV7z83W5n89GAXwT3j1iSh",
  "key25": "qagE2aDbKqjFJ6vTQcKYgM941CrSVwpDQfADArsvDFr7wopHGefnjrHAo849NvxpHAP8HUEZeHzN8QH91acf71Y",
  "key26": "YhKHcKzQL5dLKbTcTetUJ41TuLiRPGDKBY9v9GnkLjkBgtWBznaoi5qSvYYJgPXXxodX3PYZyH6KVwsKh2j6K12",
  "key27": "5oenK9ScNT2rzh1mRWzLkwjWzc1qKyERWs1yfqUfbKTJhs2gCENRJyzy9w7fe9EkPoZRZ2KN25XBQgXh51R8ScUj",
  "key28": "2EyLU7b394uh7qiqoCzcAo46xLD7P3jCj26KPD1fegjY48CoJvxnvKpLBguFaifV9PdgTe2xYanuD9f3zKWDEoKD",
  "key29": "3k4eyMTuNsFB5LsoJHBkJkakHQgXiTgw9UPDexn3ti7SUfFUJNvrc1H1T5em9GiTaUoQgiBC1euf1nq89KitkvtJ"
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
