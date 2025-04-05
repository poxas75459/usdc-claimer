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
    "4RFptH5vBYX4pxCrRdHLHniqegXaopzje9WLvdLRiSWaehjNonE57z46eaZVAJMR3JjGnUfGJ2be7PsRn99wh593"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrFb87dJ88aVSawwcyGEmrx5JGR9QFTUNadVbtf8duSKqApv4go15uVT9vWapRbqfjddyXLYSHDX9rTBhn6AUHK",
  "key1": "3vA3sVxCcAnFG1haKS3UqnBBBastbpKdnZLNQ8sZ7XtRgJTcD2z6T7T38AD9z7KzATAUfHmAe2gVH9mKvGvhwjYK",
  "key2": "4RFfzRJJJ15GT3LdUV5LAz7G6EuETNTC1MGs7J7CD4CyjGXE44pe6EJV9RJZTPxfe85ziNDXhsxq8diPBknbEuUg",
  "key3": "47PE4ee2bRekPtHrLBr7CRDo6yCXRMVKEYceMC1fBR24wfyshf1BPSU6vCKMmxAr2bJRMXFKzabDPzWSkBLr9EQ1",
  "key4": "5brSYfe7ewJZKc4RjXEXT92pV3wDAFsF41WZhJJDVG5wZcGiPpBkmUrXq9mFKVq6THwHZZm2QSrfRUPd5fjpPbtR",
  "key5": "iwtnVrL6CTn3mCDQBMCQ5X3AjME7VsYZ5WniHLskkntg7giswHYjEX64MvzPEz4FvaRxL1Kqi4sc5o2EwfusKj5",
  "key6": "3rv9wZQj6yc7NAmb7qSPttYgmyt7qyPaeJm7z1Xz9C78w2sfPxynJkNddAJX8X6qirLTgCe7RRP8x8umiAEW6DyX",
  "key7": "2YaaNZudUF3FyfTiPiSDsNELwQJNRoXQhgwCewcSPfyAsMXaG1c4YeqhZRsLj14p6wnn59KEMM33zsjEWmjdLjGW",
  "key8": "3Zy2CQKbT93nptYcWTwtrSqAbMQ2t4DRdfkEJiLWAi6QYyPwAkX2oG1K9jeT2NBGKo1YpDmtgXgVYqjFvbU4aAD2",
  "key9": "5DarZxmDGkPKHrg4oDu8QDC9VFBMER4W3GDSKRHjGE4d3CoX9v9ZRTTqm1vkbwF1DuP4825skqovcdb6gPQ4dMSE",
  "key10": "t6efcZExPjAStX1JtMiKi2s3N6q195QGDNSrVFtE9xjomKocc6dPgxxXXEVhCjQHpMpegywRvrzEpcdhp8JZ11J",
  "key11": "3xYtB6ySvWoLgmAykh4fcfQD5fhbxREp3tDELrtRtDgiijPjJ2kupVRirVqEzKgJwPydWeeJBf9LYDbNDkprBj1P",
  "key12": "QGDuZMmHoqi6QqoE4djSveUbGo37WXSz5YZ7jT1qYFYxAWK8sLTV1dgEcpxbuy7K6iw94hVCsMsnsXdCF23EV8B",
  "key13": "3di81syrFqCvRRiSx7AT8RRbcauN3B3jxTAKG5mEzr7qYtvD2Wi3WVfnuX1JN1ngKrar5LAAUt71ij9qVwv8uYeJ",
  "key14": "5r21UfamA8cthDxa3AXgKoDsAQheUZf7WMYEr3BqMbvM2TchYA8GBUFLLgnttH6KQ4npGHcTz6bqAHZ7VCBQf1Jg",
  "key15": "5TXRBjNqFpvJLGsRBnQ6DtsnZXbLsTYpaXbeNcsp4KYCdrMBPvCcbHfKMUShhLSqGPmWm3SWAgo2ksG7J6i6rcM6",
  "key16": "2iCJN7LLPGJMbPVv5i5urrW8xNyDesHYUqfeUnz6PYKD8nPsEtfNud2TDeBu6RXwLPh8TZ37mH9y93XJu7ZvFmx2",
  "key17": "5hDx2ZocdBY2HxbRtqXAC13ouuVsjx1KcRjotzzv18R8K3BL2vPSx3vr6ettAGMVVK7ibNf4Fgpdo4movNbhJVBm",
  "key18": "5HUqZrfsLFtW1W1ZVvhN3KKCxqaw9ERAFhfrBYKo4swT7puHqYMSiCXCcCUMzuL8MGARL3z8pSHKhSwgj8zZLMxD",
  "key19": "5Mp1WDKkBCkHJ3tTRqFPZsFxKXhqhgUp96v3QXp2su1JPk3ieezoy1kaTYEKcYRkjrRoaWYXuRgkii9XLRobztKg",
  "key20": "5KV8wNAosYADCxEkdWvQ56dFdfkhik1vGQc8RL5JXM5xLmowQrP6Xb4MD67nmR6NNu838XemoJbzB9cMBbkJbziv",
  "key21": "3dhcmBWftNoaYaV1Qf12GjrjAjJUDVneX7BoRjrF55mMwhwR7EiWUb9FwL31Jorcw3Gc6r7hk4AdQQQevCpP3jMa",
  "key22": "4YKJq545ryQaRy49saUMJy7vbsKM4LupkgCt5YNBMG9hYq3iqvmDivZoJUWMex6ifcTmehfbdJiFb8jpFBsLcKDP",
  "key23": "43qKDsjF6V665RuNtL6LCW3kC6mDC17oEnZ6kNETpuKmSfcZBu1VjzzDrr6EQxDz72HKvjKMQzkUj6agqzTmKXyZ",
  "key24": "2cnXp34n2rMFCoqrWECf4d35Q4U7hhsjRtxb5WvZeiRH63UDGptKr5epEeRb1EsQTqikrjR8odn8rnRUYowdfNEa",
  "key25": "3PSCPw2zhyg9DfJWWdCrrhmmrzxyFrULx3LwGv7XN5KyCDGpTKjpZGuRThp1mnxNYYBv236vrU6MAwBVtZ7mjkp",
  "key26": "4J7zdUFcQJF3xKcgrDhQ7udtK3j4UfgLYwt4XQPiWx5sELGx6U4adJkdDcotWcCTCb62PoLracWJC6jE6KecPHVD",
  "key27": "2BcgdcDixC6vzmvssCH3EztLFSDjtvt4QtvwG2pEmTGMW9TizBgc4HZSFzghZHQjRAWC3nNsHA4ZjJcY88jHdx4N",
  "key28": "5ejgzw7xtyEa8WFCTqLj5JxXYS5RHWuGAdDJWfYYt95kZ4t32iKbeFRm6nMEPh6i81x6ncZNjzjJSF1ha8J9JK2S",
  "key29": "2F5RvBSTg39QSpV2TcoYaWGRFB1gV8uDKv83gPnLyGJveY47ZGazBkYvSwTNbvZffRLqS8o6ge8hT78v2n8tfrav",
  "key30": "32r6g2JUwPLf2VCmSNJ2EAq4pmSwSVKTkSKGZYJ9jSDoDRyG1J64EbJczYHFZq8c3e8Dk58x5g5H5mNFKovm9sLQ",
  "key31": "3GTCb6pi8YHBJc5agoxQ7wU74LaVu4epuLi2CnAFXxREWayvm4dChoQ2k2BFsvupwe7BJHKXbEbLY1g9GiYZyPGK",
  "key32": "3nEYgyx1nexCUcGnE3sc4aRRPGaKWAi7CZMf4x8w7SFHgWy3zEFnekdj6XVS15x3YXCtXftUc7r4M62Db3q5AYvP",
  "key33": "6fujzchpVVHMrzPzCUUFismuDr92oWhkWNWYum7GosNgFobgVGoScEWp5yK8WFG8NCDCNxBkPbhyFS798ZYQNne",
  "key34": "5KPosdCXFRD7whLMuf3rgiBDPrzxFTfs2rg85nc36w2zemMvcgbSrNfrZkgG6Wi4JN4NUzwrJnj3614SD45ewwb1"
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
