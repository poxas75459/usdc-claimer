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
    "5uqDywb83NFZQC3cVU2aWXTHWtuR1fstgHzeKhpEEqMJ3i2fr6534rEYeZUmVNCfdmCknFv9CFB4Lcd4fayv7gob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUjt9LYpcdvLK27ARuaCeafAsCTvhCwWSzKu4BtkytcNzwYZivNfQYiYn3NHnGxmab2P6J9DGVBcsTRHwZDtEos",
  "key1": "5tC3rQCrxP8Gvf4Qh4vdc8YWB9QZArJsUnmG7NkB35uWTy6938KYB4Ryi9yTCQUcTU7mrC2RAT1Qw175SiZB97NT",
  "key2": "4Cp4Q9sxZzmjbHxhuhYe6UNPtaLhSaMSPaq3GSYiyb5CEiXjXe9LB3ZQvKSkn4cL5raeHtHhLiovuBrAfDMHk44P",
  "key3": "4heR4BkraR7hpdb2nz6HzPGBY8sBFGYLr1rWsvbzLA8ZdroCBFHPBXDEi52hmU8JcjAk6ZFgcRdkYXjUateKk6ri",
  "key4": "2jWf93beVPPCXY1EEnaiVTN4qvt31f3vZwKrnNc3y5vrPSSfgjRKhf1brSqyj4NCk9xTjdUqGNa2XJ4XcZbchfMM",
  "key5": "48rCHvoz2DPUhWF4VUN1D1naEpNn9kVEErRGoLnGUuH8ETs81vNs7H3v63uKJz9AE3GDftrNvcdWXKsjJ2RmkFgZ",
  "key6": "55sREz8SQWz2Ww4ezpxNzNXKRvDTDPUXi7Bnfuq3KHkB7GffiUbRLmPXqg6PN7cqfV3np96UY999WkF9QJPvRYW5",
  "key7": "36DQuVa29oCp11QiRzWcd7Z1iRJws7kzT9we2pcQJRXwnEHXmbx4kcUhfH4B3pmFso59hTKBny8WBPZ3qKL8rjMa",
  "key8": "4nG4LUFACgGxtn4RHC8Ei7BKfDPoPQWoFKgYPzsS9Yb28B2feQWjBMz51QsYyWoViFFNNfrzsUenjcAPEkGnA7uU",
  "key9": "3zxd4Q3uvE9ernGije81jURezzog8cRfBvXLyVFWhRY7VZbToMnS6NitaKWkz9A1kLTFvm2WJsaEtsE4jZfJRFFJ",
  "key10": "4mfkiXVzM4MXgsP7r3Tm8TXEjMf2x7qTRTUcfSez5VZLidkqVC2YUd8CMKbvV4CFe7CCBuKNQb3DoTNRPqRYcAa",
  "key11": "4xNXtZMKoXrpcumz4w3jpJNwEbPYSJmjuP79jYYKpBaBbm5b63zc3r5NwL4VK3uPGouHv51eeaHM3tNWXTqZu865",
  "key12": "5DR4Lg6tc7XRCMqAV2fyueUw795m7rfH51PYvHC9z27QBBVojKQEEfZL4gyxo3db6Q7pj4TWhcGoQvRi6xNiraKu",
  "key13": "24htjSCqiwXba6dHZBrGf5sAzLU6YW7HdpzXuPJPfU3s8iCGnwc9XbMqLAM8WXHupEYZ47etJqXGxA6iLr3PHLt7",
  "key14": "4SgY1qGab471YEKfcBDudzGA6mZdw5PckuLfWp96GjJJLZGVhWd1c7WCbvzDKeK8jtwZCx7eCQGyMLuKgYU1WHo8",
  "key15": "3EYZZ4JS1DfPKdk1BWNDsUxVHLmNMv3N8kSPuZxYkXAraVvB5NgydeCCKksU7cUnRUSv7BcqCZ5t3rbJLUX7bY2z",
  "key16": "4eQwhjEG2f3JGtteoTina654whmHwu2Rp2NXdu7npneErXeAvMGLmjjdE7UnzzCSidBDc1YSYtMBwR6DFstxuaWE",
  "key17": "2pSmWF21VMMkz8eLT8F1zBeAF1JyXpgmD1yFoXugFXqQgtV9q9RbF15uqPX91SVQCNYk1WR1HqP5yyp4VUVcMMVZ",
  "key18": "4pZDqZoqDZqB5VteuB4D5cjqHiR4ugRHNe7bYkhEPRbTJgnXziEMkPXNwDx5q616gcQs6LWhFdoSRPExwLVPaxMg",
  "key19": "3gkAX1RH5Gmvzm4wKTDyhVGUN1Aa9nRnBxZ7wYV8Q2UToHsQ5n1R1ktJ4JuRRyUNu7Gr57saxfiubvtAibiWKSp2",
  "key20": "4Pjx22UWd8fbtfh49FYnAibu41Ad2EyxjcF3CGCQuASDShNFRkBwMEBtXpK5qijsZumQdNxJA6fqhVxZpGTpDzPx",
  "key21": "5nBEgco3zrJeVohzNDXqwYLE3pczEy4duCaRMVD2VjqPwWkPpyDfRABENtj4ib15Fg5tUjKcNe256ydAEK47fJGE",
  "key22": "5mtAiEVTe2wGw7Cm7zip5Yjg2dBeW9oss1DV1vGfyaDfbhcGH8ygarveLWvnfbsypM9KnEyoVTJU9UHxeMYnXoqb",
  "key23": "4a2gyYHwG1Eqm8Da2yUmS69qrQWMWY3TSNtjhkSrdonUhQ6t3MYkwNvtAeA8TE4Dnxj9m3CmNe4Sk1koN4ZBZEsY",
  "key24": "5onLajqV2BsjKffXT34rAbPWoEBkaJhzkzJUJQy8pweQKr7qEfx6KVY8xCaPQC4WtUN8FSF2XBu6CMVMQnpHYU7x",
  "key25": "5BEep6DRLeW5iqRDhn62k2nBkxfhmjHqfh9XPR4knxkKsjmANXXiMrCosrQL17fJHhv2DJJE5ZZ62pGztkKUE46S",
  "key26": "5KNr8Etvvi2oVtUUW6uAucKcLrmeSTcTLPj1F7SnedWC9fzUtsc8UtaodnPu57V3oqDXACw5WHFJEiTgYNAZxvj9",
  "key27": "2wcaWcb3DKjVueZUR7XH6ycFrwVBWwhnEkscSu4cWAgzyMTDFSMh35ooKxH6Qj1tsbGAWvk8TJ2P7QALjVs48XXq",
  "key28": "3YUp17bx1ePDkG9HS4hqxfu9JpGUWcbj1GTJ4JAyBxsD7bFYNdWp12rtxszHRAHgSbAR5L2CpLwNNhzxnjfLu84T",
  "key29": "2FKHXYAZx7ceKgEeXotVkQKNJVzsYyssqZTQ6LPB4gzG6ATGBN12gTLfSHVG1anc5vwYKCUpNtfPJhLXKCUGn1jf",
  "key30": "4JasLsvMQ4cVbZXmqgcnQE6Hf5jGdFwqseEVjYK24fW3tbxrEXhKvkM12SJvtrqH59cAnD1p7Z6eArGDF9qiw2WV",
  "key31": "42PHbT9UrnekHCA81zhxWD7wuqhQcno2jZF4Pgq4VuHwJNCSY2WAi4hCdPduJ5LTCR17L5SRM9VNDkYjoTT8mPKp",
  "key32": "zX8FXYeCRcBmmmVvQiRjS5o4ZBvNAkv21jQtEYyeVDN1Y78tB2xjpFW7hAy9ZEBerTNLmzD2XF7n8bMjvjgENXU",
  "key33": "3sHkkMimusLiDnyvrkfCmy3DkpEhNQGNYfuBxQxFwhoAdAaDdcuEvc5VjLknLraHVEpLN6WoBgo54bD1k3DDyhvG",
  "key34": "3qdtcYhmUvsbzY66VHNrAgG1MXMQepKwFmXfSvNFZWrJjsybVMS14zCAkRcPiPCu1rsyx3HDdGJ3agvFEFepHK5R",
  "key35": "3tm74XLX4RRNGefJ3n64nRRFbtQtXhgPd6651NhFY6VJ9MmqDC7cUZHwr99yv4DC5xMJfGZa1uQnq4SQeGh44exx",
  "key36": "2Si2BW8whPyU991iCpWvYUJDJy72Hh1DX79Ddq78GEesZQxtcG1YcpXjVVT8kGHjYC7pYL923DLyMU3jJRsFiHcS",
  "key37": "4BWwbfgYQsC9bPmT3aBGmW2DfoRkxW5swS3ZNbkwFbLaB6PeDBZo6eqfy22vAFoSRnMyCiuviL9PHPLqhuNhRn7R",
  "key38": "3mjdQWFKmzyeC5CkkX5BjEUt7ftovhJGy5R8T4ppveTvB1YNydogG3y2SWUPkUk296tRuHddm6wFbijsBpFzkuqr",
  "key39": "2FJUrQKtLuaneyBLtnX8xBQeWX7GozetScjRJXX1KUwuxE9iJVBhszzKvSGVGxw4v9AntTjhKc12CnP4CGxNUJBd",
  "key40": "4yYqpJvWfpqNiuTCKJba8fmBrgtMzEs3u8pM8DS9sJjSkvT4FNGsNA35N7YSd786j9GHFjDostUw7nc9og9nNX5P",
  "key41": "3qqWCuR71cgLZT8LSNSZbJrvhuVi2N6L1EyD4dLVR8ixk2tvrdzL3ufR8W1t4n4grcRpbC5hBQUjZ24HYBQxqXrs",
  "key42": "2Hg2YRkVd8s4L3C5SM3aL3WJpkJE9rL7gepBvgfSHzKD6qxHrL1se4cn8Phcd3irxXF24dh66XxnAMqvummFGx5H",
  "key43": "CfeaAti6PUp6Scx6yyxQ27uSP1CMZAY5Qo47zG67ME728iPaUN2pVC27WHaS9SziuUv84S5mEyimQmjgq5vd6Ao",
  "key44": "3HWr6p4k86g3fQ8g4oJXC7A1N4zwqBRwvmZwYqDoLnvTyWxhwuUA35FwUnvSuKUp6EnKBRv1ZziYhZKUjW4aLnnp",
  "key45": "3ndjrN947GCU2J9HnknNfkVD9JVBAKyTRbGHu6kDK5BRbjHiTnviJ3YdpgqpHTwTaarjb2EUAkFZubbcDMzWJF2n",
  "key46": "2hGthseg4REos1u3THSb8edxSDsKzERcbGgND5BHELqbMB1XqeyZyccPZnYWL4NNADCB6zDeC7LBA7rsURJrXVYP",
  "key47": "5ni3jdcCYSq9kkgh3EWrQt7mAt3Fwu4VW3LxGQs8ABmDe1pwtjS9YL2LyjKn1CBtmc9gazDLi3EFWLyxKzU5ArJL",
  "key48": "4XZhaEytPKrCUXmEAenkUVHAU4DRZ3ATzs7vcjdzDEgsMv2FWFHttstCdhkzAMBfTmxtJGWRiEQwoU2j4hxZxYC2"
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
