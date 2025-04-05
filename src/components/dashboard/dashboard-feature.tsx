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
    "4He3gJFKz4rZkrVHgkpUQQcQo1RJzyDMyooR3MJrf1296evt3CJpqrwCSYGXEXV2QbuVdnPSayDeTu3SstXsLxUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21q9py4LuGpX2MB4L3VfwKDhWRBNHNzbTaeZUdesTktaYVmoJxGRnRHsUxjMVjE3S2pxNgmPDW979YuCXYXkFJHk",
  "key1": "5jzYn7y8kc7iaseoHBE7JVxRzzXE7WXtQ4LPuhAGpnrKPxWzcA5dDinKusYnWUdTiu3RHFSUaRKXvzYkex5iTvP6",
  "key2": "2be451HKRfYAhnoMkNuqW5u3waRk1nESWz42RwDr29KEEKq6TFEDLQvYzVtfNPxDHNW8KNGv5mXB5zjv4eq6JfaZ",
  "key3": "4oTvB2aLTpjpVzqBu21bAurjwK1zYxg97AkaLjSrcx2iVRh6ueroD5cfcZx2L8JDBLFXmqG8juJ44MoknTYqzRpY",
  "key4": "2v62Gy2ADqmTZNfCLmMJPmKvuSUqrCc3TbyvrMrc2mwZxDDXYaGgx4mEf21LYewT6KbeVPMB3hPKQJr4cj97ZVx5",
  "key5": "4ixRQggekj2CL8civjMX2YpNcrUgrAdTYDpmWacjEjkUsp7tWUCTwgkgPJfHZw721QQ9rVfXfKZrtp9qbccJkm3r",
  "key6": "3Ebob4pyr3evUA2jgxqSMPNiia9qarKWY34UFKn9YSb4i576EPUkzrApN98R5wiGZH8mE1NuaLy5Rx2bKD2e5aTD",
  "key7": "gS4VngodxENTQG5rYMyVWYGD3PSvDWbtMwnNAQdB9kZiSiGGpBnMS3SwdY7JkNBZfix9My7YuapzwZDpDyPfGSe",
  "key8": "3JjQxDnfgQ7by7pePgTvJsMQ6V3MMQJLm2iS9YoVBD49zbax3gUnVJUHppWmjkRWjD1sfdGyEfM3B2mjB1yk4WFv",
  "key9": "5aNFy3wMVciBEA6ihuR5pwUtYqs8gG2U4C4SobFamqUk6UK5E2sXFwaVknKFgUmPEWCRzBt39rSxu4j6d4PRrnJP",
  "key10": "jYQ5bv3kcUrCWmKQxMb9JPEjzPCNCZ1MNihyAGkjKQX4Q4sRFN1ShtckmBjx7yGXkFW7QonkaKDth5KkWdie9DC",
  "key11": "47dzK7gUdgZZLCma6Ssjz8yQPLoQqajpmk97khe9L95gGiC62XUsAxL1pAYwgs6Tgp9Fwtvntg8brvPS3ZMwwPtK",
  "key12": "3E4d6QnDBJHJiBhe62MqQ18Rr5KMEuPhdToU5HE7vvMum3E5ULSNwWLQimi3d816jzQTPQdKTT82zkFK85AwHTKr",
  "key13": "a4mRxB6jP94oumVrHFZBZCVhzWmvc6ZqLJ5NDsMUd7Tz4oPCzWBQydMKDNXTpiEYoLhLMWUEm48uWZGHnzfK91p",
  "key14": "3iSK6QqJvtJEPSDccLeCShVpZryq6RwR6LG6YWLYeobCvptREQSXt7UnD1Sz1kAvVHP8CqH1QH2mJmaCqtGqdxKK",
  "key15": "4zD1igg8CAXj76Ltp4VEfpAxS8pCBpKJeGrxfLgPCGQi39rGegv7XUG1eSqL1FGSPeZoXoRsHciZoU9dQuCFFPdV",
  "key16": "3cXA5vAUgc3nXEKy2n3LxACsVLEcvEiiopTEcYttFBzbhC8q4JpEoWgSTdr615gqkH83UUWdZxhgKmcvhJGAPLip",
  "key17": "f84pUjc8Z5t7EYfMVLc6GsFRdheBES9iWwThbbvQrxpcgWFPUeKmC3Yj4qLtFUbY6nVjaNcVJW1pCwvK5v7Kxxm",
  "key18": "e8e9VuLL1uCY1JY89kXVw1XMkQ1ircE8HP8eU9mdHKM4YcSg6sJB7sQBRmAzydHtJDgtHFACvQszQYypEoV475C",
  "key19": "XxxdVyfmK2fn97uCm1kFoExYL37YS7RdEiNV68VS2HSgFkqZqKzwbKiCjQu3p4gWLBQAQ2aqKDExgDFqRyvMw3x",
  "key20": "2MPgG6veDT4xJd3k9tBASk49WwMnJK3sHWkdPZQsd6qnaQvJVFjZYezz3xrxyR4BKgLQ6QTHdBCsu2UYDYPbtkMq",
  "key21": "64LmyUPanB1fY4iPzjAdmHSfyKA1qsHS5CkotdQF1KcNTDx1nSMZ1LRSKgi9ZZRz72GdbMcwQTkvn7nxwfvEvQos",
  "key22": "5118naTx8Zx3xsPZLvzeGW7YFJrYVjvf313bWFs9aMfA3KwUzMYx5rHvb3cVP9yj8UbCbttFpecXoiXyoUmfmVNR",
  "key23": "Q5ZDH7nDdgYoKvhiKgJ59WrcPUVwRH2nvW4TghAkak22Axi3a7DRWipBFAuZwAbnJe2NDvFjLn9ohW4FdJCDgBv",
  "key24": "5sBqgVPKqE1uL479HqESnDibvgbCkyHPc5kpsRPrsxhy4BV77Nnu9AunsfE7vMJgVWYdTNm2mr1hsykKkF39jESP",
  "key25": "5dxTEfsFuVfwbWPV1edbsQxrzLYVf2akuk9zWTGSp5JqQ63MjXvSGvwnoatQYDPfYk8kKdNYEqADVK43tZF4yV7m",
  "key26": "3oGUbGtaLefCVYiC4fN8sssFH33m9CPEtvQcbkudsD4L7SicBcyXWT1JGPQBQZgoRKGnNHnJ57PVuifnZzrggn9f",
  "key27": "5NErjxKmXYv3faXcbyGMwJRmQC1ehixaD6zFc9rQwZ1xPUN2jr68ALU99sHiGg2pA4Bzk87TasTfKk13M5SBZfAP",
  "key28": "5U9rtVCHBMApDyfxU84rT16tNDGbXVED3NBLsZG9S4SfETkQg3qSRpkwwA1yfSSrVG6RjEMtATPTxv3N4w4x658m",
  "key29": "51KXedJsNjoQnr2C3cCCms4Spspg3bXkhGBw5U1vnojg5yzH7bo9QvuWzkTDSSmAy2Hd5sccQJ2VMMYyJWa9Bh5a",
  "key30": "5fsKAJgDo8hyvMDFx1ykgiUFR6HxqTDLRR2q7t2mUitBBgEEzj5THFcWUNJ6HvUkKjAfg6udsmvAuD6Rx93Mcihq",
  "key31": "5wgVGAzEfWN2EAf3uyC2FpQathV55pH8bUncYqy6Y2HVGRS9fxUHCbK8nMjGqiy7wWBBAErcP5cuhds7w7zvy4qC",
  "key32": "4We4u4HUHvE8SASk1G65pEHoHiPbEycpfdRhdJiLtPR4xj6dckWkvRxyRA1Ci1ZaZ4JsLVx4z2Qy4DrXJNZ4mr5S",
  "key33": "2K3VGiqgjTe8WYEGvYLHTDSA5pmimPmLJX3wfQ6isUwXKTs5NGuhiD5cktRbaVUR9W7Qyn9JyQMMC7WrHKDNyYFD",
  "key34": "4L9QnVmbzBzgUwU3N8xfZvn7Fm7pAn7VDeYA8EdJz6WHgCvFxbiT8TrvvfZwfSoeRMbuMgzBfDfSwP6vHYjWtcGP",
  "key35": "2oWmm2jxxhiU3LgVVyHnorFt76gw4HDmHAEUfpJgtHvzgqvZjBAJnMQKEaHoyy9iFnvchAxiuxk663rQ9dJJBvJv",
  "key36": "3ZbA2Kq3UN3RMsGfqamWrWFciamuhouiXC96ZBiR7ADbTQ3JzwjwbiN39gVjiZFnFRZDqf6nKh76tGgqhbAkXNKT",
  "key37": "P3rDGr2sdRvw8PRVrbFVwyBzyhcVBgngBcV3cKznKor8JeSRxjaMvw4XM3phZUGHAWk6HYRrE1RWz5AjBZ1obRc",
  "key38": "39tQ6b8uUkFqaEF7oyr71kEBtrxvbDWkdDjNirxiKrV2sfnrfejCsnGUidECYE7AH3xa5gdN6c91Uq8f7GYyxZsJ",
  "key39": "4nXQsysKq95E3J8Cb1brRa66beAksfKqXBKwTNmA8c1ehBggARCoBTuQeM8ZMVmsR9SM7trZQCeyTs4P9bk3v7cK",
  "key40": "j51q9bxqGmBzLRXphE1JbbzDccFgmd68MXhQqY8KNSp9UrHhziyvVC8Ffqfc5oznjLLQF2QXP1rEJ4bTZuUnveF",
  "key41": "4rspwokZssXrFFjRSuvBmJZ2z23zx1UhYeccV5VNQJ673eZhCb7hoBtnmTbmN72Qdu8v9iXS5d4e8W6rKu5WYb4m",
  "key42": "52jK9SuiMGD3y2V7XrioyicavbWTN38mruWmDsGEEtFmQSJNdPdi2V6LaS5HxVyAGUwTAtHpBXZkRyDHu4vTGPwn"
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
