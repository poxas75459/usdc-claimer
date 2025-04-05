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
    "2KTSVLfq7xkmqa4bn9wpn9TPohyKZR3bW9vMe7brAfnMLBXv83fas5cQcq3kKpmRJLk7A854niNiqQHtVVt6SnNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7roqywRoa3jDay3DqQaa9nNgMhHZEGHUokNSe5sdUyCXhhSYP4XnJ9LQdJ3XEUxM1EXEhqGEBqa46RgBcQM6pmx",
  "key1": "2HSqXRADzdWdfVaMkxTLkwsM6FYtW1a9v8EBQRde7SApGqqtDMEoAYoabHhiLKE4myK7XYyZN5WK1dR3Qr111Kxn",
  "key2": "4wmQcDk4rQexXgff7VsY1c2uzo5Qsdj4WNQGQjXMLGyZGPUWouBxoBgBfg4F1rp8qgc1ewH8CjiSFWrLAnm8yYuZ",
  "key3": "5NojvcdCWg2PejgPzArtGw8uJ3wDTUvmK3oRUx3t8QiVLmRJbLkUbsw9g6ZpWLWngXqaoRvhoQA9TM26S6q2VYfM",
  "key4": "47QzQScvpTb3zi77iUHHqpnE3LXF2v8MBRXCpC8yvYDuWbGgWJVt3jBa4XAzG83jCn2kLmRx6q3fn9x3enf4Vp3X",
  "key5": "HkH8345jiQdRCw2jrUmjU5JR2RyCkLmxVEcufdWSumMk7Ji9EuJjGznLZAMSekR4tDCQxrMf3z5xLoNCZtFPkoB",
  "key6": "EcRop8JEgyAWKWm4MUagKiK9ZM2APcEvHzvQEFTux61ThMHytywP3ysapzGthb73yMXauzian52CVjZi6rzEzRJ",
  "key7": "3ZwE7cboMueCMsJDdERvFwhPgC7VbWVShqPcBChsjyZHhCR2J5fYrrYRNiitEqhjb7xsr4H5KQAiakip5JWWyZoD",
  "key8": "1XFJ2vGB7hJzMjMQXECFHJk8aeUMDa53vMwB95r772PByus1MTivSSWeuzakdgxGHD67Nt5LvQAXrjNtkVDV3Ww",
  "key9": "3qEkRxEQRX2we3uAG6MGgcV8zS2wmZdbf6bZrbBueRMpn8WoMYPESAkLrRJa2ocY2xMoeZ1SNSYrn86PjMxJDLMb",
  "key10": "2TigbqAi5QNTCR43YhiDajXr4yV67uVu39c91Xqg1ztyGaCKPCeTwyA7Vf3vhdAbXfKpvJHBVPPMJd6GVZHgZiXH",
  "key11": "uGYTkWH7WVCNYxypYrxfHN1idpe1ruK1cskEx2BZKjAYNNKbLHMvPLXii4dHtGvVhnmkfBxy9kSAxi5weJ8nMig",
  "key12": "2KN5yKxdTB37GSSMruTPWAn8hSDceq18a68YtrgJRb9kVn3AgzVJXSYDyLJeoF4ZuRLBHsXbqfzJN18NiRKvJwmp",
  "key13": "4ch5PQ5tyLAjE1zwenmZ9omhgaWB7g7QUejBANB8YURvP2e4v42Z7h3RPDEpbwvF3Sdi875TDj1hfA55UZFjY5aT",
  "key14": "3VUP44qxWTkBjU3e34TX3WcuewnbsmJYrnmmNKDoSCFTkcqvVSBN8tLsuafKksV1apbfCuF64wgkS5XFNGCQRcjm",
  "key15": "2moiFBqDKMtVh6ko919u36AGyaVVAx6AqL2ggddXdnkRjr73tFsAuuKooLSjNhxp6gDZ5XnVXM3UbtH8XefmYhpe",
  "key16": "3Rhv8cUNXgzezy8LoJsrJcG7JjwYMLPuojVEs95wftbCV2KVUyiE8965FL4dSKBuj5Vghob7YfmUGN72GRYPj3yA",
  "key17": "3xDzicxmt6SunLobMM3XDA7S8tqYLVw9cCrv656P5u8Z3MEgez51cvSei4nKNppbXUzwiN3MfQUUf33SSL7me37s",
  "key18": "4Qnu9URjHnmzAsmF45KQ44V6YUHBgg4ALbWdsKbNqggyPahaW4npUCMSVvcTkZP4CjwnUDMEYcfPRhRcAvCSVbHi",
  "key19": "39MJvkcz3KuxNA4VN1gH8DcsFo52nuFqCEepZahnA7Ps7WLiTufBpGvPMD24ThPWDF4HR22VdjXrPQBTHsjW5kqC",
  "key20": "3pmtNS5fWEMv8JBQfDFYk2ERKyivxdM61DH7fBzhbiauPbEBUa5qUFQqG57U7DhMHSyot4HuRrkGMpM3wRAP3k28",
  "key21": "5XD8oid22o8Xn9sDd2Dzce56X9Hwhxa8pc2WZE4acFGkZTmNxdSV7v9JW7MWbDQBijg8it4iyBvm1iVqf3ohG5fp",
  "key22": "vwia96XQUBj9yeig3cMJLb8xdm6qTon8QNbu828csUaFXp4dvqK8NDyXFfPYrUUZCpLSejLuEZBjDJxwTLiLYPV",
  "key23": "5ucWe7N7XUtLBoG5ve29m9KNx826gRkBWD6bdrS9XRiiyKKstqbgoot9CrgDbd2cyZGTLmyUsCw4CeP6TLBaCw3N",
  "key24": "5PJLFRnjxiF9fmASvPatC3VbbiUe4LgNLMtkxe6MqMbkpZg51sevJ8TZ5DiWXeKgcsJh2vBB4cgfnBGX8WU4ZtnA",
  "key25": "rM6USMyvQ43MTHGcr9MaKZ7LgTspre5eNr6uPJPTbusHLh9qWDHUXS7fRovWoTktmG8pmiuDXJFzetpp5kMP6jA",
  "key26": "PrM6ALEJQ9FgmBzFR1RT71KPEdz4XsH5TZr23Kk6rUKsxzpq5Z2uA9w9sTV13L4VywZpdfTXSG5txj3FU9dyuEk",
  "key27": "44Rj5RdNozXVBm79dCRLGkeRqfN3uas6zW3Rw6wuGyBHi1RJafJZVwoot5XoAFxrSGXj4Y6wBP6MkLiuVRgAfyjG",
  "key28": "4UV2aCaqVdpY99wpJqJMkWhCcToqSgSs7AmnHgatWM3nJHpoh6K6qR8888TFDjBxGFRdEdB9FxmX3Xppx9ahqg49",
  "key29": "VEwSkG4VyXLypWjwKztYXvQKrhpaJ5qzkF2T38WKyDmuEH4wBLEo74oQUqFMdfM3g9uohZjBjZLWiKwN5Yv5gUD",
  "key30": "5N955SLEqLXGLfdN5Mfuq8pDf3tpkMzVgqiBFaCMzatXfHJa3dJFL3nSeChrrro5CwurpYvDxm9r4593vTCT9uPY",
  "key31": "REUpRDVHvNFgSBvoBG56HQnZvXSu7fcdf4RHr3NBVNM4VWbgYj5Len6py6x82D1KYXHc7wpU4NDP9xFYoaiXk24",
  "key32": "4wJ35WLAJU2ouq92g3NoSAGo96eERVgWYKaKdUX7ntc94VyUHh45cHiAENkRxasT3HzJauB7P2eszcDM94ELc7t6",
  "key33": "48n3kP6PPN3NMEgjui3XMyFWjRk9MMELfmWGvgZxBA1Nux4jpLHatKnFhxtSb1x2ZjHKEnY9zXzBSJtfv2xEv5Ae",
  "key34": "5FPwPC33Beekpzo7k5eV5VYaccgcLJUBrVoGqvDJrzEUJVNiDoUf4xc33UcKM7RM7TZZrmvK9ECF1GZfcJmxrnEd",
  "key35": "2YXjdZXaB7WNekaqPyBTuqbK8tKzU6KV1kzKXMSS7PYpJ6pu4smNtzCduUPmaZawWcfhWjGE2kuM8x7y99TFkqEp",
  "key36": "45UCct17b9u3cJkWj9mc4JsZHoFofTpB64ZZQpXW2yBSi7Vqt6t99E2jN2biXwZ8qrJkoMqUdiaU93iHwY49TaF6",
  "key37": "2BpJTEac3jbVEFKd4ZMQ8S8R7M4EFBH9PLgNiwbR8BcxJz9kdHmRPb9vqfrCxnCTiKj3hJRQ5QpApw7JPQ6fkLzb",
  "key38": "32GuwR7tVmp9SkJpUdDpc6uGNX4gszdT9JNJrMmUMeow8drS5Q9mCeKWRPTC5Y92qnvTaAHCrFJEShiEnU4xV3cR",
  "key39": "5hg2CpHGGavzchM2kfvXevgNU3VdT8dh5JAVBoCW6HAyoz4o8HwS3gq2RZQEdr7k12DCXZyR39Bk3U9z27iMVyzY",
  "key40": "HL6qwXrTPoPka18M9CSgTo2wQWZ3nWp1fbht2nm6mKN1xetT82rWmAccAaN8JCXXWetab5DzozYKkAujXMxRG2d",
  "key41": "2q7rpcUyUeYgASvb9bCjqzq5qXJGQVGHPqxX137J4UdVVeMVYvFdYP54SNvxnTx3i9XZEvagoZyR2nDaCs3FGroB"
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
