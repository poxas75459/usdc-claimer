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
    "3VkAYADQkiSf9kgcJwHyhWKghhSZC5iAEbPLmSgN94cTLu6gHuY2JNTaArShsFkYwX2ZTZYazCYDLPWwytLdYJNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Jm3ee5ykyPqKULvgEUjDE3KjF9iMYfNgSgGWeMVb9dUoKYTaPDFoUBBichYHYPLDqsuV8njKd4eqjoVEPyAmwD",
  "key1": "2rLiYWxFGvykcB5UbXTJii4EQCYAbv9cH623hgFg1AbkpBgxo5FPThGmCP94QoGzRMmtzq5RqBHCCf6HgsaceaJz",
  "key2": "4hp4UfpzKFSNb59cJBrmR48xS6jFwTTuVgjXeds1k8cbpBxU6xBDiE5ii4obF23oHXBFMfwaSEUxhZtP11Mvr8cQ",
  "key3": "65Gs5fvGZicHZcfMpwgXxTGiDy6jaUPMTxcoguL3vB5LZMS6C6YXbYUfB9WqoZ73ERCXE8zsEU1Qnoi5M4UxC6KH",
  "key4": "q6tqveJaHuXaK618Nxp1MLYpXA1fW5emhG4YQ1pNiukcBfFEGTHK6xFqVmZ2N5jTQkqmfJoWMuK8ZkY7nekBtR6",
  "key5": "3BXZdBrHboaoR6MjWhb82Uiwof4BXMkfh4DFMMgtuUFgAjnFbauxamRZajhkrAusRvWA99y5fqXcT4991ku8Bck8",
  "key6": "5djZ7HtiLDP8CwNHSGq7KoHvc4UotbEnLxp72YcazXa5ZgXPbFStL6MwdTWUVnE81oxPfB83DBMm6jtjHaKjFgV2",
  "key7": "5PJ8Vmeb7KByLM6qWxCPnoypGrh1FPmmhb9qHn1jfhCoR5M1cERnUBZdaQzdjEvCV3hjQVjpqcJhAAQcD4zeABxS",
  "key8": "2YtS8C37UuBxvLVnxXJiSRAKNQxUTSW7YuS8fvpGdEnGte6pVCBpHrtx967HBTnWQqgfe7VdPUwY1MT9Mdxsm3YL",
  "key9": "33xJS9muhYmWH6AntkwDDbwGV36x5czjesebNbipViwMoRnHrCkHmiJcJKgnjFPFcmiFoqQHrf4trvM7SxhAy7Jp",
  "key10": "3KLizhY44JxwfcefHy38awS448Btkb7wfm6DAwaiv89T1cVskiYopmhcKyCxGmxZoJmTT8f4Hrr1hgK5GPopFL1F",
  "key11": "2coTXqxcVLmqD4qYyekwuzUZeweGNHUYXV2U6wkd1ahmUyUS3BwXjiX8NNZjpUEsrC9TfUuDbSf2hzLaTNwgAB2H",
  "key12": "65K9Fa4QGko9s6vPBxypBTCxj82Ack19Qonx8myUTgFQR9ZEQPbAWVzidf8ptx9buNaw2WZsJLN1EXFFLmsMJzSG",
  "key13": "2NXBKM5MPqCqJiRA2VVhPoPSoFKpUbTVMWurxmXon1ABFsFocqG3Jo6pvTTHzQq9viSbR3AVZPRK9xix6qtetbQF",
  "key14": "3t5kdHU1AvnDWNT81WiDsnd5Ak6JsGtFYXB1zyCrW78sm4gur5GRAGpKYn9G1WtcgCbVCFJcg6CYmKMBfwW3FeaB",
  "key15": "v88z9ZBtWKp452MTbpneskcDArxq3Cn6n8yGRz1PpEuvxk6gEZWEsx8G5RnznpUL5SCA8qid25tAQfEuxB2YHCh",
  "key16": "hW8LvQwjBitFxPQjnu4eBhFqAE8zQ5nYT7nKft5ySBXQWdwZ2eeHyrCeMkCErowcnxgjKYRoR4iqQBSk7kdyXD6",
  "key17": "2aFMkCR2JuACNSf6h3Fy3drCZwDhi85FGa16RU8mHbGVPPbPvTKBZyZh83t3G1kR7RsNyTWRBuysC5uh7VYuyvJ9",
  "key18": "5sDmXh8FGfkkcX4Pf95nyFdNJ5CegDvSGrBd2axqfGaEMid7asXRfHJPCzRLaG12aAgoNxTHfcxDS9tnCDxW8eAd",
  "key19": "4sXUFGhz5i8hWXjXdbduZp7ocpb6chn9jXmsuCKXt7Pw7Ry3Wc64nsE3a6VmiAN3eNwMsYCVJ4rnqxzULS31U5hY",
  "key20": "3SJmSfSp9b5UdEbVcThQEb3tZg7L2Rc2q8Yg7MwiJSMsaAvDceTLzgLUJpCXUgcATVPctrQetnHCmvf7aCgp8zQY",
  "key21": "2CtyDNiS8ztKiaxBv5pwtXxb5B2u7PYazeXswwPqzp7Tf4ttded2ekhyApstKddyzKGY8ytQGX9uJeUE6QWaLyx6",
  "key22": "25vbndE1geXsWSjxRAwNwJ7kQXK5eM5s9vKXCM4LDqzsMXksHZGMndksH33HLfyrjw6QinDNrk1HeEcay4v43nMw",
  "key23": "43tGgndn6mVTYAgxVscSrTwiaP6odxUCT3yG1gCeLghiiCJeAuM4tCXz6NDg5hPdmv5djbRgci2LhQECCri4fvXq",
  "key24": "2qBygm92LmNz7JBr4PXfsT31WyPP18g2yUrvAH3uG7HWLboQEyPYWYSsRKC3ANWhp1CREKhZowED3G8oxqmf9vuT",
  "key25": "4kau5Ezbabm5GTWXr9vVu5WTDwFBDb3Qq4cV5gi3a9pG8Cx9Bg54vt4UiZA81tMT4efCYhqMCAChKtptDyWqXgZt",
  "key26": "4VTdvhHViXSkiSkcx5tQH28dirnzofaHmsXJ5Ne4E9sTwTaKBZKVPMw7vRGJ9KgKLopgcsiYv9qMgiffjCbhqeC9",
  "key27": "5qcFeSHELvuYNeJKhRL59mbQmRsRaSGZfpggUEMHhGL7tvAknjTBnGj3cYDmoJv5AhtcCoAgWufyznik6a2zw2kw",
  "key28": "2am9PbLHpBDe5QyKqxwec5hfTL6EgQs1xz4L9v2SVi558uMmPSvMUHNVNikh5TjuQkgt1c8hmpLPdj6vgVtH6FnR",
  "key29": "21HNQKQaGPDKDditStoXt9V7SFU8NBdsCjqSQA9NfZ6ZFm5GJfBVXu9e9JPoi6iumYZXjUfhGqSU1f4UdTuefnsN",
  "key30": "5KXyjE2Qihpwg4BK7UFcQ5SbkLmQzVszoMGJN3xXbnyWYEwPjbarwRtqD4htN6EShj7pgsnHPp4QwmBLAAFtbDsw",
  "key31": "3aTUVcT8WsNcqTpaJYDhMW5KBSunk3rEWBsfnnkSN7koPJVz8S6q9PBbWqsS1G3pYpNMExoAL6wtDsSmLk4YGVNX",
  "key32": "34heG3Bm7uyv1xGHBAivmyjx3Y3shHzHx5JhHMw1jSp79WP84oh5B8jwZSMmcgbATa4BYxHXnJP95NLqnz5dKaf4",
  "key33": "GKZ9ifH4toYqzjL5vhp1Jh95W4NCwUdZd4SvU56X8NPGjhsADLfZGjxSC66xnMv2LD8acG4J3EWYRBhc5S8MqQC",
  "key34": "4nk82K2TewVtG88SAzvN6A1hJXAAX7vDu3u6WVPFXpDrWTscqso2EDt3tuGBGP4NzyJgSeFvenbxWj3JtVgfHUTS",
  "key35": "2eAiqq5Pq67H373xMeMX9pXmUHuf8XndufbBbXwKaJ4KmYNVfBbr95f2w1bDzuQnsDxsbXYUjwtUjPuPvKtpCJTW",
  "key36": "vD5HsruZ8gsgJTa4BUbSPdfTCKDMXw1SfGBHVwJkoaPWSsVLnhhVE9SkJAVg3W47uuicUWMfykaj38DCpQtiokh",
  "key37": "pWvQF31BgqnYbHN1RCZ2LsiePkLoM2opjfJivCnzMUtDF4w5t52Vzz8qyfevySDvUdNUpqjSvptLGhw8mw3dCPS"
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
