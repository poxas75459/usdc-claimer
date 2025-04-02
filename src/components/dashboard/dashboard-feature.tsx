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
    "2bSdTHrDwFvBGcCWRQDoUHfrN8nHnX9wn9WhjZSZzXuuhsG2gvUqMXWCu2hnQ2S9hGi4CPk8iCcADRHMQNP4Xxco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EkXq3iVXJi8m6X3QiLgkj1GjhdhhgpKeMy3m4pzMdLvSZE3X5Dics7jcLPHh6DZ8iS7UKAP3JLWCBDBKp7agEZ5",
  "key1": "5wVpGSrz4p4FtLij2kNTn5CmQzSxHH6iNR1NBn2Ro1kC7vVCPtPFQ4xoCeCj8Th7YzoYStUEr9tUhBDNV18EQznK",
  "key2": "2ZNP5CMMW1TsAYjjYnNKvD77PrAthXQy2kSBnkcmPgpMavXFqXL8VAB7WTiqx4oZTLxfzxGtdq3EeBp1t6g54We7",
  "key3": "yvUSBaXuEDJSK4eYa2B57Z6ULZFSrtFb5MHDwpTfZfVoPWnqjgBDLPiFWoKYq1PS4mESmytsrWpS4LPEKXFKMAf",
  "key4": "5YapvJRVKQHZNQvkheiA4EkGG4SQEFe2Xgm5CG5WsUvt3qN133t9jULWbg5653zaB1FW1CMTHp6VKGRXkHrteAP2",
  "key5": "gpnm7eEG1sERbpSgrCGr7gZZbWK3gBaGKc2tf1rgmZbnxjopDEXQy9RZqnkWYRpmMpUCvL3M8ELUJNGN9qroUBy",
  "key6": "3uuN3ENSuvgggVJVjnp6rkkJM1vyehj2DRe7Zzwsum4NRdtXATSj9wXM6LcgsmEmCEMUg7ZQzBPBNB9xA3nX25js",
  "key7": "mmGocRerjLRRTTbEvraQmh6XdPHgQ9JYS932ejKgzKaxgsrJhcLqHk7ZRCL6Qgc4q4xHVi5cJwHWVTNrSRUeQtc",
  "key8": "pgQven2b65JMdCmSzGfjPcSNg8PDg6VYjcDGohSLA9qhfJvRmUm5uTNoBn1UKu5XYrecSqfC4KYoKQSN7B1C5Pw",
  "key9": "2wdQrVncekdC9AMGP9g2jLDXon84UVcynwrYTsjfPjpQSTsydReEbRSZxsyFXfKTPbDeH3oboT6SQTwduWVkNyXV",
  "key10": "3kswLmnW1rSiS2UfFDwCTYCevT78cx6hkZFTnUextfEvBcPPdCapDkEpaiwzYKwa1dWzVyHsnEBdv3h1SzTBWmpZ",
  "key11": "2KrgcRynBH3wf5WJchz9XRnnsAUdhT7u77RSgt5Nh8MazGX2dG28vGHZD71Bvc3qpLLTpfm6pAPFEBrELvtor93T",
  "key12": "3kj4MVb4AFYXixYwjzUzLrcSku9BYoxiN66WZASyzmJSmp6F2f2BGRve6kY4iqGuU7NvsKDNrpvPkZm9ZtqfyYRH",
  "key13": "1uQzQocgV7DuDPVAUmKRkdyEoCTZM6yT7qEzkju2GK1PcFAaHNE8p8Kcuz8CCf9f4rXV1x5U5v9PnPRaZ38JFpy",
  "key14": "36XMoYUHtGPej7mRA1tBVQsf18ZRM7gmtpHVxwDMCQUMqj7Txn9EpdHUgmgnSF6UMDjYCSNfi4GztYQ4DxGXe1CR",
  "key15": "3gFtCicuz2hhDUCrkvjeXZbtui7bwhe7PZ4P3tf6qXNfzR9n3JjJ8xH18KkepwtkcYdM9BiGKdezutwzJK4xuEm",
  "key16": "48tGNXF2ziF9GPuHEpaxMxYPHZ53myEhTvGfkP9vtAyWzwwfz775XS7jVxz6g8EUCvn8ga3ZLVNbTzWJWzcJ5fb8",
  "key17": "DV1dWNqGQ5nQ2ZCndVn81BVdPzk5wPASJy8zoD2GMTRmtseV838XSyycJrRbPCwWKuBrgz6ykWe132w51XFPyYf",
  "key18": "5xCJch9dLR4DnVPYGQjXUyKfx7jaFCEzLcQSekCA91ZkKvap75uYQjhMDAj1LoAYNKCHHJp4ErL8smYg4WZWEFYd",
  "key19": "4YcahSGoV5bPFH3PUyQB5iy1duyLng1AHfiEVskokHcBVSEPj5FYisHU7imdAVgx9F5FZR28y8qix2YxsJBq49DV",
  "key20": "4dnkrwQKQbufGguncSy8cgmUow5cyC24MDrz6TWFF8jDcrcoU6AeVP66z7mcnjvSBUHvJAWXGZFinvaY666VKg8z",
  "key21": "2T8462miTpzdourCmQW2BC8HJUgfxeoA9pheKf55dVC5muWSv7XGinb2XGqv3j8DNfgizQ7WbFoB3sUdhTeSjEY8",
  "key22": "ufDWBv9BSEQ2XS9kcyF3CLqnFqrGgaacrUPp2tghRCnjKqsQHHMav5ezor4jAvEYYhWsGWHXdPHJcuAg5NzmgZi",
  "key23": "4jUem3BbsnA3RcoAQSj5wPmsxjTa2dawahg2isGx5TydEYzRiKvYURZAtuH7siW2hJvaBGQZtWKdYBtXQysJxdiD",
  "key24": "3aPxi4Q6vF21y5QSAoU5BjAMs456fHyAXGMEA7aUPft7SVGZ5nQzXbhTXRgQCYnwopwSedniv3VzvCB1fwddrbHu",
  "key25": "5kqqUb3ikgmyXwfijAAsZiHze3u5pXic5JpWsgnSni7Xdu9krwvaoVRuvaAnEPMy7vftF8Tx1bGUz3x58f4gB8Jp",
  "key26": "3UY8ogrVWP1R2uZgr3km9wguvAvWdAaDNKWP6TkGyrJnfdNHatbfErdKWpJQA5gfZXujwYmXGfuka1xZAERN9hKw",
  "key27": "HiYnD2MkzppCLcBRAPnz2S9ymUEYfTGdJUnic9pTSz4FX3tZPBr8euuTKCYcc6XsrQhRjsxDGovLGBc9PsJkbrX",
  "key28": "2oB4UpxB8SbpYpYBEuCkg7yCHZKJmXmuiaCx5KkfBT85LH8p8v8zGhg1Zc16E1Q3desBi4rAmuMfy9T13723cupC",
  "key29": "2kGw8KxpNXNasL367gqm92QMHqHkzHPLhZ1uXpkn1npcXf1bznHo9vn8ChhLQKvNYXdwE4n2qR7TEuJZqw7x3BPM",
  "key30": "cFEps9cZif58sqF2GjiK7ovE2DhLEwRC6EQTUcqTc9G9ZLpgEqznHd9nSE88CFX1QtZytuwo5TY1ruw6kHLLqkw",
  "key31": "QkZdysGCLpg71yzhsidXj5ELYyi5ZqBhLrxWVqS5mkNgNjH6SkgZ4kH4njcDsmo1yAGTg3pEsLJHtzntrD1RGc9",
  "key32": "3WkKScEC9EB5QQrJRtZ955uDB63mKZJcLkuGdWTsrcKYM9k93sApTnWtfbhTWALjJTU5LXrEXDW6L1F8Y5AT6aSL",
  "key33": "4SQt1reynozrJFvuq2qqiUePKgZs591BCNbuU1evfaQtFAY57RkVj6kt71UURsLHPK329pd57aKmW4XYmY448hAo",
  "key34": "5KTJ5UB6fn2hfcFErUR5vePhZHfNRz8ZMa4DNZHEPuUdVSFEBTgtmSChxDrrPRJRwggsukpA3rxz826hikmceGpU",
  "key35": "33f3hZmkiuWLCUsFXGnjHHNrroFW6Lq3nsy1gQvHFU1DcrTxSKC7JuMN81HrZ2MfJKHL4KLV6m14EXeFzH4xTZEE",
  "key36": "3wWqVAFGfEygNomHyWy8XtQsWDZnZ1pcKD6Sc83B38eK4jKiPjbuG8bjys7BqqKQcwqbKrarnyPSCLXG3WQHgQdS",
  "key37": "3UnsraTvVQ863rRJqNch1CJ2VNt6FxKLuXtq1jTTpgaYsu83qNXcqcFeyeBycLmfTMHsdy5nPLHcmjJKVHpa4zpt",
  "key38": "3cLtPTd8J9xdFoWGEsEWcNqhFMDuDxemH7K1M41sK6vkmSpmHpSQVYTrVtB36NTqjzjqVMX6iTp5JmmyJz3jcEho",
  "key39": "3ZHRt3p3bpEM9tiYzGkHv1zyVxQdre4faJWzxnPQjtCD7afhtuApQFGJQBBwEnHEQdCdyepzMneKgEx5BBWhtDuX",
  "key40": "3owJBpA7KANxudCGkxCj9tzYm3nMrZZ3gaJb1G3wj3ayHFPEBnQkcJDQN9SQhL7JX6y3czjqhxJwjvfpkQajppfB",
  "key41": "5QUWRRTX3tji5uxhbbgUB2mQ9V5zAkrucJRxs4LMbMRZSXyVinimAbyTXf2wN4mR8VpXjTRPDNw2gYW2qQxqRKbB",
  "key42": "29WoEzhwkCNRTAigKjHhPAFCgE5Vc79dXgaAsdQmQuuK65xKo7mSuqB2iDTvpB3yHzqdrovknqwkmRajF61K31Hv",
  "key43": "SZYQNUAhRzwCepMGoxD7sPH9Cmt3pnKXvJPyGFSuXz1gcaK561rd8VappM8tXd6PUeH7tHCkvvsxnSBzQXLSycz",
  "key44": "2Mihuddn4S3Dv32whyA8KHqvgZDCxQiFXpGn6j5MKp5fCAXL87bmqr3H7A22XDP4eYXo4TYiCiGMqPiNV9ujAN18"
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
