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
    "JxGqR9msJR4tUhMBDA489YasAecgSiix9AwtcJZPwG47VBRXVkdin3EQbXQJoorbqcxxx8UgSy8h6sD7y5TvWdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vzbt8gPZobt8oEXE8RsjgETUFc8gW7vkzzykTx1iDSBAzETFCbUUMPmQmkvfeANij3Dekvk27WX4Zk8g82EBDJL",
  "key1": "2mGnwJKfmtcCa8suF5FmK5zAtbq1uTyjZ86uZYtYd9psBPRMCWi3Du39oGu2AZn337GQfPC3Fx638FVCJvXPmufe",
  "key2": "4X6snNAZ8K8TJFWV95dCsdMYDAuMF4XSLQ4u6pdsMatSKjgvQh443jTDETMZDYWaKi5MpKRJ1CjZ6B4bpzvL6qbC",
  "key3": "3Vi1kgZh6qgpv3TEzw8EypkXRj85D5JsH7P7aoQ5ZkRGxSi93hFcj4W3R2uxkfowTy8EtrRwo3PtBuKLY7euK2aV",
  "key4": "5CUxeHKAXWB8MirHz46uKZ2BmTZTe3USRFcKxbqRpUvDv51N2DEQAMUbCYXxk7o6cnzmc7G6YzDggN1ajbMyccfL",
  "key5": "3qwKmJkEsyN8RMJ52K3CVnBUbD35skbPnvbuVjED3Qx7VoTxtnPNTmLsEkReRZMxQEKdScSv3t1aNyiaWDXqKRha",
  "key6": "2FsEp5K7KvzsC1sGA1WHuXZhsevL3unPRBMwNm5heMqxkoWwddYK1QDyhzZ3wd6qVk2uaUYuZpvx1wzx2jhfLDDC",
  "key7": "5Apt7CZrrGMDeyRgxR4mvWTB46ifCEYniKi4eVUcpk3KHpUVUqw29iwAC2metX91akPba5vU2PfDZL65ZdzudPWP",
  "key8": "5g9tGQUBJCboFu4czSUWjGUR88XZ7MmMq9qawdwWnKZeHiSdvoH4ARRNLxE3PGbqn5nmRwtxMq67KVPCg8LPimiv",
  "key9": "WE8cTukr84Pa6kc7iWmx7WNiPQGASmqmoA1Q5txBAVR25JmGHfhfbdRKyiKRunzJ98jFk3o6HJeeRNuUUijrwG4",
  "key10": "4qR6QgB8gA5m6kxcrZApGJ3JZKgSFZN7b65KjYyCvG2rJtf627jgUgBYz25ncqX4UuJG2uFtWUxvTi5VqkEfzHKh",
  "key11": "uLo85HKLW9teoDGAcYK9U63RvikoeYMVdTRUq2UL3MCwZ56mHW3wDH2rJhVgr5DJSjm31o2FSkzP9crrK7DL4R1",
  "key12": "28ZntQTAShPVSV4RJRu4B6wk9aY4cHLjbYRqqF1qpNo9S5Lnf49JBu9t5jknqdCtnLZUYrVnpcyBwvuBcvvesgKE",
  "key13": "1kkYqjJcibf8AWRwB2xCctttgdtxEcYwVdpiUwoXAq62mD42SbLaKuqkqYbpwPpL8G8bcJKDRcnUHPjzUB4RQU2",
  "key14": "2HpX1G2kNvSKdTHAFdBZxkZkQdMKzfXSNCVx1VSJau1JhbGz4jRh35MiXxQhG4Z5AefNPA5XsJFa2gNrQrLJNR1i",
  "key15": "4skdKtNWnF3DXTmvkwH5KZeWUvdExzdDbWWESNmto5YD4mRNWBw9DGHuniXnwiXYbSZj7VXk4sQWVA5tMdFHJx7u",
  "key16": "5d8BDo5DW2B8YiBENGgDKf6i2nirbvWe2fzGTZUeP3wu2QPRMTTx4pUmAc5BUjpNzi2E8Miz3iNg4ZqNrf9wuywj",
  "key17": "3iK7WT91gMVzV9myvyPwShsDvd5tZppY6jZogvbSLaxWg4uaB4geSapTWEvUnS577TN3rznJWAgrNGEjVGT7STaY",
  "key18": "4WYZe2YsLgxHgo1kyHgJstkTGPsTxDpebxrVrejDq7R9YNywrCnterFYmV9ppQx8ag6H3BKnBKDFvRYyFy1NuotP",
  "key19": "584ktAbVjuvLj5xvvucJzPaKMH58CJKkfDxrK7EgrNPd8x2K1UNrHANsy5DkKkwPvKGgN42BKwxVRurrUYuw7yRK",
  "key20": "5Y1JMQapVtfG7WpkRgmrgb2uMCvaoaoDQZaA4X8u9mXBdd6WSLJ3gKBYpeqtHUTq4jjVcx7bC5mc7sS4G9DVGfKw",
  "key21": "a9B8w2rMvQ4QmsHPRTHpHF8CqFzqH437g4Md6B1RkccY4FnKP9o8uwE99f4biuV2P6cuZHf9geRuqGuVa3JWv7P",
  "key22": "4cbXNN4oUCShP2EnqiBL5h1rVE9cTQbxdsp3CMFTXGyFtybcV8Uz3qvEKBboP5se916R4k3mEbhHsMsUNV8vfE2F",
  "key23": "4v9pKKWXtx71jsgkh26s7fG9ii9SVXABiPNnt3dmzYzChzSzKcQRqjCkxaAzFus8ngRSTw2jvVCfncXCZmoHPH8t",
  "key24": "62s6TY34WGxyMKDMkd9XiyqYJdYT3o5XG5RNEUnyxxkhJrq3b6Qx5LLwNTrN3fmAFCPc67CYXi8vb9sZgeHDsdKp"
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
