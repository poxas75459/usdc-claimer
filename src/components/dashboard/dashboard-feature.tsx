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
    "2yH1CoRUGdYYpALdnAiotFk2an1CXd6oRMiGB1dmirVj1YDX1Kx9WniYJ8aMhyPrZopS17SNxR67tyt16teG37MT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xDfaRhWe4Naa5fEMFkHHw1STtaV4YP36aVag75MTt5aQ7Y4vJZveQVFz7hPnMAfVhMUzGvoYBkHwPPSmtPgSnhU",
  "key1": "3LKkCVD1KYu3B4xeNp6dYfMyfTFgYYwxHF7ioVxfjCyp78oJ8aWBYyMQhx2Re2MKcPMu4ogonjWgHYQWFJiQJm5d",
  "key2": "3N9g8aME2kV5zxYLAos8AR61kRevb3mNov5SFR5Tt7rKmKveiUKHeDXjXwfNfZKzLUmJzLth84jcH9a9HUPhsJBT",
  "key3": "2UPaMhaQrCo7qqDE2txfrFtqMnJN2uL8zh9o29uXiVrhLCKcFBUkMTMUSzhYpg7qjxEyxgZri5yPpduc7B1Z75g8",
  "key4": "2hm6qbdeEFovmydW3dVUGyM3qNs7GZHLaaPCH8CnC2YQPxGGsVYtJL6eNv7cYbJP3aXChfGb2RWdczbtBCNEHCrT",
  "key5": "52wPNWakf8jTAqvAN1RxeKR9za1pkiH3FeMXcSauQg8Xt796vZheNsPTtY6XWFdN6LhAC3smB53C3CnKjXLs2S9F",
  "key6": "5AQPZqioCdtE8kzmoUEdrSQNZmK568RXZxgzBeX4TDPsPFRY49ouLXkNfVXGgx8epukFWCg2STbwGB1RS8C8bu7Q",
  "key7": "cJiSUQQWhUMcFayzEnKLDis6PqUA5DgK6VdNLoY5BLKdwAw43RwxevWVWHKcDHxAPiuABYGg3gHU6odV5j3byNC",
  "key8": "4vHeK7Mfa7ALdzKn89XeRK8bARhEdpieusVYZUxeCQsDgp1KnXWLa9wrgZVz9aUK5XTZ8JTGFrX6oLBZJVAmrVuP",
  "key9": "27PWdEH5tyqKBCNK9B6rHpnXX9X3RfWKk2r4vMtCLDuceteAuHhS718nToYWQdoZWrQXxKQJdwq6BKoeP7zhXuYD",
  "key10": "5admu5dHuRJayYRTAhjEMcKDFPyxpeYd9udG2bkbdByFcAAcSuux6o9duxr87CZ2VPTuBaLNoCscbxSTSJxBaDB2",
  "key11": "4LKqGBRnAKTqWtZZJnoa81S8ev9EjkwRR5wXHjhau1s5NX3XV7QvzWXxz5KgJB4SqvPQ3nB157tJC8Yy52v3Njsu",
  "key12": "3W98hRaHxFhvsWGo4hpkWCLTkfRmLzmdZJksLd51yt2NyB6XNF4Sx37Rfu9d2ntnYhoechtckCz1Vz3FqBoRgcqN",
  "key13": "4B9dVTzHe7VCeyi16yM8fn2M6CfkWqNCsAXPtxKJx3WJHKu2phSnPj3bsd79zr3D5qxFE92LLYNvbL9Gq4VFhULh",
  "key14": "8YPNudiKmquSjdEur73U5FM3er2M9mSDur9u6ZbupfkfLEURyVgvfZ4Ube3AQLbN6EpwfSeJq9wyXd2o3L8Fntq",
  "key15": "PyqoSbERRPBHUk1wJLQEXNYqKKKGe3CKA4osKr9bnSCBD6PqX83ZxmR9ejPNrC3otfoREJvf29u7GNSTdP4MwFM",
  "key16": "29ACas4EHmLdyZCYswK98STD8noSNnYnPw6TtEjqxUjjnDyTBSUjXruR2WaSGNGTJgZJFGLpVUP67yBn9FJJUgxy",
  "key17": "5N1s2ZbsmS1VKJJGmLbSz32KXp9qet3WPRBzepPkJJEay9xGnynTVCzib32hr2dUQKizaxpS3nPYThQH14LvXVi6",
  "key18": "4BhVpss6wuy6LGcV9qjoZNhsejDEkpKrb6h82kMrHUHQFuDPbNUjs7pyzR4VrxAukr8WwbVrGoyY7hJVDdXhRUPh",
  "key19": "2U33cc3L97cpsZXSvgGE2xka9dM1ZLLCzYYSF9wyX28Q1GptkKPM5DfPtS6Fomxp1QGkv4TBPbds9kSoYtHLoeDm",
  "key20": "gQQTCSqEqu8D3Wzq9BZmEZG9PjkpamSwu1kX8pSRFPnc7pE8BtiST93CJ8qQY7jQ9BZVoZJkGhnkkcyV54193WU",
  "key21": "5KkH3jLELUvDW3u8AzbAibgw7aSZhfyKcc4u2GfX631ov1RnfbxLCBd68mnF9MeZSc6iqGHg5rSFQkrCNzCa5AbN",
  "key22": "46mt7HGNda7W7fvzK9NvaLXZ7UgQNh2rDqpMQCP83JP1gf7tsL8neYXh8wZtS1ZQQuPqjK83Ch38ewaJQEtoXj1r",
  "key23": "3EDC1dKyYQYPn3BM3vkSatPUAp7wTT98Wgu1V63Farm6GMm3NJGSoMWtfnJ56PE5SKf5eX2zw1s32avrMVCQwbdX",
  "key24": "4Sfouv5zWoWTVWuvZQ4ChAbf87WKa5f6PViM2QsrXyywrTFTtWDM8DFmdXZppJJCWMxya5A4FMh7Y6XooriTGaGM",
  "key25": "3jfAiXSXAadgthXUCzPC4Y9V4r9EWjCbS3Xr518U22DwU14mhE52xSWLP78eY4TC17mFDoiSLWVNTDCLPV9XcxcG",
  "key26": "5B4cbZsY3hBfQUw1yynTtKvNd9L9pZL54d245wF6HuEo22rG4ecsf7y7D412AyXq1oGYNHBUfQySeycqEyGDgtUR",
  "key27": "4ivXpP3xwbkmdGzP43siyF47jqSV7xuWPKTVSzsvS7YVRkCrvusqDVYwRTt2Uuz3agu9SiySswVaPDkjsqNNJyCJ",
  "key28": "4bve8uPwuvT6AKNw7Ht1ULrNEBirod6SSSrmqvXpK2hmu1mezhCiDoVxbMFhXbwcRDuG37biY1WqGkLKoXkhF4qk",
  "key29": "HuhNQPZfXYkR2wnqfoSCBDWgEx4FxdisFsTN53dQaiAGsCQbooeeJTqeBKbKKLMMXnuTnB5W2yYcuv29oGNXAHN",
  "key30": "2k9SejDfjg1MsF5LDkTZfNaV3nudAXBUPByFrvVaJMqqRFX848yLphB4ov64fo83SzC2EeLvRqrA9GutTvTUWnno",
  "key31": "7H3QXxwNL2M9x1z2FJ4MPXMTrGgzvb1mTXEdwsJh3xKpRtJ15Rf1ru4wp1N1ZnEdy5d7gLWu2oiykzdAPQgRCcp",
  "key32": "5wySWioxDj7taZaRxforFtRLgXqq4yLVwC9YN7bzdo5Sr2RG9Fx11Q14wxw1sBo62f5zckYyoiE5jTULhFT5uFj2",
  "key33": "3McCsXAgZ18yZoDAwvoPDzZvDHrympAggWjBQTh8coVExmkbXREHtkkJVAuVNn6ftgvWAc5ESeoMBmPF1o6P2H4V",
  "key34": "2rWRNPvuYfqBU2wwCpK5A22nYnCXwfdW4uJRK3dhsvmPfmbW6uLpgRAWAoZ6Wi2aRSrGNyhjRHtsjTcMYCpcdgZm"
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
