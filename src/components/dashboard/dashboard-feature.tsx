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
    "4RxZyijT69V5Ut7NA8yG7fx7KypUmvbx8L4KbRtoiSymMj5wsdofMF9kZK6Fac2tGqNqbssryJ3tzaH1WTrAetvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vubjCLPueYuPdcP6x2qiDDK1yPDBjg4T37V4zbLC1JuSHJDH9ax3fB5hPiJxQoBRxTAFqrcGp3oy3bHWEszgBy2",
  "key1": "4NSZBCyVhbKSfeBvJPLeqLbyX6ddyBgU8ypx4h3bfBAuW6P8FvgGp7Mw4E6j4hmwBLEsLAJpYA1VcAdaG9yVoEBJ",
  "key2": "5A3sHxg4D6nntmaHniydbn7JQyJFNs1raMNP8m41hLvWmrVEL9UifABhyN9TYydXDmRHrFVMdXkCbAq1YN4hbX38",
  "key3": "5eBFjUyzV4ZUjp8VFKVWc69WiFFnR1R6kjbsYvXMDF9DGDGrpGbEQpXaVKt16vNrTmwNxs6CZy6Ey8dy6N1X3qp4",
  "key4": "33Yo4ELxyr1h2qfTHEjLAp7AuVwrkPoitmUQaxZimgEzacv7XqpPdsnrXbQVR2ib9f2LNaz4WgkjSKBpct41jMTy",
  "key5": "2XmDiV41pdhotvnbrgmZ2HeN26hDA9Px9q9joHZdfihQ3EiLvAPRjm4htXzmEMYTkmYPmcYwNkntzePhhy2CfrCY",
  "key6": "Z55554VsQTZLZmfzJTMBBUB3i8SSekeaFE34Gptqpn31pJRc1VTAxLyesCLPahiXzbN4QnTW7rtZCLbZtmZDqD8",
  "key7": "31FbXGScsZRQ4sjzQMSCAQeued6PpwPpXdSjQWrdE3X9N7kxNEkTH6WMWBq1kWQeswJ3joZWFriyyKfVoK3CJsaP",
  "key8": "5Y9488baouzEM9Xmu3XCmX6Bxba6yftSBtBSkeEAhVnpbtT9wgaz4CPAo95HpCezEgNQFzSuVzGsvXnVqoKEYrz",
  "key9": "5jqS7EZf4a3tB9Dg9nfAjogk6qU6LBiwCHiPynvKQ91zyyEqnCCNWi93Zy56ZTvF75yewh6uNPUQPJPrhVKC9aby",
  "key10": "2XEonzNMJGMwYTjTejPX6xdkF2q4jo8yD97n7iJni81pmcWpdVHqnTr9JEbrA92EoGCNxxhxrKmKVGFarFsX2Gkt",
  "key11": "3cxaeuzjt4mpfRhCgjGaDBuV6fyRXyxHHRd9KF5rzLJiWV8vEzoGsj9Khov49xLVSdV6EHPCbuMV4MpBvEyEkFS",
  "key12": "3QrAdkES6s5rTDhPnXmLC3BPdKN63q4oBbK7goJie7cahFf3vdXVWX55GPoFaKtvL4rLjyWHg3ZhQbTddxaRZXdX",
  "key13": "5Dy32Tfo7R479LKwDSXzyqghYMgSANxvNZZYLyjjhjCaYEsY1thi5c5n76hMq1tWrKLkEHXCEahd7j5gP4E5XS96",
  "key14": "5fQnZyimEAYhhGgJFPft27EfdQ26z7jLYkY6mik4b56EUfY9nYMq8mcYU6wVW1A1AyQkdfPZhNpTQ21psFTQKpF7",
  "key15": "5R9Yfrcn4G5WuGGZgGnPyWzgTFPrzHZJqeTrABWnbPyptNzNTzbNYsAJgHe8rUb6sDR8hEdeS3cH3hyhtw3aZDQs",
  "key16": "CaujYAe3xoo6oDgRnkSu2Us1xZoaaDpBfE7H7ETETovi7E1GkJEYEAsoWJN3VhJcueSCPEoDrYcHJM7TTeFVXbM",
  "key17": "3reGxK2fhCsq46xkRJ3QR9SLkFdKB2sAz4FQ8j1jNA74kqm6orvpQiKgHz4eFyKpUH9cB9prWdYuuhVp6jUiYExd",
  "key18": "3Meh9R4c7avAJDpSVDTjUJWz4mx3Qq8MWpG6L2Bod1bs7mNvTkMqmaV4AdW5sJUVUb7EhkdWHxreQdKcRk5X3Dek",
  "key19": "bxnZNASRcZSvKoyNo3pnLNWwKDr7rAanXA4kM6wXKmAQdzP6kUHWfWCE1L9gpRRE13h2Z3kiBdDhqVkD7VzJTmJ",
  "key20": "a8a36dPHX34fGmJsrYuWSCDLJHgiaifScdKmXbZZ5CfpreAko21PwzSfE8VaGmkkYXnYuNFA2mwu1tjqA6YPUfQ",
  "key21": "3Wd6pYTXUeqckj8TsS2FNQC8SK1qc1aPQGPYi232uCeAJ2Gem3pgPMNqgrnEbcgpHN1wyzCtT3bP8iKL1sWx3rUq",
  "key22": "5JBqdFdwJP2G3mt5F3vNhHSNTb9Ug9AqFfkaQAMJUQkYcxRpBAU2m1Wpfrwb1MHiUt9vVJdr1e97k6ALHKUeutFv",
  "key23": "2j2B8cYKwTcHJXX6k8hXA9N2D3dn7r4JL8VaB5fAsDxiudMZZGn8TfFd8DhmvZ5P9vLAxEQkhu6iQKPo5nQur1ZC",
  "key24": "5bcpbx3wNrS7EJ67DovD14nGD8PpCwJVDiFwdRBZ6uT69FhCpqUS77d2kwZyPwPz7Sr5QCc47JAtgb9Yw6NJvvpn",
  "key25": "3wVAvUDV4DA2tKkY6TLAx742AB8sU7veuj5PvJ9sUwjQbcyoYLTyaYS1SLvb37ynJLPopC7cxFr5jMv5hoW6owiK",
  "key26": "3DrUYvD8BcmjXGVJ795DxrT3TBLZHmXgAchMWoToJ8t7CPUPg98JxvSuHtJXrXrPyu7PiyNEmGLDsGvwg4a8d1Lw",
  "key27": "4TDsVKxZKzMr6cJzkEyWkucMViHrsGfZYv4h6DauvjSbfVXvUd5YYsCeKyjGJLuSfr7FVZbteRCC6jbrtTgQH4Ve",
  "key28": "ZeocbMikJhxnqNg9id3ukU17tcy2DVW6mHsDAqM4GJueH7qmGBNE2JEoBPtwTYhvPoRVuKPhRXw9jMLYXEUnBvz",
  "key29": "55EU2aXYLamh6GjNkNPPnDzw7fijSdRDoCJ3ye9pAW36BK1im4GwGrcNTMC8WnSFNki75Q8CmdxQrYqo9NqkhqLr",
  "key30": "5Ly2LkST9VggpMfg3zRPS3QV18MGYaiZDyxw1M3HFAUEo6f1rGzoMjYfuP6EfTKKkeo32hqirx5LTU1h8egdUnBp",
  "key31": "3drH7SjhRivu1Zv9Ggn4PB8r4EechNvX8W99jN7PSXzzmusaUB8BPrnTWAxj8EArmevqGyRZAsSJPYh4nwx4dmH8",
  "key32": "YSDvXcgbDVMg2WZ2FF8oMkfLnKVXLb643mQqc5qbFsYbmW8svGZ6zvY9ftNSiDaXQEvsQSQAL3kJnGYaknqkFy6",
  "key33": "kAvQPnxrx9JX9AqgphMHJf5cYDAN11mYJ5RaACV3Ld3cq9jVJz7UnBXTRzKoH3sFikCUbadYQzm8wRTQg4iEP5p",
  "key34": "3L7zZyJBCdNf8fvMuVuGcB936Vp6L4re1K52cfz5s1nsqsYZzvifKsjgY9VBgPvHP3tKnjLi2K5MNAZSrCKTNMjr",
  "key35": "2JSA9QL7QSZm3Y8dMjEK7SYmVpQbCAVMdjwxyb3xqRVrvFTAWSkmhqLMnpdN1RXAubKDxeyaXiRtWomWfG8WTPkG",
  "key36": "3F9niXHkeFmyfUrNQXTmFWYd2a41FLs3jcYhqGKGBQX7FbGZk166M6cAAjwWrySGXt369MJQPubRMCXvapiDsqLm",
  "key37": "43kogVFuQvSk6qxJLFSPfFGYMsih8g2rCJrBRGXspV9L6k74NBGez3Rbtmiah7XibaLRD7T2BzNVuoUpjn17itoy",
  "key38": "3fujfxhtwphnDd5EP3CL5LxyQw7RPm58UVgjKQh3iQ3Jig1zg6ktkZ1nQHUVqK7aa5eHJ2qwXSBqUGM3AnK8VBvZ",
  "key39": "5HqBnq3VagrPggs43sLMzZudgUjg9wCZajL6sKaJvxPE7w7gqvJ8tqV1uVEGBJCikSzeqTvFBayVvEzKZ9fCHdKE",
  "key40": "4DtprY3uZEt4vxsAVh3x6CgidzgrniDB23ZXLEwqhKoMXY7jiAmo6gDadW83JA69S3itmcc79adfyvHEpxwMQvBd",
  "key41": "pY8rUXj4nLkJutcVzLKg477rQDqXKMWySnqSfFra5W1Rsz458ReVpgTepdao4KSy588VWn3e7eCRLsbQ8gL3utW",
  "key42": "44RHrcgC36PJxFXax9hMUzR8Pc8g1UgJUs92FQvdcrT2DaRkagVeDjbKJw6KNCqfeT3rHxrfEx2BxsCr3wHeMmdn",
  "key43": "3nGHNZMGSHpXWXxmBF9JTkLBJjk4rN3V7bZ948CNWBQ7E18Mg6XihN9qKvEN5TDBazvtcunZAGVW2zqghNPnyxYd",
  "key44": "5v4BGoHHqGvuw5q6SQuU6QeT5YTMYvr2L9brRtuy9TDcQnZ1s34rxBkmPpXZttnaVPpTQqV28CfgAw7xDJPYP1uW",
  "key45": "58NrrCsrWyLavkLi38pY4hNzApRVjQYD6LvXjhYm4yzQRBXPoGjvPEtgdEisxVBisYowmz72Y7Sc9bGqeADsAaXM",
  "key46": "4BuG6M19LHh9k22NGxtJqSKr6nxA8sNnWZBEXYTHcQhxSB4UWYue2p2zgSZM7xt6fiykPX9syC8GpUFEvxgNTthH",
  "key47": "ADrgBzXM2rsWjp7ufF46DozWX5fRwSzJJmkgMSfcNZoAMkwrdXgQMq7BBN6q1BqY4V2Mxcfc8x8T75p6jhHkxPt",
  "key48": "4HfvtyuZuXU8KL7KVdoy4ky3P8fUQFCe2UohYpTFCYPV3fGWxUcJJZ4tFdBHJBE9cstnN5x5P6PBdZwBwCkPpCe4"
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
