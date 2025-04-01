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
    "3vchV4x3n494qpGZCjv4bjz95bkqqX8QBF1XbdNUBpF7i44NBUssQZWnamLrBi5mrTbFfzHzuHtphBwJXMfJW62P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZHrFGzSEtqTDUEKyYFojAqfvJWWVAqTVybJ3RCpSjrD7fZHjJuLHpvyhR1MDADbssNX8HjUXbDYuH7pLxYDcGp",
  "key1": "4LsmxLgxqnchoZB2rr5W52mauWSfpTemXyUHrL2xnmFzL1X5q5WHYoJ8zaxiyXCBjji5yfhR5mjc2uk4XdQAh7G",
  "key2": "zUCxrVsxZa9cAyvYDWdYMTEbctvWbxU3y7ccKYXzGjuZAQUzXyeuQer5181xGov4Vf9cK56dZ4AQqWoK5bh2rBs",
  "key3": "35dY8TSHz3TYR92FK6SmzkF4FCuNsf6sS267sdchYetxZjLHXMyLTdbMwpwXfjQdmapb487pkFfnNhHpFbBrddg3",
  "key4": "5nm3JfRz92cPKF4ngiRdxgxVKRyda3hPpJQsLotsyRtRhMzEtcyz3yZ3cQ4ckm8MqMjzDnjKgBYc1Mr4d2P9ZiWR",
  "key5": "2hUEDaxKFof7QsWVse3qNuZib9d6P2P6dmLqwwdQ8zQ5uetS8oJvpfuv6oifFTSX6VBQx4QtPViY2vmhgwZUfc5C",
  "key6": "4TznaiK5B1rnRrNAgi6VLZ5bsQFiS6Y2mZq248A81GQ7BD3BMpndq1EFzY6Rq9iyyRbqGj2RN8aaJNJ1gtD2YdA",
  "key7": "pbDbgvDKRmvgw7NWUFwpxbV4KpY1NGZX8pUXxWMTaNBjqNWRW9bY7LVByrD9aDx8FBAU6ZLQ3m7VVEisVGShan5",
  "key8": "3wU7T8Uof6yjt95dAkAraD5NRFdjJ5C8DiUQnBCNBYdccJvx3GPNm8u3ZyfjW5Jh441XqyGeSaqJmMg7y7hFoRCa",
  "key9": "3Zm4qWgK2WNWjAC3o6GpMKqupjmiSyEH4CbsRad9uikPuJDLFDiZkeJhk2GSTa3kSmGe6Sg3c3gHpPCtvPkss9Ef",
  "key10": "5GsNrCJ5DMQxQ6cXC6BEyyeHy4q4dWXZcbwkmbjNp9WALeVvZJQkqwctBwu8NSXe2AkAeSavoVojzFxEUgrn9iT6",
  "key11": "43YAV3Biz1euwKnexYpfgP2pj8BbJCS31mXKVapEANmXrj5YuyZsHcsGRMovZDs2jS9hZoGPxK1RcwJZKJrGJxD",
  "key12": "47w8sBSHgsih1fVvZXuGzPab1vDAGRu2tz2xuf5bCaCgNM9fys1PQFc7TcuaWAzMTEQv18tFHnjHLhk6jgX9UoRe",
  "key13": "2oLCh65sGfrZYD5aSpA1AsHhY7gAQXJ2nuF5QK1Xg1obzPvcuPTx6nNkcaymyhXtHAwfWV5sEKjag8SHquBGP5op",
  "key14": "2mw5R7MKbU6rSPgJGAXYUNJXo9rcatKpUT6zN2bjB8yZqvj4CwYr5QHbk875zwNKN23DzmFjGkMPvTjjXst2RWFC",
  "key15": "2LNdU7axiejSGpfnsXgjqW4rsgNkTLmoMBzWQ9sVTQygejqC3cUDYzzBWqGyupcRdkSoq9VTeGLKcThEe9CqtM89",
  "key16": "3AtGpcau2qCAA9Tc2cmuCpAZ4oU4es15R6bH5G2BYVLVDMtMwQi73fFjP4AGBJ33CDkJ5Mi1w7fWcuGs8JMG912k",
  "key17": "3ikbb83yCG3m7ncgPAaBKvLo2ZMRaHVkubCwdVHjZuScviHfWbq6E2HUQX9WV8svDayMxDtpisgcJrtVvAXRUddT",
  "key18": "4caBfV8FvGWCus2K65c9urxpwbUMzUxi15rQGmDEGjFwSVCtRkwPmcMWt6FmbifN45w32Uv5jSRdCJDd4ST9XYZM",
  "key19": "5Y16jCermUxxsQcsKuXpqEwAecgVZm7gDECcoWTn13zrBmpCMM9epdVmgohgRBdCSceKdc1KBCB4TkzHfMQdUXu5",
  "key20": "2ywXLFArxSGhHxyFHNa8kEtGtCGMLV5irAibT2xHzAzpMLQ4s5qo7hsYsuhWLXk7uczBStuQHJW5zJX4jh1fckr4",
  "key21": "4iYK27njTRkG1tzFt8XUqE3vJD82FPdHpLc5FBdVS22MDM3Xg2R5vKtnXc9fspmNXkEJZz2Qc1NPd7tsVMu6SCaD",
  "key22": "Ssmz2tqg3LanJdBWggTX3KnxhyRueqs7zJ7Q1sks6uhjQ4NGqF4APBWvXTGmhhtrDFr8A1MwfyHES6NxYdEQkH6",
  "key23": "abRuBfQ2GF5TainPLDoxWNMDuopaVQ32maXuobTKX6JFJ9TaTrEsUtNdVhP8dhxTTEwewYd7YrMNXZURHHTS9fD",
  "key24": "2VPqoWxV2i1sVw6ycKzYVxjwnhEy7EDXgoRSV98jvymfRtJYj41YNKTjXZEixffZJK8pVnxgQ79sDnkMiS3woypQ",
  "key25": "4bhFUXJjXtDHZHMyB3bL9gm6r8qwc5WuBKuypW2avE4PgU9wXK4WC6kc4tFpz7JMn8spoSYya91hrbRkTVvpacia",
  "key26": "4mScpMwz9TxzdrTrzJDRZeNXkyVNVKSK5UZGWxgoiNaWyWmwjpBhHpAgvCi5FS5ihuL94j1UoM15X1NMXNLa8naf",
  "key27": "4FufBWfjmbniSpomTda2QXcpNTb5xK9625uGcLhTCvVNZooxheGQeZFdgQtLqMDyqYv96nsxoyRJwLUKKRMDAmYn",
  "key28": "2rD8NrmJ13mxfSHpYgjzE2hWfPzkFeW5AJgFqZ3dSmXnyccBhnkyfR32oxDauwXEaUJbFu5RyTW9NysYSaVwAKWG",
  "key29": "3Bi5VyYHtgh2UBDENsnXE59edRxHEqtnsmV17QLd5PktAsWxvdQ8VhGxHyGY5LrBQejhV7E9uX9LnV5oFTiDmFY7",
  "key30": "43znH4Uv5k2mrNYmbWWCSTaNTtZ4iBSZqpFb1ieRgNcWrsZwMdfVu8XKfsMb27qqGk3fFqhjKzDymCtfSU6mmPrc",
  "key31": "4iDQ4QHvb1c1fSNjcoczuptKNDm4ZDkkzQRZKfMQHv8F3EVY9tridzVKFB1ZiS36EcfsbZ4Y15xmtZ2UBXqpftLg",
  "key32": "5eoviCnbwi7wuUrEPgn9L6DTChG9uSU5kPegBjqCyhxAsvq5pAX8FfckDert8vyutUni96zHq9pHCA2T3LqkBRhz",
  "key33": "5hFnUtjeGt12e5v4A2Dd29g5vEFmerm2kHT47SajX2AsgF943snVTNtr9UNWnq5BAeUJ1csaGWPbM4NrWZthwsKz",
  "key34": "vYDQpyiuGFgzrUaDkN17yGqafvm55YL2AKgJRw4jhJxDRzx6DHZLzQi6Mk4AwGo1ojSuhMxyDAQsAstybLzG939",
  "key35": "4z2GtmpHoN2TSivvRaAnNZ2yVduMV79CuPDL9kdxmiRejwH9GRdFrP55vRrWenjf5un5UyV1B24NBsYbnjDByAWN",
  "key36": "2tezUz9SfLyR7iDdczV2yMNNEFJVWMgAi8q6zxDw9TYdtgH8brGDV8RdsL5Yg7HJRMphPgH5sqPYyeKooGeHSVuo",
  "key37": "PJM9VNUDkDHPEZ1nHHpEakWqdjamN8q2kavs3fygW9pbe4c3ij2aGsabrytFxVo1v2X3ZR5A91adVoJYD7w6U9U",
  "key38": "3JDHnU6h1YC11U66KtJYDKbCknr63RrBdfHBbdmb5FAbiYgvX4ZT1qm9QCM8Lvz67AHWpd2SLDUGhqHqRzDUSANe",
  "key39": "8ENBpMhvdf3muvemKCr5UcRXzqLFKiTM8vKNM2pbNdZKsGrzXjoF2Pm8rc9tjjfAPMaCkN1vdxM8tpxbah2mjCP",
  "key40": "xYQTnHKveiQacBYHvdFAf47wyGaHcUnDgCTPcNA1QbznPgEnbmULgUfUCYUmQ36ogWt8iREuH3i6ymQLMB2EkpX",
  "key41": "5k9FnguXhoxrL9WDEvnQhxWc7mYp4NAEqJYWVJNWYGc9XTfv1GmGqWdT5zvZzxGs4md5HJ1ev695HqqqFKy6Lhz1",
  "key42": "2RZ6cBiyzcX5kjqpGNqfgBxtGFgtJytpc3qmakywhhSPxe6c35pwTWMh3tcsiGynNrZCFBwQb6HeUb7EhyiUKVut"
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
