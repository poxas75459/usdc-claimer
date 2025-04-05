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
    "4tsWizoSfqYj5hr61cDt4kcC5kr7TRwvSZSZTiFGfyWgxhG2MFtmJ1XdZTrBnbVdMSQg6XsbRDFYghSA3ciNEjBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nGgHqTL1w9AXKNHt39usWEXipPr8covFrJ2BieHCNAHu3GyuTLPHPHRrMHWrRw77xdqV47BEk1jEj3Yw1XhUCo",
  "key1": "3o6CadmpMxgseq82SnYR9W3tXm3156DJ7ZisnZC77TzM6vJwynMRYmYZgSGAFM39DobAfezqoaEnNNytE7w6rTzv",
  "key2": "4PjWUANNznRDMFzkpviBepQfuuBG1dLgEXHbmmLL8Xkky5PFcnJz7j1nixn9PXqcqrXjSeGccZTKTkxGnmWEydnP",
  "key3": "5nFzqDMLSmKYe22VfRJQioWtNwkTcYTTBUQhWsAVQEJcZDjAbc3kUnBRA33KhQZ631TmefivjA5Zaowmv9rY6fQB",
  "key4": "3BesBstkbztgyiaW9U6XvCVsHo4n2gXvinJYpr59S8oTnpL6fa7RYheah8eQWhWK4mL1qcxSM5n6cRa35KaNKK1F",
  "key5": "2uNTiZguZSXcXM76h8WEq4B31xAH4eC5Vw4BwJYLkgjFCowd6vDjV6WcR5m4LbdBbnkTj4vkPUS9D6FLjEew1Ky8",
  "key6": "2MTAS66aZo4Jc1iZUKdyT8HZumiALhG9tW8iJAE6Wg4SASHqKit8dR1adiAgxCUXZvovuBdeQhE73ek85RazKdWd",
  "key7": "4tDzT85uNXHL5jhuxEbZbKWgbGwVea9XNcrm2MN8oGH695kkTB94yJU1RAkktHC5egnxoV9WhfL1DzqM3kt1hLg5",
  "key8": "4thTR9vYU3qKSGbfMeEcMqzTjp7926yBi9zKQoUGvKbXPpFwKo9iMfVt6zu84LNjSwc4YGT59Xu9LHm7Uv9uhB8H",
  "key9": "5nVstmhHYAK46VNzYYS2RakF2fbhWxG61wz7aFvuoSM3iNFsxojJYacWP4v8zQrDSgZniJCY7pdM6PGEuusa3VtZ",
  "key10": "52maznU1w4n9ZePrUmurxfPUEUWn9YVFyWGVqm1oorjvaeGGxPQCBTXR7p9ap6eYtgEUfyjeWtEXCaf9khxfVrsA",
  "key11": "t4d4E1TdfnX2afL8ou3gATPM828dP9yFuhEGqaiUuyenkB819JKqb4Cb7pEgT2Mst7poeSMPSyXChdteKQrvknF",
  "key12": "7ywmKphWf5sp9QszVVL6h7db2Gua1bPN1Vt7PPwSBoVr8giCgSdVmyqa42tYMC83Z8ZDFsXxCbTNbcpg8MvFcwy",
  "key13": "4H1TfvEGpkJsxjJTKE5amjtPjBty8RUTgyW1pcqPuWXWz1KvJFfAhUgH2CoqAzmw3JZyDMYtmbZC39Y6VG4nvgC7",
  "key14": "35wZhUFm8oDFdgVmnSXw63kd6iFqgEVJbzQsz1JiBQaRVjRWniLJELTkB9f7WqdDuNiSFFnApu6DcD8YWgXfyaSb",
  "key15": "46GrytaZJtP4jMVz4BN26fmgg9p15LBs6r9oa91nrmCqQ1NygL3U3aEaEdA4eh6FZapPvcKW6ULMTz1HuwCnE6hm",
  "key16": "4kRQxYW6QP6HkSeoaujKz6S4qtADwsKFMn1nUgS1CBHyGMrjEvtYgcQDSzJqekNNSd5H1zfG3gLAGLfR1nPNm2ks",
  "key17": "rUvNqc1oHCqYmtBU3aoinHNpLEZLr2QQvR7AzQf7tmUHgKBgxtctfcHJwhRBpc3Vi5PeFu3CVvLHUifnWSqEWRc",
  "key18": "56sbaf4vZSxdqtiVzpJPXQBUngpVVwxaGsvMtEQNN8oGzjepx46y58xKjwhVRxumz9FabBshKBXc8CmA7p7Zw5J8",
  "key19": "5siHWbKRhco57js1n9oiNXk6mwTxzwj4K65Vtr3sMzwe9wb4fMk75aNQkDaE5Q7h3LwNhtkBUAXTwXMg57wSgHKN",
  "key20": "3KwnGetoUf5LRC3rzrMrtghAuswfZVZSJe3NG2bDF9kfs1on2w9NCGc4EutheZEAfDMCLqiz53wmbVWasCCZ2hfs",
  "key21": "2ejKSEGXn7ZTNr1wvwfdEZA3wFWhRJbKHXe1unxFPuk5b2VBx9u1sZxyrRGmtUzYuvry12xgqL6esikthvk3NsSw",
  "key22": "4Pw7jeiBBNjHUbHc5WPre5BAVotTnid3bW2qkCC1Hmz94Qfhjr48a8TC8mqeUe81r7ttsbUNawUqoXG9tRtaAYxw",
  "key23": "28frdUDeLcGTToxE78tZL5BSvgwkhoeHT3fN8tVUdycsPVh8uHkQGEX59oLjHhz38vpYAQRm6rh7HqzYGNHnhPYr",
  "key24": "2G3w45tPTJFSs7wmg4snzgMtvVbx2iKkSakYfX24CTCsfUPQRTGmWzMhBkjDcNBvieGbfFWDuYwyoidhxSN2VDcy",
  "key25": "WP7Dmpx3MWJDMwEk76t5DjAbrf8NUYcMJEgd95RRYfKu35EcTYqTYbbYAiBcd2sh14WzX9tozyV1vwVtR2xbWbd",
  "key26": "2ksrRmFAuhzbr1mYZiGVWbnvHmw9EXwy5crRQTMeG2DsKsH8tDjHGnzQAA6z7WRCxLzom82BCGsV7HEbPKy97FwB",
  "key27": "3oQa78XUmG6Cbq94DCuXEsPk5CLoorb8AB4iko3PqBVLH5FzeUgT1XsKgyDka4MDM3a4PRTKpAmwayGJSNBgn1GS",
  "key28": "5acQ1GAaGWwx4a5So8oa6CruLWjzsvum4TXtMovuYc12UwSHsP6Bm3GDJuPZwVTJLtCLeRNfAEY8eXHEYwVUYK3F",
  "key29": "3EYsyhtA81RNRVSQCCTn7qG3V3ic8hfo4o1w7N4rDMxeWrcddoQLoMVRFDyJck3TAf8A6T4AvmvWcjrBfYqPApCS",
  "key30": "5nKT8Dsi2rKjErzfKJ5nXMDA6PHr2ChTZqBP15n8B9gioHnVFPXWf8MTrheSvN8diUaYvhTgzbfkNtBN8mmzPUT6",
  "key31": "42hrFvrG2zCzFeQVtg4x4iKncu9b5bJJ4DSYfDjvp9EGn2HjudeNqb6gsWLLAgZ5he9rAXSqGkJPgpMJGwW6hKiR",
  "key32": "29QGiDncVnxuKKuUoSWCQwzBwVYdFk9hTWwDYPrquAtcmxSZwjvfSq4itnwAztgJ944GMS8kCMvX46bKxHuUitcf",
  "key33": "3apPr3R3XBYfoxKkZH5AutDNJ2rfoeN8X4HR6JLA36m8rz8HAP6cU6ykdFzoaCp6Yi36CQ1zNTrY1YLLNT3npFqg",
  "key34": "3G76Ryz7dpqo81xyJKtD1HLz4VQd4Pte4xb7Xfa48tuP2UBDimUwe9um4cmaibXpbGoLpdmJGY1EEL6mgYLyggFh",
  "key35": "2qnNi9bjUZMZk22F3YCWvy2tEE5r76iagdHpxDRqgGRTcthmbLKXnk2VsBoxsnD9Jv3PQ8joG3cESfmhCmJN8VLQ",
  "key36": "2ZtsZdMernaQQvXdfmbVLWG164VZ9MadJfpZpNnYzCWMu9skH1NVYL2jJTBUYK2dCt6ku5pT3mpnrW7BuWQ2FxhX",
  "key37": "3P98fxrVGw5GYsexCsystqWyvaYKxsR7LUSWiDrUyme3XF1ka1PbqUWEVBE82fhdZnFktByMGVZVPe9bmcioyBrM",
  "key38": "3jrpP6yfBVft13DTkBgMdu5MKfzSrSM1tVqBBdaFz95PCJR1pssAH4gJfyZu3VoADcCn2xDBhjBhvSJG35xiRqp2",
  "key39": "3CePn6htRHQLSdGod84XjTDhv2KCY2xT6kcRYave5zmqNrkbFudCV46YnRMJCEDMtB4xHPj89xwuNA6GQShu3hB4",
  "key40": "4P1is2m7Dycqmx7xjUbFr7QWVuTqv4SEQVH9UtwJFXhRDivQXAwsFaAMYDoRvF298Yx4BuZLr8BdE5z14RFYMLTc",
  "key41": "C4oxuFw14AAzEkdqPGy7mCi4HfH286p5x91vnsCjCjmh9L57UGrcKr2SKT2xSD4EhsRWrJxzUrr5JZESxBkzq6w",
  "key42": "462yfmQ9k1QMnVEdWPKSpiTYAGyuwceaVNHrViSj5qroPN76zLDPGA42btuLSHBYcnabN1bESiSgc3z9VwFnwL2j",
  "key43": "3a6hqFEkJ7ZLcfwKb5u8XKo9qim7Drb3hPrh77dNBAXUSJDLs9ANXbx9z5UbYSWEEqsba8G6PD9xZ1rSM73CWiBu",
  "key44": "9n7C6jTPQvLjwBk2MSpxquAJSbQV2KAYmG6APp67DUuWnj6usDVxF6oVSjDnxkqx9mayioHAuR46JeUxMQUTe1H",
  "key45": "2gw2rkkyYBEV1DMHPwvWt6nFzeE23EpJEQHi9VzjmY3zC4HLuxrQQYuxVXdLyvuaZzyjS58NdpGevdubHdw3ktcE",
  "key46": "5yMi4aCgVgNRtQkVoWYqFsA5xizS5Mr9Tuh8Hw57w1K6oYHh7e7ARMiZvCzX27S3xr4DZy8hEwoFLXJxhtoSvXtB"
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
