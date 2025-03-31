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
    "46MWPsT9yVHYRPArc3kGSUYEFQKXd29jn7mK36zg5vDGKHNDiSHkyyH8j8f43NnS9d5T3ibQbXeTGMMdSPNRDCz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5QvfripTu1iNVhdujXyPUoForpMc2r4sVxEqtFN7YKSfHydrPeEAidfyF4Wtj84Mq9NmAvtUdrTjo71ptECKpa",
  "key1": "5QizkDDAEXHr8zcsiXGm7C8rP4MCim2L4wPrn7PjMtREoF8kPEs3ePuvujuaoGdqii1V6HAHre8HFiyoSH2tJ2H9",
  "key2": "QZfg7fcKZfnYXFRzBUuMCKTpU6WDS8ajr3g5RsYdWivv2qo3TCyVhLCdtSX2HTLH57oR61LZQgn5UmRt3Yx8xK9",
  "key3": "jqKUqTQoUJPxB6qAgp7wbiJwGhxZDKzeBrdDbg2jwp99SriXULCokQsE1eGp9Wo3wgTd5P8yeutCA4oudr1ftf8",
  "key4": "Er7d5zDcHFReVbutm61LzkA77hYnyNSbBVVkwTx1n5rR8jiUWH4BSLpZxdtmXqBW7N9uQ6ydQ4hL2EU6DPaczeu",
  "key5": "3tHaWKDRGYMKHakrEXpUYUVhAaTZUDgVvK5TMAJbFwaxEooCXnvkUbzSFZdBuZ3nVEt6ruiHQtDH5ZrMUzDLKBGK",
  "key6": "3FW2AhsfqKtXD8GX9WhtoegDQkr7KrV3whWwgqvMEc5gvwC91i2VTJeQNhfAwga3pc3BA2yprC3sgsKs5ECg1WBN",
  "key7": "4wESgWkPTLDxAURevwRiYhhoyrYoz7beEh2j9fue1oU3iHGcqxApQVkSVAWagVskcKkSbV1uZfmHKw38PFmBDfcH",
  "key8": "4L8hA9hwJefGHwPvv3vZW2kMdCxAqJhUjrQ2ywMJzXaiNFXF2mziLLVyLb8phhpQ62EmMjwcxU59ZXnfWqKe1j6P",
  "key9": "jgFRTg48QyrufZivACpnoCBTWTZFjb3UdxR7KWk77HnaXScAFVQBnBUoR5a7faDdC4U5tBpTCdtUdYSAicWDGLq",
  "key10": "4rm1LpW8i6V8VNuEoctNDuTdk6evGtF531N4XWzP7jzBQ7q8pHsnp5pEa1msrihxWChQHHHyVEfgaN571EHiX93W",
  "key11": "3iLFGPsT3RqcWVfvmroJ8C99e1WDhBndz1f3XLTuqRF9H1wUjyXcGQDmYv4HrLtKxkSmGmE3ScK8ZvWuYCZBwSo8",
  "key12": "4VToawZwUvaWyNs2f7SnPfEcneopsUcYU4B4hB4WgPGkDp5VGWCFqJGqPa8pGqPEJJyDAoWvaDFmDNK7TwRtffcQ",
  "key13": "2gfZiGYMtDe7fjyGRMunkSTW9mjKGbcnfRg8SzfpyQhCoLAdWNwN1hVZRVLppat2vLEJaEFAaW6YpZz72pdZfRKW",
  "key14": "3wgg1Feg22a4iy2gbSVyn31Ke9istVPZLH9wds57zaTVCUU92LpR1i95Z1qthVNAvaC4Fx4e87HHi3AAEkYrYj8h",
  "key15": "q63TuUarTZBd99TeXQc7KA9519DRKpnZYgP5Z85HYx64bdLcmW9qkUaK5DS4MKzzJcjZFmXcyxdFppaLUjCsRK1",
  "key16": "5pwLMKin7NoYFkSsDtLjZSibN9nzkBkppw1hfoZwAt4UQUA8Unsra1i8Dqxc4ycpNASQB8f2W1bZZ2KF9DV8NxRk",
  "key17": "5oYGBbw4H9KyWKgZyJf14t8UTMWDRQehNY4xR3sPBg7Wi3caipHK7YimSggcR367PhVQzmEFD9drAfCdoQV6z25M",
  "key18": "3hREsiqArM6nZukdL8d74zVRo1vkX3GJaBrEiehByQaj24N275CUbTmDFd2oZXQNryKDPcDWztq39eW4DzSwDuuX",
  "key19": "3BJzb7xnGtyWTL1eDQ9yyC1xWEEDT6eCMoqhjS1Lm5eF3YzK8YpGGG9QDo9GCNuyJNFjg6UPE9Ejx4DwvQQEnBJk",
  "key20": "1Eerg14BNCoX8j51BoEir9yJW6gDykJxvD86Vd99p3aBkMB7Yy6gKwCi9fQGRCkj7VbMKqn9V8Eez6TvNgB4B7m",
  "key21": "2ewSa8696fqiFitZVXHTcu2JkFBgMTqcnKnCDHUxsqD3HgsVqZ89ZBxCN5U2UgDC9vd2C7gJq39shNCW4FnNNrgp",
  "key22": "4qnayxh1ZmkK8o1k4UbpJ5JEavqQgYPAJM4RqvKRNzmQXfKfB3oqRvNxpmBqzBNEQsNKMZXGJU3DCniaf2NwWuv8",
  "key23": "28RxJ8oSxMwjhpEaiy84iuQAANV9C3edU9AiwTwjhzyCZbPuHDD36Y1XQGRXRDANA3Z41otxLu58W8HsbzfDScFf",
  "key24": "3nzPrzmitW1VjhVXujMAjJqhR3BnXmbzyWxY6MVLDQ8Fp9djNKXMgH143EjsDsGrPWVqhWeUreT1h2pBPEQNW9tf",
  "key25": "5fLJdbRNt4FxU41FHKHVhL2udBNmEW4xYb6ZkHnCYnRDcMjBv3VSRGbGo1g3c8N9CXSbWLjcFpZHTbQSshomqgoe",
  "key26": "4uFC1syWnGvZucrQXXPGfbjx3M4NGwDUPuT54iJj8uRPDtV3ChdVQd9ZhPsv9hx7RSxWRcq7XAGzo4GibC8YJA98",
  "key27": "xAaCkbupVrxxhwhNNmn9VL2Y25TxNjjVDoxcPYsUpfpoZEvQSkRr8ApV9NLjwptcNhF7jiaKCoAZtNz5MULCop1",
  "key28": "565Q4DCVvTUiLGBYtzoii9ba5m3XbYFX1DVhsuXshorth2MX11vA8dRAAeJhfwMuBiS5yjYxUf5UupAiovRuyPcA",
  "key29": "27KNJSuuK5NJy3ysQ67b1ur5bkpW42aeeQefS85Bce6kNcR5VFHXpehQLswYSkTJ6PY9YTChxwgV9riLCcakS2LD",
  "key30": "5H1GbrpfmtRV5rRt2Hkscq1nn79eoCGJ7uKy7zonuxY1SHNSvedPfFcRWk6wbiFTbHRDHyfQTZpm5nf1aRcqhDYK",
  "key31": "2SeMuw7GdRbYSJNHzGv7jGdYHpawBjQwzKd15xarMFvJYHKoukr2j3EWvfJoF5uF2ReiwScD8w88se6GmyZNfoyg",
  "key32": "HcJWgznVyoFoLteDUkVS3ApUz6K8i9PzoC9gQq2qj9PCZ75dTAniaoaaspj6ZqquxNKsk3MVgKc2Jy1kvDYux1f",
  "key33": "3C9fiiPnCu4vb9pqHkuWKczoBGArHew9GSxoyVcUdrAZveYSLvwaGASvTvFLRuiUJo8Fkahqjq6b8w94Gk9M56PM",
  "key34": "45nCu2k4A4mR6m8cmFuSeDiGs9rbeUnnod6FxYpPnuHoZ3RoMT9wdB6AVNFJurMJU8uh6bo8UeLoteWKJWzYczH7",
  "key35": "4Kdj8uxH76YFLcvRvg5WeGZPZ4jwjgRM1MQQSbDLxBHrfRMTdadeQCeWQDPSVKdJsDm5ggLnRbu4jkXmqkxsArTd",
  "key36": "2kSxyVK5fd4q3XgE1mUSpwjops5NatRxxgVwrPeXLNyRVUFvejDhEskzBSiFo3G8gA8CfdDnZtBDsShoLxz9GNvE",
  "key37": "2GqKED6soHC5ABuJcGUAeMJv43X4SqxDgD7B5Rrks2khrXqQevVF7yiPgo76i3X7MMMAMfnHY3smMJXSexpZLJkK",
  "key38": "33G3W66EAzpQBH1eAu4zcVX32uf7TGcyJvrE13U2yg3dvvycXWBBbAuz3LJTYa8KeQKsK4MjgUD4u8aG5meiWyYL",
  "key39": "RQPabBWEijHp4pDsegMgsCjwYo9L2EeW7JWfnBYMF5NYReMRiSu9iYX1YCvmKBaqbfpswWeacfi2bjeoGMMj1a8",
  "key40": "4zdZ6HnGErVmpvTmweqsBHpYyeuw1BK1LerhkhK6xnrgCL7hWXUxztQUymPF32ujtvFWSbqdeLm6zq4VQPTcAew5",
  "key41": "2qN8FvrwhGmU3383y2qLjnJAxzy3ZzLnhzuY4N9SKLyt2kwPAeowQEhpRrEgZABLdiaDcE11tZ4newehhUd1ig7q",
  "key42": "53YtxzAh8WynM8fYx8uWUpaceyHPC7SzrTct7bRor4ThCcSDNoTUg6jzJRFaZgKt3cYCxsPFQ7Usif2hjtixEbvH"
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
