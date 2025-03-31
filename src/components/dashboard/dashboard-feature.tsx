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
    "4bXENovdsYwXUwt387Puf5xXYVkUm6QN89FPx9S1UQMGyQ16XimSt7vnBApdN5crFoSQrNSuwDCYCjRANQWijV19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRbiX5rP9Zyu6E9HFvG6J175JJ8Sa3WGTDA995qJRF1wpmTZmoBpwwA9tSFaz9k7SjM4HEtBikT1Mq7oo15UUVc",
  "key1": "2RFAfgpko22f7Lu9LskgqXzBjFvD8LwpRws2EG2boN1TPFNDZJsFN32T9hMbqoXjf1AkrK6wC1CUc1RMkzNNA3BW",
  "key2": "AJXE3rGA28xxfCCU2BR5nWra86PeLPa5bMyy7sQA3ucT75juccCTJW1oi1frRHPCZ4nDMZuibG1gBzdpppSv9eT",
  "key3": "4wg1rsHWCGKRbGAAmBWXsAWn7yy6JbkNY8dPhhfoLWTpa5BgLNRBTAFnuzKHehhyPyyE9QipeqBozbR5ojHSGMXq",
  "key4": "42ZFNqfJFnLDboBbSWTChftvNiz2FDeJXXAhSRQizFvZZnSHFUer8mv4Gd4biw7hocvheWKqPHoppsM93s2KYRb4",
  "key5": "7UEqbGRgz4VdHz8hWnohvY8kFYx4gTAouBJcoxWaAnePeLXG5pBkKZ78WEkjSQwk6cy429Exa8L84fQMJ1cwXhL",
  "key6": "5UFKaV7ZRjYqL56ZLFFBhVubzYMuEXN2RDsmDYRVJ3wnstsAg2iZy8kn2GLMj4RoKH72x6kgApaJwZENPpjCKJpV",
  "key7": "5aq5uctHW8qxLaPfd2vNcMUBer5HUkfmkUzB2h3NeFXVFBP7B2eBU6ip2KZySmTJLn4UaS14U7MX4L8A16H56J6q",
  "key8": "63rckkVQ3NxJri5ZoYFpmUCN48Kh5ET3paQY8CV4UsmQStekJPrZj1Sb9tRWTeyuEBcUBUUJpv3ueqLrpzDS9BuJ",
  "key9": "3nMMLxSVHCRsdi2CZ9hnU7cxWmuZcqr3pbhYq3Erh5jYs4qtXt784PA1pYXJPuVG3rAXoQU8PVGrnT6EG2srpmrq",
  "key10": "4q96eft5qYBEYDFaTD79eCdCh9djSq8UgAmx2PmsZiUNAJJqJdpAcZJQ3rmoBVJeMGEf83YfcHeVfFVZMAarMsV5",
  "key11": "3C2RuLxn4VArna3tipUXHmqpXgv857XghxujdxiXz6qoLh3MppChPeaALCZ5AXp84FDp56Krw69j69mybMMYkXZb",
  "key12": "3LirpsJNWdKErUAmMiD8StbhySn18mWM4XtvgVYGgHDgfjTacdKmRw81GDfRF7p8skDBGHVpCZoSJ8CasbWedZuq",
  "key13": "4arHmeYLXyaFtrhmAxRSLLPuzqUF22ZXfV5z6rsKbRvuixhjxKvxtNoBaYWmK2wutTENugMTvkrxsftT4eu8sh2j",
  "key14": "5jZGv8hdGy9KHNhYP2mLtjbS9VaBSumoGZWEQRsmKVXxJGmLSLo7YhBb7SaF1eTkn8Z4seLUQAvgXaTg833Pwhxz",
  "key15": "25NRa81kvs2pQaaxQPX545yGajX94nMphE64zZx2pBV6LmhfJHwpcaNXtp8Pafamy9nJAxuX7hFiBhBst3Hn37cS",
  "key16": "4oNXieE8HJLtPAHWX1XQUVye4LV2jM38sVHGGATaJXAvDjZEmeLokyjfsRsL6eCGQxNbjH1tAPksdoSqUXRtn9zx",
  "key17": "4jPPTswGT7RZq6Pz8sAYmjvAATyyGJSb1yiPVQ24EUFNqr4hs2N1tXRAuyYB6hWwfrkMtJYmGwp4D6M7zABVt6SS",
  "key18": "4DKRHqRoQHa4i8vRRcGoKzNuZX3caJRfUdZde7h7vrqT4zVT5SL65bsreePhnhZD5DmQgTVTYS29R5fuTnvsKPJ7",
  "key19": "5dUWZMKcUH2o16THD3zGgvpSRuVH4WriNt6HyqmD6xYmtMjN5R16thwxtVefZzkLonGQZKXYFCLJBtibgcRtmF8r",
  "key20": "3xoHRGUUmkbZUif9wAAXa3N1FcTf8iyJRWheru6NFpMqTDEiJnveJLMcpeFSu8WaJYbRmi67zfocCyVnX4gCXAB",
  "key21": "33Bw2wjupKtDnSeKuQEo8pZsiwg8fSkjfqq4K18XWGz78orSQ2SNqd55q5hM6pdLgUPfpD4yUs7RgDGW2E2DvszR",
  "key22": "5BvzXvZkq9aatZMLyQYYMMmT4ixFvRsRPNdFPPFJhTx2JbF4pcmbRWcogVK1pgrHBBYK54jS5G9pb3xSBPDNsSBf",
  "key23": "gQRnN8yneBQcoxL2U9vnVsdYoHA53kkj9NJutxhkehrFmb7CCDKJcgwKv1gnXjdLGSfzofy9qNF5mJM7tAoP6ja",
  "key24": "659uPoQLRFbu7uXtnUo2VFguQdGBumJp6y655HNSe34uNmAg6Edk1sUC8P3kqqCqNeEijjHc5bidkqn9ivRgMRt2",
  "key25": "5Z5XgSLxyaTMfyf2LXEbEbVihRyzjkickHUeU6k2aSbRPprCtFFrhPk9roPJ6mbdHFigbHsQhY7L9aa843Ne2KG7",
  "key26": "jsmydHg97WBQBkfNPojMpqEbCUpLvpX5fycBuzfVL3zNHm7BtnJhuBxVougT9uSvVrvdGVYcBU9VDUpxhZW8gKG",
  "key27": "3ezV9AJ5dznMQiQZ9SXZexDFWHBJgiS4vkXg8WsqrQPRnh9UdkxwMCa4uNC4ZeHBpNVAVTq8w31MVuFnMr4oqxDq",
  "key28": "2hVuRv98atjCyuZamdXPD6Lk1QexC7ErYLg6BZsWc9wkyyF4tkexuBr6Kvyua1Aq54wjBr3Dfhwbet6ZshmjLNpT",
  "key29": "4EN7QjW55YsjuT66aiJrdty7544qnQzvYovqcQjYYRtbjqesVSyty2JUgLgfgFKS451j86NvnuPba9YLSxG3GuNo",
  "key30": "65afsXUdZuB8douw51fGtpt7p1dgkGZBMez6uMwnoU6QFktvxjcpL47kFfFrD6YY57TbegisSRQLgchVng47LU5b",
  "key31": "jUjZon5jRgLZiNtg1RwLBDEFZfB5xcrUEHWYKK69dTY7B9saVDRWuCUGg1hHve3113EfDeZP4ABX7TtVDDPpLGk",
  "key32": "4oXdmXYhNzAxs5843uPxGUhYM1rcBjR26hG6wpf1Sbrr1FT5LbNGPG1rhDoH4kz8TdwX77nY6qAXZ75r1VfL3bDd",
  "key33": "2tRfi6e5F7HnjKsUXK4hE4rdfdcdnssPyGCXUHyi6peLK1FUp4EQ4qAUKtnS4EKL8s34YZs4Lm3pEmK49HRxESf7",
  "key34": "4zmK5xSP634nEPPKbraxqXjSXtmAMYp9onyKjyPXRTDMzf45WfS4FKvxrAuABJuTqaVihUwqwc3SgWnmCBDiYaCk",
  "key35": "5Vi4y3gDRsKd5NchEBBWRoTCUDnzonGVS9MuZ73qhPGGyvfvc3YPH72TGb3wWD78JvsszYop56hzTEKGWjFEFiEV"
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
