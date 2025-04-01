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
    "JXTM1BZFpnVqxsJWiADFrSpzcpsbcitz1u6gFN2LvnwJYjFBVs6yMvbUdm9FhUKntT69quErA6ERVvHZzkMGvRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCT9EvzATQsiYvSRD3KL8CEAMi2b41cbUNcUZdncmwV9vAagyJRRubCcCPMmHqdwfNpxVPWUD9zTbiDsPAUgRhK",
  "key1": "5Q6Vh7SjfMxYpej5StMZdDiE68QKoKsrDgLjP5enWbKW8J2rTufYEfFVGsyVXCpQPkEKFLyrYiQBZjgnmzWoBn5m",
  "key2": "3kE27nWzfd3rBWsjQgS4kmmMpyYmFDA9cJNVRaWSV4Bn7SgQqJE5E9U8kvnb3jZSQW9u441WdPC9fsCBM577yTYf",
  "key3": "4usMZXAuUCFRZvb4nUPiozo1u2uxZDvPdcXAEbjxmgiWqAnZqsKSrXu3xmTcRJD1z2fRcnscNGm4TXxsuQnHZGLF",
  "key4": "5PyHPHoopvMixGgK7U2ehkkkfN3PfFHv6Bm5VdG3PyqyddmaxAE86jw5gNYDratv8og6CbVfCTaqHpSHLpjhNKHQ",
  "key5": "3HtStwyZu5gpqr7tbcQBem7QRdWyXtj6yoXudYV1ZQyZ5Y6sJvc4FDQQP76iDmQjkq47VisMBSJBuoeJ6Fgy78op",
  "key6": "5RAM3F5UHBzGiquTc8ZKe2o2DrEsk8s5M2pkoX1MqkVMX5cPU9G5xRtYU48rfXu4MyhhpHrM7ku4iwa6c9AoLG1N",
  "key7": "4pchhnvR78ED1jJnjqK9Y1vtcq5cgx1qKRG14rac9uALZ3gXqwzLT5uqjTEtMxkUuSdqd7ZzgnLbyBBsmPiwbBUH",
  "key8": "5igmYGxFXJeohe5zt63fbpz6ZZxBohgC2iHY3ZEKiyDHgStLqVdvxrZwC55pRhWBWAcZmJDwqxoFBKnbLJCFRDQy",
  "key9": "5GCJKvQBmPEbQCz9SwwBGCSxREbGDpV6P49k4mFJGDuqse8BCS5PhopPenYzpQtKHX8kqsqNVfww4zo9LuYsA2hU",
  "key10": "2ruidjYXqm2RnrppDv1FEoQNFFUZ4rEntdgAhyXaNUsn3WxRQrkFbDZF21skLkFrEzNvsL6o4VU21stFX12NEkDj",
  "key11": "2C8gZFXcfjDwsqoh4ztafz42rmvJ5RLKAF3ZSsDaL4SCPFizAChGiZ8L5tY8vbqe4LSAJamTrosCT2zZSALQssuH",
  "key12": "5irCXNSugbL4uDpNP3LpHNrHimyDACsKSPYCZ5oFw4i4R8cHjKKucExG7iZDz7NKyMooxfaMvRRpfyhZgCQEAhEJ",
  "key13": "5Bu41XmVKKYqnCW79aCmaHHXmsVXvQrN7XW86PN5UccJ5Xepx2AHuEogQfH63Gzxuqb6AGDJCYyHfSPBfTvaPaCH",
  "key14": "5smePP9hQmTT76whzsf7pbxbBN6NHMnBDcXr17HqTXRmXyHFmthFh822wzun45eAxyTaW8np6T1655AYfqQXitar",
  "key15": "2TCy4cdiCLdWvsWZ9L7GGwW7UwSf1DWCmkokbVcpmvgvCAq7TLLawx9oHtC1gkSfGNV1uQg4RHggD4hoyFP6EKjc",
  "key16": "1gQuxCR9D6b8MBcFJuHpbMvi25gNp2ktAnsnkYxDfCTFLcMZkJ93nRmzg7RKATHwCMQ8eFqyjqsNzo2LyNi2FYh",
  "key17": "2ygfKdmhJ4TjE9FF2KUmP4t42qNUaMrzXZM4W81S2j2k2zUS82iGuhmWL1qdB6yVVo4ASu9Bf88TjSWdRf4PhiJo",
  "key18": "3gxAJMkn8gmiEzHDVxqTBs4sefL4UyS86Tm73M3u2sqep2XmsUh1W5ZLcbw86Qdg8fw2USDSsPbRmpifG1CUU7Gi",
  "key19": "2PkL7AzHpwDHTkubmhsuTNVgYt59bGzW3f7a5Mb1SkAkGQqww5HaFca9PiwELqdcYdiMPqVs58hZyeh6pH887YVL",
  "key20": "24DckxjenNuEkAXwqm2FxaimSBE5dbTrHJJe7AbVBvQ6y1AN26RJM6GTRREG2zTJwR4WJWmkM11pfmDFwoX3kQCH",
  "key21": "3DiLB9JH2bJbiFHwuyvsud2cwxTc1aKqR5C1b87z5vF22W4Xwc1YdtMNsS3pWnYEbPLEJjXn4gDXeAGqmp7Lscmn",
  "key22": "5grCm8BQBUn4J35cSmsBRRzzMszrbyT51UPjRGZ4zBoU62jkU4qaEc3cKtsfBtad4fR1BDjgM4BzDegGigycjThP",
  "key23": "4EpFDCe9oeEtg2y8KH8fTYgdyHFnZG8RUZACzZYUYNJEHkek5VfuQNAxFJWyUFmSZ5x6TJ7tMhugDtEnYtj6VQCD",
  "key24": "5iXXWT4KwQjThs9KmQdYfst1WpvsqmhsRGjUN8xVUAmc3RUgFGVQs2RadjhKPDfFjuzFMJvkpr1GMUQdHbCX43TZ",
  "key25": "4h16Utna1UBsynzHehz8EFt5Jq3WsrzaNbmLrxn52RcZJob8vBLbpmGunDcexgwFEoM7FtAYgi57B63Jqb7RruRe",
  "key26": "58Kt9eRod3qyFXJsnFzBp1EZHXChdjpbUMekEsrV35zsFLQJ7QBheP77TVopWMw9eTxmuFqxphySDugfGQXuFXkT",
  "key27": "Yp27cacbDe1qRqv81SHDNriJwZBu2NUGT5qnGrfUXEj1y8YeKVxyVcfqPYgBWuHQTMyqxPn7cqXMmc3KkqUHyaC",
  "key28": "4msDdjmKY44QdcowEbMcyJrf9u8RJXNxzYBLSXwuEVkATxcPPvcPtvyypwWpR9343BGoBkPbmNm3UFE8ZjeVNyMs",
  "key29": "3QXmBCeSZ1U2riNZS5VdHwNR6KP4QqbEeLQGmtFvRqu6Rj4tS6ZQwavgDRW4BPX83Ttxi5bZZvxs2U3bu1nLcn7Y",
  "key30": "4MAGd1bMJL42BazLvH1cPeAU2QsV8VBvQFvvgXYSGLcpdwNReH8BMSYSnHJb3AV1TPiu1JmzQvn7P33p3SWGsBGw",
  "key31": "5B7LMEyUvnSkHmJrJCLGDJW7AuU2PSULekMN7cauaCaVhcMGSmwrpMgPY9qGkU9Jw8CT6AScBDngZP2UCRTbLXjK",
  "key32": "2P5AyrQGvdwxYZShjz2Rs6xzB6PMuDwsXsuQc3gRbA6Mh1TPVyQ6H2WFcdE2A8qXMzL97eEZNPBUAXCpdwMJubiQ",
  "key33": "Zx7pmsZ28ezjT6f1x8PcLvzPEyuPN3cFRTRcvrVUm9c4S2V3Ms8RxP2tLbESG1ZVB54ukXpv32dyNtFBpq2foAo",
  "key34": "5Hj6ciQy1XDoS49jm3AdZL74s8yG5RNWthCM6EE1jkBMzLyhj1kmHcRkVPT1Gq7dHLBwQSX1cwEk67RBCCDPCBRE",
  "key35": "4QVcH3ZQHcq5kwKrFDh9za1GaietUTABEp18mXJa5QXYLVwKcGc5eaYBPbyCvRBUHZtw8eMaX1Ut6inbZixhS6hs",
  "key36": "2F6cLtw2jC5oh7DmgtVupupjN94ryo57P7s1af4PZ5LCAZZafvcT1kaBnAnruBKJYHnx8bq23JnSbJ9TG4Rj2PDY",
  "key37": "3ejZgLHBmN99qTN7Spa4a2NAAnuZvRgw1JpRUjRiH4FpQYoKdcCeYy9A5eAwQGNGEX2KSVupSWws8U2Q1rX89RBk",
  "key38": "ygjHiomQNFp2WzUynX2Wacfg9bLU9qGC3A3Te8oZqjthFTVeBwHZuVDQXseew6FFitAiaLzHSV3tqiR5kwcANWt",
  "key39": "3QmZpGFHUpcsyRuDs66jF15JmVA9gXBsiCAUzTmnYppMF96QmxhhYqQRWKBqnKMcDECrg1rdrKjDFsopp6GguomP",
  "key40": "4ZqUeXCfGajTP6wthK1mPPG8MkWgLZEUxz9JLvT2A2AaZq2TUo3MG8nfjeEY69fdQAgxyq3aKe6x6inDMs61DgkH",
  "key41": "6UirdnqA5HNhLumcoysrMMg4yVbbvSKD6dL6wrsNV74Letx1M9ApXwrP6BwAuRYvuNzUshyNE46FMTL8V1Nbr4f",
  "key42": "5ZXiETo9A14z5GqShXwspdBSvvovcLP43oefn9Ld27FWQMNXv5iYYvGFrZHery85wTrRu7GVBk9JMeKNDpTQw2V5",
  "key43": "2oebDPZezgRttgaQefYdXEhULsfxxZXH1otbBY9FMvJxAfRqUBJPyyv5z2XFxW4DK8PVjfX87AqZhh2ZtE8ZrQ1w",
  "key44": "4NaNaAre5u1iEtft8BXBRnaFeGYvY1AnC5VxWX1uBVQe6Lyo2rWVywumn8zTbhUpzo1o2cb3Zt8LWmC5dkDzCNkC",
  "key45": "i9u1NXVXgmeMrJ7CSK2omtDa2TxFUdMZAqiAhMQnUFKTTzZA6vhnYFg254Wvp4sZJot7x12dWRATopCQw58VhtB",
  "key46": "5thZ7K4T8mp3GUxuSKgYfRWQ6rZJUTZtjjaiEbmm6n4WfbS6Mp6MFQML81uUyiAbbXurL9j5gQ8EacGqi4QFKEir"
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
