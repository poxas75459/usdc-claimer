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
    "nPZ22fibFEJjhfLoz9ZkastrrWLpvcSQ7xyydGpfh4tBNmk4a4coNGy7RwERd6Dr3LZrwVDRmhXb5u6t9fNGzpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59G1JMVg9q7i5e4DCa9e8oJSq3KnvwyUJZGfsQJWoBjzEcYMPLYy2EQ6QtboGJBjqo2jhVNR6Vk7vJwFbAY7JbDR",
  "key1": "4EGyDFB3cncG4WxeirNcJhMLzPtsdEGCncUGypQbzB23712o8L2iyxR5QCGNsbKFTvQ5ghD2LGR5wAQeWfbZ6LXE",
  "key2": "3x6m3HGVTYRj1kqoQ5HbgkEaafs4PfGmhiQk8sezmJjJpE8arYGECkE34CB4dhQUg5eAE4Z3zA6k8pbBxCMchQw5",
  "key3": "3sM5WJEw7BCgGFStdYvzDaHNmxymmXgYZ7Pcdcm6rHvw5uxxaZDAiB8MWRSKxRLHvDifq8uPBVhLm63uXM1VDfCK",
  "key4": "21io7rXa9knYjWMmS1NT7SGPw43YyDjhJN1LJLcwwKeyYZ1EzEs9RrG8Ra6528iALtGpn9Ldd44FS2te9jcWsYnm",
  "key5": "55cXAv4t3UK91WH7LVoKJsPwMP5J2zG3RyvFCoHjHupdoRj6QPFFdh23XJQuK1WjcMS8ZfSHVHqBBtY88bv7XqVJ",
  "key6": "rvC1crmuT3q2wPe4TM2KBRqzBsVcUrb3xsXR6Nvv8NFLrcD2PKtXxNc7CVbLSsSPQTPZHK4UvgaYx2gKhR9fWKF",
  "key7": "211kBmiA4dT3q9RQJ5AZXexgM7btmKMCX8pkLCgrqniUQgvVmcvN8QWRXkCmHrVKQN3FG4DE5vZYhC1xpGBj7Hmu",
  "key8": "5urVp31r4XSJ9Z46jdCeQue4XYDj3HWGU1wm9SVNTPsNhEQtmxK3EUSoZcgzyKR7xacnmwPqzhUKtWkYpxkK4Xhd",
  "key9": "K8rPsVus3fHFzH4nRrcKWQJ9cahD65kUKccVHdkG2LtntUL1fZaKGmDJokLoJMQxhdrDXgiWTNoisgeR2wp6yqc",
  "key10": "2k7QhkYiE6AEDC1RAfnsGCLrebTQ7ibL8Mo3GijjmC6VMSekLTMJss5ZYtQBnCPfa9xnr6WKomay1LCpsGosTDsm",
  "key11": "29XwnN9sDepe8gxVdBtpDPwi9J4vHey95DSB3F1zpG7ofW4tQdu2ewTjTXhb1dJv3Y3WPdThFrQokXoyCci336jE",
  "key12": "4hXYsabGC47yUJAGNeDHQqez2rnV16zBCU9NnpAWuUauixMydtVU9LJVDXV4xrzuNFLu2xAGuUpyDNt49gVjKthV",
  "key13": "3YXaoLXj7pvqwxFLGSVFrjiq8P75bd7jU6vgs12bYafwfAotswdfWoaXzzCzySpqBy4ebRyG9j6tRjR46exwVP5p",
  "key14": "2vpVuixjnub82MYRdFJhWGXi3WEa3GQxQQcPJvHGtT1tnjjmCR3fqmq4xMrrAkVy3SdwVkLBdB3poaMxYwGLA5gx",
  "key15": "3HkZZEQ5Uw61ADJy8ApPJymBSunxE2j5YdyS747vYCkdLdty9qMcVFutHgw7Dx9zUnkQkLkSD5B9p37qDP2j5qrf",
  "key16": "3DkvXvPG7U4YxUnjdviUdY5bXbbdkqagZpNQ3DbUif9CppstdUaCdyqWtLDMPGKVP4Z57qKZNyknAbe8qm2pP7vm",
  "key17": "iRDf61ofnTzF5pPqDjZgiADw9RX1Qg6dFAaihfP2UiizF8iHJhJY82A6C9bW2U4PmYWAQUwoyQ3p3uXpQ47eBQu",
  "key18": "27FEU8sjQyeZEsPe4VWDe5dmmbz3zJgDYRDaThWPGgYnpNeRKDMNQs47thYhnFNnRVTtkK1iuKokK6gDKsUBNw9x",
  "key19": "2fGoz1GEkDvQNa6DvNx41CU1Gpd1NvFoXj2ke2skAYMy7gy8zpH5WcDv6WAMBoxPg87u2QXHtVCaWsvGHFCTGk1p",
  "key20": "2KPv9MYwFiURW1H1Whb6T1oP9PNbzFjs2zPjXa5pBu3jPhpNQxKSSbLa8z83SQ6ashbd2pxZ1eLvsqEtdRk28erM",
  "key21": "2sAQoV5xSHP9j95fN5p4WEdNRHefunnPkZJquGFNFJmxAYVQodfLRt6xcPu2UCbWVSGQqzqg7gR6wZQfJfRK88Ve",
  "key22": "vwvNaaWJgro2bSpxrdvSkdJs5ptCjDouvKwn7GzxPPNbtPKFcjBMNxgAHj9KXb7fRAVdK3k3Lcnmgh5KK65HBX3",
  "key23": "2yjGvwrftCdosKMCJskLiyPXWNyTE6jxXWFW1ynXHF89kSangCGeB3dHA34VqLpHRdF2xoE5Czkg2wthWx8SVSHN",
  "key24": "5E5VnV6YMHhWTSryhdxmrZAc3Q92w6URV8eB7Vd7gLZxgV4b7bg1bgfEA3vwy1ZP3ThazULJfZPxX3SZB1aG37G1",
  "key25": "2aqc4gqZ5j58uj1Hk8pA99qrFiDPxG66Dun9gVQ9mCWrCfNnyihqSSFCqm9D1frckmQGNWGUBy44NC1pYTvEKYJt",
  "key26": "41j2vjEWkKfVMFTZofCtoJHrJfM4SX3AoXmsT9Y6SPdDmyzkhmvoEr9FWjv6DQyqGiNTD4Neu52VrZBiWYbTbmCY",
  "key27": "5yxHAoBdUvzSpLzU2ZRWLKxh1RLqztJqQtvQLzYzDcghq5wreybeaPNZoDhd3SKgSyUnRrMDV3dXZuE1gV7Rzw4a",
  "key28": "4TkoWvEzGLcnspqofvDVHQsRTmUpiFezetVLHLP5DedFfKnfDEjZcb6Ny4faaKZWAuwsKGMFa7kDdQpWVxUEryVC",
  "key29": "5AUSKwGoHwRjt8qpaxcYpGudH1bh9ePpMbPqtoD3FdFEdj4KEGZFHsrMToPMNDYLtuJvr7f9C67bbQACaPGGu2Dm",
  "key30": "5j1BKvyTWvm6TtL7Whf2bLt1BTbVX8i6qv22z6EuEibShBKKx8sJXaCLGmQ47TJCJmqdzKZADaW4yiAopUYKokb2",
  "key31": "33kHBE6pDRBzea4md66CFArskwBvPPBB5XgdGDCFN9uzC8Bza7Fmq212NtscAHoxjoG8k2o2NSsr9ptrc7Dicvfs",
  "key32": "3JNuyKxpvKUhdPBhEU6eMpP9jUGdKkBBUocV7JcWdoUexcCkeNQh77Kpb3BitUqD5j6X2UQ963BDedcqWkGXdX7Z",
  "key33": "5t64C82YmDdZsWFntZjpoLUreKaDD7k1dt7accBQD85JJ8D97wbZCvzBRwoYeNPp9hZ1aJfT9vAMdS35w8wPXTYc"
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
