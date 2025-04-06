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
    "5iHZfu5BC8usueGccXB6PaT36efg4oWyRYDMbSCNR5GPMuZMtH7hvbN1BSMg8aRv28iGrWJMtUgQA43xPVGbjPen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1fZtoqDqUxsyo4mSGRAEoxToxWusXa4xtNbBahov4tPQWVpLJFDDaf3mJe3X53X9RsfJepcjYyVz1moHvazmEL",
  "key1": "okF3rbJghUN8e3ixKzAwYDXbY1J4NqZfF1QhqoLC4KyFtrsjBcL17q5vdqgAu9d5GBdRXDDqCjFUxAX2JCkeadn",
  "key2": "45MYvG8VwXNdrVGfrqp7e2MUH4cUP21nvnFwhAsju6wH929wakcPPm91eNgtZhyQL63WwFPgVDM6cX7G6unHnArb",
  "key3": "3YBPWWEraKu8o2dQ1HBafmUaguKC53PEvj698E626mntiCoJTJmVzfbKwdYANU6CKkyGeavLLjSVAz4Xqjpp45jv",
  "key4": "FiD6GMqGhPxzZDatDtAhcADh6ErTP5uaMuNiZp9nxCkAUrLLrCK8hUNEapoZ4FQKDCifMxfhHK3buzCqYr44mzL",
  "key5": "2gyfV3WRMvASCY3xQyAZnu9AbAKHzjEKYFBzwrbL5QweEuFbEQ2ZUF3fkMxqoC3i2sCRSJ8Tk1Sn6HWWMrVThHZz",
  "key6": "UQRqwoBLixWosHbT6tyfHC4FnDbDF9xSg2Wjz1fN15uKro9e1MmrZ4DBJzcmKhQt9CChorHGiLAksvvaJKeoq12",
  "key7": "4TN92ShXCgpMM5SezWL4Y6oX6XhwUYgj6gbGs3nuxJkf4hTrb4mR8F53mvJoErcWj8M265mN95RV5yh3tJySSEBt",
  "key8": "3b5WwfnJacp18Binw1GXJw11fqq6EAfyKwFisWBWh6zhybeqpVYQQgj3m4v9Jd74qXqYz11xQRLmzJiQf5DvX2mR",
  "key9": "5AHtaKAQc3oszYPW3W3hry2EmHgpjasXVWUmMCb98cnHaXTmGEHuoPW79kRc5HyxmXaAH3YzwMxcFquHKXm51vcA",
  "key10": "nxs5gU4qdcE9NzVRcruioWrb52xn8T9qmEBc92T3VqFj2gpvSN41Dm1DxmhC7N93yzATvXuDivjwRDwYf2XnJdQ",
  "key11": "5QdjNFksoox4zPAMvF4WbP7tpXTSczZepizs9hybbLqtcVFttQQVWLBbgDpn15sFENyBR65yPawrcjaJ2zv5F3RB",
  "key12": "5E8pK2PvtEBwrsJ9tTZsV4Pq94yDjJLxrJkZWjobw8uaJgL6GfUaD4jiSq8hMMruRyoG4ZQdQefKsVk5p78qDmgK",
  "key13": "5Q1qKMeMy75ACdHKPc4XJCe8pDz316ZPyD6Duts98wJRB8FEjNPRHqBhuXHJbTNSrG6tCGKCKrG5Po6boL44n3Gf",
  "key14": "3DJkvEPCSF5yXqfjsgeDjJz6CHaYTWs6fCVG3U4PMUBrqjm7SeEyARx8EPymrfLMzFwBwfSy8S1h2o5rvuXqodDH",
  "key15": "2k7u1VcaEufySqwFARVgTCBxrXGnmUUK2KukpJYNLTfVpMnz6F7TS7U5YG21z8SuR67sHmtBuQvMBxoLzAoWCF8t",
  "key16": "3Hergj5DTGKMRorEkQZAHf8RsDJtcWokiaoJEJQinpL3ZWJyh2ShbooLVvMvThLmyqy6F2qhEUEEiw4REPwvGQgJ",
  "key17": "57sNQf3wzbNmGnzQAybirng9BfJxAarbK7WR2ttVL9QBGvTL8ttqrCu4WAzcpVyUZu6fXondahgBZAuBSfYU6AUT",
  "key18": "33JFQLQmD5cU2dNCb5htP1BCJn1rPnWgXpqLf8FzE4JQt1Y1SBvRbMN1CUZHN6AoZcKssYZzoMEN88Rn6tXhH1iH",
  "key19": "3KwKDnNL8TjbDQbe4DsCwVWR5ahCGDwrJDPdZL5XnCKMLVrqucpwD7jpNQYwoD7WssjGemvxC6wnMVhKzMD9MgeN",
  "key20": "q8oTsJNhaUcVFyZ37w7gcwJS6n9xq7tz8wqDJ6EaTgr8zbn3wVfrX3kbNoskgEHFB2gsK8o2hdCrH2Thzjk2rq2",
  "key21": "3wHikyoGbYQhFCEfQQ5UG3yQgbyRbBA7xeH4wrrmpn96xuE92vQrv7SFDMnjQRku5iiMTXbvetjquirWC3jEww7E",
  "key22": "5GoPTaWFRQATkMbeoc2hto8v38bP3di5PJqeiYSpL1fQ485of99VT4x3x4timiqULppBpr4XvQRJ1yUjmKntdaGp",
  "key23": "iAztnm6X3BjRa32uMFphBJvBhv2t3QvAMoab3qBYQRaqt1LhNHgQPKLXCxr3xMv43DTaHngh6mPLXAfjJfbN7bU",
  "key24": "5Qmjmtw4VFZH8jwPGMuh6rDE2SFSTcULMrsVbLave7NDHZd2AXZaZrXB8tc6qzPpFL1ZtU5E47NANgLa9Tx2UwJ1",
  "key25": "4mQZsDUbRJEL5A2bbpPH4ETS3oF6yYVBWrSjw4T7jxGKmKDrkbvUPPa7DYCNKH9pb3gX3aRf3eCp7MeomQVUDxma",
  "key26": "4xpEPsRpr5rsqDXrNnRs1kFheMtp9K8yVfNHfbXis5k28w8R9687vJtJAeLyboQu4h7zMYZ6XnrgY6dqk7ejVacq",
  "key27": "3NFiFSMhngtA1QVYfyEFFXLX1zzYi6PrXsV2cKpfe35ErR7VcdBVCXte5iuxaHuNccCQwHpuDUX7GEiGMeo8hTac",
  "key28": "3cxX5LPNKRSXBHckpMoR7suvX3TBHZs9DtWnNLWmX1ycJibjCcAJxqjPrSVUGYmhHxhEapwjKZ62HuYm6SGJYaS8",
  "key29": "5iHrZeefaiMm39RxRpLLH7iRmScAZDdF4EHLxpxceKCm2its4H8fK8tFYvLSwzk5yShtBdAJCyjQz8SmQ9kCpjyy",
  "key30": "2wafrMaK4YaqPAHkGxQkDEpuP9g8vbJBxKJqrW8DpQAiXR2VBCEKjauCqE1ApzirpKj4JPwqwM1b15pLnsenbLm2",
  "key31": "2LnyVbDfSaeGXWuL6kJejfekiiQMpYM12oCKYgAN2NJcQtkXiXzH7AaVHoZ1kQVyncwDzHXy6qC7e1mva8fnogGi",
  "key32": "43UihapQVPxscgoBg5U8PddPdTcmUmjsYc7SKmJc6jbkMJp39Q67hYZ1pU5B8G2S2HFTe7922xpgJgEqdSSuWKEV",
  "key33": "4R7KZuKtd4gZbV8gQQcevjJX9WtyT2KQgA2ZWgvAoQjvPXPiSWPA5YaB9HgchoHLehC576LDmw9aSzR1jMmVCbSU",
  "key34": "o9CP4y8YFuEWgTNWPdwrn3qEJ8LHP2YxBSe4bBtxw51FDUDP2Lz7UBGBGFNfazXCdNvavGJbktV31CUJYBWdis3"
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
