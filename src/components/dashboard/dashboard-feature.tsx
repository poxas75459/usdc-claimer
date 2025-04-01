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
    "4uqJA4A22FPuzX3k6bC3qFr71pD2kKKLMRhNMjLSYiaVdHLfAvRGfPpba7epj1MDzKkun1A3S1sobddFueNddsLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYGGrUH66uc1PgQiVh56dMtNcyGfW5kLA5GM8ripDv3JCmtEjneBhwXLGuWAprktzoksk7tge9RJvTYwkXtMGCo",
  "key1": "45Uwphs6m7zbsL1gnWj4aPCKqT6E3CTe64mFZXRHE49e5VYuXSS2SxUmRJEixQvTc9M1U8i1hTV4VY2zamKDCfPn",
  "key2": "E4EXw14HU9McQ4gcrUEJDyR6uUkLZjkA2Atwtkb3ZwUWLuWGNM3UJcn8cVc9UQQcAxWzDqvsZ6r9xpFwAPjNerT",
  "key3": "3QK4LgR9M2cVZ4K5D1kFhXJv4X9Fa3dw42eKA653KaxesHu953Ho8tJcJ94R5RmdDVGW8XUS6iWpu8tnqyiQzMzT",
  "key4": "4Lju82RMgxtGLDg2XdEyaJaXm7P6THm444L1rQB3E8U3tsp3SgxAB88Tsuq3We1Z47BbaTEahbjEFwmKRkxpTWcJ",
  "key5": "5HEaSEoaQwypKkWe8EHLbmB2dZkURnwqAdfHMRpSuUBqaNSf61BCw4Gr3LDy4z8Mw4qeLNi3iJEb4HuqGkMETLbh",
  "key6": "3nAxRYeogdxLYkw77tY2UTjjcsuoFWgChdbK4K89C8n4FJY3EqG5DUDotHUthX83qmNMwAerTgFz8YVYxTaGE2uD",
  "key7": "3W98EwxiBqXLbHzodENr4LNmZFxmjH8Zg3uJAvD57iGyEbhFuawcQD5dXt8HUw8vwHn9m5B5EyKVQ1c4Wa1Tcwfr",
  "key8": "oUtEoCznDSVJGN8dvw4V8ELjY5uFRxDqSU9fWJuDHNtR8uJG5gWQ83G3dw5ctL2f39Bo1QMt9YNycKpk8ciGSZj",
  "key9": "4xJEMLn2WA8BAj5tzzCsDFvhm2qjgwqAPZTH4LW64rAsygDPGPcMvCwpxj2kUho7SJAgjXtVDH6iLRpDnGajuqnM",
  "key10": "4RZhd2XGwpqHQMDeDXFMdKhfCo4Dw5aiVQQizYnrVPhh86vK3Mi6MDZriCiUe9Rf2fiSnm4un43yccmwgQHz7u1V",
  "key11": "5qRtu63mK8Lw8QiR5XN8qbkFDqcLFPLwxQ9AxMN2ERzgw8tMFjp3aXwLK6s9zc5jwZvZBWrtbJWmV4cMaAsAcn3b",
  "key12": "5s9nhqFqS8NqSUp5edM46WXPmDXWFJDgjF3eKbiUAS6Q8YiwWdrWjRs4qGGvBy568mmRKoX4Uj5yNEbtA49kM8qL",
  "key13": "2dQ3TQfqa6KfqjzJq6DgEMVJYGhUUghhMxJrHGHNG87e3cvEMbpy2VgCyHHVtVYfPnJrEQ7T1154puFVdTYEUpMV",
  "key14": "22ZRAECwYPTA9zTtB1xsdPJr1SavW23BxMMmTBWJvbopGac1jZGNnUJ5tKtsDjbL8EbKMWzEys89MHzqvsJzsMr5",
  "key15": "2PEdNZtSnLfG1cgrCavqqZ7n7T71DLsdHk9Hu3aTEtxciaebQt6xUedb9cMYthWYtLbqkNdweyW7JFUMYWPKgJdV",
  "key16": "2mMfGfdZuC3YMEQBnZpFQC1WyvpufEtPshYEdtJaDoJtqCiApUC5SUCDUAd8pLREqjm9ZXKMTPF57h5EUwX3DRzE",
  "key17": "vsfdu5AD8rjoyneNZ8LfyQ4Tpj2EE3CkhczGcfPmxv3ZawnTXT5nZZvQoZdy1vLk8LkySC3gBmVcXyRQHaDdjom",
  "key18": "56adFUo1R6HyALG8hMcBDzwczJcCMSPfDo4xk4LGkDK5oeCTNAmj3stPF5U6FZ52UJprxKS4PVQ1qUvMtBznn5cs",
  "key19": "1n9hLqNTP4JorY8BRSyYG6w5SkM1fVHPenZfHd5gwCNqWfUcc9EamXNeLcfTXpBK4M5Vzz2aVfkG2a3SZoy5YGw",
  "key20": "3gfrVKdSMkWaGT7x1UaPfL9qvapvEFgHJKSvEnR9o1zrKR7NB1qPwB9xpda8E143FCeFGAnyxka91b2p4PvzYLKh",
  "key21": "5KyvXUiWv58yBcLka37dwWRVyE28v7maA2tqZd84DRFStnuH5NfVNinkpXVmyVhHq3ipCb76mnkamuLKkAPRByfn",
  "key22": "4ggvBvAmrtSefkHX6FBoKV85M2v5zvjcczkYA1J5QPKSXbnsDTMbE94oik1m235KNG2GTnXcPagzKsWx33j54hu4",
  "key23": "5fovgsNpfX9RAuKcTisK1nPQrzfnm7m3pSJQbEvUBxfTTnhVvMBFLNU6KCq3LVKLbagf2GLjGp1fdmf2szL9nW3C",
  "key24": "bU95rYwNnDN49mehmKZ1D3pXD2hut6aPHcn6eb6XK29Kxqd6tVVDCuPkmJXRAom9gaizvC3iZLDxW3LRkWsQAdr",
  "key25": "3Wyj1i44PVd8tWTiReQfYHkwUYPVp4WW6Vp8ZjYaLYsZDZV17J1wo5RLGyzr6PGbMs49nzEY2etJVp4iVfsmHqDv",
  "key26": "5Ad8ZSUAunRFB8yGpTKMTRTntf7Vcseymq5PTakygQxw9MMSq2HoR84YEWZTndiMQD9HRGG96a2SoCNdjEjHbDix",
  "key27": "4UbALpKb3FbbTSd3EVKfjUhkFaG9PRGXfrSZpvFWuaT4ATzE9rrEzUUPjuqxVmqDh9WJR2SL6VAx8kafSVx63f1w",
  "key28": "R9QKNDrNhJwZWgUQL8eh5PuewCrpHPbqhqY83Dg6HP9aYVVmcy5JyV4UzRsXDWrxH29xBpD569mJqcvDGm2mqae",
  "key29": "2LrWzt4brAYcgLd4qGsazwCfYiCXtTPEkbhNBZr6a14N7B8aifmpwT3ZfqaJHaK5yPqopRCRJNdhf1a3S7SMiNQV",
  "key30": "2D7acP3TKwCmPcdMzrfiah5hYksRD5NDntJn5zFDUmqWNwY2sPY75rhRKBkkBCpT5x7FviEnRqo6PE3a834UjnCA",
  "key31": "5pYkF6BmTEbv8urFmsUjVu81rdSMEweV5toki4RR7xma1HFwGDs8Ju1i2E5KRuw4iDVRTDxm3iAC22eem6kw8M1v",
  "key32": "3btt595RkH5h4u2DY9hGNYy1XimP6HiWnEaU8xC7GABp9bwfJw6hTMWdLkfpF45QPSEH7gVTZcnkDpsXVwvBybVA",
  "key33": "3JKQc4oq5X1kPAQnQ5WTHkGzWqa2ZxoitNYWYx5CjVayGe1Fz6x3c9o3KCpxs1SBku3idzVP9AXs5vVxY7ZpugH2",
  "key34": "3DX8gQTmkyuSVLznCc9cxeDFsbtaJyYu6wnX4VFRGNGkEFRAtxpt81gFGQfviF5WXucgEYdfZafANQ7mv7GNWqub",
  "key35": "4ZWqiveHaLKtpyfDxPCoQ4fJpdpEjurZr1nCWt6BQiY1RnbKNFyjzwGvZvKebBiHjkLQK93QiPQcCXuUYqoXeoKF",
  "key36": "Hadzt2WUL9hh5SBUMMcWouTY5TXhQpkcjZR3WNNaZRUukY3QK4cvaxfdWevP8aL4JoLxHrdjoKfZ5xQBTSQAb77",
  "key37": "4vAiGW1Pnd8zZ7itRN6o86hkSwfPUafWbnhXDQZbJvBNEF2Zf2MQNpTDHrmUa262WBFPf2aYfWdkEGJqNZB4MCS7",
  "key38": "JaCH83SgQ21keSPmgo2rqJi7hFTz7QxJnz2LZ6vyTLhCqhNRi6Y7pNUFo4dNdThjwC75GFzJz3NQx6qQwGXsp3B"
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
