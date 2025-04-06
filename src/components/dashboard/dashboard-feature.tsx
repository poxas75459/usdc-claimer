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
    "vSo12F7oAbJzi5kgA4ZuCW5sPT1XYfzXmcKkVNLc3LihaeBVAz1PgyZpvdQRx4uRQo4taAtLMJat46ZBFsn2A4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vbq4xTzEvaxt35RKKLrtWmDV1UXAUcy9YTZqWX6A78XnuwJaBESc9Ru3mASyKcnu8qvpdSai3xBD1kdnX4zcLC9",
  "key1": "4fZ6oXCy5R617zwg6v9ypiR3iF5bxPZbvmaRX1udZMbyhrf4h5oy7gd9oTEXRG32pnzoZdSQwh33pM8YgpR9bWnP",
  "key2": "4e6rMvbT2bqpFBLuTJBnaXrFmqHLZAm9iMniJ1VVz8Dhtmb3ai6zgz1pBz57mA4Q7cK8tYzP47cNokBqznHdT1sP",
  "key3": "2U4DvdaAihDBkNr4A1vPsCJ1saHjYB4UfmjKy4yEFXU5PU2iUnKhM8u4yRpEGBgkbLTUHVJZSojw6afGWxSBmaLc",
  "key4": "4yasvXHMhXrswXqWWZA4DNNAjSXgHbRVWmVKwvkRy6Hub8KuH91ThCjSWagk1NXDKEnBSa4LNYnDQ7QbtAP51PW3",
  "key5": "3xsYYS5VwSyPjrwKALdFWLbAoDMX7xFuHRExJa9Xi55zdMfBpWzAsfqocG4LmYcySYPkA3Lp9gMx9z34Q3adEbts",
  "key6": "3iKNLwVQY245tDDZvYS743Up7yzWbq52qvHSG1ZTZi8doWRofSKQ44EXgJKGoNfbPw8oPg1YHq8gGgZHjJasgKEj",
  "key7": "qAN5V7ch6nZP6YKszg8TqQCBTNTUMPqc2U3r1rmXLov9NpYHSbze5PuSPiDH3k1yuqSjSgTPF6BuAZfF8unAQJo",
  "key8": "5Ln5NBmSbQcL5VS8v1axWVWPNV2AL37ANXhSPpCcFm7MarGLvEWqwb99ppya2ibXtgvjWv9YRbvBkeCM5mz21K6W",
  "key9": "5wjmD53uUpn5pgQymTMnt11wQPnQjq1wXJAR6rJYWjcTynYALiPXdq3SAQ8nL73FjuVtfwapCcHLRcakTrjSbVmp",
  "key10": "3DDzv4kcxy6a8CD2S9vYCyfhDQ65PGZ3bYUoFxydjg6JZbqimgF6s1eXcxweamZJg7p64BqavG3WyW5KxvzehJhm",
  "key11": "3gWpoUPCU99KGaHz7j55hgvsFMqQVchZ9UDhgzj2erggjnSuNCYfLu7BvZhtHeMZA324T5AMzqdbtRVrheuHFfao",
  "key12": "2r7jcgdarMh7sk3faRCNiPJVFPL14C87M5rhtsNWFQXCEfiFRQAWXpJoRSQkieeWe4ovQeMmSMuSTxu6owztDMrz",
  "key13": "2cFVCBWEq1gVxRagMBuux7n1LjKe1Tc7FwGD14xGeZiBK83nYyq4CZQpA9QVV5QgzKS9yoSJVQ7sA3WYvgcxGFTh",
  "key14": "5geUnDmKqBkpFqqK4GCCWNpfeK2tAWMBdaJZsPu66CGhh3xcLE4UtNowNaWeYqmfHenuYPoUkxgbQYsbzsNVR6Tj",
  "key15": "3CY4oNkd9uhtKdyX3PkUifLFj2cgR1Wj3pSP5Lmfqq2V1AKnm2gxvrCC1EXumgdKzFM5v3oDwLC3FMTNG4yxb5HP",
  "key16": "2M9YU7pVKqWreJgvZQSqRADnVejcSkYFapeazoZ6gTyG2wm2HwSZ7xvig9zyUiHHaLkYZtP2gH7o9xkVZv85j1WR",
  "key17": "48BE9kaT7Z9791XEv7hBC4nDFZUNrmJDX9vgHbvUvg11zZyp7Xd5yF5AdFR8akVNiGeU6x76iGVqYoEqV35m6Vrs",
  "key18": "4sAiGUHJ4gdjj5tqwPBZegwh9hLLULTNWNkLq6Di34xrbppuGz3nJBfYGWM4RN95WD5fZ4RGWKwvQixMtngjXX4a",
  "key19": "41Xh9A1HRhSyN8AFvcuoD1QYP1ygm6aZ6Sa2EeibdfMFFiG2shq3VfmkczDE5y6c1CdVUvfuRYUwUiFX3sLpdUHn",
  "key20": "zWzEXPFejrRS4t1o6ePuyScs5BKGszUAH7KggFM4QiZSFv1bposaU9nVHAcgBvyuoft5W4qXMfG65XxdEB3sFKT",
  "key21": "4BZG5wrhCwJpbgU6EmhoPwASPjmtM6oh2oRX2UGt5DJWXgYwwZLDLzo4XSyiYhRFGLqNmSJzTqWy7r8b7sYnwQXs",
  "key22": "wwkKLbcXmPpXo7AjY3ivoQV16KqUyAovyBXDxgFwGc2qbaafknpYFJCDGT5A955FnJfa7qQ1zGcNYdDqX6L1Jfj",
  "key23": "2LaXbQwTrVioBV6fpi8joD86uDdoTsoecqBnGrLtumEqtEL9AjkKJmnYCgRrdRobjqhmKKA3B5q7zQpDeh6svpbE",
  "key24": "2ERf2gfvetTLM9VpaAuXBgy6d1d4cQSnPxKKodgoww1vBL6Zs3R6tC8eoUbAGSzSDHD93gmTSnwhkcJBeDemAZzU",
  "key25": "ZSmUeVNQDbWTDsmetDEciNNLmhEaNZFRG3NgzLMy2ZijzLAtMxGw2S7uVCpkYfCnnLar1PoNMHZQyJD2Lyyk2e8",
  "key26": "4iGMgiHet5Se8XpieT62uHGqvU9YmnVcVnSCi3RpbzK2azsr5PbACRnzWRyXMEBFq6BWtsfLN3cs9ovLsEP5pBeD",
  "key27": "2KXhHGGJk6HXAoaQx43JmLHJvf361vqRQWv739e1bWJYbZNnNZaPmuWpNjdDbNzwoeKA1qD21vaUtwBs6e2uiFwV",
  "key28": "4FyUTUfLiCGSEEHfyzp5QR1xUA729xPRzTBPfbmhCfqiTDy2tyQ1RM3q8q4c9qLJthdvq14a9R7FoCh4eWQD2hPr",
  "key29": "5kLRR1tTuabYiZHuwoyjr5GgKtL12C3spE5UQDBVxjtpv33YZYTFxVduQ6bY4G52NpSRQnJi29q81cQbUCvy3KmK",
  "key30": "65Ej6yoVLJaSnSFqEz8MdCUvi5io45EcVYdo2n4F1afzx43Lyq4WSWMDTTtrKEQhzZSJKiHy1yA2F3ZfvQXE6n5X",
  "key31": "3bU2QjrGSmbRE5imNV7PaxpbpG6WS91RxQCR611ZhmUgVZNbPPUPoVBVSecPKEwcWVtrJen4BKgv1KzsHJh3ku83",
  "key32": "3BdgbbxcREWr4gH2UoB8UMiTcC7Jmdz8Z8W46SVVpbAmg6V3fMVyFDPkM9pLtRY5YMwQVdNWQCkNSxaEpS4yZGzD",
  "key33": "2aZLodKpnNHFHyciwUhB9kNn7fef6pcMUKXn6LvxBsHrjsYBeTYP4zqS2Qajj2rmC9osuVPcH4VcoDhKLR1wNpq9",
  "key34": "46dKZE6ZNk8UFGwjwy11gairtaZEZ1e4apnYTUqKdxNEEvPNgDG6YFPZrStybDXuyVh6YtG2uVXtBTcXJdis3sjS",
  "key35": "5cwTWWjPeeX2R99BXwn2KmkwTD9VRFDv2LmH9PzySuKjU42arzt4hwKDgBKAr63vvSkrfHXJZiEiTVtg9ueuyAby",
  "key36": "544wX7EvDWVyZvVCj1B8Az5HKwWcHuXCaz3CTMv6QVC7tE5V1z5bd2hQxQsagQnE6MELctKadYCwNwAU1drGipDn",
  "key37": "2NbuFs6smorWKTfdSWz7gf3CZnxoAMzKXxvugs5DFKaPWe2k5DKAxbtEdXEiJLTW8LUEuCj9oZsGurDL5Kq47Z7A",
  "key38": "3eLeRCURTm821VgqkWVoUrK8fZANQfsk6fAvUC5swx4T721sd42Wh57oqLnd9m2DCb5jh6gRhzscdZqbmF1GU6Xr",
  "key39": "3dgtwDn8igK5wHXcraEUHrGZSRSBWjdHLpyZagnLEwnKXK7dLHyFXbjU4BiPp7TKssAentRjMMitFgJpf3wav644",
  "key40": "2AzjCxu83pJWBzwjmjuEdmvEKD3zZ4gxKRDc1tk8aCWSEZmXCg3TqfnLKNPUEz9dhNXNYTNjixKnrTzrbVKDjt9L",
  "key41": "5twkNh6iHB5xLAf92uQQXouJsQGHrvdqJVaA1Xt88DXGjzfqNsSwvDXPEdtUaCUYGJ8ng1iApBsaVUFHJWJPnBCZ",
  "key42": "27Jv9qxVWCCAStdiZnXdSvVW2RMwzc8v1Ztjbfm47Abewf6YLjy3PVrNJPowT141dTkrnVxfME6jzXDdpwQh7NrX",
  "key43": "2po1he7RE4aXxiTYUXP9gMXZME81D2MzdAqX5ywT2NLmDKpzATFRKsDequeZ2B3spWRZVATe9Lawn2zEbJ1VhnqN",
  "key44": "2R4oQC6wr9T5yrk3k1yHncyBJVZ1RB8A8yfeqRqg2veLMiY9PKVFtZqvweqVMDX3h8qDzCFfzooPCnjmTdN9RT3x",
  "key45": "ThjRDZbSskwHsRebjLdo7SkRzDf8AK3EtTD1ydXH5Y3tdLyqqCdSqa3WDXs4wefeWazB125n21NeW2TPfv16M3r",
  "key46": "4j71y4b212S7qDp9M4Vsf1e9pzxShn17BHbaE2oXmXqHEt9MUyd1kQJTru9Lipw95pEXd8WQqtW5JG2jTHzQmFrp",
  "key47": "54XTsjQpwbxpS2ygdmUbPjK1X4TgLX4uuvbCqVM8DfaBi67uYHbhgCk3CdcFJzvFE8X8SAEEznyCyhJ4LAJ7LCd"
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
