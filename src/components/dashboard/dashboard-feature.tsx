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
    "5V3p6eZwffNJBqabBvDCWXkWXKsGz3haHQV3324cnjPxwArHyJEhrJN6xUaNGLJxfUDF4SrougKesL7oxf4qdkUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2M3NgmMUcfTTT9FSGL2n6gNDLe1DCsKhQ5YC3TAmJHvYAr8FaaEGA9fB6koFuVdAN5W2UQVirobUbWmhdswGmz",
  "key1": "4qngkzx8dvCRa8HgjMcNfn5R7oUMb8isCssUukpCjgqYpty2EUohZVmm7wetQm3QNmTtNqFzAFQJaYRuEk8h7gsR",
  "key2": "5yXNotjfseD2kvE5fPMeuNaSFAKFTz5XFjfMhPGGEbV1HecTCQAnvGfmW2B3bVYawgifhXWJy57kWLbQitFPwN18",
  "key3": "2RsTT98GpKpRXFsinsEhwLsWmwNfjFBiw79RTmMTm5AHF8CKfx9yvYXUVsmkYo349AwUoANNywdhPFKQq1tDP1qp",
  "key4": "4ba5masgWCbVVBP9FdRyVqqxzymrX18ug5e4TXYgmNkkBshY3StWkrq4rxRKJrGxyeuiAqjTB3wS9pxCXVmuSUKv",
  "key5": "3CGRto45wwh46DHTVwj3Lysxo9nuxFRqFm7GjgAywStGz4B6wjM79MJTPLmUiicy2WRKXPr6LBPiv6racV8vLQnM",
  "key6": "5PrAuhN26C2RuBmzUN4mhPyZFvGLtLUD1rzFfZiyGBW8C3D5fDZswTbJucLRSFeQN8tcpjL9mmFNMYNdJzYg1a9L",
  "key7": "2o5EJaBb8LYaeNPqjxCc5XKqHMm1kCrmktTg8Lmig7nWZJgXfZT5kEf3oHJjkCBAwWYqmFqbjEoAE5BuRTFYWH3z",
  "key8": "2A6aFREapWL4ksaRzDQzi6cfB5GeJJgy2Mt4WchB3DmDvfiQ1a3KQcCDU1bBvh3NcsnYtVMkHaqoFS3pG94KrmTS",
  "key9": "5GgrvsY3LXAAitt99CZvRueFuoSpFSQ5XX82GuX38xrTREDry4awBp7gXKsmD76GBah7xmQmuYh17KdmWdQ9Ersc",
  "key10": "53pYWfhxokQ2gjZHFWFDey3cCgmBpmkpi3jrpFwHrijUNusHanYSQM5AW7SKCtba2CEib8c2KAtTEgCW5C6KhNet",
  "key11": "2HzwK4ZoHYkPNJLuYrVH39RaNwSzk6TWo4zJ7Cfqo4QNVaMTkEJTPcQaBLFYmks3AKa1vV3Hp9CT1iBgWmCxGdiE",
  "key12": "4UHCQxJdDztCsGjbZhYpyv88kqcJ4eGr3nh3qMYLUERMKRTTYrDGBx2qWB7KHbqHV5igsPwPTvH7nvDxpqMxFTf7",
  "key13": "3eV3yqYLPDGHAjPz3fsTTkxh3WTUAnM3CYFQ2kTivKwsG9ZmK1UvLYvKgweyjWC83D3jcXfhjEDpvAtH9m5QrAiw",
  "key14": "kDkokA8kuwxBR5MjHSihPas4Z23tCWYJfP7SJYaAP5wtXteGuUxKto2Wfj6m4E86BwKWfF24o36cjsAJXAiyjTW",
  "key15": "QDvdakW9iqTm1ELPq91ZDtFBKK7sgF9h3mdQeoyGvZkDxDvA229eccMwG4pe1YPtWutaMecbPeBqWVqatiBAcX9",
  "key16": "SU4cDM7o3Rg1AiLjbrD1aYi3y2hpFXgKEcJXUZ3DDkwh7upDai1LBuxCG9kMkQUwjLs2YUGBzan1oR8msVyEypR",
  "key17": "5wEH56Anh96WifjsdDY2qt22ZLuK3mnTDR4e36U4PiQUb3oSZ5KNkkBwQyYY6555diJoaUn9qCQGmQdkWDfotAKf",
  "key18": "5grAfexotDy1LBMjRKaEiiH7sp5YqWZhtjhJFJHyWuKDbLa7wemuTVsvcSHCWfhuYHm2hPm7nGwW2tYhrhH3iibC",
  "key19": "rsgQPP9LE7yyGiQUPrjk3TCCUHmLSe4fZL7TGPRg86zFZLS49CJ1RoMMdFr7MzkMAW4dFXkqyvs53hDxcmoKyzD",
  "key20": "3FBXk4KUSjUTbj4dkzrJYDZ6FW5CykxZy7XkBK3sBtQWScp6Hvz5ZcsYTMWAxfDNz1dp6dBgQZgQhFdp2c7JZY2y",
  "key21": "2QRwBC3WpwmvmhpNi67w5xwtiAmv1qguq7km5ji6g9xv9fJpQijx3L69P6WZmMdmzvwmt4naoFJDJ4LAd2taY4Cv",
  "key22": "qYKYwAcmxw2bikkcRxFFXGVm8YySPTw1ShLPBydVqdLz6VqQEpUwrifGZUyLsd7BmMvQcUvcmpao786E61ick62",
  "key23": "F1dwpZ4xRpBzooBCB2HRvBzSffUpKTr3CH9HgdjcH1t7woL7BDidcDymSQpxHQnB9gWvRfWR93rdn3fXQpZd3Gp",
  "key24": "2gCEM2aLZYqVkg9PKhXb7Lf1wsuAiJ29Mw6P5qQsMMTPZkZs58APS4yGe47yRcPNCSZWefbcaQGFQbJQzbenJUrE",
  "key25": "4PUDcnDCLF6jt1ry1CPKYKapeS4UXAS38damQ6jEQhkSuqUvbToXea7Ano56vit5nN37Lj9HXAfMfKDX7Qrwm2Pk",
  "key26": "4TwtsTiUqz5nY4jroDMX1XYvoGxaL3hyEAQudCGz7hJaQSiHVx86Ji4V5tPjSaKNt1Kw42Uu573mKU2y9f3QWTta",
  "key27": "25RHyVn9r69dgMR7baTnnQWU7myb9Pn4JBLC8UNtvbaeRfnmKYA2sa943UomkFuKWRbUo7G4Js1p5fjsBaq5jWK1",
  "key28": "2BAGaTnNWzR8mDnQzpMBB2cLtbL296xH7xQbMGh2r1HqLXP2XVEupd2Dtzf1jhB4ScPDn3LNN4ST43Uj3kPoLB7b",
  "key29": "4NAZX5pt4sDaTWyRDetBsd5dXLs3xNRwdsF7sdaDTDJJBHatRvHNwgLsrQu5YZaZKnJ1PD5BZtBPmMoewv6R6yuc",
  "key30": "KX8BxtPCaUky4wphc7FD7CX6o6vKV8dPajvAJCVMon6MjznatamTuHTBSscKffn15fn7TWpKJd34wcJAPoqBVa6",
  "key31": "3Qw2TKybxdAmQrjVrNn8iLF1p1nAMGVsgu8w9YTbZRt9MTc8xeTX7PuXGjqhkjYeUAD1gVv4B4yzTVTsMs1yKGhd",
  "key32": "2ZYmkGwkvsLG9KzRJ5x4YWvFz5JAFmdiFubvyU3956pC1kg2mR48cfMNwTVNJV1XB5VFuz9Xn6zSgTkscMs1ybi5",
  "key33": "wFZMSaNnJqCdo5e5rpqYYAR6WrGSyDNaa5F4RuTipiVo29Y7V3iSg1pR4qoJht2FNX1oRJGk97rpPLdJMUABoDa",
  "key34": "4GcwvraWiM2radWrcZm1YzLnXwG82CMRS1c73sn96vg61AySmSK7hSnnRDufVhhVc7cfZBygA2RiYaNkK7bPkPQV",
  "key35": "52hWFTanTH8b7hZdaDgsB422UuacTUeLaD2eLFRixVmovcK98xXvEVHNr8DPa4AUNnfZxjFugu9Zx3fnq9XhviPh",
  "key36": "9ojQca7zdV6tDn2STN7Bjp14yGfwDBQfmQQYNfAMR2oQgTCViJH4S97N5N8JZjvp4EDuME8HENLrnebTxoQsyhq",
  "key37": "4vj1AsMwEDUUU2porHgVTTuZiUfV2t5CbjD8nz7wzUdrPRdKtdBKofUo4tVKGr3Dp2inbdUVkhowXbxWyVcFPbkn",
  "key38": "3yHnW6H1G35cx2tgHFpXCTtjmGXD3BvuarCq6ZB7dLKLpDMfZ4yKvvQDZPjERzHN4C26Si3nebM1GkvF5Q5hPHkL",
  "key39": "3uvrPJZcHttttq1NYM4UhRNa5diim6PHGchXUWnLCXYH1nnoGHFQcexRP9K3PVTZJ3hZ1fEcYqSD91RGXi9TJFWn",
  "key40": "5anwdWXSEX5pteDACxTc7BGeCv4dgyhxUptHg27fjK6HNic7kMmwooNYQNa2GjnuvqkLWXpWng5xefxH71EZL5hU",
  "key41": "5R9fB1kPtekawKQaQo84iUP84Vn637TzZi7mkjqThz5Y1hpNfVZ5mbiiuV6xoGHHXM1Cx33ZTELBYbMH1iAvgEQj",
  "key42": "52ujgbaeFa6RZQUPPgdr2NSmEkhNohmtkpMuRsa5Gv8PyrmMxFuwMVResbRzoCc9uxv2mBvU1jzutE25zzCVKjFk",
  "key43": "3FK8yopWdqVWKtc8pFjc2Yv3XeY4L18HfXUJFvGUmyn41tT3GRtouzNEXzahe7kphRvoEuoUHGHQM1YEPBVwKJum"
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
