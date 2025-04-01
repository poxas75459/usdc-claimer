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
    "4Q1ewLynjCBFaCsRuThjnTSku1AoeCZn244skvrcyb45gvyo5cfphwof3djKjrRDdpKxbkFX2azgRCXfh9wSjJBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNMXLqumDJqE57UhvQnpGuEudv9kNmMdqVttknAXppjy49xn8zq79R4qBAHYVezgsEFFGQqRxUSGRxDjRnTUYmD",
  "key1": "2fBr4KXcdvXnVTvNYaYWkMkpLQNyhPTBAfP7ng5ws3qmwomY897abkYStQujPNVLcdgQ9GjubRdt1WyynPY8Ljoy",
  "key2": "4LzKjJwajwt9ePWTmDqh9E4WJzwxMc4ycBJubQg1SwuuWPJ189ABErZQZMyjFB9SZ8cF8JK7ckrUh9W3t8oJFQgh",
  "key3": "ffB15hYehwWif61xPnHmDBjVqdEDQKpsaWqhVZbAzdEMuqxGMNcW4NWXHLJyEvztAt5fN6JjHf3YB8sZ6jF59KF",
  "key4": "5UA9FjkraHQf3s9QBJDVFA53ExEtiUQKB4UCUiMMvAHVGXC1zLLQzxyv7HCAAimF4Jk8dJ99dMMQAYegS72MvU6R",
  "key5": "2VPVHRAoKY2BeTod1gYDv7VVUyjQXUGuZLAEJoFUdxM36KCbLyrBKTdpK6E976gqQQmJFtDJ7piXu1JiUxRZBEnv",
  "key6": "4XZiTVFaSKv3PA8PDukCC6AHv2siUJ2keJRjiS9Q7pB9vSecNhJ8mBUdUNvG8og3zZucSkBwDW4UYDSDGNStMwtG",
  "key7": "cjPAveb2tNk58ZGa97BiTFs1xrwwzGPo7VCnCPMyNkPafSQkZMZYDexpGH9fzjY7FpXtEa8sE8LLiPFXYVuaMNY",
  "key8": "61YV3MrtcEz5SpeeFocotwG5KDQ5VU17YCEjApdTgWNF3EBVk3937u6CVTMYaonvJyZ3B6yiucVg4KwxBKNswicH",
  "key9": "5iBnyG2tN5oxb7pmCQy37ChxK5szqPTUN1huhU5f4mw2VkzM67s2BuCKD3MQaWEDKNt5tA2ZWdYcEZJ2htodhejM",
  "key10": "44mqX7ydAu8ycx6UkjRgWNaWJmJqks98CyB54kiurvG6JHfZAe8GHpxQFZ5Qr9GA1HPUgZPqmCTvQucFaqjfZAZu",
  "key11": "3wB1Rz9v6bnc8pyyuwCFFiFAbSvKTUtAaTshPaTWqCXH3VuKaN1X3kgCtEgNDbT9ehD5zX7yF5jAvxhDyerkqynP",
  "key12": "36pauvknFUPbMtodQm14kAkUeByY9WqCsyFuT3ZxoZKvABniDpYa8XXeU7XmS4gjXVht98pyVYNPLuenSMJKnm1d",
  "key13": "4bnXoyQbKVTWKdY4Afzg8oJteZ1NBwdokjyffiBH9GRbRbH7zCitN5k9LN9Lhg7gwzbQGgHcL7v7XENFDZqUmvXD",
  "key14": "6156Rg6zLqDTP2WP4NPagyV63tzbtneaP9mFe3UD2ptV1L1RT7AanwbCPMhJmhFXiJfFYwjgyprdgwL1c2NyL8Vu",
  "key15": "RpCzeDYvNi9HjsrhUHVLCssQWfBAXnUKHfZMinPWuJs9bJbFb9WhQdWvQdDQ1YCsRod6Z3wH8C9NgPnGegt5n8d",
  "key16": "3LbiaunC99GHCxag9Pbfx5qnAcy1JLc5Bqj3UzedWkxuKes1Y6z41V8vd2FzQkqBiM5EDRCZqGx757HM5p9dpxz5",
  "key17": "64SkoiQtjhFwyJTdCJ7ugF2v5LuRuuvYRAvJfPsCMbwt3hzjidz9xFD24qBQdYYFSFggwaHxSYMNyusxj73Pu1e2",
  "key18": "jMfgpP4DiDvBiumfuzRk4od2sFoKjxQdnZfFXENL3VE2ZCmTYk3fSk1GJgLAKy9FpVGGwJHoqMpu2L3aziNxZ9k",
  "key19": "2ZLRvuiLVvRQEJxdnp8ifRpoktMTmLrCCieUrT64jXVo8GYdiN1eszNnqpjPPMEQYUEh15T1zgdvTzEKnMdoLXmR",
  "key20": "2qqPeZtjejnAgXE9y5nJoFYeUqsphUJ1peyhHGUBDFgvgrqsyPAARNJ7Dg8sNc6dSXLSLKSL9Rz2fYRxU47gMqS6",
  "key21": "CJSaYRDbUEpGFK9NusAezCRYRJN8mEQJzLF66p6AW7BnZgrktaetAWetUK1JiA7KicTW6dQw4FMKL9icsShgGzd",
  "key22": "59Gx9MEsx7vxUqae9aFgaqdAgXPB8rn94WoKP9zEiJuW5mX6TemkhtwLmPGZWST5ghKZHrcyz1CQts6LfJey3Jz1",
  "key23": "67n8rVQjsGmSeTDMYDNkWqRyUyZy6penF8sxX55x2PaMeDkMSuhdui1UedpYBd1oBAdAkzwHqYuryPysX2b147Af",
  "key24": "4A6XDnsMiPS89ts2ZFbu1Uu1iTxk3bQR77Dqk4yfaDLZKu2sxSgt6mgSFAHko18iCrExNoCERwU2e5E17Ud7GytY",
  "key25": "2ZxQub1EuQZJcLohcu6khQQsnBN1kJBRDvZVM4QDzw46tCZ5agq6WKfZ3RRfRNahVjRKcWLb8s4VNPrDaphicTcy",
  "key26": "49nccxQdL1SjQf8UgwmAszsNre5Rqki5ShUDFDya6S2DP2NBT2Mvdmf3F9d8zZ7uSCNvyH3KSSX459CeW8wC5END",
  "key27": "67GZBttxMkjHqtfmc3rsWQsyrZ8S57CnEP1bdbyGvcrho7rVdGQhjoy2fNHpESuZAPrd9CjAvWcWGwxV9j6t5cqc",
  "key28": "4dmoRQ1CDgNdJ3wmgCH1KnRi7FVdc3dLt1VLypZAXx4j2Gi1czX6tj3uE5ZDqCBM5bdka6UbHRaZSKgiZdYq3Pg6",
  "key29": "2Uy94pgMb2Nk8tTaE5Ffqt3ERxbkqXWELjx6ha21PJRZQ56Sz5HFrZwTWjS6r6BX9DXHWXR5H1BmTCTLBivVbH3Y",
  "key30": "3TQ6fpRYsV2Jkh9yF9PYGgF68dRPGdneFLmRq6oMVc6rncgPkLAYNmpwhu2r7WCsfUr3FPAfQPDUF4pxngiLDoZK",
  "key31": "V2LjQfYsMFPaqmzZqN2RUyNPURmHk9DR95SR4MFSsmQtJvheLnVyjuYv9mDT6ZPBBGcFQpkf9RVoLFijYv6vr9U",
  "key32": "pbvuXrsRtVbcYybntcu6CFrqCzpTjAMajeNT4JYdMvcFC8oTB4xAiAPh13ynpX1JRXiMjmKQgjsHJEHExP1sVzJ",
  "key33": "4F3ScSFeydRrTVpadj6oHxDcQpMTNWnZ84A712Cj5LnzJWpVSnhZXtCGjc3pYdiUUSHmgrztNCxTxUMJsnLeskWu",
  "key34": "NGTBqGTLByYKPnizfQU5Y7dU3qG2u4jC1kT97EP3gEjaPCC3YniPwR456nT614QxxPTukxKAGNTApSsuAZiRRKX",
  "key35": "wV1x1G4tE5FjD6c5vokgtmPS8x6Va4QfKMZhwbjgzNkPTcsrqX1EX411Vg2zYcCoevgZNWSFmixjjzCcWhNkD5P",
  "key36": "2Cgo7tMhNuRBB7d9bSECSTYkQpPJEZpY8F8iUYdWuiG3mj8iViPtyELUMaCMgowfSZmV71n9ned8vijRHMNwJG7s",
  "key37": "3CTWjEFFSBkB4LxpjwyaF8nQnSttuaTK2EKd8itPh3DFTu8WFLyS6Kdba4sEPVm18iTkr4m82LVtBjwUY9yg6A9w",
  "key38": "5GADJZ776rz5Q9NvCQeGeFidGSrjYn7Hvfu9TAZ88TbanGqZtMx1A7LWDGxmyRzETmwexisXzJKyH5Cbv5zMzMHy",
  "key39": "yoTucWH8VM9DuQv6jX8JNziA2KMsTH8XAqkb1xGX1L7peYpCc1iM5ZkLR2tH76emQPzy79yBTLa8ZeBJ7T1ofPx",
  "key40": "522JxcxywUAqYo5YWvsxW7VXyAnRkrXrgWf4zFGEUJyZSYdfYctRDmGwuvdB4LVQPCScVqWJBPaKt2NH6TK2TQ3q",
  "key41": "5AFHLzbpgLkd4NC1eCTvaGBkQU2dq8pjDe98kzm2v32Hfhb6gbgTqFy2ceEadFXMVJHphZiJEySba9SwSoXxUDxY"
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
