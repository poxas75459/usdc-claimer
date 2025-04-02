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
    "3VcxWENmQeSFcoic4kVLDB64ovAqgNLJ7knGqdvP3RTnr794F8scbzmTkM1HjVxMFp2Df34R7sVHJXrmBuWcaU1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VkALhKpUPYbFrB62MmmFKLU456hfz5MxRp9jgRe2Fa8biMcscBdH4y2HEdCAwemeLFCX8fjdxuutxeqJxfgwzPF",
  "key1": "2zygLAGW8cMXuQcuzLC5WeXwW9C44w9TT6CdoD8uBx7t1thBKuoUC17UNfKzuKDuTyiCa9sDP1pf3ZnTggw9yZfc",
  "key2": "2ebwQVZJW9S3engt3B3ZsapsdAa8FKMRrN5EFTnvt7fJnPGBFQJxWTd4NxCjNxitJF78uwHAo1UbSbxEEd7L5ANg",
  "key3": "3C9U1cYTrJjAVNU1dHainFhAbp5vGFivgYsp9E1RBxnJXXgCoEd8UP4ZVQyCorcYwkSSQSeErYzNfWFTRqTAXh15",
  "key4": "3sDGd4PkfpNprinVaTEd3kKvDtexSFXP6Rb3Eku4rbJo5gAWacJFcwiAPNa3GpRS1fU9Nx49GUBYJ8Ba7yPHmeeD",
  "key5": "5sd96pcQUM1GKA6oKp1SXQFhS5LKvwEkW4rjBR5JTJQXcm7hDPXVd3s1UQ6476VsaHRG2QZDniJbtbSKgm9DZ5xD",
  "key6": "9sWGJzjGf4WyhrVuK7ARyJ32TT82bjqY95EYkyxcLCXhYA28fVhmr1K5tNXyNehnDFDwYzBdLqxDXCudgXuLwqG",
  "key7": "54u3TUBmRMkDQ7xbbnrifWYGKc15pDp153u9rs4EG4mPxbR3HLCQAciXoHWDXzbkNqFNC3UGDTQZtFEYFC7fJUSg",
  "key8": "56YXBrspyWEj6sAtLqgwxLkknSqFPy6eXjJKwT6GdyUbaHi1GsfgBsZtBFd283T9cxc25RoPwEvdFxRdqwgFHB1W",
  "key9": "DycxFQGaDGibz6n8dGYQT2w9gUy7rbBaKqbs9YnLw8SJ6x1SkLvR1znZRTbgiKXkb3divk1jMAqUm4cSaXkCyEF",
  "key10": "5XWQzCGXrM9Guagpc54dA7DDgADTHiRnZtHiCGxK3KHZgCcpLM3PouM8wLk7UreNPPkU1QmPbcW7DmZhHgbcaq4x",
  "key11": "5oHZYQwihz1ivqQzDAzoME2d4E2D4yCEMXfsipYru4UC9wrx9j3AQadFHnrAB8jzwSNpHFhXdKFaCXkok4GZ55nX",
  "key12": "tYXSNnUhsg537zNB8KwwKvUpr691csSGPVibwygmA53J4vpsKapa23g4rf83mckYShALKmm6fYUwupSoPm8NWzc",
  "key13": "5iK1GGucFdtCictGSrhDUse9HuQxzfCyTksk6rxxuRM2GNTonaQyfwFEJy9AUHs1B3Raaw4sce2VMxXAnYP9ULxg",
  "key14": "4VtubkjEbrY6kjqwgWPDyWPy4JeKQnKLMeQKP3THjXBjBkdGskKF4Ja8KtByvnV9wYhntwphQ2Q1noustu1WWo9f",
  "key15": "3MhJJ15phVLgcSmA1wVzAooF72bgpEgsSVUcEfpZt5oknns2aAm8vmGPEAoGY8P56Nqk1izB5RNe2SyeY3hm5DhL",
  "key16": "2BHM8YHpNifRdu8tkViniGbqpL3rrPzYsRL26u73ho63XyT3j2p9j43hmknit2J3seNZXyHmWS49jxUaSC1MB9Dp",
  "key17": "5USy8UD71SQqPJv99oXPGNXo7JEkJHhZuyz4pyYgEGGd5duKiVkHUsL79T93rsW1yg69dJmWrLFe63NjVnQXRyGf",
  "key18": "2PfrnofAGhNQo8GCX5w239KqujC311xfb4VUC6b29x88cSHgV8DBgfJEMZToGeChtFj9xTPjKwj2FZrAAKoGiy6x",
  "key19": "4YyHJ84YbfFuFuWq5WVXnhkE7GTERqh6NFhNEPH76wXLnWFvXRpJL9zSwsmtejzF3NL4XMcWai9FyoZoowHzL7c5",
  "key20": "WzH11iB9bSPdFEfTGq8pa1TAxNhYAcVw8K6gYZJdeT4o6pLv5pXmbYeajuupLMR2T6GeeXgj9MXYeRXcoszUUR1",
  "key21": "2KYwLopYLCaRFV5jYTXzqFA4XYSCfKwiioSHggegjEf2WK84QSPW9WSiTMviSFA21HtGUHTLgRXxf7t4c6SfceDS",
  "key22": "2weUaVTMWFvhgZJDroeBWZtYDEpmph53bPd1UgjUrv4bH7UabkdXPdUAdFPuJiCvFH174iaggsU9YuCBQyKb3bGY",
  "key23": "591fvxX7R3R89TZzpBR9qJjtS7F7divsvEYJrvkdW3bHou16gHR9PxC5YbgRG5p3NM3qnhzJFt5YM6vB3s5KDPia",
  "key24": "37BWrY1ScLmD7eJM2AxZmXbMoXgSzerV4YVQ7i2yAqUVKbGp5ogyjX3txFd2LdkivgRmPqBqWfRJEGm4m59VP82a",
  "key25": "4vqG4eSrUZWfN7bBGYiuBBqBJ9HbAWAHx7buPKQJAvqB3fzDYjWfHQSSejc5SCTj8dvodNXQ4ky86N3cSveJJBXw",
  "key26": "2UyFT86tkRHkBRV3bQqEWHrAu2d2BxdtY7ootL4mPGdHtwuuktjA9mf9ZZUK5o4uUzmdfZZmnJqKVQ1Kk3L1SDdz",
  "key27": "4eVdaTqEQpaDer44DNwDzgQZz6WjTajLPkocbh2ywaeux3gPKPrQGzbsiSpYPu5CAPydWdiiiEMGxnq9L5y8q6y3",
  "key28": "2QoxXek1LWbaqgJHVSi24coT6NxnvR8ZePhKP75JBKdeDvpzkDTtSHftULSLLwEZcycv29kQYHqvu1AoKmTvLX5T",
  "key29": "2XcaZnNKeYHh36gaQsd2Wm7LymTmLe6Lscop472tumZMsMjk4JGAZEerxStkdjy1FFiqrDisKTH432T2gxAKbMFT",
  "key30": "5iVfTAGFSp4rh7LsHf4V1FzuNJiDrHChAiD3ar8qoNt9Y1Yt69NGWFjtaCvEr3SVgBeYL3ZqqTEgs51tm9f34hcs",
  "key31": "eeyB2ismo6uoDr8PZvsohBiFJhhc7msk3CcLXTNvD5onfa9PotmGDBXhJ9NkzwVm7nZgDTDDCwMm642KbvN2qUe",
  "key32": "5tFSDFqeh4DEtvUbTf3CWptW3y76HMH9jLsupzQd6o4SrmHm5ob5aso7pxDG4BktHPe2cy2DTzQHnL3LqYkUbCf",
  "key33": "24zx7iXfXnKsarmUrYy9Fh6mNqENHrKJHwNAfdTskzuX4ZJT2Guc2HWvvkKcrwXp9cd9H8E9yPvJXQgbH9CVWeBC",
  "key34": "37MGRN6XPnFDAa6Q1LkR9vCS432Ai3PHWHZh7w4yf6UXoTr4FDngKQNkTtAosKdimCE5xgFQ6ateSKNjuRNtHvi",
  "key35": "3dp1GSY9fu6nQDqT4xrkepCT7XU3JtR2JXWWfTAeSAnbBUKtFuiQRDMTk3LLtyUZVE8992932d2dNqCQ1U1FknNQ",
  "key36": "4u4k4ozfDZs2bZFfdPX7W5R4EAqPAP93UKGEsp5oJKyMrC81JtEmNqPhXe6vLtgBAKF6BKgPFvbKW7XRoKPg2FJ4",
  "key37": "4sA5Xc2Pszhx5Q9aciBpkTPpRwDrS3PbBJjsWbUz6dbXzfk53z3JjfDf1y6FG4FF15VcqpruCbzVHugbfPg7nqFr",
  "key38": "ViUhFbdsoLJJgRNpc9SLZpPcTh22rpbirZe3rVnYFg6QZzfqiyYUGWGndNhh2Sfro9WgEWX1B28zZD4q4xVRAdR",
  "key39": "53Td8s2J5uHfy8yXTRqSUbmVUJ6vrzYy642GRQcyGtBc284F2uR9TQWUqwXKC3PEEfQVr23HeS3SvJLrPkLXZxJj",
  "key40": "2uhMYogZ4vMKBZrCyt4LhykRSMYLBKZzvgeLUpuaYBUhkuu12FekdohtoU9PdxFsmvgE5pQvLzauUbNi5bNbFvZh",
  "key41": "3Xto4UM87CGEpHChrdwgG4HXepbmWdaEAh3B9iJqWsViRavJ6ztEdYSyvcpSUWvzMVa9bHWtQz8eZW64SVr3qHdr"
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
