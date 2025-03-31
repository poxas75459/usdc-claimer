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
    "39cQy1s8vp7uDfu78H3htZ9Lk3G9NxA5xESGYogb7rjgP3qLEXQZTt7tXarQVDtyRqwDRJ8g2FE77ZyhrB2a75C1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3qFbo7d6jZxK4izMhUx5FmV1RoUdY2ay2seyd3USpfiSk8rXK1U4X1onyZNYLtoSf4pnPUmH3AM1KBmSHnmXx3",
  "key1": "5ymt48xg2RsTTWjVUU4rUTPYr8g3EcgTR1Ezm5P8WMpxzFkrHCAehjX8HsDcScs13AnvPBw9rHTjMBhBPBoaGazN",
  "key2": "3rn4ditSj6CkyMQKYix8dHrg6HD8eauxGVTyAhdH9jZvG3joNnq1BhEwYBaQC2VHvzzFrhYJP1bZxTDovJK1MTEL",
  "key3": "5zpKivu8So934jWVxwhr9z4o7hia7hUJL7vTuvMEsmpasGKgpAvXy4G6YhsbRbp1Mxcay66FiK4QaSns788s31TC",
  "key4": "YfPVYo2cmxyR4hUXjqup6CBAoi728fqe2eP8J1VVuNucxYQQRQxDV4acBFnnZBtvYrMShAcB8kDdm1cQez7AEV1",
  "key5": "5bKywxjbWRh4XU21eGePTTrdJCQ1oJLc3LVavqy6KmNWqzz6N5TpvjyBFnBjnqxviWYE4RJZ4nr5bUhmLi4NXc3o",
  "key6": "2SJnPEfM5akStEBSjoivXEdDxssPSamL85SzaiK78nP6ttRtMWnHz9um4AudDB1jCYwmhbGpZocQMwbnvJuAe9Af",
  "key7": "5XbKM973LcdysjknyVTWJ1yZtXuGhkW3meQDfTJdFMY45r8R7KmM7Bksq1Lf9pdN6Tn15XTTBQwyxkKfY1gV2o91",
  "key8": "NNYgroxX1BJrGkeeU6FBsaTbjM1zB6M8ApZQyphRK3fkQKAK3hR9BzN3H6PXjNiEZwd4jvwEGihygUayBR6xewq",
  "key9": "3bp3hYwNFcETNHBmJ68qzkxDin2XfTd1sxvPbpxkkpRv2mRH6dxcV2cZcin3uaRALcTaPfKBsE73XsrSvD8KXfBm",
  "key10": "3NH3X9ygABHN8DLVsYQNJ9Gz5BxXfWQRjMFwixGghPUzLkaY86tWiRhjqRWYaxdTiuCZt1j6WhsSUdi8VSuvUFMm",
  "key11": "cE5wGtA7psTBxA2iQeXxJ9dwSrKspJ54rfbxRP5oCLVkERSCJ1mN1ACsGzggRtHYyBV5nYSwRi7LNKCDq2BB75P",
  "key12": "41B6ezYBpzy3kFU2nAaBxwvpCJ5mXRBmSR7BiHYbxmwyX9ckAqoAgjp5D44g8DL9tPJ9SnTZ4ceLLauwH2yGiHyA",
  "key13": "2hXjoPkEtYpPZHB6Zvqiq4NFa5pvVpVtQugo5PB3DGt4govVvwwB5yAG4oEg3D17fGKUkriQXbo2qyQGp4yh5trW",
  "key14": "2pEqgVLc7CaYauR9pZD1i6xC7sBHXMfrFowDQ7sw1dzxEWprRvLSasJUbuDJWocyLKYEtwMYwQLvBczFhLruhts7",
  "key15": "5EVEnJMxk6YQT9msrFdh9RNFa7f1zekkKWpBYztaNfxppRDsewCvj1WQAx6K1E1b4AigHWjHm2YXqohUzFrs5J2X",
  "key16": "2sfagH9nU7aEEf5cKHaThaP2Dai3pCyNonMRTCyaQZ9T2nF2KzkdYBh3RJ4Dw81wbHcKYMpyFkJkMzT37DYgfk12",
  "key17": "5isBMHTkScDmS5JcFvspaD5V5ATigaZYzsQ4k6fPtgb3j7emh3wouny8RPEszppTLYwmi2AcjkSXYYkYcC9HiWV6",
  "key18": "5BksHSqea77R66xKe2K78AxgMPtWahHEKZFeDeYmFG53Vdm9p39aNvGh8Tg2hZjZipc3VKypPnHadazxGdhHykQB",
  "key19": "MLer99dxpdqfqne5FJ3vWwyV9qvYp6XDyuQqTFrdrLxcHu6TCuLNRFANjpc1weM5vTFhwqMk4KGDwEWb1gZcBrp",
  "key20": "58GAmioMHGQZXHmj8FMuUHLWVB7vMGZRbyf6fnx5GYUk42JADxTPGXekWMvfBiyyW13jggA4Lw6XL9dURsLfrK81",
  "key21": "5uSwduTeMxiDbyY87gFEmMbAsBq8x1MELFGjXgg4mAx4YYPLtMBFsRmXUBNuoo34boigYwC2zMRbJnGhDtStmfsn",
  "key22": "4x2WtHhDUzMFYNL64Y9aEUDzeZnX9qzTLTrBu8QxXbNtPCxDhnQzhRB7sU7PZzNjNiUhKEcrznhx9GSxqf1jsWdE",
  "key23": "47Btz4zrb5NcUKJX9XLnxStGcyUgHemYup5cycsG1Xd4nQtomGZER9yit2rm3w5guzJUy8rD7C7fMiSVm9KH4UAu",
  "key24": "4o7Lx5EMrneDrw2LsXw79Tm1hjios9Sds7wnkpMccTRP15sK5JaUQYyV8qgY4YtVgMU5TXgmxRyjQQg8X9qJvDrE",
  "key25": "32HMsJFZPuX8Q1Zi75Rx9TQXuRuLKitAxrVCcfnePGFfu3pv79f34ttzcsKGKj7dCowYZebvCNhiivs6uBogEskL",
  "key26": "2CsUpu594x3mXKryCHBJGGPVy9nCMJrfxio2vQTfQVovrUjcG71HivVNDeqnftSvG3Gmk3LQyJCP4PB21Eif744X",
  "key27": "47XBTcoj5kRmKSnF1YQHaJrgDCouTikEh7tnqRi5z4ypbEimib3RZCTZFUQykhLRD6xmyGV1MswzbZrWexkbGr8V",
  "key28": "24PgrnAcEQdxhyqYz9FbriFLohn1TDZys916VkykTSW5EisbcW7Awn2Wey6LAX5EXEiUsjWhmL14TaDwE1QXs8dq",
  "key29": "36DZPKuK3oY49i6g6rztTXCVXyJjXvydhyEqtnyYE1C2uBSCp9VFT8F53mJJzBfceCVcGD6ucxGEz8uJtqcxTGyP",
  "key30": "4hxf5YByzaQZLVwk8Dd71jUUm4Z8kL2LN5qmCeYt5MXFPd7ST84HzciWNDE1dWQiqmmi4CQvC7ZzZWgEScYYPxRw",
  "key31": "2MhTSGiDTfF2qq8k789vQcZY4XsdYwa7pzohmokAoifcs9PfBR5yiWg1jrZ9u7C5tyXmA2Nzbj4uVsqWy1uREaz3",
  "key32": "2SgsRaTLoxHohUF16acGd7Kk6UgFHiD3utByovegHBzzBtJJ6hdvcpddT8bw39AognHL7jmAgMoijdNjHU8gSvf1",
  "key33": "5wJxJzLgCHXmjWzWpVxoeyzBbPBUNvwJ6R1xPc2cUYPtN9bjZoHJBzZqGHjhUnfcJqEbs8dURMbhmEA21isfPbVu",
  "key34": "2qpxRhqF3UcqnuS1gRCFwpRAzPMez4tAXeT5mV2MkPtei1H9vskdbiTh617WuTVv3WX9i31c2ReCfFwsxb2Ku1m2",
  "key35": "5JWFfizoqQcyLLGmhjuKMLzhQkVmdEZEpmyKqPGbVivxou9kMN7JsMvnzVrvmDdS2dFNG8DkoeXfCAzp8GqzbWim",
  "key36": "NKioUs7oHET7MJ3jviSaimjCWfqAGMktnfXEKXdLsHEMydZomuDKJLVn5KE2ThZmzT6PL6UJ7spR2ky86DFRQJG",
  "key37": "4nFgULH1g6N2qMky93xawsZxUkJ8f4juYpfa71WTu8XxyVs3om9g9k2Riqx4i7HxjwateG16HRzoKwWHphSEDpqC",
  "key38": "5HZxLNpZTePf6cKVwXyUV4rP8ccU4JRxsNKeg2eRY84BgiESyYgKMByFYpjXVvbwe3nKpndXnCUE3WrHmxDuwTWi",
  "key39": "3UEt7pTg8qceQDvhB4288UUQcrecYeZwEYhJ949QAUZPaRntuaVPahNu1EbSAJW1mKZKmMkhyFcaqrn5XYgHfuWE",
  "key40": "AfhCWHPckGKPC9DdunUYVZfJ2qwAzpj6AtLy8vVEwHZd1KfswW7juw2KzNVxUCTiQSs6s8PMsYsEdpskhy2PCze",
  "key41": "2SQUQYNDwUNpZ3sySKff52m8hTNL7xdX7Wow64PndbfyB7XKkaVXgBJgThgyR6iquF5DPoH6F9ati4Temnxg4LhN",
  "key42": "5C5vBwvYyWrRoWPKPvzGzFW7dt6P2U8dVNLN8gAB5rnnkvecbjxSWy4aqSSrWkZ6xPr76vc2B412h1iUzAmSXuf6",
  "key43": "4hxBU8ewrcyjTPnd92eZAuTu6DvDxxi1bFanyMQSKkHhFwFM83c7GM6GKW7gaB94yTBZwH43TobrCAtFyorBEChL",
  "key44": "M9Etggz3gtSbagguzufsKq3XEqfAxWBK6H86Yp49HKT2dQKsedWWd6UcEyzg4XpWE4SE12VsSGJWVjhvjW5Yj5V",
  "key45": "3dKTURtaq9xbEPX7jmCurZ9yJcsBYp86dQynXZLJY3rh9mk4hL1zfSio6H8C6hwrNwFtBGV9TxjGX7seCi1EPvxC",
  "key46": "4m6WD9BEQfoqiJc8nfKtpzS8tjFWKTgFAfaMCxLdnvmkEubrStL7tULMTcx8nnYewtCvA4wKvWYhdxgFch3LmF7j",
  "key47": "54c7qECNoz9wDiD1GZe7x9gZn5H1tiajTgiHu7wjJZnvpCNT1SSxMuQ4NCizBBPEaS8DoKRZgPA7KqbXAZYpztFo"
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
