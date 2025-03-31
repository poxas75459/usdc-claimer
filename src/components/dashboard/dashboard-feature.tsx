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
    "5MHgR8PHjh1guUoe4M7ser4fuvrs9PTsg3noijz6zJf6AfMqZxU8pw5jpg8CQabcSpV79nw7Hp3ww2nNYWi4MBdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HMyqZh4Zkjr91Xen4dphjwSScrsgs1UUywh3jae2Q5c7CmdFxE8QCKix2vSu6r31AbHqcE9QX3gXNr5e8BChnn1",
  "key1": "5r5UiGp9LpMouBEnvbocDdb1JALymkJHoDQ9s8gTE3fHtnNddWv3HmDN5z7hDGhvGDinTexKyuAyfTrDavHx4thU",
  "key2": "3cmt68e4Zm6Be3ptbS35zFCnykrjVdQwqJ6B59GoJy62PrUmnM5JRLAi6sohjHd3tZNCB2kpKKspyDCFJSpB4N1P",
  "key3": "441jTzCaxNUMZDC4nUPPx4Bxn3GTxFEEXGjkdNeQEoiDZHjwSEnWvjSENCKpt6GJHermoTnZf4fsjhXt19DECfuW",
  "key4": "4aQYkZEhNMc4SheXTmw6budMRuXefGEBWREjkxCsjd5ksVCdLjGYhyKKq4JKWC7Gs2uqPwxW29QX4wdyRYCQGjo",
  "key5": "4yuPayHXAeo6YJpy9VfeJEZPbNHm8Uu9mprCCB6vaFU1ZdpZW2b6sURH3hpSYUN4aKvoUD6ZAaoKrhU942mS2CLZ",
  "key6": "5atVjS2eL6DLn79dXJiaqdWPTGjUc3WzcE8QASKSaSJKLsKTfoXKnPUyA1npfbHuGeQRgFhEm4S7SYQBLuPDimXr",
  "key7": "2BdeVS8ANstWgQGWzdyq2vjEfWhgtJbWUPtpdLcDVjnsLs8PGVjiEx9BifGPLKMMWm7nGeabFP8yYwQg8uxMZU9B",
  "key8": "4XKC1XZJTzK7BZeanfqLfHtfrgEBeHshmUN1tngQz74HsVAdiw23fyDN4E9Say16xBJKDApN2EYSLzSzdJE6E7MB",
  "key9": "ChtQkmGnv57VrEnjSNshyEbpQ4ropocBqAJ6s958n1nP8aynm1aDQd9WxmGeYGdbcvaZzv6bvL96iB1PYMsVdqB",
  "key10": "pf6tuRpPEUNid48d7zaScjB8w38j6ARKk5cwAySc1zciywJYGhxSDbk2S9Ya1LwUSiMdv9sURGxXwHWWjXkX2Aj",
  "key11": "2h2KEsPscavSUGF8TB3ohhhf5ry4FF3Nr7zydBYwh8jGHUJE9MCLWdRyrrtKpPpEMXL2VQJdXiwb9w3r2chBZMxn",
  "key12": "4nfmLgCdHZJmdcnFp82iNZhMBHsreMsxuH8zP67ttBLQhMvxyzenzrB7ERtfMTrpY2Mz7kki2WRmts6ztWtQmA8",
  "key13": "gQhNRqhRJBAVGWjzo5FzwHy8Kd7CbQMsNCdCJuj7ucUafs5EKSvNU8xeQqf6xyJKkSwQHbggEXHx7WsesHC73jc",
  "key14": "5Lv4NfmyqZEwkSdSrmxia1u8PJQ1qaAYW8u5sFx5QzXCzU1pLPq7gMY8zZngyhAzUB5tegH75mmpmjwSN2x9pGSa",
  "key15": "5bHYJkEqbJNkjmCRnuS8CEx2yoigUzjS1MKagNx7M39vtmRzozH7xuhxhFoGYjrkqQzuP25CGnbav8oV53EvbCMn",
  "key16": "5zEB1q4c1W3xXyHNTxGXR7mw2LgX919T6q2zUscxFW6yQvwm6nexgMBq5mHGRhb4vi9dMa9bbwsxt3hcbGAzS3hT",
  "key17": "5eq2564CjoNZj3xJgEdPPrzdfk9YDYhSYX6wVfC2Gms6BrZ5okKbhFAxip4uXdz1wK3TXf85v7ZBxBP9pEWSTheE",
  "key18": "3xk6uc6wYBJqh8yRVkp2tkFXCsHryNDTdXDkgUmbpLekLdiTKxScrwinEPPfVQ7EQ6vkdyV99i3FoCypnjuLykur",
  "key19": "2sM2vaavkt1q5g98z3AghFDyoGCuiQGTo1qh4GjKKDL33H5ejs4TLMfUSdQDWoqn3BkcAQrS5yCxR1213YR7KMmn",
  "key20": "3VZNhaSPRSDw6LoWKwpLZm6F2VvVJ9BmARgwZwvkPEEc4UM2CduHYZeHJit6eZCfSiFTJWkY5LrzNCUN7cmWpMQY",
  "key21": "KiphcKfbpULKM4VUmqkqqHn6N8VCkFBzyZCRTZ7nskDqpdiNYjSzpcARJmiYMn2KxKswQjKvfgTut8wJChnzDoU",
  "key22": "8Ap7aS2YXe9rreMidpvZ7aCSqzxDpyvY8tjybvxfNbk8H3KeWweDMSHgYEoVffuX5RAsiMsg6h1fFGxwbuJqBQF",
  "key23": "RAQwHr6YQ3eRVuSryrs2r8inTbxgV9ejdayfn5HcWQGG47rzM97VVDgMdnv6iQ6HdBT2Ae3rQNNLjUSPTxRRvkn",
  "key24": "4SBLTY31NZocAMms8mmc9HaWqmcUebsbYMH31rpuBDgEhnJFtF7QHkfQ1ZpfoCg1VvRX7bNCof4Jzo7ZzSZdBBSs",
  "key25": "2agoeQwEfN6bVa9hGg3u3BPMoiT1gixpMjEMewiTG2aKei7cNpjE124P3JKA1ZUn6wBxYf3gG9kNYmQYXcxJjKPV",
  "key26": "55FKSETt5WqNarP8S2gLYxkadRn6ip77XSoxo5RrFxnwZwjsUodDxWv2okQiR4mrLYeaXR1tVL7ZrUbkdk6nrWss",
  "key27": "4zd6ERNEXvjC8MWQMq34vBCamfMgn9eijDmrW95edzZYk7UcSzYYLyYD189c1QKFbtz5KrqCsxjDz9C23yiMFuty",
  "key28": "5ySZFjFNVvSjKNjCANHmwJzRY5L4nQ6KTTHf6vuWmTL6mccNvosb2oqYGnYUGChdvf8cDSKaa54eS1FnH8tMS3HS",
  "key29": "5uUTnut2RCSH2UkRVzAXvCFzfek3jLnPWJoovc8pkiwLhKARmGTYRkJTbZegsDdZvm18vVnPNeKWcnV2MamZNAgD",
  "key30": "4z4mtQVVHU7oP9Rv43vzfFUxx1qsC4NsCnn2zsEGNoU2y1RWbcTrhf1oqo2FPYiq5DZEdkLeBqzNuaznTanYPdFe",
  "key31": "3pnAUZmuKoRghVnwzM2Y7XxyhZQkFdnVAK9MEAzkTyLx9aCsSYJYUYWweV7dTAUqgvUbNYRnSkhJ61Q47tcTkuaX",
  "key32": "129dXiNSfrRg7oVeiBURz75XcYQyXZZvrKrkWYxjG3La84hKMcgyyDtFhikFoLYJt2r6Zk2dekYwUf6xZKWZtd6f",
  "key33": "4eWGxqMFmLcqa8FHN1tEqZGtLHH3RCnKdvRTc6WgWvodpcjeMvQRFNcTVnZ65HquYKSS4fANcKX9bfu2kBkL55oE",
  "key34": "61S6AZBk1iVygFMYVwXCxqC827p64wXMYk4oDzfqxKgV9PvQN9RYue4UeKkACtYS1iSH7WCR2wuRkgKoVYy59fyo",
  "key35": "3oXy8LPYJNZndT8mjFXPTuF3aZHECJorKQqzS7FxRuJSb3k9rn2zxvz6DgswCM6cmE38X4n6TUEfNb9CAYhUuaxK",
  "key36": "21mj4aFhe62EdpS3V271H6dcuggioKF4ARKf2BkfQyeT87eWq4sWrDycuhW3Ym2hjA3xoH7QS4wgsXTT1J3ja9TJ"
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
