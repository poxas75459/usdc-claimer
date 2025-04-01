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
    "5oozwp8kqoWaP6ZDhxDBzYusvJBfR7QWg6fc2EJuvTem4YtkRrwAbgPPy7ULQ878Ti1eqWjysyNs2eWr6K9HWTge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWpQwceVdQmXW3jnPEDzxP7egegqjX3D2NQcUtRbaddRUKbfcSyJGfgpnxJYcWjLENigq1t17JkyYmsfwJEwPSH",
  "key1": "3F135f6TggbCzuxoaHWMoZuWNgm5CUA7W6gPcTWMTi6ZMEXsrYhb9VgEacZsj5SAxiumpGfFuQBxPfNEsxG3goBP",
  "key2": "31oFWPzXzkUxxvFK2fc9Lt2s6Q346soQywR19wCE6YGKBuiaq6HedNkQknWT7qtbToFDiWBJy58Q5NVKYozWq6UA",
  "key3": "2oHuMrMJdN8R42i9iSZtrZaxcBzYd1cmifb87Y3zkysUC62p6xxeKYdXa7r2ycPDT5FXEF9u3BZKVsi4KQUHYAaC",
  "key4": "58FoPTeZgVoDJtjsmyqGTnGTz5ASNp47YuXi9bNGMtwH8UhgBj8muKZFJeTi5xHqR9HrmcuqjsJTJhzb9CWuTFpH",
  "key5": "2m2xg6zK47yqbFzfUJ8tq66FZuUtCgqjAYH2tgsgADiG7jkSCnJYPda9gFdQjPFfEd6iazTAUYZuQVhNB6kEGJx",
  "key6": "4UqaLm9jUo9BRwpATdAFGXb6MjRB9iWxqN4rMTS7ah2Sk8ajVdWsezEKZUAYbzKWfSc7i6DSAQ5574pd4rZzDoRJ",
  "key7": "4oe4nFy2BDUv698HkjJ1X3FAA6iuju7hL1JBBsWxqqqUghUinF9ec6CzJB2hz85aKE7GBxueeJmWt3p2MZg7DXYJ",
  "key8": "2iuR6Z3y5LXN8ucDiogNNdc3yMpveLW5Bp9gNYcjDfC2u5J4uAUd6kBLfJ4uMUWmaTBeBkdYBzW7Em4kSFm6xEEw",
  "key9": "3dtHTRwLeVJSpuZYqDijRi84hUWU2pHMz3169rAoGHBksBQg1sAmXD8NzArSehjdtGnMdcasSrkjobictVUfewgS",
  "key10": "62PfwzY7RoJPFcKbr9PMcPyRkZbsRkzFXsAZowJp7idH4nYoucH7xSRWmtqcsTXuU2K5DxqRrw15BKLtMRkishdH",
  "key11": "4PggzoFTLXjHkcd9m3PtC4zR2SyK8QyDH6Txzv5Ez7J7DkQAiEzVuDZ2Y7LUjMu5w6ZxN59BqSZjFm85KV2pMPSt",
  "key12": "61FCP7NGax5mjLXnE1LfEYPFKnR1tSuJ19vE1VGggviBPDubAPRvhsTBugvGbdK61zLcmYvWSgF4x8UByevL6SiZ",
  "key13": "3SSREKSYPZd1iWyH8M2uGQNuxYaarxFsfJqDwrenp3B2cn9sXcQpfR6JnYUx6Q34mg9E9uKo9XU7LRqeYuWVmFTm",
  "key14": "363viDLADVmknms9Pb6cP6t7rBN9JvfGmuXapGzCTPSjKnPedFmr7dRehmEfvcuh7oYUZRheSvybBnYHwZLe24G8",
  "key15": "2K785baPcuhgPdvE8PMzTXk3nbkum7eivNk3QLneJizLBH2zZDUtLn7VJVasCoRAPTjTRZvK2hxM7QpzMNKN3R7y",
  "key16": "2EfiTHNb81kFPrZqGgaLAnC8ZYgezki9SghVvUGJuYk6Bt4T4PDxR4bqgdBsDgn6MDma6k5eXY71bf3LNt55vfR5",
  "key17": "2bhDXLYsmZA94RXKc6JoRuSgDUa17ARq9LJ8TDLHHUdtTNwDQewhyJe8HvXvMcAcbxyRnqsHXyEUWWurigVCBDdF",
  "key18": "3p9cAVEYXWJm3Z4suepr6PdcQtLUnf4CFKSShzxRidXjEkeNrZkoauXBX1nDZUEBTWLqdsSYJeczxdVVmUWtSfxs",
  "key19": "4j9dzJN3m9Y5MCE3tyB4XviLUCpYVvrdgxHsfbaL7E9JJnsbWtmdpnnrr1PFWxBa5ckcFTTm8AM4ifRncV6i4Kky",
  "key20": "4B5WYTZcKHi6wrRuxgVTMGWYnFPMqh1AToMeVZHtjLddfwk2GMrbggm5kH5875xcoaDWtfWfHrFV1Yukk4Twnz8Q",
  "key21": "4A8YUf4q8pVwVs9Cz51fDtvic7Nyxnfcvw1p7xyjjB4GVZ8oziZzv2VbY6YiMascyRcRWxv2w61JLiVU9ggSHfxd",
  "key22": "gebvytxR2EJoU6dnhmtm6n8U7KTuMhhiG7fCFsxpPZQbHo9BfS7jnqEGRP9wB9Yh1pomMaovmaKehsTMjJRwCjv",
  "key23": "5aM2731PNS8PzeER198tkzYZ2mmmG3Bpoe9JWAH9kkLcfSR9hFDXPSYPMZYDd39pBtEqmLUmY8fQqWiXqFw2BBUr",
  "key24": "BzvZ8iLBe5UtfRvvciHnpgFnYCqFCEZuKtMoadoWG6WHa86qarbq6E1ApfS9xEHEKtjuWupDiJHUGaAozeYZRBi",
  "key25": "4azXDmNnBaXWyBN2VGvibsFaRabXJ5YjfoL7mxyynjAYMneBseyNKYqHrM2N6Pa6vP1hHgtsxVZ8iSfHiMrtcSPA",
  "key26": "4pSdpCmtkP9PHxa73TXqsUixi61aT1aJ4k9vXgWwVkXdt1EgdpFVsaxEEqhAfEGznh9o1pJJhWyEV7J8QGnkzMNC",
  "key27": "4WDfuheEMSk2Lw893cvs8vdi4UTqk2KN9y2DSwWhiMZwQfuiX7wwWo8MQWC2F34hULsTheGdKLHJHj2xSEoxH1L9",
  "key28": "KGP35HFf5ftgHy6HfjFv5tkjmwyWP5JtsEyh1WG6GE1XXqjJGHET4ZxUs18SKeUKPgi1F3UzqAMAE6jzNXhRRDV",
  "key29": "GMseoHZ12XEfazdRo8Vruo96T5aJ5Ktvb6sZS3mCS4QBiLsEyETzB976mxCv31tt1idXrJgDSjmbXrCpeAn26LB",
  "key30": "4gZ7fZHuN1xKHwvYSubp4HdJ96naeGpWQbm7qNwjThXY4smNMt31uHf9gtZweLbaBL2TSb4J9tCrhLNWSk61A27N",
  "key31": "28WhJbUpz7UiQrKdqWsDbpydUwvLh6VoDWdw6oiYGLaMwnhe1qBPGN8PxnReeKeuFaj7BKM9FNJZwo1qG4qXxH4y",
  "key32": "2f7DtpkxJWdMkmiDhqnQE9XEeUeHBhKXbp6z4aZ6uni5ztdxrwneQ9KahvgoviYHpXxaoGBtjxbbq8zEnmK8zwnE",
  "key33": "4M9VWGLJgTqq3fEWhbV64KhzDdaLqCEiziYNseyrMYiCPYwtG94HogmncoXUnMU5CScxiTNhmc4DCenvCM6upQnV",
  "key34": "uawUQFdEkbtf4JpM5UkgTfPmth9di7GTvRkfR5WX2RnYV569yhEgad3EhDD4cR9cUKV1evNFqx42XnBdAn1VDcw",
  "key35": "4r98VtALeaPyd9ZByLpUmn83nV7Fz4eP5FWrUS5u3ym4HzzWSW7kXxRkT1Kg585qSNR81oHfaRAYBrxo5RTgWY4k",
  "key36": "2oXpNzYEGjTgDjjHU9d5gSfHf9yYmyB3hSXhQ86fdk9WkomKNGjXAoFpWsffk69cNd7HP5idFfPumTXALeGAmKbt",
  "key37": "4VdzfsGsUTrTnX2qsAMxE76Xg1H3F87JfM5nnphJsaURevMDNkHVsVF719PKRaEyuom5ypr2JwEsJBScwm9MbjJU",
  "key38": "5wQZ3dr8362qurQZvnP54xU3yBFB3hV7rAFgRPCHAg2W27YY9Ybis4xH9r6uai4gxzMEtE5UyzYFUQx6a61Aqrkn",
  "key39": "3kDJSQDGMymtZkjGGRnJKo4s93hsy3Nnaa8WaJD7muFaq8WzN7UCqQf3mj78bZ9E1nXvFwgPFnDceSukttX7opkT",
  "key40": "5KXWcEZ62ViZhQJX3sJXmWpXBCDzkNWibFasanhHs3m1XwrUJ9B8QmsfxFLmqQ2hV6azvhrtpvkjMALXMQY2YFzZ",
  "key41": "2Sa3pMabaX6uzu77D4FMVSVEmG4WLyQR2QDDhh8czWAATUDZveBJX6zfpT6Pw5K5JpCdAhvqxDyzGwUvJ1Mm1QDZ",
  "key42": "4pkEAT7xuGHAUvAr84cRrFNo3vD3gg8RhJbxxhW3EmBWKH9kUqQqJrwYcd1v1WMuJTWcVKz5Csgo8oLPV4h7y5Vk",
  "key43": "2tRTGm6x3Q3AUuvREKHEPetetDiqGTZZ2qsUjA7KZvRGpZgEhENJXuuXU84ctCbnEiEiTEgSvPJmFW9xJ5HtFfr3",
  "key44": "deYxU6FjTt3rbAu6oamqDwECrhAGjDT9WszibvQSEb6dTMGM6uVeLfGzKHYHeP4ADGHY2MSGXC5nbsABaU5TdvB",
  "key45": "27MJHXFerkRcdH6A9QvEydvjxT6x1zBxEpPJJcefcLjgGfSo4UsMbWCDB6LhgPNzgj4PRQNum5VtrzvoafFJEgZ7",
  "key46": "6yR9MqdtBsCC3V1g8Gndp7JS8SEMNeqqiLurEvrbTNZSrYawrLN6zTxQZrJFZtob2TWU9oESkeh1udpARiN4xhQ",
  "key47": "4MZLqHg8sgMaFsCtoJHsnZacfq7MGPKSY8okd8waHuLK96QNqiZhTsJ7TFdfN1tSS7aTpWTjf4TqpKfcCHdrWTiT",
  "key48": "5k9ESCtAfBt4q74d2DLJpHnDB3BK4BCMiTF9kFowWQU4FJZHUfthNLziJrtATvt3GrdxkFZejEewqZHf5a92Ld5Z"
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
