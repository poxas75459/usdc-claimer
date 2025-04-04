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
    "4aGhRHDTT5Qfpcq8KVqnVpC6fGd8jFPvJE62L4m9JmeF9Mbdm1LJCoqsoX56njYccFpY9UH4VoekeX3UdnXh5BYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53t4zHUn43XbwfcrFRWAz6CQkMboqU2RWpYjQuASvZUSg2pDBxucNMRBbwGMVcMRUdZpC6usMrzPfYpBWBBzJHqu",
  "key1": "5x8hZreUHCLNzPEaXVcvzfV3YYJxGpLQtBj2jh48smJ74eoGJMJAgiTBPX8Qzs7NTFf8YPY4hab44ozfyALDFixe",
  "key2": "yTzQZ8LreGWucaxtznW37KDtDyeg6bUrEGHb2h2kLpVPPC9uDfoqXUbqNCd66dwNqBTqYsj4ahLKt2FtYxD9gMc",
  "key3": "2zf6nBWHbSEus8V3FwXuxW8HMpYyaWXpiMHHXgeYWMzu7BkHR2dZV9ceQJeGiA6TCeFmBqzcqg8VXPNZmW8iYXH5",
  "key4": "4FcWm86x35tsHZLAYwVaj83oQNS46SDV1hi1cTtFWeeD6tTHKK3WNakkCq6ZRx8DUpdH6ML6YFzTDLUwjSzjnDKj",
  "key5": "DUuSPVfur1vxEqwBRV1pc7oZSdNPbFQWvKDpo22Mg68Y9Dgkek22K4BWdzycAumWoP21Dp5fJz41eibDd2ptWbj",
  "key6": "4DVfJuXadnNjwTuQogvPyNeDPwqtBZUcbAMQV7nZDo1d844t4StbB3nsSJrTEmWrC7mmfdyfbtkeb9r6hbkRhYas",
  "key7": "4AysZTJP6k72tMCZrXgcs8TM8TnDUVoYo9HvPwGJ5Yehh5UgQcJVWQoFqUmYPsMbghD4ztBdPwiifyDD7jrfWqV8",
  "key8": "yiDj7TjkjZy8WKgXJ43ZmLKcAMY7FCNQUSL5g4MBTxXmPn73EEnaGWW5MDapxSGGKRLiiVeEDyeErJfqig8C9bE",
  "key9": "5uGZZsB514zckP7gcP7JMwYhPnyjQuJ29znX3hXPzjR9E2gGa5V5Z4rFLz94DQe8PeCCxxsjmpicVjRTxUPxLuiv",
  "key10": "4RZ8KoLPNnHVz2oDceUMZPB7XbfocUpjv48iBgeyAiWUwA6CkFu8A2e73NatYmipyVM5cKFPUbbixBdX4UiurMgC",
  "key11": "5q6ow8pEBEmxoD6skkQytpoMkaRarEbQU8j9dn3Cn96Vs45AQytgME8RkEKorXKwn9ua2yChw7xKvpeqbNS2XpbU",
  "key12": "2nQMHhZJUbL44LLBQC3zRhQVvDXWBauXN6HXDNU5GFpkkbAbXidKL9xb7dcWHGvcNoBqyzX99BGg7UuiyjaLwYXs",
  "key13": "4NV1nFe6EYcBr8Z7qmohbQVkh9eumnYxfh6weZ1VzRFDAyj6PnDcK2tGDuMDXVnfbPXaKN87YcVKyxJaRAaGJmDQ",
  "key14": "2VZyf2U3fmFrW86MFWqkfoX2XqMCQiXZTibYHUM9GgvRaxxYqED43aEM4d2dN5uMpbMnPGNdcr2nWoEvjLewqyQv",
  "key15": "3B4HS5pfhQQJS1RPyDwi8sLmnn6xd3GsUdirSGqANacCP8VrYe3vF1fajp9wQFX2mPL3GyT9Y67feYx2pKYbyvo9",
  "key16": "5tURxcYJJSBK7f4mHcxxmJ4VSnNqwvwWUMcmK9poJHLVqaqocJbrzomqwz8F2dXkPezsi2UJ2j8TbHfVPRtTdzNM",
  "key17": "5hi6dv4oGQJqTYRE3DaJrd8J2XY5m2gsbugpsENBGaKG9FrmX4AUjL3Cr99hzQU5z7RM5DxHqsTsZuHiHgpT1pxg",
  "key18": "2Fzysfemp2XUnqt33BaB5J3tFBsXz4pmHitv4EkfJ2NAFenngWHUhjZWUrGGqN8Ft9o59Eb9t5tfaV4HSMjyTZ6i",
  "key19": "2zHy6u1Lz3nrbuBhjJHz4gFqcHZsEDdBJnqoG92BQKpN17LxSbBavXZJf7cWHdQyCJ37Ha5YdNhUJCe2bUHv2oBV",
  "key20": "67VYifXcz2d6rRUnLr37VMqosBBZGJkEu3x82wEaqxWY7uRGFVKCRDiWSkBXG8CV6qtoBHctFXa4sRiQ9XhTGAjF",
  "key21": "PVCfRsefX3NhsqL9yZqwNx2H1UxeJHy12jioiRbzY6DaPuRP8qT2BeMBcwoxf1ib7zmr6o1sCiwh8ysAPZ1erq5",
  "key22": "2QFHEaombjgpL72weSsJtTdvbxY8KvhpAyzkDMeeeJNSjnReSYN2QEYQN1uULqoHneEas2XURWja5XcBZaKuGDP8",
  "key23": "63Xxpbvj8jknfdGJQ7Z2iHhtmHkcSbYn17avcyNaZm4hozdvtxGQjo7XNkwrechFdZF2viYAcab6dL3uvVPoSvVA",
  "key24": "4tqiumKnTtfj6viDoj2buDzqZMWkkWtuwZm5p24XtuL9v4CKUvdzzHGEbNGifPVL6oemtd8Z7SbV7ZiJmovb3rSZ",
  "key25": "2e5KmC91YFen9aroU847amgoD1boYsdzcEcJTFiuArtiHPtAcTU4bYCUuXMatUnEyHp16ygPy6qiEjwaEeDv45iC",
  "key26": "4Ei8ur747YURdmn6eK5fV3U1Zi7xKezKTKsbLdwko7aSr4n6ZiezDBZ3EtDW8HLJBKR7dS1bu1iLbF1uPuni8h2v",
  "key27": "5SBGDzBQfqVVpaCKKUCi1mAMdCS4xaMFequL7PLAyqvAiT39HtSJbNQsde7fAPJKaCcyj3AiAMLrRG9Ye8ZWLpxx",
  "key28": "3mh1US93yQaMoTAZL855BeXtoEeCC2VPmAiwr9AEA8MjCGRGBrKFdHCNBQsDKbMPmLT8srE5cmm1GFP7FkHaJz8L",
  "key29": "5eTE2g3iJhgdqYKhkZN2tudDXBLQBKwSdFem8N5CiDoDGT42KPReXmznExyxZFtieSomWJEtbf5ExPpPQgHQjDDY",
  "key30": "3jBmCP6bb1E7ntmDcDrFzKCJ5yT1GaoqcXZCqxyhweLnUvisjEsXDPW43pkMsF5XWC1bmznVZBDpQkDQ8KQvjyFD",
  "key31": "5m6NWX18HmSYnKdz1ndzZ1u6poAp2jTgdRrGspjyG3f3DAiE9e2YXghsgRbEPkLecpAh9czBHRzyQKSwzV14ihEB",
  "key32": "5YGRqz36sk38GAzXsoZfq1iBh9bNhjECJmpvwBFvcZNtkejVq4DWnQGm7WMBT8jiGhEfhQPpgcP3B5bPLjdTHAFp",
  "key33": "4wEwRhky5ZDnUtQvxcgMcCk5uWURiNXLCGHXDJj2G25S6MAHJw3c3vCyfAZcenJHosyWvvtKjkY3gviYaLMSwwxT",
  "key34": "2c7tHbkD7jLusWgVKQGTbtpsBNDVikjmDtYHFzAeksLau84wssFGdfp7RDk8JQXH8YQjXzRm6wH8xLPNXX7WP1i4",
  "key35": "3ib4dDQLr7mX7e16krgD48xsKkbR4FLyjUvGz7Mp47NY5PigeEW3mybKUtdbaLv7hz4UQSDAsxJ8DxT8a4exS5e5",
  "key36": "3uXNcuKmwwi5FxJbJHPQUsdr55kqA1NY5QXsdcB3eaoSgYj1oabmR6xANG6pBmToWMA8cWBUFhzE18P2WxY4B6rN",
  "key37": "58JJfYVWDdbBZ2XweGN4JN8EdJJ4KE9YPZbseJ7KCZbbjfh7ehjwM2zUGz3NVxoiG4L2NMg1mnGCnYxEF6CnXREx",
  "key38": "2paypn7ofKzbuxaDAxewV23s71vi3AYri1pgCXN1h3H6NoVy9p6r7FtWZWd6JfmWmw66GNrwLGsKfgyFK1jBAxEQ",
  "key39": "5hp4UszbioZW97by8kxMGyDa7YfqHCSJ3LjvJudTMDM4im2XRZgcvuKkVCUxuVcCg2WrWzw2CmV7GC2GrPoeWEq",
  "key40": "jyhVVhFGK5diQ6vhJizBTAW6iVPUt3R1HSyh6fMYYHRJkHBdzDcsSUZgLNmTeYBZsE2nJrDqFbV1MkvqWqBGX5B",
  "key41": "4JUbMPPCoACt3EN7qWUtb4LFGm19PPJSH4a6xQvBHTiF6vVUeyZu1dqkmNxxKLxoJyopxrM4QZcobXJyZape7iSn",
  "key42": "2MUsMZhepL5FF5WBmbHqZmLYXzDXGnVGinwUShC4kRjCnA1ckcNUNac3Qxv3Q8dGH2YSwDAKVanGFVbCuGQd4t5a",
  "key43": "3T5ifcoadagZqLg6yBQAGEAorPM7bHVnaivfKMdUt8k3GnRxv8mVZMjkn3X14psoG44o59ttbLrWEdMZhdTmB8cd",
  "key44": "WK6n2af3p645vNfBcu7grT5Eetz3wWWrZfpAzaw6xkLj9W2AHYbEjGTrdGw1bkGQmbbU1aGjcLUxAhU5iHrCeQH",
  "key45": "4q8g4gNBFa1QftE3TwRokfHLjfRiSCnuxTvrpNr2cbobDBSMueby71pWi33tYQmWi5gPDc52dcErSGMnJd8ZeXor",
  "key46": "wgw5MLpC9qHV6bdJ1J5de4fyB3vpUmxKS8yn1Mpe9nBJewBmpvTocmRmgDv4s5Bc994QNyCwL5ErVNRHVEsrRuV",
  "key47": "4z2RdXG72jfxJ52JNZ7mWfhfxMam8cX7Ai4daxkKKjsCphB5z5CquNHmwzY3SvFZRnMmAzJVAsSckhwC82d1Er6S"
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
