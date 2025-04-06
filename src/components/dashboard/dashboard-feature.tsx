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
    "jPKtAccpmfDt3E6ktc4URmACGMxzgfzEkHKdhwktLv4EfYUi745Gbto3yVV2B7etLuBbP5SmVXYoVeCvPav2rWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "en8LCJcfo8Bz6MzUajwPN1jcSfTu9PUTNWTS5P4cXZE5ge86KiruQ8n2oRUFXLB4VmjADCa4YXbtg7BgP2XCgYS",
  "key1": "T2d3DXhZVgZgP5K1FdCvGMfRZqUC77GeJCEqVjEWMKBw46WBwDcFcfqsvEHgYFUPQwkj33Zrr2KP4BF7AWw3WcZ",
  "key2": "5xNbnaH5bNvccK6TSLFe4GhGvCEbL4VS5Yuku8ZPhPsgz16JUTmpTWMXPShP8kuM7fYcQ6bpQXD2dkLcLEvLt5JH",
  "key3": "4Mi9idTyHzJZNhgpyJ17b3FXzqD2Xnaf6BxLwQ6rrKH4BYakr4bNcpPsdxvmQ1sWQaLuvrHvxpAf993RJU7g1LRE",
  "key4": "Dpd5ZUyjmT6eJzxhiAXCZkxLPVsnJGQ5fqZo2eS7LhBiXdpYvqmyuUqzeJKDzGLpmz5gmEEov4B3nYP6G9eJJcJ",
  "key5": "2yxmvHLcMLMfq4uBAZ3reqHPbTbUvmZYXwTXpx2xFwJbmmBoxKfFMR5WQzaihQq4dNAz6mLQsYzCZWip4UD4w8Lr",
  "key6": "2MRWE67YFyYdpVabMtKvzXBLabZVtsZBpiMxtxfMmwLnk11rP9MBZaRvUx3GbumWGrEX2n2TZcut2LjM7HK6wsWR",
  "key7": "3UPaKqFR6y3KVAavh72H9hCnqW1LpRd5QMfgkm4zPUP3ZrnmZcTNzU7CbpEE41SKCJBvSrr8rkc6ua57zjdGfFRx",
  "key8": "waj5Tafp5K93KtubygVinVgiJEg3KwEnoUa4rq9jVWYXv9npbJmqyF9fUCcCSSqVCKnMfYXsBuj889T7uCeaxdg",
  "key9": "2kdqxqu2hCC8dAVKgZRzQGuvfBdhWdKQ4HYV135VzxhKNn2h9pGgU5q7QCbbXkf2ThPBYC3fsnL1Ty76Vqxw1SKd",
  "key10": "2RfEpeddnqeMcF16tDctDGhV6Bn7d9Ygx9Y2czZ7GqQwnWnxptg8eGWicGPZExuH3tzW5jPCLiehwBBirxa2KfpT",
  "key11": "bt8kRptdss7poJZkeCMzVhyBBB8jm9RyZw5Fqmm6dBLbM8N2bkyWfJdmZ6PtK93hsyFBAH6DMWamHgyoC41SG22",
  "key12": "2DMW6mqC1gWuMZYU8A9VJ3AJeR9piEtaPkrdbqJyMxmqCrkcngB5FZkfo1aYjV48Pqeg7pdFcf4oFd9etyMta9Fx",
  "key13": "3kegoEsxbKRxABp6S6X2dyRYcYAE9vMvfTfyG5gkHNJpPvqB1LrYGksNjGeMyig51cpd5PopdGvresBg61auqf8P",
  "key14": "3Q5oP2NNU7vw5bup24CbrvnCzoDwUs9QkKrsEWniFbB2f4nR24wM8FA2L6XwZ7TjXXGk3T4u4FK2UBLph178VcCK",
  "key15": "32Dp4WFdVNm8knG3qPs22KfpSgBcuj2knRVfPCKxKgjxGikfqaAi9eaJmH4extUxaUBzRpK8DubgGQUek27kh8Q1",
  "key16": "4AJ5irgZaP3CHt7kFZQMf9w55QqtdU8djr4CGUxF9grssS2hQ8XWMfYjxRmQXiqVYhNQiTiGBJbEyZnhgjnM72QC",
  "key17": "4vbsUQgrCVPCBqsyBahKb8u4qX9ayrQocQqBquRPBYYT9hf8hWfBzvfNteo1w5jXGBccBLoyaFzHMSDTsN9EkqKc",
  "key18": "2iQVwzQ6rct7L4c6YFt2rXAWPRUxPFgZLiyJkJwoyeT96RtSsb1R91CgBoXS227ZhPYwAUjVVvTbP85SV8Trgnn8",
  "key19": "367cQviToVhWvPKWXGnm6oehfq5LT7Jm9YTmr84Bp2Tk4iro5SRHMd5DdrTbgohAZYoGPrZCfKnPogUUDTY6eRA1",
  "key20": "5xxxevmoLC1991yAaLpuqGcoLFoxcLDketAqzj7kJUbSiyoTmJqQ3JwLKhTt9p5c9Q6Wv1TaHfN8bpxUwgakjDE7",
  "key21": "642pcoQuGwiHNgtcVy3t7zctU2kMPx8fsCj7zGfQnjRuEyhHCS9hGtw9Jp96fFvy5b5CrJSxU83jTSxcmEvsgtxd",
  "key22": "2Qh4M7BLedzJuThrRN83dYMkzY8suuzQakHEpaf4dXuuy7rcUsGNxFbiX8qA2j4B4L9qbW7UUm2WFkPQiFmtVn6y",
  "key23": "nDW73pf9kBiQGNMCurxbE4ocqgCpjQ44WcRGC3kuevy1ve34dHQKNzGYqJN8VBdAKMEGTRizz3GUXziFC1S7LeU",
  "key24": "4iEcdqeV1CjeyCMJa1mKSDCFndqUZN4SgvyW45jQkv1P4VwnbhYbFAqgcKWEEaLERVV9DE956oEd8XWr7xuxLCku"
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
