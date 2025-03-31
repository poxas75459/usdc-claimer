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
    "2zxDGBiojbgLDcGmfMdq8giERAqQNRQh99vxcTWTkfxEsqRdsyKix3ByrJ32Vi8ABDFBqs6LwBX9T4JMM4ykuKis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gx8CHnymxNQ3mvqsxSLZ4tuH6a8zBBSCPkM4K5G7QVEdZ4tAyBMgqp4fJ228kRvKCmgstrq3DzpPunqsic8qF9n",
  "key1": "3Lwstiuy8WNTzoqWtfrYXfGmzXg8CnTsAi7ZskYopw4nGe4ygSeqPrm8jKcj8YcMsS75qJFT3A9MSF4LgWtj2mAQ",
  "key2": "5SXvZajCEsGF8ftRPzeBDTj8DKtAK1RJWYzBKpb8g39JiHuZeQNV21KbBfWDwq3JrKWqXmY2F5TXiBNqLnYa3xcp",
  "key3": "64VEj9VDPp7hb2Nr8Prc7wxmoVuSaWU8CBZgcbbzqLFiQscrVnaFynqABv47vmagMLkiTLfsv8Bod7ucYEFLT2Cc",
  "key4": "MNxZhqLVYd2bZE3J8Yp9N4ieHQSjvvHJDQ8yPmnhs6jeDzZjgN37LV4SFDKq44X1UyNdppoyxhCuNbhLm1Rq4GF",
  "key5": "4CyAfvDbzhQVq6F9afbGKUCRyAXLgnzoG9SaKpVXtE4R8tSk8VyUkHBxReTe194UUkZXk9wEoHTMjYJsbV8uHUu6",
  "key6": "5jewEwGHXEoo8yhXuryQkkojDgjHuJSwPcoPGGB1neAsyJimiEy3tLix1ikQ6DqHnDEiXfDQmsnrsDtjA6iKUeV8",
  "key7": "41APM3kE1rA8NdbVAMnFPNVNHANgeZhH1C5Do7bAH69jgERtcFqB6eGaSdguLqxtP1PkKuDsfk4yABrT1TDxS6ah",
  "key8": "DpWrYpfC6LFZeEFASeX3Wa7DmBy61rQ5zLbck1dhmrTpAfAjyEo5CraDXit6bDZ8iVTvtEnxGNPpGYS6meDkyFG",
  "key9": "3zgbcez1Ba5WK9eBGSidQ3NgDbK8T1zhxjwkn3c3REdovyqAzhKNwSnAhxGzjZfKBQppb8z4daPuUsaWqqYxmXmh",
  "key10": "4ux2GzehYnxpKWJRwrCEGG6htjPRxSdAicbBfaLVWydMvNGUsTRMnm5YKiNqcRDn2wBkGi76wW8MKEz17fcRkbZT",
  "key11": "3gS8R8pnARF79QbAjJaDNHyJKseGqFquWSW7iXH2kFoDsU992fv7joy5QrvaQ5FpPbuVpzXfxycWr66AnoTND38b",
  "key12": "3SyupTUyn5ttjk6CTfh45wTNtP3KReWuhGcfs4FFSxPiJnEspUrCPJqFeTc2AdqM1zWY4fDkDNb251xSmQbTpHA6",
  "key13": "46rGhhbf13ZintYeh9JEuutWEuGwJ9SYAGUYJY9uLp9oNtUP6TPuhQnXnUUJxuC445dVLy91qXFyrYdQmjPSpbkF",
  "key14": "ain39VdgqjnoKPA2sUmFJ2BAHf1PwYvGYp5g8p4ULTfy76wUQ6Jng2KpCWaQyi7EJ4Co5Vg2RWi1uoNKgZxcTuB",
  "key15": "2xatXDYf8ay6gtdggtHd6PGGjmLT8zWEzzVtajdNWaXNJXh6B3tTrGvDUWf3EXWwFjAKXGa6yv3gQSs3ERarzTxB",
  "key16": "o74G9fxFvjUZUccALsENMyMW5WEabRRnQE2Wkw4NKBPv8Y2SUQG1453vKdT842kfykRuPsUyPv8Qh93pHcmRrJw",
  "key17": "3JfgoyJxNJ3SbwCgUAEG9L3o9GsV2B7Upxy97zZAXYu3nUsKJrseaenvi1qvGJyeFLXb1pamv9SVsp2fXRUvGRSr",
  "key18": "mdQ72YC8SMrhTo3vrZztyRnBPkG5BMV1b5GZtLnDPP8rmg9pSovKvFUv7RkbFgjt2yk9vhR4oDG6c3Zk7wU2DeZ",
  "key19": "4fegki1DBSfs1wonN3E5vSxRuEjVLUx2CogaZxxQjp1a3nfch9PrpCG3w2DDpF7JXRuaPFsoKR84qbNj5Fj6oYQZ",
  "key20": "5gn7LMeoazBvacGNNPNWPfSD3UXH9k78U5GdgdAksDYmTUGmNAnfvnxQPXb7ncsMGov5SeWuKxmkjH9VcLPYtWbB",
  "key21": "44HKUsPAbYcbpZXE4sJjmECg8FZ3JeAGuS33C3y7h2RyQHGdAVckkYnVn9Yqi3PtPJ1etqP61UFafwdsBjE4jt96",
  "key22": "4xunT5onsR49pBZjhe3TDjokBCtofP9xB45uLuUerpqsZHCvuDQUz9FjQiTPuEbPKGK8FWgBjv7BRMp3KKDXQiuy",
  "key23": "29nYLMKUpwPCXtPkzhbkGLagKHprLCzykrymBb4v3DQHUDabuto6dqDRXeddm3mHd81xpG2bQ8teVJUWztZ7tCFw",
  "key24": "2FxS2k6umCP8rh2aDct3oCbfCd9KKbC9qgKoGZ2xmvccpHqs4hoVWu7yEGAfmbxsveHjD75jfDgPsqTqDomoCEgT",
  "key25": "4tGSGpN8p5x4ZVg4JaSKxNCwePeK2q4zSYYkpCPoSFi7zKpjybTUTwtjugkS2D479oi5vW47XeuBXV6cDGoDggn5",
  "key26": "2osjS2Unkkc9EChGMThVeEnokWkYdVqBSuPq26NMtVwSjs7YUy3sKD92HQLnmrkJCPMJBeMwAUBvAWqdcAGZXdKM",
  "key27": "5Ekm2RY1YxmqUqUuUKeJ2suD2qJM2C6VTqWDuPkZzgXjBM95pB57PqcmtY12LPP8ikPQJmouZbpuPunSbdrtDLBs",
  "key28": "2ZEAZjx6wf5jVXuc5vxZTMCbX8TzhkMycUjxSqQufxn7xWVpdQtGU639gv9N1ExfacKzJ3F3rD8eMtKAHtPWK7pS",
  "key29": "m6ppgv3QnzoM75jMhzXy3CUFbrL4WrUcEtyGFivLNCWrd5qvtdvPYNn2obecnUrXzDS2p7JbV1xbpQfiWEZH9bW",
  "key30": "2sp84nByDkMVKRiBef7hYjFjz4AxHP7snSxkKR6G27adfFiA4v6azTdCk44s7BG1f6aopgffTocQBiGmLdZZiPfV",
  "key31": "2AbxRAa6ZsrT3MqptXxrGbEanngiicCAjsUZP98UeQMQxKTQuPBcXHGyBTX5U4cmBhf7tmrDZrXqqZGGCdhNHMCB",
  "key32": "3gTN7kTXrwvVeSb3DUPPdDCm12DeM4zah266MC3rE1MwpG2yypwKm45J64BjnzKnjYRx3sbRhRuRWmRih1RHG2Fp",
  "key33": "4ZaZjmjycpCdBZwB2sjp9z9d5qTXEJWQPf2aAgczgY4KbsS9bzq9yquwuf6NRCXXE6gHiD8fb8nFujDKm9v5nkoE",
  "key34": "3UZzh27mivUEmEpBvfVpCUb9trBucefz1A9zdQY3UYQBet8Mui9FWoswznrvcMsTieQVATUq8JhPZUkr6iQrUdN2",
  "key35": "5HbaGVn2FzmRDy3GWTa5tKdrKRFAhWmqik5tQHCvF8bCJxiWmse41JrcWDznmRVt8TRzpCTQ5gJw4wPFqazy9sLY",
  "key36": "4RAKZHdov7brUCMezDD6zTEVQNFVc99si33XScBgFj2apFQGTddXb5iJfboRGz97h2F5Yw8g71CYCNJCSagSvEMQ",
  "key37": "2rYhnyUSGDJQhmrJWEPE7R9RsG3zohJUwrCtsoHvRVpmei7hXrVnYH29LEEGTCf12x5enHUGEpV2o3RuMPx7J41A"
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
