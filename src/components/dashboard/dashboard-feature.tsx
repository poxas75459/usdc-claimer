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
    "29xUY8FTnEniag8Rg2jSfJumNRzqmKoJLjzVqLbjgQRqZJEHePynx4TWjQW4ZsdxKtZydd2r3K5sVsoicp1NeTVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zS3bWYUucZ95qpHyNdMnpYAsWZvnVq6sZeqhmHte2s7BZ6sjCetY8hFzRSvaE2iQmAc4DJhY2i2SQc9P7UD8JLC",
  "key1": "4drycFaqBBQUVHxsTrb54VD2L8NbGZV2bGWXjxtnpQsUEFViZ22pYfPmoc6M7gPdvvtDrhszDuk4uBPzQ799miGb",
  "key2": "GHtnBZgZj4Y3X2tjvRhZ2wxSjKuEceiHJUfxxVtsjTsqVcRUqXKfVa72sGcQTTgR8oDukPzqavM5iVhPk8bDUA9",
  "key3": "5XzeYQVuAFp5JS1rTSrMAFnRif4DPqHmiu3Ge1hgqHSa7YioUy1LMrQ1B2fuQPJAAGo5ejpDyjpqY6i87bv2zRP3",
  "key4": "4sr3ZFPBUJ8S1tU9AWhrf8ztN9UfzyskGnTBNR5FbVC8QXzdy6uRH2MSGtaHRbwgMHSRMqnqYZpYBtpf8G2RgWt",
  "key5": "58M5f8KJPYS4rosVmTHJ4u6tAYuxNLgQMoB5oyiFmFuWVeSDKbaRAovpEaicZKsjueJ4m1SehfZuHZhntypFyWHS",
  "key6": "4aWCuZ1wKTChytYLBrkjGdrg3GUeStXHnaK5fGDsHQ6rbavSqP3tHj6Q6AZ65g82UoJ8yMzaPiUnsm6wuE6sr5kQ",
  "key7": "YJJKazQw9vu9WoYhtdD7rr2tgM34Azsbk8pUWiwXv3Mr1xj7NMyjJsePbaF1xz5mrHvfceENTv9KR2R8LoLqXmj",
  "key8": "4a6bgfzbnSxQSrS7NgwwdwjtfR7Ds7EZtAjzhogXGuF7SVm4n3ZkaiffJRTebBnhtSaBEvX21woHyUEFLSh9Ema1",
  "key9": "3C2rc1mKgtHhmxknQuBvsSyZeSkV67ssLEZDGV8BjbzjzqawErbzyXZoFr2CjZ2LDcYaU5ex2nMHRpncuUwxcEsh",
  "key10": "jJTfUi99oBqCKSR5JYzuj5WdxWCM28DWdnURqzfCKs7o29za6mpFooqnUwj1x9cVvb86Z9GBqq3U7ELpnXbuo44",
  "key11": "RnZZXZuH2qZLPxuX15z3pDMQ8BFm5nmaht5s1akszmwuwX7pVJRpjLJriLvbowZoL6wMqG2jrFwpVojavjEQyiH",
  "key12": "PVHjfYCKf1QsTiJKVWogbHGEcsjSh9yJvvjrx7yrt2s6z4KDkBEWhewpkmT2ykNjkMbpgkTHLXMXUQvWRxzfnNj",
  "key13": "3s3hxC2ETm9s2F5CMmeyqz85ugidcKfY2DwfytftDVDxjrNNaUmGFSj6j2RgUU6VoK8MjupMMC4UNZuA9ZpmbPTL",
  "key14": "5s4ozq4WmG3AF9SbXzjWmedz5B9jR2evh2u66Uhp6PmHZexF3sQKKx2oBr9SYuRp8xRzSkvUqQw5PCmUoMmDZsEU",
  "key15": "5oetLZ1y2ttWfCR3xHtUmoURc5bjhnXBwLUcDpVhzSoNWmQr3KrJufaDKLERgMsXRcgsyX3Kv4FEwJDR2emkGW4b",
  "key16": "2ibjtwfiA3fw5PA3JM549HeRgTjZs7qS3LbFREP7eUyx7DkjKdqx43WTZnw9eXXSoUzgbXfPydeJSwQ7tt8k41ar",
  "key17": "5uFv6DrxDx93RfSb7aCeeJpgQM7VTdF2bKTUvgK5ERZwD2fem7c6p692NL6y4TFoBQYxrBSEUxytZTwSchQnQj1g",
  "key18": "4mgJ1zeBJqn74hJdaNfZhKb6SkDEwVR44PgyZuwarbJwLZp4RsiuChKdNz12jGBsqj7MwEswY86eRsMgVX12MU2d",
  "key19": "4GLjpgUhHWggcZF84pjCVVdNrDJDmANueoKQ6ApsxuHrN1fNYbxoT4kjuQGTmP3YZoXV9oY3vq2PLShjJX9VUtJU",
  "key20": "4zGo7M2DH41qrdTsreokohCsPyG7SUgi3RTPAhbxTtZn1nK77QZbHdefvTSdZPYtiYNYMxtgyaEWNcnN3jdRcucL",
  "key21": "KU9T6jaKSMpSucLBgzLxJYwbfw57eBF9n3b7D3eL5vj23B3gQVDFyUi5hwNJWWH9o1j4AkFxgXmj1UMfBye9vf4",
  "key22": "uqcCvujxJ8asiU5fJeTbtrrDAALWWP6n8CxSLCoxug3gAK3vgCuNGzwZsnu83byTTTpLX6VMptbes6QxD12VYDA",
  "key23": "ETC2qSL1mFSJiyvvJuTcUpyrEw1Dr2izqF3sVkhL3dw8pPwRRmDBfJUkjLhfyaMgorPijsGsnjjsahrNChHXRBL",
  "key24": "2qHT1dt7ad16ZePBrLs9XEvcCMa8zZidmCRbZhHcegcusnzh3XdAjTw8z1knx6AAfVQpFoUawPWFJxxrrVpxjPnA",
  "key25": "4rfRxpjGdpLiLoDo7qq8vXCtsXRHTY4UUm8U9CwTPRfEsoZuXhBWHT1uK5KfuT1uX8mZhqWW7w6bssteEmp7MGom",
  "key26": "2AQgyQiFqUYszdcjuo2NwCqwzwxFcbsv8hR5praPZdHzmC3jesRGbCCwYdNXhJUc4YjZoEGtPY275SbZbAsSbDqv",
  "key27": "2i8dkJnSVAB48dQ864WZtB4rw1gjRzBhNZbYBkqGpcBum6icDfmzDV69PYWY34yiXor7TBdMvyvetEePx88LMkNP",
  "key28": "5GPtKbyfAoVM4TmMDwzZJDdmwnZXjqSAP4U2nDdmhC4UHwU4rGxEh2NcLFtEa3KnqxPFkwGUUWr6tycFmE9ZFsbG",
  "key29": "3iZHLmQBgsUSKR6YL5i97g2eAfVQjKTemHRM7Qvrxorw4qxN1dpZVFCiCu8zRYpuuiqm1qrQubWFwbRPwdRZgAjE",
  "key30": "3rmBoke6fMBiF4W41adLTnJQg3MMvBpM2nKmchAmctchpDhsuoPKXiwRZzBLoUizbqMh8xZ9RsuLjF92cZpQUY8L",
  "key31": "2r2spXLPQsEkqMDnduSabecZU6JdMk5ZQyZ4qT2D23tzD14zTQxwcVRiuwmzzz5q77QBS3Z6zCxzXBnxfxhawYEm",
  "key32": "2T5Mj4TEcRtS3Ucyhd9xrH97kJbBT8RhVvFMfNPYECvcYchaLm3rzQT14si1Y5tJ8W18zUXXxoSAjTnFEKKdY7qR",
  "key33": "28RT3wk2Zzpd7fmqtiWnzLzF7bnxZMe36uVVjCxVAE4yF4g8Qwcg4SWqaqAdk5LQkikCLPHwCMDZERVAk9oJcw46",
  "key34": "4SbxmxJZW9AT81b7LzxgBm7RzMG42tTmuo2pZgVj4vP4pQ8CoCdJbRNp6nntM1KeRpYnTvtJpMS68uDzq5N3h5LH",
  "key35": "4CFUANjWTGxZTJma8vyryhs81UCc8MtBojWVFnnZtRZPQjjQLCfksqBPt3TKXNdWphT2umcjmYEcraZmTgjdnZUC",
  "key36": "2kcF7bdwSbtcfdzqi2toGnsxJVw7szcZhHyFmZm8K7Dkakx1pFwynS5i1xZTBEqNvSmWYzg8xdjm48A2y9BwaJQa"
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
