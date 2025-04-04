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
    "4tnVEnnkYDYZGntyPLCYUcGE8jVhySeUfALMcdJXQ1aYUz3fLG9CxQtVwoHWkGqYK6p5frYk5KZcMEYFMKC4idYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oMZpQGtjh4kpJrxY3u7km9U7sgJPK9pMJvBxzJqFzo1RXuitLZe6rtawJ4JQo9hxDmUc5VrMvs7TG31ybQMcJ8t",
  "key1": "5FHA8d2wAAtbcuQPZLj8WXbZDph92UHbydsYLZNpb9TzKDKd9rzisETemmCJuHp3zUDEdCwpesEXLGHqovs8mWxx",
  "key2": "2iafkxdSiPtDJxE8uR7zrjp3Pe1MSgJC2Ljb5GmhCmT6oq2dsPD9CE5DM1LV1d3qNQ2TYBhqhckH952jUdtYu9un",
  "key3": "3SAogZ5ZrDUTZv7MUhuVHU5azkooppQ1GbBnzNox98UsqktQmdPrp6QsFg6QXA84FAFbBXKk4x3RU8yHh1Gw8ZAq",
  "key4": "3trEoqw2WrrLaDk5onQNHtKdjuwcqEqvTUF1AB4pnryajAxWpxcu9zcUwUqEfudNRKFs4BFJa3e7EruFjyVjmXPN",
  "key5": "592iBBhrqtJh2n3bshf3ndNRDkEckK789wRKohxufRc7BPLttVEsr1AtbkfDnNoYRg2L4gZbVJub1gbhhjaxXJ4x",
  "key6": "5v84zXhiBfeu8yQrK5YkfMYwrZwB8JQjysHhV25LKAkJrcc4t84gGA7oWoSeo15uGPYaChYxaYjB4idMCYyXubrp",
  "key7": "2xChpiAi6FJP2t4MmyxxnwAMKKjStVevzvxvemqNQz4VqYVYYVS6KqYnaf6Qe7gDFvwi3yHk3EHaZWPN4L2Pf3BG",
  "key8": "5tsUNx6mhz3g7mVcLvzbwMfkRJoqpTBZYSaLYFpBddU65MvDTZyH5xxPLNBjMhVp1sJePhzcaomRbVYGeoS2QXTy",
  "key9": "28WtA3fJjN1VQuJB4DW21adbjLKGbQqtmMfQiiYCDXwAm8GPdKA5N7VwcZHn6pWLB4xvpnifDZFAwu2ZWeGwbjcD",
  "key10": "2qce5TxRyZA4qdqCyfEoPGHtzzQtyAUNTJzDv2Cgugh7fR24n3vPiJaFXHH2KYS11LDgE9qBoyJPCqS3HX3k8v8z",
  "key11": "3aTYGVnRuQrqzVDe4ePeAiZQyY1Mw5y2b1Ps2yDJEywo29bqSoHTrPQDdhzgTzEnHP5qXcgHLjCZY5Z19wB7Hr7i",
  "key12": "3wkg2tyc4jKCuFnGYM8WqMxQVY6mnmC9JqqtgwRzzmiAoMMHwogmY6NDgP3apVCKRGhRoKX9dybWyAXe5vnHe25T",
  "key13": "3ZJPjewDsnvh9LZ8v1gubJnc2oVM53HhxBKVnUBmLSwsM94MdaSRzcTT1ruRKiSJwJd8PTiuppU1poVgTD1n9fPj",
  "key14": "4iEDKLZzXRHVFKC6jGLtPzZ2kNA2gUQEj3LJyhFgZtX5hch78kJJFKPASJiZSxeZd7mq7xHxWvfSiayXWHe3e6qy",
  "key15": "GT9Xf81fYiUt3WZVdXqZfjeqExA8ZaHRpdZXCVyEcVS9WttazgGjXG9kWCPNgo8Sfd3KuaMGV4KQWZBjKVz8RX2",
  "key16": "5KPY2frKJSkL1RbRd3jVbaEpwcPrpKdcCu4iwr6P7j8DYigAasspNyG8eLa2129hGRtrSWnbwkNcVsaiTVn1maUH",
  "key17": "NvbuSDLk61UvbJL61Pz5mx4hWTi4EU6BbRurRYCmcjjVHS4kqcWJpgGghtBArSsAuHwjHWZNmGEdVmrEuQMjjyi",
  "key18": "uMxR367q3induNZyxq8X3M5HhAvgMb4KRE44G2Z9HQdACQKRHNPhjDYqU3n92jEooJ52f8weLnxK6U4ox8iok1N",
  "key19": "2fhtwf7yLhDF37ZJaZPzsHNMGaSZj4VvqWANp6P2zAfGxnJaReQmiWEKQUyeQ7cAWGy6oEgpKMmR1vZBPRQvEge6",
  "key20": "4iYxTHidUfXhTtw3Noty1EbNyGpcW6a7mVy5vFbZTN7hpbVCSt89WHumBgbviVG3GgNgY8CczKX1YYUZq61Qg9pw",
  "key21": "mmq9GtVEdtLsvAiymms5hfeeV6rLJkRLwP3hFmGhKrSK9DcZ3giCP49efDsqQTJMwCoBKbFu1LosoVqW297dc4F",
  "key22": "4wa6GMnu6eMu3F4xBiMCM9yD93Los5uZeM5dD97Sz4MoqcaGa6ASk9Qtnj2vsKQicymQ9aSK34JGMxE9mV1wgaXw",
  "key23": "KvBXFvEUAyPr9fFLqXdmrjLVWJMz81XLyXdKeAH6ZSXkCA7mGmaThrvwL4T472dogDdvmhZbXB5iURprxZTWr87",
  "key24": "3WR6B4iHAMsNgy92eQiHuoCk39NHmAYPndWRShcogaZP8TfzCqg4Rv4JSxByEEXpNeJHfpM1vHNkvQ2EiVqhbgW4",
  "key25": "3BkqW5iFLYyAR7xUjX6KgjWH5GeHKXbWTVdp7c91pBujnJSpGVvqzKy6MRHKEXUAM1qrjhzqPjteCpwHX5k6jQkL",
  "key26": "63oVR92MFMvDDNALDFbmsdbsKinGArRS6mbxHw4Wo2qt9EUEHMQu22HJekoqdygyxKoWuNYBJxevgnvnpbPnbYmg",
  "key27": "2qnR4shaAQMX5xFCnjG8ZyahxyK55UrNUPUTYvA7EVTdiLeFCuTSFPixGkdxCnGm6p3HzjzDtNfVbHSFuJG9zvJd",
  "key28": "2ovvJmp93XqC5hHv19D2dcPwydrQHmiDR4Gw7kQUzmTJMStbSC5zA1qa8MByeQxS8NmW7tvGpuYQ8R63TJpzUZD4",
  "key29": "mHvKBSup42MpjSszoaSvpCe6nrCYAEBiSTSFufcVVWDButfmgitLR1TSFENbmgD5ugwDXcarr1GU3FoLxk4SuVR"
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
