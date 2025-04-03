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
    "5Nz25hodKvXyQ7E3agBAcdxPZq1AGerz52oJBvERFVAvPadG8pVLTqBxrptYWGSVu2hvWtAvHngfaUwdN11SXHJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GtPjeESCProPvPTouMoNRn2bRL6qMq6aokvoFU8G93BPgySPLGmcpwBe3DqsoSZq4mMrq6jZHoXCiW36Bu3BGcV",
  "key1": "ACpcrmAqJJp3V2Nizbb7oGWn5vpzvwSvRQ2Eeec92dusz8Jy6rDFbT1tZwfB4qNUaTpr5gnfE7jdFhDswkE3zLv",
  "key2": "4AuouRfcdyuzGMupb5K7oigzYdsVVuWhCoeMj3v5Jn5oNNDQFMnLUkaKD4JMFwH8YarRNhXQQ2rhw6HTKZC2xWLC",
  "key3": "22p9YwX59Ed4CfauwffbAXQzWYTkB6LXtReBxZiZPHe1s6mEz4yDHu1zUAyx6ALeaf6d9aL1Xwj9XSsipHiNChQd",
  "key4": "3XTm4iQDz2GSnzpfuCpNcDVhfBMSzXLGZaQ1ruhb5QHZeB8u2g4BhCDY3Qdmyo4jf4B3kMgG7J5kqrRoxMWzuydd",
  "key5": "2tfGbKFxNe9Fc1RKwXcQYcepdKwLAHu7EXf73JkUc3s8tswhbTXpupybtguHGR2q74TCev8t7mpqZo1FNzcRHXvZ",
  "key6": "kgW4NhxRXPSaoVK8AQ3MF8a4pusFTnRTuDURWa4BBearrEMq1i9j1PLiTT84cEsHNp9ps3R3vtpWxRJkARsCLvn",
  "key7": "5uG9TeANx8afR7pHygh146F5c8V99VnLFUuPR3pFXjEwDdEF93wZV6byNoZCPjApvRSWKFLSkCHwq2EyfwC47ayf",
  "key8": "2PgH2rqDgeo6XeFbcwA6hdcoNxU9g6FLSDoestMWqQeZvXqDJZKUS3i7QKpgHmVRzZxp6AwRLNLBts6d6G9xAZZG",
  "key9": "2hB4BbeHwkd3mkjuQ756xBjGUDgqtrdnefYDx6ZAnHyUkovQD5TYAGnXqJmEDcYnXMTzC1DUApMpK3ABL8WCBJ91",
  "key10": "4SfZ4QAdBFrXfdeTPhnYr2DYpZNw2Ym5xm6eioM7g53he6c5SzDBRu6SumBkM7TAdnRJwgWRVqx5xMhoadDmjk1F",
  "key11": "2A8jyQmkvSAuLf9k8E8KyvcSojAwL2eQ4Q4fitbWiQLbBBDBvgbzKQ9x7dLjQu7dLytnGPDaG5iEvEG8ejKC5owc",
  "key12": "xJwuzveh9271JdWKdwWU51iG3oQeL8H2AEd6Etymht95yncGs3iFatpAkin3ZaZn53tq5zbPYUocw2qkGNRKfEV",
  "key13": "43Ax9BUZyaEqCtnHeJdJxvuB3TR1hGFRjax2NZ4dKWLTaFuHApTkBSupUDNSJ7ZGacswbDTrLutmLLxfTbNG9WEj",
  "key14": "2vUHRPXBXfp75b1PFYSjmsSRMxR5R2fnGESM6szbGJcYzNdY8SxhbA8nw9krUivJMi51oEiRCQmCC4C6WwiVjDEL",
  "key15": "5dBcNePKnBH2aGCbjW4ETo6x4u12McpWQo3e37tA5AsC71hj3VDhPaN1TeQFGUyg8qybL4C43y8pCVkCy61Z6CqH",
  "key16": "f3WKgVihjrkmjrQ59i3FZrsBk4zxRGE7iU4qmh1aUwcsogSiVT6g6LCpkqWJvNYuyedBpSG3Sv7fCQrXE8FxPi3",
  "key17": "3MBEWFRNusFYw6mL2mafnzLLKBc3uc8jv9vQ5VokQu7Dg3CUReiEPzNHCrBGDWgyTZqza6RENveaFPAUjxhDCfQ6",
  "key18": "3YyeSBQgA1jgarL9B2mNMjhUVQo8KXSyg56BV5oqb3NFrx9C1aLTciTy6pVkmhwMh3JsrEcuHzbAPNwU7S1ykcng",
  "key19": "3zLbdhzKyWd1rMa4GasrN6YMSJondHkYVzedEtcBeZBXXDeYsqK3Jg7LdYY7fm8KhMrjHNeLPUYaTdS2eBPWLms5",
  "key20": "5A31DRfNZpAPGsmMtCGmuxPKZMoM77LN4ijLe1ExFCiqeNr7g66j29FVFLrifLQEVfvszbEH4efXgLRu18e5bbV9",
  "key21": "5Wtv4MWpaAzRfHoMWYrqumA1dStzhGhsLMN7ntZhr9gKoD6BXxNdkceQpQ9mXACwEcWtsm5Pex5SFxLHBKjYd9ws",
  "key22": "2JXD18kGT7SAFySRzmTjoZptzvQYC2KwiTa2tQfxE4uWi5wPDWTYpYnvQ2Q62d8pf21jyhoMv22x1FM42RUqXZNv",
  "key23": "fv2rqoaNps17514B4vewfTacVqmnaqmihNT3JbmrGEZ4HPzgm7sVQgns1yVoLGXTAScCuvm2EuCCYxE6ZdG2w4n",
  "key24": "2fQcSYk1FWooNcLzkurKm4qsacKAUN9X9jRDuvmD8eDRogzhdZ8Wca3AKSXTcenk6eQuH6vEMaCvbeJWq8X1jGkZ",
  "key25": "HoiLHqnEraoWfp5AbD9tLME6Dv1BGmXKPg1YGoyCQLXBkWNmzjeBBdS1PxC4K1oczT6SWdxXw2VT7opySP1VQdw",
  "key26": "Aq1JDLVSr5bb3YxrfTNyn8xdvn2ojx2ZNDR2MNm3A2reghXuuLQRoydZst4TWrn871aY4kW89BF5tyHdb8Hg6RM",
  "key27": "rgs9ZJC1BYKs4cphLqZtsaDbhYpuJXtyEKmY2nLoMzcd7LXYFmjrb5bmKXimoGiwke3Y6WAqEbg7hzMyUTC8fus",
  "key28": "5iYziC6jfVV5DCPZYCivDKPzRtDn6wXFPk3VMpfpYpu3ci8X5ZjFRBrB5JiywFMZBGUHfGBcsGMi8Dg3oPw5RqGG",
  "key29": "3EaVZXr7RYyTCawa6MveAyZ43P4Vq3unGm7df188v74Aw2gVVhJzuYBpj9WvQXok6fxFYWnXLNZesytw5K8wiwTa",
  "key30": "52NbRp8nS31fV5iaZTzvHZBXNjmCXajcYoztomHUccsVTeaBGUBCcLKea56Tqh1SVx6RgCv5djVBjrFCptFWBpUQ",
  "key31": "41ZXRa2M8ppAGjzBwt9LGr8yWA9Z1du6LR9tVhqty4jmiQmtHRYUNBDTedjtey1X2sJKb56ezJHGyJaKMPz3kBkg",
  "key32": "cio2oz5P1ojKgk8S4YuEATMxipRPRggVuGiEj6pGNbgFDEMxSd5rKxjLQgojbe3NW7sTPn4syUa8knwC9UxnmeW",
  "key33": "2zspbtKPAdEUF6u8pdGUkBapLeTr15rfJ28K2fELLbpY2v55ihLgDJrbHNrBoLDfpHWTaPkt6uHehaD47SCrMpKN",
  "key34": "43s5U76fxfB78fh7qRs8bwawDU9ULcvvZhRVEXhcJforJBZmS9mMoVMKSYuYgyCz7YhEHcwoKhbksj12GXMXz8bX",
  "key35": "3X9zxihrjRSYMSRiDSXsZfyZo54tfWM5dZiJrARsj4nPgx7ShGYbBnFtZppMongtXmUjtzUk8KmiU1nCntp91QfX",
  "key36": "3L1JgDX2HUSvtrxdomNnPrYiJm2kcy3twSaAVPWRAKLEn3roEsbQY8RCS4skhVT4ugFtdLCUjA1RKtNFC5SoGwKg",
  "key37": "2MsAyjP93i3w1XBRdq6FBbQzk1eeduJykvG4Q5rJ74p67UqToRXqVRPgQVr7ApbdmT8DBczCD25MFSkZ6UvzzCYY",
  "key38": "2Y1SjLrqkdWCYhYwbBUTSyXE75TJstXH7VsDHe1qkureTe5x4oAp5k3GmmpFsxV8D1efABW47YXo22KbjHFC2X6f",
  "key39": "3W884GyZ6THsB5UmYBBBViNxkRwXxWXGCeevaNFxuaeNPU2HbRuFDGygTgKWbLzfKvcYSjCeyW2iBUTSa766PrQB",
  "key40": "HWNwM7JUY4v4WQkALoaZCadyabpxLtUEgZnPsNQvD6Xrk483CW9ZW4HkQwyqGJ4wtNsLsWuF3KhpJG6D52L8d53",
  "key41": "4V3BjdFjcpi91UPYyf38p4pKXKkZX3jyDkZNwE2DEtR7uzWDjedGSwpRXehLkYYMNzZavNu2mcvKTPDXdWyqiYmE",
  "key42": "NqF8pZXv7Guk3VR3xrNgctZCnZFZnAEWC7eLh8qHgwZDQT2FAcSjiVXwQHCAVvheCder6Zv9DLPPy2ZdNwcoXs5",
  "key43": "g2URMo9NsvsoxLfiNtuU8K4BA5RdyrRbuk8N1r7BFLgfAnvQTtiyPgSnBmejzpMmGJh3AqVU5F1QLU7C3rDt24P"
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
