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
    "38FuYBLvXanQo7LFV2zYBPoH8rUXpKEAz1Q7a7S9BLgGGG2QJESh4ez5Rr4SbFiPVfBML4KtPu2Xb9MmqeSDzZpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Km6TZwrxPqkq8xTRUnvRS6YoKwywmsAibghBWGeR13c7Pmeromgub9GNatWWLHtkVnhRtRSxT48XK35cVg6oAnQ",
  "key1": "3qtTFzL19sSEx8yupzxkvzynXdCEXPTpTdCiWwd86kMa1ap8FsSCsLPQuYE9xuKN5yU87E9cLMz1VtxRJGHhSV1e",
  "key2": "ZE5A6Bih8NByqAYGvCg93JL3Bp1zWbuWDjqAn3fA57uvN7UcDHyuqWwkuZd35r9eKpzRrHUcgJtjCtdSbvVFr1Z",
  "key3": "waD9yKrgb12TGGA9QZ7zhjLfqFqxsbw3yQHhgdqAHZZUqch3vWWhdWELBUsGfhw9GydUXfSg3JK7FhNjsMrMFo7",
  "key4": "5ottjzsFPYabdEeQ8SuNC3afJsfAN6GeSwEN1xJp69JmqkwNyDPqGRHeD2ASn2qtTPyWSUAYNS48GH6TvDq8a8SV",
  "key5": "3LKNpigbf2bUPdpZyzvzTzjcDJ2qJJLvxarqFgnjLidLjYHU1LCyKBMh1xPVgd14b6jVQTtxz2ub1QqHBamqM2ww",
  "key6": "2BHzkgtdczd9qnoRSzJAhBmdRq1GAfZyjfX2sBxZ9TTb4eh4eSjUp1oPwdGygpAvGg5vqBQetApsLDMFKq5vRTWH",
  "key7": "RcLPvYfBT9DFXdwNAZhqptsqgAJDSgNhvwnoa76K5hTracvYEeL7E5kijA5icDy7cvH6BtLgVXGHWRXSagXAZf1",
  "key8": "3C1FiAB75nhHYnkAs6WyqowfxAkoAcX6DhQzqwR6ur2B2ysKUoHpTiTxBh7sSYvMgWx8naLpUnPc55xoMisHADtw",
  "key9": "gcwm394AVYVhznxvPVJGEngFAnoYBGcYygrMihR4zzcdCNtbwJjFd7pz3zY7qaKoGfvvGJ73sq5ufkGYMgLacrL",
  "key10": "5UuhPxaXrpSgiK6JhQGk54hdMVhJhusauBLRrtsshgj46FJoWaijSG4obxVw5EJ4N4MQtfSiDVjDNRbT6YwKfVTc",
  "key11": "4Um7P8MpCYmkQkgCE6CxmPgVux7PAvLuKsGEeb1CmVHpCG3eaFoF4qa316Kvj7Jcett2Ectfuxxjm8WHnyzRdUUK",
  "key12": "5KqqmiMRcbGHJ8ozJnM6Y1ZY7sLEJU5JAomPhB1jAPutkQYLY94rcj8kBdmgLPcajbSL6643km4eGcb7KkZK8y5v",
  "key13": "UGbEMyg6h76Z33QMrqFMoHZZXyBWTpunUHXAgxVWjwCwAexkgMbKaUQ7TtKmsPB4H46ndgZeogEgyE3gFMF68aV",
  "key14": "2xc1UeS8MPyUPXH4PU5awCzsQv3EZWU1XjyfoYoMzihBJp4PrNqCKNFcGBhS93Xft1asrqLG1QZP9mY9VM8PEvy9",
  "key15": "caedeHYdPFxrSsnSCUQheiPAHj6rf5bgi6hVoSr5Yq5aZQQcjgWUF2wQ9m98qAuCqvorcuun28F8o9QpxKbhJ2k",
  "key16": "2ZPsWnmrV99wDJ5i8R8t5KEHtmJcfarswaLH19TghcjqCQDgsVFF6ev91YmNqm94xs6cPguCxc1b9of6ZJ3NoJRQ",
  "key17": "2FGJq4TAU1nziKyzidCVrWjJ2qkHMhb2hdWihjzELToT4wRksNKc3rqdVC5vbPDMHkPS6r2dThc4YFrpiaEA35u6",
  "key18": "U9cJqtaktbUjEna9XAcoBipApa3PdWu3Yoyor1xbgexxhVBWaLQNTAF9e5vGqN9Ni9EgBwsHBYpouzMkcexBSgw",
  "key19": "62XCjnuW73qBg1wcqa5uR9qD5RwUnFjPfYx51icfNyH38VqtSCvZzc2NbKriFr1JeJPDdMhEZmK6mbAmtXhdkmsR",
  "key20": "3U2YCznoDzGoe7nbhCFF5uCUFA8DUXLP1weVnWcixMfp47FqJReWoukgA5vDUqXRGncbSWKM7MjbnJBvUeQghbyq",
  "key21": "4P6shqKaLDXeTxPdt8GbTEueEms6Pos8wMq95odURtNYmFRKug4kyvigrVK1rEwUxi58vZwJX4XVhjBbbczw4Nkz",
  "key22": "2eCUgEsmkgLSr7fbiUZPRTWJ4ZQRZJF3CDhvC2iq673hzFCeCyb8wxSCa3VMUxRNNDK3Db9c2PvrYTgCKFTwVJon",
  "key23": "2p6C6RcMAfBzcNjVpGih6JQ3YoTFzBvamiu9diErfDqU9gmUAEKKJUfiGwhaUMt2GU5kSSKkFjosfpP2rS6iAxCk",
  "key24": "3Qytand9Azeyo4icLSnQQochNo3Qr74mZQPBnF4zHKSJPQpgP2fGEfSnY1czrh9cUavVGbYqCQW6jssHCybBuxPY",
  "key25": "4854oRz2aJ9rTV5p2JBG9xKDAzVYW7HCnEj7JzenAYenAJpKkZ6NiEsRAmaGHmRVNUrdujkbUVMpZhgFeCP2rytg",
  "key26": "2kJZjLvqHg5koRhRjLc2dAVCkKSRdPPGSKgBWSadSBNBsTjRUtXwVDNohu7yZU1r2cuqHQ2Q8aT9vFGu7zRzYDcp",
  "key27": "2KPFf97FSMXEg4TTBP2uCpyxeWg3i85M5fLNgnLPiJgAJRhnbEcjQZc9dWrxyyJqMcy5GbhgzuPQ9d65hG4Q4QQY",
  "key28": "2U8CEHpDtGDaPTb1tmbmnEnDs19vvMi1mPgiG6JzmdwhhAwG3LdMyhxwMUjDEGei8AxchbgFLKw2fz8LRox2fyHU"
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
