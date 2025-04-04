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
    "59aAWNgzXFWxQSaDFgadF9TpctURZCyXgVEa539vhF8bX7mseuD16goqg2pzAWphGzRBFganSYSopPRkApRbMbE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66VG2o42FQvTUUM9Gotrm11XiEV69nuzVs5UXMTiaTfretfSdmJiYUW7bDJVi4REnst3RJncio69GJV6CChsEkeV",
  "key1": "5DMZFKjW73mYo3cF6HLJr3Pv9w6SdpWDqc2dSvawzVjTUfxsQQn69TVpXimFTnX7RvZrW7WiKmTi6Ww22sPFDdJy",
  "key2": "565jNoYFgQNbL9uYRX4RL72KnPaioMEn7m9zzZsMD7df6rQuonNZGyfjEXHu8MJ5S7RCAvbvSFU2yDnAq62vsdHd",
  "key3": "64yDng6iGDrkiMPyHqDWZDgNR9RFxtMSXeeNs8sB6QfsvzNqvwLKpUd6FNh2G6DgYAaafCcKKwrGgUPWimFE3hby",
  "key4": "5rZn7izgQ88ebjJxwnWXuwuwM8pz7FJePAq83Dt69xfQrJzK3uFJSy62CmifhbpU7h3AeK8zqABbu5YEZQELzux3",
  "key5": "5Yma7NABKznz6wW5ZxznVXQpcPfeqE5mkWpZWP1xoW612jhLvaj2DChsEqyPGAXaZzCWDgSsbVVqL81vXSgG1DwW",
  "key6": "38e6GQ6LjpwDFn9ojvLBpsEPA9iNsFVfQS7uXAHm9RTp6uhUR7iUoTRfdrJM5QDmk2YCwzcN8m4QNeBL9NjjfyjX",
  "key7": "35q82rgoxFKubfELb35FcxCnYKTKKnpWL2BRNtHtTiKd7Ncz2xCQaS3bDB8qzoNybRaMuvze6jFqBfoT45niUF5L",
  "key8": "2qDRCdN7kwwEcqyEDqGWjKY1xPPKgH3D8e25MsAaGJtpb1ygtmFJiT6pZ2SqzcRt16hBVWgsNx6HUJrQZaza18eJ",
  "key9": "2cnbZwEZiaF771nGGjb4qGVwv2hoqxjBRDmtzau5wD3ZcveK6YytJty5NGty69ohmqBbmD4RSKAuL1nSPQNqfcjm",
  "key10": "3vqfLQz6K5hemwR1R3SfxpimdAo9tfBGdK1xeUaoKouXBowyHtRi2BU5qSecoeBP7ZzgbecgEDmpySrP7y8bMLjv",
  "key11": "3Dz1yXxBSscLUnQM3bS2eX1uh99RQvCHbvqzUJxgpyzXhXhLw3ohxaKgpz7x7izaMQpagipk8aqKuAyuMNtX5jA1",
  "key12": "3unTk8Zg1JSqYxVQW4EJ91wnqkKHUsLBeMxMuvftG8o2SJtxnAswZGAb7dWbnj9Bi6t3v9SeQpTFvTro1fc9h5do",
  "key13": "2ugYQzFJc7uHaA7e55YNDnwCGCDizJ3iw2mypCny1LfZEJdPNaotUGL6pk19CjifNFjyeKG5ijTxELmMxEMJSw5s",
  "key14": "A3MFDgrvZSYiG4fxsMWW2vSq3kXrAT9p67yo3odFYxwMyE9mmheNKMiiLCVP97F6CjjAcaiua6wdkDK8YdGpZ2X",
  "key15": "5rkaJFHWx296FkqG2YFxLr554r5ZSJ9G5XfpN6bhrA4SjgvHAD7EWwMFZR8v4DSBkW4be1NPmbY6P5je7AwqN2zM",
  "key16": "4RQVJ3HWn8hrHUoTVNRa97emCDbdVbz5LJz4jS4ExnuvusWs5cpMnZZsNkRgp4CiVisZNmvNxTp8Q3sUdmRfX5dx",
  "key17": "5q2typfuDRQd4n85EFR4XDRmyDjSVnEVzoWafmibc1MRhTBdintZUWTE3kjAULLa4mftaVmrBpcmHUCYAbsiGMFK",
  "key18": "2Jn9s5jTQfz3JMBwnM1FHLH47hFqGui5kTU9qS1f2oviXCVF54T9Z7ksDFHoKEBK7vD4WtrLvh5Wcue2VsVbJ8b3",
  "key19": "4KLF3PzsQCgGcxdXrXRhMXShEALRrc8zGmk6KfUpwGcGjt19MTMYrPQyY7Q2xybLEixKmm982jHbkX1NTdh6AM79",
  "key20": "4t1yQMyPYfqAh6EitZX55HpexsiEhw1oAsa2GbKbZAZS8r1Uk2o9gPr7vCpcRUKbBsNmg5d6LaKAbPGpF73BQBED",
  "key21": "27hwsUsruUfi2fiYAZnoN3UgezVJXDja8gKco19npZR7hTg7yqUVEVwjyYu36GJW1eR13M9iMKG2TjReKtAKJyuo",
  "key22": "3XCL6SZHHTBTUPptWFAyR6kJNVpTv85JVf6ScuruWaE6yEV35DErcNMGu5gAMSJBQRqrM8RA79go6HLGEWqEWHq",
  "key23": "2ExwSzZm2CbXPyG66G4VQMSuqLmYEnmoysfAqo1V4t4f23K3WpQ1ky8itmojW3UBmsTDnyrGmtp19sUUToNcdBqp",
  "key24": "5NM4VmqBegA3df88PTmfcVMdVHu93pyehExt14D9kKQFRRyKD4ypSaeMwbDRfRJwh61pmCW1k1PR7fmnfTMnGPo4",
  "key25": "3sGWTbkDaopgnL41ZLHWcn3vAP6a3TTHpn4o5LD7sLAo7iwkYbPQgTVtFKZzqSDuWAPd8W52HZw6jhssnjsUZEQB",
  "key26": "qAqnMerGMkFCQEMvV4QFshstDTEdth2AvKtvsJeojXHt4miYfg3aHKpsXDnyiFzwqSQ8oXwbNRKXaf1vwt8vYFz",
  "key27": "2kn1MfYJXQ3E95mCsS8yxFBMtno2AGkkgVFETBLQjLsiVqMNwdE3fCJFCQw8T1NcwvZCrW4c2umminBm1LTdEVuU",
  "key28": "uwMWg4n2U3E7aXre3dJc7zEQU3dUicmw1dio8kabEHQPBFQaTF6mSfvUNFoAGL4ahdPp2hwx3XwLPKS49ABTveX",
  "key29": "2A7HZJTDgZ9DSfPPsZ9AWfQQHHYUd1Xnn6wcr2HsDwikovqZa7mhpeK4Xe9vso31kxQAqXV6f7ondVsK1R2V9mUg",
  "key30": "5dUHsMjj43RzuW4bfqypXfUSF6CW41w3NUvkE7jM6uAbXyVeje57WrhYKxn8esqiu7AHgyUDx3PtoW65jS7zdXgR",
  "key31": "5QLM2pN5Nc744b7N8hNW3ZU8hTzk9wdx3bAeumoR6ncpzjZQed48ncxmQTht7CKhmRFFsdiMLEeRjSPunby2J7Zw",
  "key32": "3HMv8mCqgPmXsGGv8xNJwBarcau8r4ZhErPXw5T8uimDEaXwpYUD9NMtd214kU71cLNjehvuregd3WR975JAFPVQ",
  "key33": "4HjtmeweVovrf3QbuvK3LgXvTJpmgt6Zo4PVF1tZX5TqL9cXyNsLAXUYkjYjdGYDHQPA5NyMeZSxfNBjyQFJhsVX",
  "key34": "4E8yxyj1MJLZEH7aFKZmNjvQ3mwv7i6P1KUrSLVbAdw5jS7efWi1bw7KoK4uUn6d69QUuGjav5MssPasPrkM48nT",
  "key35": "3FCHRTEYcWt3GJo1Ve8cvjrBu4LCsJ2XDksrsAGc1E67axKHwBcN2Rkmbd4UzpeMPvJ7L2WBY1eWVy6aR5CbsBAG",
  "key36": "5nv3szwSkwoEnAcAQLWHYhUJpzA4zxyTVZK98QAjbte5uKPZeGvSUXBTHDuhCLfmqnrTWpBX5uGARKdhHsS4USg8"
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
