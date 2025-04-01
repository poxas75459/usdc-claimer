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
    "2Ut1hEUUviDSgj4EUcpfNe57aN3ANvzrWB6Sx2x8ppCx8NYRTHoPA1za5oqwgKea56PJGggruqKdrnZwZcLDDmEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Khh9Uh7js7NknH3pbHUd4r2Nb7FCMzXmzJpgnCPczuwDkpQ8DpDXFBw6QmkoYBQSAzAxAfbH6QgoRDhGkfofjkN",
  "key1": "R5enKGDfZvunx1zfYZCgvCTR1QGEgMirdM6zL3pYg1HSAfmEeKXv59VFn62axYkntqsPVbAonFvR9Rj4TVvocDt",
  "key2": "YFLieuAzvswhiLLnWScTAETGmrEMvkrZaduoGqcLc4u56exgfyKEM85t9x4EzLeHEmqswXUdkDc4xnd4oujfcp3",
  "key3": "57MPh65yh8SH7YeB64o1FN9i5Vqxn8aKy19zkgyjqnsCxXCe7GPnWAYUZ74uz7ccqjEkGJoh4MggJLmu5GY4nkVv",
  "key4": "3MxQiDfCaARmtP2WFN6Cug9nSKqUJqyUEkjxUXPUeMuEbLLma51p5QS2J5LswxRkcojMd9ngNZ224p3DoaCr2o48",
  "key5": "2DibYZwpWf69Dbg7qQNB2VjTsbS44oC3KJi1mWpjDwBNb4ggxjJWdFHwpecPsMdXGYTZGXK3jmyWV3GSfCpLxNe7",
  "key6": "5Dvp92LEoxrUxF9JdFpbShcCXCr2xPsuaaEgoL3M7KeDus3sNhRQFi8rm82q7Es3uvw4D3VMX9LS4J676KPw76uJ",
  "key7": "4vpB3bPgESPDPBYegDResm513izFyQ4seXYFgeZp1VEzWEdAeic3MW1aXAeQsPaQMW9SXjDoSAKHsewB3dxhy4Yz",
  "key8": "2Vn56LdLmYEgPgNXAV2vB4LKb7gf14fA6Df9yry3w9u4xN8MKZENxLSn1RvaRKxQwMVQD6LYpSsMKfNroCXT8WvG",
  "key9": "5AMnvvM5Y8Ntz9P9L5DvHJPw6NJDtNLmaDN83vEMwzugPCDsFdVspDaE6gnCydmvwKYRbwjTEFWrTHp2eGuQjjgg",
  "key10": "2F4FHWZXoCusz2NPAd9NV3jmNmePD2mSsxzTHmNSj5uEzAEtx8WAwDW9muTFSsrkCMbU5hBr8d16531yE9dwxuum",
  "key11": "oPufE2Ts5rLTiNmH8bRp6dXXGFebn2jBkBuarpmANxV2WYd1agyDnoz9pMaiMvkBzK3yTpdyq3UEC7uMb6HuUmM",
  "key12": "5hCDDYyycfviRjZtDdrfaRMoYtssNpEefCPtwBEefwTCZzhnoJgqqiDGthUPxkxtymU3mpmwD7MSfWo9CPxRnGAv",
  "key13": "4KwXYXh1eykkGnmxNkmzJRw585UasKnEcfkQt5GLZQqVZojZkZqtgQUsbntMo5MCTEPUNJzKaEYwAotKEEEeqSZG",
  "key14": "n2ACkAg3EHgfJgwBuTr6hGZkhDYhjJPKaNcxFFvQcDPPsaH9M1N12i6YboBMLgr445toSG3QhxHSmcTGBEq7vTW",
  "key15": "rzBBLUq7FFgfcmuWoTZeuF3ZUHfo74wiYtfbQmFsuvEpciq3CsqeU9NkDrF6pq9SuXWCY9Fk6cvHznaE2AJNyEQ",
  "key16": "3pP18Apq3gC3q3zb3xxGuCRasVnBjpuRnoApGzyMSonM48aSA9CApC3TbVR6TrQun6dMdDMVV1kaFZXJav2QtUpH",
  "key17": "XDtBanaRhLr8RqRMSAWSJ9TtPp99BEAPfJBNNFsFR2LcqQJFtKXrDKkz5T2e9kodcaQUiQgaVZ1RAJ139ZQkjFL",
  "key18": "4nBTsxJg8KJSvmfdoFuTmFZcmZE8iE3cTyEmf6t8RZFeygjz6EQv1wMEKXDxjturcS11usF8zH2Nc2oS3B9kCwa9",
  "key19": "3wf7BAmzcvZp3MKafomdNJEtNXWafAu2aAphra1yHcJKPvE7Nf6szVndV9HXpv5ZAufXQfunSVwsCRhV9CKNdJy1",
  "key20": "4AZevZNd1L6fgbKQpHVrL1iwEQERRHoL3iXJP9xcxgt5oDGajzrfHQ3edfAe2SuioYKsVt5QQ2FN9xvqW2S4ndEy",
  "key21": "4fY313v6pUU3WrDBu1J7j7SicTJ35kfgvdEvDE7DnRSDuFppWDHJYLoRFB6ax1NJh8o7x3n56TdvYUFUUQZ8QhBF",
  "key22": "vWHatJxZtPDuRPdHBydg6wYTZmpxcMcZmYLmQ3B5TeuKSFJXo2Yos46rmcen2quy94rFYRcDqus3fLuqHnVFzNv",
  "key23": "5ksZPRjzHbYfVobVtCiYuCS3MZirqTRKwSkVrNpG1q3oTzzR8TgS37RSA1mnKKSX9vrnhFh2pDaHFdYGrNwryxKu",
  "key24": "VDBtRpXKpECfUFW31fH2RWhEhVFLUCtpFSLbeGeRemvRxFvnEcTrfwMyt8NrFRkVCFYEzYRqHPjvXuB76DAuqq9",
  "key25": "2ZDXWTSTzFRiBmkAan2e4dfwKdaYekL3HX3HgamokvNYr96TgEfztx6Yay5iXnqFs2SELPB5vdFbeM2idzFzUiT7",
  "key26": "4U7vdCiLS5T6dDscEhe8hd7hQVHaN29a7bnXrCLqmbXqTBVBvjqRR8RvSo7rdJ5W7CVYb25Zvvt3BR6fHYuuoEWg",
  "key27": "5b5XrTEEc1KEY7EAMbdG7SRCGd2w3cPY311P4UzzPAycm9kpzRBZhfXj3NS9Ex8fAS76esoef6N7F3y5Kx5y6qiC",
  "key28": "2w412mA7WhXgNmrfmTVvBijx1Ktw5q81KYsqBwej7NUvhdX2YD25Z6WzN84yhrvcry4ZFLVxphvc3udXhYeiPnDr",
  "key29": "3KCyotm2Q6kZdhpwpKAuJxZTyL42Sit7rCGmyGnbmh7Km3jBSsWVT5cemPf4TsdeQG5sXQaFaUV8KSFdSiTZSV1g",
  "key30": "4TFShJQPXXMN3ujCQbcBiroXoVyxmT69GnNtavoRCoKD9pQ5F5BcomBwek6Fv4KqXWkFarvQnTWp77FoabxdoMcr",
  "key31": "5cgzdPyoNE3ErUHKiAUtcKXdKEzL1UvmNNL3W71UHqz5KTNUwhadnPK6A7Y7j1QZBQKGYfVc91wu3ALtwDWCMHEx",
  "key32": "CqJ8wntx1UzsLgwEy6MKonq1poEXmFX2LMg5em5XiXuEnkLz6FG8z2AQQ5nvq3UJxx13PtA9GZrQzuZEnUn4viR",
  "key33": "4S4E4us46xQDPYRZ7Mp8y7h8G5gmV5kKbJiQfhJSQKH5jXZz4au8x8c3QzCAGt7EqC44EgXRoNp737AushwcadTk",
  "key34": "5DNEjCM2Bzvfsz1ALRgqLousNbks24tPUV7a8UfCyvQ1BqhEcU9CnePxzT2yv8Aost8sSrmMoasndzBUWMRAMzm1",
  "key35": "62BTYBicBUTg4AA2jb1zozCCsf1zfVLR37uPKAKmJBmZT3jf58p9tdr4Bqfcgsqu5meq1qc7MgKWZg3fu2N1Tsj9",
  "key36": "2tmfVoFsnsytVyYeP3aHuWqkuwFKN3dmfaULELD4BSZLfuAYWiKzKLMat8yq62rsLJdvTbS8eG65hhF7AFwwDUnz",
  "key37": "4zvaHHKNeKiAooT9B5dcsmsn9p1mHLapLnK8NzpvkhQPgVkx1hYQe9Np1Mj1A4M3pJqoBnRbTJ12MvDP314dK1Cy",
  "key38": "33XJsQ42nsLeM58PoLkqEZoYqichKAP3XsgrzBmaf9zibbhtyjyhkEgVfErFGGMWj5rm85bmA6KyYbLMCn12pTZ1",
  "key39": "2VkccqM9Lj8ZQcAfrGJUcoczLfyxJSJCMXE34LnXhz2dTApQNcpasfzTupxNVHJL9LStY4i93MeEGpni4H2ExrLx",
  "key40": "4C1xtkwZoLocFUmx12axDSnUELWYczBkwPYeBUpTgTNRUVAiQK1P7RuFzBW94AbHfe7ycMM2D7eeaErho1wCQnEt",
  "key41": "54ooiNQsfvhgVd2dMRg81uzdM7rgKk4bgSYUFLhXUTGPR4vaVq1B8zUyS5Mbut4nC3EQLCuHVNTSnroTwk4oytWu",
  "key42": "55f738W4uyTuk47oBYcchzaYyEGrFybcegYhtLsWQWN9gXf4FmN9CwFHqm4Yo7c5nHWvLwGNVyWNkX4RucjZJ21",
  "key43": "5bKezx9xdyzUHwuh5YtFqHgDxmANfMkuWe5gjPgwcQo6BCYvvGNfa8iE7ySwUPY2SiY7JiQc2YizJjoKxVPiHjUq",
  "key44": "hWxnvd1PDb2xDpCBVQSHadmdTxNtgQXQF9Ne8rbLVG3DRaYRewaUV8gEG7okFPxjGkbkVBov9VFeVA8o4GUNyEV",
  "key45": "2U59rNdtA3d4MNtAHtxgqgXRQAqFBzF8xzctxFv3qzR8zSutHEwPwqrZGTrr8Zxc5BBrV7sUfrWDawYaYKxxYkqL",
  "key46": "5ATbFwcWEy5Aj9bYw4XtsUY3prQ8A4YHgEUcqKsLFdHubjd8vARjqVmEsv1KjfR1R38v8KSD6jNzggn7X2UvxU8Z",
  "key47": "4YCTiKmviJWSLNc6jqRdkqQTLzfoTNmUGLVSKwEixnAaG7J3Yw88t1yfHZA87kAJPvAgPKDQpuwU1oJoG1uh4uQV"
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
