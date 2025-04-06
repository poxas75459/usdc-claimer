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
    "25vpUxzDjVGbtGNDhWsLNbk31pr3DWgYuRP8e2RBBqS4hcCL6XbuYRetN5mAcpXLUF4KtjSoeLqiNDBvZbRbSXh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cNZUaWzCc3LXcAMyveSt2g97HgGXCLTmCtTJCYQXd4yAFg3bP7SUyBjb8TWtvJF4f89KgBA1QPVqXrtbuLhrZU3",
  "key1": "5VPq6tFt32xVQFBs9yuZ9GoiJkwyyMutgKyNBdByrJTTc85MLh7PJwaLnwjRJW5ZsC55MoG7i7YQK7QMMVHeWp6k",
  "key2": "3n45nxfbN92tuAzt3Mqc6rbMWF3Dv9mK1UvtTYpyxi75V28qAtmKW4eigHgzg3JVRbB2wqwf9GnVMsj7fM6Uik2x",
  "key3": "35PrddChWvJNZc7GehNFtqdmM28RHjB4WjYfRLTkDkGqVVEwTTy6mV3Aw3tuw71Kec3Y5t2S5qv5d6PN3J5mE5Vk",
  "key4": "3FS7VVooajiV7sEr6eGwSwKNZhcxipHUapXfLhhgqqivbphhMRQPWtV1h9G3mSEPvY32eAN3yeF9PZFdk3gYYHsk",
  "key5": "rsQiGdU59tB16RKHjpQ9VdrgMQ2nmghfqaX4kvkZXiM5U2DYXhBfUzAJfLpHUTnWMxRPLXfiehNzWLGUyZ9E3dG",
  "key6": "3gqJ1zbpQMCDb1gmCiJnVGW6GFTD6NrxBqSKDmFn9E6Jpij9JBFWAvnnHBHsGChDQbjniJQsENp1Y7QSBVPBrSPb",
  "key7": "4VMyDMpeQRoMRFzrUBVViQsiA6JVTciU51W7roJaPKLvYjZ4SkUuzZQqrneGWiKPB946ZnYN4gsCz2pJ8PuvLZg5",
  "key8": "Zf279MXDvvEoq8uxFVQeT3jVCDM8owFcaDhqNVUftKS6t6Vww7r8f685EPiiaP3R63fCaSSXdoFutkPKRi7ZbvH",
  "key9": "5JHgTZQ9XYKFPpZLMuoeMqdF9WvaqRyEXJYC36VKWBZMeuFfxMgS6eJ1ecbEWEx8jLNqMXmwNLN1HHQGHTwZnWit",
  "key10": "3TskbKDWBMfGSrGRsPaBABWjMfW93SFMDFNf6Y7gkatDrAp8W4cKtVYT6EirY2bjdQfFeBd5YnWBuHPTNdoJXFN9",
  "key11": "NLpmAb61fZtMURZLLmyFUJx88amAX6tSffJf2QBbM7nDhVceuiUMmWLGVByQpEz6VhPcuwE2ibTWNJ4fEGseQNY",
  "key12": "547mVmnpPayQhqfNh1aCPEZ5LEncyAFPsoapzvVvjT5a6GfSWSjAdYUQWYeDUXVzB9QhjDkfP4Xei4roD6taBSX5",
  "key13": "5TSHjsNZ7MQbfMYhVFafsJEi3zJFQCuAmyPQZvGx5k4xwCRNtSiAXBRggC5gJ97hSqhxrR7yWgPnFRiu6rWmPqyw",
  "key14": "2Yn4hzMcct7Tg8unjRFMosQGbHnxd2ZLwNxWcYnDSwEof9YwarZ7Lc3WJQrQreYQW8j3ceWZ7KZ7j19uEecxtN4T",
  "key15": "5tnGDxqu6oNuZUrWsVwwt8UiAzohBzeNNVDhPJb6DR9Jg119pcY18d16kZFCLVpRQ4W34yCKk4vvdJ8b9W5kMX2x",
  "key16": "aZNeWry7u1aQETur6yQDLFj1LjeejXVGKkqgGYmuYoyp7RyiMhDeU97C8GoPQMPtBsEfjHpTeoZhtUMGVfEgFqe",
  "key17": "2HVuDVa5ftpWHbeFRw1ByMJ19XJ4Q2diw9B7BvaFhGHctQwEsSuXqavEVTwkSXDH61Seoe1AiRtTzxwuibUkycY9",
  "key18": "XuL1uu9gcHvrVJ3EoSqEqRrwAg1rdJ4TrkCvkUzkrnop8PPwkeHnJZbrwocSwvUaiBryNLmasaaYKZRZSXBrebo",
  "key19": "41oiZ1GTFmtSNBUfETD2gJNH8wF3JHaDcBPF1cMfNTQ9NuF8FYNghTr67xQim1kwhXucCyMkCouQE4TkwPCHnTNn",
  "key20": "35Td9y1mX713ZbdEuNuJRGW17N2wp9vpUrJEWDrWuEoLvWjdGZHZjeEWVX9UXsR3NAV1KajrBdqdmJbNwiN5VqbL",
  "key21": "4gzDtCPTTLKwTLtLE69v6F33hy8vayHsYuoHYtRYFBAW6XtRcXRcEYvmP7wVVqwpLakJ2SLVDKkqPoUcUi76zybp",
  "key22": "3RJimQcszXko1GC8xhLcW1LQEgC3wTYEjZDkioWbtxo7UJwZkM95To27Lik49TU36Uwq9z6Y9ciBNEyC8TFfcWFq",
  "key23": "2v5oxECP49W5buKnNSxhPjGb8rTZdnYfL5GKhjPLZe48LudB6tp8aaJb9UDML2FLAsSAwHTe6Z1KjCqEvTJqL4iP",
  "key24": "43HdPXrKamLQd2Fo3xnNCWsoeyhQJw6h5Uf7AW5J4mP2KmuEUoauQVBwgmjGmXjVUXGTH73jTciKWhPwVCkMsZhq",
  "key25": "4z5SUe6wgnYWsXbtW8v2Z5c2NwGbD6fyWBLwAz8GfYutgBoB21R5MixNrDhfudz5oHd9YpXrBewjqKghvjj6hQr3",
  "key26": "3HYgNdvS9tWRLeebyL1zyhaRx4eGfJ1egcJRaFBoQiAmf7jEPqtRuuK9gKpmPvJRzf3JqvdEVzReFf5jDbg18UoV",
  "key27": "5i6m9GJiAf1SbXUAexaSU4V4ett7KSn2WSPmg2YNmWgdv8LZ1C651BmfeH11xncxfLBcLR5cruffKtfyXcug1yDV",
  "key28": "gAqUKmautNb4poiGqfGmnmnwiJpc7thhJcVjMtFF2pSicZhg2PvRYqo5r6PwtPP6Ha9egGQkM17DavQo8f6b73s",
  "key29": "3MgNgsx5EG1qEhdDKhbdYonTjLX8gj29QxWnuR1HVn547FRJuNXfcB6iHYue6kibUmxZY1uZg4g8pKZk25iggGk1",
  "key30": "38nMrCmcaciaQoYJvaomz14ZEMic8oAb9617NG1GMDbjVC2vx9VoKbTutXgejC7qksEaLQ7dueJCms33kTcVWt3r",
  "key31": "2pvy8asJC2cWkE7FfPuwCU8iYM32EJtdx7UHvnUPvb2xTenvwY9Vcqw1VMwJNwpXpoPmgm3m1vp8ABhxxU4FakAP",
  "key32": "5cGtrnUc6CUQLKw6jGEhCGxZFDwRJX4dciUAguTAEAtPutCdzgKKknb35hQTrT6Rzvy3JJYoBz5UDiiwdmg4WSZJ",
  "key33": "3DsBHTNZDgbbu8Lrgvwm7tViWpoGNpXbVaeDvcc4LtjwLGZAWdguGa5bHiwidEPybeu9ZMrKjMhfRDd3YULj2AdR",
  "key34": "5A4RAZx4kiAP9CE1qqwF3DRRwooyvgzb4iDZxrcXhwcMMyFXk5h8DEFyyX9XruBC3yQWxAUBS2JaMLVdYyJKgHzC",
  "key35": "2Uijq9pPXoyfaoir2quZdAH5CNX2wxkqZC4kZi47MABUUymqZriFdMCfYbkNjKPnJvjPztcsmKiXYjJHNuT6gARo",
  "key36": "275gEYQuQu9X1YoFizSAxXKfkhMmqEnk9NcvR1M3P8Bvs832h44C9pBBKAVJ6rVezZQKKn3fAbGw9TLsAySRnfR4",
  "key37": "4bo5PTsY88ECjEnYLMNCBkDUCtxwaxnyZh7ZQo31R3g7V4pSweqFdtojvNEYWpjwqr2TfLFrL7acCu9svYoQuAs8",
  "key38": "2a5nzMtfmop2X76Ls7CtgRiheNYYjWrrkUcfytjiGF2AndhP8cwWFKJyraqHaTK2efvQB1LTFnBHk51Ky7mjvxSR",
  "key39": "3vYh8Y7QxkQaqN4HayPDKuA1eSshmK2qZMEUYpWjJid76N4MXeHdeW5xCG8ZjyeRAjrbYmfBnbDAqPKbQKq6xVrZ",
  "key40": "3gtip57eiSEeQ6EK7koYnubrrHfncnE3XCohS9tF7m5kPJZPsiMdVczwzyeXxePH1KG1bw8LHLZ7XLUNucPSCchh",
  "key41": "21tLx5iRJtEgz5EYM3G4VUEByL2hnpUKpBbvpL9KBdhdKcL8spPUyQbkagEZ2tN2yfizgw3bqCiU4pQ48AjaWRsr",
  "key42": "jU2WeZR8qSzrDf6sR5L81JBx6xdDT5KJiUQ8HHoz6ZvLQMgdGoqSD3zRRr1SzPwsDUnFpqvzTQLTyGVRCZAmQBH",
  "key43": "2fEmfqP2KsSVF5qJASD2qQdB6NmXQuZbbDPqtdCj4Pg5bTgBNUK7ERrYALxVMS6qNnWULp1sDFA45MRxUhme87cf"
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
