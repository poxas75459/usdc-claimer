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
    "2bHk5T1qYN14Mj1mnUR2r8WCyXdVxwxmfQBR8bhWDgAioxVLPFi9CyfNpyuzJo3VUnqUqvMZNnSAZAKDzokpUmQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "348E3mmWaVwahHEMDXhkJMC735cGB6nahbYWKcntBTaxxK3Z553JTk4Z8cGMfBws2CtcLYPt8337KWgMw8XcPr6G",
  "key1": "2QkFqDDtikhYA4qz68NpEiZpdwB8HEbwyViLgRgHGFnJqk1jTP7cN8fiSgrRMukqNG9v8rFN9MyezSADEbcKRdo2",
  "key2": "2kgSjkFVDWiLXpvFf73wJg68wxV1Cy9b79PwrAKPHz9jmzEUicwroXrRCb1V9kb2uwQwAYNXmDf7Yn52ShBVvHXh",
  "key3": "5xHGvdM2hZwMme8BxA1rt1vfTBQMSQ65vRdPdgtkP3k77bfRvkaQPepgaCe8sHsth5mBssY1bJ77PHZJVRzY8vC",
  "key4": "2XWCroJJCHXdY3MEDJDjts6cQybq5QkCnAj82PeiZBxrYNBE7gJ6fXUCU1pYd7ykeSgtB5WTECC92BT2UKVjDJ7U",
  "key5": "uLf34Lo7AygJLx3312dAGd7nfVEScAxzMY587LDCmXcgrcVtTV6Xhck7zLXcZzqURXgt8FfX4xrmJu8Ro61pdNv",
  "key6": "eXCS9Tg6o1QduPpyq2p9xAJgfyftjg8K1dsffFbxYid3vqAjUL9nsosNvDVcqEBSPkYnpz6XWxidQJynz53wmE7",
  "key7": "ZMbJ9H3UJg3J8fRHYZvABfugLzWEaRE7GuyRZxFnZ98fwgnVnKD8237xH6RSSuCF8RtLbb6E3zB6e12tgRfya74",
  "key8": "P82hUsykTexqJ2TZixJZHQex295HhMvmJruoiRP1DRkX8CRdC4RHJEWuFkUZPbqwykCAd2UhRnKWoohkJ4QRYgr",
  "key9": "3wpx66wcVqwzzgTfvDqC8uhxB3vtju2jFsVYDGQDYWJJHTU7Vzen4xRy3sBezeAQEv5Xcw5kvWpdaomCeQZiwsui",
  "key10": "Evk4VEhVpijbffsFY6kbqxGZzwHmQnKcFNdkpW5ANR1e88RgCV29ArLx5GQh5teDLPrAj1NvxVLMYU3v9S8BCe2",
  "key11": "4DPCLKYfhK1oXA2hTuMFQzdmnuTRPbMFHazkiNJvpYMQztVshGbW2Ki2oKq7kCbT267zjDd3iXt4zrSYoRChTfZv",
  "key12": "5r2WqTJy1oNHrbawacJxaurRdbk3E7LK714UXRYBCcQDNtaRReSVDV2rondyg4wBK851NtEMbkWqJfh6exUihnvA",
  "key13": "5P8n5fy3YBuLFoeAiWVW8S7HVCCsygtTSfVu7UNM7Fjb3wKu6pGHxemwtmQJW2J4LktPALtyi88QMMZWzrYVBddJ",
  "key14": "17xmpcUqsBPuVypjQxhadZmb5X1s3bE5EzzYhZWbXkHoLbyEsJo7pcrNHtwK7JFYPojJEx8TmTLjRRc8VgvZ6gT",
  "key15": "5WGWpTjPYTntGfN2pfgSVvU1XYD91UZ9izRktdAkC6WAiSGjCXU951zKXcoN7X9SPh2KHzBQP5KWNA9pEjdW4fdA",
  "key16": "2uSJY9iKyGffyGYeW1qWGbR2WmFzTAgLvyRnXxpGrmNTMMbSkQymrM4FZR2PkB9KnYfPtTbPQZ2B8Za5njoe33bv",
  "key17": "2MXGD3iw7GGA9yRSrT4Q69Zzqo6oQ13njVKd8ZvWHn8wuCEq5FuPPqC9uSKpmyAMMrR7jRBZ73Rf7pZkvQZiD11t",
  "key18": "BvA4MPhCzcHgy2Q3zWQYcKSvmVWs3ic7GKcoaStK4W1HA1XWb837U3c2yFwUpEqUjRz9fAcFzNd4gZaW887feQs",
  "key19": "5AmQhGzSVqe5TyGedDBxNJKECvePCeB2bQ7ghZGPbHHx4YDJSjK526tqJvXoJvcSKLkt6or7yJEPENp41VewdLaz",
  "key20": "2JtoXEW9THXhG3q9Gj8rSma5Y5fNLufBZS7Q6cvup1vatNY1roUnUm3yozW9iVkSJA2iUtc5bmwtpo96dqYqd4ff",
  "key21": "3k1yteDW5aXuiyWKVtQi3LRrBShRPKpocenshz853AVWzzqCLtGUVgak5orFyXZve6aRoeRK722inQmzy8CiFwFK",
  "key22": "2NgpQSjGcUTPRm772JQmeGWypKnKmiwXr8N16kU94u3nRTNpAa9aae2SUB2N1g3nzayPgXCut8NZBN7WgXn2fb2D",
  "key23": "4PK4Ru6zLmhCtMgeE11P4dUCiWd6U5AtjN6wBdA5FSBdu35gu3KpQYo3jMsAmFRjkpDTA5ymGRHfP6Ndwd9mmV7J",
  "key24": "4218QMN99TUFXtWhkH5Y8hKkNZkvAWHKkhhCcWioErvuGMdUKBs4rzFsbn1FBJebUG2nuEWMjHR7WK85Yq2C67k3",
  "key25": "5Z14TgNCdN8qdej7Rik9XcFY9LeoNS7G6maDVzG8eBwhQF1gJUjEQJ3ipEKs6DdxRBade3miTmJqYwYHZbaRRNLe",
  "key26": "3UUW9wi3udAxxMZ3mWrpKkNRQS5FvNVBPzNTqLvqyvEXNgyvZGdX7oq712tWQ2T39vswLUJkJRxVJzdrjZ9gVsDh",
  "key27": "45hNVrw5RYL9xSC2htJFb3RpLrhEe68oFteXNeh6ujGnQMPADcQre3qbGjPVTcKY7kxcHtQe34YUS33GFxG4Z68A",
  "key28": "3CvV3rGAvcbgiRmKQFRgYWeQJbndwUPDs3g4r9tNkSGWP9J5NdYKME8oMHATZK5xWhSMwmzruPtyvXG8xEpwR4zy",
  "key29": "a2ssQBdUfD6qcgbLBWPwjtEMuB8zTAojq7au6NoAjixJTPxL66kmgYAUKjFfyDSakrZfBv4jn3DyurMFD8wG1gv",
  "key30": "5cXf6fnwn3G5boMgYmb2PL6H7ZsutpD9QzdCaExnnRwb5x9KMxfEJG695JrEoTtJ4vTnMUWgoszmQgrySXjK5cQ1",
  "key31": "488RZ2QZ9UfFrfnfwCPw6GYeNpJwbVcsYn8EWXTpP8cViX5fKMJcAerjeKZKB5LGNzu44FtrtXtznkkzqzYon9bD",
  "key32": "zGyb6Tha8qMnxGHuh2rpEkvwAmezFADdTGU6bRnCFwqGNQGGbYwgtuMhFMG67LwSyfxbTiv5q1RrLniw6CVvBLb",
  "key33": "DezbTujJi7TQGJxqVQvbRNPiJo1q3xgbpPgKd1yAk7Nk46t2wQVebQ5E85FDXa5XPb1Ax8KRxDg8sH8ik6dPf6k",
  "key34": "4Z3yANmQDgghwA66ykVnWDj5WG3BvcscAh6L3BhWksLRGGM8oUya1AfqQWvCjYtZWcG7K8S68F5wMb9Yj1wSFuA9",
  "key35": "2ptgdpVMbppXbbXpgU1KYURxhsGbbAU58MGz1TQYnqQE3uKhQUfCYX8SAHNcCR7CjNQDXWE2Ds17ZUkUwq6Po258",
  "key36": "3Le4AUkPx88qqF7Hov7HqBV3qMcjh8zgiH2BC7eC4RSsw8JV852c2twLcmMEYptdY4kUFX8YUzdPPRS2ucScmKfU",
  "key37": "4byrAyH5KwZDNcM2imzhsdSNhzL8CC5HYarJ5vukiRotoVrQ2vmtRa75wfsrit6hMKAyRuhBcoq8SrgzcukHRm3K"
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
