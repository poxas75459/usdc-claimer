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
    "5ufwDUdkePZX3nStdbWB56ZU9cQCGwzwc9T5fhBegNnjEQSGr8LygupXpcUgi2K1bU1p9WGDmjWagws1Wb6tuYRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ygcckLPTV4KVU1fWXky1WHukFi8C9REqDdouDXdRGWkfUnVhxjPYDdu3PBZdqbr1GgBscHithb7XUB6jbQQiqb",
  "key1": "56dtefVJrNzDtbTXz6MWHkqyDTuuohDymHopLoneAsw3XqsJvKs5Efpy8judfDH3i4vuvegmNGCRdbKupC1XwA2L",
  "key2": "2K4wbpx263pX3GrApF2VM6AYEzmEo43gSnpwiHRxosWXE8g6HqyzAtnuphWrLrvfrEGXkBrPig8Knavrow3uKjSC",
  "key3": "5gkpBEKax6zXy7MUoA6ouhcSUqpF5Nyqfy1VPvTUE71mvoLPcZ5Hfj4hutNmQ7EUfWBDVMayWtWegrNten4CfrJg",
  "key4": "4kLnj4HXpvMjn6bQJqi5eJXhhyWB7W3Ep35vXEUkKViLJcTN1hxcXuo6i8UrqwzNjQTB6XABeyojinaXgULk6T2h",
  "key5": "3Li45ftG2M15rLTvRVKne8xJC7Fjostpp8ksVMeby15aBYy2pkq9ewpcTBf8gAvyg5koyovAeb3WQJueemwUJFyf",
  "key6": "URCP8ARUEY1gTF89eghcc467zeKFiVa8pevTFx6538b3MJ5rQ9YFm86YmmwM1CaYSCGsbMPuC4yVDZqt81tQx3r",
  "key7": "VP3ePZhnVLBwxA8B67aRyUPZ2zyTD52oDwg3Gj97fxmowojKEqRXFk8AJN3EBCA8QHZ2cwUwKoxidgjrFpFdJwu",
  "key8": "5wBAmxgLgLSKufsD9k6XhPUFHqnL748fCyESp45agsLsrXvAuiGn2J16AuXHBSbLuRrHwNeZe5NMTcmvWtFxfUU1",
  "key9": "3kvpUWJwj4euq2qNGMa7fXRzuWjfZ3a9bWMBupmGBUZ11xYa4CBjSz7nwgfhUgEoRFsCkDRoB6uWRWBdrYbfwNmS",
  "key10": "3sjSKJqjZDPMiDFjakCfsL9SzGtBmByXVSYXHJUehciGo65jLy3HBcJWSZP5kEaWaqVgGy8yestxAB14U5qXMwPq",
  "key11": "4bcipkqhgB3sRXmrtnkz6HjSDQTTEfM1R1AiVz2RGUBJs6KWn7p1o12BRrvCgrGBB3BEyEbfL9LPXGxzAusdyyHd",
  "key12": "29hA7MmhzUQbmaxc1gFfernpgZT2MEAgrSdXDiuG95abYXK9SJdr3jViEBNh9k27k6XodXafYAataMEreJoM32H9",
  "key13": "bkvfVGDg7uu2EYcoN4rzhuLNEYYcL96G9WVQJoJ23MTapd7JFcng53DzzwjUyaD1tCzjmGF26a3CgcmdQHErmS8",
  "key14": "2FU8f1S8RFEojeomf5d2Rgp1fKHs1JsPN46mhHmqv9Ab1sYZQNYuT8eA5wtN8x9FnRzmhz2SwR1qGK5pFVWgzus1",
  "key15": "49LGz3ogzJMUVV9M6fV6GuFLbCBFVSQbzdcgKkjK2U6mV6xd62w5WBdigKK4WSXEZyWohV9Rso1bwtL5QZRZqjEF",
  "key16": "wsS8gMZVimd9U5XMTEEHProjKRrrxdPuaRnPV1xRXPsmdDumxyX4g9SgWchhiSE9adZXtzcscWisTzrGd2VHeTt",
  "key17": "2YNN4sCioD27tRSrTz12UkZF9rypKuziascmh4bhKg9kzaPHwQQRPbkKZp9NENFKkTTpjpgR3QVRNc3AUdC1s8m7",
  "key18": "2BqDKRdp85ZJokncrvufo76oHHmLaUYs22SJ4cVNEqm32UqcU2i7WD73M5AMhFSkRgcRM7A22VfmU6BYTphHdprs",
  "key19": "5qvpDjEV3ApkHYEjDkgGrbLWB5XwqgHmkY8iLpYBsuin2zodBmZip4SS4grxaqDH7ecRxaCZvq9jbavZhwoyEAyx",
  "key20": "3qUZwAHmHDkXx2AjVjGVNAi88VueiEmoq1arUXfZJcBXANLW8tyPo8Q8VDo1exFBRhk9Jz2PiFR8T68kC87PkJfc",
  "key21": "216tdtVn77AaJZ4DefmQjiCB1MjqZajrBHRzqRvLMZ4JowHyrK1JFVcVi6UDdVQEHtUnhmCs5FM6vEKn26bdhHNd",
  "key22": "5nfRz9ULKpwtCP1WjxNhWTi28AqpVM8aqNpnTgz2AsnPciBWpmLMkJ82w2TUjBH2PuyMa9VWuh5uF5smXHyQc1Nf",
  "key23": "4275PkAf7GA7bhHvAWmbX1pYhko4AxJYQGTdaZ4vSM2i4Z7KwLcYURc1Yn9zuyuRbL2rh3FrhUZGJXU7vUtQbHTu",
  "key24": "3BHuD6ENV7qg92RXtwX6fSVSk2h1MDdU8jB5n3BK5RQPxYwrSNmnSw3sHvaB3xrggXg7NeJY4TpSjS6gSX8kwsJU",
  "key25": "ZjvQpeXYrbb2fyWp2wN5buNVNNdjzT8o8cEyHUHAQskZB4bhzUQCG353i1F2WiSU262fSwrZszdzR1tfwQoYyZB",
  "key26": "3kXXUNV4to6ETdiHe6nqDShARRcFcZ93ZSdoov1z4twkgbdxHTzEHXznVsrm6Wob5LjmG74XQw6hreG7npajcBS5",
  "key27": "bMCKSXoWfhpj48zVpwimegB2oRJHJTD2n5zMFcg6ejnXzWhBYqJXBRCdNe98AmQhRhrnKZQ52WTKFFHBc6mFQ3f",
  "key28": "28hvCagoJWxwkKkdY9ywZW2ftPgmuntypj4v7sBEjy6rpJjfm3JhCQs2KzhWBpzYP8XwZJuDz7YbSXY4JbmGYBfc",
  "key29": "3NYpFJTKEdZ4f7JpN1wU1DCMq5Fwr1t2u43XumepY4AipCADSefFykxrRbUbQWVp8WeSSz7dv4UnDVcT8fKXYBnz"
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
