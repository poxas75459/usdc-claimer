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
    "o4TBf3y8iMc1MKPtFBVj3mG7S51a3gwUJGhomNhDBtzdXNLLGqkWQg9qf1wWGHmYBiSbQT6iLk7BDbNWi1qHNNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EhcQgbQkwbvQUMRTwhoJTZrPkfDGLyPS3zBwevPLS1Zuzi5ranpHSnvums3B732spnNetbNuGLDh5d1n55tLbTC",
  "key1": "2PGpAkQekcM9R8xoxKLiK3ASj2qoNvFSvad8gTJ8BDqVnqd1UYaDyX5LJBjtMXaDtinvkJcmxBvT89wEzBXvemrk",
  "key2": "2MC3ZcQpS4RmBX1UBDDb9tWxRWVw24XYeZnENVEt4G9BPXBfu4bXYM1VMh6wDVXWEHc5EPauM1q9XVCeAR5xuaSo",
  "key3": "5sHmcfqRHEqxPdpYejLQ6avpqmFEwqgJYyow7bvPfhud8TfGPNtHT1RtyuC9cTnEd9rrYZWMNei1V313S4i3CvdW",
  "key4": "6Ketm3MQqDB3foQUzgZqwcV1CgDmqcFxFJ4z9pYaVAXQT78QXBkAErcF1dAHzkrsc9Tjsqj92WXkRz4tkqADrct",
  "key5": "4QLAQLRATpQwV992nF6vnRtTFhKotC2rXGbj3aG46JAeLKDM8FXNmqbMbWZW3UH6pch368B3one7RdMtcWTgYMtM",
  "key6": "5FxETe8STW7eEW4AQCCy2oEkRNdVBtSKThWrebCKj1CR6v2NzXf1vgFPuHi7Z44BiXPtcMAsSWzbqU2CPxmpktas",
  "key7": "4yE3w9A4Tw9YME5VN5aD65pZQCg3PPYxz8r9LmfMwcQesE6CZBngqaQGfzcH4fKDsqZyVJro6jGfVupyi1mZK8dP",
  "key8": "5tMLkS2FkpXXBPoe95rSFSkZa8Le6WWJQu6QwaCME5j2Le3TfRFapbnH52raHKvF4QTarEXYSD5N5bzV9rMonUew",
  "key9": "2jbpKe7ab8NnK26uyRERK2b2fnBi6LEidXULJ9sykZaTDXCxtpPmvjpZumvifG71cpS5KDbA4wS97uE6PVYa5DAx",
  "key10": "4gjFNdqA1uTwPmhLCEgBFWsqawYj7Wqi6xDuVdYHUKeF6qgeiA2wCs53MYU2T2suCytUVYd639Pdoe71dDYtHaV",
  "key11": "3r9d96iELWPCx6cJU3ysF8gFtnNgzdwfQjEGoNY4shBkd8Hg4qxnjP3Z1E1qgZGhKVJjvUW9pLE9ijemb7Vc5WnM",
  "key12": "5b9r6nM8VYxRxjoFCML6xK4pugeSqmUJXhQ1KzCWPZg3jZDL5gT8aS9AsWVQvEHDYNPXTT7zbai9GTnjZaUhFLm",
  "key13": "2DaHoF9KncAMwuEtUcTrfsqys3FP1j7xw2VKPvk2b7X5L8NExBPWgN8EkHUQdfnjrtoirAUFx7K2uhfCb3D5ZACv",
  "key14": "3A9iPvCAR4X1yjJq2jYedPTFHV8W36HPnUoFgn8yBKJ5CczCotBL2YNTs7eTD4rsFK3NV1tm5WU5VuGxworV6sCf",
  "key15": "3rJ3WDH61GaLe9W7h3JGLnAMbe4nseEJy37vLyfCzXmoben4j7SF71YcwDUDjEQDViD5ECAX4CAEY3bd8zaiyPZh",
  "key16": "2RZik8peC7CUkWbg3n9doUJ3ZKTt5KFqGDjC53LMKDRjLfzeEGbTfuK3exm1TS6L1fmnh6CbhNqTz2pFajMhoQRy",
  "key17": "3VY3HyVUd7fyGRrj5fkEbqi6BJuxin3q7Z6gUM7Y2bdVq3ndwGPAgDEEiXssX8EHzU6ZUtdCcmwuQLutunfLBbgY",
  "key18": "5juVDYHfawzrERWyXxxUP5rUh7rDgkAAMBHLUEQMPk7PtEu3oGz8zeCJ2yJ2wQs8Nqg4q7wsmFZkxgNjHJBvESNm",
  "key19": "3BTyp8qeykj4KWbgJEvSDtbnbzYbPzp47m3EPK8zPgfdshKHnFSceCD1xsqZrWDyGcjomMwz565MgDPw4i4JfoSF",
  "key20": "tQ5oVS41Ba84BrHUWJx9pS6LxyQ7YHL4peGKLeBYDstkR39DQo7FV3WicTXKu5psixU6MKABaGAREYJBfhEB8en",
  "key21": "28v6au5AG65yGpENHV9HkaXu1npd4wgiXy9UnutNoy2CgW9EDsiMCZ9Mwg6guu6oJZnbYqUNKgPFhtR56jDwtZZT",
  "key22": "2n6htVgVbq6zRtYPWHDP9iYc5aJrg9q9SNUFRqUm9nFDQTHXLb1V66g2L2Q6kTy4Kttom1ohx1XzcTMwrdPcux81",
  "key23": "nxYkHeHXdABT2CThyf1hz2bm2YrNWtaugJyyFSufjQhVzAhLCVK2p9cvXUiSqxkzrFAujzKx4hsi9MZaTntd2sD",
  "key24": "33hY8ALw4RRA9LzGsc8VsBeqP8Lon7o2eknrpaDQ3qawnrEj36nAsMNuTpgUrk4GtB51KYxPcmfcbnEKrVv2BgUA",
  "key25": "5sSiMdaUacbXbFrSFsbc5Ntz8enH7CRHhBvtRNcgo48PHCGPYtWnYYUbT3tANPu2BhJKYpG8e43w4X9EW3ZGCoPe",
  "key26": "259X4CUmhQbrZVSmXLUcVKRgfG61HooYMzWk3Yk6YLk9Xv7NrXmcGFcYxVrGPkDyRKNziQS6fjUfNEZK9fUnh4tA",
  "key27": "2CxBqH3QqdKNU3yYFiy6BeDKkZFJLi2x6UitxqJu2dbD3ce4Apj1aYuNDG8ecz7nZda44kHJR8xciCBUBrZDtskB",
  "key28": "5QhmqpzkVF7qie4TGMsVKy3vMJgfZJfsUBkVCm2F9K8Bc5ZLeFSvPWGPMg7jqctHR4o9V5jVQvbQMPopg4WTD627",
  "key29": "2ykXV7KrERFTbtaijE7CM52U3YgAwLbnQZ3WaiWKSv6bD7WBTRVwkF1DNpySA5XFVT8fJcXXBbmdpvqdjs7gyVho",
  "key30": "5nCSEC4fFK4xN61dHoXmmg55JU2bpGTfAKVdVp8etG15LsdGhQsauKux3qhgsKdDuqwqaJtpFpmkDWqzH8TbBgxp",
  "key31": "jB1FCxcYCxFcgYS9WJReEk5vXRKVTLsXB1zCcJrkaGmiHuAtwt7reLqujFHtYbR1mJPVYrUT7nASpTJcoezeCGF",
  "key32": "2LSrDK6pCqGdKguQNqBaWqaGFySq1w9vSbKEVZUzGfwfNEVRqbs9uCjjkfBqGpJLRm6BpK5cSfu2o8VXrPph5nnW",
  "key33": "5bNfEjSRquCXKndC7QK8oaK77Hgh8a3NwjHtgipZYhkcCuZXmXMBiBJi7ZwjeKMHWC6iunzuSmJ2ySZmZrEqGTX7",
  "key34": "4t3B5jWK7Aac3YDc2DDm9bbKm8k7WmefsxpM6ZLoFb5J6JiNgndAtE6kyogmZ11fKfgRhpDSo7c1aX1QGU7T7VBH",
  "key35": "3BcwkkW9mMpjbDdWEXJHKmrDDtZgvBQtVZtAfBybDrvLLPGJYxJ5u72kttKP45fWz9gKPuzVpgY8TvGTbWXvuQGj",
  "key36": "2DUcf1fq6qjBT947GmjscD4M7DAR5dhj6aQLJGrGeJ1KVmBFdnwKQx4JtYL64jNC7MpACCfxm9EEqSyQbFoXHHqN",
  "key37": "4DdN8jKH9q454tSXKFEaFfQ1CsmBfoWhpLfBArDERyjUMd7DSykNkpPEnj2xUfR4AX3u5dkm96hkPzqDrTh2HAvR",
  "key38": "XAqDuqj4WF1AZ7kizhwQPkiJoNVkmdxHAJKRW9iU2L3yaaLk5udoBecefubuBqJSRifn4AVEZWUZh1798QhCm8r",
  "key39": "53uEsx8uYfiHDoHFq5L8yUPYXjDJ3LkLAirhNWHNXoLQ3GXamcX81E6mkg2uNpigZmeRpmN7UbFh3vsekcowvtDE",
  "key40": "5ZnmXNmZhmrxVC2iMYsY3NQoYPmVi6xDMyhHBGQUMmfVZKfqzsDQHTegYvgUv26n5uEx3AegwEbaL7jHGhPS8Usi",
  "key41": "pjKpZu5Z2BPG6q8N519rhFMbJ82QeHo6ZZabadY1pFppXUW9F85hH7i5ysUPdXsBWtjSxy3C9epbqf1kCAJhTwh",
  "key42": "R9LzZw482Y93rXnAZwQtkHr5YSbJwEvYptodBBcPsQhA6P6TBR5ZJMrCx4CKt6yoiu3RPsF5DVVkWmiJBxsdsyn"
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
