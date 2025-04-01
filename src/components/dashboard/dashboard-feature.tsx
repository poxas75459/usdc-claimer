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
    "2RsNPgc9gNWTVPjxatZthPycc7y5Cb1dBY9rcdLLcKiuf5gZ4Mw4ur9x2xAtBRAfvwDdZ3F7asjvHLm2tfZz71Yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtgdfyUS4Dc6nx6NpteuvjDRfML3eQfDQqnEsLwzA2nXgGp2ees1GAPJGybzmPdX9jCMHxUWRVeLwPAwk8zL7s3",
  "key1": "5VEtwucZE2bfkzDdaQdRWWCmoaeUr2YVMNG38w7Cef1uQchAmKBA7fa8GYUXesAs7Set2jkcEGzidRxFVCWVKNvf",
  "key2": "4m8Zgantc6aCcDN7dzcNRppKt7PSYhuKV1EJ4XmtZQTcKDXqPyswN5BdCA2sLMmQLG9gcri2G7dndkKunE8WehLt",
  "key3": "27bxXDu7mu6QBCmAL4Zu9mD3ZypnBaVHfbjrgy1aQ1bXqMhwtyKHgyjE4iRVjbYQEJU2c3rywWZBSkYBMKxQgL8D",
  "key4": "UpX4y7NCP5vqcbWENcn77csA7FDMDjcfdknqG9WjxhzEzkvyufzhAnRAnX9WKYx1XagvhBX7pb4VxcmRi65yKZc",
  "key5": "34mCAJckLJwEWRCV1wc1R1SFRKkYc3nndPBnLXsqdkVKAhYaWXiiYYPbQDSSde6bjRHJPsMEBtC1nEVnrkbpcFHC",
  "key6": "23FFSGic8LKAJAjoqVxNWYBXSiV6hbibdMGbjXntRWzWUyqS9LGdL5pxGTj9SSb1VrVaEJFZ4fS22QAv1eCarENV",
  "key7": "3qKv7Cb9oTCq8uK9EYeJjhnDG1BQL9gGwJePkmz5n9PrLkHY22WVbLPVYA9ekgBzfWmyBdofnfQ77xPsDEwvWE9f",
  "key8": "45K1qLAPS2TLbgsR26bCNWA2ZmxxFZvTmkhVHekPrvp63QvXQ9CkAGJATdXPTHfmswziWy7Tr8gNnMQncB3y2jMh",
  "key9": "UYo1Eh7NFEpmUo6Bpdo2JpFPutkiaEcQYDXfbbF9ULuHrEQnmnuv8aSLeKD2BdL5N1acWK7jbQ9rokKM3PuUtwB",
  "key10": "2YcgNcKbPzkem1UvXkE3CdBdjRrBTFms5KaSc5j1Dp6uGHzDQq5GbPYQkMpXeW6aqhn3HCGgmHJHh2phhEh3CJ2Q",
  "key11": "4mbGqkHvfE3ZVCyGdKKaheateaRWQMnhgYa1wcixfasZ9wXAyZWXt4m2cnqt4wNg4mQz4Qb1AKrgYHSugdYYExmP",
  "key12": "3NvaBpgR96EX4SBRVEcQm3w1qxi2YaXVqPDG4TSyJN55CgSptbZfx5DwGoj9UKKjiGsqG26u3P4uSPf4zGhFFGfX",
  "key13": "5gJbSLiGXTEKNK4qh8DgXpwSsoRhojPY8CPkqF9G5hQauPx47CKFDpDuG823BvVsXi9D7j6AkUWDpXUZ7Yj7p9V3",
  "key14": "2uJpLfT6c6eAHGfEXMQWDZ6wvEvNp86zuCEEz6XiuCZqyX99f3hB6hUXLTgqtUKDtqANrteih7vqLpwZ3wruAEur",
  "key15": "n8UcQzZ8VmfpC595oTFxCdr2CX454fXbSDLm7PYevh5oWW9S9Yghbk4VjNwCZLcEqARcgWmpBC16ZPW1mAi8HZV",
  "key16": "2jahBGgBqvuJ6oVk77c25Bn2Xz8VFFdGeFEVt6aeZCyQng1T12ybEHXkdiyi8jJ6yzRkyGHAT1Xn32xdkfFTffcx",
  "key17": "2gEkUafeJ1XXAHHrE8Tsgod43iLbSPZ7DqJnWwP3GySQ4Nmi3d9rQMGSEBQ4pPCNELEgSnSWCJD2VXswD5YYLygJ",
  "key18": "2rm2edMkvXTYG3YrrBEy5BDQ2gEpcMjzWWEuHAfAP3N52xzseqKDSqViSdZfFc4A3pXcH7WS5wQAi6bfSBr2tsS6",
  "key19": "hjxMhRsH4gJhfXa5LexUEvz1Nd1cbgF4ax1BT7HpzSRXK8AfGsk8VHbabGsjQcGvUwCugmXrLtoptkbNqZSAejw",
  "key20": "4vvvv9vTBa7rHMrk6ZPvKbKyy6e526uEGXcoxZRH5jrjTc81sbPmjtx8jdHx65nxNeyW3LhvSxeA72xxinmryVni",
  "key21": "54sCqwm8joHFGdXmwFjGAp2Ca84XxZW7aENYWXnDvunkLAhZMLSnSiCn2BxqBDxjus3oJA7KAqoRzdeUWXFgcz4p",
  "key22": "2HA6nQyDhpNd7PDT69HxqirepzBdnq66zHJgjf5NKsus8KTFYXH57i6t7KXgC6BHgXYPQvGXY7Zg2w2bLyAsxDJZ",
  "key23": "43YR6MVpP3EFnsEsW4KApmeDh9jgzWNKJJEbfo6BPBHmzSsoABWk9e7WXBKnG7cbWEGG6mWX2RECdJKrtBYSKR1S",
  "key24": "CD16otfAm3p7Ppq8bVnQGwcQrnBBCjt25z9MFc8d3WcueFo8FRdSzGqQifg3PNQEq2rJecNxD6eNzthf9NCci7R",
  "key25": "4RAmZpZKs48EZukLL294Yo17wSGA6kTtH2EwhdKydwtAe891suMWBdDUbvP26mATkuzs5C8475LxcwSDUVsYxsr3",
  "key26": "5o534PNH1j29pWo137FvxtuzkNa2ALKkvo2xh5xH5FvnsGdbd364KbSDFdtVjWPnUvqMXKxhXe1WCKMGJcSV2hB4",
  "key27": "3SC127RabkiLTmVcWRj347zqk4D8MQa9CvA56wt8X86GPoM3nLp9rkvcYuaMs2KxH1E2KHWgHhadiGR1c4sQCtoK",
  "key28": "5Qzk4ieurqCoAFUPyBSAc5MpLP2L4ip3w5wHEZYZAV9AnBGpr3zis86EyHxNE8Q1r6m4xKkCqvTMqGSfp89tqijT",
  "key29": "uJXEAWjdXJtUWGLtVZMsLVikD9p83fzb73vyGKyKHinikeKoLUDWdC1akKof4NiE8kFAXHa59SYfP3SdgsEAomS",
  "key30": "2a19zqfKKXR49bzHsYBS6QMSwvGKU6LfMGUNStJ6PNZYj48XCFESgT932tUB4jbmocyPsd3fuhDmaaAAspUBKEzS",
  "key31": "5JChjB57pBsPGSKytZx75eFTJCH9M7La23EJVRveR2Lhh9MB8b2VmT4uDbe2g1PbiWoFRCdmuNjoeAW6vvyHH7PV",
  "key32": "2zRPjhUoXHXXYqiKPZ8dV6TGZrgn2XuKeTYe3w2WowY3auPbKsQpYbnU8bmPooJHbczGNLXJtkfkTrBFFxeWXTxg"
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
