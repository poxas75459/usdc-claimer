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
    "5vP6BV1MCFpCbLTBwd6FFkw7uRHbACP5TRFbtaVMvx1YEAuSGzvEUiUr2N8gy1nKzsDLbkJVMB6FMRYqSW24W427"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFsU3yK28oRx7dS4FBu8b4hmR65ESELotRadATssSnpBcrx7d6gASDxmCVFAJUjQTGxCHCQyA2eXmchno5Y2zRg",
  "key1": "2zdrFau9ajH5Eeony5PhPVaF43Qoy89DTSCr89UZRYoq5oPJQwn7VDQpFSgmwzsq42LH5vwY12gWbW7X2QVaQjW8",
  "key2": "3qcNgi21fNXKBMRF9KtCMgsDyPiLvUwpjKciWw6fP4dVp1iaJy9XNRGuVnqzhfpksJFRwcP9Jja65GsffEfGT4aS",
  "key3": "5khNfn6SzKbzJPQrjPo7YUt6DmbDHdgn3NuEXRwqs32269q4fNUcVpLbca7hed8yiuvtoiT7XTNfLMTuPhzGkjmP",
  "key4": "2ZKDinMT2cRobkT15ztdLNUq73uMzBp4in5m64vrzDB3KLmoRyJf9pynELsVjzF24jnrsLz7smwPqUrV1LHfFSJB",
  "key5": "59sjYxELp5JJNrHHdYp9CwLdrzFFof4PohnY3L4psat4TUvpoox53w8SHcQoWg771EczAUWyPT6fMPCCfaU6iY32",
  "key6": "5Pca18MPvSMLGHJmNSxTq9agfLtjQPfjztYE5P4PeT2kpk7Qij7nM311wzSzn9xgiAgSe9nZ2BNzqhJsPBZqJuKH",
  "key7": "3FCP7LgGd1brQSXFDU1orBHCPmePGmFxk4bhdrRQ68apaBRqmMX4fe8e41q1naFWxLnR3AArQwk9FAWYSgmGQFHv",
  "key8": "3z6Fb6c4zUwzhQTJWAGM1gBhkBH1mwSttxHhYiQAb9FvY9pSR5ftvKp9XMkyBgeHVijonRpPPZZSJ8Puu3TqR18c",
  "key9": "5Et9GtyD5xzRS8HcAtL9ver38giBiY2qQypyXZ221NhRjGSQ2hmMK1vcc9ff6yjkHmjnmcXgHp5VSynsXoUvmJmQ",
  "key10": "qX2nsastSUPkWg3GLeq7zgyYAPXu2qnmXq9Rs8YH4H6YUtx2RJbVQ9KMDqhaBiQDKhy1ES5yZsydBD2jzEYAaM9",
  "key11": "47u7epMRgFJ1Z6oEvuQbLDzDNxPkmrcyw4Hpfo6yGRJjX53eDejjrsj15i7jCnxEYef9GLuwNLm3P8fzKgWtQwtS",
  "key12": "3EA6p3er33s2sW3XZXPUFaXMRJniJ8tegZd5PyARygDHNRhMzaYQYjHsneMKjtGiEbdBJh2tBkTdipTLP3hFYS4N",
  "key13": "2aLeiakQnyssEEuUQHs2jK7iKEeYeXxUcEvYqei8e5xSzzL9H3njWwyFhEmJpgvik2yx3rDR7AUcp7fQBzQgVVVT",
  "key14": "BeadHvRrFuqhxGASuQRP92G3HzTVygPiu5JRkE7e8tVoDSKewqDLDvuHAn9tDJK6aZXtdnrFGGLCXrVqaqp8wmJ",
  "key15": "2ejJkzRXgbm2poLYocTjXEsrmL7fQqgALkbnNJBnkxGgoKpXGtPrR2duYToF1evDPdsDesXN33HYNfnKhXt7cHvJ",
  "key16": "5TzKxMLvdN6qE4GXRLSsFvagtqMEbJ4wJtUpy2zk9CLE5QyqVQG5V1HpEVwHKKrhx26AXwTKEVeVybxU72RXqjnw",
  "key17": "5wuTr1pTrpjhPBp69BNR4cHsWivfzXwN5uBuzsV5uUngw6XtYzkdcnvxXke9ueAw9981eGCCtMbcHQMGpjBkLskV",
  "key18": "2dVSznmQc67Hz4tPHG6tGydaJeDZHNxf9y2z9bw3nqmJRYwEyr1hZrekGmGAR7njfKmYhHC4qrDikRkihbuyPZHx",
  "key19": "3cd1qJYzZPoYSc7bMnAHaNi3ZushaDTF8qHag9PQgTcyZ1dzeuYs77HSJVEaw2W458f4HZbRaBPy7pAuRuFomWTM",
  "key20": "61TkSQE4LFR39tfpEUS1o2RBBrdv2cFNoHM1ypNMf9zBWtp7fSUosx9igbEUjvVjXuZdRVj8GnSGkRxdtSA6Ch2g",
  "key21": "4PRj1CYJw7t6Do7p8AWgWjiKCKkJ2PePssWybWgBo63LELuSN2srW22jeGGtyu1osVVHJZtUP3SMaTBydkSGHxN7",
  "key22": "5ujABXgd6ksXDNB4npZdntgk57fPyjWNRAGgkApB2iQ6njSyK8Vt777fhrgcUE36YPai9fzubpoir9TWUGkENp1y",
  "key23": "28x1LB22Q6WumuAXjKMcmtm2vkRi88LXbyLiTHtmtJ89RkazEJDm6tGKqCLrYaHtzyZNhJB3dZZAdkYTVrEdwpVS",
  "key24": "5EuNhzd3MkenRPZvUuysqMrdbE7dDoV4bGvdktsqx77ZqubRab1kDCmrxWT6URqd3jo44RdwaoiNcjCaNhsEifyD",
  "key25": "eZNe6fzRk9HhgkTHqCe9CMhsfMj7QiT8N3ZnHrfPtW1iZYhWM6Qwmtb2yrXsc8sfv9FGPzgRHi9ePAtYkrbczhG",
  "key26": "3u3nxJcdPEyZZyYGSxPVjMo6ycFT1RYNJuuKaxYSKbU6gcgFMdyBGAy2XGigYdzQYkveVGXs6UteJbPLoAK7wmEu",
  "key27": "fEMefTZmjmaiMCXEqcZwmQTGXkzPMvtebmKAFEmJa6d7LPbhGLTuk6awVDowCmp2jVASx2CUynPh5dJR7RV4GUz",
  "key28": "4jbMP9Dp1pDyvYGgJesvCsTHgov4Gn7VGF2UKNYGSJdhsAdDRwQQPxfbizezUuwy422Tgbmuyz7N5Rdd6th8PKo5",
  "key29": "3jLTSXdXK8XvAvYK9C25oUURmDy8iK5vVrZk1eRpJMdTppRnNu5EX9GjKojandjiaEFyjopFp1RB4rByP3fRzuNR",
  "key30": "2a8ZcNmGAoBVocqpuBu5W1oJXsriosWTHVSaXA8iZ3FTwuAadhtQzVYz8QzJMGsi9uTuMjbrqGi6yeHzqJkWVxY3",
  "key31": "3KUiYfrXdhG6iieyoRkcAGfkpnDb1vqSRDY35USJSPiLqwrzuXzi5wDjR4Cy8e5zdsKpo6oR6fJUQFKm9Ld22MMe",
  "key32": "hDic3KqKGtGwz9jUeJw6axrihvdtV4avsedbRuNvmCWAimPgoFR1i3LUpeFu1jdyMKtZxz97Kbkv2vAeQ2sjmew",
  "key33": "39goCc8oy9kDqoouUYo8oJeaMcy8RD5aaJBF5d4ENZnkHK5UQwsQSE22GVwbjL5BEmytypLyaYKsExczNPY4P5vz",
  "key34": "3TzF74oGtvdz9ZiGnqHpVWzARkvsDH1JrHRwTSFj7Jc41X1ebTyqFDkgV5GtHY86qY4b6u5xTaxiViTwLhs55Upt",
  "key35": "67Xhvg8NGz8ph4upq7hpAsLtK2xaHmmmgeDfQCSCaMcmVGwRp6HYE5vG1X1JMhWccuE8XoEsQBbzdrEkHEU7nW3p",
  "key36": "gJps2eNyoaUGKcWqLBUagw22GnzHUgfHN2eDkAtgqrSv7EKYXRpJQs5vN7CLi2wefGrj9vx1B3SQh3ofYiqFUa4",
  "key37": "2ZVx4LpkT9N5wL9EfdrXnqx8dXEMd2NbGQfukcn5sJXWQ4iV5Db57x1a9BvscM9a9PW3SnDyxfx9YuCHaQ3TJ9eB",
  "key38": "3sPsG21Qbd2utuVJ9pZmLXN8d2PEeV9ByGSAbZWaQCBHDfnVBvLdaqsT5BMTx97YJU24WrBCiNPvtE6Lbpd6Pgu4",
  "key39": "5ShztUygzi2B6LHq1DFgWFQwHzMEKVkwTPZ4PDnJ7a1Et43j1eoBggkoVeCoNmtEgEenCxwvB3rwJQsRCndG31dr",
  "key40": "pDArASdHBsWZWBs3wvZL8bDwzMwM54p4wp4hb2FRbn7sU9srG3WfCNvZSr8Ry9DeBru2bDc3mCReHxT4FLT1ReA",
  "key41": "4BzNkBTYoudhUwkhu1iSMmSTJXCg2HdCrFfdDLP2WXjXgPb41PL9PBGQD2VaSujL4NC4mbLyafhKP16wQ244z2Xk",
  "key42": "2RRViBwfZFG39BChyF7FP3ddj2wkbSKwxr6jMD79KgMnJqt48RCGxrmTYCtNzZPAmpGBLYSTbjp131yg8GaVwMUz"
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
