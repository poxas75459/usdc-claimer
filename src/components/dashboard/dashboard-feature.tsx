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
    "2BneA7ZPGwS7KPWMdKTHX6NLUmrpL6pTozR1y4RWgYDfHUNkQbVU6voDgRMh3wArRqWEpFwKvkzkswX8C4tLbo9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ig31qmV6B9ZJjVgoZ5Uk6HmiQcLtTcXpiW7wPfd5rSj5ri9r3VKC3Mf8iPA2y6eiawYdJma7WNH2pgR3fqznRLt",
  "key1": "4NuXHuz1YR8fG816vPGXLwLj5qbqBH87Y8NYZksT1edUBNYfrAFWGzPGrmAKwMqvxTSh4ZXWw7BDM61akFb1FqC",
  "key2": "4nTRLTAXY1Q7jpCHAT2WYu77uSfFcy2zseLvQBs2batMmgbTNd2wqNauqs7JnppC6tCnbb5Pni5QvKiBevsDzaji",
  "key3": "4Un1YGu1GG58Ep31yDbDN9R6oPX72WcQdkiSWctCo856DYdsHzyswpaNQxfpAFpRQtMPMeAZDW6kdY3FThMBuz8w",
  "key4": "5TxQh6sqJJxLxULRajeLmd7QP4Y1aouhWYEf6em68Tm5QK8bjiyXDhu21h9hrTbJa9n6cPNvfbhPVtMjsF7Wo8i1",
  "key5": "45MHqasxbSEpdvUbS3MidNU2ssPsByiRPkhmxwZpapZEMfk5btfX9M6RU2XdcTCs8BioP56nD9GWXUzDPqxKFLi7",
  "key6": "63uFDmwQ7nUoDi1wGLDwSfV2s57RsrHKbWkJ3hWBKLQr84zZJ9JqNKbg32uuHrFHfqkTXEVd3eHpBzoNYoFco3fL",
  "key7": "53Km7oXRVXBNj64UaJyxPGznA1TUbuDMQ8rUmPRtNdLyKghjxGCqUdkCXEQKBEmFvPKPnwaAdwHHAG81bG7FZS2",
  "key8": "2QFYcgB3VucrTQpimt1UFSEnUTycue4J289SP5PPTTf8Ldf42BY3xFeas3wARk9jCimV6X4GCu3pJwovE8SCWv68",
  "key9": "2GXUCdwBc9xuX8EKZXZxdNT7xM7NdegVJufs384GEScpDPX8SFfrT2vpRdvvPCh8NzXWojxtM5URYph6cRdbjXpj",
  "key10": "W8JNWQPauM6Q2oA8axX78AZddzLURfMG94DAveN2CqzqPiLLDmn3DsNnUcDnSscGCw1CpaS7YrA6JU8sNFN38De",
  "key11": "2dMRZpaCV4ZYeTxjxgxVXLuXRDrBBuQCkWLsMbU1U1zyj7GgV3kurFoEFte5Wk9kKwNu47zBmdB3hE3q9nG9Qg6y",
  "key12": "27zCNNqzqQEN7rm3rifuXWK4Hs1emWneU1KLajtV7dniatLCZCec8EeBTtrTxWA4a68qgQQK3hvMWgKwJwswVcya",
  "key13": "LqmBPXv9fDN3xiTnan2TrC9h5nSh79MX94h3eivfLMr6eAX3qV2cfpyvqSgJp22FJYn294zccfEFYUnMrgzgQuc",
  "key14": "61dw4RWVhmaF5wmSWXKSHeVCqCRPA2TERVKK7vyctNVZQA4hy5zRBUFJLHrbUDiHFadhCu2fARv4tZTxbC4G1e3y",
  "key15": "3ZDAgEU3WtZc1YHz59958zXkaVxcZddjPVK2azkygt4xYqZTMRDbhwboHzp5TTSPEwpAKaNNJwKQ9UWFAb7z4U9t",
  "key16": "23tVydLLuZ3f2nJCAjiSzRTftQcReNy3nUov2hSganSfr4NUfQ4Y1vpe8M5Mf25MNfRzQSEDTsp3QShyHDFpKnKY",
  "key17": "3BtzNQSgjkphBn3ZPxMa8h9FLiVpSXU2YaGjxZRGFjsHErZEYKiJp5xziPmrzJmpNBQ68deW72NYULbCtNzCoPPb",
  "key18": "4AqmUzNPkrTfTZt83z4FhmhjRz1eyyLJNjckLiMtxeo6y1XYvYLk2yaMwnyNihyubS5V5vKjpamvvzi4Bu1DcftV",
  "key19": "3AqTwxkzAX89P7GAyoqCxbL3NtQN9Lv2EpM6keuTN2vk3MZ1x8jukcmMYEdUgeGYH4djg5d9nVquvhyeMe5xS7cw",
  "key20": "5tb9DY3P54cxEFduN2HQseiyWy2F3Hr7sZG49AecTeNM43attVMk4M5n4nj6tx6xeMUSYYUhP9qUy46c6HSR4omr",
  "key21": "35Qkh2BUGEGsKTCbySv4jp9xaHRJmgtsSFQ4mFZhUKKpyou4aaia3s8xV8cHh2pyrdnATkD4RRzFqUEdt6zwiv2A",
  "key22": "3ePf1HaDwdM3gJqK2VmR8QLkTm8tpKfkWB87GEU4UkTrnUGuUrPWLBhotnYbkZAXQkSYTo64QZMN8sEnNoa6ZDjk",
  "key23": "3yoqT2BxvXmXkoP3oGbAP1LnYdeXJK82LfNqAUAasyva1Y2wTNkgeZf2wmZusJbk9TqyvhXWFYtQ6aVa2adUzaHW",
  "key24": "55AGn5sCBSv6rmtpsbgw4WqS8drjWJKyXxh3CoxtoPcS4oU6Ht5jx4waHQRbtj64HKyRQAoppxCJjupLmDiDS63H",
  "key25": "3pHUfcGrb63aTQ4x8pfn5nUczWbj7p1u6GK3QFF6pDjpMLYx7MwfJN6HFfB1jNTqtHc4zrjdSnGJy7LtEWmNj2H6",
  "key26": "44NQZ5zHcDtKNWtP6v73m2BGabRkmQrg6u2sdPt2iRbaAP2DYckGvsz65HCtAVJa1g5CCnXDmcAwYJkBL9u3bkBV",
  "key27": "4aC2bGf3ufMQUULHYytToWgLo1c9dU3ngksvY2CQ1zfUKVWsgU4gAiBknFDe5Vrf1EfJgo2jhe6rSLqWBdfABJPZ"
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
