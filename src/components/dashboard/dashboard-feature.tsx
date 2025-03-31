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
    "5YGzD9FXqSydMogK97zzed6rY3NkgKqntjZ1NgeUrFaphXaTdJkBiFXnDz5dhPF6kWU9X2xUXh1WBkzmniesdMCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBYDu2aeKGgD3L4q37WReq7tjGGKmi5m4VExPtTemyKxQBFYJD7qqg3dGjXoNhroWaHhvMj4sBdqhJceVHkLi5c",
  "key1": "CfTtgck1G1a9C1hBG3LjdtyRfwchrGGnQ2MbceJw41NWA62N1QQDKbVPmxo2DcUE2A95dJrQSK8uguhcypjNEui",
  "key2": "4cJTamKnTK58p4ThauwGVd6JQhZb8rJELsnjGBDurG6bu6EsjzxyJPByicjYup6BtiyqH3qV8zV5rs9MZZJQzs9A",
  "key3": "2t5HXwTgRxLo7Wvf5xwJqD5gfswRpsa7m3CcMwZKTMF24oKnoXtP7WqXCSGpcxnrdH4sVRc7fYgjosYTSD7GQ3ad",
  "key4": "4XJxqRWHcWNR7WHg9gwJL82cwT4YCgnzhLefrUZoQN7AWqG19KYWmPewpSsMaiG9ZCV4tffBsMVoES6MEAWfmX8c",
  "key5": "2iUjp11wRN9o8AaZevKKBATCsrdbUoZfpD8X74KJfNd2rmgcSS3ksFEy7unogqTisDmLwFTFsaVVJxegDG5SrLcM",
  "key6": "3uQstfoJECyS8i4MYPb2Gd2axqhRmpHtqdBJApCTrQp3KjepXRg4nrXmkdY8jwuhsg7bXXMZHEVT1PDUNE1H8cN7",
  "key7": "hLpiaqdoyypX4Ez4s25b58xj3zqTqermVV5GgKn3DCGF52YQFpYnaDyKHSR1aRYYHcnqHEngaeHYkc2xqmFBSdJ",
  "key8": "7ueZM72foBAaLY57GEDcQ41ym5ECmsRqmAPqpwvy17vqPksfFLsPUiTS9qZtRYepeJYMxnSvShZ2MYQ6MZhW9S3",
  "key9": "2dLhJPgYNhxTWgKVexPg7nANUYvvcDnnummhNHEpeF31ARZSCpoPdqtTPB4EGYBBEA3XsvUvuMXDFQvCnvPFW9uj",
  "key10": "3e9BfUjVcrb7ccYkcPhxLQe52LuqkRQiDRfxYFvmgr7mTKGQFPye7zqQCxQENucw8ivHjaomE6WBpRcYpggNm4an",
  "key11": "4jNcb6NckmQoUwMf7veDZdwMrdk2kStGCT6hzUASKeq1T5oTEdGTo2hWDpydDi6kEck6A3Dzft5saRQLE9pswLEC",
  "key12": "5mZogBMNxBqhYFimTcbH5MSt3oowBfK7j6YPEH8ZDFzrwGefKaJ1PBT2L8bkCKKr9Y4kmjYnrLUgDh5Gzfx27yEx",
  "key13": "uWGVRCBEBvoqQ32SCGkpmECuANCRLunUGt7dkxituRKtZZM3szkpCY3qL3udYyY3xjp7ubGqejSkcdBMtPod4mK",
  "key14": "4cnkm9sAhybMYNeaZEZDcgSer2EpiPhPqsk2QvQRJpnVyFFraMnPxKqYoHnrTDUMsm6sKLHmyZNbQWCgzqUWx1P5",
  "key15": "5yQBitoSeupthBouaLnSsoxkgcub5NPcT9rLV77cckWJSSLa5RYycbkcCLQErcU6c7ru4UFxXD4Jx9utkDpzHcok",
  "key16": "34TPY5dUybVTcq4NxQxRJpkbZWXE6jSn4czA5LQAbJFYvB5JEsNGUhcqSETYLwSba7sXDNc2E2KLwGuXsWFQwwgE",
  "key17": "4QnLbBjWRFF8knmZS3UrcgaPahHX76JhEogzzFixKNZKu4NcHafBK87hFK17G7cHqrbYc9JHhtekJ655tWJLMjFg",
  "key18": "5axxthwgnhL2akNUXzrWoMDHHbDHnwTpBEHRshnR891Mkwaf8uffFEP4qD4wJXJ2HPLPi7F3VN3YqhWkk8QHsGc9",
  "key19": "LQ9FgyTAR3Er3cVcuBsqpdm8pi58kofuqjgt8D79oPPgYcvwUBe6H5P64C8PxsMKA6g1RukgLG2SWW9u6fWdBzy",
  "key20": "4iVU7sJBoxX4MjSFiA6Pjz6fMWhtbg7i4f3CYzsCCMrCZbwVMbUCr59BGrWJRWdWao7ZgvWpjZMSjeGUYR8WkWUe",
  "key21": "5C41nww3rAnPor6fJMdHBaNSjw5eGqMaBouRdmPwGi2qjD2bihwbkhRCTLBTbjALVNBVbqqbyfzR8bRiApJn9QqL",
  "key22": "ZEc98ioCBucn5m916CQK2BNMgyrdkAPtU6kTSkkvtqTmiXkh77xSxEEi9wXCJMXKQgyv4e81zBM94KbXJo4LK8A",
  "key23": "oPHQRdgq6gQBmjVwdFRQewd7YhmVTeXVjh7qWugjgfMrMwLhVWT9JBaq8kp4Bpo45RgbTN75iVGPYvvVQvF7Efj",
  "key24": "LRXeLfjdN8VHnV1DgU3qgihpcm1xQdZNkE7A5QTR6CXSikgzriSUY3AvhdyEZc4VQHVFZyGY3nk3NKyjqqCisxa",
  "key25": "5Jh7WFLEEAHUm8sUX2JucLZYtL8gaVh8xtT2r8EixgAogagbvbwRLLuMNneUYRH9pJfWfgWNXdRgga1RwgPReAVR",
  "key26": "4z3bqzBiGB89sAHT9K14Bpt6BsQtZi1y88Jt7as3mqpcp9xBvAtvjUctPkjXWrGQpciGzDCf8HGPv1k2PRwJ7yKw",
  "key27": "2Cg5qk1nR4pHMRXppBCGGncN4yeouVX7sgnhMjELEmBg2TzSZW7L2SxJUXftZUgcAu6gzyTpHPJCFPBZTG8NuVxD",
  "key28": "39MjByrxbL5bFjT7XKDsQnQmHqJbHv56eB5iJEq6ZL72k5JwHavr2hiZCenvFm35yhyuCPzEVpDxYAntz8GAVLyX",
  "key29": "38ZMGYWki3oaWsEei7uvGv83QSj2oPsXkLUwDWwwxt72Y3qdWjsyVV5eUmbjrYMXpFhfYawV57fZoLWRSD4vormG",
  "key30": "3PaQ3MpFGcPBQoLqcCGzJFNaLHFyWQ15XwnZkktWjRYVbmb1n4SDYRJtepCAoq1tFfKmFLobHoXSZxn5Y6XVN38a",
  "key31": "2fzoLLA7pFuDJTuVGA3nHEEW2dKVmPZfUwSGtWBrx3Sxtg3oihEmG72uNKUL2mLCtmYDiuq8XH2do44UtFKNQvpc",
  "key32": "2ztHP9yk1TSaBvah9NoggJLNfANNYK5vENc3WAQcA7Z3Cb3o4aVcyF2VMc827YGQA2MuPEACZrKPeM3LPJG4r8Lz",
  "key33": "5oa4jif6bx5QkhzpJudLRmTu3tLft9EipJEtYFY1mBVmhTEx8GkgFVH9neP1JQd2tjw9gzwQFj4f77BoU1rvoGbw",
  "key34": "dstsCWQjdTkdYYX2FCDMstyrUaeSsZCau8FcNpawHo1uFPYCfaJxcCAaJYitf9kVay1PnceY75TdZg1KEea3DzN",
  "key35": "5YLY64fzi9ybwxArjDVq1k7HMDh8KR7W9uhzqpsKzMeLqKDg2DcMKFDQ5CU9orwuWKtiQctj18eNbhYccCwW4mDQ",
  "key36": "2NKB74EnonE3TBqXyHbxUiUXZnwhBZFR6zS9x61Wd4d5vCRw1YvZqry3NHYe3GEKj9WxsBuBAPUVbTuqsThxMPV9",
  "key37": "3iKvgDRLpn1cWdJBeejN8EkBfq886rCRmbeLaTN6HVe9ZEg3cxsKjZyqF5dPzodxgWm16Hu9bEKL3UGR1ReHmczA",
  "key38": "22xr5CrpgnnoS2KTDWXN46VvMAhCodCDGu4V6Hz8Y6GBJHqKSJZ8XXi5D6BuLM8W64t8UghcXEM3KWrFwfxqGzag",
  "key39": "2cpoWWBgHAEr66apjCRumsBhYAL3e13AX146J13rWvcWrQ4fwkAVDjZKZHDGu42mXzFi1D7qDoduU37ZYa4kEpvg",
  "key40": "5cAVpZ7a3KBYXkWk3ATAvC6gfTmje7EVfdwoycEDSuVAh4gtBNFejodEkoNBxHUBQj4tsEqD3XYmNkucr1bxBC4n",
  "key41": "2i2VdfpwNDbiNjNVuSt6N5Drx3AK3pt4TdxJpJbnmh5pMw8KsveCgAEqvv48VY8gKav19DpRZsJvj5YS7QcAMQLs"
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
