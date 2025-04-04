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
    "yyhJJohSUMnDphzgCPevrRTsGRms7S7tHsqxjyTkVmrcGXgx2vBuPBJ4Yat84Z4Q3g5xP52bqAGbxkMeTinee1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNTa4YUCESyfGcnbtvwkSsAsPyAtcHHsvEmV7VQ4wSJar13KoS2kJj8seae13rWAaJhQka5E663QRnd3niymBJN",
  "key1": "3zCwroB6nj1ors8naxTk58gYZxDU7KHf7q41GbXmyFBwdcJE9wancvu29TvH3xh2P7psR3doMn83T9iRs49bf8NU",
  "key2": "3i3PHyvCyvQfSMpf96YhzRbCv7wsNZaNeqQEtD8hHV2KhDkEcscQAfDTM6nPJMV4dcdVkAspTZrEw8njQFPvV8Fz",
  "key3": "3y4F7Agg2JT7cwFkzMDFQgiJeLAEya8QTKfLhofSDpfyeLjMKWfXQypAdgCykypwfhVN3pVqyGcU1gkopoEvqLhK",
  "key4": "rQTRWxZGnzWGkhoCysZyzsJK4GKEyhjVSyQ5aFKMCgMsrz1YJ1uKZJgBBXNzGEaWYYjXuyEb53Ht2jRywydqth6",
  "key5": "5LkBMczVdcwt6Wye5RWGQcmMytM2eW9V7jCD2XMNekNcJ2d7GcHM9v9Z5MNUVXmsYyat9WNfgEL7EjNHe9d7faCC",
  "key6": "3nwLxukJdNF25x5ynLsoyVbZPjH3DTUYZgvNrx7ztfRtwnt9DmRoFpmDTqDqGk1AFivr5keE7iYVZLiA1oi3XtaV",
  "key7": "RsEZo1Yrg6JYs1ZeoBeyPQ2JUJBC95YV5Zfipi4hRsS4gSNk6rtnGSpiTaJNmLXxmofe8QzSECgGi29A5EjycFT",
  "key8": "46iCeWJ1v6A4hmymFrqketV7Gj6A8zfXcAjrTpXqBvTFPJi32jWSmk5MBDdycuXfMb8A5xKHcV7j91ccGxUxM5rV",
  "key9": "3oGPxBzXiGD4nyCTriLMfgaCxMm9D3BfMEDBUVnV74k1m2e9hWtpgUi1KrYjdALaaFK8QKCp8Z1vXNjVzUrBptge",
  "key10": "1wZd79xvTvgK3XJ24L9DxEChEYDN8DKXgSWo3WovVEszG8nVX3qmQXJMi6xbGnRf4WgbhvSqK2He5FxPU3CFLgw",
  "key11": "Hs6NMSCdb7o2ufNUqydMiHiN4mdbYRB3TBFQqxp66Euxk4UVw3ydWjBacM2AFaf5tzcHJpzm6wA13uwssx4hM4e",
  "key12": "d4s9qTxN1Y4PpQCDRJvP6gQgRgrEzwMy68jWhXr2jyLHU3CocTtWW4b6iPu9zZ6jGRgYY6Es72yeN9LmaCUsfnk",
  "key13": "5QbgjKyv9esBu7UAhfhxJ76gTR5too1dU3RiEjbnkxAeRuKQXCiZzQZXTZaR1DDuWSijxDA6LFsoKKvLNCcNmsZ4",
  "key14": "KQTguaNnsiHwexYgvPTanWWD4Ds222eKnk1Q3uxzgd9Y9jaq4XxnA7RbjP4XcJwePRfBtxs2hTKn7n46J295awE",
  "key15": "4jFPhDRjiQCEkxgwPNtGtz1a5q4bFGNgU1Gbjg7J1rjocBy9Sf7eeGXBrJu153FHQVRvbLmHMtGYQCH5iVrX12Bj",
  "key16": "4mfm8uTSgf59yax45xinDLtpcKy18oiPcHSFJ75JF6YfYZ7ig92cg9KNx9WJq4fLdJ5WVGvDDqysaPzcxFbp9syf",
  "key17": "4thAUJNsY9MomkZBeZdFuz7sy22o1NLCAHJXdJ7YijjfmNp4ghgyPeSuv4pLNNHmVAMAExHVp68HwvDCpW3WX4Ef",
  "key18": "4dbYh5bmW8MQvGjHNogXDLiZWb8aUyGXToLivU1qdFjDTv6szYPwZoHLBCFop62j5UGJ9STiZtYo6SMGEw72Wnn1",
  "key19": "Jz3mh8fMiYiqnv5bqAstPhjqf3jMxwNs3jv7GQ8SnbFCGZrW5nqfLfi2DrWFooVN6CwpXjiyc9jFEq4VzkAysQi",
  "key20": "63zdLCFFnDj4K61ZvVLteSpGwtbjETgNp3cwVLhzTFWVVDHA2Bs1aKGLJ1EAfxXF3AypskrLBuVMogipkmHfRWzT",
  "key21": "4udN9Xp6QLSDUyFBkmC9ZLEnY18nXiJ3tGPJBmwVUMyHh7XuZe7TxmhSNLtha8V2WnCuCzroYtrckWypJc7gADND",
  "key22": "2T3j3LL2sByRWJgado4iZvH6RAR2Sy7GBRsqYfoQf5UQx9631jyjW3Ljmo6mrfQWBUJdW8Mpe6apqn7TmmdYkDaq",
  "key23": "2T6C2m2xSH5qnFWryYFQb9Ci9ASTD9WvgEFVAkq5rsgTurpGMTxUvPqcFSQjMN79fHkLRs594PxvCvyBXbqMBwGQ",
  "key24": "3HUmRSk5MCHikRu2axgbnq7fXi78ma1mScbtdQUMsCAyfxWbXe9u2TaeCAzA8GUviXFTGzrpoDPc19JJRydK9LQ1",
  "key25": "5XouDFGSmws73d2wL4v1iMF1JkQXFwjrqcsakkSSnnuHB6hpDTCKSYkEaSjLKKbaqg2mPBi6WKc1ctmvNYf4qhzU",
  "key26": "3gpaxgj3uojfk27c72Vm2VzYqUzxh5N6xaBsdnJ7ixKNFz1nB7p8tL9GkyzAjdkc5Mfib5qXmzZBpy6EZCATiEqg",
  "key27": "YFUkf6qE7X6Dzmmbi5tgW4Kyui5xEE5jXEemxZefUB8q3fYyPoxCXRD4b5FDg1pKWjB3yCcvrnPd8iYbe1xVKZN",
  "key28": "67jJ5vJgY3b3zf6YoPYcuqkT1SBHpgD81QcPUUwGsMg7V9rVqtaQcL9jWZvGGVLCxSnHFp5hq45HiQn2Sdae1kMT",
  "key29": "61VrEdNEM93wsQAghQjxx4BYJCrpa3kaRrZzb65fMEbjtjFGLHCC82DJSGBomxM3zAAJhqqs7LkDQomY95WLnyUZ",
  "key30": "4vJHFDU1Xer4zHaM652o14bTutk7kSVaZ7oYkGMXDao7sBtZBMfQjmuZgJD7HEfB8PyvazZbLHNbf2VvnUTY2Aty",
  "key31": "4LchJmLqrDzVMqAE1iMDjNNXr1SnPLef6SwmZ1ictRyWCDzQhnBK4aTzkqGpsTpq5JmU6zbB9qtdxDBmvxnimg1C",
  "key32": "5VLknMtsADSZJzo3fH57mrXuQZAz9kPKAu1ErToBMLpwyUDemRpAxDgV9CKqVbqDp3cBpLsj46RrjHrbzwhg9VeJ",
  "key33": "2Yajg6Ccaq1CoGmnfFfwaZJGhqBDmpxvB2LxQjydrCf11MbprCxbzaAwwEzonJjxCqxXsRuKM145SssNFiwBYE8r",
  "key34": "5aecZsxJeeZQrj63asbUDbFfe9zibV276XbgBSnM3b2n8kBYeU1z8QwJZ7Y1EoeJMXmMRiAhogQPZLxinChEQG1S",
  "key35": "5RQzKDGfjGuNwMh1uDGWyrkMFpcmXbG4qngVU3uqyZn6xhVzjo3k9EQm8iiBJ2CShbNNtpUEFwP8gWQs8QJGtSpj",
  "key36": "3hoPYbPM4qNyTnhwfNBA36QzaTQnyZ6q5Xb8pdveaLbLnhJEhZzgsmHFmB2Sv98j4mGEMDtXGqHnCVrmr4pgMb2a",
  "key37": "4TeSfofSv9RrmKBUGi57WixzrTgVD5WueBcJZLq2Fog5pgMyZKNFPKL3ze9E1gAsFC7mi34zmjPFpfPV5zufabtq",
  "key38": "2Q6DKkAx2CZxtSKHjB8tnpqKiqCzz2XUNWsznbWgUiDhg4gXcyb7n37bb5fnwoHxpZNYgr75FdqRWkd1ijQUsgz2",
  "key39": "56XeAkEM8P2HUGmwkswiKgNxfrsHKanKmnx9Rq8LHiZbUuDR47bTrdLwHJU4P1nbUg8m5L9wF1Kd1LajMX2btquM",
  "key40": "HzoDCmFCuJfG7rT9pFP4MGJa9XmiPnMJqsGTz9PxYayqM9H6q6voGpdjxBrcrVP1eysYzgLrscizegvivJMhfti",
  "key41": "4KHxN8QkWiudApzJ3aUZdRtAGBFfSH3dsVsTFRGoyAeY1SmLHPnMCX13kWVhJA6MNBL7YnXEx5nh3kuyCgcuxyaf",
  "key42": "5JG3M6G5XG9PbWNpr1AczX4QQxS4pJxTRDZyMhvcpUY5S7EjcUekqUe9d6SJEMXN1h47oRHD31encKbCmNnFKzi7",
  "key43": "912wLG8zYymknGZ1hsdEPuACapJGni9v3PvcSXKWqwNnAYEXznsLhAoQLHufD2gj3N9VMJTQyyyrk4JwL9e6QHS",
  "key44": "2aWPz5sxVn71FJNvBV936KWa4TirBJoYTFLyS16LxHPTwQCHnDS3jgYp6LnaAwwjpAWrQwYcXAbqvRK8BP95SEQB",
  "key45": "Ahdx42ejMosMK4NWpELWgduNJQyS9JeKrcm3uaDCrjo7G58Ky1FJ7PF5LjHduigCqJrQYUsn34XbSr8enE7cKWP",
  "key46": "2fxGpDLT2wVTqt8Dpzn5WmBesqZf5VnpKtH1nqY9uddhamnMvxV6oG1pwM9NtZowjZgTtS3G8btdU5QN1j4jGmah",
  "key47": "28EDBtyM7vTiWZG99yQykGHYdsKSLrnj8kzZ1X1cTaB6EjHzN9H1ERg4yE146fBZKVtnQGTDmmFM8msZGMe7kAVV",
  "key48": "3oU455F7LoPpVaDrLH76KzLvS7PaSanyAzE13vCMtScjzvVLTyQSo69fkSq2EQGDRXi3BnBfzphyMe6SDEss3LM2",
  "key49": "35uR2Tu3cbej8bZ3cTvv7KGRvw6XSWBTq4MPa65ekPhbZhb8e16dz1NqRAdXUabCoX9pznbvEtXEtQiQGTn3M3E9"
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
