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
    "naA7NkbKgtG86p91wPjVvNAe534cHJ3Au4vsfoWmSYDthw2PWnhxxvwLVysxSGkx4udRsYehf7G8SeapLy8S7c9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xSBW9StNshpkyUKXYRQB4sJqcXCTdKCL1fj6d2PjEMuULLiVbM35WwEZyNTurc7yQXn3zGaR4UX2f3pqdwmjRqQ",
  "key1": "5SCE7t8j2ZqRTSHqmb7FkAc3p35qG4GWKTa94aLfT8HH377hQJGbtm8Jw8o4AXWiN8WckumsUizjiaC8p3BgrVxB",
  "key2": "24Qpmo8xjUb8UChH9B6rKLcrvtV5q1EBnS5ydq9SmxjaohWURg2JjhxfxArFwW44miyyV2ARxfgvZ414hcQYZffa",
  "key3": "5KXhgidrfyEAqyh6ZpxTkzfJh8H15MZBfb69D7dxeMCnSxDfQu3FFbheJc1f5uakpSFZRTfgowYrknu7GmsoMhme",
  "key4": "4exqNnnanqZW2rkAQ88GGyCx6SuHoosCBDeGfMKhWUFfT6tSUKmwcc9GQbA2Lv2uTZwMdUsPUrCQm3DinEmRAhNf",
  "key5": "62BMNZWMNsjGLcTR8YXkLCouRoVrh1jmPDjwhoeeiDdGDGUQs2CByGv72vFitD8S6Yw3ky8ndbcTwbHKZnjkYmWg",
  "key6": "5x6eEdzkBcX1RC2FWERrQqcZmZWA2piSCWL7V1aai1rtrV9JU4zWPQJqmPgMrWJes3uJQbmgcNeFAbGSXPK7JCvb",
  "key7": "o9C3hy4wC5G8bHXfYFoSddR8Mf6SSVBNovJzrysgSbD54RbZCVMinFjhLJMk5RnHnmM1fdnG4CocZRMMp9jksbj",
  "key8": "YKB7j6X9328R5Ar97cCDmnKwsd8pFje8sxXivLZrk9oKiix8u85uiDAZDdEUzQGxTViHecAsBJK1yutjUcMe7rS",
  "key9": "4CeoYKNky1kPm64S3t4KamAiWTnmnCXPte4ZCF8sbXw2Upbx1MPpTDu84Kr5Z5dirqqGG1XNxwjK7jgET6hbuHvZ",
  "key10": "3EZz4LtRMgCkhZWjh7QEjHRZpqJBavZtosmMiHVu9U8tv8uxgh2FTLZFQtpsqm6zkdRE3X5ce1S1kEhdctPqbXzM",
  "key11": "4r58bn5Kpsh66fuqeWdoAP44dEkdU3ZEsuJrmx7KsYBLLupzhGn2f1g6K9Jmz6GqxtQLy4EiS9RznoNpYX4DwPo",
  "key12": "CzEL5cBUFgJn1ZsQ7MrHs6zeAa8xYcHiE81o5BY3wffuF2fXvnHH7Zfvh4sfio4f5Gdputv2tRWKjTV3QXxJ9iK",
  "key13": "2D1ShoDNxmxqNhe2YCGrvMf1e6fpsQjfJcFbQV3xU8LMy7rMoY8SjN4zQNfMsUZr8njw4PGYbcwZhpvZrFBzS4zG",
  "key14": "66em7f3Z7161FiTdKRgnNV8sQhwYqZv8qTL2b9dmiHhm3eMcevDBiLrXt3GovKPQG4TVRc3fkN1Y6GtX8fTYaUVR",
  "key15": "5rsxwNgHvw2vcxyuQbisunScKJvho6o31qSAL61N4HDtxSKnBZ8jnEyvmgQgGpTvTWFsaTUiFvdqvVpGaTb1PE37",
  "key16": "HcUCAaZCsDgcDJEoVMgvEk6L2k9wBrcxBqEwemi7hrhCyC7PD4HCJpS2xSYrojSBpNCSoL65hS8DejTkW2DZAJm",
  "key17": "5fycxm74zet9aBngiG9P94VXACFyv3uMg6eF9dyFZhLRsmrSocnkrp5P3qkWfFUCJUzWdKbQjisPk1sV6KQwQMuh",
  "key18": "5B2ek2n5ByzrEzFf8WzevQtxSoewUUxY4idnn1fLH8DB2TifGvNTm8tCXWxLm6hxrRe26nq1LsS4ajZJ4FBBA3d2",
  "key19": "5VDpkTWR41NAQepCTTdVNm9tHQA2QAAhWSinqhSFqFJ4xqAL3x7D6tkftPKJk9Afp23HarVHB1D4cuuenDFGoho2",
  "key20": "586PjmXqWDEfYy2U5ippGDfdKB5ZWr327uun6FJgPJZg866KNv7QEjKQDxwcPS3fR5ucd2bdwiXqkyYYU9rkpqgk",
  "key21": "2cJgX7M2xPD4HMkwZH5FRcE6Chn87g88jnDqacVi2j538CdVHz389cqU5Auk6tjacfTxWcJkWwxh7xADPd6C3meX",
  "key22": "3thuSAXPatVPffsp1hMcjQ2jZrXySnrYY7vTSSfU21jeNw6BGhQwwbQDQ61YeaLKRhARo9osYq9anhSPj8pRxrBb",
  "key23": "4QM1AgFhMTLhsdhMHStK9qkG1drZV4n8JL3u1qyHiDm3wVwM2kYYp47NvmKZbKSynsV8h6gdxCJNRsak94DFFRKk",
  "key24": "4dSu85m2LkVJFLdCEKDkYsLdJ2UGFC9guxK3xF3gJ5CTWiUNf532ZyKTGerfRLdzwHLLZCxWQYr3UVU13NdYDiwh",
  "key25": "3GtC4C5oNvobmT1TdottnjfNFkTGq4FRKaozb6YuphnSnxYc9NxZKfwWqEmKiERRSMpfygMtTUSX5oZd1tPHmCYq",
  "key26": "3crFRM21BbDHGwRPHGmu6AckiUwnWYn7Ty53HFrE8S3wJkBLM3XjthFrmH3PD9KkRdua1BF33tVpF62T5qZDKGqj",
  "key27": "2Vk6W87edaoqR1LKjogG5oPeYRqkVp6azXEzK7Lf3GvrVf6AAJSQGqL2mxoTGvG3pyDUhrkcbb8YDUMPVmN8W6Hd",
  "key28": "5F541n2uDaviVjnrMTCnnFnVH8DXUCwHURLKquAz753RNiprp1qpx7UxrKm4MSXjxmuHqPXfyox79ubP6Z2kZ3Jq",
  "key29": "4wPBstLauuhWd6AdJoREL2gJRdYPg2PKVwVkNgXFAwnSFTdDszuPwFQMtFCnkFQKV2QM4aqbxyBgrJqSCKitsHWZ",
  "key30": "5mGuLWjoASidzZKv9f4AaViMyJCzNrQxKtr8Cz6wyRK8PFh3L9gtPTzWszGH4FQA4rPSqpxhpSpFf3xLbjsToZx1",
  "key31": "3wjYHNsApjwJrHC9UxMyqDuDhAEb1p4xjE9A5DtzyFqu4HUUMG5AAVAA7phqn47qR7gSQe4Z1RRyRpox2LrzzSxH",
  "key32": "2TAZwf9uNSQivUL2bighic5LrM1GLNJmZZMe7VmNC7qnSZDbVXBA55BfGLYempipoy2ZEQMzWBDXi3DWNXLMivJB",
  "key33": "2D1s3AwGhWBaRT1MbPk2UcVBfiwgxQWTuM42PNwwZbgQ51H2RXZAUR8WQ4i3YfVp8wLAuNuvYo4zXJujdpEWTuKd",
  "key34": "5JpiEZL4ffP32zo7MRbfhYm3bQFnW754gsmYM3fTkjkqqhPdMPYcmvU1Ez9pasnkL7ci9bekEkPPGSMjgEa1FVza",
  "key35": "cAidhXp5noRe7SEgPnJjs8EmgPRbwMzRYrm31Q13WBY6gHRkfMUbk714eSp5G6BkZWQk3oDgfzoj72fxH3HPAwr",
  "key36": "gvokU2vthmFjx3fGuz6RBCmxCD5e72gXMeF33UWUBw6epovCHX9V4CGg9Fbmx68KFf7dMefjgwXvFD44iyMRzZJ",
  "key37": "3Kyv7v775UMeMPcTuvDwksRfe8JX44xqz2sXNPC36GBUni1o4Xt5WwX1Jx92PXMt6mTnBYWMSR59cGxkxVxcj89n",
  "key38": "3sbyu7NYJAXhWQWowQ9F7aXxDTUvEKmBFufisx6RUmDWihn1Z8ueuaWZfgv7jNjKnAHTxpJ1GLtBrEQydFeq3L7o",
  "key39": "4a1uWXxjTo5pNeUcBEVhwbc5PSmojipuUWQGyvou6k5HhMrk7NEhYD3vr1DDcEoLMRD5SxX35jtWhXkcA4SRyNKo",
  "key40": "63iRL5Cp5QsAHNGzXbG8AuWe8373cYYeCsPGoLZk1sYDqmNkR48My7VrbXMMMWaK7r7TP57ag7SmupodLjoWFwX3"
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
