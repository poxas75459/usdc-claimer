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
    "65JkD1yUTYA4zbiQYXnSLfpUE3n4YXc9FzjK8udSL1BA4afZ7caiokdKwooc5U5wFNCHG3sF6CnM3uDAztnDUjv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKwvi1xzHboBiXdXEgAzVCkcAAZdaFWgjmrhnsX8TxQfM1d8DLPUSefNx9qPPW2D5bkRLvk7Ad3ojTMSRf93JXv",
  "key1": "4UezyRqe7e5cxhy2zwbMKa9tJHxKcNMz9tfZfR9HbFVwFiGd6in2inFfGosKP1dBnJeKjyaWW5B8SiT6i6DUqDV1",
  "key2": "5HhB1Yh3tNSgw4AJvYJ5L4R5NKVyxsMFSHZftDcVS3CWxsT4wk6tHWHDKpZX2xa2Ac3YMAwdXH4cKKAwydWZGMXu",
  "key3": "2eLkeSgeE99SKTuNpXb48uyG861rJ2R88sMzDgo9kPi58GiWNJ4mPD1SeCCpu8HiB29gwaH4HkBoyZ9uaeVExUQ2",
  "key4": "2XeeEo3bU2DRGRzeWGNRLicQjABgnWEA6PmvgPwuL6EgugdMPfZrMwBbFnyWP9CSRqgF5qspxKuU8auKtTd4Njkt",
  "key5": "UgX3Bd9iMRhNx3Qv3BPSpngZoC4RCe1qNHAYcSpQZS5wDwLbn5WdmJaaN1twamKg1oQNiMmrGazUKZKbMrgUknr",
  "key6": "2ED1AkmXbLmC3891acm7xkiAMU4QL14qszDA2DhdoEymYVphzCytuFnWDFN46qQwFt9TU4cZuoetThnDvFEmdvXH",
  "key7": "21gsXfj5A6pSi341V2AyeSvsCKdfjbZ5szoggUnqXvZE1FKzMsFJsRqUNtMLJpsTQQNKV62S9NcjWyHP8ufEdAit",
  "key8": "5Ts4qJtfAHMb93pEemFv8FbihxR1XZmWLGwWjTn8KXUpDZgzPBU5tbZGA9M5TFnGiUXdrmdsWJRcpgoCEr81t1v1",
  "key9": "3qSNT4hneS2foZN23EXZtRYgBBHAquPoNrXni6xyvZPfbWWb9Ne6NXtMBazjjjTNZuEyp23YqYVmBhY6yQExjTSY",
  "key10": "8eXDdJD6yTTc9dZsKWwrnL6uJx3Nt5rvh8NaXtP3yq16waHS42f9hB94Rfyt3vwztaTR2QKHZouVtwH5Ncb81oP",
  "key11": "2FSEzBXepeLXYLptnohC3TwvWPTLLAGBKJoga1YUYZt3c4UkVbd1LE4QV8JfpVoDuLezykD1WDbZPCkrvKsECVv2",
  "key12": "3aFq7KKfGmcLmf8zqiuB8Pow1LTzb6vZYHAYjLqb69BZTLHAK55RYUiFbbU9bVVAJ1aCv4yVVhS6KjqvydcsLWc8",
  "key13": "6CjA7V9ZpiF6m6UPF8foxCM6LcTQnu2wwjTFmbE18Z7m1sEqC3783J1DYT6Wjm59sN4yFeZadJixhK9j3EshtEw",
  "key14": "5kB3Tqpqww6tAn5RCKWkf4PsiPqjXnemqQqyCEtzAmfrxuwUzzgf71cxYDv7gcRvqL98LaP3AxrQcJTsg71EuziR",
  "key15": "3QUqANrzWqpnDfaqybqwbJnuX1MJ3TQBfR8EwifPaA17qwYocxcY8JuNTpuJBBJNyJE13FHJGKnkjkS69CMwcaXM",
  "key16": "4LuVWNKmNBJHLT8FKqhYUjbhoN1BKhTrgXGje1TK7h7AEJJh7X6ToTX4D8C8k8ELVVMycVTeCjeo1RtuVFzJZ42i",
  "key17": "3inAT9hx5wtNQEfQYx8Pmcp27jWMZgJpA5SDRNwHvCqgjJtinitR557KmNVDRztJq5vUGvApivgcfT717y13cwGv",
  "key18": "5XtTaGKzfmsBhUqsCDHfMBCSW6XFBmAjaW3UhgbwKvY9xvznFWs92Ydd5LHz8W94dtxf5aUCAZ9SWqfJxTvXA1zd",
  "key19": "3qLQFogqmLtFmHqmU8QnLn2QUmhBQ9LSRxHgKBX4LmFkyzZFHeqB7ZaTHVcuFrfNejf543VpJ2WL7ppPsa7Tkqbm",
  "key20": "BEVshaSn9eRycEcFc2G4t2aMW9A5kTWP61BCWzvexjd6KdxZhstM5PCdZ1EyFepwyS1uoEFiZd2YZAZ5z9uTLwh",
  "key21": "3rKV6gPEuyvsJv23eZQQDZL4uvrHhtajgTagNyy7gX16xz9tFAEbEznQQSNBj2mmofKM93pFLr5CktNed7TuheYu",
  "key22": "5cuhhvkmPQHwoE9XZ9mhnA98pDsBv8xf45bzkfHquxcHWEpLehJoegrpuXUznWKn2d55PraWYQ7pmmMkuJD8iJxf",
  "key23": "5vXrNYfPvrpTaMG2yxVNZokbyS4kzoVKppAGAH4XyZoYrLS8S6FpryExZeBiNWdCHQ8JECzH4QqyFKD5o8oHMkFN",
  "key24": "PrnHrmPLgbR1CLKdV8py5dSmSprgY6drYRw1L9ohG4MhUtQK2fd7wXoWoZNZCfDtA4PdavbiPConwY1fxDFHoCR",
  "key25": "2cpQ8dDCbBsfCizviNmHyv6SKUZuM5FQsXUX1NZZNUkyYyQu8gX136mFEjAm3oSn6JWhWrpYKuasbizMCcnCmVn3",
  "key26": "MaHhJE3e1UT1LUW2dQG5N7u8g5Yq5z94HYwknx6jpeshRbzivQ1Wfy2s6VYDTAKhC7Hm31bWxdgvdwMyEMkM7Wa",
  "key27": "3tHMVdcFv1sH49VPzHnDsv66J1hhfDA8rYJTdEovhmrD2s6XbqtMY51UUVBYXYv4Lf7aLSeEKAkgEH8R2TE26sER",
  "key28": "eu4bmwYcWCE6haPFVttYq4MsVNEnFYv63JrR6RavY546voCG9aniH7Qua3YqKsoGtPKAvgrzk96Ct6p2gQDEUW3",
  "key29": "4j6WVkZRP8mZ8Ja8aiSojKD6X2h1wjx4T46MSCW83pSejyhsPVkijt4mts1KZfboZByP4U6sbCQvPKLohBgsNYZ1",
  "key30": "5XgaMEJNm96kMCWiZKnSAb9PBwFeL7eerFkYTaxHZ7ws3cyVApZiAQ4krUZ6bHocJqCf6zMXdJCGxY4bJ7PP3M4h",
  "key31": "24jLQQ6y3EqjdU9rRLGh7nU3tfmzmQ1tcUG6R6yxpZdJ1wGcYa7yvUjuv7ZTVbg4BMCMP7X3XPoLNSuw88ew76Cm",
  "key32": "eJqWDxVxCyXhDjx1vugdbVXArWawyHqLQ1Sbd1gmFcEDvbwdy7HBhZZmRsXvVSBmJ3DrgCBhHsg5qGZAUqpvLtp",
  "key33": "3s5xTxRTgwvwH1vHCgxDtKzVpUmX9beqJEo7xFQVxZnUHdKPLCNFSLzj9SFVbBA5TWwU3HRvHU2khctxh6NZJUCd",
  "key34": "3W27YNXgKFx2ryZZ4Xqp2FJhnFzgTtCK1zhdTkjnEs3VNHLZjDKgpSfgmf293ZMoPMmSEm8eopPJ2ciySPvr1txK",
  "key35": "2vaQfdYxVpFic3DEWvHowAL6ucnFzbvuALZbo8DuEf6899CPtynrCKgA4cQbSLTZvaireuXAz7Aaj2NN9aC4KEpp",
  "key36": "3bSW6K9tm9mBxSe8N7rb6XJcuWVaToeF4hFeChhQLcLC2zZcAXTGk6vGUS5BmAkNsFayXpbVAKUzrjSu6wLCBJR",
  "key37": "2xNLnZkEknY3oMbB84W13umSUkajGhwA9XN4KVghPReuTKjMDS6fDtTWTpPQdg4E5hTKzzrtgb6i2aBhsnY8PnNn",
  "key38": "488oxdYfiwC1dbBZnpQM5FDMKPu9bs1vafidG8JtCBEBtG89cojQAftUjoqeuNPwsLBPEAX3XAaK44rz4e52hQ66",
  "key39": "5yMaU4gCdoy7YJpB7AHy4bWHLZ1nA97YyfQpRwUE6BheE74n4QKr7Zj4rNUe21n4jrvBxwb3Z31drZuntBQJSEnN",
  "key40": "5876C8dbZL8D2GsHyvDxGxm7Rf9gY1dbVukJCxksaR5EvDVZYyunsiQqACiPfzCAitNZShR2TwL3zqRdvNa9aXpV"
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
