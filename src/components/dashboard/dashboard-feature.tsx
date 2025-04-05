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
    "3bTWHtJbnxmUjj47hVJEy1prcy7f41mnn28zhWrkeyddyhUSv3PWVEAM9SxN9evL8hXdjRePUBiF2MnRY9vfhLet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXG7ExwbgQPhehUvehdtLwhVsFzrnQ7GBTW3kVtLsM2nuLnvxypM9etpAR563mz7wBJAfF38Hb4Ls5gPXAAwppk",
  "key1": "4GFCM6upjY58fmz5idf9UxnNZPvvB8aM2PL22fpno2qxndngKvDEdLAU9N45AFweYjijs2UoWQKkbuxsDPoubNSR",
  "key2": "4pdXfHaU4MJKJNQjcvbyAg9NbjonHxrg5A2i6EnpbYuhguJHCcrEMQ7MqmY4TXtpgjUvgDfjx4ae7tz4BF52epMo",
  "key3": "237Z4iv4Mep7UFR3iB9okkT752kgEioDDGCb86iPvmTNNmVbVPcJM9HirsUE2YykEoyXvnx7wqWTYVxaKkZmUisC",
  "key4": "38AdDfKrop6TA3wr2YZYCewfkDtgcgTZof9gg6kFkGYDCp8XWHn4cnkfsb9eF2oA3LmFypZVj7PMh7zbtUqhRLD7",
  "key5": "3g2GBDBCDyWvRBA5Pej7te7TZRpDJHxFR5XYUmRSSXbPQQnsRtEXihs9dJuQPsk77WsH4Q5hEbPMCMA6xPr1qnfV",
  "key6": "4SLLk3eZbWE9drcVq98quhe4QjcKKar4iCSP2JHEstk3rZST7EUgA9rPuDwditAQk1Ui2LLwWV3TMeA963N9dECa",
  "key7": "2meJLMkY7o8fPmPM1f1ayZ6Pc6aNzxiY4iryLKEUZsQhnbMRrWq3QXBZo6wv549XsmcFenpFQFRf86X8kkjKtdyu",
  "key8": "5FJktY7ngHuX4XbosCNgtJ4qn5hsdLRdWgQFsVrqyfSLGLoKntoKK9yQfFEh7g9CRR1rYrwi6ZgX2LnLN7kNC3VP",
  "key9": "3UKkurUnqtLRRHcrZMRaAPSMFkeTkzSqd9n7hTwTPpZBSxYfqKSArsh7WHCKyx3AnsiNbpkidHmuLVBsS5raFQ4d",
  "key10": "2aUsKWQDiXnp76VBfucqZjMWJN86ArBVJZgFRsYZ2ft1JH2CUpha3UXADoG6aZx1Td1J9erLwiXGVLgJvgGQc3Z4",
  "key11": "4zkbU1pJzmrRzoowYRGdVdPXeJQoWtDwpBNg7jEHdWTGtw7f68SLGLSc7XK7oQGtHPX8Yi4TDsXjZSDo7MHJ7mzV",
  "key12": "4hNpUCAd4SgEju6bD5kFx9X6Sx7FDdi4E6umuZdSeg7wbqvKf8GYwCQxBxg5qFTWxctuLQg4Ugf1BsCEjL4nXSC9",
  "key13": "2aiLmMWoWeokLLu5zUsDi2vkTmS8JM29onj7cGS58sj9wApKiNnDCXPs8kD7bKovkrCQknR7DdtcRdEKykEWUGTT",
  "key14": "3s9hf115ndawhGjiAWeZ998MJKWSENz8jBqfwDfc4G2KuzRYqDQcuk33ATK31G4U5Vemwwfpge1gY2vW95iWFYW8",
  "key15": "4yvNgNSdNR9v7xqQ4VdU3PgEViJzYPYbJaTHoEbsBPNH8ee3EiB5V9dpYX3xnTqPPGwbTtBApi9JE8PwmXxCBc9T",
  "key16": "4GNa6agRx59dcNyFGfkJeR6j8QLATw1wM4KnWm6FeLEzhVzkiq4uZyScDSLVBSh6st71bVy5vMvJ7Pq6Pm18mnTX",
  "key17": "3k5zvBLGCW6gq1vmNQ5TtJdSCPk6PE74F6peAd4LTUF6VLczXYjTfkddEy3EDUabgMXk2kTu6ZvwE3h56vqAW3Ht",
  "key18": "4yTFERT8tYFW11U44QceTeffrzrWHxLq2yfACk88K3Fju5ZQJ4WE2ASDCPjFEaZ9bEySVxyrDYJYEFKypAaa8L9t",
  "key19": "334pFXxP2TEfJ5MN4aibo4L2ewzT8QydjS4MNGzPM9iuhv7FWN9pafRm5xKoNCmD6umGDZ7tbcBQm2gvUc9EjzZm",
  "key20": "5C2pKC2ZEyKbbNzcMVGVGKmDnGFRbFazmJL4oqSRzQPKGKTc3jVt3fr4i3nfDhg2M44YfU6n7etEEsHZfCzAGndZ",
  "key21": "2czvRLrkD7Nct1X7EQiGGPtcWt9iHi8Y5sewfFb9dkagj1nb6fvMyVkfVpEFTdEEn1RB6Q67xMJtHfKHYe9Kpxr4",
  "key22": "52YR2v1kUic8sE2852gUC1H2RiZvFfLKHhUX1M1CVQZPhZZDZpYEheNGZnbUHGEjPD8d2rhgegmaEXHD7Fxa8ePu",
  "key23": "XgtSqTmsui6H9v1TAwBzqqoUevwuZhyjXHBzP1tPgbhUKVdNdtthgtu73rsUxcsHU9nouj44YV66PDgHt9Q13aX",
  "key24": "3AgiD3S8TEQXNKvxPJLdsgGQXCUeCg6EGCL5hrVZjvZ4LZ36MgFhUbkSgt8ATr9yr9SZCNyFV6BFzUorCyitEPNa",
  "key25": "67EoZHBTdfoU37TJepJ8UMwtPtMXawtYAbYCdgRWGe93SiDk8hH9iacToFAYFimpPzHYQwuTnT3M9mvSHb6TVxug",
  "key26": "5NwaTez2iBmcmPxod9HJKnqCpMbevvdT1amc5qGLdATQPu3Tjnz596XExLHWGV5ur4VYqv2rGZwHSHTK3rMJXddW",
  "key27": "3bF7XY8uqETTvZm86GrhcCeu9JvBtabhTaxvgkRwaXXNXXUFJeSRtPg5vVoUcN3gM4ewHd9vu2R6oRZXSTNy1a6W",
  "key28": "sUcjiWy9rSZTLs9aszVUdZ8Z4r2knp2oWV7mJAe2nskXypT3vryMDaaeMvCUCKYcoPruvFGkRvFMRDNhQj9qqDh",
  "key29": "3oSbVroFgyMdY7PqELvS2QoLUetA5GveWYXrpJUpVptrj5KzGY9ZGJENtXTFVhsXjC9vTARxy61uPhp7wQQmVbwQ",
  "key30": "4Ge3BfTY85M3Ejq5WrpadGXJ8LwULSTnLtwQrDPrtZMDq9omoLv9wtrS2qYm8kko8hpMcWdsMc4Y6KWznE4SCXuC",
  "key31": "2HPJaTtgj59T2Si4RwtNZWCDhJQFtpubY6bBpin9H8yLinmXqDmXrQnNvw9NmVkpJPaKCPVgMiVHZmwtoCNg9yPQ",
  "key32": "5sAnV5DkRhHxC7Zhfy4tNuiUPbNZWUDkidCQrnZuDrAMpaAa4wxatfPWAAV2Y9kx9F6UnjGhhoKwRo9uTRgRAs2A",
  "key33": "Mhcb7dmZQzUCspocurimLhmS9q4nk2DyozDHx5mC2a1ubTS9joNPpfYTAyn53WCH5UXx1UKsrxQdw5agei9HDVA",
  "key34": "3ndWd57rSXgJtzhRVXxm5yBaTxgbJgfHxX1SXAB9tZofxubR7gAjJdWb8VRAqwF3wqibwtnmULMwfMpozdVVzWcr",
  "key35": "3wiAJUCYk3dourffCQZAyR63kfMqPYgxFeqvzqGfC3JCq9sqPZPwboSTZMM7SojbYgUForGzQp8gVwEmH1d74mAB",
  "key36": "63gVg4CcR6oyAgTPuUtMz5zbVM1nUkRgJCunE6WBRkLWRXiGc4CmxmPU5zRAdp6PTc1mkJkJQcv8fWMksLyRv1gX",
  "key37": "aajkonwGJh3fLfwxP6yadKKtoRzM7XSH3i9A4zwbXMLkTWK1q3XKe6UArPkwQcDrVr1QF64DvXpXgQHVDeHCaxf",
  "key38": "oB8cppmuagyUPKMcNUGhLGXetZXbBSh1FLwQckbQhJgNxEGFA7FoTCEp9QhJTBESZ78QLc2WRrkvpew7ZmEb6cr"
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
