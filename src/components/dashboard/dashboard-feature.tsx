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
    "5V7c5XC35orw6HdTsvRJEi8JDzvU11PdcT4C8Chg63ZfBDpHR54QkzpGqzPfpN4Rq7kR8KTpnqsFnYBx5GhQmaNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSBWpuZAsu3hMgbzigFBUd2t7EVXzDp55TUrzcbWkTqFKWKue49tnTeAe1XwkAyKX6VBFQ5V1YCpeF6r8eEuimJ",
  "key1": "YE8rWqGSWpaxdtTMRaNrwFDW2Z1hC7MWw4dZMqPk5mYiunmVTTxfQhEyKz45ugGpeUT7xK5g81qhCkuWdxgcHXd",
  "key2": "GnYrnPGCPRxbZGtdvFegzb9BH4YtiDyeeTC37cNnzbP2dwug1NBp2uEmWBRAaw8wWFvfJ8Rz1b2LvE9hoc7qLM3",
  "key3": "44sqt6obmspz4GquDJMFjyDUKRRsKxckXVMWfe4sRTpMZYoAXdbL1yWNYchfPKyydLNgTKbwH66jDtUSuRtjUe3A",
  "key4": "5TvrJ6WaUAfbYv5RjEjFSvgeRFLFzntMEg3J3WW3CJUC3EUQFqkeY1X55k9qQMGm8RVgmDWtKkTgwHhZpTZWAL5F",
  "key5": "L9woKj64mJxbSxzsqXCEcqUoQyWWuvYbMYoVXpQah1mXCKsLJjFMFxQ5qMnxa4yazNrc6oE5WnryE1ieba9Wsvg",
  "key6": "4KEKMmfNbF67RPK18jrdBmM8NDPzvUkVY1qXfQG8H7bSPDfUJZKtDqM9Y5FNwCYJPYa55Y11EJ5LU5hrEHQQnajy",
  "key7": "yngz1a9nAWKAm2SHoRrZ1JURLpB9qenmmTisx9t2x5M19qyPJR3xFXPb5uX9Nhv5gXUKpqizTTFHB1Gu3o5HEmG",
  "key8": "5fiSGeYbX4TKBVTbZtx9rDURjuuVxUCMJ5T5gjrqoDhhqsfZCr9aQX4xSD1SYA9XfQgyTRWaT4Np2z2po6R86rak",
  "key9": "5AeemUPWqRNrQ5dnERtAyhDuqJC9MeiPx3sYHcjguWgfF147884NQ23JBz99DdPq1zqz1MrcfmPvdZp4t4AJKEFm",
  "key10": "6QJ5JpdS6hxQVxyRXczFib2ZQxzK6gxAva6JbuK9jh5rpNhrMHKBKyfSQUBbQmaTK9rh4BmprjqUnvCRhWHLUFv",
  "key11": "29RzBG98vDPdAANtjF7N9zSWRZSvFp4XxTfKQmiE4A2sxpxdH4Ey3gng7vAbQtS3c63rQvzyKxbdPGitXvbpqtt4",
  "key12": "Cke42U5n3iqU65tFLEtCU8nD4rHoy4QJXTvGWftDCXiekcCm3wYMtf4saLNJgoVtZC63jF1dcrnEauZPrfoxLNf",
  "key13": "2UVCPbMsBeJxaSdTPV2nqKbfCru4HMyxwsnHsh2dPc6C9XKbrqg5DV3gF2L7tNq597ZP3YmemFC8oBn6uXp3ZVJj",
  "key14": "3GBB7cLquZpEcCMBw6ty8Q7CLwZQrpKx2HVtgitNJahztCNqeqburDTncq6hCAoT2Pdo1UiC6Hc3FgeVYb6sfaDB",
  "key15": "2zNJkV731E5bMtEq5rNHrDQxq7Az2HeQybNY6qe8Kpgwoy7fqG3zrM7QTHf7Nbvs8uyF8VJZw61i7xKqUKqeZaDm",
  "key16": "4abwEFHTDercZeSFXAzrSRqQLqiXUGZYuaY7yH3uTUAxsfs3xR8s8zo9uw4ouBsxHk4yEAjuvji6Xo6N7uLHiasb",
  "key17": "5NNtDQ5FB21AEQriv8XNEaYGLPot5Nro2v49X9NMv9H7VmryyL8Gb1YiXTj9iZBCjZxsY644zgpsEzzZ8Fm6Qspk",
  "key18": "2b6BGWy1Yo58ZNMnbYKgSJ9cQ8qTfAaTgeJ8rCqxMXVrs9PiKcUcR37cXSR2H7JVb31oK8XG64sP2EgfoSpqmobv",
  "key19": "5KS5mMCdXqdE9aXJSep6JhoDjn4saVsXev1CnhgpfCFopYFiw5FF7jgkTuZboCadbpUKvqxSwoNj4q9P6n7AV2n6",
  "key20": "SYb2ombTtCNZNy3f464yoVTS22iZBkN7E9PrURRguEp2kHFBqLf66dRvxEFKpNGsq3mCEViGmdJUEikUsMXz1c5",
  "key21": "5E3biEdgxgynRPvZ9LLfyEeugYH9CLeNqTM1LeUnLmjh4rn2w3Xr6uBzbcPQUsFSVJB15DqqUc9XJwWBircochWT",
  "key22": "3nh5yWfcUUW9NQUnT9R3ywj4GPkPShHiTbRqkpVCon3fRe1YW5hJKQ6ZSLPLhcGLSZNBeW8odgMSdZtTVbuZpuQC",
  "key23": "3vMhMkC84nT5ppM68K7Rzv1uTPiuQ1m5TiMaLfrwYTjASsXATW6G5Em2sRW5q448Sc5GExfWt8FeXEdyk3zYCSp7",
  "key24": "5i9Qi3jVfnHnywGZ7K5mwUJpr8YfCk5oeT2VXpsWmJRde3pgxBKC8StvAM1ptj4CNiBGcmnsnENFQMaRzqB3iPPa",
  "key25": "6XguVNgfqm5auavNuKEcf57vYdsftxU1LAcad38wQoD2SLjxrzdPqonyUzpqZuaEZQRwCAkfTHXA5M7qS5MLG38",
  "key26": "eyQFEy7Ufnfwj35rurCNjhpMuUCpr1R7jSFeapokg5zGnrabLrjJ9a1qXFXHJfMt7dgsAA1Nco4p1ohLYBrhwsu",
  "key27": "2yQFtgiEMBfgYWo7vv6mdg9PzRk26ZVPwpXdY2nyP1AqnqGoxT7Koa6n6nB6HjCvS8zwRVAi1tQ1XjswrzZ8g4h3",
  "key28": "46xAJpQGzYTRifbc6zowbyWAubsicnZL8xFPrac7PzzYqXX7nv94UzpZgBf3Utti6C3zhX5nrKsx6chvztAyj3Jm",
  "key29": "4TmSqWzJ4ciMEvZxNo8DqLMH1G122yRNWHzGaqieeBZCcpQzToJah2APTsCJL9LsPCUTkP8fR1eJTtKKGxxtEzyk",
  "key30": "4Udzd6kDTRX7SRtWfbtKZtrao68By2vyKcqwty9nRXJfnWQhhKusXr69cb1PyAbe6ZLfvVf9o8MrrZkSgTWpuBzo",
  "key31": "5iyQaZr1ortwGvfBcTgdm2ufz11jGBgMpTjsSeiANBMfxYeCxP53Wr5w2WWzqrxyzJgG9PEi8G8fe44gQTuZ2VBk",
  "key32": "2VeheW7XPte8EuQoaCvCak86uMXJzZPYeiCoKMo2tWUUtqNBmYCGUrYGeW9zsJWomJjpGTRA9k2RGHPB1MaHNLuU",
  "key33": "2vfDFejNh4ToUoV9xPNSzK1KHZY8f2rwHMzBEBqrJPLc8kwKZM8K5pbb3sqrsKVjZywkGkJb5WR5pd7Yu62cmqcE",
  "key34": "3vFY4LeX4udqf4SoMuhi4vLx1MiKRtSGsTeHbDnAkwRz4m4txUyDTMTJf4Na8n778hf3PkTgVWhFdVNVXtTgLCKr",
  "key35": "25yVAV83RwVoewe9a7UMaY5RBwtD7foyQdTbjn3iUZFWa51cT4ssqxaVzsPZXSgVGZiAWmeHE4sMfgKpGMmkwMzT",
  "key36": "4jM51tDw6Gn9S4RnhgBsJdwq87zrFRrijJhTcBHygbjmbuXmerBH8C3M555PCZFeXATTCUWEd5SVpHBpGfhfULtM",
  "key37": "2sisBoWazBp3Dd4Xi85bvRDdppw5HaCvA5rpzyUvRwu7g815qxbKcUYM8kQtRWQ3ZoitXKCQiTKF4ayWBEAAZPrN",
  "key38": "3ZSGMVsPZLTuBowtcKLjspR9b7N57LJCmzAH6KdottcFECLiKJSxhE92ztdSqmGPZgq3UkBFLHQjuFzEJKqKNqzd",
  "key39": "411gn1QFFh1J2SCDUEy9MPVzdNj2hJv6pekaeiyVtz2X4N9E4hD3dPDw24c6L4aU154HbfrUNym8AHwJVgjPKMq2",
  "key40": "2TkWeeqo7Bj3sLgSvNAjYenpQsLQnG7mYbmtb9qQuJmp5VW8RA8tEmjT2AqptbqAr7yn3PAUd98HTSrc1pzAGVtN",
  "key41": "3iqPwQzYDtCyfeAyWmK4LNFZxiu98onh52RersjVoTr22y4gDPpHZ1aPxo8SvLD3zzCWtkcL3U9Yzc6gZpUmfW7Q"
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
