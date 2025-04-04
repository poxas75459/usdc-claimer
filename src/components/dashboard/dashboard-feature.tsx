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
    "2Ck2arHen6r3XD3BQGtPLZnq6yGdDoCN1YyFk2cvzg6kFJ4cVxjGFG3FBtRaziGSSecLMeZAFZxdCfsxe2ndWZME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pp8KFHeKbM4BTP479zV3B1YzzLtJfSNPV1WxrzjQSE1V2VtBYK9so9FdjstaTZ9t5jRHqeEzniJ1vYfe19U15ic",
  "key1": "2fFRiEzzLiz8UhUxpPZigEciA3iTVtgdXmMTeSBaVTaCbmzwVD7oRwUC6oX7JQ4vrzMQSCBY43E3d4LH4qquyVFV",
  "key2": "oTjhRwJemLSVSN1kDX9oT7z2wPcNFsDjEaybUSg9SnSNR3i4xsoPR6qgWwH17pZUns2K8RAs53cLTR1UN3JkNtW",
  "key3": "2msQNHeL8moNxUQDmc4fbL5dVJt6z5aVeNkx8dQhYKXdjSDgEX9X7MVnQvhMgs3waFko5tHUkwktohiYpDE7WPFu",
  "key4": "RZwrByZwNSCZSweJPXGL7obZpzu6WwyZ1KNpp62CrqiSTbGhavnXJa6zBW8XcCPNNBkuCd5vkP1TYD9J1jopsxS",
  "key5": "3TcyHks17WUm5915fw92JU7Aq8RNRfPKVTxj97AGZoAyEYFRaYqRo1tHziX6upSdQhJ3xb1vnZnZREBrxDkMULo5",
  "key6": "3Ya57eJJ5Ko4TbQca5RA2xSzLWXiXx9wzd1qjwJAg2Pj4AeTnwpMrKDGsqW6S27sfNZNNRetC9qVMztUnV7NyaJs",
  "key7": "5EWwrtj2hA9H7eX3qW8yCSMi8qbAXk8sbj7dWEEoaQHNH9CqbRoE8uVPneEepVR9fZaog7GPcZzPgBtjBvToFYkk",
  "key8": "qXBUKFfXLTiRFPbTLXmtyj2gpeh6NcrDwgTGzE8iuTYq8ixS5htYKCGiyppNdNtN1JN9Adx931jELejbZV7JSh4",
  "key9": "Ktvi6WonYQvskRakJ5tmvW3EaHQrMB6D8eNm5dDp2cSuiwnbivC5hrkhndyzvbZXV5H2KSb1EAxACzkWgesjre2",
  "key10": "3PVUWKDs1SJpVb6EJZRwn4AJYqCdzu5b1ZhMKzasaH5qkPnxZw1moowaWyP1xXVrzr33bwFmKhj9AjjDsXAdKTgJ",
  "key11": "3wvxaH4a9Cq4B8hFcr7HxxkgZEpsvqvPYNyshbDQPSCRNsqSd6TVX2eCXF33X4svLZicYcYfztdi2qktQyK6whFR",
  "key12": "522pxKh4T4xsuJEqNkC7yamC8ETAJe85AUdx9AQRQNfSwYy21gGjV4o6GA8jRN2bLznsgiSqrKr47ZBfX1V4fmbX",
  "key13": "66ZYr67qKUxMrRdv5DP51KpvR1G2zoLyPBp7KY2UfHzumVhHDeEcKRRYAiBkjzmBdvk19Wv4CHc4gBtBmP2VFKQN",
  "key14": "3LQBPe2P7Rb2iJogUAAGY42bSJnYWfXe82Td1JnV6kvtFjVhbmtgcink5n4JHdJRDQgZNAVSkUQg81RfBokE7ptY",
  "key15": "2VnD3NHXRbcBdk7PyDm8ELzQxzhrVa3MaqUzgT2PfZYgndCZX5p2Zym5gwkFexF2JYGCbTeyY2VpzfC7mUmHJZtx",
  "key16": "4H1M2iuBgH21gtdxCkmZYSFYMykhzTXJiGihqCgSo4RSLMq3fMeBgSMGyu3eMuvK7PZ6jVJJVrv2ZMCQj4ufZY1j",
  "key17": "568uwaRE49SQPB3UBcny48croQ8fa1FGREgNbdWRpsa8nUgzSyR9fHVExkq7anFRVU1KqNMLB4QPWGTzM5E7PBQL",
  "key18": "2zHJYyTHGZaR9HenXrJU9TJh7SgLwXjikZ4Upt36y818gsqvHsuXjdNmgJddiHXS7fWrAmAwdZxWPyeyAeVoMqsH",
  "key19": "4g4aJkueeLg3fsQxXS2moKU4hor82zXGRBLq7jgy2zmLWvzwpueEWqhM3fyecLvJKxZVHTeMgJyYvUSprK5CZZiR",
  "key20": "3yrF3MSCF4cafLT2PJUicSUsmuG5jyNPHb3jEvj8bjMhQZXunENswm2svemonMP52kiN5in4oxjExobHHMuz3z8o",
  "key21": "kPY88eBDfzCbHRTRjVykDUijoFr6nQ9e5dEzEnST3q3WXyXyD9coNSsYnxR6eYmqPjwxdMvzKBbMAPT3SvA7r7M",
  "key22": "3fyJpqdyh7ZGrEbpbuNG4pkYVarkGLKX1cTNmWgavXjGs3HjoZZFfKgV3YN8nTyMBWHiLAByfFvQhAuiUcok6yAf",
  "key23": "vtXqCKUxmZj6wc6Ze9TwvxgUhgNBWVdoJWoCwPBnVoLSaBho5MLKrBQn1T9mbTedDQ8W5ptgjEVnUwEy4ms3sfQ",
  "key24": "3WkB1k2LnTaPevaUW6AXPFAw5METTq9McnYUa46ZyaBRDmeUzYvatgywd5gBqKdGsD4uNLxUEzaayRQ2WXkkvjCZ",
  "key25": "58zHbKYeXHCHS6kQWJWT5DNnTyFzwsaUBqtA8tvMZ9GG6fP2VEWo4fN4TEcejtC9KSn2ZJFeWQoiDHUdsqyivvRV",
  "key26": "2jfX52XPyM21UvTsBT9m7e6uvJPGJZuEYZGK83KP3WPWmKu9h7Fo2DdHg7EcL5d6xhBHUTe4pq8Ugd9um7aXyZ8g",
  "key27": "5QXN98r5LP2RPJSn9Ht49Rduote1xaXG8irVhsqCQF5uTgtKeXFJosFwudpjtqsWjfxd6Bd3cK31g2FN9FkND1kv",
  "key28": "4YfncoD1J9NuPRhcqqCGck1m6z3Xob1NqpNSkepDbhoqNxCeZiUVW6QEEeGwhuUGBAMQzBjYZwCoVBq8obzUmXPb",
  "key29": "7gjCVkFmpKu4WTaemFghnziuimY21HREGcuTm6TUHKHXsMoRxjwMh2GgNzTveybNMqQQFi6kU7karyFMf9E2dKj",
  "key30": "4syucYUqjo2e9ZHnggMKkuQq6DEetfBFW9rkyoBxR3VDdNLjd3AF9XhEEmjk7Msc8ADXpEf39EJUiHAHdz3HCacC",
  "key31": "4hbDJzjc5am9zb95E2WP5aHfT2XmeQvDnYjFgETLpD8uh7Gfg1H8tPYaoGLXHgrMxLUKGX16BLCZvss3Gmoe9VvH",
  "key32": "3c4FFuEbXXQtWFgiNaeKGL4pcQAh5onY655AcfUf5ZbBpig6syksD86WDrZuzMvqkMFMzyZYmg9FczhuyWgq8ocW",
  "key33": "2sGYo5t7koe4ECJF9J3VsFdHuryFYLXded25LLr4Cb8bgwfKXUaKH1T3fqpSuYvzqaJUyZSWhddMyFCTgwNiMtdu",
  "key34": "5EuhyLNMzm9TPwryckwGGPfuRvyB9Mdw11NEmafUkSP5BrvjgpzR6imyjAnERAfVVvxyS27qVinzMvccGNDqRxsq",
  "key35": "3VSWDnT6As66ETFXC8W63qfCxCkkc93c5uFvkyUMDYLuiba5PXyj3ad1a8ZYoYCJMZpPHFW2grQ2wGT9Gdy2xLrC",
  "key36": "3DPxaTmT7qRSbS36NAnE6s8AUsS6UB3zw5tp8racRX7KK716dhcwLWU2GZTEdgK44AuH5ivmnAUHNHJfGYTq4XgK",
  "key37": "gPT7kCgHcajiotGr1KmCpFpRXDNKxrVeExxC3tURjAhC15VLnvj4E3YWYsrxzQ5XYrozV7qSpjT8NKWcj1AKHRp",
  "key38": "o3fomYcScGP1p4mx3Mk5uWfF7cQJQj9Pg8WsAxiKjYaNDH1KrGdYiBSPb5aqs2Xh2KjheJWEoqrSQiKmAM4Zdof",
  "key39": "3eGCCcCaMJBKGfoQ5x77hoToaHNaAg7HpCtV1GkXsiGh5kXWahsfLtYPQhPhY6f4RMFAsJKds5hvE7LRdHxR6C8o",
  "key40": "2sefrRdvjVfqaa1zwhfjjumTHmEN5LcGivRH72jg6paGc1KJkFMPsPqMQLQTMBETGgf7vRBL365xcxfjeUo7UCaq",
  "key41": "4NgJmtpknY7v3dbSXhAAVkYdx8zY7uyQVYGv1jTvU35iLVYW8g1svFahY3rpVmYhZiGiz5QyBq4NK5AJv6Mbq5yC",
  "key42": "4d95K5oJ3mEjtJcpwJuvXCmp5NNbqX4maQrnYpFegJARxnypxgZTcBxaEWBk8JV3TBqAk7ULjjjNkjCvPWV1s1J7",
  "key43": "5RWh4vqXwG6sc3dmYec2q9WzrXnwWHp7WHRU53uD6aeFoEVysw1PQifeu74qvHokgNysm58uuVd6gsLq5iukurYs",
  "key44": "2XvDVzhuaYu1y5WZgsRjES7JoRsFwwm5ZJ8hmehBK3WBWb4HCCc5A3LmDKd6Ad2Qajf5E48YHMFdgUiXRvq5xmXZ",
  "key45": "5xmG81w55eFqsqXkLZoazCdU95xf1M851YqKj1tCymH4cNpKq3TKqJFvyVBvF9vDPoxLPqG8RDzHpqacTMMYKUeb",
  "key46": "2fSCxZPzxPyRwZDzYPDP1ABhgLGMkpAvSmKHjPoZMfSBCduZ4vqpG5tc99kf1pRKMWf5jYPAGScfCz85phy6euF1"
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
