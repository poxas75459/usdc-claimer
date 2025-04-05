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
    "3DoW4KT7Syg1KXTuHVWvsLFcKPHuy5gWAVyY9HbchQxCM3o8invpPXoSf2aYRTqzTj6LrU8bNv5JtrMR7LKV5G93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTQ6VhFZpcMuw7bBveYzS7GKCX3NmRw6wFRrGxa8Fn4TEaEjxnP9fbzLsE9z1LBNFCAVZHGtqnn9nkduHkzZRVK",
  "key1": "5Q4Skk6vLHG2c6LJBfDt2dPhCH261UWCMFgXRwrGEJAm5CQFFL6qtRrhF5PPnHg3adnXTPv5DwxfCSzSK7bG6VX3",
  "key2": "61rfHtjCBamfkQNSuuMoh7qnJEEyeY5v7jcfdktfkLQzeJKKunLys37hE7zdRy4WnHfhxvHwGJ1QYsxf6yee9hpr",
  "key3": "4NDgGmS3xmAyKCKVYg1SjoL2LDRHszwcLhU6maGtParg2KCyVnRaidCMDeneSf6hWv4CtySqFMgMpqcGFFnBoghs",
  "key4": "5UA44hvfREtiFp7Pr7wM29feABqK1Xd3krzkCZdiZAnxMxH8VQcs6hi9xtuU7c4RxstfgbRHxYccJHiFxd5Hr2c9",
  "key5": "2UZpXmM9SrpuUBFzy4kjvikd4Tk6QRVXnGD2di3xZwvfgFPUYwFDfJk3Xq8p6vzqnMdkfphhMrwqGTHzZ6VbwM3Q",
  "key6": "5WP5dyagDoaJuTanJ3BW2DKa2pDBeJAsuR5ZENhR6eB9ebFxN4xsiRsu8ydBuuqoRZLn3YL2Cck4hCFus2U3LqRD",
  "key7": "64JTDxpPrAYZQZj39ktyKZxWMyRvfN4pFLVqZ37GdCk9QpfgqwCg6YRENZKr8b2ci3h1oVsP5N181ZkYhjVBFVPB",
  "key8": "KZPjuoC74DTxYHpq48gc2tvoZiaMBMftMU3tjb7gL8GG7xjiJcgxXDRPaJRuEQ62KPrKF383Q3EuVG4oHQJNfKM",
  "key9": "5FzyxmFXK3yYSTXfxsNQU42kvrHMoCnDmkczyTwbHxPjL6qi8CjwcmZM3EnFKxFULJ9mEBuaC8jFFnvtUmHg9riX",
  "key10": "4L96cCbw3nE28PqbxumNKnDhQQGAKBep9k1tbjhaTHhbatoaMaSWPSWWWjNjkagmtBo4vEYxDvY4mLeZxQEpDFHD",
  "key11": "5CeZuKuZmnhS5FCTGY7zvx2CrbAMTZZKB5y9huoZNbSPzuJW3STVbXX6kDdi3F4PqN9KYLiK8W5DoQZtAkNXUZUf",
  "key12": "48jYeXNpmjdfNA6chtKZfdfTKWUjaNf1WeaebSyVTgkMknPiAeGeS6AP739LxR17Hvu7DeiDJ5Lydxynq8sDxvww",
  "key13": "2tmfRc2xuVDEJQnstwWv7pkpJDwZisSqr2KJ6m5tqsBtrFBFqsu4PV49ondW77UsfggF4eEpB2mpB1mwDHiJrrd8",
  "key14": "3ZiwcGyDpQ4hJwPcEfRuBGPQfD6tFY87WMrzcBZCRpPZ8fXbDCP6i2bYf1Z1qt6anqzVmEDWjfNk4mgyEWyWuptv",
  "key15": "5AHBRsZchzx8c7Yz1pmm6p53KEdLQ4Jnepf1TXXjk7jeXcYmi7grdzvKuXudmFQvaZ8Cru968wM4YFoeKAErLZxs",
  "key16": "fjpNNYmggqgPi2o3CfsGidhjU3k34SJ2Mo39at2G4CKwxxdGAPHN9Me99yGywVry2cPYVcSQhJiXrcbwCgvCTz8",
  "key17": "3sDo4s1NN62fZ1LQjXf9esmEAm8CV5tqoR2Bnwi1TNmgc32BSsT6VKESWbtb9MLwU6Xd2RLdik2G2AxtgEyJ9qEu",
  "key18": "2HvajXTsJJcm4uiyg4qViaQao3Vz4gvp2qXUY7r1RAFcaM4YSwSpg3o9YZZzymcSEpMiSj9i3AnDBN6qLDsUH8WN",
  "key19": "3rT4cWXtKh6vVajQqoSxf2boo2SprM54vkByJoWnHFvtMmdPKpNo3VXmbbktoVVU4E4WX2nt8oXB1Q9ic8ZsP7Lx",
  "key20": "4Ec6wKCEfQhPhVE6YxvLi1L82kwGQwMjKSeEjBfner43XC4EBV23o86cyAGPz5rVjMo4wN1oQvkZYgoiecm3BX4K",
  "key21": "Doz1rT9bYXmKHciDWSPbV9o7t81CW6wdZn831vTJyveV6kjbG9YvFYXcQqdBXubjyDBU2JBSxWfirxf6bwmm6nJ",
  "key22": "3t6CFQJ7At6TdWrMmj9shcoG53PpRcoJijfXMZZ3wwaus5noQXjR5Wsb5oXTFSgEaZLDmbxmNKsxsGAwnXdTqFLb",
  "key23": "3G7qRa1U3g86QwmnYGfEqPDSARhBuGgmJRuCkEEcRCiMRunxqinj3iXL7hgVWqfmqaZBfBfy3RrMnre78pZGb7PB",
  "key24": "5MiFrJpcWu8zRAt9ZPsX29mAk6mEba3sMQXK6Z8ZuvsFegU3EDqK8ZnXEaL9zaK2fJaEPHqacyaiGRVZGm1AQdhy",
  "key25": "sta6qFXZD7KvREt4KWy7H2abeko4R5dFBNyKRwyoM6JjhbS25fN7SxJ8sbJmWehrzGDaYgQP6FgDLqmvFbBQRmM",
  "key26": "xVwp3jBFvpGvt5DjYzbsrGcTeG8S4PQMYUGMKP68UnFBb5nH3Zgp3CYPMAwfwawUPc82kAxifUhA4FAphUfz2bu",
  "key27": "47vK9hCKU5V4vvNa6gDZr6i29riPC3yC4QCZAvaA2i9cHtzj3Sf2ki5D9nrsq8MhrpcE6BPs2avg2UoqqXvrcyRQ",
  "key28": "29HYsnmJrogrWpdYp542EgxKhZUGgmRGv2f2JJmUPNvCb6PxJcWz6YzzgtkahVQuicMhNybcxXgm3pJdMSpL9Mpf",
  "key29": "4E98SXZA4o9gtqjoYjFT1yQhe7HkZ7gHYSTNFsVHrM8xJyJYbXtiRWdosppMPmatEsU2JfivrFj3f2n9KHwMBdgc",
  "key30": "gfeeFbNZTt3tmiz2S2opRbUmfKsPCCcHL1sbnHbeQuqib3VFNbe4sSV3WCBNHDpqMbdhsYQ9qLCX9VrTDP43UP7",
  "key31": "HHVxDQyZtSPP9yrTiFX9bT4VRHSwYk9bXXRHmP92W8pWGR4Efkcgua3z433WFh5AAn3VtkEqcH3iXNT9qL7us3K",
  "key32": "56tvySgDuSsTFQSQGJ2bTJh1Wh4KU35jiXpLEvascWSxWHFtsMhLpnCerQci1KXDk3LF5NRAQkGAmsHoomC4y3Zu",
  "key33": "dvKyAG4gSF7qRtMRXhh6NEBfJudvcwf4N4HBtHKwPSbGPfkrAaqv1EVyF5UZfSZrkUNzCCq3EBiNgZBGfZSoGp8",
  "key34": "97Y1aQHYGqvKAskLuZ1yAwd84oH9aHnQ6HfPAMd4jVQ3k1FmYnbtx85umq4U965aq1PVeDpRby7GqLXZ5s4r6Zf",
  "key35": "4Akf1XBQpCZ2ZfaTqQorb9ZuyjzWY2o4i8HFjfVWdwDWc5ZoMmSH9cYxwyWSWMbXH3HGjn2rktM4mz6ubdWDjjnu",
  "key36": "3XWTT6a24fyWDFfC4VZXQbyR1yD5T7SHQqz9zKM5NzRo8ozsHU1Z2kS3EKWYMHvKQZFNbVbd8Y4KGXwGJjM16Rhs",
  "key37": "61kviWG9yxZ8Qz2M787SXsrs6QYT8HhqQSUhnC8ckiAHDmqMGBkvo2zLnosvrE8PviuBi2RJym2G7ux2TBWTZJq1",
  "key38": "5Vj1nLuZ1SAPUk22GqPWELP3LqyLvCVuJyBjcy8RM2jePpozdSZ8UoZtTWt64aW4MeF1bkZugA6se3DtDXKtu767",
  "key39": "3rukzqsafDnuxc3QN5fjJLVBBSEFELdwZ2jTphkZqmgzwpRbqu5KetoAmLFkhDHGqtDYWRzTu6nnSELZ71vWUi9f",
  "key40": "5xum5Nwnsw9FA5i3rakmxs6feZ6zdY83PjYjmeKxBaKkx56wi7V9qvCLKooEAxCJuAbsfvtgwQkbfVMowETau8Pr",
  "key41": "331QWQi3C5HQGNz2oLBuyikMyyUT4PdGvGzMmfie8meczTc3MpJmyCpZkY5Bru2jeKUBbqmGKEJ46LyRAgSR4c3b",
  "key42": "5EUDw4yZtEJoYmNno1g3qeTG6Leuv2MFzeRyo4FofDy7sajbX5M6A2R4tQEd1WTMDzGXS4jAnWfVcr2JU8iQADyK",
  "key43": "49pkafRSRq8XrckaDsNppiFX16uzgBc8SLqqfGFkmXfkoH3kBtBa4SCmM6EGv4fozooxwYx9p1xTzEyWeZCgew38"
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
