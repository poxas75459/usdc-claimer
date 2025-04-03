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
    "4hwWfCCPdEfaRR5GGRg27hYRtYpvqca4XqoqJu5ZzSNu7DJGEpSxnPchRkWCwxajaUmRdXJQ3tVam53GJhsDPBSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FR11vKDy5hVs9qdweDM4dtudrCUfiw5xxeWureJkQz6eVtLiH7HdHPEGjEgfsdCusZsSVKveh2cnG59ddaHRNsJ",
  "key1": "29jyY4eozkLmhkZFhby8rUHvWJCcRrCWRgZ9QgGLMpo8vh6Zm9FcAfjzHBRZKmHrSfCMNErp7zQgJrVPKmpYmZtg",
  "key2": "4yPTmVDNp8J4NfEkMQWxQuXktkMQ6eEz84J4D4Z5ivW4ibLCvJRnKjGqR9kEFejk8uCSQ1KQ3MBQB3q5QpE8AB33",
  "key3": "3CW2KXkDVfwq9Vj7qhytVoBiHg4KBBrSPXqF1V5EPKHecu1bSWNChdZBzDW257e75jpU1NoNemjAk3aBTmv98uRN",
  "key4": "2BjEUqRLPYWEWeBTrGj5cSiDejmUJxqnhGJYYctXVoGNQzaaUJWyGFFRggyv5xP8LvEYaJm8FwU8w5yqrkt9EGhg",
  "key5": "4VXKZb6wEobGqKoHJZtTBz6UwVRceFoXaj3nZf7X81NYF4QxR6gte4GAn8gC12uwSo52oay9bq3iNYQ1FU4q71US",
  "key6": "3NryF4N5yy1sq6wxgvqBj3bhUAidWoE2zNFfFbBnS6553BYkstVkVfTaro5tPzzxfLdDc7CE6hTz9aW1EXAuW3wc",
  "key7": "2EjSdfCRVRoj7p6vmCY2y5Dvtfr5L7o8iceE5TFUNacu8sgiaYtP5NpM7pPKtmGw2hWVRkDmPiJTDhwfdkDG7QEZ",
  "key8": "2Sdp6gdKSe58DRJ8gRhYAqfGUXA5WVBUUoyNk1fAcNxZfiRNTjWf9Q57KWrEjz3rejy4QabEukHfeNBGi9c39VBv",
  "key9": "48sQWZD6uhGg7TzLF65TqiKJa7qQSuZLqt7Rb9zVXNaBQZe8Udh9a6T5FD9zMGNx19sULANv1hbQcjczbJEi3rbk",
  "key10": "pjNZP1kjD7mEXd8biWcK2Y7JCbozYW6hQ3iG3bZiwfgjSLrtYzgsXrKpptrxLN4Z5k2dE8P5QwYon32vrdJtuzs",
  "key11": "4YhXurmcHywC3MXnmG1k9PDVmpCBoE4PjMKNjmBwJT3ebLuqYLqxcAaHGZZDodCjzGHVUdNT3mX1PGPH7xk15jf2",
  "key12": "difZTdQEkucMT6VTc7Lfw6v4WxWgj5NJnJZw5RfwZYV2jo3TuLztBMtkkdgKbcdnqgWKjXWccRqJu4DFejM64Cf",
  "key13": "5ygDyMSwrnh834T84Qag8pa1SwpC8JHPg8juv8nA8Mkkjy2LFqwdhJSQA1MFWC9Na3zZLkbfmqg7mxiH7EtXt2fA",
  "key14": "5RjSGsyLAnuZt4QQoAryJPxKtM6xySgAfH6WQo5jXPfxWs2gSVm5M5KhXXWdk5SAKNUnvj3MNcXjjZ3uMWTgcqeT",
  "key15": "4HWMkmsHHFSvw2ZuGWYtcAZ6ywj79ps4BnPY3C2TKLL21XUUcsjoa7ZMLPjhXJpYDEABko52sray155VABGy5ZpB",
  "key16": "5V2qph3dRTWp7rSLTozv5QoFD5eBQd2AEkA5SirwHdY1GbkBtTRchAjFbdy35a5cUU16Q6qQxpotME9ber3DZfKS",
  "key17": "kgKmeQPzseAKidRKGKAN5NXt8486614uQdjP7dVMMuD3cQjG44p4atJjV1hJiAPe9t7YcXdV4AxqJQQxxSNm4Qh",
  "key18": "PXc2co6AyDEP8MnvLgkeF26Ap6rt5deoYTsUHQDkXrzoSQ3AgYq9yiiSAUWBs7oRte6qDzUJ7dHp4P7xHXMqDvy",
  "key19": "5hFrmt9vYVNLTq7Xc5qTrLdfvfRBD8VKS1MvTgXXEvJkfughHqDJe14asUBD4PtXsbtYG33NNXAwc5F26uR3hsCw",
  "key20": "3bpDkMk3fkQQ1sZt5ZsWa8hPpTJNrbrfRZmGUPFnbTqvqjFcd7iAQi4zXndTxMprRgXu9UT91W2CDDfX3f7nrhNm",
  "key21": "3DRjR98Qsrd126WYbBnTwKTkwfgSJAcDASB1Nfp8jnkBPwh7ryoRxpBmYKzN26kbXkm7AxGE1bWoBBxddg211DXq",
  "key22": "5JWckfqXnBwttj6ozb8uHPrhknKe1PyKeWjzu6XqJUH4DMiSkkiww5LT3uYu3aRLGz93vNzqDtDc4gbY6jHwjdtv",
  "key23": "3fLyM35SA33n7eDBy9YJUYWH4eLZ2UUgtSuTGiyabiCrxMqsnEVaJbZ5CwGb6R939k7NfgwfuAvPEVraaZxgEGYp",
  "key24": "5MPDKHGfibif7vAvEBdacfTQNNrKbUGx4ZdYCnnj9df53ApPDBM1EeTcESrdENL3MfXjcPst9dd3ZYMTkNmXBTae",
  "key25": "3u6dtCqb8JDwMXPFYYa9CFPnpWfbVqNysSvruJC2K9td9qr2XvfSbf2DbJXaUmk8R6ymX6vBMFGS8SdJixdQ4YBZ",
  "key26": "uMcKzxjcgeSaKq7JvTVmmVkSqMQqwhmMwmozNduVFvaZztTkYCKzMSLreFUKBBm3RdooAArR6Y5Lktw5YGDu1QD",
  "key27": "5fRgBjodmVEmFrcPvyCf8TvPfwbwwe7k5C4deUDCGUbt41PvUwccEGT8TqLUYx5FediTiRUFemZwwDXiMy6GeSfs",
  "key28": "2i5Lb6j2yTn9GLuBW11kbVNuwQ1MLMrChyNLdPCaTMsDKzAYrWPyqZnU8PnJDGPvDFKzNf5x1uSKqqcmZo8sHBqC",
  "key29": "QJao9JjTbdBsYSeR9CX4YbcJnVwBewrbnWM6aJj2V6onaUsD7CaFWGNtFkDjucmBknJnj6ttHhZ9BcH2NtoyXpz",
  "key30": "4rwQNBRcdBmd51ooQhD34fzJHehTzT6JSUATAhwej7afAMPX5qVAxzrZ8gEVJ7B3BBWUrcRS4RY5rmCjcymGSUf",
  "key31": "34DdH1T6muujJjznVFAb1pEUorrY9D2Tu5RBhBp4Rwn31w4XynbEauk6hroFbd5oQcazBHkx6FfDpnLuqXKaF4GZ",
  "key32": "xhCEimEZb8fQ4XcPP5cJaD1dATYmA2M8Ga3H1CMw8qpWQwmQeZ17ynoWhmkLfFb1wFDiDeaZexcKQLdcLioMqv4",
  "key33": "TQnGeN8Xp2K5tmc8yoPLAEKDUjHqxbU2ugTopWTdG7BL51zLMRCW4Zk3xskwkdDg8EKft8xqa2z6K91BceAY9XS",
  "key34": "2tLVyhSpyCdnfJv8ewZ1F1FJhsNrVNjWnJ2yQ1zMKU6xYZyAkwcRSn6BDFF1YGUuKJEqhrPQcN5TC9zqBouwBvzw",
  "key35": "5St47CmFLHwzimbpzqb8gMHvgg2NYdhsypCRVWwfNfn6Z48E4VXF6pV7DzxNmnLNtKkuhFkAnEvtRe4v68K8PDDB",
  "key36": "D6Ss2b8JLQRWgSA8xUjCrSVuG5HdX6jYKkLefj1aStqDz3caBVKCqaokYip3znp3x51tYaDrugSzuLwjZza73t2",
  "key37": "6b6zaE4iEj5NZ9r3DhZzfsirTR3BJWyPcKhQXb4d8LBDvXCenRxDfASJsuVqeYjneEyV7Xp5rEweZTV6iUTiQPn",
  "key38": "5Y9goBVb2KpEbxxJzn1VqX9RbZxrdh4U886iW44oQABUXffoBwvhhLgWqVXTDbVx9m6xbm8Xpv65c1qArp8CsxLV",
  "key39": "5mVQ6zFyndbP1biiqeJ548LMZQ5xsL6jn4gzYfv1G6zwFyojdvUeDeYLcBSVeKCxtrRmF3KVwnSJsWFBrVe6HPGw",
  "key40": "4CCXfrt9KMqK9b5kmtgtLca55jCGCKdonLezYHD2AqUUMsJxCTg9bGmGmtkVjSLp4eEWoG6Xtu1DrzAXYeQMCJmX",
  "key41": "gnxnMHvRcSEr42etLxamRkmRodbKkHsSGmGLdokukcA1YXqNvvLnBMCJtuNfDysq9Rw84gbyUQovyYANjLss9RE",
  "key42": "3peJR7c9gBWJguE1kSduzxmHA5oovwLcRiwhBZasMTBvYVWM2JwzabqyLq632ZQRdwKeWL2odjDQLtgaV69UdVy8",
  "key43": "5o59P8Z4YdMKmfUjEzb8GCNPJYqqRAerWs2esjbLFpmaF2enbEWrVoDKiUm8gX5SAmhqUEbpHdMpuTXpVTvqF3DD",
  "key44": "LLnBzTa3eCNfyAzHpRdPHfzhWryC7jxMdZRGMMPRzTB7vYBEvbc5gMH1foBEBHsVSD4yDt1aX2biHJoLaS2PN9g",
  "key45": "3oxPv5zaxty1Shyw1t9RUTrWV2h787kxf2ZPNB7Zyed2LWMFefw19Ltxpto8cFLHfp2j86XP8CtomCMxCBj8c5ZC"
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
