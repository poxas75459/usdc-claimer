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
    "4Pp1AZSk9NYAesWZEte2eZn3DtcpVpKfzxYAk9ZLVGCHYViLYnJzeMZnaTBcH1GQA6q1ATCPRghpphqnsKo9Byzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wptqPcjqMvHDz691xFq4FoeQfDkCcgYASKbiMBQRUBdjGLzEf8jVDcRHh4i9CCGHcJuJ6chwHfy6u96stRokUP",
  "key1": "3thYg5pW2GKvgHvRTWg2ZxMT4fN97UiC8b88bV5yjbXDPccn4LGQiE1UEtXXuxX2wzp7tPf1hVVufzA8uTdGqhfJ",
  "key2": "2MoNNxscB3tY7fKC4vykytzHuEg4h94Fk7BPtQMemQrswYdfuyipgDhgp6v1H7eah6osDMMpAoAzMohAoxKt2RYj",
  "key3": "54pHuv6vhMsmkjeJjseirSHDU33G7iWPtMAxhkrtDoYEm3A3bpGNKcmA4M6tNM4LzTFTWZB4AJQXJbU7VR8F7nSt",
  "key4": "4dv21qFnRCesHVVqzkzfc36Wd4QMZNqtJxSs5FHjbS4gVnT3CFZ2HZqz9QzFshzeYgyT1XvLreNr2bCLVKDbmpqV",
  "key5": "4u6q6f9pYHSjXDJ3bPNjtsjDDh11iHxWMYcfqBQLmtFvvK2vGK1N22dymemBQss5z3LzU8zHgsZXv9rFLD36Yb9B",
  "key6": "37ovkKwSBai1vLXE45oxpAjk7iXuZoKWqg8uFcpCJQismD9PiDKDzMvKdybf7FtN7ojEGuCP61Z49WiEi8uDbsUC",
  "key7": "4EjKCXdPHeurVSEbudwpm7oDQAW3UCYQA3o9LYp7LuvVgRHpN1M16uoB5wDs3Tc2mnuRsY57WJs7xJ1iV355z2h9",
  "key8": "5zPz5yYGjSsGPE71EscKyCMorbDvrvJKexxuUdVTkzk4wXx7VZdDWvmcJV8BJYbETKEjG9F5GgWRmNGwdNAHZCAp",
  "key9": "5d1hVymCgyn8ui6jMDv3sP9kUYBxfMfjFgGus8T6sED2nBSnM7GNrEfdDP2L5tY2LM76RXatiHVdFfQQnTbjAhkv",
  "key10": "4uwEgbapK3bB826jyaMBvPnp2mf7sCHbDEAgdVHs5ksHYMgm14NDzm2nTLth8ysx3Qndeg3wWuX6gvUzNL3qx2Jv",
  "key11": "2UETrFLP7G7F1zzfN2LoNfaMJ81NzpVtoeo1x4eYc4wZAG4VaPcfxDzA1qYuZSG5MrxgTGXRymBRvedpw4QdNtE5",
  "key12": "2RbfmFBeipCqiDTDX25GSz9KcfgixFWyWnPwoCeH1K97yVgDNQPW9mcHyKdFxcWv24k18gpFwb3YV2dNQCwdxfUT",
  "key13": "3qcBSYX1caH3zWHPeHRu11td6WtdiasdriCRNhr6j77qfR1gUrdgzMkDzqiC6P1KACyrs2hsShx93Qdhp5kkhN43",
  "key14": "5hnsjHdkbVqGGEffGqfTexq7qMaE2koUDdypmwzraujT3Vu8UYLzAZQ3ArRT5sMDutYrRJLvzTG64uuYe5TQ6n96",
  "key15": "2JkNyUS3tJNP2vFrMEkmG7vuFSafxYfg9TNgedFXtA3JkvFkLZT6Pe56PpMNPa2WdSvVE9BoH4M6CmHqZsa2vx1m",
  "key16": "2a6grXADoE4VGuGeRLgtR3qNYhN5kpmww1ukbnA6WB2z358cd1vi7ZtdxgsWhUo2Vv8UqYrcAJRQt7hKJoPFdmha",
  "key17": "5exvXTqSYBMgvr2LiW94D1MQRRTHNLRksLKwYHaKADebv3Tt2Tofwys8Q1zHA4M5wb9MBUG9UZer8rBWgAa5XKjY",
  "key18": "41AanfZswJ58cZB6PSfsBrepPeqz4C4W5gDrwkftUzuvU9QWv4z9jWtYUdK3qhqvvn7WVJFZCqFL2vvVNnUaumTK",
  "key19": "4aWnCVbaCNWWmK5nYM5xRM5xnbaVqLopwVGX8TwUPwjyA17GGKEv3NxW4xhwDRHXaQAKT75437v82FWqdX9zTH2w",
  "key20": "4DNVQwbQ7qbCcc4FadgLoXEpNwBbumNvH25fiFJvAtGvc2Qb4wspXWYNnV5hmY1hXhBcfBBNYC3ip5eyiSx5ZYft",
  "key21": "51GGwcQds4AE87FiBfycur2YcLe6QdmhALrEMgku3hwz19gjwyhmDZErg9Q81TjwfCKka47MrA5f5vBZ5csA6yTk",
  "key22": "5qEys9bLy4vv3PGGPPLXMhBAWaX2MZK59VZLDjXLR17XLc3MX5H5THTWSswEs4bNp7DkLUAo9UZCcUwJ214nNdgu",
  "key23": "zwZj3c2Wbadj2G3EwzHXFHY1z7qtbTV9iNMpTBwnfGDdTyNCLh2bpGebTH8JDAf67d14srBb1nWqkHcYqs8aE32",
  "key24": "d7wDryKhz2jLfYKNu9e9QqE7cDjj65zBZDe6n5XMPMuyjScZ5845UcV7dYjPBHawHaLeJaTm9BSAgV3KJR2F7yB",
  "key25": "5muvDMu9rr6BVYiu6jJTQ3ZhQXB7xoA2a2wvAdgBjq7LoRAnisJJhqtbjnCG2gaaQsSzKqvZCqU6aAQJuHSQ6aFm",
  "key26": "2P7qo6vvxgZysoTmAHyS45RH4RQgaPpFKmnF98nNjRCBCc62CJepj1Khsd4oRn1H17Tf4P8UVXgSvA4W2i8M3K9t",
  "key27": "5BiDkMuCLFVanTaR8dgTjPHLcJfCYfVZBYPtC6ppaUKnBcypkVgNeCJydBjRj5wYuFjEEyJG81QE55Et4dnjfd3R",
  "key28": "3v8iLaSNWt8N8uoZGuVd5JfUBjcEsKY91efGiEE9ZvvFa6Z4bqbd8m6b9rmuhF2YYpAWhVXR2arf3q8PRYHhTsdR",
  "key29": "gctX4eBDzkivt3Xj5KddA6Lf8ZbqhvB7pUw7AB714bQynJcCCJwBteCU3CyCEgvKSNPY4xiNxYPzMHGo7QRZ1sz",
  "key30": "4xmzUvHkBE8azLVy65gyikAvGvqhFB8ndbd7D28Lzu1VSvReDSJupTQgaihb5QapDp7EJzokCezhxMjm8zf8DQwQ",
  "key31": "3WMsmna8XFjyuYPJ1yLAKTSS3y4Yt3hDFV8rsgP3x3PDFaJmr3SRgMApvGzJSybJ54gciHvuYCMd9bjj15ryF5gR",
  "key32": "2U2TsVNCC3kJoVAL629aGVN5XAqp2iF1xz6VyZQqgXNPHW6eRpPWorUgDmvMnwXcuufB2sebmbQ7aNepcFcYjAg3",
  "key33": "43LRrjyJDFrkhVy6KVtnmriPSmfELrzMZS17XWQTjzT8meowdfoUs2mW8D6HodeNbJSUMdFABtiwEVBm7YfWNQxn",
  "key34": "2KUqk6GvYs4aNps5ZZatUbLawM6oKKchqzgxJM2ndUbGzqEmDgHyb6aNkjhgyHVSzjpFnen2aryZr2FBs81XsZs3",
  "key35": "3a11wtxqmGSxRA7yJegcUBcEBpXpD7fnttGrN3EP8Szk4rpLswhDE2rG7iTrtFki1v8vByKYcFrCTkCntJz3YgX7",
  "key36": "65bC3byv4rXTM5cH9sJsSrkRLmwmcmVeVrZUXZADLsvMugUpSzFiNvckG1BSYM9AJCXNksrVSyQEcpCEYYpA4bkC",
  "key37": "4UtXxqMTZDmC3oi2CcHz1D5dHDBjozQkUk4Bo22biNG9YKjhgSnCEWZq32Tn2RGTDf2HhTa4M58pQSaSVsQ3mPQV",
  "key38": "NXcJVuvuqqxPitYHoCYmPjD5K1NL47xQCnY4EiLsa4u2AwSCms6C3pjWQFRTGXjxPxhL21VXCtqPt7ApWDwZHUY"
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
