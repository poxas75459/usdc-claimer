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
    "3meNqHkjFEQWxRZjjTPACbdWrMd7V2zKjFydbKBLJrB7kJEXWpuQQL1tPbZ1WdU5vrHWGM4DQeNBEptzDQb1CxSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRfjdaGzLcRZQTbeS3YZeQ7T4wvnxgGPdwvd8TVweLpQdgNJ6sdJSxLogG4bGMnFzrHKjaSwqHFPMyzGMGQPtHM",
  "key1": "3RjdAsKDnuVFdxLLGzFr3BjSU52tF4doa7aaLqo9RrRhAYvPvFay8qCsWZwUx7uQdyzMVXsPRyiZjzAibd69yCYn",
  "key2": "3CMxPPeAtVfd6Xd7Jd1MTgAR6gsoygEpBjyZyjtTH2s27R7wDXKmJrvArfna6S4cuVJ3XY9w1NFun9eYX7Suz5BF",
  "key3": "2FqWhZiFMxNGfZ8TaSZzgHVoErj9hzMXbEWDVSFVz15vjK171oiMkuwHieJ6t7V2XbLvX3ZBrZfghFcDugDmz6jh",
  "key4": "5XaWbSH88VBvu5CfFuJnEhoXRuapcbgUx53h2FNUWjcKxb1W2r5B1NUfqAJPiT2BjJPkUhR4pFxHce3HNcRXa5S2",
  "key5": "4REoyNsDFUtFgESpDnTHJPzacDb7d2LNxLo9gLtHLyDCke3a2XbDwwk7oDpccuuFkdC6VUQ35L9CujCz2CCkfjnw",
  "key6": "25dkmWedbjbY8rGqw2ofzKf1PNG3DQUHnBoKzqceHxVBsQw9M5FgaBJjmSkf3bWrrBTYfzJ2hVyn3zjQkAw9pG8q",
  "key7": "5vmJYSYLeStNkwBSRkFxmmxKxkuMQLz1y3dgYkvoSsSS6gTYERASATNUVcqqFQ5jqP93XN1qb8ZU6ZciL7UnVWEE",
  "key8": "5Fq5fArBZLcYwEsiDQFSvMtStBCPVrzhTCxjygiN378tmrsdr2n5dZMxaVfmYhbytFjYZU8o7TRQJMGcYSgYgwD4",
  "key9": "5VUfZKFiN7ZWDqTqk7CfR9m3smoW57EQZDJdhyFGPVn2TTCL2FDRR2TmVz1PP9emp5KnMfuFuqkZCCnTWuMhaaHM",
  "key10": "oUpEgnxC45ggwgiMcVtTvC5T5d3Rdw6PVNw5UGNrj863aSxZiJVnZac95yhc7VRyDZrzLj5XE5VKB1LKdacVagu",
  "key11": "42NCqSYpRHiWfDAhTQp3qL1g9Yq7kDEM7VK8oZnUNpu39DJUqrqL67NsQSRe4vsBLbQyJSXHmAPQyTVJjPYUucSL",
  "key12": "4BK3oinY49DumnKUoEJhWhUHb1zBFF7u1ZmoZvJWpBLkSiBUyoP2jXtQ6LSmKDe7hufXhYKFCQLPtvXrdpzvB3qQ",
  "key13": "2RE3U2F84jkHNRSovFMGLdZjFVdsVgQKSxY8JBfi86nXUqcPuSfhtEgwi3greB8P9guoDRtQQe8r21Sp3QD11GbU",
  "key14": "2htPmKwBJ1decZT8e7hkGGgnkgw5HWQ2f7xqKwTBRkSWxTHRKC6K5mroZRR21JuWJzBGhypHLcJuRatdVQa1zgJF",
  "key15": "2Q9bttU5pZCvjnLReNAXEMBE4sbWQuqmkLNSzftej4jetLG9aRPsCB9RyxvuV1J9gQkDDonS13Xhs8G5hBpFbbJo",
  "key16": "4RSLfP3UG4cDWBL1hJeGxjWmNy2q7qzJhyZSGTENnyx7YYKQiaaKr3d3SjQ6nWhqWGkgWfDgNcJcHVs2SVRpHZsH",
  "key17": "3TewM9r3mDGcCn7F2hymiSBo7nD9pEqDXLHthHX4Ho2AgvyDfjaK1iTdsVKCNoArtpcGCkPJ6KdA6xvHoNPFQoLH",
  "key18": "2iHrPGHQNS6svXr5Csg4qgwxTAedZqkxd5MziFo5f1x3NhRq8NVS6zZA14FLZceYR8W5QD8h7x5guVYzLG9KbEvK",
  "key19": "39uAo9csyg1beRgdwF3pW9gz5SqfePDL2Z2eESm2J2UzgBFeE6kZMQWAewNMs6SqE1rBighMsudfbS5yEqkMXXKy",
  "key20": "4VqtdHcRh6DgDzJMY9ChgQhub8H3NFFb7zad4Bk9Kw3QJvLUfzad6sjDXZjybJZRhbjcmfg2xg8vSGHfL8MdUNdg",
  "key21": "2DzLP2HmKF7cdys8DcceXr4ZMmJCfczYRyfcFhYbZZg1j6Q6pfMYFdo7q7G1x8wZK7Ydmf1tuaYZdWctSSq3Wzeb",
  "key22": "3RgDdeyfgPRuiRqnoieqndU1YkFSvZ6DXUUXYUDMrFYqTSgkN4NyXaCsZcrpCbiua7aPCXZ3MnT2kEcaWzsYTEDb",
  "key23": "3u1mxQqpX71337JNa535yE6z69ZsxuHCMFL6nPDgY9SqiwGhFpb6A8unNysSK9PXEN66ndEoR85pJR3SoYKiiseg",
  "key24": "5cQkQ2pQZuUEPcXDsfg2w9uDYNHkmCP9m1XbCL7fGpkiS9C3xFvfEHvruPT2PXVLA6AiPZBBFCLnbRWJrpx8AfDm",
  "key25": "4reS4bADpNjbrQ2HdvvmkyRuEw1KZJXd3czSnP2ogMBtYzoBNx2LnNYzRYq2w1n9cmYugzyqhYPPmjSPdQMXb7B7",
  "key26": "5QdBZo8Vc6V3NW51kDJ2VVkN4SYDxBcTzAhVn8T82PypFeobikCfjDjJHbpePgtCa2Sc4wmHWT1K2RnJrzqR1F7j",
  "key27": "2hUzBwzafNDJoYPCqiXfKQ9kVUQEh16Krf7AtFGx4esroRo4eBqE2Mx4Kkxg2YPcBgJpVvp6BCyW5aXU9ZMqmEgZ",
  "key28": "2CFUbkNSaY2ru42ZKRmvrbKHtaZChEJtZ9VgZdemKgWgdnwDdrj4qcriGnRgsTVWT1wXfP2wcXAVmeYvCzA4GQWN",
  "key29": "2JHmWm6U9ctgNNxBwHodbySiT547KeoYYMEkKYASn9azzmpm6mWikAEeJX6DYKwYJCTrQxYxTRns9jtn8R9ZPHUw",
  "key30": "4QCsShaMV2oNNBztuzu87LWicWWfxs4ykfmSnTuhwGLcvYCRY7pZ2o8tYG7Kt1yYEUVjyZ4xEuFwVGvcdpsKDuVE",
  "key31": "2REhbkFAZLSmMxHuGR6E6KthQxofrbecCe6psT4FFhxTWDGNm8VMAdW2nx2iGHqNFSb5pW1uUMpk6URBhGUg8gYg",
  "key32": "x4mnJ2cyrVC7MxUVAU63zxGLgTriZ2ow3r4E9wZURss2r8RYGQP3EMeC6FtRNPj2cJ4jkEjntcYjHe9AdYjNkdn",
  "key33": "4LBh744V8R9nmKfsuDm3fUa7HNroYBarDcgd8X3iwQyeEu1vyhBuqBZoReH5E6Z8xX7Fv9Xuapne1AwaoKBQe75z",
  "key34": "4fGfbQSGcPSg67Qt1m3HZFx7JaPSETYPYiGKJBtb5bMXya2SizdD1v9y2smDqwZRDyigqsqBL2SnbDcrNjY9BAYS",
  "key35": "2mmAQi37zu5MGjvEwMfLjHCsSd9ndqbG3nZWPTRuRJQd8w57RE9aTBNcAnxnySrqCbTVR3MHRZ6XPVqrkUkEEDzv",
  "key36": "5mCAy7VbQv57LdcSPWVLtH6Evmo9t68uLFTw6m53mVGLiyn2ZcuqkS4Y7cFvMoSTFPD4rL3kXapEfu9nL4N5pZJP",
  "key37": "2L435o6gR8NJdW6eBenJdxMXP9JMwF82uM8i6Z1SEbSeb4PJJFxrkJQXdRWUB5XvRpZVLeZmN41FMggqZCcxsw8T",
  "key38": "3KcJ325XaxFLTJ3upzS7iLsWMoNULYGq2zbhyt2cM1fcTDH6U45fjBj7pjczYXEWTXzAoNiFRGWcerB9h44LRi1h",
  "key39": "2pPCDaNNrZXaQZLANuTM67z1oQGmK1UbXNXw3cftXiyv8Lfi6CaRD4dsh6EJ2cVTcGvPzAFne2WeQ5RSSi3GqMfC"
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
