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
    "pR31TNNPuCyV98bkMnKPDagqACUrrmATxu8LYouSTGy2rMijmacJYNGzF8pTqGXznY1fia3tPTu6L8qCXq795U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5EkTUiJTMbCf2Nav5Fo7e7WHszCQH628d5oqxNLMbRRGrdYmEgEiT1bjw4gNTRG5vLaqKytiARm3CDMo9h5Lka",
  "key1": "5GmCNgkJbJZy4Mzu2USGdtV2dSHt9yjTCo2r5EpDcYrnPLqrxMktc7HzA7oWh5PPWVtv43fdSMEgoXvLvtaHsWCd",
  "key2": "uB9GvTof6czJJZ7HjBqP4AsSxTtEZ23uu37VRQwTtFfvoF42Knz4iYTtKGk5vetjp9j1a67Fq6r4j1ViCJeV78f",
  "key3": "2gAHqg4FpjGLMS6YNMwNSqHJsc5zediefmBHHKT58QWNTxHUEdWHcaQ3gkEh19CcUojauGg65cWwWH9heVNofSH8",
  "key4": "P4gHxgjpmA9MtG8iEfG86zPJpqpvfUPrtaLiggThKJCFp5GWyE5p1WZVBmxror4jDSKXdAQkhHA5mHfYZa27g7d",
  "key5": "ZwYKe6jNnEn3yWuJVkf7uwjGYYzJKsnu9GiJPBgvaazCskgjowY3PiGRfDc3nyqQR19ooiWvfprUB3iAFtjrRsD",
  "key6": "5gEmKEtD5WMXcY7Aff2LVqNAHZiKe3cUXxskfniXnrWptnjYbjgZnrfE3kMbgyQQaQ7dAF3E9ns9XEFaaKYFaCU",
  "key7": "4DGA4tFB1JTBokMCf8cEyhEaX5cHuLrpcAqR1wQwAwYG2a1Gt5qxTLZXowtq2hy3DPDJBNMRycH4RLvxYw7svoLY",
  "key8": "4b8MKPUpvTgRF9FaJFh5ii6wVym2dtXajnjm4Ee6YgWmp2yzwpGbkcREWawwJRP8y2fbmv3XhgWA6z6kQmWXX3oo",
  "key9": "E9NdMmwcoNjLEziBdCjghxGe37vkvW1F2vJEgVtqz6fJgLueqbdb4gwoiHTi5HVayRJEUZmbXz5iirGHb8ffAE5",
  "key10": "2wCCVSasTF643aPpfVwg4f8ahNKsxZtMZawFmizGpF53tfRb3twFK53kU5KoRibtxQYqUduciiTbDCGLdJXiUasL",
  "key11": "3B8Sdy4LHHmKdPHkd73bPkVEUUvYp6b8oeMh1sxB4rRRoWTSWM4Z7N9hvihy1Kj4PMhudoCS8Jd377oZvWvqeFji",
  "key12": "3sC5CBX9h1W9PWMZXnEqkd7byaKVG58wt7tykk1UbeR8zLGKaHv2pH5Z5ZFht5xAmYoDn1ioqk58Ft466pdDFAqL",
  "key13": "4cmGTQn97ZrPTkGFSMJLii6mdSrDVEfxwZDbNY8G41LDWadV74M8S42Qx76MqHv26u3Vg4Pt2AC8nbJwpGuwVZAw",
  "key14": "5fHzRyK4ej1a6TQ9YZvStCJy3ZK3UmjwDvTH3YokViunBcpDgQQPFCa6y15PTJPXBCUaH1ZihonjeDbACF1N8NPW",
  "key15": "rGV2N1NXkU1uPeMQZDM1YzFSHbYkPku6WbZCg3BMBirJcbVeMtvbnNMA1LLdUYJw3Sjy3J2MCLmhqsGZg71KDbr",
  "key16": "4QtFjATWGhgrC3bRY31CWNmK1LX1TWyTMeuxnqpP1Jt5JC1nFNnANQbQawC3Pq91aooW29zKZ9n8KVpAkA9J3Z9u",
  "key17": "63sx4FrsZar7BJtis4GohbHDNF62p2rbu8jZcyzvGC45zuggT6ZJiuj58RSdJo1tqqffkUHS8SdveNQ8AG483u5q",
  "key18": "3YmPnPB69i8a9YYJadoSo2RKwf8tRPS6Bxd3jpqhd78zEwgEqAMwS2KGVRrRkduhUk7b6QQkR5w4QS2hD1ba4wFf",
  "key19": "3WqDvmycgrUHCBuvFKH2wvTCwWV4Z6Wm83pukvRpPMiHtva7wNdLUwh8fpLJtxHshnrQfAYNExVfeagwzxQqvH3U",
  "key20": "4xrvmN58N5B2km2h2id4gBHJSviKuPJ2vG1Vy8dfBSFzKAyge3BbG7DWWa9KJSXGF3toqWDft33LdM6Pwg7kwr63",
  "key21": "5awpenEEp24rN2jVgcNNeTCvJQdEUa7cwnL15nQ58gBDp8C72kH3PLaWmMHSvMuGFB6yJKtMmuHY2FaxLxP8sLyJ",
  "key22": "4RvvJce2XT47EH3wWWpLantU28UbKJYPJXCpMQnAouni8qq8qjMFs4VDoeEYKcxWVmxcrbQw1nCLeW5g9r7idwJP",
  "key23": "5EdYgjHRcp9JXF69nFuvL8mnAy7ovnhqtMBxauNi67Sd9742uFXdGFMxfAgv1BwZVmjfipq7bYhvviJkzcojwVTu",
  "key24": "3HBcpTTyHJyJvXd5pxEBWVQiZVKEhgqXiig1G8WBSpdd883yxhpN5Xtr96ekaHj6HDJPjCWVYerJF2Lr6Dw5gJor",
  "key25": "57kJYen9JvD7Kys4rLhQBbKUfS6sVsKWX88kzifwqNabQujoZHouV5EtGTegcTmPp4D5LdvB2iUXkQEWf21ydnhL",
  "key26": "5BaDXNxnNvWcrWpJ6NAP8w9iBVCxCgvjxFG6ZXG7WfKqk8kFVV9kzgTKsjYkXUCW8PbriCzAqxnp3fpPQKkZfeQS",
  "key27": "5iKRjTHdTwDbffyEShz9dCHhH46dEE3ULoYX7fnyiHfrmN1UXpLkngRNZQW76Q9qeEcDyWD7yJEHQX4CohVztycu",
  "key28": "4is15WkXbkthtt63MJND5SZf1xwRkjukG1tPszDBqAecSbazr5zcjTQo7Xhwxr2FSkiSNHqfb9atUqMb2RDfKCbW",
  "key29": "2w6QcoP9LBjHVLFK7aDdZjCgxtXZeFqPy4mDit3vM7Ywq8NP9uwoyqR1K9M7VdQz71Tkxbp2wuPYbiuEmpPK3QAH"
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
