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
    "64JpXhn9rDX3NzFHWTXVFU3nQ9ZjEEzqssB9sZKXoyJoWC2jty2vpwgmdNpUvux6JWKDn22eYL8HZUdYb8jF8LYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKiPMvsZ4CirWbeFSP5DavkLoPuMsSm7514etJ3ZF1AgYgimnfMRiHNrpDoCMRoRj5yAknPEC8K3rU8CMUHNJdv",
  "key1": "vn6k1qkAaynQfrHu4ntYD9HsbcfNsm9sBC6dtD3PTxVBCJA8P8rZKywDkCEkGyHhpmgYeNYhWyTNXe6vmKwJL1E",
  "key2": "2zJa1oVUBeG6RaccM51ub4gu5QUyUkfye86KjQBbQcCTVDKvAZm24geqe4E4vrS5nvHPHPyd3GbRrXqoC7Eun6Wf",
  "key3": "61KGYUhG8ANABirEwUKc6DvcxiwYozxT56sLLUKB8NU65ZxQ57f3dPW7dW8rB2j348YLqyv9zpHjtwyR7jpc752c",
  "key4": "3RHLbS5kk6n6bFtacJBrWT71RnYFTX5ks1VnhLVNeJzZH92i1C5cyarthszEcPt2G51d5b3xp2AWH74YwuR3bWfD",
  "key5": "2vj9o44pCLM3WXfmDTC74tSBtCGPApqeV6vFkXpH8peCTFAmLc2nmqBV3aBL2L2WPRZmSXJpuGv8tw2QjdrHGFob",
  "key6": "2CfTbA5ctsHhHqKPrkRMxJv8GDNXwDY4wBqT6FC5QUodCHiubmwy6FDNR1kNKCR7sVs8Zg4uYboc6e6SkoLAopjz",
  "key7": "5eZzjxqnoTKagKLCV2LD2Gd2eSi6yZgXjks4SVP9xW3ji84XizWsduaaWhrdwSWPfYCshP8hdihyp1rAP4gZDoBK",
  "key8": "5Pt7GFoFb3YJZW8atKHCPYQaEhz3VyeXTCebiSTUT8S2ZGQxXCSJPWLWQwNHPgW6g82Mnu7cd3moGswoc36QZx2E",
  "key9": "UH5VzbTQpgQVBnAYQDamqte43X32QM4LakeV4Vxh2TB6UQ1ZAaZc1kcz6eeeo7iT9hG9vUz9qJ9QYNL4JLDzLJq",
  "key10": "CRHpfcJMDqmQLDRNfdQ3W17cCqrPwSB98NxnxqdSKb9G3Lnb1eyWf5qp15qN9R2n5bJMPAQfwb4hR6suGLrxCsJ",
  "key11": "2xV6KMLbfT7Jpq6U2mkC4ifwCzZHaTnxHB3832hkGdCgDidG5LMzW3DuByM5fAUym28uxgFniLoyQi2hsmNiCDDW",
  "key12": "4sEcKB9vnY5oKQG18v77gNTCzMkjND3PAACFGQte8tUbvHzkeAcd4iDLvDiR9sWaxsWTBgTjqg6QY8Vakk4VMQxK",
  "key13": "G4ftRZ5Fz8jMtfjYcVMzmfyzxR3syNE1LSpfYwtbpXWUNTpUimuv8LCyacwcfsubWgYC6p17MqQVVBz4ZRoRhpY",
  "key14": "3cEACycnPKGTEP45dTZnZ2pzAS6u3VToEqCXZXzUVaTg5Tm9pNHQcgRQnJEkN45wpBS6QPzkxEWkHkK4oKJf8iAJ",
  "key15": "2fgX3nySNRiRTNAc5Pn3YtCz7y1ZBzWrpeFuHooXkb1AkX9xUxp4413hQefNuPLbSm64nNBDM4FmAjry8Y64WQkE",
  "key16": "4yrYKHR8giSYcaQZPYr8S1cNFF2Y9xbC1kCUkDeJVVhGhMkyNnhDQj8V837edAxHqoNnWnt3NmfRt1cfNNWo5NBM",
  "key17": "7MUWe4CJYfPE2k3qgtjbXTcZgc9BguA4fzcKrNtusQzQrJ9u9Vv1a9YFywTJjYBayvrieThY2uerPqy22TkEiEY",
  "key18": "qzHHscp5tUaa8jbXY9FFej4X53tuY5n8bftu6dHFGcpRBEbHLTSMdUyxxRaeNeCzZuV7sn6xNK3AW3dTTxeiAtY",
  "key19": "4NnvUQBm4onfDjTM6cCbbRcr9iTXws3RNbQrbYimDi9SC8QwG7LhnNBBLxGubmBXJMu3cmQx4MqMSSsiJDvGnEqw",
  "key20": "57UAzCDkVzTF6fWq9DLMbnrQcwouK9X6kF3HtTT68EKd5jUzxWdUrJVFXD9qQKtozDDRV8rKCUPcSTZmQgpTucGB",
  "key21": "CsKTjoLqrm4Pdc6x7SttxUsgYoXTnkWj3qdujjMjnVDHgmqb1ips1VuHWdjA1H1VL6AfFGFVhjzhD2yfNWVfrQT",
  "key22": "336pnyUXszaJPUHqaMtcwEfd95cTT78YPHcgTiz5wNypWQEzNTjk7kqfFS1Mjkzm7e2AyRaVnogYJK7iVDdfcthe",
  "key23": "2Ln72RVr5mKBKG5jF72hQCFJobucVMHwqyyMTsBvUGME6H8QrMHGkwC2aroSuAiwSifiGDd1eDV481dNn78NZfGb",
  "key24": "2zGSjHg4t9G4Rn1CNCq9eV2oxKiZyLUBsm1VciJwSXe4ghUqfamweBKywiPif9fN3CwFEsM79qGDhFPKYU9yUspL",
  "key25": "3B9KfBysmp2NcA31K9MUPahvCZp2EXoubjvNxQnFKTAtjFLzG8c1kuSoqAJFMUsCuyRfgNUAxc9oo5VScoK7nAZW",
  "key26": "iRCnitZx2QCnWHnXeqaq7kYGWZdgCo4knLyR1Z67w81BzVp7fRb87wbpQWW7txJWMSvj7WvNgpW2jkSA8wRS7TG",
  "key27": "Rfg86DtwA3W5cPPC9oiVgMGLFKWapf85fv3wsH6HQ1tUqXpwqnQS43v4oJdH5tcE2WANZDUamRW1SEwTdUpUdwe",
  "key28": "ySZqd7SspvQHXrsCrq9BN2MV8Ra4gHqwQfjSPLXntGeUSX6D8QVZBZmC6o7Rget6Rb1mCLbFXxhZNcvAsqy2nxT",
  "key29": "2sMmZE1jgeWshAK3u6g47KFtAKdwncahzjk4MGKHq7eUTwf6hWvcavbK6M8vxcFReYgZGBbYByQxpTpEH3syKSEU",
  "key30": "2Nb2EE2Qd5npqEs6sLjUV6ZU39bcydCArucHP3ee5EFF1FP7qng3Wwmg5MndKeeoC8hedSRtFzkBrHt2TsZM6XGY",
  "key31": "2V3FxHMXoAuTSAfk1wHMhXyi62sGEEiYmYMmmkZPpdiJtTw2vNVoW4f6PDDDdYdt1NhhgsDTx8bYMQbRbxW8ChoQ",
  "key32": "2VvxTkYbj8BPyvuoDoMpUie5V6BM6mp9FjNVBwPncVevBP6SoV5hshM1zDoTva75BcmTvxc6E7SW1QRLG63YRT67",
  "key33": "34Fvm6LJNXDtpsAJv5HDDLwcDqQDmyfmWfJFpujeDawBES9FP2LSj7pS82uD858jpqNq3haB5x3Pm7USWEoLG8Nb",
  "key34": "2TRbVy5MjrGGDGsAgb8uLw63i1qmAaWmcUnty4Eh8ZZFEs9itqZ4VLQD5czXHV7f6Rq2C6jtbbV9zPwiWpYT2uk4",
  "key35": "4Amkn49i717mF13EK9vcUSGPKbKKCSQDFXfHb9tMGxQi3vQpzpkY7ipkeTgGbf2XLQL4cR2zMLCsa6zUssYuHZb5",
  "key36": "a5G4JFjQV1tCPvY5rfD1iPpX1dzAUAJ1kEMbLWqm8Kxg5Q6am9LvTHuzoJtZCnwX9yvrXdD2xALyHwkx2Ekj6Ue",
  "key37": "2P4BJpimbaHR4oxXVnj24JexvTDiv78Avfff8jvyXvt1WbeMmPbcu9iWPbVopjJXwy1CMaPtLZS2wPUUHtzXzgop",
  "key38": "h6ohWkZJXUD9t96KWt9qotDFikq4kDwxx3ymodRYb7coPNqmeYcaubgKsy5DQekATmZLN4kDGixbE7nhauxDmw7"
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
