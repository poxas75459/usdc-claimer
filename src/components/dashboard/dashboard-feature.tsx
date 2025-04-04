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
    "3UFVWqifN4fvJHMZRGcvRS72GNPiWA5r4REdymoqbVgEm23JoHMcHPkXkTym2mGTmL3gF71mDf2niwWsiQR6CKHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADKmGt2xbD4dj5APDSSg6b6ghmSicPdX2Ub44yJuc5ToaEBPnyM29Xa7K5zeFAPHyjKTH5i6VokgxCDWhkbfTFM",
  "key1": "4sZCLrX4sjcNGzCgT6hATuy3Fj6wEcSwwuE3yPc7aeoCyRfxeqKYm5wZp9VF4L7oVwKKQJqfAbbThG4k13ngRpYw",
  "key2": "3955d9Tk6AeeSM44ad31L36JEJALbq8ToPuRdKyr7T6xVkmY4Y5RFJ2yqVcXfqdGLd82EDdLiZESbd6yhoWWqL6V",
  "key3": "3KBKq6cfjQJEiyfrCN46Pm414Ybcncbnk5Pi2rzYbk1hFHhFfg4xJYVXCdRHNnQ1vmQHsBhdJ4KdKyDMUmN9gLRg",
  "key4": "XEwqAAk2sPvnLmqeB2uZj1h5cnDbT6SE4CEYS4rHN2YGppe5pin513B2tKtsgYwi9tyvAAkB64LPRJmhKaRyB3U",
  "key5": "3CSYotQq5UzzPSpjYxz4EPyVKAVwsfP2W8XxH7vkUcuMqbtoNCkrazwKBoA5JEqRj9gGDTK1CyBhr8DdkVjKi4cx",
  "key6": "4DeW6W2hFfZgnRPnHr3qnXZaW9qjJ88YKn15n9UrLiGURPRej3MF9LF9wXeXyCe8mhNrPBnsGGuVDMjZSUDHAJzU",
  "key7": "4utyNL7wttiofJH8poiWugGMS5FtH6tWwTn29qSCniRMDWrPjawqBLs56XBV9DzaTZTExKm6W4L4siLKHa2SR39W",
  "key8": "3bRJJmxH9mMt23vdFZA1GXvWk1FmzGFjgjG7sqEkHFMtr5d2ayyxsehucA2K4MyxVDPosKttUhzr9fbcU514V6N6",
  "key9": "3DX62hkZ2LjWPy6Gx3yQJJwjo4QvqjsxzpyBn9hrGHNqXt7sg6GfQpSFmEDtazRBH9hSxU4hyagqg7eq6GjgnzG",
  "key10": "4df7BHNpCot7aYfUfjRnvCCWxGwhtgJBqhHvx6hrveQbFJ5qFmoa4PszzuKYCeGDgQ3hijmpwPxNtz893i4pKtxa",
  "key11": "4zCCBDSZ9E5eppZDbofkdQxZW416oXM2dPtELMLaMtGp5MaesMTVoc37K18GWmb2FcNHhv1UB6WgKnnL7E5u8NDK",
  "key12": "4UJmAXR4MYsSnym5npRLEUc5wQx8LRqHH7C8BbrJdaCvbprqFnQzRieju13DCYA3Z8vBZDzru7FcLfmRCwrZocTf",
  "key13": "rMePf3raMsbZyxK4GeWPYs5d6PY5GKJyeGPAMRwp3h3GXSZ6jHfaocsWuCJJLBVbgv8gbGFgd1Zs3zstrGNyYr8",
  "key14": "DJtMPXwZmQRJiDcM6jRQCRGuQ596tdtQK67bYdamqHDQULP39ZhXEeGweyWLToCvzkaJ3qm6krs6LkNevUZaUFV",
  "key15": "xCQy88UT6ZWrBWxC8SnrWRPVXesoAW2XKQN8wD77ZepjC37JqUK7aXXEcpfQdpuQphFCwGHKf5UUycNZHH7qb8c",
  "key16": "3DHVSZr4mv4j9nRzVTBn4WTun8WSZgo8d1CQTfLybEQf9SD4xaioZMWSSUT9CPFN7cPEBdtJqGuqd3magQDuaEV",
  "key17": "5HJTqAEKBfRDCYistq1sQwhqRXoNDbq7xrycPTir8djYDdWL7sX7LCt7GCDA4yFModC5b4NybgGdisU2CNHRiVi",
  "key18": "4QDGtk2m9SavSxt8BT67RemSCEGcesP1s7JeqdfzbnMF1rymQJ4KDmHKXyMxaJYqY86KbyXv1F1YARgswah7qgxg",
  "key19": "CLgYjQ1sKa2Pwzg8vkAT7u9BXzxW9pKaEsXrj5aRf5xrEHREC3RPYBw1p1C6qVvzEhxAnS14hC7FV1fSZzhAMx3",
  "key20": "3u34KcBR7Bt5PgATErzh468T8Uhbf8VCzvUNUUpDTUCnuuqBaVCwQSBcqNawDoWP4WwwrNs1QD7LedtVn36gHtxU",
  "key21": "5aJxTECoLsXurgz1nsHArYhs23ScghoXjCiEzUua5c8uNecCCnsYutvKusfXhBZXDSyCoxCcqpkjahH1yPb99RQA",
  "key22": "2zumTN4gqjg47xXCsxt8wUtPKtJuPDMhA491ATDt1eqYz2EhdWkhXVEJcKKUMrG3BJ4MpG8RKJ9q158cu2tNRDnj",
  "key23": "4jnAKKNPmUYqv13jKiS18H9P1PmqKdHWtCsVd378VRPNHg9T3VYZxn3qJQakmZ2Ec5CNRqXnW3KUVyBVRUoYsfY7",
  "key24": "3Bn4HVmyA36G3EDVyRSnhABTimgByn4zjqf1SnkuTQggydQ4mms4Rjsmt5hyC8crzzGKa1c4JFZFsLLsm2tfLNKA",
  "key25": "5QiBgmFQ52mQN7heA4JZG3jGaDzpTGZBQR2ddTWwpamdJ8VmyCxKxQiu4UdxRA7XcPfRmSdq4FYEjJBuhmtfnJMh",
  "key26": "2w9qc7PrWLiENx2syiZtDUQ1X7az1EfbFzBL2PAB7uhTAqFpEN5goxkrgiW5TVpd3e3fhm2zinzaRwL4uftKSAaK",
  "key27": "5chzJWQSTbqCXVqhZJ6Vpqgx8qvTysB3Qk7Yq2zkRoSaB545eWJyF9eQdZeJcb6L9gXLy74LUTYd5Dc2KJ5EKo1v",
  "key28": "4CTtgCvMfcc2CHEd3EHVJR9X4dC4zcN2GRq3UHbzx6fy5jNm9yhWrw7ccrT9zogRZCcm9kacArv8oT3htY7ABgL4",
  "key29": "4NguHVJyiHpRe9PLgJbp1bhRdhw2wiHV6JAHZ8QLzKJe2pH58qXBcctsGstW8QQV3b7KDRybZkztPJrhRx9YULZ9",
  "key30": "rkJzEXhPAU4fEwiv1qjpPM9zmFfdwAVaLYZGg4pqws4wzyAapQeBd9fZmLQ3FrgGrVPcViWvh555bmaRaJzXd3N",
  "key31": "xwLq4LPbr9VcEHyDGYJDkWTubizQ4jSnQux9qmcBtLSMKaNxR1s3RsQ4VyEdspY7MGYX3UMA95d1iwbvEf8vn6o",
  "key32": "2wbQmcjLXeJKp7fHhyy9PoXhW7TW7vLHJdSi7zq9yxD8tWVydiscCoUE94BwuCckcj99WPSU378JaM7qGquuFkiR",
  "key33": "3PGPMZ2GJvFFE4PG1yMs6ZjAZTccHjEEgVE4W5fTTfSJCwheBhXhetzzwhi8Jm6jzzjhKANB34c2KSfXmyeR7Mv",
  "key34": "2LjP9jBYS1R9Sfnrinusq3fJJY8zR49ykA5pnLHxZqmUwRfYJ58X19m4g9G7UGsE6wxiodxp5EsEfKwb6EymzkJA",
  "key35": "2zPKqwjnqDXUewTeqsBBNMHSHYKo4dTzWhbTYNA54eJ8Z1eX7FMbqTPuutgfXWPgKMtc3Q9GBpERqvQba8tjpFzG",
  "key36": "4sPK1b4A5mGxMSypSBD5xJ577K1StrsEPBHTVzjQQ8bPwFs8Pv6PiSnbNpcE2q4TvU3EqQGhzkpGJ5WGcab9MzPu",
  "key37": "XPZNozf7tqBVUR96KsFpnJkbk5VJbE6xw5DJvoi7WFo6EANV8iEGkqHPw9RGAHH1YD4zH8YzbtRJatXqDaHwt7A",
  "key38": "2ZZt51rcWxYGRZB9AM3eJYbgQSb4EMvLrdEpSE2ur1a4v5sP1Fo2ED2wHN3TU67qUdMEUs617tWZUrM1dJFXFGnX",
  "key39": "4AdnSRazJKCzwTakFsYvtub1BZYY4zMyLQEBnmWBfMbcgXzrkbSWsUEzwx8t1v1h4H69i85W3gUVvved9nAa9Aac",
  "key40": "5Roh83krvxiVG4zccJE8rGg8nSFU91kgBdV7Y8bBsjaZGd9EUV69VMUZGKaeymc4qBJC9agKUy5xpkWCX4D1fYEk",
  "key41": "4811D8y9QzorZB57jx5qyhdLnvvD5UZHLrDVkgEog1eJYAMYNGcFcCjnW7s7HE92SRoohjArGqQFQpzZiGFLump6",
  "key42": "2wvqDdgWo7KhTD4Nn71YLyxcg6y8gMDNtRVgKpjFLHDQLxW2sCB3T4WHBFg88fk2doCpBCH4bkwR7CbcmbHiCfNV"
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
