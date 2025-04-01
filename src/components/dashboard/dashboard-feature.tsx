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
    "A1Qtbv5pmWHPdnvSur3cNBWfWMqCrkf5ekfVYqSyvEBfw8dAoEL155KhdpMSm9UqcUh36FHRu5NXXDb973854H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1eLr96YCT2Xd1pEvNVTE4zwoATMdasoLnyTwiQe3XSgHtb7VvXVW5fFZtGkJ1wCymBiuL87KfAHR7WTAUAWyKL",
  "key1": "5rEi2WzaswCqPHiqNe36NoTYPHDUiy3M1AHC5tEEoWGo5V4KU8xkhmTxBXwVWAYTVY4ppv2FifKYzRbER8tXUpXC",
  "key2": "2aPqaF6sUdDbELePkh795tHmHpja8ZnZh6bT6LLqHqj49iRHpEVXGhKaZqubJ27Xc4XVzzPNvZPX5HBmziYowZpA",
  "key3": "33zPdgeyLxmgSpxYbCN2ZqH3bjL8pBZWS4WZC2hAMM7XyafjnCBvKttiQbdkctoYKijeHuU347TF3WDETEqGy84u",
  "key4": "ZpxQ8bVikY9D4m76EhYzsEyRXh9uw18D5zBh8p2T9KWikTxQrn1fxrDu1jhtgL2GddqFiwf1GMrf3pZFLQG2dgw",
  "key5": "EPNVfUc1cdUCPqzzuhvXc3d9KFAF6hbn9apoZ1SVU2Prhp9v9Q9NgYN9YVDoW6enx6bPYAJyMJa8bHs7RSJMduu",
  "key6": "5mf1mxPZGMjNzBKuQNjf2J9k8XJmrvvxXnN7PGpTVbdc5DsDFRTNuAFMUR2U96mqr5PNHtbdy8K2yGzvASB262VX",
  "key7": "4Wqok6CK4tuUVPLLhEB7qszxFx3VcvdzQU78dyf2PoiCShUkGdekR9JGyE98pfAwQ5KWXs7JjbzACSYCqGYFuzb",
  "key8": "337cHSzNFAVBDDVa4yC5hvxpUyAX6uanuosu6CbMYZasg8GgdjQZ6h11MjwGncppoxQLx5uAkv2ofAWDR56hHPrc",
  "key9": "2mkhpKCo4up6i1BgbqC5MT486m4nC3tiswJtVXSKPALEo9xZoF2HAfyAV8yVWh1ivJE3Nc45BG6j6nnrVCu8AM6g",
  "key10": "k52XLzoirKj7beVUuArtfG9iYBusMkxMbWDqjHZ9HhhwtWbJJXD6eEK4HFZLRjACevcTCxi7BkVgvsuCtS5mQwh",
  "key11": "2VY2BcaNGzbWD951xoiAH9FyLdBovvAxjuPMPQcJLFZXJwNn12GQoesAW1iziqwkaVSqMFEfj2EymAYiLe1esiAb",
  "key12": "29BBBrWAqi4DbGwPypFQou6CVct2cfaqroEo9qenJFPdYM8UMCFmEvcWvdwGZBbeKYL5yQqnGmXj18kimsHaRqkK",
  "key13": "5qPVRnnBom9NcTzabgdCrQMKKzRYfYF6snVE7Ww5LxAVgj9USmoxko6nR2pd6tmvag3XgfpdJxrnW5fBXoHCHWxt",
  "key14": "3RL7vjzVKn1nYPQmePizWVTohGQ9qMhUPcTwJsTaaraVWcZ8HxUY98xq5qRj9efsNs6tukdH8KmQARC9aQKtfpyB",
  "key15": "8a1T9XUBm5MLyXjMQxDGEa6RHJCFvyuUHb8E5mXS4TcEkgXJuhZwsiJFeiPBzB4S7dY5c9GLKwWmKZV2q9RSRUu",
  "key16": "4yUBLBkZD797tzvoQKQ7BcgG7jNdUoHiRcX6w4zbfysC7Kre8jZdZ3iHPjeqZiTAG4C7CbJ7ApzEgmwXVWex2m4V",
  "key17": "47eZHYAgri2vkYKNHa1gLBYFS4g1fQ8LTz4WLEyFhuJ7Kk6o1VCWkcg94ECJsZ18uvF5erehhMR7KwneH2nuYpLd",
  "key18": "pwrzx9czta9oz5oWGZJbEq1vmSG5tuzDpXTyegxSAwRZ7Wk6hyNLnCbyD8eexZ4VQTvRF2gJKf4AsthyHeQp8mg",
  "key19": "4GBC1X69LTdCKi68Ptck4n9n4Fx2ayipgQZHABiJDymoRq7qCMJe3P53evs7s7Z3bvbMSspfCjr57TkCTX3nPiud",
  "key20": "5uVqEGiTkQK941vt2bdPenzLh7j617d8v4wY5XTR8Z5kzXfWQjNCaoYoBiV5PxPctgNuLrhAvWkQGxe7oK84nUkV",
  "key21": "2wajgqBQRGMABb4fGbQe4YYiMhgbYvv8En6UKH1rD1nUaUJNkLBYcbA9d7bbj4xeBk5P3xEWH6hwGUsScPN33mSe",
  "key22": "37yBiXXv9GWNAuM7tHeXh5xZpURypmest2GLYQCJWCenMzVX3ts1GEDfpLf4dbV3hkLuYSHfycvoSUAUYpzLq6GS",
  "key23": "4dXUYYf6CMP9kU3GzTunvxt1eddvwZ1J7vDKeuo2FRRQujPxyDZ3dCeoaBhKHnLEvmhCJAJVNBQ5NbpQJpYSVt3y",
  "key24": "3kUU1zWq9gY2CWKbYfjqDF8HMZ9QVp1SoBcMwL6q2LnBhrxcZiHt53D4ccNExyML14SnQjCv1htU2o1nmSnf5fZW",
  "key25": "3uih9qgdh8FFUr41vty8ifMcBsVucj27PvrRgUHcCasBxUJTcCMhkyAtGYwG6X8VK1D7XrKzvA6TtyV1uXsuT2iY",
  "key26": "33YNPd3BEa7R2AqgKjRCLVV6MK415hS6d1pEhkZwjf8VH9DUJdhzDh797oPNxoFaeFPVkX6qVdwmrPmw1RsQBJPo",
  "key27": "3gnbUZrzq6XfHdj1J4cqWTyXBKNqLktuDkw9ymuaviGPKzye2yxDQpePUE6ZbNSfAYv7hyPdTz96X9bAXoHpQp1Q",
  "key28": "4v2QK3mi33ZZA5x8yMqn2hjdh7iV9ahiYcPxHpuNsfVGgDpUt44WexkuhzAujnWUF8VZ5HnVRVLD5tdKGqooafq2",
  "key29": "4aMG7t7mcLibo76YRjdTQXpV1GkbzW3JZ7zpLXMiL8nwBB2fbs9TQq9SHx7qCAkRNb7pjPgfwUUqEwtzkr6Fu85u",
  "key30": "4hNsJNi9aDcwW2rSWfmyaU86CrdQAEo9tLopMWYLk6wLsuZKhkyKW65yjTw6H67UUi92stPQSgyztX9EaYyxRfnc",
  "key31": "5zAF4NmfgTunVEjnzpj3KUQsQt5YMHTJAKzsRjyGa4xHUsGBbvSvCJuuVNvshgP9Cwzky7FDaSPfVYfwSNDKTsaT",
  "key32": "31S4kE6PXbsXy5mfbHAgfFTw17BqDfTM5M4BikQo7hkNCYGg9nCW9JGFipEaXsTKnpm6wD8La9vCgi4RfrEZaZiu",
  "key33": "4JpMvLSrX5vWrqXASBC4AF4fQoo7kQjGNnesPWK1creGvgEKtWqm457SNVbpFVnXZGNPHq47LRLagjtKaisXkKQZ",
  "key34": "5wmxWvnUnMy9bfVGhE72puPqPEVFmPT8ezrsVwhFfodAPWvQwVy3wN2y3kaQ6UeBpAdEsmxzC3cZ5mwESxa8sJZx",
  "key35": "5H22GVZNxG9Gbg2xHaHG2ph3wC798y5HeVHHTh7zHTxUTizPkBJ34rWvjLddsmLXMHBA77Wq98cYCM1XfE6kWPYW",
  "key36": "23iQbAxkLKnLafKb99j9vMmRhHgjaQVSFNT7TL5Jx7gaAYdkjiQ1L9dWkoqyFtexVKzcq3tryoZWdEYUqJ4wQhNz",
  "key37": "5b65iDqXzZHUnK3oXv9cezoDX7vb92JEVQtzbDSvV3WMYRijaPVSbn4RNs5f7h2N2izQaN2fs8ogKjKuAioymCtu",
  "key38": "XZrzZyDHeYNthaQDHXVWmFZMr95eQAt5N2YmkqS99Zef7oeWcdgbYB9vTYE2yEUYpgrKHG1BsFASFRxyMDXcPF9",
  "key39": "5ck3wifN75bsEj8Z7WGms9Z8ik3FPA62fmJKAu6krJfkoRuvoc8hZ8gkKRgrLQaV6so43DRFufGNffy9EbJCRizF",
  "key40": "2MN8bgEwSm9GG9Z3pm2C6q5qYxfpXfZE1zVFjxajVYd9W5t3xkmJboVZe4UDBDXPmhM7TdFwY2kakyBTP5fmUQrq",
  "key41": "4fk8nAhS2RM3pdvrN4QZXxWM7jYWXmw9znLm6rvEoYECCHoZdRRkDQph2DWxuUHdt6zBEDeS8wdZap3mxwsHwZd9",
  "key42": "4XCBKAhoXwTChHP1H46b2RxFdeSvAAt7Hu2zzWR7mn5HiRT9LaPzGr2c1c9TJnBMoANAWatusho6e8ddCQXRjmqc"
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
