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
    "KyXzUG3akQUVdg3cuJEqwEtj473JcNz2aLf8m9EgtoGac8rgZPnMw5sLu25KGZTWWDEYURerBTRKhZfcbkFaLCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTfLB448Atn4WvByZYDc7uULruuURw6xcQiEc136NfRnut3LSsmu6XfbAGYJ7t87sVdKK2qL6PB8GZBrqg4Fz23",
  "key1": "2uViXQFoRkXhvuZCjqovt2iYZpQULHV3wae1i5Ww6bXjnT2nrHYZtidVsidG44fS87cbBEuEarURb3EXW7SqvebZ",
  "key2": "2zgTYGoR7cqTYSAX3bMYE8HpQcaMgqqvvj1xDNTBMKUdTN5TBsaohBvMND8hLmK3wax6u28ijtZfjnSY7yw2oWZw",
  "key3": "2Jkc3GVPPaFJLVo2r2NYfWFqxnJGLr6RjcoN9Uq1P9RfcGyPpWNx9wsfFk7xhFJD36n5j8C87p8U6FHjcEukXVez",
  "key4": "5t8JzMc9pKUJzeG5sqg4z5uAPih4dAehYXZfXHmjfHPgyztswT9hpXFGbXxMN7yaLzTBu8eg1Kvk3C3t5DEVCMLK",
  "key5": "3VZvb2a9bZK3sxVeqdoceW3yNLcA9aNY1qK68auzsVngpPjV85ugo3fKb8juSGyexnKUDkGZUrF7SShAz1AApUt8",
  "key6": "3Z6MA6WhoGTWpZTQcJsDBGY2mChA29FEMTzQay9x39wwJG5TN5gus9LDUc6cP4yzYqyXip159RswnCqT7XN8T5Xz",
  "key7": "N43vh5grS7b41QaXZMzBjPqzSRKoQmdooAYcciQgGdN7vC7o6ai8PCo8GV6kGLQ7hZ9KWvgrmksGqh8nSumCEk7",
  "key8": "4RseLpU7CTMijvwmQxSU327NAWxScYJpsrtC612ecwkKDYRknSdUmrokyxTuj3Lo17WeNgaa2fy3Y1fqoVxQnY7g",
  "key9": "5bsF9UMVzhR92sJdBBAiBT9zRh8j7bMoiuRE7KZ822RZZybcW3DftghGDWWWEYuuRkLt2Gg1wEgDns3DUkCevtSj",
  "key10": "4uuEfFDK9PCUJvwk9h2WuHL3epYkoir3oFaWWGJNbAbWhdPspCaKgrkYSGJhNUN1hUtUKpbuLRzEFRP5DrsFAduo",
  "key11": "2i4XyLA1KGThWVaw5pfPbU7Yj8YNERYEtwiXmRaQ5juoBuxAqzgdjevSNwMMLkR34a5Mw6J4FnmVNtTuirs7BHpU",
  "key12": "RhKjezjzh6AaunQDygKW8yNKvWqoVj5CdGRjfVZsG74EnsqG1SnsVFwwdVqWVmp7WPcNRFMxpZMPbFTYnMdGmWk",
  "key13": "9ZAeSygm4rgLgwYoyccq7tc2WKFDchjcVrZqQGceP9WhUbz3xPH2zjavKV8yvgryYCUNvsjZDyoCs9kkpKH453N",
  "key14": "3gQcvytWHF98FGxN5yEGQbC63ZPxcMgP5rWnbEDyoNJ5G5hss9yM57x82Uzoq1BjZs9UTZJ6kTt7jGbiGg5WeMgT",
  "key15": "3EzxTUgVyrnpLdFyJDQ2XghcbSdmf47J8Ga92nhHjDa4qC2VQFbJqeCymP3qLgnhDAVbECdrjKB3bPoBipdbAjHi",
  "key16": "4BgEaRynug9F1pc9NEMhtcp5dr3Hd32mocAD3LrBcncAtKGrs2VTY8hpeA7AvF3i1cupY1mqFLdRaiwGxUJwBJ1y",
  "key17": "2RtEye13CFHvGXjd6pttkyehYquTVbsqU6LC4HdivuZYfV1WJvZ31TDmyTKuY5drjRQLQAssm6HEj7Z427h75yCm",
  "key18": "3RRVc4WYbH5yFmggjyr2KuNHas7PieB6xJDZFZp8GiktigfxwRT1bX7DUChCGcyMQh4YeDPBT5fFHfFfFQzHr6bC",
  "key19": "5L2nyrjGVz9NPYW6KeEcQy54CpoDR2vcCaiqavnbhjhrKeSpYDi8rY1BtfeSu3g3NRnaPrXQ9yWEo3EFMVkQY3eB",
  "key20": "5TCxkaitQesaui6BtKoXhWJ9p3tU7qff28BJenqgQFhaC7vkm1aywEbJpyZWEQU8bsC98t4bnGgVYsUpZp6BKUFJ",
  "key21": "37U2RkCrfUKXmGS7LubLxjqhvsDv5MYkYDszEPXocXFpLjbp7zA1LjPSs7aKSCrMuHPEjA9rqvb5uSpqBDFs1RgD",
  "key22": "5fecVcyeVtCQLsCz6re7HqrPEyHCAJRYjN8GQrF9yKm3yYDwkxxBtsxd6hCoDvUt97hsSkcoG797Msb8zMxZ3m7x",
  "key23": "3jUWBAomjepkKPDpM1LRmMRRrZ63FC6u7DnWqemkkFFs7ByVE3gJxqCEEiatDc31wbkAPXWLhPusAmLMmtai18zF",
  "key24": "4FSoQpjk7nRbEEV7JmpNihsGWRKQLVXJ4QJygZpPg4NxSD56j7eL6Aov9QHjykEM5bjeufgB3vBQeXMidphogesN",
  "key25": "2dV98oL3zKxeitCBtTuSK3saLN7jad33zx2GfzgzVpWKyVqRyDvacGmvS3qeF9kkfopf2QEWt6tYXR46NR7Eiz8z",
  "key26": "2Cgx7sEwwbQji7xFefwJe7D94JBg5rStUPc8aVw1F4hUbvKPB9VgiQ7MfzLNxjyuNLWF17pMW7CUrHJS2Rmai12y",
  "key27": "2Y6jSte3fZjESe6BqS2csGCALr9pWwN95VutvoAEyjMzH3SDy1ByGb5eouLPEFmEHGeWjswecK35rPWEFycn2G9G",
  "key28": "3A29R5NZNbfiyG68cL2119utFw5FqZVZ4Z5dQz7yLcApAwoirVLywfmRytF4MR1V7h7EsiEecsT8kXwyi3npG7qS",
  "key29": "2miwujN9gA6XQV7oCFdZdyFdvNPWiBxZWjDvSpqscpZqb4vr7cyj7NHHFqL2nYRXuh1kY9seFQTtNkNPxgFqxkuy",
  "key30": "a6bP6EHbm45pu22SDho5mKFtNr6SbU8WrVbjsHNzNYazayxJkTRDqjjjgJ9oN8v66hjx6oJH2p3aiD9uGCpJJjG",
  "key31": "4DyN9t9ca5J6uffX9PsCpz3gs8hHaQjyUruMSdfqVPZ9uZ61DLR4Jj6UPxqQagkWHtHDS8SZ1bA63q1BKeKBWLvv",
  "key32": "4U6ctLZm7367uoxdbhS8coQsY7NqwNAjBJsYFtw2GzWmS3xh1vcZs15oGEWHmr9nwv84pQh3eY7FXeDydMbmp3vM",
  "key33": "24pK7V1n21Hm8UrJkid3Vk8TQKnABz7FhLEqK2HUMDSKwTVvXY1eSpwNs6VMpvjo2Xsqhj9CbBESPsubpkeRdxqq",
  "key34": "5Cknd5QdNsAubyUPfxoREdoeWGrZTuyLQyqY3K288Bp9A9m1yFt9kxPXztGVzBf99XqpxS23GfJddu65z2jXF8ZY",
  "key35": "cUhoAyP6WHQB3aNSTsNa3EXqy6k19P94qwL96w856TzRCdpdt4APtrofw8c58WZvfP4vWrkNY4y8LbhhtRi5nNr",
  "key36": "5GQBfR5nZcUrqRuXHZc9TkjLUX7drznSeiK9QFsQ82gXuyej1L3gvhoHbcLUK42RjGkT2dQC2KbUD8wpk2MwMtG1"
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
