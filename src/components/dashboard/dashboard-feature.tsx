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
    "38bfhrYJjvc2hUTtdXJ14kEHjz1L4HbDjbc2ouZT8gGoJafgu1w9mtcUa8KLsBLsmGFAaG4733qZNk7KFc8Xuup1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BfVz9cwFQBqNHeTB9CnHF4zaH6ERyKtP4ZKdyu5VUayS3rpfQyu2Lvb7rcj9ypn7L7X57Hcb5AFFG4Ujp8BygpL",
  "key1": "53Lqc1jq2iC1mF5dJm5UDyGK1XPDvKULgxfqCDkDCiA2yfuiLWBDUuLjjZAWf4AnE6MvMmgvjzeuMerVVJhKvBzr",
  "key2": "5nouZBcQWwNK4ufu658XxkfRKLrXF1gKYp2yDXeE44NwN16XjcSyrxrZ3ZqDTf7KioUrPGZ4A41pgUcV6NCc6JYx",
  "key3": "2sP7ZY1VrFkjm6pGeko6kN67YmMk85xzwTMwDPvQ5gpeoPmvyFozLUPdrtVkbwf8kdGhoMg7GWxQpi6gqEcSvB7e",
  "key4": "4FPS4XMwXzcwK94iRySoUpmXq4Uy99nFmUPpP2PXGN4YTk5BRkZGpkATzYX9Uj78nbw8SArupk2jfwgCTKnxJqtA",
  "key5": "2kGfJHfwf3dGnLC5emLtZuHQgyavbGjdjuj7jcQhkWhMz9aoDwF9CfHpqva2YpQ1CCYpxqn2dzFZYpWfFJ56Zh3o",
  "key6": "5njBCNszFZYMPpZ9aBNCiuBu6xbNq9QKCxZNtukuS5mvrVJ4NT4e6ErXaxeVEBZaYXAssBoc35vqy15VnjDLcxth",
  "key7": "4BPoHaXos2qWQR3wYsiNBgU3QNMnT8hQsgnB9DPPFY4ALUURmyYZcwGDvoHWfDjhbQfXpcheNb2rymPKKUNexPpH",
  "key8": "3T6tChkLnD9iHiJz4D6oSRh8Gph9X3unrxovUVUuQAZXRnCHDGmunDjkdBMQoT5bfMBXgPxzT7GJ19jH24JQe833",
  "key9": "4Js8TUEKff2mqxeqjEW4eJsEPL6ndkPEoynUPfZLZa26iQ2b4JmVq7xunqZEUb2fDbQTUyp8EMwqH1fEBXG8WkNe",
  "key10": "5mkRJGdiAPFmGPETuCVgPCXuXysbq5Sos6Hdjbqf5cUVb8DVcSMYgBSgCePay1mGdPx3qVcfUUVXv9ygsuprXtrf",
  "key11": "2iLJ8C6FMEfyrXQ3QjnxSDpf8HfJVPd7oJywqCe7g6SpfoWmEgEJZc65ovBMQzLfkJ3fcpyrt5CRJRPXfsALcg2p",
  "key12": "5VyLhbK68dubNHPjmQyuBesqWVXfcFq1FHYAQK1NdzxUzybCMebpignW8t4P2dACgfMSsZVYsBKMjMnUceWZkxj1",
  "key13": "44ai6GcQL5TwMPcFK29eGqXNjW922qHffWRqFz4meRMHPd3zRM2R6pAwCydm8PJcanxR5xMp5ih7qFe5rWNdxtHQ",
  "key14": "5mC3tQTNBSEFCvAjMLpsBpuvUyTzB6R2na7AwdABFNF9wQkCxJ6a5qvSVrXwRHFrYNCW2ENRMRCy2y3exKMhxMpL",
  "key15": "mFXZV8qVLpcaWCG52iev2wcTLS9rT4t8GWcY3vPgGJikFncgKPGBXn1LKvmasZfKbsCmv1DTWWCDzZ26nenJz4k",
  "key16": "yJBkwt4HSUNzptBtDhy7aFBTDHyy7dsPrLzwbcrVJWcCNM7AvNGXZaobMUt4rPHjKLFaAyVyDbHDe5mZK3Wo3bR",
  "key17": "EoisHAoT4SCAgzF4jhkzLgp3nP1ReyT7Go2BwUgKYUAMMGYtxxwUXTPax5C73dK9t6nocEcRBzem93BdTmPpDjE",
  "key18": "33LUNkS3PQmawVKUFnT5RNg9P75pDd93uyrkuYN4uE5Wzf7aDC4QJLspSGmMyjggYwU3KVQtyBb2T6QPPXmxNSNg",
  "key19": "2C2RYDg7LrsfSF4a5tTNXYN3cjjszRkeVYshzV3GZYurtrq6HD2aK5naTjnDhDKk3smQHpTLkFwAgXEmq7cfLDKf",
  "key20": "3DRzGCRvHWRdx8xEvwwjDyA9EpFsAWMvr24ZqcEQvtHKLxqLJdx9r2mo4ao2xDW8ajVcECP7GaWSBAW1Qrj8DcQy",
  "key21": "3LQpXiTYcX9ksHPasf6aH8nK1nAjEbrmF6ZokWx8qZPW7GFbM4GP1ajiPpotsteoLUaSo9tPTG3FXJn3a6NbnFfg",
  "key22": "5SEw32BhDsb44pDJVPxbXpRVLgNxJcrnhWVb5E6zEVp2fcGotbCkS2AnyEGocRuQPxQwdpTAXHEiuFVWtcmJierz",
  "key23": "59NsfxnsjpFnLLFTnFDFwyoAfVqD8HpDcp9fEbq6sPQgcKqr7mneEsQMCGq6SLedct9kQibdTXtcSkzU2RkQiWir",
  "key24": "32dYbRNwnvfttLE4hrcojc42AS7sHgAJSEqWxhXwXmoSuAUDoesxS5jJPnP8CGhbi368K34cjNh1rdMopP5SFmRD",
  "key25": "2S6ZWaDbYZQp1yKPtijBXsGY3WRVkrW7iRPfzHWaNkJVj2RkkDYsENXhpyFzCATcmrGDSiJ8j5kVFnWwaNrh4hJd",
  "key26": "4Xb3KfhZSV123Xnfz75DYdcLhwsQyoDJHkwDyQSgpf9TB8cyeZDkWZCha2kd5Th6Vpy9Kx6GxtoBbWcyta7aDD2Y",
  "key27": "5Jqxj4nj4LgQD3vFCWjz29aGN46UhMYH4ZV8tXZPgB8LvVr4GaGNvV5hirD5VybqKH9LS3qnbbmoNm9Ur2hHMtVh",
  "key28": "w8XqKTHAc1RaXt3q87do68cdxCPuboJx1bZP65w2GHuBpqeDicFjHfzyg2ionYaXQJgRxuCpNoYgmPewhNtpWVR",
  "key29": "4LNaYD21CGzDSNhteskSL4PbR5WFAtQG5rjc6v2ei2SEYXjY9eTxJmms4VWQDhCN6PABkCnU5AnWiKdfcc8RpDpc",
  "key30": "k6G2cjVh2nzW8sjikapYrjtbW8YdDFi6pLjnUzZL7n1kxTq8mHcsapMod1DFeWc1kU6ui7XrvGvMoe378cTbTcP",
  "key31": "2CA8mbkZns5PyUvMxUoVpS3dLPDVFq6ZVao5WRhNk4fiyswFZJEmu6obGg8S3vPLEkbL1H9mPk9BQ84TRaoR98Sm",
  "key32": "2bbAuRKreRLyK5Z9aBPaJtYgHvHHQdR2Bb5E4aTxJukq4uPYphixj6jESDbvofDC7iGkaEtmMXTC4Rds1vSn6pJa",
  "key33": "2zrMgdETGggyxFnRt83qddBdFp7Fc7LhjfLCo8mGc4w5LEGd9JfpKw8xWUqyjcyJP1idU6jQ4JyVXikXnxF2Ym6L"
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
