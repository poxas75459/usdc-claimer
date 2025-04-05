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
    "XdwcstZqmXjdrHFpXCc9aduvfPzvvYx81Y23H1y1hdrKW6SnXcum6hcFuYV1kkLM3fGnpCSTxJGAP6LSMwHsfXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ff5WXVEsouTNRyCbF5pphPoWVZVo2L63YYrk7LxXTBvuTs9VyUBNTinvtphtcy3aqCbFipRebYBQLxg4enBqezv",
  "key1": "2bxPpy2Xze9qF5gpWEpTQWBaW8gNuLSkjy3qbvuAFnSdEGMRxxVjij9GzaTGJqwqXU8ZDvySHxHJFHnnJD2xHLp6",
  "key2": "2t3k2N1v4Acy32dVtj433zSUrLjQzKC38YJZsWu9Pt947oiiSBMgMD9RDwRVTkgp6CGkn4ZnptZXXW3M5XWYtzvA",
  "key3": "4kbYC1SJ3Sm2jq6wsmxUxX3R1wNn82VX4KtDvxb8bU2LULru2XPc8koizF1GVkgfj8DxpFsBXzgp8E8BtGug9Txy",
  "key4": "3z1TEz3f2TxrfcZCuPvFUgTw8xLXK1LpP8o1c66Gn7ni3XRyovJDehhVbTUVMYNfeyKLGRuyiT9S1KjXMg3MfBVi",
  "key5": "sxJZiig5Xi4BzPqAgs4u5csGFsjHcRykCjchgbeaxdUk89hq9p3pEdwpSAfq6LpVJoYeY8bbNU9UX8vDooM2rmi",
  "key6": "5a5VCZHq3G5FWAPdGEZJM4o9hx9GhZ6tjCZiMtRTJvHeiJn7NPMWWC5NNjdhtJFrJcwUS47NWgevmRQ3qTCREMV6",
  "key7": "VXxVwPmM8rRubbH9Stq2DUKK8Pn5ZuTWkZsytLK4JS7TV77Rfs8r5QWTeuNVLLKJjcAUyQTPmy82TTnjFFJYSWe",
  "key8": "2HiSTMZjCPnVp4ByU59ftsZu8Mj48HVFcjnYoxNMpr22eXypGdc4ncSouSHRuHSnWH6kWRGh1D4fa7DkkZhdHqc7",
  "key9": "yCW2rANq22ahwPxVxrsaoEAbRDpQQchUnbDork26GR5KSbBSGVHWpDJerEqLLViiK512PcB472HhyxtjXJYweD6",
  "key10": "AsDzT84cs6ZL54sWDAYpHSAw2Z71Ex5RSsYd9KAAtjLLaCbV9mXMm7pqVgE3vbdvBbPx4xiKkf3KyRDsECFzjiS",
  "key11": "3GxsepWwjTezrRmTxZ4GrKWYM1Ttc8psREFXu5Z6cZVgJZ1WJ46A2VtwJgaPNMev6w1we2eiZKUdfrAM29p2xPWi",
  "key12": "5MqVWb5eQ4k5mYxBxjzBbsT3PZuAXdzZa3BAkWtjJrVa3pc2UedTjaqnXF3thykmifx6xzKToQYvSshRRB3rRHPZ",
  "key13": "32ZgkkBRoDZfKgU7eM4Cx5pvM3C1gf3sttp1p5y7MVrNCB3VXGuFk4quKokf3omqRL6HjMoB35GnXKErKMp7Rq6e",
  "key14": "4euL1ENGt8drqXQxLhTkvrKQ65bKpQU3TL3reqJHBdytBUxEb8SnvK33dXBY4z1vEPbh7VJ3Y8kvUeAyCMTACreC",
  "key15": "3WKhtxWJx6AcmB7pM1BADh9LimWzp8pXMHhZ7pTP3vA85cpPXNRMGtcZt7jS2msbCrA5xW9x8JFLeSu6yuidxbyY",
  "key16": "5YVgtNqq1ap4ZHfebks2bk8H6LYn94irf7MSihkjQ5u4QJzodRBGsGN2FkqZ6R1vEDoDD2TjCz4iN88pnrEwygNh",
  "key17": "4Adj37NpCnrwDpESU4TM7P2iDZ8M5Copem8VBK1AbQteAkfSYzuoim1bcaWGiam2uXAmy678v8NkstcQ3e95Kfhh",
  "key18": "2vY4Ms6wvPEcdVF6cfuVn4JrztmUuApEeFPygYBiNX3y7VZnV9rhrSBrSsEyyzNFhTDoH54FXB3F7gR5cQCPrcqQ",
  "key19": "5YLYDJupPR4qR7Zw1nu35irSFBYTpXdEoa5GAW26Hj3FeWfxDrhq4HaSLcaqeUEtMYmjjty9Yjh6otkLEgbY4WwS",
  "key20": "gZm8q2BjWpTc2Kd4kYPJNkwTw1myS4ThSahM9jV4z8D4osBp6RkvXurznpyk5WunhdWZcPEreFvnALSeC1a6YBz",
  "key21": "4H8C27PQnWazj52LPtN4FJ2uoPHEV2E6Mh3Q52Y8B91Usx1SXDxbLjEFRS7Sj5N3RJeTTVooyQaPD8sh4F6Hnssw",
  "key22": "4r7eWTPHgSx1ZnahRDp6TL2oFjBkrUWVVvDLN2KBoVbi6tMbVfHbYx2jAM48HjebWEjJGpVjCAmbTZN52ohXRqpC",
  "key23": "2vfVh8L92ac5htXMKTH6wEF21ozUg76E1jpwWFa6JtCtbRsXjWaHXkZXNXd1Eu5TuXS1Twz1DevgWsBBouMTbpg2",
  "key24": "4PQ2PrVTa3AZdQjLN94kEMnijEARxkVx2N5y1bqwuGiZp8bGK4pApjZmt1V8Kg5pKquxeDnmggfVVJGkjBS7ee5y",
  "key25": "5SMcMGjCCZGizT4wNRGZgcGcq18BFypMQURRAfnkUAuzXwm2gP8Xx6yrEhcBATrrmaAoQXzXn51GrnvCgYaZMzqY",
  "key26": "5jNXTYJz2ZiyeaJQsBrh6C9uTf97kUkteC5ZFG1bU2jf1KcenZDC6dPbEY6CCtAuapxCJvNZGNrguMJXAJfrgJg9",
  "key27": "3UAP3tMeQTWzVXnGkXYicrrVvcq8iFPtnzrqDWnUnxyh92dTzucbxJRvpASHb8EcENyHdp6X9CgcW136nr9dgtPj",
  "key28": "5vTjoWbtaKwDpn7XC2QupEU3BpJHLJK44ag2kqDnFpHpmQzXdkxgHCCkRMm84H2qb2QdwkfGLZc9PiegfDCGAELL",
  "key29": "2qptQP1bGhdMPTdhSsJofeAuTiiaYDM1pG8hnA9cFnbdg4qEisUsC9V5ecf8vNK9qNK4NdqEjgWRkDsCLmpL4BAp",
  "key30": "5e4pFwR5ZN7Ks2kqaiyR3WeyEKK7fFQup6GiXwxcZxsjnwuRdkxQRqj5GByFGtJ1hK9ehyJfV7jup6N7ZcfF4xiv",
  "key31": "t7pzrhqhtdvbrPm6U1jQ5W4H4Bc47xHmeXLZudXqjSNg1tBq77aLGTwQCXf7ka9G2EnHsPFQQ2m1Wqk2tSqAnXt",
  "key32": "HLnUDPfGtXDRZxBacjjjgr9baAeevTnBCMB7J9NeFMPMocMbdmQenuvi6vmKaYWQM6XRDPUSjF2ukSCgsnAZaC7",
  "key33": "4D5z7UqrbCuqqvrucB5oRMZKNXEe45yRsLVEsmGgk6sQ8zK7pdLopUXwTSw2uyRsCGfoWfxmEag8cJ5DL7NtNt5x",
  "key34": "4n4yckjU6jCgMNqRhcNzFmF8xiN9Cfr9oTKToyHxyy72rL3sRrgAHnvbL66N6H9DdF9yfg7LXMu91fwpp7duCRV8",
  "key35": "3TEpSG1avY3w7ZvbvUFRHBriULFuwsLJoDyt7rJZyQfRTTHvJJGFfcvGvefvEWv4snf5pt2w4izDB3nXpznPyuY8",
  "key36": "3tfWcZox1hH66Fj8rZS4M1vyX1D18LjuQcrFEvF9wM9YFRguF4zABpNdFWdoduubjVa4EkfJiNuZtPtrCTfat9KE",
  "key37": "58Yh79Uo2iHdfVBuyzsEZUjizdD36aewVdDTs3a9Tm8owVidBw9pecJEp6QcVVbM3YJZ8Uo3eDBEjJK6DAt9Js5v"
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
