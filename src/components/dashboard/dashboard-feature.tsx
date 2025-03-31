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
    "JMsiZEUgRiRXKyn4EYgbjJRT2D56RF5TFudB8T6PDhAajsd6MFuU58ZSKapkb2RVLo4zf6ZRKWgXxZByAhyQ5jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJnaftpbcQPpB6Ug38fDYnvqMjZBriqrN8jbMuhWAuiRe5mxz3cMXZjHbSKhGfNmrPUacoUofjRexaymd1y5KfM",
  "key1": "46tftfWvheuSHqL6E62yuWVLTxPogcCXLrb782cyJUYgW7DMTDNYFey14ViQQXZR4VsZkhShYdCMW1yjKxTk92v6",
  "key2": "3tneniLqsLiKmaR1ZmR6EwQ9VjdJCGnyey3GotJZQABcLak7YYLvTcTKiHd4EcfHackoPD8M4N8YZtHV9RhZMK6b",
  "key3": "545WaEa5wz5w3msqXWyAc1kS2iDcaXxCnm7QfbTRK3f3tn3jK8u76UaVgRpe6AU4HJnrpsGQhJFUYwHBWqmpKBZ1",
  "key4": "2BskaQ8uJettUVYZVzhTHYfvx2CajbjFEAE1CMQcn1L2vWTeUzqhVVvw7TaDNag5Wp3HL1c3WUCM74WCHiQPm2kR",
  "key5": "3Eybz2efVCF2ULhYD8juZFwkxLZf7N7ddxUahzCownGCPRLGEJ1pqgHKDvtV2vFG82T71ipoKuzwvyj9k3tm5HUt",
  "key6": "2a8v5sNxUW8mK2v8UJYfsNuyNCw8ugdcJvGFTCPsjae4T3g3JWx4iZ1WTvcmN9YLWPCZ4RBxNXxApPBAmQVE9XsP",
  "key7": "3wmnMZZ8PV6FUP2cTBSt8BRkVY3jjGav2DuDude4KGvcSUSX1arKdT6DopTvKYwA7q6RNiXnx2oS4KBQaDRs3ZLf",
  "key8": "4S6c3a8YRqhgjnUJKc5eLSyei2BqMoNZHCQ657kWAwEn3MLSriRM8XrQzVQ6uFipYgwHAdEV3d2yktorAcCCvZCG",
  "key9": "61UeXUVC3CvTAvDFVqYtw4ftuaLzoQo9qTpuVvR7pMFQdwxkGLm9uqWkP8SfzbL6iRLXwD14kLkqd2EAvokBNJtC",
  "key10": "nD4oqM3qHZUXbCSiMnvK4X6jGjD7aTUU2y7PWN3arB2m1GaB4uoTaMzAxc21DyXA4VHRARgMrrSg44fzcinFden",
  "key11": "5BaoBaczE6GKQWAYjxQxTpNc4DahV5TbDCc3nhswfNzdpaCrZbjYcHWpaa2QtQj8LWtJ8ZjcNb7mAgDWb1vb1MXp",
  "key12": "4rsK5BNKNDGuJxpv6pQL47GGHzQ877pyLAEWS19n9GngjVsWVjSqcF71MDPSse74wYfxVyoepovYiRwg9qhdMvnz",
  "key13": "dqwSuYQCYibhAqS2wm5gpjtt7p4pDYifqFvkMmncMKs3CKLHbSu4i1J8mzEKfvmAHe34JirdRmBBNxd4aqunsEB",
  "key14": "4tZcVHo6HAiqvuNuTUiZUNQupC3W9q4SrJZw7egBJWBDJt2e1KPEdPzsP8wCS3685eu6U3qTjbZsBVEqLLRAZGd2",
  "key15": "3ywPs6LpEmDJk4ENNxCJ96CMyr2xB2XxbeSPfjck1UnnNVQu4vNZVUc7B6WoXiF4Nz3ayj5YdUSGThkmRbUEC1dr",
  "key16": "2bK8g8mFBFfgj1DpaEu1GTsTuXt7hbQVq4TMYyhD4Z5WJyYVV7HnGtKjgPwH8imELL2ZDr859XwSVDhLsr6wBK9B",
  "key17": "FsR7esythDLzeWwc21XpQaoMJZuSvXqQRsho7jdeEsZD9yythgC4uk3NuhS5YTjLwTA3gV72ribqjt8DN3uFd8s",
  "key18": "5khcauWhfp3gscYJaRR6L6gnisS6imijRnYq2Y6B7vKzHxVU8Y3sTf5gMnXDbaKwum3Phih9gt3c2QBgMCMSKADb",
  "key19": "5FkBBcGfrJvYNA7iHBaXC3J6cWFWLbmi6L57T6N3b2VidLTtakxd5igNTNn8DRQtZ7rYoCS188frAJxzGZbTDm5M",
  "key20": "4jB38821ptQwgjVivaMm6mbfVQ4H8YCijZKyGDmyUbZviWxnvHsEx5vtUEf8vWCinvxekDJFuTPE4kM5h8TrAL8T",
  "key21": "4t5JTbYLCgpo39cHjuV3BeR8kX8jf4spvz8BpVGjUDyjdfsQ54tuxYXhcA8CDcertMTxfKzbwouLN82QoHBxa6cJ",
  "key22": "52wS7vqzy3fYYRKCgkvtvCmHMt5432AYD8YZFPuTDCPiaZmKREtQyTVqfcSFhbxBBMCsxNRr8BzMKQHozrTJwRsZ",
  "key23": "5rcAtxHDMQ1reZxGWRMz4avdYcohRjDahqDaoFWWp4idLDdPeJBPAm9U8LFJYtVZDH7Tggq8djBmxR5M5qh74VR5",
  "key24": "4noqdZ6Kazp5eaA5dsnyGMqXxJjwTWWKv2qoXsMWUugLiBL6nZY8AYrxXJEcmohDZmzA2g18goqPVqY3j8ZRBUpy",
  "key25": "4NJhBE2HgKG1X4V952Csg6F43CCzXhuqwu5MA4QJ8fPxBzUo7Muatouhy9nJ13j9by9TGgQZ9DR32mXZtxRz7obQ",
  "key26": "Gj95wAzCt1Lz1KkBTmtPuZo8TGbhhyzM4V7s9Si9Xb7oCjrakiffEMV7KxAyGeg5EzBD6M3smHtDFJLy5YcHXnn",
  "key27": "5ZLMqkDdxiwKTapEAi5yA8ZZwNceJ6dZmEnvFqWuF4yEw3EzedCmU4NRXNZr8tWiupAwmawXysEecGC7HT64yAaj",
  "key28": "3XJo9tf8UsDgrU1gGShKW6tDjqw2hFKpzcdoqNxUW3gTBkBQFtqi8ipKUZHpwqDUK4tamBzoS1oZeXbdiZ8e1gkn",
  "key29": "4YVTLKRKhtNavELKeWq55raWLttUdGZDCwjmHTmm3wK9MVJX6hCbZdWBciGr2MMCidCgkSeriScMu8DqrSGLTUxN",
  "key30": "3uJwyB6TUu4vXrqGVMqx32CXcfmN25fnHgdG95xmMSjZprBzfE5727JnWcH2tGMjNKrmyBpMNVTXuzM6NG9Ka3VK",
  "key31": "476JSFnXFSGLNganhictG8GxQDAjfcGo1Eu1WiWaYp2cnMo6wegQNqN39SsErKDy4MPKgeXpDpaGxiuA8qg86qL",
  "key32": "2XNbCjyQvbGoKuBtk3e2og4ztDucrPtv5iU7PxDu3cthWLcfiYZmL4hCwNyGrMyQJN5t2ztgtMMScr8BwLpcF8iM",
  "key33": "66w2jocpDUEVioWuATKJodNpDoWAYAHF19c36rBV2MdEWK9RiC6Fsk9Zq2gcCsaFzUjjCDhBgax5vWWb6aWStL9d",
  "key34": "5eVVFztUGHBy8sBRoMKzf3S4V1fKKwKrC8q3BHtyQ5D45iMCnUXPnhRczE5fxB9H3o8a6FmqYN8wuUfKsQkYcxjK",
  "key35": "5wnL94QQ65qG1xanuEJHoH3MbUD4JMMUiBAvsS1gSrVrWMjhqPK47bMvuUe83XJXeowMPQ6JZVd197j9qDjx3mxC",
  "key36": "4aAW8vmP2UZLcqJk2rkBgdQ8SMSKAyZ9Y6tGr3jWw4gT2rzKo49KVV5xyvJU1yi9frApHsYkPitTgB5Hv3DGSePP",
  "key37": "VLTcqFaM8TjMjkvoEDq5mWZ6mKV8kcT6jFqTDbWpTdsnpBod648kRzuLHby8aqWKoGQkGH9NpB5cx5L1mP7Qiap",
  "key38": "2GuXYsbeYXBSRPFX1GL588JtWfCFz8rLeAe2nkQDHFev6baJ4MTf5Q7mvSLgh2Es6C1b1VUm8VCirfUQB6d7ovjq",
  "key39": "3RHFqEytZWQ18GGZ2EU5ZgsPQZdJQqTMF2Sh2sogrTpS9pesNv9r4mt3GiPYJtkTLyLvQqJ5svQExAaviGPPwwsQ"
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
