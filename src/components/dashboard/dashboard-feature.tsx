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
    "5rwLZHkaZN5Fu8237zCPnLrBhQ1fzmphJrdaPRxmyr28whguFnKTvJYRy63kt2QG9CKNhbi7ZGA21dUXKd8Up4pX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXoQ2tVLumW5rdbsdhyEm3EMrWE84Drbg3JU5DJ4iXtHTejZvP2bHXe2dYYY7A91nVBe52pBrgrciwxKbuDjN7M",
  "key1": "4C26jNrEMAYNpGFzEsS4HSfr5gTLtzTRqLr1X2rpvVM5giCsBCATjSbdyfGtV65AiFr2DNhBzurmxpFMxENGhi9A",
  "key2": "2Eto4ZpwHTbv5CdNJgEsveHSsVCyuMgj53bMKDxHURErV967jv67hSxGYDHMrZd5iFLxhtnktFA6m5FXJkAg8xg6",
  "key3": "gWzuurfVFLbExsL7G5MQVvh3A8xu8vkErT7Dk2TwRAttqDDKPV945eENGGmnG2uGGXyMTNv1fXmSRVpHxfzgode",
  "key4": "4TjSs7faB3LLwUcoFnAk61VsUXqRBKwAN2u1KYfR7jK8sRi4Ei3MVhKs7AFve5ga314NHm1e24iTD9gT7kFQXyaW",
  "key5": "5tUhNSwbd7MKRMmWFCZ3GBAS1X2v2CeJPZwKz2FV3izHsZ6orBumgv82d9zynbxvSciDDcBF5k1nMNTUg1NjL3P5",
  "key6": "26Lbc4q3XVdr4dP2BWpKsMnmb5Po4DMccyGpTxFGJmbNjbA5vgpDZzWvuyMbgJieVL4tTu2Ar3jXygfAcKXqtSAi",
  "key7": "3DRwTe6EQ6FeW6NFJx36nCYUnZ4orUEFsvLVndPrw1jjzJUqSwYL5HpNoWaQMDrvWfvTAhDbLWcs7wNzknMts9Rv",
  "key8": "4SQgtFQYcyyScEVZFHFNvr2BmeE94HZdP43ynmSz5H9MzykTFVjzrAqdRLaSfS9uN1oGWqkkXv3yc2u5SqW2H4TS",
  "key9": "22TfEdShLPqDGzP2AqYZYRrYP8JsHBbVzh1R82STPjDCTiDbmegXKvnsWKE8J5GVNtGfocjq8bbkTRA2R9TNaRwN",
  "key10": "41esqdbNUQkKqEgXiZtYnnAQQBUXwUcBvsRibj4JopCo7ujkJg82yYpmorE2JimsZBRqgFRikrEC4FdjpfPturxk",
  "key11": "67ftVfzvdddBArtwZEia4NYHynwfKPhjvBXoVPn2Gcg1nmo5x9yvnxUZa3B9aPVGgGQ9e4hyyVNrjfSz8LYR1KCp",
  "key12": "5U4CtPkLQNvspRxzbEi5uQFS53uuRbt5GaQTZuEWobazdEVTrAUZfDe5L4wKyFPHsyww7Qe1WPNgf7Rvyo1m1Z9F",
  "key13": "5P5SzVjHC6ESkg9Skc23mq1KpT3oH3RmyPQed6bTeyxNLuk7Eqd6xyyq9YsWGUCYJUhqCANeseQG5jCCWa61oRpd",
  "key14": "5poFCSCbU38xkqs9Mhb53h6tYZecgb1puskd9uzvKmyKzxcgd4WvVemntKnozmJPGGZ5sKM2n7LvZ1MsEAN3oh2p",
  "key15": "9wJm9JLoEW9jtFVjB9Bfsf3oLw8CN5t91uBBRjjBhwC7CYa2aemLXdTkzBjTYrCXDCS34s3xUusogqNiGfmHYi3",
  "key16": "29yAnB7SPvyyYXsw2PiUXPQfYUuRPMtSxcGD2gnRU9UWrbRqDV3Wx2SYtZU8LQetJtqj4yGJr53yukNNXcxGwn4f",
  "key17": "2mNYzbs3dQF1SHs9P7upWPaDih3hzyaVHqgD2wboQjoBSJUJWmknF1BSAnPt6iTH1A8tLAMizspBFqAQSsWXtop4",
  "key18": "5EdxY6pURDVXcAJHeJPHAnhirNbp5Z5k3MBN4o9R51JZ8WgVxP6oWXHXdCud536vpTjdQom7LA6UJfbJf6yaTdJu",
  "key19": "2bsoXid6UnqsdM2Ruzqk4EhJJEVMzLGHvaaDcki8jiexFPUtKFvyHGGsGZKwH4mdiHNtynmUwBUryVpzssiyy75v",
  "key20": "5pP1u3d4G8pofiz1iy6vKpzXx7us3cQKThFE7Ts8ptq9d5VxvqvJbfa5eM2arnHXMhM9RfS3Qpvh82q4wzbfQDrh",
  "key21": "UZA4Q4d81dgwXc1WX9ZLKCNvjan43teA3uvzeeyfjXSrYStNE5dMHJQZDJzVdRifk6XLx3MkHpoCuVaNL2URTQi",
  "key22": "4o3wqNFJCiL1rXTpC2xWJdgcCuQv7gfvxDtE2BsWRAUzp1nDS6gjPrk3ChMSMsgSaboa8kf8Maqo31syDKsnVQhE",
  "key23": "3yXZfi2c7WErBbtM7w9qUzz7ARhNLbCAmW8Ygx8uDdGDCHPHN8F3tS5hCUjybTYsKST1ekRofzeut8m1bEeAPpPJ",
  "key24": "4uxfBaCbXeXYXPtuoETGQJDR36Pk43yeqG2WRyp9CsEUcvBf7HRPNhr78Unqz7aCQyh8SYDgK5efrqy4oCYkfuMp",
  "key25": "EgxF6AonbaQTzYecj2Uvrqkb6Av9WipQYRbpf3zAFpLg8ENBR3zpLfsoXE3uiVYT5stFMxDjUnXK1DfQVZyhhLa",
  "key26": "5iGenRDemWQM8Bk3Fup8GW9XKxFFPw94jTo6e4qUZLJ1TyTh95ooZcDXXCxkeQaVSiE5NrrxzMyQ7JaJVvuCfbJ6",
  "key27": "3pS98qFxtKicgrPKXw8JeJ2YaeGZTbwzM4bhs5DYhpt1evNoCN6rKiXTXs4imEhSyv2BVTcSrbygQHENEb9HZP2R",
  "key28": "5GVkqRLbxRa52sHuh1THExMH4wL9xwgGiBJWDKukMyemKbyVgh3yyQp76JT9RR2W4ZiuDEDUFP4mkPuuVv14bbsv",
  "key29": "3YV9tMU136e39i72m1P26NKJRV4dFxJUK2rKpytDLhwEqZXs8sc3NSLGqzHzWKoZuVS7AFxJkKToFFWZfEstqkkH",
  "key30": "5kzC2tCKbjoJr3z7wLj6omaMQBvXdHChhMvWx4zTDFXqTyGphNVMu142NYpbutwcnLTVyKVwGLusFWhNdpDwE5Hs",
  "key31": "4s24kXBWwNy9DgEXHpL1MS1eBoD1hKRhMg4d1NN45wVYHFuLTzePvy4iMZXxC2BBiZyyPHtycMTMd5rosb9ANsGC",
  "key32": "3yEwg5u9qoKwzoDjd9gBbstmQM6fBAu4QDosXeSqFbpMHmwZvuRgfRRh6NijLAuE4yk9toxhAWhm2PC7zZ6T2QaQ",
  "key33": "4L9sLVynTai2NjeqCkLRFCqMxckTwHrKRY6jzEoYXJswz8yLPrUPWYhNHeQhPYtfZkSaC14E85Vv4YpQCBeS6cYt",
  "key34": "55zDQNuVCsWxZ5tvRYmRTavsUUzuEq5HLbkGdiBZidYQTKTPrL2WUxyPwD4xvvJ6pFWvnkeU4xSpZQLtabFojp1c",
  "key35": "2Z92AFo7APTTAwc3KdoVDL36qDCMZxJNim3zojQ8YgQUow8Wo4muQp8NbJPpHjcxBB9JpmzJzUjTtJLFicUb783j",
  "key36": "4EZbQGK5iQmaUtkFjpmyEib2nv2kUoTTQiRj4RMp6LZqgmsEop8cnk8roWNUttmVw4AmtPZJyLaFuCHwDhYwfy5n",
  "key37": "5eMGAQ3jUdY8XMGc4bMrGietZ93iUPxXXC2avhShX9R9VNjQzCsmSZkVJewjbD4vNFhox7VhyQjNZtteUhAgQQUh"
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
