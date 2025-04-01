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
    "648cBDHvfARUnB5zidodUYefcaYGxzT8rHdtfDTzmKRvb5AWmJgs4CyiPa8oV5p6zYMDe2gZZckbtLokAXaB7H6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NK1GA2dKvKP6bH68GPWUAaoQPQCHVw7eoaBdAgYW1YU7CXQKbJgtcgzZaEtvfGTFeyZHFMxAnExJxpdfzbcN1P7",
  "key1": "4cwVMwHinVcdP1SukXrLNFgvwoMfaV3Ar36HHJg5dX2gWDweU6npjLqvvVQmSaLGHn8qFj555bJJWM3VJW8cHecZ",
  "key2": "25pRpTpKavj41HGTiaxTWHtRZ69CfFCuT3MUtVzBuSfSGTinBVDwstcBS2nigu1LhcFBCBzF4hVu9rAR57BwNXZC",
  "key3": "3qVufB97r4ZuuBbASLby5jZZ2UyBy3HKHkL7wJzC7YttZPG1ujQWw6cMEB3qZe9b88oL6LH6QqZuq1GkMf22X8hB",
  "key4": "58Kj7XnBeykYcBMkvCoQxgnu7CfDcEahNf2b6ru1BRSLEpNJRd29A8ZTjHUnrv6YLMs4ZGRiomiavB5WRsVVMros",
  "key5": "48sqa9D8DfDCXWS25MogEzhDrmQeQCXkwckt2FPtsjsLpKWzzMqQFDQthbBKS4aQipsj9KPXLAPxWU3bmwRZhFCY",
  "key6": "2wLSpLtU5P1HKPbwcnpiDrshyWhuMeNz7dw5tBLJzmz1Hd9pPcQqGRokjbvjt9DMYBRfL4F9trfE2HcQuXcR9uwo",
  "key7": "2Ri3W2ecRpxzyBKcnZbrdcaMCorM2Q5fZKZ6RfL5WowDXkZaekGNWvqHo9H9TH83u9UL3N7kEDANaFb5bx8pm3mk",
  "key8": "2ABGd9TetTTaebBrsW2jf3rpYCboMdKA7dx1hDiLeA5phHkJrS5voDq15X6V6zTYmaJYApbHJkggLRX55HW2JMRr",
  "key9": "4BPBNuaLGDPapst54mLs7RyR3QAV8Q6Uq64ivMpcry1C2z1e2NuxBhuL6PxArD2LscPav4A1YFVg28wGePHnHmtH",
  "key10": "29ZZ8paszEaygC2kFdKBdiKHtbGZK3PRYPG2jy4PMtSQELzMoQrSpsatsipDq4MY19wnnWcNT9FyYQG4gugZGEpX",
  "key11": "2WdTfwU2ezKAf4LBMhK7zXDZLjQNXaZ9JWquy99r2v3X1XQWdbiLj1eXaykLCtJkojcyJ8WwFZycXnepbHTKqcAw",
  "key12": "5Zc1pRNCXZwvebyRYFxDgxEJxZxPvqDuiCgkUceViV96RpNGXFY1BQvAX3FF8ZueLekyz4ETVZ5VeBYk5ZJAcKjX",
  "key13": "CBU3dLjScJsLLcVi4KfBQ38ckSt7XdNuDAQ4UnFEAQYq6pZSDzQeDupCLFHUutnbwvWbkdj22ZgirvLCKEN1XT4",
  "key14": "2byz58v2ouSGpY8adJK5mCUxJvy9qJ3YNjb54MnD9HCG31hMNWn4xqFxciCzRRTA6MUvyPkfoxBcyq9se8is6kv4",
  "key15": "2P6SB6mk29NH9W69h4tp8ftS27kAJPdL7FGWoVvQDnxmdkJARCdH6uRNBBvBzC7r5Mc3iuJiBDvDoYzDQK9B3U3",
  "key16": "3hnomjayUrd5QogXzXWRScoNt5zN35gBjgzVoeSE3XMZggTFmjStsKKZBx8aXSkZZpwGjVNpc1kJ5LixUrwEF5t1",
  "key17": "24ffyGCc9YMtnZJKjfiWDkdNzaKugxrkqYZzXK1bWRs3M3Ha5gEGx9jYVMAZBwcXsSFE98zKuk1ZF7xAJrpLmcV1",
  "key18": "5QuKkhRDvZz5hiFf4L1snBHF6H4sdqTFMv5gxXyxk6CJJFeUv4QHvmCjxSaWz7FQT4wgys8tXow9nrpgibqPdbYG",
  "key19": "3AaRAvwsfS8mBiRZbm1VxXitUKmvJxYoCNQXAPVBtQnwCEgRHTrBCUAUMYob55LuXdPhC4cukXnJkqABD4t3QwWC",
  "key20": "25sB6GhVC5VG1fFjR4MbxNFWU5x2mNfwCFtKdsMDa9dbYjDERKNH5wjXSZBnernUDBvadeacCjMsGsf5ZatK38H2",
  "key21": "3u4og4CDJu7sSnFxN6YZmWsXzkE593vDBcUExpBLd8MFhcHt1DhDAVAh8oBmfSWsADcyZkpP4noaenwAX1YJ9yQK",
  "key22": "5aX5LtPvkfK9AuYAU4P45bXmsMPNaZswYj7nM132mcSjiPTRBqS9nyJECzEneh9zoyQVAbqBKPjxm3ikcc6g2CsX",
  "key23": "3duLk3MJCbxtToj8kKKjxHBogYvC89LjhEidctpqQK6e53uVBxnKDW26N6w1h6h4Ckq7zhGWSk3MSLhpV1gPmz37",
  "key24": "4UDKp71MovnjDhyFJRYwvoBqJ2yP9N3brJkU73HZ2hNVkN2erBiBxVQLpW6quyca3pDm7jeioLYkXNv9S28bNfRH",
  "key25": "3H8E8ijxGvrBMrdVqV3fHsAZn6o6hTpyejnJDpuzKbdX2PzrFTyQ2aUXrzaCgAtF9AuZBPAfuTMyXZbDj1NUDGpq",
  "key26": "XioKCJN65L3PsDGmAYoDeDQGwRBgrkyvkoub7QfaTHVwrnfHEUBN9j4mSKNVs9wgmtqjkbjxC2n762AcJSKFRKF",
  "key27": "bJc9SELErVotVYB9HA3876f6esovcAkRYhtXJByQEQmB1dPsZS1e3VApm2W1NDDQLHuYMQ9aThHEU3o78116dWD",
  "key28": "5uF72N2YKqX1eDY2YSy3yWnW84oKXFDCLr39APr78K9hYPdF2YwApFrsvnoHbiqoimqHRENGgQ4nKp367spZYDFr",
  "key29": "rjSG283WRXS9zvedphSJW8XWBP3fKk5LN7bTp7EKhsTHiskfBJZZr72zPreusDwjngk9ELZZ2VCbxrWif2JcLAg",
  "key30": "Z68z736w1A4UkjZs3E9NoJVdQ94crKCXBJJxpRwqBBsh3wQepUZFbq1p1zuHycy4KSxWKAtr7r2SVQjNaSrdXYP",
  "key31": "595s23JKVRks6eaZLjbZN4L5XpWBm3QZ8vWFtB9gmndP9PC9jyvLNVgy9PgquSQXTBEDzRHrMYTAxP9YGtEb475H",
  "key32": "zfvXjSRfSYfJFRK8dxJEWgjiD4ueRyzdpTtGDihxZcg8dhuS1WeseHmgypDPo3KEUP38vTbjkDarubLsLEA2JL6",
  "key33": "5H1ETVTi6YyEqiUKGBMcmWLVq7x9W3SxoWRd7oZ3TbsqogKsezhTDZvBGmyrjzxxCTRAuffKBRZowWnJcKJV7vKZ",
  "key34": "4sszirQAAY1zs8qhAdMz8YxhvbUmSMybhNU8QsyZCoa4AwNVEZ8tVfoCahsYTd1AvM4akqYCwPb4bhZdP5rFtHrL",
  "key35": "3vN7j6JkAi5WxyrZk68kYmcNyXjB6d6Z8bjJBJzEdmM494KTGiCdw4rZBhHg8LnVMGmVjtunLydq4JGsKvS6k3tE",
  "key36": "2qWrzTRWeL43CPG7DYEfGFm8fGr29jNK7nQGwHEEj6C9vKRfmUkFbRK82Q6NP4LuSdqN61rTaLXdUwZH8vGXinb3",
  "key37": "Pk87ixXeZsRbnaNCabwKuP4BidBCFBgQWcYZx71xHJRejNv51GCpvz8rki6in9o6pUmoALNcR8i9pvtQoAjcJ6V",
  "key38": "NoTWrNeK7uEUGewV31wRXHX2gSD7JSr51wKCK9i54hgAyxG7Kjh6jiVVVDP88Ue7apvL2mmhxhB6UpAxLRQaHQ4",
  "key39": "4JUAwaP7KrQFamCFLBFy18J8JcznLDbCVsDYN9FkihDq8QWqu45awCBMDGXZLm3A6pd4ifvuEnBpFXZUoMqBu1ty",
  "key40": "3x4Qc5dB3JHFyuMdf9TV5mQix3ExKvXNcgBzkmtd2STAryzxjEr9P2wxFgjBvPbKy4XYk1qe7wBzVnAHD9yU1aRb",
  "key41": "2daTyR4fsL33XF9Sg6SjqHeFP6Pgk3Qdhxi23NWxvgg3hv8Bs2YtsPyt4xnXtv1AaBxpdeaCZt4hsxKVyE1fePbW",
  "key42": "4w61xieJ7YenvsjVGSSakNZywrWsnZBUbjAic4wM5cFwHNfvWAuyExd7hkbLzjAiSvzubto9fWEwet5RdnvD52BQ",
  "key43": "3JdK85MUs6RFZnGfdFJLSf7pLLJB2kTk2TdDoE2iLLpKmde4jKh27ZKE5n1r8ZucchNCHhSiUiQqFFYrsDD56D1n",
  "key44": "5TZTpxZmYXmGsB1zPBPyEio68crwYNtd3yrdPeifGYViusvxus7EwwvFDW37qc8YbN1gCke4ZApSvhtxuBeiyEWB",
  "key45": "3sLjdSz3PsLwdAfB77nAKgqAB8A1gkVgVrtJTWwCg8ibpS13GoXrhoy8akF46zN4XxAKfWy5jYTAMmcpuU3RYH5V",
  "key46": "4TBZF5dxKXu5Qt9WZs7J5MFYieE8KfnbbboRLrqqicFMGJCPJqLVp1VHwcvka4Ebhy4x5kcfQX87iYrksWTLLJ4E",
  "key47": "CXzXTLHE9TsyXQoKZJYVNjgerdSW9VkgMpGGGb8vrwPxvPUrq4SEZZcDhFo3x3GJtUVSzFDTYWNvXyqUpzj7KcL",
  "key48": "jXUUZmLz15XFtxP9tPfeCQCoJMghtwEBQAdyBHSvRQLZMUTdbUhPLv8mMbMs5XmY3oaRwmngJ8JmuoHoyatqRvn"
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
