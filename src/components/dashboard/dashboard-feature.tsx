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
    "2YihU2SdCfDkr8wx6sHpAf7FNAAiwRLR8oLNWFzX2gDE51pWr1uXzns2tbE4qZ4YTBGZpFckuZ4QohVF8peYws69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBm5qjGCpXT9B4JHp9JbBhF7Lx2EwrPNqhPfGzFME2YPaMN8yUDE2mN3iAQgF5MPp1WLqLWZgwuSmiAuJ1isMsR",
  "key1": "3ogz8Jbh27FRgY7UX2R85mEzejRrMuh8EHGhf65bwwZDGv5TgvjrA2tvD7dRaCJNz3KtmpszxBguzFMa9d9JwT9Y",
  "key2": "624UX52o6GjCGteAPZHWYQRmTt9nm3G98mfb59KL6cJ85rPT29myFcpQsXyAYgM5JXbCdnTjLF3AAo3SdTu5n6kY",
  "key3": "4BwwxxSVxjhMwbbiSt57xYCgFhPv7QPeb3Q5c4FPMzbKQ8mTYwLJNQ9ZQPcZo1tZQjqhchdRXQQ1C9xU2i7QFxhU",
  "key4": "2HrynSDWWS93GjquHQ7d1Dw9xKiYX126pehUSLivRVesP5VCvfc7keAScqEZEo1KdGvX7exUD4A4WqNozswcQjXA",
  "key5": "3DdVAAfRGXd1oDgpe3SoaFfp3a8e2rZpd8vgSp7LtxJQenzfR6rGGp5UThECrT6z3VAuBeeSEWxXrntw7XQbw6dB",
  "key6": "5FBLggE7a4BmU46aBABSeasuYf5gasUzsKXNchiKetDDQEZsyoRRfYRRk7JaGvcGaBW5UCnkHKav2SgDf2773wCH",
  "key7": "3dCVtLwupVPGTqQwzC4xp416rr7QC1U4ygSieW5S2f6BDjGEs6SsaCYUnu7aBech7ZTc1qBHJ654XFxNjCiocaAH",
  "key8": "pznS6uvFZiSrQqU42qPDinHGG2zpMxbTFKbTeJo4rgpeGAwcnvhkCq9dGM9mgbopCk9scNF6u7izwNKQshqa3oF",
  "key9": "3i9pHeeQSZekP3fkD1Q8rs7h29WK3vU1HtDnpLzB9uB68poJ42a6BRvc1kUYxnQ4wzAakmcB2Qwe3rrbguHSM43",
  "key10": "4AjsphtQa5zoE8VoQBjBcW8LK9v3z39SuB6akUUmZcLwKirUq1DcQcTstRipHQzVkSE5zDCZwDLPJPtaf7abTeBm",
  "key11": "2zHNgAGLRQErjMF5SPWJsx381Je1YbGGK8mufPs8Ca9WfnjSjB6V2h72r7d8qP7Mms7yFvPLSWMYDgiV83E1ENMM",
  "key12": "2yhBv29pDKaJqK7DLLyWLE5qJRJ3Jv9HN2w17wJ6asx4AW7wCKY18KKXYgoNuphtdX86GmEWZq8EmdF3QD3qPgm9",
  "key13": "44FjV4ZPPSMKvDBiZdhBohoy5vhPF3guVFXnke4aXm6CzoAMfrHhNuk1UUUpB3uEJPC5n6yN4RWqJYYkt1HpmRLJ",
  "key14": "2q3qGHM9qpPx1eSTwWq5HBbKJuzWSRzoYwR26iwcKn6SERNDQ6hMSPP5Fu68dgzsVVrK7ksdDhKzwY4mWi31brRN",
  "key15": "5PdfeiF7HkKPVs8Zkbb5im2jQNaE3B17bF9boG5TD89SfzqozhsTfE4mJFEsWU2b6B2AERQKxSFgHwhHGzEp3dWR",
  "key16": "3AGLZrQzf1cgTLyhSAjtKQtBmpzf8VwCeYe1kojFJph1kZqHGx9QsqY7HThvT6cs99sEoxdVr39o6mZWAYV7TwYg",
  "key17": "2aCeUrrmP7Gwb6qUWKVmWsfSZKG1N3k2mzNSXnRPwGB3oYtiZFN5BQ9kFdeugWPwKYmxnDda5ybzyERYQ4XG71tT",
  "key18": "4XBY5VuBiPJ5m3Gnt8qb9dg5oCeRTYiucCC5SNSmprEJTcz4jKipvNkyFJzxAdcXkKgynedzh5tPAEMEgof6DZH1",
  "key19": "3hMikEkRThvwof8KGThvVeku6nA3rftivJA8HyHZfVrZH6DYCH9NXV2LBt99NeXHg9kM5qtJxXpMpd47EcavSK2d",
  "key20": "4T1vTNB3FnFoyew4Yt1ZHJxb9ngQ9thHumLRm4DcbPsbADPottck8MXW2wgd4jZypxfmmv2KUKWNf4xAMFoBF63x",
  "key21": "5bXVnoCbjV7AgVA4F3E32m3oJeKJp7Cx7Fvot7YCosoJc5KcXtGd8CE5YN5rjKzBn6Www6AwnrgnXDLXX5MKTjgD",
  "key22": "4swH9aRTVUfRzowYnsD8stNyrnYt1Uy1aCgCUaopVpFeY7mEPveC3SjX5mfAjpYJbib5XVmu94DJxMYM931Lm94D",
  "key23": "3nCfetu59Mdj3YxAVGGK6u6y2CWmzHpfu4jTbf3pThmXbBfPFXmSkda2qxCn9VKUGDMLeMYZbeeiW3D41ghvzMtL",
  "key24": "2abaqqrgWBEW1ovAT36uzby7HxFGmweK45aY62s31iL9ScuxxLAnaWB2YfqxHvQD12o9XJ1gmrLnr7mMQRHpQgKU",
  "key25": "2t6eumry76DSKqmYXaGDTNiEQMDUuXHQEgu4qyhX1Jo8xvibJdZhNR8gFF8La6aMudVhk26tSsAHHZzREGW7YvUA",
  "key26": "57QZdWjvk3kBUjVMHy1hEmGXWP6qcHQ371RdaizgWp4PC2CJmeSnSFbimp3d4gn2x1WCS4EAkiopX1jnxWabSPTk",
  "key27": "21inFR3bz7EBNEBYyeW6DCQcFTY1xkVaPk3wUxCnyphuUUqr1z7BJUWVMVuphL4VCmEnXSL6dqxTUk4RY8bk9tV2",
  "key28": "29fsurJPiv91wet8AxfAPMXBAbivt8oxPsPtBv6Yn4JPrGoFU1AuQ7i2s2FZ8t6bkrQ1Stm7nQy4ky7o87SyimUT",
  "key29": "5qwHnCjQmYDbKgFM7Ame6MVBZPy5PkVnQCroQkvCa9i6XVWQypqNbAZDei27ka1xzDinhW6K3Jv3TgPoSqydB6DV",
  "key30": "5wytzrXUoSA6e2cPD1uZfwhhug4N9BkvX1gCZCiZKHkoDEenBqm8H1xEc3hMwfEGsjz9fCGRTW9c8vFE2PHwvdsj",
  "key31": "4KWt8uACiAHLbXuyEs5dsQw7ABZ68NwPEDJHqSLMcXYRQWKgfxXiQjwAEi8T5RQexL6k8K1kLPJigsWrKBQfhQN5",
  "key32": "3Hiqmqq1j2FhrYVjW3gCTLm5PYxHCnWDo6nV5aob5X3ayfoSjYDsrqScVh1xEBvxySiEsrUCgUBFLLWNnzcdW1Jm",
  "key33": "2tFdBHZiy677zkN9wCGYoVQAMmLq89k7Loa52HBgmoK8RtQhHHGrzKXaAg4bW7nDJX4aZXBT2eHWLjM5r7az3hRu",
  "key34": "3yPx7RzhmaNFJUqJ5fcPRexhB2RKBNGnBywnDtBNpNpwnQiFEhyEWJzgDHkNrcthJnzSrUCb2jNRQUzMuXNGBDWN",
  "key35": "4rsXZafeXiUGs3F3omjQLbUBe7o7AJ7vtLEnTTyKYMhqYY5aWtPEYBrgsmEWx2cuidVkZaV7hLDPQDMPghaMLEji",
  "key36": "3pziZLSYQHnJ3sNuS5zMBbrHeuy6RyXywR2K8PdoZHRrHUgvJPcHRCRabTJBsqs7PPECMt6HRWXTUZhkcVSaZgxF",
  "key37": "5Dt42MeMCLvAq6weNQ9P7TsPpPCYErF1Bi3WJPbW2v6AU34tpN1S5WYeBfAC8Kp6Zj9kwz4EB2rz4D7SgCg8YrDk",
  "key38": "cWRnF85XB8H2a3Av2rSZitFsKbmgRKF5Nv3ejSuWSFcXKQZBUsDJyKcFv3uy1Nxk8bVBn5zo5EQwBFeT1RzNUDf",
  "key39": "3qsjC1xMZgLpehTExMa2TeJXvUCiigQ15tZBN3k5Dh1EuXZ5WeJUJ6RVP9AnMseAD7ER2A1D6j12uAMZ3pNqceeG",
  "key40": "32Ax5QSx4WRoKtQavWpvT46ugLWHZR7mrTWtYTg7RTZm5NrM4gVWgAZVYk5w5ooy6SbUtUa4jMndpQ2NgTcZcuTh",
  "key41": "5FFHbRfUcqaNrXWbZD7151QwEMY6AfFDvteEAsbkoK7EbeMBzNpNTWEbY3r2Yha4EqQeN4JJ7xrSCrts9aWZhL1W",
  "key42": "4NkkL9hDuajnAUe4LF8Jjubg91hrvVFy6oFaknz7KViYzB713gVD4YVhF4Mx49s3xCqQXt4R2nbnMJjUNv8zQLyp",
  "key43": "66py2DEN4QRHdNab65gMtGqi5y1ZU629R8ebmWP4aU7pfzP6LrrNioTzxvh3J9Q9nRb7Jubqqpwo4x4EgxHRC4Vi",
  "key44": "2KnJw5CatZjr86vuyiz3ruCk7qWvDLF6ujQFVrecXjMHR1nRkRtD9jikigkuY6i7LzpZpSNhBKjdGhRVE2q4BdYU",
  "key45": "2jmsE93JjJnnhkZZfXVrGBbAtMkaMcUXZ8kn3S2zrkhk4JCkPzxTBpK49YKpq6dEUPWMqxTBFry6ZWXUyBx1SGHX",
  "key46": "vxwPfYq5oEZSM6hTTF7KELLYX3PyAHAuvPZtqjrCddyE777iHxf1sjtmpsGqoSYagJwdrD5agVNri5jWTaBgRRZ"
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
