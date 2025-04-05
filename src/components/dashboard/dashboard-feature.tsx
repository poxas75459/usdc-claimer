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
    "3XTsaR5M148DXHsQzib7kvTVWDz2196pzENxZbPFJexVBydXA9DVi1wGo7WQZkSBCAnPoC8ULecktNKpKrG3pTAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tadz1dSJZbqAapsL521iv8LGG3CY3eUkcwJaN9kj9DhGW6dQipZbyhJ3QZamhZcmUVrFJQu8HRAB3RLkQn9Zr91",
  "key1": "5jnM2iEw6hUMiZxHVtBQm8ZZ9nEUochHBLwkPLodAKdTUBfLRdPGLKiQ4xp2iZVsz44cBAS7g5b9EJHLxwS6jwRg",
  "key2": "5z9SVBs6HPhK69dgz5t5EzrPQK53sRbXGr5RarKnKSuJddgtjezQEzNxkmh36iHMwJdeEp8Cbmnsupx99rC6JC7b",
  "key3": "s5RxPPjZLiEjGkJfrR3tGLAspx4RcH3gq1qVVg73sWHpq9KyXsRHTUeUT4V18wbGyvmQv47UUYyssTJAVZJoJJL",
  "key4": "25XMBTaX4g5dtfdPwwzo4pY39s8w3WCWMZEtayguQ58q2SfXDW8F7iabiQJJ94NA53UJXy4jf3b7AKFQ227p1WZz",
  "key5": "2Rx1jL3qW9HeR4Q4ha4iSd5xH5qJtV2pTTf9EESdQvVvWJfmMRdmnf9PzmoA4TSBNExoTMzvLh7LkcUBU6EUYHpA",
  "key6": "58d7iKBNyN9S2zxqCCYkcEnc6hmvtHnJc1bk4NrvMKVkuPo2soEVdLGMUNFrYgzQ2A26m2zCDypa2NK9doQPA5Un",
  "key7": "3GAZjoHc6DkStGVHpHG1RqdeY6SjuoP6dxMm6b4sdMARe2RUSLUBNL14yn6TuFmKYo2rm3wYqrcqJ4Mb2h7qjPUx",
  "key8": "4C7tFxt9PURPzqSaop84oUUrccD3zDhrXQPmVfVu25N9mwom7pgxtjHBhT7waCvvLjMvBwo1f7MbYSTeigrjmXrp",
  "key9": "4TjB5wDv6Az7KT7uoa8CMG9q8CW8k11AxSEEsyhNnVWYKwooAa5AG9dQsr4zoYJznBYgNmGN9AvMb4VP2iv6s9Y1",
  "key10": "2oPD44KKVB3NWnykxoRRyzqaaQncgKYtDht9qsUevDqiTzhAwgSTT37bQVz7GrNchrvsXx2mWGzbYm2p7iKHb6a6",
  "key11": "Ad93mPxJGiPK6rBq2nARpusn1hmLE3nZ2W3doiiMWXfUBDE7HKgpeKsrhnNpTPBuxA4DsYeKjyBkfHhbvZnJpBm",
  "key12": "4X4rFa5hcpeBzdwS6ubCfZW4TJQDHJQQqXvQQnqZXH3UF47cqjdmxb7BFXdEv359tnQmtuN6Ybry8WxsF9k6iTnL",
  "key13": "hUE5237rRvFcsG6WpfDPyCGFhoyargcjwFwvegTcAaMmqzZxLLgHC4GgGdMszvbsFuvjNiRJMrLcbfpEWhx45cD",
  "key14": "5bNgDDvzkwGyPkqXnbag4QxgCAsnCxZMxjNjK65PCZgXKCghhajBpysN72YPKkDF53vQKSpVCY5Z6mPYxJFzqpji",
  "key15": "2GFZLzKhFBYH3wYK6aocrgJgWVavgHMkY9Gtyr2j3iBMUmLkirdjpseGTgcKvQRkHgeqURShVUXpHLZKcaGA9dBU",
  "key16": "5TgNpeBk1JStsB8edT4N54ujBe6vDpHAiPArmNnN4ekwpfERKJ2sN9Ae97e6Zy5oxQjdaKc3BLWM6oG6ZMPDYuZ3",
  "key17": "4g3hmcG6dp5VtihF8QPdxres9SoWWti4UfvfzXuowBeukifzFqtUHSQRdRapXJKfjvrTdsEJFcz44wBzyZK11ct2",
  "key18": "3PU4FRTge4y82KgKLp6zxdJeknJucHnxvABoDNT9EpH63p11gyaZDYGqA9oGYiU95fQSdZoWHBDb8MzpZcfQGZqH",
  "key19": "ehPXYS6NuxC4xynL68op4yXZguiVNhLcKq7DNvyVvpVpWqrUtBMgd8LTrdUnLVKMKVwkY6ezvZ4nYrSjwcy8HEJ",
  "key20": "3NXT422YRTwTmPU8aQqyX3Cf5NKGfwvix1rj9VqfmDVq7qjV28iFjnpfJNsu6kKrE3XaGLNmGypZuYbtTPQ8cQV",
  "key21": "5GBpWyKkM3ND7VoevG3K3dKYdeTSDpCXE3DKnhAG5jN225EtmB8BknUDEd5EEVQTCEeofRZRDpEhSpH2he68Wsrz",
  "key22": "5DMowBj4BCcnZf5QevAkJM1qo5scBv46KfUxtwMEquAF3UCCDiFitB2pmMjwRHtwAmzMMauudeDAmJsYPMSkbBJm",
  "key23": "55uWyydgf4Fagh6NQPLK3U7RJXvaRLoLVeSKLAcFJE1Hpg99hGxgCRqXxBv1Cwn5cFWPcCAWS7NGdqi5982n2E8A",
  "key24": "5aeBwfMMCf84xkbXqdrdaCoR7L7ir5jPSPeU2PL1W3thQRHoaguRsdp7iJCmqBJyDeDTGJtg7aL2jsRP2Dr96CsZ",
  "key25": "3axJpmQgWjYzDD38wuTZof63T9JEb8qJRb3uc7LTaRyLBTz8jxzkvJjCL8VpE237XoXCevQ2gfwtuHBVQ16KAkoM",
  "key26": "35cTsH28PpYH45Zicz9FuWoP5nEj47ruv1MqAeykak5LMm8WkWcgWFHMDxVrkFNLG88PafRjHYdUVdr5rjGq3Eek",
  "key27": "7RstzuMkSqc1xpKKwHjY2nUXkP2WWxQQq31385Qqd8fCsEUkRYM3SufTd7BgLFyYyu6CLP1Z3pYciHUzXr12VNR",
  "key28": "3wJfkv4i3ZjGZAVZL8m2rPjrPo4HTCuepvqWz716VAvUyUCTVmsSRrbNx4HDHGi3u66vtMWxu5U8Xx6fggQrxNS9",
  "key29": "2bQLfC9d9VX1x2vezo7V3BD3nubYFQWWWU31pD4rkQZ4R1mn4x7t4hLfZ3kAQ2ZALuuJE5xcaG55N7p89TssYtYg",
  "key30": "RSGNCb5XjcP2RAEjfwcQSp47StNwy5FFxCGp774g1P84KF6FGpX2coNqPNTeRU32StS9b7nyykPWkJMPHCJwZQq",
  "key31": "2YPKtCZ8jBJnsoo4AebGf5bgQL7wJUbyEmcdiXmPv5NZzVskuXLB6TPvEkFdWfpksn4kYcqp4nWyuAhwJy4sAucF",
  "key32": "3im3EEqYsSmLDpppgi5i6txtvwU4KaNKKwj3N6s5WgAMGHNkukL2t7N8yPAYSKdRDAAYeMbQESyxWxys8wn46Fu1",
  "key33": "2xUS9qvTL8YvUaNFDb3hXEsnERUhdfeNMaCrvbecXvJNxP5vPqfgoU3WLhX33wyV8ZfQjoEXZZzRgqXNMKjLx2f4",
  "key34": "35C4L5nqCPhtJJMZYhATJeYD2PHXPCkmEX9CrEgNDwJGbozCjAfJvrofhSX8rt3CTyF6PG6RDjidL1YAr99vKz1S",
  "key35": "4jezGxVQxgaLqm7qzp3k6YqWKmwEscLaBaWMDxcxcGNUpguEmDAeLQCdq5mYRZUCyTJV2BKWqBR2KpPYGB1h6Zkt",
  "key36": "25YLXj5sKQSR41a7WPj3X1bi7U9nYuJkvWgmnQbPjnhLuV8KWnyuLMALBKhNwvqRfNkHdpcnLeGpJ49vGioY6xzP",
  "key37": "66wBU7tmNmmNPFNg9Edb7VvgXKc1VaR7SE5H8bBPzYsTzYMecD12j4FLJwrkHAzHSj2HsoSf7e446T1CzMVjudBj"
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
