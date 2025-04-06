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
    "2j2FfMUCaRxycJssa4iLvXrwPSEUiDN6t8zUvMpWiqR5cEJeVXeEaNuf9FMrqHbbHyKiEJ1fmgAMhX7KdpBdrxPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sE1RVc3j94myth7TVweLnzqbpu1hcQjb4HpKPHPgwyrVHCah6pRURxxjTvfG17cRUtHqmNuz99EXaNbYsYmHRk9",
  "key1": "2sFL17SpVXJ7QvuBGNaR4ABE5GQRn5mhiGFuSKo2njQF6bYhsiRirzRV3qbtTsdr3R3bdLuw8hWBDA95ASfMsLqq",
  "key2": "2edjBJpBEZRbbUZsuL19T2GpDR81aYvNt7m3HDsSaeFYNAw6grZ4XytMtefmb3JGt4xiMCvG1P9v3ooNpCBSDBVd",
  "key3": "37y34RWeAyhkid82Tq2K4kDW7ihqBYnjBv3Hahwn1VDVTGTetVyTdb4jwB3bCPcptQeVSd2KtGMcv6VhUaVQsz9a",
  "key4": "5fFF5hhKZHikKSSUp3LD1gqtpEHiwFxNKoMCkaVuEHYRBWoFPpWAvRrJji2kxNBFyZ7REjZMZtpmDUVV1v4Bet3f",
  "key5": "5e82T8fKDU4Rc7qDZ2wihGu4jnmNQKLrPxCyW9QtXwKwk8D9Pxiuzv9HxxipfDqmzas1WLrjLDsNtSAKHzX9BtkC",
  "key6": "h4dEcXMjd1wwRuL8zrHVLMtE3kDV3fL1jYwrQcgvbfxqyz2sMGZpGyYZ1qtFymNyTVusqdt5EhEK7xCLUcSq7Vp",
  "key7": "21WxJvwt5u8zFGH1RRzrwy8rTDSx6NB81rAy4wcJLkjFo4dXHyqsQpejDs4LbsfRN3Hza2UQMXAcgqbLAwbNE14o",
  "key8": "bJBfZ51NpWbbJXTCCPp9NSV5LqJ3bNMw9XiALLv1eLvNviAL8pvZ1Dhf4feL41THq2iJhMoRrowdoKkhLSP1zme",
  "key9": "jb4rWAkfWRtBYaJMZxAXED8LYviyzqEQ8xyKbSewUUqiA1BAPT6a2L6s6Z9ZzzFhR4KGrBRUQzkZNYKzXuMBiV2",
  "key10": "y56he4AScsf9FEco6vi7pp9iUnK87nTBowprmaRsZZw6uRKkDcQ4WC36GBnMxwkU1wCn1RexaYiNYLgSzT5Cgfs",
  "key11": "42WEKwvKVeJruiVkpViehHptsWTNfbPqkKLLBV5uXjiLsvmVPZeZmUaxBJgEA4rjfdNKYiC5nQVsZVMbJoMjzfSE",
  "key12": "2jVo3x8qPv18okJyYJeMMdAwu8Kmh88BpL9pLrPw8AzVaeZiftrdCPvNoobUqnSZRu6JdDQ7UWhoLZYRWUVB6bq7",
  "key13": "5ydEt3qNMwukxE61GAzJoea7cy94UWkwJXHTRXFQeFquGeGKyQUwoVBUKNAoXFXrAewwG43C3DzmYXiLNUbGZUJC",
  "key14": "3NS4c1yQ7Mj5G4czPvLMVrCbDpSCthq1TK8NAn9snNKEgVWJKnc2gUTM7zeW5nVp8SZBVvGH9bmFbW4EyH1JZ7Nq",
  "key15": "29DXiSQ2ZkuCd9tpovmf8FrSQaMaYDZUsAJfvMQq3ruhpxdvumt81sDWGcpHYTBSYenpMEnFXmngbMFvQz9q2qRd",
  "key16": "2vtiocd71K4YtdEzsjehZ8kLatDh4FcTrsr4KfEyrafPxm8L4uDBQkTRLd3SgegFCNztKDiW3VKumVb8hjL68y1F",
  "key17": "5yNmbGKng7iPDEqmuwkHsRphfyDXTFPnSGUik6MgxW5b77P2utt8qfZfQX6UtXWtzqJpmm4Kgdzw6C5otjE9rSrm",
  "key18": "4Lbkqek2wsTdSHboxnTmdkh79a3BFqHGhCzSqBBryBrpzzxEsUcuBDXj2fCqYmx8ikadBiKAfhX7Y4nDjWnJzUC5",
  "key19": "2QatbCNjuoLzdNjH75ybA7aPqYY2ZAmaeb1czRRnBHf77J48vTB2iW3gwAgzthFjDNrif6bEd3pLj14DKVXVmdQE",
  "key20": "4yk4TaQAaJjTPRQG2PGEaX6aA4PVnHaWxP76c5Zf9UES7nEeBEWjAvF2tdFRxYJectHc8xH1bxUansFiTfmnFbuU",
  "key21": "5xCsMHKszYnNhHYbY2W1x2HYvfTj5rG6d2eLFYfxbqPVMFVm1fuuJfx5zsagRrjCHjV4ywoL1Smy6dQogTpNgNsw",
  "key22": "3JQ5dMLZ8tsjyjz1NyYgMHJKT7mpJsb4skEEpdM5FRZibKB7sUarUo3ceS2qi9f8YYD2Mc7pNCgAdZARfq76gupX",
  "key23": "36tLgZ9dgkrjtbgKn5R4kj9NYWRZrQVQAaCbsHhNWokPgaezSDnjFeyyTBrAvnfYhUEwgobJb5AXvRtVcWB5XpWN",
  "key24": "LqENmCRGaQSwfCbQe5xRHR8aH9Ewa7afE6ewt3JSa9MABqtpucF8hU3wK7Vzfd7ykaYmfpM15ryoHYRThYnQNyB",
  "key25": "2W4hWtE8SKH5aSW2VdSw3NpDUo69bvs2WkixpXnmkQoVn998bHspLu3SbLna16DgDbQxfwvSLBCMi4XE96dZBftN",
  "key26": "52jfmp9JxeLbjRnSQcuhoUzH85PFQN9tcpGfMUcAwhocrnygRUNbwQa6tSfBcSZcrmonUdwUXpQon8YkAS9wMb1i",
  "key27": "2PZf4C8cDTpq8sMxg7S75oTqUghqZwHvHN4tMuu6hY4VsTkYATz7ft18Edo5JF4x8wFUd4CX9X3MjuaWLwrokQLu",
  "key28": "5rjHrBpuNCh51DZfru8HDqKhmE4nvU81dB9NiLdxpTNF5EeQZ3DbFVRps3sFTbrDqE5UnCjvBBcmzsPCfadp4gtz",
  "key29": "NgTyzRTJwJwAeB1JRhgMf2b7DnGkji4Y8DkNMcwso4y9VcUVg35k789HZWHkfMgxBg7cnwJfMHFk3wn5kMyHiS5",
  "key30": "62zr1bFBa4LHtJR4opk7Jy4VeuQkkwXDr9EgsG5DBTpgF6MSnKJWaTtyt6JMmR9AM5LPeGdohGronPSUuqDiBeij",
  "key31": "5YnCU8AEGTfuH15k7PjeQSvMSgegKqewD94XXxigYQUpNzEaowVhvxjwSxWSamWQJrAV129PWY9mZ1JkMF2kbExQ",
  "key32": "aCNXjWzvD1SmoSUt4Una6Enh5ppCpVkjbkXWD18BcW4tBZJ9CkFLcZseLNWHKCcJpgmhvgfPvANeS4EGzir6aAA",
  "key33": "2PrWCvxALHx4QBw8k6fndV41NHQnnA6QsJhJ3vTbhwFmjzpxqn36QwVpozJcq436AxRuZiGkWds2GgtsofUFqtR5",
  "key34": "5pEUSRcdGgzKtxQGHajoim9q7Y6VbZcKBuSn7GLfMSWZrzJ61Dtarv3vzGATVgekdG8hN6C5Xj4vVFrKXfUcJh3i",
  "key35": "2Htk8QfW8MC5xd2zzHogf44VTtefUfNy81Z4CMU56LkAjizwcmzXEKVe4Bm5CdBHi9V9YELtG8zsK5MC3iV8vNj8"
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
