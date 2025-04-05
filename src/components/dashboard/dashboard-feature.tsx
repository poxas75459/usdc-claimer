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
    "4it7cFRLfFXsAwopzv5JM92xaPbGdAF5Epp2Um9tKexHukikTAmX2paUQwrazeMQvvhCRHr7KMNDQJGvZqbjWFs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgsqLGTWVt2Vj4HhFxGqJ8e2dmqZnCr2biQvATExwnTRB9BVxFwiojecpkZCqG6nC7NqP7EaEAh87ZeUPywmK7s",
  "key1": "4VhU5Z8ZBUwTJyFvxXPNeNjWqxcRaLCtHdkyoeC8SASnH58H6hiZu5yfBSr39FMZe2FxgS9doyRZdrXQCX848hGf",
  "key2": "4yLGFUQF7b9A5Lo3sGAGafhDdpXWCyQ52uQeZ3Kv1t68NVyyrSwpyeCuUG2N1HLJaD4w1wbLcqavR6avspcWyLFN",
  "key3": "2DfuGFyBQfovSDEbkeGMfNqY4XoEyRQrnwTGEj81gyXTcTskskLTncndqVsFt27HU7neqHV28EHE4PvYynzdaUhY",
  "key4": "3REXVy6ifvncriWyKb9s1PWt1Hfudijtb8oU8mSD6fhuM9SC27wAjZeN45pRT1jLJ98f42RPKo3yu7Q2KZJba7Fu",
  "key5": "Eopy8iMjSSrpkqVVZGdfeod1sbWV46tsiKzEFffyh2G1Ks79XDCPygF2BeNfCa2YsaNPubsLFdkjHVGhSyX3SYT",
  "key6": "5bC3pjB7UurJyxnHxJVWPyyCcJeCqkTS2usAs5F8r6ax7mtBCv4sk14pSWDo5b7gAo7LRDgN9YAM6ZJSkzLtoq8v",
  "key7": "3wNVDKMuRDJEU13ZhYNMnWCuzcWWD8QEU4LJPu4AMvwkofiUD4Rpg5ykGbdPFJ146Y28G9hwDNiHgpzAREWvg3b1",
  "key8": "41dnp8Y1vafzfvLyYRF858h8wKaReuDbbzVcgLsQvSyZkxDHnJvNpyJ2JZLshUivZLqSb1vtWBHBf2e3EBcoQdF9",
  "key9": "YYMwpEswbSUTd1zPgpgNgUbsAEHf5k6XnGjPAUPc1pDPs3gCDjXHXT1UEJCiFNbQ2kfkwNsiqsoSFgciLgLzyZm",
  "key10": "28g6sYVmjuiFh1YAa48m5hfUdQsTVknSVRfaJZBmuv4mHJCwWLGRpfKFtxARBQpoULxBDQmJiJjWmvT2cw8TZ1NF",
  "key11": "KkZPXc8UNZ8fzE84pih8zZqyLZ6FdV9BzVjNPEev6FTYNeKmQoumvxQuy8asjKpmy3kA7Xrq4L3v3bfYJH3J9vS",
  "key12": "37rsNSyJtnnmf1j1z8JjpKxJznvA8XaWAyd1AHGh6E9yeo9GdzdA66rUBUeJN4sUuDHamNHpGzBiKTDmEMo4V7nU",
  "key13": "64rCsBsb6Eu1Dh53nEsT2MGutcyyKevkBT5nj8Emno44mvcJkz8Ae49UGscSerSxPXbnn76TABJ5Uqrprn5zBVdZ",
  "key14": "3jFCJzgdqSe6Ye3RFXHTZSwoF8R4a8WUPcBgx1Ss38exYpx2XokQFA9jtM7ytFXyU9qucpg1mb1o5dEJLoMMD26b",
  "key15": "5Kzkd7LGA5ssRefjzhYT6x8A4yb6HAyCSFopAVJTYzfFbLKUTrTgXKceD2otZuDe1VRuABPFxscSnmzqTY47i4Ky",
  "key16": "2DDvdASKj4qC7zYPEDzDmALBaUYSAKYnTreUsGM8njsvx6orRmohvS419Eb3ujjjitNdccxa2ZL69Vpi9qbgtz2M",
  "key17": "5EqNBu5p3WTWWgtwNpDLsQyxhGYm3qLyRaaqtcKCWUBadZthkaGY9LSKM86jQxZnhDSpBmaSSxwBBPFZxVVCDH1f",
  "key18": "5TvoqKxBEATByUqQM8jUBiPahewCBbpdP13u1nHherFueUHjJjEEGAL63aTYbEYqQGyX2ZcCa2ktQRYE5sKZphdA",
  "key19": "4EGSBwQCmSwcqqixbQ7c4EickmXBTyrQPGFRdYFMHLgoQAKS4LSMffUVMVsq1EmU9DvkQ33fCPhFdQx3UNh3iecY",
  "key20": "Gi3JK3ug7HFeYtJodpfhAYUmhCgnKYsACDxX1rqZnebGkrWpFBABtGLkimNUoBB8sWcapmJuc3cL4uEHdj4PtUW",
  "key21": "TE7EGDNv2mp8t63voDDJeiH2uw1CT5zaBuNDUUNJyfFDbxTdqP1Q1JZzoYuCqWM8mhZnis6PVhLPNCsvyPB9p4T",
  "key22": "4RpHmtTCN6x89yNqZ6DH296bS3JGhHreuejQFcMjgsU7QyuKz3SfSZTpfryNoNs3weTamGfNhACQYqoutJbiWSLu",
  "key23": "2jW8Cs9gwgPzJPcXEYDS9qhp3AR5ZcuNELUuVU5mSr6uaE8WcwaF61QPscuvFkYeXwKAdSRWFP4Qzt2iR5bZxcPD",
  "key24": "CRw5qxKoAJBoZARKHecbmBCQenbW66r1bwq3o1MN7JpHyPPsQidazJvhuzYqd79atBDPpACjUKGThxPtFPjKkp4",
  "key25": "39AjZYJkeUecm6mNqKFMXzrewVJevkX11QEAQANHJGzRvyWtRzgsxFnJHwjwS7mVJiSeDet14Jptiv6RGjSDCqZd",
  "key26": "2UmfYxy8vjFVnyRU3cfXCqJWq2aTPcbXsfcC5KMv6Tsgp39aPwAoGZ1jqS79ox4PSnprfbaw4tA8BfBtZfzR7qsi",
  "key27": "2yDdVXPD37DvE6LDSo2tVMPGb9VZ1WeQgLSPe7cPp4VAheY3HxZ2xNBM7sDTsxsMpn4qxGsvp38scUwveAsMCTLb",
  "key28": "5V2FaMw91qMruGZJeUnbEBK9HH92G9BgSU2oFXahJ8WaqPQ9e757xpVaKZWV5HEJ4fH47Y2TNXBn51AJyXQqZhRM",
  "key29": "CDwi1CZpLGmuPmvofHZ2RcNmqx2pVigd9y6c1u3ba9VmkPetuMiUsvYgiFzgnbxo1VHM59q8uZRScKrZsWA79aG",
  "key30": "ryKERRNUMCG8CFppANJtJNLrPtMAhZ9ce7qjBCwXjT1hDkj19k5EYiTM9G2sPao8ciFEZZfav1QgDvtDMV9oz5e",
  "key31": "5roCak5AgkCraiajGFzhd2pkZiziSTWQ3u3TgPee5Tuj6YVJLzYqFWWewnMHmQfHBbG8aNpNrEUjyD4maX2WmHFd",
  "key32": "2r3iKBViprb8vPqrvALWAyvW24HfeY6KZsEaRNdmJxAXVkmaw7XJVdoZgJqjBR9TCpSFih22x6vg8KjaQNLLEi1Q",
  "key33": "42MH34VW5b8w8pFqhmpBcwSz1cacASKdqSmC1cpUSMaSFFP8vtgFa2xQXpPWAZGSYDkUNJE6yc7YfwGWUACfntvd",
  "key34": "21SwCxnBkrtvc5D3Fx52W9QLYzbaxLJxYjJ1nybouY3nvtTxj52YGMypUJMqLGyhWry8F4756fjJ1HNijRXgb3wL",
  "key35": "41tMku2onnLhDGLoDPQ2qpmavZq9V1CnXwr52hL5XtJaGfPFds4BcC8mYBQtCNZNTf5NZFucpwqCmtRYzyULBNJL",
  "key36": "2YG7mh4VgUk1Nb9fcMUhBhh7ZZ9Rhoqzb1RVXzwUamzh45LSsJvNAdVfS3uzXC7B5EwJX5ArybgXKAnZdCdHNvoQ",
  "key37": "4XSNPtKp8acENTmiZqEWdKDVNu91T6VQbVQXrMHXX1LNC9SXHqvuFurafWKvSzyFsBJexYfREDHrSMXUR7ad9Fq4",
  "key38": "2qh7h2jRHQL7mPv8KvLkaJC5nM7p7kVAfc52ubA715D9gV2BRYZUG9ZHvmNtx4xfZk8CNVz1af4YSZiz1rgbUxeV",
  "key39": "Sj5PAnnT1ABRz3nBN7deiTefEW7mAU8qwa4XtaDFVzanayHJFpsTxUrdDCdn6HEu4nG2og2gozqSEEq4wEu4k2G"
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
