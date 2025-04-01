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
    "29QE3YTu9FKhV2c355WRSKp5iXW4hc1wiJ15Y3Leou5xoLe8fQUdXMqUhGqB3d2bgSbqbQ2NZiPCusEs81L3HrWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNTM8EenkwpgXsi7RvmCuRcL5TqGG3eYQNe86zCrVo7RpEg6L7VsBjYi3XYH57dmBRSbWesnG11VDepvfeUpRUj",
  "key1": "kvoYocZVffoXtCrEHo9VDCfBFGfCYzfrWsrnaqtuwzrHx7jKFCTVPztkaQtwNe8BqhvdtRz28WT6eStvNfg9kAT",
  "key2": "4cyxDWq91jujtMQbnRjB5YCuoMfS1bTY6Utpm4sSos5pqFqGPTtdu2RueQScQaf26LKezsp5psR4uCcLvECEHRNv",
  "key3": "5xt8tn1PP8dVvNehJn7xauooMqNxTYnxtU7dzSZt9avp4hmQkdjurEhXgC9NCGtmM1LqB2LKLMM8S4gaRptZy9a4",
  "key4": "55hVnWEz5CnNm5zRuEqP5c79YHiVNNTw6wfbTqYiuG2tgGM51SrPp77hPxJsEmWjYg2o6F1mf2zHFYE148Gibvtu",
  "key5": "5r7VGjhQiFSrdbNWPnobsLBMbrNhciJueeG88MgY4fLaiRqaxF8zZcud2izcJCYfgXLjrkonRduxFArSdwM42qeK",
  "key6": "xooCfH29Vc8sNpxKXz3BuueoXR3akFfR6H4Zo6xFdGSy5J181iA836yq5coKWsmKXrBH46SGLgZczCQHA9kWxy7",
  "key7": "52HTb9SYd2PSKCUoDXxAA2P3dWbBPRtnk5qv8rehbka6MT84HY9e84MgjKT691DhGcrMYLSb2BENmgo8Kwat6Xky",
  "key8": "63iixvgjwezVNb9SN2Gu9f4bP2XcNpJQavnyridLU3CYKebt8NRK6syWZZA8JKkAnkNaM5dFZfQu95zcpyXWxGjv",
  "key9": "5nD9ctVNvWaQCBJY5H6wiMSHtw7jE91P8p9heoT6HTMJxdzp1nvmf9KdKdoDNNKhpELgupqiWHMxtrqwrByr9M7j",
  "key10": "5QGVxFRV3xPvUpZ8Cy8YL5JKuTfZggrnhMKds6Jm5cSMQPFB5BBybkYpM9MhKUcJXWFEq8wTMe4QVrKNefsk9DRa",
  "key11": "EL677kcCR8ETmZnY3TsvY91siSPAuzgkr5SA1WMPdeaG2JxJwYq6PAXqS5AQWHcvwUtHyNJyuoSPUEYxqNv3vRP",
  "key12": "5vwdqXsZfX5vUieeTMEg5N1qYMfxvBeHQoMCG8MHdwJtDJQ3ekfNp7ELJ9bvVCE583ZgkYLUaU3LoU3VfhE88otQ",
  "key13": "2G1TvV9UtNysWVeH9qQQ4rSZ2r3ye5saQ3AqobWSumpuhN5ofscNNb2WCKoCRTUU7gFjGj6EzwyXKa176tdePbyj",
  "key14": "3yGMeahcdiAXWmKwFJXpuFvkJ8SK9dNemZWsMytijNBoYCjW6GtwLHaJZd84ndEizTyugsRHsYEh3pVDSgUNrtHw",
  "key15": "4LUDNq7ZkxoPFK92tY76azA81b888Y3Fk8idUjX8771VzaNWP1Ms3nh4xeF7f396hJD3zgFVHMYY6HB39CWtBg52",
  "key16": "2NuYehgCZUrgnfotP1r8GjasLz3L3r5cJicZXJNTue7Md9W9yCUSvwR52nUTtTHdwo4SqkvBa9MwUnMpzdELxRTJ",
  "key17": "2BNuBVUYRAUcPdcFPZVZAjCQrPeQkVeEysyK6LmsVry8aWw8cCEFB7dKn7USX4tvztKsuaWDNn5cLFFtywa4SNe6",
  "key18": "3YRWUQhBgDHgL8tsy16iN8QupZUyZ2SupcDNyUMvXGNPkeA7utnp4CkqDSgHEKw1EiDRYxiqtTEgBD5TVmpy1Xq9",
  "key19": "5KSKYHtyiqGKpWx2TjUSwDGNRqXkub4KwGBMNpmoLkFBvvUNccBUvX3L9b1dRSbV1feauH5MNZvVQkjy2y7CJ7R",
  "key20": "5Ur8iW3cfwpwEVPKzF3QTDQeVeQhSDJ29xZZrzSuy3MhAGjZfLGZ2V3B4MCgcC9fzShkJ7R1RQqZT8RChFMZgSFj",
  "key21": "4jBG1dLyBrqvbRQonCxrY5UxEjss4Uhh6hsDMgxdotEhf6eDnu9vqqUw8qrVm3P6vfjXgxtL8KzjLC1Pb52mjNd2",
  "key22": "2n5gBtiVeBS8tmvtqXRsiJADLd1GG116RjnqYmorCsYEhxvcPAzmqBDiV8DEzW75s9KQzWgjGQPvJcQgdbE2MjkL",
  "key23": "kvSTv4XCr99Z52M2eyrsT7bV7LzXtexmSPZDjmQM2n2kDsPVSf4yqBtajh3sJMiyK4UD1SSKbJxgN2XExApnNMW",
  "key24": "3AeLn8zoh7zXdeTDSNhjwGdQzmrswfe4WNfh3ztEHaV9RaGpFNkGdrdyjbD3V8pLwE4w4Fq3Bh1ZDPKEFBYv2tiB",
  "key25": "5jvJ67Xcr11P5aUQeVYg9jy7xW3QoZYrNV9QE3PAW1auxrD8XFToVNEBiEB39idn7Jgq3SFTv3UE9fmL5YGGyUtq",
  "key26": "3Gdjxh7w6YZ42fBZ2yqmdpCZJ7uF8fDAVpzRhqq1tetDpfr1FBd9Kq77ZUv2ijjpayWACw2aAx5NtkFnfXL2ix8v",
  "key27": "4iXXwDZTath9av7kawiZUzC6DVyPn7Gr7DgZbBuGSHjyw5uuhNua6e3tfXvuhBTRh7mcy7psmKf7Ld7ktyvXEHfm",
  "key28": "4X98tb1F478F8FqHkpdEf3FqnjZftJz3tYuD9TR7JMe8CPNqEPhH1GMG7MyBjSiecZiUTLafsmABbRGUZm6FQ1rC",
  "key29": "5eofM7ko83DECV63FQiJqwxQvxXYmBSmEQuZHonTnE8eHJS7amZd15T9N9bBgMeRa2jS1gUwUEKzRVxEk7svHDBx",
  "key30": "4hufvqzAdGyK1SVqmpqtUVS3BZuS6j5u8m9xMYr6MUz1Qgf4dsMM1PWbB38EhLn76t8rFie4hTV1n3xwrNTDCHji",
  "key31": "4in4EC4ZEtaE6WwSzMvNN418jDcRfpfV1V2Ny266yWi5Zth15BPyQkC5pkvji5akNxmYzDP5JC2eypUvCP6BCgzb",
  "key32": "4S6Na1x5vJRHSJ3QceoLHv72MwRWwrnRxtpDvcwRZcVemXw2fE96tMHXuxQfAG7QTKzDUSCuNQBkqCdbJPgpoZBH",
  "key33": "jwkA1tiLoV8V7ZMB4qsxExBwXgrzk6Y87T5VL52vSnin7gihJgqjRwr5ohtQTmZRvvgoq81sSF7NqpnDnXDdEkn",
  "key34": "5eEtzeJBEUybdxE8GFgf9NoC4BqdRG32pGwPQMivCQMTkhfvNd7Tt7hMeL2g6Ht61qDyWetmpAovANvavWnsZyuo",
  "key35": "3xmSpRYTyM4kPSPrjoXCNyFWn77unP3nWPkdV7VYysUnRD5dAJ21ua3p8abTwkjnH8a78tTnSPYjxVoUjf2PZXif",
  "key36": "4iaHjeyj3c5bmfyTen8CyUDz5U9Qu7oRK399xHyj2cjPgRU62kH7j55DynJF6RQUUc7RUokc7vggvck5VgSeB2Bd",
  "key37": "3fFVjTavnM6rg9KzY1QnE1sZTeHFBLR97THhNnUzEBEWpPFpCEEVAhc4LMxf9ni969ifQXj4daDguhu8T3YG2WZP",
  "key38": "58BMWBaiDsmF8jRxCcDxH19YJ5aW4QFEttfLqD4KvTU7vdSxpAhT3f1EDGBcesJje34fW3VCxuNTmz4PGu3y1o7T"
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
