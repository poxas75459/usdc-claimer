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
    "61iggYHLH7vRuntoxQkXTZt3LvDGiJvJd233oAstNn6JHNSm3JqhcUu2KbQXwBqpYW7r2Z5GFPiEqvFFEvttfN9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgge45taGxAGQQDrjFicFBmXcAfw6XWRy5oKYxC2Sopi4warGHSBygosmR92aootP3owTeCbSZVzUfZ5XVynu1X",
  "key1": "47Hyqyqto4kVxL47iCxyJy8rKJHgw31oSdBbFbMPvSCKtMMictt8Sw54A68RjNnM2GUsbuX5pBWzRpHKMnHw7CK4",
  "key2": "3FQgFZhFVJNqzQaWLyypgTgqYrjqB9fWXf1mMPXDHGTixyf7sJnAc8dybBvLuc56GtFBFKf9orzPEgKG4EfMFpos",
  "key3": "4J2pgW3NCjWVrS5hMYguM52C92Ay6ZXpZ5scjqrSPwJQrHCeqSUWHAj6XvMdyJX4gPVfAk1X2ysn8VkPTkUdaB44",
  "key4": "2cYwbNNfaAp7opuCcMzVnefvaqsjn2et37W5xv5f9v1YkkwXWEFjFLid5PL9MmXAydR2dK6cvsHXu76HBhbNu25d",
  "key5": "3vs4aprwkXRmmVVSLZTtFREEmzJUtHSRvcCKH4PMUwvjkvdBYDdbLpMV1w2KkUkUU1uiLRTb11rNAUjty2qfquoY",
  "key6": "yrvbUVJYxGy4LJ9TaKeijLexJ9tq5AyiMTQhbnFn6jMF5Z88yyhj2EohCM4NCFD6hWSUUXf9DouahSN6hYVwqo1",
  "key7": "24Fftu1hgkApD95VjsbSEwQP6HCH5ddKP4wuLR3kzvZt4DXmHhd3YoAY2S1qAuoj5HuFoErtkbpHsS88Az6mt86r",
  "key8": "55XxpkyRvZeU42ewY4uXLehLEs4b41TxzmkktMqmhoNFDNzpXnBemQPfYnPntMoPd3hXDJ9VZTWSC25pc4BHrfr",
  "key9": "5NhMVbtpgHvJqM2SbHXZZ8wRZvCbjNjmeNbgKHQ6d7n8mdLPSwYxuL8NfyyJwgUDRah1AbMA3CFnDh1Ucwr9BE6M",
  "key10": "o9pjRyVrSSYjNuwJbDQZVsyxo7mcpnRzLbpe5GLsL4bQYst5KF1123JoAueTfn4CfZNekXMhaLpdCWcm5Mxrqmx",
  "key11": "5tVwvxFzyCMCZq3WQTZ4iEErqcRyaM3aXas5oRbpLgLUyse65ehfHx7dMin19WYdCH5YYHbtGfUyD4tDDkRwvdqW",
  "key12": "23emDpya4cpQUWKbKaPBrR5UfTqW4w2dpZgGX5rsYKyTKBWYYfJd3TBfZNijgFhmESDFDLSKe6deFR7TQXb2QJYM",
  "key13": "2KvuNEbpvYjstA5fjzdEfDUsvMsNcu6P9q1F8WdGqWgdpHRqMycSsbo6N3jxTCqGEzoaPXYth3L7YQHfndgWVMWS",
  "key14": "3uiN8VqgYvJyFqBgrGdeLDvt6VhQceVqgKKB29e1WoCzeraQRH6aKXZ3afeKfWpDDhhrrWMjhFgTRtEFFg25azKQ",
  "key15": "3XCgoRaZoBYqg3g9nCcHqzwcgfhDJMmrK2PxbvPN65FLN5et2cw2sjQPGmz7BgM7rDHEQ3Hoe1RNunDE35Mn6cyg",
  "key16": "3z5Ry2eqPtiPUbXKxjuU49eCw8GXrKoCaf4fstsUEN3adPXBwNs98zYevU8hGDFEcS4f4mnMFVxo3uxaEZk5BNoE",
  "key17": "62tYWntnxZKrDWQ4XTBAkKCJtqpxFbZYZ3kLnf2xyyX5QMcK5j7RoJzWYmst114Poy5AmESybe2hhV96rVE8GMZJ",
  "key18": "38AJZBQtaW6FRtAoMF3dTfC8VnHAJYVYg2bd8jhFYJe4i5ZVmRc3E5RCTnv29kCGL3nSWDXRYS4Jhem7vgYh3as9",
  "key19": "3uB3nVd4EdoDaAhSWxCmzAgbvPrstmTzhP6S3MisMyqb7NFLERdWWr6UVU3tfAEbARqQMWkon9DAnBNFXhd2Jiic",
  "key20": "4fTiJ9pomP9BVZtaTnYRjEMD9U7T17sbZdL248fcMRjXtBy7yzm6ig6MFgpgCN2mQVaGJubg5L8LHvzoo7g8G1NZ",
  "key21": "kF7kLDqj1TJNq85WEoRZSddKP1ZR6TnE12VnLUn5aDGPZxLt9xbfLcf1qJHx9rP6dNngepfYZYYXpCiKvukjpVT",
  "key22": "3zaPpyxkqoKKpbqjV3eTeVmi72ZcVMe5ytYp4dXV75nUn4oBhmc7xc8UC8fusBhztgQLH1T6S494SiBYBRFYkX94",
  "key23": "3Yjns9Qp6vxAEKFjwdLZW7XAe4EydgVGdkmEUNZ6erZfmd5dCKCe7gHdrF8zN2B2YZ7P8r5KJfe93Fbv7sHEGRPR",
  "key24": "5wjaeCFCm98zUoD7AKH9VQotecQrbUFf3e4Ju2WfwSrdyjjosrmQyT6SqUj89ZH5YkxJ38pAcn5ePiwEW2nUukdM",
  "key25": "23cWXpVwJb34iv5WiPmsBgqesAxZJB39oYAxD1z6j2rgR8H7HchMp7uWMS9NgGWtmpp3rAH9tcufnadfTNQKWUn8",
  "key26": "2BxyiE9nY3PMh6X6L8S9xgRfaZXS6BmZPhbDfzBoX3ZPUgfUg3MECMPhymeZPWiYB1VzjeZkZp9mMkt81sEedyS9",
  "key27": "3dFok3QKqgy7Yky2tBiivE972cK272jaM6QPaLzmpUHYiArjFoJSiQVS8fWNacgEH2nRrdGyeYRKzphjZKqdxq3r",
  "key28": "5WSxvN5shp4MEc5ZH5isnVuifVpEZhYyPXBRypfJFwwaDRk2L4BKEjQmagtNqWY6kEauYr1WoKPx1ewQeB3HPYZc",
  "key29": "46zWicQCczokAgcmhy5jn3JLtz9X7ynpwX8TbgwgUStrcLkecWZKBgqzUSuKoK7WGaThbJLQmqgurKzQWymNNXoe",
  "key30": "4jvgupLxsyKht49LD1R7rztfJMGv15jGELF2hPMdBJxXB4M8pBbHGw4N4pPACBfbcEVibMU5yLnnPTMRPvSdy4bq",
  "key31": "5daBdTy434mh87kHShX99yf1v7DUv8QitmQ6XgUnYGR3hP1vBRGu4StsMxJUDR755TPtGrUaV6aNPgrxmqwbuFN3",
  "key32": "2xSrmgSZkMHNRPseoa4guJAD5bVQnCBwwCiifWYdcb7XJdoWcpoamtKM1Hf3J5bfPkg3VLC8dvx43vHD3KRTYZej",
  "key33": "2ZAvRbXRTxQsuDkzRv7SYuZgsLgywRnRsS9KVQqTeKDB6kZbQAiMwYjXskcvwnwbMfs71KmLyciBVULrnhu3xaFA",
  "key34": "JmkC516UjTPeU6aLDJiLj98nKnCAmaQs9NRq5kpMY9m1zoLZs63mL9YdWCi9AHEg1K6UXpP1GUqRTrUN3ihTkGa",
  "key35": "4pNbHkXgVfNEqysePt4LW469hmZSnL6oQvzrpD7nDzNFrs5qNBGHVp4cVQMF538yY1pgfYDxi8LfiUBGfiZZXwAd",
  "key36": "4JRtURiXNYRW4c8m1KSCdu4CM4bwtp5trmw7Ay7jEvFmUmgsge1rzCBkker4yhsEwS3i2kC826xhZsVQ9TWCc2Eb",
  "key37": "4U5iugaKatYF4DDoLJdKsbmq4vp1FuLJy6dKKCX5U7wQ7FZXAN3HwDtoimrUpMM6iU59yo5vnuQtEhX4M3yZ39sH",
  "key38": "56gvqa4nDfW8HLPBVNiRUK4mgdL8QcKDa2M2evv7tWKtNwwY3NLUGV8SH7CSVTtbELBe76aKwVZDMATpeafNBBQs",
  "key39": "4dpihrQXC2vTpuZzgJsE9ghcVg3pGF3VPP9dwgeJbqiP2Zw6agpQa8MZGFTCiXXY7SeBXN1pmtfZju1Q4Kw9z7pG",
  "key40": "2jKH1ztxTTJdpFsvGpvFBnBQf1odVFDCc4mvewHrnhA2QZvcearD9k8PFmynD8FKAeGpdjF3gxedgtF6kSrACmMj",
  "key41": "5UXhqAanvu2pQSZ28qyNGmvznjErnR9knEqDunyJ1MjpcfhAeghW8KAGvEnAZ98UESXemHZbdiBbfCuVKMyuxGiT",
  "key42": "4ngwcd2BcKtKKmanagakSdQhgSoGkMnfiNBhwybZD492asNuwCuHguNR4qRDCP2UiBozJgoTnwncghmFFt2Jxvno",
  "key43": "7sG4awV8CRmrAWBX5wMG54JZJtq76Cu3wUsYcbVkMwvvTAhhmwm8qxDytspYjgsh7ZaSwJcfNpARZJiyYVdVzGX"
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
