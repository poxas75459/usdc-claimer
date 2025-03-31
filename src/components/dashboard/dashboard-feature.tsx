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
    "4rRUdGAtiR1LDz1srPBuvvvFaMPqB5JSy2xPaTHe8VFMJbkk9Ne1UMeRWC5cyTM748amBEY1HbU5der3tQaDN3Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MoV1D9rxSbcLytdW6F5mWC1jMYrbwsjTq6wPsxy1ywQe4smseHWRE7oCpBiCaE5u2rv688hM8QxC3xX5N4WoNWp",
  "key1": "3zUZG3yxZyddkwKXUT3s9BG64DK9dBtwi4xVem8zz7AmXr7Jy9tXQTTKsHEfwewXCBCHjJk4jCmZ7iYLWAcNz5Mo",
  "key2": "LmZi2Davggb7XaLuWBzCADkKqTcCXU9qhSPCsXQsjJG2tKoiRkcFBRyYY2Poa1bF1ynEQv3oVwCioGHq8Q8EDpF",
  "key3": "2qpJxHdHNkodT9ZbUf1au6TA5DCBsBdaU7X9WAYwG6PESNCJAZgbXX2sNqtTVgQ37DrSWm5aZsEEfzxxDAxcWo1x",
  "key4": "3TjsJRpv8Sm5RsgzDpKZz7et6TkCfnbqRYCyrEqW4f9YW6GdgXeScAyVCGqiF48LzoKfit77tDgDdcXzvb2aQHok",
  "key5": "2BeM8sm93pdDzx8GHnP4ZEDTmBfSXjRqGgkrQQCqWZ1CqVG8F5DheuZLq8cXLy6y2nWuDmdaMjDRveSTZR19ZE7Z",
  "key6": "373YGSoqv6ZfJpTYPsxsq7PM91wUZeprH1SZmYPY5QtELAQD5CsjvcUcxun9ioGi2Rx9yoHzTsU8QCU4vSnzSLsU",
  "key7": "x5AMnZLFyPtKKZTQmJEmZRA8Vzq9mnuFN2khZHZ973ZQJ1EVMRMNaUWeVr15t5icVuXJ9fP5UFz62ei1RkpQavL",
  "key8": "3N8aGGZLjxb5SbyZapauoU7cZTLFyk8D6hpqUPvadfZMS49WudqeuHtinXgBMky4wYfBs2LEya1SGUREdHJht5xe",
  "key9": "4Ne2xquv7XaHAcxgbaFjmUetqhWsE42bqXCHNykxYy9krnrdszmoemPNq7f484P6Ld1r7KG6FXoHR7CVFtfxkTN1",
  "key10": "2UVUr7bMw6oqUD5WtuXKv5tziFPE526pzpvMaG7uD4drC5SJgAvYSUNuZMaKS3kAjvLitxr6oAxiMdhvf8SuTPCa",
  "key11": "3fNBAw7kxBYEcim9MNNZHRBbXjyLkQxxmfg73EAmjYghUvAYgEAzg1WQyst2kEe8obpK4qcjStS14GSnBPZ6qxN5",
  "key12": "3k615DSgTTq1EvjQafzVo1Q98C2hzFKMY1n77awAMRsVa2jK6iidQweyF5Hq9FpB5zwM188Rq6tL71pwBwRQRjj7",
  "key13": "2eDUJMesgRQgqBm9quUHCekXKvtXZGTwWSeZXxEu1iDUwLpXrStfGUifLvE43eDXZdNEYehCcPYrF8Mu2fo4mGik",
  "key14": "3n65Ag1i5ntB7Q4ahVrpZiG49dHGvW34dav6zwF8wNL9JSY3gEmpa3i2bPy721KEs8Qa7ormzLFdnYSEEVEFEaxE",
  "key15": "4uihg5QYYdVe5FEu8axnPgBqcLjdZoXT5doRwpMGzfgYNKRy7FByK4373vNQzwVjSGJ1kCLDvTsSkatUZL1wDsfF",
  "key16": "vMMtkpVKFw4jpt2uxWZdC31y447mg59Rpwpe2EBdUSKYcbjSmXRd9NBhNsBf2KvSCVdG6UJwFhVNcwo35hiAYdw",
  "key17": "3zKzi1dQZJZy5f85xMWJyRuyVUe1pmCseD3pFABuut9yi2cBYN63ar8MiGS1WS7kXSwGtiSLLZFY97HZ5zysX7fU",
  "key18": "64kUFjTj2UBG343shmeEqoGZ92sAjTc6CZjwZhC3rV5crdQiKZSUxwHgfughwp9nBFfXJYFVNmqjyL8MFiNc2Umz",
  "key19": "3GCnYVsGH1LjEKK7TUjtytP5q6NjzT8NqecbxrvG8kUsR4DMZ6ERuNX39QQM415opKigP8j9iYn5tUfrkurRgmxC",
  "key20": "nVSUZXqC6GpjxkAFe3byUQ65U7hYc2V8y5W4nN2Rau6AjLBfctA3pheMQe1Wd3RKGvbZmRtfT5gCtu79GeJSyCD",
  "key21": "54nkpu8ButPy4UNgn2D5N8ti6gVnHy28RxrVcfvto727DV9Dcp7cW2fFrCp1ssLXqCeZbMGfMpyTCKHEcAj48Q5m",
  "key22": "4QdxEEaJAAss8R3V1GLhUTzkhTuuZkyNHcc2kLXG1HF4TtK5BtyNhheStorRPtNcupJvRMBNisY6nxQZWyEcwPky",
  "key23": "5DfoTFdwSm868FpfeCoUvkmqahYsEEBXs8heChXmrU8CD8aZFSkYsata63zvUFmLqC9V34mkDHu2W8mXYBu8Uhhk",
  "key24": "2gUbrdLgN8hYW32Y3D8m37vgfiGxzsUVoc6b3CzzzNYyhYD6uZRSdDZr7gfhbnhgRygFtLNftGVFC2mfSyiDABMA",
  "key25": "rZ4bkypcxsKPAQwVp1gKk7ag7hgtMWzKXM8jgmfrcoJvDUqAomFQTT3Me3V1F5qWAF1zCYXqRtTDRJZfLaJi5hj",
  "key26": "42PmFi8hBRDFxJ2ChM7moA9LLtUfV85rzHhAsDnH9n2RetkgtJLGikt5eD15d92eiATdDU23Gx1Q24G96HK31fhf",
  "key27": "45E6JgYYAKzpv4nrpZrDyRnLxRZEXGKU7u1E4NM9nWvaSrhLbopaL5g6yc7xXE2qUN61Z88kcUinf42nGtZgL2g6",
  "key28": "2FbQPrC36hGk7Zc2AoaXe1FHVxWpcgNHRNdWairU4t1qDnCxRdKUdvmXa5eySVD9skqw2WSFcyCGuhSWt9WULtvW",
  "key29": "66KyaLdxKByFatvog37VGVoAkH2wczeMEFicwQsTadHASgxUJdwmMF4q9hdsCENY5ZqV2KtYJuxh5CvBnt6w32Zz",
  "key30": "3Q2jnAoLs3K7akGjiaG29G9tYKDTfDCoEPzKXm45WwLS2HmqYNcGX7FTq46r4bnteu2tqxSJ7hpek8CbeFFNXuQ6",
  "key31": "JwQo5aRM4b64yugeEuBnR9s8LXhHoPrszXr6JszciBhDjrNiUG6VQkqnE4biuBpvCADQWSmjcmHQb3YqRMp4382",
  "key32": "2BVV58aDC9PiSvXZuUsCj28YYxJ18cxrPWwrHJDC4RikA2YUe3AuCo7zMqd3H5cLeYkySXqR8RrNVFWZfCSVPPkE",
  "key33": "2mpm1UPokfMjQWfMWCavV3ogF4QancjXQEbafdnHwH1ypHwheeFPwYzLvhWhzQ2QaKgzVRLQ4yw2i5Fo7L54VCBF",
  "key34": "44AKxiwh2fGZTCP5iTVRCHhUifqCtDw4iTiHW21JpNb7k981ohXdkVgABB5j3mMoQR79zSgcaercDCYrvGtrpuix",
  "key35": "3wnWMAusqQoLBziMkR4GT7L6hiRcgj5qAiFheJWL1r4gxcoovxjFFQ9dkA71SuNQ3NrqZmAzJdtjb4fdtf1pgjAr",
  "key36": "64RgvUeBwFLjRvinHNy656E66wFTwYHkGGqLsH7PSTk2RT53DMKCMWW3Xn6BTkHKxxvUCWZU6LsYB5mAb5YyY5XF",
  "key37": "MAdYoAk2UVjSmmAvgotFjzuE3napDk8j7BHz8u6NThLi2jrJHVFk4HENQqVxfTGmkZGtewFrPFjvu1LjeESJikY",
  "key38": "5bbfGso4TyUqMWnvhed222avdVhFJCLZq3RCX6sfXoY3EsbLVisyftGxxnzsrH9CgoYgVwFK7uS6mPetwcSRXD55",
  "key39": "2vpS7VsaXxJrmcs1PhRaBkDNDe2BnnkMmab91hn9XRdEuct63mJTKdMSH9ccwJVxoWhLSvMJwQdMcFGKwTxpXd8A",
  "key40": "2KThER33UUtEGZR7AymE4s3iMmcyxrkh467w9b9XajnppDrdB2pXNTt5rffxu3qLkgmn1YqJoJVaKy461bo1GC99",
  "key41": "61fvynLc7aA5FvR6aqheet33RET7gUag4uAccopSuKsrce5r2F4uuVRX1EYNv9L6zLE2SvH2ybYKS8ymB3VHb79r",
  "key42": "38XQcTPDW1BMnmTjtSY1QNzNQ6qRwwt6mGBm1Gxp36mc3QUrRZrNKrxMkVR9WZyURcn1U9wpw2JegcxUvUEeEN2J",
  "key43": "4rUJJEpyH63XqVcygFboJQNiGfEwWbCYMjqKzNa6YivbknnV1BXJ1o6bu1bSKy6vqicEzEQjYZ6R392ysXSyycSX",
  "key44": "8nkiPCNXYXjc143YDdkTLyPfLEnjYYYKiuUN2zdSLoTTZU95JowgQYCdtsPoKfBr4mQdXX9pZqHv1fMBXzKY6uR",
  "key45": "4iTzE74F6ZJQoDPrFHCSXPhVjnxRZgrHEmk7HmMGnaEQKTabcutnj7QwJxSxhCJh4AXtyT3fCY7mF2H9W9Dqyt8k",
  "key46": "ZySi3DAf5kaPznZ4zd4ReL5YznR3YZAPMFGrM4jxBAoWqis8dzysvUGar5yfGh7XgchH7kFHjXdo1sjzGgCLU2S"
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
