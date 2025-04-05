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
    "3ApXHWe4rpG4uocZ4Vn8QBLvWwxe5d6uLwQ2Nx9rGEMVQYQMs1PdESXuvKmEzP9oT2uFh6Ln6hcDbv3oCznzZ8hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HFhGmyTDmKiSEb2MFDjpoZcnkUbXFhjsYeWtZqgcRy9o4gpz8Hcgm2nSimhCWquwBpgzGzK6YYpQcuVicH6REe1",
  "key1": "3FCDUzZyc3HPmnywpXS7BXXCKYyiEuziSrv4ETuiTyNaiqpNSVTKRXHE17tq3gxSrkvZw3grpfVLwdwMLRgaXpVv",
  "key2": "So7RGCsu96PQqpAoVtYq9YCqEWxzYbyDtrmksgNXQSxBGhit1gy6kb4pW1bTtEaDRvT7rNHSBtxvbcq4Mnxmeqb",
  "key3": "58iu2bHLNnEEZvrWA5CM5hPRvoNGTNY9BohM9SaedTpSLZMXqXrEdwjKUV47C3o6PGt8si3ei1uquSnP3evDo6Mc",
  "key4": "4hrgePBLzQHoCcpJCwBkwGkEShrwKhpC7xpqLhvug2rDmMfKu2eee5V5RFsLDqxcBgG8XQuTgWfb7H6mnMgUX7fQ",
  "key5": "4yxzRSQ3xgUzRNZgZXuCSGekw1aHTsZQuk8iSYvZ8d6xviEFdr6xeoYMCcRrkdjz5NAZs7CMRvZ7HciGMkoiEThM",
  "key6": "31MUXm6jgoWC33R4zUcTUbiqC9jqiiRaRyvCRtV5jUxKVotrqjcLvJwSdSRDvL3NfyLLHxWU1117QL7q3mXSRxXS",
  "key7": "4pHN13jdAxtTYahoipe7dHLDSE49XCrN43Wkpeyr2CqUGpjsmpME7tWVFkAA7CU1XxArWywDquZPknLc2XqSbgtu",
  "key8": "jzURk7avcrx2je7xgFQGh4NfPSExNueVe2V1UBUj77FsyH6zqrkN8b34x6FYTvtRE7qtWngqQJecJQ7mcoV3qEi",
  "key9": "3hpxw2JxAKETVcvDAp2pbWzJHkVQLrEb4bKSSUdpKvtg7PcXSm67V28REgS5663xRoXZvXnQLiu7A3azET1Rq6ox",
  "key10": "4ps8eubpJ3zfGH6LtUPkJc7BKhtiygHuwomXaS4eqh8a6Y3d3FsNQCgxZx3A1EZCM7rc4g2rfopFAjzXR6nXFzZ3",
  "key11": "21HAtq6K1ymwkQQUzbo7jUAEp1Wuwx2vLSc6b4ABdFwrvgrTcpctKyGTNpBDRYYiTQs6yNotYBUzuoFEXhPdFiPa",
  "key12": "Y2YG4EqWGWEhNqC48gQg3GZYnXwfC4aJ97D6vpVM5Mc7QoV6WycGH12QCRir8S5aj5qXFWVFCLd4V8m9hU6f6iX",
  "key13": "2D7W1nDHspWbr7DbTSLvmWivXjA1bwe6EwFNTkViS5oy6FKcKiEYunZxH82vvaSkKUxjQkjUhpehnYEaNGL4grhJ",
  "key14": "61rFGhAZWXpVPxQaYUtXrQiBiuMhjF3mwL1DitWohauGBSC3ST8bDkWQpC8uaHh9CnCxJGzzUE2MDJ3Xey7jAwsx",
  "key15": "2LcPFSfTNAHGJfLTZT4oinSCBLn5x4oebU8Nwm5gzeg5tvE3SwMwGLp6eQDnsp3qhpsWb7n34TaxSjju18FFbTfH",
  "key16": "P1whQDcAwHYPxBxpMF63cvjdpuJJKkF1uZYVDLKDUv87ncqNc9kbTbkxfLheuZJAAt4ktFACqktLHQf8S3mPLZL",
  "key17": "5jvawh2Z1B6LMSJUCGdeFpBFbSGAqtn9bCVxYXL4AaQNjbg2yPpetGknWqe6ywZrbQiZeETE1mCYUx7jG4nsXWXe",
  "key18": "vnnHL6n4JpCtNWf1cUFALro6qehhWPBpo3ZPTRTb21vtY7Fm6x4u5sSBNCAKdbVL3cbXVL8YmwsuZVQfPUxafid",
  "key19": "4dCfZAozC6Xa6YTD7UqGRwwDhVMVtFXbRNG8gSegNLupp6iwRZfUEXoFpEd4x6cpKyPq5Haz4utRKBkG7TjT4vRY",
  "key20": "GQZqKYnj1cUVYXVsPyJpwvd1v5z9srYFhFo3CRfh9j2bGqNooQfVJwhc1UK8XxKnmrWu82Q1aZrzPUWuWUAhkSy",
  "key21": "4PgrmMtnhwB8kMSUvJk99whk5nS889rnYycFaEsahJkJihKwpqepPisAmEMoyaNTdyPURojrDA2FQPoCThMLP5qS",
  "key22": "35QrDTuMTfjCvBnbstyiqxh7adPHanPyWcNJbsMjokFuNCN1WKM3mB5SzfRAaZfSeuoW9MqT89hett7Z7Wy3GiLt",
  "key23": "2dqXJnbTBdc8EuiWGrL1KDX8X6VwDH7kdy9Kw1ehg4bZUAwnZ7z2KncukFo5a7Mz7FS61evNzuL4hRdURLoyzvVM",
  "key24": "5x6NWLaYDH2mJcAc7HUjpzk8bSo9Lje7kRCiQiVug2eh2MCogfaqx5UAzhKLkphq7wSQeB6CWkKStfRv7266xyq",
  "key25": "5TQhLq2QR55DiiXTNdfBPdFbHfS47Ye95AZuTNirwwqXSNyBjXaaSwLqrpPtzoLVfPUPZdFDPjSXqDwqFfP1suCx",
  "key26": "54DjZds72SZR55xDk9dCz6E8yxZDoc9pi9a329hpMRr3jAHrADzePTdpUzQd2tu99TbbMc4aEw4gBeBcDVYBynHb",
  "key27": "3WBoz922nPvVpxMhvD5jX6UYTNgNHwmnvCZEeamMqnPUiEZDLySwmrTQYFcxKbVWxGwXc3ZswZ3K6gKYJ2YfMpF2",
  "key28": "5GuKiPb163xGJxKKgV7um9GjKFGmZ63P9EfL6w54G1JyNh1PyvVcauu1U3yV7f8NDGwTos4GWAXZFE1RPj1tFA2v",
  "key29": "bGVnwy4LKmQRY8UwPKWwP8gCaXtsioEtxz6cjqxSDYJkGEDxYYPXCbM11ZFTRJqEKcurC9s3DGFU9HfNiQzrfxg"
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
