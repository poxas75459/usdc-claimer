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
    "3XwaTeeo3JcWfercuR1P4YV7DM6qcgVGeoSsmtNEc65nEB47YV1EpWqqCBpEaHQra7Xn8amezbzbFgQSCPE168J7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25bTvovDGcua9EhhngqBQwPWr3dcYKQTTKDiuuWcszzw5deLbr5VT7HbpwyAtqwV6ifh4EwpCsghQru3xQgmWPGu",
  "key1": "5LLwBJUcVf8r1ezknjv9PBREZwL9sd48ymNA26LBHdXuqRkGBsW3QXH9PKUiSXKpBu5uR7JpMEzKzTBKgxk7tCkT",
  "key2": "2fG7a7PKP872ojJajYWQ8p6gUEfB4LVyw2QLMuRbDRAs71gMUuGKYZ1QodjWzyq2Veko2QW7AGjoJhtBQUTdZ79D",
  "key3": "4hh9dXzhbVAUxvyRYhsxcgHzDeANJeLgS3Ah3cVmLFdALBDScgh9RAkDM3npH2NaRQWvLbb89nue2ZdebH9824mq",
  "key4": "4Hfo1aNe2fd6wgE9ejQmvLZZDuai4dH3qiKtoPsdKBJwDZodWxMbUhVaELVVhMF4xkudhN6Zs4AYqaCZnZFPxr2R",
  "key5": "5pyaSogVq4weTN39CuFzPA2SyBWtWMyjdy9cW7z5ZSXJpyzUJycenKhnfJng7X4rC5qVyHjrjbM78kMdsLeT8AGQ",
  "key6": "3vtuaFyaawU5EnK8FrENko69w88GDerocDXJcSBfHen8c9KhN7qGxBsy2EosGG2g91hJ9xmD1PF1z63kSkPudkma",
  "key7": "4ovGXGM5ELsEddfKDu3rLFdUFx72rsZdUX343kTFeNRu4TgBNoqzyns9XrtigD6gAtqY4NJBtV1jGvJkAqJbmPNr",
  "key8": "61Gihstn4sqeQC4c8oZ9GJYhHkhtV1dXfCZQTyBCTbeuLt38FMnuo6eM1KoVXz2EKNbxQaApRKebRgPk4kjLiZDX",
  "key9": "5uPLQafETVqNVEsd1xnAa4B7QEpTWzL9w9mRhnbxFmAhgichKZPPpzV5DofBCQy8UFhYd3QX86cebYdcFq8ExUuc",
  "key10": "5raHq9zgYBs3dBju4PrxeFDjkdEGi3v2A9Dv5F9rBDE2WBahrjs7uu9sLH964PdkMuQ4HxRmtnYRzX8usFxKHeZr",
  "key11": "2BA9uUbbqj2pE9C86fbKBxGV5wimjg1DhAaZKz4ThF9zYd5BouNvrbvSCwsBquHRnqJKEhvEzUEJnmp4UyKKMJ8E",
  "key12": "5HffokYZQPM3MqHjE9eeJ4oV5xN8y2s5Ba7hLyS5ga8hznmTTZhML1bDVJkcsxGeoZ8TBrijrQRDrKcoKqLnYe2B",
  "key13": "2UEwmCZzMKenC6c3qRWBYZ2uzs8TS2jT6GboxqmdaMsSDU5BBqiCVea8CMdE4V32SXTC3C3jffn2aBfZkaHseLjU",
  "key14": "5pjfwjMmc75B2WEyECddj7f98VZYLC9YLcXcygKezHiU9UG9vpCDddr9X7BQfb3fAnwPaW1d16cgwLqY2eLqcYha",
  "key15": "4iUfJfdwk6GiULXZ2g78EfF9XmnQzDisiARpTUdoRvKAKCTawuAdjkWeV86iJ42QzkFXDK4bchq64CV1vyTTEERL",
  "key16": "3RGwLZ9vg5u6SaUqQEa4rk44Y9xBwREqiCSwW8aLKuLmTAAuQxXosbzzAoe7Ts5p9aU52gGMzpwuLLtoQhRjYJ5o",
  "key17": "2oW64w3B1jmwFvfwVBwL55ALpCkSAEQXPvx35LSN9mKF7LGxARGcackm4sLZ27mGF2SmvxVKBzLFF9YpqPGV1z5S",
  "key18": "iHFjy2j7skoc5FFkQiozX1B2oxHZTBMo39iiZxRHagmsmYovrNJw9w7s4wW5ccPqKrhhEYyABZVvpRWFdEqURov",
  "key19": "5kQWcPtp9gNYZ7mQrmZn3ER8utExUAoQ8pq3RYjWubNfXF3NdS4czUmWokMzcbZWZWikFHmeBZ35f53Vtbu6zJDA",
  "key20": "5Gebi13ykYjKyeMa9bdDgsKDssPBcgvyyDHBVoAc8G6RXe3rnMrTpx3Bgjs33JijEkgLH3YvS9sV2Pno5s7J1eWS",
  "key21": "2MF2fwuDyAiXkACd7Xz3p78hbkt1VAbrCqi8AwX8oTNipd6L9NoNebjsC5Wy9VWFNeTezAJsHU1vhu1zF51pyqGM",
  "key22": "642vAcyewCSwFbq2Um1Q4P3AsSjy3S4UhSoW3gsmMsEu6Nd7n5DKDmLECQxWZBTMbB2Gb27JMj8MFDu1dVxp2uN7",
  "key23": "4cyCy9zjp7E8j79sS6mHVYxkUZJscX3MmwKbjCdbRBZNhqJFrXwRH45vbMM9UxYHuFM8s7tnW9ASBeQdkUdEr4w8",
  "key24": "2TU6uutRMPZAudZG972ZZkW8cQ4omrJYzVUDYX68SMRSDX7k9MTfv7wJwyWoMLpYr4AiWcV3TqFjbgCxtTL9sBEm",
  "key25": "3V3uvYcMumk4zJSpVgVLQNTfCvu5uoftWDJH26Txxzt2xqw3ziXQsPL9rzEfzackZrixgxesjb8qianS7Wgm3oL3",
  "key26": "3jcBjqYXSvnkGzCZXqfyEmaWnfjDefmfNQZV4ZCiqDu6JMUr4UTuArRDMDWsfXxJu5Bc9CL8CauZ6cReCEagZxAE",
  "key27": "4DUvJEv8XrbXN7WVZWiZZAUVN3zK5vtRjEzqgzUGNMciH1QRuAjBvNox46KhjNr3wtoQLNsahTJxtbKpv2AQAR11",
  "key28": "9maNNFt9eFpm934axKys3RCyCw9Xojo6PqFB34MbnLsSLTctRxugCLd311KMyD4fP7JEQovo1zHD3xjuMCyXx9R",
  "key29": "2P7HrZckUdayodASVpDmYvTaZMEYNVTe8TfanRTdzegVWSWig18mbAsnaucvmYu4r9Puu92tGTm6neCmWFxGxrj3",
  "key30": "3F3jwtEkuRr1Nc7mm1ncMzXvncp1tz6gpdJc38wSb5beSVoNvgY9R1qkVzwq1x9zTkQbp5P9hUdogsrTfn6sWieH",
  "key31": "2vVK6kDDFbFwhAvZKhymFAqnPTgPEMuW8tk4dQFqrArmfFJ3LUGfUUx1etxdUYTZgqrvBHjDTh4D3VimuHyusS2p",
  "key32": "2ZDBVC6VxsRMKWLaTuyRykeXwUaw9bRnfrPUWBNMQfDBp37t1iFka4CFLNiew722AugXqbc7BUaZ8kPioZ8g6hXD",
  "key33": "4tfU3DjxJCFGQKjuxxoEyWpKHXpwS8cymz9mqwRbg7atvN4rorJpdZ6mKx62EMAQ6gViSSBQLMmPT3tty1dA2XqN",
  "key34": "2SGUUQHdYvogW2gjcJWWQzWpd9YSpQNvmxyNNRvaAwNaJhE1f4a9RppxbsPT57Utz6qepUa3MftCK8RyBFrEt24e",
  "key35": "2EPPUPcJzctVEYSGv59MA3NkQkdMxDg4ZV2ByFAy22qC8rAwv1dwKPUcdsJ579aFPPEnUBbZJjbv6Pw8TQcRdHjG",
  "key36": "3XfnAdeA3RDrJd9EbQmZ3h9N2FdKH5Xqb5EFzpECG5ARhuTMgY9FSbdS6dUuMPAujmBkSuMX48VrmaUayz4NWndG",
  "key37": "4j96m8vnP6UkTSSQuUJUmRFPaVBaZv6b52cKK6BhfsU2Me4MedUiY953F6wa21TVvCz3yuaCeCYnt4eMh4xZHPbW",
  "key38": "3BR7GA9kuhWPTvgxoFkR7WRXAZjEshJ62Z9M1pViP5zkU6xCvwHz4mJ8zAMFeE4zCpKVV5G6MnCtHU1VsY8RAP5v",
  "key39": "CVvfs5F9W88Q1bBXaPjLAwp9MPmPNSp5woV9DB6mnYmQ1EjPY7XGMcUmSUECwiaWNSHwCwVnDfH3NCxN9mLnhsK"
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
