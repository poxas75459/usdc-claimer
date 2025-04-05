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
    "5r6mxPCmPxEtX55bacSn6zb3oGLFxkEy6qb44nLS6yjQKp9HzyGBPogFJhFgfvcRgAUdTSb9qMnLeFb7kiPtCARp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENsxKyCknYxTJzpSvW5vz8okgLEaAjkTkG4keJA1DSfLQgu6mQxFMTgsdCvTgpmvgn9KdEmytFVnjMciAYYhS1b",
  "key1": "5Fn9tCTvSKK7zk2oBc61tYUKNn6pRSQzqg4r5ZyCjZEovtbYSSUpaRFu8TAvVFD8CjFUgJcfzHX1VeQPz5C756V",
  "key2": "2UqSLeEie8ecQaqdrXX3mf1zCeyaQ77nPe8NiSHHkYvr7aHM5PDaJfinKY4XveVJnjzVBFeREobYCSTTsYUa7gJZ",
  "key3": "2PekCj15T7FVVx6FdiXtGSwTk5B5cP9BVAQf3SfQgGjyAZuzwy422VUHQ2guKBPnomEVzFKG7nwdurA8e3D9rHmu",
  "key4": "2GKP3kSvdZnDWQ6fp3dFK7rftd18iWz2p8q7ZPdKWSaVuHWYyjzoJ8cUuL4ZDN5SYVtArWpNKuLcPSqEqaTPVjHK",
  "key5": "51VQaT3t29pz6dKEy6eRVFAMavCUvf9CpvzPSR7kYcBFqTp8sXREMvAZoNwAYy1jCDzqWbDcoM7vZ2yZj3gyMZLv",
  "key6": "3c2gwXNCXPP4KGEzQVwew3rWZDt4MzfVpoU83osaXkXe8FugTG9m5E2WCABSR3b8ozr4q7yiBxypmKJaQjdJ8ajP",
  "key7": "3essD8pxhUSFtUk3QRvVntAixo83TrDPm2C6o34eqC7m1FaUbAXucijoBCuPeAyffxUUwGywdVZtsCsM6CkaggZF",
  "key8": "3TxDjdEvZ2mzySrRyXdS5ma3LYrWPBQoX8Hp9HhvG3cGErFnQsi2rsoqGGnTBu2sSFwhgnSxoAiu2468BfxwDZg2",
  "key9": "67qwNtqGYNFFkFEGWWzejJ3CenynPxTP6ErGz6KWnVCcm2zre2NYYGAo6iSWsgLZw1L7BAAn1Lut9gEnRQNReAji",
  "key10": "5AHMCSTRoZhDucHnmCZguMvqVn5UhABwgurnq4rz5yoQgP7HeE9yE4z8hekzzpL7oMxQuN4dHE2X8WjpJ3nzC4sd",
  "key11": "4LKHahrKsewcutcochaWvCjbwUJjXZtuHN8Xi1AnbjQCFXa4b5orE3dTNeDzoXcRnVSYuDMrLt75rv9hV1kbWbrn",
  "key12": "3TQf8iFo2mSvbRoiTvLmhqnzV9eRF85fTSZJLkSwPA197eoekv7ggxLyN14NRdVvriFRMcZhVHJNBweDtZkAVveR",
  "key13": "67djuWQzVz4JZxv5qbFEP1zmTtcMhZU5Luce6hwWygejn3cRkPzh2B7cMon53xhY8WDmLEW1rtSsMBcfCQMhKagh",
  "key14": "4UAhWRHvxjnND6aZYzNfTQ6HuExtFVJ8gktFVvWhADE1GgKunhmKZL4pmfk5ukjrBCbUCeJXsXvg996GmnDvjGyn",
  "key15": "5hHsYh7VzFNPZrgCjh2STzJRFdXEUZhMckErgzoKP2TfXR4dNzN91oXqEUd8UH4cym8mhuimqxQaWLVaQUeuvVdF",
  "key16": "5QxSqQGAz8XrxZAwBhTU92Q3hG2tmq3QTZEqQcka3tE8nLJEmWho3KJcrMESPrJ6YKer3NaPeVP1aG9yTsomGitg",
  "key17": "2YYbqMcwEu3a4qDZCT9tRm2NrirNQBZfmG9BmJY6yA9GkgFxunrnbxDpeTMMqhZd3zNXpJsCMbitoyKnDyLeTtKh",
  "key18": "o4aCHkL8RFqxoeEDs2j6dJhv5HrwzfLiXiEP6M6cGuur56SMFP9QZu6Fc5jeMJPShLvCLLg26EVeQpq79pFxEdA",
  "key19": "3oBJ8nmzL3EnjyvvERhoBayMqfncjndGnFV73T8N2w9rBB2F4rgihGDezA6MH4vNzaUUf8Ghjw2PbuhLHC8mstSm",
  "key20": "4uNHhtiR7711WzpRMXpS5sr886CcBUHrnfSv1JZKZQSEYsen7bs5vbW385Hyfz2yMVnGMTGcdSSp5z41jAcTxcJK",
  "key21": "36h8SdnEne1UKJV8hq5V4jqZr4dYq8F6r5J2UzgNbZa4p2KzV6fforrezvCHT5Q78mdAwWw6fG5CDhif5YdcG6Ac",
  "key22": "45pokxHBri4n2cjVna3UiJ8yuUyMWXaVueRnSERx7aiy7v5hWUaLvvvcKPbPuRfhucatevB5hYkvaQvy7qBuBBNq",
  "key23": "4qFAvKuaYryBqZ8enFydpHVpxfFJNZiBNpYHAn2fvb8KpPc4JXHmb3fUkAKxMm5wRWTuUda2LumMBfZ6dmeRD5yg",
  "key24": "ra32x8CHqhtJ11b6qfxtqrYvkCuRphbQaKAngRYqKKLdU4XuQfd7fdiBmtXwmFUY7pZRfFva53xwjwYZHmwBfCw",
  "key25": "3dyv3KNTborbfR9FCU9Gi2GmP7YjQoYtMWu1aX8vdZ1HAYhUpAfFM2mjCLwYq3WetGGNgdwjLXsodVGp1Eu7Ww9v",
  "key26": "36Yt1nZdH8jTByqdNRLtuNphjuTyDu8o8rBToKXUtm2FjFaAXW9UBFnksfcnrEpku45J263DbY2PwdxuY2MDLbSx",
  "key27": "28X5qzgsUyLiog6PdkDyD1Lk7z3Y1YLkWDjAvXhSYxByXKioQzay4USXGQ4fDVGYSBTPkN9E3JeWuJK8cfFwUTC5",
  "key28": "67JTNJkXpycCes54ryR87QCma6yKuKSR2W6dcxovjvGLDwdDjXmdDUM6EKfoqeEof8hPokrEVYEviWmuiaVhE7r6",
  "key29": "RDMh4fsHrX56s6d3BUGHWCcbnQfznV7uBqqotkqwBEf4UuDfUsdPHWGywPtnQXHyp3w6SjU5hSP1JcU1FaLNcyE",
  "key30": "5eFjf6tDTKhM5fLjq8NbwQnZFQEkojW2QDKcF8NjCngzZKzuXsjCcicQRDogc6tjZfgY37h79Zyu8njjgm8CoW7E",
  "key31": "4iYrg3bVuPyUpgxGavGNjTdHVXZfHCQa26aNYsTqHCiJCzcQbHwfpdWYKKmWBH1EaZvakiutcBHaJJpGQs7h1UUK",
  "key32": "ox7GAMHCYXWy194Eis9ZqBQ7CXLFKRtd5qQzfBifPDrRKJ6gvyzeL3fyRb6rgMa1RMavtWGeo92imoHv12syEYB",
  "key33": "3n7vw8nFuc2wqs6gwR9m44Vu5VF6w6BhsxepLYLKuD4NQ2cSeE7FL85G5TkhqCHsZ246Ara1SVhRAAYvKMUahQA",
  "key34": "5SaDULsKcnURNtiD9DiyWQzpJtPbxcEjttbsbjacxxCSDw55Ew2eoTcJWm9gcApzWhuzsuvkKJU5CaT3JsXS4od",
  "key35": "3cUakikkgDAS8Eqehx8UVcokAwfLvyogAe27dw5jMmPTQZ3tSKoNCGgwuzB5AB4P18reo5iMJVijTq9xfeKQ7cBR",
  "key36": "3YrnnUFEjsExeLu34bFJqvLoEpk48QbCtB11b3VFsKXD3WyLuV3rVU6zjsU2iHRsbt2BubaZqSL8dGZinfMp9YJs"
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
