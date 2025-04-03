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
    "4dFy9581Rj9iJ6qCeRnyh2YAnxDfmxeNZ1TtX3GJ8SSuxavpeYW2GQYzwFekg2dSZJPeTN54ZhykMrphPLMvwAS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hrf2DRPGV68KR6F6oc9ZLieUBeUFWEYH7gxWka6GYGoyLhgBDjR3nvRHEmPEUtvbCcccqQ9Jyrqt4XQEwvMD3ww",
  "key1": "ub6wBUH9pSZdWkHyHLiNfbgaUbCm3LU16KX1FebkvpZpnpRPWi1ZjhNKsSXsoEJA5Rfs1djoyw4P4Ht3ApBPp9Z",
  "key2": "2CjbgG1wwGptPBv27VeaNWr4Qu6hRxt1FPuqpgv28xSn5sYy1CJBUYysNdQaKsc2H6Jy2aaQKhU31DUS62i1dkWQ",
  "key3": "3ADsHKhr1yMQ8phhh7RQtbK9By3vKJ3iLTtme9cXHm6kQiC8NjzdNbuTuAyv3J2KhFcB3uH6a2yfo1hQeBRCwsU8",
  "key4": "HRMAcSy7VZweBfbbWgFCPAwYHpXTqsXgN5HXq9GCHwrcYmRovkW1Hd4mh19UwzKTNmD5VNJtvGk9QaHHYjeMRee",
  "key5": "49RuFrcqjyDpU23wAs4UusDQg84WsZ25LbEf1gv4MvtiwugUhN1vHzoQAYVRvaMyMQEVxU9mra5YUBpJv3ELKeRW",
  "key6": "39dvabFrJ7HXaUAjVTZ6dVV7CZJ5JXrVxcyMVr3vXSHZbSDuZBGdw4TUXaQaFf3bNZaCWb9zZKti7mQ9DLbgrB7R",
  "key7": "2mBGrKG1FU26Howq8jfjPpzfK3GwFqVwEiJtzgG3gcKVmf9oZyJJ9bNUjEcZEN2LYoeH5ZnJhqKo9afatQpiL3F8",
  "key8": "2fRdtBNS5uHR1gVwbokqppFo79sdBXhA8eYtPav7xkpQjjoGEzDe6iwbnQfAvA4yZdUjLhZY9wxz7EbYJTbduZr1",
  "key9": "2ckXPp9RVMA189CfekTjG3FkQ9iFdUZKGDsk4BTJ25oTZbRz5P4sJ5pT9v6ViyNat3e4dPaeBB3ASmkWQ42dcboM",
  "key10": "5yq58cDzMdqMp4fV4mP3Kdpjkj2j23EntoPuCwi8j2zU9bgdu8gdTSCSaVHBsw6iqBZcmk5n1SMbXBRxyzk6Fmed",
  "key11": "4esniYBd21EjNuuHojGnjaPcvDoCueXYKSGbeyPpCcBmnLhHEu4Ti1bT8WmY3bD7EdATFqEe1ffBbcpStBD9WgZ3",
  "key12": "5P8CyMStEfDFnPXK7vNPrUDKewYVH4WnY1j7zgmFQ2dEvKzZ4LFCTNNYwN2Jm944pHheK3NwWPs38oKLUQYt8rbp",
  "key13": "2bsR5BiNZY6S2RSgJJhpFNyjgQTpoXLzYwzQRWtLcNFyL1ZspUvn893per5Nbp7sGTWZA8g2JAmJXSNBLsWVTjJA",
  "key14": "tidbHvdycsT53AUsLpxNdjSAKd8oDWzhNPLVD2iyqM33GBhz9g8diDMqhaP7qr5AUXV8xDRxZ67XD6hHvFoQi36",
  "key15": "MSni7HD2d7wgBzNbZhvDRPfSAcWUhLfxDfgGnr2N4zLmTFWoaj4KGdCJyfVn3vsMT8EqR1Qg7ix1EctxRywJapa",
  "key16": "5xVvX36JBZxySasTEWimcaeBhkqhVNoiHTyXZMr9xbo4ymcMPHbcwMcRgeNQGtx4QKZugXvH1S4fz8AfH7Cj9kC",
  "key17": "WjortpEFNVFvmjYL75tLkRi6UwrGsjdo1u4mxamx8CBcCCzRNS6Dq9KcnegmrTZMQ1v4sYv4tt25vcEkdWJrDBi",
  "key18": "3W1uB27FnU2jf98BA75WfMhMVLyRD7BCR4MYwuM9UcHLDDiqFnL3uM999VozagYMT2h9AssE9mRXYrVuWByWzo55",
  "key19": "4ZaKNDz5Q5qZiHcheMLqY2mJoCqouUgTdeFkuQuqpHhAtiZthdUp3HE4ygn89imwaCTj7ANiCXUiqUt4bQY87voa",
  "key20": "4t36yd6PXHi47SX7zLBhoUv7L5XcbW2PEHEjF5x5Npop7Y8P7niJEL379VykbCyPVN1rQWu6ngnrEGzJ2CCDNU51",
  "key21": "3eV7PcasnVX4L1k63RHD2UVj9buUvbkffSobFx15rwsmg1DSBC4k5hNUUpvCZWSh6wjRZSqr1WK7RgHeN5B1ce4X",
  "key22": "3rPXkPLiVToxRgvNA7cHu9yozrbXmVwgSWVjTj3WkxTNmSNBHFi8vroNB5D7Xd3ZPXxnrJqvxeyXxaLKPm8DES1v",
  "key23": "5de9zeUzJSskM92ArrUToMf6niQtF6YcLmWywjusNnTWuD24ukRaDBrLkgx9hzTT9iY3nRUVVhZ2wuykUCTUg3bo",
  "key24": "3nENmLwA1LLcveSsmCqPzEhPseV81mdXz328tjxvawuqu5Pnc1XHpVjDex2VDwsJxtdDzvUhGfjJsBqhBTLVW1sD",
  "key25": "2pRRvBuc17q4uRH2VFN3Hgr5zbkZKDRLERcScf9rwQy3eh6pYjNqRsKWPBv8pBh4EoK231Rb4e7Ho5jkFaAjDhki",
  "key26": "4GB2C3tREvGGMUZjiqEKjmo5C9yueCN13FrgY8rXwHQLg3nT2fL23p3XLLjt7dFYfJkYBB2DgcpC3rZyQDXRDKfR",
  "key27": "4WiPxhSCWAJWf2brU2LBnU76vXksNwF8FUoHW18d9y5VngAB1BcnrLDDa25TWoonL3hvvp6KzxitvR4QcWAWDaxN",
  "key28": "23Jst2h9NdZjTEVHvH19CSsctFgqJtLTg3y8wCKyC3QWUVq8BBkaNtTVLac1EuQd2ddh8tJosfNhqzXj58CuqwW9",
  "key29": "418VVszZbn1BVsTkrbyA5k5kbzPnaLDyRxkzcMxBRJGEzJH4wjcGUZ4y3BownYsP2KA33gZr7iKdeiSpQ6co26xT",
  "key30": "4A6eUpfh68Sh2Wb25b3xtke9gcrDCpdwa9RhWpYcoakWEyFXhw55NdXenWP8uDfA7unNTjt9u71u2fabigXhm25u",
  "key31": "5iyx6R9fY8BMj6D21a8xNL6BFNDiHYCdN1TiT52rpvMM99kjW4AqHwM667foEtwQu39ERD44iwmHvYDrmAtyQBae",
  "key32": "63BX8eqDDNBxNEAFMY6GSMPqRkefduLydWuWPBVjQ5KPAGnEM6KWerPx4kMe6a7REo9YZ5QUppoBUWu2z2qa16vJ",
  "key33": "4ZFSbyq9BnEBvAVv9BtCmZ5cwxzdThm3E1VMfDkPLBwBxSnFm13qVwYVe55RyD7NKnXoe5mUKaJF5sr9iDtgJSWX",
  "key34": "JjaLs37ckgWeXuEWbz6uWwhpumaykxCLEySMzPpsqXyrBDaaKYNcfytfcnDyvSHegY12pwJMXFNh5oueUP1W3GR",
  "key35": "2VwYTfUGDhoUgYzonmfYyakzdDvtiV26tknKpA3AdrfJ2NWpC1E4h1peayAj5Zb1N46LFJi87KTtEThpZgAGRqhs",
  "key36": "3L611N6XCamUw3cNsFFex5V3fpQZHxxMM3hCDNKGT45W5QQYXjouFmZ29ets7kVg6TiVQwSWvKJamnFM2w4ZJWhr",
  "key37": "62fkfgWsPawVZEuRum3jMjZ9r9xZNKkLDWkMsZGJqU6Gn7oc7VrXaQ37jb1rLxSM1RczkunGPxcpGBE7a13zHJdJ",
  "key38": "4qkSSZsu8HzYUs2y5zSD5vnRZYe6Avpi5FNUVVdbqDExjWfFVXCLvMvVnLuHTA5W9FcZWrRA1gRvEKQVWj8KWPDZ",
  "key39": "5hRoyArzgoHvkssNE3eC8jGJvAi4VBUp4qD7FefF157NWoYjTr6skM3ZcNfeUqBCWiT3xqWB7xCsTWDhPxLKpdeq",
  "key40": "5VTkR32KS1BmhKbeSTSiVgGhwj4e3gfePiSWpMKghc5YZb3ABpKKKew6dNsfycWQd9ugHLEp4gjmtcdwajUYnXES",
  "key41": "yz8uVfni4MtYVFPstnsanx9byVaVrJBJ9qEbXFmDPzp4kB1YQoYTEt5mTr5hiPyiEoM1ur6NVQVj993M97Md9Rg"
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
