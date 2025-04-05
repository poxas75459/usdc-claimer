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
    "3xTb4fknWMnouENTKs15UzhHt96s88SdMDS9orDKkHchU8cBJec975VJWaEWBXAMccKJZNfcD8AvbZJSYVxv95Ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHNH1oLBTagLM6GPkEhsgGphvUWrjV4gaVR5dxRTdim67eUhHjBag22s4Q4GSkHBSUCZJHdm5yPw1JbDXpuMpZk",
  "key1": "2eeK1YpuTjvYaNCHY4XimvP81DaMEuoVeVKNshvpQ2EbQxxZXcCbfCLFhMJp5NvGmH4VTfYVhe8PSyu2wo7eDPnh",
  "key2": "SejkgESUh1F3ioZPGAHFUYv6sEV67PmFT6DrZT98Wyy7pfuK7wpNBeMCtLoEorzHbiSpS6MSHdPGzFEBG7Hb6Kg",
  "key3": "3YM42StmPchVJfdznUHWBKdhATtFx1u1Z3iG5S1WvKSqmjaC9Kjy3wVS6A77h1esTNJmzT7TL9abDxdAwP2KEzXM",
  "key4": "3EaU5RQ7zD41hpGfsryJqWnPkRJVFh37YwvHu5GkYxP5itzCfeomiT5dg9rTyyinE7nnSZxSUbipLnd795o4fjQd",
  "key5": "4BUx5ZRR6Dd8sFPMN3GrXN37KUFYaZqNBj6cagsJphVSCXuzNvT77H4KLgCWxff1eiNWy7yznqPuxTzDouyuEzNM",
  "key6": "2RNXCESaVWwvtJKXZBJf1Hn9mcwVcR97epKkd7edV7tyMNXSKDt5LFs5ZFbjQ6LPSwkkeQPdcuZfJmyMYKAoiiZP",
  "key7": "B1r4LtRrmmZpEqBqgWhsrxns29uTvbTMadUPXVpUbgx8ZG2Zw1vCBebnbkZN6rv4EymhrNunV3ZipP6av3dtMdX",
  "key8": "5Z4RRbd5cRBgPogvuBrtSFChZxurkqy9WMVJTXCMt3kZPfVCxw6xgNsC8VMgEQCTAWEw63JHumnaHiitSrqog4VT",
  "key9": "oynkwpiz2x1MKGwa3bZZ4pLhtgzAHwkqDRReQbp1DfXJwaFAvZxSqmBMwDLmkCZbc1T5c1BZ33FPhLjxpa6yJHp",
  "key10": "44Lh4TJCwxukGgH9uSmbqUfwYjYwpYYjpzUzUrDV9M2suYbgtit3MDutP8Y5Eem98it5977fxgxgZcpVY6a73rXt",
  "key11": "56j8xM2exkx5QTHHnfjDVCUBM1dcgmQey8o6K2xRZRb5TLRFaMfM6NKZMoJTV3guKHFgLCchR3iZjDQVnsqyhZdQ",
  "key12": "368ApKitfnMEgvM5VCxkaFrevZrhS9EWMofBesGetAmnZge2XBbYe82aNkh5AYA3i8227XeoM7Ddfs9rynbs7Dzf",
  "key13": "3FhfsrtZDKyHUXkKLbF9PXu1Uoazt1tPSFTt9S8dBnjqSVKbTecX6NGETh1KTi8ACT9JKA6knAQ1bX2BjHnsoBY3",
  "key14": "3JSUwP6cLo4Qkt4LtwTRLsce29PsZUgJJSs93BMtpkcf64V9FdHPswETPg1oqqDrT1Pdq3M4tXtUQy6gYp9zVy5d",
  "key15": "5SxibXgTxCGdAqfgJ6uQJ1kDFkpXDNKny1N6e2EowRTrDxE9155Y7ZVSQiwLynP7TzRt4bVSsNBNTxqhLhiuTAf7",
  "key16": "3hBN7jnXDBtjYwDHuw5b9faYfcTtX78j5iGutcijMZB8wJU7FXDPMFVnttXV8innE8FPc1UuSscNEY9sGzSTonvP",
  "key17": "57EUVvKNZUCgJDkcUp4jn6yhhXNgxTTgwZg5G8khmHxFPZG2SiE1nLpgTDPjQwPVK7BRADysjCebRSAjc3pe5kJP",
  "key18": "3vR25c3j6e4wQ841NWVUGsVNGg4xMmdRvRqZjoCqxCXBrsAaVt1Xz4JBpoLy3JUSnwD8HC6Ej8LAaGARDGteH6mS",
  "key19": "5zSYY6WiSCjRaUe7ZUULmL5tcEHqo7pGnGjnKog8bk7YypQNo1ffxzszs65ovCmxu9KVA39drAgEBALSbHyeQibw",
  "key20": "4vZda2WhzsxWHBexUjNaKVWc3hFdixj2jduKm5f9fhDa241gydWQddzsvYp6rNfho4Sut1fAoZ5dmqDSFiaW9Sur",
  "key21": "5fvNp2DqHfYtCF2SC82aQSV4WbkENZjFx9zTZGy4PGKpsFLy9J7zA8dctgVFvwqqWX7bHm2mUTUSHokciMAE52jq",
  "key22": "qsWYdhPaqB146TbGh81kQLddMuw55Pn99YVfpMpupQdmZ86oK4tfHuvvfiFFMZRsz7W8eiNXqq3a5vsj965vcpF",
  "key23": "VHgFWDUNhrRuTL6xWWJ4ztpKKj6W3okWDA1RUx3wemZqiNhG6KkqbRHNX7ZA1PgPdBG2pBtQqByGFbBy8QHXDqE",
  "key24": "2p4BCmJAbDvN6DFeYvBQC1XJ4EzFkKGxqaaMXm944yxCFcVVM3mqdxA3Zp4NnzT96W6F6z4gZR21GnYJuPbgoufu",
  "key25": "3hhAZLS1aPM4MoHrfQmGdSqwU2tZho7QzRBuFweNNiD5b2nTNGxvDqFcYcp2LeM7fCsRQ2KdCHaRhFHFEeanmLx1",
  "key26": "UUYYWuCPwGMJ9c4x5oQeK73AcJLkQ1cs5Gg9e1Q9f3cuhdNsPPQyYE7d95E6N1XJ7dfT7YpcLSK41XCHJtCEJ6J",
  "key27": "2VuemDYHNXEAH25CSagv7JEz7Ye4jaDsUENYyQ1633WGM22zVZ26pkSh2W1MPG2QRGu1wbtRxstczXG8tpL39k7W",
  "key28": "2HqrLeVBgQqtDp313ZShTnvD2b59bnqJbtdMyYj3CHAPS5ssJTsNRjwCmgSgC8Cnn8o8weYJS1zKpinZQAwfhguK",
  "key29": "2XaoTvRcMbAySSauBWi8UwaZ7Qa5MX4yDvbqkAFRxdKFDELPPve1dHaW3E5XxchyGGdZAmSxHW88eJVR2wrYWcNe",
  "key30": "2tSD32eah8kmT672gT7TTetCaKPCVjgMDnueubgcy5wBo21LsdYdWcyzGKCpAF3z2XNbkkdWcTHqmhiCbkLh3NWV",
  "key31": "5otshkw1TJ48AxMiKVPoMFMB7y1kkuYT15HX2U7NrqzyihRdMVJUtXegPTaFdqNmvwKLGbasGpz3ste4PauwJGdL",
  "key32": "2aeQiiBtYgDSEQ2VrR5XJy5zn1oB37NMiFVVMg7wqTD1gSMP4VKusnZChNcgCkNDQjbMX62BkyjdECyoytvjedno",
  "key33": "29JNZeiyg1NWCBvWGC5HpsURkHU6KaUpMLaMq3Z8n9ibZFm9dFeJ2x1qwDvWhtCDJFEmkKBWF9MFp3SCbVML2YN7",
  "key34": "2KGiEJ6hEWabh1mDPNsvPdodHmzDUsfq938DM6CibUz23iCZCaamcQckidoqGS8XQtsm8ZrpbpdKnHeeJMKqvmwE",
  "key35": "4pA6584ZQ61ezjedF52SWA3r1cqVgmhEfz5cMFxWUBDqcQw4Lc6QRY9E9LNm6t9Y2NbEtHRJoF3SKkUMmuemquo1",
  "key36": "4GgjwNYsjfZT2NZkHnS8hhDBYFZW63c1gXfUPNhsZiLJof1BCq2j68Y6TPUzzDDe7msKNScVt1kRZSj8Q5aTEndi",
  "key37": "2QMbA1XXiCpJBZk5wCFTnS72WJemP6VPsjfvJJD8a5td5GWPaxaStMjNdcUVkxqrPFwBVXiiGjRzbPMT9A1ogTKJ",
  "key38": "2EjnZfzDr8vDEJCeZRziLrumuwWvrywXMNyNhePwM5ogKHhrtgd49mhsxwoARzj1ExzX5AE2AgRzn8NqWomZXtFH",
  "key39": "2GVjBthy4gAKvtUovSnKYXKKLFb9GjN3eUUER4yAg13JtTBDmy4ZoVW8FKhywe5sg7yPmeY95xHtMxuQtNzyYQFq",
  "key40": "3YH3yBuGMMi9HmV4TbLJ79CNgaJyhNaWY4YCAX2vKDGdH9LDN4icYsGb36kMtffpkMp8LxuoUVJpZ4xpGTY5cC8H",
  "key41": "3ETdEpsjf9Cj4mtk4FRS7UPNAwiq7DneHmvL15mb4ZDmqEHfSsLsj69DrokAwr37Kg8YMFss29JNhdwSD8MiUCwF",
  "key42": "4eP7LtdjgxJL6jbUbcGh5ELar4pN54sFBZfe7bNDnUGjegnDDuhUeVJh7dx1JALW9dUnu2VdHZiaMpXaSfsFiqGD",
  "key43": "298oHCq6zoMLEEFNydGGUcxkpD3p1MWsRmUec781Hcqqax14b7HkQBjQ4bcKkFHt229k97Qto8qm5RomMSU9trnx",
  "key44": "4qhKxDQyRcjESQm3j3RqoePzZ3NmZnJcdMnBCHYF6vv7kUywLmgeGqyb3JzBx2Uv6fSE81HMvsRuBY8R8YiKP4pp",
  "key45": "3oLm6CvBWfJcApKEEp3Vjih3rDz4mvyTM2MtRHZjEdDxL9GRkwC684YbAvMgMcfqnPKrWfqcz9jvSnPscQ6qmBYD"
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
