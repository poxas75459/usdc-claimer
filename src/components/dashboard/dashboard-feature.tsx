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
    "2StDqqW9vSxkAZBWpFgNc7QhZEP62bEauE5VgkWcfyPgdW4rHDQCVhFMTKJY1DRHg9f1TafPGeoiPyoPMEW86Wso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mqe88LhyfP5vxX8hntXKZJypFnhx3vQMJFNacXzM3UNiH6r5Qwig4Vv7ES6CHEDAwVCcfyTzZxuSL2oDQxXFKH",
  "key1": "2cqL9izc8hCoWWSTYe8vpkktQyGEgm6B7FgxW9mB4pW9YuZjqqj3ZyHeGZp5xaQ5T81sJXJsg9HoWbQbyyaU9aER",
  "key2": "3qjzM7tBo7SniWVLggAK1ZTBfiw9chM43QfFjcDMsXQhgNB5akscrdL3w5MBqm4Gr2UEWNSVRBQmJ54sTXTSi9Lk",
  "key3": "54joANtG5TFKHZwYLQ1sVZZdX4E4KiiXrmvHqgGrs31yS7P3hy1oNTPtf6P1s51yk72Rru5kDKdeLqZ5AZfm8chE",
  "key4": "5qVcy4eVAZ9n2nG6pMPfbqLpT8WSYYktf8VSN84dZdfjQ6QQFAn7r8zDSCnr2SZRBgdcAmWMRp9bNyqE9MeEtgNA",
  "key5": "2MRLYcTCdfAu7YfFajiBqFwrBAzCVLE7YfKeRy4FWKdNxD4Zsne2c8cxRHWR1Mj8qG1tJUj3nC4hpEjfJ1ZxXorG",
  "key6": "2zVGq32WuSoA7PGcuNzbbqQQccxRPuoaDbPLAtQNdnfbhxxV2J33YvGEWT4CCqBJkETt47Hd2TurvEib7MnRSq4E",
  "key7": "eahc2nNuW8u2xMjjEp5Tt3AXFbpkyJPZfZSsoJAk3yC2AmhcVpXmuc6niC8L9Lzzi3Zdxen6qUGgFwLzBbBYuE9",
  "key8": "3nSvazW6Cx5UExuBGzbfcfUiCaqcQQMGkoDFKVPUKg1jrvBg4T1dsd3azDdRpHqHKD2bkebCaEdU4KEfcz1FS3Xb",
  "key9": "2xkvYaZsFGSAeXJ4fXubNzGSyD2ehh1CJvgMDE292T6hGVcn8BpKzNftjHE1tmQTPoiciWD9LtgrssJMFpRxeWVH",
  "key10": "51AhWma2QGotnFfMnWdU4Xo1t6RZg6GbTYXzwqi9yqtFtruczDRmdaezQZNU4wSUMfasViB6dwtVUcUUF3YpbLi5",
  "key11": "267LRhJiqHMgbBgTe6rUx7E23grv1748z181gi2L1yjAiMmY3T5uR2qC1UcXcdACXupBdUE5bcb9VNPNqw2si8Ca",
  "key12": "5mdYjbUA1bn3RtxtCA3RhJqYMsKHoKnc2fCnanuJzPvj5rhHrRetP9mUV51csKT5XVxwAukapysqF3t1dwVZncNJ",
  "key13": "3V93U6J9sLukhpd2E2p4ukrMmHMvN5b6y98Xgy1AqUNP97ogEedR9nd2seyqCY2tVrWjtyjSMqg5zihygWTpJ6na",
  "key14": "3cVRUANfP7B9LKGfR1TWAEnJUX4CRMd1itpzziB3T4LAj3G5AEjFXGpZpaDdTp9Z2xqDiNYHd9q1S3Ftai6fxaVX",
  "key15": "3bdroM1xeD85vKCeQboyCsiEN56ZQHVrSN6A3bGynhcKMmPvT3e29gqWMmQiGKJ4A5Apu8u5FugwCozCk2DMKAXo",
  "key16": "5ragKmwfzJwy6VwY7maisru7vEYszpfp2zoybSw5KKFryQskuhP1BRxnAioSLNN76UaH3RpSBPL7MVAP7vpRdNVN",
  "key17": "3wj53AUikXXjCAYryATyFcGtAGjnSt6pHTfjcSvyEArZrXCHbTMNzNHoqWxFgC5AeQtTgN4bVCBiTeizaeN54bfW",
  "key18": "2wxgJ2WoTMc19wAikn5nfpret1Uc4WDbSB735gKseP8hN7AoW9KGSFb2Y5HPuF4CFC1hEFhCBEw5jgs89RxTsiez",
  "key19": "2EQgSKr2SyyP2n1yshgDjWrk5E2FVSz3J7Ptgw6cD1swwDtzYevdnB2xUoL8TECwhm84iMygkC2q8xSM19VBrUGw",
  "key20": "iBXH32y9ZmFgcGB6x8NsZZ3eq5HhQ92sGFHTj8JzzuCVynAiM7Ek69VhHwg6E5KfDnKT5mnDQEBGupbdNFNMChm",
  "key21": "fX8SWt5i2ytXNB86FuMRx1t8t221q8xNokk2Le4qukP5ouoXgajCDWexYqex74uC9sfQfgmGXDT4CoiXjLKQg2K",
  "key22": "4fYcGeDgzq8gaxKBNq6L3rUDAMZFneLhDSpV54eHsNCnGa7FtegmQPAryGYVid1CKtKWWcPB8FYv3rNFqPyNXizQ",
  "key23": "xZeV4uzLJtD4tRKAAe8fytmD8Y8FrxerrsSSBiRQQJyMnKxq2LyqwDbkp2maJeMgd6gQKt8EEjPGHAUZ5QmpiF3",
  "key24": "44x4p8PHquWMvKBYAL8RszKwFfapCsuA4b8d4zcsT1fR2ytHBKYdjW8AxV9p2GPQywjx7HNvs97CLJRJMtKHM45c",
  "key25": "EEdkn688S4AiQ5ek16tP1mNEU6wif41BCJzys6a5bXgJxZAfYcBTvmsu7aaARgyLzACL5PUXNS9fLPBGQEyyskM",
  "key26": "34quMWQy7NLk4oZjfjFQQVc9bW9Kp8XjcRpEJ1WFSjvTtizR5YmS17hovYMDBqFXSpVZC8Gjjx3kFXTdmQGFm6ev",
  "key27": "rSZhEREpsyfxn9kCLakyrgUnHLymySS75Nptaga4Zuvnb4teQSS5XKfE8Ghj8bY4MEbhEuNs7Pj81SywgnTgDVB",
  "key28": "3VfUmSrWz6VEPT2GeFYsAo5Vqpuco1WLXKHxdLBpYpybZLHMtwGCFn34jZZpXXwXEWshAoLqizwEJKqz2zwXDfgL",
  "key29": "5Kw6Q7BgajxXDv6cv9aV3QX13CPWkL6gkQwX1kLhBRjY7xS1X8FYCytKdVLro7rsCiyhhPmGsgCfodTxtB9BYB7a",
  "key30": "L5bGr81YcdpVT8H3MYnonzCGon4qc7MSxSdp3tLJ17VkwJi8kABaJKf1rbof4XVoAvCdv1riGuNFcGXCbZqw5YK",
  "key31": "2C65LhTnyNgvavEGCXYrQZUFqPcFKBzGzUU6pRNkfPRLTsty61HVdW44aQCJ8ym8nGfT9JPwJrvF5DB9ffKkVLFB",
  "key32": "3ZvvEa2VDVgXa4hLF538EBagGrBRaYB3MUTvhWjYpGtBs9UPZr95nW2uLoTk8nAZndyuVFK2j8nqtKUT3rj7RvUa",
  "key33": "5D7Y2DCHwXLSJ5vhhgHrBB6SqeGNt1bKu4WXyedj7NTNi7rF2S4ZPra21839capiSdK78eyMhj63AAw1BSDLfXgW",
  "key34": "5tMe8yg93DyhdZMrCZLiS6EKgfc6FaQ8qwEhFCy2yVxUXjzUQyEDD2azPYtCKZP1SdSLcZWsoYYvMnD98ZBL6uXV",
  "key35": "2YaSDNqu6zTQm7e2PDHGgTEgEnnc6Rn1FNkSggFYsB57e2L73rsws3KzbTuLwwSMqxPdKJdJ6Nn4aMKWfoXVd4uS",
  "key36": "2ztgq5VdeBvtSvaYx2jxk9gHEF2a5VPFXAHwpW4yFBD5KcWZm4DSLVKNQNqUaSJ2C1SPGasz2j6kzia7F8M7rUKC",
  "key37": "5Rn7g2Vx1tKAswXRkJ4epN7PEQUsPMs9m1xD5VxjXbXcvYqoNhZE1BjUahxpLifktY43dgGDUZa6U4C8KsFefAPU",
  "key38": "5pqgGuaXLeRsgUuoHWkpF23P388kdHueRwG18N2FmBvaFdwSv5v1nLoLgesFvQKLQ81dRWtVcsmk9CNXDoRk5q8w",
  "key39": "3aAo6WJsTd4ccK6PGDVKgEWHyzDCkTYpH2EfaAUHPnKXtcnAAd5vWD61nnRhmz2mXFs6Hr2PwEZWW9LinXYrodDv",
  "key40": "4MHEtMzURrDj9dkhcR5HyHxUhj1q8Pr73u5bjiFHznU8p7M4SLNCGRrUd9ddiaPp29eyeuo5JAPczMnpDMhMrPSf"
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
