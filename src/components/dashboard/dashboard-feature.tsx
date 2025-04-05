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
    "QefnbNZ9DvaB2UqLGLs4k4gg6V3DQFAwwwFrHTQmZdkS6pqJG1T3NmwHeS1c6cDo3vpi6zDKeYirgYQWTmPXq73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c7iGYVsEqf6TfWJGhDsiPHc5QksG5yGMAgS8ShoCmDSY2H2TS5yMHRPNxdJ9pAPpGUDppRK8qdeygGWdCQAt2K2",
  "key1": "gwADQQqZVUvyHoq91oSwrbNBY4q9usDkTLn4jUTJ9AKXeZoEj25XBLqfaKf989knF3LMYQx5gv5yHgPy5jsGjok",
  "key2": "2pAHLYpy3vpcUWQ2Zi31yTuPNVAvvVBcfZAPc7Eqk7WtEsRnBhxsDsi5xZdf6CBfmwtiJe6YrXTC1bcXuQRfHcK1",
  "key3": "NXseJSiEfUBhfUBvsjg3ocyhwdrdewSK9GgSFE8JxeRAhfjsGLUx9gKLuHofqgxZ9uKXa9WMBqMcvREffsipnF1",
  "key4": "2ufNQzMQhBspJ6utAQYgUsbkUVP5KZu5e3tSnTvaDFjjhMnSmMvLanF8WSxk54LAPfcZBzdtZP8JQU7vU8Hi5rRY",
  "key5": "586FnXMabwq3UGEdwa6eAnqNH8zb2iwkDVwENPuMATsK2JjsERR6hYTU42pP3Hw3896NPTffPaReVBTrJxXshTWA",
  "key6": "5NRaMwxeNp2aXo2rAxZJFahQkr1YiuheSBY3s7KTArkGuYf3Hh6CzzDfqTddP1iid7FYGcyWvKMAgFKwkL6YV9VW",
  "key7": "vqzqtv5gnVPpwrmcPmUird3XhKsw5BsCVT1UNevwwV5JJrC7MMCYUmF4TToKvY7uPa2zrk6mkzKDFC2TyR3jFN2",
  "key8": "57RnncC1eY7KDz8sRaqqQyt4a3aJkLgEnpdxiS4kxzbh2FzQ5DnwcFsgcSXjnTou1beiYfpbRrxPfNjZmLLSc6UH",
  "key9": "4gY2mKJSvKuBUHdnvzG5bAhm23E9mX28FjzuwSJb59qhTguY21ubMc5gfk1mZeHDHuQmMBagBSSwyPoe1UbDgeA4",
  "key10": "2Tgf24W79WELWxeBkmBgfqKteqCRD7JuDQzvV34MEcCoFgJqbefvzeDQBkYqUbjGNmPcaAicXbthUwvYNyuLn34d",
  "key11": "3FzQDnqkHijfcQE37AS2EfpTS3Noe7mnXpkdAbschxAZNB4Amfubfmqu7KE5kQwkW6HoU41wKsGNx7ua3uHwni52",
  "key12": "4G1bupYAmsT6ieJHe3jUB84ELvpYVpmWEEmoXq3Gk2fGpUyDjoGooRjmQMxfLqPdsqeUcAsLoVKVAkaaL7P5KzC",
  "key13": "2sSawmWqYMUhRUKiR78tbSWPg1FYLzXEzYG2S6z9u6WRr9zULNwsdrMConPAbRHsdu4hwBQzpYwEvc3VvVdgQPnv",
  "key14": "3hT6Tv7HmKKzAku2ti9aRMpNThkRdpm57tAGbsfUMQmhfmBQarHCSZe3JcSa8ASudHCLxhkhcNb5VTeUfMuvPxZK",
  "key15": "67kvLXv5JW9Q4YAyT7jw5fLvo12rns6zNaFtZ7cmvQofTw6ZULf95p35ZEpexUaAQQQvjiMth1Tpn3sX1XSmcDq2",
  "key16": "3ugXTYwB5G1B1erk71WM2sUHY3GKFzk54YpxoMERA7XTpZzFJGYdPipWCo4Vf1tt7Sfkk5j2TmiGpu1HdbSUTzoH",
  "key17": "5M3jhLaQM3KgcHcwE3hVXnBVhmFQTs8oH5LoAh6ZJGbJduTwSB3gtPWWnMBxWgzzpfesgwyrB5vXyv4suksCmE64",
  "key18": "3Py6ZvdA1SuAy4B41WfoLhRztevRkeArzrHPTXX1ZYdjVvAh4BdKmCv1FKNGyNZ7F7sqZytpoi4g8RpvntUKd8pW",
  "key19": "57xCH6HqQjtnNAyb7jffvQLLfJGBnaL5X3wA1kqAv7SQc3swrzQ5CwFCRjM33AQava4VgA3KjUv9zVbUw4Hc9zcf",
  "key20": "67fvhiKcggi6QNeq4cMiXZXf7RcH78EV6WkH75V6qACStAEC3mc38vAVGEWqKSuPPEsNrxK3ibqGrKFYUzMfTDDZ",
  "key21": "35LdTgoe98MV27LxqeU6ssdyHkeu2Ko5ami6yCV7qrHLyU52Zhkvft2nRCFxWf1HkSEykUvpZzvVwhSkAgnDSY9e",
  "key22": "2ARsXHYcY3acfKqEVmFj9eh2qrLYM7tF723hkf69dQn54iig2gadghCCNXdqqSddoZD8oYPFotRQLyoh9ssQcWLE",
  "key23": "2rCASsV33t77GQPbdkCxNE3AeGPYv43hDt2iBWnYKreWxMFmowegHwqbERYs4Vg2AigHoZ2YQv1ZmhiLtfMZH1d6",
  "key24": "5eW2nLewy2trEAhNyJJHsyrqzT5mKCtZK6SVHecs6hPFsuxt2rrTH1hPbX1SodBSM9Jv61YnAuYqHEuFnPhsRyKj",
  "key25": "HzmoioqrteKFnVqLLDhFgXVA8WcVW6ZeRHXj5DqvA1Jhwsu5XAucjzQe9xMFf2fzY36s4eiNW2PZWJEXpX3DQYb",
  "key26": "5z8EwcVgvCVkXZCj8hjTDQjYGfMyiTNnnEoynfYNPUGHGU3FehVk33fRuJRmP91m5rEp12sFsPAwRm9pYdNXjunx",
  "key27": "4H5Y8tsRKBjqAeg2Agb2FHBJvL3evGeUQD7rPjn7vVwNGsdAtCJXq3n1Bmor7N6xJToL4HuZsEV9KAWZ8KoiWcfb",
  "key28": "4xgTfahUU7FNFHnyP46jtacubGoek8mefxTqtixa3FMeuZj68pnAy7nSmaS1TtC6cdcdcNbfJPGvkQozvBKS9tTy",
  "key29": "5RijrN1XTEEjniEaepGTUbejeVhLnunqxqCuULQJHrAko2QWXDganqGLta8JAGUqorUaUtFLqYafE5h7WsmaKhX",
  "key30": "2kp5byL3oqZvpt9RSUSLietdm8tRNr9czpAGFr4zp1z6959KekhJG4AbB79VLYD51t4JguRHwEGuWRyaAN8GfudD",
  "key31": "56J7iXeNnRSouMBjAauVMqESNzx12tpxkRaz9USNeLzBVAnQE6p6bM8svDETmQcPv1UsTCzk8vwhzd83PKhLStaT",
  "key32": "5KCFMDSeeVPGgV84D6Acv8J48EHWafbgbWbqLb1Ab8iLHdSfyVmGarhxm3ex6sQCK27jLKU19fXzLp1FAry14aN",
  "key33": "ofLr1mqcAeeodeacgGXwMY785ciCwa3vnUTvNYRQsusMDFC8dd1f9tddk3ATbqKp4LppmwrLb9MYuiVnDF6b8Z7",
  "key34": "39rauHGp7jyUT64SrLNQyvMGZEsRuAPFZabW1xRiDPdA2MLwpAw2VRnCEwqDbguwrMncmdNmmtHDfQyLZQkwE8ZE",
  "key35": "2KMYRHPiXEvUhaU4rFrTR9jbeqbi76pwfW3tg2cHFhLteVA7FaxLPxVZwhE21C2JYwbPgqc6Hfr3XvNvh4VH4Q2r",
  "key36": "3o2mKCoca9CV3m4pTk9DPMQTa5S6He9zms5Ncinkt52WsTkN7c6HqmrRFvQiKkjvXHzUkzbbR6CoUiXoFtMXpSvT"
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
