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
    "5jwj7gFvy8KZpjMNBPzmh2cGPWgBXrnatUXbPEXyyQN2mYt4xbrEnyGdDdf2QU7fmioX73B3NPD8r4sWfQsjQmmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fga24vhs7VX6xHEE7KepCopb4VJDmc3gMYFiYyyiq6ng7PdrcAaq8WG6rnhnYrFRb6HfFKmSncTcETZ39i6EUMb",
  "key1": "4GBmSx4E882XK2X2hRgCNEnm8b7AF1zS18JgR78RY1FzLxizJsL59pkNp3Xnbms2gGWtz1sBqWR6jy37FykLqMDo",
  "key2": "4K1AEr9nepoQ9Rd1zxufHZoA4sFoveAoKLHnKYyZXYSU8B1R4wpXTimRGqZHAPwgdZpoYzvWvr9PdTtZMuh8PUrL",
  "key3": "4RURxBFY1BTtqwNr2qkpBz76YF49MAMUUvM85cBHL2jps8ThXCCqBp4egSagehvgRbPPpkFUPgMhTg6THTMQD89H",
  "key4": "5p8J75YGXoAAebExHL2NzZ4HVPBuNo595Rdn1HrUu8PnikyXdvz16kLMNyPu5Vj91M43dBrLEYNQjXWD1eV8bkZn",
  "key5": "2vSLY8uw7vzYVK2ypVHPrbnExK8dDKMEBb2uCGwBoc8RoPwbRfLuGweChRVnCXSTebGRjMRUhVBPXVHTgVTgvSuv",
  "key6": "tQzREBUhAGUqtVDB5vP4ntNdBJPEY4NzGkhKK7sK1eyKc1s5ERiacVVbv15o93HiSLnsr4EMCHYVh8KWBpmiKuc",
  "key7": "3e9kHmLY2qVVLn1VFL7N5AVXYQXCQQMjkK6tnUBv2rexsUm9evkuwDquBDmBv2wVyXYsN59WKnwE12QA4WoF5gU8",
  "key8": "5ojouyHy4n8om9nkhmkMhsXnoiGgAmkx93uL9Yq5zJLu93KCMPzUkLQjHdBqfH4brVgxLX3uDDK5nxPu2zK24F25",
  "key9": "4oAqaSgwFDf4NHLBfpcJhaYNKKQZG8Wvc4NYLoVMxhmSYDWZYPuqsXMLs4AHxVjogWU5fveo35ip9FB76sGu9HJ7",
  "key10": "4Urxc2msxBtZh3LqAP4FCQZaqmjXXKvGuvbREzgJmfdMcz9gNS1oWo4Zsrt4byiiHGBssCe1CoJTLT6n9P1wLjDu",
  "key11": "epYeGyZAh7ypQWazqFUQVzWHLBgF2o43vt6UTaieZyRxjB8ecox1WxZahrHDTzbn2V1ETKnuMCXJTgexHUVQojj",
  "key12": "4f1ab4ukpuFGh7XCjapLA3AfZ4SReAnRM5NzvxmnESXECRbW6N1pFaZwJtAKefCxGqrgAHyu8aurDMbGJbN45Rcp",
  "key13": "41RWu1SsSSzPk37yswAnBLtQW4byBuvFeqHXTdYqb7fvRGUaHmnvNPV6JpAeYoy58oCw9BWzvuqbLe9qYSPuaq7k",
  "key14": "4CPHdPr4Kken9ciC53rjAgCnex5u9p9NCvC7NJZy6cxzqvZNJ9r84Fds459wzRidhU115r21XjKMgdfmJUAq31ry",
  "key15": "5c7kvo88aL9Hkr6RNpHZPhDK7m4KEdsPqK4brYKTTzr5s952xo37AfW2ompqGgtYwdf1DcRhx5iQbR6rMR24Qs1g",
  "key16": "4cUdXgBAzYadBLTNokGWDNAgCBVVaiyMnPm7THLGaEDGuAyXzFQi8vWnA9YkHupYRP86kxuVJAnJUMn4U1Wwz3tn",
  "key17": "2WxCwyezrdB27KorbcTVaneSvxPUNmbaJm5XVGc9Ea8w7LcptjEYgqhhH5nZ8X1QvEwXyqtuXW9MsgMnCU9ujB42",
  "key18": "5Vx4FZGnVj2mC6R11N5R45VMKmsuWoAZGFzh9vonrTMmMrBn2vqDvTSizEwQA2uvKo4c8Fhf4PR7jeuVaTGCHoaV",
  "key19": "3psjNeQquqQ2RF3q8kmQzZuX83PpC3NXTgBQw5Ebo9NW1nXE9YA6YqyVi5MyncZKimwif8grJByrBzA349AAVHVn",
  "key20": "394a4JfMPexo13thLf2DU7jhbbUM99cuQXyfYKajarGpe4rbs43oybXiWcvvYqxb9EQ7Fs2WgVAwQTMPVoNk46W8",
  "key21": "5TMLNWLv7gppvvqAY3swyyPiAdXyHXVDHLF8W6qFEXwwQPMjNnQ4XzzRsXo8pftk8anx9QaryoMnQQ9LHztGGmTz",
  "key22": "5V3tgQNJw4LLDtpUBgUaPM8f8jP2HneUTZSsytkBdivQQ4FaZ3GB8ytHw3tEgHHn1e9VZGfwfS5KpMerGkFrZMmm",
  "key23": "5nJPSeTVFxrcQ2sj4NJsaZgV3ZxaSf5HZLFRxUeEjYbQzzAznZSwn1RAQYT9Srm1W7bQqHKVBdBeqr2pvie38Gcu",
  "key24": "45HqTRMByNhKSM15JFwJADjmvRVsWigCQ6muxDuvCDCjUtw9wcgQXdJeGPkvuecjaAkdTFq3rMyN6Cdpsip2Z9zn",
  "key25": "352fJEDVRYZkzopZiPEEbLQaLBVqa7K39d8Bkcw1BWegoNs991B3LunvULitz4AZKggLPd9McLfs28tVM5qQGfGE",
  "key26": "32YMFm5y8RNnx8uUVxRHLRqGJ6RGsbtiz4KEmrV3HKiXrm4whrFSHM79H3c7nKoZA6n7JgLQrDNtyev7uKHfRR5M",
  "key27": "4veS3EztYxXHg2v8aPoCHje1hxGANpp9DkRNLtJBRDxsmoNQV6CM1aBCjiL9jjSLtxi1rAM3YRXjLJSTPVX9Un9h",
  "key28": "4tKW3GKYwb91CqTUH2WmmV515HCgu4F9TJRpVRDAFZfTwUFPG7PMh2PCB3SksLM15jGi4fuxtyV1qRoevuFW9Re1",
  "key29": "2zRDxKzysB1EEE1Yfw1zTWSR1xcKMMuyr91cVY8HvY6KB14EN3gpHEcLQgFYsDZ8xUKPdQZwB7r5WWmWziGeHp9q",
  "key30": "5JxrnYg6PCF3u12iaqQNTxnbnpwCRJg6mzLUJWNFj4XmdZRPmkLLqhdu9KHznN6VorhrbXNa2afmmPQFoNBuvM6Z",
  "key31": "nPzu6BX29hEcJnHoRcCMsPPuLcqwwMm2htqLrSw7aSVKMQTpNEe3GHt8FbE8559HP9Yo5WTZytcsZVsft3VjPvH",
  "key32": "5t22DRqQhBC4m4sqU8qYYY6M7q6q88T5Lxfi18NBVkvjDXbBv3qENPWFgsDh7SApS1yDfGnCqUE1z5oigtbVTzz5",
  "key33": "3fF5WY6Sqeq76xRigrSxZR3HqDYVd2eWH7qEnFiBZzLk7hgvDnQcL5JQ9LmLwdEWDydLx14bPdAm8aVkxVM9Y9sk",
  "key34": "39t9GZsJiF3D6sZmTtBWib9hFW1mphaiTMWGDbNytK4snVrp8qkf1D5VbfTDq6TdKGH512hgFfrwBtCVA8PET7KE",
  "key35": "2fJN6AyJMo5gZKRH6DDNQPEWqQmZBxBroq2Kiw9pvjzYEGcfM7MFTbdC22fcaLjhDXkrPFdu2eFsVatTcjP8KVDQ",
  "key36": "i9djYpyP7JvoLQRybgtQN4XeKRL2GHiWiTNCDUrCrDb78szSXQJqTPkAEdyYbA7S3rVrYGr4mjZJLb9efqW3rKq",
  "key37": "3a1z1qvvDwbCg2Z4sqoTbJVtGHaMyfa6u7kACUx5QiGb1Bga5qdueGsdgYRfBiB2L6VbTs9EMiDNkgtKzFavRd5n",
  "key38": "BEvzNknP2i2QdPfdJTJVhkRfPk2kUdA4VqjGydRL1qt2g47rRfAxKGsmEZfeEJtiuNESPpmE7e9RE1ctMeeYLAi",
  "key39": "5v6YzvYih2UDtKS5mJZnWTqFwiFr6Ymi56f8C7mh3DwDt2S3XZcuatkrAb7LbyQBsGZiEYeQXxoEv9z85t5jVEVh"
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
