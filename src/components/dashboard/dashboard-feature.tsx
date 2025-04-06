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
    "4J77ESpvDKYQt6Nmkwgw8GLp11Ay81fjPJtepDo6Jd5HxCW6bjnMS9DnCt7f1QNRrQoY8Df1LHWgfd4smXMp8ymR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WeAoqDfhuKTJmpVAZhLtVhDo67eJyz9sd6yGci3zqTMwHshHfB6skRX2jR2LmCTkFWNhixeoWU4Q4nxiiogZfs5",
  "key1": "4NyfQhaBcrELhUZ6yEJSXywtinQHivvcuvpkhvzZX6kTjAbekw8bBdRdiE2RNgKpC3g1cLFey5qyM4f3pK3mTezH",
  "key2": "3G25YZLQLcKvNcSJk4EPGn9qXtyhZZTE2HmUbuqAy6sxcbpnT84yas76vYbzECtezN5auWdTBbBz2fVFy2DgagDK",
  "key3": "5qVJy3oRN8aWhHWrhNZbmWV41mo1os4U4SkihHwPgcarSGJd8BcmuW1bfz2yWHGJmyUK25zYP1uFLRh7GitrEhpC",
  "key4": "5EsrFR1KFcWN4nt7mo7ggcpYMMTM461wLzayYCLD8nrXu44qZFCwqXMduF7bb2gbU9SQ26X6wQ7wt5Y4G9hyXnDP",
  "key5": "fp14sWaV94ANFNenKbaUp5Mjn2kqzrCof89g2tXXAiWpF5c2HVTjFpoygTv5eiEtDYNurwKtBLYsXDb3dg7uamk",
  "key6": "3Ui84VYWVhyrdEZSkNQBTeBtjA8J5EaJAEvHsrzdccZtMJMJDGTkqNSKDiSYZWdjWDcbHs4Xo7EG9RveSUdrXSKN",
  "key7": "4gKJqH2H7vgikqBZ3fnXqVizgvVFsnbvu4en9JYwyLMYJep3WzNvMrR6EaHibxHafChhV7ZYWsxnWrmEuvuzxQcZ",
  "key8": "4e3XP1j5waJuUXYKAMaeuSHMf6t1cWB6Q4iRkAAiMvN1RWSn5gtR11FBwvDLaUHcn5Yhm1219QaS2r3QdZJzW4gX",
  "key9": "4BFrgWGpQ985HuWbfE6kWK9F5DufQ3s96FGmwbCTFZPwD9bfC4iFoP9HVGMwCQcfzLzEBKREtvuxXNaJhZcJKB5b",
  "key10": "4TPL3EcSHrqVmQ3Vr1PJkc93LxkiPHgxER13eLJ9KvdNXE73V78KD287XufJnhjV2MtcLxcR6LV7ZcZqPtkKfdFr",
  "key11": "4D5qjn3DwyxgfUCDtG5BXJHEcCT33huCG3Acp7HskyTXaC7T5RAfgFj1jkhbQs19yAsuTKFqj1TQj8kppei6dKMq",
  "key12": "3SdGKPXTZ8tmw6PpHKfPMKNCmpDXkMrdzgm5jc98amyhV2jrmC5sVa39zGAR8qYPPMAA2uRXsexX3dWZKS7w81t1",
  "key13": "4f2ViJpeum7y827XWrVgfqHSrNbERhhUTMBXqm3uvCg3ojPZN8fnFHLhjQnFoanLrJrx4R6aHXxVhx6xSW3SNkMJ",
  "key14": "4fxkPcmdYhzAfW825oc4ziXVXJp5sykbcjp26nyyjVXkwJ8n63x6r9mX51QmoUfTzFpVWzEkd6gQJstovuf5f9tB",
  "key15": "29joYjpqA3EK6tFQpnaUPfefNkhggv6AxfgShQJJohH2LJ5EnTiSBLniiwAwpdNiXoyDUxP6K6Xu4BwBepqNe3t5",
  "key16": "D3PEdD9msBCr5w3xKowkzjvNk2hHgZiGSQ3onoXRmB2KYgzmnyv6w5dpb5RkNCNsWNpsVUrv8L29oRFgkqjuy2u",
  "key17": "4C7m3TXw1HW93xAqEMJ73TpgNevXrikD4J9EFdUMpHur71PX3uWoeb11osn34SrWExFHTxfGw6uVYZRYx36bE1ZQ",
  "key18": "ctR6BbD24WM963ZqL4BgUdqY12tfbZ2aau6HgbrsiGJ3hYmdSrBRx9GFWhntt48hPpCBKPhScm6UYXrGAeoJYGK",
  "key19": "45AM5EcYrxXxsZpKvMq55dmpKeH52d8xR6iyZmpNcoZqijVZ5gpYFZkqVzNs1aEV2tkX38BZHiCmbxVgfgoXZ2CW",
  "key20": "G4vhPMfVsv9xanuKXDBnS4nmTcPdEaKg5377cm27a8HP83soTPQhUCQmUK1HYBuHuW3TGbWBctx6TrQ2BnCp6Fw",
  "key21": "5oBKbDJu1PDTtAay4Lr1EVnNiKSEnfVKAKxVHdxahDHDdMfVkLHZ9VCQjmz8jL8ysMBumaU2nX8xkVFFyQwBwhSE",
  "key22": "5rm9btezuzTreV2AX7Fk7xCyZaPYaJUbechNKvdpBmtdiydu1EXcspjuGDmr8KS6bsBnAMUfJMorsmP1yMUHXPSe",
  "key23": "3dcDyUcr1dxkSm56ff36e8T7mWmmLxbNTyfi2khbGMPyzkyyeuJhggX8T4UpJ48PQkXFZSGqnCK4SkFawJghMcVf",
  "key24": "4ET3snKP8sJc6dgBr2qzwrJZ7aFdrMHR5SQyd4eMb4xaB3M684YPXGBLTpqLXKZUfXxu48D6oMVYkdkLnupnBXPY",
  "key25": "3nFfJ1DSxsVpLhhizsCyH24XGfgz2Wh5nBq8RZ3jhYPZqstHYErFoEZZEs3U4x71iChriFeMGZiy7ijjXY7C74k4",
  "key26": "3pamNPWqok2MNtjpyEgujqUVNvYVtsQv1w2c6Sce3mrtKZbJusy6WDcchogL2uwdp9eWxvaAzUpFEz8xomA8p5Bq",
  "key27": "53jB1nz6MJorf8fonBSHTe5TDcG4AqmJV3nNbcbwRbdGFC32W64qfS78Y8oWgfvV42TrMfKz7iQj4uhQvAZ4vTSc",
  "key28": "4pkbb7JukqBaNimaHyfgAVvaiba2eDbis16ETWYxjmAFf5MPWhsy9KNHPL9gKFbPV6nBgxRNecWoGkKj9GjwEfJk",
  "key29": "39SyRkgbJC5hRuJQ6mmt2pcgZS3ME3AurRY3mGaGrfQCRNmbHkFwULYz1ok14ne81mzQ9Rje15LKD1xmQnd76dVL",
  "key30": "LNmN3jJmApDCUqM3MnBHUXh5yd9Znads64u2H5EZB5FVNJvVoTJiDCJf3on3eBgmAQEwfcn5DJddXyTEMb1WFhj",
  "key31": "Q1zKp3nEHH5qpkLWY9yjrQjPY2jRP6RQc4aZTiUDhfgM4CDp8DEyR9tiPnh3eMU17TQyd786rdrsTkTqrLP6jcT",
  "key32": "5u5uUiAzHYR6LFMpFmRVKYQY4eZPvdXDHmrG2HMT75maZmUfHFJ7Mq1pDRwvHYQNCH6VkibNabTbYh7XhQfiz7dV",
  "key33": "336YLS28wd8P4ZFSFzwXRJbExQMwaJb6wPcsHxtRRwnMyjfqQ8zvbrQ8mra4UQPA9wPgwpazVFyzgLJdRseEJgth",
  "key34": "5JGd7nLVGE6tCcVhT2N2FzkF7vY7BKiWp3SoJ3yJ3yz9JDd72k6LabvTEZUgF3bF16dUwdbv42otwoGFUKTFh8P5",
  "key35": "5NisJg2VJ3Fb5aNCofr9DUeXNpQqjwnfisPypr4v7dt5nrtcBRNdzGupqD32HaBTfkNQeSf9c2c8TLN1c2q87nxi",
  "key36": "DtZNGvSJ618XYKWMn2rb62T1SMMiajsY2rpjfFsJ6qFvR9TgQXXggNgkFGgedcd5ruDxLKS5cGrXbujTCqhMevy",
  "key37": "sbG8GyXL6LxnHoSdNnzDzj3s7w7kadM5gXyiZfobuJLYxXxNdmdHjTYWbLGdhQhdSm57us42PnyirdBoy3eWRyG",
  "key38": "3qbUDFwbiw2dQAU5mEsGfTeLohAaVFgdMVCypudszCSxgd1Uo8Tm8ozbhnjuQxcWvHDuwDL7nxKAMVXLd9f9kizk",
  "key39": "4nKhi2wPqEHwfVtsdJUFRRjNuocJb2BitWgBeGv9cFPVAuYqGLSQHELLk2xX4nWDpUBJvQr7W4VCzxwoVv4CkRYR",
  "key40": "3EaoHKAEgzDZqGrCAuLSouBV6K5xgAk5aMBspx2bcAc2PESGS5LUcrCJMHHZQmEx5qacCfLub9NyMABZV7E9NqCX",
  "key41": "23qJtLhWQLeFwKUehBwREy9QwPe3jZQdqVMaZaXhQNBDEfmY6vgu1qNERBvBrGxycdDZGVM7h3MSKJTwVrHDLxf5",
  "key42": "4H14strCmhXYgnJ4fctzdAyymEJjBptJN8eo8LxqWyZJxoZ2gZGLh7C87snXYKRtGnya2fukybeSgzFEMLAiFmiw",
  "key43": "57gB6BN9U41YJSyg14E2cqWf2rayLDRn77uUPdyZoVontkaiGucyUJjoLw8y1LSHEZhP8i4FJKaB6AERVosRkv2E",
  "key44": "5kCjnMDR5bsX2jWiJ2knRbJ7i7gVTEDMaMYyWzk5NxPvqofByUjcvqY2b8VRghzDTirJG8beLDmV7HzSm4V782ow",
  "key45": "4hdjq7JydPQdYSsTc4YYQQ9UXiwhv3RMUWf9g8cDhijzYxDZzBkkjrST67tuKgiYZnYea5bUA3s116xABGT2sFb6",
  "key46": "5mXauku7wUPp2LN9chqJwsP3PQowwXSttT3YmgjPMppKErZEhJkGHkcLHWy4iKaqMDpLY3eMBYwcF2vfo6AU2AyR",
  "key47": "4PVBPEzynduwY8o2hhxuaxUqrd4Z9ARBAw3AYCVYKnmQvJcb6UJQvPhBwGnhajjFN3XRz57cCkvvr4xFU8uuKnZS"
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
