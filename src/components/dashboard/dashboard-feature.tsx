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
    "3hWmty65QmRPzrnjpJXk1vTuyTD9iZqfV1oEGxxBQE2KwkCoTEJBEFbatA6876CASRfm9bVP2X6FcuQrV3A7wLDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXESmEptW955jVDFFcf4SJ7yaFGA83qDiowFHbZCFC1NionMCVqFcR9oNS9N9huXkQxbUw8wXp9KkV2Y5AqSyp5",
  "key1": "5KBk5v9yJaE9rYXxpsMUFZjvfRmCHUePznpc3aZSPJ2iPbWJpUwZKBQKzi14Denrctakt76iwSoC7o8atbkYFUjL",
  "key2": "2xmqqpQRMCQV8ad2q8iUqbeLo66wS5gZp8GQNUEtZSHWHDoBwgWaTSmySWpf3WgXMGw3TxZrpqPcBtcCi2pnE4DC",
  "key3": "5vqauoQDGxAxM4xfJ4BAJMrEga7K5Er863RUKzYj1mEYnXsHZE81gUZKMwjaVTrzFRxouGrdKMtJrgPtLrUHwFQx",
  "key4": "4uhRGb73yEz3vXmXHgey3tFjBLCBt97zvFRvWToJ7w8p3Y9EV2Y8ifuWuvGXUbZ6pcQ2yX5PoA7QtoeH19AiSjfe",
  "key5": "2i8t3zswsWKh48RUqQ4ygaMQkCqKBsMU44VrVEpuJFUDezNkouMzmyaVmsdULnBsR6JM2XQJemMKdFiEng35Dkzp",
  "key6": "2SM5hiqTfjqUVPsirYk8TsAD8dfLtmvasAS8b6EpvL3DaFsd1cWAmPsTaPkzsjCy5xsrndihsgCkt3JzwkS9Yi8u",
  "key7": "RYuGdZXdWcsd5iCrYuhrP7bFtnQePEqHG9PvKLxD18aWbvBKYXDdJQkqvXx392LTzFJYfDUYNpNUepMvrub51gM",
  "key8": "tXrByzi9U4aEJLybgWeAN88M9anTf2aVDq2NaD1MuhwtSBQAHggbcUmWJ2vp8EcZF3Vyyq8R37WSRR6RgrWViqu",
  "key9": "siuwfFN5sMwLRq6ibJ2ymRMBfZKsRjqcADicw9JhKS9Zs76berzZaEHxxV1kngK5vguWNi94DSDTShNT7EXNdAB",
  "key10": "5zkxFffNMXU6wYUUDHLWY7mSYpkifC71qBPhgpmDEGBWptZsyq5t8XapcNf8FoZbLEnBfkaDDakccpe6Uysdvvj9",
  "key11": "kMLiwBHgBAYBYRccqCMTW7YxaEfu9cJihQTfn53TstzAstALaqT3JpwcyVVEHAyjdX8LfcxsoQswf8cB1tX63Ff",
  "key12": "4ZrM19QpdwCvf7nsLce5LsouGQWaNp2wPb5cvzMB1zD3Ytra2XGKddKyictT69oLi3QkxdFXLPt3xvrpcUFLcfrn",
  "key13": "AQLC8ydfKmXGdaL2x6WxhNLkezAytGKGtRExeiX2H5h7VoMK6zyvpvaX3j4drKLnb9sTQKATs78bA5udZUbdfW7",
  "key14": "3tSYkhA9sMNdFtj2wMrb2gZ1ztnWaZvkbNCrcnsJJzf95HHXBNh1CQxXHC11PzieuwiRufU5DkD1VXx1pQK5f4WE",
  "key15": "5HDH427mnQ4K9yJpPbMpEcD6Ms1sR2G95ZT1Zt534UuJVQnxG8bT1vvdCxo8P9ZzDysZKkM18ZTQZcQs2WjEWEqM",
  "key16": "GZ3PZvuFsveHfUbQKfz2hWEnB3SPEou8yzun6AY4U8xB6EM1bQqu7PoySwdStXj7uL5VdWhWeVEq95LaZb5gSx9",
  "key17": "qFgfmsrqFJ8XCuJYEuoa2EKCubMCvfyreYx8Gm2GpQPoMZ1FzpAtRCBXmc8zoBpVFfeQ6zQLz5bTz61bsNMAveE",
  "key18": "5CSwta1f1FuhgfiPE9A9sk94tguzDZzLwWz6pC9FZj6cccRKUdXHhydfNz9tJxtUUEs5vVq1LmUgFBUNCPRas7Sd",
  "key19": "4714qdWYnghxYF4XJcALQhk6oREgjdnpAeMptH4qRHSM5wqfcxwXUFNRoSYuXt5qfWourL3v64vp1JanrQGa5wan",
  "key20": "5hBpGF3ykLnb2jrAELzzxhhJVwYccsw5pKC55NCRu67QUJxrk6SAjLmJyEakWwBoBxxhjBPduE6kHH4cqnBeF7Um",
  "key21": "4mPdUeM5P8NarZT2PZzM8tnZUc5vgQypXuEEat9NCHhjiYRn8SQ4B4BdjvgLQnvwmWzMipb9ZPe5DZgJrYRJT1M9",
  "key22": "2AqQEQHb8mwF1yo7oKf5NVQBcKVqU7dxvaUoYxm6Ext3iZTg1oqwHDrMNaQUuV15sRV1KpzyrKaZtCfd1QJju9jg",
  "key23": "r8mDEfS831f3wHLEtVAK2Ap8tZfCiAf8aqNKd46SgEX6Mu9mGochx3L9c1Mq6YUYF1X7Ncp5UQttnx6kjk6Jj55",
  "key24": "nmLytVfa3fYBPNZa8oMKsNaCghuCBRzYhMzoS1qUX8zt6jgnh377QyDDyVxAtWPj8EKVbSAmFC6DbBGowzXLP68",
  "key25": "35rUBqTHuCiZeREnQt2mkuwQc7S8Kaypyo8mRPK9ager6ttYccsReBy5dsyRR6d3cEc2YE8iTRQ6dro9Mw6rDQEc",
  "key26": "G9NJxi69qkyHoK8j4j5xYRX1Q5rHFYdfJn6PxYez5a1QLSFhGFNMjK5GDBPK1WTTWJpSWNp33c4JvqTgnnVeHbe",
  "key27": "3ntjZrVTyNAsCz5RGFAcTT9bYUkSp8rmu88PD7y1sUG7rgMP8mnXEtv6ejPPFTn96d1cuZ3ybiNzRuvQe7ebuYFL",
  "key28": "5UvzrTd31JZ1Au2curzF3TWfDfdBJucbt3PgPQ5G1QoCw3SiLbXCs2WqfmQ1eQ25NkPLcY3EpAXPLPQfDMNZ9m2j",
  "key29": "2gSUq4sPwcavPvQrrhS3Jm6E3yugrr6X7XR4GwrLjz5sD8Hk9gZ7eCTD53Ty91HkmG7HS6SLBD4PHZHo6N5chDri",
  "key30": "4Y6iLukKdDDuzDZhWvBmoJPnw1ikLM6xRq5SLKn8PcJdGacw1F3nzQdBMWRvKWb88XwJcGW5A3mHr5iohoRrUVKG",
  "key31": "EjwC9BLH5wSHYgFMWZtwmfQNtTPzFR9oehyzgW5jGdny1sVSdp9qMEUBfPkv7utRUpi4biA3RnJBb68MFw23Q4y",
  "key32": "2C9coCuphPtffw7uWTTzqrXLGDSNbDLWh7LiGQfNkThxRnzpkcdQgxEAUhbxWEtNnCopjavsFRkqbzCudhoVJuiU",
  "key33": "3gxmbj47zVrJa6MRgJawAS9GQnxM6UZiaP7wUgQJaRuvHdRkjyUr9RV1zCe8DeBBktBCSCaXUSpXfbXDBz97G4wu",
  "key34": "2KPvQzddiBec6Z5WFm1grbnhtGDqd1Ywm1GDCUcyJP4bz87pKyuyYAnGQyK6F6vEutkPMx9WRiqQrwSQp544fqxW",
  "key35": "4Gv7cKbLHRTBBQar59Lik8Z1txKSueQcWQGqmo9r1rtECzPBNrHeQzRgQC6TFPUR8vgwzvBwqXgsT1nFqNgYAFMP",
  "key36": "2162heGt24cqyzM9tQ1JDSE8AyTmUBG2bTfnqJp4WCgVw3nd79X5K8GL7U9BsGFfP2s3XPAFhJtE4zAXmudsMeDN",
  "key37": "4J32HKLGXjXj2hGzrvSdxiByWxqDZPomC7gfiroYAvu38yQww9SE5WxufqewKqfGrV55nAjPxkNbv8wc7ExNpryj",
  "key38": "2DMf64q6VQsz9NiPdSDCYWC7uABEtSqCWuVrkXvMh67xXDocaYHDM6vvnFMNpSpML2k8yX5osi8cRgYiyTs7mS9F",
  "key39": "dgz73wPdd3srYS4mfEGYkNxcQz4BdQvTEkBZaoid6tmhGK425EaZxzJ7byhXX5hvuZcU4astz2mGqhwhMzsYBoV",
  "key40": "5MvX4kxMSiMZGPNkZLhboSkioeoZ74oxQ234LqbEBvu8V13wAue4GtP73RQjkP3STJa5QoQd65sty57NGUwd6uA1",
  "key41": "5iRvCUUy31U3ttDtGJtnLruDCJb2H3eWJpKjFe4PkVGwh1VtxCLbLh6wCW55XFu4eC6Gtw2MnNdPgsvP2GN1BBaq"
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
