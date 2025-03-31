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
    "5fo3SMzLdc7R7ygtaBWjzjxT5spmKT6vTAj2sTTgy3BU268JcQuDnYcjKSKrjvEqfk6FDpxtzWgADgvTcUxJXRu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNjPsDzkjpv7rJtH2cz7ULdm9HqmJkWoZkkLdEKn9DxR9gcEFSFfQtqEZjZLZNjb1pGoprX4dFG84JDPWgWMhUY",
  "key1": "5aSHRHR3wKjqtogFW1HUKrAzgnCNCF9N8zFwpixyc3k1MtJPpjWzjhUjPEaR8supB7wUk8z9AQDykTsD86oUeyPP",
  "key2": "5Ao4iFWrCvSptwVcHQr35qRwLv3ZU2nrRRAJ9GQWYFTEmMQytDf3JXaEFgeyMU4tULjCRX5HQRNyuzVkD6bPZqhr",
  "key3": "FFAh8RuAkALw9oofowGVJneW35bz953G4NySmi367jcmPd9jNV1FyLtANewL9KxioJtFLgzR4wjGpCtqpdxWX9n",
  "key4": "GgrN2kGh93g1HmxgeLLHwVyA8uD2372U2zWRZQxTB9GjowP7VzuZP5LFKjCh2GUFZ77hwrzYzxKJWQ7W3EsRTZK",
  "key5": "293T8G95E2iefRsBhoeAtEyB17YHCKX948712xgtiHN4G7zkvR1TmNaN5p49WvG2LkeseGgkwkDAyueJeW6H7JUi",
  "key6": "rcTaBjiPqTNUwQ7RsDpU7xhbUWXkjYPt6b4PfffjqDGGnLLBQeCtrR6YgKmSyAaCQcnTjNEKnrbe6zR1PFtbF9j",
  "key7": "3uTiKoDTuqUQz6JspLX3fkvzzB5inpF3Ma8ghHAdGRY4Qg6E2MhcRiqYRM4Vr2FUMCeuNDP1cpQavemZSUsd1NBZ",
  "key8": "56RsXcnP3yYwwFJUnn3eJL1YTtewWYrW2evECGXXHAEGWRr3BiidcUK2fqLCYzU1U8tW215V1PPbhk5WoTF9jQaz",
  "key9": "4ehsvCrUs7cB56vT6q3rKbqVavyFFUKut2NgbUZuWJxJU9E6YeaTvqgyfdA4Ww8ywfWS9FWQV5fgwdEUsCugB3q7",
  "key10": "4jywsftpRTeG7DHRbMK7MmJLX22urG96w6q3dtRBSSYqFxVC1gdnsY4PNeaw9Vwz1GwoGfHJn6C7Et4rZMuG8vvP",
  "key11": "39L3sECsqEx4N66DLD55QmPJSS5UUT6U3fimbpbumbm9N9t95bWDciae62bMREHTYpfQXajveTnHuovTi6MFheS1",
  "key12": "5R1hDhgPiFxhmWfYod223c6MejZiYpKTWejaXzgqyREQiNbXxUqCbxUpk66KHEhJnvEY4VSkq9JifXsdweL5Rv9k",
  "key13": "58MJiXU2vNmZNYAcFBtyonjrSNohH9GJiwEzRh9mQTfDijCYtMxG53KEcUFyGiedZyh8NLz4jXHaCHb1UDDfdgaJ",
  "key14": "5u2APZFo7NQUEpeKq57JZYR76bF1e7DLVxsihPtknSvuVonCqpixpZeMavKsmHpJnr9tjbctq8TuA8hhiRxX8tAs",
  "key15": "3mPjSURoNeVMbbt4bvGtPqqXvvs4Bb7DgzJFZscRJhLkAnWv8ijVrjQVHhe2aWZZfsDpVdFrc2pPWsrwf4qM8BPS",
  "key16": "MGcEdfsE14nTCNWyEijeHinQqAFWfExvADCyXDCdmyBvbWgn5yRGdnMYaX5zNqc45b4vUYd9bCr3MyMrVRRKDwY",
  "key17": "3o4aPFVvn5pH8QY9rtTqTLpYCvH1qoaHDghRb8z1UUKzJRkw68YxpbSzFR2XcQFLdUeiJS6iSVu8b9rNpuGPVnf4",
  "key18": "3ETvQiu9T722tJucmS79pTGiL2T3EtksZq571SWTcMLLnL1GoYCzv2ShBuBifpEN8gNE9Xs7oDnSca3Lc7oxkoWw",
  "key19": "wUrdw59rnbWWZYcksWga5ui6YP7WHw9xo4GgCRqjMmRmKb9v1nEkVQM5fpacSoKCeKgYzynxUPzZiR5nRxYQZXW",
  "key20": "vhUMm3HbwYcGoxaX6m5D1mFVe8MyEdxydQdPbmT8GN8XvbHzsbjXLpQRBQvjrSzBNyZELVy9gHsaMWXZ1ARZB3k",
  "key21": "4qbQcAfy7E7W82b2vNAMJgoRr2gZHsC5ZWEtQNNYQ7iDwJLeBE1LPc1t3Mq9Yp9eYNm6cv5u3hYXmUsoJpzzz7uR",
  "key22": "4h8Z9KfV4QSvTwe3kZjccqpyJp8ohHfKK9FPTYjdo1mnzvXL1N1MyXeWsS1ttCRNzWBm8HLCCnPwLqD5zA6HFTPF",
  "key23": "3sNqQ1jY3KQ1GjV3jE17PyGjVkRYCeGH4JNvAZqtyj9MppaAxVNW7oLG8C1hWBn3zMsSidGyPZUmRW37nu9kbjWa",
  "key24": "KTTVh3mRRcqqSDQzMULxPuVWjqzDapVofdxRBmymiWVw9dUz95dhxYiC9La4tLYfGza3rhPyjArd6LzJvzYuBz1",
  "key25": "4J6UyZw6LSJjayNzf6ZxiKzBXAMxn9km1U1aDnZensuGwRLNGCsPuMbdAK8yms4dfpjejvFCjw8uErGhSYKQ9PfN",
  "key26": "2FZDPDaBj41i2htn3pVxu8urng5jgaDn2SGgKgvbDX9fHiqTVYqFYqYxjvVobzoeuzeFZTA8A2NiAxFjSNkfTbP5",
  "key27": "5WGxhh95gvj4ay93hs8ANigvyML5dZr4RyiLCmZioz7aRERceV1m1qh3j5BoEWoXPo4K3P3D4b1iRM17T8RcQk53",
  "key28": "3Q1YJXM4bcnYQAveo7NkHNvyw5FLxmkqADUZ7HN6Z7Gd2LbEVpvqDhniqEbxAxbYMh85kTKSUS9jkTKbGhoY8Tmz",
  "key29": "23R1BpAvqaiYpNZe9KsiBPoG6xD2aZCZynFikKk6ED8bGbBFHAk8LtBbSLznwdVtKJbbdBPaPy6J9EBCowhuE5AK",
  "key30": "2BtsH1JHi4tipEErpKt1LEKRB327hrk1UT6wmnXX6kp96FzgwcafEcvBi4dBNzb6ERe23ZJxdJUmtAEWsXtm9Tzs",
  "key31": "3XWBMRA86wHPwXRkG723ZDn9QXf615z64Tc1hBLuGbHB1xvadYEB3Ccstj1rbTW4Jh8qACwxEAKnS5erJ75BhAuQ",
  "key32": "5nStH8n2qJ59oL8c7kB5RBK22zYgqcRZHvp4RnH5fjHXRayupYoKiNK52wQegobWstputAromFSJkNSkbZPR9Bg2",
  "key33": "3wv68mNuMbBYzJz5W6cNc5RYvaDMk8yBe3r94nShSJpwSLLBYhY3e1K8KGzRkygsLidYTp51zENpSxYQpTcujJju",
  "key34": "4rMqv22GiLmT1yacproRxQDtGu7EW7hojGaQZ5r3W8cvJ6B1FjKeQ2U9yFSMwbmNC8KavGWzwMvNNJHpvfQGLPSX",
  "key35": "3MNT23vJACckpArNTz9tSE9mWW6v8qWEZU8PQtrAuTpgW7aBxJmcaBk4yZjz7z5Y3cY5c6mdyhdtYCfYDD3PybXi",
  "key36": "XGgDCGVQxqWa15eK2rB65TJsPyPSFmJ8mebXJFnEvaWfieQ7o7jezLUuVvzgHNGXSMgTm9QPozP7JonDQJRvGnB",
  "key37": "2euSBFDKzdo8wn13RUmk4mmLyPJWmnURpq88cr7EeUED8TFpMPeJAg6vS8idQGKuhbnaBgKMK8QrwR9PPSNP7DF9",
  "key38": "UFygssdrMB4qZMxZR9i3U6X5QkCTEDzJ82W2GHyc4YLA8N4tZJGsJNfPTtLLxQ42CUNxWmBATRKcUxUCqEV18y2",
  "key39": "3bHX7DbwyZcTvqQvy6Vs4ZWKrcYnWbU1hLa67r7c3wR2oYn3dHsxuSthJvRi3HeEY9GAvPPqGtDLV19snMeF3rfb",
  "key40": "UsnENm5GPkVPc4KcnBNPyAf5WnXFAf5rse1ZbEqYq5WH7ebLtLShUAeroPHqvQjh4fmAjLQLivpYsz6XuwVipXd",
  "key41": "2Cbu59pRFQBdibs6Ctbh1ysm5vJznFdtBRx2NKppTkSiAuFnr7HMzMkPpLHrQobCJgfyiZyJjMAfsa6bHD1MuMk5",
  "key42": "3i4MU4uxAviz1D6dSjmAzhnG5Q1puejMpRorR4t59mgtZvnB7To6Z8gcC62rHh4QnjbjX4WPDpCjjNVwYGUvwuFq",
  "key43": "5qU1Mu3U2ahPFbLh9DmJk5GPjhkrmWz1dNvgSFMnm1euwJyKnPffgezUXaDvqwc3wvYX84MstQQFbmhUMnGMaUaB",
  "key44": "4ZNMXhE8HrWZvmmsasFHahKKPr8DQyP75N2qwKcyEmQEvKqguwzzcUKPd3PeP5ZBRETfZxi6ggSa5r9SAB1juh37",
  "key45": "aBQvUVuoDFYArwNtL8bG7mQtNn8KMz9FmqzDGjQBMeUtFuadqMCNhc6SEzvchXinQLgA4znn5Z9e4SZymSH4A6w",
  "key46": "3YJqV5xnLGY9tcHYtHSTQTuG67SX6qJn99zqSqSM5rbjtrG168oWBRuoMMiUMf48btFcb5CVEvnJDMxCUjJ1AFzE",
  "key47": "4AUZ89f23H7RwtSREJCPNdSuQkxBcfnNtEXF718r7Nvnvzm9szPZ7jAvvhVawKU6mxV3wDmqNXMMUacxyNdQah3G",
  "key48": "aRNppaCbX1JHNtdUBYrjL1wrToSYw4Bjtjrzn7wPYoM8qpSA3SSt7aYkmCh6BSG4PgybkVSeS2ZgEFc5Q3WNgnY",
  "key49": "EmXXo3JCYS4smQ9SgLWputVk1JSk9KTzkaq1rtnzC1wqnZ6SSpxoHoqAxbpkvccuRANgUQaWR1dSpRjF2bWUtZN"
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
