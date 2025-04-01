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
    "3PKb3jPC5ecuMA76r1QXRbszuWHJdgZQ2QQYMDkKFRLFTA19Vx3Z8t82qvhkYCniaehCeo6UawKBg8RKMRdidrEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h92wpNQqKMkdeCCbA4oVzW9zJcdFTYa9f5YACeoCYRDPPTCF5ZDh174pGD1zRJJEBBPirEgJqCZHFcne4hAHRFm",
  "key1": "qBhtdUnycpwEh9hKVBEBUYBJsqywLaBaufZqUCsLvWcDnX45PrefPUuu5LFB29CGnrp28MqymPowrf8LRJZ8iZ8",
  "key2": "5JGDuxE5kDvUNpRagnH8tovqzvW2S5jBRuWrGL3rYweJWFAgAvbws1YTFJweJiPC86iwixNRUHqTQYLqcs6ZdEcV",
  "key3": "2UcqANNMQ43gMZsvEtoK8wZcnyweLL3n4Cq3KjL511bSBewfAX1891YrG6B6AE4N9cnrr3eq18xqSoKkFckZKtZz",
  "key4": "4BLBpCKubf5JKB8WTunrxvigAhNqGP2Ntw2jgCjqFxcReUeMZT6WTkkadzYhtRPPVufyEzghxS4mWYkXVnNmkW5n",
  "key5": "2eBq9Lwt8ZYg8vHhKXKEHpFMRpPbdhjnjRwkw43gBXEQDKRwg1pRiiqWSARrG2dvf8JBaYnvXkVHAibZY6s79szc",
  "key6": "3WWVK6vRSM8zne86DPQsvKzmAH9y9f4ibjSaXcW6sbjZ2mFmsKnstokHbEfupDcGnoHFJQkE66n4ES3mYkZNBENH",
  "key7": "4B92Wv4krFsxFUBCF8MSbkjXJBV2vjyiFNAxYqs4ecrYayt57EK6ozficxRguTQeSPFCujNoCj4SxooMCAjke1jb",
  "key8": "555yrg1Y1Us4YwgA4tzEb5ug9Y8qfu9RF31KwLhZCVrThjMDyn6b3WvVQpULvEnDR6jXdfXEMpzPnj2woYbnJKRS",
  "key9": "4W6msiMK6B54vKKdL5TKTLgAdfwGx5x7L5EcgfNZ5HnL72w1m33AEkmfmbrN7ecWzZTFPymzDe7YfmWDmtiSYwRa",
  "key10": "p1W7pz7UeaioJdAW3RgpmJhmN23DmZvKA6qzmniaKDFEQxq1hNgJxYxLmxS8SRqd7C2q27Cx21J6rrYNhogSEFR",
  "key11": "2b5Cr6WR3R2BRh9fQLpy5WVXgYNakN8LJK4Fgkbw34h8hWKjrJGMKy5EBsCKQZ8YqpCtUcgxagLkELfamRXZ22Kw",
  "key12": "2Ae5ozZ2w6RGs9tepJyjYW1YKHhWYMuWf4mUoVkMVo2KMGiLQBW27aS94e75Q8DkiX8NrnsbvobPAruGMgupuxzQ",
  "key13": "4HtX5UXCgXWn2L4K26sPn9Xqfhcjsig1B4rWNz7Ef25UsEZyD3E14KDkVbXUd9uJdpKAZxBb5HyvWCCVbLtzAnAJ",
  "key14": "3h8U4yBCJESpkkoMedSuvam3gtU4Vpf7ThdKU7hzwEJpVVrVFNf9gF2bwJw7GUzx14wbJprRKw5f5NzghD9fF1U6",
  "key15": "65y8pmi7Wqc7j4DR5rPT2J1P64yQvumJi3Cx3GMpH1yV5irozWDACDxgoDEKuSFiPFBXtB9CcYWm5sBDr7rY3hMC",
  "key16": "5TSqZQ9Jh9e8DbDgeN7HA9fC58jBuE6USLQyEydTSe1GhC8rLNH6jyAQXizAMfT9cePh2PSP6Yse7pjY9DeEPkf8",
  "key17": "4FbUQeU57ozgnMuRY1EJZaiidPPdX7t4uHXwWQVYC6PvpjxTHSS9JwpZBGVEmb4W8LiAiPA8mK5J7e7YSdjgvznF",
  "key18": "65odSVcN61ZEand2TF3JFDsPWfDGE9ukPr6S1bZvtVEdMkmYmiNhBw3MGQ6DEarUYk9NgzdKWYwxTjCbaTPqTDmc",
  "key19": "5TUwaBTaBq6tz7ouEZUeGGDYEWzZYBUmS55PYzboX3wkC9AcmmLa1MhVeSGsQ8UzvgRjp83rbHj6HxQ3UfW3vSr2",
  "key20": "2wTKUPRuvD6teYSr5yB7op2cUHkZS2mL2Dns1coFFtB8TCFMqhjECtsFbG3CHmxahZKbrtThx1zKvLPMK1ADMBnG",
  "key21": "3pPeJFUuXJZy1VL5PS1Y4JRb2daaUkUhEM3WbUrzwaXW5u3G5ZRCmvp3c52CgweMuMNtTMfZi29LeLNMRrfQadMN",
  "key22": "61ghACveDJHz8xyivArvnkN4Sdfkduw3F7kTQHbGhhcnETRtrk6yyFCNoKLDtEWoFnv1hkBwP7xtDYfsAA8tfhF2",
  "key23": "3djpzHQfr5uFNkmUzoZ79eKgUwtvQLKKiAAsZ2mR8KbLo1gYMrMAeFnzYxjq4kdLXhrFsh7F4kpjKo8RGWnXUKd4",
  "key24": "4wNDBD59BNi4q4XqkuLAuTbAPsFgsXZcTnWFxiq8XFcsECqfNz8i1YXnrxtxt94XFPhUAQSTktQDocMC4VLZNVH9",
  "key25": "3Ywc4L44sHeRNZc4oxiQh4hY9h7AvsXMB51nRVs8B5ZMpgP17mzGGD4XHAimYeQs6hSPJnAXbNoJvRAfcSanNGyE",
  "key26": "4dA9B4HvkrQJQM4fwjgqViurgq1peADhKqRbvA8a6kmQ1NqoBfuc9nSfDWgw7tXSfspxQZQWDVKmVgqX9v8CWVSe",
  "key27": "495pnDweuBSm2SsWbucEEBzdmSn2xBSY51CZTj2o88Y9eVWfBNwNzG5Uu9TAxAkJxjbNH6ffiFwLTVTt5AV7zAVk",
  "key28": "5qrARGfhEss9CXjevVePmToZhWmqNkpaSumUCxzThHP4UAYt8VLhSJ5bWHDkNRhSQefgYanJjqiBcvgtyELhjdjY",
  "key29": "rEgA8FSYmqd4Bw29N1gcR5pKR8nFyQNWKErbGw8BK5p62w4BVjkisMLyt5iCd741qYHxjYU3PeNXqJzb6pGBRti",
  "key30": "DBeKjbahUYtNaAKDbWP5tFC5CBHLd8C6THEucXGr9ufKi4Akon3Y4ckAs99mwAQQQxCUowCEd6R9WSZnBpbTsoG",
  "key31": "4vKDRHKVjKRXXFkQYhgjT6hVem4gQC4y2P1gN9CJyqA8CePCS6vtEPY2r4AFVfq8Eurkf2CgR1hTHSp1C5N8YPp5",
  "key32": "4zDotDhQasSfbGtGwXu1tyVG1db5cAwsPDh6dPJ7DizfpDxiqWMdD91LjsGaUdhfPSZTrFf19Yx1CdvYfCnTvDtn",
  "key33": "48ftwJTppBxaR6QGQjxd9sfSfFdK6LuBwbebiMYvjh6vo8x5uKsbd9GS7CERbTw6w43hAJYG3RDLz87VFpvYvmjy",
  "key34": "5ZtpMDYHesGp1NJnRiJQKmc6T5X8UkGWjeckEyXiGxPPrkLW5a67a9YACUs6goKmh37etzb3ysctZSYQxBzYjsYA",
  "key35": "4FLNTK49MnpVqzym112wjb1VJxJzMvCWzybJ7TBr5eyGfLqcranK5wrhs3KcFfjsT8b5c2UCTiYNwTu62uvTERQS",
  "key36": "4xV3spMxcH7DbVky6unMUgmnfmL2o68pyfLPaijyXajnGKD3MvKr4mH4XuMhxoTA3Q28pCBSx7D5ZKND8LTVwM2d",
  "key37": "nToBcXqnXaFQ52cRXUkjknZujNF6BLdqZEMvQqFc7e671i24iAFEUbkYWUg6ZyTnoc9MZoG6PGf8g8TQj19s2m8",
  "key38": "481esDEM3WuZdQMA6QMRdnQneHahAGMy3QbhjkXtyWxMz9VeRatcUg7wuaJQqWGaLgy9pczsMFFYnK9ePu7PbkYL",
  "key39": "5aU8BHVGmmfUUQB9dJ7rM4fq6TCkAwntdA1To2TJQMftF3YKa9YkgBr9gCWueUxvqn2h2ydsxXmmNMaHhFBsK3jc",
  "key40": "4AGaqUMgzrTAwxn2n759aB2j2ncNDU3gMHV22ZWCvyjt3JCs582ZeAzJF5jKoZrjayZZYA45ZsgRYNd8fSNvfkWf",
  "key41": "3xhVp2JmLfTqsEs1CPEvJPGvQjLSCNTr9iLP8ZCXH1ksoeLzsV5U36K5PkDKY8yXXCYpJYER3xMuSXGwFqkSAMPj",
  "key42": "43fmTSv1egKjLhufUiuKz2hePhXHV3RWHJTxF81gAm5gdy8xrnFPEa7zEuA8FTwtWtWd58KCoiJzECJXrpVARQs4",
  "key43": "S6NhicaWSUai8waipW8eeGthbhfxAJ37A4bFf3bHowKCdbS3WNyf2h5LTr3MDXdp4tNdNtUDTqmH4zYA89XtxEH",
  "key44": "35qULQwmL6cEnRedwztwKBS4o8FWF6w2aiYkVKP44sHJFjHeK5Ysbagcw14G83X4VBS8MzaXADXUJReDPC5Vo1r6"
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
