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
    "4zNA5SXV6W1GnQeeDRDPTvGMjpaR5nec7d9K4Hpfo5qjJBczh4ttCvDV6SoSoWHj4bTVMftGPsrQPSp6eNgdcaw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bFBzkv8qa5bf4PD66XR6cL4u2LNma444mokhCmXSkKByusf3eATnKQnknCDbbuBaGUdZ1LkXJqHor7RTEvicu5s",
  "key1": "65mf7NcQqvgc4CZy1CtyWLLDeGjpLyiercv3aFgFLb8UzRhaM5TxXrb94DdU95KhT8AJBHc7xHiC4gbuuP4yvxQ6",
  "key2": "3PoeVvY1pdaG9UNuCxCbQQ5om2QM3DhBsoctRroReLTokVUVSVxXrM8gj7rEkUUHUKLPYwR5L4yPtAp4axjLuWLp",
  "key3": "239xuB2hFHtaPfF11rk8zsCkxJ7CKNfdmqU746NKTB2HkSDM3mzLU7ia8W5favXqCudRPUhGcyMg8LVVsWzhBdij",
  "key4": "Zj4zbBsqQhrsnoNmWtbFwC1ZMrWJNYT9tmqnazEbRzAshDqaRmw9Vhg7dRhBZikoositkRAgeKk6G8a6yLU9qre",
  "key5": "5dFGxDbuqSarLFH3q65NGNPQMyy1PefTcdkcTJx7WpcGgR4Z5D86JS5Q1E7hTrF2EtUF9HdNQXnzNmRW5uwWFnLa",
  "key6": "pSrvFVS6pBN5Ep9BXYrWHUyNUy7N5yuLWx2DJjowuNQFGzp9NqQbEhF9TpkwuPHJQVoKiGVapCNJ8Y4r8HaLipQ",
  "key7": "2HUcfgGedqgDmkVHbf5NxeLrhowt1MwosXR5tTYNLRGFi7UsC5snUeMLH98yF4wB72NHFYM3DCzVHJJYmTLKcukV",
  "key8": "DbwA4TgHNNASdfRvzpvjszu8aoQXtwXUxmfmhEMRWszE3yMCd94JuV4dgd5w2zdWCjiKjQKn7f6pWi9GSbAkcsT",
  "key9": "35QobFRpqfdMvLQFFgDKbK79BmciCo4G2CtC6AeNf2FVMjxxg3BipnUzdjDHh1weRCjfKZYywNuyPbaMTEqExQUa",
  "key10": "5ZmvZF7zF3eFzBfJDjSNu29uztNKbitGAWfZ5X1gAHrVVDvHWm61f5cBL9Vprv6fGyxmxLK8gMHfg3mEQ9Bo4DYu",
  "key11": "4366CM2EzyiFzXFX26HpeXjUhnj1veS53WSZ5VEHrGhk8krtyA8emE34GAnbwAr595YSmYatn8BDNdRHM9w8a1eM",
  "key12": "33MrYeTVt9wd6YTyhP27L3X4DsxZ3PHcPxsYk7cFAuuSJqDPazhqgSw86DVrw3E6ooBNKRPYkVCa9pw5ZzFANWAU",
  "key13": "5EM44XJMXJyjPCfhJrguAA7U2tXZ2A4nKvNwLP9sxeg9evxL9yc8Zds8NavQiFfYTZBrVKsazmRqujADQC8PhfoJ",
  "key14": "5tKkcmmzz7SHKU7qoG7mMo2QUCnGb7SmcLhScZve2YmJizEJ5DAMwaKrByW2sfkp4go2LzEaz7zrSB1vXqXPa6Px",
  "key15": "TLBzVrDBEpyKX85j4XJYBC9MpcNRomuAskBEvzRu1KyhExH8WXJMBGmjCc9xCVNa4bZEGERdMXiNc29YZjMuQWE",
  "key16": "62HoqdWCA3wN13cvaDRyMsdiPF6KRo6ytfPHUyXfY2KYMtgRdcoyfVNc4UNX4FFDHpxqUBkaL6dhQxQt6waBc3Tn",
  "key17": "3ovMZH5sHxMNYZf3rUp8ng5saC8gj24qLf7v814wLTs5ppDzH9SVjoLtjnb1p6prciPbVokhbhr4Ywg3ju5HLcpQ",
  "key18": "4td48GQGohgWmmRDMXxL394rD4ZEUiAUpiwwNwSpPHpwKjxeLyTYqqP7x7dkLJoNsgxqK6NY1ttraS5wS12c9zpN",
  "key19": "3rkqAYVGZLkZMG8wrm3Ew6RSyqkMdw1Q2DKtrqcWJoYw82TxzfwNcxKVppSwwPqQ6o8XM7M29wsT4DSBDrYKiYt6",
  "key20": "3aE11bxj2z8sh27R7dqmvj4ew34aHuafbqAwHo3eAUiBqXuaGKyJSW2jqd8AUBnwSqhzGbikAPppii416BL5rEnW",
  "key21": "5Q4GbQY3PwDDT9B7sV4WEpXXArtMkAHanNYPTME8KJ3gDczqJJKnPF4iLA272wfdnojcorhEJgBUpgs4NpJiQYFR",
  "key22": "54TTuFmkrN9Nca21pBgGqZ3bUvMzzeQrevzmgqESKURPg1ePDn1vqi8wVsV2u12X5ETx3JBABQiGLuNE2bg6t2tj",
  "key23": "o3FKSLcFp59sMBFmPuycb6f1FVg4xT5JKrRzF5bXUqXsAxx49EJEFJFazczN2vnEmXbduxoHP1Z1TLAcFq7YmkY",
  "key24": "35YqeMEbQbb2T2wyqVfGChiUHBesMbNqGLreY2DNxZMn2egzVfgcHA8gG9Vqax4BnMY6CBxXRkDmeZRCLdCKL5C8",
  "key25": "YQqgn8j9jLUyk3gdCuoDsJb5QYFXw6EdzGHrDSK7ikS6KdnEemdFgSSdQ9sgacBThwbvVafN8Tx4LanREagXcFL",
  "key26": "2Bc1ctrhTyxjNYubFQdGUALmrr1dYTQfLPQFpCmVzt7yJBTcw27rJfsAeA1bq8f9U8rY5o8neDYkubNkGgNc73Be",
  "key27": "3uNTT7tAp82rfurQkPLwyoha9im2VsemZVTPnnyWS8cVWvn87zp6tXv1PcchDBUFmkdwjQSLyAgGpL3cEtbUCiqj",
  "key28": "4E3FgGSYqJWcg4WTAu1uEXSdDoCxcMni1L8bpTtzxVytDdzXNbC2NDmj42cBEUZ8Y1k3uxegvXdzCqLd6TdxPwQ",
  "key29": "2Zjj4d1tdqoe4JBh5Jke57Fq8r9z9DEDLAg9xYZEt5UtQL1MmhD6M1MoaQhfW9jCcJvQgw2zPPfJPWooce2NRTvy",
  "key30": "4YxAw6r22nTGmhY1gpE3oJKyQk8fQwB5vNuaPXVR8wSufNdgLfQg5wooK36fSCEuSJzWUsJNDKrCx7uvgcFycxpQ",
  "key31": "3SFBAB2KtX3YoopDCBCZuaVppe1cXjkc2Zi64kYVxmafmXdXDuFiSQQHj6NWTWPPGARjoxTbuZcHeFbks5K6VMW7",
  "key32": "2o1vKQMAs28dEVBjgYTkT3tza3xtauLpDhx5jSt1wDgngARXr6Bu43r5V2LgFx9A6LzCe4mLAtX3MQQ9ZcHj4K8b",
  "key33": "3t4JN3JAzyYa4avKKJyb22i1dVUmhHV4JzVcADKegStq8sNyhKUj7KqAnY6C5TKtoCAuyWi9YH7nvAcL77axURgC",
  "key34": "RbmGfe7KYu8wPQ5fA6JzLuNbUpiBjaXxHByBKg68pKcEjwtsRhtbhT9wtXA1Sx1ZvN3bfyxs9o37bubpggt8ND8",
  "key35": "2s54S1sSMccejHe6WUB4qmpQtnwww2EeRB4Y4muBGWKoPb6TFaobwFa3pYnwBjzxJGgcmmXmWhkXwikKCL5GtzL7",
  "key36": "3UDN6RA28VBwZcJpvfAQXB5W1tT1mwvQuAvjcg9GoUa9917Pwzyuun8VCmmNJKzGW8s1Lv3ak8BRLpMYCZRFscPi",
  "key37": "qysbSeNU23RawNnAQUgzok1nAgJykFLYBwnT9Ea1K4AYF8VFcMftQzPXXH2A4169UvNETiLGQr5SUGWVAu9GRYG"
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
