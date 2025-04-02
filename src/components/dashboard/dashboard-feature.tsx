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
    "21Y9HiFTYtttHHPFa9ceJgv4ogvP9zoGyuXepSf5SLhLwysTkK5DuriayNj8oEqEsaf8MGprey9r3DvmBcwrwR6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4uPwcnAr97k17HBdMGHvXqp9eXjaWVm1XNzS9xxzjyhbXv1CQ1JEEgWFJ9LfSLNCxHrGZ7ch2s1LceXJeVvWJU",
  "key1": "3NHQJ1mkivUiKBXd1VE56pEr9knQjtqRRYhysQLi5HRXbjSbtnPNE4foEbLVTSWbY41mB2B1XuRxkJjsX4Nt43Th",
  "key2": "61cdpwuMHag4RssmPzexgzZEDYxuzuptQdy2Ao3HanZnDRoEeCdBvFbffBfrSno9hQ4sePHzxjG1KVgmDr5kKXHu",
  "key3": "3RqXrLB5CWnNMxU4wNg1uUK6vbBpkruLQ1faEXJqNFJXgCqzenCcMbU2famMf2JPNkntvGKkxv9antR8Caw1C3pS",
  "key4": "5vSv5Dd3GedcPVMKxFBkYn6uKkiZNRGPmYpLgmjdsJB3jwxxR2BD868qP1wMMRsAEbKSEePdGaVHNBtbe8BK4LoZ",
  "key5": "kuvDTfZuFejDdcG36mp8iPWwTTDXFQMjnzX77TsxC3o9p2yWHR8K7Nzv7ZCef55Tm8FJSBoVyWCDwsvXRq7bbNi",
  "key6": "5HEAUxZWi2PNcFYTF5h2WtR7RWs5NYkDEs5axSx5zcwRRrM28E3umhmfjvw8ZF4RDkKcz8Q63tPSJdFpgSemh8PK",
  "key7": "2kqyWuWRqJQuV7TJCGSXPudFxLuYfYTJfnVCNfNeyxnc54cTtqigMoDkzNnPAWK7NtRXrL8xHYLeTT9fE4voaCZj",
  "key8": "3h6nmsvQCHtGZBEmcyin68kJrKnnCMpaUdiP1vNL8MXj1DhQHBduR5N2HA4LkopAF5Sbk5mKp5zSpBnmA6S7RGVh",
  "key9": "ZtLL3mTSXAZrNFrM3JZifF1niG3juQs1eQUynTgx3i5LYKgvU6kLsqMRPCzAQmmzPcg6uWmeizz6PTtQGPKFKk6",
  "key10": "XBkD6S9B87v3nVXdnNaajyfRC4qQXfZpq1CWdZuy1tcoWDXkpkir8H7UnziNCRPJnSE4h9rZZBR45DzVK7UgcAx",
  "key11": "Spuy9Mt81A461K6Jt18GtV1NkbPKHue2LFoYHCQDXqt6vMnfbxUaDkxpgGFQczwq3TA75RGe9Upu78yxB9t9Dzw",
  "key12": "2pMpaYJxN17WczbWHpJGvXiBs8WRCmr8vMvja65CER4cBPpf35Eb21kyUYD1KY4bVL49ZL6fpETC4knDCpaYy7jr",
  "key13": "3LzjfRYdUF3cLWUW5XDxbDfr3haRYzANhcw7hQvZTdbaw7wXixcCPpniYhpoCQAn5faBLWSo7iv2H6aP8JnP2bH4",
  "key14": "4r4uASkYr77EdNaKuYb4PUAbRUPw5hVjGASspWZnq1vxdSdxQZjfuRj2wZJutYrCZW5qmdX1RHGaf8T4qWMTRVrJ",
  "key15": "2aywZfykv9m7ZB341coupUuARPM8xfxacQBaNavtuU44N4hyyEVbBEQcU4rF1SzVEW8dGkU9Gsa4gNk7fyu1MecP",
  "key16": "3sm2Y5C9suHGrUdPpmkFe14toihxJnjtvtWqCyyVSbj4RAjqucnRQqhWJKbPPY2zL3P1Sp9fEceNFPuHkeNhVP3y",
  "key17": "5d56KZpjQhaLLoRdMnZbzzrmAN3qBKcpcHbeV3e4U9kbyhfksW3UuWnqZps2frRqa7EN8um6D9ES2rYUpaaWq64z",
  "key18": "7ZgHCUbdvGaPaUsdkwtrUoWfBd2GjvA1YFPJwMdGy5UmitHe4D4twfnfMS3stXVdZXEjfWxyjq7KusiPP7U7Yqk",
  "key19": "4mtDBLRisByWHN8AWmapSdcBrLZMtpT7PBQyZ1jPUosFPPCzUVTuJQP4u1iAeDRFSdr6s3ceMBGNos6hqz7bfeeK",
  "key20": "4i6j48JhkwRGQtn2MJ2Jf3Qeu8bp5hnwFZtzzLQejWRnJVVWWsWcfBM6jzmv67PSmJkwRt7MX8HuLwV4KPwVE7id",
  "key21": "3dZAP9cpV5RFUukhmHh3Qxn2XYjyKqi5tQnt7gcpUECWy2sHDvhHemt8NXmwmXDWPhEQ1ouYqhoqDBXC6AihUv3G",
  "key22": "28AxpDvGgKFhbrReVomriaJXZ8tA1Bfsr8oP5HeTXqHMM8CkZagsdLvm8LEaMv7RQHmQfcB5aQFPY3VLPfgZASQk",
  "key23": "62MPWeMEWtAm5VbGRTWofzcVme7JvD5ptj2ZaEKgKnw3SiNMamBEUs7RNzPQ2ae3gNLwsg77fEKuXP7xZhH53ScG",
  "key24": "2B1bHuLtQPuRXWtTEX3ixfdNxMASd7Rr9iUm23GTQSwdeSCcdV9WB3w42BeZBYV9TJn9LzuxxtfcBTDbgVXkrQFc",
  "key25": "3rAqJKQg1swRLq21odDMQwbt5Sv9apv7piSKp7TQg2PCsxTVbCabeh15KrUjkJGcauz5xDw4t3Ze9Yn57C1B4koR",
  "key26": "5v4onSuWkW4itZZtxYc56X65Zqc5cZ7SZfewDsxEkk9xgwJi9FqFo5srfNUZa3Tx9tqufDrdy9nNEHBKiK4cWQAY",
  "key27": "57Ucx2St25J7Js6juN2a8si7uYzYgR7ZYdfHjTR1KQNdtzgRHUKr49kD3C3iw8L4JjzeS9cwusgQfozHmcmGRfbe",
  "key28": "3nu41ULTAzNxQaDiQHtwkHYxFNifV5PKgCbtXE2AUtfDUJd7DF7ziAn9wnNXihs9dGb1D37WKdsgjyoBLDiV9cAq",
  "key29": "5gUiRTNeoiJCckRDhbfhLVzrtuKUZCfuAnbsmxLK3kSRWTBgeSQRANKXLpVVAuVLZ3sWGDs6kmonyncSPFKxbhg3"
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
