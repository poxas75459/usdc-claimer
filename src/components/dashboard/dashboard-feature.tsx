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
    "WD8nby7itzn1xHUKjhdHFAHQbeGDsgxo6JwZf22hS68sYSydTEFw5N5P5EzEgEjvC4gNvWKe7ToAp4KSRAfXmVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26spFhNHu7LN9Gjt9ok8eHpUTB5sabsymiBzSH6TbhdwxVxjF3SdRLBH31FQ9vpUjnPCfkqPvcNSs28pzStGEeYB",
  "key1": "4CoduavtAJmyo3c8GpEiTtAikSowZrmm5i5B8k2Tc8734xruiLyfVfQR24NixZPX8Fmfe4itXtASsu5HJDXGT7tJ",
  "key2": "5s31UMnUz5XoQTg3HDgWpKSi2nUTCNSVBk6jXrZXfQ8CHkYy9FN9WD25cbRNvvL8hXL188xhJpmYrZXBpxEY4gTR",
  "key3": "4YfnzJoxrYWBzhC74DMYqmqu9ZgqnFahg974gxkSKA1JYgg5b1NZNM2FM5NNajBF2Jn4coyg3YWf6X5xoGU2tZdw",
  "key4": "3BYR2i7MRG7iwYP6v2NJmtdbnpnEdUmL1Hs2f6KFi3XtRK3mVWAKPaqg8a8P1z1U7BUsqMv5uJJm1QviE93YoKu2",
  "key5": "4Le4gpw8nnJ8BPFRr1T98ngU984j8T6NUDJt5T7TUaAmo6unL1kiyjDTjpYvL5N4yfNd3zxijRBpqkZWVW1szqKt",
  "key6": "65rrAZFhx65gVyjpAygESGAbkr2ooUwr6jWmMjEp2qoD2z8XXv15RgR23H2AgE1MwnCBtiQTmxwKSCzN8nWrg5g1",
  "key7": "Ggfod8SFBYn4BbnsxdEFdvEN3PNyq47AbXzgqaNYo68QwN9gV2fuS1jidx892G9kaWrWuMegUMaUZmLgVcADQ6Z",
  "key8": "TpYcSZDjw7EqaEaaTQ3bhub1dzXAxYkSXSow797VgxwVBhmyc9zdgbmWiFRxfMssmR42ZQ3PtyjibirE7U5hvby",
  "key9": "5wnBAsyB5AgTp5CUPaARHBbZZRqMWGBoxHvXWc4PgmRV6RRDJFWxj7WQimWhUbpFq2dhiMgJpGoMX2rm7MhZ2RMm",
  "key10": "5JR6JjKPcUkWC3eDhUQVRriX6aBEZeUG8q21Vc169owDBQuShQN1QgB2z3urtYdyiDfhXecPstEoWZfMkg3Vuuev",
  "key11": "uLcpU1rd3HRcF3dc2K92BLF6YzpRsZNexU8EFswgtgYwhYjL2zs69AVZGiRFwfT3qehXft3vXTo5DtZfhjANPMk",
  "key12": "5m3H8mQN1tMHAi5QeZGH2Zbkb5KrS1VwX4oryU8DfSdrwZvb8hPTiePb64dzg34gE9Hf3A3qigt897XovS8tawzT",
  "key13": "2V7f6NRSS6dC2kNJ3DdoWCqPp6jJ4ijv33HKKvtvtC4xzJYr3YPARnM1CPvpjn4Bo3kXqqSaMwGFV7Bdgmt35GTg",
  "key14": "4HW7xw89n3RzESewGHyNbRSou7ydcVAZGaChAqGVUuLu3JgyBfhjbpUq5vMonNj4oH9CxX2FzQ93kQPnXP5Zwmd8",
  "key15": "JMvkGGBTUuppvsKE44oVz9xf8UC8YLApTTYUJpwj6BFa2gtx9a94p8TrE9L66C1QA4DarHBPPRcGgvPMb9EeNBR",
  "key16": "2xFn36xQNn6gX5nsSgxZKxBJQFhkiZquvz3Zf7e3Y3dmbekb6dD2TcdseodhPR28w9VRSp92FQapYj45kgUmZYxk",
  "key17": "3m7hupm7SxAFPYu57aKYhJmp96zJ1aVFZyBRAERmBqE4TQLBNA7AGGDjZTns8cjobMpfqNMtjbwjczzNT1S3pnyN",
  "key18": "2vfUEzbZnQAMkJztUMLYsa6huyYw9bbdf4VE7jyUE7VFn6BikdWc22VHN2AVYQP14x6vj2hKvWvmPzAhKSFVG8Z8",
  "key19": "3srQbVzF1hj6ecrgwrcLPBx3SRVCNbgTmjEexG3UjQkgeS1QBFtsB3WwCUBVGU9iPwWvCkiJHMUHraexdLtjc4Ts",
  "key20": "5kyBZKXQFapFcpFfL7oWpJ3cCKnRLcwB3mkP5Kt7ueqWupdQ7BESJrauFmTko1vWAMjDgXw75qxkBTXjMVCfiBAd",
  "key21": "3qnhC4sxu8vrsBVntFYmhVwaofuyp5nBx2nRJhTzJfLtTnj7e8unmdYbh7jKczR6vgKRyDmnWWQhCXHNrRPuu6mp",
  "key22": "5jkqtRcgQyXA2WNC3KAMB6faZzXBKfJhrhuKXJHGS4zjtqYqGLkoUMTbgrnTuQJqtEftCykYeFt3cjKU5mwJHYee",
  "key23": "3aemm83nPWLmLo59AyV1JGb2zsZxLCBrWSGeaNYq8ukps6LX94yquGXuVxuUgzehGirTzN44aARkkfr7Mw2en2zK",
  "key24": "3v9r2Neb3FQNUoPLWqV1MkigJopLtdURMHfQv8xusx6vPx7uX7Yke15tgJCp7f5hjdfFabssgX2nxNm88NTtUZ34",
  "key25": "2ikSbJ2Q5cyFQpJ8XNDD8YWJT8BgVTNeUA6UB1qg7EkaAbbAbgyTmHcmHs4fnWBMryn6ThgDemwPqSUX48XwgofG",
  "key26": "3tG328CeTHPdetWXyC9Ted9mvECiaaft8Y6bB67NphKbL6DfstZZjiymwt3DMHNsy23tVu9TcvH8ZNkF98iZtpNk",
  "key27": "SS1dXP4iLkBoaYhdsB7DQKb2HCqEoEcd88ca2m7BpcyUPytWw5K2uGpPKaxaoeKnRobzF6Yx2WP1aYnR3kwxig9",
  "key28": "2BdRL2hTHPNLTZrPd3MMorowcAw9JmvHNL1xgW91xDmM6DHMZTfnZaknbUX4m5fbsV6KYzjHfhbev1qUjbA18HQi",
  "key29": "2EwN3ACfpXM3hLhD38xBJUXHAAvKGabjLZr83GguDB6GfqgZ8VXs9KJcjWHuXQKQc25o6o3RhsSUvMfJA973GyrX",
  "key30": "4orVAZjjtybVGZKtntd34L8EzAQuDhpEffj9ZWFoVTYinrSLQqzZZDKDreUUNbxeW8PVCJY84yemxhfsaaWBB2RZ",
  "key31": "KYtfFBmqaD5wMCNGD1MuQHDS13qMf5RSt9oyGPjhyCyfu9oVFEQfyQ7gMbpUWEobbEGVY1bxWXDAVKfCDv4haSU",
  "key32": "2FEHLrkDQUADQgW68cXT4rDCpy7K3q84uvD4DVXi8sz69AH3xFLiSJfrxSXfm9mMcN8miaEv3GeYhC85T7PrJJHY",
  "key33": "5oBCwj7DA1AdGENZMGTuJh2orBPVusnbR8XywRq125LdG6x5mwBfdqUcuHu3RM5ugfuov4YPFJn7LT9DXgRARw39",
  "key34": "5mQ7q9yP6m5DfdfNKmb3fCvdvTJ2ggePdPhJQk6MYm8X9qPwjpzuC2ueLoo2cyr3AF7t11uyYBCSej523BenMZ8f",
  "key35": "3XsKymZpL9kD7DzvPcehRzShvjXmkSPpxr39ZuhWSdyTvic6fmB1CfrC9iTyVW668p3hfizqVsBTPfPyAhUv2AtS"
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
