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
    "23oafZBEf9v7wEJNRLsUGCqXq3f8LikwMWaP5p6eeeeaTDKptUaJWTHUg9HduRmHvep2Ycr277bSVGG8h5G9DCTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVXzp1X3acXpW5Rva8pGfCesDDhPzM1DfHXJP46NJ8sbgSBbhpzKJTdbvhyLQSPpX1PuEGkfZSw1f5dq61TxTts",
  "key1": "2JHx8fFkPs77h8idNDjot11CDANdYQFhx18t5D6LLsZR2Le2fTnAvwKP7zk22A5xNmsguNckpX36Rzp6iNDzGyx6",
  "key2": "3d67GBe4EphQm2cSN8E5yRC3k8U5oFX9VkbvzJdR4WNad31HVBzMHcnzWwV6XBqAs57Uk8one6wUuTYNB2QV7nfe",
  "key3": "5JZzxomqhwMzHdDeGVgExNnMpbygud4uuk41YE9x3M7swAFB3A8P2GNtKmtshNLoBjSejvdzFaRY94zmAFNcLdaE",
  "key4": "439T5JWgFh6KJpxdudWSS1jBZfUwF7vAQxr67wqAKRa1no3Ufzjq9Zp8oTm9xYCjefz66vBjFEUQwGeqP7fEozq4",
  "key5": "3D96mAuRH6Mpj8cNw8RFuZ4CaFuvQb8nHQoncsGov7m6WTdMqJN8uUHW7bNeRQe3fhgbpqEgYCErZGK7dd9Q5HBj",
  "key6": "TWDTjhQEstvGvfsmHS6jsptkyxAdrQrFwXFjU3whQ8Buvp34Q677gHvJ48d7CRZR7LFbieYU8EEzdvtzeRpyRfE",
  "key7": "B2dTpinxyBaHa7aoqR6ALCk4NfHhjav3JgNrsqvbp6iXY3eV3iBcp7X4efPDZ7tQZm2qXrFsfja5fGipgWqQYTo",
  "key8": "5L189L3EbVP3ZCVA3ywgGp4tUavcL2yKTRziULJja21ihpTvN36bGszPZvFvvkdGHBHkXHG816GrQFPs1yhdoM5V",
  "key9": "5aNHDf4AD2Pse85qCQWK8QQpfNFrAn1FNDeQ3MNghKU3AvmCx7LMrMP6m2CSsjbSzjtGjrUdZhJE47rYZRc21994",
  "key10": "4aejj7TAWekoaBX92vTEHfMxs7Y3W4gbxNrmE1RMAS4m9ySWrT5LBTzDk6MKTqQsPfpgaipz9xAB1aMcwqnM5nhC",
  "key11": "54zY4gCHpZW483r36XKvLkztrK8YqfypN6RfXxTBLi4i9ZUBESaWPaXEUhYMCesrdfFRLzKfSXxX5hwK8n4yUEEY",
  "key12": "4wjJ2LSHUwg7snRCLXb4oLbjgMoxp8eKRcy32uobhViefR6o188nKGNBsaeR5TQjmosynVhEiMg48ybzNL7V3b9U",
  "key13": "4cNgS1AYaezSqjy8mb81wgPUxNgzVPrnf2NLEi9Mo5SESoWeHK6xu3aEhidQxABbwnJFJN2Wwf3riXFSLUHNxu4U",
  "key14": "2mhXWGo5XvZhuP4XNiYXPUbtH6DhUDWmQyeudT6o8aSj8JH99gcKBZ1MQM5a2PE3ndcrpKD9WzQMQnUVWgKQar1U",
  "key15": "31YBHAfpxsnYEHzQbWzHpTrbcgwjNG7YPFs1N2ACkmBXFoCBdr4bSThNWs5kHntH4gm3ZjsXMJAxHvxtmGBQTUUf",
  "key16": "DZaguSsnVbmcctpKcojveATPWnmijHerQgL5wJL8PxiySEwzwJkqRrvZe4HzDBRUPzYLKVWXQa2A5xsZdgmBa9r",
  "key17": "uSQEr3Jx1tUHog3w2Y1dDwNsJWrtVPBuaLaZojQupVbdYBi3JARxs2JT9ssXFeNbdgrG3sQ1AJGEd8Fy8BR4CGE",
  "key18": "5q1knEWL1KW3KqPCJtv6gi5eW9cc9pzS4nSbtqVW6qHxvgRvBnNatxkdXDgd5yaCXJC1mMHapwusbP9fe6tVTK1P",
  "key19": "3XiVrHfAGUNChCbmVP53FvH1nnRHx4bESj8bj65DVZzdvM7eHhWDofHCthRH7QNjTDK9eAFcMZSPzEpTXKuWZhNg",
  "key20": "4MWvrkqm9hnv2D27naYEvhwvcprL53SoiWp6Knufsni1y7MJJrGQpFCcZSt6mLvjo52XNLUFjXX23R3ZXVX71Tvy",
  "key21": "5xa64VxrhDDjDHDX21EWEWDHU9bN4Y7BJqvjVrRMpSFn3WkFpBSW5ip7VX4zLMvT4GM7Cky7mwzgNFdwY6T8YTcc",
  "key22": "3RTWHhsBWaHBWS78tAEVwrjDyCymAuBf7x3fZdzdXkcaPqF3ygKrKW7d1msHkjmtHbUir4EAmDNHZ8LSCqEh7xRa",
  "key23": "5oixYpi8skgUrHx217UtzdNfVTrMtcmMFwWkzcZJhBD44xNCoLg1mDu2jYz6STT2DThDjrbuCudhqMNAWJh6YU6Q",
  "key24": "SoAaGPgspHXeiYvN54GTqch9rAyTSVXNkHRu6bNtcUecmxDZXVgMV6V3ctNTHpGmPJurTw7nr4jvCWG7btn9Hjw",
  "key25": "2DBnChb3MYNkPBVzptR5vexZaGrCXoBW9HQJpUTPyVWosKqVao4Jh9RdV7FobUdqbhR6Avqm3d6H8L43MPEz9WbB",
  "key26": "5pvTHZdZX3RDPN8gVtCfuDVywkN6vEEuvRLSVKpcuNUHPWvK9K4eb92nhruNo61dXFz5xgFevsCZNYaBXYjKXwug",
  "key27": "2Ufnvh86yb7bTKXYpjXCxWg8mFLrfZHwmqfiV9Y6FaXyS9nZDn1phDPkyZmde4LgEtvEHettFovLd9tG3rGZZaWi",
  "key28": "5V2JrNBWAt4GjAdXkSrZRxL2wJNnaN75b5RtQuujeikEmmU1nbJi6GPm92sahpBbfEGZ89UL5AP71NSaCrQq25qM",
  "key29": "JnsoUMFtjxVaHaLadSbwhZBKHejv1GtLKwCLctsD4wn39P5XXeRXCxnj1ZXDKoJWdccQx7TYYSF2YhdpLm3cPqZ",
  "key30": "5uFYUw2iiUpZL5wRpaNng4p47J2TkrzXfgxD4aon5kaPr7ruC7EXH3VHFjBzAFHsQY8iTaiUSEAyGBWhdj9gGyWt",
  "key31": "jXSsoSjdwzAdV5Jf2MDCdExbdW4pRHpGogWYiFgDsz42JAA16x8jUcFtR938dtnPg1cvt64H4ZRpCWoemyEEVQ3",
  "key32": "3N5bVHWZzy1kPzz8Q4YBqmRbFZQpCQWr1ibRxqgZmCEvx82KNrj49HJTEgHarLSaRv1ETwDKXmMdkfs132DzMbBa",
  "key33": "4GsBxQQk9g1TrEAa2MxJnk2es7Y1S8UZXbYJBg6jBGgb8Uft3NrRJHyRW14JF8CF141D5nUtzVKTm3wpR9GZWPkY",
  "key34": "3PfdZj9fqzpRvVi5tHqEAfWmLKHCzwLTNjdK5ZsroNoyFqhAVv7jwRzRnmipnmufbcCZL76foWyC294z7LiPx6Jy",
  "key35": "5Q6CB86vP314E12yCvhuELSnWLauG8tpgmEzYRryqTNXU1hLYw2xu9LYVC8uuz6naD1chtZJzuQmUSjK8mGciJtj",
  "key36": "5JmmL6bu58AKu8EoZgEYigyVeZGASfn3gTxZhR6kAAidcTq4mveKu9pxFugKKkgSQ5hUAxUeex5mCfpVoUuYH4Tx",
  "key37": "5u8vGbc4ba55wTPiS3srCAC7gx1zbyXDdPZJTdVRGS2QAVCtPoBvVPz7ggjzrRX8c27mg1hocdTESrPqgWQYQXFr"
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
