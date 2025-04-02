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
    "BkhAqsQW1jhq7hiiEmhqBgjQU8AxdDXdJPCbynvYsPJmqdBoWEm8JZZVvrycPeg2L4rxtFt5HGxZoHAGzX6bBq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p1AhY6xMLjDeRcZbn6DC4dmSbVcU97VSMkZhXxzjP1LiRjnsgDYwcaiVsofPyZaxdVERxGP839r8o4xTuRotK9n",
  "key1": "23kNimzn4rXXT1Wu5bwKwBabDbaihYjfsMY7ywnZEY4eWzYH5m3nnBYW8ZvtrmgL8KDHJQuzKT6HkMitjbAnEYwj",
  "key2": "uqfotVAF6XHQQeFdQYtR7BUCabVEpVrqCXGUxdYZRi4fE8WVBjRY54vUymy7cs5QTxkEmgczNmjRs12hsRM6a1e",
  "key3": "3XKZmyUzRHvsyHoFWPKQgyoECVNgWEV5zNG8Y49avYmQbe7tSgqBUequDXprWCD7kkAyMBM8QJxdr7kLsJrDXdJT",
  "key4": "5VgZjatj5X3ixaa4rpxc3JsxHjfcL31mnFNYLtG4pGzEzTdNpYc2uNssPwCoGUdCncWHwK9NHY8WHz578SU3JcZV",
  "key5": "5CDxchEbhXAFLySUF8LxBirYjykRnVjComEWMYDhmvaHT3DUYq3hAQtTZPJCid3bLeQpisBwn5e3vzbWXR4XVpQr",
  "key6": "LwB877jPnV7Q21C8L4pBKy9BtP5tM2FrHsReptWXoRwv8HTsBvTSNtBqafxqdHF3BKYgLDCUoo4kvLhoPzHb8i2",
  "key7": "3XGYMSSmJQ8YH262W8CcfFQNtRc1cqSPk5yibWu7v5WHRESTcJhs8SkufvcHB8FJV8b7qisML9z8PHtttg4vcGb7",
  "key8": "3bFSHfbDBfbSn1hsSL52XjyPG49vhvQDZC1D8qpd7A6m1VjWKfbpk86piD5QDdEkm9YmgHbVxSRjWocKY4kQ8Jjo",
  "key9": "2Nf4d4ifxUaSBCmpAoeBaQ1p671JaLBFeVUWGafM2BsDAREjYgj3Niw2Yqq9J4QcYpwARUUCaRGybWfDJimCC9zW",
  "key10": "2qrSLzAuoCXnTJqmn5MKZqYQZfyTG2vA885ndsA378u4iv2zjWAgL1k1o99fCZMMeuRNTBEgEvPtpcmtwqxud4oR",
  "key11": "39KF7WrMQTJKyiw4wMYebnfXGuJUZEPReEDCdFZCXMVf3P3NkUDh71o3Mmd6bQz1C8ixyaGWGqkVU7a55qTWRstY",
  "key12": "4AGKTV4HMHYvkC86aLPbTjGU3fbGMJb5HTnTPpRUZn95VjdAcRj69Z4buY9mU4Ck2DU7p6HqxqCRi93auWHtdqia",
  "key13": "3cLXW77EZUSbVnssFbwTTqjB657dNBav8Vs23xdxYXSLWwydSMUqJDpyisvJ78UAd6nZRMpfmFTRkhUiBdEjXZfb",
  "key14": "3mBuQhWCKsBozFRF8FRiZ8TXX11vAqwgu9sx6gLGZ311s8sEezGhkJMhNhum8ZuBzm9qjxkpm6n2kEVc7E1MLr2m",
  "key15": "4Wa4oAv6GPbVuqyyygSBF3tJaaEwxJYX9gTAHjPM7a7Cuhtxc7q2mjA51S2YCYHL64wGzdo8ZzBJCz34Huax1q96",
  "key16": "5G41Cj95cLwX55jGxa8feqFQ3J7R6jFdaPmL742qf2mqG95foVebvj1Hc64vuENihjspXmQaS3D4UiXnXHiSk574",
  "key17": "4riRT8ENNRytrWGxfFhCDgCkVkRFDecTGkjnySRfsjTKoUZFJdPn4nDwDZdztmZUU183E3GCoN8uA11E6CUx1R3h",
  "key18": "35U7QxVGTtWbNSjRwo8qvJXFotQxpbPK8ChECVJ6mBwYU6TkJvzHjcW2rS6Jiook6LxW2iorgkfR8YszFKhi3ykV",
  "key19": "h4RLLYt5dv3bNbAuJWcAeugW5vi11QfYGbQij2somjs3r1ZRmfE6R8C4TZJQCpaDX1RdQERFzHwMpPMFd9qgohK",
  "key20": "2qH4a1JkwAkDnQgHVn1VmrtuCinYZSgw2nTs5TWEvbk7b3gnn7gxtPPNmKgwA211zvG2o9GdHSvznnn6as7yidP5",
  "key21": "4ixzEkUYaV98pxh1yvaChvhjJ91UXD3Myk5LrpV5jZTTYWJz8pMurwDEXm84yLv47xzc3aLohoH7ADpM6QNvLurx",
  "key22": "5tVqiGqnJNB2khrzmo1qbsr24K9aGjv5BtxFv1i8wRuAkk3giwJquEMXaA5RBaP17rNegVtKDngCiSGYemUAMvYu",
  "key23": "2siYp8GxbZZSY1uZnJixEa7nejK1y9xa23usT1GC6JPPSTsbRSYrtnDRghk3eufYeJrkMggvySf6YeKwEN18Q8aP",
  "key24": "5fepUBYonRbJ8VsELSaro2YdqjyYRHEP8KcjaUNJYzfJKmZuwozVEGwFmjFNUrXxuCnAjSFBN1x5j25mNwJj5oTG",
  "key25": "3Mfm3Rwbj3WmxLtXBEDFvcN7UCF5cojHTWvZeXFCjHMccePcpnvDfEW5S1Wf7S8PH9kip7jmFCNpnEYKimLwRd4k",
  "key26": "3KBexSsYqn9SkV6ox5tBik1xndQbYy5PdSdd5b4Rebe4svQutDTXR7uf8B8vNNVfh8UruaiwLNKuKhHF5u772UgE",
  "key27": "2hMZehsJW2NQCyhaeAph9k1nhS5HV1uUtk3banvfGKKDdr8a3KdAR5kU35mX15CKian2xQ8GLPn2VwdC4QRsXeL1",
  "key28": "3vsRiWA4wiMHyM7HAMk6QhuXN2muDQQZ9aiudoZV1VkPsMdzo12GmaLijBrEDUV8WRwU1NX527PLTMK5X8e94wcr",
  "key29": "HuDVQNows2TwBHAvRKA9ZGTxiiLwjXMxbabxTQNSXoEMQyN1sNj4jZ29jKiPhGsoR34L1gCW2SJPX3VKUHHYfj9",
  "key30": "3Haz1MGsUy4x4dCNG6m9naqPNx5rN4MbCpcNNtCNR4uGectGxW3ePwiNchPA6AGguWXM54mitZyedzYJwcFyGyz1",
  "key31": "4ZUPccNwhgKXbQdrKasgvduFeV3GmqTtucW1UUXPugXDic6nRrruXA2yq3JRWWnEu96XZAapEZTmWYJyDisaGkJi",
  "key32": "3CNCJmFbQizsMgqrorFFc35sDW6hFC4Vr1Fv91FnptFrGd5HTLhMHSvUzA641M9bXrktXMJMSrKKfE8ajk8Y7GV6",
  "key33": "2wR1zbzpW2SQ4uX5cs5qdtLdpZLC1H8EEjof2DM8j6bcpQCgHHrbFYcgFLaM82fEu91yrxUuH9CdmJuQ8Rgjnz8p",
  "key34": "3RFC3pmBAFtHhuFupJQ83YPWHU1nzCj7kmyxLdN5exNSPxKaFHhJfDSEABwziRRry4pkJ9f5eFJbDGedJ93wJWJz",
  "key35": "XZG1bRMW5H2DBV5gSAbKUHqRazwAXctTp5SKHGA1fDDSzDThreoV6MivCFqLo32TvwzWegcT7PQ3VEpLEvWJ4ff",
  "key36": "2UM1CQ1FW7fNDheWcTa9uHv5K2WHWF3qz6z8rX9k2iDR3pSuk3K6MqHbxeYfucgpq3PVWB7EjarARuqabu6XbDUg",
  "key37": "4cM5PNN7G4iY5tQGQGdHknqYwQ7QdkQTb3DJi5PbmGzXVS4srteJrtF4Hd2aVVcanApbjjpRnds1x3Mb4cDGDmyo",
  "key38": "3UQi48dYEcwJ6Y7ZBSXPQcVUvEDGpE8kTt7HACaaNHww1yAyug9iZ5CqRC5FzXZZWF4JTbqGFuYetvvNrtDAuSHF",
  "key39": "5xWNuPzEzPfwQPf3k7WSbUq7cCdtDyF8Fa7fLXKqF7w5TcVNo2AT3x15KRMdAuBPGpG7ryjW21ibtRLNcoWJS8o8",
  "key40": "5aWTfkJwdGgMVcuGyeqeeRFHcrDkfmmE4a6ERTv3wfmn3eEKs8v2Gucp2GNrcuJiHQ5Adc3konRbUfiNBYGS9zUr",
  "key41": "NtqUsCzxwCN62gS66FLBjewRqVgokFzTxWiB6JqjbyQygMQrNPMha1oXeUxJikVsu85RoX2mWYG1ThdizH2dwgE",
  "key42": "2brqc7ZAgTJGF7qPiJjguh2Fdy6XhkaeZZxRsup31VpCFo5CepXQkeRrbE8b8ZefDSfNhAXN5HdT9xaL4yHt94i1",
  "key43": "4WCrQW7L1i17cAh72qAevfJD1CTYeVjzv9mb32B2kqvmJoes8rTWFGoUJHpq366dfXTLZLBsNXoEQ7VamhEH455U",
  "key44": "5GWSKGZ8H3ypEodzCCxnSoPxkmLEdnZt5AsmJaKKD6N4fDf5JhAEqZsPvmAFiqaX5RvEXMmuMaHxV1Ex1ko8zPE6"
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
