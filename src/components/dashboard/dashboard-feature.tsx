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
    "5myRd4ZNu4Qi6CMNfBt4hp8YkT6kF2CLvyLajUNL1YjHWH9uLp7n5DQm3v165yNTDuWwK3M6Ui1KoxCw8bgRc41u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuPB3QHxbCDQE83zC7KpkAiqoWdg43PGTmekzaArbtv3hzQ5wWzhNH98d2MqKoVpfdzwLBzxUHaerCwVtqHcT2E",
  "key1": "5bdBLdxkAKs1Bea1RMtGDS6VzbDhDBurtgKpvuzaA1RdZRNwf1bDHENRZ7UcP4wK5LR453fTz2nc4t99FBtZkC5G",
  "key2": "2yyesSysyxYGqJYNR45AiGYTFKzYDcZroKk31ZWEePmtLvTcei5MJt4QswzWGwxA5FsgqHKzxEiVETDSh31kB4t1",
  "key3": "4tMj5uwA6r5YDrhnr2a1LTRMh8gjYa71KjBqMsKtzyU8H7ktGGE9oUF2UNYWGLYvsEic2dR1T1EWQ2p3wHPCDWRf",
  "key4": "3i24SErjtAEA3nmaSXpPBJroTLYdkMUn9s9RwrbMXsJJXeLX676E6D8wEeRepDfuUD7bnUFNbsY8gCiQHVHV1aMQ",
  "key5": "5zkVLB7urkYBerUGSFZ2GSXMViwQpT6qhVhREgizjDCXjwPh5p9FHVyKPpZjpCK42sDhbDgH1PW5ohKKsK3FrBEV",
  "key6": "4fjyh9pHqZpSAFSPCmVBpvxyPMqzq6TPH86j9H629R15wQ4jV5stEoLVX4wjgUoyfh9nUfQyi8HS3Pnmfrfa5mH3",
  "key7": "3tLtaLbMDKiD1GtJFJyakHZ2tn4M6Yk1m3W1V1n8Gsa6aDsDRMjSfzZwGfXCkYATRQ3iSP9bKGS1HrZ8eM8jTa1a",
  "key8": "3DFf5egNMvDAZr5VABwizF9P5pSc6G6y4pWcZmxnQtXziQRjz86s4TJEVDmnkPhGRxEqsWQN7mFuKJKmqzbuB4ud",
  "key9": "3J8PBWvAXy5GKx61Th12L4LxWGYzTdeqP7ZEpXCmTAZPQpgiHQaVksGJnFAGt5qvmGNrx8wy57S2bwuBHjDw146v",
  "key10": "36QQcXZayk51DptkR7qBnMUNPDuaKhoZTdFx1bS4kR1VxjsxtyGD52YqvkWt1KNzHBfkcN832FfGUmPDN132rgn2",
  "key11": "2xGXUC4dhiaqJEP5fLQdMSK4C2dyEYmCtZLonyd9JzYc3HCekBeTroKZnCXDzNSP39exDdvqi2MJuBDABST3KdgP",
  "key12": "67VVxCSmq2LfyDMMzKC28mCFxW79NFJPo6yi5zP1Wda5MXitE17Hw7epZ9TVXFkLSQk8jRPYJ6v6gHBbYr8JdW3d",
  "key13": "34QEx8iYFrTKvxSEFjQmggaQMZv7UuC88xPGhvc1x2su3t6fabEppL89bdubUk4NqbkwtgxJ2aUh5ASZDRRB6Ens",
  "key14": "4kHNCmPkZ3o9UxVKAYGLBtMT1NmW84qmgqcAd3AK3D4ps4YdjLjABAVHJJcMVCYhb2ybwb1RQGjyb9eWwiLdWKFh",
  "key15": "HPPn8uZe5nChAaXkUNv46W88eXSdapUCws8kduETVwxmftNoxLhM2ZEKSWNg3rNusYMc9mx6y92otvd55G21iHB",
  "key16": "Sd2Gu1MAVavKfLtdEkRmPGy4RKgp1Dd39wSXGgocbMqb4SsTPhB7L5LRWtb232kLKGoci1N9fBrXZVCzHjBdmc3",
  "key17": "CXC6SGxtqTnfDNGm8xCRX6Nx8N5pwr5P8XaU32KteUWmZC4bfHo3UpRas2o9hyV3FcYUefcHRLzXjSL7fUkAGTQ",
  "key18": "37GoV4nfB6PApfmFwakCZggYHJXFLYff5yCSfeAnn3BzpTFotxbAMP2rCTFAgmffrx6ZMcKzGgnKMTk2zWxYvEK8",
  "key19": "3JwuFhGNfjSgZysX2RrJ7Hx55Gh2wSCSo2kCgYWRnFkyr84G5xxoBCfXNN9nVQ5bK4uUbQe3yEMzQmhvwjMgdk78",
  "key20": "4KypoTVJpYuDZ7CgrJgJJCfLrhib6Gz5yeJ1CSKdqiHGiQRdtXUZwXTcHYp1u8EsiuGaQ2VNpHPzMqKQPq39wUEv",
  "key21": "4ub6tTWTsreKqdoxt6RYWH62fGC3mA7Q2w8kw5riqE1YMUvfN7HczbysiMCxVrXJ6LEk6A6zUwuK3Vt2bDVv898f",
  "key22": "4vpCT4Ny1V7Kj4cQE1y75zm3AAYeLhxKxdZnLJLWuapTXeJzxTKdgwaXJdKELHBY3n9iMdAeu4JfsK2LcswhAnTf",
  "key23": "4ZB53q2cF6Taz1Wtdn943HgUinHzSK1VRGmTwxdbX675N3DxLBcUZB6h4vbvs1i3uv7SYQ1TVr1UUfHEznPtAduh",
  "key24": "5X5j56sH1GucBxH91vaDVCemaPf54o7nCP5eciudZK5FMgdRCpPTtjYJHHj6EjDvNosSWqQ6GFnkWJQjG7ar9DvU",
  "key25": "2dWTGFJNoXGezW5CvCMidXhYdh3bZe2cmYyK9syjxwHFZhsop6qHNVwiLWskeyzRSMXmGng62WHtwpK1iHECiRqd",
  "key26": "3sktJgTP7ch7SLVuuhWg5vV7xSQ4Ej38wsXonWhv1GoM1u19oaEotz9CrqA5KRzpMGLXv38PHPksP94icYfDTfMZ",
  "key27": "bmXX8W9YJR3fGsLVBVAtVawTMeej1cXwmdj7NyfLJ4H4nhbKmdTMghaC1ejr3jjZmDGJ4b9hmDB5jBfxS4M5RpC",
  "key28": "NsTdR8Bu3bF4VVGDsE2Lo5CFnaCfRHNqpkXmdRdMJAWwnBwvgebpZZ6crVDCHFaVYGNt7Puu24S7LshhMm8WUdp",
  "key29": "4qBzjqsQGZpYgUK56b5bM9R3Fit6frq2p7DN2HoWz4NEUcbumSotnTrS2LEohomV7Fj8TLgm6srZxTdkKD4BkfTX",
  "key30": "3RXHMKYd32Yyit6XggXjt1NSrUxK8UM8igVaHb8viqnm8fsvwHBYigsRU1AkkbX7MkuL7ECuSSFKaeBKRRu4g9iQ",
  "key31": "3ScFHD73j1ehs5n2FuhJf9xjsLo1btWJkEm7YPuiCzwKNs2z1UERq6H4UdzN5fYoZsEv5hZbVzUz8b57DK1CY4yR",
  "key32": "5WZbSYFq5nmBHMhZ89qkS5du4QkPpdC3ZabC6kH6EMfGRvuAQK4v5yEEkMpXUc931dXqvbc1163RSmagTtqcoqPn",
  "key33": "2iXEiw2wbZdEcBaoyXEjpRiVMxg8vNQxUKWP67iufej6QteGmUkh9RSW7QvcMAYTJc7gm1EggZ23Hc5ucnMZ9oWG",
  "key34": "5Q1q1KW1i2eMDXKG4Wfndn2o8PYa9UrEgR7Pu8A5h1K7bekGy4WnDCWaJVa74myCWD6n4cGtjVCpCTGuQ4X7YRDh",
  "key35": "4brHPPHCDQWejQ9sv4Yp6UG7w7fwca1TvSS5MXLve2K33NeeS2x1cmqaud4HDx8Q98Qo8iHt24wqMJtVwh1S1SmL"
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
