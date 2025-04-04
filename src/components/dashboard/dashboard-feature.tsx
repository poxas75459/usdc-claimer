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
    "5LyT4RhWb8F42qne1hE8ULZrRWhVmmAYim8EiAAWDTEYuSHqhmZ8bL3rv3DxvVD7Y9MiPCMXtcTE8WXt4aPWPHBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W93F4qhPcMvA3YLdFA9snHpLcrJ5cK2CdMs74qbozuqJvQ1ekNw5wguKvXZpZb8SQB9H3oAkj2fjyBA1JPG6U5r",
  "key1": "xHzKy8JMr996zUazSYiMNn2nytLZN5TfPim4EhxXPd8f4EvTZ6Dnrb3ubxKebAd2fMYXNuF5dCirWVNkZvMaRG4",
  "key2": "5wi3C3mZJXBrHnwV5jAzJRYVsdi2vSqUyZTpsddLJcgMEgFUtLyJqpvKHELamruP923TN5Kdk9DbBUoBnaWmgUrZ",
  "key3": "5nZwp5RjfkmSuTQ75irj7SjqWvPpDYUAEsPbJfTA7kap1TmeN7qJmXEC7swNgBirN4rC8cmoLCpyjpVNwLf5GULs",
  "key4": "3AaNGMZGahXddEkzRuxn7mhY2BZQCTwJNKctc7Uv2xNYv6wi5LZA9XXrgik23VJP9yYbyxyB8iC9WsNrnCf53z3p",
  "key5": "4L2ypYq44sm6vuddceQiZQZdWriARc4d7UcxffNmWiJeXBDNtc32DVPyP5JaTxKcWYejc2UQDS9PGCj664PDXSQk",
  "key6": "NAt2beeTAb17tsgjBeenbQyf9RbsomRaqSoPdahYib88A4tSR5HwUdBacx2oHgJqZF2WsRdFpaxrV7CydjXTwCC",
  "key7": "35g1YaFZYLfEPC81hkR5izKwYaoyktf7yhct6LoywgvMaZ8aGUncmdtmRL7wJyfT3j5LEbaXgfNM27tSwgNLYADH",
  "key8": "3tuGxSBu3tSCqzDFjEL2shLNPbCjzJ6vZV636zUpTQj8Z1yysj96rRTCCFZbTi87MTC7awGd5TCYXWKTp6SMVBH4",
  "key9": "BFMcG3RcBMDTZ9U5i1ttMGq9467fXA1DbW7F215mXqkGw8tKmiZxSJLqSB5L9q52MSMwXyfmwdzmMjf31m4oNzY",
  "key10": "2dQgEEEf2mz3N4JrMrbW3JA6dxpqYXfSh2GA269zTVFyGnkKb3CDZaz6CZYT9mmqNfBVdsa44nLfHPLrDBakYv5C",
  "key11": "3G9eMzFdLmA7SftZyR8fpbyRyMtpFTK9NE4TuWKeRAbijcKibE8oFm13FMiPL7ea7e3bqBkB2D1hK19b3EMauH6f",
  "key12": "KEd3idaYYCbeBGUnGzXfD1GNjBE8dUVRkUinQh3CWda1Jxjviy5qfTJLcRY61CBDFz8M7uuXsDLX5zXUmtq3oe6",
  "key13": "3RrKXPQuAwqgnT5L8XaxrajLn6sfWHdqPdMbKAuBb5qn6m4HhdbXmUbuMGjybUCrjJnQXAoyvMEnM27XWfsMYd7Q",
  "key14": "4Awh6bB56BKGaZPKFm5WdnLJ6yqrvMKDnEe94bDZmSzR4uy5GLL62oXjccoUTphju3DdUB49c2yFCqzzviiGk62n",
  "key15": "yTpVvFPKmkrQMMipsqPgX4CfypvM22GEriuJUtaTii6vh2nvaeVNUQU2ivbrFNJNJsF63opqip8wzWeHzz3W2qi",
  "key16": "DP5LAmUP1QXHsd7TW2hDtwjDVJSknDrPTMBqKgZxUqPt49aw2vDJWKsjMndJKupLMiZAnArEMAahKLnaYdHoohY",
  "key17": "3YdAy2nZQoSn6ngoVkEgDXe9JSRUF6rBxX5xmQ8rZ6wtKkVmk4HKXxYKZqeqo1DZQb2e9TbSzccbvqngSY9vp8TZ",
  "key18": "2h8z38D9J8ZJwCNGqth9ydmg4r6MQZZW7EkiSpnQCeuaPhPKZgZofRA4VzSMXbxNykh8bbLJuTFo2qGSMpbsqMU8",
  "key19": "SZFpaKKC3YbWJBiiiHGazgMdcZo1xaJEe82q6xMnoeexJXx6c7JXxMLihZSx9hkct92SNR9FL8GkgnmBvRzFzBE",
  "key20": "66xhkBXP9ZSa6rXCuJB9W8AYH6EFeNDbL4KFbTEiRZfWewxzNyZcvNW1uXzA2PFrn6tXjUQcxxiBXWjUrAjfQyVE",
  "key21": "wzadZEC48KC4grCPs3GPfHZdpGrHGXbzraiXjKP5efvpoZyQpLRrBcrSDm16H3eD6KGhqPsTzLUFqBbs5ukAA2c",
  "key22": "XXK3oFXT9XDWWFk9MfMFRRKbsbGJQRvCVRdks2C49bAbydJ2Ww38AQLU7p8r9PP9YbnVKzMq2utBtu9eBpvX7gn",
  "key23": "246Y6FGS9BFej8RYfa2WKQ66cF26K7S9GDpdMCg1y4rwTtRSzZ6UUTfJpDgVs8FrFiA1SyqFYpLxzx5BDC4Y59qW",
  "key24": "58czuJLLgeJYseDyNuju6Tyv8NewwZAeTuDgSDM8NpaWgrA9En2rQ3NVT4UgkjMHeb8hrajyVcN1ejQLK5iHBHfx",
  "key25": "2eP1zuT1WGp87F7V1S1ErEhtiCsPeaPnCb7nBPpbpj5nBp7udYwLyLwJN4gqVH4unAxMbd7yjn7GwbfhsRKDHbeC",
  "key26": "ma2mrwQu3H8b2Hd3xrUDyHPAiwYW6N2JqAnpd2mECJu36md6LsGLjyas7hwtSGbLupvzMk9MzHZw6ckvMtN6FkD",
  "key27": "3VjfGZqvtHSLguvHV9vL2mndHTZDx7vWA6Sa8iaDzSLzVBTaoMAddj9wRgDtMZpTPwgAY1S5bviD6aNftodDHUs7",
  "key28": "4UG4p3fgbN4TC8hwPR77tbed5uip1EyJ1UAyAiPYGDNEMkWAzTyEcRgR1LaCW9uQTzfJXD9ZRakgZyNEE4dSnGaq",
  "key29": "45QV2Eb59R7jJi4R86rczg85wULGXWZUX686z1qJumDRye6AZKtdS6uRa5B9sqqb2f8LCD3NSCbEn7d37z6XPcKz",
  "key30": "2wQmT1eEAQqE3JVQ7fGLCTfG1a3Ub6p36FwhcAr69rMbqRr4h9pkZeuAW4CPRUzpFuQjiZdiQtoYeh9auuoPXpPx",
  "key31": "3ArtB5HnEJa9rTafyUJfSVJk1P7Db437SDC468KJUdrPYLtD2RvvRxmniAAA3Gowsnng8r8N6vGgSdDLzEuor6Wg",
  "key32": "5xEfrwyiARwywMgmkFAcKEz8HiXwH3jFgmw5QnEDGc68Ho92xW8n2QWBJbb2NeeEcYFhpTbnU7CiJDz1bYgwcnWm",
  "key33": "7EUEto7Su5fnFSgGCPz8uikuqbYTetppG8g31kmMMWcyifCHrBAXkuLXpyDGpE4h6HSqx9Y62k9E9cPqm1bR8Yx",
  "key34": "37N7fGV9vU6LAuAMVJoyseMPhLbpYeY2PSubr1QkikDNwRbz5uwGdLzoWo8rVkSaBftoUB7sUsvJN4Uv5f5iyKMu",
  "key35": "4LERcb3X6pvEAK3PYPpeMvZbKgDh31JbmeDtJwT2JQYBTykDqDtQrPrhWTUtNMXe8ttFsoVKo2PjC24MCZ2s256v",
  "key36": "5Q2Td9Bb7ccnCnDqpPecBfXgQfk4XJAjkfvVyFLRHwj6PEWVjzGYhpSnaNQ9PXYJ4f58H6vXDZMhfJMv3q6PfkMG",
  "key37": "3S1nLbN9TXLbYkSpDuVZTkK2jevTB3oNnt1HFAhWcGFz3MNVjdMbfeTkXW5zU6nm3H7VKgSkJWei87CK65rRtVoc",
  "key38": "ZVypQt7iDfKSQD9TiKX1B92DGWN26DJUtyiyZnYdvK7py7M5ADWQGKb5TtCiAJAe1GYyk57cn6Pxek9CM5x8N8X",
  "key39": "RpcyYfpVoT8XNTBqjgifrNVj377mpZDFu29fm33oWF2GPBHmF6tQSF3TZAZY4ZRATZFgJDgoe9Zino4BZChiVqt",
  "key40": "28gT4BwrG66PwQVSooQJd9bngdRfoEugR4SSDwLHTVYPr2aEWYfhWR6UrZeSwyTAwjTyLo5GTVYJxES95pDGLNbx",
  "key41": "5jkVwozAuTiMHQ6BpyiQUQwztPo5VtwpLU1hZQe9HsS1bGTPBJ59pzGxjzENeKicRuLTryAd6saqaReDyvPVWy8o"
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
