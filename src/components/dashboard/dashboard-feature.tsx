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
    "Y6s991EM8Vz4KdB8H2WzLEBDc2Etnqqprz6Mv87VXyba78jSCLrawKs7PJXcq2ah9qMxu1HaHyh8zn8nN7CPiWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KcUx2nFMhbHsDV5SdyDtoVU9Bbg8qrdfeQ4MbadpgoSKfXGQv3bXc1q4BuVYA6YWzc7dQujH1ye8AHqDGydBMki",
  "key1": "4ANZu8dMHJyuNqCuutBirkxiWPcpN6mcoSEz2GJgRiHQquVkkuPqpkDKxULhnmzHgRRWh96uXMwkrH8raybnYgBg",
  "key2": "59zDzt1ikY2MHXXsqxatZMwbdHPtNGJecRRuTZhvP3567CWBUA1gUvNeiEXk4one26PL6qTWuwP6xtLHr9GfN4Zb",
  "key3": "5rtXtUmBdMKFVFpD1cAzosXMHpsypKPoR5AY2YAzytsRbyUFW1Mvi1kzrzaBq1RXyqoVD36rMFwUUQrriTVrsXcH",
  "key4": "4hQ9qEfrjQqt8WCyureJtpU1YhXRRhU7rh27QiLYEokRQB2v2P2PptMq8WjaLTUBd3cotzwiJ4LEcksWjGPhbavL",
  "key5": "2Z4i4bQjJazu3bfLWQkAGUdeQBjBxmcQ2oD8bvsDvkk5y8zifXoh7o7Ri5c7FbFNjxMiLF5eHjryCBzta8HNxA5G",
  "key6": "4yzVEe3ZAUjwwGWSNMJPZyzWHEVYNy1YDMjimqFv7J13UfVxhnj2WoLoVYkPu7bmDY8SqQQAyqsiHkYCjFbmVoUb",
  "key7": "5PVLsAeca6g9qxrTFbdqhtcKTJjDomb74vXYuy9ifHtqVZNajn5UrueBPdwikPN2REmA3dCtrTwGnz2zqwzXtP3E",
  "key8": "2vDVxQVHwiNEfZYSX2V6hWQ7Po54m7ETiSnVu5kP9DtyjpNDR56riYQySvd9N5uAuhQH5px9wVpxJxDHCexL2rzM",
  "key9": "3xvCGXxXsunEjRZoE9x266U9eGjC5yprr6rvCGEAPDJpi1SCJfvP8u3AV1VWCo52xhKvwBPfMFbcSMVecLSSW4cF",
  "key10": "rLiPnFzSSu779TRmjoja6Z498yEojx5xmE3Xs3iAYBvVgBeT3T7MvEyipFodAN8MXC8KWYYSPzxzHfiUYyMjZiT",
  "key11": "RocvW5zFML7D49bQ8nXY4pS8t28McbJk4y3pjRicPfregXE4zvLF4GVTithXUS52Fi8t5FiZmwGqYBGyYoLwcD4",
  "key12": "2NJoAE4heFSF7pzeCc2ANnC5w4BQDPbBbk94vHJvxjKaYXU86L29MbhJyrqYwXmYsDd3MfrFRk2kUVDxUcPsWu1P",
  "key13": "2kpY3VcsMGZYQP1QPhyFg56HrDbWa61FKhikZa5b5oCuJcH8gmD795tNrHDU7TiQ3sfsjmfqMBL7JhA6JY9wCGKa",
  "key14": "65RxjU1S4vQyJufYCTHCHPH5RBFNgZPzFriyoseVPoFrgzrjPk5agZcd2cLrH4uqwhJmcE9M2kQqREkE7ktJ6mUE",
  "key15": "5NddCsWhegBrjzSi9sRGVGh2ViB3s7aaG1PoiHJkv1oHTsMBhiKD1VR6rrPaRxZGRKRCLYBvznoeSFNYFLvm3RU7",
  "key16": "2yrH5cRX5uvXwebaUoqfw3nbzKRQtLJSkF9cPZpAp8ohPMA7FqAvjcT1N8dZd2C7L7cxVhvqb55Lwannc2zA9hJS",
  "key17": "5TxScGwgvkUC996hPwraXaM3eii9sebT6fYYCe4NgFSXqrHUpQ1ECtVvtJj4ynqN5JspseKJnhy5BJPDntLXVt5J",
  "key18": "3seR7fnGqtmf3bdVmkx4PpF7bBvLXaAyeFbtiaSYMcvsmVvEvnU8QwBeEiBoqD51zJVcbmoFhXx4hDy5TpsXyC6L",
  "key19": "3VWqSNDYLampXWYwteurycY71PyiduvBRx7raGrKertRszwU5Apf7Vs8Fi6mCt84zKs27xR5W5rVWGyPoa6X4Mft",
  "key20": "2gKcERckoAz6EMAhvY7BsqzkgX4R9ic1ZDVGwYhQZsPXTA5scdfCpVGQMyXgpoAYPrRJF1L2VpCkugHvmH4RyUsc",
  "key21": "5bWm4eQq5swUt6yPWewnjZFSiQHMdpJMqEoBgJqGtdzv9ZsPERhUK2TLy6ZvZqzve2MrYgcAbfPuFMDXRK8TL4jt",
  "key22": "2jPCasVgr6jJje5yeqkXoTUH8x7crmcTybMCZttkrQSQgAPw5pMtW5ABakjz1UsaKM6LdZ4w6FYrdHrkzwdkpo3G",
  "key23": "sFWPYvFe8aXQnMueAAYViHG4Bb6Qgm12uK8HvFDQBFQ9nXZBJBhrpubsJSMiasPc9UTM5XbhYzottDHdK7DMGah",
  "key24": "8aGxnmVrcx4kBajXv7PEZBibjewhASZDtHNKtGARrNjrVAuRSueDV3QRRLbDx8GwZ2mXR9uG1BF9H1Nt4NRnWN8",
  "key25": "47vqqahXKXms4LETGzXc1UBWej9JBs1jmwhyLUQgEQvuin7K8qLprzTCpthu1b3HpW3hcDeYY6XGEu5SRA4eSH8m",
  "key26": "31GFdciTCCUhfqYbJP7cd8eCwQ8s5Sh8va1jAhqP26MAoHyLEEJzHDkzuQHpk437QBCsmuiMamtz3on13UdQkAh5",
  "key27": "37Dg1z9uZW8Un9uRxYNem9xYtv8UC5KcBCpbZVzaCiCspv8ppL6Pi1q3Bhqojv7QJBQUjuCD1uUsBM5UTjSycC6V",
  "key28": "1VfJNybeeeRBdCchgCdUKKDpjpFCCmoRYr1qWuaaWba3HYAfGovKthAuEnkARGvPyS5GxR5fvnxXEmMhU1VDJDD",
  "key29": "58gEterCnv5yXPauMFtZur191JWsFXBKhw7qaj6Ltr3iF7nPD8g488eqi3FfSCxwG3mZzAM95poNjtMHHpRV2qDU",
  "key30": "3gxhcjaNvPjudP5vhyzBxWk66RtTCTFuBbm9jvSG9XDbzVqxi4oiGH6d9K6qZ7pLTHhsYmnyRJ1sTa4Ss7y1WET4",
  "key31": "KYXxGwwmy7Fgr834WKprMvJMtxsCQBAKuEAARauCj4FqFJUC8Z9t8Dbg8K1QmTGPmN13mzEtsbT7Rmh98ScLgEh",
  "key32": "2nXG892ebSWLfYfs78ZUEaYFyKvEhT7PGDtpNPRZrsHMCwzec6svaMYLFVbsAXVhMCBzhtBdCmrEUZbZgfu8pZRt",
  "key33": "4AtGuxmQTK6CAA6eAgKRVAviAFJzBkey8eKwXpUEXibVhMf5Tey6JA1VeH8JJxsY5JvDuseecgme7eRVqHKakQYB",
  "key34": "5oyTVN8cSiWePE5gdtDGfE2RHMyvofa4oE12DMDQKBo7xWs5LTeHYjEjYNTFnJ5Jg4DxwAcKK7UvMtzY35TjgT33"
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
