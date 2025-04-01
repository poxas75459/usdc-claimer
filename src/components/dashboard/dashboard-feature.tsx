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
    "3wsBARkUPwMvErHZyz5J24VdmsairDHvaVHrzPHWQbqLWjtJ4BB254SF5kV6Z8CJFD2z7ipiM3GTFckbuaUcXqn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJVkX9mFTGcwfwgtfefWXx94hFHUPJoFBH7Boeuwz9dY5yYiqPR5Wb98hNFBAUoK7UwEr4F4mo3qQrSXYuXgQsK",
  "key1": "5dAYEF4ioeBbRPY9FXcHN9CDDL4KTHVCazoBhx2Xev3Bsfas7eYfARKfbatsosMHKSgG6Unwrc2geQNyP6NsX9HK",
  "key2": "2kiE2RuWNAySZ9jY7Qw7VAg8pvPHzSrkfmYcY1zCv7JEAUS28ZLQ8sjaFgofNbRGGb4N6HNWB7auhvEVrskfpwts",
  "key3": "2gUqV5uNVcZLyCa8eH9MkbFAnAuuErWN75fs3ebUHJmZ2oRtbHRrKs2c2B9zg1UqYVAqhQmkpiwcF6gdWcWHp4Zz",
  "key4": "4CVsCCir4ifdkfTBzYY9SMZTKeYconx1XrP1BnDtoDLnwC23P2bd7nbVKMj11HjQguiR7PHwCiSDjRQj8hzynMQi",
  "key5": "fncw1hSjkGuHDdG4YYvBoQKrBahJiBMU8gqD3jVL21H4yxR8dmutFJBoUTfKzjN7wFkxjuceNpuwSNAzGaF1VZw",
  "key6": "5rspdaWx6QPFr2EgiwRXxrfJCmbSjJ4M2ZXtj2EiSW5wvvXiTaD9a7xzQ6MFpCHq5EwksCizmvDR9jiZTRECgUWL",
  "key7": "2P2BmA76ktH6Avzqt4yK3CvCo8MJZBVihMTzNALyDkPNy6p5YSDD1xQohkE4WjDH4sXYk3ZGLx4HZenaKwGkEC8i",
  "key8": "2iPFMpzST2NCCp5L2PCQun5c8wBewxoVGfbVCuxpDPehHFw21VhLpVryibaAqsXB9tNS9EAdkpHpGueiL7X1vSto",
  "key9": "2zuspBJtEKYZbbvS7UhNjQcytZXGXwb8Eod84nnTErfa2ECr2HTLBJyyBRm8ck4PkgJ1UdYwMrEx53VBv6wZxRvM",
  "key10": "3yDZRXckERvhg3joW6AR2QqWVVzhxCbbrvbAfB8jHqgY8WF85s1Un1eCagzK49Py636Me3ZxHwfExFzXFyNCCPPU",
  "key11": "UHvR1HiBE9gHeP71X95XqyPCGL1TXsCFCYshju4zrWTgUyzNgZRxkfxCTyVri1gb2fKyt6ozbUCkoqeVsZBNqmH",
  "key12": "3kxxEiy6xc7jjNqhqmwnk4tLh7DpP8rNoPhjgG7hTgg8GjY9qcGsNX5UM5dMm8JSsPqijnDsuudUFJ67WoeXEG2V",
  "key13": "2mQyY1idKzEc3JRqbbyVqkP7JVsNYorccTTpQUZHgiem9jgjZsMxkH6cCQBbpx75ugzcBX2UmG2FhTLVgxMM175b",
  "key14": "4Fmyy96KLgQ1p1rpZD9jJgYvMTFiin9D4nzLAQx3Gc9Mg4VToAunFQWmB5JA2TZCi8YQuov8Kvj6bpAT6cZG9oZn",
  "key15": "35wgrQJZRPXrQ2Bz6cDL31oGLPgvYosyctYf3Bt6fd2LXJFMSh76u79whsF5xciZADeksdvCkeDKJ9CMDQY6cBZP",
  "key16": "2WmQAmb3EJaifVdGr5NhrHB69cHtZtcf4osuTJ7AskJ5L9grATSZqzzSLuE2BGqFMP73n5KU31p8ZVdtrWfkzc2z",
  "key17": "xb1EeQt8gF9MbitkhXU1NuTRFrb3os2woEqXDixU5YJLYvsJUWKwHu7uBsKfi9FqPZPfg6EYwXeY5n3NSK7mTjo",
  "key18": "2YwjRXDzdP1fHsGnUKhfWzXtRGmc5GZJeTev4jLAjistQGFBCnFrEeRyHQrmeYqy5riNqbgdrMEe67129Q7eZoRn",
  "key19": "4MSx9xcRcVTDfsogmGdUxbYjzuiKeyBThUK1pj9iYz31JW3b7sF2L6SNMHQcJyZjxaoNSZNE4pNzyAvB35BPiu2z",
  "key20": "2wj9RZQ296FQ8AU9efUjLNjat5KjbuoDbKnBqKZwLKKJzLUySZDvPg3v77DEABU8EBC3hJ53udtfVSHA8CAP2yuG",
  "key21": "3yBR65EtoXedXzF9XeL2792zmN7wYKSqXc88hYVMYcCJ9te4591QRTaAmtH3SbzELc3kqdUhzP5xSnasvykkLfkc",
  "key22": "4PUqeLkiikZq3THvsTPged1JPNntcT6PpXim9k7anos1ozM27qrHZm9omP96zprqiTSWkPa9YGwk4cBNBRFK6mrH",
  "key23": "2XNes8mq6g8zyMMtbDbwGJZ53GViFNFaCASQ4iVob31AZsrWQmj3FFgCWrmnzPhBoRbAuGRxpJsARJG2iqtYZmze",
  "key24": "665RCfQ9xjmeH2ojGepM7QNQNGFrM1JBVvDzoRuWrnvFirVwxRa6PhQRDuPxU7qBopHFQcwdK4HBQ2ZEWD3WsDxn",
  "key25": "UYkkTsm4vDyF7M1nmEiTBxnPqsYGeeX8cR4oqNquRGiGJtKK4nVSteK3nh8kXmpAbfu1fAM1ci9hBJW3AxkYhbC",
  "key26": "2dBjjs2ofX6y75EQsy8W2ESPkGQnW2a3gbAHorcJG6ysr3fEuAaBPAoKhgBRAYxMJL7rkpUUuRGjxUsiZLoDvoKG",
  "key27": "LgZkDeDxkwfX7njLKQ3pbWyHndXrx5exp7HPaf8ccwTq9uk6NnEdosW1FUppfe9VV8RUnnCxUdYj7Jc4HNMXvAh",
  "key28": "5d7G2mBGXHiXoobku1nMK3o2Tis3Pydo7GCaeKBKYp15Z5bhBN4epgf7DYeJyZWtBrURSTeb5XVrFPiWs9kVJqWu",
  "key29": "3hyti6XAjX24wmRFGFSGDmez7SSr9wWKeeKk6HPQrxzUbpbgYJNFPEBfvjwsTp3Yt2fPr6qTTFm4HnTt5LnWP54n",
  "key30": "4evbH1AutSWNNZN6jo6ZMqH6z4VN8oADDDTUobCpaYH44Pqj4ReXr4hKL1NqhA23kKfQjeXZBib8GySH68867EPw",
  "key31": "2Efm6ifX3SusqV94ayuQmjccAwwBHQXHQrh9z4ERe4H8bu7ct6Pvez9yLTTNrL8XKUbWRKovTYksPnGUNxFdK24v",
  "key32": "atnjpCGK8Fbuc5e96QEfBfGQjFhx9bCKxWadotcqm4QXRe6C1gS74Q45bt7qK1sHijEGrcX5KfpQ4i4Hq8KUfyr",
  "key33": "24vnV822QGUiJC9rJhGwsBEGGE8PykecDXbLFzrY8yyUhcTrveuZ61x4C9YX5mRrmx7LNMU6A6fXmTA2Ea3FWSxu",
  "key34": "5Jt3jkfq6gbLYYGWkLKwHkxXK9kjkx5L4d8DZJ1t3wRxVGTj52344cp1ZMkN2YoFMAbvcEaKA57ErjLLUPcBJ4yL",
  "key35": "5F1RJik82mchepE6tFEpifjKj7ecZWefq87Z56XjaPRYZuojvzHZRewv6GThNMdvUiCzTRzUzwMdvKpa6yteGbAd",
  "key36": "3xxExMcjTxzkg91W1gvbseDEfMBivLNU4w9ZFiwLzvR7KmjG3ioYKLdy8FGzEbCNpj8jxFJFcMaFeHHrjyuV8xb4",
  "key37": "292C2VBZ3FmKW5tJM8gzPC2y4iwATcm4ME3V6BgjwTi8yBw43b2qhJT32681ntDfMAJhxHpvJvJTrtFC8pXGPsLt",
  "key38": "5CURdTuQ6z3RzEuMT5xxPPEqgdNWSBMCbFuvGMCFRnZGSXBAg4eryvkFKSm2nRL4Cq5SM7qWppxe4F4KvvJKzU4r",
  "key39": "qVTzVwh2siJXcWQZVJzSU6nBUFrabqam2cRgpfyULLVZRr8YURGmabTpDUsysCDcaYzi8U26b773mkwAXXsFx8c",
  "key40": "3LrQsHZkRMjdVf3NV8fiTxKmLjpVpSjHgP8KJmA4A8geEbesoNZ8Es8YjxqwmKXqb9N5mYbXHTWuZeSJBRWWWqA8",
  "key41": "4YXBE1eo7Y4Rg987K1qUmm5QjTzs36W6hMwE5p5cA6R4skoPytZ8oNzDuZ4QUoNe6UXaBLUD3iGeX59dTCWKxE3p",
  "key42": "haYXWdhv6geTAwE5SLDs9utCAUHEdLLv2Rbz7SdH6Tzon7nowEb3QqiqySJTc6ckJgV5DrBZ83dnaJBCo19YadS",
  "key43": "2ouEty3NsvBX2VpPFU3igEgRsixnjJD8RLMbosJXGHZuTwZ9zYNwdXXXyY87pGVQN1koQt1D3Wf9zYML7oET7H1z",
  "key44": "2SsUcrCT3mZnttRyKcCm34rrSe7CAEBG6vLgUR3BMc31ebTxL7bA3iQ3f9Z9BbmWfCAuasagpxXNizybg5jTWbuG",
  "key45": "4WYaWK22TUiiEKmf1VGeBNyoMFXkjHfho3M8GgAwbhB1zLTrdxWyVnErmcmZFmnxWJMyT5ohCvHLgLaG92iEezTV",
  "key46": "61DL6SR6LDZgQk6MoPi6Mo1HY3JuDytfYGPXRAMmguR5V1dE5SzyLhydQb3ai2PGnmGRe5ehD68zoM5sGoAmxCKc",
  "key47": "5CUcWPxfg1hYeoASCR8VaF7qxCrENd3z4qrLiudZnfkv6oBZeQdBzEpkwgNDnBMQivjqy9m1bnSEnhXuk2gF5MCf",
  "key48": "4NHMiSLwkibX44DguHqFvyNKa5zyhGiM6Z85iViJ1TZX5hCwDsiLttnnaWpQLLKHwY1BpXpYoZPZS1KMeVFiwkps",
  "key49": "4ua2tBsucW9eXHkMYHT8EmVRJx3XtH2i7Awxc2aaaMPiuqHEk1cKgjFw723cqxWmaEkFqknSZqDtFza2ZCas2aUz"
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
