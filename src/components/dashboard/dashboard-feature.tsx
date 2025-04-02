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
    "5h6a1m15TjkWZ4kCchYcUsyKUqZtWAR3JizdY2YHbb68P5brHsqxoCMvsdAvaeTmgbWC81A3eVPdJZ1WDV1CpJXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FsMQgFcXtbw13XFxwjzGfcrQQhsRmsfwwsVZKUkJqa5HTUaKxaedqbRCp229pP2b6JZ1UjFNfho2kyiZP4bURyF",
  "key1": "5ZV1H7W5SDdrdgymMtAfjGSuJmDmeQe2LdNfZCAEHArvgcztoCpLzzxPsVqkVxRYSahF9F1wFrMNu2UvmLBWdvo9",
  "key2": "4iU42mskcLjf4mZWYHdB1Ch3cp8i6PS9TaQ7127TJA9qGaxy7Fo6CKSEgiXsn8dwKoNrEAFmFs8fi3LngVCVb77p",
  "key3": "3bZvbfjdHKJhN2hAP7At5Dsmc4JDhfadZSo2V2cc5VAjXqoPFTcAouFzbjUFt4Cvp3FRAyXNqTxs1DJ5qZNKYLJX",
  "key4": "2NEGwap7n4B4vW1FPEcX1pyXKi1pDs56zCmzZNW6JBcCR6jzCtc17UrhK7dBEKt7vZZwQrZVcSnfNGjmfEc4K52p",
  "key5": "2eW88kxEu7hsRiaMVKW21d2J81w1AJMS2j8Xa8NfqEKSkeHNVQMc2NJfg13LpHDpyiQisMwJvsS64E2j54G74BQg",
  "key6": "yFjP87i5Peh2DDtTUScGTxnMC82RpX1QKdjbJFCbtfwEsDpcmMkhHkzQpZJZmEVqpYo89LGY6iV3QRvkWUqgjob",
  "key7": "3632qVfieLWwNF14H5t8zGunbDvkjhGpht3B4S6YxMvLrfef7s2xGEUUye8kaM9b5mggCTQziZmr1Pyzapsp3vMK",
  "key8": "3ksFYgr8ovzeFtQqg7Yf1jbJ9v5B87kmgGFurGkxv6ZjAC9fcZYCY8QGeYmTddaqbtgpyM2d4sXNDhhBWLQ4PSSr",
  "key9": "3cLusMQLTJ8ZuUdbpcWF3gMT1S5iEKZcgmBTrpMEfgYZ231jGRypzU8kroo7RPhZCfooX1ga6hx9zfMrMoehZwyd",
  "key10": "3hhpnupwDf9VJN1WfN1Ga4ihrmbb7BoEJdfExF8hsrJErgCfxNdxigoBejNoQnBaSYLSnGCFwY2ew1JrYjxxpnL",
  "key11": "62obUkPJ4e6iUAYYcXTkf4UWt54DVkofZMvqTUJPbktvJWSu19pk9BboLfvsvFfiCL85ucWuJGxgWUtmd9mw9C6j",
  "key12": "4LoH25mjnHJF6qxZBdNMZYL8P5zv8gzej3Bs9u53a7ZycW15PupY2eEwydqFcfh8xEuEeZpfWURPYtY2cbS5mHy1",
  "key13": "4uvQAhe7XMbHrLeDyhLCYjtfSf9Fqx5MskETjokgwYi3LysQ19qNLEcoWig4igN79U7DxqicUfP8zRCBtEEn7fkE",
  "key14": "FKjSnGigf9H8SL2P6J6yYEYrGz6XCzga8KhUnsTkxTLHzfY1VcAi1tXSodWPy1RNRLSD1knteKeSBW9UvV9oo8y",
  "key15": "5HWMFHEejiGSrRPqv8eZRgfMqEdi1wWp9VRBcVzip17t9Ndere1wGo4ChV82xuPbENapnm15iZAJ61xXq2R2MuJ",
  "key16": "3fNyBXE54qa3GdFCeJRMLmi8SHfiX5TWsycsmTWGpXYZVtJPPCBnDE9dTnmWNe1nKnay7j1ArsSwtdd7pgDD74QH",
  "key17": "hB13B5Hgq1KVK8WwJ2t7ecTbmwfA4Rvxve1nWeXqZhSCDM19ehnjSJMr1GkxwQkMFm3MnVGqg6oNp7cRPBVtXeW",
  "key18": "45efesKCZh2VLgBKcqsTwQfRYbhjiEDe4kFbCjuRN3iRwmTtzTwjCMCnAMg8QK7m8XQhJTKhf92ujTjDZhETufy1",
  "key19": "4vBBCTG3Ky5EuPwpzh75UHUAQpq7v85LMyzEbcfQijTpVcTWLGVCWviQHrRT2iAG9BKGEcHdX1buX1zsFMrzcNKr",
  "key20": "63H973XEavcpiJ75Yzx5yf1zWXdCcCLTvoiXHdsfzP8iyNSEK6Re3BJHrGGnPqW4V6ciTKK5f7mBXe3sG43eFMD3",
  "key21": "4fAVW1No6Gn637fpf7Ycy8cYJ4DoUJo4PJUPQCson3vq81zLLBXYB42YysM5kmYPFvKCEDY88habDu7CDp3cNaSr",
  "key22": "3H556Z4uX2oR8TKqAcCMQ4bTT5ggGqe2UfqaWD2TADxgJVsN58Dh9ByPdbeRQSBAxekah5bP31MaqmTysG792NJB",
  "key23": "2kcUfGoG6EqFsFU6KWS3QXMXf1tVtP3QwaUMq9zsxWgNxVbLr4iWcSxZuYWufNbUVduEyiR63ZbfYAGuTWC1v1NT",
  "key24": "3SDb9612SdnHQwkmjKgF76vH3jKwedPQ8EC8cawYxf3prFhcBUHzhd8YeXxpFnv5eo9MpQe8RVh4so9WuComrxEv",
  "key25": "3riYqQwXbVzMVDjFpJJ2HDTRMhqNmkWDYL1UxQAYaJnbN4buKBDzph5mgLNDZ62LetDRsY4aAXTa4WiK738a8Bjr",
  "key26": "3Wuh2YtMtBpZUgtaCHZJ3mQo8c8f5zrttxCy95YTuQovE767Sz6Lq64MMaQXFUyHYohtZ4Sqfa96tTWMoZRmDn6z",
  "key27": "4JT4rWpXRcC7MLB1p6KzTFgPugm7LYBaHcw8fHzMKJcL6VNcMWz4rqCr6NMiohFqsYeJPY4RjuNnVYks9KWGxBYo",
  "key28": "2SMn89323xzCdWZx5djS3wJjnChNWdUC2Mz1cdVd7QdNxQxk1J6HJKMrSMBSLXf2MGDQHuzokAgyqsgbbqb3uozf",
  "key29": "5FQgnbiwyCSSvyZ8cyeUAEE1wU5EPPoVYdD9Zv7TEdqfvBGp38uJz2CMwjGKsUiHfxSXPadw4QTw3nB28QSpbBhZ",
  "key30": "2SbiiJdp59goNcJmNXmQ75bM4nSTF4vbBzFyqLGL7vCVYaPLvWB8tzYEoEyZy6eeJUnT7sGx8Lhrx9T64vMNSz6J",
  "key31": "2rypdjJz4XFfvg8NqdSXJKUyMN4f46JLggNaRTgfNEUsJt7nS3nq8RSJCBvd4caDYViGYhsMWDaQoBqP19tnyCDD",
  "key32": "4U3Hr1p5KFLuqSrC1YbWc9w4QVNttp1Hh2cjoeBUDJYXNFeF9gnEgmbWcuHhDmWjc4scUtJcTeWYXjLXHyPHZ4vH",
  "key33": "2eiAJzLW8TcezzYwHePqFWCdnZY5sGo7kocr9iNv65WuZeoUGJMXdTNj9o5RJ3qPuBqVby92SBi2sMYqwh8gDdWi",
  "key34": "5Dxa8X5xEFRtWFKn1vuwrro64YTgZykUnf4XK5QKGsAKBkRtarZ2TafJPQh2KyvffpKr9YGjBNB5m1d2f4MC2JiQ"
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
