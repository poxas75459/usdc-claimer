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
    "5VpYYjg2FJLjqLqzraAJ4Fs7EunmBQUSMwf6wqt7n1LpFgqPEATAy2hmPbQJe7QbFwteZFmFotgoc5NaB6zfsgkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxXQ3cWV4GUv1m3k2WRPd7kFTiVgan1QYhtd33Mx52rZPUp6rKmcBrD6pRuH4sbxHLJKaYaFprTu6qjAxo1vmBN",
  "key1": "2nJPs5GEE65MA33GpyyVhhDACfXQjCw1pbcee849nFsAMxdSDTbD5qSNYE2kWAjr1WTJ54XPpuWiF8fHHiqnmLDs",
  "key2": "3nRMUtqFjacpJAxpNr6rGBfjviuNddbnd1uAC9z1U9FVxwriYPyNgcXXvigVbBGbgc9hBRkxwqUe3tUMVVjdtpFm",
  "key3": "3SmVkKFpxxuKfMPKkxJEJAkaMqBD7pWa4yxoReUUM9ifWH9RLV2RiNswFg5QXpzLCrw4HNbqbicZNciTHuWDtvqw",
  "key4": "2Gf3GYnvMs22fPm7Rcw8TMrfgMUwaXvKJx83zrKjEnLzbppYwfh4jXBY8o9NY8iRPCzBpbECqBKUcVsjf3eWEmuV",
  "key5": "3RdPvTVb4mWfTHbERaJEuoGgVfpVprQCTReQKfGE7BMexVRtFrFZsxxSTWhiS395hoq3EuwFCT8wNHvqDELuDiao",
  "key6": "5aQ3wMvvjdiC9fbN4EyeuCKcnkBWttZexoT8GSTyybWWWKFRL35H2wgQA83FkBgnutF5uFWm3SwQdxUfoAZ3z2w1",
  "key7": "3nJd2xAK7K1svfr3TzDzomNARu1NkeNrybu9jdPjqbUGgTxLqZambcUNbjr9nwzLE62JXXXcuEYRCiPhzFUh1yfZ",
  "key8": "5ovFKDbeMxQSemf9FH85juydCRgYaBZkVBVTsLLQQZtWxH6W3YJfAvPo46fuCNWRUqTbx9aEKgK1LFxkbUDWxDDj",
  "key9": "wNCCmerGFLzYCWyxhUPBhFXB4PZ9cjXwRquJLnge5HdHPiHbY9XcLBk3LBMVRRo5a9LWJsn2ygSNUXftGj8i8h9",
  "key10": "zdsn1uLFf4GEJfTtm9SZY1xe76fJNK6ovZg2BXdACtguoZoKayj4Q1VQixv7ji2fyjAmDoNZujrVRdYmwgdvFvG",
  "key11": "55bEVBU4FvCdvdfbonmYDy6VXwh9xQiArAR4idHzCiX8CtchSMkCoxSxfXuckFSwKGDj9W74bj5N2aVeUtK97TVA",
  "key12": "4L2Biy3rStSaQFkmRZVU6jKcS83aSMVNWo7RGRsiCV6MfJMe5Zxg788U1rioqdppjXb3tDLYQdm4ckShGhtoQwaS",
  "key13": "2fuKqaBwmFPHMdd6DmgN1rUoL2X5DUi1suEJiZejr4BEQhEVrwLVtqzTkL79Jhw9Xd468EPcXzG8apdi8DiXD3eq",
  "key14": "5ea6EDoKkQD8NiCc7k2MDemPpxkbC6CyQSYed54wwXYV1i4hZ2w4rXsLRmxVWx6D5wZvbfxcpoihd5yPqQEqD2aN",
  "key15": "3t1BmsX1ZzA8yE6qb6vvz6w5G4oZyy4nafW1S5LtnwBeuHwhwys56c4h7u5HgVfvw7rpHXaARU86eWbecs9ish1F",
  "key16": "5LVAynu2cDEZx2hVB2y8scikdNH3WVNfUc2L8SqnDddZJnXoVMBMupXp3MCekmG3dfFzbh3Lnp4EnxGJSGLtx8zF",
  "key17": "LthvubKhbNzqsP7YtJUM5KTUs7MAvn6hJchCERmwd4W6NZoL5JpafEL5ZWSc6oRrm7hLZhSuoto6NKeGcDtDm7i",
  "key18": "d6FjNcFWtns26hxoQdSy4QL2WRa9Ut6hNqF1tee6eachof657ZZmvmC8utiAhPBGGD9db1iVkhkUYg5FwB621rF",
  "key19": "4GNiwoBNDxhepTbnBBsSdidQ5dJzVq98PJHMNML9j12SfMpnTiTLccLKi52ervUjPgNoqssBbUgCkBo5EDfMLYpa",
  "key20": "4WHS3x68FA9b6pDP4ZP2VbeTWE1FTna5mnKDM6yh58omRNB9mZDC99AqDtkC8Eo8N2J3ecR3iaJsXmcNiVrWohss",
  "key21": "CinwU3VDyNrKZEAX1fj5TNzmP3eLD1eYUccp8ujYvkXqcJ6fhzzcYFMJUWQAhEoJvojwyTB5vcziFs8AHchHRjq",
  "key22": "2PJXb7hNWRVuUy61Yn3dcffEJ9Wh7kC27n5xqx78CYF9QUj92HxAzWaqjphaudE9mucezowLM9Mg2fDyE2gVNduX",
  "key23": "5uiJNLCcdFPmg9vQGt11G33UfnEPv99Zr88jF8dBdhs5a8S15tSrKh3mFVBJoqBs9aHurQ87mZvNbh9iUBVkmYrD",
  "key24": "RfuNwwhaYshWXfn9PSfAxK2cfS2Tx5K4BYmz33rCVangW7aSt45QfpgMPN5p2juomnt56LJFAN5ZCdhZGbZrJF3",
  "key25": "3Sa5KQCDqp7nC29D4Bt5y1kmBeHPZyCANQazVdEqFKMphqpFXpK7jDBrugoj9ZSVN5feaURXAsUof35jGPAGvxDw",
  "key26": "27DTMgUu3Rrutfz9eg4LAWNhFTWXhaHRGNGg3Nf1qoPDmQynWEXW3xDnQ3897ahx54FjnV9bAzFvtHhp7P3XTFse",
  "key27": "2PC1L8yn2SbZBakMkRRdVBTvtPFC4hQ7BQnjYqHLof9UD6E82CwHnXCHyqYLpJNCGp78fTokBNMDWh8XsjTRSKsw",
  "key28": "4aXqwAA4iRvZ2gmvnD8TV1YiDLJJtgTBjsf5XWmMEk3LeejjSUjc9idwwGyodDZ3zs5FKoFkeLTug5HkP73FfsjR",
  "key29": "4rDniuC474DT5fk4khgE4QzjNF1nHEno4HTBKeLyJVBpGrYdKgPjRyF49XHnJXoy7L9kQA5Xg757tUkrDmaNj6ZV",
  "key30": "5rpKyPe3LDJTJxC4Y7tPkkmXfkhEKVB5kP7DbrDbPE1CBjeqhQZT4LdpWxVCAUmy9F34DDSWF81U8m1ajseBzTrh",
  "key31": "3beSUsPv4uHyiaqgaHTP2X6YqMZ5nFHiKMipKmHHG2tNaXfPixe5AG9bmCtnrML7PjUVh2W2A91ms1V2bpPG5NQ1",
  "key32": "2Bs5nGTgeN5GhFDtemPQo825YvqjTbEFDLjUvLtJCqvpAz1h1M38K8Rk49RQ8agqJWzZkZMQ3SkGYjLiJmEiM7X9",
  "key33": "mU5U3qXtEuN6k4iCtJJm3PM7ZWYkKt7hNnnDpSsLtB6oKURJn5v7m3ZtbkykyWpiYCXsmnbKTHEQt8XMMjQ1PZS",
  "key34": "NXeMdVUTUBdBxVbLsz2QDuds41NmkzpzFXGEKL2puo2MZkH18VLU8n2R8gAD2xD1z6ASiDj8wG9cCaiPi8AZuxX",
  "key35": "3DZapf66BL6Hk7HUXNiG4SUnt9hDWFGioXwMBytveBQ4usZjkUmqGzfcgG4c8Uti1hxNRPSS8WQBv3Nu14cKHwF7",
  "key36": "53Q56QfTSs2WhHvwYwzz7fe3sKXWRigUHaXhV5mVNtBDKvW3og97ZtM6HM9H4CQZYQL1ijLBZo8kB8fzAC1LkEwZ",
  "key37": "3Stsby5UbgRUGMCuRYpGTj1RgikkpaCxTPp12fH6LYpT1PaGLLfktpTefBGhYrS2FXbcuKBBtvywiYVaXpmQxcUH",
  "key38": "51Fx8eHAXzuSMRH28MaUdCxMXSsVmozJKrryzXxHGJGzQMc4Fhrbx1W8hTnZVJ3TnhvQWoXLwNTFUHCeAWMhqVhb",
  "key39": "HbnLMrVC8H7vhqiyRbFi44pJTAPFBC1ikq1w2uh1MCV39ESkz2jFEsoXemfP6dJKjNQRXMMj7tNg5bGB4JNzRwY",
  "key40": "2KHph7kdjiWjFaW4NQs9YZvseo7SpCCUdmQTMcX6gjHgBJzvPWRTcbVzLp9DqN2ZYXqpHZRBd9FVdS9pBqcdcATG",
  "key41": "3mYCUWvxSHeRAEbrgNur5KacWodHPWGHurXNEnMMwXYNRoETcfgiHLCLV2M3v72LJN3RKh3SEmYXLMHcopFqWteZ",
  "key42": "4QJVp9SNRftScp6kYHMU4cTcUy3BFz7VC7dby6zQckuvBfnB8wCoSBdCbwFNx44JogBjx7g3mfQkACQ5DwtEG1Fd",
  "key43": "4nCgeCo6j6Kdnhrwvwq9vR5XdZFtcj6dgHhST6SG7BKP5wBRUv3Bs4XAE68CnqDY9D2datg7GJPYQAGKperLs2TP",
  "key44": "4cpDkADA1Y9L1hvVnWLHcKRvpoQCAaekjWL7YMWrmVwLGJ12128vRjPaSS8pByQxDC4DDWbpxS87huShc2KY6uW6",
  "key45": "22usZPLR9ALmTrCaKrDA6o3SGChifrPS7d9GhrHCU3hD6PPpathM3QfjNaazegxhh9dHoWo6k79v94AqKWbMaLgE"
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
