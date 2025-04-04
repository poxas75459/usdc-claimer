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
    "6B13yevpJjqLyLB6xHm9n3fGKezEX25c3Z2hyHQoe7uoZWU86LV7s7CovohPR3Suo4SxbZwTSGKiM22U83fCkAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtNCM7b2PjR9vWHp7LZF98nHejVLeK32Gcm4bGyHWnFXhWk5zjiPsEvJ1XsbnQBTBD3HaRPgVVGChJredbadXfh",
  "key1": "4d7w3KZNSQ1t3QRyNMHMyt6Tx4SB8fD2LDq8MFcPkvCVnAz6iWTaJSHXW2Pi26t1SHugAMVYefW9ZKaFWxxaDPqo",
  "key2": "4YwMGkfGcJp8Zv9Zhjh43arqbPwBLV7QSdVetmY9CksVW7b5PRim7BFUSq67SFc2LYTeSqDbDiE7z7o2hpc3qFS2",
  "key3": "37FTwhd9Vzvug6syQy4xH2BEeCkDaF15kLiqsfvkosgomaXDHxc7BSK3Tq5JBW4zF973htx4t4FLobTNGqsNZXbC",
  "key4": "3LGKzJMSUK81xSeFHeg3bbEXThfp797t5Z8XiBzSnbSqZZKwMHyd5Dj2QMkugG3Uhcsz5jE6HxZBWAYgNXPYU4us",
  "key5": "4aXhqBkEkWq6EkLt7tkY7fYKfLz8r653HXY2YfpKHaxMdFBdYPtaZeN4oeWH5M5e1DTtQLSqXx1GjB2wvGM7UoZ5",
  "key6": "2ZXzDxRkEh5UXun1vEeXwLyb5dzMEYvbzyyjLq9hSsRb82Fm9xKYHaFL1ecgrtUYfYK7B1JucwvCDYUwe4gKUuJT",
  "key7": "2wS4YibunCADCix8uUGZvxx1CmZpBqGZS57JoQ9vcij7o1c8skJgimSDG9ZQX2fadvqnUoPHq7MkMQ3eamSQfPZM",
  "key8": "29beJPU2q7WKKxwqGzrXczgL9RBQbhkAfeqhvZMLgciqeCH1m1CqHDShAduUK9kagApPLqSsbmduauYxKMMmF6mS",
  "key9": "2tZibX6Y2sHbnJ4bekCACLxMwz2nFJXc1iEQdb7RpQ7jzps1qUJsqs7mDUmk1Mh6eNCbGx5hjR74CZhrLYH5cMos",
  "key10": "4uCNwFCZzVQy7SxewRDS6QMRq2thFq9xV11MCi7AGXj78etRTSf3czJ3NdBixXp5aZDy5uhbcoNUK5jkyEZFcmiH",
  "key11": "2uT2E16bJ114orEXZHLeYfnGrWRH3F9NVHzUH9EJzvPCoEknw8HPeh8efj1U3Vpwgj8g3KXmSHtHkCsR9dWY5EVy",
  "key12": "5E3pPPy1j7jg6N9SK4XethYJ6euT4Rvzqp3GVwaBNgk3GBWcQ9ccJqpBKJguWFkAFJufjUtfrvkU2VfhLUYpfZTE",
  "key13": "2XMVTB2Y1XLZEkBjt9f6Vd6Q1LWgJ1fnjgftijWknC9BDo2K4EH7DbKpysvZgZv4w45hNKUzwaT6hMNChpHs58nf",
  "key14": "3DPBo9YHTrqnaaP1MDox2J9DFBbYUz2y6kqbd89RHVB67g4cfJijX9xTpPGV5spkyzEteSHfEXgBitxuUcHF3wSb",
  "key15": "3pF1LKNWd9Pw2huKzSMs6mngctqpC7GFPubdtgW4nk2yZVvQpGSJubV2vzmhEBYRtPQeSrmviADMifhJ4kCeSS1L",
  "key16": "3A5gVFFJkYMoU7PvBE6kb3netMfrgDEPirhyXJypBbCAWoLZzM2WvN1sHbi91HVBRXV9oh7dkdbbV65YV9VntYBx",
  "key17": "4UyVtsGrdcU8JcEkN4jZdp8cYe6yKL1yQdz7uzqrK7NwWY9Ziia4o5RRoVEmGArqKRRzzQw6pBTmqdWFWmHsjrBT",
  "key18": "49HRhuEYSDqbkoNuy7bmwyvi4msumsTqtTnd2DMxVWNmDtDLfefX2ZN1UhoA9auoKikwsiu82PKLEuvgcnwDcUxa",
  "key19": "3FGsrRJKzjRamvxrodeKyMspXVcLRkvKzxC4UnwpiXboNSkXbTGvr9nGUPJ7CtwHuqGU4ZjrnZ2EGpwCn8MxjNPh",
  "key20": "YafCFCxsvvf3Z5eaPMe2mzQzMqW734aAtdYVCyDQQQcLHRsWQAMQ5FukBFLy7c9JjqZyFAsV2GevjCfK5PTP3tS",
  "key21": "gJ2NwRSP25vE2Zu2q6Be1bPZn2i4Ju8DQECYJ11c9GS4YHgdho9d4yomCp1SqERRAaP4xGeRVh8GkEPqg2owH6v",
  "key22": "48XUnVysr9L1LQkzAtdYTntBygfxUPsB9nB55aYcbL5mtVEN3AqP4cmkkv9NfHmUUVYc2crf67HzNHkUZK5AY9pK",
  "key23": "2yeDXAFpap3CBZmnuFNuyHa5uKcFM4ptsCQfzWMFUjpZ4DynfRvS5RwwUxAnAJ5fDs58D8etLPdbAHTaARtnfPCq",
  "key24": "3xjKSE3BfCsfDELgwfMpz75VA9fdfy5fLowyqUB2eo228jCTm6UcMgDdNXouZaQgDfDDf2fjNAc37Q4Y5aUE2zBh",
  "key25": "4zgEqiWSfbdjtpyz8qipbe6fNkZmUwjzPZ3KR2vtEuuZN2iaGjy4PYGRy1NJZkmzvJETTpoWoBeyd2hpB7s3S1XY",
  "key26": "pVwcfTVxSb6gsTbCtFHki4c2FxNWvVokNySYAEcsHR2mNJWEzVB5CNQ4drYdt777PkjzohWJw1YZRnKzJQ5gqj5",
  "key27": "PWufpPbjPZww1Q56yfjF8YkMxSGuRXiSYcrchDAKNzvr8rgyojGeoyV1B6LetJhfr63VqiMXWKDwjTF6CsLSnPL",
  "key28": "LfpfwRjVAbwm8bxRceKYRscZGtctJijkjUwfF6xQ5Sdr5kAeLoBehi4FEWZWYyEjwizhDjKKHFnMPHrHdDSUBPd",
  "key29": "3321yFAhritGfC1FCsY4oYuathH5segfZHPPDdFWhAtzVdEgysWwLpSV2hoK6WwYNP1KjU3ni3nJADBSH3j8osKd",
  "key30": "2KVvowoXpaKbHaMC7y9jhhPu3tm2g9miSG9pDU59e6o4xrqzQ19ectwt3kGCovH6i8WMGf2cK3dCvJ2bd13Rsyyw",
  "key31": "4Qm97TRZZqM2fzz5W4iYwGn1aWs1Y8QMRCyQHwggfAHkvM5nbsL7Zmds8fg8t3zgAt8J4UbhoCVftpzNB7G2Yia4",
  "key32": "2tnVCdmJEGbckEvtFM3XTQBtjNgrtSNShd3WX3maJzN4SLfH6NYL2h7ezd5S488ZiG6SrHopj3KcqCPV2z1o6oZe",
  "key33": "47U7BYiXPH9DYqV2N48Sd2g2Sp8uBmdBxCXMkuwhmSkcbQK4Sw4nGJoiPQqAoJRPCfp4iU8MxVayu7YBt4z8tf3M",
  "key34": "5mY4GiToLafcbHasD6tZVmiNCqkVcWdTcF9eQ7iqpo8q3UK4UufTWkUr6mbHYCMvLMAxrTZLdNJJhMB15S7CqB9g",
  "key35": "9A3NjgBsjYjX7FxcHSDnFH5xodFYhZVV8xfqcXLopRU1Ymf8N9Fmmn4WAFqUSM7x36jwgmNR8MLX19gkyA1yiWs",
  "key36": "5oTjhKZescKYAssTFqqa7YyLo4gy8WgDk59uFCh5GzVCHKBzRsABJX3ej6PE1xiPFTpqhNWVAngKQaELYDMoFdwp",
  "key37": "2oXXSAupWb6NbYsHDCyz9w4JaJAEg4PWswGSSEjfFqz1Ns9LDbDEFu5sdV7Gh8fDYiuEbKZLKNSMWnLFXRLnAnyH",
  "key38": "5bDvYRtbNL1pBKwb2TnVbHMmnxn1LZQsaZ5F6nEBkNkAdnZycr2JbWjjq6tRnhtGLQSSqkGaDCNzmfwubrx7cc7P",
  "key39": "37kSkRaCHfxpJWzCmiL7m7aSjsZwPLaLDjmRFZdNDDuvsTH6WTZWkVt8H2GiADieCyQnMmv9GZMJ1d6chpXbdpC2"
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
