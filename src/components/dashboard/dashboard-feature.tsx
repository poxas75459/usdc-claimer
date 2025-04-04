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
    "2uqvTcrD9UvDMKe4RyDFFx2hs17MoFGDASmgpyLqYYqEJPejM2SLC8sdTWNdMwzrDjWXbmkJPGEFSBjfLCC5aXg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47P1aw9y6QbwJB8LFzsKG7sh5E4GFmqXxaM1LbepQxTyjkF5tH3EqDhDexX7NLpnEz4xJGt5sPTGHMHdrjJ4NSx",
  "key1": "fnekef6duyqf34P7d7mg4x4sJgxyN4KYCMivHwSiCm3eqwTb7sRUzmmZmh3XuxyMkvyBTPtJDePnDqD1pVcgqsj",
  "key2": "3Zutc3U92KPTtw8NuEqKp4GMXrGXWyLVEPEoh7WZJ4Fn2bu1U71QFzbyDD7181g5bKik5WuFZZzD2Tfbyouov44L",
  "key3": "3jRng6qV4rbgYQe6wufwQwUMCPgyh5kn2Z4UxRXZMHs43635FDubpe3GDfdgHxLtEbKpXhA92bBNhuZ5uhGLMvDH",
  "key4": "4FHB5aoGGTiteqT43gWxt7Ss7dxnYupPaBVuBe5uqunUYE2LybaAoi6k1M7NcuqaVBUjw6ggszoQecuK2kmWyEqW",
  "key5": "36B87VhCwsyGpAixCtxznqxApCWQjSDnBU26gbmysEferKun2Gh7f2K6jyEFoVaQjPatn8H9NkNqsM6dXoQpPuop",
  "key6": "4eqq6au6f2Wcj3XqeAYuW497HMwsGTjDXFL24khvZC9LiZJtGwHrR8MztZAB16f9wPhrUjYVDkEnVY2K56xmq7n7",
  "key7": "3w75QuJiqto4x2dMJQnVbXSxt8RrdVSzb8d6ALsJGuTtQ5V7ByCSQFWyQdFvgQAXnWqNfRSdiuBX5FnTtSM6yZF7",
  "key8": "p5rvY7DBaiBannqFE2EvjV8LLpTLfezTofQVxR8NaRHriUvVF7oDuTHgyjddjZkKePmvBNKvjVxNwW8WWRV9sPS",
  "key9": "5zNEdR2jQigtjqJxS1yy4hBj8YuyerC7L6AKLR6kkWCPRL6vSoPWa5ryeHkZKeKLkyEDEm64zFHMFDPr3JQg298v",
  "key10": "34zkyMUnKrSqHh32cs2TbgbpGKJrkPQukRNgaVTa35LLPFcWRcyw6jAEBmMcvifdTEYLHW3Z5RD3MGrg6MeUYu1d",
  "key11": "2qt7UxSs69FEjWn5RT8KAo3pfJ2vikbECqyaETeWEFbH3CuCt3NL5rsnCiAP9PL75NsbjDy3geZwpcmb8CGaTKCx",
  "key12": "4sY63DsomyaqStSt9UmfMMNJzpDReLc4h9QzXW9xG3ksdL2xFDqws1Ve4iwDRrLjttMNNhCRNxPfgtVj6ead3STX",
  "key13": "gMN4SnyQJgmE8t1Tq3f2xjdXf2PxtwXLKLBw4hQkPoEZg5FZkSxACEAYMppPiJueZycdo1RWaS2wc1ZdZfaJrMW",
  "key14": "5sHHUyZwsWHhuQqqkiU6K71yBNMLh6xhWy7usVDKSoNP5rbZVLLEnwigavgdTnNsG6j1czTguKAky8xAvATntE9b",
  "key15": "4TXvzwb7BY9QwTWuuT6YjfkatL3Jycy3HPL53EqRfWpBFUBqXxYqfSp5Kq4pJCkLiQh96ryMRQANUTR2LupAVEGC",
  "key16": "2cBdpT9SW5xyMuZQRCnVfCRnHUF6WB7amZhjg9Formh7dDaJ3B8fGyouq6Cu8zQW3w8w4CrzCFkCJcD5mg5FYFua",
  "key17": "45RK1kE6MvV1hAtriHfxpo5amsdgTwdoubbfiP4YvHAYu5vGYu7s9oqzFqX3GCZg9ZuTz1aZqzjt9Rqn3aABVPcd",
  "key18": "4Q19uxtdknSpwHZeb1hXSkPbBicpPa1fC3t5Krhvwod5vCpHjvfQPwRVDQhdRKmQL64aATtpZPa5bh6TNu6xRtQH",
  "key19": "4deqvMuvJb3mWyi2zNg1ufSCFHEe4rv3P2cUipJWUGq7vUoJeABetEcWzHs2ynXg7ekgdn1pfaN9L3in2JVMznkx",
  "key20": "5EFu8bSD2TJ3e3JkcKoQq5kJJV5q9ziXSGi9m1dbubBRuJwGiUry5yoFXWoA7QKDQ8jxfoZazju4tsdUqdTms1nZ",
  "key21": "55imjbwJWwtKH3W865y9KfJK6pikNZ7qz6561YzbBctvojWVYP8T7XEq9UAHC3obizK96ig2bohX415QK2Zar3Z1",
  "key22": "4DD1vzRzRgedsLaQxpTtRcoQiCivcxLrHRu3KJCC7VHNm7hN3HrG53AiB15o8nzESPqx3cydDcihjV5PubDwhzH3",
  "key23": "5nq7cYAEAG5eXYGsjj4VxJeH6kPSRDmG7oxZ8Li1Ta5nCMc1xifXfytSd3vV3cZLCr5mJzLwfZevAmr2rgxjvCk6",
  "key24": "53DhYDTwxKco81pRNVRDsZZVAiKY4eKrqjLdPZZgJJEEWAoZw3YpXkBDG8CiJ3Jz1pKnRDytwqqgC9dAQgEWkybi",
  "key25": "4ckveCTJjf8aiisKycQ6fQxjnapbktLaJQZoLUdAWQQx7PjHLvyrshtYZX4pbMJvr5jdqgVhz7HFHJYxRrUMLesu",
  "key26": "4ZgKt7NNsrZbt36up6vphoRN8FU6WiFpasZrKHkQzRSaJcd6ngCiQJitpLq6WnD3Jrb9cZ82mEwwWA98wumdCo7p",
  "key27": "5Be3Ac1Q6WLSiw4ZbVdjGWCjfWuqQP2Vkziv4baaXQxsHa6sum5TpDDxwWMS9ctBuX1xt11wLMw9gmnnphE4XKab",
  "key28": "rEPFo5LHVLFnL6Qr6bYif7SDJExdDLkKWpVBgRoUZmwDKpxo7AY2S7nwENB5XdxoXr98TkmuyGc2YJMnvrBdDtX",
  "key29": "8vnNMSjLMnzzH6SZweNKX6kjrk3pd94TET98nkXugDFbpWdJ8Cbz58mBTpQ2w3wNDfAqHaP8yMntrSXGxfgcHq2",
  "key30": "3H7yRESJYbFK4DX8dMuDeu5Zd8bNAbFCrby6LmWkenKKJX5xMy4nwaeV4UKoacPK1QyEXGeitM6f8xwnhBiriiK9",
  "key31": "2b32WoJHUvExqMiHDaH6ivkhk5RtwJ84VMNi7misjQn9u8JoM1CuibH2QRgDGivp8NYvdXAE18LuQmxrHzPA93ZT",
  "key32": "3jTtSkDz6qbXecQ194eDYXG8ahJNek1UwuRQVuhdAWjVRSAfvc4zM4yZT3F3iMbY4twpByJ7P4AWMQsBkiFP9CAz",
  "key33": "5ZcPBom2LJzqAtXHjnTLoUviuQwHB2wspPisT29PBwRxkVAuQ94TA6brwXKQFnyK2LGtaZeCcKFJbM5zkgH9v55U",
  "key34": "2uC9Lm6n4VSTqjs58ExVKdjsFjoobohrnq6HXK4Qv6Bd8hVaz4BikoJS6dSuWaa7gxD4czj3KD3PYrYJS4qqPx2w",
  "key35": "4y7zPaNoZ4uDKe26jUjGqJrCZPhyBbRJdwLmutrfwfKR74V2VYthC4AxJ2RP9X7rNiVfCA7C3cF1W5qNUsmCF6mc",
  "key36": "5D3HGtLrjHNHoKyh6Hnqr8Eau5WQ8bGFs9zougq8mnc27JdcZ1Ng26EUqBze2sdAus1E28ypAjRppkSFp29scc9W",
  "key37": "3fgnhENs1LGe4BZnRUhBMMAJYLa1EwQZHvExse4XGDfg5QfQzMRAb9LNtXeMM4AwmhAdkEWU73FtJFKBpFUMd6sc",
  "key38": "5RTQqArHD74hGCLSnvu5VsfDVKsGoRLgERZckfHTMSiNw1UkTK9WJYfcV6VHHYhadshZ2YPScVNnQ4z84v7jUxRb",
  "key39": "2KgiFRbrJQVWTd4ix6nLP9GvXqLQZRvZaY4S2KVGFAEzk55Gb9Mgs4jah5YJHS4rScpH6T5A2s6qQf28eAPbgNm7",
  "key40": "5ioNbS3YqvePtRWZLAazuLR4AJQfzZ8AfxpAC1Nt4Yv3cfZT8z55bKnHfZD35fp2vn7yaF4iD6Aki1AMGnxzeBdj",
  "key41": "5H3xfh94iuxWLLTMAMvfAejBtAGPkWfYSKb2d1kD17Ry6yi3ab29J2Ng3At9ZSC5tYN3ZNn7Kn2arAqv2jDFmRqk",
  "key42": "5mmknM4UYACTcZShpqWTVWKMt6GpFJBPec1dvhhNarf3i9BaKy9mEBCJhDjUyyQTVHUsf1sNWU3yje4iLnT41LLr",
  "key43": "43J5wZp8v1V1j55VqeHewGfaxmFPNMNQ3VJcoQZrNv9ZUoaW5ZPsAif5CLgGS3fMnhVwQqebvPovUBsEnrC2CNYS",
  "key44": "3z8CB2fXGB7W6zEMUBymGqQe3WdztKXUp6u657pSpACX635kBxvin9qoZ4WB4V1e59MV1W8HuyFA1APndKUt2FEZ",
  "key45": "yQqrscTJC1PW4yfKo8ihxKWRRdqhPScwhBRW2iB9yaQ6Pmr8HxTdkw6NSVpUaqz7ZQvGvZ1JrwcGY1RNkBHiyq1",
  "key46": "3ZN24wzPCdMcxR9762KEMLjvXS8yCSZ7KUbz2Y1xcoNaBVVZZyaUMiFJsQugopRWXbzRcxfAspY2Sp1oMtXqaNEj"
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
