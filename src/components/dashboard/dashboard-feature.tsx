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
    "4FUt37c6nWTKTGQVZ9eXeDxQLoZ6XdN2DEYkcoG4e9L9MSu4iN6KoCm9uVrVd9UgDPLQjbFCCHg3jTgQqpwBQMTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644LjpV3JLocXrxGy13ZneMg2YktdZHZTAWeztPyU6fWQjdPczVVnHHnYjef676Zy6sFZTJpXhD4ECq9nhR1c1xE",
  "key1": "2qtby8FBedqCThbCLbFG7thMmLfNW3944VpkCCLdVsPzeHJ4m5AXnMr11xGUoR4hzcmnYhbYsWtzCddBAEnQJPX9",
  "key2": "2ZeJw4rGdktAcx2meSDVqweMr6AJr1uRBhKinmmj843b3gcVaRV71uMsCt6JqLhrtxv8MyhtqRgjxgSnE1sCGY9K",
  "key3": "VFsq26fdewGvS9LRaVhnGJr3c7yYzocPFFosqEonqGRc8G2jN1kCiJyxp3Szvp2AR1uBNxiNr2yzJHhYK49epmB",
  "key4": "3k993sPr2mXCHuxGEALQWRqW8rDNGv4bg76LBZaGYy7mntDcfCvKkUTcV3bHGrhhbxajkNkqJSuNk936HkeBQuWw",
  "key5": "Uq1rH9i5m4DMN4NQcZPtcCTUnpY749ED4Q8CdJpHonQwYtGpNz3jqgxLS6L15eyvFXW2jC8VtspjU7zupMmLtJg",
  "key6": "3y5CuN9GGqoiMCvJdUVMzZktT2f1WLqkczL19UBR1SBfDh5Zb3GE2HoUoYTUcpbipKFTUcfMyFRnnj6ZSzYe1GUu",
  "key7": "4NnXeZeFrMkLTK2y3CiUqLuEvnqs37ZjsGgLQYVkqpAv1fJPtRUMELaAbmCY8uSuHg8gsj77Vu99gtLrKcuuKudg",
  "key8": "2FtUBkzfeMUAYZEk4PuKPNqD7EBCHN6ztVaygpTuJ4JC3ziYz3Hzaz3CBkwA8kPzgh5Aa119ErmnTCzFY1sxP1Ky",
  "key9": "3xCKSuvAR5W9J2Guw4EPV42hc7LAmAd79JQjFPahsp35MZA3joLZMUwk6X5gCEbrckKMcPgKuwTMNbdRLUoTchsF",
  "key10": "3Gk1FtkiB4T64hhb2mkdkyYAwPvvW1sbpWkirroASSNghH3gJtazBfJk7neyczotNMok8vk1gvLs2mH1JkFye1o1",
  "key11": "5vXkM8PrSKRXfotSsKdZyzVVkKsMJgggw1jSB3ieJKsibAAWH9DTDndNFWTfB9d6pNEtAgx1fpo28i4JpvjRCU2S",
  "key12": "5ZDAVA2NKmwM18JgoYuHAkNabRvv3eQmStCJytjnkGWaomvzJM8HMwaRbQ43yqLiqyq7s4ua3ujoJ5inbCEtFpwx",
  "key13": "2encWNhropmaoxrLWGyonxqJDMiGj9mb8N9xTkPnf7eimPgGMskesxnvavJ419Sar5K2iPHNrxuoTtTh93iynrWt",
  "key14": "2hAoqHguTxoF95HsHw8sphARiRbAHmq5QrG4crUZL49NpSbg2M1hpcUjwZDUAEvsdRmxcJurUz9DheWQeczYsqW6",
  "key15": "3wLKz7ikhSV58bqwDuUFZHX2ZKPGyjbD7YtwZw3upyCDFeoU6vvzUtjnfgzywkn5FsaMG9KvLh5LShPhh2GXrR8n",
  "key16": "45rsjaLEVRykekR2SbifAipV1FXvXduQzSmCFtH7x2z4DgDPwDDU12rN7ttMxejHCDqN6ngc69pYtuH7nHRbzEM6",
  "key17": "2YazgeN8sdPnsgsSwFLAwvYL7rzX9Hw1bpCb2JTiDFXUxLheoj3AjdS3Zy92cCaXG3z8HKwEZBxEifw9MJsyTSoE",
  "key18": "5cULMa68mkB211V9SqLD3S6DanA8tNnnwLirHi8oiE9LEzhC1xSvB8fxxV1RDc9SKATF2iS4w9oxvWnjtDGHz55b",
  "key19": "4Z4v6UvaUJgKqdJT7odvEBtHT4h2tEkdo35PnW8NnkGY56oUpwU9QmTmVMy6R13629xXPt1wwY9qf18Ynev4x3Vd",
  "key20": "4FTzkDS9a5Uonj2CU3Uq2Bw1sRsWxscXNpfQATc2HjXCXnrVHvL9GySYKVrvbZu6iLPUbETf42WRj3JXCUuGc6sU",
  "key21": "5ETEJ6mJCAcfP1L7EWtGSKdVax1yEymtAt1KJJgdXkTDAnMgTJvkBfcPGUpvK3upB2dnbAC7X2XaV9AzxKAyoPNo",
  "key22": "54yzTrXFN7n4LMm12AvAMwmZmG8NkTNmBwoS2uMZ51tptRysVk7EteC9D1Gc6FGKXXZKogHxrGGx9wKSEKgUf18s",
  "key23": "2TnvnX2SMU7TGoLVsHevThwZQQbDdCTdBnwAD7huTQRMhngysg9goY51cMoSYFyrcV7xzKHiYTP5VuTsm7S9DCoQ",
  "key24": "5kmieymQcJMqQtH2C1KZNizBNf96qC8zEdoo3yrGWP4XcKJrfuGxatS6LAzdnycGLmoXXHdJ8PrX3asa5gQ5aXiB",
  "key25": "4KZvyxtueBELzSYBLomhZjbRP23AWDs3oivPzte8HPsPQpm7nEvBUUUfhGLRDUhw9UGXjdFe9rtasi1YMFDaYj6F",
  "key26": "aTbhfqmFQRFjbi7cLG1SpjrvQ4WDBu8QmySPxCe5G8uFjKWVqW7DtZzK5oCFdAMXPR426tZAHHp3smTjpybNv6s",
  "key27": "5cLqivBbNtdeB6FM1ctstC1Ys6puyVuic8dagS8w5CxkpdoGgj1NHj1X7RXLjDyhikBLD7qFxYW1z8GXE3EF2qeu",
  "key28": "wVrcoeEa12kYt8DzMwFNdXy6XWAyfKbbvE9YvaaLjsqr68S3n5Fzyv7M3Nd7YsvqmwhfC1qc4C1RKqeq99yXiFT",
  "key29": "5DPysXu9tvWPyRaFJA4LwLrmyByDLY2vFZNfxVGxz88hAcmg8KVzGZVJFa21ueCyZxjddhTCL1gmMVrrB3oN3q2z",
  "key30": "3WJ51Syjuh4f9vPMfWn2op4fmbPDyz5D3QPbv1tsUi3WD173mfXoWd5rpSB57UdTauSftDmUgNzHDYPcubnkZ7d2",
  "key31": "56YB1ft6hfiMRkq8Deu98ZwmAaVQig7sovhUgCnuJo966iGTtdxd65RwAK1n9BQDiVjjjncFxMFqKamkFxxWSVxb",
  "key32": "2NrBWnjy5jF1hXysJ91yB8ZbUYfALfhpbuksGGTQDhso2zEZHqU54yEEZD8oyvjGQoEfpXzcWgUgmdoNpUrY8m5Q",
  "key33": "2P25Edimqm1RcRjiLiAPGYqDn5Eif877sGY3p2ubtKV3KkhyPAcqcstiB5q286xSkXQu1QVQdzT9yFaC8DXZ3b5u",
  "key34": "wi4oNBp5gptYXSDA2ZzYEPZcNK9qxYFYme254w3VLQ9iBNuTffFUUjwGaxpUQK9sXXsZynNKQPvHWhbkFz9Hqbq",
  "key35": "bkeqaa6xDGyTTkkiN2y6DPR7XCMjMsyLeWSVR9VH6a5iAG6DLMbjaBziih6ZFAtut3WW1K2PZiBaDdWv9FkSU62",
  "key36": "y5EaRyZy71vdhb6Hb331F2VtpYzTBYVZmciPpfSzEefMmq4ZawbuX2XMWu6pT5a2ugxaMSRb4ELVvmb5VoswpqM"
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
