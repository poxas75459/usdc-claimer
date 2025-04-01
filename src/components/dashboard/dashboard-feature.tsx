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
    "3zqhemUW7NS2ECGfAJyuKVa53QPiUDP8NgzahDndsP7x8jbL9NZPbQcCB3Kdab5pnD9B9P33Q1JHzNh3LAuZDpvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcNahaYygG9twZ8PwdcKP4meh4UUBG6hQeaB82heunZYfjdbLXiWhRD4KAfRf4xv3JxpeXhNvnMJbzKYgimButa",
  "key1": "3cnNCvYxupyyoYEogWri8e45qA5S5eEojvV7zgky52KEaTxNuSmK3yeE4eD3jxa6yucTq7zZUnv8xrubDrTREdg8",
  "key2": "4MoKwnKRHKKs2dZvv85gNxnezZj9DzEii13hgzpNL4e6EssdwdFpfub3izoNhaJtufwc6Hhzg3rd1Ye9PBa5zCJx",
  "key3": "9tosRYcGdjFx5G8JArp4q46o1c1EjL18Gi4s4Rs2aZ3m5byuq5GDmTMf63ZSfM4V2M1D4omAsLsF3NxZhfQhfai",
  "key4": "4ZyMPWxN5K3JXVQ1HqE441QuBzSJAjUvzRJVwk8PuiE93VhFGAirXtKL7uqdYfigff7rJakAYiShH5dgWq3AicPm",
  "key5": "5sJMXZPcuyEUBC3Z4w7bfrcRUWoBt3FCtb6mg9aL26xQLxxqtkSryH2CGEghUeqRjc9mejQArMGELww4krWeXGae",
  "key6": "21HT4n6xGhzMZGxJmeWbTxg4qafuTxGfgSqhQLmffbC1BiRbFTUdZYW8smqXCCsi89yD9UnPXeWY6mVDBLjZMEBp",
  "key7": "4YD1DDXvaVXzvKzgcHjSPgvKNJoshWqfZsmD2RmmchvvjVmiu6A9Dpf3rLGfGYAHY6CR3SYnFtBFAywSQh71ynZA",
  "key8": "4b7fzZyC2FfFWNRj96fgZgymw1AqcS63B2sJUc98zWafFPuUSzfuurWJF7afLkmWskoGwRXRtv2A3Aes2ewXX4iv",
  "key9": "5TNTVVumMntV3nvN4smyhJma3c84qnEVZU4bu6rBN7VjLG7bFabZP3aXD3M2h4ZxyqGkV7Yc6hR9sKCp7GZKZN8o",
  "key10": "sexB9ZUyYTye3qkR9jJrZAQVKWwHfnmADqCD4V6nm58ivV3nVs16QUZV8mAtxUxQe5kvoaGWVurQfdfVREdQkRF",
  "key11": "4ZxqPeTyzoorBaSNpsMKcCdUNX8b26LgpmQCQdertidjGkLd3i6SfDAfoMiMQ41xSeTHsSFGmuF9eBfuMoQNoqFG",
  "key12": "9D3BmACxndpeDdK7ouZ8bFWRGo2d7TvjQ9ijtVvQvbrSWkD5m4SmsQNNRwd7bemcrBi3ZfdhCoPgS7ZykBuyug6",
  "key13": "5TQAy9h1t5PNY994yFL5ZyFsM74HLcf6eJG6WsbBhKzLD5BCqYZY6VSy15AfXoCCQ5H4zayi61pQ9CpoLBApwrcx",
  "key14": "5tH2FU72M4eu2D4iRbQNWiFvmTYDkJKWdJPGq5yAyXdqg5K4ACfykZzdpLzmFL4uhPPPPjZAo4BVGn49Nrr4pDRS",
  "key15": "63dMHh3VWi37SsQyfJ72nCmL7B2Sohykst3b4TzEWcu84kJyakvuybJnq7j2GstWGY5MXPjRYoZzB36E6KcjKNz9",
  "key16": "5UPEFHUGLXACNoCmrcJjvD8MLkHC5JbGrwnZMzJ8CLGh3s6S9i9Vo8oc2HKBVaRSBGY2Z5hvv8nUF64LUxKJgRPM",
  "key17": "AYqFbiUEgNNfURDDsCVSzgLtrvni9ew7w8QQC9qjWsnmV9ffgUAH36P16QoE91zRYEtfycBB1edyH3gUJWgYtZj",
  "key18": "4vM4c1UcHwjJtChZSzPipanmbfUbPpk5wGGdr2aLzFYexWBWDibNq2xq7H44pziW9VqNyVtBR3scfQ8mGo7gNMXr",
  "key19": "48zC2yaeEeoF5tLxNhLQhGdjT75HrS6U68VMkkVtsbi1B9ZV8KXpVp22aCdnAFAQUQ5S6enTvQWwSkXyErvgcEcY",
  "key20": "4t8MYyvw4PruQLecfXwMaxGZbwhruoNdWdFfs56mCXs1CryZU3EjbbUrLHxvVR9gK3urFmmZ8e3GBq31LxDbvQi9",
  "key21": "F3n29R9LYDdUp9NpJKYQzXzmiwRCjRQx7oonMuJhPGrfsLoFegkAyKHFoirP4Vzzy9tEVjk7NvaXfBCkV3Rv8gM",
  "key22": "3VhR7PQ8rigr6w842zKkK4AX3p1NCLAiUZyMqoxLPqLvXo96suwuwYKVG2vhvRbe8UXwyYUc163uMivS3dMxWHHp",
  "key23": "T6inEVMpuJpm2pQMnGC4LPyTXNiza5A6rRDQYPjRM5WTqCCtMN7xBngWpXehyQRyuRAtWA9oT3AVEsK1wXz5LSx",
  "key24": "2WDKgerwE8qfo2XVq2pCpthMzKhof6m8baa7JyCw6qr49pDnB9BPehGT9wYWJ3g4wfi31x9QAAzqA5GipGYGeit3",
  "key25": "3tvUWDxtYzqqmMnaQTaZebR8TfG7MG49t7XAegHgtsLcdJXHabftK3J2CMhmMVZB9LaS9aPDNTzETniCGFEjYkdq",
  "key26": "2qyCePZQrNqqTNGFy3R87iF2LEeJPo9a9U9emgj7yPiHSaDjdrtrBDJWrSj56oSsEKB5T1jQS9f5Dov18PYamYbi",
  "key27": "4FTJR2NaMWGo5NYf5FmdRgJjsHsmbDx3339CweGC5ERzgeaPvEgv3ghdc6HYKRGWU1dBVJy1TQBVvZE4LCtkAvX9",
  "key28": "5DhzZefKCuQXb7N6QTX1Mo97S4GXpYYv52oformTvGHLfYa369AZ3jqVkGs7sX5nDQf5VYTutEDr1v1UiBKagfhK",
  "key29": "3d9phZvXBgqQoWukzdub4ZfjnpaZBcguZLdWk1E3UUAYsA5ExamU2bmrd6Du1h5Hpoyxq84rKtQDWLxTKAYFKGFL",
  "key30": "3Ey8QF7UHHejc37q89D8vnYnTUpr2QUyZkL4xQPr215yut8mSpPVgQJEGUv3nx6gKKy4C4MaK8Sc8sBvU6wMM8ks",
  "key31": "3ff6bKPmHrp3639Tqh6p1QiQQPYjHAe5fdst4vpcF8LQcdWJofjyLT1fCrGTshXXktpR3VJH8EQAK45jLHYB4CWy",
  "key32": "3nnDm9dZcDcKPxQeLu4bJZ6ZRzgThjbksFpaxcw5JNz4vbop8SJN2QoAPR2Cb4ErGSqDkfb4b8THVkr2FPRDjC3c",
  "key33": "5RDipv3thhj3ZEHFMTKGkmUNfrKsmse8g5A5AtCvbdZ5FpBg7BDWwUsp3oTJxUb5C1u5bcPQN6YcwcZp4MAjEgr2",
  "key34": "3poKqWomgikKLTCk6xEaYoszCzNWatUq1Ges34HtqafGPiuxRamaKr9ByYo8kQvJnAody1ChjhuASGKu3PQt4PRL",
  "key35": "5MBDmxdFvYc4kZLARm2Nj2eut9sPoEEBL45Z2sn41MZFBxXFz1CJME6vouQz62cRS1Wqf5HeXQAxznDVaUy1ZTce",
  "key36": "2yRndA9xRk33UkGeNAJRtFP5CjJBFVJkyR43hzHt52HDaTxCpA3Jk726pfKEzRrGM6f2RNwR1KsZAJdZRtMFHz6d",
  "key37": "3sEr2LxAVj42FKhphXs4GfcBQaLPuQtdKgT962xTCcVDxhTyTrb7XdKkEgUuE2EpMB5ueDjhcGkWsSFMxX1DNbLy",
  "key38": "58YLY31msF3xe4DXCNvd6p4cQ5NanSCKQzMhfxprobmWvdaHjzoBEw6vLduKnSitg5GxtRLgMAnQwpVAuBLEjBsP",
  "key39": "3Jpx4CHL8CpYrGBn2RYnnPHEYXDCWpMw2C4BQbp8BCv4UyASnKF3avbxh5dArLkwqowoquYzJSR7stymmXF6ESwp",
  "key40": "3LdNrfi2U5SARQ6MqfFBLQwuFLce5iLKYdmX6uc6XpdJbxqXqvTHw2tNeY39jDFKuPSJi1yGV7u2TS4F5NsHwFiy",
  "key41": "R23WcqDH7j2ZTmtEcGyXEcFZGp357FuHjsfyzTaFHsnWVcJUPZzNxSfDnbfVmWtXijyA1WcaNwytTXtqD2ivfN7",
  "key42": "ejKDXZkiksRUXnnH7jXGJJbywzQrA1c5B9bPjQnUgkDWAjk5BDT37TSHStY2cwS9WzmdJBkiYsJRwsPxc11qq5Q",
  "key43": "2P63jroW6UWeV2uho5t1mYvjjKQFhb2WEKiV6Kp6hhDuAuiSGbeAcUNmxRbkUAhE2QXQwpDcGUMBmrANK1iJLwQy"
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
