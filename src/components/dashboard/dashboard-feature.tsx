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
    "5Rkqoz7sWjiX9CGbQu6XiKBTTrjMqzmFvpqYEseUNBrgJxwewQdcrjFfqYyqtyku3hctfcn6MYGA2ALByC2gRZgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6mGnVSyN8KUfLopSo7kongvm4cgVVTieb5VvGV9LjurCdNst5wnTU3byvsXRgCX6EE82nZZiGUaP3mJGvgPLuu",
  "key1": "2pWR4M6Y6Rw5voLZq5dUDkeit9No6Wcbon3nAYncoNtj3Lyg8E3CSygFeNDfdPVCWX62dTApi6sqhzktX9hJicpi",
  "key2": "NaYe4oP46dyxdHfaeau1S3w2YUgZTJs2mnLFfLJS9h4RUVPyfQqBdPn5ezDkUv72aNmYgbVzmsrLKCk3P4chgQX",
  "key3": "EfrHkqiUzZP2LHioiw3bJjp9gGD7GG7hMrim7MhnPa2BkwpEycVnS79ae7JmCbxxgmdLXyX4q1oATaxqNLyJfem",
  "key4": "33de1Rh1ojNvR861xzZCCbBK73vy13ALJqFYT4caRAa4ALXpFLfBktUEEq7TB5CTAMVSFnBVBJxF5sbNc1xX3Tav",
  "key5": "4eLaddKQGEDtNTJpV66pQQZXKrBi2ZVYEzq7SMijLBWCgZJLD7zp2SpAGJHSXYHVfcS7DPrA4gyUmHNu28uWyVoP",
  "key6": "2UjA9yXnZRJ1DdVqxJvB59eMbDkKzuTirDmaWWZL1qULa3Cy9UvzEyANNhw7ZJAhNCko2Xf2VuYD3kfQseGxRa9B",
  "key7": "4kzgMKrCuyfkbqMnfQgTZFnPTaUyyjyS826j632fK4heU47aLUCKVc2x95cpSEXfbJjdEp8Pzhue35ApPKuygjH1",
  "key8": "2KKs5Dq8iXz3qJEEwSQm7FYyLV3mbGXyfsx4CdeJDjrDwah1RqYWL1MzYHbdZW7W1adMuYcA1vL8LucewYMVoYnn",
  "key9": "5bmfhqudoo8q61psWPty3X6qkwe9vRi2fKaoyPMhXhTF5yTYN5HosvhY1KWNJpfAJYQBksMFpUBCTcHevFFGPV18",
  "key10": "52npUEgaQkrTknTHTJg7kwKk1WFnnSQDV5QKgpwRtdCFqJGW8CiNBfBPBhZe6TDbGX38uAHV2Ma3ajaz1dSJqvcb",
  "key11": "2utttsLZ3ydhViBVjGCQXzKU42hYSeQ5eNihQTJTo1eLapnhzk8weQ7CCSgRCvYvJECNd7PsUJ5cr3iHBpbQjhZm",
  "key12": "2eDyTTz7SeLBddS1RXjF7RtULSRvMEzXHLy1dKabNh9bvMs9ayUAT8hrUSw6H7Rda3wvsQmcf2rz3J4VHzr5Ysj5",
  "key13": "5mh6Yo7DN6T6J93Tsr1WgefRq3eECg1eXRm3xodoz4NUDFZ7y2LqQQFLm8Zh1PxUNX1SbGRKdT4zediK8BNNKrsq",
  "key14": "57M31dtpNCFSWtd5c1qQqbVfKom9Ws85Abis4Pg81sqDPiW4EFoD6HDi6cHJUFqN3VsdXXWRXimLdrAxMPTfq73r",
  "key15": "DDvC63QjXqzwxZh1euhsQhn5WubxLcSh247KMV8moQCoA42mvCVmB7VVAPs6PLHBiVWauUj3UH7prxcbktByrzG",
  "key16": "28VhQWqDcgCkHT8VLZU6hv3WMQqBMe9ePh82oKwkZDY565wt3VVgzx5DQ4Y6TBnN8BGxtFPEtQncfzuJzBHaSnMQ",
  "key17": "56ZLCP81Nb8dEsfT6CuBmN3gcxbdAwW3c6KdGJLzZ8zmxhA5qtaJBYhYbjXMrnrbLqxXdboy1Rbu9wn2Qxe8PQHR",
  "key18": "RFEveLGhGAe3Yzpv4ZVXHiqjuPheSiz6hV4KPQBuxrfrmEssXL192YJfoNX2YxvuriQEx7GWgnBjVQV2P1mtGLG",
  "key19": "5C85gV45UxdhoC86eToGpDrNMoTP2uJKe887qZ6dXz5ePnNh16D3J86v3tuxZUcAm5ub1gZWcwsSYUuGAJXrRTzT",
  "key20": "2bVwwwsJFvaxTUkosVHkDgwzKY4etSwxM1GvMp3Tn4fYkYB34Ne9kan9yVzPtv3hudv1zrZAz8gj1vJ7xBosxzkK",
  "key21": "4nvd558Sk7rQ5q9ekEtbVc3KLncobYh5Tpgar1Ck8jdeDjLSZn81F64c736iG7zqTamgBMGWq1qjXPMJ5k9gsEaE",
  "key22": "3mEvTRKWyrHtQ2wsmVDLM3doGbN15HbkiEPxAgT2DYeP2PZmmc5iivie2Fec7GMohnEVXyh86eaKUuw8tEfgffL6",
  "key23": "2VbRAj7RG6TfWKR9ycsJrUdtDT5kFmp5ibSep9UJJ1S7HNvE3WgVaKpPCeQLJgivFimq9sEbxyqhqeNczM1E8ytb",
  "key24": "36wvY4vbBCz6ED3xivCxQNKEcAHkHc8EnXWNAY1Dt4ZTdHpEYKKaQh47X6bNM6ok1EdPL5mh19i9PtqiBoRKVhuu",
  "key25": "41gwGydqzY2qmSnk1c8Nx7VRngDEkJ9qe6geGCNNMB85qPhLj83m1CigicoMq992XdrXzkNoGNiKRpCBGkCXdSqN",
  "key26": "3PRHhMjBMyyF9CdNkxYiwGLw73pGr8LyGrNT6xKvEYaFAwma4r2TC9CgmWivMv9v1upyEfvLkhBabSr6JR1PMR8y",
  "key27": "2UR7drnt9PFUAxmvbZwwtS2XKqjvazxLBeVTCGtRKDQ9d9UbSZ88esqhdJLcnhq8X8MgUSv4okomcvLTrpwu9uPm",
  "key28": "4oKrgMrs3YQc9ysvzXqxrixLLAsVyrjFkpeY49PdMq6fesAUGtxVdfTeuo79NMtZqP5ccQiJhtT76Qte1ycyV2P5",
  "key29": "x5gCkdWf3gnBbBixrdHRuu2nKBvYofFTBVFsBsrBermLiRMrwjhCqq1NrfdAebhmfTTNaajSDR8QCkmanENrmtD",
  "key30": "3MqWGGf72KHWjQrdUYoZZxHqYGW1fj2wDUDRcK3Lppik6Tai1N1C8s1xs6jvx7rRnqw4GMKirhg1GNsNjGw4DJLa",
  "key31": "3BEZW1Y7KYaKPhKimWAeUf3wc5dHvMjn6ZPKcQ4aKjZoun8mVJrD9ZQwKvcWzGwKqqaZDU8Ri1fukTTv3Anyw4JC",
  "key32": "5sHocHVMiBXfWdqjsqAuUimopVS4AqWqNdMuKLX8KPZnP4m5kvHjHzgcr18ji1ikN3sWqnySYLtLa3fDQvh1ohiZ",
  "key33": "5P3ZcFTCUHMP2ZJujnLctAPLjWUQrRmg6GCm6qTKsjBzKWAWMRQUU7comXWiUWsqG8gkoZKQukwM8giWv67mBTTw",
  "key34": "4A2DFBrev1UvtXrPFtAJaiwnowtWxNhv4s4aEXret2DEFPfKUtQByidzUbHtFXezuMAB4c9DGXPqm7o8LQ4okyr2",
  "key35": "2jQnN5xZXLCrWyc3wkMNFUgE32AhNQVfFTsd4hymeqCjWuX1JY3LnfatbP8vP1qNjPreBF33sS4iEenvc8q8BJSf",
  "key36": "cD26sq4hEbgZjVLqT27i2coJdmQMJ8BxXBB5NfmnS7a3Mh7sTNm3uCaaiAiXA8gNDNWkPPuxE4iqihCmuwWJLH4",
  "key37": "5qZTbGsLiuLfPAwBFqw44asHWmbbcP82JgKFvSqe9qC7EsX8aYGfNpUSjpDnX7G6n9k3Cj4J8Aq1MfVUeVYaRqcb",
  "key38": "B5M2AYqXQj2nCxzawXDmdF1b7P8ZsbYDbRTsMGKWpaAj4QsyMQUS5nLmN5RfJePAS9NUvzHs9Wn6A9XXBjxmkXt",
  "key39": "2TM5EYSA61mhPNWCYe6x8v7VoSNjYTFmfxzwrcLEYzs4u4ADKcWEMBeFndKMgJJFxP7U5H4U1Anoeio9QjvdMaSh",
  "key40": "5Tzq891zKdpNKUXwGsYgDj61hEjBcJYKFvtVVvHBGNcGSUWJXsKbXB3kuR6RCZcLH9Z4s14zfQajeEHEqxkuAFmo",
  "key41": "3yyQPmWkfre2yXpU39ygkBRzhgZved1zDCbHSXvYuoAp1bQ7MCKJNWGm6U816ZmpNpyswjAzqFp8t2zrHzcT8aGf",
  "key42": "5EXeKbY7kRtDcLkV35Pja3u5ath37dMpWTr4BL1hASq4ahCKdW9vb7heWbJ73jT57WuMp8ymtK4rC79mRAoih8QK",
  "key43": "32jrgrGcMKDNurFoJLnt5ntZGRpwTP5QeejKEuABaexjgxMsMYX6iqcWEoXosE9rsePNTMHD2pyUBMZsXKxnWsfY",
  "key44": "3454zQTDxF2UPWh2vWn2gwv5HxLRAAKkzJMQ7WMgfM2PnD1BCDfNZ94xBQ8PbWnVzQtn8tdAwm2fEXxfkkgvxmdX",
  "key45": "25i7gcmsazaYuNHjATXefQEiEjB6BBts4u4go2uK9pTmRZz3y6xGcNpRDTVY45xpShLrtPtbYZEXqRthgeyqcAqo",
  "key46": "A4dxCaMPaWBYdb2NPQMBFeoNXiCYTdJzkfBoxUK7G2pXkz9SJGQghj3BMQJnwWLzxWf1jy7ALpMYByDduoPFwWx",
  "key47": "2oZTdXgurtqJ3ZohVzEhN4DR9hU8CTdUY82UjzHpxdjJVqGedkupfMiWkrTgLAcZ3NKek4Xy2sFz8EJMBrYL5eSL",
  "key48": "3hHTnN1H9PEyfFwzaaKuUeLSmt3WLL3TrWDvzWfrguu3CmmWkNswFK2XYJvzFFUcFGGbpskVvBKChBsPNrUFhQbd",
  "key49": "wbo82VqxK46hguovTQfbThHVbLz8pFNra3cpggNni6zXtYRfH9n2TcgX3GF32B3EcpjiMDEaL4ctKApwZdyoQnA"
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
