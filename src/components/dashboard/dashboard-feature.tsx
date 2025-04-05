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
    "3Nr2rY38gxgrermipqVUJEaKeDpHwRrht7rhbgaFBF4uime8ydvfoSEiAXNJjbdQtmt2zkrQKS9G2dbQ8xDQKpYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNyX3wk67eqZzgVRGAvk5w7UjxW6vydEiYrLHt52TQ5aq3kHSCtkrUZ3HezWa5qn9NLHEYPa8sTCNTUPcbvxcNE",
  "key1": "3rwGJH1vHUDDnmXbBekR28kGKfUkvpGfNj4bJzusxoekBACrRe3q2xJWUA2KRQoqcP1nC7STix4ufeyx4n5k1Gfh",
  "key2": "45wEsXhp2UL6Szs6nrRy5r9F4A5hNiGu7H9aA1aD8XGv4Dz4V4vUQYtNzVBPTxfV6NXtA9WLyWGR5a2mEF5srPMo",
  "key3": "5zHS21cNY2yhh3ZxCDmtn1Av5XytCkSsFhXTedkU34YAuiaESP2ZW5YP2Axt8tmFrUm46ZxWpMQPQ47dpoy7DvZA",
  "key4": "2gmQADYyrZTZ6tqAw3sRZQs8o9KBhaHBFSiDDfcFDf1sLawh1MKNbcPr2bxg17Wv9RzVreetB2WYrDsxwp1ZQjXb",
  "key5": "66P9XHAiVfCzHvnSfGLN4YQbKrxC1Bss3nmkMSdddtbMjURQpbZgWniw8v4jwmKQtTPEtcP4c1zXrnjeYkcTgiCX",
  "key6": "3JARR2Bvvutdbd2w6erYzFyEC3gLa2NKCWJ8WPNSVqqFDYLKZKCDbEWpWxU9Hs5GRK4qkkeAUMTJ4rzMWDQJpxoj",
  "key7": "2kdGDkwTdqgFyktDZDBUMsPLTCGBRPWQ86kHVmNEp6CcP6z5dm8o311XNmCnrNp4SEn9rmdg9oTrx2zRjfxaLWpw",
  "key8": "2YGswK36t3DuFe6sd8SVuFVDiJVmdhhK2G5PyaaCXfLBw8ZeEycDdzgkv83YD5CMyCfxbCCK95VLnYKFSPqhJJxt",
  "key9": "3zEnN88Ed7tNMNvSLQ1doLA5QHdbuBQpPfTuunLLLzLAyvEEqWhyKzULZMcfse4TaUNJKUZ4cFnoWLtiWezUxTpw",
  "key10": "4npx4x9L2EJ1YvYYXVuJeDDFZo5AThn81fu5et3DMPvoCPMxrUxow8i9prCmnY3oHx4wG6oub9mn115NuZ8rXXjz",
  "key11": "5wSQ7SDGGZBvDkALDJGboDUnLH7uNZJ1tNwwhHavmBmBGBddkB4hvXx8a5918wHwHg4oajPphoAA1YuAyxUvkFvK",
  "key12": "3QBrVfRW9TzPQJTN7Diuw6Qatkcuo49EbJHFQfupBvGdQ8dhhRVJsaaHDm2JMFRfSg74MGWfq2gLxzB16Hd7vysE",
  "key13": "4fdChSsAibiEGAMQJxzHvYmHu59cxfEQbE7yxujieYhUPUYEhkTvBncuEiozbd4KQZDTLqZ4eS4iiUJhtKw3RoiP",
  "key14": "5yvKJqDW6mrMU67F19Kbe5Fpxd98b8jY2qBDm8wJmvhzJqazSh63k3UEDtfjDpHZ1cyGRZvbv8hztYL4aQ3zS4Ys",
  "key15": "253MZhWKHWY6MyZFacdyAKr49ipTrWhE2SV4uHFzVjeL4WZqkT6nbucoEncMYg8CVXLoBSVZFxddAQTRqrzCMq6b",
  "key16": "iNi3kpzY4CgU2yUtKb4qbhVefpd9Rp7vTPePo6LyJHDx1MEB7EDpoBLGJpyjqUGwUz4UPPYf13WBW518eer3Jee",
  "key17": "4ziaXmVeyanvibkXdBJtPATc22uF1kjxupX23EPKc169p5YWtQZDwGm8nJQNVDd2hwYWDRAEBBujmVKKBqZjweQu",
  "key18": "97LJaAKiSET4QdAoArAbf4hkPvZHBptn9snYNEa1sskFh8kd2SftYAGM1ar4a3CbbNZRNDaSmDaP47AVGN5HAmY",
  "key19": "4tddXfArx8QXg3zp6JCa95c6aBNKeKwEB4Qpnp8cKW4tjyZ2Y3Tj62pDAaa9PCc5S8DhyadWnzM6wYZD115LY7Ce",
  "key20": "ymPFpdKrPVgysukCtrmnwApHXfDXvMuvGRmrM4iWXJ4pUHJPR43xQqJbQpzGmFVfrZhyMPRy1mk8LZUcQEw1YnN",
  "key21": "4gGMbinAYW6QSpxgCgs1D8E6UfN5Rhk7ZroF4YhfrAhu5C7U4pYRzTTNqzqCidERJoUcPUNcpQgLPWdodDh1LzfK",
  "key22": "2xN9UQ5L26sWEpt7jvUYwze3kqaz5mWRf71qawULYX8Puk5c7TPuEEbELtytuFGqCJtGXPXhokDPtmXVszPpUyg3",
  "key23": "5tpyShfFG8kCfEYoTnXQ49QGzZV3yUUHgAt1wxJkwUWkDkrB45ftAgcr83z9mTZLCX6mYmTVn2MBAqmKYqZrCQuD",
  "key24": "qnMqQGP7wpBp229F1WpGRcZMh6rHr6keoXB4ZELkcKQT17FD9KzG4VGfhdNnzzptdsDfDF8WQQEtz4FJXJCnhG1",
  "key25": "3BvEcnUf1ii696Hvwq49QYxX79CPQdT5fXWsUzMQaYRwVken5TtvCCVofF24uReG31jmcyWAo1cBkGhmetwTTdBk",
  "key26": "3okvipFMfRQpVmc9htxVfefJcL4nsYe7UWmFECb2TmfxgSKhCVYLh1jdvtJzptHeWb2mEzkuytuJBs1nYcoZf5ik",
  "key27": "5zx27Gh5TQ1V5BcTLgrDU3K28VZFssoaLXpSgesFxCiyUAPcWovNsc9ahV6pi5kRwzXNWQGRDVcT3dWnATzdJJhP",
  "key28": "2FjMdJJGKHzR4JZ56vsm98XSR7ata3n7QcPRkwTCWQQjJDkTytx9sJ43A8PDoVWBasJPJw5qD1qgczXtYz8242wd",
  "key29": "2P4EBmnQcys3oBMjXXWHVhkMDYPoSUGEFpwieDE3JrJmxhfe6imGEBStcjtPTYSRcL4ZTLHQd2P1WgASvkaart3P",
  "key30": "NJAxgJg7Q1BcW1RfiuBrBuokRZR5meEZccx7ipRjRRTb9E23ybd9Au3fG6ASZmDi6yt89r53yVHK33dNznA79mW",
  "key31": "2N8Uou7vk98aMHvCgSg84UsmQyN1xdwbsroiG4AAoduDRuBsc5fDiZaeNPfCuiftdaZ4D2fNmWQe2y5TFriDN5X7",
  "key32": "2fh71sdPbJa8XCVLzkNiXHPVVih5VcRXqfvCGxZpZBvdfmq6qfGybBpoy8c24xcXQrTh9weo2w2Eby5MpzgDzHXb",
  "key33": "7KhX9Yxaoeiqw5u8xvjtFVoMUGxXiUWJwTKYz51VL9PSe8F1iNvjkWNM6WKfEDudn8gLSek5xfx6Dd8tBqGMhYJ",
  "key34": "5herVL4LoaPR46b6F7dBPVKncHyQdaxmTikQnEFZsQHfZM3qaXS4xz4Z76kU3qod52cV9JuAn9KbRf5s9W1k8yqh",
  "key35": "3ktZBKSxoyQZicpPYrg3XVn8oLM3UBbCrVb2ce9cti8RLtbm9vYdGtoSTbBzDAefEq3vHZZRpobbxrcAS3yoMxVU",
  "key36": "uG4ysARppU1k8CY1vtFDHrpxwa5YbzTujdcbuLcPrAFZqzpSte4zTrPFZdudPRXtVREX4frtnwwLYNDhB7QP75w",
  "key37": "4QytmdqmnMLZuA9nxBpdszNkJDYWG48GnP8WbT1Ra8KcZC9CVg2qmuFK1zsVnyHkv1BRdRuzrjbz3mB3dys56ZXp",
  "key38": "3Gweg27HVzfpBnGQxnuZkWfG6craHoDzDJEPkUJtyTNQKe6bqJ7KRtY1FoihXrJhAq9D7iRU6kCYX7ydMZDwLSj1",
  "key39": "3p1QrDAcUPuhN3gW5oEmWExFRRBjAZTSnH32CZXU13Jt9oAAM8a6PzNvAU81D16keHCDTABxCxi2dpefF97wS9Jy",
  "key40": "3y2o9xbVTJXFur3rvxMi23r6Wxt68hJethV3uFetfjPCaEq1EFWSSjukXWZEaVpyk9yguQiGKJrFuJKxPVURCP7n",
  "key41": "4TEPVmWYXjJCbhoZJo2AZishTfWT8FSVvVAdDd5diqLNfGM6i9mfa39y2AKKwqFD9usDLT3cU5cQQec2SnqKRMT2",
  "key42": "3mVDkdMoF1naL4BsT5Y51nda1H3CxEugkfwk8Us4WEgeXQtkTsDct55pSPLQsMia5URrCCDRK3YvjDgUos9EKrBv",
  "key43": "2MG49z8wLnueTFYfTDLM17KRq8fJu3JadREeLyHSzG8xKjMwdEmJu42kboBfVht9KuehmFKG7Kdk2ztKPayyiHpa",
  "key44": "4zyf7ntPGHJ6xw1Lvw6J8xp2KcRYfWrvujFpYWtc8Fbd3E54J6L7g5wVAgoZLepAMpSy4GEcNF3x8ZWMrD2KkiZz",
  "key45": "48T8VUF5Psraav9atsY1EvxuMDobvnFHtmP5LAkGuZyWu7efT1wBLV4buQ1gX9UEQYasXcKNyY9nSeB2kVCirgFr",
  "key46": "XpW3ktDJqNRyhwH8b63ALgQghfjQK6fdkm7Q9mMZcLQinK3JPzhiBhUJ5PzUZAMVs93egPTiVesUYjAZkyHWsxB",
  "key47": "m1AECJPt7hKCnYivLKbsrr4wto2A2G5a88jm3zkJVissbShkpv3UDtUGtJbxN3oaAPxYLMzTPQf63Y96kkZzkPo",
  "key48": "5MWbceA2LpnFxvmHNU1xSA4KLGx5xGBtaE2JRpVKRAmN2DAm8Uo2sepsMCXaXTfToTn8gmqgFiZ8h14NYmXdZsGE",
  "key49": "5vDE5sSamTaG6K45T5PCYyW3JRBAa98ocuEmW2i4ahj11k8Hoe5qwobUKA6EcYBxAHk1do4RwFS2yyP3JsCpsvU5"
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
