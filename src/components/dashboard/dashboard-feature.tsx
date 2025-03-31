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
    "w9xe5NpDXUtPtuUcosuTvdNBEkKRHwr5pf3Ef5u1LSF9AnBRJ7AyQrEpsGfeLMHqpWuQyeBYjX6nTPJjchi4AHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GEEDRaD7Evr3YdGWV7kc64VSfWk1SGVVFLWcx6QqSXvgadzuxtGSBufqnxSk4M7WmNjjGjKFszUGoCb32FWAUb",
  "key1": "5kwwoZUauBULYSzv9TiyF53rTJoNVfeAwcrycB1Fv2gGE6RhW6g6bArHnMX1zYYXmdZneg3d9TjBH8pDnRLTEWHH",
  "key2": "4wX8nmpo4zUXqEHrXZqkVft1EJtQZ4WWcjFTbVP7q1w7Mv1RcjCX7tqVcRpZ7K5JzDLDjf38rM8jpShNANFTFVBp",
  "key3": "3VUfjTw7LpBwuZhn1F6vEFj5DGSWgULfR8b68ezk3N8en2UKES6ghwkaTFCFpaxhKkTNDm7chqh18B7aUMZqgCha",
  "key4": "4gknRk2AiW4oLvQ9ocheXsE6AbejMWqKJ2UvazLoykZSciBCb9wZJr7sZXQdngCPyuZP1kyM61VD9JpeueaHXbt3",
  "key5": "TUfmLgQDJd4m3sNJLENSRwdBpJ6Q1S8jBogH7MD1cNLo5oahsgfgvZfasCZLJi5z7sowuMA3pzRnujQRG3C9Lwv",
  "key6": "47kZ2vxA84RKh36Mvuw4wFs5M8pf1Ltq2Paf2AkNqqBitQoK7cQmZ6tn9PTEMQNZjoYAtM5vSUYfMYTHgUz778gf",
  "key7": "2hmtnPT8P56XeLc6cE1hJXrdezdskk4KaUE1AFsyjZQTVFnJ3BvPeiBsww64ircaueD6e27VNarbkbpQ6Y83X4aK",
  "key8": "xjvz6f3LzEMc2P8hTemyWaidpFaagnKG4iwSNqDLcXwtQ635QKqn51hdBthXkEmNGZbcARt8RqF9j6nUVUoP6hh",
  "key9": "54TrfFBLcBgvHcuJ3rPQkeoHJgrxzxgScqwvQ3F35Rjxs3puUn9n37FPVysZiMqo6Fnw8hsYWTNkKj7rG1Frcf3u",
  "key10": "2hTqpsH5LxeyhRYkXwR964UcJgXqr9Xi9wpyspMk1MkyPdtosgxwAL9MwqNR5wDsNHhiLbDgdWEbEo2Rqg2stVZs",
  "key11": "2BjpFjyFQqFUPxssRPPsEggkH6roYttXAJmUeaeArtE33hseZiC6ymusdoeyiruETWJDCRgamarT9acYV48oQ1pC",
  "key12": "wTvr9YCuWt7Y4eXffLMqSXB5HS2NXfRP4UvfzvaLWisiepCrC9nLAw6MjFy7b6Qi8Sf7Wza323DjRcBgFeQcaM1",
  "key13": "4iT2VeXs6TsTF1WLc8oGfnzzCs2RDadQSTzrx9SmHqLR7VspJ6mcmPTzSQL3BkDnNmXfMixjnzb93sccdizyi9Cj",
  "key14": "2yi1uk5DGiT5uA3xNjKpFbVN6EngxjSVJ9epoTTdhWuqfdU4m9M29W8F4PTaCcPVRxhe7ubXCNZkvjstQTEnfZwt",
  "key15": "65HC2mKvimztvD5AA3iwGgARoaewA9VpVjdzcvdqzDT16CvAqvDu6PUfb7YPPBV1xU76biMjP65oPTU7zXE4VryA",
  "key16": "f8Na6qWeRGhRD7W7Gmuw1hCGDizC13RecMVaPjKsKA6LLUDqShbq9HGQ6DyroHskRmccmaxUK2acX6NZ9x8MM62",
  "key17": "66HjRm2mN5RDn1btxNWPH5pEvMpo3GSfxZCATgHVtLMkSYKRScKBLxbqTBsChozSiWpoPeHwxR2DioPyWxsGREvC",
  "key18": "4gzQYuCCLYArox7QhR5ozaCqYqoZp9BemtMmy2g5Qqo1Uxoz3PwFF4rVitqgsXptbZATLEnDPHGWTE4sKXcg6vvj",
  "key19": "4is5REk4v2GmMFakYQxkM9xtUKpW6YApiDw7r4JLFqR5dHt1FSdkqvKkV6iPLVYqcS4nobHesELNPHaRcHwQoBzD",
  "key20": "3YaoS8fmETkXcB5FF32MnvhHRxaUzNcbKaueDuaLZLk4qjhj1bM4AapDA71bhZNhow2noFWy6CeznD2rx63p4EDJ",
  "key21": "2XeHsr2mRZ3oGWJrNoqYGWjJF4U81Xo8dHuvWEtFwF4mRDCWxcV12Ny5gQTGKhBxYh3rFxrJRDJaUWsFuVLifKF4",
  "key22": "3NBstgizu1KMsrhmAFgTNzkYyNS9tieikkZBPBwh67qYZFt4ZUKieSnnme19upFVdozAf4wvjapbMcPyLQFQWSCS",
  "key23": "4BHzViUZ65L2smauefnXKoKQ1UoTWaJtFqQ3b63c3PQKGwPemihTip99GwLM2TCMVsqUnq3SLs5SzspKU3oud3Hn",
  "key24": "3MMQa1X5tdvcoKMLbzM2wEEj87H6FepQCj8Qpv6YDrRgBeeeCjGi2Lwn4jZqajPvHu3W1XAoCi8ATC6wZ6nFay2V",
  "key25": "4TLzba1imdajFdBZkNAPY8BqAAYfEC3HZyW1zqvLCSUESKTz62NteAK5X3VTfV5fatopiodhMxwmxxUzkzD61hop",
  "key26": "3r5fLqooJ1z1HpddMtMZcvg4wuj4SuoBf8isr4yw9fjidX6obLi9HTXvbgRqoSZyQaktiJoZfyroGFXeYbE7MXdn",
  "key27": "5W3ZNHwsUBB72ZBE6tXz1d7H6BEiakaHDn5G7gLCsp6MQaqEW97PS2qstWD7dHxJgQpCYc6k5bfZd6xyWzhU2wTP",
  "key28": "4J7Fz1Y3d7raB3sBtYUzZCvQMR5cnFK2PGnu4xpTPWYRSejr1U1uRgvwu6x96z5rsk3SoufuCxHHhGEkP3P3mbnU",
  "key29": "3U4MwksCiUcY73QqNDuxTtZCyAY7u4r5G8PFtLWhrMuLtv1MU553Kn1BsbzbCG7Sf4UukoxLh9BtZLkpB8nCf65S",
  "key30": "6VX92t6uMzFEyK6fQBcQpyT19kwDD3nMCeTWYAKsH5bEmzfdcKEnQq9zNeFRZ3mCFKYRkqJm396ST3iYzJht2T5",
  "key31": "3HmDHXbaqUdaCr4UiRhNUYcL9wCdU7PTE6GtVA6k7JgEFxLqnQYJ6KsHzA9jhiQbPBFNvhw2Ke64zW675oet23Cq",
  "key32": "23AJDAsvKoJLgGARfNznJbbV9HpmwpBt5SdoYgG6XeSqddxWMA5uB98gnCf78wguR3t87MyUz3tctbkkZYzpJPW6",
  "key33": "5tPCW65cduHzMeAbwbMJthsKhXsJ6beytEmr5VLkBLjZmvfP2wrR8DpzKvQ9vRDUPuP8xkFgrjhjSsaCdvZwHRGL",
  "key34": "3mn3ZrHEvqKwvR3dLHnj6SU16tH91Qjy67sHn7pBj5aTGXw6wKeENrxN9MWn4dJR2dB3w14gnEBXAXWb8pdW4391",
  "key35": "4xoiJy63SEooUsVUtRrTPKSGCoY1k7q2niKkEB4tn4tCjqHr31VhmqG6anHLcLd7NxYyWfcYfdr2XToXaWy4iKd5",
  "key36": "5vr6iX6ms8xJyTyVV5DqXWQj4CtY53fw5XDYRqEfsaPahCC6jyC4DTq2rk4KdpkApQJYNdmFwEHPwbYYLtPMkiWY",
  "key37": "4r7S7EEnHGXXcEBw9RBqY2UA1d5aW8f3UAJWJYtAQDJJRsfQMvThiR3KFgzdjMW2zcxTx8Z5xemuycAccm5hmJrz",
  "key38": "3vxjV8UwGwmZC9vWUPaNNUmYfE9ZNYY8dMDvqKun94Dq5282iXsn4AtsLU7fYrQi76Y6Pb38SEsgeDPKE1HWrQUr",
  "key39": "2Wu3bStJi4SZpWerkBaYVfY6AAm2oNVAUtfJmJGMJhrpcPhvfpTuRpctKGZt4diAxTmBEbQQrcm2sJybCcDNDcu1",
  "key40": "XuuWR4R1o3KzGe9j8TVKXRRcV1ojRZAe1yRCMiZk9zmgvUvRzSdqiw1UtfbzqCiDeoVJThLt7sjWtakMhbKNCHH"
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
