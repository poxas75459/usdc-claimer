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
    "2VP9YSTFJe5K344qaimn2KxoGGEb4bHQGo4K9vUk7RbS1q7gicSQqhTYgJB1R6uSueVZfQ4ztS8UNSoF9KbDFEJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21cx8mm5tdUrnmauCE1GtACqkKPX2fHwBeeXedWrdjdhjdsWYeFyjuYAw5ot1effG7i5vg7iejzcgbvy41hmJCJR",
  "key1": "4eQNfn3a6noFpAwkJz6qDhRNKJqtrXaVA2k8MPyGTDB6k9dyhd39gHzwVwxbkaQVGgiFSjLoLBr9EYgC4Ls2zyVL",
  "key2": "dB1kQysEaFbbnpJwkW5YxSEf1x6Rr65zh6PFT4ahbPNeMZrj2LysAr7wMJ7mSM24CssZ2AQEFgX7nGzJCZqWiYc",
  "key3": "2pKhec6EfTdkarqWCu1XeXGS8H4hsUWvvYXnCNmo5EwiRcLhFp1gAbdJMPwNYn4Bd2tsU1kfpCgZVc4o2xWXHdsz",
  "key4": "5LGqAMnUSCbziSfS2dAwris4P4R3FdEpVxwVHJZBnC9fWVQDg4hNAnmsjdBw5GcMP9zhY8VsuogLkP7kheWyesBE",
  "key5": "5ZeUjqjzacAvBdQ1wAFev1S3Nagxn1Qi6mo4Fv2JDMYdFa3eQwfs6s99MnUNWMKVtbMk3WQAG8CmZbZumAAJstBV",
  "key6": "2EepP1QswSasnhgAKnYFqhragKrk73a1vgThgSYBHsoJfrLCBb11eARF3oic2htrBy6MU1NCRse6TVPzi8RGxrvV",
  "key7": "4T3AdjVMVc2fUKM9MaJN3VQvWkQjZNQWE1ZKo6He5Hvy8oxLYydHq65T9oBpJR8hNkvpP6NCPPx6rXHhZZ2YbSSS",
  "key8": "2PzyfevHvZN2A3mPJXGjhxpQu6voZquzv8VwMZ6LE78HCghEHGwbLit4Ftmtea8iyUocdKReVLyNqDhjFPkSTVja",
  "key9": "ohhG9TFBH11GyL4WF3hsAR5gB9Yn73rFpju6cZuisErcHDDm1oiLGQTTMCtwQ3RQcQqrVdHuFBQTGLp8iYvi2xY",
  "key10": "36SSftZiE8c9yXGo5Ts5LeyrXTiPDvahWWe2DpqM6kdC7i3RxPniPuuoHJE7GmDoP8Zo3YXko7ghPAeFTWwNLW3e",
  "key11": "5F8jVPAWZT9deM5Uu5tR5oXgBphsjTxqrBz8dBW5EcqfuZ5PMMNe4sGTSQzbtjMneoHtjEagA1r8DFdQvbSvTUZ9",
  "key12": "3wMspMeMuSaAMxwYnm2GAdLMqorodQ44rRZTFLRToTRQeMjmK9nn7LDRHbUXjmFnELi5cTrePtAXu1d4jwtnGftn",
  "key13": "5a74WA9WeyZdLp2Sm6mBxe2ZUD7mJPXw6qcKKD9GV4ND3GaHz1NZkQhAYhoAvdocUJUhP3eyqDRxdR3RPvbibzqc",
  "key14": "5wi67mL2Vnm6v6BdkFZNXGQw7ZqWhvhJ7cuc8pzj2NdjvBi444SYLqxr6KNP6Lp1HHASNLBP3kBBooCD7Vki8USq",
  "key15": "4smAx4MmZZJQRYd4kf1toyuuoBC83FiqVoee2CeE5P3eXToUukpzjANa2z2tMqj6QJDuhZVzPApKX4xjw3MNWPPH",
  "key16": "2HnjC4XeqtjTutsmUnXZHngnGatcrvsn6dwNHSLrP1ebR6BFLxm3rEZVDpnvhN4SqS5oE85fQ9AWDwXawgcoDPZd",
  "key17": "4i3vZxbMRdaPc1VZ1f3k4YWxS6kpaLCJKewiLk6ACz3QFpe2Nty4NczxutnmC4nwTBmjAB1VMWw6XZjfVCkx4DjG",
  "key18": "oDSmNTu9qxkNqxpCwdG6PDUersWy8wYYvK2G4KyuR6qXVg7B4KCskePQx6bMJcVKFFPVPtHxR1a1TQEyRaiWcQZ",
  "key19": "5eB2hbKy931VWp6UpMTyGSoWajnpfQr5fc61DsfbnvHkmBBrosS6N12mouqrJEMoB73vEkSr1eqmeTxjg6qXZCv",
  "key20": "4FLHU5joDdY8CtWnDntRadr31Necz6GYEC58C6QWXq3H6kHZY8nnBhDonakoXjW6F4tg6eY6gW6RqVrBX7SSz8Fz",
  "key21": "2zkUQgoqjRjbjZgzAgpEuShFsgudKHfiGcazuSTKmXNV7d6U6Qe7hzMPjDY6mAnswFy1b8SycWFnjrE3PG9LwVz4",
  "key22": "fPnjFYy7T5aHTpG6Dd1oppRKsrdNYhsuuVwe6cmydE9yxVze25grZvNKuMEcH2qEPFM5ARqG2rvWNQzrpbCheGD",
  "key23": "4Mgjs3FTg1szEA45mN6LxU9Fz4owmYvQjXLZJVY7ycY5FNsa2MoaJzFiHTwVUN9uKbcWYq2zv4Nbxa86eFHgREky",
  "key24": "51FPv5Zv3ZUdi7tXYTY93JnexGdLGqPeS3XmvPuJMA1wKz6hoxJzEfXnQ68RuRZuRvfHwppwpCdbY3w61qQ5GRTW",
  "key25": "5VRKyzqqgAuS7EAFVVHwARHZzugsQKNq6b8LVHp5xso6zHxQ3q7F44VqxDEiioxPFKt8NaQJPiDex9ZmVpTpGJvv",
  "key26": "NJNRCGiN4g1BJ8MiacBfjuysPUb8JADu7WJFnmxSWjcmxB3tMWfdfGJHrjQGdQ3SxNg8ApEfayEtzD9EdEr4sLR",
  "key27": "5bdonZMDSJay5jQLTgcWy6SmHj4g2FvXgwsMjvKjSYNqw24hvb1N6ybJX3HbXLJ6NLG8wQ5VYEfQbrFyjSEHzpJu",
  "key28": "2bkmNcELdSbAhxxjL4ofJpA6MWsK1J1pZBwfcbWueHepKijBCKuyDE7sBnUC1i5UtTGyf3tZBaHcznBHuspbTDR4",
  "key29": "V6hvtQEtBiudjy6Ux8Yj3e64cK17KenuBjRSEZ1dqSfpeaot5CThrATVYYiP4oi1ykFNGut6kmgbZ4QyAKT5nAP",
  "key30": "3hnWXZjX8D6yMSHEfkdtE3WjL2PSLtLgKtR3vXPdnxmBeZNWDPxu2csFBBYhef4i9NqEtB5zqV7ddtKaKuhedAUp",
  "key31": "3fGKCfmSDJd8SndRYMw7khf5xG4sLw9Yr9TLkh762EMpvoNAgmGRazKCQYfzXi9wnBZiwDvjLuhoszTVYziFd6t",
  "key32": "46d7ZtqVF2F6Bsy7wUCkzxDvtAzynjLrDzaeBDhKymFJojLSPadQTrLtEHa3Ri6xBnFLfESY7x9qhJ7BhfWqKmi7",
  "key33": "NJuzEJcrxAbJ5u2CgRzw26qgaatBzDLebLvSN5hhbvqQVF7WejEMmcoiXQf9PHxHTY8cCqX15M525nF6WJCEeH8",
  "key34": "28YYw41Gq4CEbanR8cepjcNWegNs9SasMZ8v9jUTYNfAv44pT5voXgs9mRSbr7HHYKCn9E2Lz2JuWnm5as78kAce",
  "key35": "YMoYKBnH4Q4b2zFjBqCZKvxFHWaEUXszKsoR9mgcJpk8URvAQdmh1iQ1AJfXzqRe8NrpkzD1dds5QRRWgAgeQXE",
  "key36": "a6TmmJn3TM8e684vncVzdRdxCzLfDexCUcUt2jh2pPih3zEMVUw1VtQPvNhqhYawbzepCEbBKBPqAaRkos1nuC8",
  "key37": "5LHcomxJ9kFQ84RFeoRLdFSwY6dJdgaNWEP3e8j1AzscrgUtZXsUpe7qBWYeAm86hc8Kvj52LH6KMqnvdQGr54gc",
  "key38": "5Wj6rDQZM7E3Rc9K4xwbck52W14YYinPtJTyuTmuEqXyNYCX5kFZJRLD1r63dYsHPNMm9QCsfGUXnhJm6jLEYH9",
  "key39": "4GsUwSReCh9KBCqAMiB7wKtziocpepuPb5u7Pya7h2TWPJGYG5kw9cn3xiWjsXrbmgtQM5aTjbSkweeQLZcMfsos",
  "key40": "5pFPba4UZZyUGqJE7jdNEXYiB349SGiaVBk5M1uTgbYuuAQcxb4jwCfunc4Rr4B35LtjRWFSnQ6LFrb2zyK3sz4L",
  "key41": "3qHQ3M2RcxJMm7iTdBWr7nB4QroHXuFzDrVnoKrfGBK9yze2h13JPd4wxBVhdegxZ5T5MZZUqvsg4VxoQBvSsf2C",
  "key42": "24QeyWwdDqGqqNogwkNqyNys1sKQjx1AGaq5gxGyMTTQJZaJht6zZsRryJwC6t7DQpPZKrkh4e6HkNVhmhPYbUc1",
  "key43": "qs18YLE2ZaE3fs1z7tNvbgA8tECeQzunhBb6aWBPbd9oPffAuc5Wp4YC45mAwSTYYjMJwirCCwpidDJ1cCo33ob",
  "key44": "NrU2rFrwHPwAfcBqBFbGzvjzvaAKL9nXqxeJcM8fsud4mRquVx4De5Z4AF1qWSMyve54TdekVcSvzKfwnrnztRw",
  "key45": "5cThBrKhUWiopaWdQR4nj9WTZbtqhbTJs4jtJdurHLPLuBtXhGE86TwsT3pcwekAHirxqNQWRDuwgw4XLPfzPBKn",
  "key46": "5R9mBCp3M4n5QyWYWZzGwh7fbkL9fkAkv7fHmPBQaH7mAtKiPvoLT3V8kVyk1ZWK6fW7SePcwtpdovmCLYwPUEYD",
  "key47": "5hTqRxokjf11VHmW1R3wanfGD7pDo38DUNcG595Ff4uEKGCzio6bX1vAAGP5qYqbtFnszA6Fnzmwbd6csgyyupx4",
  "key48": "42s4ryWHF2dzTtXkwxWivmTY1U6trEsDSKmh91g886TN2CNpDxsNytHHUu25sezvAvDudxuxL8gknb5pXNtVTaya",
  "key49": "2DCW3XK4jzhbj9ACYM7Q26XDCVxSPoJ583tnoCT5Ua86p79paJMfFt5MKiKX4sn4SvW7XVpcJixBzSrF2kcwHQyN"
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
