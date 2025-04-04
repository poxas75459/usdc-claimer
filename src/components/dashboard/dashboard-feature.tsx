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
    "5G2vniTXxQZhSPcmaBHX4NnH9ihiagQUMTXLnHG4ezhfkXf1Q1fHnCSwmnmDSmyWgBWRNetoHUbdUxkDZ6kvQSwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MtPYmxWRTky5bESYvKzR6okqPs9MqFvSz9kxuckGSK8huu6eofRE65ueNVVGCudyHgxUMr68RSWVDYBEDidbAdr",
  "key1": "yByeCtwPGYSsykUzk76VZdv2Yvg5YfdMfpwCHJScwu5c1P5uNNX4AuBJ3x3PXrzeN65PSE3jVvgcckpzJRqLt67",
  "key2": "4Z9Qnx8pmfvzSSaAF3Xpc4aQTSoT4NxGoAH5EgeKjtX4gPLJFsdrGZcfq6xRDsjoHqxmb84inDoGmBQSRRUFtt8e",
  "key3": "2NsotqGX4rsu9PXMzHAZNcaU2cj3KdZs38kamCFRUSweifb1dF2gJvKwqLSRQRzsahFAgfAJ4ndeZguPUt9tmA5k",
  "key4": "2W95TZ5Vx6v7YEfQ5fi6HqKB3mAKqTr4EzEFqihMzaQCqZMEWZnFW1FubNySZz8HPYDncPtHfjqbNtZqTeiX9575",
  "key5": "4qKD7HTX92X7MGSn4W3FrTE3yXzrhEepPeZXx4F1LZ4Ai7zoq3j4Y5m98Ev8FdxRrTqhvVdvAxp9E2BXGA3NSaDq",
  "key6": "a3VTS2baPwXu7azP1SBgeJ4cgzxoPu9HqTDuRTdurTLpVkHWMacvQpM1fi3UZM2E6e9ZXnG46WgnY2a9CC4puEH",
  "key7": "2P62P16ACSyT4J86D5N8vycMfWCW9gkkzoPoM8cTNK6kN5B3VEDJgMc1CFoMYPtt6DggvT2Md4P9SQXxN2bL6ruM",
  "key8": "5JzRTyAjj9oLhqBoTnmXn5NB2ixLuuqteAS65DUj1op97PE9BLi4bUpPU45AhJeAsBRRtsKAcwsjjaDhTyxrkVbm",
  "key9": "2HmTbTAKwwSjuVnS4LXNRoFpGwLUBGmvRy1vQr2E48sFcudYSjJL2qNRUiza3krdgwEBRbmD4mf3twbRHn6ztxS3",
  "key10": "4BL5cgGxxnH7phtpv3mPzD6ronN7fc5TQp4UkKBxCBR7nvX7ZJmXRjaVVYSU956weQ3GESu4yDTxbW56FBbrKeP4",
  "key11": "kMpMk5AJE8vs2Yzwfba2Xp1Tb6rC6hbQojocQm7Xwhs5DTq7UzQv3ixo9LH1Zbnu8GMFPEBEe7qqkCkC9DhRnKE",
  "key12": "3Uwtkhn9rW5JsLetpeva2XAGy2YqPu41TfkHvtbH7VeTAJ4FXGhz8XtAgbjKAWdRqCYpXY15RuTtRow3e5xV2MxJ",
  "key13": "TP3w2QnP1jtq4kq6yZU27KW1DQEnYsDmRNrbk6RNkbvAUTbvnPQ2hf2zptVrJpHXMKQ3w7azBXrDy6vSzqJPQ7X",
  "key14": "5nZk9NTPwPqTfEfGHEwuwrGPW2va1hLk3p6XSGphhNp2nN2PcVxX9JbupXMwsNf4Lf9EeXHpBFDPBThT1n2jGCKA",
  "key15": "2rX77pPq3zyWj1DjvSJoxoKLzebf67LUdVp7jvXb1LtbHKD6qoEH5KBQKutiCQfrAk7u6tTqGBqw1nw2Kmn54QPU",
  "key16": "3JLz5BU4DUg9HuwJ8bjYhnN3wPFF1ePQQ8uHCuZtNDc6d1GYsthPTpPjGEfmGDeFUxiu38n6YhzETbDYstysW2ng",
  "key17": "3Acihrot1k67hNBtDNpTqioGjYr1BZ5zRdDP3pR6dHaJTuZoAHVX4Yo37ur8Z5CTT9wTmsuYB27bwhrR62hvQBvA",
  "key18": "4kPtk5LscXA5WGRxm563oJPpMNFaaUyJNbjqnKTugcHssUFaojSTVmwHKCwpaV2JJkA7MkiJRx49vxq2isnfc6Cf",
  "key19": "38Vc6URN4uKNsLLevw916UZTd98QXdxAF5gr3QvSNbsjnffxvku7oxHkVoMbAReWnz1gFL6MrZCN2GXtPv9wce2Y",
  "key20": "5CNpwi4zAo6tjhta5Lk6VUFhDPr9Smxv5fhzuvS2i7RCQAtvSr6u3zyPypHHeVGp3yx7nKwD9UCoSmppgrYWBqs1",
  "key21": "4wtnXGTNdpitUY8uezWsvdGVoFFNr1NsMHW64XSs3ZLtBWamorvmiwxapUKDCCCuN99x2UMWB1eyNNMjYzkgZ3e1",
  "key22": "5CPoFhH729wmYzhj3J5ghWJNbrQxwaoUqzB7UGy9u1966gf8tcZFxSbyPhwLSNCTjSYW3FLT6SQ4HbAY3ZFq5GsW",
  "key23": "svfyPkXcKZDsp4RhnnvTLz1uDfRZFwrSSm1QnHSWWiLdMC7niA5jhjRj5rHdCowbmrALz2ExuZHJQLdqNNJAc9h",
  "key24": "2MXLRMSutfJsYthPPsqaGveMy7NgHN7ut6DEM8Z6nvHmdNUywbN4Ld9eQ3w9oZeEmS7TEPgMmggBVXZ7edxZHaqd",
  "key25": "3wiBZMjfqSnnCtpYjjYsCPhfHVsuxns3yDaGPLWYvwz6t3jaVmWQSScEGdRorKJB7mNiiZpaYCNYFP5Emp2PZeep",
  "key26": "3zwswhayiUSFE9kE7L2RdLUcHudiUQsYtr17KUcLAupZx9AMDzPJPMqU13hCY4WjJmhbo7PG2UzQwDj2sQMXpe33",
  "key27": "4aWhpatgmbGE1BRCZkHgL64oMc7Vh5ExRXT4m4DmpMeoQxH1jSU5xMnfZyNcEcPdmAzBVMN8h2XrX7oWsZcJFmaz",
  "key28": "DFPwneXk18qn5mGBacgM1gBH2fxNmHxRvkmdjFyFF2A5ZXY1mruQN6XBdzHCk9aYJUEmBEhZi2diJfXbnrjW1RZ",
  "key29": "21kZcpvGZNM5A4vNGsBcTvYBA9yZuWnYKakLBrwp631KmRvyCJM62CqtYHdYxmYs6xeRiRycmbYXXVXMxnk2Uw2B",
  "key30": "5g8jkEp573EpAWaryGvK1WRfRkUpxoF6yELY9ay17ZzkkBRSKznPKXPFFha11T4tuPFgFCiq7zhcZunwYqymFbsv",
  "key31": "54CsJx4cN7nsHLWcFc69ScP2w78XXyWJqSHKvMPvmGx1ABVwvhzqhyZa1z3yEtGPAoy2XSR7T7MUyJgsuSN9aP6k",
  "key32": "5yLB5ANPTsjoC548vCWC2KkQHokUzqijVHyC5MYZXnLSQiYthoH4PStA64yZicd6pnrawm8jsPqTTiYLSqrZVQQ",
  "key33": "nC88FBRK1vBbTNje5dFcoH3F3HisrgqKkXFCrdqxFojd3VDNWBS14Y5iPjN5tvZt9x3jYDb2eC7gpzvsSFYTnKC",
  "key34": "32LAbz7UG4SdnwrQsBPgyHfNpLs1SjTa655wxABFmaYHAPCzQJD61pVKvD4LuqTyzMwA65SHhHWzrkv7XJZDCgVq",
  "key35": "TSw9MTSPVAmsy7N7xrv5pyiVAMeccozMCEPXCRNxkSRYYnbHwBSVJGBS99ULhNuCqzsfTqbdYxzG7DFnZu4uJFq",
  "key36": "3ZE2ZW16e9Gxqm9Hax6dwJfqBxpYy5nHW3vCit8RRSv1Ao78Zrg47fDyojh9erkWh5PWpmSU2s9ng4yfc6Jzfrx8",
  "key37": "2VvubQx57v6QTTdiwQb3mGsmtizu9SRN5y1wJa29mFUyuWSgMiiiodvHPFge8SaLVJPnNLykoTLPsXkYoynJmedZ",
  "key38": "45wMn5pfSjCMx1jKfBBBRXbKv4GezuHFY7Km31S3bmebaXd8KSi56CdRM2nabKL1sd3zXzZFRb3pdXybLc9tGQfE",
  "key39": "4LUWpEUo75zfxd6DxdnvtThDAeThd8ti2tj4TPm9yfh6NNgTCMmaXd2AEpPu5csSG4nEzsf6Mn9y6dGLvkcAMfEp",
  "key40": "5k1c2bkqQ8c4J3Qx93JRPyAyhyi6Ek7AcmZ5nKhdxYXmoTQpqzmiv4RJ4NDF4DQLy3wCWkQrDfXMx1FthwKQ33jq",
  "key41": "3FxrC6DaqREuoAEy47QseZtEft86N5EeqVRVwASnUMGHAKS6gegw2TGn2PJ4tef4WxSZLaFmtHUEzovo9JDtmbB1",
  "key42": "2EBhWs5dRJEPdPeKVoT83FJHdZUksrGT3UMaAQrcYPGjTrDeCZAgoZGTGtBn2FQBUNjzn75g9X83VWgwGGWt7yqm",
  "key43": "4HimmL2wr71aqNchYp342RmTkQnuT3hr9EjVdkWzNHhT1o5GQebVzqgYFLmeStofB4G3DwjyEarHP72NnmQvBCAf",
  "key44": "5bQQ9gqix3kPWe9ThEah4Ly5NN1ZWMvsqUvAixnutFyRye54xQQ6nzNjC26LrN8JXrh2Gzp6EDdaAbSQFhVgLRqd",
  "key45": "5qoCXxw7u1x1MxqcQ14oijALJidZ5sgyBNSp6KGWFjt67BwxYZyjW4MtN6h4iZyBdKvgMVv335dN7tarBw6pkrX6",
  "key46": "2F2EkoT78zcGLuJ4k5hDjAxCvFMnHbfAWYXqkXxRYBCFejcBwtjLFJN6HwYZtitdBiQcqrTuicfi5kKW7bf2mwbm",
  "key47": "267ibAK3n3PykJNtV7CVFgjDVnSPWoNGkDAx13K1AcW8RXyrcQpTmuH8usJEgu5Wzd1XHPqNoAvxm77TncVutDrF"
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
