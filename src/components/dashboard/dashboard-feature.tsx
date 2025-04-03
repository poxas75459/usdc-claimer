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
    "nE25r9kU3hrJgego5QPBUammHHgRn2jhcn5nHzrHkGfgUNrkjkffHYbuNuGfbRZn9oE9uGC2QjU4o5c3i517vmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213td24pdqc1rHmEPxqJSG4rXQ1bjCz6nMQ8uLngn2LTzEiLNJ9a9qunjLbD94vjQka8vayi47GTMyjopcVGCATz",
  "key1": "4NC2qAkam3LMFJTUpVokbi5zhChaqJceyDwxVveNva6PuNPTXRLxLkTsh44GT52d1bfKMqyLFsE3i8nHrpXB6Ktr",
  "key2": "MbXVyjWykgJaMCQQaHueLs6jLh2QLSXRCvC14r8jWYGmvuJkGcpBm1XqeRPVXX5EvGb3wcBxVVC43h3SiNfN4ZD",
  "key3": "2zE55fqMomnbP1VHyc4LLCpGx4AL6zXGRZLGbE46hskhmnp6PZrHyUYDyjyarwGxKBusUommrvzZuL4n4mYQAyYX",
  "key4": "5ZPHQid7BLHRdFWknot1Pu5zhVDJ3ANR1Z3nrhKQJy2pPh7fxfNHKwidQYquVgpiQPoQA76u2eYjEtxojX9G6Hrx",
  "key5": "TLePtaFVZmwGHdKdCDCfwqmNf16A2E7EBLwDp7esnU6uN2EiYcyTgvm8RTZ4eFigzUHMGoUPfzMDLt9T3L6pzTo",
  "key6": "uvVV3xJ7m6fn4MBoWZDWq4KBAW7AL9X3JREV7CGuF3vqhYf8rErK6Ghh94JNYXh48pYkncErnLTSv9CfR5eui99",
  "key7": "5WYhB7S3ytFE937oVojhM8P8mwwiR9YQv93r96zwnAcDMkqqLm7rCpmF18fMsSDf4Pf9uh6ANqG5r6LqQcaVFHTD",
  "key8": "55bRn4eTMLs3qKD6PymJ484nq64SVBp9LXvE33qdVMCLcSsbrBBamK5VWLDwRGk52jaoS1qnC6o4vuFEwfZGcQXU",
  "key9": "SH1bBJmSFwmiy1xBAqtGvpLQuV3GCjdG5swGRBfahzjjeicy1p76x8YyCsc8BdHLpyUihv7UCA28FGZ4yViC7R8",
  "key10": "416Z48cq4Ah7FZjetarnwdFPGQmPWWsJgELiz8dNQkaxuknqcKBrsQadukoLac4LzyrXZe9qZsAZBH6DXnmFpybk",
  "key11": "3nq4ZuKHhNBbohhMi2QYr3kFp5EffQPFWJYB7JsBT2VhKxpGNSaYDsGx3fzb6conwFp96vj36rVyuVigrWSp656P",
  "key12": "2y6y9niKVEC6ZncnzhX1viVWvakFEL72WhQnjJ7zKJP4kYcXg5mKvP1T9YBNh9BKWsvEqytJZXjKRjZveEN59qXx",
  "key13": "3v5kyEkscuaCF95qNCpWYZN5ZcBNhV9Z5Jnt7VyUv2hammsjVpdAnX1kHDHF8YGjcoZEVKghUwSJfKYy8bPx9BJY",
  "key14": "4mLYkXTWHk66WuK23iBqrCqxGDbozcZ9MNfg54nU51qNxVXUVokZrTp3KgchUuccLSTkB3vyzKJ1Lk6EW3h144FQ",
  "key15": "3iwhw2wZdiABSc2SunDYdZhsnBTKSNNKLF39tctT3koGhNUHsNriLNPvm58F8EiwasZUgfHJLhBLAFfeHnLZuYAT",
  "key16": "nAr2QjG9Hvcdf3bKAsPKYNY6Moff9XDHNyRyh7KZtFaQRdNAoR1ineSCE7gZtVsMugJBk2LBnSa4EStktqMJ3Mw",
  "key17": "RgP2mwvPSHP7dnVzsLctVXHHVme5XEypyx2WxFo8bcCLEQCLrLFMrETsWHNtzduAz6BWZdVwPz4RBVU9fvuJmWs",
  "key18": "3FSr6zHi6xUg3rX2WNuxMhNYnKU3mVgmubFtW6yyH8DmA3sdZk14nfkQ9tiQbuBKBziwbqso77LtVHQXQw15Vfz5",
  "key19": "5j6kSkYuoLcWd6VTgqMFat9v7bD5PrbwCmT4Nzyw6fQSeiajSinzM8Jncu6WxsGZHZgM3rGY7GSYKVoet7vMHpU4",
  "key20": "9wBGxr4nwfm6qEaEP4gG5f4N3TtJHd9abacPcpHnv7Qczd9NH4ScXtN71kapn4WRXAkgvti8N7nRKU9fuQamWUe",
  "key21": "2x6KhzJC6oW52ZG4m9RYE5UR4AQYa1SmdCS8Z1WgLk5rqnhzQGmeKjX7q2BZLtSqADWG4SvzzMpXPDScW2UGfG1v",
  "key22": "4itQ4PDrhLy3VUeXouzmoqeGDgJaWduCK6K5yZG4HiBYEQDkUjVcz8BD5yimyuP7DYtQ49x8efFV18hXiGR5HKDW",
  "key23": "2otbE3vomgfjagZWsPdFRCR5sDA8yuLbXWKZHxWndVm2oNpC5vhBpYJMUP4RgUBqeUHfDMEno6LshcCYePdaBgZE",
  "key24": "2EvfoVBdh3SARe9cxQTF2BCzc3UHqf6btBxrYabitTEhdnK67PPe46YfnQMwtDypCokHpiJcc5NByhqdPSG5dg7c",
  "key25": "2C8QSSpdGqpBL42Khqo1Uw8fkrhiTYcxLBaXB7XuRV4dejSLw931paVYvo65ktiLw2LybGQKjhey59Yk1q8pBhAg",
  "key26": "5Ypm25XdhG3FrqrPaQmq6oQzW6UZRTMe2LLNYa3EQjSk1ogwn9xvvxczWzAwqYaZXkn6P7z5nWiVHyGv7ryHoh2e",
  "key27": "4Vx3bGs7MBPNm9qbsd9aa4FznZmdX3GorqZnJj6FTHx7yTC9Ts7WVtqHFFtG7jXHfM1Ds9ikQ6WwvRkhFbGunsno",
  "key28": "4vRKtZbAoyMg4oZ7hEFWzE8kdExejbbiGmNQ6RKQtUCM6fmxfDDBp1mWi2RepAAtk7vDMdNn4QXfyG86QyPEJX4",
  "key29": "5BzgJQnMwd86GGexisfSZFhwjXuNucFnViiW6auy2vgvYuSJR5re48boce4x9EPtr2AzcN9wephJBNH3Uw8978qw",
  "key30": "MUhDgLjkfQDLwDK5JBBnNr5uKU7SVyJnDTHb4N52Gk8uRiS2Es7CCJYwGnnrJ4AFqRudwZKn3yU5SuQvJ6274ko",
  "key31": "55mmJKLJnVbwndN8uf1q8LmMFm6Fbd1qhdEA1vaVyGxC9igtihoGZCBH3mnHQWn13eSJ8atnS5u53n9DfST4YASr",
  "key32": "2LnTeXF96orqrDbJ6DynZpbuTjjuBxDCwbqYPDkXrjHmUt3AmQmhUfoTzfdFMKHffSfzKJUSbgPx7XPB3rtCnfTz",
  "key33": "2Xz2ZVwYd4obw3AhS77uWyrchth8FBK5jLAw1tuwcesH7PBkp9WRZyokZQxvmeRH5f3mGhvMCv93QKA42paru6Hr",
  "key34": "256Y26XQu2UCnGLnb8T4wfHerZ5GTko2HtznC9HHqx1Qr8r1KBiP1TRNWi9YVZPXabYJpPFjYi4mkcxNYQBVg5sU",
  "key35": "3kGBvg5F2RAnf3q1Uxb61bRmtz5z5YKx28dLAtznf91V1rxfq98kCvyBrfvvcZV12ni2CNrNEsJfz9MeraL35kqG",
  "key36": "5exrthrpt6BsaGMW2gZD5HwgkxUgvbA5sQhAyiKSYkaCZvRvxVH2twriVkNEqc2h6rbCsgZ13vB5UTwTnURtKfX3",
  "key37": "XYmFoKZmJhATUcVXmsZyGvFqtGayaECWDN8Poephs8zvptVZ1pLG4RFZS5yLebbTHaZbfxDMvgkNgqc8ZjvLBRx",
  "key38": "61hEjUYPQXx9Qtj8RxKUvoJFuL99qZgPACSx2eE6YJ169x62wfEFztEKWy6bhJ2v8JUcN63UVB1BZFbQojsKdZr8",
  "key39": "37fTx3JtVhhN66KoNQepbAJc1jFqeHKycp6aDFcFXAW664j2jgdrGhHHgZYFt9iHyAKVJjoSCRFKfGMxnmAJGBvw",
  "key40": "KzJeCfeEEUzspd6D2PCXEFmCj3rRHg9cgpDMvWDkdvUC7uzXrZzCyHe9jLJNjnLCpPsuKKY7d4drbUgKSJ9dPat"
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
