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
    "4eNsvxSmeupg1AmFBpSN1xNFgtFE5WcMHpdhe6HMr4SzfkbZsfu18Y6khprQEyd5VhptZ6aD9k6N43nLj9Uks618"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLYGm2twMetf4Q8GqQFdCGqKJj5ch1VKxY2JtQvA7RisS7s5P2UiUP4Fzcoa33gykUPfWg4wzpUwK5QaHL5jQA9",
  "key1": "4BfLoQTyhH94kmm3qA66RJ3mocT24JDkbYyr85V3hMBFVAqgCZzDwwMLzvwnUjY4PdfqZCT9etctVFPK5wYYrVz4",
  "key2": "56edMz7A6frdfACdbuo6bGSg7qQYBg46BVh5X3CfEZWhx9PWpMaJoGE2uq2oQedEVBcHangV43TLCay4Ja8e9FfY",
  "key3": "5vZqab6bWd2sprvW7JuwFPq8Uw9Guq2gvo4EhY8sA8w5ujngzi7zBjHuQPLkYpMX32egWSe6At3Xu8UqPTpawuJN",
  "key4": "2M7dsnzEKPLC5o7gjRevQkuBaS2QpdLJGxxujKFpB7ZjvG6hHCCaHRuV9FD87D6tPiS2QaQPMqVrCns3moDkVNvz",
  "key5": "wp25PRqMAPUqundhxDBWhMTg4kkGMvnodYXYFcmVp7s3vwm8PVWf4NzqdyniZD5RTRLx7XCGupQavPZBhFCpTUg",
  "key6": "4FCzTchwPLy2y4iTrr4mr6TYMWJhofXHe6k4Cf6GpprP9psaN1eaSagTjD3wzBx8FRPLyTTRG3pMHkssyXwDGrJa",
  "key7": "4m7j9DTr6AHsvXMVGcBxWU6CeCz45YGc9tuaju1BKgsXw27PkJUVMuFoQuWVXyHkCbi9D9L7bZWZejZCKnUTd6Pf",
  "key8": "2hexe4zdtPStFJa9vM5ay1CVWonBhBqHCoYEfg3yih6dVqkGT7masXNbo5o5JjxJeiPpEZ83CKbUGK4WHZMAQfuN",
  "key9": "4eG7LeTeSrB2YG27TbukSpccrbWgTG2p7r4YZsG6rTZUZvoZzxSvsYngeX1mVYTsyfyPJaP1mVa6rmhs3SWdwoGY",
  "key10": "51wFo2EzqJRfz6jetfCSX2sEUiCYQhj8ChUTXvugqaA3hahbymUzTaRTC2uafjbEjQ95F5sd7ohRrn7VXi6ZCyrQ",
  "key11": "5ycMmd4rSrXNw6by78pLJgwJxs5Ru841ygaeLWmcUBgAKb6ZUYLGWh15xEurRqzR6U5aLJmbNFLuBjoVj6DMEx5o",
  "key12": "2qcVjcipWRemmfnC4ZZgeu3xJ2aJRzFJGJFuoBnJkBeVEUcG4JFi4YagL5DP7hrM9amxQz4YyrV4dZge514XvEHw",
  "key13": "4kRAUsoAwzrkynHVJGcK2RRUHkyoigapq44ph52BCxscsrFpC3xRKGjrgVVjSvshVTEtaXLfsGW8NricDqoWoFNs",
  "key14": "4Hc5WH7h111uPtpXGyzUYJwfF2qB2n14wA9Adcfc7mkTomUfTq7qMAhA86DoKwkD4vfh3YLpRks9LPfbu24Yntkz",
  "key15": "4bU63WqWBZX1kQp4YpCYoZe6MXmoYZMhT22CA65qpGK5LkNJwLncoGWMKpMtVhtmgzp1W9WYM7p7uPJGLwNieWEE",
  "key16": "2PsnSEPN6GB5Hn14RgDG9Sf5zcyqJx6zW7NLBxzuuPr7QpTi6PnhA3fdpYFivhjTEvqYXmbEBD8K6b7oFdq2x5kU",
  "key17": "2nW5LQXTTup6TD8gFmvS6qmQiLE1J6yQzGwzLvsBu4zEinydPXV6iDQF8MT8CjmjRSc7VebxNzWa3BNxBR1HnpRo",
  "key18": "2ANJJ32ktcFu8ANCphXQCntbCwqphnqJz3ZoSspHbTZVZPoaBrEhurr8AE3t4NcuX583Nrnoq2F8yq1y64kba3ED",
  "key19": "5f3hUFik1kdLZVaJ2btybdfb5YW8WwpraHuRSPjvtFtrk2H79bpwnVXvNyG55Uo9GDCV8gA92XhHPcAmGFgqvJvX",
  "key20": "3kCZ9wKfa2AVckrG34ut5FuWXgMjxuCoWy9oGFio3o3obagfs3jcpSRqrJUmnYA8n114f2v9btKSdC7KVpjHeEZ1",
  "key21": "4ASS6apxxEQbdLqiW7PujPkBMUXsRaBqxQtFMXfUJsUTezSPH8meNaLAb48pcRFee32m1V16K1CNqhDW42jrMyDy",
  "key22": "3zTTNGhptVgy3puWMqZTnBBPrreAPNKJb1iEFKKfFQjH2wuSDGMGHAgLUeWpkjy7BHbD8nMcnN8R3ieb7ynH6uuY",
  "key23": "4JyTud2m7QHUDPdk53YZiQX3WnKZ5cFwsChcjr4wLypiFgCy3tipSgKx5bwM3kt3x6Jpzy1NJtJArCt2r5FruePa",
  "key24": "3wcXND1bsdhJRn5gdWrUuTeDhA5AoEpCmBy7CdQyzau4pcdykQzfhNHxNSfAfM2aC7TDcg3PySRTKkPe2Ryhi2TK",
  "key25": "2vyPRgr9s8MSQW3VdN3LSqeNvM1W4E15ViBJ3Cqbvnhm9Jn9rSiPfugXRDe5ppJuv1V5Mv9AS3yGWyquzPn1ahd5",
  "key26": "53HViwtosdifGuh6ZvkghYEb67QWzNZbWcKPAxvzg3LVhPfUYGkJDj9btHARaKvi9GY47wFW8nEPKz1APrF2M78K",
  "key27": "41WqsQEsuf58fBLNZ4AF5c96hdhfFN6zXRu8wh7iSfduJFsRzm1wEt4Jsoz9zP3n5KH9NapW7CFG93BzpHMNdAts",
  "key28": "126Qsq7hrJFmzcdEEbtZwjharwjT6ewozz3dnQJ6FH2Tax6nSzWoWXVP5bWVzyrGqKLrtjzRsCn4Cr47zr4wZKMD",
  "key29": "PUZA88MVefvQiXwfwNfR9u1doe7uUhMJbkiz7Cu7yDy8mZJBHTrsLbdua68AKXhzxGEuREmtPQ9kTVJRDS2j4Pw",
  "key30": "3cXFj3MUfusHMa9dtPSKratcfRWqk3phjJ4wMDQnavn5aYnH3TYyWxskEzG8yM1xHtepLfbYNMC9aCBSMBRTDj5d",
  "key31": "ErV4XfWJLY5usSX5umnZ6nJBrnXR4R134mBTSj2Ljo2mJYkZHDhCEfRTVxQoSUfqbXQeg6XJXS1FzD24rew8kYr",
  "key32": "3F5i3zxUwyuooNFp8Wvdj9Yf619sYpm43J8p8pAXmncAfnNyuNchLhiHx8dxtHBU72pNbSfNc5QcUaogtZRmLJ2f",
  "key33": "KUFZ1uvsPnsfrLD4MRi1KRgjXaVTvggbLyTX6ha7x4nmB65UpYiYuz1FKaCv83DZLAr8t8rUBkjLongyYGp43z5",
  "key34": "SP66YANdS1iCXvMkukZEnnxb45kyw7WS5YzrSzb47A5Nx18ztRWWBSgUdv7yJVCgbeJ2zF4JQ2awmHCs4RWYKtZ",
  "key35": "5VGwTbZq8RqX9jdhDvQkC5bXDT3LNHARkWxoTfrTE2nFVq81PEAc9B4Tvbdpn7sKXggMtTHwxZe2TYkavw7BBtgW",
  "key36": "3JXDiWNVrScAFi5mLDU9Cz94eR5b6zmXuszkhqSqQd1oT7qRnzobiZ4BetpwJLvgPDZbFVKCGYHAaoAcavwMKhy1",
  "key37": "53dyqtrmrsJ7QQNgbZAUtCNbVt8cUGYVMFiqWTrpS9ZYvPihBsrKe42z2o9UCneKfUG7tAz32Qjj5TR3GsL8Woo4"
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
