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
    "59rpRwUFcsjp6fBx7eQjdPakNze3kRtj4PKWujn2UKwamVTYUnXjEDcHsQuNJuVnqufTeoQCbawudZZzxnhtpPCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37cR5Lmfn8VCPE55NYhvcELMsFeNxwTrLc6WiTGHgPMVwS3iHTEwWYLYMotFb4XiXUhFHBQWMFSsMQxdrFz14MEc",
  "key1": "4GuyzrcYmiQzo9dKL1oAi2WsQh6ccjfT7Wm7NLtNWScsriKxVWv79Eo3TfLZ64UNRcSnpHHEkczxEtqMySMFN7in",
  "key2": "4JLhCdvK7MifUwCk9cvpEHA7QM7igiyQh2oTfoRyK25xrKTagDV9rL5ZdeJtV1qHyhvw9PeDdjADHGjyh7YDzWZf",
  "key3": "2xbTMz53QQDZUoynCRNyscb8hkLh3RPnYBYZVbEhkbYFWkLvoo7ynuRG8KCzw1fWmtgXTEdHrdV6pz5SK1yGS8tG",
  "key4": "2kgasdC6yCkoTp1U4DMU9kkoiENVaVVPFoSqMQhDvWQkSx3MEUW6N2VGG14bJEpfBgN7VQJPkhQBLfePpJ8JcPYr",
  "key5": "zHqxzryQJwPQu7hrwA82ip8mu6TXDXUj9mEpQCWrRLGvi5Qr1zNEaYPa8iegnuV5KPhDfM6qLEEfRowXZxHtq1k",
  "key6": "5xU6QTHrJ8pGQjFkSxioUtn3ofHge7PkqtWsS7ysn2WMficUc9NCYAsyCFfRdChWHzzD8yNLUtQugD2jTGzXUizs",
  "key7": "2eW1gTuAnV6niAhXRWkTMiVKxspXpAxyi7bGT3bk1oHVCc9rdcQXfRdcd3jWBipG3Cx54hAc3QzPkGzQqRBsaT7w",
  "key8": "BDxvzEuSdj7YqVVhdygm7zmiNeMAJ7wmzgq57u4QojNQFg1dY17SqFHT2xQdYiN8c29sEJgQhmnwsVLa5bHLwCF",
  "key9": "ArzrghEghCyXRwpcLfhnkposCJCZPzwJPpX5HA7pYL6m6F2M8TTeRAovDBav2kn4bjkxaMysgBZXV7vVySqtd2D",
  "key10": "4R2ZU9xpaXFs4gvAeUsMjGNdBeW9f1KwLfrvKUCv3dnEFGwM4mgHkgUW18yH3UAUL6jcjLn3RkraW1ANf743KieS",
  "key11": "5GSz6bCf5ydSrdKC9iv2QAPn3SwTeowB3jBEeY8jxGh86t94WrDjjMafotdaEprEWnFj2yzoW1R1BawKC3hj9SAE",
  "key12": "2a8byCBTavmuhqQjcKYHuHVDfTwJXQPffYzy7mYTDWncL4Vfw79c3kWCTu5Mg4jwAdHSftuGaTdcZFpYiRXJPpe7",
  "key13": "3cBygSuiwhsosgdos7drqanadNE2Wz7A4aCSAnjpQQ7ut1SN2QtkviQBhfWXEE3RY5dfxsw9hoTBsgT6LXRaUzai",
  "key14": "3fo7gxqtyrxDWpjd3rhN4enGJyNqVxgTrnWU7ctQjsWzjUJp2u1cgpNqpJYYkZWMLUqeh8WHV2Zs4Wi8fDwCUgg7",
  "key15": "65jBG8p5F3V5ZoxGeRQB528MMtqo4gQwEdm5o9D4oMNmp1C2QteY8kuZyuYmLk5Zo7Tguvsq6fJks3jVs9UKTvQk",
  "key16": "55v8CZpGF8iY8YEMqxSTV5Xcep2oWBqibiwhnGJVXZCvEmrUp2reHTtYyCnmoBA5WjCvgr5WecWMeyBPfXJum11d",
  "key17": "3WhU63yWdbzYhhMcCqcbsQCxpfNbf6hjeZ9NAvrU83Z6hxJEjJSty7YAAgakiD8bTPFvVwh11kKHG4XeZmrUWGkw",
  "key18": "4TXF33mK3qiVSQPDQu12g7LsLJohTpQUFPe8bRVEQw2YKF1enHUyfKu4jpuqsSHE3rYyca6AkGsx8E4pcMDfWJRx",
  "key19": "Dhq6YWPx3AuNusMqwAE1aqS6dPZVVXP8L4M9exkHupMxYC5nGrCoXhCP8t9rLnigTXd9LWsGGf6BG79eGWBzHef",
  "key20": "61ExijJJ2hDjUM34RiHoJHS3EV2YpHVwsEpzePnvgtiaYi4EfGb8zK4jbp7kdSUXE3stnVzxHqUjupSJcbEA3ok8",
  "key21": "XKsF3qwiowNLMQo57E1gTqLG7VbYLkcXKumuankMMcf3VoXfAVapuz5PeHKH3jvrbaGnhjzzsXY1kN1BcV2S9ze",
  "key22": "3grGdTFnxVAiKEXLyeL34MfSY9jfNHhcLEXmdtaM54HZ5vSr7hycEbhbEcndWyrTivR7DGQ4XPXPUeogg9dkQYPy",
  "key23": "5LYP9veoy1LvK7pMxBHr8vEq3FeSdmJk7cJgoPtDc8X7JbGf7DUsQJH7v9R4jCtRU5Zn3vtp4PNqnPBDZRpx2ueF",
  "key24": "3TXiJWtqd6bWtxJP66BCxJk4TYiZpK9N4ZHtShBbnoanGVry96eQ6wnFnvYiuTgr7BhBAFppCMwcNNiS5N7HMs5X",
  "key25": "44kFHwDtNnqN44yZJwz2t1AqRbPs5EE8Ey7vLcmJLrtPvTNhtvCiwHDoJZicuhpC3DhdKXw2sGWa3AkVwRsYCN8i",
  "key26": "5vqtVpxyCcB2KmAHDLqiTbVhCmgeNNNJjj7upcFjGmy9A8efq8vMDH5HLspjsf5oJn6tBDu9dBiUaEfScXiHXyrB",
  "key27": "4Q2GPAY3tT48TCGTf1hfPKecbD3E2UKQahiQsY5tbzWhAcX9mZ2FNEt2MWBQ1Wc8RGLzj7WUgL9dQPfn2Hx4Atg8",
  "key28": "3BJyBH8eDm1qXRwbZNmYmvPoQFMLBHzK48HXiVdcuWWGoVCVA2HVetZLcd3KRsomS8Dav9N9W5xMHWcPMrLe1wYe",
  "key29": "EGvjHA69Jdv1Km6f2QSsUC9CAcSNn9nsRXQ73Tkb6rGPAQvPikqmD8FrAA2EewgSszfNyvgHm2qWqERABTodyNF",
  "key30": "2p4PxXRxs9ckQcSJxvpVNMBuPA6zARfpgPDxnyvWmCmpW2ebFXWLQcEFbVgEAoNYyjhpBxGqgDtgYh76gubXTeMT",
  "key31": "2qmTTfJPnFREW4fbW3RFA3nNVK6rdNkpVixbsAH9KrZBgh9dhevyz3wavLHkaCUhhgHfpb2bkNwmDfdU5oNLUphH",
  "key32": "4urA6qF2kwW1pRdJFHzaEL4ZoNEkBYjANeuzKdBLt6nc4ztQvYE6ZUomMG2z4D32jtCkw36NFEdauNkb5swC1DoS",
  "key33": "4DbhGduj9nBG3ZcqUGhk26zzvcBnMYP7eEuAPT5FuBCJdGtdfVZdK8pYsoZN6JXQAcpHQuseySxwWsNQr63H6qD7",
  "key34": "2fQUMpoBnELiQeKMWbkmnnYBRyKA9MCuYHoZ44NhV63kJpRXN5Vyoi3fFJ2HnhLHSsyvshNsjNxStZnxiXLhASdi",
  "key35": "22DsFa7cz34JZrE6MELuNxQqSLv8bdkD7iQbFyxUQXyJJT6Hvx2GL7Ga2K5cx6XXxW5MrVkpiG5jffvAb5G2yhXr",
  "key36": "2ve6S9KXP26EgoTzRve2D4Qbk4RDSBHYwjbNxsRD4cet2jpP3ttSQYZ7tgqN17duYzqghfaPmWS7EKQDvZFTRUxr",
  "key37": "4kPH2gGzN7d36GeW2twynVHs82URB1pKBAhdKNkxWBxeoW7BG47eXyGadP6s6e42mYrV2C84NwL1Ar35V6hsEQwy",
  "key38": "2ZwRYXAhqu3qjUNQeS7WZUfD9SMYm4dsQbp3vA8XmpvTdfzxLqnbaxvTo6npsjr6QQQ9baUiSZ5FT1NnAuv2Qhpj",
  "key39": "2yYDEWNkL2imREPmAqacnGmYPHa6qxQkaeWdko3R9ni7bnr8TU5x621JZyC35NGjDiTmnFhZE2nnUR5KwuC687de",
  "key40": "4uTmyiASE4on7jof3gYqs8TXjq8A4mSLV1UjC7BLEKYPkAFhqLue5ATvFXauTgpdYiVt4SahEX93gFocjVghpNoj"
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
