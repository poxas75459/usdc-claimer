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
    "3aBtkpk4vPYV4jDhJm8NCJmDouk67AQArigKbYLjgcaeSG5bkpmkybPM9jmyPcpw9d4p94YZFa76TYQ2W4JKCnxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w33QDxpk4jurS4g8kz5A9HjEkjNaR3GDCUHf4v51NGUFWk7CBaTmiwnhwKevscvMpxQ7jjZXcmcFwiTFmGDWGSd",
  "key1": "5F6ATimbfPzya5HbKB39gh5stsCPdnsBjkwqp8u1N1c6VqeJoBttZmcxsWqp8GvdZpmUjDq9ku5FhUCfruWrytLm",
  "key2": "2iJPws3MLzjEAKCikRFEmMQb5oYjEx4JuyUPSkCw4buM8P4MPHAvEqtNWqfK9xQbLCt9E8AgXaXPirNgVDjshtsF",
  "key3": "Ch7Eenikn7ZCN2SBVtdDbYZnTjq1TuXVmrwxx8So2xic5v2KKxanZxMXLzNQFEVs6kzxsjmYmjjMUXnBEdt273N",
  "key4": "4w6MJ8LxkwZ8TqkpJvNGA87fTLFKKBksdhTZwCJEuLCvJTwNt3nJcsDzQYnbcMAtUS9svYJmBFoawHYU1ZYcT4vC",
  "key5": "3EV1AkPGimevHmZd7TtpLJ9C6UV1EYypx326e2L2AiQvePbKrxyLUcXBVfFYh4zQter1hPnkjVg7rwjSZgcGX8WF",
  "key6": "2r3tQpkhkYTvoZQUx2vPqZ2pt2TXfrgp3hwY6av8jHntHqsn8rha2W2TZcd4uecN3bZEnRYt4f1YHGCv2RD3VG2i",
  "key7": "5tP3JHGsHMnL9L7LoHAQQAhHpkeY9C9gcr6BhraLY9z2xAC7rCwzD5N9qT1Fzt9PfFuGnGPDc1sZgKxRgrCdQt12",
  "key8": "5GL4cTcoyCtiQMqNGh7GoyA1hha8phcMCU2TejZt6xJ9bg8EVAXqRyRfxKh3euhxAq9ST65rWsFs1oUYKVrMVSW5",
  "key9": "4FQE6X9SN2113moqmcVFUynhZnmKpDuf9mGeSfqVm393WwZvLiWcJ9WoqTRqMWK6KG5fPebBfjyhG384pY773iSU",
  "key10": "AZSHVSuFKxFc4L8v89MgxPT4VTVG93XWG5WNEVeCdNRCp1vQBbpvqxSNSfxPFAcXV28bBip7sZZbbsffEuvj7xV",
  "key11": "4vV2uzkWcwdQoCQKvu8SAuMCfee4LzG9r6gkQtSpxLTdnw5LBFxhX8oDkh9t5TJ4DeMJh7R9oyBGCf8zSP1P5hTP",
  "key12": "3td6BLW7wrR66uBumGhtVUptHH18VTcWNYc4jrw6p3dgLWiFoiE33oQdCPBpuDq6kzjFCZn7c2cbEqg7DShLSM9P",
  "key13": "4fRQV6Tk8mwj7NV8pJdaX72XfcNTsCbhvM2Cp99wtWUQHtYCAQR1zFz7WrEcXZTAN1MpA4Ly5ZHAJ6dtjo61aCw8",
  "key14": "4h5i6U918Xq4BrRoYzjxbLKmU7MQ9yFzPfep7ZpbBnzqYUtF9Q1mBryUD4dQ9TJJzASde3NGLjZekCFrovTF2CF5",
  "key15": "pUNZGRQwMPKGJWUwGBQEwjrUaTYQk7Q7UD65Sy9DnjgPEWKyVatXEv3PYbrHEiC3YCw3L29j9uWo32QjH8vshDW",
  "key16": "2YWGNGYqMg31UAeyo43gUQMiqiS5UDpZ3gvfs6fj6t4CqLnsUcf4WKbYA3D1Jo1mhP7ugpPBAKF7Y69fELxCFzs2",
  "key17": "2XYbJkDh6GhfHvwPoxfEsS2631xLWAVwSgWdkmgoLgBEUbZxExDFS9z7tezSmHnqjsqN8ewWoogjNK7ubvSRm8XH",
  "key18": "4GGuWwukkvN3bXYGzP2MeLxqLLbaP3bLM6AT9dojLbn7fpWTA5CbTkauKDJskVDXda2ba3eXsK9gqEgYFywgPXdE",
  "key19": "32BeBeoo5UoYnkSTEfon89FaEyKe7NmGzUVU6ze5tGzfgV8aeaj88eKvoEG4A9ZkenS46JHqnLvkLXHRT1azrzg7",
  "key20": "52LcPDKMqAK5QJCJALiLncSiaYTgwmBguUz89k3UrqjMs92jq1x7E4Kje4cNzWvnSxiLbnvWgxeZJ9mo8dVur5Ao",
  "key21": "2yKiLRgKaU2UmcPj4EuS59dTHWqLhsrSEqJMQL2kqkT5k4dWuWfMdT3MEWn1gvxCHJjdWUqnGTh7XHhrPEqm3vDn",
  "key22": "2Jd3Lh9GbUQY8u7RXVhFa38DnRrrd2FdDBe2WpkY2NtzbD8C9N5ng9nCDEpAC9QHXejgTWSsnwUm4Xksoma6M9HT",
  "key23": "2eJ3kDJPp9EyUtjn5Y3VfFxKVnrDvAnSntC56doTybjhCtjW8yraYN3DD8nws9PujYWeLZFceivzSwyAKbovDPZ4",
  "key24": "3pzS7hJt29bEv6C1fq319t1B9U2DWE2bf16TZtTkxEMv9ZKwzGp6myob1vZSBJaYpu8Xuni2icq98FYvypjsrtg4",
  "key25": "4nvQg5aaPpfoPVU1wuX9KgFHLrhbHaxjNN7GUeNYtJXwGMr86ZY7jXWTs7DX2gw5HWe6y4w2MoxQui5M7nsH1CBQ",
  "key26": "2KA8PHNM3hocMpuA4Jb5UZtxpHxMLe9NghtxKY9TqnrF1Nvrd79PZpNbxdAT1jGz6uDeCSnmoWCX435iJ7Cr1DbL",
  "key27": "4n7tGVVgJWij7g938PDL2cgXB2LqWUAfU8Crxd5YQHiSjLmKkpxKcuqGw7UGRxLnwr3PTdmnfD47ShKS6pBaUtPi",
  "key28": "3cHWZMvome2mL7tS46Gimjns61Y5FPWiwLrKSqfvMqUv89bP5j8bPYjZ3fkupndb6riLV86KpgzjhMcA6emomKXZ",
  "key29": "2k3FUC3uQHVADpVa8HXoNye1GyaK6ChpBUZim5yChBcTzM5ftcZorxqxa9cSYSZTmV9kG8XqRUPSRePQZhfSQgdU",
  "key30": "ihZdqatPkWBTe1oVtsiKztX2i3WzvULzAjx39XNGVJUzKzTj5nqFXQN4SSBzdbLnXDR6ob955AuuDDpN4msG5sT",
  "key31": "2o1Capvt3XjF7BPBdqK7eD5ugoK2nxTiymYeM75MnTGnpa5586a2eM1xBmfEYQbueZfFSCgRRJHvnwi7nm5CYxCi",
  "key32": "3BpGdfqa7HS99nx9tsdXKApfFbFqoL4Zzz7vLijSTTRURappLu9Doy1kkgMRCoNXHvdYM1hUqbTqJ3cMqtxtLyM",
  "key33": "3oqa7S5UHpFE4DHauSYtQ57nSVoNgwwwyZhjGU4aRoGFhw8bEcaLDhxaFJuJ3K2VYKHNsvzFthHKhhSyeuvLU3mp",
  "key34": "yG4PMtbZecxGjYq4cRbWqTJHbjTqNV61QnWCL2kwJjFKnV8PNqsWNkHb3MQfoeoVALdKiF91FaUo6g1q2rYXyzD",
  "key35": "45dnChEgzAoQ78pkQZTs6PHqoquza9Z7pyQBfanZ6efVT3bWSpEbH731xKBKsx9vvbfA5DgiUZMDfwWDWb4FbFDC",
  "key36": "24CHgXbWNUkC8SNESvEoF9WKh8tZsJ7mAy7vXFKcu1DY9yzRisgBn3esoGRCPML6yTSWRx7bqRoC9KjqG1Ykn9Yo",
  "key37": "2Dv2Gew3SL36df7h6P3WrQvN5U8GunsST957haStnaQGoFN7rXy6yR8xfCrNZPaLopat8JsAfs5pwAqUkTtqr4sx",
  "key38": "5ue4hyoVc5xoteHGDwCJh7xBk68doyQpcgRyvRoJu1sbNjoiyHFDW3GiJgarivESGJyTYBKAoTtBSYgB2a4QJzAe",
  "key39": "B9f5aUFkMfo8RQmaFK82pMjEW5XkZK9qLQfb6TvRoE5P588LFrtTmTVw8Rvfe8gTiWz1nosDyw19tQ1LA9DpN5C",
  "key40": "21BJrU522PocCgBMAbDrzER973DejDe22RHbZK7QzhZSGW6r84bcniwmWBVFBdkSZGEE4op2rZ6sd2UhQYi6eeby",
  "key41": "4cmY3jCezzX5iMkLFtSnotAMRBo6of9Ntv8w6Yzz9coGFfSK6AR7ZD9X5QiV27VP73HVxD1Hps8dztyTxQoXvM7y",
  "key42": "5Ftz4YCS3HMENREbsvyxx6sEUsD8aWSYLifD2aCFeSsNjnckPeCnjeUVghWZ5ZzrxKxpFNnBrvfAZLF3WThx7MxG",
  "key43": "UDhwP1dL8FssNyQKdjZdAfG9gYJZXSiGHFvMK5YTLMbZo51gxzWNr1RfpnkZTvzmVagT5q5kcDhnnuuycBggUWg"
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
