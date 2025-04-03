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
    "uBz7ha18SHbT9uK7dJvqiY3pMCCYoQp5Z8E1Qk9t2NtFjVmcZYy7r1z2GGBSbkhckRx9xCsZwkqNnhQQVa6ESYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AvXvVPPp2D6HwzgE1EjvLFw5TCpZirt2zwLDk1HsVVQ7C1s5b4ZPw2t8yrbkMnbzGqChUPwXPBLRm2Km4vgdFio",
  "key1": "5DgGXZNRAzAp9fst83SjJ3ZMAx1vCJqbpK5iuqBZxD73Y6uQa6iAV9gJwz8TposyF9pPAMFEirqRz8vBJMswQ6nC",
  "key2": "25PiC2HUzuQwzVzE6n3UM2XqzgSzJYhzk8DvqQGZvxifE7L8L5dgVyknqNFCRZ2QG4DTQd8Z2WQC12w8i8wyY5d4",
  "key3": "3uF1w89W8HmTftpKW347DJyQajL9afe3eWMzCZyujcwKaJjAXXEfLMVx3dbWV3FBR6eVg6fJycoCKHCEmJFmuGKz",
  "key4": "33bpEgBKQmTqi4rjx77Wripxec6p8eafg8BXpZSuUYCxDqH5thXVhSp6pvUBmbcMRgMCroMXiMGtZVSjdPSxpYdV",
  "key5": "wvoT4sRVcXKL1MSHShvLKiNj7578tf6ANa1ivnSjiEF7DQp7BsYZ9UiZ91M6ww1X2mHk2nsuVkfRextyfsy3T5m",
  "key6": "2tAEf9SbA55adjqd27b1TdsFroEfNcpPBfDp3gYD4gVTXNwTjJRwCEdqcHa22xbWiESExiDoNFXthHWtQYnkaRfb",
  "key7": "24GepY7WSgdshesAWo7GPnPv2uXD9rwGWBc4CGBSV75ttWpmLQ1AimNB2vy8SS5SNPQawFSvG5vhW9wCrHxa1Lfp",
  "key8": "4CLJF6VNg9XKg5jHnSkT55V6mo44oVhJALmVBa2CSrAdD2DBJuAuQ37Z7BACUZ37NXCyikojToYyKjRR7uXAtqMV",
  "key9": "85K7z9GCXHi8QLKYyXFWNY9YRgTDwwYq1mbTyoQrtEDy5qreVB3DqsxXxDKJqczw7vphRLt8cpqw2swpVpyyKAY",
  "key10": "ZeL8vCgkCbR9pMbdS4zq87BfmEvqdLr4u4yXdbWQVwB9Uo77eiuhW7vv7wkfd4KqwQaKhTCxfMjs9w4nwDykuJ8",
  "key11": "2yZpj1HiU5m5rkiK3XNybMdV8VUUH4Epg5YCEqVWykTNsGYukyeatrohfSCb2H2CdktZiGqnPPPQ7zahKSQ6tU4Q",
  "key12": "5Wrp96JPQFY5j5DtoVkLRHaowWi5Kt3qzotzJkoW9iuaMnZHG67JEWcNee88owKVgF9Ftok5g63h5txSgZUtFPjK",
  "key13": "5grrWwT35Xj6NcZgTnRcqbLiMJSSnuBSZvnq3ebH1Nogen4fEMoBKxTcHMsLd66WQ2tZUFQgrarTUZBJoE3NgrVg",
  "key14": "5EG7RUifGQH4E8Xy1a8g7GKsxeUR8zqzSg2CDoYjjZFA8xDqxMYQpo4dQzY84pCWgNmzme4nGoovJYbiXpu7aUy1",
  "key15": "3dQZcX6nAg32uxzA4puGVoGpzV9yxcyMkQ9D2wLK5ZZaDMy217QAGSrj1Vc19bDkgPumfmgd46GZKYtxTNuc1zY3",
  "key16": "28SSrrL4mPpdHpLxjavDLuj5BPDbYdES8aU9gryTh1pVtq3ie9LNWKxyLVZ3gUjZbNFKEPMPS9KjB6PLxRW79QkR",
  "key17": "drjbos7kdyvkZ3MoFb36d9eLBeP5iQpYQYpr9Y5JJpbJPjxPHswUEvde8MmGHEqCu18zqAoS1bwtpmGpD2zD74f",
  "key18": "ExDezNd8hS7byvkbGPo8TUw2gyvUxH951aV4TJDtEtnRHEmmrddpcMPTrLyU1hJ2GzdzfpKhtXC9p5WKS43q9Ec",
  "key19": "5sCw92k9X84EHHEpLoKgQTmb2yiTymSV1y9PP5LV6hNhozeKfxynmEPchkWARKzCGqiK339n93Nxf29kgWCdeovT",
  "key20": "49reWzzPc1Ti1FWTzNovP6PtNLWJ1EPCEvTtrCj8mLhpEDcFQ9QeQpp5jrbxsLQBGYea3uupAayrjdxj2a6ToYDL",
  "key21": "4qJ7QowoTuzabAAcmTPRV4FNxdC6bsejmXRFqCF76s9LQaBVjioxsHW7PL2jJxaynbodr9Wp1VH6ni7C7AhVQiKV",
  "key22": "3hYtxBFYEodkqDU1jYXH3nWGXZgc1mWiTzdvDeG3qHi5AMWJiu4WRbRAJ8XQoaKJVaHQixbDsHDijLX1iGWmDJPS",
  "key23": "5p2izdB3vHjNhfyqMXCDg2LxZJ1coM1Xe4tZZFAfN1Y6KxDJPXZzBQFJsBxRSTCppDz6KCJhoWhSQGqDA4kQB5G7",
  "key24": "3mDAD7gAjiVX5YE2QG3h2GJtKNM84iYLg7jYuTTeS9PTufH5cTDbfmgpscsrmSZ8aFvori22i1XZxSYWgSQVncRv",
  "key25": "aii2NEF8jrR9UY1T5YnKiiNkGVqDeio9nVuhigiVp1T9nJ66tPjQ4wnH5T7zZXmv13gipfvcWZ7MQeYn6sYTTzc",
  "key26": "3pBou6EWdb5x72XykxGLXLB4M6sg2KUsRiFwrknHCEkt4CrPdfNEvmvCAyeHvwJsTVMfDaDMC3TDm1vV4XH6GJo9",
  "key27": "3qJjcNymK55BVwDtWmqY4b6SxooeRKPDSKCbsk9w9uNTJnB1vPZt6Jz4xPJ91F7oPfYma1R9oR4f1TYWdFDqecYJ",
  "key28": "5JDpLGx3oSyLqpf5fjxS2pZMdmmj39kcwcjNawGxMWANzPeLVSYtcVxH7dU7bd2W15YchkxsPUXijMAwU4dymour",
  "key29": "e5gVKYMJh2ykMzw7s8NRJ6wZo1BnWvbwfGTWkpdzau3uRG9FgMF2v7CGDbk4gUsXoq5jBToTiZX1hA6Lo27MPhL",
  "key30": "DZgjAQiu7RcYDXkhdrsY6sx7Gcga1aykagZHJF1cJGYDUV72eARsyi2wCd2wZRqKYdxNSEb6hnHv7cei2Jdch2q",
  "key31": "53pAQ45YGHmYfF2n7CeyYun8DAHM3T2jKM2je1cNCVzUCi8S3xqZ7vQKwgVafF4hhDibDxC5gz86o1EWgcnrbKs1",
  "key32": "jmK532rqqWgnySXFzpjEC7yy5MjghueRFiVXQ4QmNG2SWZMggZmvYBCnD8MwiYxhEEsHmmu3gqD8mQLiAHGboqL",
  "key33": "21yL2e1xrCXJVu4y7s8sp668b2zvmkAqokY7Fzzd8YLksAwtBhChSambrAceqPpVkspUyQAk4mEhAP4fw9drqq9W",
  "key34": "46BfVnjxvSm2Mp4s3o5jVbnbsTSx39dXtFgTARuJyudnujajLfXMnh17aJHv1DuCvGBGvSPziUbsipLigcdCA3v9",
  "key35": "QVUX9AoocdxWtD4vAVEbb4wMRKFN249UDLYJdaSPPuDpC7ZYDaX1Nhozkvd6r3hwy5Aw1NAoDQESJr95qbVC1ep",
  "key36": "3a7xhQEWs2CawQvBFGkKZrvGUdhjbZL8xCyLnKiTLQZwS7SFEuc12j31wZE5vC54tjBByY4SYAsmpTVsi7PLeh85",
  "key37": "7kgpGCzX5dhe1E2kdL6ZNsYg2ZUAMnWY3SpHdQVRdWzfJDRphnHt4eheY4zYg8H2f85xgJRGFpMfZ172vYy8YM5",
  "key38": "2CStZ4RvyXbfwM49fDJuhDTsSZL5GWqBP2yHuVAQiNrb9o6p3foC8S36n6EYm28nh9rexrycpFBbSYKzZSMopcxR",
  "key39": "5fPPLcXkt3iemdzErVkTRJxCk9UiBuHWnE6njsfsuZznvQsdck5qeTF2nuAsbMoowWRxKoE4vXKdRhtjbrGduwZT",
  "key40": "45uxUWBNEPcN4X89Fx1oAV48jcgKD2PQPQLiAQufVAMNsTsmWseob7fjd7xUEKJ9rwpuxcdFKsvuyqK7EFZ35eLW",
  "key41": "ya85xKzRMZX2cqhk2HNkYpGZGSyJjFnGLohFZqynaaFasvSMVrLw7imdWQrGBrx4v2PDYk4BmwrgkKuJ4a5aBok",
  "key42": "REoybT3ygB2R3AeSaKWwZrzQv2XKRzomtytjmCmPUeRudoAZGqPM8pCFrGp2r9Qjog4F9kw4izhaScTANhU8RYr"
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
