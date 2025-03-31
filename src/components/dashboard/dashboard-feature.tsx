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
    "3spHjQr1ZxWpE2TeNsYZGze4WerniMdPRLd65xXr8111iURa4uPUnJJ2WheHf1tZzgJhioFYRiEm7pS43c8RXW5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etKWfHMKj7JPdfESAR1BCZa5P8oxWkBqjatZAZVej6qbtmfAu1oKnwZRQkuuMHyeEZoLXnq5Fq2U87aHaTHNWJf",
  "key1": "3BTKvN4mFvsB8tnqciWRucrVuwuN2uaCtGEn6n3PEpaarnXZYQctr8DvcsGu8ynW72xVQodbjx3ps8iDG21V32B2",
  "key2": "2dRKVn69XGmhMmctniGPXCaewcqsimAE6v1kMhqPfSTAFtHVJn9cLWd8FFjbVyyxXrNzvq3uhYy91SvgSPf3ro9D",
  "key3": "56GBxF1FgffBi5iz5nWVgrmKskkAb7UuoZ5GwYgDeUrmo2WUYMuRKkSYgKVBfTo4RSatQQqNUEVgg71BZEjg2XqX",
  "key4": "5xBgrhF46CaHiyxxTLhtU2hrFNKTY581sxnMHH85uYAWh4bwt7eS3QchYDytWNYMq9AUX4zNNqUXi1L59w5tgVQp",
  "key5": "fJYa3xjQ1WTsEY6uHKA3wQPhKibDyJcbcBRAcKMkp3nbYKzTYhQVBMqDtU3HmrKnwgEtcScMBJG9HHvX48EkJiT",
  "key6": "2kMVVRzwEDyRed4oTzxmHUQb3UWbRKKHFtHK8vELkWBZ9n1wfiJtVbnH9XYkTvYMC5kQUNDpxsDsGvrNrTt6AY4N",
  "key7": "4nMfsfWZRWkksj15sWHuVLM6bc6uAhBmgG9EUC8mmkoThKNB12hVphk1yupstjR866aid13S8yvDSiJS4Qc8yxVy",
  "key8": "5qoKgSq2RtdPDJg8rFVf6rJUaL2972H8H7ndaFrdzmE6iEVTMaxu9Hcnve3PqPdu62QEi1ZBCHrcZvW8EwkdLFMV",
  "key9": "4hJ8PVt6Qx29i7rTMGUBgfpFQa2LirdeeXFQEEbuUdFXdXY6ZJSRMaHvBBL7Ybgj5rEvhUHw6eMADCNU7jAdwNnL",
  "key10": "X4G5mc8pxx2UToo1UsfDpeURUX2hjmYzPavKBPz4ESWMgFqSyfHfYe721SaAmtvxBndxJ4Znp3acqjraUwRLw9Z",
  "key11": "2aS9W4Hqda85ZfrRaaCVoTRguai4hm3mMzMBPHYK2Q2kY7NLskBXaXJ4LuF88CFbdMeWbVxgNPGzDAHz2yyda28y",
  "key12": "43qWH9oEeSz3MRRHaiJqfnB8TNoyXCPhcpg8ukEbkaG33b2bd13BU7MwzdQMPgEgJ9ABXRhctRsLFQ3xWDpskvRV",
  "key13": "29UoE5VctdeW5E3NA3bnTrmgEXb2FRZu5zRadfrRtpT3ipkKTDqdVFFuoSq96TJ1aqjxiBajJy532WGUoigcBCXp",
  "key14": "39wY6R4Xm9oy6DVvR3qghZhHD71dcbdAGGmYat58qfVAk3P8kTxNp6XavbF6K57z5ev8W9qYun3wfVfEqyzHteEn",
  "key15": "2a43gpdQnQEymWjtRzbvfpF6uwtKRCp9iCXc5i4T2kG33bmmaZWMHDG2GL4hJ4JDH5d5z67whsvUoXXgxWDDDEZx",
  "key16": "42SGzsxqXggSwJQPn3YP3fAUYaFCL2QHMMafRWcyd5sT4vvy2rZnAtuxvkk4h97ZAzGDoqu848r4eRFYCJR2YVHp",
  "key17": "52bYex5AKXCvXJSFgA1b3HRnmBTud4rx4uwKd1LiCjEeg6Uhe4pNUnq4rBhCveWwU2dWRqAbKRR3tzViRESPf7Jo",
  "key18": "5bUs3EC9Q7mYrV6TRKGmWRZBUYMZaD7pHNLjj3sx1y332T3UmN2qfFrgZygEbRGZy4Lkvz5eUTzLHaeeWDzE8aSQ",
  "key19": "3BsEvrNpX7sMrBi18Bz7m5JsmPvuM9tioJKeBaNaUfhXCjc2BuHcEgaep4SZ7oi15vLPAx3YwSZThy8fQwQ7m2A8",
  "key20": "3ecFmQUVH2FWAXmLymVUUfnciNmP9kxQmAvVqGa8xVVm7QNGRSrmzdj36WEMjCvnnChzU9fLJaU8nq3ttRehqPMi",
  "key21": "44mWr5djoqp4PLKSbT5CV2JK2u5ZyzzxghcCBXoaz4HKSLH6JxQWtjyEAai926WYJFAkUomRerSftfxDZFPJKfoq",
  "key22": "ArcSLLE87QvWm7T62iED8AywdJ9HjFcVyAb6RPaHsJdkcmZ4tQaaETbRUDKKLB83cFfdDEJXB3zEeR1Y7oduYi8",
  "key23": "3aVz1eNF9QZwnVP6eYcHW4CDWD9rrojb7MrkZJWqzb2hnRep1kfBbhzrqhwkdkL91P91JpD5EZuB2uqZAgKXTMn7",
  "key24": "sNCjmbWmC7ukU5phiR1Myj2kpbSX4WnSxWnMLT81bawwPbaTYNdicKbQwW9NwZynbA3X9D4dsgMzF6cXMXWW9Bk",
  "key25": "KY5qajMjiVs4tjSzNeEdzcNYGwYjRZeBJtqKZrxikSvTBdzqYwKFeZ7CXW3YyBJ3Ryc3uBCyLYmZVBW2LWBu1GA",
  "key26": "24iTVfPFmzvKt9eA7P9mnN9R6BwhtZGgzDrmFFkELDWtPE89WRJcr5tutPZ1aKb4fXuLADXhJsYD6xFjgM7a3kC9",
  "key27": "DBYt5LUC7G364sJNh6SYSxSCSxAgoDeuz2K8omxC2KFGKFr4xkpDAm9Xq7jG4WHJxKEDAqj56pX1hq3GZGT1uGT",
  "key28": "2KPrhHaPb1rkrnp5b6suBXuxsfPjhJBMDJEoTBgw8Uxa4AF6F5Yq5BLDJgxAdKLKcvSNVs8YfeHKcdHwYdkT7yEW",
  "key29": "4jR9MF3u1NWi9TKWb7WiijZYvFskjcLCNzDWBK3qkEYYhdtFADiX41cKEDEXkv5Xtjxte5ebSHxBkrYz4Xb9a5ZV",
  "key30": "5Dn5QeaZMXmxjfdcicUiHZ4D81oQ46gAxw9h5h6mqowaQcnyqt6DwB8wincpspkQH6MhViaHQC2pvasNGfGfXLNH",
  "key31": "2DZj1VvWEVFMwj8MZ841pe47JpyeaaKPmHAUqUjbhjij5772qiz4uW51T9z5U4H1ac5ccqJGEtJ45F1hDnkKDsh1",
  "key32": "2uB1nA7FWx1gxbqQdJ8E6Y3yFLVA28zk7yHcLXyeiHkbWDDRW4Bg3sAbdW7Vi59sTxVSVadrn9HEJGLDEoBu4Lbp"
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
