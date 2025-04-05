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
    "3p7aC1UsZE3eZqmoMjMV2VwzALTTiYG2ydrXzrercswMKgdjvmmYAHw5H9rhQ5ZNTiHjEBrZ6SWteUrLCJQWeY6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F4CDQairepjYRwnB4XZMF2g52gBd8hamrNSFLfU9QagLsgfhjdSLkyd6bQVfSo8s24nnfJdac2TEZkM4qDcEtMP",
  "key1": "3WbhZ81bxU7WGmSzLKRezYus6C86rwaeZb2NAkB4XM3FrgqYjmB5UsEpPM2X7nSkkbLdm8RdR6ABxoNu7Wvonsoe",
  "key2": "UuNrfP6a97jUTN1haMxw1w9QNAvaj7gJd4RrnBTzNZZwJd7j9RbkJbDh9qW5aLmHe5HZYCetAyrtAZHMYtJzbWA",
  "key3": "5tC1XsnZd7dBGbuCYcxoLFdU7Uy13P39bMMrxXB46pvUHJdu3KKYHJ123uwvMuy23c4zs1FmMX8r14MRXrzmEUzq",
  "key4": "4uiyURavmhyjYjvSbphFCgxjfrCLM9VqSffJpWHFz6VzwXJUZphhY6bvMaFDZYu6SdwTdCfP6dgc5Kzayc7CHAUU",
  "key5": "rqxnfEgkmf8BkqRsCU6kqG2t5jo5EUQswTgUj2EgRXSpGAHuwdj9pmfFPHuF9bWqAHFoDXHV2fYx3gno24Mu5XT",
  "key6": "3UwZ4hiXYWskaFp6XP3f1zy8S2jzL2crSbvijb5ivQFnS37JaQvSsdijFsueVMPn2anxKxjcvSEpCQFoM3TxAg6k",
  "key7": "TGofHLic7uzVkArG85A1xc8HovJjqLZHp1mWf8SfJgA9hrkfuZr3kZPoCCAB5a1DthcgLgwrUcpzQ4CdKf57yky",
  "key8": "sygZNa22q5fkzVdRfMm38pobqfeU8cyDFUgx1f3E6dH6eozeT1e8RTumVzuftzxDcPH5ugGAQQzHa8FzKSkhbaE",
  "key9": "3Ze27oUseXvoGhsMdyZht3xoSQmqB1iXQQyMWyPBZaXmCP28p3NuXj8cBNQa8UDcS8PpDeQ7ksWJPdV9xXfX3aw3",
  "key10": "V86M61BEvnry4Jo3rjnWa6drDprJXshNp2Yzvs4Aop92qtMcgyfg4vmuVoBeu99mtmcJZRs8EYu8swxUrXv1HWs",
  "key11": "4XDergpVBxhxrCe3jAdmc6gCaaUDG3oJT9T5NJt3hrTEY74jcjHb47d3NDyQxAZE9cwiANwAnTkArxMW9k83cuDg",
  "key12": "4WNVAJrtiZx1tcyhQprrcZFtiaac6cwwghx9wk4CTs54WVBJcUDaZqnGr1i4CWe6wq7YUx7dXNcfX2fMkPshGNwQ",
  "key13": "5G9acJG7pYGBUoXXgqs2MGXwnSrhmmpMtN8ufiKmREyxUxsrggjvMPC4fFD4nTrF3B4NQCwY2TvxxwmRPfzmJTmK",
  "key14": "4GRgEmFyifBhKF6PBKTFibZQD71t3JLWNFgUwLwZrz496UdMeLi7cN6YAWE8cxwnW7jqHvo1cwGdNLznB5hn6aac",
  "key15": "2nGrDx22HnU3VjiB7zBZ1MM9JNdrBD5Uh2K4dYqJ3xoBgmLJJMHKYQLA89AfQAGZdcKTGyjegnreGzC3E5bJwMVy",
  "key16": "3BCdxf8wAzuhv6jEiSg3Nyq5U1g3vBLsMef9n4F2pHSmyQXCwEELjCMie1NrJmHoyW12kWrosvt3Bn5wzwQWDv6K",
  "key17": "3kzbTgBBvq4Z1xKJKqC5gdBfcdQZ7d5GjUaYQ2j6APc7CSmbQ87bob4oQtHFT6uV5psG8eA6MghZBHQ7KmZiRbxq",
  "key18": "2Gb5KF7KGGUAQ15jMuRShj4UD7FT5WHtVwN2ujN3cQRBtTspoCayqhd7DNm6NHs9kGHCdrc8eDuk4kBVkQP4HFfG",
  "key19": "25XKsxT4PetJRZbge5MwZa2hZMX7LbCknySJrNcJWGrHn45rZV15MCruLfgRtNwwMzFjxAheRUeHGn2gJCDiRf8o",
  "key20": "4MGASSrXPXMHFbgjqB77BsfBwixu3k4zASgxJ6nigkKZGqLcK1UxqueN5ojCdUc9UYYP4uD4CXRdJ4KSiUKTzGpu",
  "key21": "3J33gDGSjKCtQhayowkArbog5K1JDjdu6tksCW87paDLhNYaite1hm166hM3ZRoPD4UGb9HwsrxUMnyySB6ajQkN",
  "key22": "mVmyHtJ64f2Ku22h9DMicn7sVWtcEkjgcvhb33ueSo68amdqb8z3yQNZNYEE6mAnMgi4xhwfDZHjkFW3iu92Jam",
  "key23": "46FmDG8xVxkxbsWVBu7ykzDxrs5MdP1ZxGPmxQrZUje8yV6XLXb5xyUAfSaEbYRCHXjH8FfQjSpwCMw1ZmkD8QWc",
  "key24": "3r2fxvWnEWRejS49qU3tCtKwHyPqPPMyxtioHKd5pfoh7qGRMaRtkWmkYPgvvVnv5xHkmCjeyGZ4JVqZXNwHeZWB",
  "key25": "sPNwyK17rN8b27qErq86J7FP8dRtGJWRGYFjBKsrbooTtkS4GvU9iUptn46Y7uDLjC5rQxgYV4EGBHzBe4JJZdG",
  "key26": "5EPFFKA7UuMY1Vrp9NufW1AW5wLQrDSnYtePdukjSDotDvUqz56Zzsb6uX3P7hchCE9Kw6HqM66S7qZuGurFwyUn",
  "key27": "67UVfTmQWzfh42Nf47UpYnWEfyGxuUbnqngv9CfvZCa2DuWgreGECcua2RmHCCj5mcGx41DZuUv8oKJ8bX5eLLts",
  "key28": "41Hvi29MftE8tm2tE8cj7Lp1QiwLZhXzhneeHGp4TvqxXLwmTJPg97Gc5rzVwmmpn4WiaNxXK2LmDhK3QZZY4eQg",
  "key29": "3a2jzSWU3iaGfPf8tHnN7PqbrTwJPghR9Lbzr4oLytU2kd5Jtm5NKrf5DGYoXqVqfdPX8tejkNrk6iJce1dwwTgy",
  "key30": "dnPzm3tVpcr65fcqE4jpcihBkGzCccsgbLBDnJnBdjMoi5j5wuWq2hUXg5ksoP2yVmfodDGhBKGr9gSzHbRDXgE",
  "key31": "M53crrjD1tgEnrdHzDGTofjgp8ByJUYXBfmemNNyDaHh5N3v8fNZUwwBM35MxjyqBpA3MEbKqMRgUvKgaWAms94"
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
