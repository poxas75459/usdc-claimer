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
    "2cahyiHRbfhUophnGGN17MbbSPmPnAv23nJ5Jv9FEAq7K5MEeRbEQ2JTbzDwyzVsCnmRLCG4aMKTd8NZ15tf1uqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPQBAHe4t9JqexcT11H3aybiLTVSkb9ysGpu5ur19npRca4SyQCBuzixHrWTsdUh6vHSPJtn5QZorSeAYN9KD1y",
  "key1": "5XEmCohhWUf2g21bgBhKsyXwB1zi767Pwo7DR7bQHzNgW8LafgvSZWkJdss3AdqoLhdGk6EAUYcFqr2EBcoBYvHH",
  "key2": "3HgMqTMj5TK1S7eywuPKJjx9KjTrAdgks4oMxQgdezE4UsoCweZnHDTZwM68qpbEVbfH6kFEVUiAjzbMSwRCuohP",
  "key3": "3qeJDQThYeZxP77a69Ts6YVfrXkuKhKKtTjQ7PtJCppUMRJzadZGmV4awqTzvGc6SCZC3aBHPesx7DL3hMi2kWmF",
  "key4": "4fnnnbjpRPBiEmpdXKu6CwvfWRthBKfjPJNHdcmfFtN81xtvWXBhdjUrqs4ReVaSrMfFKmqozMJ4BxCKYKVxMnCq",
  "key5": "sNX3JGnYVLN65hLuG9Azek5T5krXMpuAcjmt4EA4SMaQ9MxeQDSkvLJY7EGrb8HQ4Hpmjdh1UTom5BwjdqULRqd",
  "key6": "5g4EkCSBqumaDw3vZZHf8FvPSkCsAAeEbvPkv5Tx9GjaS4jZRRf2AabxtSLWQn8QCsNWGhPkv2YMGgwbUx4nQVTU",
  "key7": "285KAiYxbn6Kw9C39v5W8AkJ9ptELJdM2mGAJKqHcj8Bm4gEjFRxBcPQLcfKBq3wxTpMBAHiiRepCpvTFdLXRxZS",
  "key8": "5qU5gWby572NrT5GpgtBKZuguVaJCUCGMf1NB8RMW32tZJ9fP8hTbi4Pphyb4ts8LByCrBPVsTi3ydVXDA7SP6Lr",
  "key9": "2kD6g4i4gMYVogRGZSQuFmWo6QQCcdFgK1PZKet3BYSAPoynAP8fuLWdzDVCEMfNvAyX2344nXhqwGDEwCJ2i2hw",
  "key10": "33kWemJT3TVxH3wYRbbPjN8ASS6puWQkyxsfGASMbDXqA2SQkfeQFGCuiBMmc9Xdww3y7GLyGRZyMDi6Kjrgt9Fn",
  "key11": "4aghobgQqoZMneaCRZCcLVsAXaNgyTmV2TbSXPfK7vcBVB5ttvsx37PGwcWdE495DMBMrfgpJa7m9qZQMuV7HR59",
  "key12": "4nj2D8kVkZbgVwJgV3cX63YPn6cHKUbH2EtMwdhyQY3xLHTZhBb1JMsGsjFLL6VSty9EbdCTQTLBv98bxMbpwQrQ",
  "key13": "4fCtgUXe5JXs2geecFk5EMRrLPJDUNa5N1pBm2FoWSFYj74nk6i6QENmy6uccz7xtnb6E6sKBKpgxv9GEznpq5QR",
  "key14": "3eN9BA5rMqRiwX5y8hE4ye2yMfSUnnvUvEGvwGeit5QVzoVqXxjEzGV5n1z9GR2Cqqf8XiY2MqQqm6f3oFgGpxSX",
  "key15": "3KuGa7wBfKQEAakJuGjvgvM8XFhfP6zDEiGv8m34uL2rKG3TpqKdimpZHMuh8MyWdG86B8nkMw9Tbf7disiR5gXV",
  "key16": "5JPiSrkeRutrjccXVkKEoV7CeBfDYkpPUuCR3LBUCdbXXJCQdkgciShYdWScTdCRgGDSwzDBrJeXiq4scKBXbJFu",
  "key17": "3sZp72SmU6cSbeiXrpfihfttnnHBo57B9H9LPbE9kgE6YudpN5fswUwP94vjthnQn8tu5GtWUm3pgSBDrEiQ6JE2",
  "key18": "43GxMMFyLkDAS2jUddSTe3yEWWc739egBktCApwLaoAq56rfHHKw1PpyYKKSsBvm8xZ2BeQA9QYhjXNuGH2kyMqC",
  "key19": "2D3ztZC7PhebD2RFfaryufwVvzRj8v6yJC31g7FERjhaEbWhFH2iHyNHyaLfSzXXzMy49B4ntXBFEkF3tJnPbfgg",
  "key20": "5ZDuhsxfgmkpQK4p6AZZ9C37jJEJcF6N3AUttQ5rN4YH3c84xsmeX3qqFmZEJrUcJyFPgezmTBppzhu2TH1t9jxW",
  "key21": "5csNthTJHVEM4sonqqfg2Zbp2CjPLjHjCEq8TuwgDjnA593EXwYjK6Sf7X3WdWYsCp2Yyc2ZC3DgQX4dHQZQoNrh",
  "key22": "3G7i6kGVgSpkT3DYUeH9i5mZSJPy2YYq5sTFqWkpJPZxTC8CUjfuqeeHfudp6h8pfZe613HSuW4SjyTPy6f7Tp2o",
  "key23": "2AXs4h852pTxXP5HCD44WrgDSnPnuAGNxXzoN92ySimKSLmK4kXyL8bK8V3npGANcWMXmb21ELJeseYAiimdiVFs",
  "key24": "3byhuCCsFnQX2bDKVzZ6rYDQamSJQUifTxW6aYyH3xuuL5CLnKqB5cJt9YWeEu7eTEjCZTsM5MEdqLdBBZzqDSWJ",
  "key25": "3PwJiyS25k9x6smCDmkYQziqweurQxY3gEy5FTdpVZ5jqyPfjYNqBTqdnnBCj47iqgh4KcCGbet4AHTvuXow3SNu",
  "key26": "5dR87c6pr5YMJ92oHFizqxPwVZgja6ZE6Sn58ANtzYcnpeNZhbBWa5bmwW1pDqpni89ZA74eLVXVL94x7Mebgz79",
  "key27": "4mcWpvBvbirJ1CGiKJf7uSPtFRVqfE2A8xRsUTLEEV6GsN8K6gcVwXaVKyne3haMdZFYc6Hx29zrtYhni3eK4NKm",
  "key28": "4B2fczAMwbiqL4FAJwXEyxmTTi61beKmrBSdzYVBKftu5wcDyZJCe3EchcUz1SEP8Swj4m5YAMNhLp9Aa1s2RvC6",
  "key29": "5fEZvDUoLweYZkTCzS89hzDUPG7d2pdU2xHpiXfMect1GaMaSiqeaeQVsjoR6aJS3g2NU2fi9KerZxkVPKh8nXuj",
  "key30": "xrnJmJv8oXZy3zLzCoypv2Kp591E87veZAokJ9EKaEVPjDPcjCLYfbgm9WFS2SVaRAkqiNXk4htRV2WLBeUKREw",
  "key31": "aazayMQixg2EpK4ciLif3afTfYvZKZMMqej1BijYquKtwhzGgMSNimb6MB2WKx85QgDSQDQsHE1mt5ReYPwt8SX",
  "key32": "4THinJdjnew9jufqD23rXjvy85HmfMcxCRWErAJAfxwuU3dVKafTR9z1cpDXufWtQ4Ma26EkvGXcEL5H1hdXTdef",
  "key33": "4VM4Cg7iRMziT5HmA5Py5wqpmqTyHzGK2mWRKWvsRPwoSKzj5j4KNv3gRUdnMcqopzyCCDHRh1Mom4j8Pa8LgeGV",
  "key34": "GDDvCuS6LPav8sJhiNyR5mbAwoGemWV8A6jhLYgXd9ixkWDabgvfjPp7TubFSkpZ3KkCnXeuAFeXvX1pzfydB9h",
  "key35": "3ZB98UTPxo6S4eKPdEWYXYR7CisV5SCgKcuiFBBoWrQki21xXMZpTq9MaR8onmPkHr8XiM1t33AKra8e2ecp6bgW",
  "key36": "3Gb8o6bn3orZBsxcoUapRo5UqdwsXWTsxdWQxBK6jMVsUB7gYnti8nELEXpL1PqM3kP98abPgKyb43tcCG49g4D6",
  "key37": "4iezosFAeWodb9nfZ1gByQXbSfeMKf7PjCR7VnwVM5rqBEbYh7mq66xTwPt2LJ8rHhfnzGGouvn7gRacA9YviMVK",
  "key38": "5kkWhPqmHri4RPRb9QyFQGskw5BqxkSjMymS4vcB4F7X7kyJt4w1QVFS7XJj2befHdHisSEvvFhpeJjmzkRZHc4k",
  "key39": "3uJuRdxitSC8hsNigzCGi1ynVQAfTvx3ZXpAqn834XFj55CmAmAVgkRVz7WW35bf1dVwU5jZqNQWvNJ1x5wRmmwF",
  "key40": "3FH7bbE1fyYqXf9G7vtYgZgvVuG4MM2L9HKMiUtoL8AS4jCzZ663KkDms5odfNfvGFYkafAJPtEAECRz6Usv2kCf",
  "key41": "4oyC4eFQ17t1BP3dfxR9NdkpG6og1XYuhHxSvZA1USkXFyxK7gWEVcXi5oA3FciBzt3UhL2ewqjmM51p2icapNjv",
  "key42": "5HppgLKYi7PyYu4yeCzMMHQyY5EbiV7MopKwWGgJz65Bxc3w7HcCtGS8W8UwwaH3Y5mALYipTnHcigFnpT265B6e",
  "key43": "4EVLUvxv2M3rt6y3j9Fp8UdyiGCmEbpESFrAg7bBE78eDJXgQBhxhfKbHhoDN3PuCcQHngaqkPqsVv11KNat6qPM"
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
