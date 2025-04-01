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
    "5DmeUDkU4vgJ7V68HdS1HcNgkVmQr396ZPArW3Ec5CEc22cH8uHttPuxvtwCTKJFeUxZ1xEanVrBh9APgsZSXjGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XLE4MKHFzpfV2zsMf34pFvwqbG7en3KotSsZihdVkaMV28rHhP3AgV4Z6zJDeLS24gRZ8z8jjK9jeMZy7sbYYV1",
  "key1": "4tdcJB5neYXtadQy463Mgq2cQGBvfPXxqVqpmQsg6D7K7cj3DWeuWV55fLudprPfGJKxZqf3BL1nxtHbWHU46RAE",
  "key2": "5anihFksGB6duXioyxGCf3XmMvTTPbNWzQYof497NiQbTyk5VK7bf4vdvgCCtu9gfbM5e6bA5MTjcvdwnMZEzMM1",
  "key3": "5AbtyyhSLRJMfHFmVHa9FC2zekejGqC4QBzkWr2Xh7F3FaoBK4bbj4X3nuaaa55ZM3zwG7iwsGPK7KGofayupBcq",
  "key4": "5X4dxmkEo5MqkBfFgLBQXdoY1Bh47bqCjdHckycfbNRUEo3WzyqehLKcAtaknGixPgQCVsibDzkRtD3sBV9FYNG",
  "key5": "UhvYodmG6V1VktU8qTVqjrUYtSPodbcYdVS7dkmFCpXLi5Q6fEG8nfAik1XNRgw4WXjxLeZc3UAB2JETn1kSXdk",
  "key6": "tZNRbXGcnRjMt6dzei32jQm27tesJevyLev7qxhJQbMYEQaTdHgyi3TYbgqi72tntaKhKacsAzCSdegtTdDWz7S",
  "key7": "5nCRkgxuRfNpbLSUm41g114su75i47zYwGQP9WxWDecGkk3pJ3dBvXX8eejy9uwxwu5ZsKv6TtQs1qBbaSg8jwx8",
  "key8": "5hMdousPsEhBqm5KPkeBBKNYeA2J1odxirErWvKwgna5tA7UhnFoCEK3cSpRDWAK9v4BFRT4bcyMxfzoKHkKJXir",
  "key9": "29VeL6SkKjAr4RK1G9s72pmbCSdMQFE47wHqMHAbhBfqBR39M616EhEqiNo7Ah2E6zSNjiaSEdzj1e5wgxcAPhB2",
  "key10": "2pR29Bobz4MMmEboDPGdk6wecDPCTmuBphWYio4KftKG4xMTh5aRYjbhwZugw7fRki5uXpZk2K1nyC1BTB3v4sK5",
  "key11": "eszRNpDgTZbJ1R5i62ar9cXngvTrU7qpvcxjwVGkScMdvUFbBN8njqEX12rwfCvdbZS5dEnGXCPoQjdvgaayP2V",
  "key12": "3yJ5koWyAb3u4oGm8JYa9M5FFtoMTCpPf7b7CHkw5NXnarUNZvYKDg4A8CuTB12GWVhRS2WWtDeiostMMS6CViru",
  "key13": "2fsTjzL3d53RyoQXDNjXwjyCAJDLkCBfoBxuoXDSSiCyNtdbA6aTGTH67w8DA9ugGmw5MXcNQLvLECT2ZEzX47Lp",
  "key14": "5WoaMR3Z23B9NGuEW3y6LAnj8qR5PcjhFMf3KXAxttRsPnWbFwc6V3oXiBrfnUJFCND3HRvQ1oEkzZ3MYd59A61V",
  "key15": "U9Qu1rhmvbYeP3HW4aQTSSDQqss4a4KVMP2PTLr7QA8iaGFdJWrPhaUceojPV2wbB1HYfRPAsdX1ssJ9AGM3cFE",
  "key16": "2qpwPgW1pDM7jaaotjAKgBQc65Q2JyenSKRdDtLdZG26BkpipSVuBiiGeubTQmqP3fAUxJi9YCdBV674SYBYr5f4",
  "key17": "2AVdJZAPvVR1mbz4c3fxcA6D3eLzjbXaks14zW3XKgTcAP8xre6ek52Pfb5tjZVXurv8XJuDFjW2nKu5kwb821cG",
  "key18": "5oxkqojAwFL8CMcaoSrr8SCVoT6xDLsHssss1T2Z5GW9ZoK6a3gXNpz5UkeuYACF68VhcvY5BXBXtjXDohZFWab9",
  "key19": "45AhZy5RbkXKFbbemEqLRFUFcfmXKGVQqZRoYK5k7pv93V7bpoYkpnKf328xr4hPuR1ujkVwD7ifgtDchCxUkdLs",
  "key20": "4H17KKdVxMXPRZain5FRoZHavstGq6ZCQ5sJBgDxJj5Ssnha4A6jC63YLKwohb5cZoNF6MFVzc6vinsXRxUGiWJb",
  "key21": "WhkZDZypU272p2hNL6SrJGydcEKEZBzecAyqRYckpqnKXPamqk2YEtxZBR4YJyVcns4WmafXnzZnbLuTdnQoRTP",
  "key22": "5JPw7jYmcz9nYzS7dQ6xBW8ophM75A8x8raBnyqLusF7GPf6qGPnAkprN9Rb1tio9w7kRrj5dXjjYDEELoVth8pn",
  "key23": "F5WqrLM6xZ4QrfegyxPzrMiPc8xQRWqeU6FrmGFLfQB4hyFcFw7FSx2AcXRHcw5erjd2pDJPvVSCbue34BuUkAx",
  "key24": "35AaWKt86jL8S4KX6NWaStr2ZPSCejo8jTVrW9E9SzxoXhTe7eLT32wXRhXdyJUJiWdAwWpBdubYr65y3DVjtoyp",
  "key25": "31E8AkmwfNgr69uTxFWGfDkF6Y8yrfTdEm7gDafYKfhXfRLXQWQiTk3Ywfgja8FtaNhiCY4JeDx8nK62JEDT6r9d",
  "key26": "3KWLrvaLPdnYx3ThHFQzgd9P64G1fwmh5mySscLRAeTu4p8mNW5C8saQvfoN4rSd7T56gCWV8XEhFG1w5rXZayf1",
  "key27": "4VcA23gYr9MhccK2EZGngSwheA8mMvZoxoj5eReEMYkMLu9oAqHPN4dAa6zX8Sh7QVYsF8FHYEoMhYFFrsUeU33w",
  "key28": "24CKtWSQpNVw6WQs2zxGGRX6Z6P1THdVq7DEtT3nwUkQBZnPZjjuSZg4gzwPAA6GwfBRKKg5BR1KV6rAunXrksTh",
  "key29": "3UVy7z7Zo7BFyC9RRSLcFGTy92TgnWrRYLAbefLY5H5VDUw5M3gtVC1yKyoLn1ynJNYfeQxMzMBqg9jCf1D3ptuP",
  "key30": "PZXF4XiownX1n6oMtAxRZf4xZK5o9jXb1Qg8LQAQevZrMLUzHihtfUduurqu4Agymm3V2QrAxABrJ9nB4oPuMEN",
  "key31": "rnW5KQmhS7uuKZxCqfuWLw3vSvNwH7jfQpZgfc2zWudibe3Da7LFErZTWVj6zJC5aeEr2tp35zb7X6xWRwydtf7",
  "key32": "5XenASJk1roXm1QHmBnMY1wYBphVkN1Bk2pWpuctcjoazUgfsg31mGP6Y6NNB2mRpASuYfERJhwsBeG6A8tYfDoJ",
  "key33": "2aTx4LXMdWewRQ1S5xSF21nvBq6EVnMoAYwgDrb7wzNTvK6X6buM1fk3dLDN2KBkDHXkcYS52i18SAUMB5gxz74T",
  "key34": "4Ymrcb1bPDyhrqzsMf37E9RGLiDhrhK6eKrc4sgGmjFcSBbPrA2bpC3YYvydvz4b3tmD49eXkPbxQ31Vg5R9Enan"
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
