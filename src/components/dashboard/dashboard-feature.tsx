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
    "4mubpYZtST87onq4nHBjev66zbyy76pEgc8KmqKPQ7bmK1B4GLKeopETKAuMJVCE7AwmUjLXbNX35hqWYeL1ANao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rm8BH9LgbK7aMrfvUvaGjP89FiwqxgcNSy28vPvCuNG7BVHP2wTHyBxbr4PCQhYjzLnYKvKmkaMr1kyYRbxuLMV",
  "key1": "2tv9YyjfCEjcL9PumHUUy7Du5m6mYGA5sR2h4jxPBVThYy7H47S9MxPQ3RqiLQU6U53CPxrHw36pt92AVedizbfH",
  "key2": "4RMY1HaJL7qCsCMzJskHnbrWhvHV3d8LLghHca96N4byYs5brFeodbncx4xEbsKVihj7f1cjX7f1LfwPiQ8E51hG",
  "key3": "3Uuvh954BjB3C8awPBhjA4pKmMi2bedeYKks9t8jevUHMTWuiQFjFjobvNrR6TyAdfFwLv3JTKUChikMv2L9bBUj",
  "key4": "5tQVzBaAdAExoyM3m8STasBwHT5sTiArci194fBD3wVJxvGvVLmDo23WrUHJrrHVh2HvUKqy7BNexybziBRCFGmb",
  "key5": "2dK8CHe1ggA9JvDEafD4Ci77HkLGbhTu3ZRLdWWkWD6bUfpZSJ1iCNNhwa2VwW5AHDHNYrH9EszDUJVed315MKNr",
  "key6": "3adGamPSYxxTqGQLAGsoM3fcW6EVmG759TKCA1p5BCeSHr45We7eY7b8aBopcUUS7Tjup4FpcuNvGwfbM4eSxdTF",
  "key7": "5tG3WE3xidQZpekpCyrCyJ3X1Z4SDfNtWFaVSA6RQPoQCAZWyhotAgCctGsdLCv7UKMU3hgDU62E47zw63ai9x5Z",
  "key8": "2MpRMJBH8sJLTdqjDhxFsS5PSDL3GPxmdoLbWRcFfjZUTgCnQBThBufay84hguDa8CTdHrugBX2UuE1e1qox13Gu",
  "key9": "pV27D389575zrBowqmm3XMneXc6ZunNXdNSonA4MTrGLJvcfSBgiM4RTncgEB1kjkP4PU7Mte32Vi4aEc6ef6sR",
  "key10": "sdfUSE2Crdi7qXZ4so1BAxpeG63Cx2WpxU2Xhy1uGntPTEtbQa5EwA87t9Eazn3Vx5b1kmtm29onQFWRTXihpy8",
  "key11": "5zjKFxUbXWaFiHeAopVo4EsZ2yiAHTXWtSgqivWqL4jqVWurr4bnmpgK3khkMLDNh46vb95co4uBJnMPnhofepor",
  "key12": "fLo53tKHNMJ9jNY4ph6M4Xf7vVj8b8r2E1UqqrY6ugg7uhzFUYQ94GjWndgEJ9w1ZwFzpzoy8aLc345uN9P7bqQ",
  "key13": "2bCzUfvFgbrHguJF6CYA1dF7APmCJMubW1QNkhkT2ckJ2bpVbmjRJh6PjHLtomZCKPHX8achJVVdw4j6UrC76SKd",
  "key14": "2NCwCwzEdf4zSHdCd7P3HmbnfWKE5AhGznptTLMqrmREKwyty1m79LM6rjdNVnoxHR6BCZuK6gN8VZfqtBVrfHp1",
  "key15": "4emTKSBdvQGySXHF75veDNooiwQuzyNAj8nyigzKYv3WE6cFYGdSjVTZstroWHec9x9JmCZJAYc2tHhPb7qrXKkX",
  "key16": "5WHexC5X5hZoKkxJU5VqyjdXJVWV4i9AKsewZFoGHH1H7ZY8HcX8Fn1z7aevCLjG2c88WVn6BK3C6xs9PsnRww8W",
  "key17": "o8kYJi57wWxSCtoY1HTj6XXDgja1wxcK5mSjXSfrKwizpQPFZcD2MJGaZPPw7EUcpchKyTySS6ApnpXtfRjw7K4",
  "key18": "5QD4p2afTLKccprpff6MQ9ZgC3vqYUCxwk1KDtVZ6J7bPQJCuz3hC6cQ11DpXcKJqRXveR1kCGqvzA7TDsMFDhB",
  "key19": "36kWKGTsZDEFxTRdCLvxwmbNHhZy1n2PkBSFhE8dBxwcaYZvsP2jkKR8orwFDM5S3hAbWU3MvsY4Y1pWu8JZvCHK",
  "key20": "2ktMnFLumg59nVC9dM7bkH2tDqcrxk5YVSNKTqhF4cfQDG3HduKk3BEkKqt6dD2gs38P1bsPQrSoLj448MUvV68M",
  "key21": "5bomeazrpVLBV2nfrGnyXR9pQ433YuaQ6ocCDwjygta4xg7st6ZHWj5oDKKqux16MJwoJGoR9xfb9TwREdpQFwfG",
  "key22": "3vYFNPo91YTT1SVdRgCAgjRgxqBM1d1d7gQjEw5u5yKip5u7BjzVTJjvdwctne5QjdJtfZ1GtLc7ryiuPbzuWaAm",
  "key23": "3SuYYfPjEev4g8jLeVAZoXi3ZFDb5a6P52JuVQtc6Fro4sEKu6Y9BTNTCHu6cGcikk5mY3w8iDPNQndiXV9hVQ7D",
  "key24": "5qAFm9ybb7LWqQWvR6PuUDCdufXz7g3Rjuv42ZuE2UWkNpp9HQ3FVkomoT2CcrzBCtMmnkDXjN4TZDE8PXHamr3A",
  "key25": "4swxx1sZ7gb3QUsmAfBjHjRKUNqiiiZjE8fqH7Wig8MUQoX92xUuaSNhGRoGiB87gzrNnAH7NgKPXianWGV1XQmL",
  "key26": "2h3dcfzqjpqubLYGQtvfFmqrTbCxHvuKTPqKz4ZqgfbuGvjPfbSQXH3TtD2pSSaHFdcKUpQk8y6jGpUyQT69HYNw",
  "key27": "5DNHgQVHi8ayNDvMeg6ZPWuw6gZ17ypHd2saCmdQ1VQFNSL3VjNSQivAJhQa4kRtc4EBGEHE2iaDJWtifXKfnucQ",
  "key28": "nC3b28FeLP7xGfuS227NyDxoZSyzvdNeYmfeihmictumdX1kLshgBuDoSdbWNEj4HeRmsRSa4BqE3CRmBeY8UD2",
  "key29": "VievGRqSutzo1fESayb63LkpBpvG3aiywjnrCo6eve4dtjDu6sQu6iS5Fk6e2oTbjAudER7uKNFBUuYNw5iizEs",
  "key30": "BAxyvdeB8r7JLPczskECxep78594noRFVu6kvQK73T4e8cjagLPbhJKnMtN28hJX4fm16ZgwF3EVzW4nvBrJaNK",
  "key31": "2FwNNnEcrG7Lf2cpm2h7aQVmMaGRmDTVpS3PkbbG7QWo57SkdBip1jLJ4BqBwUYUPwX3w39jQjC59v8a1MYYyoGn",
  "key32": "473tq4rqwDvCTWWJ4HsmEuS7E8PGkdR5dJaFtYeYUFh77sCaN4JQrXnkpSn8Lz8WQ5P81BfQWkrYNcfy1hu5fxz1",
  "key33": "2wpkqxVfzybqbW6YrpSK4xjUAUfaes2cgGbUydQmXNjHU31JzH1AnksFbPxhCBaJkUY4EpqYJZhArHzWHXoRPiLL",
  "key34": "dCdeynovvHgpDfakNEQhNPxASeJPdkhoCVrnoMyAK5wnfvvyyKu22MSk2MVs32NakQj3eaMBTnTyBMwipruSZwK",
  "key35": "4s2xNZR8UnJVVMcAmvmXQ6qA7veu21BpWr42R2UaVHVbW5pmjuNCTzdoh4vJmkdDGqirRPhRU91T58fT3Lhk4Ypj"
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
